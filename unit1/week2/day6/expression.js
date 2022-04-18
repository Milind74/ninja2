function runProgram(input) {
    var a = input.split(" ").map(Number)
    var value = 0
    value = (a[0] + a[1]) * (a[2] + a[3] + a[4])
    console.log(value)
    
}
if (process.env.USERNAME === "lenovo") {
    runProgram("3 2 3 4 5");
                      
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