var express = require('express');
var path = require('path');
var router = express.Router();
var shopcarModel = require('./../module/shopcarModel');

/* GET home page. */
router.post('/add', function(req, res) {
  console.log(req.query);
  shopcarModel.InsertCart(req.body,function (data) {
    console.log(data);
    res.status(200).json({status:true,msg:'添加成功'});
    // res.render('detail', data);
  });
});

module.exports = router;
