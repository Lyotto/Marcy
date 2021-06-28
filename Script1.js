// JavaScript source code
 getKeyDown();
 showKeyMessage();


function getKeyDown{
document.addEventListener('keydown',function(tecla){
console.log(tecla);
console.log(tecla.key);
console.log(tecla.keyCode);
});
}

teclaCorrecta = "W";
teclaCorrecta2 = "S";
teclaCorrecta = "D";
teclaCorrecta4 = "A;

function showKeyMessage{
if (tecla == teclaCorrecta1){
    alert("presionaste "+ tecla.key + " y su keycode es: " + tecla.keyCode);
} else {   
    if (valor1 == teclaCorrecta2){
        alert("presionaste "+ tecla.key + " y su keycode es: " + tecla.keyCode);
        } else {
        if (valor1 == teclaCorrecta3){
            alert("presionaste "+ tecla.key + " y su keycode es: " + tecla.keyCode);
        } else {
        if (valor1 == teclaCorrecta4){
        alert("presionaste "+ tecla.key + " y su keycode es: " + tecla.keyCode);
        }else{
        //Flasheaste mono
        alert("Por favor presione W, S, A o D"")
        }
   }
}
