function runProgram(input){
    
    var a = input.split("\n")
    var b = a[0].split(" ").map(Number)
    var c = a[1].split(" ").map(Number)
    var sum = 0
    for (i = 0; i <b[0]; i++){
        sum=  sum+b[1] * c[i]
    }
    
    console.log(sum)

}
  
  

if (process.env.USERNAME === "MILIND") {
      runProgram("4 6\n1 2 3 4");
                  
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