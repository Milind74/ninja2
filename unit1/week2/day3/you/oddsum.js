function runProgram(input) {
    var a = Number(input)
    var sum=0
    
    for (i = 0; i <= a; i++){
        if (i % 2 !== 0) {
           sum = sum + i
        }
      }
        console.log(sum)
    }

if (process.env.USERNAME === "lenovo") {
          runProgram("7");
                      
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