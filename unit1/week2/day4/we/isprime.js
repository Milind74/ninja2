function runProgram(input) {
    var a = input.split(" ").map(Number)
    var b = a[0]
    var c = a[1]
    var res=""
    if (b == 2) {
        res+=b+" "
        b++
    }
    for (i = b; i <= c; i++){
        var isprime=0
        for (j = 2; j < i; j++){
            if (i % j == 0) {
                isprime=1
            }
        }
        if (isprime == 0) {
            res=res+i+" "
        }
    }

            console.log(res)

    }

if (process.env.USERNAME === "lenovo") {
          runProgram("2 4");
                      
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