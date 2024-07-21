import JWT from 'passport-jwt';
import { JWT_SECRET } from '../config/serverConfig.js';
import User from '../models/user.js'

const JWTStrategy = JWT.Strategy;
const ExtractJWT = JWT.ExtractJwt;

const opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: JWT_SECRET,
}

export const passportAuth = (passport) => {
    try {
        passport.use(new JWTStrategy(opts, async (jwt_payload, done) => {
            const user = await User.findById(jwt_payload.id);
            if (!user) {
                done(null, false);
            } else {
                done(null, user);
            }
        }));
    } catch (error) {
        console.log(error);
    }
}