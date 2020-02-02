import React from 'react';
import style from './recipe.module.css'

const Recipe = ({title,calories,image,ingredients,serves,allergen,prep}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <p>Total Calories: {calories.toFixed(2)}</p>
            <p> For directions on how to prepare click <a href={prep}><b>HERE</b></a></p>
            <img className={style.image} src={image} alt="" />
            <p>Serves: {serves}</p>
            <h4>Allergy info: {allergen + " "}</h4>
        </div>
    );
};


export default Recipe;