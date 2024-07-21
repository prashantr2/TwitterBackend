import passport from 'passport';

export function authenticate(req, res, next) {
    passport.authenticate('jwt', (error, user, data) => {
        if (error) next (error);
        if (!user) {
            return res.status(401).json({
                message: 'Unauthorized access',
            })
        }
        req.user = user;
        next();
    })(req, res, next);
}