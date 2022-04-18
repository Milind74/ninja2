function runProgram(input) {
    var a = input.split("\n")
    var test=Number(a[0])
   
    function reverse(arr2,start,end){
        while(start<end){
            temp=arr2[start]
            arr2[start]=arr2[end]
            arr2[end]=temp
            start++
            end--
         }
             return arr2
     }
   
   
   
   
    for(t=0;t<test;t++){
    var arr1=a[t*2+1].split(" ").map(Number)
    var n=arr1[0]
    var k=arr1[1]
    var arr2=a[t*2+2].split(" ").map(Number)
    
    var rev= reverse(arr2,0,arr2.length-1)

        k=k%n
       

        var str=""
        reverse(arr2,0,k-1)  

        var arr3=reverse(rev,k,arr2.length-1)

        for(i=0;i<arr3.length;i++){
            str+=arr2[i]+" "
        }
        console.log(str)
    
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
