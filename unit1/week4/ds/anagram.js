function runProgram(input) {
var input1=input.split("\n")
var a=input1[0]
var g=a.replace(/\s/g,"")
var d=g.split("")
d.sort()
var b=input1[1]
var c=b.replace(/\s/g,"")
var e=c.split("")
e.sort()

var count=0
for(i=0;i<d.length;i++){
if(d[i]!=e[i]){
  count++
}
}
if(count>0){
  console.log("False")
}
else{
  console.log("True")
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
