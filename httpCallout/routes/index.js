const express = require('express')
const router = express.Router()

/* GET users listing. */
router.get('/', async (req, res) => {
  res.send(`
    /dispatched<br />
    /arrived<br />
    /done<br />
  `)
})

module.exports = router
