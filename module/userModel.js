var mongoose = require('./connect');
/*用户表骨架及相关用户操作*/
/*创建骨架*/
var users = new mongoose.Schema({
    username : {type:String, require:true},
    password : {type:String, require:true},
    phone : {type:String,require:true},
    status : {type:String}
});
/*创建操作模型*/

var userModel = mongoose.model('users',users);

/*查询用户名*/
function findUserName(name,callback) {
    userModel.findOne({username:name},function (err,data) {
        if(err)
            throw err;
        callback(data)
    })
}

/*用户注册*/
function UserRegister(obj, callback) {
    userModel.create(obj,function (err) {
        callback(!err);
    })
}

/*用户登录*/
function UserLogin(obj, callback) {
    userModel.findOne(obj,function (err, data) {
        callback(data);
    })
}

/*用户注销*/
function UserExit(obj, callback) {

}

module.exports={
    findUserName:findUserName,
    UserRegister:UserRegister,
    UserLogin:UserLogin,
    UserExit:UserExit
};