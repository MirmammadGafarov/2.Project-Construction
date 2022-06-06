
    window.onscroll = function() {
        
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
              $( "#header" ).addClass("fixed-top");
            } else {
              $( "#header" ).removeClass("fixed-top");
            }
          
          

    };
    
  

