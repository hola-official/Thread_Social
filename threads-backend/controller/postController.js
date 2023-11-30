const User = require("../models/userModel");
const Post = require("../models/postModel");

const createPost = async (req, res) => {
    try {
        const { postedBy, text, img } = req.body;

        if (!postedBy || !text) {
            return res
                .status(400)
                .json({ message: "postedBy and text fields are required" });
        }

        const user = await User.findById(postedBy);

        if (!user) {
            return res.status(404).json({ message: "User not found!" })
        }

        const maxLenth = 500;
        if(text.length > maxLenth) {
            return res.status(400).json({message: `Text must be less than ${maxLenth} characters`})
        }

        const newPost = new Post
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.log("Error in Create Post: ", err.message);
    }
};

module.exports = {
    createPost,
};
