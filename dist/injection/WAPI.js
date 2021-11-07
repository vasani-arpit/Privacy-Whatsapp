/**
 * This script contains WAPI functions that need to be run in the context of the webpage
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _this = this;
/**
 * Auto discovery the webpack object references of instances that contains all functions used by the WAPI
 * functions and creates the Store object.
 */
if (!window.Store || !window.Store.Msg) {
    (function () {
        var _a;
        function getStore(modules) {
            var foundCount = 0;
            var neededObjects = [
                { id: "Store", conditions: function (module) { return (module["default"] && module["default"].Chat && module["default"].Msg) ? module["default"] : null; } },
                { id: "MediaCollection", conditions: function (module) { return (module["default"] && module["default"].prototype && (module["default"].prototype.processFiles !== undefined || module["default"].prototype.processAttachments !== undefined)) ? module["default"] : null; } },
                { id: "MediaProcess", conditions: function (module) { return (module.BLOB) ? module : null; } },
                { id: "Archive", conditions: function (module) { return (module.setArchive) ? module : null; } },
                { id: "Block", conditions: function (module) { return (module.blockContact && module.unblockContact) ? module : null; } },
                { id: "ChatUtil", conditions: function (module) { return (module.sendClear) ? module : null; } },
                { id: "GroupInvite", conditions: function (module) { return (module.queryGroupInviteCode) ? module : null; } },
                { id: "Wap", conditions: function (module) { return (module.createGroup) ? module : null; } },
                { id: "ServiceWorker", conditions: function (module) { return (module["default"] && module["default"].killServiceWorker) ? module : null; } },
                { id: "State", conditions: function (module) { return (module.STATE && module.STREAM) ? module : null; } },
                { id: "_Presence", conditions: function (module) { return (module.setPresenceAvailable && module.setPresenceUnavailable) ? module : null; } },
                { id: "WapDelete", conditions: function (module) { return (module.sendConversationDelete && module.sendConversationDelete.length == 2) ? module : null; } },
                { id: "Conn", conditions: function (module) { return (module["default"] && module["default"].ref && module["default"].refTTL) ? module["default"] : null; } },
                { id: "WapQuery", conditions: function (module) { return (module.queryExist) ? module : ((module["default"] && module["default"].queryExist) ? module["default"] : null); } },
                { id: "CryptoLib", conditions: function (module) { return (module.decryptE2EMedia) ? module : null; } },
                { id: "OpenChat", conditions: function (module) { return (module["default"] && module["default"].prototype && module["default"].prototype.openChat) ? module["default"] : null; } },
                { id: "UserConstructor", conditions: function (module) { return (module["default"] && module["default"].prototype && module["default"].prototype.isServer && module["default"].prototype.isUser) ? module["default"] : null; } },
                { id: "SendTextMsgToChat", conditions: function (module) { return (module.sendTextMsgToChat) ? module.sendTextMsgToChat : null; } },
                { id: "ReadSeen", conditions: function (module) { return (module.sendSeen) ? module : null; } },
                { id: "sendDelete", conditions: function (module) { return (module.sendDelete) ? module.sendDelete : null; } },
                { id: "addAndSendMsgToChat", conditions: function (module) { return (module.addAndSendMsgToChat) ? module.addAndSendMsgToChat : null; } },
                { id: "sendMsgToChat", conditions: function (module) { return (module.sendMsgToChat) ? module.sendMsgToChat : null; } },
                { id: "Catalog", conditions: function (module) { return (module.Catalog) ? module.Catalog : null; } },
                { id: "bp", conditions: function (module) { return (module["default"] && module["default"].toString && module["default"].toString().includes('bp_unknown_version')) ? module["default"] : null; } },
                { id: "MsgKey", conditions: function (module) { return (module["default"] && module["default"].toString && module["default"].toString().includes('MsgKey error: obj is null/undefined')) ? module["default"] : null; } },
                { id: "Parser", conditions: function (module) { return (module.convertToTextWithoutSpecialEmojis) ? module["default"] : null; } },
                { id: "Builders", conditions: function (module) { return (module.TemplateMessage && module.HydratedFourRowTemplate) ? module : null; } },
                { id: "Me", conditions: function (module) { return (module.PLATFORMS && module.Conn) ? module["default"] : null; } },
                { id: "CallUtils", conditions: function (module) { return (module.sendCallEnd && module.parseCall) ? module : null; } },
                { id: "Identity", conditions: function (module) { return (module.queryIdentity && module.updateIdentity) ? module : null; } },
                { id: "MyStatus", conditions: function (module) { return (module.getStatus && module.setMyStatus) ? module : null; } },
                { id: "ChatStates", conditions: function (module) { return (module.sendChatStatePaused && module.sendChatStateRecording && module.sendChatStateComposing) ? module : null; } },
                { id: "GroupActions", conditions: function (module) { return (module.sendExitGroup && module.localExitGroup) ? module : null; } },
                { id: "Features", conditions: function (module) { return (module.FEATURE_CHANGE_EVENT && module.features) ? module : null; } },
                { id: "MessageUtils", conditions: function (module) { return (module.storeMessages && module.appendMessage) ? module : null; } },
                { id: "WebMessageInfo", conditions: function (module) { return (module.WebMessageInfo && module.WebFeatures) ? module.WebMessageInfo : null; } },
                { id: "createMessageKey", conditions: function (module) { return (module.createMessageKey && module.createDeviceSentMessage) ? module.createMessageKey : null; } },
                { id: "Participants", conditions: function (module) { return (module.addParticipants && module.removeParticipants && module.promoteParticipants && module.demoteParticipants) ? module : null; } },
                { id: "WidFactory", conditions: function (module) { return (module.isWidlike && module.createWid && module.createWidFromWidLike) ? module : null; } },
                { id: "Base", conditions: function (module) { return (module.setSubProtocol && module.binSend && module.actionNode) ? module : null; } },
                { id: "Versions", conditions: function (module) { return (module.loadProtoVersions && module["default"]["15"] && module["default"]["16"] && module["default"]["17"]) ? module : null; } },
                { id: "Sticker", conditions: function (module) { return (module["default"] && module["default"].Sticker) ? module["default"].Sticker : null; } },
                { id: "MediaUpload", conditions: function (module) { return (module["default"] && module["default"].mediaUpload) ? module["default"] : null; } },
                { id: "UploadUtils", conditions: function (module) { return (module["default"] && module["default"].encryptAndUpload) ? module["default"] : null; } }
            ];
            var _loop_1 = function (idx) {
                if ((typeof modules[idx] === "object") && (modules[idx] !== null)) {
                    neededObjects.forEach(function (needObj) {
                        if (!needObj.conditions || needObj.foundedModule)
                            return;
                        var neededModule = needObj.conditions(modules[idx]);
                        if (neededModule !== null) {
                            foundCount++;
                            needObj.foundedModule = neededModule;
                        }
                    });
                    if (foundCount == neededObjects.length) {
                        return "break";
                    }
                }
            };
            for (var idx in modules) {
                var state_1 = _loop_1(idx);
                if (state_1 === "break")
                    break;
            }
            var neededStore = neededObjects.find(function (needObj) { return needObj.id === "Store"; });
            window.Store = neededStore.foundedModule ? neededStore.foundedModule : {};
            neededObjects.splice(neededObjects.indexOf(neededStore), 1);
            neededObjects.forEach(function (needObj) {
                if (needObj.foundedModule) {
                    window.Store[needObj.id] = needObj.foundedModule;
                }
            });
            window.Store.Chat.modelClass.prototype.sendMessage = function (e) {
                var _a;
                (_a = window.Store).SendTextMsgToChat.apply(_a, __spreadArray([this], arguments, false));
            };
            return window.Store;
        }
        var parasite = "parasite" + Date.now();
        // webpackJsonp([], { [parasite]: (x, y, z) => getStore(z) }, [parasite]);
        if (typeof webpackJsonp === 'function')
            webpackJsonp([], (_a = {}, _a[parasite] = function (x, y, z) { return getStore(z); }, _a), [parasite]);
        else
            window.webpackChunkbuild.push([[parasite], {}, function (o, e, t) { var modules = []; for (var idx in o.m) {
                    modules.push(o(idx));
                } getStore(modules); }]);
    })();
}
window.WAPI = {};
window._WAPI = {};
window.WAPI._serializeRawObj = function (obj) {
    if (obj && obj.toJSON) {
        return obj.toJSON();
    }
    return {};
};
/**
 * Serializes a chat object
 *
 * @param rawChat Chat object
 * @returns {{}}
 */
