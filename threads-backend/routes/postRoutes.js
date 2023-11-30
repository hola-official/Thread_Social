const express = require('express')
const { createPost } = require('../controller/postController')
const router = express.Router()

router.post("/create", createPost)

module.exports = router