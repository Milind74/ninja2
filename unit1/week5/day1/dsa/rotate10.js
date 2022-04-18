function runProgram(input){
    var a=input.split("\n")
    var r1=Number(a[0])
  
    var matrix=a.slice(1).map(function(row){
        return row.split(" ").map(Number)
    })

    for(i=0;i<r1;i++){
        for(j=0;j<i;j++){
            var mat=matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=mat

        }
    }
  
    for(i=r1-1;i>=Math.floor(r1/2);i--){
      var res=""
      for(j=0;j<r1;j++){
        res+=matrix[i][j]+" "
      }
      console.log(res)
    }
    
     for(i=Math.floor(r1/2)-1;i>=0;i--){
      var res=""
      for(j=0;j<r1;j++){
        res+=matrix[i][j]+" "
      }
      console.log(res)
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
      