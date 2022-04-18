function runProgram(input){
    var input1=input.split(" ")
    var res=""
    for(i=input1.length-1;i>=0;i--){
        res=res+input1[i]+" "
      }
    
    console.log(res)
}
  
  if (process.env.USERNAME === "MILIND") {
      runProgram("A Transformation in education");
                  
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
  
  
  