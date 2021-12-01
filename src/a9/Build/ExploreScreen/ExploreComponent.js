import React from "react";
import SummaryList from "../PostSummaryList/PostSummaryList";

let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = './explore.css';

const ExploreComponent = () => {
  return (
      <>
        {/*Search bar */}
        <div className="row">
          <div className="col ">
            <form id="search-bar" className="wd-float-left pt-1 mt-1 mb-1">
              <input id="search" className="wd-rounded-sides wd-search-bar"
                     width="100%" placeholder="Search Twitter"/>
            </form>
          </div>
          <div className="col float-left">
            <a href="explore-settings.html">
              <i className="fas fa-cog wd-gray-text-font"></i>
            </a>
          </div>


          {/*Navigation pills*/}
        </div>
        <ul className="nav nav-pills mb-3">
          <li className="nav-item">
            <a className="nav-link active" href="for-you.html">For You</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="trending.html">Trending</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="news.html">News</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="sports.html">Sports</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="entertainment.html">Entertainment</a>
          </li>
        </ul>

        {/*Image with overlaid text*/}
        <div className="row">
          {<SummaryList/>}
        </div>
      </>
)
}

export default ExploreComponent;
