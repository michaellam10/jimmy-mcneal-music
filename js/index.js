$(document).ready(function() {
  loadLandingVideo();
});

$(window).on("load", function() {
  transitionLandingElements();
});

function loadLandingVideo() {
    $('.background-video').toggleClass('background-video-post-transition');
}

function transitionLandingElements() {
  $('.featured-headline').toggleClass('featured-headline-post-transition');
  $('#first-headline').toggleClass('first-headline-post-transition');
  $('#second-headline').toggleClass('second-headline-post-transition');
  $('.social-bar').toggleClass('social-bar-post-transition');
  $('#navbar').toggleClass('navbar-post-transition');
}
