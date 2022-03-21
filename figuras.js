// Codigo del cuadrado

console.group("Cuadrados");

// const ladoCuadrado = 5;
// console.log(
//     "Los lados del cuadrado miden: " 
//     + ladoCuadrado 
//     + "cm"
//     );

function perimetroCuadrado(lado) {
    return lado * 4;
} 
// console.log(
//     "El perimetro del cuadrado es: " 
//     + perimetroCuadrado 
//     + "cm"
//     );

function areaCuadrado (lado) {
    return lado * lado + "cm^2";
} 

// const areaCuadrado = ladoCuadrado * ladoCuadrado;
// console.log(
//     "El area del cuadrado es: " 
//     + areaCuadrado 
//     + "cm^2"
//     );

console.groupEnd();

// Codigo del triangulo

console.group("Triangulo");

// const ladoTriangulo1 = 6;

// const ladoTriangulo2 = 6;

// const baseTriangulo = 4;

// const alturaTriangulo = 5.5;

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base + "cm";
}
function areaTriangulo(base, altura) {
    return (base * altura) / 2 + "cm^2";
} 

// console.log(
//     "Los lados del triangulo miden: "
//      + ladoTriangulo1 
//      + "cm," 
//      + ladoTriangulo2 
//      + "cm," 
//      + baseTriangulo 
//       + "cm"
//     );

// console.log(
//     "La altura del triangulo es de: " 
//     + alturaTriangulo 
//     + "cm"
// );

// console.log(
//     "El perimetro del triangulo es: " 
//     + perimetroTriangulo 
//     + "cm"
//     );

//     console.log(
//         "El area del Triangulo es: " 
//         + areaTriangulo 
//         + "cm^2"
//         );

console.groupEnd();

// Codigo del circulo

console.group("Circulo");


// const radioCirculo = 4;

// const diametroCirculo = radioCirculo * 2;

function diametroCirculo (radio) {
    return radio * 2;
}

const PI = Math.PI;

// const perimetroCirculo = diametroCirculo * PI;

function circunferencia (radio) {
    const diametro = diametroCirculo(radio)
    return diametro * PI;
}

// const areaCirculo = (radioCirculo * radioCirculo) * PI;

function areaCirculo (radio) {
    return (radio * radio) * PI;
}

// console.log(
//     "El radio del circulo es de: " 
//     + radioCirculo 
//     + "cm"
// );

// console.log(
//     "El diametro del circulo es de: " 
//     + diametroCirculo 
//     + "cm"
// );

// console.log(
//     "PI es: " 
//     + PI 
// );

// console.log(
//     "La circunferencia del circulo es de: " 
//     + perimetroCirculo 
//     + "cm"
// );

// console.log(
//     "El area del circulo es de: " 
//     + areaCirculo
//     + "cm^2"
// );


console.groupEnd();

// interactuar con el html

function calcularPerimetroCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado () {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}