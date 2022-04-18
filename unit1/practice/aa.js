function runProgram(input) {
    var a = input
    var temp = a[0]
    var count = 1
    var res=""
    for (i = 1; i <= a.length; i++){
        if (a[i] == temp) {
            count++
        }
        else {
            if (count % 2 != 0) {
                res=res+temp
            }
            count = 1
            temp=a[i]
        }
    }
    // if (count % 2 != 0) {
    //     res=res+temp
    // }
    if (count = "") {
        console.log("Empty String")
    }
    else {
        console.log(res)
    }
    
  
}

  
if (process.env.USERNAME === "lenovo") {
      runProgram("aaabccddd");
                  
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