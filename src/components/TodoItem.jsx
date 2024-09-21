import React from 'react'
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";

const TodoItem = () => {
  return (
    <li className='todo-item'>
      
      {/* 미완료 - 완료를 구분하는 체크 버튼 */}

      {/* <FaCheckCircle style={{color : 'green'}}></FaCheckCircle> */}
      <FaRegCircle style={{color : 'lightgray'}}></FaRegCircle>

      {/* 할 일 기본 - 할일 완료 - 할 일 수정을 구분하는 태그들 */}

      {/* <input type='text' className='todo-item-edit-input' value='리액트 공부하기'></input> */}
      <span className='todo-item-content'>리액트 공부하기</span>
      {/* <span className='todo-item-content'>리액트 공부하기</span> */}

      {/* 수정 완료 버튼 */}
      <button className='todo-item-submit-btn'>✔️</button>

      {/* 수정 버튼 */}
      <button className='todo-item-edit-btn'>📝</button>

      {/* 삭제 버튼 */}
      <button className='todo-item-delete-btn'>🗑️</button>

    </li>
  )
}

export default TodoItem