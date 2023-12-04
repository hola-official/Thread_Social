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
            return res.status(404).json({ message: "User not found!" });
        }

        const maxLenth = 500;
        if (text.length > maxLenth) {
            return res
                .status(400)
                .json({ message: `Text must be less than ${maxLenth} characters` });
        }

        const newPost = new Post({ postedBy, text, img });

        await newPost.save();

        res.status(201).json({ message: "Post created successfully", newPost });
    } catch (err) {
        res.status(500).json({ error: err.message });
        console.log("Error in Create Post: ", err.message);
    }
};

const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json({ message: "Post retrived", post });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log("Error in Get Post: ", err.message);
    }
};

const deletePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        if (post.postedBy.toString() !== req.user._id.toString()) {
            return res
                .status(401)
                .json({ message: "Unauthorized to delete this post" });
        }
        await Post.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message }); // ineternal server error
        console.log("Error in Delete Post: ", err.message);
    }
};

const likeUnlikePost = async (req, res) => {
    try {
        const { id: postId } = req.params;
        const userId = req.user._id;

        const post = await Post.findById(postId);

        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        const userLikedPost = post.likes.includes(userId);

        if (userLikedPost) {
            await Post.updateOne({ _id: postId }, { $pull: { likes: userId } });
            res.status(200).json({ message: "Post unliked successfully" });
        } else {
            post.likes.push(userId);
            await post.save();

            res.status(200).json({ message: "Post liked successfully" });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log("Error in Like and Unlike Post: ", err.message);
    }
};

const replyToPost = async (req, res) => {
    try {
        const { text } = req.body;
        const postId = req.params.id;
        const userId = req.user._id;
        const userProfilePic = req.user.profilePic;
        const username = req.user.username;

        if (!text) {
            return res.status(400).json({ message: "Text field is required" });
        }

        const post = await Post.findById(postId);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        const reply = { userId, text, userProfilePic, username };

        post.replies.push(reply);
        await post.save();

        res.status(200).json({ message: "Reply added successfully", post });
    } catch (err) {
        res.status(500).json({ message: err.message });
        console.log("Error in Reply To Post: ", err.message);
    }
};

const getFeedPost = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        const following = user.following;

        const feedPosts = await Post.find({ postedBy: { $in: following } }).sort({
            createdAt: -1,
        });

        res.status(200).json({ feedPosts });
    } catch (err) {
        res.status(500).json({ message: err.message }); // Internal server error
        console.log("Error in Get Feed Post: ", err.message);
    }
};

const getUserPosts = async (req, res) => {
    const { username } = req.params
    try {
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        const posts = await Post.find({ postedBy: user._id }).sort({ createdAt: -1 })
        res.status(200).json({ posts });
    } catch (err) {
        res.status(500).json({ error: err.message })
        console.log("Error in Get User Post: ", err.message);
    }
}

module.exports = {
    getPost,
    createPost,
    deletePost,
    likeUnlikePost,
    replyToPost,
    getFeedPost,
    getUserPosts,
};
