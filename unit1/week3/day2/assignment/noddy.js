function runProgram(input) {
  var a = input.split(/[\n]+/);
  var b = a[0].split(" ").map(Number)
  var n = b[0]
  var x = b[1]
  var count1 = 0
  var count2 = 0
  
  var c = a[1].split(" ").map(Number)
  for (i = 0; i < c.length; i++) {
    if (c[i] <= x) {
      count1++
    }
    else if (c[i] > x) {
      count2++
    
      if (count2 < 2) {
        continue
      }
      else
        break;
    }
  }
  console.log(count2)

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