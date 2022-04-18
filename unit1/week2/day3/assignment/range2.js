function runProgram(input) {
    var a = input.split(" ")
    var l = Number(a[0])
    var r = Number(a[1])
    var mul=""
    for (i = l; i <= r; i=i*2) {
        mul = mul+i+" "

      
    }
    console.log(mul)

    
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