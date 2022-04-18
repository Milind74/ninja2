// 5 4
// 0 0 0 0
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4

function runProgram(input) {
    var a=input.split("\n")

    var n=a[0].split(" ").map(Number)
    var row=n[0]
    var col=n[1]
    var matrix=a.slice(1).map(function(row){
        return row.split(" ").map(Number)

    }) 
    for(i=0;i<row;i++){
        for(j=0;j<i;j++){
            var matrix2=matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=matrix2

        }
    } 

if(row==1){
    for(i=0;i<col;i++){
        for(j=0;j<row;j++){
            console.log(matrix[j][i])
        }
    }
}
else{
    for(k=0;k<col;k++){
        var res=""
        for(l=0;l<row;l++){
            res=res+matrix[k][l]+" "

        }
        console.log(res)
    }
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
  








  function runProgram(input) {
    let inp = input.trim().split("\n");
  
    var [r, c] = inp[0].trim().split(" ").map(Number);
  
    let matrix = [];
  
    for (let i = 0, line = 1; i < r; i++) {
      let arr = inp[line++].trim().split(" ").map(Number);
      matrix.push(arr);
    }
   console.log(matrix)
    let ans = [];
  
    for (let i = 0; i < c; i++) {
        let arr2 =[]
      for (let j = 0; j< r; j++) {
        arr2.push(matrix[j][i])

      }
      
      ans.push(arr2.join(" "))
    }

    console.log(ans.join("\n"))
  
    
  }
  if (process.env.USERNAME === "Asus") {
    runProgram(`5 4
    0 0 0 0
    1 1 1 1
    2 2 2 2
    3 3 3 3
    4 4 4 4`);
  }
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });