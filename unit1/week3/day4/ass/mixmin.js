function runProgram(input) {
    var a = input.split(/[\n]+/);
    var test=Number(a[0])
    for(i=0;i<test;i++){
        var arr2=a[i*2+2].split(" ").map(Number)
        var arr1=a[2*i+1].split(" ").map(Number)
        var n=arr1[0]
        var m=arr1[1]
        var k=n-m
      var arr3= arr2.sort(function(b,c){
            return  b-c
        })
        var minsum=0
        var maxsum=0
        for(u=0;u<k;u++)
            minsum=minsum+arr3[u]
        
        for(v=n-1;v>=m;v--)
            maxsum=maxsum+arr3[v]
            console.log(maxsum-minsum)

        
        

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