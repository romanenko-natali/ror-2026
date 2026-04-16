# Лабораторна робота №6
## Active Record: асоціації та валідації

**Курс:** Ruby on Rails
**Балів:** 15
**Попередня робота:** Лабораторна №5

---

## Мета

Реалізувати правильні зв'язки між моделями через асоціації Active Record, замінити тимчасові рішення (рядкові поля, числові зовнішні ключі) на повноцінні зв'язки, додати валідації даних.

---

## Загальне завдання

Рефакторинг додатку з Лабораторної №5 — замінити спрощені рішення на правильні асоціації, додати нову модель для many-to-many зв'язку та валідації. Предметна область — ті самі, що й у попередніх роботах.

---

## Частина 1 — Асоціація `belongs_to` (рядкове поле → foreign key)

У попередніх лабораторних категорія (або жанр/спорт — залежно від варіанту) основної моделі зберігалася як рядкове поле `string`. Замінити це на повноцінний foreign key.

### Міграція

Для варіанту 1 (заміна `category:string` у `tasks`):

```bash
rails generate migration AddCategoryRefToTasks
```

```ruby
def change
  remove_column :tasks, :category, :string
  add_reference :tasks, :category, foreign_key: true
end
```

Для інших варіантів — аналогічно, замінити відповідне рядкове поле (див. розділ "Варіанти"). Наприклад, для варіанту 2 — `genre:string` → `genre_id`, для варіанту 10 — `sport:string` → `sport_id`.

### Асоціації у моделях

Для варіанту 1:

```ruby
class Task < ApplicationRecord
  belongs_to :category
end

class Category < ApplicationRecord
  has_many :tasks, dependent: :nullify
end
```

### Оновлення форми

Замінити `Model.pluck(:name)` на `collection_select`:

```erb
<%= f.collection_select :category_id, Category.all, :id, :name %>
```

---

## Частина 2 — Асоціація `has_many` (дочірня модель з Лабораторної №5)

Додати асоціацію до моделі, створеної у Лабораторній №5 (міграція вже є — треба лише описати асоціацію у моделях).

Для варіанту 1:

```ruby
class Task < ApplicationRecord
  has_many :attachments, dependent: :destroy
end

class Attachment < ApplicationRecord
  belongs_to :task
end
```

Для інших варіантів — аналогічно з відповідними назвами моделей (див. розділ "Варіанти").

Переконатись що записи дочірньої моделі на сторінці `show` основної моделі відображаються коректно через асоціацію (`@task.attachments`, `@movie.actors` тощо).

---

## Частина 3 — Асоціація many-to-many

Додати many-to-many зв'язок через проміжну модель. Для варіанту 1 це тег, який можна призначити будь-якому завданню.

### Міграції

Для варіанту 1:

```bash
rails generate model Tag name:string
rails generate model Tagging task:references tag:references
rails db:migrate
```

### Асоціації

Для варіанту 1:

```ruby
class Tag < ApplicationRecord
  has_many :taggings
  has_many :tasks, through: :taggings
end

class Tagging < ApplicationRecord
  belongs_to :task
  belongs_to :tag
end

class Task < ApplicationRecord
  has_many :taggings
  has_many :tags, through: :taggings
end
```

Для інших варіантів — назви моделей, проміжної таблиці та зв'язків відрізняються (див. розділ "Варіанти").

### CRUD для нової моделі

Реалізувати повноцінний CRUD для нової many-to-many моделі (контролер + маршрути + шаблони). Додати посилання на список у навігацію.

### Вибір у формі основної моделі

Додати множинний вибір через чекбокси у форму основної моделі. Для варіанту 1:

```erb
<% Tag.all.each do |tag| %>
  <%= check_box_tag 'task[tag_ids][]', tag.id, @task.tags.include?(tag) %>
  <%= label_tag "task_tag_#{tag.id}", tag.name %>
<% end %>
```

Додати `tag_ids: []` у strong parameters контролера основної моделі. Для інших варіантів — відповідна назва (наприклад, `ingredient_ids: []`, `topic_ids: []`).

---

## Частина 4 — Валідації

Додати валідації у основну модель. Базовий набір для всіх варіантів:

- `title` — `presence: true, length: { minimum: 3, maximum: 100 }`
- одне числове поле — `numericality` з обмеженнями
- одна кастомна валідація через `validate :method_name` (перевірка дати або співвідношення між полями)

Конкретні поля та правила — у розділі "Варіанти".

Приклад для варіанту 1:

```ruby
class Task < ApplicationRecord
  validates :title, presence: true, length: { minimum: 3, maximum: 100 }
  validates :estimated_hours, numericality: { greater_than: 0, less_than_or_equal_to: 100 }
  validates :due_date, presence: true
  validate :due_date_within_one_year

  private

  def due_date_within_one_year
    return unless due_date.present?
    if due_date > Date.today + 1.year
      errors.add(:due_date, "не може бути більше ніж через рік")
    end
  end
end
```

Також додати валідацію у модель-довідник (Category / Genre / Sport):

