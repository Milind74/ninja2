// 5 5
// 4 7 1 1 7
// 8 9 9 6 1
// 6 4 9 5 1
// 7 7 4 7 7
// 8 6 2 5 5

// 7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 
// 7 7 4 7 7 5 5 2 6 8

function runProgram(input) {
    var a=input.split("\n")
    var n=a[0].split(" ").map(Number)
    var row=n[0]
    var col=n[1]
    var matrix=a.slice(1).map(function(row){
        return row.split(" ").map(Number)
    })
    // console.log(matrix)
    var res=""
    for(i=0;i<row;i++){
        if(i%2==0){
        for(j=col-1;j>=0;j--){
            res=res+matrix[i][j]+" "
        }
        }
        else{
            for(j=0;j<col;j++){
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