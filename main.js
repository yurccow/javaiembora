// let nomeUsuario = 'Yuri, Juan, Numbers';

// alert(nomeUsuario)

function soma(a,b){
    return a+b;
}

console.log("a soma de dois lados do quadrado é", soma(6,6), "cm")

function multiplication(a,b){
    return a*b;
}

console.log("a área do quadrado é", multiplication(6,6), "cm²")

let areaTriangulo = function(a,b){
    return (a*b)/2;
}

console.log("a área do triângulo é", areaTriangulo(6,6), "cm²")


let valores = parseInt(prompt("diga 3 valores para eu te dar a média"))
   
alert(valores)