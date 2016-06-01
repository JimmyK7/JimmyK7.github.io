var score = 0;
var scoreText;

function create() {
    
    game.physics.startSystem(Phaser.Physics.NINJA);
    game.physics.ninja.gravity = 1;
    game.physics.ninja.setBoundsToWorld();
    game.add.image(0, 0, 'sky');
	game.add.image(0, 606, 'ground');
    platforms = game.add.group();
    var ground = platforms.create(0, game.world.height - 606, 'ground');
    ground.scale.setTo(2, 2);
    game.physics.ninja.enable(ground);
    ground.body.immovable = true;
    ground.body.gravityScale = 0;
    player = game.add.sprite(200, game.world.height - 400, 'trump');
    game.physics.ninja.enable(player);
    player.body.bounce = 0;
    player.body.collideWorldBounds = true;
    var count = 0;
    cursors = game.input.keyboard.createCursorKeys();

}

function update() {

    game.physics.ninja.collide(player, platforms);

    if (cursors.up.isDown)
    {
        player.body.moveUp(350);
        player.body.moveDown(350)
    }
    if(cursors.down.isDown)
    {
        player.
    }

}