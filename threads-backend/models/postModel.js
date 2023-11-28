import mongoose from "mongoose";

const postSchema = mongoose.Schema(
    {
        postedBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        text: {
            type: String,
            maxLength: 500
        },
        img: {
            type: String
        },
        likes: {
            type: [mongoose.Schema.Types.ObjectId],
            
        }
    }
)

const Post  = mongoose.model('Post', postSchema)

export default Post