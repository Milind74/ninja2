function runProgram(input) {
    var a=input.split("\n")
    var test=Number(a[0])
    var r1=0
    for(z=0;z<test;z++){
        var arr=a[z+r1+1].split(" ").map(Number)
        var row=arr[0]
        var col=arr[1]
        var d=arr[2]
        var mat=a.slice(z+r1+2,z+r1+2+row).map(function(row){
            return row.split(" ").map(Number)
        })
        r1=r1+row
        var result=""
        if(d==1){
            for(i=0;i<row;i++){
                if(i%2==0){
                    for(j=0;j<col;j++)
                    result+=mat[i][j]+" "
                }
                else{
                    for(j=col-1;j>=0;j--)
                    result+=mat[i][j]+" "
                }
            }
            console.log(result)
        }
        if(d==2){
            for(i=0;i<row;i++){
                if(i%2!=0){
                    for(j=0;j<col;j++)
                    result+=mat[i][j]+" "
                }
                else{
                    for(j=col-1;j>=0;j--)
                    result+=mat[i][j]+" "
                }
            }
            console.log(result)
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