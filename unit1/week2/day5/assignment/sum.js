function runProgram(input) {
    var input1 = input.split("\n")
    var a=Number(input1[0])
    var b = input1[1].split(" ").map(Number)
    var sum = 0
    for (i = 0; i < a; i++){
        sum=sum+b[i]
    }
    if (sum > 100) {
            console.log("Greater")

    }
    else {
            console.log("Lesser")

    }
}
if (process.env.USERNAME === "lenovo") {
    runProgram("5\n21 24 2 54 8");
                      
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