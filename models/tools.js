

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

$("#loginButton").click(function(){
    $(".modal").addClass("open");
});

$("#signupFormClick").click(function(){
    $(".modalSignup").addClass("open");
    $(".modal").removeClass("open");
});

$(".close").click(function(){
    $(".modal").removeClass("open");
    $(".modalSignup").removeClass("open");
});

$("#returnToLogin").click(function(){
    $(".modalSignup").removeClass("open");
    $(".modal").addClass("open");

});

//scroll up function
$("#backUp").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".parent, .becomeHostPage").offset().top
    }, 2000);
});

$("#plusSignSpot, #arrowDownBecomeHost").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#addSpotForm").offset().top-500
    }, 800);
    $("#becomeHostTextBelowPlus").html("List your spot.");

    $("#carBecomeHost").addClass("carVisible");
    $("#arrowDownBecomeHost").addClass("remove");

    $("#carBecomeHost").animate({ // parq logo animation
       left: '39%',
    }, 800, "swing");

     $("#addSpotForm").addClass("postAnimation");
});



// Button highlight become host select spot type
$(".spotTypeButtons").click(function(){
    $(".spotTypeButtons, .garageButton").removeClass("active");
    $(this).addClass("active");
});

// Select Amentities - Become a host page
// $("#CCTVIconImg").click(function(){
//     if($("#CCTVIconImg").attr("src") === "/Assets/BecomeHostPage/cctv@3x.svg"){
//         $("#CCTVIconImg").attr("src", "/Assets/BecomeHostPage/cctv_slt@3x.svg");
//     }else{
//         $("#CCTVIconImg").attr("src", "/Assets/BecomeHostPage/cctv@3x.svg");
//     }
// });
$(".amenityIconsImg").click(function(){
    if($(this).attr("src") === "/Assets/BecomeHostPage/cctv@3x.svg"){
        $("#CCTVIconImg").attr("src", "/Assets/BecomeHostPage/cctv_slt@3x.svg");
    }else{
        $("#CCTVIconImg").attr("src", "/Assets/BecomeHostPage/cctv@3x.svg");
    }
    if($(this).attr("src") === "/Assets/BecomeHostPage/basement@3x.svg"){
        $("#BasementIconImg").attr("src", "/Assets/BecomeHostPage/basement_slt@3x.svg");
    }else{
        $("#BasementIconImg").attr("src", "/Assets/BecomeHostPage/basement@3x.svg");
    }
    if($(this).attr("src") === "/Assets/BecomeHostPage/shelter@3x.svg"){
        $("#ShelterIconImg").attr("src", "/Assets/BecomeHostPage/shelter_slt@3x.svg");
    }else{
        $("#ShelterIconImg").attr("src", "/Assets/BecomeHostPage/shelter@3x.svg");
    }
    if($(this).attr("src") === "/Assets/BecomeHostPage/guard@3x.svg"){
        $("#GuardIconImg").attr("src", "/Assets/BecomeHostPage/guard_slt@3x.svg");
    }else{
        $("#GuardIconImg").attr("src", "/Assets/BecomeHostPage/guard@3x.svg");
    }
    if($(this).attr("src") === "/Assets/BecomeHostPage/light@3x.svg"){
        $("#LightIconImg").attr("src", "/Assets/BecomeHostPage/light_slt@3x.svg");
    }else{
        $("#LightIconImg").attr("src", "/Assets/BecomeHostPage/light@3x.svg");
    }

});


$(document).ready(function () {
    $(".logo").delay(7000).animate({ // parq logo animation
        top: '6em',
        opacity: '1',
    }, 800, "swing");
    $("#searchbarRectangle").delay(8000).animate({ // parq logo animation
        // top: '6em',
        opacity: '1',
    }, 800, "swing");
    // $(window).load(function(){
    //     $('.desktopView').show();
    // });
    if(screen.width === 768){   // ipad resizing
        $('#noQuestionMobile, #sidebarCollapse, .stepsMobile, #dismiss, .popupsMobile, #finditPopMobile').addClass('iPad');
        $('#bookitMobile, #bookitPopMobile, #parqitMobile, #becomeHostMobile, #moneyButtonMobile, #quotesHeader').addClass('iPad');
        $('.quotesDiv, #sidebarMobile, #bookitReadMobile,   #parqitReadMobile, .readMoreButtonsMobile').addClass('iPad');
        $('.loginBack, .container.loginForm, .wrapperMobile, .loginBackMobile, .signupContent').addClass('iPad');
        $('#signupFormClick2, form h1').addClass('iPad');
    }
    else{
        $('#noQuestionMobile, #sidebarCollapse, .stepsMobile, #dismiss, .popupsMobile, #finditPopMobile').removeClass('iPad');
        $('#bookitMobile, #bookitPopMobile, #parqitMobile, #becomeHostMobile, #moneyButtonMobile, #quotesHeader').removeClass('iPad');
        $('.quotesDiv, #sidebarMobile, #bookitReadMobile,   #parqitReadMobile, .readMoreButtonsMobile').removeClass('iPad');
        $('#signupFormClick2, form h1').removeClass('iPad');
    }
    if(screen.width === 375){   // iphone6 resizing
        $('.stepsMobile, span.psw, #signupFormClick2').addClass('iPhone6');
    }
    else{
        $('.stepsMobile, span.psw, #signupFormClick2').removeClass('iPhone6');
    }
    if(screen.width === 320){   // iphone5 resizing
        $('#sidebarMobile ul li a, #navBottomMobile img, #navBottomMobile p, #moneyButtonMobile, .readMoreButtonsMobile').addClass('iPhone5');
        $(' #parqItMobile, #parqitPopMobile, #parqitReadMobile, #quotesHeader').addClass('iPhone5');
        $('.modal-content,  #signupFormClick, span.psw, .formButtons, #sidebarMobile .sidebar-header #loginButton').addClass('iPhone5');
    }
    else{
        $('#sidebarMobile ul li a, #navBottomMobile img, #navBottomMobile p, #moneyButtonMobile, .readMoreButtonsMobile').removeClass('iPhone5');
        $(' #parqItMobile, #parqitPopMobile, #parqitReadMobile, #quotesHeader ').removeClass('iPhone5');
        $('.modal-content,  #signupFormClick, span.psw, .formButtons, #sidebarMobile .sidebar-header #loginButton').removeClass('iPhone5');
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

$("#sidebarCollapse, #sidebarCollapse.iPad").on('click', function () {
    $(".wrapperMobile").toggleClass("active");
});

$(".mobileParent, #rowtwoMobile, #rowthreeMobile, .loginBack, .loginBackMobile, .quotesDiv").on('click', function () {
        $(".wrapperMobile").removeClass("active");
});

// $(".mobileParent").on('click', function () {
//         $(".wrapperMobile").removeClass("active");
// });



// $('#sidebarCollapse, #sidebarCollapse.iPad').on('click', function () {
//     // open sidebar
//     $('.wrapperMobile').addClass('active');
//     // fade in the overlay
//     $('.overlay').addClass('active');
//     $('.collapse.in').toggleClass('in');
//     $('a[aria-expanded=true]').attr('aria-expanded', 'false');
//     // removing button 
//     // $('#sidebarCollapse').addClass('displayNone');
//     $('#sidebarCollapse').delay(500).queue(function(next){
//         $(this).addClass('displayNone');
//         next();
//     });
// });

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




