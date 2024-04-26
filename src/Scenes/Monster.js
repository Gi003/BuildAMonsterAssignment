class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.leg1X = this.bodyX + 40;
        this.leg1Y = this.bodyY + 120;
        this.leg2X = this.bodyX - 40;

        this.leftArmX = this.bodyX - 80; 
        this.leftArmY = this.bodyY + 90;
        this.rightArmX= this.bodyX + 80;
        this.rightArmY = this.bodyY + 90;

        this.leftHornX = this.bodyX - 80;
        this.leftHornY = this.bodyX;
        this.rightHornX = this.bodyX + 80;
        this.rightHornY = this.bodyX;
        
        this.Skey = null;
        this.Fkey = null;
        this.leftKey = null;
        this.rightKey = null;

    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");

        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'
    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.rightLeg = this.add.sprite(this.leg1X, this.leg1Y, "monsterParts", "leg_yellowB.png");
        my.sprite.leftLeg = this.add.sprite(this.leg2X, this.leg1Y, "monsterParts", "leg_yellowB.png");
        my.sprite.leftLeg.flipX = true;
        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
       
        my.sprite.rightArm = this.add.sprite(this.rightArmX,this.rightArmY, "monsterParts", "arm_darkB.png");
        my.sprite.leftArm = this.add.sprite(this.leftArmX,this.leftArmY, "monsterParts", "arm_darkB.png");
        my.sprite.leftArm.flipX = true;
        
        my.sprite.eye = this.add.sprite(this.bodyX,this.bodyY, "monsterParts", "eye_red.png");
        my.sprite.mouth_smile = this.add.sprite(this.bodyX, this.bodyY + 40, "monsterParts", "mouth_closed_happy.png");
        my.sprite.mouth_fangs = this.add.sprite(this.bodyX, this.bodyY + 40, "monsterParts", "mouth_closed_teeth.png");
        my.sprite.mouth_fangs.visible = false;

        my.sprite.Lhorn = this.add.sprite(this.leftHornX, this.leftHornY, "monsterParts", "detail_white_antenna_large.png");
        my.sprite.Rhorn = this.add.sprite(this.rightHornX, this.rightHornY, "monsterParts", "detail_white_antenna_large.png");
        my.sprite.Lhorn.flipX = true;

        this.Fkey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.Skey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);

        this.leftKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.rightKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if (this.Fkey.isDown){
            my.sprite.mouth_fangs.visible = true;
            my.sprite.mouth_smile.visible = false;
        }else if (this.Skey.isDown){
                my.sprite.mouth_fangs.visible = false;
                my.sprite.mouth_smile.visible = true;
        }else if (this.leftKey.isDown){
            for(var x in my.sprite){
                my.sprite[x].x -= 10;
            }
        }else if (this.rightKey.isDown){
            for(var x in my.sprite){
                my.sprite[x].x += 10;
            }
        }
    }

}
