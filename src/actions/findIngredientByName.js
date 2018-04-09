const db = require('../db/db')

/**
 * Given an ingredient name, return id (or null if not in db)
 * @param  {string} name (lowercase) name of ingredient
 * @return {Promise}      resolves to number - id of ingredient, null if not found
 */
module.exports = function findIngredientByName(name) {
  const sql = 'SELECT id FROM ingredients WHERE name = $1'
  return db.oneOrNone(sql, name)
}
