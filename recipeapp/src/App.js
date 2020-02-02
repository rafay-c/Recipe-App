import React,{useEffect, useState} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {

  const App_ID = "c0b6d8e7";
  const App_KEY = "8877713b561e760cb359e1816be49b41";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")

  useEffect(() =>{
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);

  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h2>Recipe App</h2>
      <h6>Built by Rafay Chaudhary</h6>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            serves={recipe.recipe.yield}
            allergen={recipe.recipe.healthLabels}
            prep={recipe.recipe.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
