var Math = require('mathjs');

exports.calculadora = function(operacion) {
    var resultado = Math.evaluate(operacion);
    return Math.round(resultado, 2);

}

function soloLetras(e){
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyzQWERTYUIOPASDFGHJKLÑZXCVBNM";
    especiales = "8-37-39-46";
    var i = 0
    tecla_especial = false
    for( var i = 0; i < especiales.length; i++){
         if(key != especiales[i]){
             tecla_especial = true;
             break;
         }
     }

     if(letras.indexOf(tecla)!=-1 && !tecla_especial){
         return false;
     }
 }