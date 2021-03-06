module Spaceroni {

    export class Level1 extends Phaser.State {

        background: Phaser.Sprite;
        music: Phaser.Sound;
        player: Spaceroni.Player;
        enemies: Spaceroni.Enemies;

        create() {

            this.game.add.tileSprite(0, 0, 1920, 1920, 'debug');

            //this.music = this.add.audio('music', 1, false);
            //this.music.play();
            this.player = new Player(this.game, 130, 284);

            this.game.camera.follow(this.player, Phaser.Camera.FOLLOW_LOCKON, 0.1, 0.1);

            this.enemies = new Enemies(this.game, 10);

        }

        render() {

            //this.game.debug.cameraInfo(this.game.camera, 500, 32);

        }

        }

}