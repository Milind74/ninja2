function runProgram(input) {
    var a=input.split("\n")
var n=a[0].split(" ").map(Number)
var row=n[0]
var col=n[1]
var s=n[2]
var matrix=a.slice(1).map(function(r){
    return r.split(" ").map(Number)
})
var sum1=0
var sum2=0
var sum3=0
var sum4=0
var count=0
for(i=0;i<row;i++){
for(j=0;j<col;j++){
if(i+2<row){
sum1=matrix[i][j]+matrix[i+1][j]+matrix[i+2][j]
if(sum1==s){
    count++
}
}
if(j+2<col){
    sum2=matrix[i][j]+matrix[i][j+1]+matrix[i][j+2]
if(sum2==s){
    count++
}
}
if(i+2<row &&j+2<col){
    sum3=matrix[i][j]+matrix[i+1][j+1]+matrix[i+2][j+2]
if(sum3==s){
    count++
}
}
if(i>1&&j+2<col){
    sum4=matrix[i][j]+matrix[i-1][j+1]+matrix[i-2][j+2]
if(sum4==s){
    count++
}
}
}
}
console.log(count)
  
  
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
    