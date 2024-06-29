const express = require('express');
const connect = require('./config/database');
const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const app = express();



app.listen(3000, async () => {
    console.log('Server listening on port 3000');
    await connect();
    console.log(('Mongo DB connected!!'));
    // const tweet = await Tweet.create({
    //     content: 'Hi there',
    //     userEmail: 'a@b.com'
    // })
    const tweetrepo = new TweetRepository();
    const tweet = await tweetrepo.getWithComment('668027bff36b964a3e777d2f');
    console.log(tweet);
    
});