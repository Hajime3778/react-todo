import React from 'react'
import './TodoItem.css'

const TodoItem = ({todo, onClick}) => {
  return (
    <div className="todo-item" onClick={onClick}>
      <div className="todo-item-title">{todo.title}</div>
      <div className="todo-item-description">{todo.description}</div>
    </div>
  )
}

export default TodoItem
