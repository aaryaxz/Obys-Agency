function preloaderAnimation(){
    var tl = gsap.timeline()

    // ph - responsiveness for smaller screen
    // lp - responsiveness for wider screnn 
    const phStagger = .5
    const lpStagger = .2
    const lpDuration = 0.5
    const phDuration = .7
    const yValueOnLp = 200
    const yValueOnPh = 100

    tl.from(".lines h1,h2",  {
        y: window.innerWidth>=2000?yValueOnLp:yValueOnPh,
        duration: window.innerWidth>768?lpDuration:phDuration,
        stagger: window.innerWidth>768?lpStagger:phStagger,
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