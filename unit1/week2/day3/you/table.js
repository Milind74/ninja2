function runProgram(input) {
    var a = Number(input)
    var mul=1
    for (i = 1; i <= 10; i++){
        mul=a*i
            console.log(a +" x "  +i + " = " +mul)
        }
    }

    
    

if (process.env.USERNAME === "lenovo") {
          runProgram("2");
                      
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