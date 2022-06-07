
    window.onscroll = function() {
        
            if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
              $( "#header" ).addClass("fixed-top");
            } else {
              $( "#header" ).removeClass("fixed-top");
            }

    };
    
  



          // global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
    // create the global player from the specific iframe (#video)
    player = new YT.Player('video', {
        events: {
            // call this function when player is ready to use
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {

    // bind events
    
   
    $('.play-button').click(function() {
      $('.make-black').slideDown(300);
      player.playVideo();
     
    });
    

    $('.make-black').click(function() {
      $('.make-black').slideUp(300);
      player.pauseVideo();
    });
    

}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    

// $('.play-button').click(function() {
//   $('.make-black').slideDown(300);
 
// });


// $('.make-black').click(function() {
//   $('.make-black').slideUp(300);
  
// });



