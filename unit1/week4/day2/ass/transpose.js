var input=
`1 2 3
4 5 6
7 8 9
1 2 3`
var input1=input.split("\n")
var mat=input1.map(function(row){
    return row.split(" ").map(Number)
})


for(i=0;i<4;i++){
    for(j=0;j<i;j++){
       var mat2=mat[i][j]
        mat[i][j]=mat[j][i]
        mat[j][i]=mat2
        
        }
    }
for(z=0;z<4;z++)
{
    var res=""
    for(j=0;j<4;j++){
    res=res+mat[z][j]+" "
}
console.log(res)
}