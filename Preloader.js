BunnyDefender.Preloader = function(game) {
    this.preloadBar = null;
    this.titleText = null;
    this.ready = false;
};

BunnyDefender.Preloader.prototype = {
	
	preload: function () {
		this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, 'preloaderBar');
		this.preloadBar.anchor.setTo(0.5, 0.5);
		this.load.setPreloadSprite(this.preloadBar);
		this.titleText = this.add.image(this.world.centerX, this.world.centerY-220, 'titleimage');
		this.titleText.anchor.setTo(0.5, 0.5);
        this.load.image('bullet', 'Assets/Sprites/Bullet.png');
        this.load.image('enemyBullet', 'Assets/Sprites/enemy-bullet.png');
        this.load.image('invader', 'Assets/Sprites/hillary.gif', 32, 32);
        this.load.image('ship', 'Assets/Sprites/DonaldTrump.jpg');
        this.load.spritesheet('kaboom', 'Assets/Sprites/explode.png', 128, 128);
        this.load.image('background', 'Assets/Sprites/Background.jpg');


    },

	create: function () {
		this.preloadBar.cropEnabled = false;
	},

	update: function () {
        if(this.cache.isSoundDecoded('game_audio') && this.ready == false) {
	   	    this.ready = true;
            this.state.start('StartMenu'); 
    }
};