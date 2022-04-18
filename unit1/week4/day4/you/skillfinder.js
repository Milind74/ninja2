var data = {
    Nrupul: ["cmd", "python", "sql"],
    Prateek: ["js", "html"],
    Aman: ["ds", "algo"],
    Albert: ["js", "react"]
};

for (var key in data)
{
    var z = data[key];
    for (var i = 0; i < z.length; i++)
    {
        if (z[i] == "js")
            console.log(key);
        }
    }
