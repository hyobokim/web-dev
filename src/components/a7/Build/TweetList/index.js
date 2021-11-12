import React from "react";
import TweetListItem from "./TweetListItem.js";
import {useSelector} from "react-redux";

const selectAllTweets = (state) => state.tweets;  // get tweets from the state in the store


const TweetList = () => {

  const tweets = useSelector(selectAllTweets);


  return(
      <ul className="list-group">
        {
          tweets.map(tweet =>
              <TweetListItem tweet={tweet}/>
          )
        }
      </ul>
  )
};
export default TweetList;
