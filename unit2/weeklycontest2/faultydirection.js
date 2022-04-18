function runProgram(input) {
    var a = input.split("\n");
    var test=Number(a[0])
    for(t=0;t<test;t++){
        var n=Number(a[2*t+1])
        var arr=a[2*t+2].split("")
        var x=0, y=0,c=0,c,d=0
        for(i=0;i<n;i++){
            if(arr[i]=="R"){
            x++
            }
        
        if(arr[i]=="L"){
           x--
         }
         if(arr[i]=="U"){
            y++
         }
        if(arr[i]=="D"){
             y--
        }
    }
    if(x==0&&y==0){
        console.log("Yes")
    }
    else{
        console.log("No")
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
  
  