/*global $, setTimeout,i*/



/* Script for making the div to take all the height of window */ 
$(function() {
	"use strict";
	$(".slide").height($(window).height());


});









/* -------------------------------- to make the numbers and the Begin to be centered from the jquery elements --------------------------- */ 

$(document).ready(function () {
            
 
     $(".num-1 , .num-2 , .num-3 , .num-4").css({
        position:"absolute",
        left:($(window).width() - $(".num-1").width() )/ 2 + "px",
        
    
    
    });    
    /* -------------- postioning logo scci ---------- */ 
    
    $(".scci-logo").css({
        position:"absolute",
        left:($(window).width() - $(".scci-logo").width()) / 2 + "px",
        top:(($(window).height() - $(".scci-logo").height()) / 2 ) + 662 + "px",
    });
    
    $(".text-logo").css({
        position:"absolute",
        left:($(window).width() - $(".text-logo").width()) / 2 + "px",
        top:(($(window).height() - $(".text-logo").height()) / 2 ) + "px"
    
    });
      $(".in").css({
        position:"absolute",
        left:($(window).width() - $(".in").width()) / 2 + "px",
        top:(($(window).height() - $(".in").height()) / 2 ) + "px"
    
    });
    
      $(".develogy-logo-img").css({
        position:"absolute",
        left:($(window).width() - $(".develogy-logo-img").width()) / 2 + "px",
        top:(($(window).height() - $(".develogy-logo-img").height()) / 2 ) + "px"
    
    });
    
    $(".crew-text").css({
        position:"absolute",
        left:($(window).width() - $(".crew-text").width()) / 2 + "px"
    
    });
    $(".slide-3 .planet").css({
        position:'absolute',
        left:($(window).width() - $(".slide-3 .planet").width()) / 2 + "px"
    });
  /*  
    $(".slide-4 img").css({
        position:"absolute",
        left:($(window).width() - $(".slide-4 img").width()) / 2 + "px",
        
    });
*/
});


/* ----------------- 


/* 

        Width of the Projector is 1007px to 1024px
        We have to make it in the Media Query 
        
        

*/

/* Script for making the Slides to be continued after each other */ 


$(document).ready(function () {
	"use strict";
	var slide = $('.slide');
		

		slide.each(function (i) {
        if (i < 4) {
            setTimeout(function () {
                slide.eq(i).fadeOut();
            }, 11000 * (i + 1));
        } 
});
    
    
    
    

});






/* ------------------------------- End of the Script -------------------------------------- */ 









