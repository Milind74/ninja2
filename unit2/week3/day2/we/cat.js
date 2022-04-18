
// //prottype is created or can say blueprint
// const cat={
//     type:'cat',
//     legs:4,
//     tail:true,
//     canfly:false,
// }
// //inheriting
// var tiger= Object.create(cat)
// tiger.name='tiger'
// var tiger= Object.create(cat)
// tiger.name='lion'
// var tiger= Object.create(cat)
// tiger.name='leopard'



function iphone13(){
    this.chips="m1"
    this.camera="48mp"
    this.network="5g"
    // this.faceid=function()
    // {
    //     console.log("yes we have that thing")

    // }
    // this.fourk=function(){
    //     console.log("has a 4k camera")
    // }
}
iphone13.prototype.faceid=function()
{
    console.log("yes we have that thing")


}
iphone13.prototype.forek=function()
{
    console.log("has a forek camera")

}
var iphone1=new iphone13()
console.log("iphone:",iphone1)

iphone1.forek()
iphone1.faceid()







// const arr= new Array(1,2,3)
// const arr2= new Array(1,2,3)
// Array.prototype.push=function(num){
//     let index=this.length
//     this[index]=num
// }
// Array.prototype.pop=function(){
//  this.pop()
//  console.log(this.length)
// }
// arr.push(4)
// arr.pop() 
62







































function Teacher (teacher,exp){
    this.t_name=teacher;
    this.exp=exp;
    
  
  }
  function Student(student,bio){
      this.s_name=student;
      this.bio=bio;
  }
  
  function Competition(event,venue){
      this.event=event;
      this.venue=venue;
  }
  
  Teacher.prototype.bio=function(){
     return (this.t_name+" "+"Have a experience of "+this.exp);
  }
  
  Student.prototype.Bio=function(){
     return (this.s_name+" "+this.bio)
  }
  
  Competition.prototype.Venue=function(){
      return (this.event+" "+this.venue)
  }
  
  var teacher1= new Teacher("V.K.Katariya",10);
  var a=teacher1.bio();
  
  console.log(teacher1);
  console.log(a)
  
  var student1= new Student("Rohan","i am a football player")
  a=student1.Bio();
  console.log(student1) 
  console.log(a)
  
  
  var competition1=new Competition("football","Banglore stadium");
  var c=competition1.Venue();
  console.log(competition1);
  console.log(c)