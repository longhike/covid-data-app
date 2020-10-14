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
  .get('/', isAuth, (req, res) => {
    console.log(req.body + " in the '/' get in controller");
  })
// handle login/signup
  .post('/login', (req, res, next) => {
    passport.authenticate('local', function(err, user, info) {
      if (user === false) {
        res.redirect('/login')
      } else {
        res.redirect('/')
      }
    })
    (req, res, next);
  })
// handle third party api get
  .get('/api/covid', (req, res) => {
    axios({
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
      .then((response) => {
        let resObj = response.data.data
        res.json(resObj)
      })
      .catch((error) => {
        console.log(error)
        if (error) {
          res.json(error)
        }
      })
  })

module.exports = router;
