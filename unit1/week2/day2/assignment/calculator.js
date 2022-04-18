function runProgram(input) {
    var input1 = input.split(" ")
    var a = Number(input1[0])
    var b =(input1[1])
    var c = Number(input1[2])
        switch (b) {
            case '+':
                console.log(a+c)
                break;
         case '-':
                console.log(a-c)
                break;
             case '*':
                console.log(a*c)
                break;
         case '/':

            if (a % c == 0) {
              console.log(a / c)
            }
            else {
              if (a > c) {
                console.log((a-(a%c))/c)
              }
              else {
                console.log("0")
              }
                }
              break;
        
          default:
                break
        }

    }

if (process.env.USERNAME === "lenovo") {
          runProgram("8 / 6");
                      
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