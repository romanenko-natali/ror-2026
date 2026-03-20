# Лабораторна робота №2
## Ruby: класи, серіалізація об'єктів, консольний додаток

**Курс:** Ruby on Rails  
**Балів:** 10  
**Попередня робота:** Лабораторна №1

---

## Загальне завдання

Розробити консольний додаток з трьома класами:
- **Клас-модель** — представляє один запис (наприклад `Task`)
- **Клас-менеджер** — керує колекцією об'єктів (наприклад `TaskManager`)
- **Клас `App`** — консольний додаток з меню

### Структура файлів

```
lab2/
├── <entity>.rb          # клас-модель
├── <entity>_manager.rb  # клас-менеджер
└── app.rb               # консольний додаток
```

### Вимоги до класу-моделі

- `attr_accessor` для всіх полів
- `initialize` з усіма обов'язковими полями
- `to_h` — конвертація у хеш для JSON серіалізації
- `self.from_h(hash)` — відновлення об'єкта з хешу при завантаженні з JSON

### Вимоги до класу-менеджера

- `@collection = {}` — хеш об'єктів де ключ це числовий `id`
- Всі методи з Лабораторної №1 але працюють з об'єктами а не хешами
- `save_to_yaml` / `load_from_yaml` — нативна серіалізація (без `to_h`)
- `save_to_json` / `load_from_json` — через `to_h` / `from_h`

### Вимоги до класу App

- Автозавантаження при старті: `yaml` → `json` → порожній стан
- Меню у циклі до вибору `0`
- Автозбереження у `yaml` через `ensure`
- Введення даних через `gets.chomp`

### Критерії оцінювання

| Критерій | Балів |
|---|------|
| Клас-модель з `attr_accessor`, `to_h`, `from_h` | 2 |
| Клас-менеджер з усіма методами | 3 |
| Серіалізація YAML (нативна) та JSON (через `to_h`/`from_h`) | 2 |
| Меню працює коректно у циклі | 1 |
| Автозавантаження при старті та збереження через `ensure` | 1 |
| Повідомлення про помилки та підтвердження дій | 1 |
| **Разом** | **10** |

### Питання для захисту

1. Чим відрізняється `attr_accessor` від `attr_reader`? Коли що використовувати?
2. Навіщо потрібен метод `to_h`? Чому не можна зберегти об'єкт напряму у JSON?
3. Чому YAML не потребує `to_h`/`from_h` а JSON потребує?
4. Що таке `self.from_h` — чому `self`? Чим відрізняється від звичайного методу?
5. Як організувати нескінченний цикл і коректно з нього виходити?

---

## Варіанти

---

### Варіант 1 — Менеджер завдань (To-Do List)

```ruby
class Task
  attr_accessor :title, :categories, :priority, :due_date, :estimated_hours, :completed

  def initialize(title, categories, priority, due_date, estimated_hours)
    @title = title
    @categories = categories
    @priority = priority
    @due_date = due_date
    @estimated_hours = estimated_hours
    @completed = false
  end
end
```

**Менеджер:** `TaskManager`

---

### Варіант 2 — Каталог фільмів

```ruby
class Movie
  attr_accessor :title, :genres, :directors, :actors, :release_date, :rating, :status

  def initialize(title, genres, directors, actors, release_date, rating)
    @title = title
    @genres = genres
    @directors = directors
    @actors = actors
    @release_date = release_date
    @rating = rating
    @status = "want_to_watch"  # want_to_watch/watching/watched
  end
end
```

**Менеджер:** `MovieManager`

---

### Варіант 3 — Менеджер рецептів

```ruby
class Recipe
  attr_accessor :title, :ingredients, :steps, :category, :cooking_time, :servings, :difficulty, :created_at, :published

  def initialize(title, ingredients, steps, category, cooking_time, servings, difficulty)
    @title = title
    @ingredients = ingredients
    @steps = steps
    @category = category
    @cooking_time = cooking_time
    @servings = servings
    @difficulty = difficulty  # easy/medium/hard
    @created_at = Date.today.to_s
    @published = false
  end
end
```

