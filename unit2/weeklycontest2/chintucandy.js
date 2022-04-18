function runProgram(input) {
    var a = input.split("\n");
    var test=Number(a[0])
    for(t=0;t<test;t++){
        var arr1=Number(a[0*t+1])
        var arr2=a[t*2+2]
        var n=arr2.length
        console.log(arr2)
        var obj={}
    for (var i = 0; i < n; i++)
        {
    var res = "";
    for (var j = i; j < n; j++) {
        res += arr2[j]
        var key1 = res;
        if (obj[key1] == undefined)
            obj[key1] = 1;
        else {
            var pre = obj[key1];
            obj[key1] = pre + 1;
        }
        //console.log(res)//subarray
    
        }
    }
    var count=0
    //console.log(obj)
    }
    for(key in obj){
        count=count+obj[key]//obj[key]gives value of key
    }
    //console.log(count)//15
for(key in obj){
     var sub=key
      var n=sub.length
      var obj2={}
      for(i=0;i<n;i++){
          var key2=sub[i]
          if(obj2[key2]==undefined){
              obj2[key2]=1
              
          }
          else{
              var pre=obj2[key2]
              obj2[key2]=pre+1
          }
      }
      console.log(obj2)
      var s=obj[key]
   // console.log(s)
   for(key in obj){
       if(obj2[key]>=3){
           count=count-s
       }
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