function runProgram(input){
    var a= input.split(" ").map(Number)
    console.log(a)
    var n=a[0]
    var m=a[1]
    var arr1=[]
    var arr2=[]
    for(i=1;i<=n;i++){
        if(n%i==0){
            arr1.push(i)
        }
    }
    for(j=1;j<=m;j++){
        if(m%j==0){
            arr2.push(j)
        }
    }
    var arr3=[]
    for(k=0;k<arr1.length;k++){
        for(j=0;j<arr2.length;j++){
            if(arr1[k]==arr2[j]){
                arr3.push(arr1[k])
            }
        }
    }
    var c=arr3.sort(function(a,b){
        return b-a
    })
    console.log(c[0])
}

  
  

if (process.env.USERNAME === "MILIND") {
      runProgram("51 68");
                  
    } else {
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
  }