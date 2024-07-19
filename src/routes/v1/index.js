import express from 'express';
import { createUser } from '../../controllers/user-controller.js';
import { createTweet } from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js'

const router = express.Router();

// Tweets
router.post('/tweets', createTweet);
router.post('/likes/toggle', toggleLike);

// Users
router.post('/users', createUser);

export default router;