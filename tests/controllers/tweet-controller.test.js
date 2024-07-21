import TweetService from '../../src/services/tweet-service.js'
import * as TweetController from '../../src/controllers/tweet-controller.js'

import { mockRequest, mockResponse } from '../mocker.js'

jest.mock('../../src/services/tweet-service.js')

describe('Tweet controller get', () => {
    test('Get tweets', 
    async () => {
        const req = mockRequest(); 
        const res = mockResponse(); 
        const response = [
            { content: 'Tweet 1' },
            { content: 'Tweet 2' },
        ];
        (TweetService.prototype.get).mockReturnValue(response);
        await TweetController.getTweet(req, res); 
        expect(res.json).toHaveBeenCalledWith({
            success: true,
            msg: "Successfully get a tweet",
            data: response,
            err: {}
        });
    })
})