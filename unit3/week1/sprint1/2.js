function runProgram(input) {
    input = input.trim().split("\n");
     
    
         var arr = input[0].trim()
        
         var stack=[];
         var top=0
         stack.push(arr[0]);
         for(var i=0; i<arr.length;i++){
           if(top==0){
               stack.push(arr[i]);
               top++
           }else if(stack[top]=="{" && arr[i]=="}" || stack[top]=="(" && arr[i]== ")" || stack[top]=="[" && arr[i]=="]"){
               stack.pop()
                  top--
           }else if(arr[i]=="{" || arr[i]=="}" || arr[i]=="(" || arr[i]== ")" || arr[i]=="[" || arr[i]=="]") {
               stack.push(arr[i]);
               top++
           }
         }
          if(top===0){
              console.log("balanced")
          }else {
              console.log("unbalanced")
          }
    }
 
   if (process.env.USERNAME === "MILIND") {
     runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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