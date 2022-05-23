import React, { useState } from 'react';
import './App.css';
import ReactLifecycle from './components/reactLifecycle/reactLifecycle';


function App() {

  const [showComp, setShowComp] = useState(true);

  return (
    <div className="App">
      {
        showComp && <ReactLifecycle />
      }
      <button onClick={() => setShowComp(!showComp)}>Remove Component</button>
    </div>
  );
}

export default App;
