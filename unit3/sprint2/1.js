function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);
    var str = newInput[0];
  
    var a=0
    var b=0
    function firststr(str) {
      var res = "";
      var res1 = "";
      var size = Math.floor(str.length / 2);
      for (var i = 0; i < size; i++) {
        res += str[size - 1 - i] + "";
      }
      return res;
    }
    function secondstr(str) {
      var res1 = "";
      var size = Math.floor(str.length / 2);
      if (str.length % 2 != 0) {
        for (var i = str.length - 1; i > size; i--) {
  
          res1 += str[i] + "";
        }
        return res1;
      } else {
        for (var i = str.length - 1; i >= size; i--) {
          res1 += str[i] + "";
        }
      }
      return res1;
    }
  
  
    if (str.length % 2 == 0) {
      console.log(`${firststr(str)}${secondstr(str)}`);
    } else {
      console.log(
        `${firststr(str)}${str[Math.floor(str.length / 2)]}${secondstr(str)}`
      );
    }
  }
  
  if (process.env.USERNAME === "MILIND") {
    runProgram(`abcxyz`);
  } else {
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
  }