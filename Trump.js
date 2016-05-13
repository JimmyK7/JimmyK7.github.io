var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    game.load.image('trump', 'images\DonaldTrump.jpg');
    game.load.image('bernie', 'images\bernie.jpg');
    game.load.image('hillary', 'images\hillary.gif', 32, 32);
    game.load.image('background', 'images\DonaldTrump.jpg');

}

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var score = 0;
var scoreText;

//function preload() {
//
//    game.load.image('sky', 'assets/skies/sky1.png');
//    game.load.image('ground', 'assets/sprites/platform.png');
//    game.load.spritesheet('dude', 'assets/games/starstruck/dude.png', 32, 48);
//    game.load.image('diamond', 'assets/sprites/diamond.png');
//
//}

function create() {

    game.physics.startSystem(Phaser.Physics.NINJA);
    game.physics.ninja.gravity = 1;
    game.physics.ninja.setBoundsToWorld();
    game.add.image('background')
    platforms = game.add.group();
    var ground = platforms.create(0, game.world.height - 64, 'ground');
    ground.scale.setTo(2, 2);
    game.physics.ninja.enable(ground);
    ground.body.immovable = true;
    ground.body.gravityScale = 0;
    player = game.add.sprite(64, game.world.height - 150, 'trump');
    game.physics.ninja.enable(player);
    player.body.bounce = 0;
    player.body.friction = 0.5;
    player.body.collideWorldBounds = true;
    var count = 0;
    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    game.physics.ninja.collide(player, platforms);

    if (cursors.up.isDown)
    {
        player.body.moveUp(350) for 1;
        
    }

}