```ruby
class Category < ApplicationRecord
  validates :name, presence: true, uniqueness: true
end
```

Переконатись що форми відображають помилки валідації користувачу.

---

## Вимоги до реалізації

- Всі міграції застосовані, `schema.rb` містить foreign keys
- Асоціації працюють коректно — немає зайвих запитів до БД
- Форма основної моделі використовує `collection_select` для belongs_to та чекбокси для many-to-many
- Валідації спрацьовують і помилки відображаються у формі
- `dependent:` вказано для всіх `has_many`

---

## Критерії оцінювання

| Критерій | Балів |
|---|------|
| `belongs_to` з міграцією (заміна string на foreign key) | 2 |
| `has_many` для дочірньої моделі з Лаб 5 | 1 |
| Many-to-many через проміжну модель | 3 |
| CRUD для нової many-to-many моделі | 2 |
| Вибір many-to-many у формі через чекбокси | 2 |
| Валідації у основній моделі та моделі-довіднику | 3 |
| Помилки валідації відображаються у формі | 1 |
| Кастомна валідація (через `validate`, не `validates`) | 1 |
| Штраф: `-1` за кожен відсутній `dependent:` | -1 |
| **Разом** | **15** |

---

## Питання для захисту

1. Що таке `belongs_to` та `has_many`? Яка різниця між ними?
2. Навіщо потрібна проміжна таблиця для many-to-many? Чому не можна обійтись без неї?
3. Що означає `dependent: :destroy` та `dependent: :nullify`? Коли використовувати кожен?
4. Чим відрізняється `validates` від `validate`?
5. Що таке `add_reference` і які колонки вона створює у таблиці?

---

## Варіанти

---

### Варіант 1 — Менеджер завдань (To-Do List)

**`belongs_to`:** `category:string` → `category_id` (`Category`)

**`has_many`:** `Task has_many :attachments`

**Many-to-many:** `Tag` (теги для завдань)
- Моделі: `Tag`, `Tagging`
- Міграції: `rails generate model Tag name:string`, `rails generate model Tagging task:references tag:references`
- Асоціація: `Task has_many :tags, through: :taggings`

**Валідації у `Task`:**
- `title` — присутність, обмеження на довжину
- `estimated_hours` — тільки додатні числа, з розумним верхнім обмеженням (обґрунтувати у звіті)
- `due_date` — присутність
- кастомна: `due_date` не може бути далеко у майбутньому

---

### Варіант 2 — Каталог фільмів

**`belongs_to`:** `genre:string` → `genre_id` (`Genre`)

**`has_many`:** `Movie has_many :actors`

**Many-to-many:** `Tag` (теги/ключові слова для фільмів — "cult classic", "must watch" тощо)
- Моделі: `Tag`, `Tagging`
- Міграції: `rails generate model Tag name:string`, `rails generate model Tagging movie:references tag:references`
- Асоціація: `Movie has_many :tags, through: :taggings`

**Валідації у `Movie`:**
- `title` — присутність, обмеження на довжину
- `rating` — числове значення у розумному діапазоні
- `release_date` — присутність
- кастомна: `release_date` не занадто далеко у майбутньому

---

### Варіант 3 — Менеджер рецептів

**`belongs_to`:** `category:string` → `category_id` (`Category`)

**`has_many`:** `Recipe has_many :photos`

**Many-to-many:** `Ingredient` (інгредієнти рецептів — модель `Ingredient` вже існує як scaffold з Лабораторної №3)
- Моделі: `Ingredient` (вже є), `RecipeIngredient`
- Міграція: `rails generate model RecipeIngredient recipe:references ingredient:references`
- Асоціація: `Recipe has_many :ingredients, through: :recipe_ingredients`

> Один інгредієнт може бути у багатьох рецептах, один рецепт містить багато інгредієнтів. Це природний many-to-many.

**Валідації у `Recipe`:**
- `title` — присутність, обмеження на довжину
- `cooking_time` — додатні числа, з розумним верхнім обмеженням
- `servings` — присутність, додатні числа
- кастомна: `servings` у розумному діапазоні (обґрунтувати у звіті)

---

### Варіант 4 — Каталог книг

**`belongs_to`:** `genre:string` → `genre_id` (`Genre`)

**`has_many`:** `Book has_many :authors`

**Many-to-many:** `Tag` (теги для книг — "bestseller", "must read", "classic")
- Моделі: `Tag`, `Tagging`
- Міграції: `rails generate model Tag name:string`, `rails generate model Tagging book:references tag:references`
- Асоціація: `Book has_many :tags, through: :taggings`

**Валідації у `Book`:**
- `title` — присутність, обмеження на довжину
- `pages` — додатні числа, з розумним верхнім обмеженням
- `published_date` — присутність
- кастомна: `published_date` не у майбутньому

---

### Варіант 5 — Менеджер навчальних курсів

**`belongs_to`:** `category:string` → `category_id` (`Category`)

**`has_many`:** `Course has_many :instructors`

