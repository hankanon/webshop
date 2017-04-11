var mongoose = require('./connect');
/*用户表骨架及相关用户操作*/
/*创建骨架*/
var shopcarts = new mongoose.Schema({
    username : {type:String, require:true},
    productId : {type:String, require:true},
    productInfo : {type:String,require:true},
    productGe : {type:Array,require:true},
    price:{type:Number,require:true},
    count:{type:Number,require:true},
    img:{type:String,require:true}
});
/*创建操作模型*/

var userModel = mongoose.model('shopcarts',shopcarts);

/*查询购物车*/
function findCarts(name,callback) {
    userModel.find({username:name},function (err,data) {
        if(err)
            throw err;
        callback(data)
    })
}
// findCarts('Sam',function (data) {
//     console.log(data);
// });


/*添加购物车*/
function InsertCart(obj, callback) {
    userModel.create(obj,function (err) {
        callback(!err);
    })
}
module.exports={
    findCarts:findCarts,
    InsertCart:InsertCart
};