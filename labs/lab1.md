# Лабораторна робота №1
## Ruby: функції, хеші, файли

**Курс:** Ruby on Rails  
**Балів:** 10

---

## Загальне завдання

Розробити набір функцій для керування колекцією даних відповідно до свого варіанту.

### Структура даних

Колекція зберігається у хеші де:
- **зовнішній ключ** — числовий ідентифікатор запису (Integer)
- **внутрішні ключі** — символи що описують поля запису

### Вимоги до функцій

**Основний CRUD:**
- `add_<entity>(collection, ...)` — додати новий запис, `id` генерується автоматично
- `edit_<entity>(collection, id, new_data)` — редагувати поля запису за `id`
- `delete_<entity>(collection, id)` — видалити запис за `id`
- `list_<entities>(collection)` — вивести всі записи у зручному форматі

**Пошук та фільтрація:**
- `find_by_<field>(collection, query)` — пошук за частиною значення поля
- Мінімум два методи фільтрації специфічні для свого варіанту

**Робота з файлами:**
- `save_to_json(collection, filename)` — зберегти у JSON
- `load_from_json(filename)` — завантажити з JSON
- `save_to_yaml(collection, filename)` — зберегти у YAML
- `load_from_yaml(filename)` — завантажити з YAML

### Вимоги до реалізації

- Кожна операція реалізована у вигляді окремого методу
- Методи не використовують глобальних змінних — колекція передається як аргумент
- Передбачити обробку помилок: запис не знайдено, файл не існує (`rescue Errno::ENOENT`)
- Код має містити коментарі

### Критерії оцінювання

| Критерій | Балів |
|---|---|
| CRUD-функції реалізовані та працюють коректно | 4 |
| Пошук та фільтрація працюють коректно | 2 |
| Збереження та завантаження JSON і YAML | 2 |
| Обробка помилок | 1 |
| Чистота коду, коментарі | 1 |
| **Разом** | **10** |

### Питання для захисту

1. Чим хеш відрізняється від масиву? Коли що використовувати?
2. Чому колекція передається як аргумент, а не використовується як глобальна змінна?
3. В чому різниця між JSON і YAML? Коли що зручніше?
4. Як у Ruby обробляти ситуацію, коли ключ у хеші не існує?
5. Чим символ відрізняється від рядка як ключ хешу?

---

## Варіанти

---

### Варіант 1 — Менеджер завдань (To-Do List)

```ruby
tasks = {
  1 => {
    title: "Купити продукти",
    categories: ["Покупки", "Особисті"],
    priority: "Високий"  # Високий/Середній/Низький,
    due_date: "2024-02-28",
    estimated_hours: 2,
    completed: false
  },
  2 => {
    title: "Завершити звіт",
    categories: ["Робота", "Документи"],
    priority: "Середній"  # Високий/Середній/Низький,
    due_date: "2024-03-01",
    estimated_hours: 5,
    completed: false
  }
}
```

**Методи:** `add_task`, `edit_task`, `delete_task`, `list_tasks`, `find_by_title`, `filter_by_category`, `filter_by_priority`


---

### Варіант 2 — Каталог фільмів

```ruby
movies = {
  1 => {
    title: "Inception",
    genres: ["Sci-Fi", "Action", "Thriller"],
    directors: ["Christopher Nolan"],
    actors: ["Leonardo DiCaprio", "Tom Hardy"],
    release_date: "2010-07-16",
    rating: 8.8,
    status: "want_to_watch"  # want_to_watch/watching/watched
  },
  2 => {
    title: "The Shawshank Redemption",
    genres: ["Drama"],
    directors: ["Frank Darabont"],
    actors: ["Tim Robbins", "Morgan Freeman"],
    release_date: "1994-09-23",
    rating: 9.3,
    status: "watched"  # want_to_watch/watching/watched
  }
}
```

**Методи:** `add_movie`, `edit_movie`, `delete_movie`, `list_movies`, `find_by_title`, `filter_by_genre`, `filter_by_director`


---

### Варіант 3 — Менеджер рецептів

```ruby
recipes = {
  1 => {
    title: "Борщ",
    ingredients: ["буряк", "капуста", "морква"],
    steps: ["нарізати овочі", "зварити бульйон", "додати овочі"],
    category: "Супи",
    cooking_time: 60,
    servings: 4,
    difficulty: "easy"  # easy/medium/hard
    created_at: "2024-02-15",
    published: false
  },
  2 => {
    title: "Вареники",
    ingredients: ["борошно", "картопля", "цибуля"],
    steps: ["замісити тісто", "приготувати начинку", "зліпити"],
    category: "Основні страви",
    cooking_time: 90,
    servings: 6,
    difficulty: "medium"  # easy/medium/hard
    created_at: "2024-02-20",
    published: true
  }
}
```

**Методи:** `add_recipe`, `edit_recipe`, `delete_recipe`, `list_recipes`, `find_by_title`, `filter_by_category`, `filter_by_difficulty`


---

### Варіант 4 — Каталог книг

```ruby
books = {
  1 => {
    title: "Кобзар",
    authors: ["Тарас Шевченко"],
    genres: ["Поезія", "Класика"],
    publisher: "Видавництво Фоліо",
    published_date: "1840-01-01",
    pages: 240,
    rating: 9.5,
    status: "read"  # want_to_read/reading/read
  },
  2 => {
    title: "Майстер і Маргарита",
    authors: ["Михайло Булгаков"],
    genres: ["Роман", "Фантастика"],
    publisher: "Клуб сімейного дозвілля",
    published_date: "1967-01-01",
    pages: 480,
    rating: 9.1,
    status: "want_to_read"  # want_to_read/reading/read
  }
}
```

