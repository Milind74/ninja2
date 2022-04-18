function runProgram(input) {
    var a = input.split("\n");
    var test=Number(a[0])
    for(t=0;t<test;t++){
    var arr=a[2*t+2]
    var arr_obj={}
    for(i=0;i<arr.length;i++){
        var key=arr[i]
        if(arr_obj[key]==undefined){
            arr_obj[key]=1
        }
        else{
            var previous_count=arr_obj[key]
            arr_obj[key]=previous_count+1
        }
    }
    console.log(arr_obj)
    var keys=Object.keys(arr_obj)
   var arr2=[]
    for(i=0;i<keys.length;i++){
        if(keys[i]=='m'||keys[i]=='o'||keys[i]=='u'||keys[i]=='s'||keys[i]=='e'){
        arr2.push(arr_obj[keys[i]])
        }
    }
    console.log(arr2)
    var min=arr2[0]
    for(i=1;i<arr2.length;i++){
        if(arr2[i]<min){
            min=arr2[i]
        }
    }
    console.log(min)

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













