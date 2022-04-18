function runProgram(input) {
  var a=input.split("\n")
  var n=Number(a[0])
  var arr=a[1]
  var res1=""
  var res11=""
  for(i=0;i<n/2;i++){
    res11=res11+arr[i]
 }
console.log(res11)
for(i=((n/2)-1);i>=0;i--){
res1=res1+arr[i]
}
console.log(res1)

var res12=""
for(i=n/2;i<n;i++){
  res12=res12+arr[i]

}
console.log(res12)
var res2=""   
for(j=n-1;j>=n/2;j--){
  res2=res2+arr[j]
}
console.log(res2)
if(res11==res1&& res12==res2){
  console.log("yes")

}
else{
  console.log("no")
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
  