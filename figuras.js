// Codigo del cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log(
    "Los lados del cuadrado miden: " 
    + ladoCuadrado 
    + "cm"
    );

function perimetroCuadrado(lado) {
    return lado * 4;
} 
console.log(
    "El perimetro del cuadrado es: " 
    + perimetroCuadrado 
    + "cm"
    );

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log(
    "El area del cuadrado es: " 
    + areaCuadrado 
    + "cm^2"
    );

console.groupEnd();

// Codigo del triangulo

console.group("Triangulo");

const ladoTriangulo1 = 6;

const ladoTriangulo2 = 6;

const baseTriangulo = 4;

const alturaTriangulo = 5.5;

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log(
    "Los lados del triangulo miden: "
     + ladoTriangulo1 
     + "cm," 
     + ladoTriangulo2 
     + "cm," 
     + baseTriangulo 
      + "cm"
    );

console.log(
    "La altura del triangulo es de: " 
    + alturaTriangulo 
    + "cm"
);

console.log(
    "El perimetro del triangulo es: " 
    + perimetroTriangulo 
    + "cm"
    );

    console.log(
        "El area del Triangulo es: " 
        + areaTriangulo 
        + "cm^2"
        );

console.groupEnd();

// Codigo del circulo

console.group("Circulo");


const radioCirculo = 4;

const diametroCirculo = radioCirculo * 2;

const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;

const areaCirculo = (radioCirculo * radioCirculo) * PI;

console.log(
    "El radio del circulo es de: " 
    + radioCirculo 
    + "cm"
);

console.log(
    "El diametro del circulo es de: " 
    + diametroCirculo 
    + "cm"
);

console.log(
    "PI es: " 
    + PI 
);

console.log(
    "La circunferencia del circulo es de: " 
    + perimetroCirculo 
    + "cm"
);

console.log(
    "El area del circulo es de: " 
    + areaCirculo
    + "cm^2"
);


console.groupEnd();