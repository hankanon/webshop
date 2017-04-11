$(function () {
    var tmphref=location.href;
   $('.j_register').on('click',function () {
       $('.login-screen').removeClass('show').addClass('hide');
       $('.register-screen').removeClass('hide').addClass('show');
   });
    $('.j_login').on('click',function () {
        $('.register-screen').removeClass('show').addClass('hide');
        $('.login-screen').removeClass('hide').addClass('show');
    });
    $(".j_exit").on('click',function () {
        $('.screen').removeClass('show-screen').addClass('hide-screen');
    });
    $('.j_showScreen').on('click',function () {
        $('.screen').removeClass('hide').removeClass('hide-screen').addClass('show-screen');

        // $('.screen').addClass('show-screen');
    });
    $('.j_btn_login').on('click',function () {
        // alert(1)
        var uname = $(".j_uname").val();
        var pwd = $(".j_pwd").val();
        var user={
            username:uname,
            password:pwd
        };
        if(uname =='' || pwd ==''){
            alert("用户名或密码不能为空");
            return false;
        }
        // console.log(user);
        $.ajax({
            url:'/users/login',
            type:'post',
            data:user,
            dataType:'json',
            success:function (data) {
                console.log(data);
                if(data.status){
                    // location.href=tmphref;
                    $('.screen').removeClass('show-screen').addClass('hide-screen');
                }else {
                    alert(data.msg);
                }
            },
            error:function () {
                alert("登录失败");
            }
        });
        return false;
    });

    /*j_btn-register*/
    $('.j_btn_register').on('click',function () {
        var uname = $(".j_register_name").val();
        var pwd = $(".j_register_pwd").val();
        var repwd = $(".j_register_repwd").val();
        var tel = $(".j_register_tel").val();
        if(uname =='' || pwd ==''){
            alert("用户名或密码不能为空");
            return false;
        }
        if(pwd != repwd){
            alert("两次密码不一样");
            return false;
        }
        var user={
            username:uname,
            password:pwd,
            phone:tel
        };
        $.ajax({
            url:'/users/register',
            type:'post',
            data:user,
            dataType:'json',
            success:function (data) {
                if(data.status){
                    $('.screen').removeClass('show-screen').addClass('hide-screen');
                }
                console.log(data);
            },
            error:function () {
                alert("登录失败");
            }
        });
        return false;
    });

    $(".j_tuichu").on('click',function () {
        $.ajax({
            url:'/users/exit',
            type:'post',
            dataType:'json',
            success:function (data) {
                if(data.status){
                   alert(data.msg);
                }
                // console.log(data);
            },
            error:function () {
                alert("登录失败");
            }
        });
        return false;
    })

});