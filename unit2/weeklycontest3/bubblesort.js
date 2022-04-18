function runProgram(input) {
    var a = input.split("\n")
    var n=Number(a[0])
    var arr=a[1].split(" ").map(Number)
    var count=0
    for(i=0;i<n;i++){
        for(j=0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                var temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
                count++
            }
           }
           if(count==0){
               break
           }  
    
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