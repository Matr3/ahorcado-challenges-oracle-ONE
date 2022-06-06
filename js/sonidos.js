function sonidoPlay(){
	let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "audio/starts.mp3");
      etiquetaAudio.play();
}

function sonidoGameOver(){
	let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "audio/gameover.mp3");
      etiquetaAudio.play();
}

function sonidoClick(){
	let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "audio/click.mp3");
      etiquetaAudio.play();
}

function sonidoError(){
	let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "audio/error.mp3");
      etiquetaAudio.play();
}

function sonidoViento(){
    let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "audio/viento.mp3");
      etiquetaAudio.play();
      etiquetaAudio.loop = true;
}
function sonidoVictory(){
    let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "audio/victoria.mp3");
      etiquetaAudio.play();
}
function sonidoVientoStop(){
    let etiquetaAudio = document.createElement("audio");
      etiquetaAudio.setAttribute("src", "audio/viento.mp3");
      etiquetaAudio.stop();
      
}
