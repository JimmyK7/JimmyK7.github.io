var TrumpJump = {}
var score = 0;
var scoreText;

TrumpJump.Boot = function (game) {};
TrumpJump.Boot.prototype = {
preload: function () {
    this.load.image('background', 'images\title.png');
    this.load.spritesheet('preloaderBar', 'images\loader_bar.png');
},


    
    create: function () {
        this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = false;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 1280;
		this.scale.minHeight = 720;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forceLandscape = true;
		this.scale.setScreenSize(true);
		this.input.addPointer();
		this.stage.backgroundImage = 'images\title.png';
        this.state.start ("Preloader")
    }
};