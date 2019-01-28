var Net = require("Net")
var Global = require("Global")
cc.Class({
    extends: cc.Component,

    properties: {
        lblName:cc.Label,
        lblMoney:cc.Label,
        lblGems:cc.Label,
        lblID:cc.Label,
        lblNotice:cc.Label,
        joinGameWin:cc.Node,
        createRoomWin:cc.Node,
        settingsWin:cc.Node,
        helpWin:cc.Node,
        xiaoxiWin:cc.Node,
        btnJoinGame:cc.Node,
        btnReturnGame:cc.Node,
        sprHeadImg:cc.Sprite,
        hallFire:null,
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },
    
    initNetHandlers:function(){
        var self = this;
    },
    
    onShare:function(){
        cc.vv.anysdkMgr.share("达达麻将","达达麻将，包含了血战到底、血流成河等多种四川流行麻将玩法。");   
    },

    // use this for initialization
    onLoad: function () {
        if(!cc.sys.isNative && cc.sys.isMobile){
            var cvs = this.node.getComponent(cc.Canvas);
            cvs.fitHeight = true;
            cvs.fitWidth = true;
        }
        if(!cc.vv){
            cc.director.loadScene("loading");
            return;
        }
        this.initLabels();
        
        if(cc.vv.gameNetMgr.roomId == null){
            this.btnJoinGame.active = true;
            this.btnReturnGame.active = false;
        }
        else{
            this.btnJoinGame.active = false;
            this.btnReturnGame.active = true;
        }
        
        //var params = cc.vv.args;
        var roomId = cc.vv.userMgr.oldRoomId 
        if( roomId != null){
            cc.vv.userMgr.oldRoomId = null;
            cc.vv.userMgr.enterRoom(roomId);
        }
        
        var imgLoader = this.sprHeadImg.node.getComponent("ImageLoader");
        imgLoader.setUserID(cc.vv.userMgr.userId);
        cc.vv.utils.addClickEvent(this.sprHeadImg.node,this.node,"Hall","onBtnClicked");
        
        
        this.addComponent("UserInfoShow");
        
        this.initButtonHandler("Canvas/right_bottom/btn_shezhi");
        this.initButtonHandler("Canvas/right_bottom/btn_help");
        this.initButtonHandler("Canvas/right_bottom/btn_xiaoxi");
        this.helpWin.addComponent("OnBack");
        this.xiaoxiWin.addComponent("OnBack");
        
        if(!cc.vv.userMgr.notice){
            cc.vv.userMgr.notice = {
                version:null,
                msg:"数据请求中...",
            }
        }
        
        if(!cc.vv.userMgr.gemstip){
            cc.vv.userMgr.gemstip = {
                version:null,
                msg:"数据请求中...",
            }
        }
        
        this.lblNotice.string = cc.vv.userMgr.notice.msg;
        
        this.refreshNotice(); // 获取通知消息
        this.refreshGemsTip(); // 充值提示
        
        cc.vv.audioMgr.playBGM("bgMain.mp3");

        this.hallFire = cc.OnFire.on("onmessage", this.onMessage.bind(this));
        // 心跳
        setInterval(function(){
            var data = { content: "client" };
            cc.vv.net.sendMessage("Chat", data);
        }, 5000);
    },

    onMessage: function(event) {
        if (event.data instanceof ArrayBuffer) {
            var retdata = cc.vv.net.parseProtoBufId(event);
            var id = retdata.id
            var data = retdata.data
            switch (id) {
                case cc.ProtocolId.Chat:
                    this.handleAck(data);
                    break;
                case cc.ProtocolId.NoticeMsg:
                    if (data.type == "notice") {
                        this.handlerNotice(data);
                    } else if (data.type == "fkgm") {
                        this.handlerNoticeTip(data);
                    }
                    break;
                case cc.ProtocolId.CreateRoomRes:
                    this.handlerCreateRoom(data)
                    break;
                case cc.ProtocolId.EnterRoomRes:
                    this.handlerEnterRoom(data)
                    break;
                default:
                    break;
            }
        }
    },

    handleAck: function(data) {
        cc.log("ack:", data.content);
    },

    refreshGemsTip:function(){
        var data = {
            type: "fkgm",
            msg: "",
            version: ""
        };
        cc.vv.net.sendMessage("NoticeMsg", data);
    },

    handlerNoticeTip:function(ret){
        cc.vv.userMgr.gemstip.version = ret.version;
        cc.vv.userMgr.gemstip.msg = ret.msg.replace("<newline>","\n");
    },
    
    refreshNotice:function(){
        var data = {
            type: "notice",
            msg: "",
            version: ""
        };
        cc.vv.net.sendMessage("NoticeMsg", data);
    },

    handlerNotice: function(ret){
        cc.vv.userMgr.notice.version = ret.version;
        cc.vv.userMgr.notice.msg = ret.msg;
        this.lblNotice.string = ret.msg;
    },

    handlerCreateRoom: function(ret){
        if(ret.status !== 0){
            cc.vv.wc.hide();
            if(ret.status == 2){
                cc.vv.alert.show("提示","房卡不足，创建房间失败!");  
            }
            else{
                cc.vv.alert.show("提示","创建房间失败,错误码:" + ret.status);
            }
        }
        else{
            cc.vv.gameNetMgr.connectGameServer(ret);
            // cc.director.loadScene("mjgame");
        }
    },

    handlerEnterRoom: function(ret){
        if(ret.status !== 0){
            cc.vv.wc.hide();
            if(ret.status == 1){
                cc.vv.alert.show("提示","房间不存在!");  
            } else if (ret.status == 2) {
                cc.vv.alert.show("提示","房间已满人!");  
            }
            else{
                cc.vv.alert.show("提示","进入房间失败,错误码:" + ret.status);
            }
        }
        else{
            cc.vv.gameNetMgr.enterGameRoom(ret);
        }
    },
    
    initButtonHandler:function(btnPath){
        var btn = cc.find(btnPath);
        cc.vv.utils.addClickEvent(btn,this.node,"Hall","onBtnClicked");        
    },
    
    initLabels:function(){
        this.lblName.string = cc.vv.userMgr.userName;
        this.lblMoney.string = cc.vv.userMgr.gems;
        this.lblGems.string = cc.vv.userMgr.gems;
        this.lblID.string = "ID:" + cc.vv.userMgr.userId;
    },
    
    onBtnClicked:function(event){
        if(event.target.name == "btn_shezhi"){
            this.settingsWin.active = true;
        }   
        else if(event.target.name == "btn_help"){
            this.helpWin.active = true;
        }
        else if(event.target.name == "btn_xiaoxi"){
            this.xiaoxiWin.active = true;
        }
        else if(event.target.name == "head"){
            cc.vv.userinfoShow.show(cc.vv.userMgr.userName,cc.vv.userMgr.userId,this.sprHeadImg,cc.vv.userMgr.sex,cc.vv.userMgr.ip);
        }
    },
    
    onJoinGameClicked:function(){
        this.joinGameWin.active = true;
    },
    
    onReturnGameClicked:function(){
        cc.director.loadScene("mjgame");  
    },
    
    onBtnAddGemsClicked:function(){
        cc.vv.alert.show("提示",cc.vv.userMgr.gemstip.msg);
        // this.refreshInfo();
    },
    
    onCreateRoomClicked:function(){
        if(cc.vv.gameNetMgr.roomId != null){
            cc.vv.alert.show("提示","房间已经创建!\n必须解散当前房间才能创建新的房间");
            return;
        }
        cc.log("onCreateRoomClicked");
        this.createRoomWin.active = true;   
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        var x = this.lblNotice.node.x;
        x -= dt*100;
        if(x + this.lblNotice.node.width < -1000){
            x = 500;
        }
        this.lblNotice.node.x = x;
        
        if(cc.vv && cc.vv.userMgr.roomData != null){
            cc.vv.userMgr.enterRoom(cc.vv.userMgr.roomData);
            cc.vv.userMgr.roomData = null;
        }
    },

    onDestroy: function() {
        cc.log("hall onfire un");
        cc.OnFire.un(this.hallFire);
    }
});
