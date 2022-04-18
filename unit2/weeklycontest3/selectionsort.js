function runProgram(input) {
    var a = input.split("\n")
    var n=Number(a[0])
    var arr=a[1].split(" ").map(Number)
    for(i=0;i<n-1;i++){
        var min=i

        for(j=i+1;j<n;j++){
            if(arr[min]>arr[j]){
                min=j
        }
    }
        var temp=arr[min]
                arr[min]=arr[i]
                arr[i]=temp
            
       }
       var res=""
   for(i=0;i<n;i++){
       res+=arr[i]+" "
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
     read = read.replace(/\n$/,"")
     read = read.replace(/\n$/,"")
    runProgram(read);
 });
 process.on("SIGINT", function () {
     read = read.replace(/\n$/,"")
     runProgram(read);
     process.exit(0);
 });