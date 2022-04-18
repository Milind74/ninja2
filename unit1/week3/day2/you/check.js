function runProgram(input) {
    var newInput = input.split(/[\n]+/);
    var t = Number(newInput[0]);
    var n = Number(newInput[1])
    var count=0
    for (j = 1; j <= t; j++) {
        var arr = newInput[ j+2]
        for (i = 0; i < n; i++) {
            if (arr[i] == 0 || arr[i] == 1 || arr[i] == 2 || arr[i] == 3 || arr[i] == 4 || arr[i] == 5 || arr[i] == 6 || arr[i] == 7 || arr[i] == 8 || arr[i] == 9) {
                
                    count++
                }
            }
            if (count == n) {
                console.log("numbers")
            }
            else if (count == 0) {
                console.log("chars")
            }
            else if (count > 0 && count < n) {
                console.log("alphanumeric")
    			
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