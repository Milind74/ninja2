function runProgram(input) {
    var a = input.split(" ")
    var b =Number(a[0])
    var c = Number(a[1])
    var d=" "

    for (i = b; i <= c; i=i+2)
        {
        d = d + i + " "
            
    }
    console.log(d)

    
}

if (process.env.USERNAME === "lenovo") {
          runProgram("4 10");
                      
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