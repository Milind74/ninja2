function runProgram(input) {
    var n = Number(input[0])
    for (i = 1; i <=n; i++) {
        var result = ""
        for (j = 1; j <= n; j++) {
            if (i == 1 || i == n || j == 1 | j == n) {
                result = result + "* "
            }
            else {
            result=result+"  "
            }
        }
        console.log(result)
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