function runProgram(input) {
    var a = Number(input)
    var mul = 1
    for (i = 1; i <= a; i++){
         mul=mul*i
    }
    console.log(mul)
    
}

if (process.env.USERNAME === "lenovo") {
          runProgram("5");
                      
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