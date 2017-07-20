function dummyClass(){
  this.a=5
  this.b=10
}

dummyClass.prototype.dummyfn = function(param){
  this.a += param
}
dummyClass.prototype.dummyfn2 = function(param){
  this.b += param
}

module.exports = dummyClass
