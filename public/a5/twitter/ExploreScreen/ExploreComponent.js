import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
  return(`

<!-- Search bar -->
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
      
      
      <!-- Navigation pills -->
           </div>
           <ul class="nav nav-pills mb-3">
           <li class="nav-item">
        <a class="nav-link active" href="for-you.html">For You</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="trending.html">Trending</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="news.html">News</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="sports.html">Sports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="entertainment.html">Entertainment</a>
      </li>
           </ul>
           
           
           <!-- image with overlaid text -->
           <div class="row">
           ${PostSummaryList()}
</div>
         
    `);
}
export default ExploreComponent;
