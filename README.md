# 📝 React Todo CRUD App — Beginner's Guide

A simple, fully-commented Todo application built with React to demonstrate
core fundamentals: **Components, Props, State, Event Handling,
Conditional Rendering, and List Rendering**.

---

## 🗂️ Project Structure

```
todo-app/
├── index.html           ← HTML shell — React mounts here
├── vite.config.js       ← Vite bundler config
├── package.json         ← Dependencies & scripts
└── src/
    ├── main.jsx         ← Entry point — renders <App /> into #root
    ├── index.css        ← All styling (plain CSS)
    ├── App.jsx          ← Root component — owns all state & handlers
    ├── TodoForm.jsx     ← Add-task input form
    ├── TodoList.jsx     ← Renders the list of todos
    └── TodoItem.jsx     ← Single todo row (view + edit mode)
```

---

## 🚀 How to Run

### Prerequisites
- **Node.js** v16 or later — download from https://nodejs.org

### Steps

```bash
# 1. Go into the project folder
cd todo-app

# 2. Install dependencies (only needed once)
npm install

# 3. Start the development server
npm run dev
```

Then open your browser at **http://localhost:5173** 🎉

---

## 🧱 Component Overview

| Component | Role | State it owns | Props it receives |
|-----------|------|--------------|-------------------|
| `App.jsx` | Root — data owner | `todos[]`, `nextId` | — |
| `TodoForm.jsx` | Input form for new tasks | `inputValue` | `onAdd` |
| `TodoList.jsx` | Maps todos → TodoItem | — | `todos`, `onDelete`, `onEdit` |
| `TodoItem.jsx` | Single row (view/edit) | `isEditing`, `editText` | `todo`, `onDelete`, `onEdit` |

---

## ⚛️ React Concepts Checklist

| Concept | Where Used |
|--------|------------|
| `useState` | App, TodoForm, TodoItem |
| Props (passing data down) | App → TodoForm, TodoList → TodoItem |
| Props (passing functions) | `onAdd`, `onEdit`, `onDelete` |
| Controlled inputs | TodoForm input, TodoItem edit input |
| List rendering with `map()` | TodoList |
| `key` prop | Each `<TodoItem key={todo.id}>` |
| Conditional rendering | Empty state, edit vs view mode, button disabled |
| Event handling | onClick, onChange, onKeyDown |

---

## ✨ Features

- ➕ **Add** a new task (Enter key or button)
- 📋 **View** all tasks in a list
- ✏️ **Edit** any task inline (Escape to cancel)
- 🗑️ **Delete** a task
- 🔢 Live task count at the bottom

---

## 🎓 Learning Tips

1. Read the comments in each `.jsx` file — they explain every decision.
2. Open **React DevTools** in your browser to inspect component trees and state.
3. Try breaking things! Delete a prop and see what error React gives you.
4. Add a "completed" checkbox as your next exercise (hint: add `completed: false` to each todo).
