import React, { useState } from 'react';

const Home = () => {
  const [text, setText] = useState('');

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setText('')
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}> 
        <input type={'text'} value={text} onChange={onChange} ></input>
        <button>Add</button>
      </form>
    </>
  )
}

export default Home