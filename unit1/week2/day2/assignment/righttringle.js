function runProgram(input) {
    var input1 = input.split(" ")
    var a = Number(input1[0])
    var b = Number(input1[1])
    var c = Number(input1[2])
    if (a + b > c && b + c > a && c + a > b) 
        {
            if (c ** 2 == a ** 2 + b ** 2) {
                console.log("Yes")
            }
            else {
                console.log("No")
            }
        }
    else  {
            console.log("No")

        }
    }
if (process.env.USERNAME === "lenovo") {
          runProgram("2 8 6");
                      
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