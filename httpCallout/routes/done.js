const axios = require('axios')
const faker = require('faker')
const jwt = require('jsonwebtoken')
const express = require('express')
const router = express.Router()
const argv = require('yargs')
  .usage('usage: $0 <command> [options]')
  .alias('u', 'url')
  .nargs('u', 1)
  .describe('u', 'URL')
  .alias('p', 'passphrase')
  .nargs('p', 1)
  .describe('u', 'passphrase')
  .demandOption(['u', 'p']).argv

const { basePayload } = require('../lib/constants')

const url = argv.u
const passphrase = argv.p

/* GET users listing. */
router.get('/', async (req, res) => {
  const payload = {
    ...basePayload,
    status: 'DONE',
    eventType: 'SESSION UPDATE',
    doneAt: faker.date.recent(),
  }
  res.send(payload)

  const token = jwt.sign(payload, passphrase)
  await axios.post(url, token)
})

module.exports = router
