import React from 'react'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

const TodoHome = () => {
  return (
    <div>
      <h1>해야할 일</h1>
      <TodoInput></TodoInput>
      <TodoList></TodoList>
      <TodoList></TodoList>
    </div>
  )
}

export default TodoHome