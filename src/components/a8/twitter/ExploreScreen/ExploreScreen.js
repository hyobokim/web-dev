import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import WhoToFollowList from "../WhoToFollowList/WhoToFollowList.js";

(function ($) {
  $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 mt-2">
            ${NavigationSidebar()}
        </div> 
        <div class="col">
        ${ExploreComponent()}  
</div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 mt-2">
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);
