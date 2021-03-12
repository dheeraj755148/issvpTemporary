$(document).ready(function () {
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if (scroll >= 100) {
      $(".navbar-light").css({
        background: "#fff",
        "box-shadow": "0px 3px 5px 0px rgba(0,0,0,0.5)",
      });
      $(".nav-link").css({ color: "#000000","margin-right":"20px", });
      $(".navbar-brand").css({ color: "#000000" });
      $(".stroke > ul > li > a:after").css({ color: "#000000" });
      $(".stroke a").addClass("nav-style-change");
    }
    if (scroll < 100) {
      $(".navbar-light").css({
        background: "transparent",
        "box-shadow": "none",
      });
      $(".nav-link").css({ color: "#fff","margin-right":"0px", });
      $(".navbar-brand").css({ color: "#fff" });
      $(".stroke a").removeClass("nav-style-change");
    }
  });
});

/* $(function () {  
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
}); */
