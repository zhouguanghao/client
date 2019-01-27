### Protobuf 编译静态JS文件
1、npm安装protobufjs到项目
```
npm install protobufjs
```

2、把proto文件拷贝到node_modules\.bin目录下，执行下面命令：
```
pbjs -t static-module -w commonjs -o protocol.js *.proto
```
并且把protocol.js顶部的`var $protobuf = require("protobufjs/minimal");` 改为`var $protobuf = protobuf;`
protobuf.js文件去`https://github.com/dcodeio/protobuf.js`下载即可，和protocol.js丢在项目中的scripts目录，
同时在cocoscreator里把protobuf.js设置导入为插件即可。

3、使用protobuf
项目通信模块导入编译好的静态protocol.js`var Protocol = require("protocol.js");`
具体使用如下：
```
var message = Protocol.msg["login"].create(data);
var buffer = Protocol.msg["login"].encode(message).finish();
send(buffer);
```
4、具体涉及到的C/S通信大小端的问题可以参考`DataView`的范例

### 事件订阅发布 JavaScript 库 onfire.js
因为仅仅只是一个很小很小的文件，没有使用`npm install onfire.js`去安装，而是在官网下载此文件丢到项目中，加载即可使用
`var onfire = require("onfire.js");`

API方法：

1、on(event_name, callback)

绑定事件，参数为event_name和callback， 当有名字为event_name的事件发生的时候，callback方法将会被执行。

这个方法会返回一个eventObj，这个可以用于使用un(eventObj)方法来取消事件绑定。

2、one(event_name, callback)

绑定（订阅）事件，参数为 event_name with callback. 当被触发一次之后失效。只能被触发一次，一次之后自动失效。

3、fire(event_name, data)

触发名字为event_name的事件，并且赋予变量data为callback方法的输入值。

4、un(eventObj / eventName / function)

取消事件绑定。可以仅仅取消绑定一个事件回调方法，也可以直接取消全部的事件；

5、clear()

清空所有事件。

