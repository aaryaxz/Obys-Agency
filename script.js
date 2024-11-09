function disableScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
}

function enableScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
}


function preloaderAnimation(){
    disableScroll()
    var tl = gsap.timeline()

    // ph - responsiveness for smaller screen
    // lp - responsiveness for wider screnn 
    var phStagger = .5
    var lpStagger = .2
    var lpDuration = 0.5
    var phDuration = .7
    var yValueOnLp = 200
    var yValueOnPh = 110

    function animateHeroHeader(selector){
        tl.from(selector,{
        y: window.innerWidth >= 2000 ? yValueOnLp : yValueOnPh,
        duration: window.innerWidth > 768 ? lpDuration : phDuration,
        stagger: window.innerWidth > 768 ? lpStagger : phStagger,
    })
    }

    animateHeroHeader('.lines h1,h2')
    
    
    tl.from(".counter",{
        opacity: 0,
        duration: 2,
        onStart:function(){
            var counterNumber1 = document.querySelector(".counter-number1");
            var grow = 0
            var int = setInterval(() => {
                grow >= 100 && clearInterval(int)
                counterNumber1.innerHTML = grow++;
            }, 35)
        }
    },"=-2")
    
    
    
    tl.from(".preloaderPara",{
        opacity:0,
        duration:.5,
    })
    
    tl.to(".preloader-content",{
        opacity:0,
        delay:2,
        duration:1.7,
    })
    tl.to(".preloader",{
        yPercent:-100,
        delay:0.5,
        ease:"sin.out",
        onended:function(){
            gsap.to(".preloader",{
                display:"none"
            })
            enableScroll()

        }
    })
    tl.from(".nav svg,.nav p,.nav a",{
        dealy:.5,
        opacity:0,
        y:-20,
    })
    animateHeroHeader(".hero-header h1")
}
preloaderAnimation()

var cursor = document.querySelector(".cursor")
document.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        left:dets.x,
        top:dets.y,
        ease:'expo.out',
    })
})