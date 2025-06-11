$(document).ready(function(){
    $('.main>li').mouseover(function(){
        $(this).find('.sub').stop().slidedown();
    });
    $('.main>li').mouseout(function(){
        $(this).find('.sub').stop().slideup();
    });
});