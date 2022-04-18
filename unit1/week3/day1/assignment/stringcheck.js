function runProgram(input) {
  var a = input.split("\n")
  var b = Number(a[0])
  var c = a[1]
  var count = 0
  for (i = 0; i < b; i++) {
    if (c[i] == 0 || c[i] == 1 || c[i] == 2 || c[i] == 3 || c[i] == 4 || c[i] == 5 || c[i] == 6 || c[i] == 7 || c[i] == 8 || c[i] == 9) {
      count++
    }
  }

  if (count == b) {
    console.log("numbers")
  }


  
  else if (count == 0) {
    console.log("chars")
  }
  else if (count > 0 && count < b) {
    console.log("alphanumeric")
  }
}
if (process.env.USERNAME === "lenovo") {
      runProgram("5\n12345");
                  
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