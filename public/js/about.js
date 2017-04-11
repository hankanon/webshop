/**
 * Created by Administrator on 2017/3/24.
 */
//$(function(){
//    var $lis = $('.aboutLunBo ul li');
//    var $len = $lis.length;
//    var index = 0;
//    var timer = null;
//    $('.aboutLbImg img:gt(0)').hide();
//
//    $lis.click(function(){
//        index = $lis.index(this);
//        showImg(index);
//    }).eq(0).click();
//
//    $('.aboutLunBo .left').click(function(){
//        clearInterval(timer);
//        timer=null
//        if(index > 0){
//            index --;
//        }else{
//            index=$len-1;
//        }
//        showImg(index);
//        //console.log(index);
//
//    });
//    $('.aboutLunBo .right').click(function(){
//        clearInterval(timer);
//        timer=null;
//        if(index == $len-1){
//            index = 0;
//        }else{
//            index++;
//        }
//        showImg(index);
//        //console.log(index);
//
//    });
//
//
//
//    $('.aboutLunBo').hover(function(){
//        if(timer){
//            clearInterval(timer);
//            timer=null;
//        }
//    },function(){
//        timer = setInterval(function(){
//            showImg(index);
//            index++;
//            if(index == $len){
//                index = 0;
//            }
//        },2000);
//    }).trigger('mouseleave');
//
//});
//
//function showImg(index){
//    console.log(index);
//    $(".aboutLbImg a img").hide().stop(true,true).eq(index).show();
//    //.stop(true,true).siblings().hide()
//    //$(".aboutLbImg a img").eq(index).show();
//    $('.aboutLunBo').find('ul li').eq(index).stop(true,true).addClass('active').siblings().removeClass('active');
//}
$(function(){
    //var classname = $("#test").attr("test");

    var mySwiper = new Swiper ('.swiper-container', {
        //direction: 'vertical',
        loop: true,
        // 如果需要分页器
        pagination: '.swiper-pagination',


        paginationClickable :true,
        // 如果需要前进后退按钮
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        //滑动速度
        autoplay : 2000,
        speed:1000,
        //用户操作swiper之后，是否禁止autoplay。默认为true：停止
        autoplayDisableOnInteraction : false,
        effect : 'fade',
        fade: {
            crossFade: false
        }

    });
    $('.aboutLunBo').hover(function(){
        mySwiper.stopAutoplay();
    },function(){
        mySwiper.startAutoplay();
    })
});


