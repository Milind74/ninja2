function runProgram(input) {
    var n = Number(input[0])
    for (i = 1; i <=n; i++) {
        var r = ""
        for (j = 1; j <=n ; j++) {
            if (j == 1||j==n||i==n) {
                r=r+"*"+" "
            }
            else {
                r=r+"  "
            }
            
        }
        console.log(r)
    }
}
if (process.env.USERNAME === "MILIND") {
    runProgram("6");
                      
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