const express = require('express')
const router = express.Router()

let db = [
  { id: 1, game: 'super mario', currency: 'mariocoin', value: 0.09 },
  { id: 2, game: 'world of warcraft', currency: 'wowtoken', value: 20 },
  { id: 3, game: 'monster hunter', currency: 'zeni', value: 0.01 },
  { id: 4, game: 'animal crossing', currency: 'bells', value: 0.01 },
  { id: 5, game: 'final fantasy', currency: 'gil', value: 0.012 },
  { id: 6, game: 'kingdom hearts', currency: 'munny', value: 0.015 },
  { id: 7, game: 'fallout', currency: 'caps', value: 0.03 },
  { id: 8, game: 'zelda', currency: 'rupees', value: 0.5 },
  { id: 9, game: 'the sims', currency: 'simoleons', value: 1.28 },
  { id: 10, game: 'bioshock infinite', currency: 'silvereagles', value: 33 },
  { id: 11, game: 'skyrim', currency: 'septim', value: 143 },
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
