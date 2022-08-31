const express = require('express')
const routes = express.Router()

let db = [
  { id: 1, game: 'mario', currency: 'mario', value: 0.5 },
  { id: 2, game: 'league of legends', currency: 'lol', value: 0.3 },
  { id: 3, game: 'world of warcraft', currency: 'wow', value: 0.4 },
]

// Routes
routes.get('/', (req, res) => {
  //Get all coins
  return res.json(db)
})

routes.get('/:id', (req, res) => {
  // Get a specific coin by id
  const { id } = req.params
  const coin = db.find(coin => coin.id == id)
  return res.json(coin)
})

routes.get('/game/:game', (req, res) => {
  // Get a specific coin by name
  const { game } = req.params
  const coin = db.find(coin => coin.game == game)
  return res.json(coin)
})

routes.get('/currency/:currency', (req, res) => {
  // Get a specific coin by currency
  const { currency } = req.params
  const coin = db.find(coin => coin.currency == currency)
  return res.json(coin)
})

module.exports = routes
