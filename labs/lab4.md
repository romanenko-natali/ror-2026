# Лабораторна робота №4
## Rails: шаблони, форми, partials, helpers

**Курс:** Ruby on Rails
**Балів:** 10
**Попередня робота:** Лабораторна №3

---

## Мета

Навчитися організовувати шаблони Rails-додатку: виносити спільні частини у partials, використовувати helpers для логіки представлення, підключати Bootstrap для базового стилювання та налаштовувати спільний layout.

---

## Загальне завдання

Покращити додаток з Лабораторної №3 — організувати шаблони, додати навігацію та стилізувати інтерфейс. Предметна область та модель залишаються ті самі, що й у Лабораторній №3 (свій варіант).

---

## Частина 1 — Docker

Rails автоматично генерує `Dockerfile` при створенні проєкту. Ознайомтесь з його вмістом та поясніть у звіті що він робить.

Створити файл `docker-compose.yml` для локального запуску додатку з PostgreSQL:

```yaml
services:
  db:
    image: postgres:16
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    volumes:
      - pgdata:/var/lib/postgresql/data

  web:
    build: .
    command: bash -c "rm -f tmp/pids/server.pid && bundle exec rails s -b 0.0.0.0"
    volumes:
      - .:/rails
    ports:
      - "3000:3000"
    depends_on:
      - db
    environment:
      DATABASE_URL: postgres://postgres:password@db:5432/<app_name>_development

volumes:
  pgdata:
```

> Замініть `<app_name>` на назву свого додатку з Лабораторної №3.

Запустити додаток через Docker хоча б один раз:

```bash
docker-compose up
```

Переконатись що додаток доступний у браузері на `http://localhost:3000`.

---

## Частина 2 — Bootstrap

Підключити Bootstrap через CDN у `app/views/layouts/application.html.erb`:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

Застосувати Bootstrap-класи до:
- таблиць (`table table-striped`)
- форм (`form-control`, `form-label`)
- кнопок (`btn btn-primary`, `btn btn-danger`)
- контейнера сторінки (`container mt-4`)

---

## Частина 3 — Спільний layout та навігація

У `app/views/layouts/application.html.erb` додати навігаційну панель з посиланнями на всі основні сторінки додатку:
- список всіх записів основної моделі
- кастомна сторінка зі своєї Лабораторної №3
- список записів допоміжної моделі
- форма створення нового запису основної моделі

Конкретні шляхи залежать від варіанту (див. розділ "Варіанти" нижче).

---

## Частина 4 — Partials

Винести форму створення/редагування запису основної моделі у partial `app/views/<model_plural>/_form.html.erb`. Використати його у шаблонах `new.html.erb` та `edit.html.erb`:

```erb
<%# new.html.erb %>
<h1>Новий запис</h1>
<%= render 'form', <model>: @<model> %>

<%# edit.html.erb %>
<h1>Редагувати запис</h1>
<%= render 'form', <model>: @<model> %>
```

Форма має містити всі поля моделі. Поле категорії (або жанру/спорту — залежно від варіанту) — випадаючий список з `Модель.pluck(:name)`, як це було зроблено у Лабораторній №3. Поле з enum — випадаючий список через `Модель.<enum>.keys`.

---

## Частина 5 — Helpers

Створити хелпер у `app/helpers/<model_plural>_helper.rb` відповідно до свого варіанту (див. розділ "Варіанти" нижче).

Вимоги до всіх хелперів:
- Винести логіку у модуль `<Model>Helper`, **не писати її у шаблоні**
- Повертати HTML через `content_tag` (або аналогічні Rails-хелпери), а не конкатенацією рядків
- Використати хелпер у шаблонах `index.html.erb` та `show.html.erb`

Приклад для варіанту 1 (`priority_badge`):

```ruby
module TasksHelper
  def priority_badge(task)
    css_class = case task.priority
                when 'high'   then 'badge bg-danger'
                when 'medium' then 'badge bg-warning'
                when 'low'    then 'badge bg-success'
                end
    content_tag(:span, task.priority, class: css_class)
  end
end
```

---

## Вимоги до реалізації

- Bootstrap підключено, базові класи застосовані скрізь
- Навігація присутня на всіх сторінках через layout
- Форма винесена у partial і використовується у `new` та `edit`
- Хелпер винесений у відповідний модуль, **не у шаблон**
- Код шаблонів не містить Ruby-логіки — лише виклики хелперів та відображення даних

---

## Критерії оцінювання

| Критерій | Балів |
|---|------|
| Docker: `docker-compose.yml` створено, додаток запущено | 2 |
| Bootstrap підключено, класи застосовані | 1 |
| Спільний layout з навігацією | 2 |
| Partial `_form.html.erb` для основної моделі | 2 |
| Хелпер реалізовано та використано у шаблонах | 2 |
| Код шаблонів чистий, без логіки | 1 |
| **Разом** | **10** |

---

## Питання для захисту

