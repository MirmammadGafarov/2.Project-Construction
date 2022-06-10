
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
    





var services = [
  {
    id : 'construction',
    image: './img/bg-construction.jpg',
    icon : './img/ic-construction.svg',
    serviceName: 'Construction'
  },

  {
    id : 'projectDevelopment',
    image: './img/bg-project.jpg',
    icon : './img/ic-project.svg',
    serviceName: 'Project Development'
  },
  {
    id : 'interiorDesign',
    image: './img/bg-interior.jpg',
    icon : './img/ic-pantone.svg',
    serviceName: 'Interior Design'
  },
  {
    id : 'repairs',
    image: './img/bg-repairs.jpg',
    icon : './img/ic-repair.svg',
    serviceName: 'Repairs'
  }


]

services.forEach(function(service){

document.getElementById("addServices").innerHTML += 


`     <div class="services col-sm-6 col-lg-3 mb-4 ">

<a href="#">
  <div id="${service.id}" class="inner text-center">
    <div class="inner-content">
      <img src="${service.icon}" alt="">
      <h5>${service.serviceName}</h5>
    </div>
  </div>
</a>
</div>`

setTimeout(() => {
  if(service.id){

    $('#' + service.id ).on({
     mouseover:function(){
       this.style.backgroundImage = `url(${service.image})`;
       this.style.animation = `show 0.6s `;
    },

    mouseout:function(){
     this.style.backgroundImage = `none`;
     this.style.animation = `hide 1s `;
  }
})
}
}, 200);

 

})



//SWIPER


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".test-button-next",
    prevEl: ".test-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {

    // when window width is >= 320px
    0: {
      pagination: {
        el: ".swiper-pagination-hidden",
      },
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 57px
    576: {
     
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  
  }
});





//  if(product[1].id){

//       $('#' + product[1].id ).on({
//        mouseover:function(){
//         this.style.backgroundimage = `url(${product[1].service})`;
//          this.style.animation = `show 0.6s `;
//       },
//       mouseout:function(){
//        this.style.backgroundimage = `none`;
//        this.style.animation = `hide 1s `;
//     }
//   })
// }






// $('.inner').on({

  
//   mouseover:function(){
//     this.style.backgroundimage = `url(./img/bg-construction.jpg)`;
//     this.style.animation = `show 0.6s `;
//  },


//    mouseout:function(){
//     this.style.backgroundimage = `none`;
//     this.style.animation = `hide 1s `;
//  }
// })
















// $(document).ready(function getProducts(){
//   fetch('/Sources/new_products.json')
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     data.new_products.forEach(function (product) {
//       document.getElementById("addCard").innerHTML += 

//       `<div  class="col-lg-3 col-md-4 col-sm-6 col-12">
//          <div class="new_brand" >
//            <div id="${product.id}" class="new_img" style="background: url('${product.firstImg}')" ></div>
//          </div>
//          <div class="bottom_text">
//            <a href="#">${product.name}</a><br>
//            <span>$${product.price}</span>
//          </div>
//        </div>`; 
// //Change products' images by means of Mouse Events
// setTimeout(() => {
//   if(product.id){
//     $('#' + product.id ).on({
//       mouseenter:function(){
//         this.style.backgroundimage = `url(${product.secondImg})`
//       },
//       mouseout:function(){
//         this.style.backgroundimage = `url(${product.firstImg})`
//       }
//     })
//   }
// }, 500);
// });
// })
//   .catch(error => {
//     console.log("An error has been occured"+error)
//     document.getElementById("addCard").innerHTML += 
//     `<div class="p-5" style="font-size:50px; background:#0fbfa8; font-weight:600">Please open index.html in Live Server, <br>in order to see Section_3 Objects :)<div/>`;
//   })
// }
// )


