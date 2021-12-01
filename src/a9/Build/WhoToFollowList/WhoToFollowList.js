import WhoToFollowListItem from "./WhoToFollowListItem.js";
import React from "react";
import {useSelector} from "react-redux";


const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);
  return (
      <>
        <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js"
                data-auto-replace-svg="nest"></script>
        <a href="#/" className="list-group d-none d-lg-block">
          {
            who.map(who => {
              return(
                  <WhoToFollowListItem who={who}/>
              );
            })
          }
        </a>
      </>
)
  ;
}

export default WhoToFollowList;