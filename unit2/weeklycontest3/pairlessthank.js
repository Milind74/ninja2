    function runProgram(input) {
    var a = input.split("\n");
    var test=Number(a[0])
    for(t=0;t<test;t++){
        var n=Number(a[t*3+1])
        var arr2=a[t*3+2].split(" ").map(Number)
        var k=Number(a[t*3+3])
        //console.log(arr2)
        var sum=0
        var arr3=[]
        var count=0
         for(i=0;i<n;i++){
         for(j=i+1;j<n;j++){
             sum=arr2[i]+arr2[j]
         if(sum<k){
             arr3.push(sum)
             count++
         }
        }
        }
        if(count==0){
            console.log("-1")
        }
        else{
        var max=arr3[0]
        for(i=0;i<arr3.length;i++){
            if(arr3[i]>max){
                max=arr3[i]
            }
        }
        console.log(max)

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