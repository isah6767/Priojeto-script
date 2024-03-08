var num = Math.round(Math.random() * 100);
var tentativas = 0;

function verificarProcura() {
    var adivinhar = document.getElementById('adivinhar').value;
      tentativas++;
    if (adivinhar < num) {
        document.getElementById('mensagem').innerHTML = "O número é maior! Tentativas: " + tentativas;
    } else if (adivinhar > num) {
        document.getElementById('mensagem').innerHTML = "O número é menor! Tentativas: " + tentativas;
    } else {
        document.getElementById('mensagem').innerHTML = "Parabéns! Você acertou após " + tentativas + " tentativas.";
        if (confirm('Você quer jogar novamente?')) {
            num = Math.round(Math.random() * 100);
              tentativas = 0;
            document.getElementById('adivinhar').value = '';
            document.getElementById('mensagem').innerHTML = '';
        }
    }
}