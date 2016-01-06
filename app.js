/**
 * Created by lcc on 16/1/6.
 */
function test(){
    alert(2);
    return "me test";
}
Function.prototype.before=function(fn){
    var __self=this;
    fn();
    __self.apply(this,arguments);
};
Function.prototype.after=function(fn){
    var __self=this;
    __self.apply(this,arguments);
    fn();
};
//默认函数被执行了2次
test.before(function(){
    alert(3);
});
test.before(function(){
    alert(1);
});