    function runProgram(input) {
    var newinput = input.split("\n")
    var t=Number(newinput[0])
    var r=0
    var d=0
    var f=0
    for(var z=0;z<t;z++){
        var row=Number(newinput[z+r+1])
        var mat=newinput.slice(z+r+2,z+r+2+row).map(function(row){
            return row.split(" ").map(Number)
        })
        r=r+row
        // console.log(mat)
        var newarr=[]
        for(i=0;i<row;i++){
            for(j=0;j<row;j++){
                if((i+j==row-1)||i==j)
                newarr.push(mat[i][j])
            }
        }
        var arr=newarr.sort(function(a,b){
            return a-b
        })
        var temp=arr[0]
        var count=0
        for(h=0;h<arr.length;h++){
            if(arr[h]==temp)
            count++
        }
        console.log(count)
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