var btInicio = document.querySelector("#inicio");
btInicio.addEventListener("click", function(codificacion){
    codificacion.preventDefault();
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("main").style.backgroundColor = "#2b0f3b";
    document.querySelector(".stars").style.background = "url('./imagenes/star.png') repeat-x left top";
    document.querySelector(".luna").style.background = "url('./imagenes/luna.png') no-repeat left top";
    document.querySelector(".nubes").style.background = "url('./imagenes/cloud-2.png') repeat-x left top";
    document.querySelector(".bosque").style.background = "url('./imagenes/fondo.png') no-repeat left top";
    document.querySelector(".bosque").style.backgroundSize = "auto 100%";
    document.querySelector(".dibujo").style.display = "block";
    document.querySelector(".palabra").style.display = "block";
    document.querySelector(".palabra-error").style.display = "block"
    document.querySelector(".bt-inicio").style.display = "none";
    document.querySelector(".botonera-principal").style.backgroundColor = "rgba(0,0,0,0.7)";
    document.querySelector(".bt-nuevo").style.display = "inline-block";
    document.querySelector(".bt-desistir").style.display = "inline-block";
    document.querySelector(".bt-agregar").style.display = "none";
    document.querySelector("footer").style.position = "static";
    sonidoPlay();
    inicio();
});

var btNuevo = document.querySelector("#nuevo");
btNuevo.addEventListener("click", function(codificacion){
    codificacion.preventDefault();
    document.getElementById("error").value = " ";
    sonidoPlay();
    reinicio();
});

var btDesistir = document.querySelector("#desistir");
btDesistir.addEventListener("click", function(codificacion){
    codificacion.preventDefault();
    sonidoClick();
    setTimeout(desistirJuego, 500);
});


var btAgregar = document.querySelector("#agregar");
btAgregar.addEventListener("click", function(codificacion){
    codificacion.preventDefault();   
    document.querySelector(".bt-inicio").style.display = "none";
    document.querySelector(".bt-agregar").style.display = "none";
    document.querySelector(".bt-guardar").style.display = "inline-block";
    document.querySelector(".bt-cancelar").style.display = "inline-block";
    document.querySelector(".nuevaPalabra").style.display = "block";
    sonidoClick();
});

var btGuardar = document.querySelector("#guardar");
btGuardar.addEventListener("click", function(codificacion){
    codificacion.preventDefault();
    var palabraNueva = document.querySelector("#nuevaFrase").value;
    guardarPalabra(palabraNueva);
    estilosGuardar();
});

var btCancelar = document.querySelector("#cancelar");
btCancelar.addEventListener("click", function(codificacion){
    codificacion.preventDefault();
    document.querySelector(".bt-inicio").style.display = "inline-block";
    document.querySelector(".bt-agregar").style.display = "inline-block";
    document.querySelector(".bt-guardar").style.display = "none";
    document.querySelector(".bt-cancelar").style.display = "none";
    document.querySelector(".nuevaPalabra").style.display = "none";
    sonidoClick()
});

function estilosGuardar(){
    
    document.querySelector("body").style.backgroundColor = "black";
    document.querySelector("main").style.backgroundColor = "#2b0f3b";
    document.querySelector(".stars").style.background = "url('./imagenes/star.png') repeat-x left top";
    document.querySelector(".luna").style.background = "url('./imagenes/luna.png') no-repeat left top";
    document.querySelector(".nubes").style.background = "url('./imagenes/cloud-2.png') repeat-x left top";
    document.querySelector(".bosque").style.background = "url('./imagenes/fondo.png') no-repeat left top";
    document.querySelector(".bosque").style.backgroundSize = "auto 100%";
    document.querySelector(".dibujo").style.display = "block";
    document.querySelector(".palabra").style.display = "block";
    document.querySelector(".palabra-error").style.display = "block";
    document.querySelector(".botonera-principal").style.backgroundColor = "rgba(0,0,0,0.7)";
    document.querySelector(".bt-inicio").style.display = "none";
    document.querySelector(".bt-nuevo").style.display = "inline-block";
    document.querySelector(".bt-desistir").style.display = "inline-block";
    document.querySelector(".bt-agregar").style.display = "none";
    document.querySelector(".bt-guardar").style.display = "none";
    document.querySelector(".bt-cancelar").style.display = "none";
    document.querySelector(".nuevaPalabra").style.display = "none";
    document.querySelector("footer").style.position = "static";
}