console.clear();
const prompt = require('prompt-sync')();

let itens = ["pedra", "papel", "tesoura"];
let usuario = [];
let numeroAleatorio = 0;
let pontuacaoUser = 0;
let pontuacaoPc = 0;
let novoJogo = 0;

do {
let rodadas = +prompt("Quantas rodadas você deseja jogar? ");
console.log();

for (let contador = 0; contador < rodadas; contador++) {

    console.log();
    usuario = prompt("Escreva pedra, papel ou tesoura: ");
    console.log();

    while (usuario != itens[0] && usuario != itens[1] && usuario != itens[2]) {
	console.log('Item inválido!');
    console.log();
    usuario = prompt("Por favor, digite somente pedra, papel ou tesoura: ");
    console.log();
    }

    numeroAleatorio = Math.floor(Math.random() * 3);

    if (numeroAleatorio == 0 && usuario == itens[0]) {
        console.log("Vocês EMPATARAM!");
        console.log();

            console.log("Você digitou:", usuario);
            if (numeroAleatorio == 0) {
            console.log("O oponente digitou: pedra");
            } else if (numeroAleatorio == 1) {
            console.log("O oponente digitou: papel");
            } else {
            console.log("O computador digitou: tesoura");
            console.log();
        }
    
        } else if (numeroAleatorio == 0 && usuario == itens[1]) {
        console.log("Você VENCEU!");
        pontuacaoUser++
        console.log();

            console.log("Você digitou:", usuario);
            if (numeroAleatorio == 0) {
            console.log("O oponente digitou: pedra");
            } else if (numeroAleatorio == 1) {
            console.log("O oponente digitou: papel");
            } else {
            console.log("O computador digitou: tesoura");
            console.log();
        }
        
        } else if (numeroAleatorio == 0 && usuario == itens[2]) {
        console.log("Você PERDEU!");
        pontuacaoPc++
        console.log();

            console.log("Você digitou:", usuario);
            if (numeroAleatorio == 0) {
            console.log("O oponente digitou: pedra");
            } else if (numeroAleatorio == 1) {
            console.log("O oponente digitou: papel");
            } else {
            console.log("O computador digitou: tesoura");
            console.log();
        }
        
        } else if (numeroAleatorio == 1 && usuario == itens[0]) {
        console.log("Você PERDEU!");
        pontuacaoPc++
        console.log();

            console.log("Você digitou:", usuario);
            if (numeroAleatorio == 0) {
            console.log("O oponente digitou: pedra");
            } else if (numeroAleatorio == 1) {
            console.log("O oponente digitou: papel");
            } else {
            console.log("O computador digitou: tesoura");
            console.log();
        }
        
        } else if (numeroAleatorio == 1 && usuario == itens[1]) {
        console.log("Vocês EMPATARAM!");
        console.log();

            console.log("Você digitou:", usuario);
            if (numeroAleatorio == 0) {
            console.log("O oponente digitou: pedra");
            } else if (numeroAleatorio == 1) {
            console.log("O oponente digitou: papel");
            } else {
            console.log("O computador digitou: tesoura");
            console.log();
        }
        
        } else if (numeroAleatorio == 1 && usuario == itens[2]) {
        console.log("Você VENCEU!");
        pontuacaoUser++
        console.log();

            console.log("Você digitou:", usuario);
            if (numeroAleatorio == 0) {
            console.log("O oponente digitou: pedra");
            } else if (numeroAleatorio == 1) {
            console.log("O oponente digitou: papel");
            } else {
            console.log("O computador digitou: tesoura");
            console.log();
        }
        
        } else if (numeroAleatorio == 2 && usuario == itens[0]) {
        console.log("Você VENCEU!");
        pontuacaoUser++
        console.log();

            console.log("Você digitou:", usuario);
            if (numeroAleatorio == 0) {
            console.log("O oponente digitou: pedra");
            } else if (numeroAleatorio == 1) {
            console.log("O oponente digitou: papel");
            } else {
            console.log("O computador digitou: tesoura");
            console.log();
        }
        
        } else if (numeroAleatorio == 2 && usuario == itens[1]) {
        console.log("Você PERDEU!");
        pontuacaoPc++
        console.log();

            console.log("Você digitou:", usuario);
            if (numeroAleatorio == 0) {
            console.log("O oponente digitou: pedra");
            } else if (numeroAleatorio == 1) {
            console.log("O oponente digitou: papel");
            } else {
            console.log("O computador digitou: tesoura");
            console.log();
        }
        
        } else {
        console.log("Vocês EMPATARAM!");
        console.log();

            console.log("Você digitou:", usuario);
            if (numeroAleatorio == 0) {
            console.log("O oponente digitou: pedra");
            } else if (numeroAleatorio == 1) {
            console.log("O oponente digitou: papel");
            } else {
            console.log("O computador digitou: tesoura");
            console.log();
        }
    }
}

console.log();
console.log(`Você venceu ${pontuacaoUser} rodada(s) e o computador venceu ${pontuacaoPc} rodada(s).`)

console.log();
if (pontuacaoUser > pontuacaoPc) {
    console.log("Parabéns, você é o(a) grande VENCEDOR(A)!");
} else if (pontuacaoPc > pontuacaoUser) {
    console.log("Poxa, você PERDEU o jogo.");
} else {
    console.log("Bem, vocês EMPATARAM.");
}

console.log();
novoJogo = prompt("Deseja jogar novamente? Responda somente com '1' ou '2' para não: ");
console.log();

} while (novoJogo == 1);
    if (novoJogo == 2) {
        console.log("Obrigado por jogar comigo <3");
    }



