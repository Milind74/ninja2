function runProgram(input) {
    var b = Number(input)
    for(i=1;i<=b;i++){
        var res=""
        for(j=1;j<=b;j++){
            if(i==1||i==b||j==b){
                res=res+"*"+"  "
            }
             else{
                res=res+"  "
             }
        }
        console.log(res)  

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