**Many-to-many:** `Topic` (теми, що вивчаються на курсі — один курс може містити багато тем, одна тема може бути у багатьох курсах)
- Моделі: `Topic`, `CourseTopic`
- Міграції:
  - `rails generate model Topic name:string`
  - `rails generate model CourseTopic course:references topic:references`
  - Окрема міграція для видалення старого рядкового поля: `remove_column :courses, :main_topic, :string`
- Асоціація: `Course has_many :topics, through: :course_topics`

> У Лабораторній №3 `main_topic` був рядковим полем — тимчасове рішення, коли курс міг мати тільки одну тему. Тепер воно нормалізується у повноцінний many-to-many зв'язок.

**Валідації у `Course`:**
- `title` — присутність, обмеження на довжину
- `duration_hours` — додатні числа, з розумним верхнім обмеженням
- `price` — не може бути від'ємним
- кастомна: `end_date` має бути пізніше за `start_date`

---

### Варіант 6 — Органайзер подій

**`belongs_to`:** `category:string` → `category_id` (`Category`)

**`has_many`:** `Event has_many :participants`

**Many-to-many:** `Location` (локації події — одна подія може відбуватись у кількох локаціях: "Київ + Онлайн", одна локація приймає багато подій)
- Моделі: `Location`, `EventLocation`
- Міграції: `rails generate model Location name:string`, `rails generate model EventLocation event:references location:references`
- Асоціація: `Event has_many :locations, through: :event_locations`

> У Лабораторній №3 `location` було рядковим полем. Зараз воно нормалізується у many-to-many через проміжну таблицю. Рядкове поле `location:string` видалити у міграції.

**Валідації у `Event`:**
- `title` — присутність, обмеження на довжину
- `price` — не може бути від'ємним
- `start_date` — присутність
- кастомна: `end_date` не раніше за `start_date`

---

### Варіант 7 — Менеджер проєктів

**`belongs_to`:** `category:string` → `category_id` (`Category`)

**`has_many`:** `Project has_many :team_members`

**Many-to-many:** `Tag` (теги для проєктів — "Web", "Mobile", "Ruby", "Rails" тощо; у Лабораторній №3 це було тимчасово одним рядковим полем `main_tag`)
- Моделі: `Tag`, `Tagging`
- Міграції:
  - `rails generate model Tag name:string`
  - `rails generate model Tagging project:references tag:references`
  - Окрема міграція для видалення старого рядкового поля: `remove_column :projects, :main_tag, :string`
- Асоціація: `Project has_many :tags, through: :taggings`

> У Лабораторній №3 `main_tag` дозволяв вказати лише один тег — тимчасове рішення. Тепер проєкт може мати довільну кількість тегів через many-to-many зв'язок.

**Валідації у `Project`:**
- `title` — присутність, обмеження на довжину
- `budget` — не може бути від'ємним
- `deadline` — присутність
- кастомна: `deadline` має бути пізніше за `start_date`

---

### Варіант 8 — Каталог музичної колекції

**`belongs_to`:** `genre:string` → `genre_id` (`Genre`)

**`has_many`:** `Song has_many :artists`

**Many-to-many:** `Tag` (теги/настрої пісень — "chill", "party", "workout")
- Моделі: `Tag`, `Tagging`
- Міграції: `rails generate model Tag name:string`, `rails generate model Tagging song:references tag:references`
- Асоціація: `Song has_many :tags, through: :taggings`

**Валідації у `Song`:**
- `title` — присутність, обмеження на довжину
- `duration_seconds` — додатні числа, з розумним верхнім обмеженням
- `rating` — числове значення у розумному діапазоні
- кастомна: `release_date` не у майбутньому

---

### Варіант 9 — Менеджер витрат

**`belongs_to`:** `category:string` → `category_id` (`Category`)

**`has_many`:** `Expense has_many :payment_methods`

**Many-to-many:** `Tag` (теги для витрат — "службові", "особисті", "повторювані")
- Моделі: `Tag`, `Tagging`
- Міграції: `rails generate model Tag name:string`, `rails generate model Tagging expense:references tag:references`
- Асоціація: `Expense has_many :tags, through: :taggings`

**Валідації у `Expense`:**
- `title` — присутність, обмеження на довжину
- `amount` — додатні числа
- `date` — присутність
- кастомна: `date` не занадто далеко у майбутньому

---

### Варіант 10 — Каталог спортивних змагань

**`belongs_to`:** `sport:string` → `sport_id` (`Sport`)

**`has_many`:** `Competition has_many :teams`

**Many-to-many:** `Tag` (теги для змагань — "чемпіонат", "міжнародне", "молодіжне")
- Моделі: `Tag`, `Tagging`
- Міграції: `rails generate model Tag name:string`, `rails generate model Tagging competition:references tag:references`
- Асоціація: `Competition has_many :tags, through: :taggings`

**Валідації у `Competition`:**
- `title` — присутність, обмеження на довжину
- `prize_fund` — не може бути від'ємним
- `start_date` — присутність
- кастомна: `end_date` не раніше за `start_date`