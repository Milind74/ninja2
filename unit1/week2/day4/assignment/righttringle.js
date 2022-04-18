 function runProgram(input) {
    var a = input.split(" ")
    var b = Number(a[0])
            for (i = 1; i <= b; i++) {
                var result=""
                for (j = 1; j <= i; j++){
                var result=result+j +" " 
                }
                console.log(result)
    }

}

if (process.env.USERNAME === "MILIND") {
    runProgram("5");
                      
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