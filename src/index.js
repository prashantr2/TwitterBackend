const express = require('express');
const connectDB = require('./config/db');

const app = express();


const PORT = 3000;
app.listen(PORT, async() => {
    console.log(`Server up and running on PORT: ${PORT}`);
    await connectDB();
    console.log(`Connected to mongodb`);
})