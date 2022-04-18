function runProgram(input) {
    var arr=input.split(" ").map(Number)
    var n=arr[0]
    var m=arr[1]
    
    count = 0;
    for (var x = 0; x <= m; x++) {

        for (y = 0; y <= m; y++) {

            if (x * x + y == n && y * y + x == m) {
                count = count + 1;
            }
        }

    }
    console.log(count)

    
}
if (process.env.USERNAME === 'MILIND') {
    runProgram(`9 3`)
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
    read += input;
});
process.stdin.on("end", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
});

process.on("SIGINT", function () {
    read = read.replace(/\n$/, "")
    runProgram(read);
    process.exit(0);
});