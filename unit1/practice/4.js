function runProgram(input) {
  var n = Number(input)
  for (i =1; i <= n; i++) {
    var r = ""
    for (j = 1; j <=i; j++) {
      r = r + " "
    }
    for (k =n; k>=i ; k--) {
      r = r + "* "

    }
    console.log(r)
  }
}
if (process.env.USERNAME === "lenovo") {
           runProgram("4");
                    
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


