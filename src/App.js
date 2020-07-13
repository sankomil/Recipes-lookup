import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const App_id = "e0191448";
  const App_key = "7e2b50b890575a6d2b6781ab6de83e08";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setquery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_id}&app_key=${App_key}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updatesearch = (e) => {
    setSearch(e.target.value);
  };

  const newquery = (e) => {
    e.preventDefault();
    setquery(search);
    setSearch("");
  };

  return (
    <div className="App">
      <form onSubmit={newquery} className="search-form">
        <input
          className="search-input"
          type="text"
          input={search}
          onChange={updatesearch}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <div className="recipe">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      ;
    </div>
  );
};

export default App;
