function runProgram(input) {
    var input1 = input.split("\n")
    var a = Number(input1[0])
  var b = input1[1].split(" ").map(Number)
  console.log(b)
  var sum = 0
  var avg=0
    for (i = 0; i <a; i++){
        sum = sum + b[i]
    }
       avg = Math.ceil(sum / a)
    console.log(avg)
    
}
if (process.env.USERNAME === "lenovo") {
    runProgram("4\n2 5 4 0 9");
                      
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