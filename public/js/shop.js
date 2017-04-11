//$('.j_nav').on('hover','.categoryContent',
////},);
//$(".j_nav").hover(function(){
//    var num =$(this).data("numb");
//    console.log(num);
//    num= "."+num;
//    $(".secondCategory").css("display","block");
//    $(num).css("display","block");
//
//    console.log($(num));
//    },function(){
//        var num =$(this).data("numb");
//        console.log(num);
//        num= "."+num;
//        $(".secondCategory").css("display","none");
//        $(num).css("display","none");
//
//        console.log($(num));
//    }
//)
//$('.j_nav').on('mouseout','.categoryContent',function(){
//
//});

//$('.categoryContent').on('mouseover',function(){
//    var num =$(this).data("numb");
//    console.log(num);
//    $(".secondCategory").css("display","block");
//    $(".secondCategory [class='+num+']").css("display","block");
//
//});
//$('.shopheader').on('mouseout',function(){
//    console.log('out');
//    $(".secondCategory").css("display","none");
//
//    //var num =$(this).data("numb");
//    //console.log(num);
//    //$(".secondCategory [class='+num+']").attr("display","block");
//});


$(".categoryContent").mousemove(function () {
    //console.log("in");
    var tmp = $(this).data('numb');
    console.log(tmp);
    $(".drop-box").show();
    $(".categoryDetail").removeClass("show").addClass("hide");
    $("[name="+tmp+"]").removeClass("hide").addClass('show');
});

$(".shopheader").mouseleave(function () {
    //console.log(out);
    $(".drop-box").hide();
});

