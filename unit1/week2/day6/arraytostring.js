function runProgram(input) {
    var a=input.split("\n")
    var b = a[0].split(" ").map(Number)
    var c = a[1].split(" ").map(Number)
  var res=""
  for (i = 0; i < b; i++) {
    if (c[i] < 0) {
      res = res + "0"
    }
    else {
      res = res+c[i]
        
    }
        
  }
    console.log(res)
}
if (process.env.USERNAME === "lenovo") {
    runProgram("5\n2 -4 6 8 -9");
                      
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