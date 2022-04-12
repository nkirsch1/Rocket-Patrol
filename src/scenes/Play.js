class Play extends Phaser.Scene {
    constructor() {
        super("play");
    }

    preload() {
        this.load.image('starfield', 'assets/starfield.png');
        this.load.image('rocket', 'assets/rocket.png');
    }

create() {


    keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
    keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);


    this.starfield = this.add.tileSprite(0, 0, 640, 480, 'starfield').setOrigin(0,0);
    
    this.add.rectangle(0, borderUISize, config.width, borderUISize*2, 0x00FF00).setOrigin(0,0)

    this.add.rectangle(0, 0, config.width, borderUISize, 0xFFFFFF).setOrigin(0,0)
    this.add.rectangle(0, config.height - borderUISize, config.width, borderUISize, 0xFFFFFF).setOrigin(0,0)
    this.add.rectangle(0, 0, borderUISize, config.height, 0xFFFFFF).setOrigin(0,0)
    this.add.rectangle(config.width - borderUISize, 0, borderUISize, config.height, 0xFFFFFF).setOrigin(0,0)

    this.p1Rocket = new Rocket(this, 0, 0, 'rocket').setOrigin(0.5,0);
    this.p1Rocket.reset();

}
    

update()
{
    this.starfield.tilePositionX -= 4;
    const movementSpeed = 4;
    if(keyLEFT.isDown)
    {
        this.p1Rocket.x -= 4;
    }
    if(keyRIGHT.isDown)
    {
        this.p1Rocket.x += 4;
    }
    if(Phaser.Input.Keyboard.JustDown(keyF))
    {
        this.p1Rocket.firing = true;
    }
}

}