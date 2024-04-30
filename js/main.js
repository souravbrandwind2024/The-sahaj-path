$( document ).ready(function() {

       // Menu-on-hover-area-start //
       $('body').on('mouseenter mouseleave', '.nav-item', function (e) {
        if ($(window).width() > 750) {
            var _d = $(e.target).closest('.nav-item');
            _d.addClass('show');
            setTimeout(function () {
                _d[_d.is(':hover') ? 'addClass' : 'removeClass']('show');
            }, 1);
        }
    });

 // Menu-on-hover-area-end //

 // Dropdown-area-start //
    $('.dropdown-menu a.dropdown-toggle').click(function (e) {
        if (!$(this).next().hasClass('show')) {
            $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
        }
        var $subMenu = $(this).next(".dropdown-menu");
        $subMenu.toggleClass('show');


        $(this).parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function (e) {
            $('.dropdown-submenu .show').removeClass("show");
        });
        return false;
    });
// Dropdown-area-end //

// home-page-search-area-start //
// $('.search-icon').on('click', function() {
//     $('.searchNlogin').toggleClass("expanded");
// });
// home-page-search-area-end //


// tooltip-area-start //
$("[data-toggle=tooltip]").tooltip();
// tooltip-area-end //


// home-pagemain-banner-area-start //
$('.main-slider ').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    smartSpeed: 2400,
    dotsSpeed: 2500,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }   
    }
});
// home-pagemain-banner-area-end //

// scroll-to-top-area-start //
var scrollTop = $(".scrollTop");
$(window).scroll(function () {
$(this).scrollTop() > 100 ? $(scrollTop).css("opacity", "1") : $(scrollTop).css("opacity", "0")
  }),
$(scrollTop).click(function () {
return $("html, body").animate({
  scrollTop: 0
   }, 800),
  !1
});
// scroll-to-top-area-end //

// footer-bottom-year-area-start //
const yearEl = document.querySelector('.year');
let date = new Date();

yearEl.innerText = date.getFullYear();
// footer-bottom-year-area-end //

 // perfect-scrollbar-area-start //
 new PerfectScrollbar('.right-stories-scroll-area');
 new PerfectScrollbar('.right-stories-scroll-area-second');
 new PerfectScrollbar('.right-stories-scroll-area-fashion-left');
 new PerfectScrollbar('.right-stories-scroll-area-fashion-right');

 new PerfectScrollbar('.right-stories-scroll-area-health-left');
 new PerfectScrollbar('.right-stories-scroll-area-health-right');

 new PerfectScrollbar('.right-stories-scroll-area-travel-left');
 new PerfectScrollbar('.right-stories-scroll-area-travel-right');

 new PerfectScrollbar('.right-stories-scroll-area-gadget-left');
 new PerfectScrollbar('.right-stories-scroll-area-gadget-right');

 new PerfectScrollbar('.internationalscroll-area');

// perfect-scrollbar-area-end //

    // loader
    $(window).on('load', function (e) {
        $("#loading").delay(300).fadeOut("slow"); // will fade out the white DIV that covers the website.
    })
    // loader

    // editors-pick-area-start //
    $('.editors-news').owlCarousel({
        loop:true,
        margin:12,
        nav:true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        smartSpeed: 2400,
        dotsSpeed: 2500,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }   
        }
    });
// editors-pick-area-end //






});



// top-stories-area-start //
(function() {
    var datetime = null,
    date = null;
    var update = function() {
        date = moment(new Date())
        datetime.html(date.format('dddd, MMMM D,  YYYY'));
    };
    datetime = $('#date-time')
    update();
    setInterval(update, 1000);

}());

// top-stories-area-end //




// total-visitors-counter-area-start //
$( document ).ready(function() {
    $(".number").counterUp({time:5000});
});
// total-visitors-counter-area-end //