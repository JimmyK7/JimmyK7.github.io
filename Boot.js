var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });
var TrumpJump = {}
var score = 0;
var scoreText;

preload: function () {
    this.load.image('background', 'C:\Users\1305864\Google Drive\JimmyK7.github.io\trumpjump\background.jpg');
    this.load.spritesheet('trump', 'C:\Users\1305864\Google Drive\JimmyK7.github.io\trumpjump\DonaldTrump.jpg', 32, 48);
    this.load.image('hillary', 'C:\Users\1305864\Google Drive\JimmyK7.github.io\trumpjump\hillary.gif');
},

TrumpJump.Boot = function (game) {};
TrumpJump.Boot.prototype = {
    
    create: function () {
        this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = false;
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.minWidth = 800;
		this.scale.minHeight = 600;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
		this.stage.forceLandscape = true;
		this.scale.setScreenSize(true);
		this.input.addPointer();
		this.stage.backgroundImage = 'C:\Users\1305864\Google Drive\trump jump\trumpjump\images\TRUMPJUMPBACKGROUND.jpg';
        this.state.start ("Preloader")
    }
}