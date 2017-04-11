var express = require('express');
var path = require('path');
var router = express.Router();
var productModel = require('./../module/productModel');

router.get('/', function(req, res) {
  res.sendfile(path.join(__dirname,'../public','shop.html'));
});

router.post('/all', function(req, res) {
  productModel.getList(function (data) {
    console.log(data);
    // res.render('detail', data);
    if(data){
      res.status(200).json({status:true,msg:"数据获取成功",data:data})
    }else {
      res.status(200).json({status:false,msg:"数据请求失败"})
    }
  });
});
router.get('/page', function(req, res) {
  var rows;
  var pages;
  productModel.getList(function (data) {
    console.log(data);
    res.render('detail', data);
  });
});



module.exports = router;
