// const precioOriginal = 150;
// const descuento = 15;

function calcularPrecioConDescuento(precio, descuento){
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function botonDescuento () {
    const calculadorPrecio = document.getElementById ("InputPrecio")
    const calculoprecio = calculadorPrecio.value;

    const calculadorDescuento = document.getElementById ("InputDescuento")
    const calculoDescuento = calculadorDescuento.value;

    const precioConDescuento = "Tu nuevo precio sera $" + calcularPrecioConDescuento (calculoprecio, calculoDescuento)
    
    const resultado = document.getElementById("Resultado")
    resultado.innerText = precioConDescuento
}
// const porcentajePrecioConDescuento = 100 - descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento) / 100;