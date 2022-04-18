// 3 3 6
// 3 2 1
// 2 2 2
// 1 5 1

// o/p 4
// 5 5
// 4 7 1 1 7
// 8 9 9 6 1
// 6 4 9 5 1
// 7 7 4 7 7
// 8 6 2 5 5

// 7 1 1 7 4 8 9 9 6 1 1 5 9 4 6 
// 7 7 4 7 7 5 5 2 6 8

function runProgram(input) {
    var a = input.split("\n")
    var rowcol = a[0].split(" ").map(Number)
    var row = rowcol[0]
    var col = rowcol[1]
    var ans = rowcol[2]
    var matrix = a.slice(1).map(function (row) {
        return row.split(" ").map(Number)
    })
    // console.log(matrix)
    var sum1 = 0
    var sum2 = 0
    var sum3 = 0
    var sum4 = 0
    var count = 0
    for (i = 0; i < row; i++) {
        for (j = 0; j < col; j++) {
            if (j + 2 < col) {
                sum1 = matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2]
                if (sum1 == ans) {
                    count++
                }
            }

            if (i + 2 < row) {
                sum2 = matrix[i][j] + matrix[i + 1][j] + matrix[i + 2][j]

                if (sum2 == ans) {
                    count++
                }

            }

            if (i + 2 < row && j + 2 < col) {
                sum3 = matrix[i][j] + matrix[i + 1][j + 1] + matrix[i + 2][j + 2]

                if (sum3 == ans) {
                    count++
                }

            }

            if (i > 1 && j + 2 < col) {
                sum4 = matrix[i][j] + matrix[i - 1][j + 1] + matrix[i - 2][j + 2]
                if (sum4 == ans) {
                    count++
                }


            }



        }
    }
    console.log(count)
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