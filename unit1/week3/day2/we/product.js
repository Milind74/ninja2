function runProgram(input) {
    var newInput = input.split(/[\n]+/);
    var t = Number(newInput[0])
    for (a = 1; a <= t; a++){
        var arr = newInput[2*a].split(" ").map(Number)
        var n = arr.length
        var totalproduct = 1
        for (i = 0; i < n; i++){
            totalproduct=totalproduct*arr[i]
        }
        var res = ""
        for (i = 0; i < n; i++){
            res=res+totalproduct /arr[i] + " "
        }
        console.log(res)
        
        
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