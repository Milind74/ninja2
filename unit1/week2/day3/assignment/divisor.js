function runProgram(input) {
    var a = input.split(" ")
    var l = Number(a[0])
    var r= Number(a[1])
    var k = Number(a[2])
    var count=0
    for (i = l; i <=r; i++){
        if (i % k == 0) {
            count++
            
        }

    }
         console.log(count)


}

if (process.env.USERNAME === "lenovo") {
          runProgram("1 10 1");
                      
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