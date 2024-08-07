import Tweet from '../models/tweet.js';
import CrudRepository from './crud-repository.js';

export default class TweetRepository extends CrudRepository {
    constructor(){
        super(Tweet); 
    }
    
    async create(data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            // throw { msg: "nothing" };
            throw error;
        }
    }

    async get(id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'comments' }).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const tweet = await Tweet.findByIdAndRemove(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
    
    async find(id){
        try {
            const tweet = await Tweet.findById(id).populate({ path: 'likes' });
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}
