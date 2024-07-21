import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../config/serverConfig.js';

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    }
}, { timestamps: true })

userSchema.pre('save', function(next) {
    const SALT = bcrypt.genSaltSync(9);
    this.password = bcrypt.hashSync(this.password, SALT);
    next();
})

userSchema.methods.comparePassword = function compare(password) {
    return bcrypt.compareSync(password, this.password);
}

userSchema.methods.generateJWT = function generate() {
    return jwt.sign({ id: this._id, email: this.email }, JWT_SECRET, {
        expiresIn: '1h'
    });
}

export default mongoose.model('User', userSchema);
