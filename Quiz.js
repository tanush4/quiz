class Quiz {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }
  
  play()
  {
    quiz.hide();
    background(0,133,128)
         textSize(30);
   text("RESULT",120,100);
         Player.getPlayerInfo();
       
         
     }
    
  async start()
  {
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount=playerCountRef.val();
        player.getCount();
      }
     
       question = new Question()
      question.display();
    }


  }
  play() 
  {
    question.hide()
   background("lightgreen")
   fill("green")
    textSize(30);
    text("RESULT FOR THE QUIZ",120,30);
    Player.getPlayerInfo();

    if(allPlayers!==undefined){
      var display_position=350;
      fill("blue")
      textSize(15)
      text("THE NAME OF PLAYER WHO HAS GIVEN RIGHT ANSWER IS HIGHLIGHTED IN GREEN COLOUR",5,300)
      for(var plr in  allPlayers){
        var correctAns="2"
        if(correctAns===allPlayers[plr].answer)
          fill("green")
        else fill("red");
        display_position+=20
        textSize(15);
        text(allPlayers[plr].name+" :"+allPlayers[plr].answer,120,display_position)
      }
    }
  }
}
    
    



