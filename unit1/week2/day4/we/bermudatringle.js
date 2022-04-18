var n = 4

for (i = 1; i <= n; i++) {
    var result = ""
    for (j = 1; j <= n - i; j++) {//4-1=3
        result = result + " ";
    }
        for (k = 1; k <= i; k++) {
            result = result + "* "
        }
        console.log(result)

 
}
