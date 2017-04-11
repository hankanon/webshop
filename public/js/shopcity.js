$(".categoryContent").mousemove(function () {
    var tmp = $(this).data('numb');
    $(".drop-box").show();
    $(".categoryDetail").removeClass("show").addClass("hide");
    $("[name="+tmp+"]").removeClass("hide").addClass('show');
});

$(".j_nav_box").mouseleave(function () {
    console.log(0);
    $(".drop-box").hide();

});

