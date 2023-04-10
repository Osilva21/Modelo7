! function(e, t) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n = t();
        for (var r in n)("object" == typeof exports ? exports : e)[r] = n[r]
    }
}(self, (function() {
    return function() {
        "use strict";
        var e = {
                d: function(t, n) {
                    for (var r in n) e.o(n, r) && !e.o(t, r) && Object.defineProperty(t, r, {
                        enumerable: !0,
                        get: n[r]
                    })
                },
                o: function(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                },
                r: function(e) {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
                }
            },
            t = {};
        e.r(t), e.d(t, {
            Calendar: function() {
                return Bo
            },
            dayGridPlugin: function() {
                return aa
            },
            interactionPlugin: function() {
                return Ra
            },
            listPlugin: function() {
                return ja
            },
            timegridPlugin: function() {
                return Al
            }
        });
        var n, r, i, s, o, a, l, c = {},
            d = [],
            u = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;

        function h(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function f(e) {
            var t = e.parentNode;
            t && t.removeChild(e)
        }

        function g(e, t, r) {
            var i, s, o, a = {};
            for (o in t) "key" == o ? i = t[o] : "ref" == o ? s = t[o] : a[o] = t[o];
            if (arguments.length > 2 && (a.children = arguments.length > 3 ? n.call(arguments, 2) : r), "function" == typeof e && null != e.defaultProps)
                for (o in e.defaultProps) void 0 === a[o] && (a[o] = e.defaultProps[o]);
            return p(e, a, i, s, null)
        }

        function p(e, t, n, s, o) {
            var a = {
                type: e,
                props: t,
                key: n,
                ref: s,
                __k: null,
                __: null,
                __b: 0,
                __e: null,
                __d: void 0,
                __c: null,
                __h: null,
                constructor: void 0,
                __v: null == o ? ++i : o
            };
            return null == o && null != r.vnode && r.vnode(a), a
        }

        function m(e) {
            return e.children
        }

        function v(e, t) {
            this.props = e, this.context = t
        }

        function b(e, t) {
            if (null == t) return e.__ ? b(e.__, e.__.__k.indexOf(e) + 1) : null;
            for (var n; t < e.__k.length; t++)
                if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
            return "function" == typeof e.type ? b(e) : null
        }

        function y(e) {
            var t, n;
            if (null != (e = e.__) && null != e.__c) {
                for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
                    if (null != (n = e.__k[t]) && null != n.__e) {
                        e.__e = e.__c.base = n.__e;
                        break
                    } return y(e)
            }
        }

        function E(e) {
            (!e.__d && (e.__d = !0) && o.push(e) && !A.__r++ || a !== r.debounceRendering) && ((a = r.debounceRendering) || setTimeout)(A)
        }

        function A() {
            for (var e; A.__r = o.length;) e = o.sort((function(e, t) {
                return e.__v.__b - t.__v.__b
            })), o = [], e.some((function(e) {
                var t, n, r, i, s, o;
                e.__d && (s = (i = (t = e).__v).__e, (o = t.__P) && (n = [], (r = h({}, i)).__v = i.__v + 1, k(o, i, r, t.__n, void 0 !== o.ownerSVGElement, null != i.__h ? [s] : null, n, null == s ? b(i) : s, i.__h), M(n, i), i.__e != s && y(i)))
            }))
        }

        function D(e, t, n, r, i, s, o, a, l, u) {
            var h, f, g, v, y, E, A, D = r && r.__k || d,
                w = D.length;
            for (n.__k = [], h = 0; h < t.length; h++)
                if (null != (v = n.__k[h] = null == (v = t[h]) || "boolean" == typeof v ? null : "string" == typeof v || "number" == typeof v || "bigint" == typeof v ? p(null, v, null, null, v) : Array.isArray(v) ? p(m, {
                        children: v
                    }, null, null, null) : v.__b > 0 ? p(v.type, v.props, v.key, v.ref ? v.ref : null, v.__v) : v)) {
                    if (v.__ = n, v.__b = n.__b + 1, null === (g = D[h]) || g && v.key == g.key && v.type === g.type) D[h] = void 0;
                    else
                        for (f = 0; f < w; f++) {
                            if ((g = D[f]) && v.key == g.key && v.type === g.type) {
                                D[f] = void 0;
                                break
                            }
                            g = null
                        }
                    k(e, v, g = g || c, i, s, o, a, l, u), y = v.__e, (f = v.ref) && g.ref != f && (A || (A = []), g.ref && A.push(g.ref, null, v), A.push(f, v.__c || y, v)), null != y ? (null == E && (E = y), "function" == typeof v.type && v.__k === g.__k ? v.__d = l = S(v, l, e) : l = C(e, v, g, D, y, l), "function" == typeof n.type && (n.__d = l)) : l && g.__e == l && l.parentNode != e && (l = b(g))
                } for (n.__e = E, h = w; h--;) null != D[h] && N(D[h], D[h]);
            if (A)
                for (h = 0; h < A.length; h++) O(A[h], A[++h], A[++h])
        }

        function S(e, t, n) {
            for (var r, i = e.__k, s = 0; i && s < i.length; s++)(r = i[s]) && (r.__ = e, t = "function" == typeof r.type ? S(r, t, n) : C(n, r, r, i, r.__e, t));
            return t
        }

        function w(e, t) {
            return t = t || [], null == e || "boolean" == typeof e || (Array.isArray(e) ? e.some((function(e) {
                w(e, t)
            })) : t.push(e)), t
        }

        function C(e, t, n, r, i, s) {
            var o, a, l;
            if (void 0 !== t.__d) o = t.__d, t.__d = void 0;
            else if (null == n || i != s || null == i.parentNode) e: if (null == s || s.parentNode !== e) e.appendChild(i), o = null;
                else {
                    for (a = s, l = 0;
                        (a = a.nextSibling) && l < r.length; l += 1)
                        if (a == i) break e;
                    e.insertBefore(i, s), o = s
                } return void 0 !== o ? o : i.nextSibling
        }

        function x(e, t, n) {
            "-" === t[0] ? e.setProperty(t, n) : e[t] = null == n ? "" : "number" != typeof n || u.test(t) ? n : n + "px"
        }

        function _(e, t, n, r, i) {
            var s;
            e: if ("style" === t)
                if ("string" == typeof n) e.style.cssText = n;
                else {
                    if ("string" == typeof r && (e.style.cssText = r = ""), r)
                        for (t in r) n && t in n || x(e.style, t, "");
                    if (n)
                        for (t in n) r && n[t] === r[t] || x(e.style, t, n[t])
                }
            else if ("o" === t[0] && "n" === t[1]) s = t !== (t = t.replace(/Capture$/, "")), t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + s] = n, n ? r || e.addEventListener(t, s ? T : R, s) : e.removeEventListener(t, s ? T : R, s);
            else if ("dangerouslySetInnerHTML" !== t) {
                if (i) t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                else if ("href" !== t && "list" !== t && "form" !== t && "tabIndex" !== t && "download" !== t && t in e) try {
                    e[t] = null == n ? "" : n;
                    break e
                } catch (e) {}
                "function" == typeof n || (null == n || !1 === n && -1 == t.indexOf("-") ? e.removeAttribute(t) : e.setAttribute(t, n))
            }
        }

        function R(e) {
            this.l[e.type + !1](r.event ? r.event(e) : e)
        }

        function T(e) {
            this.l[e.type + !0](r.event ? r.event(e) : e)
        }

        function k(e, t, n, i, s, o, a, l, c) {
            var d, u, f, g, p, b, y, E, A, S, w, C, x, _, R, T = t.type;
            if (void 0 !== t.constructor) return null;
            null != n.__h && (c = n.__h, l = t.__e = n.__e, t.__h = null, o = [l]), (d = r.__b) && d(t);
            try {
                e: if ("function" == typeof T) {
                    if (E = t.props, A = (d = T.contextType) && i[d.__c], S = d ? A ? A.props.value : d.__ : i, n.__c ? y = (u = t.__c = n.__c).__ = u.__E : ("prototype" in T && T.prototype.render ? t.__c = u = new T(E, S) : (t.__c = u = new v(E, S), u.constructor = T, u.render = P), A && A.sub(u), u.props = E, u.state || (u.state = {}), u.context = S, u.__n = i, f = u.__d = !0, u.__h = [], u._sb = []), null == u.__s && (u.__s = u.state), null != T.getDerivedStateFromProps && (u.__s == u.state && (u.__s = h({}, u.__s)), h(u.__s, T.getDerivedStateFromProps(E, u.__s))), g = u.props, p = u.state, f) null == T.getDerivedStateFromProps && null != u.componentWillMount && u.componentWillMount(), null != u.componentDidMount && u.__h.push(u.componentDidMount);
                    else {
                        if (null == T.getDerivedStateFromProps && E !== g && null != u.componentWillReceiveProps && u.componentWillReceiveProps(E, S), !u.__e && null != u.shouldComponentUpdate && !1 === u.shouldComponentUpdate(E, u.__s, S) || t.__v === n.__v) {
                            for (u.props = E, u.state = u.__s, t.__v !== n.__v && (u.__d = !1), u.__v = t, t.__e = n.__e, t.__k = n.__k, t.__k.forEach((function(e) {
                                    e && (e.__ = t)
                                })), w = 0; w < u._sb.length; w++) u.__h.push(u._sb[w]);
                            u._sb = [], u.__h.length && a.push(u);
                            break e
                        }
                        null != u.componentWillUpdate && u.componentWillUpdate(E, u.__s, S), null != u.componentDidUpdate && u.__h.push((function() {
                            u.componentDidUpdate(g, p, b)
                        }))
                    }
                    if (u.context = S, u.props = E, u.__v = t, u.__P = e, C = r.__r, x = 0, "prototype" in T && T.prototype.render) {
                        for (u.state = u.__s, u.__d = !1, C && C(t), d = u.render(u.props, u.state, u.context), _ = 0; _ < u._sb.length; _++) u.__h.push(u._sb[_]);
                        u._sb = []
                    } else
                        do {
                            u.__d = !1, C && C(t), d = u.render(u.props, u.state, u.context), u.state = u.__s
                        } while (u.__d && ++x < 25);
                    u.state = u.__s, null != u.getChildContext && (i = h(h({}, i), u.getChildContext())), f || null == u.getSnapshotBeforeUpdate || (b = u.getSnapshotBeforeUpdate(g, p)), R = null != d && d.type === m && null == d.key ? d.props.children : d, D(e, Array.isArray(R) ? R : [R], t, n, i, s, o, a, l, c), u.base = t.__e, t.__h = null, u.__h.length && a.push(u), y && (u.__E = u.__ = null), u.__e = !1
                } else null == o && t.__v === n.__v ? (t.__k = n.__k, t.__e = n.__e) : t.__e = I(n.__e, t, n, i, s, o, a, c);
                (d = r.diffed) && d(t)
            }
            catch (e) {
                t.__v = null, (c || null != o) && (t.__e = l, t.__h = !!c, o[o.indexOf(l)] = null), r.__e(e, t, n)
            }
        }

        function M(e, t) {
            r.__c && r.__c(t, e), e.some((function(t) {
                try {
                    e = t.__h, t.__h = [], e.some((function(e) {
                        e.call(t)
                    }))
                } catch (e) {
                    r.__e(e, t.__v)
                }
            }))
        }

        function I(e, t, r, i, s, o, a, l) {
            var d, u, h, g = r.props,
                p = t.props,
                m = t.type,
                v = 0;
            if ("svg" === m && (s = !0), null != o)
                for (; v < o.length; v++)
                    if ((d = o[v]) && "setAttribute" in d == !!m && (m ? d.localName === m : 3 === d.nodeType)) {
                        e = d, o[v] = null;
                        break
                    } if (null == e) {
                if (null === m) return document.createTextNode(p);
                e = s ? document.createElementNS("http://www.w3.org/2000/svg", m) : document.createElement(m, p.is && p), o = null, l = !1
            }
            if (null === m) g === p || l && e.data === p || (e.data = p);
            else {
                if (o = o && n.call(e.childNodes), u = (g = r.props || c).dangerouslySetInnerHTML, h = p.dangerouslySetInnerHTML, !l) {
                    if (null != o)
                        for (g = {}, v = 0; v < e.attributes.length; v++) g[e.attributes[v].name] = e.attributes[v].value;
                    (h || u) && (h && (u && h.__html == u.__html || h.__html === e.innerHTML) || (e.innerHTML = h && h.__html || ""))
                }
                if (function(e, t, n, r, i) {
                        var s;
                        for (s in n) "children" === s || "key" === s || s in t || _(e, s, null, n[s], r);
                        for (s in t) i && "function" != typeof t[s] || "children" === s || "key" === s || "value" === s || "checked" === s || n[s] === t[s] || _(e, s, t[s], n[s], r)
                    }(e, p, g, s, l), h) t.__k = [];
                else if (v = t.props.children, D(e, Array.isArray(v) ? v : [v], t, r, i, s && "foreignObject" !== m, o, a, o ? o[0] : r.__k && b(r, 0), l), null != o)
                    for (v = o.length; v--;) null != o[v] && f(o[v]);
                l || ("value" in p && void 0 !== (v = p.value) && (v !== e.value || "progress" === m && !v || "option" === m && v !== g.value) && _(e, "value", v, g.value, !1), "checked" in p && void 0 !== (v = p.checked) && v !== e.checked && _(e, "checked", v, g.checked, !1))
            }
            return e
        }

        function O(e, t, n) {
            try {
                "function" == typeof e ? e(t) : e.current = t
            } catch (e) {
                r.__e(e, n)
            }
        }

        function N(e, t, n) {
            var i, s;
            if (r.unmount && r.unmount(e), (i = e.ref) && (i.current && i.current !== e.__e || O(i, null, t)), null != (i = e.__c)) {
                if (i.componentWillUnmount) try {
                    i.componentWillUnmount()
                } catch (e) {
                    r.__e(e, t)
                }
                i.base = i.__P = null, e.__c = void 0
            }
            if (i = e.__k)
                for (s = 0; s < i.length; s++) i[s] && N(i[s], t, n || "function" != typeof e.type);
            n || null == e.__e || f(e.__e), e.__ = e.__e = e.__d = void 0
        }

        function P(e, t, n) {
            return this.constructor(e, n)
        }

        function H(e, t, i) {
            var s, o, a;
            r.__ && r.__(e, t), o = (s = "function" == typeof i) ? null : i && i.__k || t.__k, a = [], k(t, e = (!s && i || t).__k = g(m, null, [e]), o || c, c, void 0 !== t.ownerSVGElement, !s && i ? [i] : o ? null : t.firstChild ? n.call(t.childNodes) : null, a, !s && i ? i : o ? o.__e : t.firstChild, s), M(a, e)
        }

        function B(e, t) {
            var n = {
                __c: t = "__cC" + l++,
                __: e,
                Consumer: function(e, t) {
                    return e.children(t)
                },
                Provider: function(e) {
                    var n, r;
                    return this.getChildContext || (n = [], (r = {})[t] = this, this.getChildContext = function() {
                        return r
                    }, this.shouldComponentUpdate = function(e) {
                        this.props.value !== e.value && n.some(E)
                    }, this.sub = function(e) {
                        n.push(e);
                        var t = e.componentWillUnmount;
                        e.componentWillUnmount = function() {
                            n.splice(n.indexOf(e), 1), t && t.call(e)
                        }
                    }), e.children
                }
            };
            return n.Provider.__ = n.Consumer.contextType = n
        }
        n = d.slice, r = {
            __e: function(e, t, n, r) {
                for (var i, s, o; t = t.__;)
                    if ((i = t.__c) && !i.__) try {
                        if ((s = i.constructor) && null != s.getDerivedStateFromError && (i.setState(s.getDerivedStateFromError(e)), o = i.__d), null != i.componentDidCatch && (i.componentDidCatch(e, r || {}), o = i.__d), o) return i.__E = i
                    } catch (t) {
                        e = t
                    }
                throw e
            }
        }, i = 0, s = function(e) {
            return null != e && void 0 === e.constructor
        }, v.prototype.setState = function(e, t) {
            var n;
            n = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h({}, this.state), "function" == typeof e && (e = e(h({}, n), this.props)), e && h(n, e), null != e && this.__v && (t && this._sb.push(t), E(this))
        }, v.prototype.forceUpdate = function(e) {
            this.__v && (this.__e = !0, e && this.__h.push(e), E(this))
        }, v.prototype.render = m, o = [], A.__r = 0, l = 0;
        var j, z, U, L = [],
            W = [],
            F = r.__b,
            V = r.__r,
            G = r.diffed,
            Q = r.__c,
            Y = r.unmount;

        function q() {
            for (var e; e = L.shift();)
                if (e.__P && e.__H) try {
                    e.__H.__h.forEach($), e.__H.__h.forEach(J), e.__H.__h = []
                } catch (t) {
                    e.__H.__h = [], r.__e(t, e.__v)
                }
        }
        r.__b = function(e) {
            j = null, F && F(e)
        }, r.__r = function(e) {
            V && V(e), 0;
            var t = (j = e.__c).__H;
            t && (z === j ? (t.__h = [], j.__h = [], t.__.forEach((function(e) {
                e.__N && (e.__ = e.__N), e.__V = W, e.__N = e.i = void 0
            }))) : (t.__h.forEach($), t.__h.forEach(J), t.__h = [])), z = j
        }, r.diffed = function(e) {
            G && G(e);
            var t = e.__c;
            t && t.__H && (t.__H.__h.length && (1 !== L.push(t) && U === r.requestAnimationFrame || ((U = r.requestAnimationFrame) || X)(q)), t.__H.__.forEach((function(e) {
                e.i && (e.__H = e.i), e.__V !== W && (e.__ = e.__V), e.i = void 0, e.__V = W
            }))), z = j = null
        }, r.__c = function(e, t) {
            t.some((function(e) {
                try {
                    e.__h.forEach($), e.__h = e.__h.filter((function(e) {
                        return !e.__ || J(e)
                    }))
                } catch (n) {
                    t.some((function(e) {
                        e.__h && (e.__h = [])
                    })), t = [], r.__e(n, e.__v)
                }
            })), Q && Q(e, t)
        }, r.unmount = function(e) {
            Y && Y(e);
            var t, n = e.__c;
            n && n.__H && (n.__H.__.forEach((function(e) {
                try {
                    $(e)
                } catch (e) {
                    t = e
                }
            })), n.__H = void 0, t && r.__e(t, n.__v))
        };
        var Z = "function" == typeof requestAnimationFrame;

        function X(e) {
            var t, n = function() {
                    clearTimeout(r), Z && cancelAnimationFrame(t), setTimeout(e)
                },
                r = setTimeout(n, 100);
            Z && (t = requestAnimationFrame(n))
        }

        function $(e) {
            var t = j,
                n = e.__c;
            "function" == typeof n && (e.__c = void 0, n()), j = t
        }

        function J(e) {
            var t = j;
            e.__c = e.__(), j = t
        }

        function K(e, t) {
            for (var n in t) e[n] = t[n];
            return e
        }

        function ee(e, t) {
            for (var n in e)
                if ("__source" !== n && !(n in t)) return !0;
            for (var r in t)
                if ("__source" !== r && e[r] !== t[r]) return !0;
            return !1
        }

        function te(e) {
            this.props = e
        }(te.prototype = new v).isPureReactComponent = !0, te.prototype.shouldComponentUpdate = function(e, t) {
            return ee(this.props, e) || ee(this.state, t)
        };
        var ne = r.__b;
        r.__b = function(e) {
            e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), ne && ne(e)
        };
        "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref");
        var re = r.__e;
        r.__e = function(e, t, n, r) {
            if (e.then)
                for (var i, s = t; s = s.__;)
                    if ((i = s.__c) && i.__c) return null == t.__e && (t.__e = n.__e, t.__k = n.__k), i.__c(e, t);
            re(e, t, n, r)
        };
        var ie = r.unmount;

        function se(e, t, n) {
            return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach((function(e) {
                "function" == typeof e.__c && e.__c()
            })), e.__c.__H = null), null != (e = K({}, e)).__c && (e.__c.__P === n && (e.__c.__P = t), e.__c = null), e.__k = e.__k && e.__k.map((function(e) {
                return se(e, t, n)
            }))), e
        }

        function oe(e, t, n) {
            return e && (e.__v = null, e.__k = e.__k && e.__k.map((function(e) {
                return oe(e, t, n)
            })), e.__c && e.__c.__P === t && (e.__e && n.insertBefore(e.__e, e.__d), e.__c.__e = !0, e.__c.__P = n)), e
        }

        function ae() {
            this.__u = 0, this.t = null, this.__b = null
        }

        function le(e) {
            var t = e.__.__c;
            return t && t.__a && t.__a(e)
        }

        function ce() {
            this.u = null, this.o = null
        }
        r.unmount = function(e) {
            var t = e.__c;
            t && t.__R && t.__R(), t && !0 === e.__h && (e.type = null), ie && ie(e)
        }, (ae.prototype = new v).__c = function(e, t) {
            var n = t.__c,
                r = this;
            null == r.t && (r.t = []), r.t.push(n);
            var i = le(r.__v),
                s = !1,
                o = function() {
                    s || (s = !0, n.__R = null, i ? i(a) : a())
                };
            n.__R = o;
            var a = function() {
                    if (!--r.__u) {
                        if (r.state.__a) {
                            var e = r.state.__a;
                            r.__v.__k[0] = oe(e, e.__c.__P, e.__c.__O)
                        }
                        var t;
                        for (r.setState({
                                __a: r.__b = null
                            }); t = r.t.pop();) t.forceUpdate()
                    }
                },
                l = !0 === t.__h;
            r.__u++ || l || r.setState({
                __a: r.__b = r.__v.__k[0]
            }), e.then(o, o)
        }, ae.prototype.componentWillUnmount = function() {
            this.t = []
        }, ae.prototype.render = function(e, t) {
            if (this.__b) {
                if (this.__v.__k) {
                    var n = document.createElement("div"),
                        r = this.__v.__k[0].__c;
                    this.__v.__k[0] = se(this.__b, n, r.__O = r.__P)
                }
                this.__b = null
            }
            var i = t.__a && g(m, null, e.fallback);
            return i && (i.__h = null), [g(m, null, t.__a ? null : e.children), i]
        };
        var de = function(e, t, n) {
            if (++n[1] === n[0] && e.o.delete(t), e.props.revealOrder && ("t" !== e.props.revealOrder[0] || !e.o.size))
                for (n = e.u; n;) {
                    for (; n.length > 3;) n.pop()();
                    if (n[1] < n[0]) break;
                    e.u = n = n[2]
                }
        };

        function ue(e) {
            return this.getChildContext = function() {
                return e.context
            }, e.children
        }

        function he(e) {
            var t = this,
                n = e.i;
            t.componentWillUnmount = function() {
                H(null, t.l), t.l = null, t.i = null
            }, t.i && t.i !== n && t.componentWillUnmount(), e.__v ? (t.l || (t.i = n, t.l = {
                nodeType: 1,
                parentNode: n,
                childNodes: [],
                appendChild: function(e) {
                    this.childNodes.push(e), t.i.appendChild(e)
                },
                insertBefore: function(e, n) {
                    this.childNodes.push(e), t.i.appendChild(e)
                },
                removeChild: function(e) {
                    this.childNodes.splice(this.childNodes.indexOf(e) >>> 1, 1), t.i.removeChild(e)
                }
            }), H(g(ue, {
                context: t.context
            }, e.__v), t.l)) : t.l && t.componentWillUnmount()
        }

        function fe(e, t) {
            var n = g(he, {
                __v: e,
                i: t
            });
            return n.containerInfo = t, n
        }(ce.prototype = new v).__a = function(e) {
            var t = this,
                n = le(t.__v),
                r = t.o.get(e);
            return r[0]++,
                function(i) {
                    var s = function() {
                        t.props.revealOrder ? (r.push(i), de(t, e, r)) : i()
                    };
                    n ? n(s) : s()
                }
        }, ce.prototype.render = function(e) {
            this.u = null, this.o = new Map;
            var t = w(e.children);
            e.revealOrder && "b" === e.revealOrder[0] && t.reverse();
            for (var n = t.length; n--;) this.o.set(t[n], this.u = [1, 0, this.u]);
            return e.children
        }, ce.prototype.componentDidUpdate = ce.prototype.componentDidMount = function() {
            var e = this;
            this.o.forEach((function(t, n) {
                de(e, n, t)
            }))
        };
        var ge = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
            pe = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
            me = "undefined" != typeof document,
            ve = function(e) {
                return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/i : /fil|che|ra/i).test(e)
            };
        v.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(e) {
            Object.defineProperty(v.prototype, e, {
                configurable: !0,
                get: function() {
                    return this["UNSAFE_" + e]
                },
                set: function(t) {
                    Object.defineProperty(this, e, {
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        }));
        var be = r.event;

        function ye() {}

        function Ee() {
            return this.cancelBubble
        }

        function Ae() {
            return this.defaultPrevented
        }
        r.event = function(e) {
            return be && (e = be(e)), e.persist = ye, e.isPropagationStopped = Ee, e.isDefaultPrevented = Ae, e.nativeEvent = e
        };
        var De = {
                configurable: !0,
                get: function() {
                    return this.class
                }
            },
            Se = r.vnode;
        r.vnode = function(e) {
            var t = e.type,
                n = e.props,
                r = n;
            if ("string" == typeof t) {
                var i = -1 === t.indexOf("-");
                for (var s in r = {}, n) {
                    var o = n[s];
                    me && "children" === s && "noscript" === t || "value" === s && "defaultValue" in n && null == o || ("defaultValue" === s && "value" in n && null == n.value ? s = "value" : "download" === s && !0 === o ? o = "" : /ondoubleclick/i.test(s) ? s = "ondblclick" : /^onchange(textarea|input)/i.test(s + t) && !ve(n.type) ? s = "oninput" : /^onfocus$/i.test(s) ? s = "onfocusin" : /^onblur$/i.test(s) ? s = "onfocusout" : /^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s) ? s = s.toLowerCase() : i && pe.test(s) ? s = s.replace(/[A-Z0-9]/g, "-$&").toLowerCase() : null === o && (o = void 0), /^oninput$/i.test(s) && (s = s.toLowerCase(), r[s] && (s = "oninputCapture")), r[s] = o)
                }
                "select" == t && r.multiple && Array.isArray(r.value) && (r.value = w(n.children).forEach((function(e) {
                    e.props.selected = -1 != r.value.indexOf(e.props.value)
                }))), "select" == t && null != r.defaultValue && (r.value = w(n.children).forEach((function(e) {
                    e.props.selected = r.multiple ? -1 != r.defaultValue.indexOf(e.props.value) : r.defaultValue == e.props.value
                }))), e.props = r, n.class != n.className && (De.enumerable = "className" in n, null != n.className && (r.class = n.className), Object.defineProperty(r, "className", De))
            }
            e.$$typeof = ge, Se && Se(e)
        };
        var we = r.__r;
        r.__r = function(e) {
            we && we(e), e.__c
        };

        function Ce(e) {
            e.parentNode && e.parentNode.removeChild(e)
        }

        function xe(e, t) {
            if (e.closest) return e.closest(t);
            if (!document.documentElement.contains(e)) return null;
            do {
                if (_e(e, t)) return e;
                e = e.parentElement || e.parentNode
            } while (null !== e && 1 === e.nodeType);
            return null
        }

        function _e(e, t) {
            return (e.matches || e.matchesSelector || e.msMatchesSelector).call(e, t)
        }
        const Re = /(top|left|right|bottom|width|height)$/i;

        function Te(e, t) {
            for (let n in t) ke(e, n, t[n])
        }

        function ke(e, t, n) {
            null == n ? e.style[t] = "" : "number" == typeof n && Re.test(t) ? e.style[t] = `${n}px` : e.style[t] = n
        }

        function Me(e) {
            var t, n;
            return null !== (n = null === (t = e.composedPath) || void 0 === t ? void 0 : t.call(e)[0]) && void 0 !== n ? n : e.target
        }

        function Ie(e) {
            return e.getRootNode ? e.getRootNode() : document
        }
        let Oe = 0;

        function Ne() {
            return Oe += 1, "fc-dom-" + Oe
        }

        function Pe(e) {
            e.preventDefault()
        }

        function He(e, t, n, r) {
            let i = function(e, t) {
                return n => {
                    let r = xe(n.target, e);
                    r && t.call(r, n, r)
                }
            }(n, r);
            return e.addEventListener(t, i), () => {
                e.removeEventListener(t, i)
            }
        }
        const Be = ["webkitTransitionEnd", "otransitionend", "oTransitionEnd", "msTransitionEnd", "transitionend"];

        function je(e) {
            return Object.assign({
                onClick: e
            }, ze(e))
        }

        function ze(e) {
            return {
                tabIndex: 0,
                onKeyDown(t) {
                    "Enter" !== t.key && " " !== t.key || (e(t), t.preventDefault())
                }
            }
        }
        let Ue = 0;

        function Le() {
            return Ue += 1, String(Ue)
        }

        function We() {
            document.body.classList.add("fc-not-allowed")
        }

        function Fe() {
            document.body.classList.remove("fc-not-allowed")
        }

        function Ve(e, t, n) {
            return n.func ? n.func(e, t) : function(e, t) {
                if (!e && !t) return 0;
                if (null == t) return -1;
                if (null == e) return 1;
                if ("string" == typeof e || "string" == typeof t) return String(e).localeCompare(String(t));
                return e - t
            }(e[n.field], t[n.field]) * (n.order || 1)
        }

        function Ge(e, t) {
            let n = String(e);
            return "000".substr(0, t - n.length) + n
        }

        function Qe(e, t, n) {
            return "function" == typeof e ? e(...t) : "string" == typeof e ? t.reduce(((e, t, n) => e.replace("$" + n, t || "")), e) : n
        }

        function Ye(e, t) {
            return e - t
        }

        function qe(e) {
            return e % 1 == 0
        }

        function Ze(e) {
            let t = e.querySelector(".fc-scrollgrid-shrink-frame"),
                n = e.querySelector(".fc-scrollgrid-shrink-cushion");
            if (!t) throw new Error("needs fc-scrollgrid-shrink-frame className");
            if (!n) throw new Error("needs fc-scrollgrid-shrink-cushion className");
            return e.getBoundingClientRect().width - t.getBoundingClientRect().width + n.getBoundingClientRect().width
        }
        const Xe = ["years", "months", "days", "milliseconds"],
            $e = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;

        function Je(e, t) {
            return "string" == typeof e ? function(e) {
                let t = $e.exec(e);
                if (t) {
                    let e = t[1] ? -1 : 1;
                    return {
                        years: 0,
                        months: 0,
                        days: e * (t[2] ? parseInt(t[2], 10) : 0),
                        milliseconds: e * (60 * (t[3] ? parseInt(t[3], 10) : 0) * 60 * 1e3 + 60 * (t[4] ? parseInt(t[4], 10) : 0) * 1e3 + 1e3 * (t[5] ? parseInt(t[5], 10) : 0) + (t[6] ? parseInt(t[6], 10) : 0))
                    }
                }
                return null
            }(e) : "object" == typeof e && e ? Ke(e) : "number" == typeof e ? Ke({
                [t || "milliseconds"]: e
            }) : null
        }

        function Ke(e) {
            let t = {
                    years: e.years || e.year || 0,
                    months: e.months || e.month || 0,
                    days: e.days || e.day || 0,
                    milliseconds: 60 * (e.hours || e.hour || 0) * 60 * 1e3 + 60 * (e.minutes || e.minute || 0) * 1e3 + 1e3 * (e.seconds || e.second || 0) + (e.milliseconds || e.millisecond || e.ms || 0)
                },
                n = e.weeks || e.week;
            return n && (t.days += 7 * n, t.specifiedWeeks = !0), t
        }

        function et(e, t) {
            return {
                years: e.years + t.years,
                months: e.months + t.months,
                days: e.days + t.days,
                milliseconds: e.milliseconds + t.milliseconds
            }
        }

        function tt(e) {
            return nt(e) / 864e5
        }

        function nt(e) {
            return 31536e6 * e.years + 2592e6 * e.months + 864e5 * e.days + e.milliseconds
        }

        function rt(e, t) {
            let n = null;
            for (let r = 0; r < Xe.length; r += 1) {
                let i = Xe[r];
                if (t[i]) {
                    let r = e[i] / t[i];
                    if (!qe(r) || null !== n && n !== r) return null;
                    n = r
                } else if (e[i]) return null
            }
            return n
        }

        function it(e) {
            let t = e.milliseconds;
            if (t) {
                if (t % 1e3 != 0) return {
                    unit: "millisecond",
                    value: t
                };
                if (t % 6e4 != 0) return {
                    unit: "second",
                    value: t / 1e3
                };
                if (t % 36e5 != 0) return {
                    unit: "minute",
                    value: t / 6e4
                };
                if (t) return {
                    unit: "hour",
                    value: t / 36e5
                }
            }
            return e.days ? e.specifiedWeeks && e.days % 7 == 0 ? {
                unit: "week",
                value: e.days / 7
            } : {
                unit: "day",
                value: e.days
            } : e.months ? {
                unit: "month",
                value: e.months
            } : e.years ? {
                unit: "year",
                value: e.years
            } : {
                unit: "millisecond",
                value: 0
            }
        }
        const {
            hasOwnProperty: st
        } = Object.prototype;

        function ot(e, t) {
            let n = {};
            if (t)
                for (let r in t) {
                    let t = [];
                    for (let i = e.length - 1; i >= 0; i -= 1) {
                        let s = e[i][r];
                        if ("object" == typeof s && s) t.unshift(s);
                        else if (void 0 !== s) {
                            n[r] = s;
                            break
                        }
                    }
                    t.length && (n[r] = ot(t))
                }
            for (let t = e.length - 1; t >= 0; t -= 1) {
                let r = e[t];
                for (let e in r) e in n || (n[e] = r[e])
            }
            return n
        }

        function at(e, t) {
            let n = {};
            for (let r in e) t(e[r], r) && (n[r] = e[r]);
            return n
        }

        function lt(e, t) {
            let n = {};
            for (let r in e) n[r] = t(e[r], r);
            return n
        }

        function ct(e) {
            let t = {};
            for (let n of e) t[n] = !0;
            return t
        }

        function dt(e) {
            let t = [];
            for (let n in e) t.push(e[n]);
            return t
        }

        function ut(e, t) {
            if (e === t) return !0;
            for (let n in e)
                if (st.call(e, n) && !(n in t)) return !1;
            for (let n in t)
                if (st.call(t, n) && e[n] !== t[n]) return !1;
            return !0
        }
        const ht = /^on[A-Z]/;

        function ft(e, t) {
            let n = [];
            for (let r in e) st.call(e, r) && (r in t || n.push(r));
            for (let r in t) st.call(t, r) && e[r] !== t[r] && n.push(r);
            return n
        }

        function gt(e, t, n = {}) {
            if (e === t) return !0;
            for (let r in t)
                if (!(r in e) || !pt(e[r], t[r], n[r])) return !1;
            for (let n in e)
                if (!(n in t)) return !1;
            return !0
        }

        function pt(e, t, n) {
            return e === t || !0 === n || !!n && n(e, t)
        }
        const mt = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

        function vt(e, t) {
            let n = _t(e);
            return n[2] += 7 * t, Rt(n)
        }

        function bt(e, t) {
            let n = _t(e);
            return n[2] += t, Rt(n)
        }

        function yt(e, t) {
            let n = _t(e);
            return n[6] += t, Rt(n)
        }

        function Et(e, t) {
            return (t.valueOf() - e.valueOf()) / 864e5
        }

        function At(e, t) {
            return kt(e) === kt(t) ? Math.round(Et(e, t)) : null
        }

        function Dt(e) {
            return Rt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()])
        }

        function St(e, t, n, r) {
            let i = Rt([t, 0, 1 + wt(t, n, r)]),
                s = Dt(e),
                o = Math.round(Et(i, s));
            return Math.floor(o / 7) + 1
        }

        function wt(e, t, n) {
            let r = 7 + t - n;
            return -((7 + Rt([e, 0, r]).getUTCDay() - t) % 7) + r - 1
        }

        function Ct(e) {
            return [e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()]
        }

        function xt(e) {
            return new Date(e[0], e[1] || 0, null == e[2] ? 1 : e[2], e[3] || 0, e[4] || 0, e[5] || 0)
        }

        function _t(e) {
            return [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds(), e.getUTCMilliseconds()]
        }

        function Rt(e) {
            return 1 === e.length && (e = e.concat([0])), new Date(Date.UTC(...e))
        }

        function Tt(e) {
            return !isNaN(e.valueOf())
        }

        function kt(e) {
            return 1e3 * e.getUTCHours() * 60 * 60 + 1e3 * e.getUTCMinutes() * 60 + 1e3 * e.getUTCSeconds() + e.getUTCMilliseconds()
        }

        function Mt(e, t, n = !1) {
            let r = e.toISOString();
            return r = r.replace(".000", ""), n && (r = r.replace("T00:00:00Z", "")), r.length > 10 && (null == t ? r = r.replace("Z", "") : 0 !== t && (r = r.replace("Z", Ot(t, !0)))), r
        }

        function It(e) {
            return e.toISOString().replace(/T.*$/, "")
        }

        function Ot(e, t = !1) {
            let n = e < 0 ? "-" : "+",
                r = Math.abs(e),
                i = Math.floor(r / 60),
                s = Math.round(r % 60);
            return t ? `${n+Ge(i,2)}:${Ge(s,2)}` : `GMT${n}${i}${s?`:${Ge(s,2)}`:""}`
        }

        function Nt(e, t, n) {
            if (e === t) return !0;
            let r, i = e.length;
            if (i !== t.length) return !1;
            for (r = 0; r < i; r += 1)
                if (!(n ? n(e[r], t[r]) : e[r] === t[r])) return !1;
            return !0
        }

        function Pt(e, t, n) {
            let r, i;
            return function(...s) {
                if (r) {
                    if (!Nt(r, s)) {
                        n && n(i);
                        let r = e.apply(this, s);
                        t && t(r, i) || (i = r)
                    }
                } else i = e.apply(this, s);
                return r = s, i
            }
        }

        function Ht(e, t, n) {
            let r, i;
            return s => {
                if (r) {
                    if (!ut(r, s)) {
                        n && n(i);
                        let r = e.call(this, s);
                        t && t(r, i) || (i = r)
                    }
                } else i = e.call(this, s);
                return r = s, i
            }
        }
        const Bt = {
                week: 3,
                separator: 0,
                omitZeroMinute: 0,
                meridiem: 0,
                omitCommas: 0
            },
            jt = {
                timeZoneName: 7,
                era: 6,
                year: 5,
                month: 4,
                day: 2,
                weekday: 2,
                hour: 1,
                minute: 1,
                second: 1
            },
            zt = /\s*([ap])\.?m\.?/i,
            Ut = /,/g,
            Lt = /\s+/g,
            Wt = /\u200e/g,
            Ft = /UTC|GMT/;
        class Vt {
            constructor(e) {
                let t = {},
                    n = {},
                    r = 0;
                for (let i in e) i in Bt ? (n[i] = e[i], r = Math.max(Bt[i], r)) : (t[i] = e[i], i in jt && (r = Math.max(jt[i], r)));
                this.standardDateProps = t, this.extendedSettings = n, this.severity = r, this.buildFormattingFunc = Pt(Gt)
            }
            format(e, t) {
                return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, t)(e)
            }
            formatRange(e, t, n, r) {
                let {
                    standardDateProps: i,
                    extendedSettings: s
                } = this, o = function(e, t, n) {
                    if (n.getMarkerYear(e) !== n.getMarkerYear(t)) return 5;
                    if (n.getMarkerMonth(e) !== n.getMarkerMonth(t)) return 4;
                    if (n.getMarkerDay(e) !== n.getMarkerDay(t)) return 2;
                    if (kt(e) !== kt(t)) return 1;
                    return 0
                }(e.marker, t.marker, n.calendarSystem);
                if (!o) return this.format(e, n);
                let a = o;
                !(a > 1) || "numeric" !== i.year && "2-digit" !== i.year || "numeric" !== i.month && "2-digit" !== i.month || "numeric" !== i.day && "2-digit" !== i.day || (a = 1);
                let l = this.format(e, n),
                    c = this.format(t, n);
                if (l === c) return l;
                let d = Gt(function(e, t) {
                        let n = {};
                        for (let r in e)(!(r in jt) || jt[r] <= t) && (n[r] = e[r]);
                        return n
                    }(i, a), s, n),
                    u = d(e),
                    h = d(t),
                    f = function(e, t, n, r) {
                        let i = 0;
                        for (; i < e.length;) {
                            let s = e.indexOf(t, i);
                            if (-1 === s) break;
                            let o = e.substr(0, s);
                            i = s + t.length;
                            let a = e.substr(i),
                                l = 0;
                            for (; l < n.length;) {
                                let e = n.indexOf(r, l);
                                if (-1 === e) break;
                                let t = n.substr(0, e);
                                l = e + r.length;
                                let i = n.substr(l);
                                if (o === t && a === i) return {
                                    before: o,
                                    after: a
                                }
                            }
                        }
                        return null
                    }(l, u, c, h),
                    g = s.separator || r || n.defaultSeparator || "";
                return f ? f.before + u + g + h + f.after : l + g + c
            }
            getLargestUnit() {
                switch (this.severity) {
                    case 7:
                    case 6:
                    case 5:
                        return "year";
                    case 4:
                        return "month";
                    case 3:
                        return "week";
                    case 2:
                        return "day";
                    default:
                        return "time"
                }
            }
        }

        function Gt(e, t, n) {
            let r = Object.keys(e).length;
            return 1 === r && "short" === e.timeZoneName ? e => Ot(e.timeZoneOffset) : 0 === r && t.week ? e => function(e, t, n, r, i) {
                let s = [];
                "long" === i ? s.push(n) : "short" !== i && "narrow" !== i || s.push(t);
                "long" !== i && "short" !== i || s.push(" ");
                s.push(r.simpleNumberFormat.format(e)), "rtl" === r.options.direction && s.reverse();
                return s.join("")
            }(n.computeWeekNumber(e.marker), n.weekText, n.weekTextLong, n.locale, t.week) : function(e, t, n) {
                e = Object.assign({}, e), t = Object.assign({}, t),
                    function(e, t) {
                        e.timeZoneName && (e.hour || (e.hour = "2-digit"), e.minute || (e.minute = "2-digit"));
                        "long" === e.timeZoneName && (e.timeZoneName = "short");
                        t.omitZeroMinute && (e.second || e.millisecond) && delete t.omitZeroMinute
                    }(e, t), e.timeZone = "UTC";
                let r, i = new Intl.DateTimeFormat(n.locale.codes, e);
                if (t.omitZeroMinute) {
                    let t = Object.assign({}, e);
                    delete t.minute, r = new Intl.DateTimeFormat(n.locale.codes, t)
                }
                return s => {
                    let o, {
                        marker: a
                    } = s;
                    return o = r && !a.getUTCMinutes() ? r : i,
                        function(e, t, n, r, i) {
                            e = e.replace(Wt, ""), "short" === n.timeZoneName && (e = function(e, t) {
                                let n = !1;
                                e = e.replace(Ft, (() => (n = !0, t))), n || (e += ` ${t}`);
                                return e
                            }(e, "UTC" === i.timeZone || null == t.timeZoneOffset ? "UTC" : Ot(t.timeZoneOffset)));
                            r.omitCommas && (e = e.replace(Ut, "").trim());
                            r.omitZeroMinute && (e = e.replace(":00", ""));
                            !1 === r.meridiem ? e = e.replace(zt, "").trim() : "narrow" === r.meridiem ? e = e.replace(zt, ((e, t) => t.toLocaleLowerCase())) : "short" === r.meridiem ? e = e.replace(zt, ((e, t) => `${t.toLocaleLowerCase()}m`)) : "lowercase" === r.meridiem && (e = e.replace(zt, (e => e.toLocaleLowerCase())));
                            return e = e.replace(Lt, " "), e = e.trim(), e
                        }(o.format(a), s, e, t, n)
                }
            }(e, t, n)
        }

        function Qt(e, t) {
            let n = t.markerToArray(e.marker);
            return {
                marker: e.marker,
                timeZoneOffset: e.timeZoneOffset,
                array: n,
                year: n[0],
                month: n[1],
                day: n[2],
                hour: n[3],
                minute: n[4],
                second: n[5],
                millisecond: n[6]
            }
        }

        function Yt(e, t, n, r) {
            let i = Qt(e, n.calendarSystem);
            return {
                date: i,
                start: i,
                end: t ? Qt(t, n.calendarSystem) : null,
                timeZone: n.timeZone,
                localeCodes: n.locale.codes,
                defaultSeparator: r || n.defaultSeparator
            }
        }
        class qt {
            constructor(e) {
                this.cmdStr = e
            }
            format(e, t, n) {
                return t.cmdFormatter(this.cmdStr, Yt(e, null, t, n))
            }
            formatRange(e, t, n, r) {
                return n.cmdFormatter(this.cmdStr, Yt(e, t, n, r))
            }
        }
        class Zt {
            constructor(e) {
                this.func = e
            }
            format(e, t, n) {
                return this.func(Yt(e, null, t, n))
            }
            formatRange(e, t, n, r) {
                return this.func(Yt(e, t, n, r))
            }
        }

        function Xt(e) {
            return "object" == typeof e && e ? new Vt(e) : "string" == typeof e ? new qt(e) : "function" == typeof e ? new Zt(e) : null
        }
        const $t = {
                navLinkDayClick: an,
                navLinkWeekClick: an,
                duration: Je,
                bootstrapFontAwesome: an,
                buttonIcons: an,
                customButtons: an,
                defaultAllDayEventDuration: Je,
                defaultTimedEventDuration: Je,
                nextDayThreshold: Je,
                scrollTime: Je,
                scrollTimeReset: Boolean,
                slotMinTime: Je,
                slotMaxTime: Je,
                dayPopoverFormat: Xt,
                slotDuration: Je,
                snapDuration: Je,
                headerToolbar: an,
                footerToolbar: an,
                defaultRangeSeparator: String,
                titleRangeSeparator: String,
                forceEventDuration: Boolean,
                dayHeaders: Boolean,
                dayHeaderFormat: Xt,
                dayHeaderClassNames: an,
                dayHeaderContent: an,
                dayHeaderDidMount: an,
                dayHeaderWillUnmount: an,
                dayCellClassNames: an,
                dayCellContent: an,
                dayCellDidMount: an,
                dayCellWillUnmount: an,
                initialView: String,
                aspectRatio: Number,
                weekends: Boolean,
                weekNumberCalculation: an,
                weekNumbers: Boolean,
                weekNumberClassNames: an,
                weekNumberContent: an,
                weekNumberDidMount: an,
                weekNumberWillUnmount: an,
                editable: Boolean,
                viewClassNames: an,
                viewDidMount: an,
                viewWillUnmount: an,
                nowIndicator: Boolean,
                nowIndicatorClassNames: an,
                nowIndicatorContent: an,
                nowIndicatorDidMount: an,
                nowIndicatorWillUnmount: an,
                showNonCurrentDates: Boolean,
                lazyFetching: Boolean,
                startParam: String,
                endParam: String,
                timeZoneParam: String,
                timeZone: String,
                locales: an,
                locale: an,
                themeSystem: String,
                dragRevertDuration: Number,
                dragScroll: Boolean,
                allDayMaintainDuration: Boolean,
                unselectAuto: Boolean,
                dropAccept: an,
                eventOrder: function(e) {
                    let t, n, r = [],
                        i = [];
                    for ("string" == typeof e ? i = e.split(/\s*,\s*/) : "function" == typeof e ? i = [e] : Array.isArray(e) && (i = e), t = 0; t < i.length; t += 1) n = i[t], "string" == typeof n ? r.push("-" === n.charAt(0) ? {
                        field: n.substring(1),
                        order: -1
                    } : {
                        field: n,
                        order: 1
                    }) : "function" == typeof n && r.push({
                        func: n
                    });
                    return r
                },
                eventOrderStrict: Boolean,
                handleWindowResize: Boolean,
                windowResizeDelay: Number,
                longPressDelay: Number,
                eventDragMinDistance: Number,
                expandRows: Boolean,
                height: an,
                contentHeight: an,
                direction: String,
                weekNumberFormat: Xt,
                eventResizableFromStart: Boolean,
                displayEventTime: Boolean,
                displayEventEnd: Boolean,
                weekText: String,
                weekTextLong: String,
                progressiveEventRendering: Boolean,
                businessHours: an,
                initialDate: an,
                now: an,
                eventDataTransform: an,
                stickyHeaderDates: an,
                stickyFooterScrollbar: an,
                viewHeight: an,
                defaultAllDay: Boolean,
                eventSourceFailure: an,
                eventSourceSuccess: an,
                eventDisplay: String,
                eventStartEditable: Boolean,
                eventDurationEditable: Boolean,
                eventOverlap: an,
                eventConstraint: an,
                eventAllow: an,
                eventBackgroundColor: String,
                eventBorderColor: String,
                eventTextColor: String,
                eventColor: String,
                eventClassNames: an,
                eventContent: an,
                eventDidMount: an,
                eventWillUnmount: an,
                selectConstraint: an,
                selectOverlap: an,
                selectAllow: an,
                droppable: Boolean,
                unselectCancel: String,
                slotLabelFormat: an,
                slotLaneClassNames: an,
                slotLaneContent: an,
                slotLaneDidMount: an,
                slotLaneWillUnmount: an,
                slotLabelClassNames: an,
                slotLabelContent: an,
                slotLabelDidMount: an,
                slotLabelWillUnmount: an,
                dayMaxEvents: an,
                dayMaxEventRows: an,
                dayMinWidth: Number,
                slotLabelInterval: Je,
                allDayText: String,
                allDayClassNames: an,
                allDayContent: an,
                allDayDidMount: an,
                allDayWillUnmount: an,
                slotMinWidth: Number,
                navLinks: Boolean,
                eventTimeFormat: Xt,
                rerenderDelay: Number,
                moreLinkText: an,
                moreLinkHint: an,
                selectMinDistance: Number,
                selectable: Boolean,
                selectLongPressDelay: Number,
                eventLongPressDelay: Number,
                selectMirror: Boolean,
                eventMaxStack: Number,
                eventMinHeight: Number,
                eventMinWidth: Number,
                eventShortHeight: Number,
                slotEventOverlap: Boolean,
                plugins: an,
                firstDay: Number,
                dayCount: Number,
                dateAlignment: String,
                dateIncrement: Je,
                hiddenDays: an,
                monthMode: Boolean,
                fixedWeekCount: Boolean,
                validRange: an,
                visibleRange: an,
                titleFormat: an,
                eventInteractive: Boolean,
                noEventsText: String,
                viewHint: an,
                navLinkHint: an,
                closeHint: String,
                timeHint: String,
                eventHint: String,
                moreLinkClick: an,
                moreLinkClassNames: an,
                moreLinkContent: an,
                moreLinkDidMount: an,
                moreLinkWillUnmount: an,
                handleCustomRendering: an,
                customRenderingMetaMap: an,
                customRenderingReplacesEl: Boolean
            },
            Jt = {
                eventDisplay: "auto",
                defaultRangeSeparator: " - ",
                titleRangeSeparator: " – ",
                defaultTimedEventDuration: "01:00:00",
                defaultAllDayEventDuration: {
                    day: 1
                },
                forceEventDuration: !1,
                nextDayThreshold: "00:00:00",
                dayHeaders: !0,
                initialView: "",
                aspectRatio: 1.35,
                headerToolbar: {
                    start: "title",
                    center: "",
                    end: "today prev,next"
                },
                weekends: !0,
                weekNumbers: !1,
                weekNumberCalculation: "local",
                editable: !1,
                nowIndicator: !1,
                scrollTime: "06:00:00",
                scrollTimeReset: !0,
                slotMinTime: "00:00:00",
                slotMaxTime: "24:00:00",
                showNonCurrentDates: !0,
                lazyFetching: !0,
                startParam: "start",
                endParam: "end",
                timeZoneParam: "timeZone",
                timeZone: "local",
                locales: [],
                locale: "",
                themeSystem: "standard",
                dragRevertDuration: 500,
                dragScroll: !0,
                allDayMaintainDuration: !1,
                unselectAuto: !0,
                dropAccept: "*",
                eventOrder: "start,-duration,allDay,title",
                dayPopoverFormat: {
                    month: "long",
                    day: "numeric",
                    year: "numeric"
                },
                handleWindowResize: !0,
                windowResizeDelay: 100,
                longPressDelay: 1e3,
                eventDragMinDistance: 5,
                expandRows: !1,
                navLinks: !1,
                selectable: !1,
                eventMinHeight: 15,
                eventMinWidth: 30,
                eventShortHeight: 30
            },
            Kt = {
                datesSet: an,
                eventsSet: an,
                eventAdd: an,
                eventChange: an,
                eventRemove: an,
                windowResize: an,
                eventClick: an,
                eventMouseEnter: an,
                eventMouseLeave: an,
                select: an,
                unselect: an,
                loading: an,
                _unmount: an,
                _beforeprint: an,
                _afterprint: an,
                _noEventDrop: an,
                _noEventResize: an,
                _resize: an,
                _scrollRequest: an
            },
            en = {
                buttonText: an,
                buttonHints: an,
                views: an,
                plugins: an,
                initialEvents: an,
                events: an,
                eventSources: an
            },
            tn = {
                headerToolbar: nn,
                footerToolbar: nn,
                buttonText: nn,
                buttonHints: nn,
                buttonIcons: nn,
                dateIncrement: nn
            };

        function nn(e, t) {
            return "object" == typeof e && "object" == typeof t && e && t ? ut(e, t) : e === t
        }
        const rn = {
            type: String,
            component: an,
            buttonText: String,
            buttonTextKey: String,
            dateProfileGeneratorClass: an,
            usesMinMaxTime: Boolean,
            classNames: an,
            content: an,
            didMount: an,
            willUnmount: an
        };

        function sn(e) {
            return ot(e, tn)
        }

        function on(e, t) {
            let n = {},
                r = {};
            for (let r in t) r in e && (n[r] = t[r](e[r]));
            for (let n in e) n in t || (r[n] = e[n]);
            return {
                refined: n,
                extra: r
            }
        }

        function an(e) {
            return e
        }

        function ln(e, t, n, r) {
            return {
                instanceId: Le(),
                defId: e,
                range: t,
                forcedStartTzo: null == n ? null : n,
                forcedEndTzo: null == r ? null : r
            }
        }

        function cn(e, t, n) {
            let {
                dateEnv: r,
                pluginHooks: i,
                options: s
            } = n, {
                defs: o,
                instances: a
            } = e;
            a = at(a, (e => !o[e.defId].recurringDef));
            for (let e in o) {
                let n = o[e];
                if (n.recurringDef) {
                    let {
                        duration: o
                    } = n.recurringDef;
                    o || (o = n.allDay ? s.defaultAllDayEventDuration : s.defaultTimedEventDuration);
                    let l = dn(n, o, t, r, i.recurringTypes);
                    for (let t of l) {
                        let n = ln(e, {
                            start: t,
                            end: r.add(t, o)
                        });
                        a[n.instanceId] = n
                    }
                }
            }
            return {
                defs: o,
                instances: a
            }
        }

        function dn(e, t, n, r, i) {
            let s = i[e.recurringDef.typeId].expand(e.recurringDef.typeData, {
                start: r.subtract(n.start, t),
                end: n.end
            }, r);
            return e.allDay && (s = s.map(Dt)), s
        }

        function un(e, t, n, r) {
            let i = {
                    defs: {},
                    instances: {}
                },
                s = _n(n);
            for (let o of e) {
                let e = Cn(o, t, n, r, s);
                e && hn(e, i)
            }
            return i
        }

        function hn(e, t = {
            defs: {},
            instances: {}
        }) {
            return t.defs[e.def.defId] = e.def, e.instance && (t.instances[e.instance.instanceId] = e.instance), t
        }

        function fn(e, t) {
            let n = e.instances[t];
            if (n) {
                let t = e.defs[n.defId],
                    r = pn(e, (e => {
                        return n = t, r = e, Boolean(n.groupId && n.groupId === r.groupId);
                        var n, r
                    }));
                return r.defs[t.defId] = t, r.instances[n.instanceId] = n, r
            }
            return {
                defs: {},
                instances: {}
            }
        }

        function gn(e, t) {
            return {
                defs: Object.assign(Object.assign({}, e.defs), t.defs),
                instances: Object.assign(Object.assign({}, e.instances), t.instances)
            }
        }

        function pn(e, t) {
            let n = at(e.defs, t),
                r = at(e.instances, (e => n[e.defId]));
            return {
                defs: n,
                instances: r
            }
        }

        function mn(e) {
            return Array.isArray(e) ? e : "string" == typeof e ? e.split(/\s+/) : []
        }
        const vn = {
                display: String,
                editable: Boolean,
                startEditable: Boolean,
                durationEditable: Boolean,
                constraint: an,
                overlap: an,
                allow: an,
                className: mn,
                classNames: mn,
                color: String,
                backgroundColor: String,
                borderColor: String,
                textColor: String
            },
            bn = {
                display: null,
                startEditable: null,
                durationEditable: null,
                constraints: [],
                overlap: null,
                allows: [],
                backgroundColor: "",
                borderColor: "",
                textColor: "",
                classNames: []
            };

        function yn(e, t) {
            let n = function(e, t) {
                return Array.isArray(e) ? un(e, null, t, !0) : "object" == typeof e && e ? un([e], null, t, !0) : null != e ? String(e) : null
            }(e.constraint, t);
            return {
                display: e.display || null,
                startEditable: null != e.startEditable ? e.startEditable : e.editable,
                durationEditable: null != e.durationEditable ? e.durationEditable : e.editable,
                constraints: null != n ? [n] : [],
                overlap: null != e.overlap ? e.overlap : null,
                allows: null != e.allow ? [e.allow] : [],
                backgroundColor: e.backgroundColor || e.color || "",
                borderColor: e.borderColor || e.color || "",
                textColor: e.textColor || "",
                classNames: (e.className || []).concat(e.classNames || [])
            }
        }

        function En(e) {
            return e.reduce(An, bn)
        }

        function An(e, t) {
            return {
                display: null != t.display ? t.display : e.display,
                startEditable: null != t.startEditable ? t.startEditable : e.startEditable,
                durationEditable: null != t.durationEditable ? t.durationEditable : e.durationEditable,
                constraints: e.constraints.concat(t.constraints),
                overlap: "boolean" == typeof t.overlap ? t.overlap : e.overlap,
                allows: e.allows.concat(t.allows),
                backgroundColor: t.backgroundColor || e.backgroundColor,
                borderColor: t.borderColor || e.borderColor,
                textColor: t.textColor || e.textColor,
                classNames: e.classNames.concat(t.classNames)
            }
        }
        const Dn = {
                id: String,
                groupId: String,
                title: String,
                url: String,
                interactive: Boolean
            },
            Sn = {
                start: an,
                end: an,
                date: an,
                allDay: Boolean
            },
            wn = Object.assign(Object.assign(Object.assign({}, Dn), Sn), {
                extendedProps: an
            });

        function Cn(e, t, n, r, i = _n(n)) {
            let {
                refined: s,
                extra: o
            } = xn(e, n, i), a = function(e, t) {
                let n = null;
                e && (n = e.defaultAllDay);
                null == n && (n = t.options.defaultAllDay);
                return n
            }(t, n), l = function(e, t, n, r) {
                for (let i = 0; i < r.length; i += 1) {
                    let s = r[i].parse(e, n);
                    if (s) {
                        let {
                            allDay: n
                        } = e;
                        return null == n && (n = t, null == n && (n = s.allDayGuess, null == n && (n = !1))), {
                            allDay: n,
                            duration: s.duration,
                            typeData: s.typeData,
                            typeId: i
                        }
                    }
                }
                return null
            }(s, a, n.dateEnv, n.pluginHooks.recurringTypes);
            if (l) {
                let e = Rn(s, o, t ? t.sourceId : "", l.allDay, Boolean(l.duration), n);
                return e.recurringDef = {
                    typeId: l.typeId,
                    typeData: l.typeData,
                    duration: l.duration
                }, {
                    def: e,
                    instance: null
                }
            }
            let c = function(e, t, n, r) {
                let i, s, {
                        allDay: o
                    } = e,
                    a = null,
                    l = !1,
                    c = null,
                    d = null != e.start ? e.start : e.date;
                if (i = n.dateEnv.createMarkerMeta(d), i) a = i.marker;
                else if (!r) return null;
                null != e.end && (s = n.dateEnv.createMarkerMeta(e.end));
                null == o && (o = null != t ? t : (!i || i.isTimeUnspecified) && (!s || s.isTimeUnspecified));
                o && a && (a = Dt(a));
                s && (c = s.marker, o && (c = Dt(c)), a && c <= a && (c = null));
                c ? l = !0 : r || (l = n.options.forceEventDuration || !1, c = n.dateEnv.add(a, o ? n.options.defaultAllDayEventDuration : n.options.defaultTimedEventDuration));
                return {
                    allDay: o,
                    hasEnd: l,
                    range: {
                        start: a,
                        end: c
                    },
                    forcedStartTzo: i ? i.forcedTzo : null,
                    forcedEndTzo: s ? s.forcedTzo : null
                }
            }(s, a, n, r);
            if (c) {
                let e = Rn(s, o, t ? t.sourceId : "", c.allDay, c.hasEnd, n);
                return {
                    def: e,
                    instance: ln(e.defId, c.range, c.forcedStartTzo, c.forcedEndTzo)
                }
            }
            return null
        }

        function xn(e, t, n = _n(t)) {
            return on(e, n)
        }

        function _n(e) {
            return Object.assign(Object.assign(Object.assign({}, vn), wn), e.pluginHooks.eventRefiners)
        }

        function Rn(e, t, n, r, i, s) {
            let o = {
                title: e.title || "",
                groupId: e.groupId || "",
                publicId: e.id || "",
                url: e.url || "",
                recurringDef: null,
                defId: Le(),
                sourceId: n,
                allDay: r,
                hasEnd: i,
                interactive: e.interactive,
                ui: yn(e, s),
                extendedProps: Object.assign(Object.assign({}, e.extendedProps || {}), t)
            };
            for (let t of s.pluginHooks.eventDefMemberAdders) Object.assign(o, t(e));
            return Object.freeze(o.ui.classNames), Object.freeze(o.extendedProps), o
        }
        const Tn = {
            startTime: "09:00",
            endTime: "17:00",
            daysOfWeek: [1, 2, 3, 4, 5],
            display: "inverse-background",
            classNames: "fc-non-business",
            groupId: "_businessHours"
        };

        function kn(e, t) {
            return un(function(e) {
                let t;
                t = !0 === e ? [{}] : Array.isArray(e) ? e.filter((e => e.daysOfWeek)) : "object" == typeof e && e ? [e] : [];
                return t = t.map((e => Object.assign(Object.assign({}, Tn), e))), t
            }(e), null, t)
        }

        function Mn(e) {
            let t = Math.floor(Et(e.start, e.end)) || 1,
                n = Dt(e.start);
            return {
                start: n,
                end: bt(n, t)
            }
        }

        function In(e, t = Je(0)) {
            let n = null,
                r = null;
            if (e.end) {
                r = Dt(e.end);
                let n = e.end.valueOf() - r.valueOf();
                n && n >= nt(t) && (r = bt(r, 1))
            }
            return e.start && (n = Dt(e.start), r && r <= n && (r = bt(n, 1))), {
                start: n,
                end: r
            }
        }

        function On(e, t, n, r) {
            return "year" === r ? Je(n.diffWholeYears(e, t), "year") : "month" === r ? Je(n.diffWholeMonths(e, t), "month") : function(e, t) {
                let n = Dt(e),
                    r = Dt(t);
                return {
                    years: 0,
                    months: 0,
                    days: Math.round(Et(n, r)),
                    milliseconds: t.valueOf() - r.valueOf() - (e.valueOf() - n.valueOf())
                }
            }(e, t)
        }

        function Nn(e, t) {
            return e.left >= t.left && e.left < t.right && e.top >= t.top && e.top < t.bottom
        }

        function Pn(e, t) {
            let n = {
                left: Math.max(e.left, t.left),
                right: Math.min(e.right, t.right),
                top: Math.max(e.top, t.top),
                bottom: Math.min(e.bottom, t.bottom)
            };
            return n.left < n.right && n.top < n.bottom && n
        }
        let Hn;

        function Bn() {
            return null == Hn && (Hn = function() {
                if ("undefined" == typeof document) return !0;
                let e = document.createElement("div");
                e.style.position = "absolute", e.style.top = "0px", e.style.left = "0px", e.innerHTML = "<table><tr><td><div></div></td></tr></table>", e.querySelector("table").style.height = "100px", e.querySelector("div").style.height = "100%", document.body.appendChild(e);
                let t = e.querySelector("div").offsetHeight > 0;
                return document.body.removeChild(e), t
            }()), Hn
        }
        const jn = {
            defs: {},
            instances: {}
        };
        class zn {
            constructor() {
                this.getKeysForEventDefs = Pt(this._getKeysForEventDefs), this.splitDateSelection = Pt(this._splitDateSpan), this.splitEventStore = Pt(this._splitEventStore), this.splitIndividualUi = Pt(this._splitIndividualUi), this.splitEventDrag = Pt(this._splitInteraction), this.splitEventResize = Pt(this._splitInteraction), this.eventUiBuilders = {}
            }
            splitProps(e) {
                let t = this.getKeyInfo(e),
                    n = this.getKeysForEventDefs(e.eventStore),
                    r = this.splitDateSelection(e.dateSelection),
                    i = this.splitIndividualUi(e.eventUiBases, n),
                    s = this.splitEventStore(e.eventStore, n),
                    o = this.splitEventDrag(e.eventDrag),
                    a = this.splitEventResize(e.eventResize),
                    l = {};
                this.eventUiBuilders = lt(t, ((e, t) => this.eventUiBuilders[t] || Pt(Un)));
                for (let n in t) {
                    let c = t[n],
                        d = s[n] || jn,
                        u = this.eventUiBuilders[n];
                    l[n] = {
                        businessHours: c.businessHours || e.businessHours,
                        dateSelection: r[n] || null,
                        eventStore: d,
                        eventUiBases: u(e.eventUiBases[""], c.ui, i[n]),
                        eventSelection: d.instances[e.eventSelection] ? e.eventSelection : "",
                        eventDrag: o[n] || null,
                        eventResize: a[n] || null
                    }
                }
                return l
            }
            _splitDateSpan(e) {
                let t = {};
                if (e) {
                    let n = this.getKeysForDateSpan(e);
                    for (let r of n) t[r] = e
                }
                return t
            }
            _getKeysForEventDefs(e) {
                return lt(e.defs, (e => this.getKeysForEventDef(e)))
            }
            _splitEventStore(e, t) {
                let {
                    defs: n,
                    instances: r
                } = e, i = {};
                for (let e in n)
                    for (let r of t[e]) i[r] || (i[r] = {
                        defs: {},
                        instances: {}
                    }), i[r].defs[e] = n[e];
                for (let e in r) {
                    let n = r[e];
                    for (let r of t[n.defId]) i[r] && (i[r].instances[e] = n)
                }
                return i
            }
            _splitIndividualUi(e, t) {
                let n = {};
                for (let r in e)
                    if (r)
                        for (let i of t[r]) n[i] || (n[i] = {}), n[i][r] = e[r];
                return n
            }
            _splitInteraction(e) {
                let t = {};
                if (e) {
                    let n = this._splitEventStore(e.affectedEvents, this._getKeysForEventDefs(e.affectedEvents)),
                        r = this._getKeysForEventDefs(e.mutatedEvents),
                        i = this._splitEventStore(e.mutatedEvents, r),
                        s = r => {
                            t[r] || (t[r] = {
                                affectedEvents: n[r] || jn,
                                mutatedEvents: i[r] || jn,
                                isEvent: e.isEvent
                            })
                        };
                    for (let e in n) s(e);
                    for (let e in i) s(e)
                }
                return t
            }
        }

        function Un(e, t, n) {
            let r = [];
            e && r.push(e), t && r.push(t);
            let i = {
                "": En(r)
            };
            return n && Object.assign(i, n), i
        }

        function Ln(e, t) {
            let n, r, i = [],
                {
                    start: s
                } = t;
            for (e.sort(Wn), n = 0; n < e.length; n += 1) r = e[n], r.start > s && i.push({
                start: s,
                end: r.start
            }), r.end > s && (s = r.end);
            return s < t.end && i.push({
                start: s,
                end: t.end
            }), i
        }

        function Wn(e, t) {
            return e.start.valueOf() - t.start.valueOf()
        }

        function Fn(e, t) {
            let {
                start: n,
                end: r
            } = e, i = null;
            return null !== t.start && (n = null === n ? t.start : new Date(Math.max(n.valueOf(), t.start.valueOf()))), null != t.end && (r = null === r ? t.end : new Date(Math.min(r.valueOf(), t.end.valueOf()))), (null === n || null === r || n < r) && (i = {
                start: n,
                end: r
            }), i
        }

        function Vn(e, t) {
            return (null === e.end || null === t.start || e.end > t.start) && (null === e.start || null === t.end || e.start < t.end)
        }

        function Gn(e, t) {
            return (null === e.start || null !== t.start && t.start >= e.start) && (null === e.end || null !== t.end && t.end <= e.end)
        }

        function Qn(e, t) {
            return (null === e.start || t >= e.start) && (null === e.end || t < e.end)
        }

        function Yn(e, t, n, r) {
            return {
                dow: e.getUTCDay(),
                isDisabled: Boolean(r && !Qn(r.activeRange, e)),
                isOther: Boolean(r && !Qn(r.currentRange, e)),
                isToday: Boolean(t && Qn(t, e)),
                isPast: Boolean(n ? e < n : !!t && e < t.start),
                isFuture: Boolean(n ? e > n : !!t && e >= t.end)
            }
        }

        function qn(e, t) {
            let n = ["fc-day", `fc-day-${mt[e.dow]}`];
            return e.isDisabled ? n.push("fc-day-disabled") : (e.isToday && (n.push("fc-day-today"), n.push(t.getClass("today"))), e.isPast && n.push("fc-day-past"), e.isFuture && n.push("fc-day-future"), e.isOther && n.push("fc-day-other")), n
        }
        const Zn = Xt({
                year: "numeric",
                month: "long",
                day: "numeric"
            }),
            Xn = Xt({
                week: "long"
            });

        function $n(e, t, n = "day", r = !0) {
            const {
                dateEnv: i,
                options: s,
                calendarApi: o
            } = e;
            let a = i.format(t, "week" === n ? Xn : Zn);
            if (s.navLinks) {
                let e = i.toDate(t);
                const l = e => {
                    let r = "day" === n ? s.navLinkDayClick : "week" === n ? s.navLinkWeekClick : null;
                    "function" == typeof r ? r.call(o, i.toDate(t), e) : ("string" == typeof r && (n = r), o.zoomTo(t, n))
                };
                return Object.assign({
                    title: Qe(s.navLinkHint, [a, e], a),
                    "data-navlink": ""
                }, r ? je(l) : {
                    onClick: l
                })
            }
            return {
                "aria-label": a
            }
        }
        let Jn, Kn = null;

        function er() {
            return null === Kn && (Kn = function() {
                let e = document.createElement("div");
                Te(e, {
                    position: "absolute",
                    top: -1e3,
                    left: 0,
                    border: 0,
                    padding: 0,
                    overflow: "scroll",
                    direction: "rtl"
                }), e.innerHTML = "<div></div>", document.body.appendChild(e);
                let t = e.firstChild.getBoundingClientRect().left > e.getBoundingClientRect().left;
                return Ce(e), t
            }()), Kn
        }

        function tr() {
            return Jn || (Jn = function() {
                let e = document.createElement("div");
                e.style.overflow = "scroll", e.style.position = "absolute", e.style.top = "-9999px", e.style.left = "-9999px", document.body.appendChild(e);
                let t = nr(e);
                return document.body.removeChild(e), t
            }()), Jn
        }

        function nr(e) {
            return {
                x: e.offsetHeight - e.clientHeight,
                y: e.offsetWidth - e.clientWidth
            }
        }

        function rr(e, t = !1, n) {
            let r = n ? e.getBoundingClientRect() : ir(e),
                i = function(e, t = !1) {
                    let n = window.getComputedStyle(e),
                        r = parseInt(n.borderLeftWidth, 10) || 0,
                        i = parseInt(n.borderRightWidth, 10) || 0,
                        s = parseInt(n.borderTopWidth, 10) || 0,
                        o = parseInt(n.borderBottomWidth, 10) || 0,
                        a = nr(e),
                        l = a.y - r - i,
                        c = {
                            borderLeft: r,
                            borderRight: i,
                            borderTop: s,
                            borderBottom: o,
                            scrollbarBottom: a.x - s - o,
                            scrollbarLeft: 0,
                            scrollbarRight: 0
                        };
                    return er() && "rtl" === n.direction ? c.scrollbarLeft = l : c.scrollbarRight = l, t && (c.paddingLeft = parseInt(n.paddingLeft, 10) || 0, c.paddingRight = parseInt(n.paddingRight, 10) || 0, c.paddingTop = parseInt(n.paddingTop, 10) || 0, c.paddingBottom = parseInt(n.paddingBottom, 10) || 0), c
                }(e, t),
                s = {
                    left: r.left + i.borderLeft + i.scrollbarLeft,
                    right: r.right - i.borderRight - i.scrollbarRight,
                    top: r.top + i.borderTop,
                    bottom: r.bottom - i.borderBottom - i.scrollbarBottom
                };
            return t && (s.left += i.paddingLeft, s.right -= i.paddingRight, s.top += i.paddingTop, s.bottom -= i.paddingBottom), s
        }

        function ir(e) {
            let t = e.getBoundingClientRect();
            return {
                left: t.left + window.pageXOffset,
                top: t.top + window.pageYOffset,
                right: t.right + window.pageXOffset,
                bottom: t.bottom + window.pageYOffset
            }
        }

        function sr(e) {
            let t = [];
            for (; e instanceof HTMLElement;) {
                let n = window.getComputedStyle(e);
                if ("fixed" === n.position) break;
                /(auto|scroll)/.test(n.overflow + n.overflowY + n.overflowX) && t.push(e), e = e.parentNode
            }
            return t
        }
        class or {
            constructor() {
                this.handlers = {}, this.thisContext = null
            }
            setThisContext(e) {
                this.thisContext = e
            }
            setOptions(e) {
                this.options = e
            }
            on(e, t) {
                ! function(e, t, n) {
                    (e[t] || (e[t] = [])).push(n)
                }(this.handlers, e, t)
            }
            off(e, t) {
                ! function(e, t, n) {
                    n ? e[t] && (e[t] = e[t].filter((e => e !== n))) : delete e[t]
                }(this.handlers, e, t)
            }
            trigger(e, ...t) {
                let n = this.handlers[e] || [],
                    r = this.options && this.options[e],
                    i = [].concat(r || [], n);
                for (let e of i) e.apply(this.thisContext, t)
            }
            hasHandlers(e) {
                return Boolean(this.handlers[e] && this.handlers[e].length || this.options && this.options[e])
            }
        }
        class ar {
            constructor(e, t, n, r) {
                this.els = t;
                let i = this.originClientRect = e.getBoundingClientRect();
                n && this.buildElHorizontals(i.left), r && this.buildElVerticals(i.top)
            }
            buildElHorizontals(e) {
                let t = [],
                    n = [];
                for (let r of this.els) {
                    let i = r.getBoundingClientRect();
                    t.push(i.left - e), n.push(i.right - e)
                }
                this.lefts = t, this.rights = n
            }
            buildElVerticals(e) {
                let t = [],
                    n = [];
                for (let r of this.els) {
                    let i = r.getBoundingClientRect();
                    t.push(i.top - e), n.push(i.bottom - e)
                }
                this.tops = t, this.bottoms = n
            }
            leftToIndex(e) {
                let t, {
                        lefts: n,
                        rights: r
                    } = this,
                    i = n.length;
                for (t = 0; t < i; t += 1)
                    if (e >= n[t] && e < r[t]) return t
            }
            topToIndex(e) {
                let t, {
                        tops: n,
                        bottoms: r
                    } = this,
                    i = n.length;
                for (t = 0; t < i; t += 1)
                    if (e >= n[t] && e < r[t]) return t
            }
            getWidth(e) {
                return this.rights[e] - this.lefts[e]
            }
            getHeight(e) {
                return this.bottoms[e] - this.tops[e]
            }
            similarTo(e) {
                return lr(this.tops || [], e.tops || []) && lr(this.bottoms || [], e.bottoms || []) && lr(this.lefts || [], e.lefts || []) && lr(this.rights || [], e.rights || [])
            }
        }

        function lr(e, t) {
            const n = e.length;
            if (n !== t.length) return !1;
            for (let r = 0; r < n; r++)
                if (Math.round(e[r]) !== Math.round(t[r])) return !1;
            return !0
        }
        class cr {
            getMaxScrollTop() {
                return this.getScrollHeight() - this.getClientHeight()
            }
            getMaxScrollLeft() {
                return this.getScrollWidth() - this.getClientWidth()
            }
            canScrollVertically() {
                return this.getMaxScrollTop() > 0
            }
            canScrollHorizontally() {
                return this.getMaxScrollLeft() > 0
            }
            canScrollUp() {
                return this.getScrollTop() > 0
            }
            canScrollDown() {
                return this.getScrollTop() < this.getMaxScrollTop()
            }
            canScrollLeft() {
                return this.getScrollLeft() > 0
            }
            canScrollRight() {
                return this.getScrollLeft() < this.getMaxScrollLeft()
            }
        }
        class dr extends cr {
            constructor(e) {
                super(), this.el = e
            }
            getScrollTop() {
                return this.el.scrollTop
            }
            getScrollLeft() {
                return this.el.scrollLeft
            }
            setScrollTop(e) {
                this.el.scrollTop = e
            }
            setScrollLeft(e) {
                this.el.scrollLeft = e
            }
            getScrollWidth() {
                return this.el.scrollWidth
            }
            getScrollHeight() {
                return this.el.scrollHeight
            }
            getClientHeight() {
                return this.el.clientHeight
            }
            getClientWidth() {
                return this.el.clientWidth
            }
        }
        class ur extends cr {
            getScrollTop() {
                return window.pageYOffset
            }
            getScrollLeft() {
                return window.pageXOffset
            }
            setScrollTop(e) {
                window.scroll(window.pageXOffset, e)
            }
            setScrollLeft(e) {
                window.scroll(e, window.pageYOffset)
            }
            getScrollWidth() {
                return document.documentElement.scrollWidth
            }
            getScrollHeight() {
                return document.documentElement.scrollHeight
            }
            getClientHeight() {
                return document.documentElement.clientHeight
            }
            getClientWidth() {
                return document.documentElement.clientWidth
            }
        }
        class hr {
            constructor(e) {
                this.iconOverrideOption && this.setIconOverride(e[this.iconOverrideOption])
            }
            setIconOverride(e) {
                let t, n;
                if ("object" == typeof e && e) {
                    for (n in t = Object.assign({}, this.iconClasses), e) t[n] = this.applyIconOverridePrefix(e[n]);
                    this.iconClasses = t
                } else !1 === e && (this.iconClasses = {})
            }
            applyIconOverridePrefix(e) {
                let t = this.iconOverridePrefix;
                return t && 0 !== e.indexOf(t) && (e = t + e), e
            }
            getClass(e) {
                return this.classes[e] || ""
            }
            getIconClass(e, t) {
                let n;
                return n = t && this.rtlIconClasses && this.rtlIconClasses[e] || this.iconClasses[e], n ? `${this.baseIconClass} ${n}` : ""
            }
            getCustomButtonIconClass(e) {
                let t;
                return this.iconOverrideCustomButtonOption && (t = e[this.iconOverrideCustomButtonOption], t) ? `${this.baseIconClass} ${this.applyIconOverridePrefix(t)}` : ""
            }
        }

        function fr(e) {
            e();
            let t = r.debounceRendering,
                n = [];
            for (r.debounceRendering = function(e) {
                    n.push(e)
                }, H(g(gr, {}), document.createElement("div")); n.length;) n.shift()();
            r.debounceRendering = t
        }
        hr.prototype.classes = {}, hr.prototype.iconClasses = {}, hr.prototype.baseIconClass = "", hr.prototype.iconOverridePrefix = "";
        class gr extends v {
            render() {
                return g("div", {})
            }
            componentDidMount() {
                this.setState({})
            }
        }

        function pr(e) {
            let t = B(e),
                n = t.Provider;
            return t.Provider = function() {
                let e = !this.getChildContext,
                    t = n.apply(this, arguments);
                if (e) {
                    let e = [];
                    this.shouldComponentUpdate = t => {
                        this.props.value !== t.value && e.forEach((e => {
                            e.context = t.value, e.forceUpdate()
                        }))
                    }, this.sub = t => {
                        e.push(t);
                        let n = t.componentWillUnmount;
                        t.componentWillUnmount = () => {
                            e.splice(e.indexOf(t), 1), n && n.call(t)
                        }
                    }
                }
                return t
            }, t
        }
        class mr {
            constructor(e, t, n, r) {
                this.execFunc = e, this.emitter = t, this.scrollTime = n, this.scrollTimeReset = r, this.handleScrollRequest = e => {
                    this.queuedRequest = Object.assign({}, this.queuedRequest || {}, e), this.drain()
                }, t.on("_scrollRequest", this.handleScrollRequest), this.fireInitialScroll()
            }
            detach() {
                this.emitter.off("_scrollRequest", this.handleScrollRequest)
            }
            update(e) {
                e && this.scrollTimeReset ? this.fireInitialScroll() : this.drain()
            }
            fireInitialScroll() {
                this.handleScrollRequest({
                    time: this.scrollTime
                })
            }
            drain() {
                this.queuedRequest && this.execFunc(this.queuedRequest) && (this.queuedRequest = null)
            }
        }
        const vr = pr({});

        function br(e, t, n, r, i, s, o, a, l, c, d, u, h) {
            return {
                dateEnv: i,
                options: n,
                pluginHooks: o,
                emitter: c,
                dispatch: a,
                getCurrentData: l,
                calendarApi: d,
                viewSpec: e,
                viewApi: t,
                dateProfileGenerator: r,
                theme: s,
                isRtl: "rtl" === n.direction,
                addResizeHandler(e) {
                    c.on("_resize", e)
                },
                removeResizeHandler(e) {
                    c.off("_resize", e)
                },
                createScrollResponder(e) {
                    return new mr(e, c, Je(n.scrollTime), n.scrollTimeReset)
                },
                registerInteractiveComponent: u,
                unregisterInteractiveComponent: h
            }
        }
        class yr extends v {
            shouldComponentUpdate(e, t) {
                return this.debug && console.log(ft(e, this.props), ft(t, this.state)), !gt(this.props, e, this.propEquality) || !gt(this.state, t, this.stateEquality)
            }
            safeSetState(e) {
                gt(this.state, Object.assign(Object.assign({}, this.state), e), this.stateEquality) || this.setState(e)
            }
        }
        yr.addPropsEquality = function(e) {
            let t = Object.create(this.prototype.propEquality);
            Object.assign(t, e), this.prototype.propEquality = t
        }, yr.addStateEquality = function(e) {
            let t = Object.create(this.prototype.stateEquality);
            Object.assign(t, e), this.prototype.stateEquality = t
        }, yr.contextType = vr, yr.prototype.propEquality = {}, yr.prototype.stateEquality = {};
        class Er extends yr {}

        function Ar(e, t) {
            "function" == typeof e ? e(t) : e && (e.current = t)
        }
        Er.contextType = vr;
        class Dr extends Er {
            constructor() {
                super(...arguments), this.uid = Le()
            }
            prepareHits() {}
            queryHit(e, t, n, r) {
                return null
            }
            isValidSegDownEl(e) {
                return !this.props.eventDrag && !this.props.eventResize && !xe(e, ".fc-event-mirror")
            }
            isValidDateDownEl(e) {
                return !(xe(e, ".fc-event:not(.fc-bg-event)") || xe(e, ".fc-more-link") || xe(e, "a[data-navlink]") || xe(e, ".fc-popover"))
            }
        }

        function Sr(e, t) {
            return "function" == typeof e && (e = e()), null == e ? t.createNowMarker() : t.createMarker(e)
        }
        class wr {
            constructor(e) {
                this.props = e, this.nowDate = Sr(e.nowInput, e.dateEnv), this.initHiddenDays()
            }
            buildPrev(e, t, n) {
                let {
                    dateEnv: r
                } = this.props, i = r.subtract(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
                return this.build(i, -1, n)
            }
            buildNext(e, t, n) {
                let {
                    dateEnv: r
                } = this.props, i = r.add(r.startOf(t, e.currentRangeUnit), e.dateIncrement);
                return this.build(i, 1, n)
            }
            build(e, t, n = !0) {
                let r, i, s, o, a, l, {
                    props: c
                } = this;
                var d, u;
                return r = this.buildValidRange(), r = this.trimHiddenDays(r), n && (d = e, e = null != (u = r).start && d < u.start ? u.start : null != u.end && d >= u.end ? new Date(u.end.valueOf() - 1) : d), i = this.buildCurrentRangeInfo(e, t), s = /^(year|month|week|day)$/.test(i.unit), o = this.buildRenderRange(this.trimHiddenDays(i.range), i.unit, s), o = this.trimHiddenDays(o), a = o, c.showNonCurrentDates || (a = Fn(a, i.range)), a = this.adjustActiveRange(a), a = Fn(a, r), l = Vn(i.range, r), {
                    validRange: r,
                    currentRange: i.range,
                    currentRangeUnit: i.unit,
                    isRangeAllDay: s,
                    activeRange: a,
                    renderRange: o,
                    slotMinTime: c.slotMinTime,
                    slotMaxTime: c.slotMaxTime,
                    isValid: l,
                    dateIncrement: this.buildDateIncrement(i.duration)
                }
            }
            buildValidRange() {
                let e = this.props.validRangeInput,
                    t = "function" == typeof e ? e.call(this.props.calendarApi, this.nowDate) : e;
                return this.refineRange(t) || {
                    start: null,
                    end: null
                }
            }
            buildCurrentRangeInfo(e, t) {
                let n, {
                        props: r
                    } = this,
                    i = null,
                    s = null,
                    o = null;
                return r.duration ? (i = r.duration, s = r.durationUnit, o = this.buildRangeFromDuration(e, t, i, s)) : (n = this.props.dayCount) ? (s = "day", o = this.buildRangeFromDayCount(e, t, n)) : (o = this.buildCustomVisibleRange(e)) ? s = r.dateEnv.greatestWholeUnit(o.start, o.end).unit : (i = this.getFallbackDuration(), s = it(i).unit, o = this.buildRangeFromDuration(e, t, i, s)), {
                    duration: i,
                    unit: s,
                    range: o
                }
            }
            getFallbackDuration() {
                return Je({
                    day: 1
                })
            }
            adjustActiveRange(e) {
                let {
                    dateEnv: t,
                    usesMinMaxTime: n,
                    slotMinTime: r,
                    slotMaxTime: i
                } = this.props, {
                    start: s,
                    end: o
                } = e;
                return n && (tt(r) < 0 && (s = Dt(s), s = t.add(s, r)), tt(i) > 1 && (o = Dt(o), o = bt(o, -1), o = t.add(o, i))), {
                    start: s,
                    end: o
                }
            }
            buildRangeFromDuration(e, t, n, r) {
                let i, s, o, {
                    dateEnv: a,
                    dateAlignment: l
                } = this.props;
                if (!l) {
                    let {
                        dateIncrement: e
                    } = this.props;
                    l = e && nt(e) < nt(n) ? it(e).unit : r
                }

                function c() {
                    i = a.startOf(e, l), s = a.add(i, n), o = {
                        start: i,
                        end: s
                    }
                }
                return tt(n) <= 1 && this.isHiddenDay(i) && (i = this.skipHiddenDays(i, t), i = Dt(i)), c(), this.trimHiddenDays(o) || (e = this.skipHiddenDays(e, t), c()), o
            }
            buildRangeFromDayCount(e, t, n) {
                let r, {
                        dateEnv: i,
                        dateAlignment: s
                    } = this.props,
                    o = 0,
                    a = e;
                s && (a = i.startOf(a, s)), a = Dt(a), a = this.skipHiddenDays(a, t), r = a;
                do {
                    r = bt(r, 1), this.isHiddenDay(r) || (o += 1)
                } while (o < n);
                return {
                    start: a,
                    end: r
                }
            }
            buildCustomVisibleRange(e) {
                let {
                    props: t
                } = this, n = t.visibleRangeInput, r = "function" == typeof n ? n.call(t.calendarApi, t.dateEnv.toDate(e)) : n, i = this.refineRange(r);
                return !i || null != i.start && null != i.end ? i : null
            }
            buildRenderRange(e, t, n) {
                return e
            }
            buildDateIncrement(e) {
                let t, {
                    dateIncrement: n
                } = this.props;
                return n || ((t = this.props.dateAlignment) ? Je(1, t) : e || Je({
                    days: 1
                }))
            }
            refineRange(e) {
                if (e) {
                    let t = function(e, t) {
                        let n = null,
                            r = null;
                        return e.start && (n = t.createMarker(e.start)), e.end && (r = t.createMarker(e.end)), n || r ? n && r && r < n ? null : {
                            start: n,
                            end: r
                        } : null
                    }(e, this.props.dateEnv);
                    return t && (t = In(t)), t
                }
                return null
            }
            initHiddenDays() {
                let e, t = this.props.hiddenDays || [],
                    n = [],
                    r = 0;
                for (!1 === this.props.weekends && t.push(0, 6), e = 0; e < 7; e += 1)(n[e] = -1 !== t.indexOf(e)) || (r += 1);
                if (!r) throw new Error("invalid hiddenDays");
                this.isHiddenDayHash = n
            }
            trimHiddenDays(e) {
                let {
                    start: t,
                    end: n
                } = e;
                return t && (t = this.skipHiddenDays(t)), n && (n = this.skipHiddenDays(n, -1, !0)), null == t || null == n || t < n ? {
                    start: t,
                    end: n
                } : null
            }
            isHiddenDay(e) {
                return e instanceof Date && (e = e.getUTCDay()), this.isHiddenDayHash[e]
            }
            skipHiddenDays(e, t = 1, n = !1) {
                for (; this.isHiddenDayHash[(e.getUTCDay() + (n ? t : 0) + 7) % 7];) e = bt(e, t);
                return e
            }
        }

        function Cr(e, t, n) {
            n.emitter.trigger("select", Object.assign(Object.assign({}, xr(e, n)), {
                jsEvent: t ? t.origEvent : null,
                view: n.viewApi || n.calendarApi.view
            }))
        }

        function xr(e, t) {
            let n = {};
            for (let r of t.pluginHooks.dateSpanTransforms) Object.assign(n, r(e, t));
            var r, i;
            return Object.assign(n, (r = e, i = t.dateEnv, Object.assign(Object.assign({}, Kr(r.range, i, r.allDay)), {
                allDay: r.allDay
            }))), n
        }

        function _r(e, t, n) {
            let {
                dateEnv: r,
                options: i
            } = n, s = t;
            return e ? (s = Dt(s), s = r.add(s, i.defaultAllDayEventDuration)) : s = r.add(s, i.defaultTimedEventDuration), s
        }

        function Rr(e, t, n, r) {
            let i = jr(e.defs, t),
                s = {
                    defs: {},
                    instances: {}
                };
            for (let t in e.defs) {
                let o = e.defs[t];
                s.defs[t] = Tr(o, i[t], n, r)
            }
            for (let t in e.instances) {
                let o = e.instances[t],
                    a = s.defs[o.defId];
                s.instances[t] = kr(o, a, i[o.defId], n, r)
            }
            return s
        }

        function Tr(e, t, n, r) {
            let i = n.standardProps || {};
            null == i.hasEnd && t.durationEditable && (n.startDelta || n.endDelta) && (i.hasEnd = !0);
            let s = Object.assign(Object.assign(Object.assign({}, e), i), {
                ui: Object.assign(Object.assign({}, e.ui), i.ui)
            });
            n.extendedProps && (s.extendedProps = Object.assign(Object.assign({}, s.extendedProps), n.extendedProps));
            for (let e of r.pluginHooks.eventDefMutationAppliers) e(s, n, r);
            return !s.hasEnd && r.options.forceEventDuration && (s.hasEnd = !0), s
        }

        function kr(e, t, n, r, i) {
            let {
                dateEnv: s
            } = i, o = r.standardProps && !0 === r.standardProps.allDay, a = r.standardProps && !1 === r.standardProps.hasEnd, l = Object.assign({}, e);
            return o && (l.range = Mn(l.range)), r.datesDelta && n.startEditable && (l.range = {
                start: s.add(l.range.start, r.datesDelta),
                end: s.add(l.range.end, r.datesDelta)
            }), r.startDelta && n.durationEditable && (l.range = {
                start: s.add(l.range.start, r.startDelta),
                end: l.range.end
            }), r.endDelta && n.durationEditable && (l.range = {
                start: l.range.start,
                end: s.add(l.range.end, r.endDelta)
            }), a && (l.range = {
                start: l.range.start,
                end: _r(t.allDay, l.range.start, i)
            }), t.allDay && (l.range = {
                start: Dt(l.range.start),
                end: Dt(l.range.end)
            }), l.range.end < l.range.start && (l.range.end = _r(t.allDay, l.range.start, i)), l
        }
        class Mr {
            constructor(e, t) {
                this.context = e, this.internalEventSource = t
            }
            remove() {
                this.context.dispatch({
                    type: "REMOVE_EVENT_SOURCE",
                    sourceId: this.internalEventSource.sourceId
                })
            }
            refetch() {
                this.context.dispatch({
                    type: "FETCH_EVENT_SOURCES",
                    sourceIds: [this.internalEventSource.sourceId],
                    isRefetch: !0
                })
            }
            get id() {
                return this.internalEventSource.publicId
            }
            get url() {
                return this.internalEventSource.meta.url
            }
            get format() {
                return this.internalEventSource.meta.format
            }
        }
        class Ir {
            constructor(e, t, n) {
                this._context = e, this._def = t, this._instance = n || null
            }
            setProp(e, t) {
                if (e in Sn) console.warn("Could not set date-related prop 'name'. Use one of the date-related methods instead.");
                else if ("id" === e) t = Dn[e](t), this.mutate({
                    standardProps: {
                        publicId: t
                    }
                });
                else if (e in Dn) t = Dn[e](t), this.mutate({
                    standardProps: {
                        [e]: t
                    }
                });
                else if (e in vn) {
                    let n = vn[e](t);
                    n = "color" === e ? {
                        backgroundColor: t,
                        borderColor: t
                    } : "editable" === e ? {
                        startEditable: t,
                        durationEditable: t
                    } : {
                        [e]: t
                    }, this.mutate({
                        standardProps: {
                            ui: n
                        }
                    })
                } else console.warn(`Could not set prop '${e}'. Use setExtendedProp instead.`)
            }
            setExtendedProp(e, t) {
                this.mutate({
                    extendedProps: {
                        [e]: t
                    }
                })
            }
            setStart(e, t = {}) {
                let {
                    dateEnv: n
                } = this._context, r = n.createMarker(e);
                if (r && this._instance) {
                    let e = On(this._instance.range.start, r, n, t.granularity);
                    t.maintainDuration ? this.mutate({
                        datesDelta: e
                    }) : this.mutate({
                        startDelta: e
                    })
                }
            }
            setEnd(e, t = {}) {
                let n, {
                    dateEnv: r
                } = this._context;
                if ((null == e || (n = r.createMarker(e), n)) && this._instance)
                    if (n) {
                        let e = On(this._instance.range.end, n, r, t.granularity);
                        this.mutate({
                            endDelta: e
                        })
                    } else this.mutate({
                        standardProps: {
                            hasEnd: !1
                        }
                    })
            }
            setDates(e, t, n = {}) {
                let r, {
                        dateEnv: i
                    } = this._context,
                    s = {
                        allDay: n.allDay
                    },
                    o = i.createMarker(e);
                var a, l;
                if (o && ((null == t || (r = i.createMarker(t), r)) && this._instance)) {
                    let e = this._instance.range;
                    !0 === n.allDay && (e = Mn(e));
                    let t = On(e.start, o, i, n.granularity);
                    if (r) {
                        let o = On(e.end, r, i, n.granularity);
                        l = o, (a = t).years === l.years && a.months === l.months && a.days === l.days && a.milliseconds === l.milliseconds ? this.mutate({
                            datesDelta: t,
                            standardProps: s
                        }) : this.mutate({
                            startDelta: t,
                            endDelta: o,
                            standardProps: s
                        })
                    } else s.hasEnd = !1, this.mutate({
                        datesDelta: t,
                        standardProps: s
                    })
                }
            }
            moveStart(e) {
                let t = Je(e);
                t && this.mutate({
                    startDelta: t
                })
            }
            moveEnd(e) {
                let t = Je(e);
                t && this.mutate({
                    endDelta: t
                })
            }
            moveDates(e) {
                let t = Je(e);
                t && this.mutate({
                    datesDelta: t
                })
            }
            setAllDay(e, t = {}) {
                let n = {
                        allDay: e
                    },
                    {
                        maintainDuration: r
                    } = t;
                null == r && (r = this._context.options.allDayMaintainDuration), this._def.allDay !== e && (n.hasEnd = r), this.mutate({
                    standardProps: n
                })
            }
            formatRange(e) {
                let {
                    dateEnv: t
                } = this._context, n = this._instance, r = Xt(e);
                return this._def.hasEnd ? t.formatRange(n.range.start, n.range.end, r, {
                    forcedStartTzo: n.forcedStartTzo,
                    forcedEndTzo: n.forcedEndTzo
                }) : t.format(n.range.start, r, {
                    forcedTzo: n.forcedStartTzo
                })
            }
            mutate(e) {
                let t = this._instance;
                if (t) {
                    let n = this._def,
                        r = this._context,
                        {
                            eventStore: i
                        } = r.getCurrentData(),
                        s = fn(i, t.instanceId);
                    s = Rr(s, {
                        "": {
                            display: "",
                            startEditable: !0,
                            durationEditable: !0,
                            constraints: [],
                            overlap: null,
                            allows: [],
                            backgroundColor: "",
                            borderColor: "",
                            textColor: "",
                            classNames: []
                        }
                    }, e, r);
                    let o = new Ir(r, n, t);
                    this._def = s.defs[n.defId], this._instance = s.instances[t.instanceId], r.dispatch({
                        type: "MERGE_EVENTS",
                        eventStore: s
                    }), r.emitter.trigger("eventChange", {
                        oldEvent: o,
                        event: this,
                        relatedEvents: Nr(s, r, t),
                        revert() {
                            r.dispatch({
                                type: "RESET_EVENTS",
                                eventStore: i
                            })
                        }
                    })
                }
            }
            remove() {
                let e = this._context,
                    t = Or(this);
                e.dispatch({
                    type: "REMOVE_EVENTS",
                    eventStore: t
                }), e.emitter.trigger("eventRemove", {
                    event: this,
                    relatedEvents: [],
                    revert() {
                        e.dispatch({
                            type: "MERGE_EVENTS",
                            eventStore: t
                        })
                    }
                })
            }
            get source() {
                let {
                    sourceId: e
                } = this._def;
                return e ? new Mr(this._context, this._context.getCurrentData().eventSources[e]) : null
            }
            get start() {
                return this._instance ? this._context.dateEnv.toDate(this._instance.range.start) : null
            }
            get end() {
                return this._instance && this._def.hasEnd ? this._context.dateEnv.toDate(this._instance.range.end) : null
            }
            get startStr() {
                let e = this._instance;
                return e ? this._context.dateEnv.formatIso(e.range.start, {
                    omitTime: this._def.allDay,
                    forcedTzo: e.forcedStartTzo
                }) : ""
            }
            get endStr() {
                let e = this._instance;
                return e && this._def.hasEnd ? this._context.dateEnv.formatIso(e.range.end, {
                    omitTime: this._def.allDay,
                    forcedTzo: e.forcedEndTzo
                }) : ""
            }
            get id() {
                return this._def.publicId
            }
            get groupId() {
                return this._def.groupId
            }
            get allDay() {
                return this._def.allDay
            }
            get title() {
                return this._def.title
            }
            get url() {
                return this._def.url
            }
            get display() {
                return this._def.ui.display || "auto"
            }
            get startEditable() {
                return this._def.ui.startEditable
            }
            get durationEditable() {
                return this._def.ui.durationEditable
            }
            get constraint() {
                return this._def.ui.constraints[0] || null
            }
            get overlap() {
                return this._def.ui.overlap
            }
            get allow() {
                return this._def.ui.allows[0] || null
            }
            get backgroundColor() {
                return this._def.ui.backgroundColor
            }
            get borderColor() {
                return this._def.ui.borderColor
            }
            get textColor() {
                return this._def.ui.textColor
            }
            get classNames() {
                return this._def.ui.classNames
            }
            get extendedProps() {
                return this._def.extendedProps
            }
            toPlainObject(e = {}) {
                let t = this._def,
                    {
                        ui: n
                    } = t,
                    {
                        startStr: r,
                        endStr: i
                    } = this,
                    s = {};
                return t.title && (s.title = t.title), r && (s.start = r), i && (s.end = i), t.publicId && (s.id = t.publicId), t.groupId && (s.groupId = t.groupId), t.url && (s.url = t.url), n.display && "auto" !== n.display && (s.display = n.display), e.collapseColor && n.backgroundColor && n.backgroundColor === n.borderColor ? s.color = n.backgroundColor : (n.backgroundColor && (s.backgroundColor = n.backgroundColor), n.borderColor && (s.borderColor = n.borderColor)), n.textColor && (s.textColor = n.textColor), n.classNames.length && (s.classNames = n.classNames), Object.keys(t.extendedProps).length && (e.collapseExtendedProps ? Object.assign(s, t.extendedProps) : s.extendedProps = t.extendedProps), s
            }
            toJSON() {
                return this.toPlainObject()
            }
        }

        function Or(e) {
            let t = e._def,
                n = e._instance;
            return {
                defs: {
                    [t.defId]: t
                },
                instances: n ? {
                    [n.instanceId]: n
                } : {}
            }
        }

        function Nr(e, t, n) {
            let {
                defs: r,
                instances: i
            } = e, s = [], o = n ? n.instanceId : "";
            for (let e in i) {
                let n = i[e],
                    a = r[n.defId];
                n.instanceId !== o && s.push(new Ir(t, a, n))
            }
            return s
        }

        function Pr(e, t, n, r) {
            let i = {},
                s = {},
                o = {},
                a = [],
                l = [],
                c = jr(e.defs, t);
            for (let t in e.defs) {
                let n = e.defs[t];
                "inverse-background" === c[n.defId].display && (n.groupId ? (i[n.groupId] = [], o[n.groupId] || (o[n.groupId] = n)) : s[t] = [])
            }
            for (let t in e.instances) {
                let o = e.instances[t],
                    d = e.defs[o.defId],
                    u = c[d.defId],
                    h = o.range,
                    f = !d.allDay && r ? In(h, r) : h,
                    g = Fn(f, n);
                g && ("inverse-background" === u.display ? d.groupId ? i[d.groupId].push(g) : s[o.defId].push(g) : "none" !== u.display && ("background" === u.display ? a : l).push({
                    def: d,
                    ui: u,
                    instance: o,
                    range: g,
                    isStart: f.start && f.start.valueOf() === g.start.valueOf(),
                    isEnd: f.end && f.end.valueOf() === g.end.valueOf()
                }))
            }
            for (let e in i) {
                let t = Ln(i[e], n);
                for (let n of t) {
                    let t = o[e],
                        r = c[t.defId];
                    a.push({
                        def: t,
                        ui: r,
                        instance: null,
                        range: n,
                        isStart: !1,
                        isEnd: !1
                    })
                }
            }
            for (let t in s) {
                let r = Ln(s[t], n);
                for (let n of r) a.push({
                    def: e.defs[t],
                    ui: c[t],
                    instance: null,
                    range: n,
                    isStart: !1,
                    isEnd: !1
                })
            }
            return {
                bg: a,
                fg: l
            }
        }

        function Hr(e, t) {
            e.fcSeg = t
        }

        function Br(e) {
            return e.fcSeg || e.parentNode.fcSeg || null
        }

        function jr(e, t) {
            return lt(e, (e => zr(e, t)))
        }

        function zr(e, t) {
            let n = [];
            return t[""] && n.push(t[""]), t[e.defId] && n.push(t[e.defId]), n.push(e.ui), En(n)
        }

        function Ur(e, t) {
            let n = e.map(Lr);
            return n.sort(((e, n) => function(e, t, n) {
                let r, i;
                for (r = 0; r < n.length; r += 1)
                    if (i = Ve(e, t, n[r]), i) return i;
                return 0
            }(e, n, t))), n.map((e => e._seg))
        }

        function Lr(e) {
            let {
                eventRange: t
            } = e, n = t.def, r = t.instance ? t.instance.range : t.range, i = r.start ? r.start.valueOf() : 0, s = r.end ? r.end.valueOf() : 0;
            return Object.assign(Object.assign(Object.assign({}, n.extendedProps), n), {
                id: n.publicId,
                start: i,
                end: s,
                duration: s - i,
                allDay: Number(n.allDay),
                _seg: e
            })
        }

        function Wr(e, t) {
            let {
                pluginHooks: n
            } = t, r = n.isDraggableTransformers, {
                def: i,
                ui: s
            } = e.eventRange, o = s.startEditable;
            for (let e of r) o = e(o, i, s, t);
            return o
        }

        function Fr(e, t) {
            return e.isStart && e.eventRange.ui.durationEditable && t.options.eventResizableFromStart
        }

        function Vr(e, t) {
            return e.isEnd && e.eventRange.ui.durationEditable
        }

        function Gr(e, t, n, r, i, s, o) {
            let {
                dateEnv: a,
                options: l
            } = n, {
                displayEventTime: c,
                displayEventEnd: d
            } = l, u = e.eventRange.def, h = e.eventRange.instance;
            null == c && (c = !1 !== r), null == d && (d = !1 !== i);
            let f = h.range.start,
                g = h.range.end,
                p = s || e.start || e.eventRange.range.start,
                m = o || e.end || e.eventRange.range.end,
                v = Dt(f).valueOf() === Dt(p).valueOf(),
                b = Dt(yt(g, -1)).valueOf() === Dt(yt(m, -1)).valueOf();
            return c && !u.allDay && (v || b) ? (p = v ? f : p, m = b ? g : m, d && u.hasEnd ? a.formatRange(p, m, t, {
                forcedStartTzo: s ? null : h.forcedStartTzo,
                forcedEndTzo: o ? null : h.forcedEndTzo
            }) : a.format(p, t, {
                forcedTzo: s ? null : h.forcedStartTzo
            })) : ""
        }

        function Qr(e, t, n) {
            let r = e.eventRange.range;
            return {
                isPast: r.end < (n || t.start),
                isFuture: r.start >= (n || t.end),
                isToday: t && Qn(t, r.start)
            }
        }

        function Yr(e) {
            let t = ["fc-event"];
            return e.isMirror && t.push("fc-event-mirror"), e.isDraggable && t.push("fc-event-draggable"), (e.isStartResizable || e.isEndResizable) && t.push("fc-event-resizable"), e.isDragging && t.push("fc-event-dragging"), e.isResizing && t.push("fc-event-resizing"), e.isSelected && t.push("fc-event-selected"), e.isStart && t.push("fc-event-start"), e.isEnd && t.push("fc-event-end"), e.isPast && t.push("fc-event-past"), e.isToday && t.push("fc-event-today"), e.isFuture && t.push("fc-event-future"), t
        }

        function qr(e) {
            return e.instance ? e.instance.instanceId : `${e.def.defId}:${e.range.start.toISOString()}`
        }

        function Zr(e, t) {
            let {
                def: n,
                instance: r
            } = e.eventRange, {
                url: i
            } = n;
            if (i) return {
                href: i
            };
            let {
                emitter: s,
                options: o
            } = t, {
                eventInteractive: a
            } = o;
            return null == a && (a = n.interactive, null == a && (a = Boolean(s.hasHandlers("eventClick")))), a ? ze((e => {
                s.trigger("eventClick", {
                    el: e.target,
                    event: new Ir(t, n, r),
                    jsEvent: e,
                    view: t.viewApi
                })
            })) : {}
        }
        const Xr = {
            start: an,
            end: an,
            allDay: Boolean
        };

        function $r(e, t, n) {
            let r = function(e, t) {
                    let {
                        refined: n,
                        extra: r
                    } = on(e, Xr), i = n.start ? t.createMarkerMeta(n.start) : null, s = n.end ? t.createMarkerMeta(n.end) : null, {
                        allDay: o
                    } = n;
                    null == o && (o = i && i.isTimeUnspecified && (!s || s.isTimeUnspecified));
                    return Object.assign({
                        range: {
                            start: i ? i.marker : null,
                            end: s ? s.marker : null
                        },
                        allDay: o
                    }, r)
                }(e, t),
                {
                    range: i
                } = r;
            if (!i.start) return null;
            if (!i.end) {
                if (null == n) return null;
                i.end = t.add(i.start, n)
            }
            return r
        }

        function Jr(e, t, n) {
            return Object.assign(Object.assign({}, Kr(e, t, n)), {
                timeZone: t.timeZone
            })
        }

        function Kr(e, t, n) {
            return {
                start: t.toDate(e.start),
                end: t.toDate(e.end),
                startStr: t.formatIso(e.start, {
                    omitTime: n
                }),
                endStr: t.formatIso(e.end, {
                    omitTime: n
                })
            }
        }
        let ei = {};
        var ti, ni;
        ti = "gregory", ni = class {
            getMarkerYear(e) {
                return e.getUTCFullYear()
            }
            getMarkerMonth(e) {
                return e.getUTCMonth()
            }
            getMarkerDay(e) {
                return e.getUTCDate()
            }
            arrayToMarker(e) {
                return Rt(e)
            }
            markerToArray(e) {
                return _t(e)
            }
        }, ei[ti] = ni;
        const ri = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
        class ii {
            constructor(e) {
                let t = this.timeZone = e.timeZone,
                    n = "local" !== t && "UTC" !== t;
                e.namedTimeZoneImpl && n && (this.namedTimeZoneImpl = new e.namedTimeZoneImpl(t)), this.canComputeOffset = Boolean(!n || this.namedTimeZoneImpl), this.calendarSystem = function(e) {
                    return new ei[e]
                }(e.calendarSystem), this.locale = e.locale, this.weekDow = e.locale.week.dow, this.weekDoy = e.locale.week.doy, "ISO" === e.weekNumberCalculation && (this.weekDow = 1, this.weekDoy = 4), "number" == typeof e.firstDay && (this.weekDow = e.firstDay), "function" == typeof e.weekNumberCalculation && (this.weekNumberFunc = e.weekNumberCalculation), this.weekText = null != e.weekText ? e.weekText : e.locale.options.weekText, this.weekTextLong = (null != e.weekTextLong ? e.weekTextLong : e.locale.options.weekTextLong) || this.weekText, this.cmdFormatter = e.cmdFormatter, this.defaultSeparator = e.defaultSeparator
            }
            createMarker(e) {
                let t = this.createMarkerMeta(e);
                return null === t ? null : t.marker
            }
            createNowMarker() {
                return this.canComputeOffset ? this.timestampToMarker((new Date).valueOf()) : Rt(Ct(new Date))
            }
            createMarkerMeta(e) {
                if ("string" == typeof e) return this.parse(e);
                let t = null;
                return "number" == typeof e ? t = this.timestampToMarker(e) : e instanceof Date ? (e = e.valueOf(), isNaN(e) || (t = this.timestampToMarker(e))) : Array.isArray(e) && (t = Rt(e)), null !== t && Tt(t) ? {
                    marker: t,
                    isTimeUnspecified: !1,
                    forcedTzo: null
                } : null
            }
            parse(e) {
                let t = function(e) {
                    let t = ri.exec(e);
                    if (t) {
                        let e = new Date(Date.UTC(Number(t[1]), t[3] ? Number(t[3]) - 1 : 0, Number(t[5] || 1), Number(t[7] || 0), Number(t[8] || 0), Number(t[10] || 0), t[12] ? 1e3 * Number(`0.${t[12]}`) : 0));
                        if (Tt(e)) {
                            let n = null;
                            return t[13] && (n = ("-" === t[15] ? -1 : 1) * (60 * Number(t[16] || 0) + Number(t[18] || 0))), {
                                marker: e,
                                isTimeUnspecified: !t[6],
                                timeZoneOffset: n
                            }
                        }
                    }
                    return null
                }(e);
                if (null === t) return null;
                let {
                    marker: n
                } = t, r = null;
                return null !== t.timeZoneOffset && (this.canComputeOffset ? n = this.timestampToMarker(n.valueOf() - 60 * t.timeZoneOffset * 1e3) : r = t.timeZoneOffset), {
                    marker: n,
                    isTimeUnspecified: t.isTimeUnspecified,
                    forcedTzo: r
                }
            }
            getYear(e) {
                return this.calendarSystem.getMarkerYear(e)
            }
            getMonth(e) {
                return this.calendarSystem.getMarkerMonth(e)
            }
            add(e, t) {
                let n = this.calendarSystem.markerToArray(e);
                return n[0] += t.years, n[1] += t.months, n[2] += t.days, n[6] += t.milliseconds, this.calendarSystem.arrayToMarker(n)
            }
            subtract(e, t) {
                let n = this.calendarSystem.markerToArray(e);
                return n[0] -= t.years, n[1] -= t.months, n[2] -= t.days, n[6] -= t.milliseconds, this.calendarSystem.arrayToMarker(n)
            }
            addYears(e, t) {
                let n = this.calendarSystem.markerToArray(e);
                return n[0] += t, this.calendarSystem.arrayToMarker(n)
            }
            addMonths(e, t) {
                let n = this.calendarSystem.markerToArray(e);
                return n[1] += t, this.calendarSystem.arrayToMarker(n)
            }
            diffWholeYears(e, t) {
                let {
                    calendarSystem: n
                } = this;
                return kt(e) === kt(t) && n.getMarkerDay(e) === n.getMarkerDay(t) && n.getMarkerMonth(e) === n.getMarkerMonth(t) ? n.getMarkerYear(t) - n.getMarkerYear(e) : null
            }
            diffWholeMonths(e, t) {
                let {
                    calendarSystem: n
                } = this;
                return kt(e) === kt(t) && n.getMarkerDay(e) === n.getMarkerDay(t) ? n.getMarkerMonth(t) - n.getMarkerMonth(e) + 12 * (n.getMarkerYear(t) - n.getMarkerYear(e)) : null
            }
            greatestWholeUnit(e, t) {
                let n = this.diffWholeYears(e, t);
                return null !== n ? {
                    unit: "year",
                    value: n
                } : (n = this.diffWholeMonths(e, t), null !== n ? {
                    unit: "month",
                    value: n
                } : (n = function(e, t) {
                    let n = At(e, t);
                    return null !== n && n % 7 == 0 ? n / 7 : null
                }(e, t), null !== n ? {
                    unit: "week",
                    value: n
                } : (n = At(e, t), null !== n ? {
                    unit: "day",
                    value: n
                } : (n = function(e, t) {
                    return (t.valueOf() - e.valueOf()) / 36e5
                }(e, t), qe(n) ? {
                    unit: "hour",
                    value: n
                } : (n = function(e, t) {
                    return (t.valueOf() - e.valueOf()) / 6e4
                }(e, t), qe(n) ? {
                    unit: "minute",
                    value: n
                } : (n = function(e, t) {
                    return (t.valueOf() - e.valueOf()) / 1e3
                }(e, t), qe(n) ? {
                    unit: "second",
                    value: n
                } : {
                    unit: "millisecond",
                    value: t.valueOf() - e.valueOf()
                }))))))
            }
            countDurationsBetween(e, t, n) {
                let r;
                return n.years && (r = this.diffWholeYears(e, t), null !== r) ? r / (tt(n) / 365) : n.months && (r = this.diffWholeMonths(e, t), null !== r) ? r / function(e) {
                    return tt(e) / 30
                }(n) : n.days && (r = At(e, t), null !== r) ? r / tt(n) : (t.valueOf() - e.valueOf()) / nt(n)
            }
            startOf(e, t) {
                return "year" === t ? this.startOfYear(e) : "month" === t ? this.startOfMonth(e) : "week" === t ? this.startOfWeek(e) : "day" === t ? Dt(e) : "hour" === t ? function(e) {
                    return Rt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours()])
                }(e) : "minute" === t ? function(e) {
                    return Rt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes()])
                }(e) : "second" === t ? function(e) {
                    return Rt([e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), e.getUTCHours(), e.getUTCMinutes(), e.getUTCSeconds()])
                }(e) : null
            }
            startOfYear(e) {
                return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e)])
            }
            startOfMonth(e) {
                return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e)])
            }
            startOfWeek(e) {
                return this.calendarSystem.arrayToMarker([this.calendarSystem.getMarkerYear(e), this.calendarSystem.getMarkerMonth(e), e.getUTCDate() - (e.getUTCDay() - this.weekDow + 7) % 7])
            }
            computeWeekNumber(e) {
                return this.weekNumberFunc ? this.weekNumberFunc(this.toDate(e)) : function(e, t, n) {
                    let r = e.getUTCFullYear(),
                        i = St(e, r, t, n);
                    if (i < 1) return St(e, r - 1, t, n);
                    let s = St(e, r + 1, t, n);
                    return s >= 1 ? Math.min(i, s) : i
                }(e, this.weekDow, this.weekDoy)
            }
            format(e, t, n = {}) {
                return t.format({
                    marker: e,
                    timeZoneOffset: null != n.forcedTzo ? n.forcedTzo : this.offsetForMarker(e)
                }, this)
            }
            formatRange(e, t, n, r = {}) {
                return r.isEndExclusive && (t = yt(t, -1)), n.formatRange({
                    marker: e,
                    timeZoneOffset: null != r.forcedStartTzo ? r.forcedStartTzo : this.offsetForMarker(e)
                }, {
                    marker: t,
                    timeZoneOffset: null != r.forcedEndTzo ? r.forcedEndTzo : this.offsetForMarker(t)
                }, this, r.defaultSeparator)
            }
            formatIso(e, t = {}) {
                let n = null;
                return t.omitTimeZoneOffset || (n = null != t.forcedTzo ? t.forcedTzo : this.offsetForMarker(e)), Mt(e, n, t.omitTime)
            }
            timestampToMarker(e) {
                return "local" === this.timeZone ? Rt(Ct(new Date(e))) : "UTC" !== this.timeZone && this.namedTimeZoneImpl ? Rt(this.namedTimeZoneImpl.timestampToArray(e)) : new Date(e)
            }
            offsetForMarker(e) {
                return "local" === this.timeZone ? -xt(_t(e)).getTimezoneOffset() : "UTC" === this.timeZone ? 0 : this.namedTimeZoneImpl ? this.namedTimeZoneImpl.offsetForArray(_t(e)) : null
            }
            toDate(e, t) {
                return "local" === this.timeZone ? xt(_t(e)) : "UTC" === this.timeZone ? new Date(e.valueOf()) : this.namedTimeZoneImpl ? new Date(e.valueOf() - 1e3 * this.namedTimeZoneImpl.offsetForArray(_t(e)) * 60) : new Date(e.valueOf() - (t || 0))
            }
        }
        class si {
            constructor() {
                this.strictOrder = !1, this.allowReslicing = !1, this.maxCoord = -1, this.maxStackCnt = -1, this.levelCoords = [], this.entriesByLevel = [], this.stackCnts = {}
            }
            addSegs(e) {
                let t = [];
                for (let n of e) this.insertEntry(n, t);
                return t
            }
            insertEntry(e, t) {
                let n = this.findInsertion(e);
                return this.isInsertionValid(n, e) ? (this.insertEntryAt(e, n), 1) : this.handleInvalidInsertion(n, e, t)
            }
            isInsertionValid(e, t) {
                return (-1 === this.maxCoord || e.levelCoord + t.thickness <= this.maxCoord) && (-1 === this.maxStackCnt || e.stackCnt < this.maxStackCnt)
            }
            handleInvalidInsertion(e, t, n) {
                return this.allowReslicing && e.touchingEntry ? this.splitEntry(t, e.touchingEntry, n) : (n.push(t), 0)
            }
            splitEntry(e, t, n) {
                let r = 0,
                    i = [],
                    s = e.span,
                    o = t.span;
                return s.start < o.start && (r += this.insertEntry({
                    index: e.index,
                    thickness: e.thickness,
                    span: {
                        start: s.start,
                        end: o.start
                    }
                }, i)), s.end > o.end && (r += this.insertEntry({
                    index: e.index,
                    thickness: e.thickness,
                    span: {
                        start: o.end,
                        end: s.end
                    }
                }, i)), r ? (n.push({
                    index: e.index,
                    thickness: e.thickness,
                    span: li(o, s)
                }, ...i), r) : (n.push(e), 0)
            }
            insertEntryAt(e, t) {
                let {
                    entriesByLevel: n,
                    levelCoords: r
                } = this; - 1 === t.lateral ? (ci(r, t.level, t.levelCoord), ci(n, t.level, [e])) : ci(n[t.level], t.lateral, e), this.stackCnts[ai(e)] = t.stackCnt
            }
            findInsertion(e) {
                let {
                    levelCoords: t,
                    entriesByLevel: n,
                    strictOrder: r,
                    stackCnts: i
                } = this, s = t.length, o = 0, a = -1, l = -1, c = null, d = 0;
                for (let u = 0; u < s; u += 1) {
                    let s = t[u];
                    if (!r && s >= o + e.thickness) break;
                    let h, f = n[u],
                        g = di(f, e.span.start, oi),
                        p = g[0] + g[1];
                    for (;
                        (h = f[p]) && h.span.start < e.span.end;) {
                        let e = s + h.thickness;
                        e > o && (o = e, c = h, a = u, l = p), e === o && (d = Math.max(d, i[ai(h)] + 1)), p += 1
                    }
                }
                let u = 0;
                if (c)
                    for (u = a + 1; u < s && t[u] < o;) u += 1;
                let h = -1;
                return u < s && t[u] === o && (h = di(n[u], e.span.end, oi)[0]), {
                    touchingLevel: a,
                    touchingLateral: l,
                    touchingEntry: c,
                    stackCnt: d,
                    levelCoord: o,
                    level: u,
                    lateral: h
                }
            }
            toRects() {
                let {
                    entriesByLevel: e,
                    levelCoords: t
                } = this, n = e.length, r = [];
                for (let i = 0; i < n; i += 1) {
                    let n = e[i],
                        s = t[i];
                    for (let e of n) r.push(Object.assign(Object.assign({}, e), {
                        levelCoord: s
                    }))
                }
                return r
            }
        }

        function oi(e) {
            return e.span.end
        }

        function ai(e) {
            return e.index + ":" + e.span.start
        }

        function li(e, t) {
            let n = Math.max(e.start, t.start),
                r = Math.min(e.end, t.end);
            return n < r ? {
                start: n,
                end: r
            } : null
        }

        function ci(e, t, n) {
            e.splice(t, 0, n)
        }

        function di(e, t, n) {
            let r = 0,
                i = e.length;
            if (!i || t < n(e[r])) return [0, 0];
            if (t > n(e[i - 1])) return [i, 0];
            for (; r < i;) {
                let s = Math.floor(r + (i - r) / 2),
                    o = n(e[s]);
                if (t < o) i = s;
                else {
                    if (!(t > o)) return [s, 1];
                    r = s + 1
                }
            }
            return [r, 0]
        }
        class ui {
            constructor(e) {
                this.component = e.component, this.isHitComboAllowed = e.isHitComboAllowed || null
            }
            destroy() {}
        }

        function hi(e) {
            return {
                [e.component.uid]: e
            }
        }
        const fi = {};
        class gi {
            constructor(e, t) {
                this.emitter = new or
            }
            destroy() {}
            setMirrorIsVisible(e) {}
            setMirrorNeedsRevert(e) {}
            setAutoScrollEnabled(e) {}
        }
        const pi = {};
        Boolean;
        class mi extends Er {
            constructor() {
                super(...arguments), this.state = {
                    forPrint: !1
                }, this.handleBeforePrint = () => {
                    this.setState({
                        forPrint: !0
                    })
                }, this.handleAfterPrint = () => {
                    this.setState({
                        forPrint: !1
                    })
                }
            }
            render() {
                let {
                    props: e
                } = this, {
                    options: t
                } = e, {
                    forPrint: n
                } = this.state, r = n || "auto" === t.height || "auto" === t.contentHeight, i = r || null == t.height ? "" : t.height, s = ["fc", n ? "fc-media-print" : "fc-media-screen", `fc-direction-${t.direction}`, e.theme.getClass("root")];
                return Bn() || s.push("fc-liquid-hack"), e.children(s, i, r, n)
            }
            componentDidMount() {
                let {
                    emitter: e
                } = this.props;
                e.on("_beforeprint", this.handleBeforePrint), e.on("_afterprint", this.handleAfterPrint)
            }
            componentWillUnmount() {
                let {
                    emitter: e
                } = this.props;
                e.off("_beforeprint", this.handleBeforePrint), e.off("_afterprint", this.handleAfterPrint)
            }
        }
        const vi = "fc-col-header-cell";

        function bi(e) {
            return e.text
        }
        class yi extends Er {
            constructor() {
                super(...arguments), this.id = Le(), this.currentDomNodes = [], this.queuedDomNodes = [], this.handleEl = e => {
                    this.props.elRef && Ar(this.props.elRef, e)
                }
            }
            render() {
                const {
                    props: e,
                    context: t
                } = this, {
                    options: n
                } = t, {
                    generator: r,
                    renderProps: i
                } = e, o = Ai(e);
                let a, l = [];
                if (Ei(e.generatorName, n)) n.customRenderingReplacesEl && delete o.elRef;
                else {
                    const e = "function" == typeof r ? r(i, g) : r;
                    "string" == typeof e || s(e) || Array.isArray(e) ? a = e : "object" == typeof e && ("html" in e ? o.dangerouslySetInnerHTML = {
                        __html: e.html
                    } : "domNodes" in e && (l = Array.prototype.slice.call(e.domNodes)))
                }
                return this.queuedDomNodes = l, g(e.elTag, o, a)
            }
            componentDidMount() {
                this.applyQueueudDomNodes(), this.triggerCustomRendering(!0)
            }
            componentDidUpdate() {
                this.applyQueueudDomNodes(), this.triggerCustomRendering(!0)
            }
            componentWillUnmount() {
                this.triggerCustomRendering(!1)
            }
            triggerCustomRendering(e) {
                const {
                    props: t,
                    context: n
                } = this, {
                    handleCustomRendering: r,
                    customRenderingMetaMap: i
                } = n.options;
                if (r) {
                    const n = null == i ? void 0 : i[t.generatorName];
                    n && r(Object.assign({
                        id: this.id,
                        isActive: e,
                        containerEl: this.base,
                        reportNewContainerEl: this.handleEl,
                        generatorMeta: n
                    }, t))
                }
            }
            applyQueueudDomNodes() {
                const {
                    queuedDomNodes: e,
                    currentDomNodes: t
                } = this, n = this.base;
                if (!Nt(e, t)) {
                    t.forEach(Ce);
                    for (let t of e) n.appendChild(t);
                    this.currentDomNodes = e
                }
            }
        }

        function Ei(e, t) {
            var n;
            return Boolean(t.handleCustomRendering && e && (null === (n = t.customRenderingMetaMap) || void 0 === n ? void 0 : n[e]))
        }

        function Ai(e, t) {
            const n = Object.assign(Object.assign({}, e.elAttrs), {
                ref: e.elRef
            });
            return (e.elClasses || t) && (n.className = (e.elClasses || []).concat(t || []).concat(n.className || []).filter(Boolean).join(" ")), e.elStyle && (n.style = e.elStyle), n
        }
        yi.addPropsEquality({
            elClasses: Nt,
            elStyle: ut,
            elAttrs: function(e, t) {
                const n = ft(e, t);
                for (let e of n)
                    if (!ht.test(e)) return !1;
                return !0
            },
            renderProps: ut
        });
        const Di = pr(0);
        class Si extends v {
            constructor() {
                super(...arguments), this.InnerContent = wi.bind(void 0, this)
            }
            render() {
                const {
                    props: e
                } = this, t = function(e, t) {
                    const n = "function" == typeof e ? e(t) : e || [];
                    return "string" == typeof n ? [n] : n
                }(e.classNameGenerator, e.renderProps);
                if (e.children) {
                    const n = Ai(e, t),
                        r = e.children(this.InnerContent, e.renderProps, n);
                    return e.elTag ? g(e.elTag, n, r) : r
                }
                return g(yi, Object.assign(Object.assign({}, e), {
                    elTag: e.elTag || "div",
                    elClasses: (e.elClasses || []).concat(t),
                    renderId: this.context
                }))
            }
            componentDidMount() {
                var e, t;
                null === (t = (e = this.props).didMount) || void 0 === t || t.call(e, Object.assign(Object.assign({}, this.props.renderProps), {
                    el: this.base
                }))
            }
            componentWillUnmount() {
                var e, t;
                null === (t = (e = this.props).willUnmount) || void 0 === t || t.call(e, Object.assign(Object.assign({}, this.props.renderProps), {
                    el: this.base
                }))
            }
        }

        function wi(e, t) {
            const n = e.props;
            return g(yi, Object.assign({
                renderProps: n.renderProps,
                generatorName: n.generatorName,
                generator: n.generator,
                renderId: e.context
            }, t))
        }
        Si.contextType = Di;
        class Ci extends Er {
            render() {
                let {
                    dateEnv: e,
                    options: t,
                    theme: n,
                    viewApi: r
                } = this.context, {
                    props: i
                } = this, {
                    date: s,
                    dateProfile: o
                } = i, a = Yn(s, i.todayRange, null, o), l = [vi].concat(qn(a, n)), c = e.format(s, i.dayHeaderFormat), d = !a.isDisabled && i.colCnt > 1 ? $n(this.context, s) : {}, u = Object.assign(Object.assign(Object.assign({
                    date: e.toDate(s),
                    view: r
                }, i.extraRenderProps), {
                    text: c
                }), a);
                return g(Si, {
                    elTag: "th",
                    elClasses: l,
                    elAttrs: Object.assign({
                        role: "columnheader",
                        colSpan: i.colSpan,
                        "data-date": a.isDisabled ? void 0 : It(s)
                    }, i.extraDataAttrs),
                    renderProps: u,
                    generatorName: "dayHeaderContent",
                    generator: t.dayHeaderContent || bi,
                    classNameGenerator: t.dayHeaderClassNames,
                    didMount: t.dayHeaderDidMount,
                    willUnmount: t.dayHeaderWillUnmount
                }, (e => g("div", {
                    className: "fc-scrollgrid-sync-inner"
                }, !a.isDisabled && g(e, {
                    elTag: "a",
                    elAttrs: d,
                    elClasses: ["fc-col-header-cell-cushion", i.isSticky && "fc-sticky"]
                }))))
            }
        }
        const xi = Xt({
            weekday: "long"
        });
        class _i extends Er {
            render() {
                let {
                    props: e
                } = this, {
                    dateEnv: t,
                    theme: n,
                    viewApi: r,
                    options: i
                } = this.context, s = bt(new Date(2592e5), e.dow), o = {
                    dow: e.dow,
                    isDisabled: !1,
                    isFuture: !1,
                    isPast: !1,
                    isToday: !1,
                    isOther: !1
                }, a = t.format(s, e.dayHeaderFormat), l = Object.assign(Object.assign(Object.assign(Object.assign({
                    date: s
                }, o), {
                    view: r
                }), e.extraRenderProps), {
                    text: a
                });
                return g(Si, {
                    elTag: "th",
                    elClasses: [vi, ...qn(o, n), ...e.extraClassNames || []],
                    elAttrs: Object.assign({
                        role: "columnheader",
                        colSpan: e.colSpan
                    }, e.extraDataAttrs),
                    renderProps: l,
                    generatorName: "dayHeaderContent",
                    generator: i.dayHeaderContent || bi,
                    classNameGenerator: i.dayHeaderClassNames,
                    didMount: i.dayHeaderDidMount,
                    willUnmount: i.dayHeaderWillUnmount
                }, (n => g("div", {
                    className: "fc-scrollgrid-sync-inner"
                }, g(n, {
                    elTag: "a",
                    elClasses: ["fc-col-header-cell-cushion", e.isSticky && "fc-sticky"],
                    elAttrs: {
                        "aria-label": t.format(s, xi)
                    }
                }))))
            }
        }
        class Ri extends v {
            constructor(e, t) {
                super(e, t), this.initialNowDate = Sr(t.options.now, t.dateEnv), this.initialNowQueriedMs = (new Date).valueOf(), this.state = this.computeTiming().currentState
            }
            render() {
                let {
                    props: e,
                    state: t
                } = this;
                return e.children(t.nowDate, t.todayRange)
            }
            componentDidMount() {
                this.setTimeout()
            }
            componentDidUpdate(e) {
                e.unit !== this.props.unit && (this.clearTimeout(), this.setTimeout())
            }
            componentWillUnmount() {
                this.clearTimeout()
            }
            computeTiming() {
                let {
                    props: e,
                    context: t
                } = this, n = yt(this.initialNowDate, (new Date).valueOf() - this.initialNowQueriedMs), r = t.dateEnv.startOf(n, e.unit), i = t.dateEnv.add(r, Je(1, e.unit)), s = i.valueOf() - n.valueOf();
                return s = Math.min(864e5, s), {
                    currentState: {
                        nowDate: r,
                        todayRange: Ti(r)
                    },
                    nextState: {
                        nowDate: i,
                        todayRange: Ti(i)
                    },
                    waitMs: s
                }
            }
            setTimeout() {
                let {
                    nextState: e,
                    waitMs: t
                } = this.computeTiming();
                this.timeoutId = setTimeout((() => {
                    this.setState(e, (() => {
                        this.setTimeout()
                    }))
                }), t)
            }
            clearTimeout() {
                this.timeoutId && clearTimeout(this.timeoutId)
            }
        }

        function Ti(e) {
            let t = Dt(e);
            return {
                start: t,
                end: bt(t, 1)
            }
        }
        Ri.contextType = vr;
        class ki extends Er {
            constructor() {
                super(...arguments), this.createDayHeaderFormatter = Pt(Mi)
            }
            render() {
                let {
                    context: e
                } = this, {
                    dates: t,
                    dateProfile: n,
                    datesRepDistinctDays: r,
                    renderIntro: i
                } = this.props, s = this.createDayHeaderFormatter(e.options.dayHeaderFormat, r, t.length);
                return g(Ri, {
                    unit: "day"
                }, ((e, o) => g("tr", {
                    role: "row"
                }, i && i("day"), t.map((e => r ? g(Ci, {
                    key: e.toISOString(),
                    date: e,
                    dateProfile: n,
                    todayRange: o,
                    colCnt: t.length,
                    dayHeaderFormat: s
                }) : g(_i, {
                    key: e.getUTCDay(),
                    dow: e.getUTCDay(),
                    dayHeaderFormat: s
                }))))))
            }
        }

        function Mi(e, t, n) {
            return e || function(e, t) {
                return Xt(!e || t > 10 ? {
                    weekday: "short"
                } : t > 1 ? {
                    weekday: "short",
                    month: "numeric",
                    day: "numeric",
                    omitCommas: !0
                } : {
                    weekday: "long"
                })
            }(t, n)
        }
        class Ii {
            constructor(e, t) {
                let n = e.start,
                    {
                        end: r
                    } = e,
                    i = [],
                    s = [],
                    o = -1;
                for (; n < r;) t.isHiddenDay(n) ? i.push(o + .5) : (o += 1, i.push(o), s.push(n)), n = bt(n, 1);
                this.dates = s, this.indices = i, this.cnt = s.length
            }
            sliceRange(e) {
                let t = this.getDateDayIndex(e.start),
                    n = this.getDateDayIndex(bt(e.end, -1)),
                    r = Math.max(0, t),
                    i = Math.min(this.cnt - 1, n);
                return r = Math.ceil(r), i = Math.floor(i), r <= i ? {
                    firstIndex: r,
                    lastIndex: i,
                    isStart: t === r,
                    isEnd: n === i
                } : null
            }
            getDateDayIndex(e) {
                let {
                    indices: t
                } = this, n = Math.floor(Et(this.dates[0], e));
                return n < 0 ? t[0] - 1 : n >= t.length ? t[t.length - 1] + 1 : t[n]
            }
        }
        class Oi {
            constructor(e, t) {
                let n, r, i, {
                    dates: s
                } = e;
                if (t) {
                    for (r = s[0].getUTCDay(), n = 1; n < s.length && s[n].getUTCDay() !== r; n += 1);
                    i = Math.ceil(s.length / n)
                } else i = 1, n = s.length;
                this.rowCnt = i, this.colCnt = n, this.daySeries = e, this.cells = this.buildCells(), this.headerDates = this.buildHeaderDates()
            }
            buildCells() {
                let e = [];
                for (let t = 0; t < this.rowCnt; t += 1) {
                    let n = [];
                    for (let e = 0; e < this.colCnt; e += 1) n.push(this.buildCell(t, e));
                    e.push(n)
                }
                return e
            }
            buildCell(e, t) {
                let n = this.daySeries.dates[e * this.colCnt + t];
                return {
                    key: n.toISOString(),
                    date: n
                }
            }
            buildHeaderDates() {
                let e = [];
                for (let t = 0; t < this.colCnt; t += 1) e.push(this.cells[0][t].date);
                return e
            }
            sliceRange(e) {
                let {
                    colCnt: t
                } = this, n = this.daySeries.sliceRange(e), r = [];
                if (n) {
                    let {
                        firstIndex: e,
                        lastIndex: i
                    } = n, s = e;
                    for (; s <= i;) {
                        let o = Math.floor(s / t),
                            a = Math.min((o + 1) * t, i + 1);
                        r.push({
                            row: o,
                            firstCol: s % t,
                            lastCol: (a - 1) % t,
                            isStart: n.isStart && s === e,
                            isEnd: n.isEnd && a - 1 === i
                        }), s = a
                    }
                }
                return r
            }
        }
        class Ni {
            constructor() {
                this.sliceBusinessHours = Pt(this._sliceBusinessHours), this.sliceDateSelection = Pt(this._sliceDateSpan), this.sliceEventStore = Pt(this._sliceEventStore), this.sliceEventDrag = Pt(this._sliceInteraction), this.sliceEventResize = Pt(this._sliceInteraction), this.forceDayIfListItem = !1
            }
            sliceProps(e, t, n, r, ...i) {
                let {
                    eventUiBases: s
                } = e, o = this.sliceEventStore(e.eventStore, s, t, n, ...i);
                return {
                    dateSelectionSegs: this.sliceDateSelection(e.dateSelection, s, r, ...i),
                    businessHourSegs: this.sliceBusinessHours(e.businessHours, t, n, r, ...i),
                    fgEventSegs: o.fg,
                    bgEventSegs: o.bg,
                    eventDrag: this.sliceEventDrag(e.eventDrag, s, t, n, ...i),
                    eventResize: this.sliceEventResize(e.eventResize, s, t, n, ...i),
                    eventSelection: e.eventSelection
                }
            }
            sliceNowDate(e, t, ...n) {
                return this._sliceDateSpan({
                    range: {
                        start: e,
                        end: yt(e, 1)
                    },
                    allDay: !1
                }, {}, t, ...n)
            }
            _sliceBusinessHours(e, t, n, r, ...i) {
                return e ? this._sliceEventStore(cn(e, Pi(t, Boolean(n)), r), {}, t, n, ...i).bg : []
            }
            _sliceEventStore(e, t, n, r, ...i) {
                if (e) {
                    let s = Pr(e, t, Pi(n, Boolean(r)), r);
                    return {
                        bg: this.sliceEventRanges(s.bg, i),
                        fg: this.sliceEventRanges(s.fg, i)
                    }
                }
                return {
                    bg: [],
                    fg: []
                }
            }
            _sliceInteraction(e, t, n, r, ...i) {
                if (!e) return null;
                let s = Pr(e.mutatedEvents, t, Pi(n, Boolean(r)), r);
                return {
                    segs: this.sliceEventRanges(s.fg, i),
                    affectedInstances: e.affectedEvents.instances,
                    isEvent: e.isEvent
                }
            }
            _sliceDateSpan(e, t, n, ...r) {
                if (!e) return [];
                let i = function(e, t, n) {
                        let r = xn({
                                editable: !1
                            }, n),
                            i = Rn(r.refined, r.extra, "", e.allDay, !0, n);
                        return {
                            def: i,
                            ui: zr(i, t),
                            instance: ln(i.defId, e.range),
                            range: e.range,
                            isStart: !0,
                            isEnd: !0
                        }
                    }(e, t, n),
                    s = this.sliceRange(e.range, ...r);
                for (let e of s) e.eventRange = i;
                return s
            }
            sliceEventRanges(e, t) {
                let n = [];
                for (let r of e) n.push(...this.sliceEventRange(r, t));
                return n
            }
            sliceEventRange(e, t) {
                let n = e.range;
                this.forceDayIfListItem && "list-item" === e.ui.display && (n = {
                    start: n.start,
                    end: bt(n.start, 1)
                });
                let r = this.sliceRange(n, ...t);
                for (let t of r) t.eventRange = e, t.isStart = e.isStart && t.isStart, t.isEnd = e.isEnd && t.isEnd;
                return r
            }
        }

        function Pi(e, t) {
            let n = e.activeRange;
            return t ? n : {
                start: yt(n.start, e.slotMinTime.milliseconds),
                end: yt(n.end, e.slotMaxTime.milliseconds - 864e5)
            }
        }

        function Hi(e, t, n, r, i) {
            switch (t.type) {
                case "RECEIVE_EVENTS":
                    return function(e, t, n, r, i, s) {
                        if (t && n === t.latestFetchId) {
                            let n = un(function(e, t, n) {
                                let r = n.options.eventDataTransform,
                                    i = t ? t.eventDataTransform : null;
                                i && (e = Bi(e, i));
                                r && (e = Bi(e, r));
                                return e
                            }(i, t, s), t, s);
                            return r && (n = cn(n, r, s)), gn(ji(e, t.sourceId), n)
                        }
                        return e
                    }(e, n[t.sourceId], t.fetchId, t.fetchRange, t.rawEvents, i);
                case "ADD_EVENTS":
                    return function(e, t, n, r) {
                        n && (t = cn(t, n, r));
                        return gn(e, t)
                    }(e, t.eventStore, r ? r.activeRange : null, i);
                case "RESET_EVENTS":
                    return t.eventStore;
                case "MERGE_EVENTS":
                    return gn(e, t.eventStore);
                case "PREV":
                case "NEXT":
                case "CHANGE_DATE":
                case "CHANGE_VIEW_TYPE":
                    return r ? cn(e, r.activeRange, i) : e;
                case "REMOVE_EVENTS":
                    return function(e, t) {
                        let {
                            defs: n,
                            instances: r
                        } = e, i = {}, s = {};
                        for (let e in n) t.defs[e] || (i[e] = n[e]);
                        for (let e in r) !t.instances[e] && i[r[e].defId] && (s[e] = r[e]);
                        return {
                            defs: i,
                            instances: s
                        }
                    }(e, t.eventStore);
                case "REMOVE_EVENT_SOURCE":
                    return ji(e, t.sourceId);
                case "REMOVE_ALL_EVENT_SOURCES":
                    return pn(e, (e => !e.sourceId));
                case "REMOVE_ALL_EVENTS":
                    return {
                        defs: {}, instances: {}
                    };
                default:
                    return e
            }
        }

        function Bi(e, t) {
            let n;
            if (t) {
                n = [];
                for (let r of e) {
                    let e = t(r);
                    e ? n.push(e) : null == e && n.push(r)
                }
            } else n = e;
            return n
        }

        function ji(e, t) {
            return pn(e, (e => e.sourceId !== t))
        }

        function zi(e, t, n) {
            let {
                instances: r
            } = e.mutatedEvents;
            for (let e in r)
                if (!Gn(t.validRange, r[e].range)) return !1;
            return Ui({
                eventDrag: e
            }, n)
        }

        function Ui(e, t) {
            let n = t.getCurrentData(),
                r = Object.assign({
                    businessHours: n.businessHours,
                    dateSelection: "",
                    eventStore: n.eventStore,
                    eventUiBases: n.eventUiBases,
                    eventSelection: "",
                    eventDrag: null,
                    eventResize: null
                }, e);
            return (t.pluginHooks.isPropsValid || Li)(r, t)
        }

        function Li(e, t, n = {}, r) {
            return !(e.eventDrag && ! function(e, t, n, r) {
                let i = t.getCurrentData(),
                    s = e.eventDrag,
                    o = s.mutatedEvents,
                    a = o.defs,
                    l = o.instances,
                    c = jr(a, s.isEvent ? e.eventUiBases : {
                        "": i.selectionConfig
                    });
                r && (c = lt(c, r));
                let d = (g = e.eventStore, p = s.affectedEvents.instances, {
                        defs: g.defs,
                        instances: at(g.instances, (e => !p[e.instanceId]))
                    }),
                    u = d.defs,
                    h = d.instances,
                    f = jr(u, e.eventUiBases);
                var g, p;
                for (let r in l) {
                    let o = l[r],
                        g = o.range,
                        p = c[o.defId],
                        m = a[o.defId];
                    if (!Wi(p.constraints, g, d, e.businessHours, t)) return !1;
                    let {
                        eventOverlap: v
                    } = t.options, b = "function" == typeof v ? v : null;
                    for (let e in h) {
                        let n = h[e];
                        if (Vn(g, n.range)) {
                            if (!1 === f[n.defId].overlap && s.isEvent) return !1;
                            if (!1 === p.overlap) return !1;
                            if (b && !b(new Ir(t, u[n.defId], n), new Ir(t, m, o))) return !1
                        }
                    }
                    let y = i.eventStore;
                    for (let e of p.allows) {
                        let i, s = Object.assign(Object.assign({}, n), {
                                range: o.range,
                                allDay: m.allDay
                            }),
                            a = y.defs[m.defId],
                            l = y.instances[r];
                        if (i = a ? new Ir(t, a, l) : new Ir(t, m), !e(xr(s, t), i)) return !1
                    }
                }
                return !0
            }(e, t, n, r)) && !(e.dateSelection && ! function(e, t, n, r) {
                let i = e.eventStore,
                    s = i.defs,
                    o = i.instances,
                    a = e.dateSelection,
                    l = a.range,
                    {
                        selectionConfig: c
                    } = t.getCurrentData();
                r && (c = r(c));
                if (!Wi(c.constraints, l, i, e.businessHours, t)) return !1;
                let {
                    selectOverlap: d
                } = t.options, u = "function" == typeof d ? d : null;
                for (let e in o) {
                    let n = o[e];
                    if (Vn(l, n.range)) {
                        if (!1 === c.overlap) return !1;
                        if (u && !u(new Ir(t, s[n.defId], n), null)) return !1
                    }
                }
                for (let e of c.allows) {
                    if (!e(xr(Object.assign(Object.assign({}, n), a), t), null)) return !1
                }
                return !0
            }(e, t, n, r))
        }

        function Wi(e, t, n, r, i) {
            for (let s of e)
                if (!Gi(Fi(s, t, n, r, i), t)) return !1;
            return !0
        }

        function Fi(e, t, n, r, i) {
            return "businessHours" === e ? Vi(cn(r, t, i)) : "string" == typeof e ? Vi(pn(n, (t => t.groupId === e))) : "object" == typeof e && e ? Vi(cn(e, t, i)) : []
        }

        function Vi(e) {
            let {
                instances: t
            } = e, n = [];
            for (let e in t) n.push(t[e].range);
            return n
        }

        function Gi(e, t) {
            for (let n of e)
                if (Gn(n, t)) return !0;
            return !1
        }
        class Qi extends Error {
            constructor(e, t) {
                super(e), this.response = t
            }
        }
        class Yi {
            constructor(e) {
                this.drainedOption = e, this.isRunning = !1, this.isDirty = !1, this.pauseDepths = {}, this.timeoutId = 0
            }
            request(e) {
                this.isDirty = !0, this.isPaused() || (this.clearTimeout(), null == e ? this.tryDrain() : this.timeoutId = setTimeout(this.tryDrain.bind(this), e))
            }
            pause(e = "") {
                let {
                    pauseDepths: t
                } = this;
                t[e] = (t[e] || 0) + 1, this.clearTimeout()
            }
            resume(e = "", t) {
                let {
                    pauseDepths: n
                } = this;
                if (e in n) {
                    if (t) delete n[e];
                    else {
                        n[e] -= 1, n[e] <= 0 && delete n[e]
                    }
                    this.tryDrain()
                }
            }
            isPaused() {
                return Object.keys(this.pauseDepths).length
            }
            tryDrain() {
                if (!this.isRunning && !this.isPaused()) {
                    for (this.isRunning = !0; this.isDirty;) this.isDirty = !1, this.drained();
                    this.isRunning = !1
                }
            }
            clear() {
                this.clearTimeout(), this.isDirty = !1, this.pauseDepths = {}
            }
            clearTimeout() {
                this.timeoutId && (clearTimeout(this.timeoutId), this.timeoutId = 0)
            }
            drained() {
                this.drainedOption && this.drainedOption()
            }
        }
        const qi = /^(visible|hidden)$/;
        class Zi extends Er {
            constructor() {
                super(...arguments), this.handleEl = e => {
                    this.el = e, Ar(this.props.elRef, e)
                }
            }
            render() {
                let {
                    props: e
                } = this, {
                    liquid: t,
                    liquidIsAbsolute: n
                } = e, r = t && n, i = ["fc-scroller"];
                return t && (n ? i.push("fc-scroller-liquid-absolute") : i.push("fc-scroller-liquid")), g("div", {
                    ref: this.handleEl,
                    className: i.join(" "),
                    style: {
                        overflowX: e.overflowX,
                        overflowY: e.overflowY,
                        left: r && -(e.overcomeLeft || 0) || "",
                        right: r && -(e.overcomeRight || 0) || "",
                        bottom: r && -(e.overcomeBottom || 0) || "",
                        marginLeft: !r && -(e.overcomeLeft || 0) || "",
                        marginRight: !r && -(e.overcomeRight || 0) || "",
                        marginBottom: !r && -(e.overcomeBottom || 0) || "",
                        maxHeight: e.maxHeight || ""
                    }
                }, e.children)
            }
            needsXScrolling() {
                if (qi.test(this.props.overflowX)) return !1;
                let {
                    el: e
                } = this, t = this.el.getBoundingClientRect().width - this.getYScrollbarWidth(), {
                    children: n
                } = e;
                for (let e = 0; e < n.length; e += 1) {
                    if (n[e].getBoundingClientRect().width > t) return !0
                }
                return !1
            }
            needsYScrolling() {
                if (qi.test(this.props.overflowY)) return !1;
                let {
                    el: e
                } = this, t = this.el.getBoundingClientRect().height - this.getXScrollbarWidth(), {
                    children: n
                } = e;
                for (let e = 0; e < n.length; e += 1) {
                    if (n[e].getBoundingClientRect().height > t) return !0
                }
                return !1
            }
            getXScrollbarWidth() {
                return qi.test(this.props.overflowX) ? 0 : this.el.offsetHeight - this.el.clientHeight
            }
            getYScrollbarWidth() {
                return qi.test(this.props.overflowY) ? 0 : this.el.offsetWidth - this.el.clientWidth
            }
        }
        class Xi {
            constructor(e) {
                this.masterCallback = e, this.currentMap = {}, this.depths = {}, this.callbackMap = {}, this.handleValue = (e, t) => {
                    let {
                        depths: n,
                        currentMap: r
                    } = this, i = !1, s = !1;
                    null !== e ? (i = t in r, r[t] = e, n[t] = (n[t] || 0) + 1, s = !0) : (n[t] -= 1, n[t] || (delete r[t], delete this.callbackMap[t], i = !0)), this.masterCallback && (i && this.masterCallback(null, String(t)), s && this.masterCallback(e, String(t)))
                }
            }
            createRef(e) {
                let t = this.callbackMap[e];
                return t || (t = this.callbackMap[e] = t => {
                    this.handleValue(t, String(e))
                }), t
            }
            collect(e, t, n) {
                return function(e, t = 0, n, r = 1) {
                    let i = [];
                    null == n && (n = Object.keys(e).length);
                    for (let s = t; s < n; s += r) {
                        let t = e[s];
                        void 0 !== t && i.push(t)
                    }
                    return i
                }(this.currentMap, e, t, n)
            }
            getAll() {
                return dt(this.currentMap)
            }
        }

        function $i(e) {
            let t = function(e, t) {
                    let n = e instanceof HTMLElement ? [e] : e,
                        r = [];
                    for (let e = 0; e < n.length; e += 1) {
                        let i = n[e].querySelectorAll(t);
                        for (let e = 0; e < i.length; e += 1) r.push(i[e])
                    }
                    return r
                }(e, ".fc-scrollgrid-shrink"),
                n = 0;
            for (let e of t) n = Math.max(n, Ze(e));
            return Math.ceil(n)
        }

        function Ji(e, t) {
            return e.liquid && t.liquid
        }

        function Ki(e, t) {
            return Nt(e, t, ut)
        }

        function es(e, t) {
            let n = [];
            for (let r of e) {
                let e = r.span || 1;
                for (let i = 0; i < e; i += 1) n.push(g("col", {
                    style: {
                        width: "shrink" === r.width ? ts(t) : r.width || "",
                        minWidth: r.minWidth || ""
                    }
                }))
            }
            return g("colgroup", {}, ...n)
        }

        function ts(e) {
            return null == e ? 4 : e
        }

        function ns(e, t) {
            let n = ["fc-scrollgrid-section", `fc-scrollgrid-section-${e.type}`, e.className];
            return t && e.liquid && null == e.maxHeight && n.push("fc-scrollgrid-section-liquid"), e.isSticky && n.push("fc-scrollgrid-section-sticky"), n
        }

        function rs(e) {
            return g("div", {
                className: "fc-scrollgrid-sticky-shim",
                style: {
                    width: e.clientWidth,
                    minWidth: e.tableMinWidth
                }
            })
        }

        function is(e) {
            let {
                stickyHeaderDates: t
            } = e;
            return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t
        }

        function ss(e) {
            let {
                stickyFooterScrollbar: t
            } = e;
            return null != t && "auto" !== t || (t = "auto" === e.height || "auto" === e.viewHeight), t
        }
        class os extends Er {
            constructor() {
                super(...arguments), this.processCols = Pt((e => e), Ki), this.renderMicroColGroup = Pt(es), this.scrollerRefs = new Xi, this.scrollerElRefs = new Xi(this._handleScrollerEl.bind(this)), this.state = {
                    shrinkWidth: null,
                    forceYScrollbars: !1,
                    scrollerClientWidths: {},
                    scrollerClientHeights: {}
                }, this.handleSizing = () => {
                    this.safeSetState(Object.assign({
                        shrinkWidth: this.computeShrinkWidth()
                    }, this.computeScrollerDims()))
                }
            }
            render() {
                let {
                    props: e,
                    state: t,
                    context: n
                } = this, r = e.sections || [], i = this.processCols(e.cols), s = this.renderMicroColGroup(i, t.shrinkWidth), o = function(e, t) {
                    let n = ["fc-scrollgrid", t.theme.getClass("table")];
                    return e && n.push("fc-scrollgrid-liquid"), n
                }(e.liquid, n);
                e.collapsibleWidth && o.push("fc-scrollgrid-collapsible");
                let a, l = r.length,
                    c = 0,
                    d = [],
                    u = [],
                    h = [];
                for (; c < l && "header" === (a = r[c]).type;) d.push(this.renderSection(a, s, !0)), c += 1;
                for (; c < l && "body" === (a = r[c]).type;) u.push(this.renderSection(a, s, !1)), c += 1;
                for (; c < l && "footer" === (a = r[c]).type;) h.push(this.renderSection(a, s, !0)), c += 1;
                let f = !Bn();
                const p = {
                    role: "rowgroup"
                };
                return g("table", {
                    role: "grid",
                    className: o.join(" "),
                    style: {
                        height: e.height
                    }
                }, Boolean(!f && d.length) && g("thead", p, ...d), Boolean(!f && u.length) && g("tbody", p, ...u), Boolean(!f && h.length) && g("tfoot", p, ...h), f && g("tbody", p, ...d, ...u, ...h))
            }
            renderSection(e, t, n) {
                return "outerContent" in e ? g(m, {
                    key: e.key
                }, e.outerContent) : g("tr", {
                    key: e.key,
                    role: "presentation",
                    className: ns(e, this.props.liquid).join(" ")
                }, this.renderChunkTd(e, t, e.chunk, n))
            }
            renderChunkTd(e, t, n, r) {
                if ("outerContent" in n) return n.outerContent;
                let {
                    props: i
                } = this, {
                    forceYScrollbars: s,
                    scrollerClientWidths: o,
                    scrollerClientHeights: a
                } = this.state, l = function(e, t) {
                    return null != t.maxHeight || Ji(e, t)
                }(i, e), c = Ji(i, e), d = i.liquid ? s ? "scroll" : l ? "auto" : "hidden" : "visible", u = e.key, h = function(e, t, n, r) {
                    let {
                        expandRows: i
                    } = n;
                    return "function" == typeof t.content ? t.content(n) : g("table", {
                        role: "presentation",
                        className: [t.tableClassName, e.syncRowHeights ? "fc-scrollgrid-sync-table" : ""].join(" "),
                        style: {
                            minWidth: n.tableMinWidth,
                            width: n.clientWidth,
                            height: i ? n.clientHeight : ""
                        }
                    }, n.tableColGroupNode, g(r ? "thead" : "tbody", {
                        role: "presentation"
                    }, "function" == typeof t.rowContent ? t.rowContent(n) : t.rowContent))
                }(e, n, {
                    tableColGroupNode: t,
                    tableMinWidth: "",
                    clientWidth: i.collapsibleWidth || void 0 === o[u] ? null : o[u],
                    clientHeight: void 0 !== a[u] ? a[u] : null,
                    expandRows: e.expandRows,
                    syncRowHeights: !1,
                    rowSyncHeights: [],
                    reportRowHeightChange: () => {}
                }, r);
                return g(r ? "th" : "td", {
                    ref: n.elRef,
                    role: "presentation"
                }, g("div", {
                    className: "fc-scroller-harness" + (c ? " fc-scroller-harness-liquid" : "")
                }, g(Zi, {
                    ref: this.scrollerRefs.createRef(u),
                    elRef: this.scrollerElRefs.createRef(u),
                    overflowY: d,
                    overflowX: i.liquid ? "hidden" : "visible",
                    maxHeight: e.maxHeight,
                    liquid: c,
                    liquidIsAbsolute: !0
                }, h)))
            }
            _handleScrollerEl(e, t) {
                let n = function(e, t) {
                    for (let n of e)
                        if (n.key === t) return n;
                    return null
                }(this.props.sections, t);
                n && Ar(n.chunk.scrollerElRef, e)
            }
            componentDidMount() {
                this.handleSizing(), this.context.addResizeHandler(this.handleSizing)
            }
            componentDidUpdate() {
                this.handleSizing()
            }
            componentWillUnmount() {
                this.context.removeResizeHandler(this.handleSizing)
            }
            computeShrinkWidth() {
                return function(e) {
                    for (let t of e)
                        if ("shrink" === t.width) return !0;
                    return !1
                }(this.props.cols) ? $i(this.scrollerElRefs.getAll()) : 0
            }
            computeScrollerDims() {
                let e = tr(),
                    {
                        scrollerRefs: t,
                        scrollerElRefs: n
                    } = this,
                    r = !1,
                    i = {},
                    s = {};
                for (let e in t.currentMap) {
                    let n = t.currentMap[e];
                    if (n && n.needsYScrolling()) {
                        r = !0;
                        break
                    }
                }
                for (let t of this.props.sections) {
                    let o = t.key,
                        a = n.currentMap[o];
                    if (a) {
                        let t = a.parentNode;
                        i[o] = Math.floor(t.getBoundingClientRect().width - (r ? e.y : 0)), s[o] = Math.floor(t.getBoundingClientRect().height)
                    }
                }
                return {
                    forceYScrollbars: r,
                    scrollerClientWidths: i,
                    scrollerClientHeights: s
                }
            }
        }
        os.addStateEquality({
            scrollerClientWidths: ut,
            scrollerClientHeights: ut
        });
        class as extends Er {
            constructor() {
                super(...arguments), this.handleEl = e => {
                    this.el = e, e && Hr(e, this.props.seg)
                }
            }
            render() {
                const {
                    props: e,
                    context: t
                } = this, {
                    options: n
                } = t, {
                    seg: r
                } = e, {
                    eventRange: i
                } = r, {
                    ui: s
                } = i, o = {
                    event: new Ir(t, i.def, i.instance),
                    view: t.viewApi,
                    timeText: e.timeText,
                    textColor: s.textColor,
                    backgroundColor: s.backgroundColor,
                    borderColor: s.borderColor,
                    isDraggable: !e.disableDragging && Wr(r, t),
                    isStartResizable: !e.disableResizing && Fr(r, t),
                    isEndResizable: !e.disableResizing && Vr(r),
                    isMirror: Boolean(e.isDragging || e.isResizing || e.isDateSelecting),
                    isStart: Boolean(r.isStart),
                    isEnd: Boolean(r.isEnd),
                    isPast: Boolean(e.isPast),
                    isFuture: Boolean(e.isFuture),
                    isToday: Boolean(e.isToday),
                    isSelected: Boolean(e.isSelected),
                    isDragging: Boolean(e.isDragging),
                    isResizing: Boolean(e.isResizing)
                };
                return g(Si, Object.assign({}, e, {
                    elRef: this.handleEl,
                    elClasses: [...Yr(o), ...r.eventRange.ui.classNames, ...e.elClasses || []],
                    renderProps: o,
                    generatorName: "eventContent",
                    generator: n.eventContent || e.defaultGenerator,
                    classNameGenerator: n.eventClassNames,
                    didMount: n.eventDidMount,
                    willUnmount: n.eventWillUnmount
                }))
            }
            componentDidUpdate(e) {
                this.el && this.props.seg !== e.seg && Hr(this.el, this.props.seg)
            }
        }
        class ls extends Er {
            render() {
                let {
                    props: e,
                    context: t
                } = this, {
                    options: n
                } = t, {
                    seg: r
                } = e, {
                    ui: i
                } = r.eventRange, s = Gr(r, n.eventTimeFormat || e.defaultTimeFormat, t, e.defaultDisplayEventTime, e.defaultDisplayEventEnd);
                return g(as, Object.assign({}, e, {
                    elTag: "a",
                    elStyle: {
                        borderColor: i.borderColor,
                        backgroundColor: i.backgroundColor
                    },
                    elAttrs: Zr(r, t),
                    defaultGenerator: cs,
                    timeText: s
                }), ((e, t) => g(m, null, g(e, {
                    elTag: "div",
                    elClasses: ["fc-event-main"],
                    elStyle: {
                        color: t.textColor
                    }
                }), Boolean(t.isStartResizable) && g("div", {
                    className: "fc-event-resizer fc-event-resizer-start"
                }), Boolean(t.isEndResizable) && g("div", {
                    className: "fc-event-resizer fc-event-resizer-end"
                }))))
            }
        }

        function cs(e) {
            return g("div", {
                className: "fc-event-main-frame"
            }, e.timeText && g("div", {
                className: "fc-event-time"
            }, e.timeText), g("div", {
                className: "fc-event-title-container"
            }, g("div", {
                className: "fc-event-title fc-sticky"
            }, e.event.title || g(m, null, " "))))
        }
        const ds = e => g(vr.Consumer, null, (t => {
                let {
                    options: n
                } = t, r = {
                    isAxis: e.isAxis,
                    date: t.dateEnv.toDate(e.date),
                    view: t.viewApi
                };
                return g(Si, Object.assign({}, e, {
                    elTag: e.elTag || "div",
                    renderProps: r,
                    generatorName: "nowIndicatorContent",
                    generator: n.nowIndicatorContent,
                    classNameGenerator: n.nowIndicatorClassNames,
                    didMount: n.nowIndicatorDidMount,
                    willUnmount: n.nowIndicatorWillUnmount
                }))
            })),
            us = Xt({
                day: "numeric"
            });
        class hs extends Er {
            constructor() {
                super(...arguments), this.refineRenderProps = Ht(gs)
            }
            render() {
                let {
                    props: e,
                    context: t
                } = this, {
                    options: n
                } = t, r = this.refineRenderProps({
                    date: e.date,
                    dateProfile: e.dateProfile,
                    todayRange: e.todayRange,
                    showDayNumber: e.showDayNumber,
                    extraRenderProps: e.extraRenderProps,
                    viewApi: t.viewApi,
                    dateEnv: t.dateEnv
                });
                return g(Si, Object.assign({}, e, {
                    elClasses: [...qn(r, t.theme), ...e.elClasses || []],
                    elAttrs: Object.assign(Object.assign({}, e.elAttrs), r.isDisabled ? {} : {
                        "data-date": It(e.date)
                    }),
                    renderProps: r,
                    generatorName: "dayCellContent",
                    generator: n.dayCellContent || e.defaultGenerator,
                    classNameGenerator: r.isDisabled ? void 0 : n.dayCellClassNames,
                    didMount: n.dayCellDidMount,
                    willUnmount: n.dayCellWillUnmount
                }))
            }
        }

        function fs(e) {
            return Boolean(e.dayCellContent || Ei("dayCellContent", e))
        }

        function gs(e) {
            let {
                date: t,
                dateEnv: n
            } = e, r = Yn(t, e.todayRange, null, e.dateProfile);
            return Object.assign(Object.assign(Object.assign({
                date: n.toDate(t),
                view: e.viewApi
            }, r), {
                dayNumberText: e.showDayNumber ? n.format(t, us) : ""
            }), e.extraRenderProps)
        }
        class ps extends Er {
            render() {
                let {
                    props: e
                } = this, {
                    seg: t
                } = e;
                return g(as, {
                    elTag: "div",
                    elClasses: ["fc-bg-event"],
                    elStyle: {
                        backgroundColor: t.eventRange.ui.backgroundColor
                    },
                    defaultGenerator: ms,
                    seg: t,
                    timeText: "",
                    isDragging: !1,
                    isResizing: !1,
                    isDateSelecting: !1,
                    isSelected: !1,
                    isPast: e.isPast,
                    isFuture: e.isFuture,
                    isToday: e.isToday,
                    disableDragging: !0,
                    disableResizing: !0
                })
            }
        }

        function ms(e) {
            let {
                title: t
            } = e.event;
            return t && g("div", {
                className: "fc-event-title"
            }, e.event.title)
        }

        function vs(e) {
            return g("div", {
                className: `fc-${e}`
            })
        }
        const bs = e => g(vr.Consumer, null, (t => {
            let {
                dateEnv: n,
                options: r
            } = t, {
                date: i
            } = e, s = r.weekNumberFormat || e.defaultFormat, o = {
                num: n.computeWeekNumber(i),
                text: n.format(i, s),
                date: i
            };
            return g(Si, Object.assign({}, e, {
                renderProps: o,
                generatorName: "weekNumberContent",
                generator: r.weekNumberContent || ys,
                classNameGenerator: r.weekNumberClassNames,
                didMount: r.weekNumberDidMount,
                willUnmount: r.weekNumberWillUnmount
            }))
        }));

        function ys(e) {
            return e.text
        }
        class Es extends Er {
            constructor() {
                super(...arguments), this.state = {
                    titleId: Ne()
                }, this.handleRootEl = e => {
                    this.rootEl = e, this.props.elRef && Ar(this.props.elRef, e)
                }, this.handleDocumentMouseDown = e => {
                    const t = Me(e);
                    this.rootEl.contains(t) || this.handleCloseClick()
                }, this.handleDocumentKeyDown = e => {
                    "Escape" === e.key && this.handleCloseClick()
                }, this.handleCloseClick = () => {
                    let {
                        onClose: e
                    } = this.props;
                    e && e()
                }
            }
            render() {
                let {
                    theme: e,
                    options: t
                } = this.context, {
                    props: n,
                    state: r
                } = this, i = ["fc-popover", e.getClass("popover")].concat(n.extraClassNames || []);
                return fe(g("div", Object.assign({}, n.extraAttrs, {
                    id: n.id,
                    className: i.join(" "),
                    "aria-labelledby": r.titleId,
                    ref: this.handleRootEl
                }), g("div", {
                    className: "fc-popover-header " + e.getClass("popoverHeader")
                }, g("span", {
                    className: "fc-popover-title",
                    id: r.titleId
                }, n.title), g("span", {
                    className: "fc-popover-close " + e.getIconClass("close"),
                    title: t.closeHint,
                    onClick: this.handleCloseClick
                })), g("div", {
                    className: "fc-popover-body " + e.getClass("popoverContent")
                }, n.children)), n.parentEl)
            }
            componentDidMount() {
                document.addEventListener("mousedown", this.handleDocumentMouseDown), document.addEventListener("keydown", this.handleDocumentKeyDown), this.updateSize()
            }
            componentWillUnmount() {
                document.removeEventListener("mousedown", this.handleDocumentMouseDown), document.removeEventListener("keydown", this.handleDocumentKeyDown)
            }
            updateSize() {
                let {
                    isRtl: e
                } = this.context, {
                    alignmentEl: t,
                    alignGridTop: n
                } = this.props, {
                    rootEl: r
                } = this, i = function(e) {
                    let t = sr(e),
                        n = e.getBoundingClientRect();
                    for (let e of t) {
                        let t = Pn(n, e.getBoundingClientRect());
                        if (!t) return null;
                        n = t
                    }
                    return n
                }(t);
                if (i) {
                    let s = r.getBoundingClientRect(),
                        o = n ? xe(t, ".fc-scrollgrid").getBoundingClientRect().top : i.top,
                        a = e ? i.right - s.width : i.left;
                    o = Math.max(o, 10), a = Math.min(a, document.documentElement.clientWidth - 10 - s.width), a = Math.max(a, 10);
                    let l = r.offsetParent.getBoundingClientRect();
                    Te(r, {
                        top: o - l.top,
                        left: a - l.left
                    })
                }
            }
        }
        class As extends Dr {
            constructor() {
                super(...arguments), this.handleRootEl = e => {
                    this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
                        el: e,
                        useEventCenter: !1
                    }) : this.context.unregisterInteractiveComponent(this)
                }
            }
            render() {
                let {
                    options: e,
                    dateEnv: t
                } = this.context, {
                    props: n
                } = this, {
                    startDate: r,
                    todayRange: i,
                    dateProfile: s
                } = n, o = t.format(r, e.dayPopoverFormat);
                return g(hs, {
                    elRef: this.handleRootEl,
                    date: r,
                    dateProfile: s,
                    todayRange: i
                }, ((t, r, i) => g(Es, {
                    elRef: i.ref,
                    id: n.id,
                    title: o,
                    extraClassNames: ["fc-more-popover"].concat(i.className || []),
                    extraAttrs: i,
                    parentEl: n.parentEl,
                    alignmentEl: n.alignmentEl,
                    alignGridTop: n.alignGridTop,
                    onClose: n.onClose
                }, fs(e) && g(t, {
                    elTag: "div",
                    elClasses: ["fc-more-popover-misc"]
                }), n.children)))
            }
            queryHit(e, t, n, r) {
                let {
                    rootEl: i,
                    props: s
                } = this;
                return e >= 0 && e < n && t >= 0 && t < r ? {
                    dateProfile: s.dateProfile,
                    dateSpan: Object.assign({
                        allDay: !0,
                        range: {
                            start: s.startDate,
                            end: s.endDate
                        }
                    }, s.extraDateSpan),
                    dayEl: i,
                    rect: {
                        left: 0,
                        top: 0,
                        right: n,
                        bottom: r
                    },
                    layer: 1
                } : null
            }
        }
        class Ds extends Er {
            constructor() {
                super(...arguments), this.state = {
                    isPopoverOpen: !1,
                    popoverId: Ne()
                }, this.handleLinkEl = e => {
                    this.linkEl = e, this.props.elRef && Ar(this.props.elRef, e)
                }, this.handleClick = e => {
                    let {
                        props: t,
                        context: n
                    } = this, {
                        moreLinkClick: r
                    } = n.options, i = ws(t).start;

                    function s(e) {
                        let {
                            def: t,
                            instance: r,
                            range: i
                        } = e.eventRange;
                        return {
                            event: new Ir(n, t, r),
                            start: n.dateEnv.toDate(i.start),
                            end: n.dateEnv.toDate(i.end),
                            isStart: e.isStart,
                            isEnd: e.isEnd
                        }
                    }
                    "function" == typeof r && (r = r({
                        date: i,
                        allDay: Boolean(t.allDayDate),
                        allSegs: t.allSegs.map(s),
                        hiddenSegs: t.hiddenSegs.map(s),
                        jsEvent: e,
                        view: n.viewApi
                    })), r && "popover" !== r ? "string" == typeof r && n.calendarApi.zoomTo(i, r) : this.setState({
                        isPopoverOpen: !0
                    })
                }, this.handlePopoverClose = () => {
                    this.setState({
                        isPopoverOpen: !1
                    })
                }
            }
            render() {
                let {
                    props: e,
                    state: t
                } = this;
                return g(vr.Consumer, null, (n => {
                    let {
                        viewApi: r,
                        options: i,
                        calendarApi: s
                    } = n, {
                        moreLinkText: o
                    } = i, {
                        moreCnt: a
                    } = e, l = ws(e), c = "function" == typeof o ? o.call(s, a) : `+${a} ${o}`, d = Qe(i.moreLinkHint, [a], c), u = {
                        num: a,
                        shortText: `+${a}`,
                        text: c,
                        view: r
                    };
                    return g(m, null, Boolean(e.moreCnt) && g(Si, {
                        elTag: e.elTag || "a",
                        elRef: this.handleLinkEl,
                        elClasses: [...e.elClasses || [], "fc-more-link"],
                        elStyle: e.elStyle,
                        elAttrs: Object.assign(Object.assign(Object.assign({}, e.elAttrs), je(this.handleClick)), {
                            title: d,
                            "aria-expanded": t.isPopoverOpen,
                            "aria-controls": t.isPopoverOpen ? t.popoverId : ""
                        }),
                        renderProps: u,
                        generatorName: "moreLinkContent",
                        generator: i.moreLinkContent || e.defaultGenerator || Ss,
                        classNameGenerator: i.moreLinkClassNames,
                        didMount: i.moreLinkDidMount,
                        willUnmount: i.moreLinkWillUnmount
                    }, e.children), t.isPopoverOpen && g(As, {
                        id: t.popoverId,
                        startDate: l.start,
                        endDate: l.end,
                        dateProfile: e.dateProfile,
                        todayRange: e.todayRange,
                        extraDateSpan: e.extraDateSpan,
                        parentEl: this.parentEl,
                        alignmentEl: e.alignmentElRef ? e.alignmentElRef.current : this.linkEl,
                        alignGridTop: e.alignGridTop,
                        onClose: this.handlePopoverClose
                    }, e.popoverContent()))
                }))
            }
            componentDidMount() {
                this.updateParentEl()
            }
            componentDidUpdate() {
                this.updateParentEl()
            }
            updateParentEl() {
                this.linkEl && (this.parentEl = xe(this.linkEl, ".fc-view-harness"))
            }
        }

        function Ss(e) {
            return e.text
        }

        function ws(e) {
            if (e.allDayDate) return {
                start: e.allDayDate,
                end: bt(e.allDayDate, 1)
            };
            let {
                hiddenSegs: t
            } = e;
            return {
                start: Cs(t),
                end: (n = t, n.reduce(_s).eventRange.range.end)
            };
            var n
        }

        function Cs(e) {
            return e.reduce(xs).eventRange.range.start
        }

        function xs(e, t) {
            return e.eventRange.range.start < t.eventRange.range.start ? e : t
        }

        function _s(e, t) {
            return e.eventRange.range.end > t.eventRange.range.end ? e : t
        }
        class Rs extends Er {
            render() {
                let {
                    props: e,
                    context: t
                } = this, {
                    options: n
                } = t, r = {
                    view: t.viewApi
                };
                return g(Si, Object.assign({}, e, {
                    elTag: e.elTag || "div",
                    elClasses: [...Ts(e.viewSpec), ...e.elClasses || []],
                    renderProps: r,
                    classNameGenerator: n.viewClassNames,
                    generatorName: void 0,
                    generator: void 0,
                    didMount: n.viewDidMount,
                    willUnmount: n.viewWillUnmount
                }), (() => e.children))
            }
        }

        function Ts(e) {
            return [`fc-${e.type}-view`, "fc-view"]
        }

        function ks(e) {
            if (!e || "undefined" == typeof document) return;
            const t = document.head || document.getElementsByTagName("head")[0],
                n = document.createElement("style");
            n.type = "text/css", t.appendChild(n), n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(document.createTextNode(e))
        }
        const Ms = {
            id: String,
            defaultAllDay: Boolean,
            url: String,
            format: String,
            events: an,
            eventDataTransform: an,
            success: an,
            failure: an
        };

        function Is(e, t, n = Os(t)) {
            let r;
            if ("string" == typeof e ? r = {
                    url: e
                } : "function" == typeof e || Array.isArray(e) ? r = {
                    events: e
                } : "object" == typeof e && e && (r = e), r) {
                let {
                    refined: i,
                    extra: s
                } = on(r, n), o = function(e, t) {
                    let n = t.pluginHooks.eventSourceDefs;
                    for (let t = n.length - 1; t >= 0; t -= 1) {
                        let r = n[t].parseMeta(e);
                        if (r) return {
                            sourceDefId: t,
                            meta: r
                        }
                    }
                    return null
                }(i, t);
                if (o) return {
                    _raw: e,
                    isFetching: !1,
                    latestFetchId: "",
                    fetchRange: null,
                    defaultAllDay: i.defaultAllDay,
                    eventDataTransform: i.eventDataTransform,
                    success: i.success,
                    failure: i.failure,
                    publicId: i.id || "",
                    sourceId: Le(),
                    sourceDefId: o.sourceDefId,
                    meta: o.meta,
                    ui: yn(i, t),
                    extendedProps: s
                }
            }
            return null
        }

        function Os(e) {
            return Object.assign(Object.assign(Object.assign({}, vn), Ms), e.pluginHooks.eventSourceRefiners)
        }
        class Ns {
            getCurrentData() {
                return this.currentDataManager.getCurrentData()
            }
            dispatch(e) {
                this.currentDataManager.dispatch(e)
            }
            get view() {
                return this.getCurrentData().viewApi
            }
            batchRendering(e) {
                e()
            }
            updateSize() {
                this.trigger("_resize", !0)
            }
            setOption(e, t) {
                this.dispatch({
                    type: "SET_OPTION",
                    optionName: e,
                    rawOptionValue: t
                })
            }
            getOption(e) {
                return this.currentDataManager.currentCalendarOptionsInput[e]
            }
            getAvailableLocaleCodes() {
                return Object.keys(this.getCurrentData().availableRawLocales)
            }
            on(e, t) {
                let {
                    currentDataManager: n
                } = this;
                n.currentCalendarOptionsRefiners[e] ? n.emitter.on(e, t) : console.warn(`Unknown listener name '${e}'`)
            }
            off(e, t) {
                this.currentDataManager.emitter.off(e, t)
            }
            trigger(e, ...t) {
                this.currentDataManager.emitter.trigger(e, ...t)
            }
            changeView(e, t) {
                this.batchRendering((() => {
                    if (this.unselect(), t)
                        if (t.start && t.end) this.dispatch({
                            type: "CHANGE_VIEW_TYPE",
                            viewType: e
                        }), this.dispatch({
                            type: "SET_OPTION",
                            optionName: "visibleRange",
                            rawOptionValue: t
                        });
                        else {
                            let {
                                dateEnv: n
                            } = this.getCurrentData();
                            this.dispatch({
                                type: "CHANGE_VIEW_TYPE",
                                viewType: e,
                                dateMarker: n.createMarker(t)
                            })
                        }
                    else this.dispatch({
                        type: "CHANGE_VIEW_TYPE",
                        viewType: e
                    })
                }))
            }
            zoomTo(e, t) {
                let n;
                t = t || "day", n = this.getCurrentData().viewSpecs[t] || this.getUnitViewSpec(t), this.unselect(), n ? this.dispatch({
                    type: "CHANGE_VIEW_TYPE",
                    viewType: n.type,
                    dateMarker: e
                }) : this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: e
                })
            }
            getUnitViewSpec(e) {
                let t, n, {
                        viewSpecs: r,
                        toolbarConfig: i
                    } = this.getCurrentData(),
                    s = [].concat(i.header ? i.header.viewsWithButtons : [], i.footer ? i.footer.viewsWithButtons : []);
                for (let e in r) s.push(e);
                for (t = 0; t < s.length; t += 1)
                    if (n = r[s[t]], n && n.singleUnit === e) return n;
                return null
            }
            prev() {
                this.unselect(), this.dispatch({
                    type: "PREV"
                })
            }
            next() {
                this.unselect(), this.dispatch({
                    type: "NEXT"
                })
            }
            prevYear() {
                let e = this.getCurrentData();
                this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: e.dateEnv.addYears(e.currentDate, -1)
                })
            }
            nextYear() {
                let e = this.getCurrentData();
                this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: e.dateEnv.addYears(e.currentDate, 1)
                })
            }
            today() {
                let e = this.getCurrentData();
                this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: Sr(e.calendarOptions.now, e.dateEnv)
                })
            }
            gotoDate(e) {
                let t = this.getCurrentData();
                this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: t.dateEnv.createMarker(e)
                })
            }
            incrementDate(e) {
                let t = this.getCurrentData(),
                    n = Je(e);
                n && (this.unselect(), this.dispatch({
                    type: "CHANGE_DATE",
                    dateMarker: t.dateEnv.add(t.currentDate, n)
                }))
            }
            getDate() {
                let e = this.getCurrentData();
                return e.dateEnv.toDate(e.currentDate)
            }
            formatDate(e, t) {
                let {
                    dateEnv: n
                } = this.getCurrentData();
                return n.format(n.createMarker(e), Xt(t))
            }
            formatRange(e, t, n) {
                let {
                    dateEnv: r
                } = this.getCurrentData();
                return r.formatRange(r.createMarker(e), r.createMarker(t), Xt(n), n)
            }
            formatIso(e, t) {
                let {
                    dateEnv: n
                } = this.getCurrentData();
                return n.formatIso(n.createMarker(e), {
                    omitTime: t
                })
            }
            select(e, t) {
                let n;
                n = null == t ? null != e.start ? e : {
                    start: e,
                    end: null
                } : {
                    start: e,
                    end: t
                };
                let r = this.getCurrentData(),
                    i = $r(n, r.dateEnv, Je({
                        days: 1
                    }));
                i && (this.dispatch({
                    type: "SELECT_DATES",
                    selection: i
                }), Cr(i, null, r))
            }
            unselect(e) {
                let t = this.getCurrentData();
                t.dateSelection && (this.dispatch({
                    type: "UNSELECT_DATES"
                }), function(e, t) {
                    t.emitter.trigger("unselect", {
                        jsEvent: e ? e.origEvent : null,
                        view: t.viewApi || t.calendarApi.view
                    })
                }(e, t))
            }
            addEvent(e, t) {
                if (e instanceof Ir) {
                    let t = e._def,
                        n = e._instance;
                    return this.getCurrentData().eventStore.defs[t.defId] || (this.dispatch({
                        type: "ADD_EVENTS",
                        eventStore: hn({
                            def: t,
                            instance: n
                        })
                    }), this.triggerEventAdd(e)), e
                }
                let n, r = this.getCurrentData();
                if (t instanceof Mr) n = t.internalEventSource;
                else if ("boolean" == typeof t) t && ([n] = dt(r.eventSources));
                else if (null != t) {
                    let e = this.getEventSourceById(t);
                    if (!e) return console.warn(`Could not find an event source with ID "${t}"`), null;
                    n = e.internalEventSource
                }
                let i = Cn(e, n, r, !1);
                if (i) {
                    let e = new Ir(r, i.def, i.def.recurringDef ? null : i.instance);
                    return this.dispatch({
                        type: "ADD_EVENTS",
                        eventStore: hn(i)
                    }), this.triggerEventAdd(e), e
                }
                return null
            }
            triggerEventAdd(e) {
                let {
                    emitter: t
                } = this.getCurrentData();
                t.trigger("eventAdd", {
                    event: e,
                    relatedEvents: [],
                    revert: () => {
                        this.dispatch({
                            type: "REMOVE_EVENTS",
                            eventStore: Or(e)
                        })
                    }
                })
            }
            getEventById(e) {
                let t = this.getCurrentData(),
                    {
                        defs: n,
                        instances: r
                    } = t.eventStore;
                e = String(e);
                for (let i in n) {
                    let s = n[i];
                    if (s.publicId === e) {
                        if (s.recurringDef) return new Ir(t, s, null);
                        for (let e in r) {
                            let n = r[e];
                            if (n.defId === s.defId) return new Ir(t, s, n)
                        }
                    }
                }
                return null
            }
            getEvents() {
                let e = this.getCurrentData();
                return Nr(e.eventStore, e)
            }
            removeAllEvents() {
                this.dispatch({
                    type: "REMOVE_ALL_EVENTS"
                })
            }
            getEventSources() {
                let e = this.getCurrentData(),
                    t = e.eventSources,
                    n = [];
                for (let r in t) n.push(new Mr(e, t[r]));
                return n
            }
            getEventSourceById(e) {
                let t = this.getCurrentData(),
                    n = t.eventSources;
                e = String(e);
                for (let r in n)
                    if (n[r].publicId === e) return new Mr(t, n[r]);
                return null
            }
            addEventSource(e) {
                let t = this.getCurrentData();
                if (e instanceof Mr) return t.eventSources[e.internalEventSource.sourceId] || this.dispatch({
                    type: "ADD_EVENT_SOURCES",
                    sources: [e.internalEventSource]
                }), e;
                let n = Is(e, t);
                return n ? (this.dispatch({
                    type: "ADD_EVENT_SOURCES",
                    sources: [n]
                }), new Mr(t, n)) : null
            }
            removeAllEventSources() {
                this.dispatch({
                    type: "REMOVE_ALL_EVENT_SOURCES"
                })
            }
            refetchEvents() {
                this.dispatch({
                    type: "FETCH_EVENT_SOURCES",
                    isRefetch: !0
                })
            }
            scrollToTime(e) {
                let t = Je(e);
                t && this.trigger("_scrollRequest", {
                    time: t
                })
            }
        }
        ks(':root{--fc-small-font-size:.85em;--fc-page-bg-color:#fff;--fc-neutral-bg-color:hsla(0,0%,82%,.3);--fc-neutral-text-color:grey;--fc-border-color:#ddd;--fc-button-text-color:#fff;--fc-button-bg-color:#2c3e50;--fc-button-border-color:#2c3e50;--fc-button-hover-bg-color:#1e2b37;--fc-button-hover-border-color:#1a252f;--fc-button-active-bg-color:#1a252f;--fc-button-active-border-color:#151e27;--fc-event-bg-color:#3788d8;--fc-event-border-color:#3788d8;--fc-event-text-color:#fff;--fc-event-selected-overlay-color:rgba(0,0,0,.25);--fc-more-link-bg-color:#d0d0d0;--fc-more-link-text-color:inherit;--fc-event-resizer-thickness:8px;--fc-event-resizer-dot-total-width:8px;--fc-event-resizer-dot-border-width:1px;--fc-non-business-color:hsla(0,0%,84%,.3);--fc-bg-event-color:#8fdf82;--fc-bg-event-opacity:0.3;--fc-highlight-color:rgba(188,232,241,.3);--fc-today-bg-color:rgba(255,220,40,.15);--fc-now-indicator-color:red}.fc-not-allowed,.fc-not-allowed .fc-event{cursor:not-allowed}.fc-unselectable{-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-user-select:none;-moz-user-select:none;user-select:none}.fc{display:flex;flex-direction:column;font-size:1em}.fc,.fc *,.fc :after,.fc :before{box-sizing:border-box}.fc table{border-collapse:collapse;border-spacing:0;font-size:1em}.fc th{text-align:center}.fc td,.fc th{padding:0;vertical-align:top}.fc a[data-navlink]{cursor:pointer}.fc a[data-navlink]:hover{text-decoration:underline}.fc-direction-ltr{direction:ltr;text-align:left}.fc-direction-rtl{direction:rtl;text-align:right}.fc-theme-standard td,.fc-theme-standard th{border:1px solid var(--fc-border-color)}.fc-liquid-hack td,.fc-liquid-hack th{position:relative}@font-face{font-family:fcicons;font-style:normal;font-weight:400;src:url("data:application/x-font-ttf;charset=utf-8;base64,AAEAAAALAIAAAwAwT1MvMg8SBfAAAAC8AAAAYGNtYXAXVtKNAAABHAAAAFRnYXNwAAAAEAAAAXAAAAAIZ2x5ZgYydxIAAAF4AAAFNGhlYWQUJ7cIAAAGrAAAADZoaGVhB20DzAAABuQAAAAkaG10eCIABhQAAAcIAAAALGxvY2ED4AU6AAAHNAAAABhtYXhwAA8AjAAAB0wAAAAgbmFtZXsr690AAAdsAAABhnBvc3QAAwAAAAAI9AAAACAAAwPAAZAABQAAApkCzAAAAI8CmQLMAAAB6wAzAQkAAAAAAAAAAAAAAAAAAAABEAAAAAAAAAAAAAAAAAAAAABAAADpBgPA/8AAQAPAAEAAAAABAAAAAAAAAAAAAAAgAAAAAAADAAAAAwAAABwAAQADAAAAHAADAAEAAAAcAAQAOAAAAAoACAACAAIAAQAg6Qb//f//AAAAAAAg6QD//f//AAH/4xcEAAMAAQAAAAAAAAAAAAAAAQAB//8ADwABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAQAAAAAAAAAAAAIAADc5AQAAAAABAWIAjQKeAskAEwAAJSc3NjQnJiIHAQYUFwEWMjc2NCcCnuLiDQ0MJAz/AA0NAQAMJAwNDcni4gwjDQwM/wANIwz/AA0NDCMNAAAAAQFiAI0CngLJABMAACUBNjQnASYiBwYUHwEHBhQXFjI3AZ4BAA0N/wAMJAwNDeLiDQ0MJAyNAQAMIw0BAAwMDSMM4uINIwwNDQAAAAIA4gC3Ax4CngATACcAACUnNzY0JyYiDwEGFB8BFjI3NjQnISc3NjQnJiIPAQYUHwEWMjc2NCcB87e3DQ0MIw3VDQ3VDSMMDQ0BK7e3DQ0MJAzVDQ3VDCQMDQ3zuLcMJAwNDdUNIwzWDAwNIwy4twwkDA0N1Q0jDNYMDA0jDAAAAgDiALcDHgKeABMAJwAAJTc2NC8BJiIHBhQfAQcGFBcWMjchNzY0LwEmIgcGFB8BBwYUFxYyNwJJ1Q0N1Q0jDA0Nt7cNDQwjDf7V1Q0N1QwkDA0Nt7cNDQwkDLfWDCMN1Q0NDCQMt7gMIw0MDNYMIw3VDQ0MJAy3uAwjDQwMAAADAFUAAAOrA1UAMwBoAHcAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMhMjY1NCYjISIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAAVYRGRkR/qoRGRkRA1UFBAUOCQkVDAsZDf2rDRkLDBUJCA4FBQUFBQUOCQgVDAsZDQJVDRkLDBUJCQ4FBAVVAgECBQMCBwQECAX9qwQJAwQHAwMFAQICAgIBBQMDBwQDCQQCVQUIBAQHAgMFAgEC/oAZEhEZGRESGQAAAAADAFUAAAOrA1UAMwBoAIkAABMiBgcOAQcOAQcOARURFBYXHgEXHgEXHgEzITI2Nz4BNz4BNz4BNRE0JicuAScuAScuASMFITIWFx4BFx4BFx4BFREUBgcOAQcOAQcOASMhIiYnLgEnLgEnLgE1ETQ2Nz4BNz4BNz4BMxMzFRQWMzI2PQEzMjY1NCYrATU0JiMiBh0BIyIGFRQWM9UNGAwLFQkJDgUFBQUFBQ4JCRULDBgNAlYNGAwLFQkJDgUFBQUFBQ4JCRULDBgN/aoCVgQIBAQHAwMFAQIBAQIBBQMDBwQECAT9qgQIBAQHAwMFAQIBAQIBBQMDBwQECASAgBkSEhmAERkZEYAZEhIZgBEZGREDVQUEBQ4JCRUMCxkN/asNGQsMFQkIDgUFBQUFBQ4JCBUMCxkNAlUNGQsMFQkJDgUEBVUCAQIFAwIHBAQIBf2rBAkDBAcDAwUBAgICAgEFAwMHBAMJBAJVBQgEBAcCAwUCAQL+gIASGRkSgBkSERmAEhkZEoAZERIZAAABAOIAjQMeAskAIAAAExcHBhQXFjI/ARcWMjc2NC8BNzY0JyYiDwEnJiIHBhQX4uLiDQ0MJAzi4gwkDA0N4uINDQwkDOLiDCQMDQ0CjeLiDSMMDQ3h4Q0NDCMN4uIMIw0MDOLiDAwNIwwAAAABAAAAAQAAa5n0y18PPPUACwQAAAAAANivOVsAAAAA2K85WwAAAAADqwNVAAAACAACAAAAAAAAAAEAAAPA/8AAAAQAAAAAAAOrAAEAAAAAAAAAAAAAAAAAAAALBAAAAAAAAAAAAAAAAgAAAAQAAWIEAAFiBAAA4gQAAOIEAABVBAAAVQQAAOIAAAAAAAoAFAAeAEQAagCqAOoBngJkApoAAQAAAAsAigADAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAA4ArgABAAAAAAABAAcAAAABAAAAAAACAAcAYAABAAAAAAADAAcANgABAAAAAAAEAAcAdQABAAAAAAAFAAsAFQABAAAAAAAGAAcASwABAAAAAAAKABoAigADAAEECQABAA4ABwADAAEECQACAA4AZwADAAEECQADAA4APQADAAEECQAEAA4AfAADAAEECQAFABYAIAADAAEECQAGAA4AUgADAAEECQAKADQApGZjaWNvbnMAZgBjAGkAYwBvAG4Ac1ZlcnNpb24gMS4wAFYAZQByAHMAaQBvAG4AIAAxAC4AMGZjaWNvbnMAZgBjAGkAYwBvAG4Ac2ZjaWNvbnMAZgBjAGkAYwBvAG4Ac1JlZ3VsYXIAUgBlAGcAdQBsAGEAcmZjaWNvbnMAZgBjAGkAYwBvAG4Ac0ZvbnQgZ2VuZXJhdGVkIGJ5IEljb01vb24uAEYAbwBuAHQAIABnAGUAbgBlAHIAYQB0AGUAZAAgAGIAeQAgAEkAYwBvAE0AbwBvAG4ALgAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=") format("truetype")}.fc-icon{speak:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;display:inline-block;font-family:fcicons!important;font-style:normal;font-variant:normal;font-weight:400;height:1em;line-height:1;text-align:center;text-transform:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:1em}.fc-icon-chevron-left:before{content:"\\e900"}.fc-icon-chevron-right:before{content:"\\e901"}.fc-icon-chevrons-left:before{content:"\\e902"}.fc-icon-chevrons-right:before{content:"\\e903"}.fc-icon-minus-square:before{content:"\\e904"}.fc-icon-plus-square:before{content:"\\e905"}.fc-icon-x:before{content:"\\e906"}.fc .fc-button{border-radius:0;font-family:inherit;font-size:inherit;line-height:inherit;margin:0;overflow:visible;text-transform:none}.fc .fc-button:focus{outline:1px dotted;outline:5px auto -webkit-focus-ring-color}.fc .fc-button{-webkit-appearance:button}.fc .fc-button:not(:disabled){cursor:pointer}.fc .fc-button::-moz-focus-inner{border-style:none;padding:0}.fc .fc-button{background-color:transparent;border:1px solid transparent;border-radius:.25em;display:inline-block;font-size:1em;font-weight:400;line-height:1.5;padding:.4em .65em;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none;vertical-align:middle}.fc .fc-button:hover{text-decoration:none}.fc .fc-button:focus{box-shadow:0 0 0 .2rem rgba(44,62,80,.25);outline:0}.fc .fc-button:disabled{opacity:.65}.fc .fc-button-primary{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:hover{background-color:var(--fc-button-hover-bg-color);border-color:var(--fc-button-hover-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:disabled{background-color:var(--fc-button-bg-color);border-color:var(--fc-button-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button-primary:not(:disabled).fc-button-active,.fc .fc-button-primary:not(:disabled):active{background-color:var(--fc-button-active-bg-color);border-color:var(--fc-button-active-border-color);color:var(--fc-button-text-color)}.fc .fc-button-primary:not(:disabled).fc-button-active:focus,.fc .fc-button-primary:not(:disabled):active:focus{box-shadow:0 0 0 .2rem rgba(76,91,106,.5)}.fc .fc-button .fc-icon{font-size:1.5em;vertical-align:middle}.fc .fc-button-group{display:inline-flex;position:relative;vertical-align:middle}.fc .fc-button-group>.fc-button{flex:1 1 auto;position:relative}.fc .fc-button-group>.fc-button.fc-button-active,.fc .fc-button-group>.fc-button:active,.fc .fc-button-group>.fc-button:focus,.fc .fc-button-group>.fc-button:hover{z-index:1}.fc-direction-ltr .fc-button-group>.fc-button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0;margin-left:-1px}.fc-direction-ltr .fc-button-group>.fc-button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.fc-direction-rtl .fc-button-group>.fc-button:not(:first-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.fc-direction-rtl .fc-button-group>.fc-button:not(:last-child){border-bottom-left-radius:0;border-top-left-radius:0}.fc .fc-toolbar{align-items:center;display:flex;justify-content:space-between}.fc .fc-toolbar.fc-header-toolbar{margin-bottom:1.5em}.fc .fc-toolbar.fc-footer-toolbar{margin-top:1.5em}.fc .fc-toolbar-title{font-size:1.75em;margin:0}.fc-direction-ltr .fc-toolbar>*>:not(:first-child){margin-left:.75em}.fc-direction-rtl .fc-toolbar>*>:not(:first-child){margin-right:.75em}.fc-direction-rtl .fc-toolbar-ltr{flex-direction:row-reverse}.fc .fc-scroller{-webkit-overflow-scrolling:touch;position:relative}.fc .fc-scroller-liquid{height:100%}.fc .fc-scroller-liquid-absolute{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-scroller-harness{direction:ltr;overflow:hidden;position:relative}.fc .fc-scroller-harness-liquid{height:100%}.fc-direction-rtl .fc-scroller-harness>.fc-scroller{direction:rtl}.fc-theme-standard .fc-scrollgrid{border:1px solid var(--fc-border-color)}.fc .fc-scrollgrid,.fc .fc-scrollgrid table{table-layout:fixed;width:100%}.fc .fc-scrollgrid table{border-left-style:hidden;border-right-style:hidden;border-top-style:hidden}.fc .fc-scrollgrid{border-bottom-width:0;border-collapse:separate;border-right-width:0}.fc .fc-scrollgrid-liquid{height:100%}.fc .fc-scrollgrid-section,.fc .fc-scrollgrid-section table,.fc .fc-scrollgrid-section>td{height:1px}.fc .fc-scrollgrid-section-liquid>td{height:100%}.fc .fc-scrollgrid-section>*{border-left-width:0;border-top-width:0}.fc .fc-scrollgrid-section-footer>*,.fc .fc-scrollgrid-section-header>*{border-bottom-width:0}.fc .fc-scrollgrid-section-body table,.fc .fc-scrollgrid-section-footer table{border-bottom-style:hidden}.fc .fc-scrollgrid-section-sticky>*{background:var(--fc-page-bg-color);position:sticky;z-index:3}.fc .fc-scrollgrid-section-header.fc-scrollgrid-section-sticky>*{top:0}.fc .fc-scrollgrid-section-footer.fc-scrollgrid-section-sticky>*{bottom:0}.fc .fc-scrollgrid-sticky-shim{height:1px;margin-bottom:-1px}.fc-sticky{position:sticky}.fc .fc-view-harness{flex-grow:1;position:relative}.fc .fc-view-harness-active>.fc-view{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-col-header-cell-cushion{display:inline-block;padding:2px 4px}.fc .fc-bg-event,.fc .fc-highlight,.fc .fc-non-business{bottom:0;left:0;position:absolute;right:0;top:0}.fc .fc-non-business{background:var(--fc-non-business-color)}.fc .fc-bg-event{background:var(--fc-bg-event-color);opacity:var(--fc-bg-event-opacity)}.fc .fc-bg-event .fc-event-title{font-size:var(--fc-small-font-size);font-style:italic;margin:.5em}.fc .fc-highlight{background:var(--fc-highlight-color)}.fc .fc-cell-shaded,.fc .fc-day-disabled{background:var(--fc-neutral-bg-color)}a.fc-event,a.fc-event:hover{text-decoration:none}.fc-event.fc-event-draggable,.fc-event[href]{cursor:pointer}.fc-event .fc-event-main{position:relative;z-index:2}.fc-event-dragging:not(.fc-event-selected){opacity:.75}.fc-event-dragging.fc-event-selected{box-shadow:0 2px 7px rgba(0,0,0,.3)}.fc-event .fc-event-resizer{display:none;position:absolute;z-index:4}.fc-event-selected .fc-event-resizer,.fc-event:hover .fc-event-resizer{display:block}.fc-event-selected .fc-event-resizer{background:var(--fc-page-bg-color);border-color:inherit;border-radius:calc(var(--fc-event-resizer-dot-total-width)/2);border-style:solid;border-width:var(--fc-event-resizer-dot-border-width);height:var(--fc-event-resizer-dot-total-width);width:var(--fc-event-resizer-dot-total-width)}.fc-event-selected .fc-event-resizer:before{bottom:-20px;content:"";left:-20px;position:absolute;right:-20px;top:-20px}.fc-event-selected,.fc-event:focus{box-shadow:0 2px 5px rgba(0,0,0,.2)}.fc-event-selected:before,.fc-event:focus:before{bottom:0;content:"";left:0;position:absolute;right:0;top:0;z-index:3}.fc-event-selected:after,.fc-event:focus:after{background:var(--fc-event-selected-overlay-color);bottom:-1px;content:"";left:-1px;position:absolute;right:-1px;top:-1px;z-index:1}.fc-h-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-h-event .fc-event-main{color:var(--fc-event-text-color)}.fc-h-event .fc-event-main-frame{display:flex}.fc-h-event .fc-event-time{max-width:100%;overflow:hidden}.fc-h-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-width:0}.fc-h-event .fc-event-title{display:inline-block;left:0;max-width:100%;overflow:hidden;right:0;vertical-align:top}.fc-h-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-start),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-end){border-bottom-left-radius:0;border-left-width:0;border-top-left-radius:0}.fc-direction-ltr .fc-daygrid-block-event:not(.fc-event-end),.fc-direction-rtl .fc-daygrid-block-event:not(.fc-event-start){border-bottom-right-radius:0;border-right-width:0;border-top-right-radius:0}.fc-h-event:not(.fc-event-selected) .fc-event-resizer{bottom:0;top:0;width:var(--fc-event-resizer-thickness)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end{cursor:w-resize;left:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-direction-ltr .fc-h-event:not(.fc-event-selected) .fc-event-resizer-end,.fc-direction-rtl .fc-h-event:not(.fc-event-selected) .fc-event-resizer-start{cursor:e-resize;right:calc(var(--fc-event-resizer-thickness)*-.5)}.fc-h-event.fc-event-selected .fc-event-resizer{margin-top:calc(var(--fc-event-resizer-dot-total-width)*-.5);top:50%}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-start,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-end{left:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc-direction-ltr .fc-h-event.fc-event-selected .fc-event-resizer-end,.fc-direction-rtl .fc-h-event.fc-event-selected .fc-event-resizer-start{right:calc(var(--fc-event-resizer-dot-total-width)*-.5)}.fc .fc-popover{box-shadow:0 2px 6px rgba(0,0,0,.15);position:absolute;z-index:9999}.fc .fc-popover-header{align-items:center;display:flex;flex-direction:row;justify-content:space-between;padding:3px 4px}.fc .fc-popover-title{margin:0 2px}.fc .fc-popover-close{cursor:pointer;font-size:1.1em;opacity:.65}.fc-theme-standard .fc-popover{background:var(--fc-page-bg-color);border:1px solid var(--fc-border-color)}.fc-theme-standard .fc-popover-header{background:var(--fc-neutral-bg-color)}');
        const Ps = [],
            Hs = {
                code: "en",
                week: {
                    dow: 0,
                    doy: 4
                },
                direction: "ltr",
                buttonText: {
                    prev: "prev",
                    next: "next",
                    prevYear: "prev year",
                    nextYear: "next year",
                    year: "year",
                    today: "today",
                    month: "month",
                    week: "week",
                    day: "day",
                    list: "list"
                },
                weekText: "W",
                weekTextLong: "Week",
                closeHint: "Close",
                timeHint: "Time",
                eventHint: "Event",
                //allDayText: "all-day",
                moreLinkText: "more",
                noEventsText: "No events to display"
            },
            Bs = Object.assign(Object.assign({}, Hs), {
                buttonHints: {
                    prev: "Previous $0",
                    next: "Next $0",
                    today(e, t) {
                        return "day" === t ? "Today" : `This ${e}`
                    }
                },
                viewHint: "$0 view",
                navLinkHint: "Go to $0",
                moreLinkHint(e) {
                    return `Show ${e} more event${1===e?"":"s"}`
                }
            });

        function js(e) {
            let t = e.length > 0 ? e[0].code : "en",
                n = Ps.concat(e),
                r = {
                    en: Bs
                };
            for (let e of n) r[e.code] = e;
            return {
                map: r,
                defaultCode: t
            }
        }

        function zs(e, t) {
            return "object" != typeof e || Array.isArray(e) ? function(e, t) {
                let n = [].concat(e || []),
                    r = function(e, t) {
                        for (let n = 0; n < e.length; n += 1) {
                            let r = e[n].toLocaleLowerCase().split("-");
                            for (let e = r.length; e > 0; e -= 1) {
                                let n = r.slice(0, e).join("-");
                                if (t[n]) return t[n]
                            }
                        }
                        return null
                    }(n, t) || Bs;
                return Us(e, n, r)
            }(e, t) : Us(e.code, [e.code], e)
        }

        function Us(e, t, n) {
            let r = ot([Hs, n], ["buttonText"]);
            delete r.code;
            let {
                week: i
            } = r;
            return delete r.week, {
                codeArg: e,
                codes: t,
                week: i,
                simpleNumberFormat: new Intl.NumberFormat(e),
                options: r
            }
        }

        function Ls(e) {
            return {
                id: Le(),
                name: e.name,
                premiumReleaseDate: e.premiumReleaseDate ? new Date(e.premiumReleaseDate) : void 0,
                deps: e.deps || [],
                reducers: e.reducers || [],
                isLoadingFuncs: e.isLoadingFuncs || [],
                contextInit: [].concat(e.contextInit || []),
                eventRefiners: e.eventRefiners || {},
                eventDefMemberAdders: e.eventDefMemberAdders || [],
                eventSourceRefiners: e.eventSourceRefiners || {},
                isDraggableTransformers: e.isDraggableTransformers || [],
                eventDragMutationMassagers: e.eventDragMutationMassagers || [],
                eventDefMutationAppliers: e.eventDefMutationAppliers || [],
                dateSelectionTransformers: e.dateSelectionTransformers || [],
                datePointTransforms: e.datePointTransforms || [],
                dateSpanTransforms: e.dateSpanTransforms || [],
                views: e.views || {},
                viewPropsTransformers: e.viewPropsTransformers || [],
                isPropsValid: e.isPropsValid || null,
                externalDefTransforms: e.externalDefTransforms || [],
                viewContainerAppends: e.viewContainerAppends || [],
                eventDropTransformers: e.eventDropTransformers || [],
                componentInteractions: e.componentInteractions || [],
                calendarInteractions: e.calendarInteractions || [],
                themeClasses: e.themeClasses || {},
                eventSourceDefs: e.eventSourceDefs || [],
                cmdFormatter: e.cmdFormatter,
                recurringTypes: e.recurringTypes || [],
                namedTimeZonedImpl: e.namedTimeZonedImpl,
                initialView: e.initialView || "",
                elementDraggingImpl: e.elementDraggingImpl,
                optionChangeHandlers: e.optionChangeHandlers || {},
                scrollGridImpl: e.scrollGridImpl || null,
                listenerRefiners: e.listenerRefiners || {},
                optionRefiners: e.optionRefiners || {},
                propSetHandlers: e.propSetHandlers || {}
            }
        }

        function Ws() {
            let e, t = [],
                n = [];
            return (r, i) => (e && Nt(r, t) && Nt(i, n) || (e = function(e, t) {
                let n = {},
                    r = {
                        premiumReleaseDate: void 0,
                        reducers: [],
                        isLoadingFuncs: [],
                        contextInit: [],
                        eventRefiners: {},
                        eventDefMemberAdders: [],
                        eventSourceRefiners: {},
                        isDraggableTransformers: [],
                        eventDragMutationMassagers: [],
                        eventDefMutationAppliers: [],
                        dateSelectionTransformers: [],
                        datePointTransforms: [],
                        dateSpanTransforms: [],
                        views: {},
                        viewPropsTransformers: [],
                        isPropsValid: null,
                        externalDefTransforms: [],
                        viewContainerAppends: [],
                        eventDropTransformers: [],
                        componentInteractions: [],
                        calendarInteractions: [],
                        themeClasses: {},
                        eventSourceDefs: [],
                        cmdFormatter: null,
                        recurringTypes: [],
                        namedTimeZonedImpl: null,
                        initialView: "",
                        elementDraggingImpl: null,
                        optionChangeHandlers: {},
                        scrollGridImpl: null,
                        listenerRefiners: {},
                        optionRefiners: {},
                        propSetHandlers: {}
                    };

                function i(e) {
                    for (let o of e) {
                        const e = o.name,
                            a = n[e];
                        void 0 === a ? (n[e] = o.id, i(o.deps), s = o, r = {
                            premiumReleaseDate: Fs((t = r).premiumReleaseDate, s.premiumReleaseDate),
                            reducers: t.reducers.concat(s.reducers),
                            isLoadingFuncs: t.isLoadingFuncs.concat(s.isLoadingFuncs),
                            contextInit: t.contextInit.concat(s.contextInit),
                            eventRefiners: Object.assign(Object.assign({}, t.eventRefiners), s.eventRefiners),
                            eventDefMemberAdders: t.eventDefMemberAdders.concat(s.eventDefMemberAdders),
                            eventSourceRefiners: Object.assign(Object.assign({}, t.eventSourceRefiners), s.eventSourceRefiners),
                            isDraggableTransformers: t.isDraggableTransformers.concat(s.isDraggableTransformers),
                            eventDragMutationMassagers: t.eventDragMutationMassagers.concat(s.eventDragMutationMassagers),
                            eventDefMutationAppliers: t.eventDefMutationAppliers.concat(s.eventDefMutationAppliers),
                            dateSelectionTransformers: t.dateSelectionTransformers.concat(s.dateSelectionTransformers),
                            datePointTransforms: t.datePointTransforms.concat(s.datePointTransforms),
                            dateSpanTransforms: t.dateSpanTransforms.concat(s.dateSpanTransforms),
                            views: Object.assign(Object.assign({}, t.views), s.views),
                            viewPropsTransformers: t.viewPropsTransformers.concat(s.viewPropsTransformers),
                            isPropsValid: s.isPropsValid || t.isPropsValid,
                            externalDefTransforms: t.externalDefTransforms.concat(s.externalDefTransforms),
                            viewContainerAppends: t.viewContainerAppends.concat(s.viewContainerAppends),
                            eventDropTransformers: t.eventDropTransformers.concat(s.eventDropTransformers),
                            calendarInteractions: t.calendarInteractions.concat(s.calendarInteractions),
                            componentInteractions: t.componentInteractions.concat(s.componentInteractions),
                            themeClasses: Object.assign(Object.assign({}, t.themeClasses), s.themeClasses),
                            eventSourceDefs: t.eventSourceDefs.concat(s.eventSourceDefs),
                            cmdFormatter: s.cmdFormatter || t.cmdFormatter,
                            recurringTypes: t.recurringTypes.concat(s.recurringTypes),
                            namedTimeZonedImpl: s.namedTimeZonedImpl || t.namedTimeZonedImpl,
                            initialView: t.initialView || s.initialView,
                            elementDraggingImpl: t.elementDraggingImpl || s.elementDraggingImpl,
                            optionChangeHandlers: Object.assign(Object.assign({}, t.optionChangeHandlers), s.optionChangeHandlers),
                            scrollGridImpl: s.scrollGridImpl || t.scrollGridImpl,
                            listenerRefiners: Object.assign(Object.assign({}, t.listenerRefiners), s.listenerRefiners),
                            optionRefiners: Object.assign(Object.assign({}, t.optionRefiners), s.optionRefiners),
                            propSetHandlers: Object.assign(Object.assign({}, t.propSetHandlers), s.propSetHandlers)
                        }) : a !== o.id && console.warn(`Duplicate plugin '${e}'`)
                    }
                    var t, s
                }
                return e && i(e), i(t), r
            }(r, i)), t = r, n = i, e)
        }

        function Fs(e, t) {
            return void 0 === e ? t : void 0 === t ? e : new Date(Math.max(e.valueOf(), t.valueOf()))
        }
        class Vs extends hr {}

        function Gs(e, t, n, r) {
            if (t[e]) return t[e];
            let i = function(e, t, n, r) {
                let i = n[e],
                    s = r[e],
                    o = e => i && null !== i[e] ? i[e] : s && null !== s[e] ? s[e] : null,
                    a = o("component"),
                    l = o("superType"),
                    c = null;
                if (l) {
                    if (l === e) throw new Error("Can't have a custom view type that references itself");
                    c = Gs(l, t, n, r)
                }!a && c && (a = c.component);
                if (!a) return null;
                return {
                    type: e,
                    component: a,
                    defaults: Object.assign(Object.assign({}, c ? c.defaults : {}), i ? i.rawOptions : {}),
                    overrides: Object.assign(Object.assign({}, c ? c.overrides : {}), s ? s.rawOptions : {})
                }
            }(e, t, n, r);
            return i && (t[e] = i), i
        }

        function Qs(e) {
            return lt(e, Ys)
        }

        function Ys(e) {
            let t = "function" == typeof e ? {
                    component: e
                } : e,
                {
                    component: n
                } = t;
            var r;
            return t.content && (r = t, n = e => g(vr.Consumer, null, (t => g(Si, {
                elTag: "div",
                elClasses: Ts(t.viewSpec),
                renderProps: Object.assign(Object.assign({}, e), {
                    nextDayThreshold: t.options.nextDayThreshold
                }),
                generatorName: void 0,
                generator: r.content,
                classNameGenerator: r.classNames,
                didMount: r.didMount,
                willUnmount: r.willUnmount
            })))), {
                superType: t.type,
                component: n,
                rawOptions: t
            }
        }

        function qs(e, t, n, r) {
            let i = Qs(e),
                s = Qs(t.views),
                o = function(e, t) {
                    let n, r = {};
                    for (n in e) Gs(n, r, e, t);
                    for (n in t) Gs(n, r, e, t);
                    return r
                }(i, s);
            return lt(o, (e => function(e, t, n, r, i) {
                let s = e.overrides.duration || e.defaults.duration || r.duration || n.duration,
                    o = null,
                    a = "",
                    l = "",
                    c = {};
                if (s && (o = function(e) {
                        let t = JSON.stringify(e),
                            n = Zs[t];
                        void 0 === n && (n = Je(e), Zs[t] = n);
                        return n
                    }(s), o)) {
                    let e = it(o);
                    a = e.unit, 1 === e.value && (l = a, c = t[a] ? t[a].rawOptions : {})
                }
                let d = t => {
                        let n = t.buttonText || {},
                            r = e.defaults.buttonTextKey;
                        return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[l] ? n[l] : null
                    },
                    u = t => {
                        let n = t.buttonHints || {},
                            r = e.defaults.buttonTextKey;
                        return null != r && null != n[r] ? n[r] : null != n[e.type] ? n[e.type] : null != n[l] ? n[l] : null
                    };
                return {
                    type: e.type,
                    component: e.component,
                    duration: o,
                    durationUnit: a,
                    singleUnit: l,
                    optionDefaults: e.defaults,
                    optionOverrides: Object.assign(Object.assign({}, c), e.overrides),
                    buttonTextOverride: d(r) || d(n) || e.overrides.buttonText,
                    buttonTextDefault: d(i) || e.defaults.buttonText || d(Jt) || e.type,
                    buttonTitleOverride: u(r) || u(n) || e.overrides.buttonHint,
                    buttonTitleDefault: u(i) || e.defaults.buttonHint || u(Jt)
                }
            }(e, s, t, n, r)))
        }
        Vs.prototype.classes = {
            root: "fc-theme-standard",
            tableCellShaded: "fc-cell-shaded",
            buttonGroup: "fc-button-group",
            button: "fc-button fc-button-primary",
            buttonActive: "fc-button-active"
        }, Vs.prototype.baseIconClass = "fc-icon", Vs.prototype.iconClasses = {
            close: "fc-icon-x",
            prev: "fc-icon-chevron-left",
            next: "fc-icon-chevron-right",
            prevYear: "fc-icon-chevrons-left",
            nextYear: "fc-icon-chevrons-right"
        }, Vs.prototype.rtlIconClasses = {
            prev: "fc-icon-chevron-right",
            next: "fc-icon-chevron-left",
            prevYear: "fc-icon-chevrons-right",
            nextYear: "fc-icon-chevrons-left"
        }, Vs.prototype.iconOverrideOption = "buttonIcons", Vs.prototype.iconOverrideCustomButtonOption = "icon", Vs.prototype.iconOverridePrefix = "fc-icon-";
        let Zs = {};

        function Xs(e, t, n) {
            let r = t ? t.activeRange : null;
            return Ks({}, function(e, t) {
                let n = Os(t),
                    r = [].concat(e.eventSources || []),
                    i = [];
                e.initialEvents && r.unshift(e.initialEvents);
                e.events && r.unshift(e.events);
                for (let e of r) {
                    let r = Is(e, t, n);
                    r && i.push(r)
                }
                return i
            }(e, n), r, n)
        }

        function $s(e, t, n, r) {
            let i = n ? n.activeRange : null;
            switch (t.type) {
                case "ADD_EVENT_SOURCES":
                    return Ks(e, t.sources, i, r);
                case "REMOVE_EVENT_SOURCE":
                    return s = e, o = t.sourceId, at(s, (e => e.sourceId !== o));
                case "PREV":
                case "NEXT":
                case "CHANGE_DATE":
                case "CHANGE_VIEW_TYPE":
                    return n ? eo(e, i, r) : e;
                case "FETCH_EVENT_SOURCES":
                    return to(e, t.sourceIds ? ct(t.sourceIds) : ro(e, r), i, t.isRefetch || !1, r);
                case "RECEIVE_EVENTS":
                case "RECEIVE_EVENT_ERROR":
                    return function(e, t, n, r) {
                        let i = e[t];
                        if (i && n === i.latestFetchId) return Object.assign(Object.assign({}, e), {
                            [t]: Object.assign(Object.assign({}, i), {
                                isFetching: !1,
                                fetchRange: r
                            })
                        });
                        return e
                    }(e, t.sourceId, t.fetchId, t.fetchRange);
                case "REMOVE_ALL_EVENT_SOURCES":
                    return {};
                default:
                    return e
            }
            var s, o
        }

        function Js(e) {
            for (let t in e)
                if (e[t].isFetching) return !0;
            return !1
        }

        function Ks(e, t, n, r) {
            let i = {};
            for (let e of t) i[e.sourceId] = e;
            return n && (i = eo(i, n, r)), Object.assign(Object.assign({}, e), i)
        }

        function eo(e, t, n) {
            return to(e, at(e, (e => function(e, t, n) {
                if (!io(e, n)) return !e.latestFetchId;
                return !n.options.lazyFetching || !e.fetchRange || e.isFetching || t.start < e.fetchRange.start || t.end > e.fetchRange.end
            }(e, t, n))), t, !1, n)
        }

        function to(e, t, n, r, i) {
            let s = {};
            for (let o in e) {
                let a = e[o];
                t[o] ? s[o] = no(a, n, r, i) : s[o] = a
            }
            return s
        }

        function no(e, t, n, r) {
            let {
                options: i,
                calendarApi: s
            } = r, o = r.pluginHooks.eventSourceDefs[e.sourceDefId], a = Le();
            return o.fetch({
                eventSource: e,
                range: t,
                isRefetch: n,
                context: r
            }, (n => {
                let {
                    rawEvents: o
                } = n;
                i.eventSourceSuccess && (o = i.eventSourceSuccess.call(s, o, n.response) || o), e.success && (o = e.success.call(s, o, n.response) || o), r.dispatch({
                    type: "RECEIVE_EVENTS",
                    sourceId: e.sourceId,
                    fetchId: a,
                    fetchRange: t,
                    rawEvents: o
                })
            }), (n => {
                let o = !1;
                i.eventSourceFailure && (i.eventSourceFailure.call(s, n), o = !0), e.failure && (e.failure(n), o = !0), o || console.warn(n.message, n), r.dispatch({
                    type: "RECEIVE_EVENT_ERROR",
                    sourceId: e.sourceId,
                    fetchId: a,
                    fetchRange: t,
                    error: n
                })
            })), Object.assign(Object.assign({}, e), {
                isFetching: !0,
                latestFetchId: a
            })
        }

        function ro(e, t) {
            return at(e, (e => io(e, t)))
        }

        function io(e, t) {
            return !t.pluginHooks.eventSourceDefs[e.sourceDefId].ignoreRange
        }

        function so(e, t) {
            switch (t.type) {
                case "UNSELECT_DATES":
                    return null;
                case "SELECT_DATES":
                    return t.selection;
                default:
                    return e
            }
        }

        function oo(e, t) {
            switch (t.type) {
                case "UNSELECT_EVENT":
                    return "";
                case "SELECT_EVENT":
                    return t.eventInstanceId;
                default:
                    return e
            }
        }

        function ao(e, t) {
            let n;
            switch (t.type) {
                case "UNSET_EVENT_DRAG":
                    return null;
                case "SET_EVENT_DRAG":
                    return n = t.state, {
                        affectedEvents: n.affectedEvents,
                        mutatedEvents: n.mutatedEvents,
                        isEvent: n.isEvent
                    };
                default:
                    return e
            }
        }

        function lo(e, t) {
            let n;
            switch (t.type) {
                case "UNSET_EVENT_RESIZE":
                    return null;
                case "SET_EVENT_RESIZE":
                    return n = t.state, {
                        affectedEvents: n.affectedEvents,
                        mutatedEvents: n.mutatedEvents,
                        isEvent: n.isEvent
                    };
                default:
                    return e
            }
        }

        function co(e, t, n, r, i) {
            return {
                header: e.headerToolbar ? uo(e.headerToolbar, e, t, n, r, i) : null,
                footer: e.footerToolbar ? uo(e.footerToolbar, e, t, n, r, i) : null
            }
        }

        function uo(e, t, n, r, i, s) {
            let o = {},
                a = [],
                l = !1;
            for (let c in e) {
                let d = ho(e[c], t, n, r, i, s);
                o[c] = d.widgets, a.push(...d.viewsWithButtons), l = l || d.hasTitle
            }
            return {
                sectionWidgets: o,
                viewsWithButtons: a,
                hasTitle: l
            }
        }

        function ho(e, t, n, r, i, s) {
            let o = "rtl" === t.direction,
                a = t.customButtons || {},
                l = n.buttonText || {},
                c = t.buttonText || {},
                d = n.buttonHints || {},
                u = t.buttonHints || {},
                h = e ? e.split(" ") : [],
                f = [],
                g = !1;
            return {
                widgets: h.map((e => e.split(",").map((e => {
                    if ("title" === e) return g = !0, {
                        buttonName: e
                    };
                    let n, h, p, m, v, b;
                    if (n = a[e]) p = e => {
                        n.click && n.click.call(e.target, e, e.target)
                    }, (m = r.getCustomButtonIconClass(n)) || (m = r.getIconClass(e, o)) || (v = n.text), b = n.hint || n.text;
                    else if (h = i[e]) {
                        f.push(e), p = () => {
                            s.changeView(e)
                        }, (v = h.buttonTextOverride) || (m = r.getIconClass(e, o)) || (v = h.buttonTextDefault);
                        let n = h.buttonTextOverride || h.buttonTextDefault;
                        b = Qe(h.buttonTitleOverride || h.buttonTitleDefault || t.viewHint, [n, e], n)
                    } else if (s[e])
                        if (p = () => {
                                s[e]()
                            }, (v = l[e]) || (m = r.getIconClass(e, o)) || (v = c[e]), "prevYear" === e || "nextYear" === e) {
                            let t = "prevYear" === e ? "prev" : "next";
                            b = Qe(d[t] || u[t], [c.year || "year", "year"], c[e])
                        } else b = t => Qe(d[e] || u[e], [c[t] || t, t], c[e]);
                    return {
                        buttonName: e,
                        buttonClick: p,
                        buttonIcon: m,
                        buttonText: v,
                        buttonHint: b
                    }
                })))),
                viewsWithButtons: f,
                hasTitle: g
            }
        }
        class fo {
            constructor(e, t, n) {
                this.type = e, this.getCurrentData = t, this.dateEnv = n
            }
            get calendar() {
                return this.getCurrentData().calendarApi
            }
            get title() {
                return this.getCurrentData().viewTitle
            }
            get activeStart() {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start)
            }
            get activeEnd() {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end)
            }
            get currentStart() {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start)
            }
            get currentEnd() {
                return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end)
            }
            getOption(e) {
                return this.getCurrentData().options[e]
            }
        }

        function go(e, t) {
            let n = dt(t.getCurrentData().eventSources),
                r = [];
            for (let t of e) {
                let e = !1;
                for (let r = 0; r < n.length; r += 1)
                    if (n[r]._raw === t) {
                        n.splice(r, 1), e = !0;
                        break
                    } e || r.push(t)
            }
            for (let e of n) t.dispatch({
                type: "REMOVE_EVENT_SOURCE",
                sourceId: e.sourceId
            });
            for (let e of r) t.calendarApi.addEventSource(e)
        }
        const po = [Ls({
            name: "array-event-source",
            eventSourceDefs: [{
                ignoreRange: !0,
                parseMeta(e) {
                    return Array.isArray(e.events) ? e.events : null
                },
                fetch(e, t) {
                    t({
                        rawEvents: e.eventSource.meta
                    })
                }
            }]
        }), Ls({
            name: "func-event-source",
            eventSourceDefs: [{
                parseMeta(e) {
                    return "function" == typeof e.events ? e.events : null
                },
                fetch(e, t, n) {
                    const {
                        dateEnv: r
                    } = e.context;
                    ! function(e, t, n) {
                        let r = !1,
                            i = function(e) {
                                r || (r = !0, t(e))
                            },
                            s = function(e) {
                                r || (r = !0, n(e))
                            },
                            o = e(i, s);
                        o && "function" == typeof o.then && o.then(i, s)
                    }(e.eventSource.meta.bind(null, Jr(e.range, r)), (e => t({
                        rawEvents: e
                    })), n)
                }
            }]
        }), Ls({
            name: "json-event-source",
            eventSourceRefiners: {
                method: String,
                extraParams: an,
                startParam: String,
                endParam: String,
                timeZoneParam: String
            },
            eventSourceDefs: [{
                parseMeta(e) {
                    return !e.url || "json" !== e.format && e.format ? null : {
                        url: e.url,
                        format: "json",
                        method: (e.method || "GET").toUpperCase(),
                        extraParams: e.extraParams,
                        startParam: e.startParam,
                        endParam: e.endParam,
                        timeZoneParam: e.timeZoneParam
                    }
                },
                fetch(e, t, n) {
                    const {
                        meta: r
                    } = e.eventSource, i = function(e, t, n) {
                        let r, i, s, o, {
                                dateEnv: a,
                                options: l
                            } = n,
                            c = {};
                        r = e.startParam, null == r && (r = l.startParam);
                        i = e.endParam, null == i && (i = l.endParam);
                        s = e.timeZoneParam, null == s && (s = l.timeZoneParam);
                        o = "function" == typeof e.extraParams ? e.extraParams() : e.extraParams || {};
                        Object.assign(c, o), c[r] = a.formatIso(t.start), c[i] = a.formatIso(t.end), "local" !== a.timeZone && (c[s] = a.timeZone);
                        return c
                    }(r, e.range, e.context);
                    (function(e, t, n) {
                        const r = {
                            method: e = e.toUpperCase()
                        };
                        return "GET" === e ? t += (-1 === t.indexOf("?") ? "?" : "&") + new URLSearchParams(n) : (r.body = new URLSearchParams(n), r.headers = {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }), fetch(t, r).then((e => {
                            if (e.ok) return e.json().then((t => [t, e]), (() => {
                                throw new Qi("Failure parsing JSON", e)
                            }));
                            throw new Qi("Request failed", e)
                        }))
                    })(r.method, r.url, i).then((([e, n]) => {
                        t({
                            rawEvents: e,
                            response: n
                        })
                    }), n)
                }
            }]
        }), Ls({
            name: "simple-recurring-event",
            recurringTypes: [{
                parse(e, t) {
                    if (e.daysOfWeek || e.startTime || e.endTime || e.startRecur || e.endRecur) {
                        let i, s = {
                            daysOfWeek: e.daysOfWeek || null,
                            startTime: e.startTime || null,
                            endTime: e.endTime || null,
                            startRecur: e.startRecur ? t.createMarker(e.startRecur) : null,
                            endRecur: e.endRecur ? t.createMarker(e.endRecur) : null
                        };
                        return e.duration && (i = e.duration), !i && e.startTime && e.endTime && (n = e.endTime, r = e.startTime, i = {
                            years: n.years - r.years,
                            months: n.months - r.months,
                            days: n.days - r.days,
                            milliseconds: n.milliseconds - r.milliseconds
                        }), {
                            allDayGuess: Boolean(!e.startTime && !e.endTime),
                            duration: i,
                            typeData: s
                        }
                    }
                    var n, r;
                    return null
                },
                expand(e, t, n) {
                    let r = Fn(t, {
                        start: e.startRecur,
                        end: e.endRecur
                    });
                    return r ? function(e, t, n, r) {
                        let i = e ? ct(e) : null,
                            s = Dt(n.start),
                            o = n.end,
                            a = [];
                        for (; s < o;) {
                            let e;
                            i && !i[s.getUTCDay()] || (e = t ? r.add(s, t) : s, a.push(e)), s = bt(s, 1)
                        }
                        return a
                    }(e.daysOfWeek, e.startTime, r, n) : []
                }
            }],
            eventRefiners: {
                daysOfWeek: an,
                startTime: Je,
                endTime: Je,
                duration: Je,
                startRecur: an,
                endRecur: an
            }
        }), Ls({
            name: "change-handler",
            optionChangeHandlers: {
                events(e, t) {
                    go([e], t)
                },
                eventSources: go
            }
        }), Ls({
            name: "misc",
            isLoadingFuncs: [e => Js(e.eventSources)],
            propSetHandlers: {
                dateProfile: function(e, t) {
                    t.emitter.trigger("datesSet", Object.assign(Object.assign({}, Jr(e.activeRange, t.dateEnv)), {
                        view: t.viewApi
                    }))
                },
                eventStore: function(e, t) {
                    let {
                        emitter: n
                    } = t;
                    n.hasHandlers("eventsSet") && n.trigger("eventsSet", Nr(e, t))
                }
            }
        })];
        class mo {
            constructor(e, t) {
                this.runTaskOption = e, this.drainedOption = t, this.queue = [], this.delayedRunner = new Yi(this.drain.bind(this))
            }
            request(e, t) {
                this.queue.push(e), this.delayedRunner.request(t)
            }
            pause(e) {
                this.delayedRunner.pause(e)
            }
            resume(e, t) {
                this.delayedRunner.resume(e, t)
            }
            drain() {
                let {
                    queue: e
                } = this;
                for (; e.length;) {
                    let t, n = [];
                    for (; t = e.shift();) this.runTask(t), n.push(t);
                    this.drained(n)
                }
            }
            runTask(e) {
                this.runTaskOption && this.runTaskOption(e)
            }
            drained(e) {
                this.drainedOption && this.drainedOption(e)
            }
        }

        function vo(e, t, n) {
            let r;
            return r = /^(year|month)$/.test(e.currentRangeUnit) ? e.currentRange : e.activeRange, n.formatRange(r.start, r.end, Xt(t.titleFormat || function(e) {
                let {
                    currentRangeUnit: t
                } = e;
                if ("year" === t) return {
                    year: "numeric"
                };
                if ("month" === t) return {
                    year: "numeric",
                    month: "long"
                };
                let n = At(e.currentRange.start, e.currentRange.end);
                if (null !== n && n > 1) return {
                    year: "numeric",
                    month: "short",
                    day: "numeric"
                };
                return {
                    year: "numeric",
                    month: "long",
                    day: "numeric"
                }
            }(e)), {
                isEndExclusive: e.isRangeAllDay,
                defaultSeparator: t.titleRangeSeparator
            })
        }
        class bo {
            constructor(e) {
                this.computeOptionsData = Pt(this._computeOptionsData), this.computeCurrentViewData = Pt(this._computeCurrentViewData), this.organizeRawLocales = Pt(js), this.buildLocale = Pt(zs), this.buildPluginHooks = Ws(), this.buildDateEnv = Pt(yo), this.buildTheme = Pt(Eo), this.parseToolbars = Pt(co), this.buildViewSpecs = Pt(qs), this.buildDateProfileGenerator = Ht(Ao), this.buildViewApi = Pt(Do), this.buildViewUiProps = Ht(Co), this.buildEventUiBySource = Pt(So, ut), this.buildEventUiBases = Pt(wo), this.parseContextBusinessHours = Ht(_o), this.buildTitle = Pt(vo), this.emitter = new or, this.actionRunner = new mo(this._handleAction.bind(this), this.updateData.bind(this)), this.currentCalendarOptionsInput = {}, this.currentCalendarOptionsRefined = {}, this.currentViewOptionsInput = {}, this.currentViewOptionsRefined = {}, this.currentCalendarOptionsRefiners = {}, this.getCurrentData = () => this.data, this.dispatch = e => {
                    this.actionRunner.request(e)
                }, this.props = e, this.actionRunner.pause();
                let t = {},
                    n = this.computeOptionsData(e.optionOverrides, t, e.calendarApi),
                    r = n.calendarOptions.initialView || n.pluginHooks.initialView,
                    i = this.computeCurrentViewData(r, n, e.optionOverrides, t);
                e.calendarApi.currentDataManager = this, this.emitter.setThisContext(e.calendarApi), this.emitter.setOptions(i.options);
                let s = function(e, t) {
                        let n = e.initialDate;
                        return null != n ? t.createMarker(n) : Sr(e.now, t)
                    }(n.calendarOptions, n.dateEnv),
                    o = i.dateProfileGenerator.build(s);
                Qn(o.activeRange, s) || (s = o.currentRange.start);
                let a = {
                    dateEnv: n.dateEnv,
                    options: n.calendarOptions,
                    pluginHooks: n.pluginHooks,
                    calendarApi: e.calendarApi,
                    dispatch: this.dispatch,
                    emitter: this.emitter,
                    getCurrentData: this.getCurrentData
                };
                for (let e of n.pluginHooks.contextInit) e(a);
                let l = Xs(n.calendarOptions, o, a),
                    c = {
                        dynamicOptionOverrides: t,
                        currentViewType: r,
                        currentDate: s,
                        dateProfile: o,
                        businessHours: this.parseContextBusinessHours(a),
                        eventSources: l,
                        eventUiBases: {},
                        eventStore: {
                            defs: {},
                            instances: {}
                        },
                        renderableEventStore: {
                            defs: {},
                            instances: {}
                        },
                        dateSelection: null,
                        eventSelection: "",
                        eventDrag: null,
                        eventResize: null,
                        selectionConfig: this.buildViewUiProps(a).selectionConfig
                    },
                    d = Object.assign(Object.assign({}, a), c);
                for (let e of n.pluginHooks.reducers) Object.assign(c, e(null, null, d));
                xo(c, a) && this.emitter.trigger("loading", !0), this.state = c, this.updateData(), this.actionRunner.resume()
            }
            resetOptions(e, t) {
                let {
                    props: n
                } = this;
                n.optionOverrides = t ? Object.assign(Object.assign({}, n.optionOverrides), e) : e, this.actionRunner.request({
                    type: "NOTHING"
                })
            }
            _handleAction(e) {
                let {
                    props: t,
                    state: n,
                    emitter: r
                } = this, i = function(e, t) {
                    return "SET_OPTION" === t.type ? Object.assign(Object.assign({}, e), {
                        [t.optionName]: t.rawOptionValue
                    }) : e
                }(n.dynamicOptionOverrides, e), s = this.computeOptionsData(t.optionOverrides, i, t.calendarApi), o = function(e, t) {
                    "CHANGE_VIEW_TYPE" === t.type && (e = t.viewType);
                    return e
                }(n.currentViewType, e), a = this.computeCurrentViewData(o, s, t.optionOverrides, i);
                t.calendarApi.currentDataManager = this, r.setThisContext(t.calendarApi), r.setOptions(a.options);
                let l = {
                        dateEnv: s.dateEnv,
                        options: s.calendarOptions,
                        pluginHooks: s.pluginHooks,
                        calendarApi: t.calendarApi,
                        dispatch: this.dispatch,
                        emitter: r,
                        getCurrentData: this.getCurrentData
                    },
                    {
                        currentDate: c,
                        dateProfile: d
                    } = n;
                this.data && this.data.dateProfileGenerator !== a.dateProfileGenerator && (d = a.dateProfileGenerator.build(c)), c = function(e, t) {
                    return "CHANGE_DATE" === t.type ? t.dateMarker : e
                }(c, e), d = function(e, t, n, r) {
                    let i;
                    switch (t.type) {
                        case "CHANGE_VIEW_TYPE":
                            return r.build(t.dateMarker || n);
                        case "CHANGE_DATE":
                            return r.build(t.dateMarker);
                        case "PREV":
                            if (i = r.buildPrev(e, n), i.isValid) return i;
                            break;
                        case "NEXT":
                            if (i = r.buildNext(e, n), i.isValid) return i
                    }
                    return e
                }(d, e, c, a.dateProfileGenerator), "PREV" !== e.type && "NEXT" !== e.type && Qn(d.currentRange, c) || (c = d.currentRange.start);
                let u = $s(n.eventSources, e, d, l),
                    h = Hi(n.eventStore, e, u, d, l),
                    f = Js(u) && !a.options.progressiveEventRendering && n.renderableEventStore || h,
                    {
                        eventUiSingleBase: g,
                        selectionConfig: p
                    } = this.buildViewUiProps(l),
                    m = this.buildEventUiBySource(u),
                    v = {
                        dynamicOptionOverrides: i,
                        currentViewType: o,
                        currentDate: c,
                        dateProfile: d,
                        eventSources: u,
                        eventStore: h,
                        renderableEventStore: f,
                        selectionConfig: p,
                        eventUiBases: this.buildEventUiBases(f.defs, g, m),
                        businessHours: this.parseContextBusinessHours(l),
                        dateSelection: so(n.dateSelection, e),
                        eventSelection: oo(n.eventSelection, e),
                        eventDrag: ao(n.eventDrag, e),
                        eventResize: lo(n.eventResize, e)
                    },
                    b = Object.assign(Object.assign({}, l), v);
                for (let t of s.pluginHooks.reducers) Object.assign(v, t(n, e, b));
                let y = xo(n, l),
                    E = xo(v, l);
                !y && E ? r.trigger("loading", !0) : y && !E && r.trigger("loading", !1), this.state = v, t.onAction && t.onAction(e)
            }
            updateData() {
                let {
                    props: e,
                    state: t
                } = this, n = this.data, r = this.computeOptionsData(e.optionOverrides, t.dynamicOptionOverrides, e.calendarApi), i = this.computeCurrentViewData(t.currentViewType, r, e.optionOverrides, t.dynamicOptionOverrides), s = this.data = Object.assign(Object.assign(Object.assign({
                    viewTitle: this.buildTitle(t.dateProfile, i.options, r.dateEnv),
                    calendarApi: e.calendarApi,
                    dispatch: this.dispatch,
                    emitter: this.emitter,
                    getCurrentData: this.getCurrentData
                }, r), i), t), o = r.pluginHooks.optionChangeHandlers, a = n && n.calendarOptions, l = r.calendarOptions;
                if (a && a !== l) {
                    a.timeZone !== l.timeZone && (t.eventSources = s.eventSources = function(e, t, n) {
                        let r = t ? t.activeRange : null;
                        return to(e, ro(e, n), r, !0, n)
                    }(s.eventSources, t.dateProfile, s), t.eventStore = s.eventStore = function(e, t, n) {
                        let {
                            defs: r
                        } = e, i = lt(e.instances, (e => {
                            let i = r[e.defId];
                            return i.allDay || i.recurringDef ? e : Object.assign(Object.assign({}, e), {
                                range: {
                                    start: n.createMarker(t.toDate(e.range.start, e.forcedStartTzo)),
                                    end: n.createMarker(t.toDate(e.range.end, e.forcedEndTzo))
                                },
                                forcedStartTzo: n.canComputeOffset ? null : e.forcedStartTzo,
                                forcedEndTzo: n.canComputeOffset ? null : e.forcedEndTzo
                            })
                        }));
                        return {
                            defs: r,
                            instances: i
                        }
                    }(s.eventStore, n.dateEnv, s.dateEnv));
                    for (let e in o) a[e] !== l[e] && o[e](l[e], s)
                }
                e.onData && e.onData(s)
            }
            _computeOptionsData(e, t, n) {
                let {
                    refinedOptions: r,
                    pluginHooks: i,
                    localeDefaults: s,
                    availableLocaleData: o,
                    extra: a
                } = this.processRawCalendarOptions(e, t);
                Ro(a);
                let l = this.buildDateEnv(r.timeZone, r.locale, r.weekNumberCalculation, r.firstDay, r.weekText, i, o, r.defaultRangeSeparator),
                    c = this.buildViewSpecs(i.views, e, t, s),
                    d = this.buildTheme(r, i);
                return {
                    calendarOptions: r,
                    pluginHooks: i,
                    dateEnv: l,
                    viewSpecs: c,
                    theme: d,
                    toolbarConfig: this.parseToolbars(r, e, d, c, n),
                    localeDefaults: s,
                    availableRawLocales: o.map
                }
            }
            processRawCalendarOptions(e, t) {
                let {
                    locales: n,
                    locale: r
                } = sn([Jt, e, t]), i = this.organizeRawLocales(n), s = i.map, o = this.buildLocale(r || i.defaultCode, s).options, a = this.buildPluginHooks(e.plugins || [], po), l = this.currentCalendarOptionsRefiners = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, $t), Kt), en), a.listenerRefiners), a.optionRefiners), c = {}, d = sn([Jt, o, e, t]), u = {}, h = this.currentCalendarOptionsInput, f = this.currentCalendarOptionsRefined, g = !1;
                for (let e in d) "plugins" !== e && (d[e] === h[e] || tn[e] && e in h && tn[e](h[e], d[e]) ? u[e] = f[e] : l[e] ? (u[e] = l[e](d[e]), g = !0) : c[e] = h[e]);
                return g && (this.currentCalendarOptionsInput = d, this.currentCalendarOptionsRefined = u), {
                    rawOptions: this.currentCalendarOptionsInput,
                    refinedOptions: this.currentCalendarOptionsRefined,
                    pluginHooks: a,
                    availableLocaleData: i,
                    localeDefaults: o,
                    extra: c
                }
            }
            _computeCurrentViewData(e, t, n, r) {
                let i = t.viewSpecs[e];
                if (!i) throw new Error(`viewType "${e}" is not available. Please make sure you've loaded all neccessary plugins`);
                let {
                    refinedOptions: s,
                    extra: o
                } = this.processRawViewOptions(i, t.pluginHooks, t.localeDefaults, n, r);
                return Ro(o), {
                    viewSpec: i,
                    options: s,
                    dateProfileGenerator: this.buildDateProfileGenerator({
                        dateProfileGeneratorClass: i.optionDefaults.dateProfileGeneratorClass,
                        duration: i.duration,
                        durationUnit: i.durationUnit,
                        usesMinMaxTime: i.optionDefaults.usesMinMaxTime,
                        dateEnv: t.dateEnv,
                        calendarApi: this.props.calendarApi,
                        slotMinTime: s.slotMinTime,
                        slotMaxTime: s.slotMaxTime,
                        showNonCurrentDates: s.showNonCurrentDates,
                        dayCount: s.dayCount,
                        dateAlignment: s.dateAlignment,
                        dateIncrement: s.dateIncrement,
                        hiddenDays: s.hiddenDays,
                        weekends: s.weekends,
                        nowInput: s.now,
                        validRangeInput: s.validRange,
                        visibleRangeInput: s.visibleRange,
                        monthMode: s.monthMode,
                        fixedWeekCount: s.fixedWeekCount
                    }),
                    viewApi: this.buildViewApi(e, this.getCurrentData, t.dateEnv)
                }
            }
            processRawViewOptions(e, t, n, r, i) {
                let s = sn([Jt, e.optionDefaults, n, r, e.optionOverrides, i]),
                    o = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, $t), Kt), en), rn), t.listenerRefiners), t.optionRefiners),
                    a = {},
                    l = this.currentViewOptionsInput,
                    c = this.currentViewOptionsRefined,
                    d = !1,
                    u = {};
                for (let e in s) s[e] === l[e] || tn[e] && tn[e](s[e], l[e]) ? a[e] = c[e] : (s[e] === this.currentCalendarOptionsInput[e] || tn[e] && tn[e](s[e], this.currentCalendarOptionsInput[e]) ? e in this.currentCalendarOptionsRefined && (a[e] = this.currentCalendarOptionsRefined[e]) : o[e] ? a[e] = o[e](s[e]) : u[e] = s[e], d = !0);
                return d && (this.currentViewOptionsInput = s, this.currentViewOptionsRefined = a), {
                    rawOptions: this.currentViewOptionsInput,
                    refinedOptions: this.currentViewOptionsRefined,
                    extra: u
                }
            }
        }

        function yo(e, t, n, r, i, s, o, a) {
            let l = zs(t || o.defaultCode, o.map);
            return new ii({
                calendarSystem: "gregory",
                timeZone: e,
                namedTimeZoneImpl: s.namedTimeZonedImpl,
                locale: l,
                weekNumberCalculation: n,
                firstDay: r,
                weekText: i,
                cmdFormatter: s.cmdFormatter,
                defaultSeparator: a
            })
        }

        function Eo(e, t) {
            return new(t.themeClasses[e.themeSystem] || Vs)(e)
        }

        function Ao(e) {
            return new(e.dateProfileGeneratorClass || wr)(e)
        }

        function Do(e, t, n) {
            return new fo(e, t, n)
        }

        function So(e) {
            return lt(e, (e => e.ui))
        }

        function wo(e, t, n) {
            let r = {
                "": t
            };
            for (let t in e) {
                let i = e[t];
                i.sourceId && n[i.sourceId] && (r[t] = n[i.sourceId])
            }
            return r
        }

        function Co(e) {
            let {
                options: t
            } = e;
            return {
                eventUiSingleBase: yn({
                    display: t.eventDisplay,
                    editable: t.editable,
                    startEditable: t.eventStartEditable,
                    durationEditable: t.eventDurationEditable,
                    constraint: t.eventConstraint,
                    overlap: "boolean" == typeof t.eventOverlap ? t.eventOverlap : void 0,
                    allow: t.eventAllow,
                    backgroundColor: t.eventBackgroundColor,
                    borderColor: t.eventBorderColor,
                    textColor: t.eventTextColor,
                    color: t.eventColor
                }, e),
                selectionConfig: yn({
                    constraint: t.selectConstraint,
                    overlap: "boolean" == typeof t.selectOverlap ? t.selectOverlap : void 0,
                    allow: t.selectAllow
                }, e)
            }
        }

        function xo(e, t) {
            for (let n of t.pluginHooks.isLoadingFuncs)
                if (n(e)) return !0;
            return !1
        }

        function _o(e) {
            return kn(e.options.businessHours, e)
        }

        function Ro(e, t) {
            for (let n in e) console.warn(`Unknown option '${n}'` + (t ? ` for view '${t}'` : ""))
        }
        class To extends Er {
            render() {
                return g("div", {
                    className: "fc-toolbar-chunk"
                }, ...this.props.widgetGroups.map((e => this.renderWidgetGroup(e))))
            }
            renderWidgetGroup(e) {
                let {
                    props: t
                } = this, {
                    theme: n
                } = this.context, r = [], i = !0;
                for (let s of e) {
                    let {
                        buttonName: e,
                        buttonClick: o,
                        buttonText: a,
                        buttonIcon: l,
                        buttonHint: c
                    } = s;
                    if ("title" === e) i = !1, r.push(g("h2", {
                        className: "fc-toolbar-title",
                        id: t.titleId
                    }, t.title));
                    else {
                        let i = e === t.activeButton,
                            s = !t.isTodayEnabled && "today" === e || !t.isPrevEnabled && "prev" === e || !t.isNextEnabled && "next" === e,
                            d = [`fc-${e}-button`, n.getClass("button")];
                        i && d.push(n.getClass("buttonActive")), r.push(g("button", {
                            type: "button",
                            title: "function" == typeof c ? c(t.navUnit) : c,
                            disabled: s,
                            "aria-pressed": i,
                            className: d.join(" "),
                            onClick: o
                        }, a || (l ? g("span", {
                            className: l
                        }) : "")))
                    }
                }
                if (r.length > 1) {
                    return g("div", {
                        className: i && n.getClass("buttonGroup") || ""
                    }, ...r)
                }
                return r[0]
            }
        }
        class ko extends Er {
            render() {
                let e, t, {
                        model: n,
                        extraClassName: r
                    } = this.props,
                    i = !1,
                    s = n.sectionWidgets,
                    o = s.center;
                return s.left ? (i = !0, e = s.left) : e = s.start, s.right ? (i = !0, t = s.right) : t = s.end, g("div", {
                    className: [r || "", "fc-toolbar", i ? "fc-toolbar-ltr" : ""].join(" ")
                }, this.renderSection("start", e || []), this.renderSection("center", o || []), this.renderSection("end", t || []))
            }
            renderSection(e, t) {
                let {
                    props: n
                } = this;
                return g(To, {
                    key: e,
                    widgetGroups: t,
                    title: n.title,
                    navUnit: n.navUnit,
                    activeButton: n.activeButton,
                    isTodayEnabled: n.isTodayEnabled,
                    isPrevEnabled: n.isPrevEnabled,
                    isNextEnabled: n.isNextEnabled,
                    titleId: n.titleId
                })
            }
        }
        class Mo extends Er {
            constructor() {
                super(...arguments), this.state = {
                    availableWidth: null
                }, this.handleEl = e => {
                    this.el = e, Ar(this.props.elRef, e), this.updateAvailableWidth()
                }, this.handleResize = () => {
                    this.updateAvailableWidth()
                }
            }
            render() {
                let {
                    props: e,
                    state: t
                } = this, {
                    aspectRatio: n
                } = e, r = ["fc-view-harness", n || e.liquid || e.height ? "fc-view-harness-active" : "fc-view-harness-passive"], i = "", s = "";
                return n ? null !== t.availableWidth ? i = t.availableWidth / n : s = 1 / n * 100 + "%" : i = e.height || "", g("div", {
                    "aria-labelledby": e.labeledById,
                    ref: this.handleEl,
                    className: r.join(" "),
                    style: {
                        height: i,
                        paddingBottom: s
                    }
                }, e.children)
            }
            componentDidMount() {
                this.context.addResizeHandler(this.handleResize)
            }
            componentWillUnmount() {
                this.context.removeResizeHandler(this.handleResize)
            }
            updateAvailableWidth() {
                this.el && this.props.aspectRatio && this.setState({
                    availableWidth: this.el.offsetWidth
                })
            }
        }
        class Io extends ui {
            constructor(e) {
                super(e), this.handleSegClick = (e, t) => {
                    let {
                        component: n
                    } = this, {
                        context: r
                    } = n, i = Br(t);
                    if (i && n.isValidSegDownEl(e.target)) {
                        let s = xe(e.target, ".fc-event-forced-url"),
                            o = s ? s.querySelector("a[href]").href : "";
                        r.emitter.trigger("eventClick", {
                            el: t,
                            event: new Ir(n.context, i.eventRange.def, i.eventRange.instance),
                            jsEvent: e,
                            view: r.viewApi
                        }), o && !e.defaultPrevented && (window.location.href = o)
                    }
                }, this.destroy = He(e.el, "click", ".fc-event", this.handleSegClick)
            }
        }
        class Oo extends ui {
            constructor(e) {
                super(e), this.handleEventElRemove = e => {
                    e === this.currentSegEl && this.handleSegLeave(null, this.currentSegEl)
                }, this.handleSegEnter = (e, t) => {
                    Br(t) && (this.currentSegEl = t, this.triggerEvent("eventMouseEnter", e, t))
                }, this.handleSegLeave = (e, t) => {
                    this.currentSegEl && (this.currentSegEl = null, this.triggerEvent("eventMouseLeave", e, t))
                }, this.removeHoverListeners = function(e, t, n, r) {
                    let i;
                    return He(e, "mouseover", t, ((e, t) => {
                        if (t !== i) {
                            i = t, n(e, t);
                            let s = e => {
                                i = null, r(e, t), t.removeEventListener("mouseleave", s)
                            };
                            t.addEventListener("mouseleave", s)
                        }
                    }))
                }(e.el, ".fc-event", this.handleSegEnter, this.handleSegLeave)
            }
            destroy() {
                this.removeHoverListeners()
            }
            triggerEvent(e, t, n) {
                let {
                    component: r
                } = this, {
                    context: i
                } = r, s = Br(n);
                t && !r.isValidSegDownEl(t.target) || i.emitter.trigger(e, {
                    el: n,
                    event: new Ir(i, s.eventRange.def, s.eventRange.instance),
                    jsEvent: t,
                    view: i.viewApi
                })
            }
        }
        class No extends yr {
            constructor() {
                super(...arguments), this.buildViewContext = Pt(br), this.buildViewPropTransformers = Pt(Ho), this.buildToolbarProps = Pt(Po), this.headerRef = {
                    current: null
                }, this.footerRef = {
                    current: null
                }, this.interactionsStore = {}, this.state = {
                    viewLabelId: Ne()
                }, this.registerInteractiveComponent = (e, t) => {
                    let n = function(e, t) {
                            return {
                                component: e,
                                el: t.el,
                                useEventCenter: null == t.useEventCenter || t.useEventCenter,
                                isHitComboAllowed: t.isHitComboAllowed || null
                            }
                        }(e, t),
                        r = [Io, Oo].concat(this.props.pluginHooks.componentInteractions).map((e => new e(n)));
                    this.interactionsStore[e.uid] = r, fi[e.uid] = n
                }, this.unregisterInteractiveComponent = e => {
                    let t = this.interactionsStore[e.uid];
                    if (t) {
                        for (let e of t) e.destroy();
                        delete this.interactionsStore[e.uid]
                    }
                    delete fi[e.uid]
                }, this.resizeRunner = new Yi((() => {
                    this.props.emitter.trigger("_resize", !0), this.props.emitter.trigger("windowResize", {
                        view: this.props.viewApi
                    })
                })), this.handleWindowResize = e => {
                    let {
                        options: t
                    } = this.props;
                    t.handleWindowResize && e.target === window && this.resizeRunner.request(t.windowResizeDelay)
                }
            }
            render() {
                let e, {
                        props: t
                    } = this,
                    {
                        toolbarConfig: n,
                        options: r
                    } = t,
                    i = this.buildToolbarProps(t.viewSpec, t.dateProfile, t.dateProfileGenerator, t.currentDate, Sr(t.options.now, t.dateEnv), t.viewTitle),
                    s = !1,
                    o = "";
                t.isHeightAuto || t.forPrint ? o = "" : null != r.height ? s = !0 : null != r.contentHeight ? o = r.contentHeight : e = Math.max(r.aspectRatio, .5);
                let a = this.buildViewContext(t.viewSpec, t.viewApi, t.options, t.dateProfileGenerator, t.dateEnv, t.theme, t.pluginHooks, t.dispatch, t.getCurrentData, t.emitter, t.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent),
                    l = n.header && n.header.hasTitle ? this.state.viewLabelId : "";
                return g(vr.Provider, {
                    value: a
                }, n.header && g(ko, Object.assign({
                    ref: this.headerRef,
                    extraClassName: "fc-header-toolbar",
                    model: n.header,
                    titleId: l
                }, i)), g(Mo, {
                    liquid: s,
                    height: o,
                    aspectRatio: e,
                    labeledById: l
                }, this.renderView(t), this.buildAppendContent()), n.footer && g(ko, Object.assign({
                    ref: this.footerRef,
                    extraClassName: "fc-footer-toolbar",
                    model: n.footer,
                    titleId: ""
                }, i)))
            }
            componentDidMount() {
                let {
                    props: e
                } = this;
                this.calendarInteractions = e.pluginHooks.calendarInteractions.map((t => new t(e))), window.addEventListener("resize", this.handleWindowResize);
                let {
                    propSetHandlers: t
                } = e.pluginHooks;
                for (let n in t) t[n](e[n], e)
            }
            componentDidUpdate(e) {
                let {
                    props: t
                } = this, {
                    propSetHandlers: n
                } = t.pluginHooks;
                for (let r in n) t[r] !== e[r] && n[r](t[r], t)
            }
            componentWillUnmount() {
                window.removeEventListener("resize", this.handleWindowResize), this.resizeRunner.clear();
                for (let e of this.calendarInteractions) e.destroy();
                this.props.emitter.trigger("_unmount")
            }
            buildAppendContent() {
                let {
                    props: e
                } = this;
                return g(m, {}, ...e.pluginHooks.viewContainerAppends.map((t => t(e))))
            }
            renderView(e) {
                let {
                    pluginHooks: t
                } = e, {
                    viewSpec: n
                } = e, r = {
                    dateProfile: e.dateProfile,
                    businessHours: e.businessHours,
                    eventStore: e.renderableEventStore,
                    eventUiBases: e.eventUiBases,
                    dateSelection: e.dateSelection,
                    eventSelection: e.eventSelection,
                    eventDrag: e.eventDrag,
                    eventResize: e.eventResize,
                    isHeightAuto: e.isHeightAuto,
                    forPrint: e.forPrint
                }, i = this.buildViewPropTransformers(t.viewPropsTransformers);
                for (let t of i) Object.assign(r, t.transform(r, e));
                return g(n.component, Object.assign({}, r))
            }
        }

        function Po(e, t, n, r, i, s) {
            let o = n.build(i, void 0, !1),
                a = n.buildPrev(t, r, !1),
                l = n.buildNext(t, r, !1);
            return {
                title: s,
                activeButton: e.type,
                navUnit: e.singleUnit,
                isTodayEnabled: o.isValid && !Qn(t.currentRange, i),
                isPrevEnabled: a.isValid,
                isNextEnabled: l.isValid
            }
        }

        function Ho(e) {
            return e.map((e => new e))
        }
        class Bo extends Ns {
            constructor(e, t = {}) {
                super(), this.isRendering = !1, this.isRendered = !1, this.currentClassNames = [], this.customContentRenderId = 0, this.handleAction = e => {
                    switch (e.type) {
                        case "SET_EVENT_DRAG":
                        case "SET_EVENT_RESIZE":
                            this.renderRunner.tryDrain()
                    }
                }, this.handleData = e => {
                    this.currentData = e, this.renderRunner.request(e.calendarOptions.rerenderDelay)
                }, this.handleRenderRequest = () => {
                    if (this.isRendering) {
                        this.isRendered = !0;
                        let {
                            currentData: e
                        } = this;
                        fr((() => {
                            H(g(mi, {
                                options: e.calendarOptions,
                                theme: e.theme,
                                emitter: e.emitter
                            }, ((t, n, r, i) => (this.setClassNames(t), this.setHeight(n), g(Di.Provider, {
                                value: this.customContentRenderId
                            }, g(No, Object.assign({
                                isHeightAuto: r,
                                forPrint: i
                            }, e)))))), this.el)
                        }))
                    } else this.isRendered && (this.isRendered = !1, H(null, this.el), this.setClassNames([]), this.setHeight(""))
                }, this.el = e, this.renderRunner = new Yi(this.handleRenderRequest), new bo({
                    optionOverrides: t,
                    calendarApi: this,
                    onAction: this.handleAction,
                    onData: this.handleData
                })
            }
            render() {
                let e = this.isRendering;
                e ? this.customContentRenderId += 1 : this.isRendering = !0, this.renderRunner.request(), e && this.updateSize()
            }
            destroy() {
                this.isRendering && (this.isRendering = !1, this.renderRunner.request())
            }
            updateSize() {
                fr((() => {
                    super.updateSize()
                }))
            }
            batchRendering(e) {
                this.renderRunner.pause("batchRendering"), e(), this.renderRunner.resume("batchRendering")
            }
            pauseRendering() {
                this.renderRunner.pause("pauseRendering")
            }
            resumeRendering() {
                this.renderRunner.resume("pauseRendering", !0)
            }
            resetOptions(e, t) {
                this.currentDataManager.resetOptions(e, t)
            }
            setClassNames(e) {
                if (!Nt(e, this.currentClassNames)) {
                    let {
                        classList: t
                    } = this.el;
                    for (let e of this.currentClassNames) t.remove(e);
                    for (let n of e) t.add(n);
                    this.currentClassNames = e
                }
            }
            setHeight(e) {
                ke(this.el, "height", e)
            }
        }
        class jo extends Dr {
            constructor() {
                super(...arguments), this.headerElRef = {
                    current: null
                }
            }
            renderSimpleLayout(e, t) {
                let {
                    props: n,
                    context: r
                } = this, i = [], s = is(r.options);
                return e && i.push({
                    type: "header",
                    key: "header",
                    isSticky: s,
                    chunk: {
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }
                }), i.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    chunk: {
                        content: t
                    }
                }), g(Rs, {
                    elClasses: ["fc-daygrid"],
                    viewSpec: r.viewSpec
                }, g(os, {
                    liquid: !n.isHeightAuto && !n.forPrint,
                    collapsibleWidth: n.forPrint,
                    cols: [],
                    sections: i
                }))
            }
            renderHScrollLayout(e, t, n, r) {
                let i = this.context.pluginHooks.scrollGridImpl;
                if (!i) throw new Error("No ScrollGrid implementation");
                let {
                    props: s,
                    context: o
                } = this, a = !s.forPrint && is(o.options), l = !s.forPrint && ss(o.options), c = [];
                return e && c.push({
                    type: "header",
                    key: "header",
                    isSticky: a,
                    chunks: [{
                        key: "main",
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }]
                }), c.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    chunks: [{
                        key: "main",
                        content: t
                    }]
                }), l && c.push({
                    type: "footer",
                    key: "footer",
                    isSticky: !0,
                    chunks: [{
                        key: "main",
                        content: rs
                    }]
                }), g(Rs, {
                    elClasses: ["fc-daygrid"],
                    viewSpec: o.viewSpec
                }, g(i, {
                    liquid: !s.isHeightAuto && !s.forPrint,
                    collapsibleWidth: s.forPrint,
                    colGroups: [{
                        cols: [{
                            span: n,
                            minWidth: r
                        }]
                    }],
                    sections: c
                }))
            }
        }

        function zo(e, t) {
            let n = [];
            for (let e = 0; e < t; e += 1) n[e] = [];
            for (let t of e) n[t.row].push(t);
            return n
        }

        function Uo(e, t) {
            let n = [];
            for (let e = 0; e < t; e += 1) n[e] = [];
            for (let t of e) n[t.firstCol].push(t);
            return n
        }

        function Lo(e, t) {
            let n = [];
            if (e) {
                for (let r = 0; r < t; r += 1) n[r] = {
                    affectedInstances: e.affectedInstances,
                    isEvent: e.isEvent,
                    segs: []
                };
                for (let t of e.segs) n[t.row].segs.push(t)
            } else
                for (let e = 0; e < t; e += 1) n[e] = null;
            return n
        }
        const Wo = Xt({
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: !0,
            meridiem: "narrow"
        });

        function Fo(e) {
            let {
                display: t
            } = e.eventRange.ui;
            return "list-item" === t || "auto" === t && !e.eventRange.def.allDay && e.firstCol === e.lastCol && e.isStart && e.isEnd
        }
        class Vo extends Er {
            render() {
                let {
                    props: e
                } = this;
                return g(ls, Object.assign({}, e, {
                    elClasses: ["fc-daygrid-event", "fc-daygrid-block-event", "fc-h-event"],
                    defaultTimeFormat: Wo,
                    defaultDisplayEventEnd: e.defaultDisplayEventEnd,
                    disableResizing: !e.seg.eventRange.def.allDay
                }))
            }
        }
        class Go extends Er {
            render() {
                let {
                    props: e,
                    context: t
                } = this, {
                    options: n
                } = t, {
                    seg: r
                } = e, i = Gr(r, n.eventTimeFormat || Wo, t, !0, e.defaultDisplayEventEnd);
                return g(as, Object.assign({}, e, {
                    elTag: "a",
                    elClasses: ["fc-daygrid-event", "fc-daygrid-dot-event"],
                    elAttrs: Zr(e.seg, t),
                    defaultGenerator: Qo,
                    timeText: i,
                    isResizing: !1,
                    isDateSelecting: !1
                }))
            }
        }

        function Qo(e) {
            return g(m, null, g("div", {
                className: "fc-daygrid-event-dot",
                style: {
                    borderColor: e.borderColor || e.backgroundColor
                }
            }), e.timeText && g("div", {
                className: "fc-event-time"
            }, e.timeText), g("div", {
                className: "fc-event-title"
            }, e.event.title || g(m, null, " ")))
        }
        class Yo extends Er {
            constructor() {
                super(...arguments), this.compileSegs = Pt(qo)
            }
            render() {
                let {
                    props: e
                } = this, {
                    allSegs: t,
                    invisibleSegs: n
                } = this.compileSegs(e.singlePlacements);
                return g(Ds, {
                    elClasses: ["fc-daygrid-more-link"],
                    dateProfile: e.dateProfile,
                    todayRange: e.todayRange,
                    allDayDate: e.allDayDate,
                    moreCnt: e.moreCnt,
                    allSegs: t,
                    hiddenSegs: n,
                    alignmentElRef: e.alignmentElRef,
                    alignGridTop: e.alignGridTop,
                    extraDateSpan: e.extraDateSpan,
                    popoverContent: () => {
                        let n = (e.eventDrag ? e.eventDrag.affectedInstances : null) || (e.eventResize ? e.eventResize.affectedInstances : null) || {};
                        return g(m, null, t.map((t => {
                            let r = t.eventRange.instance.instanceId;
                            return g("div", {
                                className: "fc-daygrid-event-harness",
                                key: r,
                                style: {
                                    visibility: n[r] ? "hidden" : ""
                                }
                            }, Fo(t) ? g(Go, Object.assign({
                                seg: t,
                                isDragging: !1,
                                isSelected: r === e.eventSelection,
                                defaultDisplayEventEnd: !1
                            }, Qr(t, e.todayRange))) : g(Vo, Object.assign({
                                seg: t,
                                isDragging: !1,
                                isResizing: !1,
                                isDateSelecting: !1,
                                isSelected: r === e.eventSelection,
                                defaultDisplayEventEnd: !1
                            }, Qr(t, e.todayRange))))
                        })))
                    }
                })
            }
        }

        function qo(e) {
            let t = [],
                n = [];
            for (let r of e) t.push(r.seg), r.isVisible || n.push(r.seg);
            return {
                allSegs: t,
                invisibleSegs: n
            }
        }
        const Zo = Xt({
            week: "narrow"
        });
        class Xo extends Dr {
            constructor() {
                super(...arguments), this.rootElRef = {
                    current: null
                }, this.state = {
                    dayNumberId: Ne()
                }, this.handleRootEl = e => {
                    Ar(this.rootElRef, e), Ar(this.props.elRef, e)
                }
            }
            render() {
                let {
                    context: e,
                    props: t,
                    state: n,
                    rootElRef: r
                } = this, {
                    options: i
                } = e, {
                    date: s,
                    dateProfile: o
                } = t;
                return g(hs, {
                    elTag: "td",
                    elRef: this.handleRootEl,
                    elClasses: ["fc-daygrid-day", ...t.extraClassNames || []],
                    elAttrs: Object.assign(Object.assign(Object.assign({}, t.extraDataAttrs), t.showDayNumber ? {
                        "aria-labelledby": n.dayNumberId
                    } : {}), {
                        role: "gridcell"
                    }),
                    defaultGenerator: $o,
                    date: s,
                    dateProfile: o,
                    todayRange: t.todayRange,
                    showDayNumber: t.showDayNumber,
                    extraRenderProps: t.extraRenderProps
                }, ((o, a) => g("div", {
                    className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner",
                    ref: t.innerElRef
                }, t.showWeekNumber && g(bs, {
                    elTag: "a",
                    elClasses: ["fc-daygrid-week-number"],
                    elAttrs: $n(e, s, "week"),
                    date: s,
                    defaultFormat: Zo
                }), Boolean(!a.isDisabled && (t.showDayNumber || fs(i) || t.forceDayTop)) && g("div", {
                    className: "fc-daygrid-day-top"
                }, g(o, {
                    elTag: "a",
                    elClasses: ["fc-daygrid-day-number"],
                    elAttrs: Object.assign(Object.assign({}, $n(e, s)), {
                        id: n.dayNumberId
                    })
                })), g("div", {
                    className: "fc-daygrid-day-events",
                    ref: t.fgContentElRef
                }, t.fgContent, g("div", {
                    className: "fc-daygrid-day-bottom",
                    style: {
                        marginTop: t.moreMarginTop
                    }
                }, g(Yo, {
                    allDayDate: s,
                    singlePlacements: t.singlePlacements,
                    moreCnt: t.moreCnt,
                    alignmentElRef: r,
                    alignGridTop: !t.showDayNumber,
                    extraDateSpan: t.extraDateSpan,
                    dateProfile: t.dateProfile,
                    eventSelection: t.eventSelection,
                    eventDrag: t.eventDrag,
                    eventResize: t.eventResize,
                    todayRange: t.todayRange
                }))), g("div", {
                    className: "fc-daygrid-day-bg"
                }, t.bgContent))))
            }
        }

        function $o(e) {
            return e.dayNumberText || g(m, null, " ")
        }

        function Jo(e, t, n, r, i, s, o) {
            let a = new ea;
            a.allowReslicing = !0, a.strictOrder = r, !0 === t || !0 === n ? (a.maxCoord = s, a.hiddenConsumes = !0) : "number" == typeof t ? a.maxStackCnt = t : "number" == typeof n && (a.maxStackCnt = n, a.hiddenConsumes = !0);
            let l = [],
                c = [];
            for (let t = 0; t < e.length; t += 1) {
                let n = e[t],
                    {
                        instanceId: r
                    } = n.eventRange.instance,
                    s = i[r];
                null != s ? l.push({
                    index: t,
                    thickness: s,
                    span: {
                        start: n.firstCol,
                        end: n.lastCol + 1
                    }
                }) : c.push(n)
            }
            let d = a.addSegs(l),
                u = a.toRects(),
                {
                    singleColPlacements: h,
                    multiColPlacements: f,
                    leftoverMargins: g
                } = function(e, t, n) {
                    let r = function(e, t) {
                            let n = [];
                            for (let e = 0; e < t; e += 1) n.push([]);
                            for (let t of e)
                                for (let e = t.span.start; e < t.span.end; e += 1) n[e].push(t);
                            return n
                        }(e, n.length),
                        i = [],
                        s = [],
                        o = [];
                    for (let e = 0; e < n.length; e += 1) {
                        let a = r[e],
                            l = [],
                            c = 0,
                            d = 0;
                        for (let r of a) {
                            let i = t[r.index];
                            l.push({
                                seg: Ko(i, e, e + 1, n),
                                isVisible: !0,
                                isAbsolute: !1,
                                absoluteTop: r.levelCoord,
                                marginTop: r.levelCoord - c
                            }), c = r.levelCoord + r.thickness
                        }
                        let u = [];
                        c = 0, d = 0;
                        for (let r of a) {
                            let i = t[r.index],
                                s = r.span.end - r.span.start > 1,
                                o = r.span.start === e;
                            d += r.levelCoord - c, c = r.levelCoord + r.thickness, s ? (d += r.thickness, o && u.push({
                                seg: Ko(i, r.span.start, r.span.end, n),
                                isVisible: !0,
                                isAbsolute: !0,
                                absoluteTop: r.levelCoord,
                                marginTop: 0
                            })) : o && (u.push({
                                seg: Ko(i, r.span.start, r.span.end, n),
                                isVisible: !0,
                                isAbsolute: !1,
                                absoluteTop: r.levelCoord,
                                marginTop: d
                            }), d = 0)
                        }
                        i.push(l), s.push(u), o.push(d)
                    }
                    return {
                        singleColPlacements: i,
                        multiColPlacements: s,
                        leftoverMargins: o
                    }
                }(u, e, o),
                p = [],
                m = [];
            for (let e of c) {
                f[e.firstCol].push({
                    seg: e,
                    isVisible: !1,
                    isAbsolute: !0,
                    absoluteTop: 0,
                    marginTop: 0
                });
                for (let t = e.firstCol; t <= e.lastCol; t += 1) h[t].push({
                    seg: Ko(e, t, t + 1, o),
                    isVisible: !1,
                    isAbsolute: !1,
                    absoluteTop: 0,
                    marginTop: 0
                })
            }
            for (let e = 0; e < o.length; e += 1) p.push(0);
            for (let t of d) {
                let n = e[t.index],
                    r = t.span;
                f[r.start].push({
                    seg: Ko(n, r.start, r.end, o),
                    isVisible: !1,
                    isAbsolute: !0,
                    absoluteTop: 0,
                    marginTop: 0
                });
                for (let e = r.start; e < r.end; e += 1) p[e] += 1, h[e].push({
                    seg: Ko(n, e, e + 1, o),
                    isVisible: !1,
                    isAbsolute: !1,
                    absoluteTop: 0,
                    marginTop: 0
                })
            }
            for (let e = 0; e < o.length; e += 1) m.push(g[e]);
            return {
                singleColPlacements: h,
                multiColPlacements: f,
                moreCnts: p,
                moreMarginTops: m
            }
        }

        function Ko(e, t, n, r) {
            if (e.firstCol === t && e.lastCol === n - 1) return e;
            let i = e.eventRange,
                s = i.range,
                o = Fn(s, {
                    start: r[t].date,
                    end: bt(r[n - 1].date, 1)
                });
            return Object.assign(Object.assign({}, e), {
                firstCol: t,
                lastCol: n - 1,
                eventRange: {
                    def: i.def,
                    ui: Object.assign(Object.assign({}, i.ui), {
                        durationEditable: !1
                    }),
                    instance: i.instance,
                    range: o
                },
                isStart: e.isStart && o.start.valueOf() === s.start.valueOf(),
                isEnd: e.isEnd && o.end.valueOf() === s.end.valueOf()
            })
        }
        class ea extends si {
            constructor() {
                super(...arguments), this.hiddenConsumes = !1, this.forceHidden = {}
            }
            addSegs(e) {
                const t = super.addSegs(e),
                    {
                        entriesByLevel: n
                    } = this,
                    r = e => !this.forceHidden[ai(e)];
                for (let e = 0; e < n.length; e += 1) n[e] = n[e].filter(r);
                return t
            }
            handleInvalidInsertion(e, t, n) {
                const {
                    entriesByLevel: r,
                    forceHidden: i
                } = this, {
                    touchingEntry: s,
                    touchingLevel: o,
                    touchingLateral: a
                } = e;
                if (this.hiddenConsumes && s) {
                    const e = ai(s);
                    if (!i[e])
                        if (this.allowReslicing) {
                            const e = Object.assign(Object.assign({}, s), {
                                span: li(s.span, t.span)
                            });
                            i[ai(e)] = !0, r[o][a] = e, this.splitEntry(s, t, n)
                        } else i[e] = !0, n.push(s)
                }
                return super.handleInvalidInsertion(e, t, n)
            }
        }
        class ta extends Dr {
            constructor() {
                super(...arguments), this.cellElRefs = new Xi, this.frameElRefs = new Xi, this.fgElRefs = new Xi, this.segHarnessRefs = new Xi, this.rootElRef = {
                    current: null
                }, this.state = {
                    framePositions: null,
                    maxContentHeight: null,
                    eventInstanceHeights: {}
                }, this.handleResize = e => {
                    e && this.updateSizing(!0)
                }
            }
            render() {
                let {
                    props: e,
                    state: t,
                    context: n
                } = this, {
                    options: r
                } = n, i = e.cells.length, s = Uo(e.businessHourSegs, i), o = Uo(e.bgEventSegs, i), a = Uo(this.getHighlightSegs(), i), l = Uo(this.getMirrorSegs(), i), {
                    singleColPlacements: c,
                    multiColPlacements: d,
                    moreCnts: u,
                    moreMarginTops: h
                } = Jo(Ur(e.fgEventSegs, r.eventOrder), e.dayMaxEvents, e.dayMaxEventRows, r.eventOrderStrict, t.eventInstanceHeights, t.maxContentHeight, e.cells), f = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {};
                return g("tr", {
                    ref: this.rootElRef,
                    role: "row"
                }, e.renderIntro && e.renderIntro(), e.cells.map(((t, n) => {
                    let r = this.renderFgSegs(n, e.forPrint ? c[n] : d[n], e.todayRange, f),
                        i = this.renderFgSegs(n, function(e, t) {
                            if (!e.length) return [];
                            let n = function(e) {
                                let t = {};
                                for (let n of e)
                                    for (let e of n) t[e.seg.eventRange.instance.instanceId] = e.absoluteTop;
                                return t
                            }(t);
                            return e.map((e => ({
                                seg: e,
                                isVisible: !0,
                                isAbsolute: !0,
                                absoluteTop: n[e.eventRange.instance.instanceId],
                                marginTop: 0
                            })))
                        }(l[n], d), e.todayRange, {}, Boolean(e.eventDrag), Boolean(e.eventResize), !1);
                    return g(Xo, {
                        key: t.key,
                        elRef: this.cellElRefs.createRef(t.key),
                        innerElRef: this.frameElRefs.createRef(t.key),
                        dateProfile: e.dateProfile,
                        date: t.date,
                        showDayNumber: e.showDayNumbers,
                        showWeekNumber: e.showWeekNumbers && 0 === n,
                        forceDayTop: e.showWeekNumbers,
                        todayRange: e.todayRange,
                        eventSelection: e.eventSelection,
                        eventDrag: e.eventDrag,
                        eventResize: e.eventResize,
                        extraRenderProps: t.extraRenderProps,
                        extraDataAttrs: t.extraDataAttrs,
                        extraClassNames: t.extraClassNames,
                        extraDateSpan: t.extraDateSpan,
                        moreCnt: u[n],
                        moreMarginTop: h[n],
                        singlePlacements: c[n],
                        fgContentElRef: this.fgElRefs.createRef(t.key),
                        fgContent: g(m, null, g(m, null, r), g(m, null, i)),
                        bgContent: g(m, null, this.renderFillSegs(a[n], "highlight"), this.renderFillSegs(s[n], "non-business"), this.renderFillSegs(o[n], "bg-event"))
                    })
                })))
            }
            componentDidMount() {
                this.updateSizing(!0), this.context.addResizeHandler(this.handleResize)
            }
            componentDidUpdate(e, t) {
                let n = this.props;
                this.updateSizing(!ut(e, n))
            }
            componentWillUnmount() {
                this.context.removeResizeHandler(this.handleResize)
            }
            getHighlightSegs() {
                let {
                    props: e
                } = this;
                return e.eventDrag && e.eventDrag.segs.length ? e.eventDrag.segs : e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : e.dateSelectionSegs
            }
            getMirrorSegs() {
                let {
                    props: e
                } = this;
                return e.eventResize && e.eventResize.segs.length ? e.eventResize.segs : []
            }
            renderFgSegs(e, t, n, r, i, s, o) {
                let {
                    context: a
                } = this, {
                    eventSelection: l
                } = this.props, {
                    framePositions: c
                } = this.state, d = 1 === this.props.cells.length, u = i || s || o, h = [];
                if (c)
                    for (let f of t) {
                        let {
                            seg: t
                        } = f, {
                            instanceId: p
                        } = t.eventRange.instance, m = p + ":" + e, v = f.isVisible && !r[p], b = f.isAbsolute, y = "", E = "";
                        b && (a.isRtl ? (E = 0, y = c.lefts[t.lastCol] - c.lefts[t.firstCol]) : (y = 0, E = c.rights[t.firstCol] - c.rights[t.lastCol])), h.push(g("div", {
                            className: "fc-daygrid-event-harness" + (b ? " fc-daygrid-event-harness-abs" : ""),
                            key: m,
                            ref: u ? null : this.segHarnessRefs.createRef(m),
                            style: {
                                visibility: v ? "" : "hidden",
                                marginTop: b ? "" : f.marginTop,
                                top: b ? f.absoluteTop : "",
                                left: y,
                                right: E
                            }
                        }, Fo(t) ? g(Go, Object.assign({
                            seg: t,
                            isDragging: i,
                            isSelected: p === l,
                            defaultDisplayEventEnd: d
                        }, Qr(t, n))) : g(Vo, Object.assign({
                            seg: t,
                            isDragging: i,
                            isResizing: s,
                            isDateSelecting: o,
                            isSelected: p === l,
                            defaultDisplayEventEnd: d
                        }, Qr(t, n)))))
                    }
                return h
            }
            renderFillSegs(e, t) {
                let {
                    isRtl: n
                } = this.context, {
                    todayRange: r
                } = this.props, {
                    framePositions: i
                } = this.state, s = [];
                if (i)
                    for (let o of e) {
                        let e = n ? {
                            right: 0,
                            left: i.lefts[o.lastCol] - i.lefts[o.firstCol]
                        } : {
                            left: 0,
                            right: i.rights[o.firstCol] - i.rights[o.lastCol]
                        };
                        s.push(g("div", {
                            key: qr(o.eventRange),
                            className: "fc-daygrid-bg-harness",
                            style: e
                        }, "bg-event" === t ? g(ps, Object.assign({
                            seg: o
                        }, Qr(o, r))) : vs(t)))
                    }
                return g(m, {}, ...s)
            }
            updateSizing(e) {
                let {
                    props: t,
                    state: n,
                    frameElRefs: r
                } = this;
                if (!t.forPrint && null !== t.clientWidth) {
                    if (e) {
                        let e = t.cells.map((e => r.currentMap[e.key]));
                        if (e.length) {
                            let t = this.rootElRef.current,
                                r = new ar(t, e, !0, !1);
                            n.framePositions && n.framePositions.similarTo(r) || this.setState({
                                framePositions: new ar(t, e, !0, !1)
                            })
                        }
                    }
                    const i = this.state.eventInstanceHeights,
                        s = this.queryEventInstanceHeights(),
                        o = !0 === t.dayMaxEvents || !0 === t.dayMaxEventRows;
                    this.safeSetState({
                        eventInstanceHeights: Object.assign(Object.assign({}, i), s),
                        maxContentHeight: o ? this.computeMaxContentHeight() : null
                    })
                }
            }
            queryEventInstanceHeights() {
                let e = this.segHarnessRefs.currentMap,
                    t = {};
                for (let n in e) {
                    let r = Math.round(e[n].getBoundingClientRect().height),
                        i = n.split(":")[0];
                    t[i] = Math.max(t[i] || 0, r)
                }
                return t
            }
            computeMaxContentHeight() {
                let e = this.props.cells[0].key,
                    t = this.cellElRefs.currentMap[e],
                    n = this.fgElRefs.currentMap[e];
                return t.getBoundingClientRect().bottom - n.getBoundingClientRect().top
            }
            getCellEls() {
                let e = this.cellElRefs.currentMap;
                return this.props.cells.map((t => e[t.key]))
            }
        }
        ta.addStateEquality({
            eventInstanceHeights: ut
        });
        class na extends Dr {
            constructor() {
                super(...arguments), this.splitBusinessHourSegs = Pt(zo), this.splitBgEventSegs = Pt(zo), this.splitFgEventSegs = Pt(zo), this.splitDateSelectionSegs = Pt(zo), this.splitEventDrag = Pt(Lo), this.splitEventResize = Pt(Lo), this.rowRefs = new Xi, this.handleRootEl = e => {
                    this.rootEl = e, e ? this.context.registerInteractiveComponent(this, {
                        el: e,
                        isHitComboAllowed: this.props.isHitComboAllowed
                    }) : this.context.unregisterInteractiveComponent(this)
                }
            }
            render() {
                let {
                    props: e
                } = this, {
                    dateProfile: t,
                    dayMaxEventRows: n,
                    dayMaxEvents: r,
                    expandRows: i
                } = e, s = e.cells.length, o = this.splitBusinessHourSegs(e.businessHourSegs, s), a = this.splitBgEventSegs(e.bgEventSegs, s), l = this.splitFgEventSegs(e.fgEventSegs, s), c = this.splitDateSelectionSegs(e.dateSelectionSegs, s), d = this.splitEventDrag(e.eventDrag, s), u = this.splitEventResize(e.eventResize, s), h = !0 === r || !0 === n;
                return h && !i && (h = !1, n = null, r = null), g("div", {
                    className: ["fc-daygrid-body", h ? "fc-daygrid-body-balanced" : "fc-daygrid-body-unbalanced", i ? "" : "fc-daygrid-body-natural"].join(" "),
                    ref: this.handleRootEl,
                    style: {
                        width: e.clientWidth,
                        minWidth: e.tableMinWidth
                    }
                }, g(Ri, {
                    unit: "day"
                }, ((h, f) => g(m, null, g("table", {
                    role: "presentation",
                    className: "fc-scrollgrid-sync-table",
                    style: {
                        width: e.clientWidth,
                        minWidth: e.tableMinWidth,
                        height: i ? e.clientHeight : ""
                    }
                }, e.colGroupNode, g("tbody", {
                    role: "presentation"
                }, e.cells.map(((i, h) => g(ta, {
                    ref: this.rowRefs.createRef(h),
                    key: i.length ? i[0].date.toISOString() : h,
                    showDayNumbers: s > 1,
                    showWeekNumbers: e.showWeekNumbers,
                    todayRange: f,
                    dateProfile: t,
                    cells: i,
                    renderIntro: e.renderRowIntro,
                    businessHourSegs: o[h],
                    eventSelection: e.eventSelection,
                    bgEventSegs: a[h].filter(ra),
                    fgEventSegs: l[h],
                    dateSelectionSegs: c[h],
                    eventDrag: d[h],
                    eventResize: u[h],
                    dayMaxEvents: r,
                    dayMaxEventRows: n,
                    clientWidth: e.clientWidth,
                    clientHeight: e.clientHeight,
                    forPrint: e.forPrint
                })))))))))
            }
            prepareHits() {
                this.rowPositions = new ar(this.rootEl, this.rowRefs.collect().map((e => e.getCellEls()[0])), !1, !0), this.colPositions = new ar(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), !0, !1)
            }
            queryHit(e, t) {
                let {
                    colPositions: n,
                    rowPositions: r
                } = this, i = n.leftToIndex(e), s = r.topToIndex(t);
                if (null != s && null != i) {
                    let e = this.props.cells[s][i];
                    return {
                        dateProfile: this.props.dateProfile,
                        dateSpan: Object.assign({
                            range: this.getCellRange(s, i),
                            allDay: !0
                        }, e.extraDateSpan),
                        dayEl: this.getCellEl(s, i),
                        rect: {
                            left: n.lefts[i],
                            right: n.rights[i],
                            top: r.tops[s],
                            bottom: r.bottoms[s]
                        },
                        layer: 0
                    }
                }
                return null
            }
            getCellEl(e, t) {
                return this.rowRefs.currentMap[e].getCellEls()[t]
            }
            getCellRange(e, t) {
                let n = this.props.cells[e][t].date;
                return {
                    start: n,
                    end: bt(n, 1)
                }
            }
        }

        function ra(e) {
            return e.eventRange.def.allDay
        }
        class ia extends Ni {
            constructor() {
                super(...arguments), this.forceDayIfListItem = !0
            }
            sliceRange(e, t) {
                return t.sliceRange(e)
            }
        }
        class sa extends Dr {
            constructor() {
                super(...arguments), this.slicer = new ia, this.tableRef = {
                    current: null
                }
            }
            render() {
                let {
                    props: e,
                    context: t
                } = this;
                return g(na, Object.assign({
                    ref: this.tableRef
                }, this.slicer.sliceProps(e, e.dateProfile, e.nextDayThreshold, t, e.dayTableModel), {
                    dateProfile: e.dateProfile,
                    cells: e.dayTableModel.cells,
                    colGroupNode: e.colGroupNode,
                    tableMinWidth: e.tableMinWidth,
                    renderRowIntro: e.renderRowIntro,
                    dayMaxEvents: e.dayMaxEvents,
                    dayMaxEventRows: e.dayMaxEventRows,
                    showWeekNumbers: e.showWeekNumbers,
                    expandRows: e.expandRows,
                    headerAlignElRef: e.headerAlignElRef,
                    clientWidth: e.clientWidth,
                    clientHeight: e.clientHeight,
                    forPrint: e.forPrint
                }))
            }
        }

        function oa(e, t) {
            let n = new Ii(e.renderRange, t);
            return new Oi(n, /year|month|week/.test(e.currentRangeUnit))
        }
        ks(':root{--fc-daygrid-event-dot-width:8px}.fc-daygrid-day-events:after,.fc-daygrid-day-events:before,.fc-daygrid-day-frame:after,.fc-daygrid-day-frame:before,.fc-daygrid-event-harness:after,.fc-daygrid-event-harness:before{clear:both;content:"";display:table}.fc .fc-daygrid-body{position:relative;z-index:1}.fc .fc-daygrid-day.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-daygrid-day-frame{min-height:100%;position:relative}.fc .fc-daygrid-day-top{display:flex;flex-direction:row-reverse}.fc .fc-day-other .fc-daygrid-day-top{opacity:.3}.fc .fc-daygrid-day-number{padding:4px;position:relative;z-index:4}.fc .fc-daygrid-day-events{margin-top:1px}.fc .fc-daygrid-body-balanced .fc-daygrid-day-events{left:0;position:absolute;right:0}.fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events{min-height:2em;position:relative}.fc .fc-daygrid-body-natural .fc-daygrid-day-events{margin-bottom:1em}.fc .fc-daygrid-event-harness{position:relative}.fc .fc-daygrid-event-harness-abs{left:0;position:absolute;right:0;top:0}.fc .fc-daygrid-bg-harness{bottom:0;position:absolute;top:0}.fc .fc-daygrid-day-bg .fc-non-business{z-index:1}.fc .fc-daygrid-day-bg .fc-bg-event{z-index:2}.fc .fc-daygrid-day-bg .fc-highlight{z-index:3}.fc .fc-daygrid-event{margin-top:1px;z-index:6}.fc .fc-daygrid-event.fc-event-mirror{z-index:7}.fc .fc-daygrid-day-bottom{font-size:.85em;padding:2px 3px 0}.fc .fc-daygrid-day-bottom:before{clear:both;content:"";display:table}.fc .fc-daygrid-more-link{cursor:pointer;position:relative;z-index:4}.fc .fc-daygrid-week-number{background-color:var(--fc-neutral-bg-color);color:var(--fc-neutral-text-color);min-width:1.5em;padding:2px;position:absolute;text-align:center;top:0;z-index:5}.fc .fc-more-popover .fc-popover-body{min-width:220px;padding:10px}.fc-direction-ltr .fc-daygrid-event.fc-event-start,.fc-direction-rtl .fc-daygrid-event.fc-event-end{margin-left:2px}.fc-direction-ltr .fc-daygrid-event.fc-event-end,.fc-direction-rtl .fc-daygrid-event.fc-event-start{margin-right:2px}.fc-direction-ltr .fc-daygrid-week-number{border-radius:0 0 3px 0;left:0}.fc-direction-rtl .fc-daygrid-week-number{border-radius:0 0 0 3px;right:0}.fc-liquid-hack .fc-daygrid-day-frame{position:static}.fc-daygrid-event{border-radius:3px;font-size:var(--fc-small-font-size);position:relative;white-space:nowrap}.fc-daygrid-block-event .fc-event-time{font-weight:700}.fc-daygrid-block-event .fc-event-time,.fc-daygrid-block-event .fc-event-title{padding:1px}.fc-daygrid-dot-event{align-items:center;display:flex;padding:2px 0}.fc-daygrid-dot-event .fc-event-title{flex-grow:1;flex-shrink:1;font-weight:700;min-width:0;overflow:hidden}.fc-daygrid-dot-event.fc-event-mirror,.fc-daygrid-dot-event:hover{background:rgba(0,0,0,.1)}.fc-daygrid-dot-event.fc-event-selected:before{bottom:-10px;top:-10px}.fc-daygrid-event-dot{border:calc(var(--fc-daygrid-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-daygrid-event-dot-width)/2);box-sizing:content-box;height:0;margin:0 4px;width:0}.fc-direction-ltr .fc-daygrid-event .fc-event-time{margin-right:3px}.fc-direction-rtl .fc-daygrid-event .fc-event-time{margin-left:3px}');
        var aa = Ls({
            name: "@fullcalendar/daygrid",
            initialView: "dayGridMonth",
            views: {
                dayGrid: {
                    component: class extends jo {
                        constructor() {
                            super(...arguments), this.buildDayTableModel = Pt(oa), this.headerRef = {
                                current: null
                            }, this.tableRef = {
                                current: null
                            }
                        }
                        render() {
                            let {
                                options: e,
                                dateProfileGenerator: t
                            } = this.context, {
                                props: n
                            } = this, r = this.buildDayTableModel(n.dateProfile, t), i = e.dayHeaders && g(ki, {
                                ref: this.headerRef,
                                dateProfile: n.dateProfile,
                                dates: r.headerDates,
                                datesRepDistinctDays: 1 === r.rowCnt
                            }), s = t => g(sa, {
                                ref: this.tableRef,
                                dateProfile: n.dateProfile,
                                dayTableModel: r,
                                businessHours: n.businessHours,
                                dateSelection: n.dateSelection,
                                eventStore: n.eventStore,
                                eventUiBases: n.eventUiBases,
                                eventSelection: n.eventSelection,
                                eventDrag: n.eventDrag,
                                eventResize: n.eventResize,
                                nextDayThreshold: e.nextDayThreshold,
                                colGroupNode: t.tableColGroupNode,
                                tableMinWidth: t.tableMinWidth,
                                dayMaxEvents: e.dayMaxEvents,
                                dayMaxEventRows: e.dayMaxEventRows,
                                showWeekNumbers: e.weekNumbers,
                                expandRows: !n.isHeightAuto,
                                headerAlignElRef: this.headerElRef,
                                clientWidth: t.clientWidth,
                                clientHeight: t.clientHeight,
                                forPrint: n.forPrint
                            });
                            return e.dayMinWidth ? this.renderHScrollLayout(i, s, r.colCnt, e.dayMinWidth) : this.renderSimpleLayout(i, s)
                        }
                    },
                    dateProfileGeneratorClass: class extends wr {
                        buildRenderRange(e, t, n) {
                            let r, {
                                    dateEnv: i
                                } = this.props,
                                s = super.buildRenderRange(e, t, n),
                                o = s.start,
                                a = s.end;
                            if (/^(year|month)$/.test(t) && (o = i.startOfWeek(o), r = i.startOfWeek(a), r.valueOf() !== a.valueOf() && (a = vt(r, 1))), this.props.monthMode && this.props.fixedWeekCount) {
                                a = vt(a, 6 - Math.ceil(Et(o, a) / 7))
                            }
                            return {
                                start: o,
                                end: a
                            }
                        }
                    }
                },
                dayGridDay: {
                    type: "dayGrid",
                    duration: {
                        days: 1
                    }
                },
                dayGridWeek: {
                    type: "dayGrid",
                    duration: {
                        weeks: 1
                    }
                },
                dayGridMonth: {
                    type: "dayGrid",
                    duration: {
                        months: 1
                    },
                    monthMode: !0,
                    fixedWeekCount: !0
                }
            }
        });
        pi.touchMouseIgnoreWait = 500;
        let la = 0,
            ca = 0,
            da = !1;
        class ua {
            constructor(e) {
                this.subjectEl = null, this.selector = "", this.handleSelector = "", this.shouldIgnoreMove = !1, this.shouldWatchScroll = !0, this.isDragging = !1, this.isTouchDragging = !1, this.wasTouchScroll = !1, this.handleMouseDown = e => {
                    if (!this.shouldIgnoreMouse() && function(e) {
                            return 0 === e.button && !e.ctrlKey
                        }(e) && this.tryStart(e)) {
                        let t = this.createEventFromMouse(e, !0);
                        this.emitter.trigger("pointerdown", t), this.initScrollWatch(t), this.shouldIgnoreMove || document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp)
                    }
                }, this.handleMouseMove = e => {
                    let t = this.createEventFromMouse(e);
                    this.recordCoords(t), this.emitter.trigger("pointermove", t)
                }, this.handleMouseUp = e => {
                    document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), this.emitter.trigger("pointerup", this.createEventFromMouse(e)), this.cleanup()
                }, this.handleTouchStart = e => {
                    if (this.tryStart(e)) {
                        this.isTouchDragging = !0;
                        let t = this.createEventFromTouch(e, !0);
                        this.emitter.trigger("pointerdown", t), this.initScrollWatch(t);
                        let n = e.target;
                        this.shouldIgnoreMove || n.addEventListener("touchmove", this.handleTouchMove), n.addEventListener("touchend", this.handleTouchEnd), n.addEventListener("touchcancel", this.handleTouchEnd), window.addEventListener("scroll", this.handleTouchScroll, !0)
                    }
                }, this.handleTouchMove = e => {
                    let t = this.createEventFromTouch(e);
                    this.recordCoords(t), this.emitter.trigger("pointermove", t)
                }, this.handleTouchEnd = e => {
                    if (this.isDragging) {
                        let t = e.target;
                        t.removeEventListener("touchmove", this.handleTouchMove), t.removeEventListener("touchend", this.handleTouchEnd), t.removeEventListener("touchcancel", this.handleTouchEnd), window.removeEventListener("scroll", this.handleTouchScroll, !0), this.emitter.trigger("pointerup", this.createEventFromTouch(e)), this.cleanup(), this.isTouchDragging = !1, la += 1, setTimeout((() => {
                            la -= 1
                        }), pi.touchMouseIgnoreWait)
                    }
                }, this.handleTouchScroll = () => {
                    this.wasTouchScroll = !0
                }, this.handleScroll = e => {
                    if (!this.shouldIgnoreMove) {
                        let t = window.pageXOffset - this.prevScrollX + this.prevPageX,
                            n = window.pageYOffset - this.prevScrollY + this.prevPageY;
                        this.emitter.trigger("pointermove", {
                            origEvent: e,
                            isTouch: this.isTouchDragging,
                            subjectEl: this.subjectEl,
                            pageX: t,
                            pageY: n,
                            deltaX: t - this.origPageX,
                            deltaY: n - this.origPageY
                        })
                    }
                }, this.containerEl = e, this.emitter = new or, e.addEventListener("mousedown", this.handleMouseDown), e.addEventListener("touchstart", this.handleTouchStart, {
                    passive: !0
                }), ca += 1, 1 === ca && window.addEventListener("touchmove", ha, {
                    passive: !1
                })
            }
            destroy() {
                this.containerEl.removeEventListener("mousedown", this.handleMouseDown), this.containerEl.removeEventListener("touchstart", this.handleTouchStart, {
                    passive: !0
                }), ca -= 1, ca || window.removeEventListener("touchmove", ha, {
                    passive: !1
                })
            }
            tryStart(e) {
                let t = this.querySubjectEl(e),
                    n = e.target;
                return !(!t || this.handleSelector && !xe(n, this.handleSelector)) && (this.subjectEl = t, this.isDragging = !0, this.wasTouchScroll = !1, !0)
            }
            cleanup() {
                da = !1, this.isDragging = !1, this.subjectEl = null, this.destroyScrollWatch()
            }
            querySubjectEl(e) {
                return this.selector ? xe(e.target, this.selector) : this.containerEl
            }
            shouldIgnoreMouse() {
                return la || this.isTouchDragging
            }
            cancelTouchScroll() {
                this.isDragging && (da = !0)
            }
            initScrollWatch(e) {
                this.shouldWatchScroll && (this.recordCoords(e), window.addEventListener("scroll", this.handleScroll, !0))
            }
            recordCoords(e) {
                this.shouldWatchScroll && (this.prevPageX = e.pageX, this.prevPageY = e.pageY, this.prevScrollX = window.pageXOffset, this.prevScrollY = window.pageYOffset)
            }
            destroyScrollWatch() {
                this.shouldWatchScroll && window.removeEventListener("scroll", this.handleScroll, !0)
            }
            createEventFromMouse(e, t) {
                let n = 0,
                    r = 0;
                return t ? (this.origPageX = e.pageX, this.origPageY = e.pageY) : (n = e.pageX - this.origPageX, r = e.pageY - this.origPageY), {
                    origEvent: e,
                    isTouch: !1,
                    subjectEl: this.subjectEl,
                    pageX: e.pageX,
                    pageY: e.pageY,
                    deltaX: n,
                    deltaY: r
                }
            }
            createEventFromTouch(e, t) {
                let n, r, i = e.touches,
                    s = 0,
                    o = 0;
                return i && i.length ? (n = i[0].pageX, r = i[0].pageY) : (n = e.pageX, r = e.pageY), t ? (this.origPageX = n, this.origPageY = r) : (s = n - this.origPageX, o = r - this.origPageY), {
                    origEvent: e,
                    isTouch: !0,
                    subjectEl: this.subjectEl,
                    pageX: n,
                    pageY: r,
                    deltaX: s,
                    deltaY: o
                }
            }
        }

        function ha(e) {
            da && e.preventDefault()
        }
        class fa {
            constructor() {
                this.isVisible = !1, this.sourceEl = null, this.mirrorEl = null, this.sourceElRect = null, this.parentNode = document.body, this.zIndex = 9999, this.revertDuration = 0
            }
            start(e, t, n) {
                this.sourceEl = e, this.sourceElRect = this.sourceEl.getBoundingClientRect(), this.origScreenX = t - window.pageXOffset, this.origScreenY = n - window.pageYOffset, this.deltaX = 0, this.deltaY = 0, this.updateElPosition()
            }
            handleMove(e, t) {
                this.deltaX = e - window.pageXOffset - this.origScreenX, this.deltaY = t - window.pageYOffset - this.origScreenY, this.updateElPosition()
            }
            setIsVisible(e) {
                e ? this.isVisible || (this.mirrorEl && (this.mirrorEl.style.display = ""), this.isVisible = e, this.updateElPosition()) : this.isVisible && (this.mirrorEl && (this.mirrorEl.style.display = "none"), this.isVisible = e)
            }
            stop(e, t) {
                let n = () => {
                    this.cleanup(), t()
                };
                e && this.mirrorEl && this.isVisible && this.revertDuration && (this.deltaX || this.deltaY) ? this.doRevertAnimation(n, this.revertDuration) : setTimeout(n, 0)
            }
            doRevertAnimation(e, t) {
                let n = this.mirrorEl,
                    r = this.sourceEl.getBoundingClientRect();
                n.style.transition = "top " + t + "ms,left " + t + "ms", Te(n, {
                        left: r.left,
                        top: r.top
                    }),
                    function(e, t) {
                        let n = r => {
                            t(r), Be.forEach((t => {
                                e.removeEventListener(t, n)
                            }))
                        };
                        Be.forEach((t => {
                            e.addEventListener(t, n)
                        }))
                    }(n, (() => {
                        n.style.transition = "", e()
                    }))
            }
            cleanup() {
                this.mirrorEl && (Ce(this.mirrorEl), this.mirrorEl = null), this.sourceEl = null
            }
            updateElPosition() {
                this.sourceEl && this.isVisible && Te(this.getMirrorEl(), {
                    left: this.sourceElRect.left + this.deltaX,
                    top: this.sourceElRect.top + this.deltaY
                })
            }
            getMirrorEl() {
                let e = this.sourceElRect,
                    t = this.mirrorEl;
                return t || (t = this.mirrorEl = this.sourceEl.cloneNode(!0), t.classList.add("fc-unselectable"), t.classList.add("fc-event-dragging"), Te(t, {
                    position: "fixed",
                    zIndex: this.zIndex,
                    visibility: "",
                    boxSizing: "border-box",
                    width: e.right - e.left,
                    height: e.bottom - e.top,
                    right: "auto",
                    bottom: "auto",
                    margin: 0
                }), this.parentNode.appendChild(t)), t
            }
        }
        class ga extends cr {
            constructor(e, t) {
                super(), this.handleScroll = () => {
                    this.scrollTop = this.scrollController.getScrollTop(), this.scrollLeft = this.scrollController.getScrollLeft(), this.handleScrollChange()
                }, this.scrollController = e, this.doesListening = t, this.scrollTop = this.origScrollTop = e.getScrollTop(), this.scrollLeft = this.origScrollLeft = e.getScrollLeft(), this.scrollWidth = e.getScrollWidth(), this.scrollHeight = e.getScrollHeight(), this.clientWidth = e.getClientWidth(), this.clientHeight = e.getClientHeight(), this.clientRect = this.computeClientRect(), this.doesListening && this.getEventTarget().addEventListener("scroll", this.handleScroll)
            }
            destroy() {
                this.doesListening && this.getEventTarget().removeEventListener("scroll", this.handleScroll)
            }
            getScrollTop() {
                return this.scrollTop
            }
            getScrollLeft() {
                return this.scrollLeft
            }
            setScrollTop(e) {
                this.scrollController.setScrollTop(e), this.doesListening || (this.scrollTop = Math.max(Math.min(e, this.getMaxScrollTop()), 0), this.handleScrollChange())
            }
            setScrollLeft(e) {
                this.scrollController.setScrollLeft(e), this.doesListening || (this.scrollLeft = Math.max(Math.min(e, this.getMaxScrollLeft()), 0), this.handleScrollChange())
            }
            getClientWidth() {
                return this.clientWidth
            }
            getClientHeight() {
                return this.clientHeight
            }
            getScrollWidth() {
                return this.scrollWidth
            }
            getScrollHeight() {
                return this.scrollHeight
            }
            handleScrollChange() {}
        }
        class pa extends ga {
            constructor(e, t) {
                super(new dr(e), t)
            }
            getEventTarget() {
                return this.scrollController.el
            }
            computeClientRect() {
                return rr(this.scrollController.el)
            }
        }
        class ma extends ga {
            constructor(e) {
                super(new ur, e)
            }
            getEventTarget() {
                return window
            }
            computeClientRect() {
                return {
                    left: this.scrollLeft,
                    right: this.scrollLeft + this.clientWidth,
                    top: this.scrollTop,
                    bottom: this.scrollTop + this.clientHeight
                }
            }
            handleScrollChange() {
                this.clientRect = this.computeClientRect()
            }
        }
        const va = "function" == typeof performance ? performance.now : Date.now;
        class ba {
            constructor() {
                this.isEnabled = !0, this.scrollQuery = [window, ".fc-scroller"], this.edgeThreshold = 50, this.maxVelocity = 300, this.pointerScreenX = null, this.pointerScreenY = null, this.isAnimating = !1, this.scrollCaches = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.animate = () => {
                    if (this.isAnimating) {
                        let e = this.computeBestEdge(this.pointerScreenX + window.pageXOffset, this.pointerScreenY + window.pageYOffset);
                        if (e) {
                            let t = va();
                            this.handleSide(e, (t - this.msSinceRequest) / 1e3), this.requestAnimation(t)
                        } else this.isAnimating = !1
                    }
                }
            }
            start(e, t, n) {
                this.isEnabled && (this.scrollCaches = this.buildCaches(n), this.pointerScreenX = null, this.pointerScreenY = null, this.everMovedUp = !1, this.everMovedDown = !1, this.everMovedLeft = !1, this.everMovedRight = !1, this.handleMove(e, t))
            }
            handleMove(e, t) {
                if (this.isEnabled) {
                    let n = e - window.pageXOffset,
                        r = t - window.pageYOffset,
                        i = null === this.pointerScreenY ? 0 : r - this.pointerScreenY,
                        s = null === this.pointerScreenX ? 0 : n - this.pointerScreenX;
                    i < 0 ? this.everMovedUp = !0 : i > 0 && (this.everMovedDown = !0), s < 0 ? this.everMovedLeft = !0 : s > 0 && (this.everMovedRight = !0), this.pointerScreenX = n, this.pointerScreenY = r, this.isAnimating || (this.isAnimating = !0, this.requestAnimation(va()))
                }
            }
            stop() {
                if (this.isEnabled) {
                    this.isAnimating = !1;
                    for (let e of this.scrollCaches) e.destroy();
                    this.scrollCaches = null
                }
            }
            requestAnimation(e) {
                this.msSinceRequest = e, requestAnimationFrame(this.animate)
            }
            handleSide(e, t) {
                let {
                    scrollCache: n
                } = e, {
                    edgeThreshold: r
                } = this, i = r - e.distance, s = i * i / (r * r) * this.maxVelocity * t, o = 1;
                switch (e.name) {
                    case "left":
                        o = -1;
                    case "right":
                        n.setScrollLeft(n.getScrollLeft() + s * o);
                        break;
                    case "top":
                        o = -1;
                    case "bottom":
                        n.setScrollTop(n.getScrollTop() + s * o)
                }
            }
            computeBestEdge(e, t) {
                let {
                    edgeThreshold: n
                } = this, r = null, i = this.scrollCaches || [];
                for (let s of i) {
                    let i = s.clientRect,
                        o = e - i.left,
                        a = i.right - e,
                        l = t - i.top,
                        c = i.bottom - t;
                    o >= 0 && a >= 0 && l >= 0 && c >= 0 && (l <= n && this.everMovedUp && s.canScrollUp() && (!r || r.distance > l) && (r = {
                        scrollCache: s,
                        name: "top",
                        distance: l
                    }), c <= n && this.everMovedDown && s.canScrollDown() && (!r || r.distance > c) && (r = {
                        scrollCache: s,
                        name: "bottom",
                        distance: c
                    }), o <= n && this.everMovedLeft && s.canScrollLeft() && (!r || r.distance > o) && (r = {
                        scrollCache: s,
                        name: "left",
                        distance: o
                    }), a <= n && this.everMovedRight && s.canScrollRight() && (!r || r.distance > a) && (r = {
                        scrollCache: s,
                        name: "right",
                        distance: a
                    }))
                }
                return r
            }
            buildCaches(e) {
                return this.queryScrollEls(e).map((e => e === window ? new ma(!1) : new pa(e, !1)))
            }
            queryScrollEls(e) {
                let t = [];
                for (let n of this.scrollQuery) "object" == typeof n ? t.push(n) : t.push(...Array.prototype.slice.call(Ie(e).querySelectorAll(n)));
                return t
            }
        }
        class ya extends gi {
            constructor(e, t) {
                super(e), this.containerEl = e, this.delay = null, this.minDistance = 0, this.touchScrollAllowed = !0, this.mirrorNeedsRevert = !1, this.isInteracting = !1, this.isDragging = !1, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.delayTimeoutId = null, this.onPointerDown = e => {
                    var t;
                    this.isDragging || (this.isInteracting = !0, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, (t = document.body).classList.add("fc-unselectable"), t.addEventListener("selectstart", Pe), function(e) {
                        e.addEventListener("contextmenu", Pe)
                    }(document.body), e.isTouch || e.origEvent.preventDefault(), this.emitter.trigger("pointerdown", e), this.isInteracting && !this.pointer.shouldIgnoreMove && (this.mirror.setIsVisible(!1), this.mirror.start(e.subjectEl, e.pageX, e.pageY), this.startDelay(e), this.minDistance || this.handleDistanceSurpassed(e)))
                }, this.onPointerMove = e => {
                    if (this.isInteracting) {
                        if (this.emitter.trigger("pointermove", e), !this.isDistanceSurpassed) {
                            let t, n = this.minDistance,
                                {
                                    deltaX: r,
                                    deltaY: i
                                } = e;
                            t = r * r + i * i, t >= n * n && this.handleDistanceSurpassed(e)
                        }
                        this.isDragging && ("scroll" !== e.origEvent.type && (this.mirror.handleMove(e.pageX, e.pageY), this.autoScroller.handleMove(e.pageX, e.pageY)), this.emitter.trigger("dragmove", e))
                    }
                }, this.onPointerUp = e => {
                    var t;
                    this.isInteracting && (this.isInteracting = !1, (t = document.body).classList.remove("fc-unselectable"), t.removeEventListener("selectstart", Pe), function(e) {
                        e.removeEventListener("contextmenu", Pe)
                    }(document.body), this.emitter.trigger("pointerup", e), this.isDragging && (this.autoScroller.stop(), this.tryStopDrag(e)), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null))
                };
                let n = this.pointer = new ua(e);
                n.emitter.on("pointerdown", this.onPointerDown), n.emitter.on("pointermove", this.onPointerMove), n.emitter.on("pointerup", this.onPointerUp), t && (n.selector = t), this.mirror = new fa, this.autoScroller = new ba
            }
            destroy() {
                this.pointer.destroy(), this.onPointerUp({})
            }
            startDelay(e) {
                "number" == typeof this.delay ? this.delayTimeoutId = setTimeout((() => {
                    this.delayTimeoutId = null, this.handleDelayEnd(e)
                }), this.delay) : this.handleDelayEnd(e)
            }
            handleDelayEnd(e) {
                this.isDelayEnded = !0, this.tryStartDrag(e)
            }
            handleDistanceSurpassed(e) {
                this.isDistanceSurpassed = !0, this.tryStartDrag(e)
            }
            tryStartDrag(e) {
                this.isDelayEnded && this.isDistanceSurpassed && (this.pointer.wasTouchScroll && !this.touchScrollAllowed || (this.isDragging = !0, this.mirrorNeedsRevert = !1, this.autoScroller.start(e.pageX, e.pageY, this.containerEl), this.emitter.trigger("dragstart", e), !1 === this.touchScrollAllowed && this.pointer.cancelTouchScroll()))
            }
            tryStopDrag(e) {
                this.mirror.stop(this.mirrorNeedsRevert, this.stopDrag.bind(this, e))
            }
            stopDrag(e) {
                this.isDragging = !1, this.emitter.trigger("dragend", e)
            }
            setIgnoreMove(e) {
                this.pointer.shouldIgnoreMove = e
            }
            setMirrorIsVisible(e) {
                this.mirror.setIsVisible(e)
            }
            setMirrorNeedsRevert(e) {
                this.mirrorNeedsRevert = e
            }
            setAutoScrollEnabled(e) {
                this.autoScroller.isEnabled = e
            }
        }
        class Ea {
            constructor(e) {
                this.origRect = ir(e), this.scrollCaches = sr(e).map((e => new pa(e, !0)))
            }
            destroy() {
                for (let e of this.scrollCaches) e.destroy()
            }
            computeLeft() {
                let e = this.origRect.left;
                for (let t of this.scrollCaches) e += t.origScrollLeft - t.getScrollLeft();
                return e
            }
            computeTop() {
                let e = this.origRect.top;
                for (let t of this.scrollCaches) e += t.origScrollTop - t.getScrollTop();
                return e
            }
            isWithinClipping(e, t) {
                let n = {
                    left: e,
                    top: t
                };
                for (let e of this.scrollCaches)
                    if (!Aa(e.getEventTarget()) && !Nn(n, e.clientRect)) return !1;
                return !0
            }
        }

        function Aa(e) {
            let t = e.tagName;
            return "HTML" === t || "BODY" === t
        }
        class Da {
            constructor(e, t) {
                this.useSubjectCenter = !1, this.requireInitial = !0, this.initialHit = null, this.movingHit = null, this.finalHit = null, this.handlePointerDown = e => {
                    let {
                        dragging: t
                    } = this;
                    this.initialHit = null, this.movingHit = null, this.finalHit = null, this.prepareHits(), this.processFirstCoord(e), this.initialHit || !this.requireInitial ? (t.setIgnoreMove(!1), this.emitter.trigger("pointerdown", e)) : t.setIgnoreMove(!0)
                }, this.handleDragStart = e => {
                    this.emitter.trigger("dragstart", e), this.handleMove(e, !0)
                }, this.handleDragMove = e => {
                    this.emitter.trigger("dragmove", e), this.handleMove(e)
                }, this.handlePointerUp = e => {
                    this.releaseHits(), this.emitter.trigger("pointerup", e)
                }, this.handleDragEnd = e => {
                    this.movingHit && this.emitter.trigger("hitupdate", null, !0, e), this.finalHit = this.movingHit, this.movingHit = null, this.emitter.trigger("dragend", e)
                }, this.droppableStore = t, e.emitter.on("pointerdown", this.handlePointerDown), e.emitter.on("dragstart", this.handleDragStart), e.emitter.on("dragmove", this.handleDragMove), e.emitter.on("pointerup", this.handlePointerUp), e.emitter.on("dragend", this.handleDragEnd), this.dragging = e, this.emitter = new or
            }
            processFirstCoord(e) {
                let t, n = {
                        left: e.pageX,
                        top: e.pageY
                    },
                    r = n,
                    i = e.subjectEl;
                var s, o;
                i instanceof HTMLElement && (t = ir(i), s = r, o = t, r = {
                    left: Math.min(Math.max(s.left, o.left), o.right),
                    top: Math.min(Math.max(s.top, o.top), o.bottom)
                });
                let a = this.initialHit = this.queryHitForOffset(r.left, r.top);
                if (a) {
                    if (this.useSubjectCenter && t) {
                        let e = Pn(t, a.rect);
                        e && (r = function(e) {
                            return {
                                left: (e.left + e.right) / 2,
                                top: (e.top + e.bottom) / 2
                            }
                        }(e))
                    }
                    this.coordAdjust = (c = n, {
                        left: (l = r).left - c.left,
                        top: l.top - c.top
                    })
                } else this.coordAdjust = {
                    left: 0,
                    top: 0
                };
                var l, c
            }
            handleMove(e, t) {
                let n = this.queryHitForOffset(e.pageX + this.coordAdjust.left, e.pageY + this.coordAdjust.top);
                !t && Sa(this.movingHit, n) || (this.movingHit = n, this.emitter.trigger("hitupdate", n, !1, e))
            }
            prepareHits() {
                this.offsetTrackers = lt(this.droppableStore, (e => (e.component.prepareHits(), new Ea(e.el))))
            }
            releaseHits() {
                let {
                    offsetTrackers: e
                } = this;
                for (let t in e) e[t].destroy();
                this.offsetTrackers = {}
            }
            queryHitForOffset(e, t) {
                let {
                    droppableStore: n,
                    offsetTrackers: r
                } = this, i = null;
                for (let s in n) {
                    let o = n[s].component,
                        a = r[s];
                    if (a && a.isWithinClipping(e, t)) {
                        let n = a.computeLeft(),
                            r = a.computeTop(),
                            l = e - n,
                            c = t - r,
                            {
                                origRect: d
                            } = a,
                            u = d.right - d.left,
                            h = d.bottom - d.top;
                        if (l >= 0 && l < u && c >= 0 && c < h) {
                            let e = o.queryHit(l, c, u, h);
                            e && Gn(e.dateProfile.activeRange, e.dateSpan.range) && (!i || e.layer > i.layer) && (e.componentId = s, e.context = o.context, e.rect.left += n, e.rect.right += n, e.rect.top += r, e.rect.bottom += r, i = e)
                        }
                    }
                }
                return i
            }
        }

        function Sa(e, t) {
            return !e && !t || Boolean(e) === Boolean(t) && (n = e.dateSpan, r = t.dateSpan, i = n.range, s = r.range, (null === i.start ? null : i.start.valueOf()) === (null === s.start ? null : s.start.valueOf()) && (null === i.end ? null : i.end.valueOf()) === (null === s.end ? null : s.end.valueOf()) && n.allDay === r.allDay && function(e, t) {
                for (let n in t)
                    if ("range" !== n && "allDay" !== n && e[n] !== t[n]) return !1;
                for (let n in e)
                    if (!(n in t)) return !1;
                return !0
            }(n, r));
            var n, r, i, s
        }

        function wa(e, t) {
            let n = {};
            for (let r of t.pluginHooks.datePointTransforms) Object.assign(n, r(e, t));
            var r, i;
            return Object.assign(n, (r = e, {
                date: (i = t.dateEnv).toDate(r.range.start),
                dateStr: i.formatIso(r.range.start, {
                    omitTime: r.allDay
                }),
                allDay: r.allDay
            })), n
        }
        class Ca extends ui {
            constructor(e) {
                super(e), this.subjectEl = null, this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = e => {
                    let t = e.origEvent.target,
                        {
                            component: n,
                            dragging: r
                        } = this,
                        {
                            mirror: i
                        } = r,
                        {
                            options: s
                        } = n.context,
                        o = n.context;
                    this.subjectEl = e.subjectEl;
                    let a = this.subjectSeg = Br(e.subjectEl),
                        l = (this.eventRange = a.eventRange).instance.instanceId;
                    this.relevantEvents = fn(o.getCurrentData().eventStore, l), r.minDistance = e.isTouch ? 0 : s.eventDragMinDistance, r.delay = e.isTouch && l !== n.props.eventSelection ? function(e) {
                        let {
                            options: t
                        } = e.context, n = t.eventLongPressDelay;
                        null == n && (n = t.longPressDelay);
                        return n
                    }(n) : null, s.fixedMirrorParent ? i.parentNode = s.fixedMirrorParent : i.parentNode = xe(t, ".fc"), i.revertDuration = s.dragRevertDuration;
                    let c = n.isValidSegDownEl(t) && !xe(t, ".fc-event-resizer");
                    r.setIgnoreMove(!c), this.isDragging = c && e.subjectEl.classList.contains("fc-event-draggable")
                }, this.handleDragStart = e => {
                    let t = this.component.context,
                        n = this.eventRange,
                        r = n.instance.instanceId;
                    e.isTouch ? r !== this.component.props.eventSelection && t.dispatch({
                        type: "SELECT_EVENT",
                        eventInstanceId: r
                    }) : t.dispatch({
                        type: "UNSELECT_EVENT"
                    }), this.isDragging && (t.calendarApi.unselect(e), t.emitter.trigger("eventDragStart", {
                        el: this.subjectEl,
                        event: new Ir(t, n.def, n.instance),
                        jsEvent: e.origEvent,
                        view: t.viewApi
                    }))
                }, this.handleHitUpdate = (e, t) => {
                    if (!this.isDragging) return;
                    let n = this.relevantEvents,
                        r = this.hitDragging.initialHit,
                        i = this.component.context,
                        s = null,
                        o = null,
                        a = null,
                        l = !1,
                        c = {
                            affectedEvents: n,
                            mutatedEvents: {
                                defs: {},
                                instances: {}
                            },
                            isEvent: !0
                        };
                    if (e) {
                        s = e.context;
                        let t = s.options;
                        i === s || t.editable && t.droppable ? (o = function(e, t, n) {
                            let r = e.dateSpan,
                                i = t.dateSpan,
                                s = r.range.start,
                                o = i.range.start,
                                a = {};
                            r.allDay !== i.allDay && (a.allDay = i.allDay, a.hasEnd = t.context.options.allDayMaintainDuration, i.allDay && (s = Dt(s)));
                            let l = On(s, o, e.context.dateEnv, e.componentId === t.componentId ? e.largeUnit : null);
                            l.milliseconds && (a.allDay = !1);
                            let c = {
                                datesDelta: l,
                                standardProps: a
                            };
                            for (let r of n) r(c, e, t);
                            return c
                        }(r, e, s.getCurrentData().pluginHooks.eventDragMutationMassagers), o && (a = Rr(n, s.getCurrentData().eventUiBases, o, s), c.mutatedEvents = a, zi(c, e.dateProfile, s) || (l = !0, o = null, a = null, c.mutatedEvents = {
                            defs: {},
                            instances: {}
                        }))) : s = null
                    }
                    this.displayDrag(s, c), l ? We() : Fe(), t || (i === s && Sa(r, e) && (o = null), this.dragging.setMirrorNeedsRevert(!o), this.dragging.setMirrorIsVisible(!e || !Ie(this.subjectEl).querySelector(".fc-event-mirror")), this.receivingContext = s, this.validMutation = o, this.mutatedRelevantEvents = a)
                }, this.handlePointerUp = () => {
                    this.isDragging || this.cleanup()
                }, this.handleDragEnd = e => {
                    if (this.isDragging) {
                        let t = this.component.context,
                            n = t.viewApi,
                            {
                                receivingContext: r,
                                validMutation: i
                            } = this,
                            s = this.eventRange.def,
                            o = this.eventRange.instance,
                            a = new Ir(t, s, o),
                            l = this.relevantEvents,
                            c = this.mutatedRelevantEvents,
                            {
                                finalHit: d
                            } = this.hitDragging;
                        if (this.clearDrag(), t.emitter.trigger("eventDragStop", {
                                el: this.subjectEl,
                                event: a,
                                jsEvent: e.origEvent,
                                view: n
                            }), i) {
                            if (r === t) {
                                let r = new Ir(t, c.defs[s.defId], o ? c.instances[o.instanceId] : null);
                                t.dispatch({
                                    type: "MERGE_EVENTS",
                                    eventStore: c
                                });
                                let d = {
                                        oldEvent: a,
                                        event: r,
                                        relatedEvents: Nr(c, t, o),
                                        revert() {
                                            t.dispatch({
                                                type: "MERGE_EVENTS",
                                                eventStore: l
                                            })
                                        }
                                    },
                                    u = {};
                                for (let e of t.getCurrentData().pluginHooks.eventDropTransformers) Object.assign(u, e(i, t));
                                t.emitter.trigger("eventDrop", Object.assign(Object.assign(Object.assign({}, d), u), {
                                    el: e.subjectEl,
                                    delta: i.datesDelta,
                                    jsEvent: e.origEvent,
                                    view: n
                                })), t.emitter.trigger("eventChange", d)
                            } else if (r) {
                                let i = {
                                    event: a,
                                    relatedEvents: Nr(l, t, o),
                                    revert() {
                                        t.dispatch({
                                            type: "MERGE_EVENTS",
                                            eventStore: l
                                        })
                                    }
                                };
                                t.emitter.trigger("eventLeave", Object.assign(Object.assign({}, i), {
                                    draggedEl: e.subjectEl,
                                    view: n
                                })), t.dispatch({
                                    type: "REMOVE_EVENTS",
                                    eventStore: l
                                }), t.emitter.trigger("eventRemove", i);
                                let u = c.defs[s.defId],
                                    h = c.instances[o.instanceId],
                                    f = new Ir(r, u, h);
                                r.dispatch({
                                    type: "MERGE_EVENTS",
                                    eventStore: c
                                });
                                let g = {
                                    event: f,
                                    relatedEvents: Nr(c, r, h),
                                    revert() {
                                        r.dispatch({
                                            type: "REMOVE_EVENTS",
                                            eventStore: c
                                        })
                                    }
                                };
                                r.emitter.trigger("eventAdd", g), e.isTouch && r.dispatch({
                                    type: "SELECT_EVENT",
                                    eventInstanceId: o.instanceId
                                }), r.emitter.trigger("drop", Object.assign(Object.assign({}, wa(d.dateSpan, r)), {
                                    draggedEl: e.subjectEl,
                                    jsEvent: e.origEvent,
                                    view: d.context.viewApi
                                })), r.emitter.trigger("eventReceive", Object.assign(Object.assign({}, g), {
                                    draggedEl: e.subjectEl,
                                    view: d.context.viewApi
                                }))
                            }
                        } else t.emitter.trigger("_noEventDrop")
                    }
                    this.cleanup()
                };
                let {
                    component: t
                } = this, {
                    options: n
                } = t.context, r = this.dragging = new ya(e.el);
                r.pointer.selector = Ca.SELECTOR, r.touchScrollAllowed = !1, r.autoScroller.isEnabled = n.dragScroll;
                let i = this.hitDragging = new Da(this.dragging, fi);
                i.useSubjectCenter = e.useEventCenter, i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("pointerup", this.handlePointerUp), i.emitter.on("dragend", this.handleDragEnd)
            }
            destroy() {
                this.dragging.destroy()
            }
            displayDrag(e, t) {
                let n = this.component.context,
                    r = this.receivingContext;
                r && r !== e && (r === n ? r.dispatch({
                    type: "SET_EVENT_DRAG",
                    state: {
                        affectedEvents: t.affectedEvents,
                        mutatedEvents: {
                            defs: {},
                            instances: {}
                        },
                        isEvent: !0
                    }
                }) : r.dispatch({
                    type: "UNSET_EVENT_DRAG"
                })), e && e.dispatch({
                    type: "SET_EVENT_DRAG",
                    state: t
                })
            }
            clearDrag() {
                let e = this.component.context,
                    {
                        receivingContext: t
                    } = this;
                t && t.dispatch({
                    type: "UNSET_EVENT_DRAG"
                }), e !== t && e.dispatch({
                    type: "UNSET_EVENT_DRAG"
                })
            }
            cleanup() {
                this.subjectSeg = null, this.isDragging = !1, this.eventRange = null, this.relevantEvents = null, this.receivingContext = null, this.validMutation = null, this.mutatedRelevantEvents = null
            }
        }
        Ca.SELECTOR = ".fc-event-draggable, .fc-event-resizable";
        const xa = {
                fixedMirrorParent: an
            },
            _a = {
                dateClick: an,
                eventDragStart: an,
                eventDragStop: an,
                eventDrop: an,
                eventResizeStart: an,
                eventResizeStop: an,
                eventResize: an,
                drop: an,
                eventReceive: an,
                eventLeave: an
            };
        pi.dataAttrPrefix = "";
        var Ra = Ls({
            name: "@fullcalendar/interaction",
            componentInteractions: [class extends ui {
                constructor(e) {
                    super(e), this.handlePointerDown = e => {
                        let {
                            dragging: t
                        } = this, n = e.origEvent.target;
                        t.setIgnoreMove(!this.component.isValidDateDownEl(n))
                    }, this.handleDragEnd = e => {
                        let {
                            component: t
                        } = this, {
                            pointer: n
                        } = this.dragging;
                        if (!n.wasTouchScroll) {
                            let {
                                initialHit: n,
                                finalHit: r
                            } = this.hitDragging;
                            if (n && r && Sa(n, r)) {
                                let {
                                    context: r
                                } = t, i = Object.assign(Object.assign({}, wa(n.dateSpan, r)), {
                                    dayEl: n.dayEl,
                                    jsEvent: e.origEvent,
                                    view: r.viewApi || r.calendarApi.view
                                });
                                r.emitter.trigger("dateClick", i)
                            }
                        }
                    }, this.dragging = new ya(e.el), this.dragging.autoScroller.isEnabled = !1;
                    let t = this.hitDragging = new Da(this.dragging, hi(e));
                    t.emitter.on("pointerdown", this.handlePointerDown), t.emitter.on("dragend", this.handleDragEnd)
                }
                destroy() {
                    this.dragging.destroy()
                }
            }, class extends ui {
                constructor(e) {
                    super(e), this.dragSelection = null, this.handlePointerDown = e => {
                        let {
                            component: t,
                            dragging: n
                        } = this, {
                            options: r
                        } = t.context, i = r.selectable && t.isValidDateDownEl(e.origEvent.target);
                        n.setIgnoreMove(!i), n.delay = e.isTouch ? function(e) {
                            let {
                                options: t
                            } = e.context, n = t.selectLongPressDelay;
                            null == n && (n = t.longPressDelay);
                            return n
                        }(t) : null
                    }, this.handleDragStart = e => {
                        this.component.context.calendarApi.unselect(e)
                    }, this.handleHitUpdate = (e, t) => {
                        let {
                            context: n
                        } = this.component, r = null, i = !1;
                        if (e) {
                            let t = this.hitDragging.initialHit;
                            e.componentId === t.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(t, e) || (r = function(e, t, n) {
                                let r = e.dateSpan,
                                    i = t.dateSpan,
                                    s = [r.range.start, r.range.end, i.range.start, i.range.end];
                                s.sort(Ye);
                                let o = {};
                                for (let r of n) {
                                    let n = r(e, t);
                                    if (!1 === n) return null;
                                    n && Object.assign(o, n)
                                }
                                return o.range = {
                                    start: s[0],
                                    end: s[3]
                                }, o.allDay = r.allDay, o
                            }(t, e, n.pluginHooks.dateSelectionTransformers)), r && function(e, t, n) {
                                return !!Gn(t.validRange, e.range) && Ui({
                                    dateSelection: e
                                }, n)
                            }(r, e.dateProfile, n) || (i = !0, r = null)
                        }
                        r ? n.dispatch({
                            type: "SELECT_DATES",
                            selection: r
                        }) : t || n.dispatch({
                            type: "UNSELECT_DATES"
                        }), i ? We() : Fe(), t || (this.dragSelection = r)
                    }, this.handlePointerUp = e => {
                        this.dragSelection && (Cr(this.dragSelection, e, this.component.context), this.dragSelection = null)
                    };
                    let {
                        component: t
                    } = e, {
                        options: n
                    } = t.context, r = this.dragging = new ya(e.el);
                    r.touchScrollAllowed = !1, r.minDistance = n.selectMinDistance || 0, r.autoScroller.isEnabled = n.dragScroll;
                    let i = this.hitDragging = new Da(this.dragging, hi(e));
                    i.emitter.on("pointerdown", this.handlePointerDown), i.emitter.on("dragstart", this.handleDragStart), i.emitter.on("hitupdate", this.handleHitUpdate), i.emitter.on("pointerup", this.handlePointerUp)
                }
                destroy() {
                    this.dragging.destroy()
                }
            }, Ca, class extends ui {
                constructor(e) {
                    super(e), this.draggingSegEl = null, this.draggingSeg = null, this.eventRange = null, this.relevantEvents = null, this.validMutation = null, this.mutatedRelevantEvents = null, this.handlePointerDown = e => {
                        let {
                            component: t
                        } = this, n = Br(this.querySegEl(e)), r = this.eventRange = n.eventRange;
                        this.dragging.minDistance = t.context.options.eventDragMinDistance, this.dragging.setIgnoreMove(!this.component.isValidSegDownEl(e.origEvent.target) || e.isTouch && this.component.props.eventSelection !== r.instance.instanceId)
                    }, this.handleDragStart = e => {
                        let {
                            context: t
                        } = this.component, n = this.eventRange;
                        this.relevantEvents = fn(t.getCurrentData().eventStore, this.eventRange.instance.instanceId);
                        let r = this.querySegEl(e);
                        this.draggingSegEl = r, this.draggingSeg = Br(r), t.calendarApi.unselect(), t.emitter.trigger("eventResizeStart", {
                            el: r,
                            event: new Ir(t, n.def, n.instance),
                            jsEvent: e.origEvent,
                            view: t.viewApi
                        })
                    }, this.handleHitUpdate = (e, t, n) => {
                        let {
                            context: r
                        } = this.component, i = this.relevantEvents, s = this.hitDragging.initialHit, o = this.eventRange.instance, a = null, l = null, c = !1, d = {
                            affectedEvents: i,
                            mutatedEvents: {
                                defs: {},
                                instances: {}
                            },
                            isEvent: !0
                        };
                        if (e) {
                            e.componentId === s.componentId && this.isHitComboAllowed && !this.isHitComboAllowed(s, e) || (a = function(e, t, n, r) {
                                let i = e.context.dateEnv,
                                    s = e.dateSpan.range.start,
                                    o = t.dateSpan.range.start,
                                    a = On(s, o, i, e.largeUnit);
                                if (n) {
                                    if (i.add(r.start, a) < r.end) return {
                                        startDelta: a
                                    }
                                } else if (i.add(r.end, a) > r.start) return {
                                    endDelta: a
                                };
                                return null
                            }(s, e, n.subjectEl.classList.contains("fc-event-resizer-start"), o.range))
                        }
                        a && (l = Rr(i, r.getCurrentData().eventUiBases, a, r), d.mutatedEvents = l, zi(d, e.dateProfile, r) || (c = !0, a = null, l = null, d.mutatedEvents = null)), l ? r.dispatch({
                            type: "SET_EVENT_RESIZE",
                            state: d
                        }) : r.dispatch({
                            type: "UNSET_EVENT_RESIZE"
                        }), c ? We() : Fe(), t || (a && Sa(s, e) && (a = null), this.validMutation = a, this.mutatedRelevantEvents = l)
                    }, this.handleDragEnd = e => {
                        let {
                            context: t
                        } = this.component, n = this.eventRange.def, r = this.eventRange.instance, i = new Ir(t, n, r), s = this.relevantEvents, o = this.mutatedRelevantEvents;
                        if (t.emitter.trigger("eventResizeStop", {
                                el: this.draggingSegEl,
                                event: i,
                                jsEvent: e.origEvent,
                                view: t.viewApi
                            }), this.validMutation) {
                            let a = new Ir(t, o.defs[n.defId], r ? o.instances[r.instanceId] : null);
                            t.dispatch({
                                type: "MERGE_EVENTS",
                                eventStore: o
                            });
                            let l = {
                                oldEvent: i,
                                event: a,
                                relatedEvents: Nr(o, t, r),
                                revert() {
                                    t.dispatch({
                                        type: "MERGE_EVENTS",
                                        eventStore: s
                                    })
                                }
                            };
                            t.emitter.trigger("eventResize", Object.assign(Object.assign({}, l), {
                                el: this.draggingSegEl,
                                startDelta: this.validMutation.startDelta || Je(0),
                                endDelta: this.validMutation.endDelta || Je(0),
                                jsEvent: e.origEvent,
                                view: t.viewApi
                            })), t.emitter.trigger("eventChange", l)
                        } else t.emitter.trigger("_noEventResize");
                        this.draggingSeg = null, this.relevantEvents = null, this.validMutation = null
                    };
                    let {
                        component: t
                    } = e, n = this.dragging = new ya(e.el);
                    n.pointer.selector = ".fc-event-resizer", n.touchScrollAllowed = !1, n.autoScroller.isEnabled = t.context.options.dragScroll;
                    let r = this.hitDragging = new Da(this.dragging, hi(e));
                    r.emitter.on("pointerdown", this.handlePointerDown), r.emitter.on("dragstart", this.handleDragStart), r.emitter.on("hitupdate", this.handleHitUpdate), r.emitter.on("dragend", this.handleDragEnd)
                }
                destroy() {
                    this.dragging.destroy()
                }
                querySegEl(e) {
                    return xe(e.subjectEl, ".fc-event")
                }
            }],
            calendarInteractions: [class {
                constructor(e) {
                    this.context = e, this.isRecentPointerDateSelect = !1, this.matchesCancel = !1, this.matchesEvent = !1, this.onSelect = e => {
                        e.jsEvent && (this.isRecentPointerDateSelect = !0)
                    }, this.onDocumentPointerDown = e => {
                        let t = this.context.options.unselectCancel,
                            n = Me(e.origEvent);
                        this.matchesCancel = !!xe(n, t), this.matchesEvent = !!xe(n, Ca.SELECTOR)
                    }, this.onDocumentPointerUp = e => {
                        let {
                            context: t
                        } = this, {
                            documentPointer: n
                        } = this, r = t.getCurrentData();
                        if (!n.wasTouchScroll) {
                            if (r.dateSelection && !this.isRecentPointerDateSelect) {
                                let n = t.options.unselectAuto;
                                !n || n && this.matchesCancel || t.calendarApi.unselect(e)
                            }
                            r.eventSelection && !this.matchesEvent && t.dispatch({
                                type: "UNSELECT_EVENT"
                            })
                        }
                        this.isRecentPointerDateSelect = !1
                    };
                    let t = this.documentPointer = new ua(document);
                    t.shouldIgnoreMove = !0, t.shouldWatchScroll = !1, t.emitter.on("pointerdown", this.onDocumentPointerDown), t.emitter.on("pointerup", this.onDocumentPointerUp), e.emitter.on("select", this.onSelect)
                }
                destroy() {
                    this.context.emitter.off("select", this.onSelect), this.documentPointer.destroy()
                }
            }],
            elementDraggingImpl: ya,
            optionRefiners: xa,
            listenerRefiners: _a
        });
        class Ta extends Er {
            constructor() {
                super(...arguments), this.state = {
                    textId: Ne()
                }
            }
            render() {
                let {
                    theme: e,
                    dateEnv: t,
                    options: n,
                    viewApi: r
                } = this.context, {
                    cellId: i,
                    dayDate: s,
                    todayRange: o
                } = this.props, {
                    textId: a
                } = this.state, l = Yn(s, o), c = n.listDayFormat ? t.format(s, n.listDayFormat) : "", d = n.listDaySideFormat ? t.format(s, n.listDaySideFormat) : "", u = Object.assign({
                    date: t.toDate(s),
                    view: r,
                    textId: a,
                    text: c,
                    sideText: d,
                    navLinkAttrs: $n(this.context, s),
                    sideNavLinkAttrs: $n(this.context, s, "day", !1)
                }, l);
                return g(Si, {
                    elTag: "tr",
                    elClasses: ["fc-list-day", ...qn(l, e)],
                    elAttrs: {
                        "data-date": It(s)
                    },
                    renderProps: u,
                    generatorName: "dayHeaderContent",
                    generator: n.dayHeaderContent || ka,
                    classNameGenerator: n.dayHeaderClassNames,
                    didMount: n.dayHeaderDidMount,
                    willUnmount: n.dayHeaderWillUnmount
                }, (t => g("th", {
                    scope: "colgroup",
                    colSpan: 3,
                    id: i,
                    "aria-labelledby": a
                }, g(t, {
                    elTag: "div",
                    elClasses: ["fc-list-day-cushion", e.getClass("tableCellShaded")]
                }))))
            }
        }

        function ka(e) {
            return g(m, null, e.text && g("a", Object.assign({
                id: e.textId,
                className: "fc-list-day-text"
            }, e.navLinkAttrs), e.text), e.sideText && g("a", Object.assign({
                "aria-hidden": !0,
                className: "fc-list-day-side-text"
            }, e.sideNavLinkAttrs), e.sideText))
        }
        const Ma = Xt({
            hour: "numeric",
            minute: "2-digit",
            meridiem: "short"
        });
        class Ia extends Er {
            render() {
                let {
                    props: e,
                    context: t
                } = this, {
                    options: n
                } = t, {
                    seg: r,
                    timeHeaderId: i,
                    eventHeaderId: s,
                    dateHeaderId: o
                } = e, a = n.eventTimeFormat || Ma;
                return g(as, Object.assign({}, e, {
                    elTag: "tr",
                    elClasses: ["fc-list-event", r.eventRange.def.url && "fc-event-forced-url"],
                    defaultGenerator: () => function(e, t) {
                        let n = Zr(e, t);
                        return g("a", Object.assign({}, n), e.eventRange.def.title)
                    }(r, t),
                    seg: r,
                    timeText: "",
                    disableDragging: !0,
                    disableResizing: !0
                }), ((e, n) => g(m, null, function(e, t, n, r, i) {
                    let {
                        options: s
                    } = n;
                    if (!1 !== s.displayEventTime) {
                        let o, a = e.eventRange.def,
                            l = e.eventRange.instance,
                            c = !1;
                        if (a.allDay ? c = !0 : ! function(e) {
                                let t = In(e);
                                return Et(t.start, t.end) > 1
                            }(e.eventRange.range) ? o = Gr(e, t, n) : e.isStart ? o = Gr(e, t, n, null, null, l.range.start, e.end) : e.isEnd ? o = Gr(e, t, n, null, null, e.start, l.range.end) : c = !0, c) {
                            let e = {
                                text: n.options.allDayText,
                                view: n.viewApi
                            };
                            return g(Si, {
                                elTag: "td",
                                elClasses: ["fc-list-event-time"],
                                elAttrs: {
                                    headers: `${r} ${i}`
                                },
                                renderProps: e,
                                generatorName: "allDayContent",
                                generator: s.allDayContent || Oa,
                                classNameGenerator: s.allDayClassNames,
                                didMount: s.allDayDidMount,
                                willUnmount: s.allDayWillUnmount
                            })
                        }
                        return g("td", {
                            className: "fc-list-event-time"
                        }, o)
                    }
                    return null
                }(r, a, t, i, o), g("td", {
                    "aria-hidden": !0,
                    className: "fc-list-event-graphic"
                }, g("span", {
                    className: "fc-list-event-dot",
                    style: {
                        borderColor: n.borderColor || n.backgroundColor
                    }
                })), g(e, {
                    elTag: "td",
                    elClasses: ["fc-list-event-title"],
                    elAttrs: {
                        headers: `${s} ${o}`
                    }
                }))))
            }
        }

        function Oa(e) {
            return e.text
        }

        function Na(e) {
            return e.text
        }

        function Pa(e) {
            let t = Dt(e.renderRange.start),
                n = e.renderRange.end,
                r = [],
                i = [];
            for (; t < n;) r.push(t), i.push({
                start: t,
                end: bt(t, 1)
            }), t = bt(t, 1);
            return {
                dayDates: r,
                dayRanges: i
            }
        }
        const Ha = {
            listDayFormat: Ba,
            listDaySideFormat: Ba,
            noEventsClassNames: an,
            noEventsContent: an,
            noEventsDidMount: an,
            noEventsWillUnmount: an
        };

        function Ba(e) {
            return !1 === e ? null : Xt(e)
        }
        ks(':root{--fc-list-event-dot-width:10px;--fc-list-event-hover-bg-color:#f5f5f5}.fc-theme-standard .fc-list{border:1px solid var(--fc-border-color)}.fc .fc-list-empty{align-items:center;background-color:var(--fc-neutral-bg-color);display:flex;height:100%;justify-content:center}.fc .fc-list-empty-cushion{margin:5em 0}.fc .fc-list-table{border-style:hidden;width:100%}.fc .fc-list-table tr>*{border-left:0;border-right:0}.fc .fc-list-sticky .fc-list-day>*{background:var(--fc-page-bg-color);position:sticky;top:0}.fc .fc-list-table thead{left:-10000px;position:absolute}.fc .fc-list-table tbody>tr:first-child th{border-top:0}.fc .fc-list-table th{padding:0}.fc .fc-list-day-cushion,.fc .fc-list-table td{padding:8px 14px}.fc .fc-list-day-cushion:after{clear:both;content:"";display:table}.fc-theme-standard .fc-list-day-cushion{background-color:var(--fc-neutral-bg-color)}.fc-direction-ltr .fc-list-day-text,.fc-direction-rtl .fc-list-day-side-text{float:left}.fc-direction-ltr .fc-list-day-side-text,.fc-direction-rtl .fc-list-day-text{float:right}.fc-direction-ltr .fc-list-table .fc-list-event-graphic{padding-right:0}.fc-direction-rtl .fc-list-table .fc-list-event-graphic{padding-left:0}.fc .fc-list-event.fc-event-forced-url{cursor:pointer}.fc .fc-list-event:hover td{background-color:var(--fc-list-event-hover-bg-color)}.fc .fc-list-event-graphic,.fc .fc-list-event-time{white-space:nowrap;width:1px}.fc .fc-list-event-dot{border:calc(var(--fc-list-event-dot-width)/2) solid var(--fc-event-border-color);border-radius:calc(var(--fc-list-event-dot-width)/2);box-sizing:content-box;display:inline-block;height:0;width:0}.fc .fc-list-event-title a{color:inherit;text-decoration:none}.fc .fc-list-event.fc-event-forced-url:hover a{text-decoration:underline}');
        var ja = Ls({
            name: "@fullcalendar/list",
            optionRefiners: Ha,
            views: {
                list: {
                    component: class extends Dr {
                        constructor() {
                            super(...arguments), this.computeDateVars = Pt(Pa), this.eventStoreToSegs = Pt(this._eventStoreToSegs), this.state = {
                                timeHeaderId: Ne(),
                                eventHeaderId: Ne(),
                                dateHeaderIdRoot: Ne()
                            }, this.setRootEl = e => {
                                e ? this.context.registerInteractiveComponent(this, {
                                    el: e
                                }) : this.context.unregisterInteractiveComponent(this)
                            }
                        }
                        render() {
                            let {
                                props: e,
                                context: t
                            } = this, {
                                dayDates: n,
                                dayRanges: r
                            } = this.computeDateVars(e.dateProfile), i = this.eventStoreToSegs(e.eventStore, e.eventUiBases, r);
                            return g(Rs, {
                                elRef: this.setRootEl,
                                elClasses: ["fc-list", t.theme.getClass("table"), !1 !== t.options.stickyHeaderDates ? "fc-list-sticky" : ""],
                                viewSpec: t.viewSpec
                            }, g(Zi, {
                                liquid: !e.isHeightAuto,
                                overflowX: e.isHeightAuto ? "visible" : "hidden",
                                overflowY: e.isHeightAuto ? "visible" : "auto"
                            }, i.length > 0 ? this.renderSegList(i, n) : this.renderEmptyMessage()))
                        }
                        renderEmptyMessage() {
                            let {
                                options: e,
                                viewApi: t
                            } = this.context, n = {
                                text: e.noEventsText,
                                view: t
                            };
                            return g(Si, {
                                elTag: "div",
                                elClasses: ["fc-list-empty"],
                                renderProps: n,
                                generatorName: "noEventsContent",
                                generator: e.noEventsContent || Na,
                                classNameGenerator: e.noEventsClassNames,
                                didMount: e.noEventsDidMount,
                                willUnmount: e.noEventsWillUnmount
                            }, (e => g(e, {
                                elTag: "div",
                                elClasses: ["fc-list-empty-cushion"]
                            })))
                        }
                        renderSegList(e, t) {
                            let {
                                theme: n,
                                options: r
                            } = this.context, {
                                timeHeaderId: i,
                                eventHeaderId: s,
                                dateHeaderIdRoot: o
                            } = this.state, a = function(e) {
                                let t, n, r = [];
                                for (t = 0; t < e.length; t += 1) n = e[t], (r[n.dayIndex] || (r[n.dayIndex] = [])).push(n);
                                return r
                            }(e);
                            return g(Ri, {
                                unit: "day"
                            }, ((e, l) => {
                                let c = [];
                                for (let n = 0; n < a.length; n += 1) {
                                    let d = a[n];
                                    if (d) {
                                        let a = It(t[n]),
                                            u = o + "-" + a;
                                        c.push(g(Ta, {
                                            key: a,
                                            cellId: u,
                                            dayDate: t[n],
                                            todayRange: l
                                        })), d = Ur(d, r.eventOrder);
                                        for (let t of d) c.push(g(Ia, Object.assign({
                                            key: a + ":" + t.eventRange.instance.instanceId,
                                            seg: t,
                                            isDragging: !1,
                                            isResizing: !1,
                                            isDateSelecting: !1,
                                            isSelected: !1,
                                            timeHeaderId: i,
                                            eventHeaderId: s,
                                            dateHeaderId: u
                                        }, Qr(t, l, e))))
                                    }
                                }
                                return g("table", {
                                    className: "fc-list-table " + n.getClass("table")
                                }, g("thead", null, g("tr", null, g("th", {
                                    scope: "col",
                                    id: i
                                }, r.timeHint), g("th", {
                                    scope: "col",
                                    "aria-hidden": !0
                                }), g("th", {
                                    scope: "col",
                                    id: s
                                }, r.eventHint))), g("tbody", null, c))
                            }))
                        }
                        _eventStoreToSegs(e, t, n) {
                            return this.eventRangesToSegs(Pr(e, t, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, n)
                        }
                        eventRangesToSegs(e, t) {
                            let n = [];
                            for (let r of e) n.push(...this.eventRangeToSegs(r, t));
                            return n
                        }
                        eventRangeToSegs(e, t) {
                            let n, r, i, {
                                    dateEnv: s
                                } = this.context,
                                {
                                    nextDayThreshold: o
                                } = this.context.options,
                                a = e.range,
                                l = e.def.allDay,
                                c = [];
                            for (n = 0; n < t.length; n += 1)
                                if (r = Fn(a, t[n]), r && (i = {
                                        component: this,
                                        eventRange: e,
                                        start: r.start,
                                        end: r.end,
                                        isStart: e.isStart && r.start.valueOf() === a.start.valueOf(),
                                        isEnd: e.isEnd && r.end.valueOf() === a.end.valueOf(),
                                        dayIndex: n
                                    }, c.push(i), !i.isEnd && !l && n + 1 < t.length && a.end < s.add(t[n + 1].start, o))) {
                                    i.end = a.end, i.isEnd = !0;
                                    break
                                } return c
                        }
                    },
                    buttonTextKey: "list",
                    listDayFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                listDay: {
                    type: "list",
                    duration: {
                        days: 1
                    },
                    listDayFormat: {
                        weekday: "long"
                    }
                },
                listWeek: {
                    type: "list",
                    duration: {
                        weeks: 1
                    },
                    listDayFormat: {
                        weekday: "long"
                    },
                    listDaySideFormat: {
                        month: "long",
                        day: "numeric",
                        year: "numeric"
                    }
                },
                listMonth: {
                    type: "list",
                    duration: {
                        month: 1
                    },
                    listDaySideFormat: {
                        weekday: "long"
                    }
                },
                listYear: {
                    type: "list",
                    duration: {
                        year: 1
                    },
                    listDaySideFormat: {
                        weekday: "long"
                    }
                }
            }
        });
        class za extends zn {
            getKeyInfo() {
                return {
                    allDay: {},
                    timed: {}
                }
            }
            getKeysForDateSpan(e) {
                return e.allDay ? ["allDay"] : ["timed"]
            }
            getKeysForEventDef(e) {
                return e.allDay ? "background" === (t = e).ui.display || "inverse-background" === t.ui.display ? ["timed", "allDay"] : ["allDay"] : ["timed"];
                var t
            }
        }
        const Ua = Xt({
            hour: "numeric",
            minute: "2-digit",
            omitZeroMinute: !0,
            meridiem: "short"
        });

        function La(e) {
            let t = ["fc-timegrid-slot", "fc-timegrid-slot-label", e.isLabeled ? "fc-scrollgrid-shrink" : "fc-timegrid-slot-minor"];
            return g(vr.Consumer, null, (n => {
                if (!e.isLabeled) return g("td", {
                    className: t.join(" "),
                    "data-time": e.isoTimeStr
                });
                let {
                    dateEnv: r,
                    options: i,
                    viewApi: s
                } = n, o = null == i.slotLabelFormat ? Ua : Array.isArray(i.slotLabelFormat) ? Xt(i.slotLabelFormat[0]) : Xt(i.slotLabelFormat), a = {
                    level: 0,
                    time: e.time,
                    date: r.toDate(e.date),
                    view: s,
                    text: r.format(e.date, o)
                };
                return g(Si, {
                    elTag: "td",
                    elClasses: t,
                    elAttrs: {
                        "data-time": e.isoTimeStr
                    },
                    renderProps: a,
                    generatorName: "slotLabelContent",
                    generator: i.slotLabelContent || Wa,
                    classNameGenerator: i.slotLabelClassNames,
                    didMount: i.slotLabelDidMount,
                    willUnmount: i.slotLabelWillUnmount
                }, (e => g("div", {
                    className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame"
                }, g(e, {
                    elTag: "div",
                    elClasses: ["fc-timegrid-slot-label-cushion", "fc-scrollgrid-shrink-cushion"]
                }))))
            }))
        }

        function Wa(e) {
            return e.text
        }
        class Fa extends Er {
            render() {
                return this.props.slatMetas.map((e => g("tr", {
                    key: e.key
                }, g(La, Object.assign({}, e)))))
            }
        }
        const Va = Xt({
            week: "short"
        });
        class Ga extends Dr {
            constructor() {
                super(...arguments), this.allDaySplitter = new za, this.headerElRef = {
                    current: null
                }, this.rootElRef = {
                    current: null
                }, this.scrollerElRef = {
                    current: null
                }, this.state = {
                    slatCoords: null
                }, this.handleScrollTopRequest = e => {
                    let t = this.scrollerElRef.current;
                    t && (t.scrollTop = e)
                }, this.renderHeadAxis = (e, t = "") => {
                    let {
                        options: n
                    } = this.context, {
                        dateProfile: r
                    } = this.props, i = r.renderRange, s = 1 === Et(i.start, i.end) ? $n(this.context, i.start, "week") : {};
                    return n.weekNumbers && "day" === e ? g(bs, {
                        elTag: "th",
                        elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
                        elAttrs: {
                            "aria-hidden": !0
                        },
                        date: i.start,
                        defaultFormat: Va
                    }, (e => g("div", {
                        className: ["fc-timegrid-axis-frame", "fc-scrollgrid-shrink-frame", "fc-timegrid-axis-frame-liquid"].join(" "),
                        style: {
                            height: t
                        }
                    }, g(e, {
                        elTag: "a",
                        elClasses: ["fc-timegrid-axis-cushion", "fc-scrollgrid-shrink-cushion", "fc-scrollgrid-sync-inner"],
                        elAttrs: s
                    })))) : g("th", {
                        "aria-hidden": !0,
                        className: "fc-timegrid-axis"
                    }, g("div", {
                        className: "fc-timegrid-axis-frame",
                        style: {
                            height: t
                        }
                    }))
                }, this.renderTableRowAxis = e => {
                    let {
                        options: t,
                        viewApi: n
                    } = this.context, r = {
                        text: t.allDayText,
                        view: n
                    };
                    return g(Si, {
                        elTag: "td",
                        elClasses: ["fc-timegrid-axis", "fc-scrollgrid-shrink"],
                        elAttrs: {
                            "aria-hidden": !0
                        },
                        renderProps: r,
                        generatorName: "allDayContent",
                        generator: t.allDayContent || Qa,
                        classNameGenerator: t.allDayClassNames,
                        didMount: t.allDayDidMount,
                        willUnmount: t.allDayWillUnmount
                    }, (t => g("div", {
                        className: ["fc-timegrid-axis-frame", "fc-scrollgrid-shrink-frame", null == e ? " fc-timegrid-axis-frame-liquid" : ""].join(" "),
                        style: {
                            height: e
                        }
                    }, g(t, {
                        elTag: "span",
                        elClasses: ["fc-timegrid-axis-cushion", "fc-scrollgrid-shrink-cushion", "fc-scrollgrid-sync-inner"]
                    }))))
                }, this.handleSlatCoords = e => {
                    this.setState({
                        slatCoords: e
                    })
                }
            }
            renderSimpleLayout(e, t, n) {
                let {
                    context: r,
                    props: i
                } = this, s = [], o = is(r.options);
                return e && s.push({
                    type: "header",
                    key: "header",
                    isSticky: o,
                    chunk: {
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }
                }), t && (s.push({
                    type: "body",
                    //key: "all-day",
                    chunk: {
                        content: t
                    }
                }), s.push({
                    type: "body",
                    //key: "all-day-divider",
                    outerContent: g("tr", {
                        role: "presentation",
                        className: "fc-scrollgrid-section"
                    }, g("td", {
                        className: "fc-timegrid-divider " + r.theme.getClass("tableCellShaded")
                    }))
                })), s.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    expandRows: Boolean(r.options.expandRows),
                    chunk: {
                        scrollerElRef: this.scrollerElRef,
                        content: n
                    }
                }), g(Rs, {
                    elRef: this.rootElRef,
                    elClasses: ["fc-timegrid"],
                    viewSpec: r.viewSpec
                }, g(os, {
                    liquid: !i.isHeightAuto && !i.forPrint,
                    collapsibleWidth: i.forPrint,
                    cols: [{
                        width: "shrink"
                    }],
                    sections: s
                }))
            }
            renderHScrollLayout(e, t, n, r, i, s, o) {
                let a = this.context.pluginHooks.scrollGridImpl;
                if (!a) throw new Error("No ScrollGrid implementation");
                let {
                    context: l,
                    props: c
                } = this, d = !c.forPrint && is(l.options), u = !c.forPrint && ss(l.options), h = [];
                e && h.push({
                    type: "header",
                    key: "header",
                    isSticky: d,
                    syncRowHeights: !0,
                    chunks: [{
                        key: "axis",
                        rowContent: e => g("tr", {
                            role: "presentation"
                        }, this.renderHeadAxis("day", e.rowSyncHeights[0]))
                    }, {
                        key: "cols",
                        elRef: this.headerElRef,
                        tableClassName: "fc-col-header",
                        rowContent: e
                    }]
                }), t && (h.push({
                    type: "body",
                    //key: "all-day",
                    syncRowHeights: !0,
                    chunks: [{
                        key: "axis",
                        rowContent: e => g("tr", {
                            role: "presentation"
                        }, this.renderTableRowAxis(e.rowSyncHeights[0]))
                    }, {
                        key: "cols",
                        content: t
                    }]
                }), h.push({
                    //key: "all-day-divider",
                    type: "body",
                    outerContent: g("tr", {
                        role: "presentation",
                        className: "fc-scrollgrid-section"
                    }, g("td", {
                        colSpan: 2,
                        className: "fc-timegrid-divider " + l.theme.getClass("tableCellShaded")
                    }))
                }));
                let f = l.options.nowIndicator;
                return h.push({
                    type: "body",
                    key: "body",
                    liquid: !0,
                    expandRows: Boolean(l.options.expandRows),
                    chunks: [{
                        key: "axis",
                        content: e => g("div", {
                            className: "fc-timegrid-axis-chunk"
                        }, g("table", {
                            "aria-hidden": !0,
                            style: {
                                height: e.expandRows ? e.clientHeight : ""
                            }
                        }, e.tableColGroupNode, g("tbody", null, g(Fa, {
                            slatMetas: s
                        }))), g("div", {
                            className: "fc-timegrid-now-indicator-container"
                        }, g(Ri, {
                            unit: f ? "minute" : "day"
                        }, (e => {
                            let t = f && o && o.safeComputeTop(e);
                            return "number" == typeof t ? g(ds, {
                                elClasses: ["fc-timegrid-now-indicator-arrow"],
                                elStyle: {
                                    top: t
                                },
                                isAxis: !0,
                                date: e
                            }) : null
                        }))))
                    }, {
                        key: "cols",
                        scrollerElRef: this.scrollerElRef,
                        content: n
                    }]
                }), u && h.push({
                    key: "footer",
                    type: "footer",
                    isSticky: !0,
                    chunks: [{
                        key: "axis",
                        content: rs
                    }, {
                        key: "cols",
                        content: rs
                    }]
                }), g(Rs, {
                    elRef: this.rootElRef,
                    elClasses: ["fc-timegrid"],
                    viewSpec: l.viewSpec
                }, g(a, {
                    liquid: !c.isHeightAuto && !c.forPrint,
                    collapsibleWidth: !1,
                    colGroups: [{
                        width: "shrink",
                        cols: [{
                            width: "shrink"
                        }]
                    }, {
                        cols: [{
                            span: r,
                            minWidth: i
                        }]
                    }],
                    sections: h
                }))
            }
            getAllDayMaxEventProps() {
                let {
                    dayMaxEvents: e,
                    dayMaxEventRows: t
                } = this.context.options;
                return !0 !== e && !0 !== t || (e = void 0, t = 5), {
                    dayMaxEvents: e,
                    dayMaxEventRows: t
                }
            }
        }

        function Qa(e) {
            return e.text
        }
        class Ya {
            constructor(e, t, n) {
                this.positions = e, this.dateProfile = t, this.slotDuration = n
            }
            safeComputeTop(e) {
                let {
                    dateProfile: t
                } = this;
                if (Qn(t.currentRange, e)) {
                    let n = Dt(e),
                        r = e.valueOf() - n.valueOf();
                    if (r >= nt(t.slotMinTime) && r < nt(t.slotMaxTime)) return this.computeTimeTop(Je(r))
                }
                return null
            }
            computeDateTop(e, t) {
                return t || (t = Dt(e)), this.computeTimeTop(Je(e.valueOf() - t.valueOf()))
            }
            computeTimeTop(e) {
                let t, n, {
                        positions: r,
                        dateProfile: i
                    } = this,
                    s = r.els.length,
                    o = (e.milliseconds - nt(i.slotMinTime)) / nt(this.slotDuration);
                return o = Math.max(0, o), o = Math.min(s, o), t = Math.floor(o), t = Math.min(t, s - 1), n = o - t, r.tops[t] + r.getHeight(t) * n
            }
        }
        class qa extends Er {
            render() {
                let {
                    props: e,
                    context: t
                } = this, {
                    options: n
                } = t, {
                    slatElRefs: r
                } = e;
                return g("tbody", null, e.slatMetas.map(((i, s) => {
                    let o = {
                        time: i.time,
                        date: t.dateEnv.toDate(i.date),
                        view: t.viewApi
                    };
                    return g("tr", {
                        key: i.key,
                        ref: r.createRef(i.key)
                    }, e.axis && g(La, Object.assign({}, i)), g(Si, {
                        elTag: "td",
                        elClasses: ["fc-timegrid-slot", "fc-timegrid-slot-lane", !i.isLabeled && "fc-timegrid-slot-minor"],
                        elAttrs: {
                            "data-time": i.isoTimeStr
                        },
                        renderProps: o,
                        generatorName: "slotLaneContent",
                        generator: n.slotLaneContent,
                        classNameGenerator: n.slotLaneClassNames,
                        didMount: n.slotLaneDidMount,
                        willUnmount: n.slotLaneWillUnmount
                    }))
                })))
            }
        }
        class Za extends Er {
            constructor() {
                super(...arguments), this.rootElRef = {
                    current: null
                }, this.slatElRefs = new Xi
            }
            render() {
                let {
                    props: e,
                    context: t
                } = this;
                return g("div", {
                    ref: this.rootElRef,
                    className: "fc-timegrid-slots"
                }, g("table", {
                    "aria-hidden": !0,
                    className: t.theme.getClass("table"),
                    style: {
                        minWidth: e.tableMinWidth,
                        width: e.clientWidth,
                        height: e.minHeight
                    }
                }, e.tableColGroupNode, g(qa, {
                    slatElRefs: this.slatElRefs,
                    axis: e.axis,
                    slatMetas: e.slatMetas
                })))
            }
            componentDidMount() {
                this.updateSizing()
            }
            componentDidUpdate() {
                this.updateSizing()
            }
            componentWillUnmount() {
                this.props.onCoords && this.props.onCoords(null)
            }
            updateSizing() {
                let {
                    context: e,
                    props: t
                } = this;
                if (t.onCoords && null !== t.clientWidth) {
                    this.rootElRef.current.offsetHeight && t.onCoords(new Ya(new ar(this.rootElRef.current, (n = this.slatElRefs.currentMap, t.slatMetas.map((e => n[e.key]))), !1, !0), this.props.dateProfile, e.options.slotDuration))
                }
                var n
            }
        }

        function Xa(e, t) {
            let n, r = [];
            for (n = 0; n < t; n += 1) r.push([]);
            if (e)
                for (n = 0; n < e.length; n += 1) r[e[n].col].push(e[n]);
            return r
        }

        function $a(e, t) {
            let n = [];
            if (e) {
                for (let r = 0; r < t; r += 1) n[r] = {
                    affectedInstances: e.affectedInstances,
                    isEvent: e.isEvent,
                    segs: []
                };
                for (let t of e.segs) n[t.col].segs.push(t)
            } else
                for (let e = 0; e < t; e += 1) n[e] = null;
            return n
        }
        class Ja extends Er {
            render() {
                let {
                    props: e
                } = this;
                return g(Ds, {
                    elClasses: ["fc-timegrid-more-link"],
                    elStyle: {
                        top: e.top,
                        bottom: e.bottom
                    },
                    allDayDate: null,
                    moreCnt: e.hiddenSegs.length,
                    allSegs: e.hiddenSegs,
                    hiddenSegs: e.hiddenSegs,
                    extraDateSpan: e.extraDateSpan,
                    dateProfile: e.dateProfile,
                    todayRange: e.todayRange,
                    popoverContent: () => cl(e.hiddenSegs, e),
                    defaultGenerator: Ka
                }, (e => g(e, {
                    elTag: "div",
                    elClasses: ["fc-timegrid-more-link-inner", "fc-sticky"]
                })))
            }
        }

        function Ka(e) {
            return e.shortText
        }

        function el(e, t, n) {
            let r = new si;
            null != t && (r.strictOrder = t), null != n && (r.maxStackCnt = n);
            let i = function(e) {
                    let t = [];
                    for (let i of e) {
                        let e = [],
                            s = {
                                span: i.span,
                                entries: [i]
                            };
                        for (let i of t) li(i.span, s.span) ? s = {
                            entries: i.entries.concat(s.entries),
                            span: (n = i.span, r = s.span, {
                                start: Math.min(n.start, r.start),
                                end: Math.max(n.end, r.end)
                            })
                        } : e.push(i);
                        e.push(s), t = e
                    }
                    var n, r;
                    return t
                }(r.addSegs(e)),
                s = function(e) {
                    const {
                        entriesByLevel: t
                    } = e, n = il(((e, t) => e + ":" + t), ((r, i) => {
                        let s = function(e, t, n) {
                                let {
                                    levelCoords: r,
                                    entriesByLevel: i
                                } = e, s = i[t][n], o = r[t] + s.thickness, a = r.length, l = t;
                                for (; l < a && r[l] < o; l += 1);
                                for (; l < a; l += 1) {
                                    let e, t = i[l],
                                        n = di(t, s.span.start, oi),
                                        r = n[0] + n[1],
                                        o = r;
                                    for (;
                                        (e = t[o]) && e.span.start < s.span.end;) o += 1;
                                    if (r < o) return {
                                        level: l,
                                        lateralStart: r,
                                        lateralEnd: o
                                    }
                                }
                                return null
                            }(e, r, i),
                            o = tl(s, n),
                            a = t[r][i];
                        return [Object.assign(Object.assign({}, a), {
                            nextLevelNodes: o[0]
                        }), a.thickness + o[1]]
                    }));
                    return tl(t.length ? {
                        level: 0,
                        lateralStart: 0,
                        lateralEnd: t[0].length
                    } : null, n)[0]
                }(r);
            return s = function(e, t) {
                const n = il(((e, t, n) => ai(e)), ((e, r, i) => {
                    let s, {
                            nextLevelNodes: o,
                            thickness: a
                        } = e,
                        l = a + i,
                        c = a / l,
                        d = [];
                    if (o.length)
                        for (let e of o)
                            if (void 0 === s) {
                                let t = n(e, r, l);
                                s = t[0], d.push(t[1])
                            } else {
                                let t = n(e, s, 0);
                                d.push(t[1])
                            }
                    else s = t;
                    let u = (s - r) * c;
                    return [s - u, Object.assign(Object.assign({}, e), {
                        thickness: u,
                        nextLevelNodes: d
                    })]
                }));
                return e.map((e => n(e, 0, 0)[1]))
            }(s, 1), {
                segRects: function(e) {
                    let t = [];
                    const n = il(((e, t, n) => ai(e)), ((e, n, i) => {
                        let s = Object.assign(Object.assign({}, e), {
                            levelCoord: n,
                            stackDepth: i,
                            stackForward: 0
                        });
                        return t.push(s), s.stackForward = r(e.nextLevelNodes, n + e.thickness, i + 1) + 1
                    }));

                    function r(e, t, r) {
                        let i = 0;
                        for (let s of e) i = Math.max(n(s, t, r), i);
                        return i
                    }
                    return r(e, 0, 0), t
                }(s),
                hiddenGroups: i
            }
        }

        function tl(e, t) {
            if (!e) return [
                [], 0
            ];
            let {
                level: n,
                lateralStart: r,
                lateralEnd: i
            } = e, s = r, o = [];
            for (; s < i;) o.push(t(n, s)), s += 1;
            return o.sort(nl), [o.map(rl), o[0][1]]
        }

        function nl(e, t) {
            return t[1] - e[1]
        }

        function rl(e) {
            return e[0]
        }

        function il(e, t) {
            const n = {};
            return (...r) => {
                let i = e(...r);
                return i in n ? n[i] : n[i] = t(...r)
            }
        }

        function sl(e, t, n = null, r = 0) {
            let i = [];
            if (n)
                for (let s = 0; s < e.length; s += 1) {
                    let o = e[s],
                        a = n.computeDateTop(o.start, t),
                        l = Math.max(a + (r || 0), n.computeDateTop(o.end, t));
                    i.push({
                        start: Math.round(a),
                        end: Math.round(l)
                    })
                }
            return i
        }
        const ol = Xt({
            hour: "numeric",
            minute: "2-digit",
            meridiem: !1
        });
        class al extends Er {
            render() {
                return g(ls, Object.assign({}, this.props, {
                    elClasses: ["fc-timegrid-event", "fc-v-event", this.props.isShort && "fc-timegrid-event-short"],
                    defaultTimeFormat: ol
                }))
            }
        }
        class ll extends Er {
            constructor() {
                super(...arguments), this.sortEventSegs = Pt(Ur)
            }
            render() {
                let {
                    props: e,
                    context: t
                } = this, {
                    options: n
                } = t, r = n.selectMirror, i = e.eventDrag && e.eventDrag.segs || e.eventResize && e.eventResize.segs || r && e.dateSelectionSegs || [], s = e.eventDrag && e.eventDrag.affectedInstances || e.eventResize && e.eventResize.affectedInstances || {}, o = this.sortEventSegs(e.fgEventSegs, n.eventOrder);
                return g(hs, {
                    elTag: "td",
                    elRef: e.elRef,
                    elClasses: ["fc-timegrid-col", ...e.extraClassNames || []],
                    elAttrs: Object.assign({
                        role: "gridcell"
                    }, e.extraDataAttrs),
                    date: e.date,
                    dateProfile: e.dateProfile,
                    todayRange: e.todayRange,
                    extraRenderProps: e.extraRenderProps
                }, (t => g("div", {
                    className: "fc-timegrid-col-frame"
                }, g("div", {
                    className: "fc-timegrid-col-bg"
                }, this.renderFillSegs(e.businessHourSegs, "non-business"), this.renderFillSegs(e.bgEventSegs, "bg-event"), this.renderFillSegs(e.dateSelectionSegs, "highlight")), g("div", {
                    className: "fc-timegrid-col-events"
                }, this.renderFgSegs(o, s, !1, !1, !1)), g("div", {
                    className: "fc-timegrid-col-events"
                }, this.renderFgSegs(i, {}, Boolean(e.eventDrag), Boolean(e.eventResize), Boolean(r))), g("div", {
                    className: "fc-timegrid-now-indicator-container"
                }, this.renderNowIndicator(e.nowIndicatorSegs)), fs(n) && g(t, {
                    elTag: "div",
                    elClasses: ["fc-timegrid-col-misc"]
                }))))
            }
            renderFgSegs(e, t, n, r, i) {
                let {
                    props: s
                } = this;
                return s.forPrint ? cl(e, s) : this.renderPositionedFgSegs(e, t, n, r, i)
            }
            renderPositionedFgSegs(e, t, n, r, i) {
                let {
                    eventMaxStack: s,
                    eventShortHeight: o,
                    eventOrderStrict: a,
                    eventMinHeight: l
                } = this.context.options, {
                    date: c,
                    slatCoords: d,
                    eventSelection: u,
                    todayRange: h,
                    nowDate: f
                } = this.props, p = n || r || i, v = sl(e, c, d, l), {
                    segPlacements: b,
                    hiddenGroups: y
                } = function(e, t, n, r) {
                    let i = [],
                        s = [];
                    for (let n = 0; n < e.length; n += 1) {
                        let r = t[n];
                        r ? i.push({
                            index: n,
                            thickness: 1,
                            span: r
                        }) : s.push(e[n])
                    }
                    let {
                        segRects: o,
                        hiddenGroups: a
                    } = el(i, n, r), l = [];
                    for (let t of o) l.push({
                        seg: e[t.index],
                        rect: t
                    });
                    for (let e of s) l.push({
                        seg: e,
                        rect: null
                    });
                    return {
                        segPlacements: l,
                        hiddenGroups: a
                    }
                }(e, v, a, s);
                return g(m, null, this.renderHiddenGroups(y, e), b.map((e => {
                    let {
                        seg: s,
                        rect: a
                    } = e, l = s.eventRange.instance.instanceId, c = p || Boolean(!t[l] && a), d = dl(a && a.span), m = !p && a ? this.computeSegHStyle(a) : {
                        left: 0,
                        right: 0
                    }, v = Boolean(a) && a.stackForward > 0, b = Boolean(a) && a.span.end - a.span.start < o;
                    return g("div", {
                        className: "fc-timegrid-event-harness" + (v ? " fc-timegrid-event-harness-inset" : ""),
                        key: l,
                        style: Object.assign(Object.assign({
                            visibility: c ? "" : "hidden"
                        }, d), m)
                    }, g(al, Object.assign({
                        seg: s,
                        isDragging: n,
                        isResizing: r,
                        isDateSelecting: i,
                        isSelected: l === u,
                        isShort: b
                    }, Qr(s, h, f))))
                })))
            }
            renderHiddenGroups(e, t) {
                let {
                    extraDateSpan: n,
                    dateProfile: r,
                    todayRange: i,
                    nowDate: s,
                    eventSelection: o,
                    eventDrag: a,
                    eventResize: l
                } = this.props;
                return g(m, null, e.map((e => {
                    let c = dl(e.span),
                        d = (u = e.entries, h = t, u.map((e => h[e.index])));
                    var u, h;
                    return g(Ja, {
                        key: Mt(Cs(d)),
                        hiddenSegs: d,
                        top: c.top,
                        bottom: c.bottom,
                        extraDateSpan: n,
                        dateProfile: r,
                        todayRange: i,
                        nowDate: s,
                        eventSelection: o,
                        eventDrag: a,
                        eventResize: l
                    })
                })))
            }
            renderFillSegs(e, t) {
                let {
                    props: n,
                    context: r
                } = this, i = sl(e, n.date, n.slatCoords, r.options.eventMinHeight).map(((r, i) => {
                    let s = e[i];
                    return g("div", {
                        key: qr(s.eventRange),
                        className: "fc-timegrid-bg-harness",
                        style: dl(r)
                    }, "bg-event" === t ? g(ps, Object.assign({
                        seg: s
                    }, Qr(s, n.todayRange, n.nowDate))) : vs(t))
                }));
                return g(m, null, i)
            }
            renderNowIndicator(e) {
                let {
                    slatCoords: t,
                    date: n
                } = this.props;
                return t ? e.map(((e, r) => g(ds, {
                    key: r,
                    elClasses: ["fc-timegrid-now-indicator-line"],
                    elStyle: {
                        top: t.computeDateTop(e.start, n)
                    },
                    isAxis: !1,
                    date: n
                }))) : null
            }
            computeSegHStyle(e) {
                let t, n, {
                        isRtl: r,
                        options: i
                    } = this.context,
                    s = i.slotEventOverlap,
                    o = e.levelCoord,
                    a = e.levelCoord + e.thickness;
                s && (a = Math.min(1, o + 2 * (a - o))), r ? (t = 1 - a, n = o) : (t = o, n = 1 - a);
                let l = {
                    zIndex: e.stackDepth + 1,
                    left: 100 * t + "%",
                    right: 100 * n + "%"
                };
                return s && !e.stackForward && (l[r ? "marginLeft" : "marginRight"] = 20), l
            }
        }

        function cl(e, {
            todayRange: t,
            nowDate: n,
            eventSelection: r,
            eventDrag: i,
            eventResize: s
        }) {
            let o = (i ? i.affectedInstances : null) || (s ? s.affectedInstances : null) || {};
            return g(m, null, e.map((e => {
                let i = e.eventRange.instance.instanceId;
                return g("div", {
                    key: i,
                    style: {
                        visibility: o[i] ? "hidden" : ""
                    }
                }, g(al, Object.assign({
                    seg: e,
                    isDragging: !1,
                    isResizing: !1,
                    isDateSelecting: !1,
                    isSelected: i === r,
                    isShort: !1
                }, Qr(e, t, n))))
            })))
        }

        function dl(e) {
            return e ? {
                top: e.start,
                bottom: -e.end
            } : {
                top: "",
                bottom: ""
            }
        }
        class ul extends Er {
            constructor() {
                super(...arguments), this.splitFgEventSegs = Pt(Xa), this.splitBgEventSegs = Pt(Xa), this.splitBusinessHourSegs = Pt(Xa), this.splitNowIndicatorSegs = Pt(Xa), this.splitDateSelectionSegs = Pt(Xa), this.splitEventDrag = Pt($a), this.splitEventResize = Pt($a), this.rootElRef = {
                    current: null
                }, this.cellElRefs = new Xi
            }
            render() {
                let {
                    props: e,
                    context: t
                } = this, n = t.options.nowIndicator && e.slatCoords && e.slatCoords.safeComputeTop(e.nowDate), r = e.cells.length, i = this.splitFgEventSegs(e.fgEventSegs, r), s = this.splitBgEventSegs(e.bgEventSegs, r), o = this.splitBusinessHourSegs(e.businessHourSegs, r), a = this.splitNowIndicatorSegs(e.nowIndicatorSegs, r), l = this.splitDateSelectionSegs(e.dateSelectionSegs, r), c = this.splitEventDrag(e.eventDrag, r), d = this.splitEventResize(e.eventResize, r);
                return g("div", {
                    className: "fc-timegrid-cols",
                    ref: this.rootElRef
                }, g("table", {
                    role: "presentation",
                    style: {
                        minWidth: e.tableMinWidth,
                        width: e.clientWidth
                    }
                }, e.tableColGroupNode, g("tbody", {
                    role: "presentation"
                }, g("tr", {
                    role: "row"
                }, e.axis && g("td", {
                    "aria-hidden": !0,
                    className: "fc-timegrid-col fc-timegrid-axis"
                }, g("div", {
                    className: "fc-timegrid-col-frame"
                }, g("div", {
                    className: "fc-timegrid-now-indicator-container"
                }, "number" == typeof n && g(ds, {
                    elClasses: ["fc-timegrid-now-indicator-arrow"],
                    elStyle: {
                        top: n
                    },
                    isAxis: !0,
                    date: e.nowDate
                })))), e.cells.map(((t, n) => g(ll, {
                    key: t.key,
                    elRef: this.cellElRefs.createRef(t.key),
                    dateProfile: e.dateProfile,
                    date: t.date,
                    nowDate: e.nowDate,
                    todayRange: e.todayRange,
                    extraRenderProps: t.extraRenderProps,
                    extraDataAttrs: t.extraDataAttrs,
                    extraClassNames: t.extraClassNames,
                    extraDateSpan: t.extraDateSpan,
                    fgEventSegs: i[n],
                    bgEventSegs: s[n],
                    businessHourSegs: o[n],
                    nowIndicatorSegs: a[n],
                    dateSelectionSegs: l[n],
                    eventDrag: c[n],
                    eventResize: d[n],
                    slatCoords: e.slatCoords,
                    eventSelection: e.eventSelection,
                    forPrint: e.forPrint
                })))))))
            }
            componentDidMount() {
                this.updateCoords()
            }
            componentDidUpdate() {
                this.updateCoords()
            }
            updateCoords() {
                let {
                    props: e
                } = this;
                var t;
                e.onColCoords && null !== e.clientWidth && e.onColCoords(new ar(this.rootElRef.current, (t = this.cellElRefs.currentMap, e.cells.map((e => t[e.key]))), !0, !1))
            }
        }
        class hl extends Dr {
            constructor() {
                super(...arguments), this.processSlotOptions = Pt(fl), this.state = {
                    slatCoords: null
                }, this.handleRootEl = e => {
                    e ? this.context.registerInteractiveComponent(this, {
                        el: e,
                        isHitComboAllowed: this.props.isHitComboAllowed
                    }) : this.context.unregisterInteractiveComponent(this)
                }, this.handleScrollRequest = e => {
                    let {
                        onScrollTopRequest: t
                    } = this.props, {
                        slatCoords: n
                    } = this.state;
                    if (t && n) {
                        if (e.time) {
                            let r = n.computeTimeTop(e.time);
                            r = Math.ceil(r), r && (r += 1), t(r)
                        }
                        return !0
                    }
                    return !1
                }, this.handleColCoords = e => {
                    this.colCoords = e
                }, this.handleSlatCoords = e => {
                    this.setState({
                        slatCoords: e
                    }), this.props.onSlatCoords && this.props.onSlatCoords(e)
                }
            }
            render() {
                let {
                    props: e,
                    state: t
                } = this;
                return g("div", {
                    className: "fc-timegrid-body",
                    ref: this.handleRootEl,
                    style: {
                        width: e.clientWidth,
                        minWidth: e.tableMinWidth
                    }
                }, g(Za, {
                    axis: e.axis,
                    dateProfile: e.dateProfile,
                    slatMetas: e.slatMetas,
                    clientWidth: e.clientWidth,
                    minHeight: e.expandRows ? e.clientHeight : "",
                    tableMinWidth: e.tableMinWidth,
                    tableColGroupNode: e.axis ? e.tableColGroupNode : null,
                    onCoords: this.handleSlatCoords
                }), g(ul, {
                    cells: e.cells,
                    axis: e.axis,
                    dateProfile: e.dateProfile,
                    businessHourSegs: e.businessHourSegs,
                    bgEventSegs: e.bgEventSegs,
                    fgEventSegs: e.fgEventSegs,
                    dateSelectionSegs: e.dateSelectionSegs,
                    eventSelection: e.eventSelection,
                    eventDrag: e.eventDrag,
                    eventResize: e.eventResize,
                    todayRange: e.todayRange,
                    nowDate: e.nowDate,
                    nowIndicatorSegs: e.nowIndicatorSegs,
                    clientWidth: e.clientWidth,
                    tableMinWidth: e.tableMinWidth,
                    tableColGroupNode: e.tableColGroupNode,
                    slatCoords: t.slatCoords,
                    onColCoords: this.handleColCoords,
                    forPrint: e.forPrint
                }))
            }
            componentDidMount() {
                this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest)
            }
            componentDidUpdate(e) {
                this.scrollResponder.update(e.dateProfile !== this.props.dateProfile)
            }
            componentWillUnmount() {
                this.scrollResponder.detach()
            }
            queryHit(e, t) {
                let {
                    dateEnv: n,
                    options: r
                } = this.context, {
                    colCoords: i
                } = this, {
                    dateProfile: s
                } = this.props, {
                    slatCoords: o
                } = this.state, {
                    snapDuration: a,
                    snapsPerSlot: l
                } = this.processSlotOptions(this.props.slotDuration, r.snapDuration), c = i.leftToIndex(e), d = o.positions.topToIndex(t);
                if (null != c && null != d) {
                    let e = this.props.cells[c],
                        r = o.positions.tops[d],
                        u = o.positions.getHeight(d),
                        h = (t - r) / u,
                        f = d * l + Math.floor(h * l),
                        g = this.props.cells[c].date,
                        p = et(s.slotMinTime, function(e, t) {
                            return {
                                years: e.years * t,
                                months: e.months * t,
                                days: e.days * t,
                                milliseconds: e.milliseconds * t
                            }
                        }(a, f)),
                        m = n.add(g, p),
                        v = n.add(m, a);
                    return {
                        dateProfile: s,
                        dateSpan: Object.assign({
                            range: {
                                start: m,
                                end: v
                            },
                            allDay: !1
                        }, e.extraDateSpan),
                        dayEl: i.els[c],
                        rect: {
                            left: i.lefts[c],
                            right: i.rights[c],
                            top: r,
                            bottom: r + u
                        },
                        layer: 0
                    }
                }
                return null
            }
        }

        function fl(e, t) {
            let n = t || e,
                r = rt(e, n);
            return null === r && (n = e, r = 1), {
                snapDuration: n,
                snapsPerSlot: r
            }
        }
        class gl extends Ni {
            sliceRange(e, t) {
                let n = [];
                for (let r = 0; r < t.length; r += 1) {
                    let i = Fn(e, t[r]);
                    i && n.push({
                        start: i.start,
                        end: i.end,
                        isStart: i.start.valueOf() === e.start.valueOf(),
                        isEnd: i.end.valueOf() === e.end.valueOf(),
                        col: r
                    })
                }
                return n
            }
        }
        class pl extends Dr {
            constructor() {
                super(...arguments), this.buildDayRanges = Pt(ml), this.slicer = new gl, this.timeColsRef = {
                    current: null
                }
            }
            render() {
                let {
                    props: e,
                    context: t
                } = this, {
                    dateProfile: n,
                    dayTableModel: r
                } = e, i = t.options.nowIndicator, s = this.buildDayRanges(r, n, t.dateEnv);
                return g(Ri, {
                    unit: i ? "minute" : "day"
                }, ((o, a) => g(hl, Object.assign({
                    ref: this.timeColsRef
                }, this.slicer.sliceProps(e, n, null, t, s), {
                    forPrint: e.forPrint,
                    axis: e.axis,
                    dateProfile: n,
                    slatMetas: e.slatMetas,
                    slotDuration: e.slotDuration,
                    cells: r.cells[0],
                    tableColGroupNode: e.tableColGroupNode,
                    tableMinWidth: e.tableMinWidth,
                    clientWidth: e.clientWidth,
                    clientHeight: e.clientHeight,
                    expandRows: e.expandRows,
                    nowDate: o,
                    nowIndicatorSegs: i && this.slicer.sliceNowDate(o, t, s),
                    todayRange: a,
                    onScrollTopRequest: e.onScrollTopRequest,
                    onSlatCoords: e.onSlatCoords
                }))))
            }
        }

        function ml(e, t, n) {
            let r = [];
            for (let i of e.headerDates) r.push({
                start: n.add(i, t.slotMinTime),
                end: n.add(i, t.slotMaxTime)
            });
            return r
        }
        const vl = [{
            hours: 1
        }, {
            minutes: 30
        }, {
            minutes: 15
        }, {
            seconds: 30
        }, {
            seconds: 15
        }];

        function bl(e, t, n, r, i) {
            let s = new Date(0),
                o = e,
                a = Je(0),
                l = n || function(e) {
                    let t, n, r;
                    for (t = vl.length - 1; t >= 0; t -= 1)
                        if (n = Je(vl[t]), r = rt(n, e), null !== r && r > 1) return n;
                    return e
                }(r),
                c = [];
            for (; nt(o) < nt(t);) {
                let e = i.add(s, o),
                    t = null !== rt(a, l);
                c.push({
                    date: e,
                    time: o,
                    key: e.toISOString(),
                    isoTimeStr: (d = e, Ge(d.getUTCHours(), 2) + ":" + Ge(d.getUTCMinutes(), 2) + ":" + Ge(d.getUTCSeconds(), 2)),
                    isLabeled: t
                }), o = et(o, r), a = et(a, r)
            }
            var d;
            return c
        }

        function yl(e, t) {
            let n = new Ii(e.renderRange, t);
            return new Oi(n, !1)
        }
        const El = {
            allDaySlot: Boolean
        };
        ks('.fc-v-event{background-color:var(--fc-event-bg-color);border:1px solid var(--fc-event-border-color);display:block}.fc-v-event .fc-event-main{color:var(--fc-event-text-color);height:100%}.fc-v-event .fc-event-main-frame{display:flex;flex-direction:column;height:100%}.fc-v-event .fc-event-time{flex-grow:0;flex-shrink:0;max-height:100%;overflow:hidden}.fc-v-event .fc-event-title-container{flex-grow:1;flex-shrink:1;min-height:0}.fc-v-event .fc-event-title{bottom:0;max-height:100%;overflow:hidden;top:0}.fc-v-event:not(.fc-event-start){border-top-left-radius:0;border-top-right-radius:0;border-top-width:0}.fc-v-event:not(.fc-event-end){border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-width:0}.fc-v-event.fc-event-selected:before{left:-10px;right:-10px}.fc-v-event .fc-event-resizer-start{cursor:n-resize}.fc-v-event .fc-event-resizer-end{cursor:s-resize}.fc-v-event:not(.fc-event-selected) .fc-event-resizer{height:var(--fc-event-resizer-thickness);left:0;right:0}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-start{top:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event:not(.fc-event-selected) .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-thickness)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer{left:50%;margin-left:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-start{top:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc-v-event.fc-event-selected .fc-event-resizer-end{bottom:calc(var(--fc-event-resizer-dot-total-width)/-2)}.fc .fc-timegrid .fc-daygrid-body{z-index:2}.fc .fc-timegrid-divider{padding:0 0 2px}.fc .fc-timegrid-body{min-height:100%;position:relative;z-index:1}.fc .fc-timegrid-axis-chunk{position:relative}.fc .fc-timegrid-axis-chunk>table,.fc .fc-timegrid-slots{position:relative;z-index:1}.fc .fc-timegrid-slot{border-bottom:0;height:1.5em}.fc .fc-timegrid-slot:empty:before{content:"\\00a0"}.fc .fc-timegrid-slot-minor{border-top-style:dotted}.fc .fc-timegrid-slot-label-cushion{display:inline-block;white-space:nowrap}.fc .fc-timegrid-slot-label{vertical-align:middle}.fc .fc-timegrid-axis-cushion,.fc .fc-timegrid-slot-label-cushion{padding:0 4px}.fc .fc-timegrid-axis-frame-liquid{height:100%}.fc .fc-timegrid-axis-frame{align-items:center;display:flex;justify-content:flex-end;overflow:hidden}.fc .fc-timegrid-axis-cushion{flex-shrink:0;max-width:60px}.fc-direction-ltr .fc-timegrid-slot-label-frame{text-align:right}.fc-direction-rtl .fc-timegrid-slot-label-frame{text-align:left}.fc-liquid-hack .fc-timegrid-axis-frame-liquid{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col.fc-day-today{background-color:var(--fc-today-bg-color)}.fc .fc-timegrid-col-frame{min-height:100%;position:relative}.fc-media-screen.fc-liquid-hack .fc-timegrid-col-frame{bottom:0;height:auto;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols{bottom:0;left:0;position:absolute;right:0;top:0}.fc-media-screen .fc-timegrid-cols>table{height:100%}.fc-media-screen .fc-timegrid-col-bg,.fc-media-screen .fc-timegrid-col-events,.fc-media-screen .fc-timegrid-now-indicator-container{left:0;position:absolute;right:0;top:0}.fc .fc-timegrid-col-bg{z-index:2}.fc .fc-timegrid-col-bg .fc-non-business{z-index:1}.fc .fc-timegrid-col-bg .fc-bg-event{z-index:2}.fc .fc-timegrid-col-bg .fc-highlight{z-index:3}.fc .fc-timegrid-bg-harness{left:0;position:absolute;right:0}.fc .fc-timegrid-col-events{z-index:3}.fc .fc-timegrid-now-indicator-container{bottom:0;overflow:hidden}.fc-direction-ltr .fc-timegrid-col-events{margin:0 2.5% 0 2px}.fc-direction-rtl .fc-timegrid-col-events{margin:0 2px 0 2.5%}.fc-timegrid-event-harness{position:absolute}.fc-timegrid-event-harness>.fc-timegrid-event{bottom:0;left:0;position:absolute;right:0;top:0}.fc-timegrid-event-harness-inset .fc-timegrid-event,.fc-timegrid-event.fc-event-mirror,.fc-timegrid-more-link{box-shadow:0 0 0 1px var(--fc-page-bg-color)}.fc-timegrid-event,.fc-timegrid-more-link{border-radius:3px;font-size:var(--fc-small-font-size)}.fc-timegrid-event{margin-bottom:1px}.fc-timegrid-event .fc-event-main{padding:1px 1px 0}.fc-timegrid-event .fc-event-time{font-size:var(--fc-small-font-size);margin-bottom:1px;white-space:nowrap}.fc-timegrid-event-short .fc-event-main-frame{flex-direction:row;overflow:hidden}.fc-timegrid-event-short .fc-event-time:after{content:"\\00a0-\\00a0"}.fc-timegrid-event-short .fc-event-title{font-size:var(--fc-small-font-size)}.fc-timegrid-more-link{background:var(--fc-more-link-bg-color);color:var(--fc-more-link-text-color);cursor:pointer;margin-bottom:1px;position:absolute;z-index:9999}.fc-timegrid-more-link-inner{padding:3px 2px;top:0}.fc-direction-ltr .fc-timegrid-more-link{right:0}.fc-direction-rtl .fc-timegrid-more-link{left:0}.fc .fc-timegrid-now-indicator-line{border-color:var(--fc-now-indicator-color);border-style:solid;border-width:1px 0 0;left:0;position:absolute;right:0;z-index:4}.fc .fc-timegrid-now-indicator-arrow{border-color:var(--fc-now-indicator-color);border-style:solid;margin-top:-5px;position:absolute;z-index:4}.fc-direction-ltr .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 0 5px 6px;left:0}.fc-direction-rtl .fc-timegrid-now-indicator-arrow{border-bottom-color:transparent;border-top-color:transparent;border-width:5px 6px 5px 0;right:0}');
        var Al = Ls({
            name: "@fullcalendar/timegrid",
            initialView: "timeGridWeek",
            optionRefiners: El,
            views: {
                timeGrid: {
                    component: class extends Ga {
                        constructor() {
                            super(...arguments), this.buildTimeColsModel = Pt(yl), this.buildSlatMetas = Pt(bl)
                        }
                        render() {
                            let {
                                options: e,
                                dateEnv: t,
                                dateProfileGenerator: n
                            } = this.context, {
                                props: r
                            } = this, {
                                dateProfile: i
                            } = r, s = this.buildTimeColsModel(i, n), o = this.allDaySplitter.splitProps(r), a = this.buildSlatMetas(i.slotMinTime, i.slotMaxTime, e.slotLabelInterval, e.slotDuration, t), {
                                dayMinWidth: l
                            } = e, c = !l, d = l, u = e.dayHeaders && g(ki, {
                                dates: s.headerDates,
                                dateProfile: i,
                                datesRepDistinctDays: !0,
                                renderIntro: c ? this.renderHeadAxis : null
                            }), h = !1 !== e.allDaySlot && (t => g(sa, Object.assign({}, o.allDay, {
                                dateProfile: i,
                                dayTableModel: s,
                                nextDayThreshold: e.nextDayThreshold,
                                tableMinWidth: t.tableMinWidth,
                                colGroupNode: t.tableColGroupNode,
                                renderRowIntro: c ? this.renderTableRowAxis : null,
                                showWeekNumbers: !1,
                                expandRows: !1,
                                headerAlignElRef: this.headerElRef,
                                clientWidth: t.clientWidth,
                                clientHeight: t.clientHeight,
                                forPrint: r.forPrint
                            }, this.getAllDayMaxEventProps()))), f = t => g(pl, Object.assign({}, o.timed, {
                                dayTableModel: s,
                                dateProfile: i,
                                axis: c,
                                slotDuration: e.slotDuration,
                                slatMetas: a,
                                forPrint: r.forPrint,
                                tableColGroupNode: t.tableColGroupNode,
                                tableMinWidth: t.tableMinWidth,
                                clientWidth: t.clientWidth,
                                clientHeight: t.clientHeight,
                                onSlatCoords: this.handleSlatCoords,
                                expandRows: t.expandRows,
                                onScrollTopRequest: this.handleScrollTopRequest
                            }));
                            return d ? this.renderHScrollLayout(u, h, f, s.colCnt, l, a, this.state.slatCoords) : this.renderSimpleLayout(u, h, f)
                        }
                    },
                    usesMinMaxTime: !0,
                    allDaySlot: false,
                    slotDuration: "00:30:00",
                    slotEventOverlap: !0
                },
                timeGridDay: {
                    type: "timeGrid",
                    duration: {
                        days: 1
                    }
                },
                timeGridWeek: {
                    type: "timeGrid",
                    duration: {
                        weeks: 1
                    }
                }
            }
        });
        return t
    }()
}));