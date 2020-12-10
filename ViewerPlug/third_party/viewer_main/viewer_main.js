"use strict";
var __reflect = this && this.__reflect || function(t, e, n) {
    t.__class__ = e,
    n ? n.push(e) : n = [e],
    t.__types__ = t.__types__ ? n.concat(t.__types__) : n
}
, __extends = this && this.__extends || function(t, e) {
    function n() {
        this.constructor = t
    }
    for (var a in e)
        e.hasOwnProperty(a) && (t[a] = e[a]);
    n.prototype = e.prototype,
    t.prototype = new n
}
, __awaiter = this && this.__awaiter || function(t, e, n, a) {
    return new (n || (n = Promise))(function(i, r) {
        function o(t) {
            try {
                l(a.next(t))
            } catch (e) {
                r(e)
            }
        }
        function s(t) {
            try {
                l(a["throw"](t))
            } catch (e) {
                r(e)
            }
        }
        function l(t) {
            t.done ? i(t.value) : new n(function(e) {
                e(t.value)
            }
            ).then(o, s)
        }
        l((a = a.apply(t, e || [])).next())
    }
    )
}
, __generator = this && this.__generator || function(t, e) {
    function n(t) {
        return function(e) {
            return a([t, e])
        }
    }
    function a(n) {
        if (i)
            throw new TypeError("Generator is already executing.");
        for (; l; )
            try {
                if (i = 1,
                r && (o = r[2 & n[0] ? "return" : n[0] ? "throw" : "next"]) && !(o = o.call(r, n[1])).done)
                    return o;
                switch (r = 0,
                o && (n = [0, o.value]),
                n[0]) {
                case 0:
                case 1:
                    o = n;
                    break;
                case 4:
                    return l.label++,
                    {
                        value: n[1],
                        done: !1
                    };
                case 5:
                    l.label++,
                    r = n[1],
                    n = [0];
                    continue;
                case 7:
                    n = l.ops.pop(),
                    l.trys.pop();
                    continue;
                default:
                    if (o = l.trys,
                    !(o = o.length > 0 && o[o.length - 1]) && (6 === n[0] || 2 === n[0])) {
                        l = 0;
                        continue
                    }
                    if (3 === n[0] && (!o || n[1] > o[0] && n[1] < o[3])) {
                        l.label = n[1];
                        break
                    }
                    if (6 === n[0] && l.label < o[1]) {
                        l.label = o[1],
                        o = n;
                        break
                    }
                    if (o && l.label < o[2]) {
                        l.label = o[2],
                        l.ops.push(n);
                        break
                    }
                    o[2] && l.ops.pop(),
                    l.trys.pop();
                    continue
                }
                n = e.call(t, l)
            } catch (a) {
                n = [6, a],
                r = 0
            } finally {
                i = o = 0
            }
        if (5 & n[0])
            throw n[1];
        return {
            value: n[0] ? n[1] : void 0,
            done: !0
        }
    }
    var i, r, o, s, l = {
        label: 0,
        sent: function() {
            if (1 & o[0])
                throw o[1];
            return o[1]
        },
        trys: [],
        ops: []
    };
    return s = {
        next: n(0),
        "throw": n(1),
        "return": n(2)
    },
    "function" == typeof Symbol && (s[Symbol.iterator] = function() {
        return this
    }
    ),
    s
}
, common;
!function(t) {
    function e(t) {
        for (var e in t)
            delete t[e]
    }
    function n(t) {
        var e = String(t)
          , n = l[e];
        return n || (n = l[e] = a(t)),
        n
    }
    function a(t) {
        var e = c[String(t)];
        if (e && e.length > 0) {
            var n = e.pop();
            return n
        }
        var a = new t;
        return a._onClear(),
        a
    }
    function i(t, e) {
        if ((0 > e || e !== e) && (e = 0),
        t) {
            var n = String(t)
              , a = c[n];
            u[n] = e,
            a && a.length > e && (a.length = e)
        } else {
            o = e;
            for (var n in c) {
                var a = c[n];
                a.length > e && (a.length = e),
                n in u && (u[n] = e)
            }
        }
    }
    function r(t) {
        if (t) {
            var e = c[String(t)];
            e && e.length && (e.length = 0)
        } else
            for (var n in c) {
                var e = c[n];
                e.length = 0
            }
    }
    var o = 3e3
      , s = 0
      , l = {}
      , u = {}
      , c = {};
    t.clearMap = e,
    t.getInstance = n,
    t.create = a,
    t.setMaxCount = i,
    t.clear = r;
    var h = function() {
        function t() {
            this.hashCode = s++
        }
        return t.toString = function() {
            throw new Error
        }
        ,
        t.prototype.release = function() {
            this._onClear();
            var t = String(this.constructor)
              , e = t in u ? o : u[t]
              , n = c[t] = c[t] || [];
            n.length < e && (console.assert(n.indexOf(this) < 0),
            n.push(this))
        }
        ,
        t.prototype.dispose = function() {
            this._onClear()
        }
        ,
        t
    }();
    t.BaseObject = h,
    __reflect(h.prototype, "common.BaseObject")
}(common || (common = {}));
var common;
!function(t) {
    var e = function(t) {
        function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.data = null,
            e
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class common.Event]"
        }
        ,
        e.prototype._onClear = function() {
            this.type = "",
            this.target = null,
            this.currentTarget = null,
            this.data = null
        }
        ,
        e.prototype.copyFrom = function(t) {
            return this.type = t.type,
            this.target = t.target,
            this.currentTarget = t.currentTarget,
            this.data = t.data,
            this
        }
        ,
        e
    }(t.BaseObject);
    t.Event = e,
    __reflect(e.prototype, "common.Event");
    var n = function(n) {
        function a() {
            var t = null !== n && n.apply(this, arguments) || this;
            return t._listenerBins = {},
            t
        }
        return __extends(a, n),
        a.toString = function() {
            return "[class common.EventDispatcher]"
        }
        ,
        a.prototype._onClear = function() {
            this.enabled = !0,
            this._dipatchLevel = 0,
            t.clearMap(this._listenerBins)
        }
        ,
        a.prototype._sortListeners = function(t, e) {
            return t.priority > e.priority ? 1 : -1
        }
        ,
        a.prototype._isSameListener = function(t, e) {
            return t === e
        }
        ,
        a.prototype.hasEventListener = function(t) {
            return t in this._listenerBins[t]
        }
        ,
        a.prototype.addEventListener = function(t, e, n, a, i) {
            void 0 === a && (a = null),
            void 0 === i && (i = 0),
            this.removeEventListener(t, e);
            var r = this._listenerBins[t];
            r ? 0 !== this._dipatchLevel && (this._listenerBins[t] = r = r.concat()) : this._listenerBins[t] = r = [],
            r.push({
                listener: e,
                thisTarget: n,
                data: a,
                priority: i
            }),
            r.sort(this._sortListeners)
        }
        ,
        a.prototype.removeEventListener = function(t, e, n) {
            void 0 === n && (n = null);
            var a = this._listenerBins[t];
            if (a) {
                0 !== this._dipatchLevel && (this._listenerBins[t] = a = a.concat());
                for (var i = 0, r = a.length; r > i; ++i) {
                    var o = a[i];
                    if (o.listener === e && this._isSameListener(o.data, n)) {
                        a.splice(i, 1);
                        break
                    }
                }
            }
        }
        ,
        a.prototype.removeEventListeners = function(t) {
            if (t)
                delete this._listenerBins[t];
            else
                for (var e in this._listenerBins)
                    delete this._listenerBins[e]
        }
        ,
        a.prototype.dispatchEvent = function(t) {
            var e = t.type
              , n = this._listenerBins[e];
            if (n) {
                t.target = this,
                t.currentTarget || (t.currentTarget = t.target),
                this._dipatchLevel++;
                for (var a = 0, i = n; a < i.length; a++) {
                    var r = i[a];
                    r.listener.call(r.thisTarget, t, r.data)
                }
                this._dipatchLevel--
            }
        }
        ,
        a.prototype.dispatchEventWith = function(n, a) {
            if (this.enabled) {
                var i = t.create(e);
                i.type = n,
                i.data = a,
                this.dispatchEvent(i),
                i.release()
            }
        }
        ,
        a
    }(t.BaseObject);
    t.EventDispatcher = n,
    __reflect(n.prototype, "common.EventDispatcher", ["common.IEventDispatcher"])
}(common || (common = {}));
var common;
!function(t) {
    function e(t, e) {
        for (var n = 0, a = e; n < a.length; n++) {
            var i = a[n];
            if (i.component === t)
                return i
        }
        return null
    }
    t.getViewByComponent = e;
    var n = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class common.Notification]"
        }
        ,
        e.prototype._onClear = function() {
            this.type = "",
            this.target = null,
            this.data = null
        }
        ,
        e
    }(t.BaseObject);
    t.Notification = n,
    __reflect(n.prototype, "common.Notification");
    var a = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype._onClear = function() {
            this._context = null
        }
        ,
        e.prototype.sendNotification = function(t, e) {
            this._context.sendNotification(t, e, this)
        }
        ,
        Object.defineProperty(e.prototype, "controller", {
            get: function() {
                return this._context.controller
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "application", {
            get: function() {
                return this._context.application
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }(t.BaseObject);
    t.Model = a,
    __reflect(a.prototype, "common.Model");
    var i = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.prototype._onClear = function() {
            t.prototype._onClear.call(this),
            this.model = null,
            this.component = null,
            this._context = null
        }
        ,
        e.prototype._notificationListenerHandler = function(t, e) {
            e.call(this, t.data)
        }
        ,
        e.prototype.addNotification = function(t, e, n) {
            void 0 === n && (n = 1),
            this._context.addEventListener(t, this._notificationListenerHandler, this, e, n)
        }
        ,
        e.prototype.removeNotification = function(t, e) {
            this._context.removeEventListener(t, this._notificationListenerHandler, e)
        }
        ,
        e.prototype.sendNotification = function(t, e) {
            this._context.sendNotification(t, e, this)
        }
        ,
        e.prototype.initialize = function(t, e, n) {
            this.model = t,
            this.component = e,
            this._onInitialize(n),
            this.update()
        }
        ,
        e.prototype.update = function() {}
        ,
        Object.defineProperty(e.prototype, "controller", {
            get: function() {
                return this._context.controller
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(e.prototype, "application", {
            get: function() {
                return this._context.application
            },
            enumerable: !0,
            configurable: !0
        }),
        e
    }(t.EventDispatcher);
    t.View = i,
    __reflect(i.prototype, "common.View");
    var r = function(e) {
        function a() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.result = null,
            t
        }
        return __extends(a, e),
        a.prototype._onClear = function() {
            this.success = null,
            this.result = null,
            this._guard = null,
            this._hook = null
        }
        ,
        a.prototype.execute = function(e, a, i) {
            return void 0 === a && (a = null),
            void 0 === i && (i = null),
            __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(r) {
                    switch (r.label) {
                    case 0:
                        return e instanceof n ? this.notification = e : (this.notification = t.create(n),
                        this.notification.data = e),
                        this._guard = a,
                        this._hook = i,
                        null !== this._guard && this._guard(this) === !1 ? [3, 2] : [4, this._onExecute()];
                    case 1:
                        return r.sent(),
                        null === this.success && (this.success = !0),
                        null !== this._hook && this._hook(this),
                        [3, 3];
                    case 2:
                        this.success = !0,
                        r.label = 3;
                    case 3:
                        return [2, this.result]
                    }
                })
            })
        }
        ,
        Object.defineProperty(a.prototype, "data", {
            get: function() {
                return this.notification.data
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "application", {
            get: function() {
                return this._context.application
            },
            enumerable: !0,
            configurable: !0
        }),
        a
    }(t.BaseObject);
    t.Command = r,
    __reflect(r.prototype, "common.Command");
    var o = function(e) {
        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._commandBins = [],
            t
        }
        return __extends(n, e),
        n.prototype._onExecute = function() {
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(t) {
                    switch (t.label) {
                    case 0:
                        return [4, this._next(this.notification.data)];
                    case 1:
                        return t.sent(),
                        [2]
                    }
                })
            })
        }
        ,
        n.prototype._next = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var n;
                return __generator(this, function(a) {
                    switch (a.label) {
                    case 0:
                        return this._commandBins.length > 0 ? (n = this._commandBins.shift()) ? (this.notification.data = e,
                        this._currentCommand = t.create(n.commandClass),
                        [4, this._currentCommand.execute(this.notification, n.guard, n.hook)]) : [3, 4] : [3, 5];
                    case 1:
                        return a.sent(),
                        this._currentCommand.success ? [4, this._next(this._currentCommand.result)] : [3, 3];
                    case 2:
                        return a.sent(),
                        [3, 4];
                    case 3:
                        this._fail(this._currentCommand.result),
                        a.label = 4;
                    case 4:
                        return [3, 6];
                    case 5:
                        this.result = this._currentCommand.result,
                        a.label = 6;
                    case 6:
                        return [2]
                    }
                })
            })
        }
        ,
        n.prototype._fail = function(t) {
            this.result = t
        }
        ,
        n.prototype.addCommand = function(t, e, n) {
            void 0 === e && (e = null),
            void 0 === n && (n = null);
            var a = {
                commandClass: t,
                guard: e,
                hook: n
            };
            this._commandBins.push(a)
        }
        ,
        n.prototype.insertCommand = function(t, e, n) {
            void 0 === e && (e = null),
            void 0 === n && (n = null);
            var a = {
                commandClass: t,
                guard: e,
                hook: n
            };
            this._commandBins.unshift(a)
        }
        ,
        n
    }(r);
    t.QueueCommand = o,
    __reflect(o.prototype, "common.QueueCommand");
    var s = function(e) {
        function a() {
            var n = null !== e && e.apply(this, arguments) || this;
            return n.controller = t.create(l),
            n._application = null,
            n
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class common.Context]"
        }
        ,
        a.prototype.release = function() {
            throw new Error
        }
        ,
        a.prototype._isSameListener = function(t, n) {
            return t && t.commandClass && n ? t.commandClass === n : e.prototype._isSameListener.call(this, t, n)
        }
        ,
        a.prototype.initialize = function(t) {
            this._application = t,
            this.controller._context = this
        }
        ,
        a.prototype.sendNotification = function(e, a, i) {
            if (void 0 === i && (i = null),
            this.enabled) {
                var r = t.create(n);
                r.type = e,
                r.target = i,
                r.data = a,
                this.dispatchEventWith(e, r),
                r.release()
            }
        }
        ,
        a.prototype.getInstance = function(e) {
            var n = t.getInstance(e);
            return n._context = this,
            n
        }
        ,
        a.prototype.create = function(e) {
            var n = t.create(e);
            return n._context = this,
            n
        }
        ,
        Object.defineProperty(a.prototype, "application", {
            get: function() {
                return this._application
            },
            enumerable: !0,
            configurable: !0
        }),
        a
    }(t.EventDispatcher);
    t.Context = s,
    __reflect(s.prototype, "common.Context");
    var l = function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(n, e),
        n.toString = function() {
            return "[class common.Controller]"
        }
        ,
        n.prototype._notificationHandler = function(t, e) {
            this.execute(e.commandClass, t.data, e.guard, e.hook)
        }
        ,
        n.prototype._onClear = function() {
            this._context = null
        }
        ,
        n.prototype.register = function(t, e, n, a) {
            void 0 === n && (n = null),
            void 0 === a && (a = null);
            var i = {
                commandClass: e,
                guard: n,
                hook: a
            };
            this._context.addEventListener(t, this._notificationHandler, this, i)
        }
        ,
        n.prototype.unregister = function(t, e) {
            var n = {
                commandClass: e,
                guard: null,
                hook: null
            };
            this._context.removeEventListener(t, this._notificationHandler, n)
        }
        ,
        n.prototype.execute = function(e, n, a, i) {
            return void 0 === a && (a = null),
            void 0 === i && (i = null),
            __awaiter(this, void 0, void 0, function() {
                var r;
                return __generator(this, function(o) {
                    switch (o.label) {
                    case 0:
                        return r = t.create(e),
                        [4, r.execute(n, a, i)];
                    case 1:
                        return [2, o.sent()]
                    }
                })
            })
        }
        ,
        n
    }(t.BaseObject);
    __reflect(l.prototype, "Controller")
}(common || (common = {}));
var player;
!function(t) {
    t.NotificationType = {
        VOChange: "VOChange",
        ArmatureAdd: "ArmatureAdd",
        ArmatureRemove: "ArmatureRemove",
        ArmatureChange: "ArmatureChange",
        ArmatureReplace: "ArmatureReplace",
        AnimationStart: "AnimationStart",
        AnimationComplete: "AnimationComplete",
        AnimationChange: "AnimationChange"
    };
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e
    }(common.Model);
    t.BaseModel = e,
    __reflect(e.prototype, "player.BaseModel");
    var n = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e
    }(common.View);
    t.BaseView = n,
    __reflect(n.prototype, "player.BaseView");
    var a = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e
    }(common.Command);
    t.BaseCommand = a,
    __reflect(a.prototype, "player.BaseCommand");
    var i = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class dragonBones.QueueCommand]"
        }
        ,
        e
    }(common.QueueCommand);
    t.QueueCommand = i,
    __reflect(i.prototype, "player.QueueCommand")
}(player || (player = {}));
var player;
!function(t) {
    var e = function(e) {
        function a() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.armatures = [],
            t.factory = dragonBones.EgretFactory.factory,
            t._armature = null,
            t
        }
        return __extends(a, e),
        a.toString = function() {
            return "[class player.ApplicationModel]"
        }
        ,
        a.prototype.createArmature = function(e) {
            var a = this.factory.buildArmatureDisplay(e.name, e.parent.name);
            if (a) {
                var i = this._context.create(n);
                return i.initialize(null, a, null),
                this.armatures.push(i),
                this.sendNotification(t.NotificationType.ArmatureAdd, i),
                i
            }
            return null
        }
        ,
        a.prototype.removeArmature = function(e) {
            this.armature === e && (this.armature = null);
            var n = this.armatures.indexOf(e);
            console.assert(n >= 0),
            this.armatures.splice(n, 1),
            this.sendNotification(t.NotificationType.ArmatureRemove, e),
            e.release()
        }
        ,
        a.prototype.clearAllArmature = function() {
            for (var t = this.armatures.length; t--; ) {
                var e = this.armatures[t];
                this.removeArmature(e)
            }
        }
        ,
        a.prototype.replaceArmature = function(e) {
            var n = this.armature
              , a = this.createArmature(e);
            n && a && (a.component.x = n.component.x,
            a.component.y = n.component.y),
            this.armature = a,
            this.sendNotification(t.NotificationType.ArmatureReplace, n),
            n && this.removeArmature(n)
        }
        ,
        Object.defineProperty(a.prototype, "vo", {
            set: function(e) {
                if (e) {
                    this.clearAllArmature(),
                    this.factory.clear(!0);
                    for (var n = 0, a = e; n < a.length; n++) {
                        var i = a[n]
                          , r = this.factory.parseDragonBonesData(i.data);
                        if (r)
                            if (i.textureAtlasDatas.length > 0)
                                for (var o = 0, s = 0, l = i.textureAtlasDatas; s < l.length; s++) {
                                    var u = l[s]
                                      , c = i.textureAtlases[o];
                                    c ? this.factory.parseTextureAtlasData(u, c) : this.factory.parseTextureAtlasData(u, null)
                                }
                            else
                                this.factory.updateTextureAtlasData(r.name, i.textureAtlases)
                    }
                    this.sendNotification(t.NotificationType.VOChange, null)
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(a.prototype, "armature", {
            get: function() {
                return this._armature
            },
            set: function(e) {
                if (this._armature !== e) {
                    var n = this._armature;
                    this._armature = e,
                    this.sendNotification(t.NotificationType.ArmatureChange, n)
                }
            },
            enumerable: !0,
            configurable: !0
        }),
        a
    }(t.BaseModel);
    t.ApplicationModel = e,
    __reflect(e.prototype, "player.ApplicationModel");
    var n = function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(n, e),
        n.toString = function() {
            return "[class player.ArmatureView]"
        }
        ,
        n.prototype._componentHandler = function(e) {
            var n = e.eventObject;
            switch (e.type) {
            case dragonBones.EventObject.FADE_IN:
                if (this._animation === n.animationState)
                    return;
                var a = this._animation;
                this._animation = n.animationState,
                a && this._animation && a.name === this._animation.name || this.sendNotification(t.NotificationType.AnimationChange, a),
                this.sendNotification(t.NotificationType.AnimationStart, this._animation);
                break;
            case dragonBones.EventObject.COMPLETE:
                this.sendNotification(t.NotificationType.AnimationComplete, this._animation)
            }
        }
        ,
        n.prototype._onClear = function() {
            this.component && (this.component.removeDBEventListener(dragonBones.EventObject.FADE_IN, this._componentHandler, this),
            this.component.removeDBEventListener(dragonBones.EventObject.COMPLETE, this._componentHandler, this),
            this.component.dispose(!0)),
            e.prototype._onClear.call(this),
            this._animation = null
        }
        ,
        n.prototype._onInitialize = function(t) {
            this.component.addEventListener(dragonBones.EventObject.FADE_IN, this._componentHandler, this),
            this.component.addEventListener(dragonBones.EventObject.COMPLETE, this._componentHandler, this)
        }
        ,
        n.prototype.changeAnimation = function(t) {
            var e = this.component.armature.armatureData.animationNames;
            t %= e.length,
            0 > t && (t = e.length + t),
            this.component.animation.fadeIn(e[t])
        }
        ,
        n.prototype.playAnimation = function(t) {
            void 0 === t && (t = null),
            t ? this.component.animation.fadeIn(t) : !this.component.animation.lastAnimationState || this.component.animation.lastAnimationState.isCompleted ? this.component.animation.play() : this.component.animation.lastAnimationState.play()
        }
        ,
        n.prototype.stopAnimation = function() {
            this.component.animation.lastAnimationState && this.component.animation.lastAnimationState.stop()
        }
        ,
        n.prototype.prevAnimation = function() {
            if (this._animation) {
                var t = this.component.armature.armatureData.animationNames;
                this.changeAnimation(t.indexOf(this._animation.name) - 1)
            } else
                this.playAnimation()
        }
        ,
        n.prototype.nextAnimation = function() {
            if (this._animation) {
                var t = this.component.armature.armatureData.animationNames;
                this.changeAnimation(t.indexOf(this._animation.name) + 1)
            } else
                this.playAnimation()
        }
        ,
        Object.defineProperty(n.prototype, "animation", {
            get: function() {
                return this._animation
            },
            enumerable: !0,
            configurable: !0
        }),
        n
    }(t.BaseView);
    t.ArmatureView = n,
    __reflect(n.prototype, "player.ArmatureView")
}(player || (player = {}));
var player;
!function(t) {
    var e = function(t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }
        return __extends(e, t),
        e.toString = function() {
            return "[class player.GetLocalFiles]"
        }
        ,
        e.prototype._onExecute = function() {
            return __awaiter(this, void 0, void 0, function() {
                var t = this;
                return __generator(this, function(e) {
                    return this.result = [],
                    [2, new Promise(function(e) {
                        var n = t.data.dataTransfer;
                        if (n && (n.files || n.items))
                            if (n.items)
                                for (var a = 0, i = function(n, r) {
                                    n.isDirectory ? n.createReader().readEntries(function(t) {
                                        for (var e = 0; e < t.length; ++e)
                                            i(t[e], r ? r + "/" + n.name : n.name)
                                    }) : (a++,
                                    n.file(function(n) {
                                        setTimeout(function() {
                                            n.modifyName = r ? r + "/" + n.name : n.name,
                                            t.result.push(n),
                                            a--,
                                            0 === a && e()
                                        }, 30)
                                    }))
                                }, r = 0; r < n.items.length; ++r) {
                                    var o = n.items[r];
                                    if (o.webkitGetAsEntry) {
                                        var s = o.webkitGetAsEntry();
                                        s && i(s, null)
                                    }
                                }
                            else {
                                for (var r = 0; r < n.files.length; ++r)
                                    t.result.push(n.files[r]);
                                e()
                            }
                        else
                            e()
                    }
                    )]
                })
            })
        }
        ,
        e
    }(t.BaseCommand);
    t.GetLocalFiles = e,
    __reflect(e.prototype, "player.GetLocalFiles")
}(player || (player = {}));
var player;
!function(t) {
    var e = function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(n, e),
        n.toString = function() {
            return "[class player.loadInlineFiles]"
        }
        ,
        n.prototype._onExecute = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e = this;
                return __generator(this, function(n) {
                    return this.result = [],
                    [2, new Promise(function(n) {
                        for (var a = 0, i = JSON.parse(e.data), r = 0, o = i; r < o.length; r++) {
                            var s = o[r]
                              , l = {
                                data: t.base64ToArrayBuffer(s.data),
                                textureAtlasDatas: [],
                                textureAtlases: []
                            };
                            a += s.textureAtlases.length;
                            for (var u = 0, c = s.textureAtlases; u < c.length; u++) {
                                var h = c[u]
                                  , d = document.createElement("img");
                                l.textureAtlases.push(d),
                                d.onload = function() {
                                    a--,
                                    0 >= a && n()
                                }
                                ,
                                d.src = "data:image/png;base64," + h
                            }
                            e.result.push(l)
                        }
                    }
                    )]
                })
            })
        }
        ,
        n
    }(t.BaseCommand);
    t.LoadInlineFiles = e,
    __reflect(e.prototype, "player.LoadInlineFiles")
}(player || (player = {}));
var player;
!function(t) {
    var e = function(e) {
        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._showSide = !1,
            t._sideValue = -n.SIDE_WIDTH,
            t._speeds = [.1, .25, .5, 1, 1.5, 2, 4, 8],
            t._dragonBonesPlayer = null,
            t._side = null,
            t._sideButton = null,
            t._dataList = null,
            t._armatureList = null,
            t._skinList = null,
            t._animationList = null,
            t._prevAnimationButton = null,
            t._nextAnimationButton = null,
            t._stopAnimationButton = null,
            t._playAnimationButton = null,
            t._animationSpeedLabel = null,
            t._reduceAnimationSpeedButton = null,
            t._increaseAnimationSpeedButton = null,
            t._gridEnabledButton = null,
            t._boneEnabledButton = null,
            t._infoLabel = null,
            t
        }
        return __extends(n, e),
        n.toString = function() {
            return "[class player.SideView]"
        }
        ,
        n.prototype._notificationHandler = function(e) {
            switch (e.type) {
            case t.NotificationType.VOChange:
                this._updateDataList(!0);
                break;
            case t.NotificationType.ArmatureChange:
                this._updateDataList(!1),
                this._updateArmatureList(),
                this._updateSkinList(),
                this._updateAnimationList(!0),
                this._updateAnimationList(!1),
                this._updatePlayAndStopButton(),
                this._updateAnimationSpeedLabel(),
                this._updateArmatureAndAnimationInfo();
                var n = e.data;
                n && (n.component.removeEventListener(dragonBones.EventObject.START, this._animationHandler, this),
                n.component.removeEventListener(dragonBones.EventObject.LOOP_COMPLETE, this._animationHandler, this),
                n.component.removeEventListener(dragonBones.EventObject.COMPLETE, this._animationHandler, this),
                n.component.removeEventListener(dragonBones.EventObject.FRAME_EVENT, this._animationHandler, this)),
                this.model.armature && (this.model.armature.component.addEventListener(dragonBones.EventObject.START, this._animationHandler, this),
                this.model.armature.component.addEventListener(dragonBones.EventObject.LOOP_COMPLETE, this._animationHandler, this),
                this.model.armature.component.addEventListener(dragonBones.EventObject.COMPLETE, this._animationHandler, this),
                this.model.armature.component.addEventListener(dragonBones.EventObject.FRAME_EVENT, this._animationHandler, this));
                break;
            case t.NotificationType.AnimationChange:
                this._updateAnimationList(!1),
                this._updateArmatureAndAnimationInfo();
                break;
            case t.NotificationType.AnimationStart:
                this._updatePlayAndStopButton();
                break;
            case t.NotificationType.AnimationComplete:
                this._updatePlayAndStopButton();
                break;
            case t.Application.TOUCH_STAGE:
                egret.Capabilities.isMobile && (this.showSide = !1)
            }
        }
        ,
        n.prototype._animationHandler = function(t) {
            var e = t.eventObject
              , n = "";
            switch (e.type) {
            case dragonBones.EventObject.FRAME_EVENT:
                n = "[Frame event] " + e.animationState.name + " " + e.name;
                break;
            case dragonBones.EventObject.SOUND_EVENT:
                n = "[Sound event] " + e.animationState.name + " " + e.name;
                break;
            default:
                n = "[Animation event] " + e.animationState.name + " " + e.type
            }
            console.info(n)
        }
        ,
        n.prototype._updateElementLanguage = function(t, e) {
            var n = document.getElementById(e);
            n && (n.innerHTML = lang.get(t))
        }
        ,
        n.prototype._updateDataList = function(t) {
            if (this._dataList)
                if (t) {
                    this._dataList.innerHTML = "";
                    for (var e in this.model.factory.getAllDragonBonesData()) {
                        var n = document.createElement("option");
                        n.value = e,
                        n.innerHTML = e,
                        this._dataList.appendChild(n)
                    }
                } else
                    this.model.armature ? this._dataList.value = this.model.armature.component.armature.armatureData.parent.name : this._dataList.selectedIndex = -1
        }
        ,
        n.prototype._updateArmatureList = function() {
            if (this._armatureList)
                if (this._armatureList.innerHTML = "",
                this.model.armature) {
                    for (var t = 0, e = this.model.armature.component.armature.armatureData.parent.armatureNames; t < e.length; t++) {
                        var n = e[t]
                          , a = document.createElement("option");
                        a.value = n,
                        a.innerHTML = n,
                        this._armatureList.appendChild(a)
                    }
                    this._armatureList.value = this.model.armature.component.armature.name
                } else
                    this._armatureList.selectedIndex = -1
        }
        ,
        n.prototype._updateSkinList = function() {
            if (this._skinList) {
                var t = document.getElementById("skinGroup");
                if (this._skinList.innerHTML = "",
                this.model.armature) {
                    var e = new Array
                      , n = this.model.armature.component.armature.armatureData
                      , a = this.model.factory.getAllDragonBonesData();
                    for (var i in a) {
                        var r = a[i];
                        for (var o in r.armatures) {
                            var s = r.armatures[o]
                              , l = !0;
                            if (s !== n)
                                for (var u in s.slots)
                                    if (!n.getSlot(u)) {
                                        l = !1;
                                        break
                                    }
                            if (l)
                                for (var c in s.skins)
                                    e.push(i + "->" + o + "->" + c)
                        }
                    }
                    for (var h = 0, d = e; h < d.length; h++) {
                        var c = d[h]
                          , m = document.createElement("option");
                        m.value = c,
                        m.innerHTML = c,
                        this._skinList.appendChild(m)
                    }
                    t && (e.length > 1 ? (t.style.display = null,
                    t.className = "h_group") : t.style.display = "none")
                } else
                    t && (t.style.display = "none");
                this._skinList.selectedIndex = -1
            }
        }
        ,
        n.prototype._updateAnimationList = function(t) {
            if (this._animationList)
                if (t) {
                    if (this._animationList.innerHTML = "",
                    this.model.armature)
                        for (var e = 0, n = this.model.armature.component.animation.animationNames; e < n.length; e++) {
                            var a = n[e]
                              , i = document.createElement("option");
                            i.value = a,
                            i.innerHTML = a,
                            this._animationList.appendChild(i)
                        }
                } else
                    this.model.armature && this.model.armature.animation ? this._animationList.value = this.model.armature.animation.name : this._animationList.selectedIndex = -1
        }
        ,
        n.prototype._updatePlayAndStopButton = function() {
            this.model.armature && this.model.armature.component.animation.isPlaying ? (this._stopAnimationButton && (this._stopAnimationButton.style.display = "none"),
            this._playAnimationButton && (this._playAnimationButton.style.display = "block")) : (this._stopAnimationButton && (this._stopAnimationButton.style.display = "block"),
            this._playAnimationButton && (this._playAnimationButton.style.display = "none"))
        }
        ,
        n.prototype._updateAnimationSpeedLabel = function() {
            this.model.armature && this._animationSpeedLabel && (this._animationSpeedLabel.innerHTML = "X " + this.model.armature.component.animation.timeScale.toFixed(2))
        }
        ,
        n.prototype._updateGridEnabled = function() {
            this._gridEnabledButton && (common.getInstance(t.Application).gridEnabled ? this._gridEnabledButton.className = "item selected" : this._gridEnabledButton.className = "item unselected")
        }
        ,
        n.prototype._updateBoneEnabled = function() {
            this._boneEnabledButton && (dragonBones.DragonBones.debugDraw ? this._boneEnabledButton.className = "item selected" : this._boneEnabledButton.className = "item unselected")
        }
        ,
        n.prototype._updateArmatureAndAnimationInfo = function() {
            var t = this.model.armature;
            if (t && this._infoLabel) {
                var e = t.component.armature.armatureData;
                this._infoLabel.innerHTML = lang.get(lang.Label.info, e.animationNames.length, e.sortedBones.length, e.sortedSlots.length, t.animation ? t.animation.currentTime.toFixed(3) : 0, this._getArmatureTriangleCount(t.component.armature), this._getChildArmatureCount(t.component.armature))
            } else
                this._updateElementLanguage(lang.None, "infoLabel")
        }
        ,
        n.prototype._updateStageSize = function() {
            egret.Capabilities.isMobile || common.getInstance(t.Application).setStageSize(this._dragonBonesPlayer.clientWidth, this._dragonBonesPlayer.clientHeight, -this._sideValue, 0)
        }
        ,
        n.prototype._getChildArmatureCount = function(t) {
            for (var e = 0, n = 0, a = t.getSlots(); n < a.length; n++) {
                var i = a[n];
                i.childArmature && (e++,
                e += this._getChildArmatureCount(i.childArmature))
            }
            return e
        }
        ,
        n.prototype._getArmatureTriangleCount = function(t) {
            for (var e = 0, n = 0, a = t.getSlots(); n < a.length; n++) {
                var i = a[n]
                  , r = i._displayFrame;
                if (r && r.displayData && 2 === r.displayData.type) {
                    var o = r.getGeometryData();
                    if (o) {
                        var s = o.data.intArray;
                        e += s[o.offset + 1]
                    }
                } else
                    i.childArmature ? e += this._getArmatureTriangleCount(i.childArmature) : i.display && (e += 2)
            }
            return e
        }
        ,
        n.prototype._onInitialize = function() {
            var e = this;
            this.addNotification(t.NotificationType.VOChange, this._notificationHandler),
            this.addNotification(t.NotificationType.ArmatureChange, this._notificationHandler),
            this.addNotification(t.NotificationType.AnimationChange, this._notificationHandler),
            this.addNotification(t.NotificationType.AnimationStart, this._notificationHandler),
            this.addNotification(t.NotificationType.AnimationComplete, this._notificationHandler),
            this.addNotification(t.Application.TOUCH_STAGE, this._notificationHandler),
            this.model.factory.soundEventManager.addEventListener(dragonBones.EventObject.SOUND_EVENT, this._animationHandler, this),
            egret.startTick(function(t) {
                return e._updateArmatureAndAnimationInfo(),
                !1
            }, this),
            lang.autoSelectLanguage(),
            this._dragonBonesPlayer = document.getElementById("dragonBonesPlayer"),
            this._side = document.getElementById("side"),
            this._sideButton = document.getElementById("sideButton"),
            this._dataList = document.getElementById("dataList"),
            this._skinList = document.getElementById("skinList"),
            this._armatureList = document.getElementById("armatureList"),
            this._animationList = document.getElementById("animationList"),
            this._prevAnimationButton = document.getElementById("prevAnimationButton"),
            this._nextAnimationButton = document.getElementById("nextAnimationButton"),
            this._stopAnimationButton = document.getElementById("playAnimationButton"),
            this._playAnimationButton = document.getElementById("stopAnimationButton"),
            this._animationSpeedLabel = document.getElementById("animationSpeedLabel"),
            this._reduceAnimationSpeedButton = document.getElementById("reduceAnimationSpeedButton"),
            this._increaseAnimationSpeedButton = document.getElementById("increaseAnimationSpeedButton"),
            this._gridEnabledButton = document.getElementById("gridEnabledButton"),
            this._boneEnabledButton = document.getElementById("boneEnabledButton"),
            this._infoLabel = document.getElementById("infoLabel"),
            this._dataList && (this._dataList.onchange = function(t) {
                var n = e.model.factory.getDragonBonesData(t.target.value);
                n && n.armatureNames.length > 0 && e.model.replaceArmature(n.getArmature(n.armatureNames[0]))
            }
            ),
            this._armatureList && (this._armatureList.onchange = function(t) {
                if (e.model.armature) {
                    var n = e.model.armature.component.armature.armatureData
                      , a = e.model.factory.getArmatureData(t.target.value, n.parent.name);
                    a && e.model.replaceArmature(a)
                }
            }
            ),
            this._skinList && (this._skinList.onchange = function(t) {
                if (e.model.armature) {
                    var n = e.application.queryConfig ? 1 === e.application.queryConfig.overrideSkin : !1
                      , a = t.target.value.split("->")
                      , i = e.model.armature.component.armature.armatureData
                      , r = e.model.factory.getDragonBonesData(a[0])
                      , o = r.getArmature(a[1])
                      , s = o.getSkin(a[2]);
                    n ? e.model.factory.replaceSkin(e.model.armature.component.armature, s, !0) : (i.defaultSkin && e.model.factory.replaceSkin(e.model.armature.component.armature, i.defaultSkin),
                    s !== i.defaultSkin && e.model.factory.replaceSkin(e.model.armature.component.armature, s))
                }
            }
            ),
            this._animationList && (this._animationList.onchange = function(t) {
                e.model.armature && e.model.armature.playAnimation(t.target.value)
            }
            ),
            this._prevAnimationButton && (this._prevAnimationButton.onclick = function() {
                e.model.armature && (e.model.armature.stopAnimation(),
                e.model.armature.animation && (e.model.armature.animation.currentTime -= 1 / e.model.armature.component.armature.armatureData.frameRate),
                e._updatePlayAndStopButton())
            }
            ),
            this._nextAnimationButton && (this._nextAnimationButton.onclick = function() {
                e.model.armature && (e.model.armature.stopAnimation(),
                e.model.armature.animation && (e.model.armature.animation.currentTime += 1 / e.model.armature.component.armature.armatureData.frameRate),
                e._updatePlayAndStopButton())
            }
            ),
            this._stopAnimationButton && (this._stopAnimationButton.onclick = function() {
                e.model.armature && (e.model.armature.playAnimation(),
                e._updatePlayAndStopButton())
            }
            ),
            this._playAnimationButton && (this._playAnimationButton.onclick = function() {
                e.model.armature && (e.model.armature.stopAnimation(),
                e._updatePlayAndStopButton())
            }
            ),
            this._reduceAnimationSpeedButton && (this._reduceAnimationSpeedButton.onclick = function() {
                if (e.model.armature) {
                    var t = e._speeds.indexOf(e.model.armature.component.animation.timeScale) - 1;
                    0 > t && (t = 0),
                    e.model.armature.component.animation.timeScale = e._speeds[t],
                    e._updateAnimationSpeedLabel()
                }
            }
            ),
            this._increaseAnimationSpeedButton && (this._increaseAnimationSpeedButton.onclick = function() {
                if (e.model.armature) {
                    var t = e._speeds.indexOf(e.model.armature.component.animation.timeScale) + 1;
                    t >= e._speeds.length && (t = e._speeds.length - 1),
                    e.model.armature.component.animation.timeScale = e._speeds[t],
                    e._updateAnimationSpeedLabel()
                }
            }
            ),
            this._gridEnabledButton && (this._gridEnabledButton.onclick = function() {
                common.getInstance(t.Application).gridEnabled = !common.getInstance(t.Application).gridEnabled,
                e._updateGridEnabled()
            }
            ),
            this._boneEnabledButton && (this._boneEnabledButton.onclick = function() {
                dragonBones.DragonBones.debugDraw = !dragonBones.DragonBones.debugDraw,
                e._updateBoneEnabled()
            }
            ),
            this._sideButton.onclick = function() {
                e.showSide = !e.showSide
            }
            ,
            this._updateDataList(!0),
            this._updateDataList(!1),
            this._updateArmatureList(),
            this._updateSkinList(),
            this._updateAnimationList(!0),
            this._updateAnimationList(!1),
            this._updatePlayAndStopButton(),
            this._updateAnimationSpeedLabel(),
            this._updateGridEnabled(),
            this._updateBoneEnabled(),
            this._updateArmatureAndAnimationInfo(),
            this._updateElementLanguage(lang.Label.backgroundColor, "backgroundColorLabel"),
            this._updateElementLanguage(lang.Label.grid, "gridLabel"),
            this._updateElementLanguage(lang.Label.bone, "boneLabel");
            var n = document.getElementById("backgroundColor");
            if (this._dragonBonesPlayer && n)
                for (var a = function(t, a) {
                    var i = n.children.item(t);
                    i.onclick = function() {
                        e._dragonBonesPlayer.style.backgroundColor = i.style.backgroundColor
                    }
                }, i = 0, r = n.children.length; r > i; ++i)
                    a(i, r);
            var o = document.getElementById("qrCodeGroup");
            if (o)
                if (egret.Capabilities.isMobile)
                    o && (o.style.display = "none");
                else {
                    var s = document.getElementById("data");
                    if (s && this.application.queryConfig && 1 === this.application.queryConfig.showQRCode) {
                        var l = document.getElementById("qrCode");
                        l && (new QRCode(l,{
                            width: 200,
                            height: 200
                        }).makeCode(window.location.href),
                        l.title = lang.get(lang.Label.qrCodeInfo))
                    }
                }
        }
        ,
        Object.defineProperty(n.prototype, "showSide", {
            get: function() {
                return this._showSide
            },
            set: function(t) {
                this._showSide !== t && (this._showSide = t,
                egret.Tween.get(this).to({
                    sideValue: this._showSide ? n.SIDE_WIDTH : 0
                }, 300, egret.Ease.cubicOut).call(this._updateStageSize, this))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "sideValue", {
            get: function() {
                return this._sideValue
            },
            set: function(t) {
                this._sideValue !== t && (this._sideValue = t,
                this._side.style.right = this._sideValue - n.SIDE_WIDTH + "px",
                this._sideButton.style.right = this._sideValue + "px")
            },
            enumerable: !0,
            configurable: !0
        }),
        n.SIDE_WIDTH = 260,
        n
    }(t.BaseView);
    t.SideView = e,
    __reflect(e.prototype, "player.SideView")
}(player || (player = {}));
var player;
!function(t) {
    var e = function(e) {
        function n() {
            return null !== e && e.apply(this, arguments) || this
        }
        return __extends(n, e),
        n.toString = function() {
            return "[class player.LoadRemoteFiles]"
        }
        ,
        n.prototype._onExecute = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e = this;
                return __generator(this, function(n) {
                    return this.result = [],
                    [2, new Promise(function(n) {
                        if (e.data.sources && e.data.sources instanceof Array) {
                            var a, i = e.data.sources, r = null, o = new XMLHttpRequest, s = function() {
                                if (r) {
                                    if (null === a.data)
                                        o.response instanceof ArrayBuffer ? a.data = o.response : a.data = JSON.parse(o.response);
                                    else if (a.textureAtlasDatas.length === a.textureAtlases.length)
                                        a.textureAtlasDatas.push(JSON.parse(o.response));
                                    else {
                                        var e = document.createElement("img");
                                        if (e.src = "data:image/png;base64," + t.arrayBufferToBase64(o.response),
                                        a.textureAtlases.push(e),
                                        a.textureAtlases.length === r.textureAtlases.length)
                                            return void l()
                                    }
                                    if (a.textureAtlasDatas.length === a.textureAtlases.length) {
                                        var n = r.root + r.textureAtlasDatas[a.textureAtlasDatas.length];
                                        n ? (o.open("GET", n, !0),
                                        o.responseType = "text",
                                        o.send()) : a.textureAtlasDatas.push("")
                                    } else {
                                        var n = r.root + r.textureAtlases[a.textureAtlases.length];
                                        n ? (o.open("GET", n, !0),
                                        o.responseType = "arraybuffer",
                                        o.send()) : a.textureAtlases.push(null)
                                    }
                                }
                            }, l = function() {
                                return 0 === i.length ? void n() : (r = i.pop(),
                                void (r ? (r.root = r.root || "",
                                a = {
                                    data: null,
                                    textureAtlasDatas: [],
                                    textureAtlases: []
                                },
                                e.result.push(a),
                                o.open("GET", r.root + r.data, !0),
                                r.data.indexOf(".json") < 0 ? o.responseType = "arraybuffer" : o.responseType = "text",
                                o.send()) : l()))
                            };
                            o.addEventListener("loadend", s),
                            l()
                        }
                    }
                    )]
                })
            })
        }
        ,
        n
    }(t.BaseCommand);
    t.LoadRemoteFiles = e,
    __reflect(e.prototype, "player.LoadRemoteFiles")
}(player || (player = {}));
var player;
!function(t) {
    function e(t) {
        if (t.indexOf("?") >= 0) {
            for (var e = {}, n = void 0, a = /\+/g, i = /([^&=]+)=?([^&]*)/g, r = function(t) {
                return decodeURIComponent(t.replace(a, " "))
            }, o = t.substring(1); n = i.exec(o); ) {
                var s = r(n[2])
                  , l = Number(s);
                l === l ? e[r(n[1])] = l : e[r(n[1])] = s
            }
            return e.sources && "string" == typeof e.sources && (e.sources = JSON.parse(e.sources)),
            e.armature && "string" == typeof e.armature && e.armature.indexOf(",") > 0 && (e.armature = e.armature.split(",")),
            e.skin && "string" == typeof e.skin && e.skin.indexOf(",") > 0 && (e.skin = e.skin.split(",")),
            e
        }
        return null
    }
    function n(t) {
        for (var e = [], n = 0; n < t.length; n++) {
            var a = t[n];
            if (0 === a)
                break;
            var i = 0;
            if (a > 224)
                i = (15 & a) << 12,
                a = t[++n],
                i |= (63 & a) << 6,
                a = t[++n],
                i |= 63 & a,
                e.push(String.fromCharCode(i));
            else if (a > 192)
                i = (31 & a) << 6,
                a = t[++n],
                i |= (63 & a) << 6,
                e.push(String.fromCharCode(i));
            else {
                if (a > 128)
                    throw new Error("InvalidCharacterError");
                e.push(String.fromCharCode(t[n]))
            }
        }
        return e.join("")
    }
    function a(t) {
        for (var e = window.atob(t), n = e.length, a = new Uint8Array(n), i = 0; n > i; ++i)
            a[i] = e.charCodeAt(i);
        return a.buffer
    }
    function i(t) {
        for (var e = "", n = new Uint8Array(t), a = n.byteLength, i = 0; a > i; i++)
            e += String.fromCharCode(n[i]);
        return window.btoa(e)
    }
    t.getQueryConfig = e,
    t.utf8ArrayToString = n,
    t.base64ToArrayBuffer = a,
    t.arrayBufferToBase64 = i
}(player || (player = {}));
var DragManager = function() {
    function t() {
        this.lastEvent = null,
        this._isDragMove = !1,
        this._helpPoint = new egret.Point,
        this._dragPosition = new egret.Point,
        this._dragOffset = new egret.Point,
        this._dragSpeed = new egret.Point,
        this._dragTarget = null
    }
    return t.getInstance = function() {
        return t._instance || (t._instance = new t),
        t._instance
    }
    ,
    t.prototype.enableDrag = function(t) {
        t && (t.touchEnabled = !0,
        t.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._dragHandler, this),
        t.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._dragHandler, this),
        t.addEventListener(egret.TouchEvent.TOUCH_END, this._dragHandler, this))
    }
    ,
    t.prototype.disableDrag = function(t) {
        t && (t.removeEventListener(egret.TouchEvent.TOUCH_BEGIN, this._dragHandler, this),
        t.removeEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, this._dragHandler, this),
        t.removeEventListener(egret.TouchEvent.TOUCH_END, this._dragHandler, this),
        t.removeEventListener(egret.Event.ENTER_FRAME, this._enterFrameHandler, this))
    }
    ,
    t.prototype._dragHandler = function(e) {
        switch (e.type) {
        case egret.TouchEvent.TOUCH_BEGIN:
            if (this._dragTarget)
                return;
            this.lastEvent = e,
            this._isDragMove = !1,
            this.dragTarget = e.currentTarget;
            break;
        case egret.TouchEvent.TOUCH_RELEASE_OUTSIDE:
        case egret.TouchEvent.TOUCH_END:
            this.lastEvent = e,
            this.dragTarget = null;
            break;
        case egret.TouchEvent.TOUCH_MOVE:
            if (this._dragTarget) {
                this.lastEvent = e,
                this._dragTarget.parent.globalToLocal(e.stageX, e.stageY, this._helpPoint);
                var n = this._helpPoint.x + this._dragOffset.x
                  , a = this._helpPoint.y + this._dragOffset.y;
                !this._isDragMove && (Math.abs(this._dragPosition.x - n) > 5 || Math.abs(this._dragPosition.y - a) > 5) && (this._isDragMove = !0,
                this._dragTarget.dispatchEventWith(t.DRAG_BEGIN),
                this._dragTarget && this._dragTarget.addEventListener(egret.Event.ENTER_FRAME, this._enterFrameHandler, this)),
                this._dragTarget && this._isDragMove && (this._dragTarget.parent.globalToLocal(e.stageX, e.stageY, this._helpPoint),
                this._dragPosition.x = n,
                this._dragPosition.y = a)
            }
        }
    }
    ,
    t.prototype._enterFrameHandler = function(e) {
        var n = e.currentTarget;
        if (n === this._dragTarget)
            this._dragSpeed.x += .5 * (this._dragPosition.x - n.x - this._dragSpeed.x),
            this._dragSpeed.y += .5 * (this._dragPosition.y - n.y - this._dragSpeed.y),
            (n.x !== this._dragPosition.x || n.y !== this._dragPosition.y) && (n.x = this._dragPosition.x,
            n.y = this._dragPosition.y,
            n.hasEventListener(t.DRAG_MOVE) && n.dispatchEventWith(t.DRAG_MOVE));
        else {
            var a = n.dragSpeed;
            n.x += a.x,
            n.y += a.y,
            a.x *= .7,
            a.y *= .7,
            n.hasEventListener(t.DRAG_MOVE) && n.dispatchEventWith(t.DRAG_MOVE),
            Math.abs(a.x) < 1 && Math.abs(a.y) < 1 && n.removeEventListener(egret.Event.ENTER_FRAME, this._enterFrameHandler, this)
        }
    }
    ,
    Object.defineProperty(t.prototype, "isDragMove", {
        get: function() {
            return this._isDragMove
        },
        enumerable: !0,
        configurable: !0
    }),
    Object.defineProperty(t.prototype, "dragTarget", {
        get: function() {
            return this._dragTarget
        },
        set: function(e) {
            this._dragTarget !== e && (this._dragTarget && (this._dragTarget.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE, this._dragHandler, this),
            this._isDragMove ? this._dragTarget.dragSpeed = this._dragSpeed.clone() : this._dragTarget.removeEventListener(egret.Event.ENTER_FRAME, this._enterFrameHandler, this),
            this._dragTarget.dispatchEventWith(t.DRAG_END)),
            this._dragTarget = e,
            this._dragTarget && (this.lastEvent && (this._dragTarget.parent.globalToLocal(this.lastEvent.stageX, this.lastEvent.stageY, this._helpPoint),
            this._dragPosition.x = this._dragTarget.x,
            this._dragPosition.y = this._dragTarget.y,
            this._dragOffset.x = this._dragPosition.x - this._helpPoint.x,
            this._dragOffset.y = this._dragPosition.y - this._helpPoint.y,
            this._dragSpeed.x = 0,
            this._dragSpeed.y = 0),
            this._dragTarget.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE, this._dragHandler, this)))
        },
        enumerable: !0,
        configurable: !0
    }),
    t.DRAG_BEGIN = "dragBegin",
    t.DRAG_END = "dragEnd",
    t.DRAG_MOVE = "dragMove",
    t._instance = null,
    t
}();
__reflect(DragManager.prototype, "DragManager");
var lang;
!function(t) {
    function e() {
        n(navigator.language || navigator.browserLanguage)
    }
    function n(e) {
        switch (e.toLowerCase()) {
        case "en-us":
            t.language = i.en_US;
            break;
        case "zh-cn":
            t.language = i.zh_CN;
            break;
        default:
            t.language = i.en_US
        }
    }
    function a(e) {
        for (var n = [], a = 1; a < arguments.length; a++)
            n[a - 1] = arguments[a];
        var r;
        if (r = t.language < e.length ? e[t.language] : e[i.en_US],
        n.length > 0)
            for (var o = 0, s = n.length; s > o; ++o)
                r = r.replace("{" + o + "}", n[o]);
        return r
    }
    var i;
    !function(t) {
        t[t.en_US = 0] = "en_US",
        t[t.zh_CN = 1] = "zh_CN"
    }(i = t.LanguageType || (t.LanguageType = {})),
    t.language = i.en_US,
    t.autoSelectLanguage = e,
    t.setLanguageByString = n,
    t.get = a,
    t.None = ["", ""],
    t.Label = {
        backgroundColor: ["Background Color", "背景色"],
        grid: ["Show Grid", "显示网格"],
        bone: ["Show Bone", "显示骨骼"],
        info: ["Infomation<br/>Time {3}<br/>Animations {0}<br/>Bones {1}<br/>Slots {2}<br/>Child armature {5}<br/>Triangles {4}<br/>", "信息<br/>时间 {3}<br/>动画 {0}<br/>骨骼 {1}<br/>插槽 {2}<br/>子骨架 {5}<br/>三角形 {4}<br/>"],
        qrCodeInfo: ["Preview on smart Phone (Make sure the smart phone and the PC in the same LAN)", "手机扫码预览（确保手机和电脑在同一个局域网内）"]
    }
}(lang || (lang = {}));
var Main = function(t) {
    function e() {
        var n = t.call(this) || this;
        n.container = new egret.DisplayObjectContainer,
        n.armatureContainer = new egret.DisplayObjectContainer,
        n.lineH = new egret.Shape,
        n.lineV = new egret.Shape,
        n.grid = new egret.Bitmap,
        n._context = common.create(common.Context),
        e.instance = n,
        n.addChild(n.container),
        n.container.addChild(n.grid),
        n.container.addChild(n.lineV),
        n.container.addChild(n.lineH),
        n.container.addChild(n.armatureContainer),
        n.lineH.graphics.lineStyle(1, 0, 1, !0),
        n.lineV.graphics.lineStyle(1, 0, 1, !0),
        n.lineH.graphics.moveTo(0, 0),
        n.lineV.graphics.moveTo(0, 0),
        n.lineH.graphics.lineTo(101, 0),
        n.lineV.graphics.lineTo(0, 101),
        n.grid.smoothing = !1,
        n.grid.fillMode = egret.BitmapFillMode.REPEAT;
        var a = new egret.Texture;
        return a.bitmapData = new egret.BitmapData(document.getElementById("background")),
        n.grid.texture = a,
        n.addEventListener(egret.Event.ADDED_TO_STAGE, function() {
            var t = n._context.getInstance(player.Application)
              , e = n._context.getInstance(player.SideView)
              , a = n._context.getInstance(player.ApplicationModel);
            if (n._context.initialize(t),
            t.queryConfig = player.getQueryConfig(window.location.search),
            t.initialize(a, n, null),
            e.initialize(a, n, null),
            t.queryConfig && t.queryConfig.sources)
                t.controller.execute(player.LoadRemoteFiles, t.queryConfig).then(function(e) {
                    t.model.vo = e
                });
            else {
                var i = document.getElementById("data");
                i && t.controller.execute(player.LoadInlineFiles, i.innerHTML).then(function(e) {
                    t.model.vo = e
                })
            }
            t.queryConfig && 0 === t.queryConfig.showSide || (e.showSide = !0)
        }, n),
        n
    }
    return __extends(e, t),
    Object.defineProperty(e.prototype, "context", {
        get: function() {
            return this._context
        },
        enumerable: !0,
        configurable: !0
    }),
    e
}(egret.DisplayObjectContainer);
__reflect(Main.prototype, "Main");
var player;
!function(t) {
    var e = function(e) {
        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.queryConfig = null,
            t._isFirstData = !0,
            t._gridEnabled = !1,
            t._isAlt = !1,
            t._scaleType = 3,
            t._stageWidth = 0,
            t._stageHeight = 0,
            t._stageWidthOffset = 0,
            t._stageHeightOffset = 0,
            t._stageScale = 1,
            t._gridScale = 3,
            t._time = 0,
            t._targetX = 0,
            t._targetY = 0,
            t._stageScalePoint = new egret.Point,
            t._scaleRectangle = new egret.Rectangle,
            t._targetAnimationNames = ["PARAM_ANGLE_X", "PARAM_ANGLE_Y", "PARAM_ANGLE_Z", "PARAM_EYE_BALL_X", "PARAM_EYE_BALL_Y", "PARAM_BODY_X", "PARAM_BODY_Y", "PARAM_BODY_Z", "PARAM_BODY_ANGLE_X", "PARAM_BODY_ANGLE_Y", "PARAM_BODY_ANGLE_Z", "PARAM_BREATH"],
            t._defaultArmature = null,
            t._currentArmature = null,
            t._touchArmature = null,
            t
        }
        return __extends(n, e),
        n.toString = function() {
            return "[class player.Application]"
        }
        ,
        n.prototype._notificationHandler = function(e) {
            switch (e.type) {
            case t.NotificationType.VOChange:
                var n = null;
                if (this._isFirstData && this.queryConfig && this.queryConfig.armature)
                    if (this.queryConfig.armature instanceof Array)
                        switch (this.queryConfig.armature.length) {
                        case 0:
                            break;
                        case 1:
                            n = this.model.factory.getArmatureData(this.queryConfig.armature[0]);
                            break;
                        default:
                            n = this.model.factory.getArmatureData(this.queryConfig.armature[1], this.queryConfig.armature[0])
                        }
                    else
                        n = this.model.factory.getArmatureData(this.queryConfig.armature);
                if (!n)
                    for (var a in this.model.factory.getAllDragonBonesData()) {
                        var i = this.model.factory.getDragonBonesData(a);
                        if (i && i.armatureNames.length > 0) {
                            n = i.stage ? i.stage : i.getArmature(i.armatureNames[0]);
                            break
                        }
                    }
                n && (this.model.armature = this.model.createArmature(n));
                break;
            case t.NotificationType.ArmatureAdd:
                var r = e.data;
                r && (r.component.touchEnabled = !0,
                r.component.disableBatch(),
                this.component.armatureContainer.addChild(r.component));
                break;
            case t.NotificationType.ArmatureRemove:
                var r = e.data;
                r && (DragManager.getInstance().disableDrag(r.component),
                this.component.armatureContainer.removeChild(r.component));
                break;
            case t.NotificationType.ArmatureChange:
                var r = this.model.armature;
                if (r) {
                    var o = e.data;
                    if (this._defaultArmature || (this._defaultArmature = r),
                    this.model.armatures.length < 3 && this.scaleToType(0, o ? void 0 : 0),
                    this._isFirstData && this.queryConfig && this.queryConfig.skin) {
                        var n = null
                          , s = null;
                        if (this.queryConfig.skin instanceof Array)
                            switch (this.queryConfig.skin.length) {
                            case 0:
                                break;
                            case 1:
                                n = this.model.factory.getArmatureData(this.queryConfig.skin[0]),
                                n && (s = n.defaultSkin);
                                break;
                            case 2:
                                n = this.model.factory.getArmatureData(this.queryConfig.skin[1], this.queryConfig.skin[0]),
                                n && (s = n.defaultSkin);
                                break;
                            case 3:
                                n = this.model.factory.getArmatureData(this.queryConfig.skin[1], this.queryConfig.skin[0]),
                                n && (s = n.getSkin(this.queryConfig.skin[2]));
                                break;
                            default:
                                for (var l = 0, u = this.queryConfig.skin.length; u > l; l += 3)
                                    n = this.model.factory.getArmatureData(this.queryConfig.skin[l + 1], this.queryConfig.skin[l]),
                                    n && (s = n.getSkin(this.queryConfig.skin[l + 2]),
                                    s && this.model.factory.replaceSkin(r.component.armature, s));
                                n = null,
                                s = null
                            }
                        else
                            n = this.model.factory.getArmatureData(this.queryConfig.skin),
                            n && (s = n.defaultSkin);
                        s && this.model.factory.replaceSkin(r.component.armature, s)
                    }
                    this._isFirstData && this.queryConfig && this.queryConfig.animation ? r.playAnimation(this.queryConfig.animation) : r.playAnimation(),
                    this._currentArmature = r
                }
                this._isFirstData = !1;
                break;
            case t.NotificationType.ArmatureReplace:
                var r = this.model.armature;
                if (r) {
                    var o = e.data;
                    o === this._defaultArmature ? this._defaultArmature = r : DragManager.getInstance().enableDrag(r.component)
                }
                break;
            case t.NotificationType.AnimationComplete:
            }
        }
        ,
        n.prototype._resizeHandler = function(t) {
            var e = this.component.stage.stageWidth
              , n = this.component.stage.stageHeight
              , a = this.component.grid.texture.bitmapData.width * this.component.grid.scaleX
              , i = this.component.grid.texture.bitmapData.height * this.component.grid.scaleY;
            this.component.lineH.scaleX = .01 * e,
            this.component.lineV.scaleY = .01 * n,
            this.component.grid.width = (e + a) / this.component.grid.scaleX,
            this.component.grid.height = (n + i) / this.component.grid.scaleY,
            this.setStageSize(this.component.stage.stageWidth, this.component.stage.stageHeight, this._stageWidthOffset, this._stageHeightOffset)
        }
        ,
        n.prototype._enterFrameHandler = function(t) {
            if (this._currentArmature) {
                var e = this._currentArmature.component.armature
                  , n = e.armatureData.canvas;
                if (n)
                    for (var a = this.model.factory.clock.time, i = 0, r = Math.max(Math.min((this._targetX - n.x) / (.5 * n.width), 1), -1), o = -Math.max(Math.min((this._targetY - n.y) / (.5 * n.height), 1), -1), s = this._currentArmature.component.animation, l = 0, u = this._targetAnimationNames; l < u.length; l++) {
                        var c = u[l];
                        if (s.hasAnimation(c)) {
                            var h = s.getState(c, 2);
                            if (h || (h = s.fadeIn(c, 0, 1, 2, c, !0),
                            h && (h.actionEnabled = !1,
                            h.resetToPose = !1,
                            h.stop())),
                            !h)
                                continue;
                            switch (c) {
                            case "PARAM_ANGLE_X":
                            case "PARAM_EYE_BALL_X":
                                i = .5 * (r + 1),
                                h.weight = .5 * (Math.sin(.5 * a) + 1) * .5 + .5;
                                break;
                            case "PARAM_ANGLE_Y":
                            case "PARAM_EYE_BALL_Y":
                                i = .5 * (o + 1),
                                h.weight = .5 * (Math.sin(.3 * a) + 1) * .5 + .5;
                                break;
                            case "PARAM_ANGLE_Z":
                                i = .5 * (-r * o + 1),
                                h.weight = .5 * (Math.sin(.5 * a) + 1) * .5 + .5;
                                break;
                            case "PARAM_BODY_X":
                            case "PARAM_BODY_ANGLE_X":
                                i = .5 * (r + 1),
                                h.weight = .5 * (Math.sin(.3 * a) + 1) * .5 + .5;
                                break;
                            case "PARAM_BODY_Y":
                            case "PARAM_BODY_ANGLE_Y":
                                i = .5 * (-r * o + 1),
                                h.weight = .5 * (Math.sin(.5 * a) + 1) * .5 + .5;
                                break;
                            case "PARAM_BODY_Z":
                            case "PARAM_BODY_ANGLE_Z":
                                i = .5 * (-r * o + 1),
                                h.weight = .5 * (Math.sin(.3 * a) + 1) * .5 + .5;
                                break;
                            case "PARAM_BREATH":
                                i = .5 * (Math.sin(a) + 1)
                            }
                            h.currentTime = i * h.totalTime
                        }
                    }
            }
        }
        ,
        n.prototype._touchHandler = function(t) {
            switch (t.type) {
            case egret.TouchEvent.TOUCH_BEGIN:
                if (t.target instanceof dragonBones.EgretArmatureDisplay) {
                    var e = t.target.armature.display
                      , a = common.getViewByComponent(e, this.model.armatures);
                    this.model.armature = a,
                    this._touchArmature = this.model.armature
                } else
                    this._touchArmature = null;
                egret.Tween.removeTweens(this),
                egret.Tween.removeTweens(this.component.container);
                break;
            case egret.TouchEvent.TOUCH_END:
                var i = this.model.factory.clock.time;
                i - this._time < .3 ? this.scaleToType(this._scaleType + 1) : DragManager.getInstance().isDragMove || this._touchArmature && (this.component.armatureContainer.getChildIndex(this._touchArmature.component) === this.component.armatureContainer.numChildren - 1 ? this._touchArmature.nextAnimation() : this.component.armatureContainer.addChild(this._touchArmature.component)),
                this.sendNotification(n.TOUCH_STAGE, null),
                this._time = i,
                this._touchArmature = null;
                break;
            case DragManager.DRAG_BEGIN:
                this._isAlt && (DragManager.getInstance().dragTarget = null,
                this._touchArmature && (this.model.armature = this.model.createArmature(this._touchArmature.component.armature.armatureData),
                this.model.armature && (this.model.armature.playAnimation(this._touchArmature.animation ? this._touchArmature.animation.name : null),
                DragManager.getInstance().enableDrag(this.model.armature.component),
                DragManager.getInstance().dragTarget = this.model.armature.component)));
                break;
            case DragManager.DRAG_MOVE:
                this._updateBackgroundPosition()
            }
        }
        ,
        n.prototype._documentHandler = function(t) {
            switch (t.type) {
            case "keydown":
            case "keyup":
                this._isAlt = t.altKey;
                break;
            case "mousemove":
                var e = t;
                if (e.x < 0 || e.x > 0 + this.viewStageWidth || e.y < 0 || e.y > 0 + this.viewStageHeight)
                    return;
                var n = this.component.container;
                this._targetX += .3 * ((e.x - n.x) / this._stageScale - this._targetX),
                this._targetY += .3 * ((e.y - n.y) / this._stageScale - this._targetY);
                break;
            case "mousewheel":
                var a = t;
                if (a.x < 0 || a.x > 0 + this.viewStageWidth || a.y < 0 || a.y > 0 + this.viewStageHeight)
                    return;
                var n = this.component.container;
                if (a.wheelDelta > 0) {
                    var i = this._getFormatScale(1.2 * this.stageScale);
                    this.stageScale !== i && (this._stageScalePoint.x = a.x - n.x,
                    this._stageScalePoint.y = a.y - n.y,
                    this._stageScalePoint.x = n.x + (this._stageScalePoint.x - this._stageScalePoint.x / this.stageScale * i),
                    this._stageScalePoint.y = n.y + (this._stageScalePoint.y - this._stageScalePoint.y / this.stageScale * i),
                    this.scaleTo(i, this._stageScalePoint))
                } else {
                    var i = this._getFormatScale(.8 * this.stageScale);
                    this.stageScale !== i && (this._stageScalePoint.x = this.viewStageWidth - a.x,
                    this._stageScalePoint.y = this.viewStageHeight - a.y,
                    this._stageScalePoint.x = n.x + .2 * (this._stageScalePoint.x - n.x),
                    this._stageScalePoint.y = n.y + .2 * (this._stageScalePoint.y - n.y),
                    this.scaleTo(i, this._stageScalePoint))
                }
                break;
            case "dragenter":
            case "dragover":
                t.stopPropagation(),
                t.preventDefault();
                break;
            case "drop":
                this._loadLocalFiles(t),
                t.stopPropagation(),
                t.preventDefault()
            }
        }
        ,
        n.prototype._loadLocalFiles = function(e) {
            return __awaiter(this, void 0, void 0, function() {
                var n, a;
                return __generator(this, function(i) {
                    switch (i.label) {
                    case 0:
                        return [4, this.controller.execute(t.GetLocalFiles, e)];
                    case 1:
                        return n = i.sent(),
                        [4, this.controller.execute(t.LoadLocalFiles, n)];
                    case 2:
                        return a = i.sent(),
                        this.model.vo = a,
                        [2]
                    }
                })
            })
        }
        ,
        n.prototype._getFormatScale = function(t) {
            return t < n.MIN_SCALE ? t = n.MIN_SCALE : t > n.MAX_SCALE && (t = n.MAX_SCALE),
            t
        }
        ,
        n.prototype._updateBackgroundPosition = function() {
            var t = this.component.container
              , e = this.component.grid
              , n = e.texture.bitmapData.width * e.scaleX
              , a = e.texture.bitmapData.height * e.scaleY;
            this.component.lineH.x = -t.x,
            this.component.lineV.y = -t.y,
            e.x = -Math.ceil(t.x / n) * n,
            e.y = -Math.ceil(t.y / a) * a
        }
        ,
        n.prototype._onInitialize = function() {
            var e = this;
            if (console.log("DragonBones Viewer: 0.2.0"),
            this.addNotification(t.NotificationType.VOChange, this._notificationHandler, 1),
            this.addNotification(t.NotificationType.ArmatureAdd, this._notificationHandler),
            this.addNotification(t.NotificationType.ArmatureRemove, this._notificationHandler),
            this.addNotification(t.NotificationType.ArmatureChange, this._notificationHandler),
            this.addNotification(t.NotificationType.ArmatureReplace, this._notificationHandler),
            this.addNotification(t.NotificationType.AnimationComplete, this._notificationHandler),
            this.component.container.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this._touchHandler, this),
            this.component.container.addEventListener(egret.TouchEvent.TOUCH_END, this._touchHandler, this),
            this.component.container.addEventListener(DragManager.DRAG_BEGIN, this._touchHandler, this),
            this.component.container.addEventListener(DragManager.DRAG_MOVE, this._touchHandler, this),
            this.component.stage.addEventListener(egret.Event.RESIZE, this._resizeHandler, this),
            this.component.stage.addEventListener(egret.Event.ENTER_FRAME, this._enterFrameHandler, this),
            !egret.Capabilities.isMobile) {
                var n = document.body;
                n.onkeydown = n.onkeyup = n.onmousemove = n.onmousewheel = n.ondragenter = n.ondragover = n.ondrop = function(t) {
                    e._documentHandler(t)
                }
            }
            this.gridEnabled = !0,
            this.component.container.touchChildren = !0,
            this._resizeHandler(null),
            this.scaleToType(0, 0),
            DragManager.getInstance().enableDrag(this.component.container)
        }
        ,
        n.prototype.setStageSize = function(t, e, n, a) {
            var i = this.viewStageWidth || 1
              , r = this.viewStageHeight || 1;
            this._stageWidth = t,
            this._stageHeight = e,
            this._stageWidthOffset = n,
            this._stageHeightOffset = a,
            egret.Tween.removeTweens(this),
            egret.Tween.removeTweens(this.component.container),
            egret.Tween.get(this.component.container, {
                onChange: this._updateBackgroundPosition,
                onChangeObj: this
            }).to({
                x: this.viewStageWidth * this.component.container.x / i,
                y: this.viewStageHeight * this.component.container.y / r
            }, 300, egret.Ease.cubicOut)
        }
        ,
        n.prototype.scaleTo = function(t, e, n) {
            void 0 === n && (n = 500),
            egret.Tween.removeTweens(this),
            egret.Tween.removeTweens(this.component.container),
            0 === n ? (this.component.container.x = e.x,
            this.component.container.y = e.y,
            this.stageScale = t) : (e && egret.Tween.get(this.component.container).to({
                x: e.x,
                y: e.y
            }, n, egret.Ease.cubicOut),
            egret.Tween.get(this).to({
                stageScale: t
            }, n, egret.Ease.cubicOut))
        }
        ,
        n.prototype.scaleToType = function(t, e) {
            void 0 === e && (e = 500),
            this._scaleType = t,
            3 === this._scaleType && (this._scaleType = 0);
            var n = 1
              , a = this.model.armature;
            if (a) {
                var i = a.component.armature.armatureData.canvas
                  , r = this._scaleRectangle;
                i ? r.setTo(i.x - .5 * i.width, i.y - .5 * i.height, i.width, i.height) : a.component.getBounds(r);
                var o = this.viewStageWidth / this.viewStageHeight
                  , s = r.width / r.height;
                switch (this._scaleType) {
                case 0:
                    break;
                case 1:
                    n = o > s ? this.viewStageHeight / (r.height + 100) : this.viewStageWidth / (r.width + 100);
                    break;
                case 2:
                    n = o > s ? this.viewStageWidth / (r.width + 100) : this.viewStageHeight / (r.height + 100)
                }
                this._stageScalePoint.x = .5 * this.viewStageWidth - (r.x + .5 * r.width + a.component.x) * n,
                this._stageScalePoint.y = .5 * this.viewStageHeight - (r.y + .5 * r.height + a.component.y) * n
            } else
                this._stageScalePoint.x = .5 * this.viewStageWidth,
                this._stageScalePoint.y = .5 * this.viewStageHeight;
            this.scaleTo(n, this._stageScalePoint, e)
        }
        ,
        Object.defineProperty(n.prototype, "gridEnabled", {
            get: function() {
                return this._gridEnabled
            },
            set: function(t) {
                this._gridEnabled !== t && (this._gridEnabled = t,
                this._gridEnabled ? (this.component.grid.alpha = .1,
                this.component.lineH.visible = !0,
                this.component.lineV.visible = !0) : (this.component.grid.alpha = 0,
                this.component.lineH.visible = !1,
                this.component.lineV.visible = !1))
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "stageWidth", {
            get: function() {
                return this._stageWidth
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "stageHeight", {
            get: function() {
                return this._stageHeight
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "viewStageWidth", {
            get: function() {
                return Math.max(this._stageWidth + this._stageWidthOffset, 0)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "viewStageHeight", {
            get: function() {
                return Math.max(this._stageHeight + this._stageHeightOffset, 0)
            },
            enumerable: !0,
            configurable: !0
        }),
        Object.defineProperty(n.prototype, "stageScale", {
            get: function() {
                return this._stageScale
            },
            set: function(t) {
                t = this._getFormatScale(t),
                this._stageScale = t,
                this.component.armatureContainer.scaleX = this.component.armatureContainer.scaleY = this._stageScale;
                var e = Math.max(this._stageScale * this._gridScale, .2)
                  , n = this.component.grid
                  , a = n.texture.bitmapData.width * e
                  , i = n.texture.bitmapData.height * e;
                n.scaleX = n.scaleY = e,
                n.width = (this.stageWidth + a) / e,
                n.height = (this.stageHeight + i) / e,
                this._updateBackgroundPosition()
            },
            enumerable: !0,
            configurable: !0
        }),
        n.MAX_SCALE = 25,
        n.MIN_SCALE = .1,
        n.TOUCH_STAGE = "touchStage",
        n
    }(t.BaseView);
    t.Application = e,
    __reflect(e.prototype, "player.Application")
}(player || (player = {}));
var player;
!function(t) {
    var e = function(e) {
        function n() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t._loadCount = 0,
            t._dragonBonesConfigs = {},
            t._textureAtlasConfigs = {},
            t._textureAtlasTextures = {},
            t
        }
        return __extends(n, e),
        n.toString = function() {
            return "[class player.LoadLocalFiles]"
        }
        ,
        n.prototype._onExecute = function() {
            return __awaiter(this, void 0, void 0, function() {
                var e = this;
                return __generator(this, function(n) {
                    return this.result = [],
                    [2, new Promise(function(n) {
                        for (var a = function(t) {
                            var n = t.target;
                            switch (t.type) {
                            case "load":
                                var r = n.file
                                  , o = n.result
                                  , s = r.modifyName || r.name
                                  , l = r.baseName;
                                "image/png" === r.type ? (l = r.baseName = e._modifyName(s),
                                e._textureAtlasTextures[l] = r,
                                console.log("Load complete:", r.type, s),
                                n.removeEventListener("load", a),
                                n.removeEventListener("error", a),
                                e._loadCount--,
                                0 === e._loadCount && i()) : l ? (console.log("Load complete:", r.type, s),
                                n.removeEventListener("load", a),
                                n.removeEventListener("error", a),
                                e._loadCount--,
                                0 === e._loadCount && i()) : (l = r.baseName = e._modifyName(s),
                                0 === o.indexOf("DBDT") ? (e._dragonBonesConfigs[l] = r,
                                n.readAsArrayBuffer(r),
                                console.log("Load:", r.type, s)) : o.indexOf("armature") > 0 || o.indexOf("textureAtlas") > 0 ? (e._dragonBonesConfigs[l] = r,
                                n.readAsText(r),
                                console.log("Load:", r.type, s)) : o.indexOf("SubTexture") > 0 ? (e._textureAtlasConfigs[l] = r,
                                n.readAsText(r),
                                console.log("Load:", r.type, s)) : (n.removeEventListener("load", a),
                                n.removeEventListener("error", a),
                                e._loadCount--,
                                0 === e._loadCount && i()));
                                break;
                            default:
                                n.removeEventListener("load", a),
                                n.removeEventListener("error", a),
                                e._loadCount--,
                                0 === e._loadCount && i()
                            }
                        }, i = (function() {
                            var a = 0;
                            for (var i in e._dragonBonesConfigs) {
                                var r = e._dragonBonesConfigs[i]
                                  , o = r.loader
                                  , s = "string" == typeof o.result ? JSON.parse(o.result) : o.result
                                  , l = {
                                    data: s,
                                    textureAtlasDatas: [],
                                    textureAtlases: []
                                }
                                  , u = null;
                                if (s instanceof ArrayBuffer) {
                                    var c = new Uint32Array(s,8,1)[0]
                                      , h = new Uint8Array(s,12,c)
                                      , d = t.utf8ArrayToString(h)
                                      , m = JSON.parse(d);
                                    u = m.textureAtlas
                                } else
                                    u = s.textureAtlas;
                                if (u && u.length > 0)
                                    for (var p = 0, g = u; p < g.length; p++) {
                                        var _ = g[p]
                                          , f = _.imagePath;
                                        if (f in e._textureAtlasTextures) {
                                            var y = e._textureAtlasTextures[f]
                                              , v = y.loader
                                              , A = document.createElement("img");
                                            A.src = v.result,
                                            A.onload = function() {
                                                a--,
                                                0 === a && n()
                                            }
                                            ,
                                            a++,
                                            l.textureAtlases.push(A)
                                        } else
                                            l.textureAtlasDatas.push(null),
                                            l.textureAtlases.push(null)
                                    }
                                else
                                    for (var E = i.split(".").shift(), b = e._getTextureAtlases(E), x = 0, S = b; x < S.length; x++) {
                                        var C = S[x]
                                          , T = C.loader
                                          , f = C.baseName.split(".").shift() + ".png"
                                          , L = JSON.parse(T.result);
                                        if (f in e._textureAtlasTextures) {
                                            var y = e._textureAtlasTextures[f]
                                              , v = y.loader
                                              , A = document.createElement("img");
                                            A.src = v.result,
                                            A.onload = function() {
                                                a--,
                                                0 === a && n()
                                            }
                                            ,
                                            a++,
                                            l.textureAtlasDatas.push(L),
                                            l.textureAtlases.push(A)
                                        } else
                                            l.textureAtlasDatas.push(L),
                                            l.textureAtlases.push(null)
                                    }
                                e.result.push(l)
                            }
                            0 === a && n()
                        }
                        ), r = 0, o = e.data.length; o > r; ++r) {
                            var s = e.data[r]
                              , l = new FileReader;
                            switch (s.loader = l,
                            l.file = s,
                            l.addEventListener("load", a),
                            l.addEventListener("error", a),
                            e._loadCount++,
                            s.type) {
                            case "image/png":
                                l.readAsDataURL(s),
                                console.log("Load:", s.type, s.modifyName || s.name);
                                break;
                            default:
                                l.readAsText(s.slice(0, Math.min(200, s.size)))
                            }
                        }
                    }
                    )]
                })
            })
        }
        ,
        n.prototype._modifyName = function(t) {
            return t.indexOf("_ske.") > 0 ? t = t.replace("_ske.", ".") : t.indexOf("_tex.") > 0 ? t = t.replace("_tex.", "_texture.") : t.indexOf("_tex_") > 0 && (t = t.replace("_tex_", "_texture_")),
            t
        }
        ,
        n.prototype._getTextureAtlases = function(t, e, n) {
            void 0 === e && (e = null),
            void 0 === n && (n = "texture");
            var a = 0
              , i = null !== e ? e : t
              , r = (i.length > 0 ? i + (n ? "_" + n : n) : n) + ".json"
              , o = new Array;
            if (r in this._textureAtlasConfigs)
                return o.push(this._textureAtlasConfigs[r]),
                o;
            for (; ; ) {
                if (i.length > 0 && n.length > 0)
                    r = i + "_" + n + "_" + a++ + ".json";
                else if (n.length > 0)
                    r = n + "_" + a++ + ".json";
                else {
                    if (!(i.length > 0)) {
                        console.assert(!1);
                        break
                    }
                    r = i + "_" + a++ + ".json"
                }
                if (r in this._textureAtlasConfigs)
                    o.push(this._textureAtlasConfigs[r]);
                else if (a > 1)
                    break
            }
            if (o.length > 0 || null !== e)
                return o;
            if (o = this._getTextureAtlases(t, "", n),
            o.length > 0)
                return o;
            if (a = t.lastIndexOf("_"),
            a >= 0) {
                if (e = t.substring(0, a),
                o = this._getTextureAtlases(t, e, n),
                o.length > 0)
                    return o;
                if (o = this._getTextureAtlases(t, e, ""),
                o.length > 0)
                    return o
            }
            return "atlas" !== n && (o = this._getTextureAtlases(t, null, "atlas")),
            o
        }
        ,
        n
    }(t.BaseCommand);
    t.LoadLocalFiles = e,
    __reflect(e.prototype, "player.LoadLocalFiles")
}(player || (player = {}));