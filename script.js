function disableScroll() {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
}

function enableScroll() {
    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";
}

function preloaderAnimation() {
    disableScroll();
    var tl = gsap.timeline();

    // ph - responsiveness for smaller screen
    // lp - responsiveness for wider screnn
    var phStagger = 0.2;
    var lpStagger = 0.3;
    var lpDuration = .7;
    var phDuration = 0.7;
    var yValueOnLp = 200;
    var yValueOnPh = 110;

    function animateHeroHeader(selector) {
        tl.from(
            selector,
            {
                yPercent: window.innerWidth >= 2000 ? yValueOnLp : yValueOnPh,
                duration: window.innerWidth > 768 ? lpDuration : phDuration,
                stagger:
                    selector === ".hero-header h1,.hero-header span"
                        ? 0.1
                        : window.innerWidth > 768
                            ? lpStagger
                            : phStagger,
            },
            window.innerWidth <= 768 &&
                selector === ".hero-header h1,.hero-header span"
                ? "-=.9"
                : null
        );
    }

    animateHeroHeader(".lines h1,h2");

    tl.from(
        ".counter",
        {
            opacity: 0,
            duration: 2,
            onStart: function () {
                var counterNumber1 = document.querySelector(".counter-number1");
                var grow = 0;
                var int = setInterval(() => {
                    grow >= 100 && clearInterval(int);
                    counterNumber1.innerHTML = grow++;
                }, 35);
            },
        },
        "-=6"
    );

    tl.from(".preloaderPara", {
        opacity: 0,
        duration: 0.5,
    },window.innerWidth >= 768 ? "-=3.6" : "-=2.8");

    tl.to(".preloader-content", {
        opacity: 0,
        delay:window.innerWidth >= 768 ? 0 : .6,
        duration: .9,
    });
    tl.to(".preloader", {
        yPercent: -100,
        delay: window.innerWidth >= 768 ? 0.3: 0.3,
        ease: "sin.out",
        onended: function () {
            gsap.to(".preloader", {
                display: "none",
            });
            enableScroll();
        },
    });

    tl.from(
        ".nav svg,.nav p,.nav a",
        {
            dealy: 0.5,
            opacity: 0,
            y: -20,
        },
        "-=.2"
    );

    animateHeroHeader(".hero-header h1,.hero-header span");
    
    tl.from(".pageNumber",{
        opacity:0,
        duration:.5,
    },"-=1")

}
preloaderAnimation();


function cursorAnimation(){
    var cursor = document.querySelector(".cursor");
    var links = document.querySelectorAll(".navPart4 a");
    document.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            left: dets.x,
            top: dets.y,
            ease: "expo.out",
        });
    });
    
    links.forEach(function (link) {
        const dims = link.getBoundingClientRect();
        var x1 = dims.x;
        var x2 = x1 + dims.width;
        var y1 = dims.y;
        var y2 = y1 + dims.height;
        link.addEventListener("mousemove", function (dets) {
            var moveX = gsap.utils.mapRange(x1, x2, -15, 15, dets.clientX);
            var moveY = gsap.utils.mapRange(y1, y2, -12, 15, dets.clientY);
            gsap.to(cursor, {
                scale: 1.2,
            });
            gsap.to(link, {
                x: moveX,
                y: moveY,
            });
        });
        link.addEventListener("mouseleave", function () {
            gsap.to(cursor, {
                scale: 1,
            });
            gsap.to(link, {
                x: 0,
                y: 0,
            });
        });
    });
}
cursorAnimation()