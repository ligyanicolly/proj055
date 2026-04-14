let salario = Number(prompt("Insira o valor do seu salário:"));
let parcela = Number(prompt("Insira o valor da parcela desejada:"));

if (parcela > salario * 0.30) {
    alert("Empréstimo Negado: Parcela muito alta");
} else {
    alert("Empréstimo Pré-aprovado");
}