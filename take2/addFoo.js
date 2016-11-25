Array.prototype.addFoo = function(){
  debugger;
  this.push('foo');
};

(function(){
  var test = ['abc', 1234];

  test.addFoo();
  console.log(test)
})()