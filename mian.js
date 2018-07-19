Function.prototype.bind = function(){
  var self = this;  //this => function
  var context = [].shift.call(arguments);    //arguments 第一个参数为需要绑定的this上下文
  var args = [].slice.call(arguments);      //arguments 除第一个参数外为传入的参数
  return function (){
     self.apply(context,[].contact.call(args,[].slice.call(arguments))) //合并2个数组的参数
  }
}

var obj = {
  name : 'ytchen1987'
}
var func = function(a,b,c,d){
 console.log(this.name);   // ytchen1987
 console.log([a,b,c,d])    // [1,2,3,4]
}.bind(obj,1,2)(3,4)
