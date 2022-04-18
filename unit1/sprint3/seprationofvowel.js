function runProgram(input) {
    var a= input.split(/[\n]+/);
    var s=Number(a[0])
    var vowel="aeiou"
    var consonant="bcdfghjklmnpqrstvwxyz"
    for(i=1;i<=s;i++){
    var arr=a[2*i]
    var m=arr.length
    var res=""
    var result=""
    var res1=""
    for(j=0;j<m;j++){
        for(k=0;k<vowel.length;k++){
            if(arr[j]==vowel[k])
            res=res+arr[j]
        }
        for(a=0;a<consonant.length;a++){
            if(arr[j]==consonant[a])
            res1=res1+arr[j]
        }
        var result=res+res1
    }

console.log(result)
    
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