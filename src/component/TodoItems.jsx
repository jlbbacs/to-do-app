import React from 'react'
import Tick from '../assets/tick.png'
import Not_Tick from '../assets/not_tick.png'
import Delete_Icon from '../assets/delete.png'

const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick ={()=>{toggle(id)}}className='flex flex-1 items-center cursor-pointer'>
            <img src={isComplete ?Tick : Not_Tick} alt=""  className='w-7'/>
            <p className={`text-slate-700 ml-4 text-[17px] decoration-slate-500 ${isComplete ? "line-through" : "" } `}>{text}</p>
        </div>

        <img onClick={()=>{deleteTodo(id)}} className='w-4 cursor-pointer' src={Delete_Icon} alt="" />
    </div>
  )
}

export default TodoItems
