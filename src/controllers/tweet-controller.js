import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();

export async function createTweet(req, res) {
    try {
        const response = await tweetService.create(req.body);
        return res.status(201).json({
            success: true,
            msg: "Successfully created a new tweet",
            data: response,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            msg: "Something went wrong in tweet controller",
            data: {},
            err: error
        });
    }
}

export async function getTweet(req, res) {
    try {
        const response = await tweetService.get(req.params.id);
        return res.status(200).json({
            success: true,
            msg: "Successfully get a tweet",
            data: response,
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            msg: "Something went wrong in tweet controller",
            data: {},
            err: error
        });
    }
}