window.WAPI._serializeChatObj = function (obj) {
    if (obj == undefined) {
        return null;
    }
    return Object.assign(window.WAPI._serializeRawObj(obj), {
        id: obj.id._serialized,
        kind: obj.kind,
        isGroup: obj.isGroup,
        formattedTitle: obj.formattedTitle,
        contact: obj['contact'] ? window.WAPI._serializeContactObj(obj['contact']) : null,
        groupMetadata: obj["groupMetadata"] ? window.WAPI._serializeRawObj(obj["groupMetadata"]) : null,
        presence: obj["presence"] ? window.WAPI._serializeRawObj(obj["presence"]) : null,
        msgs: null
    });
};
window.WAPI._serializeContactObj = function (obj) {
    if (obj == undefined) {
        return null;
    }
    return Object.assign(window.WAPI._serializeRawObj(obj), {
        id: obj.id._serialized,
        formattedName: obj.formattedName,
        isHighLevelVerified: obj.isHighLevelVerified,
        isMe: obj.isMe,
        isMyContact: obj.isMyContact,
        isPSA: obj.isPSA,
        isUser: obj.isUser,
        isVerified: obj.isVerified,
        isWAContact: obj.isWAContact,
        profilePicThumbObj: obj.profilePicThumb ? WAPI._serializeProfilePicThumb(obj.profilePicThumb) : {},
        statusMute: obj.statusMute,
        msgs: null
    });
};
window.WAPI._serializeMessageObj = function (obj) {
    if (obj == undefined) {
        return null;
    }
    var _chat = obj['chat'] ? WAPI._serializeChatObj(obj['chat']) : {};
    if (obj.quotedMsg)
        obj.quotedMsgObj();
    return Object.assign(window.WAPI._serializeRawObj(obj), {
        id: obj.id._serialized,
        from: obj.from._serialized,
        quotedParticipant: obj.quotedParticipant ? obj.quotedParticipant._serialized ? obj.quotedParticipant._serialized : undefined : undefined,
        author: obj.author ? obj.author._serialized ? obj.author._serialized : undefined : undefined,
        chatId: obj.chatId ? obj.chatId._serialized ? obj.chatId._serialized : undefined : undefined,
        to: obj.to ? obj.to._serialized ? obj.to._serialized : undefined : undefined,
        fromMe: obj.id.fromMe,
        sender: obj["senderObj"] ? WAPI._serializeContactObj(obj["senderObj"]) : null,
        timestamp: obj["t"],
        content: obj["body"],
        isGroupMsg: obj.isGroupMsg,
        isLink: obj.isLink,
        isMMS: obj.isMMS,
        isMedia: obj.isMedia,
        isNotification: obj.isNotification,
        isPSA: obj.isPSA,
        type: obj.type,
        chat: _chat,
        isOnline: _chat.isOnline,
        lastSeen: _chat.lastSeen,
        chatId: obj.id.remote,
        quotedMsgObj: WAPI._serializeMessageObj(obj['_quotedMsgObj']),
        mediaData: window.WAPI._serializeRawObj(obj['mediaData']),
        reply: function (body) { return window.WAPI.reply(_chat.id._serialized, body, obj); }
    });
};
window.WAPI._serializeNumberStatusObj = function (obj) {
    if (obj == undefined) {
        return null;
    }
    return Object.assign({}, {
        id: obj.jid,
        status: obj.status,
        isBusiness: (obj.biz === true),
        canReceiveMessage: (obj.status === 200)
    });
};
window.WAPI._serializeProfilePicThumb = function (obj) {
    if (obj == undefined) {
        return null;
    }
    return Object.assign({}, {
        eurl: obj.eurl,
        id: obj.id,
        img: obj.img,
        imgFull: obj.imgFull,
        raw: obj.raw,
        tag: obj.tag
    });
};
window.WAPI.createGroup = function (name, contactsId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Array.isArray(contactsId)) {
                        contactsId = [contactsId];
                    }
                    return [4 /*yield*/, window.Store.WapQuery.createGroup(name, contactsId)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
/**
 * Sends the command for your device to leave a group.
 * @param groupId stirng, the is for the group.
 * returns Promise<void>
 */
window.WAPI.leaveGroup = function (groupId) {
    groupId = typeof groupId == "string" ? groupId : groupId._serialized;
    var group = WAPI.getChat(groupId);
    return Store.GroupActions.sendExitGroup(group);
};
window.WAPI.getAllContacts = function () {
    return window.Store.Contact.map(function (contact) { return WAPI._serializeContactObj(contact); });
};
/**
 * Fetches all contact objects from store, filters them
 *
 * @returns {Array|*} List of contacts
 */
window.WAPI.getMyContacts = function () {
    return window.Store.Contact.filter(function (contact) { return contact.isMyContact === true; }).map(function (contact) { return WAPI._serializeContactObj(contact); });
};
/**
 * Fetches contact object from store by ID
 *
 * @param id ID of contact
 * @returns {T|*} Contact object
 */
window.WAPI.getContact = function (id) {
    var found = window.Store.Contact.get(id);
    return window.WAPI._serializeContactObj(found);
};
window.WAPI.syncContacts = function () {
    Store.Contact.sync();
    return true;
};
/**
 * Fetches all chat objects from store
 *
 * @returns {Array|*} List of chats
 */
window.WAPI.getAllChats = function () {
    return window.Store.Chat.map(function (chat) { return WAPI._serializeChatObj(chat); });
};
window.WAPI.haveNewMsg = function (chat) {
    return chat.unreadCount > 0;
};
window.WAPI.getAllChatsWithNewMsg = function () {
    return window.Store.Chat.filter(window.WAPI.haveNewMsg).map(function (chat) { return WAPI._serializeChatObj(chat); });
};
/**
 * Fetches all chat IDs from store
 *
 * @returns {Array|*} List of chat id's
 */
window.WAPI.getAllChatIds = function () {
    return window.Store.Chat.map(function (chat) { return chat.id._serialized || chat.id; });
};
window.WAPI.getAllNewMessages = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, WAPI.getAllChatsWithNewMsg().map(function (c) { return WAPI.getChat(c.id); }).flatMap(function (c) { return c.msgs._models.filter(function (x) { return x.isNewMsg; }); }).map(WAPI._serializeMessageObj) || []];
        });
    });
};
// nnoo longer determined by x.ack==-1
window.WAPI.getAllUnreadMessages = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, Store.Chat.models.filter(function (chat) { return chat.unreadCount && chat.unreadCount > 0; }).map(function (unreadChat) { return unreadChat.msgs.models.slice(-1 * unreadChat.unreadCount); }).flat().map(WAPI._serializeMessageObj)];
        });
    });
};
window.WAPI.getIndicatedNewMessages = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, JSON.stringify(Store.Chat.models.filter(function (chat) { return chat.unreadCount; }).map(function (chat) { return { id: chat.id, indicatedNewMessages: chat.msgs.models.slice(Math.max(chat.msgs.length - chat.unreadCount, 0)).filter(function (msg) { return !msg.id.fromMe; }) }; }))];
        });
    });
};
window.WAPI.getSingleProperty = function (namespace, id, property) {
    if (Store[namespace] && Store[namespace].get(id) && Object.keys(Store[namespace].get(id)).find(function (x) { return x.includes(property); }))
        return Store[namespace].get(id)[property];
    return 404;
};
window.WAPI.getAllChatsWithMessages = function (onlyNew) {
    return __awaiter(this, void 0, void 0, function () {
        var x, result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    x = [];
                    if (onlyNew) {
                        x.push(WAPI.getAllChatsWithNewMsg().map(function (c) { return WAPI.getChat(c.id._serialized); }));
                    }
                    else {
                        x.push(WAPI.getAllChatIds().map(function (c) { return WAPI.getChat(c); }));
                    }
                    return [4 /*yield*/, Promise.all(x)];
                case 1:
                    result = (_a.sent()).flatMap(function (x) { return x; });
                    return [2 /*return*/, JSON.stringify(result)];
            }
        });
    });
};
/**
 * Fetches all groups objects from store
 *
 * @returns {Array|*} List of chats
 */
window.WAPI.getAllGroups = function () {
    return window.WAPI.getAllChats().filter(function (chat) { return chat.isGroup; });
};
/**
 * Sets the chat state
 *
 * @param {0|1|2} chatState The state you want to set for the chat. Can be TYPING (1), RECRDING (2) or PAUSED (3);
 * returns {boolean}
 */
window.WAPI.sendChatstate = function (state, chatId) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = state;
                    switch (_a) {
                        case 0: return [3 /*break*/, 1];
                        case 1: return [3 /*break*/, 3];
                        case 2: return [3 /*break*/, 5];
                    }
                    return [3 /*break*/, 7];
                case 1: return [4 /*yield*/, window.Store.ChatStates.sendChatStateComposing(chatId)];
                case 2:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 3: return [4 /*yield*/, window.Store.ChatStates.sendChatStateRecording(chatId)];
                case 4:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 5: return [4 /*yield*/, window.Store.ChatStates.sendChatStatePaused(chatId)];
                case 6:
                    _b.sent();
                    return [3 /*break*/, 8];
                case 7: return [2 /*return*/, false];
                case 8: return [2 /*return*/, true];
            }
        });
    });
};
/**
 * Fetches chat object from store by ID
 *
 * @param id ID of chat
 * @returns {T|*} Chat object
 */
window.WAPI.getChat = function (id) {
    if (!id)
        return false;
    id = typeof id == "string" ? id : id._serialized;
    var found = window.Store.Chat.get(id);
    if (found)
        found.sendMessage = (found.sendMessage) ? found.sendMessage : function () { return window.Store.sendMessage.apply(this, arguments); };
    return found;
};
/**
 * Get your status
 * @param {string} to '000000000000@c.us'
 * returns: {string,string} and string -"Hi, I am using WA"
 */
window.WAPI.getStatus = function (id) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Store.MyStatus.getStatus(id)];
            case 1: return [2 /*return*/, _a.sent()];
        }
    });
}); };
window.WAPI.getChatByName = function (name) {
    return window.WAPI.getAllChats().find(function (chat) { return chat.name === name; });
};
window.WAPI.sendImageFromDatabasePicBot = function (picId, chatId, caption) {
    var chatDatabase = window.WAPI.getChatByName('DATABASEPICBOT');
    var msgWithImg = chatDatabase.msgs.find(function (msg) { return msg.caption == picId; });
    if (msgWithImg === undefined) {
        return false;
    }
    var chatSend = WAPI.getChat(chatId);
    if (chatSend === undefined) {
        return false;
    }
    var oldCaption = msgWithImg.caption;
    msgWithImg.id.id = window.WAPI.getNewId();
    msgWithImg.id.remote = chatId;
    msgWithImg.t = Math.ceil(new Date().getTime() / 1000);
    msgWithImg.to = chatId;
    if (caption !== undefined && caption !== '') {
        msgWithImg.caption = caption;
    }
    else {
        msgWithImg.caption = '';
    }
    msgWithImg.collection.send(msgWithImg).then(function (e) {
        msgWithImg.caption = oldCaption;
    });
    return true;
};
window.WAPI.getGeneratedUserAgent = function (useragent) {
    if (!useragent.includes('WhatsApp'))
        return 'WhatsApp/0.4.315 ' + useragent;
    return useragent.replace(useragent.match(/WhatsApp\/([.\d])*/g)[0].match(/[.\d]*/g).find(function (x) { return x; }), window.Debug.VERSION);
};
window.WAPI.getWAVersion = function () {
    return window.Debug.VERSION;
};
/**
 * Automatically sends a link with the auto generated link preview. You can also add a custom message to be added.
 * @param chatId
 * @param url string A link, for example for youtube. e.g https://www.youtube.com/watch?v=61O-Galzc5M
 * @param text string Custom text as body of the message, this needs to include the link or it will be appended after the link.
 */
window.WAPI.sendLinkWithAutoPreview = function (chatId, url, text) {
    return __awaiter(this, void 0, void 0, function () {
        var chatSend, linkPreview;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    text = text || '';
                    chatSend = WAPI.getChat(chatId);
                    if (chatSend === undefined) {
                        return [2 /*return*/, false];
                    }
                    return [4 /*yield*/, Store.WapQuery.queryLinkPreview(url)];
                case 1:
                    linkPreview = _a.sent();
                    return [4 /*yield*/, chatSend.sendMessage(text.includes(url) ? text : url + "\n" + text, { linkPreview: linkPreview })];
                case 2: return [2 /*return*/, (_a.sent()) == 'OK'];
            }
        });
    });
};
window.WAPI.sendMessageWithThumb = function (thumb, url, title, description, text, chatId) {
    var chatSend = WAPI.getChat(chatId);
    if (chatSend === undefined) {
        return false;
    }
    var linkPreview = {
        canonicalUrl: url,
        description: description,
        matchedText: url,
        title: title,
        thumbnail: thumb // Thumbnail max size allowed: 200x200
    };
    chatSend.sendMessage(text.includes(url) ? text : url + "\n" + text, { linkPreview: linkPreview, mentionedJidList: [], quotedMsg: null, quotedMsgAdminGroupJid: null });
    return true;
};
window.WAPI.revokeGroupInviteLink = function (chatId) {
    return __awaiter(this, void 0, void 0, function () {
        var chat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chat = Store.Chat.get(chatId);
                    if (!chat.isGroup)
                        return [2 /*return*/, false];
                    return [4 /*yield*/, Store.GroupInvite.revokeGroupInvite(chat)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
};
window.WAPI.getGroupInviteLink = function (chatId) {
    return __awaiter(this, void 0, void 0, function () {
        var chat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chat = Store.Chat.get(chatId);
                    if (!chat.isGroup)
                        return [2 /*return*/, false];
                    return [4 /*yield*/, Store.GroupInvite.queryGroupInviteCode(chat)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, "https://chat.whatsapp.com/" + chat.inviteCode];
            }
        });
    });
};
window.WAPI.inviteInfo = function (link) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Store.WapQuery.groupInviteInfo(link.split('\/').pop()).then(function (r) { return r.status === 200 ? WAPI.quickClean(r) : r.status; })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
window.WAPI.getNewId = function () {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 20; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
};
window.WAPI.getChatById = function (id) {
    var found = WAPI.getChat(id);
    if (found) {
        found = WAPI._serializeChatObj(found);
    }
    else {
        found = false;
    }
    return found;
};
/**
 * I return all unread messages from an asked chat and mark them as read.
 *
 * :param id: chat id
 * :type  id: string
 *
 * :param includeMe: indicates if user messages have to be included
 * :type  includeMe: boolean
 *
 * :param includeNotifications: indicates if notifications have to be included
 * :type  includeNotifications: boolean
 *
 * :returns: list of unread messages from asked chat
 * :rtype: object
 */
