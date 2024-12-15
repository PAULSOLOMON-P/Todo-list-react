import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList(props) {
  const {todos} = props
   
  return (
    <ul className='main'>
       {todos.map((todo,todoindex) =>{
        return(
           <TodoCard {...props} key={todoindex} index={todoindex}>
            <p>{todo}</p>
           </TodoCard>
        )
       })}
     </ul>
  )
}
