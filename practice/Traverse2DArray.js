//// 4 3
// 1 8 9
// 2 7 10
// 3 6 11
// 4 5 12
//o/p=4 3 2 1 5 6 7 8 12 11 10 9


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
    for(i=0;i<col;i++){
        for(j=row-1;j>=0;j--){
            res=res+matrix[j][i]+" "
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