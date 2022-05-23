import React, { useState } from 'react';
import './App.css';
import UseEffectExample from './components/Hooks/useEffectExample';
import UseReducerExample from './components/Hooks/useReducerExample';
import UseStateExample from './components/Hooks/useStateExample';
import UseRefExample from './components/Hooks/useRefExample';
import CallbackAndMemoParent from './components/Hooks/CallbackandMemo/callbackAndMemoParent';
import UserContextComp from './components/Hooks/ContextAPI/UserContext';
import Child1 from './components/Hooks/ContextAPI/child1';


function App() {

  const [show, setShow] = useState(true)

  return (
    <div className="App">
      {/* <UseStateExample /> */}


      {/* {
        show && <UseEffectExample />
      }
      <button onClick={() => setShow(!show)}>Toggle Comp</button> */}


      {/* <UseReducerExample /> */}


      {/* <UseRefExample /> */}


      {/* <CallbackAndMemoParent /> */}


      {/* <UserContextComp>
        <Child1 />
      </UserContextComp> */}
    </div>
  );
}

export default App;
