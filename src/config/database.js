import mongoose from 'mongoose';

export default async function connect() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://localhost/twitter_Dev');
}