function Game () {

};
  var frame = []
  var roll = 0;
  var pinTotal = 10;
  var round = []
  var score = 0;
  var gameNumber = 0;
  var strike = false

Game.prototype.bowl = function(pins) {
  // first throw
  if(round.length === gameNumber && pinTotal === 10 && pins !== 10){
    pinTotal -= pins
    frame[roll] = pins
    roll ++
    score += pins;
  } 
// second throw
  else if(round.length === gameNumber && pinTotal !== 10){
      if(strike === true && pinTotal !== 10) {
        frame[roll] = pins
        roll ++
        var bonusStrike = frame[roll - 2] + frame[roll - 1]
        round[gameNumber -1] = (10 + pins + score)
        score += 10 + bonusStrike + pins;
        round[gameNumber] = score
        strike = false
        gameNumber ++
        pinTotal = 10
      } else {
    frame[roll] = pins
    roll ++
    score += pins;
    round[gameNumber] = score
    gameNumber ++
    pinTotal = 10}
// strike
  } else if(round.length === gameNumber && pins === 10) {
    frame[roll] = 10
    frame[roll + 1] = 0
    roll += 2
    round[gameNumber] = "x"
    strike = true
    gameNumber ++
  }
  // strike bonus
  else {
  return "you fucked it mate"
  };

};


game = new Game
game.bowl(6)
game.bowl(2)
game.bowl(10)
game.bowl(8)
game.bowl(1)
game.bowl(10)
game.bowl(8)
game.bowl(1)

Game.prototype.strikeBonus = function(frame){
  return this.frame[roll + 1] + this.frame[roll + 2];
};
