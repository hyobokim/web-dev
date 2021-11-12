let link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'explore.css';




const NavigationSidebar = () => {
  return (`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
            <!-- continue the rest of the list -->
             <a class="list-group-item" href="../home.html">
  <div class="row">
    <div class="col-2">
      <i class="fas fa-home"></i>
    </div>
    <div class="col-2 d-none d-lg-block">
      Home
    </div>
  </div>
</a>

        <a class="list-group-item" href="../explore.html">
          <div class="row">
            <div class="col-2">
              <i class="fas fa-hashtag"></i>
            </div>
            <div class="col-2 d-none d-lg-block">
              Explore
            </div>
          </div>
        </a>
        
        <a class="list-group-item" href="../notifications.html">
          <div class="row">
            <div class="col-2">
              <i class="fas fa-bell"></i>
            </div>
            <div class="col-2 d-none d-lg-block">
              Notifications
            </div>
          </div>
        </a>
        
        <a class="list-group-item" href="../messages.html">
          <div class="row">
            <div class="col-2">
              <i class="far fa-envelope"></i>
            </div>
            <div class="col-2 d-none d-lg-block">
              Messages
            </div>
          </div>
        </a>
        
        <a class="list-group-item" href="../bookmarks.html">
          <div class="row">
            <div class="col-2">
              <i class="fas fa-bookmark"></i>
            </div>
            <div class="col-2 d-none d-lg-block">
              Bookmarks
            </div>
          </div>
        </a>
        
        
        <a class="list-group-item" href="../lists.html">
          <div class="row">
            <div class="col-2">
              <i class="fas fa-list-ul"></i>
            </div>
            <div class="col-2 d-none d-lg-block">
              Lists
            </div>
          </div>
        </a>
        
        
        <a class="list-group-item" href="../profile.html">
          <div class="row">
            <div class="col-2">
              <i class="fas fa-user-alt"></i>
            </div>
            <div class="col-2 d-none d-lg-block">
              Profile
            </div>
          </div>
        </a>
        
        
        <a class="list-group-item" href="#">
          <div class="row">
            <div class="col-2">
              <i class="fas fa-info-circle"></i>
            </div>
            <div class="col-2 d-none d-lg-block">
              More
            </div>
          </div>
        </a>
      
            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            
      <script src="https://use.fontawesome.com/releases/v5.15.4/js/all.js" data-auto-replace-svg="nest"></script>
    `);
}
export default NavigationSidebar;

