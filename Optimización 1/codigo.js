let miraMamaSinManos = {
    'sumar': function(x, y) { return x + y },
    'restar': function(x, y) { return x - y },
    'dividir': function(x, y) { return x / y },
    'multiplicar': function(x, y) { return x * y }
};

function operar(op) {
    if (op <= 4 && op != 0) {
        let nombresOperaciones = ['null', 'sumar', 'restar', 'dividir', 'multiplicar'];
        let numero1 = prompt("Primer número para " + nombresOperaciones[op]);
        let numero2 = prompt("Segundo número para " + nombresOperaciones[op]);
        resultado = miraMamaSinManos[nombresOperaciones[op]](parseInt(numero1), parseInt(numero2));
        return alert(`Tu resultado es ${resultado}`);
    } else {
        return alert(`No se encontró esa operación.`);
    }
}

alert("¿Que operación deseas realizar?");
let operacion = prompt("1: Suma,  2: Resta,  3: División,  4: Multiplicación");
operar(operacion)