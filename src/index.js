require('dotenv')
const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

const PORT = process.env.PORT || 3000
const ROOT_DIR = path.resolve(__dirname, '../')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.static(`${ROOT_DIR}/public`))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(routes)

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}...`) //eslint-disable-line no-console
})
