# Creational Design Patterns - Examples

Демонстрація креаційних патернів проектування на практичних прикладах.

## Структура проєкту

```
neo-design-patterns-hw-04/
├── src/
│   ├── builder/                        # Патерн Builder (Будівельник)
│   │   ├── DocumentBuilder.ts          # Клас-будівельник документів
│   │   └── main.ts                     # Приклад використання
│   │
│   ├── prototype/                      # Патерн Prototype (Прототип)
│   │   ├── UserProfilePrototype.ts     # Інтерфейс прототипу
│   │   ├── UserProfile.ts              # Клонований об'єкт профілю
│   │   └── main.ts                     # Приклад використання
│   │
│   └── singleton/                      # Патерн Singleton (Одинак)
│       ├── AppConfigService.ts         # Сервіс глобальної конфігурації
│       └── main.ts                     # Приклад використання
│
├── package.json
└── tsconfig.json
```

## Використані патерни проектування

### 1. Builder (Будівельник)

**Призначення**: Покрокове створення складних об'єктів

**Реалізація**: `DocumentBuilder`

- Дозволяє створювати документ з header, body та footer
- Підтримує method chaining для зручного API
- Методи: `addHeader()`, `addBody()`, `addFooter()`, `build()`

---

### 2. Prototype (Прототип)

**Призначення**: Створення нових об'єктів шляхом копіювання існуючих

**Реалізація**: `UserProfile` implements `UserProfilePrototype`

- Клонування профілів користувачів з різними департаментами
- Глибоке копіювання вкладених об'єктів (permissions)
- Метод: `clone()`

---

### 3. Singleton (Одинак)

**Призначення**: Гарантія існування лише одного екземпляра класу

**Реалізація**: `AppConfigService`

- Глобальний доступ до конфігурації застосунку
- Приватний конструктор
- Статичний метод `getInstance()`
- Методи: `get()`, `set()` для роботи з конфігурацією

---

## Інструкція запуску

### Встановлення залежностей

```bash
npm install
```

### Запуск прикладів

**Builder Pattern**:

```bash
npm run builder
```

Вивід: повний документ з header, body та footer

**Prototype Pattern**:

```bash
npm run prototype
```

Вивід: два профілі користувачів (оригінал та клон з модифікаціями)

**Singleton Pattern**:

```bash
npm run singleton
```

Вивід: демонстрація, що обидва виклики повертають той самий екземпляр

### Збірка проєкту

```bash
npm run build
```

Скомпільовані файли будуть в папці `dist/`

### Режим розробки (watch mode)

```bash
npm run dev
```
