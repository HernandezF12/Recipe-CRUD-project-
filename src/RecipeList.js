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
<tr>
<th>Name</th>
<th>Cuisine</th>
<th>Photo</th>
<th>Ingredients</th>
<th>Preparation</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{recipes.map((recipe, index) => (
<tr>
<td className="reg_col">{recipe.name}</td>
<td className="reg_col">{recipe.cuisine}</td>
<td className="reg_col">
<img src={recipe.photo} alt={recipe.name} />
</td>
<td className="content_td">
<p>{recipe.ingredients}</p>
</td>
<td className="content_td">
<p>{recipe.preparation}</p>
</td>
<td>
<button
name="delete"
key={index}
onClick={() => deleteRecipe(index)}
>
Delete
</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}
export default RecipeList;