let contador = document.querySelector(".numero");
const botao = document.querySelector(".botao");
const operador = document.querySelector("#select");

let numero = 0;

botao.addEventListener("click", calc);

function calc() {

    if (operador.value === "menos") {
        numero = numero - 1;
    }

    if (operador.value === "mais") {
        numero = numero + 1;
    }

    contador.innerHTML = numero;
}