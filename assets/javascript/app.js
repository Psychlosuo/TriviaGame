$( document ).ready(function() {
    console.log( "ready!" );
});

var q1=["junior mints", "toblerone", "candy corn", "gummy bears"];
var q2=["surgeon", "dentist", "optomotrist", "pediatrician"];
var q3=["sushi", "octopus", "sake", "ginger"];
var q4=["mugs and mogues", "matt and matt", "mars and murrie", "milk and malt"]
var q5=["100 million", "500,000", "30 million", "64 million"]
var correctGuess = [];
var incorrectGuess = [];
var unanswered = [];
var timeCounter = [];
var newGame = [];

//make a button click that changes startPage to mainPage then main page to finishPage, then restart//
$('.mainPage').hide();
    $('.finishPage').hide();

$('#startBtn').on('click', function (){
    $('.mainPage').show(); $('.startPage').hide()
});

$('#midBtn').on('click', function (){
    $('.mainPage').hide(); $('.finishPage').show()
});

$('#restartBtn').on('click', function (){
    location.reload(true);
})


//create a button click using jquery for each question//

//return right or wrong answer to each question//
//push the guess to the correctanswer, incorrectanswer, unanswered ids on finishpage//
//create a timer//
//when the timer is completed show the finishPage//
//create an output on finish page of right wrong and unanswered
