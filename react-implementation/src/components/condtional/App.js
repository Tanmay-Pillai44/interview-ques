import React, { useState } from 'react';
import './App.css';
import ParentComp from './components/condtional/Parent';

function App() {

  const [isRender, setIsRender] = useState(true);

    const handleRender = () => {
        setIsRender(!isRender);
    }

  return (

      <div className="App">
        <ParentComp isRender={isRender} />
        <button onClick={handleRender}>Change Comp</button>
      </div>

  );
}

export default App;
