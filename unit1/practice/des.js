var limit = 13
for (i = 2; i < limit; i++){
    var flag = 0
    for (j = 0; j < i; j++){
        if (i % 2 == 0) {
            flag=1
        }
    }
    if (flag == 0) {
        console.log(i)
    }
}
