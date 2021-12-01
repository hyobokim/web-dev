import React, {useEffect} from "react";
import TweetListItem from "./TweetListItem.js";
import {useSelector} from "react-redux";
import {fetchAllTweets} from "../../services/twitterService";

const selectAllTweets = (state) => state.tweets;  // get tweets from the state in the store


const TweetList = () => {

  const tweets = useSelector(selectAllTweets);
  // const dispatch = useDispatch();     // get dispatch from hook
  useEffect(() => fetchAllTweets, []);  // on load call fetch all tweets

  return(
      <ul className="list-group">
        {
          tweets.map(tweet => <TweetListItem tweet={tweet}/>)
        }
      </ul>
  )
};
export default TweetList;
