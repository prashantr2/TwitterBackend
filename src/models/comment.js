import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
    },
    userEmail: {
        type: String
    },
}, {timestamps: true});

export default mongoose.model('Comment', commentSchema);