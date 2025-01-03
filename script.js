const locoScroll = new LocomotiveScroll();

function disableScroll() {
    // Get the current lo scroll position
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

    // if any scroll is attempted, set this to the previous value
    window.onscroll = function () {
        window.scrollTo(scrollLeft, scrollTop);
    };
}

function enableScroll() {
    window.onscroll = function () { };
}

function preloaderAnimation() {
    disableScroll();
    var tl = gsap.timeline();

    // ph - responsiveness for smaller screen
    // lp - responsiveness for wider screnn
    var phStagger = 0.2;
    var lpStagger = 0.3;
    var lpDuration = 0.7;
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

    tl.from(
        ".preloaderPara",
        {
            opacity: 0,
            duration: 0.5,
        },
        window.innerWidth >= 768 ? "-=3.6" : "-=2.8"
    );

    tl.to(".preloader-content", {
        opacity: 0,
        delay: window.innerWidth >= 768 ? 0 : 0.6,
        duration: 0.9,
    });
    tl.to(".preloader", {
        yPercent: -100,
        delay: window.innerWidth >= 768 ? 0.3 : 0.3,
        ease: "sin.out",
        onComplete: function () {
            gsap.to(".preloader", {
                display: "none",
            });
            enableScroll();
        },
    });

    tl.from(
        ".nav svg,.nav p,.nav a",
        {
            delay: 0.5,
            opacity: 0,
            y: -20,
        },
        "-=.2"
    );

    animateHeroHeader(".hero-header h1,.hero-header span");

    tl.from(
        ".hero-section",
        {
            opacity: 0,
            duration: 0.5,
        },
        "-=1"
    );
    if (window.innerWidth < 768) {
        tl.from(".video-container", {
            opacity: 0,
            duration: .5,
        }, "-=.9")
    }


}
preloaderAnimation();


var cursor = document.querySelector(".cursor");

function cursorAnimation() {
    document.addEventListener("mousemove", function (dets) {
        gsap.to(cursor, {
            left: dets.x,
            top: dets.y,
            ease: "expo.out",
        });
    });

}
cursorAnimation();

var links = document.querySelectorAll(".navPart4 a");
var navIcon = document.querySelector(".navPart2 .navIcon")
function MagnetEffectAnimation(magnetEffectTarget){
    const targets = magnetEffectTarget.length !== undefined ? magnetEffectTarget : [magnetEffectTarget]

    targets.forEach(function (magnetTarget) {
        const dims = magnetTarget.getBoundingClientRect();
        var x1 = dims.x;
        var x2 = x1 + dims.width;
        var y1 = dims.y;
        var y2 = y1 + dims.height;
        magnetTarget.addEventListener("mousemove", function (dets) {
            var moveX = gsap.utils.mapRange(x1, x2, -15, 15, dets.clientX);
            var moveY = gsap.utils.mapRange(y1, y2, -12, 15, dets.clientY);
            gsap.to(cursor, {
                scale: 1.2,
            });
            gsap.to(magnetTarget, {
                x: moveX,
                y: moveY,
            });
        });
        magnetTarget.addEventListener("mouseleave", function () {
            gsap.to(cursor, {
                scale: 1,
            });
            gsap.to(magnetTarget, {
                x: 0,
                y: 0,
            });
        });
    });
}
MagnetEffectAnimation(links)
if(window.innerWidth >= 768){
    MagnetEffectAnimation(navIcon)
}

