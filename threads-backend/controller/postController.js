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
        if (text.length > maxLenth) {
            return res.status(400).json({ message: `Text must be less than ${maxLenth} characters` })
        }

        const newPost = new Post({ postedBy, text, img });

        await newPost.save()

        res.status(201).json({ message: "Post created successfully", newPost })
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.log("Error in Create Post: ", err.message);
    }
};

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id)

        if(!post) {
            return res.status(404).json({message: "Post not found"})
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
        console.log("Error in Get Post: ", err.message);
    }
}

module.exports = {
    getPost,
    createPost,
};
