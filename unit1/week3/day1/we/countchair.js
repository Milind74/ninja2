function runProgram(input) {
  var a = input
  var count = 1
  var temp=a[0]
  var result=""
  for (i = 1; i < a.length; i++){
      if (a[i] == temp) {
          count++
      }
      else {
          result = result + temp + count
          count = 1
          temp=a[i]
      }
  }
              result = result + temp + count
              console.log(result)
  

}


if (process.env.USERNAME === "lenovo") {
    runProgram("aaabbbbcc");
                
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
