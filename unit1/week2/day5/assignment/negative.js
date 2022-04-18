function runProgram(input) {
    var input1 = input.split("\n")
    var a=Number(input1[0])
    var b = input1[1].split(" ").map(Number)
    var count=0
    for (i = 0; i < a; i++){
        if (b[i] <0) {
            count++
        }
    }
    console.log(count)
 
}
if (process.env.USERNAME === "lenovo") {
    runProgram("5\n-3 0 -5 9 8");
                      
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