function runProgram(input){
    var input1=input.split(" ")
    var a=Number(input1[0])
    
    if(a%35 ==0){
        console.log("Masai School")
    }
    else if(a%7==0){
        console.log("Masai")
    }
    else if(a%5==0){
        console.log("School")
    }
    else{
        console.log("Hurray!")
    }
    }
 
     
 
 if (process.env.USERNAME === "lenovo") {
           runProgram("7");
                       
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