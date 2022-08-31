const express = require('express') // Variables that receive the dependencies
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./api/routes') // Variable that receives the routes

const app = express()

// Settings
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('/api', router)

const PORT = process.env.PORT || 5050 // Variable that receives the port

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`)
})
