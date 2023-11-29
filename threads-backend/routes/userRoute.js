const express = require("express");
const { followUnfollowUser, signUpUser, loginUser, logoutUser, getUserProfile } = require("../controller/userController");
const protectRoute = require('../middleware/protectRoute')

const router = express.Router();
router.post('/signup', signUpUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.post('/follow/:id', protectRoute, followUnfollowUser) // toggle state (follow/unfollow)
router.get('/getuserprofile', protectRoute, getUserProfile) 
module.exports = router