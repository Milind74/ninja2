function runProgram(input) {
  
  var a = Number(input)
  var k=1
  for (i = 1; i <= a; i++) {
    var res = ""

    for (j = 1; j <= a; j++) {
      res = res + k++ +" "
     

    }
    console.log(res)

  }
     
    
}

  
if (process.env.USERNAME === "lenovo") {
      runProgram("4");
                  
    } else {
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
  }