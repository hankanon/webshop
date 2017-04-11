$(function () {
   $(".j_del").on('click',function () {
       var num =$(".j_sel_num").val();
       num = +num;
       num--;
       if(num<1){
           num=1
       }
       $(".j_sel_num").val(num);
   });
    $(".j_add").on('click',function () {
        var num =$(".j_sel_num").val();
        num = +num;
        num++;
        $(".j_sel_num").val(num);
    });
    $("#select").on('change',function () {
        // console.log();
        $(".j_color").html($(this).val())
    });
    $("#j_imgmore").on('click','img',function () {
        // console.log($(this));
        $(this).addClass('active').siblings().removeClass('active');
        $('#j_img').attr('src',$(this).attr('src'));
    });
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: 5000,//可选选项，自动滑动
    });

    /*添加入购物车*/
    $("#j_addtocart").on('click',function () {
        var productId = $("#j_img").data('id');
        var productInfo = $(".j_productInfo").html();
        var productGe = $("#select").val();
        var price = $(".j_price").data('price');
        var count = $(".j_sel_num").val();
        var img = $("#j_img").data('img');
        var obj={
            productId:productId,
            productInfo:productInfo,
            productGe:productGe,
            price:price,
            count:count,
            img:img
        };
        console.log(obj);
        /*判断是否登录*/
        $.ajax({
            url:'users/check/username',
            type:'post',
            dataType:'json',
            success:function (data) {
                console.log(data);
                if(data.status){
                    obj.username = data.name;
                    console.log(obj);
                    /*添加数据库*/
                    $.ajax({
                        url:'shop/add',
                        type:'post',
                        data:obj,
                        dataType:'json',
                        success:function (data) {
                            if(data.status){
                                alert(data.msg);
                            }
                        },
                        error:function () {
                            alert("添加失败");
                        }
                    })
                }else {
                    $('.screen').removeClass('hide').removeClass('hide-screen').addClass('show-screen');
                }
            }
        });


    })

});