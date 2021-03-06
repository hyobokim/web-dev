import posts from '../../data/tweets.json'

// const posts = fetch("localhost:4000/api/tweets").then(result => result.json());
// console.log(posts);

const tweets = (state=posts , action) => {

  switch (action.type) {
    case 'create-tweet':
      const tweet = {
        "_id": (new Date()).getTime() + '',
        "topic": "Web Development",
        "userName": "ReactJS",
        "verified": false,
        "handle": "ReactJS",
        "time": "2h",
        ...action.tweet,
        "avatar-image": "../../../images/react-blue.png",
        "logo-image": "../../../images/react-blue.png",
        "stats": {
          "comments": 123,
          "retweets": 234,
          "likes": 345
        },
      };

      return ([
            tweet,
              ...state
          ]
      );
    case 'delete-tweet':
      return state.filter(tweet => tweet._id !== action.tweet._id);

    case 'fetch-all-tweets':
      return action.tweets.reverse();
    case 'like-tweet':
      return state.map(tweet => {
        if(tweet._id === action.tweet._id) {
          if(tweet.liked === true) {
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
    default:
      return(state);
  }
};


export default tweets;