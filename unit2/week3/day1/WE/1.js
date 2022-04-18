// //creating object using function
// function product(n,p){
//     var obj={}
//     obj.name=n
//     obj.price=p

//     return obj
// }
// var product1=product('shoes','2300')
// var product2=product('football','1000')
// console.log(product1,product2)

//using this keyword  rewrite this code

// function product(n,p){
//     var obj={}
//     this.name=n
//     this.price=p

//     return obj
// }
// var product1= product('shoes','2300')
// var product2=product('football','1000')
// console.log(product1,product2)

//new keyword

function product(n,p){
    this.name=n
    this.price=p
}
var product1= new product('shoes','2300')//this will reffer to product1
var product2= new product('football','1000')//this will reffer to product2
console.log(product1,product2)









