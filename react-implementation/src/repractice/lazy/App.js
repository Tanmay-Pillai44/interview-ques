import React, { useState } from 'react';
import './App.css';
import LazyComp from './repractice/lazy/lazyComp';



function App() {

  const [user, setUser] = useState("customer")

  return (

      <div className="App">
        <LazyComp user={user} />
        <button onClick={() => setUser("admin")}>Admin</button>
        <button onClick={() => setUser("customer")}>Customer</button>
      </div>

  );
}

export default App;
