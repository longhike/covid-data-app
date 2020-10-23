// THIS WILL HOLD ALL THE THIRD PARTY AND LOCAL API ROUTES

// 'use strict'

require('dotenv').config()
const path = require('path')
const db = require('../models')
const passport = require('../config/passport')
const isAuth = require('../config/middleware/isAuthenticated')
const express = require('express');
const router = express.Router()
const axios = require("axios");
const _url = "https://covid-19-statistics.p.rapidapi.com/reports/total"
const key = process.env.API_KEY

router
  .get('/user', (req, res, next) => {
    console.log('===== user!! ======')
    console.log(req.user)
    if (req.user.username) {
      res.json({ user: req.user.username, id: req.user._id, posts: req.user.posts })
    } else {
      res.json({ user: null })
    }
  })

  .post('/login', passport.authenticate("local"), function (req, res) {
    res.json(req.user)
  })

  
  .post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        res.send({ msg: 'logging out' })
    } else {
        res.send({ msg: 'no user to log out' })
    }
  })


  .get('/posts', isAuth, async (req, res) => {
    const posts = req.user.posts

    if (posts === []) {
      return
    } else {
      db.Post.find( { _id: { $in: posts } }, null, { sort: { date: -1 } }, (err, response) => {
        if (err) {
          console.log(err);
        } else {
          res.json(response)
        }
      })
    }
  })

  .post('/posts/delete/:id', (req, res) => {
    db.Post.findById({ _id: req.params.id })
    .then(dbModel => dbModel.remove())
    .then(dbModel => res.json(dbModel))
    .catch(err => {
        res.status(422).json(err)
    })
  })
  // handle third party api get
  .get('/api/covid', isAuth, async (req, res) => {
    try {
      const response = await axios({
        "method": "get",
        "url": _url,
        "headers": {
          "content-type": "application/octet-stream",
          "x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
          "x-rapidapi-key": key,
          "useQueryString": true
        },
        "params": req.query
      })
      let resObj = response.data.data
      const newPost = await db.Post.create(resObj)

      const user = await db.User.findByIdAndUpdate(req.user._id, {
        $push: { posts: newPost._id }
      })
      res.json(user)
    } catch (error) {
      res.sendStatus(500)
    }
  })

module.exports = router;
