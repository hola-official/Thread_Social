import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        
    }
)

const Post  = mongoose.model('Post', postSchema)

export default Post