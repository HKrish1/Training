var a="Welcome to this Javascript Guide!";
var b=a.split(' ');
var output="";
for(var i=0;i<b.length;i++)
{
    var c= b[i];

    var d=c.split("");

    var e=d.reverse();

    var f=e.join("")

    output=output+" "+f;
}

console.log(output);