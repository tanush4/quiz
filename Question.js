class  Question {
  constructor() {
    this.title=createElement('h2')
    this.question=createElement('h2')
    this.option1=createElement('h3')
    this.option2=createElement('h3')
    this.option3=createElement('h3')
    this.option4=createElement('h3')
    this.input=createInput("YOUR ANSWER")
    this.input2=createInput("YOUR NAME")
    this.button=createButton("SUBMIT")
  }
hide(){
  this.title.hide()
  this.input.hide();
  this.input2.hide()
  this.button.hide();
}
  display(){
   background("lightblue")
    this.title.html("AVENGERS QUIZ");
    this.title.position(120, 0);
    
    this.question.html("QUESTION:- WHO HAS DIRECTED AVENGERS ENDGAME??");
    this.question.position(10, 40);
    
    this.option1.html("1: ROBERT DOWNRY JR. AND CHRIS EVANS");
    this.option1.position(100, 100);
    this.option2.html("2: JOE RUSSO AND ANTHONY RUSSO");
    this.option2.position(100, 120);
    this.option3.html("3: SCARLETT JOHNSSON AND GEREMY RENNER");
    this.option3.position(100, 140);
    this.option4.html("4: CHRIS HEMSWORTH AND MARK RUFFALO");
    this.option4.position(100, 160);
    this.input.position(120,300)
    this.input2.position(300,300)
    this.button.position(250,340)
    this.button.mousePressed(()=>{
      this.title.hide()
      this.input.hide();
      this.input2.hide();
      this.button.hide();
      player.name = this.input2.value();
      player.answer=this.input.value()
      playerCount+=1;
      player.index=playerCount;
      player.update();
      player.updateCount(playerCount);
     
     
    });
  
  }
}
