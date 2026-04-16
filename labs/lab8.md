# Лабораторна робота №8
## CI/CD: GitHub Actions, Docker, Render

**Курс:** Ruby on Rails  
**Балів:** 15  

---

## Мета

Налаштувати повний CI/CD pipeline: автоматичний запуск тестів та лінтера при кожному push, збірку та публікацію Docker-образу на DockerHub, та автоматичний деплой на Render.

---

## Завдання

Налаштувати CI/CD для додатку з Лабораторної №7.

---

## Частина 1 — Підготовка репозиторію

Переконатись що проєкт знаходиться у GitHub-репозиторії. Додати у `README.md` бейдж статусу CI:

```markdown
![CI](https://github.com/<username>/<repo>/actions/workflows/ci.yml/badge.svg)
```

---

## Частина 2 — CI: тести та RuboCop

Створити файл `.github/workflows/ci.yml`:

```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest

    services:
      postgres:
        image: postgres:16
        env:
          POSTGRES_USER: postgres
          POSTGRES_PASSWORD: password
          POSTGRES_DB: todo_app_test
        ports:
          - 5432:5432
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    env:
      RAILS_ENV: test
      DATABASE_URL: postgres://postgres:password@localhost:5432/todo_app_test
      RAILS_MASTER_KEY: ${{ secrets.RAILS_MASTER_KEY }}

    steps:
      - uses: actions/checkout@v4

      - name: Set up Ruby
        uses: ruby/setup-ruby@v1
        with:
          ruby-version: .ruby-version
          bundler-cache: true

      - name: Set up database
        run: bundle exec rails db:schema:load

      - name: Run RuboCop
        run: bundle exec rubocop

      - name: Run RSpec
        run: bundle exec rspec
```

---

## Частина 3 — CD: збірка та push на DockerHub

Створити файл `.github/workflows/docker.yml`:

```yaml
name: Docker

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    needs: test  # запускається тільки якщо CI пройшов

    steps:
      - uses: actions/checkout@v4

      - name: Log in to DockerHub
        uses: docker/login-action@v3
        with:
          username: ${{ secrets.DOCKERHUB_USERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v5
        with:
          push: true
          tags: ${{ secrets.DOCKERHUB_USERNAME }}/todo_app:latest
```

### Налаштування секретів

У GitHub репозиторії (`Settings → Secrets → Actions`) додати:
- `RAILS_MASTER_KEY` — вміст файлу `config/master.key`
- `DOCKERHUB_USERNAME` — ім'я користувача DockerHub
- `DOCKERHUB_TOKEN` — Access Token з DockerHub (`Account Settings → Security`)

---

## Частина 4 — Деплой на Render

### Створення сервісу

1. Зареєструватись на [render.com](https://render.com)
2. Створити новий `Web Service` — підключити GitHub репозиторій
3. Обрати `Docker` як середовище запуску
4. Створити безкоштовну PostgreSQL базу даних (`New → PostgreSQL`)
5. Додати змінну середовища `DATABASE_URL` — скопіювати з Render PostgreSQL

### Автоматичний деплой

Render автоматично деплоїть при кожному push у `main`. Переконатись що у налаштуваннях сервісу увімкнено `Auto-Deploy`.

Після першого деплою виконати міграції через Render Shell:

```bash
bundle exec rails db:migrate
```

---

## Вимоги до реалізації

- Репозиторій на GitHub, всі файли закомічені
- CI workflow запускається на кожен push та pull request
- RuboCop та RSpec проходять у CI
- Docker-образ збирається та публікується на DockerHub після успішного CI
- Додаток задеплоєний на Render та доступний за публічним URL
- `README.md` містить бейдж статусу CI та посилання на задеплоєний додаток

---

## Критерії оцінювання

| Критерій | Балів |
|---|------|
| CI workflow: RuboCop + RSpec з PostgreSQL сервісом | 4 |
| Секрети налаштовані коректно | 1 |
| Docker workflow: збірка та push на DockerHub | 3 |
| Залежність Docker workflow від успішного CI (`needs`) | 1 |
| Деплой на Render, додаток доступний за URL | 4 |
| `README.md` з бейджем та посиланням | 1 |
| Посилання `-1` за кожен hardcoded секрет у коді | -1 |
| **Разом** | **15** |

---

## Питання для захисту

1. Що таке CI та CD? Яка різниця між ними?
2. Навіщо PostgreSQL запускається як `service` у GitHub Actions, а не просто встановлюється?
3. Що таке GitHub Secrets і чому не можна просто вписати токени прямо у workflow файл?
4. Що означає `needs: test` у Docker workflow? Що станеться якщо тести не пройдуть?
5. Чим відрізняється `actions/checkout`, `ruby/setup-ruby` та `docker/build-push-action` — що кожен з них робить?