const db = require('../db/db')

module.exports = function addIngredientToCupboard(cupboard_id, ingredient_id) {
  const sql = 'INSERT INTO cupboards_ingredients (cupboard_id, ingredient_id) VALUES $1, $2'
  return db.one(sql, [cupboard_id, ingredient_id])
}
