import React from "react";
import RecipeTodoList from "./RecipeToDoList.js";

function RecipeList({ recipes, deleteRecipe }) {
  
/* tbody will enter the RecipeTodoList -- and grab all material then come back 
and print it
*/
  return (
    <div className="recipe-list">
      <table>
        <thead>
   
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
        
        </thead>
        <tbody>
    
          {recipes.map((recipe, index) => {
            return <RecipeTodoList recipe={recipe} deleteRecipe={() => deleteRecipe(index)} />
          })}
          
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;