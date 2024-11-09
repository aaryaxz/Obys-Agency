function preloaderAnimation(){
    var tl = gsap.timeline()
    tl.from(".lines h1,h2",  {
        y: 100,
        duration: 0.5,
        stagger: 0.2,
    })
    
    
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
        }
    })
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