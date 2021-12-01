import React from "react";
let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = '../../../../../public/a5/twitter/explore/explore.css';

const ListItem = (
    {
      who = {
        avatarIcon: '../../../../../public/images/Facebook.jpg',
        userName: 'Facebook',
        handle: 'Facebook',
      }
    }) => {
  return (
      <>

        <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
                data-auto-replace-svg="nest"></script>
        <a href="#/" className="list-group-item">
          <div className="row">
            <div className="col">
              <img src={who.avatarIcon} alt="Profile of the given avatar" height="40px" width="40px"
                   className="wd-profile"/>
            </div>
            <div className="col float-left">
              <div className="row">
                {who.userName}
              </div>
              <div className="row">
                @{who.handle}
              </div>
            </div>
            <div className="col float-right">
              <div className="wd-follow-button wd-rounded-sides">
                Follow
              </div>
            </div>
          </div>
        </a>
      </>
  );
}

export default ListItem;
