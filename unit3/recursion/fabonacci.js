function runProgram(input){
    var a=Number(input)
  function fabi(a){
      if(a<=1){
          return a
      }
      else{
          return fabi(a-1)+fabi(a-2)
      }
  }
  console.log(fabi(a))
   

}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/,"")
   runProgram(read);
});
process.on("SIGINT", function () {
    read = read.replace(/\n$/,"")
    runProgram(read);
    process.exit(0);
});
