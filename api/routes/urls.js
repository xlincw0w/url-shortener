const express = require('express')
const router = express.Router()
const db = require('../database')
const dayjs = require('dayjs')
const { v4 } = require('uuid')
const shortId = require('shortid')

router
    .route('/')
    .get((req, res) => {
        db('urls')
            .select('*')
            .orderBy('accessed', 'desc')
            .then((row) => {
                res.status(200).send(row)
            })
            .catch((err) => {
                console.log(err)
                res.send([])
            })
    })
    .post((req, res) => {
        const { long_url } = req.body
        const new_row = {
            id_url: v4(),
            long_url,
            short_url: shortId.generate(),
            createdat: dayjs(),
        }

        db('urls')
            .insert(new_row)
            .then((row) => {
                res.status(200).send({ added: true, row: new_row })
            })
            .catch((err) => {
                console.log(err)
                res.send({ added: false })
            })
    })

module.exports = router
