function runProgram(input) {
    var input1 = input.split("\n")
    var a=Number(input1[0])
    var b = input1[1].split(" ").map(Number)
    var product = 1
    for (i = 0; i < a; i++){
        product=product*b[i]
    }
    console.log(product)
}
if (process.env.USERNAME === "lenovo") {
    runProgram("5\n3 5 2 9 4");
                      
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