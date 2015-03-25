

var MenuLayer = cc.Layer.extend({
    startImage: res.helloBG_png,
    ctor : function(){
        //1. call super class's ctor function
        this._super();
    },
    init:function(){
        //call super class's super function
        this._super();

        //2. get the screen size of your game canvas
        var winsize = cc.director.getWinSize();

        //3. calculate the center point
        var centerpos = cc.p(winsize.width / 2, winsize.height / 2);

        //4. create a background image and set it's position at the center of the screen
        this.setBackground(centerpos),

        //5.
        cc.MenuItemFont.setFontSize(60);

        //6.create a menu and assign onPlay event callback to it
        var menuItemPlay= new cc.MenuItemSprite(
        	new cc.Sprite(res.start_n_png), // normal state image
        	new cc.Sprite(res.start_s_png), //select state image
            this.onPlay, this);
        var menu = new cc.Menu(menuItemPlay);  //7. create the menu
        menu.setPosition(centerpos);
        this.addChild(menu);
    },

    setBackground:function(pos){
        if(startImageToShow!=null){
            var spritebg = new cc.Sprite(startImageToShow);
            spritebg.setPosition(pos);
            this.addChild(spritebg);
        }else{
            cc.log("No background image has been set");
        }
    },

    onPlay : function(){
        cc.log("==onplay clicked");
        cc.director.runScene(new PlayScene());
    }
});

var MenuScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new MenuLayer();
        layer.init();
        this.addChild(layer);
    }
});
