const express = require("express");
const { signUpUser, loginUser, logoutUser, followUnfollowUser } = require("../controller/userController");

const router = express.Router();
router.post('/signup', signUpUser)
router.post('/login', loginUser)
router.post('/logout', logoutUser)
router.post('/follow/:id', protectRoute, followUnfollowUser) // toggle state (follow/unfollow)

module.exports = router