import React,{useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe';

const App = () => {

  const APP_ID = "a0a9f958";
  const APP_KEY = "a5b60f8168c8268fc1798c15df28301e";

  const [recipes, setRecipes] = useState([]); 
  const [search, setSearch] =useState('');
  const [query, setQuery] = useState('chicken'); 

  useEffect(() => {
    getRecipes();
  }, [query]); //This empty arry is used to make useEffect run only once

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`); 
    //await is used to wait till a response is received
    const data = await response.json();
    //.json() is used to make the received data readable to us
    setRecipes(data.hits);
    //console.log(data.hits);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return(
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
        <button className="search-button" type="submit">Search</button>
      </form>
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
    </div>
    
  );
}

export default App;
