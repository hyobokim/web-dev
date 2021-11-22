import React from "react";
import './tweet.css';
import {useDispatch} from "react-redux";
import {deleteTweet, likeTweet} from "../../../../services/twitterService";

const TweetListItem = ({tweet}) => {
  const dispatch = useDispatch();
  const deleteTweetClickHandler = () => {
    // dispatch({type: 'delete-tweet', tweet})
    deleteTweet(dispatch, tweet);
  };

  const likeClickHandler = () => {
    // dispatch({type: 'like-tweet', tweet});
    likeTweet(dispatch, tweet);
  };

  return(
      <li className="list-group-item">
        <table>
          <tr>
            <td className="align-text-top">
              <img className="rounded-circle wd-avatar-image"
                   src={tweet['logo-image']} alt=""/>
            </td>
            <td className="ps-3" style={{width: '100%'}}>
              <i onClick={deleteTweetClickHandler} className="fas fa-times-circle fa-pull-right"></i>
              {/*<i onClick={deleteTweetClickHandler} className="fa fa-remove fa-pull-right bg-color-green"></i>*/}
              <span className="fw-bold">{tweet.userName}</span>
              {tweet.verified && <i className="ms-1 fas fa-badge-check"></i>}
              <span className="ms-1 text-secondary">@{tweet.handle}</span>
              <div>
                {tweet.tweet}
              </div>
              {
                tweet.attachments && tweet.attachments.image &&
                <img src={tweet.attachments.image}
                     className="mt-2 wd-border-radius-20px"
                     style={{width: "100%"}} alt=""/>
              }
              {
                tweet.attachments && tweet.attachments.video &&
                <iframe width="100%" height="350px"
                        className="mt-2 wd-border-radius-20px"
                        style={{width: "100%"}}
                        src={`https://www.youtube.com/embed/${tweet.attachments.video}`}
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>
              }


              {/*{JSON.stringify(tweet)}*/}
              {/*<TweetStats tweet={tweet}/>*/}
                <div className="col"
                     onClick={likeClickHandler}>

                  <i className="far fa-comment"></i>
                  <i className="me-5"> {tweet.stats.comments} </i>
                  <i className="fas fa-retweet me"></i>
                  <i className="me-5">{tweet.stats.retweets}</i>

                  {
                    tweet.liked && <i className="fas fa-heart me-2"
                                      style={{color: tweet.liked ? "red": "white"}}></i>
                  }

                  {
                    !tweet.liked && <i className="far fa-heart me-2"></i>
                  }
                  {tweet.stats.likes}
                </div>
            </td>

          </tr>
        </table>
      </li>
  );
};

export default TweetListItem;