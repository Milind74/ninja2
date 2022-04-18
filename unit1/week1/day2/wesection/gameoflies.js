var a=(true && false && !true) || false
//true and false=true !true is false and false and false false so true and false is false
console.log(a)
var b=true || !false && true || false
console.log(b)
var c=false || true && false || true 
console.log(c)
var d=true || (false && true || true)
console.log(d)
