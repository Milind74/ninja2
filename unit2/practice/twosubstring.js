var str = "aabba";

var n = str.length;
var obj = {};
for (var i = 0; i < n; i++)
{
    var res = "";
    for (var j = i; j < n; j++) {
        res += str[j];
        var key1 = res;
        if (obj[key1] == undefined)
            obj[key1] = 1;
        else {
            var pre = obj[key1];
            obj[key1] = pre + 1;
        }
              // console.log(res)

    }
}
console.log(obj);//subarray
var count = 0;
for (key in obj)
{
    count += obj[key];
    }
   //console.log(count)

for (key in obj)
{
        var sub = key;
        var n = sub.length;

        var obj2 = {};
        for (var z = 0; z < n; z++)
        {
            var key2 = sub[z];
                if (obj2[key2] == undefined)
                    obj2[key2] = 1;
                else
                {
                    var pre = obj2[key2];
                    obj2[key2] = pre + 1;
                }
            
        }

      // console.log(obj2, sub);
    var s = obj[key];
   console.log(s,obj2);
        for (key in obj2)
        {

              if (obj2[key] >= 3)
              {
                  count = count - s;
                  
              }
          }   
    }
console.log(count);