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
    const tweet = await tweetrepo.create({content: ' tweet with hooks '});
    console.log(tweet);
    // const tweet = await tweetrepo.getAll(0, 2);
    // console.log(tweet[1].contentWithEmail);
    
});