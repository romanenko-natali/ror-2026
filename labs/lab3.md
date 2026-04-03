# Лабораторна робота №3
## Rails: MVC, scaffold, маршрутизація

**Курс:** Ruby on Rails  
**Балів:** 10  
**Попередня робота:** Лабораторна №2

---

## Мета

Познайомитися зі структурою Rails-проєкту, принципом MVC та механізмом маршрутизації. Навчитися використовувати scaffold для швидкої генерації CRUD та створювати контролери і маршрути вручну.

---

## Загальне завдання

Створити Rails-додаток з двома моделями відповідно до свого варіанту.

### Підготовка проєкту

```bash
rails new <app_name> --database=postgresql
cd <app_name>
rails db:create
```

### Частина 1 — Scaffold

Згенерувати scaffold для допоміжної моделі (вказана у варіанті). Після генерації розібрати та пояснити у звіті:
- що таке `resources` у `config/routes.rb` і які маршрути він генерує (`rails routes`)
- структуру згенерованого контролера: `before_action`, strong parameters
- як контролер пов'язаний з шаблонами

### Частина 2 — RuboCop

```bash
bundle add rubocop-rails --group development
bundle exec rubocop --init
bundle exec rubocop
```

> Починаючи з цієї лабораторної, код у всіх наступних роботах має проходити RuboCop без помилок.

### Частина 3 — Основна модель (вручну)

Створити основну модель через `rails generate model`. Додати enum у модель (поле вказане у варіанті). Реалізувати вручну:
- маршрути через `resources` + кастомний маршрут
- контролер з усіма CRUD-діями та кастомною дією
- шаблони для всіх дій

У формі основної моделі поле категорії реалізувати як випадаючий список з існуючих записів допоміжної моделі через `pluck`.

### Про enum

Поля з обмеженим набором значень реалізуються через `enum` у моделі Rails:

```ruby
# міграція
add_column :tasks, :priority, :integer, default: 0

# модель
enum priority: { low: 0, medium: 1, high: 2 }
```

В БД зберігається число, але в коді працюємо як з рядком. У формі використовується випадаючий список:

```erb
<%= f.select :priority, ModelName.priorities.keys %>
```

### Критерії оцінювання

| Критерій | Балів |
|---|------|
| Scaffold працює, розібрано у звіті | 2 |
| RuboCop налаштовано, код проходить без помилок | 1 |
| Основна модель з enum | 1 |
| Маршрути додані вручну | 1 |
| CRUD реалізовано вручну | 3 |
| Вибір з існуючих записів через `pluck` | 1 |
| Кастомна сторінка | 1 |
| **Разом** | **10** |

### Питання для захисту

1. Що таке MVC? Яку роль відіграє кожен компонент у Rails?
2. Що генерує `resources` у маршрутах? Назвіть всі маршрути.
3. Навіщо потрібні strong parameters?
4. Чим відрізняється `render` від `redirect_to`?
5. Як додати новий маршрут до вже існуючого `resources`? Наведіть приклад з вашого додатку.

---

## Варіанти

---

### Варіант 1 — Менеджер завдань (To-Do List)

**Scaffold:** `Category` (`name:string`)

**Основна модель:** `Task`
```bash
rails generate model Task title:string category:string priority:integer due_date:date estimated_hours:integer completed:boolean
```
```ruby
enum priority: { low: 0, medium: 1, high: 2 }
```

**Кастомна сторінка:** `/tasks/completed` — завдання з `completed: true`

**Вибір у формі:** `Category.pluck(:name)` для поля `category`

---

### Варіант 2 — Каталог фільмів

**Scaffold:** `Genre` (`name:string`)

**Основна модель:** `Movie`
```bash
rails generate model Movie title:string genre:string director:string release_date:date rating:float status:integer
```
```ruby
enum status: { want_to_watch: 0, watching: 1, watched: 2 }
```

**Кастомна сторінка:** `/movies/watched` — переглянуті фільми

**Вибір у формі:** `Genre.pluck(:name)` для поля `genre`

