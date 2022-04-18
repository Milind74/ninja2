function runProgram(input) {
    var a = input.split("\n")
    var n=Number(a[0])
     var arr1=a[1].split(" ").map(Number)
     var arr2=a[2].split(" ").map(Number)
     var arr3=[]
     for(i=0;i<arr1.length;i++){
        var match=0

         for(j=0;j<arr2.length;j++)
        {
            if(arr1[i]==arr2[j]){
                arr3.push(arr1[i])
            }
             }

    }
    console.log(arr3.join(" "))
   
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
         
  