const db = require('../db/db')

/**
 * [addIngredient description]
 * @param {String} name             [description]
 * @param {String} [akas='']        [description]
 * @param {String} [description=''] [description]
 * @returns {Promise} resolves to id of added ingredient
 */
module.exports = function addIngredient(name, akas = '', description = '') {
  const sql = 'INSERT INTO ingredients (name, akas, description) VALUES $1, $2, $3 RETURNING id'
  return db.one(sql, [name, akas, description])
}
