const express = require("express");
const { followUnfollowUser, signUpUser, loginUser, logoutUser, getUserProfile } = require("../controller/userController");
const protectRoute = require('../middleware/protectRoute')

const router = express.Router();
router.get('/getuserprofile', protectRoute, getUserProfile)
router.post('/signup', signUpUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.post('/follow/:id', protectRoute, followUnfollowUser) // toggle state (follow/unfollow)
module.exports = router