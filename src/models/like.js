import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    onModel: {
        type: String,
        require: true,
        enum: ['Tweet', 'Comment'],
    },
    likeable: {
        type: mongoose.Schema.Objects.ObjectId,
        required: true,
        refPath: 'onModel'
    },
    user: {
        type: mongoose.Schema.Objects.ObjectId,
        required: true,
        ref: 'User'
    }
}, { timestamps: true })

export default mongoose.model('Like', likeSchema);