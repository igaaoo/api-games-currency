const express = require('express') // Variables that receive the dependencies
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const routes = require('./config/routes') // Variable that receives the routes

const app = express()

// Settings
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(21262, () => {
  console.log('Server on port 21262')
})
