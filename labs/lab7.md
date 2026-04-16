# Лабораторна робота №7
## Аутентифікація (Devise) та тестування (RSpec)

**Курс:** Ruby on Rails
**Балів:** 15
**Попередня робота:** Лабораторна №6

---

## Мета

Додати аутентифікацію користувачів через Devise, реалізувати авторизацію на рівні контролера та покрити логіку додатку тестами через RSpec.

---

## Загальне завдання

Розширити додаток з Лабораторної №6 — додати користувачів, прив'язати записи основної моделі до авторів та написати тести. Предметна область — та сама, що й у попередніх роботах.

---

## Частина 1 — Devise

### Встановлення

Додати у `Gemfile`:

```ruby
gem 'devise'
```

Виконати:

```bash
bundle install
rails generate devise:install
rails generate devise User
rails db:migrate
```

### Прив'язка основної моделі до User

Створити міграцію для додавання `user_id` у таблицю основної моделі. Для варіанту 1:

```bash
rails generate migration AddUserRefToTasks user:references
rails db:migrate
```

Для інших варіантів — аналогічно, з відповідною назвою таблиці (`movies`, `recipes`, `books` тощо).

Додати асоціації. Для варіанту 1:

```ruby
class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :recoverable, :rememberable, :validatable
  has_many :tasks, dependent: :destroy
end

class Task < ApplicationRecord
  belongs_to :user
end
```

Для інших варіантів — `has_many :movies`, `has_many :recipes` тощо.

При створенні запису автоматично прив'язувати до поточного користувача:

```ruby
def create
  @task = current_user.tasks.build(task_params)
  ...
end
```

### Відображення

- На сторінці `index` показувати тільки записи поточного користувача
- На сторінці `show` показувати ім'я автора запису
- У навігації показувати email поточного користувача та посилання на логаут

---

## Частина 2 — Авторизація

Додати перевірку авторства у контролер основної моделі. Для варіанту 1:

```ruby
before_action :authenticate_user!
before_action :check_owner!, only: [:edit, :update, :destroy]

private

def check_owner!
  @task = Task.find(params[:id])
  if @task.user != current_user
    redirect_to tasks_path, alert: "Ви не маєте доступу до цього запису"
  end
end
```

Для інших варіантів — аналогічно, зі своєю моделлю та маршрутом.

---

## Частина 3 — RSpec

### Встановлення

Додати у `Gemfile`:

```ruby
group :development, :test do
  gem 'rspec-rails'
  gem 'factory_bot_rails'
end
```

Виконати:

```bash
bundle install
rails generate rspec:install
```

### Фабрики

Створити фабрику для `User` у `spec/factories/users.rb` (однакова для всіх варіантів):

```ruby
FactoryBot.define do
  factory :user do
    sequence(:email) { |n| "user#{n}@example.com" }
    password { "password123" }
  end
end
```

Створити фабрику для основної моделі та для моделей, від яких вона залежить (наприклад, для Category/Genre/Sport). Приклад для варіанту 1:

```ruby
# spec/factories/categories.rb
FactoryBot.define do
  factory :category do
    sequence(:name) { |n| "Category #{n}" }
  end
end

# spec/factories/tasks.rb
FactoryBot.define do
  factory :task do
    title { "Тестове завдання" }
    priority { :medium }
    due_date { Date.today + 7.days }
    estimated_hours { 2 }
    completed { false }
    association :user
    association :category
  end
end
```

Для інших варіантів — свої поля та асоціації (див. розділ "Варіанти").

### Тести моделі основної сутності

Створити `spec/models/<model>_spec.rb` з тестами:

- Валідації (поля та правила з Лабораторної №6)
- Scopes (з Лабораторної №5)
- Асоціації (`belongs_to :user`, `belongs_to :category`/`genre`/`sport`, `has_many` — з Лабораторних №5 та №6)

Конкретний перелік — у розділі "Варіанти".

Приклад тесту scope для варіанту 1:

```ruby
RSpec.describe Task, type: :model do
  describe ".completed" do
    it "returns only completed tasks" do
      completed_task = create(:task, completed: true)
      pending_task   = create(:task, completed: false)

      expect(Task.completed).to include(completed_task)
      expect(Task.completed).not_to include(pending_task)
    end
  end
end
```

### Тести моделі User

Створити `spec/models/user_spec.rb` (однаково для всіх варіантів, тільки назва асоційованої моделі змінюється):

- Валідація email — присутність та унікальність
- Асоціація `has_many :<records>` (де `<records>` — множина основної моделі, наприклад `:tasks`, `:movies`, `:recipes`)
- При видаленні користувача видаляються його записи (`dependent: :destroy`)

### Інтеграційні тести

Створити `spec/requests/<records>_spec.rb`:

- Неавторизований користувач перенаправляється на логін
- Авторизований користувач може створити запис
- Користувач не може видалити чужий запис — отримує redirect з повідомленням про помилку

---

## Додаткове завдання (бонус +5 балів)

Реалізувати можливість поділитися записом основної моделі з іншим користувачем.

