const express = require("express");

const router = express.Router();

const db = require('./data/dbConfig')

router.get('/', (req, res) => {
    db('cars')
    .then( cars => {
        res.status(200).json(cars)
    })
    .catch( err => {
        res.status(500).json({ error: err.message})
    })
})


module.exports = router;