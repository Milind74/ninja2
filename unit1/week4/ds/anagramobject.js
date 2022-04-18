function runProgram(input) {
    var input1=input.split("\n")
    var a=input1[0]
    var g=a.replace(/\s/g,"")
    var arr1=g.split("").sort()
    var b=input1[1]
    var c=b.replace(/\s/g,"")
    var arr2=c.split("").sort()
    if(arr1.length==arr2.length){
        var arr_obj1={}
        var arr_obj2={}
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
//console.log(arr_obj1) 

 for(i=0;i<arr2.length;i++){
    var key=arr2[i]
    if(arr_obj2[key]==undefined){
        arr_obj2[key]=1
    }
    else{
        var previous_count=arr_obj2[key]
        arr_obj2[key]=previous_count+1
    }
}
 //console.log(arr_obj2)
var keys1=Object.keys(arr_obj1)
var keys2=Object.keys(arr_obj2)
//console.log(keys1)
//console.log(keys2)
if(keys1.length==keys2.length){
    var count=0
for(i=0;i<keys1.length;i++){
    // for(j=0;j<keys2.length;j++){
        if(arr_obj1[keys1[i]]==arr_obj2[keys2[i]]){
           count++
        }
    }
}
// }

if(count==keys1.length){
    console.log("True")
}
else{
    console.log("False")
}
}
else{
    console.log("False")
}
}       process.stdin.resume();
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
    
        