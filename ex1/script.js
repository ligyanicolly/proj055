let valorCarro = Number(prompt("Insira o valor do Carro:"));
let formaPagamento = prompt("Escolha a forma de pagamento (pix, cartao ou financiamento):");
let valorFinal;
let valorParcela;

if (formaPagamento === "pix") {
    valorFinal = valorCarro - (valorCarro * 0.15);

    alert(`Pagamento pix: R$ ${valorFinal.toFixed(2)}`);

} else if (formaPagamento === "cartao") {
    let parcelas = Number(prompt("Quantas parcelas? (Até 24x):"));

    if (parcelas > 0 && parcelas <= 24) {
        valorFinal = valorCarro + (valorCarro * 0.05);
        valorParcela = valorFinal / parcelas;
        alert(`Pagamento no Cartão. Total: R$ ${valorFinal.toFixed(2)} em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`);
    } else {
        alert("Quantidade de parcelas inválida para Cartão.");
    }

} else if (formaPagamento === "financiamento") {
    let parcelas = Number(prompt("Quantas parcelas? (Até 48x):"));

    if (parcelas > 0 && parcelas <= 48) {
        valorFinal = valorCarro + (valorCarro * 0.20);
        valorParcela = valorFinal / parcelas;
        alert(`Pagamento via financiamento. Total: R$ ${valorFinal.toFixed(2)} em ${parcelas}x de R$ ${valorParcela.toFixed(2)}`);
    } else {
        alert("Quantidade de parcelas inválida para financiamento.");
    }

}