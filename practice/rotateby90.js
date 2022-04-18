// i/p
// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8

// o/p
// 4 8 4 8
// 3 7 3 7
// 2 6 2 6
// 1 5 1 5
function runProgram(input) {
    var a = input.split("\n")

    var row = Number(a[0])
    var matrix = a.slice(1).map(function (row) {
        return row.split(" ").map(Number)

    })

    for(i=0;i<row;i++){
        for(j=0;j<i;j++){
            var mat2=matrix[i][j]
            matrix[i][j]=matrix[j][i]
            matrix[j][i]=mat2
        }
    }
    for(i=row-1;i>=Math.floor(row/2);i--){
        var res=""
        for(j=0;j<row;j++){
            res=res+matrix[i][j]+" "

        }
        console.log(res)

    }
    for(i=Math.floor(row/2)-1;i>=0;i--){
        var res=""
        for(j=0;j<row;j++){
            res=res+matrix[i][j]+" "

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
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
});