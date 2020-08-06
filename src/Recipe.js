import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title, calories, image, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1 >{title}</h1>
            <h3>Ingredients</h3>
            <ul>
                {ingredients.map(ingredients => (
                    <li>{ingredients.text}</li>
                ))}
            </ul>
            <p>Calories: {calories}</p>
            <img src={image} className={style.image} alt=""></img>
            Rate the recipe if you loved it:<div class="ui star rating" role="radiogroup" tabindex="-1"><i tabindex="0" aria-checked="false" aria-posinset="1" aria-setsize="4" class="active icon" role="radio"></i><i tabindex="0" aria-checked="false" aria-posinset="2" aria-setsize="4" class="active icon" role="radio"></i><i tabindex="0" aria-checked="true" aria-posinset="3" aria-setsize="4" class="active icon" role="radio"></i><i tabindex="0" aria-checked="false" aria-posinset="4" aria-setsize="4" class="icon" role="radio"></i></div>
        </div>
    );
}

export default Recipe;


