function runProgram(input) {
    var a = Number(input)
    var count=0
 
    for(i=1;i<=a;i++){
      if(a%i==0){
        count++
      }
    }
    if(count==2){
      console.log("Yes")
    }else{
      console.log("No")
    }  
      }
   if (process.env.USERNAME === "MILIND") {
             runProgram("2");
                         
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
  