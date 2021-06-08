const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('passport')
let userProfile

app.use(passport.initialize())
app.use(passport.session())

app.set('view engine', 'ejs')

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}))

app.get('/success', (req, res) => res.send(userProfile))
app.get('/error', (req, res) => res.send("error logging in"))

passport.serializeUser(function(user, cb) {
  cb(null, user)
})

passport.deserializeUser(function(obj, cb) {
  cb(null, obj)
})

app.get('/', (req, res) => {
  res.render('pages/auth')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('App listening on port ' + port))
