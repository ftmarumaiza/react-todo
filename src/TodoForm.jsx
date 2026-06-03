import { useState } from 'react'

function TodoForm({ onAdd }) {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = () => {
    const trimmed = inputValue.trim()
    if (!trimmed) return

    onAdd(trimmed)
    setInputValue('')
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSubmit()
    }
  }

  return (
    <div className="todo-form">
      <input
        type="text"
        className="todo-input"
        placeholder="Add a task"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        onKeyDown={handleKeyDown}
      />

      <button
        className="btn btn-add"
        onClick={handleSubmit}
        disabled={!inputValue.trim()}
      >
        Add task
      </button>
    </div>
  )
}

export default TodoForm
