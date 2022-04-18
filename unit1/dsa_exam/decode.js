var a="ATTTTCGGGA"

var temp=a[0]
var count=1
var max=0
for(i=0;i<a.length;i++){
  if(a[i]==temp){
    count++
  }
  else{
    temp=a[i]
    if(count>max){
      max=count
    }
    count=1

  }
}
if(count>max){
  max=count
}
console.log(max)

