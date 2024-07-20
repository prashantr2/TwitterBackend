import { CommentRepository, TweetRepository } from "../repositories/index.js";

export default class CommentService{
    constructor(){
        this.commentRepository = new CommentRepository();
        this.tweetRepository = new TweetRepository();
    }
    
    async createComment(modelId, modelType, userId, content){
        if (modelType == 'Tweet'){
            var commentable = await this.tweetRepository.find(modelId);
        } else if (modelType == 'Comment') {
            var commentable = await this.commentRepository.find(modelId);
        } else {
            throw new Error("Unknown model type");
        }
        const newComment = await this.commentRepository.create({
            content: content,
            userId: userId,
            onModel: modelType,
            commentable: modelId,
            comments: [],
        })
        commentable.comments.push(newComment);
        await commentable.save();
        return newComment;
    }
}