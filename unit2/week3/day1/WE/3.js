var person1 = {
    name:'jonny kumar',
}
const person2 = {
    name:'happy singh',
}

function createAadharId(n,a){
    this.id= Math.round(Math.random()*100000)
    this.name=n
    this.age=a

}
var x=createAadharId.bind(person1,'my name is milind',21)
x()
console.log(person1)





