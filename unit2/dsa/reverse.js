function runProgram(input) {
    var a = input.split("\n");
    var test=Number(a[0])
    var r1=0
    for(t=0;t<test;t++){
        var n=Number(a[t+r1+1])
        var matrix=a.slice(t+r1+2,t+r1+2+n).map(function(row){
            return row.split(" ").map(Number)
        })
        r1=r1+n
       
        var res1=""
        for(r=0;r<n-1;r++){
            res1=res1+matrix[r][0]+" "
        }
        res2=""
         
        for(r=n-1;r>=0;r--){
          for(c=0;c<n;c++){
            if(c+r==n-1)
            {       res2=res2+matrix[r][c]+" "
        }
          }
        }
        var res3=""
        for(r=1;r<n;r++){
            res3=res3+matrix[r][n-1]+" "
        }
        console.log(res1+res2+res3)
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
      read = read.replace(/\n$/,"")
     runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
  });
