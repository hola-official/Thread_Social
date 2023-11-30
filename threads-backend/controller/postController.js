const User = require("../models/userModel")

const createPost = async (req, res) => {
    try {
        const { postedBy, text, img } = req.body

        if (!postedBy || !text) {
            return res.status(400).json({ message: "postedBy and text fields are required" })
        }

        const user = await User.findById(postedBy);


    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log("Error in CreatePost", err.message);
    }
}

module.exports = {
    createPost
}