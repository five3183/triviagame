questionArray = [
     q0 = {"QUESTION" : "What two characters from the Walking Dead TV Show do not appear in the comic books?", "choiceArray" : ["Deanna and Aaron", "Tyreese and Sasha", "Daryl and Merle", "Glenn and Maggie"], "correctAnswer" :"Daryl and Merle"},
     q1 = {"QUESTION" : "What was the first name of Michonne's son?", "choiceArray" : ["Alan", "Anthony", "Andre", "Peter"], "correctAnswer": "Andre"},
     q2 = {"QUESTION" : "Who was the first person to call the zombies Walkers?", "choiceArray" : ["Rick", "Morgan", "Shane", "Andrea"], "correctAnswer": "Morgan"},
     q3 = {"QUESTION" : "The hostage exchange for Beth and Carol took place in which hospital?", "choiceArray" : ["Piedmont Atlanta Hospital", "Emory University Hospital", "Grady Memorial Hospital", "Atlanta Medical Center"], "correctAnswer": "Grady Memorial Hospital"},
     q4 = {"QUESTION" : "What number did Shane have on his chain?", "choiceArray" : ["18", "34", "12", "22"], "correctAnswer": "22"},
     q5 = {"QUESTION" : "What does Rick use to kill his first Walker?", "choiceArray" : ["A shotgun", "A revolver", "A rifle", "A baseball bat"], "correctAnswer": "A baseball bat"},
     q6 = {"QUESTION" : "What does Daryl say before he shoots Dale?", "choiceArray" : ["Bye, Buddy", "Sorry, Brother", "He doesn't say anything", "Rest in peace"], "correctAnswer": "Sorry, Brother"},
     q7 = {"QUESTION" : "Eric gave Aaron a license plate for his collection from which state?", "choiceArray" : ["Alaska", "Ohio", "Illinois", "Michigan"], "correctAnswer": "Alaska"},
     q8 = {"QUESTION" : "What's the name of the community Noah's family lived in?", "choiceArray" : ["Wiltshire Estates", "Society Estates", "Terminus", "Shirewilt Estates"], "correctAnswer": "Shirewilt Estates"},
     q9 = {"QUESTION" : "Who does Rick first meet?", "choiceArray" : ["Glenn", "Daryl", "Morgan", "Shane"], "correctAnswer": "Morgan"},

];

var timeRemaining;
var answersCorrect = 0;
var answersIncorrect = 0;

// i is an index number bound to the question number
i = 0;
var time = 10;

//Function to pull new questions from the array
function newQuestion () {
    time = 10;
    if ( i < questionArray.length) {
        $("#QUESTION").text(questionArray[i].QUESTION);
        $("#answer0").text(questionArray[i].choiceArray[0]);
        $("#answer1").text(questionArray[i].choiceArray[1]);
        $("#answer2").text(questionArray[i].choiceArray[2]);
        $("#answer3").text(questionArray[i].choiceArray[3]);
    }
    else {
        console.log("Correct Answers " + answersCorrect);
        console.log("Incorrect Answers " + answersIncorrect);
    }   
}
//Set up clicks for the buttons
$("#answer0").on("click", function() {
    userChoice = (questionArray[i].choiceArray[0]);
    console.log(userChoice);
    checkGuess();

});
$("#answer1").on("click", function() {
    userChoice = (questionArray[i].choiceArray[1]);
    console.log(userChoice);
    checkGuess();

});
$("#answer2").on("click", function() {
    userChoice = (questionArray[i].choiceArray[2]);
    console.log(userChoice);
    checkGuess();

});
$("#answer3").on("click", function() {
    userChoice = (questionArray[i].choiceArray[3]);
    console.log(userChoice);
    checkGuess();

});

//Function to compare the user guess with the correct answer
function checkGuess() {
    if (userChoice === (questionArray[i].correctAnswer)){
        console.log("right Answer");
        answersCorrect++;
        console.log(answersCorrect)
        i++;
        newQuestion();
        endGame();
    }
    else{
        console.log("wrong answer")
        answersIncorrect++;
        console.log(answersIncorrect)
        i++;
        newQuestion();
        endGame();
    }
}

//Function to start the timer
function startTimer() {
    if (i < questionArray.length){
        $("#TIME").text(time + " Seconds");
        time--;
        setTimeout(startTimer, 1000);
        if (time < 0) {
            answersIncorrect++;
            console.log(answersIncorrect)
            i++;
            endGame();
            newQuestion();
        }
    }
}
//end game function to prompt alert
function endGame() {
    if ((answersCorrect + answersIncorrect) === questionArray.length) {
        alert("Number of Answers Correct: " + answersCorrect)
    }
}
//Start Game
$(document).ready(function() {
    startTimer();
    newQuestion ();
});