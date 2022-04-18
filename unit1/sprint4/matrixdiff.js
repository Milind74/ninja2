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
var sum1=0
for(i=0;i<r1;i++){
    for(j=0;j<c1;j++){
        if(matrix[i][j]%2==0){
            sum1=sum1+matrix[i][j]
        }
    }
}
var sum2=0
for(i=0;i<r1;i++){
    for(j=0;j<c1;j++){
        if(matrix[i][j]%2!=0){
            sum2=sum2+matrix[i][j]
        }
    }
}
console.log(Math.abs(sum1-sum2))