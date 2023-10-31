/*QUESTOES FINALIZADAS. Pensar se vou colocar mais perguntas se o jogo for resetado e talvez embaralhar fazendo Shuffe*/

const questoes = [{ //sera array [] e dentro dela vou colocar varios objetos com as perguntas e respostas.
        questao: "What is the name of the Mexican currency?",
        alternativas: [{
                texto: "Dollar"
            },
            {
                texto: "Rubel"
            },
            {
                texto: "Real"
            },
            {
                texto:"Peso",   
                correct: true,
                valor: 50
            }
        ]
    },
    {
            questao: "What is the zodiac sign of someone born on New Year's Day?",
            alternativas: [{
                texto: "Scorpio"
            },
            {
                texto: "Cancer"
            },
            {
                texto: "Capricorn"
                correct: true,
                valor: 100
            },
            {
                texto: "Aries"
            }
        ]
    }, {
            questao: "Which film won the most Oscars?",
            alternativas: [{
                texto: "Lord of the Rings: The Return of the Kingo"
            },
            {
                texto: "Avatar"
            },
            {
                texto: "Titanic"
                correct: true,
                valor: 150
            },
            {
                texto: "West Side Story"
            }
        ]
    }, {
            questao: "What is the meaning of the abbreviation HTTP?",
            alternativas: [{
                texto: "Hypertext Transfer Protocol"
                correct: true,
                valor: 200
            },
            {
                texto: "Hypertext Transmission Protocol"
            },
            {
                texto: "Hyperlink Transfer Protocol"     
            },
            {
                texto: "Hyperlink Transmission Protocol"
            }
        ]
    }, {
            questao: "How many states share a border with Germany",
            alternativas: [{
                texto: "8"
            },
            {
                texto: "7"
            },
            {
                texto: "11"     
            },
            {
                texto: "9"
                correct: true,
                valor: 500
            }
        ]
    }, {
            questao: "What is the name of the capital of Brazil?",
            alternativas: [{
                texto: "Sao Paulo"
            },
            {
                texto: "Curitiba"
            },
            {
                texto: "Brasilia" 
                correct: true,
                valor: 600    
            },
            {
                texto: "Rio de Janeiro"
            }
        ]
    }, {
            questao: "How many days does the month of February have in 2024?",
            alternativas: [{
                texto: "28"
            },
            {
                texto: "29"
                correct: true,
                valor: 700
            },
            {
                texto: "30"                
            },
            {
                texto: "31"
            }
        ]
    },  {

            questao: "To which continent does Bhutan belong?",
            alternativas: [{
                texto: "Asia"
                correct: true,
                valor: 800
            },
            {
                texto: "Africa"
            },
            {
                texto: "Europe"     
            },
            {
                texto: "South America"
            }
        ]
    }

]