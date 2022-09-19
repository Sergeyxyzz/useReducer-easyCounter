import React, { useState, useReducer } from 'react';

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RND: 'rnd',
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 };
    case ACTIONS.RND:
      return { count: Math.round(Math.random() * 100000) };
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  function increment() {
    dispatch({ type: ACTIONS.INCREMENT });
  }

  function decrement() {
    dispatch({ type: ACTIONS.DECREMENT });
  }

  function rnd() {
    dispatch({ type: ACTIONS.RND });
  }

  return (
    <>
      <button onClick={decrement}>decr</button>
      <span>{state.count}</span>
      <button onClick={increment}>incr</button>
      <button onClick={rnd}>rnd</button>
    </>
  );
}

export default App;
