const db = require('./db')

db.query('INSERT INTO users (email, password) VALUES ($1, $2)', ['first@user.com', 'pAsSwOrD'])
