function runProgram(input) {

    var newinput=input.split("\n")
    var n=newinput[0]
    var a=newinput[1]
    var g=a.replace(/\s/g,"")
    var arr1=g.split("").sort()
    
        var arr_obj1={}
   for(i=0;i<arr1.length;i++){
        var key=arr1[i]
        if(arr_obj1[key]==undefined){
            arr_obj1[key]=1
        }
        else{
            var previous_count=arr_obj1[key]
            arr_obj1[key]=previous_count+1
        }
    }
var obj_keys=Object.keys(arr_obj1)
for(i=0;i<obj_keys.length;i++){
    var res=""
    res+=obj_keys[i]+"-"+arr_obj1[obj_keys[i]]
    console.log(res)

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
    
        