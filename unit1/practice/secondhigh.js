
var arr = [5,4,6,9,10,11]; 

for (i=0; i<arr.length; i++){
    var count = 0;
    for(j=0; j<arr.length; j++){
      if (arr[j] > arr[i] ){
        count++
      }

    }
    if (count == 2){
      console.log(arr[i])
    }
}
