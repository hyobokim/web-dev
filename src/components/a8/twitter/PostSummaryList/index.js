import posts from "./posts.js";
import SummaryItem from "./PostSummaryItem.js";

const SummaryList = () => {
  return (`
            <ul>
            ${
      posts.map(post => {
        return(SummaryItem(post));
      }).join('')
  }
        </ul>
            
      <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" data-auto-replace-svg="nest"></script>
    `);
}

export default SummaryList;