---

### Варіант 3 — Менеджер рецептів

**Scaffold:** `Category` (`name:string`), `Ingredient` (`name:string`)

**Основна модель:** `Recipe`
```bash
rails generate model Recipe title:string category:string cooking_time:integer servings:integer difficulty:integer published:boolean
```
```ruby
enum difficulty: { easy: 0, medium: 1, hard: 2 }
```

**Кастомна сторінка:** `/recipes/published` — опубліковані рецепти

**Вибір у формі:** `Category.pluck(:name)` для поля `category`

---

### Варіант 4 — Каталог книг

**Scaffold:** `Genre` (`name:string`)

**Основна модель:** `Book`
```bash
rails generate model Book title:string genre:string publisher:string published_date:date pages:integer rating:float status:integer
```
```ruby
enum status: { want_to_read: 0, reading: 1, read: 2 }
```

**Кастомна сторінка:** `/books/read` — прочитані книги

**Вибір у формі:** `Genre.pluck(:name)` для поля `genre`

---

### Варіант 5 — Менеджер навчальних курсів

**Scaffold:** `Category` (`name:string`)

**Основна модель:** `Course`
```bash
rails generate model Course title:string category:string duration_hours:integer start_date:date end_date:date price:float status:integer
```
```ruby
enum status: { draft: 0, active: 1, archived: 2 }
```

**Кастомна сторінка:** `/courses/active` — активні курси

**Вибір у формі:** `Category.pluck(:name)` для поля `category`

---

### Варіант 6 — Органайзер подій

**Scaffold:** `Category` (`name:string`)

**Основна модель:** `Event`
```bash
rails generate model Event title:string category:string location:string start_date:date end_date:date price:float status:integer
```
```ruby
enum status: { planned: 0, ongoing: 1, completed: 2, cancelled: 3 }
```

**Кастомна сторінка:** `/events/planned` — заплановані події

**Вибір у формі:** `Category.pluck(:name)` для поля `category`

---

### Варіант 7 — Менеджер проєктів

**Scaffold:** `Category` (`name:string`)

**Основна модель:** `Project`
```bash
rails generate model Project title:string category:string client:string start_date:date deadline:date budget:float status:integer
```
```ruby
enum status: { planned: 0, in_progress: 1, completed: 2, cancelled: 3 }
```

**Кастомна сторінка:** `/projects/in_progress` — активні проєкти

**Вибір у формі:** `Category.pluck(:name)` для поля `category`

---

### Варіант 8 — Каталог музичної колекції

**Scaffold:** `Genre` (`name:string`)

**Основна модель:** `Song`
```bash
rails generate model Song title:string genre:string album:string release_date:date duration_seconds:integer rating:float status:integer
```
```ruby
enum status: { want_to_listen: 0, listening: 1, listened: 2 }
```

**Кастомна сторінка:** `/songs/listened` — прослухані пісні

**Вибір у формі:** `Genre.pluck(:name)` для поля `genre`

---

### Варіант 9 — Менеджер витрат

**Scaffold:** `Category` (`name:string`)

**Основна модель:** `Expense`
```bash
rails generate model Expense title:string category:string amount:float date:date notes:text payment_method:string status:integer
```
```ruby
enum status: { planned: 0, paid: 1, cancelled: 2 }
```

**Кастомна сторінка:** `/expenses/paid` — оплачені витрати

**Вибір у формі:** `Category.pluck(:name)` для поля `category`

---

### Варіант 10 — Каталог спортивних змагань

**Scaffold:** `Sport` (`name:string`)

**Основна модель:** `Competition`
```bash
rails generate model Competition title:string sport:string location:string start_date:date end_date:date prize_fund:float status:integer
```
```ruby
enum status: { upcoming: 0, ongoing: 1, completed: 2, cancelled: 3 }
```

**Кастомна сторінка:** `/competitions/upcoming` — майбутні змагання

**Вибір у формі:** `Sport.pluck(:name)` для поля `sport`