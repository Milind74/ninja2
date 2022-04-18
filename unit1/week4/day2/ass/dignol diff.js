var input=
`1 2 3 4
5 6 7 6
7 8 9 9
2 4 1 3`
var newinput=input.split("\n")
var mat=newinput.map(function(row){
    return row .split(" ").map(Number)
})
var sum1=0
var sum2=0
var diff=0
for(i=0;i<mat.length;i++){
    for(j=0;j<mat.length;j++){
        if(i==j){
        sum1=sum1+mat[i][j]
        }
        if(i+j==mat.length-1){
            sum2=sum2+mat[i][j]

        }
        diff=sum1-sum2

        

       
    }
}
console.log(diff)


