const db = require('../models')
const passport = require('passport')
const mongoose = require('mongoose')
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  db.User.findById(id, (err, user) => {
    done(err, user)
  })
})

passport.use('local',
  new LocalStrategy(
    {
      usernameField: "username",
      passwordField: "username"
    },
    async (username, password, done) => {
      try {
        let user = await db.User.findOne({ username })
        
        if (!user)
          user = await db.User.create({ username })

        done(null, user);
      } catch (error) {
        done(error)
      }
    }
  )
);

module.exports = passport