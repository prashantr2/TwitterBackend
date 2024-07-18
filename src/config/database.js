import mongoose from 'mongoose';

export default async function connect() {
    mongoose.set('strictQuery', false);
    await mongoose.connect('mongodb://root:example@127.0.0.1/twitter_Dev?authSource=admin&w=1');
}