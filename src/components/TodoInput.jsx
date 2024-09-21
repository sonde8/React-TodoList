import React from 'react'

const TodoInput = () => {

  return (
    <div className='todo-inputbox'>
      <input type='text' className='todo-inputbox-input'></input>
      <input type='button' className='todo-inputbox-add-btn' value='등록'></input>
    </div>
  )
}

export default TodoInput