import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.heading}>{title}</h1>
      <h2>Calories: {Math.floor(calories)}</h2>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
