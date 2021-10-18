import posts from "./posts.js"

let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'explore.css';




const SummaryItem = (post) => {
  return (`
<div class="list-group-item">
<div class="row">
  <div class="col wd-float-left">
      <div class="wd-float-left wd-text-size wd-white-text wd-right-margin">${post.userName}</div>
      <i class="fas fa-check-circle wd-float-left wd-white-text wd-right-margin"></i>
      <div class="wd-float-left wd-text-size wd-gray-text-font">${post.time}</div>
      <p class="wd-white-text wd-tweet-text-size wd-float-reset">${post.title}</p>
    </div>
    <div class="col">
    <img src=${post.image} width="100px" height="100px" class="wd-tweet-image-right-margin wd-float-right wd-rounded-sides"\\>
</div>
    <div class="wd-float-reset wd-bottom-margin"></div>
</div> 
</div>
            
      <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" data-auto-replace-svg="nest"></script>
    `);
}
export default SummaryItem;