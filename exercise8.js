const litros= 0.5; 
function cant( horas){
    x= litros *horas
    return Math.floor(x)
}
console.log("Nathan bebe: "+ cant(11.8)+" litros de agua")