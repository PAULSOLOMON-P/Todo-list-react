import React, { useState } from 'react'

export default function TodoInput(props) {
  const {handleAddTodos,todovalue,settodovalue} = props

  return (
    <header>
        <input value={todovalue} onChange={(e)=>{
          settodovalue (e.target.value)
        }} placeholder='Enter todo'/>
        <button onClick={()=>{
          handleAddTodos(todovalue)
          settodovalue('')
        }}>Add</button>
    </header>
  )
}
