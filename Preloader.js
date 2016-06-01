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
        this.load.image('title', 'images/title.png', 1280, 720);
        this.load.image('hillary', 'images/hillary.gif', 50, 50);
        this.load.image('trump', 'images/DonaldTrump.jpg', 50, 100);
        this.load.image('crouchjump', 'images/CrouchJump.jpg', 50, 50);
        this.load.image('bernie', 'images/bernie.jpg', 50, 50);
        this.load.image('sky', 'images/sky.jpg', 1280, 606);
		this.load.image('ground', 'images/ground.jpg', 1280, 114);
    },

	create: function () {
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
        if(this.ready == false) {
	   	    this.ready = true;
            this.state.start('StartMenu'); 
        },
    }
};