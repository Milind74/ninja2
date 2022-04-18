var a=`3 3
1 2 3 
4 5 6
7 8 9`

var b=a.split("\n")
var c=b[0].split(" ").map(Number)
var r1=c[0]
var c1=c[1]
var matrix=b.slice(1).map(function(row){
    return row.split(" ").map(Number)
})
console.log(matrix)
var l=0
for(i=0;i<r1;i++){
    for(j=0;j<c1;j++){
        var count=0
        var p=matrix[i][j]
        for(k=1;k<=p;k++){
        if(p%k==0)
        count++
        }
        if(count==2)
            l++
        
    }
}
console.log(count)

