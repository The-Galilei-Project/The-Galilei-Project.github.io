// se l'elemento è in viewport
// $.fn.isInViewport = function() {
//     var elementTop = $(this).offset().top;
//     var elementBottom = elementTop + $(this).outerHeight();

//     var viewportTop = $(window).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     return elementBottom > viewportTop && elementTop < viewportBottom;
// };

// navbar show/hide
var lastScroll = 0;

$(document).scroll(function () {
    var scroll = $(this).scrollTop();

    if (scroll) {
        if (scroll > lastScroll) {
            /* console.log("down"); */
            $(".navbar").css("transform", "translate(0, -100%)");
        } else {
            /* console.log("up"); */
            $(".navbar").css("transform", "translate(0, 0)");
        }
    }
    lastScroll = scroll;
});

// scrollToTop button

$(".logo.fit #scrollToTop").each(function () {
    $(this).click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});

$(".logo #scrollToTop").each(function () {
    $(this).click(function () {
        $('html,body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
});

// animated image background in unity-banner
$(document).scroll(() => {
    let scroll = $(this).scrollTop();
    var position = $(".unity-banner").position();
    var top = position.top;

    $(".unity-banner").css("background-position", `50% calc(50% + ${(scroll - top) / 8}px)`);
});

// hamburger section toggle for smaller devides
$(".navbar .mobile-inner .hamburger").click(() => {

    $(".mobile-menu").toggleClass("active");

    // scroll

    if ($(".mobile-menu").hasClass("active")) {
        $("*").css("overflow", "hidden");
    } else {
        $("*").removeAttr("style");
    }
});

// theme toggle
const toggle = document.getElementById("theme-toggle");
const style_root = getComputedStyle(document.documentElement);

const storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

if (storedTheme)
    document.documentElement.setAttribute('data-theme', storedTheme);
else
    document.documentElement.setAttribute('data-theme', 'light');



toggle.addEventListener("click", () => {
    var currentTheme = document.documentElement.getAttribute("data-theme");
    var targetTheme = "light";

    if (currentTheme === "light") {
        targetTheme = "dark";
    }

    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme);
});

// navbar blur

const navbar = document.querySelector(".navbar");
const navbarLinks = document.querySelectorAll(".navbar a");
navbar.style.backgroundColor = "var(--navbar-color)";

document.addEventListener("scroll", () => {
    let color = style_root.getPropertyValue('--navbar-color').trim();
    if (window.scrollY == 0) {
        navbar.style.backgroundColor = "var(--navbar-color)";
    } else {
        navbar.style.backgroundColor = "var(--navbar-scrolled-color)";
    }
});

// slideshow

const slideshow = document.querySelector(".slideshow");
const slideshowImages = document.querySelectorAll(".slideshow img");
let currentSlide = 0;
const delay = ms => new Promise(res => setTimeout(res, ms));

setInterval(async () => {

    currentSlide++;
    slideshow.style.transition = "transform 0.5s ease-in-out";
    slideshow.style.transform = `translateX(-${currentSlide * 100}%)`;

    // if (currentSlide >= slideshowImages.length) {
    //     currentSlide = 0;
    // }
    // if (slideshow.style.transition == "none") {
    //     slideshow.style.transition = "transform 0.5s ease-in-out";
    // currentSlide = 0;
    // slideshow.style.transition = "none";
    // slideshow.style.transform = "translateX(0)";
    // }
    // else {
    // }


    /* console.log(currentSlide + " " + slideshowImages.length); */
}, 3500);

slideshow.addEventListener('transitionend', () => {
    if (currentSlide >= slideshowImages.length - 1) {
        currentSlide = 0
        slideshow.style.transition = "none";
        slideshow.style.transform = "translateX(0)";
    }
})