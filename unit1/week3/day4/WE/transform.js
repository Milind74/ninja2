function transform1(input){
var trimmedString=input.trim()
var lowerString=trimmedString.toLowerCase();
var newString=lowerString.replace(/\s/g,"")
var res=""
for(i=0;i<newString.length;i++){
    if((i+1)%2==0){
        res=res+"$"
    }
    else{
        res=res+newString[i]
    }
}
console.log(res)

}


var inputString="            Masai School  Bangalore            "
transform1(inputString)
