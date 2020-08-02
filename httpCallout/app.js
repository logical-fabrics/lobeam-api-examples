const createError = require('http-errors')
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const jwt = require('jsonwebtoken')
const fs = require('fs')

const app = express()

app.use(logger('dev'))
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.text())

// LoBeam 上で設定されたパスフレーズを環境変数 PHASSPHASE に設定してください
const PASSPHRASE = process.env.PASSPHRASE || ''
const FILE_PATH = process.env.OUTPUT_PATH || './callout.log'

//
// HTTP Callout Endpoint
//
app.post('/', async (req, res) => {
  let decoded
  try {
    decoded = jwt.verify(req.body, PASSPHRASE) // パスフレーズの検証
    console.log(decoded)
  } catch (e) {
    console.log('検証失敗： パスフレーズが一致しません')
    return res.status(400).json({
      result: 'NG',
      posted: req.body,
    })
  }

  fs.appendFileSync(FILE_PATH, JSON.stringify(decoded) + '\n', 'utf8')
  res.json({ result: 'OK' })
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404))
})

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
