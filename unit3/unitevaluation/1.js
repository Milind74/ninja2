function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);
    var t = Number(newInput[0]);
  
    for (let i = 1; i <= t; i++) {
      let n = Number(newInput[i * 2 - 1]);
      let arr = newInput[i * 2].trim().split(" ").map(Number);
  
      function sum(arr, n) {
        let odd = 0;
        let even = 0;
        for (let i = 1; i <= n; i++) {
          if (arr[i - 1] % 2 == 1) {
            let temp = even;
          //   console.log('temp:', temp)
            even += odd;
            odd += temp + 1;
          } else {
            even += even + 1;
            odd += odd;
          }
        }
          return odd;
      }
      // sum(arr, n);
      console.log(sum(arr, n));
    }
  }
  


    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  