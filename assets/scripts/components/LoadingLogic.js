cc.Class({
    extends: cc.Component,

    properties: {
        tipLabel:cc.Label,
        _stateStr:'',
        _progress:0.0,
        _splash:null,
        _isLoading:false,
        msssageFire:null,
        openFire:null,
        isOpen:false,
    },



    // use this for initialization
    onLoad: function () {
        if(!cc.sys.isNative && cc.sys.isMobile){
            var cvs = this.node.getComponent(cc.Canvas);
            cvs.fitHeight = true;
            cvs.fitWidth = true;
        }
        this.initMgr();
        this.tipLabel.string = this._stateStr;
        
        this._splash = cc.find("Canvas/splash");
        this._splash.active = true;
        this.openFire = cc.OnFire.on("onopen", this.onOpen.bind(this));
        this.msssageFire = cc.OnFire.on("onmessage", this.onMessage.bind(this));
    },

    onOpen: function(event) {
        this.isOpen = true;
    },

    onMessage: function(event) {
        if (event.data instanceof ArrayBuffer) {
            var retdata = cc.vv.net.parseProtoBufId(event);
            var id = retdata.id
            var data = retdata.data
            switch (id) {
                case cc.ProtocolId.ServerInfo:
                    this.checkVersion(data);
                    break;
                default:
                    break;
            }
        }
    },

    onDestroy: function() {
        cc.log("loading onfire un");
        cc.OnFire.un(this.openFire);
        cc.OnFire.un(this.msssageFire);
    },
    
    start: function(){
        var self = this;
        var reVar = setInterval(function(){
            if (self.isOpen) {
                clearInterval(reVar);
                var data = { version: "20190324" };
                cc.vv.net.sendMessage("ServerInfo", data);
            }
        }, 1000);
    },
    
    initMgr:function(){
        cc.vv = {};
        var UserMgr = require("UserMgr");
        cc.vv.userMgr = new UserMgr();
        
        var ReplayMgr = require("ReplayMgr");
        cc.vv.replayMgr = new ReplayMgr();

        // var Net = require("Net");
        cc.vv.net = require("Net");
        cc.vv.net.connect();
        
        // cc.vv.http = require("HTTP");
        // cc.vv.global = require("Global");
        // cc.vv.net = require("Net");
        
        var GameNetMgr = require("GameNetMgr");
        cc.vv.gameNetMgr = new GameNetMgr();
        // cc.vv.gameNetMgr.initHandlers();
        
        var AnysdkMgr = require("AnysdkMgr");
        cc.vv.anysdkMgr = new AnysdkMgr();
        cc.vv.anysdkMgr.init();
        
        var VoiceMgr = require("VoiceMgr");
        cc.vv.voiceMgr = new VoiceMgr();
        cc.vv.voiceMgr.init();
        
        var AudioMgr = require("AudioMgr");
        cc.vv.audioMgr = new AudioMgr();
        cc.vv.audioMgr.init();
        
        var Utils = require("Utils");
        cc.vv.utils = new Utils();

        cc.args = this.urlParse();
    },

    urlParse:function(){
        var params = {};
        if(window.location == null){
            return params;
        }
        var name,value; 
        var str=window.location.href; //取得整个地址栏
        var num=str.indexOf("?") 
        str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
        
        var arr=str.split("&"); //各个参数放到数组里
        for(var i=0;i < arr.length;i++){ 
            num=arr[i].indexOf("="); 
            if(num>0){ 
                name=arr[i].substring(0,num);
                value=arr[i].substr(num+1);
                params[name]=value;
            } 
        }
        return params;
    },

    checkVersion: function(data){
        if(data.version == null){
            console.log("error.");
        }
        else{
            if(data.version != cc.VERSION){
                cc.find("Canvas/alert").active = true;
            }
            else{
                this.startPreloading();
            }
        }
    },
    
    onBtnDownloadClicked:function(){
        cc.sys.openURL(cc.vv.SI.appweb);
    },
    
    startPreloading: function(){
        this._stateStr = "正在加载资源，请稍候";
        this._isLoading = true;
        var self = this;
        
        cc.loader.onProgress = function ( completedCount, totalCount,  item ){
            //console.log("completedCount:" + completedCount + ",totalCount:" + totalCount );
            if(self._isLoading){
                self._progress = completedCount/totalCount;
            }
        };

        cc.loader.loadResDir("textures", function (err, assets) {
            self.onLoadComplete();
        });
    },
    
    onLoadComplete:function(){
        this._isLoading = false;
        this._stateStr = "准备登陆";
        cc.director.loadScene("login");
        cc.loader.onComplete = null;
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
        if(this._stateStr.length == 0){
            return;
        }
        this.tipLabel.string = this._stateStr + ' ';
        if(this._isLoading){
            this.tipLabel.string += Math.floor(this._progress * 100) + "%";
        }
        else{
            var t = Math.floor(Date.now() / 1000) % 4;
            for(var i = 0; i < t; ++ i){
                this.tipLabel.string += '.';
            }            
        }
    }
});