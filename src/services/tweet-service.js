const { TweetRepository, HashtagRepository } = require('../repository/index')


class TweetService {
    constructor () {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
    
    async create(data) {
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g);         // A regex matching hashtags in content
        tags = tags.map(tag => tag.substring(1));
        
        const alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let newTags = tags.filter(tag => !alreadyPresentTags.includes(tag));
        newTags = newTags.map(tag => ({ title: tag , tweets: [tweet.id]}));
        
        alreadyPresentTags.forEach(tag => {
            tag.tweets.push(tweet.id);
            tag.save();
        })
        const newHashtags = await this.hashtagRepository.bulkCreate(newTags);
        
        const tweet = await this.tweetRepository.create(data);
        return tweet;
    }
}

module.exports = TweetService;