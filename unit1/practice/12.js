function runProgram(input) {
    var a = input.split("\n")
    var b = Number(a[0])
    console.log(b)
    var c = a[1].split(" ").map(Number)
    console.log(c)
    
    
}
if (process.env.USERNAME === "lenovo") {
    runProgram("6\n3 2 3 4 5 4");
                      
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