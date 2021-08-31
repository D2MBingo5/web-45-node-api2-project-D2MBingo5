// implement your posts router here
const express = require('express')
const router = express.Router()
const Post = require('./posts-model')

router.get('/', (req, res) => {
    Post.find(req.query)
        .then(posts => {
            res.json(posts)
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: "The posts information could not be retrieved" })
        })
})

module.exports = router
