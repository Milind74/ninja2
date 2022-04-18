function runProgram(input) {
    var newInput = input.split(/[\n]+/);
    var t = Number(newInput[0]);
    for (a= 1; a <= t; a++){
        var arr = newInput[a].split(" ").map(Number)
        var i = arr[0]
        var j = arr[1]
        var k = arr[2]
        if (i + j > k && i + k > j && k + j > i) {
            console.log("Yes")
        }
        else {
            console.log("No")
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