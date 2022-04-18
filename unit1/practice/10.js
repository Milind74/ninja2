function runProgram(input) {
  var a = input.split("\n")
  var b = a[0].split(" ").map(Number)
  var c = a[1].split(" ").map(Number)
  var max = c[0]
  var min = c[0]
  
  for (i = 0; i < b; i++) {
    if (c[i] > max) {
      max = c[i]
    }
    if (c[i] < min)
      min = c[i]
  }
  console.log(min)
    console.log(max)

}
       
if (process.env.USERNAME === "lenovo") {
           runProgram("4\n-2 0 8 4");
                    
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


