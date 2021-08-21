const express = require('express')
const router = express.Router()
const db = require('../database')
const moment = require('moment')
const { v4 } = require('uuid')

router.route('/:short_url').get((req, res) => {
    const short_url = req.params.short_url

    db('urls')
        .select('*')
        .where({ short_url })
        .then((row) => {
            res.status(200).send({ row: row[0] })
        })
        .catch((err) => {
            console.log(err)
            res.send({ row: null })
        })
})

module.exports = router
