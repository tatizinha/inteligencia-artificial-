const perguntas = [
    {
    enunciado: "vocễ tem facilidade com o aplicativo vscode.dev?",
    alternativas: [
    "não",
    "sim"
    ]
    },
    {
    enunciado: "oque você acha sobre o mundo tecnológico em que vivemos?",
    alternativas: [
    "incrível.",
    "péssimo."
    ]
    },
    {
    enunciado: "em relação as escolas, na sua opinião o uso de tecnologias como slides cobre o papel de professor?", alternativas: [
    "concerteza é melhor para o aprendizado.",
    "não, nenhuma tecnologia pode influenciar na presença dos professores."
    ]
    },
    {
    enunciado: "na sua opinião, a inteligência artificial influência no aprendizado",
    alternativas: [
    "sim.",
    "não."
    ]
    
    },
    {
    enunciado: "se um slide não funciona, oque voce faria?",
    alternativas: [
    "improviso.",
    "nao apresento."
    ]
    }
    ];
    let atual = 0;
    let perguntaAtual;
    const caixaPerguntas = document.getElementById('caixaPerguntas');
    const alternativasContainer = document.getElementById('alternativas');
    function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    alternativasContainer.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
    const button = document.createElement('button');
    button.textContent = alternativa;
    button.addEventListener('click', () => {
    atual++;
    if (atual < perguntas.length) {
    mostraPergunta();
    } else {
    caixaPerguntas.textContent = 'Você completou o questionário!';
    alternativasContainer.innerHTML = '';
    }
    });
    alternativasContainer.appendChild(button);
    });
    }
    mostraPergunta();
