import React from "react";
import NavigationSidebar from "../NavigationSidebar";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js"
import {Link} from "react-router-dom";

let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = './explore.css';

const ExploreScreen = () => {
  return(
      <div className="row mt-2">
        <Link to="/a7/practice">Back</Link>
        <Link to="/a7/twitter/home">Home Page</Link>
        <div className="col-2 col-md-2 col-lg-1 col-xl-2">
          <NavigationSidebar active="explore"/>
        </div>
        <div className="col-10 col-md-10 col-lg-7 col-xl-6"
             style={{"position": "relative"}}>
          <ExploreComponent/>
        </div>
        <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
          <WhoToFollowList/>
        </div>
      </div>
  );
};
export default ExploreScreen;
