const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com uma nova tecnologia, um chat que consegue responder todas as dúvidas que uma pessoa pode ter, ele também gera imagens e áudios hiper-realistas. Qual o primeiro pensamento?",
        alternativas: [
            {
                texto: "Isso é assustador",
                afirmacao: "Você fica preocupado com os impactos que a inteligência artificial pode causar."
            },
            {
                texto: "Isso é maravilhoso",
                afirmacao: "Você fica impressionado com as possibilidades que a inteligência artificial oferece."
            }
        ]
    },

    {
        enunciado: "Você percebe que a inteligência artificial pode ajudar nos estudos. Como você decide utilizá-la?",
        alternativas: [
            {
                texto: "Usar para aprender",
                afirmacao: "Você usa a inteligência artificial como uma ferramenta para aprender novos conteúdos."
            },
            {
                texto: "Fazer tudo pela IA",
                afirmacao: "Você começa a depender da inteligência artificial para realizar suas atividades."
            }
        ]
    },

    {
        enunciado: "A inteligência artificial começa a criar músicas, pinturas e filmes. O que você pensa sobre isso?",
        alternativas: [
            {
                texto: "A arte ficou mais acessível",
                afirmacao: "Você acredita que a IA pode ajudar mais pessoas a criar e conhecer diferentes formas de arte."
            },
            {
                texto: "A arte deve ser humana",
                afirmacao: "Você acredita que a criatividade e a expressão humana devem continuar no centro da cultura."
            }
        ]
    },

    {
        enunciado: "Uma empresa oferece um trabalho para você, mas grande parte das tarefas será realizada por inteligência artificial. O que você faz?",
        alternativas: [
            {
                texto: "Aceito e aprendo a usar a IA",
                afirmacao: "Você decide aprender novas habilidades e trabalhar junto com a tecnologia."
            },
            {
                texto: "Prefiro um trabalho sem IA",
                afirmacao: "Você prefere preservar atividades profissionais que dependam principalmente das capacidades humanas."
            }
        ]
    },

    {
        enunciado: "Você descobre que uma inteligência artificial consegue criar imagens muito parecidas com obras de artistas reais. Qual decisão você tomaria?",
        alternativas: [
            {
                texto: "Criar regras para proteger artistas",
                afirmacao: "Você defende regras para proteger os direitos e a criatividade dos artistas."
            },
            {
                texto: "Deixar a tecnologia evoluir livremente",
                afirmacao: "Você acredita que a evolução tecnológica deve continuar mesmo trazendo novos desafios para a cultura."
            }
        ]
    },

    {
        enunciado: "No futuro, muitas pessoas passam a consumir conteúdos criados por inteligência artificial. Como você reage?",
        alternativas: [
            {
                texto: "Continuo valorizando conteúdos humanos",
                afirmacao: "Você procura equilibrar as novas tecnologias com obras produzidas por pessoas."
            },
            {
                texto: "Consumo principalmente conteúdos de IA",
                afirmacao: "Você abraça as novas formas de entretenimento criadas pela inteligência artificial."
            }
        ]
    },

    {
        enunciado: "A inteligência artificial começa a preservar idiomas, histórias e tradições que estavam desaparecendo. O que você decide?",
        alternativas: [
            {
                texto: "Usar a IA para preservar culturas",
                afirmacao: "Você acredita que a inteligência artificial pode ser uma importante ferramenta para preservar a diversidade cultural."
            },
            {
                texto: "Preservar de forma tradicional",
                afirmacao: "Você acredita que comunidades e pessoas devem ser as principais responsáveis por preservar suas próprias tradições."
            }
        ]
    },

    {
        enunciado: "Finalmente, você precisa decidir como será o futuro da cultura em 2049. Qual caminho você escolhe?",
        alternativas: [
            {
                texto: "Tecnologia e humanidade juntas",
                afirmacao: "Você escolhe um futuro em que a inteligência artificial e as pessoas trabalham juntas, usando a tecnologia sem deixar de valorizar a criatividade humana."
            },
            {
                texto: "Cultura principalmente humana",
                afirmacao: "Você escolhe um futuro em que a tecnologia ajuda, mas a criatividade, a arte e as decisões culturais continuam principalmente nas mãos das pessoas."
            }
        ]
    }
];

function mostraPergunta() {

    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }

    perguntaAtual = perguntas[atual];

    caixaPerguntas.textContent = perguntaAtual.enunciado;

    caixaAlternativas.textContent = "";

    mostraAlternativas();
}

function mostraAlternativas() {

    for (const alternativa of perguntaAtual.alternativas) {

        const botaoAlternativa = document.createElement("button");

        botaoAlternativa.textContent = alternativa.texto;

        botaoAlternativa.addEventListener("click", () => {
            respostaSelecionada(alternativa);
        });

        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada) {

    const afirmacao = opcaoSelecionada.afirmacao;

    historiaFinal += afirmacao + " ";

    atual++;

    mostraPergunta();
}

function mostraResultado() {

    caixaPerguntas.textContent = "Em 2049...";

    textoResultado.textContent = historiaFinal;

    caixaAlternativas.textContent = "";
}

mostraPergunta();
