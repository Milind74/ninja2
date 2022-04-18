var a=[1,2,3]
var n=a.length
var m=1
var count1=0

for(var i=0;i<n;i++)
  {
    for(var j=i;j<n;j++)
    {
      var sum=0
      var count=0
     for(var k=0;k<j-i+1;k++)
     {
      if(a[i+k]%2==0){
        count++
      }
    }
    if(count==m){
        count1++
    }
}
  }

console.log("count="+count1)

