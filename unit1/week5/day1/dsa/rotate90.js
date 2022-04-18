function runProgram(input) {
    var newInput = input.split("\n");
    var matOneDim = newInput[0].split(" ").map(Number);
    var r = matOneDim[0];
    var c = matOneDim[1];
    var mat = newInput.slice(1, r + 1).map(function (row) {
      return row.split(" ").map(Number);
    });
    
    
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