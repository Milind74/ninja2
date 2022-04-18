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
        for(i=n-1;i>=0;i--){
            res1=res1+matrix[i][0]+" "
        }
        var res2=""
        for(i=1;i<n;i++){
            res2=res2+matrix[0][i]+" "
        }
        var res3=""
        for(i=1;i<n;i++){
            res3=res3+matrix[i][n-1]+" "
        }
        var res4=""
        for(i=n-2;i>=1;i--){
            res4=res4+matrix[n-1][i]+" "
        }
        console.log(res1+res2+res3+res4)




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





















