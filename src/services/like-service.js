import { LikeRepository, TweetRepository } from "../repositories/index.js";

export default class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }
    
    async toggleLike(modelId, modelType, userId){
        if (modelType == 'Tweet'){
            var likeable = (await this.likeRepository.get(modelId)).populate({ path: 'likes' });
        } else if (modelType == 'Comment') {
            // TODO
        } else {
            throw new Error("Unknown model type");
        }
        const exists = await this.likeRepository.findByUserAndLikeable({
            userId: userId,
            onModel: modelType,
            likeable: modelId,
        })
        if (exists) {
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();
            var isAdded = false;
        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            })
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }
        return isAdded;
    }
}