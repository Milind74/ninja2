function runProgram(input){
    var a= input.split(/[\n]+/);
    var arr=a[1].split(" ").map(Number)
    var temp=arr[0]
    var arr1=[]
    var count=1

    for(i=1;i<arr.length;i++){
      if(temp==arr[i]){
        count++
      }
      else{
        if(temp%2!=0)
        arr1.push(count)
        count=1;
        temp=arr[i];
      }
      }
      if(temp%2!=0)
      arr1.push(count)
      var max=arr1[0]
      if(arr1.length!=0){
      for(j=1;j<arr1.length;j++){
        if(arr1[j]>max)
          max=arr1[j]
      }
        console.log(max)
      }
    else
          console.log("0")
        
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
    
    