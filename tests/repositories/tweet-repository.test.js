import TweetRepository from '../../src/repositories/tweet-repository.js';
import Tweet from '../../src/models/tweet.js'

jest.mock('../../src/models/tweet.js');

describe('Create tweets', () => {
    test('Create a new tweet and return it',
    async () => {
        const data = {
            content: 'Testing Tweet',
        }
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
            return {...data, createdAt: '2024-02-12', updatedAt: '2024-02-12' };
        })
        const tweetRepository = new TweetRepository();
        const tweet = await tweetRepository.create(data);
        
        expect(spy).toHaveBeenCalled();
        expect(tweet.content).toBe(data.content);
        expect(tweet.createdAt).toBeDefined();
    })

    test('Not create a tweet and throw error', 
    async () => {
        const data = {
            content: 'Testing Tweet bigggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggiggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg',
        }
        const tweetRepository = new TweetRepository();
        const spy = jest.spyOn(Tweet, 'create').mockImplementation(() => {
            throw new Error("Something went so wrong!");
        })
        const tweet = await tweetRepository.create(data).catch(err => {
            expect(err).toBeInstanceOf(Error);
            expect(err.message).toBe("Something went so wrong!");
        });
        
    })
})

describe('Get tweets', () => {
    test('Get all tweets', 
    async () => {
        const data = {
            content: 'Testing Tweet',
        }
        const tweetsArray = [
            {...data, createdAt: '2024-02-12', updatedAt: '2024-02-12' },
            {...data, createdAt: '2024-02-12', updatedAt: '2024-02-12' },
            {...data, createdAt: '2024-02-12', updatedAt: '2024-02-12' },
        ]
        let findResponse = { tweetsArray };
        findResponse.skip = jest.fn((skip) => {
            findResponse.tweetsArray = findResponse.tweetsArray.slice(skip);
            return findResponse;
        });
        findResponse.limit = jest.fn((limit) => findResponse.tweetsArray.slice(0, limit));
        const spy = jest.spyOn(Tweet, 'find').mockImplementation(() => {
            return findResponse;
         });
        const tweetRepository = new TweetRepository();
        const tweets = await tweetRepository.getAll(0, 2);
        expect(spy).toHaveBeenCalled();
        expect(tweets).toHaveLength(2);
    })
})