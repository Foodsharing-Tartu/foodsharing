// alert("test");
// alert (9+1);

var a = 4;
var b = 5;
c = a + b;

d = c/a;

document.getElementById("result").innerHTML = "Jagamise lõpptulemus on " 
+ d + "<br>" + "Liitmise lõpptulemus on" + c; 

var a = 5;
var h = 2;

d = a*h/2;

document.getElementById("triangle").innerHTML = d; 

var a = 5.7788;

// ümardamine
round = Math.round(a);
// ümardab allapoole
floor = Math.floor(a);
// komakoht
point = a.toFixed(2);
// teadmata arv
unknown = Math.round(Math.random()*100);

unknownPoint = (Math.random()*10000).toFixed(2);

// 2322.28898989898989
// 23.28
  
document.getElementById("triangle").innerHTML = round + "<br>" + 
floor + "<br>" + point+"<br>" + unknown + "<br>" + unknownPoint; 


