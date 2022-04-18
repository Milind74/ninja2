function runProgram(input) {
    var a = input.split(" ").map(Number)
    var val=a[0]+a[1]*2+a[2]*3+a[3]*3+a[4]*2+a[5]*2
console.log(val)
}
if (process.env.USERNAME === "lenovo") {
    runProgram("1 2 3 4 5 6");
                      
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