import { question } from 'readline-sync';

function verificarSenha(senhaDigitada) {
    const senhaCorreta = "1234";

    if (senhaDigitada === senhaCorreta) {
        return "Acesso permitido!";
    } else {
        return "Senha incorreta. Acesso negado!";
    }
}

function main() {
    const senha = question("Digite a senha: ");

    console.log(verificarSenha(senha));
}

main();
