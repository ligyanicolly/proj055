let idade = Number(prompt("Insira a sua idade:"));
let estudante = prompt("Você é estudante? (sim/não)");

if (idade > 59 || idade < 12 || estudante === "sim") {
    alert(`O valor do seu ingresso é R$20,00`);
} else {
    alert("O valor do ingresso é R$ 40,00");
}