window.WAPI.getUnreadMessagesInChat = function (id, includeMe, includeNotifications) {
    // get chat and its messages
    var chat = WAPI.getChat(id);
    var messages = chat.msgs._models;
    // initialize result list
    var output = [];
    // look for unread messages, newest is at the end of array
    for (var i = messages.length - 1; i >= 0; i--) {
        // system message: skip it
        if (i === "remove") {
            continue;
        }
        // get message
        var messageObj = messages[i];
        // found a read message: stop looking for others
        if (typeof (messageObj.isNewMsg) !== "boolean" || messageObj.isNewMsg === false) {
            continue;
        }
        else {
            messageObj.isNewMsg = false;
            // process it
            var message = WAPI.processMessageObj(messageObj, includeMe, includeNotifications);
            // save processed message on result list
            if (message)
                output.push(message);
        }
    }
    // return result list
    return output;
};
/**
 * Load more messages in chat object from server. Use this in a while loop
 *
 * @param id ID of chat
 * @returns None
 */
window.WAPI.loadEarlierMessages = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, someEarlierMessages;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chat = WAPI.getChat(id);
                    if (!chat) return [3 /*break*/, 2];
                    return [4 /*yield*/, chat.loadEarlierMsgs()];
                case 1:
                    someEarlierMessages = _a.sent();
                    if (someEarlierMessages)
                        return [2 /*return*/, someEarlierMessages.map(WAPI._serializeMessageObj)];
                    _a.label = 2;
                case 2: return [2 /*return*/, false];
            }
        });
    });
};
/**
 * Load more messages in chat object from store by ID
 *
 * @param id ID of chat
 * @returns None
 */
window.WAPI.loadAllEarlierMessages = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var found;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    found = WAPI.getChat(id);
                    _a.label = 1;
                case 1:
                    if (!!found.msgs.msgLoadState.noEarlierMsgs) return [3 /*break*/, 3];
                    console.log('loading more messages');
                    return [4 /*yield*/, found.loadEarlierMsgs()];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, true];
            }
        });
    });
};
window.WAPI.asyncLoadAllEarlierMessages = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, window.WAPI.loadAllEarlierMessages(id)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
window.WAPI.areAllMessagesLoaded = function (id) {
    var found = WAPI.getChat(id);
    if (!found.msgs.msgLoadState.noEarlierMsgs) {
        return false;
    }
    return true;
};
/**
 * Load more messages in chat object from store by ID till a particular date
 *
 * @param id ID of chat
 * @param lastMessage UTC timestamp of last message to be loaded
 * @returns None
 */
window.WAPI.loadEarlierMessagesTillDate = function (id, lastMessage) {
    return __awaiter(this, void 0, void 0, function () {
        var found;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    found = WAPI.getChat(id);
                    x = function () {
                        return __awaiter(this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(found.msgs.models[0].t > lastMessage && !found.msgs.msgLoadState.noEarlierMsgs)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, found.loadEarlierMsgs().then(x)];
                                    case 1: return [2 /*return*/, _a.sent()];
                                    case 2: return [2 /*return*/, true];
                                }
                            });
                        });
                    };
                    return [4 /*yield*/, x()];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
/**
 * Fetches all group metadata objects from store
 *
 * @returns {Array|*} List of group metadata
 */
window.WAPI.getAllGroupMetadata = function () {
    return window.Store.GroupMetadata.map(function (groupData) { return groupData.all; });
};
/**
 * Fetches group metadata object from store by ID
 *
 * @param id ID of group
 * @returns {T|*} Group metadata object
 */
window.WAPI.getGroupMetadata = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, window.Store.GroupMetadata.find(id)];
        });
    });
};
/**
 * Fetches group participants
 *
 * @param id ID of group
 * @returns {Promise.<*>} Yields group metadata
 * @private
 */
window.WAPI._getGroupParticipants = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, WAPI.getGroupMetadata(id)];
                case 1: return [2 /*return*/, (_a.sent()).participants];
            }
        });
    });
};
/**
 * Fetches IDs of group participants
 *
 * @param id ID of group
 * @returns {Promise.<Array|*>} Yields list of IDs
 */
window.WAPI.getGroupParticipantIDs = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, WAPI._getGroupParticipants(id)];
                case 1: return [2 /*return*/, (_a.sent())
                        .map(function (participant) { return participant.id._serialized; })];
            }
        });
    });
};
window.WAPI.getGroupAdmins = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, WAPI._getGroupParticipants(id)];
                case 1: return [2 /*return*/, (_a.sent())
                        .filter(function (participant) { return participant.isAdmin; })
                        .map(function (admin) { return admin.id._serialized; })];
            }
        });
    });
};
WAPI.iAmAdmin = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(Store.GroupMetadata.models.map(function (_a) {
                        var id = _a.id;
                        return Store.GroupMetadata.find(id);
                    }))];
                case 1: return [2 /*return*/, (_a.sent()).filter(function (_a) {
                        var participants = _a.participants;
                        return participants.iAmAdmin() || participants.iAmSuperAdmin();
                    }).map(function (_a) {
                        var id = _a.id;
                        return id._serialized;
                    })];
            }
        });
    });
};
/**
 * Returns an object with all of your host device details
 */
