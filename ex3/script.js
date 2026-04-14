let valor = Number(prompt("Insira o valor da compra:"));
let regiao = prompt("Região: 1-Sul, 2-Sudeste, 3-Outras");
let frete;

if (valor > 250.00) {
    frete = 0;
} else if (regiao === "2") {
    frete = 10.00;
} else if (regiao === "1") {
    frete = 20.00;
} else {
    frete = 30.00;
}

alert(`Total: R$ ${(valor + frete).toFixed(2)}`);