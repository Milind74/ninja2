  function runProgram(input){
    var newInput = input.split(/[\r\n]+/);
    var mat = newInput[0].split(" ").map(Number);
    var r = mat[0];
    var c = mat[1];
    var m = newInput.slice(1,r+1).map(function (row) {
      return row.split(" ").map(Number);
    });
   
    var sum1=0;
    var sum2=0;
    
    for(var i=0;i<r;i++){
    for(var j=0;j<c;j++){
    if(j==Math.floor(c/2))
    {
      sum1+=m[i][j];
    }
      if((i==0&&j>Math.floor(c/2))||(i==r-1&&j<Math.floor(c/2)))
      {
        sum1+=m[i][j];
      }
    }
    }
    for(var i=0;i<r;i++){
    for(var j=0;j<c;j++){
    if(i==Math.floor(r/2))
    {
      sum2+=m[i][j];
    }
      if((j==0&&i<Math.floor(r/2))||(j==c-1&&i>Math.floor(r/2)))
      {
        sum2+=m[i][j];
      }
    }
    }
    
    console.log(Math.abs(sum1-sum2))
    
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