1. Що таке partial і навіщо він потрібен? Як передати локальну змінну у partial?
2. Що таке layout і як Rails визначає який layout використовувати?
3. Навіщо виносити логіку представлення у helper, а не писати її прямо у шаблоні?
4. Що таке `content_tag` і чим він кращий за звичайний рядок з HTML?
5. Чим відрізняється `<%= %>` від `<% %>` у ERB?

---

## Варіанти

---

### Варіант 1 — Менеджер завдань (To-Do List)

**Модель:** `Task`

**Навігація у layout:**
- Всі завдання (`/tasks`)
- Виконані завдання (`/tasks/completed`)
- Категорії (`/categories`)
- Нове завдання (`/tasks/new`)

**Partial:** `app/views/tasks/_form.html.erb` з полями `title`, `category`, `priority`, `due_date`, `estimated_hours`, `completed`. Поле `category` — випадаючий список з `Category.pluck(:name)`. Поле `priority` — випадаючий список з `Task.priorities.keys`.

**Хелпер:** `priority_badge(task)` у `app/helpers/tasks_helper.rb` — повертає Bootstrap-бейдж відповідного кольору залежно від пріоритету завдання:

- `high` → `badge bg-danger`
- `medium` → `badge bg-warning`
- `low` → `badge bg-success`

---

### Варіант 2 — Каталог фільмів

**Модель:** `Movie`

**Навігація у layout:**
- Всі фільми (`/movies`)
- Переглянуті (`/movies/watched`)
- Жанри (`/genres`)
- Новий фільм (`/movies/new`)

**Partial:** `app/views/movies/_form.html.erb` з полями `title`, `genre`, `director`, `release_date`, `rating`, `status`. Поле `genre` — випадаючий список з `Genre.pluck(:name)`. Поле `status` — випадаючий список з `Movie.statuses.keys`.

**Хелпер:** `rating_badge(movie)` у `app/helpers/movies_helper.rb` — повертає Bootstrap-бейдж відповідного кольору залежно від значення рейтингу:

- `rating >= 8.0` → `badge bg-success` (високий)
- `rating >= 6.0` → `badge bg-warning` (середній)
- `rating < 6.0` → `badge bg-secondary` (низький)

Якщо `rating` не заданий — повернути `badge bg-light` з текстом "немає оцінки".

---

### Варіант 3 — Менеджер рецептів

**Модель:** `Recipe`

**Навігація у layout:**
- Всі рецепти (`/recipes`)
- Опубліковані (`/recipes/published`)
- Категорії (`/categories`)
- Новий рецепт (`/recipes/new`)

**Partial:** `app/views/recipes/_form.html.erb` з полями `title`, `category`, `cooking_time`, `servings`, `difficulty`, `published`. Поле `category` — випадаючий список з `Category.pluck(:name)`. Поле `difficulty` — випадаючий список з `Recipe.difficulties.keys`.

**Хелпер:** `difficulty_badge(recipe)` у `app/helpers/recipes_helper.rb` — повертає Bootstrap-бейдж відповідного кольору залежно від складності рецепту:

- `easy` → `badge bg-success`
- `medium` → `badge bg-warning`
- `hard` → `badge bg-danger`

---

### Варіант 4 — Каталог книг

**Модель:** `Book`

**Навігація у layout:**
- Всі книги (`/books`)
- Прочитані (`/books/read`)
- Жанри (`/genres`)
- Нова книга (`/books/new`)

**Partial:** `app/views/books/_form.html.erb` з полями `title`, `genre`, `publisher`, `published_date`, `pages`, `rating`, `status`. Поле `genre` — випадаючий список з `Genre.pluck(:name)`. Поле `status` — випадаючий список з `Book.statuses.keys`.

**Хелпер:** `status_badge(book)` у `app/helpers/books_helper.rb` — повертає Bootstrap-бейдж відповідного кольору залежно від статусу читання:

- `want_to_read` → `badge bg-secondary`
- `reading` → `badge bg-warning`
- `read` → `badge bg-success`

---

### Варіант 5 — Менеджер навчальних курсів

**Модель:** `Course`

**Навігація у layout:**
- Всі курси (`/courses`)
- Активні (`/courses/active`)
- Категорії (`/categories`)
- Новий курс (`/courses/new`)

**Partial:** `app/views/courses/_form.html.erb` з полями `title`, `category`, `duration_hours`, `start_date`, `end_date`, `price`, `status`, `main_topic`. Поле `category` — випадаючий список з `Category.pluck(:name)`. Поле `status` — випадаючий список з `Course.statuses.keys`.

**Хелпер:** `status_badge(course)` у `app/helpers/courses_helper.rb` — повертає Bootstrap-бейдж відповідного кольору залежно від статусу курсу:

- `draft` → `badge bg-secondary`
- `active` → `badge bg-success`
- `archived` → `badge bg-dark`

---

### Варіант 6 — Органайзер подій

**Модель:** `Event`

**Навігація у layout:**
- Всі події (`/events`)
- Заплановані (`/events/planned`)
- Категорії (`/categories`)
- Нова подія (`/events/new`)

