let tweets = require('../../src/data/tweets.json');

module.exports = (app) => {

  const postNewTweet = (req, res) => {
    const newTweet = {    // handle HTTP POST event
      _id: (new Date()).getTime() + '', // initialize new tweet instance
      "topic": "Web Development",
      "userName": "ReactJS",
      "verified": false,
      "handle": "ReactJS",
      "time": "2h",
      "avatar-image": "../../../images/react-blue.png",
      "logo-image": "../../../images/react-blue.png",
      "stats": {
        "comments": 123,
        "retweets": 234,
        "likes": 345
      },
      ...req.body,    // include/override with tweet posted by client
    }
    tweets = [
      newTweet,
      ...tweets     // append new tweet to beginning of tweets
    ];
    res.json(newTweet);     // send new array back to client
  }

  app.post('/api/tweets', postNewTweet); // listen for HTTP POST and notify handler


  const findAllTweets = (req, res) => {
    res.json(tweets);
  }

  app.get('/api/tweets', findAllTweets);


  const deleteTweet = (req, res) => {
    const id = req.params['id'];
    tweets = tweets.filter(tweet => tweet._id !== id);
    res.sendStatus(200);
  }
  app.delete('/api/tweets/:id', deleteTweet);




  const likeTweet = (req, res) => {
    const id = req.params['id'];
    tweets = tweets.map(tweet => {
      if (tweet._id === id) {
        if (tweet.liked === true) {
          tweet.liked = false;
          tweet.stats.likes--;
        } else {
          tweet.liked = true;
          tweet.stats.likes++;
        }
        return tweet;
      } else {
        return tweet;
      }
    });
    res.sendStatus(200);
  }
  app.put('/api/tweets/:id/like', likeTweet);

};
