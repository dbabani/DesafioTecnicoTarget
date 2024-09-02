// Função para verificar se um número pertence à sequência de Fibonacci e retornar a mensagem
function isFibonacci(number) {
    if (number === 0 || number === 1) {
        return `O número ${number} pertence à sequência de Fibonacci.`;
    }
    
    let a = 0;
    let b = 1;
    let c = a + b;
    
    while (c <= number) {
        if (c === number) {
            return `O número ${number} pertence à sequência de Fibonacci.`;
        }
        a = b;
        b = c;
        c = a + b;
    }
    
    return `O número ${number} não pertence à sequência de Fibonacci.`;
}

const number = 12;
const message = isFibonacci(number);
console.log(message);
