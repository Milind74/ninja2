function runProgram(input) {
    var a=input.split("\n")
    var b = a[0].split(" ").map(Number)
    var c = a[1].split(" ").map(Number)
    var count = 0
      if (c[0] > c[1]) {
            count++
        }
        if (c[b-1] > c[b - 2]) {
            count++
        }
    for (i = 1; i <= b; i++){
      
        if (c[i] > c[i - 1] && c[i] > c[i + 1]){
            count++
        }
    }
    console.log(count)


    
}
if (process.env.USERNAME === "lenovo") {
    runProgram("8\n1 2 3 4 2 1 6 5");
                      
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