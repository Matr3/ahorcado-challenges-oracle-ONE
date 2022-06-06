var pantalla = document.getElementById("ahorcado");
var ctx = pantalla.getContext("2d");


function limpiarLienzo(){
	ctx.clearRect(0, 0, 1200, 800);
}

function playGame(){
	var img1 = new Image();
	img1.src = "imagenes/horca.png";

	img1.onload = function(){
	ctx.drawImage(img1, 310, 10);
	}
}

function cuerpo1(){
	var img = new Image();
	img.src = "imagenes/cuerpoP1.png";
	img.onload = function(){
	ctx.drawImage(img, 580, 180);	
	}
}
function cuerpo2(){
	var img1 = new Image();
	img1.src = "imagenes/cuerpoP2.png";
	img1.onload = function(){
	ctx.drawImage(img1, 580, 315);
	}
}
function cuerpo3(){
	var img2 = new Image();
	img2.src = "imagenes/cuerpoP3.png";
	img2.onload = function(){
	ctx.drawImage(img2, 511, 317);
	}
}
function cuerpo4(){
	var img3 = new Image();
	img3.src = "imagenes/cuerpoP4.png";
	img3.onload = function(){
	ctx.drawImage(img3, 700, 317);
	}
}
function cuerpo5(){
	var img4 = new Image();
	img4.src = "imagenes/cuerpoP5.png";
	img4.onload = function(){
	ctx.drawImage(img4, 582, 496);
	}
}	
function cuerpo6(){
	var img = new Image();
	img.src = "imagenes/cuerpoP6.png";
	img.onload = function(){
	ctx.drawImage(img, 705, 496);
	}
}
function gameOverCanvas(){
	var img = new Image();
	img.src = "imagenes/gameover.png";
	img.onload = function(){
	ctx.drawImage(img, 500, 180);
	}
}
function ganaste(){
	ctx.font = '50px serif';
	ctx.fillStyle = "#00cc00";
	ctx.fillText('Ganaste', 800, 180);
	ctx.fillText('Felicidades!', 800, 230);
}
function fin(){
	ctx.font = '50px serif';
	ctx.fillStyle = "#79091e";
	ctx.fillText('Fin del Juego!', 800, 180);
	
}