**Partial:** `app/views/events/_form.html.erb` з полями `title`, `category`, `location`, `start_date`, `end_date`, `price`, `status`. Поле `category` — випадаючий список з `Category.pluck(:name)`. Поле `status` — випадаючий список з `Event.statuses.keys`.

**Хелпер:** `status_badge(event)` у `app/helpers/events_helper.rb` — повертає Bootstrap-бейдж відповідного кольору залежно від статусу події:

- `planned` → `badge bg-primary`
- `ongoing` → `badge bg-warning`
- `completed` → `badge bg-success`
- `cancelled` → `badge bg-danger`

---

### Варіант 7 — Менеджер проєктів

**Модель:** `Project`

**Навігація у layout:**
- Всі проєкти (`/projects`)
- Активні (`/projects/in_progress`)
- Категорії (`/categories`)
- Новий проєкт (`/projects/new`)

**Partial:** `app/views/projects/_form.html.erb` з полями `title`, `category`, `client`, `start_date`, `deadline`, `budget`, `status`, `main_tag`. Поле `category` — випадаючий список з `Category.pluck(:name)`. Поле `status` — випадаючий список з `Project.statuses.keys`.

**Хелпер:** `deadline_badge(project)` у `app/helpers/projects_helper.rb` — повертає Bootstrap-бейдж відповідного кольору залежно від того, скільки днів залишилось до дедлайну:

- дедлайн у минулому → `badge bg-danger` з текстом "Прострочено"
- дедлайн сьогодні або протягом 7 днів → `badge bg-warning` з текстом "Скоро"
- дедлайн пізніше ніж через 7 днів → `badge bg-success` з текстом кількістю днів (наприклад, "через 30 днів")

Для порівняння використати `Date.current`. Якщо `deadline` не заданий — повернути `badge bg-secondary` з текстом "без дедлайну".

---

### Варіант 8 — Каталог музичної колекції

**Модель:** `Song`

**Навігація у layout:**
- Всі пісні (`/songs`)
- Прослухані (`/songs/listened`)
- Жанри (`/genres`)
- Нова пісня (`/songs/new`)

**Partial:** `app/views/songs/_form.html.erb` з полями `title`, `genre`, `album`, `release_date`, `duration_seconds`, `rating`, `status`. Поле `genre` — випадаючий список з `Genre.pluck(:name)`. Поле `status` — випадаючий список з `Song.statuses.keys`.

**Хелпер:** `format_duration(song)` у `app/helpers/songs_helper.rb` — повертає тривалість пісні у форматі `M:SS` (наприклад, `354` секунди → `5:54`, `482` секунди → `8:02`). Секунди завжди виводяться з провідним нулем (`3:05`, не `3:5`).

Якщо `duration_seconds` не задане — повернути прочерк (`—`).

Для форматування секунд з провідним нулем використати `format('%02d', seconds)` або `sprintf`.

---

### Варіант 9 — Менеджер витрат

**Модель:** `Expense`

**Навігація у layout:**
- Всі витрати (`/expenses`)
- Оплачені (`/expenses/paid`)
- Категорії (`/categories`)
- Нова витрата (`/expenses/new`)

**Partial:** `app/views/expenses/_form.html.erb` з полями `title`, `category`, `amount`, `date`, `notes`, `payment_method`, `status`. Поле `category` — випадаючий список з `Category.pluck(:name)`. Поле `status` — випадаючий список з `Expense.statuses.keys`.

**Хелпер:** `amount_badge(expense)` у `app/helpers/expenses_helper.rb` — повертає Bootstrap-бейдж відповідного кольору залежно від величини суми:

- `amount < 500` → `badge bg-success` (мала)
- `amount < 5000` → `badge bg-warning` (середня)
- `amount >= 5000` → `badge bg-danger` (велика)

Текст бейджа — відформатоване значення `amount` з двома знаками після коми (наприклад, "450.50 грн"). Для форматування використати `format('%.2f', amount)` або `number_to_currency`.

---

### Варіант 10 — Каталог спортивних змагань

**Модель:** `Competition`

**Навігація у layout:**
- Всі змагання (`/competitions`)
- Майбутні (`/competitions/upcoming`)
- Види спорту (`/sports`)
- Нове змагання (`/competitions/new`)

**Partial:** `app/views/competitions/_form.html.erb` з полями `title`, `sport`, `location`, `start_date`, `end_date`, `prize_fund`, `status`. Поле `sport` — випадаючий список з `Sport.pluck(:name)`. Поле `status` — випадаючий список з `Competition.statuses.keys`.

**Хелпер:** `status_badge(competition)` у `app/helpers/competitions_helper.rb` — повертає Bootstrap-бейдж відповідного кольору залежно від статусу змагання:

- `upcoming` → `badge bg-primary`
- `ongoing` → `badge bg-warning`
- `completed` → `badge bg-success`
- `cancelled` → `badge bg-danger`