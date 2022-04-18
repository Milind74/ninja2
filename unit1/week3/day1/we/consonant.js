function runProgram(input) {
    var a = input
    var count=0
    for (i = 0; i < a.length; i++){
        if (a[i] !='a' && a[i] != 'e' && a[i] != 'i' && a[i] != 'o' && a[i] !== 'u') {
            count++
        }
    }
    console.log(count)
  
}

  
if (process.env.USERNAME === "lenovo") {
      runProgram("masaischool");
                  
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