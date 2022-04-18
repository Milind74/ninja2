function runProgram(input) {
    var newInput = input.split("\n");
    var matOneDim = newInput[0].split(" ").map(Number);
    var r = matOneDim[0];
    var c = matOneDim[1];
    var mat = newInput.slice(1, r + 1).map(function (row) {
      return row.split(" ").map(Number);
    });
    var d=Number(newInput[r+1]);
    var k=0;
    var z=0;
    for(var i=0;i<r;i++)
    {
      for(var j=0;j<c;j++)
      {
        if(mat[i][j]==d)
        {
          k=j-i;
          z=j+i;
        }
      }
    }
    var res1="";
    for(var i=0;i<r;i++)
    {
      for(var j=0;j<c;j++)
      {
        if(k==j-i)
          res1+=mat[i][j]+" ";
      }
    }
    console.log(res1);
    var res2="";
    for(var i=0;i<r;i++)
    {
      for(var j=0;j<c;j++)
      {
        if(z==j+i)
          res2+=mat[i][j]+" ";
      }
    }
    console.log(res2);
    
    
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