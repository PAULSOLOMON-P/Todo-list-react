import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoLIst"

function App() {
 

const [todos,setTodos] = useState([])

const [todovalue,settodovalue] = useState('')

function persistData(newlist){
  localStorage.setItem('todos',JSON.stringify({todos:
    newlist
  }
  ))
}

function handleAddTodos(newTodo){
  const newTodoList = [...todos,newTodo]
  persistData(newTodoList)
  setTodos(newTodoList)
}
  
function handleDeleteTodo(index){
  const newTodoList = todos.filter((todo,todoindex)=>{
    return todoindex !== index
  })
  persistData(newTodoList)
  setTodos(newTodoList)
}

function handleEditTodo(index){
  const editTodoList=todos[index]
  settodovalue(editTodoList)
  handleDeleteTodo(index)
}

useEffect (()=>{
  if (!localStorage){
    return
  }

  let localTodo = localStorage.getItem('todos')

  if(!localTodo){
    return
  }
  console.log(localTodo)
  localTodo= JSON.parse(localTodo).todos
  setTodos(localTodo)
},[])


  return (
   <>
    <TodoInput todovalue={todovalue} settodovalue={settodovalue} handleAddTodos={handleAddTodos}/>
    <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
   </>
  )
}

export default App
