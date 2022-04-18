var a = [1, 2, 4, 3, 5, 6, 8, 7, 9]
var high = a[0]
var count=0
for (i = 1; i < a.length; i++){
    for (j = 1; j < a.length; j++) {
        if (a[i] > high) {
            high = a[i]
        }
    }
}
    console.log(high)
