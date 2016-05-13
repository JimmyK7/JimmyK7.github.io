var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update });

var score = 0;
var scoreText;

function preload() {
    game.load.image('background', 'C:\Users\1305864\Google Drive\JimmyK7.github.io\trumpjump\background.jpg');
    game.load.spritesheet('trump', 'C:\Users\1305864\Google Drive\JimmyK7.github.io\trumpjump\DonaldTrump.jpg', 32, 48);
    game.load.image('hillary', 'C:\Users\1305864\Google Drive\JimmyK7.github.io\trumpjump\hillary.gif');

}

