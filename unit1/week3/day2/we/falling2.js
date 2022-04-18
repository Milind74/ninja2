function runProgram(input) {
    var a = input.split(/[\n]+/);
    var b = Number(a[0])
    var value=0
    var c = a[1].split(" ").map(Number)
    
    if (c[b - 1]==2) {
            console.log("-1")
        }
    for (i = 1; i < b-1; i++){
        
        if (c[i] == 2 ) {
            console.log( c[i + 1])
        }

        
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