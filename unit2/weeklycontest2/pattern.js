function runProgram(input) {
  var b = Number(input)
  for (i = b; i>=1; i--) {
    var result = ""
    for (j =i; j>=1;j--) {
      if(j==1)
       result+="*";
        else
          result = result + "*"+" "
         
      }
    for(var z=b-i;z>=1;z--)
      result+=" "+" ";
    console.log(result)
    }
  }
  
if (process.env.USERNAME === "MILIND") {
    runProgram("4");
                      
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