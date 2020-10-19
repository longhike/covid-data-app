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
const testUserId = "5f86424d9621d10de85c9e0d"

router
  // this will not run until i update in the main component.
  .get('/', (req, res) => {
    console.log(testUserId);
    db.User.findById(testUserId, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        console.log(response._id + ' in the / get');
      }
    })


  })

  .get('/user/', (req, res, next) => {
    console.log('===== user!!======')
    console.log(req.body)
    if (req.body.username) {
      res.json({ user: req.body.username })
    } else {
      res.json({ user: null })
    }
  })



  .post("/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user)
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

      console.log(typeof resObj.confirmed)
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
