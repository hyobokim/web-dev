import React from "react";

let link = document.createElement('link');

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '"../NavigationSidebar/explore.css"';

const SummaryItem = (
    {
      post = {
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "../../../../../public/images/nuhockey.jpg",
      }
    }
) => {
  return (
      <>
        <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
                data-auto-replace-svg="nest"></script>
        <div className="list-group-item">
          <div className="row">
            <div className="col wd-float-left">
              <div
                  className="wd-float-left wd-text-size wd-white-text wd-right-margin">{post.userName}</div>
              <i className="fas fa-check-circle wd-float-left wd-white-text wd-right-margin"></i>
              <div
                  className="wd-float-left wd-text-size wd-gray-text-font">{post.time}</div>
              <p className="wd-white-text wd-tweet-text-size wd-float-reset">{post.title}</p>
            </div>
            <div className="col">
              <img src={post.image} alt="Represents the post" width="100px" height="100px"
                   className="wd-tweet-image-right-margin wd-float-right wd-rounded-sides"/>
            </div>
            <div className="wd-float-reset wd-bottom-margin"></div>
          </div>
        </div>
      </>
  )

}
export default SummaryItem;