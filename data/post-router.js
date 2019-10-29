const router = require('express').Router()
const Posts = require('./db.js')
//imports


router.get('/', (req, res) => {
    Posts.find()
    .then(posts => {
        res.status(200).json(posts)
    })
    .catch(err => {
        console.log(err)
        res.status(500)
        .json({ error: "The posts information could not be retrieved." })
    })
})


module.exports = router