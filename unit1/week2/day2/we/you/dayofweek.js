function runProgram(input) {
    var a = Number(input)
    switch (a) {
        case 0:
            console.log("Sunday")
            
            break;
    
        case 1:
            console.log("Monday")
            
            break;
        case 2:
            console.log("Tuesday")
            
            break;
        case 3:
            console.log("Wednesday")
            
            break;
        case 4:
            console.log("Thursday")
            
            break;
        case 5:
            console.log("Friday")
            
            break;
        case 6:
            console.log("Saturday")
            
            break;

    

    }
   
    
    }

if (process.env.USERNAME === "lenovo") {
          runProgram("3");
                      
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