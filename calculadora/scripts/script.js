let inputResultado = document.getElementById("inputCalculadora");

let calculo = {
    valorSalvo: null,
    funcaoParaCalcular: null
};

window.addEventListener("load", function () {
    atribuirEventos();
});

function atribuirEventos() {
    for (let i = 0; i <= 9; i++) {
        document.getElementById(`btnValor${i}`).addEventListener("click", inserirNumero);
    }

    document.getElementById("btnPonto").addEventListener("click", inserirPonto);
    document.getElementById("btnSoma").addEventListener("click", clicarOperador);
    document.getElementById("btnSubtrair").addEventListener("click", clicarOperador);
    document.getElementById("btnMultiplicar").addEventListener("click", clicarOperador);
    document.getElementById("btnDividir").addEventListener("click", clicarOperador);
    document.getElementById("btnLimpar").addEventListener("click", limparDados);
    document.getElementById("btnResultado").addEventListener("click", clicarResultado);
}

function inserirNumero(event) {
    const valor = event.target.textContent;
    if (isNaN(inputResultado.value) || inputResultado.value === "") {
        inputResultado.value = valor;
    } else {
        inputResultado.value += valor;
    }
}

function inserirPonto() {
    if (inputResultado.value === "" || isNaN(inputResultado.value)) {
        inputResultado.value = "0.";
    } else if (!inputResultado.value.includes(".")) {
        inputResultado.value += ".";
    }
}

function limparDados() {
    inputResultado.value = "";
    calculo.valorSalvo = null;
    calculo.funcaoParaCalcular = null;
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

function dividir(a, b) {
    if (b === 0) {
        alert("Erro: divisão por zero!");
        return 0;
    }
    return a / b;
}

function atribuirOperacao(operador) {
    if (operador === "+") calculo.funcaoParaCalcular = somar;
    else if (operador === "-") calculo.funcaoParaCalcular = subtrair;
    else if (operador === "*") calculo.funcaoParaCalcular = multiplicar;
    else calculo.funcaoParaCalcular = dividir;
}

function clicarOperador(event) {
    const operador = event.target.textContent;
    if (!isNaN(inputResultado.value)) {
        if (calculo.valorSalvo === null) {
            calculo.valorSalvo = Number(inputResultado.value);
        } else if (calculo.funcaoParaCalcular !== null) {
            calculo.valorSalvo = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
        }
    }
    atribuirOperacao(operador);
    inputResultado.value = "";
}

function clicarResultado() {
    if (!isNaN(inputResultado.value) && calculo.funcaoParaCalcular !== null) {
        const resultado = calculo.funcaoParaCalcular(calculo.valorSalvo, Number(inputResultado.value));
        inputResultado.value = resultado;
        calculo.valorSalvo = resultado;
        calculo.funcaoParaCalcular = null;
    }
}

