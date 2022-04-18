function runProgram(input){
    var a=input.split("\n")
    var test=Number(a[0])
    for(t=0;t<test;t++){
        var arr1=a[t*2+1].split(" ").map(Number)
        var arr2=a[t*2+2].split(" ").map(Number)
        var n=arr1[0]
        var tar=arr1[1]
var i=0
var j=0     
var count=0
for(i=0;i<n;i++){
    for(j=i+1;j<n;j++){
        if(arr2[i]+arr2[j]==tar){
            count++
            break;
        }
    }
    if(count==1){
        console.log(i,j)
        break
    }
}
if(count==0){
    console.log("-1"+" "+"1")


}


}

    }
    
      process.stdin.resume();
      process.stdin.setEncoding("ascii");
      let read = "";
      process.stdin.on("data", function (input) {
        read += input;
      });
      process.stdin.on("end", function () {
        read = read.replace(/\n$/, "");
        read = read.replace(/\n$/, "");
        runProgram(read);
      });
      process.on("SIGINT", function () {
        read = read.replace(/\n$/, "");
        runProgram(read);
        process.exit(0);
      });
  
    
  
var main_obj = {
    a:2,
    b:3,
    c:{
        x:7,
        y:4,
    },
}

function copy(main_obj){
    var copy_obj ={}
    for (key in main_obj)
    {
        copy_obj[key]=main_obj[key]
    }
   
   return copy_obj;
}
console.log(copy(main_obj));

var new_obj = copy(main_obj)
   new_obj.a=5;
   console.log(new_obj)
//    console.log(copy(main_obj));