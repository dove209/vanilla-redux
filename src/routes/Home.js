import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../store';

const Home = () => {
  const [text, setText] = useState('');
  const toDos = useSelector(state => state);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setText('')
    dispatch(addTodo(text))
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}> 
        <input type={'text'} value={text} onChange={onChange} ></input>
        <button>Add</button>
        <ul>
        {toDos.map((todo) => {
          return(
            <li key={todo.id}>
              {todo.text}
            </li>
          )
        })}
        </ul>

      </form>
    </>
  )
}

export default Home;