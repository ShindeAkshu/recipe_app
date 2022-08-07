
import { useEffect } from 'react';
import './App.css';

function App() {
  const APP_ID = '1a2a1b1d';
  const APP_KEY = 'd1de282e53eaa9a2bc9b495332514cb1';
  const exampleReq =`https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`;
  const[counter,setCounter] = useState (0);
  useEffect(() => {
    console.log('Effect has been run');
  })
  return (
    <div className="App">
      <form clasName="Search-form">
        <input className = " search-bar" type="text"/>
        <button  className="search-button" type="Submit">Search</button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
}

export default App;
