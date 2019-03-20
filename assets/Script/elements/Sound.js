cc.Class({
    extends: cc.Component,

    properties: {
        audioSource: {
            type: cc.AudioSource,
            default: null
        },
        soundlogo: {
            default: [],
            type: [cc.SpriteFrame],
        },
        sound: {
            default: null,
            type: cc.Node
        },
        _animation: null,
    },

    play() {
        this.audioSource.play();
        this._animation = this.sound.getComponent(cc.Animation);
        var frames = this.soundlogo
        var clip = cc.AnimationClip.createWithSpriteFrames(frames, 4);
        clip.wrapMode = cc.WrapMode.Loop;
        clip.name = "sound_bg";
        this._animation.addClip(clip);
        this._animation.play('sound_bg');
    },

    pause() {
        this.audioSource.pause();
        this._animation.pause('sound_bg');
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var i = 0;
        this.sound.on('mousedown', function(event) {
            if (i % 2 == 0) {
                this.pause();
            } else {
                this.audioSource.play();
                this._animation.resume('sound_bg');
            }
            i += 1;

        }, this);
    },

    start() {
        this.play();


    },

    // update (dt) {},
});