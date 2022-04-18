var student={
    marks:[
        {name:"Nrupul",mks:20},
        {name:"Prateek",mks:25},
        {name:"Albert",mks:30},
        {name:"yogesh",mks:15}
    ],
    avg:function(){
        var sum=0
        sum=this.marks[0].mks+this.marks[1].mks+this.marks[2].mks
        console.log(sum/2)
    },
    minimum:function(){
      var low=this.marks[0].mks
     for(i=0;i<this.marks.length;i++){
        if(this.marks[i].mks<low){
        low=this.marks[i].mks
        }

    }
    return low

},
maximum:function(){
    var max=this.marks[0].mks
    for(i=0;i<this.marks.length;i++){
      if(this.marks[i].mks>max){
      max=this.marks[i].mks
      }
  }
  return max
}
}
console.log("low="+student.minimum())
console.log("high="+student.maximum())
student.maximum()

student.avg()