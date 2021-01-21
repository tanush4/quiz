var canvas

var gameState = 0;
var playerCount;
var allPlayers;
var database;

var quiz, player,question;


function setup(){
  canvas = createCanvas(690,600);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
quiz.start();
}


function draw(){
  if(playerCount===4){
    quiz.update(1);
  }
  if(gameState===1){
    clear();
    quiz.play();
    
  }
}