### Модель

Для варіанту 1:

```bash
rails generate model Collaboration task:references user:references
rails db:migrate
```

```ruby
class Collaboration < ApplicationRecord
  belongs_to :task
  belongs_to :user
end

class Task < ApplicationRecord
  has_many :collaborations
  has_many :collaborators, through: :collaborations, source: :user
end

class User < ApplicationRecord
  has_many :collaborations
  has_many :shared_tasks, through: :collaborations, source: :task
end
```

Для інших варіантів — замінити `task` на назву своєї моделі.

### Функціонал

- На сторінці `show` запису — форма для додавання collaborator за email
- Сторінка `index` показує власні записи + записи до яких надано доступ
- Collaborator може переглядати та редагувати запис, але не видаляти

---

## Вимоги до реалізації

- Devise встановлено та налаштовано
- Записи прив'язані до користувачів, `index` показує тільки свої
- `check_owner!` захищає `edit`, `update`, `destroy`
- Всі тести проходять (`bundle exec rspec`)
- Фабрики використовуються у всіх тестах замість прямого створення записів

---

## Критерії оцінювання

| Критерій | Балів |
|---|------|
| Devise встановлено, реєстрація та логін працюють | 2 |
| Основна модель `belongs_to :user`, міграція, відображення тільки своїх записів | 2 |
| Авторизація через `check_owner!` | 2 |
| Фабрики для `User` та основної моделі | 1 |
| Тести моделі основної сутності | 4 |
| Тести моделі `User` | 2 |
| Інтеграційні тести | 2 |
| **Разом** | **15** |

---

## Питання для захисту

1. Що таке аутентифікація і чим вона відрізняється від авторизації?
2. Що надає Devise "з коробки"? Які модулі використано у вашому додатку?
3. Що таке `current_user` і звідки він береться?
4. Чим `factory_bot` кращий за пряме створення записів у тестах (`User.create(...)`)?
5. Що таке інтеграційний тест і чим він відрізняється від unit-тесту?

---

## Варіанти

---

### Варіант 1 — Менеджер завдань (To-Do List)

**Модель:** `Task`

**Фабрика `task`:**
```ruby
factory :task do
  title { "Тестове завдання" }
  priority { :medium }
  due_date { Date.today + 7.days }
  estimated_hours { 2 }
  completed { false }
  association :user
  association :category
end
```

**Тести моделі `Task`:**
- Валідація `title` — присутність та довжина
- Валідація `estimated_hours`
- Кастомна валідація `due_date`
- Scopes по `completed` (виконані / невиконані)
- Scope з високим пріоритетом
- Scope з дедлайном на поточному тижні
- Асоціації `belongs_to :user`, `belongs_to :category`, `has_many :attachments`

**Бонус:** `Collaboration` пов'язує `Task` та `User`.

---

### Варіант 2 — Каталог фільмів

**Модель:** `Movie`

**Фабрика `movie`:** з полями `title`, `release_date`, `rating`, `status`, асоціаціями `user` та `genre`. Значення за замовчуванням студент вибирає сам.

**Тести моделі `Movie`:**
- Валідація `title` — присутність та довжина
- Валідація `rating`
- Кастомна валідація `release_date`
- Scopes по `status` (переглянуті / заплановані)
- Scope з високим рейтингом
- Scope з релізом у поточному році
- Асоціації `belongs_to :user`, `belongs_to :genre`, `has_many :actors`
- Асоціації `belongs_to :user`, `belongs_to :genre`, `has_many :actors`

**Бонус:** `Collaboration` пов'язує `Movie` та `User`.

---

### Варіант 3 — Менеджер рецептів

**Модель:** `Recipe`

**Фабрика `recipe`:** з полями `title`, `cooking_time`, `servings`, `difficulty`, `published`, асоціаціями `user` та `category`. Значення за замовчуванням студент вибирає сам.

**Тести моделі `Recipe`:**
- Валідація `title` — присутність та довжина
- Валідація `cooking_time`
- Валідація `servings`
- Scopes по `published` (опубліковані / чернетки)
- Scope легких рецептів (`difficulty`)
- Scope швидких рецептів (до 30 хвилин)
- Асоціації `belongs_to :user`, `belongs_to :category`, `has_many :photos`
- Асоціації `belongs_to :user`, `belongs_to :category`, `has_many :photos`

**Бонус:** `Collaboration` пов'язує `Recipe` та `User`.

---

### Варіант 4 — Каталог книг

**Модель:** `Book`

**Фабрика `book`:** з полями `title`, `published_date`, `pages`, `rating`, `status`, асоціаціями `user` та `genre`. Значення за замовчуванням студент вибирає сам.

**Тести моделі `Book`:**
- Валідація `title` — присутність та довжина
- Валідація `pages`
- Кастомна валідація `published_date`
- Scopes по `status` (прочитані / заплановані)
- Scope з високим рейтингом
- Scope останніх 5 років
- Асоціації `belongs_to :user`, `belongs_to :genre`, `has_many :authors`
- Асоціації `belongs_to :user`, `belongs_to :genre`, `has_many :authors`

