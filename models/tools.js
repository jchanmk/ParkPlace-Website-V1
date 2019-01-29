$("img#findIt").hover(function () {
    $("img#finditPop, #finditRead").toggleClass("reveal");
});

$("img#finditPop, #finditRead").hover(function () {
    $("#finditPop, #finditRead").toggleClass("reveal");
});
/////////////////
$("img#bookIt").hover(function () {
    $("img#bookitPop, #bookitRead").toggleClass("reveal");
});
$("img#bookitPop, #bookitRead").hover(function () {
        $("img#bookitPop, #bookitRead").toggleClass("reveal");
});

//////////////
$("img#parqIt").hover(function () {
    $("img#parqitPop, #parqitRead").toggleClass("reveal");
});
$("img#parqitPop, #parqitRead").hover(function () {
        $("img#parqitPop, #parqitRead").toggleClass("reveal");
});


$(document).ready(function () {
    $(".logo").delay(1000).animate({ // parq logo animation
        top: '7em',
        opacity: '1',
    }, 500, "swing");
    if(screen.width === 768){   // ipad resizing
        $('#noQuestionMobile, #sidebarCollapse, .stepsMobile, #dismiss, .popupsMobile, #finditPopMobile').addClass('iPad');
        $('#bookitMobile, #bookitPopMobile, #parqitMobile, #becomeHostMobile, #moneyButtonMobile, #quotesHeader').addClass('iPad');
        $('.quotesDiv, #sidebarMobile, #bookitReadMobile,   #parqitReadMobile, .readMoreButtonsMobile').addClass('iPad');
    }
    else{
        $('#noQuestionMobile, #sidebarCollapse, .stepsMobile, #dismiss, .popupsMobile, #finditPopMobile').removeClass('iPad');
        $('#bookitMobile, #bookitPopMobile, #parqitMobile, #becomeHostMobile, #moneyButtonMobile, #quotesHeader').removeClass('iPad');
        $('.quotesDiv, #sidebarMobile, #bookitReadMobile,   #parqitReadMobile, .readMoreButtonsMobile').removeClass('iPad');
    }
    if(screen.width === 375){   // iphone6 resizing
        $('.stepsMobile').addClass('iPhone6');
    }
    else{
        $('.stepsMobile').removeClass('iPhone6');
    }
    if(screen.width === 320){   // iphone5 resizing
        $('#sidebarMobile ul li a, #navBottomMobile img, #navBottomMobile p').addClass('iPhone5');
    }
    else{
        $('#sidebarMobile ul li a, #navBottomMobile img, #navBottomMobile p').removeClass('iPhone5');
    }
    
});
/////// Mobile  ////////////
$('#dismiss, .overlay').on('click', function () {
    // hide sidebar
    $('.wrapperMobile').removeClass('active');
    // hide overlay
    $('.overlay').removeClass('active');
    // adding button
    $('#sidebarCollapse').removeClass('displayNone');
});

$('#sidebarCollapse, #sidebarCollapse.iPad').on('click', function () {
    // open sidebar
    $('.wrapperMobile').addClass('active');
    // fade in the overlay
    $('.overlay').addClass('active');
    $('.collapse.in').toggleClass('in');
    $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    // removing button 
    // $('#sidebarCollapse').addClass('displayNone');
    $('#sidebarCollapse').delay(500).queue(function(next){
        $(this).addClass('displayNone');
        next();
    });
});

$("img#findItMobile").hover(function () {
    $("img#finditPopMobile, #finditReadMobile").toggleClass("reveal");
});

// $("img#finditPopMobile, #finditReadMobile").click(function () {
//     $("#finditPopMobile, #finditReadMobile").toggleClass("reveal");
// });
/////////////////
$("img#bookItMobile").hover(function () {
    $("img#bookitPopMobile, #bookitReadMobile").toggleClass("reveal");
});
// $("img#bookitPopMobile, #bookitReadMobile").click(function () {
//         $("img#bookitPopMobile, #bookitReadMobile").toggleClass("reveal");
// });

//////////////
$("img#parqItMobile").hover(function () {
    $("img#parqitPopMobile, #parqitReadMobile").toggleClass("reveal");
});
// $("img#parqitPopMobile, #parqitReadMobile").click(function () {
//         $("img#parqitPopMobile, #parqitReadMobile").toggleClass("reveal");
// });




