function runProgram(input){
    var input1=input.split(" ")
    var a=Number(input1[0])
    if(a%2==0){
        console.log("Even")
    }    
    else if(a%2!=0) {
        console.log("Odd")
    
    }}

if (process.env.USERNAME === "lenovo") {
          runProgram("6");
                      
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