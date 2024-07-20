import Comment from '../models/comment.js';
import CrudRepository from './crud-repository.js';

export default class CommentRepository extends CrudRepository {
    constructor(){
        super(Comment); 
    }
    
    async findByUserAndCommentable(data) {
        try {
            const comment = await Comment.findOne(data);
            return comment;
        } catch (error) {
            throw error; 
        }
    }
    
    async find(id){
        try {
            const comment = await Comment.findById(id).populate({ path: 'likes' });
            return comment;
        } catch (error) {
            console.log(error);
        }
    }
}
