import React, { useState } from 'react';
import './App.css';
import PureComponentClass from './components/PureComponent/pureComponentClass';
import PureComponentFunc from './components/PureComponent/pureComponentFunc';


function App() {

  const [counter1, setCounter1] = useState(0)

  const [counter2, setCounter2] = useState(10)

  return (
    <div className="App">
      <PureComponentClass counter1={counter1} />
      <PureComponentFunc counter1={counter1} />
      <h2>Counter 2: {counter2}</h2>
      <button onClick={() => setCounter2(counter2 + 1)}>Click Me</button>
    </div>
  );
}

export default App;
