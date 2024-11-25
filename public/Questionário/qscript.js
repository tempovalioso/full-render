var answers = {};
// Cria um objeto vazio para armazenar as respostas do usuário.

var question_one = document.getElementById('question-1');
// Pega o elemento HTML da primeira questão com o id 'question-1'.
var question_two = document.getElementById('question-2');
// Pega o elemento HTML da segunda questão com o id 'question-2'.
// (Continua assim até a questão 10)
var question_three = document.getElementById('question-3');
var question_four = document.getElementById('question-4');
var question_five = document.getElementById('question-5');
var question_six = document.getElementById('question-6');
var question_seven = document.getElementById('question-7');
var question_eight = document.getElementById('question-8');
var question_nine = document.getElementById('question-9');
var question_ten = document.getElementById('question-10');

function storeAnswers(question_number, event) {
    // Função para armazenar as respostas conforme o usuário interage com as questões.
    if (event.target.type === 'radio') {
        // Verifica se o tipo do elemento clicado é um botão de rádio.
        console.log(event.target.value);
        // Exibe o valor da opção selecionada no console.
        answers['question' + question_number] = parseInt(event.target.value);
        // Armazena a resposta convertida em número no objeto 'answers'.
        console.log(answers);
        // Exibe o objeto 'answers' atualizado no console.
    }
}

question_one.addEventListener('click', function (event) {
    storeAnswers(1, event);
    // Adiciona um evento de clique para armazenar a resposta da primeira questão.
});
// Repetindo o processo para as outras questões (de 2 a 10).
question_two.addEventListener('click', function (event) {
    storeAnswers(2, event);
});
question_three.addEventListener('click', function (event) {
    storeAnswers(3, event);
});
question_four.addEventListener('click', function (event) {
    storeAnswers(4, event);
});
question_five.addEventListener('click', function (event) {
    storeAnswers(5, event);
});
question_six.addEventListener('click', function (event) {
    storeAnswers(6, event);
});
question_seven.addEventListener('click', function (event) {
    storeAnswers(7, event);
});
question_eight.addEventListener('click', function (event) {
    storeAnswers(8, event);
});
question_nine.addEventListener('click', function (event) {
    storeAnswers(9, event);
});
question_ten.addEventListener('click', function (event) {
    storeAnswers(10, event);
});

function totalScore() {
    // Função que calcula a pontuação total baseada nas respostas armazenadas.
    let total_score = 0;
    for (let i = 1; i <= 10; i++) {
        // Itera sobre as 10 questões.
        if (answers['question' + i] !== undefined) {
            // Verifica se a resposta da questão existe.
            total_score += answers['question' + i];
            // Soma a resposta à pontuação total.
        }
    }
    return total_score;
    // Retorna a pontuação total.
}