function dynamicProjectContents() {
    const projectCardsData = [
        {
            cardHeading: "OLGA PRUDKA",
            img1Src: "Assets/Images/img1.jpg",
            img2Src: "Assets/Images/img2.jpg",
            para1: "Logo design, Website design, Development",
            para2: "2023",
            height: 30,
            width: 24,
        },
        {
            cardHeading: "AIM",
            img1Src: "Assets/Images/img3.jpg",
            img2Src: "Assets/Images/img4.jpg",
            para1: "Logo design, Website design, Development",
            para2: "2024",
            height: 40,
            width: 31,
        },
        {
            cardHeading: "David Laxer",
            img1Src: "Assets/Images/img5.jpg",
            img2Src: "Assets/Images/img6.jpg",
            para1: "Website design, Development",
            para2: "2022",
            height: 40,
            width: 31,
            marginTop: -0.7,
        },
        {
            cardHeading: "OCHI",
            img1Src: "Assets/Images/img7.jpg",
            img2Src: "Assets/Images/img8.jpg",
            para1: "Website design, Development",
            para2: "2023",
            height: 40,
            width: 31,
            marginTop: 10,
        },
        {
            cardHeading: "Éminente",
            img1Src: "Assets/Images/img9.jpg",
            img2Src: "Assets/Images/img10.jpg",
            para1: "Logo design, Website design, Development",
            para2: "2023",
            height: 30,
            width: 24,
            marginTop: -12,
        },
        {
            cardHeading: "MAKHNO",
            img1Src: "Assets/Images/img11.jpg",
            img2Src: "Assets/Images/img12.jpg",
            para1: "Website design, Development",
            para2: "2023",
            height: 40,
            width: 31,
            marginTop: 4,
        },
    ];
    const projectCircleData = [
        {
            right: 0,
            bottom: 2,
            circlePara:
                "We are thrilled to have you on board. We hope you enjoy the projects 🧡",
        },
        {
            left: 0,
            bottom: 60,
            rotate: -45,
            circlePara: "It will make you WOW! 😉",
            textStyle: "center",
        },
        {
            right: 37,
            bottom: 0,
            rotate: -90,
            circlePara: "We like its color palette 🎨",
            textStyle: "center",
        },
    ];

    var our_projects = document.querySelectorAll(".our-projects");
    our_projects.forEach(function (our_project, our_project_index) {
        var startIndex = our_project_index * 2;
        var endIndex = startIndex + 2;

        var cardGroup = projectCardsData.slice(startIndex, endIndex);
        var projectCard = cardGroup.map(function (
            { cardHeading, img1Src, img2Src, para1, para2, height, width, marginTop },
            project_card_index
        ) {
            const project_card = `
                    <div class="project-card-${project_card_index} project-cards relative w-full w-full lg:w-[${width}vw] lg:mt-[${marginTop}vw] h-fit ">
                        <div class="card-header overflow-hidden mt-[18vw] lg:mt-[0]  leading-none h-[22px] lg:h-[40px]">
                            <h2 class=" text-[6vw] md:text-[2.7vw]    leading-none font-[plain-regular]">${cardHeading}</h2>
                            <h2 class=" text-[6vw] md:text-[2.7vw]  leading-none font-[plain-regular]">${cardHeading}</h2>
                        </div>

                        <div class="project-card-img bg-amber-500 w-full mt-[7vw] mb-[5vw] md:mt-[3vw] md:mb-[2vw] h-[62vh] md:h-[60vw] lg:h-[${height}vw] relative">
                            <img src="${img1Src}" class="w-full h-full absolute z-[33] object-cover "
                            alt="">
                            <img src="${img2Src}" class="w-full h-full absolute object-cover "
                            alt="">   
                        </div>
                        <div class="project-card-details flex justify-between ">
                            <p class="font-[plain-light] w-[50%]  lg:w-[50%] text-[14px] md:text-[17px] lg:text-[15.7px]">${para1}</p>
                            <p class="font-[plain-light] text-[14px] md:text-[15.7px]">${para2}</p>
                        </div>
                        <div class="project-underline absolute right-[0] underline w-[0%] bg-white h-[1px] mt-[6vw] mb-[12vw] md:mb-[6vw]  lg:mb-[0vw] md:mt-[2vw]"></div>
                    </div>
                    
            `;

            return project_card;
        });
        our_project.innerHTML = projectCard.join("");

        var circle = projectCircleData.slice(
            our_project_index,
            our_project_index + 1
        );
        var projectCircle = circle.map(function ({
            bgColor,
            right,
            left,
            bottom,
            rotate,
            circlePara,
            textStyle,
        }) {
            const project_circle = ` <div 
        class="project-circle w-[23vw]  h-[23vw] hidden lg:flex justify-center items-center  border border-white rounded-full mt-[15vw] absolute right-[${right}%] left-[${left}]  bottom-[${bottom}%]" data-scroll data-scroll-speed=".08">
        <svg class="button__arrow w-[8vw] h-[8vw] rotate-[${rotate}deg]" viewBox="0 0 91 118" fill="none">
            <path
                d="M15.2307 57.4152L15.9378 56.708L15.2307 56.0009L14.5236 56.708L15.2307 57.4152ZM34.9813 77.1658L34.2742 77.8729L35.9813 79.58L35.9813 77.1658L34.9813 77.1658ZM0.151478 72.4944L-0.555622 71.7873L-1.26273 72.4944L-0.555622 73.2015L0.151478 72.4944ZM45.29 117.633L44.5828 118.34L45.29 119.047L45.9971 118.34L45.29 117.633ZM60.3692 102.554L61.0763 103.261L61.7839 102.553L61.0758 101.846L60.3692 102.554ZM60.3685 102.553L59.6614 101.846L58.9538 102.553L59.6619 103.261L60.3685 102.553ZM90.427 72.4944L91.1341 73.2015L91.8412 72.4944L91.1341 71.7873L90.427 72.4944ZM75.3478 57.4152L76.0549 56.7081L75.3478 56.001L74.6407 56.7081L75.3478 57.4152ZM56.3065 76.4565L55.3065 76.4565L55.3065 78.8707L57.0136 77.1636L56.3065 76.4565ZM56.3065 0.120074L57.3065 0.120074L57.3065 -0.879926L56.3065 -0.879926L56.3065 0.120074ZM34.9813 0.120076L34.9813 -0.879924L33.9813 -0.879924L33.9813 0.120076L34.9813 0.120076ZM14.5236 58.1223L34.2742 77.8729L35.6884 76.4587L15.9378 56.708L14.5236 58.1223ZM0.858585 73.2015L15.9378 58.1223L14.5236 56.708L-0.555622 71.7873L0.858585 73.2015ZM45.9971 116.926L0.858585 71.7873L-0.555622 73.2015L44.5828 118.34L45.9971 116.926ZM59.662 101.846L44.5828 116.926L45.9971 118.34L61.0763 103.261L59.662 101.846ZM59.6619 103.261L59.6625 103.261L61.0758 101.846L61.0751 101.845L59.6619 103.261ZM61.0756 103.26L91.1341 73.2015L89.7199 71.7873L59.6614 101.846L61.0756 103.26ZM91.1341 71.7873L76.0549 56.7081L74.6407 58.1223L89.7199 73.2015L91.1341 71.7873ZM74.6407 56.7081L55.5994 75.7494L57.0136 77.1636L76.0549 58.1223L74.6407 56.7081ZM57.3065 76.4565L57.3065 0.120074L55.3065 0.120074L55.3065 76.4565L57.3065 76.4565ZM56.3065 -0.879926L34.9813 -0.879924L34.9813 1.12008L56.3065 1.12007L56.3065 -0.879926ZM33.9813 0.120076L33.9813 77.1658L35.9813 77.1658L35.9813 0.120076L33.9813 0.120076Z"
                fill="currentColor"></path>
        </svg>
        <div
            class="project-circle-in flex w-full  h-full  justify-center items-center bg-white text-black rounded-full  absolute top-[0] left-[0]">
            <p class="project-circle-in-para w-[80%] text-${textStyle} leading-[1.3rem] font-[plain-regular] text-[15px]">
                ${circlePara}
                </p>
        </div>
    </div>`;
            return project_circle;
        });
        our_project.innerHTML += projectCircle.join("");
    });
}

