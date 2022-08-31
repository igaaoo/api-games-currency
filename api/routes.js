const express = require('express')
const router = express.Router()

let db = [
  { id: 1, game: 'mario', currency: 'mario', value: 0.5 },
  { id: 2, game: 'league of legends', currency: 'lol', value: 0.3 },
  { id: 3, game: 'world of warcraft', currency: 'wow', value: 0.4 },
]

// router
router.get('/', async (req, res) => {
  //Get all coins
  return res.json(db)
})

router.get('/:id', async (req, res) => {
  // Get a specific coin by id
  const { id } = req.params
  const coin = db.find(coin => coin.id == id)
  return res.json(coin)
})

router.get('/game/:game', async (req, res) => {
  // Get a specific coin by name
  const { game } = req.params
  const coin = db.find(coin => coin.game == game)
  return res.json(coin)
})

router.get('/currency/:currency', async (req, res) => {
  // Get a specific coin by currency
  const { currency } = req.params
  const coin = db.find(coin => coin.currency == currency)
  return res.json(coin)
})

module.exports = router
