function runProgram(input){
    var a=input.split("\n")
    var arr=a[1].split(" ").map(Number)
    arr.sort(function(a,b){
        return a-b
    })
    console.log(arr.join(" "))

    }

  
  
  if (process.env.USERNAME === "MILIND") {
      runProgram("5\n3 5 0 9 8");
                  
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
  
  
  