import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`
            <div class="row">
      <div class="col ">
        <form id="search-bar" class="wd-float-left pt-1 mt-1 mb-1">
          <input id="search" class="wd-rounded-sides wd-search-bar" width="100%" placeholder="Search Twitter">
        </form>
      </div>
      <div class="col float-left">
        <a href="explore-settings.html">
          <i class="fas fa-cog wd-gray-text-font"></i>
        </a>
      </div>
           </div>
           <ul class="row nav mb-2 nav-tabs">
                      <!-- tabs -->
           </ul>
           <!-- image with overlaid text -->
           <div class="row">
           ${PostSummaryList()}
</div>
         
    `);
}
export default ExploreComponent;
