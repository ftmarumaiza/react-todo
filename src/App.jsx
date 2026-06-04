import { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

function App() {
  const [todos, setTodos] = useState([])
  const [nextId, setNextId] = useState(1)

  const addTodo = (text) => {
    setTodos([...todos, { id: nextId, text }])
    setNextId(nextId + 1)
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    )
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Tasks</h1>
        <p className="subtitle">A simple place to keep track of what matters today.</p>
      </header>

      <TodoForm onAdd={addTodo} />

      <TodoList
        todos={todos}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />

      {todos.length > 0 && (
        <p className="task-count">
          {todos.length} task{todos.length !== 1 ? 's' : ''}
        </p>
      )}
    </div>
  )
}

export default App
