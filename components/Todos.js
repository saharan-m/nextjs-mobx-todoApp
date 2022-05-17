import React from 'react'
import Todo from './todo/Todo'
import classes from './Todos.module.css'
import {observer} from 'mobx-react-lite'

const Todos = observer(({store}) => {
    const removeHandler = (id)=>{
        store.removeTodo(id);
    }
  return (
    <ul className={classes.todos}>
      {store.todos.map((item) => (
        <Todo onRemoveTodo = {removeHandler.bind(null,item.id)} text = {item.text} id = {item.id}key={item.id}/>
      ))}
    </ul>
  )
}
)

export default Todos