var mongoose = require('./connect');
/*用户表骨架及相关用户操作*/
/*创建骨架*/
var products = new mongoose.Schema({
    productId : {type:String, require:true},
    productInfo : {type:String,require:true},
    img:{type:Array,require:true},
    price:{type:Number,require:true},
    productType : {type:String},
    productHot : {type:Number},
    productNew : {type:String}
});
/*创建操作模型*/

var userModel = mongoose.model('products',products);

/*查询商品信息*/
function getList(callback) {
    var query= userModel.find({},['productId','productInfo','img','price']);
    query.limit(12);
    query.exec(function (err, res) {
        if(err)
            throw err;
        callback(res);
    });
}
function getPageList(pages,rows,callback){
    var query = userModel.find({});
    query.skip(12*pages);
    query.limit(rows);
    query.exec(function (err, res) {
        if(err)
            throw err;
        callback(res);
    });
}
// getPageList(1,12,function (data) {
//     console.log(data)
// });
// getList(function (data) {
//     console.log(data);
// });

module.exports={
    getList:getList,
    getPageList:getPageList
};
