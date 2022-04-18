var data= [
    {name: "Nrupul", age: 32},
    {name: "Prateek" , age: 29},
    {name: "Aman" , age: 26},
    {name: "Albert" , age: 28},
    {name: "Yogesh" , age: 44},
]
var a=data.filter(function(item){
    return item.age>30
})
console.log(a)
for(i=0;i<a.length;i++){
    console.log(a[i].name)
}