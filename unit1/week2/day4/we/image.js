var n = 7
for (i = 1; i <= n; i++) {
    var result = ""
    for (j = 1; j <= n - 1;j++) {
        if (i == n) {
            result = result + "* "
            
        } else {
            result = result + "  "
        
        }
    }
    result = result + "*"
    console.log(result)
}