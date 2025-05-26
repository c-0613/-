// JavaScript Document
$(document).ready(function() {

  var $popupAd = $('#popupAd');
  var $closeBtn = $('.close').first();

  setTimeout(function() {
    $popupAd.show();
  }, 3000);

  $closeBtn.click(function() {
    $popupAd.hide();
  });

  $(window).click(function(event) {
    if ($(event.target).is($popupAd)) {
      $popupAd.hide();
    }
  });
});