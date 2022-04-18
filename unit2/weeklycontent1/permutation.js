function runProgram(input) {
    var newInput=input.split("\n");
    var name1=newInput[0];
    var name2=newInput[1];
    var arr1=[];
    var arr2=[];
    var alp="abcdefghijklmnopqrstuvwxyz";
    for(i=0;i<26;i++){
    arr1.push(0)
    }
    console.log(arr1)

    for(i=0;i<26;i++){
        arr2.push(0)
        }
    console.log(arr2)
    for(i=0;i<name1.length;i++){
        arr1[name1.charCodeAt(i)-97]++
    }
    console.log(arr1)

    for(i=0;i<name2.length;i++){
        arr2[name2.charCodeAt(i)-97]++
    }
    console.log(arr2)
    for(var i=0;i<26;i++)
    {   
     if(arr1[i]>0)
     {
         console.log( alp[i]+"-"+arr1[i]);  


     } 
    }
    for(var i=0;i<26;i++)
    {   
     if(arr2[i]>0)
     {
         console.log(alp[i]+"-"+arr2[i]);

     } 
    }
    var count=0
        for(i=0;i<26;i++){
            if(arr1[i]==arr2[i]){
                count++
            }
        }
        if(count>0){
            console.log("Yes")
        }
        else{
            console.log("No")
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