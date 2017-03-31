$( document ).ready(function() {


var animation = $('#animation');
TweenLite.to(animation, 1.5, {opacity:1, top:100, ease:Power2.easeOut, delay:0.4});

var learnMore = $('.learn-more');
TweenLite.to(learnMore, 1.5, {opacity:1, top:230, ease:Power2.easeOut, delay:0.7});


$(".learn-more-background1").mouseover(function() {
  $( ".learn-more-text1" ).css({}).animate({'left' : '-200px'}, 300);  
  $( ".learn-more-text2" ).css({}).animate({'left' : '20px'}, 450);  
});

$(".learn-more-background1").mouseleave(function() {
  $( ".learn-more-text1" ).css({}).animate({'left' : '20px'}, 450);  
  $( ".learn-more-text2" ).css({}).animate({'left' : '520px'}, 300);  
});

var bar1 = document.getElementById("bar1");
TweenLite.to(bar1, 2.5, { opacity:1, ease:Power2.easeOut, delay:1.3});
var tl = new TimelineMax();
tl.to(bar1, 2, {height:100, top:180, repeat:-1, yoyo:true})
tl.play();

var bar2 = document.getElementById("bar2");
TweenLite.to(bar2, 2.5, { opacity:1, ease:Power2.easeOut, delay:1.3});
var tl2 = new TimelineMax();
tl2.to(bar2, 2.2, {height:50, top:230, repeat:-1, yoyo:true, delay:1})
tl2.play();

var bar3 = document.getElementById("bar3");
TweenLite.to(bar3, 2.5, { opacity:1, ease:Power2.easeOut, delay:1.3});
var tl2 = new TimelineMax();
tl2.to(bar3, 2.2, {height:70, top:210, repeat:-1, yoyo:true, delay:1.1})
tl2.play();


});