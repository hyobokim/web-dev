import posts from "./posts.json";
import SummaryItem from "./PostSummaryItem.js";
import React from "react";

const SummaryList = () => {
  return (
      <div className="container">
        <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" data-auto-replace-svg="nest"></script>

        <div className="row">
          <h5 className="wd-gray-text-font">What's Happening</h5>
        </div>

        <div className="row">
          <ul>
            {
              posts.map(post => {
                return(<SummaryItem post={post}/>)
              })
            }
          </ul>
        </div>

      </div>
    )
}

export default SummaryList;