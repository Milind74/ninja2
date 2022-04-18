function runProgram(input){
    var input1=input.split(" ")
    var a=Number(input1[0])
    var b=Number(input1[1])

    if(a>b){
        console.log("Australia")
    }
    else if(a<b){
        console.log("England")
    }
    else if(a==b){
        console.log("Tie")
    }
    
    }

if (process.env.USERNAME === "lenovo") {
          runProgram("46 67");
                      
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