window.WAPI.getMe = function () {
    return __assign(__assign({}, WAPI.quickClean(__assign(__assign({}, Store.Contact.get(Store.Me.wid).attributes), Store.Me.attributes))), { me: Store.Me.me });
};
window.WAPI.isLoggedIn = function () {
    // Contact always exists when logged in
    var isLogged = window.Store.Contact && window.Store.Contact.checksum !== undefined;
    return isLogged;
};
window.WAPI.isConnected = function () {
    // Phone or connection Disconnected icon appears when phone or connection is disconnected
    var isConnected = (document.querySelector('[data-testid="alert-phone"]') == null && document.querySelector('[data-testid="alert-computer"]') == null) ? true : false;
    return isConnected;
};
//I dont think this will work for group chats.
window.WAPI.isChatOnline = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!Store.Chat.get(id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Store.Chat.get(id).presence.subscribe().then(function (_) { return Store.Chat.get(id).presence.attributes.isOnline; })];
                case 1:
                    _a = _b.sent();
                    return [3 /*break*/, 3];
                case 2:
                    _a = false;
                    _b.label = 3;
                case 3: return [2 /*return*/, _a];
            }
        });
    });
};
window.WAPI.processMessageObj = function (messageObj, includeMe, includeNotifications) {
    if (messageObj.isNotification) {
        if (includeNotifications)
            return WAPI._serializeMessageObj(messageObj);
        else
            return;
        // System message
        // (i.e. "Messages you send to this chat and calls are now secured with end-to-end encryption...")
    }
    else if (messageObj.id.fromMe === false || includeMe) {
        return WAPI._serializeMessageObj(messageObj);
    }
    return;
};
window.WAPI.getAllMessagesInChat = function (id, includeMe, includeNotifications, clean) {
    if (includeMe === void 0) { includeMe = false; }
    if (includeNotifications === void 0) { includeNotifications = false; }
    if (clean === void 0) { clean = false; }
    var chat = WAPI.getChat(id);
    var output = chat.msgs._models || [];
    if (!includeMe)
        output = output.filter(function (m) { return !m.id.fromMe; });
    if (!includeNotifications)
        output = output.filter(function (m) { return !m.isNotification; });
    return (clean ? output.map(WAPI.quickClean) : output.map(WAPI._serializeMessageObj)) || [];
};
window.WAPI.loadAndGetAllMessagesInChat = function (id, includeMe, includeNotifications) {
    return WAPI.loadAllEarlierMessages(id).then(function (_) {
        var chat = WAPI.getChat(id);
        var output = [];
        var messages = chat.msgs._models;
        for (var i in messages) {
            if (i === "remove") {
                continue;
            }
            var messageObj = messages[i];
            var message = WAPI.processMessageObj(messageObj, includeMe, includeNotifications);
            if (message)
                output.push(message);
        }
        return output;
    });
};
window.WAPI.getAllMessageIdsInChat = function (id, includeMe, includeNotifications) {
    var chat = WAPI.getChat(id);
    var output = [];
    var messages = chat.msgs._models;
    for (var i in messages) {
        if ((i === "remove")
            || (!includeMe && messages[i].isMe)
            || (!includeNotifications && messages[i].isNotification)) {
            continue;
        }
        output.push(messages[i].id._serialized);
    }
    return output;
};
window.WAPI.getMessageById = function (id) {
    var result = false;
    try {
        var msg = window.Store.Msg.get(id);
        if (msg) {
            result = WAPI.processMessageObj(msg, true, true);
        }
    }
    catch (err) { }
    return result;
};
window.WAPI.sendMessageWithMentions = function (ch, body) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, chatId, msgIveSent, tempMsg, newId, mentionedJidList, extend;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chat = ch.id ? ch : Store.Chat.get(ch);
                    chatId = chat.id._serialized;
                    msgIveSent = chat.msgs.filter(function (msg) { return msg.__x_isSentByMe; })[0];
                    if (!msgIveSent)
                        return [2 /*return*/, chat.sendMessage(body)];
                    tempMsg = Object.create(msgIveSent);
                    newId = window.WAPI.getNewMessageId(chatId);
                    mentionedJidList = body.match(/@(\d*)/g).filter(function (x) { return x.length > 5; }).map(function (x) { return Store.Contact.get(x.replace("@", "") + "@c.us") ? new Store.WidFactory.createUserWid(x.replace("@", "")) : ''; }) || undefined;
                    extend = {
                        ack: 0,
                        id: newId,
                        local: !0,
                        self: "out",
                        t: parseInt(new Date().getTime() / 1000),
                        to: new Store.WidFactory.createWid(chatId),
                        isNewMsg: !0,
                        type: "chat",
                        body: body,
                        quotedMsg: null,
                        mentionedJidList: mentionedJidList
                    };
                    Object.assign(tempMsg, extend);
                    return [4 /*yield*/, Store.addAndSendMsgToChat(chat, tempMsg)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, newId._serialized];
            }
        });
    });
};
window.WAPI.sendMessageReturnId = function (ch, body) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, chatId, msgIveSent, tempMsg, newId, extend;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chat = ch.id ? ch : Store.Chat.get(ch);
                    chatId = chat.id._serialized;
                    msgIveSent = chat.msgs.filter(function (msg) { return msg.__x_isSentByMe; })[0];
                    if (!msgIveSent)
                        return [2 /*return*/, chat.sendMessage(body)];
                    tempMsg = Object.create(msgIveSent);
                    newId = window.WAPI.getNewMessageId(chatId);
                    extend = {
                        ack: 0,
                        id: newId,
                        local: !0,
                        self: "out",
                        t: parseInt(new Date().getTime() / 1000),
                        to: new Store.WidFactory.createWid(chatId),
                        isNewMsg: !0,
                        type: "chat",
                        body: body,
                        quotedMsg: null
                    };
                    Object.assign(tempMsg, extend);
                    return [4 /*yield*/, Store.addAndSendMsgToChat(chat, tempMsg)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, newId._serialized];
            }
        });
    });
};
window.WAPI.sendMessage = function (id, message) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, contact;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (id === 'status@broadcast')
                        return [2 /*return*/, 'Not able to send message to broadcast'];
                    chat = WAPI.getChat(id);
                    if (!(!chat && !id.includes('g') || chat.msgs.models.length == 0)) return [3 /*break*/, 2];
                    contact = WAPI.getContact(id);
                    if (!contact || !contact.isMyContact)
                        return [2 /*return*/, 'Not a contact'];
                    return [4 /*yield*/, Store.Chat.find(Store.Contact.get(id).id)];
                case 1:
                    _a.sent();
                    chat = WAPI.getChat(id);
                    _a.label = 2;
                case 2:
                    if (!(chat !== undefined)) return [3 /*break*/, 4];
                    return [4 /*yield*/, chat.sendMessage(message).then(function (_) { return chat.lastReceivedKey._serialized; })];
                case 3: 
                // return WAPI.sendMessageReturnId(chat,message).then(id=>{return id})
                return [2 /*return*/, _a.sent()];
                case 4: return [2 /*return*/, false];
            }
        });
    });
};
window.WAPI.sendSeen = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var chat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!id)
                        return [2 /*return*/, false];
                    chat = window.WAPI.getChat(id);
                    if (!(chat !== undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Store.ReadSeen.sendSeen(chat, false)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
                case 2: return [2 /*return*/, false];
            }
        });
    });
};
window.WAPI.markAsUnread = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var chat;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chat = window.WAPI.getChat(id);
                    if (!(chat !== undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Store.ReadSeen.markUnread(chat, true)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
                case 2: return [2 /*return*/, false];
            }
        });
    });
};
function isChatMessage(message) {
    if (message.isSentByMe) {
        return false;
    }
    if (message.isNotification) {
        return false;
    }
    if (!message.isUserCreatedType) {
        return false;
    }
    return true;
}
window.WAPI.setPresence = function (available) {
    if (available)
        Store._Presence.setPresenceAvailable();
    else
        Store._Presence.setPresenceUnavailable();
};
window.WAPI.getUnreadMessages = function (includeMe, includeNotifications, use_unread_count) {
    var chats = window.Store.Chat.models;
    var output = [];
    for (var chat in chats) {
        if (isNaN(chat)) {
            continue;
        }
        var messageGroupObj = chats[chat];
        var messageGroup = WAPI._serializeChatObj(messageGroupObj);
        messageGroup.messages = [];
        var messages = messageGroupObj.msgs._models;
        for (var i = messages.length - 1; i >= 0; i--) {
            var messageObj = messages[i];
            if (typeof (messageObj.isNewMsg) != "boolean" || messageObj.isNewMsg === false) {
                continue;
            }
            else {
                messageObj.isNewMsg = false;
                var message = WAPI.processMessageObj(messageObj, includeMe, includeNotifications);
                if (message) {
                    messageGroup.messages.push(message);
                }
            }
        }
        if (messageGroup.messages.length > 0) {
            output.push(messageGroup);
        }
        else { // no messages with isNewMsg true
            if (use_unread_count) {
                var n = messageGroupObj.unreadCount; // will use unreadCount attribute to fetch last n messages from sender
                for (var i = messages.length - 1; i >= 0; i--) {
                    var messageObj = messages[i];
                    if (n > 0) {
                        if (!messageObj.isSentByMe) {
                            var message = WAPI.processMessageObj(messageObj, includeMe, includeNotifications);
                            messageGroup.messages.unshift(message);
                            n -= 1;
                        }
                    }
                    else if (n === -1) { // chat was marked as unread so will fetch last message as unread
                        if (!messageObj.isSentByMe) {
                            var message = WAPI.processMessageObj(messageObj, includeMe, includeNotifications);
                            messageGroup.messages.unshift(message);
                            break;
                        }
                    }
                    else { // unreadCount = 0
                        break;
                    }
                }
                if (messageGroup.messages.length > 0) {
                    messageGroupObj.unreadCount = 0; // reset unread counter
                    output.push(messageGroup);
                }
            }
        }
    }
    return output;
};
window.WAPI.getGroupOwnerID = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var output;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, WAPI.getGroupMetadata(id)];
                case 1:
                    output = (_a.sent()).owner.id;
                    return [2 /*return*/, output];
            }
        });
    });
};
window.WAPI.getCommonGroups = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var output, _a, _b, _i, idx, err_1;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    output = [];
                    groups = window.WAPI.getAllGroups();
                    _a = [];
                    for (_b in groups)
                        _a.push(_b);
                    _i = 0;
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3 /*break*/, 6];
                    idx = _a[_i];
                    _c.label = 2;
                case 2:
                    _c.trys.push([2, 4, , 5]);
                    return [4 /*yield*/, window.WAPI.getGroupParticipantIDs(groups[idx].id)];
                case 3:
                    participants = _c.sent();
                    if (participants.filter(function (participant) { return participant == id; }).length) {
                        output.push(groups[idx]);
                    }
                    return [3 /*break*/, 5];
                case 4:
                    err_1 = _c.sent();
                    console.log("Error in group:");
                    console.log(groups[idx]);
                    console.log(err_1);
                    return [3 /*break*/, 5];
                case 5:
                    _i++;
                    return [3 /*break*/, 1];
                case 6: return [2 /*return*/, output];
            }
        });
    });
};
window.WAPI.getProfilePicFromServer = function (id) {
    return Store.WapQuery.profilePicFind(id).then(function (x) { return x.eurl; });
};
window.WAPI.getProfilePicSmallFromId = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, window.Store.ProfilePicThumb.find(id).then(function (d) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(d.img !== undefined)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, window.WAPI.downloadFileWithCredentials(d.img)];
                                case 1: return [2 /*return*/, _a.sent()];
                                case 2: return [2 /*return*/, false];
                            }
                        });
                    }); }, function (e) {
                        return false;
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
window.WAPI.getProfilePicFromId = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, window.Store.ProfilePicThumb.find(id).then(function (d) { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (!(d.imgFull !== undefined)) return [3 /*break*/, 2];
                                    return [4 /*yield*/, window.WAPI.downloadFileWithCredentials(d.imgFull)];
                                case 1: return [2 /*return*/, _a.sent()];
                                case 2: return [2 /*return*/, false];
                            }
                        });
                    }); }, function (e) {
                        return false;
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
window.WAPI.downloadFileWithCredentials = function (url) {
    return __awaiter(this, void 0, void 0, function () {
        var ab;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!axios || !url)
                        return [2 /*return*/, false];
                    return [4 /*yield*/, axios.get(url, { responseType: 'arraybuffer' })];
                case 1:
                    ab = (_a.sent()).data;
                    return [2 /*return*/, btoa(new Uint8Array(ab).reduce(function (data, byte) { return data + String.fromCharCode(byte); }, ''))];
            }
        });
    });
};
window.WAPI.downloadFile = function (url) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.onload = function () {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 200) {
                                    var reader_1 = new FileReader();
                                    reader_1.readAsDataURL(xhr.response);
                                    reader_1.onload = function (e) {
                                        resolve(reader_1.result.substr(reader_1.result.indexOf(',') + 1));
                                    };
                                }
                                else {
                                    console.error(xhr.statusText);
                                }
                            }
                            else {
                                console.log(err);
                                resolve(false);
                            }
                        };
                        xhr.open("GET", url, true);
                        xhr.responseType = 'blob';
                        xhr.send(null);
                    })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
window.WAPI.getBatteryLevel = function () {
    return Store.Conn.battery;
};
window.WAPI.getIsPlugged = function () {
    return Store.Conn.plugged;
};
window.WAPI.deleteConversation = function (chatId) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, conversation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = new window.Store.UserConstructor(chatId, { intentionallyUsePrivateConstructor: true });
                    conversation = WAPI.getChat(userId);
                    if (!conversation) {
                        return [2 /*return*/, false];
                    }
                    return [4 /*yield*/, window.Store.sendDelete(conversation, false).then(function () {
                            return true;
                        })["catch"](function () {
                            return false;
                        })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
window.WAPI.smartDeleteMessages = function (chatId, messageArray, onlyLocal) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, conversation, messagesToDelete, jobs;
        return __generator(this, function (_a) {
            userId = new Store.WidFactory.createWid(chatId);
            conversation = WAPI.getChat(userId);
            if (!conversation)
                return [2 /*return*/, false];
            if (!Array.isArray(messageArray)) {
                messageArray = [messageArray];
            }
            messagesToDelete = messageArray.map(function (msgId) { return (typeof msgId == 'string') ? window.Store.Msg.get(msgId) : msgId; }).filter(function (x) { return x; });
            if (messagesToDelete.length == 0)
                return [2 /*return*/, true];
            jobs = onlyLocal ? [conversation.sendDeleteMsgs(messagesToDelete, conversation)] : [
                conversation.sendRevokeMsgs(messagesToDelete.filter(function (msg) { return msg.isSentByMe; }), conversation),
                conversation.sendDeleteMsgs(messagesToDelete.filter(function (msg) { return !msg.isSentByMe; }), conversation)
            ];
            return [2 /*return*/, Promise.all(jobs).then(function (_) { return true; })];
        });
    });
};
window.WAPI.deleteMessage = function (chatId, messageArray, revoke) {
    if (revoke === void 0) { revoke = false; }
    return __awaiter(this, void 0, void 0, function () {
        var userId, conversation, messagesToDelete;
        return __generator(this, function (_a) {
            userId = new window.Store.UserConstructor(chatId, { intentionallyUsePrivateConstructor: true });
            conversation = WAPI.getChat(userId);
            if (!conversation)
                return [2 /*return*/, false];
            if (!Array.isArray(messageArray)) {
                messageArray = [messageArray];
            }
            messagesToDelete = messageArray.map(function (msgId) { return window.Store.Msg.get(msgId); });
            if (revoke) {
                conversation.sendRevokeMsgs(messagesToDelete, conversation);
            }
            else {
                conversation.sendDeleteMsgs(messagesToDelete, conversation);
            }
            return [2 /*return*/, true];
        });
    });
};
window.WAPI.clearChat = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Store.ChatUtil.sendClear(Store.Chat.get(id), true)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
/**
 * @param id The id of the conversation
 * @param archive boolean true => archive, false => unarchive
 * @return boolean true: worked, false: didnt work (probably already in desired state)
 */
window.WAPI.archiveChat = function (id, archive) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Store.Archive.setArchive(Store.Chat.get(id), archive).then(function (_) { return true; })["catch"](function (_) { return false; })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
/**
 * Extracts vcards from a message
 * @param id string id of the message to extract the vcards from
 * @returns [vcard]
 * ```
 * [
 * {
 * displayName:"Contact name",
 * vcard: "loong vcard string"
 * }
 * ]
 * ``` or false if no valid vcards found
 */
