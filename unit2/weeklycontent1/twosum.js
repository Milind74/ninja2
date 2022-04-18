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
for(var i=0;i<n;i++)
{
  for(var j=i+1;j<n;j++){

  
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
    console.log("-1"+" "+"-1")
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
  
    
  