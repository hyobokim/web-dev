let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'explore.css';




const ListItem = (who) => {
  return (`
            <a class="list-group-item">
            <div class="row">
            <div class="col">
            <img src=${who.avatarIcon} height="40px" width="40px" class="wd-profile">
</div>
<div class="col">
${who.userName};
</div>
<div class="col">
@${who.handle};
</div>
</div>
</a>
            
      <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" data-auto-replace-svg="nest"></script>
    `);
}
export default ListItem;


// <a class="list-group-item">
//   <div class="col-3">
//     <img src=${who.avatarIcon} width="40px" height="40px" class="wd-profile mb-3" />
//   </div>
//   <div class="col-7">
//     <div class="text-white wd-text-size">
//       ${who.userName} <i class="far fa-check-circle"></i>
//     </div>
//     <div class="text-white wd-text-size">
//       @${who.handle}
//     </div>
//   </div>
//   <div class="col-2">
//     <div class="wd-follow-button wd-rounded-sides">
//       Follow
//     </div>
//   </div>
// </div>
// </a>