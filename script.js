const locomotiveScroll = new LocomotiveScroll();

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
        ".pageNumber",
        {
            opacity: 0,
            duration: 0.5,
        },
        "-=1"
    );
}
// preloaderAnimation();

function cursorAnimation() {
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
cursorAnimation();

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
// sheryAnimation()

var our_project_content = document.querySelector(".our-projects-content");
const projectCardsData = [
    {
        cardHeading: "OLGA PRUDKA",
        img1: "img1",
        img2: "img2",
        para1: "Logo design,Website design,Development",
        para2: "2023",
    },
    {
        cardHeading: "AIM",
        img1: "img3",
        img2: "img4",
        para1: "Logo design,Website design,Development",
        para2: "2024",
    },
    {
        cardHeading: "OCHI",
        img1: "img5",
        img2: "img6",
        para1: "Website design,Development",
        para2: "2022",
    },
    {
        cardHeading: "David Laxer",
        img1: "img7",
        img2: "img8",
        para1: "Website design,Development",
        para2: "2023",
    },
    {
        cardHeading: "Éminente",
        img1: "img9",
        img2: "img10",
        para1: "Logo design,Website design,Development",
        para2: "2023",
    },
    {
        cardHeading: "MAKHNO",
        img1: "img11",
        img2: "img12",
        para1: "Website design,Development",
        para2: "2023",
    },
];

var our_projects = document.querySelectorAll(".our-projects");
//     const startIndex = projectIndex ;
//     const endIndex = startIndex + 2;

//     const projectsForThisGroup = projectCardData.slice(startIndex, endIndex);

//     const projectCards = projectsForThisGroup.map(function (
//         { cardHeading, imageNumber, para1, para2 },
//         index
//     ) {
//         const project_content = `<div class="our-projects-1">
//             <div class="project-card-${startIndex + index + 1} w-[24vw] h-fit ">
//                 <h2 class="text-[2.7vw] leading-none font-[plain-regular]">${cardHeading}</h2>
//                 <div class="project-card-img bg-amber-500 w-full mt-[3vw] mb-[2vw] h-[30vw] relative">
//                     <img src="Assets/Images/img${imageNumber}.jpg" class="w-full h-full absolute z-[33] object-cover "
//                         alt="">
//                 </div>
//                 <div class="project-card-details flex justify-between">
//                     <p class="font-[plain-light] w-[50%] text-[15.7px]">${para1}</p>
//                     <p class="font-[plain-light]">${para2}</p>
//                 </div>
//                 <div class="project-underline w-full bg-white h-[1px] mt-[2vw]"></div>
//             </div>
//         </div>`;
//         return project_content;
//     });

//     our_project.innerHTML += projectCards.join("");
// });
our_projects.forEach(function (our_project, our_project_index) {
    var startIndex = our_project_index * 2;
    var endIndex = startIndex + 2;

    var projectsForThisGroup = projectCardsData.slice(startIndex, endIndex);
    var projectCard = projectsForThisGroup.map(function (
        { cardHeading, img1,img2, para1, para2 },
        project_card_index
    ) {
        const project_card = `<div class="our-projects-${our_project_index} ">
                    <div class="project-card-${project_card_index} w-[24vw] h-fit ">
                    <h2 class="text-[2.7vw] leading-none font-[plain-regular]">${cardHeading}</h2>
                    <div class="project-card-img bg-amber-500 w-full mt-[3vw] mb-[2vw] h-[30vw] relative">
                        <img src="Assets/Images/${img1}.jpg" class="w-full h-full absolute z-[33] object-cover "
                            alt="">
                        <img src="Assets/Images/${img2}.jpg" class="w-full h-full absolute object-cover "
                            alt="">   
                    </div>
                    <div class="project-card-details flex justify-between">
                        <p class="font-[plain-light] w-[50%] text-[15.7px]">${para1}</p>
                        <p class="font-[plain-light]">${para2}</p>
                    </div>
                    <div class="project-underline w-full bg-white h-[1px] mt-[2vw]"></div>
                </div>
                    <div
            class="project-circle w-[24vw]  h-[24vw] flex justify-center items-center border border-white rounded-full mt-[15vw] absolute right-[0] bottom-[2vw]">
            <svg class="button__arrow w-[8vw] h-[8vw]" viewBox="0 0 91 118" fill="none">
                <path
                    d="M15.2307 57.4152L15.9378 56.708L15.2307 56.0009L14.5236 56.708L15.2307 57.4152ZM34.9813 77.1658L34.2742 77.8729L35.9813 79.58L35.9813 77.1658L34.9813 77.1658ZM0.151478 72.4944L-0.555622 71.7873L-1.26273 72.4944L-0.555622 73.2015L0.151478 72.4944ZM45.29 117.633L44.5828 118.34L45.29 119.047L45.9971 118.34L45.29 117.633ZM60.3692 102.554L61.0763 103.261L61.7839 102.553L61.0758 101.846L60.3692 102.554ZM60.3685 102.553L59.6614 101.846L58.9538 102.553L59.6619 103.261L60.3685 102.553ZM90.427 72.4944L91.1341 73.2015L91.8412 72.4944L91.1341 71.7873L90.427 72.4944ZM75.3478 57.4152L76.0549 56.7081L75.3478 56.001L74.6407 56.7081L75.3478 57.4152ZM56.3065 76.4565L55.3065 76.4565L55.3065 78.8707L57.0136 77.1636L56.3065 76.4565ZM56.3065 0.120074L57.3065 0.120074L57.3065 -0.879926L56.3065 -0.879926L56.3065 0.120074ZM34.9813 0.120076L34.9813 -0.879924L33.9813 -0.879924L33.9813 0.120076L34.9813 0.120076ZM14.5236 58.1223L34.2742 77.8729L35.6884 76.4587L15.9378 56.708L14.5236 58.1223ZM0.858585 73.2015L15.9378 58.1223L14.5236 56.708L-0.555622 71.7873L0.858585 73.2015ZM45.9971 116.926L0.858585 71.7873L-0.555622 73.2015L44.5828 118.34L45.9971 116.926ZM59.662 101.846L44.5828 116.926L45.9971 118.34L61.0763 103.261L59.662 101.846ZM59.6619 103.261L59.6625 103.261L61.0758 101.846L61.0751 101.845L59.6619 103.261ZM61.0756 103.26L91.1341 73.2015L89.7199 71.7873L59.6614 101.846L61.0756 103.26ZM91.1341 71.7873L76.0549 56.7081L74.6407 58.1223L89.7199 73.2015L91.1341 71.7873ZM74.6407 56.7081L55.5994 75.7494L57.0136 77.1636L76.0549 58.1223L74.6407 56.7081ZM57.3065 76.4565L57.3065 0.120074L55.3065 0.120074L55.3065 76.4565L57.3065 76.4565ZM56.3065 -0.879926L34.9813 -0.879924L34.9813 1.12008L56.3065 1.12007L56.3065 -0.879926ZM33.9813 0.120076L33.9813 77.1658L35.9813 77.1658L35.9813 0.120076L33.9813 0.120076Z"
                    fill="currentColor"></path>
            </svg>
            <div
                class="project-circle-in  w-full  h-full flex justify-center items-center bg-white text-black rounded-full  absolute top-[0] left-[0]">
                <p class="project-circle-in-para w-[80%]  leading-[1.3rem] font-[plain-regular] text-[15px]">
                    We are thrilled to have you on board. We hope you enjoy the projects 🧡</p>
            </div>
        </div>
            </div>`;
        return project_card;
    });
    our_project.innerHTML = projectCard.join("");
});
