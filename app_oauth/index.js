const express = require('express')
const app = express()
const session = require('express-session')
const db = require('./db/models')
const Op = require('sequelize').Op
require('dotenv').config()

app.set('view engine', 'ejs')

app.use(session({
  resave: false,
  saveUninitialized: true,
  secret: 'SECRET'
}))

app.get('/', (req, res) => {
  res.render('pages/auth')
})

app.get('/data', async (req, res) => {
  const usersWithGoogle = await getUsersWithGoogle()
  res.json(usersWithGoogle)
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log('App listening on port ' + port))


/** Passport */

let passport = require('passport')
let userProfile

app.use(passport.initialize())
app.use(passport.session())

app.get('/success', (req, res) => {
  res.render('pages/success', {user: userProfile})
})
app.get('/error', (req, res) => res.send("error logging in"))

passport.serializeUser((user, cb) => {
  cb(null, user)
})

passport.deserializeUser((obj, cb) => {
  cb(null, obj)
})



/** Google Auth */

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy
const { Sequelize } = require('./db/models')

passport.use(new GoogleStrategy({
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:3000/auth/google/callback'
}, async (accessToken, refreshToken, profile, done) => {
  userProfile = profile
  const currentUser = await findUser(userProfile.id)
  if (!currentUser) {
    await createUser(userProfile)
  }
  return done(null, userProfile)
}))

app.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}))

app.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/error'}), (req, res) => {
  // Successful authentication, redirect success.
  res.redirect('/success')
})


async function findUser(google_id) {
  return await db.User.findOne({
    where: {
      google_id: google_id
    }
  })
}

async function createUser(userProfile) {
  return await db.User.create({
    name: userProfile.displayName,
    google_id: userProfile.id,
    email: userProfile.emails[0].value
  })
}

async function getUsersWithGoogle() {
  return await db.User.findAll({
    where: {
      google_id: {
        // get user data which logged in with google
        [Op.not]: null
      }
    }
  })
}
