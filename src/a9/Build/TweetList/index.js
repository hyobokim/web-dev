import React, {useEffect} from "react";
import TweetListItem from "./TweetListItem.js";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllTweets} from "../../services/twitterService";

const selectAllTweets = (state) => state.tweets;  // get tweets from the state in the store


const TweetList = () => {

  const tweets = useSelector(selectAllTweets);
  const dispatch = useDispatch();     // get dispatch from hook
  // useEffect(() => fetchAllTweets, []);  // on load call fetch all tweets


  // useEffect(() => {
  //   // console.log(fetchAllTweets(dispatch));
  //   // fetchAllTweets(dispatch).then(r => console.log(r.tweets));
  //   fetch("http://localhost:4000/api/tweets")
  //   .then(res => {
  //     return res.json()
  //   }).then((data) => console.log(data));
  //   // console.log(tweets);
  // }, [])

  useEffect(() => {
    fetchAllTweets(dispatch);
  }, []);

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
