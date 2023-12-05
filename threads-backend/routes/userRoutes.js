const express = require("express");
const {
    getUserProfile,
    followUnfollowUser,
    signUpUser,
    loginUser,
    logoutUser,
    updateUser
} = require("../controller/userController");
const protectRoute = require("../middleware/protectRoute");

const router = express.Router();
router.get("/profile/:query", getUserProfile);
router.post("/signup", signUpUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followUnfollowUser); // toggle state (follow / unfollow)
router.put("/update/:id", protectRoute, updateUser); // update user

module.exports = router;
