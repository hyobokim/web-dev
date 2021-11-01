import React from "react";
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../../../../../public/a5/twitter/explore/explore.css';

const NavigationSidebar = (
    {
        active = 'explore'
    }) => {
  return(
      <>
        <div className="list-group">
          <a className="list-group-item" href="/">
            <i className="fab fa-twitter"></i></a>
          <a className="list-group-item" href="../home.html">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-home"></i>
              </div>
              <div className="col-2 d-none d-lg-block">
                Home
              </div>
            </div>
          </a>

          <a className="list-group-item" href="../explore.html">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-hashtag"></i>
              </div>
              <div className="col-2 d-none d-lg-block">
                Explore
              </div>
            </div>
          </a>

          <a className="list-group-item" href="../notifications.html">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-bell"></i>
              </div>
              <div className="col-2 d-none d-lg-block">
                Notifications
              </div>
            </div>
          </a>

          <a className="list-group-item" href="../messages.html">
            <div className="row">
              <div className="col-2">
                <i className="far fa-envelope"></i>
              </div>
              <div className="col-2 d-none d-lg-block">
                Messages
              </div>
            </div>
          </a>

          <a className="list-group-item" href="../bookmarks.html">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-bookmark"></i>
              </div>
              <div className="col-2 d-none d-lg-block">
                Bookmarks
              </div>
            </div>
          </a>


          <a className="list-group-item" href="../lists.html">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-list-ul"></i>
              </div>
              <div className="col-2 d-none d-lg-block">
                Lists
              </div>
            </div>
          </a>


          <a className="list-group-item" href="../profile.html">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-user-alt"></i>
              </div>
              <div className="col-2 d-none d-lg-block">
                Profile
              </div>
            </div>
          </a>


          <a className="list-group-item" href="#/">
            <div className="row">
              <div className="col-2">
                <i className="fas fa-info-circle"></i>
              </div>
              <div className="col-2 d-none d-lg-block">
                More
              </div>
            </div>
          </a>

        </div>
        <div className="d-grid mt-2">
          <a href="tweet.html"
             className="btn btn-primary btn-block rounded-pill">
            Tweet</a>
        </div>
      </>
  )
}


export default NavigationSidebar;

