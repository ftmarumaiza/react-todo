import { useState } from 'react'

function TodoItem({ todo, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editText, setEditText] = useState(todo.text)

  const handleSave = () => {
    const trimmed = editText.trim()
    if (!trimmed) return

    onEdit(todo.id, trimmed)
    setIsEditing(false)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSave()
    }

    if (event.key === 'Escape') {
      setEditText(todo.text)
      setIsEditing(false)
    }
  }

  if (isEditing) {
    return (
      <li className="todo-item editing">
        <input
          type="text"
          className="todo-input edit-input"
          value={editText}
          onChange={(event) => setEditText(event.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <div className="btn-group">
          <button className="btn btn-save" onClick={handleSave}>
            Save
          </button>
          <button
            className="btn btn-cancel"
            onClick={() => {
              setEditText(todo.text)
              setIsEditing(false)
            }}
          >
            Cancel
          </button>
        </div>
      </li>
    )
  }

  return (
    <li className="todo-item">
      <span className="todo-text">{todo.text}</span>

      <div className="btn-group">
        <button
          className="btn btn-edit"
          onClick={() => setIsEditing(true)}
        >
          Edit
        </button>
        <button
          className="btn btn-delete"
          onClick={() => onDelete(todo.id)}
        >
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
