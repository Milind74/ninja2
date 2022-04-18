function runProgram(input) {
    var input1 = input.split(" ").map(Number)
    var sum = 0
    for (var i = 0; i < input1.length; i++){
        sum=sum+input1[i]
    }
    var n = input1.length + 1
    var totalsum = (n * (n + 1)) / 2
    var result = totalsum - sum
    console.log(result)
 
}
if (process.env.USERNAME === "lenovo") {
    runProgram("4 5 1 3");
                      
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