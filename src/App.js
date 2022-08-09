import Recipe from './Recipe';
import { useEffect } from 'react';
import './App.css';
import {useState} from 'react';


function App() {
  const APP_ID = '1a2a1b1d';
  const APP_KEY = 'd1de282e53eaa9a2bc9b495332514cb1';
  
  const [recipes,setRecipes] = useState([]);
  const [search,setSearch] = useState();
     useEffect(() => {
     GetRecipes();
  },[]);

  const GetRecipes = async () => {
    const response  = await fetch (`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
  
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };  
  
   const updateSearch = e =>{
    setSearch(e.target.value)
   }
  
  return (
    <div className="App">
      <form clasName="Search-form">
        <input className = " search-bar" type="text" value={search} onChnage={updateSearch}/>
        <button  className="search-button" type="Submit">Search</button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories}
        image={recipe.recipe.image}/>
      ))}
    </div>
  );
}

export default App;
