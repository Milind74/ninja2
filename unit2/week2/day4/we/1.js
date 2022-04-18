var str="masai"
var arr=str.split("")
// console.log(arr)
var i=Math.floor(Math.random()*str.length)
// console.log(i)
function test(x){
    x[i]='changed'
    return x
}
var x=test(arr)
//if we put var x=test(str) output will be only masai there will not be random change 
console.log("x:",x)


