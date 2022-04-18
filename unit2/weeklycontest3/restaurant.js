function runProgram(input) {
    var a = input.split("\n")
    var n=Number(a[0])
    var arr=a[1].split(" ").map(Number)
     
   }       
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
     read += input;
 });
 process.stdin.on("end", function () {
     read = read.replace(/\n$/,"")
     read = read.replace(/\n$/,"")
    runProgram(read);
 });
 process.on("SIGINT", function () {
     read = read.replace(/\n$/,"")
     runProgram(read);
     process.exit(0);
 });