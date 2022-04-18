    function runProgram(input) {
    var a = input.split("\n");
    var arr1=a[0].split(" ").map(Number)
    var arr2=a[1].split(" ").map(Number)
    var k=arr1[1]
    var max=0
    var sum=0 
    for(i=0;i<arr2.length;i++)
      {
        for(j=i;j<k;j++)
        {   
            var res=""
         for( l=0;l<j-i+1;l++)
         {
             res=res+arr2[i+l]+" "
            sum=sum+arr2[i+l]
         }
         console.log(res)    

         console.log("sum"+sum)   

         
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
      read = read.replace(/\n$/,"")
      read = read.replace(/\n$/,"")
     runProgram(read);
  });
  process.on("SIGINT", function () {
      read = read.replace(/\n$/,"")
      runProgram(read);
      process.exit(0);
  });
