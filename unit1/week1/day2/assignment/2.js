var a=true||false  || false &&  false
console.log("Not Possible"+a)    //false

var b=  true|| true && false ||  true
      console.log(b) //

var c=false || true || false||    false && true
console.log("Not Possible")//false 

var d=false && true ||  true|| true && false
console.log(d)  //true=false||true&&false

var e=false ||false  ||false  && true || false
console.log(e)//false=  falsefalse&&true

//fun
var f=false && true != true|| (true && false)
//        false&&false||false
// false||false=false
console.log("f="+f)
var g=false != true && (true!= true) && true
//  true&&false&&true=false

















var a=true || true || false && false
var b=true || true && false ||  true
var c=false || true || false || false && true
var d=false && true || true || false && false
var e=false || false || false && true || false


console.log("a=impossible")//false
console.log(b)//true
console.log("c=impossible")//false
console.log(d)//true
console.log(e)//false