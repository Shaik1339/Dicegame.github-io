//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
var randomNumber1 =Math.floor(Math.random()*6)+1;
var randomNumber2 =Math.floor(Math.random()*6)+1;
//document.querySelector("img")[0].setAttribute("src","dice"+randomNumber2+".png");
document.getElementsByTagName("img")[0].setAttribute("src","dice"+randomNumber1+".png");
document.getElementsByTagName("img")[1].setAttribute("src","dice"+randomNumber2+".png");
if(randomNumber1>randomNumber2)
{
	//document.querySelector("h1").innerHTML=<i class="fa fa-trophy" style="font-size:48px;color:red"></i>;
	document.querySelector("h1").innerHTML="🏆 Player1 WIN! 🏆";
}
else if(randomNumber1<randomNumber2)
{
	document.querySelector("h1").innerHTML="🏆 Player2 WIN! 🏆";
}
else{
	document.querySelector("h1").innerHTML="🤝 Draw match! 🤝";
}