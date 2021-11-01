import posts from "./posts.json";
import SummaryItem from "./PostSummaryItem.js";
import React from "react";

const SummaryList = () => {
  return (
      <>
        <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" data-auto-replace-svg="nest"></script>
        <ul>
          {
          posts.map(post => {
            return(<SummaryItem post={post}/>)
          })
        }
        </ul>
      </>
    )
}

export default SummaryList;