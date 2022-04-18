function runProgram(input){
    var a=input.split(" ").map(Number)
    var n=a[0]
    var k=a[1]
    var y=a[2]
    var total=0
    var mul=0
    for(i=1;i<=10;i++){
    var mul=i*n
    if(mul%y==0){
      total=total+mul
    }

  }
  console.log(total)

}
  
  
  if (process.env.USERNAME === "MILIND") {
      runProgram("3 10 15");
                  
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
  
  
    