let numero1 = Number(prompt("Digite o primeiro numero"));
let operacao = prompt("Digite a operação");
let numero2 = Number(prompt("Digite o segundo numero"));
let resultado;

switch (operacao) {
    case "+":
        resultado = numero1 + numero2;
        console.log(resultado);
        break;
    case "-":
        resultado = numero1 - numero2;
        console.log(resultado);
        break;
    case "*" :
        resultado = numero1 * numero2;
        console.log(resultado);
        break;
    case "/" :
        resultado = numero1 / numero2;
        console.log(resultado);
        break;
    default: 
        console.log("Operação inválida"); 
}