var correctAnswer = 0;
var incorrectAnswer = 0;
var noAnswer = 0;
var countTime = 30;
var countQuestions =

var quizContent = [
    {
        question: "Who were Harry Potter's parents?",
        choices: ["James and Lilly","Tom and Margaret","William and Mary","Henry and Elizabeth"],
        theAnswer: "James and Lilly"
    }, 

    {   
        question: "Which creatures guard Azkaban, the Wizarding prison?",
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

var quizBox = $("#quiz-area");
var showQuestion;
var count= 0,

$("#start-quiz").click(function(){
$(this).hide();
counter = setInterval(timer, 3000);
showQuestion();
});

function timer(){
countTime--;
if (count <= 0) {
    clearInterval(countTime);
    return;
}
$("#timer").html(`Time remaining: 00: ${countTime} seconds`);
}








///console.log(quizContent[3]); >> entire object in index
///console.log(quizContent[3].question); >> the property to the key for question
///console.log(quizContent[3].choices); >> the property to the key for choice, an array
///console.log(quizContent[3].theAnswer); >> the property to the key theAnswer 


