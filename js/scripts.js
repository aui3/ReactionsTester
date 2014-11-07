
var createdTime, clickedTime, reactionTime;

document.getElementById("circle").style.display="none";

function getRandomColor() {
	var letters = '0123456789ABCDEF'.split('');
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function makeBox(){
		var time=Math.random()*5000;

		setTimeout(function(){ //the fuunction gets executed after 3s
			
			if (Math.random()<0.5){
				document.getElementById("circle").style.borderRadius="0";
			}
			else {

				document.getElementById("circle").style.borderRadius="100px";
			}
			var top=Math.random()*300;
			var left=Math.random()*400;
			document.getElementById("circle").style.top=top +"px";
			document.getElementById("circle").style.left=left+"px";
			document.getElementById("circle").style.backgroundColor=getRandomColor();
			document.getElementById("circle").style.display="block";
			createdTime=Date.now();
		},time);		

}

document.getElementById("circle").onclick=function(){

	this.style.display="none";
	var audio = document.getElementById("audio");
		audio.play();
	clickedTime=Date.now();

	reactionTime=(clickedTime-createdTime)/1000;
	document.getElementById("time").innerHTML=reactionTime;
	makeBox();
	
}

makeBox();

