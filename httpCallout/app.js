const createError = require('http-errors')
const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const jwt = require('jsonwebtoken')

const app = express()

app.use(logger('dev'))
// app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(bodyParser.text())

// この値を LoBeam 上で設定されたパスフレーズに書き換えてください
const PASSPHRASE = 'YOUR_PASSPHRASE'

//
// HTTP Callout Endpoint
//
app.post('/', async (req, res) => {
  try {
    const decoded = jwt.verify(req.body, PASSPHRASE) // パスフレーズの検証
    console.log(decoded)
    res.json({
      result: 'OK',
      decoded,
      posted: req.body,
    })
  } catch (e) {
    console.log('検証失敗： パスフレーズが一致しません')
    res.status(400).json({
      result: 'NG',
      posted: req.body,
    })
  }
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
