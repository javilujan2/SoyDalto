function operar(op) {
    if (op <= 4 && op != 0) {
        let nombresOperaciones = ['null', 'sumar', 'restar', 'dividir', 'multiplicar'];
        let signosDeOperaciones = ['null', '+', '-', '/', '*'];
        let numero1 = prompt("Primer número para " + nombresOperaciones[op]);
        let numero2 = prompt("Segundo número para " + nombresOperaciones[op]);
        resultado = eval(numero1 + signosDeOperaciones[op] + numero2);
        return alert(`Tu resultado es ${resultado}`);
    } else {
        return alert(`No se encontró esa operación.`);
    }
}

alert("¿Que operación deseas realizar?");
let operacion = prompt("1: Suma,  2: Resta,  3: División,  4: Multiplicación");
operar(operacion)