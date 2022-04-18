function runProgram(input){
    var input1=Number(input)
    var value=((input1*3)+7)-10
    console.log(value)

  

}
      if (process.env.USERNAME === "lenovo") 
      {
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