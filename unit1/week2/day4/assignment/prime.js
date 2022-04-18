function runProgram(input) {
    var a = input.split(" ")
    var b = Number(a[0])
    var c = Number(a[1])

    var result = ""
    if (b == 1)
        b++
    if (b == 2) {
        result = result + b + " "
        b++
    }
    for (i = b; i <= c; i++){
            var isprime = 0

        for (j = 2; j < i; i++){
            if (i % j == 0) {
            isprime=1              
           break
            }
           
        }
         if (isprime==0) {
            result=result+i +" "
        }
    }
    console.log(result)  
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