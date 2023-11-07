function operacion(operacion) {
    let valor1 = parseFloat(document.getElementById('num1').value)
    let valor2 = parseFloat(document.getElementById('num2').value)
    let resultado = document.getElementById('resultado')


    switch (operacion) {
        case 'suma':
            resultado.innerText = valor1 + valor2
            break;
        case 'resta':
            resultado.innerText = valor1 - valor2
            break;
        case 'multiplica':
            resultado.innerText = valor1 * valor2
            break;
        case 'divide':
            resultado.innerText = valor1 / valor2
            break;
    }

}
function limpiar() {
    window.location.reload()
}