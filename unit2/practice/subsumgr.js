
var a=[1,5,1,3,2]
var n=a.length
var count=0;

for(var i=0;i<n;i++)
  {
        for(var j=i;j<n;j++)
    {
      var sum=0
      var res=""
    for(var k=0;k<j-i+1;k++)
     {
      res=res+a[i+k]+" "
        sum+=a[i+k]  

     }
     if(sum<5){
         count++
     }
     console.log(res)
    }
}
console.log("count="+count)

