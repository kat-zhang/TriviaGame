var quizContent = [

    { 
        question: "Who were Harry Potter's parents?",
        choices: ["James and Lilly","Tom and Margaret","William and Mary","Henry and Elizabeth"],
        theAnswer: "James and Lilly"
    }, 
    
    {   
        question: "Which creatures guard the Wizards' prison called Azkaban?",
        choices: ["Animagi","Dementors","Death Eaters","Hippogriffs"],
        theAnswer: "Death Eaters"
    }, 
    
    {   
        question: "What is Lord Voldemort's true identity?",
        choices: ["Lucius Malfoy","Gellert Grindelwald", "Tom Riddle","Sirius Black"],
        theAnswer: "Tom Riddle"
    }, 
    
    {   
        question: "Which of Harry's friends becomes a professor at Hogwarts?",
        choices: ["Hermione Granger","Cho Chang","Cedric Diggory","Neville Longbottom"], 
        theAnswer: "Neville Longbottom"
    }, 
    
    {   
        question: "What are the three Unforgiveable Curses?",
        choices: ["Avada Kedavra, Expecto Patronum, and Imperio",
        "Expelliarmus, Obliviate, and Sectumsempra",
        "Avada Kedavra, Crucio, and Imperio",
        "Accio, Crucio, and Riddikulus"],
        theAnswer: "Avada Kedavra, Crucio, and Imperio"
    }, 
    
    {   
        question: "Professor Lupin, Harry's 3rd Year Defense Against the Dark Arts teacher is revealed to be half... :",
        choices: ["Werewolf","Muggle","Vampire","Giant"],
        theAnswer: "Werewolf"
    }, 
    
    {   
        question: "How many points are awarded in for catching the Golden Snitch?",
        choices: ["500","150","70","30"],
        theAnswer: "150"
    }, 
    
    {   
        question: "What magical creature snuck into Hogwarts on Halloween during Harry's first year?",
        choices: ["Basilisk","Acromantula","Troll","Dragon"],
        theAnswer: "Troll"
    } 
   
];





$("#start-quiz").on("click", renderQuestions);
$("#start-quiz").on("click", renderChoices);

function renderQuestions () {

    $("#q1").text(quizContent[0].question);
    $("#q2").text(quizContent[1].question);
    $("#q3").text(quizContent[2].question);
    $("#q4").text(quizContent[3].question);
    $("#q5").text(quizContent[4].question);
    $("#q6").text(quizContent[5].question);
    $("#q7").text(quizContent[6].question);
    $("#q8").text(quizContent[7].question);
    
    
};

function renderChoices () {

    $("#q1a1").text(quizContent[0].choices[0]);
    $("#q1a2").text(quizContent[0].choices[1]);
    $("#q1a3").text(quizContent[0].choices[2]);
    $("#q1a4").text(quizContent[0].choices[3]);
    
    $("#q2a1").text(quizContent[1].choices[0]);
    $("#q2a2").text(quizContent[1].choices[1]);
    $("#q2a3").text(quizContent[1].choices[2]);
    $("#q2a4").text(quizContent[1].choices[3]);
};





console.log(quizContent[3].choices[1]);
// function renderQuestions
// var q = $("<p>");
// q.addClass("question");






