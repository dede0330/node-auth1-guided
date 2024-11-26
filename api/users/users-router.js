const router = require('express').Router()

const Users = require('./users-model.js')
const { restricted } = require('../auth/auth-middleware.js')

router.get('/', restricted, (req, res, next) => {
  Users.find()
    .then(users => {
      res.json(users)
    })
    .catch(next) // our custom err handling middleware will trap this
})

module.exports = router