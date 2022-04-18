function runProgram(input){
 var a= input.split("\n");
 var t=a[0].split(" ").map(Number)
 var r1=t[0]
 var c1=t[1]
var mat=a.slice(1,r1+1).map(function(row){
  return row.split(" ").map(Number)
})
for(i=0;i<r1;i++){
  var res=""
  for(j=0;j<c1;j++)
  res+=mat[i][j]+" "
  console.log(res)
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

  