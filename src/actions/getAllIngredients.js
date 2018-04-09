const db = require('../db/db')

module.exports = function getAllIngredients() {
  const sql = 'SELECT * FROM ingredients'
  return db.any(sql)
}
