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
    $(".logo").delay(1000).animate({
        top: '7em',
        opacity: '1',
    }, 500, "swing");
});


