var URL = "ws://120.79.168.51:3602";
cc.OnFire = require("onfire.js");
var Protocol = require("protocol.js");
cc.VERSION = 20190324;
cc.ProtocolId = cc.Enum({
    Chat:0,
    ServerInfo:1,
    RegisterReq:2,
    RegisterRes:3,
    LoginReq:4,
    LoginRes:5,
    NoticeMsg:6,
    CreateRoomReq:7,
    CreateRoomRes:8,
    EnterRoomReq:9,
    EnterRoomRes:10,
});
cc.Class({
    extends: cc.Component,
    ws: null,
    statics:{
        address: URL,
        // ws: null,

        uintToString: function(uintArray) {
            var encodedString = String.fromCharCode.apply(null, uintArray);
            decodedString = decodeURIComponent(escape(encodedString));
            return decodedString;
        },

        connect: function() {
            if (this.ws == null || this.ws.readyState !== 1) {
                this.ws = new WebSocket(this.address);
                this.ws.onopen = this.onOpen.bind(this);
                this.ws.onmessage = this.onMessage.bind(this);
                this.ws.onclose = this.onClose.bind(this);
                this.ws.binaryType = "arraybuffer";
            }
        },

        onOpen: function(event) {
            var self = this;
            cc.OnFire.fire("onopen", event);
            // setInterval(function(){
            //     var data = { content: "client" };
            //     self.sendMessage("Chat", data);
            // }, 5000);
        },

        onMessage: function(event) {
            // 解包
            // 传递消息
            cc.OnFire.fire("onmessage", event);
        },

        onClose: function(err) {
            var self = this;
            cc.OnFire.fire("onclose", err);
            var reVar = setInterval(function(){
                if (self.ws.readyState == 1) {
                    clearInterval(reVar);
                }
                self.ws = new WebSocket(self.address);

            }, 5000);
        },

        sendMessage: function(id, data) {
            var protocolId = cc.ProtocolId[id];
            Protocol.msg[id].verify(data);
            var message = Protocol.msg[id].create(data);
            var buffer = Protocol.msg[id].encode(message).finish();
            var tagBuffer = this.protoBufAddtag(protocolId, buffer);
            if (this.ws.readyState == 1) {
                this.ws.send(tagBuffer);
            }
        },

        protoBufAddtag: function(tag, buffer) {
            var addtag_buffer = new Uint8Array(buffer.length + 2);
            var tagBinary = this.IntToUint8Array(tag, 16);
            var tagUnit8 = new Uint8Array(tagBinary);

            addtag_buffer.set(tagUnit8,0);
            addtag_buffer.set(buffer.subarray(0,buffer.length),2);

            return addtag_buffer;
        },

        parseProtoBufId: function(obj) {
            var dataUnit8Array = new Uint8Array(obj.data);
            var id = this.Uint8ArrayToInt(dataUnit8Array.slice(0,2));
            dataUnit8Array = dataUnit8Array.slice(2);
            var index = cc.ProtocolId[id];
            var buffer = Protocol.msg[index].decode(dataUnit8Array);
            return {id: id,data:buffer};
        },
    
        IntToUint8Array: function(num, Bits) {
            var resArry = [];
            var xresArry = [];
            var binaryStr = num.toString(2);
            for(var i=0;i<binaryStr.length;i++)
                resArry.push(parseInt(binaryStr[i]));

            if (Bits) {
                for(var r = resArry.length; r < Bits; r++) {
                    resArry.unshift(0);
                }
            }

            var  resArryStr= resArry.join("");
            for(var j=0;j<Bits;j+=8)
                xresArry.push(parseInt(resArryStr.slice(j,j+8),2));

            return xresArry;
        },

        Uint8ArrayToInt: function(uint8Ary) {
            var retInt = 0;
            for(var i= 0;i<uint8Ary.length;i++) {
                retInt|=(uint8Ary[i] << (8*(uint8Ary.length-i-1)));
            }

            return retInt;
        }
    },
});