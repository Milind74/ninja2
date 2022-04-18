function runProgram(input){
    var a=input.split("\n")
    var b=a[0].split(" ").map(Number)
    var c=a[1].split(" ").map(Number)
  
    }
   
  
  
  if (process.env.USERNAME === "MILIND") {
      runProgram("6 4\n1 2 5 4 0 6");
                  
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
  
  
  