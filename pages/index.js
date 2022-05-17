import React from 'react'
import NewTodo from '../components/NewTodo';
import Todos from '../components/Todos';
import todoStore from '../store';

const Homepage = () => {
    // const [todos,setTodos] = useState([]);

    const addHandler=(item)=>{
        todoStore.addTodo(item)
    }
  return (
      <>
    <NewTodo onAddTodo={addHandler}/>
    <Todos store = {todoStore}/>
    </>
  )
}

export default Homepage