window.WAPI.getVCards = function (id) {
    var msg = Store.Msg.get(id);
    if (msg) {
        if (msg.type == 'vcard') {
            return [
                {
                    displayName: msg.subtype,
                    vcard: msg.body
                }
            ];
        }
        else if (msg.type == 'multi_vcard') {
            return msg.vcardList;
        }
        else
            return false;
    }
    else {
        return false;
    }
};
window.WAPI.checkNumberStatus = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var result, data, e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, window.Store.WapQuery.queryExist(id)];
                case 1:
                    result = _a.sent();
                    if (result.jid === undefined)
                        throw 404;
                    data = window.WAPI._serializeNumberStatusObj(result);
                    if (data.status == 200)
                        data.numberExists = true;
                    return [2 /*return*/, data];
                case 2:
                    e_1 = _a.sent();
                    return [2 /*return*/, window.WAPI._serializeNumberStatusObj({
                            status: e_1,
                            jid: id
                        })];
                case 3: return [2 /*return*/];
            }
        });
    });
};
window.WAPI.onAnyMessage = function (callback) { return window.Store.Msg.on('add', function (newMessage) {
    if (newMessage && newMessage.isNewMsg) {
        if (!newMessage.clientUrl && (newMessage.mediaKeyTimestamp || newMessage.filehash)) {
            var cb_1 = function (msg) {
                if (msg.id._serialized === newMessage.id._serialized && msg.clientUrl) {
                    callback(WAPI.processMessageObj(msg, true, false));
                    Store.Msg.off('change:isUnsentMedia', cb_1);
                }
            };
            Store.Msg.on('change:isUnsentMedia', cb_1);
        }
        else {
            var pm = window.WAPI.processMessageObj(newMessage, true, true);
            var message = pm ? JSON.parse(JSON.stringify(pm)) : WAPI.quickClean(newMessage.attributes);
            if (message) {
                callback(message);
            }
        }
    }
}); };
/**
 * Registers a callback to be called when a the acknowledgement state of the phone connection.
 * @param callback - function - Callback function to be called when the device state changes. this returns 'CONNECTED' or 'TIMEOUT'
 * @returns {boolean}
 */
window.WAPI.onStateChanged = function (callback) {
    window.Store.State["default"].on('change:state', function (_a) {
        var state = _a.state;
        return callback(state);
    });
    return true;
};
/**
 * Returns the current state of the session. Possible state values:
 * "CONFLICT"
 * "CONNECTED"
 * "DEPRECATED_VERSION"
 * "OPENING"
 * "PAIRING"
 * "PROXYBLOCK"
 * "SMB_TOS_BLOCK"
 * "TIMEOUT"
 * "TOS_BLOCK"
 * "UNLAUNCHED"
 * "UNPAIRED"
 * "UNPAIRED_IDLE"
 */
window.WAPI.getState = function () {
    return Store.State["default"].state;
};
/**
 * Registers a callback to be called when your phone receives a new call request.
 * @param callback - function - Callback function to be called upon a new call. returns a call object.
 * @returns {boolean}
 */
window.WAPI.onIncomingCall = function (callback) {
    window.Store.Call.on('add', callback);
    return true;
};
/**
 * @param label: either the id or the name of the label. id will be something simple like anhy nnumber from 1-10, name is the label of the label if that makes sense.
 * @param objectId The Chat, message or contact id to which you want to add a label
 * @param type The type of the action. It can be either "add" or "remove"
 * @returns boolean true if it worked otherwise false
 */
window.WAPI.addOrRemoveLabels = function (label, objectId, type) {
    return __awaiter(this, void 0, void 0, function () {
        var id, to, status;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = Store.Label.models.find(function (x) { return x.id == label || x.name == label; }).id;
                    to = Store.Chat.get(objectId) || Store.Msg.get(objectId) || Store.Contact.get(objectId);
                    if (!id || !to)
                        return [2 /*return*/, false];
                    return [4 /*yield*/, Store.Label.addOrRemoveLabels([{ id: id, type: type }], [to])];
                case 1:
                    status = (_a.sent()).status;
                    return [2 /*return*/, status === 200];
            }
        });
    });
};
/**
 * Registers a callback to be called when a the acknowledgement state of a message changes.
 * @param callback - function - Callback function to be called when a message acknowledgement changes.
 * @returns {boolean}
 */
window.WAPI.onAck = function (callback) {
    Store.Msg.on("change:ack", function (m) { return callback(WAPI.quickClean(m)); });
    return true;
};
//returns an array of liveLocationChangeObjects
window.WAPI.forceUpdateLiveLocation = function (chatId) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (!Store.LiveLocation.get(chatId))
                        return [2 /*return*/, false];
                    _b = (_a = WAPI).quickClean;
                    return [4 /*yield*/, Store.LiveLocation.update(chatId)];
                case 1: return [2 /*return*/, _b.apply(_a, [_c.sent()]).participants.map(function (l) {
                        return __assign(__assign({}, l), { msgId: l.msg.id._serialized });
                    })];
            }
        });
    });
};
window.WAPI.onLiveLocation = function (chatId, callback) {
    var lLChat = Store.LiveLocation.get(chatId);
    if (lLChat) {
        var validLocs = lLChat.participants.validLocations();
        validLocs.map(function (x) { return x.on('change:lastUpdated', function (x, y, z) {
            var id = x.id, lat = x.lat, lng = x.lng, accuracy = x.accuracy, degrees = x.degrees, speed = x.speed, lastUpdated = x.lastUpdated;
            var l = {
                id: id.toString(),
                lat: lat,
                lng: lng,
                accuracy: accuracy,
                degrees: degrees,
                speed: speed,
                lastUpdated: lastUpdated
            };
            callback(l);
        }); });
        return true;
    }
    else {
        return false;
    }
};
window.WAPI.onBattery = function (callback) {
    window.Store.Conn.on('change:battery', function (_a) {
        var battery = _a.battery;
        return callback(battery);
    });
    return true;
};
window.WAPI.onPlugged = function (callback) {
    window.Store.Conn.on('change:plugged', function (_a) {
        var plugged = _a.plugged;
        return callback(plugged);
    });
    return true;
};
/**
 * A new approach to listening to add and remove events from groups. This takes only a callback and is prevents memory leaks
 */
WAPI.onGlobalParicipantsChanged = function (callback) {
    var events = [
        'change:isAdmin',
        'remove',
        'add'
    ];
    //const id = eventName.replace('group_participant_change','');
    var chats = Store.GroupMetadata.models
        //.filter(group=>group.participants.models.find(participant=>participant.id._serialized===id))
        .filter(function (x) { return x.id.server !== 'broadcast'; }).map(function (group) { return window.Store.Chat.get(group.id._serialized); });
    var cb = function (eventName, eventData, extra) {
        if (events.includes(eventName)) {
            var action = eventName;
            if (eventName == 'change:isAdmin') {
                action = extra ? 'promote' : 'demote';
            }
            callback({
                by: undefined,
                action: action,
                who: eventData.id._serialized,
                chat: extra.parent.id._serialized
            });
            chats.map(function (chat) {
                chat.groupMetadata.participants.off('all', cb);
                chat.groupMetadata.participants.off(cb);
            });
        }
    };
    chats.map(function (chat) { return chat.groupMetadata.participants.on('all', cb); });
    Store.GroupMetadata.on('all', function (eventName, groupId) { return chats.map(function (chat) { return chat.groupMetadata.participants.on('all', cb); }); });
    return true;
};
/**
 * Registers a callback to participant changes on a certain, specific group
 * @param groupId - string - The id of the group that you want to attach the callback to.
 * @param callback - function - Callback function to be called when a message acknowledgement changes. The callback returns 3 variables
 * @returns {boolean}
 */
window.WAPI.onParticipantsChanged = function (groupId, callback) {
    var subtypeEvents = [
        "invite",
        "add",
        "remove",
        "leave",
        "promote",
        "demote"
    ];
    var events = [
        'change:isAdmin',
        'remove',
        'add'
    ];
    var chat = window.Store.Chat.get(groupId);
    chat.groupMetadata.participants.on('all', function (eventName, eventData, extra) {
        if (events.includes(eventName)) {
            var action = eventName;
            if (eventName == 'change:isAdmin') {
                action = extra ? 'promote' : 'demote';
            }
            callback({
                by: undefined,
                action: action,
                who: eventData.id._serialized
            });
        }
    });
};
/**
 * Registers a callback to participant changes on a certain, specific group
 * @param groupId - string - The id of the group that you want to attach the callback to.
 * @param callback - function - Callback function to be called when a message acknowledgement changes. The callback returns 3 variables
 * @returns {boolean}
 */
var groupParticpiantsEvents = {};
window.WAPI._onParticipantsChanged = function (groupId, callback) {
    var _this = this;
    var subtypeEvents = [
        "invite",
        "add",
        "remove",
        "leave",
        "promote",
        "demote"
    ];
    var chat = window.Store.Chat.get(groupId);
    //attach all group Participants to the events object as 'add'
    var metadata = window.Store.GroupMetadata.get(groupId);
    if (!groupParticpiantsEvents[groupId]) {
        groupParticpiantsEvents[groupId] = {};
        metadata.participants.forEach(function (participant) {
            groupParticpiantsEvents[groupId][participant.id.toString()] = {
                subtype: "add",
                from: metadata.owner
            };
        });
    }
    var i = 0;
    chat.on("change:groupMetadata.participants", function (_) { return chat.on("all", function (x, y) {
        var isGroup = y.isGroup, previewMessage = y.previewMessage;
        if (isGroup && x === "change" && previewMessage && previewMessage.type === "gp2" && subtypeEvents.includes(previewMessage.subtype)) {
            var subtype = previewMessage.subtype, author = previewMessage.author, recipients = previewMessage.recipients;
            var rec = recipients[0].toString();
            if (groupParticpiantsEvents[groupId][rec] && groupParticpiantsEvents[groupId][recipients[0]].subtype == subtype) {
                //ignore, this is a duplicate entry
                // console.log('duplicate event')
            }
            else {
                //ignore the first message
                if (i == 0) {
                    //ignore it, plus 1,
                    i++;
                }
                else {
                    groupParticpiantsEvents[groupId][rec] = { subtype: subtype, author: author };
                    //fire the callback
                    // // previewMessage.from.toString()
                    // x removed y
                    // x added y
                    callback({
                        by: author.toString(),
                        action: subtype,
                        who: recipients
                    });
                    chat.off("all", _this);
                    i = 0;
                }
            }
        }
    }); });
    return true;
};
/**
 * Registers a callback that fires when your host phone is added to a group.
 * @param callback - function - Callback function to be called when a message acknowledgement changes. The callback returns 3 variables
 * @returns {boolean}
 */
window.WAPI.onAddedToGroup = function (callback) {
    var _this = this;
    Store.Chat.on('change:previewMessage', function (event) { return __awaiter(_this, void 0, void 0, function () {
        var tdiff;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(event.isGroup && event.previewMessage && event.previewMessage.type == 'gp2' && event.previewMessage.subtype == 'add' && event.previewMessage.recipients && event.previewMessage.recipients.map(function (x) { return x._serialized; }).includes(Store.Me.wid._serialized))) return [3 /*break*/, 3];
                    tdiff = (Date.now() - Store.Msg.get(event.previewMessage.id._serialized).t * 1000) / 1000;
                    if (!(tdiff < 10.0)) return [3 /*break*/, 2];
                    console.log('added', tdiff, 'seconds ago');
                    return [4 /*yield*/, WAPI.sendSeen(event.id)];
                case 1:
                    _a.sent();
                    callback(WAPI._serializeChatObj(Store.Chat.get(event.id)));
                    return [3 /*break*/, 3];
                case 2:
                    console.log('Not a new group add', event.id._serialized);
                    _a.label = 3;
                case 3: return [2 /*return*/];
            }
        });
    }); });
    return true;
};
/**
 * Reads buffered new messages.
 * @returns {Array}
 */
