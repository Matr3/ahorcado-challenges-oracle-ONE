document.onkeydown;
life = 0;
var palabra = "AHORCATE";
var palabra01 = Array.from(palabra);
var palabra02 = palabra01;


for (let i = 0; i < palabra02.length; i++){
  palabra02[i] = "_";
  console.log(palabra02);
}


window.addEventListener("keydown", function(event){
  var text = event.key.toUpperCase();
  
  console.log("El carácter pulsado es: " + text);
  

  
  if(life < 8){
    for (let u = 0; u < palabra01.length; u++){
      
      console.log(life);

        if(text == palabra01[u]){
          console.log("Acertaste: " + text);
        
        }
      }
    }
});



