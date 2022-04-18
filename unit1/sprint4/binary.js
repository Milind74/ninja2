function runProgram(input) {
  var newinput=input.split("\n")
  var mat1=newinput[0].split(" ").map(Number)
  var r1=mat1[0]
  var c1=mat1[1]
  var d
  var mat2=newinput.slice(1).map(function(row){
    return row.split(" ").map(Number)
  })
  
  for(i=0;i<r1;i++){
    for(j=0;j<c1;j++){
      if(mat2[i][j]==0)
      mat2[i][j]=1
    
    else
      mat2[i][j]=0
    }
  }
  for(i=0;i<r1;i++){
    var res=""
    for(j=0;j<c1;j++){
      res+=mat2[i][j]+" "
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