window.WAPI.getBufferedNewMessages = function () {
    var bufferedMessages = window._WAPI._newMessagesBuffer;
    window._WAPI._newMessagesBuffer = [];
    return bufferedMessages;
};
/** End new messages observable functions **/
/** Joins a group via the invite link, code, or message
 * @param link This param is the string which includes the invite link or code. The following work:
 * - Follow this link to join my WA group: https://chat.whatsapp.com/DHTGJUfFJAV9MxOpZO1fBZ
 * - https://chat.whatsapp.com/DHTGJUfFJAV9MxOpZO1fBZ
 * - DHTGJUfFJAV9MxOpZO1fBZ
 * @returns Promise<string | boolean> Either false if it didn't work, or the group id.
 */
window.WAPI.joinGroupViaLink = function (link) {
    return __awaiter(this, void 0, void 0, function () {
        var code, group;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Store.WapQuery.acceptGroupInvite(link.split('\/').pop()).then(function (res) { return res.status === 200 ? res.gid._serialized : res.status; })];
                case 1: return [2 /*return*/, _a.sent()];
                case 2:
                    group = _a.sent();
                    if (!group.id)
                        return [2 /*return*/, false];
                    return [2 /*return*/, group.id._serialized];
            }
        });
    });
};
window.WAPI.sendImage = function (imgBase64, chatid, filename, caption, quotedMsg, waitForKey, ptt) {
    return __awaiter(this, void 0, void 0, function () {
        var extras;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!chatid.includes('@g') && !chatid.includes('@c'))
                        return [2 /*return*/, false];
                    extras = {};
                    if (quotedMsg) {
                        if (typeof quotedMsg !== "object")
                            quotedMsg = Store.Msg.get(quotedMsg);
                        extras = {
                            quotedMsg: quotedMsg,
                            quotedParticipant: quotedMsg.author || quotedMsg.from,
                            quotedStanzaID: quotedMsg.id.id
                        };
                    }
                    return [4 /*yield*/, Store.Chat.find(chatid).then(function (chat) { return __awaiter(_this, void 0, void 0, function () {
                            var mediaBlob;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        mediaBlob = window.WAPI.base64ImageToFile(imgBase64, filename);
                                        return [4 /*yield*/, window.WAPI.procFiles(chat, mediaBlob).then(function (mc) { return __awaiter(_this, void 0, void 0, function () {
                                                var media, _a;
                                                var _this = this;
                                                return __generator(this, function (_b) {
                                                    switch (_b.label) {
                                                        case 0:
                                                            media = mc.models[0];
                                                            if (ptt)
                                                                media.mediaPrep._mediaData.type = 'ptt';
                                                            return [4 /*yield*/, media.sendToChat(chat, __assign({ caption: caption }, extras))];
                                                        case 1:
                                                            _b.sent();
                                                            if (!waitForKey) return [3 /*break*/, 3];
                                                            return [4 /*yield*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                                                                    var cb;
                                                                    return __generator(this, function (_a) {
                                                                        cb = function (msg) {
                                                                            if (media.attributes.file.size === msg.size)
                                                                                resolve(msg.id._serialized);
                                                                            Store.Msg.off('change:clientUrl', cb);
                                                                        };
                                                                        Store.Msg.on('change:clientUrl', cb);
                                                                        return [2 /*return*/];
                                                                    });
                                                                }); })];
                                                        case 2:
                                                            _a = _b.sent();
                                                            return [3 /*break*/, 4];
                                                        case 3:
                                                            _a = true;
                                                            _b.label = 4;
                                                        case 4: return [2 /*return*/, _a];
                                                    }
                                                });
                                            }); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
/**
 * This function sts the profile name of the number.
 *
 * Please note this DOES NOT WORK ON BUSINESS ACCOUNTS!
 *
 * @param newName - string the new name to set as profile name
 */
window.WAPI.setMyName = function (newName) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Store.Versions["default"][12].BinaryProtocol)
                        Store.Versions["default"][12].BinaryProtocol = new Store.bp(Store.Me.binVersion);
                    return [4 /*yield*/, Store.Versions["default"][12].setPushname(newName)];
                case 1: return [2 /*return*/, (_a.sent()).status === 200];
            }
        });
    });
};
/** Change the icon for the group chat
 * @param groupId 123123123123_1312313123@g.us The id of the group
 * @param imgData 'data:image/jpeg;base64,...` The base 64 data uri
 * @returns boolean true if it was set, false if it didn't work. It usually doesn't work if the image file is too big.
 */
window.WAPI.setGroupIcon = function (groupId, imgData) {
    return __awaiter(this, void 0, void 0, function () {
        var status;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Store.WapQuery.sendSetPicture(groupId, imgData, imgData)];
                case 1:
                    status = (_a.sent()).status;
                    return [2 /*return*/, status == 200];
            }
        });
    });
};
/**
* Update your status
*   @param newStatus string new Status
*/
window.WAPI.setMyStatus = function (newStatus) {
    return Store.MyStatus.setMyStatus(newStatus);
};
window.WAPI.sendVideoAsGif = function (imgBase64, chatid, filename, caption, quotedMsg) {
    return __awaiter(this, void 0, void 0, function () {
        var extras;
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    extras = {};
                    if (quotedMsg) {
                        if (typeof quotedMsg !== "object")
                            quotedMsg = Store.Msg.get(quotedMsg);
                        extras = {
                            quotedMsg: quotedMsg,
                            quotedParticipant: quotedMsg.author || quotedMsg.from,
                            quotedStanzaID: quotedMsg.id.id
                        };
                    }
                    return [4 /*yield*/, Store.Chat.find(chatid).then(function (chat) { return __awaiter(_this, void 0, void 0, function () {
                            var mediaBlob, mc;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        mediaBlob = window.WAPI.base64ImageToFile(imgBase64, filename);
                                        mc = new Store.MediaCollection(chat);
                                        return [4 /*yield*/, window.WAPI.procFiles(chat, mediaBlob).then(function (mc) { return __awaiter(_this, void 0, void 0, function () {
                                                var media;
                                                return __generator(this, function (_a) {
                                                    switch (_a.label) {
                                                        case 0:
                                                            media = mc.models[0];
                                                            media.mediaPrep._mediaData.isGif = true;
                                                            media.mediaPrep._mediaData.gifAttribution = 1;
                                                            return [4 /*yield*/, media.mediaPrep.sendToChat(chat, __assign({ caption: caption }, extras))];
                                                        case 1:
                                                            _a.sent();
                                                            return [2 /*return*/, chat.lastReceivedKey._serialized];
                                                    }
                                                });
                                            }); })];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            });
                        }); })];
                case 1: 
                // create new chat
                return [2 /*return*/, _a.sent()];
            }
        });
    });
};
window.WAPI.refreshBusinessProfileProducts = function () {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, Promise.all(Store.BusinessProfile.models.map(function (x) { return __awaiter(_this, void 0, void 0, function () {
                        var error_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    _a.trys.push([0, 2, , 3]);
                                    return [4 /*yield*/, Store.Catalog.findCarouselCatalog(x.id._serialized)];
                                case 1:
                                    _a.sent();
                                    return [3 /*break*/, 3];
                                case 2:
                                    error_1 = _a.sent();
                                    return [3 /*break*/, 3];
                                case 3: return [2 /*return*/];
                            }
                        });
                    }); }))];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
};
/**
 * Find any product listings of the given number. Use this to query a catalog
 *
 * @param id id of buseinss profile (i.e the number with @c.us)
 * @returns None
 */
window.WAPI.getBusinessProfilesProducts = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var catalog, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    if (!!Store.Catalog.get(id)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Store.Catalog.findCarouselCatalog(id)];
                case 1:
                    _a.sent();
                    _a.label = 2;
                case 2:
                    catalog = Store.Catalog.get(id);
                    if (catalog.productCollection && catalog.productCollection._models.length)
                        return [2 /*return*/, JSON.parse(JSON.stringify(catalog.productCollection._models))];
                    else
                        return [2 /*return*/, []];
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _a.sent();
                    return [2 /*return*/, false];
                case 4: return [2 /*return*/];
            }
        });
    });
};
window.WAPI.procFiles = function (chat, blobs) {
    return __awaiter(this, void 0, void 0, function () {
        var mc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Array.isArray(blobs)) {
                        blobs = [blobs];
                    }
                    mc = new Store.MediaCollection(chat);
                    return [4 /*yield*/, mc.processFiles((Debug.VERSION === '0.4.613') ? blobs : blobs.map(function (blob) { return { file: blob }; }), chat, 1)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, mc];
            }
        });
    });
};
/**
 * Sends product with image to chat
 * @param imgBase64 Base64 image data
 * @param chatid string the id of the chat that you want to send this product to
 * @param caption string the caption you want to add to this message
 * @param bizNumber string the @c.us number of the business account from which you want to grab the product
 * @param productId string the id of the product within the main catalog of the aforementioned business
 * @returns
 */
window.WAPI.sendImageWithProduct = function (imgBase64, chatid, caption, bizNumber, productId) {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, WAPI.refreshBusinessProfileProducts()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, Store.Catalog.findCarouselCatalog(bizNumber).then(function (cat) { return __awaiter(_this, void 0, void 0, function () {
                            var product, temp_1;
                            var _this = this;
                            return __generator(this, function (_a) {
                                if (cat && cat[0]) {
                                    product = cat[0].productCollection.get(productId);
                                    temp_1 = {
                                        productMsgOptions: {
                                            businessOwnerJid: product.catalogWid.toString({
                                                legacy: !0
                                            }),
                                            productId: product.id.toString(),
                                            url: product.url,
                                            productImageCount: product.productImageCollection.length,
                                            title: product.name,
                                            description: product.description,
                                            currencyCode: product.currency,
                                            priceAmount1000: product.priceAmount1000,
                                            type: "product"
                                        },
                                        caption: caption
                                    };
                                    // var idUser = new Store.WidFactory.createWid(chatid);
                                    return [2 /*return*/, Store.Chat.find(chatid).then(function (chat) { return __awaiter(_this, void 0, void 0, function () {
                                            var mediaBlob;
                                            var _this = this;
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        mediaBlob = window.WAPI.base64ImageToFile(imgBase64, "filename.jpg");
                                                        return [4 /*yield*/, window.WAPI.procFiles(chat, mediaBlob).then(function (mc) { return __awaiter(_this, void 0, void 0, function () {
                                                                var media;
                                                                return __generator(this, function (_a) {
                                                                    switch (_a.label) {
                                                                        case 0:
                                                                            media = mc.models[0];
                                                                            Object.entries(temp_1.productMsgOptions).map(function (_a) {
                                                                                var k = _a[0], v = _a[1];
                                                                                return media.mediaPrep._mediaData[k] = v;
                                                                            });
                                                                            return [4 /*yield*/, media.mediaPrep.sendToChat(chat, temp_1)];
                                                                        case 1:
                                                                            _a.sent();
                                                                            return [2 /*return*/, chat.lastReceivedKey._serialized];
                                                                    }
                                                                });
                                                            }); })];
                                                    case 1: 
                                                    // var mc = new Store.MediaCollection(chat);
                                                    // mc.processFiles([mediaBlob], chat, 1)
                                                    return [2 /*return*/, _a.sent()];
                                                }
                                            });
                                        }); })];
                                }
                                return [2 /*return*/];
                            });
                        }); })];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
