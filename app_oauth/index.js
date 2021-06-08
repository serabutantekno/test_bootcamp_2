const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('passport')
require('dotenv').config()
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

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET
passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  userProfile = profile
  return done(null, userProfile)
}))

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/error'}, (req, res) => {
  // Successful authentication, redirect success.
  res.redirect('/success')
}))

app.get('/', (req, res) => {
  res.render('pages/auth')
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('App listening on port ' + port))
