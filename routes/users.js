var express = require('express');
var router = express.Router();
var userModel = require('./../module/userModel');

/* GET users listing. */
router.post('/login', function(req, res, next) {
  console.log(req.body);
  // console.log(1);
  if (req.session.sign) {//检查用户是否已经登录
     console.log(req.session);//打印session的值
     res.status(200).json({status:false,msg:'用户已经登录'});
  } else {
    userModel.UserLogin(req.body,function (data) {
      console.log(data);
      if(data){
        req.session.sign = true;
        req.session.name = req.body.username;
        res.status(200).json({status:true,msg:'登录成功'});
      }else {
        res.status(200).json({status:false,msg:'密码错误'});
      }
    });

  }
  // res.send('respond with a resource');
});

router.post('/check/username', function(req, res, next) {

  if (req.session.sign) {//检查用户是否已经登录
    console.log(req.session);//打印session的值
    res.status(200).json({status:true,msg:'用户已经登录',name:req.session.name});
  }else {
    res.status(200).json({status:false,msg:'用户未登录'});
  }

  // res.send('respond with a resource');
});

router.post('/register', function(req, res, next) {
  // res.send('respond with a resource');
  userModel.UserRegister(req.body,function (flag) {
    if(flag){
      res.status(200).json({status:true,true:'注册成功'});
    }else {
      res.status(200).json({status:false,msg:'注册失败'});
    }
  })
});

router.post('/exit',function (req, res) {
  // 消除session
  req.session.destroy();
  res.status(200).json({status:true,msg:'注销成功'});
});

module.exports = router;
