function runProgram(input) {
    var newInput = input.split("\n");
    var arr1 = newInput[0].split(" ").map(Number);
    var n = arr1[0];
    let k = arr1[1];
    var count = 0;
    let str = newInput[1];
   // console.log(str);
   var obj={}
   for(i=0;i<k;i++){
    
    var char = str[i];
        // console.log(char);
        if(obj[char]==undefined){
            obj[char]=1
        }
        else{
            var pre=obj[char]
            obj[char]=pre+1
        }
    }
   // console.log(obj)
    var count1=0
    for(key in obj){
        count1++
    }
        if(count1==k){
            count++
        }
 //console.log(count)
 var start=0
for(i=k;i<n;i++){
    obj[str[start]]--//decrementing the first value
    var char = str[i];
    if(obj[char]==undefined){
        obj[char]=1
    }
    else{
        var pre=obj[char]
        obj[char]=pre+1
    }
    start++
   // console.log(obj)
   count1=0
   for(key in obj){
       if(obj[key]==1){
           count1++
       }
    }
    if(count1==k){
        count++
    }
}
console.log(count)

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