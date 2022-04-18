function runProgram(input) {
    var a = input.split("\n")
    var b = Number(a[0])
    var result = ""
    var c = a[1].split(" ").map(Number)
    for (i = 0; i < b; i++) {
        if (c[i] < 0) {
            result = result + 0
        }
        else {
            result = result + c[i]
    }
    }
    console.log(result)
  
}

  
if (process.env.USERNAME === "lenovo") {
      runProgram("5\n2 -4 6 8 -9");
                  
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