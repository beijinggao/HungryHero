const GameConstants = require('GameConstants');

cc.Class({
    extends: cc.Component,

    properties: {
        hero: {
            default: null,
            type: cc.Node
        },
        _gameState: null,
        _touchY: 0,
        _cameraShake: 0,
        /*user: {
            lives: 3,
            score: 0,
            distance: 0,
            heroSpeed: 0,
            coffee: 0,
            mushroom: 0,
            hitObstacle: 0
        },*/
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        /*this.hero.on(cc.Node.EventType.TOUCH_MOVE || cc.Node.EventType.MOUSE_MOVE || cc.Node.EventType.MOUSE_WHEEL, function(event) {
            //this.opacity = 255;
            var delta = event.touch.getDelta();
            //this.x += delta.x;
            this.y += delta.y;
        }, this.hero);*/


    },

    start() {
        //cc.log(GameConstants.GAME_STATE_OVER);
        var winSize = cc.winSize;
        //this._touchY = winSize.height / 2;

        //this.hero.x = -winSize.width / 2;
        //this.hero.y = winSize.height / 2;

        this.node.on('mousemove', function(event) {
            //this.node.runAction(cc.rotateBy(0.1,30));//旋转30度
            this._onMouseMove(event);

        }, this);

        /*if ("touches" in cc.sys.capabilities) {
            cc.eventManager.addListener({ event: cc.EventListener.TOUCH_ALL_AT_ONCE, onTouchesMoved: this._onTouchMoved.bind(this) }, this);
            this.node.on('touchmove', function(event) {
                let delta = event.touch.getDelta(); // cc.Vec2()
                let deltaX = delta.x;
                let deltaY = delta.y;
            }, this);
        } else {
            
        }*/

    },

    update(dt) {
        var winSize = cc.winSize;
        console.log(this._touchY);
        // Take off.
        /*if (this.hero.x < winSize.width * 0.5 * 0.5) {
            this.hero.x += ((winSize.width * 0.5 * 0.5 + 10) - this.hero.x) * 0.05;
            this.hero.y -= (this.hero.y - this._touchY) * 0.1;

            //Game.user.heroSpeed += (GameConstants.HERO_MIN_SPEED - Game.user.heroSpeed) * 0.05;
            //this._background.speed = Game.user.heroSpeed * elapsed;
        } else {
            //Game.gameState = GameConstants.GAME_STATE_FLYING;
            //this._hero.state = GameConstants.HERO_STATE_FLYING;
        }*/
        console.log("======-----=====  " + this.hero.y);
        this.hero.y -= (this.hero.y - this._touchY) * 0.1;
        console.log(this.hero.y);
        console.log("-----------");
        this._handleHeroPose();

    },

    _onTouchMoved: function(touches, event) {
        if (this.gameState != 2)
            this._touchY = touches[0].getLocation().y;
    },

    _onMouseMove: function(event) {
        if (this.gameState != 2) {
            this._touchY = event.getLocationY();
            console.log("**************");
            /*this._touchY = event.getLocationY();
            console.log(this._touchY);
            console.log("**************");
            console.log(event.getDelta().y);
            this._handleHeroPose();
            var action = cc.moveTo(1, this.hero.x, this.hero.y + event.getDelta().y) //.easing(cc.easeCubicActionOut());
            this.hero.runAction(action);*/
            //this._handleHeroPose();
        }
    },

    _handleHeroPose: function() {
        var winSize = cc.winSize;
        // Rotate this._hero based on mouse position.
        if (Math.abs(-(this.hero.y - this._touchY) * 0.2) < 30)
            this.hero.setRotation((this.hero.y - this._touchY) * 0.2);

        // Confine the this._hero to stage area limit
        if (this.hero.y < this.hero.height * 0.5) {
            this.hero.y = this.hero.height * 0.5;
            this.hero.setRotation(0);
        }
        if (this.hero.y > winSize.height - this.hero.height * 0.5) {
            this.hero.y = winSize.height - this.hero.height * 0.5;
            this.hero.setRotation(0);
        }
    },

    _shakeAnimation: function() {
        // Animate quake effect, shaking the camera a little to the sides and up and down.
        if (this._cameraShake > 0) {
            this._cameraShake -= 0.1;
            this.x = parseInt(Math.random() * this._cameraShake - this._cameraShake * 0.5);
            this.y = parseInt(Math.random() * this._cameraShake - this._cameraShake * 0.5);
        } else if (this.x != 0) {
            // If the shake value is 0, reset the stage back to normal. Reset to initial position.
            this.x = 0;
            this.y = 0;
        }
    },

});