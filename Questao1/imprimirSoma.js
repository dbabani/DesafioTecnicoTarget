function imprimirSoma() {
    const indice = 13;
    let soma = 0;
    for (let k = 1; k <= indice; k++) {
        soma += k;
    }
    console.log("Soma:", soma);
}

imprimirSoma(); // 91
