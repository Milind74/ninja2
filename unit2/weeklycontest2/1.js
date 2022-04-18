function runProgram(input) {
    var a = input.split(/[\r\n]+/);
    var b=a[0].split(" ").map(Number)
    var n=b[0]
    var k=b[1]
    var data=a[1]
      var obj={}
      for(var i=0;i<n;i++)
      {
        var res="";
        
        for(var j=i;j<n;j++)
        {
          res+=data[j];
          var key=res;
          if(obj[key]==undefined)
                obj[key]=1;
          else
          {
            var pre=obj[key];
            obj[key]=pre+1;
          }
        }
    }

      console.log(obj)
      var count=0
      for(key in obj){
          count++
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