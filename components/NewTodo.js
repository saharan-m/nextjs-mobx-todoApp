import React,{useRef} from 'react'
import classes from './NewTodo.module.css'

const NewTodo = (props) => {
    const textInputRef = useRef('');
    const submitHandler=(event)=>{
        event.preventDefault();

        const enteredText = textInputRef.current.value;
        if(enteredText.trim().length===0){
            return;
        }

        props.onAddTodo(enteredText);
    }
  return (
    <form onSubmit={submitHandler} className={classes.form}>
            <label htmlFor='text'>Todo Text</label>
            <input type='text' ref={textInputRef}/>
            <button>Add Todo</button>
        </form>
  )
}

export default NewTodo