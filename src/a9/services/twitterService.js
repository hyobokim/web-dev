

const TWEET_API = 'http://localhost:4000/api/tweets'
// let TWEET_API;
// if (process.env.NODE_ENV === 'development') {
//   TWEET_API = 'http://localhost:4000/api/tweets';
// }
// else {
//   TWEET_API = 'https://web-dev-node-backend.herokuapp.com/';
// }

export const fetchAllTweets = (dispatch) => // function to fetch tweets and notify reducer
    fetch(TWEET_API)  // asynchronously sends HTTP get request to URL
    .then(response => response.json())  // parse JSON body from response
    .then(tweets => // parsed tweets from server
        dispatch({  // notify reducer
          type: 'fetch-all-tweets',   // action
          tweets      // send tweets from server to reducer
        })
    );

export const postNewTweet = (dispatch, newTweet) =>  {
    fetch(TWEET_API, {
      method: 'POST',
      body: JSON.stringify(newTweet),
      headers: {
        'content-type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(tweet =>
        dispatch({
          type: 'create-tweet',
          tweet
        })
    );
}


export const deleteTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}`, {
      method: 'DELETE'
    }).then(response => dispatch({
      type: 'delete-tweet',
      tweet
    }));


export const likeTweet = (dispatch, tweet) =>
    fetch(`${TWEET_API}/${tweet._id}/like`, {
      method: 'PUT'
    })
    .then(response =>
        dispatch({
          type: 'like-tweet',
          tweet
        }));
