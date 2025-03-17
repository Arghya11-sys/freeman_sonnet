const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation(){
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter",function(){
        fixed.style.display = "block"
    
})
elemC.addEventListener("mouseleave",function(){
    fixed.style.display = "none"
    
})

// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//     var image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${image})`
// })

 var elems = document.querySelectorAll(".elem")
 elems.forEach(function (e){
    e.addEventListener("mouseenter",function(){
        var image = e.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`
        fixed.style.backgroundSize = "cover"
         fixed.style.backgroundPosition = "center"
    })
 })
}

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
        loop:true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
            }
      });
}

function menuAnimation(){
    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
        full.style.top = 0
        navimg.style.opacity = 0
        document.body.style.overflow = "hidden";
        flag = 1
    } else {
        full.style.top = "-100%"
        navimg.style.opacity = 1
        document.body.style.overflow = "auto";
        flag = 0
    }
})
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 2500)
}


swiperAnimation()
page4Animation()
menuAnimation()
loaderAnimation()




