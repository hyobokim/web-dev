import React, {useEffect} from "react";
import TweetListItem from "./TweetListItem.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTweets} from "../../services/twitterService";

const selectAllTweets = (state) => state.tweets;  // get tweets from the state in the store


const TweetList = () => {

  const tweets = useSelector(selectAllTweets);
  const dispatch = useDispatch();     // get dispatch from hook

  useEffect(() => {
    fetchAllTweets(dispatch)}, [dispatch]);

  // useEffect(() => {
  //   fetchAllTweets(dispatch).then(r => console.log(r));
  // })
  // console.log("test");
  // console.log(tweets);
  return(
      <ul className="list-group">
        {
          tweets.map(tweet => <TweetListItem tweet={tweet}/>)
        }
      </ul>
  )
};
export default TweetList;
