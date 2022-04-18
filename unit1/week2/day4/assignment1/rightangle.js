function runProgram(input) {
  var b = Number(input[0])
  for (i = 1; i <= b; i++) {
    var result = ""
    for (j = b - i; j >= 1; j--) {
      result = result + "  "
      
    
    }
    for (k = 1; k <= i; k++) {
      result = result + "* "
    }
    console.log(result)
  }
  }
if (process.env.USERNAME === "MILIND") {
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