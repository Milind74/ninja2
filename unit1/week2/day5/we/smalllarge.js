function runProgram(input) {
    var input1 = input.split("\n")
    var a=Number(input1[0])
    var b = input1[1].split(" ").map(Number)
    var large = b[0]
    var small=b[0]
    for (i = 1; i < a; i++) {
        if (b[i] > large) {
            large = b[i]
        }
        if (b[i] < small) {
            small=b[i]
        }
    }
    
    console.log(small)
    console.log(large)       
    
 
}
if (process.env.USERNAME === "lenovo") {
    runProgram("4\n-2 0 8 4");
                      
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