**Менеджер:** `RecipeManager`

---

### Варіант 4 — Каталог книг

```ruby
class Book
  attr_accessor :title, :authors, :genres, :publisher, :published_date, :pages, :rating, :status

  def initialize(title, authors, genres, publisher, published_date, pages, rating)
    @title = title
    @authors = authors
    @genres = genres
    @publisher = publisher
    @published_date = published_date
    @pages = pages
    @rating = rating
    @status = "want_to_read"  # want_to_read/reading/read
  end
end
```

**Менеджер:** `BookManager`

---

### Варіант 5 — Менеджер навчальних курсів

```ruby
class Course
  attr_accessor :title, :topics, :instructors, :category, :duration_hours, :start_date, :end_date, :price, :status

  def initialize(title, topics, instructors, category, duration_hours, start_date, end_date, price)
    @title = title
    @topics = topics
    @instructors = instructors
    @category = category
    @duration_hours = duration_hours
    @start_date = start_date
    @end_date = end_date
    @price = price
    @status = "draft"  # draft/active/archived
  end
end
```

**Менеджер:** `CourseManager`

---

### Варіант 6 — Органайзер подій

```ruby
class Event
  attr_accessor :title, :participants, :locations, :category, :start_date, :end_date, :price, :status

  def initialize(title, participants, locations, category, start_date, end_date, price)
    @title = title
    @participants = participants
    @locations = locations
    @category = category
    @start_date = start_date
    @end_date = end_date
    @price = price
    @status = "planned"  # planned/ongoing/completed/cancelled
  end
end
```

**Менеджер:** `EventManager`

---

### Варіант 7 — Менеджер проєктів

```ruby
class Project
  attr_accessor :title, :team, :tags, :client, :start_date, :deadline, :budget, :status

  def initialize(title, team, tags, client, start_date, deadline, budget)
    @title = title
    @team = team
    @tags = tags
    @client = client
    @start_date = start_date
    @deadline = deadline
    @budget = budget
    @status = "planned"  # planned/in_progress/completed/cancelled
  end
end
```

**Менеджер:** `ProjectManager`

---

### Варіант 8 — Каталог музичної колекції

```ruby
class Song
  attr_accessor :title, :artists, :genres, :album, :release_date, :duration_seconds, :rating, :status

  def initialize(title, artists, genres, album, release_date, duration_seconds, rating)
    @title = title
    @artists = artists
    @genres = genres
    @album = album
    @release_date = release_date
    @duration_seconds = duration_seconds
    @rating = rating
    @status = "want_to_listen"  # want_to_listen/listening/listened
  end
end
```

**Менеджер:** `MusicManager`

---

### Варіант 9 — Менеджер витрат

```ruby
class Expense
  attr_accessor :title, :categories, :payment_methods, :amount, :date, :notes, :status

  def initialize(title, categories, payment_methods, amount, date, notes)
    @title = title
    @categories = categories
    @payment_methods = payment_methods
    @amount = amount
    @date = date
    @notes = notes
    @status = "planned"  # planned/paid/cancelled
  end
end
```

**Менеджер:** `ExpenseManager`

---

### Варіант 10 — Каталог спортивних змагань

```ruby
class Competition
  attr_accessor :title, :sports, :teams, :location, :start_date, :end_date, :prize_fund, :status

  def initialize(title, sports, teams, location, start_date, end_date, prize_fund)
    @title = title
    @sports = sports
    @teams = teams
    @location = location
    @start_date = start_date
    @end_date = end_date
    @prize_fund = prize_fund
    @status = "upcoming"  # upcoming/ongoing/completed/cancelled
  end
end
```

**Менеджер:** `CompetitionManager`