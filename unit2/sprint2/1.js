function runProgram(input) {
    var a = input.split("\n");
    var test=Number(a[0])
    for(t=0;t<test;t++){
        var n=Number(a[2*t+1])
        var matrix=a.slice(2*t+2).map(function(row){
            return row.split(" ").map(Number)
        })
      console.log(matrix)
    }
    
}
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
      read += input;
  });
  process.stdin.on("end", function () {
      read = read.replace(/\n$/,"")
      read = read.replace(/\n$/,"")
     runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
  });

