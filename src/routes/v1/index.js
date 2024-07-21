import express from 'express';
import { signupUser } from '../../controllers/user-controller.js';
import { createTweet, getTweet } from '../../controllers/tweet-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { toggleLike } from '../../controllers/like-controller.js'

const router = express.Router();

// Tweets
router.post('/tweets', createTweet);
router.get('/tweets/:id', getTweet);

// Likes
router.post('/likes/toggle', toggleLike);

// Users
router.post('/users', signupUser);

// Comments
router.post('/comments', createComment);

export default router;