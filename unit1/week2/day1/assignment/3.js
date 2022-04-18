function runProgram(input){
    var input1=input.split(" ")
    var a=Number(input1[0])
    var b=Number(input1[1])
    if(a/b>40){
        console.log("Apply Brake")
    }
    else {
        console.log("Keep Going")
    }
    
    }

if (process.env.USERNAME === "lenovo") {
          runProgram("100 2");
                      
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