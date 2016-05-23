TrumpJump.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

TrumpJump.Preloader.prototype = {
	
	preload: function () {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
        this.load.image('title', 'images/title.png');
        this.load.image('hillary', 'images/hillary.gif', 32, 32);
        this.load.image('trump', 'images/DonaldTrump.jpg', 128, 217);
        this.load.spritesheet('crouchjump', 'images/CrouchJump.png', 128, 128);
        this.load.image('bernie', 'images/bernie.jpg', 32, 32);
        this.load.image('background', 'images/background.jpg')
    },

	create: function () {
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
        if(this.cache.isSoundDecoded('game_audio') && this.ready == false) {
	   	    this.ready = true;
            this.state.start('StartMenu'); 
    },
};