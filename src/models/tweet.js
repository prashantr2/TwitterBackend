import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max: [250, 'Tweet can\'t be more than 250 characters']
    }
}, {timestamps: true});

export default mongoose.model('Tweet', tweetSchema);