window.WAPI.base64ImageToFile = function (b64Data, filename) {
    var arr = b64Data.split(',');
    var mime = arr[0].match(/:(.*?);/)[1];
    var bstr = window.Base64 ? window.Base64.atob(arr[1]) : atob(arr[1]);
    var n = bstr.length;
    var u8arr = new Uint8Array(n);
    while (n--) {
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
};
/**
 * Send contact card to a specific chat using the chat ids
 *
 * @param {string} to '000000000000@c.us'
 * @param {string|array} contact '111111111111@c.us' | ['222222222222@c.us', '333333333333@c.us, ... 'nnnnnnnnnnnn@c.us']
 */
window.WAPI.sendContact = function (to, contact) {
    if (!Array.isArray(contact)) {
        contact = [contact];
    }
    contact = contact.map(function (c) {
        return WAPI.getChat(c).__x_contact;
    });
    if (contact.length > 1) {
        window.WAPI.getChat(to).sendContactList(contact);
    }
    else if (contact.length === 1) {
        window.WAPI.getChat(to).sendContact(contact[0]);
    }
};
/**
 * Ghost forwarding is like a normal forward but as if it were sent from the host phone.
 */
window.WAPI.ghostForward = function (chatId, messageId) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, tempMsg, newId, extend, res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!chatId.includes('@g') && !chatId.includes('@c'))
                        return [2 /*return*/, false];
                    chat = Store.Chat.get(chatId);
                    if (!Store.Msg.get(messageId))
                        return [2 /*return*/, false];
                    tempMsg = Object.create(Store.Msg.get(messageId));
                    newId = window.WAPI.getNewMessageId(chatId);
                    extend = __assign(__assign({}, JSON.parse(JSON.stringify(tempMsg))), { ack: 0, id: newId, local: !0, self: "out", t: parseInt(new Date().getTime() / 1000), to: new Store.WidFactory.createWid(chatId), from: Store.Me.wid, isNewMsg: true });
                    Object.assign(tempMsg, extend);
                    return [4 /*yield*/, Promise.all(Store.addAndSendMsgToChat(chat, extend))];
                case 1:
                    res = _a.sent();
                    return [2 /*return*/, res[1] == 'success'];
            }
        });
    });
};
/**
 * Forward an array of messages to a specific chat using the message ids or Objects
 *
 * @param {string} to '000000000000@c.us'
 * @param {string|array[Message | string]} messages this can be any mixture of message ids or message objects
 * @param {boolean} skipMyMessages This indicates whether or not to skip your own messages from the array
 */
window.WAPI.forwardMessages = function (to, messages, skipMyMessages) {
    return __awaiter(this, void 0, void 0, function () {
        var finalForwardMessages, conversation;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Array.isArray(messages)) {
                        messages = [messages];
                    }
                    finalForwardMessages = messages.map(function (msg) {
                        if (typeof msg == 'string') {
                            //msg is string, get the message object
                            return window.Store.Msg.get(msg);
                        }
                        else {
                            return window.Store.Msg.get(msg.id);
                        }
                    }).filter(function (msg) { return skipMyMessages ? !msg.__x_isSentByMe : true; });
                    conversation = window.Store.Chat.get(to);
                    return [4 /*yield*/, conversation.forwardMessages(finalForwardMessages)];
                case 1: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
/**
 * Create an chat ID based in a cloned one
 *
 * @param {string} chatId '000000000000@c.us'
 */
window.WAPI.getNewMessageId = function (chatId) {
    var newMsgId = new Store.MsgKey(Object.assign({}, Store.Msg.models[0].__x_id));
    // .clone();
    newMsgId.fromMe = true;
    newMsgId.id = WAPI.getNewId().toUpperCase();
    newMsgId.remote = new Store.WidFactory.createWid(chatId);
    newMsgId._serialized = newMsgId.fromMe + "_" + newMsgId.remote + "_" + newMsgId.id;
    return newMsgId;
};
/**
 * Simulate '...typing' in the chat.
 *
 * @param {string} chatId '000000000000@c.us'
 * @param {boolean} on true to turn on similated typing, false to turn it off //you need to manually turn this off.
 */
window.WAPI.simulateTyping = function (chatId, on) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            if (on)
                Store.ChatStates.sendChatStateComposing(chatId);
            else
                Store.ChatStates.sendChatStatePaused(chatId);
            return [2 /*return*/, true];
        });
    });
};
/**
 * Send location
 *
 * @param {string} chatId '000000000000@c.us'
 * @param {string} lat latitude
 * @param {string} lng longitude
 * @param {string} loc Text to go with the location message
 */
window.WAPI.sendLocation = function (chatId, lat, lng, loc) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, tempMsg, newId, extend;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    loc = loc || '';
                    chat = Store.Chat.get(chatId);
                    if (!chat)
                        return [2 /*return*/, false];
                    tempMsg = Object.create(Store.Msg.models.filter(function (msg) { return msg.__x_isSentByMe && !msg.quotedMsg; })[0]);
                    newId = window.WAPI.getNewMessageId(chatId);
                    extend = {
                        ack: 0,
                        id: newId,
                        local: !0,
                        self: "out",
                        t: parseInt(new Date().getTime() / 1000),
                        to: chatId,
                        isNewMsg: !0,
                        type: "location",
                        lat: lat,
                        lng: lng,
                        loc: loc,
                        clientUrl: undefined,
                        directPath: undefined,
                        filehash: undefined,
                        uploadhash: undefined,
                        mediaKey: undefined,
                        isQuotedMsgAvailable: false,
                        invis: false,
                        mediaKeyTimestamp: undefined,
                        mimetype: undefined,
                        height: undefined,
                        width: undefined,
                        ephemeralStartTimestamp: undefined,
                        body: undefined,
                        mediaData: undefined,
                        isQuotedMsgAvailable: false
                    };
                    Object.assign(tempMsg, extend);
                    return [4 /*yield*/, Promise.all(Store.addAndSendMsgToChat(chat, tempMsg))];
                case 1: return [2 /*return*/, (_a.sent())[1] === 'success' ? newId._serialized : false];
            }
        });
    });
};
/**
 * Send VCARD
 *
 * @param {string} chatId '000000000000@c.us'
 * @param {string} vcard vcard as a string
 * @param {string} contactName The display name for the contact. CANNOT BE NULL OTHERWISE IT WILL SEND SOME RANDOM CONTACT FROM YOUR ADDRESS BOOK.
 * @param {string} contactNumber If supplied, this will be injected into the vcard (VERSION 3 ONLY FROM VCARDJS) with the WA id to make it show up with the correct buttons on WA.
 */
window.WAPI.sendVCard = function (chatId, vcard, contactName, contactNumber) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, tempMsg, newId, extend;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chat = Store.Chat.get(chatId);
                    tempMsg = Object.create(Store.Msg.models.filter(function (msg) { return msg.__x_isSentByMe && !msg.quotedMsg; })[0]);
                    newId = window.WAPI.getNewMessageId(chatId);
                    extend = {
                        ack: 0,
                        id: newId,
                        local: !0,
                        self: "out",
                        t: parseInt(new Date().getTime() / 1000),
                        to: chatId,
                        isNewMsg: !0,
                        type: "vcard",
                        clientUrl: undefined,
                        directPath: undefined,
                        filehash: undefined,
                        uploadhash: undefined,
                        mediaKey: undefined,
                        isQuotedMsgAvailable: false,
                        invis: false,
                        mediaKeyTimestamp: undefined,
                        mimetype: undefined,
                        height: undefined,
                        width: undefined,
                        ephemeralStartTimestamp: undefined,
                        body: contactNumber ? vcard.replace('TEL;TYPE=WORK,VOICE:', "TEL;TYPE=WORK,VOICE;waid=" + contactNumber + ":") : vcard,
                        mediaData: undefined,
                        isQuotedMsgAvailable: false,
                        subtype: contactName
                    };
                    Object.assign(tempMsg, extend);
                    return [4 /*yield*/, Promise.all(Store.addAndSendMsgToChat(chat, tempMsg))];
                case 1: return [2 /*return*/, (_a.sent())[1] == "success"];
            }
        });
    });
};
window.WAPI.reply = function (chatId, body, quotedMsg) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, extras, tempMsg, newId, extend, res, _a, _b;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    if (typeof quotedMsg !== "object")
                        quotedMsg = Store.Msg.get(quotedMsg);
                    chat = Store.Chat.get(chatId);
                    if (!chat)
                        return [2 /*return*/, false];
                    extras = {};
                    if (quotedMsg) {
                        extras = {
                            quotedParticipant: quotedMsg.author || quotedMsg.from,
                            quotedStanzaID: quotedMsg.id.id
                        };
                    }
                    tempMsg = Object.create(Store.Msg.models.filter(function (msg) { return msg.__x_isSentByMe && !msg.quotedMsg; })[0]);
                    newId = window.WAPI.getNewMessageId(chatId);
                    extend = __assign({ ack: 0, id: newId, local: !0, self: "out", t: parseInt(new Date().getTime() / 1000), to: new Store.WidFactory.createWid(chatId), isNewMsg: !0, type: "chat", quotedMsg: quotedMsg, body: body }, extras);
                    Object.assign(tempMsg, extend);
                    _b = (_a = Promise).all;
                    return [4 /*yield*/, Store.addAndSendMsgToChat(chat, tempMsg)];
                case 1: return [4 /*yield*/, _b.apply(_a, [_c.sent()])];
                case 2:
                    res = _c.sent();
                    if (res[1] != 'success')
                        return [2 /*return*/, false];
                    return [2 /*return*/, res[0].id._serialized];
            }
        });
    });
};
/**
 * Send Payment Request
 *
 * @param {string} chatId '000000000000@c.us'
 * @param {string} amount1000 The amount in base value / 10 (e.g 50000 in GBP = £50)
 * @param {string} currency Three letter currency code (e.g SAR, GBP, USD, INR, AED, EUR)
 * @param {string} note message to send with the payment request
 */
window.WAPI.sendPaymentRequest = function (chatId, amount1000, currency, noteMessage) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, tempMsg, newId, extend;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chat = Store.Chat.get(chatId);
                    tempMsg = Object.create(Store.Msg.models.filter(function (msg) { return msg.__x_isSentByMe && !msg.quotedMsg; })[0]);
                    newId = window.WAPI.getNewMessageId(chatId);
                    extend = {
                        ack: 0,
                        id: newId,
                        local: !0,
                        self: "out",
                        t: parseInt(new Date().getTime() / 1000),
                        to: chatId,
                        isNewMsg: !0,
                        type: "payment",
                        subtype: "request",
                        amount1000: amount1000,
                        requestFrom: chatId,
                        currency: currency,
                        noteMessage: noteMessage,
                        expiryTimestamp: parseInt(new Date(new Date().setDate(new Date().getDate() + 1)).getTime() / 1000)
                    };
                    Object.assign(tempMsg, extend);
                    return [4 /*yield*/, Store.addAndSendMsgToChat(chat, tempMsg)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
};
/**
 * Send Customized VCard without the necessity of contact be a WA Contact
 *
 * @param {string} chatId '000000000000@c.us'
 * @param {object|array} vcard { displayName: 'Contact Name', vcard: 'BEGIN:VCARD\nVERSION:3.0\nN:;Contact Name;;;\nEND:VCARD' } | [{ displayName: 'Contact Name 1', vcard: 'BEGIN:VCARD\nVERSION:3.0\nN:;Contact Name 1;;;\nEND:VCARD' }, { displayName: 'Contact Name 2', vcard: 'BEGIN:VCARD\nVERSION:3.0\nN:;Contact Name 2;;;\nEND:VCARD' }]
 */
