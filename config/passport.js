const db = require('../models')
const passport = require('passport')
const mongoose = require('mongoose')
const LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => {
    done(null, user.id)
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
            passwordField: "username", 
            passReqToCallback: true 
        }, 
        (username, password, done) => {
              User.findOne(
                {username: username}, 
                (err, user) => {
                if (err) {
                  return done(err);
                } else {
                return done(null, user);
                }
              });
              }
            )
);

module.exports = passport