dynamicProjectContents();

function sheryAnimation() {
    Shery.imageEffect(".project-card-img", {
        style: 5, //Select Style
        gooey: true,

        config: {
            a: { value: 2, range: [0, 30] },
            b: { value: 0.75, range: [-1, 1] },
            zindex: { value: -9996999, range: [-9999999, 9999999] },
            aspect: { value: 0.798602047931322 },
            ignoreShapeAspect: { value: true },
            shapePosition: { value: { x: 0, y: 0 } },
            shapeScale: { value: { x: 0.5, y: 0.5 } },
            shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
            shapeRadius: { value: 0, range: [0, 2] },
            currentScroll: { value: 0 },
            scrollLerp: { value: 0.07 },
            gooey: { value: true },
            infiniteGooey: { value: false },
            growSize: { value: 4, range: [1, 15] },
            durationOut: { value: 1, range: [0.1, 5] },
            durationIn: { value: 1.5, range: [0.1, 5] },
            displaceAmount: { value: 0.5 },
            masker: { value: true },
            maskVal: { value: 1.18, range: [1, 5] },
            scrollType: { value: 0 },
            geoVertex: { range: [1, 64], value: 1 },
            noEffectGooey: { value: true },
            onMouse: { value: 1 },
            noise_speed: { value: 0.2, range: [0, 10] },
            metaball: { value: 0.44, range: [0, 2] },
            discard_threshold: { value: 0.47, range: [0, 1] },
            antialias_threshold: { value: 0, range: [0, 0.1] },
            noise_height: { value: 0.5, range: [0, 2] },
            noise_scale: { value: 10, range: [0, 100] },
        },
    });
}

