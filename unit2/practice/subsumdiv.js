function runProgram(input) {
    var a = input.split("\n");
    var arr1=a[0].split(" ").map(Number)
    var arr2=a[1]
    var k=arr1[1]
    console.log(arr2)
    var n=arr2.length
    var obj={}
      for(i=0;i<n;i++){
          var res=""
        for(j=i;j<n;j++){
            res+=arr2[j]
            console.log(res)
            var key1=res
            if(obj[key1]==undefined){
                obj[key1]=1;
            }
                else{
                    var pre=obj[key1]
                    obj[key1=1]
                }
            }
        }
        console.log(obj)

        var count=0
        var arr=[]
        for(key in obj){
            if(key.length==k){
            arr.push(key)
            }
        }


        console.log(arr)

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