function getInfoBasedOnScore() {
    // Função que retorna informações baseadas na pontuação total.
    if (totalScore() >= 20) {
        // Se a pontuação total for maior ou igual a 20.
        var score_info = '<h1 class="print-result">Nível <span>Altissímo</span></h1>'
        var result_quest = '<h2 class ="result-title">Sua procrastinação está <span>alta</span>? Vejamos as causas da procrastinação!</h2><p class="result-text">Compreender por que você ou alguém em sua equipe está procrastinando é o primeiro passo para enfrentar esse comportamento!</p><h2 class="result-title-dica">Veja quais são os principais motivos que levam uma pessoa a procrastinar:</h2><h2 class="result-title">Falta de <span>Prioritização</span></h2><p class="result-text">Um dos principais motivos para a procrastinação é a falta de priorização. Esse problema pode ser mais amplo do que pessoal. <br> <br> Em uma empresa, isso pode ocorrer quando as metas, os objetivos e os prazos não estão claramente definidos. A ausência de uma pessoa responsável por determinada tarefa também pode contribuir para a procrastinação. <br> <br> No âmbito pessoal, uma pessoa que não se organiza adequadamente, não compreende os prazos ou a importância das tarefas pode acabar se perdendo na priorização e achar que é aceitável adiar seus deveres.</p><h2 class="result-title">Medo do <span>Erro</span></h2><p class="result-text">Outro motivo para a procrastinação é o medo de cometer erros. Esse medo é mais comum em tarefas importantes e desafiadoras. <br> <br> Esse problema pode surgir em um ambiente corporativo que não promove uma cultura de feedback, não oferece capacitações eficazes, pratica gerenciamento ou não mantém um ambiente seguro para que os colaboradores possam errar e aprender.</p><h2 class="result-title">Falta de <span>Incentivo</span></h2><p class="result-text">Esse motivo está relacionado ao anterior. O medo de errar muitas vezes está associado à ideia de punição por tarefas mal realizadas. <br> <br> Se uma empresa cria incentivos ou oferece feedbacks positivos publicamente quando uma tarefa é concluída dentro do prazo, isso pode aumentar a motivação da pessoa e ajudar a reduzir a procrastinação.</p>'

        var result_quest2 = '<h2 class="result-title">Problemas <span>Físicos</span> ou <span>Emocionais</span></h2><p class="result-text">A procrastinação pode ser um problema crônico, resultante de questões emocionais ou físicas. <br> <br> Problemas emocionais, como luto ou situações familiares adversas, podem contribuir para a procrastinação. Nesses casos, o acompanhamento psicológico pode ser necessário. <br> <br> Para problemas físicos, a causa pode ser mais complexa, envolvendo condições neurológicas, como má formação cerebral ou lesões no córtex pré-frontal, região responsável pelo foco e concentração. <br> <br> Além disso, a procrastinação pode ser um indicativo de burnout, o que requer atenção tanto para causas físicas quanto emocionais. <br> <br> É importante considerar que as pessoas que procrastinam muitas vezes não sabem exatamente por que agem dessa forma. Em muitos casos, é uma combinação de fatores como falta de motivação, baixa energia, ansiedade, falta de preparo e, ocasionalmente, preguiça.</p> <h2 class="result-title-dica">Indicações de <span>livros</span> sobre procrastinação!</h2><h2 class="result-title-italic">Arrume a Sua Cama: Pequenas Coisas que Podem Mudar a Sua Vida… E Talvez o Mundo</h2><p class="result-text">O almirante William H. McRaven mostra em sua obra como um simples hábito cultivado diariamente pode representar uma grande vitória.</p> <br> <br> <p class="result-text">Na verdade, o livro é uma transcrição e extensão do célebre discurso que ele fez para uma aula inaugural na Universidade de Austin, no Texas, que você pode conferir no vídeo abaixo: <br> <br>Assistir no YouTube:  <a class="link" target="_blank" href="https://www.youtube.com/watch?v=IlGEGEm1_5k">https://www.youtube.com/watch?v=IlGEGEm1_5k</a></p> <br> <br> <h2 class="result-title-italic">A Procrastinação: Aprendendo a Lidar com Ela</h2><p class="result-text">Jane B. Burka e Lenora M. Yuen, duas psicólogas clínicas, oferecem uma visão abrangente sobre a procrastinação. Elas exploram os fatores emocionais e cognitivos envolvidos no comportamento procrastinador e ensinam técnicas e exercícios para superar esse padrão.</p> <br> <br> <h2 class="result-title-italic">O Poder do Hábito</h2><p class="result-text">Embora este livro não seja especificamente sobre procrastinação, ele aborda o tema dos hábitos e como eles influenciam nosso comportamento.</p>'
    } else if (totalScore() >= 11) {
        // Se a pontuação total for entre 11 e 19.
        var score_info = '<h1 class="print-result">Nível <span>Intermediário</span></h1>'
        var result_quest = '<h2 class="result-title">Procrastinador <span>Relaxado</span></h2><p class="result-text">O procrastinador relaxado é aquele que, ao adiar uma tarefa, opta por fazer algo mais agradável. Ele reconhece que a tarefa evitada é desagradável, mas não se sente culpado por isso e nem se preocupa em lidar rapidamente com as consequências. Esse tipo de procrastinador prefere deixar o tempo passar sem se estressar.</p> <h2 class="result-title">Procrastinador <span>Tenso</span></h2> <p class="result-text">Por outro lado, o procrastinador tenso sabe que deveria realizar a atividade, mas não consegue encontrar motivação suficiente para iniciar. Mesmo procrastinando, ele sente culpa e tensão constantes por não estar se dedicando à tarefa. Essa culpa pode aumentar a ansiedade, criando um ciclo de procrastinação difícil de quebrar.</p><h2 class="result-title-dica">Dicas para <span>ajudar</span> com a <span>procrastinação!</span></h2><h2 class="result-title">Dê pequenos primeiros <span>passos.</span></h2><p class="result-text-dica">Iniciar com um pequeno movimento é uma estratégia respaldada pela ciência para superar a procrastinação. A ideia é estabelecer uma meta tão pequena que, “o hedonista em você, que prefere o prazer imediato e adiar as responsabilidades, não conseguirá recusar”.<br> <br>O psicólogo Tim Pychyl, diretor do Centro de Pesquisa sobre Procrastinação da Universidade de Carleton, no Canadá, testou essa abordagem. Seus resultados confirmaram a eficácia: “Uma vez que os alunos começaram, eles avaliaram as tarefas como menos difíceis e estressantes, além de mais agradáveis do que imaginavam”.</p><h2 class="result-title"><span>Estabeleça</span> horários para tudo.</h2><p class="result-text-dica">Definir horários é uma estratégia eficaz para combater a procrastinação ao criar uma programação para o dia. Você saberá exatamente quais tarefas devem ser realizadas em momentos específicos, evitando a sensação de sobrecarga e desordem.<br> <br>Além disso, estabelecer horários cria um senso de responsabilidade e compromisso. Quando você define um horário para uma tarefa, está criando um compromisso consigo mesmo para realizá-la naquele período determinado.<br> <br>Isso aumenta a motivação e a disciplina, tornando provável que você realmente inicie e conclua as tarefas no tempo estipulado.</p>'

        var result_quest2 = '<h2 class="result-title">Identifique o <span>problema</span> com precisão!</h2><p class="result-text-dica">Nem tudo se resume à incapacidade de lidar com responsabilidades. Em alguns casos, não é possível concluir uma tarefa devido à falta de tempo, recursos ou até mesmo de capacitação.<br> <br>Portanto, antes de se culpar, tente entender se houve um motivo realmente justo que impediu a realização de algo. Ao identificar o problema, você pode adotar abordagens específicas para solucioná-lo.<br> <br>Se a sobrecarga de tarefas é o problema, a organização e a priorização adequadas podem ajudar a gerenciar a carga de trabalho.<br> <br>Vale ressaltar que identificar o problema também aumenta a conscientização e a autopercepção. Compreendendo os padrões de comportamento procrastinatórios e as causas subjacentes, você se torna mais consciente de seus próprios hábitos e tendências. Isso permite que você monitore seus padrões de pensamento e comportamento e intervenha quando a procrastinação começa a surgir.</p> <br> <br> <h2 class="result-title">Algumas fontes: <br> <br> </h2> <a class="link" target="_blank" href="https://www.napratica.org.br/dicas-como-parar-de-procrastinar/"><i class="fa-solid fa-paperclip"></i>https://www.napratica.org.br/dicas-como-parar-de-procrastinar/</a> <br>  <br> <a class="link" target="_blank" href="https://fia.com.br/blog/procrastinacao/"><i class="fa-solid fa-paperclip"></i>https://fia.com.br/blog/procrastinacao/</a>'

    } else if (totalScore() <= 10) {
        // Se a pontuação total for 10 ou menos.
        var score_info = '<h1 class="print-result">Nível <span>Baixo</span></h1>'
        var result_quest = '<h2 class="result-title">Um Olhar sobre o Autocontrole e a Consciência de Tempo</h2><p class="result-text">As pessoas com baixo nível de procrastinação demonstram uma forte capacidade de autorregulação, priorizando tarefas e mantendo o foco no cumprimento dos prazos. Para elas, a procrastinação é uma escolha intencional e não um hábito constante. Esse grupo consegue iniciar tarefas com rapidez, sente satisfação em cumprir compromissos e sabe manter o controle sobre seu tempo.</p> <br> <br> <p class="result-text">Quando surge uma tarefa desafiadora, essas pessoas buscam analisar o que é necessário e agem sem demora, aproveitando a sensação de produtividade e de dever cumprido.</p> <br> <br>'

        var result_quest2 = '<p class="result-text">Continue aproveitando esse bom senso de organização e foco! Saber equilibrar o tempo e manter o controle das atividades é um diferencial valioso. Sua dedicação ao que precisa ser feito é inspiradora, e você está no caminho certo para alcançar seus objetivos.</p>'
    }

    return { score_info, result_quest, result_quest2 };
    // Retorna os textos com base na pontuação.
}

