import Recipe from './Recipe';
import { useEffect } from 'react';
import './App.css';

function App() {
  const APP_ID = '1a2a1b1d';
  const APP_KEY = 'd1de282e53eaa9a2bc9b495332514cb1';
  
  const [recipes,setRecipes] = useState([])
     useEffect(() => {
     GetRecipes();
  },[]);

  
   
  
  return (
    <div className="App">
      <form clasName="Search-form">
        <input className = " search-bar" type="text"/>
        <button  className="search-button" type="Submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe/>
      ))}
    </div>
  );
}

export default App;
