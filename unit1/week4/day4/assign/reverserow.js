function runProgram(input){
    var a= input.split(/[\n]+/);
    var matonedim=a[0].split(" ").map(Number)
    var r1=matonedim[0]
    var c1=matonedim[1]
    var matrix=a.slice(1).map(function(row){
        return row.split(" ").map(Number)
    })
    var res=""
    for(i=0;i<r1;i++){
        if(i%2==0){
            for(j=c1-1;j>=0;j--){
                res=res+matrix[i][j]+" "
            }
        }else{
            for(j=0;j<c1;j++){
                res=res+matrix[i][j]+" "
            }
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
  