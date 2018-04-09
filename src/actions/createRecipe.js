const db = require('../db/db')
const findIngredientByName = require('./findIngredientByName')

module.exports = async function createRecipe(title, ingredientsArray, directions) {
  const newRecipeQuery = 'INSERT INTO recipes (title, directions) VALUES $1, $2 RETURNING id'
  let recipeId = await db.one(newRecipeQuery, [title, directions])
  const addIngredientToRecipeQuery = 'INSERT INTO recipes_ingredients (recipe_id, ingredient_id, quantity, units)'
  for (let i = 0; i < ingredientsArray.length; i++) {
    let ingredientId = await findIngredientByName(ingredientsArray[i][0])
    if (!ingredientId) {
      ingredientId = await addIngredient(ingredientsArray[i][0])
    }
    db.none(addIngredientToRecipeQuery, [recipeId, ingredientId, ingredientsArray[i][1], ingredientsArray[i][2]])
  }
  return recipeId
}

// ingredientsArray is a 2d array of ingredients
// each ingredient [name, quantity, units]