window.onload = () => {
    sheryAnimation()
};

function videoCursorAnimation() {
    var vidInnerContainer = document.querySelector(".video-inner-container");
    var vid = document.querySelector(".video-inner-container video");
    var vidCursor = document.querySelector(".video-cursor");
    vidInnerContainer.addEventListener("mousemove", function (dets) {
        const rect = vidInnerContainer.getBoundingClientRect();
        var x = dets.clientX - rect.left;
        var y = dets.clientY - rect.top;
        gsap.set(".cursor", { opacity: 0 });
        gsap.to(vidCursor, {
            top: y,
            left: x,
        });
    });
    vidInnerContainer.addEventListener("mouseleave", function (dets) {
        gsap.set(".cursor", { opacity: 1 });
        gsap.to(vidCursor, {
            top: "-5%",
            left: "75%",
            duration: 0.5,
        });
    });

    var isPlaying = 0;
    vidInnerContainer.addEventListener("click", function () {
        if (isPlaying == 0) {
            vid.play();
            vid.style.opacity = 1;
            vidCursor.innerHTML =
                '<i class="ri-pause-mini-line xl:text-[2.6vw] md:text-[4vw] text-[5vw]"></i>';
            gsap.to(vidCursor, {
                scale: 0.5,
                delay: 0.5,
                duration: 1,
                ease: "expo.out",
            });
            isPlaying = 1;
        } else {
            vid.pause();
            vid.style.opacity = 0;
            vidCursor.innerHTML =
                '<i class="ri-play-fill xl:text-[2.6vw] md:text-[4vw] text-[5vw]"></i>';
            gsap.to(vidCursor, {
                scale: 1,
                delay: 0.2,
                duration: 1,
                ease: "expo.out",
            });
            isPlaying = 0;
        }
    });

    gsap.to(".video-cursor", {
        opacity: 1,
        scrollTrigger: {
            trigger: ".video-cursor",
            scroller: "body",
            // markers:true,
            start: 'top-=200vw center',
            end: "bottom bottom"
        }
    })
}

videoCursorAnimation();

