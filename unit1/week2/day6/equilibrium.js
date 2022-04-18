function runProgram(input) {
    var a=input.split("\n")
    var b = a[0].split(" ").map(Number)
    var c = a[1].split(" ").map(Number)

  var count=0

  for (i = 0; i < b; i++) {
    var leftsum = 0
    for (j = 0; j < i; j++)
      leftsum = leftsum + c[j]
       var rightsum=0

    for (k = i + 1; k < b; k++){
      rightsum = rightsum + c[k]
    
    }
    if (leftsum == rightsum)
    {
      console.log(i + 1)

      count=i+1
    }

  }
  if (count == 0) {
    console.log("-1")
  }
    
}
if (process.env.USERNAME === "MILIND") {
    runProgram("5\n3 3 5 5 1");
                      
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