import Hashtag from '../models/hashtag.js';

export default class HashtagRepository {
    
    async create(data) {
        try {
            const hashtag = await Hashtag.create(data);
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }
    
    async bulkCreate(data){ 
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async get(id) {
        try {
            const hashtag = await Hashtag.findById(id);
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComments(id) {
        try {
            const hashtag = await Hashtag.findById(id).populate({path: 'comments'}).lean();
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }

    async destroy(id) {
        try {
            const hashtag = await Hashtag.findByIdAndRemove(id);
            return hashtag;
        } catch (error) {
            console.log(error);
        }
    }
    
    async findByName(titleList) {
        try {
            const tags = await Hashtag.find({
                title: titleList,
            }).select('title -_id');
            return tags;
        } catch (error) {
            console.log(error); 
        } 
    }
}