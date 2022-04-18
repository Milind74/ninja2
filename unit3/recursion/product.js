function runProgram(input){
    var a=input.split("\n")

        var b=Number(a[0])
        var arr=a[1].split(" ").map(Number)
        console.log(arr)
        function product(arr,b){
            if(b<=0){
                return 1
            }
            return product(arr,b-1)*arr[b-1]
        }
        console.log(product(arr,b))
        
        }
        process.stdin.resume();
        process.stdin.setEncoding("ascii");
        let read = "";
        process.stdin.on("data", function (input) {
            read += input;
        });
        process.stdin.on("end", function () {
            read = read.replace(/\n$/,"")
        runProgram(read);
        });
        process.on("SIGINT", function () {
            read = read.replace(/\n$/,"")
            runProgram(read);
            process.exit(0);
        });
