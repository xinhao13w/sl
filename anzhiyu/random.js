var posts=["posts/37845.html","posts/577.html","posts/58568.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };