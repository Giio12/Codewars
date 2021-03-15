const saludo1="Hola querido Jhonny, ten un hermoso dia."
const saludo2 ="Hola "
function saludo(name){
    if(name==="jhonny"){
        return saludo1
    }else{
        return saludo2 +name
    }
}

console.log(saludo("jhONny".toLowerCase()))
