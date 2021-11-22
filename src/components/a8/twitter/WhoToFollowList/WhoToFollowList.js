import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./whos.js";


const WhoToFollowList = () => {
  return (`
            <a class="list-group d-none d-lg-block">
            ${
      whos.map(who => {
        return(WhoToFollowListItem(who));
      }).join('')
  }
</a>
      <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" data-auto-replace-svg="nest"></script>
    `);
}

export default WhoToFollowList;