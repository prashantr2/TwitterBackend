import Like from '../models/like.js';
import CrudRepository from './crud-repository.js';

export default class LikeRepository extends CrudRepository {
    constructor(){
        super(Like); 
    }
    
}
