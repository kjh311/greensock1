$( document ).ready(function() {


var animation = $('#animation');
TweenLite.to(animation, 1.5, {opacity:1, top:100, ease:Power2.easeOut, delay:0.4});

var learnMore = $('.learn-more');
TweenLite.to(learnMore, 1.5, {opacity:1, top:230, ease:Power2.easeOut, delay:0.7});

var whiteCircle = $('.white-circle');
TweenLite.to(whiteCircle, 1.5, {opacity:1, right:50, ease:Power2.easeOut, delay:1.8});

var blackCircle = $('.black-circle');
TweenLite.to(blackCircle, 1.5, {opacity:1, right:50, ease:Power2.easeOut, delay:1.8});

var expandingCircle = $('.expanding-circle');
TweenLite.to(expandingCircle, 1.5, {opacity:1, right:50, ease:Power2.easeOut, delay:1.8});

var footerText = $('.footer-text');
TweenLite.to(footerText, 1.5, {opacity:1, ease:Power2.easeOut, delay:2.2});

// var blueCircle = $('.blue-circle');
// // TweenLite.to(blueCircle, 4, {rotation:360, transformOrigin:"center"});
// var t56 = new TimelineMax();
// // t56.to(blueCircle, 2, {height:100, top:180, repeat:-1, yoyo:true})
// t56.to(blueCircle, 2, {rotation:360, repeat:-1, transformOrigin:"center", ease:"Power0.easeNone"});
// t56.play();

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

$(".blue-circle").mouseover(function() {
  $(".blue-circle").fadeTo(700, 0.4);
}); 

$(".blue-circle").mouseleave(function() {
  $(".blue-circle").fadeTo(700, 0);
}); 

$(".learn-more").mouseover(function() {
  $(".lorem").fadeTo(700, 1);
}); 

$(".learn-more").mouseleave(function() {
  $(".lorem").fadeTo(700, 0);
}); 

$(".white-circle").click(function(){
    $( ".expanding-circle" ).animate({  
   width: "10000px",  
   height: "10000px",  
   right: "-1000px",
   top: "-5000px" 
    }, 2000 );  

      $('.white-circle').fadeOut(500);
      $('.fa-times').fadeTo(500, 1);
      $('.black-circle').fadeTo(1000, 1);

}); 

$(".black-circle").click(function(){
    $( ".expanding-circle" ).animate({  
   width: "75px",  
   height: "75px",  
   right: "50px",
   top: "50px" 
    }, 1000 );  

      $('.black-circle').fadeTo(1000, 0);
      $('.fa-times').fadeTo(1000, 0);
      $('.white-circle').fadeTo(1000, 1);
}); 


});