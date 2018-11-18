
///hide timer no countdown until click start
///display questions and timer when click start
///beginning stats 0 to increment, timer 30 to decrement
//show next question when answer clicked or time up
//incorrect ++ if time up or wrong choice.  show right answer 
//correct++
//methods startQuiz confirmAnswer 
$("#start-quiz").on("click", quizContent.startQuiz);


var quizContent = {
    timerCount: 30,
    timerStart: false,
    correct: 0,
    incorrect: 0,

    questions: {

        no1: "Who were Harry Potter's parents?",
        no2: "What type of creatures guard the wizarding prison Azkaban?",
        no3: "What is Lord Voldemort's true identity?", 
        no4: "Which of Harry's friends becomes a professor at Hogwarts?",
        no5: "What are the three Unforgiveable Curses?",
        no6: "Professor Lupin, Harry's 3rd Year Defense Against the Dark Arts teacher is revealed to be half... :",
        no7: "What magical creature snuck into Hogwarts on Halloween during Harry's first year?",
        no8: "How many points are awarded in for catching the Golden Snitch?"
    },

    choices: {

        no1: ["James and Lilly","Tom and Margaret","William and Mary","Henry and Elizabeth"],
        no2: ["Animagi","Dementors","Death Eaters","Hippogriffs"],
        no3: ["Lucius Malfoy","Gellert Grindelwald", "Tom Riddle","Sirius Black"],
        no4: ["Hermione Granger","Cho Chang","Cedric Diggory","Neville Longbottom"], 
        no5: ["Avada Kedavra, Expecto Patronum, and Imperio","Expelliarmus, Obliviate, and Sectumsempra","Avada Kedavra, Crucio, and Imperio","Accio, Crucio, and Riddikulus"],
        no6: ["Werewolf","Muggle","Vampire","Giant"],
        no7: ["Basilisk","Acromantula","Troll","Dragon"],
        no8: ["200","30", "150", "75"]
    },

    correctChoices: {

        no1: "James and Lilly",
        no2: "Death Eaters",
        no3: "Tom Riddle",
        no4: "Neville Longbottom",
        no5: "Avada Kedavra, Crucio, and Imperio",
        no6: "Werewolf",
        no7: "Troll",
        no8: "150"
    },

    startQuiz:,

    startTimer:,

    checkAnswer:,

    nextQuestion:,



   
}
 



