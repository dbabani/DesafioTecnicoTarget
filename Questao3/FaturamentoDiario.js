const { readFile } = require("fs")

readFile('./assets/faturamentoDiario.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo:', err);
        return;
    }

    const faturamentoArray = JSON.parse(data);
    const faturamentos = faturamentoArray
        .map(entry => entry.valor)
        .filter(valor => valor > 0); 

    const menorFaturamento = Math.min(...faturamentos);
    const maiorFaturamento = Math.max(...faturamentos);
    const soma = faturamentos.reduce((acc, valor) => acc + valor, 0);
    const media = soma / faturamentos.length;

    const diasAcimaDaMedia = faturamentos.filter(f => f > media).length;

    console.log("Menor valor de faturamento:", menorFaturamento);
    console.log("Maior valor de faturamento:", maiorFaturamento);
    console.log("Número de dias com faturamento acima da média:", diasAcimaDaMedia);
});
