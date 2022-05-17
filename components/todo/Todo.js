import React from 'react'
import classes from './Todo.module.css'
const Todo = (props) => {
  return (
    <li className={classes.item} onClick={props.onRemoveTodo}>{props.text}</li>
  )
}

export default Todo