function runProgram(input) {
    var a = input.split("\n");
    var n=Number(a[0])
    var arr=a.slice(1).map(function(row){
        return row.split(" ")
    })
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
    var keys=Object.keys(arr_obj)
    var temp=arr_obj[keys[0]]
    var k=keys[0]
    for(i=1;i<keys.length;i++){
        if(arr_obj[keys[i]]>temp){
            temp=arr_obj[keys[i]]
            k=keys[i]
        }
    }
    console.log(k)
    
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