window.WAPI._sendVCard = function (chatId, vcard) {
    var chat = Store.Chat.get(chatId);
    var tempMsg = Object.create(Store.Msg.models.filter(function (msg) { return msg.__x_isSentByMe && !msg.quotedMsg; })[0]);
    var newId = window.WAPI.getNewMessageId(chatId);
    var extend = {
        ack: 0,
        id: newId,
        local: !0,
        self: "out",
        t: parseInt(new Date().getTime() / 1000),
        to: chatId,
        isNewMsg: !0,
        isQuotedMsgAvailable: false
    };
    if (Array.isArray(vcard)) {
        Object.assign(extend, {
            type: "multi_vcard",
            vcardList: vcard
        });
        delete extend.body;
    }
    else {
        Object.assign(extend, {
            type: "vcard",
            subtype: vcard.displayName,
            body: vcard.vcard
        });
        delete extend.vcardList;
    }
    Object.assign(tempMsg, extend);
    Store.addAndSendMsgToChat(chat, tempMsg);
};
/**
 * Block contact
 * @param {string} id '000000000000@c.us'
 */
window.WAPI.contactBlock = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var contact;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contact = window.Store.Contact.get(id);
                    if (!(contact !== undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Store.Block.blockContact(contact)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
                case 2: return [2 /*return*/, false];
            }
        });
    });
};
/**
 * Unblock contact
 * @param {string} id '000000000000@c.us'
 */
window.WAPI.contactUnblock = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var contact;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    contact = window.Store.Contact.get(id);
                    if (!(contact !== undefined)) return [3 /*break*/, 2];
                    return [4 /*yield*/, Store.Block.unblockContact(contact)];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
                case 2: return [2 /*return*/, false];
            }
        });
    });
};
/**
 * Remove participant of Group
 * @param {*} idGroup '0000000000-00000000@g.us'
 * @param {*} idParticipant '000000000000@c.us'
 */
window.WAPI.removeParticipant = function (idGroup, idParticipant) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, rm;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chat = Store.Chat.get(idGroup);
                    rm = chat.groupMetadata.participants.get(idParticipant);
                    return [4 /*yield*/, window.Store.Participants.removeParticipants(chat, [rm])];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
};
/**
 * Add participant to Group
 * @param {*} idGroup '0000000000-00000000@g.us'
 * @param {*} idParticipant '000000000000@c.us'
 */
window.WAPI.addParticipant = function (idGroup, idParticipant) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, add;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chat = Store.Chat.get(idGroup);
                    add = Store.Contact.get(idParticipant);
                    return [4 /*yield*/, window.Store.Participants.addParticipants(chat, [add])];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
};
/**
 * Promote Participant to Admin in Group
 * @param {*} idGroup '0000000000-00000000@g.us'
 * @param {*} idParticipant '000000000000@c.us'
 */
window.WAPI.promoteParticipant = function (idGroup, idParticipant) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, promote;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chat = Store.Chat.get(idGroup);
                    promote = chat.groupMetadata.participants.get(idParticipant);
                    return [4 /*yield*/, window.Store.Participants.promoteParticipants(chat, [promote])];
                case 1:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
};
/**
 * Demote Admin of Group
 * @param {*} idGroup '0000000000-00000000@g.us'
 * @param {*} idParticipant '000000000000@c.us'
 */
window.WAPI.demoteParticipant = function (idGroup, idParticipant) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, demote;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, window.Store.WapQuery.demoteParticipants(idGroup, [idParticipant])];
                case 1:
                    _a.sent();
                    chat = Store.Chat.get(idGroup);
                    demote = chat.groupMetadata.participants.get(idParticipant);
                    return [4 /*yield*/, window.Store.Participants.demoteParticipants(chat, [demote])];
                case 2:
                    _a.sent();
                    return [2 /*return*/, true];
            }
        });
    });
};
/**
 * @private
 * Send Sticker
 * @param {*} sticker
 * @param {*} chatId '000000000000@c.us'
 * @param metadata about the image. Based on [sharp metadata](https://sharp.pixelplumbing.com/api-input#metadata)
 */
window.WAPI._sendSticker = function (sticker, chatId, metadata) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, stick;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chat = Store.Chat.get(chatId);
                    stick = new window.Store.Sticker.modelClass();
                    stick.__x_clientUrl = sticker.clientUrl;
                    stick.__x_filehash = sticker.filehash;
                    stick.__x_id = sticker.filehash;
                    stick.__x_uploadhash = sticker.uploadhash;
                    stick.__x_mediaKey = sticker.mediaKey;
                    stick.__x_initialized = false;
                    stick.__x_mediaData.mediaStage = 'INIT';
                    stick.mimetype = 'image/webp';
                    stick.height = (metadata && metadata.height) ? metadata.height : 512;
                    stick.width = (metadata && metadata.width) ? metadata.width : 512;
                    return [4 /*yield*/, stick.initialize()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, stick.sendToChat(chat)];
                case 2: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
window.WAPI.getFileHash = function (data) { return __awaiter(_this, void 0, void 0, function () {
    var buffer, sha;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, data.arrayBuffer()];
            case 1:
                buffer = _a.sent();
                sha = new jsSHA("SHA-256", "ARRAYBUFFER");
                sha.update(buffer);
                return [2 /*return*/, sha.getHash("B64")];
        }
    });
}); };
window.WAPI.generateMediaKey = function (length) { return __awaiter(_this, void 0, void 0, function () {
    var result, characters, charactersLength, i;
    return __generator(this, function (_a) {
        result = '';
        characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        charactersLength = characters.length;
        for (i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return [2 /*return*/, result];
    });
}); };
/**
 * @param type: The type of file.  {'audio' | 'sticker' | 'video' | 'product' | 'document' | 'gif' | 'image' | 'ptt' | 'template' | 'history' | 'ppic'}
 * @param blob: file
 */
window.WAPI.encryptAndUploadFile = function (type, blob) {
    return __awaiter(this, void 0, void 0, function () {
        var filehash, mediaKey, controller, signal, encrypted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, window.WAPI.getFileHash(blob)];
                case 1:
                    filehash = _a.sent();
                    return [4 /*yield*/, window.WAPI.generateMediaKey(32)];
                case 2:
                    mediaKey = _a.sent();
                    controller = new AbortController();
                    signal = controller.signal;
                    return [4 /*yield*/, window.Store.UploadUtils.encryptAndUpload({
                            blob: blob,
                            type: type,
                            signal: signal,
                            mediaKey: mediaKey
                        })];
                case 3:
                    encrypted = _a.sent();
                    return [2 /*return*/, __assign(__assign({}, encrypted), { clientUrl: encrypted.url, filehash: filehash, id: filehash, uploadhash: encrypted.encFilehash })];
            }
        });
    });
};
/**
 * Send Image As Sticker
 * @param {*} imageBase64 A valid webp image is required.
 * @param {*} chatId '000000000000@c.us'
 * @param metadata about the image. Based on [sharp metadata](https://sharp.pixelplumbing.com/api-input#metadata)
 */
window.WAPI.sendImageAsSticker = function (imageBase64, chatId, metadata) {
    return __awaiter(this, void 0, void 0, function () {
        var mediaBlob, encrypted;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, window.WAPI.base64ImageToFile('data:image/webp;base64,' + imageBase64, 'file.webp')];
                case 1:
                    mediaBlob = _a.sent();
                    return [4 /*yield*/, window.WAPI.encryptAndUploadFile("sticker", mediaBlob)];
                case 2:
                    encrypted = _a.sent();
                    return [4 /*yield*/, window.WAPI._sendSticker(encrypted, chatId, metadata)];
                case 3: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
/**
This will dump all possible stickers into the chat. ONLY FOR TESTING. THIS IS REALLY ANNOYING!!
 */
window.WAPI._STICKERDUMP = function (chatId) {
    return __awaiter(this, void 0, void 0, function () {
        var chat, prIdx;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    chat = Store.Chat.get(chatId);
                    return [4 /*yield*/, Store.StickerPack.pageWithIndex(0)];
                case 1:
                    prIdx = _a.sent();
                    return [4 /*yield*/, Store.StickerPack.fetchAt(0)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, Store.StickerPack._pageFetchPromises[prIdx]];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, Promise.race(Store.StickerPack.models.forEach(function (pack) { return pack.stickers.fetch().then(function (_) { return pack.stickers.models.forEach(function (stkr) { return stkr.sendToChat(chat); }); }); }))["catch"](function (e) { })];
                case 4: return [2 /*return*/, _a.sent()];
            }
        });
    });
};
window.WAPI.getLastSeen = function (id) {
    return __awaiter(this, void 0, void 0, function () {
        var presence;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!Store.Chat.get(id))
                        return [2 /*return*/, false];
                    presence = Store.Chat.get(id).presence;
                    return [4 /*yield*/, presence.subscribe()];
                case 1:
                    _a.sent();
                    return [2 /*return*/, presence.chatstate.t];
            }
        });
    });
};
window.WAPI.getUseHereString = function () {
    return __awaiter(this, void 0, void 0, function () {
        var originalLocale;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!window.l10n.localeStrings['en']) return [3 /*break*/, 3];
                    originalLocale = window.l10n.getLocale();
                    return [4 /*yield*/, window.l10n.init('en')];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, window.l10n.init(originalLocale)];
                case 2:
                    _a.sent();
                    _a.label = 3;
                case 3: return [2 /*return*/, window.l10n.localeStrings[window.l10n.getLocale()][0][window.l10n.localeStrings.en[0].findIndex(function (x) { return x.toLowerCase() === 'use here'; })]];
            }
        });
    });
};
window.WAPI.getAmountOfLoadedMessages = function () {
    return Store.Msg.models.length;
};
WAPI.getChatWithNonContacts = function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, Store.Chat.models.map(function (chat) { return chat.contact && !chat.contact.isMyContact ? chat.contact : null; }).filter(function (x) { return x && !x.isGroup; }).map(WAPI._serializeContactObj)];
        });
    });
};
window.WAPI.cutMsgCache = function () {
    Store.Msg.models.map(function (msg) { return Store.Msg.remove(msg); });
    return true;
};
window.WAPI.getHostNumber = function () {
    return WAPI.getMe().me.user;
};
window.WAPI.quickClean = function (ob) {
    var r = JSON.parse(JSON.stringify(ob));
    if (r.mediaData && Object.keys(r.mediaData).length == 0)
        delete r.mediaData;
    if (r.chat && Object.keys(r.chat).length == 0)
        delete r.chat;
    Object.keys(r).filter(function (k) { return r[k] == "" || r[k] == [] || r[k] == {} || r[k] == null; }).forEach(function (k) { return delete r[k]; });
    Object.keys(r).filter(function (k) { return r[k] ? r[k]._serialized : false; }).forEach(function (k) { return r[k] = r[k]._serialized; });
    Object.keys(r).filter(function (k) { return r[k] ? r[k].id : false; }).forEach(function (k) { return r[k] = r[k].id; });
    return r;
};
console.log("wapi should be there now");
//# sourceMappingURL=WAPI.js.map