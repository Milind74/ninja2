function runProgram(input) {
    var a = input.split("\n")
    var b = Number(a[0])
    var c = a[1].split(" ").map(Number)
    for (i = 0; i < a; i++){
        for(j=)
    }
    
}
if (process.env.USERNAME === "lenovo") {
    runProgram("5\n24 83 89 43 91");
                      
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