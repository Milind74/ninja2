function runProgram(input){
var a=input.split("\n")
var t=Number(a[0])
for(b=0;b<t;b++){
    var array=a[2*b+2].split(" ").map(Number)
var stack=[]
var str=""
for(i=0;i<array.length;i++){
    while(stack.length>0&& stack[stack.length-1]<=array[i]){
        stack.pop()
    }
    if(stack.length==0){
        str+=str+"-1"+" "
    }
    else{
        str+=str+stack[stack.length-1]+" "
    }
    stack.push(array[i])
}
console.log(str)

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
    runProgram(read);
 });
 process.on("SIGINT", function () {
     read = read.replace(/\n$/,"")
     runProgram(read);
     process.exit(0);
 });