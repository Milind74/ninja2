function runProgram(input) {
    var a = input.split(/[\n]+/);
    var test = Number(a[0])
    for (i = 1; i <= test; i++) {
      var b = Number(a[i])
      var value=0
      var result = ""
      for (j = 1; j <= 10; j++){
        var value=b*j
        result = result + value + " "
      }
              console.log(result)

        
       
      
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
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});