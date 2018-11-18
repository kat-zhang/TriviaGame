

var quizContent = {
 timerCount: 30,
 timerStart: false,
 correct: 0,
 incorrect: 0 ,

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
    no7: ["Basilisk","Acromantula","Troll","Dragon"]
    no8:
},

correctChoices: {
    no1: "James and Lilly",
    no2: "Death Eaters",
    no3: "Tom Riddle",
    no4: "Neville Longbottom",
    no5: "Avada Kedavra, Crucio, and Imperio",
    no6: "Werewolf"
    no7: "Troll",
    no8: "150"
},



//console.log(correctChoices);

// function startQuiz(){

// }



///console.log(quizContent[3]); >> entire object in index
///console.log(quizContent[3].question); >> the property to the key for question
///console.log(quizContent[3].choices); >> the property to the key for choice, an array
///console.log(quizContent[3].theAnswer); >> the property to the key theAnswer 