function flagAnimation() {
    var flag = document.querySelector(".text-container .flag");
    var thirdHeroHeader = document.querySelector(".hero-header-3");

    thirdHeroHeader.addEventListener("mousemove", function (dets) {
        const rectHeroHader = thirdHeroHeader.getBoundingClientRect();
        const x = dets.clientX - rectHeroHader.left;
        const y = dets.clientY - rectHeroHader.top;
        gsap.to(flag, {
            top: y,
            left: x,
        });
    });
    thirdHeroHeader.addEventListener("mouseenter", function () {
        gsap.to(flag, {
            opacity: 1,
        });
    });
    thirdHeroHeader.addEventListener("mouseleave", function () {
        gsap.to(flag, {
            opacity: 0,
        });
    });
}
if (window.innerWidth >= 768) {
    flagAnimation();

    window.addEventListener("resize", flagAnimation)
}


function footerHeaderAnimation() {
    const headerElements = document.querySelectorAll(".footer-headers");
    const animatedHeader1 = document.querySelector(".footer-header-1");
    const animatedHeader2 = document.querySelector(".footer-header-2");

    const animationText = "Let's Create";
    const textArray = [...animationText];

    // Create spans for each character
    const spanTextArray = textArray.map((char) => `<span>${char}</span>`);
    const formattedText = spanTextArray.join("");

    animatedHeader1.innerHTML = formattedText;
    animatedHeader2.innerHTML = formattedText;

    const animatedSpans1 = document.querySelectorAll(".footer-header-1 span");
    const animatedSpans2 = document.querySelectorAll(".footer-header-2 span");

    gsap.set(animatedSpans2, { opacity: 0 });

    headerElements.forEach(function (header) {
        header.addEventListener("mouseenter", function () {
            gsap.to(animatedSpans2, {
                opacity: 1,
                stagger: 0.06,
                duration: 0.5,
            });
            gsap.to(
                ".footer-header svg",
                {
                    x: window.innerWidth >= 768 ? 50 : 25,
                    ease: "expo.out",
                },
                "-=.4"
            );
            gsap.to(animatedSpans1, {
                opacity: 0,
                stagger: 0.06,
                duration: 0.4,
            });
        });
        header.addEventListener("mouseleave", function () {
            gsap.to(animatedSpans2, {
                opacity: 0,
                stagger: 0.06,
                duration: 0.4,
            });
            gsap.to(
                ".footer-header svg",
                {
                    x: 0,
                    ease: "expo.out",
                },
                "-=.4"
            );
            gsap.to(animatedSpans1, {
                opacity: 1,
                stagger: 0.06,
                duration: 0.5,
            });
        });
    });
}
footerHeaderAnimation();

function textUnderlineAnimation() {
    var textUnderlines = document.querySelectorAll(".underline");
    var textUnderlineArray = [...textUnderlines];
    textUnderlineArray.map(function (textUnderline, index) {
        return gsap.to(textUnderline, {
            width: "100%",
            duration: 0.8,
            scrollTrigger: {
                scroller: "body",
                trigger: textUnderline,
                start: "top-=400vw center",
                end: "bottom bottom",
            },
        });
    });
}
textUnderlineAnimation()


var pageNumbers = document.querySelectorAll(".pageNumber")
var pageNumberArray = [...pageNumbers]

var projectCircles = document.querySelectorAll(".project-circle")
var projectCircleArray = [...projectCircles]

var projectCardDetails = document.querySelectorAll(".project-card-details")
var projectCardDetailArray = [...projectCardDetails]


function fadeInGroupAnimation(fadeGroupTarget) {
    // gsap.set(pageNumbers,{opacity:})
    let pageNumberStartValue = "top-=350vw center"
    let projectCircleStartValue = "top-=250vw center"
    fadeGroupTarget.map(function (target) {
        return gsap.from(target, {
            y: fadeGroupTarget === pageNumberArray ? 7 : "",
            opacity: 0,
            scrollTrigger: {
                trigger: target,
                scroller: "body",
                start: target === pageNumberArray ? pageNumberStartValue : projectCircleStartValue,
                end: "bottom bottom",
            }
        })

    })

}

fadeInGroupAnimation(pageNumberArray)
fadeInGroupAnimation(projectCircleArray)
fadeInGroupAnimation(projectCardDetailArray)

