function runProgram(input) {
    var a = input.split(/[\n]+/);
    var test = Number(a[0])
    for (i = 1; i <= test; i++) {
        var b = a[i]
        var result=""
       var  temp = b[0]
        for (j = 1; j <b.length; j++) {
            if (b[j] != temp) {
                result = result+temp
                temp = b[j]
            }
        }

        
       result = result + temp

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