var submit1 = document.getElementById('submit1');
// Obtém o elemento HTML do botão de envio da primeira questão.
// (Continua assim para os outros botões de envio até o submit10).
var submit2 = document.getElementById('submit2');
var submit3 = document.getElementById('submit3');
var submit4 = document.getElementById('submit4');
var submit5 = document.getElementById('submit5');
var submit6 = document.getElementById('submit6');
var submit7 = document.getElementById('submit7');
var submit8 = document.getElementById('submit8');
var submit9 = document.getElementById('submit9');
var submit10 = document.getElementById('submit10');

function nextQuestion(question_number) {
    // Função para exibir a próxima questão e ocultar a atual.
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-' + question_number);
    var el2 = document.getElementById('question-' + current_question_number);

    el.style.display = "block";
    // Exibe a questão atual.
    el2.style.display = "none";
    // Oculta a questão anterior.
}

function validateQuestion(question_number) {
    // Função para validar se a questão foi respondida.
    const selectedAnswer = answers['question' + question_number];
    if (selectedAnswer === undefined) {
        document.getElementById('question-' + question_number + '-error').style.display = 'block';
        // Exibe mensagem de erro se não houver resposta.
        return false;
    }
    document.getElementById('question-' + question_number + '-error').style.display = 'none';
    // Oculta a mensagem de erro se a resposta foi dada.
    return true;
}

