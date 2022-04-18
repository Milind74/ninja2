function runProgram(input) {
  var a=input.split("\n")
  var n=Number(a[0])
  var arr=a[1]
  var res=""
for(i=0;i<=n;i=i+2){
  res=res+arr[i]
}
var res2=""
for(i=res.length-1;i>=0;i--)
  res2=res2+res[i]
if(res==res2){
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