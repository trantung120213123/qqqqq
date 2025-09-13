"use strict";
var studio = ( () => {
    var by = Object.create;
    var Qu = Object.defineProperty;
    var Sy = Object.getOwnPropertyDescriptor;
    var Cy = Object.getOwnPropertyNames;
    var Iy = Object.getPrototypeOf
      , wy = Object.prototype.hasOwnProperty;
    var ka = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Ty = (e, t) => {
        for (var a in t)
            Qu(e, a, {
                get: t[a],
                enumerable: !0
            })
    }
      , mm = (e, t, a, o) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let l of Cy(t))
                !wy.call(e, l) && l !== a && Qu(e, l, {
                    get: () => t[l],
                    enumerable: !(o = Sy(t, l)) || o.enumerable
                });
        return e
    }
    ;
    var A = (e, t, a) => (a = e != null ? by(Iy(e)) : {},
    mm(t || !e || !e.__esModule ? Qu(a, "default", {
        value: e,
        enumerable: !0
    }) : a, e))
      , Ey = e => mm(Qu({}, "__esModule", {
        value: !0
    }), e);
    var wm = ka(H => {
        "use strict";
        var Ri = Symbol.for("react.transitional.element")
          , Ry = Symbol.for("react.portal")
          , Oy = Symbol.for("react.fragment")
          , Ay = Symbol.for("react.strict_mode")
          , My = Symbol.for("react.profiler")
          , Dy = Symbol.for("react.consumer")
          , ky = Symbol.for("react.context")
          , By = Symbol.for("react.forward_ref")
          , Py = Symbol.for("react.suspense")
          , _y = Symbol.for("react.memo")
          , Lm = Symbol.for("react.lazy")
          , pm = Symbol.iterator;
        function Fy(e) {
            return e === null || typeof e != "object" ? null : (e = pm && e[pm] || e["@@iterator"],
            typeof e == "function" ? e : null)
        }
        var ym = {
            isMounted: function() {
                return !1
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }
          , bm = Object.assign
          , Sm = {};
        function el(e, t, a) {
            this.props = e,
            this.context = t,
            this.refs = Sm,
            this.updater = a || ym
        }
        el.prototype.isReactComponent = {};
        el.prototype.setState = function(e, t) {
            if (typeof e != "object" && typeof e != "function" && e != null)
                throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, e, t, "setState")
        }
        ;
        el.prototype.forceUpdate = function(e) {
            this.updater.enqueueForceUpdate(this, e, "forceUpdate")
        }
        ;
        function Cm() {}
        Cm.prototype = el.prototype;
        function Oi(e, t, a) {
            this.props = e,
            this.context = t,
            this.refs = Sm,
            this.updater = a || ym
        }
        var Ai = Oi.prototype = new Cm;
        Ai.constructor = Oi;
        bm(Ai, el.prototype);
        Ai.isPureReactComponent = !0;
        var gm = Array.isArray
          , de = {
            H: null,
            A: null,
            T: null,
            S: null
        }
          , Im = Object.prototype.hasOwnProperty;
        function Mi(e, t, a, o, l, n) {
            return a = n.ref,
            {
                $$typeof: Ri,
                type: e,
                key: t,
                ref: a !== void 0 ? a : null,
                props: n
            }
        }
        function Uy(e, t) {
            return Mi(e.type, t, void 0, void 0, void 0, e.props)
        }
        function Di(e) {
            return typeof e == "object" && e !== null && e.$$typeof === Ri
        }
        function Hy(e) {
            var t = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + e.replace(/[=:]/g, function(a) {
                return t[a]
            })
        }
        var hm = /\/+/g;
        function Ei(e, t) {
            return typeof e == "object" && e !== null && e.key != null ? Hy("" + e.key) : t.toString(36)
        }
        function xm() {}
        function qy(e) {
            switch (e.status) {
            case "fulfilled":
                return e.value;
            case "rejected":
                throw e.reason;
            default:
                switch (typeof e.status == "string" ? e.then(xm, xm) : (e.status = "pending",
                e.then(function(t) {
                    e.status === "pending" && (e.status = "fulfilled",
                    e.value = t)
                }, function(t) {
                    e.status === "pending" && (e.status = "rejected",
                    e.reason = t)
                })),
                e.status) {
                case "fulfilled":
                    return e.value;
                case "rejected":
                    throw e.reason
                }
            }
            throw e
        }
        function Jo(e, t, a, o, l) {
            var n = typeof e;
            (n === "undefined" || n === "boolean") && (e = null);
            var u = !1;
            if (e === null)
                u = !0;
            else
                switch (n) {
                case "bigint":
                case "string":
                case "number":
                    u = !0;
                    break;
                case "object":
                    switch (e.$$typeof) {
                    case Ri:
                    case Ry:
                        u = !0;
                        break;
                    case Lm:
                        return u = e._init,
                        Jo(u(e._payload), t, a, o, l)
                    }
                }
            if (u)
                return l = l(e),
                u = o === "" ? "." + Ei(e, 0) : o,
                gm(l) ? (a = "",
                u != null && (a = u.replace(hm, "$&/") + "/"),
                Jo(l, t, a, "", function(i) {
                    return i
                })) : l != null && (Di(l) && (l = Uy(l, a + (l.key == null || e && e.key === l.key ? "" : ("" + l.key).replace(hm, "$&/") + "/") + u)),
                t.push(l)),
                1;
            u = 0;
            var r = o === "" ? "." : o + ":";
            if (gm(e))
                for (var s = 0; s < e.length; s++)
                    o = e[s],
                    n = r + Ei(o, s),
                    u += Jo(o, t, a, n, l);
            else if (s = Fy(e),
            typeof s == "function")
                for (e = s.call(e),
                s = 0; !(o = e.next()).done; )
                    o = o.value,
                    n = r + Ei(o, s++),
                    u += Jo(o, t, a, n, l);
            else if (n === "object") {
                if (typeof e.then == "function")
                    return Jo(qy(e), t, a, o, l);
                throw t = String(e),
                Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.")
            }
            return u
        }
        function Zu(e, t, a) {
            if (e == null)
                return e;
            var o = []
              , l = 0;
            return Jo(e, o, "", "", function(n) {
                return t.call(a, n, l++)
            }),
            o
        }
        function zy(e) {
            if (e._status === -1) {
                var t = e._result;
                t = t(),
                t.then(function(a) {
                    (e._status === 0 || e._status === -1) && (e._status = 1,
                    e._result = a)
                }, function(a) {
                    (e._status === 0 || e._status === -1) && (e._status = 2,
                    e._result = a)
                }),
                e._status === -1 && (e._status = 0,
                e._result = t)
            }
            if (e._status === 1)
                return e._result.default;
            throw e._result
        }
        var vm = typeof reportError == "function" ? reportError : function(e) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var t = new window.ErrorEvent("error",{
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(t))
                    return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", e);
                return
            }
            console.error(e)
        }
        ;
        function Ny() {}
        H.Children = {
            map: Zu,
            forEach: function(e, t, a) {
                Zu(e, function() {
                    t.apply(this, arguments)
                }, a)
            },
            count: function(e) {
                var t = 0;
                return Zu(e, function() {
                    t++
                }),
                t
            },
            toArray: function(e) {
                return Zu(e, function(t) {
                    return t
                }) || []
            },
            only: function(e) {
                if (!Di(e))
                    throw Error("React.Children.only expected to receive a single React element child.");
                return e
            }
        };
        H.Component = el;
        H.Fragment = Oy;
        H.Profiler = My;
        H.PureComponent = Oi;
        H.StrictMode = Ay;
        H.Suspense = Py;
        H.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = de;
        H.act = function() {
            throw Error("act(...) is not supported in production builds of React.")
        }
        ;
        H.cache = function(e) {
            return function() {
                return e.apply(null, arguments)
            }
        }
        ;
        H.cloneElement = function(e, t, a) {
            if (e == null)
                throw Error("The argument must be a React element, but you passed " + e + ".");
            var o = bm({}, e.props)
              , l = e.key
              , n = void 0;
            if (t != null)
                for (u in t.ref !== void 0 && (n = void 0),
                t.key !== void 0 && (l = "" + t.key),
                t)
                    !Im.call(t, u) || u === "key" || u === "__self" || u === "__source" || u === "ref" && t.ref === void 0 || (o[u] = t[u]);
            var u = arguments.length - 2;
            if (u === 1)
                o.children = a;
            else if (1 < u) {
                for (var r = Array(u), s = 0; s < u; s++)
                    r[s] = arguments[s + 2];
                o.children = r
            }
            return Mi(e.type, l, void 0, void 0, n, o)
        }
        ;
        H.createContext = function(e) {
            return e = {
                $$typeof: ky,
                _currentValue: e,
                _currentValue2: e,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            },
            e.Provider = e,
            e.Consumer = {
                $$typeof: Dy,
                _context: e
            },
            e
        }
        ;
        H.createElement = function(e, t, a) {
            var o, l = {}, n = null;
            if (t != null)
                for (o in t.key !== void 0 && (n = "" + t.key),
                t)
                    Im.call(t, o) && o !== "key" && o !== "__self" && o !== "__source" && (l[o] = t[o]);
            var u = arguments.length - 2;
            if (u === 1)
                l.children = a;
            else if (1 < u) {
                for (var r = Array(u), s = 0; s < u; s++)
                    r[s] = arguments[s + 2];
                l.children = r
            }
            if (e && e.defaultProps)
                for (o in u = e.defaultProps,
                u)
                    l[o] === void 0 && (l[o] = u[o]);
            return Mi(e, n, void 0, void 0, null, l)
        }
        ;
        H.createRef = function() {
            return {
                current: null
            }
        }
        ;
        H.forwardRef = function(e) {
            return {
                $$typeof: By,
                render: e
            }
        }
        ;
        H.isValidElement = Di;
        H.lazy = function(e) {
            return {
                $$typeof: Lm,
                _payload: {
                    _status: -1,
                    _result: e
                },
                _init: zy
            }
        }
        ;
        H.memo = function(e, t) {
            return {
                $$typeof: _y,
                type: e,
                compare: t === void 0 ? null : t
            }
        }
        ;
        H.startTransition = function(e) {
            var t = de.T
              , a = {};
            de.T = a;
            try {
                var o = e()
                  , l = de.S;
                l !== null && l(a, o),
                typeof o == "object" && o !== null && typeof o.then == "function" && o.then(Ny, vm)
            } catch (n) {
                vm(n)
            } finally {
                de.T = t
            }
        }
        ;
        H.unstable_useCacheRefresh = function() {
            return de.H.useCacheRefresh()
        }
        ;
        H.use = function(e) {
            return de.H.use(e)
        }
        ;
        H.useActionState = function(e, t, a) {
            return de.H.useActionState(e, t, a)
        }
        ;
        H.useCallback = function(e, t) {
            return de.H.useCallback(e, t)
        }
        ;
        H.useContext = function(e) {
            return de.H.useContext(e)
        }
        ;
        H.useDebugValue = function() {}
        ;
        H.useDeferredValue = function(e, t) {
            return de.H.useDeferredValue(e, t)
        }
        ;
        H.useEffect = function(e, t) {
            return de.H.useEffect(e, t)
        }
        ;
        H.useId = function() {
            return de.H.useId()
        }
        ;
        H.useImperativeHandle = function(e, t, a) {
            return de.H.useImperativeHandle(e, t, a)
        }
        ;
        H.useInsertionEffect = function(e, t) {
            return de.H.useInsertionEffect(e, t)
        }
        ;
        H.useLayoutEffect = function(e, t) {
            return de.H.useLayoutEffect(e, t)
        }
        ;
        H.useMemo = function(e, t) {
            return de.H.useMemo(e, t)
        }
        ;
        H.useOptimistic = function(e, t) {
            return de.H.useOptimistic(e, t)
        }
        ;
        H.useReducer = function(e, t, a) {
            return de.H.useReducer(e, t, a)
        }
        ;
        H.useRef = function(e) {
            return de.H.useRef(e)
        }
        ;
        H.useState = function(e) {
            return de.H.useState(e)
        }
        ;
        H.useSyncExternalStore = function(e, t, a) {
            return de.H.useSyncExternalStore(e, t, a)
        }
        ;
        H.useTransition = function() {
            return de.H.useTransition()
        }
        ;
        H.version = "19.0.0"
    }
    );
    var M = ka( (NT, Tm) => {
        "use strict";
        Tm.exports = wm()
    }
    );
    var _m = ka(ee => {
        "use strict";
        function _i(e, t) {
            var a = e.length;
            e.push(t);
            e: for (; 0 < a; ) {
                var o = a - 1 >>> 1
                  , l = e[o];
                if (0 < Ju(l, t))
                    e[o] = t,
                    e[a] = l,
                    a = o;
                else
                    break e
            }
        }
        function Pt(e) {
            return e.length === 0 ? null : e[0]
        }
        function tr(e) {
            if (e.length === 0)
                return null;
            var t = e[0]
              , a = e.pop();
            if (a !== t) {
                e[0] = a;
                e: for (var o = 0, l = e.length, n = l >>> 1; o < n; ) {
                    var u = 2 * (o + 1) - 1
                      , r = e[u]
                      , s = u + 1
                      , i = e[s];
                    if (0 > Ju(r, a))
                        s < l && 0 > Ju(i, r) ? (e[o] = i,
                        e[s] = a,
                        o = s) : (e[o] = r,
                        e[u] = a,
                        o = u);
                    else if (s < l && 0 > Ju(i, a))
                        e[o] = i,
                        e[s] = a,
                        o = s;
                    else
                        break e
                }
            }
            return t
        }
        function Ju(e, t) {
            var a = e.sortIndex - t.sortIndex;
            return a !== 0 ? a : e.id - t.id
        }
        ee.unstable_now = void 0;
        typeof performance == "object" && typeof performance.now == "function" ? (Em = performance,
        ee.unstable_now = function() {
            return Em.now()
        }
        ) : (ki = Date,
        Rm = ki.now(),
        ee.unstable_now = function() {
            return ki.now() - Rm
        }
        );
        var Em, ki, Rm, Gt = [], Ba = [], $y = 1, vt = null, Ge = 3, ar = !1, yo = !1, rn = !1, Mm = typeof setTimeout == "function" ? setTimeout : null, Dm = typeof clearTimeout == "function" ? clearTimeout : null, Om = typeof setImmediate < "u" ? setImmediate : null;
        function er(e) {
            for (var t = Pt(Ba); t !== null; ) {
                if (t.callback === null)
                    tr(Ba);
                else if (t.startTime <= e)
                    tr(Ba),
                    t.sortIndex = t.expirationTime,
                    _i(Gt, t);
                else
                    break;
                t = Pt(Ba)
            }
        }
        function Fi(e) {
            if (rn = !1,
            er(e),
            !yo)
                if (Pt(Gt) !== null)
                    yo = !0,
                    Ui();
                else {
                    var t = Pt(Ba);
                    t !== null && Hi(Fi, t.startTime - e)
                }
        }
        var or = !1
          , sn = -1
          , km = 5
          , Bm = -1;
        function Pm() {
            return !(ee.unstable_now() - Bm < km)
        }
        function Bi() {
            if (or) {
                var e = ee.unstable_now();
                Bm = e;
                var t = !0;
                try {
                    e: {
                        yo = !1,
                        rn && (rn = !1,
                        Dm(sn),
                        sn = -1),
                        ar = !0;
                        var a = Ge;
                        try {
                            t: {
                                for (er(e),
                                vt = Pt(Gt); vt !== null && !(vt.expirationTime > e && Pm()); ) {
                                    var o = vt.callback;
                                    if (typeof o == "function") {
                                        vt.callback = null,
                                        Ge = vt.priorityLevel;
                                        var l = o(vt.expirationTime <= e);
                                        if (e = ee.unstable_now(),
                                        typeof l == "function") {
                                            vt.callback = l,
                                            er(e),
                                            t = !0;
                                            break t
                                        }
                                        vt === Pt(Gt) && tr(Gt),
                                        er(e)
                                    } else
                                        tr(Gt);
                                    vt = Pt(Gt)
                                }
                                if (vt !== null)
                                    t = !0;
                                else {
                                    var n = Pt(Ba);
                                    n !== null && Hi(Fi, n.startTime - e),
                                    t = !1
                                }
                            }
                            break e
                        } finally {
                            vt = null,
                            Ge = a,
                            ar = !1
                        }
                        t = void 0
                    }
                } finally {
                    t ? un() : or = !1
                }
            }
        }
        var un;
        typeof Om == "function" ? un = function() {
            Om(Bi)
        }
        : typeof MessageChannel < "u" ? (Pi = new MessageChannel,
        Am = Pi.port2,
        Pi.port1.onmessage = Bi,
        un = function() {
            Am.postMessage(null)
        }
        ) : un = function() {
            Mm(Bi, 0)
        }
        ;
        var Pi, Am;
        function Ui() {
            or || (or = !0,
            un())
        }
        function Hi(e, t) {
            sn = Mm(function() {
                e(ee.unstable_now())
            }, t)
        }
        ee.unstable_IdlePriority = 5;
        ee.unstable_ImmediatePriority = 1;
        ee.unstable_LowPriority = 4;
        ee.unstable_NormalPriority = 3;
        ee.unstable_Profiling = null;
        ee.unstable_UserBlockingPriority = 2;
        ee.unstable_cancelCallback = function(e) {
            e.callback = null
        }
        ;
        ee.unstable_continueExecution = function() {
            yo || ar || (yo = !0,
            Ui())
        }
        ;
        ee.unstable_forceFrameRate = function(e) {
            0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : km = 0 < e ? Math.floor(1e3 / e) : 5
        }
        ;
        ee.unstable_getCurrentPriorityLevel = function() {
            return Ge
        }
        ;
        ee.unstable_getFirstCallbackNode = function() {
            return Pt(Gt)
        }
        ;
        ee.unstable_next = function(e) {
            switch (Ge) {
            case 1:
            case 2:
            case 3:
                var t = 3;
                break;
            default:
                t = Ge
            }
            var a = Ge;
            Ge = t;
            try {
                return e()
            } finally {
                Ge = a
            }
        }
        ;
        ee.unstable_pauseExecution = function() {}
        ;
        ee.unstable_requestPaint = function() {}
        ;
        ee.unstable_runWithPriority = function(e, t) {
            switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                e = 3
            }
            var a = Ge;
            Ge = e;
            try {
                return t()
            } finally {
                Ge = a
            }
        }
        ;
        ee.unstable_scheduleCallback = function(e, t, a) {
            var o = ee.unstable_now();
            switch (typeof a == "object" && a !== null ? (a = a.delay,
            a = typeof a == "number" && 0 < a ? o + a : o) : a = o,
            e) {
            case 1:
                var l = -1;
                break;
            case 2:
                l = 250;
                break;
            case 5:
                l = 1073741823;
                break;
            case 4:
                l = 1e4;
                break;
            default:
                l = 5e3
            }
            return l = a + l,
            e = {
                id: $y++,
                callback: t,
                priorityLevel: e,
                startTime: a,
                expirationTime: l,
                sortIndex: -1
            },
            a > o ? (e.sortIndex = a,
            _i(Ba, e),
            Pt(Gt) === null && e === Pt(Ba) && (rn ? (Dm(sn),
            sn = -1) : rn = !0,
            Hi(Fi, a - o))) : (e.sortIndex = l,
            _i(Gt, e),
            yo || ar || (yo = !0,
            Ui())),
            e
        }
        ;
        ee.unstable_shouldYield = Pm;
        ee.unstable_wrapCallback = function(e) {
            var t = Ge;
            return function() {
                var a = Ge;
                Ge = t;
                try {
                    return e.apply(this, arguments)
                } finally {
                    Ge = a
                }
            }
        }
    }
    );
    var Um = ka( (VT, Fm) => {
        "use strict";
        Fm.exports = _m()
    }
    );
    var qm = ka(Ze => {
        "use strict";
        var Vy = M();
        function Hm(e) {
            var t = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for (var a = 2; a < arguments.length; a++)
                    t += "&args[]=" + encodeURIComponent(arguments[a])
            }
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        function Pa() {}
        var Qe = {
            d: {
                f: Pa,
                r: function() {
                    throw Error(Hm(522))
                },
                D: Pa,
                C: Pa,
                L: Pa,
                m: Pa,
                X: Pa,
                S: Pa,
                M: Pa
            },
            p: 0,
            findDOMNode: null
        }
          , Gy = Symbol.for("react.portal");
        function Xy(e, t, a) {
            var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: Gy,
                key: o == null ? null : "" + o,
                children: e,
                containerInfo: t,
                implementation: a
            }
        }
        var fn = Vy.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function lr(e, t) {
            if (e === "font")
                return "";
            if (typeof t == "string")
                return t === "use-credentials" ? t : ""
        }
        Ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Qe;
        Ze.createPortal = function(e, t) {
            var a = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
                throw Error(Hm(299));
            return Xy(e, t, null, a)
        }
        ;
        Ze.flushSync = function(e) {
            var t = fn.T
              , a = Qe.p;
            try {
                if (fn.T = null,
                Qe.p = 2,
                e)
                    return e()
            } finally {
                fn.T = t,
                Qe.p = a,
                Qe.d.f()
            }
        }
        ;
        Ze.preconnect = function(e, t) {
            typeof e == "string" && (t ? (t = t.crossOrigin,
            t = typeof t == "string" ? t === "use-credentials" ? t : "" : void 0) : t = null,
            Qe.d.C(e, t))
        }
        ;
        Ze.prefetchDNS = function(e) {
            typeof e == "string" && Qe.d.D(e)
        }
        ;
        Ze.preinit = function(e, t) {
            if (typeof e == "string" && t && typeof t.as == "string") {
                var a = t.as
                  , o = lr(a, t.crossOrigin)
                  , l = typeof t.integrity == "string" ? t.integrity : void 0
                  , n = typeof t.fetchPriority == "string" ? t.fetchPriority : void 0;
                a === "style" ? Qe.d.S(e, typeof t.precedence == "string" ? t.precedence : void 0, {
                    crossOrigin: o,
                    integrity: l,
                    fetchPriority: n
                }) : a === "script" && Qe.d.X(e, {
                    crossOrigin: o,
                    integrity: l,
                    fetchPriority: n,
                    nonce: typeof t.nonce == "string" ? t.nonce : void 0
                })
            }
        }
        ;
        Ze.preinitModule = function(e, t) {
            if (typeof e == "string")
                if (typeof t == "object" && t !== null) {
                    if (t.as == null || t.as === "script") {
                        var a = lr(t.as, t.crossOrigin);
                        Qe.d.M(e, {
                            crossOrigin: a,
                            integrity: typeof t.integrity == "string" ? t.integrity : void 0,
                            nonce: typeof t.nonce == "string" ? t.nonce : void 0
                        })
                    }
                } else
                    t == null && Qe.d.M(e)
        }
        ;
        Ze.preload = function(e, t) {
            if (typeof e == "string" && typeof t == "object" && t !== null && typeof t.as == "string") {
                var a = t.as
                  , o = lr(a, t.crossOrigin);
                Qe.d.L(e, a, {
                    crossOrigin: o,
                    integrity: typeof t.integrity == "string" ? t.integrity : void 0,
                    nonce: typeof t.nonce == "string" ? t.nonce : void 0,
                    type: typeof t.type == "string" ? t.type : void 0,
                    fetchPriority: typeof t.fetchPriority == "string" ? t.fetchPriority : void 0,
                    referrerPolicy: typeof t.referrerPolicy == "string" ? t.referrerPolicy : void 0,
                    imageSrcSet: typeof t.imageSrcSet == "string" ? t.imageSrcSet : void 0,
                    imageSizes: typeof t.imageSizes == "string" ? t.imageSizes : void 0,
                    media: typeof t.media == "string" ? t.media : void 0
                })
            }
        }
        ;
        Ze.preloadModule = function(e, t) {
            if (typeof e == "string")
                if (t) {
                    var a = lr(t.as, t.crossOrigin);
                    Qe.d.m(e, {
                        as: typeof t.as == "string" && t.as !== "script" ? t.as : void 0,
                        crossOrigin: a,
                        integrity: typeof t.integrity == "string" ? t.integrity : void 0
                    })
                } else
                    Qe.d.m(e)
        }
        ;
        Ze.requestFormReset = function(e) {
            Qe.d.r(e)
        }
        ;
        Ze.unstable_batchedUpdates = function(e, t) {
            return e(t)
        }
        ;
        Ze.useFormState = function(e, t, a) {
            return fn.H.useFormState(e, t, a)
        }
        ;
        Ze.useFormStatus = function() {
            return fn.H.useHostTransitionStatus()
        }
        ;
        Ze.version = "19.0.0"
    }
    );
    var bo = ka( (XT, Nm) => {
        "use strict";
        function zm() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zm)
                } catch (e) {
                    console.error(e)
                }
        }
        zm(),
        Nm.exports = qm()
    }
    );
    var Fx = ka(Cs => {
        "use strict";
        var Re = Um()
          , rg = M()
          , jy = bo();
        function E(e) {
            var t = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for (var a = 2; a < arguments.length; a++)
                    t += "&args[]=" + encodeURIComponent(arguments[a])
            }
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        }
        function sg(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        }
        var Yy = Symbol.for("react.element")
          , nr = Symbol.for("react.transitional.element")
          , Ln = Symbol.for("react.portal")
          , rl = Symbol.for("react.fragment")
          , ig = Symbol.for("react.strict_mode")
          , vf = Symbol.for("react.profiler")
          , Ky = Symbol.for("react.provider")
          , fg = Symbol.for("react.consumer")
          , da = Symbol.for("react.context")
          , cc = Symbol.for("react.forward_ref")
          , Lf = Symbol.for("react.suspense")
          , yf = Symbol.for("react.suspense_list")
          , dc = Symbol.for("react.memo")
          , Ua = Symbol.for("react.lazy");
        Symbol.for("react.scope");
        Symbol.for("react.debug_trace_mode");
        var cg = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden");
        Symbol.for("react.tracing_marker");
        var Wy = Symbol.for("react.memo_cache_sentinel")
          , $m = Symbol.iterator;
        function cn(e) {
            return e === null || typeof e != "object" ? null : (e = $m && e[$m] || e["@@iterator"],
            typeof e == "function" ? e : null)
        }
        var Qy = Symbol.for("react.client.reference");
        function bf(e) {
            if (e == null)
                return null;
            if (typeof e == "function")
                return e.$$typeof === Qy ? null : e.displayName || e.name || null;
            if (typeof e == "string")
                return e;
            switch (e) {
            case rl:
                return "Fragment";
            case Ln:
                return "Portal";
            case vf:
                return "Profiler";
            case ig:
                return "StrictMode";
            case Lf:
                return "Suspense";
            case yf:
                return "SuspenseList"
            }
            if (typeof e == "object")
                switch (e.$$typeof) {
                case da:
                    return (e.displayName || "Context") + ".Provider";
                case fg:
                    return (e._context.displayName || "Context") + ".Consumer";
                case cc:
                    var t = e.render;
                    return e = e.displayName,
                    e || (e = t.displayName || t.name || "",
                    e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
                    e;
                case dc:
                    return t = e.displayName || null,
                    t !== null ? t : bf(e.type) || "Memo";
                case Ua:
                    t = e._payload,
                    e = e._init;
                    try {
                        return bf(e(t))
                    } catch {}
                }
            return null
        }
        var B = rg.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ue = Object.assign, qi, Vm;
        function yn(e) {
            if (qi === void 0)
                try {
                    throw Error()
                } catch (a) {
                    var t = a.stack.trim().match(/\n( *(at )?)/);
                    qi = t && t[1] || "",
                    Vm = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : ""
                }
            return `
` + qi + e + Vm
        }
        var zi = !1;
        function Ni(e, t) {
            if (!e || zi)
                return "";
            zi = !0;
            var a = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var o = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (t) {
                                var g = function() {
                                    throw Error()
                                };
                                if (Object.defineProperty(g.prototype, "props", {
                                    set: function() {
                                        throw Error()
                                    }
                                }),
                                typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(g, [])
                                    } catch (c) {
                                        var m = c
                                    }
                                    Reflect.construct(e, [], g)
                                } else {
                                    try {
                                        g.call()
                                    } catch (c) {
                                        m = c
                                    }
                                    e.call(g.prototype)
                                }
                            } else {
                                try {
                                    throw Error()
                                } catch (c) {
                                    m = c
                                }
                                (g = e()) && typeof g.catch == "function" && g.catch(function() {})
                            }
                        } catch (c) {
                            if (c && m && typeof c.stack == "string")
                                return [c.stack, m.stack]
                        }
                        return [null, null]
                    }
                };
                o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var l = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
                l && l.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var n = o.DetermineComponentFrameRoot()
                  , u = n[0]
                  , r = n[1];
                if (u && r) {
                    var s = u.split(`
`)
                      , i = r.split(`
`);
                    for (l = o = 0; o < s.length && !s[o].includes("DetermineComponentFrameRoot"); )
                        o++;
                    for (; l < i.length && !i[l].includes("DetermineComponentFrameRoot"); )
                        l++;
                    if (o === s.length || l === i.length)
                        for (o = s.length - 1,
                        l = i.length - 1; 1 <= o && 0 <= l && s[o] !== i[l]; )
                            l--;
                    for (; 1 <= o && 0 <= l; o--,
                    l--)
                        if (s[o] !== i[l]) {
                            if (o !== 1 || l !== 1)
                                do
                                    if (o--,
                                    l--,
                                    0 > l || s[o] !== i[l]) {
                                        var f = `
` + s[o].replace(" at new ", " at ");
                                        return e.displayName && f.includes("<anonymous>") && (f = f.replace("<anonymous>", e.displayName)),
                                        f
                                    }
                                while (1 <= o && 0 <= l);
                            break
                        }
                }
            } finally {
                zi = !1,
                Error.prepareStackTrace = a
            }
            return (a = e ? e.displayName || e.name : "") ? yn(a) : ""
        }
        function Zy(e) {
            switch (e.tag) {
            case 26:
            case 27:
            case 5:
                return yn(e.type);
            case 16:
                return yn("Lazy");
            case 13:
                return yn("Suspense");
            case 19:
                return yn("SuspenseList");
            case 0:
            case 15:
                return e = Ni(e.type, !1),
                e;
            case 11:
                return e = Ni(e.type.render, !1),
                e;
            case 1:
                return e = Ni(e.type, !0),
                e;
            default:
                return ""
            }
        }
        function Gm(e) {
            try {
                var t = "";
                do
                    t += Zy(e),
                    e = e.return;
                while (e);
                return t
            } catch (a) {
                return `
Error generating stack: ` + a.message + `
` + a.stack
            }
        }
        function Pl(e) {
            var t = e
              , a = e;
            if (e.alternate)
                for (; t.return; )
                    t = t.return;
            else {
                e = t;
                do
                    t = e,
                    (t.flags & 4098) !== 0 && (a = t.return),
                    e = t.return;
                while (e)
            }
            return t.tag === 3 ? a : null
        }
        function dg(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate,
                e !== null && (t = e.memoizedState)),
                t !== null)
                    return t.dehydrated
            }
            return null
        }
        function Xm(e) {
            if (Pl(e) !== e)
                throw Error(E(188))
        }
        function Jy(e) {
            var t = e.alternate;
            if (!t) {
                if (t = Pl(e),
                t === null)
                    throw Error(E(188));
                return t !== e ? null : e
            }
            for (var a = e, o = t; ; ) {
                var l = a.return;
                if (l === null)
                    break;
                var n = l.alternate;
                if (n === null) {
                    if (o = l.return,
                    o !== null) {
                        a = o;
                        continue
                    }
                    break
                }
                if (l.child === n.child) {
                    for (n = l.child; n; ) {
                        if (n === a)
                            return Xm(l),
                            e;
                        if (n === o)
                            return Xm(l),
                            t;
                        n = n.sibling
                    }
                    throw Error(E(188))
                }
                if (a.return !== o.return)
                    a = l,
                    o = n;
                else {
                    for (var u = !1, r = l.child; r; ) {
                        if (r === a) {
                            u = !0,
                            a = l,
                            o = n;
                            break
                        }
                        if (r === o) {
                            u = !0,
                            o = l,
                            a = n;
                            break
                        }
                        r = r.sibling
                    }
                    if (!u) {
                        for (r = n.child; r; ) {
                            if (r === a) {
                                u = !0,
                                a = n,
                                o = l;
                                break
                            }
                            if (r === o) {
                                u = !0,
                                o = n,
                                a = l;
                                break
                            }
                            r = r.sibling
                        }
                        if (!u)
                            throw Error(E(189))
                    }
                }
                if (a.alternate !== o)
                    throw Error(E(190))
            }
            if (a.tag !== 3)
                throw Error(E(188));
            return a.stateNode.current === a ? e : t
        }
        function mg(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6)
                return e;
            for (e = e.child; e !== null; ) {
                if (t = mg(e),
                t !== null)
                    return t;
                e = e.sibling
            }
            return null
        }
        var bn = Array.isArray
          , ne = jy.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
          , Ro = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }
          , Sf = []
          , sl = -1;
        function Zt(e) {
            return {
                current: e
            }
        }
        function _e(e) {
            0 > sl || (e.current = Sf[sl],
            Sf[sl] = null,
            sl--)
        }
        function fe(e, t) {
            sl++,
            Sf[sl] = e.current,
            e.current = t
        }
        var Yt = Zt(null)
          , Hn = Zt(null)
          , Xa = Zt(null)
          , Pr = Zt(null);
        function _r(e, t) {
            switch (fe(Xa, t),
            fe(Hn, e),
            fe(Yt, null),
            e = t.nodeType,
            e) {
            case 9:
            case 11:
                t = (t = t.documentElement) && (t = t.namespaceURI) ? Yp(t) : 0;
                break;
            default:
                if (e = e === 8 ? t.parentNode : t,
                t = e.tagName,
                e = e.namespaceURI)
                    e = Yp(e),
                    t = wx(e, t);
                else
                    switch (t) {
                    case "svg":
                        t = 1;
                        break;
                    case "math":
                        t = 2;
                        break;
                    default:
                        t = 0
                    }
            }
            _e(Yt),
            fe(Yt, t)
        }
        function Tl() {
            _e(Yt),
            _e(Hn),
            _e(Xa)
        }
        function Cf(e) {
            e.memoizedState !== null && fe(Pr, e);
            var t = Yt.current
              , a = wx(t, e.type);
            t !== a && (fe(Hn, e),
            fe(Yt, a))
        }
        function Fr(e) {
            Hn.current === e && (_e(Yt),
            _e(Hn)),
            Pr.current === e && (_e(Pr),
            Wn._currentValue = Ro)
        }
        var If = Object.prototype.hasOwnProperty
          , mc = Re.unstable_scheduleCallback
          , $i = Re.unstable_cancelCallback
          , eb = Re.unstable_shouldYield
          , tb = Re.unstable_requestPaint
          , Kt = Re.unstable_now
          , ab = Re.unstable_getCurrentPriorityLevel
          , pg = Re.unstable_ImmediatePriority
          , gg = Re.unstable_UserBlockingPriority
          , Ur = Re.unstable_NormalPriority
          , ob = Re.unstable_LowPriority
          , hg = Re.unstable_IdlePriority
          , lb = Re.log
          , nb = Re.unstable_setDisableYieldValue
          , eu = null
          , ct = null;
        function ub(e) {
            if (ct && typeof ct.onCommitFiberRoot == "function")
                try {
                    ct.onCommitFiberRoot(eu, e, void 0, (e.current.flags & 128) === 128)
                } catch {}
        }
        function Va(e) {
            if (typeof lb == "function" && nb(e),
            ct && typeof ct.setStrictMode == "function")
                try {
                    ct.setStrictMode(eu, e)
                } catch {}
        }
        var dt = Math.clz32 ? Math.clz32 : ib
          , rb = Math.log
          , sb = Math.LN2;
        function ib(e) {
            return e >>>= 0,
            e === 0 ? 32 : 31 - (rb(e) / sb | 0) | 0
        }
        var ur = 128
          , rr = 4194304;
        function Co(e) {
            var t = e & 42;
            if (t !== 0)
                return t;
            switch (e & -e) {
            case 1:
                return 1;
            case 2:
                return 2;
            case 4:
                return 4;
            case 8:
                return 8;
            case 16:
                return 16;
            case 32:
                return 32;
            case 64:
                return 64;
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return e & 4194176;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return e & 62914560;
            case 67108864:
                return 67108864;
            case 134217728:
                return 134217728;
            case 268435456:
                return 268435456;
            case 536870912:
                return 536870912;
            case 1073741824:
                return 0;
            default:
                return e
            }
        }
        function is(e, t) {
            var a = e.pendingLanes;
            if (a === 0)
                return 0;
            var o = 0
              , l = e.suspendedLanes
              , n = e.pingedLanes
              , u = e.warmLanes;
            e = e.finishedLanes !== 0;
            var r = a & 134217727;
            return r !== 0 ? (a = r & ~l,
            a !== 0 ? o = Co(a) : (n &= r,
            n !== 0 ? o = Co(n) : e || (u = r & ~u,
            u !== 0 && (o = Co(u))))) : (r = a & ~l,
            r !== 0 ? o = Co(r) : n !== 0 ? o = Co(n) : e || (u = a & ~u,
            u !== 0 && (o = Co(u)))),
            o === 0 ? 0 : t !== 0 && t !== o && (t & l) === 0 && (l = o & -o,
            u = t & -t,
            l >= u || l === 32 && (u & 4194176) !== 0) ? t : o
        }
        function tu(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
        }
        function fb(e, t) {
            switch (e) {
            case 1:
            case 2:
            case 4:
            case 8:
                return t + 250;
            case 16:
            case 32:
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
                return t + 5e3;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
                return -1;
            case 67108864:
            case 134217728:
            case 268435456:
            case 536870912:
            case 1073741824:
                return -1;
            default:
                return -1
            }
        }
        function xg() {
            var e = ur;
            return ur <<= 1,
            (ur & 4194176) === 0 && (ur = 128),
            e
        }
        function vg() {
            var e = rr;
            return rr <<= 1,
            (rr & 62914560) === 0 && (rr = 4194304),
            e
        }
        function Vi(e) {
            for (var t = [], a = 0; 31 > a; a++)
                t.push(e);
            return t
        }
        function au(e, t) {
            e.pendingLanes |= t,
            t !== 268435456 && (e.suspendedLanes = 0,
            e.pingedLanes = 0,
            e.warmLanes = 0)
        }
        function cb(e, t, a, o, l, n) {
            var u = e.pendingLanes;
            e.pendingLanes = a,
            e.suspendedLanes = 0,
            e.pingedLanes = 0,
            e.warmLanes = 0,
            e.expiredLanes &= a,
            e.entangledLanes &= a,
            e.errorRecoveryDisabledLanes &= a,
            e.shellSuspendCounter = 0;
            var r = e.entanglements
              , s = e.expirationTimes
              , i = e.hiddenUpdates;
            for (a = u & ~a; 0 < a; ) {
                var f = 31 - dt(a)
                  , g = 1 << f;
                r[f] = 0,
                s[f] = -1;
                var m = i[f];
                if (m !== null)
                    for (i[f] = null,
                    f = 0; f < m.length; f++) {
                        var c = m[f];
                        c !== null && (c.lane &= -536870913)
                    }
                a &= ~g
            }
            o !== 0 && Lg(e, o, 0),
            n !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= n & ~(u & ~t))
        }
        function Lg(e, t, a) {
            e.pendingLanes |= t,
            e.suspendedLanes &= ~t;
            var o = 31 - dt(t);
            e.entangledLanes |= t,
            e.entanglements[o] = e.entanglements[o] | 1073741824 | a & 4194218
        }
        function yg(e, t) {
            var a = e.entangledLanes |= t;
            for (e = e.entanglements; a; ) {
                var o = 31 - dt(a)
                  , l = 1 << o;
                l & t | e[o] & t && (e[o] |= t),
                a &= ~l
            }
        }
        function bg(e) {
            return e &= -e,
            2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
        }
        function Sg() {
            var e = ne.p;
            return e !== 0 ? e : (e = window.event,
            e === void 0 ? 32 : Px(e.type))
        }
        function db(e, t) {
            var a = ne.p;
            try {
                return ne.p = e,
                t()
            } finally {
                ne.p = a
            }
        }
        var lo = Math.random().toString(36).slice(2)
          , Xe = "__reactFiber$" + lo
          , nt = "__reactProps$" + lo
          , _l = "__reactContainer$" + lo
          , wf = "__reactEvents$" + lo
          , mb = "__reactListeners$" + lo
          , pb = "__reactHandles$" + lo
          , jm = "__reactResources$" + lo
          , qn = "__reactMarker$" + lo;
        function pc(e) {
            delete e[Xe],
            delete e[nt],
            delete e[wf],
            delete e[mb],
            delete e[pb]
        }
        function To(e) {
            var t = e[Xe];
            if (t)
                return t;
            for (var a = e.parentNode; a; ) {
                if (t = a[_l] || a[Xe]) {
                    if (a = t.alternate,
                    t.child !== null || a !== null && a.child !== null)
                        for (e = Wp(e); e !== null; ) {
                            if (a = e[Xe])
                                return a;
                            e = Wp(e)
                        }
                    return t
                }
                e = a,
                a = e.parentNode
            }
            return null
        }
        function Fl(e) {
            if (e = e[Xe] || e[_l]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
                    return e
            }
            return null
        }
        function Sn(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6)
                return e.stateNode;
            throw Error(E(33))
        }
        function vl(e) {
            var t = e[jm];
            return t || (t = e[jm] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }),
            t
        }
        function Be(e) {
            e[qn] = !0
        }
        var Cg = new Set
          , Ig = {};
        function Ho(e, t) {
            El(e, t),
            El(e + "Capture", t)
        }
        function El(e, t) {
            for (Ig[e] = t,
            e = 0; e < t.length; e++)
                Cg.add(t[e])
        }
        var va = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
          , gb = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
          , Ym = {}
          , Km = {};
        function hb(e) {
            return If.call(Km, e) ? !0 : If.call(Ym, e) ? !1 : gb.test(e) ? Km[e] = !0 : (Ym[e] = !0,
            !1)
        }
        function Cr(e, t, a) {
            if (hb(t))
                if (a === null)
                    e.removeAttribute(t);
                else {
                    switch (typeof a) {
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var o = t.toLowerCase().slice(0, 5);
                        if (o !== "data-" && o !== "aria-") {
                            e.removeAttribute(t);
                            return
                        }
                    }
                    e.setAttribute(t, "" + a)
                }
        }
        function sr(e, t, a) {
            if (a === null)
                e.removeAttribute(t);
            else {
                switch (typeof a) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(t);
                    return
                }
                e.setAttribute(t, "" + a)
            }
        }
        function na(e, t, a, o) {
            if (o === null)
                e.removeAttribute(a);
            else {
                switch (typeof o) {
                case "undefined":
                case "function":
                case "symbol":
                case "boolean":
                    e.removeAttribute(a);
                    return
                }
                e.setAttributeNS(t, a, "" + o)
            }
        }
        function St(e) {
            switch (typeof e) {
            case "bigint":
            case "boolean":
            case "number":
            case "string":
            case "undefined":
                return e;
            case "object":
                return e;
            default:
                return ""
            }
        }
        function wg(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
        }
        function xb(e) {
            var t = wg(e) ? "checked" : "value"
              , a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
              , o = "" + e[t];
            if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
                var l = a.get
                  , n = a.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return l.call(this)
                    },
                    set: function(u) {
                        o = "" + u,
                        n.call(this, u)
                    }
                }),
                Object.defineProperty(e, t, {
                    enumerable: a.enumerable
                }),
                {
                    getValue: function() {
                        return o
                    },
                    setValue: function(u) {
                        o = "" + u
                    },
                    stopTracking: function() {
                        e._valueTracker = null,
                        delete e[t]
                    }
                }
            }
        }
        function Hr(e) {
            e._valueTracker || (e._valueTracker = xb(e))
        }
        function Tg(e) {
            if (!e)
                return !1;
            var t = e._valueTracker;
            if (!t)
                return !0;
            var a = t.getValue()
              , o = "";
            return e && (o = wg(e) ? e.checked ? "true" : "false" : e.value),
            e = o,
            e !== a ? (t.setValue(e),
            !0) : !1
        }
        function qr(e) {
            if (e = e || (typeof document < "u" ? document : void 0),
            typeof e > "u")
                return null;
            try {
                return e.activeElement || e.body
            } catch {
                return e.body
            }
        }
        var vb = /[\n"\\]/g;
        function wt(e) {
            return e.replace(vb, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " "
            })
        }
        function Tf(e, t, a, o, l, n, u, r) {
            e.name = "",
            u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" ? e.type = u : e.removeAttribute("type"),
            t != null ? u === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + St(t)) : e.value !== "" + St(t) && (e.value = "" + St(t)) : u !== "submit" && u !== "reset" || e.removeAttribute("value"),
            t != null ? Ef(e, u, St(t)) : a != null ? Ef(e, u, St(a)) : o != null && e.removeAttribute("value"),
            l == null && n != null && (e.defaultChecked = !!n),
            l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"),
            r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" ? e.name = "" + St(r) : e.removeAttribute("name")
        }
        function Eg(e, t, a, o, l, n, u, r) {
            if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (e.type = n),
            t != null || a != null) {
                if (!(n !== "submit" && n !== "reset" || t != null))
                    return;
                a = a != null ? "" + St(a) : "",
                t = t != null ? "" + St(t) : a,
                r || t === e.value || (e.value = t),
                e.defaultValue = t
            }
            o = o ?? l,
            o = typeof o != "function" && typeof o != "symbol" && !!o,
            e.checked = r ? e.checked : !!o,
            e.defaultChecked = !!o,
            u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.name = u)
        }
        function Ef(e, t, a) {
            t === "number" && qr(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a)
        }
        function Ll(e, t, a, o) {
            if (e = e.options,
            t) {
                t = {};
                for (var l = 0; l < a.length; l++)
                    t["$" + a[l]] = !0;
                for (a = 0; a < e.length; a++)
                    l = t.hasOwnProperty("$" + e[a].value),
                    e[a].selected !== l && (e[a].selected = l),
                    l && o && (e[a].defaultSelected = !0)
            } else {
                for (a = "" + St(a),
                t = null,
                l = 0; l < e.length; l++) {
                    if (e[l].value === a) {
                        e[l].selected = !0,
                        o && (e[l].defaultSelected = !0);
                        return
                    }
                    t !== null || e[l].disabled || (t = e[l])
                }
                t !== null && (t.selected = !0)
            }
        }
        function Rg(e, t, a) {
            if (t != null && (t = "" + St(t),
            t !== e.value && (e.value = t),
            a == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return
            }
            e.defaultValue = a != null ? "" + St(a) : ""
        }
        function Og(e, t, a, o) {
            if (t == null) {
                if (o != null) {
                    if (a != null)
                        throw Error(E(92));
                    if (bn(o)) {
                        if (1 < o.length)
                            throw Error(E(93));
                        o = o[0]
                    }
                    a = o
                }
                a == null && (a = ""),
                t = a
            }
            a = St(t),
            e.defaultValue = a,
            o = e.textContent,
            o === a && o !== "" && o !== null && (e.value = o)
        }
        function Rl(e, t) {
            if (t) {
                var a = e.firstChild;
                if (a && a === e.lastChild && a.nodeType === 3) {
                    a.nodeValue = t;
                    return
                }
            }
            e.textContent = t
        }
        var Lb = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function Wm(e, t, a) {
            var o = t.indexOf("--") === 0;
            a == null || typeof a == "boolean" || a === "" ? o ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : o ? e.setProperty(t, a) : typeof a != "number" || a === 0 || Lb.has(t) ? t === "float" ? e.cssFloat = a : e[t] = ("" + a).trim() : e[t] = a + "px"
        }
        function Ag(e, t, a) {
            if (t != null && typeof t != "object")
                throw Error(E(62));
            if (e = e.style,
            a != null) {
                for (var o in a)
                    !a.hasOwnProperty(o) || t != null && t.hasOwnProperty(o) || (o.indexOf("--") === 0 ? e.setProperty(o, "") : o === "float" ? e.cssFloat = "" : e[o] = "");
                for (var l in t)
                    o = t[l],
                    t.hasOwnProperty(l) && a[l] !== o && Wm(e, l, o)
            } else
                for (var n in t)
                    t.hasOwnProperty(n) && Wm(e, n, t[n])
        }
        function gc(e) {
            if (e.indexOf("-") === -1)
                return !1;
            switch (e) {
            case "annotation-xml":
            case "color-profile":
            case "font-face":
            case "font-face-src":
            case "font-face-uri":
            case "font-face-format":
            case "font-face-name":
            case "missing-glyph":
                return !1;
            default:
                return !0
            }
        }
        var yb = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
          , bb = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function Ir(e) {
            return bb.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e
        }
        var Rf = null;
        function hc(e) {
            return e = e.target || e.srcElement || window,
            e.correspondingUseElement && (e = e.correspondingUseElement),
            e.nodeType === 3 ? e.parentNode : e
        }
        var il = null
          , yl = null;
        function Qm(e) {
            var t = Fl(e);
            if (t && (e = t.stateNode)) {
                var a = e[nt] || null;
                e: switch (e = t.stateNode,
                t.type) {
                case "input":
                    if (Tf(e, a.value, a.defaultValue, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name),
                    t = a.name,
                    a.type === "radio" && t != null) {
                        for (a = e; a.parentNode; )
                            a = a.parentNode;
                        for (a = a.querySelectorAll('input[name="' + wt("" + t) + '"][type="radio"]'),
                        t = 0; t < a.length; t++) {
                            var o = a[t];
                            if (o !== e && o.form === e.form) {
                                var l = o[nt] || null;
                                if (!l)
                                    throw Error(E(90));
                                Tf(o, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name)
                            }
                        }
                        for (t = 0; t < a.length; t++)
                            o = a[t],
                            o.form === e.form && Tg(o)
                    }
                    break e;
                case "textarea":
                    Rg(e, a.value, a.defaultValue);
                    break e;
                case "select":
                    t = a.value,
                    t != null && Ll(e, !!a.multiple, t, !1)
                }
            }
        }
        var Gi = !1;
        function Mg(e, t, a) {
            if (Gi)
                return e(t, a);
            Gi = !0;
            try {
                var o = e(t);
                return o
            } finally {
                if (Gi = !1,
                (il !== null || yl !== null) && (Ls(),
                il && (t = il,
                e = yl,
                yl = il = null,
                Qm(t),
                e)))
                    for (t = 0; t < e.length; t++)
                        Qm(e[t])
            }
        }
        function zn(e, t) {
            var a = e.stateNode;
            if (a === null)
                return null;
            var o = a[nt] || null;
            if (o === null)
                return null;
            a = o[t];
            e: switch (t) {
            case "onClick":
            case "onClickCapture":
            case "onDoubleClick":
            case "onDoubleClickCapture":
            case "onMouseDown":
            case "onMouseDownCapture":
            case "onMouseMove":
            case "onMouseMoveCapture":
            case "onMouseUp":
            case "onMouseUpCapture":
            case "onMouseEnter":
                (o = !o.disabled) || (e = e.type,
                o = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
                e = !o;
                break e;
            default:
                e = !1
            }
            if (e)
                return null;
            if (a && typeof a != "function")
                throw Error(E(231, t, typeof a));
            return a
        }
        var Of = !1;
        if (va)
            try {
                tl = {},
                Object.defineProperty(tl, "passive", {
                    get: function() {
                        Of = !0
                    }
                }),
                window.addEventListener("test", tl, tl),
                window.removeEventListener("test", tl, tl)
            } catch {
                Of = !1
            }
        var tl, Ga = null, xc = null, wr = null;
        function Dg() {
            if (wr)
                return wr;
            var e, t = xc, a = t.length, o, l = "value"in Ga ? Ga.value : Ga.textContent, n = l.length;
            for (e = 0; e < a && t[e] === l[e]; e++)
                ;
            var u = a - e;
            for (o = 1; o <= u && t[a - o] === l[n - o]; o++)
                ;
            return wr = l.slice(e, 1 < o ? 1 - o : void 0)
        }
        function Tr(e) {
            var t = e.keyCode;
            return "charCode"in e ? (e = e.charCode,
            e === 0 && t === 13 && (e = 13)) : e = t,
            e === 10 && (e = 13),
            32 <= e || e === 13 ? e : 0
        }
        function ir() {
            return !0
        }
        function Zm() {
            return !1
        }
        function ut(e) {
            function t(a, o, l, n, u) {
                this._reactName = a,
                this._targetInst = l,
                this.type = o,
                this.nativeEvent = n,
                this.target = u,
                this.currentTarget = null;
                for (var r in e)
                    e.hasOwnProperty(r) && (a = e[r],
                    this[r] = a ? a(n) : n[r]);
                return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? ir : Zm,
                this.isPropagationStopped = Zm,
                this
            }
            return ue(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var a = this.nativeEvent;
                    a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1),
                    this.isDefaultPrevented = ir)
                },
                stopPropagation: function() {
                    var a = this.nativeEvent;
                    a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
                    this.isPropagationStopped = ir)
                },
                persist: function() {},
                isPersistent: ir
            }),
            t
        }
        var qo = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now()
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, fs = ut(qo), ou = ue({}, qo, {
            view: 0,
            detail: 0
        }), Sb = ut(ou), Xi, ji, dn, cs = ue({}, ou, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: vc,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
            },
            movementX: function(e) {
                return "movementX"in e ? e.movementX : (e !== dn && (dn && e.type === "mousemove" ? (Xi = e.screenX - dn.screenX,
                ji = e.screenY - dn.screenY) : ji = Xi = 0,
                dn = e),
                Xi)
            },
            movementY: function(e) {
                return "movementY"in e ? e.movementY : ji
            }
        }), Jm = ut(cs), Cb = ue({}, cs, {
            dataTransfer: 0
        }), Ib = ut(Cb), wb = ue({}, ou, {
            relatedTarget: 0
        }), Yi = ut(wb), Tb = ue({}, qo, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Eb = ut(Tb), Rb = ue({}, qo, {
            clipboardData: function(e) {
                return "clipboardData"in e ? e.clipboardData : window.clipboardData
            }
        }), Ob = ut(Rb), Ab = ue({}, qo, {
            data: 0
        }), ep = ut(Ab), Mb = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, Db = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, kb = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function Bb(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = kb[e]) ? !!t[e] : !1
        }
        function vc() {
            return Bb
        }
        var Pb = ue({}, ou, {
            key: function(e) {
                if (e.key) {
                    var t = Mb[e.key] || e.key;
                    if (t !== "Unidentified")
                        return t
                }
                return e.type === "keypress" ? (e = Tr(e),
                e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Db[e.keyCode] || "Unidentified" : ""
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: vc,
            charCode: function(e) {
                return e.type === "keypress" ? Tr(e) : 0
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            },
            which: function(e) {
                return e.type === "keypress" ? Tr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
            }
        })
          , _b = ut(Pb)
          , Fb = ue({}, cs, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        })
          , tp = ut(Fb)
          , Ub = ue({}, ou, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: vc
        })
          , Hb = ut(Ub)
          , qb = ue({}, qo, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        })
          , zb = ut(qb)
          , Nb = ue({}, cs, {
            deltaX: function(e) {
                return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
            },
            deltaY: function(e) {
                return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
            },
            deltaZ: 0,
            deltaMode: 0
        })
          , $b = ut(Nb)
          , Vb = ue({}, qo, {
            newState: 0,
            oldState: 0
        })
          , Gb = ut(Vb)
          , Xb = [9, 13, 27, 32]
          , Lc = va && "CompositionEvent"in window
          , In = null;
        va && "documentMode"in document && (In = document.documentMode);
        var jb = va && "TextEvent"in window && !In
          , kg = va && (!Lc || In && 8 < In && 11 >= In)
          , ap = " "
          , op = !1;
        function Bg(e, t) {
            switch (e) {
            case "keyup":
                return Xb.indexOf(t.keyCode) !== -1;
            case "keydown":
                return t.keyCode !== 229;
            case "keypress":
            case "mousedown":
            case "focusout":
                return !0;
            default:
                return !1
            }
        }
        function Pg(e) {
            return e = e.detail,
            typeof e == "object" && "data"in e ? e.data : null
        }
        var fl = !1;
        function Yb(e, t) {
            switch (e) {
            case "compositionend":
                return Pg(t);
            case "keypress":
                return t.which !== 32 ? null : (op = !0,
                ap);
            case "textInput":
                return e = t.data,
                e === ap && op ? null : e;
            default:
                return null
            }
        }
        function Kb(e, t) {
            if (fl)
                return e === "compositionend" || !Lc && Bg(e, t) ? (e = Dg(),
                wr = xc = Ga = null,
                fl = !1,
                e) : null;
            switch (e) {
            case "paste":
                return null;
            case "keypress":
                if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                    if (t.char && 1 < t.char.length)
                        return t.char;
                    if (t.which)
                        return String.fromCharCode(t.which)
                }
                return null;
            case "compositionend":
                return kg && t.locale !== "ko" ? null : t.data;
            default:
                return null
            }
        }
        var Wb = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        function lp(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!Wb[e.type] : t === "textarea"
        }
        function _g(e, t, a, o) {
            il ? yl ? yl.push(o) : yl = [o] : il = o,
            t = as(t, "onChange"),
            0 < t.length && (a = new fs("onChange","change",null,a,o),
            e.push({
                event: a,
                listeners: t
            }))
        }
        var wn = null
          , Nn = null;
        function Qb(e) {
            Sx(e, 0)
        }
        function ds(e) {
            var t = Sn(e);
            if (Tg(t))
                return e
        }
        function np(e, t) {
            if (e === "change")
                return t
        }
        var Fg = !1;
        va && (va ? (cr = "oninput"in document,
        cr || (Ki = document.createElement("div"),
        Ki.setAttribute("oninput", "return;"),
        cr = typeof Ki.oninput == "function"),
        fr = cr) : fr = !1,
        Fg = fr && (!document.documentMode || 9 < document.documentMode));
        var fr, cr, Ki;
        function up() {
            wn && (wn.detachEvent("onpropertychange", Ug),
            Nn = wn = null)
        }
        function Ug(e) {
            if (e.propertyName === "value" && ds(Nn)) {
                var t = [];
                _g(t, Nn, e, hc(e)),
                Mg(Qb, t)
            }
        }
        function Zb(e, t, a) {
            e === "focusin" ? (up(),
            wn = t,
            Nn = a,
            wn.attachEvent("onpropertychange", Ug)) : e === "focusout" && up()
        }
        function Jb(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown")
                return ds(Nn)
        }
        function eS(e, t) {
            if (e === "click")
                return ds(t)
        }
        function tS(e, t) {
            if (e === "input" || e === "change")
                return ds(t)
        }
        function aS(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
        }
        var pt = typeof Object.is == "function" ? Object.is : aS;
        function $n(e, t) {
            if (pt(e, t))
                return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null)
                return !1;
            var a = Object.keys(e)
              , o = Object.keys(t);
            if (a.length !== o.length)
                return !1;
            for (o = 0; o < a.length; o++) {
                var l = a[o];
                if (!If.call(t, l) || !pt(e[l], t[l]))
                    return !1
            }
            return !0
        }
        function rp(e) {
            for (; e && e.firstChild; )
                e = e.firstChild;
            return e
        }
        function sp(e, t) {
            var a = rp(e);
            e = 0;
            for (var o; a; ) {
                if (a.nodeType === 3) {
                    if (o = e + a.textContent.length,
                    e <= t && o >= t)
                        return {
                            node: a,
                            offset: t - e
                        };
                    e = o
                }
                e: {
                    for (; a; ) {
                        if (a.nextSibling) {
                            a = a.nextSibling;
                            break e
                        }
                        a = a.parentNode
                    }
                    a = void 0
                }
                a = rp(a)
            }
        }
        function Hg(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Hg(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
        }
        function qg(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for (var t = qr(e.document); t instanceof e.HTMLIFrameElement; ) {
                try {
                    var a = typeof t.contentWindow.location.href == "string"
                } catch {
                    a = !1
                }
                if (a)
                    e = t.contentWindow;
                else
                    break;
                t = qr(e.document)
            }
            return t
        }
        function yc(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
        }
        function oS(e, t) {
            var a = qg(t);
            t = e.focusedElem;
            var o = e.selectionRange;
            if (a !== t && t && t.ownerDocument && Hg(t.ownerDocument.documentElement, t)) {
                if (o !== null && yc(t)) {
                    if (e = o.start,
                    a = o.end,
                    a === void 0 && (a = e),
                    "selectionStart"in t)
                        t.selectionStart = e,
                        t.selectionEnd = Math.min(a, t.value.length);
                    else if (a = (e = t.ownerDocument || document) && e.defaultView || window,
                    a.getSelection) {
                        a = a.getSelection();
                        var l = t.textContent.length
                          , n = Math.min(o.start, l);
                        o = o.end === void 0 ? n : Math.min(o.end, l),
                        !a.extend && n > o && (l = o,
                        o = n,
                        n = l),
                        l = sp(t, n);
                        var u = sp(t, o);
                        l && u && (a.rangeCount !== 1 || a.anchorNode !== l.node || a.anchorOffset !== l.offset || a.focusNode !== u.node || a.focusOffset !== u.offset) && (e = e.createRange(),
                        e.setStart(l.node, l.offset),
                        a.removeAllRanges(),
                        n > o ? (a.addRange(e),
                        a.extend(u.node, u.offset)) : (e.setEnd(u.node, u.offset),
                        a.addRange(e)))
                    }
                }
                for (e = [],
                a = t; a = a.parentNode; )
                    a.nodeType === 1 && e.push({
                        element: a,
                        left: a.scrollLeft,
                        top: a.scrollTop
                    });
                for (typeof t.focus == "function" && t.focus(),
                t = 0; t < e.length; t++)
                    a = e[t],
                    a.element.scrollLeft = a.left,
                    a.element.scrollTop = a.top
            }
        }
        var lS = va && "documentMode"in document && 11 >= document.documentMode
          , cl = null
          , Af = null
          , Tn = null
          , Mf = !1;
        function ip(e, t, a) {
            var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
            Mf || cl == null || cl !== qr(o) || (o = cl,
            "selectionStart"in o && yc(o) ? o = {
                start: o.selectionStart,
                end: o.selectionEnd
            } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(),
            o = {
                anchorNode: o.anchorNode,
                anchorOffset: o.anchorOffset,
                focusNode: o.focusNode,
                focusOffset: o.focusOffset
            }),
            Tn && $n(Tn, o) || (Tn = o,
            o = as(Af, "onSelect"),
            0 < o.length && (t = new fs("onSelect","select",null,t,a),
            e.push({
                event: t,
                listeners: o
            }),
            t.target = cl)))
        }
        function So(e, t) {
            var a = {};
            return a[e.toLowerCase()] = t.toLowerCase(),
            a["Webkit" + e] = "webkit" + t,
            a["Moz" + e] = "moz" + t,
            a
        }
        var dl = {
            animationend: So("Animation", "AnimationEnd"),
            animationiteration: So("Animation", "AnimationIteration"),
            animationstart: So("Animation", "AnimationStart"),
            transitionrun: So("Transition", "TransitionRun"),
            transitionstart: So("Transition", "TransitionStart"),
            transitioncancel: So("Transition", "TransitionCancel"),
            transitionend: So("Transition", "TransitionEnd")
        }
          , Wi = {}
          , zg = {};
        va && (zg = document.createElement("div").style,
        "AnimationEvent"in window || (delete dl.animationend.animation,
        delete dl.animationiteration.animation,
        delete dl.animationstart.animation),
        "TransitionEvent"in window || delete dl.transitionend.transition);
        function zo(e) {
            if (Wi[e])
                return Wi[e];
            if (!dl[e])
                return e;
            var t = dl[e], a;
            for (a in t)
                if (t.hasOwnProperty(a) && a in zg)
                    return Wi[e] = t[a];
            return e
        }
        var Ng = zo("animationend")
          , $g = zo("animationiteration")
          , Vg = zo("animationstart")
          , nS = zo("transitionrun")
          , uS = zo("transitionstart")
          , rS = zo("transitioncancel")
          , Gg = zo("transitionend")
          , Xg = new Map
          , fp = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");
        function Ht(e, t) {
            Xg.set(e, t),
            Ho(t, [e])
        }
        var bt = []
          , ml = 0
          , bc = 0;
        function ms() {
            for (var e = ml, t = bc = ml = 0; t < e; ) {
                var a = bt[t];
                bt[t++] = null;
                var o = bt[t];
                bt[t++] = null;
                var l = bt[t];
                bt[t++] = null;
                var n = bt[t];
                if (bt[t++] = null,
                o !== null && l !== null) {
                    var u = o.pending;
                    u === null ? l.next = l : (l.next = u.next,
                    u.next = l),
                    o.pending = l
                }
                n !== 0 && jg(a, l, n)
            }
        }
        function ps(e, t, a, o) {
            bt[ml++] = e,
            bt[ml++] = t,
            bt[ml++] = a,
            bt[ml++] = o,
            bc |= o,
            e.lanes |= o,
            e = e.alternate,
            e !== null && (e.lanes |= o)
        }
        function Sc(e, t, a, o) {
            return ps(e, t, a, o),
            zr(e)
        }
        function eo(e, t) {
            return ps(e, null, null, t),
            zr(e)
        }
        function jg(e, t, a) {
            e.lanes |= a;
            var o = e.alternate;
            o !== null && (o.lanes |= a);
            for (var l = !1, n = e.return; n !== null; )
                n.childLanes |= a,
                o = n.alternate,
                o !== null && (o.childLanes |= a),
                n.tag === 22 && (e = n.stateNode,
                e === null || e._visibility & 1 || (l = !0)),
                e = n,
                n = n.return;
            l && t !== null && e.tag === 3 && (n = e.stateNode,
            l = 31 - dt(a),
            n = n.hiddenUpdates,
            e = n[l],
            e === null ? n[l] = [t] : e.push(t),
            t.lane = a | 536870912)
        }
        function zr(e) {
            if (50 < Un)
                throw Un = 0,
                Jf = null,
                Error(E(185));
            for (var t = e.return; t !== null; )
                e = t,
                t = e.return;
            return e.tag === 3 ? e.stateNode : null
        }
        var pl = {}
          , cp = new WeakMap;
        function Tt(e, t) {
            if (typeof e == "object" && e !== null) {
                var a = cp.get(e);
                return a !== void 0 ? a : (t = {
                    value: e,
                    source: t,
                    stack: Gm(t)
                },
                cp.set(e, t),
                t)
            }
            return {
                value: e,
                source: t,
                stack: Gm(t)
            }
        }
        var gl = []
          , hl = 0
          , Nr = null
          , $r = 0
          , Ct = []
          , It = 0
          , Oo = null
          , ma = 1
          , pa = "";
        function Io(e, t) {
            gl[hl++] = $r,
            gl[hl++] = Nr,
            Nr = e,
            $r = t
        }
        function Yg(e, t, a) {
            Ct[It++] = ma,
            Ct[It++] = pa,
            Ct[It++] = Oo,
            Oo = e;
            var o = ma;
            e = pa;
            var l = 32 - dt(o) - 1;
            o &= ~(1 << l),
            a += 1;
            var n = 32 - dt(t) + l;
            if (30 < n) {
                var u = l - l % 5;
                n = (o & (1 << u) - 1).toString(32),
                o >>= u,
                l -= u,
                ma = 1 << 32 - dt(t) + l | a << l | o,
                pa = n + e
            } else
                ma = 1 << n | a << l | o,
                pa = e
        }
        function Cc(e) {
            e.return !== null && (Io(e, 1),
            Yg(e, 1, 0))
        }
        function Ic(e) {
            for (; e === Nr; )
                Nr = gl[--hl],
                gl[hl] = null,
                $r = gl[--hl],
                gl[hl] = null;
            for (; e === Oo; )
                Oo = Ct[--It],
                Ct[It] = null,
                pa = Ct[--It],
                Ct[It] = null,
                ma = Ct[--It],
                Ct[It] = null
        }
        var Je = null
          , ze = null
          , j = !1
          , Ft = null
          , Xt = !1
          , Df = Error(E(519));
        function Bo(e) {
            var t = Error(E(418, ""));
            throw Vn(Tt(t, e)),
            Df
        }
        function dp(e) {
            var t = e.stateNode
              , a = e.type
              , o = e.memoizedProps;
            switch (t[Xe] = e,
            t[nt] = o,
            a) {
            case "dialog":
                G("cancel", t),
                G("close", t);
                break;
            case "iframe":
            case "object":
            case "embed":
                G("load", t);
                break;
            case "video":
            case "audio":
                for (a = 0; a < jn.length; a++)
                    G(jn[a], t);
                break;
            case "source":
                G("error", t);
                break;
            case "img":
            case "image":
            case "link":
                G("error", t),
                G("load", t);
                break;
            case "details":
                G("toggle", t);
                break;
            case "input":
                G("invalid", t),
                Eg(t, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0),
                Hr(t);
                break;
            case "select":
                G("invalid", t);
                break;
            case "textarea":
                G("invalid", t),
                Og(t, o.value, o.defaultValue, o.children),
                Hr(t)
            }
            a = o.children,
            typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || o.suppressHydrationWarning === !0 || Ix(t.textContent, a) ? (o.popover != null && (G("beforetoggle", t),
            G("toggle", t)),
            o.onScroll != null && G("scroll", t),
            o.onScrollEnd != null && G("scrollend", t),
            o.onClick != null && (t.onclick = bs),
            t = !0) : t = !1,
            t || Bo(e)
        }
        function mp(e) {
            for (Je = e.return; Je; )
                switch (Je.tag) {
                case 3:
                case 27:
                    Xt = !0;
                    return;
                case 5:
                case 13:
                    Xt = !1;
                    return;
                default:
                    Je = Je.return
                }
        }
        function mn(e) {
            if (e !== Je)
                return !1;
            if (!j)
                return mp(e),
                j = !0,
                !1;
            var t = !1, a;
            if ((a = e.tag !== 3 && e.tag !== 27) && ((a = e.tag === 5) && (a = e.type,
            a = !(a !== "form" && a !== "button") || uc(e.type, e.memoizedProps)),
            a = !a),
            a && (t = !0),
            t && ze && Bo(e),
            mp(e),
            e.tag === 13) {
                if (e = e.memoizedState,
                e = e !== null ? e.dehydrated : null,
                !e)
                    throw Error(E(317));
                e: {
                    for (e = e.nextSibling,
                    t = 0; e; ) {
                        if (e.nodeType === 8)
                            if (a = e.data,
                            a === "/$") {
                                if (t === 0) {
                                    ze = Ut(e.nextSibling);
                                    break e
                                }
                                t--
                            } else
                                a !== "$" && a !== "$!" && a !== "$?" || t++;
                        e = e.nextSibling
                    }
                    ze = null
                }
            } else
                ze = Je ? Ut(e.stateNode.nextSibling) : null;
            return !0
        }
        function lu() {
            ze = Je = null,
            j = !1
        }
        function Vn(e) {
            Ft === null ? Ft = [e] : Ft.push(e)
        }
        var En = Error(E(460))
          , Kg = Error(E(474))
          , kf = {
            then: function() {}
        };
        function pp(e) {
            return e = e.status,
            e === "fulfilled" || e === "rejected"
        }
        function dr() {}
        function Wg(e, t, a) {
            switch (a = e[a],
            a === void 0 ? e.push(t) : a !== t && (t.then(dr, dr),
            t = a),
            t.status) {
            case "fulfilled":
                return t.value;
            case "rejected":
                throw e = t.reason,
                e === En ? Error(E(483)) : e;
            default:
                if (typeof t.status == "string")
                    t.then(dr, dr);
                else {
                    if (e = oe,
                    e !== null && 100 < e.shellSuspendCounter)
                        throw Error(E(482));
                    e = t,
                    e.status = "pending",
                    e.then(function(o) {
                        if (t.status === "pending") {
                            var l = t;
                            l.status = "fulfilled",
                            l.value = o
                        }
                    }, function(o) {
                        if (t.status === "pending") {
                            var l = t;
                            l.status = "rejected",
                            l.reason = o
                        }
                    })
                }
                switch (t.status) {
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason,
                    e === En ? Error(E(483)) : e
                }
                throw Rn = t,
                En
            }
        }
        var Rn = null;
        function gp() {
            if (Rn === null)
                throw Error(E(459));
            var e = Rn;
            return Rn = null,
            e
        }
        var bl = null
          , Gn = 0;
        function mr(e) {
            var t = Gn;
            return Gn += 1,
            bl === null && (bl = []),
            Wg(bl, e, t)
        }
        function pn(e, t) {
            t = t.props.ref,
            e.ref = t !== void 0 ? t : null
        }
        function pr(e, t) {
            throw t.$$typeof === Yy ? Error(E(525)) : (e = Object.prototype.toString.call(t),
            Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
        }
        function hp(e) {
            var t = e._init;
            return t(e._payload)
        }
        function Qg(e) {
            function t(h, d) {
                if (e) {
                    var p = h.deletions;
                    p === null ? (h.deletions = [d],
                    h.flags |= 16) : p.push(d)
                }
            }
            function a(h, d) {
                if (!e)
                    return null;
                for (; d !== null; )
                    t(h, d),
                    d = d.sibling;
                return null
            }
            function o(h) {
                for (var d = new Map; h !== null; )
                    h.key !== null ? d.set(h.key, h) : d.set(h.index, h),
                    h = h.sibling;
                return d
            }
            function l(h, d) {
                return h = Ka(h, d),
                h.index = 0,
                h.sibling = null,
                h
            }
            function n(h, d, p) {
                return h.index = p,
                e ? (p = h.alternate,
                p !== null ? (p = p.index,
                p < d ? (h.flags |= 33554434,
                d) : p) : (h.flags |= 33554434,
                d)) : (h.flags |= 1048576,
                d)
            }
            function u(h) {
                return e && h.alternate === null && (h.flags |= 33554434),
                h
            }
            function r(h, d, p, v) {
                return d === null || d.tag !== 6 ? (d = sf(p, h.mode, v),
                d.return = h,
                d) : (d = l(d, p),
                d.return = h,
                d)
            }
            function s(h, d, p, v) {
                var y = p.type;
                return y === rl ? f(h, d, p.props.children, v, p.key) : d !== null && (d.elementType === y || typeof y == "object" && y !== null && y.$$typeof === Ua && hp(y) === d.type) ? (d = l(d, p.props),
                pn(d, p),
                d.return = h,
                d) : (d = Mr(p.type, p.key, p.props, null, h.mode, v),
                pn(d, p),
                d.return = h,
                d)
            }
            function i(h, d, p, v) {
                return d === null || d.tag !== 4 || d.stateNode.containerInfo !== p.containerInfo || d.stateNode.implementation !== p.implementation ? (d = ff(p, h.mode, v),
                d.return = h,
                d) : (d = l(d, p.children || []),
                d.return = h,
                d)
            }
            function f(h, d, p, v, y) {
                return d === null || d.tag !== 7 ? (d = Mo(p, h.mode, v, y),
                d.return = h,
                d) : (d = l(d, p),
                d.return = h,
                d)
            }
            function g(h, d, p) {
                if (typeof d == "string" && d !== "" || typeof d == "number" || typeof d == "bigint")
                    return d = sf("" + d, h.mode, p),
                    d.return = h,
                    d;
                if (typeof d == "object" && d !== null) {
                    switch (d.$$typeof) {
                    case nr:
                        return p = Mr(d.type, d.key, d.props, null, h.mode, p),
                        pn(p, d),
                        p.return = h,
                        p;
                    case Ln:
                        return d = ff(d, h.mode, p),
                        d.return = h,
                        d;
                    case Ua:
                        var v = d._init;
                        return d = v(d._payload),
                        g(h, d, p)
                    }
                    if (bn(d) || cn(d))
                        return d = Mo(d, h.mode, p, null),
                        d.return = h,
                        d;
                    if (typeof d.then == "function")
                        return g(h, mr(d), p);
                    if (d.$$typeof === da)
                        return g(h, gr(h, d), p);
                    pr(h, d)
                }
                return null
            }
            function m(h, d, p, v) {
                var y = d !== null ? d.key : null;
                if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
                    return y !== null ? null : r(h, d, "" + p, v);
                if (typeof p == "object" && p !== null) {
                    switch (p.$$typeof) {
                    case nr:
                        return p.key === y ? s(h, d, p, v) : null;
                    case Ln:
                        return p.key === y ? i(h, d, p, v) : null;
                    case Ua:
                        return y = p._init,
                        p = y(p._payload),
                        m(h, d, p, v)
                    }
                    if (bn(p) || cn(p))
                        return y !== null ? null : f(h, d, p, v, null);
                    if (typeof p.then == "function")
                        return m(h, d, mr(p), v);
                    if (p.$$typeof === da)
                        return m(h, d, gr(h, p), v);
                    pr(h, p)
                }
                return null
            }
            function c(h, d, p, v, y) {
                if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
                    return h = h.get(p) || null,
                    r(d, h, "" + v, y);
                if (typeof v == "object" && v !== null) {
                    switch (v.$$typeof) {
                    case nr:
                        return h = h.get(v.key === null ? p : v.key) || null,
                        s(d, h, v, y);
                    case Ln:
                        return h = h.get(v.key === null ? p : v.key) || null,
                        i(d, h, v, y);
                    case Ua:
                        var I = v._init;
                        return v = I(v._payload),
                        c(h, d, p, v, y)
                    }
                    if (bn(v) || cn(v))
                        return h = h.get(p) || null,
                        f(d, h, v, y, null);
                    if (typeof v.then == "function")
                        return c(h, d, p, mr(v), y);
                    if (v.$$typeof === da)
                        return c(h, d, p, gr(d, v), y);
                    pr(d, v)
                }
                return null
            }
            function x(h, d, p, v) {
                for (var y = null, I = null, b = d, T = d = 0, R = null; b !== null && T < p.length; T++) {
                    b.index > T ? (R = b,
                    b = null) : R = b.sibling;
                    var w = m(h, b, p[T], v);
                    if (w === null) {
                        b === null && (b = R);
                        break
                    }
                    e && b && w.alternate === null && t(h, b),
                    d = n(w, d, T),
                    I === null ? y = w : I.sibling = w,
                    I = w,
                    b = R
                }
                if (T === p.length)
                    return a(h, b),
                    j && Io(h, T),
                    y;
                if (b === null) {
                    for (; T < p.length; T++)
                        b = g(h, p[T], v),
                        b !== null && (d = n(b, d, T),
                        I === null ? y = b : I.sibling = b,
                        I = b);
                    return j && Io(h, T),
                    y
                }
                for (b = o(b); T < p.length; T++)
                    R = c(b, h, T, p[T], v),
                    R !== null && (e && R.alternate !== null && b.delete(R.key === null ? T : R.key),
                    d = n(R, d, T),
                    I === null ? y = R : I.sibling = R,
                    I = R);
                return e && b.forEach(function(O) {
                    return t(h, O)
                }),
                j && Io(h, T),
                y
            }
            function L(h, d, p, v) {
                if (p == null)
                    throw Error(E(151));
                for (var y = null, I = null, b = d, T = d = 0, R = null, w = p.next(); b !== null && !w.done; T++,
                w = p.next()) {
                    b.index > T ? (R = b,
                    b = null) : R = b.sibling;
                    var O = m(h, b, w.value, v);
                    if (O === null) {
                        b === null && (b = R);
                        break
                    }
                    e && b && O.alternate === null && t(h, b),
                    d = n(O, d, T),
                    I === null ? y = O : I.sibling = O,
                    I = O,
                    b = R
                }
                if (w.done)
                    return a(h, b),
                    j && Io(h, T),
                    y;
                if (b === null) {
                    for (; !w.done; T++,
                    w = p.next())
                        w = g(h, w.value, v),
                        w !== null && (d = n(w, d, T),
                        I === null ? y = w : I.sibling = w,
                        I = w);
                    return j && Io(h, T),
                    y
                }
                for (b = o(b); !w.done; T++,
                w = p.next())
                    w = c(b, h, T, w.value, v),
                    w !== null && (e && w.alternate !== null && b.delete(w.key === null ? T : w.key),
                    d = n(w, d, T),
                    I === null ? y = w : I.sibling = w,
                    I = w);
                return e && b.forEach(function(z) {
                    return t(h, z)
                }),
                j && Io(h, T),
                y
            }
            function S(h, d, p, v) {
                if (typeof p == "object" && p !== null && p.type === rl && p.key === null && (p = p.props.children),
                typeof p == "object" && p !== null) {
                    switch (p.$$typeof) {
                    case nr:
                        e: {
                            for (var y = p.key; d !== null; ) {
                                if (d.key === y) {
                                    if (y = p.type,
                                    y === rl) {
                                        if (d.tag === 7) {
                                            a(h, d.sibling),
                                            v = l(d, p.props.children),
                                            v.return = h,
                                            h = v;
                                            break e
                                        }
                                    } else if (d.elementType === y || typeof y == "object" && y !== null && y.$$typeof === Ua && hp(y) === d.type) {
                                        a(h, d.sibling),
                                        v = l(d, p.props),
                                        pn(v, p),
                                        v.return = h,
                                        h = v;
                                        break e
                                    }
                                    a(h, d);
                                    break
                                } else
                                    t(h, d);
                                d = d.sibling
                            }
                            p.type === rl ? (v = Mo(p.props.children, h.mode, v, p.key),
                            v.return = h,
                            h = v) : (v = Mr(p.type, p.key, p.props, null, h.mode, v),
                            pn(v, p),
                            v.return = h,
                            h = v)
                        }
                        return u(h);
                    case Ln:
                        e: {
                            for (y = p.key; d !== null; ) {
                                if (d.key === y)
                                    if (d.tag === 4 && d.stateNode.containerInfo === p.containerInfo && d.stateNode.implementation === p.implementation) {
                                        a(h, d.sibling),
                                        v = l(d, p.children || []),
                                        v.return = h,
                                        h = v;
                                        break e
                                    } else {
                                        a(h, d);
                                        break
                                    }
                                else
                                    t(h, d);
                                d = d.sibling
                            }
                            v = ff(p, h.mode, v),
                            v.return = h,
                            h = v
                        }
                        return u(h);
                    case Ua:
                        return y = p._init,
                        p = y(p._payload),
                        S(h, d, p, v)
                    }
                    if (bn(p))
                        return x(h, d, p, v);
                    if (cn(p)) {
                        if (y = cn(p),
                        typeof y != "function")
                            throw Error(E(150));
                        return p = y.call(p),
                        L(h, d, p, v)
                    }
                    if (typeof p.then == "function")
                        return S(h, d, mr(p), v);
                    if (p.$$typeof === da)
                        return S(h, d, gr(h, p), v);
                    pr(h, p)
                }
                return typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint" ? (p = "" + p,
                d !== null && d.tag === 6 ? (a(h, d.sibling),
                v = l(d, p),
                v.return = h,
                h = v) : (a(h, d),
                v = sf(p, h.mode, v),
                v.return = h,
                h = v),
                u(h)) : a(h, d)
            }
            return function(h, d, p, v) {
                try {
                    Gn = 0;
                    var y = S(h, d, p, v);
                    return bl = null,
                    y
                } catch (b) {
                    if (b === En)
                        throw b;
                    var I = Et(29, b, null, h.mode);
                    return I.lanes = v,
                    I.return = h,
                    I
                } finally {}
            }
        }
        var Po = Qg(!0)
          , Zg = Qg(!1)
          , Ol = Zt(null)
          , Vr = Zt(0);
        function xp(e, t) {
            e = ba,
            fe(Vr, e),
            fe(Ol, t),
            ba = e | t.baseLanes
        }
        function Bf() {
            fe(Vr, ba),
            fe(Ol, Ol.current)
        }
        function wc() {
            ba = Vr.current,
            _e(Ol),
            _e(Vr)
        }
        var Ot = Zt(null)
          , Wt = null;
        function qa(e) {
            var t = e.alternate;
            fe(Ee, Ee.current & 1),
            fe(Ot, e),
            Wt === null && (t === null || Ol.current !== null || t.memoizedState !== null) && (Wt = e)
        }
        function Jg(e) {
            if (e.tag === 22) {
                if (fe(Ee, Ee.current),
                fe(Ot, e),
                Wt === null) {
                    var t = e.alternate;
                    t !== null && t.memoizedState !== null && (Wt = e)
                }
            } else
                za(e)
        }
        function za() {
            fe(Ee, Ee.current),
            fe(Ot, Ot.current)
        }
        function ga(e) {
            _e(Ot),
            Wt === e && (Wt = null),
            _e(Ee)
        }
        var Ee = Zt(0);
        function Gr(e) {
            for (var t = e; t !== null; ) {
                if (t.tag === 13) {
                    var a = t.memoizedState;
                    if (a !== null && (a = a.dehydrated,
                    a === null || a.data === "$?" || a.data === "$!"))
                        return t
                } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
                    if ((t.flags & 128) !== 0)
                        return t
                } else if (t.child !== null) {
                    t.child.return = t,
                    t = t.child;
                    continue
                }
                if (t === e)
                    break;
                for (; t.sibling === null; ) {
                    if (t.return === null || t.return === e)
                        return null;
                    t = t.return
                }
                t.sibling.return = t.return,
                t = t.sibling
            }
            return null
        }
        var sS = typeof AbortController < "u" ? AbortController : function() {
            var e = []
              , t = this.signal = {
                aborted: !1,
                addEventListener: function(a, o) {
                    e.push(o)
                }
            };
            this.abort = function() {
                t.aborted = !0,
                e.forEach(function(a) {
                    return a()
                })
            }
        }
          , iS = Re.unstable_scheduleCallback
          , fS = Re.unstable_NormalPriority
          , Te = {
            $$typeof: da,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function Tc() {
            return {
                controller: new sS,
                data: new Map,
                refCount: 0
            }
        }
        function nu(e) {
            e.refCount--,
            e.refCount === 0 && iS(fS, function() {
                e.controller.abort()
            })
        }
        var On = null
          , Pf = 0
          , Al = 0
          , Sl = null;
        function cS(e, t) {
            if (On === null) {
                var a = On = [];
                Pf = 0,
                Al = Kc(),
                Sl = {
                    status: "pending",
                    value: void 0,
                    then: function(o) {
                        a.push(o)
                    }
                }
            }
            return Pf++,
            t.then(vp, vp),
            t
        }
        function vp() {
            if (--Pf === 0 && On !== null) {
                Sl !== null && (Sl.status = "fulfilled");
                var e = On;
                On = null,
                Al = 0,
                Sl = null;
                for (var t = 0; t < e.length; t++)
                    (0,
                    e[t])()
            }
        }
        function dS(e, t) {
            var a = []
              , o = {
                status: "pending",
                value: null,
                reason: null,
                then: function(l) {
                    a.push(l)
                }
            };
            return e.then(function() {
                o.status = "fulfilled",
                o.value = t;
                for (var l = 0; l < a.length; l++)
                    (0,
                    a[l])(t)
            }, function(l) {
                for (o.status = "rejected",
                o.reason = l,
                l = 0; l < a.length; l++)
                    (0,
                    a[l])(void 0)
            }),
            o
        }
        var Lp = B.S;
        B.S = function(e, t) {
            typeof t == "object" && t !== null && typeof t.then == "function" && cS(e, t),
            Lp !== null && Lp(e, t)
        }
        ;
        var Ao = Zt(null);
        function Ec() {
            var e = Ao.current;
            return e !== null ? e : oe.pooledCache
        }
        function Er(e, t) {
            t === null ? fe(Ao, Ao.current) : fe(Ao, t.pool)
        }
        function eh() {
            var e = Ec();
            return e === null ? null : {
                parent: Te._currentValue,
                pool: e
            }
        }
        var to = 0
          , N = null
          , J = null
          , Se = null
          , Xr = !1
          , Cl = !1
          , _o = !1
          , jr = 0
          , Xn = 0
          , Il = null
          , mS = 0;
        function Le() {
            throw Error(E(321))
        }
        function Rc(e, t) {
            if (t === null)
                return !1;
            for (var a = 0; a < t.length && a < e.length; a++)
                if (!pt(e[a], t[a]))
                    return !1;
            return !0
        }
        function Oc(e, t, a, o, l, n) {
            return to = n,
            N = t,
            t.memoizedState = null,
            t.updateQueue = null,
            t.lanes = 0,
            B.H = e === null || e.memoizedState === null ? No : no,
            _o = !1,
            n = a(o, l),
            _o = !1,
            Cl && (n = ah(t, a, o, l)),
            th(e),
            n
        }
        function th(e) {
            B.H = Qt;
            var t = J !== null && J.next !== null;
            if (to = 0,
            Se = J = N = null,
            Xr = !1,
            Xn = 0,
            Il = null,
            t)
                throw Error(E(300));
            e === null || Pe || (e = e.dependencies,
            e !== null && Wr(e) && (Pe = !0))
        }
        function ah(e, t, a, o) {
            N = e;
            var l = 0;
            do {
                if (Cl && (Il = null),
                Xn = 0,
                Cl = !1,
                25 <= l)
                    throw Error(E(301));
                if (l += 1,
                Se = J = null,
                e.updateQueue != null) {
                    var n = e.updateQueue;
                    n.lastEffect = null,
                    n.events = null,
                    n.stores = null,
                    n.memoCache != null && (n.memoCache.index = 0)
                }
                B.H = $o,
                n = t(a, o)
            } while (Cl);
            return n
        }
        function pS() {
            var e = B.H
              , t = e.useState()[0];
            return t = typeof t.then == "function" ? uu(t) : t,
            e = e.useState()[0],
            (J !== null ? J.memoizedState : null) !== e && (N.flags |= 1024),
            t
        }
        function Ac() {
            var e = jr !== 0;
            return jr = 0,
            e
        }
        function Mc(e, t, a) {
            t.updateQueue = e.updateQueue,
            t.flags &= -2053,
            e.lanes &= ~a
        }
        function Dc(e) {
            if (Xr) {
                for (e = e.memoizedState; e !== null; ) {
                    var t = e.queue;
                    t !== null && (t.pending = null),
                    e = e.next
                }
                Xr = !1
            }
            to = 0,
            Se = J = N = null,
            Cl = !1,
            Xn = jr = 0,
            Il = null
        }
        function lt() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return Se === null ? N.memoizedState = Se = e : Se = Se.next = e,
            Se
        }
        function Ce() {
            if (J === null) {
                var e = N.alternate;
                e = e !== null ? e.memoizedState : null
            } else
                e = J.next;
            var t = Se === null ? N.memoizedState : Se.next;
            if (t !== null)
                Se = t,
                J = e;
            else {
                if (e === null)
                    throw N.alternate === null ? Error(E(467)) : Error(E(310));
                J = e,
                e = {
                    memoizedState: J.memoizedState,
                    baseState: J.baseState,
                    baseQueue: J.baseQueue,
                    queue: J.queue,
                    next: null
                },
                Se === null ? N.memoizedState = Se = e : Se = Se.next = e
            }
            return Se
        }
        var gs;
        gs = function() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            }
        }
        ;
        function uu(e) {
            var t = Xn;
            return Xn += 1,
            Il === null && (Il = []),
            e = Wg(Il, e, t),
            t = N,
            (Se === null ? t.memoizedState : Se.next) === null && (t = t.alternate,
            B.H = t === null || t.memoizedState === null ? No : no),
            e
        }
        function hs(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function")
                    return uu(e);
                if (e.$$typeof === da)
                    return je(e)
            }
            throw Error(E(438, String(e)))
        }
        function kc(e) {
            var t = null
              , a = N.updateQueue;
            if (a !== null && (t = a.memoCache),
            t == null) {
                var o = N.alternate;
                o !== null && (o = o.updateQueue,
                o !== null && (o = o.memoCache,
                o != null && (t = {
                    data: o.data.map(function(l) {
                        return l.slice()
                    }),
                    index: 0
                })))
            }
            if (t == null && (t = {
                data: [],
                index: 0
            }),
            a === null && (a = gs(),
            N.updateQueue = a),
            a.memoCache = t,
            a = t.data[t.index],
            a === void 0)
                for (a = t.data[t.index] = Array(e),
                o = 0; o < e; o++)
                    a[o] = Wy;
            return t.index++,
            a
        }
        function La(e, t) {
            return typeof t == "function" ? t(e) : t
        }
        function Rr(e) {
            var t = Ce();
            return Bc(t, J, e)
        }
        function Bc(e, t, a) {
            var o = e.queue;
            if (o === null)
                throw Error(E(311));
            o.lastRenderedReducer = a;
            var l = e.baseQueue
              , n = o.pending;
            if (n !== null) {
                if (l !== null) {
                    var u = l.next;
                    l.next = n.next,
                    n.next = u
                }
                t.baseQueue = l = n,
                o.pending = null
            }
            if (n = e.baseState,
            l === null)
                e.memoizedState = n;
            else {
                t = l.next;
                var r = u = null
                  , s = null
                  , i = t
                  , f = !1;
                do {
                    var g = i.lane & -536870913;
                    if (g !== i.lane ? (X & g) === g : (to & g) === g) {
                        var m = i.revertLane;
                        if (m === 0)
                            s !== null && (s = s.next = {
                                lane: 0,
                                revertLane: 0,
                                action: i.action,
                                hasEagerState: i.hasEagerState,
                                eagerState: i.eagerState,
                                next: null
                            }),
                            g === Al && (f = !0);
                        else if ((to & m) === m) {
                            i = i.next,
                            m === Al && (f = !0);
                            continue
                        } else
                            g = {
                                lane: 0,
                                revertLane: i.revertLane,
                                action: i.action,
                                hasEagerState: i.hasEagerState,
                                eagerState: i.eagerState,
                                next: null
                            },
                            s === null ? (r = s = g,
                            u = n) : s = s.next = g,
                            N.lanes |= m,
                            oo |= m;
                        g = i.action,
                        _o && a(n, g),
                        n = i.hasEagerState ? i.eagerState : a(n, g)
                    } else
                        m = {
                            lane: g,
                            revertLane: i.revertLane,
                            action: i.action,
                            hasEagerState: i.hasEagerState,
                            eagerState: i.eagerState,
                            next: null
                        },
                        s === null ? (r = s = m,
                        u = n) : s = s.next = m,
                        N.lanes |= g,
                        oo |= g;
                    i = i.next
                } while (i !== null && i !== t);
                if (s === null ? u = n : s.next = r,
                !pt(n, e.memoizedState) && (Pe = !0,
                f && (a = Sl,
                a !== null)))
                    throw a;
                e.memoizedState = n,
                e.baseState = u,
                e.baseQueue = s,
                o.lastRenderedState = n
            }
            return l === null && (o.lanes = 0),
            [e.memoizedState, o.dispatch]
        }
        function Qi(e) {
            var t = Ce()
              , a = t.queue;
            if (a === null)
                throw Error(E(311));
            a.lastRenderedReducer = e;
            var o = a.dispatch
              , l = a.pending
              , n = t.memoizedState;
            if (l !== null) {
                a.pending = null;
                var u = l = l.next;
                do
                    n = e(n, u.action),
                    u = u.next;
                while (u !== l);
                pt(n, t.memoizedState) || (Pe = !0),
                t.memoizedState = n,
                t.baseQueue === null && (t.baseState = n),
                a.lastRenderedState = n
            }
            return [n, o]
        }
        function oh(e, t, a) {
            var o = N
              , l = Ce()
              , n = j;
            if (n) {
                if (a === void 0)
                    throw Error(E(407));
                a = a()
            } else
                a = t();
            var u = !pt((J || l).memoizedState, a);
            if (u && (l.memoizedState = a,
            Pe = !0),
            l = l.queue,
            Pc(uh.bind(null, o, l, e), [e]),
            l.getSnapshot !== t || u || Se !== null && Se.memoizedState.tag & 1) {
                if (o.flags |= 2048,
                Ml(9, nh.bind(null, o, l, a, t), {
                    destroy: void 0
                }, null),
                oe === null)
                    throw Error(E(349));
                n || (to & 60) !== 0 || lh(o, t, a)
            }
            return a
        }
        function lh(e, t, a) {
            e.flags |= 16384,
            e = {
                getSnapshot: t,
                value: a
            },
            t = N.updateQueue,
            t === null ? (t = gs(),
            N.updateQueue = t,
            t.stores = [e]) : (a = t.stores,
            a === null ? t.stores = [e] : a.push(e))
        }
        function nh(e, t, a, o) {
            t.value = a,
            t.getSnapshot = o,
            rh(t) && sh(e)
        }
        function uh(e, t, a) {
            return a(function() {
                rh(t) && sh(e)
            })
        }
        function rh(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var a = t();
                return !pt(e, a)
            } catch {
                return !0
            }
        }
        function sh(e) {
            var t = eo(e, 2);
            t !== null && et(t, e, 2)
        }
        function _f(e) {
            var t = lt();
            if (typeof e == "function") {
                var a = e;
                if (e = a(),
                _o) {
                    Va(!0);
                    try {
                        a()
                    } finally {
                        Va(!1)
                    }
                }
            }
            return t.memoizedState = t.baseState = e,
            t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: La,
                lastRenderedState: e
            },
            t
        }
        function ih(e, t, a, o) {
            return e.baseState = a,
            Bc(e, J, typeof o == "function" ? o : La)
        }
        function gS(e, t, a, o, l) {
            if (vs(e))
                throw Error(E(485));
            if (e = t.action,
            e !== null) {
                var n = {
                    payload: l,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(u) {
                        n.listeners.push(u)
                    }
                };
                B.T !== null ? a(!0) : n.isTransition = !1,
                o(n),
                a = t.pending,
                a === null ? (n.next = t.pending = n,
                fh(t, n)) : (n.next = a.next,
                t.pending = a.next = n)
            }
        }
        function fh(e, t) {
            var a = t.action
              , o = t.payload
              , l = e.state;
            if (t.isTransition) {
                var n = B.T
                  , u = {};
                B.T = u;
                try {
                    var r = a(l, o)
                      , s = B.S;
                    s !== null && s(u, r),
                    yp(e, t, r)
                } catch (i) {
                    Ff(e, t, i)
                } finally {
                    B.T = n
                }
            } else
                try {
                    n = a(l, o),
                    yp(e, t, n)
                } catch (i) {
                    Ff(e, t, i)
                }
        }
        function yp(e, t, a) {
            a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(function(o) {
                bp(e, t, o)
            }, function(o) {
                return Ff(e, t, o)
            }) : bp(e, t, a)
        }
        function bp(e, t, a) {
            t.status = "fulfilled",
            t.value = a,
            ch(t),
            e.state = a,
            t = e.pending,
            t !== null && (a = t.next,
            a === t ? e.pending = null : (a = a.next,
            t.next = a,
            fh(e, a)))
        }
        function Ff(e, t, a) {
            var o = e.pending;
            if (e.pending = null,
            o !== null) {
                o = o.next;
                do
                    t.status = "rejected",
                    t.reason = a,
                    ch(t),
                    t = t.next;
                while (t !== o)
            }
            e.action = null
        }
        function ch(e) {
            e = e.listeners;
            for (var t = 0; t < e.length; t++)
                (0,
                e[t])()
        }
        function dh(e, t) {
            return t
        }
        function mh(e, t) {
            if (j) {
                var a = oe.formState;
                if (a !== null) {
                    e: {
                        var o = N;
                        if (j) {
                            if (ze) {
                                t: {
                                    for (var l = ze, n = Xt; l.nodeType !== 8; ) {
                                        if (!n) {
                                            l = null;
                                            break t
                                        }
                                        if (l = Ut(l.nextSibling),
                                        l === null) {
                                            l = null;
                                            break t
                                        }
                                    }
                                    n = l.data,
                                    l = n === "F!" || n === "F" ? l : null
                                }
                                if (l) {
                                    ze = Ut(l.nextSibling),
                                    o = l.data === "F!";
                                    break e
                                }
                            }
                            Bo(o)
                        }
                        o = !1
                    }
                    o && (t = a[0])
                }
            }
            return a = lt(),
            a.memoizedState = a.baseState = t,
            o = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: dh,
                lastRenderedState: t
            },
            a.queue = o,
            a = Ah.bind(null, N, o),
            o.dispatch = a,
            o = _f(!1),
            n = Hc.bind(null, N, !1, o.queue),
            o = lt(),
            l = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            },
            o.queue = l,
            a = gS.bind(null, N, l, n, a),
            l.dispatch = a,
            o.memoizedState = e,
            [t, a, !1]
        }
        function ph(e) {
            var t = Ce();
            return gh(t, J, e)
        }
        function gh(e, t, a) {
            t = Bc(e, t, dh)[0],
            e = Rr(La)[0],
            t = typeof t == "object" && t !== null && typeof t.then == "function" ? uu(t) : t;
            var o = Ce()
              , l = o.queue
              , n = l.dispatch;
            return a !== o.memoizedState && (N.flags |= 2048,
            Ml(9, hS.bind(null, l, a), {
                destroy: void 0
            }, null)),
            [t, n, e]
        }
        function hS(e, t) {
            e.action = t
        }
        function hh(e) {
            var t = Ce()
              , a = J;
            if (a !== null)
                return gh(t, a, e);
            Ce(),
            t = t.memoizedState,
            a = Ce();
            var o = a.queue.dispatch;
            return a.memoizedState = e,
            [t, o, !1]
        }
        function Ml(e, t, a, o) {
            return e = {
                tag: e,
                create: t,
                inst: a,
                deps: o,
                next: null
            },
            t = N.updateQueue,
            t === null && (t = gs(),
            N.updateQueue = t),
            a = t.lastEffect,
            a === null ? t.lastEffect = e.next = e : (o = a.next,
            a.next = e,
            e.next = o,
            t.lastEffect = e),
            e
        }
        function xh() {
            return Ce().memoizedState
        }
        function Or(e, t, a, o) {
            var l = lt();
            N.flags |= e,
            l.memoizedState = Ml(1 | t, a, {
                destroy: void 0
            }, o === void 0 ? null : o)
        }
        function xs(e, t, a, o) {
            var l = Ce();
            o = o === void 0 ? null : o;
            var n = l.memoizedState.inst;
            J !== null && o !== null && Rc(o, J.memoizedState.deps) ? l.memoizedState = Ml(t, a, n, o) : (N.flags |= e,
            l.memoizedState = Ml(1 | t, a, n, o))
        }
        function Sp(e, t) {
            Or(8390656, 8, e, t)
        }
        function Pc(e, t) {
            xs(2048, 8, e, t)
        }
        function vh(e, t) {
            return xs(4, 2, e, t)
        }
        function Lh(e, t) {
            return xs(4, 4, e, t)
        }
        function yh(e, t) {
            if (typeof t == "function") {
                e = e();
                var a = t(e);
                return function() {
                    typeof a == "function" ? a() : t(null)
                }
            }
            if (t != null)
                return e = e(),
                t.current = e,
                function() {
                    t.current = null
                }
        }
        function bh(e, t, a) {
            a = a != null ? a.concat([e]) : null,
            xs(4, 4, yh.bind(null, t, e), a)
        }
        function _c() {}
        function Sh(e, t) {
            var a = Ce();
            t = t === void 0 ? null : t;
            var o = a.memoizedState;
            return t !== null && Rc(t, o[1]) ? o[0] : (a.memoizedState = [e, t],
            e)
        }
        function Ch(e, t) {
            var a = Ce();
            t = t === void 0 ? null : t;
            var o = a.memoizedState;
            if (t !== null && Rc(t, o[1]))
                return o[0];
            if (o = e(),
            _o) {
                Va(!0);
                try {
                    e()
                } finally {
                    Va(!1)
                }
            }
            return a.memoizedState = [o, t],
            o
        }
        function Fc(e, t, a) {
            return a === void 0 || (to & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = a,
            e = cx(),
            N.lanes |= e,
            oo |= e,
            a)
        }
        function Ih(e, t, a, o) {
            return pt(a, t) ? a : Ol.current !== null ? (e = Fc(e, a, o),
            pt(e, t) || (Pe = !0),
            e) : (to & 42) === 0 ? (Pe = !0,
            e.memoizedState = a) : (e = cx(),
            N.lanes |= e,
            oo |= e,
            t)
        }
        function wh(e, t, a, o, l) {
            var n = ne.p;
            ne.p = n !== 0 && 8 > n ? n : 8;
            var u = B.T
              , r = {};
            B.T = r,
            Hc(e, !1, t, a);
            try {
                var s = l()
                  , i = B.S;
                if (i !== null && i(r, s),
                s !== null && typeof s == "object" && typeof s.then == "function") {
                    var f = dS(s, o);
                    An(e, t, f, mt(e))
                } else
                    An(e, t, o, mt(e))
            } catch (g) {
                An(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: g
                }, mt())
            } finally {
                ne.p = n,
                B.T = u
            }
        }
        function xS() {}
        function Uf(e, t, a, o) {
            if (e.tag !== 5)
                throw Error(E(476));
            var l = Th(e).queue;
            wh(e, l, t, Ro, a === null ? xS : function() {
                return Eh(e),
                a(o)
            }
            )
        }
        function Th(e) {
            var t = e.memoizedState;
            if (t !== null)
                return t;
            t = {
                memoizedState: Ro,
                baseState: Ro,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: La,
                    lastRenderedState: Ro
                },
                next: null
            };
            var a = {};
            return t.next = {
                memoizedState: a,
                baseState: a,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: La,
                    lastRenderedState: a
                },
                next: null
            },
            e.memoizedState = t,
            e = e.alternate,
            e !== null && (e.memoizedState = t),
            t
        }
        function Eh(e) {
            var t = Th(e).next.queue;
            An(e, t, {}, mt())
        }
        function Uc() {
            return je(Wn)
        }
        function Rh() {
            return Ce().memoizedState
        }
        function Oh() {
            return Ce().memoizedState
        }
        function vS(e) {
            for (var t = e.return; t !== null; ) {
                switch (t.tag) {
                case 24:
                case 3:
                    var a = mt();
                    e = ja(a);
                    var o = Ya(t, e, a);
                    o !== null && (et(o, t, a),
                    Dn(o, t, a)),
                    t = {
                        cache: Tc()
                    },
                    e.payload = t;
                    return
                }
                t = t.return
            }
        }
        function LS(e, t, a) {
            var o = mt();
            a = {
                lane: o,
                revertLane: 0,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            },
            vs(e) ? Mh(t, a) : (a = Sc(e, t, a, o),
            a !== null && (et(a, e, o),
            Dh(a, t, o)))
        }
        function Ah(e, t, a) {
            var o = mt();
            An(e, t, a, o)
        }
        function An(e, t, a, o) {
            var l = {
                lane: o,
                revertLane: 0,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (vs(e))
                Mh(t, l);
            else {
                var n = e.alternate;
                if (e.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer,
                n !== null))
                    try {
                        var u = t.lastRenderedState
                          , r = n(u, a);
                        if (l.hasEagerState = !0,
                        l.eagerState = r,
                        pt(r, u))
                            return ps(e, t, l, 0),
                            oe === null && ms(),
                            !1
                    } catch {} finally {}
                if (a = Sc(e, t, l, o),
                a !== null)
                    return et(a, e, o),
                    Dh(a, t, o),
                    !0
            }
            return !1
        }
        function Hc(e, t, a, o) {
            if (o = {
                lane: 2,
                revertLane: Kc(),
                action: o,
                hasEagerState: !1,
                eagerState: null,
                next: null
            },
            vs(e)) {
                if (t)
                    throw Error(E(479))
            } else
                t = Sc(e, a, o, 2),
                t !== null && et(t, e, 2)
        }
        function vs(e) {
            var t = e.alternate;
            return e === N || t !== null && t === N
        }
        function Mh(e, t) {
            Cl = Xr = !0;
            var a = e.pending;
            a === null ? t.next = t : (t.next = a.next,
            a.next = t),
            e.pending = t
        }
        function Dh(e, t, a) {
            if ((a & 4194176) !== 0) {
                var o = t.lanes;
                o &= e.pendingLanes,
                a |= o,
                t.lanes = a,
                yg(e, a)
            }
        }
        var Qt = {
            readContext: je,
            use: hs,
            useCallback: Le,
            useContext: Le,
            useEffect: Le,
            useImperativeHandle: Le,
            useLayoutEffect: Le,
            useInsertionEffect: Le,
            useMemo: Le,
            useReducer: Le,
            useRef: Le,
            useState: Le,
            useDebugValue: Le,
            useDeferredValue: Le,
            useTransition: Le,
            useSyncExternalStore: Le,
            useId: Le
        };
        Qt.useCacheRefresh = Le;
        Qt.useMemoCache = Le;
        Qt.useHostTransitionStatus = Le;
        Qt.useFormState = Le;
        Qt.useActionState = Le;
        Qt.useOptimistic = Le;
        var No = {
            readContext: je,
            use: hs,
            useCallback: function(e, t) {
                return lt().memoizedState = [e, t === void 0 ? null : t],
                e
            },
            useContext: je,
            useEffect: Sp,
            useImperativeHandle: function(e, t, a) {
                a = a != null ? a.concat([e]) : null,
                Or(4194308, 4, yh.bind(null, t, e), a)
            },
            useLayoutEffect: function(e, t) {
                return Or(4194308, 4, e, t)
            },
            useInsertionEffect: function(e, t) {
                Or(4, 2, e, t)
            },
            useMemo: function(e, t) {
                var a = lt();
                t = t === void 0 ? null : t;
                var o = e();
                if (_o) {
                    Va(!0);
                    try {
                        e()
                    } finally {
                        Va(!1)
                    }
                }
                return a.memoizedState = [o, t],
                o
            },
            useReducer: function(e, t, a) {
                var o = lt();
                if (a !== void 0) {
                    var l = a(t);
                    if (_o) {
                        Va(!0);
                        try {
                            a(t)
                        } finally {
                            Va(!1)
                        }
                    }
                } else
                    l = t;
                return o.memoizedState = o.baseState = l,
                e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: l
                },
                o.queue = e,
                e = e.dispatch = LS.bind(null, N, e),
                [o.memoizedState, e]
            },
            useRef: function(e) {
                var t = lt();
                return e = {
                    current: e
                },
                t.memoizedState = e
            },
            useState: function(e) {
                e = _f(e);
                var t = e.queue
                  , a = Ah.bind(null, N, t);
                return t.dispatch = a,
                [e.memoizedState, a]
            },
            useDebugValue: _c,
            useDeferredValue: function(e, t) {
                var a = lt();
                return Fc(a, e, t)
            },
            useTransition: function() {
                var e = _f(!1);
                return e = wh.bind(null, N, e.queue, !0, !1),
                lt().memoizedState = e,
                [!1, e]
            },
            useSyncExternalStore: function(e, t, a) {
                var o = N
                  , l = lt();
                if (j) {
                    if (a === void 0)
                        throw Error(E(407));
                    a = a()
                } else {
                    if (a = t(),
                    oe === null)
                        throw Error(E(349));
                    (X & 60) !== 0 || lh(o, t, a)
                }
                l.memoizedState = a;
                var n = {
                    value: a,
                    getSnapshot: t
                };
                return l.queue = n,
                Sp(uh.bind(null, o, n, e), [e]),
                o.flags |= 2048,
                Ml(9, nh.bind(null, o, n, a, t), {
                    destroy: void 0
                }, null),
                a
            },
            useId: function() {
                var e = lt()
                  , t = oe.identifierPrefix;
                if (j) {
                    var a = pa
                      , o = ma;
                    a = (o & ~(1 << 32 - dt(o) - 1)).toString(32) + a,
                    t = ":" + t + "R" + a,
                    a = jr++,
                    0 < a && (t += "H" + a.toString(32)),
                    t += ":"
                } else
                    a = mS++,
                    t = ":" + t + "r" + a.toString(32) + ":";
                return e.memoizedState = t
            },
            useCacheRefresh: function() {
                return lt().memoizedState = vS.bind(null, N)
            }
        };
        No.useMemoCache = kc;
        No.useHostTransitionStatus = Uc;
        No.useFormState = mh;
        No.useActionState = mh;
        No.useOptimistic = function(e) {
            var t = lt();
            t.memoizedState = t.baseState = e;
            var a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: null,
                lastRenderedState: null
            };
            return t.queue = a,
            t = Hc.bind(null, N, !0, a),
            a.dispatch = t,
            [e, t]
        }
        ;
        var no = {
            readContext: je,
            use: hs,
            useCallback: Sh,
            useContext: je,
            useEffect: Pc,
            useImperativeHandle: bh,
            useInsertionEffect: vh,
            useLayoutEffect: Lh,
            useMemo: Ch,
            useReducer: Rr,
            useRef: xh,
            useState: function() {
                return Rr(La)
            },
            useDebugValue: _c,
            useDeferredValue: function(e, t) {
                var a = Ce();
                return Ih(a, J.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Rr(La)[0]
                  , t = Ce().memoizedState;
                return [typeof e == "boolean" ? e : uu(e), t]
            },
            useSyncExternalStore: oh,
            useId: Rh
        };
        no.useCacheRefresh = Oh;
        no.useMemoCache = kc;
        no.useHostTransitionStatus = Uc;
        no.useFormState = ph;
        no.useActionState = ph;
        no.useOptimistic = function(e, t) {
            var a = Ce();
            return ih(a, J, e, t)
        }
        ;
        var $o = {
            readContext: je,
            use: hs,
            useCallback: Sh,
            useContext: je,
            useEffect: Pc,
            useImperativeHandle: bh,
            useInsertionEffect: vh,
            useLayoutEffect: Lh,
            useMemo: Ch,
            useReducer: Qi,
            useRef: xh,
            useState: function() {
                return Qi(La)
            },
            useDebugValue: _c,
            useDeferredValue: function(e, t) {
                var a = Ce();
                return J === null ? Fc(a, e, t) : Ih(a, J.memoizedState, e, t)
            },
            useTransition: function() {
                var e = Qi(La)[0]
                  , t = Ce().memoizedState;
                return [typeof e == "boolean" ? e : uu(e), t]
            },
            useSyncExternalStore: oh,
            useId: Rh
        };
        $o.useCacheRefresh = Oh;
        $o.useMemoCache = kc;
        $o.useHostTransitionStatus = Uc;
        $o.useFormState = hh;
        $o.useActionState = hh;
        $o.useOptimistic = function(e, t) {
            var a = Ce();
            return J !== null ? ih(a, J, e, t) : (a.baseState = e,
            [e, a.queue.dispatch])
        }
        ;
        function Zi(e, t, a, o) {
            t = e.memoizedState,
            a = a(o, t),
            a = a == null ? t : ue({}, t, a),
            e.memoizedState = a,
            e.lanes === 0 && (e.updateQueue.baseState = a)
        }
        var Hf = {
            isMounted: function(e) {
                return (e = e._reactInternals) ? Pl(e) === e : !1
            },
            enqueueSetState: function(e, t, a) {
                e = e._reactInternals;
                var o = mt()
                  , l = ja(o);
                l.payload = t,
                a != null && (l.callback = a),
                t = Ya(e, l, o),
                t !== null && (et(t, e, o),
                Dn(t, e, o))
            },
            enqueueReplaceState: function(e, t, a) {
                e = e._reactInternals;
                var o = mt()
                  , l = ja(o);
                l.tag = 1,
                l.payload = t,
                a != null && (l.callback = a),
                t = Ya(e, l, o),
                t !== null && (et(t, e, o),
                Dn(t, e, o))
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var a = mt()
                  , o = ja(a);
                o.tag = 2,
                t != null && (o.callback = t),
                t = Ya(e, o, a),
                t !== null && (et(t, e, a),
                Dn(t, e, a))
            }
        };
        function Cp(e, t, a, o, l, n, u) {
            return e = e.stateNode,
            typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(o, n, u) : t.prototype && t.prototype.isPureReactComponent ? !$n(a, o) || !$n(l, n) : !0
        }
        function Ip(e, t, a, o) {
            e = t.state,
            typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, o),
            typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, o),
            t.state !== e && Hf.enqueueReplaceState(t, t.state, null)
        }
        function Fo(e, t) {
            var a = t;
            if ("ref"in t) {
                a = {};
                for (var o in t)
                    o !== "ref" && (a[o] = t[o])
            }
            if (e = e.defaultProps) {
                a === t && (a = ue({}, a));
                for (var l in e)
                    a[l] === void 0 && (a[l] = e[l])
            }
            return a
        }
        var Yr = typeof reportError == "function" ? reportError : function(e) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var t = new window.ErrorEvent("error",{
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(t))
                    return
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", e);
                return
            }
            console.error(e)
        }
        ;
        function kh(e) {
            Yr(e)
        }
        function Bh(e) {
            console.error(e)
        }
        function Ph(e) {
            Yr(e)
        }
        function Kr(e, t) {
            try {
                var a = e.onUncaughtError;
                a(t.value, {
                    componentStack: t.stack
                })
            } catch (o) {
                setTimeout(function() {
                    throw o
                })
            }
        }
        function wp(e, t, a) {
            try {
                var o = e.onCaughtError;
                o(a.value, {
                    componentStack: a.stack,
                    errorBoundary: t.tag === 1 ? t.stateNode : null
                })
            } catch (l) {
                setTimeout(function() {
                    throw l
                })
            }
        }
        function qf(e, t, a) {
            return a = ja(a),
            a.tag = 3,
            a.payload = {
                element: null
            },
            a.callback = function() {
                Kr(e, t)
            }
            ,
            a
        }
        function _h(e) {
            return e = ja(e),
            e.tag = 3,
            e
        }
        function Fh(e, t, a, o) {
            var l = a.type.getDerivedStateFromError;
            if (typeof l == "function") {
                var n = o.value;
                e.payload = function() {
                    return l(n)
                }
                ,
                e.callback = function() {
                    wp(t, a, o)
                }
            }
            var u = a.stateNode;
            u !== null && typeof u.componentDidCatch == "function" && (e.callback = function() {
                wp(t, a, o),
                typeof l != "function" && (Wa === null ? Wa = new Set([this]) : Wa.add(this));
                var r = o.stack;
                this.componentDidCatch(o.value, {
                    componentStack: r !== null ? r : ""
                })
            }
            )
        }
        function yS(e, t, a, o, l) {
            if (a.flags |= 32768,
            o !== null && typeof o == "object" && typeof o.then == "function") {
                if (t = a.alternate,
                t !== null && ru(t, a, l, !0),
                a = Ot.current,
                a !== null) {
                    switch (a.tag) {
                    case 13:
                        return Wt === null ? tc() : a.alternate === null && he === 0 && (he = 3),
                        a.flags &= -257,
                        a.flags |= 65536,
                        a.lanes = l,
                        o === kf ? a.flags |= 16384 : (t = a.updateQueue,
                        t === null ? a.updateQueue = new Set([o]) : t.add(o),
                        df(e, o, l)),
                        !1;
                    case 22:
                        return a.flags |= 65536,
                        o === kf ? a.flags |= 16384 : (t = a.updateQueue,
                        t === null ? (t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([o])
                        },
                        a.updateQueue = t) : (a = t.retryQueue,
                        a === null ? t.retryQueue = new Set([o]) : a.add(o)),
                        df(e, o, l)),
                        !1
                    }
                    throw Error(E(435, a.tag))
                }
                return df(e, o, l),
                tc(),
                !1
            }
            if (j)
                return t = Ot.current,
                t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256),
                t.flags |= 65536,
                t.lanes = l,
                o !== Df && (e = Error(E(422), {
                    cause: o
                }),
                Vn(Tt(e, a)))) : (o !== Df && (t = Error(E(423), {
                    cause: o
                }),
                Vn(Tt(t, a))),
                e = e.current.alternate,
                e.flags |= 65536,
                l &= -l,
                e.lanes |= l,
                o = Tt(o, a),
                l = qf(e.stateNode, o, l),
                lf(e, l),
                he !== 4 && (he = 2)),
                !1;
            var n = Error(E(520), {
                cause: o
            });
            if (n = Tt(n, a),
            _n === null ? _n = [n] : _n.push(n),
            he !== 4 && (he = 2),
            t === null)
                return !0;
            o = Tt(o, a),
            a = t;
            do {
                switch (a.tag) {
                case 3:
                    return a.flags |= 65536,
                    e = l & -l,
                    a.lanes |= e,
                    e = qf(a.stateNode, o, e),
                    lf(a, e),
                    !1;
                case 1:
                    if (t = a.type,
                    n = a.stateNode,
                    (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Wa === null || !Wa.has(n))))
                        return a.flags |= 65536,
                        l &= -l,
                        a.lanes |= l,
                        l = _h(l),
                        Fh(l, e, a, o),
                        lf(a, l),
                        !1
                }
                a = a.return
            } while (a !== null);
            return !1
        }
        var Uh = Error(E(461))
          , Pe = !1;
        function qe(e, t, a, o) {
            t.child = e === null ? Zg(t, null, a, o) : Po(t, e.child, a, o)
        }
        function Tp(e, t, a, o, l) {
            a = a.render;
            var n = t.ref;
            if ("ref"in o) {
                var u = {};
                for (var r in o)
                    r !== "ref" && (u[r] = o[r])
            } else
                u = o;
            return Uo(t),
            o = Oc(e, t, a, u, n, l),
            r = Ac(),
            e !== null && !Pe ? (Mc(e, t, l),
            ya(e, t, l)) : (j && r && Cc(t),
            t.flags |= 1,
            qe(e, t, o, l),
            t.child)
        }
        function Ep(e, t, a, o, l) {
            if (e === null) {
                var n = a.type;
                return typeof n == "function" && !Vc(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15,
                t.type = n,
                Hh(e, t, n, o, l)) : (e = Mr(a.type, null, o, t, t.mode, l),
                e.ref = t.ref,
                e.return = t,
                t.child = e)
            }
            if (n = e.child,
            !qc(e, l)) {
                var u = n.memoizedProps;
                if (a = a.compare,
                a = a !== null ? a : $n,
                a(u, o) && e.ref === t.ref)
                    return ya(e, t, l)
            }
            return t.flags |= 1,
            e = Ka(n, o),
            e.ref = t.ref,
            e.return = t,
            t.child = e
        }
        function Hh(e, t, a, o, l) {
            if (e !== null) {
                var n = e.memoizedProps;
                if ($n(n, o) && e.ref === t.ref)
                    if (Pe = !1,
                    t.pendingProps = o = n,
                    qc(e, l))
                        (e.flags & 131072) !== 0 && (Pe = !0);
                    else
                        return t.lanes = e.lanes,
                        ya(e, t, l)
            }
            return zf(e, t, a, o, l)
        }
        function qh(e, t, a) {
            var o = t.pendingProps
              , l = o.children
              , n = (t.stateNode._pendingVisibility & 2) !== 0
              , u = e !== null ? e.memoizedState : null;
            if (Mn(e, t),
            o.mode === "hidden" || n) {
                if ((t.flags & 128) !== 0) {
                    if (o = u !== null ? u.baseLanes | a : a,
                    e !== null) {
                        for (l = t.child = e.child,
                        n = 0; l !== null; )
                            n = n | l.lanes | l.childLanes,
                            l = l.sibling;
                        t.childLanes = n & ~o
                    } else
                        t.childLanes = 0,
                        t.child = null;
                    return Rp(e, t, o, a)
                }
                if ((a & 536870912) !== 0)
                    t.memoizedState = {
                        baseLanes: 0,
                        cachePool: null
                    },
                    e !== null && Er(t, u !== null ? u.cachePool : null),
                    u !== null ? xp(t, u) : Bf(),
                    Jg(t);
                else
                    return t.lanes = t.childLanes = 536870912,
                    Rp(e, t, u !== null ? u.baseLanes | a : a, a)
            } else
                u !== null ? (Er(t, u.cachePool),
                xp(t, u),
                za(t),
                t.memoizedState = null) : (e !== null && Er(t, null),
                Bf(),
                za(t));
            return qe(e, t, l, a),
            t.child
        }
        function Rp(e, t, a, o) {
            var l = Ec();
            return l = l === null ? null : {
                parent: Te._currentValue,
                pool: l
            },
            t.memoizedState = {
                baseLanes: a,
                cachePool: l
            },
            e !== null && Er(t, null),
            Bf(),
            Jg(t),
            e !== null && ru(e, t, o, !0),
            null
        }
        function Mn(e, t) {
            var a = t.ref;
            if (a === null)
                e !== null && e.ref !== null && (t.flags |= 2097664);
            else {
                if (typeof a != "function" && typeof a != "object")
                    throw Error(E(284));
                (e === null || e.ref !== a) && (t.flags |= 2097664)
            }
        }
        function zf(e, t, a, o, l) {
            return Uo(t),
            a = Oc(e, t, a, o, void 0, l),
            o = Ac(),
            e !== null && !Pe ? (Mc(e, t, l),
            ya(e, t, l)) : (j && o && Cc(t),
            t.flags |= 1,
            qe(e, t, a, l),
            t.child)
        }
        function Op(e, t, a, o, l, n) {
            return Uo(t),
            t.updateQueue = null,
            a = ah(t, o, a, l),
            th(e),
            o = Ac(),
            e !== null && !Pe ? (Mc(e, t, n),
            ya(e, t, n)) : (j && o && Cc(t),
            t.flags |= 1,
            qe(e, t, a, n),
            t.child)
        }
        function Ap(e, t, a, o, l) {
            if (Uo(t),
            t.stateNode === null) {
                var n = pl
                  , u = a.contextType;
                typeof u == "object" && u !== null && (n = je(u)),
                n = new a(o,n),
                t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
                n.updater = Hf,
                t.stateNode = n,
                n._reactInternals = t,
                n = t.stateNode,
                n.props = o,
                n.state = t.memoizedState,
                n.refs = {},
                zc(t),
                u = a.contextType,
                n.context = typeof u == "object" && u !== null ? je(u) : pl,
                n.state = t.memoizedState,
                u = a.getDerivedStateFromProps,
                typeof u == "function" && (Zi(t, a, u, o),
                n.state = t.memoizedState),
                typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (u = n.state,
                typeof n.componentWillMount == "function" && n.componentWillMount(),
                typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(),
                u !== n.state && Hf.enqueueReplaceState(n, n.state, null),
                Bn(t, o, n, l),
                kn(),
                n.state = t.memoizedState),
                typeof n.componentDidMount == "function" && (t.flags |= 4194308),
                o = !0
            } else if (e === null) {
                n = t.stateNode;
                var r = t.memoizedProps
                  , s = Fo(a, r);
                n.props = s;
                var i = n.context
                  , f = a.contextType;
                u = pl,
                typeof f == "object" && f !== null && (u = je(f));
                var g = a.getDerivedStateFromProps;
                f = typeof g == "function" || typeof n.getSnapshotBeforeUpdate == "function",
                r = t.pendingProps !== r,
                f || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (r || i !== u) && Ip(t, n, o, u),
                Ha = !1;
                var m = t.memoizedState;
                n.state = m,
                Bn(t, o, n, l),
                kn(),
                i = t.memoizedState,
                r || m !== i || Ha ? (typeof g == "function" && (Zi(t, a, g, o),
                i = t.memoizedState),
                (s = Ha || Cp(t, a, s, o, m, i, u)) ? (f || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(),
                typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
                t.memoizedProps = o,
                t.memoizedState = i),
                n.props = o,
                n.state = i,
                n.context = u,
                o = s) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
                o = !1)
            } else {
                n = t.stateNode,
                jf(e, t),
                u = t.memoizedProps,
                f = Fo(a, u),
                n.props = f,
                g = t.pendingProps,
                m = n.context,
                i = a.contextType,
                s = pl,
                typeof i == "object" && i !== null && (s = je(i)),
                r = a.getDerivedStateFromProps,
                (i = typeof r == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (u !== g || m !== s) && Ip(t, n, o, s),
                Ha = !1,
                m = t.memoizedState,
                n.state = m,
                Bn(t, o, n, l),
                kn();
                var c = t.memoizedState;
                u !== g || m !== c || Ha || e !== null && e.dependencies !== null && Wr(e.dependencies) ? (typeof r == "function" && (Zi(t, a, r, o),
                c = t.memoizedState),
                (f = Ha || Cp(t, a, f, o, m, c, s) || e !== null && e.dependencies !== null && Wr(e.dependencies)) ? (i || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(o, c, s),
                typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(o, c, s)),
                typeof n.componentDidUpdate == "function" && (t.flags |= 4),
                typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
                typeof n.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
                t.memoizedProps = o,
                t.memoizedState = c),
                n.props = o,
                n.state = c,
                n.context = s,
                o = f) : (typeof n.componentDidUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
                typeof n.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
                o = !1)
            }
            return n = o,
            Mn(e, t),
            o = (t.flags & 128) !== 0,
            n || o ? (n = t.stateNode,
            a = o && typeof a.getDerivedStateFromError != "function" ? null : n.render(),
            t.flags |= 1,
            e !== null && o ? (t.child = Po(t, e.child, null, l),
            t.child = Po(t, null, a, l)) : qe(e, t, a, l),
            t.memoizedState = n.state,
            e = t.child) : e = ya(e, t, l),
            e
        }
        function Mp(e, t, a, o) {
            return lu(),
            t.flags |= 256,
            qe(e, t, a, o),
            t.child
        }
        var Ji = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0
        };
        function ef(e) {
            return {
                baseLanes: e,
                cachePool: eh()
            }
        }
        function tf(e, t, a) {
            return e = e !== null ? e.childLanes & ~a : 0,
            t && (e |= Rt),
            e
        }
        function zh(e, t, a) {
            var o = t.pendingProps, l = !1, n = (t.flags & 128) !== 0, u;
            if ((u = n) || (u = e !== null && e.memoizedState === null ? !1 : (Ee.current & 2) !== 0),
            u && (l = !0,
            t.flags &= -129),
            u = (t.flags & 32) !== 0,
            t.flags &= -33,
            e === null) {
                if (j) {
                    if (l ? qa(t) : za(t),
                    j) {
                        var r = ze, s;
                        if (s = r) {
                            e: {
                                for (s = r,
                                r = Xt; s.nodeType !== 8; ) {
                                    if (!r) {
                                        r = null;
                                        break e
                                    }
                                    if (s = Ut(s.nextSibling),
                                    s === null) {
                                        r = null;
                                        break e
                                    }
                                }
                                r = s
                            }
                            r !== null ? (t.memoizedState = {
                                dehydrated: r,
                                treeContext: Oo !== null ? {
                                    id: ma,
                                    overflow: pa
                                } : null,
                                retryLane: 536870912
                            },
                            s = Et(18, null, null, 0),
                            s.stateNode = r,
                            s.return = t,
                            t.child = s,
                            Je = t,
                            ze = null,
                            s = !0) : s = !1
                        }
                        s || Bo(t)
                    }
                    if (r = t.memoizedState,
                    r !== null && (r = r.dehydrated,
                    r !== null))
                        return r.data === "$!" ? t.lanes = 16 : t.lanes = 536870912,
                        null;
                    ga(t)
                }
                return r = o.children,
                o = o.fallback,
                l ? (za(t),
                l = t.mode,
                r = $f({
                    mode: "hidden",
                    children: r
                }, l),
                o = Mo(o, l, a, null),
                r.return = t,
                o.return = t,
                r.sibling = o,
                t.child = r,
                l = t.child,
                l.memoizedState = ef(a),
                l.childLanes = tf(e, u, a),
                t.memoizedState = Ji,
                o) : (qa(t),
                Nf(t, r))
            }
            if (s = e.memoizedState,
            s !== null && (r = s.dehydrated,
            r !== null)) {
                if (n)
                    t.flags & 256 ? (qa(t),
                    t.flags &= -257,
                    t = af(e, t, a)) : t.memoizedState !== null ? (za(t),
                    t.child = e.child,
                    t.flags |= 128,
                    t = null) : (za(t),
                    l = o.fallback,
                    r = t.mode,
                    o = $f({
                        mode: "visible",
                        children: o.children
                    }, r),
                    l = Mo(l, r, a, null),
                    l.flags |= 2,
                    o.return = t,
                    l.return = t,
                    o.sibling = l,
                    t.child = o,
                    Po(t, e.child, null, a),
                    o = t.child,
                    o.memoizedState = ef(a),
                    o.childLanes = tf(e, u, a),
                    t.memoizedState = Ji,
                    t = l);
                else if (qa(t),
                r.data === "$!") {
                    if (u = r.nextSibling && r.nextSibling.dataset,
                    u)
                        var i = u.dgst;
                    u = i,
                    o = Error(E(419)),
                    o.stack = "",
                    o.digest = u,
                    Vn({
                        value: o,
                        source: null,
                        stack: null
                    }),
                    t = af(e, t, a)
                } else if (Pe || ru(e, t, a, !1),
                u = (a & e.childLanes) !== 0,
                Pe || u) {
                    if (u = oe,
                    u !== null) {
                        if (o = a & -a,
                        (o & 42) !== 0)
                            o = 1;
                        else
                            switch (o) {
                            case 2:
                                o = 1;
                                break;
                            case 8:
                                o = 4;
                                break;
                            case 32:
                                o = 16;
                                break;
                            case 128:
                            case 256:
                            case 512:
                            case 1024:
                            case 2048:
                            case 4096:
                            case 8192:
                            case 16384:
                            case 32768:
                            case 65536:
                            case 131072:
                            case 262144:
                            case 524288:
                            case 1048576:
                            case 2097152:
                            case 4194304:
                            case 8388608:
                            case 16777216:
                            case 33554432:
                                o = 64;
                                break;
                            case 268435456:
                                o = 134217728;
                                break;
                            default:
                                o = 0
                            }
                        if (o = (o & (u.suspendedLanes | a)) !== 0 ? 0 : o,
                        o !== 0 && o !== s.retryLane)
                            throw s.retryLane = o,
                            eo(e, o),
                            et(u, e, o),
                            Uh
                    }
                    r.data === "$?" || tc(),
                    t = af(e, t, a)
                } else
                    r.data === "$?" ? (t.flags |= 128,
                    t.child = e.child,
                    t = PS.bind(null, e),
                    r._reactRetry = t,
                    t = null) : (e = s.treeContext,
                    ze = Ut(r.nextSibling),
                    Je = t,
                    j = !0,
                    Ft = null,
                    Xt = !1,
                    e !== null && (Ct[It++] = ma,
                    Ct[It++] = pa,
                    Ct[It++] = Oo,
                    ma = e.id,
                    pa = e.overflow,
                    Oo = t),
                    t = Nf(t, o.children),
                    t.flags |= 4096);
                return t
            }
            return l ? (za(t),
            l = o.fallback,
            r = t.mode,
            s = e.child,
            i = s.sibling,
            o = Ka(s, {
                mode: "hidden",
                children: o.children
            }),
            o.subtreeFlags = s.subtreeFlags & 31457280,
            i !== null ? l = Ka(i, l) : (l = Mo(l, r, a, null),
            l.flags |= 2),
            l.return = t,
            o.return = t,
            o.sibling = l,
            t.child = o,
            o = l,
            l = t.child,
            r = e.child.memoizedState,
            r === null ? r = ef(a) : (s = r.cachePool,
            s !== null ? (i = Te._currentValue,
            s = s.parent !== i ? {
                parent: i,
                pool: i
            } : s) : s = eh(),
            r = {
                baseLanes: r.baseLanes | a,
                cachePool: s
            }),
            l.memoizedState = r,
            l.childLanes = tf(e, u, a),
            t.memoizedState = Ji,
            o) : (qa(t),
            a = e.child,
            e = a.sibling,
            a = Ka(a, {
                mode: "visible",
                children: o.children
            }),
            a.return = t,
            a.sibling = null,
            e !== null && (u = t.deletions,
            u === null ? (t.deletions = [e],
            t.flags |= 16) : u.push(e)),
            t.child = a,
            t.memoizedState = null,
            a)
        }
        function Nf(e, t) {
            return t = $f({
                mode: "visible",
                children: t
            }, e.mode),
            t.return = e,
            e.child = t
        }
        function $f(e, t) {
            return ix(e, t, 0, null)
        }
        function af(e, t, a) {
            return Po(t, e.child, null, a),
            e = Nf(t, t.pendingProps.children),
            e.flags |= 2,
            t.memoizedState = null,
            e
        }
        function Dp(e, t, a) {
            e.lanes |= t;
            var o = e.alternate;
            o !== null && (o.lanes |= t),
            Gf(e.return, t, a)
        }
        function of(e, t, a, o, l) {
            var n = e.memoizedState;
            n === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: o,
                tail: a,
                tailMode: l
            } : (n.isBackwards = t,
            n.rendering = null,
            n.renderingStartTime = 0,
            n.last = o,
            n.tail = a,
            n.tailMode = l)
        }
        function Nh(e, t, a) {
            var o = t.pendingProps
              , l = o.revealOrder
              , n = o.tail;
            if (qe(e, t, o.children, a),
            o = Ee.current,
            (o & 2) !== 0)
                o = o & 1 | 2,
                t.flags |= 128;
            else {
                if (e !== null && (e.flags & 128) !== 0)
                    e: for (e = t.child; e !== null; ) {
                        if (e.tag === 13)
                            e.memoizedState !== null && Dp(e, a, t);
                        else if (e.tag === 19)
                            Dp(e, a, t);
                        else if (e.child !== null) {
                            e.child.return = e,
                            e = e.child;
                            continue
                        }
                        if (e === t)
                            break e;
                        for (; e.sibling === null; ) {
                            if (e.return === null || e.return === t)
                                break e;
                            e = e.return
                        }
                        e.sibling.return = e.return,
                        e = e.sibling
                    }
                o &= 1
            }
            switch (fe(Ee, o),
            l) {
            case "forwards":
                for (a = t.child,
                l = null; a !== null; )
                    e = a.alternate,
                    e !== null && Gr(e) === null && (l = a),
                    a = a.sibling;
                a = l,
                a === null ? (l = t.child,
                t.child = null) : (l = a.sibling,
                a.sibling = null),
                of(t, !1, l, a, n);
                break;
            case "backwards":
                for (a = null,
                l = t.child,
                t.child = null; l !== null; ) {
                    if (e = l.alternate,
                    e !== null && Gr(e) === null) {
                        t.child = l;
                        break
                    }
                    e = l.sibling,
                    l.sibling = a,
                    a = l,
                    l = e
                }
                of(t, !0, a, null, n);
                break;
            case "together":
                of(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null
            }
            return t.child
        }
        function ya(e, t, a) {
            if (e !== null && (t.dependencies = e.dependencies),
            oo |= t.lanes,
            (a & t.childLanes) === 0)
                if (e !== null) {
                    if (ru(e, t, a, !1),
                    (a & t.childLanes) === 0)
                        return null
                } else
                    return null;
            if (e !== null && t.child !== e.child)
                throw Error(E(153));
            if (t.child !== null) {
                for (e = t.child,
                a = Ka(e, e.pendingProps),
                t.child = a,
                a.return = t; e.sibling !== null; )
                    e = e.sibling,
                    a = a.sibling = Ka(e, e.pendingProps),
                    a.return = t;
                a.sibling = null
            }
            return t.child
        }
        function qc(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies,
            !!(e !== null && Wr(e)))
        }
        function bS(e, t, a) {
            switch (t.tag) {
            case 3:
                _r(t, t.stateNode.containerInfo),
                Na(t, Te, e.memoizedState.cache),
                lu();
                break;
            case 27:
            case 5:
                Cf(t);
                break;
            case 4:
                _r(t, t.stateNode.containerInfo);
                break;
            case 10:
                Na(t, t.type, t.memoizedProps.value);
                break;
            case 13:
                var o = t.memoizedState;
                if (o !== null)
                    return o.dehydrated !== null ? (qa(t),
                    t.flags |= 128,
                    null) : (a & t.child.childLanes) !== 0 ? zh(e, t, a) : (qa(t),
                    e = ya(e, t, a),
                    e !== null ? e.sibling : null);
                qa(t);
                break;
            case 19:
                var l = (e.flags & 128) !== 0;
                if (o = (a & t.childLanes) !== 0,
                o || (ru(e, t, a, !1),
                o = (a & t.childLanes) !== 0),
                l) {
                    if (o)
                        return Nh(e, t, a);
                    t.flags |= 128
                }
                if (l = t.memoizedState,
                l !== null && (l.rendering = null,
                l.tail = null,
                l.lastEffect = null),
                fe(Ee, Ee.current),
                o)
                    break;
                return null;
            case 22:
            case 23:
                return t.lanes = 0,
                qh(e, t, a);
            case 24:
                Na(t, Te, e.memoizedState.cache)
            }
            return ya(e, t, a)
        }
        function $h(e, t, a) {
            if (e !== null)
                if (e.memoizedProps !== t.pendingProps)
                    Pe = !0;
                else {
                    if (!qc(e, a) && (t.flags & 128) === 0)
                        return Pe = !1,
                        bS(e, t, a);
                    Pe = (e.flags & 131072) !== 0
                }
            else
                Pe = !1,
                j && (t.flags & 1048576) !== 0 && Yg(t, $r, t.index);
            switch (t.lanes = 0,
            t.tag) {
            case 16:
                e: {
                    e = t.pendingProps;
                    var o = t.elementType
                      , l = o._init;
                    if (o = l(o._payload),
                    t.type = o,
                    typeof o == "function")
                        Vc(o) ? (e = Fo(o, e),
                        t.tag = 1,
                        t = Ap(null, t, o, e, a)) : (t.tag = 0,
                        t = zf(null, t, o, e, a));
                    else {
                        if (o != null) {
                            if (l = o.$$typeof,
                            l === cc) {
                                t.tag = 11,
                                t = Tp(null, t, o, e, a);
                                break e
                            } else if (l === dc) {
                                t.tag = 14,
                                t = Ep(null, t, o, e, a);
                                break e
                            }
                        }
                        throw t = bf(o) || o,
                        Error(E(306, t, ""))
                    }
                }
                return t;
            case 0:
                return zf(e, t, t.type, t.pendingProps, a);
            case 1:
                return o = t.type,
                l = Fo(o, t.pendingProps),
                Ap(e, t, o, l, a);
            case 3:
                e: {
                    if (_r(t, t.stateNode.containerInfo),
                    e === null)
                        throw Error(E(387));
                    var n = t.pendingProps;
                    l = t.memoizedState,
                    o = l.element,
                    jf(e, t),
                    Bn(t, n, null, a);
                    var u = t.memoizedState;
                    if (n = u.cache,
                    Na(t, Te, n),
                    n !== l.cache && Xf(t, [Te], a, !0),
                    kn(),
                    n = u.element,
                    l.isDehydrated)
                        if (l = {
                            element: n,
                            isDehydrated: !1,
                            cache: u.cache
                        },
                        t.updateQueue.baseState = l,
                        t.memoizedState = l,
                        t.flags & 256) {
                            t = Mp(e, t, n, a);
                            break e
                        } else if (n !== o) {
                            o = Tt(Error(E(424)), t),
                            Vn(o),
                            t = Mp(e, t, n, a);
                            break e
                        } else
                            for (ze = Ut(t.stateNode.containerInfo.firstChild),
                            Je = t,
                            j = !0,
                            Ft = null,
                            Xt = !0,
                            a = Zg(t, null, n, a),
                            t.child = a; a; )
                                a.flags = a.flags & -3 | 4096,
                                a = a.sibling;
                    else {
                        if (lu(),
                        n === o) {
                            t = ya(e, t, a);
                            break e
                        }
                        qe(e, t, n, a)
                    }
                    t = t.child
                }
                return t;
            case 26:
                return Mn(e, t),
                e === null ? (a = Zp(t.type, null, t.pendingProps, null)) ? t.memoizedState = a : j || (a = t.type,
                e = t.pendingProps,
                o = os(Xa.current).createElement(a),
                o[Xe] = t,
                o[nt] = e,
                Ne(o, a, e),
                Be(o),
                t.stateNode = o) : t.memoizedState = Zp(t.type, e.memoizedProps, t.pendingProps, e.memoizedState),
                null;
            case 27:
                return Cf(t),
                e === null && j && (o = t.stateNode = Ex(t.type, t.pendingProps, Xa.current),
                Je = t,
                Xt = !0,
                ze = Ut(o.firstChild)),
                o = t.pendingProps.children,
                e !== null || j ? qe(e, t, o, a) : t.child = Po(t, null, o, a),
                Mn(e, t),
                t.child;
            case 5:
                return e === null && j && ((l = o = ze) && (o = KS(o, t.type, t.pendingProps, Xt),
                o !== null ? (t.stateNode = o,
                Je = t,
                ze = Ut(o.firstChild),
                Xt = !1,
                l = !0) : l = !1),
                l || Bo(t)),
                Cf(t),
                l = t.type,
                n = t.pendingProps,
                u = e !== null ? e.memoizedProps : null,
                o = n.children,
                uc(l, n) ? o = null : u !== null && uc(l, u) && (t.flags |= 32),
                t.memoizedState !== null && (l = Oc(e, t, pS, null, null, a),
                Wn._currentValue = l),
                Mn(e, t),
                qe(e, t, o, a),
                t.child;
            case 6:
                return e === null && j && ((e = a = ze) && (a = WS(a, t.pendingProps, Xt),
                a !== null ? (t.stateNode = a,
                Je = t,
                ze = null,
                e = !0) : e = !1),
                e || Bo(t)),
                null;
            case 13:
                return zh(e, t, a);
            case 4:
                return _r(t, t.stateNode.containerInfo),
                o = t.pendingProps,
                e === null ? t.child = Po(t, null, o, a) : qe(e, t, o, a),
                t.child;
            case 11:
                return Tp(e, t, t.type, t.pendingProps, a);
            case 7:
                return qe(e, t, t.pendingProps, a),
                t.child;
            case 8:
                return qe(e, t, t.pendingProps.children, a),
                t.child;
            case 12:
                return qe(e, t, t.pendingProps.children, a),
                t.child;
            case 10:
                return o = t.pendingProps,
                Na(t, t.type, o.value),
                qe(e, t, o.children, a),
                t.child;
            case 9:
                return l = t.type._context,
                o = t.pendingProps.children,
                Uo(t),
                l = je(l),
                o = o(l),
                t.flags |= 1,
                qe(e, t, o, a),
                t.child;
            case 14:
                return Ep(e, t, t.type, t.pendingProps, a);
            case 15:
                return Hh(e, t, t.type, t.pendingProps, a);
            case 19:
                return Nh(e, t, a);
            case 22:
                return qh(e, t, a);
            case 24:
                return Uo(t),
                o = je(Te),
                e === null ? (l = Ec(),
                l === null && (l = oe,
                n = Tc(),
                l.pooledCache = n,
                n.refCount++,
                n !== null && (l.pooledCacheLanes |= a),
                l = n),
                t.memoizedState = {
                    parent: o,
                    cache: l
                },
                zc(t),
                Na(t, Te, l)) : ((e.lanes & a) !== 0 && (jf(e, t),
                Bn(t, null, null, a),
                kn()),
                l = e.memoizedState,
                n = t.memoizedState,
                l.parent !== o ? (l = {
                    parent: o,
                    cache: o
                },
                t.memoizedState = l,
                t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l),
                Na(t, Te, o)) : (o = n.cache,
                Na(t, Te, o),
                o !== l.cache && Xf(t, [Te], a, !0))),
                qe(e, t, t.pendingProps.children, a),
                t.child;
            case 29:
                throw t.pendingProps
            }
            throw Error(E(156, t.tag))
        }
        var Vf = Zt(null)
          , Vo = null
          , ha = null;
        function Na(e, t, a) {
            fe(Vf, t._currentValue),
            t._currentValue = a
        }
        function xa(e) {
            e._currentValue = Vf.current,
            _e(Vf)
        }
        function Gf(e, t, a) {
            for (; e !== null; ) {
                var o = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t,
                o !== null && (o.childLanes |= t)) : o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
                e === a)
                    break;
                e = e.return
            }
        }
        function Xf(e, t, a, o) {
            var l = e.child;
            for (l !== null && (l.return = e); l !== null; ) {
                var n = l.dependencies;
                if (n !== null) {
                    var u = l.child;
                    n = n.firstContext;
                    e: for (; n !== null; ) {
                        var r = n;
                        n = l;
                        for (var s = 0; s < t.length; s++)
                            if (r.context === t[s]) {
                                n.lanes |= a,
                                r = n.alternate,
                                r !== null && (r.lanes |= a),
                                Gf(n.return, a, e),
                                o || (u = null);
                                break e
                            }
                        n = r.next
                    }
                } else if (l.tag === 18) {
                    if (u = l.return,
                    u === null)
                        throw Error(E(341));
                    u.lanes |= a,
                    n = u.alternate,
                    n !== null && (n.lanes |= a),
                    Gf(u, a, e),
                    u = null
                } else
                    u = l.child;
                if (u !== null)
                    u.return = l;
                else
                    for (u = l; u !== null; ) {
                        if (u === e) {
                            u = null;
                            break
                        }
                        if (l = u.sibling,
                        l !== null) {
                            l.return = u.return,
                            u = l;
                            break
                        }
                        u = u.return
                    }
                l = u
            }
        }
        function ru(e, t, a, o) {
            e = null;
            for (var l = t, n = !1; l !== null; ) {
                if (!n) {
                    if ((l.flags & 524288) !== 0)
                        n = !0;
                    else if ((l.flags & 262144) !== 0)
                        break
                }
                if (l.tag === 10) {
                    var u = l.alternate;
                    if (u === null)
                        throw Error(E(387));
                    if (u = u.memoizedProps,
                    u !== null) {
                        var r = l.type;
                        pt(l.pendingProps.value, u.value) || (e !== null ? e.push(r) : e = [r])
                    }
                } else if (l === Pr.current) {
                    if (u = l.alternate,
                    u === null)
                        throw Error(E(387));
                    u.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(Wn) : e = [Wn])
                }
                l = l.return
            }
            e !== null && Xf(t, e, a, o),
            t.flags |= 262144
        }
        function Wr(e) {
            for (e = e.firstContext; e !== null; ) {
                if (!pt(e.context._currentValue, e.memoizedValue))
                    return !0;
                e = e.next
            }
            return !1
        }
        function Uo(e) {
            Vo = e,
            ha = null,
            e = e.dependencies,
            e !== null && (e.firstContext = null)
        }
        function je(e) {
            return Vh(Vo, e)
        }
        function gr(e, t) {
            return Vo === null && Uo(e),
            Vh(e, t)
        }
        function Vh(e, t) {
            var a = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: a,
                next: null
            },
            ha === null) {
                if (e === null)
                    throw Error(E(308));
                ha = t,
                e.dependencies = {
                    lanes: 0,
                    firstContext: t
                },
                e.flags |= 524288
            } else
                ha = ha.next = t;
            return a
        }
        var Ha = !1;
        function zc(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    lanes: 0,
                    hiddenCallbacks: null
                },
                callbacks: null
            }
        }
        function jf(e, t) {
            e = e.updateQueue,
            t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            })
        }
        function ja(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            }
        }
        function Ya(e, t, a) {
            var o = e.updateQueue;
            if (o === null)
                return null;
            if (o = o.shared,
            (pe & 2) !== 0) {
                var l = o.pending;
                return l === null ? t.next = t : (t.next = l.next,
                l.next = t),
                o.pending = t,
                t = zr(e),
                jg(e, null, a),
                t
            }
            return ps(e, o, t, a),
            zr(e)
        }
        function Dn(e, t, a) {
            if (t = t.updateQueue,
            t !== null && (t = t.shared,
            (a & 4194176) !== 0)) {
                var o = t.lanes;
                o &= e.pendingLanes,
                a |= o,
                t.lanes = a,
                yg(e, a)
            }
        }
        function lf(e, t) {
            var a = e.updateQueue
              , o = e.alternate;
            if (o !== null && (o = o.updateQueue,
            a === o)) {
                var l = null
                  , n = null;
                if (a = a.firstBaseUpdate,
                a !== null) {
                    do {
                        var u = {
                            lane: a.lane,
                            tag: a.tag,
                            payload: a.payload,
                            callback: null,
                            next: null
                        };
                        n === null ? l = n = u : n = n.next = u,
                        a = a.next
                    } while (a !== null);
                    n === null ? l = n = t : n = n.next = t
                } else
                    l = n = t;
                a = {
                    baseState: o.baseState,
                    firstBaseUpdate: l,
                    lastBaseUpdate: n,
                    shared: o.shared,
                    callbacks: o.callbacks
                },
                e.updateQueue = a;
                return
            }
            e = a.lastBaseUpdate,
            e === null ? a.firstBaseUpdate = t : e.next = t,
            a.lastBaseUpdate = t
        }
        var Yf = !1;
        function kn() {
            if (Yf) {
                var e = Sl;
                if (e !== null)
                    throw e
            }
        }
        function Bn(e, t, a, o) {
            Yf = !1;
            var l = e.updateQueue;
            Ha = !1;
            var n = l.firstBaseUpdate
              , u = l.lastBaseUpdate
              , r = l.shared.pending;
            if (r !== null) {
                l.shared.pending = null;
                var s = r
                  , i = s.next;
                s.next = null,
                u === null ? n = i : u.next = i,
                u = s;
                var f = e.alternate;
                f !== null && (f = f.updateQueue,
                r = f.lastBaseUpdate,
                r !== u && (r === null ? f.firstBaseUpdate = i : r.next = i,
                f.lastBaseUpdate = s))
            }
            if (n !== null) {
                var g = l.baseState;
                u = 0,
                f = i = s = null,
                r = n;
                do {
                    var m = r.lane & -536870913
                      , c = m !== r.lane;
                    if (c ? (X & m) === m : (o & m) === m) {
                        m !== 0 && m === Al && (Yf = !0),
                        f !== null && (f = f.next = {
                            lane: 0,
                            tag: r.tag,
                            payload: r.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var x = e
                              , L = r;
                            m = t;
                            var S = a;
                            switch (L.tag) {
                            case 1:
                                if (x = L.payload,
                                typeof x == "function") {
                                    g = x.call(S, g, m);
                                    break e
                                }
                                g = x;
                                break e;
                            case 3:
                                x.flags = x.flags & -65537 | 128;
                            case 0:
                                if (x = L.payload,
                                m = typeof x == "function" ? x.call(S, g, m) : x,
                                m == null)
                                    break e;
                                g = ue({}, g, m);
                                break e;
                            case 2:
                                Ha = !0
                            }
                        }
                        m = r.callback,
                        m !== null && (e.flags |= 64,
                        c && (e.flags |= 8192),
                        c = l.callbacks,
                        c === null ? l.callbacks = [m] : c.push(m))
                    } else
                        c = {
                            lane: m,
                            tag: r.tag,
                            payload: r.payload,
                            callback: r.callback,
                            next: null
                        },
                        f === null ? (i = f = c,
                        s = g) : f = f.next = c,
                        u |= m;
                    if (r = r.next,
                    r === null) {
                        if (r = l.shared.pending,
                        r === null)
                            break;
                        c = r,
                        r = c.next,
                        c.next = null,
                        l.lastBaseUpdate = c,
                        l.shared.pending = null
                    }
                } while (!0);
                f === null && (s = g),
                l.baseState = s,
                l.firstBaseUpdate = i,
                l.lastBaseUpdate = f,
                n === null && (l.shared.lanes = 0),
                oo |= u,
                e.lanes = u,
                e.memoizedState = g
            }
        }
        function Gh(e, t) {
            if (typeof e != "function")
                throw Error(E(191, e));
            e.call(t)
        }
        function Xh(e, t) {
            var a = e.callbacks;
            if (a !== null)
                for (e.callbacks = null,
                e = 0; e < a.length; e++)
                    Gh(a[e], t)
        }
        function su(e, t) {
            try {
                var a = t.updateQueue
                  , o = a !== null ? a.lastEffect : null;
                if (o !== null) {
                    var l = o.next;
                    a = l;
                    do {
                        if ((a.tag & e) === e) {
                            o = void 0;
                            var n = a.create
                              , u = a.inst;
                            o = n(),
                            u.destroy = o
                        }
                        a = a.next
                    } while (a !== l)
                }
            } catch (r) {
                te(t, t.return, r)
            }
        }
        function ao(e, t, a) {
            try {
                var o = t.updateQueue
                  , l = o !== null ? o.lastEffect : null;
                if (l !== null) {
                    var n = l.next;
                    o = n;
                    do {
                        if ((o.tag & e) === e) {
                            var u = o.inst
                              , r = u.destroy;
                            if (r !== void 0) {
                                u.destroy = void 0,
                                l = t;
                                var s = a;
                                try {
                                    r()
                                } catch (i) {
                                    te(l, s, i)
                                }
                            }
                        }
                        o = o.next
                    } while (o !== n)
                }
            } catch (i) {
                te(t, t.return, i)
            }
        }
        function jh(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var a = e.stateNode;
                try {
                    Xh(t, a)
                } catch (o) {
                    te(e, e.return, o)
                }
            }
        }
        function Yh(e, t, a) {
            a.props = Fo(e.type, e.memoizedProps),
            a.state = e.memoizedState;
            try {
                a.componentWillUnmount()
            } catch (o) {
                te(e, t, o)
            }
        }
        function Eo(e, t) {
            try {
                var a = e.ref;
                if (a !== null) {
                    var o = e.stateNode;
                    switch (e.tag) {
                    case 26:
                    case 27:
                    case 5:
                        var l = o;
                        break;
                    default:
                        l = o
                    }
                    typeof a == "function" ? e.refCleanup = a(l) : a.current = l
                }
            } catch (n) {
                te(e, t, n)
            }
        }
        function ft(e, t) {
            var a = e.ref
              , o = e.refCleanup;
            if (a !== null)
                if (typeof o == "function")
                    try {
                        o()
                    } catch (l) {
                        te(e, t, l)
                    } finally {
                        e.refCleanup = null,
                        e = e.alternate,
                        e != null && (e.refCleanup = null)
                    }
                else if (typeof a == "function")
                    try {
                        a(null)
                    } catch (l) {
                        te(e, t, l)
                    }
                else
                    a.current = null
        }
        function Kh(e) {
            var t = e.type
              , a = e.memoizedProps
              , o = e.stateNode;
            try {
                e: switch (t) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                    a.autoFocus && o.focus();
                    break e;
                case "img":
                    a.src ? o.src = a.src : a.srcSet && (o.srcset = a.srcSet)
                }
            } catch (l) {
                te(e, e.return, l)
            }
        }
        function kp(e, t, a) {
            try {
                var o = e.stateNode;
                VS(o, e.type, a, t),
                o[nt] = t
            } catch (l) {
                te(e, e.return, l)
            }
        }
        function Wh(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 || e.tag === 4
        }
        function nf(e) {
            e: for (; ; ) {
                for (; e.sibling === null; ) {
                    if (e.return === null || Wh(e.return))
                        return null;
                    e = e.return
                }
                for (e.sibling.return = e.return,
                e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 27 && e.tag !== 18; ) {
                    if (e.flags & 2 || e.child === null || e.tag === 4)
                        continue e;
                    e.child.return = e,
                    e = e.child
                }
                if (!(e.flags & 2))
                    return e.stateNode
            }
        }
        function Kf(e, t, a) {
            var o = e.tag;
            if (o === 5 || o === 6)
                e = e.stateNode,
                t ? a.nodeType === 8 ? a.parentNode.insertBefore(e, t) : a.insertBefore(e, t) : (a.nodeType === 8 ? (t = a.parentNode,
                t.insertBefore(e, a)) : (t = a,
                t.appendChild(e)),
                a = a._reactRootContainer,
                a != null || t.onclick !== null || (t.onclick = bs));
            else if (o !== 4 && o !== 27 && (e = e.child,
            e !== null))
                for (Kf(e, t, a),
                e = e.sibling; e !== null; )
                    Kf(e, t, a),
                    e = e.sibling
        }
        function Qr(e, t, a) {
            var o = e.tag;
            if (o === 5 || o === 6)
                e = e.stateNode,
                t ? a.insertBefore(e, t) : a.appendChild(e);
            else if (o !== 4 && o !== 27 && (e = e.child,
            e !== null))
                for (Qr(e, t, a),
                e = e.sibling; e !== null; )
                    Qr(e, t, a),
                    e = e.sibling
        }
        var ia = !1
          , ge = !1
          , uf = !1
          , Bp = typeof WeakSet == "function" ? WeakSet : Set
          , ke = null
          , Pp = !1;
        function SS(e, t) {
            if (e = e.containerInfo,
            lc = rs,
            e = qg(e),
            yc(e)) {
                if ("selectionStart"in e)
                    var a = {
                        start: e.selectionStart,
                        end: e.selectionEnd
                    };
                else
                    e: {
                        a = (a = e.ownerDocument) && a.defaultView || window;
                        var o = a.getSelection && a.getSelection();
                        if (o && o.rangeCount !== 0) {
                            a = o.anchorNode;
                            var l = o.anchorOffset
                              , n = o.focusNode;
                            o = o.focusOffset;
                            try {
                                a.nodeType,
                                n.nodeType
                            } catch {
                                a = null;
                                break e
                            }
                            var u = 0
                              , r = -1
                              , s = -1
                              , i = 0
                              , f = 0
                              , g = e
                              , m = null;
                            t: for (; ; ) {
                                for (var c; g !== a || l !== 0 && g.nodeType !== 3 || (r = u + l),
                                g !== n || o !== 0 && g.nodeType !== 3 || (s = u + o),
                                g.nodeType === 3 && (u += g.nodeValue.length),
                                (c = g.firstChild) !== null; )
                                    m = g,
                                    g = c;
                                for (; ; ) {
                                    if (g === e)
                                        break t;
                                    if (m === a && ++i === l && (r = u),
                                    m === n && ++f === o && (s = u),
                                    (c = g.nextSibling) !== null)
                                        break;
                                    g = m,
                                    m = g.parentNode
                                }
                                g = c
                            }
                            a = r === -1 || s === -1 ? null : {
                                start: r,
                                end: s
                            }
                        } else
                            a = null
                    }
                a = a || {
                    start: 0,
                    end: 0
                }
            } else
                a = null;
            for (nc = {
                focusedElem: e,
                selectionRange: a
            },
            rs = !1,
            ke = t; ke !== null; )
                if (t = ke,
                e = t.child,
                (t.subtreeFlags & 1028) !== 0 && e !== null)
                    e.return = t,
                    ke = e;
                else
                    for (; ke !== null; ) {
                        switch (t = ke,
                        n = t.alternate,
                        e = t.flags,
                        t.tag) {
                        case 0:
                            break;
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if ((e & 1024) !== 0 && n !== null) {
                                e = void 0,
                                a = t,
                                l = n.memoizedProps,
                                n = n.memoizedState,
                                o = a.stateNode;
                                try {
                                    var x = Fo(a.type, l, a.elementType === a.type);
                                    e = o.getSnapshotBeforeUpdate(x, n),
                                    o.__reactInternalSnapshotBeforeUpdate = e
                                } catch (L) {
                                    te(a, a.return, L)
                                }
                            }
                            break;
                        case 3:
                            if ((e & 1024) !== 0) {
                                if (e = t.stateNode.containerInfo,
                                a = e.nodeType,
                                a === 9)
                                    rc(e);
                                else if (a === 1)
                                    switch (e.nodeName) {
                                    case "HEAD":
                                    case "HTML":
                                    case "BODY":
                                        rc(e);
                                        break;
                                    default:
                                        e.textContent = ""
                                    }
                            }
                            break;
                        case 5:
                        case 26:
                        case 27:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            if ((e & 1024) !== 0)
                                throw Error(E(163))
                        }
                        if (e = t.sibling,
                        e !== null) {
                            e.return = t.return,
                            ke = e;
                            break
                        }
                        ke = t.return
                    }
            return x = Pp,
            Pp = !1,
            x
        }
        function Qh(e, t, a) {
            var o = a.flags;
            switch (a.tag) {
            case 0:
            case 11:
            case 15:
                ra(e, a),
                o & 4 && su(5, a);
                break;
            case 1:
                if (ra(e, a),
                o & 4)
                    if (e = a.stateNode,
                    t === null)
                        try {
                            e.componentDidMount()
                        } catch (r) {
                            te(a, a.return, r)
                        }
                    else {
                        var l = Fo(a.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(l, t, e.__reactInternalSnapshotBeforeUpdate)
                        } catch (r) {
                            te(a, a.return, r)
                        }
                    }
                o & 64 && jh(a),
                o & 512 && Eo(a, a.return);
                break;
            case 3:
                if (ra(e, a),
                o & 64 && (o = a.updateQueue,
                o !== null)) {
                    if (e = null,
                    a.child !== null)
                        switch (a.child.tag) {
                        case 27:
                        case 5:
                            e = a.child.stateNode;
                            break;
                        case 1:
                            e = a.child.stateNode
                        }
                    try {
                        Xh(o, e)
                    } catch (r) {
                        te(a, a.return, r)
                    }
                }
                break;
            case 26:
                ra(e, a),
                o & 512 && Eo(a, a.return);
                break;
            case 27:
            case 5:
                ra(e, a),
                t === null && o & 4 && Kh(a),
                o & 512 && Eo(a, a.return);
                break;
            case 12:
                ra(e, a);
                break;
            case 13:
                ra(e, a),
                o & 4 && ex(e, a);
                break;
            case 22:
                if (l = a.memoizedState !== null || ia,
                !l) {
                    t = t !== null && t.memoizedState !== null || ge;
                    var n = ia
                      , u = ge;
                    ia = l,
                    (ge = t) && !u ? Fa(e, a, (a.subtreeFlags & 8772) !== 0) : ra(e, a),
                    ia = n,
                    ge = u
                }
                o & 512 && (a.memoizedProps.mode === "manual" ? Eo(a, a.return) : ft(a, a.return));
                break;
            default:
                ra(e, a)
            }
        }
        function Zh(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null,
            Zh(t)),
            e.child = null,
            e.deletions = null,
            e.sibling = null,
            e.tag === 5 && (t = e.stateNode,
            t !== null && pc(t)),
            e.stateNode = null,
            e.return = null,
            e.dependencies = null,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.pendingProps = null,
            e.stateNode = null,
            e.updateQueue = null
        }
        var be = null
          , st = !1;
        function ua(e, t, a) {
            for (a = a.child; a !== null; )
                Jh(e, t, a),
                a = a.sibling
        }
        function Jh(e, t, a) {
            if (ct && typeof ct.onCommitFiberUnmount == "function")
                try {
                    ct.onCommitFiberUnmount(eu, a)
                } catch {}
            switch (a.tag) {
            case 26:
                ge || ft(a, t),
                ua(e, t, a),
                a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode,
                a.parentNode.removeChild(a));
                break;
            case 27:
                ge || ft(a, t);
                var o = be
                  , l = st;
                for (be = a.stateNode,
                ua(e, t, a),
                a = a.stateNode,
                t = a.attributes; t.length; )
                    a.removeAttributeNode(t[0]);
                pc(a),
                be = o,
                st = l;
                break;
            case 5:
                ge || ft(a, t);
            case 6:
                l = be;
                var n = st;
                if (be = null,
                ua(e, t, a),
                be = l,
                st = n,
                be !== null)
                    if (st)
                        try {
                            e = be,
                            o = a.stateNode,
                            e.nodeType === 8 ? e.parentNode.removeChild(o) : e.removeChild(o)
                        } catch (u) {
                            te(a, t, u)
                        }
                    else
                        try {
                            be.removeChild(a.stateNode)
                        } catch (u) {
                            te(a, t, u)
                        }
                break;
            case 18:
                be !== null && (st ? (t = be,
                a = a.stateNode,
                t.nodeType === 8 ? xf(t.parentNode, a) : t.nodeType === 1 && xf(t, a),
                Jn(t)) : xf(be, a.stateNode));
                break;
            case 4:
                o = be,
                l = st,
                be = a.stateNode.containerInfo,
                st = !0,
                ua(e, t, a),
                be = o,
                st = l;
                break;
            case 0:
            case 11:
            case 14:
            case 15:
                ge || ao(2, a, t),
                ge || ao(4, a, t),
                ua(e, t, a);
                break;
            case 1:
                ge || (ft(a, t),
                o = a.stateNode,
                typeof o.componentWillUnmount == "function" && Yh(a, t, o)),
                ua(e, t, a);
                break;
            case 21:
                ua(e, t, a);
                break;
            case 22:
                ge || ft(a, t),
                ge = (o = ge) || a.memoizedState !== null,
                ua(e, t, a),
                ge = o;
                break;
            default:
                ua(e, t, a)
            }
        }
        function ex(e, t) {
            if (t.memoizedState === null && (e = t.alternate,
            e !== null && (e = e.memoizedState,
            e !== null && (e = e.dehydrated,
            e !== null))))
                try {
                    Jn(e)
                } catch (a) {
                    te(t, t.return, a)
                }
        }
        function CS(e) {
            switch (e.tag) {
            case 13:
            case 19:
                var t = e.stateNode;
                return t === null && (t = e.stateNode = new Bp),
                t;
            case 22:
                return e = e.stateNode,
                t = e._retryCache,
                t === null && (t = e._retryCache = new Bp),
                t;
            default:
                throw Error(E(435, e.tag))
            }
        }
        function rf(e, t) {
            var a = CS(e);
            t.forEach(function(o) {
                var l = _S.bind(null, e, o);
                a.has(o) || (a.add(o),
                o.then(l, l))
            })
        }
        function Lt(e, t) {
            var a = t.deletions;
            if (a !== null)
                for (var o = 0; o < a.length; o++) {
                    var l = a[o]
                      , n = e
                      , u = t
                      , r = u;
                    e: for (; r !== null; ) {
                        switch (r.tag) {
                        case 27:
                        case 5:
                            be = r.stateNode,
                            st = !1;
                            break e;
                        case 3:
                            be = r.stateNode.containerInfo,
                            st = !0;
                            break e;
                        case 4:
                            be = r.stateNode.containerInfo,
                            st = !0;
                            break e
                        }
                        r = r.return
                    }
                    if (be === null)
                        throw Error(E(160));
                    Jh(n, u, l),
                    be = null,
                    st = !1,
                    n = l.alternate,
                    n !== null && (n.return = null),
                    l.return = null
                }
            if (t.subtreeFlags & 13878)
                for (t = t.child; t !== null; )
                    tx(t, e),
                    t = t.sibling
        }
        var _t = null;
        function tx(e, t) {
            var a = e.alternate
              , o = e.flags;
            switch (e.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
                Lt(t, e),
                yt(e),
                o & 4 && (ao(3, e, e.return),
                su(3, e),
                ao(5, e, e.return));
                break;
            case 1:
                Lt(t, e),
                yt(e),
                o & 512 && (ge || a === null || ft(a, a.return)),
                o & 64 && ia && (e = e.updateQueue,
                e !== null && (o = e.callbacks,
                o !== null && (a = e.shared.hiddenCallbacks,
                e.shared.hiddenCallbacks = a === null ? o : a.concat(o))));
                break;
            case 26:
                var l = _t;
                if (Lt(t, e),
                yt(e),
                o & 512 && (ge || a === null || ft(a, a.return)),
                o & 4) {
                    var n = a !== null ? a.memoizedState : null;
                    if (o = e.memoizedState,
                    a === null)
                        if (o === null)
                            if (e.stateNode === null) {
                                e: {
                                    o = e.type,
                                    a = e.memoizedProps,
                                    l = l.ownerDocument || l;
                                    t: switch (o) {
                                    case "title":
                                        n = l.getElementsByTagName("title")[0],
                                        (!n || n[qn] || n[Xe] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = l.createElement(o),
                                        l.head.insertBefore(n, l.querySelector("head > title"))),
                                        Ne(n, o, a),
                                        n[Xe] = e,
                                        Be(n),
                                        o = n;
                                        break e;
                                    case "link":
                                        var u = eg("link", "href", l).get(o + (a.href || ""));
                                        if (u) {
                                            for (var r = 0; r < u.length; r++)
                                                if (n = u[r],
                                                n.getAttribute("href") === (a.href == null ? null : a.href) && n.getAttribute("rel") === (a.rel == null ? null : a.rel) && n.getAttribute("title") === (a.title == null ? null : a.title) && n.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                                                    u.splice(r, 1);
                                                    break t
                                                }
                                        }
                                        n = l.createElement(o),
                                        Ne(n, o, a),
                                        l.head.appendChild(n);
                                        break;
                                    case "meta":
                                        if (u = eg("meta", "content", l).get(o + (a.content || ""))) {
                                            for (r = 0; r < u.length; r++)
                                                if (n = u[r],
                                                n.getAttribute("content") === (a.content == null ? null : "" + a.content) && n.getAttribute("name") === (a.name == null ? null : a.name) && n.getAttribute("property") === (a.property == null ? null : a.property) && n.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && n.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                                                    u.splice(r, 1);
                                                    break t
                                                }
                                        }
                                        n = l.createElement(o),
                                        Ne(n, o, a),
                                        l.head.appendChild(n);
                                        break;
                                    default:
                                        throw Error(E(468, o))
                                    }
                                    n[Xe] = e,
                                    Be(n),
                                    o = n
                                }
                                e.stateNode = o
                            } else
                                tg(l, e.type, e.stateNode);
                        else
                            e.stateNode = Jp(l, o, e.memoizedProps);
                    else
                        n !== o ? (n === null ? a.stateNode !== null && (a = a.stateNode,
                        a.parentNode.removeChild(a)) : n.count--,
                        o === null ? tg(l, e.type, e.stateNode) : Jp(l, o, e.memoizedProps)) : o === null && e.stateNode !== null && kp(e, e.memoizedProps, a.memoizedProps)
                }
                break;
            case 27:
                if (o & 4 && e.alternate === null) {
                    l = e.stateNode,
                    n = e.memoizedProps;
                    try {
                        for (var s = l.firstChild; s; ) {
                            var i = s.nextSibling
                              , f = s.nodeName;
                            s[qn] || f === "HEAD" || f === "BODY" || f === "SCRIPT" || f === "STYLE" || f === "LINK" && s.rel.toLowerCase() === "stylesheet" || l.removeChild(s),
                            s = i
                        }
                        for (var g = e.type, m = l.attributes; m.length; )
                            l.removeAttributeNode(m[0]);
                        Ne(l, g, n),
                        l[Xe] = e,
                        l[nt] = n
                    } catch (x) {
                        te(e, e.return, x)
                    }
                }
            case 5:
                if (Lt(t, e),
                yt(e),
                o & 512 && (ge || a === null || ft(a, a.return)),
                e.flags & 32) {
                    l = e.stateNode;
                    try {
                        Rl(l, "")
                    } catch (x) {
                        te(e, e.return, x)
                    }
                }
                o & 4 && e.stateNode != null && (l = e.memoizedProps,
                kp(e, l, a !== null ? a.memoizedProps : l)),
                o & 1024 && (uf = !0);
                break;
            case 6:
                if (Lt(t, e),
                yt(e),
                o & 4) {
                    if (e.stateNode === null)
                        throw Error(E(162));
                    o = e.memoizedProps,
                    a = e.stateNode;
                    try {
                        a.nodeValue = o
                    } catch (x) {
                        te(e, e.return, x)
                    }
                }
                break;
            case 3:
                if (kr = null,
                l = _t,
                _t = ls(t.containerInfo),
                Lt(t, e),
                _t = l,
                yt(e),
                o & 4 && a !== null && a.memoizedState.isDehydrated)
                    try {
                        Jn(t.containerInfo)
                    } catch (x) {
                        te(e, e.return, x)
                    }
                uf && (uf = !1,
                ax(e));
                break;
            case 4:
                o = _t,
                _t = ls(e.stateNode.containerInfo),
                Lt(t, e),
                yt(e),
                _t = o;
                break;
            case 12:
                Lt(t, e),
                yt(e);
                break;
            case 13:
                Lt(t, e),
                yt(e),
                e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (jc = Kt()),
                o & 4 && (o = e.updateQueue,
                o !== null && (e.updateQueue = null,
                rf(e, o)));
                break;
            case 22:
                if (o & 512 && (ge || a === null || ft(a, a.return)),
                s = e.memoizedState !== null,
                i = a !== null && a.memoizedState !== null,
                f = ia,
                g = ge,
                ia = f || s,
                ge = g || i,
                Lt(t, e),
                ge = g,
                ia = f,
                yt(e),
                t = e.stateNode,
                t._current = e,
                t._visibility &= -3,
                t._visibility |= t._pendingVisibility & 2,
                o & 8192 && (t._visibility = s ? t._visibility & -2 : t._visibility | 1,
                s && (t = ia || ge,
                a === null || i || t || ll(e)),
                e.memoizedProps === null || e.memoizedProps.mode !== "manual"))
                    e: for (a = null,
                    t = e; ; ) {
                        if (t.tag === 5 || t.tag === 26 || t.tag === 27) {
                            if (a === null) {
                                i = a = t;
                                try {
                                    if (l = i.stateNode,
                                    s)
                                        n = l.style,
                                        typeof n.setProperty == "function" ? n.setProperty("display", "none", "important") : n.display = "none";
                                    else {
                                        u = i.stateNode,
                                        r = i.memoizedProps.style;
                                        var c = r != null && r.hasOwnProperty("display") ? r.display : null;
                                        u.style.display = c == null || typeof c == "boolean" ? "" : ("" + c).trim()
                                    }
                                } catch (x) {
                                    te(i, i.return, x)
                                }
                            }
                        } else if (t.tag === 6) {
                            if (a === null) {
                                i = t;
                                try {
                                    i.stateNode.nodeValue = s ? "" : i.memoizedProps
                                } catch (x) {
                                    te(i, i.return, x)
                                }
                            }
                        } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                            t.child.return = t,
                            t = t.child;
                            continue
                        }
                        if (t === e)
                            break e;
                        for (; t.sibling === null; ) {
                            if (t.return === null || t.return === e)
                                break e;
                            a === t && (a = null),
                            t = t.return
                        }
                        a === t && (a = null),
                        t.sibling.return = t.return,
                        t = t.sibling
                    }
                o & 4 && (o = e.updateQueue,
                o !== null && (a = o.retryQueue,
                a !== null && (o.retryQueue = null,
                rf(e, a))));
                break;
            case 19:
                Lt(t, e),
                yt(e),
                o & 4 && (o = e.updateQueue,
                o !== null && (e.updateQueue = null,
                rf(e, o)));
                break;
            case 21:
                break;
            default:
                Lt(t, e),
                yt(e)
            }
        }
        function yt(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    if (e.tag !== 27) {
                        e: {
                            for (var a = e.return; a !== null; ) {
                                if (Wh(a)) {
                                    var o = a;
                                    break e
                                }
                                a = a.return
                            }
                            throw Error(E(160))
                        }
                        switch (o.tag) {
                        case 27:
                            var l = o.stateNode
                              , n = nf(e);
                            Qr(e, n, l);
                            break;
                        case 5:
                            var u = o.stateNode;
                            o.flags & 32 && (Rl(u, ""),
                            o.flags &= -33);
                            var r = nf(e);
                            Qr(e, r, u);
                            break;
                        case 3:
                        case 4:
                            var s = o.stateNode.containerInfo
                              , i = nf(e);
                            Kf(e, i, s);
                            break;
                        default:
                            throw Error(E(161))
                        }
                    }
                } catch (f) {
                    te(e, e.return, f)
                }
                e.flags &= -3
            }
            t & 4096 && (e.flags &= -4097)
        }
        function ax(e) {
            if (e.subtreeFlags & 1024)
                for (e = e.child; e !== null; ) {
                    var t = e;
                    ax(t),
                    t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
                    e = e.sibling
                }
        }
        function ra(e, t) {
            if (t.subtreeFlags & 8772)
                for (t = t.child; t !== null; )
                    Qh(e, t.alternate, t),
                    t = t.sibling
        }
        function ll(e) {
            for (e = e.child; e !== null; ) {
                var t = e;
                switch (t.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                    ao(4, t, t.return),
                    ll(t);
                    break;
                case 1:
                    ft(t, t.return);
                    var a = t.stateNode;
                    typeof a.componentWillUnmount == "function" && Yh(t, t.return, a),
                    ll(t);
                    break;
                case 26:
                case 27:
                case 5:
                    ft(t, t.return),
                    ll(t);
                    break;
                case 22:
                    ft(t, t.return),
                    t.memoizedState === null && ll(t);
                    break;
                default:
                    ll(t)
                }
                e = e.sibling
            }
        }
        function Fa(e, t, a) {
            for (a = a && (t.subtreeFlags & 8772) !== 0,
            t = t.child; t !== null; ) {
                var o = t.alternate
                  , l = e
                  , n = t
                  , u = n.flags;
                switch (n.tag) {
                case 0:
                case 11:
                case 15:
                    Fa(l, n, a),
                    su(4, n);
                    break;
                case 1:
                    if (Fa(l, n, a),
                    o = n,
                    l = o.stateNode,
                    typeof l.componentDidMount == "function")
                        try {
                            l.componentDidMount()
                        } catch (i) {
                            te(o, o.return, i)
                        }
                    if (o = n,
                    l = o.updateQueue,
                    l !== null) {
                        var r = o.stateNode;
                        try {
                            var s = l.shared.hiddenCallbacks;
                            if (s !== null)
                                for (l.shared.hiddenCallbacks = null,
                                l = 0; l < s.length; l++)
                                    Gh(s[l], r)
                        } catch (i) {
                            te(o, o.return, i)
                        }
                    }
                    a && u & 64 && jh(n),
                    Eo(n, n.return);
                    break;
                case 26:
                case 27:
                case 5:
                    Fa(l, n, a),
                    a && o === null && u & 4 && Kh(n),
                    Eo(n, n.return);
                    break;
                case 12:
                    Fa(l, n, a);
                    break;
                case 13:
                    Fa(l, n, a),
                    a && u & 4 && ex(l, n);
                    break;
                case 22:
                    n.memoizedState === null && Fa(l, n, a),
                    Eo(n, n.return);
                    break;
                default:
                    Fa(l, n, a)
                }
                t = t.sibling
            }
        }
        function Nc(e, t) {
            var a = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
            e = null,
            t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool),
            e !== a && (e != null && e.refCount++,
            a != null && nu(a))
        }
        function $c(e, t) {
            e = null,
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            t = t.memoizedState.cache,
            t !== e && (t.refCount++,
            e != null && nu(e))
        }
        function _a(e, t, a, o) {
            if (t.subtreeFlags & 10256)
                for (t = t.child; t !== null; )
                    ox(e, t, a, o),
                    t = t.sibling
        }
        function ox(e, t, a, o) {
            var l = t.flags;
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                _a(e, t, a, o),
                l & 2048 && su(9, t);
                break;
            case 3:
                _a(e, t, a, o),
                l & 2048 && (e = null,
                t.alternate !== null && (e = t.alternate.memoizedState.cache),
                t = t.memoizedState.cache,
                t !== e && (t.refCount++,
                e != null && nu(e)));
                break;
            case 12:
                if (l & 2048) {
                    _a(e, t, a, o),
                    e = t.stateNode;
                    try {
                        var n = t.memoizedProps
                          , u = n.id
                          , r = n.onPostCommit;
                        typeof r == "function" && r(u, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0)
                    } catch (s) {
                        te(t, t.return, s)
                    }
                } else
                    _a(e, t, a, o);
                break;
            case 23:
                break;
            case 22:
                n = t.stateNode,
                t.memoizedState !== null ? n._visibility & 4 ? _a(e, t, a, o) : Pn(e, t) : n._visibility & 4 ? _a(e, t, a, o) : (n._visibility |= 4,
                nl(e, t, a, o, (t.subtreeFlags & 10256) !== 0)),
                l & 2048 && Nc(t.alternate, t);
                break;
            case 24:
                _a(e, t, a, o),
                l & 2048 && $c(t.alternate, t);
                break;
            default:
                _a(e, t, a, o)
            }
        }
        function nl(e, t, a, o, l) {
            for (l = l && (t.subtreeFlags & 10256) !== 0,
            t = t.child; t !== null; ) {
                var n = e
                  , u = t
                  , r = a
                  , s = o
                  , i = u.flags;
                switch (u.tag) {
                case 0:
                case 11:
                case 15:
                    nl(n, u, r, s, l),
                    su(8, u);
                    break;
                case 23:
                    break;
                case 22:
                    var f = u.stateNode;
                    u.memoizedState !== null ? f._visibility & 4 ? nl(n, u, r, s, l) : Pn(n, u) : (f._visibility |= 4,
                    nl(n, u, r, s, l)),
                    l && i & 2048 && Nc(u.alternate, u);
                    break;
                case 24:
                    nl(n, u, r, s, l),
                    l && i & 2048 && $c(u.alternate, u);
                    break;
                default:
                    nl(n, u, r, s, l)
                }
                t = t.sibling
            }
        }
        function Pn(e, t) {
            if (t.subtreeFlags & 10256)
                for (t = t.child; t !== null; ) {
                    var a = e
                      , o = t
                      , l = o.flags;
                    switch (o.tag) {
                    case 22:
                        Pn(a, o),
                        l & 2048 && Nc(o.alternate, o);
                        break;
                    case 24:
                        Pn(a, o),
                        l & 2048 && $c(o.alternate, o);
                        break;
                    default:
                        Pn(a, o)
                    }
                    t = t.sibling
                }
        }
        var Cn = 8192;
        function al(e) {
            if (e.subtreeFlags & Cn)
                for (e = e.child; e !== null; )
                    lx(e),
                    e = e.sibling
        }
        function lx(e) {
            switch (e.tag) {
            case 26:
                al(e),
                e.flags & Cn && e.memoizedState !== null && i1(_t, e.memoizedState, e.memoizedProps);
                break;
            case 5:
                al(e);
                break;
            case 3:
            case 4:
                var t = _t;
                _t = ls(e.stateNode.containerInfo),
                al(e),
                _t = t;
                break;
            case 22:
                e.memoizedState === null && (t = e.alternate,
                t !== null && t.memoizedState !== null ? (t = Cn,
                Cn = 16777216,
                al(e),
                Cn = t) : al(e));
                break;
            default:
                al(e)
            }
        }
        function nx(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child,
            e !== null)) {
                t.child = null;
                do
                    t = e.sibling,
                    e.sibling = null,
                    e = t;
                while (e !== null)
            }
        }
        function gn(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null)
                    for (var a = 0; a < t.length; a++) {
                        var o = t[a];
                        ke = o,
                        rx(o, e)
                    }
                nx(e)
            }
            if (e.subtreeFlags & 10256)
                for (e = e.child; e !== null; )
                    ux(e),
                    e = e.sibling
        }
        function ux(e) {
            switch (e.tag) {
            case 0:
            case 11:
            case 15:
                gn(e),
                e.flags & 2048 && ao(9, e, e.return);
                break;
            case 3:
                gn(e);
                break;
            case 12:
                gn(e);
                break;
            case 22:
                var t = e.stateNode;
                e.memoizedState !== null && t._visibility & 4 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -5,
                Ar(e)) : gn(e);
                break;
            default:
                gn(e)
            }
        }
        function Ar(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null)
                    for (var a = 0; a < t.length; a++) {
                        var o = t[a];
                        ke = o,
                        rx(o, e)
                    }
                nx(e)
            }
            for (e = e.child; e !== null; ) {
                switch (t = e,
                t.tag) {
                case 0:
                case 11:
                case 15:
                    ao(8, t, t.return),
                    Ar(t);
                    break;
                case 22:
                    a = t.stateNode,
                    a._visibility & 4 && (a._visibility &= -5,
                    Ar(t));
                    break;
                default:
                    Ar(t)
                }
                e = e.sibling
            }
        }
        function rx(e, t) {
            for (; ke !== null; ) {
                var a = ke;
                switch (a.tag) {
                case 0:
                case 11:
                case 15:
                    ao(8, a, t);
                    break;
                case 23:
                case 22:
                    if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
                        var o = a.memoizedState.cachePool.pool;
                        o != null && o.refCount++
                    }
                    break;
                case 24:
                    nu(a.memoizedState.cache)
                }
                if (o = a.child,
                o !== null)
                    o.return = a,
                    ke = o;
                else
                    e: for (a = e; ke !== null; ) {
                        o = ke;
                        var l = o.sibling
                          , n = o.return;
                        if (Zh(o),
                        o === a) {
                            ke = null;
                            break e
                        }
                        if (l !== null) {
                            l.return = n,
                            ke = l;
                            break e
                        }
                        ke = n
                    }
            }
        }
        function IS(e, t, a, o) {
            this.tag = e,
            this.key = a,
            this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
            this.index = 0,
            this.refCleanup = this.ref = null,
            this.pendingProps = t,
            this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
            this.mode = o,
            this.subtreeFlags = this.flags = 0,
            this.deletions = null,
            this.childLanes = this.lanes = 0,
            this.alternate = null
        }
        function Et(e, t, a, o) {
            return new IS(e,t,a,o)
        }
        function Vc(e) {
            return e = e.prototype,
            !(!e || !e.isReactComponent)
        }
        function Ka(e, t) {
            var a = e.alternate;
            return a === null ? (a = Et(e.tag, t, e.key, e.mode),
            a.elementType = e.elementType,
            a.type = e.type,
            a.stateNode = e.stateNode,
            a.alternate = e,
            e.alternate = a) : (a.pendingProps = t,
            a.type = e.type,
            a.flags = 0,
            a.subtreeFlags = 0,
            a.deletions = null),
            a.flags = e.flags & 31457280,
            a.childLanes = e.childLanes,
            a.lanes = e.lanes,
            a.child = e.child,
            a.memoizedProps = e.memoizedProps,
            a.memoizedState = e.memoizedState,
            a.updateQueue = e.updateQueue,
            t = e.dependencies,
            a.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            },
            a.sibling = e.sibling,
            a.index = e.index,
            a.ref = e.ref,
            a.refCleanup = e.refCleanup,
            a
        }
        function sx(e, t) {
            e.flags &= 31457282;
            var a = e.alternate;
            return a === null ? (e.childLanes = 0,
            e.lanes = t,
            e.child = null,
            e.subtreeFlags = 0,
            e.memoizedProps = null,
            e.memoizedState = null,
            e.updateQueue = null,
            e.dependencies = null,
            e.stateNode = null) : (e.childLanes = a.childLanes,
            e.lanes = a.lanes,
            e.child = a.child,
            e.subtreeFlags = 0,
            e.deletions = null,
            e.memoizedProps = a.memoizedProps,
            e.memoizedState = a.memoizedState,
            e.updateQueue = a.updateQueue,
            e.type = a.type,
            t = a.dependencies,
            e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }),
            e
        }
        function Mr(e, t, a, o, l, n) {
            var u = 0;
            if (o = e,
            typeof e == "function")
                Vc(e) && (u = 1);
            else if (typeof e == "string")
                u = r1(e, a, Yt.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else
                e: switch (e) {
                case rl:
                    return Mo(a.children, l, n, t);
                case ig:
                    u = 8,
                    l |= 24;
                    break;
                case vf:
                    return e = Et(12, a, t, l | 2),
                    e.elementType = vf,
                    e.lanes = n,
                    e;
                case Lf:
                    return e = Et(13, a, t, l),
                    e.elementType = Lf,
                    e.lanes = n,
                    e;
                case yf:
                    return e = Et(19, a, t, l),
                    e.elementType = yf,
                    e.lanes = n,
                    e;
                case cg:
                    return ix(a, l, n, t);
                default:
                    if (typeof e == "object" && e !== null)
                        switch (e.$$typeof) {
                        case Ky:
                        case da:
                            u = 10;
                            break e;
                        case fg:
                            u = 9;
                            break e;
                        case cc:
                            u = 11;
                            break e;
                        case dc:
                            u = 14;
                            break e;
                        case Ua:
                            u = 16,
                            o = null;
                            break e
                        }
                    u = 29,
                    a = Error(E(130, e === null ? "null" : typeof e, "")),
                    o = null
                }
            return t = Et(u, a, t, l),
            t.elementType = e,
            t.type = o,
            t.lanes = n,
            t
        }
        function Mo(e, t, a, o) {
            return e = Et(7, e, o, t),
            e.lanes = a,
            e
        }
        function ix(e, t, a, o) {
            e = Et(22, e, o, t),
            e.elementType = cg,
            e.lanes = a;
            var l = {
                _visibility: 1,
                _pendingVisibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null,
                _current: null,
                detach: function() {
                    var n = l._current;
                    if (n === null)
                        throw Error(E(456));
                    if ((l._pendingVisibility & 2) === 0) {
                        var u = eo(n, 2);
                        u !== null && (l._pendingVisibility |= 2,
                        et(u, n, 2))
                    }
                },
                attach: function() {
                    var n = l._current;
                    if (n === null)
                        throw Error(E(456));
                    if ((l._pendingVisibility & 2) !== 0) {
                        var u = eo(n, 2);
                        u !== null && (l._pendingVisibility &= -3,
                        et(u, n, 2))
                    }
                }
            };
            return e.stateNode = l,
            e
        }
        function sf(e, t, a) {
            return e = Et(6, e, null, t),
            e.lanes = a,
            e
        }
        function ff(e, t, a) {
            return t = Et(4, e.children !== null ? e.children : [], e.key, t),
            t.lanes = a,
            t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            },
            t
        }
        function sa(e) {
            e.flags |= 4
        }
        function _p(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
                e.flags &= -16777217;
            else if (e.flags |= 16777216,
            !Ax(t)) {
                if (t = Ot.current,
                t !== null && ((X & 4194176) === X ? Wt !== null : (X & 62914560) !== X && (X & 536870912) === 0 || t !== Wt))
                    throw Rn = kf,
                    Kg;
                e.flags |= 8192
            }
        }
        function hr(e, t) {
            t !== null && (e.flags |= 4),
            e.flags & 16384 && (t = e.tag !== 22 ? vg() : 536870912,
            e.lanes |= t,
            Dl |= t)
        }
        function hn(e, t) {
            if (!j)
                switch (e.tailMode) {
                case "hidden":
                    t = e.tail;
                    for (var a = null; t !== null; )
                        t.alternate !== null && (a = t),
                        t = t.sibling;
                    a === null ? e.tail = null : a.sibling = null;
                    break;
                case "collapsed":
                    a = e.tail;
                    for (var o = null; a !== null; )
                        a.alternate !== null && (o = a),
                        a = a.sibling;
                    o === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : o.sibling = null
                }
        }
        function me(e) {
            var t = e.alternate !== null && e.alternate.child === e.child
              , a = 0
              , o = 0;
            if (t)
                for (var l = e.child; l !== null; )
                    a |= l.lanes | l.childLanes,
                    o |= l.subtreeFlags & 31457280,
                    o |= l.flags & 31457280,
                    l.return = e,
                    l = l.sibling;
            else
                for (l = e.child; l !== null; )
                    a |= l.lanes | l.childLanes,
                    o |= l.subtreeFlags,
                    o |= l.flags,
                    l.return = e,
                    l = l.sibling;
            return e.subtreeFlags |= o,
            e.childLanes = a,
            t
        }
        function wS(e, t, a) {
            var o = t.pendingProps;
            switch (Ic(t),
            t.tag) {
            case 16:
            case 15:
            case 0:
            case 11:
            case 7:
            case 8:
            case 12:
            case 9:
            case 14:
                return me(t),
                null;
            case 1:
                return me(t),
                null;
            case 3:
                return a = t.stateNode,
                o = null,
                e !== null && (o = e.memoizedState.cache),
                t.memoizedState.cache !== o && (t.flags |= 2048),
                xa(Te),
                Tl(),
                a.pendingContext && (a.context = a.pendingContext,
                a.pendingContext = null),
                (e === null || e.child === null) && (mn(t) ? sa(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024,
                Ft !== null && (ec(Ft),
                Ft = null))),
                me(t),
                null;
            case 26:
                return a = t.memoizedState,
                e === null ? (sa(t),
                a !== null ? (me(t),
                _p(t, a)) : (me(t),
                t.flags &= -16777217)) : a ? a !== e.memoizedState ? (sa(t),
                me(t),
                _p(t, a)) : (me(t),
                t.flags &= -16777217) : (e.memoizedProps !== o && sa(t),
                me(t),
                t.flags &= -16777217),
                null;
            case 27:
                Fr(t),
                a = Xa.current;
                var l = t.type;
                if (e !== null && t.stateNode != null)
                    e.memoizedProps !== o && sa(t);
                else {
                    if (!o) {
                        if (t.stateNode === null)
                            throw Error(E(166));
                        return me(t),
                        null
                    }
                    e = Yt.current,
                    mn(t) ? dp(t, e) : (e = Ex(l, o, a),
                    t.stateNode = e,
                    sa(t))
                }
                return me(t),
                null;
            case 5:
                if (Fr(t),
                a = t.type,
                e !== null && t.stateNode != null)
                    e.memoizedProps !== o && sa(t);
                else {
                    if (!o) {
                        if (t.stateNode === null)
                            throw Error(E(166));
                        return me(t),
                        null
                    }
                    if (e = Yt.current,
                    mn(t))
                        dp(t, e);
                    else {
                        switch (l = os(Xa.current),
                        e) {
                        case 1:
                            e = l.createElementNS("http://www.w3.org/2000/svg", a);
                            break;
                        case 2:
                            e = l.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                            break;
                        default:
                            switch (a) {
                            case "svg":
                                e = l.createElementNS("http://www.w3.org/2000/svg", a);
                                break;
                            case "math":
                                e = l.createElementNS("http://www.w3.org/1998/Math/MathML", a);
                                break;
                            case "script":
                                e = l.createElement("div"),
                                e.innerHTML = "<script><\/script>",
                                e = e.removeChild(e.firstChild);
                                break;
                            case "select":
                                e = typeof o.is == "string" ? l.createElement("select", {
                                    is: o.is
                                }) : l.createElement("select"),
                                o.multiple ? e.multiple = !0 : o.size && (e.size = o.size);
                                break;
                            default:
                                e = typeof o.is == "string" ? l.createElement(a, {
                                    is: o.is
                                }) : l.createElement(a)
                            }
                        }
                        e[Xe] = t,
                        e[nt] = o;
                        e: for (l = t.child; l !== null; ) {
                            if (l.tag === 5 || l.tag === 6)
                                e.appendChild(l.stateNode);
                            else if (l.tag !== 4 && l.tag !== 27 && l.child !== null) {
                                l.child.return = l,
                                l = l.child;
                                continue
                            }
                            if (l === t)
                                break e;
                            for (; l.sibling === null; ) {
                                if (l.return === null || l.return === t)
                                    break e;
                                l = l.return
                            }
                            l.sibling.return = l.return,
                            l = l.sibling
                        }
                        t.stateNode = e;
                        e: switch (Ne(e, a, o),
                        a) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            e = !!o.autoFocus;
                            break e;
                        case "img":
                            e = !0;
                            break e;
                        default:
                            e = !1
                        }
                        e && sa(t)
                    }
                }
                return me(t),
                t.flags &= -16777217,
                null;
            case 6:
                if (e && t.stateNode != null)
                    e.memoizedProps !== o && sa(t);
                else {
                    if (typeof o != "string" && t.stateNode === null)
                        throw Error(E(166));
                    if (e = Xa.current,
                    mn(t)) {
                        if (e = t.stateNode,
                        a = t.memoizedProps,
                        o = null,
                        l = Je,
                        l !== null)
                            switch (l.tag) {
                            case 27:
                            case 5:
                                o = l.memoizedProps
                            }
                        e[Xe] = t,
                        e = !!(e.nodeValue === a || o !== null && o.suppressHydrationWarning === !0 || Ix(e.nodeValue, a)),
                        e || Bo(t)
                    } else
                        e = os(e).createTextNode(o),
                        e[Xe] = t,
                        t.stateNode = e
                }
                return me(t),
                null;
            case 13:
                if (o = t.memoizedState,
                e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                    if (l = mn(t),
                    o !== null && o.dehydrated !== null) {
                        if (e === null) {
                            if (!l)
                                throw Error(E(318));
                            if (l = t.memoizedState,
                            l = l !== null ? l.dehydrated : null,
                            !l)
                                throw Error(E(317));
                            l[Xe] = t
                        } else
                            lu(),
                            (t.flags & 128) === 0 && (t.memoizedState = null),
                            t.flags |= 4;
                        me(t),
                        l = !1
                    } else
                        Ft !== null && (ec(Ft),
                        Ft = null),
                        l = !0;
                    if (!l)
                        return t.flags & 256 ? (ga(t),
                        t) : (ga(t),
                        null)
                }
                if (ga(t),
                (t.flags & 128) !== 0)
                    return t.lanes = a,
                    t;
                if (a = o !== null,
                e = e !== null && e.memoizedState !== null,
                a) {
                    o = t.child,
                    l = null,
                    o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (l = o.alternate.memoizedState.cachePool.pool);
                    var n = null;
                    o.memoizedState !== null && o.memoizedState.cachePool !== null && (n = o.memoizedState.cachePool.pool),
                    n !== l && (o.flags |= 2048)
                }
                return a !== e && a && (t.child.flags |= 8192),
                hr(t, t.updateQueue),
                me(t),
                null;
            case 4:
                return Tl(),
                e === null && Wc(t.stateNode.containerInfo),
                me(t),
                null;
            case 10:
                return xa(t.type),
                me(t),
                null;
            case 19:
                if (_e(Ee),
                l = t.memoizedState,
                l === null)
                    return me(t),
                    null;
                if (o = (t.flags & 128) !== 0,
                n = l.rendering,
                n === null)
                    if (o)
                        hn(l, !1);
                    else {
                        if (he !== 0 || e !== null && (e.flags & 128) !== 0)
                            for (e = t.child; e !== null; ) {
                                if (n = Gr(e),
                                n !== null) {
                                    for (t.flags |= 128,
                                    hn(l, !1),
                                    e = n.updateQueue,
                                    t.updateQueue = e,
                                    hr(t, e),
                                    t.subtreeFlags = 0,
                                    e = a,
                                    a = t.child; a !== null; )
                                        sx(a, e),
                                        a = a.sibling;
                                    return fe(Ee, Ee.current & 1 | 2),
                                    t.child
                                }
                                e = e.sibling
                            }
                        l.tail !== null && Kt() > Zr && (t.flags |= 128,
                        o = !0,
                        hn(l, !1),
                        t.lanes = 4194304)
                    }
                else {
                    if (!o)
                        if (e = Gr(n),
                        e !== null) {
                            if (t.flags |= 128,
                            o = !0,
                            e = e.updateQueue,
                            t.updateQueue = e,
                            hr(t, e),
                            hn(l, !0),
                            l.tail === null && l.tailMode === "hidden" && !n.alternate && !j)
                                return me(t),
                                null
                        } else
                            2 * Kt() - l.renderingStartTime > Zr && a !== 536870912 && (t.flags |= 128,
                            o = !0,
                            hn(l, !1),
                            t.lanes = 4194304);
                    l.isBackwards ? (n.sibling = t.child,
                    t.child = n) : (e = l.last,
                    e !== null ? e.sibling = n : t.child = n,
                    l.last = n)
                }
                return l.tail !== null ? (t = l.tail,
                l.rendering = t,
                l.tail = t.sibling,
                l.renderingStartTime = Kt(),
                t.sibling = null,
                e = Ee.current,
                fe(Ee, o ? e & 1 | 2 : e & 1),
                t) : (me(t),
                null);
            case 22:
            case 23:
                return ga(t),
                wc(),
                o = t.memoizedState !== null,
                e !== null ? e.memoizedState !== null !== o && (t.flags |= 8192) : o && (t.flags |= 8192),
                o ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (me(t),
                t.subtreeFlags & 6 && (t.flags |= 8192)) : me(t),
                a = t.updateQueue,
                a !== null && hr(t, a.retryQueue),
                a = null,
                e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool),
                o = null,
                t.memoizedState !== null && t.memoizedState.cachePool !== null && (o = t.memoizedState.cachePool.pool),
                o !== a && (t.flags |= 2048),
                e !== null && _e(Ao),
                null;
            case 24:
                return a = null,
                e !== null && (a = e.memoizedState.cache),
                t.memoizedState.cache !== a && (t.flags |= 2048),
                xa(Te),
                me(t),
                null;
            case 25:
                return null
            }
            throw Error(E(156, t.tag))
        }
        function TS(e, t) {
            switch (Ic(t),
            t.tag) {
            case 1:
                return e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                t) : null;
            case 3:
                return xa(Te),
                Tl(),
                e = t.flags,
                (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128,
                t) : null;
            case 26:
            case 27:
            case 5:
                return Fr(t),
                null;
            case 13:
                if (ga(t),
                e = t.memoizedState,
                e !== null && e.dehydrated !== null) {
                    if (t.alternate === null)
                        throw Error(E(340));
                    lu()
                }
                return e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                t) : null;
            case 19:
                return _e(Ee),
                null;
            case 4:
                return Tl(),
                null;
            case 10:
                return xa(t.type),
                null;
            case 22:
            case 23:
                return ga(t),
                wc(),
                e !== null && _e(Ao),
                e = t.flags,
                e & 65536 ? (t.flags = e & -65537 | 128,
                t) : null;
            case 24:
                return xa(Te),
                null;
            case 25:
                return null;
            default:
                return null
            }
        }
        function fx(e, t) {
            switch (Ic(t),
            t.tag) {
            case 3:
                xa(Te),
                Tl();
                break;
            case 26:
            case 27:
            case 5:
                Fr(t);
                break;
            case 4:
                Tl();
                break;
            case 13:
                ga(t);
                break;
            case 19:
                _e(Ee);
                break;
            case 10:
                xa(t.type);
                break;
            case 22:
            case 23:
                ga(t),
                wc(),
                e !== null && _e(Ao);
                break;
            case 24:
                xa(Te)
            }
        }
        var ES = {
            getCacheForType: function(e) {
                var t = je(Te)
                  , a = t.data.get(e);
                return a === void 0 && (a = e(),
                t.data.set(e, a)),
                a
            }
        }
          , RS = typeof WeakMap == "function" ? WeakMap : Map
          , pe = 0
          , oe = null
          , $ = null
          , X = 0
          , ae = 0
          , it = null
          , fa = !1
          , Ul = !1
          , Gc = !1
          , ba = 0
          , he = 0
          , oo = 0
          , Do = 0
          , Xc = 0
          , Rt = 0
          , Dl = 0
          , _n = null
          , jt = null
          , Wf = !1
          , jc = 0
          , Zr = 1 / 0
          , Jr = null
          , Wa = null
          , xr = !1
          , wo = null
          , Fn = 0
          , Qf = 0
          , Zf = null
          , Un = 0
          , Jf = null;
        function mt() {
            if ((pe & 2) !== 0 && X !== 0)
                return X & -X;
            if (B.T !== null) {
                var e = Al;
                return e !== 0 ? e : Kc()
            }
            return Sg()
        }
        function cx() {
            Rt === 0 && (Rt = (X & 536870912) === 0 || j ? xg() : 536870912);
            var e = Ot.current;
            return e !== null && (e.flags |= 32),
            Rt
        }
        function et(e, t, a) {
            (e === oe && ae === 2 || e.cancelPendingCommit !== null) && (kl(e, 0),
            ca(e, X, Rt, !1)),
            au(e, a),
            ((pe & 2) === 0 || e !== oe) && (e === oe && ((pe & 2) === 0 && (Do |= a),
            he === 4 && ca(e, X, Rt, !1)),
            Jt(e))
        }
        function dx(e, t, a) {
            if ((pe & 6) !== 0)
                throw Error(E(327));
            var o = !a && (t & 60) === 0 && (t & e.expiredLanes) === 0 || tu(e, t)
              , l = o ? MS(e, t) : cf(e, t, !0)
              , n = o;
            do {
                if (l === 0) {
                    Ul && !o && ca(e, t, 0, !1);
                    break
                } else if (l === 6)
                    ca(e, t, 0, !fa);
                else {
                    if (a = e.current.alternate,
                    n && !OS(a)) {
                        l = cf(e, t, !1),
                        n = !1;
                        continue
                    }
                    if (l === 2) {
                        if (n = t,
                        e.errorRecoveryDisabledLanes & n)
                            var u = 0;
                        else
                            u = e.pendingLanes & -536870913,
                            u = u !== 0 ? u : u & 536870912 ? 536870912 : 0;
                        if (u !== 0) {
                            t = u;
                            e: {
                                var r = e;
                                l = _n;
                                var s = r.current.memoizedState.isDehydrated;
                                if (s && (kl(r, u).flags |= 256),
                                u = cf(r, u, !1),
                                u !== 2) {
                                    if (Gc && !s) {
                                        r.errorRecoveryDisabledLanes |= n,
                                        Do |= n,
                                        l = 4;
                                        break e
                                    }
                                    n = jt,
                                    jt = l,
                                    n !== null && ec(n)
                                }
                                l = u
                            }
                            if (n = !1,
                            l !== 2)
                                continue
                        }
                    }
                    if (l === 1) {
                        kl(e, 0),
                        ca(e, t, 0, !0);
                        break
                    }
                    e: {
                        switch (o = e,
                        l) {
                        case 0:
                        case 1:
                            throw Error(E(345));
                        case 4:
                            if ((t & 4194176) === t) {
                                ca(o, t, Rt, !fa);
                                break e
                            }
                            break;
                        case 2:
                            jt = null;
                            break;
                        case 3:
                        case 5:
                            break;
                        default:
                            throw Error(E(329))
                        }
                        if (o.finishedWork = a,
                        o.finishedLanes = t,
                        (t & 62914560) === t && (n = jc + 300 - Kt(),
                        10 < n)) {
                            if (ca(o, t, Rt, !fa),
                            is(o, 0) !== 0)
                                break e;
                            o.timeoutHandle = Tx(Fp.bind(null, o, a, jt, Jr, Wf, t, Rt, Do, Dl, fa, 2, -0, 0), n);
                            break e
                        }
                        Fp(o, a, jt, Jr, Wf, t, Rt, Do, Dl, fa, 0, -0, 0)
                    }
                }
                break
            } while (!0);
            Jt(e)
        }
        function ec(e) {
            jt === null ? jt = e : jt.push.apply(jt, e)
        }
        function Fp(e, t, a, o, l, n, u, r, s, i, f, g, m) {
            var c = t.subtreeFlags;
            if ((c & 8192 || (c & 16785408) === 16785408) && (Kn = {
                stylesheets: null,
                count: 0,
                unsuspend: s1
            },
            lx(t),
            t = f1(),
            t !== null)) {
                e.cancelPendingCommit = t(Hp.bind(null, e, a, o, l, u, r, s, 1, g, m)),
                ca(e, n, u, !i);
                return
            }
            Hp(e, a, o, l, u, r, s, f, g, m)
        }
        function OS(e) {
            for (var t = e; ; ) {
                var a = t.tag;
                if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue,
                a !== null && (a = a.stores,
                a !== null)))
                    for (var o = 0; o < a.length; o++) {
                        var l = a[o]
                          , n = l.getSnapshot;
                        l = l.value;
                        try {
                            if (!pt(n(), l))
                                return !1
                        } catch {
                            return !1
                        }
                    }
                if (a = t.child,
                t.subtreeFlags & 16384 && a !== null)
                    a.return = t,
                    t = a;
                else {
                    if (t === e)
                        break;
                    for (; t.sibling === null; ) {
                        if (t.return === null || t.return === e)
                            return !0;
                        t = t.return
                    }
                    t.sibling.return = t.return,
                    t = t.sibling
                }
            }
            return !0
        }
        function ca(e, t, a, o) {
            t &= ~Xc,
            t &= ~Do,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            o && (e.warmLanes |= t),
            o = e.expirationTimes;
            for (var l = t; 0 < l; ) {
                var n = 31 - dt(l)
                  , u = 1 << n;
                o[n] = -1,
                l &= ~u
            }
            a !== 0 && Lg(e, a, t)
        }
        function Ls() {
            return (pe & 6) === 0 ? (iu(0, !1),
            !1) : !0
        }
        function Yc() {
            if ($ !== null) {
                if (ae === 0)
                    var e = $.return;
                else
                    e = $,
                    ha = Vo = null,
                    Dc(e),
                    bl = null,
                    Gn = 0,
                    e = $;
                for (; e !== null; )
                    fx(e.alternate, e),
                    e = e.return;
                $ = null
            }
        }
        function kl(e, t) {
            e.finishedWork = null,
            e.finishedLanes = 0;
            var a = e.timeoutHandle;
            a !== -1 && (e.timeoutHandle = -1,
            XS(a)),
            a = e.cancelPendingCommit,
            a !== null && (e.cancelPendingCommit = null,
            a()),
            Yc(),
            oe = e,
            $ = a = Ka(e.current, null),
            X = t,
            ae = 0,
            it = null,
            fa = !1,
            Ul = tu(e, t),
            Gc = !1,
            Dl = Rt = Xc = Do = oo = he = 0,
            jt = _n = null,
            Wf = !1,
            (t & 8) !== 0 && (t |= t & 32);
            var o = e.entangledLanes;
            if (o !== 0)
                for (e = e.entanglements,
                o &= t; 0 < o; ) {
                    var l = 31 - dt(o)
                      , n = 1 << l;
                    t |= e[l],
                    o &= ~n
                }
            return ba = t,
            ms(),
            a
        }
        function mx(e, t) {
            N = null,
            B.H = Qt,
            t === En ? (t = gp(),
            ae = 3) : t === Kg ? (t = gp(),
            ae = 4) : ae = t === Uh ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1,
            it = t,
            $ === null && (he = 1,
            Kr(e, Tt(t, e.current)))
        }
        function px() {
            var e = B.H;
            return B.H = Qt,
            e === null ? Qt : e
        }
        function gx() {
            var e = B.A;
            return B.A = ES,
            e
        }
        function tc() {
            he = 4,
            fa || (X & 4194176) !== X && Ot.current !== null || (Ul = !0),
            (oo & 134217727) === 0 && (Do & 134217727) === 0 || oe === null || ca(oe, X, Rt, !1)
        }
        function cf(e, t, a) {
            var o = pe;
            pe |= 2;
            var l = px()
              , n = gx();
            (oe !== e || X !== t) && (Jr = null,
            kl(e, t)),
            t = !1;
            var u = he;
            e: do
                try {
                    if (ae !== 0 && $ !== null) {
                        var r = $
                          , s = it;
                        switch (ae) {
                        case 8:
                            Yc(),
                            u = 6;
                            break e;
                        case 3:
                        case 2:
                        case 6:
                            Ot.current === null && (t = !0);
                            var i = ae;
                            if (ae = 0,
                            it = null,
                            xl(e, r, s, i),
                            a && Ul) {
                                u = 0;
                                break e
                            }
                            break;
                        default:
                            i = ae,
                            ae = 0,
                            it = null,
                            xl(e, r, s, i)
                        }
                    }
                    AS(),
                    u = he;
                    break
                } catch (f) {
                    mx(e, f)
                }
            while (!0);
            return t && e.shellSuspendCounter++,
            ha = Vo = null,
            pe = o,
            B.H = l,
            B.A = n,
            $ === null && (oe = null,
            X = 0,
            ms()),
            u
        }
        function AS() {
            for (; $ !== null; )
                hx($)
        }
        function MS(e, t) {
            var a = pe;
            pe |= 2;
            var o = px()
              , l = gx();
            oe !== e || X !== t ? (Jr = null,
            Zr = Kt() + 500,
            kl(e, t)) : Ul = tu(e, t);
            e: do
                try {
                    if (ae !== 0 && $ !== null) {
                        t = $;
                        var n = it;
                        t: switch (ae) {
                        case 1:
                            ae = 0,
                            it = null,
                            xl(e, t, n, 1);
                            break;
                        case 2:
                            if (pp(n)) {
                                ae = 0,
                                it = null,
                                Up(t);
                                break
                            }
                            t = function() {
                                ae === 2 && oe === e && (ae = 7),
                                Jt(e)
                            }
                            ,
                            n.then(t, t);
                            break e;
                        case 3:
                            ae = 7;
                            break e;
                        case 4:
                            ae = 5;
                            break e;
                        case 7:
                            pp(n) ? (ae = 0,
                            it = null,
                            Up(t)) : (ae = 0,
                            it = null,
                            xl(e, t, n, 7));
                            break;
                        case 5:
                            var u = null;
                            switch ($.tag) {
                            case 26:
                                u = $.memoizedState;
                            case 5:
                            case 27:
                                var r = $;
                                if (!u || Ax(u)) {
                                    ae = 0,
                                    it = null;
                                    var s = r.sibling;
                                    if (s !== null)
                                        $ = s;
                                    else {
                                        var i = r.return;
                                        i !== null ? ($ = i,
                                        ys(i)) : $ = null
                                    }
                                    break t
                                }
                            }
                            ae = 0,
                            it = null,
                            xl(e, t, n, 5);
                            break;
                        case 6:
                            ae = 0,
                            it = null,
                            xl(e, t, n, 6);
                            break;
                        case 8:
                            Yc(),
                            he = 6;
                            break e;
                        default:
                            throw Error(E(462))
                        }
                    }
                    DS();
                    break
                } catch (f) {
                    mx(e, f)
                }
            while (!0);
            return ha = Vo = null,
            B.H = o,
            B.A = l,
            pe = a,
            $ !== null ? 0 : (oe = null,
            X = 0,
            ms(),
            he)
        }
        function DS() {
            for (; $ !== null && !eb(); )
                hx($)
        }
        function hx(e) {
            var t = $h(e.alternate, e, ba);
            e.memoizedProps = e.pendingProps,
            t === null ? ys(e) : $ = t
        }
        function Up(e) {
            var t = e
              , a = t.alternate;
            switch (t.tag) {
            case 15:
            case 0:
                t = Op(a, t, t.pendingProps, t.type, void 0, X);
                break;
            case 11:
                t = Op(a, t, t.pendingProps, t.type.render, t.ref, X);
                break;
            case 5:
                Dc(t);
            default:
                fx(a, t),
                t = $ = sx(t, ba),
                t = $h(a, t, ba)
            }
            e.memoizedProps = e.pendingProps,
            t === null ? ys(e) : $ = t
        }
        function xl(e, t, a, o) {
            ha = Vo = null,
            Dc(t),
            bl = null,
            Gn = 0;
            var l = t.return;
            try {
                if (yS(e, l, t, a, X)) {
                    he = 1,
                    Kr(e, Tt(a, e.current)),
                    $ = null;
                    return
                }
            } catch (n) {
                if (l !== null)
                    throw $ = l,
                    n;
                he = 1,
                Kr(e, Tt(a, e.current)),
                $ = null;
                return
            }
            t.flags & 32768 ? (j || o === 1 ? e = !0 : Ul || (X & 536870912) !== 0 ? e = !1 : (fa = e = !0,
            (o === 2 || o === 3 || o === 6) && (o = Ot.current,
            o !== null && o.tag === 13 && (o.flags |= 16384))),
            xx(t, e)) : ys(t)
        }
        function ys(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    xx(t, fa);
                    return
                }
                e = t.return;
                var a = wS(t.alternate, t, ba);
                if (a !== null) {
                    $ = a;
                    return
                }
                if (t = t.sibling,
                t !== null) {
                    $ = t;
                    return
                }
                $ = t = e
            } while (t !== null);
            he === 0 && (he = 5)
        }
        function xx(e, t) {
            do {
                var a = TS(e.alternate, e);
                if (a !== null) {
                    a.flags &= 32767,
                    $ = a;
                    return
                }
                if (a = e.return,
                a !== null && (a.flags |= 32768,
                a.subtreeFlags = 0,
                a.deletions = null),
                !t && (e = e.sibling,
                e !== null)) {
                    $ = e;
                    return
                }
                $ = e = a
            } while (e !== null);
            he = 6,
            $ = null
        }
        function Hp(e, t, a, o, l, n, u, r, s, i) {
            var f = B.T
              , g = ne.p;
            try {
                ne.p = 2,
                B.T = null,
                kS(e, t, a, o, g, l, n, u, r, s, i)
            } finally {
                B.T = f,
                ne.p = g
            }
        }
        function kS(e, t, a, o, l, n, u, r) {
            do
                wl();
            while (wo !== null);
            if ((pe & 6) !== 0)
                throw Error(E(327));
            var s = e.finishedWork;
            if (o = e.finishedLanes,
            s === null)
                return null;
            if (e.finishedWork = null,
            e.finishedLanes = 0,
            s === e.current)
                throw Error(E(177));
            e.callbackNode = null,
            e.callbackPriority = 0,
            e.cancelPendingCommit = null;
            var i = s.lanes | s.childLanes;
            if (i |= bc,
            cb(e, o, i, n, u, r),
            e === oe && ($ = oe = null,
            X = 0),
            (s.subtreeFlags & 10256) === 0 && (s.flags & 10256) === 0 || xr || (xr = !0,
            Qf = i,
            Zf = a,
            FS(Ur, function() {
                return wl(!0),
                null
            })),
            a = (s.flags & 15990) !== 0,
            (s.subtreeFlags & 15990) !== 0 || a ? (a = B.T,
            B.T = null,
            n = ne.p,
            ne.p = 2,
            u = pe,
            pe |= 4,
            SS(e, s),
            tx(s, e),
            oS(nc, e.containerInfo),
            rs = !!lc,
            nc = lc = null,
            e.current = s,
            Qh(e, s.alternate, s),
            tb(),
            pe = u,
            ne.p = n,
            B.T = a) : e.current = s,
            xr ? (xr = !1,
            wo = e,
            Fn = o) : vx(e, i),
            i = e.pendingLanes,
            i === 0 && (Wa = null),
            ub(s.stateNode, l),
            Jt(e),
            t !== null)
                for (l = e.onRecoverableError,
                s = 0; s < t.length; s++)
                    i = t[s],
                    l(i.value, {
                        componentStack: i.stack
                    });
            return (Fn & 3) !== 0 && wl(),
            i = e.pendingLanes,
            (o & 4194218) !== 0 && (i & 42) !== 0 ? e === Jf ? Un++ : (Un = 0,
            Jf = e) : Un = 0,
            iu(0, !1),
            null
        }
        function vx(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache,
            t != null && (e.pooledCache = null,
            nu(t)))
        }
        function wl() {
            if (wo !== null) {
                var e = wo
                  , t = Qf;
                Qf = 0;
                var a = bg(Fn)
                  , o = B.T
                  , l = ne.p;
                try {
                    if (ne.p = 32 > a ? 32 : a,
                    B.T = null,
                    wo === null)
                        var n = !1;
                    else {
                        a = Zf,
                        Zf = null;
                        var u = wo
                          , r = Fn;
                        if (wo = null,
                        Fn = 0,
                        (pe & 6) !== 0)
                            throw Error(E(331));
                        var s = pe;
                        if (pe |= 4,
                        ux(u.current),
                        ox(u, u.current, r, a),
                        pe = s,
                        iu(0, !1),
                        ct && typeof ct.onPostCommitFiberRoot == "function")
                            try {
                                ct.onPostCommitFiberRoot(eu, u)
                            } catch {}
                        n = !0
                    }
                    return n
                } finally {
                    ne.p = l,
                    B.T = o,
                    vx(e, t)
                }
            }
            return !1
        }
        function qp(e, t, a) {
            t = Tt(a, t),
            t = qf(e.stateNode, t, 2),
            e = Ya(e, t, 2),
            e !== null && (au(e, 2),
            Jt(e))
        }
        function te(e, t, a) {
            if (e.tag === 3)
                qp(e, e, a);
            else
                for (; t !== null; ) {
                    if (t.tag === 3) {
                        qp(t, e, a);
                        break
                    } else if (t.tag === 1) {
                        var o = t.stateNode;
                        if (typeof t.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (Wa === null || !Wa.has(o))) {
                            e = Tt(a, e),
                            a = _h(2),
                            o = Ya(t, a, 2),
                            o !== null && (Fh(a, o, t, e),
                            au(o, 2),
                            Jt(o));
                            break
                        }
                    }
                    t = t.return
                }
        }
        function df(e, t, a) {
            var o = e.pingCache;
            if (o === null) {
                o = e.pingCache = new RS;
                var l = new Set;
                o.set(t, l)
            } else
                l = o.get(t),
                l === void 0 && (l = new Set,
                o.set(t, l));
            l.has(a) || (Gc = !0,
            l.add(a),
            e = BS.bind(null, e, t, a),
            t.then(e, e))
        }
        function BS(e, t, a) {
            var o = e.pingCache;
            o !== null && o.delete(t),
            e.pingedLanes |= e.suspendedLanes & a,
            e.warmLanes &= ~a,
            oe === e && (X & a) === a && (he === 4 || he === 3 && (X & 62914560) === X && 300 > Kt() - jc ? (pe & 2) === 0 && kl(e, 0) : Xc |= a,
            Dl === X && (Dl = 0)),
            Jt(e)
        }
        function Lx(e, t) {
            t === 0 && (t = vg()),
            e = eo(e, t),
            e !== null && (au(e, t),
            Jt(e))
        }
        function PS(e) {
            var t = e.memoizedState
              , a = 0;
            t !== null && (a = t.retryLane),
            Lx(e, a)
        }
        function _S(e, t) {
            var a = 0;
            switch (e.tag) {
            case 13:
                var o = e.stateNode
                  , l = e.memoizedState;
                l !== null && (a = l.retryLane);
                break;
            case 19:
                o = e.stateNode;
                break;
            case 22:
                o = e.stateNode._retryCache;
                break;
            default:
                throw Error(E(314))
            }
            o !== null && o.delete(t),
            Lx(e, a)
        }
        function FS(e, t) {
            return mc(e, t)
        }
        var es = null
          , ul = null
          , ac = !1
          , ts = !1
          , mf = !1
          , ko = 0;
        function Jt(e) {
            e !== ul && e.next === null && (ul === null ? es = ul = e : ul = ul.next = e),
            ts = !0,
            ac || (ac = !0,
            HS(US))
        }
        function iu(e, t) {
            if (!mf && ts) {
                mf = !0;
                do
                    for (var a = !1, o = es; o !== null; ) {
                        if (!t)
                            if (e !== 0) {
                                var l = o.pendingLanes;
                                if (l === 0)
                                    var n = 0;
                                else {
                                    var u = o.suspendedLanes
                                      , r = o.pingedLanes;
                                    n = (1 << 31 - dt(42 | e) + 1) - 1,
                                    n &= l & ~(u & ~r),
                                    n = n & 201326677 ? n & 201326677 | 1 : n ? n | 2 : 0
                                }
                                n !== 0 && (a = !0,
                                zp(o, n))
                            } else
                                n = X,
                                n = is(o, o === oe ? n : 0),
                                (n & 3) === 0 || tu(o, n) || (a = !0,
                                zp(o, n));
                        o = o.next
                    }
                while (a);
                mf = !1
            }
        }
        function US() {
            ts = ac = !1;
            var e = 0;
            ko !== 0 && (GS() && (e = ko),
            ko = 0);
            for (var t = Kt(), a = null, o = es; o !== null; ) {
                var l = o.next
                  , n = yx(o, t);
                n === 0 ? (o.next = null,
                a === null ? es = l : a.next = l,
                l === null && (ul = a)) : (a = o,
                (e !== 0 || (n & 3) !== 0) && (ts = !0)),
                o = l
            }
            iu(e, !1)
        }
        function yx(e, t) {
            for (var a = e.suspendedLanes, o = e.pingedLanes, l = e.expirationTimes, n = e.pendingLanes & -62914561; 0 < n; ) {
                var u = 31 - dt(n)
                  , r = 1 << u
                  , s = l[u];
                s === -1 ? ((r & a) === 0 || (r & o) !== 0) && (l[u] = fb(r, t)) : s <= t && (e.expiredLanes |= r),
                n &= ~r
            }
            if (t = oe,
            a = X,
            a = is(e, e === t ? a : 0),
            o = e.callbackNode,
            a === 0 || e === t && ae === 2 || e.cancelPendingCommit !== null)
                return o !== null && o !== null && $i(o),
                e.callbackNode = null,
                e.callbackPriority = 0;
            if ((a & 3) === 0 || tu(e, a)) {
                if (t = a & -a,
                t === e.callbackPriority)
                    return t;
                switch (o !== null && $i(o),
                bg(a)) {
                case 2:
                case 8:
                    a = gg;
                    break;
                case 32:
                    a = Ur;
                    break;
                case 268435456:
                    a = hg;
                    break;
                default:
                    a = Ur
                }
                return o = bx.bind(null, e),
                a = mc(a, o),
                e.callbackPriority = t,
                e.callbackNode = a,
                t
            }
            return o !== null && o !== null && $i(o),
            e.callbackPriority = 2,
            e.callbackNode = null,
            2
        }
        function bx(e, t) {
            var a = e.callbackNode;
            if (wl() && e.callbackNode !== a)
                return null;
            var o = X;
            return o = is(e, e === oe ? o : 0),
            o === 0 ? null : (dx(e, o, t),
            yx(e, Kt()),
            e.callbackNode != null && e.callbackNode === a ? bx.bind(null, e) : null)
        }
        function zp(e, t) {
            if (wl())
                return null;
            dx(e, t, !0)
        }
        function HS(e) {
            jS(function() {
                (pe & 6) !== 0 ? mc(pg, e) : e()
            })
        }
        function Kc() {
            return ko === 0 && (ko = xg()),
            ko
        }
        function Np(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Ir("" + e)
        }
        function $p(e, t) {
            var a = t.ownerDocument.createElement("input");
            return a.name = t.name,
            a.value = t.value,
            e.id && a.setAttribute("form", e.id),
            t.parentNode.insertBefore(a, t),
            e = new FormData(e),
            a.parentNode.removeChild(a),
            e
        }
        function qS(e, t, a, o, l) {
            if (t === "submit" && a && a.stateNode === l) {
                var n = Np((l[nt] || null).action)
                  , u = o.submitter;
                u && (t = (t = u[nt] || null) ? Np(t.formAction) : u.getAttribute("formAction"),
                t !== null && (n = t,
                u = null));
                var r = new fs("action","action",null,o,l);
                e.push({
                    event: r,
                    listeners: [{
                        instance: null,
                        listener: function() {
                            if (o.defaultPrevented) {
                                if (ko !== 0) {
                                    var s = u ? $p(l, u) : new FormData(l);
                                    Uf(a, {
                                        pending: !0,
                                        data: s,
                                        method: l.method,
                                        action: n
                                    }, null, s)
                                }
                            } else
                                typeof n == "function" && (r.preventDefault(),
                                s = u ? $p(l, u) : new FormData(l),
                                Uf(a, {
                                    pending: !0,
                                    data: s,
                                    method: l.method,
                                    action: n
                                }, n, s))
                        },
                        currentTarget: l
                    }]
                })
            }
        }
        for (vr = 0; vr < fp.length; vr++)
            Lr = fp[vr],
            Vp = Lr.toLowerCase(),
            Gp = Lr[0].toUpperCase() + Lr.slice(1),
            Ht(Vp, "on" + Gp);
        var Lr, Vp, Gp, vr;
        Ht(Ng, "onAnimationEnd");
        Ht($g, "onAnimationIteration");
        Ht(Vg, "onAnimationStart");
        Ht("dblclick", "onDoubleClick");
        Ht("focusin", "onFocus");
        Ht("focusout", "onBlur");
        Ht(nS, "onTransitionRun");
        Ht(uS, "onTransitionStart");
        Ht(rS, "onTransitionCancel");
        Ht(Gg, "onTransitionEnd");
        El("onMouseEnter", ["mouseout", "mouseover"]);
        El("onMouseLeave", ["mouseout", "mouseover"]);
        El("onPointerEnter", ["pointerout", "pointerover"]);
        El("onPointerLeave", ["pointerout", "pointerover"]);
        Ho("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
        Ho("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
        Ho("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
        Ho("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
        Ho("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
        Ho("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
          , zS = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(jn));
        function Sx(e, t) {
            t = (t & 4) !== 0;
            for (var a = 0; a < e.length; a++) {
                var o = e[a]
                  , l = o.event;
                o = o.listeners;
                e: {
                    var n = void 0;
                    if (t)
                        for (var u = o.length - 1; 0 <= u; u--) {
                            var r = o[u]
                              , s = r.instance
                              , i = r.currentTarget;
                            if (r = r.listener,
                            s !== n && l.isPropagationStopped())
                                break e;
                            n = r,
                            l.currentTarget = i;
                            try {
                                n(l)
                            } catch (f) {
                                Yr(f)
                            }
                            l.currentTarget = null,
                            n = s
                        }
                    else
                        for (u = 0; u < o.length; u++) {
                            if (r = o[u],
                            s = r.instance,
                            i = r.currentTarget,
                            r = r.listener,
                            s !== n && l.isPropagationStopped())
                                break e;
                            n = r,
                            l.currentTarget = i;
                            try {
                                n(l)
                            } catch (f) {
                                Yr(f)
                            }
                            l.currentTarget = null,
                            n = s
                        }
                }
            }
        }
        function G(e, t) {
            var a = t[wf];
            a === void 0 && (a = t[wf] = new Set);
            var o = e + "__bubble";
            a.has(o) || (Cx(t, e, 2, !1),
            a.add(o))
        }
        function pf(e, t, a) {
            var o = 0;
            t && (o |= 4),
            Cx(a, e, o, t)
        }
        var yr = "_reactListening" + Math.random().toString(36).slice(2);
        function Wc(e) {
            if (!e[yr]) {
                e[yr] = !0,
                Cg.forEach(function(a) {
                    a !== "selectionchange" && (zS.has(a) || pf(a, !1, e),
                    pf(a, !0, e))
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[yr] || (t[yr] = !0,
                pf("selectionchange", !1, t))
            }
        }
        function Cx(e, t, a, o) {
            switch (Px(t)) {
            case 2:
                var l = m1;
                break;
            case 8:
                l = p1;
                break;
            default:
                l = ed
            }
            a = l.bind(null, t, a, e),
            l = void 0,
            !Of || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0),
            o ? l !== void 0 ? e.addEventListener(t, a, {
                capture: !0,
                passive: l
            }) : e.addEventListener(t, a, !0) : l !== void 0 ? e.addEventListener(t, a, {
                passive: l
            }) : e.addEventListener(t, a, !1)
        }
        function gf(e, t, a, o, l) {
            var n = o;
            if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
                e: for (; ; ) {
                    if (o === null)
                        return;
                    var u = o.tag;
                    if (u === 3 || u === 4) {
                        var r = o.stateNode.containerInfo;
                        if (r === l || r.nodeType === 8 && r.parentNode === l)
                            break;
                        if (u === 4)
                            for (u = o.return; u !== null; ) {
                                var s = u.tag;
                                if ((s === 3 || s === 4) && (s = u.stateNode.containerInfo,
                                s === l || s.nodeType === 8 && s.parentNode === l))
                                    return;
                                u = u.return
                            }
                        for (; r !== null; ) {
                            if (u = To(r),
                            u === null)
                                return;
                            if (s = u.tag,
                            s === 5 || s === 6 || s === 26 || s === 27) {
                                o = n = u;
                                continue e
                            }
                            r = r.parentNode
                        }
                    }
                    o = o.return
                }
            Mg(function() {
                var i = n
                  , f = hc(a)
                  , g = [];
                e: {
                    var m = Xg.get(e);
                    if (m !== void 0) {
                        var c = fs
                          , x = e;
                        switch (e) {
                        case "keypress":
                            if (Tr(a) === 0)
                                break e;
                        case "keydown":
                        case "keyup":
                            c = _b;
                            break;
                        case "focusin":
                            x = "focus",
                            c = Yi;
                            break;
                        case "focusout":
                            x = "blur",
                            c = Yi;
                            break;
                        case "beforeblur":
                        case "afterblur":
                            c = Yi;
                            break;
                        case "click":
                            if (a.button === 2)
                                break e;
                        case "auxclick":
                        case "dblclick":
                        case "mousedown":
                        case "mousemove":
                        case "mouseup":
                        case "mouseout":
                        case "mouseover":
                        case "contextmenu":
                            c = Jm;
                            break;
                        case "drag":
                        case "dragend":
                        case "dragenter":
                        case "dragexit":
                        case "dragleave":
                        case "dragover":
                        case "dragstart":
                        case "drop":
                            c = Ib;
                            break;
                        case "touchcancel":
                        case "touchend":
                        case "touchmove":
                        case "touchstart":
                            c = Hb;
                            break;
                        case Ng:
                        case $g:
                        case Vg:
                            c = Eb;
                            break;
                        case Gg:
                            c = zb;
                            break;
                        case "scroll":
                        case "scrollend":
                            c = Sb;
                            break;
                        case "wheel":
                            c = $b;
                            break;
                        case "copy":
                        case "cut":
                        case "paste":
                            c = Ob;
                            break;
                        case "gotpointercapture":
                        case "lostpointercapture":
                        case "pointercancel":
                        case "pointerdown":
                        case "pointermove":
                        case "pointerout":
                        case "pointerover":
                        case "pointerup":
                            c = tp;
                            break;
                        case "toggle":
                        case "beforetoggle":
                            c = Gb
                        }
                        var L = (t & 4) !== 0
                          , S = !L && (e === "scroll" || e === "scrollend")
                          , h = L ? m !== null ? m + "Capture" : null : m;
                        L = [];
                        for (var d = i, p; d !== null; ) {
                            var v = d;
                            if (p = v.stateNode,
                            v = v.tag,
                            v !== 5 && v !== 26 && v !== 27 || p === null || h === null || (v = zn(d, h),
                            v != null && L.push(Yn(d, v, p))),
                            S)
                                break;
                            d = d.return
                        }
                        0 < L.length && (m = new c(m,x,null,a,f),
                        g.push({
                            event: m,
                            listeners: L
                        }))
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (m = e === "mouseover" || e === "pointerover",
                        c = e === "mouseout" || e === "pointerout",
                        m && a !== Rf && (x = a.relatedTarget || a.fromElement) && (To(x) || x[_l]))
                            break e;
                        if ((c || m) && (m = f.window === f ? f : (m = f.ownerDocument) ? m.defaultView || m.parentWindow : window,
                        c ? (x = a.relatedTarget || a.toElement,
                        c = i,
                        x = x ? To(x) : null,
                        x !== null && (S = Pl(x),
                        L = x.tag,
                        x !== S || L !== 5 && L !== 27 && L !== 6) && (x = null)) : (c = null,
                        x = i),
                        c !== x)) {
                            if (L = Jm,
                            v = "onMouseLeave",
                            h = "onMouseEnter",
                            d = "mouse",
                            (e === "pointerout" || e === "pointerover") && (L = tp,
                            v = "onPointerLeave",
                            h = "onPointerEnter",
                            d = "pointer"),
                            S = c == null ? m : Sn(c),
                            p = x == null ? m : Sn(x),
                            m = new L(v,d + "leave",c,a,f),
                            m.target = S,
                            m.relatedTarget = p,
                            v = null,
                            To(f) === i && (L = new L(h,d + "enter",x,a,f),
                            L.target = p,
                            L.relatedTarget = S,
                            v = L),
                            S = v,
                            c && x)
                                t: {
                                    for (L = c,
                                    h = x,
                                    d = 0,
                                    p = L; p; p = ol(p))
                                        d++;
                                    for (p = 0,
                                    v = h; v; v = ol(v))
                                        p++;
                                    for (; 0 < d - p; )
                                        L = ol(L),
                                        d--;
                                    for (; 0 < p - d; )
                                        h = ol(h),
                                        p--;
                                    for (; d--; ) {
                                        if (L === h || h !== null && L === h.alternate)
                                            break t;
                                        L = ol(L),
                                        h = ol(h)
                                    }
                                    L = null
                                }
                            else
                                L = null;
                            c !== null && Xp(g, m, c, L, !1),
                            x !== null && S !== null && Xp(g, S, x, L, !0)
                        }
                    }
                    e: {
                        if (m = i ? Sn(i) : window,
                        c = m.nodeName && m.nodeName.toLowerCase(),
                        c === "select" || c === "input" && m.type === "file")
                            var y = np;
                        else if (lp(m))
                            if (Fg)
                                y = tS;
                            else {
                                y = Jb;
                                var I = Zb
                            }
                        else
                            c = m.nodeName,
                            !c || c.toLowerCase() !== "input" || m.type !== "checkbox" && m.type !== "radio" ? i && gc(i.elementType) && (y = np) : y = eS;
                        if (y && (y = y(e, i))) {
                            _g(g, y, a, f);
                            break e
                        }
                        I && I(e, m, i),
                        e === "focusout" && i && m.type === "number" && i.memoizedProps.value != null && Ef(m, "number", m.value)
                    }
                    switch (I = i ? Sn(i) : window,
                    e) {
                    case "focusin":
                        (lp(I) || I.contentEditable === "true") && (cl = I,
                        Af = i,
                        Tn = null);
                        break;
                    case "focusout":
                        Tn = Af = cl = null;
                        break;
                    case "mousedown":
                        Mf = !0;
                        break;
                    case "contextmenu":
                    case "mouseup":
                    case "dragend":
                        Mf = !1,
                        ip(g, a, f);
                        break;
                    case "selectionchange":
                        if (lS)
                            break;
                    case "keydown":
                    case "keyup":
                        ip(g, a, f)
                    }
                    var b;
                    if (Lc)
                        e: {
                            switch (e) {
                            case "compositionstart":
                                var T = "onCompositionStart";
                                break e;
                            case "compositionend":
                                T = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                T = "onCompositionUpdate";
                                break e
                            }
                            T = void 0
                        }
                    else
                        fl ? Bg(e, a) && (T = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (T = "onCompositionStart");
                    T && (kg && a.locale !== "ko" && (fl || T !== "onCompositionStart" ? T === "onCompositionEnd" && fl && (b = Dg()) : (Ga = f,
                    xc = "value"in Ga ? Ga.value : Ga.textContent,
                    fl = !0)),
                    I = as(i, T),
                    0 < I.length && (T = new ep(T,e,null,a,f),
                    g.push({
                        event: T,
                        listeners: I
                    }),
                    b ? T.data = b : (b = Pg(a),
                    b !== null && (T.data = b)))),
                    (b = jb ? Yb(e, a) : Kb(e, a)) && (T = as(i, "onBeforeInput"),
                    0 < T.length && (I = new ep("onBeforeInput","beforeinput",null,a,f),
                    g.push({
                        event: I,
                        listeners: T
                    }),
                    I.data = b)),
                    qS(g, e, i, a, f)
                }
                Sx(g, t)
            })
        }
        function Yn(e, t, a) {
            return {
                instance: e,
                listener: t,
                currentTarget: a
            }
        }
        function as(e, t) {
            for (var a = t + "Capture", o = []; e !== null; ) {
                var l = e
                  , n = l.stateNode;
                l = l.tag,
                l !== 5 && l !== 26 && l !== 27 || n === null || (l = zn(e, a),
                l != null && o.unshift(Yn(e, l, n)),
                l = zn(e, t),
                l != null && o.push(Yn(e, l, n))),
                e = e.return
            }
            return o
        }
        function ol(e) {
            if (e === null)
                return null;
            do
                e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null
        }
        function Xp(e, t, a, o, l) {
            for (var n = t._reactName, u = []; a !== null && a !== o; ) {
                var r = a
                  , s = r.alternate
                  , i = r.stateNode;
                if (r = r.tag,
                s !== null && s === o)
                    break;
                r !== 5 && r !== 26 && r !== 27 || i === null || (s = i,
                l ? (i = zn(a, n),
                i != null && u.unshift(Yn(a, i, s))) : l || (i = zn(a, n),
                i != null && u.push(Yn(a, i, s)))),
                a = a.return
            }
            u.length !== 0 && e.push({
                event: t,
                listeners: u
            })
        }
        var NS = /\r\n?/g
          , $S = /\u0000|\uFFFD/g;
        function jp(e) {
            return (typeof e == "string" ? e : "" + e).replace(NS, `
`).replace($S, "")
        }
        function Ix(e, t) {
            return t = jp(t),
            jp(e) === t
        }
        function bs() {}
        function Z(e, t, a, o, l, n) {
            switch (a) {
            case "children":
                typeof o == "string" ? t === "body" || t === "textarea" && o === "" || Rl(e, o) : (typeof o == "number" || typeof o == "bigint") && t !== "body" && Rl(e, "" + o);
                break;
            case "className":
                sr(e, "class", o);
                break;
            case "tabIndex":
                sr(e, "tabindex", o);
                break;
            case "dir":
            case "role":
            case "viewBox":
            case "width":
            case "height":
                sr(e, a, o);
                break;
            case "style":
                Ag(e, o, n);
                break;
            case "data":
                if (t !== "object") {
                    sr(e, "data", o);
                    break
                }
            case "src":
            case "href":
                if (o === "" && (t !== "a" || a !== "href")) {
                    e.removeAttribute(a);
                    break
                }
                if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
                    e.removeAttribute(a);
                    break
                }
                o = Ir("" + o),
                e.setAttribute(a, o);
                break;
            case "action":
            case "formAction":
                if (typeof o == "function") {
                    e.setAttribute(a, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                    break
                } else
                    typeof n == "function" && (a === "formAction" ? (t !== "input" && Z(e, t, "name", l.name, l, null),
                    Z(e, t, "formEncType", l.formEncType, l, null),
                    Z(e, t, "formMethod", l.formMethod, l, null),
                    Z(e, t, "formTarget", l.formTarget, l, null)) : (Z(e, t, "encType", l.encType, l, null),
                    Z(e, t, "method", l.method, l, null),
                    Z(e, t, "target", l.target, l, null)));
                if (o == null || typeof o == "symbol" || typeof o == "boolean") {
                    e.removeAttribute(a);
                    break
                }
                o = Ir("" + o),
                e.setAttribute(a, o);
                break;
            case "onClick":
                o != null && (e.onclick = bs);
                break;
            case "onScroll":
                o != null && G("scroll", e);
                break;
            case "onScrollEnd":
                o != null && G("scrollend", e);
                break;
            case "dangerouslySetInnerHTML":
                if (o != null) {
                    if (typeof o != "object" || !("__html"in o))
                        throw Error(E(61));
                    if (a = o.__html,
                    a != null) {
                        if (l.children != null)
                            throw Error(E(60));
                        e.innerHTML = a
                    }
                }
                break;
            case "multiple":
                e.multiple = o && typeof o != "function" && typeof o != "symbol";
                break;
            case "muted":
                e.muted = o && typeof o != "function" && typeof o != "symbol";
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "defaultValue":
            case "defaultChecked":
            case "innerHTML":
            case "ref":
                break;
            case "autoFocus":
                break;
            case "xlinkHref":
                if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
                    e.removeAttribute("xlink:href");
                    break
                }
                a = Ir("" + o),
                e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a);
                break;
            case "contentEditable":
            case "spellCheck":
            case "draggable":
            case "value":
            case "autoReverse":
            case "externalResourcesRequired":
            case "focusable":
            case "preserveAlpha":
                o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "" + o) : e.removeAttribute(a);
                break;
            case "inert":
            case "allowFullScreen":
            case "async":
            case "autoPlay":
            case "controls":
            case "default":
            case "defer":
            case "disabled":
            case "disablePictureInPicture":
            case "disableRemotePlayback":
            case "formNoValidate":
            case "hidden":
            case "loop":
            case "noModule":
            case "noValidate":
            case "open":
            case "playsInline":
            case "readOnly":
            case "required":
            case "reversed":
            case "scoped":
            case "seamless":
            case "itemScope":
                o && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
                break;
            case "capture":
            case "download":
                o === !0 ? e.setAttribute(a, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? e.setAttribute(a, o) : e.removeAttribute(a);
                break;
            case "cols":
            case "rows":
            case "size":
            case "span":
                o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? e.setAttribute(a, o) : e.removeAttribute(a);
                break;
            case "rowSpan":
            case "start":
                o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? e.removeAttribute(a) : e.setAttribute(a, o);
                break;
            case "popover":
                G("beforetoggle", e),
                G("toggle", e),
                Cr(e, "popover", o);
                break;
            case "xlinkActuate":
                na(e, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
                break;
            case "xlinkArcrole":
                na(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
                break;
            case "xlinkRole":
                na(e, "http://www.w3.org/1999/xlink", "xlink:role", o);
                break;
            case "xlinkShow":
                na(e, "http://www.w3.org/1999/xlink", "xlink:show", o);
                break;
            case "xlinkTitle":
                na(e, "http://www.w3.org/1999/xlink", "xlink:title", o);
                break;
            case "xlinkType":
                na(e, "http://www.w3.org/1999/xlink", "xlink:type", o);
                break;
            case "xmlBase":
                na(e, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
                break;
            case "xmlLang":
                na(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
                break;
            case "xmlSpace":
                na(e, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
                break;
            case "is":
                Cr(e, "is", o);
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = yb.get(a) || a,
                Cr(e, a, o))
            }
        }
        function oc(e, t, a, o, l, n) {
            switch (a) {
            case "style":
                Ag(e, o, n);
                break;
            case "dangerouslySetInnerHTML":
                if (o != null) {
                    if (typeof o != "object" || !("__html"in o))
                        throw Error(E(61));
                    if (a = o.__html,
                    a != null) {
                        if (l.children != null)
                            throw Error(E(60));
                        e.innerHTML = a
                    }
                }
                break;
            case "children":
                typeof o == "string" ? Rl(e, o) : (typeof o == "number" || typeof o == "bigint") && Rl(e, "" + o);
                break;
            case "onScroll":
                o != null && G("scroll", e);
                break;
            case "onScrollEnd":
                o != null && G("scrollend", e);
                break;
            case "onClick":
                o != null && (e.onclick = bs);
                break;
            case "suppressContentEditableWarning":
            case "suppressHydrationWarning":
            case "innerHTML":
            case "ref":
                break;
            case "innerText":
            case "textContent":
                break;
            default:
                if (!Ig.hasOwnProperty(a))
                    e: {
                        if (a[0] === "o" && a[1] === "n" && (l = a.endsWith("Capture"),
                        t = a.slice(2, l ? a.length - 7 : void 0),
                        n = e[nt] || null,
                        n = n != null ? n[a] : null,
                        typeof n == "function" && e.removeEventListener(t, n, l),
                        typeof o == "function")) {
                            typeof n != "function" && n !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)),
                            e.addEventListener(t, o, l);
                            break e
                        }
                        a in e ? e[a] = o : o === !0 ? e.setAttribute(a, "") : Cr(e, a, o)
                    }
            }
        }
        function Ne(e, t, a) {
            switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "img":
                G("error", e),
                G("load", e);
                var o = !1, l = !1, n;
                for (n in a)
                    if (a.hasOwnProperty(n)) {
                        var u = a[n];
                        if (u != null)
                            switch (n) {
                            case "src":
                                o = !0;
                                break;
                            case "srcSet":
                                l = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(E(137, t));
                            default:
                                Z(e, t, n, u, a, null)
                            }
                    }
                l && Z(e, t, "srcSet", a.srcSet, a, null),
                o && Z(e, t, "src", a.src, a, null);
                return;
            case "input":
                G("invalid", e);
                var r = n = u = l = null
                  , s = null
                  , i = null;
                for (o in a)
                    if (a.hasOwnProperty(o)) {
                        var f = a[o];
                        if (f != null)
                            switch (o) {
                            case "name":
                                l = f;
                                break;
                            case "type":
                                u = f;
                                break;
                            case "checked":
                                s = f;
                                break;
                            case "defaultChecked":
                                i = f;
                                break;
                            case "value":
                                n = f;
                                break;
                            case "defaultValue":
                                r = f;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (f != null)
                                    throw Error(E(137, t));
                                break;
                            default:
                                Z(e, t, o, f, a, null)
                            }
                    }
                Eg(e, n, r, s, i, u, l, !1),
                Hr(e);
                return;
            case "select":
                G("invalid", e),
                o = u = n = null;
                for (l in a)
                    if (a.hasOwnProperty(l) && (r = a[l],
                    r != null))
                        switch (l) {
                        case "value":
                            n = r;
                            break;
                        case "defaultValue":
                            u = r;
                            break;
                        case "multiple":
                            o = r;
                        default:
                            Z(e, t, l, r, a, null)
                        }
                t = n,
                a = u,
                e.multiple = !!o,
                t != null ? Ll(e, !!o, t, !1) : a != null && Ll(e, !!o, a, !0);
                return;
            case "textarea":
                G("invalid", e),
                n = l = o = null;
                for (u in a)
                    if (a.hasOwnProperty(u) && (r = a[u],
                    r != null))
                        switch (u) {
                        case "value":
                            o = r;
                            break;
                        case "defaultValue":
                            l = r;
                            break;
                        case "children":
                            n = r;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (r != null)
                                throw Error(E(91));
                            break;
                        default:
                            Z(e, t, u, r, a, null)
                        }
                Og(e, o, l, n),
                Hr(e);
                return;
            case "option":
                for (s in a)
                    if (a.hasOwnProperty(s) && (o = a[s],
                    o != null))
                        switch (s) {
                        case "selected":
                            e.selected = o && typeof o != "function" && typeof o != "symbol";
                            break;
                        default:
                            Z(e, t, s, o, a, null)
                        }
                return;
            case "dialog":
                G("cancel", e),
                G("close", e);
                break;
            case "iframe":
            case "object":
                G("load", e);
                break;
            case "video":
            case "audio":
                for (o = 0; o < jn.length; o++)
                    G(jn[o], e);
                break;
            case "image":
                G("error", e),
                G("load", e);
                break;
            case "details":
                G("toggle", e);
                break;
            case "embed":
            case "source":
            case "link":
                G("error", e),
                G("load", e);
            case "area":
            case "base":
            case "br":
            case "col":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "track":
            case "wbr":
            case "menuitem":
                for (i in a)
                    if (a.hasOwnProperty(i) && (o = a[i],
                    o != null))
                        switch (i) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(E(137, t));
                        default:
                            Z(e, t, i, o, a, null)
                        }
                return;
            default:
                if (gc(t)) {
                    for (f in a)
                        a.hasOwnProperty(f) && (o = a[f],
                        o !== void 0 && oc(e, t, f, o, a, void 0));
                    return
                }
            }
            for (r in a)
                a.hasOwnProperty(r) && (o = a[r],
                o != null && Z(e, t, r, o, a, null))
        }
        function VS(e, t, a, o) {
            switch (t) {
            case "div":
            case "span":
            case "svg":
            case "path":
            case "a":
            case "g":
            case "p":
            case "li":
                break;
            case "input":
                var l = null
                  , n = null
                  , u = null
                  , r = null
                  , s = null
                  , i = null
                  , f = null;
                for (c in a) {
                    var g = a[c];
                    if (a.hasOwnProperty(c) && g != null)
                        switch (c) {
                        case "checked":
                            break;
                        case "value":
                            break;
                        case "defaultValue":
                            s = g;
                        default:
                            o.hasOwnProperty(c) || Z(e, t, c, null, o, g)
                        }
                }
                for (var m in o) {
                    var c = o[m];
                    if (g = a[m],
                    o.hasOwnProperty(m) && (c != null || g != null))
                        switch (m) {
                        case "type":
                            n = c;
                            break;
                        case "name":
                            l = c;
                            break;
                        case "checked":
                            i = c;
                            break;
                        case "defaultChecked":
                            f = c;
                            break;
                        case "value":
                            u = c;
                            break;
                        case "defaultValue":
                            r = c;
                            break;
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (c != null)
                                throw Error(E(137, t));
                            break;
                        default:
                            c !== g && Z(e, t, m, c, o, g)
                        }
                }
                Tf(e, u, r, s, i, f, n, l);
                return;
            case "select":
                c = u = r = m = null;
                for (n in a)
                    if (s = a[n],
                    a.hasOwnProperty(n) && s != null)
                        switch (n) {
                        case "value":
                            break;
                        case "multiple":
                            c = s;
                        default:
                            o.hasOwnProperty(n) || Z(e, t, n, null, o, s)
                        }
                for (l in o)
                    if (n = o[l],
                    s = a[l],
                    o.hasOwnProperty(l) && (n != null || s != null))
                        switch (l) {
                        case "value":
                            m = n;
                            break;
                        case "defaultValue":
                            r = n;
                            break;
                        case "multiple":
                            u = n;
                        default:
                            n !== s && Z(e, t, l, n, o, s)
                        }
                t = r,
                a = u,
                o = c,
                m != null ? Ll(e, !!a, m, !1) : !!o != !!a && (t != null ? Ll(e, !!a, t, !0) : Ll(e, !!a, a ? [] : "", !1));
                return;
            case "textarea":
                c = m = null;
                for (r in a)
                    if (l = a[r],
                    a.hasOwnProperty(r) && l != null && !o.hasOwnProperty(r))
                        switch (r) {
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Z(e, t, r, null, o, l)
                        }
                for (u in o)
                    if (l = o[u],
                    n = a[u],
                    o.hasOwnProperty(u) && (l != null || n != null))
                        switch (u) {
                        case "value":
                            m = l;
                            break;
                        case "defaultValue":
                            c = l;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (l != null)
                                throw Error(E(91));
                            break;
                        default:
                            l !== n && Z(e, t, u, l, o, n)
                        }
                Rg(e, m, c);
                return;
            case "option":
                for (var x in a)
                    if (m = a[x],
                    a.hasOwnProperty(x) && m != null && !o.hasOwnProperty(x))
                        switch (x) {
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Z(e, t, x, null, o, m)
                        }
                for (s in o)
                    if (m = o[s],
                    c = a[s],
                    o.hasOwnProperty(s) && m !== c && (m != null || c != null))
                        switch (s) {
                        case "selected":
                            e.selected = m && typeof m != "function" && typeof m != "symbol";
                            break;
                        default:
                            Z(e, t, s, m, o, c)
                        }
                return;
            case "img":
            case "link":
            case "area":
            case "base":
            case "br":
            case "col":
            case "embed":
            case "hr":
            case "keygen":
            case "meta":
            case "param":
            case "source":
            case "track":
            case "wbr":
            case "menuitem":
                for (var L in a)
                    m = a[L],
                    a.hasOwnProperty(L) && m != null && !o.hasOwnProperty(L) && Z(e, t, L, null, o, m);
                for (i in o)
                    if (m = o[i],
                    c = a[i],
                    o.hasOwnProperty(i) && m !== c && (m != null || c != null))
                        switch (i) {
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (m != null)
                                throw Error(E(137, t));
                            break;
                        default:
                            Z(e, t, i, m, o, c)
                        }
                return;
            default:
                if (gc(t)) {
                    for (var S in a)
                        m = a[S],
                        a.hasOwnProperty(S) && m !== void 0 && !o.hasOwnProperty(S) && oc(e, t, S, void 0, o, m);
                    for (f in o)
                        m = o[f],
                        c = a[f],
                        !o.hasOwnProperty(f) || m === c || m === void 0 && c === void 0 || oc(e, t, f, m, o, c);
                    return
                }
            }
            for (var h in a)
                m = a[h],
                a.hasOwnProperty(h) && m != null && !o.hasOwnProperty(h) && Z(e, t, h, null, o, m);
            for (g in o)
                m = o[g],
                c = a[g],
                !o.hasOwnProperty(g) || m === c || m == null && c == null || Z(e, t, g, m, o, c)
        }
        var lc = null
          , nc = null;
        function os(e) {
            return e.nodeType === 9 ? e : e.ownerDocument
        }
        function Yp(e) {
            switch (e) {
            case "http://www.w3.org/2000/svg":
                return 1;
            case "http://www.w3.org/1998/Math/MathML":
                return 2;
            default:
                return 0
            }
        }
        function wx(e, t) {
            if (e === 0)
                switch (t) {
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0
                }
            return e === 1 && t === "foreignObject" ? 0 : e
        }
        function uc(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
        }
        var hf = null;
        function GS() {
            var e = window.event;
            return e && e.type === "popstate" ? e === hf ? !1 : (hf = e,
            !0) : (hf = null,
            !1)
        }
        var Tx = typeof setTimeout == "function" ? setTimeout : void 0
          , XS = typeof clearTimeout == "function" ? clearTimeout : void 0
          , Kp = typeof Promise == "function" ? Promise : void 0
          , jS = typeof queueMicrotask == "function" ? queueMicrotask : typeof Kp < "u" ? function(e) {
            return Kp.resolve(null).then(e).catch(YS)
        }
        : Tx;
        function YS(e) {
            setTimeout(function() {
                throw e
            })
        }
        function xf(e, t) {
            var a = t
              , o = 0;
            do {
                var l = a.nextSibling;
                if (e.removeChild(a),
                l && l.nodeType === 8)
                    if (a = l.data,
                    a === "/$") {
                        if (o === 0) {
                            e.removeChild(l),
                            Jn(t);
                            return
                        }
                        o--
                    } else
                        a !== "$" && a !== "$?" && a !== "$!" || o++;
                a = l
            } while (a);
            Jn(t)
        }
        function rc(e) {
            var t = e.firstChild;
            for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
                var a = t;
                switch (t = t.nextSibling,
                a.nodeName) {
                case "HTML":
                case "HEAD":
                case "BODY":
                    rc(a),
                    pc(a);
                    continue;
                case "SCRIPT":
                case "STYLE":
                    continue;
                case "LINK":
                    if (a.rel.toLowerCase() === "stylesheet")
                        continue
                }
                e.removeChild(a)
            }
        }
        function KS(e, t, a, o) {
            for (; e.nodeType === 1; ) {
                var l = a;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!o && (e.nodeName !== "INPUT" || e.type !== "hidden"))
                        break
                } else if (o) {
                    if (!e[qn])
                        switch (t) {
                        case "meta":
                            if (!e.hasAttribute("itemprop"))
                                break;
                            return e;
                        case "link":
                            if (n = e.getAttribute("rel"),
                            n === "stylesheet" && e.hasAttribute("data-precedence"))
                                break;
                            if (n !== l.rel || e.getAttribute("href") !== (l.href == null ? null : l.href) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || e.getAttribute("title") !== (l.title == null ? null : l.title))
                                break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence"))
                                break;
                            return e;
                        case "script":
                            if (n = e.getAttribute("src"),
                            (n !== (l.src == null ? null : l.src) || e.getAttribute("type") !== (l.type == null ? null : l.type) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && n && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                                break;
                            return e;
                        default:
                            return e
                        }
                } else if (t === "input" && e.type === "hidden") {
                    var n = l.name == null ? null : "" + l.name;
                    if (l.type === "hidden" && e.getAttribute("name") === n)
                        return e
                } else
                    return e;
                if (e = Ut(e.nextSibling),
                e === null)
                    break
            }
            return null
        }
        function WS(e, t, a) {
            if (t === "")
                return null;
            for (; e.nodeType !== 3; )
                if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Ut(e.nextSibling),
                e === null))
                    return null;
            return e
        }
        function Ut(e) {
            for (; e != null; e = e.nextSibling) {
                var t = e.nodeType;
                if (t === 1 || t === 3)
                    break;
                if (t === 8) {
                    if (t = e.data,
                    t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
                        break;
                    if (t === "/$")
                        return null
                }
            }
            return e
        }
        function Wp(e) {
            e = e.previousSibling;
            for (var t = 0; e; ) {
                if (e.nodeType === 8) {
                    var a = e.data;
                    if (a === "$" || a === "$!" || a === "$?") {
                        if (t === 0)
                            return e;
                        t--
                    } else
                        a === "/$" && t++
                }
                e = e.previousSibling
            }
            return null
        }
        function Ex(e, t, a) {
            switch (t = os(a),
            e) {
            case "html":
                if (e = t.documentElement,
                !e)
                    throw Error(E(452));
                return e;
            case "head":
                if (e = t.head,
                !e)
                    throw Error(E(453));
                return e;
            case "body":
                if (e = t.body,
                !e)
                    throw Error(E(454));
                return e;
            default:
                throw Error(E(451))
            }
        }
        var At = new Map
          , Qp = new Set;
        function ls(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.ownerDocument
        }
        var Sa = ne.d;
        ne.d = {
            f: QS,
            r: ZS,
            D: JS,
            C: e1,
            L: t1,
            m: a1,
            X: l1,
            S: o1,
            M: n1
        };
        function QS() {
            var e = Sa.f()
              , t = Ls();
            return e || t
        }
        function ZS(e) {
            var t = Fl(e);
            t !== null && t.tag === 5 && t.type === "form" ? Eh(t) : Sa.r(e)
        }
        var Hl = typeof document > "u" ? null : document;
        function Rx(e, t, a) {
            var o = Hl;
            if (o && typeof t == "string" && t) {
                var l = wt(t);
                l = 'link[rel="' + e + '"][href="' + l + '"]',
                typeof a == "string" && (l += '[crossorigin="' + a + '"]'),
                Qp.has(l) || (Qp.add(l),
                e = {
                    rel: e,
                    crossOrigin: a,
                    href: t
                },
                o.querySelector(l) === null && (t = o.createElement("link"),
                Ne(t, "link", e),
                Be(t),
                o.head.appendChild(t)))
            }
        }
        function JS(e) {
            Sa.D(e),
            Rx("dns-prefetch", e, null)
        }
        function e1(e, t) {
            Sa.C(e, t),
            Rx("preconnect", e, t)
        }
        function t1(e, t, a) {
            Sa.L(e, t, a);
            var o = Hl;
            if (o && e && t) {
                var l = 'link[rel="preload"][as="' + wt(t) + '"]';
                t === "image" && a && a.imageSrcSet ? (l += '[imagesrcset="' + wt(a.imageSrcSet) + '"]',
                typeof a.imageSizes == "string" && (l += '[imagesizes="' + wt(a.imageSizes) + '"]')) : l += '[href="' + wt(e) + '"]';
                var n = l;
                switch (t) {
                case "style":
                    n = Bl(e);
                    break;
                case "script":
                    n = ql(e)
                }
                At.has(n) || (e = ue({
                    rel: "preload",
                    href: t === "image" && a && a.imageSrcSet ? void 0 : e,
                    as: t
                }, a),
                At.set(n, e),
                o.querySelector(l) !== null || t === "style" && o.querySelector(fu(n)) || t === "script" && o.querySelector(cu(n)) || (t = o.createElement("link"),
                Ne(t, "link", e),
                Be(t),
                o.head.appendChild(t)))
            }
        }
        function a1(e, t) {
            Sa.m(e, t);
            var a = Hl;
            if (a && e) {
                var o = t && typeof t.as == "string" ? t.as : "script"
                  , l = 'link[rel="modulepreload"][as="' + wt(o) + '"][href="' + wt(e) + '"]'
                  , n = l;
                switch (o) {
                case "audioworklet":
                case "paintworklet":
                case "serviceworker":
                case "sharedworker":
                case "worker":
                case "script":
                    n = ql(e)
                }
                if (!At.has(n) && (e = ue({
                    rel: "modulepreload",
                    href: e
                }, t),
                At.set(n, e),
                a.querySelector(l) === null)) {
                    switch (o) {
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        if (a.querySelector(cu(n)))
                            return
                    }
                    o = a.createElement("link"),
                    Ne(o, "link", e),
                    Be(o),
                    a.head.appendChild(o)
                }
            }
        }
        function o1(e, t, a) {
            Sa.S(e, t, a);
            var o = Hl;
            if (o && e) {
                var l = vl(o).hoistableStyles
                  , n = Bl(e);
                t = t || "default";
                var u = l.get(n);
                if (!u) {
                    var r = {
                        loading: 0,
                        preload: null
                    };
                    if (u = o.querySelector(fu(n)))
                        r.loading = 5;
                    else {
                        e = ue({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, a),
                        (a = At.get(n)) && Qc(e, a);
                        var s = u = o.createElement("link");
                        Be(s),
                        Ne(s, "link", e),
                        s._p = new Promise(function(i, f) {
                            s.onload = i,
                            s.onerror = f
                        }
                        ),
                        s.addEventListener("load", function() {
                            r.loading |= 1
                        }),
                        s.addEventListener("error", function() {
                            r.loading |= 2
                        }),
                        r.loading |= 4,
                        Dr(u, t, o)
                    }
                    u = {
                        type: "stylesheet",
                        instance: u,
                        count: 1,
                        state: r
                    },
                    l.set(n, u)
                }
            }
        }
        function l1(e, t) {
            Sa.X(e, t);
            var a = Hl;
            if (a && e) {
                var o = vl(a).hoistableScripts
                  , l = ql(e)
                  , n = o.get(l);
                n || (n = a.querySelector(cu(l)),
                n || (e = ue({
                    src: e,
                    async: !0
                }, t),
                (t = At.get(l)) && Zc(e, t),
                n = a.createElement("script"),
                Be(n),
                Ne(n, "link", e),
                a.head.appendChild(n)),
                n = {
                    type: "script",
                    instance: n,
                    count: 1,
                    state: null
                },
                o.set(l, n))
            }
        }
        function n1(e, t) {
            Sa.M(e, t);
            var a = Hl;
            if (a && e) {
                var o = vl(a).hoistableScripts
                  , l = ql(e)
                  , n = o.get(l);
                n || (n = a.querySelector(cu(l)),
                n || (e = ue({
                    src: e,
                    async: !0,
                    type: "module"
                }, t),
                (t = At.get(l)) && Zc(e, t),
                n = a.createElement("script"),
                Be(n),
                Ne(n, "link", e),
                a.head.appendChild(n)),
                n = {
                    type: "script",
                    instance: n,
                    count: 1,
                    state: null
                },
                o.set(l, n))
            }
        }
        function Zp(e, t, a, o) {
            var l = (l = Xa.current) ? ls(l) : null;
            if (!l)
                throw Error(E(446));
            switch (e) {
            case "meta":
            case "title":
                return null;
            case "style":
                return typeof a.precedence == "string" && typeof a.href == "string" ? (t = Bl(a.href),
                a = vl(l).hoistableStyles,
                o = a.get(t),
                o || (o = {
                    type: "style",
                    instance: null,
                    count: 0,
                    state: null
                },
                a.set(t, o)),
                o) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            case "link":
                if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
                    e = Bl(a.href);
                    var n = vl(l).hoistableStyles
                      , u = n.get(e);
                    if (u || (l = l.ownerDocument || l,
                    u = {
                        type: "stylesheet",
                        instance: null,
                        count: 0,
                        state: {
                            loading: 0,
                            preload: null
                        }
                    },
                    n.set(e, u),
                    (n = l.querySelector(fu(e))) && !n._p && (u.instance = n,
                    u.state.loading = 5),
                    At.has(e) || (a = {
                        rel: "preload",
                        as: "style",
                        href: a.href,
                        crossOrigin: a.crossOrigin,
                        integrity: a.integrity,
                        media: a.media,
                        hrefLang: a.hrefLang,
                        referrerPolicy: a.referrerPolicy
                    },
                    At.set(e, a),
                    n || u1(l, e, a, u.state))),
                    t && o === null)
                        throw Error(E(528, ""));
                    return u
                }
                if (t && o !== null)
                    throw Error(E(529, ""));
                return null;
            case "script":
                return t = a.async,
                a = a.src,
                typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ql(a),
                a = vl(l).hoistableScripts,
                o = a.get(t),
                o || (o = {
                    type: "script",
                    instance: null,
                    count: 0,
                    state: null
                },
                a.set(t, o)),
                o) : {
                    type: "void",
                    instance: null,
                    count: 0,
                    state: null
                };
            default:
                throw Error(E(444, e))
            }
        }
        function Bl(e) {
            return 'href="' + wt(e) + '"'
        }
        function fu(e) {
            return 'link[rel="stylesheet"][' + e + "]"
        }
        function Ox(e) {
            return ue({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            })
        }
        function u1(e, t, a, o) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? o.loading = 1 : (t = e.createElement("link"),
            o.preload = t,
            t.addEventListener("load", function() {
                return o.loading |= 1
            }),
            t.addEventListener("error", function() {
                return o.loading |= 2
            }),
            Ne(t, "link", a),
            Be(t),
            e.head.appendChild(t))
        }
        function ql(e) {
            return '[src="' + wt(e) + '"]'
        }
        function cu(e) {
            return "script[async]" + e
        }
        function Jp(e, t, a) {
            if (t.count++,
            t.instance === null)
                switch (t.type) {
                case "style":
                    var o = e.querySelector('style[data-href~="' + wt(a.href) + '"]');
                    if (o)
                        return t.instance = o,
                        Be(o),
                        o;
                    var l = ue({}, a, {
                        "data-href": a.href,
                        "data-precedence": a.precedence,
                        href: null,
                        precedence: null
                    });
                    return o = (e.ownerDocument || e).createElement("style"),
                    Be(o),
                    Ne(o, "style", l),
                    Dr(o, a.precedence, e),
                    t.instance = o;
                case "stylesheet":
                    l = Bl(a.href);
                    var n = e.querySelector(fu(l));
                    if (n)
                        return t.state.loading |= 4,
                        t.instance = n,
                        Be(n),
                        n;
                    o = Ox(a),
                    (l = At.get(l)) && Qc(o, l),
                    n = (e.ownerDocument || e).createElement("link"),
                    Be(n);
                    var u = n;
                    return u._p = new Promise(function(r, s) {
                        u.onload = r,
                        u.onerror = s
                    }
                    ),
                    Ne(n, "link", o),
                    t.state.loading |= 4,
                    Dr(n, a.precedence, e),
                    t.instance = n;
                case "script":
                    return n = ql(a.src),
                    (l = e.querySelector(cu(n))) ? (t.instance = l,
                    Be(l),
                    l) : (o = a,
                    (l = At.get(n)) && (o = ue({}, a),
                    Zc(o, l)),
                    e = e.ownerDocument || e,
                    l = e.createElement("script"),
                    Be(l),
                    Ne(l, "link", o),
                    e.head.appendChild(l),
                    t.instance = l);
                case "void":
                    return null;
                default:
                    throw Error(E(443, t.type))
                }
            else
                t.type === "stylesheet" && (t.state.loading & 4) === 0 && (o = t.instance,
                t.state.loading |= 4,
                Dr(o, a.precedence, e));
            return t.instance
        }
        function Dr(e, t, a) {
            for (var o = a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), l = o.length ? o[o.length - 1] : null, n = l, u = 0; u < o.length; u++) {
                var r = o[u];
                if (r.dataset.precedence === t)
                    n = r;
                else if (n !== l)
                    break
            }
            n ? n.parentNode.insertBefore(e, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a,
            t.insertBefore(e, t.firstChild))
        }
        function Qc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.title == null && (e.title = t.title)
        }
        function Zc(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
            e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
            e.integrity == null && (e.integrity = t.integrity)
        }
        var kr = null;
        function eg(e, t, a) {
            if (kr === null) {
                var o = new Map
                  , l = kr = new Map;
                l.set(a, o)
            } else
                l = kr,
                o = l.get(a),
                o || (o = new Map,
                l.set(a, o));
            if (o.has(e))
                return o;
            for (o.set(e, null),
            a = a.getElementsByTagName(e),
            l = 0; l < a.length; l++) {
                var n = a[l];
                if (!(n[qn] || n[Xe] || e === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var u = n.getAttribute(t) || "";
                    u = e + u;
                    var r = o.get(u);
                    r ? r.push(n) : o.set(u, [n])
                }
            }
            return o
        }
        function tg(e, t, a) {
            e = e.ownerDocument || e,
            e.head.insertBefore(a, t === "title" ? e.querySelector("head > title") : null)
        }
        function r1(e, t, a) {
            if (a === 1 || t.itemProp != null)
                return !1;
            switch (e) {
            case "meta":
            case "title":
                return !0;
            case "style":
                if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
                    break;
                return !0;
            case "link":
                if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
                    break;
                switch (t.rel) {
                case "stylesheet":
                    return e = t.disabled,
                    typeof t.precedence == "string" && e == null;
                default:
                    return !0
                }
            case "script":
                if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
                    return !0
            }
            return !1
        }
        function Ax(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0)
        }
        var Kn = null;
        function s1() {}
        function i1(e, t, a) {
            if (Kn === null)
                throw Error(E(475));
            var o = Kn;
            if (t.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (t.state.loading & 4) === 0) {
                if (t.instance === null) {
                    var l = Bl(a.href)
                      , n = e.querySelector(fu(l));
                    if (n) {
                        e = n._p,
                        e !== null && typeof e == "object" && typeof e.then == "function" && (o.count++,
                        o = ns.bind(o),
                        e.then(o, o)),
                        t.state.loading |= 4,
                        t.instance = n,
                        Be(n);
                        return
                    }
                    n = e.ownerDocument || e,
                    a = Ox(a),
                    (l = At.get(l)) && Qc(a, l),
                    n = n.createElement("link"),
                    Be(n);
                    var u = n;
                    u._p = new Promise(function(r, s) {
                        u.onload = r,
                        u.onerror = s
                    }
                    ),
                    Ne(n, "link", a),
                    t.instance = n
                }
                o.stylesheets === null && (o.stylesheets = new Map),
                o.stylesheets.set(t, e),
                (e = t.state.preload) && (t.state.loading & 3) === 0 && (o.count++,
                t = ns.bind(o),
                e.addEventListener("load", t),
                e.addEventListener("error", t))
            }
        }
        function f1() {
            if (Kn === null)
                throw Error(E(475));
            var e = Kn;
            return e.stylesheets && e.count === 0 && sc(e, e.stylesheets),
            0 < e.count ? function(t) {
                var a = setTimeout(function() {
                    if (e.stylesheets && sc(e, e.stylesheets),
                    e.unsuspend) {
                        var o = e.unsuspend;
                        e.unsuspend = null,
                        o()
                    }
                }, 6e4);
                return e.unsuspend = t,
                function() {
                    e.unsuspend = null,
                    clearTimeout(a)
                }
            }
            : null
        }
        function ns() {
            if (this.count--,
            this.count === 0) {
                if (this.stylesheets)
                    sc(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null,
                    e()
                }
            }
        }
        var us = null;
        function sc(e, t) {
            e.stylesheets = null,
            e.unsuspend !== null && (e.count++,
            us = new Map,
            t.forEach(c1, e),
            us = null,
            ns.call(e))
        }
        function c1(e, t) {
            if (!(t.state.loading & 4)) {
                var a = us.get(e);
                if (a)
                    var o = a.get(null);
                else {
                    a = new Map,
                    us.set(e, a);
                    for (var l = e.querySelectorAll("link[data-precedence],style[data-precedence]"), n = 0; n < l.length; n++) {
                        var u = l[n];
                        (u.nodeName === "LINK" || u.getAttribute("media") !== "not all") && (a.set(u.dataset.precedence, u),
                        o = u)
                    }
                    o && a.set(null, o)
                }
                l = t.instance,
                u = l.getAttribute("data-precedence"),
                n = a.get(u) || o,
                n === o && a.set(null, l),
                a.set(u, l),
                this.count++,
                o = ns.bind(this),
                l.addEventListener("load", o),
                l.addEventListener("error", o),
                n ? n.parentNode.insertBefore(l, n.nextSibling) : (e = e.nodeType === 9 ? e.head : e,
                e.insertBefore(l, e.firstChild)),
                t.state.loading |= 4
            }
        }
        var Wn = {
            $$typeof: da,
            Provider: null,
            Consumer: null,
            _currentValue: Ro,
            _currentValue2: Ro,
            _threadCount: 0
        };
        function d1(e, t, a, o, l, n, u, r) {
            this.tag = 1,
            this.containerInfo = e,
            this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
            this.timeoutHandle = -1,
            this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
            this.callbackPriority = 0,
            this.expirationTimes = Vi(-1),
            this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
            this.entanglements = Vi(0),
            this.hiddenUpdates = Vi(null),
            this.identifierPrefix = o,
            this.onUncaughtError = l,
            this.onCaughtError = n,
            this.onRecoverableError = u,
            this.pooledCache = null,
            this.pooledCacheLanes = 0,
            this.formState = r,
            this.incompleteTransitions = new Map
        }
        function Mx(e, t, a, o, l, n, u, r, s, i, f, g) {
            return e = new d1(e,t,a,u,r,s,i,g),
            t = 1,
            n === !0 && (t |= 24),
            n = Et(3, null, null, t),
            e.current = n,
            n.stateNode = e,
            t = Tc(),
            t.refCount++,
            e.pooledCache = t,
            t.refCount++,
            n.memoizedState = {
                element: o,
                isDehydrated: a,
                cache: t
            },
            zc(n),
            e
        }
        function Dx(e) {
            return e ? (e = pl,
            e) : pl
        }
        function kx(e, t, a, o, l, n) {
            l = Dx(l),
            o.context === null ? o.context = l : o.pendingContext = l,
            o = ja(t),
            o.payload = {
                element: a
            },
            n = n === void 0 ? null : n,
            n !== null && (o.callback = n),
            a = Ya(e, o, t),
            a !== null && (et(a, e, t),
            Dn(a, e, t))
        }
        function ag(e, t) {
            if (e = e.memoizedState,
            e !== null && e.dehydrated !== null) {
                var a = e.retryLane;
                e.retryLane = a !== 0 && a < t ? a : t
            }
        }
        function Jc(e, t) {
            ag(e, t),
            (e = e.alternate) && ag(e, t)
        }
        function Bx(e) {
            if (e.tag === 13) {
                var t = eo(e, 67108864);
                t !== null && et(t, e, 67108864),
                Jc(e, 67108864)
            }
        }
        var rs = !0;
        function m1(e, t, a, o) {
            var l = B.T;
            B.T = null;
            var n = ne.p;
            try {
                ne.p = 2,
                ed(e, t, a, o)
            } finally {
                ne.p = n,
                B.T = l
            }
        }
        function p1(e, t, a, o) {
            var l = B.T;
            B.T = null;
            var n = ne.p;
            try {
                ne.p = 8,
                ed(e, t, a, o)
            } finally {
                ne.p = n,
                B.T = l
            }
        }
        function ed(e, t, a, o) {
            if (rs) {
                var l = ic(o);
                if (l === null)
                    gf(e, t, o, ss, a),
                    og(e, o);
                else if (h1(l, e, t, a, o))
                    o.stopPropagation();
                else if (og(e, o),
                t & 4 && -1 < g1.indexOf(e)) {
                    for (; l !== null; ) {
                        var n = Fl(l);
                        if (n !== null)
                            switch (n.tag) {
                            case 3:
                                if (n = n.stateNode,
                                n.current.memoizedState.isDehydrated) {
                                    var u = Co(n.pendingLanes);
                                    if (u !== 0) {
                                        var r = n;
                                        for (r.pendingLanes |= 2,
                                        r.entangledLanes |= 2; u; ) {
                                            var s = 1 << 31 - dt(u);
                                            r.entanglements[1] |= s,
                                            u &= ~s
                                        }
                                        Jt(n),
                                        (pe & 6) === 0 && (Zr = Kt() + 500,
                                        iu(0, !1))
                                    }
                                }
                                break;
                            case 13:
                                r = eo(n, 2),
                                r !== null && et(r, n, 2),
                                Ls(),
                                Jc(n, 2)
                            }
                        if (n = ic(o),
                        n === null && gf(e, t, o, ss, a),
                        n === l)
                            break;
                        l = n
                    }
                    l !== null && o.stopPropagation()
                } else
                    gf(e, t, o, null, a)
            }
        }
        function ic(e) {
            return e = hc(e),
            td(e)
        }
        var ss = null;
        function td(e) {
            if (ss = null,
            e = To(e),
            e !== null) {
                var t = Pl(e);
                if (t === null)
                    e = null;
                else {
                    var a = t.tag;
                    if (a === 13) {
                        if (e = dg(t),
                        e !== null)
                            return e;
                        e = null
                    } else if (a === 3) {
                        if (t.stateNode.current.memoizedState.isDehydrated)
                            return t.tag === 3 ? t.stateNode.containerInfo : null;
                        e = null
                    } else
                        t !== e && (e = null)
                }
            }
            return ss = e,
            null
        }
        function Px(e) {
            switch (e) {
            case "beforetoggle":
            case "cancel":
            case "click":
            case "close":
            case "contextmenu":
            case "copy":
            case "cut":
            case "auxclick":
            case "dblclick":
            case "dragend":
            case "dragstart":
            case "drop":
            case "focusin":
            case "focusout":
            case "input":
            case "invalid":
            case "keydown":
            case "keypress":
            case "keyup":
            case "mousedown":
            case "mouseup":
            case "paste":
            case "pause":
            case "play":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
            case "ratechange":
            case "reset":
            case "resize":
            case "seeked":
            case "submit":
            case "toggle":
            case "touchcancel":
            case "touchend":
            case "touchstart":
            case "volumechange":
            case "change":
            case "selectionchange":
            case "textInput":
            case "compositionstart":
            case "compositionend":
            case "compositionupdate":
            case "beforeblur":
            case "afterblur":
            case "beforeinput":
            case "blur":
            case "fullscreenchange":
            case "focus":
            case "hashchange":
            case "popstate":
            case "select":
            case "selectstart":
                return 2;
            case "drag":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "mousemove":
            case "mouseout":
            case "mouseover":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "scroll":
            case "touchmove":
            case "wheel":
            case "mouseenter":
            case "mouseleave":
            case "pointerenter":
            case "pointerleave":
                return 8;
            case "message":
                switch (ab()) {
                case pg:
                    return 2;
                case gg:
                    return 8;
                case Ur:
                case ob:
                    return 32;
                case hg:
                    return 268435456;
                default:
                    return 32
                }
            default:
                return 32
            }
        }
        var fc = !1
          , Qa = null
          , Za = null
          , Ja = null
          , Qn = new Map
          , Zn = new Map
          , $a = []
          , g1 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function og(e, t) {
            switch (e) {
            case "focusin":
            case "focusout":
                Qa = null;
                break;
            case "dragenter":
            case "dragleave":
                Za = null;
                break;
            case "mouseover":
            case "mouseout":
                Ja = null;
                break;
            case "pointerover":
            case "pointerout":
                Qn.delete(t.pointerId);
                break;
            case "gotpointercapture":
            case "lostpointercapture":
                Zn.delete(t.pointerId)
            }
        }
        function xn(e, t, a, o, l, n) {
            return e === null || e.nativeEvent !== n ? (e = {
                blockedOn: t,
                domEventName: a,
                eventSystemFlags: o,
                nativeEvent: n,
                targetContainers: [l]
            },
            t !== null && (t = Fl(t),
            t !== null && Bx(t)),
            e) : (e.eventSystemFlags |= o,
            t = e.targetContainers,
            l !== null && t.indexOf(l) === -1 && t.push(l),
            e)
        }
        function h1(e, t, a, o, l) {
            switch (t) {
            case "focusin":
                return Qa = xn(Qa, e, t, a, o, l),
                !0;
            case "dragenter":
                return Za = xn(Za, e, t, a, o, l),
                !0;
            case "mouseover":
                return Ja = xn(Ja, e, t, a, o, l),
                !0;
            case "pointerover":
                var n = l.pointerId;
                return Qn.set(n, xn(Qn.get(n) || null, e, t, a, o, l)),
                !0;
            case "gotpointercapture":
                return n = l.pointerId,
                Zn.set(n, xn(Zn.get(n) || null, e, t, a, o, l)),
                !0
            }
            return !1
        }
        function _x(e) {
            var t = To(e.target);
            if (t !== null) {
                var a = Pl(t);
                if (a !== null) {
                    if (t = a.tag,
                    t === 13) {
                        if (t = dg(a),
                        t !== null) {
                            e.blockedOn = t,
                            db(e.priority, function() {
                                if (a.tag === 13) {
                                    var o = mt()
                                      , l = eo(a, o);
                                    l !== null && et(l, a, o),
                                    Jc(a, o)
                                }
                            });
                            return
                        }
                    } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
                        e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
                        return
                    }
                }
            }
            e.blockedOn = null
        }
        function Br(e) {
            if (e.blockedOn !== null)
                return !1;
            for (var t = e.targetContainers; 0 < t.length; ) {
                var a = ic(e.nativeEvent);
                if (a === null) {
                    a = e.nativeEvent;
                    var o = new a.constructor(a.type,a);
                    Rf = o,
                    a.target.dispatchEvent(o),
                    Rf = null
                } else
                    return t = Fl(a),
                    t !== null && Bx(t),
                    e.blockedOn = a,
                    !1;
                t.shift()
            }
            return !0
        }
        function lg(e, t, a) {
            Br(e) && a.delete(t)
        }
        function x1() {
            fc = !1,
            Qa !== null && Br(Qa) && (Qa = null),
            Za !== null && Br(Za) && (Za = null),
            Ja !== null && Br(Ja) && (Ja = null),
            Qn.forEach(lg),
            Zn.forEach(lg)
        }
        function br(e, t) {
            e.blockedOn === t && (e.blockedOn = null,
            fc || (fc = !0,
            Re.unstable_scheduleCallback(Re.unstable_NormalPriority, x1)))
        }
        var Sr = null;
        function ng(e) {
            Sr !== e && (Sr = e,
            Re.unstable_scheduleCallback(Re.unstable_NormalPriority, function() {
                Sr === e && (Sr = null);
                for (var t = 0; t < e.length; t += 3) {
                    var a = e[t]
                      , o = e[t + 1]
                      , l = e[t + 2];
                    if (typeof o != "function") {
                        if (td(o || a) === null)
                            continue;
                        break
                    }
                    var n = Fl(a);
                    n !== null && (e.splice(t, 3),
                    t -= 3,
                    Uf(n, {
                        pending: !0,
                        data: l,
                        method: a.method,
                        action: o
                    }, o, l))
                }
            }))
        }
        function Jn(e) {
            function t(s) {
                return br(s, e)
            }
            Qa !== null && br(Qa, e),
            Za !== null && br(Za, e),
            Ja !== null && br(Ja, e),
            Qn.forEach(t),
            Zn.forEach(t);
            for (var a = 0; a < $a.length; a++) {
                var o = $a[a];
                o.blockedOn === e && (o.blockedOn = null)
            }
            for (; 0 < $a.length && (a = $a[0],
            a.blockedOn === null); )
                _x(a),
                a.blockedOn === null && $a.shift();
            if (a = (e.ownerDocument || e).$$reactFormReplay,
            a != null)
                for (o = 0; o < a.length; o += 3) {
                    var l = a[o]
                      , n = a[o + 1]
                      , u = l[nt] || null;
                    if (typeof n == "function")
                        u || ng(a);
                    else if (u) {
                        var r = null;
                        if (n && n.hasAttribute("formAction")) {
                            if (l = n,
                            u = n[nt] || null)
                                r = u.formAction;
                            else if (td(l) !== null)
                                continue
                        } else
                            r = u.action;
                        typeof r == "function" ? a[o + 1] = r : (a.splice(o, 3),
                        o -= 3),
                        ng(a)
                    }
                }
        }
        function ad(e) {
            this._internalRoot = e
        }
        Ss.prototype.render = ad.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null)
                throw Error(E(409));
            var a = t.current
              , o = mt();
            kx(a, o, e, t, null, null)
        }
        ;
        Ss.prototype.unmount = ad.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                e.tag === 0 && wl(),
                kx(e.current, 2, null, e, null, null),
                Ls(),
                t[_l] = null
            }
        }
        ;
        function Ss(e) {
            this._internalRoot = e
        }
        Ss.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = Sg();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for (var a = 0; a < $a.length && t !== 0 && t < $a[a].priority; a++)
                    ;
                $a.splice(a, 0, e),
                a === 0 && _x(e)
            }
        }
        ;
        var ug = rg.version;
        if (ug !== "19.0.0")
            throw Error(E(527, ug, "19.0.0"));
        ne.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0)
                throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","),
                Error(E(268, e)));
            return e = Jy(t),
            e = e !== null ? mg(e) : null,
            e = e === null ? null : e.stateNode,
            e
        }
        ;
        var v1 = {
            bundleType: 0,
            version: "19.0.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: B,
            findFiberByHostInstance: To,
            reconcilerVersion: "19.0.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (vn = __REACT_DEVTOOLS_GLOBAL_HOOK__,
        !vn.isDisabled && vn.supportsFiber))
            try {
                eu = vn.inject(v1),
                ct = vn
            } catch {}
        var vn;
        Cs.createRoot = function(e, t) {
            if (!sg(e))
                throw Error(E(299));
            var a = !1
              , o = ""
              , l = kh
              , n = Bh
              , u = Ph
              , r = null;
            return t != null && (t.unstable_strictMode === !0 && (a = !0),
            t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
            t.onUncaughtError !== void 0 && (l = t.onUncaughtError),
            t.onCaughtError !== void 0 && (n = t.onCaughtError),
            t.onRecoverableError !== void 0 && (u = t.onRecoverableError),
            t.unstable_transitionCallbacks !== void 0 && (r = t.unstable_transitionCallbacks)),
            t = Mx(e, 1, !1, null, null, a, o, l, n, u, r, null),
            e[_l] = t.current,
            Wc(e.nodeType === 8 ? e.parentNode : e),
            new ad(t)
        }
        ;
        Cs.hydrateRoot = function(e, t, a) {
            if (!sg(e))
                throw Error(E(299));
            var o = !1
              , l = ""
              , n = kh
              , u = Bh
              , r = Ph
              , s = null
              , i = null;
            return a != null && (a.unstable_strictMode === !0 && (o = !0),
            a.identifierPrefix !== void 0 && (l = a.identifierPrefix),
            a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
            a.onCaughtError !== void 0 && (u = a.onCaughtError),
            a.onRecoverableError !== void 0 && (r = a.onRecoverableError),
            a.unstable_transitionCallbacks !== void 0 && (s = a.unstable_transitionCallbacks),
            a.formState !== void 0 && (i = a.formState)),
            t = Mx(e, 1, !0, t, a ?? null, o, l, n, u, r, s, i),
            t.context = Dx(null),
            a = t.current,
            o = mt(),
            l = ja(o),
            l.callback = null,
            Ya(a, l, o),
            t.current.lanes = o,
            au(t, o),
            Jt(t),
            e[_l] = t.current,
            Wc(e),
            new Ss(t)
        }
        ;
        Cs.version = "19.0.0"
    }
    );
    var qx = ka( (YT, Hx) => {
        "use strict";
        function Ux() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
                try {
                    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ux)
                } catch (e) {
                    console.error(e)
                }
        }
        Ux(),
        Hx.exports = Fx()
    }
    );
    var HT = {};
    Ty(HT, {
        renderStudio: () => UT
    });
    var my = A(M(), 1)
      , py = A(qx(), 1);
    var C = A(M(), 1);
    var ws = A(M(), 1);
    var zx = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
      , Is = (...e) => e.filter( (t, a, o) => !!t && t.trim() !== "" && o.indexOf(t) === a).join(" ").trim();
    var du = A(M(), 1);
    var Nx = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    var $x = (0,
    du.forwardRef)( ({color: e="currentColor", size: t=24, strokeWidth: a=2, absoluteStrokeWidth: o, className: l="", children: n, iconNode: u, ...r}, s) => (0,
    du.createElement)("svg", {
        ref: s,
        ...Nx,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: o ? Number(a) * 24 / Number(t) : a,
        className: Is("lucide", l),
        ...r
    }, [...u.map( ([i,f]) => (0,
    du.createElement)(i, f)), ...Array.isArray(n) ? n : [n]]));
    var le = (e, t) => {
        let a = (0,
        ws.forwardRef)( ({className: o, ...l}, n) => (0,
        ws.createElement)($x, {
            ref: n,
            iconNode: t,
            className: Is(`lucide-${zx(e)}`, o),
            ...l
        }));
        return a.displayName = `${e}`,
        a
    }
    ;
    var L1 = [["path", {
        d: "M20 6 9 17l-5-5",
        key: "1gmf2c"
    }]]
      , mu = le("Check", L1);
    var y1 = [["path", {
        d: "m6 9 6 6 6-6",
        key: "qrunsl"
    }]]
      , pu = le("ChevronDown", y1);
    var b1 = [["path", {
        d: "m9 18 6-6-6-6",
        key: "mthhwq"
    }]]
      , gu = le("ChevronRight", b1);
    var S1 = [["path", {
        d: "m7 15 5 5 5-5",
        key: "1hf1tw"
    }], ["path", {
        d: "m7 9 5-5 5 5",
        key: "sgt6xg"
    }]]
      , hu = le("ChevronsUpDown", S1);
    var C1 = [["rect", {
        width: "8",
        height: "4",
        x: "8",
        y: "2",
        rx: "1",
        ry: "1",
        key: "tgr4d6"
    }], ["path", {
        d: "M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",
        key: "4jdomd"
    }], ["path", {
        d: "M16 4h2a2 2 0 0 1 2 2v4",
        key: "3hqy98"
    }], ["path", {
        d: "M21 14H11",
        key: "1bme5i"
    }], ["path", {
        d: "m15 10-4 4 4 4",
        key: "5dvupr"
    }]]
      , zl = le("ClipboardCopy", C1);
    var I1 = [["path", {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        key: "ih7n3h"
    }], ["polyline", {
        points: "7 10 12 15 17 10",
        key: "2ggqvy"
    }], ["line", {
        x1: "12",
        x2: "12",
        y1: "15",
        y2: "3",
        key: "1vk2je"
    }]]
      , Nl = le("Download", I1);
    var w1 = [["circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    }], ["path", {
        d: "M12 16v-4",
        key: "1dtifu"
    }], ["path", {
        d: "M12 8h.01",
        key: "e9boi3"
    }]]
      , xu = le("Info", w1);
    var T1 = [["line", {
        x1: "2",
        x2: "5",
        y1: "12",
        y2: "12",
        key: "bvdh0s"
    }], ["line", {
        x1: "19",
        x2: "22",
        y1: "12",
        y2: "12",
        key: "1tbv5k"
    }], ["line", {
        x1: "12",
        x2: "12",
        y1: "2",
        y2: "5",
        key: "11lu5j"
    }], ["line", {
        x1: "12",
        x2: "12",
        y1: "19",
        y2: "22",
        key: "x3vr5v"
    }], ["path", {
        d: "M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",
        key: "1oh7ia"
    }], ["path", {
        d: "M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",
        key: "3qdecy"
    }], ["line", {
        x1: "2",
        x2: "22",
        y1: "2",
        y2: "22",
        key: "a6p6uj"
    }]]
      , $l = le("LocateOff", T1);
    var E1 = [["line", {
        x1: "2",
        x2: "5",
        y1: "12",
        y2: "12",
        key: "bvdh0s"
    }], ["line", {
        x1: "19",
        x2: "22",
        y1: "12",
        y2: "12",
        key: "1tbv5k"
    }], ["line", {
        x1: "12",
        x2: "12",
        y1: "2",
        y2: "5",
        key: "11lu5j"
    }], ["line", {
        x1: "12",
        x2: "12",
        y1: "19",
        y2: "22",
        key: "x3vr5v"
    }], ["circle", {
        cx: "12",
        cy: "12",
        r: "7",
        key: "fim9np"
    }]]
      , Vl = le("Locate", E1);
    var R1 = [["rect", {
        width: "18",
        height: "11",
        x: "3",
        y: "11",
        rx: "2",
        ry: "2",
        key: "1w4ew1"
    }], ["path", {
        d: "M7 11V7a5 5 0 0 1 10 0v4",
        key: "fwvmzm"
    }]]
      , Gl = le("Lock", R1);
    var O1 = [["path", {
        d: "M5 12h14",
        key: "1ays0h"
    }], ["path", {
        d: "M12 5v14",
        key: "s699le"
    }]]
      , vu = le("Plus", O1);
    var A1 = [["path", {
        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",
        key: "ih7n3h"
    }], ["polyline", {
        points: "17 8 12 3 7 8",
        key: "t8dd8p"
    }], ["line", {
        x1: "12",
        x2: "12",
        y1: "3",
        y2: "15",
        key: "widbto"
    }]]
      , Xl = le("Upload", A1);
    var M1 = [["path", {
        d: "M18 6 6 18",
        key: "1bl5f8"
    }], ["path", {
        d: "m6 6 12 12",
        key: "d8bk6v"
    }]]
      , Lu = le("X", M1);
    var Xx = A(M(), 1)
      , wa = A(M(), 1)
      , Os = A(M(), 1)
      , Ts = A(M(), 1)
      , Es = A(M(), 1);
    function Vx(e) {
        var t, a, o = "";
        if (typeof e == "string" || typeof e == "number")
            o += e;
        else if (typeof e == "object")
            if (Array.isArray(e)) {
                var l = e.length;
                for (t = 0; t < l; t++)
                    e[t] && (a = Vx(e[t])) && (o && (o += " "),
                    o += a)
            } else
                for (a in e)
                    e[a] && (o && (o += " "),
                    o += a);
        return o
    }
    function D1() {
        for (var e, t, a = 0, o = "", l = arguments.length; a < l; a++)
            (e = arguments[a]) && (t = Vx(e)) && (o && (o += " "),
            o += t);
        return o
    }
    var ea = D1;
    var ta = A(M(), 1)
      , Ds = A(M(), 1)
      , uo = A(M(), 1)
      , ks = A(M(), 1);
    var Ca = A(M(), 1)
      , at = A(M(), 1);
    function k1(e) {
        if (!e || typeof document > "u")
            return;
        let t = document.head || document.getElementsByTagName("head")[0]
          , a = document.createElement("style");
        a.type = "text/css",
        t.firstChild ? t.insertBefore(a, t.firstChild) : t.appendChild(a),
        a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e))
    }
    k1(`:root{--toastify-color-light: #fff;--toastify-color-dark: #121212;--toastify-color-info: #3498db;--toastify-color-success: #07bc0c;--toastify-color-warning: #f1c40f;--toastify-color-error: hsl(6, 78%, 57%);--toastify-color-transparent: rgba(255, 255, 255, .7);--toastify-icon-color-info: var(--toastify-color-info);--toastify-icon-color-success: var(--toastify-color-success);--toastify-icon-color-warning: var(--toastify-color-warning);--toastify-icon-color-error: var(--toastify-color-error);--toastify-container-width: fit-content;--toastify-toast-width: 320px;--toastify-toast-offset: 16px;--toastify-toast-top: max(var(--toastify-toast-offset), env(safe-area-inset-top));--toastify-toast-right: max(var(--toastify-toast-offset), env(safe-area-inset-right));--toastify-toast-left: max(var(--toastify-toast-offset), env(safe-area-inset-left));--toastify-toast-bottom: max(var(--toastify-toast-offset), env(safe-area-inset-bottom));--toastify-toast-background: #fff;--toastify-toast-padding: 14px;--toastify-toast-min-height: 64px;--toastify-toast-max-height: 800px;--toastify-toast-bd-radius: 6px;--toastify-toast-shadow: 0px 4px 12px rgba(0, 0, 0, .1);--toastify-font-family: sans-serif;--toastify-z-index: 9999;--toastify-text-color-light: #757575;--toastify-text-color-dark: #fff;--toastify-text-color-info: #fff;--toastify-text-color-success: #fff;--toastify-text-color-warning: #fff;--toastify-text-color-error: #fff;--toastify-spinner-color: #616161;--toastify-spinner-color-empty-area: #e0e0e0;--toastify-color-progress-light: linear-gradient(to right, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);--toastify-color-progress-dark: #bb86fc;--toastify-color-progress-info: var(--toastify-color-info);--toastify-color-progress-success: var(--toastify-color-success);--toastify-color-progress-warning: var(--toastify-color-warning);--toastify-color-progress-error: var(--toastify-color-error);--toastify-color-progress-bgo: .2}.Toastify__toast-container{z-index:var(--toastify-z-index);-webkit-transform:translate3d(0,0,var(--toastify-z-index));position:fixed;width:var(--toastify-container-width);box-sizing:border-box;color:#fff;display:flex;flex-direction:column}.Toastify__toast-container--top-left{top:var(--toastify-toast-top);left:var(--toastify-toast-left)}.Toastify__toast-container--top-center{top:var(--toastify-toast-top);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--top-right{top:var(--toastify-toast-top);right:var(--toastify-toast-right);align-items:end}.Toastify__toast-container--bottom-left{bottom:var(--toastify-toast-bottom);left:var(--toastify-toast-left)}.Toastify__toast-container--bottom-center{bottom:var(--toastify-toast-bottom);left:50%;transform:translate(-50%);align-items:center}.Toastify__toast-container--bottom-right{bottom:var(--toastify-toast-bottom);right:var(--toastify-toast-right);align-items:end}.Toastify__toast{--y: 0;position:relative;touch-action:none;width:var(--toastify-toast-width);min-height:var(--toastify-toast-min-height);box-sizing:border-box;margin-bottom:1rem;padding:var(--toastify-toast-padding);border-radius:var(--toastify-toast-bd-radius);box-shadow:var(--toastify-toast-shadow);max-height:var(--toastify-toast-max-height);font-family:var(--toastify-font-family);z-index:0;display:flex;flex:1 auto;align-items:center;word-break:break-word}@media only screen and (max-width: 480px){.Toastify__toast-container{width:100vw;left:env(safe-area-inset-left);margin:0}.Toastify__toast-container--top-left,.Toastify__toast-container--top-center,.Toastify__toast-container--top-right{top:env(safe-area-inset-top);transform:translate(0)}.Toastify__toast-container--bottom-left,.Toastify__toast-container--bottom-center,.Toastify__toast-container--bottom-right{bottom:env(safe-area-inset-bottom);transform:translate(0)}.Toastify__toast-container--rtl{right:env(safe-area-inset-right);left:initial}.Toastify__toast{--toastify-toast-width: 100%;margin-bottom:0;border-radius:0}}.Toastify__toast-container[data-stacked=true]{width:var(--toastify-toast-width)}.Toastify__toast--stacked{position:absolute;width:100%;transform:translate3d(0,var(--y),0) scale(var(--s));transition:transform .3s}.Toastify__toast--stacked[data-collapsed] .Toastify__toast-body,.Toastify__toast--stacked[data-collapsed] .Toastify__close-button{transition:opacity .1s}.Toastify__toast--stacked[data-collapsed=false]{overflow:visible}.Toastify__toast--stacked[data-collapsed=true]:not(:last-child)>*{opacity:0}.Toastify__toast--stacked:after{content:"";position:absolute;left:0;right:0;height:calc(var(--g) * 1px);bottom:100%}.Toastify__toast--stacked[data-pos=top]{top:0}.Toastify__toast--stacked[data-pos=bot]{bottom:0}.Toastify__toast--stacked[data-pos=bot].Toastify__toast--stacked:before{transform-origin:top}.Toastify__toast--stacked[data-pos=top].Toastify__toast--stacked:before{transform-origin:bottom}.Toastify__toast--stacked:before{content:"";position:absolute;left:0;right:0;bottom:0;height:100%;transform:scaleY(3);z-index:-1}.Toastify__toast--rtl{direction:rtl}.Toastify__toast--close-on-click{cursor:pointer}.Toastify__toast-icon{margin-inline-end:10px;width:22px;flex-shrink:0;display:flex}.Toastify--animate{animation-fill-mode:both;animation-duration:.5s}.Toastify--animate-icon{animation-fill-mode:both;animation-duration:.3s}.Toastify__toast-theme--dark{background:var(--toastify-color-dark);color:var(--toastify-text-color-dark)}.Toastify__toast-theme--light,.Toastify__toast-theme--colored.Toastify__toast--default{background:var(--toastify-color-light);color:var(--toastify-text-color-light)}.Toastify__toast-theme--colored.Toastify__toast--info{color:var(--toastify-text-color-info);background:var(--toastify-color-info)}.Toastify__toast-theme--colored.Toastify__toast--success{color:var(--toastify-text-color-success);background:var(--toastify-color-success)}.Toastify__toast-theme--colored.Toastify__toast--warning{color:var(--toastify-text-color-warning);background:var(--toastify-color-warning)}.Toastify__toast-theme--colored.Toastify__toast--error{color:var(--toastify-text-color-error);background:var(--toastify-color-error)}.Toastify__progress-bar-theme--light{background:var(--toastify-color-progress-light)}.Toastify__progress-bar-theme--dark{background:var(--toastify-color-progress-dark)}.Toastify__progress-bar--info{background:var(--toastify-color-progress-info)}.Toastify__progress-bar--success{background:var(--toastify-color-progress-success)}.Toastify__progress-bar--warning{background:var(--toastify-color-progress-warning)}.Toastify__progress-bar--error{background:var(--toastify-color-progress-error)}.Toastify__progress-bar-theme--colored.Toastify__progress-bar--info,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--success,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--warning,.Toastify__progress-bar-theme--colored.Toastify__progress-bar--error{background:var(--toastify-color-transparent)}.Toastify__close-button{color:#fff;position:absolute;top:6px;right:6px;background:transparent;outline:none;border:none;padding:0;cursor:pointer;opacity:.7;transition:.3s ease;z-index:1}.Toastify__toast--rtl .Toastify__close-button{left:6px;right:unset}.Toastify__close-button--light{color:#000;opacity:.3}.Toastify__close-button>svg{fill:currentColor;height:16px;width:14px}.Toastify__close-button:hover,.Toastify__close-button:focus{opacity:1}@keyframes Toastify__trackProgress{0%{transform:scaleX(1)}to{transform:scaleX(0)}}.Toastify__progress-bar{position:absolute;bottom:0;left:0;width:100%;height:100%;z-index:1;opacity:.7;transform-origin:left}.Toastify__progress-bar--animated{animation:Toastify__trackProgress linear 1 forwards}.Toastify__progress-bar--controlled{transition:transform .2s}.Toastify__progress-bar--rtl{right:0;left:initial;transform-origin:right;border-bottom-left-radius:initial}.Toastify__progress-bar--wrp{position:absolute;overflow:hidden;bottom:0;left:0;width:100%;height:5px;border-bottom-left-radius:var(--toastify-toast-bd-radius);border-bottom-right-radius:var(--toastify-toast-bd-radius)}.Toastify__progress-bar--wrp[data-hidden=true]{opacity:0}.Toastify__progress-bar--bg{opacity:var(--toastify-color-progress-bgo);width:100%;height:100%}.Toastify__spinner{width:20px;height:20px;box-sizing:border-box;border:2px solid;border-radius:100%;border-color:var(--toastify-spinner-color-empty-area);border-right-color:var(--toastify-spinner-color);animation:Toastify__spin .65s linear infinite}@keyframes Toastify__bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(3000px,0,0)}60%{opacity:1;transform:translate3d(-25px,0,0)}75%{transform:translate3d(10px,0,0)}90%{transform:translate3d(-5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutRight{20%{opacity:1;transform:translate3d(-20px,var(--y),0)}to{opacity:0;transform:translate3d(2000px,var(--y),0)}}@keyframes Toastify__bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(-3000px,0,0)}60%{opacity:1;transform:translate3d(25px,0,0)}75%{transform:translate3d(-10px,0,0)}90%{transform:translate3d(5px,0,0)}to{transform:none}}@keyframes Toastify__bounceOutLeft{20%{opacity:1;transform:translate3d(20px,var(--y),0)}to{opacity:0;transform:translate3d(-2000px,var(--y),0)}}@keyframes Toastify__bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,3000px,0)}60%{opacity:1;transform:translate3d(0,-20px,0)}75%{transform:translate3d(0,10px,0)}90%{transform:translate3d(0,-5px,0)}to{transform:translateZ(0)}}@keyframes Toastify__bounceOutUp{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,-2000px,0)}}@keyframes Toastify__bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(.215,.61,.355,1)}0%{opacity:0;transform:translate3d(0,-3000px,0)}60%{opacity:1;transform:translate3d(0,25px,0)}75%{transform:translate3d(0,-10px,0)}90%{transform:translate3d(0,5px,0)}to{transform:none}}@keyframes Toastify__bounceOutDown{20%{transform:translate3d(0,calc(var(--y) - 10px),0)}40%,45%{opacity:1;transform:translate3d(0,calc(var(--y) + 20px),0)}to{opacity:0;transform:translate3d(0,2000px,0)}}.Toastify__bounce-enter--top-left,.Toastify__bounce-enter--bottom-left{animation-name:Toastify__bounceInLeft}.Toastify__bounce-enter--top-right,.Toastify__bounce-enter--bottom-right{animation-name:Toastify__bounceInRight}.Toastify__bounce-enter--top-center{animation-name:Toastify__bounceInDown}.Toastify__bounce-enter--bottom-center{animation-name:Toastify__bounceInUp}.Toastify__bounce-exit--top-left,.Toastify__bounce-exit--bottom-left{animation-name:Toastify__bounceOutLeft}.Toastify__bounce-exit--top-right,.Toastify__bounce-exit--bottom-right{animation-name:Toastify__bounceOutRight}.Toastify__bounce-exit--top-center{animation-name:Toastify__bounceOutUp}.Toastify__bounce-exit--bottom-center{animation-name:Toastify__bounceOutDown}@keyframes Toastify__zoomIn{0%{opacity:0;transform:scale3d(.3,.3,.3)}50%{opacity:1}}@keyframes Toastify__zoomOut{0%{opacity:1}50%{opacity:0;transform:translate3d(0,var(--y),0) scale3d(.3,.3,.3)}to{opacity:0}}.Toastify__zoom-enter{animation-name:Toastify__zoomIn}.Toastify__zoom-exit{animation-name:Toastify__zoomOut}@keyframes Toastify__flipIn{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}@keyframes Toastify__flipOut{0%{transform:translate3d(0,var(--y),0) perspective(400px)}30%{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(-20deg);opacity:1}to{transform:translate3d(0,var(--y),0) perspective(400px) rotateX(90deg);opacity:0}}.Toastify__flip-enter{animation-name:Toastify__flipIn}.Toastify__flip-exit{animation-name:Toastify__flipOut}@keyframes Toastify__slideInRight{0%{transform:translate3d(110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInLeft{0%{transform:translate3d(-110%,0,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInUp{0%{transform:translate3d(0,110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideInDown{0%{transform:translate3d(0,-110%,0);visibility:visible}to{transform:translate3d(0,var(--y),0)}}@keyframes Toastify__slideOutRight{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(110%,var(--y),0)}}@keyframes Toastify__slideOutLeft{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(-110%,var(--y),0)}}@keyframes Toastify__slideOutDown{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,500px,0)}}@keyframes Toastify__slideOutUp{0%{transform:translate3d(0,var(--y),0)}to{visibility:hidden;transform:translate3d(0,-500px,0)}}.Toastify__slide-enter--top-left,.Toastify__slide-enter--bottom-left{animation-name:Toastify__slideInLeft}.Toastify__slide-enter--top-right,.Toastify__slide-enter--bottom-right{animation-name:Toastify__slideInRight}.Toastify__slide-enter--top-center{animation-name:Toastify__slideInDown}.Toastify__slide-enter--bottom-center{animation-name:Toastify__slideInUp}.Toastify__slide-exit--top-left,.Toastify__slide-exit--bottom-left{animation-name:Toastify__slideOutLeft;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-right,.Toastify__slide-exit--bottom-right{animation-name:Toastify__slideOutRight;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--top-center{animation-name:Toastify__slideOutUp;animation-timing-function:ease-in;animation-duration:.3s}.Toastify__slide-exit--bottom-center{animation-name:Toastify__slideOutDown;animation-timing-function:ease-in;animation-duration:.3s}@keyframes Toastify__spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}
`);
    var bu = e => typeof e == "number" && !isNaN(e)
      , Go = e => typeof e == "string"
      , Ia = e => typeof e == "function"
      , B1 = e => Go(e) || bu(e)
      , od = e => Go(e) || Ia(e) ? e : null
      , P1 = (e, t) => e === !1 || bu(e) && e > 0 ? e : t
      , ld = e => (0,
    Xx.isValidElement)(e) || Go(e) || Ia(e) || bu(e);
    function _1(e, t, a=300) {
        let {scrollHeight: o, style: l} = e;
        requestAnimationFrame( () => {
            l.minHeight = "initial",
            l.height = o + "px",
            l.transition = `all ${a}ms`,
            requestAnimationFrame( () => {
                l.height = "0",
                l.padding = "0",
                l.margin = "0",
                setTimeout(t, a)
            }
            )
        }
        )
    }
    function Rs({enter: e, exit: t, appendPosition: a=!1, collapse: o=!0, collapseDuration: l=300}) {
        return function({children: n, position: u, preventExitTransition: r, done: s, nodeRef: i, isIn: f, playToast: g}) {
            let m = a ? `${e}--${u}` : e
              , c = a ? `${t}--${u}` : t
              , x = (0,
            wa.useRef)(0);
            return (0,
            wa.useLayoutEffect)( () => {
                let L = i.current
                  , S = m.split(" ")
                  , h = d => {
                    d.target === i.current && (g(),
                    L.removeEventListener("animationend", h),
                    L.removeEventListener("animationcancel", h),
                    x.current === 0 && d.type !== "animationcancel" && L.classList.remove(...S))
                }
                ;
                L.classList.add(...S),
                L.addEventListener("animationend", h),
                L.addEventListener("animationcancel", h)
            }
            , []),
            (0,
            wa.useEffect)( () => {
                let L = i.current
                  , S = () => {
                    L.removeEventListener("animationend", S),
                    o ? _1(L, s, l) : s()
                }
                ;
                f || (r ? S() : (x.current = 1,
                L.className += ` ${c}`,
                L.addEventListener("animationend", S)))
            }
            , [f]),
            wa.default.createElement(wa.default.Fragment, null, n)
        }
    }
    function Gx(e, t) {
        return {
            content: jx(e.content, e.props),
            containerId: e.props.containerId,
            id: e.props.toastId,
            theme: e.props.theme,
            type: e.props.type,
            data: e.props.data || {},
            isLoading: e.props.isLoading,
            icon: e.props.icon,
            reason: e.removalReason,
            status: t
        }
    }
    function jx(e, t, a=!1) {
        return (0,
        Os.isValidElement)(e) && !Go(e.type) ? (0,
        Os.cloneElement)(e, {
            closeToast: t.closeToast,
            toastProps: t,
            data: t.data,
            isPaused: a
        }) : Ia(e) ? e({
            closeToast: t.closeToast,
            toastProps: t,
            data: t.data,
            isPaused: a
        }) : e
    }
    function F1({closeToast: e, theme: t, ariaLabel: a="close"}) {
        return Ts.default.createElement("button", {
            className: `Toastify__close-button Toastify__close-button--${t}`,
            type: "button",
            onClick: o => {
                o.stopPropagation(),
                e(!0)
            }
            ,
            "aria-label": a
        }, Ts.default.createElement("svg", {
            "aria-hidden": "true",
            viewBox: "0 0 14 16"
        }, Ts.default.createElement("path", {
            fillRule: "evenodd",
            d: "M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"
        })))
    }
    function U1({delay: e, isRunning: t, closeToast: a, type: o="default", hide: l, className: n, controlledProgress: u, progress: r, rtl: s, isIn: i, theme: f}) {
        let g = l || u && r === 0
          , m = {
            animationDuration: `${e}ms`,
            animationPlayState: t ? "running" : "paused"
        };
        u && (m.transform = `scaleX(${r})`);
        let c = ea("Toastify__progress-bar", u ? "Toastify__progress-bar--controlled" : "Toastify__progress-bar--animated", `Toastify__progress-bar-theme--${f}`, `Toastify__progress-bar--${o}`, {
            "Toastify__progress-bar--rtl": s
        })
          , x = Ia(n) ? n({
            rtl: s,
            type: o,
            defaultClassName: c
        }) : ea(c, n)
          , L = {
            [u && r >= 1 ? "onTransitionEnd" : "onAnimationEnd"]: u && r < 1 ? null : () => {
                i && a()
            }
        };
        return Es.default.createElement("div", {
            className: "Toastify__progress-bar--wrp",
            "data-hidden": g
        }, Es.default.createElement("div", {
            className: `Toastify__progress-bar--bg Toastify__progress-bar-theme--${f} Toastify__progress-bar--${o}`
        }), Es.default.createElement("div", {
            role: "progressbar",
            "aria-hidden": g ? "true" : "false",
            "aria-label": "notification timer",
            className: x,
            style: m,
            ...L
        }))
    }
    var H1 = 1
      , Yx = () => `${H1++}`;
    function q1(e, t, a) {
        let o = 1
          , l = 0
          , n = []
          , u = []
          , r = t
          , s = new Map
          , i = new Set
          , f = d => (i.add(d),
        () => i.delete(d))
          , g = () => {
            u = Array.from(s.values()),
            i.forEach(d => d())
        }
          , m = ({containerId: d, toastId: p, updateId: v}) => {
            let y = d ? d !== e : e !== 1
              , I = s.has(p) && v == null;
            return y || I
        }
          , c = (d, p) => {
            s.forEach(v => {
                var y;
                (p == null || p === v.props.toastId) && ((y = v.toggle) == null || y.call(v, d))
            }
            )
        }
          , x = d => {
            var p, v;
            (v = (p = d.props) == null ? void 0 : p.onClose) == null || v.call(p, d.removalReason),
            d.isActive = !1
        }
          , L = d => {
            if (d == null)
                s.forEach(x);
            else {
                let p = s.get(d);
                p && x(p)
            }
            g()
        }
          , S = () => {
            l -= n.length,
            n = []
        }
          , h = d => {
            var p, v;
            let {toastId: y, updateId: I} = d.props
              , b = I == null;
            d.staleId && s.delete(d.staleId),
            d.isActive = !0,
            s.set(y, d),
            g(),
            a(Gx(d, b ? "added" : "updated")),
            b && ((v = (p = d.props).onOpen) == null || v.call(p))
        }
        ;
        return {
            id: e,
            props: r,
            observe: f,
            toggle: c,
            removeToast: L,
            toasts: s,
            clearQueue: S,
            buildToast: (d, p) => {
                if (m(p))
                    return;
                let {toastId: v, updateId: y, data: I, staleId: b, delay: T} = p
                  , R = y == null;
                R && l++;
                let w = {
                    ...r,
                    style: r.toastStyle,
                    key: o++,
                    ...Object.fromEntries(Object.entries(p).filter( ([z,Y]) => Y != null)),
                    toastId: v,
                    updateId: y,
                    data: I,
                    isIn: !1,
                    className: od(p.className || r.toastClassName),
                    progressClassName: od(p.progressClassName || r.progressClassName),
                    autoClose: p.isLoading ? !1 : P1(p.autoClose, r.autoClose),
                    closeToast(z) {
                        s.get(v).removalReason = z,
                        L(v)
                    },
                    deleteToast() {
                        let z = s.get(v);
                        if (z != null) {
                            if (a(Gx(z, "removed")),
                            s.delete(v),
                            l--,
                            l < 0 && (l = 0),
                            n.length > 0) {
                                h(n.shift());
                                return
                            }
                            g()
                        }
                    }
                };
                w.closeButton = r.closeButton,
                p.closeButton === !1 || ld(p.closeButton) ? w.closeButton = p.closeButton : p.closeButton === !0 && (w.closeButton = ld(r.closeButton) ? r.closeButton : !0);
                let O = {
                    content: d,
                    props: w,
                    staleId: b
                };
                r.limit && r.limit > 0 && l > r.limit && R ? n.push(O) : bu(T) ? setTimeout( () => {
                    h(O)
                }
                , T) : h(O)
            }
            ,
            setProps(d) {
                r = d
            },
            setToggle: (d, p) => {
                let v = s.get(d);
                v && (v.toggle = p)
            }
            ,
            isToastActive: d => {
                var p;
                return (p = s.get(d)) == null ? void 0 : p.isActive
            }
            ,
            getSnapshot: () => u
        }
    }
    var tt = new Map
      , yu = []
      , nd = new Set
      , z1 = e => nd.forEach(t => t(e))
      , Kx = () => tt.size > 0;
    function N1() {
        yu.forEach(e => Qx(e.content, e.options)),
        yu = []
    }
    var $1 = (e, {containerId: t}) => {
        var a;
        return (a = tt.get(t || 1)) == null ? void 0 : a.toasts.get(e)
    }
    ;
    function Wx(e, t) {
        var a;
        if (t)
            return !!((a = tt.get(t)) != null && a.isToastActive(e));
        let o = !1;
        return tt.forEach(l => {
            l.isToastActive(e) && (o = !0)
        }
        ),
        o
    }
    function V1(e) {
        if (!Kx()) {
            yu = yu.filter(t => e != null && t.options.toastId !== e);
            return
        }
        if (e == null || B1(e))
            tt.forEach(t => {
                t.removeToast(e)
            }
            );
        else if (e && ("containerId"in e || "id"in e)) {
            let t = tt.get(e.containerId);
            t ? t.removeToast(e.id) : tt.forEach(a => {
                a.removeToast(e.id)
            }
            )
        }
    }
    var G1 = (e={}) => {
        tt.forEach(t => {
            t.props.limit && (!e.containerId || t.id === e.containerId) && t.clearQueue()
        }
        )
    }
    ;
    function Qx(e, t) {
        ld(e) && (Kx() || yu.push({
            content: e,
            options: t
        }),
        tt.forEach(a => {
            a.buildToast(e, t)
        }
        ))
    }
    function X1(e) {
        var t;
        (t = tt.get(e.containerId || 1)) == null || t.setToggle(e.id, e.fn)
    }
    function Zx(e, t) {
        tt.forEach(a => {
            (t == null || !(t != null && t.containerId) || t?.containerId === a.id) && a.toggle(e, t?.id)
        }
        )
    }
    function j1(e) {
        let t = e.containerId || 1;
        return {
            subscribe(a) {
                let o = q1(t, e, z1);
                tt.set(t, o);
                let l = o.observe(a);
                return N1(),
                () => {
                    l(),
                    tt.delete(t)
                }
            },
            setProps(a) {
                var o;
                (o = tt.get(t)) == null || o.setProps(a)
            },
            getSnapshot() {
                var a;
                return (a = tt.get(t)) == null ? void 0 : a.getSnapshot()
            }
        }
    }
    function Y1(e) {
        return nd.add(e),
        () => {
            nd.delete(e)
        }
    }
    function K1(e) {
        return e && (Go(e.toastId) || bu(e.toastId)) ? e.toastId : Yx()
    }
    function Su(e, t) {
        return Qx(e, t),
        t.toastId
    }
    function As(e, t) {
        return {
            ...t,
            type: t && t.type || e,
            toastId: K1(t)
        }
    }
    function Ms(e) {
        return (t, a) => Su(t, As(e, a))
    }
    function V(e, t) {
        return Su(e, As("default", t))
    }
    V.loading = (e, t) => Su(e, As("default", {
        isLoading: !0,
        autoClose: !1,
        closeOnClick: !1,
        closeButton: !1,
        draggable: !1,
        ...t
    }));
    function W1(e, {pending: t, error: a, success: o}, l) {
        let n;
        t && (n = Go(t) ? V.loading(t, l) : V.loading(t.render, {
            ...l,
            ...t
        }));
        let u = {
            isLoading: null,
            autoClose: null,
            closeOnClick: null,
            closeButton: null,
            draggable: null
        }
          , r = (i, f, g) => {
            if (f == null) {
                V.dismiss(n);
                return
            }
            let m = {
                type: i,
                ...u,
                ...l,
                data: g
            }
              , c = Go(f) ? {
                render: f
            } : f;
            return n ? V.update(n, {
                ...m,
                ...c
            }) : V(c.render, {
                ...m,
                ...c
            }),
            g
        }
          , s = Ia(e) ? e() : e;
        return s.then(i => r("success", o, i)).catch(i => r("error", a, i)),
        s
    }
    V.promise = W1;
    V.success = Ms("success");
    V.info = Ms("info");
    V.error = Ms("error");
    V.warning = Ms("warning");
    V.warn = V.warning;
    V.dark = (e, t) => Su(e, As("default", {
        theme: "dark",
        ...t
    }));
    function Q1(e) {
        V1(e)
    }
    V.dismiss = Q1;
    V.clearWaitingQueue = G1;
    V.isActive = Wx;
    V.update = (e, t={}) => {
        let a = $1(e, t);
        if (a) {
            let {props: o, content: l} = a
              , n = {
                delay: 100,
                ...o,
                ...t,
                toastId: t.toastId || e,
                updateId: Yx()
            };
            n.toastId !== e && (n.staleId = e);
            let u = n.render || l;
            delete n.render,
            Su(u, n)
        }
    }
    ;
    V.done = e => {
        V.update(e, {
            progress: 1
        })
    }
    ;
    V.onChange = Y1;
    V.play = e => Zx(!0, e);
    V.pause = e => Zx(!1, e);
    function Z1(e) {
        var t;
        let {subscribe: a, getSnapshot: o, setProps: l} = (0,
        Ds.useRef)(j1(e)).current;
        l(e);
        let n = (t = (0,
        Ds.useSyncExternalStore)(a, o, o)) == null ? void 0 : t.slice();
        function u(r) {
            if (!n)
                return [];
            let s = new Map;
            return e.newestOnTop && n.reverse(),
            n.forEach(i => {
                let {position: f} = i.props;
                s.has(f) || s.set(f, []),
                s.get(f).push(i)
            }
            ),
            Array.from(s, i => r(i[0], i[1]))
        }
        return {
            getToastToRender: u,
            isToastActive: Wx,
            count: n?.length
        }
    }
    function J1(e) {
        let[t,a] = (0,
        uo.useState)(!1)
          , [o,l] = (0,
        uo.useState)(!1)
          , n = (0,
        uo.useRef)(null)
          , u = (0,
        uo.useRef)({
            start: 0,
            delta: 0,
            removalDistance: 0,
            canCloseOnClick: !0,
            canDrag: !1,
            didMove: !1
        }).current
          , {autoClose: r, pauseOnHover: s, closeToast: i, onClick: f, closeOnClick: g} = e;
        X1({
            id: e.toastId,
            containerId: e.containerId,
            fn: a
        }),
        (0,
        uo.useEffect)( () => {
            if (e.pauseOnFocusLoss)
                return m(),
                () => {
                    c()
                }
        }
        , [e.pauseOnFocusLoss]);
        function m() {
            document.hasFocus() || h(),
            window.addEventListener("focus", S),
            window.addEventListener("blur", h)
        }
        function c() {
            window.removeEventListener("focus", S),
            window.removeEventListener("blur", h)
        }
        function x(b) {
            if (e.draggable === !0 || e.draggable === b.pointerType) {
                d();
                let T = n.current;
                u.canCloseOnClick = !0,
                u.canDrag = !0,
                T.style.transition = "none",
                e.draggableDirection === "x" ? (u.start = b.clientX,
                u.removalDistance = T.offsetWidth * (e.draggablePercent / 100)) : (u.start = b.clientY,
                u.removalDistance = T.offsetHeight * (e.draggablePercent === 80 ? e.draggablePercent * 1.5 : e.draggablePercent) / 100)
            }
        }
        function L(b) {
            let {top: T, bottom: R, left: w, right: O} = n.current.getBoundingClientRect();
            b.nativeEvent.type !== "touchend" && e.pauseOnHover && b.clientX >= w && b.clientX <= O && b.clientY >= T && b.clientY <= R ? h() : S()
        }
        function S() {
            a(!0)
        }
        function h() {
            a(!1)
        }
        function d() {
            u.didMove = !1,
            document.addEventListener("pointermove", v),
            document.addEventListener("pointerup", y)
        }
        function p() {
            document.removeEventListener("pointermove", v),
            document.removeEventListener("pointerup", y)
        }
        function v(b) {
            let T = n.current;
            if (u.canDrag && T) {
                u.didMove = !0,
                t && h(),
                e.draggableDirection === "x" ? u.delta = b.clientX - u.start : u.delta = b.clientY - u.start,
                u.start !== b.clientX && (u.canCloseOnClick = !1);
                let R = e.draggableDirection === "x" ? `${u.delta}px, var(--y)` : `0, calc(${u.delta}px + var(--y))`;
                T.style.transform = `translate3d(${R},0)`,
                T.style.opacity = `${1 - Math.abs(u.delta / u.removalDistance)}`
            }
        }
        function y() {
            p();
            let b = n.current;
            if (u.canDrag && u.didMove && b) {
                if (u.canDrag = !1,
                Math.abs(u.delta) > u.removalDistance) {
                    l(!0),
                    e.closeToast(!0),
                    e.collapseAll();
                    return
                }
                b.style.transition = "transform 0.2s, opacity 0.2s",
                b.style.removeProperty("transform"),
                b.style.removeProperty("opacity")
            }
        }
        let I = {
            onPointerDown: x,
            onPointerUp: L
        };
        return r && s && (I.onMouseEnter = h,
        e.stacked || (I.onMouseLeave = S)),
        g && (I.onClick = b => {
            f && f(b),
            u.canCloseOnClick && i(!0)
        }
        ),
        {
            playToast: S,
            pauseToast: h,
            isRunning: t,
            preventExitTransition: o,
            toastRef: n,
            eventHandlers: I
        }
    }
    var eC = typeof window < "u" ? ks.useLayoutEffect : ks.useEffect
      , Bs = ({theme: e, type: t, isLoading: a, ...o}) => at.default.createElement("svg", {
        viewBox: "0 0 24 24",
        width: "100%",
        height: "100%",
        fill: e === "colored" ? "currentColor" : `var(--toastify-icon-color-${t})`,
        ...o
    });
    function tC(e) {
        return at.default.createElement(Bs, {
            ...e
        }, at.default.createElement("path", {
            d: "M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"
        }))
    }
    function aC(e) {
        return at.default.createElement(Bs, {
            ...e
        }, at.default.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"
        }))
    }
    function oC(e) {
        return at.default.createElement(Bs, {
            ...e
        }, at.default.createElement("path", {
            d: "M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"
        }))
    }
    function lC(e) {
        return at.default.createElement(Bs, {
            ...e
        }, at.default.createElement("path", {
            d: "M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"
        }))
    }
    function nC() {
        return at.default.createElement("div", {
            className: "Toastify__spinner"
        })
    }
    var ud = {
        info: aC,
        warning: tC,
        success: oC,
        error: lC,
        spinner: nC
    }
      , uC = e => e in ud;
    function rC({theme: e, type: t, isLoading: a, icon: o}) {
        let l = null
          , n = {
            theme: e,
            type: t
        };
        return o === !1 || (Ia(o) ? l = o({
            ...n,
            isLoading: a
        }) : (0,
        at.isValidElement)(o) ? l = (0,
        at.cloneElement)(o, n) : a ? l = ud.spinner() : uC(t) && (l = ud[t](n))),
        l
    }
    var sC = e => {
        let {isRunning: t, preventExitTransition: a, toastRef: o, eventHandlers: l, playToast: n} = J1(e)
          , {closeButton: u, children: r, autoClose: s, onClick: i, type: f, hideProgressBar: g, closeToast: m, transition: c, position: x, className: L, style: S, progressClassName: h, updateId: d, role: p, progress: v, rtl: y, toastId: I, deleteToast: b, isIn: T, isLoading: R, closeOnClick: w, theme: O, ariaLabel: z} = e
          , Y = ea("Toastify__toast", `Toastify__toast-theme--${O}`, `Toastify__toast--${f}`, {
            "Toastify__toast--rtl": y
        }, {
            "Toastify__toast--close-on-click": w
        })
          , W = Ia(L) ? L({
            rtl: y,
            position: x,
            type: f,
            defaultClassName: Y
        }) : ea(Y, L)
          , F = rC(e)
          , P = !!v || !s
          , re = {
            closeToast: m,
            type: f,
            theme: O
        }
          , _ = null;
        return u === !1 || (Ia(u) ? _ = u(re) : (0,
        Ca.isValidElement)(u) ? _ = (0,
        Ca.cloneElement)(u, re) : _ = F1(re)),
        Ca.default.createElement(c, {
            isIn: T,
            done: b,
            position: x,
            preventExitTransition: a,
            nodeRef: o,
            playToast: n
        }, Ca.default.createElement("div", {
            id: I,
            tabIndex: 0,
            onClick: i,
            "data-in": T,
            className: W,
            ...l,
            style: S,
            ref: o,
            ...T && {
                role: p,
                "aria-label": z
            }
        }, F != null && Ca.default.createElement("div", {
            className: ea("Toastify__toast-icon", {
                "Toastify--animate-icon Toastify__zoom-enter": !R
            })
        }, F), jx(r, e, !t), _, !e.customProgressBar && Ca.default.createElement(U1, {
            ...d && !P ? {
                key: `p-${d}`
            } : {},
            rtl: y,
            theme: O,
            delay: s,
            isRunning: t,
            isIn: T,
            closeToast: m,
            hide: g,
            type: f,
            className: h,
            controlledProgress: P,
            progress: v || 0
        })))
    }
      , Ps = (e, t=!1) => ({
        enter: `Toastify--animate Toastify__${e}-enter`,
        exit: `Toastify--animate Toastify__${e}-exit`,
        appendPosition: t
    })
      , iC = Rs(Ps("bounce", !0))
      , jE = Rs(Ps("slide", !0))
      , YE = Rs(Ps("zoom"))
      , KE = Rs(Ps("flip"))
      , fC = {
        position: "top-right",
        transition: iC,
        autoClose: 5e3,
        closeButton: !0,
        pauseOnHover: !0,
        pauseOnFocusLoss: !0,
        draggable: "touch",
        draggablePercent: 80,
        draggableDirection: "x",
        role: "alert",
        theme: "light",
        "aria-label": "Notifications Alt+T",
        hotKeys: e => e.altKey && e.code === "KeyT"
    };
    function Jx(e) {
        let t = {
            ...fC,
            ...e
        }
          , a = e.stacked
          , [o,l] = (0,
        ta.useState)(!0)
          , n = (0,
        ta.useRef)(null)
          , {getToastToRender: u, isToastActive: r, count: s} = Z1(t)
          , {className: i, style: f, rtl: g, containerId: m, hotKeys: c} = t;
        function x(S) {
            let h = ea("Toastify__toast-container", `Toastify__toast-container--${S}`, {
                "Toastify__toast-container--rtl": g
            });
            return Ia(i) ? i({
                position: S,
                rtl: g,
                defaultClassName: h
            }) : ea(h, od(i))
        }
        function L() {
            a && (l(!0),
            V.play())
        }
        return eC( () => {
            var S;
            if (a) {
                let h = n.current.querySelectorAll('[data-in="true"]')
                  , d = 12
                  , p = (S = t.position) == null ? void 0 : S.includes("top")
                  , v = 0
                  , y = 0;
                Array.from(h).reverse().forEach( (I, b) => {
                    let T = I;
                    T.classList.add("Toastify__toast--stacked"),
                    b > 0 && (T.dataset.collapsed = `${o}`),
                    T.dataset.pos || (T.dataset.pos = p ? "top" : "bot");
                    let R = v * (o ? .2 : 1) + (o ? 0 : d * b);
                    T.style.setProperty("--y", `${p ? R : R * -1}px`),
                    T.style.setProperty("--g", `${d}`),
                    T.style.setProperty("--s", `${1 - (o ? y : 0)}`),
                    v += T.offsetHeight,
                    y += .025
                }
                )
            }
        }
        , [o, s, a]),
        (0,
        ta.useEffect)( () => {
            function S(h) {
                var d;
                let p = n.current;
                c(h) && ((d = p.querySelector('[tabIndex="0"]')) == null || d.focus(),
                l(!1),
                V.pause()),
                h.key === "Escape" && (document.activeElement === p || p != null && p.contains(document.activeElement)) && (l(!0),
                V.play())
            }
            return document.addEventListener("keydown", S),
            () => {
                document.removeEventListener("keydown", S)
            }
        }
        , [c]),
        ta.default.createElement("section", {
            ref: n,
            className: "Toastify",
            id: m,
            onMouseEnter: () => {
                a && (l(!1),
                V.pause())
            }
            ,
            onMouseLeave: L,
            "aria-live": "polite",
            "aria-atomic": "false",
            "aria-relevant": "additions text",
            "aria-label": t["aria-label"]
        }, u( (S, h) => {
            let d = h.length ? {
                ...f
            } : {
                ...f,
                pointerEvents: "none"
            };
            return ta.default.createElement("div", {
                tabIndex: -1,
                className: x(S),
                "data-stacked": a,
                style: d,
                key: `c-${S}`
            }, h.map( ({content: p, props: v}) => ta.default.createElement(sC, {
                ...v,
                stacked: a,
                collapseAll: L,
                isIn: r(v.toastId, v.containerId),
                key: `t-${v.key}`
            }, p)))
        }
        ))
    }
    var e0 = A(M(), 1)
      , Cu = typeof document < "u" ? e0.default.useLayoutEffect : () => {}
    ;
    var _s = A(M(), 1);
    function rd(e) {
        let t = (0,
        _s.useRef)(null);
        return Cu( () => {
            t.current = e
        }
        , [e]),
        (0,
        _s.useCallback)( (...a) => {
            let o = t.current;
            return o?.(...a)
        }
        , [])
    }
    var ro = e => {
        var t;
        return (t = e?.ownerDocument) !== null && t !== void 0 ? t : document
    }
      , Ta = e => e && "window"in e && e.window === e ? e : ro(e).defaultView || window;
    function Fs(e) {
        var t;
        return typeof window > "u" || window.navigator == null ? !1 : ((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.brands.some(a => e.test(a.brand))) || e.test(window.navigator.userAgent)
    }
    function sd(e) {
        var t;
        return typeof window < "u" && window.navigator != null ? e.test(((t = window.navigator.userAgentData) === null || t === void 0 ? void 0 : t.platform) || window.navigator.platform) : !1
    }
    function Ea(e) {
        let t = null;
        return () => (t == null && (t = e()),
        t)
    }
    var Iu = Ea(function() {
        return sd(/^Mac/i)
    })
      , t0 = Ea(function() {
        return sd(/^iPhone/i)
    })
      , a0 = Ea(function() {
        return sd(/^iPad/i) || Iu() && navigator.maxTouchPoints > 1
    })
      , o0 = Ea(function() {
        return t0() || a0()
    })
      , cC = Ea(function() {
        return Iu() || o0()
    })
      , dC = Ea(function() {
        return Fs(/AppleWebKit/i) && !l0()
    })
      , l0 = Ea(function() {
        return Fs(/Chrome/i)
    })
      , id = Ea(function() {
        return Fs(/Android/i)
    })
      , mC = Ea(function() {
        return Fs(/Firefox/i)
    });
    function fd(e) {
        return e.mozInputSource === 0 && e.isTrusted ? !0 : id() && e.pointerType ? e.type === "click" && e.buttons === 1 : e.detail === 0 && !e.pointerType
    }
    var Us = A(M(), 1);
    var cd = class {
        isDefaultPrevented() {
            return this.nativeEvent.defaultPrevented
        }
        preventDefault() {
            this.defaultPrevented = !0,
            this.nativeEvent.preventDefault()
        }
        stopPropagation() {
            this.nativeEvent.stopPropagation(),
            this.isPropagationStopped = () => !0
        }
        isPropagationStopped() {
            return !1
        }
        persist() {}
        constructor(t, a) {
            this.nativeEvent = a,
            this.target = a.target,
            this.currentTarget = a.currentTarget,
            this.relatedTarget = a.relatedTarget,
            this.bubbles = a.bubbles,
            this.cancelable = a.cancelable,
            this.defaultPrevented = a.defaultPrevented,
            this.eventPhase = a.eventPhase,
            this.isTrusted = a.isTrusted,
            this.timeStamp = a.timeStamp,
            this.type = t
        }
    }
    ;
    function Hs(e) {
        let t = (0,
        Us.useRef)({
            isFocused: !1,
            observer: null
        });
        Cu( () => {
            let o = t.current;
            return () => {
                o.observer && (o.observer.disconnect(),
                o.observer = null)
            }
        }
        , []);
        let a = rd(o => {
            e?.(o)
        }
        );
        return (0,
        Us.useCallback)(o => {
            if (o.target instanceof HTMLButtonElement || o.target instanceof HTMLInputElement || o.target instanceof HTMLTextAreaElement || o.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let l = o.target
                  , n = u => {
                    t.current.isFocused = !1,
                    l.disabled && a(new cd("blur",u)),
                    t.current.observer && (t.current.observer.disconnect(),
                    t.current.observer = null)
                }
                ;
                l.addEventListener("focusout", n, {
                    once: !0
                }),
                t.current.observer = new MutationObserver( () => {
                    if (t.current.isFocused && l.disabled) {
                        var u;
                        (u = t.current.observer) === null || u === void 0 || u.disconnect();
                        let r = l === document.activeElement ? null : document.activeElement;
                        l.dispatchEvent(new FocusEvent("blur",{
                            relatedTarget: r
                        })),
                        l.dispatchEvent(new FocusEvent("focusout",{
                            bubbles: !0,
                            relatedTarget: r
                        }))
                    }
                }
                ),
                t.current.observer.observe(l, {
                    attributes: !0,
                    attributeFilter: ["disabled"]
                })
            }
        }
        , [a])
    }
    var dd = A(M(), 1);
    function md(e) {
        let {isDisabled: t, onFocus: a, onBlur: o, onFocusChange: l} = e
          , n = (0,
        dd.useCallback)(s => {
            if (s.target === s.currentTarget)
                return o && o(s),
                l && l(!1),
                !0
        }
        , [o, l])
          , u = Hs(n)
          , r = (0,
        dd.useCallback)(s => {
            let i = ro(s.target);
            s.target === s.currentTarget && i.activeElement === s.target && (a && a(s),
            l && l(!0),
            u(s))
        }
        , [l, a, u]);
        return {
            focusProps: {
                onFocus: !t && (a || l || o) ? r : void 0,
                onBlur: !t && (o || l) ? n : void 0
            }
        }
    }
    var xd = A(M(), 1);
    var Tu = null
      , pd = new Set
      , wu = new Map
      , Xo = !1
      , gd = !1
      , pC = {
        Tab: !0,
        Escape: !0
    };
    function vd(e, t) {
        for (let a of pd)
            a(e, t)
    }
    function gC(e) {
        return !(e.metaKey || !Iu() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta")
    }
    function qs(e) {
        Xo = !0,
        gC(e) && (Tu = "keyboard",
        vd("keyboard", e))
    }
    function Mt(e) {
        Tu = "pointer",
        (e.type === "mousedown" || e.type === "pointerdown") && (Xo = !0,
        vd("pointer", e))
    }
    function n0(e) {
        fd(e) && (Xo = !0,
        Tu = "virtual")
    }
    function u0(e) {
        e.target === window || e.target === document || (!Xo && !gd && (Tu = "virtual",
        vd("virtual", e)),
        Xo = !1,
        gd = !1)
    }
    function r0() {
        Xo = !1,
        gd = !0
    }
    function hd(e) {
        if (typeof window > "u" || wu.get(Ta(e)))
            return;
        let t = Ta(e)
          , a = ro(e)
          , o = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
            Xo = !0,
            o.apply(this, arguments)
        }
        ,
        a.addEventListener("keydown", qs, !0),
        a.addEventListener("keyup", qs, !0),
        a.addEventListener("click", n0, !0),
        t.addEventListener("focus", u0, !0),
        t.addEventListener("blur", r0, !1),
        typeof PointerEvent < "u" ? (a.addEventListener("pointerdown", Mt, !0),
        a.addEventListener("pointermove", Mt, !0),
        a.addEventListener("pointerup", Mt, !0)) : (a.addEventListener("mousedown", Mt, !0),
        a.addEventListener("mousemove", Mt, !0),
        a.addEventListener("mouseup", Mt, !0)),
        t.addEventListener("beforeunload", () => {
            s0(e)
        }
        , {
            once: !0
        }),
        wu.set(t, {
            focus: o
        })
    }
    var s0 = (e, t) => {
        let a = Ta(e)
          , o = ro(e);
        t && o.removeEventListener("DOMContentLoaded", t),
        wu.has(a) && (a.HTMLElement.prototype.focus = wu.get(a).focus,
        o.removeEventListener("keydown", qs, !0),
        o.removeEventListener("keyup", qs, !0),
        o.removeEventListener("click", n0, !0),
        a.removeEventListener("focus", u0, !0),
        a.removeEventListener("blur", r0, !1),
        typeof PointerEvent < "u" ? (o.removeEventListener("pointerdown", Mt, !0),
        o.removeEventListener("pointermove", Mt, !0),
        o.removeEventListener("pointerup", Mt, !0)) : (o.removeEventListener("mousedown", Mt, !0),
        o.removeEventListener("mousemove", Mt, !0),
        o.removeEventListener("mouseup", Mt, !0)),
        wu.delete(a))
    }
    ;
    function i0(e) {
        let t = ro(e), a;
        return t.readyState !== "loading" ? hd(e) : (a = () => {
            hd(e)
        }
        ,
        t.addEventListener("DOMContentLoaded", a)),
        () => s0(e, a)
    }
    typeof document < "u" && i0();
    function zs() {
        return Tu !== "pointer"
    }
    var hC = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
    function xC(e, t, a) {
        var o;
        let l = typeof window < "u" ? Ta(a?.target).HTMLInputElement : HTMLInputElement
          , n = typeof window < "u" ? Ta(a?.target).HTMLTextAreaElement : HTMLTextAreaElement
          , u = typeof window < "u" ? Ta(a?.target).HTMLElement : HTMLElement
          , r = typeof window < "u" ? Ta(a?.target).KeyboardEvent : KeyboardEvent;
        return e = e || a?.target instanceof l && !hC.has(a == null || (o = a.target) === null || o === void 0 ? void 0 : o.type) || a?.target instanceof n || a?.target instanceof u && a?.target.isContentEditable,
        !(e && t === "keyboard" && a instanceof r && !pC[a.key])
    }
    function Ld(e, t, a) {
        hd(),
        (0,
        xd.useEffect)( () => {
            let o = (l, n) => {
                xC(!!a?.isTextInput, l, n) && e(zs())
            }
            ;
            return pd.add(o),
            () => {
                pd.delete(o)
            }
        }
        , t)
    }
    var Eu = A(M(), 1);
    function yd(e) {
        let {isDisabled: t, onBlurWithin: a, onFocusWithin: o, onFocusWithinChange: l} = e
          , n = (0,
        Eu.useRef)({
            isFocusWithin: !1
        })
          , u = (0,
        Eu.useCallback)(i => {
            n.current.isFocusWithin && !i.currentTarget.contains(i.relatedTarget) && (n.current.isFocusWithin = !1,
            a && a(i),
            l && l(!1))
        }
        , [a, l, n])
          , r = Hs(u)
          , s = (0,
        Eu.useCallback)(i => {
            !n.current.isFocusWithin && document.activeElement === i.target && (o && o(i),
            l && l(!0),
            n.current.isFocusWithin = !0,
            r(i))
        }
        , [o, l, r]);
        return t ? {
            focusWithinProps: {
                onFocus: void 0,
                onBlur: void 0
            }
        } : {
            focusWithinProps: {
                onFocus: s,
                onBlur: u
            }
        }
    }
    var Ra = A(M(), 1)
      , Ns = !1
      , bd = 0;
    function Sd() {
        Ns = !0,
        setTimeout( () => {
            Ns = !1
        }
        , 50)
    }
    function f0(e) {
        e.pointerType === "touch" && Sd()
    }
    function vC() {
        if (!(typeof document > "u"))
            return typeof PointerEvent < "u" ? document.addEventListener("pointerup", f0) : document.addEventListener("touchend", Sd),
            bd++,
            () => {
                bd--,
                !(bd > 0) && (typeof PointerEvent < "u" ? document.removeEventListener("pointerup", f0) : document.removeEventListener("touchend", Sd))
            }
    }
    function Cd(e) {
        let {onHoverStart: t, onHoverChange: a, onHoverEnd: o, isDisabled: l} = e
          , [n,u] = (0,
        Ra.useState)(!1)
          , r = (0,
        Ra.useRef)({
            isHovered: !1,
            ignoreEmulatedMouseEvents: !1,
            pointerType: "",
            target: null
        }).current;
        (0,
        Ra.useEffect)(vC, []);
        let {hoverProps: s, triggerHoverEnd: i} = (0,
        Ra.useMemo)( () => {
            let f = (c, x) => {
                if (r.pointerType = x,
                l || x === "touch" || r.isHovered || !c.currentTarget.contains(c.target))
                    return;
                r.isHovered = !0;
                let L = c.currentTarget;
                r.target = L,
                t && t({
                    type: "hoverstart",
                    target: L,
                    pointerType: x
                }),
                a && a(!0),
                u(!0)
            }
              , g = (c, x) => {
                if (r.pointerType = "",
                r.target = null,
                x === "touch" || !r.isHovered)
                    return;
                r.isHovered = !1;
                let L = c.currentTarget;
                o && o({
                    type: "hoverend",
                    target: L,
                    pointerType: x
                }),
                a && a(!1),
                u(!1)
            }
              , m = {};
            return typeof PointerEvent < "u" ? (m.onPointerEnter = c => {
                Ns && c.pointerType === "mouse" || f(c, c.pointerType)
            }
            ,
            m.onPointerLeave = c => {
                !l && c.currentTarget.contains(c.target) && g(c, c.pointerType)
            }
            ) : (m.onTouchStart = () => {
                r.ignoreEmulatedMouseEvents = !0
            }
            ,
            m.onMouseEnter = c => {
                !r.ignoreEmulatedMouseEvents && !Ns && f(c, "mouse"),
                r.ignoreEmulatedMouseEvents = !1
            }
            ,
            m.onMouseLeave = c => {
                !l && c.currentTarget.contains(c.target) && g(c, "mouse")
            }
            ),
            {
                hoverProps: m,
                triggerHoverEnd: g
            }
        }
        , [t, a, o, l, r]);
        return (0,
        Ra.useEffect)( () => {
            l && i({
                currentTarget: r.target
            }, r.pointerType)
        }
        , [l]),
        {
            hoverProps: s,
            isHovered: n
        }
    }
    var so = A(M(), 1);
    function Id(e={}) {
        let {autoFocus: t=!1, isTextInput: a, within: o} = e
          , l = (0,
        so.useRef)({
            isFocused: !1,
            isFocusVisible: t || zs()
        })
          , [n,u] = (0,
        so.useState)(!1)
          , [r,s] = (0,
        so.useState)( () => l.current.isFocused && l.current.isFocusVisible)
          , i = (0,
        so.useCallback)( () => s(l.current.isFocused && l.current.isFocusVisible), [])
          , f = (0,
        so.useCallback)(c => {
            l.current.isFocused = c,
            u(c),
            i()
        }
        , [i]);
        Ld(c => {
            l.current.isFocusVisible = c,
            i()
        }
        , [], {
            isTextInput: a
        });
        let {focusProps: g} = md({
            isDisabled: o,
            onFocusChange: f
        })
          , {focusWithinProps: m} = yd({
            isDisabled: !o,
            onFocusWithinChange: f
        });
        return {
            isFocused: n,
            isFocusVisible: r,
            focusProps: o ? m : g
        }
    }
    var Xs = A(M(), 1);
    var LC = Object.defineProperty
      , yC = (e, t, a) => t in e ? LC(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: a
    }) : e[t] = a
      , wd = (e, t, a) => (yC(e, typeof t != "symbol" ? t + "" : t, a),
    a)
      , Td = class {
        constructor() {
            wd(this, "current", this.detect()),
            wd(this, "handoffState", "pending"),
            wd(this, "currentId", 0)
        }
        set(t) {
            this.current !== t && (this.handoffState = "pending",
            this.currentId = 0,
            this.current = t)
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return this.current === "server"
        }
        get isClient() {
            return this.current === "client"
        }
        detect() {
            return typeof window > "u" || typeof document > "u" ? "server" : "client"
        }
        handoff() {
            this.handoffState === "pending" && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
            return this.handoffState === "complete"
        }
    }
      , qt = new Td;
    function aa(e) {
        return qt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
    }
    var Vs = A(M(), 1);
    function $s(e) {
        typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout( () => {
            throw t
        }
        ))
    }
    function Ye() {
        let e = []
          , t = {
            addEventListener(a, o, l, n) {
                return a.addEventListener(o, l, n),
                t.add( () => a.removeEventListener(o, l, n))
            },
            requestAnimationFrame(...a) {
                let o = requestAnimationFrame(...a);
                return t.add( () => cancelAnimationFrame(o))
            },
            nextFrame(...a) {
                return t.requestAnimationFrame( () => t.requestAnimationFrame(...a))
            },
            setTimeout(...a) {
                let o = setTimeout(...a);
                return t.add( () => clearTimeout(o))
            },
            microTask(...a) {
                let o = {
                    current: !0
                };
                return $s( () => {
                    o.current && a[0]()
                }
                ),
                t.add( () => {
                    o.current = !1
                }
                )
            },
            style(a, o, l) {
                let n = a.style.getPropertyValue(o);
                return Object.assign(a.style, {
                    [o]: l
                }),
                this.add( () => {
                    Object.assign(a.style, {
                        [o]: n
                    })
                }
                )
            },
            group(a) {
                let o = Ye();
                return a(o),
                this.add( () => o.dispose())
            },
            add(a) {
                return e.includes(a) || e.push(a),
                () => {
                    let o = e.indexOf(a);
                    if (o >= 0)
                        for (let l of e.splice(o, 1))
                            l()
                }
            },
            dispose() {
                for (let a of e.splice(0))
                    a()
            }
        };
        return t
    }
    function zt() {
        let[e] = (0,
        Vs.useState)(Ye);
        return (0,
        Vs.useEffect)( () => () => e.dispose(), [e]),
        e
    }
    var d0 = A(M(), 1);
    var c0 = A(M(), 1);
    var Gs = A(M(), 1);
    var K = (e, t) => {
        qt.isServer ? (0,
        Gs.useEffect)(e, t) : (0,
        Gs.useLayoutEffect)(e, t)
    }
    ;
    function Dt(e) {
        let t = (0,
        c0.useRef)(e);
        return K( () => {
            t.current = e
        }
        , [e]),
        t
    }
    var q = function(e) {
        let t = Dt(e);
        return d0.default.useCallback( (...a) => t.current(...a), [t])
    };
    function bC(e) {
        let t = e.width / 2
          , a = e.height / 2;
        return {
            top: e.clientY - a,
            right: e.clientX + t,
            bottom: e.clientY + a,
            left: e.clientX - t
        }
    }
    function SC(e, t) {
        return !(!e || !t || e.right < t.left || e.left > t.right || e.bottom < t.top || e.top > t.bottom)
    }
    function m0({disabled: e=!1}={}) {
        let t = (0,
        Xs.useRef)(null)
          , [a,o] = (0,
        Xs.useState)(!1)
          , l = zt()
          , n = q( () => {
            t.current = null,
            o(!1),
            l.dispose()
        }
        )
          , u = q(r => {
            if (l.dispose(),
            t.current === null) {
                t.current = r.currentTarget,
                o(!0);
                {
                    let s = aa(r.currentTarget);
                    l.addEventListener(s, "pointerup", n, !1),
                    l.addEventListener(s, "pointermove", i => {
                        if (t.current) {
                            let f = bC(i);
                            o(SC(f, t.current.getBoundingClientRect()))
                        }
                    }
                    , !1),
                    l.addEventListener(s, "pointercancel", n, !1)
                }
            }
        }
        );
        return {
            pressed: a,
            pressProps: e ? {} : {
                onPointerDown: u,
                onPointerUp: n,
                onClick: n
            }
        }
    }
    var Ru = A(M(), 1)
      , CC = (0,
    Ru.createContext)(void 0);
    function jl() {
        return (0,
        Ru.useContext)(CC)
    }
    var Oe = A(M(), 1);
    function Ed(...e) {
        return Array.from(new Set(e.flatMap(t => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ")
    }
    function kt(e, t, ...a) {
        if (e in t) {
            let l = t[e];
            return typeof l == "function" ? l(...a) : l
        }
        let o = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l => `"${l}"`).join(", ")}.`);
        throw Error.captureStackTrace && Error.captureStackTrace(o, kt),
        o
    }
    var Ys = (e => (e[e.None = 0] = "None",
    e[e.RenderStrategy = 1] = "RenderStrategy",
    e[e.Static = 2] = "Static",
    e))(Ys || {})
      , IC = (e => (e[e.Unmount = 0] = "Unmount",
    e[e.Hidden = 1] = "Hidden",
    e))(IC || {});
    function Ke() {
        let e = TC();
        return (0,
        Oe.useCallback)(t => wC({
            mergeRefs: e,
            ...t
        }), [e])
    }
    function wC({ourProps: e, theirProps: t, slot: a, defaultTag: o, features: l, visible: n=!0, name: u, mergeRefs: r}) {
        r = r ?? EC;
        let s = p0(t, e);
        if (n)
            return js(s, a, o, u, r);
        let i = l ?? 0;
        if (i & 2) {
            let {static: f=!1, ...g} = s;
            if (f)
                return js(g, a, o, u, r)
        }
        if (i & 1) {
            let {unmount: f=!0, ...g} = s;
            return kt(f ? 0 : 1, {
                0() {
                    return null
                },
                1() {
                    return js({
                        ...g,
                        hidden: !0,
                        style: {
                            display: "none"
                        }
                    }, a, o, u, r)
                }
            })
        }
        return js(s, a, o, u, r)
    }
    function js(e, t={}, a, o, l) {
        let {as: n=a, children: u, refName: r="ref", ...s} = Rd(e, ["unmount", "static"])
          , i = e.ref !== void 0 ? {
            [r]: e.ref
        } : {}
          , f = typeof u == "function" ? u(t) : u;
        "className"in s && s.className && typeof s.className == "function" && (s.className = s.className(t)),
        s["aria-labelledby"] && s["aria-labelledby"] === s.id && (s["aria-labelledby"] = void 0);
        let g = {};
        if (t) {
            let m = !1
              , c = [];
            for (let[x,L] of Object.entries(t))
                typeof L == "boolean" && (m = !0),
                L === !0 && c.push(x.replace(/([A-Z])/g, S => `-${S.toLowerCase()}`));
            if (m) {
                g["data-headlessui-state"] = c.join(" ");
                for (let x of c)
                    g[`data-${x}`] = ""
            }
        }
        if (n === Oe.Fragment && (Object.keys(io(s)).length > 0 || Object.keys(io(g)).length > 0))
            if (!(0,
            Oe.isValidElement)(f) || Array.isArray(f) && f.length > 1) {
                if (Object.keys(io(s)).length > 0)
                    throw new Error(['Passing props on "Fragment"!', "", `The current component <${o} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(io(s)).concat(Object.keys(io(g))).map(m => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(m => `  - ${m}`).join(`
`)].join(`
`))
            } else {
                let m = f.props
                  , c = m?.className
                  , x = typeof c == "function" ? (...h) => Ed(c(...h), s.className) : Ed(c, s.className)
                  , L = x ? {
                    className: x
                } : {}
                  , S = p0(f.props, io(Rd(s, ["ref"])));
                for (let h in g)
                    h in S && delete g[h];
                return (0,
                Oe.cloneElement)(f, Object.assign({}, S, g, i, {
                    ref: l(RC(f), i.ref)
                }, L))
            }
        return (0,
        Oe.createElement)(n, Object.assign({}, Rd(s, ["ref"]), n !== Oe.Fragment && i, n !== Oe.Fragment && g), f)
    }
    function TC() {
        let e = (0,
        Oe.useRef)([])
          , t = (0,
        Oe.useCallback)(a => {
            for (let o of e.current)
                o != null && (typeof o == "function" ? o(a) : o.current = a)
        }
        , []);
        return (...a) => {
            if (!a.every(o => o == null))
                return e.current = a,
                t
        }
    }
    function EC(...e) {
        return e.every(t => t == null) ? void 0 : t => {
            for (let a of e)
                a != null && (typeof a == "function" ? a(t) : a.current = t)
        }
    }
    function p0(...e) {
        var t;
        if (e.length === 0)
            return {};
        if (e.length === 1)
            return e[0];
        let a = {}
          , o = {};
        for (let l of e)
            for (let n in l)
                n.startsWith("on") && typeof l[n] == "function" ? ((t = o[n]) != null || (o[n] = []),
                o[n].push(l[n])) : a[n] = l[n];
        if (a.disabled || a["aria-disabled"])
            for (let l in o)
                /^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(l) && (o[l] = [n => {
                    var u;
                    return (u = n?.preventDefault) == null ? void 0 : u.call(n)
                }
                ]);
        for (let l in o)
            Object.assign(a, {
                [l](n, ...u) {
                    let r = o[l];
                    for (let s of r) {
                        if ((n instanceof Event || n?.nativeEvent instanceof Event) && n.defaultPrevented)
                            return;
                        s(n, ...u)
                    }
                }
            });
        return a
    }
    function Od(...e) {
        var t;
        if (e.length === 0)
            return {};
        if (e.length === 1)
            return e[0];
        let a = {}
          , o = {};
        for (let l of e)
            for (let n in l)
                n.startsWith("on") && typeof l[n] == "function" ? ((t = o[n]) != null || (o[n] = []),
                o[n].push(l[n])) : a[n] = l[n];
        for (let l in o)
            Object.assign(a, {
                [l](...n) {
                    let u = o[l];
                    for (let r of u)
                        r?.(...n)
                }
            });
        return a
    }
    function We(e) {
        var t;
        return Object.assign((0,
        Oe.forwardRef)(e), {
            displayName: (t = e.displayName) != null ? t : e.name
        })
    }
    function io(e) {
        let t = Object.assign({}, e);
        for (let a in t)
            t[a] === void 0 && delete t[a];
        return t
    }
    function Rd(e, t=[]) {
        let a = Object.assign({}, e);
        for (let o of t)
            o in a && delete a[o];
        return a
    }
    function RC(e) {
        return Oe.default.version.split(".")[0] >= "19" ? e.props.ref : e.ref
    }
    var Yl = A(M(), 1);
    function g0(e, t, a) {
        let[o,l] = (0,
        Yl.useState)(a)
          , n = e !== void 0
          , u = (0,
        Yl.useRef)(n)
          , r = (0,
        Yl.useRef)(!1)
          , s = (0,
        Yl.useRef)(!1);
        return n && !u.current && !r.current ? (r.current = !0,
        u.current = n,
        console.error("A component is changing from uncontrolled to controlled. This may be caused by the value changing from undefined to a defined value, which should not happen.")) : !n && u.current && !s.current && (s.current = !0,
        u.current = n,
        console.error("A component is changing from controlled to uncontrolled. This may be caused by the value changing from a defined value to undefined, which should not happen.")),
        [n ? e : o, q(i => (n || l(i),
        t?.(i)))]
    }
    var h0 = A(M(), 1);
    function x0(e) {
        let[t] = (0,
        h0.useState)(e);
        return t
    }
    var Oa = A(M(), 1);
    var Fe = A(M(), 1)
      , b0 = A(bo(), 1);
    function Ad(e={}, t=null, a=[]) {
        for (let[o,l] of Object.entries(e))
            L0(a, v0(t, o), l);
        return a
    }
    function v0(e, t) {
        return e ? e + "[" + t + "]" : t
    }
    function L0(e, t, a) {
        if (Array.isArray(a))
            for (let[o,l] of a.entries())
                L0(e, v0(t, o.toString()), l);
        else
            a instanceof Date ? e.push([t, a.toISOString()]) : typeof a == "boolean" ? e.push([t, a ? "1" : "0"]) : typeof a == "string" ? e.push([t, a]) : typeof a == "number" ? e.push([t, `${a}`]) : a == null ? e.push([t, ""]) : Ad(a, t, e)
    }
    function y0(e) {
        var t, a;
        let o = (t = e?.form) != null ? t : e.closest("form");
        if (o) {
            for (let l of o.elements)
                if (l !== e && (l.tagName === "INPUT" && l.type === "submit" || l.tagName === "BUTTON" && l.type === "submit" || l.nodeName === "INPUT" && l.type === "image")) {
                    l.click();
                    return
                }
            (a = o.requestSubmit) == null || a.call(o)
        }
    }
    var OC = "span"
      , Ks = (e => (e[e.None = 1] = "None",
    e[e.Focusable = 2] = "Focusable",
    e[e.Hidden = 4] = "Hidden",
    e))(Ks || {});
    function AC(e, t) {
        var a;
        let {features: o=1, ...l} = e
          , n = {
            ref: t,
            "aria-hidden": (o & 2) === 2 ? !0 : (a = l["aria-hidden"]) != null ? a : void 0,
            hidden: (o & 4) === 4 ? !0 : void 0,
            style: {
                position: "fixed",
                top: 1,
                left: 1,
                width: 1,
                height: 0,
                padding: 0,
                margin: -1,
                overflow: "hidden",
                clip: "rect(0, 0, 0, 0)",
                whiteSpace: "nowrap",
                borderWidth: "0",
                ...(o & 4) === 4 && (o & 2) !== 2 && {
                    display: "none"
                }
            }
        };
        return Ke()({
            ourProps: n,
            theirProps: l,
            slot: {},
            defaultTag: OC,
            name: "Hidden"
        })
    }
    var Md = We(AC);
    var MC = (0,
    Fe.createContext)(null);
    function DC({children: e}) {
        let t = (0,
        Fe.useContext)(MC);
        if (!t)
            return Fe.default.createElement(Fe.default.Fragment, null, e);
        let {target: a} = t;
        return a ? (0,
        b0.createPortal)(Fe.default.createElement(Fe.default.Fragment, null, e), a) : null
    }
    function S0({data: e, form: t, disabled: a, onReset: o, overrides: l}) {
        let[n,u] = (0,
        Fe.useState)(null)
          , r = zt();
        return (0,
        Fe.useEffect)( () => {
            if (o && n)
                return r.addEventListener(n, "reset", o)
        }
        , [n, t, o]),
        Fe.default.createElement(DC, null, Fe.default.createElement(kC, {
            setForm: u,
            formId: t
        }), Ad(e).map( ([s,i]) => Fe.default.createElement(Md, {
            features: Ks.Hidden,
            ...io({
                key: s,
                as: "input",
                type: "hidden",
                hidden: !0,
                readOnly: !0,
                form: t,
                disabled: a,
                name: s,
                value: i,
                ...l
            })
        })))
    }
    function kC({setForm: e, formId: t}) {
        return (0,
        Fe.useEffect)( () => {
            if (t) {
                let a = document.getElementById(t);
                a && e(a)
            }
        }
        , [e, t]),
        t ? null : Fe.default.createElement(Md, {
            features: Ks.Hidden,
            as: "input",
            type: "hidden",
            hidden: !0,
            readOnly: !0,
            ref: a => {
                if (!a)
                    return;
                let o = a.closest("form");
                o && e(o)
            }
        })
    }
    var Ou = A(M(), 1)
      , BC = (0,
    Ou.createContext)(void 0);
    function Ws() {
        return (0,
        Ou.useContext)(BC)
    }
    function C0(e) {
        let t = e.parentElement
          , a = null;
        for (; t && !(t instanceof HTMLFieldSetElement); )
            t instanceof HTMLLegendElement && (a = t),
            t = t.parentElement;
        let o = t?.getAttribute("disabled") === "";
        return o && PC(a) ? !1 : o
    }
    function PC(e) {
        if (!e)
            return !1;
        let t = e.previousElementSibling;
        for (; t !== null; ) {
            if (t instanceof HTMLLegendElement)
                return !1;
            t = t.previousElementSibling
        }
        return !0
    }
    var Aa = A(M(), 1);
    var Qs = A(M(), 1);
    var I0 = Symbol();
    function w0(e, t=!0) {
        return Object.assign(e, {
            [I0]: t
        })
    }
    function rt(...e) {
        let t = (0,
        Qs.useRef)(e);
        (0,
        Qs.useEffect)( () => {
            t.current = e
        }
        , [e]);
        let a = q(o => {
            for (let l of t.current)
                l != null && (typeof l == "function" ? l(o) : l.current = o)
        }
        );
        return e.every(o => o == null || o?.[I0]) ? void 0 : a
    }
    var Dd = (0,
    Aa.createContext)(null);
    Dd.displayName = "DescriptionContext";
    function T0() {
        let e = (0,
        Aa.useContext)(Dd);
        if (e === null) {
            let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
            throw Error.captureStackTrace && Error.captureStackTrace(t, T0),
            t
        }
        return e
    }
    function E0() {
        var e, t;
        return (t = (e = (0,
        Aa.useContext)(Dd)) == null ? void 0 : e.value) != null ? t : void 0
    }
    var _C = "p";
    function FC(e, t) {
        let a = (0,
        Oa.useId)()
          , o = jl()
          , {id: l=`headlessui-description-${a}`, ...n} = e
          , u = T0()
          , r = rt(t);
        K( () => u.register(l), [l, u.register]);
        let s = o || !1
          , i = (0,
        Aa.useMemo)( () => ({
            ...u.slot,
            disabled: s
        }), [u.slot, s])
          , f = {
            ref: r,
            ...u.props,
            id: l
        };
        return Ke()({
            ourProps: f,
            theirProps: n,
            slot: i,
            defaultTag: _C,
            name: u.name || "Description"
        })
    }
    var UC = We(FC)
      , wR = Object.assign(UC, {});
    var Ae = (e => (e.Space = " ",
    e.Enter = "Enter",
    e.Escape = "Escape",
    e.Backspace = "Backspace",
    e.Delete = "Delete",
    e.ArrowLeft = "ArrowLeft",
    e.ArrowUp = "ArrowUp",
    e.ArrowRight = "ArrowRight",
    e.ArrowDown = "ArrowDown",
    e.Home = "Home",
    e.End = "End",
    e.PageUp = "PageUp",
    e.PageDown = "PageDown",
    e.Tab = "Tab",
    e))(Ae || {});
    var gt = A(M(), 1);
    var Zs = (0,
    gt.createContext)(null);
    Zs.displayName = "LabelContext";
    function R0() {
        let e = (0,
        gt.useContext)(Zs);
        if (e === null) {
            let t = new Error("You used a <Label /> component, but it is not inside a relevant parent.");
            throw Error.captureStackTrace && Error.captureStackTrace(t, R0),
            t
        }
        return e
    }
    function kd(e) {
        var t, a, o;
        let l = (a = (t = (0,
        gt.useContext)(Zs)) == null ? void 0 : t.value) != null ? a : void 0;
        return ((o = e?.length) != null ? o : 0) > 0 ? [l, ...e].filter(Boolean).join(" ") : l
    }
    function O0({inherit: e=!1}={}) {
        let t = kd()
          , [a,o] = (0,
        gt.useState)([])
          , l = e ? [t, ...a].filter(Boolean) : a;
        return [l.length > 0 ? l.join(" ") : void 0, (0,
        gt.useMemo)( () => function(n) {
            let u = q(s => (o(i => [...i, s]),
            () => o(i => {
                let f = i.slice()
                  , g = f.indexOf(s);
                return g !== -1 && f.splice(g, 1),
                f
            }
            )))
              , r = (0,
            gt.useMemo)( () => ({
                register: u,
                slot: n.slot,
                name: n.name,
                props: n.props,
                value: n.value
            }), [u, n.slot, n.name, n.props, n.value]);
            return gt.default.createElement(Zs.Provider, {
                value: r
            }, n.children)
        }
        , [o])]
    }
    var HC = "label";
    function qC(e, t) {
        var a;
        let o = (0,
        Oa.useId)()
          , l = R0()
          , n = Ws()
          , u = jl()
          , {id: r=`headlessui-label-${o}`, htmlFor: s=n ?? ((a = l.props) == null ? void 0 : a.htmlFor), passive: i=!1, ...f} = e
          , g = rt(t);
        K( () => l.register(r), [r, l.register]);
        let m = q(S => {
            let h = S.currentTarget;
            if (h instanceof HTMLLabelElement && S.preventDefault(),
            l.props && "onClick"in l.props && typeof l.props.onClick == "function" && l.props.onClick(S),
            h instanceof HTMLLabelElement) {
                let d = document.getElementById(h.htmlFor);
                if (d) {
                    let p = d.getAttribute("disabled");
                    if (p === "true" || p === "")
                        return;
                    let v = d.getAttribute("aria-disabled");
                    if (v === "true" || v === "")
                        return;
                    (d instanceof HTMLInputElement && (d.type === "radio" || d.type === "checkbox") || d.role === "radio" || d.role === "checkbox" || d.role === "switch") && d.click(),
                    d.focus({
                        preventScroll: !0
                    })
                }
            }
        }
        )
          , c = u || !1
          , x = (0,
        gt.useMemo)( () => ({
            ...l.slot,
            disabled: c
        }), [l.slot, c])
          , L = {
            ref: g,
            ...l.props,
            id: r,
            htmlFor: s,
            onClick: m
        };
        return i && ("onClick"in L && (delete L.htmlFor,
        delete L.onClick),
        "onClick"in f && delete f.onClick),
        Ke()({
            ourProps: L,
            theirProps: f,
            slot: x,
            defaultTag: s ? HC : "div",
            name: l.name || "Label"
        })
    }
    var zC = We(qC)
      , A0 = Object.assign(zC, {});
    var M0 = A(M(), 1);
    function NC(e, t) {
        return e !== null && t !== null && typeof e == "object" && typeof t == "object" && "id"in e && "id"in t ? e.id === t.id : e === t
    }
    function D0(e=NC) {
        return (0,
        M0.useCallback)( (t, a) => {
            if (typeof e == "string") {
                let o = e;
                return t?.[o] === a?.[o]
            }
            return e(t, a)
        }
        , [e])
    }
    var Js = A(M(), 1);
    function $C(e) {
        if (e === null)
            return {
                width: 0,
                height: 0
            };
        let {width: t, height: a} = e.getBoundingClientRect();
        return {
            width: t,
            height: a
        }
    }
    function k0(e, t=!1) {
        let[a,o] = (0,
        Js.useReducer)( () => ({}), {})
          , l = (0,
        Js.useMemo)( () => $C(e), [e, a]);
        return K( () => {
            if (!e)
                return;
            let n = new ResizeObserver(o);
            return n.observe(e),
            () => {
                n.disconnect()
            }
        }
        , [e]),
        t ? {
            width: `${l.width}px`,
            height: `${l.height}px`
        } : l
    }
    var P0 = A(M(), 1);
    var ei = class extends Map {
        constructor(t) {
            super(),
            this.factory = t
        }
        get(t) {
            let a = super.get(t);
            return a === void 0 && (a = this.factory(t),
            this.set(t, a)),
            a
        }
    }
    ;
    function ti(e, t) {
        let a = e()
          , o = new Set;
        return {
            getSnapshot() {
                return a
            },
            subscribe(l) {
                return o.add(l),
                () => o.delete(l)
            },
            dispatch(l, ...n) {
                let u = t[l].call(a, ...n);
                u && (a = u,
                o.forEach(r => r()))
            }
        }
    }
    var B0 = A(M(), 1);
    function ai(e) {
        return (0,
        B0.useSyncExternalStore)(e.subscribe, e.getSnapshot, e.getSnapshot)
    }
    var VC = new ei( () => ti( () => [], {
        ADD(e) {
            return this.includes(e) ? this : [...this, e]
        },
        REMOVE(e) {
            let t = this.indexOf(e);
            if (t === -1)
                return this;
            let a = this.slice();
            return a.splice(t, 1),
            a
        }
    }));
    function Kl(e, t) {
        let a = VC.get(t)
          , o = (0,
        P0.useId)()
          , l = ai(a);
        if (K( () => {
            if (e)
                return a.dispatch("ADD", o),
                () => a.dispatch("REMOVE", o)
        }
        , [a, e]),
        !e)
            return !1;
        let n = l.indexOf(o)
          , u = l.length;
        return n === -1 && (n = u,
        u += 1),
        n === u - 1
    }
    var Bd = new Map
      , Au = new Map;
    function _0(e) {
        var t;
        let a = (t = Au.get(e)) != null ? t : 0;
        return Au.set(e, a + 1),
        a !== 0 ? () => F0(e) : (Bd.set(e, {
            "aria-hidden": e.getAttribute("aria-hidden"),
            inert: e.inert
        }),
        e.setAttribute("aria-hidden", "true"),
        e.inert = !0,
        () => F0(e))
    }
    function F0(e) {
        var t;
        let a = (t = Au.get(e)) != null ? t : 1;
        if (a === 1 ? Au.delete(e) : Au.set(e, a - 1),
        a !== 1)
            return;
        let o = Bd.get(e);
        o && (o["aria-hidden"] === null ? e.removeAttribute("aria-hidden") : e.setAttribute("aria-hidden", o["aria-hidden"]),
        e.inert = o.inert,
        Bd.delete(e))
    }
    function U0(e, {allowed: t, disallowed: a}={}) {
        let o = Kl(e, "inert-others");
        K( () => {
            var l, n;
            if (!o)
                return;
            let u = Ye();
            for (let s of (l = a?.()) != null ? l : [])
                s && u.add(_0(s));
            let r = (n = t?.()) != null ? n : [];
            for (let s of r) {
                if (!s)
                    continue;
                let i = aa(s);
                if (!i)
                    continue;
                let f = s.parentElement;
                for (; f && f !== i.body; ) {
                    for (let g of f.children)
                        r.some(m => g.contains(m)) || u.add(_0(g));
                    f = f.parentElement
                }
            }
            return u.dispose
        }
        , [o, t, a])
    }
    var H0 = A(M(), 1);
    function q0(e, t, a) {
        let o = Dt(l => {
            let n = l.getBoundingClientRect();
            n.x === 0 && n.y === 0 && n.width === 0 && n.height === 0 && a()
        }
        );
        (0,
        H0.useEffect)( () => {
            if (!e)
                return;
            let l = t === null ? null : t instanceof HTMLElement ? t : t.current;
            if (!l)
                return;
            let n = Ye();
            if (typeof ResizeObserver < "u") {
                let u = new ResizeObserver( () => o.current(l));
                u.observe(l),
                n.add( () => u.disconnect())
            }
            if (typeof IntersectionObserver < "u") {
                let u = new IntersectionObserver( () => o.current(l));
                u.observe(l),
                n.add( () => u.disconnect())
            }
            return () => n.dispose()
        }
        , [t, o, e])
    }
    var Du = A(M(), 1);
    var Pd = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",")
      , GC = ["[data-autofocus]"].map(e => `${e}:not([tabindex='-1'])`).join(",")
      , oi = (e => (e[e.First = 1] = "First",
    e[e.Previous = 2] = "Previous",
    e[e.Next = 4] = "Next",
    e[e.Last = 8] = "Last",
    e[e.WrapAround = 16] = "WrapAround",
    e[e.NoScroll = 32] = "NoScroll",
    e[e.AutoFocus = 64] = "AutoFocus",
    e))(oi || {})
      , XC = (e => (e[e.Error = 0] = "Error",
    e[e.Overflow = 1] = "Overflow",
    e[e.Success = 2] = "Success",
    e[e.Underflow = 3] = "Underflow",
    e))(XC || {})
      , jC = (e => (e[e.Previous = -1] = "Previous",
    e[e.Next = 1] = "Next",
    e))(jC || {});
    function z0(e=document.body) {
        return e == null ? [] : Array.from(e.querySelectorAll(Pd)).sort( (t, a) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (a.tabIndex || Number.MAX_SAFE_INTEGER)))
    }
    function YC(e=document.body) {
        return e == null ? [] : Array.from(e.querySelectorAll(GC)).sort( (t, a) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (a.tabIndex || Number.MAX_SAFE_INTEGER)))
    }
    var Mu = (e => (e[e.Strict = 0] = "Strict",
    e[e.Loose = 1] = "Loose",
    e))(Mu || {});
    function li(e, t=0) {
        var a;
        return e === ((a = aa(e)) == null ? void 0 : a.body) ? !1 : kt(t, {
            0() {
                return e.matches(Pd)
            },
            1() {
                let o = e;
                for (; o !== null; ) {
                    if (o.matches(Pd))
                        return !0;
                    o = o.parentElement
                }
                return !1
            }
        })
    }
    var KC = (e => (e[e.Keyboard = 0] = "Keyboard",
    e[e.Mouse = 1] = "Mouse",
    e))(KC || {});
    typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
        e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
    }
    , !0),
    document.addEventListener("click", e => {
        e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
    }
    , !0));
    var WC = ["textarea", "input"].join(",");
    function QC(e) {
        var t, a;
        return (a = (t = e?.matches) == null ? void 0 : t.call(e, WC)) != null ? a : !1
    }
    function _d(e, t=a => a) {
        return e.slice().sort( (a, o) => {
            let l = t(a)
              , n = t(o);
            if (l === null || n === null)
                return 0;
            let u = l.compareDocumentPosition(n);
            return u & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : u & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
        }
        )
    }
    function N0(e, t) {
        return ZC(z0(), t, {
            relativeTo: e
        })
    }
    function ZC(e, t, {sorted: a=!0, relativeTo: o=null, skipElements: l=[]}={}) {
        let n = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument
          , u = Array.isArray(e) ? a ? _d(e) : e : t & 64 ? YC(e) : z0(e);
        l.length > 0 && u.length > 1 && (u = u.filter(c => !l.some(x => x != null && "current"in x ? x?.current === c : x === c))),
        o = o ?? n.activeElement;
        let r = ( () => {
            if (t & 5)
                return 1;
            if (t & 10)
                return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        }
        )(), s = ( () => {
            if (t & 1)
                return 0;
            if (t & 2)
                return Math.max(0, u.indexOf(o)) - 1;
            if (t & 4)
                return Math.max(0, u.indexOf(o)) + 1;
            if (t & 8)
                return u.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        }
        )(), i = t & 32 ? {
            preventScroll: !0
        } : {}, f = 0, g = u.length, m;
        do {
            if (f >= g || f + g <= 0)
                return 0;
            let c = s + f;
            if (t & 16)
                c = (c + g) % g;
            else {
                if (c < 0)
                    return 3;
                if (c >= g)
                    return 1
            }
            m = u[c],
            m?.focus(i),
            f += r
        } while (m !== n.activeElement);
        return t & 6 && QC(m) && m.select(),
        2
    }
    function Fd() {
        return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
    }
    function JC() {
        return /Android/gi.test(window.navigator.userAgent)
    }
    function $0() {
        return Fd() || JC()
    }
    var V0 = A(M(), 1);
    function Wl(e, t, a, o) {
        let l = Dt(a);
        (0,
        V0.useEffect)( () => {
            if (!e)
                return;
            function n(u) {
                l.current(u)
            }
            return document.addEventListener(t, n, o),
            () => document.removeEventListener(t, n, o)
        }
        , [e, t, o])
    }
    var G0 = A(M(), 1);
    function X0(e, t, a, o) {
        let l = Dt(a);
        (0,
        G0.useEffect)( () => {
            if (!e)
                return;
            function n(u) {
                l.current(u)
            }
            return window.addEventListener(t, n, o),
            () => window.removeEventListener(t, n, o)
        }
        , [e, t, o])
    }
    var j0 = 30;
    function Y0(e, t, a) {
        let o = Kl(e, "outside-click")
          , l = Dt(a)
          , n = (0,
        Du.useCallback)(function(s, i) {
            if (s.defaultPrevented)
                return;
            let f = i(s);
            if (f === null || !f.getRootNode().contains(f) || !f.isConnected)
                return;
            let g = function m(c) {
                return typeof c == "function" ? m(c()) : Array.isArray(c) || c instanceof Set ? c : [c]
            }(t);
            for (let m of g)
                if (m !== null && (m.contains(f) || s.composed && s.composedPath().includes(m)))
                    return;
            return !li(f, Mu.Loose) && f.tabIndex !== -1 && s.preventDefault(),
            l.current(s, f)
        }, [l, t])
          , u = (0,
        Du.useRef)(null);
        Wl(o, "pointerdown", s => {
            var i, f;
            u.current = ((f = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : f[0]) || s.target
        }
        , !0),
        Wl(o, "mousedown", s => {
            var i, f;
            u.current = ((f = (i = s.composedPath) == null ? void 0 : i.call(s)) == null ? void 0 : f[0]) || s.target
        }
        , !0),
        Wl(o, "click", s => {
            $0() || u.current && (n(s, () => u.current),
            u.current = null)
        }
        , !0);
        let r = (0,
        Du.useRef)({
            x: 0,
            y: 0
        });
        Wl(o, "touchstart", s => {
            r.current.x = s.touches[0].clientX,
            r.current.y = s.touches[0].clientY
        }
        , !0),
        Wl(o, "touchend", s => {
            let i = {
                x: s.changedTouches[0].clientX,
                y: s.changedTouches[0].clientY
            };
            if (!(Math.abs(i.x - r.current.x) >= j0 || Math.abs(i.y - r.current.y) >= j0))
                return n(s, () => s.target instanceof HTMLElement ? s.target : null)
        }
        , !0),
        X0(o, "blur", s => n(s, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
    }
    var K0 = A(M(), 1);
    function ku(...e) {
        return (0,
        K0.useMemo)( () => aa(...e), [...e])
    }
    var W0 = A(M(), 1);
    function Q0(e, t) {
        return (0,
        W0.useMemo)( () => {
            var a;
            if (e.type)
                return e.type;
            let o = (a = e.as) != null ? a : "button";
            if (typeof o == "string" && o.toLowerCase() === "button" || t?.tagName === "BUTTON" && !t.hasAttribute("type"))
                return "button"
        }
        , [e.type, e.as, t])
    }
    function Z0() {
        let e;
        return {
            before({doc: t}) {
                var a;
                let o = t.documentElement
                  , l = (a = t.defaultView) != null ? a : window;
                e = Math.max(0, l.innerWidth - o.clientWidth)
            },
            after({doc: t, d: a}) {
                let o = t.documentElement
                  , l = Math.max(0, o.clientWidth - o.offsetWidth)
                  , n = Math.max(0, e - l);
                a.style(o, "paddingRight", `${n}px`)
            }
        }
    }
    function J0() {
        return Fd() ? {
            before({doc: e, d: t, meta: a}) {
                function o(l) {
                    return a.containers.flatMap(n => n()).some(n => n.contains(l))
                }
                t.microTask( () => {
                    var l;
                    if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
                        let r = Ye();
                        r.style(e.documentElement, "scrollBehavior", "auto"),
                        t.add( () => t.microTask( () => r.dispose()))
                    }
                    let n = (l = window.scrollY) != null ? l : window.pageYOffset
                      , u = null;
                    t.addEventListener(e, "click", r => {
                        if (r.target instanceof HTMLElement)
                            try {
                                let s = r.target.closest("a");
                                if (!s)
                                    return;
                                let {hash: i} = new URL(s.href)
                                  , f = e.querySelector(i);
                                f && !o(f) && (u = f)
                            } catch {}
                    }
                    , !0),
                    t.addEventListener(e, "touchstart", r => {
                        if (r.target instanceof HTMLElement)
                            if (o(r.target)) {
                                let s = r.target;
                                for (; s.parentElement && o(s.parentElement); )
                                    s = s.parentElement;
                                t.style(s, "overscrollBehavior", "contain")
                            } else
                                t.style(r.target, "touchAction", "none")
                    }
                    ),
                    t.addEventListener(e, "touchmove", r => {
                        if (r.target instanceof HTMLElement) {
                            if (r.target.tagName === "INPUT")
                                return;
                            if (o(r.target)) {
                                let s = r.target;
                                for (; s.parentElement && s.dataset.headlessuiPortal !== "" && !(s.scrollHeight > s.clientHeight || s.scrollWidth > s.clientWidth); )
                                    s = s.parentElement;
                                s.dataset.headlessuiPortal === "" && r.preventDefault()
                            } else
                                r.preventDefault()
                        }
                    }
                    , {
                        passive: !1
                    }),
                    t.add( () => {
                        var r;
                        let s = (r = window.scrollY) != null ? r : window.pageYOffset;
                        n !== s && window.scrollTo(0, n),
                        u && u.isConnected && (u.scrollIntoView({
                            block: "nearest"
                        }),
                        u = null)
                    }
                    )
                }
                )
            }
        } : {}
    }
    function ev() {
        return {
            before({doc: e, d: t}) {
                t.style(e.documentElement, "overflow", "hidden")
            }
        }
    }
    function eI(e) {
        let t = {};
        for (let a of e)
            Object.assign(t, a(t));
        return t
    }
    var fo = ti( () => new Map, {
        PUSH(e, t) {
            var a;
            let o = (a = this.get(e)) != null ? a : {
                doc: e,
                count: 0,
                d: Ye(),
                meta: new Set
            };
            return o.count++,
            o.meta.add(t),
            this.set(e, o),
            this
        },
        POP(e, t) {
            let a = this.get(e);
            return a && (a.count--,
            a.meta.delete(t)),
            this
        },
        SCROLL_PREVENT({doc: e, d: t, meta: a}) {
            let o = {
                doc: e,
                d: t,
                meta: eI(a)
            }
              , l = [J0(), Z0(), ev()];
            l.forEach( ({before: n}) => n?.(o)),
            l.forEach( ({after: n}) => n?.(o))
        },
        SCROLL_ALLOW({d: e}) {
            e.dispose()
        },
        TEARDOWN({doc: e}) {
            this.delete(e)
        }
    });
    fo.subscribe( () => {
        let e = fo.getSnapshot()
          , t = new Map;
        for (let[a] of e)
            t.set(a, a.documentElement.style.overflow);
        for (let a of e.values()) {
            let o = t.get(a.doc) === "hidden"
              , l = a.count !== 0;
            (l && !o || !l && o) && fo.dispatch(a.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", a),
            a.count === 0 && fo.dispatch("TEARDOWN", a)
        }
    }
    );
    function tv(e, t, a= () => ({
        containers: []
    })) {
        let o = ai(fo)
          , l = t ? o.get(t) : void 0
          , n = l ? l.count > 0 : !1;
        return K( () => {
            if (!(!t || !e))
                return fo.dispatch("PUSH", t, a),
                () => fo.dispatch("POP", t, a)
        }
        , [e, t]),
        n
    }
    function av(e, t, a= () => [document.body]) {
        let o = Kl(e, "scroll-lock");
        tv(o, t, l => {
            var n;
            return {
                containers: [...(n = l.containers) != null ? n : [], a]
            }
        }
        )
    }
    var lv = A(M(), 1);
    function ov(e) {
        return [e.screenX, e.screenY]
    }
    function nv() {
        let e = (0,
        lv.useRef)([-1, -1]);
        return {
            wasMoved(t) {
                let a = ov(t);
                return e.current[0] === a[0] && e.current[1] === a[1] ? !1 : (e.current = a,
                !0)
            },
            update(t) {
                e.current = ov(t)
            }
        }
    }
    var Bu = A(M(), 1);
    var co = A(M(), 1);
    function uv(e=0) {
        let[t,a] = (0,
        co.useState)(e)
          , o = (0,
        co.useCallback)(s => a(s), [t])
          , l = (0,
        co.useCallback)(s => a(i => i | s), [t])
          , n = (0,
        co.useCallback)(s => (t & s) === s, [t])
          , u = (0,
        co.useCallback)(s => a(i => i & ~s), [a])
          , r = (0,
        co.useCallback)(s => a(i => i ^ s), [a]);
        return {
            flags: t,
            setFlag: o,
            addFlag: l,
            hasFlag: n,
            removeFlag: u,
            toggleFlag: r
        }
    }
    var rv, sv;
    typeof process < "u" && typeof globalThis < "u" && typeof Element < "u" && ((rv = process == null ? void 0 : process.env) == null ? void 0 : rv.NODE_ENV) === "test" && typeof ((sv = Element?.prototype) == null ? void 0 : sv.getAnimations) > "u" && (Element.prototype.getAnimations = function() {
        return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.", "Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.", "", "Example usage:", "```js", "import { mockAnimationsApi } from 'jsdom-testing-mocks'", "mockAnimationsApi()", "```"].join(`
`)),
        []
    }
    );
    var tI = (e => (e[e.None = 0] = "None",
    e[e.Closed = 1] = "Closed",
    e[e.Enter = 2] = "Enter",
    e[e.Leave = 4] = "Leave",
    e))(tI || {});
    function iv(e) {
        let t = {};
        for (let a in e)
            e[a] === !0 && (t[`data-${a}`] = "");
        return t
    }
    function fv(e, t, a, o) {
        let[l,n] = (0,
        Bu.useState)(a)
          , {hasFlag: u, addFlag: r, removeFlag: s} = uv(e && l ? 3 : 0)
          , i = (0,
        Bu.useRef)(!1)
          , f = (0,
        Bu.useRef)(!1)
          , g = zt();
        return K( () => {
            var m;
            if (e) {
                if (a && n(!0),
                !t) {
                    a && r(3);
                    return
                }
                return (m = o?.start) == null || m.call(o, a),
                aI(t, {
                    inFlight: i,
                    prepare() {
                        f.current ? f.current = !1 : f.current = i.current,
                        i.current = !0,
                        !f.current && (a ? (r(3),
                        s(4)) : (r(4),
                        s(2)))
                    },
                    run() {
                        f.current ? a ? (s(3),
                        r(4)) : (s(4),
                        r(3)) : a ? s(1) : r(1)
                    },
                    done() {
                        var c;
                        f.current && typeof t.getAnimations == "function" && t.getAnimations().length > 0 || (i.current = !1,
                        s(7),
                        a || n(!1),
                        (c = o?.end) == null || c.call(o, a))
                    }
                })
            }
        }
        , [e, a, t, g]),
        e ? [l, {
            closed: u(1),
            enter: u(2),
            leave: u(4),
            transition: u(2) || u(4)
        }] : [a, {
            closed: void 0,
            enter: void 0,
            leave: void 0,
            transition: void 0
        }]
    }
    function aI(e, {prepare: t, run: a, done: o, inFlight: l}) {
        let n = Ye();
        return lI(e, {
            prepare: t,
            inFlight: l
        }),
        n.nextFrame( () => {
            a(),
            n.requestAnimationFrame( () => {
                n.add(oI(e, o))
            }
            )
        }
        ),
        n.dispose
    }
    function oI(e, t) {
        var a, o;
        let l = Ye();
        if (!e)
            return l.dispose;
        let n = !1;
        l.add( () => {
            n = !0
        }
        );
        let u = (o = (a = e.getAnimations) == null ? void 0 : a.call(e).filter(r => r instanceof CSSTransition)) != null ? o : [];
        return u.length === 0 ? (t(),
        l.dispose) : (Promise.allSettled(u.map(r => r.finished)).then( () => {
            n || t()
        }
        ),
        l.dispose)
    }
    function lI(e, {inFlight: t, prepare: a}) {
        if (t != null && t.current) {
            a();
            return
        }
        let o = e.style.transition;
        e.style.transition = "none",
        a(),
        e.offsetHeight,
        e.style.transition = o
    }
    var k = A(M(), 1)
      , Nu = A(M(), 1);
    function ni() {
        return typeof window < "u"
    }
    function mo(e) {
        return dv(e) ? (e.nodeName || "").toLowerCase() : "#document"
    }
    function ot(e) {
        var t;
        return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
    }
    function Nt(e) {
        var t;
        return (t = (dv(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
    }
    function dv(e) {
        return ni() ? e instanceof Node || e instanceof ot(e).Node : !1
    }
    function $e(e) {
        return ni() ? e instanceof Element || e instanceof ot(e).Element : !1
    }
    function Bt(e) {
        return ni() ? e instanceof HTMLElement || e instanceof ot(e).HTMLElement : !1
    }
    function cv(e) {
        return !ni() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof ot(e).ShadowRoot
    }
    function Ql(e) {
        let {overflow: t, overflowX: a, overflowY: o, display: l} = ht(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + o + a) && !["inline", "contents"].includes(l)
    }
    function mv(e) {
        return ["table", "td", "th"].includes(mo(e))
    }
    function Pu(e) {
        return [":popover-open", ":modal"].some(t => {
            try {
                return e.matches(t)
            } catch {
                return !1
            }
        }
        )
    }
    function ui(e) {
        let t = _u()
          , a = $e(e) ? ht(e) : e;
        return ["transform", "translate", "scale", "rotate", "perspective"].some(o => a[o] ? a[o] !== "none" : !1) || (a.containerType ? a.containerType !== "normal" : !1) || !t && (a.backdropFilter ? a.backdropFilter !== "none" : !1) || !t && (a.filter ? a.filter !== "none" : !1) || ["transform", "translate", "scale", "rotate", "perspective", "filter"].some(o => (a.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some(o => (a.contain || "").includes(o))
    }
    function pv(e) {
        let t = oa(e);
        for (; Bt(t) && !po(t); ) {
            if (ui(t))
                return t;
            if (Pu(t))
                return null;
            t = oa(t)
        }
        return null
    }
    function _u() {
        return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
    }
    function po(e) {
        return ["html", "body", "#document"].includes(mo(e))
    }
    function ht(e) {
        return ot(e).getComputedStyle(e)
    }
    function Fu(e) {
        return $e(e) ? {
            scrollLeft: e.scrollLeft,
            scrollTop: e.scrollTop
        } : {
            scrollLeft: e.scrollX,
            scrollTop: e.scrollY
        }
    }
    function oa(e) {
        if (mo(e) === "html")
            return e;
        let t = e.assignedSlot || e.parentNode || cv(e) && e.host || Nt(e);
        return cv(t) ? t.host : t
    }
    function gv(e) {
        let t = oa(e);
        return po(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Bt(t) && Ql(t) ? t : gv(t)
    }
    function Ma(e, t, a) {
        var o;
        t === void 0 && (t = []),
        a === void 0 && (a = !0);
        let l = gv(e)
          , n = l === ((o = e.ownerDocument) == null ? void 0 : o.body)
          , u = ot(l);
        if (n) {
            let r = ri(u);
            return t.concat(u, u.visualViewport || [], Ql(l) ? l : [], r && a ? Ma(r) : [])
        }
        return t.concat(l, Ma(l, [], a))
    }
    function ri(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
    }
    function hv() {
        let e = navigator.userAgentData;
        return e && Array.isArray(e.brands) ? e.brands.map(t => {
            let {brand: a, version: o} = t;
            return a + "/" + o
        }
        ).join(" ") : navigator.userAgent
    }
    var la = Math.min
      , Me = Math.max
      , jo = Math.round
      , Zl = Math.floor
      , $t = e => ({
        x: e,
        y: e
    })
      , nI = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    }
      , uI = {
        start: "end",
        end: "start"
    };
    function Ud(e, t, a) {
        return Me(e, la(t, a))
    }
    function go(e, t) {
        return typeof e == "function" ? e(t) : e
    }
    function Da(e) {
        return e.split("-")[0]
    }
    function Jl(e) {
        return e.split("-")[1]
    }
    function Hd(e) {
        return e === "x" ? "y" : "x"
    }
    function qd(e) {
        return e === "y" ? "height" : "width"
    }
    function ho(e) {
        return ["top", "bottom"].includes(Da(e)) ? "y" : "x"
    }
    function zd(e) {
        return Hd(ho(e))
    }
    function xv(e, t, a) {
        a === void 0 && (a = !1);
        let o = Jl(e)
          , l = zd(e)
          , n = qd(l)
          , u = l === "x" ? o === (a ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
        return t.reference[n] > t.floating[n] && (u = Uu(u)),
        [u, Uu(u)]
    }
    function vv(e) {
        let t = Uu(e);
        return [si(e), t, si(t)]
    }
    function si(e) {
        return e.replace(/start|end/g, t => uI[t])
    }
    function rI(e, t, a) {
        let o = ["left", "right"]
          , l = ["right", "left"]
          , n = ["top", "bottom"]
          , u = ["bottom", "top"];
        switch (e) {
        case "top":
        case "bottom":
            return a ? t ? l : o : t ? o : l;
        case "left":
        case "right":
            return t ? n : u;
        default:
            return []
        }
    }
    function Lv(e, t, a, o) {
        let l = Jl(e)
          , n = rI(Da(e), a === "start", o);
        return l && (n = n.map(u => u + "-" + l),
        t && (n = n.concat(n.map(si)))),
        n
    }
    function Uu(e) {
        return e.replace(/left|right|bottom|top/g, t => nI[t])
    }
    function sI(e) {
        return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
        }
    }
    function yv(e) {
        return typeof e != "number" ? sI(e) : {
            top: e,
            right: e,
            bottom: e,
            left: e
        }
    }
    function Yo(e) {
        let {x: t, y: a, width: o, height: l} = e;
        return {
            width: o,
            height: l,
            top: a,
            left: t,
            right: t + o,
            bottom: a + l,
            x: t,
            y: a
        }
    }
    var zu = A(bo(), 1);
    function bv(e, t, a) {
        let {reference: o, floating: l} = e, n = ho(t), u = zd(t), r = qd(u), s = Da(t), i = n === "y", f = o.x + o.width / 2 - l.width / 2, g = o.y + o.height / 2 - l.height / 2, m = o[r] / 2 - l[r] / 2, c;
        switch (s) {
        case "top":
            c = {
                x: f,
                y: o.y - l.height
            };
            break;
        case "bottom":
            c = {
                x: f,
                y: o.y + o.height
            };
            break;
        case "right":
            c = {
                x: o.x + o.width,
                y: g
            };
            break;
        case "left":
            c = {
                x: o.x - l.width,
                y: g
            };
            break;
        default:
            c = {
                x: o.x,
                y: o.y
            }
        }
        switch (Jl(t)) {
        case "start":
            c[u] -= m * (a && i ? -1 : 1);
            break;
        case "end":
            c[u] += m * (a && i ? -1 : 1);
            break
        }
        return c
    }
    var Sv = async (e, t, a) => {
        let {placement: o="bottom", strategy: l="absolute", middleware: n=[], platform: u} = a
          , r = n.filter(Boolean)
          , s = await (u.isRTL == null ? void 0 : u.isRTL(t))
          , i = await u.getElementRects({
            reference: e,
            floating: t,
            strategy: l
        })
          , {x: f, y: g} = bv(i, o, s)
          , m = o
          , c = {}
          , x = 0;
        for (let L = 0; L < r.length; L++) {
            let {name: S, fn: h} = r[L]
              , {x: d, y: p, data: v, reset: y} = await h({
                x: f,
                y: g,
                initialPlacement: o,
                placement: m,
                strategy: l,
                middlewareData: c,
                rects: i,
                platform: u,
                elements: {
                    reference: e,
                    floating: t
                }
            });
            f = d ?? f,
            g = p ?? g,
            c = {
                ...c,
                [S]: {
                    ...c[S],
                    ...v
                }
            },
            y && x <= 50 && (x++,
            typeof y == "object" && (y.placement && (m = y.placement),
            y.rects && (i = y.rects === !0 ? await u.getElementRects({
                reference: e,
                floating: t,
                strategy: l
            }) : y.rects),
            {x: f, y: g} = bv(i, m, s)),
            L = -1)
        }
        return {
            x: f,
            y: g,
            placement: m,
            strategy: l,
            middlewareData: c
        }
    }
    ;
    async function Hu(e, t) {
        var a;
        t === void 0 && (t = {});
        let {x: o, y: l, platform: n, rects: u, elements: r, strategy: s} = e
          , {boundary: i="clippingAncestors", rootBoundary: f="viewport", elementContext: g="floating", altBoundary: m=!1, padding: c=0} = go(t, e)
          , x = yv(c)
          , S = r[m ? g === "floating" ? "reference" : "floating" : g]
          , h = Yo(await n.getClippingRect({
            element: (a = await (n.isElement == null ? void 0 : n.isElement(S))) == null || a ? S : S.contextElement || await (n.getDocumentElement == null ? void 0 : n.getDocumentElement(r.floating)),
            boundary: i,
            rootBoundary: f,
            strategy: s
        }))
          , d = g === "floating" ? {
            x: o,
            y: l,
            width: u.floating.width,
            height: u.floating.height
        } : u.reference
          , p = await (n.getOffsetParent == null ? void 0 : n.getOffsetParent(r.floating))
          , v = await (n.isElement == null ? void 0 : n.isElement(p)) ? await (n.getScale == null ? void 0 : n.getScale(p)) || {
            x: 1,
            y: 1
        } : {
            x: 1,
            y: 1
        }
          , y = Yo(n.convertOffsetParentRelativeRectToViewportRelativeRect ? await n.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: r,
            rect: d,
            offsetParent: p,
            strategy: s
        }) : d);
        return {
            top: (h.top - y.top + x.top) / v.y,
            bottom: (y.bottom - h.bottom + x.bottom) / v.y,
            left: (h.left - y.left + x.left) / v.x,
            right: (y.right - h.right + x.right) / v.x
        }
    }
    var Cv = function(e) {
        return e === void 0 && (e = {}),
        {
            name: "flip",
            options: e,
            async fn(t) {
                var a, o;
                let {placement: l, middlewareData: n, rects: u, initialPlacement: r, platform: s, elements: i} = t
                  , {mainAxis: f=!0, crossAxis: g=!0, fallbackPlacements: m, fallbackStrategy: c="bestFit", fallbackAxisSideDirection: x="none", flipAlignment: L=!0, ...S} = go(e, t);
                if ((a = n.arrow) != null && a.alignmentOffset)
                    return {};
                let h = Da(l)
                  , d = ho(r)
                  , p = Da(r) === r
                  , v = await (s.isRTL == null ? void 0 : s.isRTL(i.floating))
                  , y = m || (p || !L ? [Uu(r)] : vv(r))
                  , I = x !== "none";
                !m && I && y.push(...Lv(r, L, x, v));
                let b = [r, ...y]
                  , T = await Hu(t, S)
                  , R = []
                  , w = ((o = n.flip) == null ? void 0 : o.overflows) || [];
                if (f && R.push(T[h]),
                g) {
                    let W = xv(l, u, v);
                    R.push(T[W[0]], T[W[1]])
                }
                if (w = [...w, {
                    placement: l,
                    overflows: R
                }],
                !R.every(W => W <= 0)) {
                    var O, z;
                    let W = (((O = n.flip) == null ? void 0 : O.index) || 0) + 1
                      , F = b[W];
                    if (F)
                        return {
                            data: {
                                index: W,
                                overflows: w
                            },
                            reset: {
                                placement: F
                            }
                        };
                    let P = (z = w.filter(re => re.overflows[0] <= 0).sort( (re, _) => re.overflows[1] - _.overflows[1])[0]) == null ? void 0 : z.placement;
                    if (!P)
                        switch (c) {
                        case "bestFit":
                            {
                                var Y;
                                let re = (Y = w.filter(_ => {
                                    if (I) {
                                        let Q = ho(_.placement);
                                        return Q === d || Q === "y"
                                    }
                                    return !0
                                }
                                ).map(_ => [_.placement, _.overflows.filter(Q => Q > 0).reduce( (Q, ve) => Q + ve, 0)]).sort( (_, Q) => _[1] - Q[1])[0]) == null ? void 0 : Y[0];
                                re && (P = re);
                                break
                            }
                        case "initialPlacement":
                            P = r;
                            break
                        }
                    if (l !== P)
                        return {
                            reset: {
                                placement: P
                            }
                        }
                }
                return {}
            }
        }
    };
    async function iI(e, t) {
        let {placement: a, platform: o, elements: l} = e
          , n = await (o.isRTL == null ? void 0 : o.isRTL(l.floating))
          , u = Da(a)
          , r = Jl(a)
          , s = ho(a) === "y"
          , i = ["left", "top"].includes(u) ? -1 : 1
          , f = n && s ? -1 : 1
          , g = go(t, e)
          , {mainAxis: m, crossAxis: c, alignmentAxis: x} = typeof g == "number" ? {
            mainAxis: g,
            crossAxis: 0,
            alignmentAxis: null
        } : {
            mainAxis: g.mainAxis || 0,
            crossAxis: g.crossAxis || 0,
            alignmentAxis: g.alignmentAxis
        };
        return r && typeof x == "number" && (c = r === "end" ? x * -1 : x),
        s ? {
            x: c * f,
            y: m * i
        } : {
            x: m * i,
            y: c * f
        }
    }
    var Iv = function(e) {
        return e === void 0 && (e = 0),
        {
            name: "offset",
            options: e,
            async fn(t) {
                var a, o;
                let {x: l, y: n, placement: u, middlewareData: r} = t
                  , s = await iI(t, e);
                return u === ((a = r.offset) == null ? void 0 : a.placement) && (o = r.arrow) != null && o.alignmentOffset ? {} : {
                    x: l + s.x,
                    y: n + s.y,
                    data: {
                        ...s,
                        placement: u
                    }
                }
            }
        }
    }
      , wv = function(e) {
        return e === void 0 && (e = {}),
        {
            name: "shift",
            options: e,
            async fn(t) {
                let {x: a, y: o, placement: l} = t
                  , {mainAxis: n=!0, crossAxis: u=!1, limiter: r={
                    fn: S => {
                        let {x: h, y: d} = S;
                        return {
                            x: h,
                            y: d
                        }
                    }
                }, ...s} = go(e, t)
                  , i = {
                    x: a,
                    y: o
                }
                  , f = await Hu(t, s)
                  , g = ho(Da(l))
                  , m = Hd(g)
                  , c = i[m]
                  , x = i[g];
                if (n) {
                    let S = m === "y" ? "top" : "left"
                      , h = m === "y" ? "bottom" : "right"
                      , d = c + f[S]
                      , p = c - f[h];
                    c = Ud(d, c, p)
                }
                if (u) {
                    let S = g === "y" ? "top" : "left"
                      , h = g === "y" ? "bottom" : "right"
                      , d = x + f[S]
                      , p = x - f[h];
                    x = Ud(d, x, p)
                }
                let L = r.fn({
                    ...t,
                    [m]: c,
                    [g]: x
                });
                return {
                    ...L,
                    data: {
                        x: L.x - a,
                        y: L.y - o,
                        enabled: {
                            [m]: n,
                            [g]: u
                        }
                    }
                }
            }
        }
    };
    var Tv = function(e) {
        return e === void 0 && (e = {}),
        {
            name: "size",
            options: e,
            async fn(t) {
                var a, o;
                let {placement: l, rects: n, platform: u, elements: r} = t, {apply: s= () => {}
                , ...i} = go(e, t), f = await Hu(t, i), g = Da(l), m = Jl(l), c = ho(l) === "y", {width: x, height: L} = n.floating, S, h;
                g === "top" || g === "bottom" ? (S = g,
                h = m === (await (u.isRTL == null ? void 0 : u.isRTL(r.floating)) ? "start" : "end") ? "left" : "right") : (h = g,
                S = m === "end" ? "top" : "bottom");
                let d = L - f.top - f.bottom
                  , p = x - f.left - f.right
                  , v = la(L - f[S], d)
                  , y = la(x - f[h], p)
                  , I = !t.middlewareData.shift
                  , b = v
                  , T = y;
                if ((a = t.middlewareData.shift) != null && a.enabled.x && (T = p),
                (o = t.middlewareData.shift) != null && o.enabled.y && (b = d),
                I && !m) {
                    let w = Me(f.left, 0)
                      , O = Me(f.right, 0)
                      , z = Me(f.top, 0)
                      , Y = Me(f.bottom, 0);
                    c ? T = x - 2 * (w !== 0 || O !== 0 ? w + O : Me(f.left, f.right)) : b = L - 2 * (z !== 0 || Y !== 0 ? z + Y : Me(f.top, f.bottom))
                }
                await s({
                    ...t,
                    availableWidth: T,
                    availableHeight: b
                });
                let R = await u.getDimensions(r.floating);
                return x !== R.width || L !== R.height ? {
                    reset: {
                        rects: !0
                    }
                } : {}
            }
        }
    };
    function Ov(e) {
        let t = ht(e)
          , a = parseFloat(t.width) || 0
          , o = parseFloat(t.height) || 0
          , l = Bt(e)
          , n = l ? e.offsetWidth : a
          , u = l ? e.offsetHeight : o
          , r = jo(a) !== n || jo(o) !== u;
        return r && (a = n,
        o = u),
        {
            width: a,
            height: o,
            $: r
        }
    }
    function $d(e) {
        return $e(e) ? e : e.contextElement
    }
    function en(e) {
        let t = $d(e);
        if (!Bt(t))
            return $t(1);
        let a = t.getBoundingClientRect()
          , {width: o, height: l, $: n} = Ov(t)
          , u = (n ? jo(a.width) : a.width) / o
          , r = (n ? jo(a.height) : a.height) / l;
        return (!u || !Number.isFinite(u)) && (u = 1),
        (!r || !Number.isFinite(r)) && (r = 1),
        {
            x: u,
            y: r
        }
    }
    var fI = $t(0);
    function Av(e) {
        let t = ot(e);
        return !_u() || !t.visualViewport ? fI : {
            x: t.visualViewport.offsetLeft,
            y: t.visualViewport.offsetTop
        }
    }
    function cI(e, t, a) {
        return t === void 0 && (t = !1),
        !a || t && a !== ot(e) ? !1 : t
    }
    function Ko(e, t, a, o) {
        t === void 0 && (t = !1),
        a === void 0 && (a = !1);
        let l = e.getBoundingClientRect()
          , n = $d(e)
          , u = $t(1);
        t && (o ? $e(o) && (u = en(o)) : u = en(e));
        let r = cI(n, a, o) ? Av(n) : $t(0)
          , s = (l.left + r.x) / u.x
          , i = (l.top + r.y) / u.y
          , f = l.width / u.x
          , g = l.height / u.y;
        if (n) {
            let m = ot(n)
              , c = o && $e(o) ? ot(o) : o
              , x = m
              , L = ri(x);
            for (; L && o && c !== x; ) {
                let S = en(L)
                  , h = L.getBoundingClientRect()
                  , d = ht(L)
                  , p = h.left + (L.clientLeft + parseFloat(d.paddingLeft)) * S.x
                  , v = h.top + (L.clientTop + parseFloat(d.paddingTop)) * S.y;
                s *= S.x,
                i *= S.y,
                f *= S.x,
                g *= S.y,
                s += p,
                i += v,
                x = ot(L),
                L = ri(x)
            }
        }
        return Yo({
            width: f,
            height: g,
            x: s,
            y: i
        })
    }
    function Vd(e, t) {
        let a = Fu(e).scrollLeft;
        return t ? t.left + a : Ko(Nt(e)).left + a
    }
    function Mv(e, t, a) {
        a === void 0 && (a = !1);
        let o = e.getBoundingClientRect()
          , l = o.left + t.scrollLeft - (a ? 0 : Vd(e, o))
          , n = o.top + t.scrollTop;
        return {
            x: l,
            y: n
        }
    }
    function dI(e) {
        let {elements: t, rect: a, offsetParent: o, strategy: l} = e
          , n = l === "fixed"
          , u = Nt(o)
          , r = t ? Pu(t.floating) : !1;
        if (o === u || r && n)
            return a;
        let s = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , i = $t(1)
          , f = $t(0)
          , g = Bt(o);
        if ((g || !g && !n) && ((mo(o) !== "body" || Ql(u)) && (s = Fu(o)),
        Bt(o))) {
            let c = Ko(o);
            i = en(o),
            f.x = c.x + o.clientLeft,
            f.y = c.y + o.clientTop
        }
        let m = u && !g && !n ? Mv(u, s, !0) : $t(0);
        return {
            width: a.width * i.x,
            height: a.height * i.y,
            x: a.x * i.x - s.scrollLeft * i.x + f.x + m.x,
            y: a.y * i.y - s.scrollTop * i.y + f.y + m.y
        }
    }
    function mI(e) {
        return Array.from(e.getClientRects())
    }
    function pI(e) {
        let t = Nt(e)
          , a = Fu(e)
          , o = e.ownerDocument.body
          , l = Me(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth)
          , n = Me(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight)
          , u = -a.scrollLeft + Vd(e)
          , r = -a.scrollTop;
        return ht(o).direction === "rtl" && (u += Me(t.clientWidth, o.clientWidth) - l),
        {
            width: l,
            height: n,
            x: u,
            y: r
        }
    }
    function gI(e, t) {
        let a = ot(e)
          , o = Nt(e)
          , l = a.visualViewport
          , n = o.clientWidth
          , u = o.clientHeight
          , r = 0
          , s = 0;
        if (l) {
            n = l.width,
            u = l.height;
            let i = _u();
            (!i || i && t === "fixed") && (r = l.offsetLeft,
            s = l.offsetTop)
        }
        return {
            width: n,
            height: u,
            x: r,
            y: s
        }
    }
    function hI(e, t) {
        let a = Ko(e, !0, t === "fixed")
          , o = a.top + e.clientTop
          , l = a.left + e.clientLeft
          , n = Bt(e) ? en(e) : $t(1)
          , u = e.clientWidth * n.x
          , r = e.clientHeight * n.y
          , s = l * n.x
          , i = o * n.y;
        return {
            width: u,
            height: r,
            x: s,
            y: i
        }
    }
    function Ev(e, t, a) {
        let o;
        if (t === "viewport")
            o = gI(e, a);
        else if (t === "document")
            o = pI(Nt(e));
        else if ($e(t))
            o = hI(t, a);
        else {
            let l = Av(e);
            o = {
                x: t.x - l.x,
                y: t.y - l.y,
                width: t.width,
                height: t.height
            }
        }
        return Yo(o)
    }
    function Dv(e, t) {
        let a = oa(e);
        return a === t || !$e(a) || po(a) ? !1 : ht(a).position === "fixed" || Dv(a, t)
    }
    function xI(e, t) {
        let a = t.get(e);
        if (a)
            return a;
        let o = Ma(e, [], !1).filter(r => $e(r) && mo(r) !== "body")
          , l = null
          , n = ht(e).position === "fixed"
          , u = n ? oa(e) : e;
        for (; $e(u) && !po(u); ) {
            let r = ht(u)
              , s = ui(u);
            !s && r.position === "fixed" && (l = null),
            (n ? !s && !l : !s && r.position === "static" && !!l && ["absolute", "fixed"].includes(l.position) || Ql(u) && !s && Dv(e, u)) ? o = o.filter(f => f !== u) : l = r,
            u = oa(u)
        }
        return t.set(e, o),
        o
    }
    function vI(e) {
        let {element: t, boundary: a, rootBoundary: o, strategy: l} = e
          , u = [...a === "clippingAncestors" ? Pu(t) ? [] : xI(t, this._c) : [].concat(a), o]
          , r = u[0]
          , s = u.reduce( (i, f) => {
            let g = Ev(t, f, l);
            return i.top = Me(g.top, i.top),
            i.right = la(g.right, i.right),
            i.bottom = la(g.bottom, i.bottom),
            i.left = Me(g.left, i.left),
            i
        }
        , Ev(t, r, l));
        return {
            width: s.right - s.left,
            height: s.bottom - s.top,
            x: s.left,
            y: s.top
        }
    }
    function LI(e) {
        let {width: t, height: a} = Ov(e);
        return {
            width: t,
            height: a
        }
    }
    function yI(e, t, a) {
        let o = Bt(t)
          , l = Nt(t)
          , n = a === "fixed"
          , u = Ko(e, !0, n, t)
          , r = {
            scrollLeft: 0,
            scrollTop: 0
        }
          , s = $t(0);
        if (o || !o && !n)
            if ((mo(t) !== "body" || Ql(l)) && (r = Fu(t)),
            o) {
                let m = Ko(t, !0, n, t);
                s.x = m.x + t.clientLeft,
                s.y = m.y + t.clientTop
            } else
                l && (s.x = Vd(l));
        let i = l && !o && !n ? Mv(l, r) : $t(0)
          , f = u.left + r.scrollLeft - s.x - i.x
          , g = u.top + r.scrollTop - s.y - i.y;
        return {
            x: f,
            y: g,
            width: u.width,
            height: u.height
        }
    }
    function Nd(e) {
        return ht(e).position === "static"
    }
    function Rv(e, t) {
        if (!Bt(e) || ht(e).position === "fixed")
            return null;
        if (t)
            return t(e);
        let a = e.offsetParent;
        return Nt(e) === a && (a = a.ownerDocument.body),
        a
    }
    function kv(e, t) {
        let a = ot(e);
        if (Pu(e))
            return a;
        if (!Bt(e)) {
            let l = oa(e);
            for (; l && !po(l); ) {
                if ($e(l) && !Nd(l))
                    return l;
                l = oa(l)
            }
            return a
        }
        let o = Rv(e, t);
        for (; o && mv(o) && Nd(o); )
            o = Rv(o, t);
        return o && po(o) && Nd(o) && !ui(o) ? a : o || pv(e) || a
    }
    var bI = async function(e) {
        let t = this.getOffsetParent || kv
          , a = this.getDimensions
          , o = await a(e.floating);
        return {
            reference: yI(e.reference, await t(e.floating), e.strategy),
            floating: {
                x: 0,
                y: 0,
                width: o.width,
                height: o.height
            }
        }
    };
    function SI(e) {
        return ht(e).direction === "rtl"
    }
    var Gd = {
        convertOffsetParentRelativeRectToViewportRelativeRect: dI,
        getDocumentElement: Nt,
        getClippingRect: vI,
        getOffsetParent: kv,
        getElementRects: bI,
        getClientRects: mI,
        getDimensions: LI,
        getScale: en,
        isElement: $e,
        isRTL: SI
    };
    function Bv(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
    }
    function CI(e, t) {
        let a = null, o, l = Nt(e);
        function n() {
            var r;
            clearTimeout(o),
            (r = a) == null || r.disconnect(),
            a = null
        }
        function u(r, s) {
            r === void 0 && (r = !1),
            s === void 0 && (s = 1),
            n();
            let i = e.getBoundingClientRect()
              , {left: f, top: g, width: m, height: c} = i;
            if (r || t(),
            !m || !c)
                return;
            let x = Zl(g)
              , L = Zl(l.clientWidth - (f + m))
              , S = Zl(l.clientHeight - (g + c))
              , h = Zl(f)
              , p = {
                rootMargin: -x + "px " + -L + "px " + -S + "px " + -h + "px",
                threshold: Me(0, la(1, s)) || 1
            }
              , v = !0;
            function y(I) {
                let b = I[0].intersectionRatio;
                if (b !== s) {
                    if (!v)
                        return u();
                    b ? u(!1, b) : o = setTimeout( () => {
                        u(!1, 1e-7)
                    }
                    , 1e3)
                }
                b === 1 && !Bv(i, e.getBoundingClientRect()) && u(),
                v = !1
            }
            try {
                a = new IntersectionObserver(y,{
                    ...p,
                    root: l.ownerDocument
                })
            } catch {
                a = new IntersectionObserver(y,p)
            }
            a.observe(e)
        }
        return u(!0),
        n
    }
    function ii(e, t, a, o) {
        o === void 0 && (o = {});
        let {ancestorScroll: l=!0, ancestorResize: n=!0, elementResize: u=typeof ResizeObserver == "function", layoutShift: r=typeof IntersectionObserver == "function", animationFrame: s=!1} = o
          , i = $d(e)
          , f = l || n ? [...i ? Ma(i) : [], ...Ma(t)] : [];
        f.forEach(h => {
            l && h.addEventListener("scroll", a, {
                passive: !0
            }),
            n && h.addEventListener("resize", a)
        }
        );
        let g = i && r ? CI(i, a) : null
          , m = -1
          , c = null;
        u && (c = new ResizeObserver(h => {
            let[d] = h;
            d && d.target === i && c && (c.unobserve(t),
            cancelAnimationFrame(m),
            m = requestAnimationFrame( () => {
                var p;
                (p = c) == null || p.observe(t)
            }
            )),
            a()
        }
        ),
        i && !s && c.observe(i),
        c.observe(t));
        let x, L = s ? Ko(e) : null;
        s && S();
        function S() {
            let h = Ko(e);
            L && !Bv(L, h) && a(),
            L = h,
            x = requestAnimationFrame(S)
        }
        return a(),
        () => {
            var h;
            f.forEach(d => {
                l && d.removeEventListener("scroll", a),
                n && d.removeEventListener("resize", a)
            }
            ),
            g?.(),
            (h = c) == null || h.disconnect(),
            c = null,
            s && cancelAnimationFrame(x)
        }
    }
    var tn = Hu
      , Pv = Iv;
    var _v = wv
      , Fv = Cv
      , Uv = Tv;
    var fi = (e, t, a) => {
        let o = new Map
          , l = {
            platform: Gd,
            ...a
        }
          , n = {
            ...l.platform,
            _c: o
        };
        return Sv(e, t, {
            ...l,
            platform: n
        })
    }
    ;
    var Ie = A(M(), 1)
      , mi = A(M(), 1)
      , qv = A(bo(), 1)
      , ci = typeof document < "u" ? mi.useLayoutEffect : mi.useEffect;
    function di(e, t) {
        if (e === t)
            return !0;
        if (typeof e != typeof t)
            return !1;
        if (typeof e == "function" && e.toString() === t.toString())
            return !0;
        let a, o, l;
        if (e && t && typeof e == "object") {
            if (Array.isArray(e)) {
                if (a = e.length,
                a !== t.length)
                    return !1;
                for (o = a; o-- !== 0; )
                    if (!di(e[o], t[o]))
                        return !1;
                return !0
            }
            if (l = Object.keys(e),
            a = l.length,
            a !== Object.keys(t).length)
                return !1;
            for (o = a; o-- !== 0; )
                if (!{}.hasOwnProperty.call(t, l[o]))
                    return !1;
            for (o = a; o-- !== 0; ) {
                let n = l[o];
                if (!(n === "_owner" && e.$$typeof) && !di(e[n], t[n]))
                    return !1
            }
            return !0
        }
        return e !== e && t !== t
    }
    function zv(e) {
        return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
    }
    function Hv(e, t) {
        let a = zv(e);
        return Math.round(t * a) / a
    }
    function Xd(e) {
        let t = Ie.useRef(e);
        return ci( () => {
            t.current = e
        }
        ),
        t
    }
    function Nv(e) {
        e === void 0 && (e = {});
        let {placement: t="bottom", strategy: a="absolute", middleware: o=[], platform: l, elements: {reference: n, floating: u}={}, transform: r=!0, whileElementsMounted: s, open: i} = e
          , [f,g] = Ie.useState({
            x: 0,
            y: 0,
            strategy: a,
            placement: t,
            middlewareData: {},
            isPositioned: !1
        })
          , [m,c] = Ie.useState(o);
        di(m, o) || c(o);
        let[x,L] = Ie.useState(null)
          , [S,h] = Ie.useState(null)
          , d = Ie.useCallback(_ => {
            _ !== I.current && (I.current = _,
            L(_))
        }
        , [])
          , p = Ie.useCallback(_ => {
            _ !== b.current && (b.current = _,
            h(_))
        }
        , [])
          , v = n || x
          , y = u || S
          , I = Ie.useRef(null)
          , b = Ie.useRef(null)
          , T = Ie.useRef(f)
          , R = s != null
          , w = Xd(s)
          , O = Xd(l)
          , z = Xd(i)
          , Y = Ie.useCallback( () => {
            if (!I.current || !b.current)
                return;
            let _ = {
                placement: t,
                strategy: a,
                middleware: m
            };
            O.current && (_.platform = O.current),
            fi(I.current, b.current, _).then(Q => {
                let ve = {
                    ...Q,
                    isPositioned: z.current !== !1
                };
                W.current && !di(T.current, ve) && (T.current = ve,
                qv.flushSync( () => {
                    g(ve)
                }
                ))
            }
            )
        }
        , [m, t, a, O, z]);
        ci( () => {
            i === !1 && T.current.isPositioned && (T.current.isPositioned = !1,
            g(_ => ({
                ..._,
                isPositioned: !1
            })))
        }
        , [i]);
        let W = Ie.useRef(!1);
        ci( () => (W.current = !0,
        () => {
            W.current = !1
        }
        ), []),
        ci( () => {
            if (v && (I.current = v),
            y && (b.current = y),
            v && y) {
                if (w.current)
                    return w.current(v, y, Y);
                Y()
            }
        }
        , [v, y, Y, w, R]);
        let F = Ie.useMemo( () => ({
            reference: I,
            floating: b,
            setReference: d,
            setFloating: p
        }), [d, p])
          , P = Ie.useMemo( () => ({
            reference: v,
            floating: y
        }), [v, y])
          , re = Ie.useMemo( () => {
            let _ = {
                position: a,
                left: 0,
                top: 0
            };
            if (!P.floating)
                return _;
            let Q = Hv(P.floating, f.x)
              , ve = Hv(P.floating, f.y);
            return r ? {
                ..._,
                transform: "translate(" + Q + "px, " + ve + "px)",
                ...zv(P.floating) >= 1.5 && {
                    willChange: "transform"
                }
            } : {
                position: a,
                left: Q,
                top: ve
            }
        }
        , [a, r, P.floating, f.x, f.y]);
        return Ie.useMemo( () => ({
            ...f,
            update: Y,
            refs: F,
            elements: P,
            floatingStyles: re
        }), [f, Y, F, P, re])
    }
    var qu = (e, t) => ({
        ...Pv(e),
        options: [e, t]
    })
      , jd = (e, t) => ({
        ..._v(e),
        options: [e, t]
    });
    var Yd = (e, t) => ({
        ...Fv(e),
        options: [e, t]
    })
      , Kd = (e, t) => ({
        ...Uv(e),
        options: [e, t]
    });
    var Yv = {
        ...k
    }
      , II = Yv.useInsertionEffect
      , wI = II || (e => e());
    function Kv(e) {
        let t = k.useRef( () => {}
        );
        return wI( () => {
            t.current = e
        }
        ),
        k.useCallback(function() {
            for (var a = arguments.length, o = new Array(a), l = 0; l < a; l++)
                o[l] = arguments[l];
            return t.current == null ? void 0 : t.current(...o)
        }, [])
    }
    var TI = "ArrowUp"
      , EI = "ArrowDown"
      , RI = "ArrowLeft"
      , OI = "ArrowRight";
    var Qd = typeof document < "u" ? Nu.useLayoutEffect : Nu.useEffect;
    var AI = [RI, OI]
      , MI = [TI, EI]
      , qA = [...AI, ...MI];
    var $v = !1
      , DI = 0
      , Vv = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + DI++;
    function kI() {
        let[e,t] = k.useState( () => $v ? Vv() : void 0);
        return Qd( () => {
            e == null && t(Vv())
        }
        , []),
        k.useEffect( () => {
            $v = !0
        }
        , []),
        e
    }
    var BI = Yv.useId
      , PI = BI || kI;
    function _I() {
        let e = new Map;
        return {
            emit(t, a) {
                var o;
                (o = e.get(t)) == null || o.forEach(l => l(a))
            },
            on(t, a) {
                e.set(t, [...e.get(t) || [], a])
            },
            off(t, a) {
                var o;
                e.set(t, ((o = e.get(t)) == null ? void 0 : o.filter(l => l !== a)) || [])
            }
        }
    }
    var FI = k.createContext(null)
      , UI = k.createContext(null)
      , HI = () => {
        var e;
        return ((e = k.useContext(FI)) == null ? void 0 : e.id) || null
    }
      , qI = () => k.useContext(UI);
    var zI = "data-floating-ui-focusable";
    function NI(e) {
        let {open: t=!1, onOpenChange: a, elements: o} = e
          , l = PI()
          , n = k.useRef({})
          , [u] = k.useState( () => _I())
          , r = HI() != null
          , [s,i] = k.useState(o.reference)
          , f = Kv( (c, x, L) => {
            n.current.openEvent = c ? x : void 0,
            u.emit("openchange", {
                open: c,
                event: x,
                reason: L,
                nested: r
            }),
            a?.(c, x, L)
        }
        )
          , g = k.useMemo( () => ({
            setPositionReference: i
        }), [])
          , m = k.useMemo( () => ({
            reference: s || o.reference || null,
            floating: o.floating || null,
            domReference: o.reference
        }), [s, o.reference, o.floating]);
        return k.useMemo( () => ({
            dataRef: n,
            open: t,
            onOpenChange: f,
            elements: m,
            events: u,
            floatingId: l,
            refs: g
        }), [t, f, m, u, l, g])
    }
    function Wv(e) {
        e === void 0 && (e = {});
        let {nodeId: t} = e
          , a = NI({
            ...e,
            elements: {
                reference: null,
                floating: null,
                ...e.elements
            }
        })
          , o = e.rootContext || a
          , l = o.elements
          , [n,u] = k.useState(null)
          , [r,s] = k.useState(null)
          , f = l?.domReference || n
          , g = k.useRef(null)
          , m = qI();
        Qd( () => {
            f && (g.current = f)
        }
        , [f]);
        let c = Nv({
            ...e,
            elements: {
                ...l,
                ...r && {
                    reference: r
                }
            }
        })
          , x = k.useCallback(p => {
            let v = $e(p) ? {
                getBoundingClientRect: () => p.getBoundingClientRect(),
                contextElement: p
            } : p;
            s(v),
            c.refs.setReference(v)
        }
        , [c.refs])
          , L = k.useCallback(p => {
            ($e(p) || p === null) && (g.current = p,
            u(p)),
            ($e(c.refs.reference.current) || c.refs.reference.current === null || p !== null && !$e(p)) && c.refs.setReference(p)
        }
        , [c.refs])
          , S = k.useMemo( () => ({
            ...c.refs,
            setReference: L,
            setPositionReference: x,
            domReference: g
        }), [c.refs, L, x])
          , h = k.useMemo( () => ({
            ...c.elements,
            domReference: f
        }), [c.elements, f])
          , d = k.useMemo( () => ({
            ...c,
            ...o,
            refs: S,
            elements: h,
            nodeId: t
        }), [c, S, h, t, o]);
        return Qd( () => {
            o.dataRef.current.floatingContext = d;
            let p = m?.nodesRef.current.find(v => v.id === t);
            p && (p.context = d)
        }
        ),
        k.useMemo( () => ({
            ...c,
            context: d,
            refs: S,
            elements: h
        }), [c, S, h, d])
    }
    var Gv = "active"
      , Xv = "selected";
    function Wd(e, t, a) {
        let o = new Map
          , l = a === "item"
          , n = e;
        if (l && e) {
            let {[Gv]: u, [Xv]: r, ...s} = e;
            n = s
        }
        return {
            ...a === "floating" && {
                tabIndex: -1,
                [zI]: ""
            },
            ...n,
            ...t.map(u => {
                let r = u ? u[a] : null;
                return typeof r == "function" ? e ? r(e) : null : r
            }
            ).concat(e).reduce( (u, r) => (r && Object.entries(r).forEach(s => {
                let[i,f] = s;
                if (!(l && [Gv, Xv].includes(i)))
                    if (i.indexOf("on") === 0) {
                        if (o.has(i) || o.set(i, []),
                        typeof f == "function") {
                            var g;
                            (g = o.get(i)) == null || g.push(f),
                            u[i] = function() {
                                for (var m, c = arguments.length, x = new Array(c), L = 0; L < c; L++)
                                    x[L] = arguments[L];
                                return (m = o.get(i)) == null ? void 0 : m.map(S => S(...x)).find(S => S !== void 0)
                            }
                        }
                    } else
                        u[i] = f
            }
            ),
            u), {})
        }
    }
    function Qv(e) {
        e === void 0 && (e = []);
        let t = e.map(r => r?.reference)
          , a = e.map(r => r?.floating)
          , o = e.map(r => r?.item)
          , l = k.useCallback(r => Wd(r, e, "reference"), t)
          , n = k.useCallback(r => Wd(r, e, "floating"), a)
          , u = k.useCallback(r => Wd(r, e, "item"), o);
        return k.useMemo( () => ({
            getReferenceProps: l,
            getFloatingProps: n,
            getItemProps: u
        }), [l, n, u])
    }
    function jv(e, t) {
        return {
            ...e,
            rects: {
                ...e.rects,
                floating: {
                    ...e.rects.floating,
                    height: t
                }
            }
        }
    }
    var Zv = e => ({
        name: "inner",
        options: e,
        async fn(t) {
            let {listRef: a, overflowRef: o, onFallbackChange: l, offset: n=0, index: u=0, minItemsVisible: r=4, referenceOverflowThreshold: s=0, scrollRef: i, ...f} = go(e, t)
              , {rects: g, elements: {floating: m}} = t
              , c = a.current[u]
              , x = i?.current || m
              , L = m.clientTop || x.clientTop
              , S = m.clientTop !== 0
              , h = x.clientTop !== 0
              , d = m === x;
            if (!c)
                return {};
            let p = {
                ...t,
                ...await qu(-c.offsetTop - m.clientTop - g.reference.height / 2 - c.offsetHeight / 2 - n).fn(t)
            }
              , v = await tn(jv(p, x.scrollHeight + L + m.clientTop), f)
              , y = await tn(p, {
                ...f,
                elementContext: "reference"
            })
              , I = Me(0, v.top)
              , b = p.y + I
              , w = (x.scrollHeight > x.clientHeight ? O => O : jo)(Me(0, x.scrollHeight + (S && d || h ? L * 2 : 0) - I - Me(0, v.bottom)));
            if (x.style.maxHeight = w + "px",
            x.scrollTop = I,
            l) {
                let O = x.offsetHeight < c.offsetHeight * la(r, a.current.length) - 1 || y.top >= -s || y.bottom >= -s;
                zu.flushSync( () => l(O))
            }
            return o && (o.current = await tn(jv({
                ...p,
                y: b
            }, x.offsetHeight + L + m.clientTop), f)),
            {
                y: b
            }
        }
    });
    function Jv(e, t) {
        let {open: a, elements: o} = e
          , {enabled: l=!0, overflowRef: n, scrollRef: u, onChange: r} = t
          , s = Kv(r)
          , i = k.useRef(!1)
          , f = k.useRef(null)
          , g = k.useRef(null);
        k.useEffect( () => {
            if (!l)
                return;
            function c(L) {
                if (L.ctrlKey || !x || n.current == null)
                    return;
                let S = L.deltaY
                  , h = n.current.top >= -.5
                  , d = n.current.bottom >= -.5
                  , p = x.scrollHeight - x.clientHeight
                  , v = S < 0 ? -1 : 1
                  , y = S < 0 ? "max" : "min";
                x.scrollHeight <= x.clientHeight || (!h && S > 0 || !d && S < 0 ? (L.preventDefault(),
                zu.flushSync( () => {
                    s(I => I + Math[y](S, p * v))
                }
                )) : /firefox/i.test(hv()) && (x.scrollTop += S))
            }
            let x = u?.current || o.floating;
            if (a && x)
                return x.addEventListener("wheel", c),
                requestAnimationFrame( () => {
                    f.current = x.scrollTop,
                    n.current != null && (g.current = {
                        ...n.current
                    })
                }
                ),
                () => {
                    f.current = null,
                    g.current = null,
                    x.removeEventListener("wheel", c)
                }
        }
        , [l, a, o.floating, n, u, s]);
        let m = k.useMemo( () => ({
            onKeyDown() {
                i.current = !0
            },
            onWheel() {
                i.current = !1
            },
            onPointerMove() {
                i.current = !1
            },
            onScroll() {
                let c = u?.current || o.floating;
                if (!(!n.current || !c || !i.current)) {
                    if (f.current !== null) {
                        let x = c.scrollTop - f.current;
                        (n.current.bottom < -.5 && x < -1 || n.current.top < -.5 && x > 1) && zu.flushSync( () => s(L => L + x))
                    }
                    requestAnimationFrame( () => {
                        f.current = c.scrollTop
                    }
                    )
                }
            }
        }), [o.floating, s, n, u]);
        return k.useMemo( () => l ? {
            floating: m
        } : {}, [l, m])
    }
    var Jd = A(M(), 1)
      , ce = A(M(), 1);
    var an = (0,
    ce.createContext)({
        styles: void 0,
        setReference: () => {}
        ,
        setFloating: () => {}
        ,
        getReferenceProps: () => ({}),
        getFloatingProps: () => ({}),
        slot: {}
    });
    an.displayName = "FloatingContext";
    var em = (0,
    ce.createContext)(null);
    em.displayName = "PlacementContext";
    function aL(e) {
        return (0,
        ce.useMemo)( () => e ? typeof e == "string" ? {
            to: e
        } : e : null, [e])
    }
    function oL() {
        return (0,
        ce.useContext)(an).setReference
    }
    function lL() {
        return (0,
        ce.useContext)(an).getReferenceProps
    }
    function nL() {
        let {getFloatingProps: e, slot: t} = (0,
        ce.useContext)(an);
        return (0,
        ce.useCallback)( (...a) => Object.assign({}, e(...a), {
            "data-anchor": t.anchor
        }), [e, t])
    }
    function uL(e=null) {
        e === !1 && (e = null),
        typeof e == "string" && (e = {
            to: e
        });
        let t = (0,
        ce.useContext)(em)
          , a = (0,
        ce.useMemo)( () => e, [JSON.stringify(e, (l, n) => {
            var u;
            return (u = n?.outerHTML) != null ? u : n
        }
        )]);
        K( () => {
            t?.(a ?? null)
        }
        , [t, a]);
        let o = (0,
        ce.useContext)(an);
        return (0,
        ce.useMemo)( () => [o.setFloating, e ? o.styles : {}], [o.setFloating, e, o.styles])
    }
    var eL = 4;
    function rL({children: e, enabled: t=!0}) {
        let[a,o] = (0,
        ce.useState)(null)
          , [l,n] = (0,
        ce.useState)(0)
          , u = (0,
        ce.useRef)(null)
          , [r,s] = (0,
        ce.useState)(null);
        $I(r);
        let i = t && a !== null && r !== null
          , {to: f="bottom", gap: g=0, offset: m=0, padding: c=0, inner: x} = VI(a, r)
          , [L,S="center"] = f.split(" ");
        K( () => {
            i && n(0)
        }
        , [i]);
        let {refs: h, floatingStyles: d, context: p} = Wv({
            open: i,
            placement: L === "selection" ? S === "center" ? "bottom" : `bottom-${S}` : S === "center" ? `${L}` : `${L}-${S}`,
            strategy: "absolute",
            transform: !1,
            middleware: [qu({
                mainAxis: L === "selection" ? 0 : g,
                crossAxis: m
            }), jd({
                padding: c
            }), L !== "selection" && Yd({
                padding: c
            }), L === "selection" && x ? Zv({
                ...x,
                padding: c,
                overflowRef: u,
                offset: l,
                minItemsVisible: eL,
                referenceOverflowThreshold: c,
                onFallbackChange(O) {
                    var z, Y;
                    if (!O)
                        return;
                    let W = p.elements.floating;
                    if (!W)
                        return;
                    let F = parseFloat(getComputedStyle(W).scrollPaddingBottom) || 0
                      , P = Math.min(eL, W.childElementCount)
                      , re = 0
                      , _ = 0;
                    for (let Q of (Y = (z = p.elements.floating) == null ? void 0 : z.childNodes) != null ? Y : [])
                        if (Q instanceof HTMLElement) {
                            let ve = Q.offsetTop
                              , se = ve + Q.clientHeight + F
                              , Ve = W.scrollTop
                              , U = Ve + W.clientHeight;
                            if (ve >= Ve && se <= U)
                                P--;
                            else {
                                _ = Math.max(0, Math.min(se, U) - Math.max(ve, Ve)),
                                re = Q.clientHeight;
                                break
                            }
                        }
                    P >= 1 && n(Q => {
                        let ve = re * P - _ + F;
                        return Q >= ve ? Q : ve
                    }
                    )
                }
            }) : null, Kd({
                padding: c,
                apply({availableWidth: O, availableHeight: z, elements: Y}) {
                    Object.assign(Y.floating.style, {
                        overflow: "auto",
                        maxWidth: `${O}px`,
                        maxHeight: `min(var(--anchor-max-height, 100vh), ${z}px)`
                    })
                }
            })].filter(Boolean),
            whileElementsMounted: ii
        })
          , [v=L,y=S] = p.placement.split("-");
        L === "selection" && (v = "selection");
        let I = (0,
        ce.useMemo)( () => ({
            anchor: [v, y].filter(Boolean).join(" ")
        }), [v, y])
          , b = Jv(p, {
            overflowRef: u,
            onChange: n
        })
          , {getReferenceProps: T, getFloatingProps: R} = Qv([b])
          , w = q(O => {
            s(O),
            h.setFloating(O)
        }
        );
        return Jd.createElement(em.Provider, {
            value: o
        }, Jd.createElement(an.Provider, {
            value: {
                setFloating: w,
                setReference: h.setReference,
                styles: d,
                getReferenceProps: T,
                getFloatingProps: R,
                slot: I
            }
        }, e))
    }
    function $I(e) {
        K( () => {
            if (!e)
                return;
            let t = new MutationObserver( () => {
                let a = window.getComputedStyle(e).maxHeight
                  , o = parseFloat(a);
                if (isNaN(o))
                    return;
                let l = parseInt(a);
                isNaN(l) || o !== l && (e.style.maxHeight = `${Math.ceil(o)}px`)
            }
            );
            return t.observe(e, {
                attributes: !0,
                attributeFilter: ["style"]
            }),
            () => {
                t.disconnect()
            }
        }
        , [e])
    }
    function VI(e, t) {
        var a, o, l;
        let n = Zd((a = e?.gap) != null ? a : "var(--anchor-gap, 0)", t)
          , u = Zd((o = e?.offset) != null ? o : "var(--anchor-offset, 0)", t)
          , r = Zd((l = e?.padding) != null ? l : "var(--anchor-padding, 0)", t);
        return {
            ...e,
            gap: n,
            offset: u,
            padding: r
        }
    }
    function Zd(e, t, a=void 0) {
        let o = zt()
          , l = q( (s, i) => {
            if (s == null)
                return [a, null];
            if (typeof s == "number")
                return [s, null];
            if (typeof s == "string") {
                if (!i)
                    return [a, null];
                let f = tL(s, i);
                return [f, g => {
                    let m = sL(s);
                    {
                        let c = m.map(x => window.getComputedStyle(i).getPropertyValue(x));
                        o.requestAnimationFrame(function x() {
                            o.nextFrame(x);
                            let L = !1;
                            for (let[h,d] of m.entries()) {
                                let p = window.getComputedStyle(i).getPropertyValue(d);
                                if (c[h] !== p) {
                                    c[h] = p,
                                    L = !0;
                                    break
                                }
                            }
                            if (!L)
                                return;
                            let S = tL(s, i);
                            f !== S && (g(S),
                            f = S)
                        })
                    }
                    return o.dispose
                }
                ]
            }
            return [a, null]
        }
        )
          , n = (0,
        ce.useMemo)( () => l(e, t)[0], [e, t])
          , [u=n,r] = (0,
        ce.useState)();
        return K( () => {
            let[s,i] = l(e, t);
            if (r(s),
            !!i)
                return i(r)
        }
        , [e, t]),
        u
    }
    function sL(e) {
        let t = /var\((.*)\)/.exec(e);
        if (t) {
            let a = t[1].indexOf(",");
            if (a === -1)
                return [t[1]];
            let o = t[1].slice(0, a).trim()
              , l = t[1].slice(a + 1).trim();
            return l ? [o, ...sL(l)] : [o]
        }
        return []
    }
    function tL(e, t) {
        let a = document.createElement("div");
        t.appendChild(a),
        a.style.setProperty("margin-top", "0px", "important"),
        a.style.setProperty("margin-top", e, "important");
        let o = parseFloat(window.getComputedStyle(a).marginTop) || 0;
        return t.removeChild(a),
        o
    }
    var tm = A(M(), 1);
    function iL(e, t) {
        let[a,o] = (0,
        tm.useState)(t);
        return !e && a !== t && o(t),
        e ? a : t
    }
    var on = A(M(), 1)
      , am = (0,
    on.createContext)(null);
    am.displayName = "OpenClosedContext";
    var ln = (e => (e[e.Open = 1] = "Open",
    e[e.Closed = 2] = "Closed",
    e[e.Closing = 4] = "Closing",
    e[e.Opening = 8] = "Opening",
    e))(ln || {});
    function fL() {
        return (0,
        on.useContext)(am)
    }
    function cL({value: e, children: t}) {
        return on.default.createElement(am.Provider, {
            value: e
        }, t)
    }
    function GI(e) {
        throw new Error("Unexpected object: " + e)
    }
    var we = (e => (e[e.First = 0] = "First",
    e[e.Previous = 1] = "Previous",
    e[e.Next = 2] = "Next",
    e[e.Last = 3] = "Last",
    e[e.Specific = 4] = "Specific",
    e[e.Nothing = 5] = "Nothing",
    e))(we || {});
    function pi(e, t) {
        let a = t.resolveItems();
        if (a.length <= 0)
            return null;
        let o = t.resolveActiveIndex()
          , l = o ?? -1;
        switch (e.focus) {
        case 0:
            {
                for (let n = 0; n < a.length; ++n)
                    if (!t.resolveDisabled(a[n], n, a))
                        return n;
                return o
            }
        case 1:
            {
                l === -1 && (l = a.length);
                for (let n = l - 1; n >= 0; --n)
                    if (!t.resolveDisabled(a[n], n, a))
                        return n;
                return o
            }
        case 2:
            {
                for (let n = l + 1; n < a.length; ++n)
                    if (!t.resolveDisabled(a[n], n, a))
                        return n;
                return o
            }
        case 3:
            {
                for (let n = a.length - 1; n >= 0; --n)
                    if (!t.resolveDisabled(a[n], n, a))
                        return n;
                return o
            }
        case 4:
            {
                for (let n = 0; n < a.length; ++n)
                    if (t.resolveId(a[n], n, a) === e.id)
                        return n;
                return o
            }
        case 5:
            return null;
        default:
            GI(e)
        }
    }
    var ye = A(M(), 1)
      , gL = A(bo(), 1);
    var gi = A(M(), 1);
    function dL(e) {
        let t = q(e)
          , a = (0,
        gi.useRef)(!1);
        (0,
        gi.useEffect)( () => (a.current = !1,
        () => {
            a.current = !0,
            $s( () => {
                a.current && t()
            }
            )
        }
        ), [t])
    }
    var Wo = A(M(), 1);
    function XI() {
        let e = typeof document > "u";
        return "useSyncExternalStore"in Wo ? (t => t.useSyncExternalStore)(Wo)( () => () => {}
        , () => !1, () => !e) : !1
    }
    function mL() {
        let e = XI()
          , [t,a] = Wo.useState(qt.isHandoffComplete);
        return t && qt.isHandoffComplete === !1 && a(!1),
        Wo.useEffect( () => {
            t !== !0 && a(!0)
        }
        , [t]),
        Wo.useEffect( () => qt.handoff(), []),
        e ? !1 : t
    }
    var $u = A(M(), 1)
      , jI = (0,
    $u.createContext)(!1);
    function pL() {
        return (0,
        $u.useContext)(jI)
    }
    function YI(e) {
        let t = pL()
          , a = (0,
        ye.useContext)(xL)
          , o = ku(e)
          , [l,n] = (0,
        ye.useState)( () => {
            var u;
            if (!t && a !== null)
                return (u = a.current) != null ? u : null;
            if (qt.isServer)
                return null;
            let r = o?.getElementById("headlessui-portal-root");
            if (r)
                return r;
            if (o === null)
                return null;
            let s = o.createElement("div");
            return s.setAttribute("id", "headlessui-portal-root"),
            o.body.appendChild(s)
        }
        );
        return (0,
        ye.useEffect)( () => {
            l !== null && (o != null && o.body.contains(l) || o == null || o.body.appendChild(l))
        }
        , [l, o]),
        (0,
        ye.useEffect)( () => {
            t || a !== null && n(a.current)
        }
        , [a, n, t]),
        l
    }
    var hL = ye.Fragment
      , KI = We(function(e, t) {
        let a = e
          , o = (0,
        ye.useRef)(null)
          , l = rt(w0(g => {
            o.current = g
        }
        ), t)
          , n = ku(o)
          , u = YI(o)
          , [r] = (0,
        ye.useState)( () => {
            var g;
            return qt.isServer ? null : (g = n?.createElement("div")) != null ? g : null
        }
        )
          , s = (0,
        ye.useContext)(JI)
          , i = mL();
        K( () => {
            !u || !r || u.contains(r) || (r.setAttribute("data-headlessui-portal", ""),
            u.appendChild(r))
        }
        , [u, r]),
        K( () => {
            if (r && s)
                return s.register(r)
        }
        , [s, r]),
        dL( () => {
            var g;
            !u || !r || (r instanceof Node && u.contains(r) && u.removeChild(r),
            u.childNodes.length <= 0 && ((g = u.parentElement) == null || g.removeChild(u)))
        }
        );
        let f = Ke();
        return i ? !u || !r ? null : (0,
        gL.createPortal)(f({
            ourProps: {
                ref: l
            },
            theirProps: a,
            slot: {},
            defaultTag: hL,
            name: "Portal"
        }), r) : null
    });
    function WI(e, t) {
        let a = rt(t)
          , {enabled: o=!0, ...l} = e
          , n = Ke();
        return o ? ye.default.createElement(KI, {
            ...l,
            ref: a
        }) : n({
            ourProps: {
                ref: a
            },
            theirProps: l,
            slot: {},
            defaultTag: hL,
            name: "Portal"
        })
    }
    var QI = ye.Fragment
      , xL = (0,
    ye.createContext)(null);
    function ZI(e, t) {
        let {target: a, ...o} = e
          , l = {
            ref: rt(t)
        }
          , n = Ke();
        return ye.default.createElement(xL.Provider, {
            value: a
        }, n({
            ourProps: l,
            theirProps: o,
            defaultTag: QI,
            name: "Popover.Group"
        }))
    }
    var JI = (0,
    ye.createContext)(null);
    var ew = We(WI)
      , tw = We(ZI)
      , vL = Object.assign(ew, {
        Group: tw
    });
    var D = A(M(), 1)
      , xo = A(bo(), 1);
    var LL = A(M(), 1);
    function yL(e, t) {
        let a = (0,
        LL.useRef)({
            left: 0,
            top: 0
        });
        if (K( () => {
            if (!t)
                return;
            let l = t.getBoundingClientRect();
            l && (a.current = l)
        }
        , [e, t]),
        t == null || !e || t === document.activeElement)
            return !1;
        let o = t.getBoundingClientRect();
        return o.top !== a.current.top || o.left !== a.current.left
    }
    var om = A(M(), 1);
    var bL = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;
    function SL(e) {
        var t, a;
        let o = (t = e.innerText) != null ? t : ""
          , l = e.cloneNode(!0);
        if (!(l instanceof HTMLElement))
            return o;
        let n = !1;
        for (let r of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))
            r.remove(),
            n = !0;
        let u = n ? (a = l.innerText) != null ? a : "" : o;
        return bL.test(u) && (u = u.replace(bL, "")),
        u
    }
    function CL(e) {
        let t = e.getAttribute("aria-label");
        if (typeof t == "string")
            return t.trim();
        let a = e.getAttribute("aria-labelledby");
        if (a) {
            let o = a.split(" ").map(l => {
                let n = document.getElementById(l);
                if (n) {
                    let u = n.getAttribute("aria-label");
                    return typeof u == "string" ? u.trim() : SL(n).trim()
                }
                return null
            }
            ).filter(Boolean);
            if (o.length > 0)
                return o.join(", ")
        }
        return SL(e).trim()
    }
    function IL(e) {
        let t = (0,
        om.useRef)("")
          , a = (0,
        om.useRef)("");
        return q( () => {
            let o = e.current;
            if (!o)
                return "";
            let l = o.innerText;
            if (t.current === l)
                return a.current;
            let n = CL(o).trim().toLowerCase();
            return t.current = l,
            a.current = n,
            n
        }
        )
    }
    var aw = (e => (e[e.Open = 0] = "Open",
    e[e.Closed = 1] = "Closed",
    e))(aw || {})
      , ow = (e => (e[e.Single = 0] = "Single",
    e[e.Multi = 1] = "Multi",
    e))(ow || {})
      , lw = (e => (e[e.Pointer = 0] = "Pointer",
    e[e.Other = 1] = "Other",
    e))(lw || {})
      , nw = (e => (e[e.OpenListbox = 0] = "OpenListbox",
    e[e.CloseListbox = 1] = "CloseListbox",
    e[e.GoToOption = 2] = "GoToOption",
    e[e.Search = 3] = "Search",
    e[e.ClearSearch = 4] = "ClearSearch",
    e[e.RegisterOption = 5] = "RegisterOption",
    e[e.UnregisterOption = 6] = "UnregisterOption",
    e[e.SetButtonElement = 7] = "SetButtonElement",
    e[e.SetOptionsElement = 8] = "SetOptionsElement",
    e))(nw || {});
    function lm(e, t=a => a) {
        let a = e.activeOptionIndex !== null ? e.options[e.activeOptionIndex] : null
          , o = _d(t(e.options.slice()), n => n.dataRef.current.domRef.current)
          , l = a ? o.indexOf(a) : null;
        return l === -1 && (l = null),
        {
            options: o,
            activeOptionIndex: l
        }
    }
    var uw = {
        1(e) {
            return e.dataRef.current.disabled || e.listboxState === 1 ? e : {
                ...e,
                activeOptionIndex: null,
                listboxState: 1,
                __demoMode: !1
            }
        },
        0(e) {
            if (e.dataRef.current.disabled || e.listboxState === 0)
                return e;
            let t = e.activeOptionIndex
              , {isSelected: a} = e.dataRef.current
              , o = e.options.findIndex(l => a(l.dataRef.current.value));
            return o !== -1 && (t = o),
            {
                ...e,
                listboxState: 0,
                activeOptionIndex: t,
                __demoMode: !1
            }
        },
        2(e, t) {
            var a, o, l, n, u;
            if (e.dataRef.current.disabled || e.listboxState === 1)
                return e;
            let r = {
                ...e,
                searchQuery: "",
                activationTrigger: (a = t.trigger) != null ? a : 1,
                __demoMode: !1
            };
            if (t.focus === we.Nothing)
                return {
                    ...r,
                    activeOptionIndex: null
                };
            if (t.focus === we.Specific)
                return {
                    ...r,
                    activeOptionIndex: e.options.findIndex(f => f.id === t.id)
                };
            if (t.focus === we.Previous) {
                let f = e.activeOptionIndex;
                if (f !== null) {
                    let g = e.options[f].dataRef.current.domRef
                      , m = pi(t, {
                        resolveItems: () => e.options,
                        resolveActiveIndex: () => e.activeOptionIndex,
                        resolveId: c => c.id,
                        resolveDisabled: c => c.dataRef.current.disabled
                    });
                    if (m !== null) {
                        let c = e.options[m].dataRef.current.domRef;
                        if (((o = g.current) == null ? void 0 : o.previousElementSibling) === c.current || ((l = c.current) == null ? void 0 : l.previousElementSibling) === null)
                            return {
                                ...r,
                                activeOptionIndex: m
                            }
                    }
                }
            } else if (t.focus === we.Next) {
                let f = e.activeOptionIndex;
                if (f !== null) {
                    let g = e.options[f].dataRef.current.domRef
                      , m = pi(t, {
                        resolveItems: () => e.options,
                        resolveActiveIndex: () => e.activeOptionIndex,
                        resolveId: c => c.id,
                        resolveDisabled: c => c.dataRef.current.disabled
                    });
                    if (m !== null) {
                        let c = e.options[m].dataRef.current.domRef;
                        if (((n = g.current) == null ? void 0 : n.nextElementSibling) === c.current || ((u = c.current) == null ? void 0 : u.nextElementSibling) === null)
                            return {
                                ...r,
                                activeOptionIndex: m
                            }
                    }
                }
            }
            let s = lm(e)
              , i = pi(t, {
                resolveItems: () => s.options,
                resolveActiveIndex: () => s.activeOptionIndex,
                resolveId: f => f.id,
                resolveDisabled: f => f.dataRef.current.disabled
            });
            return {
                ...r,
                ...s,
                activeOptionIndex: i
            }
        },
        3: (e, t) => {
            if (e.dataRef.current.disabled || e.listboxState === 1)
                return e;
            let a = e.searchQuery !== "" ? 0 : 1
              , o = e.searchQuery + t.value.toLowerCase()
              , l = (e.activeOptionIndex !== null ? e.options.slice(e.activeOptionIndex + a).concat(e.options.slice(0, e.activeOptionIndex + a)) : e.options).find(u => {
                var r;
                return !u.dataRef.current.disabled && ((r = u.dataRef.current.textValue) == null ? void 0 : r.startsWith(o))
            }
            )
              , n = l ? e.options.indexOf(l) : -1;
            return n === -1 || n === e.activeOptionIndex ? {
                ...e,
                searchQuery: o
            } : {
                ...e,
                searchQuery: o,
                activeOptionIndex: n,
                activationTrigger: 1
            }
        }
        ,
        4(e) {
            return e.dataRef.current.disabled || e.listboxState === 1 || e.searchQuery === "" ? e : {
                ...e,
                searchQuery: ""
            }
        },
        5: (e, t) => {
            let a = {
                id: t.id,
                dataRef: t.dataRef
            }
              , o = lm(e, l => [...l, a]);
            return e.activeOptionIndex === null && e.dataRef.current.isSelected(t.dataRef.current.value) && (o.activeOptionIndex = o.options.indexOf(a)),
            {
                ...e,
                ...o
            }
        }
        ,
        6: (e, t) => {
            let a = lm(e, o => {
                let l = o.findIndex(n => n.id === t.id);
                return l !== -1 && o.splice(l, 1),
                o
            }
            );
            return {
                ...e,
                ...a,
                activationTrigger: 1
            }
        }
        ,
        7: (e, t) => e.buttonElement === t.element ? e : {
            ...e,
            buttonElement: t.element
        },
        8: (e, t) => e.optionsElement === t.element ? e : {
            ...e,
            optionsElement: t.element
        }
    }
      , nm = (0,
    D.createContext)(null);
    nm.displayName = "ListboxActionsContext";
    function hi(e) {
        let t = (0,
        D.useContext)(nm);
        if (t === null) {
            let a = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(a, hi),
            a
        }
        return t
    }
    var xi = (0,
    D.createContext)(null);
    xi.displayName = "ListboxDataContext";
    function Vu(e) {
        let t = (0,
        D.useContext)(xi);
        if (t === null) {
            let a = new Error(`<${e} /> is missing a parent <Listbox /> component.`);
            throw Error.captureStackTrace && Error.captureStackTrace(a, Vu),
            a
        }
        return t
    }
    function rw(e, t) {
        return kt(t.type, uw, e, t)
    }
    var sw = D.Fragment;
    function iw(e, t) {
        var a;
        let o = jl()
          , {value: l, defaultValue: n, form: u, name: r, onChange: s, by: i, invalid: f=!1, disabled: g=o || !1, horizontal: m=!1, multiple: c=!1, __demoMode: x=!1, ...L} = e
          , S = m ? "horizontal" : "vertical"
          , h = rt(t)
          , d = x0(n)
          , [p=c ? [] : void 0,v] = g0(l, s, d)
          , [y,I] = (0,
        D.useReducer)(rw, {
            dataRef: (0,
            D.createRef)(),
            listboxState: x ? 0 : 1,
            options: [],
            searchQuery: "",
            activeOptionIndex: null,
            activationTrigger: 1,
            optionsVisible: !1,
            buttonElement: null,
            optionsElement: null,
            __demoMode: x
        })
          , b = (0,
        D.useRef)({
            static: !1,
            hold: !1
        })
          , T = (0,
        D.useRef)(new Map)
          , R = D0(i)
          , w = (0,
        D.useCallback)(ie => kt(O.mode, {
            1: () => p.some(He => R(He, ie)),
            0: () => R(p, ie)
        }), [p])
          , O = (0,
        D.useMemo)( () => ({
            ...y,
            value: p,
            disabled: g,
            invalid: f,
            mode: c ? 1 : 0,
            orientation: S,
            compare: R,
            isSelected: w,
            optionsPropsRef: b,
            listRef: T
        }), [p, g, f, c, y, T]);
        K( () => {
            y.dataRef.current = O
        }
        , [O]);
        let z = O.listboxState === 0;
        Y0(z, [O.buttonElement, O.optionsElement], (ie, He) => {
            var Vt;
            I({
                type: 1
            }),
            li(He, Mu.Loose) || (ie.preventDefault(),
            (Vt = O.buttonElement) == null || Vt.focus())
        }
        );
        let Y = (0,
        D.useMemo)( () => ({
            open: O.listboxState === 0,
            disabled: g,
            invalid: f,
            value: p
        }), [O, g, p, f])
          , W = q(ie => {
            let He = O.options.find(Vt => Vt.id === ie);
            He && se(He.dataRef.current.value)
        }
        )
          , F = q( () => {
            if (O.activeOptionIndex !== null) {
                let {dataRef: ie, id: He} = O.options[O.activeOptionIndex];
                se(ie.current.value),
                I({
                    type: 2,
                    focus: we.Specific,
                    id: He
                })
            }
        }
        )
          , P = q( () => I({
            type: 0
        }))
          , re = q( () => I({
            type: 1
        }))
          , _ = zt()
          , Q = q( (ie, He, Vt) => {
            _.dispose(),
            _.microTask( () => ie === we.Specific ? I({
                type: 2,
                focus: we.Specific,
                id: He,
                trigger: Vt
            }) : I({
                type: 2,
                focus: ie,
                trigger: Vt
            }))
        }
        )
          , ve = q( (ie, He) => (I({
            type: 5,
            id: ie,
            dataRef: He
        }),
        () => I({
            type: 6,
            id: ie
        })))
          , se = q(ie => kt(O.mode, {
            0() {
                return v?.(ie)
            },
            1() {
                let He = O.value.slice()
                  , Vt = He.findIndex(yy => R(yy, ie));
                return Vt === -1 ? He.push(ie) : He.splice(Vt, 1),
                v?.(He)
            }
        }))
          , Ve = q(ie => I({
            type: 3,
            value: ie
        }))
          , U = q( () => I({
            type: 4
        }))
          , De = q(ie => {
            I({
                type: 7,
                element: ie
            })
        }
        )
          , Zo = q(ie => {
            I({
                type: 8,
                element: ie
            })
        }
        )
          , Ti = (0,
        D.useMemo)( () => ({
            onChange: se,
            registerOption: ve,
            goToOption: Q,
            closeListbox: re,
            openListbox: P,
            selectActiveOption: F,
            selectOption: W,
            search: Ve,
            clearSearch: U,
            setButtonElement: De,
            setOptionsElement: Zo
        }), [])
          , [gy,hy] = O0({
            inherit: !0
        })
          , xy = {
            ref: h
        }
          , vy = (0,
        D.useCallback)( () => {
            if (d !== void 0)
                return v?.(d)
        }
        , [v, d])
          , Ly = Ke();
        return D.default.createElement(hy, {
            value: gy,
            props: {
                htmlFor: (a = O.buttonElement) == null ? void 0 : a.id
            },
            slot: {
                open: O.listboxState === 0,
                disabled: g
            }
        }, D.default.createElement(rL, null, D.default.createElement(nm.Provider, {
            value: Ti
        }, D.default.createElement(xi.Provider, {
            value: O
        }, D.default.createElement(cL, {
            value: kt(O.listboxState, {
                0: ln.Open,
                1: ln.Closed
            })
        }, r != null && p != null && D.default.createElement(S0, {
            disabled: g,
            data: {
                [r]: p
            },
            form: u,
            onReset: vy
        }), Ly({
            ourProps: xy,
            theirProps: L,
            slot: Y,
            defaultTag: sw,
            name: "Listbox"
        }))))))
    }
    var fw = "button";
    function cw(e, t) {
        var a;
        let o = Vu("Listbox.Button")
          , l = hi("Listbox.Button")
          , n = (0,
        Oa.useId)()
          , u = Ws()
          , {id: r=u || `headlessui-listbox-button-${n}`, disabled: s=o.disabled || !1, autoFocus: i=!1, ...f} = e
          , g = rt(t, oL(), l.setButtonElement)
          , m = lL()
          , c = q(O => {
            switch (O.key) {
            case Ae.Enter:
                y0(O.currentTarget);
                break;
            case Ae.Space:
            case Ae.ArrowDown:
                O.preventDefault(),
                (0,
                xo.flushSync)( () => l.openListbox()),
                o.value || l.goToOption(we.First);
                break;
            case Ae.ArrowUp:
                O.preventDefault(),
                (0,
                xo.flushSync)( () => l.openListbox()),
                o.value || l.goToOption(we.Last);
                break
            }
        }
        )
          , x = q(O => {
            switch (O.key) {
            case Ae.Space:
                O.preventDefault();
                break
            }
        }
        )
          , L = q(O => {
            var z;
            if (C0(O.currentTarget))
                return O.preventDefault();
            o.listboxState === 0 ? ((0,
            xo.flushSync)( () => l.closeListbox()),
            (z = o.buttonElement) == null || z.focus({
                preventScroll: !0
            })) : (O.preventDefault(),
            l.openListbox())
        }
        )
          , S = q(O => O.preventDefault())
          , h = kd([r])
          , d = E0()
          , {isFocusVisible: p, focusProps: v} = Id({
            autoFocus: i
        })
          , {isHovered: y, hoverProps: I} = Cd({
            isDisabled: s
        })
          , {pressed: b, pressProps: T} = m0({
            disabled: s
        })
          , R = (0,
        D.useMemo)( () => ({
            open: o.listboxState === 0,
            active: b || o.listboxState === 0,
            disabled: s,
            invalid: o.invalid,
            value: o.value,
            hover: y,
            focus: p,
            autofocus: i
        }), [o.listboxState, o.value, s, y, p, b, o.invalid, i])
          , w = Od(m(), {
            ref: g,
            id: r,
            type: Q0(e, o.buttonElement),
            "aria-haspopup": "listbox",
            "aria-controls": (a = o.optionsElement) == null ? void 0 : a.id,
            "aria-expanded": o.listboxState === 0,
            "aria-labelledby": h,
            "aria-describedby": d,
            disabled: s || void 0,
            autoFocus: i,
            onKeyDown: c,
            onKeyUp: x,
            onKeyPress: S,
            onClick: L
        }, v, I, T);
        return Ke()({
            ourProps: w,
            theirProps: f,
            slot: R,
            defaultTag: fw,
            name: "Listbox.Button"
        })
    }
    var wL = (0,
    D.createContext)(!1)
      , dw = "div"
      , mw = Ys.RenderStrategy | Ys.Static;
    function pw(e, t) {
        var a, o;
        let l = (0,
        Oa.useId)()
          , {id: n=`headlessui-listbox-options-${l}`, anchor: u, portal: r=!1, modal: s=!0, transition: i=!1, ...f} = e
          , g = aL(u)
          , [m,c] = (0,
        D.useState)(null);
        g && (r = !0);
        let x = Vu("Listbox.Options")
          , L = hi("Listbox.Options")
          , S = ku(x.optionsElement)
          , h = fL()
          , [d,p] = fv(i, m, h !== null ? (h & ln.Open) === ln.Open : x.listboxState === 0);
        q0(d, x.buttonElement, L.closeListbox);
        let v = x.__demoMode ? !1 : s && x.listboxState === 0;
        av(v, S);
        let y = x.__demoMode ? !1 : s && x.listboxState === 0;
        U0(y, {
            allowed: (0,
            D.useCallback)( () => [x.buttonElement, x.optionsElement], [x.buttonElement, x.optionsElement])
        });
        let I = x.listboxState !== 0
          , b = yL(I, x.buttonElement) ? !1 : d
          , T = d && x.listboxState === 1
          , R = iL(T, x.value)
          , w = q(U => x.compare(R, U))
          , O = (0,
        D.useMemo)( () => {
            var U;
            if (g == null || !((U = g?.to) != null && U.includes("selection")))
                return null;
            let De = x.options.findIndex(Zo => w(Zo.dataRef.current.value));
            return De === -1 && (De = 0),
            De
        }
        , [g, x.options])
          , z = ( () => {
            if (g == null)
                return;
            if (O === null)
                return {
                    ...g,
                    inner: void 0
                };
            let U = Array.from(x.listRef.current.values());
            return {
                ...g,
                inner: {
                    listRef: {
                        current: U
                    },
                    index: O
                }
            }
        }
        )()
          , [Y,W] = uL(z)
          , F = nL()
          , P = rt(t, g ? Y : null, L.setOptionsElement, c)
          , re = zt();
        (0,
        D.useEffect)( () => {
            var U;
            let De = x.optionsElement;
            De && x.listboxState === 0 && De !== ((U = aa(De)) == null ? void 0 : U.activeElement) && De?.focus({
                preventScroll: !0
            })
        }
        , [x.listboxState, x.optionsElement]);
        let _ = q(U => {
            var De, Zo;
            switch (re.dispose(),
            U.key) {
            case Ae.Space:
                if (x.searchQuery !== "")
                    return U.preventDefault(),
                    U.stopPropagation(),
                    L.search(U.key);
            case Ae.Enter:
                if (U.preventDefault(),
                U.stopPropagation(),
                x.activeOptionIndex !== null) {
                    let {dataRef: Ti} = x.options[x.activeOptionIndex];
                    L.onChange(Ti.current.value)
                }
                x.mode === 0 && ((0,
                xo.flushSync)( () => L.closeListbox()),
                (De = x.buttonElement) == null || De.focus({
                    preventScroll: !0
                }));
                break;
            case kt(x.orientation, {
                vertical: Ae.ArrowDown,
                horizontal: Ae.ArrowRight
            }):
                return U.preventDefault(),
                U.stopPropagation(),
                L.goToOption(we.Next);
            case kt(x.orientation, {
                vertical: Ae.ArrowUp,
                horizontal: Ae.ArrowLeft
            }):
                return U.preventDefault(),
                U.stopPropagation(),
                L.goToOption(we.Previous);
            case Ae.Home:
            case Ae.PageUp:
                return U.preventDefault(),
                U.stopPropagation(),
                L.goToOption(we.First);
            case Ae.End:
            case Ae.PageDown:
                return U.preventDefault(),
                U.stopPropagation(),
                L.goToOption(we.Last);
            case Ae.Escape:
                U.preventDefault(),
                U.stopPropagation(),
                (0,
                xo.flushSync)( () => L.closeListbox()),
                (Zo = x.buttonElement) == null || Zo.focus({
                    preventScroll: !0
                });
                return;
            case Ae.Tab:
                U.preventDefault(),
                U.stopPropagation(),
                (0,
                xo.flushSync)( () => L.closeListbox()),
                N0(x.buttonElement, U.shiftKey ? oi.Previous : oi.Next);
                break;
            default:
                U.key.length === 1 && (L.search(U.key),
                re.setTimeout( () => L.clearSearch(), 350));
                break
            }
        }
        )
          , Q = (a = x.buttonElement) == null ? void 0 : a.id
          , ve = (0,
        D.useMemo)( () => ({
            open: x.listboxState === 0
        }), [x.listboxState])
          , se = Od(g ? F() : {}, {
            id: n,
            ref: P,
            "aria-activedescendant": x.activeOptionIndex === null || (o = x.options[x.activeOptionIndex]) == null ? void 0 : o.id,
            "aria-multiselectable": x.mode === 1 ? !0 : void 0,
            "aria-labelledby": Q,
            "aria-orientation": x.orientation,
            onKeyDown: _,
            role: "listbox",
            tabIndex: x.listboxState === 0 ? 0 : void 0,
            style: {
                ...f.style,
                ...W,
                "--button-width": k0(x.buttonElement, !0).width
            },
            ...iv(p)
        })
          , Ve = Ke();
        return D.default.createElement(vL, {
            enabled: r ? e.static || d : !1
        }, D.default.createElement(xi.Provider, {
            value: x.mode === 1 ? x : {
                ...x,
                isSelected: w
            }
        }, Ve({
            ourProps: se,
            theirProps: f,
            slot: ve,
            defaultTag: dw,
            features: mw,
            visible: b,
            name: "Listbox.Options"
        })))
    }
    var gw = "div";
    function hw(e, t) {
        let a = (0,
        Oa.useId)()
          , {id: o=`headlessui-listbox-option-${a}`, disabled: l=!1, value: n, ...u} = e
          , r = (0,
        D.useContext)(wL) === !0
          , s = Vu("Listbox.Option")
          , i = hi("Listbox.Option")
          , f = s.activeOptionIndex !== null ? s.options[s.activeOptionIndex].id === o : !1
          , g = s.isSelected(n)
          , m = (0,
        D.useRef)(null)
          , c = IL(m)
          , x = Dt({
            disabled: l,
            value: n,
            domRef: m,
            get textValue() {
                return c()
            }
        })
          , L = rt(t, m, R => {
            R ? s.listRef.current.set(o, R) : s.listRef.current.delete(o)
        }
        );
        K( () => {
            if (!s.__demoMode && s.listboxState === 0 && f && s.activationTrigger !== 0)
                return Ye().requestAnimationFrame( () => {
                    var R, w;
                    (w = (R = m.current) == null ? void 0 : R.scrollIntoView) == null || w.call(R, {
                        block: "nearest"
                    })
                }
                )
        }
        , [m, f, s.__demoMode, s.listboxState, s.activationTrigger, s.activeOptionIndex]),
        K( () => {
            if (!r)
                return i.registerOption(o, x)
        }
        , [x, o, r]);
        let S = q(R => {
            var w;
            if (l)
                return R.preventDefault();
            i.onChange(n),
            s.mode === 0 && ((0,
            xo.flushSync)( () => i.closeListbox()),
            (w = s.buttonElement) == null || w.focus({
                preventScroll: !0
            }))
        }
        )
          , h = q( () => {
            if (l)
                return i.goToOption(we.Nothing);
            i.goToOption(we.Specific, o)
        }
        )
          , d = nv()
          , p = q(R => {
            d.update(R),
            !l && (f || i.goToOption(we.Specific, o, 0))
        }
        )
          , v = q(R => {
            d.wasMoved(R) && (l || f || i.goToOption(we.Specific, o, 0))
        }
        )
          , y = q(R => {
            d.wasMoved(R) && (l || f && i.goToOption(we.Nothing))
        }
        )
          , I = (0,
        D.useMemo)( () => ({
            active: f,
            focus: f,
            selected: g,
            disabled: l,
            selectedOption: g && r
        }), [f, g, l, r])
          , b = r ? {} : {
            id: o,
            ref: L,
            role: "option",
            tabIndex: l === !0 ? void 0 : -1,
            "aria-disabled": l === !0 ? !0 : void 0,
            "aria-selected": g,
            disabled: void 0,
            onClick: S,
            onFocus: h,
            onPointerEnter: p,
            onMouseEnter: p,
            onPointerMove: v,
            onMouseMove: v,
            onPointerLeave: y,
            onMouseLeave: y
        }
          , T = Ke();
        return !g && r ? null : T({
            ourProps: b,
            theirProps: u,
            slot: I,
            defaultTag: gw,
            name: "Listbox.Option"
        })
    }
    var xw = D.Fragment;
    function vw(e, t) {
        let {options: a, placeholder: o, ...l} = e
          , n = {
            ref: rt(t)
        }
          , u = Vu("ListboxSelectedOption")
          , r = (0,
        D.useMemo)( () => ({}), [])
          , s = u.value === void 0 || u.value === null || u.mode === 1 && Array.isArray(u.value) && u.value.length === 0
          , i = Ke();
        return D.default.createElement(wL.Provider, {
            value: !0
        }, i({
            ourProps: n,
            theirProps: {
                ...l,
                children: D.default.createElement(D.default.Fragment, null, o && s ? o : a)
            },
            slot: r,
            defaultTag: xw,
            name: "ListboxSelectedOption"
        }))
    }
    var Lw = We(iw)
      , um = We(cw)
      , yw = A0
      , rm = We(pw)
      , sm = We(hw)
      , bw = We(vw)
      , TL = Object.assign(Lw, {
        Button: um,
        Label: yw,
        Options: rm,
        Option: sm,
        SelectedOption: bw
    });
    var EL = async (e, t) => {
        let o = await fetch("/api/obfuscate", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                script: e,
                options: t
            })
        });
        if (!o.ok)
            throw o.status === 406 ? new Error(await o.text()) : new Error(o.statusText + ": " + await o.text());
        return o.text()
    }
    ;
    function Sw(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a,
        e
    }
    function RL(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(l) {
                return Object.getOwnPropertyDescriptor(e, l).enumerable
            })),
            a.push.apply(a, o)
        }
        return a
    }
    function im(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t] != null ? arguments[t] : {};
            t % 2 ? RL(Object(a), !0).forEach(function(o) {
                Sw(e, o, a[o])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : RL(Object(a)).forEach(function(o) {
                Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(a, o))
            })
        }
        return e
    }
    function Cw(e, t) {
        if (e == null)
            return {};
        var a = {}, o = Object.keys(e), l, n;
        for (n = 0; n < o.length; n++)
            l = o[n],
            !(t.indexOf(l) >= 0) && (a[l] = e[l]);
        return a
    }
    function AL(e, t) {
        if (e == null)
            return {};
        var a = Cw(e, t), o, l;
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(e);
            for (l = 0; l < n.length; l++)
                o = n[l],
                !(t.indexOf(o) >= 0) && Object.prototype.propertyIsEnumerable.call(e, o) && (a[o] = e[o])
        }
        return a
    }
    function ML(e, t) {
        return Iw(e) || ww(e, t) || Tw(e, t) || Ew()
    }
    function Iw(e) {
        if (Array.isArray(e))
            return e
    }
    function ww(e, t) {
        if (!(typeof Symbol > "u" || !(Symbol.iterator in Object(e)))) {
            var a = []
              , o = !0
              , l = !1
              , n = void 0;
            try {
                for (var u = e[Symbol.iterator](), r; !(o = (r = u.next()).done) && (a.push(r.value),
                !(t && a.length === t)); o = !0)
                    ;
            } catch (s) {
                l = !0,
                n = s
            } finally {
                try {
                    !o && u.return != null && u.return()
                } finally {
                    if (l)
                        throw n
                }
            }
            return a
        }
    }
    function Tw(e, t) {
        if (e) {
            if (typeof e == "string")
                return OL(e, t);
            var a = Object.prototype.toString.call(e).slice(8, -1);
            if (a === "Object" && e.constructor && (a = e.constructor.name),
            a === "Map" || a === "Set")
                return Array.from(e);
            if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                return OL(e, t)
        }
    }
    function OL(e, t) {
        (t == null || t > e.length) && (t = e.length);
        for (var a = 0, o = new Array(t); a < t; a++)
            o[a] = e[a];
        return o
    }
    function Ew() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    function Rw(e, t, a) {
        return t in e ? Object.defineProperty(e, t, {
            value: a,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = a,
        e
    }
    function DL(e, t) {
        var a = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter(function(l) {
                return Object.getOwnPropertyDescriptor(e, l).enumerable
            })),
            a.push.apply(a, o)
        }
        return a
    }
    function kL(e) {
        for (var t = 1; t < arguments.length; t++) {
            var a = arguments[t] != null ? arguments[t] : {};
            t % 2 ? DL(Object(a), !0).forEach(function(o) {
                Rw(e, o, a[o])
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : DL(Object(a)).forEach(function(o) {
                Object.defineProperty(e, o, Object.getOwnPropertyDescriptor(a, o))
            })
        }
        return e
    }
    function Ow() {
        for (var e = arguments.length, t = new Array(e), a = 0; a < e; a++)
            t[a] = arguments[a];
        return function(o) {
            return t.reduceRight(function(l, n) {
                return n(l)
            }, o)
        }
    }
    function Gu(e) {
        return function t() {
            for (var a = this, o = arguments.length, l = new Array(o), n = 0; n < o; n++)
                l[n] = arguments[n];
            return l.length >= e.length ? e.apply(this, l) : function() {
                for (var u = arguments.length, r = new Array(u), s = 0; s < u; s++)
                    r[s] = arguments[s];
                return t.apply(a, [].concat(l, r))
            }
        }
    }
    function Li(e) {
        return {}.toString.call(e).includes("Object")
    }
    function Aw(e) {
        return !Object.keys(e).length
    }
    function Xu(e) {
        return typeof e == "function"
    }
    function Mw(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    function Dw(e, t) {
        return Li(t) || vo("changeType"),
        Object.keys(t).some(function(a) {
            return !Mw(e, a)
        }) && vo("changeField"),
        t
    }
    function kw(e) {
        Xu(e) || vo("selectorType")
    }
    function Bw(e) {
        Xu(e) || Li(e) || vo("handlerType"),
        Li(e) && Object.values(e).some(function(t) {
            return !Xu(t)
        }) && vo("handlersType")
    }
    function Pw(e) {
        e || vo("initialIsRequired"),
        Li(e) || vo("initialType"),
        Aw(e) && vo("initialContent")
    }
    function _w(e, t) {
        throw new Error(e[t] || e.default)
    }
    var Fw = {
        initialIsRequired: "initial state is required",
        initialType: "initial state should be an object",
        initialContent: "initial state shouldn't be an empty object",
        handlerType: "handler should be an object or a function",
        handlersType: "all handlers should be a functions",
        selectorType: "selector should be a function",
        changeType: "provided value of changes should be an object",
        changeField: 'it seams you want to change a field in the state which is not specified in the "initial" state',
        default: "an unknown error accured in `state-local` package"
    }
      , vo = Gu(_w)(Fw)
      , vi = {
        changes: Dw,
        selector: kw,
        handler: Bw,
        initial: Pw
    };
    function Uw(e) {
        var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        vi.initial(e),
        vi.handler(t);
        var a = {
            current: e
        }
          , o = Gu(zw)(a, t)
          , l = Gu(qw)(a)
          , n = Gu(vi.changes)(e)
          , u = Gu(Hw)(a);
        function r() {
            var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : function(f) {
                return f
            }
            ;
            return vi.selector(i),
            i(a.current)
        }
        function s(i) {
            Ow(o, l, n, u)(i)
        }
        return [r, s]
    }
    function Hw(e, t) {
        return Xu(t) ? t(e.current) : t
    }
    function qw(e, t) {
        return e.current = kL(kL({}, e.current), t),
        t
    }
    function zw(e, t, a) {
        return Xu(t) ? t(e.current) : Object.keys(a).forEach(function(o) {
            var l;
            return (l = t[o]) === null || l === void 0 ? void 0 : l.call(t, e.current[o])
        }),
        a
    }
    var Nw = {
        create: Uw
    }
      , BL = Nw;
    var $w = {
        paths: {
            vs: "https://cdn.jsdelivr.net/npm/monaco-editor@0.52.2/min/vs"
        }
    }
      , PL = $w;
    function Vw(e) {
        return function t() {
            for (var a = this, o = arguments.length, l = new Array(o), n = 0; n < o; n++)
                l[n] = arguments[n];
            return l.length >= e.length ? e.apply(this, l) : function() {
                for (var u = arguments.length, r = new Array(u), s = 0; s < u; s++)
                    r[s] = arguments[s];
                return t.apply(a, [].concat(l, r))
            }
        }
    }
    var _L = Vw;
    function Gw(e) {
        return {}.toString.call(e).includes("Object")
    }
    var FL = Gw;
    function Xw(e) {
        return e || UL("configIsRequired"),
        FL(e) || UL("configType"),
        e.urls ? (jw(),
        {
            paths: {
                vs: e.urls.monacoBase
            }
        }) : e
    }
    function jw() {
        console.warn(HL.deprecation)
    }
    function Yw(e, t) {
        throw new Error(e[t] || e.default)
    }
    var HL = {
        configIsRequired: "the configuration object is required",
        configType: "the configuration object should be an object",
        default: "an unknown error accured in `@monaco-editor/loader` package",
        deprecation: `Deprecation warning!
    You are using deprecated way of configuration.

    Instead of using
      monaco.config({ urls: { monacoBase: '...' } })
    use
      monaco.config({ paths: { vs: '...' } })

    For more please check the link https://github.com/suren-atoyan/monaco-loader#config
  `
    }
      , UL = _L(Yw)(HL)
      , Kw = {
        config: Xw
    }
      , qL = Kw;
    var Ww = function() {
        for (var t = arguments.length, a = new Array(t), o = 0; o < t; o++)
            a[o] = arguments[o];
        return function(l) {
            return a.reduceRight(function(n, u) {
                return u(n)
            }, l)
        }
    }
      , zL = Ww;
    function NL(e, t) {
        return Object.keys(t).forEach(function(a) {
            t[a]instanceof Object && e[a] && Object.assign(t[a], NL(e[a], t[a]))
        }),
        im(im({}, e), t)
    }
    var $L = NL;
    var Qw = {
        type: "cancelation",
        msg: "operation is manually canceled"
    };
    function Zw(e) {
        var t = !1
          , a = new Promise(function(o, l) {
            e.then(function(n) {
                return t ? l(Qw) : o(n)
            }),
            e.catch(l)
        }
        );
        return a.cancel = function() {
            return t = !0
        }
        ,
        a
    }
    var yi = Zw;
    var Jw = BL.create({
        config: PL,
        isInitialized: !1,
        resolve: null,
        reject: null,
        monaco: null
    })
      , VL = ML(Jw, 2)
      , ju = VL[0]
      , bi = VL[1];
    function eT(e) {
        var t = qL.config(e)
          , a = t.monaco
          , o = AL(t, ["monaco"]);
        bi(function(l) {
            return {
                config: $L(l.config, o),
                monaco: a
            }
        })
    }
    function tT() {
        var e = ju(function(t) {
            var a = t.monaco
              , o = t.isInitialized
              , l = t.resolve;
            return {
                monaco: a,
                isInitialized: o,
                resolve: l
            }
        });
        if (!e.isInitialized) {
            if (bi({
                isInitialized: !0
            }),
            e.monaco)
                return e.resolve(e.monaco),
                yi(fm);
            if (window.monaco && window.monaco.editor)
                return GL(window.monaco),
                e.resolve(window.monaco),
                yi(fm);
            zL(aT, lT)(nT)
        }
        return yi(fm)
    }
    function aT(e) {
        return document.body.appendChild(e)
    }
    function oT(e) {
        var t = document.createElement("script");
        return e && (t.src = e),
        t
    }
    function lT(e) {
        var t = ju(function(o) {
            var l = o.config
              , n = o.reject;
            return {
                config: l,
                reject: n
            }
        })
          , a = oT("".concat(t.config.paths.vs, "/loader.js"));
        return a.onload = function() {
            return e()
        }
        ,
        a.onerror = t.reject,
        a
    }
    function nT() {
        var e = ju(function(a) {
            var o = a.config
              , l = a.resolve
              , n = a.reject;
            return {
                config: o,
                resolve: l,
                reject: n
            }
        })
          , t = window.require;
        t.config(e.config),
        t(["vs/editor/editor.main"], function(a) {
            GL(a),
            e.resolve(a)
        }, function(a) {
            e.reject(a)
        })
    }
    function GL(e) {
        ju().monaco || bi({
            monaco: e
        })
    }
    function uT() {
        return ju(function(e) {
            var t = e.monaco;
            return t
        })
    }
    var fm = new Promise(function(e, t) {
        return bi({
            resolve: e,
            reject: t
        })
    }
    )
      , rT = {
        config: eT,
        init: tT,
        __getMonacoInstance: uT
    }
      , Qo = rT;
    var XL = A(M(), 1)
      , Ue = A(M(), 1);
    var jL = A(M(), 1)
      , Ci = A(M(), 1)
      , YL = A(M(), 1)
      , WL = A(M(), 1)
      , Ii = A(M(), 1)
      , ST = A(M(), 1);
    var JL = A(M(), 1)
      , xe = A(M(), 1);
    var wi = A(M(), 1)
      , sT = {
        wrapper: {
            display: "flex",
            position: "relative",
            textAlign: "initial"
        },
        fullWidth: {
            width: "100%"
        },
        hide: {
            display: "none"
        }
    }
      , cm = sT
      , iT = {
        container: {
            display: "flex",
            height: "100%",
            width: "100%",
            justifyContent: "center",
            alignItems: "center"
        }
    }
      , fT = iT;
    function cT({children: e}) {
        return YL.default.createElement("div", {
            style: fT.container
        }, e)
    }
    var dT = cT
      , mT = dT;
    function pT({width: e, height: t, isEditorReady: a, loading: o, _ref: l, className: n, wrapperProps: u}) {
        return Ci.default.createElement("section", {
            style: {
                ...cm.wrapper,
                width: e,
                height: t
            },
            ...u
        }, !a && Ci.default.createElement(mT, null, o), Ci.default.createElement("div", {
            ref: l,
            style: {
                ...cm.fullWidth,
                ...!a && cm.hide
            },
            className: n
        }))
    }
    var gT = pT
      , KL = (0,
    jL.memo)(gT);
    function hT(e) {
        (0,
        WL.useEffect)(e, [])
    }
    var QL = hT;
    function xT(e, t, a=!0) {
        let o = (0,
        Ii.useRef)(!0);
        (0,
        Ii.useEffect)(o.current || !a ? () => {
            o.current = !1
        }
        : e, t)
    }
    var xt = xT;
    function Yu() {}
    function nn(e, t, a, o) {
        return vT(e, o) || LT(e, t, a, o)
    }
    function vT(e, t) {
        return e.editor.getModel(ZL(e, t))
    }
    function LT(e, t, a, o) {
        return e.editor.createModel(t, a, o ? ZL(e, o) : void 0)
    }
    function ZL(e, t) {
        return e.Uri.parse(t)
    }
    function yT({original: e, modified: t, language: a, originalLanguage: o, modifiedLanguage: l, originalModelPath: n, modifiedModelPath: u, keepCurrentOriginalModel: r=!1, keepCurrentModifiedModel: s=!1, theme: i="light", loading: f="Loading...", options: g={}, height: m="100%", width: c="100%", className: x, wrapperProps: L={}, beforeMount: S=Yu, onMount: h=Yu}) {
        let[d,p] = (0,
        Ue.useState)(!1)
          , [v,y] = (0,
        Ue.useState)(!0)
          , I = (0,
        Ue.useRef)(null)
          , b = (0,
        Ue.useRef)(null)
          , T = (0,
        Ue.useRef)(null)
          , R = (0,
        Ue.useRef)(h)
          , w = (0,
        Ue.useRef)(S)
          , O = (0,
        Ue.useRef)(!1);
        QL( () => {
            let F = Qo.init();
            return F.then(P => (b.current = P) && y(!1)).catch(P => P?.type !== "cancelation" && console.error("Monaco initialization: error:", P)),
            () => I.current ? W() : F.cancel()
        }
        ),
        xt( () => {
            if (I.current && b.current) {
                let F = I.current.getOriginalEditor()
                  , P = nn(b.current, e || "", o || a || "text", n || "");
                P !== F.getModel() && F.setModel(P)
            }
        }
        , [n], d),
        xt( () => {
            if (I.current && b.current) {
                let F = I.current.getModifiedEditor()
                  , P = nn(b.current, t || "", l || a || "text", u || "");
                P !== F.getModel() && F.setModel(P)
            }
        }
        , [u], d),
        xt( () => {
            let F = I.current.getModifiedEditor();
            F.getOption(b.current.editor.EditorOption.readOnly) ? F.setValue(t || "") : t !== F.getValue() && (F.executeEdits("", [{
                range: F.getModel().getFullModelRange(),
                text: t || "",
                forceMoveMarkers: !0
            }]),
            F.pushUndoStop())
        }
        , [t], d),
        xt( () => {
            I.current?.getModel()?.original.setValue(e || "")
        }
        , [e], d),
        xt( () => {
            let {original: F, modified: P} = I.current.getModel();
            b.current.editor.setModelLanguage(F, o || a || "text"),
            b.current.editor.setModelLanguage(P, l || a || "text")
        }
        , [a, o, l], d),
        xt( () => {
            b.current?.editor.setTheme(i)
        }
        , [i], d),
        xt( () => {
            I.current?.updateOptions(g)
        }
        , [g], d);
        let z = (0,
        Ue.useCallback)( () => {
            if (!b.current)
                return;
            w.current(b.current);
            let F = nn(b.current, e || "", o || a || "text", n || "")
              , P = nn(b.current, t || "", l || a || "text", u || "");
            I.current?.setModel({
                original: F,
                modified: P
            })
        }
        , [a, t, l, e, o, n, u])
          , Y = (0,
        Ue.useCallback)( () => {
            !O.current && T.current && (I.current = b.current.editor.createDiffEditor(T.current, {
                automaticLayout: !0,
                ...g
            }),
            z(),
            b.current?.editor.setTheme(i),
            p(!0),
            O.current = !0)
        }
        , [g, i, z]);
        (0,
        Ue.useEffect)( () => {
            d && R.current(I.current, b.current)
        }
        , [d]),
        (0,
        Ue.useEffect)( () => {
            !v && !d && Y()
        }
        , [v, d, Y]);
        function W() {
            let F = I.current?.getModel();
            r || F?.original?.dispose(),
            s || F?.modified?.dispose(),
            I.current?.dispose()
        }
        return Ue.default.createElement(KL, {
            width: c,
            height: m,
            isEditorReady: d,
            loading: f,
            _ref: T,
            className: x,
            wrapperProps: L
        })
    }
    var bT = yT
      , kD = (0,
    XL.memo)(bT);
    function CT(e) {
        let t = (0,
        wi.useRef)();
        return (0,
        wi.useEffect)( () => {
            t.current = e
        }
        , [e]),
        t.current
    }
    var IT = CT
      , Si = new Map;
    function wT({defaultValue: e, defaultLanguage: t, defaultPath: a, value: o, language: l, path: n, theme: u="light", line: r, loading: s="Loading...", options: i={}, overrideServices: f={}, saveViewState: g=!0, keepCurrentModel: m=!1, width: c="100%", height: x="100%", className: L, wrapperProps: S={}, beforeMount: h=Yu, onMount: d=Yu, onChange: p, onValidate: v=Yu}) {
        let[y,I] = (0,
        xe.useState)(!1)
          , [b,T] = (0,
        xe.useState)(!0)
          , R = (0,
        xe.useRef)(null)
          , w = (0,
        xe.useRef)(null)
          , O = (0,
        xe.useRef)(null)
          , z = (0,
        xe.useRef)(d)
          , Y = (0,
        xe.useRef)(h)
          , W = (0,
        xe.useRef)()
          , F = (0,
        xe.useRef)(o)
          , P = IT(n)
          , re = (0,
        xe.useRef)(!1)
          , _ = (0,
        xe.useRef)(!1);
        QL( () => {
            let se = Qo.init();
            return se.then(Ve => (R.current = Ve) && T(!1)).catch(Ve => Ve?.type !== "cancelation" && console.error("Monaco initialization: error:", Ve)),
            () => w.current ? ve() : se.cancel()
        }
        ),
        xt( () => {
            let se = nn(R.current, e || o || "", t || l || "", n || a || "");
            se !== w.current?.getModel() && (g && Si.set(P, w.current?.saveViewState()),
            w.current?.setModel(se),
            g && w.current?.restoreViewState(Si.get(n)))
        }
        , [n], y),
        xt( () => {
            w.current?.updateOptions(i)
        }
        , [i], y),
        xt( () => {
            !w.current || o === void 0 || (w.current.getOption(R.current.editor.EditorOption.readOnly) ? w.current.setValue(o) : o !== w.current.getValue() && (_.current = !0,
            w.current.executeEdits("", [{
                range: w.current.getModel().getFullModelRange(),
                text: o,
                forceMoveMarkers: !0
            }]),
            w.current.pushUndoStop(),
            _.current = !1))
        }
        , [o], y),
        xt( () => {
            let se = w.current?.getModel();
            se && l && R.current?.editor.setModelLanguage(se, l)
        }
        , [l], y),
        xt( () => {
            r !== void 0 && w.current?.revealLine(r)
        }
        , [r], y),
        xt( () => {
            R.current?.editor.setTheme(u)
        }
        , [u], y);
        let Q = (0,
        xe.useCallback)( () => {
            if (!(!O.current || !R.current) && !re.current) {
                Y.current(R.current);
                let se = n || a
                  , Ve = nn(R.current, o || e || "", t || l || "", se || "");
                w.current = R.current?.editor.create(O.current, {
                    model: Ve,
                    automaticLayout: !0,
                    ...i
                }, f),
                g && w.current.restoreViewState(Si.get(se)),
                R.current.editor.setTheme(u),
                r !== void 0 && w.current.revealLine(r),
                I(!0),
                re.current = !0
            }
        }
        , [e, t, a, o, l, n, i, f, g, u, r]);
        (0,
        xe.useEffect)( () => {
            y && z.current(w.current, R.current)
        }
        , [y]),
        (0,
        xe.useEffect)( () => {
            !b && !y && Q()
        }
        , [b, y, Q]),
        F.current = o,
        (0,
        xe.useEffect)( () => {
            y && p && (W.current?.dispose(),
            W.current = w.current?.onDidChangeModelContent(se => {
                _.current || p(w.current.getValue(), se)
            }
            ))
        }
        , [y, p]),
        (0,
        xe.useEffect)( () => {
            if (y) {
                let se = R.current.editor.onDidChangeMarkers(Ve => {
                    let U = w.current.getModel()?.uri;
                    if (U && Ve.find(De => De.path === U.path)) {
                        let De = R.current.editor.getModelMarkers({
                            resource: U
                        });
                        v?.(De)
                    }
                }
                );
                return () => {
                    se?.dispose()
                }
            }
            return () => {}
        }
        , [y, v]);
        function ve() {
            W.current?.dispose(),
            m ? g && Si.set(n, w.current.saveViewState()) : w.current.getModel()?.dispose(),
            w.current.dispose()
        }
        return xe.default.createElement(KL, {
            width: c,
            height: x,
            isEditorReady: y,
            loading: s,
            _ref: O,
            className: L,
            wrapperProps: S
        })
    }
    var TT = wT
      , ET = (0,
    JL.memo)(TT)
      , ey = ET;
    var ty = {
        comments: {
            lineComment: "--",
            blockComment: ["--[[", "]]"]
        },
        brackets: [["{", "}"], ["[", "]"], ["(", ")"]],
        autoClosingPairs: [{
            open: "{",
            close: "}"
        }, {
            open: "[",
            close: "]"
        }, {
            open: "(",
            close: ")"
        }, {
            open: '"',
            close: '"'
        }, {
            open: "'",
            close: "'"
        }],
        surroundingPairs: [{
            open: "{",
            close: "}"
        }, {
            open: "[",
            close: "]"
        }, {
            open: "(",
            close: ")"
        }, {
            open: '"',
            close: '"'
        }, {
            open: "'",
            close: "'"
        }]
    }
      , ay = {
        defaultToken: "",
        tokenPostfix: ".lua",
        keywords: ["and", "break", "do", "else", "elseif", "end", "false", "for", "function", "goto", "if", "in", "local", "nil", "not", "or", "repeat", "return", "then", "true", "until", "while"],
        brackets: [{
            token: "delimiter.bracket",
            open: "{",
            close: "}"
        }, {
            token: "delimiter.array",
            open: "[",
            close: "]"
        }, {
            token: "delimiter.parenthesis",
            open: "(",
            close: ")"
        }],
        operators: ["+", "-", "*", "/", "%", "^", "#", "==", "~=", "<=", ">=", "+=", "-=", "*=", "/=", "%=", "..=", "^=", "..=", "<", ">", "=", ";", ":", ",", ".", "..", "..."],
        symbols: /[=><!~?:&|+\-*\/\^%]+/,
        escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
        tokenizer: {
            root: [[/[a-zA-Z_]\w*/, {
                cases: {
                    "@keywords": {
                        token: "keyword.$0"
                    },
                    "@default": "identifier"
                }
            }], {
                include: "@whitespace"
            }, [/(,)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/, ["delimiter", "", "key", "", "delimiter"]], [/({)(\s*)([a-zA-Z_]\w*)(\s*)(:)(?!:)/, ["@brackets", "", "key", "", "delimiter"]], [/[{}()\[\]]/, "@brackets"], [/@symbols/, {
                cases: {
                    "@operators": "delimiter",
                    "@default": ""
                }
            }], [/\d*\.\d+([eE][\-+]?\d+)?/, "number.float"], [/0[xX][0-9a-fA-F_]*[0-9a-fA-F]/, "number.hex"], [/\d+?/, "number"], [/[;,.]/, "delimiter"], [/"([^"\\]|\\.)*$/, "string.invalid"], [/'([^'\\]|\\.)*$/, "string.invalid"], [/"/, "string", '@string."'], [/'/, "string", "@string.'"]],
            whitespace: [[/[ \t\r\n]+/, ""], [/--\[([=]*)\[/, "comment", "@comment.$1"], [/--.*$/, "comment"]],
            comment: [[/[^\]]+/, "comment"], [/\]([=]*)\]/, {
                cases: {
                    "$1==$S2": {
                        token: "comment",
                        next: "@pop"
                    },
                    "@default": "comment"
                }
            }], [/./, "comment"]],
            string: [[/[^\\"']+/, "string"], [/@escapes/, "string.escape"], [/\\./, "string.escape.invalid"], [/["']/, {
                cases: {
                    "$#==$S2": {
                        token: "string",
                        next: "@pop"
                    },
                    "@default": "string"
                }
            }]]
        }
    };
    var oy = A(M(), 1)
      , RT = ({script: e, onChange: t}) => oy.default.createElement(ey, {
        defaultLanguage: "luau",
        value: e,
        height: "100%",
        theme: "vs-dark",
        onChange: (l, n) => {
            l && t && t(l)
        }
        ,
        beforeMount: l => {
            l.languages.register({
                id: "luau"
            }),
            l.languages.setMonarchTokensProvider("luau", ay),
            l.languages.setLanguageConfiguration("luau", ty)
        }
        ,
        options: {
            readOnly: t == null,
            domReadOnly: t == null,
            wordWrap: "on"
        }
    })
      , Ku = RT;
    var Wu = {
        prettify: {
            name: "Prettify"
        },
        embedRuntime: {
            name: "Embed runtime",
            toolTip: "Replaces some runtime usage with embedded versions; RIP performance </3"
        },
        mangleEnable: {
            name: "Mangle statements"
        },
        mangleConstLift: {
            name: "Lift constants",
            toolTip: "Percentage of constants to lift (higher is slower)",
            dependsOn: "mangleEnable"
        },
        mangleNumbers: {
            name: "Mangle numbers",
            dependsOn: "mangleEnable"
        },
        mangleStrings: {
            name: "Mangle strings",
            dependsOn: "mangleEnable"
        },
        mangleSelfCalls: {
            name: "Mangle self-calls",
            dependsOn: "mangleEnable"
        },
        mangleNamedIndex: {
            name: "Mangle named indexes",
            dependsOn: "mangleEnable"
        },
        mangleGlobals: {
            name: "Mangle globals",
            dependsOn: "mangleEnable"
        },
        cffEnable: {
            name: "Flatten control flow"
        },
        cffDecomposeExpr: {
            name: "Decompose expressions",
            toolTip: "Decomposes expressions into multiple blocks; RIP performance </3",
            dependsOn: "cffEnable"
        },
        cffHoistLocals: {
            name: "Hoist locals",
            toolTip: "This will move locals into a register table",
            dependsOn: "cffEnable"
        },
        vmEnable: {
            name: "Virtualize Options",
            toolTip: "Only runs in Luau environments",
            meta: !0
        },
        vmWrapScript: {
            name: "Virtualize Script",
            toolTip: "Will mark the entire script to be virtualized",
            dependsOn: "vmEnable"
        },
        vmSafeEnv: {
            name: "Environment Check",
            toolTip: "Breaks compatibility with some environments, helps prevent loggers",
            dependsOn: "vmEnable"
        },
        vmDebug: {
            name: "Debug VM",
            toolTip: "Enables VM error debugging and line information; DO NOT DISTRIBUTE",
            dependsOn: "vmEnable"
        }
    }
      , Lo = {
        prettify: !1,
        embedRuntime: !1,
        mangleEnable: !0,
        mangleConstLift: 40,
        mangleNumbers: !1,
        mangleStrings: !0,
        mangleSelfCalls: !0,
        mangleNamedIndex: !0,
        mangleGlobals: !0,
        cffEnable: !0,
        cffDecomposeExpr: !1,
        cffHoistLocals: !1,
        vmEnable: !0,
        vmWrapScript: !0,
        vmSafeEnv: !0,
        vmDebug: !1
    }
      , dm = [{
        id: 0,
        name: "Default (Recommended)",
        options: Lo
    }, {
        id: 1,
        name: "Minify",
        options: {
            prettify: !1,
            embedRuntime: !1,
            mangleEnable: !1,
            mangleConstLift: 0,
            mangleNumbers: !1,
            mangleStrings: !1,
            mangleSelfCalls: !1,
            mangleNamedIndex: !1,
            mangleGlobals: !1,
            cffEnable: !1,
            cffDecomposeExpr: !1,
            cffHoistLocals: !1,
            vmEnable: !0,
            vmWrapScript: !1,
            vmSafeEnv: !1,
            vmDebug: !1
        }
    }, {
        id: 2,
        name: "Source Obfuscation (Slow)",
        options: {
            prettify: !1,
            embedRuntime: !0,
            mangleEnable: !0,
            mangleConstLift: 50,
            mangleNumbers: !0,
            mangleStrings: !0,
            mangleSelfCalls: !0,
            mangleNamedIndex: !0,
            mangleGlobals: !0,
            cffEnable: !0,
            cffDecomposeExpr: !0,
            cffHoistLocals: !0,
            vmEnable: !1,
            vmWrapScript: !1,
            vmSafeEnv: !1,
            vmDebug: !1
        }
    }, {
        id: 3,
        name: "Fast VM",
        options: {
            prettify: !1,
            embedRuntime: !1,
            mangleEnable: !0,
            mangleConstLift: 0,
            mangleNumbers: !1,
            mangleStrings: !1,
            mangleSelfCalls: !1,
            mangleNamedIndex: !1,
            mangleGlobals: !1,
            cffEnable: !0,
            cffDecomposeExpr: !1,
            cffHoistLocals: !1,
            vmEnable: !0,
            vmWrapScript: !0,
            vmSafeEnv: !0,
            vmDebug: !1
        }
    }];
    var OT = () => {
        let[e,t] = (0,
        C.useState)( () => window.innerWidth < 768);
        return (0,
        C.useEffect)( () => {
            let a = () => {
                t(window.innerWidth < 768)
            }
            ;
            return window.addEventListener("resize", a),
            () => window.removeEventListener("resize", a)
        }
        , []),
        e
    }
      , sy = "mv_options"
      , AT = e => {
        let t = JSON.stringify(e);
        document.cookie = `${sy}=${encodeURIComponent(t)}; path=/; max-age=31536000`
    }
      , ly = () => {
        let t = document.cookie.split(";").find(a => a.trim().startsWith(`${sy}=`));
        if (!t)
            return null;
        try {
            let a = decodeURIComponent(t.split("=")[1].trim())
              , o = JSON.parse(a);
            for (let l in o)
                (!(l in Lo) || typeof o[l] != typeof Lo[l]) && delete o[l];
            return {
                ...Lo,
                ...o
            }
        } catch (a) {
            return console.error("Failed to parse options from cookie:", a),
            null
        }
    }
      , iy = e => Object.entries(e).reduce( (t, [a,o]) => Wu[a].meta ? t : {
        ...t,
        [a]: o
    }, {})
      , MT = (e, t) => {
        let a = [];
        for (let[o,l] of Object.entries(e))
            l && !t[o] && a.push(o);
        return a
    }
      , fy = (0,
    C.createContext)(Lo)
      , cy = () => (0,
    C.useContext)(fy)
      , DT = ({preset: e, setPreset: t}) => {
        let a = cy();
        return C.default.createElement(TL, {
            value: e,
            onChange: t
        }, C.default.createElement("div", {
            className: "relative mt-2"
        }, C.default.createElement(um, {
            className: "grid w-full cursor-default grid-cols-1 rounded-md bg-zinc-800 py-1.5 pr-2 pl-3 text-left text-zinc-100 outline-1 -outline-offset-1 outline-zinc-700 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
        }, C.default.createElement("span", {
            className: "col-start-1 row-start-1 flex items-center gap-3 pr-6"
        }, C.default.createElement("span", {
            className: "block truncate"
        }, e ? e.name : "Custom")), C.default.createElement(hu, {
            "aria-hidden": "true",
            className: "col-start-1 row-start-1 size-5 self-center justify-self-end text-zinc-400 sm:size-4"
        })), C.default.createElement(rm, {
            transition: !0,
            className: "absolute z-30 mt-1 max-h-56 w-full overflow-auto rounded-md bg-zinc-800 py-1 text-base ring-1 shadow-lg ring-zinc-700/50 focus:outline-hidden data-leave:transition data-leave:duration-100 data-leave:ease-in data-closed:data-leave:opacity-0 sm:text-sm"
        }, dm.map(o => {
            let l = MT(iy(o.options), a).length == 0;
            return C.default.createElement(sm, {
                key: o.id,
                value: o,
                className: `group relative cursor-default py-2 pr-9 pl-3 ${l ? "text-zinc-100 hover:bg-zinc-700" : "text-zinc-400 hover:cursor-not-allowed"} select-none data-focus:bg-indigo-500 data-focus:text-white data-focus:outline-hidden`,
                disabled: !l
            }, C.default.createElement("div", {
                className: "flex items-center"
            }, C.default.createElement("span", {
                className: "ml-3 block truncate font-normal group-data-selected:font-semibold"
            }, o.name)), !l && C.default.createElement("span", {
                className: "absolute inset-y-0 right-0 flex items-center pr-4 text-zinc-300 group-not-data-selected:hidden group-data-focus:text-white"
            }, C.default.createElement(Gl, {
                "aria-hidden": "true",
                className: "size-5"
            })), e == o && C.default.createElement("span", {
                className: "absolute inset-y-0 right-0 flex items-center pr-4 text-rose-500 group-not-data-selected:hidden group-data-focus:text-white"
            }, C.default.createElement(mu, {
                "aria-hidden": "true",
                className: "size-5"
            })))
        }
        ))))
    }
      , kT = ["pl-4", "pl-8", "pl-12"]
      , BT = ({state: e}) => e ? C.default.createElement(pu, {
        size: 16,
        className: "ml-1 text-white"
    }) : C.default.createElement(gu, {
        size: 16,
        className: "ml-1 text-white"
    })
      , PT = ({value: e, min: t, max: a, step: o, onChange: l}) => {
        let n = (e - t) / (a - t) * 100;
        return C.default.createElement("div", {
            className: "px-6 w-full"
        }, C.default.createElement("div", {
            className: "relative"
        }, C.default.createElement("input", {
            type: "range",
            min: t,
            max: a,
            step: o,
            value: e,
            onChange: r => {
                let s = parseInt(r.target.value);
                l(s)
            }
            ,
            className: "absolute w-full h-2 opacity-0 cursor-pointer z-20 left-0 top-0"
        }), C.default.createElement("div", {
            className: "bg-zinc-800/80 h-2 w-full rounded-full relative"
        }, C.default.createElement("span", {
            className: "bg-white h-4 w-4 absolute top-0 -ml-2 -mt-1 z-10 shadow rounded-full cursor-pointer",
            style: {
                left: `${n}%`
            }
        }), C.default.createElement("span", {
            className: "ring-rose-600 bg-rose-600 h-2 absolute left-0 top-0 rounded-full",
            style: {
                width: `${n}%`
            }
        })), C.default.createElement("div", {
            className: "flex justify-between mt-2 text-xs text-zinc-300"
        }, C.default.createElement("span", {
            className: "w-8 text-left"
        }, t), C.default.createElement("span", {
            className: "w-8 text-center"
        }, t + (a - t) * .25), C.default.createElement("span", {
            className: "w-8 text-center"
        }, t + (a - t) * .5), C.default.createElement("span", {
            className: "w-8 text-center"
        }, t + (a - t) * .75), C.default.createElement("span", {
            className: "w-8 text-right"
        }, a))))
    }
      , ny = ({text: e, isEnabled: t}) => C.default.createElement("div", {
        className: "group relative flex justify-center items-center"
    }, !t && C.default.createElement(C.default.Fragment, null, C.default.createElement(Gl, {
        size: 16,
        className: "ml-1 text-white"
    }), C.default.createElement("div", {
        className: "absolute left-1/2 -translate-x-1/2 hidden group-hover:flex -top-2 -translate-y-full w-48 px-2 py-1 bg-zinc-600 rounded-lg text-center text-white text-sm"
    }, "Please upgrade your plan to use this feature")), t && e && C.default.createElement(C.default.Fragment, null, C.default.createElement(xu, {
        size: 16,
        className: "ml-1 text-white"
    }), C.default.createElement("div", {
        className: "absolute left-1/2 -translate-x-1/2 hidden group-hover:flex -top-2 -translate-y-full w-48 px-2 py-1 bg-zinc-600 rounded-lg text-center text-white text-sm"
    }, e)))
      , uy = ({options: e, setOptions: t, preset: a, setPreset: o}) => {
        let l = cy()
          , n = r => {
            o(null),
            t({
                ...e,
                [r]: !e[r]
            })
        }
          , u = (r, s) => {
            o(null),
            t({
                ...e,
                [r]: s
            })
        }
        ;
        return C.default.createElement(C.default.Fragment, null, C.default.createElement("div", {
            className: "space-y-2"
        }, C.default.createElement(DT, {
            setPreset: r => {
                t(r?.options || Lo),
                o(r)
            }
            ,
            preset: a
        })), C.default.createElement("div", {
            className: "mt-2 space-y-2"
        }, Object.entries(Wu).map( ([r,s]) => {
            let i = s?.meta
              , f = l[r] || i
              , g = e[r]
              , m = "";
            if (s.dependsOn) {
                let c = s
                  , x = -1;
                for (; c.dependsOn; ) {
                    if (!e[c.dependsOn])
                        return null;
                    x++,
                    c = Wu[c.dependsOn]
                }
                m = kT[x]
            }
            return C.default.createElement("label", {
                key: r,
                className: `flex items-center cursor-pointer ${m} w-full`
            }, typeof g == "boolean" && C.default.createElement(C.default.Fragment, null, C.default.createElement("input", {
                type: "checkbox",
                checked: g,
                disabled: !f,
                onChange: () => n(r),
                className: "sr-only peer"
            }), !i && C.default.createElement("div", {
                className: `relative w-11 h-6 ${f ? "bg-zinc-700" : "bg-zinc-800"} peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-rose-800 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-gray-600 peer-checked:bg-rose-600`
            }), i && C.default.createElement(BT, {
                state: g
            }), C.default.createElement("span", {
                className: `ms-3 text-sm font-medium ${f ? "text-gray-300" : "text-gray-400"}`
            }, s.name), C.default.createElement(ny, {
                text: s.toolTip,
                isEnabled: f
            })), typeof g == "number" && C.default.createElement("div", {
                className: "block w-full space-y-2"
            }, C.default.createElement("div", {
                className: "flex items-center justify-center w-full"
            }, C.default.createElement("span", {
                className: `text-sm font-medium ${f ? "text-gray-300" : "text-gray-400"}`
            }, s.name), C.default.createElement(ny, {
                text: s.toolTip,
                isEnabled: f
            })), C.default.createElement(PT, {
                value: g,
                min: 0,
                max: 100,
                step: 10,
                onChange: c => u(r, c)
            })))
        }
        )))
    }
      , _T = ({children: e, className: t, isReady: a, doObf: o}) => {
        let[l,n] = (0,
        C.useState)(!1);
        return C.default.createElement("div", {
            className: "fixed bottom-5 right-5 z-50"
        }, C.default.createElement("div", {
            className: "grid space-y-2"
        }, C.default.createElement("button", {
            onClick: a ? o : () => V.info("Please change your input first"),
            className: `${a ? "bg-rose-600/70 shadow-rose-600/50 hover:bg-rose-500/80" : "bg-zinc-800/30 cursor-not-allowed"} text-white backdrop-blur-sm border border-white/10 p-4 rounded-full shadow-lg focus:outline-none transition-all duration-300 ease-in-out`
        }, a ? C.default.createElement(Vl, {
            size: 24
        }) : C.default.createElement($l, {
            size: 24
        })), C.default.createElement("button", {
            onClick: () => n(!0),
            className: "bg-zinc-800/30 backdrop-blur-sm border border-white/10 text-white p-4 rounded-full shadow-lg hover:bg-zinc-800/50 hover:shadow-xl focus:outline-none transition"
        }, C.default.createElement(vu, {
            size: 24
        }))), l && C.default.createElement("div", {
            className: "fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50",
            onClick: () => n(!1)
        }, C.default.createElement("div", {
            className: "bg-zinc-800/30 backdrop-blur-sm border border-white/10 px-2 pt-1 rounded-2xl shadow-xl w-96 relative",
            onClick: u => u.stopPropagation()
        }, C.default.createElement("button", {
            className: "absolute top-2 right-2 text-white hover:bg-zinc-700 p-2 rounded-full transition",
            onClick: () => n(!1)
        }, C.default.createElement(Lu, {
            size: 24
        })), C.default.createElement("div", {
            className: t
        }, e))))
    }
      , FT = `--[[

Welcome to MoonVeil!

Input your script in the text area on the left and click the target icon in the bottom right to obfuscate it, or use the plus icon to select your options.

For a more detailed explanation of each option see https://moonveil.cc/docs/options
For a list of available macros see https://moonveil.cc/docs/macros

]]
`
      , ry = (e, t) => Object.entries(e).reduce( (a, [o,l]) => typeof l != "boolean" || Wu[o].meta ? {
        ...a,
        [o]: l
    } : {
        ...a,
        [o]: l && t[o]
    }, {})
      , dy = ({initialScript: e, enabledOptions: t}) => {
        let a = OT()
          , [o,l] = (0,
        C.useState)(e)
          , [n,u] = (0,
        C.useState)( () => {
            let R = ly();
            return ry(R || Lo, t)
        }
        )
          , [r,s] = (0,
        C.useState)( () => {
            let R = ly() || n;
            return dm.find(w => JSON.stringify(w.options) === JSON.stringify(R)) || null
        }
        )
          , [i,f] = (0,
        C.useState)(FT)
          , [g,m] = (0,
        C.useState)(!1)
          , [c,x] = (0,
        C.useState)(!1)
          , L = C.default.useRef(null)
          , [S,h] = (0,
        C.useState)( () => window.innerWidth > 1024 ? 50 : 80);
        (0,
        C.useEffect)( () => {
            Object.keys(n).length > 0 && AT(n)
        }
        , [n]);
        let d = async () => {
            x(!1),
            L.current = V.loading("Obfuscating...");
            try {
                let R = await EL(o, iy(n));
                f(R),
                V.update(L.current, {
                    render: "Successful",
                    type: "success",
                    isLoading: !1,
                    autoClose: 750
                })
            } catch (R) {
                let w = R.message
                  , O = w.length > 50 ? w.substring(0, 50) + "..." : w;
                f(`--[[
${w}]]--`),
                V.update(L.current, {
                    render: O,
                    type: "error",
                    isLoading: !1,
                    autoClose: 5e3
                })
            }
            L.current = null
        }
        ;
        (0,
        C.useEffect)( () => {
            c || x(!0)
        }
        , [o, n]);
        let p = R => {
            navigator.clipboard.writeText(R),
            V.info("Copied to clipboard")
        }
          , v = R => {
            let w = new Blob([R],{
                type: "text/plain"
            })
              , O = URL.createObjectURL(w)
              , z = document.createElement("a");
            z.href = O,
            z.download = "obfuscated.lua",
            z.click(),
            URL.revokeObjectURL(O),
            V.info("Saved to file")
        }
          , y = () => {
            let R = document.createElement("input");
            R.type = "file",
            R.accept = ".lua",
            R.onchange = () => {
                let w = R.files?.[0];
                if (!w)
                    return;
                let O = new FileReader;
                O.onload = () => {
                    l(O.result),
                    V.info("Loaded from file")
                }
                ,
                O.readAsText(w)
            }
            ,
            R.click()
        }
          , I = () => {
            m(!0)
        }
          , b = () => {
            m(!1)
        }
          , T = R => {
            if (!g)
                return;
            let w = R.clientX / window.innerWidth * 100;
            h(Math.max(20, Math.min(80, w)))
        }
        ;
        return (0,
        C.useEffect)( () => (window.addEventListener("mousemove", T),
        window.addEventListener("mouseup", b),
        () => {
            window.removeEventListener("mousemove", T),
            window.removeEventListener("mouseup", b)
        }
        ), [g]),
        C.default.createElement(fy.Provider, {
            value: t
        }, C.default.createElement("div", {
            className: "h-full"
        }, C.default.createElement(Jx, {
            position: "bottom-left",
            autoClose: 2e3,
            hideProgressBar: !1,
            newestOnTop: !1,
            closeOnClick: !1,
            rtl: !1,
            pauseOnFocusLoss: !0,
            draggable: !0,
            pauseOnHover: !0,
            theme: "colored"
        }), a ? C.default.createElement("div", {
            className: "h-full flex flex-col bg-zinc-900 text-white"
        }, C.default.createElement("div", {
            className: "p-4 border-b border-zinc-700"
        }, C.default.createElement("div", {
            className: "space-y-3"
        }, C.default.createElement(uy, {
            options: n,
            setOptions: u,
            setPreset: s,
            preset: r
        }))), C.default.createElement("div", {
            className: "flex-1 p-4 max-h-[50%]"
        }, C.default.createElement("h3", {
            className: "text-sm font-medium mb-2"
        }, "Input"), C.default.createElement("div", {
            className: "h-full border border-zinc-700 rounded"
        }, C.default.createElement(Ku, {
            script: o,
            onChange: l
        }))), C.default.createElement("div", {
            className: "p-4 space-y-2 mt-8"
        }, C.default.createElement("button", {
            onClick: c ? d : () => V.info("Please change your input first"),
            className: `w-full py-3 px-4 rounded-lg font-medium transition-colors ${c ? "bg-rose-600 hover:bg-rose-700 shadow-lg shadow-rose-600/50 text-white" : "bg-zinc-700 shadow-lg shadow-zinc-700/50 text-zinc-400 cursor-not-allowed"}`
        }, C.default.createElement("span", {
            className: "flex items-center justify-center "
        }, c ? C.default.createElement(Vl, {
            size: 24,
            className: "mr-1"
        }) : C.default.createElement($l, {
            size: 24,
            className: "mr-1"
        }), c ? "Obfuscate" : "Waiting for changes...")), C.default.createElement("div", {
            className: "grid grid-cols-2 gap-2"
        }, C.default.createElement("button", {
            onClick: () => p(i),
            className: "bg-transparent shadow-lg shadow-rose-600/50 border border-rose-500 text-rose-500 hover:bg-rose-500 hover:text-white py-2 px-3 rounded transition-colors flex items-center justify-center"
        }, C.default.createElement(zl, {
            size: 16,
            className: "mr-1"
        }), "Copy"), C.default.createElement("button", {
            onClick: () => v(i),
            className: "bg-transparent shadow-lg shadow-teal-600/50 border border-teal-500 text-teal-500 hover:bg-teal-500 hover:text-white py-2 px-3 rounded transition-colors flex items-center justify-center"
        }, C.default.createElement(Nl, {
            size: 16,
            className: "mr-1"
        }), "Save")), C.default.createElement("button", {
            onClick: y,
            className: "w-full bg-transparent shadow-lg shadow-amber-600/50 border border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white py-2 px-4 rounded transition-colors flex items-center justify-center"
        }, C.default.createElement(Xl, {
            size: 16,
            className: "mr-2"
        }), "Load from File")), C.default.createElement("div", {
            className: "flex-1 p-4 max-h-[50%]"
        }, C.default.createElement("h3", {
            className: "text-sm font-medium mb-2"
        }, "Output"), C.default.createElement("div", {
            className: "h-full border border-zinc-700 rounded"
        }, C.default.createElement(Ku, {
            script: i,
            onChange: null
        })))) : C.default.createElement(C.default.Fragment, null, C.default.createElement(_T, {
            className: "divide-y divide-white/10",
            isReady: c,
            doObf: d
        }, C.default.createElement("div", {
            className: "text-center m-2 text-2xl font-bold text-center text-white"
        }, "Options"), C.default.createElement("div", {
            className: "text-center py-2 m-2"
        }, C.default.createElement(uy, {
            options: n,
            setOptions: u,
            setPreset: s,
            preset: r
        })), C.default.createElement("div", {
            className: "text-center py-2 m-2"
        }, C.default.createElement("button", {
            className: "bg-transparent shadow-lg shadow-rose-600/50 hover:bg-rose-500 text-rose-500 font-semibold hover:text-white py-2 px-4 border border-rose-500 hover:border-transparent rounded mb-2 w-full flex items-center justify-center",
            onClick: () => p(i)
        }, C.default.createElement(zl, {
            size: 24,
            className: "mr-2"
        }), "Copy Output"), C.default.createElement("button", {
            className: "bg-transparent shadow-lg shadow-amber-600/50 hover:bg-amber-500 text-amber-500 font-semibold hover:text-white py-2 px-4 border border-amber-500 hover:border-transparent rounded mb-2 w-full flex items-center justify-center",
            onClick: y
        }, C.default.createElement(Xl, {
            size: 24,
            className: "mr-2"
        }), "Load from File"), C.default.createElement("button", {
            className: "bg-transparent shadow-lg shadow-teal-600/50 hover:bg-teal-500 text-teal-500 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded mb-2 w-full flex items-center justify-center",
            onClick: () => v(i)
        }, C.default.createElement(Nl, {
            size: 24,
            className: "mr-2"
        }), "Save to File"))), C.default.createElement("div", {
            className: "flex w-full h-full"
        }, C.default.createElement("div", {
            style: {
                width: `${S}%`,
                height: "100%"
            }
        }, C.default.createElement(Ku, {
            script: o,
            onChange: l
        })), C.default.createElement("div", {
            className: "w-2 bg-zinc-800 relative"
        }, C.default.createElement("div", {
            className: "z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-10 bg-zinc-300 hover:bg-zinc-400 border-2 border-zinc-600 hover:border-zinc-800 rounded-full cursor-ew-resize",
            onMouseDown: I
        })), C.default.createElement("div", {
            style: {
                width: `${100 - S}%`,
                height: "100%"
            }
        }, C.default.createElement(Ku, {
            script: i,
            onChange: null
        }))))))
    }
    ;
    function UT(e) {
        let t = e.getAttribute("data-script") ?? ""
          , a = JSON.parse(e.getAttribute("data-enabled-options") ?? "{}");
        (0,
        py.createRoot)(e).render(my.default.createElement(dy, {
            initialScript: t,
            enabledOptions: a
        }))
    }
    return Ey(HT);
}
)();
/*! Bundled license information:

react/cjs/react.production.js:
  (**
   * @license React
   * react.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

scheduler/cjs/scheduler.production.js:
  (**
   * @license React
   * scheduler.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom.production.js:
  (**
   * @license React
   * react-dom.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react-dom/cjs/react-dom-client.production.js:
  (**
   * @license React
   * react-dom-client.production.js
   *
   * Copyright (c) Meta Platforms, Inc. and affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/shared/src/utils.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/defaultAttributes.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/Icon.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/createLucideIcon.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/check.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-down.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevron-right.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/chevrons-up-down.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/clipboard-copy.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/download.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/info.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/locate-off.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/locate.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/lock.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/plus.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/upload.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/icons/x.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)

lucide-react/dist/esm/lucide-react.js:
  (**
   * @license lucide-react v0.474.0 - ISC
   *
   * This source code is licensed under the ISC license.
   * See the LICENSE file in the root directory of this source tree.
   *)
*/