**Методи:** `add_book`, `edit_book`, `delete_book`, `list_books`, `find_by_title`, `filter_by_genre`, `filter_by_status`


---

### Варіант 5 — Менеджер навчальних курсів

```ruby
courses = {
  1 => {
    title: "Ruby on Rails",
    topics: ["Ruby basics", "MVC", "Active Record"],
    instructors: ["Іван Петренко"],
    category: "Програмування",
    duration_hours: 40,
    start_date: "2024-03-01",
    end_date: "2024-05-01",
    price: 1500.00,
    status: "active"  # draft/active/archived
  },
  2 => {
    title: "UI/UX Design",
    topics: ["Figma", "Wireframing", "Prototyping"],
    instructors: ["Марія Коваль", "Олег Сидоренко"],
    category: "Дизайн",
    duration_hours: 30,
    start_date: "2024-04-01",
    end_date: "2024-06-01",
    price: 1200.00,
    status: "draft"  # draft/active/archived
  }
}
```

**Методи:** `add_course`, `edit_course`, `delete_course`, `list_courses`, `find_by_title`, `filter_by_category`, `filter_by_status`


---

### Варіант 6 — Органайзер подій

```ruby
events = {
  1 => {
    title: "Ruby конференція",
    participants: ["Іван Петренко", "Марія Коваль"],
    locations: ["Київ", "Онлайн"],
    category: "Конференція",
    start_date: "2024-03-01",
    end_date: "2024-03-03",
    price: 500.00,
    status: "planned"  # planned/ongoing/completed/cancelled
  },
  2 => {
    title: "Хакатон з AI",
    participants: ["Олег Сидоренко"],
    locations: ["Львів"],
    category: "Хакатон",
    start_date: "2024-04-15",
    end_date: "2024-04-17",
    price: 0.00,
    status: "planned"  # planned/ongoing/completed/cancelled
  }
}
```

**Методи:** `add_event`, `edit_event`, `delete_event`, `list_events`, `find_by_title`, `filter_by_category`, `filter_by_status`

---

### Варіант 7 — Менеджер проєктів

```ruby
projects = {
  1 => {
    title: "Розробка сайту",
    team: ["Іван Петренко", "Марія Коваль"],
    tags: ["Web", "Ruby", "Rails"],
    client: "ТОВ Ромашка",
    start_date: "2024-03-01",
    deadline: "2024-06-01",
    budget: 50000.00,
    status: "in_progress"  # planned/in_progress/completed/cancelled
  },
  2 => {
    title: "Мобільний додаток",
    team: ["Олег Сидоренко"],
    tags: ["Mobile", "React Native"],
    client: "ФОП Іваненко",
    start_date: "2024-04-01",
    deadline: "2024-08-01",
    budget: 30000.00,
    status: "planned"  # planned/ongoing/completed/cancelled
  }
}
```

**Методи:** `add_project`, `edit_project`, `delete_project`, `list_projects`, `find_by_title`, `filter_by_status`, `filter_by_tag`

**Клас:** `ProjectManager`

---

### Варіант 8 — Каталог музичної колекції

```ruby
songs = {
  1 => {
    title: "Bohemian Rhapsody",
    artists: ["Queen"],
    genres: ["Rock", "Opera"],
    album: "A Night at the Opera",
    release_date: "1975-10-31",
    duration_seconds: 354,
    rating: 9.5,
    status: "want_to_listen"  # want_to_listen/listening/listened
  },
  2 => {
    title: "Stairway to Heaven",
    artists: ["Led Zeppelin"],
    genres: ["Rock", "Folk"],
    album: "Led Zeppelin IV",
    release_date: "1971-11-08",
    duration_seconds: 482,
    rating: 9.2,
    status: "listened"  # want_to_listen/listening/listened
  }
}
```

**Методи:** `add_song`, `edit_song`, `delete_song`, `list_songs`, `find_by_title`, `filter_by_genre`, `filter_by_artist`


---

### Варіант 9 — Менеджер витрат

```ruby
expenses = {
  1 => {
    title: "Продукти",
    categories: ["Їжа", "Побут"],
    payment_methods: ["Готівка", "Картка"],
    amount: 450.50,
    date: "2024-03-01",
    notes: "Покупка в супермаркеті",
    status: "paid"  # planned/paid/cancelled
  },
  2 => {
    title: "Оренда офісу",
    categories: ["Бізнес"],
    payment_methods: ["Картка"],
    amount: 15000.00,
    date: "2024-03-05",
    notes: "Щомісячна оплата",
    status: "planned"  # planned/ongoing/completed/cancelled
  }
}
```

**Методи:** `add_expense`, `edit_expense`, `delete_expense`, `list_expenses`, `find_by_title`, `filter_by_category`, `filter_by_status`, `total_amount`


---

### Варіант 10 — Каталог спортивних змагань

```ruby
competitions = {
  1 => {
    title: "Чемпіонат України з футболу",
    sports: ["Футбол"],
    teams: ["Динамо", "Шахтар", "Металіст"],
    location: "Київ",
    start_date: "2024-03-01",
    end_date: "2024-05-30",
    prize_fund: 100000.00,
    status: "upcoming"  # upcoming/ongoing/completed/cancelled
  },
  2 => {
    title: "Марафон Київ 2024",
    sports: ["Легка атлетика"],
    teams: ["Збірна України", "Збірна Польщі"],
    location: "Київ",
    start_date: "2024-04-21",
    end_date: "2024-04-21",
    prize_fund: 50000.00,
    status: "upcoming"  # upcoming/ongoing/completed/cancelled
  }
}
```

**Методи:** `add_competition`, `edit_competition`, `delete_competition`, `list_competitions`, `find_by_title`, `filter_by_sport`, `filter_by_status`
