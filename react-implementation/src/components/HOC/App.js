import React from 'react';
import './App.css';
import IncrementCounterHoc from './components/HOC/IncrementCounterHoc';


function App(props) {

  const { counter, handleIncrement } = props;

  return (
    <div className="App">
      <h2>Click Counter: {counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}

export default IncrementCounterHoc(App);
