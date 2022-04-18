function runProgram(input) {
    var newInput = input.split(/[\r\n]+/);
    var l = Number(newInput[0]);
    
    var queue = [];
    let stack=[];

   
    for(var a=1;a<=l;a++){
        var arr = newInput[a].split(" ");
      
       var res = "";
      if(arr[0]==1){
          queue.push(arr[1])
        //   console.log(queue)  
      }
      if(arr[0]==2){
        stack.unshift(arr[1])
        // console.log(queue)  
    }
      if(arr[0]==3){
        if(queue.length>0){
        console.log(queue[0])  
    }
    else{
        console.log("-1")
    }
}
    if(arr[0]==4){
        if(stack.length>0){
        console.log(stack[stack.length-1])  
    }
    else{
        console.log("-1")
    }
}
    if(arr[0]==5){
        let extra=queue[0];
        queue.shift(queue[0]);
         stack.push(extra);
       
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
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });