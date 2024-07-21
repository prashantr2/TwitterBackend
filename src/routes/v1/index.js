import express from 'express';
import { signupUser, loginUser } from '../../controllers/user-controller.js';
import { createTweet, getTweet } from '../../controllers/tweet-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { toggleLike } from '../../controllers/like-controller.js'
import { authenticate } from '../../middlewares/authenticate.js';

const router = express.Router();

// Tweets
router.post('/tweets', 
    authenticate, 
    createTweet
);
router.get('/tweets/:id', getTweet);

// Likes
router.post('/likes/toggle', 
    authenticate, 
    toggleLike
);

// Users
router.post('/users', signupUser);
router.post('/users/login', loginUser);

// Comments
router.post('/comments', 
    authenticate, 
    createComment
);

export default router;