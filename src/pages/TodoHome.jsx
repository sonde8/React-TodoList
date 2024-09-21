import React from 'react'
import TodoList from '../components/TodoList'
import TodoInput from '../components/TodoInput'

const TodoHome = () => {
  return (
    <div className='todo-container'>
      <h1 className='todo-tit'>Todo-List</h1>
      <TodoInput/>
      <TodoList/>
      <TodoList/>      
    </div>
  )
}

export default TodoHome