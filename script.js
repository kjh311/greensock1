$( document ).ready(function() {


var animation = $('#animation');
TweenLite.to(animation, 1.5, {opacity:1, top:100, ease:Power2.easeOut, delay:0.4});

var learnMore = $('.learn-more');
TweenLite.to(learnMore, 1.5, {opacity:1, top:200, ease:Power2.easeOut, delay:0.7});



});