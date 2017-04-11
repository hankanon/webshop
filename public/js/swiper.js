/**
 * Created by Administrator on 2017/3/27.
 */
$(document).ready(function () {
    //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {
        //direction: 'horizontal',
        speed:1000,
        autoplay:3000,
        loop: true,
        prevButton:'.swiper-button-prev',
        nextButton:'.swiper-button-next',
    })
});