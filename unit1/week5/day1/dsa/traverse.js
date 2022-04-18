function runProgram(input){
    var a=input.split("\n")
    var rowcol=a[0].split(" ").map(Number)
    var r1=rowcol[0]
    var c1=rowcol[1]
    var matrix=a.slice(1).map(function(row){
        return row.split(" ").map(Number)
    })
    var res=""
    for(i=0;i<c1;i++){
        for(j=r1-1;j>=0;j--){
            res+=matrix[j][i]+" "
    
        }
    
    }
    
    console.log(res)
    
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
      