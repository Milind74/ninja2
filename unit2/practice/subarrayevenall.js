var a=[1,2,3,4,6]
var n=a.length
var count1=0

for(var i=0;i<n;i++)
  {
    for(var j=i;j<n;j++)
    {
      var sum=0
      var res=""
     for(var k=0;k<j-i+1;k++)
     {
      res=res+a[i+k]+" "
        
     }
     console.log(res)

     var count=0
     for(l=0;l<res.length;l++){
         if(res[l]%2==0){
             count++
         }
     }
     //agar count jo hai subarray jo nikale uskai length kai 
     //equal hogaya toh count kr lengai qki hmke kaha h ki subarray ka dono element even hona chhaiye 
     if(count==res.length){
         count1++

     }
     
    }
}
console.log("count="+count1)