submit1.addEventListener('click', function () {
    if (validateQuestion(1)) {
        nextQuestion(2);
        // Vai para a próxima questão se a atual foi respondida.
        growProgressBar('15%');
        // Atualiza a barra de progresso.
    }
});
// Continua adicionando eventos de clique para os outros botões (de submit2 até submit10).
submit2.addEventListener('click', function () {
    if (validateQuestion(2)) {
        nextQuestion(3);
        growProgressBar('20%');
    }
});
submit3.addEventListener('click', function () {
    if (validateQuestion(3)) {
        nextQuestion(4);
        growProgressBar('30%');
    }
});
submit4.addEventListener('click', function () {
    if (validateQuestion(4)) {
        nextQuestion(5);
        growProgressBar('40%');
    }
});
submit5.addEventListener('click', function () {
    if (validateQuestion(5)) {
        nextQuestion(6);
        growProgressBar('50%');
    }
});
submit6.addEventListener('click', function () {
    if (validateQuestion(6)) {
        nextQuestion(7);
        growProgressBar('60%');
    }
});
submit7.addEventListener('click', function () {
    if (validateQuestion(7)) {
        nextQuestion(8);
        growProgressBar('70%');
    }
});
submit8.addEventListener('click', function () {
    if (validateQuestion(8)) {
        nextQuestion(9);
        growProgressBar('80%');
    }
});
submit9.addEventListener('click', function () {
    if (validateQuestion(9)) {
        nextQuestion(10);
        growProgressBar('90%');
    }
});

submit10.addEventListener('click', function () {
    if (validateQuestion(10)) {
        // Garante que a última questão foi respondida.
        growProgressBar('100%');
        // Atualiza a barra de progresso para 100%.
        const { score_info, result_quest, result_quest2 } = getInfoBasedOnScore();
        // Obtém as informações baseadas na pontuação total.
        //document.getElementById("printtotalscore").innerHTML = totalScore(); 
        // Exibe a pontuação total.
        document.getElementById("printscoreinfo").innerHTML = score_info;
        // Exibe a mensagem de nível com base na pontuação.
        document.getElementById("printresultquest").innerHTML = result_quest;
        // Exibe a descrição detalhada.
        document.getElementById("printresultquest2").innerHTML = result_quest2;
        // Exibe a segunda descrição detalhada.

        document.getElementById('question-10').style.display = 'none';
        // Oculta a última questão.
        document.getElementById('question-11').style.display = 'block';
        // Exibe a tela de resultados.
        localStorage.setItem('TotalPontos', totalScore())
        console.log(localStorage.getItem('TotalPontos'))
    }
});


localStorage.getItem('TotalPontos')

function growProgressBar(percentage_width) {
    var bar = document.getElementById("progress_bar");
    bar.style.width = percentage_width;
}

ScrollReveal().reveal('.questions_box', {
    origin: 'left',
    duration: 1500,
    distance: '15%'
});

ScrollReveal().reveal('.two-thirds.column', {
    origin: 'left',
    duration: 1500,
    distance: '15%'
});

window.onload = function () {
    console.log('Login', localStorage.getItem('login'))
    if (localStorage.getItem('login') != '')
        window.location.href = "../ResultadoQuestionário/resultquest.html";
}


