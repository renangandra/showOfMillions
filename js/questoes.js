/***QUESTOES FINALIZADAS. Pensar se vou colocar mais perguntas se o jogo for resetado e talvez embaralhar fazendo Shuffe***/

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
                texto: "Peso",   
                correct: true,
                valor: 25
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
                texto: "Capricorn",
                correct: true,
                valor: 50
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
                texto: "Titanic",
                correct: true,
                valor: 75
            },
            {
                texto: "Avatar" 
            },
            {
                texto: "West Side Story"
            }
        ]
    }, {
            questao: "What is the meaning of the abbreviation HTTP?",
            alternativas: [{
                texto: "Hypertext Transfer Protocol",
                correct: true,
                valor: 100
            },
            {
                texto: "Hyperlink Transfer Protocol"
            },
            {
                texto:  "Hypertext Transmission Protocol"    
            },
            {
                texto: "Hyperlink Transmission Protocol"
            }
        ]
    }, {
            questao: "How many states share a border with Germany",
            alternativas: [{
                texto: "11"
                
            },
            {
                texto: "7"
            },
            {
                texto: "8"     
            },
            {
                texto: "9",
                correct: true,
                valor: 125
            }
        ]
    
        
    }, {
            questao: "What is the name of the capital of Brazil?",
            alternativas: [{
                texto: "São Paulo"
            },
            {
                texto: "Curitiba"
            },
            {
                texto: "Rio de Janeiro"     
            },
            {
                texto: "Brasília",
                correct: true,
                valor: 150
            }
        ]
    }, {
            questao: "How many days does the month of February have in 2024?",
            alternativas: [{
                texto: "28"
            },
            {
                texto: "29",
                correct: true,
                valor: 175
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
                texto: "Asia",
                correct: true,
                valor: 300
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