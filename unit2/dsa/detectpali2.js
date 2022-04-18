function runProgram(input) {
  var a = input.split("\n");
  var test=Number(a[0])
    for(t=0;t<test;t++){
       var n=Number(a[t*2+1])
       var arr=a[t*2+2]
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
      //  console.log(arr_obj)

          var keys=Object.keys(arr_obj)
           var count=0
           if(arr.length%2==0){
           for(i=0;i<keys.length;i++){
             if(arr_obj[keys[i]]%2==0){
                 count++} }
           if(count==keys.length){
            console.log("Possible!")}
          else{
            console.log("Not Possible!")
          } }
          else{
           for(i=0;i<keys.length;i++){
           if(arr_obj[keys[i]]%2==0){
              count++}}
           if(count==keys.length-1){
            console.log("Possible!")}
           else{
            console.log("Not Possible!")}
        }}
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