**Бонус:** `Collaboration` пов'язує `Book` та `User`.

---

### Варіант 5 — Менеджер навчальних курсів

**Модель:** `Course`

**Фабрика `course`:** з полями `title`, `duration_hours`, `start_date`, `end_date`, `price`, `status`, асоціаціями `user` та `category`. Значення за замовчуванням студент вибирає сам.

**Тести моделі `Course`:**
- Валідація `title` — присутність та довжина
- Валідація `duration_hours`
- Валідація `price`
- Кастомна валідація — `end_date` пізніше за `start_date`
- Scopes по `status` (активні / чернетки)
- Scope безкоштовних курсів
- Scope курсів що починаються у наступні 30 днів
- Асоціації `belongs_to :user`, `belongs_to :category`, `has_many :instructors`
- Асоціації `belongs_to :user`, `belongs_to :category`, `has_many :instructors`

**Бонус:** `Collaboration` пов'язує `Course` та `User`.

---

### Варіант 6 — Органайзер подій

**Модель:** `Event`

**Фабрика `event`:** з полями `title`, `start_date`, `end_date`, `price`, `status`, асоціаціями `user` та `category`. Значення за замовчуванням студент вибирає сам.

**Тести моделі `Event`:**
- Валідація `title` — присутність та довжина
- Валідація `price`
- Кастомна валідація — `end_date` не раніше за `start_date`
- Scopes по `status` (заплановані / завершені)
- Scope безкоштовних подій
- Scope подій поточного тижня
- Асоціації `belongs_to :user`, `belongs_to :category`, `has_many :participants`
- Асоціації `belongs_to :user`, `belongs_to :category`, `has_many :participants`

**Бонус:** `Collaboration` пов'язує `Event` та `User`.

---

### Варіант 7 — Менеджер проєктів

**Модель:** `Project`

**Фабрика `project`:** з полями `title`, `start_date`, `deadline`, `budget`, `status`, асоціаціями `user` та `category`. Значення за замовчуванням студент вибирає сам.

**Тести моделі `Project`:**
- Валідація `title` — присутність та довжина
- Валідація `budget`
- Кастомна валідація — `deadline` пізніше за `start_date`
- Scopes по `status` (в роботі / завершені)
- Scope з великим бюджетом
- Scope з дедлайном у наступні 7 днів
- Асоціації `belongs_to :user`, `belongs_to :category`, `has_many :team_members`
- Асоціації `belongs_to :user`, `belongs_to :category`, `has_many :team_members`

**Бонус:** `Collaboration` пов'язує `Project` та `User`.

---

### Варіант 8 — Каталог музичної колекції

**Модель:** `Song`

**Фабрика `song`:** з полями `title`, `release_date`, `duration_seconds`, `rating`, `status`, асоціаціями `user` та `genre`. Значення за замовчуванням студент вибирає сам.

**Тести моделі `Song`:**
- Валідація `title` — присутність та довжина
- Валідація `duration_seconds`
- Валідація `rating`
- Кастомна валідація `release_date`
- Scopes по `status` (прослухані / заплановані)
- Scope з високим рейтингом
- Scope пісень за останній рік
- Асоціації `belongs_to :user`, `belongs_to :genre`, `has_many :artists`
- Асоціації `belongs_to :user`, `belongs_to :genre`, `has_many :artists`

**Бонус:** `Collaboration` пов'язує `Song` та `User`.

---

### Варіант 9 — Менеджер витрат

**Модель:** `Expense`

**Фабрика `expense`:** з полями `title`, `amount`, `date`, `status`, асоціаціями `user` та `category`. Значення за замовчуванням студент вибирає сам.

**Тести моделі `Expense`:**
- Валідація `title` — присутність та довжина
- Валідація `amount`
- Кастомна валідація `date`
- Scopes по `status` (оплачені / заплановані)
- Scope великих витрат
- Scope витрат поточного місяця
- Асоціації `belongs_to :user`, `belongs_to :category`, `has_many :payment_methods`
- Асоціації `belongs_to :user`, `belongs_to :category`, `has_many :payment_methods`

**Бонус:** `Collaboration` пов'язує `Expense` та `User`.

---

### Варіант 10 — Каталог спортивних змагань

**Модель:** `Competition`

**Фабрика `competition`:** з полями `title`, `start_date`, `end_date`, `prize_fund`, `status`, асоціаціями `user` та `sport`. Значення за замовчуванням студент вибирає сам.

**Тести моделі `Competition`:**
- Валідація `title` — присутність та довжина
- Валідація `prize_fund`
- Кастомна валідація — `end_date` не раніше за `start_date`
- Scopes по `status` (майбутні / завершені)
- Scope з великим призовим фондом
- Scope змагань що починаються у наступні 30 днів
- Асоціації `belongs_to :user`, `belongs_to :sport`, `has_many :teams`
- Асоціації `belongs_to :user`, `belongs_to :sport`, `has_many :teams`

**Бонус:** `Collaboration` пов'язує `Competition` та `User`.