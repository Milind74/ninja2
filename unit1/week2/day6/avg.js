function runProgram(input) {
    var input1 = input.split(" ").map(Number)
    var sum = 0
    for (i = 0; i < input1.length; i++){
        sum=sum+input1[i]
    }
    avg = sum / input1.length
    console.log(Math.floor(avg))

    
}
if (process.env.USERNAME === "lenovo") {
    runProgram("3 2 3 4 5");
                      
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