function runProgram(input){
    var arr=input
  
  var res=""
    for(i=0;i<arr.length;i=i+2){
      var k=Number(arr[i+1])
    while(k!=0){
    res=res+arr[i]
    k--
    }
    }
    console.log(res)

    }
        


   
  
  
  if (process.env.USERNAME === "MILIND") {
      runProgram("a3b2");
                  
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
  
 