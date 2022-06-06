var palabrasJuego = ["AHORCADO", "PROGRAMACION", "ORACLE", "ELEFANTE", "ARGENTINA", "ESTUDIANTE"];
var palabra = [];
var palabraSecretaArray = Array.from(palabra); 
var blanceoPalabra = [];
var palabraCaja = blanceoPalabra;
var comienzo = false;
var lives = 0;
var letrasValidas = Array.from("QWERTYUIOPASDFGHJKLÑZXCVBNM");
var letraGuardada = [];
var letraError = [];
var aciertoLetra = 0;
var aciertoPalabra = 0;
var repetidas = 0;
var ocurencias= 0;

function finJuego(){
    if(lives === 6){
        sonidoGameOver();
        gameOverCanvas();
        setTimeout(limpiarLienzo, 5000);
        setTimeout(playGame, 5001);
        setTimeout(fin, 5002);
    }
}

function eleccionPalabra(){
    const numero = Math.floor(Math.random() * palabrasJuego.length);
    palabra = palabrasJuego[numero];
    if(palabrasJuego.length > 0){
        palabrasJuego.splice(numero, 1);
    }else{
        alert("No hay mas palabras!!!");
        desistirJuego();
    }
    return palabra;
}

function blanceoPalabraSecreta(){  
    var revisados = [];
    const palabraCambio = Array.from(palabra);
    for(let x = 0; x < palabraCambio.length; x++){
        if(!revisados.includes(palabraCambio[x]) && palabraCambio.indexOf(palabraCambio[x]) !== palabraCambio.lastIndexOf(palabraCambio[x])){
            repetidas++;    
        }
        palabraCambio[x] = "_";
        blanceoPalabra.push(palabraCambio[x]);
        aciertoPalabra = palabraCambio.length;    
    }
    aciertoPalabra = aciertoPalabra - repetidas;
    return blanceoPalabra;
}

function cajaAhorcado(){  
    palabraCaja = blanceoPalabra.join(" ");
    document.getElementById("frase").value = palabraCaja; 
}

function palabraSecretaAhorcado(text){   
   if(!letraGuardada.includes(text)){ 
        if(lives < 6){
            if(palabra.includes(text)){
                aciertoLetra++;
                letraGuardada.push(text);
                return text;        
            }else{
                sonidoError();
                lives++;
                armarCuerpo();
                letraError.push(text);
                palabraError();
                finJuego();
            }
        }
    }
      
}

function palabraError(){
    var letraErrorEsp = letraError.join(" ");
    document.getElementById("error").value = letraErrorEsp;
}

function armarCuerpo(){
    if(lives === 1){
        cuerpo1();
    }
    if(lives === 2){
        
        cuerpo2();    
    }
    if(lives === 3){
        
        cuerpo3();
    }
    if(lives === 4){
        cuerpo4();
    }
    if(lives === 5){
        cuerpo5();
    }
    if(lives === 6){
        cuerpo6();
    }
}

function ubicacionPalabra(confirmarLetraCorrecta){
    var palabraComparacionArray = Array.from(palabra);
    for(let k = 0; k < palabraComparacionArray.length; k++){
        var testing = palabraComparacionArray[k];
        if(testing == confirmarLetraCorrecta){
            blanceoPalabra[k] = confirmarLetraCorrecta;
        }
    } 
}


function guardarPalabra(palabraNueva){
    var condicion = true;
    var condicionLetra = true;

    var palabraNueva = palabraNueva.toUpperCase();
    var letraComparacion = [];
    
    for(let o = 0; o < palabraNueva.length; o++){
        letraComparacion = palabraNueva[o];
        if(!letrasValidas.includes(letraComparacion)){
        condicionLetra = false;
        alert("ingrese un caracter valido");
        break;
        
        }else{
            condicionLetra = true;
        }
    }
    for(let y = 0; y < palabrasJuego.length; y++){
        var palabraComparacion = palabrasJuego[y]; 
        
        if(palabraComparacion === palabraNueva){
            condicion = false;
            alert("Ya existe esta palabra");
            break;
        }else{
            condicion = true;
        }
    }
    if(palabraNueva === ''){
        alert("Ingrese una palabra");
    }
    else if((condicion === true) && (condicionLetra === true)){
        palabrasJuego.push(palabraNueva);
        estilosGuardar();
        inicio();
        sonidoPlay();
    }
    
    
    
   
}


function inicio(){
    sonidoViento();
    eleccionPalabra();
    blanceoPalabraSecreta();
    play();
    cajaAhorcado();
    limpiarLienzo();
    playGame();
}

function reinicio(){
    letraError.length = 0;
    palabra.length = 0;
    blanceoPalabra.length = 0;
    palabraSecretaArray.length = 0;
    letraGuardada.length = 0;
    lives = 0;
    activador = false;
    aciertoLetra = 0;
    aciertoPalabra = 0;
    repetidas = 0;
    eleccionPalabra();
    blanceoPalabraSecreta();
    cajaAhorcado();
    limpiarLienzo();
    playGame();
}

function desistirJuego(){
    location.reload();
    
}

function ganarahorcado(){
    if(aciertoLetra === aciertoPalabra){
        ganaste();
        sonidoVictory();
        setTimeout(limpiarLienzo, 5000);
        setTimeout(playGame, 5001);
        setTimeout(fin, 5002);
    }
}

function play(){  
    window.addEventListener("keydown", function(event){
    event.preventDefault();
    const text = event.key.toUpperCase();
        
        if(letrasValidas.includes(text)){
            if(!letraError.includes(text)){
                var confirmarLetraCorrecta = palabraSecretaAhorcado(text);         
                ubicacionPalabra(confirmarLetraCorrecta);
                ganarahorcado();
                cajaAhorcado();
            }
        }
    });
       
}