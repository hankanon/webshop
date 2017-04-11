var mongoose = require('./connect');
/*产品信息骨架及相关用户操作*/
/*创建骨架*/
var detaillists = new mongoose.Schema({
    productId : {type:String, require:true},
    productInfo : {type:String,require:true},
    productType : {type:String},
    price:{type:Number,require:true},
    img:{type:Array,require:true},
    productGe : {type:Array,require:true},
    count : {type:Number,require:true}
});
/*创建操作模型*/

var userModel = mongoose.model('detaillists',detaillists);

/*查询商品详细信息*/
function getDetailList(id,callback) {
    userModel.findOne({productId:id},function (err,data) {
        if(err)
            throw err;
        callback(data)
    })
}

module.exports={
    getDetailList:getDetailList

};