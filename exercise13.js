let valor1= 5;
let valor2=6;

console.log("¿Que operación desea realizar?:")
console.log(" 1.SUMA 2.RESTA 3.MULTIPLICACION 4.DIVISION")

function calculadora(operacion){
    if(operacion===1){
    return valor1 + valor2
}else if(operacion===2){
    return valor1 - valor2

}else if(operacion===3){
    return valor1 * valor2
}else if(operacion===4){
    return valor1 / valor2
}
}
console.log(calculadora(4))
