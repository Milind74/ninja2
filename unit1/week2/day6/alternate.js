function runProgram(input) {
    var a=input.split("\n")
    var b = a[0].split(" ").map(Number)
    var c = a[1].split(" ").map(Number)
    var sum=0 
      
    for (i = 0; i < b; i++){
      
        if (i%2==0){
            sum+=c[i]
        }
    }
    console.log(sum)


    
}
if (process.env.USERNAME === "lenovo") {
    runProgram("7\n4 5 5 5 6 6 7");
                      
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