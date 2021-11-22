import React, {useState} from "react";
import "../ExploreScreen/explore.css"
import {useDispatch} from "react-redux";
import {postNewTweet, fetchAllTweets} from "../../../../services/twitterService";

const WhatsHappening = () => {
  const [whatsHappening, setWhatsHappening] = useState('');
  const dispatch = useDispatch();
  const tweetClickHandler = () => {
    // dispatch({type: 'create-tweet', tweet: whatsHappening});
    postNewTweet(dispatch, {tweet: whatsHappening})
  };

  return(
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="https://t3.ftcdn.net/jpg/03/46/83/96/240_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
            className="wd-profile" height="48" width="48" alt=""/>
          </div>
          <div className="col-10">
            <textarea value={whatsHappening}
                      className="wd-rounded-sides wd-background-color wd-gray-text-font wd-stretch"
                      placeholder="Whats happening"
                      onChange={(event) =>
                          setWhatsHappening(event.target.value)}>
        </textarea>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <i className="far fa-image wd-right-margin"></i>
            <i className="fas fa-chart-line wd-right-margin"></i>
            <i className="far fa-smile wd-right-margin"></i>
            <i className="far fa-calendar-minus"></i>
          </div>
          <div className="col wd-float-right">
            <button onClick={tweetClickHandler}
                    className="wd-rounded-sides wd-tweet-bg">
              Tweet
            </button>
          </div>
        </div>

      </div>
);
}
export default WhatsHappening;
