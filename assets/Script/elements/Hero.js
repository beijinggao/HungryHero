cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var anim = this.getComponent(cc.Animation);
        var animState = anim.play('hero');
        // 设置循环模式为 Loop
        animState.wrapMode = cc.WrapMode.Loop;
        //animState.repeatCount = Infinity;
    },

    start() {
        var moveTo = cc.moveTo(2, cc.v2(-250, 10)).easing(cc.easeCubicActionOut());
        this.node.runAction(moveTo);
        //this.node.x = 100;
        //this.node.y = 250;

    },

    // update (dt) {},
});