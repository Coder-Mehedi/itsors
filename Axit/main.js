$(document).ready(function(){  
   /* Pricing plan: set a minus margin to special plan */
   const heightOfSpecialContent = $(".single-pricing-plan .price h3").outerHeight();
   const screenWidth = $("body").outerWidth();

   $(".wrapper .pricing .pricing-plan .special-plan").css({
      "position":"relative",
       "top":"-" + heightOfSpecialContent + "px"
   });

    $(window).on('resize', () =>{
        if(screenWidth >= 768){
          $(".wrapper .pricing .pricing-plan .special-plan").css({
          "position":"relative",
           "top":"-" + heightOfSpecialContent + "px"
       });
    
    }else{
         $(".wrapper .pricing .pricing-plan .special-plan").css({
          "position":"relative",
           "top":"0px",
           "margin-top": 100 + "px"
       });
    }
    });


    // Contact Form

    $(".contact-us .contact-form .single-input-box input").on("focus",function(){

       $(this).siblings().css({
          "top":"10px",
          "transition":".7s"
       });
       
   });
    
     $(".contact-us .contact-form .single-input-box input").on("blur",function(){
      
        var valueOfTheInputBox = $(this).val();
         
        if(valueOfTheInputBox == ""){
            $(this).siblings().css({
                "top": ""
                , "transition": ".7s"
            });
        }
   });
    
    
});