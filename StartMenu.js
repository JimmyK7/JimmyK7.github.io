TrumpJump.StartMenu = function(game) {
    this.startBG;
    this.startPrompt;
    this.ding
}

TrumpJump.Startmenu.prototype = 
	
create; function () { 
	this.ding = this.add.audio('select_audio')
	
	startBG = this.add.image(0, 0, 'titlescreen);
	startBG.inputEnabled = true;
	startBG.events.onInputDown.addOnce(this.startgame, this);
	
	
	startPrompt = this.add.bitmapText(this.world.centerX-155, this.world.centerY+100, 'eightbitwonder', 'Touch to Start!', 24);
	
	
}, 
	startGame: function (pointer) {
	this.ding.play();
	this.state.start('Game');
  }
	
}; 