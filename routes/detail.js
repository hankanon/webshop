var express = require('express');
var path = require('path');
var router = express.Router();
var detailModel = require('./../module/detailModel');

/* GET home page. */
router.get('/', function(req, res) {
  console.log(req.query);
  var id =req.query.id;
  detailModel.getDetailList(id,function (data) {
    console.log(data);
    res.render('detail', data);
  });
  // var json ={
  //   "productId" : "100001",
  //   "productInfo" : "特洛克Trozk 柠萌U站智能插座 创意智能插座 USB充电 防雷防触电",
  //   "productType" : "home",
  //   "price" : 3000,
  //   "img" : [
  //     "wKgomljKDSOAQaVvAAEw38YXbyI061",
  //     "wKgomljKDSaAI8G-AAC_byQeuYk471",
  //     "wKgomljKDSmAX2DSAADgYwcspT8047",
  //     "wKgomljKDSyAC7yZAAD8_TVwRHE077"
  //   ],
  //   "productGe" : [
  //     "黑色",
  //     "白色"
  //   ],
  //   "count" : 200
  // };
  // res.sendfile(path.join(__dirname,'../public','head.html'));

});

module.exports = router;
