var posts=["2024/08/22/steam安装教程/","2024/08/20/本站的第一篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };