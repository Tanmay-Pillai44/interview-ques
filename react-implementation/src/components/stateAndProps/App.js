import './App.css';
import StateAndPropsExample from './components/stateAndProps/stateAndPropsExample';

function App() {

  const data = "Hi i am from App Component"

  return (
    <div className="App">
      <StateAndPropsExample data={data} />
    </div>
  );
}

export default App;
