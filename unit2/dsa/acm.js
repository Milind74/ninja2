  function runProgram(input){
    var a = input.split(/[\r\n]+/);
    var n = Number(a[0])
    var r = n[0];
    
    var matrix = a.slice(1).map(function (row) {
      return row.split(" ");
    });
   console.log(matrix)
   for(i=0;i<n;i++){
     if(matrix[i]=="India"){
       console.log(i+1)
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
      read = read.replace(/\n$/,"")
     runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
  });