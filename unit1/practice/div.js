function runProgram(input) {

    if (input == 0) {
        console.log("-1")
    }
    else {
        if (Math.floor(32 / input) == 0) {
            console.log("Too Low")
        }
        else
            
            console.log(Math.floor(32 / input))
    }
   
}
  
  if (process.env.USERNAME === "lenovo") {
    runProgram("-1");
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