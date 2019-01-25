$(document).ready(function(){
    
   /* Pricing plan: set a minus margin to special plan */
   var heightOfSpecialContent = $(".single-pricing-plan .price h3").outerHeight();
   $(".wrapper .pricing .pricing-plan .special-plan").css({
      "position":"relative",
       "top":"-" + heightOfSpecialContent + "px"
   });
    
});