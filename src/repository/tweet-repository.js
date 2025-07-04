const Tweet = require("../models/tweet");


class TweetRepository {
    async create (data) {
        try {
            const tweet = await Tweet.create(data);
            console.log(data);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async get (id) {
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getWithComment (id) {
        try {
// use of lean() function: docs returned from queries with lean optionn enabled are plain Js objects, not mongoose.
            const tweet = await Tweet.findById(id).populate({path: 'comments'}).lean();
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async getAll(offset, limit) {
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }

    async update (tweetId, data) {
        try {
            const tweet = await Tweet.findByIdAndUpdate(tweetId, data, {new: true});
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }

    async destroy (id) {
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log(error);
        }   
    }
}

module.exports = TweetRepository;