function fadeInAnimation(fadeTarget) {
    let startValue = "top-=300vw center"
    let marqueeParagraphStartValue = "top-=30% center"
    let footerHeaderStartValue = "top-=350vw center"
    let footerHeaderEndValue = "bottom+=100vw bottom"
    gsap.from(fadeTarget, {
        opacity: 0,
        duration: 1,
        y: 7,
        scrollTrigger: {
            trigger: fadeTarget,
            scroller: "body",
            start: fadeTarget === ".marquee-paragraph" ? marqueeParagraphStartValue : fadeTarget === ".footer-header" ? footerHeaderStartValue : startValue,
            end: fadeTarget === ".footer-header" ? footerHeaderEndValue : '',
            // markers:true,
        }
    })
}
fadeInAnimation('.about-visual-paragraph')
fadeInAnimation('.marquee-paragraph')
fadeInAnimation('.footer-header')
fadeInAnimation('.footer-info')
fadeInAnimation('.copyright')
fadeInAnimation(".about-img")


function textAnimation(textTarget) {
    gsap.from(textTarget, {
        y: 100,
        scrollTrigger: {
            scroller: "body",
            trigger: textTarget,
            start: "top-=400vw center",
            end: "bottom bottom",
        },
    })
}
textAnimation(".our-projects-header  h1")
textAnimation(".about-header  h1")


let cardHeaders = document.querySelectorAll(".card-header")
let projectCard = document.querySelectorAll(".project-cards")
let socialLinks = document.querySelectorAll(".social-link")

function textHoverAnimation(textHoverTarget) {
    textHoverTarget.forEach(function (hoverTarget) {
        var headers = hoverTarget.querySelectorAll("h2")
        hoverTarget.addEventListener("mousemove", function () {
            const yValue = window.innerWidth < 768 && textHoverTarget === socialLinks ? "-26px" : textHoverTarget === projectCard ? window.innerWidth < 768 ? "-24px" : "-40px" : "-31px";
            gsap.to(headers, {
                y: yValue,
            })
        })
        hoverTarget.addEventListener("mouseleave", function () {
            gsap.to(headers, {
                y: 0,
            })
        })
    })
}

textHoverAnimation(projectCard)
textHoverAnimation(socialLinks)

var obysInfoPara = document.querySelector(".obys-info-para")
var obysInfoPara2 = document.querySelectorAll(".obys-info-para-2")
obysInfoPara.addEventListener("mousemove", function () {
    console.log(obysInfoPara)

    gsap.to(obysInfoPara2, {
        y: window.innerWidth >= 768 ? "-2.1vw" : "-6.8vw",
    })
})
obysInfoPara.addEventListener("mouseleave", function () {
    gsap.to(obysInfoPara2, {
        y: 0,
    })
})

cardHeaders.forEach(function (cardHeader) {
    var header = cardHeader.querySelector("h2")
    gsap.from(header, {
        y: "40px",
        duration: .8,
        scrollTrigger: {
            scroller: "body",
            trigger: header,
            // markers:true,
            start: "top-=400vw center",
            end: "bottom bottom"
        }
    })

})

const heroSection = document.querySelector(".hero-section")
const aboutPageNumber = document.querySelector(".aboutPageNumber")
const ourProjectHeader = document.querySelector(".our-projects-header ")
function scrollAnimation(scrollPageTarget) {

    const scrollSpeed1 = window.innerWidth <= 768 ? .1 : .3;
    const scrollSpeed2 = window.innerWidth <= 768 ? .03 : .08;

    if (scrollPageTarget == heroSection) {
        scrollPageTarget.setAttribute("data-scroll-speed", scrollSpeed1)
    } else {
        scrollPageTarget.setAttribute("data-scroll-speed", scrollSpeed2)
    }
}
scrollAnimation(heroSection)
scrollAnimation(aboutPageNumber)
scrollAnimation(ourProjectHeader)
window.addEventListener('resize', function () {
    scrollAnimation(heroSection)
    scrollAnimation(aboutPageNumber)
    scrollAnimation(ourProjectHeader)
})

