cc.Class({
    extends: cc.Component,

    properties: {
        bg1: {
            default: [],
            type: [cc.Node]
        },
        bg2: {
            default: [],
            type: [cc.Node]
        },
        bg3: {
            default: [],
            type: [cc.Node]
        },
        bg4: {
            default: [],
            type: [cc.Node]
        },
        speed: 5,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    update(dt) {
        var winSize = cc.winSize;
        this.bg1[0].x -= Math.ceil(this.speed * 0.02);
        this.bg1[1].x -= Math.ceil(this.speed * 0.02);
        if (this.bg1[0].x < -parseInt(winSize.width)) {
            var element = this.bg1.shift();
            element.x = element.width - 5;
            this.bg1.push(element);
        }

        this.bg2[0].x -= Math.ceil(this.speed * 0.2);
        this.bg2[1].x -= Math.ceil(this.speed * 0.2);
        if (this.bg2[0].x < -parseInt(winSize.width)) {
            var element = this.bg2.shift();
            element.x = element.width - 1;
            this.bg2.push(element);
        }
        this.bg3[0].x -= Math.ceil(this.speed * 0.5);
        this.bg3[1].x -= Math.ceil(this.speed * 0.5);
        if (this.bg3[0].x < -parseInt(winSize.width)) {
            var element = this.bg3.shift();
            element.x = element.width - 5;
            this.bg3.push(element);
        }
        this.bg4[0].x -= Math.ceil(this.speed * 1);
        this.bg4[1].x -= Math.ceil(this.speed * 1);
        if (this.bg4[0].x < -parseInt(winSize.width)) {
            var element = this.bg4.shift();
            element.x = element.width - 5;
            this.bg4.push(element);
        }
    },
});