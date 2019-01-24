// $(function(){
//     $("img#finditPop")
//     .hide();
// });
var hover = false;
var mouse = false;
var isHovered = false;

$("img#noQuestion").hover(function(){
    mouse = false;
})

$("img#findIt").hover(function () {
    $("img#finditPop").toggleClass("reveal");
    if (hover === false) {
        hover = true;
        console.log(hover);

    }
    else {
        hover = false;
        mouse = true;
        isHovered = false;
        console.log(hover + "2" + " " + mouse);
    }
});

$("img#finditPop").hover(function () {
    if (!hover && mouse) {
        if(isHovered){
            mouse = false;
        }
        $(this).toggleClass("reveal");
        isHovered = true;
    }
});

/////////////////

$("img#bookIt").hover(function () {
    $("img#bookitPop").toggleClass("reveal");
    if (hover === false) {
        hover = true;
        console.log(hover);

    }
    else {
        hover = false;
        mouse = true;
        isHovered = false;
        console.log(hover + "2" + " " + mouse);
    }
});

$("img#bookitPop").hover(function () {
    if (!hover && mouse) {
        if(isHovered){
            mouse = false;
        }
        $(this).toggleClass("reveal");
        isHovered = true;
    }
});

//////////////
$("img#parqIt").hover(function () {
    $("img#parqitPop").toggleClass("reveal");
    if (hover === false) {
        hover = true;
        console.log(hover);

    }
    else {
        hover = false;
        mouse = true;
        isHovered = false;
        console.log(hover + "2" + " " + mouse);
    }
});

$("img#parqitPop").hover(function () {
    if (!hover && mouse) {
        if(isHovered){
            mouse = false;
        }
        $(this).toggleClass("reveal");
        isHovered = true;
    }
});

$( document ).ready(function() {
    $(".logo").delay(1000).animate({
        top: '7em',
        opacity: '1',
      }, 400, "swing");
});


