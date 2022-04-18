function runProgram(input){
    var a= input.split(/[\n]+/);
    var matonedim=a[0].split(" ").map(Number)
    var r1=matonedim[0]
    var c1=matonedim[1]
    var matrix=a.slice(1).map(function(row){
        return row.split(" ").map(Number)
    })
    var res=""
    var sum=0
    for(i=0;i<r1;i++){
        for(j=0;j<c1;j++){
            if(matrix[i][j]%3==0)
            sum=sum+matrix[i][j]

        }
    }
    console.log(sum)

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
  