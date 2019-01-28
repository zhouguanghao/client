/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

// var $protobuf = require("protobufjs/minimal");
var $protobuf = protobuf;
// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.msg = (function() {

    /**
     * Namespace msg.
     * @exports msg
     * @namespace
     */
    var msg = {};

    /**
     * ProtoCMD enum.
     * @name msg.ProtoCMD
     * @enum {string}
     * @property {number} CMD_DEFAULT=0 CMD_DEFAULT value
     * @property {number} CMD_HEARTBEAT=1 CMD_HEARTBEAT value
     * @property {number} CMD_LOGIN_REQ=1001 CMD_LOGIN_REQ value
     * @property {number} CMD_LOGIN_RES=1002 CMD_LOGIN_RES value
     * @property {number} CMD_LOGINOUT_REQ=1003 CMD_LOGINOUT_REQ value
     * @property {number} CMD_LOGINOUT_RES=1004 CMD_LOGINOUT_RES value
     * @property {number} CMD_CREATE_REQ=1005 CMD_CREATE_REQ value
     * @property {number} CMD_CREATE_RES=1006 CMD_CREATE_RES value
     */
    msg.ProtoCMD = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CMD_DEFAULT"] = 0;
        values[valuesById[1] = "CMD_HEARTBEAT"] = 1;
        values[valuesById[1001] = "CMD_LOGIN_REQ"] = 1001;
        values[valuesById[1002] = "CMD_LOGIN_RES"] = 1002;
        values[valuesById[1003] = "CMD_LOGINOUT_REQ"] = 1003;
        values[valuesById[1004] = "CMD_LOGINOUT_RES"] = 1004;
        values[valuesById[1005] = "CMD_CREATE_REQ"] = 1005;
        values[valuesById[1006] = "CMD_CREATE_RES"] = 1006;
        return values;
    })();

    /**
     * LoginStatus enum.
     * @name msg.LoginStatus
     * @enum {string}
     * @property {number} LOGIN_SUCCESS=0 LOGIN_SUCCESS value
     * @property {number} LOGIN_NO_USER=1 LOGIN_NO_USER value
     * @property {number} LOGIN_ERR_PASS=2 LOGIN_ERR_PASS value
     * @property {number} LOGIN_NO_SERVER=3 LOGIN_NO_SERVER value
     */
    msg.LoginStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "LOGIN_SUCCESS"] = 0;
        values[valuesById[1] = "LOGIN_NO_USER"] = 1;
        values[valuesById[2] = "LOGIN_ERR_PASS"] = 2;
        values[valuesById[3] = "LOGIN_NO_SERVER"] = 3;
        return values;
    })();

    /**
     * RegisterStatus enum.
     * @name msg.RegisterStatus
     * @enum {string}
     * @property {number} REGISTER_SUCCESS=0 REGISTER_SUCCESS value
     * @property {number} REGISTER_FAIL=1 REGISTER_FAIL value
     * @property {number} REGISTER_EXIST=2 REGISTER_EXIST value
     * @property {number} REGISTER_ILLEGAL=3 REGISTER_ILLEGAL value
     */
    msg.RegisterStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "REGISTER_SUCCESS"] = 0;
        values[valuesById[1] = "REGISTER_FAIL"] = 1;
        values[valuesById[2] = "REGISTER_EXIST"] = 2;
        values[valuesById[3] = "REGISTER_ILLEGAL"] = 3;
        return values;
    })();

    /**
     * CreateRoomStatus enum.
     * @name msg.CreateRoomStatus
     * @enum {string}
     * @property {number} CREATE_SUCCESS=0 CREATE_SUCCESS value
     * @property {number} CREATE_FAIL=1 CREATE_FAIL value
     * @property {number} CREATE_EXIST=2 CREATE_EXIST value
     * @property {number} CREATE_ILLEGAL=3 CREATE_ILLEGAL value
     */
    msg.CreateRoomStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CREATE_SUCCESS"] = 0;
        values[valuesById[1] = "CREATE_FAIL"] = 1;
        values[valuesById[2] = "CREATE_EXIST"] = 2;
        values[valuesById[3] = "CREATE_ILLEGAL"] = 3;
        return values;
    })();

    /**
     * EnterRoomStatus enum.
     * @name msg.EnterRoomStatus
     * @enum {string}
     * @property {number} ENTER_SUCCESS=0 ENTER_SUCCESS value
     * @property {number} ENTER_NO_ROOM=1 ENTER_NO_ROOM value
     * @property {number} ENTER_FULL=2 ENTER_FULL value
     * @property {number} ENTER_FAIL=3 ENTER_FAIL value
     */
    msg.EnterRoomStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ENTER_SUCCESS"] = 0;
        values[valuesById[1] = "ENTER_NO_ROOM"] = 1;
        values[valuesById[2] = "ENTER_FULL"] = 2;
        values[valuesById[3] = "ENTER_FAIL"] = 3;
        return values;
    })();

    msg.PlayerAttr = (function() {

        /**
         * Properties of a PlayerAttr.
         * @memberof msg
         * @interface IPlayerAttr
         * @property {number|null} [id] PlayerAttr id
         * @property {string|null} [account] PlayerAttr account
         * @property {string|null} [nick] PlayerAttr nick
         * @property {number|null} [sex] PlayerAttr sex
         * @property {number|null} [level] PlayerAttr level
         * @property {number|null} [gold] PlayerAttr gold
         * @property {number|null} [roomid] PlayerAttr roomid
         * @property {number|null} [state] PlayerAttr state
         */

        /**
         * Constructs a new PlayerAttr.
         * @memberof msg
         * @classdesc Represents a PlayerAttr.
         * @implements IPlayerAttr
         * @constructor
         * @param {msg.IPlayerAttr=} [properties] Properties to set
         */
        function PlayerAttr(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayerAttr id.
         * @member {number} id
         * @memberof msg.PlayerAttr
         * @instance
         */
        PlayerAttr.prototype.id = 0;

        /**
         * PlayerAttr account.
         * @member {string} account
         * @memberof msg.PlayerAttr
         * @instance
         */
        PlayerAttr.prototype.account = "";

        /**
         * PlayerAttr nick.
         * @member {string} nick
         * @memberof msg.PlayerAttr
         * @instance
         */
        PlayerAttr.prototype.nick = "";

        /**
         * PlayerAttr sex.
         * @member {number} sex
         * @memberof msg.PlayerAttr
         * @instance
         */
        PlayerAttr.prototype.sex = 0;

        /**
         * PlayerAttr level.
         * @member {number} level
         * @memberof msg.PlayerAttr
         * @instance
         */
        PlayerAttr.prototype.level = 0;

        /**
         * PlayerAttr gold.
         * @member {number} gold
         * @memberof msg.PlayerAttr
         * @instance
         */
        PlayerAttr.prototype.gold = 0;

        /**
         * PlayerAttr roomid.
         * @member {number} roomid
         * @memberof msg.PlayerAttr
         * @instance
         */
        PlayerAttr.prototype.roomid = 0;

        /**
         * PlayerAttr state.
         * @member {number} state
         * @memberof msg.PlayerAttr
         * @instance
         */
        PlayerAttr.prototype.state = 0;

        /**
         * Creates a new PlayerAttr instance using the specified properties.
         * @function create
         * @memberof msg.PlayerAttr
         * @static
         * @param {msg.IPlayerAttr=} [properties] Properties to set
         * @returns {msg.PlayerAttr} PlayerAttr instance
         */
        PlayerAttr.create = function create(properties) {
            return new PlayerAttr(properties);
        };

        /**
         * Encodes the specified PlayerAttr message. Does not implicitly {@link msg.PlayerAttr.verify|verify} messages.
         * @function encode
         * @memberof msg.PlayerAttr
         * @static
         * @param {msg.IPlayerAttr} message PlayerAttr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerAttr.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.account != null && message.hasOwnProperty("account"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.account);
            if (message.nick != null && message.hasOwnProperty("nick"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.nick);
            if (message.sex != null && message.hasOwnProperty("sex"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.sex);
            if (message.level != null && message.hasOwnProperty("level"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.level);
            if (message.gold != null && message.hasOwnProperty("gold"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.gold);
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.roomid);
            if (message.state != null && message.hasOwnProperty("state"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.state);
            return writer;
        };

        /**
         * Encodes the specified PlayerAttr message, length delimited. Does not implicitly {@link msg.PlayerAttr.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.PlayerAttr
         * @static
         * @param {msg.IPlayerAttr} message PlayerAttr message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayerAttr.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PlayerAttr message from the specified reader or buffer.
         * @function decode
         * @memberof msg.PlayerAttr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.PlayerAttr} PlayerAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerAttr.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.PlayerAttr();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.account = reader.string();
                    break;
                case 3:
                    message.nick = reader.string();
                    break;
                case 4:
                    message.sex = reader.int32();
                    break;
                case 5:
                    message.level = reader.int32();
                    break;
                case 6:
                    message.gold = reader.int32();
                    break;
                case 7:
                    message.roomid = reader.int32();
                    break;
                case 8:
                    message.state = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PlayerAttr message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.PlayerAttr
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.PlayerAttr} PlayerAttr
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayerAttr.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PlayerAttr message.
         * @function verify
         * @memberof msg.PlayerAttr
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PlayerAttr.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.account != null && message.hasOwnProperty("account"))
                if (!$util.isString(message.account))
                    return "account: string expected";
            if (message.nick != null && message.hasOwnProperty("nick"))
                if (!$util.isString(message.nick))
                    return "nick: string expected";
            if (message.sex != null && message.hasOwnProperty("sex"))
                if (!$util.isInteger(message.sex))
                    return "sex: integer expected";
            if (message.level != null && message.hasOwnProperty("level"))
                if (!$util.isInteger(message.level))
                    return "level: integer expected";
            if (message.gold != null && message.hasOwnProperty("gold"))
                if (!$util.isInteger(message.gold))
                    return "gold: integer expected";
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                if (!$util.isInteger(message.roomid))
                    return "roomid: integer expected";
            if (message.state != null && message.hasOwnProperty("state"))
                if (!$util.isInteger(message.state))
                    return "state: integer expected";
            return null;
        };

        /**
         * Creates a PlayerAttr message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.PlayerAttr
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.PlayerAttr} PlayerAttr
         */
        PlayerAttr.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.PlayerAttr)
                return object;
            var message = new $root.msg.PlayerAttr();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.account != null)
                message.account = String(object.account);
            if (object.nick != null)
                message.nick = String(object.nick);
            if (object.sex != null)
                message.sex = object.sex | 0;
            if (object.level != null)
                message.level = object.level | 0;
            if (object.gold != null)
                message.gold = object.gold | 0;
            if (object.roomid != null)
                message.roomid = object.roomid | 0;
            if (object.state != null)
                message.state = object.state | 0;
            return message;
        };

        /**
         * Creates a plain object from a PlayerAttr message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.PlayerAttr
         * @static
         * @param {msg.PlayerAttr} message PlayerAttr
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PlayerAttr.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.account = "";
                object.nick = "";
                object.sex = 0;
                object.level = 0;
                object.gold = 0;
                object.roomid = 0;
                object.state = 0;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.account != null && message.hasOwnProperty("account"))
                object.account = message.account;
            if (message.nick != null && message.hasOwnProperty("nick"))
                object.nick = message.nick;
            if (message.sex != null && message.hasOwnProperty("sex"))
                object.sex = message.sex;
            if (message.level != null && message.hasOwnProperty("level"))
                object.level = message.level;
            if (message.gold != null && message.hasOwnProperty("gold"))
                object.gold = message.gold;
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                object.roomid = message.roomid;
            if (message.state != null && message.hasOwnProperty("state"))
                object.state = message.state;
            return object;
        };

        /**
         * Converts this PlayerAttr to JSON.
         * @function toJSON
         * @memberof msg.PlayerAttr
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PlayerAttr.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PlayerAttr;
    })();

    msg.NoticeMsg = (function() {

        /**
         * Properties of a NoticeMsg.
         * @memberof msg
         * @interface INoticeMsg
         * @property {string|null} [type] NoticeMsg type
         * @property {string|null} [msg] NoticeMsg msg
         * @property {string|null} [version] NoticeMsg version
         */

        /**
         * Constructs a new NoticeMsg.
         * @memberof msg
         * @classdesc Represents a NoticeMsg.
         * @implements INoticeMsg
         * @constructor
         * @param {msg.INoticeMsg=} [properties] Properties to set
         */
        function NoticeMsg(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * NoticeMsg type.
         * @member {string} type
         * @memberof msg.NoticeMsg
         * @instance
         */
        NoticeMsg.prototype.type = "";

        /**
         * NoticeMsg msg.
         * @member {string} msg
         * @memberof msg.NoticeMsg
         * @instance
         */
        NoticeMsg.prototype.msg = "";

        /**
         * NoticeMsg version.
         * @member {string} version
         * @memberof msg.NoticeMsg
         * @instance
         */
        NoticeMsg.prototype.version = "";

        /**
         * Creates a new NoticeMsg instance using the specified properties.
         * @function create
         * @memberof msg.NoticeMsg
         * @static
         * @param {msg.INoticeMsg=} [properties] Properties to set
         * @returns {msg.NoticeMsg} NoticeMsg instance
         */
        NoticeMsg.create = function create(properties) {
            return new NoticeMsg(properties);
        };

        /**
         * Encodes the specified NoticeMsg message. Does not implicitly {@link msg.NoticeMsg.verify|verify} messages.
         * @function encode
         * @memberof msg.NoticeMsg
         * @static
         * @param {msg.INoticeMsg} message NoticeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoticeMsg.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.type != null && message.hasOwnProperty("type"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.type);
            if (message.msg != null && message.hasOwnProperty("msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.msg);
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.version);
            return writer;
        };

        /**
         * Encodes the specified NoticeMsg message, length delimited. Does not implicitly {@link msg.NoticeMsg.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.NoticeMsg
         * @static
         * @param {msg.INoticeMsg} message NoticeMsg message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        NoticeMsg.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a NoticeMsg message from the specified reader or buffer.
         * @function decode
         * @memberof msg.NoticeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.NoticeMsg} NoticeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoticeMsg.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.NoticeMsg();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.type = reader.string();
                    break;
                case 2:
                    message.msg = reader.string();
                    break;
                case 3:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a NoticeMsg message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.NoticeMsg
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.NoticeMsg} NoticeMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        NoticeMsg.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a NoticeMsg message.
         * @function verify
         * @memberof msg.NoticeMsg
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        NoticeMsg.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.type != null && message.hasOwnProperty("type"))
                if (!$util.isString(message.type))
                    return "type: string expected";
            if (message.msg != null && message.hasOwnProperty("msg"))
                if (!$util.isString(message.msg))
                    return "msg: string expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            return null;
        };

        /**
         * Creates a NoticeMsg message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.NoticeMsg
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.NoticeMsg} NoticeMsg
         */
        NoticeMsg.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.NoticeMsg)
                return object;
            var message = new $root.msg.NoticeMsg();
            if (object.type != null)
                message.type = String(object.type);
            if (object.msg != null)
                message.msg = String(object.msg);
            if (object.version != null)
                message.version = String(object.version);
            return message;
        };

        /**
         * Creates a plain object from a NoticeMsg message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.NoticeMsg
         * @static
         * @param {msg.NoticeMsg} message NoticeMsg
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        NoticeMsg.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.type = "";
                object.msg = "";
                object.version = "";
            }
            if (message.type != null && message.hasOwnProperty("type"))
                object.type = message.type;
            if (message.msg != null && message.hasOwnProperty("msg"))
                object.msg = message.msg;
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };

        /**
         * Converts this NoticeMsg to JSON.
         * @function toJSON
         * @memberof msg.NoticeMsg
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        NoticeMsg.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return NoticeMsg;
    })();

    msg.RoomInfo = (function() {

        /**
         * Properties of a RoomInfo.
         * @memberof msg
         * @interface IRoomInfo
         * @property {number|null} [roomid] RoomInfo roomid
         * @property {number|null} [creator] RoomInfo creator
         * @property {Array.<msg.IPlayerAttr>|null} [player] RoomInfo player
         */

        /**
         * Constructs a new RoomInfo.
         * @memberof msg
         * @classdesc Represents a RoomInfo.
         * @implements IRoomInfo
         * @constructor
         * @param {msg.IRoomInfo=} [properties] Properties to set
         */
        function RoomInfo(properties) {
            this.player = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomInfo roomid.
         * @member {number} roomid
         * @memberof msg.RoomInfo
         * @instance
         */
        RoomInfo.prototype.roomid = 0;

        /**
         * RoomInfo creator.
         * @member {number} creator
         * @memberof msg.RoomInfo
         * @instance
         */
        RoomInfo.prototype.creator = 0;

        /**
         * RoomInfo player.
         * @member {Array.<msg.IPlayerAttr>} player
         * @memberof msg.RoomInfo
         * @instance
         */
        RoomInfo.prototype.player = $util.emptyArray;

        /**
         * Creates a new RoomInfo instance using the specified properties.
         * @function create
         * @memberof msg.RoomInfo
         * @static
         * @param {msg.IRoomInfo=} [properties] Properties to set
         * @returns {msg.RoomInfo} RoomInfo instance
         */
        RoomInfo.create = function create(properties) {
            return new RoomInfo(properties);
        };

        /**
         * Encodes the specified RoomInfo message. Does not implicitly {@link msg.RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.RoomInfo
         * @static
         * @param {msg.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.roomid);
            if (message.creator != null && message.hasOwnProperty("creator"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.creator);
            if (message.player != null && message.player.length)
                for (var i = 0; i < message.player.length; ++i)
                    $root.msg.PlayerAttr.encode(message.player[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified RoomInfo message, length delimited. Does not implicitly {@link msg.RoomInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.RoomInfo
         * @static
         * @param {msg.IRoomInfo} message RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.roomid = reader.int32();
                    break;
                case 2:
                    message.creator = reader.int32();
                    break;
                case 3:
                    if (!(message.player && message.player.length))
                        message.player = [];
                    message.player.push($root.msg.PlayerAttr.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.RoomInfo} RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomInfo message.
         * @function verify
         * @memberof msg.RoomInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                if (!$util.isInteger(message.roomid))
                    return "roomid: integer expected";
            if (message.creator != null && message.hasOwnProperty("creator"))
                if (!$util.isInteger(message.creator))
                    return "creator: integer expected";
            if (message.player != null && message.hasOwnProperty("player")) {
                if (!Array.isArray(message.player))
                    return "player: array expected";
                for (var i = 0; i < message.player.length; ++i) {
                    var error = $root.msg.PlayerAttr.verify(message.player[i]);
                    if (error)
                        return "player." + error;
                }
            }
            return null;
        };

        /**
         * Creates a RoomInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.RoomInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.RoomInfo} RoomInfo
         */
        RoomInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.RoomInfo)
                return object;
            var message = new $root.msg.RoomInfo();
            if (object.roomid != null)
                message.roomid = object.roomid | 0;
            if (object.creator != null)
                message.creator = object.creator | 0;
            if (object.player) {
                if (!Array.isArray(object.player))
                    throw TypeError(".msg.RoomInfo.player: array expected");
                message.player = [];
                for (var i = 0; i < object.player.length; ++i) {
                    if (typeof object.player[i] !== "object")
                        throw TypeError(".msg.RoomInfo.player: object expected");
                    message.player[i] = $root.msg.PlayerAttr.fromObject(object.player[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a RoomInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.RoomInfo
         * @static
         * @param {msg.RoomInfo} message RoomInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.player = [];
            if (options.defaults) {
                object.roomid = 0;
                object.creator = 0;
            }
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                object.roomid = message.roomid;
            if (message.creator != null && message.hasOwnProperty("creator"))
                object.creator = message.creator;
            if (message.player && message.player.length) {
                object.player = [];
                for (var j = 0; j < message.player.length; ++j)
                    object.player[j] = $root.msg.PlayerAttr.toObject(message.player[j], options);
            }
            return object;
        };

        /**
         * Converts this RoomInfo to JSON.
         * @function toJSON
         * @memberof msg.RoomInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomInfo;
    })();

    msg.RoomRule = (function() {

        /**
         * Properties of a RoomRule.
         * @memberof msg
         * @interface IRoomRule
         * @property {string|null} [game] RoomRule game
         * @property {number|null} [difen] RoomRule difen
         * @property {number|null} [zimo] RoomRule zimo
         * @property {number|null} [jushuxuanze] RoomRule jushuxuanze
         * @property {number|null} [dianganghua] RoomRule dianganghua
         * @property {boolean|null} [huansanzhang] RoomRule huansanzhang
         * @property {boolean|null} [zuidafanshu] RoomRule zuidafanshu
         * @property {boolean|null} [menqing] RoomRule menqing
         * @property {boolean|null} [tiandihu] RoomRule tiandihu
         * @property {boolean|null} [jiangdui] RoomRule jiangdui
         */

        /**
         * Constructs a new RoomRule.
         * @memberof msg
         * @classdesc Represents a RoomRule.
         * @implements IRoomRule
         * @constructor
         * @param {msg.IRoomRule=} [properties] Properties to set
         */
        function RoomRule(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RoomRule game.
         * @member {string} game
         * @memberof msg.RoomRule
         * @instance
         */
        RoomRule.prototype.game = "";

        /**
         * RoomRule difen.
         * @member {number} difen
         * @memberof msg.RoomRule
         * @instance
         */
        RoomRule.prototype.difen = 0;

        /**
         * RoomRule zimo.
         * @member {number} zimo
         * @memberof msg.RoomRule
         * @instance
         */
        RoomRule.prototype.zimo = 0;

        /**
         * RoomRule jushuxuanze.
         * @member {number} jushuxuanze
         * @memberof msg.RoomRule
         * @instance
         */
        RoomRule.prototype.jushuxuanze = 0;

        /**
         * RoomRule dianganghua.
         * @member {number} dianganghua
         * @memberof msg.RoomRule
         * @instance
         */
        RoomRule.prototype.dianganghua = 0;

        /**
         * RoomRule huansanzhang.
         * @member {boolean} huansanzhang
         * @memberof msg.RoomRule
         * @instance
         */
        RoomRule.prototype.huansanzhang = false;

        /**
         * RoomRule zuidafanshu.
         * @member {boolean} zuidafanshu
         * @memberof msg.RoomRule
         * @instance
         */
        RoomRule.prototype.zuidafanshu = false;

        /**
         * RoomRule menqing.
         * @member {boolean} menqing
         * @memberof msg.RoomRule
         * @instance
         */
        RoomRule.prototype.menqing = false;

        /**
         * RoomRule tiandihu.
         * @member {boolean} tiandihu
         * @memberof msg.RoomRule
         * @instance
         */
        RoomRule.prototype.tiandihu = false;

        /**
         * RoomRule jiangdui.
         * @member {boolean} jiangdui
         * @memberof msg.RoomRule
         * @instance
         */
        RoomRule.prototype.jiangdui = false;

        /**
         * Creates a new RoomRule instance using the specified properties.
         * @function create
         * @memberof msg.RoomRule
         * @static
         * @param {msg.IRoomRule=} [properties] Properties to set
         * @returns {msg.RoomRule} RoomRule instance
         */
        RoomRule.create = function create(properties) {
            return new RoomRule(properties);
        };

        /**
         * Encodes the specified RoomRule message. Does not implicitly {@link msg.RoomRule.verify|verify} messages.
         * @function encode
         * @memberof msg.RoomRule
         * @static
         * @param {msg.IRoomRule} message RoomRule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomRule.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.game != null && message.hasOwnProperty("game"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.game);
            if (message.difen != null && message.hasOwnProperty("difen"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.difen);
            if (message.zimo != null && message.hasOwnProperty("zimo"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.zimo);
            if (message.jushuxuanze != null && message.hasOwnProperty("jushuxuanze"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.jushuxuanze);
            if (message.dianganghua != null && message.hasOwnProperty("dianganghua"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.dianganghua);
            if (message.huansanzhang != null && message.hasOwnProperty("huansanzhang"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.huansanzhang);
            if (message.zuidafanshu != null && message.hasOwnProperty("zuidafanshu"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.zuidafanshu);
            if (message.menqing != null && message.hasOwnProperty("menqing"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.menqing);
            if (message.tiandihu != null && message.hasOwnProperty("tiandihu"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.tiandihu);
            if (message.jiangdui != null && message.hasOwnProperty("jiangdui"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.jiangdui);
            return writer;
        };

        /**
         * Encodes the specified RoomRule message, length delimited. Does not implicitly {@link msg.RoomRule.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.RoomRule
         * @static
         * @param {msg.IRoomRule} message RoomRule message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RoomRule.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RoomRule message from the specified reader or buffer.
         * @function decode
         * @memberof msg.RoomRule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.RoomRule} RoomRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomRule.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.RoomRule();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.game = reader.string();
                    break;
                case 2:
                    message.difen = reader.int32();
                    break;
                case 3:
                    message.zimo = reader.int32();
                    break;
                case 4:
                    message.jushuxuanze = reader.int32();
                    break;
                case 5:
                    message.dianganghua = reader.int32();
                    break;
                case 6:
                    message.huansanzhang = reader.bool();
                    break;
                case 7:
                    message.zuidafanshu = reader.bool();
                    break;
                case 8:
                    message.menqing = reader.bool();
                    break;
                case 9:
                    message.tiandihu = reader.bool();
                    break;
                case 10:
                    message.jiangdui = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RoomRule message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.RoomRule
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.RoomRule} RoomRule
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RoomRule.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RoomRule message.
         * @function verify
         * @memberof msg.RoomRule
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RoomRule.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.game != null && message.hasOwnProperty("game"))
                if (!$util.isString(message.game))
                    return "game: string expected";
            if (message.difen != null && message.hasOwnProperty("difen"))
                if (!$util.isInteger(message.difen))
                    return "difen: integer expected";
            if (message.zimo != null && message.hasOwnProperty("zimo"))
                if (!$util.isInteger(message.zimo))
                    return "zimo: integer expected";
            if (message.jushuxuanze != null && message.hasOwnProperty("jushuxuanze"))
                if (!$util.isInteger(message.jushuxuanze))
                    return "jushuxuanze: integer expected";
            if (message.dianganghua != null && message.hasOwnProperty("dianganghua"))
                if (!$util.isInteger(message.dianganghua))
                    return "dianganghua: integer expected";
            if (message.huansanzhang != null && message.hasOwnProperty("huansanzhang"))
                if (typeof message.huansanzhang !== "boolean")
                    return "huansanzhang: boolean expected";
            if (message.zuidafanshu != null && message.hasOwnProperty("zuidafanshu"))
                if (typeof message.zuidafanshu !== "boolean")
                    return "zuidafanshu: boolean expected";
            if (message.menqing != null && message.hasOwnProperty("menqing"))
                if (typeof message.menqing !== "boolean")
                    return "menqing: boolean expected";
            if (message.tiandihu != null && message.hasOwnProperty("tiandihu"))
                if (typeof message.tiandihu !== "boolean")
                    return "tiandihu: boolean expected";
            if (message.jiangdui != null && message.hasOwnProperty("jiangdui"))
                if (typeof message.jiangdui !== "boolean")
                    return "jiangdui: boolean expected";
            return null;
        };

        /**
         * Creates a RoomRule message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.RoomRule
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.RoomRule} RoomRule
         */
        RoomRule.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.RoomRule)
                return object;
            var message = new $root.msg.RoomRule();
            if (object.game != null)
                message.game = String(object.game);
            if (object.difen != null)
                message.difen = object.difen | 0;
            if (object.zimo != null)
                message.zimo = object.zimo | 0;
            if (object.jushuxuanze != null)
                message.jushuxuanze = object.jushuxuanze | 0;
            if (object.dianganghua != null)
                message.dianganghua = object.dianganghua | 0;
            if (object.huansanzhang != null)
                message.huansanzhang = Boolean(object.huansanzhang);
            if (object.zuidafanshu != null)
                message.zuidafanshu = Boolean(object.zuidafanshu);
            if (object.menqing != null)
                message.menqing = Boolean(object.menqing);
            if (object.tiandihu != null)
                message.tiandihu = Boolean(object.tiandihu);
            if (object.jiangdui != null)
                message.jiangdui = Boolean(object.jiangdui);
            return message;
        };

        /**
         * Creates a plain object from a RoomRule message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.RoomRule
         * @static
         * @param {msg.RoomRule} message RoomRule
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RoomRule.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.game = "";
                object.difen = 0;
                object.zimo = 0;
                object.jushuxuanze = 0;
                object.dianganghua = 0;
                object.huansanzhang = false;
                object.zuidafanshu = false;
                object.menqing = false;
                object.tiandihu = false;
                object.jiangdui = false;
            }
            if (message.game != null && message.hasOwnProperty("game"))
                object.game = message.game;
            if (message.difen != null && message.hasOwnProperty("difen"))
                object.difen = message.difen;
            if (message.zimo != null && message.hasOwnProperty("zimo"))
                object.zimo = message.zimo;
            if (message.jushuxuanze != null && message.hasOwnProperty("jushuxuanze"))
                object.jushuxuanze = message.jushuxuanze;
            if (message.dianganghua != null && message.hasOwnProperty("dianganghua"))
                object.dianganghua = message.dianganghua;
            if (message.huansanzhang != null && message.hasOwnProperty("huansanzhang"))
                object.huansanzhang = message.huansanzhang;
            if (message.zuidafanshu != null && message.hasOwnProperty("zuidafanshu"))
                object.zuidafanshu = message.zuidafanshu;
            if (message.menqing != null && message.hasOwnProperty("menqing"))
                object.menqing = message.menqing;
            if (message.tiandihu != null && message.hasOwnProperty("tiandihu"))
                object.tiandihu = message.tiandihu;
            if (message.jiangdui != null && message.hasOwnProperty("jiangdui"))
                object.jiangdui = message.jiangdui;
            return object;
        };

        /**
         * Converts this RoomRule to JSON.
         * @function toJSON
         * @memberof msg.RoomRule
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RoomRule.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RoomRule;
    })();

    msg.Chat = (function() {

        /**
         * Properties of a Chat.
         * @memberof msg
         * @interface IChat
         * @property {string|null} [content] Chat content
         */

        /**
         * Constructs a new Chat.
         * @memberof msg
         * @classdesc Represents a Chat.
         * @implements IChat
         * @constructor
         * @param {msg.IChat=} [properties] Properties to set
         */
        function Chat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Chat content.
         * @member {string} content
         * @memberof msg.Chat
         * @instance
         */
        Chat.prototype.content = "";

        /**
         * Creates a new Chat instance using the specified properties.
         * @function create
         * @memberof msg.Chat
         * @static
         * @param {msg.IChat=} [properties] Properties to set
         * @returns {msg.Chat} Chat instance
         */
        Chat.create = function create(properties) {
            return new Chat(properties);
        };

        /**
         * Encodes the specified Chat message. Does not implicitly {@link msg.Chat.verify|verify} messages.
         * @function encode
         * @memberof msg.Chat
         * @static
         * @param {msg.IChat} message Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified Chat message, length delimited. Does not implicitly {@link msg.Chat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.Chat
         * @static
         * @param {msg.IChat} message Chat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Chat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Chat message from the specified reader or buffer.
         * @function decode
         * @memberof msg.Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.Chat} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.Chat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Chat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.Chat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.Chat} Chat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Chat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Chat message.
         * @function verify
         * @memberof msg.Chat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Chat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a Chat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.Chat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.Chat} Chat
         */
        Chat.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.Chat)
                return object;
            var message = new $root.msg.Chat();
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a Chat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.Chat
         * @static
         * @param {msg.Chat} message Chat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Chat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.content = "";
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this Chat to JSON.
         * @function toJSON
         * @memberof msg.Chat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Chat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Chat;
    })();

    msg.TocChat = (function() {

        /**
         * Properties of a TocChat.
         * @memberof msg
         * @interface ITocChat
         * @property {string|null} [name] TocChat name
         * @property {string|null} [content] TocChat content
         */

        /**
         * Constructs a new TocChat.
         * @memberof msg
         * @classdesc Represents a TocChat.
         * @implements ITocChat
         * @constructor
         * @param {msg.ITocChat=} [properties] Properties to set
         */
        function TocChat(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TocChat name.
         * @member {string} name
         * @memberof msg.TocChat
         * @instance
         */
        TocChat.prototype.name = "";

        /**
         * TocChat content.
         * @member {string} content
         * @memberof msg.TocChat
         * @instance
         */
        TocChat.prototype.content = "";

        /**
         * Creates a new TocChat instance using the specified properties.
         * @function create
         * @memberof msg.TocChat
         * @static
         * @param {msg.ITocChat=} [properties] Properties to set
         * @returns {msg.TocChat} TocChat instance
         */
        TocChat.create = function create(properties) {
            return new TocChat(properties);
        };

        /**
         * Encodes the specified TocChat message. Does not implicitly {@link msg.TocChat.verify|verify} messages.
         * @function encode
         * @memberof msg.TocChat
         * @static
         * @param {msg.ITocChat} message TocChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TocChat.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && message.hasOwnProperty("name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.content != null && message.hasOwnProperty("content"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
            return writer;
        };

        /**
         * Encodes the specified TocChat message, length delimited. Does not implicitly {@link msg.TocChat.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.TocChat
         * @static
         * @param {msg.ITocChat} message TocChat message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TocChat.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TocChat message from the specified reader or buffer.
         * @function decode
         * @memberof msg.TocChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.TocChat} TocChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TocChat.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.TocChat();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.name = reader.string();
                    break;
                case 2:
                    message.content = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TocChat message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.TocChat
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.TocChat} TocChat
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TocChat.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TocChat message.
         * @function verify
         * @memberof msg.TocChat
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TocChat.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.name != null && message.hasOwnProperty("name"))
                if (!$util.isString(message.name))
                    return "name: string expected";
            if (message.content != null && message.hasOwnProperty("content"))
                if (!$util.isString(message.content))
                    return "content: string expected";
            return null;
        };

        /**
         * Creates a TocChat message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.TocChat
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.TocChat} TocChat
         */
        TocChat.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.TocChat)
                return object;
            var message = new $root.msg.TocChat();
            if (object.name != null)
                message.name = String(object.name);
            if (object.content != null)
                message.content = String(object.content);
            return message;
        };

        /**
         * Creates a plain object from a TocChat message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.TocChat
         * @static
         * @param {msg.TocChat} message TocChat
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TocChat.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.name = "";
                object.content = "";
            }
            if (message.name != null && message.hasOwnProperty("name"))
                object.name = message.name;
            if (message.content != null && message.hasOwnProperty("content"))
                object.content = message.content;
            return object;
        };

        /**
         * Converts this TocChat to JSON.
         * @function toJSON
         * @memberof msg.TocChat
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TocChat.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TocChat;
    })();

    msg.ServerInfo = (function() {

        /**
         * Properties of a ServerInfo.
         * @memberof msg
         * @interface IServerInfo
         * @property {string|null} [version] ServerInfo version
         */

        /**
         * Constructs a new ServerInfo.
         * @memberof msg
         * @classdesc Represents a ServerInfo.
         * @implements IServerInfo
         * @constructor
         * @param {msg.IServerInfo=} [properties] Properties to set
         */
        function ServerInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServerInfo version.
         * @member {string} version
         * @memberof msg.ServerInfo
         * @instance
         */
        ServerInfo.prototype.version = "";

        /**
         * Creates a new ServerInfo instance using the specified properties.
         * @function create
         * @memberof msg.ServerInfo
         * @static
         * @param {msg.IServerInfo=} [properties] Properties to set
         * @returns {msg.ServerInfo} ServerInfo instance
         */
        ServerInfo.create = function create(properties) {
            return new ServerInfo(properties);
        };

        /**
         * Encodes the specified ServerInfo message. Does not implicitly {@link msg.ServerInfo.verify|verify} messages.
         * @function encode
         * @memberof msg.ServerInfo
         * @static
         * @param {msg.IServerInfo} message ServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.version != null && message.hasOwnProperty("version"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.version);
            return writer;
        };

        /**
         * Encodes the specified ServerInfo message, length delimited. Does not implicitly {@link msg.ServerInfo.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.ServerInfo
         * @static
         * @param {msg.IServerInfo} message ServerInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServerInfo message from the specified reader or buffer.
         * @function decode
         * @memberof msg.ServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.ServerInfo} ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.ServerInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServerInfo message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.ServerInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.ServerInfo} ServerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServerInfo.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServerInfo message.
         * @function verify
         * @memberof msg.ServerInfo
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServerInfo.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.version != null && message.hasOwnProperty("version"))
                if (!$util.isString(message.version))
                    return "version: string expected";
            return null;
        };

        /**
         * Creates a ServerInfo message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.ServerInfo
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.ServerInfo} ServerInfo
         */
        ServerInfo.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.ServerInfo)
                return object;
            var message = new $root.msg.ServerInfo();
            if (object.version != null)
                message.version = String(object.version);
            return message;
        };

        /**
         * Creates a plain object from a ServerInfo message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.ServerInfo
         * @static
         * @param {msg.ServerInfo} message ServerInfo
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServerInfo.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.version = "";
            if (message.version != null && message.hasOwnProperty("version"))
                object.version = message.version;
            return object;
        };

        /**
         * Converts this ServerInfo to JSON.
         * @function toJSON
         * @memberof msg.ServerInfo
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServerInfo.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServerInfo;
    })();

    msg.LoginReq = (function() {

        /**
         * Properties of a LoginReq.
         * @memberof msg
         * @interface ILoginReq
         * @property {string|null} [user] LoginReq user
         * @property {string|null} [passwd] LoginReq passwd
         */

        /**
         * Constructs a new LoginReq.
         * @memberof msg
         * @classdesc Represents a LoginReq.
         * @implements ILoginReq
         * @constructor
         * @param {msg.ILoginReq=} [properties] Properties to set
         */
        function LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginReq user.
         * @member {string} user
         * @memberof msg.LoginReq
         * @instance
         */
        LoginReq.prototype.user = "";

        /**
         * LoginReq passwd.
         * @member {string} passwd
         * @memberof msg.LoginReq
         * @instance
         */
        LoginReq.prototype.passwd = "";

        /**
         * Creates a new LoginReq instance using the specified properties.
         * @function create
         * @memberof msg.LoginReq
         * @static
         * @param {msg.ILoginReq=} [properties] Properties to set
         * @returns {msg.LoginReq} LoginReq instance
         */
        LoginReq.create = function create(properties) {
            return new LoginReq(properties);
        };

        /**
         * Encodes the specified LoginReq message. Does not implicitly {@link msg.LoginReq.verify|verify} messages.
         * @function encode
         * @memberof msg.LoginReq
         * @static
         * @param {msg.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.user);
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.passwd);
            return writer;
        };

        /**
         * Encodes the specified LoginReq message, length delimited. Does not implicitly {@link msg.LoginReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.LoginReq
         * @static
         * @param {msg.ILoginReq} message LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof msg.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                case 2:
                    message.passwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.LoginReq} LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginReq message.
         * @function verify
         * @memberof msg.LoginReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user"))
                if (!$util.isString(message.user))
                    return "user: string expected";
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                if (!$util.isString(message.passwd))
                    return "passwd: string expected";
            return null;
        };

        /**
         * Creates a LoginReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.LoginReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.LoginReq} LoginReq
         */
        LoginReq.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.LoginReq)
                return object;
            var message = new $root.msg.LoginReq();
            if (object.user != null)
                message.user = String(object.user);
            if (object.passwd != null)
                message.passwd = String(object.passwd);
            return message;
        };

        /**
         * Creates a plain object from a LoginReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.LoginReq
         * @static
         * @param {msg.LoginReq} message LoginReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user = "";
                object.passwd = "";
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = message.user;
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                object.passwd = message.passwd;
            return object;
        };

        /**
         * Converts this LoginReq to JSON.
         * @function toJSON
         * @memberof msg.LoginReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginReq;
    })();

    msg.LoginRes = (function() {

        /**
         * Properties of a LoginRes.
         * @memberof msg
         * @interface ILoginRes
         * @property {msg.LoginStatus|null} [status] LoginRes status
         * @property {string|null} [info] LoginRes info
         * @property {msg.IPlayerAttr|null} [attr] LoginRes attr
         */

        /**
         * Constructs a new LoginRes.
         * @memberof msg
         * @classdesc Represents a LoginRes.
         * @implements ILoginRes
         * @constructor
         * @param {msg.ILoginRes=} [properties] Properties to set
         */
        function LoginRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoginRes status.
         * @member {msg.LoginStatus} status
         * @memberof msg.LoginRes
         * @instance
         */
        LoginRes.prototype.status = 0;

        /**
         * LoginRes info.
         * @member {string} info
         * @memberof msg.LoginRes
         * @instance
         */
        LoginRes.prototype.info = "";

        /**
         * LoginRes attr.
         * @member {msg.IPlayerAttr|null|undefined} attr
         * @memberof msg.LoginRes
         * @instance
         */
        LoginRes.prototype.attr = null;

        /**
         * Creates a new LoginRes instance using the specified properties.
         * @function create
         * @memberof msg.LoginRes
         * @static
         * @param {msg.ILoginRes=} [properties] Properties to set
         * @returns {msg.LoginRes} LoginRes instance
         */
        LoginRes.create = function create(properties) {
            return new LoginRes(properties);
        };

        /**
         * Encodes the specified LoginRes message. Does not implicitly {@link msg.LoginRes.verify|verify} messages.
         * @function encode
         * @memberof msg.LoginRes
         * @static
         * @param {msg.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.info != null && message.hasOwnProperty("info"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.info);
            if (message.attr != null && message.hasOwnProperty("attr"))
                $root.msg.PlayerAttr.encode(message.attr, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified LoginRes message, length delimited. Does not implicitly {@link msg.LoginRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.LoginRes
         * @static
         * @param {msg.ILoginRes} message LoginRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoginRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer.
         * @function decode
         * @memberof msg.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.LoginRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.info = reader.string();
                    break;
                case 3:
                    message.attr = $root.msg.PlayerAttr.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoginRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.LoginRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.LoginRes} LoginRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoginRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoginRes message.
         * @function verify
         * @memberof msg.LoginRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoginRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.info != null && message.hasOwnProperty("info"))
                if (!$util.isString(message.info))
                    return "info: string expected";
            if (message.attr != null && message.hasOwnProperty("attr")) {
                var error = $root.msg.PlayerAttr.verify(message.attr);
                if (error)
                    return "attr." + error;
            }
            return null;
        };

        /**
         * Creates a LoginRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.LoginRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.LoginRes} LoginRes
         */
        LoginRes.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.LoginRes)
                return object;
            var message = new $root.msg.LoginRes();
            switch (object.status) {
            case "LOGIN_SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "LOGIN_NO_USER":
            case 1:
                message.status = 1;
                break;
            case "LOGIN_ERR_PASS":
            case 2:
                message.status = 2;
                break;
            case "LOGIN_NO_SERVER":
            case 3:
                message.status = 3;
                break;
            }
            if (object.info != null)
                message.info = String(object.info);
            if (object.attr != null) {
                if (typeof object.attr !== "object")
                    throw TypeError(".msg.LoginRes.attr: object expected");
                message.attr = $root.msg.PlayerAttr.fromObject(object.attr);
            }
            return message;
        };

        /**
         * Creates a plain object from a LoginRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.LoginRes
         * @static
         * @param {msg.LoginRes} message LoginRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoginRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "LOGIN_SUCCESS" : 0;
                object.info = "";
                object.attr = null;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.msg.LoginStatus[message.status] : message.status;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = message.info;
            if (message.attr != null && message.hasOwnProperty("attr"))
                object.attr = $root.msg.PlayerAttr.toObject(message.attr, options);
            return object;
        };

        /**
         * Converts this LoginRes to JSON.
         * @function toJSON
         * @memberof msg.LoginRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoginRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoginRes;
    })();

    msg.RegisterReq = (function() {

        /**
         * Properties of a RegisterReq.
         * @memberof msg
         * @interface IRegisterReq
         * @property {string|null} [user] RegisterReq user
         * @property {string|null} [passwd] RegisterReq passwd
         */

        /**
         * Constructs a new RegisterReq.
         * @memberof msg
         * @classdesc Represents a RegisterReq.
         * @implements IRegisterReq
         * @constructor
         * @param {msg.IRegisterReq=} [properties] Properties to set
         */
        function RegisterReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterReq user.
         * @member {string} user
         * @memberof msg.RegisterReq
         * @instance
         */
        RegisterReq.prototype.user = "";

        /**
         * RegisterReq passwd.
         * @member {string} passwd
         * @memberof msg.RegisterReq
         * @instance
         */
        RegisterReq.prototype.passwd = "";

        /**
         * Creates a new RegisterReq instance using the specified properties.
         * @function create
         * @memberof msg.RegisterReq
         * @static
         * @param {msg.IRegisterReq=} [properties] Properties to set
         * @returns {msg.RegisterReq} RegisterReq instance
         */
        RegisterReq.create = function create(properties) {
            return new RegisterReq(properties);
        };

        /**
         * Encodes the specified RegisterReq message. Does not implicitly {@link msg.RegisterReq.verify|verify} messages.
         * @function encode
         * @memberof msg.RegisterReq
         * @static
         * @param {msg.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.user != null && message.hasOwnProperty("user"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.user);
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.passwd);
            return writer;
        };

        /**
         * Encodes the specified RegisterReq message, length delimited. Does not implicitly {@link msg.RegisterReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.RegisterReq
         * @static
         * @param {msg.IRegisterReq} message RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer.
         * @function decode
         * @memberof msg.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.RegisterReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.user = reader.string();
                    break;
                case 2:
                    message.passwd = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.RegisterReq} RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterReq message.
         * @function verify
         * @memberof msg.RegisterReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.user != null && message.hasOwnProperty("user"))
                if (!$util.isString(message.user))
                    return "user: string expected";
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                if (!$util.isString(message.passwd))
                    return "passwd: string expected";
            return null;
        };

        /**
         * Creates a RegisterReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.RegisterReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.RegisterReq} RegisterReq
         */
        RegisterReq.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.RegisterReq)
                return object;
            var message = new $root.msg.RegisterReq();
            if (object.user != null)
                message.user = String(object.user);
            if (object.passwd != null)
                message.passwd = String(object.passwd);
            return message;
        };

        /**
         * Creates a plain object from a RegisterReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.RegisterReq
         * @static
         * @param {msg.RegisterReq} message RegisterReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.user = "";
                object.passwd = "";
            }
            if (message.user != null && message.hasOwnProperty("user"))
                object.user = message.user;
            if (message.passwd != null && message.hasOwnProperty("passwd"))
                object.passwd = message.passwd;
            return object;
        };

        /**
         * Converts this RegisterReq to JSON.
         * @function toJSON
         * @memberof msg.RegisterReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterReq;
    })();

    msg.RegisterRes = (function() {

        /**
         * Properties of a RegisterRes.
         * @memberof msg
         * @interface IRegisterRes
         * @property {msg.RegisterStatus|null} [status] RegisterRes status
         * @property {string|null} [info] RegisterRes info
         */

        /**
         * Constructs a new RegisterRes.
         * @memberof msg
         * @classdesc Represents a RegisterRes.
         * @implements IRegisterRes
         * @constructor
         * @param {msg.IRegisterRes=} [properties] Properties to set
         */
        function RegisterRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RegisterRes status.
         * @member {msg.RegisterStatus} status
         * @memberof msg.RegisterRes
         * @instance
         */
        RegisterRes.prototype.status = 0;

        /**
         * RegisterRes info.
         * @member {string} info
         * @memberof msg.RegisterRes
         * @instance
         */
        RegisterRes.prototype.info = "";

        /**
         * Creates a new RegisterRes instance using the specified properties.
         * @function create
         * @memberof msg.RegisterRes
         * @static
         * @param {msg.IRegisterRes=} [properties] Properties to set
         * @returns {msg.RegisterRes} RegisterRes instance
         */
        RegisterRes.create = function create(properties) {
            return new RegisterRes(properties);
        };

        /**
         * Encodes the specified RegisterRes message. Does not implicitly {@link msg.RegisterRes.verify|verify} messages.
         * @function encode
         * @memberof msg.RegisterRes
         * @static
         * @param {msg.IRegisterRes} message RegisterRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.info != null && message.hasOwnProperty("info"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.info);
            return writer;
        };

        /**
         * Encodes the specified RegisterRes message, length delimited. Does not implicitly {@link msg.RegisterRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.RegisterRes
         * @static
         * @param {msg.IRegisterRes} message RegisterRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RegisterRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RegisterRes message from the specified reader or buffer.
         * @function decode
         * @memberof msg.RegisterRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.RegisterRes} RegisterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.RegisterRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.info = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RegisterRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.RegisterRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.RegisterRes} RegisterRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RegisterRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RegisterRes message.
         * @function verify
         * @memberof msg.RegisterRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RegisterRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.info != null && message.hasOwnProperty("info"))
                if (!$util.isString(message.info))
                    return "info: string expected";
            return null;
        };

        /**
         * Creates a RegisterRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.RegisterRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.RegisterRes} RegisterRes
         */
        RegisterRes.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.RegisterRes)
                return object;
            var message = new $root.msg.RegisterRes();
            switch (object.status) {
            case "REGISTER_SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "REGISTER_FAIL":
            case 1:
                message.status = 1;
                break;
            case "REGISTER_EXIST":
            case 2:
                message.status = 2;
                break;
            case "REGISTER_ILLEGAL":
            case 3:
                message.status = 3;
                break;
            }
            if (object.info != null)
                message.info = String(object.info);
            return message;
        };

        /**
         * Creates a plain object from a RegisterRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.RegisterRes
         * @static
         * @param {msg.RegisterRes} message RegisterRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RegisterRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "REGISTER_SUCCESS" : 0;
                object.info = "";
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.msg.RegisterStatus[message.status] : message.status;
            if (message.info != null && message.hasOwnProperty("info"))
                object.info = message.info;
            return object;
        };

        /**
         * Converts this RegisterRes to JSON.
         * @function toJSON
         * @memberof msg.RegisterRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RegisterRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RegisterRes;
    })();

    msg.CreateRoomReq = (function() {

        /**
         * Properties of a CreateRoomReq.
         * @memberof msg
         * @interface ICreateRoomReq
         * @property {number|null} [id] CreateRoomReq id
         * @property {msg.IRoomRule|null} [rule] CreateRoomReq rule
         */

        /**
         * Constructs a new CreateRoomReq.
         * @memberof msg
         * @classdesc Represents a CreateRoomReq.
         * @implements ICreateRoomReq
         * @constructor
         * @param {msg.ICreateRoomReq=} [properties] Properties to set
         */
        function CreateRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomReq id.
         * @member {number} id
         * @memberof msg.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.id = 0;

        /**
         * CreateRoomReq rule.
         * @member {msg.IRoomRule|null|undefined} rule
         * @memberof msg.CreateRoomReq
         * @instance
         */
        CreateRoomReq.prototype.rule = null;

        /**
         * Creates a new CreateRoomReq instance using the specified properties.
         * @function create
         * @memberof msg.CreateRoomReq
         * @static
         * @param {msg.ICreateRoomReq=} [properties] Properties to set
         * @returns {msg.CreateRoomReq} CreateRoomReq instance
         */
        CreateRoomReq.create = function create(properties) {
            return new CreateRoomReq(properties);
        };

        /**
         * Encodes the specified CreateRoomReq message. Does not implicitly {@link msg.CreateRoomReq.verify|verify} messages.
         * @function encode
         * @memberof msg.CreateRoomReq
         * @static
         * @param {msg.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.id);
            if (message.rule != null && message.hasOwnProperty("rule"))
                $root.msg.RoomRule.encode(message.rule, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateRoomReq message, length delimited. Does not implicitly {@link msg.CreateRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CreateRoomReq
         * @static
         * @param {msg.ICreateRoomReq} message CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CreateRoomReq} CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CreateRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.id = reader.int32();
                    break;
                case 2:
                    message.rule = $root.msg.RoomRule.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CreateRoomReq} CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomReq message.
         * @function verify
         * @memberof msg.CreateRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.rule != null && message.hasOwnProperty("rule")) {
                var error = $root.msg.RoomRule.verify(message.rule);
                if (error)
                    return "rule." + error;
            }
            return null;
        };

        /**
         * Creates a CreateRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CreateRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CreateRoomReq} CreateRoomReq
         */
        CreateRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CreateRoomReq)
                return object;
            var message = new $root.msg.CreateRoomReq();
            if (object.id != null)
                message.id = object.id | 0;
            if (object.rule != null) {
                if (typeof object.rule !== "object")
                    throw TypeError(".msg.CreateRoomReq.rule: object expected");
                message.rule = $root.msg.RoomRule.fromObject(object.rule);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CreateRoomReq
         * @static
         * @param {msg.CreateRoomReq} message CreateRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.id = 0;
                object.rule = null;
            }
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.rule != null && message.hasOwnProperty("rule"))
                object.rule = $root.msg.RoomRule.toObject(message.rule, options);
            return object;
        };

        /**
         * Converts this CreateRoomReq to JSON.
         * @function toJSON
         * @memberof msg.CreateRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomReq;
    })();

    msg.CreateRoomRes = (function() {

        /**
         * Properties of a CreateRoomRes.
         * @memberof msg
         * @interface ICreateRoomRes
         * @property {msg.CreateRoomStatus|null} [status] CreateRoomRes status
         * @property {msg.IRoomInfo|null} [room] CreateRoomRes room
         */

        /**
         * Constructs a new CreateRoomRes.
         * @memberof msg
         * @classdesc Represents a CreateRoomRes.
         * @implements ICreateRoomRes
         * @constructor
         * @param {msg.ICreateRoomRes=} [properties] Properties to set
         */
        function CreateRoomRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CreateRoomRes status.
         * @member {msg.CreateRoomStatus} status
         * @memberof msg.CreateRoomRes
         * @instance
         */
        CreateRoomRes.prototype.status = 0;

        /**
         * CreateRoomRes room.
         * @member {msg.IRoomInfo|null|undefined} room
         * @memberof msg.CreateRoomRes
         * @instance
         */
        CreateRoomRes.prototype.room = null;

        /**
         * Creates a new CreateRoomRes instance using the specified properties.
         * @function create
         * @memberof msg.CreateRoomRes
         * @static
         * @param {msg.ICreateRoomRes=} [properties] Properties to set
         * @returns {msg.CreateRoomRes} CreateRoomRes instance
         */
        CreateRoomRes.create = function create(properties) {
            return new CreateRoomRes(properties);
        };

        /**
         * Encodes the specified CreateRoomRes message. Does not implicitly {@link msg.CreateRoomRes.verify|verify} messages.
         * @function encode
         * @memberof msg.CreateRoomRes
         * @static
         * @param {msg.ICreateRoomRes} message CreateRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.room != null && message.hasOwnProperty("room"))
                $root.msg.RoomInfo.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified CreateRoomRes message, length delimited. Does not implicitly {@link msg.CreateRoomRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.CreateRoomRes
         * @static
         * @param {msg.ICreateRoomRes} message CreateRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CreateRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CreateRoomRes message from the specified reader or buffer.
         * @function decode
         * @memberof msg.CreateRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.CreateRoomRes} CreateRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.CreateRoomRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.room = $root.msg.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CreateRoomRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.CreateRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.CreateRoomRes} CreateRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CreateRoomRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CreateRoomRes message.
         * @function verify
         * @memberof msg.CreateRoomRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CreateRoomRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.room != null && message.hasOwnProperty("room")) {
                var error = $root.msg.RoomInfo.verify(message.room);
                if (error)
                    return "room." + error;
            }
            return null;
        };

        /**
         * Creates a CreateRoomRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.CreateRoomRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.CreateRoomRes} CreateRoomRes
         */
        CreateRoomRes.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.CreateRoomRes)
                return object;
            var message = new $root.msg.CreateRoomRes();
            switch (object.status) {
            case "CREATE_SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "CREATE_FAIL":
            case 1:
                message.status = 1;
                break;
            case "CREATE_EXIST":
            case 2:
                message.status = 2;
                break;
            case "CREATE_ILLEGAL":
            case 3:
                message.status = 3;
                break;
            }
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".msg.CreateRoomRes.room: object expected");
                message.room = $root.msg.RoomInfo.fromObject(object.room);
            }
            return message;
        };

        /**
         * Creates a plain object from a CreateRoomRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.CreateRoomRes
         * @static
         * @param {msg.CreateRoomRes} message CreateRoomRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CreateRoomRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "CREATE_SUCCESS" : 0;
                object.room = null;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.msg.CreateRoomStatus[message.status] : message.status;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.msg.RoomInfo.toObject(message.room, options);
            return object;
        };

        /**
         * Converts this CreateRoomRes to JSON.
         * @function toJSON
         * @memberof msg.CreateRoomRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CreateRoomRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CreateRoomRes;
    })();

    msg.EnterRoomReq = (function() {

        /**
         * Properties of an EnterRoomReq.
         * @memberof msg
         * @interface IEnterRoomReq
         * @property {number|null} [flag] EnterRoomReq flag
         * @property {number|null} [id] EnterRoomReq id
         * @property {number|null} [roomid] EnterRoomReq roomid
         */

        /**
         * Constructs a new EnterRoomReq.
         * @memberof msg
         * @classdesc Represents an EnterRoomReq.
         * @implements IEnterRoomReq
         * @constructor
         * @param {msg.IEnterRoomReq=} [properties] Properties to set
         */
        function EnterRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomReq flag.
         * @member {number} flag
         * @memberof msg.EnterRoomReq
         * @instance
         */
        EnterRoomReq.prototype.flag = 0;

        /**
         * EnterRoomReq id.
         * @member {number} id
         * @memberof msg.EnterRoomReq
         * @instance
         */
        EnterRoomReq.prototype.id = 0;

        /**
         * EnterRoomReq roomid.
         * @member {number} roomid
         * @memberof msg.EnterRoomReq
         * @instance
         */
        EnterRoomReq.prototype.roomid = 0;

        /**
         * Creates a new EnterRoomReq instance using the specified properties.
         * @function create
         * @memberof msg.EnterRoomReq
         * @static
         * @param {msg.IEnterRoomReq=} [properties] Properties to set
         * @returns {msg.EnterRoomReq} EnterRoomReq instance
         */
        EnterRoomReq.create = function create(properties) {
            return new EnterRoomReq(properties);
        };

        /**
         * Encodes the specified EnterRoomReq message. Does not implicitly {@link msg.EnterRoomReq.verify|verify} messages.
         * @function encode
         * @memberof msg.EnterRoomReq
         * @static
         * @param {msg.IEnterRoomReq} message EnterRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.flag != null && message.hasOwnProperty("flag"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.flag);
            if (message.id != null && message.hasOwnProperty("id"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.id);
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.roomid);
            return writer;
        };

        /**
         * Encodes the specified EnterRoomReq message, length delimited. Does not implicitly {@link msg.EnterRoomReq.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.EnterRoomReq
         * @static
         * @param {msg.IEnterRoomReq} message EnterRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomReq.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof msg.EnterRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.EnterRoomReq} EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.EnterRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.flag = reader.int32();
                    break;
                case 2:
                    message.id = reader.int32();
                    break;
                case 3:
                    message.roomid = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomReq message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.EnterRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.EnterRoomReq} EnterRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomReq.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomReq message.
         * @function verify
         * @memberof msg.EnterRoomReq
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomReq.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.flag != null && message.hasOwnProperty("flag"))
                if (!$util.isInteger(message.flag))
                    return "flag: integer expected";
            if (message.id != null && message.hasOwnProperty("id"))
                if (!$util.isInteger(message.id))
                    return "id: integer expected";
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                if (!$util.isInteger(message.roomid))
                    return "roomid: integer expected";
            return null;
        };

        /**
         * Creates an EnterRoomReq message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.EnterRoomReq
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.EnterRoomReq} EnterRoomReq
         */
        EnterRoomReq.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.EnterRoomReq)
                return object;
            var message = new $root.msg.EnterRoomReq();
            if (object.flag != null)
                message.flag = object.flag | 0;
            if (object.id != null)
                message.id = object.id | 0;
            if (object.roomid != null)
                message.roomid = object.roomid | 0;
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomReq message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.EnterRoomReq
         * @static
         * @param {msg.EnterRoomReq} message EnterRoomReq
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomReq.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.flag = 0;
                object.id = 0;
                object.roomid = 0;
            }
            if (message.flag != null && message.hasOwnProperty("flag"))
                object.flag = message.flag;
            if (message.id != null && message.hasOwnProperty("id"))
                object.id = message.id;
            if (message.roomid != null && message.hasOwnProperty("roomid"))
                object.roomid = message.roomid;
            return object;
        };

        /**
         * Converts this EnterRoomReq to JSON.
         * @function toJSON
         * @memberof msg.EnterRoomReq
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomReq.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomReq;
    })();

    msg.EnterRoomRes = (function() {

        /**
         * Properties of an EnterRoomRes.
         * @memberof msg
         * @interface IEnterRoomRes
         * @property {msg.EnterRoomStatus|null} [status] EnterRoomRes status
         * @property {msg.IRoomInfo|null} [room] EnterRoomRes room
         */

        /**
         * Constructs a new EnterRoomRes.
         * @memberof msg
         * @classdesc Represents an EnterRoomRes.
         * @implements IEnterRoomRes
         * @constructor
         * @param {msg.IEnterRoomRes=} [properties] Properties to set
         */
        function EnterRoomRes(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EnterRoomRes status.
         * @member {msg.EnterRoomStatus} status
         * @memberof msg.EnterRoomRes
         * @instance
         */
        EnterRoomRes.prototype.status = 0;

        /**
         * EnterRoomRes room.
         * @member {msg.IRoomInfo|null|undefined} room
         * @memberof msg.EnterRoomRes
         * @instance
         */
        EnterRoomRes.prototype.room = null;

        /**
         * Creates a new EnterRoomRes instance using the specified properties.
         * @function create
         * @memberof msg.EnterRoomRes
         * @static
         * @param {msg.IEnterRoomRes=} [properties] Properties to set
         * @returns {msg.EnterRoomRes} EnterRoomRes instance
         */
        EnterRoomRes.create = function create(properties) {
            return new EnterRoomRes(properties);
        };

        /**
         * Encodes the specified EnterRoomRes message. Does not implicitly {@link msg.EnterRoomRes.verify|verify} messages.
         * @function encode
         * @memberof msg.EnterRoomRes
         * @static
         * @param {msg.IEnterRoomRes} message EnterRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomRes.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.status != null && message.hasOwnProperty("status"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.status);
            if (message.room != null && message.hasOwnProperty("room"))
                $root.msg.RoomInfo.encode(message.room, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified EnterRoomRes message, length delimited. Does not implicitly {@link msg.EnterRoomRes.verify|verify} messages.
         * @function encodeDelimited
         * @memberof msg.EnterRoomRes
         * @static
         * @param {msg.IEnterRoomRes} message EnterRoomRes message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EnterRoomRes.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EnterRoomRes message from the specified reader or buffer.
         * @function decode
         * @memberof msg.EnterRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {msg.EnterRoomRes} EnterRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomRes.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.msg.EnterRoomRes();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.status = reader.int32();
                    break;
                case 2:
                    message.room = $root.msg.RoomInfo.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EnterRoomRes message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof msg.EnterRoomRes
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {msg.EnterRoomRes} EnterRoomRes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EnterRoomRes.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EnterRoomRes message.
         * @function verify
         * @memberof msg.EnterRoomRes
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EnterRoomRes.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.status != null && message.hasOwnProperty("status"))
                switch (message.status) {
                default:
                    return "status: enum value expected";
                case 0:
                case 1:
                case 2:
                case 3:
                    break;
                }
            if (message.room != null && message.hasOwnProperty("room")) {
                var error = $root.msg.RoomInfo.verify(message.room);
                if (error)
                    return "room." + error;
            }
            return null;
        };

        /**
         * Creates an EnterRoomRes message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof msg.EnterRoomRes
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {msg.EnterRoomRes} EnterRoomRes
         */
        EnterRoomRes.fromObject = function fromObject(object) {
            if (object instanceof $root.msg.EnterRoomRes)
                return object;
            var message = new $root.msg.EnterRoomRes();
            switch (object.status) {
            case "ENTER_SUCCESS":
            case 0:
                message.status = 0;
                break;
            case "ENTER_NO_ROOM":
            case 1:
                message.status = 1;
                break;
            case "ENTER_FULL":
            case 2:
                message.status = 2;
                break;
            case "ENTER_FAIL":
            case 3:
                message.status = 3;
                break;
            }
            if (object.room != null) {
                if (typeof object.room !== "object")
                    throw TypeError(".msg.EnterRoomRes.room: object expected");
                message.room = $root.msg.RoomInfo.fromObject(object.room);
            }
            return message;
        };

        /**
         * Creates a plain object from an EnterRoomRes message. Also converts values to other types if specified.
         * @function toObject
         * @memberof msg.EnterRoomRes
         * @static
         * @param {msg.EnterRoomRes} message EnterRoomRes
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EnterRoomRes.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.status = options.enums === String ? "ENTER_SUCCESS" : 0;
                object.room = null;
            }
            if (message.status != null && message.hasOwnProperty("status"))
                object.status = options.enums === String ? $root.msg.EnterRoomStatus[message.status] : message.status;
            if (message.room != null && message.hasOwnProperty("room"))
                object.room = $root.msg.RoomInfo.toObject(message.room, options);
            return object;
        };

        /**
         * Converts this EnterRoomRes to JSON.
         * @function toJSON
         * @memberof msg.EnterRoomRes
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EnterRoomRes.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EnterRoomRes;
    })();

    return msg;
})();

module.exports = $root;
