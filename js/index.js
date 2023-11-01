function start() {
    document.getElementById("game").classList.remove("hide");
    document.getElementById("start").classList.add("hide");
    document.getElementById("info").classList.add("hide");
    let musica = document.getElementById("audio");
    musica.play();

}

let index = 0;
let questions = document.getElementById("questoes");
let question = questoes.map((question) => question.questao);
let options = questoes.map((options) => options.alternativas);
let score = 0;
document.getElementById("pontuacao").innerHTML = score;


let question_title = document.getElementById("quest");


question_title.innerHTML = question[index];

questions.appendChild(question_title);
let option = options[index].map((option) => option.texto);



for (var i = 0; i < 4; i++) {
    let alternativa = document.getElementById("bt" + i);
    alternativa.innerHTML = option[i];
}

function nextQuestion(i) {
    let correct = options[index][i].correct || false;

    if (correct == true) {
        score += options[index][i].valor || 0;
        document.getElementById("pontuacao").innerHTML = score + ".000";
        index++;
        proximo()

    } else {
        perder();
    }

}

function proximo() {
    if (index == 8) {//numero de questoes que eu tenho no jogo. atingindo as 8 ele vai calcular o vencedor.
        vencedor();
    } else {
        question_title.innerHTML = question[index];
        option = options[index].map((option) => option.texto); //Aqui, você está mapeando o array de opções de resposta, que parece ser armazenado em um array chamado options na posição index. O map é usado para extrair o texto de cada opção e armazená-lo em um novo array chamado option.
        console.log(option); //para fins de depuração. Isso pode ser útil para verificar as opções de resposta que estão sendo carregadas.
        for (var i = 0; i < 4; i++) {
            let alternativa = document.getElementById("bt" + i); //Aqui, um loop for é usado para iterar quatro vezes (presumivelmente para as quatro opções de resposta). Dentro do loop, ele obtém elementos HTML com IDs "bt0", "bt1", "bt2" e "bt3"
            alternativa.innerHTML = option[i];

        }
    }
}

function parar() {
    vencedor();
    //***CRIAR REGRAS DO PRIZE 2, PRIZE3, PRIZE4  ***/
}

function zerar() {
    document.getElementById("game").classList.add("hide");
    document.getElementById("start").classList.remove("hide");
    index = 0;
    score = 0;
    document.getElementById("pontuacao").innerHTML = score;
    document.getElementById("dica").classList.remove("hide");
    document.getElementById("info").classList.remove("hide");
    document.getElementById("winner").classList.add("hide");
    document.getElementById("lose").classList.add("hide");
    proximo();
}

function vencedor() {
    document.getElementById("game").classList.add("hide");
    document.getElementById("winner").classList.remove("hide");
    document.getElementById("pontosWinner").innerHTML = "Congratulations !!!" + "<br>" + "YOU WON " + score + ".000" + " =" + "<br>" + "Ironhack Prize 1";
   //***CRIAR REGRAS DO PRIZE 2, PRIZE3, PRIZE4  ***/
    this.audio.pause();
    let musica = document.getElementById("musicaVencedor");
    musica.play();
    //****COLOCAR MUSICA VENCEDOR ****/


}

function perder() {
    document.getElementById("game").classList.add("hide");
    document.getElementById("lose").classList.remove("hide");
    document.getElementById("pontosLose").innerHTML = "YOU LOST EVERYTHING";
    this.audio.pause();//pra pausar o audio de entrada, eu o vinculei com ID no HTML
    let musica = document.getElementById("audioIncorrect"); //respondendo errado ele para a musica do jogo e puxa esta ("audioIncorrect")
    musica.play();
    // this.audioIncorrect.pause();
    // let musica = document.getElementById("musicaSentimental");
    // musica.play();
    
    /**DAR UM ESPACO COM TIMER PRA TOCAR O MUSICA DA SELECAO DA RESPOSTA ERRADA E DEPOIS VINCULAR COM A DE BAIXO - MUSICA SENTIMENTAL ***/
    /***COMO COLOCAR AQUI A MUSICA SENTIMENTAL***/

    
}

function dica() {
    if (index == 0) {
        alert("Real is the oficial currency used in Brazil");
        document.getElementById("dica").classList.add("hide");
    }
    if (index == 1) {
        alert("Children love it... Also like a teddy bear");
        document.getElementById("dica").classList.add("hide");
    }
    if (index == 2) {
        alert("Old Film released in 1998");
        document.getElementById("dica").classList.add("hide");
    }
    if (index == 3) {
        alert("HTTP is a transfer protocol that enable people who enter the URL of your website to.");
        document.getElementById("dica").classList.add("hide");
    }
    if (index == 4) {
        alert("Adding the ODD numbers and dividing by three gives you the answer");
        document.getElementById("dica").classList.add("hide");
    }
    if (index == 5) {
        alert("It is NOT the city where the Christ Statue is located");
        document.getElementById("dica").classList.add("hide");
    }
    if (index == 6) {
        alert("Every four years he gets an extra day");
        document.getElementById("dica").classList.add("hide");
    }
    if (index == 7) {
        alert("On the same continent where the most populous country in the world is located");
        document.getElementById("dica").classList.add("hide");
    }

    function pontosLose (){

    }

}
