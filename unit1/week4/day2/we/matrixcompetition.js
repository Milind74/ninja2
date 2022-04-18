function runProgram(input) {
    var newInput = input.split("\n");
    var matOneDim = newInput[0].split(" ").map(Number);
    var r1 = matOneDim[0];
    var c1 = matOneDim[1];
    var matOne = newInput.slice(1, r1 + 1).map(function (row) {
      return row.split(" ").map(Number);
    });
    var matTwoDim = newInput[r1 + 1].split(" ").map(Number);
    var r2 = matTwoDim[0];
    var c2 = matTwoDim[1];
    var matTwo = newInput.slice(r1 + 2).map(function (row) {
      return row.split(" ").map(Number);
    });
    var sumMatOne=0
      for(i=0;i<r1;i++){
        for(j=0;j<c1;j++){
          sumMatOne=sumMatOne+matOne[i][j]
          }
      }
      var sumMatTwo=0
  
    for(i=0;i<r2;i++){
        for(j=0;j<c2;j++){
          sumMatTwo=sumMatTwo+matTwo[i][j]
          }
      }
   console.log(Math.max(sumMatOne,sumMatTwo))
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