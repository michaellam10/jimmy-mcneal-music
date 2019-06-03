$('.navbar-toggle').click(function () {
  $('.navbar-ctas').toggleClass('active');
  // $('#navbar-collapse-button').toggleClass('active');
  // $(this).parents('.navbar-toggle-contain').toggleClass('collapsed');
  $('.icon-bar').toggleClass('clicked');
});

$(window).on("load", function() {
  $('.navbar-link').toggleClass('navbar-link-post-transition');
});
