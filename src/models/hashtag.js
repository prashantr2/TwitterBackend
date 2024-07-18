import mongoose from 'mongoose'

const HashtagSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    tweets: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet',
        }
    ]
}, { timestamps: true })

export default mongoose.model('Hashtag', HashtagSchema);