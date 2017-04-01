$( document ).ready(function() {


var animation = $('#animation');
TweenLite.to(animation, 1.5, {opacity:1, top:70, ease:Power2.easeOut, delay:0.4});

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

var socialShareImg = $('.social-share-img');
TweenLite.to(socialShareImg, 1.5, {opacity:1, bottom:80, ease:Power2.easeOut, delay:2.5});

var lightRay = $('.light-ray');
TweenLite.to(lightRay, 1.5, {bottom:25, ease:Power2.easeOut, delay:2.5});

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
tl2.to(bar3, 2.2, {height:70, top:210, repeat:-1, yoyo:true, delay:1.1, ease: Power0.easeOut})
tl2.play();

$(".facebook").mouseover(function() {
  $('.ray1').fadeTo(400, 1);
}); 
$(".facebook").mouseleave(function() {
  $('.ray1').fadeTo(400, 0);
}); 

$(".twitter").mouseover(function() {
  $('.ray2').fadeTo(400, 1);
}); 
$(".twitter").mouseleave(function() {
  $('.ray2').fadeTo(400, 0);
}); 

$(".google").mouseover(function() {
  $('.ray3').fadeTo(400, 1);
}); 
$(".google").mouseleave(function() {
  $('.ray3').fadeTo(400, 0);
}); 

// BAR GRAPH ANIMATION
$(".bar-div").mouseover(function() {
  var barText1 = $('.bar-text1');
  TweenLite.to(barText1, 1.2, {top:240, opacity:0.7, ease:Power2.easeOut, delay:0.3});

  var barText1Div = $('.bar-text1-div');
  TweenLite.to(barText1Div, 1, {left:-770, opacity:0.7, ease:Power2.easeOut, delay:0.3});

  var barText2 = $('.bar-text2');
  TweenLite.to(barText2, 1.2, {left:-660, opacity:0.7, ease:Power2.easeOut, delay:0.5});

  var barText2Div = $('.bar-text2-div');
  TweenLite.to(barText2Div, 1, {top:290, opacity:0.7, ease:Power2.easeOut, delay:0.5});

  var barText3 = $('.bar-text3');
  TweenLite.to(barText3, 1.2, {left:-365, opacity:0.7, ease:Power2.easeOut, delay:0.7});

  var barText3Div = $('.bar-text3-div');
  TweenLite.to(barText3Div, 1.1, {top:270, opacity:0.7, ease:Power2.easeOut, delay:0.7});

  $(".blue-circle").fadeTo(700, 0.4);
}); 

$(".bar-div").mouseleave(function() {
  $(".blue-circle").fadeTo(700, 0);
  
  var barText1 = $('.bar-text1');
  TweenLite.to(barText1, 0.5, {top:210, opacity:0, ease:Power2.easeOut, delay:0.1});

  var barText1Div = $('.bar-text1-div');
  TweenLite.to(barText1Div, 0.5, {left:-840, opacity:0, ease:Power2.easeOut, delay:0.1});

  var barText2 = $('.bar-text2');
  TweenLite.to(barText2, 0.5, {left:-850, opacity:0, ease:Power2.easeOut, delay:0.1});

  var barText2Div = $('.bar-text2-div');
  TweenLite.to(barText2Div, 0.5, {top:340, opacity:0, ease:Power2.easeOut, delay:0.1});

  var barText3 = $('.bar-text3');
  TweenLite.to(barText3, 0.5, {left:-255, opacity:0, ease:Power2.easeOut, delay:0.1});

  var barText3Div = $('.bar-text3-div');
  TweenLite.to(barText3Div, 0.5, {top:320, opacity:0, ease:Power2.easeOut, delay:0.1});
}); 

$(".learn-more").mouseover(function() {
  var lorem = $('.lorem');
  TweenLite.to(lorem, 1, {top:300, ease:Power2.easeOut});
  $(".lorem").fadeTo(700, 1);
  
}); 

$(".learn-more").mouseleave(function() {
  var lorem = $('.lorem');
  TweenLite.to(lorem, 0.1, {top:320, ease:Power2.easeOut, delay:0.5});
  $(".lorem").fadeTo(500, 0);
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



  var whiteLink1 = $('.white-link1');
  TweenLite.to(whiteLink1, 0.5, {left:50, opacity:1, ease:Power2.easeOut, delay:0.5});

    var whiteLink2 = $('.white-link2');
  TweenLite.to(whiteLink2, 0.5, {left:70, opacity:1, ease:Power2.easeOut, delay:0.7});

    var whiteLink3 = $('.white-link3');
  TweenLite.to(whiteLink3, 0.5, {left:90, opacity:1, ease:Power2.easeOut, delay:0.9});

    var whiteLink4 = $('.white-link4');
  TweenLite.to(whiteLink4, 0.5, {left:110, opacity:1, ease:Power2.easeOut, delay:1.1});

$('.white-link-div').css({pointerEvents: "auto"});
}); 

$(".black-circle").click(function(){
    $( ".expanding-circle" ).animate({  
   width: "75px",  
   height: "75px",  
   right: "50px",
   top: "20px" 
    }, 1000 );  

      $('.black-circle').fadeTo(1000, 0);
      $('.fa-times').fadeTo(1000, 0);
      $('.white-circle').fadeTo(1000, 1);

        var whiteLink1 = $('.white-link1');
  TweenLite.to(whiteLink1, 1, {left:0, opacity:0, ease:Power2.easeOut, delay:0});

    var whiteLink2 = $('.white-link2');
  TweenLite.to(whiteLink2, 1, {left:20, opacity:0, ease:Power2.easeOut, delay:0});

    var whiteLink3 = $('.white-link3');
  TweenLite.to(whiteLink3, 1, {left:40, opacity:0, ease:Power2.easeOut, delay:0});

    var whiteLink4 = $('.white-link4');
  TweenLite.to(whiteLink4, 1, {left:60, opacity:0, ease:Power2.easeOut, delay:0});

  $('.white-link-div').css({pointerEvents: "none"});
}); 


// WHITE LINKS TEXT
$(".white-link-div1").mouseover(function() {
  var lorem1 = $('.lorem1');
  TweenLite.to(lorem1, 1, {right:50, opacity:1, ease:Power2.easeOut});

  var redLink1 = $('.red-link1');
  TweenLite.to(redLink1, 0.5, {top:0, opacity:1, rotationX:0, ease:Power2.easeOut});

  var whiteLink1 = $('.white-link1');
  TweenLite.to(whiteLink1, 0.5, {top:30, opacity:0, rotationX:90, ease:Power2.easeOut});

});

$(".white-link-div1").mouseleave(function() {
  var lorem1 = $('.lorem1');
  TweenLite.to(lorem1, 0.5, {right:0, opacity:0, ease:Power2.easeOut});

  var redLink1 = $('.red-link1');
  TweenLite.to(redLink1, 0.5, {top:-30, opacity:0, rotationX:90, ease:Power2.easeOut});

  var whiteLink1 = $('.white-link1');
  TweenLite.to(whiteLink1, 0.5, {top:0, opacity:1, rotationX:0, ease:Power2.easeOut});
});

$(".white-link-div2").mouseover(function() {
  var lorem2 = $('.lorem2');
  TweenLite.to(lorem2, 1, {right:50, opacity:1, ease:Power2.easeOut});

  var redLink2 = $('.red-link2');
  TweenLite.to(redLink2, 0.5, {top:0, opacity:1, rotationX:0, ease:Power2.easeOut});

  var whiteLink2 = $('.white-link2');
  TweenLite.to(whiteLink2, 0.5, {top:30, opacity:0, rotationX:90, ease:Power2.easeOut});
});

$(".white-link-div2").mouseleave(function() {
  var lorem2 = $('.lorem2');
  TweenLite.to(lorem2, 0.5, {right:0, opacity:0, ease:Power2.easeOut});

  var redLink2 = $('.red-link2');
  TweenLite.to(redLink2, 0.5, {top:-30, opacity:0, rotationX:90, ease:Power2.easeOut});

  var whiteLink2 = $('.white-link2');
  TweenLite.to(whiteLink2, 0.5, {top:0, opacity:1, rotationX:0, ease:Power2.easeOut});
});

$(".white-link-div3").mouseover(function() {
  var lorem3 = $('.lorem3');
  TweenLite.to(lorem3, 1, {right:50, opacity:1, ease:Power2.easeOut});

  var redLink3 = $('.red-link3');
  TweenLite.to(redLink3, 0.5, {top:0, opacity:1, rotationX:0, ease:Power2.easeOut});

  var whiteLink3 = $('.white-link3');
  TweenLite.to(whiteLink3, 0.5, {top:30, opacity:0, rotationX:90, ease:Power2.easeOut});
});

$(".white-link-div3").mouseleave(function() {
  var lorem3 = $('.lorem3');
  TweenLite.to(lorem3, 0.5, {right:0, opacity:0, ease:Power2.easeOut});

  var redLink3 = $('.red-link3');
  TweenLite.to(redLink3, 0.5, {top:-30, opacity:0, rotationX:90, ease:Power2.easeOut});

  var whiteLink3 = $('.white-link3');
  TweenLite.to(whiteLink3, 0.5, {top:0, opacity:1, rotationX:0, ease:Power2.easeOut});
});

$(".white-link-div4").mouseover(function() {
  var lorem4 = $('.lorem4');
  TweenLite.to(lorem4, 1, {right:50, opacity:1, ease:Power2.easeOut});

  var redLink4 = $('.red-link4');
  TweenLite.to(redLink4, 0.5, {top:0, opacity:1, rotationX:0, ease:Power2.easeOut});

  var whiteLink4 = $('.white-link4');
  TweenLite.to(whiteLink4, 0.5, {top:30, opacity:0, rotationX:90, ease:Power2.easeOut});
});

$(".white-link-div4").mouseleave(function() {
  var lorem4 = $('.lorem4');
  TweenLite.to(lorem4, 0.5, {right:0, opacity:0, ease:Power2.easeOut});

  var redLink4 = $('.red-link4');
  TweenLite.to(redLink4, 0.5, {top:-30, opacity:0, rotationX:90, ease:Power2.easeOut});

  var whiteLink4 = $('.white-link4');
  TweenLite.to(whiteLink4, 0.5, {top:0, opacity:1, rotationX:0, ease:Power2.easeOut});
});


});