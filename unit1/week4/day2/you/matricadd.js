function runProgram(input) {
    var newInput=input.split("\n")
    var rowcol=newInput[0].split(" ").map(Number)
    var r1=rowcol[0]
    var c1=rowcol[1]
    var r2=rowcol[2]
    var c2=rowcol[3]
    var matone=newInput.slice(1,r1+1).map(  function(row){
        return row.split(" ").map(Number)
    })
    var mattwo=newInput.slice(r1+1).map(  function(row){
        return row.split(" ").map(Number)
    })
    var sum=0
    if(r1==r2&&c1==c2){
    for(i=0;i<r1;i++){
        var res=""
        for(j=0;j<c1;j++){
           
        res+=matone[i][j]+mattwo[i][j]+" "
    
            }
            console.log(res)
        }
    }
    else{
        console.log("-1")
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