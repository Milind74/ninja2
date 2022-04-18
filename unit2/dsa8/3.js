function runProgram(input) {
    var a=input.split("\n")
    var test=Number(a[0])
    var r1=0
    for(z=0;z<test;z++){
        var arr=a[z+r1+1].split(" ").map(Number)
        var row=arr[0]
        var col=arr[1]
        var mat=a.slice(z+r1+2,z+r1+2+row).map(function(row){
            return row.split(" ").map(Number)
        })
        r1=r1+row
        var left=0
        var right=row-1
        var top=0
        var bottom=col-1
        while(left<=right &&top<=bottom){
            var res1=""
            for(i=top;i<=bottom;i++){
                res1+=mat[i][left]+" "
            }
            left++
            var res2=""
            for(i=left;i<=right;i--){
                res2+=mat[bottom][i]+" "
            }
            bottom--
            var res3=""
            for(i=bottom;i>=top;i--){
                res3+=mat[i][right]
            }
            right--
            var res4=""
            for(i=right;i>=left;i--)
            {
                    res4+=mat[top][i]
            }
            top++
        }
        console.log(res1+res2+res3+res4)
       
      
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