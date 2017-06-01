		  		     		  		document.write('<link rel="stylesheet" href="http://114.215.146.210:25002/jsmap/1.0/IMap.css" />');
		  		     		  		document.write('<script type="text/javascript" src="../examples/IMap/main.js" ></script>');
		  		     		  		document.write('<script type="text/javascript" src="http://114.215.146.210:25002/jsmap/1.0/flash/IMapStreetView.js" ></script>');
		  		     		  		document.write('<script type="text/javascript" src="http://114.215.146.210:25001/as/webapi/js/auth?v=1.0&t=jsmapconfig&ak=ec85d3648154874552835438ac6a02b2"><\/script>');
		  		     		  		! function (window, document, undefined) {
		  		     		  			function expose() {
		  		     		  				var t = window.L;
		  		     		  				L.noConflict = function () {
		  		     		  					return window.L = t, this
		  		     		  				}, window.L = L, window.IMAP = IMAP
		  		     		  			}

		  		     		  			function ec(t, i, e) {
		  		     		  				this.z = t, this.x = i, this.y = e
		  		     		  			}

		  		     		  			function equals(t, i, e) {
		  		     		  				this.url = t, this.Je = i, this.XA = e, this.Vg = this.Mu = !1
		  		     		  			}

		  		     		  			function gc(t, i) {
		  		     		  				var e = hc;
		  		     		  				return function () {
		  		     		  					return e.call(this, t, i)
		  		     		  				}
		  		     		  			}

		  		     		  			function hc(t, i) {
		  		     		  				t.hS = +new Date, t.loaded = i, clearTimeout(t.gQ);
		  		     		  				var e = t.IN;
		  		     		  				e.nh.remove(t.url) && e.FH(), e = t.pN ? t.Ua : t.X, t.Ua = null, (i || t.XA) && t.Je(i ? e : null, t), t.KB ? (t.KB.tk(), t.KB = null) : e && (e.onload = null, e.onerror = null, e.onabort = null, t.X = null)
		  		     		  			}
		  		     		  			var L = {
		  		     		  					version: "1.0.0-beta.2"
		  		     		  				},
		  		     		  				IMAP = {
		  		     		  					version: "3.0.3-beta.1"
		  		     		  				};
		  		     		  			"object" == typeof module && "object" == typeof module.exports ? module.exports = L : "function" == typeof define && define.amd && define(L), "undefined" != typeof window && expose(), L.Util = {
		  		     		  					extend: function (t) {
		  		     		  						var i, e, n, s;
		  		     		  						for (e = 1, n = arguments.length; n > e; e++) {
		  		     		  							s = arguments[e];
		  		     		  							for (i in s) t[i] = s[i]
		  		     		  						}
		  		     		  						return t
		  		     		  					},
		  		     		  					create: Object.create || function () {
		  		     		  						function t() {}
		  		     		  						return function (i) {
		  		     		  							return t.prototype = i, new t
		  		     		  						}
		  		     		  					}(),
		  		     		  					bind: function (t, i) {
		  		     		  						var e = Array.prototype.slice;
		  		     		  						if (t.bind) return t.bind.apply(t, e.call(arguments, 1));
		  		     		  						var n = e.call(arguments, 2);
		  		     		  						return function () {
		  		     		  							return t.apply(i, n.length ? n.concat(e.call(arguments)) : arguments)
		  		     		  						}
		  		     		  					},
		  		     		  					stamp: function (t) {
		  		     		  						return t._map_id = t._map_id || ++L.Util.lastId, t._map_id
		  		     		  					},
		  		     		  					lastId: 0,
		  		     		  					throttle: function (t, i, e) {
		  		     		  						var n, s, o, a;
		  		     		  						return a = function () {
		  		     		  							n = !1, s && (o.apply(e, s), s = !1)
		  		     		  						}, o = function () {
		  		     		  							n ? s = arguments : (t.apply(e, arguments), setTimeout(a, i), n = !0)
		  		     		  						}
		  		     		  					},
		  		     		  					wrapNum: function (t, i, e) {
		  		     		  						var n = i[1],
		  		     		  							s = i[0],
		  		     		  							o = n - s;
		  		     		  						return t === n && e ? t : ((t - s) % o + o) % o + s
		  		     		  					},
		  		     		  					falseFn: function () {
		  		     		  						return !1
		  		     		  					},
		  		     		  					formatNum: function (t, i) {
		  		     		  						var e = Math.pow(10, i || 5);
		  		     		  						return Math.round(t * e) / e
		  		     		  					},
		  		     		  					trim: function (t) {
		  		     		  						return t ? t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "") : ""
		  		     		  					},
		  		     		  					splitWords: function (t) {
		  		     		  						return L.Util.trim(t).split(/\s+/)
		  		     		  					},
		  		     		  					setOptions: function (t, i) {
		  		     		  						t.hasOwnProperty("options") || (t.options = t.options ? L.Util.create(t.options) : {});
		  		     		  						for (var e in i) t.options[e] = i[e];
		  		     		  						return t.options
		  		     		  					},
		  		     		  					getParamString: function (t, i, e) {
		  		     		  						var n = [];
		  		     		  						for (var s in t) n.push(encodeURIComponent(e ? s.toUpperCase() : s) + "=" + encodeURIComponent(t[s]));
		  		     		  						return (i && -1 !== i.indexOf("?") ? "&" : "?") + n.join("&")
		  		     		  					},
		  		     		  					template: function (t, i) {
		  		     		  						return t.replace(L.Util.templateRe, function (t, e) {
		  		     		  							var n = i[e];
		  		     		  							if (n === undefined) throw new Error("No value provided for variable " + t);
		  		     		  							return "function" == typeof n && (n = n(i)), n
		  		     		  						})
		  		     		  					},
		  		     		  					templateRe: /\{ *([\w_]+) *\}/g,
		  		     		  					isArray: Array.isArray || function (t) {
		  		     		  						return "[object Array]" === Object.prototype.toString.call(t)
		  		     		  					},
		  		     		  					indexOf: function (t, i) {
		  		     		  						for (var e = 0; e < t.length; e++)
		  		     		  							if (t[e] === i) return e;
		  		     		  						return -1
		  		     		  					},
		  		     		  					getGuid: function (t, i) {
		  		     		  						return (t || "") + Math.round(Math.random() * Math.pow(10, i || 6))
		  		     		  					},
		  		     		  					emptyImageUrl: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
		  		     		  				},
		  		     		  				function () {
		  		     		  					function t(t) {
		  		     		  						return window["webkit" + t] || window["moz" + t] || window["ms" + t]
		  		     		  					}

		  		     		  					function i(t) {
		  		     		  						var i = +new Date,
		  		     		  							n = Math.max(0, 16 - (i - e));
		  		     		  						return e = i + n, window.setTimeout(t, n)
		  		     		  					}
		  		     		  					var e = 0,
		  		     		  						n = window.requestAnimationFrame || t("RequestAnimationFrame") || i,
		  		     		  						s = window.cancelAnimationFrame || t("CancelAnimationFrame") || t("CancelRequestAnimationFrame") || function (t) {
		  		     		  							window.clearTimeout(t)
		  		     		  						};
		  		     		  					L.Util.requestAnimFrame = function (t, e, s) {
		  		     		  						return s && n === i ? void t.call(e) : n.call(window, L.bind(t, e))
		  		     		  					}, L.Util.cancelAnimFrame = function (t) {
		  		     		  						t && s.call(window, t)
		  		     		  					}
		  		     		  				}(), L.extend = L.Util.extend, L.bind = L.Util.bind, L.stamp = L.Util.stamp, L.setOptions = L.Util.setOptions, L.Class = function () {}, L.Class.extend = function (t) {
		  		     		  					var i = function () {
		  		     		  							this.initialize && this.initialize.apply(this, arguments), this.callInitHooks()
		  		     		  						},
		  		     		  						e = i.__super__ = this.prototype,
		  		     		  						n = L.Util.create(e);
		  		     		  					n.constructor = i, i.prototype = n, i.Dd = this.prototype;
		  		     		  					for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && (i[s] = this[s]);
		  		     		  					return t.statics && (L.extend(i, t.statics), delete t.statics), t.includes && (L.Util.extend.apply(null, [n].concat(t.includes)), delete t.includes), n.options && (t.options = L.Util.extend(L.Util.create(n.options), t.options)), L.extend(n, t), n._initHooks = [], n.callInitHooks = function () {
		  		     		  						if (!this._initHooksCalled) {
		  		     		  							e.callInitHooks && e.callInitHooks.call(this), this._initHooksCalled = !0;
		  		     		  							for (var t = 0, i = n._initHooks.length; i > t; t++) n._initHooks[t].call(this)
		  		     		  						}
		  		     		  					}, i
		  		     		  				}, L.Class.include = function (t) {
		  		     		  					L.extend(this.prototype, t)
		  		     		  				}, L.Class.mergeOptions = function (t) {
		  		     		  					L.extend(this.prototype.options, t)
		  		     		  				}, L.Class.addInitHook = function (t) {
		  		     		  					var i = Array.prototype.slice.call(arguments, 1),
		  		     		  						e = "function" == typeof t ? t : function () {
		  		     		  							this[t].apply(this, i)
		  		     		  						};
		  		     		  					this.prototype._initHooks = this.prototype._initHooks || [], this.prototype._initHooks.push(e)
		  		     		  				}, L.Evented = L.Class.extend({
		  		     		  					on: function (t, i, e) {
		  		     		  						if ("object" == typeof t)
		  		     		  							for (var n in t) this._on(n, t[n], i);
		  		     		  						else {
		  		     		  							t = L.Util.splitWords(t);
		  		     		  							for (var s = 0, o = t.length; o > s; s++) this._on(t[s], i, e)
		  		     		  						}
		  		     		  						return this
		  		     		  					},
		  		     		  					off: function (t, i, e) {
		  		     		  						if (t)
		  		     		  							if ("object" == typeof t)
		  		     		  								for (var n in t) this._off(n, t[n], i);
		  		     		  							else {
		  		     		  								t = L.Util.splitWords(t);
		  		     		  								for (var s = 0, o = t.length; o > s; s++) this._off(t[s], i, e)
		  		     		  							}
		  		     		  						else delete this._events;
		  		     		  						return this
		  		     		  					},
		  		     		  					_on: function (t, i, e) {
		  		     		  						var n = this._events = this._events || {},
		  		     		  							s = e && e !== this && L.stamp(e);
		  		     		  						if (s) {
		  		     		  							var o = t + "_idx",
		  		     		  								a = t + "_len",
		  		     		  								r = n[o] = n[o] || {},
		  		     		  								h = L.stamp(i) + "_" + s;
		  		     		  							r[h] || (r[h] = {
		  		     		  								fn: i,
		  		     		  								ctx: e
		  		     		  							}, n[a] = (n[a] || 0) + 1)
		  		     		  						} else n[t] = n[t] || [], n[t].push({
		  		     		  							fn: i
		  		     		  						})
		  		     		  					},
		  		     		  					_off: function (t, i, e) {
		  		     		  						var n = this._events,
		  		     		  							s = t + "_idx",
		  		     		  							o = t + "_len";
		  		     		  						if (n) {
		  		     		  							if (!i) return delete n[t], delete n[s], void delete n[o];
		  		     		  							var a, r, h, l, u, c = e && e !== this && L.stamp(e);
		  		     		  							if (c) u = L.stamp(i) + "_" + c, a = n[s], a && a[u] && (l = a[u], delete a[u], n[o]--);
		  		     		  							else if (a = n[t])
		  		     		  								for (r = 0, h = a.length; h > r; r++)
		  		     		  									if (a[r].fn === i) {
		  		     		  										l = a[r], a.splice(r, 1);
		  		     		  										break
		  		     		  									}
		  		     		  							l && (l.fn = L.Util.falseFn)
		  		     		  						}
		  		     		  					},
		  		     		  					has_events: function (t, i, e) {
		  		     		  						var n = this._events;
		  		     		  						if (i && e) {
		  		     		  							if (n && t in n)
		  		     		  								for (var s = 0; s < n[t].length; s++)
		  		     		  									if (n[t].fn === i && n[t].context === e) return !0;
		  		     		  							return !1
		  		     		  						}
		  		     		  						return n && t in n && n[t] && n[t].length > 0
		  		     		  					},
		  		     		  					emit: function (t, i) {
		  		     		  						if (!this.has_events(t)) return this;
		  		     		  						for (var e = L.extend({
		  		     		  								type: t
		  		     		  							}, i), n = [].concat(this._events[t]), s = 0; s < n.length; s++) n[s].fn && (n[s].fn.call(n[s].context || this, e), n[s].once && this._events[t].splice(s, 1));
		  		     		  						return this
		  		     		  					},
		  		     		  					fire: function (t, i, e) {
		  		     		  						if (!this.listens(t, e)) return this;
		  		     		  						var n = L.Util.extend({}, i, {
		  		     		  								type: t,
		  		     		  								target: this
		  		     		  							}),
		  		     		  							s = this._events;
		  		     		  						if (s) {
		  		     		  							var o, a, r, h, l = s[t + "_idx"];
		  		     		  							if (s[t])
		  		     		  								for (r = s[t].slice(), o = 0, a = r.length; a > o; o++) r[o].fn.call(this, n);
		  		     		  							for (h in l) l[h].fn.call(l[h].ctx, n)
		  		     		  						}
		  		     		  						return e && this._propagateEvent(n), this
		  		     		  					},
		  		     		  					listens: function (t, i) {
		  		     		  						var e = this._events;
		  		     		  						if (e && (e[t] || e[t + "_len"])) return !0;
		  		     		  						if (i)
		  		     		  							for (var n in this._eventParents)
		  		     		  								if (this._eventParents[n].listens(t, i)) return !0;
		  		     		  						return !1
		  		     		  					},
		  		     		  					once: function (t, i, e) {
		  		     		  						if ("object" == typeof t) {
		  		     		  							for (var n in t) this.once(n, t[n], i);
		  		     		  							return this
		  		     		  						}
		  		     		  						var s = L.bind(function () {
		  		     		  							this.off(t, i, e).off(t, s, e)
		  		     		  						}, this);
		  		     		  						return this.on(t, i, e).on(t, s, e)
		  		     		  					},
		  		     		  					addEventParent: function (t) {
		  		     		  						return this._eventParents = this._eventParents || {}, this._eventParents[L.stamp(t)] = t, this
		  		     		  					},
		  		     		  					removeEventParent: function (t) {
		  		     		  						return this._eventParents && delete this._eventParents[L.stamp(t)], this
		  		     		  					},
		  		     		  					_propagateEvent: function (t) {
		  		     		  						for (var i in this._eventParents) this._eventParents[i].fire(t.type, L.extend({
		  		     		  							layer: t.target
		  		     		  						}, t), !0)
		  		     		  					}
		  		     		  				});
		  		     		  			var proto = L.Evented.prototype;
		  		     		  			proto.addEventListener = proto.on, proto.removeEventListener = proto.clearAllEventListeners = proto.off, proto.addOneTimeEventListener = proto.once, proto.fireEvent = proto.fire, proto.hasEventListeners = proto.listens, L.Mixin = {
		  		     		  					Events: proto
		  		     		  				},
		  		     		  				function () {
		  		     		  					var t = navigator.userAgent.toLowerCase(),
		  		     		  						i = document.documentElement,
		  		     		  						e = "ActiveXObject" in window,
		  		     		  						n = -1 !== t.indexOf("webkit"),
		  		     		  						s = -1 !== t.indexOf("phantom"),
		  		     		  						o = -1 !== t.search("android [23]"),
		  		     		  						a = -1 !== t.indexOf("chrome"),
		  		     		  						r = -1 !== t.indexOf("gecko") && !n && !window.opera && !e,
		  		     		  						h = "undefined" != typeof orientation || -1 !== t.indexOf("mobile"),
		  		     		  						l = !window.PointerEvent && window.MSPointerEvent,
		  		     		  						u = window.PointerEvent && navigator.pointerEnabled || l,
		  		     		  						c = e && "transition" in i.style,
		  		     		  						d = "WebKitCSSMatrix" in window && "m11" in new window.WebKitCSSMatrix && !o,
		  		     		  						p = "MozPerspective" in i.style,
		  		     		  						f = "OTransition" in i.style,
		  		     		  						m = -1 !== t.indexOf("android"),
		  		     		  						_ = -1 !== t.indexOf("windows nt"),
		  		     		  						g = -1 !== t.indexOf("macintosh"),
		  		     		  						v = -1 !== t.indexOf("ipad;"),
		  		     		  						y = -1 !== t.indexOf("ipod touch;"),
		  		     		  						b = -1 !== t.indexOf("iphone;"),
		  		     		  						x = b || v || y,
		  		     		  						w = !window.L_NO_TOUCH && !s && (u || "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch);
		  		     		  					L.Browser = {
		  		     		  						ie: e,
		  		     		  						ielt9: e && !document.addEventListener,
		  		     		  						webkit: n,
		  		     		  						gecko: r,
		  		     		  						android: -1 !== t.indexOf("android"),
		  		     		  						android23: o,
		  		     		  						chrome: a,
		  		     		  						safari: !a && -1 !== t.indexOf("safari"),
		  		     		  						ie3d: c,
		  		     		  						webkit3d: d,
		  		     		  						gecko3d: p,
		  		     		  						opera12: f,
		  		     		  						any3d: !window.L_DISABLE_3D && (c || d || p) && !f && !s,
		  		     		  						mobile: h,
		  		     		  						mobileWebkit: h && n,
		  		     		  						mobileWebkit3d: h && d,
		  		     		  						mobileOpera: h && window.opera,
		  		     		  						mobileGecko: h && r,
		  		     		  						touch: !!w,
		  		     		  						msPointer: !!l,
		  		     		  						pointer: !!u,
		  		     		  						retina: (window.devicePixelRatio || window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
		  		     		  						pf: m ? "android" : x ? "ios" : _ ? "windows" : g ? "mac" : "other"
		  		     		  					}
		  		     		  				}(), L.Point = function (t, i, e) {
		  		     		  					this.x = e ? Math.round(t) : t, this.y = e ? Math.round(i) : i
		  		     		  				}, L.Point.prototype = {
		  		     		  					clone: function () {
		  		     		  						return new L.Point(this.x, this.y)
		  		     		  					},
		  		     		  					add: function (t) {
		  		     		  						return this.clone()._add(L.point(t))
		  		     		  					},
		  		     		  					_add: function (t) {
		  		     		  						return this.x += t.x, this.y += t.y, this
		  		     		  					},
		  		     		  					subtract: function (t) {
		  		     		  						return this.clone()._subtract(L.point(t))
		  		     		  					},
		  		     		  					_subtract: function (t) {
		  		     		  						return this.x -= t.x, this.y -= t.y, this
		  		     		  					},
		  		     		  					divideBy: function (t) {
		  		     		  						return this.clone()._divideBy(t)
		  		     		  					},
		  		     		  					_divideBy: function (t) {
		  		     		  						return this.x /= t, this.y /= t, this
		  		     		  					},
		  		     		  					multiplyBy: function (t) {
		  		     		  						return this.clone()._multiplyBy(t)
		  		     		  					},
		  		     		  					_multiplyBy: function (t) {
		  		     		  						return this.x *= t, this.y *= t, this
		  		     		  					},
		  		     		  					scaleBy: function (t, i) {
		  		     		  						var e = "EPSG:3857_360" == i ? -(this.y * t.y) + Math.pow(2, this.z) * t.y - 256 : this.y * t.y;
		  		     		  						return new L.Point(this.x * t.x, e)
		  		     		  					},
		  		     		  					unscaleBy: function (t) {
		  		     		  						return new L.Point(this.x / t.x, this.y / t.y)
		  		     		  					},
		  		     		  					round: function () {
		  		     		  						return this.clone()._round()
		  		     		  					},
		  		     		  					_round: function () {
		  		     		  						return this.x = Math.round(this.x), this.y = Math.round(this.y), this
		  		     		  					},
		  		     		  					floor: function () {
		  		     		  						return this.clone()._floor()
		  		     		  					},
		  		     		  					_floor: function () {
		  		     		  						return this.x = Math.floor(this.x), this.y = Math.floor(this.y), this
		  		     		  					},
		  		     		  					ceil: function () {
		  		     		  						return this.clone()._ceil()
		  		     		  					},
		  		     		  					_ceil: function () {
		  		     		  						return this.x = Math.ceil(this.x), this.y = Math.ceil(this.y), this
		  		     		  					},
		  		     		  					distanceTo: function (t) {
		  		     		  						t = L.point(t);
		  		     		  						var i = t.x - this.x,
		  		     		  							e = t.y - this.y;
		  		     		  						return Math.sqrt(i * i + e * e)
		  		     		  					},
		  		     		  					equals: function (t) {
		  		     		  						return t = L.point(t), t.x === this.x && t.y === this.y
		  		     		  					},
		  		     		  					contains: function (t) {
		  		     		  						return t = L.point(t), Math.abs(t.x) <= Math.abs(this.x) && Math.abs(t.y) <= Math.abs(this.y)
		  		     		  					},
		  		     		  					toString: function () {
		  		     		  						return "Point(" + L.Util.formatNum(this.x) + ", " + L.Util.formatNum(this.y) + ")"
		  		     		  					}
		  		     		  				}, L.point = function (t, i, e) {
		  		     		  					return t instanceof L.Point ? t : L.Util.isArray(t) ? new L.Point(t[0], t[1]) : t === undefined || null === t ? t : new L.Point(t, i, e)
		  		     		  				}, L.Bounds = function (t, i) {
		  		     		  					if (t)
		  		     		  						for (var e = i ? [t, i] : t, n = 0, s = e.length; s > n; n++) this.extend(e[n])
		  		     		  				}, L.Bounds.prototype = {
		  		     		  					extend: function (t) {
		  		     		  						return t = L.point(t), this.min || this.max ? (this.min.x = Math.min(t.x, this.min.x), this.max.x = Math.max(t.x, this.max.x), this.min.y = Math.min(t.y, this.min.y), this.max.y = Math.max(t.y, this.max.y)) : (this.min = t.clone(), this.max = t.clone()), this
		  		     		  					},
		  		     		  					getCenter: function (t) {
		  		     		  						return new L.Point((this.min.x + this.max.x) / 2, (this.min.y + this.max.y) / 2, t)
		  		     		  					},
		  		     		  					getBottomLeft: function () {
		  		     		  						return new L.Point(this.min.x, this.max.y)
		  		     		  					},
		  		     		  					getTopRight: function () {
		  		     		  						return new L.Point(this.max.x, this.min.y)
		  		     		  					},
		  		     		  					getSize: function () {
		  		     		  						return this.max.subtract(this.min)
		  		     		  					},
		  		     		  					contains: function (t) {
		  		     		  						var i, e;
		  		     		  						return t = "number" == typeof t[0] || t instanceof L.Point ? L.point(t) : L.bounds(t), t instanceof L.Bounds ? (i = t.min, e = t.max) : i = e = t, i.x >= this.min.x && e.x <= this.max.x && i.y >= this.min.y && e.y <= this.max.y
		  		     		  					},
		  		     		  					intersects: function (t) {
		  		     		  						t = L.bounds(t);
		  		     		  						var i = this.min,
		  		     		  							e = this.max,
		  		     		  							n = t.min,
		  		     		  							s = t.max,
		  		     		  							o = s.x >= i.x && n.x <= e.x,
		  		     		  							a = s.y >= i.y && n.y <= e.y;
		  		     		  						return o && a
		  		     		  					},
		  		     		  					overlaps: function (t) {
		  		     		  						t = L.bounds(t);
		  		     		  						var i = this.min,
		  		     		  							e = this.max,
		  		     		  							n = t.min,
		  		     		  							s = t.max,
		  		     		  							o = s.x > i.x && n.x < e.x,
		  		     		  							a = s.y > i.y && n.y < e.y;
		  		     		  						return o && a
		  		     		  					},
		  		     		  					isValid: function () {
		  		     		  						return !(!this.min || !this.max)
		  		     		  					}
		  		     		  				}, L.bounds = function (t, i) {
		  		     		  					return !t || t instanceof L.Bounds ? t : new L.Bounds(t, i)
		  		     		  				}, L.Transformation = function (t, i, e, n) {
		  		     		  					this._a = t, this._b = i, this._c = e, this._d = n
		  		     		  				}, L.Transformation.prototype = {
		  		     		  					transform: function (t, i) {
		  		     		  						return this._transform(t.clone(), i)
		  		     		  					},
		  		     		  					_transform: function (t, i) {
		  		     		  						return i = i || 1, t.x = i * (this._a * t.x + this._b), t.y = i * (this._c * t.y + this._d), t
		  		     		  					},
		  		     		  					untransform: function (t, i) {
		  		     		  						return i = i || 1, new L.Point((t.x / i - this._b) / this._a, (t.y / i - this._d) / this._c)
		  		     		  					}
		  		     		  				}, L.DomUtil = {
		  		     		  					get: function (t) {
		  		     		  						return "string" == typeof t ? document.getElementById(t) : t
		  		     		  					},
		  		     		  					getStyle: function (t, i) {
		  		     		  						var e = t.style[i] || t.currentStyle && t.currentStyle[i];
		  		     		  						if ((!e || "auto" === e) && document.defaultView) {
		  		     		  							var n = document.defaultView.getComputedStyle(t, null);
		  		     		  							e = n ? n[i] : null
		  		     		  						}
		  		     		  						return "auto" === e ? null : e
		  		     		  					},
		  		     		  					create: function (t, i, e) {
		  		     		  						var n = document.createElement(t);
		  		     		  						return n.className = i, e && e.appendChild(n), n
		  		     		  					},
		  		     		  					remove: function (t) {
		  		     		  						var i = t.parentNode;
		  		     		  						i && i.removeChild(t)
		  		     		  					},
		  		     		  					empty: function (t) {
		  		     		  						for (; t.firstChild;) t.removeChild(t.firstChild)
		  		     		  					},
		  		     		  					toFront: function (t) {
		  		     		  						t.parentNode.appendChild(t)
		  		     		  					},
		  		     		  					toBack: function (t) {
		  		     		  						var i = t.parentNode;
		  		     		  						i.insertBefore(t, i.firstChild)
		  		     		  					},
		  		     		  					hasClass: function (t, i) {
		  		     		  						if (t.classList !== undefined) return t.classList.contains(i);
		  		     		  						var e = L.DomUtil.getClass(t);
		  		     		  						return e.length > 0 && new RegExp("(^|\\s)" + i + "(\\s|$)").test(e)
		  		     		  					},
		  		     		  					addClass: function (t, i) {
		  		     		  						if (t.classList !== undefined)
		  		     		  							for (var e = L.Util.splitWords(i), n = 0, s = e.length; s > n; n++) t.classList.add(e[n]);
		  		     		  						else if (!L.DomUtil.hasClass(t, i)) {
		  		     		  							var o = L.DomUtil.getClass(t);
		  		     		  							L.DomUtil.setClass(t, (o ? o + " " : "") + i)
		  		     		  						}
		  		     		  					},
		  		     		  					removeClass: function (t, i) {
		  		     		  						i && (t.classList !== undefined ? t.classList.remove(i) : L.DomUtil.setClass(t, L.Util.trim((" " + L.DomUtil.getClass(t) + " ").replace(" " + i + " ", " "))))
		  		     		  					},
		  		     		  					setClass: function (t, i) {
		  		     		  						t.className.baseVal === undefined ? t.className = i : t.className.baseVal = i
		  		     		  					},
		  		     		  					getClass: function (t) {
		  		     		  						return t.className.baseVal === undefined ? t.className : t.className.baseVal
		  		     		  					},
		  		     		  					setOpacity: function (t, i) {
		  		     		  						"opacity" in t.style ? t.style.opacity = i : "filter" in t.style && L.DomUtil._setOpacityIE(t, i)
		  		     		  					},
		  		     		  					_setOpacityIE: function (t, i) {
		  		     		  						var e = !1,
		  		     		  							n = "DXImageTransform.Microsoft.Alpha";
		  		     		  						try {
		  		     		  							e = t.filters.item(n)
		  		     		  						} catch (s) {
		  		     		  							if (1 === i) return
		  		     		  						}
		  		     		  						i = Math.round(100 * i), e ? (e.Enabled = 100 !== i, e.Opacity = i) : t.style.filter += " progid:" + n + "(opacity=" + i + ")"
		  		     		  					},
		  		     		  					testProp: function (t) {
		  		     		  						for (var i = document.documentElement.style, e = 0; e < t.length; e++)
		  		     		  							if (t[e] in i) return t[e];
		  		     		  						return !1
		  		     		  					},
		  		     		  					setTransform: function (t, i, e, n) {
		  		     		  						var s = i || new L.Point(0, 0);
		  		     		  						t.style[L.DomUtil.TRANSFORM] = (L.Browser.ie3d ? "translate(" + s.x + "px," + s.y + "px)" : "translate3d(" + s.x + "px," + s.y + "px,0) rotate(" + (n || 0) + "deg)") + (e ? " scale(" + e + ")" : "")
		  		     		  					},
		  		     		  					setPosition: function (t, i, e) {
		  		     		  						t && (t._imap_pos = i, L.Browser.any3d ? L.DomUtil.setTransform(t, i, null, e) : (t.style.left = i.x + "px", t.style.top = i.y + "px"))
		  		     		  					},
		  		     		  					getPosition: function (t) {
		  		     		  						return t._imap_pos || new L.Point(0, 0)
		  		     		  					}
		  		     		  				},
		  		     		  				function () {
		  		     		  					L.DomUtil.TRANSFORM = L.DomUtil.testProp(["transform", "WebkitTransform", "OTransform", "MozTransform", "msTransform"]);
		  		     		  					var t = L.DomUtil.TRANSITION = L.DomUtil.testProp(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
		  		     		  					if (L.DomUtil.TRANSITION_END = "webkitTransition" === t || "OTransition" === t ? t + "End" : "transitionend", "onselectstart" in document) L.DomUtil.disableTextSelection = function () {
		  		     		  						L.DomEvent.on(window, "selectstart", L.DomEvent.preventDefault)
		  		     		  					}, L.DomUtil.enableTextSelection = function () {
		  		     		  						L.DomEvent.off(window, "selectstart", L.DomEvent.preventDefault)
		  		     		  					};
		  		     		  					else {
		  		     		  						var i = L.DomUtil.testProp(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
		  		     		  						L.DomUtil.disableTextSelection = function () {
		  		     		  							if (i) {
		  		     		  								var t = document.documentElement.style;
		  		     		  								this._userSelect = t[i], t[i] = "none"
		  		     		  							}
		  		     		  						}, L.DomUtil.enableTextSelection = function () {
		  		     		  							i && (document.documentElement.style[i] = this._userSelect, delete this._userSelect)
		  		     		  						}
		  		     		  					}
		  		     		  					L.DomUtil.disableImageDrag = function () {
		  		     		  						L.DomEvent.on(window, "dragstart", L.DomEvent.preventDefault)
		  		     		  					}, L.DomUtil.enableImageDrag = function () {
		  		     		  						L.DomEvent.off(window, "dragstart", L.DomEvent.preventDefault)
		  		     		  					}, L.DomUtil.preventOutline = function (t) {
		  		     		  						for (; - 1 === t.tabIndex;) t = t.parentNode;
		  		     		  						t && t.style && (L.DomUtil.restoreOutline(), this._outlineElement = t, this._outlineStyle = t.style.outline, t.style.outline = "none", L.DomEvent.on(window, "keydown", L.DomUtil.restoreOutline, this))
		  		     		  					}, L.DomUtil.restoreOutline = function () {
		  		     		  						this._outlineElement && (this._outlineElement.style.outline = this._outlineStyle, delete this._outlineElement, delete this._outlineStyle, L.DomEvent.off(window, "keydown", L.DomUtil.restoreOutline, this))
		  		     		  					}
		  		     		  				}(), L.LatLng = function (t, i, e) {
		  		     		  					if (isNaN(t) || isNaN(i)) throw new Error("Invalid LatLng object: (" + t + ", " + i + ")");
		  		     		  					this.lat = +t, this.lng = +i, e !== undefined && (this.alt = +e)
		  		     		  				}, L.LatLng.prototype = {
		  		     		  					equals: function (t, i) {
		  		     		  						if (!t) return !1;
		  		     		  						t = L.latLng(t);
		  		     		  						var e = Math.max(Math.abs(this.lat - t.lat), Math.abs(this.lng - t.lng));
		  		     		  						return (i === undefined ? 1e-9 : i) >= e
		  		     		  					},
		  		     		  					toString: function (t) {
		  		     		  						return "LatLng(" + L.Util.formatNum(this.lat, t) + ", " + L.Util.formatNum(this.lng, t) + ")"
		  		     		  					},
		  		     		  					distanceTo: function (t) {
		  		     		  						return L.CRS.Earth.distance(this, L.latLng(t))
		  		     		  					},
		  		     		  					wrap: function () {
		  		     		  						return L.CRS.Earth.wrapLatLng(this)
		  		     		  					},
		  		     		  					toBounds: function (t) {
		  		     		  						var i = 180 * t / 40075017,
		  		     		  							e = i / Math.cos(Math.PI / 180 * this.lat);
		  		     		  						return L.latLngBounds([this.lat - i, this.lng - e], [this.lat + i, this.lng + e])
		  		     		  					},
		  		     		  					clone: function () {
		  		     		  						return new L.LatLng(this.lat, this.lng, this.alt)
		  		     		  					}
		  		     		  				}, L.latLng = function (t, i, e) {
		  		     		  					return t instanceof L.LatLng ? t : L.Util.isArray(t) && "object" != typeof t[0] ? 3 === t.length ? new L.LatLng(t[0], t[1], t[2]) : 2 === t.length ? new L.LatLng(t[0], t[1]) : null : t === undefined || null === t ? t : "object" == typeof t && "lat" in t ? new L.LatLng(t.lat, "lng" in t ? t.lng : t.lon, t.alt) : i === undefined ? null : new L.LatLng(t, i, e)
		  		     		  				}, L.LatLngBounds = function (t, i) {
		  		     		  					if (t)
		  		     		  						for (var e = i ? [t, i] : t, n = 0, s = e.length; s > n; n++) this.extend(e[n])
		  		     		  				}, L.LatLngBounds.prototype = {
		  		     		  					extend: function (t) {
		  		     		  						var i, e, n = this.southwest,
		  		     		  							s = this.northeast;
		  		     		  						if (t instanceof L.LatLng) i = t, e = t;
		  		     		  						else {
		  		     		  							if (!(t instanceof L.LatLngBounds)) return t ? this.extend(L.latLng(t) || L.latLngBounds(t)) : this;
		  		     		  							if (i = t.southwest, e = t.northeast, !i || !e) return this
		  		     		  						}
		  		     		  						return n || s ? (n.lat = Math.min(i.lat, n.lat), n.lng = Math.min(i.lng, n.lng), s.lat = Math.max(e.lat, s.lat), s.lng = Math.max(e.lng, s.lng)) : (this.southwest = new L.LatLng(i.lat, i.lng), this.northeast = new L.LatLng(e.lat, e.lng)), this
		  		     		  					},
		  		     		  					pad: function (t) {
		  		     		  						var i = this.southwest,
		  		     		  							e = this.northeast,
		  		     		  							n = Math.abs(i.lat - e.lat) * t,
		  		     		  							s = Math.abs(i.lng - e.lng) * t;
		  		     		  						return new L.LatLngBounds(new L.LatLng(i.lat - n, i.lng - s), new L.LatLng(e.lat + n, e.lng + s))
		  		     		  					},
		  		     		  					getCenter: function () {
		  		     		  						return new L.LatLng((this.southwest.lat + this.northeast.lat) / 2, (this.southwest.lng + this.northeast.lng) / 2)
		  		     		  					},
		  		     		  					getSouthWest: function () {
		  		     		  						return this.southwest
		  		     		  					},
		  		     		  					getNorthEast: function () {
		  		     		  						return this.northeast
		  		     		  					},
		  		     		  					getNorthWest: function () {
		  		     		  						return new L.LatLng(this.getNorth(), this.getWest())
		  		     		  					},
		  		     		  					getSouthEast: function () {
		  		     		  						return new L.LatLng(this.getSouth(), this.getEast())
		  		     		  					},
		  		     		  					getWest: function () {
		  		     		  						return this.southwest.lng
		  		     		  					},
		  		     		  					getSouth: function () {
		  		     		  						return this.southwest.lat
		  		     		  					},
		  		     		  					getEast: function () {
		  		     		  						return this.northeast.lng
		  		     		  					},
		  		     		  					getNorth: function () {
		  		     		  						return this.northeast.lat
		  		     		  					},
		  		     		  					contains: function (t) {
		  		     		  						t = "number" == typeof t[0] || t instanceof L.LatLng ? L.latLng(t) : L.latLngBounds(t);
		  		     		  						var i, e, n = this.southwest,
		  		     		  							s = this.northeast;
		  		     		  						return t instanceof L.LatLngBounds ? (i = t.getSouthWest(), e = t.getNorthEast()) : i = e = t, i.lat >= n.lat && e.lat <= s.lat && i.lng >= n.lng && e.lng <= s.lng
		  		     		  					},
		  		     		  					intersects: function (t) {
		  		     		  						t = L.latLngBounds(t);
		  		     		  						var i = this.southwest,
		  		     		  							e = this.northeast,
		  		     		  							n = t.getSouthWest(),
		  		     		  							s = t.getNorthEast(),
		  		     		  							o = s.lat >= i.lat && n.lat <= e.lat,
		  		     		  							a = s.lng >= i.lng && n.lng <= e.lng;
		  		     		  						return o && a
		  		     		  					},
		  		     		  					overlaps: function (t) {
		  		     		  						t = L.latLngBounds(t);
		  		     		  						var i = this.southwest,
		  		     		  							e = this.northeast,
		  		     		  							n = t.getSouthWest(),
		  		     		  							s = t.getNorthEast(),
		  		     		  							o = s.lat > i.lat && n.lat < e.lat,
		  		     		  							a = s.lng > i.lng && n.lng < e.lng;
		  		     		  						return o && a
		  		     		  					},
		  		     		  					toBBoxString: function () {
		  		     		  						return [this.getWest(), this.getSouth(), this.getEast(), this.getNorth()].join(",")
		  		     		  					},
		  		     		  					equals: function (t) {
		  		     		  						return t ? (t = L.latLngBounds(t), this.southwest.equals(t.getSouthWest()) && this.northeast.equals(t.getNorthEast())) : !1
		  		     		  					},
		  		     		  					isValid: function () {
		  		     		  						return !(!this.southwest || !this.northeast)
		  		     		  					}
		  		     		  				}, L.latLngBounds = function (t, i) {
		  		     		  					return !t || t instanceof L.LatLngBounds ? t : new L.LatLngBounds(t, i)
		  		     		  				}, L.Projection = {}, L.Projection.LonLat = {
		  		     		  					project: function (t) {
		  		     		  						return new L.Point(t.lng, t.lat)
		  		     		  					},
		  		     		  					unproject: function (t) {
		  		     		  						return new L.LatLng(t.y, t.x)
		  		     		  					},
		  		     		  					bounds: L.bounds([-180, -90], [180, 90])
		  		     		  				}, L.Projection.SphericalMercator = {
		  		     		  					R: 6378137,
		  		     		  					MAX_LATITUDE: 85.0511287798,
		  		     		  					project: function (t) {
		  		     		  						var i = Math.PI / 180,
		  		     		  							e = this.MAX_LATITUDE,
		  		     		  							n = Math.max(Math.min(e, t.lat), -e),
		  		     		  							s = Math.sin(n * i);
		  		     		  						return new L.Point(this.R * t.lng * i, this.R * Math.log((1 + s) / (1 - s)) / 2)
		  		     		  					},
		  		     		  					unproject: function (t) {
		  		     		  						var i = 180 / Math.PI;
		  		     		  						return new L.LatLng((2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * i, t.x * i / this.R)
		  		     		  					},
		  		     		  					bounds: function () {
		  		     		  						var t = 6378137 * Math.PI;
		  		     		  						return L.bounds([-t, -t], [t, t])
		  		     		  					}()
		  		     		  				}, L.CRS = {
		  		     		  					latLngToPoint: function (t, i) {
		  		     		  						var e = this.projection.project(t, i),
		  		     		  							n = this.scale(i);
		  		     		  						return this.transformation._transform(e, n)
		  		     		  					},
		  		     		  					pointToLatLng: function (t, i) {
		  		     		  						var e = this.scale(i),
		  		     		  							n = this.transformation.untransform(t, e);
		  		     		  						return this.projection.unproject(n)
		  		     		  					},
		  		     		  					project: function (t) {
		  		     		  						return this.projection.project(t)
		  		     		  					},
		  		     		  					unproject: function (t) {
		  		     		  						return this.projection.unproject(t)
		  		     		  					},
		  		     		  					scale: function (t) {
		  		     		  						return 256 * Math.pow(2, t)
		  		     		  					},
		  		     		  					zoom: function (t) {
		  		     		  						return Math.log(t / 256) / Math.LN2
		  		     		  					},
		  		     		  					getProjectedBounds: function (t) {
		  		     		  						if (this.infinite) return null;
		  		     		  						var i = this.projection.bounds,
		  		     		  							e = this.scale(t),
		  		     		  							n = this.transformation.transform(i.min, e),
		  		     		  							s = this.transformation.transform(i.max, e);
		  		     		  						return L.bounds(n, s)
		  		     		  					},
		  		     		  					wrapLatLng: function (t) {
		  		     		  						var i = this.wrapLng ? L.Util.wrapNum(t.lng, this.wrapLng, !0) : t.lng,
		  		     		  							e = this.wrapLat ? L.Util.wrapNum(t.lat, this.wrapLat, !0) : t.lat,
		  		     		  							n = t.alt;
		  		     		  						return L.latLng(e, i, n)
		  		     		  					}
		  		     		  				}, L.CRS.Simple = L.extend({}, L.CRS, {
		  		     		  					projection: L.Projection.LonLat,
		  		     		  					transformation: new L.Transformation(1, 0, -1, 0),
		  		     		  					scale: function (t) {
		  		     		  						return Math.pow(2, t)
		  		     		  					},
		  		     		  					zoom: function (t) {
		  		     		  						return Math.log(t) / Math.LN2
		  		     		  					},
		  		     		  					distance: function (t, i) {
		  		     		  						var e = i.lng - t.lng,
		  		     		  							n = i.lat - t.lat;
		  		     		  						return Math.sqrt(e * e + n * n)
		  		     		  					},
		  		     		  					infinite: !0
		  		     		  				}), L.CRS.Earth = L.extend({}, L.CRS, {
		  		     		  					wrapLng: [-180, 180],
		  		     		  					R: 6378137,
		  		     		  					distance: function (t, i) {
		  		     		  						var e = Math.PI / 180,
		  		     		  							n = t.lat * e,
		  		     		  							s = i.lat * e,
		  		     		  							o = Math.sin(n) * Math.sin(s) + Math.cos(n) * Math.cos(s) * Math.cos((i.lng - t.lng) * e);
		  		     		  						return this.R * Math.acos(Math.min(o, 1))
		  		     		  					}
		  		     		  				}), L.CRS.EPSG3857 = L.extend({}, L.CRS.Earth, {
		  		     		  					code: "EPSG:3857",
		  		     		  					projection: L.Projection.SphericalMercator,
		  		     		  					transformation: function () {
		  		     		  						var t = .5 / (Math.PI * L.Projection.SphericalMercator.R);
		  		     		  						return new L.Transformation(t, .5, -t, .5)
		  		     		  					}()
		  		     		  				}), L.CRS.EPSG900913 = L.extend({}, L.CRS.EPSG3857, {
		  		     		  					code: "EPSG:900913"
		  		     		  				}), L.CRS.EPSG4326 = L.extend({}, L.CRS.Earth, {
		  		     		  					code: "EPSG:4326",
		  		     		  					projection: L.Projection.LonLat,
		  		     		  					transformation: new L.Transformation(1 / 180, 1, -1 / 180, .5)
		  		     		  				}), L.CRS.EPSG3857_360 = L.extend({}, L.CRS.Earth, {
		  		     		  					code: "EPSG:3857_360",
		  		     		  					projection: L.Projection.SphericalMercator,
		  		     		  					transformation: function () {
		  		     		  						var t = .5 / (Math.PI * L.Projection.SphericalMercator.R);
		  		     		  						return new L.Transformation(t, .5, -t, .5)
		  		     		  					}()
		  		     		  				}), L.CRS.EPSG900913 = L.extend({}, L.CRS.EPSG3857, {
		  		     		  					code: "EPSG:3857_360"
		  		     		  				}), L.Map = L.Evented.extend({
		  		     		  					options: {
		  		     		  						crs: L.CRS.EPSG3857,
		  		     		  						fadeAnimation: !0,
		  		     		  						trackResize: !0,
		  		     		  						markerZoomAnimation: !0,
		  		     		  						maxBoundsViscosity: 0,
		  		     		  						transform3DLimit: 8388608
		  		     		  					},
		  		     		  					initialize: function (t, i) {
		  		     		  						i = L.setOptions(this, i), this._initContainer(t), this._initLayout(), this._onResize = L.bind(this._onResize, this), this._initEvents(), i.maxBounds && this.setMaxBounds(i.maxBounds), i.zoom !== undefined && (this._zoom = this._limitZoom(i.zoom)), i.center && i.zoom !== undefined && this.setView(L.latLng(i.center), i.zoom, {
		  		     		  							reset: !0
		  		     		  						}), this._handlers = [], this._layers = {}, this._zoomBoundLayers = {}, this._sizeChanged = !0, this.callInitHooks(), this._addLayers(this.options.layers)
		  		     		  					},
		  		     		  					inertia: function (t) {
		  		     		  						this.options.inertia = t
		  		     		  					},
		  		     		  					setView: function (t, i) {
		  		     		  						return i = i === undefined ? this.getZoom() : i, this._resetView(L.latLng(t), i), this
		  		     		  					},
		  		     		  					setZoom: function (t, i) {
		  		     		  						return this._loaded ? this.setView(this.getCenter(), t, {
		  		     		  							zoom: i
		  		     		  						}) : (this._zoom = t, this)
		  		     		  					},
		  		     		  					zoomIn: function (t, i) {
		  		     		  						return this.setZoom(this._zoom + (t || 1), i)
		  		     		  					},
		  		     		  					zoomOut: function (t, i) {
		  		     		  						return this.setZoom(this._zoom - (t || 1), i)
		  		     		  					},
		  		     		  					setZoomAround: function (t, i, e) {
		  		     		  						var n = this.getZoomScale(i),
		  		     		  							s = this.getSize().divideBy(2),
		  		     		  							o = t instanceof L.Point ? t : this.latLngToContainerPoint(t),
		  		     		  							a = o.subtract(s).multiplyBy(1 - 1 / n),
		  		     		  							r = this.containerPointToLatLng(s.add(a));
		  		     		  						return this.setView(r, i, {
		  		     		  							zoom: e
		  		     		  						})
		  		     		  					},
		  		     		  					_getBoundsCenterZoom: function (t, i) {
		  		     		  						i = i || {}, t = t.getBounds ? t.getBounds() : L.latLngBounds(t);
		  		     		  						var e = L.point(i.paddingTopLeft || i.padding || [0, 0]),
		  		     		  							n = L.point(i.paddingBottomRight || i.padding || [0, 0]),
		  		     		  							s = this.getBoundsZoom(t, !1, e.add(n));
		  		     		  						s = "number" == typeof i.maxZoom ? Math.min(i.maxZoom, s) : s;
		  		     		  						var o = n.subtract(e).divideBy(2),
		  		     		  							a = this.project(t.getSouthWest(), s),
		  		     		  							r = this.project(t.getNorthEast(), s),
		  		     		  							h = this.unproject(a.add(r).divideBy(2).add(o), s);
		  		     		  						return {
		  		     		  							center: h,
		  		     		  							zoom: s
		  		     		  						}
		  		     		  					},
		  		     		  					fitBounds: function (t, i) {
		  		     		  						var e = this._getBoundsCenterZoom(t, i);
		  		     		  						return this.setView(e.center, e.zoom, i)
		  		     		  					},
		  		     		  					fitWorld: function (t) {
		  		     		  						return this.fitBounds([
		  		     		  							[-90, -180],
		  		     		  							[90, 180]
		  		     		  						], t)
		  		     		  					},
		  		     		  					panTo: function (t, i) {
		  		     		  						return this.setView(t, this._zoom, {
		  		     		  							pan: i
		  		     		  						})
		  		     		  					},
		  		     		  					panBy: function (t) {
		  		     		  						return this.fire("movestart"), this._rawPanBy(L.point(t)), this.fire("move"), this.fire("moveend")
		  		     		  					},
		  		     		  					setMaxBounds: function (t) {
		  		     		  						return t = L.latLngBounds(t), this.options.maxBounds = t, t ? (this.options.maxBounds && this.off("moveend", this._panInsideMaxBounds), this._loaded && this._panInsideMaxBounds(), this.on("moveend", this._panInsideMaxBounds)) : this.off("moveend", this._panInsideMaxBounds)
		  		     		  					},
		  		     		  					setZoomLevels: function (t, i) {
		  		     		  						return this.options.maxZoom = i, this.options.minZoom = t, this._loaded && this.getZoom() > this.options.maxZoom ? this.setZoom(i) : this._loaded && this.getZoom() < this.options.minZoom ? this.setZoom(t) : this
		  		     		  					},
		  		     		  					panInsideBounds: function (t, i) {
		  		     		  						this._enforcingBounds = !0;
		  		     		  						var e = this.getCenter(),
		  		     		  							n = this._limitCenter(e, this._zoom, L.latLngBounds(t));
		  		     		  						return e.equals(n) ? this : (this.panTo(n, i), this._enforcingBounds = !1, this)
		  		     		  					},
		  		     		  					invalidateSize: function (t) {
		  		     		  						if (!this._loaded) return this;
		  		     		  						t = L.extend({
		  		     		  							animate: !1,
		  		     		  							pan: !0
		  		     		  						}, t === !0 ? {
		  		     		  							animate: !0
		  		     		  						} : t);
		  		     		  						var i = this.getSize();
		  		     		  						this._sizeChanged = !0, this._lastCenter = null;
		  		     		  						var e = this.getSize(),
		  		     		  							n = i.divideBy(2).round(),
		  		     		  							s = e.divideBy(2).round(),
		  		     		  							o = n.subtract(s);
		  		     		  						return o.x || o.y ? (t.animate && t.pan ? this.panBy(o) : (t.pan && this._rawPanBy(o), this.fire("move"), t.debounceMoveend ? (clearTimeout(this._sizeTimer), this._sizeTimer = setTimeout(L.bind(this.fire, this, "moveend"), 200)) : this.fire("moveend")), this.fire("resize", {
		  		     		  							oldSize: i,
		  		     		  							newSize: e
		  		     		  						})) : this
		  		     		  					},
		  		     		  					stop: function () {
		  		     		  						return L.Util.cancelAnimFrame(this._flyToFrame), this._panAnim && this._panAnim.stop(), this
		  		     		  					},
		  		     		  					addHandler: function (t, i) {
		  		     		  						if (!i) return this;
		  		     		  						var e = this[t] = new i(this);
		  		     		  						return this._handlers.push(e), this.options[t] && e.enable(), this
		  		     		  					},
		  		     		  					remove: function () {
		  		     		  						this._initEvents(!0);
		  		     		  						try {
		  		     		  							delete this._container._imap
		  		     		  						} catch (t) {
		  		     		  							this._container._imap = undefined
		  		     		  						}
		  		     		  						L.DomUtil.remove(this._mapPane), this._clearControlPos && this._clearControlPos(), this._clearHandlers(), this._loaded && this.fire("unload");
		  		     		  						for (var i in this._layers) this._layers[i].remove();
		  		     		  						return L.DomUtil.removeClass(this._container, L.Browser.retina ? "imap-retina" : ""), L.DomUtil.removeClass(this._container, "imap-container"), L.DomUtil.removeClass(this._container, L.Browser.touch ? "imap-touch" : ""), L.DomUtil.removeClass(this._container, L.Browser.ielt9 ? "imap-oldie" : ""), L.DomUtil.removeClass(this._container, L.Browser.safari ? "imap-safari" : ""), L.DomUtil.removeClass(this._container, this._fadeAnimated ? "imap-fade-anim" : ""), this
		  		     		  					},
		  		     		  					createPane: function (t, i) {
		  		     		  						var e = "imap-pane" + (t ? " imap-" + t.replace("Pane", "") + "-pane" : ""),
		  		     		  							n = L.DomUtil.create("div", e, i || this._mapPane);
		  		     		  						return t && (this._panes[t] = n), n
		  		     		  					},
		  		     		  					getCenter: function () {
		  		     		  						return this._checkIfLoaded(), this._lastCenter && !this._moved() ? this._lastCenter : this.layerPointToLatLng(this._getCenterLayerPoint())
		  		     		  					},
		  		     		  					getZoom: function () {
		  		     		  						return this._zoom
		  		     		  					},
		  		     		  					getBounds: function () {
		  		     		  						var t = this.getPixelBounds(),
		  		     		  							i = this.unproject(t.getBottomLeft()),
		  		     		  							e = this.unproject(t.getTopRight());
		  		     		  						return new L.LatLngBounds(i, e)
		  		     		  					},
		  		     		  					getMinZoom: function () {
		  		     		  						return this.options.minZoom === undefined ? this._layersMinZoom || 0 : this.options.minZoom
		  		     		  					},
		  		     		  					getMaxZoom: function () {
		  		     		  						return this.options.maxZoom === undefined ? this._layersMaxZoom === undefined ? 1 / 0 : this._layersMaxZoom : this.options.maxZoom
		  		     		  					},
		  		     		  					getBoundsZoom: function (t, i, e) {
		  		     		  						t = L.latLngBounds(t);
		  		     		  						var n, s = this.getMinZoom() - (i ? 1 : 0),
		  		     		  							o = this.getMaxZoom(),
		  		     		  							a = this.getSize(),
		  		     		  							r = t.getNorthWest(),
		  		     		  							h = t.getSouthEast(),
		  		     		  							l = !0;
		  		     		  						e = L.point(e || [0, 0]);
		  		     		  						do s++, n = this.project(h, s).subtract(this.project(r, s)).add(e).floor(), l = i ? n.x < a.x || n.y < a.y : a.contains(n); while (l && o >= s);
		  		     		  						return l && i ? null : i ? s : s - 1
		  		     		  					},
		  		     		  					getSize: function () {
		  		     		  						return (!this._size || this._sizeChanged) && (this._size = new L.Point(this._container.clientWidth, this._container.clientHeight), this._sizeChanged = !1), this._size.clone()
		  		     		  					},
		  		     		  					getPixelBounds: function (t, i) {
		  		     		  						var e = this._getTopLeftPoint(t, i);
		  		     		  						return new L.Bounds(e, e.add(this.getSize()))
		  		     		  					},
		  		     		  					getPixelOrigin: function () {
		  		     		  						return this._checkIfLoaded(), this._pixelOrigin
		  		     		  					},
		  		     		  					getPixelWorldBounds: function (t) {
		  		     		  						return this.options.crs.getProjectedBounds(t === undefined ? this.getZoom() : t)
		  		     		  					},
		  		     		  					getPane: function (t) {
		  		     		  						return "string" == typeof t ? this._panes[t] : t
		  		     		  					},
		  		     		  					getPanes: function () {
		  		     		  						return this._panes
		  		     		  					},
		  		     		  					getContainer: function () {
		  		     		  						return this._container
		  		     		  					},
		  		     		  					getZoomScale: function (t, i) {
		  		     		  						var e = this.options.crs;
		  		     		  						return i = i === undefined ? this._zoom : i, e.scale(t) / e.scale(i)
		  		     		  					},
		  		     		  					getScaleZoom: function (t, i) {
		  		     		  						var e = this.options.crs;
		  		     		  						return i = i === undefined ? this._zoom : i, e.zoom(t * e.scale(i))
		  		     		  					},
		  		     		  					project: function (t, i) {
		  		     		  						return i = i === undefined ? this._zoom : i, this.options.crs.latLngToPoint(L.latLng(t), i)
		  		     		  					},
		  		     		  					unproject: function (t, i) {
		  		     		  						return i = i === undefined ? this._zoom : i, this.options.crs.pointToLatLng(L.point(t), i)
		  		     		  					},
		  		     		  					layerPointToLatLng: function (t) {
		  		     		  						var i = L.point(t).add(this.getPixelOrigin());
		  		     		  						return this.unproject(i)
		  		     		  					},
		  		     		  					latLngToLayerPoint: function (t) {
		  		     		  						var i = this.project(L.latLng(t))._round();
		  		     		  						return i._subtract(this.getPixelOrigin())
		  		     		  					},
		  		     		  					wrapLatLng: function (t) {
		  		     		  						return this.options.crs.wrapLatLng(L.latLng(t))
		  		     		  					},
		  		     		  					distance: function (t, i) {
		  		     		  						return this.options.crs.distance(L.latLng(t), L.latLng(i))
		  		     		  					},
		  		     		  					containerPointToLayerPoint: function (t) {
		  		     		  						return L.point(t).subtract(this._getMapPanePos())
		  		     		  					},
		  		     		  					layerPointToContainerPoint: function (t) {
		  		     		  						return L.point(t).add(this._getMapPanePos())
		  		     		  					},
		  		     		  					containerPointToLatLng: function (t) {
		  		     		  						var i = this.containerPointToLayerPoint(L.point(t));
		  		     		  						return this.layerPointToLatLng(i)
		  		     		  					},
		  		     		  					latLngToContainerPoint: function (t) {
		  		     		  						return this.layerPointToContainerPoint(this.latLngToLayerPoint(L.latLng(t)))
		  		     		  					},
		  		     		  					mouseEventToContainerPoint: function (t) {
		  		     		  						return L.DomEvent.getMousePosition(t, this._container)
		  		     		  					},
		  		     		  					mouseEventToLayerPoint: function (t) {
		  		     		  						return this.containerPointToLayerPoint(this.mouseEventToContainerPoint(t))
		  		     		  					},
		  		     		  					mouseEventToLatLng: function (t) {
		  		     		  						return this.layerPointToLatLng(this.mouseEventToLayerPoint(t))
		  		     		  					},
		  		     		  					plugin: function (t, i) {
		  		     		  						if ("string" == typeof t && (t = [t]), 0 === t.length) return i(), this;
		  		     		  						this.pUrl = this.options.pUrl || "pluginUrl not config~";
		  		     		  						var e = this.pUrl + t.join(",").replace(/IMAP\./g, "plugins/"),
		  		     		  							n = new L.Http.Request(e);
		  		     		  						return n.on("complete", function () {
		  		     		  							i()
		  		     		  						}), n.on("error", function () {
		  		     		  							throw "Plugin service error!"
		  		     		  						}), this
		  		     		  					},
		  		     		  					_initContainer: function (t) {
		  		     		  						var i = this._container = L.DomUtil.get(t);
		  		     		  						if (!i) throw new Error("Map container not found.");
		  		     		  						if (i._imap) throw new Error("Map container is already initialized.");
		  		     		  						L.DomEvent.addListener(i, "scroll", this._onScroll, this), i._imap = !0
		  		     		  					},
		  		     		  					_initLayout: function () {
		  		     		  						var t = this._container;
		  		     		  						this._fadeAnimated = this.options.fadeAnimation && L.Browser.any3d, L.DomUtil.addClass(t, "imap-container" + (L.Browser.touch ? " imap-touch" : "") + (L.Browser.retina ? " imap-retina" : "") + (L.Browser.ielt9 ? " imap-oldie" : "") + (L.Browser.safari ? " imap-safari" : "") + (this._fadeAnimated ? " imap-fade-anim" : "")), this.options.vector ? t.style.background = "#fcf9f2" : t.style.backgroundImage = "url(" + this.options.backgoundImg + ")";
		  		     		  						var i = L.DomUtil.getStyle(t, "position");
		  		     		  						"absolute" !== i && "relative" !== i && "fixed" !== i && (t.style.position = "relative"), this._initPanes(), this._initControlPos && this._initControlPos()
		  		     		  					},
		  		     		  					_initPanes: function () {
		  		     		  						var t = this._panes = {};
		  		     		  						this._paneRenderers = {}, this._mapPane = this.createPane("mapPane", this._container), L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0)), this.createPane("tilePane"), this.createPane("shadowPane"), this.createPane("overlayPane"), this.createPane("markerPane"), this.createPane("popupPane"), this.options.markerZoomAnimation || (L.DomUtil.addClass(t.markerPane, "imap-zoom-hide"), L.DomUtil.addClass(t.shadowPane, "imap-zoom-hide"))
		  		     		  					},
		  		     		  					_resetView: function (t, i) {
		  		     		  						L.DomUtil.setPosition(this._mapPane, new L.Point(0, 0));
		  		     		  						var e = !this._loaded;
		  		     		  						this._loaded = !0, i = this._limitZoom(i);
		  		     		  						var n = this._zoom !== i;
		  		     		  						this._moveStart(n)._move(t, i)._moveEnd(n), this.fire("viewreset"), e && this.fire("load")
		  		     		  					},
		  		     		  					_moveStart: function (t) {
		  		     		  						return t && this.fire("zoomstart"), this.fire("movestart")
		  		     		  					},
		  		     		  					_move: function (t, i, e) {
		  		     		  						i === undefined && (i = this._zoom);
		  		     		  						var n = this._zoom !== i;
		  		     		  						return this._zoom = i, this._lastCenter = t, this._pixelOrigin = this._getNewPixelOrigin(t), n && this.fire("zoom", e), this.fire("move", e)
		  		     		  					},
		  		     		  					_moveEnd: function (t) {
		  		     		  						return t && this.fire("zoomend"), this.fire("moveend")
		  		     		  					},
		  		     		  					_rawPanBy: function (t) {
		  		     		  						L.DomUtil.setPosition(this._mapPane, this._getMapPanePos().subtract(t))
		  		     		  					},
		  		     		  					_getZoomSpan: function () {
		  		     		  						return this.getMaxZoom() - this.getMinZoom()
		  		     		  					},
		  		     		  					_panInsideMaxBounds: function () {
		  		     		  						this._enforcingBounds || this.panInsideBounds(this.options.maxBounds)
		  		     		  					},
		  		     		  					_checkIfLoaded: function () {
		  		     		  						if (!this._loaded) throw new Error("Set map center and zoom first.")
		  		     		  					},
		  		     		  					_initEvents: function (t) {
		  		     		  						if (L.DomEvent) {
		  		     		  							this._targets = {}, this._targets[L.stamp(this._container)] = this;
		  		     		  							var i = t ? "off" : "on";
		  		     		  							L.DomEvent[i](this._container, "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress", this._handleDOMEvent, this), this.options.trackResize && L.DomEvent[i](window, "resize", this._onResize, this), L.Browser.any3d && this.options.transform3DLimit && this[i]("moveend", this._onMoveEnd)
		  		     		  						}
		  		     		  					},
		  		     		  					_onResize: function () {
		  		     		  						L.Util.cancelAnimFrame(this._resizeRequest), this._resizeRequest = L.Util.requestAnimFrame(function () {
		  		     		  							this.invalidateSize({
		  		     		  								debounceMoveend: !0
		  		     		  							})
		  		     		  						}, this)
		  		     		  					},
		  		     		  					_onScroll: function () {
		  		     		  						this._container.scrollTop = 0, this._container.scrollLeft = 0
		  		     		  					},
		  		     		  					_onMoveEnd: function () {
		  		     		  						var t = this._getMapPanePos();
		  		     		  						Math.max(Math.abs(t.x), Math.abs(t.y)) >= this.options.transform3DLimit && this._resetView(this.getCenter(), this.getZoom())
		  		     		  					},
		  		     		  					_findEventTargets: function (t, i) {
		  		     		  						for (var e, n = [], s = "mouseout" === i || "mouseover" === i, o = t.target || t.srcElement; o;) {
		  		     		  							if (e = this._targets[L.stamp(o)], e && e.listens(i, !0)) {
		  		     		  								if (s && !L.DomEvent._isExternalTarget(o, t)) break;
		  		     		  								if (n.push(e), s) break
		  		     		  							}
		  		     		  							if (o === this._container) break;
		  		     		  							o = o.parentNode
		  		     		  						}
		  		     		  						return n.length || s || !L.DomEvent._isExternalTarget(o, t) || (n = [this]), n
		  		     		  					},
		  		     		  					_handleDOMEvent: function (t) {
		  		     		  						if (this._loaded && !L.DomEvent._skipped(t)) {
		  		     		  							var i = "keypress" === t.type && 13 === t.keyCode ? "click" : t.type;
		  		     		  							if ("click" === t.type) {
		  		     		  								var e = L.Util.extend({}, t);
		  		     		  								e.type = "preclick", this._handleDOMEvent(e)
		  		     		  							}
		  		     		  							"mousedown" === i && L.DomUtil.preventOutline(t.target || t.srcElement), this._fireDOMEvent(t, i)
		  		     		  						}
		  		     		  					},
		  		     		  					_fireDOMEvent: function (t, i, e) {
		  		     		  						if (!t._stopped && (e = (e || []).concat(this._findEventTargets(t, i)), e.length)) {
		  		     		  							var n = e[0];
		  		     		  							if ("contextmenu" === i && L.DomEvent.preventDefault(t), "click" !== t.type && "preclick" !== t.type || t._simulated || !this._draggableMoved(n)) {
		  		     		  								var s = {
		  		     		  									originalEvent: t
		  		     		  								};
		  		     		  								if ("keypress" !== t.type) {
		  		     		  									var o = n instanceof L.Marker;
		  		     		  									s.containerPoint = o ? this.latLngToContainerPoint(n.getLatLng()) : this.mouseEventToContainerPoint(t), s.layerPoint = this.containerPointToLayerPoint(s.containerPoint), s.latlng = o ? n.getLatLng() : this.layerPointToLatLng(s.layerPoint)
		  		     		  								}
		  		     		  								for (var a = 0; a < e.length; a++)
		  		     		  									if (e[a].fire(i, s, !0), s.originalEvent._stopped || e[a].options.nonBubblingEvents && -1 !== L.Util.indexOf(e[a].options.nonBubblingEvents, i)) return
		  		     		  							}
		  		     		  						}
		  		     		  					},
		  		     		  					_draggableMoved: function (t) {
		  		     		  						return t = t.options.draggable ? t : this, t.dragging && t.dragging.moved() || this.boxZoom && this.boxZoom.moved()
		  		     		  					},
		  		     		  					_clearHandlers: function () {
		  		     		  						for (var t = 0, i = this._handlers.length; i > t; t++) this._handlers[t].disable()
		  		     		  					},
		  		     		  					whenReady: function (t, i) {
		  		     		  						return this._loaded ? t.call(i || this, {
		  		     		  							target: this
		  		     		  						}) : this.on("load", t, i), this
		  		     		  					},
		  		     		  					_getMapPanePos: function () {
		  		     		  						return L.DomUtil.getPosition(this._mapPane) || new L.Point(0, 0)
		  		     		  					},
		  		     		  					_moved: function () {
		  		     		  						var t = this._getMapPanePos();
		  		     		  						return t && !t.equals([0, 0])
		  		     		  					},
		  		     		  					_getTopLeftPoint: function (t, i) {
		  		     		  						var e = t && i !== undefined ? this._getNewPixelOrigin(t, i) : this.getPixelOrigin();
		  		     		  						return e.subtract(this._getMapPanePos())
		  		     		  					},
		  		     		  					_getNewPixelOrigin: function (t, i) {
		  		     		  						var e = this.getSize()._divideBy(2);
		  		     		  						return this.project(t, i)._subtract(e)._add(this._getMapPanePos())._round()
		  		     		  					},
		  		     		  					_latLngToNewLayerPoint: function (t, i, e) {
		  		     		  						var n = this._getNewPixelOrigin(e, i);
		  		     		  						return this.project(t, i)._subtract(n)
		  		     		  					},
		  		     		  					_getCenterLayerPoint: function () {
		  		     		  						return this.containerPointToLayerPoint(this.getSize()._divideBy(2))
		  		     		  					},
		  		     		  					_getCenterOffset: function (t) {
		  		     		  						return this.latLngToLayerPoint(t).subtract(this._getCenterLayerPoint())
		  		     		  					},
		  		     		  					_limitCenter: function (t, i, e) {
		  		     		  						if (!e) return t;
		  		     		  						var n = this.project(t, i),
		  		     		  							s = this.getSize().divideBy(2),
		  		     		  							o = new L.Bounds(n.subtract(s), n.add(s)),
		  		     		  							a = this._getBoundsOffset(o, e, i);
		  		     		  						return this.unproject(n.add(a), i)
		  		     		  					},
		  		     		  					_limitOffset: function (t, i) {
		  		     		  						if (!i) return t;
		  		     		  						var e = this.getPixelBounds(),
		  		     		  							n = new L.Bounds(e.min.add(t), e.max.add(t));
		  		     		  						return t.add(this._getBoundsOffset(n, i))
		  		     		  					},
		  		     		  					_getBoundsOffset: function (t, i, e) {
		  		     		  						var n = this.project(i.getNorthWest(), e).subtract(t.min),
		  		     		  							s = this.project(i.getSouthEast(), e).subtract(t.max),
		  		     		  							o = this._rebound(n.x, -s.x),
		  		     		  							a = this._rebound(n.y, -s.y);
		  		     		  						return new L.Point(o, a)
		  		     		  					},
		  		     		  					_rebound: function (t, i) {
		  		     		  						return t + i > 0 ? Math.round(t - i) / 2 : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(i))
		  		     		  					},
		  		     		  					_limitZoom: function (t) {
		  		     		  						var i = this.getMinZoom(),
		  		     		  							e = this.getMaxZoom();
		  		     		  						return L.Browser.any3d || (t = Math.round(t)), Math.max(i, Math.min(e, t))
		  		     		  					},
		  		     		  					_getTileId: function (t) {
		  		     		  						var i = this.project(t, this._zoom).floor(),
		  		     		  							e = i.unscaleBy(this._baseLayer.getTileSize()).floor();
		  		     		  						return e.y = -(e.y + 1 - Math.pow(2, this._zoom)), e.z = this._zoom, e
		  		     		  					}
		  		     		  				}), L.map = function (t, i) {
		  		     		  					return new L.Map(t, i)
		  		     		  				}, L.Http = {}, L.Http.Request = L.Evented.extend({
		  		     		  					opts: {
		  		     		  						callback: "callback",
		  		     		  						type: "json"
		  		     		  					},
		  		     		  					initialize: function (t, i) {
		  		     		  						L.Util.setOptions(this, i), this.send(t)
		  		     		  					},
		  		     		  					send: function (t) {
		  		     		  						var i = L.DomUtil.create("script");
		  		     		  						i.type = "text/javascript", i.charset = "utf-8";
		  		     		  						var e = this;
		  		     		  						L.Browser.ielt9 ? i.onreadystatechange = function () {
		  		     		  							("loaded" == this.readyState || "complete" == this.readyState) && e.emit("complete")
		  		     		  						} : (i.onload = function () {
		  		     		  							e.emit("complete")
		  		     		  						}, i.onerror = function () {
		  		     		  							e.emit("error", {
		  		     		  								status: 0,
		  		     		  								info: "service error",
		  		     		  								url: t
		  		     		  							})
		  		     		  						}), i.src = t, document.getElementsByTagName("head")[0].appendChild(i)
		  		     		  					}
		  		     		  				}), L.Http.JSONP = L.Http.Request.extend({
		  		     		  					send: function (t) {
		  		     		  						var i = L.Util.getGuid("_", 5) + "_",
		  		     		  							e = L.DomUtil.create("script");
		  		     		  						e.type = "text/javascript", e.charset = "utf-8";
		  		     		  						var n = this;
		  		     		  						e.onerror = function () {
		  		     		  							n.emit("error", {
		  		     		  								status: 0,
		  		     		  								info: "service error",
		  		     		  								url: t
		  		     		  							})
		  		     		  						};
		  		     		  						var s = function (t) {
		  		     		  							n.emit("complete", t), L[i] = null, delete window[i], document.getElementsByTagName("head")[0].removeChild(e)
		  		     		  						};
		  		     		  						window[i] = s, e.src = t + "&" + this.opts.callback + "=window." + i, document.getElementsByTagName("head")[0].appendChild(e), this.node = e
		  		     		  					}
		  		     		  				}), L.Layer = L.Evented.extend({
		  		     		  					options: {
		  		     		  						pane: "overlayPane",
		  		     		  						nonBubblingEvents: []
		  		     		  					},
		  		     		  					addTo: function (t) {
		  		     		  						return t.addLayer(this), this
		  		     		  					},
		  		     		  					remove: function () {
		  		     		  						return this.removeFrom(this._map || this._mapToAdd)
		  		     		  					},
		  		     		  					removeFrom: function (t) {
		  		     		  						return t && t.removeLayer(this), this
		  		     		  					},
		  		     		  					getPane: function (t) {
		  		     		  						return this._map.getPane(t ? this.options[t] || t : this.options.pane)
		  		     		  					},
		  		     		  					addInteractiveTarget: function (t) {
		  		     		  						return this._map._targets[L.stamp(t)] = this, this
		  		     		  					},
		  		     		  					removeInteractiveTarget: function (t) {
		  		     		  						return delete this._map._targets[L.stamp(t)], this
		  		     		  					},
		  		     		  					_layerAdd: function (t) {
		  		     		  						var i = t.target;
		  		     		  						i.hasLayer(this) && (this._map = i, this._zoomAnimated = i._zoomAnimated, this.getEvents && i.on(this.getEvents(), this), this.onAdd(i), this.fire("add"), i.fire("layeradd", {
		  		     		  							layer: this
		  		     		  						}))
		  		     		  					}
		  		     		  				}), L.Map.include({
		  		     		  					addLayer: function (t) {
		  		     		  						var i = L.stamp(t);
		  		     		  						return this._layers[i] ? t : (this._layers[i] = t, 0 == t.type && (this._baseLayer && this.removeLayer(this._baseLayer, !0), this._baseLayer = t), t._mapToAdd = this, t.beforeAdd && t.beforeAdd(this), this.whenReady(t._layerAdd, t), this)
		  		     		  					},
		  		     		  					removeLayer: function (t, i, e) {
		  		     		  						var n = L.stamp(t);
		  		     		  						return this._layers[n] ? (0 != t.type || i || delete this._baseLayer, this._loaded && t.onRemove(this, e), t.getAttribution && this.attributionControl && this.attributionControl.removeAttribution(t.getAttribution()), t.getEvents && this.off(t.getEvents(), t), i || (delete this._layers[n], this._loaded && (this.fire("layerremove", {
		  		     		  							layer: t
		  		     		  						}), t.fire("remove"))), t._map = t._mapToAdd = null, this) : this
		  		     		  					},
		  		     		  					getBGLayerIds: function () {
		  		     		  						var t = [],
		  		     		  							i = this._layers;
		  		     		  						for (var e in i) 0 == i[e].type && t.push(L.stamp(i[e]));
		  		     		  						return t
		  		     		  					},
		  		     		  					changeBGLayer: function (t) {
		  		     		  						var i = this;
		  		     		  						if (0 == t.type) {
		  		     		  							var e = L.stamp(t);
		  		     		  							return i._layers[e] ? (i._baseLayer = t, t.beforeAdd(i)) : i.addLayer(t), !0
		  		     		  						}
		  		     		  						return !1
		  		     		  					},
		  		     		  					getLayer: function (t) {
		  		     		  						return this._layers[t] ? this._layers[t] : null
		  		     		  					},
		  		     		  					hasLayer: function (t) {
		  		     		  						return !!t && L.stamp(t) in this._layers
		  		     		  					},
		  		     		  					layerToTop: function (t) {
		  		     		  						var i = this;
		  		     		  						if (t) {
		  		     		  							var e, n = 0;
		  		     		  							for (var s in i._layers) {
		  		     		  								var o = i._layers[s];
		  		     		  								0 != o.type && (s == t && (e = o), o.getZIndex() > n && (n = o.getZIndex()))
		  		     		  							}
		  		     		  							e && e.setZIndex(n + 1)
		  		     		  						}
		  		     		  					},
		  		     		  					eachLayer: function (t, i) {
		  		     		  						for (var e in this._layers) t.call(i, this._layers[e]);
		  		     		  						return this
		  		     		  					},
		  		     		  					_addLayers: function (t) {
		  		     		  						t = t ? L.Util.isArray(t) ? t : [t] : [];
		  		     		  						for (var i = 0, e = t.length; e > i; i++) this.addLayer(t[i])
		  		     		  					},
		  		     		  					_addZoomLimit: function (t) {
		  		     		  						(isNaN(t.options.maxZoom) || !isNaN(t.options.minZoom)) && (this._zoomBoundLayers[L.stamp(t)] = t, this._updateZoomLevels())
		  		     		  					},
		  		     		  					_removeZoomLimit: function (t) {
		  		     		  						var i = L.stamp(t);
		  		     		  						this._zoomBoundLayers[i] && (delete this._zoomBoundLayers[i], this._updateZoomLevels())
		  		     		  					},
		  		     		  					_updateZoomLevels: function () {
		  		     		  						var t = 1 / 0,
		  		     		  							i = -(1 / 0),
		  		     		  							e = this._getZoomSpan();
		  		     		  						for (var n in this._zoomBoundLayers) {
		  		     		  							var s = this._zoomBoundLayers[n].options;
		  		     		  							t = s.minZoom === undefined ? t : Math.min(t, s.minZoom), i = s.maxZoom === undefined ? i : Math.max(i, s.maxZoom)
		  		     		  						}
		  		     		  						this._layersMaxZoom = i === -(1 / 0) ? undefined : i, this._layersMinZoom = t === 1 / 0 ? undefined : t, e !== this._getZoomSpan() && this.fire("zoomlevelschange")
		  		     		  					}
		  		     		  				});
		  		     		  			var eventsKey = "_imap_events";
		  		     		  			L.DomEvent = {
		  		     		  				on: function (t, i, e, n) {
		  		     		  					if ("object" == typeof i)
		  		     		  						for (var s in i) this._on(t, s, i[s], e);
		  		     		  					else {
		  		     		  						i = L.Util.splitWords(i);
		  		     		  						for (var o = 0, a = i.length; a > o; o++) this._on(t, i[o], e, n)
		  		     		  					}
		  		     		  					return this
		  		     		  				},
		  		     		  				off: function (t, i, e, n) {
		  		     		  					if ("object" == typeof i)
		  		     		  						for (var s in i) this._off(t, s, i[s], e);
		  		     		  					else {
		  		     		  						i = L.Util.splitWords(i);
		  		     		  						for (var o = 0, a = i.length; a > o; o++) this._off(t, i[o], e, n)
		  		     		  					}
		  		     		  					return this
		  		     		  				},
		  		     		  				_on: function (t, i, e, n) {
		  		     		  					var s = i + L.stamp(e) + (n ? "_" + L.stamp(n) : "");
		  		     		  					if (t[eventsKey] && t[eventsKey][s]) return this;
		  		     		  					var o = function (i) {
		  		     		  							return e.call(n || t, i || window.event)
		  		     		  						},
		  		     		  						a = o;
		  		     		  					return L.Browser.pointer && 0 === i.indexOf("touch") ? this.addPointerListener(t, i, o, s) : L.Browser.touch && "dblclick" === i && this.addDoubleTapListener ? this.addDoubleTapListener(t, o, s) : "addEventListener" in t ? "mousewheel" === i ? (t.addEventListener("DOMMouseScroll", o, !1), t.addEventListener(i, o, !1)) : "mouseenter" === i || "mouseleave" === i ? (o = function (i) {
		  		     		  						i = i || window.event, L.DomEvent._isExternalTarget(t, i) && a(i)
		  		     		  					}, t.addEventListener("mouseenter" === i ? "mouseover" : "mouseout", o, !1)) : ("click" === i && L.Browser.android && (o = function (t) {
		  		     		  						return L.DomEvent._filterClick(t, a)
		  		     		  					}), t.addEventListener(i, o, !1)) : "attachEvent" in t && t.attachEvent("on" + i, o), t[eventsKey] = t[eventsKey] || {}, t[eventsKey][s] = o, this
		  		     		  				},
		  		     		  				_off: function (t, i, e, n) {
		  		     		  					var s = i + L.stamp(e) + (n ? "_" + L.stamp(n) : ""),
		  		     		  						o = t[eventsKey] && t[eventsKey][s];
		  		     		  					return o ? (L.Browser.pointer && 0 === i.indexOf("touch") ? this.removePointerListener(t, i, s) : L.Browser.touch && "dblclick" === i && this.removeDoubleTapListener ? this.removeDoubleTapListener(t, s) : "removeEventListener" in t ? "mousewheel" === i ? (t.removeEventListener("DOMMouseScroll", o, !1), t.removeEventListener(i, o, !1)) : t.removeEventListener("mouseenter" === i ? "mouseover" : "mouseleave" === i ? "mouseout" : i, o, !1) : "detachEvent" in t && t.detachEvent("on" + i, o), t[eventsKey][s] = null, this) : this
		  		     		  				},
		  		     		  				stopPropagation: function (t) {
		  		     		  					return t.stopPropagation ? t.stopPropagation() : t.originalEvent ? t.originalEvent._stopped = !0 : t.cancelBubble = !0, L.DomEvent._skipped(t), this
		  		     		  				},
		  		     		  				disableScrollPropagation: function (t) {
		  		     		  					return L.DomEvent.on(t, "mousewheel MozMousePixelScroll", L.DomEvent.stopPropagation)
		  		     		  				},
		  		     		  				disableClickPropagation: function (t) {
		  		     		  					var i = L.DomEvent.stopPropagation;
		  		     		  					return L.DomEvent.on(t, L.Draggable.START.join(" "), i), L.DomEvent.on(t, {
		  		     		  						click: L.DomEvent._fakeStop,
		  		     		  						dblclick: i
		  		     		  					})
		  		     		  				},
		  		     		  				preventDefault: function (t) {
		  		     		  					return t.preventDefault ? t.preventDefault() : t.returnValue = !1, this
		  		     		  				},
		  		     		  				stop: function (t) {
		  		     		  					return L.DomEvent.preventDefault(t).stopPropagation(t)
		  		     		  				},
		  		     		  				getMousePosition: function (t, i) {
		  		     		  					if (!i) return new L.Point(t.clientX, t.clientY);
		  		     		  					var e = i.getBoundingClientRect();
		  		     		  					return new L.Point(t.clientX - e.left - i.clientLeft, t.clientY - e.top - i.clientTop)
		  		     		  				},
		  		     		  				getWheelDelta: function (t) {
		  		     		  					var i = 0;
		  		     		  					return t.wheelDelta && (i = t.wheelDelta / 120), t.detail && (i = -t.detail / 3), i
		  		     		  				},
		  		     		  				_skipEvents: {},
		  		     		  				_fakeStop: function (t) {
		  		     		  					L.DomEvent._skipEvents[t.type] = !0
		  		     		  				},
		  		     		  				_skipped: function (t) {
		  		     		  					var i = this._skipEvents[t.type];
		  		     		  					return this._skipEvents[t.type] = !1, i
		  		     		  				},
		  		     		  				_isExternalTarget: function (t, i) {
		  		     		  					var e = i.relatedTarget;
		  		     		  					if (!e) return !0;
		  		     		  					try {
		  		     		  						for (; e && e !== t;) e = e.parentNode
		  		     		  					} catch (n) {
		  		     		  						return !1
		  		     		  					}
		  		     		  					return e !== t
		  		     		  				},
		  		     		  				_filterClick: function (t, i) {
		  		     		  					var e = t.timeStamp || t.originalEvent.timeStamp,
		  		     		  						n = L.DomEvent._lastClick && e - L.DomEvent._lastClick;
		  		     		  					return n && n > 100 && 500 > n || t.target._simulatedClick && !t._simulated ? void L.DomEvent.stop(t) : (L.DomEvent._lastClick = e, void i(t))
		  		     		  				}
		  		     		  			}, L.DomEvent.addListener = L.DomEvent.on, L.DomEvent.removeListener = L.DomEvent.off, L.PosAnimation = L.Evented.extend({
		  		     		  				run: function (t, i, e, n) {
		  		     		  					this.stop(), this._el = t, this._inProgress = !0, this._duration = e || .25, this._easeOutPower = 1 / Math.max(n || .5, .2), this._startPos = L.DomUtil.getPosition(t), this._offset = i.subtract(this._startPos), this._startTime = +new Date, this.fire("start"), this._animate()
		  		     		  				},
		  		     		  				stop: function () {
		  		     		  					this._inProgress && (this._step(!0), this._complete())
		  		     		  				},
		  		     		  				_animate: function () {
		  		     		  					this._animId = L.Util.requestAnimFrame(this._animate, this), this._step()
		  		     		  				},
		  		     		  				_step: function (t) {
		  		     		  					var i = +new Date - this._startTime,
		  		     		  						e = 1e3 * this._duration;
		  		     		  					e > i ? this._runFrame(this._easeOut(i / e), t) : (this._runFrame(1), this._complete())
		  		     		  				},
		  		     		  				_runFrame: function (t, i) {
		  		     		  					var e = this._startPos.add(this._offset.multiplyBy(t));
		  		     		  					i && e._round(), L.DomUtil.setPosition(this._el, e), this.fire("step")
		  		     		  				},
		  		     		  				_complete: function () {
		  		     		  					L.Util.cancelAnimFrame(this._animId), this._inProgress = !1, this.fire("end")
		  		     		  				},
		  		     		  				_easeOut: function (t) {
		  		     		  					return 1 - Math.pow(1 - t, this._easeOutPower)
		  		     		  				}
		  		     		  			}), L.Map.include({
		  		     		  				setView: function (t, i, e) {
		  		     		  					if (i = i === undefined ? this._zoom : this._limitZoom(i), t = this._limitCenter(L.latLng(t), i, this.options.maxBounds), e = e || {}, this.stop(), this._loaded && !e.reset && e !== !0) {
		  		     		  						e.animate !== undefined && (e.zoom = L.extend({
		  		     		  							animate: e.animate
		  		     		  						}, e.zoom), e.pan = L.extend({
		  		     		  							animate: e.animate,
		  		     		  							duration: e.duration
		  		     		  						}, e.pan));
		  		     		  						var n = this._zoom !== i ? this._tryAnimatedZoom && this._tryAnimatedZoom(t, i, e.zoom) : this._tryAnimatedPan(t, e.pan);
		  		     		  						if (n) return clearTimeout(this._sizeTimer), this
		  		     		  					}
		  		     		  					return this._resetView(t, i), this.fire("moveend"), this
		  		     		  				},
		  		     		  				panBy: function (t, i) {
		  		     		  					if (t = L.point(t).round(), i = i || {}, !t.x && !t.y) return this.fire("moveend");
		  		     		  					if (i.animate !== !0 && !this.getSize().contains(t)) return this._resetView(this.unproject(this.project(this.getCenter()).add(t)), this.getZoom()), this;
		  		     		  					if (this._panAnim || (this._panAnim = new L.PosAnimation, this._panAnim.on({
		  		     		  							step: this._onPanTransitionStep,
		  		     		  							end: this._onPanTransitionEnd
		  		     		  						}, this)), i.noMoveStart || this.fire("movestart"), i.animate !== !1) {
		  		     		  						L.DomUtil.addClass(this._mapPane, "imap-pan-anim");
		  		     		  						var e = this._getMapPanePos().subtract(t);
		  		     		  						this._panAnim.run(this._mapPane, e, i.duration || .25, i.easeLinearity)
		  		     		  					} else this._rawPanBy(t), this.fire("move").fire("moveend");
		  		     		  					return this
		  		     		  				},
		  		     		  				_onPanTransitionStep: function () {
		  		     		  					this.fire("move")
		  		     		  				},
		  		     		  				_onPanTransitionEnd: function () {
		  		     		  					L.DomUtil.removeClass(this._mapPane, "imap-pan-anim"), this.fire("moveend")
		  		     		  				},
		  		     		  				_tryAnimatedPan: function (t, i) {
		  		     		  					var e = this._getCenterOffset(t)._floor();
		  		     		  					return (i && i.animate) === !0 || this.getSize().contains(e) ? (this.panBy(e, i), !0) : !1
		  		     		  				}
		  		     		  			}), L.Map.mergeOptions({
		  		     		  				zoomAnimation: !0,
		  		     		  				zoomAnimationThreshold: 4
		  		     		  			});
		  		     		  			var zoomAnimated = L.DomUtil.TRANSITION && L.Browser.any3d && !L.Browser.mobileOpera;
		  		     		  			zoomAnimated && L.Map.addInitHook(function () {
		  		     		  					this._zoomAnimated = this.options.zoomAnimation, this._zoomAnimated && (this._createAnimProxy(), L.DomEvent.on(this._proxy, L.DomUtil.TRANSITION_END, this._catchTransitionEnd, this))
		  		     		  				}), L.Map.include(zoomAnimated ? {
		  		     		  					_createAnimProxy: function () {
		  		     		  						var t = this._proxy = L.DomUtil.create("div", "imap-proxy imap-zoom-animated");
		  		     		  						this._panes.mapPane.appendChild(t), this.on("zoomanim", function (i) {
		  		     		  							var e = L.DomUtil.TRANSFORM,
		  		     		  								n = t.style[e];
		  		     		  							L.DomUtil.setTransform(t, this.project(i.center, i.zoom), this.getZoomScale(i.zoom, 1)), n === t.style[e] && this._animatingZoom && this._onZoomTransitionEnd()
		  		     		  						}, this), this.on("load moveend", function () {
		  		     		  							var i = this.getCenter(),
		  		     		  								e = this.getZoom();
		  		     		  							L.DomUtil.setTransform(t, this.project(i, e), this.getZoomScale(e, 1))
		  		     		  						}, this)
		  		     		  					},
		  		     		  					_catchTransitionEnd: function (t) {
		  		     		  						this._animatingZoom && t.propertyName.indexOf("transform") >= 0 && this._onZoomTransitionEnd()
		  		     		  					},
		  		     		  					_nothingToAnimate: function () {
		  		     		  						return !this._container.getElementsByClassName("imap-zoom-animated").length
		  		     		  					},
		  		     		  					_tryAnimatedZoom: function (t, i, e) {
		  		     		  						if (this._animatingZoom) return !0;
		  		     		  						if (e = e || {}, !this._zoomAnimated || e.animate === !1 || this._nothingToAnimate() || Math.abs(i - this._zoom) > this.options.zoomAnimationThreshold) return !1;
		  		     		  						var n = this.getZoomScale(i),
		  		     		  							s = this._getCenterOffset(t)._divideBy(1 - 1 / n);
		  		     		  						return e.animate === !0 || this.getSize().contains(s) ? (L.Util.requestAnimFrame(function () {
		  		     		  							this._moveStart(!0)._animateZoom(t, i, !0)
		  		     		  						}, this), !0) : !1
		  		     		  					},
		  		     		  					_animateZoom: function (t, i, e, n) {
		  		     		  						e && (this._animatingZoom = !0, this._animateToCenter = t, this._animateToZoom = i, L.DomUtil.addClass(this._mapPane, "imap-zoom-anim")), this.fire("zoomanim", {
		  		     		  							center: t,
		  		     		  							zoom: i,
		  		     		  							noUpdate: n
		  		     		  						}), setTimeout(L.bind(this._onZoomTransitionEnd, this), 250)
		  		     		  					},
		  		     		  					_onZoomTransitionEnd: function () {
		  		     		  						this._animatingZoom && (L.DomUtil.removeClass(this._mapPane, "imap-zoom-anim"), L.Util.requestAnimFrame(function () {
		  		     		  							this._animatingZoom = !1, this._move(this._animateToCenter, this._animateToZoom)._moveEnd(!0)
		  		     		  						}, this))
		  		     		  					}
		  		     		  				} : {}), L.Map.include({
		  		     		  					flyTo: function (t, i, e) {
		  		     		  						function n(t) {
		  		     		  							var i = (_ * _ - m * m + (t ? -1 : 1) * y * y * g * g) / (2 * (t ? _ : m) * y * g);
		  		     		  							return Math.log(Math.sqrt(i * i + 1) - i)
		  		     		  						}

		  		     		  						function s(t) {
		  		     		  							return (Math.exp(t) - Math.exp(-t)) / 2
		  		     		  						}

		  		     		  						function o(t) {
		  		     		  							return (Math.exp(t) + Math.exp(-t)) / 2
		  		     		  						}

		  		     		  						function a(t) {
		  		     		  							return s(t) / o(t)
		  		     		  						}

		  		     		  						function r(t) {
		  		     		  							return m * (o(b) / o(b + v * t))
		  		     		  						}

		  		     		  						function h(t) {
		  		     		  							return m * (o(b) * a(b + v * t) - s(b)) / y
		  		     		  						}

		  		     		  						function l(t) {
		  		     		  							return 1 - Math.pow(1 - t, 1.5)
		  		     		  						}

		  		     		  						function u() {
		  		     		  							var e = (Date.now() - x) / P,
		  		     		  								n = l(e) * w;
		  		     		  							1 >= e ? (this._flyToFrame = L.Util.requestAnimFrame(u, this), this._move(this.unproject(c.add(d.subtract(c).multiplyBy(h(n) / g)), f), this.getScaleZoom(m / r(n), f), {
		  		     		  								flyTo: !0
		  		     		  							})) : this._move(t, i)._moveEnd(!0)
		  		     		  						}
		  		     		  						if (e = e || {}, e.animate === !1 || !L.Browser.any3d) return this.setView(t, i, e);
		  		     		  						this.stop();
		  		     		  						var c = this.project(this.getCenter()),
		  		     		  							d = this.project(t),
		  		     		  							p = this.getSize(),
		  		     		  							f = this._zoom;
		  		     		  						t = L.latLng(t), i = i === undefined ? f : i;
		  		     		  						var m = Math.max(p.x, p.y),
		  		     		  							_ = m * this.getZoomScale(f, i),
		  		     		  							g = d.distanceTo(c) || 1,
		  		     		  							v = 1.42,
		  		     		  							y = v * v,
		  		     		  							b = n(0),
		  		     		  							x = Date.now(),
		  		     		  							w = (n(1) - b) / v,
		  		     		  							P = e.duration ? 1e3 * e.duration : 1e3 * w * .8;
		  		     		  						return this._moveStart(!0), u.call(this), this
		  		     		  					},
		  		     		  					flyToBounds: function (t, i) {
		  		     		  						var e = this._getBoundsCenterZoom(t, i);
		  		     		  						return this.flyTo(e.center, e.zoom, i)
		  		     		  					}
		  		     		  				}), L.Draggable = L.Evented.extend({
		  		     		  					statics: {
		  		     		  						START: L.Browser.touch ? ["touchstart", "mousedown"] : ["mousedown"],
		  		     		  						END: {
		  		     		  							mousedown: "mouseup",
		  		     		  							touchstart: "touchend",
		  		     		  							pointerdown: "touchend",
		  		     		  							MSPointerDown: "touchend"
		  		     		  						},
		  		     		  						MOVE: {
		  		     		  							mousedown: "mousemove",
		  		     		  							touchstart: "touchmove",
		  		     		  							pointerdown: "touchmove",
		  		     		  							MSPointerDown: "touchmove"
		  		     		  						}
		  		     		  					},
		  		     		  					initialize: function (t, i, e) {
		  		     		  						this._element = t, this._dragStartTarget = i || t, this._preventOutline = e, L.DomUtil.disableImageDrag(), L.DomUtil.disableTextSelection()
		  		     		  					},
		  		     		  					enable: function () {
		  		     		  						this._enabled || (L.DomEvent.on(this._dragStartTarget, L.Draggable.START.join(" "), this._onDown, this), this._enabled = !0)
		  		     		  					},
		  		     		  					disable: function () {
		  		     		  						this._enabled && (L.DomEvent.off(this._dragStartTarget, L.Draggable.START.join(" "), this._onDown, this), this._enabled = !1, this._moved = !1)
		  		     		  					},
		  		     		  					_onDown: function (t) {
		  		     		  						if (this._moved = !1, !L.DomUtil.hasClass(this._element, "imap-zoom-anim") && !(L.Draggable._dragging || t.shiftKey || 1 !== t.which && 1 !== t.button && !t.touches) && this._enabled && (L.Draggable._dragging = !0, this._preventOutline && L.DomUtil.preventOutline(this._element), !this._moving)) {
		  		     		  							this.fire("down");
		  		     		  							var i = t.touches ? t.touches[0] : t;
		  		     		  							this._startPoint = new L.Point(i.clientX, i.clientY), this._startPos = this._newPos = L.DomUtil.getPosition(this._element), L.DomEvent.on(document, L.Draggable.MOVE[t.type], this._onMove, this).on(document, L.Draggable.END[t.type], this._onUp, this)
		  		     		  						}
		  		     		  					},
		  		     		  					_onMove: function (t) {
		  		     		  						if (t.touches && t.touches.length > 1) return void(this._moved = !0);
		  		     		  						var i = t.touches && 1 === t.touches.length ? t.touches[0] : t,
		  		     		  							e = new L.Point(i.clientX, i.clientY),
		  		     		  							n = e.subtract(this._startPoint);
		  		     		  						(n.x || n.y) && (L.Browser.touch && Math.abs(n.x) + Math.abs(n.y) < 3 || (L.DomEvent.preventDefault(t), this._moved || (this.fire("dragstart"), this._moved = !0, this._startPos = L.DomUtil.getPosition(this._element).subtract(n), L.DomUtil.addClass(document.body, "imap-dragging"), this._lastTarget = t.target || t.srcElement, L.DomUtil.addClass(this._lastTarget, "imap-drag-target")), this._newPos = this._startPos.add(n), this._moving = !0, L.Util.cancelAnimFrame(this._animRequest), this._lastEvent = t, this._animRequest = L.Util.requestAnimFrame(this._updatePosition, this, !0)))
		  		     		  					},
		  		     		  					_updatePosition: function () {
		  		     		  						var t = {
		  		     		  							originalEvent: this._lastEvent
		  		     		  						};
		  		     		  						this.fire("predrag", t), L.DomUtil.setPosition(this._element, this._newPos, this._element.rotate), this.fire("drag", t)
		  		     		  					},
		  		     		  					_onUp: function () {
		  		     		  						L.DomUtil.removeClass(document.body, "imap-dragging"), this._lastTarget && (L.DomUtil.removeClass(this._lastTarget, "imap-drag-target"), this._lastTarget = null);
		  		     		  						for (var t in L.Draggable.MOVE) L.DomEvent.off(document, L.Draggable.MOVE[t], this._onMove, this).off(document, L.Draggable.END[t], this._onUp, this);
		  		     		  						this._moved && this._moving && (L.Util.cancelAnimFrame(this._animRequest), this.fire("dragend", {
		  		     		  							distance: this._newPos.distanceTo(this._startPos)
		  		     		  						})), this._moving = !1, L.Draggable._dragging = !1
		  		     		  					}
		  		     		  				}), L.Handler = L.Class.extend({
		  		     		  					initialize: function (t) {
		  		     		  						this._map = t
		  		     		  					},
		  		     		  					enable: function () {
		  		     		  						this._enabled || (this._enabled = !0, this.addHooks())
		  		     		  					},
		  		     		  					disable: function () {
		  		     		  						this._enabled && (this._enabled = !1, this.removeHooks())
		  		     		  					},
		  		     		  					enabled: function () {
		  		     		  						return !!this._enabled
		  		     		  					}
		  		     		  				}), L.Map.mergeOptions({
		  		     		  					dragging: !0,
		  		     		  					inertia: !L.Browser.android23,
		  		     		  					inertiaDeceleration: 3400,
		  		     		  					inertiaMaxSpeed: 1 / 0,
		  		     		  					easeLinearity: .2,
		  		     		  					worldCopyJump: !1
		  		     		  				}), L.Map.Drag = L.Handler.extend({
		  		     		  					addHooks: function () {
		  		     		  						if (!this._draggable) {
		  		     		  							var t = this._map;
		  		     		  							this._draggable = new L.Draggable(t._mapPane, t._container), this._draggable.on({
		  		     		  								down: this._onDown,
		  		     		  								dragstart: this._onDragStart,
		  		     		  								drag: this._onDrag,
		  		     		  								dragend: this._onDragEnd
		  		     		  							}, this), this._draggable.on("predrag", this._onPreDragLimit, this), t.options.worldCopyJump && (this._draggable.on("predrag", this._onPreDragWrap, this), t.on("zoomend", this._onZoomEnd, this), t.whenReady(this._onZoomEnd, this))
		  		     		  						}
		  		     		  						L.DomUtil.addClass(this._map._container, "imap-grab"), this._draggable.enable()
		  		     		  					},
		  		     		  					removeHooks: function () {
		  		     		  						L.DomUtil.removeClass(this._map._container, "imap-grab"), this._draggable.disable()
		  		     		  					},
		  		     		  					moved: function () {
		  		     		  						return this._draggable && this._draggable._moved
		  		     		  					},
		  		     		  					moving: function () {
		  		     		  						return this._draggable && this._draggable._moving
		  		     		  					},
		  		     		  					_onDown: function () {
		  		     		  						this._map.stop()
		  		     		  					},
		  		     		  					_onDragStart: function () {
		  		     		  						var t = this._map;
		  		     		  						if (this._map.options.maxBounds && this._map.options.maxBoundsViscosity) {
		  		     		  							var i = L.latLngBounds(this._map.options.maxBounds);
		  		     		  							this._offsetLimit = L.bounds(this._map.latLngToContainerPoint(i.getNorthWest()).multiplyBy(-1), this._map.latLngToContainerPoint(i.getSouthEast()).multiplyBy(-1).add(this._map.getSize())), this._viscosity = Math.min(1, Math.max(0, this._map.options.maxBoundsViscosity))
		  		     		  						} else this._offsetLimit = null;
		  		     		  						t.fire("movestart").fire("dragstart"), t.options.inertia && (this._positions = [], this._times = [])
		  		     		  					},
		  		     		  					_onDrag: function (t) {
		  		     		  						if (this._map.options.inertia) {
		  		     		  							var i = this._lastTime = +new Date,
		  		     		  								e = this._lastPos = this._draggable._absPos || this._draggable._newPos;
		  		     		  							this._positions.push(e), this._times.push(i), i - this._times[0] > 50 && (this._positions.shift(), this._times.shift())
		  		     		  						}
		  		     		  						this._map.fire("move", t).fire("drag", t)
		  		     		  					},
		  		     		  					_onZoomEnd: function () {
		  		     		  						var t = this._map.getSize().divideBy(2),
		  		     		  							i = this._map.latLngToLayerPoint([0, 0]);
		  		     		  						this._initialWorldOffset = i.subtract(t).x, this._worldWidth = this._map.getPixelWorldBounds().getSize().x
		  		     		  					},
		  		     		  					_viscousLimit: function (t, i) {
		  		     		  						return t - (t - i) * this._viscosity
		  		     		  					},
		  		     		  					_onPreDragLimit: function () {
		  		     		  						if (this._viscosity && this._offsetLimit) {
		  		     		  							var t = this._draggable._newPos.subtract(this._draggable._startPos),
		  		     		  								i = this._offsetLimit;
		  		     		  							t.x < i.min.x && (t.x = this._viscousLimit(t.x, i.min.x)), t.y < i.min.y && (t.y = this._viscousLimit(t.y, i.min.y)), t.x > i.max.x && (t.x = this._viscousLimit(t.x, i.max.x)), t.y > i.max.y && (t.y = this._viscousLimit(t.y, i.max.y)), this._draggable._newPos = this._draggable._startPos.add(t)
		  		     		  						}
		  		     		  					},
		  		     		  					_onPreDragWrap: function () {
		  		     		  						var t = this._worldWidth,
		  		     		  							i = Math.round(t / 2),
		  		     		  							e = this._initialWorldOffset,
		  		     		  							n = this._draggable._newPos.x,
		  		     		  							s = (n - i + e) % t + i - e,
		  		     		  							o = (n + i + e) % t - i - e,
		  		     		  							a = Math.abs(s + e) < Math.abs(o + e) ? s : o;
		  		     		  						this._draggable._absPos = this._draggable._newPos.clone(), this._draggable._newPos.x = a
		  		     		  					},
		  		     		  					_onDragEnd: function (t) {
		  		     		  						var i = this._map,
		  		     		  							e = i.options,
		  		     		  							n = !e.inertia || this._times.length < 2;
		  		     		  						if (i.fire("dragend", t), n) i.fire("moveend");
		  		     		  						else {
		  		     		  							var s = this._lastPos.subtract(this._positions[0]),
		  		     		  								o = (this._lastTime - this._times[0]) / 1e3,
		  		     		  								a = e.easeLinearity,
		  		     		  								r = s.multiplyBy(a / o),
		  		     		  								h = r.distanceTo([0, 0]),
		  		     		  								l = Math.min(e.inertiaMaxSpeed, h),
		  		     		  								u = r.multiplyBy(l / h),
		  		     		  								c = l / (e.inertiaDeceleration * a),
		  		     		  								d = u.multiplyBy(-c / 2).round();
		  		     		  							d.x || d.y ? (d = i._limitOffset(d, i.options.maxBounds), L.Util.requestAnimFrame(function () {
		  		     		  								i.panBy(d, {
		  		     		  									duration: c,
		  		     		  									easeLinearity: a,
		  		     		  									noMoveStart: !0,
		  		     		  									animate: !0
		  		     		  								})
		  		     		  							})) : i.fire("moveend")
		  		     		  						}
		  		     		  					}
		  		     		  				}), L.Map.addInitHook("addHandler", "dragging", L.Map.Drag), L.Map.mergeOptions({
		  		     		  					doubleClickZoom: !0
		  		     		  				}), L.Map.DoubleClickZoom = L.Handler.extend({
		  		     		  					addHooks: function () {
		  		     		  						this._map.on("dblclick", this._onDoubleClick, this)
		  		     		  					},
		  		     		  					removeHooks: function () {
		  		     		  						this._map.off("dblclick", this._onDoubleClick, this)
		  		     		  					},
		  		     		  					_onDoubleClick: function (t) {
		  		     		  						var i = this._map,
		  		     		  							e = i.getZoom(),
		  		     		  							n = t.originalEvent.shiftKey ? Math.ceil(e) - 1 : Math.floor(e) + 1;
		  		     		  						"center" === i.options.doubleClickZoom ? i.setZoom(n) : i.setZoomAround(t.containerPoint, n)
		  		     		  					}
		  		     		  				}), L.Map.addInitHook("addHandler", "doubleClickZoom", L.Map.DoubleClickZoom), L.Map.mergeOptions({
		  		     		  					scrollWheelZoom: !0,
		  		     		  					wheelDebounceTime: 40
		  		     		  				}), L.Map.ScrollWheelZoom = L.Handler.extend({
		  		     		  					addHooks: function () {
		  		     		  						L.DomEvent.on(this._map._container, {
		  		     		  							mousewheel: this._onWheelScroll,
		  		     		  							MozMousePixelScroll: L.DomEvent.preventDefault
		  		     		  						}, this), this._delta = 0
		  		     		  					},
		  		     		  					removeHooks: function () {
		  		     		  						L.DomEvent.off(this._map._container, {
		  		     		  							mousewheel: this._onWheelScroll,
		  		     		  							MozMousePixelScroll: L.DomEvent.preventDefault
		  		     		  						}, this)
		  		     		  					},
		  		     		  					_onWheelScroll: function (t) {
		  		     		  						var i = L.DomEvent.getWheelDelta(t),
		  		     		  							e = this._map.options.wheelDebounceTime;
		  		     		  						this._delta += i, this._lastMousePos = this._map.mouseEventToContainerPoint(t), this._startTime || (this._startTime = +new Date);
		  		     		  						var n = Math.max(e - (+new Date - this._startTime), 0);
		  		     		  						clearTimeout(this._timer), this._timer = setTimeout(L.bind(this._performZoom, this), n), L.DomEvent.stop(t)
		  		     		  					},
		  		     		  					_performZoom: function () {
		  		     		  						var t = this._map,
		  		     		  							i = this._delta,
		  		     		  							e = t.getZoom();
		  		     		  						t.stop(), i = i > 0 ? Math.ceil(i) : Math.floor(i), i = Math.max(Math.min(i, 4), -4), i = t._limitZoom(e + i) - e, this._delta = 0, this._startTime = null, i && ("center" === t.options.scrollWheelZoom ? t.setZoom(e + i) : t.setZoomAround(this._lastMousePos, e + i))
		  		     		  					}
		  		     		  				}), L.Map.addInitHook("addHandler", "scrollWheelZoom", L.Map.ScrollWheelZoom), L.extend(L.DomEvent, {
		  		     		  					_touchstart: L.Browser.msPointer ? "MSPointerDown" : L.Browser.pointer ? "pointerdown" : "touchstart",
		  		     		  					_touchend: L.Browser.msPointer ? "MSPointerUp" : L.Browser.pointer ? "pointerup" : "touchend",
		  		     		  					addDoubleTapListener: function (t, i, e) {
		  		     		  						function n(t) {
		  		     		  							var i;
		  		     		  							if (i = L.Browser.pointer ? L.DomEvent._pointersCount : t.touches.length, !(i > 1)) {
		  		     		  								var e = Date.now(),
		  		     		  									n = e - (o || e);
		  		     		  								a = t.touches ? t.touches[0] : t, r = n > 0 && h >= n, o = e
		  		     		  							}
		  		     		  						}

		  		     		  						function s() {
		  		     		  							if (r && !a.cancelBubble) {
		  		     		  								if (L.Browser.pointer) {
		  		     		  									var t, e, n = {};
		  		     		  									for (e in a) t = a[e], n[e] = t && t.bind ? t.bind(a) : t;
		  		     		  									a = n
		  		     		  								}
		  		     		  								a.type = "dblclick", i(a), o = null
		  		     		  							}
		  		     		  						}
		  		     		  						var o, a, r = !1,
		  		     		  							h = 250,
		  		     		  							l = "_imap_",
		  		     		  							u = this._touchstart,
		  		     		  							c = this._touchend;
		  		     		  						return t[l + u + e] = n, t[l + c + e] = s, t.addEventListener(u, n, !1), t.addEventListener(c, s, !1), this
		  		     		  					},
		  		     		  					removeDoubleTapListener: function (t, i) {
		  		     		  						var e = "_imap_",
		  		     		  							n = t[e + this._touchend + i];
		  		     		  						return t.removeEventListener(this._touchstart, t[e + this._touchstart + i], !1), t.removeEventListener(this._touchend, n, !1), this
		  		     		  					}
		  		     		  				}), L.extend(L.DomEvent, {
		  		     		  					POINTER_DOWN: L.Browser.msPointer ? "MSPointerDown" : "pointerdown",
		  		     		  					POINTER_MOVE: L.Browser.msPointer ? "MSPointerMove" : "pointermove",
		  		     		  					POINTER_UP: L.Browser.msPointer ? "MSPointerUp" : "pointerup",
		  		     		  					POINTER_CANCEL: L.Browser.msPointer ? "MSPointerCancel" : "pointercancel",
		  		     		  					_pointers: {},
		  		     		  					_pointersCount: 0,
		  		     		  					addPointerListener: function (t, i, e, n) {
		  		     		  						return "touchstart" === i ? this._addPointerStart(t, e, n) : "touchmove" === i ? this._addPointerMove(t, e, n) : "touchend" === i && this._addPointerEnd(t, e, n), this
		  		     		  					},
		  		     		  					removePointerListener: function (t, i, e) {
		  		     		  						var n = t["_imap_" + i + e];
		  		     		  						return "touchstart" === i ? t.removeEventListener(this.POINTER_DOWN, n, !1) : "touchmove" === i ? t.removeEventListener(this.POINTER_MOVE, n, !1) : "touchend" === i && (t.removeEventListener(this.POINTER_UP, n, !1), t.removeEventListener(this.POINTER_CANCEL, n, !1)), this
		  		     		  					},
		  		     		  					_addPointerStart: function (t, i, e) {
		  		     		  						var n = L.bind(function (t) {
		  		     		  							"mouse" !== t.pointerType && t.pointerType !== t.MSPOINTER_TYPE_MOUSE && L.DomEvent.preventDefault(t), this._handlePointer(t, i)
		  		     		  						}, this);
		  		     		  						if (t["_imap_touchstart" + e] = n, t.addEventListener(this.POINTER_DOWN, n, !1), !this._pointerDocListener) {
		  		     		  							var s = L.bind(this._globalPointerUp, this);
		  		     		  							document.documentElement.addEventListener(this.POINTER_DOWN, L.bind(this._globalPointerDown, this), !0), document.documentElement.addEventListener(this.POINTER_MOVE, L.bind(this._globalPointerMove, this), !0), document.documentElement.addEventListener(this.POINTER_UP, s, !0), document.documentElement.addEventListener(this.POINTER_CANCEL, s, !0), this._pointerDocListener = !0
		  		     		  						}
		  		     		  					},
		  		     		  					_globalPointerDown: function (t) {
		  		     		  						this._pointers[t.pointerId] = t, this._pointersCount++
		  		     		  					},
		  		     		  					_globalPointerMove: function (t) {
		  		     		  						this._pointers[t.pointerId] && (this._pointers[t.pointerId] = t)
		  		     		  					},
		  		     		  					_globalPointerUp: function (t) {
		  		     		  						delete this._pointers[t.pointerId], this._pointersCount--
		  		     		  					},
		  		     		  					_handlePointer: function (t, i) {
		  		     		  						t.touches = [];
		  		     		  						for (var e in this._pointers) t.touches.push(this._pointers[e]);
		  		     		  						t.changedTouches = [t], i(t)
		  		     		  					},
		  		     		  					_addPointerMove: function (t, i, e) {
		  		     		  						var n = L.bind(function (t) {
		  		     		  							(t.pointerType !== t.MSPOINTER_TYPE_MOUSE && "mouse" !== t.pointerType || 0 !== t.buttons) && this._handlePointer(t, i)
		  		     		  						}, this);
		  		     		  						t["_imap_touchmove" + e] = n, t.addEventListener(this.POINTER_MOVE, n, !1)
		  		     		  					},
		  		     		  					_addPointerEnd: function (t, i, e) {
		  		     		  						var n = L.bind(function (t) {
		  		     		  							this._handlePointer(t, i)
		  		     		  						}, this);
		  		     		  						t["_imap_touchend" + e] = n, t.addEventListener(this.POINTER_UP, n, !1), t.addEventListener(this.POINTER_CANCEL, n, !1)
		  		     		  					}
		  		     		  				}), L.Map.mergeOptions({
		  		     		  					touchZoom: L.Browser.touch && !L.Browser.android23,
		  		     		  					bounceAtZoomLimits: !0
		  		     		  				}), L.Map.TouchZoom = L.Handler.extend({
		  		     		  					addHooks: function () {
		  		     		  						L.DomEvent.on(this._map._container, "touchstart", this._onTouchStart, this)
		  		     		  					},
		  		     		  					removeHooks: function () {
		  		     		  						L.DomEvent.off(this._map._container, "touchstart", this._onTouchStart, this)
		  		     		  					},
		  		     		  					_onTouchStart: function (t) {
		  		     		  						var i = this._map;
		  		     		  						if (t.touches && 2 === t.touches.length && !i._animatingZoom && !this._zooming) {
		  		     		  							var e = i.mouseEventToContainerPoint(t.touches[0]),
		  		     		  								n = i.mouseEventToContainerPoint(t.touches[1]);
		  		     		  							this._centerPoint = i.getSize()._divideBy(2), this._startLatLng = i.containerPointToLatLng(this._centerPoint), "center" !== i.options.touchZoom && (this._pinchStartLatLng = i.containerPointToLatLng(e.add(n)._divideBy(2))), this._startDist = e.distanceTo(n), this._startZoom = i.getZoom(), this._moved = !1, this._zooming = !0, i.stop(), L.DomEvent.on(document, "touchmove", this._onTouchMove, this).on(document, "touchend", this._onTouchEnd, this), L.DomEvent.preventDefault(t)
		  		     		  						}
		  		     		  					},
		  		     		  					_onTouchMove: function (t) {
		  		     		  						if (t.touches && 2 === t.touches.length && this._zooming) {
		  		     		  							var i = this._map,
		  		     		  								e = i.mouseEventToContainerPoint(t.touches[0]),
		  		     		  								n = i.mouseEventToContainerPoint(t.touches[1]),
		  		     		  								s = e.distanceTo(n) / this._startDist;
		  		     		  							if (this._zoom = i.getScaleZoom(s, this._startZoom), "center" === i.options.touchZoom) {
		  		     		  								if (this._center = this._startLatLng, 1 === s) return
		  		     		  							} else {
		  		     		  								var o = e._add(n)._divideBy(2)._subtract(this._centerPoint);
		  		     		  								if (1 === s && 0 === o.x && 0 === o.y) return;
		  		     		  								this._center = i.unproject(i.project(this._pinchStartLatLng).subtract(o))
		  		     		  							}
		  		     		  							if (i.options.bounceAtZoomLimits || !(this._zoom <= i.getMinZoom() && 1 > s || this._zoom >= i.getMaxZoom() && s > 1)) {
		  		     		  								this._moved || (i._moveStart(!0), this._moved = !0), L.Util.cancelAnimFrame(this._animRequest);
		  		     		  								var a = L.bind(i._move, i, this._center, this._zoom, {
		  		     		  									pinch: !0,
		  		     		  									round: !1
		  		     		  								});
		  		     		  								this._animRequest = L.Util.requestAnimFrame(a, this, !0), L.DomEvent.preventDefault(t)
		  		     		  							}
		  		     		  						}
		  		     		  					},
		  		     		  					_onTouchEnd: function () {
		  		     		  						if (!this._moved || !this._zooming) return void(this._zooming = !1);
		  		     		  						this._zooming = !1, L.Util.cancelAnimFrame(this._animRequest), L.DomEvent.off(document, "touchmove", this._onTouchMove).off(document, "touchend", this._onTouchEnd);
		  		     		  						var t = this._zoom;
		  		     		  						t = this._map._limitZoom(t - this._startZoom > 0 ? Math.ceil(t) : Math.floor(t)), this._map._animateZoom(this._center, t, !0, !0)
		  		     		  					}
		  		     		  				}), L.Map.addInitHook("addHandler", "touchZoom", L.Map.TouchZoom), L.Map.mergeOptions({
		  		     		  					tap: !0,
		  		     		  					tapTolerance: 15
		  		     		  				}), L.Map.Tap = L.Handler.extend({
		  		     		  					addHooks: function () {
		  		     		  						L.DomEvent.on(this._map._container, "touchstart", this._onDown, this)
		  		     		  					},
		  		     		  					removeHooks: function () {
		  		     		  						L.DomEvent.off(this._map._container, "touchstart", this._onDown, this)
		  		     		  					},
		  		     		  					_onDown: function (t) {
		  		     		  						if (t.touches) {
		  		     		  							if (L.DomEvent.preventDefault(t), this._fireClick = !0, t.touches.length > 1) return this._fireClick = !1, void clearTimeout(this._holdTimeout);
		  		     		  							var i = t.touches[0],
		  		     		  								e = i.target;
		  		     		  							this._startPos = this._newPos = new L.Point(i.clientX, i.clientY), e.tagName && "a" === e.tagName.toLowerCase() && L.DomUtil.addClass(e, "imap-active"), this._holdTimeout = setTimeout(L.bind(function () {
		  		     		  								this._isTapValid() && (this._fireClick = !1, this._onUp(), this._simulateEvent("contextmenu", i))
		  		     		  							}, this), 1e3), this._simulateEvent("mousedown", i), L.DomEvent.on(document, {
		  		     		  								touchmove: this._onMove,
		  		     		  								touchend: this._onUp
		  		     		  							}, this)
		  		     		  						}
		  		     		  					},
		  		     		  					_onUp: function (t) {
		  		     		  						if (clearTimeout(this._holdTimeout), L.DomEvent.off(document, {
		  		     		  								touchmove: this._onMove,
		  		     		  								touchend: this._onUp
		  		     		  							}, this), this._fireClick && t && t.changedTouches) {
		  		     		  							var i = t.changedTouches[0],
		  		     		  								e = i.target;
		  		     		  							e && e.tagName && "a" === e.tagName.toLowerCase() && L.DomUtil.removeClass(e, "imap-active"), this._simulateEvent("mouseup", i), this._isTapValid() && this._simulateEvent("click", i)
		  		     		  						}
		  		     		  					},
		  		     		  					_isTapValid: function () {
		  		     		  						return this._newPos.distanceTo(this._startPos) <= this._map.options.tapTolerance
		  		     		  					},
		  		     		  					_onMove: function (t) {
		  		     		  						var i = t.touches[0];
		  		     		  						this._newPos = new L.Point(i.clientX, i.clientY), this._simulateEvent("mousemove", i);
		  		     		  					},
		  		     		  					_simulateEvent: function (t, i) {
		  		     		  						var e = document.createEvent("MouseEvents");
		  		     		  						e._simulated = !0, i.target._simulatedClick = !0, e.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), i.target.dispatchEvent(e)
		  		     		  					}
		  		     		  				}), L.Browser.touch && !L.Browser.pointer && L.Map.addInitHook("addHandler", "tap", L.Map.Tap), L.Map.mergeOptions({
		  		     		  					boxZoom: !0
		  		     		  				}), L.Map.BoxZoom = L.Handler.extend({
		  		     		  					initialize: function (t) {
		  		     		  						this._map = t, this._container = t._container, this._pane = t._panes.overlayPane
		  		     		  					},
		  		     		  					addHooks: function () {
		  		     		  						L.DomEvent.on(this._container, "mousedown", this._onMouseDown, this)
		  		     		  					},
		  		     		  					removeHooks: function () {
		  		     		  						L.DomEvent.off(this._container, "mousedown", this._onMouseDown, this)
		  		     		  					},
		  		     		  					moved: function () {
		  		     		  						return this._moved
		  		     		  					},
		  		     		  					_resetState: function () {
		  		     		  						this._moved = !1
		  		     		  					},
		  		     		  					_onMouseDown: function (t) {
		  		     		  						return !t.shiftKey || 1 !== t.which && 1 !== t.button ? !1 : (this._resetState(), L.DomUtil.disableTextSelection(), L.DomUtil.disableImageDrag(), this._startPoint = this._map.mouseEventToContainerPoint(t), void L.DomEvent.on(document, {
		  		     		  							contextmenu: L.DomEvent.stop,
		  		     		  							mousemove: this._onMouseMove,
		  		     		  							mouseup: this._onMouseUp,
		  		     		  							keydown: this._onKeyDown
		  		     		  						}, this))
		  		     		  					},
		  		     		  					_onMouseMove: function (t) {
		  		     		  						this._moved || (this._moved = !0, this._box = L.DomUtil.create("div", "imap-zoom-box", this._container), L.DomUtil.addClass(this._container, "imap-crosshair"), this._map.fire("boxzoomstart")), this._point = this._map.mouseEventToContainerPoint(t);
		  		     		  						var i = new L.Bounds(this._point, this._startPoint),
		  		     		  							e = i.getSize();
		  		     		  						L.DomUtil.setPosition(this._box, i.min), this._box.style.width = e.x + "px", this._box.style.height = e.y + "px"
		  		     		  					},
		  		     		  					_finish: function () {
		  		     		  						this._moved && (L.DomUtil.remove(this._box), L.DomUtil.removeClass(this._container, "imap-crosshair")), L.DomUtil.enableTextSelection(), L.DomUtil.enableImageDrag(), L.DomEvent.off(document, {
		  		     		  							contextmenu: L.DomEvent.stop,
		  		     		  							mousemove: this._onMouseMove,
		  		     		  							mouseup: this._onMouseUp,
		  		     		  							keydown: this._onKeyDown
		  		     		  						}, this)
		  		     		  					},
		  		     		  					_onMouseUp: function (t) {
		  		     		  						if ((1 === t.which || 1 === t.button) && (this._finish(), this._moved)) {
		  		     		  							setTimeout(L.bind(this._resetState, this), 0);
		  		     		  							var i = new L.LatLngBounds(this._map.containerPointToLatLng(this._startPoint), this._map.containerPointToLatLng(this._point));
		  		     		  							this._map.fitBounds(i).fire("boxzoomend", {
		  		     		  								boxZoomBounds: i
		  		     		  							})
		  		     		  						}
		  		     		  					},
		  		     		  					_onKeyDown: function (t) {
		  		     		  						27 === t.keyCode && this._finish()
		  		     		  					}
		  		     		  				}), L.Map.addInitHook("addHandler", "boxZoom", L.Map.BoxZoom), L.Map.mergeOptions({
		  		     		  					keyboard: !0,
		  		     		  					keyboardPanOffset: 80,
		  		     		  					keyboardZoomOffset: 1
		  		     		  				}), L.Map.Keyboard = L.Handler.extend({
		  		     		  					keyCodes: {
		  		     		  						left: [37],
		  		     		  						right: [39],
		  		     		  						down: [40],
		  		     		  						up: [38],
		  		     		  						zoomIn: [187, 107, 61, 171],
		  		     		  						zoomOut: [189, 109, 54, 173]
		  		     		  					},
		  		     		  					initialize: function (t) {
		  		     		  						this._map = t, this._setPanOffset(t.options.keyboardPanOffset), this._setZoomOffset(t.options.keyboardZoomOffset)
		  		     		  					},
		  		     		  					addHooks: function () {
		  		     		  						var t = this._map._container;
		  		     		  						t.tabIndex <= 0 && (t.tabIndex = "0"), L.DomEvent.on(t, {
		  		     		  							focus: this._onFocus,
		  		     		  							blur: this._onBlur,
		  		     		  							mousedown: this._onMouseDown
		  		     		  						}, this), this._map.on({
		  		     		  							focus: this._addHooks,
		  		     		  							blur: this._removeHooks
		  		     		  						}, this)
		  		     		  					},
		  		     		  					removeHooks: function () {
		  		     		  						this._removeHooks(), L.DomEvent.off(this._map._container, {
		  		     		  							focus: this._onFocus,
		  		     		  							blur: this._onBlur,
		  		     		  							mousedown: this._onMouseDown
		  		     		  						}, this), this._map.off({
		  		     		  							focus: this._addHooks,
		  		     		  							blur: this._removeHooks
		  		     		  						}, this)
		  		     		  					},
		  		     		  					_onMouseDown: function () {
		  		     		  						if (!this._focused) {
		  		     		  							var t = document.body,
		  		     		  								i = document.documentElement,
		  		     		  								e = t.scrollTop || i.scrollTop,
		  		     		  								n = t.scrollLeft || i.scrollLeft;
		  		     		  							this._map._container.focus(), window.scrollTo(n, e)
		  		     		  						}
		  		     		  					},
		  		     		  					_onFocus: function () {
		  		     		  						this._focused = !0, this._map.fire("focus")
		  		     		  					},
		  		     		  					_onBlur: function () {
		  		     		  						this._focused = !1, this._map.fire("blur")
		  		     		  					},
		  		     		  					_setPanOffset: function (t) {
		  		     		  						var i, e, n = this._panKeys = {},
		  		     		  							s = this.keyCodes;
		  		     		  						for (i = 0, e = s.left.length; e > i; i++) n[s.left[i]] = [-1 * t, 0];
		  		     		  						for (i = 0, e = s.right.length; e > i; i++) n[s.right[i]] = [t, 0];
		  		     		  						for (i = 0, e = s.down.length; e > i; i++) n[s.down[i]] = [0, t];
		  		     		  						for (i = 0, e = s.up.length; e > i; i++) n[s.up[i]] = [0, -1 * t]
		  		     		  					},
		  		     		  					_setZoomOffset: function (t) {
		  		     		  						var i, e, n = this._zoomKeys = {},
		  		     		  							s = this.keyCodes;
		  		     		  						for (i = 0, e = s.zoomIn.length; e > i; i++) n[s.zoomIn[i]] = t;
		  		     		  						for (i = 0, e = s.zoomOut.length; e > i; i++) n[s.zoomOut[i]] = -t
		  		     		  					},
		  		     		  					_addHooks: function () {
		  		     		  						L.DomEvent.on(document, "keydown", this._onKeyDown, this)
		  		     		  					},
		  		     		  					_removeHooks: function () {
		  		     		  						L.DomEvent.off(document, "keydown", this._onKeyDown, this)
		  		     		  					},
		  		     		  					_onKeyDown: function (t) {
		  		     		  						if (!(t.altKey || t.ctrlKey || t.metaKey)) {
		  		     		  							var i, e = t.keyCode,
		  		     		  								n = this._map;
		  		     		  							if (e in this._panKeys) {
		  		     		  								if (n._panAnim && n._panAnim._inProgress) return;
		  		     		  								i = this._panKeys[e], t.shiftKey && (i = L.point(i).multiplyBy(3)), n.panBy(i), n.options.maxBounds && n.panInsideBounds(n.options.maxBounds)
		  		     		  							} else if (e in this._zoomKeys) n.setZoom(n.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[e]);
		  		     		  							else {
		  		     		  								if (27 !== e) return;
		  		     		  								n.closePopup()
		  		     		  							}
		  		     		  							L.DomEvent.stop(t)
		  		     		  						}
		  		     		  					}
		  		     		  				}), L.Map.addInitHook("addHandler", "keyboard", L.Map.Keyboard), L.Projection.Mercator = {
		  		     		  					R: 6378137,
		  		     		  					R_MINOR: 6356752.314245179,
		  		     		  					bounds: L.bounds([-20037508.34279, -15496570.73972], [20037508.34279, 18764656.23138]),
		  		     		  					project: function (t) {
		  		     		  						var i = Math.PI / 180,
		  		     		  							e = this.R,
		  		     		  							n = t.lat * i,
		  		     		  							s = this.R_MINOR / e,
		  		     		  							o = Math.sqrt(1 - s * s),
		  		     		  							a = o * Math.sin(n),
		  		     		  							r = Math.tan(Math.PI / 4 - n / 2) / Math.pow((1 - a) / (1 + a), o / 2);
		  		     		  						return n = -e * Math.log(Math.max(r, 1e-10)), new L.Point(t.lng * i * e, n)
		  		     		  					},
		  		     		  					unproject: function (t) {
		  		     		  						for (var i, e = 180 / Math.PI, n = this.R, s = this.R_MINOR / n, o = Math.sqrt(1 - s * s), a = Math.exp(-t.y / n), r = Math.PI / 2 - 2 * Math.atan(a), h = 0, l = .1; 15 > h && Math.abs(l) > 1e-7; h++) i = o * Math.sin(r), i = Math.pow((1 - i) / (1 + i), o / 2), l = Math.PI / 2 - 2 * Math.atan(a * i) - r, r += l;
		  		     		  						return new L.LatLng(r * e, t.x * e / n)
		  		     		  					}
		  		     		  				}, L.CRS.EPSG3395 = L.extend({}, L.CRS.Earth, {
		  		     		  					code: "EPSG:3395",
		  		     		  					projection: L.Projection.Mercator,
		  		     		  					transformation: function () {
		  		     		  						var t = .5 / (Math.PI * L.Projection.Mercator.R);
		  		     		  						return new L.Transformation(t, .5, -t, .5)
		  		     		  					}()
		  		     		  				}), L.GridLayer = L.Layer.extend({
		  		     		  					options: {
		  		     		  						pane: "tilePane",
		  		     		  						tileSize: 256,
		  		     		  						opacity: 1,
		  		     		  						visible: !0,
		  		     		  						zIndex: 2,
		  		     		  						updateWhenIdle: L.Browser.mobile,
		  		     		  						updateInterval: 200,
		  		     		  						attribution: null,
		  		     		  						bounds: null,
		  		     		  						minZoom: 0
		  		     		  					},
		  		     		  					initialize: function (t) {
		  		     		  						t = L.setOptions(this, t)
		  		     		  					},
		  		     		  					onAdd: function () {
		  		     		  						this._initContainer(), this._levels = {}, this._tiles = {}, this._resetView(), this._update()
		  		     		  					},
		  		     		  					beforeAdd: function (t) {
		  		     		  						t._addZoomLimit(this)
		  		     		  					},
		  		     		  					onRemove: function (t) {
		  		     		  						L.DomUtil.remove(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = null
		  		     		  					},
		  		     		  					bringToFront: function () {
		  		     		  						return this._map && (L.DomUtil.toFront(this._container), this._setAutoZIndex(Math.max)), this
		  		     		  					},
		  		     		  					bringToBack: function () {
		  		     		  						return this._map && (L.DomUtil.toBack(this._container), this._setAutoZIndex(Math.min)), this
		  		     		  					},
		  		     		  					getAttribution: function () {
		  		     		  						return this.options.attribution
		  		     		  					},
		  		     		  					visible: function (t) {
		  		     		  						this.options.visible = t, this._container && this.options.visible !== undefined && null !== this.options.visible && (this._container.style.display = t ? "block" : "none")
		  		     		  					},
		  		     		  					getVisible: function () {
		  		     		  						return this.options.visible
		  		     		  					},
		  		     		  					setOpacity: function (t) {
		  		     		  						return this.options.opacity = t, this._updateOpacity(), this
		  		     		  					},
		  		     		  					getOpacity: function () {
		  		     		  						return this.options.opacity
		  		     		  					},
		  		     		  					setZIndex: function (t) {
		  		     		  						return this.options.zIndex = t, this._updateZIndex(), this
		  		     		  					},
		  		     		  					getZIndex: function (t) {
		  		     		  						return this.options.zIndex
		  		     		  					},
		  		     		  					isLoading: function () {
		  		     		  						return this._loading
		  		     		  					},
		  		     		  					redraw: function () {
		  		     		  						return this._map && (this._removeAllTiles(), this._update()), this
		  		     		  					},
		  		     		  					getEvents: function () {
		  		     		  						var t = {
		  		     		  							viewreset: this._resetAll,
		  		     		  							zoom: this._resetView,
		  		     		  							moveend: this._onMoveEnd
		  		     		  						};
		  		     		  						return this.options.updateWhenIdle || (this._onMove || (this._onMove = L.Util.throttle(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
		  		     		  					},
		  		     		  					createTile: function () {
		  		     		  						return document.createElement("div")
		  		     		  					},
		  		     		  					getTileSize: function () {
		  		     		  						var t = this.options.tileSize;
		  		     		  						return t instanceof L.Point ? t : new L.Point(t, t)
		  		     		  					},
		  		     		  					_updateZIndex: function () {
		  		     		  						this._container && this.options.zIndex !== undefined && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
		  		     		  					},
		  		     		  					_setAutoZIndex: function (t) {
		  		     		  						for (var i, e = this.getPane().children, n = -t(-(1 / 0), 1 / 0), s = 0, o = e.length; o > s; s++) i = e[s].style.zIndex, e[s] !== this._container && i && (n = t(n, +i));
		  		     		  						isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
		  		     		  					},
		  		     		  					_updateOpacity: function () {
		  		     		  						if (this._map && !L.Browser.ielt9 && this._map._fadeAnimated) {
		  		     		  							L.DomUtil.setOpacity(this._container, this.options.opacity);
		  		     		  							var t = +new Date,
		  		     		  								i = !1,
		  		     		  								e = !1;
		  		     		  							for (var n in this._tiles) {
		  		     		  								var s = this._tiles[n];
		  		     		  								if (s.current && s.loaded) {
		  		     		  									var o = Math.min(1, (t - s.loaded) / 200);
		  		     		  									L.DomUtil.setOpacity(s.el, o), 1 > o ? i = !0 : (s.active && (e = !0), s.active = !0)
		  		     		  								}
		  		     		  							}
		  		     		  							e && !this._noPrune && this._pruneTiles(), i && (L.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = L.Util.requestAnimFrame(this._updateOpacity, this))
		  		     		  						}
		  		     		  					},
		  		     		  					_initContainer: function () {
		  		     		  						this._container || (this._container = L.DomUtil.create("div", "imap-layer"), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this._container.style.display = this.options.visible ? "block" : "none", this.getPane().appendChild(this._container))
		  		     		  					},
		  		     		  					_updateLevels: function () {
		  		     		  						var t = this._tileZoom,
		  		     		  							i = this.options.maxZoom;
		  		     		  						if (t === undefined) return undefined;
		  		     		  						for (var e in this._levels) this._levels[e].el.children.length || e === t ? this._levels[e].el.style.zIndex = i - Math.abs(t - e) : (L.DomUtil.remove(this._levels[e].el), delete this._levels[e]);
		  		     		  						var n = this._levels[t],
		  		     		  							s = this._map;
		  		     		  						return n || (n = this._levels[t] = {}, n.el = L.DomUtil.create("div", "imap-tile-container imap-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = s.project(s.unproject(s.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, s.getCenter(), s.getZoom()), L.Util.falseFn(n.el.offsetWidth)), this._level = n, n
		  		     		  					},
		  		     		  					_pruneTiles: function () {
		  		     		  						var t, i, e = this._map.getZoom();
		  		     		  						if (e > this.options.maxZoom || e < this.options.minZoom) return this._removeAllTiles();
		  		     		  						for (t in this._tiles) i = this._tiles[t], i.retain = i.current;
		  		     		  						for (t in this._tiles)
		  		     		  							if (i = this._tiles[t], i.current && !i.active) {
		  		     		  								var n = i.coords;
		  		     		  								this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
		  		     		  							}
		  		     		  						for (t in this._tiles) this._tiles[t].retain || this._removeTile(t)
		  		     		  					},
		  		     		  					_removeAllTiles: function () {
		  		     		  						for (var t in this._tiles) this._removeTile(t)
		  		     		  					},
		  		     		  					_resetAll: function () {
		  		     		  						for (var t in this._levels) L.DomUtil.remove(this._levels[t].el), delete this._levels[t];
		  		     		  						this._removeAllTiles(), this._tileZoom = null, this._resetView()
		  		     		  					},
		  		     		  					_retainParent: function (t, i, e, n) {
		  		     		  						var s = Math.floor(t / 2),
		  		     		  							o = Math.floor(i / 2),
		  		     		  							a = e - 1,
		  		     		  							r = s + ":" + o + ":" + a,
		  		     		  							h = this._tiles[r];
		  		     		  						return h && h.active ? (h.retain = !0, !0) : (h && h.loaded && (h.retain = !0), a > n ? this._retainParent(s, o, a, n) : !1)
		  		     		  					},
		  		     		  					_retainChildren: function (t, i, e, n) {
		  		     		  						for (var s = 2 * t; 2 * t + 2 > s; s++)
		  		     		  							for (var o = 2 * i; 2 * i + 2 > o; o++) {
		  		     		  								var a = s + ":" + o + ":" + (e + 1),
		  		     		  									r = this._tiles[a];
		  		     		  								r && r.active ? r.retain = !0 : (r && r.loaded && (r.retain = !0), n > e + 1 && this._retainChildren(s, o, e + 1, n))
		  		     		  							}
		  		     		  					},
		  		     		  					_resetView: function (t) {
		  		     		  						var i = t && (t.pinch || t.flyTo);
		  		     		  						this._setView(this._map.getCenter(), this._map.getZoom(), i, i)
		  		     		  					},
		  		     		  					_animateZoom: function (t) {
		  		     		  						this._setView(t.center, t.zoom, !0, t.noUpdate)
		  		     		  					},
		  		     		  					_setView: function (t, i, e, n) {
		  		     		  						var s = Math.round(i);
		  		     		  						(this.options.maxZoom !== undefined && s > this.options.maxZoom || this.options.minZoom !== undefined && s < this.options.minZoom) && (s = undefined);
		  		     		  						var o = s !== this._tileZoom;
		  		     		  						(!n || o) && (this._tileZoom = s, this._abortLoading && this._abortLoading(), this._updateLevels(), this._resetGrid(), s !== undefined && this._update(t), e || this._pruneTiles(), this._noPrune = !!e), this._setZoomTransforms(t, i)
		  		     		  					},
		  		     		  					_setZoomTransforms: function (t, i) {
		  		     		  						for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i)
		  		     		  					},
		  		     		  					_setZoomTransform: function (t, i, e) {
		  		     		  						var n = this._map.getZoomScale(e, t.zoom),
		  		     		  							s = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
		  		     		  						L.Browser.any3d ? L.DomUtil.setTransform(t.el, s, n) : L.DomUtil.setPosition(t.el, s)
		  		     		  					},
		  		     		  					_resetGrid: function () {
		  		     		  						var t = this._map,
		  		     		  							i = t.options.crs,
		  		     		  							e = this._tileSize = this.getTileSize(),
		  		     		  							n = this._tileZoom,
		  		     		  							s = this._map.getPixelWorldBounds(this._tileZoom);
		  		     		  						s && (this._globalTileRange = this._pxBoundsToTileRange(s)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)]
		  		     		  					},
		  		     		  					_onMoveEnd: function () {
		  		     		  						this._map && !this._map._animatingZoom && this._resetView()
		  		     		  					},
		  		     		  					_getTiledPixelBounds: function (t) {
		  		     		  						var i = this._map,
		  		     		  							e = i.project(t, this._tileZoom).floor(),
		  		     		  							n = i.getSize().divideBy(2);
		  		     		  						return new L.Bounds(e.subtract(n), e.add(n))
		  		     		  					},
		  		     		  					_update: function (t) {
		  		     		  						var i = this._map;
		  		     		  						if (i) {
		  		     		  							var e = i.getZoom();
		  		     		  							if (t === undefined && (t = i.getCenter()), this._tileZoom !== undefined) {
		  		     		  								var n = this._getTiledPixelBounds(t),
		  		     		  									s = this._pxBoundsToTileRange(n),
		  		     		  									o = s.getCenter(),
		  		     		  									a = [];
		  		     		  								for (var r in this._tiles) this._tiles[r].current = !1;
		  		     		  								if (Math.abs(e - this._tileZoom) > 1) return void this._setView(t, e);
		  		     		  								for (var h = s.min.y; h <= s.max.y; h++)
		  		     		  									for (var l = s.min.x; l <= s.max.x; l++) {
		  		     		  										var u = new L.Point(l, h);
		  		     		  										if (u.z = this._tileZoom, this._isValidTile(u)) {
		  		     		  											var c = this._tiles[this._tileCoordsToKey(u)];
		  		     		  											c ? c.current = !0 : a.push(u)
		  		     		  										}
		  		     		  									}
		  		     		  								if (a.sort(function (t, i) {
		  		     		  										return t.distanceTo(o) - i.distanceTo(o)
		  		     		  									}), 0 !== a.length) {
		  		     		  									this._loading || (this._loading = !0, this.fire("loading"));
		  		     		  									var d = document.createDocumentFragment();
		  		     		  									for (l = 0; l < a.length; l++) this._addTile(a[l], d);
		  		     		  									this._level.el.appendChild(d)
		  		     		  								}
		  		     		  							}
		  		     		  						}
		  		     		  					},
		  		     		  					_isValidTile: function (t) {
		  		     		  						var i = this._map.options.crs;
		  		     		  						if (!i.infinite) {
		  		     		  							var e = this._globalTileRange;
		  		     		  							if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1
		  		     		  						}
		  		     		  						if (!this.options.bounds) return !0;
		  		     		  						var n = this._tileCoordsToBounds(t);
		  		     		  						return L.latLngBounds(this.options.bounds).overlaps(n)
		  		     		  					},
		  		     		  					_keyToBounds: function (t) {
		  		     		  						return this._tileCoordsToBounds(this._keyToTileCoords(t))
		  		     		  					},
		  		     		  					_tileCoordsToBounds: function (t) {
		  		     		  						var i = this._map,
		  		     		  							e = this.getTileSize(),
		  		     		  							n = t.scaleBy(e),
		  		     		  							s = n.add(e),
		  		     		  							o = i.wrapLatLng(i.unproject(n, t.z)),
		  		     		  							a = i.wrapLatLng(i.unproject(s, t.z));
		  		     		  						return new L.LatLngBounds(o, a)
		  		     		  					},
		  		     		  					_tileCoordsToKey: function (t) {
		  		     		  						return t.x + ":" + t.y + ":" + t.z
		  		     		  					},
		  		     		  					_keyToTileCoords: function (t) {
		  		     		  						var i = t.split(":"),
		  		     		  							e = new L.Point(+i[0], +i[1]);
		  		     		  						return e.z = +i[2], e
		  		     		  					},
		  		     		  					_removeTile: function (t) {
		  		     		  						var i = this._tiles[t];
		  		     		  						i && (L.DomUtil.remove(i.el), delete this._tiles[t], this.fire("tileunload", {
		  		     		  							tile: i.el,
		  		     		  							coords: this._keyToTileCoords(t)
		  		     		  						}))
		  		     		  					},
		  		     		  					_initTile: function (t) {
		  		     		  						L.DomUtil.addClass(t, "imap-tile");
		  		     		  						var i = this.getTileSize();
		  		     		  						t.style.width = i.x + "px", t.style.height = i.y + "px", t.onselectstart = L.Util.falseFn, t.onmousemove = L.Util.falseFn, L.Browser.ielt9 && this.options.opacity < 1 && L.DomUtil.setOpacity(t, this.options.opacity), L.Browser.android && !L.Browser.android23 && (t.style.WebkitBackfaceVisibility = "hidden")
		  		     		  					},
		  		     		  					_addTile: function (t, i) {
		  		     		  						var e = this._getTilePos(t),
		  		     		  							n = this._tileCoordsToKey(t),
		  		     		  							s = this.createTile(this._wrapCoords(t), L.bind(this._tileReady, this, t));
		  		     		  						this._initTile(s), this.createTile.length < 2 && L.Util.requestAnimFrame(L.bind(this._tileReady, this, t, null, s)), L.DomUtil.setPosition(s, e), this._tiles[n] = {
		  		     		  							el: s,
		  		     		  							coords: t,
		  		     		  							current: !0
		  		     		  						}, i.appendChild(s), this.fire("tileloadstart", {
		  		     		  							tile: s,
		  		     		  							coords: t
		  		     		  						})
		  		     		  					},
		  		     		  					_tileReady: function (t, i, e) {
		  		     		  						if (this._map) {
		  		     		  							i && this.fire("tileerror", {
		  		     		  								error: i,
		  		     		  								tile: e,
		  		     		  								coords: t
		  		     		  							});
		  		     		  							var n = this._tileCoordsToKey(t);
		  		     		  							e = this._tiles[n], e && (e.loaded = +new Date, this._map._fadeAnimated ? (L.DomUtil.setOpacity(e.el, 0), L.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = L.Util.requestAnimFrame(this._updateOpacity, this)) : (e.active = !0, this._pruneTiles()), L.DomUtil.addClass(e.el, "imap-tile-loaded"), this.fire("tileload", {
		  		     		  								tile: e.el,
		  		     		  								coords: t
		  		     		  							}), this._noTilesToLoad() && (this._loading = !1, this.fire("load")))
		  		     		  						}
		  		     		  					},
		  		     		  					_getTilePos: function (t) {
		  		     		  						var i = this._map;
		  		     		  						return t.scaleBy(this.getTileSize(), i.options.crs.code).subtract(this._level.origin)
		  		     		  					},
		  		     		  					_wrapCoords: function (t) {
		  		     		  						var i = new L.Point(this._wrapX ? L.Util.wrapNum(t.x, this._wrapX) : t.x, this._wrapY ? L.Util.wrapNum(t.y, this._wrapY) : t.y);
		  		     		  						return i.z = t.z, i
		  		     		  					},
		  		     		  					_pxBoundsToTileRange: function (t) {
		  		     		  						var i = this.getTileSize();
		  		     		  						return new L.Bounds(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]))
		  		     		  					},
		  		     		  					_noTilesToLoad: function () {
		  		     		  						for (var t in this._tiles)
		  		     		  							if (!this._tiles[t].loaded) return !1;
		  		     		  						return !0
		  		     		  					}
		  		     		  				}), L.gridLayer = function (t) {
		  		     		  					return new L.GridLayer(t)
		  		     		  				}, L.TileLayer = L.GridLayer.extend({
		  		     		  					options: {
		  		     		  						maxZoom: 18,
		  		     		  						subdomains: "abc",
		  		     		  						errorTileUrl: "",
		  		     		  						zoomOffset: 0,
		  		     		  						tileSize: 256,
		  		     		  						maxNativeZoom: null,
		  		     		  						tms: !1,
		  		     		  						zoomReverse: !1,
		  		     		  						detectRetina: !1,
		  		     		  						crossOrigin: !1
		  		     		  					},
		  		     		  					initialize: function (t, i) {
		  		     		  						this._url = t, i = L.setOptions(this, i), i.detectRetina && L.Browser.retina && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomOffset++, i.minZoom = Math.max(0, i.minZoom), i.maxZoom--), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), L.Browser.android || this.on("tileunload", this._onTileRemove)
		  		     		  					},
		  		     		  					setUrl: function (t, i) {
		  		     		  						return this._url = t, i || this.redraw(), this
		  		     		  					},
		  		     		  					createTile: function (t, i) {
		  		     		  						var e = document.createElement("img");
		  		     		  						return L.DomEvent.on(e, "load", L.bind(this._tileOnLoad, this, i, e)), L.DomEvent.on(e, "error", L.bind(this._tileOnError, this, i, e)), this.options.crossOrigin && (e.crossOrigin = ""), e.alt = "", e.src = this.getTileUrl(t.x, t.y, this._getZoomForUrl(), t), e
		  		     		  					},
		  		     		  					getTileUrl: function (t, i, e, n) {
		  		     		  						return L.Util.template(this._url, L.extend({
		  		     		  							r: this.options.detectRetina && L.Browser.retina && this.options.maxZoom > 0 ? "@2x" : "",
		  		     		  							s: this._getSubdomain(n),
		  		     		  							x: t,
		  		     		  							y: this.options.tms ? this._globalTileRange.max.y - i : i,
		  		     		  							z: e
		  		     		  						}, this.options))
		  		     		  					},
		  		     		  					_tileOnLoad: function (t, i) {
		  		     		  						L.Browser.ielt9 ? setTimeout(L.bind(t, this, null, i), 0) : t(null, i)
		  		     		  					},
		  		     		  					setTileUrlFunc: function (t) {
		  		     		  						this.getTileUrl = t
		  		     		  					},
		  		     		  					_tileOnError: function (t, i, e) {
		  		     		  						var n = this.options.errorTileUrl;
		  		     		  						n && (i.src = n), t(e, i)
		  		     		  					},
		  		     		  					getTileSize: function () {
		  		     		  						var t = this._map,
		  		     		  							i = L.GridLayer.prototype.getTileSize.call(this),
		  		     		  							e = this._tileZoom + this.options.zoomOffset,
		  		     		  							n = this.options.maxNativeZoom;
		  		     		  						return null !== n && e > n ? i.divideBy(t.getZoomScale(n, e)).round() : i
		  		     		  					},
		  		     		  					_onTileRemove: function (t) {
		  		     		  						t.tile.onload = null
		  		     		  					},
		  		     		  					_getZoomForUrl: function () {
		  		     		  						var t = this.options,
		  		     		  							i = this._tileZoom;
		  		     		  						return t.zoomReverse && (i = t.maxZoom - i), i += t.zoomOffset, null !== t.maxNativeZoom ? Math.min(i, t.maxNativeZoom) : i
		  		     		  					},
		  		     		  					_getSubdomain: function (t) {
		  		     		  						var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
		  		     		  						return this.options.subdomains[i]
		  		     		  					},
		  		     		  					_abortLoading: function () {
		  		     		  						var t, i;
		  		     		  						for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && (i = this._tiles[t].el, i.onload = L.Util.falseFn, i.onerror = L.Util.falseFn, i.complete || (i.src = L.Util.emptyImageUrl, L.DomUtil.remove(i)))
		  		     		  					}
		  		     		  				}), L.tileLayer = function (t, i) {
		  		     		  					return new L.TileLayer(t, i)
		  		     		  				}, L.GridVectorLayer = L.Layer.extend({
		  		     		  					options: {
		  		     		  						pane: "tilePane",
		  		     		  						tileSize: 256,
		  		     		  						opacity: 1,
		  		     		  						visible: !0,
		  		     		  						zIndex: 2,
		  		     		  						updateWhenIdle: L.Browser.mobile,
		  		     		  						updateInterval: 200,
		  		     		  						attribution: null,
		  		     		  						bounds: null,
		  		     		  						minZoom: 0
		  		     		  					},
		  		     		  					initialize: function (t) {
		  		     		  						t = L.setOptions(this, t)
		  		     		  					},
		  		     		  					onAdd: function () {
		  		     		  						this._initContainer(), this._levels = {}, this._tiles = {}, this._deltTiles = [], this._resetView(), this._update(), this._firstRequest()
		  		     		  					},
		  		     		  					beforeAdd: function (t) {
		  		     		  						t._addZoomLimit(this)
		  		     		  					},
		  		     		  					onRemove: function (t) {
		  		     		  						L.DomUtil.remove(this._container), t._removeZoomLimit(this), this._container = null, this._tileZoom = null
		  		     		  					},
		  		     		  					bringToFront: function () {
		  		     		  						return this._map && (L.DomUtil.toFront(this._container), this._setAutoZIndex(Math.max)), this
		  		     		  					},
		  		     		  					bringToBack: function () {
		  		     		  						return this._map && (L.DomUtil.toBack(this._container), this._setAutoZIndex(Math.min)), this
		  		     		  					},
		  		     		  					getAttribution: function () {
		  		     		  						return this.options.attribution
		  		     		  					},
		  		     		  					visible: function (t) {
		  		     		  						this.options.visible = t, this._container && this.options.visible !== undefined && null !== this.options.visible && (this._container.style.display = t ? "block" : "none")
		  		     		  					},
		  		     		  					getVisible: function () {
		  		     		  						return this.options.visible
		  		     		  					},
		  		     		  					setOpacity: function (t) {
		  		     		  						return this.options.opacity = t, this._updateOpacity(), this
		  		     		  					},
		  		     		  					getOpacity: function () {
		  		     		  						return this.options.opacity
		  		     		  					},
		  		     		  					setZIndex: function (t) {
		  		     		  						return this.options.zIndex = t, this._updateZIndex(), this
		  		     		  					},
		  		     		  					getZIndex: function (t) {
		  		     		  						return this.options.zIndex
		  		     		  					},
		  		     		  					isLoading: function () {
		  		     		  						return this._loading
		  		     		  					},
		  		     		  					redraw: function () {
		  		     		  						return this._map && (this._removeAllTiles(), this._update()), this
		  		     		  					},
		  		     		  					getEvents: function () {
		  		     		  						var t = {
		  		     		  							viewreset: this._resetAll,
		  		     		  							zoom: this._resetView,
		  		     		  							moveend: this._onMoveEnd
		  		     		  						};
		  		     		  						return this.options.updateWhenIdle || (this._onMove || (this._onMove = L.Util.throttle(this._onMoveEnd, this.options.updateInterval, this)), t.move = this._onMove), this._zoomAnimated && (t.zoomanim = this._animateZoom), t
		  		     		  					},
		  		     		  					createTile: function () {
		  		     		  						return document.createElement("div")
		  		     		  					},
		  		     		  					getTileSize: function () {
		  		     		  						var t = this.options.tileSize;
		  		     		  						return t instanceof L.Point ? t : new L.Point(t, t)
		  		     		  					},
		  		     		  					_updateZIndex: function () {
		  		     		  						this._container && this.options.zIndex !== undefined && null !== this.options.zIndex && (this._container.style.zIndex = this.options.zIndex)
		  		     		  					},
		  		     		  					_setAutoZIndex: function (t) {
		  		     		  						for (var i, e = this.getPane().children, n = -t(-(1 / 0), 1 / 0), s = 0, o = e.length; o > s; s++) i = e[s].style.zIndex, e[s] !== this._container && i && (n = t(n, +i));
		  		     		  						isFinite(n) && (this.options.zIndex = n + t(-1, 1), this._updateZIndex())
		  		     		  					},
		  		     		  					_updateOpacity: function () {
		  		     		  						if (this._map && !L.Browser.ielt9 && this._map._fadeAnimated) {
		  		     		  							L.DomUtil.setOpacity(this._container, this.options.opacity);
		  		     		  							var t = +new Date,
		  		     		  								i = !1,
		  		     		  								e = !1;
		  		     		  							for (var n in this._tiles) {
		  		     		  								var s = this._tiles[n];
		  		     		  								if (s.current && s.loaded) {
		  		     		  									var o = Math.min(1, (t - s.loaded) / 200);
		  		     		  									L.DomUtil.setOpacity(s.el, o), 1 > o ? i = !0 : (s.active && (e = !0), s.active = !0)
		  		     		  								}
		  		     		  							}
		  		     		  							e && !this._noPrune && this._pruneTiles(), i && (L.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = L.Util.requestAnimFrame(this._updateOpacity, this))
		  		     		  						}
		  		     		  					},
		  		     		  					_initContainer: function () {
		  		     		  						this._container || (this._container = L.DomUtil.create("div", "imap-layer"), this._updateZIndex(), this.options.opacity < 1 && this._updateOpacity(), this._container.style.display = this.options.visible ? "block" : "none", this.getPane().appendChild(this._container), this._labelCanvas = this._createLabelCanvas(), this._initCanvasRenderer(), this._bindMapContainerEvent())
		  		     		  					},
		  		     		  					_bindMapContainerEvent: function () {
		  		     		  						var t, i = this._map,
		  		     		  							e = i._panes.mapPane.parentNode,
		  		     		  							n = this;
		  		     		  						i._panes.mapPane.parentNode && i.addEventListener("resize", function (i) {
		  		     		  							t = i.newSize, n._labelCanvas.width = t.x, n._labelCanvas.height = t.y, n._labelCanvas.style.width = t.x + "px", n._labelCanvas.style.height = t.y + "px", canvasRenderer.updateSize(t), canvasRenderer.yd()
		  		     		  						}, e), this._map.on("canvas", this._pruneTiles, this)
		  		     		  					},
		  		     		  					_createLabelCanvas: function () {
		  		     		  						var t = this._map,
		  		     		  							i = t.getSize(),
		  		     		  							e = document.createElement("canvas");
		  		     		  						return e.width = i.x, e.height = i.y, e.style.position = "absolute", e.style.zIndex = "19", e.style.width = i.x + "px", e.style.height = i.y + "px", e.style.left = "0px", e.style.top = "0px", this._container.appendChild(e), e
		  		     		  					},
		  		     		  					_initCanvasRenderer: function () {
		  		     		  						canvasRenderer.init(this._map, this._url);
		  		     		  						var t = this._map,
		  		     		  							i = t.getCenter(),
		  		     		  							e = t.getZoom();
		  		     		  						canvasRenderer.Zd(this._container, this._labelCanvas, e, t.getSize(), this._tiles, i.lng, i.lat)
		  		     		  					},
		  		     		  					_normalRequest: function (t, i) {
		  		     		  						var e = this._map,
		  		     		  							n = e.getCenter(),
		  		     		  							i = i || e.getZoom();
		  		     		  						if (canvasRenderer.updateCenter(n.lng, n.lat, i), t.length) {
		  		     		  							var s, o = {};
		  		     		  							for (var a in t) s = t[a].x + ":" + t[a].y + ":" + t[a].z, o[s] = this._tiles[s];
		  		     		  							canvasRenderer.TB(o, i)
		  		     		  						} else canvasRenderer.yd()
		  		     		  					},
		  		     		  					_updateLevels: function () {
		  		     		  						var t = this._tileZoom,
		  		     		  							i = this.options.maxZoom;
		  		     		  						if (t === undefined) return undefined;
		  		     		  						for (var e in this._levels) this._levels[e].el.children.length || e === t ? this._levels[e].el.style.zIndex = i - Math.abs(t - e) : (L.DomUtil.remove(this._levels[e].el), delete this._levels[e]);
		  		     		  						var n = this._levels[t],
		  		     		  							s = this._map;
		  		     		  						return n || (n = this._levels[t] = {}, n.el = L.DomUtil.create("div", "imap-tile-container imap-zoom-animated", this._container), n.el.style.zIndex = i, n.origin = s.project(s.unproject(s.getPixelOrigin()), t).round(), n.zoom = t, this._setZoomTransform(n, s.getCenter(), s.getZoom()), L.Util.falseFn(n.el.offsetWidth)), this._level = n, n
		  		     		  					},
		  		     		  					_pruneTiles: function () {
		  		     		  						var t, i, e = this._map.getZoom();
		  		     		  						if (e > this.options.maxZoom || e < this.options.minZoom) return this._removeAllTiles();
		  		     		  						for (t in this._tiles) i = this._tiles[t], i.retain = i.current;
		  		     		  						for (t in this._tiles)
		  		     		  							if (i = this._tiles[t], i.current && !i.active) {
		  		     		  								var n = i.coords;
		  		     		  								this._retainParent(n.x, n.y, n.z, n.z - 5) || this._retainChildren(n.x, n.y, n.z, n.z + 2)
		  		     		  							}
		  		     		  						for (t in this._tiles) this._tiles[t].retain || (this._removeTile(t), canvasRenderer.Ba.cl(t))
		  		     		  					},
		  		     		  					_removeAllTiles: function () {
		  		     		  						for (var t in this._tiles) this._removeTile(t)
		  		     		  					},
		  		     		  					_resetAll: function () {
		  		     		  						for (var t in this._levels) L.DomUtil.remove(this._levels[t].el), delete this._levels[t];
		  		     		  						this._removeAllTiles(), this._tileZoom = null, this._resetView()
		  		     		  					},
		  		     		  					_retainParent: function (t, i, e, n) {
		  		     		  						var s = Math.floor(t / 2),
		  		     		  							o = Math.floor(i / 2),
		  		     		  							a = e - 1,
		  		     		  							r = s + ":" + o + ":" + a,
		  		     		  							h = this._tiles[r];
		  		     		  						return h && h.active ? (h.retain = !0, !0) : (h && h.loaded && (h.retain = !0), a > n ? this._retainParent(s, o, a, n) : !1)
		  		     		  					},
		  		     		  					_retainChildren: function (t, i, e, n) {
		  		     		  						for (var s = 2 * t; 2 * t + 2 > s; s++)
		  		     		  							for (var o = 2 * i; 2 * i + 2 > o; o++) {
		  		     		  								var a = s + ":" + o + ":" + (e + 1),
		  		     		  									r = this._tiles[a];
		  		     		  								r && r.active ? r.retain = !0 : (r && r.loaded && (r.retain = !0), n > e + 1 && this._retainChildren(s, o, e + 1, n))
		  		     		  							}
		  		     		  					},
		  		     		  					_resetView: function (t) {
		  		     		  						var i = t && (t.pinch || t.flyTo);
		  		     		  						this._setView(this._map.getCenter(), this._map.getZoom(), i, i)
		  		     		  					},
		  		     		  					_animateZoom: function (t) {
		  		     		  						canvasRenderer.init(), this._setView(t.center, t.zoom, !0, t.noUpdate)
		  		     		  					},
		  		     		  					_firstRequest: function (t) {
		  		     		  						var i = this._map,
		  		     		  							e = i.getCenter(),
		  		     		  							t = t || i.getZoom();
		  		     		  						canvasRenderer.Zd(this._container, this._labelCanvas, t, i.getSize(), this._tiles, e.lng, e.lat), canvasRenderer.TB(this._tiles, t)
		  		     		  					},
		  		     		  					_setView: function (t, i, e, n) {
		  		     		  						var s = Math.round(i);
		  		     		  						(this.options.maxZoom !== undefined && s > this.options.maxZoom || this.options.minZoom !== undefined && s < this.options.minZoom) && (s = undefined);
		  		     		  						var o = s !== this._tileZoom;
		  		     		  						(!n || o) && (this._tileZoom = s, this._abortLoading, this._updateLevels(), this._resetGrid(), s !== undefined && this._update(t), this._noPrune = !!e), this._setZoomTransforms(t, i)
		  		     		  					},
		  		     		  					_setZoomTransforms: function (t, i) {
		  		     		  						for (var e in this._levels) this._setZoomTransform(this._levels[e], t, i)
		  		     		  					},
		  		     		  					_setZoomTransform: function (t, i, e) {
		  		     		  						var n = this._map.getZoomScale(e, t.zoom),
		  		     		  							s = t.origin.multiplyBy(n).subtract(this._map._getNewPixelOrigin(i, e)).round();
		  		     		  						L.Browser.any3d ? L.DomUtil.setTransform(t.el, s, n) : L.DomUtil.setPosition(t.el, s)
		  		     		  					},
		  		     		  					_resetGrid: function () {
		  		     		  						var t = this._map,
		  		     		  							i = t.options.crs,
		  		     		  							e = this._tileSize = this.getTileSize(),
		  		     		  							n = this._tileZoom,
		  		     		  							s = this._map.getPixelWorldBounds(this._tileZoom);
		  		     		  						s && (this._globalTileRange = this._pxBoundsToTileRange(s)), this._wrapX = i.wrapLng && !this.options.noWrap && [Math.floor(t.project([0, i.wrapLng[0]], n).x / e.x), Math.ceil(t.project([0, i.wrapLng[1]], n).x / e.y)], this._wrapY = i.wrapLat && !this.options.noWrap && [Math.floor(t.project([i.wrapLat[0], 0], n).y / e.x), Math.ceil(t.project([i.wrapLat[1], 0], n).y / e.y)]
		  		     		  					},
		  		     		  					_onMoveEnd: function () {
		  		     		  						if (this._map && !this._map._animatingZoom) {
		  		     		  							arguments[0].originalEvent;
		  		     		  							if ("move" == arguments[0].type && (canvasRenderer.__isDrawLabel = !1), this._resetView(), "moveend" == arguments[0].type) {
		  		     		  								canvasRenderer.__isDrawLabel = !0;
		  		     		  								var t = /\-?[0-9]+/g,
		  		     		  									i = this._map,
		  		     		  									e = L.DomUtil.getStyle(i._panes.mapPane, "transform").match(t),
		  		     		  									n = -parseInt(e[1]),
		  		     		  									s = -parseInt(e[2]);
		  		     		  								isNaN(n) || isNaN(s) ? (n = -parseInt(e[0]), s = -parseInt(e[1]), L.DomUtil.setPosition(this._labelCanvas, {
		  		     		  									x: n,
		  		     		  									y: s
		  		     		  								})) : L.DomUtil.setPosition(this._labelCanvas, {
		  		     		  									x: n,
		  		     		  									y: s
		  		     		  								}), this._normalRequest([], this._tileZoom), canvasRenderer.updateTiles(this._tiles), this._normalRequest([].concat(this._deltTiles), this._tileZoom), this._deltTiles = []
		  		     		  							}
		  		     		  						}
		  		     		  					},
		  		     		  					_getTiledPixelBounds: function (t) {
		  		     		  						var i = this._map,
		  		     		  							e = i.project(t, this._tileZoom).floor(),
		  		     		  							n = i.getSize();
		  		     		  						return new L.Bounds(e.subtract(n), e.add(n))
		  		     		  					},
		  		     		  					_update: function (t) {
		  		     		  						var i = this._map;
		  		     		  						if (i) {
		  		     		  							var e = i.getZoom();
		  		     		  							if (t === undefined && (t = i.getCenter()), this._tileZoom !== undefined) {
		  		     		  								var n = this._getTiledPixelBounds(t),
		  		     		  									s = this._pxBoundsToTileRange(n),
		  		     		  									o = s.getCenter(),
		  		     		  									a = [];
		  		     		  								for (var r in this._tiles) this._tiles[r].current = !1;
		  		     		  								if (Math.abs(e - this._tileZoom) > 1) return void this._setView(t, e);
		  		     		  								for (var h = s.min.y; h <= s.max.y; h++)
		  		     		  									for (var l = s.min.x; l <= s.max.x; l++) {
		  		     		  										var u = new L.Point(l, h);
		  		     		  										if (u.z = this._tileZoom, this._isValidTile(u)) {
		  		     		  											var c = this._tiles[this._tileCoordsToKey(u)];
		  		     		  											c ? c.current = !0 : a.push(u)
		  		     		  										}
		  		     		  									}
		  		     		  								if (a.sort(function (t, i) {
		  		     		  										return t.distanceTo(o) - i.distanceTo(o)
		  		     		  									}), 0 !== a.length) {
		  		     		  									this._loading || (this._loading = !0, this.fire("loading"));
		  		     		  									var d = document.createDocumentFragment();
		  		     		  									for (l = 0; l < a.length; l++) this._addTile(a[l], this._level.el);
		  		     		  									this._level.el.appendChild(d)
		  		     		  								}
		  		     		  								this._deltTiles = this._deltTiles.concat(a)
		  		     		  							}
		  		     		  						}
		  		     		  					},
		  		     		  					_isValidTile: function (t) {
		  		     		  						var i = this._map.options.crs;
		  		     		  						if (!i.infinite) {
		  		     		  							var e = this._globalTileRange;
		  		     		  							if (!i.wrapLng && (t.x < e.min.x || t.x > e.max.x) || !i.wrapLat && (t.y < e.min.y || t.y > e.max.y)) return !1
		  		     		  						}
		  		     		  						if (!this.options.bounds) return !0;
		  		     		  						var n = this._tileCoordsToBounds(t);
		  		     		  						return L.latLngBounds(this.options.bounds).overlaps(n)
		  		     		  					},
		  		     		  					_keyToBounds: function (t) {
		  		     		  						return this._tileCoordsToBounds(this._keyToTileCoords(t))
		  		     		  					},
		  		     		  					_tileCoordsToBounds: function (t) {
		  		     		  						var i = this._map,
		  		     		  							e = this.getTileSize(),
		  		     		  							n = t.scaleBy(e),
		  		     		  							s = n.add(e),
		  		     		  							o = i.wrapLatLng(i.unproject(n, t.z)),
		  		     		  							a = i.wrapLatLng(i.unproject(s, t.z));
		  		     		  						return new L.LatLngBounds(o, a)
		  		     		  					},
		  		     		  					_tileCoordsToKey: function (t) {
		  		     		  						return t.x + ":" + t.y + ":" + t.z
		  		     		  					},
		  		     		  					_keyToTileCoords: function (t) {
		  		     		  						var i = t.split(":"),
		  		     		  							e = new L.Point(+i[0], +i[1]);
		  		     		  						return e.z = +i[2], e
		  		     		  					},
		  		     		  					_removeTile: function (t) {
		  		     		  						var i = this._tiles[t];
		  		     		  						i && (L.DomUtil.remove(i.el), delete this._tiles[t], this.fire("tileunload", {
		  		     		  							tile: i.el,
		  		     		  							coords: this._keyToTileCoords(t)
		  		     		  						}))
		  		     		  					},
		  		     		  					_initTile: function (t) {
		  		     		  						var i = this.getTileSize();
		  		     		  						t.width = i.x, t.height = i.y, t.style.width = i.x + "px", t.style.height = i.y + "px"
		  		     		  					},
		  		     		  					_getkey: function (t) {
		  		     		  						var i = this._tileCoordsToKey(t),
		  		     		  							e = i.split(","),
		  		     		  							n = L.g.kt(e[1], e[2], e[0]);
		  		     		  						return n
		  		     		  					},
		  		     		  					_addTile: function (t, i) {
		  		     		  						var e = this._getTilePos(t),
		  		     		  							n = this._tileCoordsToKey(t),
		  		     		  							s = this.createTile(this._wrapCoords(t), L.bind(this._tileReady, this, t));
		  		     		  						if (this._initTile(s), this.createTile.length < 2 && L.Util.requestAnimFrame(L.bind(this._tileReady, this, t, null, s)), L.DomUtil.setPosition(s, e), canvasRenderer.S.sa) {
		  		     		  							var o = 18 < t.z ? Math.pow(2, 18 - t.z) : 1;
		  		     		  							s.width = s.height = 2 * this.options.tileSize / o
		  		     		  						}
		  		     		  						this._tiles[n] = {
		  		     		  							el: s,
		  		     		  							coords: t,
		  		     		  							current: !0
		  		     		  						}, i.appendChild(s), this.fire("tileloadstart", {
		  		     		  							tile: s,
		  		     		  							coords: t
		  		     		  						})
		  		     		  					},
		  		     		  					_tileReady: function (t, i, e) {
		  		     		  						if (this._map) {
		  		     		  							i && this.fire("tileerror", {
		  		     		  								error: i,
		  		     		  								tile: e,
		  		     		  								coords: t
		  		     		  							});
		  		     		  							var n = this._tileCoordsToKey(t);
		  		     		  							e = this._tiles[n], e && (e.loaded = +new Date, this._map._fadeAnimated ? (L.DomUtil.setOpacity(e.el, 0), L.Util.cancelAnimFrame(this._fadeFrame), this._fadeFrame = L.Util.requestAnimFrame(this._updateOpacity, this)) : (e.active = !0, this._pruneTiles()), L.DomUtil.addClass(e.el, "imap-tile-loaded"), this.fire("tileload", {
		  		     		  								tile: e.el,
		  		     		  								coords: t
		  		     		  							}), this._noTilesToLoad() && (this._loading = !1, this.fire("load")))
		  		     		  						}
		  		     		  					},
		  		     		  					_getTilePos: function (t) {
		  		     		  						var i = this._map;
		  		     		  						return t.scaleBy(this.getTileSize(), i.options.crs.code).subtract(this._level.origin)
		  		     		  					},
		  		     		  					_wrapCoords: function (t) {
		  		     		  						var i = new L.Point(this._wrapX ? L.Util.wrapNum(t.x, this._wrapX) : t.x, this._wrapY ? L.Util.wrapNum(t.y, this._wrapY) : t.y);
		  		     		  						return i.z = t.z, i
		  		     		  					},
		  		     		  					_pxBoundsToTileRange: function (t) {
		  		     		  						var i = this.getTileSize();
		  		     		  						return new L.Bounds(t.min.unscaleBy(i).floor(), t.max.unscaleBy(i).ceil().subtract([1, 1]))
		  		     		  					},
		  		     		  					_noTilesToLoad: function () {
		  		     		  						for (var t in this._tiles)
		  		     		  							if (!this._tiles[t].loaded) return !1;
		  		     		  						return !0
		  		     		  					}
		  		     		  				}), L.gridLayer = function (t) {
		  		     		  					return new L.GridLayer(t)
		  		     		  				}, L = L || {}, rb = {}, L.k = {
		  		     		  					localStorage: !0,
		  		     		  					Ag: "1.3.12.1",
		  		     		  					key: ""
		  		     		  				},
		  		     		  				function () {
		  		     		  					function B(t) {
		  		     		  						return -1 !== e.indexOf(t)
		  		     		  					}

		  		     		  					function sb(t) {
		  		     		  						L.h = t.h, L.vd = t.vd, t.h = null, L.k.Va = t[2].split(",")[0];
		  		     		  						var i = L.k.Ic = L.k.Va.split(":")[0];
		  		     		  						"https" === i && (L.k.jE = "wss", L.k.Jb = L.k.Jb.replace("http", "https"), L.k.mp = L.k.mp.replace("http", "https"), L.k.Pu = L.k.Pu.replace("http", "https"), L.k.Nu = L.k.Nu.replace("http", "https"), L.k.Vp = L.k.Vp.replace("http", "https"), L.k.bn = L.k.bn.replace("http", "https"));
		  		     		  						var e = window.location.href;
		  		     		  						0 !== e.indexOf("http") && window.parent && window.parent !== window && (e = window.parent.location.href), e = encodeURIComponent(e), L.k.zo = e, L.k.ih = L.k.Va + "/theme/v1.3/markers/" + (L.h.sa ? "b" : "n"), L.k.mode = Number(t[3]), L.k.Af = t[1], L.k.key = t[0], L.k.zz = t[4], L.k.Je = t[5], L.k.vK = t[6]
		  		     		  					}
		  		     		  					config = ["608d75903d29ad471362f8c58c550daf", [115.423411, 39.442758, 117.514625, 41.060816, 116.405285, 39.904989], "http://webapi.amap.com", 1, "1.3", null, "110000", "", !0, !0];
		  		     		  					var e = navigator.userAgent.toLowerCase(),
		  		     		  						z = window,
		  		     		  						ba = document,
		  		     		  						ca = B("ucbrowser"),
		  		     		  						da = B("micromessenger"),
		  		     		  						ea = B("mqqbrowser"),
		  		     		  						D = "ActiveXObject" in z,
		  		     		  						fa = D && !z.XMLHttpRequest,
		  		     		  						ga = D && !ba.querySelector,
		  		     		  						ha = D && !ba.addEventListener,
		  		     		  						ia = D && B("ie 9"),
		  		     		  						la = D && B("rv:11"),
		  		     		  						oa = z.navigator && z.navigator.msPointerEnabled && !!z.navigator.msMaxTouchPoints,
		  		     		  						pa = oa || B("touch") || "ontouchstart" in ba,
		  		     		  						qa = B("webkit"),
		  		     		  						chrome = B("chrome"),
		  		     		  						ra = B("firefox"),
		  		     		  						sa = B("android"),
		  		     		  						ta = -1 !== e.search(/android [123]/),
		  		     		  						ua = sa && !ta,
		  		     		  						va = B("windows phone"),
		  		     		  						wa = "devicePixelRatio" in z && 1 < z.devicePixelRatio || D && "matchMedia" in z && z.matchMedia("(min-resolution:144dpi)") && z.matchMedia("(min-resolution:144dpi)").matches,
		  		     		  						ya = B("ipad;"),
		  		     		  						za = ya && wa,
		  		     		  						Aa = B("ipod touch;"),
		  		     		  						Ba = B("iphone;"),
		  		     		  						Ca = Ba || ya || Aa,
		  		     		  						Da = B("safari"),
		  		     		  						Ea = Ca && -1 === e.search(/ os [456]_/),
		  		     		  						Fa = sa || Ca || va || B("mobile") || "undefined" != typeof orientation,
		  		     		  						Ga = ba.documentElement,
		  		     		  						Ha = D && "transition" in Ga.style,
		  		     		  						Ia = !!ba.createElementNS && !!ba.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
		  		     		  						Ja = !!ba.createElement("canvas").getContext,
		  		     		  						Ka = "WebKitCSSMatrix" in z && "m11" in new window.WebKitCSSMatrix,
		  		     		  						La = "MozPerspective" in Ga.style,
		  		     		  						Ma = "OTransition" in Ga.style,
		  		     		  						Na = Ha || Ka || La || Ma,
		  		     		  						Oa = B("windows nt"),
		  		     		  						Pa = !Fa && Oa && -1 !== e.search(/nt [1-5]\./),
		  		     		  						Qa = B("baidubrowser"),
		  		     		  						Ra;
		  		     		  					if (!(Ra = !Ja)) {
		  		     		  						var Ua;
		  		     		  						if (!(Ua = ia)) {
		  		     		  							var Va;
		  		     		  							if (!(Va = sa && !(ua && (-1 !== e.search(/m351|firefox/) ? 0 : da && ea ? -1 === e.search(/hm note|gt-|m1 note/) : B("gt-n710") && -1 !== e.search(/android( |\/)4\.1/) ? 0 : -1 !== e.search(/ucbrowser\/((9\.[0-5]\.)|(10\.))/) ? -1 === e.search(/huawei( p6|h30)/) : B("baidubrowser") ? -1 === e.search(/hm201|sm-g900/) : -1 !== e.search(/lbbrowser|360|liebao|oupeng|mqqbrowser|sogou|micromessenger|chrome/) || !B("ucbrowser") && -1 !== e.search(/sm-n900|(gt-(n710|i95|p[67]))|(mi( [1-4]|-one))|(huawei( p6|_c8813|h30| g750))|lenovo k900|coolpad_9150/))))) {
		  		     		  								var Wa;
		  		     		  								if (Wa = Ba) {
		  		     		  									var Xa = screen.width;
		  		     		  									Wa = !(Ea && (ca || da ? !(Xa > 375) : Da))
		  		     		  								}
		  		     		  								Va = Wa || Aa || za || va || Fa && ra || Oa && B("version")
		  		     		  							}
		  		     		  							Ua = Va
		  		     		  						}
		  		     		  						Ra = Ua
		  		     		  					}
		  		     		  					var Ya = Ra,
		  		     		  						Za = !1;
		  		     		  					try {
		  		     		  						Za = "undefined" != typeof z.localStorage
		  		     		  					} catch ($a) {}
		  		     		  					var ab = void 0 !== config[8] ? config[8] : !0,
		  		     		  						bb = void 0 !== config[9] ? config[9] : !0;
		  		     		  					config.h = {
		  		     		  						size: 200,
		  		     		  						kp: B("macintosh"),
		  		     		  						EQ: Oa,
		  		     		  						Ns: Qa,
		  		     		  						tT: ea,
		  		     		  						Fk: D,
		  		     		  						td: fa,
		  		     		  						zm: ga,
		  		     		  						Oc: ha,
		  		     		  						gN: D && !la,
		  		     		  						BQ: qa,
		  		     		  						jp: Za,
		  		     		  						Sd: sa,
		  		     		  						ER: ta,
		  		     		  						Zp: ca,
		  		     		  						chrome: chrome,
		  		     		  						QA: ra,
		  		     		  						LS: Ha,
		  		     		  						CQ: Ka,
		  		     		  						jS: La,
		  		     		  						lT: Ma,
		  		     		  						HK: Na,
		  		     		  						Y: Fa,
		  		     		  						iT: Fa && qa,
		  		     		  						ON: Fa && Ka,
		  		     		  						hT: Fa && z.opera,
		  		     		  						zB: Ca,
		  		     		  						uc: pa,
		  		     		  						aC: oa,
		  		     		  						MS: ia,
		  		     		  						sa: wa,
		  		     		  						eh: Ia,
		  		     		  						Gk: Ja,
		  		     		  						RS: !!z.eR,
		  		     		  						yC: Ya,
		  		     		  						hg: ab && !Ya && !Pa,
		  		     		  						Xt: bb && !!z.WebSocket && !Qa,
		  		     		  						xC: !Ia && Fa && Ja
		  		     		  					}, config.h.xu = config.h.Sd ? "android" : config.h.zB ? "ios" : config.h.EQ ? "windows" : config.h.kp ? "mac" : "other";
		  		     		  					var z = window,
		  		     		  						F = "http map anip layers overlay0 brender mrender".split(" ");
		  		     		  					config.vd = "main", config.h.uc && (F += ",touch", config.vd += "t"), config.h.Y || (F += ",mouse", config.vd += "m"), config.vd += "c", config.h.hg && (config.vd += "v", F += ",vectorlayer,overlay", F += ",vp", config.vd += "p"), config[7] && (F += "," + config[7], config.vd += config[7].replace(",", "").replace(eval("/AMap./gi"), "")), F += ",sync", config.bE = F.split(","), window.AMap = window.AMap || {}, window.AMap.Ag = "1.3.12.1", sb(config)
		  		     		  				}(), L.VectorLayer = L.GridVectorLayer.extend({
		  		     		  					options: {
		  		     		  						maxZoom: 18,
		  		     		  						subdomains: "abc",
		  		     		  						errorTileUrl: "",
		  		     		  						zoomOffset: 0,
		  		     		  						tileSize: 256,
		  		     		  						maxNativeZoom: null,
		  		     		  						tms: !1,
		  		     		  						zoomReverse: !1,
		  		     		  						detectRetina: !1,
		  		     		  						crossOrigin: !1
		  		     		  					},
		  		     		  					initialize: function (t, i) {
		  		     		  						this._url = t, i = L.setOptions(this, i), i.detectRetina && L.Browser.retina && i.maxZoom > 0 && (i.tileSize = Math.floor(i.tileSize / 2), i.zoomOffset++, i.minZoom = Math.max(0, i.minZoom), i.maxZoom--), "string" == typeof i.subdomains && (i.subdomains = i.subdomains.split("")), L.Browser.android || this.on("tileunload", this._onTileRemove)
		  		     		  					},
		  		     		  					setUrl: function (t, i) {
		  		     		  						return this._url = t, i || this.redraw(), this
		  		     		  					},
		  		     		  					createTile: function (t, i) {
		  		     		  						var e = document.createElement("canvas");
		  		     		  						return this._canvasCtxCache = e.getContext("2d"), this.options.crossOrigin && (e.crossOrigin = ""), e.alt = "", e.width = "", e
		  		     		  					},
		  		     		  					_drawContext: function (t, i) {
		  		     		  						this._level.zoom, this._tileids
		  		     		  					},
		  		     		  					getTileUrl: function (t, i, e, n) {
		  		     		  						return L.Util.template(this._url, L.extend({
		  		     		  							r: this.options.detectRetina && L.Browser.retina && this.options.maxZoom > 0 ? "@2x" : "",
		  		     		  							s: this._getSubdomain(n),
		  		     		  							x: t,
		  		     		  							y: this.options.tms ? this._globalTileRange.max.y - i : i,
		  		     		  							z: e
		  		     		  						}, this.options))
		  		     		  					},
		  		     		  					_tileOnLoad: function (t, i) {
		  		     		  						L.Browser.ielt9 ? setTimeout(L.bind(t, this, null, i), 0) : t(null, i)
		  		     		  					},
		  		     		  					setTileUrlFunc: function (t) {
		  		     		  						this.getTileUrl = t
		  		     		  					},
		  		     		  					_tileOnError: function (t, i, e) {
		  		     		  						var n = this.options.errorTileUrl;
		  		     		  						n && (i.src = n), t(e, i)
		  		     		  					},
		  		     		  					getTileSize: function () {
		  		     		  						var t = this._map,
		  		     		  							i = L.GridLayer.prototype.getTileSize.call(this),
		  		     		  							e = this._tileZoom + this.options.zoomOffset,
		  		     		  							n = this.options.maxNativeZoom;
		  		     		  						return null !== n && e > n ? i.divideBy(t.getZoomScale(n, e)).round() : i
		  		     		  					},
		  		     		  					_onTileRemove: function (t) {
		  		     		  						t.tile.onload = null
		  		     		  					},
		  		     		  					_getZoomForUrl: function () {
		  		     		  						var t = this.options,
		  		     		  							i = this._tileZoom;
		  		     		  						return t.zoomReverse && (i = t.maxZoom - i), i += t.zoomOffset, null !== t.maxNativeZoom ? Math.min(i, t.maxNativeZoom) : i
		  		     		  					},
		  		     		  					_getSubdomain: function (t) {
		  		     		  						var i = Math.abs(t.x + t.y) % this.options.subdomains.length;
		  		     		  						return this.options.subdomains[i]
		  		     		  					},
		  		     		  					_abortLoading: function () {
		  		     		  						var t, i;
		  		     		  						for (t in this._tiles) this._tiles[t].coords.z !== this._tileZoom && (i = this._tiles[t].el, i.onload = L.Util.falseFn, i.onerror = L.Util.falseFn, i.complete || (i.src = L.Util.emptyImageUrl, L.DomUtil.remove(i)))
		  		     		  					}
		  		     		  				}), L.vectorLayer = function (t, i) {
		  		     		  					return new L.VectorLayer(t, i)
		  		     		  				}, L.__Class = function () {}, L.__Class.extend = L.__Class.extend = function (t) {
		  		     		  					function i() {}

		  		     		  					function e() {
		  		     		  						this.r && (this.r.apply(this, arguments), this.CLASS_NAME && L.BuryPoint.add(this.CLASS_NAME))
		  		     		  					}
		  		     		  					i.prototype = this.prototype;
		  		     		  					var n = new i;
		  		     		  					n.constructor = e, e.prototype = n;
		  		     		  					for (var s in this) this.hasOwnProperty(s) && "prototype" !== s && (e[s] = this[s]);
		  		     		  					return t.ID && (L.__extend(e, t.ID), delete t.ID), t.jb && (L.__extend.apply(null, [n].concat(t.jb)), delete t.jb), t.F && n.F && (t.F = L.__extend({}, n.F, t.F)), L.__extend(n, t), t.toString && (n.toString = t.toString), e.Dd = this.prototype, e
		  		     		  				}, L.__extend = function (t) {
		  		     		  					var i, e, n, s, o = Array.prototype.slice.call(arguments, 1);
		  		     		  					for (e = 0, n = o.length; n > e; e += 1)
		  		     		  						for (i in s = o[e] || {}) Object.prototype.hasOwnProperty.call(s, i) && ("function" == typeof s[i] && "function" == typeof t[i] && (s[i].Sa = t[i]), t[i] = s[i]);
		  		     		  					return t
		  		     		  				}, L.g = {
		  		     		  					Qp: [],
		  		     		  					Wa: 40075016.68557849,
		  		     		  					gL: "ASDFGHJKLQWERTYUIO!sdfghjkl",
		  		     		  					qb: function (t) {
		  		     		  						if ("object" == typeof t) {
		  		     		  							var i, e = {};
		  		     		  							for (i in t) t.hasOwnProperty(i) && (e[i] = L.g.qb(t[i]));
		  		     		  							return e
		  		     		  						}
		  		     		  						return t
		  		     		  					},
		  		     		  					CB: function (t) {
		  		     		  						return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && 1 === t.nodeType && "string" == typeof t.nodeName
		  		     		  					},
		  		     		  					pv: function (t) {
		  		     		  						var i, e, n, s, o;
		  		     		  						for (e = [], n = NaN, s = 0, o = t.length; o > s; s += 1) i = t[s], i = this.gL.indexOf(i), isNaN(n) ? n = 27 * i : (e.push(n + i - 333), n = NaN);
		  		     		  						return e
		  		     		  					},
		  		     		  					CP: function (t, i) {
		  		     		  						for (var e = Math.ceil(i.length / 8), n = 0; e > n; n += 1) {
		  		     		  							var s = 8 * n,
		  		     		  								o = s + 8;
		  		     		  							for (o > i.length && (o = i.length); o > s; s += 1) t(i[s])
		  		     		  						}
		  		     		  					},
		  		     		  					kt: function (t, i, e) {
		  		     		  						var n, s;
		  		     		  						return n = Math.floor(e / 2), s = e - n, n = (1 << n) - 1 << s, s = (1 << s) - 1, [e, t & n | i & s, i & n | t & s]
		  		     		  					},
		  		     		  					gj: function (t) {
		  		     		  						return t ? encodeURIComponent(t) : ""
		  		     		  					},
		  		     		  					gc: function (t, i, e, n) {
		  		     		  						if (e = t[i].i[e], "undefined" == typeof e) return null;
		  		     		  						if (t = t[i].s, "number" == typeof e) return t[e];
		  		     		  						for (;
		  		     		  							"undefined" == typeof e[n.toString()] && (n -= 1, !(3 > n)););
		  		     		  						return n = e[n.toString()], "number" == typeof n ? t[n] : null
		  		     		  					},
		  		     		  					Ph: function (t) {
		  		     		  						for (var i = [], e = 0, n = t.length; n > e; e += 2) i.push(parseInt(t.substr(e, 2), 16));
		  		     		  						return i.push((i.shift() / 255).toFixed(2)), "rgba(" + i.join(",") + ")"
		  		     		  					},
		  		     		  					Ik: function (t) {
		  		     		  						for (var i in t)
		  		     		  							if (t.hasOwnProperty(i)) return !1;
		  		     		  						return !0
		  		     		  					},
		  		     		  					km: function (t, i) {
		  		     		  						return 0 > i ? t : t.slice(0, i).concat(t.slice(i + 1, t.length))
		  		     		  					},
		  		     		  					indexOf: function (t, i) {
		  		     		  						if (t && !t.length) return -1;
		  		     		  						if (t.indexOf) return t.indexOf(i);
		  		     		  						for (var e = 0; e < t.length; e += 1)
		  		     		  							if (t[e] === i) return e;
		  		     		  						return -1
		  		     		  					},
		  		     		  					bind: function (t, i) {
		  		     		  						var e = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
		  		     		  						return function () {
		  		     		  							return t.apply(i, e || arguments)
		  		     		  						}
		  		     		  					},
		  		     		  					Na: function (t, i) {
		  		     		  						return i = i || {}, t.F = L.extend({}, t.F, i), t.F
		  		     		  					},
		  		     		  					LA: function () {
		  		     		  						return !1
		  		     		  					},
		  		     		  					KM: function (t, i) {
		  		     		  						return (t || "") + Math.round(Math.random() * Math.pow(10, i || 6))
		  		     		  					},
		  		     		  					Vb: function () {
		  		     		  						var t = 0;
		  		     		  						return function (i) {
		  		     		  							return i._amap_id || (t += 1, i._amap_id = t), i._amap_id
		  		     		  						}
		  		     		  					}(),
		  		     		  					lM: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
		  		     		  					mj: Date.now ? function () {
		  		     		  						return Date.now()
		  		     		  					} : function () {
		  		     		  						return (new Date).getTime()
		  		     		  					},
		  		     		  					ZS: function (t, i, e, n) {
		  		     		  						var s;
		  		     		  						if (n) {
		  		     		  							var o, a = 0,
		  		     		  								r = this.mj;
		  		     		  							s = function () {
		  		     		  								return o = r(), i > o - a ? !1 : (a = o, void t.apply(e, arguments))
		  		     		  							}
		  		     		  						} else {
		  		     		  							var h, l, u;
		  		     		  							u = function () {
		  		     		  								h = !1, l && (s.apply(e, l), l = !1)
		  		     		  							}, s = function () {
		  		     		  								h ? l = arguments : (h = !0, t.apply(e, arguments), setTimeout(u, i))
		  		     		  							}
		  		     		  						}
		  		     		  						return s
		  		     		  					},
		  		     		  					Ff: function (t, i) {
		  		     		  						return Number(Number(t).toFixed(i || 0))
		  		     		  					},
		  		     		  					isArray: function (t) {
		  		     		  						return Array.isArray ? Array.isArray(t) : "[object Array]" === Object.prototype.toString.call(t)
		  		     		  					},
		  		     		  					KD: function (t) {
		  		     		  						var i = 0;
		  		     		  						if (0 === t.length) return i;
		  		     		  						for (var e, n = 0, s = t.length; s > n; n += 1) e = t.charCodeAt(n), i = (i << 5) - i + e, i &= i;
		  		     		  						return i
		  		     		  					},
		  		     		  					iC: function (t) {
		  		     		  						return "undefined" != typeof JSON && JSON.stringify ? L.g.KD(JSON.stringify(t)) : null
		  		     		  					},
		  		     		  					MT: function (t, i) {
		  		     		  						if (i || !t.hasOwnProperty("_amap_hash")) {
		  		     		  							var e = L.g.iC(t);
		  		     		  							e && (t._amap_hash = e)
		  		     		  						}
		  		     		  						return t._amap_hash
		  		     		  					},
		  		     		  					iepngFix: function (t) {
		  		     		  						function i() {
		  		     		  							for (var t; e.length;) t = e.shift(), window.DD_belatedPNG.fixPng(t);
		  		     		  							n.Wt = !0
		  		     		  						}
		  		     		  						this.QC || (this.QC = [], this.Wt = !1);
		  		     		  						var e = this.QC,
		  		     		  							n = this;
		  		     		  						if ("img" === t.tagName.toLowerCase()) e.push(t);
		  		     		  						else {
		  		     		  							t = t.getElementsByTagName("*");
		  		     		  							for (var s = 0; s < t.length; s += 1) e.push(t[s])
		  		     		  						}
		  		     		  						window.DD_belatedPNG && this.Wt ? setTimeout(function () {
		  		     		  							i()
		  		     		  						}, 100) : this.Wt || L.Ya.load("AMap.FixPng", i)
		  		     		  					},
		  		     		  					ka: function (t) {
		  		     		  						if (L.g.isArray(t))
		  		     		  							if (L.g.isArray(t[0]))
		  		     		  								for (var i = 0; i < t.length; i += 1) t[i] = L.g.ka(t[i]);
		  		     		  							else if (i = typeof t[0], "string" === i || "number" === i) return new L.LngLat(t[0], t[1]);
		  		     		  						return t
		  		     		  					},
		  		     		  					ii: function (t) {
		  		     		  						return L.g.isArray(t) ? new L.Size(t[0], t[1]) : t
		  		     		  					}
		  		     		  				},
		  		     		  				function () {
		  		     		  					function t(t) {
		  		     		  						window.clearTimeout(t)
		  		     		  					}

		  		     		  					function i(t) {
		  		     		  						var i, e, n = ["webkit", "moz", "o", "ms"];
		  		     		  						for (i = 0; i < n.length && !e; i += 1) e = window[n[i] + t];
		  		     		  						return e
		  		     		  					}

		  		     		  					function e(t) {
		  		     		  						var i = +new Date,
		  		     		  							e = Math.max(0, 40 - (i - n));
		  		     		  						return n = i + e, window.setTimeout(t, e)
		  		     		  					}
		  		     		  					var n = 0,
		  		     		  						s = window.requestAnimationFrame || i("RequestAnimationFrame") || e,
		  		     		  						o = window.cancelAnimationFrame || i("CancelAnimationFrame") || i("CancelRequestAnimationFrame") || t;
		  		     		  					L.g.yg = function (t, i, e) {
		  		     		  						return t = L.g.bind(t, i), e ? void t() : s.call(window, t, void 0)
		  		     		  					}, L.g.Go = function (t) {
		  		     		  						t && o.call(window, t)
		  		     		  					}
		  		     		  				}(), L.oa = {
		  		     		  					e: function (t, i, e, n, s) {
		  		     		  						if (this.Xd(t, i, e || this)) return this;
		  		     		  						var o = this.Rf = this.Rf || {};
		  		     		  						return o[t] = o[t] || [], s ? o[t].unshift({
		  		     		  							xa: i,
		  		     		  							he: e || this,
		  		     		  							mh: n
		  		     		  						}) : o[t].push({
		  		     		  							xa: i,
		  		     		  							he: e || this,
		  		     		  							mh: n
		  		     		  						}), "complete" === t && this.Ab && this.q(t), this
		  		     		  					},
		  		     		  					Xd: function (t, i, e) {
		  		     		  						var n = this.Rf;
		  		     		  						if (i && e) {
		  		     		  							if (n && t in n && n[t])
		  		     		  								for (var s = 0; s < n[t].length; s += 1)
		  		     		  									if (n[t][s].xa === i && n[t][s].he === e) return !0;
		  		     		  							return !1
		  		     		  						}
		  		     		  						return n && t in n && n[t] && 0 < n[t].length
		  		     		  					},
		  		     		  					D: function (t, i, e) {
		  		     		  						if (!this.Xd(t)) return this;
		  		     		  						var n = this.Rf;
		  		     		  						if (n && n[t])
		  		     		  							for (var s = 0; s < n[t].length; s += 1)
		  		     		  								if (!(n[t][s].xa !== i && "mv" !== i || e && n[t][s].he !== e)) {
		  		     		  									n[t].splice(s, 1), n[t].length || delete n[t];
		  		     		  									break
		  		     		  								}
		  		     		  						return this
		  		     		  					},
		  		     		  					q: function (t, i) {
		  		     		  						if (!this.Xd(t)) return this;
		  		     		  						for (var e = L.extend({
		  		     		  								type: t
		  		     		  							}, i), n = [].concat(this.Rf[t]), s = 0; s < n.length; s += 1) n[s].xa && (n[s].xa.call(n[s].he || this, e), n[s].mh && this.Rf[t] && this.Rf[t].splice(s, 1));
		  		     		  						return this
		  		     		  					}
		  		     		  				}, L.oa.on || (L.oa.on = L.oa.e), L.oa.off || (L.oa.off = L.oa.D), L.oa.emit || (L.oa.emit = L.oa.q), L.d = {
		  		     		  					get: function (t) {
		  		     		  						return "string" == typeof t ? document.getElementById(t) : t
		  		     		  					},
		  		     		  					bT: function (t, i) {
		  		     		  						var e = document.head || document.getElementsByTagName("head")[0];
		  		     		  						if (e) {
		  		     		  							var n = document.createElement("link");
		  		     		  							n.setAttribute("rel", "stylesheet"), n.setAttribute("type", "text/css"), n.setAttribute("href", t), i ? e.appendChild(n) : e.insertBefore(n, e.firstChild)
		  		     		  						} else document.write("<link rel='stylesheet' href='" + t + "'/>")
		  		     		  					},
		  		     		  					gc: function (t, i) {
		  		     		  						var e = t.style[i];
		  		     		  						return !e && t.currentStyle && (e = t.currentStyle[i]), e && "auto" !== e || !document.defaultView || (e = (e = document.defaultView.getComputedStyle(t, null)) ? e[i] : null), e && "auto" !== e || "height" !== i || (e = t.clientHeight + "px"), e && "auto" !== e || "width" !== i || (e = t.clientWidth + "px"), "auto" === e ? null : e
		  		     		  					},
		  		     		  					tm: function (t) {
		  		     		  						return t ? new L.Size(t.clientWidth || document.body.clientWidth, t.clientHeight || (L.h.Fk && "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight), !0) : void 0
		  		     		  					},
		  		     		  					Ht: function (t) {
		  		     		  						var i, e = 0,
		  		     		  							n = 0,
		  		     		  							s = t,
		  		     		  							o = document.body,
		  		     		  							a = document.documentElement,
		  		     		  							r = L.h.zm;
		  		     		  						do {
		  		     		  							if (e += s.offsetTop || 0, n += s.offsetLeft || 0, e += parseInt(L.d.gc(s, "borderTopWidth"), 10) || 0, n += parseInt(L.d.gc(s, "borderLeftWidth"), 10) || 0, i = L.d.gc(s, "position"), s.offsetParent === o && "absolute" === i) break;
		  		     		  							if ("fixed" === i) {
		  		     		  								e += o.scrollTop || a.scrollTop || 0, n += o.scrollLeft || a.scrollLeft || 0;
		  		     		  								break
		  		     		  							}
		  		     		  							s = s.offsetParent
		  		     		  						} while (s);
		  		     		  						s = t;
		  		     		  						do {
		  		     		  							if (s === o) break;
		  		     		  							e -= s.scrollTop || 0, n -= s.scrollLeft || 0, L.d.XL() || !L.h.BQ && !r || (n += s.scrollWidth - s.clientWidth, r && "hidden" !== L.d.gc(s, "overflow-y") && "hidden" !== L.d.gc(s, "overflow") && (n += 17)), s = s.parentNode
		  		     		  						} while (s);
		  		     		  						return new L.Pixel(n, e)
		  		     		  					},
		  		     		  					XL: function () {
		  		     		  						return L.d.uG || (L.d.uG = !0, L.d.tG = "ltr" === L.d.gc(document.body, "direction")), L.d.tG
		  		     		  					},
		  		     		  					create: function (t, i, e) {
		  		     		  						return t = document.createElement(t), e && (t.className = e), i && i.appendChild(t), t
		  		     		  					},
		  		     		  					zA: function () {
		  		     		  						document.selection && document.selection.empty && document.selection.empty(), this.MI || (this.MI = document.onselectstart, document.onselectstart = L.g.LA)
		  		     		  					},
		  		     		  					FA: function () {},
		  		     		  					Ek: function (t, i) {
		  		     		  						return t && i ? 0 < t.className.length && RegExp("(^|\\s)" + i + "(\\s|$)").test(t.className) : void 0
		  		     		  					},
		  		     		  					Qb: function (t, i) {
		  		     		  						t && i && !L.d.Ek(t, i) && (t.className += (t.className ? " " : "") + i)
		  		     		  					},
		  		     		  					Nb: function (t, i) {
		  		     		  						function e(t, e) {
		  		     		  							return e === i ? "" : t
		  		     		  						}
		  		     		  						t && i && (t.className = t.className.replace(/(\S+)\s*/g, e).replace(/(^\s+|\s+$)/, ""))
		  		     		  					},
		  		     		  					RM: function (t, i) {
		  		     		  						return 1 === i ? "" : "opacity" in t.style ? "opacity:" + i : 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * i) + ")'" : "filter:alpha(opacity=" + Math.ceil(100 * i) + ")"
		  		     		  					},
		  		     		  					mi: function (t, i) {
		  		     		  						if ("opacity" in t.style) t.style.opacity = i;
		  		     		  						else if ("filter" in t.style) {
		  		     		  							t = t.childNodes.length ? t.childNodes : [t];
		  		     		  							for (var e = Math.round(100 * i), n = 0; n < t.length; n += 1) t[n].childNodes && t[n].childNodes.length ? this.mi(t[n], i) : t[n].style && (t[n].style.filter = "", 100 !== e && (t[n].style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + e + ")"))
		  		     		  						}
		  		     		  					},
		  		     		  					fv: function (t) {
		  		     		  						for (var i = document.documentElement.style, e = 0; e < t.length; e += 1)
		  		     		  							if (t[e] in i) return t[e];
		  		     		  						return !1
		  		     		  					},
		  		     		  					iB: function (t) {
		  		     		  						var i = L.h.CQ;
		  		     		  						return "translate" + (i ? "3d" : "") + "(" + t.x + "px," + t.y + "px" + ((i ? ",0" : "") + ")")
		  		     		  					},
		  		     		  					AS: function (t, i) {
		  		     		  						return L.d.iB(i.add(i.multiplyBy(-1 * t))) + (" scale(" + t + ") ")
		  		     		  					},
		  		     		  					IT: function (t, i, e) {
		  		     		  						t.Od = i, !e && L.h.HK ? (i = L.d.iB(i), e = t.style[L.d.Zc].split("rotate"), 1 < e.length ? (e[0] = i, t.style[L.d.Zc] = e.join("rotate")) : t.style[L.d.Zc] = i, L.h.ON && (t.style.WebkitBackfaceVisibility = "hidden")) : (t.style.left = i.x + "px", t.style.top = i.y + "px")
		  		     		  					},
		  		     		  					dd: function (t) {
		  		     		  						return t.Od || (t.Od = t.style.left ? new L.Pixel(parseInt(t.style.left), parseInt(t.style.top)) : new L.Pixel(0, 0)), t.Od
		  		     		  					},
		  		     		  					GT: function (t, i) {
		  		     		  						t = t instanceof Array ? t : [t];
		  		     		  						for (var e = 0; e < t.length; e += 1) t[e].style.cssText = i
		  		     		  					},
		  		     		  					pD: function (t, i) {
		  		     		  						return ";" !== i[i.length - 1] && (i += ";"), i.toLowerCase() !== t.style.cssText.replace(/ /g, "").toLowerCase() ? (t.style.cssText = i, !0) : !1
		  		     		  					},
		  		     		  					Z: function (t, i) {
		  		     		  						t = t instanceof Array ? t : [t];
		  		     		  						for (var e = 0; e < t.length; e += 1)
		  		     		  							for (var n in i) i.hasOwnProperty(n) && (t[e].style[n] = i[n]);
		  		     		  						return this
		  		     		  					},
		  		     		  					SO: function (t) {
		  		     		  						for (; t.childNodes.length;) t.removeChild(t.childNodes[0])
		  		     		  					},
		  		     		  					remove: function (t) {
		  		     		  						t && t.parentNode && t.parentNode.removeChild(t)
		  		     		  					},
		  		     		  					rotate: function (t, i, e) {
		  		     		  						var n = L.d.Zc;
		  		     		  						if (e = e || {
		  		     		  								x: t.clientWidth / 2,
		  		     		  								y: t.clientHeight / 2
		  		     		  							}, n) {
		  		     		  							var s;
		  		     		  							s = "" + (" translate(" + (e.x - t.clientWidth / 2) + "px," + (e.y - t.clientHeight / 2) + "px)"), s = s + (" rotate(" + i + "deg)") + (" translate(" + (t.clientWidth / 2 - e.x) + "px," + (t.clientHeight / 2 - e.y) + "px)"), t.style[n] = s
		  		     		  						} else n = Math.cos(i * Math.PI / 180), i = Math.sin(i * Math.PI / 180), t.style.filter = "progid:DXImageTransform.Microsoft.Matrix()", 0 < t.filters.length && (t = t.filters.item(0), t.PQ = -e.x * n + e.y * i + e.x, t.QQ = -e.x * i - e.y * n + e.y, t.M11 = t.M22 = n, t.M12 = -(t.M21 = i))
		  		     		  					},
		  		     		  					VM: function (t, i, e) {
		  		     		  						var n = L.d.Zc;
		  		     		  						if (e = e || {
		  		     		  								x: t.clientWidth / 2,
		  		     		  								y: t.clientHeight / 2
		  		     		  							}, n) {
		  		     		  							var s;
		  		     		  							return s = "" + (" translate(" + (e.x - t.clientWidth / 2) + "px," + (e.y - t.clientHeight / 2) + "px)"), s = s + (" rotate(" + i + "deg)") + (" translate(" + (t.clientWidth / 2 - e.x) + "px," + (t.clientHeight / 2 - e.y) + "px)"), L.d.al[n] + ":" + s
		  		     		  						}
		  		     		  						return ""
		  		     		  					},
		  		     		  					Rm: function (t, i, e) {
		  		     		  						t.width = i, t.height = e
		  		     		  					},
		  		     		  					getElementsByClassName: function (t, i, e) {
		  		     		  						if (i = i || "*", e = e || document, e.getElementsByClassName) return e.getElementsByClassName(t);
		  		     		  						i = e.getElementsByTagName(i), t = RegExp("(^|\\s)" + t + "(\\s|$)"), e = [];
		  		     		  						for (var n, s = 0; s < i.length; s++) n = i[s], t.test(n.className) && e.push(n);
		  		     		  						return e
		  		     		  					},
		  		     		  					fillText: function (t, i) {
		  		     		  						return t ? (void 0 !== t.textContent ? t.textContent = i : void 0 !== t.innerText ? t.innerText = i : t.innerHTML = i, t) : void 0
		  		     		  					}
		  		     		  				},
		  		     		  				function () {
		  		     		  					var t, i = L.d.fv(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]);
		  		     		  					L.extend(L.d, {
		  		     		  						zA: function () {
		  		     		  							if (L.l.e(window, "selectstart", L.l.preventDefault), i) {
		  		     		  								var e = document.documentElement.style;
		  		     		  								"none" !== e[i] && (t = e[i], e[i] = "none")
		  		     		  							}
		  		     		  						},
		  		     		  						FA: function () {
		  		     		  							L.l.D(window, "selectstart", L.l.preventDefault), i && "none" !== t && (document.documentElement.style[i] = t, t = "none")
		  		     		  						},
		  		     		  						SL: function () {
		  		     		  							L.l.e(window, "dragstart", L.l.preventDefault)
		  		     		  						},
		  		     		  						mM: function () {
		  		     		  							L.l.D(window, "dragstart", L.l.preventDefault)
		  		     		  						}
		  		     		  					})
		  		     		  				}(), L.d.Zc = L.d.fv(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]), L.d.al = {
		  		     		  					transform: "transform",
		  		     		  					WebkitTransform: "-webkit-transform",
		  		     		  					OTransform: "-o-transform",
		  		     		  					MozTransform: "-moz-transform",
		  		     		  					msTransform: "-ms-transform"
		  		     		  				}, L.d.nq = L.d.fv(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]), L.d.ZQ = "webkitTransition" === L.d.nq || "OTransition" === L.d.nq ? L.d.nq + "End" : "transitionend", L.g.Qm = window.Qm ? window.Qm.bind(window) : function (t) {
		  		     		  					var i = Date.now();
		  		     		  					return setTimeout(function () {
		  		     		  						t({
		  		     		  							xA: !1,
		  		     		  							ZD: function () {
		  		     		  								return Math.max(0, 70 - (Date.now() - i))
		  		     		  							}
		  		     		  						})
		  		     		  					}, 0)
		  		     		  				}, L.g.cm = window.cm ? window.cm.bind(window) : function (t) {
		  		     		  					clearTimeout(t)
		  		     		  				},
		  		     		  				function (t) {
		  		     		  					var i = t.__Class.extend({
		  		     		  						jb: [t.oa],
		  		     		  						r: function () {}
		  		     		  					});
		  		     		  					t.mn = new i
		  		     		  				}(L),
		  		     		  				function (t) {
		  		     		  					var i = t.Class.extend({
		  		     		  						jb: [t.oa],
		  		     		  						r: function () {
		  		     		  							this.qH()
		  		     		  						},
		  		     		  						qH: function () {
		  		     		  							t.mn && t.mn.e("vecTileParsed.buildings", this.kH, this)
		  		     		  						},
		  		     		  						FB: function (t) {
		  		     		  							return t.map.Ax
		  		     		  						},
		  		     		  						rD: function (t, i) {
		  		     		  							if (i) {
		  		     		  								var e = i.map;
		  		     		  								e && e.Ax !== t && (e.Ax = t, e.set("display", 0))
		  		     		  							}
		  		     		  						},
		  		     		  						iR: function () {},
		  		     		  						xx: function (t, i) {
		  		     		  							for (var e = 0, n = t.length; n > e; e++) {
		  		     		  								var s = t[e].Ss;
		  		     		  								0 > i.indexOf(s) && i.push(s)
		  		     		  							}
		  		     		  						},
		  		     		  						PA: function (t) {
		  		     		  							if (!t) return null;
		  		     		  							t = t.getLayers();
		  		     		  							for (var i = 0, e = t.length; e > i; i++)
		  		     		  								if (t[i] && t[i] instanceof K) return t[i];
		  		     		  							return null
		  		     		  						},
		  		     		  						xM: function (t) {
		  		     		  							if (t = this.PA(t)) {
		  		     		  								if (!(t = t.get("tiles", null, !0))) return null;
		  		     		  								if (t = t[0], !t || !t.length) return null;
		  		     		  								for (var i = [], e = 0, n = t.length; n > e; e++) {
		  		     		  									var s = t[e];
		  		     		  									s.Ue && s.Ue.Ts && this.xx(s.Ue.Ts, i)
		  		     		  								}
		  		     		  								return i
		  		     		  							}
		  		     		  						},
		  		     		  						kH: function (t) {
		  		     		  							if (t.hv && t.hv.Ue && (t = t.hv.Ue.Ts)) {
		  		     		  								var i = [];
		  		     		  								this.xx(t, i), this.q("vecTileParsed.builds.found", {
		  		     		  									aL: i
		  		     		  								})
		  		     		  							}
		  		     		  						}
		  		     		  					});
		  		     		  					t.Qe = new i
		  		     		  				}(L), L.Pixel = L.Class.extend({
		  		     		  					initialize: function (t, i, e) {
		  		     		  						if (isNaN(t) || isNaN(i)) throw "Invalid Object: Pixel(" + t + ", " + i + ")";
		  		     		  						this.x = e ? Math.round(t) : Number(t), this.y = e ? Math.round(i) : Number(i)
		  		     		  					},
		  		     		  					getX: function () {
		  		     		  						return this.x
		  		     		  					},
		  		     		  					getY: function () {
		  		     		  						return this.y
		  		     		  					},
		  		     		  					add: function (t, i) {
		  		     		  						return new L.Pixel(this.x + t.x, this.y + t.y, i)
		  		     		  					},
		  		     		  					subtract: function (t, i) {
		  		     		  						return new L.Pixel(this.x - t.x, this.y - t.y, i)
		  		     		  					},
		  		     		  					divideBy: function (t, i) {
		  		     		  						return new L.Pixel(this.x / t, this.y / t, i)
		  		     		  					},
		  		     		  					multiplyBy: function (t, i) {
		  		     		  						return new L.Pixel(this.x * t, this.y * t, i)
		  		     		  					},
		  		     		  					distance: function (t) {
		  		     		  						var i = t.x - this.x;
		  		     		  						return t = t.y - this.y, Math.sqrt(i * i + t * t)
		  		     		  					},
		  		     		  					floor: function () {
		  		     		  						return new L.Pixel(Math.floor(this.x), Math.floor(this.y))
		  		     		  					},
		  		     		  					round: function () {
		  		     		  						return new L.Pixel(this.x, this.y, !0)
		  		     		  					},
		  		     		  					equals: function (t) {
		  		     		  						return t instanceof L.Pixel && this.x === t.x && this.y === t.y
		  		     		  					},
		  		     		  					qb: function () {
		  		     		  						return new L.Pixel(this.x, this.y)
		  		     		  					},
		  		     		  					toString: function () {
		  		     		  						return this.x + "," + this.y
		  		     		  					}
		  		     		  				}), L.PixelBounds = L.Class.extend({
		  		     		  					initialize: function () {
		  		     		  						if (2 === arguments.length) this.kb = arguments[0], this.Mb = arguments[1];
		  		     		  						else {
		  		     		  							if (!(1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length)) throw "Invalid Object: PixelBounds(" + arguments.join(",") + ")";
		  		     		  							var t = arguments[0] instanceof Array ? arguments[0] : arguments;
		  		     		  							this.kb = new L.Pixel(t[0], t[1]), this.Mb = new L.Pixel(t[2], t[3])
		  		     		  						}
		  		     		  					},
		  		     		  					getCenter: function (t) {
		  		     		  						return new L.Pixel((this.kb.x + this.Mb.x) / 2, (this.kb.y + this.Mb.y) / 2, t)
		  		     		  					},
		  		     		  					contains: function (t) {
		  		     		  						var i;
		  		     		  						return t instanceof L.PixelBounds ? (i = t.kb, t = t.Mb) : i = t, i.x > this.kb.x && t.x < this.Mb.x && i.y > this.kb.y && t.y < this.Mb.y
		  		     		  					},
		  		     		  					getWidth: function () {
		  		     		  						return this.Mb.x - this.kb.x
		  		     		  					},
		  		     		  					getHeight: function () {
		  		     		  						return this.Mb.y - this.kb.y
		  		     		  					},
		  		     		  					intersects: function (t) {
		  		     		  						var i = this.kb,
		  		     		  							e = this.Mb,
		  		     		  							n = t.kb;
		  		     		  						t = t.Mb;
		  		     		  						var s = t.y >= i.y - 20 && n.y <= e.y + 20;
		  		     		  						return t.x >= i.x - 20 && n.x <= e.x + 20 && s
		  		     		  					},
		  		     		  					toString: function () {
		  		     		  						return this.kb + ";" + this.Mb
		  		     		  					},
		  		     		  					qb: function () {
		  		     		  						return new L.PixelBounds(this.kb.qb(), this.Mb.qb())
		  		     		  					}
		  		     		  				}), L.xn = L.Class.extend({
		  		     		  					initialize: function (t, i, e, n) {
		  		     		  						this.nw = t, this.uw = i, this.xw = e, this.Pw = n
		  		     		  					},
		  		     		  					transform: function (t, i) {
		  		     		  						return this.sz(t.qb(), i)
		  		     		  					},
		  		     		  					sz: function (t, i) {
		  		     		  						return i = i || 1, t.x = i * (this.nw * t.x + this.uw), t.y = i * (this.xw * t.y + this.Pw), t
		  		     		  					},
		  		     		  					pQ: function (t, i) {
		  		     		  						return i = i || 1, new L.Pixel((t.x / i - this.uw) / this.nw, (t.y / i - this.Pw) / this.xw)
		  		     		  					}
		  		     		  				}), L.Dg = L.Class.extend({
		  		     		  					initialize: function (t) {
		  		     		  						this.gq = t.MAX_LATITUDE || 85.0511287798, t.project && t.unproject && (this.project = t.project, this.unproject = t.unproject)
		  		     		  					}
		  		     		  				}), L.Dg.Rv = {
		  		     		  					project: function (t) {
		  		     		  						return new L.Pixel(t.B, t.G)
		  		     		  					},
		  		     		  					unproject: function (t, i) {
		  		     		  						return new L.LngLat(t.x, t.y, i)
		  		     		  					}
		  		     		  				}, L.Dg.XE = new L.Dg({
		  		     		  					MAX_LATITUDE: 85.0511287798,
		  		     		  					project: function (t) {
		  		     		  						var i = Math.PI / 180,
		  		     		  							e = this.gq,
		  		     		  							e = Math.max(Math.min(e, t.G), -e);
		  		     		  						return t = t.B * i, i = Math.log(Math.tan(Math.PI / 4 + e * i / 2)), new L.Pixel(t, i, !1)
		  		     		  					},
		  		     		  					unproject: function (t, i) {
		  		     		  						var e = 180 / Math.PI;
		  		     		  						return new L.LngLat(t.x * e, (2 * Math.atan(Math.exp(t.y)) - Math.PI / 2) * e, i)
		  		     		  					}
		  		     		  				}), L.Dg.Sv = {
		  		     		  					gq: 85.0840591556,
		  		     		  					kq: 6356752.3142,
		  		     		  					jq: 6378137,
		  		     		  					project: function (t) {
		  		     		  						var i = Math.PI / 180,
		  		     		  							e = this.gq,
		  		     		  							n = Math.max(Math.min(e, t.G), -e),
		  		     		  							s = this.jq,
		  		     		  							e = this.kq;
		  		     		  						return t = t.B * i * s, i *= n, s = e / s, s = Math.sqrt(1 - s * s), n = s * Math.sin(i), n = Math.pow((1 - n) / (1 + n), .5 * s), i = -e * Math.log(Math.tan(.5 * (.5 * Math.PI - i)) / n), new L.Pixel(t, i)
		  		     		  					},
		  		     		  					unproject: function (t, i) {
		  		     		  						for (var e = 180 / Math.PI, n = this.jq, s = this.kq, o = t.x * e / n, n = s / n, n = Math.sqrt(1 - n * n), s = Math.exp(-t.y / s), a = Math.PI / 2 - 2 * Math.atan(s), r = 15, h = .1; 1e-7 < Math.abs(h) && (r -= 1, r > 0);) h = n * Math.sin(a), h = Math.PI / 2 - 2 * Math.atan(s * Math.pow((1 - h) / (1 + h), .5 * n)) - a, a += h;
		  		     		  						return new L.LngLat(o, a * e, i)
		  		     		  					}
		  		     		  				}, L.Pe = {}, L.Pe.hn = {
		  		     		  					hp: function (t, i) {
		  		     		  						var e = this.hd.project(t),
		  		     		  							n = this.scale(i);
		  		     		  						return this.Zm.sz(e, n)
		  		     		  					},
		  		     		  					yu: function (t, i, e) {
		  		     		  						return i = this.scale(i), t = this.Zm.pQ(t, i), this.hd.unproject(t, e)
		  		     		  					},
		  		     		  					project: function (t) {
		  		     		  						return this.hd.project(t)
		  		     		  					},
		  		     		  					scale: function (t) {
		  		     		  						return 256 * Math.pow(2, t)
		  		     		  					},
		  		     		  					If: function (t) {
		  		     		  						return 12756274 * Math.PI / (256 * Math.pow(2, t))
		  		     		  					}
		  		     		  				}, L.Pe.xE = L.extend({}, L.Pe.hn, {
		  		     		  					code: "EPSG:3857",
		  		     		  					hd: L.Dg.XE,
		  		     		  					Zm: new L.xn(.5 / Math.PI, .5, -.5 / Math.PI, .5),
		  		     		  					project: function (t) {
		  		     		  						return this.hd.project(t).multiplyBy(6378137)
		  		     		  					}
		  		     		  				}), L.S = {}, L.S.ye = L.Class.extend({
		  		     		  					jb: [L.oa, L.Kc],
		  		     		  					initialize: function (t, i) {
		  		     		  						this.ec = t, this.vc = [3, 18], this.vq = L.g.Vb(this), t && this.cd(["opacity", "visible", "zIndex", "zooms"], t), this.w = i, this.J("display", i)
		  		     		  					},
		  		     		  					ef: function () {
		  		     		  						this.Hc && this.kA();
		  		     		  						var t = this.Ca;
		  		     		  						if (t) {
		  		     		  							if (t.length)
		  		     		  								for (var i = 0; i < t.length; i += 1) t[i].parentNode && t[i].parentNode.removeChild(t[i]);
		  		     		  							else t.parentNode && t.parentNode.removeChild(t);
		  		     		  							this.Ca = null
		  		     		  						}
		  		     		  						this.ec.ef && this.ec.ef(), this.ec.Cf = !1, this.ec.S = null, this.bl(), this.P && (this.P.bl(), this.P.K = null, this.P.Un = null, this.P.w = null, this.P.bl(), this.P.Ew && this.P.Ew(), this.P = null)
		  		     		  					},
		  		     		  					ia: function (t, i) {
		  		     		  						this.ec.q(t, i)
		  		     		  					},
		  		     		  					visibleChanged: function () {
		  		     		  						this.set("display", 0)
		  		     		  					},
		  		     		  					zIndexChanged: function () {
		  		     		  						this.set("display", 0)
		  		     		  					},
		  		     		  					Vu: function (t) {
		  		     		  						L.d.mi(t, this.opacity)
		  		     		  					},
		  		     		  					opacityChanged: function () {
		  		     		  						var t = this.get("opacity");
		  		     		  						if (this.opacity = Math.min(Math.max(0, t), 1), t = this.Ca)
		  		     		  							if (t.length)
		  		     		  								for (var i = 0; i < t.length; i += 1) this.Vu(t[i]);
		  		     		  							else this.Vu(t)
		  		     		  					},
		  		     		  					Yo: function () {
		  		     		  						var t = this.get("bounds");
		  		     		  						if (t) {
		  		     		  							if (t instanceof L.Bounds) {
		  		     		  								var i = t.getNorthWest(),
		  		     		  									e = t.getSouthEast(),
		  		     		  									n = this.w.wb(new L.LngLat(180, 0)).x,
		  		     		  									s = this.w.wb(i),
		  		     		  									o = this.w.wb(e),
		  		     		  									a = this.w.get("center");
		  		     		  								i.B > e.B ? 0 < a.B ? o.x += n : s.x -= n : 0 < a.B ? (0 > i.B && (s.x += n), 0 > e.B && (o.x += n)) : (0 < i.B && (s.x -= n), 0 < e.B && (o.x -= n)), this.j = [s.x, s.y, o.x, o.y]
		  		     		  							}
		  		     		  							return t instanceof L.PixelBounds && (this.j = [t.kb.x, t.kb.y, t.Mb.x, t.Mb.y]), this.j
		  		     		  						}
		  		     		  						return null
		  		     		  					}
		  		     		  				}), ec.prototype.qb = function () {
		  		     		  					return new ec(this.z, this.x, this.y)
		  		     		  				}, ec.prototype.toString = function () {
		  		     		  					return [this.z, this.x, this.y].join("/")
		  		     		  				}, L.of = function (t, i) {
		  		     		  					this.ta = t, this.key = t.toString(), this.url = i
		  		     		  				}, L.nf = ec, L.S.of = L.S.ye.extend({
		  		     		  					r: function (t, i) {
		  		     		  						arguments.callee.Sa.apply(this, arguments), this.J("tileSize", t), this.J("tiles", t), this.cd(["zooms", "type", "detectRetina", "tileFun", "errorUrl"], t), this.J("lang", i, !0);
		  		     		  						var e = "overlayer" === t.get("type");
		  		     		  						this.Sf = !e && !L.h.Y, (L.h.Oc || L.h.lU) && (this.Sf = !1);
		  		     		  						var n = i.get("size"),
		  		     		  							n = n.width * n.height / 65536;
		  		     		  						L.h.sa && L.h.Y && n > 9 && (this.Sf = !1), this.Wf = !e, this.Xf = !e, this.J("reload", t)
		  		     		  					},
		  		     		  					langChanged: function () {
		  		     		  						this.set("reload"), this.ec.Gu()
		  		     		  					},
		  		     		  					reloadChanged: function () {
		  		     		  						this.set("display", 0)
		  		     		  					},
		  		     		  					tileFunChanged: function () {
		  		     		  						this.set("reload")
		  		     		  					},
		  		     		  					ei: function () {
		  		     		  						return {
		  		     		  							yb: this.get("tileSize"),
		  		     		  							visible: this.get("visible"),
		  		     		  							j: this.Yo(),
		  		     		  							vc: this.get("zooms"),
		  		     		  							Bo: this.Sf,
		  		     		  							Wf: this.Wf,
		  		     		  							Xf: this.Xf,
		  		     		  							opacity: this.get("opacity"),
		  		     		  							af: this.get("tileFun"),
		  		     		  							sa: this.get("detectRetina") && L.h.sa && L.h.Y
		  		     		  						}
		  		     		  					},
		  		     		  					Yh: function (t) {
		  		     		  						return L.P.$b.Eg ? new L.P.$b.Eg(this, t) : void 0
		  		     		  					}
		  		     		  				}), L.S.Buildings = L.S.ye.extend({
		  		     		  					r: function (t, i) {
		  		     		  						this.map = i, this.Kj = 0, this.Jf = !1, this.ug = this.tg = 0, this.Nk = [], arguments.callee.Sa.apply(this, arguments), this.uj = [], this.ne = new L.S.Hv, t && (this.J("style", t), this.WP = t.get("stable") || !1, this.J("dataSources", t), this.J("bubble", t)), this.J("display", i), this.AF()
		  		     		  					},
		  		     		  					ei: function () {
		  		     		  						return {
		  		     		  							visible: this.get("visible"),
		  		     		  							vc: this.get("zooms"),
		  		     		  							opacity: this.get("opacity"),
		  		     		  							zIndex: this.get("zIndex"),
		  		     		  							FK: this.ec.get("alwaysRender") || !1
		  		     		  						}
		  		     		  					},
		  		     		  					dataSourcesChanged: function () {
		  		     		  						var t = this.get("dataSources");
		  		     		  						t && ("string" == typeof t ? new L.ga.pa(t).e("complete", function (t) {
		  		     		  							this.JC(t.data), this.dj = t.data, this.Jf = !0, this.set("display"), this.Ab = !0, this.ec.q("complete")
		  		     		  						}, this) : t.length && (this.JC(t), this.dj = t, this.Jf = !0, this.set("display"), this.Ab = !0, this.ec.q("complete")))
		  		     		  					},
		  		     		  					getDatas: function () {
		  		     		  						return this.dj
		  		     		  					},
		  		     		  					rQ: function () {
		  		     		  						if (this.ec.dh) {
		  		     		  							var t = this.Pp;
		  		     		  							this.tg = t.size.width + t.anchor.x, this.ug = t.size.height + t.anchor.y
		  		     		  						}
		  		     		  					},
		  		     		  					ia: function (t, i) {
		  		     		  						var e = {
		  		     		  							type: t,
		  		     		  							data: "mouseout" === t ? this.EH || null : i.nk.lb,
		  		     		  							target: this.ec
		  		     		  						};
		  		     		  						this.EH = "mouseout" === t ? null : i.nk.lb, this.ec.q(t, e)
		  		     		  					},
		  		     		  					tR: function () {},
		  		     		  					$a: function (t) {
		  		     		  						this.ia(t.type, t)
		  		     		  					},
		  		     		  					AF: function () {
		  		     		  						this.e("click", this.$a), this.e("dblclick", this.$a), this.e("mousedown", this.$a), this.e("mouseup", this.$a), this.e("mouseover", this.$a), this.e("mouseout", this.$a), this.e("touchstart", this.$a), this.e("touchend", this.$a)
		  		     		  					},
		  		     		  					xR: function () {
		  		     		  						this.D("click", this.$a), this.D("dblclick", this.$a), this.D("mousedown", this.$a), this.D("mouseup", this.$a), this.D("mouseover", this.$a), this.D("mouseout", this.$a), this.D("touchstart", this.$a), this.D("touchend", this.$a)
		  		     		  					},
		  		     		  					styleChanged: function () {
		  		     		  						this.Pp = this.get("style"), this.rQ(), this.set("display", 0)
		  		     		  					},
		  		     		  					JC: function (t) {
		  		     		  						if (t) {
		  		     		  							this.clear();
		  		     		  							for (var i = this.map.get("resolution", 18), e = 0; e < t.length; e += 1) {
		  		     		  								var n = t[e].lnglat;
		  		     		  								t[e].lnglat = L.g.ka(n), n = this.map.wb(n, 18, i), n = new L.kd({
		  		     		  									name: "point-" + L.g.Vb(this),
		  		     		  									ja: new L.W.Bd([n.x, n.y], !0)
		  		     		  								}), n.Mh = this, n.lb = t[e], this.xo(n)
		  		     		  							}
		  		     		  						}
		  		     		  					},
		  		     		  					dB: function (t) {
		  		     		  						return "geojson" === t ? new L.BE({
		  		     		  							map: this.map
		  		     		  						}) : "topjson" === t ? new L.aR({
		  		     		  							map: this.map
		  		     		  						}) : "subway" === t ? new L.YQ({
		  		     		  							map: this.map
		  		     		  						}) : void 0
		  		     		  					},
		  		     		  					EO: function (t) {
		  		     		  						if (t) {
		  		     		  							var i = [],
		  		     		  								i = [],
		  		     		  								e = {};
		  		     		  							if (t.rules) {
		  		     		  								for (var i = t.rules, n = 0, s = i.length; s > n; n += 1) {
		  		     		  									for (var o = [], a = i[n].symbolizers, r = 0, h = a.length; h > r; r += 1) a[r].fill && (o[r] = new L.style.Bc.Iv(a[r].fill)), a[r].stroke && (o[r] = new L.style.Bc.Yv(a[r].stroke));
		  		     		  									a = o, i[n].Rp = a, i[n] = new L.style.SE(i[n])
		  		     		  								}
		  		     		  								e.rules = i
		  		     		  							}
		  		     		  							if (t.symbolizers) {
		  		     		  								for (i = t.symbolizers, t = 0, n = i.length; n > t; t += 1) i[t].fill && (i[t] = new L.style.Bc.Iv(i[t].fill)), i[t].stroke && (i[t] = new L.style.Bc.Yv(i[t].stroke));
		  		     		  								e.Rp = i
		  		     		  							}
		  		     		  							t = new L.mq(e)
		  		     		  						} else t = new L.mq({});
		  		     		  						return this.set("style", t), t
		  		     		  					},
		  		     		  					wR: function (a, b) {
		  		     		  						if (-1 === L.g.indexOf(a, L.k.Va)) {
		  		     		  							var c = new L.ga.pa(a);
		  		     		  							c.e("complete", function (t) {
		  		     		  								t = this.Ua[a] = this.dB(b).wp(t), this.Ui(t), this.ia("complete")
		  		     		  							}, this), c.e("error", this.Ka, this)
		  		     		  						} else new L.ga.XMLHttpRequest(a).e("complete", function (c) {
		  		     		  							c = eval("(" + c.data + ")"), c = this.Ua[a] = this.dB(b).wp(c), this.Ui(c)
		  		     		  						}, this)
		  		     		  					},
		  		     		  					OO: function (t) {
		  		     		  						t.Cj > this.jh && (this.jh = t.Cj)
		  		     		  					},
		  		     		  					xo: function (t) {
		  		     		  						if (this.ne.add(t), !this.Ro && !this.ec.dh) {
		  		     		  							0 === t.name.indexOf("circle") && (t.e("rad", this.OO, this), this.jh || (this.jh = t.get("radius")), t.Cj > this.jh && (this.jh = t.get("radius")));
		  		     		  							var i = t.get("strokeWeight") || 0;
		  		     		  							(!this.Mk || i > this.Mk) && (this.Mk = i)
		  		     		  						}
		  		     		  						this.WP || t.J("feature", this, !0)
		  		     		  					},
		  		     		  					Ui: function (t) {
		  		     		  						this.Jf = !0;
		  		     		  						for (var i = 0, e = t.length; e > i; i += 1) this.xo(t[i])
		  		     		  					},
		  		     		  					clear: function () {
		  		     		  						this.Jf = !0, this.ne.clear()
		  		     		  					},
		  		     		  					Gf: function (t) {
		  		     		  						var i;
		  		     		  						return 0 > t[0] ? (i = [t[0] + L.g.Wa, t[1], L.g.Wa, t[3]], t = [0, t[1], t[2], t[3]], i = this.ne.Gf(i), t = this.ne.Gf(t), L.extend(i, t)) : t[2] > L.g.Wa ? (i = [t[0], t[1], L.g.Wa, t[3]], t = [0, t[1], t[2] - L.g.Wa, t[3]], i = this.ne.Gf(i), t = this.ne.Gf(t), L.extend(i, t)) : this.ne.Gf(t)
		  		     		  					},
		  		     		  					vS: function (t) {
		  		     		  						var i, e = this.get("style"),
		  		     		  							n = t.Oe;
		  		     		  						return e instanceof L.mq || (e = this.EO(e)), n && 0 < n.length ? i = e.pA(n, t) : ((e.kD.length || e.Oe.length) && (i = e.HL(t)), i || (i = t.DM())), i
		  		     		  					},
		  		     		  					kB: function (t) {
		  		     		  						function i(t, i) {
		  		     		  							return t.Uo - i.Uo
		  		     		  						}
		  		     		  						var e, n, s, o, a, r = [],
		  		     		  							h = {};
		  		     		  						for (e in t)
		  		     		  							if (t.hasOwnProperty(e)) {
		  		     		  								s = t[e], o = s.get("zIndex");
		  		     		  								for (n in h)
		  		     		  									if (h.hasOwnProperty(n) && (a = r[h[n]][2], a === o)) break;
		  		     		  								"undefined" == typeof h[o] && (r.push([
		  		     		  									[],
		  		     		  									[], o
		  		     		  								]), h[o] = r.length - 1), o = r[h[o]], o[0].push(s)
		  		     		  							}
		  		     		  						for (r.sort(this.SP), t = 0, e = r.length; e > t; t += 1) r[t][0].sort(i);
		  		     		  						return r
		  		     		  					},
		  		     		  					featureChanged: function (t) {
		  		     		  						this.Jf = !0;
		  		     		  						var i = t.target,
		  		     		  							e = i.ja;
		  		     		  						0 !== this.ne.FM([L.g.Vb(i)]).length && (this.ne.remove(i, t.vj), e && !t.QL && this.ne.add(i))
		  		     		  					},
		  		     		  					XC: function (t) {
		  		     		  						this.Jf = !0;
		  		     		  						for (var i, e = 0, n = t.length; n > e; e += 1) i = t[e], i.ja.vj = null, i.bi(!0), i.Lj("feature")
		  		     		  					},
		  		     		  					LT: function (t, i) {
		  		     		  						return t[1].zIndex === i[1].zIndex ? L.g.Vb(t[1]) - L.g.Vb(i[1]) : t[1].zIndex - i[1].zIndex
		  		     		  					},
		  		     		  					SP: function (t, i) {
		  		     		  						return t[2] - i[2]
		  		     		  					},
		  		     		  					ET: function (t) {
		  		     		  						return t.zS() === L.S.cR.WQ
		  		     		  					},
		  		     		  					Yh: function (t) {
		  		     		  						return this.Ro ? new L.P.hi.wi(this, t) : L.h.Gk && L.P.canvas.wi ? new L.P.canvas.wi(this, t) : L.P.$b.wi && !L.h.xC ? new L.P.$b.wi(this, t) : null
		  		     		  					}
		  		     		  				}), L.S.Hv = L.Class.extend({
		  		     		  					r: function () {
		  		     		  						this.clear()
		  		     		  					},
		  		     		  					clear: function () {
		  		     		  						this.nj = [], this.Fu = new L.ze
		  		     		  					},
		  		     		  					add: function (t) {
		  		     		  						var i = L.g.Vb(t),
		  		     		  							e = t.ja;
		  		     		  						this.nj[i] || (this.count += 1, this.nj[i] = t, e && !L.j.equals(e.getBounds(), [1 / 0, 1 / 0, -(1 / 0), -(1 / 0)]) && this.Fu.bp(e.getBounds(), t))
		  		     		  					},
		  		     		  					sS: function () {
		  		     		  						return this.nj
		  		     		  					},
		  		     		  					Gf: function (t) {
		  		     		  						return this.Fu.zP(t)
		  		     		  					},
		  		     		  					FM: function (t) {
		  		     		  						var i, e = t.length,
		  		     		  							n = [];
		  		     		  						for (i = 0; e > i; i += 1) this.nj[t[i]] && n.push(this.nj[t[i]]);
		  		     		  						return n
		  		     		  					},
		  		     		  					remove: function (t, i) {
		  		     		  						var e = L.g.Vb(t).toString(),
		  		     		  							n = t.ja;
		  		     		  						this.nj[e] && (delete this.nj[e], n && (e = "undefined" != typeof i ? i : n.getBounds(), this.Fu.remove(e, t)))
		  		     		  					}
		  		     		  				}), L.Lv = L.Class.extend({
		  		     		  					hR: "assets/image/blank.gif",
		  		     		  					r: function (t, i, e) {
		  		     		  						this.timeout = i || 15e3, this.Bj = new L.Ad(1024), this.nh = new L.Ad(1024), this.nA = t, this.HA = e
		  		     		  					},
		  		     		  					zw: function (t) {
		  		     		  						for (t && this.nh.count >= this.nA && (t = this.nh.hb.ya.value, t.Vg && (this.nh.remove(t.url), this.ow(t))); this.Bj.count && !(this.nh.count >= this.nA);) this.qG(this.Bj.shift())
		  		     		  					},
		  		     		  					FH: function () {
		  		     		  						if (!this.Bw) {
		  		     		  							this.Bw = !0;
		  		     		  							var t = this;
		  		     		  							setTimeout(function () {
		  		     		  								t.Bw = !1, t.zw()
		  		     		  							}, 0)
		  		     		  						}
		  		     		  					},
		  		     		  					qG: function (t) {
		  		     		  						var i = document.createElement("img");
		  		     		  						i.src = t.url, t.X = i, t.IN = this, t.startTime = +new Date, t.Mu = !0, i.complete ? hc(t, !0) : (this.nh.set(t.url, t), i.onload = gc(t, !0), i.onerror = gc(t, !1), i.onabort = gc(t, !1), t.gQ = setTimeout(gc(t, !1), this.timeout))
		  		     		  					},
		  		     		  					ow: function (t) {
		  		     		  						t.Mu && (hc(t, !1), t.Vg = !0, t.AR = !0)
		  		     		  					},
		  		     		  					aT: function (t, i, e) {
		  		     		  						return this.QB(t.url, i, e, !0, t.ta.z + "_" + t.ta.x + "_" + t.ta.y)
		  		     		  					},
		  		     		  					QB: function (t, i, e, n, s) {
		  		     		  						var o = this.nh.get(t);
		  		     		  						if (o && o.Vg) o.Vg = !1, o.Je = i, o.XA = e;
		  		     		  						else {
		  		     		  							if (o = new equals(t, i, e), o.pN = n, o.key = s, this.Bj.get(L.g.Vb(o))) return;
		  		     		  							this.Bj.set(L.g.Vb(o), o), this.zw(!0)
		  		     		  						}
		  		     		  						return o
		  		     		  					},
		  		     		  					cL: function (t) {
		  		     		  						t.Vg || (t.Vg = !0, this.Bj.remove(L.g.Vb(t)))
		  		     		  					},
		  		     		  					clear: function (t) {
		  		     		  						if (this.Bj.forEach(function (t) {
		  		     		  								t.Vg = !0
		  		     		  							}), this.Bj.clear(), t)
		  		     		  							for (; t = this.nh.pop();) this.ow(t);
		  		     		  						else this.nh.forEach(function (t) {
		  		     		  							t.Vg = !0
		  		     		  						})
		  		     		  					}
		  		     		  				});
		  		     		  			var ic = function () {
		  		     		  					function t(t) {
		  		     		  						return this.rq[L.g.Vb(t)] = t, this
		  		     		  					}

		  		     		  					function i(t) {
		  		     		  						return delete this.rq[L.g.Vb(t)], this
		  		     		  					}
		  		     		  					return function () {
		  		     		  						function e() {
		  		     		  							var t, i, n = e.rq,
		  		     		  								s = [];
		  		     		  							for (i in n) Object.prototype.hasOwnProperty.call(n, i) && s.push(n[i]);
		  		     		  							for (n = s.length - 1; n >= 0; n -= 1) i = s[n].apply(this, arguments), void 0 !== i && (t = i);
		  		     		  							return t
		  		     		  						}
		  		     		  						return e.rq = {}, e.BR = t, e.xT = i, e
		  		     		  					}
		  		     		  				}(),
		  		     		  				canvasRenderer = {
		  		     		  					init: function (t, i) {
		  		     		  						this._map = t || this._map, this.La = new L.P.canvas.pf.Buildings, this.gE = i || "vdata.amap.com", this.VD = 2, this.Zh = 0, this.yb = 256, this.S = L.h, this.S.VD = 2, this.Wm = [new L.Ad, new L.Ad, new L.Ad, new L.Ad, new L.Ad], this.Qf = [{
		  		     		  							type: "region",
		  		     		  							show: !0,
		  		     		  							Pk: new L.aw(this),
		  		     		  							Hc: 0
		  		     		  						}, {
		  		     		  							type: "road",
		  		     		  							show: !0,
		  		     		  							Pk: new L.cw(this),
		  		     		  							Hc: 0
		  		     		  						}, {
		  		     		  							type: "building",
		  		     		  							show: !0,
		  		     		  							Pk: new L.oq(this),
		  		     		  							Hc: 0
		  		     		  						}, {
		  		     		  							type: "roadlabel",
		  		     		  							show: !0,
		  		     		  							Pk: new L.bw(this),
		  		     		  							Hc: 1
		  		     		  						}, {
		  		     		  							type: "poilabel",
		  		     		  							show: !0,
		  		     		  							Pk: new L.pq(this),
		  		     		  							Hc: 1
		  		     		  						}], this.Ba = new L.Ov({
		  		     		  							size: 200,
		  		     		  							Zu: .7,
		  		     		  							qt: 2,
		  		     		  							Yu: 300
		  		     		  						}), this.__isDrawLabel = !0, this._La && (this._La.__loadedImg__ = {}), this.Ti && this.size && (this.Ti.width = this.size.x, this.Ti.height = this.size.y)
		  		     		  					},
		  		     		  					_kt: function (t, i) {
		  		     		  						var e, n = "",
		  		     		  							s = [];
		  		     		  						for (var o in t) e = o.split(":"), s.push(o), n += L.g.kt(e[0], e[1], e[2]) + ";";
		  		     		  						return 0 == n.length ? [n, s] : [n.substring(0, n.length - 1), s]
		  		     		  					},
		  		     		  					TB: function (t, i) {
		  		     		  						function e(n) {
		  		     		  							var s = n.indexOf("|");
		  		     		  							if (-1 == s) l += n;
		  		     		  							else {
		  		     		  								l += n.substring(0, s);
		  		     		  								var o = JSON.parse(l);
		  		     		  								if (!o["x-vd-v"]) {
		  		     		  									var a = o[0].split("-"),
		  		     		  										r = a[0] + ":" + a[1] + ":" + a[2],
		  		     		  										u = a[1] + ":" + a[2] + ":" + a[0];
		  		     		  									if (!h.Ba.get(r)) {
		  		     		  										var c = new L.of(new ec(a[0], a[1], a[2]), "");
		  		     		  										c.key = r, h.Ba.set(r, c)
		  		     		  									}
		  		     		  									t[u] && (h.Ba.get(r).Dc = t[u].el, h.nC(o, i, r))
		  		     		  								}
		  		     		  								l = "", e(n.substring(s + 1))
		  		     		  							}
		  		     		  						}
		  		     		  						var n = this._kt(t, i),
		  		     		  							s = n[0],
		  		     		  							o = new XMLHttpRequest,
		  		     		  							a = "http://" + this.gE + "/tiles?mapType=normal&v=2&style=5&t=" + s + "&lv=" + i,
		  		     		  							r = 0,
		  		     		  							h = this,
		  		     		  							l = "";
		  		     		  						o.sT = "";
		  		     		  						var u = i > 18 ? Math.pow(2, i - 18) : 1;
		  		     		  						o.onreadystatechange = function () {
		  		     		  							3 === o.readyState ? o.wG || (e(o.responseText.substring(r)), r = o.responseText.length, o.hG = !0) : 4 === o.readyState && (o.startTime && (L.jd.RA = new Date - o.startTime, L.jd.sM = o.responseText.length / 2, h.K.aE("first"), o.hG || h.wl(t, i, u)), c = o.responseText.substring(r), e(c), o.sx = !0, h._map.fire("canvas"))
		  		     		  						}, o.open("GET", a, !0), o.send()
		  		     		  					},
		  		     		  					nC: function (t, i, e) {
		  		     		  						var n = t[0].split("-"),
		  		     		  							s = n[3],
		  		     		  							n = n.splice(0, 3).join("/");
		  		     		  						i > 18 ? Math.pow(2, i - 18) : 1;
		  		     		  						i > 18 && (n += ":" + i);
		  		     		  						var o = this.Ba.get(e);
		  		     		  						this.aE(t, o, i, s)
		  		     		  					},
		  		     		  					aE: function (t, i, e, n) {
		  		     		  						if ("first" === t) this.Wm[4].push(["co", 6, i]);
		  		     		  						else if (i.Ab && i.pb) i.pb.Ab || (i.pb.Dc = i.Dc, i.pb.X = i.pb.gg = i.pb.Ab = !0);
		  		     		  						else {
		  		     		  							i.Ua || (i.Ua = []), i.ce || (i.ce = {}, i.hc = e, i.ta.L1 = this.L1);
		  		     		  							var s;
		  		     		  							switch (n) {
		  		     		  								case "region":
		  		     		  									s = 0;
		  		     		  									break;
		  		     		  								case "road":
		  		     		  									s = 1;
		  		     		  									break;
		  		     		  								case "building":
		  		     		  									s = 2;
		  		     		  									break;
		  		     		  								case "roadlabel":
		  		     		  									s = 3;
		  		     		  									break;
		  		     		  								case "poilabel":
		  		     		  									s = 4
		  		     		  							}(0 === s || 4 === s || 1 !== t.length) && (this.Wm[s].ov(["co", s, i]), this.Qf[s].show && this.Wm[s].ov([t.slice(1), s, i]), this.Zh > s && (this.Zh = s)), 3 === s && (this.Wm[3].ov(["co", 5, i]), 2 < this.Zh && (this.Zh = 2)), this.FD()
		  		     		  						}
		  		     		  					},
		  		     		  					FD: function () {
		  		     		  						this.IC || (this.IC = L.g.yg(function () {
		  		     		  							var t = new Date,
		  		     		  								i = !1;
		  		     		  							do
		  		     		  								if (i = this.parse(), new Date - t >= this.zE) break; while (!i);
		  		     		  							this.IC = null, i || this.FD(), this.yd()
		  		     		  						}, this))
		  		     		  					},
		  		     		  					parse: function () {
		  		     		  						var t, i = !1,
		  		     		  							e = this.Zh,
		  		     		  							n = this.Wm[this.Zh];
		  		     		  						if (!n.Ik()) {
		  		     		  							if (t = n.WN(), !t) return i;
		  		     		  							if (6 === t[1]) {
		  		     		  								if (!this.Ab) {
		  		     		  									var s = this;
		  		     		  									this.Ab = !0, L.g.yg(function () {
		  		     		  										s.SA || (L.jd.SA = new Date - L.jd.TA, L.jd.Fs = new Date - L.jd.xB), s.ia("complete")
		  		     		  									})
		  		     		  								}
		  		     		  							} else {
		  		     		  								var o, a = t[2],
		  		     		  									r = a.hc,
		  		     		  									h = a.key + (r > 18 ? ":" + r : "");
		  		     		  								if (!this.Ba.ac(h)) return i;
		  		     		  								if ("co" === t[0]) {
		  		     		  									if (0 === t[1]) this.Cu(a), a.ce.region && "v4" !== this.xQ || (r = this.La.tb.getContext("2d"), r.fillStyle = this.yF, r.fillRect(0, 0, a.Dc.width, a.Dc.height)), a.ce.region && (this.La.dD(a.ce.region, 0, a.ta.z), a.ce.region = null), a.X = !0, a.pb && (a.pb.X = !0);
		  		     		  									else if (2 === t[1] && a.ce && a.ce.building) this.Cu(a), this.La.dD(a.ce.building, 1, a.ta.z, void 0, undefined), a.ce.building = null;
		  		     		  									else if (1 === t[1]) this.Cu(a), a.ce.road && (this.La.oP(a.ce.road, a.ta.z), a.ce.road = null), a.gg = !0, a.pb && (a.pb.gg = !0);
		  		     		  									else if (4 === t[1]) {
		  		     		  										if (r > 18) {
		  		     		  											t = a.ta, o = Math.pow(2, r - 18);
		  		     		  											for (var l = 0; o > l; l += 1)
		  		     		  												for (var u = 0; o > u; u += 1) {
		  		     		  													var c = this.Ba.get(r + ":" + (o * t.x + l) + ":" + (o * t.y + u));
		  		     		  													c && (c.Ab = !0, c.eC = !0)
		  		     		  												}
		  		     		  											this.Ba.cl(h)
		  		     		  										} else a.Ab = !0, a.eC = !0;
		  		     		  										a.gg = !0, a.pb && (a.pb.Ab = !0, a.pb.eC = !0, a.pb.gg = !0)
		  		     		  									} else if (5 === t[1])
		  		     		  										if (a.ce = null, a.X = !0, r > 18)
		  		     		  											for (t = a.ta, h = this.yb, o = Math.pow(2, r - 18), l = 0; o > l; l += 1)
		  		     		  												for (u = 0; o > u; u += 1)(c = this.Ba.get(r + ":" + (o * t.x + l) + ":" + (o * t.y + u))) && !c.X && (c.Dc = this.GL(), c.Dc.width = c.Dc.height = h, c.Dc.getContext("2d").drawImage(a.Dc, -l * h, -u * h), c.status = "loaded", c.gg = !0, c.Ab = !0, c.X = !0, this.en && 0 === (c.ta.x + c.ta.y) % 2 && c.Dc.getContext("2d").drawImage(this.en, 0, 0));
		  		     		  										else this.en && 0 === (a.ta.x + a.ta.y) % 2 && a.Dc.getContext("2d").drawImage(this.en, 0, 0)
		  		     		  								} else r = this.Qf[t[1]], r.Pk.map = this.w, o = r.Pk.vu(a, t[0], r), 3 !== t[1] && 4 !== t[1] && (a.ce[r.type] = o)
		  		     		  							}
		  		     		  							n.Ik() && (1 === e && 2 === e || !1)
		  		     		  						}
		  		     		  						return n.Ik() && (4 === e && (i = !0), this.Zh = (this.Zh + 1) % 5), i
		  		     		  					},
		  		     		  					Cu: function (t) {
		  		     		  						var i = 18 < t.hc ? Math.pow(2, 18 - t.hc) : 1;
		  		     		  						t.Dc || (t.Dc = document.createElement("canvas"), t.Dc.width = t.Dc.height = this.yb / i, t.gg = !1), this.La.tb = t.Dc, this.La.nb = i
		  		     		  					},
		  		     		  					Zd: function (t, i, e, n, s, o, a) {
		  		     		  						this.Ca = this.Ca || t, this.Ti = this.Ti || i, this._La = this._La || new L.P.canvas.pf.Buildings(this.Ti), this._La.__isExtract = !0, this.K = {
		  		     		  							sa: this.S.sa,
		  		     		  							lf: !1,
		  		     		  							hf: 2
		  		     		  						}, this.zoom = e, this.L1 = L.Pe.xE.If(e), this.center = {
		  		     		  							G: a,
		  		     		  							B: o,
		  		     		  							lng: o,
		  		     		  							lat: a
		  		     		  						}, this.rotation = 0, this.centerCoords = L.Pe.xE.hp(this.center, e).multiplyBy(this.L1), this.size = {
		  		     		  							width: n.x,
		  		     		  							height: n.y
		  		     		  						}, this._tiles = s || this._tiles, this._La.__loadedImg__ = this._La.__loadedImg__ || {}
		  		     		  					},
		  		     		  					updateCenter: function (t, i, e) {
		  		     		  						this.zoom = e, this.center = {
		  		     		  							G: i,
		  		     		  							B: t,
		  		     		  							lng: t,
		  		     		  							lat: i
		  		     		  						}, this.L1 = L.Pe.xE.If(e), this.centerCoords = L.Pe.xE.hp(this.center, e).multiplyBy(this.L1)
		  		     		  					},
		  		     		  					updateTiles: function (t) {
		  		     		  						this._tiles = t
		  		     		  					},
		  		     		  					updateSize: function (t) {
		  		     		  						this.size = {
		  		     		  							width: t.x,
		  		     		  							height: t.y
		  		     		  						}
		  		     		  					},
		  		     		  					Bp: function (t) {
		  		     		  						var i = this.Ti,
		  		     		  							e = this._La;
		  		     		  						e.lf = this.lf;
		  		     		  						var n = this.K.sa ? this.K.hf : 1;
		  		     		  						0 !== t.va.rotation ? L.d.Rm(i, 2 * Math.floor(t.Ea.mb.x) * n, 2 * Math.floor(t.Ea.mb.y) * n, !0) : L.d.Rm(i, t.size.width * n, t.size.height * n, !0), e.Eb = [t.Ea.kb.x, t.Ea.kb.y], this._La.nb = this.L1 * (this.K.sa ? 1 / this.K.hf : 1);
		  		     		  						var s, o;
		  		     		  						for (var a in this._tiles)
		  		     		  							if (s = a.split(":"), o = this.Ba.get(s[2] + ":" + s[0] + ":" + s[1]), o && (this.Hg = {
		  		     		  									ak: [o]
		  		     		  								}, (i = this.Hg.ak) && i.length && !(.5 < i[0].ta.z - this.zoom)))
		  		     		  								for (e = i.length - 1; e >= 0; e -= 1) {
		  		     		  									var n = i[e].Ua,
		  		     		  										r = !1;
		  		     		  									!n && i[e].pb && i[e].pb.Ua && (n = i[e].pb.Ua, r = !0), this._La.Bp(n || {})
		  		     		  								}
		  		     		  					},
		  		     		  					yd: function () {
		  		     		  						this.cn = !1;
		  		     		  						var t = {};
		  		     		  						t.size = this.size, t.SK = 15e5 < t.size.width * t.size.height, t.va = this.ZM(), t.qc = !1, t.lf = !1, t.iu = !1, t.Up = !1, t.kv = !1, t.Ym = !1, this.Ym = !1, t.dC = !0, t.Ea = this.getCoordsBound(), t.Oz = this.Oz = !0, t.sa = !1, t.scale = Math.pow(2, t.va.zoom - t.va.xb), this.Bp(t)
		  		     		  					},
		  		     		  					ZM: function () {
		  		     		  						return {
		  		     		  							zoom: this.zoom,
		  		     		  							Th: this.center,
		  		     		  							fb: this.centerCoords,
		  		     		  							rotation: this.rotation,
		  		     		  							xb: this.zoom,
		  		     		  							nb: this.L1
		  		     		  						}
		  		     		  					},
		  		     		  					getCoordsBound: function () {
		  		     		  						var t = this.size,
		  		     		  							i = this.centerCoords,
		  		     		  							e = this.rotation,
		  		     		  							n = this.L1,
		  		     		  							e = Math.PI * e / 180,
		  		     		  							t = new L.Pixel((Math.abs(t.width * Math.cos(e)) + Math.abs(t.height * Math.sin(e))) / 2, (Math.abs(t.width * Math.sin(e)) + Math.abs(t.height * Math.cos(e))) / 2),
		  		     		  							n = new L.PixelBounds(i.subtract(t.multiplyBy(n)), i.add(t.multiplyBy(n))),
		  		     		  							e = this.zoom;
		  		     		  						return n.mb = t, n
		  		     		  					}
		  		     		  				};
		  		     		  			L.Ad = L.Class.extend({
		  		     		  					initialize: function (t, i) {
		  		     		  						this.Ki = 0 | t, this.Eq = !!i, this.count = 0, this.eO = ic(), this.clear()
		  		     		  					},
		  		     		  					Ik: function () {
		  		     		  						return !this.count
		  		     		  					},
		  		     		  					PS: function () {
		  		     		  						return this.count >= this.Ki
		  		     		  					},
		  		     		  					HT: function (t) {
		  		     		  						this.Ki !== t && (this.Ki = 0 | t) && this.uz(this.Ki)
		  		     		  					},
		  		     		  					get: function (t, i) {
		  		     		  						var e = this.$w(t);
		  		     		  						return e ? e.value : i
		  		     		  					},
		  		     		  					set: function (t, i) {
		  		     		  						var e = this.$w(t);
		  		     		  						e ? e.value = i : (e = new L.Ad.ui(t, i), this.w[t] = e, this.wx(e), this.count += 1)
		  		     		  					},
		  		     		  					remove: function (t) {
		  		     		  						return Object.prototype.hasOwnProperty.call(this.w, t) ? (this.Ql(this.w[t]), !0) : !1
		  		     		  					},
		  		     		  					forEach: function (t, i) {
		  		     		  						for (var e = this.hb.next; e !== this.hb; e = e.next) t.call(i, e.value, e.key, this)
		  		     		  					},
		  		     		  					Qk: function (t, i) {
		  		     		  						return Object.prototype.hasOwnProperty.call(this.w, t) ? this.w[t].value : i
		  		     		  					},
		  		     		  					pT: function () {
		  		     		  						return this.hb.next.value
		  		     		  					},
		  		     		  					qT: function () {
		  		     		  						return this.hb.ya.value
		  		     		  					},
		  		     		  					shift: function () {
		  		     		  						return this.Ly(this.hb.next)
		  		     		  					},
		  		     		  					push: function (t) {
		  		     		  						t = new L.Ad.ui("", t), 0 === this.count ? (this.hb.ya = null, t.ya = this.hb, this.hb.next = t) : (this.no.next = t, t.ya = this.no), this.count += 1, this.no = t
		  		     		  					},
		  		     		  					ov: function (t) {
		  		     		  						t = new L.Ad.ui("", t), 0 === this.count ? (this.hb.ya = null, t.ya = this.hb, this.no = this.hb.next = t) : (this.hb.next.ya = t, t.next = this.hb.next, t.ya = this.hb, this.hb.next = t), this.count += 1
		  		     		  					},
		  		     		  					WN: function () {
		  		     		  						if (this.count) {
		  		     		  							this.count -= 1;
		  		     		  							var t = this.hb.next;
		  		     		  							return t.next ? (t.next.ya = this.hb, this.hb.next = t.next) : (this.hb.next = null, this.no = this.hb.ya = null), t.next = null, t.ya = null, t.value
		  		     		  						}
		  		     		  						return null
		  		     		  					},
		  		     		  					pop: function () {
		  		     		  						return this.Ly(this.hb.ya)
		  		     		  					},
		  		     		  					$w: function (t) {
		  		     		  						return Object.prototype.hasOwnProperty.call(this.w, t) ? (t = this.w[t], this.Eq && (t.remove(), this.wx(t)), t) : void 0
		  		     		  					},
		  		     		  					wx: function (t) {
		  		     		  						this.Eq ? (t.next = this.hb.next, t.ya = this.hb, this.hb.next = t, t.next.ya = t) : (t.ya = this.hb.ya, t.next = this.hb, this.hb.ya = t, t.ya.next = t), this.Ki && this.uz(this.Ki)
		  		     		  					},
		  		     		  					uz: function (t) {
		  		     		  						for (var i = this.count; i > t; i -= 1) {
		  		     		  							var e = this.Eq ? this.hb.ya : this.hb.next;
		  		     		  							this.Ql(e), this.eO(e.value)
		  		     		  						}
		  		     		  					},
		  		     		  					Ql: function (t) {
		  		     		  						t.remove(), delete this.w[t.key], this.count -= 1
		  		     		  					},
		  		     		  					Ly: function (t) {
		  		     		  						return this.hb !== t && this.Ql(t), t.value
		  		     		  					},
		  		     		  					clear: function () {
		  		     		  						this.w = {}, this.hb = new L.Ad.ui("", null), this.hb.ya = this.hb.next = this.hb, this.count = 0
		  		     		  					}
		  		     		  				}), L.Ad.ui = function (t, i) {
		  		     		  					this.key = t, this.value = i
		  		     		  				}, L.Ad.ui.prototype.ya = null, L.Ad.ui.prototype.next = null, L.Ad.ui.prototype.remove = function () {
		  		     		  					this.ya.next = this.next, this.next.ya = this.ya, this.next = this.ya = null
		  		     		  				}, L.Ov = L.Class.extend({
		  		     		  					include: [L.oa],
		  		     		  					initialize: function (t) {
		  		     		  						this.Sj = L.extend({
		  		     		  							size: 120,
		  		     		  							Zu: .7,
		  		     		  							qt: 2,
		  		     		  							Yu: 300
		  		     		  						}, t), this.de = {}, this.Fg = 0, this.xq = this.Sj.size
		  		     		  					},
		  		     		  					oF: function (t) {
		  		     		  						return {
		  		     		  							el: t,
		  		     		  							Js: L.g.mj(),
		  		     		  							wo: 0
		  		     		  						}
		  		     		  					},
		  		     		  					get: function (t, i) {
		  		     		  						if (!this.ac(t)) return i;
		  		     		  						var e = this.de[t];
		  		     		  						return e.Js = L.g.mj(), e.wo += 1, e.el
		  		     		  					},
		  		     		  					forEach: function (t, i) {
		  		     		  						for (var e in this.de)
		  		     		  							if (this.de.hasOwnProperty(e) && !1 === t.call(i, this.de[e].el, e)) break
		  		     		  					},
		  		     		  					Qk: function (t, i) {
		  		     		  						return this.get(t, i)
		  		     		  					},
		  		     		  					set: function (t, i) {
		  		     		  						this.ac(t) ? this.de[t].el = i : (this.Fg += 1, this.de[t] = this.oF(i)), this.Fg > this.xq && this.pF()
		  		     		  					},
		  		     		  					ac: function (t) {
		  		     		  						return this.de.hasOwnProperty(t)
		  		     		  					},
		  		     		  					cl: function (t) {
		  		     		  						if (!this.ac(t)) return null;
		  		     		  						this.Fg -= 1;
		  		     		  						var i = this.de[t];
		  		     		  						return delete this.de[t], i.el
		  		     		  					},
		  		     		  					clear: function () {
		  		     		  						this.sq(), this.de = {}, this.Fg = 0
		  		     		  					},
		  		     		  					sq: function () {
		  		     		  						this.yq && clearTimeout(this.yq)
		  		     		  					},
		  		     		  					pF: function () {
		  		     		  						if (this.Fg > this.xq * this.Sj.qt) this.sq(), this.mw();
		  		     		  						else if (!(10 > L.g.mj() - this.qF)) {
		  		     		  							this.sq();
		  		     		  							var t = this;
		  		     		  							this.yq = setTimeout(function () {
		  		     		  								t.yq = null, t.mw()
		  		     		  							}, this.Sj.Yu), this.qF = L.g.mj()
		  		     		  						}
		  		     		  					},
		  		     		  					mw: function () {
		  		     		  						var t = Math.round(this.xq * this.Sj.Zu);
		  		     		  						if (!(this.Fg < t))
		  		     		  							for (var i, e, t = this.kF(this.Fg - t), n = 0, s = t.length; s > n; n += 1) i = t[n], e = this.cl(i), this.q ? this.q("drop", {
		  		     		  								key: i,
		  		     		  								el: e
		  		     		  							}) : L.oa.q("drop", {
		  		     		  								key: i,
		  		     		  								el: e
		  		     		  							})
		  		     		  					},
		  		     		  					gF: function (t, i) {
		  		     		  						var e = this.de[t],
		  		     		  							n = this.de[i],
		  		     		  							s = e.Js - n.Js;
		  		     		  						return 0 !== s ? s : e.wo - n.wo
		  		     		  					},
		  		     		  					kF: function (t) {
		  		     		  						var i, e = [];
		  		     		  						for (i in this.de) this.de.hasOwnProperty(i) && e.push(i);
		  		     		  						return this.lF(e, t, this.gF)
		  		     		  					},
		  		     		  					lF: function (t, i, e) {
		  		     		  						if (0 >= i) return [];
		  		     		  						for (var n, s, o, a = 0, r = t.length - 1; r > a;) {
		  		     		  							for (n = a, s = r, o = t[i]; i >= n && s >= i;) {
		  		     		  								for (; i >= n && 0 > e.call(this, t[n], o);) n += 1;
		  		     		  								for (; s >= i && 0 < e.call(this, t[s], o);) s -= 1;
		  		     		  								var h = t[n];
		  		     		  								t[n] = t[s], t[s] = h, n += 1, s -= 1
		  		     		  							}
		  		     		  							i > s && (a = n), n > i && (r = s)
		  		     		  						}
		  		     		  						return t.slice(0, i)
		  		     		  					}
		  		     		  				}), L.ze = L.Class.extend({
		  		     		  					r: function (t) {
		  		     		  						this.XB = "undefined" != typeof t ? t : 6, this.op = Math.floor(this.XB / 2), this.Dp = {
		  		     		  							j: [1 / 0, 1 / 0, -(1 / 0), -(1 / 0)],
		  		     		  							qa: []
		  		     		  						}, this.count = 0
		  		     		  					},
		  		     		  					mL: function (t, i) {
		  		     		  						var e, n = -1,
		  		     		  							s = [];
		  		     		  						s.push(i);
		  		     		  						var o = i.qa;
		  		     		  						do {
		  		     		  							-1 !== n && (s.push(o[n]), o = o[n].qa, n = -1);
		  		     		  							for (var a = o.length - 1; a >= 0; a -= 1) {
		  		     		  								var r = o[a];
		  		     		  								if ("undefined" != typeof r.pj) {
		  		     		  									n = -1;
		  		     		  									break
		  		     		  								}
		  		     		  								var h = L.ze.Zk(r.j[2] - r.j[0], r.j[3] - r.j[1], r.qa.length + 1),
		  		     		  									r = L.ze.Zk((r.j[2] > t.j[2] ? r.j[2] : t.j[2]) - (r.j[0] < t.j[0] ? r.j[0] : t.j[0]), (r.j[3] > t.j[3] ? r.j[3] : t.j[3]) - (r.j[1] < t.j[1] ? r.j[1] : t.j[1]), r.qa.length + 2);
		  		     		  								(0 > n || Math.abs(r - h) < e) && (e = Math.abs(r - h), n = a)
		  		     		  							}
		  		     		  						} while (-1 !== n);
		  		     		  						return s
		  		     		  					},
		  		     		  					bp: function (t, i, e) {
		  		     		  						t = {
		  		     		  							j: t,
		  		     		  							pj: i
		  		     		  						}, "undefined" != typeof e && (t.type = e), this.yB(t, this.Dp), this.count += 1
		  		     		  					},
		  		     		  					yB: function (t, i) {
		  		     		  						var e;
		  		     		  						if (0 === i.qa.length) i.j = L.j.qb(t.j), i.qa.push(t);
		  		     		  						else {
		  		     		  							var n = this.mL(t, i),
		  		     		  								s = t;
		  		     		  							do {
		  		     		  								if (e && "undefined" != typeof e.qa && 0 === e.qa.length) {
		  		     		  									var o = e;
		  		     		  									e = n.pop();
		  		     		  									for (var a = 0, r = e.qa.length; r > a; a += 1)
		  		     		  										if (e.qa[a] === o || 0 === e.qa[a].qa.length) {
		  		     		  											e.qa.splice(a, 1);
		  		     		  											break
		  		     		  										}
		  		     		  								} else e = n.pop();
		  		     		  								if (o = s instanceof Array, "undefined" != typeof s.pj || "undefined" != typeof s.qa || o) {
		  		     		  									if (o) {
		  		     		  										for (o = 0, a = s.length; a > o; o += 1) L.j.extend(e.j, s[o].j);
		  		     		  										e.qa = e.qa.concat(s)
		  		     		  									} else L.j.extend(e.j, s.j), e.qa.push(s);
		  		     		  									e.qa.length <= this.XB ? s = {
		  		     		  										j: L.j.qb(e.j)
		  		     		  									} : (s = o = this.CN(e.qa), 1 > n.length && (e.qa.push(o[0]), n.push(e), s = o[1]))
		  		     		  								} else L.j.extend(e.j, s.j), s = {
		  		     		  									j: L.j.qb(e.j)
		  		     		  								}
		  		     		  							} while (0 < n.length)
		  		     		  						}
		  		     		  					},
		  		     		  					CN: function (t) {
		  		     		  						for (var i = this.GO(t); 0 < t.length;) this.HO(t, i[0], i[1]);
		  		     		  						return i
		  		     		  					},
		  		     		  					GO: function (t) {
		  		     		  						for (var i = t.length - 1, e = 0, n = t.length - 1, s = 0, o = t.length - 2; o >= 0; o -= 1) {
		  		     		  							var a = t[o];
		  		     		  							a.j[0] > t[e].j[0] ? e = o : a.j[2] < t[i].j[1] && (i = o), a.j[1] > t[s].j[1] ? s = o : a.j[3] < t[n].j[3] && (n = o)
		  		     		  						}
		  		     		  						return Math.abs(t[i].j[2] - t[e].j[0]) > Math.abs(t[n].j[3] - t[s].j[1]) ? i > e ? (i = t.splice(i, 1)[0], e = t.splice(e, 1)[0]) : (e = t.splice(e, 1)[0], i = t.splice(i, 1)[0]) : n > s ? (i = t.splice(n, 1)[0], e = t.splice(s, 1)[0]) : (e = t.splice(s, 1)[0], i = t.splice(n, 1)[0]), [{
		  		     		  							j: L.j.qb(i.j),
		  		     		  							qa: [i]
		  		     		  						}, {
		  		     		  							j: L.j.qb(e.j),
		  		     		  							qa: [e]
		  		     		  						}]
		  		     		  					},
		  		     		  					HO: function (t, i, e) {
		  		     		  						for (var n, s, o, a = L.ze.Zk(i.j[2] - i.j[0], i.j[3] - i.j[1], i.qa.length + 1), r = L.ze.Zk(e.j[2] - e.j[0], e.j[3] - e.j[1], e.qa.length + 1), h = t.length - 1; h >= 0; h -= 1) {
		  		     		  							var l = t[h],
		  		     		  								u = [i.j[0] < l.j[0] ? i.j[0] : l.j[0], i.j[2] > l.j[2] ? i.j[2] : l.j[2], i.j[1] < l.j[1] ? i.j[1] : l.j[1], i.j[3] > l.j[3] ? i.j[3] : l.j[3]],
		  		     		  								u = Math.abs(L.ze.Zk(u[1] - u[0], u[3] - u[2], i.qa.length + 2) - a),
		  		     		  								l = [e.j[0] < l.j[0] ? e.j[0] : l.j[0], e.j[2] > l.j[2] ? e.j[2] : l.j[2], e.j[1] < l.j[1] ? e.j[1] : l.j[1], e.j[3] > l.j[3] ? e.j[3] : l.j[3]],
		  		     		  								l = Math.abs(L.ze.Zk(l[1] - l[0], l[3] - l[2], e.qa.length + 2) - r),
		  		     		  								c = Math.abs(l - u);
		  		     		  							(!s || !n || n > c) && (s = h, n = c, o = u > l ? e : i)
		  		     		  						}
		  		     		  						a = t.splice(s, 1)[0], i.qa.length + t.length + 1 <= this.op ? (i.qa.push(a), L.j.extend(i.j, a.j)) : e.qa.length + t.length + 1 <= this.op ? (e.qa.push(a), L.j.extend(e.j, a.j)) : (o.qa.push(a), L.j.extend(o.j, a.j))
		  		     		  					},
		  		     		  					remove: function (t, i) {
		  		     		  						var e = [];
		  		     		  						if (e[0] = {
		  		     		  								j: t
		  		     		  							}, (e[1] = i) || (e[1] = !1), e[2] = this.Dp, this.count -= 1, !1 === e[1]) {
		  		     		  							var n = 0,
		  		     		  								s = [];
		  		     		  							do n = s.length, s = s.concat(this.$C.apply(this, e)); while (n !== s.length);
		  		     		  							return s
		  		     		  						}
		  		     		  						return this.$C.apply(this, e)
		  		     		  					},
		  		     		  					$C: function (t, i, e) {
		  		     		  						var n = [],
		  		     		  							s = [],
		  		     		  							o = [];
		  		     		  						if (!t || !L.j.intersects(t.j, e.j)) return o;
		  		     		  						t = L.j.qb(t.j);
		  		     		  						var a;
		  		     		  						s.push(e.qa.length), n.push(e);
		  		     		  						do {
		  		     		  							e = n.pop();
		  		     		  							var r = s.pop() - 1;
		  		     		  							if ("undefined" != typeof i)
		  		     		  								for (; r >= 0;) {
		  		     		  									var h = e.qa[r];
		  		     		  									if (L.j.intersects(t, h.j)) {
		  		     		  										if (i && "undefined" != typeof h.pj && h.pj === i || !i && ("undefined" != typeof h.pj || L.j.oA(t, h.j))) {
		  		     		  											"undefined" != typeof h.qa ? (o = this.Yk(h, !0, [], h), e.qa.splice(r, 1)) : o = e.qa.splice(r, 1), L.ze.Hu(e), i = void 0, e.qa.length < this.op && (a = this.Yk(e, !0, [], e));
		  		     		  											break
		  		     		  										}
		  		     		  										"undefined" != typeof h.qa && (s.push(r), n.push(e), e = h, r = h.qa.length)
		  		     		  									}
		  		     		  									r -= 1
		  		     		  								} else if ("undefined" != typeof a) {
		  		     		  									for (e.qa.splice(r + 1, 1), 0 < e.qa.length && L.ze.Hu(e), r = 0, h = a.length; h > r; r += 1) this.yB(a[r], e);
		  		     		  									a.length = 0, 0 === n.length && 1 >= e.qa.length ? (a = this.Yk(e, !0, a, e), e.qa.length = 0, n.push(e), s.push(1)) : 0 < n.length && e.qa.length < this.op ? (a = this.Yk(e, !0, a, e), e.qa.length = 0) : a = void 0
		  		     		  								} else L.ze.Hu(e)
		  		     		  						} while (0 < n.length);
		  		     		  						return o
		  		     		  					},
		  		     		  					search: function (t, i) {
		  		     		  						return this.Yk({
		  		     		  							j: t
		  		     		  						}, !1, [], this.Dp, i)
		  		     		  					},
		  		     		  					zP: function (t, i) {
		  		     		  						return this.Yk({
		  		     		  							j: t
		  		     		  						}, !1, [], this.Dp, i, !0)
		  		     		  					},
		  		     		  					Yk: function (t, i, e, n, s, o) {
		  		     		  						var a = {},
		  		     		  							r = [];
		  		     		  						if (!L.j.intersects(t.j, n.j)) return e;
		  		     		  						r.push(n.qa);
		  		     		  						do {
		  		     		  							n = r.pop();
		  		     		  							for (var h = n.length - 1; h >= 0; h -= 1) {
		  		     		  								var l = n[h];
		  		     		  								L.j.intersects(t.j, l.j) && ("undefined" != typeof l.qa ? r.push(l.qa) : "undefined" != typeof l.pj && (i ? e.push(l) : ("undefined" == typeof s || l.type === s) && (l = l.pj, "undefined" != typeof o ? a[L.g.Vb(l)] = l : e.push(l))))
		  		     		  							}
		  		     		  						} while (0 < r.length);
		  		     		  						return "undefined" != typeof o ? a : e
		  		     		  					}
		  		     		  				}), L.ze.Hu = function (t) {
		  		     		  					var i = t.qa.length,
		  		     		  						e = t.j;
		  		     		  					if (0 === i) L.j.empty(e);
		  		     		  					else {
		  		     		  						var n = t.qa[0].j;
		  		     		  						for (e[0] = n[0], e[2] = n[2], e[1] = n[1], e[3] = n[3], n = 1; i > n; n += 1) L.j.extend(e, t.qa[n].j)
		  		     		  					}
		  		     		  				}, L.ze.Zk = function (t, i, e) {
		  		     		  					var n = (t + i) / 2;
		  		     		  					return t *= i, t * e / (t / (n * n))
		  		     		  				}, L.ra = L.ra || {}, L.ra.Ah = L.Class.extend({
		  		     		  					jb: [L.oa, L.Kc],
		  		     		  					sO: ["position", "visible", "clickable", "bubble"],
		  		     		  					r: function (t, i) {
		  		     		  						this.map = i, this.cd(this.sO, t), this.J("zIndex", t), this.J("draggable", t), L.h.uc || L.h.Y ? this.IF() : this.Jq(), this.zc = t, this.zc.ra = this
		  		     		  					},
		  		     		  					draggableChanged: function () {
		  		     		  						this.get("draggable") ? this.Iq() : this.Sr()
		  		     		  					},
		  		     		  					ia: function (t, i) {
		  		     		  						var e;
		  		     		  						e = i ? {
		  		     		  							type: t,
		  		     		  							pixel: i.sb,
		  		     		  							target: this.zc,
		  		     		  							lnglat: i.qg
		  		     		  						} : {
		  		     		  							type: t
		  		     		  						}, this.zc && this.zc.q(t, e)
		  		     		  					},
		  		     		  					$a: function (t) {
		  		     		  						("click" !== t.type && "rightclick" !== t.type && "dblclick" !== t.type || this.get("clickable")) && this.ia(t.type, t)
		  		     		  					},
		  		     		  					Hq: function () {
		  		     		  						this.e("click", this.$a), this.e("rightclick", this.$a), this.e("dblclick", this.$a)
		  		     		  					},
		  		     		  					vz: function () {
		  		     		  						this.D("click", this.$a), this.D("rightclick", this.$a), this.D("dblclick", this.$a)
		  		     		  					},
		  		     		  					Jq: function () {
		  		     		  						this.get("clickable") && this.Hq(), this.e("mousemove", this.$a), this.e("mouseout", this.$a), this.e("mouseover", this.$a), this.e("mousedown", this.$a), this.e("mouseup", this.$a)
		  		     		  					},
		  		     		  					zR: function () {
		  		     		  						this.vz(), this.D("mousemove", this.$a), this.D("mouseout", this.$a), this.D("mouseover", this.$a), this.D("mousedown", this.$a), this.D("mouseup", this.$a)
		  		     		  					},
		  		     		  					clickableChanged: function () {
		  		     		  						this.get("clickable") ? this.Hq() : this.vz()
		  		     		  					},
		  		     		  					IF: function () {
		  		     		  						this.get("clickable") && this.Hq(), this.e("touchstart", this.$a, this), this.e("touchmove", this.$a, this), this.e("touchend", this.$a, this)
		  		     		  					},
		  		     		  					Iq: function () {
		  		     		  						this.e("dragstart", this.Ni), this.e("dragging", this.Li), this.e("dragend", this.Mi)
		  		     		  					},
		  		     		  					Ni: function (t) {
		  		     		  						this.re = t.sb, this.ia("dragstart", t)
		  		     		  					},
		  		     		  					Li: function (t) {
		  		     		  						var i = t.sb.subtract(this.re),
		  		     		  							e = i.x,
		  		     		  							i = i.y;
		  		     		  						this.re = t.sb;
		  		     		  						var n = this.map.get("rotation") * Math.PI / 180;
		  		     		  						this.lh(new L.Pixel(e * Math.cos(n) + Math.sin(n) * i, -Math.sin(n) * e + Math.cos(n) * i)), this.ia("dragging", t)
		  		     		  					},
		  		     		  					Mi: function (t) {
		  		     		  						this.ia("dragend", t)
		  		     		  					},
		  		     		  					Sr: function () {
		  		     		  						this.D("dragstart", this.Ni), this.D("dragging", this.Li), this.D("dragend", this.Mi)
		  		     		  					},
		  		     		  					fx: function (t) {
		  		     		  						var i, e, n = [];
		  		     		  						for (i = 0, e = t.length; e > i; i += 1) n.push(this.lr(t[i]));
		  		     		  						return n
		  		     		  					},
		  		     		  					lr: function (t) {
		  		     		  						return t = this.map.wb(t), [t.x, t.y]
		  		     		  					},
		  		     		  					Gb: function (t) {
		  		     		  						var i = this.A.Aa || this.map.get("centerCoords"),
		  		     		  							e = this.map.get("crs").If(Math.floor(this.map.get("zoom")));
		  		     		  						return [(t[0] - i.x) / e, (t[1] - i.y) / e]
		  		     		  					}
		  		     		  				}), L.ra.Wc = L.ra.Ah.extend({
		  		     		  					uu: "content icon opacity angle autoRotation offset shadow title label isTop shape topWhenClick topWhenMouseOver".split(" "),
		  		     		  					r: function (t, i) {
		  		     		  						arguments.callee.Sa.apply(this, arguments), this.cd(this.uu, t), this.J("move", t), this.ZK(), this.Wi(), this.set("AnimationOffset", new L.Pixel(0, 0)), this.J("raiseOnDrag", t), this.GK = {
		  		     		  							AMAP_ANIMATION_NONE: !1,
		  		     		  							AMAP_ANIMATION_DROP: L.Bg.Easing.Bounce,
		  		     		  							AMAP_ANIMATION_BOUNCE: L.Bg.Easing.Cubic
		  		     		  						}, this.J("animation", t)
		  		     		  					},
		  		     		  					vr: function (t, i, e) {
		  		     		  						if (this.get("animation") && "AMAP_ANIMATION_NONE" !== this.get("animation")) {
		  		     		  							var n = this;
		  		     		  							this.Mf = new L.Bg, this.Mf.transition = function (e, s, o) {
		  		     		  								return t && o >= 600 ? (n.Mf.stop(), 0) : (e = 0 === Math.floor(o / 600) % 2 ? "Out" : "In", "out" === i ? e = "Out" : "in" === i && (e = "In"), n.GK[n.get("animation")][e](o % 600 / 600))
		  		     		  							}, e = e || 40, this.Mf.Im = function (t) {
		  		     		  								n.set("AnimationOffset", n.Ur.add(new L.Pixel(0, -1 * e * t)))
		  		     		  							}, this.Ur = new L.Pixel(0, 0), this.Mf.Ej()
		  		     		  						}
		  		     		  					},
		  		     		  					AnimationOffsetChanged: function () {
		  		     		  						this.positionChanged()
		  		     		  					},
		  		     		  					Sy: function () {
		  		     		  						if (this.Mf && (this.Mf.stop(), this.set("AnimationOffset", this.Ur)), this.set("AnimationOffset", new L.Pixel(0, -40)), this.hl) this.hl.set("position", this.get("position"));
		  		     		  						else {
		  		     		  							var t = new M({
		  		     		  								zIndex: this.get("zIndex") - 1,
		  		     		  								icon: new U({
		  		     		  									image: L.k.Va + "/theme/v1.3/dragCross.png",
		  		     		  									size: new L.Size(14, 11)
		  		     		  								}),
		  		     		  								offset: new L.Pixel(-4, -5),
		  		     		  								position: this.get("position")
		  		     		  							});
		  		     		  							t.da = !0, this.hl = t
		  		     		  						}
		  		     		  						this.hl.setMap(this.map.Fb)
		  		     		  					},
		  		     		  					Uw: function () {
		  		     		  						this.set("animation", "AMAP_ANIMATION_DROP", !0), this.vr(!0, "in"), this.hl.setMap(null)
		  		     		  					},
		  		     		  					animationChanged: function () {
		  		     		  						this.Mf && (this.Mf.stop(), this.set("AnimationOffset", this.Ur), this.Mf = null);
		  		     		  						var t = this.get("animation");
		  		     		  						t && "AMAP_ANIMATION_NONE" !== t && ("AMAP_ANIMATION_DROP" === t ? this.vr(!0, "in", 100) : this.vr())
		  		     		  					},
		  		     		  					Vf: function () {
		  		     		  						this.hl && this.hl.set("position", this.get("position"))
		  		     		  					},
		  		     		  					raiseOnDragChanged: function () {
		  		     		  						this.get("raiseOnDrag") ? (this.e("dragstart", this.Sy, this), this.e("dragging", this.Vf, this), this.e("dragend", this.Uw, this)) : (this.D("dragstart", this.Sy, this), this.D("dragging", this.Vf, this), this.D("dragend", this.Uw, this))
		  		     		  					},
		  		     		  					lh: function (t) {
		  		     		  						var i = this.get("position");
		  		     		  						t = this.map.wb(i).add(t.multiplyBy(this.map.get("resolution"))), i instanceof L.LngLat ? this.set("position", this.map.je(t)) : this.set("position", t)
		  		     		  					},
		  		     		  					ZK: function () {
		  		     		  						var t = this.get("content"),
		  		     		  							i = this.get("shadow"),
		  		     		  							e = this.get("offset"),
		  		     		  							n = this.get("label"),
		  		     		  							t = t ? this.Uz(t, e) : this.Rs(this.get("icon"), e);
		  		     		  						this.set("contentDom", t), i && (i = this.Wz(i, e), this.set("shadowDom", i)), n && n.content && this.set("labelDom", this.Vz(n.content))
		  		     		  					},
		  		     		  					Vz: function (t) {
		  		     		  						var i = document.createElement("div");
		  		     		  						return i.className = "amap-marker-label", i.innerHTML = t, i
		  		     		  					},
		  		     		  					Wi: function () {
		  		     		  						if (this.map && this.get("position") && !this.A) {
		  		     		  							var t = this.map,
		  		     		  								i = this.map.wb(this.get("position")),
		  		     		  								t = this.A = new L.kd({
		  		     		  									name: "marker-" + L.g.Vb(this),
		  		     		  									map: t,
		  		     		  									ja: new L.W.Bd([i.x, i.y])
		  		     		  								});
		  		     		  							t.Mh = this, this.J("coords", t, !0), t.J("offset", this, !0), t.J("isTop", this, !0), t.J("zIndex", this, !0), t.J("params", this, !0)
		  		     		  						}
		  		     		  					},
		  		     		  					getParams: function () {
		  		     		  						return {
		  		     		  							zIndex: this.get("zIndex"),
		  		     		  							Kz: this.get("angle"),
		  		     		  							Xh: this.get("contentDom"),
		  		     		  							yN: this.get("labelDom"),
		  		     		  							QP: this.get("shadowDom"),
		  		     		  							opacity: this.get("opacity"),
		  		     		  							title: this.get("title"),
		  		     		  							label: this.get("label"),
		  		     		  							Bv: this.get("AnimationOffset"),
		  		     		  							offset: this.get("offset"),
		  		     		  							vN: this.get("isTop"),
		  		     		  							shape: this.get("shape"),
		  		     		  							visible: this.get("visible")
		  		     		  						}
		  		     		  					},
		  		     		  					offsetChanged: function () {
		  		     		  						if (this.A && this.A.O) {
		  		     		  							var t = this.map.wb(this.get("position")).subtract(this.A.ba).divideBy(this.map.get("resolution"));
		  		     		  							this.A.O && (this.A.O.style.left = Math.floor(t.x) + this.get("offset").x + this.get("AnimationOffset").x + "px", this.A.O.style.top = Math.floor(t.y) + this.get("offset").y + this.get("AnimationOffset").y + "px")
		  		     		  						}
		  		     		  					},
		  		     		  					positionChanged: function () {
		  		     		  						if (this.A) {
		  		     		  							var t = this.map.wb(this.get("position"));
		  		     		  							this.set("coords", [t.x, t.y]), this.A.O && this.A.O.Zr && (t = t.subtract(this.A.NB.ba).divideBy(this.map.get("resolution")), this.A.O.style.left = Math.floor(t.x) + this.get("offset").x + this.get("AnimationOffset").x + "px", this.A.O.style.top = Math.floor(t.y) + this.get("offset").y + this.get("AnimationOffset").y + "px", this.A.O.parentNode !== this.A.O.Zr && this.A.O.Zr.appendChild(this.A.O))
		  		     		  						}
		  		     		  					},
		  		     		  					contentChanged: function () {
		  		     		  						if (this.A) {
		  		     		  							this.map.Tb.um = !0, this.map.Tb.Nk.push(this.A), this.A.O && this.A.O.removeChild(this.get("contentDom"));
		  		     		  							var t = this.get("content"),
		  		     		  								i = this.get("offset"),
		  		     		  								t = this.Uz(t, i);
		  		     		  							this.set("contentDom", t), this.A.O && (L.h.td && L.g.iepngFix(t), this.A.O.appendChild(t), this.A.Xh = t)
		  		     		  						}
		  		     		  					},
		  		     		  					iconChanged: function () {
		  		     		  						if (this.A && this.A.O && !this.get("content")) {
		  		     		  							this.map.Tb.um = !0, this.map.Tb.Nk.push(this.A), this.A.O && this.get("contentDom") && this.A.O.removeChild(this.get("contentDom"));
		  		     		  							var t = this.get("icon"),
		  		     		  								i = this.get("offset"),
		  		     		  								t = this.Rs(t, i);
		  		     		  							this.set("contentDom", t), this.A.O && (L.h.td && L.g.iepngFix(t), this.A.O.appendChild(t), this.A.Xh = t)
		  		     		  						}
		  		     		  					},
		  		     		  					shadowChanged: function () {
		  		     		  						if (this.A && this.A.O) {
		  		     		  							var t = this.get("shadowDom");
		  		     		  							if (this.A.O && t && t.parentNode === this.A.O && this.A.O.removeChild(t), t = this.get("shadow")) {
		  		     		  								var i = this.get("offset"),
		  		     		  									t = this.Wz(t, i);
		  		     		  								this.set("shadowDom", t), this.A.O && this.A.O.appendChild(t)
		  		     		  							}
		  		     		  						}
		  		     		  					},
		  		     		  					titleChanged: function () {
		  		     		  						this.A && this.A.Xh && "string" == typeof this.get("title") && this.A.Xh && this.get("title") && (this.A.Xh.title = this.get("title"))
		  		     		  					},
		  		     		  					labelChanged: function () {
		  		     		  						if (this.A && this.A.O) {
		  		     		  							var t = this.get("label"),
		  		     		  								i = this.A.O;
		  		     		  							if (i && t && t.hasOwnProperty("content")) {
		  		     		  								this.get("labelDom") && i.removeChild(this.get("labelDom"));
		  		     		  								var e = "";
		  		     		  								if (t.content) {
		  		     		  									var e = this.Vz(t.content),
		  		     		  										n = 0,
		  		     		  										s = 0;
		  		     		  									t.offset && (n = t.offset.y + "px", s = t.offset.x + "px"), e.style.top = n, e.style.left = s, i.appendChild(e)
		  		     		  								}
		  		     		  								this.set("labelDom", e)
		  		     		  							}
		  		     		  						}
		  		     		  					},
		  		     		  					isTopChanged: function () {
		  		     		  						var t = this.map.Tb.Tp,
		  		     		  							i = this.get("isTop"),
		  		     		  							e = this.get("zIndex");
		  		     		  						t ? t === this ? this.A && this.A.O && (this.A.O.style.zIndex = i ? this.map.Tb.Kj + 10 : e, this.map.Tb.Tp = i ? this : null) : (t.A && t.A.O && (t.A.O.style.zIndex = i ? t.get("zIndex") : this.map.Tb.Kj + 10), this.A && this.A.O && (this.A.O.style.zIndex = i ? this.map.Tb.Kj + 10 : e), this.map.Tb.Tp = i ? this : t) : (this.map.Tb.Tp = this, this.A && this.A.O && (this.A.O.style.zIndex = i ? this.map.Tb.Kj + 10 : e))
		  		     		  					},
		  		     		  					visibleChanged: function () {
		  		     		  						this.A && this.A.O && (this.get("visible") ? this.A.O.style.display = "block" : this.A.O.style.display = "none")
		  		     		  					},
		  		     		  					angleChanged: function () {
		  		     		  						if (this.A && this.A.O) {
		  		     		  							var t = {
		  		     		  								x: -1 * this.get("offset").x,
		  		     		  								y: -1 * this.get("offset").y
		  		     		  							};
		  		     		  							L.d.rotate(this.A.O, this.get("angle") || 0, t)
		  		     		  						}
		  		     		  					},
		  		     		  					zIndexChanged: function () {
		  		     		  						var t = this.get("zIndex");
		  		     		  						if (t > this.map.Tb.Kj) {
		  		     		  							this.map.Tb.Kj = t;
		  		     		  							var i = this.map.Tb.Tp;
		  		     		  							i && i.A && i.A.O && (i.A.O.style.zIndex = t + 10)
		  		     		  						}
		  		     		  						this.A && this.A.O && (this.A.O.style.zIndex = this.get("isTop") ? this.map.Tb.Kj + 10 : this.get("zIndex"))
		  		     		  					},
		  		     		  					opacityChanged: function () {
		  		     		  						var t = this.get("contentDom"),
		  		     		  							i = this.get("shadowDom");
		  		     		  						t && L.d.mi(t, this.get("opacity")), i && L.d.mi(i, this.get("opacity"))
		  		     		  					},
		  		     		  					Uz: function (t) {
		  		     		  						var i;
		  		     		  						return i = document.createElement("div"), i.className = "amap-marker-content", "string" != typeof t ? i.appendChild(t) : (i.innerHTML = t, i.childNodes[0] && !i.childNodes[0].style && (i.style["white-space"] = "pre")), L.d.mi(i, this.get("opacity")), i
		  		     		  					},
		  		     		  					Rs: function (t) {
		  		     		  						var i, e, n, s, o, a = 0,
		  		     		  							r = 0;
		  		     		  						return t ? ("string" == typeof t ? (i = t, o = !0) : (i = t.get("image"), r = t.get("size"), e = t.get("imageSize"), a = r.width, r = r.height, e && (n = e.width, s = e.height)), a || (a = 0), r || (r = 0), t = "string" != typeof t ? t.get("imageOffset") : {
		  		     		  							x: 0,
		  		     		  							y: 0
		  		     		  						}) : (i = L.k.ih + "/mark_bs.png", t = {
		  		     		  							x: 0,
		  		     		  							y: 0
		  		     		  						}, a = 19, r = 33, n = 19, s = 33), e = document.createElement("div"), e.className = "amap-icon", e.style.position = "absolute", o && !L.h.Oc && (e.style.overflow = "inherit"), a && (e.style.width = a + "px"), r && (e.style.height = r + "px"), a = document.createElement("img"), a.src = i, n && s && (a.style.width = n + "px", a.style.height = s + "px"), a.style.top = t.y + "px", a.style.left = t.x + "px", L.h.Oc && o || e.appendChild(a), L.d.mi(L.h.Oc && o ? a : e, this.get("opacity")), L.h.Oc && o ? a : e
		  		     		  					},
		  		     		  					Wz: function (t, i) {
		  		     		  						var e = this.Rs(t, i);
		  		     		  						return e.style.zIndex = -1, e
		  		     		  					},
		  		     		  					moveChanged: function () {
		  		     		  						var t = this.get("move");
		  		     		  						return !1 === t ? this.ZP() : void(void 0 !== t && ("[object Array]" === Object.prototype.toString.call(t.qg) ? this.SN(t.qg, t.speed, t.xa, t.nL) : this.moveTo(t.qg, t.speed, t.xa)))
		  		     		  					},
		  		     		  					moveTo: function (t, i, e) {
		  		     		  						var n = this.get("position");
		  		     		  						t.subtract(n);
		  		     		  						var s = Math.round(t.distance(n) / 1e3 / i * 36e5);
		  		     		  						return 0 === s ? this.q("moveend") : (this.df && (this.df.stop(), this.df = null), this.df = new L.Bg(n, t), e = e || function (t) {
		  		     		  							return t
		  		     		  						}, this.df.transition = function (t, i, n) {
		  		     		  							if (n >= s) return i;
		  		     		  							var o = (i.B - t.B) * e(n / s) + t.B;
		  		     		  							return t = (i.G - t.G) * e(n / s) + t.G, new L.LngLat(o, t)
		  		     		  						}, this.df.Im = function (i) {
		  		     		  							this.set("position", i), i.equals(t) ? (this.df && (this.df.stop(), this.df = null), this.zc.q("moveend"), this.q("moveend")) : this.zc.q("moving")
		  		     		  						}, this.get("autoRotation") && !L.h.Oc && (i = this.PG(n, t), this.set("angle", i)), void this.df.Ej(this))
		  		     		  					},
		  		     		  					ZP: function () {
		  		     		  						this.df && (this.df.stop(), this.df = null, this.q("movestop"))
		  		     		  					},
		  		     		  					SN: function (t, i, e, n) {
		  		     		  						function s() {
		  		     		  							o += 1, o < t.length ? this.moveTo(t[o], i, e) : (this.ia("movealong"), n ? (o = 1, this.set("position", t[0]), this.moveTo(t[1], i, e)) : this.D("moveend", s, this))
		  		     		  						}
		  		     		  						var o = 0;
		  		     		  						this.set("position", t[0]), this.e("moveend", s, this), this.e("movestop", function () {
		  		     		  							this.D("moveend", s, this)
		  		     		  						}, this), this.moveTo(t[0], i, e)
		  		     		  					},
		  		     		  					PG: function (t, i) {
		  		     		  						var e = this.map,
		  		     		  							n = e.wb(t),
		  		     		  							e = e.wb(i),
		  		     		  							s = 0;
		  		     		  						e.distance(n);
		  		     		  						var o = e.y - n.y,
		  		     		  							a = e.x - n.x;
		  		     		  						return 0 !== e.x - n.x ? (s = Math.atan((e.y - n.y) / (e.x - n.x)), o >= 0 && 0 > a ? s = Math.PI + s : 0 > o && 0 >= a ? s = Math.PI + s : 0 > o && a >= 0 && (s = 2 * Math.PI + s)) : s = e.y > n.y ? Math.PI / 2 : 3 * Math.PI / 2, L.g.Ff(180 * s / Math.PI, 1)
		  		     		  					}
		  		     		  				}), L.ra.cq = L.ra.Ah.extend({
		  		     		  					r: function (t, i) {
		  		     		  						arguments.callee.Sa.apply(this, arguments), this.J("items", t, !0), this.J("content", t, !0), this.J("resolution", i), this.J("centerCoords", i), this.bm = t
		  		     		  					},
		  		     		  					lC: function () {
		  		     		  						this.Zd(), this.dl(), this.uh(), this.map.e("movestart", this.uf, this), this.map.e("mapmove", this.uf, this), this.map.e("zoomstart", this.uf, this), this.map.e("click", this.uf, this), this.map.e("closeOverlays", this.uf, this), this.map.e("rotate", this.uf, this)
		  		     		  					},
		  		     		  					uf: function () {
		  		     		  						this.bm.map && this.bm.close()
		  		     		  					},
		  		     		  					mapChanged: function () {},
		  		     		  					positionChanged: function () {
		  		     		  						this.uh()
		  		     		  					},
		  		     		  					Zd: function () {
		  		     		  						this.u && (this.u.parentNode && this.u.parentNode.removeChild(this.u), this.u = null);
		  		     		  						var t = L.d.create("div", null, "amap-menu");
		  		     		  						L.l.e(t, "mousedown", function (t) {
		  		     		  							L.l.stopPropagation(t)
		  		     		  						}, this), this.u = t, this.map.Ra.ra.appendChild(this.u)
		  		     		  					},
		  		     		  					dl: function () {
		  		     		  						var t = this,
		  		     		  							i = this.u;
		  		     		  						i.innerHTML = "";
		  		     		  						var e = this.get("content");
		  		     		  						if ("object" == typeof e) i.appendChild(e);
		  		     		  						else if ("string" == typeof e) i.innerHTML = e;
		  		     		  						else if ((e = this.get("items")) && e.length) {
		  		     		  							var n = L.d.create("ul", i, "amap-menu-outer");
		  		     		  							for (e.sort(function (t, i) {
		  		     		  									return isNaN(t.qp) || isNaN(i.qp) ? 0 : t.qp - i.qp
		  		     		  								}), i = 0; i < e.length; i += 1)(function (i) {
		  		     		  								var e = i.eE,
		  		     		  									s = i.xa,
		  		     		  									o = L.d.create("li", n);
		  		     		  								o.innerHTML = e, L.l.e(o, "click", function () {
		  		     		  									s.call(o), t.bm.close()
		  		     		  								}, o)
		  		     		  							})(e[i])
		  		     		  						} else this.u.innerHTML = ""
		  		     		  					},
		  		     		  					uh: function () {
		  		     		  						var t = this.map,
		  		     		  							i = this.u;
		  		     		  						if (t && i) {
		  		     		  							var e = t.wb(this.get("position")),
		  		     		  								n = this.get("centerCoords"),
		  		     		  								i = (e.x - n.x) / this.get("resolution"),
		  		     		  								e = (e.y - n.y) / this.get("resolution"),
		  		     		  								t = t.get("size"),
		  		     		  								e = e + t.height / 2,
		  		     		  								i = i + t.width / 2;
		  		     		  							this.u.style.right = "", this.u.style.bottom = "", this.u.style.left = i + "px", this.u.style.top = e + "px"
		  		     		  						}
		  		     		  					},
		  		     		  					ef: function () {
		  		     		  						this.u && (this.map.D("click", this.Fw, this), this.map.Ra.ra.removeChild(this.u), this.bm.Cf = !1, this.u = this.bm.Ae.map = null, this.map.D("movestart", this.uf, this), this.map.D("zoomstart", this.uf, this), this.map.D("click", this.uf, this), this.map.D("closeOverlays", this.uf, this), this.map.D("rotate", this.uf, this))
		  		     		  					},
		  		     		  					visibleChanged: function () {
		  		     		  						this.u && (this.get("visible") ? this.u.style.display = "block" : this.u.style.display = "none")
		  		     		  					},
		  		     		  					itemsChanged: function () {
		  		     		  						this.u && this.dl()
		  		     		  					}
		  		     		  				}), L.ra.yh = L.ra.Ah.extend({
		  		     		  					r: function (t, i) {
		  		     		  						arguments.callee.Sa.apply(this, arguments), this.cd("content position contentU isCustom autoMove showShadow closeWhenClickMap size offset".split(" "), t), this.J("resolution", i), this.J("centerCoords", i), this.J("retainWhenClose", t, !0), this.J("display", i), t.J("toBeClose", this), this.map = i, this.Ug = t
		  		     		  					},
		  		     		  					lC: function () {
		  		     		  						this.zL ? this.map.Ra.ra.appendChild(this.Ia) : (this.Zd(), this.dl(), this.uL()), this.rv(), this.uh(), this.pw(), this.zL = !0
		  		     		  					},
		  		     		  					Zd: function () {
		  		     		  						var t = L.d.create("div");
		  		     		  						t.className = "amap-info";
		  		     		  						var i = L.d.create("div", t),
		  		     		  							e = L.d.create("div", t),
		  		     		  							n = L.d.create("div", e);
		  		     		  						t.style.position = "absolute", e.style.position = "absolute", e.style.bottom = -1 * (this.get("offset").y || 0) + "px", e.style.left = (this.get("offset").x || 0) + "px", i.style.position = "absolute", i.style.bottom = -1 * (this.get("offset").y || 0) + "px", i.style.left = (this.get("offset").x || 0) + "px", this.Ia = t, this.Rb = e, this.Sm = i, this.Td = n, this.map.Ra.ra.appendChild(this.Ia)
		  		     		  					},
		  		     		  					dl: function () {
		  		     		  						var t = this.get("contentU");
		  		     		  						if (t) {
		  		     		  							var i = this.get("isCustom"),
		  		     		  								e = this.Td,
		  		     		  								n = this.Sm;
		  		     		  							e.innerHTML = "";
		  		     		  							var s = null;
		  		     		  							if (i) {
		  		     		  								if ("string" == typeof t) e.innerHTML = t;
		  		     		  								else if (t instanceof Array)
		  		     		  									for (s = 0; s < t.length; s += 1) e.appendChild(t[s]);
		  		     		  								else e.appendChild(t);
		  		     		  								s = e, n.parentNode && n.parentNode.removeChild(n)
		  		     		  							} else s = n = L.d.create("div", e, "amap-info-content amap-info-outer"), "string" == typeof t ? n.innerHTML = t : n.appendChild(t), this.AL = n, t = L.d.create("a", this.Td, "amap-info-close"), t.innerHTML = "\\u00d7", this.Vs = t, t.href = "javascript: void(0)", L.h.uc ? (L.l.e(t, "touchstart", function (t) {
		  		     		  								L.l.stop(t)
		  		     		  							}, this), L.l.e(t, "touchend", function (t) {
		  		     		  								L.l.stop(t), this.Ug.close()
		  		     		  							}, this), L.l.e(t, "click", function (t) {
		  		     		  								L.l.stop(t), this.Ug.close()
		  		     		  							}, this)) : (L.l.e(t, "mousedown", function (t) {
		  		     		  								L.l.stop(t)
		  		     		  							}, this), L.l.e(t, "click", function (t) {
		  		     		  								L.l.stop(t), this.Ug.close()
		  		     		  							}, this)), (t = this.get("size", !0)) && (0 !== t.width && (n.style.width = t.width + "px"), 0 !== t.height && (n.style.height = t.height + "px")), t = L.d.create("div", e, "amap-info-sharp"), t.style.height = "23px", (L.h.td || L.h.zm) && (t.style.marginLeft = e.childNodes[0].offsetWidth / 2 - 5), this.Sm.style.display = "block";
		  		     		  							e = function (t) {
		  		     		  								L.l.stopPropagation(t)
		  		     		  							}, L.h.uc ? (L.l.e(s, "touchstart", e, this), L.l.e(s, "touchmove", e, this), L.l.e(s, "touchend", e, this)) : (L.l.e(s, "mousedown", e, this), L.l.e(s, "mouseup", e, this), L.l.e(s, "mousemove", e, this))
		  		     		  						}
		  		     		  					},
		  		     		  					rv: function () {
		  		     		  						var t = this.get("isCustom"),
		  		     		  							i = this.get("showShadow");
		  		     		  						if (!t && i) {
		  		     		  							var t = this.Sm,
		  		     		  								i = L.d.tm(this.Td),
		  		     		  								e = i.height - 23,
		  		     		  								n = i.width;
		  		     		  							(L.h.td || L.h.zm) && (e = this.Td.childNodes[0].offsetHeight, n = this.Td.childNodes[0].offsetWidth + 26), i = "background-image:url(" + L.k.Va + (L.h.td ? "/theme/v1.3/iws.gif);" : "/theme/v1.3/iws.png);"), t.innerHTML = "";
		  		     		  							var s, o = [];
		  		     		  							for (s = o[1] = {}, s.height = .5 * e + 4, s.width = n, s.offsetX = 400, s.offsetY = 16, s.top = -s.height - 10 - 15, s.left = 23, s = o[2] = {}, s.height = o[1].height, s.width = o[1].height, s.offsetX = 1075 - s.width, s.offsetY = o[1].offsetY, s.top = o[1].top, s.left = 23 + o[1].width, s = o[3] = {}, s.height = 10, s.width = 22, s.offsetX = 30, s.offsetY = 445, s.top = -25, s.left = 23 + (L.h.zm || L.h.td ? 5 : 0), s = o[4] = {}, s.height = 10, s.width = n / 2 - 15 - o[3].left - o[3].width, s.offsetX = 132, s.offsetY = 445, s.top = -25, s.left = o[3].left + o[3].width, s = o[5] = {}, s.height = 10, s.width = 70, s.offsetX = 80, s.offsetY = 445, s.top = -25, s.left = o[4].left + o[4].width, s = o[6] = {}, s.height = 10, s.width = n - o[5].left - o[5].width, s.offsetX = 132, s.offsetY = 445, s.top = -25, s.left = o[5].left + o[5].width, s = o[7] = {}, s.height = 10, s.width = 30, s.offsetX = 621, s.offsetY = 445, s.top = -25, s.left = n, s = o[8] = {}, s.height = 15, s.width = 70, s.offsetX = 47, s.offsetY = 470, s.top = -15, s.left = n / 2 - 15, e = 1; 8 >= e; e += 1) n = L.d.create("div", t), s = [], s.push("position:absolute;"), s.push(i), s.push("top:" + o[e].top + "px;"), s.push("left:" + o[e].left + "px;"), s.push("width:" + o[e].width + "px;"), s.push("height:" + o[e].height + "px;"), s.push("background-position:" + -o[e].offsetX + "px " + -o[e].offsetY + "px;"), n.style.cssText = s.join("")
		  		     		  						}
		  		     		  					},
		  		     		  					WT: function () {},
		  		     		  					uh: function () {
		  		     		  						var t = this.map,
		  		     		  							i = this.Ia,
		  		     		  							e = this.get("position"),
		  		     		  							n = this.get("resolution");
		  		     		  						if (t && i && e) {
		  		     		  							var e = t.wb(this.get("position")),
		  		     		  								s = this.get("centerCoords"),
		  		     		  								i = (e.x - s.x) / n,
		  		     		  								n = (e.y - s.y) / n,
		  		     		  								t = t.get("size"),
		  		     		  								e = L.d.tm(this.Td);
		  		     		  							if ((L.h.td || L.h.zm) && (e.width = this.Td.childNodes[0].offsetWidth + 14), e = this.get("isCustom") ? e.width / 2 : (e.width - 30) / 2, this.Ia.style.left = i + t.width / 2 - e + "px", this.Ia.style.top = n + t.height / 2 + "px", i = this.AL, this.Vs && i.childNodes[0]) {
		  		     		  								for (n = t = 0; n < i.childNodes.length; n += 1) t += i.childNodes[0].clientHeight || 0;
		  		     		  								t > (this.get("size").height || i.clientHeight) ? this.Vs.style.right = "20px" : this.Vs.style.right = "5px"
		  		     		  							}
		  		     		  						}
		  		     		  					},
		  		     		  					gG: function () {
		  		     		  						var t = new L.Pixel(2 - this.Td.offsetWidth / 2, 2 - this.Td.offsetHeight),
		  		     		  							i = this.get("offset") || new L.Pixel(0, 0);
		  		     		  						return this.get("isCustom") || (t = t.add(new L.Pixel(0, -23))), t.add(i)
		  		     		  					},
		  		     		  					pw: function () {
		  		     		  						if (this.get("position") && this.get("autoMove") && this.Td) {
		  		     		  							var t = this.map,
		  		     		  								i = new L.Size(this.Td.offsetWidth, this.Td.offsetHeight);
		  		     		  							t.lnglatTocontainer(this.get("position"));
		  		     		  							for (var e = t.lnglatTocontainer(this.get("position")).add(this.gG()), n = e.add(i.$k()), s = t.get("size"), o = t.AM(), a = 0, r = 0, h = 0; h < o.length; h += 1) {
		  		     		  								var l = o[h],
		  		     		  									u = 0,
		  		     		  									c = 0;
		  		     		  								0 === l[1] && 0 === l[2] ? (u = l[3] - (e.x + a), c = l[0] - (e.y + r), u > 0 && c > 0 && (Math.abs(u) < Math.abs(c) ? a += u : r += c)) : 0 === l[2] && 0 === l[3] ? (u = s.getWidth() - l[1] - (n.x + a), c = l[0] - (e.y + r), 0 > u && c > 0 && (Math.abs(u) < Math.abs(c) ? a += u : r += c)) : 0 === l[0] && 0 === l[3] ? (u = s.getWidth() - l[1] - (n.x + a), c = s.getHeight() - l[2] - (n.y + r), 0 > u && 0 > c && (Math.abs(u) < Math.abs(c) ? a += u : r += c)) : 0 === l[0] && 0 === l[1] && (u = l[3] - (e.x + a), c = s.getHeight() - l[2] - (n.y + r), u > 0 && 0 > c && (Math.abs(u) < Math.abs(c) ? a += u : r += c))
		  		     		  							}
		  		     		  							e = e.add(new L.Pixel(a, r)), n = n.add(new L.Pixel(a, r)), h = o = 0, 0 > e.x || i.getWidth() > s.getWidth() ? o = 20 - e.x : s.getWidth() < n.x && (o = s.getWidth() - n.x - 25), 0 > e.y || i.getHeight() > s.getHeight() ? h = 5 - e.y : s.getHeight() < n.y && (h = s.getHeight() - n.y - 15), o += a, h += r, (o || h) && t.Fb.panBy(o, h)
		  		     		  						}
		  		     		  					},
		  		     		  					uL: function () {
		  		     		  						this.get("closeWhenClickMap") && this.map.e("closeInfo", this.Fw, this, !1)
		  		     		  					},
		  		     		  					Fw: function () {
		  		     		  						this.Ug.Cf && this.Ug.close()
		  		     		  					},
		  		     		  					ef: function () {
		  		     		  						this.Ia && (this.get("retainWhenClose") ? this.map.Yj.appendChild(this.Ia) : this.Ia.parentNode === this.map.Ra.ra && this.map.Ra.ra.removeChild(this.Ia), this.Ug.Cf = !1, this.Ug.Ae.map = null, this.Ug.map = null, this.zc.q("close", {
		  		     		  							type: "close",
		  		     		  							target: this.zc
		  		     		  						}))
		  		     		  					},
		  		     		  					mR: function () {
		  		     		  						if (!this.get("isCustom")) return this.Td.offsetWidth;
		  		     		  						for (var t = this.Ce, i = t.firstChild, e = t.lastChild; i && e && i.style && e.style && i === e;) t = i, i = t.firstChild, e = t.lastChild;
		  		     		  						return t = L.d.gc(t, "width"), t = parseInt(t.replace("px", ""), 10)
		  		     		  					},
		  		     		  					displayChanged: function (t) {
		  		     		  						t ? this.uh() : L.g.yg(this.uh, this)
		  		     		  					},
		  		     		  					positionChanged: function () {
		  		     		  						this.map && this.Ia && (this.uh(), this.pw())
		  		     		  					},
		  		     		  					offsetChanged: function () {
		  		     		  						var t = this.get("offset");
		  		     		  						this.Rb.style.bottom = -1 * (t.y || 0) + "px", this.Rb.style.left = (t.x || 0) + "px", this.Sm.style.bottom = -1 * (t.y || 0) + "px", this.Sm.style.left = (t.x || 0) + "px";
		  		     		  					},
		  		     		  					contentChanged: function () {
		  		     		  						this.dl(), this.rv(), this.uh()
		  		     		  					},
		  		     		  					sizeChanged: function () {
		  		     		  						this.dl(), this.rv(), this.uh()
		  		     		  					}
		  		     		  				}), L.W = {}, L.W.si = L.Class.extend({
		  		     		  					jb: [L.oa, L.Kc],
		  		     		  					r: function () {},
		  		     		  					qb: function () {
		  		     		  						return new this.r(this.Ta)
		  		     		  					},
		  		     		  					vt: function () {
		  		     		  						return this.Ta
		  		     		  					},
		  		     		  					setCoords: function (t) {
		  		     		  						this.FP(t)
		  		     		  					},
		  		     		  					FP: function (t) {
		  		     		  						if (this.vj = this.getBounds(), this.Mc = null, L.W.Xc && this instanceof L.W.Xc) {
		  		     		  							var i = t.length;
		  		     		  							this.ue = Array(i);
		  		     		  							for (var e, n, s = 0; i > s; s += 1)
		  		     		  								if (e = t[s], n = new L.W.Qv(e), this.ue[s] = n, 0 === s) {
		  		     		  									if (0 === e.length) break;
		  		     		  									n.oj(e) || e.reverse()
		  		     		  								} else 0 !== e.length && n.oj(e) && e.reverse()
		  		     		  						} else this.Ta = t
		  		     		  					}
		  		     		  				}), L.W.VectorLayer = L.extend({}, {
		  		     		  					Qj: "point",
		  		     		  					fq: "linestring",
		  		     		  					Nv: "linearring",
		  		     		  					un: "polygon",
		  		     		  					iq: "multipoint",
		  		     		  					hq: "multilinestring",
		  		     		  					rn: "multipolygon",
		  		     		  					RQ: "geometrycollection"
		  		     		  				}), L.kd = L.Class.extend({
		  		     		  					jb: [L.oa, L.Kc],
		  		     		  					r: function (t) {
		  		     		  						t = t || {}, this.Qn = t.Qn, this.map = t.map, this.Uo = L.g.Vb(this), this.name = t.name || "", this.Ze = !1, this.set("visible", !0, !0), this.Tu(t.ja), this.Oe = t.Rp, this.style = t.style
		  		     		  					},
		  		     		  					UL: function () {
		  		     		  						this.style = this.Oe = this.Mh = this.NB = this.ja = this.name = this.map = null, this.bl(), this.tk()
		  		     		  					},
		  		     		  					XM: function () {
		  		     		  						return this.Oe
		  		     		  					},
		  		     		  					MP: function (t) {
		  		     		  						this.Oe = t, this.zIndex = this.Oe[0].xe || this.zIndex
		  		     		  					},
		  		     		  					uS: function () {
		  		     		  						return this.ja
		  		     		  					},
		  		     		  					Tu: function (t) {
		  		     		  						t && (this.ja = t, this.J("coords", t, !0), this.Qn && (t.J("radius", this), t.J("center", this), t.J("resolution", this), t.J("strokeWeight", this)))
		  		     		  					},
		  		     		  					setStyle: function (t) {
		  		     		  						this.MP(t), this.bi()
		  		     		  					},
		  		     		  					coordsChanged: function () {
		  		     		  						this.bi()
		  		     		  					},
		  		     		  					radiusChanged: function () {
		  		     		  						this.ja.vj = this.ja.getBounds(), this.ja.Mc = null, this.bi()
		  		     		  					},
		  		     		  					bi: function (t) {
		  		     		  						this.set("feature", {
		  		     		  							target: this,
		  		     		  							QL: t,
		  		     		  							vj: this.ja.vj || this.ja.getBounds(),
		  		     		  							UN: this.ja.getBounds()
		  		     		  						}), this.ja.vj = this.ja.getBounds()
		  		     		  					},
		  		     		  					visibleChanged: function () {
		  		     		  						this.bi()
		  		     		  					},
		  		     		  					CS: function (t) {
		  		     		  						for (var i = 0; i < this.Oe.length; i += 1) {
		  		     		  							var e = this.Oe[i];
		  		     		  							if (t.equals(e.vk(this))) return e
		  		     		  						}
		  		     		  					},
		  		     		  					DM: function () {
		  		     		  						var t = this.ja,
		  		     		  							i = [];
		  		     		  						return t.Hd() === L.W.VectorLayer.un || t.Hd() === L.W.VectorLayer.rn ? i.push(new L.style.Ob.Xc({
		  		     		  							fillColor: "#78cdd1",
		  		     		  							sc: .2,
		  		     		  							strokeColor: "#122e29",
		  		     		  							na: .5,
		  		     		  							Xa: 1
		  		     		  						})) : t.Hd() === L.W.VectorLayer.fq || t.Hd() === L.W.VectorLayer.Nv || t.Hd() === L.W.VectorLayer.hq ? i.push(new L.style.Ob.Pv({
		  		     		  							color: "#888888",
		  		     		  							width: 1,
		  		     		  							zIndex: 10
		  		     		  						})) : t.Hd() !== L.W.VectorLayer.Qj && t.Hd() !== L.W.VectorLayer.iq || i.push(new L.style.Ob.nn({
		  		     		  							url: L.k.Va + "/theme/v1.3/markers/0.png",
		  		     		  							width: 36,
		  		     		  							height: 36,
		  		     		  							rotation: 0,
		  		     		  							mU: -12,
		  		     		  							nU: -36,
		  		     		  							zIndex: 100
		  		     		  						})), i
		  		     		  					}
		  		     		  				}), L.kd.NQ = "geometry", L.W.Bd = L.W.si.extend({
		  		     		  					r: function (t, i) {
		  		     		  						this.Ta = t, this.dh = i, this.Mc = null
		  		     		  					},
		  		     		  					getBounds: function () {
		  		     		  						if (!this.Mc) {
		  		     		  							var t = this.Ta[0],
		  		     		  								i = this.Ta[1];
		  		     		  							if (this.dh) this.Mc = [t, i, t, i];
		  		     		  							else {
		  		     		  								var e = this.get("radius"),
		  		     		  									e = e ? e / Math.cos(Math.PI * this.get("center").G / 180) : 0,
		  		     		  									n = this.get("resolution") * this.get("strokeWeight") || 0;
		  		     		  								this.Mc = [t - e - n, i - e - n, t + e + n, i + e + n]
		  		     		  							}
		  		     		  						}
		  		     		  						return this.Mc
		  		     		  					},
		  		     		  					Hd: function () {
		  		     		  						return L.W.VectorLayer.Qj
		  		     		  					}
		  		     		  				}), L.P = {
		  		     		  					canvas: {},
		  		     		  					$b: {},
		  		     		  					eU: {},
		  		     		  					hi: {}
		  		     		  				}, L.P.ye = L.Class.extend({
		  		     		  					jb: [L.oa, L.Kc],
		  		     		  					initialize: function (t, i) {
		  		     		  						this.K = t, this.dh = t.ec.dh, this.Un = i, this.w = i.w, this.J("display", i)
		  		     		  					},
		  		     		  					yt: function (t, i) {
		  		     		  						var e = this.zoom,
		  		     		  							n = [],
		  		     		  							s = this.K;
		  		     		  						if (Math.floor(e) !== e) i(n, s);
		  		     		  						else {
		  		     		  							if (e = [t.x, t.y], s.um) {
		  		     		  								for (var o = s.Nk, a = !0, r = [], h = 0; h < o.length; h += 1) {
		  		     		  									var l = o[h].Xh;
		  		     		  									if (l) {
		  		     		  										var u = l.clientWidth,
		  		     		  											c = l.clientHeight;
		  		     		  										l.childNodes[0] && (u = u || l.childNodes[0].clientWidth, c = c || l.childNodes[0].clientHeight), window.opera && (u = Math.max(u, l.childNodes[0].scrollWidth), c = Math.max(c, l.childNodes[0].scrollHeight)), 0 === u || 0 === c ? (a = !1, r.push(o[h])) : (s.tg = Math.max(s.tg, Math.abs(o[h].get("offset").x) + u), s.ug = Math.max(s.ug, Math.abs(o[h].get("offset").y) + c), o[h].width = u, o[h].height = c)
		  		     		  									}
		  		     		  								}
		  		     		  								a ? (s.um = !1, s.Nk = []) : s.Nk = r
		  		     		  							}
		  		     		  							if (o = Math.max(s.tg, s.Mk || 0) * this.L1, a = Math.max(s.ug, s.Mk || 0) * this.L1, a = Math.max(a, s.jh || 0), o = Math.max(o, s.jh || 0), o = s.Gf([e[0] - o, e[1] - a, e[0] + o, e[1] + a])) {
		  		     		  								for (var d in o)
		  		     		  									if (o.hasOwnProperty(d) && (a = o[d], a.get("visible") && !a.get("noSelect")))
		  		     		  										if (h = a.ja, h instanceof L.W.Bd) {
		  		     		  											if (this.dh) {
		  		     		  												var r = this.K.Pp,
		  		     		  													u = r.size.width * this.L1,
		  		     		  													c = r.size.height * this.L1,
		  		     		  													p = r.anchor.x * this.L1,
		  		     		  													f = r.anchor.y * this.L1,
		  		     		  													u = L.j.Rz([
		  		     		  														[e[0] - u + p, e[1] - c + f],
		  		     		  														[e[0] + p, e[1] + f]
		  		     		  													]);
		  		     		  												L.j.ge(u, h.Ta) && n.push(a)
		  		     		  											} else if ("undefined" != typeof h.get("radius")) r = h.Ta, r = new L.Pixel(r[0], r[1]), new L.Pixel(e[0], e[1]).distance(r) * Math.cos(a.get("center").G * Math.PI / 180) <= h.get("radius") && n.push(a);
		  		     		  											else if (r = a.get("params"), r.visible) {
		  		     		  												if (h = h.Ta, p = r.Kz % 360, l = [e[0], e[1]], p) {
		  		     		  													var u = (e[0] - h[0]) / this.L1,
		  		     		  														c = (e[1] - h[1]) / this.L1,
		  		     		  														f = Math.PI * p / 180,
		  		     		  														p = Math.cos(-f),
		  		     		  														f = Math.sin(-f),
		  		     		  														m = u * f + c * p;
		  		     		  													l[0] = h[0] + (u * p - c * f) * this.L1, l[1] = h[1] + m * this.L1
		  		     		  												}
		  		     		  												for (u = a.width * this.L1, c = a.height * this.L1, p = r.offset.x * this.L1, f = r.offset.y * this.L1, u = L.j.Rz([
		  		     		  														[l[0] - u - p, l[1] - c - f],
		  		     		  														[l[0] - p, l[1] - f]
		  		     		  													]), h[0] instanceof Array || (h = [h]), c = h.length - 1; c >= 0; c -= 1)
		  		     		  													if (L.j.ge(u, h[c])) {
		  		     		  														r.shape ? this.oN(a, l, h) && n.push(a) : n.push(a);
		  		     		  														break
		  		     		  													}
		  		     		  											}
		  		     		  										} else h.ge ? h.ge(e) && n.push(a) : h.Qo && 1.8 * h.Qo(e) <= a.get("strokeWeight") * this.L1 && n.push(a);
		  		     		  								this.dh || n.sort(function (t, i) {
		  		     		  									return t.get("isTop") ? -1 : i.get("isTop") ? 1 : t.get("zIndex") > i.get("zIndex") || t.get("zIndex") === i.get("zIndex") && t.Uo > i.Uo ? -1 : 1
		  		     		  								}), i(n, s)
		  		     		  							} else i([], s)
		  		     		  						}
		  		     		  					},
		  		     		  					oN: function (t, i, e) {
		  		     		  						var n = (i[0] - e[0][0]) / this.L1;
		  		     		  						i = (i[1] - e[0][1]) / this.L1, t = t.get("params"), e = t.offset;
		  		     		  						var s, n = [n - e.x, i - e.y];
		  		     		  						if (t = t.shape, "circle" === t.F.type) {
		  		     		  							if (i = t.F.coords[0], e = t.F.coords[1], Math.sqrt((n[0] - i) * (n[0] - i) + (n[1] - e) * (n[1] - e)) <= t.F.coords[2]) return !0
		  		     		  						} else {
		  		     		  							if ("poly" === t.F.type) return s = t.F.coords, s = this.eL(s), L.wh.ge(n, s);
		  		     		  							if ("rect" === t.F.type) return s = t.F.coords, t = s[0], i = s[1], e = s[2], s = s[3], s = [
		  		     		  								[t, i],
		  		     		  								[e, i],
		  		     		  								[e, s],
		  		     		  								[t, s]
		  		     		  							], L.wh.ge(n, s)
		  		     		  						}
		  		     		  						return !1
		  		     		  					},
		  		     		  					eL: function (t) {
		  		     		  						for (var i = [], e = 0; e / 2 < t.length / 2; e += 2) i.push([t[e], t[e + 1]]);
		  		     		  						return i
		  		     		  					},
		  		     		  					zt: function (t, i, e, n, s, o, a) {
		  		     		  						var r = ["position:absolute;"];
		  		     		  						r.push("top:" + Math.round(e) + "px;"), r.push("left:" + Math.round(i) + "px;"), r.push("width:" + Math.round(n) + "px;"), r.push("height:" + Math.round(s) + "px;"), 1 > o && ("opacity" in t.style ? (r.push("opacity"), r.push(":"), r.push(o), r.push(";")) : 8 <= document.documentMode ? (r.push("-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity="), r.push(Math.ceil(100 * o)), r.push(")';")) : (r.push("filter:alpha(opacity="), r.push(Math.ceil(100 * o)), r.push(");"))), r.push("z-index:" + a + ";"), L.d.pD(t, r.join(""))
		  		     		  					}
		  		     		  				}), L.P.Ld = L.Class.extend({
		  		     		  					jb: [L.oa, L.Kc],
		  		     		  					r: function (t) {
		  		     		  						this.w = t, this.Br = {}, this.Yj = t.Yj, this.u = t.Ra.S, this.J("display", t), this.J("rotateEnable", t)
		  		     		  					},
		  		     		  					yt: function (t, i, e, n) {
		  		     		  						function s(t, n) {
		  		     		  							t.length && (r[L.g.indexOf(i, n)] = t), h -= 1, 0 >= h && (e(r), h = 0)
		  		     		  						}
		  		     		  						for (var o, a = i.length, r = [], h = 0, l = [], u = 0; a > u; u += 1) o = i[u], o instanceof L.S.Buildings && o.get("visible") && (l.push(this.At(o)), h += 1);
		  		     		  						for (a = 0; a < l.length; a += 1) l[a].yt(t, s, n)
		  		     		  					}
		  		     		  				}), L.P.canvas.Ld = L.P.Ld.extend({
		  		     		  					r: function (t) {
		  		     		  						arguments.callee.Sa.apply(this, arguments)
		  		     		  					},
		  		     		  					At: function (t) {
		  		     		  						var i = L.g.Vb(t);
		  		     		  						return this.Br[i] || (this.Br[i] = t.P = t.Yh(this)), this.Br[i]
		  		     		  					},
		  		     		  					yd: function (t) {
		  		     		  						this.w.Ra.Sh.style.cssText = "";
		  		     		  						for (var i = t.vb, e = t.va, n = t.size.width, s = t.size.height, o = 0; o < i.length; o += 1) {
		  		     		  							var a = i[o],
		  		     		  								a = this.At(a),
		  		     		  								r = i[o].ei();
		  		     		  							if (a)
		  		     		  								if (!r.visible || r.vc[0] > e.zoom || r.vc[1] < e.zoom)
		  		     		  									if (a = a.Hf(), a.length)
		  		     		  										for (r = 0; r < a.length; r += 1) a[r].parentNode === this.u && this.u.removeChild(a[r]);
		  		     		  									else a.parentNode === this.u && this.u.removeChild(a);
		  		     		  							else {
		  		     		  								a.yd(t, r);
		  		     		  								var h, l, u = a.Hf(),
		  		     		  									c = a.transform;
		  		     		  								if (c && u) {
		  		     		  									i[o].Ca = u, u.length || (u = [u], c = [c]);
		  		     		  									for (var d = 0; d < u.length; d += 1) {
		  		     		  										h = u[d], l = c[d];
		  		     		  										var p = l.translate.x,
		  		     		  											f = l.translate.y;
		  		     		  										i[o].ep || (p = L.g.Ff(p, 2), f = L.g.Ff(f, 2));
		  		     		  										var m = l.scale;
		  		     		  										1e-5 > Math.abs(p) && (p = 0), 1e-5 > Math.abs(f) && (f = 0);
		  		     		  										var _ = [];
		  		     		  										_.push("position:absolute"), _.push("z-index:" + (l.xe || i[o].get("zIndex"))), i[o].Ro ? (_.push("top:" + Math.floor(s / 2 + f) + "px"), _.push("left:" + Math.floor(n / 2 + p) + "px")) : h.getContext ? (_.push("height:" + Math.floor(h.height * m) + "px"), _.push("width:" + Math.floor(h.width * m) + "px"), _.push("top:" + Math.floor(s / 2 - f * m) + "px"), _.push("left:" + Math.floor(n / 2 - p * m) + "px")) : (1 !== m && (_.push(L.d.al[L.d.Zc] + "-origin:" + p + "px " + f + "px"), _.push(L.d.al[L.d.Zc] + ":scale3d(" + m + "," + m + ",1)")), _.push("top:" + Math.floor(s / 2 - f) + "px"), _.push("left:" + Math.floor(n / 2 - p) + "px")), !a.ep && 1 !== r.opacity && "number" == typeof r.opacity && "opacity" in h.style && _.push("opacity:" + r.opacity), (h.parentNode !== this.u || L.h.Sd) && this.u.appendChild(h), L.d.pD(h, _.join(";"))
		  		     		  									}
		  		     		  								} else i[o].Hk && (u.parentNode !== this.u || L.h.Sd) && (this.u.appendChild(u), i[o].Ca = u)
		  		     		  							}
		  		     		  						}
		  		     		  						t = this.w.Ra.Sh, a = this.w.Ra.S, i = this.w.Ra.ra, L.d.Zc && "number" == typeof e.rotation && 0 !== e.rotation ? (t.style[L.d.Zc + "Origin"] = n / 2 + "px " + s / 2 + "px", t.style[L.d.Zc] = "rotate(" + e.rotation + "deg)", t.style.overflow = "visible", a.style.overflow = "visible", i.style.overflow = "visible") : (t.style.cssText = "", a.style.cssText = "-webkit-transform: translateZ(0);", i.style.cssText = ""), this.w.Mp = !1
		  		     		  					}
		  		     		  				}), L.P.Eg = L.P.ye.extend({
		  		     		  					initialize: function (t, i) {
		  		     		  						arguments.callee.Sa.apply(this, arguments), this.J("reload", t, !0), this.Ba = new L.Ov({
		  		     		  							size: L.h.size,
		  		     		  							Zu: .7,
		  		     		  							qt: 2,
		  		     		  							Yu: 300
		  		     		  						});
		  		     		  						var e = this;
		  		     		  						this.Ba.e("drop", function (t) {
		  		     		  							e.sG(t.el)
		  		     		  						}), this.Pb = 1, this.LF = 50, this.qw = !0, this.K.Ba = this.Ba, this.Qt = new L.Lv(6, null, t.HA), new L.Lv(5, null, t.HA)
		  		     		  					},
		  		     		  					reloadChanged: function () {
		  		     		  						this.K && (this.K.Ab = !1), this.Ba.clear(), this.reload = !0, this.set("display")
		  		     		  					},
		  		     		  					RB: function (t, i) {
		  		     		  						if (!t.Jk || t.Jk.Vg) {
		  		     		  							var e = this;
		  		     		  							t.loaded = !1, t.Jk = i.QB(t.url, function (i) {
		  		     		  								t.Jk = null, t.loaded = !0, e.Ba.set(t.key, t), i && e.K && (t.X = i, t.Jk = null, e.set("display", 0), e.Lk += 1, e.K.Ab || e.Lk !== e.ip || (e.K.Ab = !0, e.K.ia("complete")))
		  		     		  							}, !1)
		  		     		  						}
		  		     		  					},
		  		     		  					cE: function (t, i, e, n) {
		  		     		  						var s = [];
		  		     		  						e = e || 18, i = Math.pow(2, i - e);
		  		     		  						for (var o = 0; o < t.length; o += 1) {
		  		     		  							var a = t[o].ta,
		  		     		  								r = Math.floor(a.x / i),
		  		     		  								a = Math.floor(a.y / i);
		  		     		  							n ? (r = e + "/" + r + "/" + a, a = this.Ba.get(r)) : (a = new L.nf(e, r, a), r = a + "", a = new L.of(a)), !s[r] && a && (s.push(a), s[r] = 1)
		  		     		  						}
		  		     		  						return s
		  		     		  					},
		  		     		  					SB: function (t) {
		  		     		  						for (var i = t.length - 1; i >= 0; i -= 1) {
		  		     		  							var e = t[i];
		  		     		  							if (e.length)
		  		     		  								if (this.Hc) {
		  		     		  									var n = e[0].ta.z;
		  		     		  									n > 18 && (e = this.cE(e, n)), this.DD(e, !0);
		  		     		  									for (var s = 0, o = 0; s < t.length;) this.HN(e.slice(30 * o, 30), n), s += 30, o += 1
		  		     		  								} else
		  		     		  									for (this.DD(e), this.ip += e.length, n = e.length - 1; n >= 0; n -= 1) this.RB(e[n], this.Qt)
		  		     		  						}
		  		     		  					},
		  		     		  					Ft: function (t, i) {
		  		     		  						var e = t + "";
		  		     		  						return (i ? this.Ba.Qk(e) : this.Ba.get(e)) || new L.of(t.qb(), this.af(t.x, t.y, t.z))
		  		     		  					},
		  		     		  					Tm: function (t, i) {
		  		     		  						return this.yb * Math.pow(2, t - i)
		  		     		  					},
		  		     		  					sG: function (t) {
		  		     		  						t.Jk && this.Qt.cL(t.Jk), t.Mu = !1, t.loaded = !1
		  		     		  					},
		  		     		  					Xs: function (t, i, e) {
		  		     		  						var n = this.xb,
		  		     		  							s = t.L1;
		  		     		  						t = i.Mb.x;
		  		     		  						var o = i.Mb.y,
		  		     		  							a = i.kb.x;
		  		     		  						return i = i.kb.y, this.Sp = new L.Pixel(0, 0), n = this.Tm(this.zoom, n) * s, n /= Math.pow(2, this.De), e && (a = Math.max(e[0], a) - e[0], i = Math.max(e[1], i) - e[1], t = Math.min(e[2], t) - e[0], o = Math.min(e[3], o) - e[1], this.Sp = new L.Pixel(Math.floor(e[0] / n), Math.floor(e[1] / n))), t /= n, o /= n, e = {
		  		     		  							ae: 0 === t % 1 ? t - 1 : Math.floor(t),
		  		     		  							ud: 0 === o % 1 ? o - 1 : Math.floor(o),
		  		     		  							te: Math.floor(a / n),
		  		     		  							gd: Math.floor(i / n)
		  		     		  						}, e.Nm = e.ae - e.te + 1, e.vp = e.ud - e.gd + 1, e
		  		     		  					},
		  		     		  					DD: function (t, i) {
		  		     		  						if (t.length) {
		  		     		  							var e = this.fb.divideBy(this.yb * Math.pow(2, this.xb - t[0].ta.z) * this.nb),
		  		     		  								n = Math.floor(e.x),
		  		     		  								s = Math.floor(e.y);
		  		     		  							t.sort(function (t, e) {
		  		     		  								var o = t.ta,
		  		     		  									a = e.ta,
		  		     		  									r = o.x - n,
		  		     		  									o = o.y - s,
		  		     		  									h = a.x - n,
		  		     		  									a = a.y - s;
		  		     		  								return (i ? -1 : 1) * (h * h + a * a - (r * r + o * o))
		  		     		  							})
		  		     		  						}
		  		     		  					},
		  		     		  					clear: function () {
		  		     		  						this.Qt.clear()
		  		     		  					},
		  		     		  					Du: function (t, i) {
		  		     		  						i.af !== this.af && (this.af = i.af, this.Ba.clear()), this.clear(), this.Xf = i.Xf, this.Wf = i.Wf, this.yb = i.yb;
		  		     		  						var e = t.va;
		  		     		  						this.hd = i.hd || t.va.hd, this.Th = e.Th, this.size = t.size, this.rotation = e.rotation, this.fb = e.fb, this.nb = e.nb, this.De = (this.io = L.h.Y && i.sa && !i.wN) ? 1 : 0, this.zoom = e.zoom, this.ad = this.xb = e.xb, this.ad += this.De, this.L1 = e.L1, t.scale = Math.pow(2, this.zoom - this.xb);
		  		     		  						var n;
		  		     		  						n = this.xb > this.zoom && t.Ea.kE ? t.Ea.kE : t.Ea;
		  		     		  						var s, o, a, r, h, l, u, c, e = this.Rc = this.Xs(e, n, i.j),
		  		     		  							d = [],
		  		     		  							p = [],
		  		     		  							f = [],
		  		     		  							m = [],
		  		     		  							_ = [],
		  		     		  							g = new L.nf(0, 0, 0),
		  		     		  							v = this.zoom,
		  		     		  							m = this.Hg || "",
		  		     		  							y = {},
		  		     		  							b = {};
		  		     		  						for (this.Uc = 1e6 * Math.random() << 0, o = m.length - 1; o >= 0; o -= 1)
		  		     		  							if (s = m[o], !(s.ol < i.opacity))
		  		     		  								if (g.z = s.ta.z, g.x = s.ta.x, g.y = s.ta.y, g.z === this.ad) y[g + ""] |= 16;
		  		     		  								else if (g.z < this.ad) {
		  		     		  							if (y[g + ""] |= 64, this.Xf)
		  		     		  								for (c = this.ad - g.z, a = Math.max(e.te, g.x << c), v = Math.min(e.ae, (g.x + 1 << c) - 1), r = Math.max(e.gd, g.y << c), h = Math.min(e.ud, (g.y + 1 << c) - 1), g.z = this.ad, l = a; v >= l; l += 1)
		  		     		  									for (g.x = l, u = r; h >= u; u += 1) g.y = u, c = g + "", y[c] |= 32, b[c] = b[c] ? Math.max(s.ta.z, b[c]) : s.ta.z
		  		     		  						} else if (this.Wf)
		  		     		  							for (c = 1; g.z >= this.ad;) {
		  		     		  								for (y[g + ""] |= c, a = g.x >> 1, r = g.y >> 1, v = a << 1, h = r << 1, s = 0, l = 2; l > 0; l -= 1)
		  		     		  									for (g.x = v + l, u = 2; u > 0; u -= 1) g.y = h + u, 5 & y[g + ""] && (s += 1);
		  		     		  								g.z -= 1, g.x = a, g.y = r, c = 4 === s ? 4 : 2
		  		     		  							}
		  		     		  						for (m = [], g.z = this.ad, l = e.te; l <= e.ae; l += 1)
		  		     		  							for (g.x = l, u = e.gd; u <= e.ud; u += 1) g.y = u, s = this.Ft(g), c = g + "", a = !1, s.X ? t.qc && this.Hc && !s.gg ? a = !0 : (s.Uc = this.Uc, m.push(s), c = y[c], 36 & c ? (s.Pb !== this.Pb || 1 > s.ol) && (a = !0) : s.Jl = !0) : (a = !0, !s.status && g.z <= i.vc[1] + this.De && f.push(s)), a && _.push(s);
		  		     		  						if (m.hc = this.xb, m.length && (d.push(m), d["lv" + this.xb] = m), p.push(f), p["lv" + this.xb] = f, this.Wf) {
		  		     		  							for (_ = _.slice(0), f = [], o = _.length - 1; o >= 0; o -= 1) s = _[o], 4 & y[s.key] || f.push(s);
		  		     		  							for (s = i.vc[1] + this.De, v = this.ad + 1; _.length && s >= v; v += 1) {
		  		     		  								for (m = [], h = _, _ = [], g.z = v, o = h.length - 1; o >= 0; o -= 1)
		  		     		  									if (l = h[o], c = y[l.key], 7 & c)
		  		     		  										for (a = l.ta.x << 1, r = l.ta.y << 1, l = 2; l > 0; l -= 1)
		  		     		  											for (g.x = a + l, u = 2; u > 0; u -= 1) {
		  		     		  												g.y = r + u, c = g + "";
		  		     		  												var x = this.Ba.Qk(c);
		  		     		  												5 & y[c] && x && x.X ? (x.Jl = !0, x.Uc = this.Uc, m.push(x)) : _.push(new L.of(g.qb(), ""))
		  		     		  											}
		  		     		  								m.length && (m.hc = v - this.De, d.push(m), d["lv" + (v - this.De)] = m, this.Hc && this.aD(m, d, this.ad - v))
		  		     		  							}
		  		     		  							_ = f
		  		     		  						}
		  		     		  						if (this.Xf)
		  		     		  							for (l = Math.max(i.vc[0], this.ad - 3), u = Math.max(l, this.ad - this.oR), v = this.ad - 1; _.length && v >= l; v -= 1) {
		  		     		  								for (r = v >= u, f = [], m = [], x = {}, h = _, _ = [], o = h.length - 1; o >= 0; o -= 1) s = h[o], g.z = v, g.x = s.ta.x >> 1, g.y = s.ta.y >> 1, s = this.Ft(g, !r), x[s.key] || (x[s.key] = 1, a = !1, s.X && (!this.uR || 64 & y[s.key]) ? (g.x = Math.min(e.ae, Math.max(e.te, g.x << this.ad - v)), g.y = Math.min(e.ud, Math.max(e.gd, g.y << this.ad - v)), g.z = this.ad, c = g + "", "number" == typeof b[c] && s.ta.z > b[c] ? a = !0 : (s.Jl = !0, s.Uc = this.Uc, m.push(s))) : (a = !0, r && !s.status && f.push(s), a && _.push(s)));
		  		     		  								m.length && (d.push(m), m.hc = v - this.De, d["lv" + (v - this.De)] = m, this.Hc && this.aD(m, d, this.ad - v)), r && f.length && (p.push(f), p["lv" + (v - this.De)] = f)
		  		     		  							}
		  		     		  						this.Lk = this.ip = 0, this.Hc && !t.dC || this.SB(p, n), this.jv = d, this.K.set("tiles", d)
		  		     		  					},
		  		     		  					aD: function (t, i, e) {
		  		     		  						for (var n = 0; n < t.length; n += 1)
		  		     		  							for (var s = t[n].ta, o = s.z + e, a = Math.pow(2, e), r = s.x * a, s = s.y * a, h = 0; a > h; h += 1)
		  		     		  								for (var l = 0; a > l; l += 1) {
		  		     		  									var u = this.Ba.get(o + "/" + (r + h) + "/" + (s + l));
		  		     		  									if (u && i["lv" + (o - this.De)]) {
		  		     		  										var c = i["lv" + (o - this.De)].indexOf(u); - 1 !== c && u.X && !u.gg && i["lv" + (o - this.De)].splice(c, 1)
		  		     		  									}
		  		     		  								}
		  		     		  					},
		  		     		  					rT: function () {
		  		     		  						var t = this.Rc.ae + 1,
		  		     		  							i = this.Rc.ud + 1,
		  		     		  							e = this.Rc.ae - 1,
		  		     		  							n = this.Rc.ud - 1,
		  		     		  							s = new L.nf(0, 0, 0);
		  		     		  						s.z = this.ad;
		  		     		  						for (var o = [], a = e; t >= a; a += 1) {
		  		     		  							s.x = a;
		  		     		  							for (var r = n; i >= r; r += 1) s.y = r, this.Ba.Qk(void 0) || (e = new L.of(s.qb(), this.af(s.x, s.y, s.z)), o.push(e))
		  		     		  						}
		  		     		  						this.SB([o])
		  		     		  					}
		  		     		  				}), L.P.$b.Eg = L.P.Eg.extend({
		  		     		  					r: function (t, i) {
		  		     		  						arguments.callee.Sa.apply(this, arguments), this.Zd()
		  		     		  					},
		  		     		  					Zd: function () {
		  		     		  						this.Ca = document.createElement("div")
		  		     		  					},
		  		     		  					Hf: function () {
		  		     		  						return this.Ca
		  		     		  					},
		  		     		  					Dj: function () {
		  		     		  						if (this.Hg)
		  		     		  							for (var t = 0; t < this.Hg.length; t += 1) {
		  		     		  								var i = this.Hg[t];
		  		     		  								if (i.X && this.Uc !== i.Uc && this.Ca === i.X.parentNode) {
		  		     		  									if (L.h.td && i.X.vml)
		  		     		  										for (var e in i.X.vml) i.X.vml.hasOwnProperty(e) && this.Ca === i.X.vml[e].shape.parentNode && this.Ca.removeChild(i.X.vml[e].shape);
		  		     		  									this.Ca.removeChild(i.X)
		  		     		  								} else {
		  		     		  									var n = i.ta,
		  		     		  										s = n.x / Math.pow(2, n.z - this.xb),
		  		     		  										n = n.y / Math.pow(2, n.z - this.xb);
		  		     		  									if ((Math.ceil(s) < this.Rc.te || Math.floor(s) > this.Rc.ae || Math.ceil(n) < this.Rc.gd || Math.floor(n) > this.Rc.ud) && i.X && this.Ca === i.X.parentNode) {
		  		     		  										if (L.h.td && i.X.vml)
		  		     		  											for (var o in i.X.vml) i.X.vml.hasOwnProperty(o) && this.Ca === i.X.vml[o].shape.parentNode && this.Ca.removeChild(i.X.vml[o].shape);
		  		     		  										this.Ca.removeChild(i.X), i.zoom = null
		  		     		  									}
		  		     		  								}
		  		     		  							}
		  		     		  					},
		  		     		  					yd: function (t, i) {
		  		     		  						if (t.Up || t.kv) this.Jc(t, i, !0);
		  		     		  						else {
		  		     		  							this.Du(t, i);
		  		     		  							var e = !1;
		  		     		  							(!this.ba || 3e4 < Math.abs(this.fb.x - this.ba.x) / this.L1 || 3e4 < Math.abs(this.fb.y - this.ba.y) / this.L1) && (e = !0), (e || this.zoom << 0 !== this.zoom || this.Jd !== this.zoom) && (this.ba = this.fb, this.Jd = this.zoom);
		  		     		  							var e = !1,
		  		     		  								n = +new Date,
		  		     		  								s = i.opacity;
		  		     		  							"opacity" in this.Ca.style && (s = 1), this.Sf = i.Bo;
		  		     		  							var o = [],
		  		     		  								a = this.Pb;
		  		     		  							this.Pb += 1;
		  		     		  							var r = this.jv;
		  		     		  							if (this.Dj(), L.h.td && "overlayer" === this.K.get("type") && this.Ca && t.lf) this.Ca.innerHTML = "", this.Hg = [];
		  		     		  							else {
		  		     		  								for (var h, l, u = r.length - 1; u >= 0; u -= 1) {
		  		     		  									var c = r[u];
		  		     		  									if (h = c.hc + this.De, c.length) {
		  		     		  										var d, p = this.Tm(this.zoom, h);
		  		     		  										for (h = c.length - 1; h >= 0; h -= 1) {
		  		     		  											l = c[h], d = l.ta;
		  		     		  											var f = s;
		  		     		  											if ((!l.Ln || this.qw && l.Pb !== a) && (l.Ln = n), l.Pb = this.Pb, this.Sf && !l.Jl ? (f = Math.max(0, Math.abs(d.z - this.zoom) - 1), f = Math.min(s, (n - l.Ln) / (1 / Math.pow(1.32, f) * this.LF)), L.h.td && (f = s), 1 !== f && (e = !0)) : l.Jl = !1, 0 !== f && l.X) {
		  		     		  												if (l.X.parentNode !== this.Ca || l.zoom !== this.zoom || l.ol !== s) {
		  		     		  													var m = new L.Pixel(d.x, d.y).add(this.Sp).multiplyBy(p).subtract(this.ba.divideBy(this.L1)),
		  		     		  														m = m.round(),
		  		     		  														_ = Math.ceil(p);
		  		     		  													this.zt(l.X, m.x, m.y, _, _, f, d.z), l.zoom = this.zoom
		  		     		  												}
		  		     		  												if (l.X.parentNode !== this.Ca) {
		  		     		  													if (L.h.td && "overlayer" === this.K.get("type")) try {
		  		     		  														l.X.style.visibility = "hidden", L.g.iepngFix(l.X)
		  		     		  													} catch (g) {}
		  		     		  													this.Ca.appendChild(l.X)
		  		     		  												} else L.h.td && "overlayer" === this.K.get("type") && (l.X.style.visibility = "hidden");
		  		     		  												o.push(l)
		  		     		  											}
		  		     		  											l.ol = f
		  		     		  										}
		  		     		  									}
		  		     		  								}
		  		     		  								this.Hg = o, e && this.set("display", 0), this.Jc(t, i)
		  		     		  							}
		  		     		  						}
		  		     		  					},
		  		     		  					Jc: function (t, i) {
		  		     		  						var e = Math.pow(2, t.va.zoom - this.Jd);
		  		     		  						t.sa && !i.sa && (e *= 2), this.transform = {
		  		     		  							translate: t.va.fb.subtract(this.ba).divideBy(this.L1),
		  		     		  							scale: e,
		  		     		  							rotate: 0
		  		     		  						}
		  		     		  					}
		  		     		  				}), window.CanvasRenderingContext2D && (window.CanvasRenderingContext2D.prototype.at = function (t, i, e, n, s) {
		  		     		  					"undefined" == typeof s && (s = [10, 10]), this.moveTo(t, i);
		  		     		  					var o = e - t,
		  		     		  						a = n - i,
		  		     		  						r = Math.floor(Math.sqrt(o * o + a * a));
		  		     		  					n = o / r, e = a / r, s.Zt = 0;
		  		     		  					for (var h = [], o = this.Oo, l = 0, u = 0, c = !1, d = a = 0; d < s.length; d += 1) s.Zt += s[d], h[d] = {
		  		     		  						ht: s[d] * n,
		  		     		  						it: s[d] * e,
		  		     		  						$d: a += s[d]
		  		     		  					}, o -= s[d], 0 > o && !c && (l = d, u = -o, c = !0);
		  		     		  					for (c = 0; r >= u + c;) u < s[l] ? (o = u * n, a = u * e) : (o = h[l].ht, a = h[l].it), t += o, i += a, this.Um ? this.moveTo(t, i) : this.lineTo(t, i), c += u, this.Um = !this.Um, u = s[(l + 1) % s.length], l = (l + 1) % s.length;
		  		     		  					r -= c, t += r * n, i += r * e, this.Um ? this.moveTo(t, i) : this.lineTo(t, i), this.Oo = (this.Oo + c + r) % s.Zt
		  		     		  				}, window.CanvasRenderingContext2D.prototype.KL = function (t, i, e, n) {
		  		     		  					"undefined" == typeof n && (n = [10, 10]);
		  		     		  					var s = 2 * Math.PI * e,
		  		     		  						o = 0 >= n ? s : Math.round(s / (n[0] + n[1])),
		  		     		  						a = (n[0] + n[1]) / s * 2 * Math.PI;
		  		     		  					for (n = n[0] / s * 2 * Math.PI, s = 0; o > s; s += 1) this.beginPath(), this.arc(t, i, e, s * a, s * a + n), this.stroke()
		  		     		  				}), L.zn = L.Class.extend({
		  		     		  					initialize: function (t) {
		  		     		  						this.yb = 256, this.S = t.S
		  		     		  					},
		  		     		  					dU: function () {},
		  		     		  					AO: function (t, i) {
		  		     		  						i = i.split("&"), t.face = L.g.Ph(i[this.QD]), i[this.dv] ? (t.border = L.g.Ph(i[this.dv]), t.width = (this.S.sa ? 2 : 1) * (parseInt(i[this.LD]) || 1)) : t.border = null
		  		     		  					},
		  		     		  					DS: function () {
		  		     		  						var t = L.style.Bc;
		  		     		  						return t.LM.apply(t, arguments)
		  		     		  					},
		  		     		  					mO: function (t, i, e, n, s, o) {
		  		     		  						return t = e - t, e = s - e, 0 === t || 0 === e ? t === e ? !0 : !1 : (o - n) / e === (n - i) / t ? !0 : void 0
		  		     		  					},
		  		     		  					Qs: function (t, i, e, n) {
		  		     		  						var s, o = [],
		  		     		  							a = 0,
		  		     		  							r = 0;
		  		     		  						if (e) {
		  		     		  							a = this.yb * i.x, r = this.yb * i.y, i = i.L1, e = 0;
		  		     		  							for (var h = t.length; h > e; e += 2) n = (a + t[e]) * i, s = (r + t[e + 1]) * i, o.push([n, s]), a += t[e], r += t[e + 1]
		  		     		  						} else
		  		     		  							for (i = (18 < i.hc ? Math.pow(2, 18 - i.hc) : 1) / (this.S.sa ? 2 : 1), e = 0, h = t.length; h > e; e += 2) {
		  		     		  								for (window.EK += 1; !n && 0 !== e && h - 2 > e && this.mO(t[e - 2], t[e - 1], t[e], t[e + 1], t[e + 2], t[e + 3]);) e += 2, window.$L += 1;
		  		     		  								1 === i ? o.push([t[e], t[e + 1]]) : o.push([t[e] / i, t[e + 1] / i])
		  		     		  							}
		  		     		  						return o
		  		     		  					},
		  		     		  					$K: function (t, i, e) {
		  		     		  						var n = 0,
		  		     		  							s = 0,
		  		     		  							o = 1;
		  		     		  						return e && (n = this.yb * i.x, s = this.yb * i.y, o = i.L1), [(n + t[0]) * o, (s + t[1]) * o]
		  		     		  					},
		  		     		  					Zs: function (t, i, e, n) {
		  		     		  						for (var s = [], o = 0, a = t.length; a > o; o += 1) {
		  		     		  							var r = this.Qs(L.g.pv(t[o]), i, e, n);
		  		     		  							r.length && (s.push(r), s.Rh = s.Rh ? s.Rh + r.Rh : r.Rh)
		  		     		  						}
		  		     		  						return s
		  		     		  					},
		  		     		  					vu: function (t, i, e) {
		  		     		  						var n, s;
		  		     		  						if ("roadlabel" === e.type || "poilabel" === e.type ? (s = !0, n = []) : (s = !1, n = {}), !i) return n;
		  		     		  						t.ta.hc = t.hc;
		  		     		  						for (var o, a, r, h, l = 0, u = i.length; u > l; l += 1)
		  		     		  							if (s) {
		  		     		  								for (a = 0; a < i[l][0].length; a += 1)
		  		     		  									if (h = this.zj(t, i[l][0][a], i[l][1], e))
		  		     		  										if (18 < t.hc) {
		  		     		  											var c = t.hc;
		  		     		  											r = t.ta, o = Math.pow(2, c - 18);
		  		     		  											var d = Math.floor(h.wd[0] / 256 * o),
		  		     		  												p = Math.floor(h.wd[1] / 256 * o),
		  		     		  												d = Math.max(0, d),
		  		     		  												d = Math.min(d, o - 1),
		  		     		  												p = Math.max(0, p),
		  		     		  												p = Math.min(p, o - 1);
		  		     		  											(c = this.S.Ba.get(c + "/" + (o * r.x + d) + "/" + (o * r.y + p))) && (c.Ua || (c.Ua = []), t.Ue && (c.Ue || (c.Ue = {}), L.extend(c.Ue, t.Ue)), h.wd[0] = h.wd[0] * o % 256, h.wd[1] = h.wd[1] * o % 256, c.Ua.push(h))
		  		     		  										} else t.Ua.push(h)
		  		     		  							} else a = i[l][this.Vm], h = this.zj(t, i[l], a, e), o = this.Em ? i[l][this.Em] : 1, r = n[o] ? n[o] : n[o] = {}, r[a] || (r[a] = [], "road" === e.type ? (c = t.hc, o = 1, c > 18 && (o = Math.pow(2, c - 18)), this.BO(r[a], a, o)) : this.AO(r[a], a)), r[a].push(h);
		  		     		  						return n
		  		     		  					}
		  		     		  				}), L.aw = L.zn.extend({
		  		     		  					initialize: function () {
		  		     		  						L.zn.prototype.initialize.apply(this, arguments), this.fm = 0, this.Em = 2, this.Vm = 1, this.QD = 0, this.LD = 1, this.dv = 2
		  		     		  					},
		  		     		  					zj: function (t, i, e) {
		  		     		  						return this.Zs(i[this.fm], t.ta, e.Hc)
		  		     		  					}
		  		     		  				}), L.oq = L.zn.extend({
		  		     		  					initialize: function () {
		  		     		  						L.zn.prototype.initialize.apply(this, arguments), this.fm = 0, this.Vm = 1, this.QD = 0, this.LD = 1, this.dv = 2
		  		     		  					},
		  		     		  					zj: function (t, i, e) {
		  		     		  						if (t = this.Zs(i[this.fm], t.ta, e.Hc, 1), (i = i[4]) && i.length) {
		  		     		  							e = 0;
		  		     		  							for (var n = i.length; n > e; e += 1)
		  		     		  								for (var s = i[e].split("-"), o = t[parseInt(s[0])], a = 1, r = s.length; r > a; a += 1) o[parseInt(s[a])].mC = !0
		  		     		  						}
		  		     		  						return t
		  		     		  					},
		  		     		  					dK: function (t, i) {
		  		     		  						for (var e in i)
		  		     		  							if (i.hasOwnProperty(e)) {
		  		     		  								var n, s = i[e];
		  		     		  								for (n in s)
		  		     		  									if (s.hasOwnProperty(n))
		  		     		  										for (var o = s[n], a = 0, r = o.length; r > a; a++) {
		  		     		  											var h = o[a];
		  		     		  											h.MF === t.UK && (h.pK = !0, h[t.MA] && (h[t.MA].pK = !0))
		  		     		  										}
		  		     		  							}
		  		     		  					},
		  		     		  					NF: function (t, i, e) {
		  		     		  						for (var n = [], s = 0, o = i.length; o > s; s++) {
		  		     		  							var a = i[s].split("-"),
		  		     		  								a = {
		  		     		  									UK: t,
		  		     		  									MA: a[0],
		  		     		  									Ss: a[1]
		  		     		  								};
		  		     		  							n.push(a), this.dK(a, e)
		  		     		  						}
		  		     		  						return n
		  		     		  					},
		  		     		  					vu: function (t, i, e) {
		  		     		  						var n = L.zn.prototype.vu.apply(this, arguments),
		  		     		  							s = !1;
		  		     		  						if (i && i.length) {
		  		     		  							for (var o = [], a = 0, r = i.length; r > a; a++) {
		  		     		  								var h = i[a];
		  		     		  								6 <= h.length && h[5].length && o.push.apply(o, this.NF(a, h[5], n))
		  		     		  							}
		  		     		  							o.length && (t.Ue || (t.Ue = {}), t.Ue.Ts = o, s = !0)
		  		     		  						}
		  		     		  						return s && L.mn && L.mn.q("vecTileParsed.buildings", {
		  		     		  							hv: t,
		  		     		  							data: i,
		  		     		  							UR: e,
		  		     		  							Ua: n
		  		     		  						}), n
		  		     		  					}
		  		     		  				}), L.cw = L.zn.extend({
		  		     		  					initialize: function () {
		  		     		  						L.zn.prototype.initialize.apply(this, arguments), this.fm = 0, this.Vm = 1, this.Em = 2, this.DN = "solid solid_roundcap solid_squarecap dash railway dash_crewel".split(" ")
		  		     		  					},
		  		     		  					BO: function (a, b, c) {
		  		     		  						var d = this.DN;
		  		     		  						b = b.split("&");
		  		     		  						var f = "",
		  		     		  							g = 0,
		  		     		  							h = 0,
		  		     		  							k = "butt",
		  		     		  							l = "",
		  		     		  							m = 0,
		  		     		  							n = 0,
		  		     		  							q = "butt",
		  		     		  							m = L.g.Ph(b[1]),
		  		     		  							n = (parseInt(b[0]) * c || 1) * (this.S.sa ? 2 : 1);
		  		     		  						c = b[2], c === d[1] ? q = "round" : c === d[2] ? q = "square" : 0 !== c.indexOf(d[5]) && (0 === c.indexOf(d[3]) ? l = eval("[" + c.substring(5).split(")") + "]") : 0 === c.indexOf(d[4]) && (g = m, m = "white", l = eval("[" + c.substring(8).split(")") + "]"), h = n + 1 + (this.S.sa ? 1 : 0), n = n - 1 - (this.S.sa ? 1 : 0))), b[3] && (g = L.g.Ph(b[4]), h = parseInt(b[3]) * (this.S.sa ? 2 : 1) + n, b = b[5], b === d[1] ? k = "round" : b === d[2] ? k = "square" : 0 !== b.indexOf(d[5]) && 0 === b.indexOf(d[3]) && (f = eval("[" + b.substring(5).split(")") + "]"))), a.jD = m, a.xP = n, a.vP = q, a.wP = l, a.Nz = g, a.QK = h, a.OK = k, a.PK = f
		  		     		  					},
		  		     		  					zj: function (t, i, e) {
		  		     		  						return e = this.Zs(i[this.fm], t.ta, e.Hc), (!t.S || i[this.Em] > t.S) && (t.S = i[this.Em], t.Rh = 0), t.Rh = Math.max(t.Rh, e.Rh), e
		  		     		  					}
		  		     		  				}), L.yn = L.zn.extend({
		  		     		  					initialize: function (t) {
		  		     		  						L.zn.prototype.initialize.apply(this, arguments), this.sd = [], this.WA = "http://" + t.gE + "/icons/" + (L.h.Y || L.h.sa ? "b" : "n"), this.RK = L.h.Y ? 15 : 7, this.Yt = L.h.sa ? 320 : 256
		  		     		  					}
		  		     		  				}), L.pq = L.yn.extend({
		  		     		  					initialize: function () {
		  		     		  						L.yn.prototype.initialize.apply(this, arguments), this.cC = 0, this.RC = 1, this.eQ = 2, this.Vm = 1, this.ym = 3, this.Of = 0, this.ND = 1, this.MD = 2, this.cv = 3, this.OD = 4
		  		     		  					},
		  		     		  					zj: function (t, i, e, n) {
		  		     		  						var s = L.yn.prototype.zj.apply(this, arguments);
		  		     		  						return s && 5 < i.length && 1 === i[5] && (s.nH = !0), s
		  		     		  					}
		  		     		  				}), L.bw = L.yn.extend({
		  		     		  					initialize: function () {
		  		     		  						L.yn.prototype.initialize.apply(this, arguments), this.cC = 0, this.RC = 1, this.Gs = 2, this.ym = this.Vm = 3, this.Of = 0, this.ND = 1, this.MD = 2, this.cv = 3
		  		     		  					}
		  		     		  				}), L.P.canvas.pf = L.P.Eg.extend({
		  		     		  					initialize: function (t, i) {
		  		     		  						arguments.callee.Sa.apply(this, arguments), this.Hc = !0, this.Ci = [];
		  		     		  						var e = this;
		  		     		  						this.On = function () {
		  		     		  							e.VN = !0, e.set("display", 0)
		  		     		  						}, this.Zd(), t.w.Fb.Xt && this.GF(t, i)
		  		     		  					},
		  		     		  					EM: function (t) {
		  		     		  						var i = 256 * this.nb,
		  		     		  							e = this.xb,
		  		     		  							n = t.wd.x / i,
		  		     		  							s = n % 1 * 256,
		  		     		  							n = Math.floor(n);
		  		     		  						t = t.wd.y / i, i = t % 1 * 256, t = Math.floor(t);
		  		     		  						var o = n - 1,
		  		     		  							a = n + 1,
		  		     		  							r = t - 1,
		  		     		  							h = t + 1;
		  		     		  						for (128 > s ? a = n : o = n, 128 > i ? h = t : r = t; a >= o; o += 1)
		  		     		  							for (var l = r; h >= l; l += 1) {
		  		     		  								var u = this.Ba.get(e + "/" + o + "/" + l);
		  		     		  								if (u && u.Ua)
		  		     		  									for (var c = u.Ua.length - 1; c >= 0; c -= 1)
		  		     		  										if (u.Ua[c].MC && u.Ua[c].rN && this.nN(u.Ua[c], s, i, o - n, l - t)) return u.Ua[c]
		  		     		  							}
		  		     		  						return null
		  		     		  					},
		  		     		  					nN: function (t, i, e, n, s) {
		  		     		  						n = t.wd[0] + 256 * n, s = t.wd[1] + 256 * s;
		  		     		  						for (var o = 0; o < t.sd.length; o += 1) {
		  		     		  							var a = t.vg[o][2],
		  		     		  								r = t.vg[o][3],
		  		     		  								h = t.vg[o][0],
		  		     		  								l = t.vg[o][1];
		  		     		  							if (this.K.sa && (a /= this.K.hf, r /= this.K.hf, h /= this.K.hf, l /= this.K.hf), i >= n + h - 1 && n + h + a + 1 >= i && e >= s + l - 1 && s + l + r + 1 >= e) return !0
		  		     		  						}
		  		     		  						return !1
		  		     		  					},
		  		     		  					reloadChanged: function () {
		  		     		  						this.K && (this.K.Ab = !1, L.jd.TA = null), this.Ba.clear(), this.Ca && this.Ca.parentNode && this.Ca.parentNode.removeChild(this.Ca), this.Ti && this.Ti.parentNode && this.Ti.parentNode.removeChild(this.Ti), this.set("display")
		  		     		  					},
		  		     		  					Hf: function () {
		  		     		  						return [this.Ca, this.Ti]
		  		     		  					},
		  		     		  					wT: function (t) {
		  		     		  						for (var i = 0; i < this.Ci.length; i += 1) this.Ci[i].hc && !t["lv" + this.Ci[i].hc] && (this.Ci[i].QS = !1, this.Ci[i].width = 0, this.Ci[i].height = 0, this.WS[this.Ci[i].hc] = null)
		  		     		  					}
		  		     		  				}), L.P.canvas.pf.include({
		  		     		  					GF: function (t) {
		  		     		  						this.fe = {}, this.webSocket = new L.WebSocket, this.webSocket.e("tiles", this.gO, this), this.webSocket.e("ack", this.fO, this), this.webSocket.e("disable", this.dO, this), this.J("mapStyle", t, !0)
		  		     		  					},
		  		     		  					Ew: function () {
		  		     		  						this.webSocket && (this.webSocket.close(), this.webSocket.tk(), this.webSocket = null)
		  		     		  					},
		  		     		  					bA: function () {
		  		     		  						if (this.webSocket && "unsupport" !== this.webSocket.zb) {
		  		     		  							var t = {
		  		     		  								command: "status",
		  		     		  								payload: {
		  		     		  									mapType: this.get("mapStyle"),
		  		     		  									style: 5
		  		     		  								}
		  		     		  							};
		  		     		  							this.webSocket.send(t)
		  		     		  						}
		  		     		  					},
		  		     		  					mapStyleChanged: function () {
		  		     		  						this.bA()
		  		     		  					},
		  		     		  					dO: function () {
		  		     		  						for (var t in this.fe) this.fe.hasOwnProperty(t) && (this.wl(this.fe[t].iv, this.fe[t].hc), delete this.fe[t]);
		  		     		  						this.webSocket = null, this.Lj("mapStyle"), this.set("display", 1)
		  		     		  					},
		  		     		  					fO: function (t) {
		  		     		  						var i = t.reqId;
		  		     		  						this.fe[i] && (!t.content.status && this.fe[i] && this.wl(this.fe[i].iv, this.fe[i].hc), delete this.fe[i])
		  		     		  					},
		  		     		  					gO: function (t) {
		  		     		  						var i = t.content.opt;
		  		     		  						if (i === this.xb) {
		  		     		  							t = t.content.data;
		  		     		  							for (var e = 0, n = t.length; n > e; e += 1) this.nC(t[e], i)
		  		     		  						} else this.fe[t.reqId] && this.wl(this.fe[t.reqId].iv, this.fe[t.reqId].hc)
		  		     		  					},
		  		     		  					HN: function (t, i) {
		  		     		  						if (t.length) {
		  		     		  							var e = 1,
		  		     		  								n = [];
		  		     		  							i > 18 && (e = Math.pow(2, i - 18));
		  		     		  							for (var s = this.K.aj.If(t[0].ta.z), o = 0; o < t.length; o += 1) {
		  		     		  								var a = t[o],
		  		     		  									r = a.ta;
		  		     		  								if (a.hc = i, r.L1 = s, i > 18) {
		  		     		  									for (var h = 0; e > h; h += 1)
		  		     		  										for (var l = 0; e > l; l += 1) {
		  		     		  											var u = new L.of(new L.nf(i, e * r.x + h, e * r.y + l));
		  		     		  											this.Ba.ac(u.key) || (this.Ba.set(u.key, u), u.status = "loading")
		  		     		  										}
		  		     		  									this.Ba.set(a.key + "/" + i, a)
		  		     		  								} else if (this.Ba.set(a.key, a), a.status = "loading", 10 > i) {
		  		     		  									var c, d, h = r.x,
		  		     		  										l = r.y,
		  		     		  										u = r.z;
		  		     		  									d = Math.ceil(this.Rc.Nm / 2);
		  		     		  									var p = Math.pow(2, u);
		  		     		  									h >= p && p + d >= h ? (h -= p, c = !0) : 0 > h && h >= -d && (h += p, c = !0), c && (c = u + "/" + h + "/" + l, (d = this.Ba.get(c)) ? (a.status = d.status, a.X = d.X, a.gg = d.gg) : (d = new L.of(new L.nf(u, h, l)), this.Ba.set(c, d), d.status = "loading"), d.pb = a, a.pb = d)
		  		     		  								}
		  		     		  								"loaded" === a.status ? this.set("display") : n.push(L.g.kt(r.x, r.y, r.z).join(","))
		  		     		  							}
		  		     		  							n.length && (this.webSocket && "unsupport" !== this.webSocket.zb ? (0 === this.webSocket.count ? this.TB(t, i, n) : (1 !== this.webSocket.count && "connected" === this.webSocket.zb || this.bA(), this.GN(t, i, n)), this.webSocket.count += 1, this.webSocket.MB && this.webSocket.Lu.push(Math.ceil((new Date - this.webSocket.MB) / 1e3)), this.webSocket.MB = new Date) : this.TB(t, i, n))
		  		     		  						}
		  		     		  					},
		  		     		  					GN: function (t, i, e) {
		  		     		  						var n = (new Date).getTime() + "-" + (this.webSocket.count + 1 & 65535);
		  		     		  						this.webSocket.send({
		  		     		  							command: "tiles",
		  		     		  							reqId: n,
		  		     		  							payload: {
		  		     		  								t: e,
		  		     		  								opt: i,
		  		     		  								cs: {
		  		     		  									level: i
		  		     		  								}
		  		     		  							}
		  		     		  						}), this.fe[n] = {
		  		     		  							iv: t,
		  		     		  							hc: i
		  		     		  						}
		  		     		  					},
		  		     		  					uC: function (t) {
		  		     		  						t.Ab || (t.status = "", t.Ab = void 0, t.X = null, t.Dc = null, t.pb && (t.pb.pb = null, t.pb = null), this.Ba.cl(t.key))
		  		     		  					},
		  		     		  					nC: function (t, i) {
		  		     		  						if (this.K) {
		  		     		  							var e = t[0].split("-"),
		  		     		  								n = e[3],
		  		     		  								e = e.splice(0, 3).join("/"),
		  		     		  								s = i > 18 ? Math.pow(2, i - 18) : 1;
		  		     		  							i > 18 && (e += "/" + i);
		  		     		  							var o = this.Ba.get(e);
		  		     		  							o && "loaded" !== o.status && (this.XD(o, s) || o.pb && this.XD(o.pb, s)) && ("poilabel" === n && (o.status = "loaded", o.pb && (o.pb.status = "loaded")), this.K.aE(t, o, i, n))
		  		     		  						}
		  		     		  					},
		  		     		  					wl: function (t, i, e) {
		  		     		  						e || (e = i > 18 ? Math.pow(2, i - 18) : 1);
		  		     		  						for (var n = 0; n < t.length; n += 1) {
		  		     		  							var s = t[n];
		  		     		  							this.tD(i, s, e, L.g.bind(this.uC, this)), i > 18 && this.Ba.cl(s.key + "/" + i)
		  		     		  						}
		  		     		  					},
		  		     		  					TB: function (t, i, e) {
		  		     		  						function n(t) {
		  		     		  							if (i !== a.xb);
		  		     		  							else {
		  		     		  								var e = t.indexOf("|");
		  		     		  								if (-1 == e) r += t;
		  		     		  								else {
		  		     		  									r += t.substring(0, e);
		  		     		  									var s = JSON.parse(r);
		  		     		  									s["x-vd-v"] || a.nC(s, i), r = "", n(t.substring(e + 1))
		  		     		  								}
		  		     		  							}
		  		     		  						}
		  		     		  						var s = new XMLHttpRequest;
		  		     		  						e = this.K.url + e.join(";") + "&lv=" + i;
		  		     		  						var o = 0,
		  		     		  							a = this,
		  		     		  							r = "";
		  		     		  						s.sT = "";
		  		     		  						var h = i > 18 ? Math.pow(2, i - 18) : 1;
		  		     		  						s.onreadystatechange = function () {
		  		     		  							a.K && (3 === s.readyState ? s.wG || (n(s.responseText.substring(o)), o = s.responseText.length, s.hG = !0) : 4 === s.readyState && s.startTime && (a.K.aE("first"), s.hG || a.wl(t, i, h)))
		  		     		  						}, this.bN || (this.bN = 1, L.jd.TA = s.startTime = new Date), s.open("GET", e, !0), s.send()
		  		     		  					},
		  		     		  					XD: function (t, i) {
		  		     		  						var e = t.ta.x,
		  		     		  							n = t.ta.y;
		  		     		  						return e > Math.floor(this.Rc.ae / i) || e < Math.floor(this.Rc.te / i) || n > Math.floor(this.Rc.ud / i) || n < Math.floor(this.Rc.gd / i) ? !1 : !0
		  		     		  					},
		  		     		  					tD: function (t, i, e, n) {
		  		     		  						if (t > 18) {
		  		     		  							i = i.ta;
		  		     		  							for (var s = 0; e > s; s += 1)
		  		     		  								for (var o = 0; e > o; o += 1) {
		  		     		  									var a = new L.nf(t, e * i.x + s, e * i.y + o) + "";
		  		     		  									(a = this.Ba.get(a)) && n(a)
		  		     		  								}
		  		     		  						} else n(i), i.pb && n(i.pb)
		  		     		  					}
		  		     		  				}), L.P.canvas.pf.include({
		  		     		  					Zd: function () {
		  		     		  						this.Ca = document.createElement("div"), this.Ti = document.createElement("canvas"), this.La = new L.P.canvas.pf.Buildings(this.Ti, this.On), this.Xo = document.createDocumentFragment()
		  		     		  					},
		  		     		  					YO: function (t) {
		  		     		  						var i = Math.pow(2, t.va.zoom - this.xb),
		  		     		  							e = this.K.sa ? 2 : 1,
		  		     		  							n = t.va.fb.subtract(this.gp).divideBy(this.nb);
		  		     		  						this.transform = [{
		  		     		  							translate: this.transform[0].translate.add(n),
		  		     		  							scale: i,
		  		     		  							rotate: 0
		  		     		  						}, {
		  		     		  							translate: this.transform[1].translate.add(n.multiplyBy(e)),
		  		     		  							scale: i / e,
		  		     		  							rotate: 0,
		  		     		  							xe: 1
		  		     		  						}], this.fb = t.va.fb
		  		     		  					},
		  		     		  					XO: function (t, i) {
		  		     		  						var e = Math.pow(2, t.va.zoom - this.Jd);
		  		     		  						if (e >= 8) this.cD(t, i);
		  		     		  						else {
		  		     		  							var n = t.va.fb.subtract(this.gp).divideBy(this.xg);
		  		     		  							this.transform[0] = {
		  		     		  								translate: this.transform[0].translate.add(n),
		  		     		  								scale: e,
		  		     		  								rotate: 0
		  		     		  							}, e = this.Rc, this.Bp(t, 256 * e.Nm, 256 * e.vp), e = new L.Pixel(t.Ea.mb.x * (this.K.sa ? this.K.hf : 1), t.Ea.mb.y * (this.K.sa ? this.K.hf : 1)), this.transform[2] = {
		  		     		  								translate: e,
		  		     		  								scale: 1 / (this.K.sa ? this.K.hf : 1),
		  		     		  								rotate: 0,
		  		     		  								xe: this.K.get("textIndex")
		  		     		  							}, this.fb = t.va.fb
		  		     		  						}
		  		     		  					},
		  		     		  					cD: function (t, i) {
		  		     		  						(!this.ba || 3e4 < Math.abs(this.fb.x - this.ba.x) / this.L1 || 3e4 < Math.abs(this.fb.y - this.ba.y) / this.L1) && (this.ba = this.fb), this.Jd = this.xb, this.xg = this.nb, this.Iu = !1, this.currentTime = +new Date, this.wQ = i.wQ;
		  		     		  						var e = this.Rc;
		  		     		  						this.Eb = [256 * e.te * this.nb, 256 * e.gd * this.nb], this.Sf = i.Bo;
		  		     		  						var n = this.jv,
		  		     		  							s = 256 * e.Nm,
		  		     		  							e = 256 * e.vp;
		  		     		  						this.lf = this.zoom << 0 !== this.zoom;
		  		     		  						var o = this.fb.subtract(this.ba);
		  		     		  						o.x < -L.g.Wa / 2 && (o.x += L.g.Wa), o.x > L.g.Wa / 2 && (o.x -= L.g.Wa), this.dL = o.divideBy(this.nb), this.nP(n, s, e, i), this.Bp(t, s, e), this.VN = !1, this.Iu && this.set("display", 0), this.Jc(t)
		  		     		  					},
		  		     		  					yd: function (t, i) {
		  		     		  						this.Du(t, i), this.gp && (t.kv || t.Up && L.h.Sd || t.iu && t.SK) ? this.YO(t, i) : this.gp && t.lf ? this.XO(t, i) : this.cD(t, i), this.gp = this.fb
		  		     		  					},
		  		     		  					Dj: function () {
		  		     		  						for (var t = Array.prototype.slice.call(this.Ca.childNodes, 0), i = t.length - 1; i >= 0; i -= 1) t[i] && t[i].Pb !== this.Pb && this.Ca.removeChild(t[i])
		  		     		  					},
		  		     		  					nP: function (t) {
		  		     		  						var i = this.Pb;
		  		     		  						this.Pb += 1;
		  		     		  						var e, n, s, o = !1,
		  		     		  							a = !1,
		  		     		  							r = [];
		  		     		  						for (this.ba.x - this.fb.x < -L.g.Wa / 2 ? this.ba = new L.Pixel(this.ba.x + L.g.Wa, this.ba.y) : this.ba.x - this.fb.x > L.g.Wa / 2 && (this.ba = new L.Pixel(this.ba.x - L.g.Wa, this.ba.y)), e = t.length - 1; e >= 0; e -= 1)
		  		     		  							if (s = t[e], n = s.hc, s.length) {
		  		     		  								var a = !1,
		  		     		  									h = n - this.xb;
		  		     		  								(1 >= h && !r.ak || r.ak && r.ak.dt > h) && (r.ak = [], r.ak.dt = Math.abs(h), a = !0);
		  		     		  								for (var l = this.Tm(this.xb, n), u = s.length - 1; u >= 0; u -= 1) {
		  		     		  									if (h = s[u], a && r.ak.push(h), !h.pb && this.ba === h.ba && h.Jd === this.Jd) {
		  		     		  										var c = h.Dc;
		  		     		  										if (c && c.parentNode === this.Ca) {
		  		     		  											r.push(h), c.Pb = this.Pb, h.Pb = this.Pb;
		  		     		  											continue
		  		     		  										}
		  		     		  									}
		  		     		  									h.ba = this.ba, h.Jd = this.Jd, n = h.ta;
		  		     		  									var o = !0,
		  		     		  										c = new L.Pixel(n.x * l * this.nb, n.y * l * this.nb),
		  		     		  										d = c.subtract(this.fb);
		  		     		  									d.x < -L.g.Wa / 2 ? c.x += L.g.Wa : d.x > L.g.Wa / 2 && (c.x -= L.g.Wa), d = c.subtract(this.ba), d = d.divideBy(this.nb), d.x = Math.floor(d.x), d.y = Math.floor(d.y), (!h.Ln || this.qw && h.Pb !== i) && (h.Ln = this.currentTime), h.Jl = !1, h.X ? (h.Pb = this.Pb, c = h.Dc, !c && h.pb && h.pb.Dc && (c = h.pb.Dc), c && (h.ol = 1, this.zt(c, d.x, d.y, l, l, 1, n.z), c.parentNode !== this.Ca && this.Ca.appendChild(c), c.Pb = this.Pb, h.xb = this.xb, r.push(h))) : h.Uc = null
		  		     		  								}
		  		     		  								a = !0
		  		     		  							}
		  		     		  						return this.Hg = r, this.Dj(), o || !a
		  		     		  					},
		  		     		  					Bp: function (t) {
		  		     		  						var i = this.Ti,
		  		     		  							e = this.La;
		  		     		  						e.lf = this.lf;
		  		     		  						var n = this.K.sa ? this.K.hf : 1;
		  		     		  						if (0 !== t.va.rotation ? L.d.Rm(i, 2 * Math.floor(t.Ea.mb.x) * n, 2 * Math.floor(t.Ea.mb.y) * n, !0) : L.d.Rm(i, t.size.width * n, t.size.height * n, !0), e.Eb = [t.Ea.kb.x, t.Ea.kb.y], this.La.nb = this.L1 * (this.K.sa ? 1 / this.K.hf : 1), (i = this.Hg.ak) && i.length && !(.5 < i[0].ta.z - this.zoom))
		  		     		  							for (e = i.length - 1; e >= 0; e -= 1) {
		  		     		  								var n = i[e].Ua,
		  		     		  									s = !1;
		  		     		  								!n && i[e].pb && i[e].pb.Ua && (n = i[e].pb.Ua, s = !0), this.La.Bp(n || {}, s, t.lf || i[0].ta.z !== this.zoom, L.Qe && L.Qe.FB(this.w.Fb))
		  		     		  							}
		  		     		  					},
		  		     		  					Jc: function (t) {
		  		     		  						var i = Math.pow(2, this.zoom - this.xb),
		  		     		  							e = this.fb.subtract(this.ba);
		  		     		  						e.x < -L.g.Wa / 2 && (e.x += L.g.Wa), e.x > L.g.Wa / 2 && (e.x -= L.g.Wa), e.divideBy(this.nb), t = new L.Pixel(t.Ea.mb.x * (this.K.sa ? this.K.hf : 1), t.Ea.mb.y * (this.K.sa ? this.K.hf : 1)), this.transform = [{
		  		     		  							translate: this.dL,
		  		     		  							scale: i,
		  		     		  							rotate: 0
		  		     		  						}, {
		  		     		  							translate: t,
		  		     		  							scale: 1 / (this.K.sa ? this.K.hf : 1),
		  		     		  							rotate: 0,
		  		     		  							xe: this.K.get("textIndex")
		  		     		  						}]
		  		     		  					}
		  		     		  				}), L.P.canvas.pf.Buildings = L.Class.extend({
		  		     		  					initialize: function (t, i) {
		  		     		  						this.tb = t, this.sd = {}, this.Jg = i
		  		     		  					},
		  		     		  					dD: function (t, i, e, n, s) {
		  		     		  						e = [];
		  		     		  						for (var o in t) t.hasOwnProperty(o) && (t[o].gn = parseInt(o), e.push(t[o]));
		  		     		  						e.sort(function (t, i) {
		  		     		  							return t.gn > i.gn ? 1 : -1
		  		     		  						});
		  		     		  						for (o in e)
		  		     		  							if (e.hasOwnProperty(o)) {
		  		     		  								t = e[o];
		  		     		  								for (var a in t) t.hasOwnProperty(a) && (n = t[a], this.Ku(n, n.face, n.border, n.width, i, s))
		  		     		  							}
		  		     		  					},
		  		     		  					Ku: function (t, i, e, n, s) {
		  		     		  						var o, a, r, h, l, u, c, d = this.tb.getContext("2d"),
		  		     		  							p = [NaN, NaN, 0],
		  		     		  							f = [NaN, NaN];
		  		     		  						for (d.save(), e && n && (d.strokeStyle = e, d.lineWidth = n), i && (d.fillStyle = i), this.fl = {}, d.beginPath(), o = 0, a = t.length; a > o; o += 1)
		  		     		  							if (r = t[o], h = r.length, h > 0)
		  		     		  								for (var m = 0; h > m; m += 1)
		  		     		  									for (l = r[m], u = 0, c = l.length; c > u; u += 1) p = l[u], 0 === u ? (f = p, d.moveTo(p[0], p[1])) : (p[0] !== f[0] || p[1] !== f[1]) && (d.lineTo(p[0], p[1]), f = p);
		  		     		  						if (i && d.fill(), s)
		  		     		  							for (d.beginPath(), o = 0, a = t.length; a > o; o += 1)
		  		     		  								if (r = t[o], h = r.length, h > 0)
		  		     		  									for (m = 0; h > m; m += 1)
		  		     		  										for (l = r[m], u = 0, c = l.length; c > u; u += 1) p = l[u], 0 === u ? (f = p, d.moveTo(p[0], p[1])) : (p[0] !== f[0] || p[1] !== f[1]) && (f.mC ? (d.moveTo(p[0], p[1]), p.mC && d.lineTo(p[0], p[1])) : d.lineTo(p[0], p[1]), f = p);
		  		     		  						return e && n && d.stroke(), d.restore(), !0
		  		     		  					},
		  		     		  					Zo: function (t) {
		  		     		  						if ("IMG" === t.tagName || "CANVAS" === t.tagName) return t;
		  		     		  						var i = this.sd[t];
		  		     		  						return "undefined" == typeof i ? (i = document.createElement("img"), i.src = t, this.sd[t] = i,
		  		     		  							i.loaded = !1, L.l.mh(i, "load", this.Mt, this), null) : i.loaded ? i : void 0
		  		     		  					},
		  		     		  					Mt: function (t) {
		  		     		  						t.target.loaded = !0, this.Jg && this.Jg()
		  		     		  					},
		  		     		  					Gb: function (t, i) {
		  		     		  						return this.lf ? [(t - this.Eb[0]) / this.nb, (i - this.Eb[1]) / this.nb] : [.5 + (t - this.Eb[0]) / this.nb << 0, .5 + (i - this.Eb[1]) / this.nb << 0]
		  		     		  					},
		  		     		  					oP: function (t) {
		  		     		  						var i, e = [];
		  		     		  						for (i in t) t.hasOwnProperty(i) && (t[i].gn = parseInt(i), e.push(t[i]));
		  		     		  						e.sort(function (t, i) {
		  		     		  							return t.gn > i.gn ? 1 : -1
		  		     		  						});
		  		     		  						for (i in e)
		  		     		  							if (e.hasOwnProperty(i)) {
		  		     		  								t = e[i];
		  		     		  								var n, s;
		  		     		  								for (n in t) t.hasOwnProperty(n) && (s = t[n], s.Nz && this.eD(s, s.Nz, s.QK, s.OK, s.PK));
		  		     		  								for (n in t) t.hasOwnProperty(n) && (s = t[n], s.jD && this.eD(s, s.jD, s.xP, s.vP, s.wP))
		  		     		  							}
		  		     		  					},
		  		     		  					eD: function (t, i, e, n, s) {
		  		     		  						var o = this.tb.getContext("2d");
		  		     		  						return o.save(), o.lineWidth = e, o.strokeStyle = i, o.lineCap = n, o.lineJoin = "bevel", o.setLineDash ? (this.Tz(o, t), s && (o.setLineDash(s), o.lineDashOffset = s[0])) : s && 1 < s.length ? this.XK(o, t, s) : this.Tz(o, t), o.stroke(), o.restore(), !0
		  		     		  					},
		  		     		  					Tz: function (t, i) {
		  		     		  						t.beginPath();
		  		     		  						var e, n, s, o, a, r, h, l, u, c;
		  		     		  						for (e = 0, a = i.length; a > e; e += 1)
		  		     		  							for (r = i[e], n = 0, h = r.length; h > n; n += 1)
		  		     		  								for (u = r[n], s = 0, l = u.length; l > s; s += 1) o = u[s], 0 === s ? (t.moveTo(o[0], o[1]), c = o) : (o[0] !== c[0] || o[1] !== c[1]) && (t.lineTo(o[0], o[1]), c = o)
		  		     		  					},
		  		     		  					XK: function (t, i, e) {
		  		     		  						t.beginPath();
		  		     		  						var n, s, o, a, r, h, l, u, c, d;
		  		     		  						for (n = 0, r = i.length; r > n; n += 1)
		  		     		  							for (h = i[n], t.Oo = e[0] + e[1], t.Um = !1, s = 0, l = h.length; l > s; s += 1)
		  		     		  								for (c = h[s], o = 0, u = c.length; u > o; o += 1) a = c[o], 0 === o ? (t.moveTo(a[0], a[1]), d = a) : (a[0] !== d[0] || a[1] !== d[1]) && (t.at(d[0], d[1], a[0], a[1], e), d = a);
		  		     		  						t.closePath()
		  		     		  					}
		  		     		  				}), L.P.canvas.pf.Buildings.include({
		  		     		  					Bp: function (t, i, e, n) {
		  		     		  						for (var s = 0, o = t.length; o > s; s += 1)
		  		     		  							if (!(e && t[s].uN || n && t[s].nH)) {
		  		     		  								var a = t[s].Ta,
		  		     		  									r = a[0];
		  		     		  								i && (r > I.g.Wa / 2 ? r -= I.g.Wa : r < I.g.Wa / 2 && (r += I.g.Wa));
		  		     		  								for (var a = this.Gb(r, a[1]), r = 0, h = t[s].sd.length; h > r; r += 1) this.dP(a, t[s].sd[r], t[s].vg[r], t[s].Ou, t[s]._sd || t[s].__sd)
		  		     		  							}
		  		     		  					},
		  		     		  					dP: function (t, i, e, n, s) {
		  		     		  						var o = this.tb.getContext("2d");
		  		     		  						if (this.__isExtract) {
		  		     		  							if (i && i.indexOf && i.indexOf("png") > -1) {
		  		     		  								var a, r = this;
		  		     		  								s ? r.__loadedImg__[i] ? (r._dP(t, r.__loadedImg__[i].cloneNode(), e, n, o), r._dP(t, s[i][0], s[i][1], n, o)) : (a = document.createElement("img"), a.src = i, a.onload = function () {
		  		     		  									r._dP(t, a, e, n, o), r._dP(t, s[i][0], s[i][1], n, o), r.__loadedImg__[i] = a.cloneNode(), a.onload = null
		  		     		  								}) : r.__loadedImg__[i] ? r._dP(t, r.__loadedImg__[i], e, n, o) : (a = document.createElement("img"), a.src = i, a.onload = function () {
		  		     		  									r.__loadedImg__[i] = a, r._dP(t, a, e, n, o), a.onload = null
		  		     		  								})
		  		     		  							} else if (!s) {
		  		     		  								if (i = this._Zo(i), !i) return 1;
		  		     		  								this._dP(t, i, e, n, o)
		  		     		  							}
		  		     		  						} else {
		  		     		  							if (i = this.Zo(i), !i) return 1;
		  		     		  							this._dP(t, i, e, n, o)
		  		     		  						}
		  		     		  					},
		  		     		  					_dP: function (t, i, e, n, s) {
		  		     		  						var o = e[2],
		  		     		  							a = e[3],
		  		     		  							r = e[0],
		  		     		  							h = e[1];
		  		     		  						if (n = (n || 0) % 360 * -Math.PI / 180, 0 !== n) {
		  		     		  							var l = Math.cos(n),
		  		     		  								u = Math.sin(n),
		  		     		  								c = t[0],
		  		     		  								d = t[1];
		  		     		  							s.transform(l, u, -u, l, (1 - l) * c + u * d, (1 - l) * d - u * c)
		  		     		  						}
		  		     		  						4 === e.length ? s.drawImage(i, t[0] + r, t[1] + h, o, a) : s.drawImage(i, e[4], e[5], e[6], e[7], t[0] + r, t[1] + h, o, a), 0 !== n && s.setTransform(1, 0, 0, 1, 0, 0)
		  		     		  					},
		  		     		  					_Zo: function (t) {
		  		     		  						if ("IMG" === t.tagName || "CANVAS" === t.tagName) return t;
		  		     		  						var i = this.sd[t];
		  		     		  						return "undefined" == typeof i ? (i = document.createElement("img"), i.src = t, this.sd[t] = i, i.loaded = !1, I.l.mh(i, "load", this.Mt, this), null) : i.loaded ? i : void 0
		  		     		  					}
		  		     		  				}), L.yn.include({
		  		     		  					zj: function (t, i, e, n) {
		  		     		  						var s = this.S.sa,
		  		     		  							o = this.S.VD,
		  		     		  							a = i[this.cC];
		  		     		  						e = e.split("&");
		  		     		  						var r, h = "Microsoft YaHei",
		  		     		  							l = parseInt(e[this.ND]),
		  		     		  							u = L.g.Ph(e[this.MD]),
		  		     		  							c = 400,
		  		     		  							d = L.g.pv(i[this.RC]);
		  		     		  						if (!(255 < d[0] || 0 > d[0] || 255 < d[1] || 0 > d[1])) {
		  		     		  							s && (l *= o);
		  		     		  							var p = {
		  		     		  								Ta: this.$K(d, t.ta, n.Hc)
		  		     		  							};
		  		     		  							p.wd = d, p.sd = [], p.vg = [], e[this.cv] && (r = L.g.Ph(e[this.cv]));
		  		     		  							var f, m;
		  		     		  							if ("roadlabel" === n.type) n = !1, p.uN = !0, (e = e[this.Of]) && i[this.ym] && (p.sd.push(this.WA + (10 > t.ta.z ? "39" : "18") + "/1/" + e + ".png"), u = "152" === e ? "black" : "white", r = null, c = i[this.ym], s && (c[0] *= o, c[1] *= o, c[2] *= o, c[3] *= o), p.vg.push(c), c = 400, h = "Arial Narrow,Arial", n = !0), n && (L.h.Y ? (f = 47, m = 15) : (f = 22, m = 13), s && (f *= o, m *= o)), l = Math.round(l), c = this.hB(t, a.replace(" ", ""), h, l, u, r, c, f), p.sd.push(c), 1 < a.length || n ? (t = Math.ceil(c.gi / 2), s = c.gi, f && (s = Math.min(f, s), t = Math.min(Math.floor(f / 2) - 1, t)), c.pm === l && (m = l), p.vg.push([-t, -Math.ceil(m / 2), s, c.pm, c.ru, c.su, c.gi, c.pm])) : (l = c.pm + 2, t = -c.pm / 2, p.vg.push([-c.gi / 2, t, l, l, c.ru, c.su, c.fn, c.wm])), p.Ou = i[this.Gs] ? 5 > i[this.Gs] ? 0 : i[this.Gs] : 0, 1 < a.length && p.sd[0].indexOf && p.sd[0].indexOf("png") > -1 && (p._sd = {}, p._sd[p.sd[0]] = [c, p.vg[p.vg.length - 1]]);
		  		     		  							else {
		  		     		  								if (p.name = a.replace("^", ""), a = a.split("^"), m = i[this.eQ], e[this.Of] && i[this.ym] && (p.rN = !0, p.sd.push(this.WA + (10 > t.ta.z ? "39" : "18") + "/1/" + e[this.Of] + ".png"), c = i[this.ym], "334" === e[this.Of] && s && (c[0] = c[1] = -7, c[3] = c[2] = 15), "445" === e[this.Of] && s && (c[0] = -3, c[1] = -6, c[3] = 13, c[2] = 6), "301" === e[this.Of] && s && (c[1] = c[0], c[3] = c[2]), s && (c[0] *= o, c[1] *= o, c[2] *= o, c[3] *= o), p.vg.push(c)), 0 < m.length)
		  		     		  									for (n = 0; n < m.length; n += 1) {
		  		     		  										var c = _n = a[n],
		  		     		  											d = m[n][0],
		  		     		  											_ = m[n][1] + n;
		  		     		  										("375" === e[this.Of] || "3751" === e[this.Of]) && (l = 12, _ = -5, f = 15, s && (l *= o, f *= o)), l = Math.round(l), c = this.hB(t, c, h, l, u, r, null, f, e[this.OD]), s && (d *= o, _ *= o, m[n][2] *= o, m[n][3] *= o), ("375" === e[this.Of] || "3751" === e[this.Of]) && (d = -Math.min(c.gi / 2, f / 2)), p.sd.push(c), _ -= L.h.Y ? 3 : 1, p.vg.push([d, _, e[this.OD] ? c.gi : Math.min(m[n][2], c.gi), c.wm, c.ru, c.su, c.gi, c.wm])
		  		     		  									}
		  		     		  								1 == m.length && p.sd[0].indexOf && p.sd[0].indexOf("png") > -1 && (p.__sd = {}, p.__sd[p.sd[0]] = [c, p.vg[p.vg.length - 1]]), i[4] && (p.MC = i[4])
		  		     		  							}
		  		     		  							return p
		  		     		  						}
		  		     		  					},
		  		     		  					YR: function () {
		  		     		  						return document.createElement("img")
		  		     		  					},
		  		     		  					$M: function (t) {
		  		     		  						return Math.min(Math.max(100 * (t - this.RK), 400), 800)
		  		     		  					},
		  		     		  					hB: function (t, i, e, n, s, o, a, r, h) {
		  		     		  						var l = t.xN;
		  		     		  						l || (l = L.d.create("canvas"), t.xN = l, l.width = l.height = this.Yt, l.DC = l.EC = 0, l.he = l.getContext("2d"), l.he.lineWidth = 2);
		  		     		  						var u = l.he;
		  		     		  						a = a || this.$M(n), t = this.S.sa ? this.S.VD : 1;
		  		     		  						var c = h ? 2 * t : 0,
		  		     		  							d = (n + 2) * i.length + 2,
		  		     		  							p = n + 5 * t,
		  		     		  							f = l.DC,
		  		     		  							m = l.EC;
		  		     		  						return f + d > this.Yt && (f = 0, m += l.maxHeight, m > this.Yt && (l.maxHeight = 0)), l.maxHeight = Math.max(l.maxHeight || 0, p), u.font = a + " " + n + "px " + e, n = parseInt(u.font), (n > 100 || !n) && (n = parseInt(u.font.split(" ")[1])), e = n * i.length, o && (u.strokeStyle !== o && (u.strokeStyle = o), u.strokeText(i, f + c, m + n, r || e)), o = u.measureText(i).width, h && (h = L.g.Ph(h), u.fillStyle !== h && (u.fillStyle = h), u.fillRect(f, m, o + 4 * t, n + 4 * t + L.h.Y)), u.fillStyle !== s && (u.fillStyle = s), u.fillText(i, f + c, m + n, r || e), l.DC = f + d, l.EC = m, i = l, i.gi = h ? o + 4 * t : o, i.pm = n, i.fn = d, i.wm = p, i.ru = f, i.su = m, i
		  		     		  					}
		  		     		  				}), L.TileLayer.WMS = L.TileLayer.extend({
		  		     		  					defaultWmsParams: {
		  		     		  						service: "WMS",
		  		     		  						request: "GetMap",
		  		     		  						version: "1.1.1",
		  		     		  						layers: "",
		  		     		  						styles: "",
		  		     		  						format: "image/jpeg",
		  		     		  						transparent: !1
		  		     		  					},
		  		     		  					options: {
		  		     		  						crs: null,
		  		     		  						uppercase: !1
		  		     		  					},
		  		     		  					initialize: function (t, i) {
		  		     		  						this._url = t;
		  		     		  						var e = L.extend({}, this.defaultWmsParams);
		  		     		  						for (var n in i) n in this.options || (e[n] = i[n]);
		  		     		  						i = L.setOptions(this, i), e.width = e.height = i.tileSize * (i.detectRetina && L.Browser.retina ? 2 : 1), this.wmsParams = e
		  		     		  					},
		  		     		  					onAdd: function (t) {
		  		     		  						this._crs = this.options.crs || t.options.crs, this._wmsVersion = parseFloat(this.wmsParams.version);
		  		     		  						var i = this._wmsVersion >= 1.3 ? "crs" : "srs";
		  		     		  						this.wmsParams[i] = this._crs.code, L.TileLayer.prototype.onAdd.call(this, t)
		  		     		  					},
		  		     		  					getTileUrl: function (t) {
		  		     		  						var i = this._tileCoordsToBounds(t),
		  		     		  							e = this._crs.project(i.getNorthWest()),
		  		     		  							n = this._crs.project(i.getSouthEast()),
		  		     		  							s = (this._wmsVersion >= 1.3 && this._crs === L.CRS.EPSG4326 ? [n.y, e.x, e.y, n.x] : [e.x, n.y, n.x, e.y]).join(","),
		  		     		  							o = L.TileLayer.prototype.getTileUrl.call(this, t);
		  		     		  						return o + L.Util.getParamString(this.wmsParams, o, this.options.uppercase) + (this.options.uppercase ? "&BBOX=" : "&bbox=") + s
		  		     		  					},
		  		     		  					setParams: function (t, i) {
		  		     		  						return L.extend(this.wmsParams, t), i || this.redraw(), this
		  		     		  					}
		  		     		  				}), L.tileLayer.wms = function (t, i) {
		  		     		  					return new L.TileLayer.WMS(t, i)
		  		     		  				}, L.LayerGroup = L.Layer.extend({
		  		     		  					initialize: function (t) {
		  		     		  						this._layers = {};
		  		     		  						var i, e;
		  		     		  						if (t)
		  		     		  							for (i = 0, e = t.length; e > i; i++) this.addLayer(t[i])
		  		     		  					},
		  		     		  					addLayer: function (t) {
		  		     		  						var i = this.getLayerId(t);
		  		     		  						return this._layers[i] = t, this._map && this._map.addLayer(t), this
		  		     		  					},
		  		     		  					removeLayer: function (t) {
		  		     		  						var i = t in this._layers ? t : this.getLayerId(t);
		  		     		  						return this._map && this._layers[i] && this._map.removeLayer(this._layers[i]), delete this._layers[i], this
		  		     		  					},
		  		     		  					hasLayer: function (t) {
		  		     		  						return !!t && (t in this._layers || this.getLayerId(t) in this._layers)
		  		     		  					},
		  		     		  					clearLayers: function () {
		  		     		  						for (var t in this._layers) this.removeLayer(this._layers[t]);
		  		     		  						return this
		  		     		  					},
		  		     		  					invoke: function (t) {
		  		     		  						var i, e, n = Array.prototype.slice.call(arguments, 1);
		  		     		  						for (i in this._layers) e = this._layers[i], e[t] && e[t].apply(e, n);
		  		     		  						return this
		  		     		  					},
		  		     		  					onAdd: function (t) {
		  		     		  						for (var i in this._layers) t.addLayer(this._layers[i])
		  		     		  					},
		  		     		  					onRemove: function (t) {
		  		     		  						for (var i in this._layers) t.removeLayer(this._layers[i])
		  		     		  					},
		  		     		  					eachLayer: function (t, i) {
		  		     		  						for (var e in this._layers) t.call(i, this._layers[e]);
		  		     		  						return this
		  		     		  					},
		  		     		  					getLayer: function (t) {
		  		     		  						return this._layers[t]
		  		     		  					},
		  		     		  					getLayers: function () {
		  		     		  						var t = [];
		  		     		  						for (var i in this._layers) t.push(this._layers[i]);
		  		     		  						return t
		  		     		  					},
		  		     		  					setZIndex: function (t) {
		  		     		  						return this.invoke("setZIndex", t)
		  		     		  					},
		  		     		  					getLayerId: function (t) {
		  		     		  						return L.stamp(t)
		  		     		  					}
		  		     		  				}), L.layerGroup = function (t) {
		  		     		  					return new L.LayerGroup(t)
		  		     		  				}, L.ImageOverlay = L.Layer.extend({
		  		     		  					options: {
		  		     		  						opacity: 1,
		  		     		  						alt: "",
		  		     		  						interactive: !1
		  		     		  					},
		  		     		  					initialize: function (t, i, e) {
		  		     		  						this._url = t, this._bounds = L.latLngBounds(i), L.setOptions(this, e)
		  		     		  					},
		  		     		  					onAdd: function () {
		  		     		  						this._image || (this._initImage(), this.options.opacity < 1 && this._updateOpacity()), this.options.interactive && (L.DomUtil.addClass(this._image, "imap-interactive"), this.addInteractiveTarget(this._image)), this.getPane().appendChild(this._image), this._reset()
		  		     		  					},
		  		     		  					onRemove: function () {
		  		     		  						L.DomUtil.remove(this._image), this.options.interactive && this.removeInteractiveTarget(this._image)
		  		     		  					},
		  		     		  					setOpacity: function (t) {
		  		     		  						return this.options.opacity = t, this._image && this._updateOpacity(), this
		  		     		  					},
		  		     		  					setStyle: function (t) {
		  		     		  						return t.opacity && this.setOpacity(t.opacity), this
		  		     		  					},
		  		     		  					bringToFront: function () {
		  		     		  						return this._map && L.DomUtil.toFront(this._image), this
		  		     		  					},
		  		     		  					bringToBack: function () {
		  		     		  						return this._map && L.DomUtil.toBack(this._image), this
		  		     		  					},
		  		     		  					setUrl: function (t) {
		  		     		  						return this._url = t, this._image && (this._image.src = t), this
		  		     		  					},
		  		     		  					setBounds: function (t) {
		  		     		  						return this._bounds = t, this._map && this._reset(), this
		  		     		  					},
		  		     		  					getAttribution: function () {
		  		     		  						return this.options.attribution
		  		     		  					},
		  		     		  					getEvents: function () {
		  		     		  						var t = {
		  		     		  							zoom: this._reset,
		  		     		  							viewreset: this._reset
		  		     		  						};
		  		     		  						return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
		  		     		  					},
		  		     		  					getBounds: function () {
		  		     		  						return this._bounds
		  		     		  					},
		  		     		  					getElement: function () {
		  		     		  						return this._image
		  		     		  					},
		  		     		  					_initImage: function () {
		  		     		  						var t = this._image = L.DomUtil.create("img", "imap-image-layer " + (this._zoomAnimated ? "imap-zoom-animated" : ""));
		  		     		  						t.onselectstart = L.Util.falseFn, t.onmousemove = L.Util.falseFn, t.onload = L.bind(this.fire, this, "load"), this.options.crossOrigin && (t.crossOrigin = ""), t.src = this._url, t.alt = this.options.alt
		  		     		  					},
		  		     		  					_animateZoom: function (t) {
		  		     		  						var i = this._map.getZoomScale(t.zoom),
		  		     		  							e = this._map._latLngToNewLayerPoint(this._bounds.getNorthWest(), t.zoom, t.center);
		  		     		  						L.DomUtil.setTransform(this._image, e, i)
		  		     		  					},
		  		     		  					_reset: function () {
		  		     		  						var t = this._image,
		  		     		  							i = new L.Bounds(this._map.latLngToLayerPoint(this._bounds.getNorthWest()), this._map.latLngToLayerPoint(this._bounds.getSouthEast())),
		  		     		  							e = i.getSize();
		  		     		  						L.DomUtil.setPosition(t, i.min), t.style.width = e.x + "px", t.style.height = e.y + "px"
		  		     		  					},
		  		     		  					_updateOpacity: function () {
		  		     		  						L.DomUtil.setOpacity(this._image, this.options.opacity)
		  		     		  					}
		  		     		  				}), L.imageOverlay = function (t, i, e) {
		  		     		  					return new L.ImageOverlay(t, i, e)
		  		     		  				}, L.FeatureGroup = L.LayerGroup.extend({
		  		     		  					addLayer: function (t) {
		  		     		  						return this.hasLayer(t) ? this : (t.addEventParent(this), L.LayerGroup.prototype.addLayer.call(this, t), this.fire("layeradd", {
		  		     		  							layer: t
		  		     		  						}))
		  		     		  					},
		  		     		  					removeLayer: function (t) {
		  		     		  						return this.hasLayer(t) ? (t in this._layers && (t = this._layers[t]), t.removeEventParent(this), L.LayerGroup.prototype.removeLayer.call(this, t), this.fire("layerremove", {
		  		     		  							layer: t
		  		     		  						})) : this
		  		     		  					},
		  		     		  					setStyle: function (t) {
		  		     		  						return this.invoke("setStyle", t)
		  		     		  					},
		  		     		  					bringToFront: function () {
		  		     		  						return this.invoke("bringToFront")
		  		     		  					},
		  		     		  					bringToBack: function () {
		  		     		  						return this.invoke("bringToBack")
		  		     		  					},
		  		     		  					getBounds: function () {
		  		     		  						var t = new L.LatLngBounds;
		  		     		  						for (var i in this._layers) {
		  		     		  							var e = this._layers[i];
		  		     		  							t.extend(e.getBounds ? e.getBounds() : e.getLatLng())
		  		     		  						}
		  		     		  						return t
		  		     		  					}
		  		     		  				}), L.featureGroup = function (t) {
		  		     		  					return new L.FeatureGroup(t)
		  		     		  				}, L.Icon = L.Class.extend({
		  		     		  					initialize: function (t) {
		  		     		  						L.setOptions(this, t)
		  		     		  					},
		  		     		  					createIcon: function (t) {
		  		     		  						return this._createIcon("icon", t)
		  		     		  					},
		  		     		  					createShadow: function (t) {
		  		     		  						return this._createIcon("shadow", t)
		  		     		  					},
		  		     		  					updateIcon: function (t, i) {
		  		     		  						this._setIconStyles(t, i)
		  		     		  					},
		  		     		  					_createIcon: function (t, i) {
		  		     		  						var e = this._getIconUrl(t);
		  		     		  						if (!e) {
		  		     		  							if ("icon" === t) throw new Error("iconUrl not set in Icon options (see the docs).");
		  		     		  							return null
		  		     		  						}
		  		     		  						var n = this._createImg(i && "IMG" === i.tagName ? i : null);
		  		     		  						return n.src = e, this._setIconStyles(n, t), n
		  		     		  					},
		  		     		  					_setIconStyles: function (t, i) {
		  		     		  						var e = this.options,
		  		     		  							n = L.point(e[i + "Size"]),
		  		     		  							s = L.point(e.offset) || {
		  		     		  								x: 0,
		  		     		  								y: 0
		  		     		  							},
		  		     		  							o = e.anchor || {
		  		     		  								x: 0,
		  		     		  								y: 0
		  		     		  							},
		  		     		  							a = (e[i + "Visibility"], ""),
		  		     		  							r = L.point(e[i + "Position"]) || {
		  		     		  								x: 0,
		  		     		  								y: 0
		  		     		  							};
		  		     		  						t.className = "imap-marker-" + i + " " + (e.className || ""), o && (t.style.marginLeft = -o.x + s.x + "px", t.style.marginTop = -o.y + s.y + "px"), n && (t.style.width = n.x + "px", t.style.height = n.y + "px"), t.src && (t.style.background = "url(" + t.src + ") no-repeat  " + r.x + "px  " + r.y + "px"), t.style.visibility = a
		  		     		  					},
		  		     		  					_createImg: function (t, i) {
		  		     		  						return i = i || document.createElement("div")
		  		     		  					},
		  		     		  					_getIconUrl: function (t) {
		  		     		  						return L.Browser.retina && this.options[t + "RetinaUrl"] || this.options[t + "Url"]
		  		     		  					}
		  		     		  				}), L.icon = function (t) {
		  		     		  					return new L.Icon(t)
		  		     		  				}, L.Icon.Default = L.Icon.extend({
		  		     		  					options: {
		  		     		  						iconSize: [25, 41],
		  		     		  						iconAnchor: [12, 41],
		  		     		  						popupAnchor: [1, -34],
		  		     		  						shadowSize: [41, 41]
		  		     		  					},
		  		     		  					_getIconUrl: function (t) {
		  		     		  						var i = t + "Url";
		  		     		  						if (this.options[i]) return this.options[i];
		  		     		  						var e = L.Icon.Default.imagePath;
		  		     		  						if (!e) throw new Error("Couldn't autodetect L.Icon.Default.imagePath, set it manually.");
		  		     		  						return e + "/marker-" + t + (L.Browser.retina && "icon" === t ? "-2x" : "") + ".png"
		  		     		  					}
		  		     		  				}), L.Icon.Default.imagePath = function () {
		  		     		  					var t, i, e, n, s = document.getElementsByTagName("script"),
		  		     		  						o = /[\/^]imap[\-\._]?([\w\-\._]*)\.js\??/;
		  		     		  					for (t = 0, i = s.length; i > t; t++)
		  		     		  						if (e = s[t].src || "", e.match(o)) return n = e.split(o)[0], (n ? n + "/" : "") + "images"
		  		     		  				}(), L.Marker = L.Layer.extend({
		  		     		  					options: {
		  		     		  						pane: "markerPane",
		  		     		  						nonBubblingEvents: ["click", "dblclick", "mouseover", "mouseout", "contextmenu"],
		  		     		  						icon: new L.Icon.Default,
		  		     		  						interactive: !0,
		  		     		  						keyboard: !0,
		  		     		  						zIndexOffset: 2,
		  		     		  						opacity: 1,
		  		     		  						riseOffset: 250,
		  		     		  						raiseOnDrag: !1,
		  		     		  						angleOffsetX: null,
		  		     		  						rotate: 0
		  		     		  					},
		  		     		  					initialize: function (t, i) {
		  		     		  						L.setOptions(this, i), this._latlng = L.latLng(t)
		  		     		  					},
		  		     		  					onAdd: function (t) {
		  		     		  						this._zoomAnimated = this._zoomAnimated && t.options.markerZoomAnimation, this._initIcon(), this.update()
		  		     		  					},
		  		     		  					onRemove: function () {
		  		     		  						this.dragging && this.dragging.enabled() && (this.options.draggable = !0, this.dragging.removeHooks()), this._removeIcon(), this._removeShadow()
		  		     		  					},
		  		     		  					getEvents: function () {
		  		     		  						var t = {
		  		     		  							zoom: this.update,
		  		     		  							viewreset: this.update
		  		     		  						};
		  		     		  						return this._zoomAnimated && (t.zoomanim = this._animateZoom), t
		  		     		  					},
		  		     		  					getLatLng: function () {
		  		     		  						return this._latlng
		  		     		  					},
		  		     		  					setLatLng: function (t) {
		  		     		  						var i = this._latlng;
		  		     		  						return this._latlng = L.latLng(t), this.update(), this.fire("move", {
		  		     		  							oldLatLng: i,
		  		     		  							latlng: this._latlng
		  		     		  						})
		  		     		  					},
		  		     		  					setZIndexOffset: function (t) {
		  		     		  						return this.options.zIndexOffset = t, this.update()
		  		     		  					},
		  		     		  					setIcon: function (t) {
		  		     		  						return this.options.icon = t, this._map && (this._initIcon(), this.update()), this._popup && this.bindPopup(this._popup, this._popup.options), this
		  		     		  					},
		  		     		  					getIcon: function () {
		  		     		  						return this.options.icon
		  		     		  					},
		  		     		  					getElement: function () {
		  		     		  						return this._icon
		  		     		  					},
		  		     		  					update: function () {
		  		     		  						if (this._icon) {
		  		     		  							var t = this._map.latLngToLayerPoint(this._latlng).round();
		  		     		  							this._setPos(t)
		  		     		  						}
		  		     		  						return this
		  		     		  					},
		  		     		  					_initIcon: function () {
		  		     		  						var t = this.options,
		  		     		  							i = ("imap-zoom-" + (this._zoomAnimated ? "animated" : "hide"), t.icon.createIcon(this._icon)),
		  		     		  							e = !1;
		  		     		  						i !== this._icon && (this._icon && this._removeIcon(), e = !0, t.title && (i.title = t.title), t.alt && (i.alt = t.alt)), t.keyboard && (i.tabIndex = "0"), this._icon = i, t.riseOnHover && this.on({
		  		     		  							mouseover: this._bringToFront,
		  		     		  							mouseout: this._resetZIndex
		  		     		  						}), t.opacity < 1 && this._updateOpacity(), e && this.getPane().appendChild(this._icon), this._initInteraction()
		  		     		  					},
		  		     		  					_removeIcon: function () {
		  		     		  						this.options.riseOnHover && this.off({
		  		     		  							mouseover: this._bringToFront,
		  		     		  							mouseout: this._resetZIndex
		  		     		  						}), this._icon && (L.DomUtil.remove(this._icon), this.removeInteractiveTarget(this._icon)), this._icon = null
		  		     		  					},
		  		     		  					_removeShadow: function () {
		  		     		  						this._shadow && L.DomUtil.remove(this._shadow), this._shadow = null
		  		     		  					},
		  		     		  					_setPos: function (t) {
		  		     		  						L.DomUtil.setPosition(this._icon, t, this.options.rotate), this._shadow && L.DomUtil.setPosition(this._shadow, t), this._zIndex = this.options.zIndexOffset, this._resetZIndex()
		  		     		  					},
		  		     		  					_updateZIndex: function (t) {
		  		     		  						this._icon && (this._icon.style.zIndex = this._zIndex + t)
		  		     		  					},
		  		     		  					_animateZoom: function (t) {
		  		     		  						var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
		  		     		  						this._setPos(i)
		  		     		  					},
		  		     		  					_initInteraction: function () {
		  		     		  						if (this.options.interactive && (L.DomUtil.addClass(this._icon, "imap-interactive"), this.addInteractiveTarget(this._icon), L.Handler.MarkerDrag)) {
		  		     		  							var t = this.options.draggable;
		  		     		  							this.dragging && (t = this.dragging.enabled(), this.dragging.disable()), this.dragging = new L.Handler.MarkerDrag(this), t && this.dragging.enable()
		  		     		  						}
		  		     		  					},
		  		     		  					setOpacity: function (t) {
		  		     		  						return this.options.opacity = t, this._map && this._updateOpacity(), this
		  		     		  					},
		  		     		  					_updateOpacity: function () {
		  		     		  						var t = this.options.opacity;
		  		     		  						L.DomUtil.setOpacity(this._icon, t), this._shadow && L.DomUtil.setOpacity(this._shadow, t)
		  		     		  					},
		  		     		  					_bringToFront: function () {
		  		     		  						this._updateZIndex(this.options.riseOffset)
		  		     		  					},
		  		     		  					_resetZIndex: function () {
		  		     		  						this._updateZIndex(0)
		  		     		  					}
		  		     		  				}), L.marker = function (t, i) {
		  		     		  					return new L.Marker(t, i)
		  		     		  				}, L.VectorIcon = {}, L.VectorIcon.version = "1.0.0", L.VectorIcon.MAP_POINT_PIN = "M16,1 C7.7146,1 1,7.65636364 1,15.8648485 C1,24.0760606 16,51 16,51 C16,51 31,24.0760606 31,15.8648485 C31,7.65636364 24.2815,1 16,1 L16,1 Z", L.VectorIcon.Icon = L.Icon.extend({
		  		     		  					options: {
		  		     		  						iconSize: [0, 0],
		  		     		  						anchor: [15, 50],
		  		     		  						offset: [0, 0],
		  		     		  						popupAnchor: [0, -50],
		  		     		  						shadowAnchor: [7, 45],
		  		     		  						shadowSize: [54, 51],
		  		     		  						className: "vector-marker",
		  		     		  						prefix: "fa",
		  		     		  						spinClass: "fa-spin",
		  		     		  						extraClasses: "",
		  		     		  						icon: "home",
		  		     		  						markerColor: "blue",
		  		     		  						iconColor: "white",
		  		     		  						type: 1,
		  		     		  						width: 0,
		  		     		  						height: 0
		  		     		  					},
		  		     		  					initialize: function (t) {
		  		     		  						return t = L.Util.setOptions(this, t)
		  		     		  					},
		  		     		  					createIcon: function (t) {
		  		     		  						var i, e, n, s, o, a = "";
		  		     		  						i = t && "DIV" === t.tagName ? t : document.createElement("div"), e = this.options, e.icon && (a = this._createInner()), s = "filter:alpha(opacity=" + 10 * e.alpha + ");opacity:" + e.alpha, n = L.VectorIcon.MAP_POINT_PIN;
		  		     		  						var r = 26,
		  		     		  							h = 26;
		  		     		  						return 1 == e.type ? (r = 32, h = 52, o = '<path d="' + n + '" fill="' + e.markerColor + '" stroke="' + e.strokecolor + '" stroke-width="' + e.strokewidth + '" style="' + s + '"></path>') : 2 == e.type ? o = '<rect x="4" y="4" width="18" height="18" fill="' + e.markerColor + '" stroke="' + e.strokecolor + '" stroke-width="' + e.strokewidth + '" style="' + s + '"></rect>' : 3 == e.type && (o = '<circle cx="13" cy="13" r="10" fill="' + e.markerColor + '" stroke="' + e.strokecolor + '" stroke-width="' + e.strokewidth + '" style="' + s + '"></circle>'), i.innerHTML = '<svg width="' + e.iconSize[0] + 'px" height="' + e.iconSize[1] + 'px" viewBox="0 0 ' + r + " " + h + '" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + o + a + "</svg>", this._setIconStyles(i, "icon"), this._setIconStyles(i, "icon-" + e.markerColor), i
		  		     		  					},
		  		     		  					_createInner: function () {
		  		     		  						var t, i, e, n, s;
		  		     		  						return t = void 0, n = "", i = "", e = "", s = this.options, t = "" === s.prefix || s.icon.slice(0, s.prefix.length + 1) === s.prefix + "-" ? s.icon : s.prefix + "-" + s.icon, s.spin && "string" == typeof s.spinClass && (n = s.spinClass), s.iconColor && ("white" === s.iconColor || "black" === s.iconColor ? i = "icon-" + s.iconColor : e = "style='color: " + s.iconColor + "' "), "<i " + e + "class='" + s.extraClasses + " " + s.prefix + " " + t + " " + n + " " + i + "'></i>"
		  		     		  					},
		  		     		  					_setIconStyles: function (t, i) {
		  		     		  						var e, n, s, o;
		  		     		  						return n = this.options, s = L.point(n["shadow" === i ? "shadowSize" : "iconSize"]), e = void 0, o = L.point(n.offset), e = L.point(n.anchor), !e && s && (e = s.divideBy(2, !0)), "shadow" === i && (e.x -= 5), t.className = "vector-marker-" + i + " " + n.className, e && (t.style.marginLeft = -e.x + o.x + "px", t.style.marginTop = -e.y + o.y + "px"), s ? (t.style.width = s.x + "px", t.style.height = s.y + "px") : void 0
		  		     		  					},
		  		     		  					createShadow: function () {
		  		     		  						var t;
		  		     		  						return t = document.createElement("div"), this._setIconStyles(t, "shadow"), t
		  		     		  					}
		  		     		  				}), L.VectorIcon.icon = function (t) {
		  		     		  					return new L.VectorIcon.Icon(t)
		  		     		  				}, L.DivIcon = L.Icon.extend({
		  		     		  					options: {
		  		     		  						iconSize: [12, 12],
		  		     		  						className: "imap-div-icon",
		  		     		  						html: !1
		  		     		  					},
		  		     		  					createIcon: function (t) {
		  		     		  						var i = t && "DIV" === t.tagName ? t : document.createElement("div"),
		  		     		  							e = this.options;
		  		     		  						return i.innerHTML = e.html !== !1 ? e.html : "", e.bgPos && (i.style.backgroundPosition = -e.bgPos.x + "px " + -e.bgPos.y + "px"), this._setIconStyles(i, "icon"), i
		  		     		  					},
		  		     		  					createShadow: function () {
		  		     		  						return null
		  		     		  					}
		  		     		  				}), L.divIcon = function (t) {
		  		     		  					return new L.DivIcon(t)
		  		     		  				}, L.Handler.MarkerDrag = L.Handler.extend({
		  		     		  					initialize: function (t) {
		  		     		  						this._marker = t, this._ischangeOffset = !1
		  		     		  					},
		  		     		  					addHooks: function () {
		  		     		  						var t = this._marker._icon;
		  		     		  						this._draggable || (this._draggable = new L.Draggable(t, t, !0)), this._draggable.on({
		  		     		  							dragstart: this._onDragStart,
		  		     		  							drag: this._onDrag,
		  		     		  							dragend: this._onDragEnd
		  		     		  						}, this).enable(), L.DomUtil.addClass(t, "imap-marker-draggable")
		  		     		  					},
		  		     		  					removeHooks: function () {
		  		     		  						this._draggable.off({
		  		     		  							dragstart: this._onDragStart,
		  		     		  							drag: this._onDrag,
		  		     		  							dragend: this._onDragEnd
		  		     		  						}, this).disable(), this._marker._icon && L.DomUtil.removeClass(this._marker._icon, "imap-marker-draggable")
		  		     		  					},
		  		     		  					moved: function () {
		  		     		  						return this._draggable && this._draggable._moved
		  		     		  					},
		  		     		  					_onDragStart: function () {
		  		     		  						this._marker.closePopup().fire("movestart").fire("dragstart");
		  		     		  						var t = this._marker.options,
		  		     		  							i = this._marker.getElement(),
		  		     		  							e = this._marker.dragging;
		  		     		  						if (t.raiseOnDrag && !e._ischangeOffset) {
		  		     		  							e._ischangeOffset = !0;
		  		     		  							var n = t.icon.options.iconSize,
		  		     		  								s = t.angleOffsetX,
		  		     		  								o = parseInt(n[0]);
		  		     		  							null == t.angleOffsetX && (s = o / 2);
		  		     		  							var a = parseInt(i.style.marginLeft) + s - 5.5,
		  		     		  								r = parseInt(i.style.marginTop) + (n[1] - 11) + 5.5,
		  		     		  								h = L.DomUtil.create("div", "");
		  		     		  							h.style.cssText = "position:absolute;background:url(" + t.raiseUrl + ") ;width:11px;height:11px;overflow: hidden;margin-top:" + r + "px;margin-left:" + a + "px", h.style.transform = i.style.transform, e._bottomEle = h, i.parentNode.appendChild(h), i.style.marginTop = parseInt(i.style.marginTop) - 25 + "px"
		  		     		  						}
		  		     		  					},
		  		     		  					_onDrag: function (t) {
		  		     		  						var i = this._marker,
		  		     		  							e = i._shadow,
		  		     		  							n = L.DomUtil.getPosition(i._icon),
		  		     		  							s = i._map.layerPointToLatLng(n);
		  		     		  						e && L.DomUtil.setPosition(e, n), i._latlng = s, t.latlng = s, i.fire("move", t).fire("drag", t);
		  		     		  						var o = this._marker.getElement(),
		  		     		  							a = this._marker.dragging;
		  		     		  						a._bottomEle && (a._bottomEle.style.transform = o.style.transform)
		  		     		  					},
		  		     		  					_onDragEnd: function (t) {
		  		     		  						t.latlng = this._marker._latlng, this._marker.fire("moveend").fire("dragend", t);
		  		     		  						var i = this._marker.getElement(),
		  		     		  							e = this._marker.dragging;
		  		     		  						if (i) {
		  		     		  							e._ischangeOffset && (e._ischangeOffset = !1, i.style.marginTop = parseInt(i.style.marginTop) + 25 + "px");
		  		     		  							var n = e._bottomEle;
		  		     		  							n && (i.parentNode.removeChild(n), e._bottomEle = null)
		  		     		  						}
		  		     		  					}
		  		     		  				}), L.Map.mergeOptions({
		  		     		  					closePopupOnClick: !1
		  		     		  				}), L.Popup = L.Layer.extend({
		  		     		  					options: {
		  		     		  						pane: "popupPane",
		  		     		  						minWidth: 50,
		  		     		  						maxWidth: 700,
		  		     		  						minHeight: 50,
		  		     		  						maxHeight: 700,
		  		     		  						offset: [0, 7],
		  		     		  						autoPan: !0,
		  		     		  						autoPanPadding: [5, 5],
		  		     		  						closeButton: !0,
		  		     		  						autoClose: !0,
		  		     		  						closeOnClick: !1,
		  		     		  						anchor: [.5, 1],
		  		     		  						zoomAnimation: !1,
		  		     		  						width: 0,
		  		     		  						height: 0,
		  		     		  						title: ""
		  		     		  					},
		  		     		  					initialize: function (t, i) {
		  		     		  						if (L.setOptions(this, t), this._source = i, 0 == t.type) {
		  		     		  							this._anchorOffset = [-.5, -1], this._popupContent = L.DomUtil.create("div", "imap-window"), this._popupContent.style.width = t.width + 4 + "px";
		  		     		  							var e = L.DomUtil.create("div", "imap-window-title");
		  		     		  							e.style.width = t.width - 6 + "px", e.innerHTML = t.title;
		  		     		  							var n = L.DomUtil.create("div", "imap-window-content");
		  		     		  							n.style.width = t.width - 6 + "px", n.style.height = t.height - 69 + "px", this._popupContent.appendChild(e), this._popupContent.appendChild(n)
		  		     		  						} else this._anchorOffset = [0, 0], this._popupContent = L.DomUtil.create("div", "imap-zoom-animated"), this._popupContent.style.position = "absolute", L.DomEvent.disableClickPropagation(this._popupContent).disableScrollPropagation(this._popupContent).on(this._popupContent, "contextmenu", L.DomEvent.stopPropagation)
		  		     		  					},
		  		     		  					onAdd: function (t) {
		  		     		  						this._zoomAnimated = this._zoomAnimated && this.options.zoomAnimation, this._container || this._initLayout(), t._fadeAnimated && !this.options.type && L.DomUtil.setOpacity(this._container, 0), clearTimeout(this._removeTimeout), "string" == typeof this._container ? this.getPane().innerHTML = this._container : this.getPane().appendChild(this._container), this.update(), t._fadeAnimated && !this.options.type && L.DomUtil.setOpacity(this._container, 1), t.fire("popupopen", {
		  		     		  							popup: this
		  		     		  						}), this._source && (this._source.fire("popupopen", {
		  		     		  							popup: this
		  		     		  						}, !0), this._source.on("preclick", L.DomEvent.stopPropagation))
		  		     		  					},
		  		     		  					openOn: function (t) {
		  		     		  						return t.openPopup(this), this
		  		     		  					},
		  		     		  					onRemove: function (t, i) {
		  		     		  						t && t._fadeAnimated ? (L.DomUtil.setOpacity(this._container, 0), this._removeTimeout = setTimeout(L.bind(L.DomUtil.remove, L.DomUtil, this._container), 200)) : L.DomUtil.remove(this._container), i && this.fire("removetip", {
		  		     		  							type: "removetip"
		  		     		  						}), t && t.fire("popupclose", {
		  		     		  							popup: this
		  		     		  						}), this._source && (this._source.fire("popupclose", {
		  		     		  							popup: this
		  		     		  						}, !0), this._source.off("preclick", L.DomEvent.stopPropagation))
		  		     		  					},
		  		     		  					getLatLng: function () {
		  		     		  						return this._latlng
		  		     		  					},
		  		     		  					setLatLng: function (t) {
		  		     		  						return this._latlng = L.latLng(t), this._map && (this._updatePosition(), this._adjustPan()), this
		  		     		  					},
		  		     		  					setTitle: function (t) {
		  		     		  						this.options.type || (this._popupContent.childNodes[0].innerHTML = t), this._content = this._popupContent, this.update()
		  		     		  					},
		  		     		  					getContent: function () {
		  		     		  						return this._content
		  		     		  					},
		  		     		  					setContent: function (t) {
		  		     		  						return this.options.type ? (this._popupContent.innerHTML = t, this._container = this._popupContent) : this._popupContent.childNodes[1].innerHTML = t, this._content = this._popupContent, this.update(), this
		  		     		  					},
		  		     		  					setSize: function (t, i) {
		  		     		  						this.options.width = t, this.options.height = i, this.options.type ? (this._popupContent.childNodes[0].style.width = t + "px", this._popupContent.childNodes[0].style.height = i + "px") : (this._popupContent.style.width = t + 4 + "px", this._popupContent.childNodes[0].style.width = t - 6 + "px", this._popupContent.childNodes[1].style.width = t - 6 + "px", this._popupContent.childNodes[1].style.height = i - 69 + "px")
		  		     		  					},
		  		     		  					getElement: function () {
		  		     		  						return this._container
		  		     		  					},
		  		     		  					update: function (t) {
		  		     		  						t instanceof Array && (this.options.autoPanPaddingTopLeft = [t[0].x, t[0].y], this.options.autoPanPaddingBottomRight = [t[1].x, t[1].y]), this._map && (this._container.style.visibility = "hidden", this.options.type || (this._updateContent(), this._updateLayout()), this._updatePosition(), this._container.style.visibility = "", this._adjustPan())
		  		     		  					},
		  		     		  					getEvents: function () {
		  		     		  						var t = {
		  		     		  							zoom: this._updatePosition,
		  		     		  							viewreset: this._updatePosition
		  		     		  						};
		  		     		  						return this._zoomAnimated && (t.zoomanim = this._animateZoom), ("closeOnClick" in this.options ? this.options.closeOnClick : this._map.options.closePopupOnClick) && (t.preclick = this._close), this.options.keepInView && (t.moveend = this._adjustPan), t
		  		     		  					},
		  		     		  					isOpen: function () {
		  		     		  						return !!this._map && this._map.hasLayer(this)
		  		     		  					},
		  		     		  					bringToFront: function () {
		  		     		  						return this._map && L.DomUtil.toFront(this._container), this
		  		     		  					},
		  		     		  					bringToBack: function () {
		  		     		  						return this._map && L.DomUtil.toBack(this._container), this
		  		     		  					},
		  		     		  					_close: function () {
		  		     		  						this._map && (this._map.closePopup(this), this.fire("tipclick", {
		  		     		  							type: "tipclick"
		  		     		  						}))
		  		     		  					},
		  		     		  					_initLayout: function () {
		  		     		  						var t = "imap-popup",
		  		     		  							i = this._container = L.DomUtil.create("div", t + " " + (this.options.className || "") + " imap-zoom-" + (this._zoomAnimated ? "animated" : "hide"));
		  		     		  						if (this.options.closeButton) {
		  		     		  							var e = this._closeButton = L.DomUtil.create("a", t + "-close-button", i);
		  		     		  							e.href = "#close", e.innerHTML = "&#215;", L.DomEvent.on(e, "click", this._onCloseButtonClick, this)
		  		     		  						}
		  		     		  						var n = this._wrapper = L.DomUtil.create("div", t + "-content-wrapper", i);
		  		     		  						this._contentNode = L.DomUtil.create("div", t + "-content", n), L.DomEvent.disableClickPropagation(n).disableScrollPropagation(this._contentNode).on(n, "contextmenu", L.DomEvent.stopPropagation), this._tipContainer = L.DomUtil.create("div", t + "-tip-container", i), this._tip = L.DomUtil.create("div", t + "-tip", this._tipContainer)
		  		     		  					},
		  		     		  					_updateContent: function () {
		  		     		  						if (this._content) {
		  		     		  							var t = this._contentNode,
		  		     		  								i = "function" == typeof this._content ? this._content(this._source || this) : this._content;
		  		     		  							if ("string" == typeof i) t.innerHTML = i;
		  		     		  							else {
		  		     		  								for (; t.hasChildNodes();) t.removeChild(t.firstChild);
		  		     		  								t.appendChild(i)
		  		     		  							}
		  		     		  							this.fire("contentupdate")
		  		     		  						}
		  		     		  					},
		  		     		  					_updateLayout: function () {
		  		     		  						var t = this._contentNode,
		  		     		  							i = t.style;
		  		     		  						i.width = "", i.height = "", i.whiteSpace = "nowrap";
		  		     		  						var e = t.offsetWidth || this.options.width;
		  		     		  						e || (e = Math.min(e, this.options.maxWidth), e = Math.max(e, this.options.minWidth)), i.width = e + 1 + "px", this.options.width = e;
		  		     		  						var n = t.offsetHeight || this.options.height;
		  		     		  						n || (n = Math.min(n, this.options.maxHeight), n = Math.max(n, this.options.minHeight)), i.height = n + 1 + "px", this.options.height = n, i.whiteSpace = "";
		  		     		  						var s = this.options.maxHeight,
		  		     		  							o = "imap-popup-scrolled";
		  		     		  						s && n > s ? (i.height = s + "px", L.DomUtil.addClass(t, o)) : L.DomUtil.removeClass(t, o)
		  		     		  					},
		  		     		  					_updatePosition: function () {
		  		     		  						if (this._map) {
		  		     		  							var t = this._map.latLngToLayerPoint(this._latlng),
		  		     		  								i = L.point(this.options.offset),
		  		     		  								e = this.options.anchor;
		  		     		  							t = t.subtract([this.options.width * (e[0] + this._anchorOffset[0]), this.options.height * (e[1] + this._anchorOffset[1])]), this._zoomAnimated ? L.DomUtil.setPosition(this._container, t) : i = i.add(t);
		  		     		  							var n = this._containerBottom = -i.y,
		  		     		  								s = this._containerLeft = -Math.round(this._container.offsetWidth / 2) + i.x;
		  		     		  							this._container.style.bottom = n + "px", this._container.style.left = s + "px"
		  		     		  						}
		  		     		  					},
		  		     		  					_animateZoom: function (t) {
		  		     		  						var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center);
		  		     		  						if (0 != this.options.type) {
		  		     		  							var e = this.options.anchor;
		  		     		  							i = i.subtract([this.options.width * (e[0] + this._anchorOffset[0]), this.options.height * (e[1] + this._anchorOffset[1])])
		  		     		  						}
		  		     		  						L.DomUtil.setPosition(this._container, i)
		  		     		  					},
		  		     		  					_adjustPan: function () {
		  		     		  						if (!(!this.options.autoPan || this._map._panAnim && this._map._panAnim._inProgress)) {
		  		     		  							var t = this._map,
		  		     		  								i = this._container.offsetHeight,
		  		     		  								e = this._container.offsetWidth,
		  		     		  								n = new L.Point(this._containerLeft, -i - this._containerBottom || 0);
		  		     		  							this._zoomAnimated && n._add(L.DomUtil.getPosition(this._container));
		  		     		  							var s = t.layerPointToContainerPoint(n),
		  		     		  								o = L.point(this.options.autoPanPadding),
		  		     		  								a = L.point(this.options.autoPanPaddingTopLeft || o),
		  		     		  								r = L.point(this.options.autoPanPaddingBottomRight || o),
		  		     		  								h = t.getSize(),
		  		     		  								l = 0,
		  		     		  								u = 0;
		  		     		  							s.x + e + r.x > h.x && (l = s.x + e - h.x + r.x), s.x - l - a.x < 0 && (l = s.x - a.x), s.y + i + r.y > h.y && (u = s.y + i - h.y + r.y), s.y - u - a.y < 0 && (u = s.y - a.y), (l || u) && t.fire("autopanstart").panBy([l, u])
		  		     		  						}
		  		     		  					},
		  		     		  					_onCloseButtonClick: function (t) {
		  		     		  						this._close(), L.DomEvent.stop(t)
		  		     		  					}
		  		     		  				}), L.popup = function (t, i) {
		  		     		  					return new L.Popup(t, i)
		  		     		  				}, L.Map.include({
		  		     		  					openPopup: function (t, i, e) {
		  		     		  						return t instanceof L.Popup || (t = new L.Popup(e).setContent(t)), i && t.setLatLng(i), this.hasLayer(t) ? this : (this._popup && this._popup.options.autoClose && (L.stamp(this._popup) != L.stamp(t) && this._popup.fire("tipclose", {
		  		     		  							type: "tipclose"
		  		     		  						}), this.closePopup()), this._popup = t, this.addLayer(t))
		  		     		  					},
		  		     		  					closePopup: function (t) {
		  		     		  						return t && t !== this._popup || (t = this._popup, this._popup = null), t && this.removeLayer(t), this
		  		     		  					}
		  		     		  				}), L.Layer.include({
		  		     		  					bindPopup: function (t, i) {
		  		     		  						return t instanceof L.Popup ? (L.setOptions(t, i), this._popup = t, t._source = this) : ((!this._popup || i) && (this._popup = new L.Popup(i, this)), this._popup.setContent(t)), this._popupHandlersAdded || (this.on({
		  		     		  							click: this._openPopup,
		  		     		  							remove: this.closePopup,
		  		     		  							move: this._movePopup
		  		     		  						}), this._popupHandlersAdded = !0), this._originalPopupOffset = this._popup.options.offset, this
		  		     		  					},
		  		     		  					unbindPopup: function () {
		  		     		  						return this._popup && (this.off({
		  		     		  							click: this._openPopup,
		  		     		  							remove: this.closePopup,
		  		     		  							move: this._movePopup
		  		     		  						}), this._popupHandlersAdded = !1, this._popup = null), this
		  		     		  					},
		  		     		  					openPopup: function (t, i) {
		  		     		  						if (t instanceof L.Layer || (i = t, t = this), t instanceof L.FeatureGroup)
		  		     		  							for (var e in this._layers) {
		  		     		  								t = this._layers[e];
		  		     		  								break
		  		     		  							}
		  		     		  						return i || (i = t.getCenter ? t.getCenter() : t.getLatLng()), this._popup && this._map && (this._popup.options.offset = this._popupAnchor(t), this._popup._source = t, this._popup.update(), this._map.openPopup(this._popup, i)), this
		  		     		  					},
		  		     		  					closePopup: function () {
		  		     		  						return this._popup && this._popup._close(), this
		  		     		  					},
		  		     		  					togglePopup: function (t) {
		  		     		  						return this._popup && (this._popup._map ? this.closePopup() : this.openPopup(t)), this
		  		     		  					},
		  		     		  					isPopupOpen: function () {
		  		     		  						return this._popup.isOpen()
		  		     		  					},
		  		     		  					setPopupContent: function (t) {
		  		     		  						return this._popup && this._popup.setContent(t), this
		  		     		  					},
		  		     		  					getPopup: function () {
		  		     		  						return this._popup
		  		     		  					},
		  		     		  					_openPopup: function (t) {
		  		     		  						var i = t.layer || t.target;
		  		     		  						if (this._popup && this._map) return i instanceof L.Path ? void this.openPopup(t.layer || t.target, t.latlng) : void(this._map.hasLayer(this._popup) && this._popup._source === i ? this.closePopup() : this.openPopup(i, t.latlng))
		  		     		  					},
		  		     		  					_popupAnchor: function (t) {
		  		     		  						var i = t._getPopupAnchor ? t._getPopupAnchor() : [0, 0],
		  		     		  							e = this._originalPopupOffset || L.Popup.prototype.options.offset;
		  		     		  						return L.point(i).add(e)
		  		     		  					},
		  		     		  					_movePopup: function (t) {
		  		     		  						this._popup.setLatLng(t.latlng)
		  		     		  					}
		  		     		  				}), L.Marker.include({
		  		     		  					_getPopupAnchor: function () {
		  		     		  						return this.options.anchor || [0, 0]
		  		     		  					}
		  		     		  				}), L.Renderer = L.Layer.extend({
		  		     		  					options: {
		  		     		  						padding: .1
		  		     		  					},
		  		     		  					initialize: function (t) {
		  		     		  						L.setOptions(this, t), L.stamp(this)
		  		     		  					},
		  		     		  					onAdd: function () {
		  		     		  						this._container || (this._initContainer(), this._zoomAnimated && L.DomUtil.addClass(this._container, "imap-zoom-animated")), this.getPane().appendChild(this._container), this._update()
		  		     		  					},
		  		     		  					onRemove: function () {
		  		     		  						L.DomUtil.remove(this._container)
		  		     		  					},
		  		     		  					getEvents: function () {
		  		     		  						var t = {
		  		     		  							viewreset: this._reset,
		  		     		  							zoom: this._onZoom,
		  		     		  							moveend: this._update
		  		     		  						};
		  		     		  						return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t
		  		     		  					},
		  		     		  					_onAnimZoom: function (t) {
		  		     		  						this._updateTransform(t.center, t.zoom)
		  		     		  					},
		  		     		  					_onZoom: function () {
		  		     		  						this._updateTransform(this._map.getCenter(), this._map.getZoom())
		  		     		  					},
		  		     		  					_updateTransform: function (t, i) {
		  		     		  						var e = this._map.getZoomScale(i, this._zoom),
		  		     		  							n = L.DomUtil.getPosition(this._container),
		  		     		  							s = this._map.getSize().multiplyBy(.5 + this.options.padding),
		  		     		  							o = this._map.project(this._center, i),
		  		     		  							a = this._map.project(t, i),
		  		     		  							r = a.subtract(o),
		  		     		  							h = s.multiplyBy(-e).add(n).add(s).subtract(r);
		  		     		  						L.DomUtil.setTransform(this._container, h, e)
		  		     		  					},
		  		     		  					_reset: function () {
		  		     		  						this._update(), this._updateTransform(this._center, this._zoom)
		  		     		  					},
		  		     		  					_update: function () {
		  		     		  						var t = this.options.padding,
		  		     		  							i = this._map.getSize(),
		  		     		  							e = this._map.containerPointToLayerPoint(i.multiplyBy(-t)).round();
		  		     		  						this._bounds = new L.Bounds(e, e.add(i.multiplyBy(1 + 2 * t)).round()), this._center = this._map.getCenter(), this._zoom = this._map.getZoom()
		  		     		  					}
		  		     		  				}), L.Map.include({
		  		     		  					getRenderer: function (t) {
		  		     		  						var i = t.options.renderer || this._getPaneRenderer(t.options.pane) || this.options.renderer || this._renderer;
		  		     		  						return i || (i = this._renderer = this.options.preferCanvas && L.canvas() || L.svg()), this.hasLayer(i) || this.addLayer(i), i
		  		     		  					},
		  		     		  					_getPaneRenderer: function (t) {
		  		     		  						if ("overlayPane" === t || t === undefined) return !1;
		  		     		  						var i = this._paneRenderers[t];
		  		     		  						return i === undefined && (i = L.SVG && L.svg({
		  		     		  							pane: t
		  		     		  						}) || L.Canvas && L.canvas({
		  		     		  							pane: t
		  		     		  						}), this._paneRenderers[t] = i), i
		  		     		  					}
		  		     		  				}), L.Path = L.Layer.extend({
		  		     		  					options: {
		  		     		  						stroke: !0,
		  		     		  						color: "#3388ff",
		  		     		  						weight: 3,
		  		     		  						opacity: 1,
		  		     		  						lineCap: "round",
		  		     		  						lineJoin: "round",
		  		     		  						fillOpacity: .2,
		  		     		  						fillRule: "evenodd",
		  		     		  						interactive: !0
		  		     		  					},
		  		     		  					beforeAdd: function (t) {
		  		     		  						this._renderer = t.getRenderer(this)
		  		     		  					},
		  		     		  					onAdd: function () {
		  		     		  						this._renderer._initPath(this), this._reset(), this._renderer._addPath(this)
		  		     		  					},
		  		     		  					onRemove: function () {
		  		     		  						this._renderer._removePath(this)
		  		     		  					},
		  		     		  					getEvents: function () {
		  		     		  						return {
		  		     		  							zoomend: this._project,
		  		     		  							moveend: this._update,
		  		     		  							viewreset: this._reset
		  		     		  						}
		  		     		  					},
		  		     		  					redraw: function () {
		  		     		  						return this._map && this._renderer._updatePath(this), this
		  		     		  					},
		  		     		  					setStyle: function (t) {
		  		     		  						return L.setOptions(this, t), this._renderer && this._renderer._updateStyle(this), this
		  		     		  					},
		  		     		  					bringToFront: function () {
		  		     		  						return this._renderer && this._renderer._bringToFront(this), this
		  		     		  					},
		  		     		  					bringToBack: function () {
		  		     		  						return this._renderer && this._renderer._bringToBack(this), this
		  		     		  					},
		  		     		  					getElement: function () {
		  		     		  						return this._path
		  		     		  					},
		  		     		  					_reset: function () {
		  		     		  						this._project(), this._update()
		  		     		  					},
		  		     		  					_clickTolerance: function () {
		  		     		  						return (this.options.stroke ? this.options.weight / 2 : 0) + (L.Browser.touch ? 10 : 0)
		  		     		  					}
		  		     		  				}), L.LineUtil = {
		  		     		  					simplify: function (t, i) {
		  		     		  						if (!i || !t.length) return t.slice();
		  		     		  						var e = i * i;
		  		     		  						return t = this._reducePoints(t, e), t = this._simplifyDP(t, e)
		  		     		  					},
		  		     		  					pointToSegmentDistance: function (t, i, e) {
		  		     		  						return Math.sqrt(this._sqClosestPointOnSegment(t, i, e, !0))
		  		     		  					},
		  		     		  					closestPointOnSegment: function (t, i, e) {
		  		     		  						return this._sqClosestPointOnSegment(t, i, e)
		  		     		  					},
		  		     		  					_simplifyDP: function (t, i) {
		  		     		  						var e = t.length,
		  		     		  							n = typeof Uint8Array != undefined + "" ? Uint8Array : Array,
		  		     		  							s = new n(e);
		  		     		  						s[0] = s[e - 1] = 1, this._simplifyDPStep(t, s, i, 0, e - 1);
		  		     		  						var o, a = [];
		  		     		  						for (o = 0; e > o; o++) s[o] && a.push(t[o]);
		  		     		  						return a
		  		     		  					},
		  		     		  					_simplifyDPStep: function (t, i, e, n, s) {
		  		     		  						var o, a, r, h = 0;
		  		     		  						for (a = n + 1; s - 1 >= a; a++) r = this._sqClosestPointOnSegment(t[a], t[n], t[s], !0), r > h && (o = a, h = r);
		  		     		  						h > e && (i[o] = 1, this._simplifyDPStep(t, i, e, n, o), this._simplifyDPStep(t, i, e, o, s))
		  		     		  					},
		  		     		  					_reducePoints: function (t, i) {
		  		     		  						for (var e = [t[0]], n = 1, s = 0, o = t.length; o > n; n++) this._sqDist(t[n], t[s]) > i && (e.push(t[n]), s = n);
		  		     		  						return o - 1 > s && e.push(t[o - 1]), e
		  		     		  					},
		  		     		  					clipSegment: function (t, i, e, n, s) {
		  		     		  						var o, a, r, h = n ? this._lastCode : this._getBitCode(t, e),
		  		     		  							l = this._getBitCode(i, e);
		  		     		  						for (this._lastCode = l;;) {
		  		     		  							if (!(h | l)) return [t, i];
		  		     		  							if (h & l) return !1;
		  		     		  							o = h || l, a = this._getEdgeIntersection(t, i, o, e, s), r = this._getBitCode(a, e), o === h ? (t = a, h = r) : (i = a, l = r)
		  		     		  						}
		  		     		  					},
		  		     		  					_getEdgeIntersection: function (t, i, e, n, s) {
		  		     		  						var o, a, r = i.x - t.x,
		  		     		  							h = i.y - t.y,
		  		     		  							l = n.min,
		  		     		  							u = n.max;
		  		     		  						return 8 & e ? (o = t.x + r * (u.y - t.y) / h, a = u.y) : 4 & e ? (o = t.x + r * (l.y - t.y) / h, a = l.y) : 2 & e ? (o = u.x, a = t.y + h * (u.x - t.x) / r) : 1 & e && (o = l.x, a = t.y + h * (l.x - t.x) / r), new L.Point(o, a, s)
		  		     		  					},
		  		     		  					_getBitCode: function (t, i) {
		  		     		  						var e = 0;
		  		     		  						return t.x < i.min.x ? e |= 1 : t.x > i.max.x && (e |= 2), t.y < i.min.y ? e |= 4 : t.y > i.max.y && (e |= 8), e
		  		     		  					},
		  		     		  					_sqDist: function (t, i) {
		  		     		  						var e = i.x - t.x,
		  		     		  							n = i.y - t.y;
		  		     		  						return e * e + n * n
		  		     		  					},
		  		     		  					_sqClosestPointOnSegment: function (t, i, e, n) {
		  		     		  						var s, o = i.x,
		  		     		  							a = i.y,
		  		     		  							r = e.x - o,
		  		     		  							h = e.y - a,
		  		     		  							l = r * r + h * h;
		  		     		  						return l > 0 && (s = ((t.x - o) * r + (t.y - a) * h) / l, s > 1 ? (o = e.x, a = e.y) : s > 0 && (o += r * s, a += h * s)), r = t.x - o, h = t.y - a, n ? r * r + h * h : new L.Point(o, a)
		  		     		  					}
		  		     		  				}, L.Polyline = L.Path.extend({
		  		     		  					options: {
		  		     		  						smoothFactor: 1
		  		     		  					},
		  		     		  					initialize: function (t, i) {
		  		     		  						L.setOptions(this, i), this._setLatLngs(t)
		  		     		  					},
		  		     		  					getLatLngs: function () {
		  		     		  						return this._latlngs
		  		     		  					},
		  		     		  					setLatLngs: function (t) {
		  		     		  						return this._setLatLngs(t), this.redraw()
		  		     		  					},
		  		     		  					spliceLatLngs: function () {
		  		     		  						var t = this._latlngs.length > 1 ? this._latlngs : this._latlngs[0],
		  		     		  							i = [].splice.apply(t, arguments);
		  		     		  						return this._convertLatLngs(t, !0), this.redraw(), i
		  		     		  					},
		  		     		  					isEmpty: function () {
		  		     		  						return !this._latlngs.length
		  		     		  					},
		  		     		  					closestLayerPoint: function (t) {
		  		     		  						for (var i, e, n = 1 / 0, s = null, o = L.LineUtil._sqClosestPointOnSegment, a = 0, r = this._parts.length; r > a; a++)
		  		     		  							for (var h = this._parts[a], l = 1, u = h.length; u > l; l++) {
		  		     		  								i = h[l - 1], e = h[l];
		  		     		  								var c = o(t, i, e, !0);
		  		     		  								n > c && (n = c, s = o(t, i, e))
		  		     		  							}
		  		     		  						return s && (s.distance = Math.sqrt(n)), s
		  		     		  					},
		  		     		  					getCenter: function () {
		  		     		  						var t, i, e, n, s, o, a, r = this._rings[0],
		  		     		  							h = r.length;
		  		     		  						if (!h) return null;
		  		     		  						for (t = 0, i = 0; h - 1 > t; t++) i += r[t].distanceTo(r[t + 1]) / 2;
		  		     		  						if (0 === i) return this._map.layerPointToLatLng(r[0]);
		  		     		  						for (t = 0, n = 0; h - 1 > t; t++)
		  		     		  							if (s = r[t], o = r[t + 1], e = s.distanceTo(o), n += e, n > i) return a = (n - i) / e, this._map.layerPointToLatLng([o.x - a * (o.x - s.x), o.y - a * (o.y - s.y)])
		  		     		  					},
		  		     		  					getBounds: function () {
		  		     		  						return this._bounds
		  		     		  					},
		  		     		  					addLatLng: function (t, i) {
		  		     		  						return i = i || this._defaultShape(), t = L.latLng(t), i.push(t), this._bounds.extend(t), this.redraw()
		  		     		  					},
		  		     		  					_setLatLngs: function (t) {
		  		     		  						this._bounds = new L.LatLngBounds, this._latlngs = this._convertLatLngs(t)
		  		     		  					},
		  		     		  					_defaultShape: function () {
		  		     		  						return L.Polyline._flat(this._latlngs) ? this._latlngs : this._latlngs[0]
		  		     		  					},
		  		     		  					_convertLatLngs: function (t) {
		  		     		  						for (var i = [], e = L.Polyline._flat(t), n = 0, s = t.length; s > n; n++) e ? (i[n] = L.latLng(t[n]), this._bounds.extend(i[n])) : i[n] = this._convertLatLngs(t[n]);
		  		     		  						return i
		  		     		  					},
		  		     		  					_project: function () {
		  		     		  						this._rings = [], this._projectLatlngs(this._latlngs, this._rings);
		  		     		  						var t = this._clickTolerance(),
		  		     		  							i = new L.Point(t, -t);
		  		     		  						this._bounds.isValid() && (this._pxBounds = new L.Bounds(this._map.latLngToLayerPoint(this._bounds.getSouthWest())._subtract(i), this._map.latLngToLayerPoint(this._bounds.getNorthEast())._add(i)))
		  		     		  					},
		  		     		  					_projectLatlngs: function (t, i) {
		  		     		  						var e, n, s = t[0] instanceof L.LatLng,
		  		     		  							o = t.length;
		  		     		  						if (s) {
		  		     		  							for (n = [], e = 0; o > e; e++) n[e] = this._map.latLngToLayerPoint(t[e]);
		  		     		  							i.push(n)
		  		     		  						} else
		  		     		  							for (e = 0; o > e; e++) this._projectLatlngs(t[e], i)
		  		     		  					},
		  		     		  					_clipPoints: function () {
		  		     		  						var t = this._renderer._bounds;
		  		     		  						if (this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
		  		     		  							if (this.options.noClip) return void(this._parts = this._rings);
		  		     		  							var i, e, n, s, o, a, r, h = this._parts;
		  		     		  							for (i = 0, n = 0, s = this._rings.length; s > i; i++)
		  		     		  								for (r = this._rings[i], e = 0, o = r.length; o - 1 > e; e++) a = L.LineUtil.clipSegment(r[e], r[e + 1], t, e, !0), a && (h[n] = h[n] || [], h[n].push(a[0]), (a[1] !== r[e + 1] || e === o - 2) && (h[n].push(a[1]), n++))
		  		     		  						}
		  		     		  					},
		  		     		  					_simplifyPoints: function () {
		  		     		  						for (var t = this._parts, i = this.options.smoothFactor, e = 0, n = t.length; n > e; e++) t[e] = L.LineUtil.simplify(t[e], i)
		  		     		  					},
		  		     		  					_update: function () {
		  		     		  						this._map && (this._clipPoints(), this._simplifyPoints(), this._updatePath())
		  		     		  					},
		  		     		  					_updatePath: function () {
		  		     		  						this._renderer._updatePoly(this)
		  		     		  					}
		  		     		  				}), L.polyline = function (t, i) {
		  		     		  					return new L.Polyline(t, i)
		  		     		  				}, L.Polyline._flat = function (t) {
		  		     		  					return !L.Util.isArray(t[0]) || "object" != typeof t[0][0] && "undefined" != typeof t[0][0]
		  		     		  				}, L.Sector = L.Path.extend({
		  		     		  					_bounds: new L.LatLngBounds,
		  		     		  					_angle: 120,
		  		     		  					_pixelRadius: 0,
		  		     		  					options: {},
		  		     		  					initialize: function (t, i, e, n) {
		  		     		  						var s = this;
		  		     		  						L.setOptions(s, n), s._position = t, s._radius = i, s._degree = isNaN(e) ? 90 : Math.max(0, Math.min(parseInt(e), 360))
		  		     		  					},
		  		     		  					getBounds: function () {
		  		     		  						return this._bounds
		  		     		  					},
		  		     		  					setRadius: function (t) {
		  		     		  						this._radius = t, this._reset()
		  		     		  					},
		  		     		  					setOrientation: function (t) {
		  		     		  						this._degree = t, this._reset()
		  		     		  					},
		  		     		  					setAngle: function (t) {
		  		     		  						this._angle = t, this._reset()
		  		     		  					},
		  		     		  					setPosition: function (t) {
		  		     		  						this._position = t, this._reset()
		  		     		  					},
		  		     		  					_update: function () {
		  		     		  						this._map && this._renderer._updateSector(this)
		  		     		  					},
		  		     		  					_updatePath: function () {
		  		     		  						this._renderer._updatePoly(this)
		  		     		  					},
		  		     		  					_getLatLngByOffset: function (t, i, e) {
		  		     		  						t.lng = Number(t.lng), t.lat = Number(t.lat);
		  		     		  						var n = 2 * Math.asin(Math.sin(Math.round(i) / 12756274) / Math.cos(t.lat * Math.PI / 180)),
		  		     		  							s = t.lng + 180 * n / Math.PI,
		  		     		  							o = 2 * Math.asin(Math.round(e) / 12756274),
		  		     		  							a = t.lat + 180 * o / Math.PI;
		  		     		  						return new L.LatLng(a, s)
		  		     		  					},
		  		     		  					_project: function () {
		  		     		  						var t = this,
		  		     		  							i = t._map,
		  		     		  							e = t._position,
		  		     		  							n = t._radius;
		  		     		  						if (i && e && n) {
		  		     		  							var s = i.latLngToLayerPoint(e),
		  		     		  								o = s.x,
		  		     		  								a = s.y,
		  		     		  								r = i.latLngToLayerPoint(t._getLatLngByOffset(e, n, 0));
		  		     		  							n = Math.abs(s.x - r.x), t._pixelRadius = n;
		  		     		  							var h = t._angle,
		  		     		  								l = !1,
		  		     		  								u = t._degree >= 0 ? t._degree : 360 + t._degree,
		  		     		  								c = u - h / 2;
		  		     		  							c = c >= 0 ? c : 360 + c;
		  		     		  							var d = 0,
		  		     		  								p = c / 90,
		  		     		  								f = y1 = x2 = y2 = x3 = y3 = 0;
		  		     		  							switch (p) {
		  		     		  								case 1:
		  		     		  									f = o, y1 = a - n, l = !0;
		  		     		  									break;
		  		     		  								case 2:
		  		     		  									f = o + n, y1 = a, l = !0;
		  		     		  									break;
		  		     		  								case 3:
		  		     		  									f = o, y1 = a + n, l = !0;
		  		     		  									break;
		  		     		  								case 0:
		  		     		  								case 4:
		  		     		  									f = o - n, y1 = a, l = !0
		  		     		  							}
		  		     		  							if (!l) switch (p = Math.ceil(p), c = 0 > c ? 360 + c : c, p) {
		  		     		  								case 1:
		  		     		  									d = Math.PI * c / 180;
		  		     		  									var m = d ? Math.abs(n * Math.sin(d)) : 0,
		  		     		  										_ = d ? Math.abs(n * Math.cos(d)) : n;
		  		     		  									f = o - _, y1 = a - m;
		  		     		  									break;
		  		     		  								case 2:
		  		     		  									d = Math.PI * (c - 90) / 180;
		  		     		  									var _ = d ? Math.abs(n * Math.sin(d)) : n,
		  		     		  										m = d ? Math.abs(n * Math.cos(d)) : 0;
		  		     		  									f = o + _, y1 = a - m;
		  		     		  									break;
		  		     		  								case 3:
		  		     		  									d = Math.PI * (c - 180) / 180;
		  		     		  									var m = d ? Math.abs(n * Math.sin(d)) : 0,
		  		     		  										_ = d ? Math.abs(n * Math.cos(d)) : n;
		  		     		  									f = o + _, y1 = a + m;
		  		     		  									break;
		  		     		  								default:
		  		     		  									d = Math.abs(Math.PI * (c - 270) / 180);
		  		     		  									var _ = d ? Math.abs(n * Math.sin(d)) : 0,
		  		     		  										m = d ? Math.abs(n * Math.cos(d)) : n;
		  		     		  									f = o - _, y1 = a + m
		  		     		  							}
		  		     		  							l = !1;
		  		     		  							var g = c + h;
		  		     		  							switch (g > 360 && (g -= 360), p = g / 90) {
		  		     		  								case 1:
		  		     		  									x2 = o, y2 = a - n, l = !0;
		  		     		  									break;
		  		     		  								case 2:
		  		     		  									x2 = o + n, y2 = a, l = !0;
		  		     		  									break;
		  		     		  								case 3:
		  		     		  									x2 = o, y2 = a + n, l = !0;
		  		     		  									break;
		  		     		  								case 0:
		  		     		  								case 4:
		  		     		  									x2 = o - n, y2 = a, l = !0
		  		     		  							}
		  		     		  							if (!l) switch (p = Math.ceil(p)) {
		  		     		  								case 1:
		  		     		  									d = Math.PI * (90 - (90 - c - h)) / 180;
		  		     		  									var m = Math.abs(n * Math.sin(d)),
		  		     		  										_ = Math.abs(n * Math.cos(d));
		  		     		  									x2 = o - _, y2 = a - m;
		  		     		  									break;
		  		     		  								case 2:
		  		     		  									d = Math.PI * (90 - (180 - c - h)) / 180;
		  		     		  									var _ = Math.abs(n * Math.sin(d)),
		  		     		  										m = Math.abs(n * Math.cos(d));
		  		     		  									x2 = o + _, y2 = a - m;
		  		     		  									break;
		  		     		  								case 3:
		  		     		  									d = Math.PI * (90 - (270 - c - h)) / 180;
		  		     		  									var m = Math.abs(n * Math.sin(d)),
		  		     		  										_ = Math.abs(n * Math.cos(d));
		  		     		  									x2 = o + _, y2 = a + m;
		  		     		  									break;
		  		     		  								case 5:
		  		     		  									d = Math.PI * (90 - (450 - c - h)) / 180;
		  		     		  									var m = Math.abs(n * Math.sin(d)),
		  		     		  										_ = Math.abs(n * Math.cos(d));
		  		     		  									x2 = o - _, y2 = a - m;
		  		     		  									break;
		  		     		  								default:
		  		     		  									d = Math.PI * (90 - (360 - c - h)) / 180;
		  		     		  									var _ = Math.abs(n * Math.sin(d)),
		  		     		  										m = Math.abs(n * Math.cos(d));
		  		     		  									x2 = o - _, y2 = a + m
		  		     		  							}
		  		     		  							l = !1;
		  		     		  							var v = t._distanceByPixel({
		  		     		  								x: f,
		  		     		  								y: y1
		  		     		  							}, {
		  		     		  								x: x2,
		  		     		  								y: y2
		  		     		  							});
		  		     		  							p = u / 90;
		  		     		  							var y = n + v / 4;
		  		     		  							switch (p) {
		  		     		  								case 1:
		  		     		  									x3 = o, y3 = a - y, topFlag = !0;
		  		     		  									break;
		  		     		  								case 2:
		  		     		  									x3 = o + y, y3 = a, topFlag = !0;
		  		     		  									break;
		  		     		  								case 3:
		  		     		  									x3 = o, y3 = a + y, topFlag = !0;
		  		     		  									break;
		  		     		  								case 0:
		  		     		  								case 4:
		  		     		  									x3 = o - y, y3 = a, topFlag = !0
		  		     		  							}
		  		     		  							if (!l) switch (p = Math.ceil(p)) {
		  		     		  								case 1:
		  		     		  									d = Math.PI * u / 180;
		  		     		  									var m = Math.abs(y * Math.sin(d)),
		  		     		  										_ = Math.abs(y * Math.cos(d));
		  		     		  									x3 = o - _, y3 = a - m;
		  		     		  									break;
		  		     		  								case 2:
		  		     		  									d = Math.PI * (u - 90) / 180;
		  		     		  									var _ = Math.abs(y * Math.sin(d)),
		  		     		  										m = Math.abs(y * Math.cos(d));
		  		     		  									x3 = o + _, y3 = a - m;
		  		     		  									break;
		  		     		  								case 3:
		  		     		  									d = Math.PI * (u - 180) / 180;
		  		     		  									var m = Math.abs(y * Math.sin(d)),
		  		     		  										_ = Math.abs(y * Math.cos(d));
		  		     		  									x3 = o + _, y3 = a + m;
		  		     		  									break;
		  		     		  								default:
		  		     		  									d = Math.PI * (u - 270) / 180;
		  		     		  									var _ = Math.abs(y * Math.sin(d)),
		  		     		  										m = Math.abs(y * Math.cos(d));
		  		     		  									x3 = o - _, y3 = a + m
		  		     		  							}
		  		     		  							o = Math.round(o), a = Math.round(a), f = Math.round(f), y1 = Math.round(y1), x2 = Math.round(x2), y2 = Math.round(y2), x3 = Math.round(x3), y3 = Math.round(y3);
		  		     		  							var b = Math.min(o, f, x2, x3),
		  		     		  								x = Math.min(a, y1, y2, y3),
		  		     		  								w = Math.max(o, f, x2, x3),
		  		     		  								P = Math.max(a, y1, y2, y3),
		  		     		  								M = new L.Point(b, x),
		  		     		  								C = new L.Point(w, P);
		  		     		  							M = i.layerPointToLatLng(M), C = i.layerPointToLatLng(C);
		  		     		  							var T = new L.LatLng(Math.min(M.lat, C.lat), Math.min(M.lng, C.lng)),
		  		     		  								k = new L.LatLng(Math.max(M.lat, C.lat), Math.max(M.lng, C.lng));
		  		     		  							t._bounds = new L.LatLngBounds(T, k), t._parts = {
		  		     		  								x: o,
		  		     		  								y: a,
		  		     		  								r: n,
		  		     		  								x1: f,
		  		     		  								y1: y1,
		  		     		  								x2: x2,
		  		     		  								y2: y2,
		  		     		  								x3: x3,
		  		     		  								y3: y3
		  		     		  							}
		  		     		  						}
		  		     		  					},
		  		     		  					_distanceByPixel: function (t, i) {
		  		     		  						var e = Math.pow(i.x - t.x, 2),
		  		     		  							n = Math.pow(i.y - t.y, 2);
		  		     		  						return Math.sqrt(e + n)
		  		     		  					}
		  		     		  				}), L.PolyUtil = {}, L.PolyUtil.clipPolygon = function (t, i, e) {
		  		     		  					var n, s, o, a, r, h, l, u, c, d = [1, 4, 2, 8],
		  		     		  						p = L.LineUtil;
		  		     		  					for (s = 0, l = t.length; l > s; s++) t[s]._code = p._getBitCode(t[s], i);
		  		     		  					for (a = 0; 4 > a; a++) {
		  		     		  						for (u = d[a], n = [], s = 0, l = t.length, o = l - 1; l > s; o = s++) r = t[s], h = t[o], r._code & u ? h._code & u || (c = p._getEdgeIntersection(h, r, u, i, e), c._code = p._getBitCode(c, i), n.push(c)) : (h._code & u && (c = p._getEdgeIntersection(h, r, u, i, e), c._code = p._getBitCode(c, i), n.push(c)), n.push(r));
		  		     		  						t = n
		  		     		  					}
		  		     		  					return t
		  		     		  				}, L.Polygon = L.Polyline.extend({
		  		     		  					options: {
		  		     		  						fill: !0
		  		     		  					},
		  		     		  					isEmpty: function () {
		  		     		  						return !this._latlngs.length || !this._latlngs[0].length
		  		     		  					},
		  		     		  					getCenter: function () {
		  		     		  						var t, i, e, n, s, o, a, r, h, l = this._rings[0],
		  		     		  							u = l.length;
		  		     		  						if (!u) return null;
		  		     		  						for (o = a = r = 0, t = 0, i = u - 1; u > t; i = t++) e = l[t], n = l[i], s = e.y * n.x - n.y * e.x, a += (e.x + n.x) * s, r += (e.y + n.y) * s, o += 3 * s;
		  		     		  						return h = 0 === o ? l[0] : [a / o, r / o], this._map.layerPointToLatLng(h)
		  		     		  					},
		  		     		  					_convertLatLngs: function (t) {
		  		     		  						var i = L.Polyline.prototype._convertLatLngs.call(this, t),
		  		     		  							e = i.length;
		  		     		  						return e >= 2 && i[0] instanceof L.LatLng && i[0].equals(i[e - 1]) && i.pop(), i
		  		     		  					},
		  		     		  					_setLatLngs: function (t) {
		  		     		  						L.Polyline.prototype._setLatLngs.call(this, t), L.Polyline._flat(this._latlngs) && (this._latlngs = [this._latlngs])
		  		     		  					},
		  		     		  					_defaultShape: function () {
		  		     		  						return L.Polyline._flat(this._latlngs[0]) ? this._latlngs[0] : this._latlngs[0][0]
		  		     		  					},
		  		     		  					_clipPoints: function () {
		  		     		  						var t = this._renderer._bounds,
		  		     		  							i = this.options.weight,
		  		     		  							e = new L.Point(i, i);
		  		     		  						if (t = new L.Bounds(t.min.subtract(e), t.max.add(e)), this._parts = [], this._pxBounds && this._pxBounds.intersects(t)) {
		  		     		  							if (this.options.noClip) return void(this._parts = this._rings);
		  		     		  							for (var n, s = 0, o = this._rings.length; o > s; s++) n = L.PolyUtil.clipPolygon(this._rings[s], t, !0), n.length && this._parts.push(n)
		  		     		  						}
		  		     		  					},
		  		     		  					_updatePath: function () {
		  		     		  						this._renderer._updatePoly(this, !0)
		  		     		  					}
		  		     		  				}), L.polygon = function (t, i) {
		  		     		  					return new L.Polygon(t, i)
		  		     		  				}, L.Rectangle = L.Polygon.extend({
		  		     		  					initialize: function (t, i) {
		  		     		  						L.Polygon.prototype.initialize.call(this, this._boundsToLatLngs(t), i)
		  		     		  					},
		  		     		  					setBounds: function (t) {
		  		     		  						return this.setLatLngs(this._boundsToLatLngs(t))
		  		     		  					},
		  		     		  					_boundsToLatLngs: function (t) {
		  		     		  						return t = L.latLngBounds(t), [t.getSouthWest(), t.getNorthWest(), t.getNorthEast(), t.getSouthEast()]
		  		     		  					}
		  		     		  				}), L.rectangle = function (t, i) {
		  		     		  					return new L.Rectangle(t, i)
		  		     		  				}, L.CircleMarker = L.Path.extend({
		  		     		  					options: {
		  		     		  						fill: !0,
		  		     		  						radius: 10
		  		     		  					},
		  		     		  					initialize: function (t, i) {
		  		     		  						L.setOptions(this, i), this._latlng = L.latLng(t), this._radius = this.options.radius
		  		     		  					},
		  		     		  					setLatLng: function (t) {
		  		     		  						return this._latlng = L.latLng(t), this.redraw(), this.fire("move", {
		  		     		  							latlng: this._latlng
		  		     		  						})
		  		     		  					},
		  		     		  					getLatLng: function () {
		  		     		  						return this._latlng
		  		     		  					},
		  		     		  					getBounds: function () {
		  		     		  						var t = [this._radius, this._radiusY || this._radius];
		  		     		  						return new L.LatLngBounds(this._map.layerPointToLatLng(this._point.subtract(t)), this._map.layerPointToLatLng(this._point.add(t)))
		  		     		  					},
		  		     		  					setRadius: function (t) {
		  		     		  						return this.options.radius = this._radius = t, this.redraw()
		  		     		  					},
		  		     		  					getRadius: function () {
		  		     		  						return this._radius
		  		     		  					},
		  		     		  					setStyle: function (t) {
		  		     		  						var i = t && t.radius || this._radius;
		  		     		  						return L.Path.prototype.setStyle.call(this, t), this.setRadius(i), this
		  		     		  					},
		  		     		  					_project: function () {
		  		     		  						this._point = this._map.latLngToLayerPoint(this._latlng), this._updateBounds()
		  		     		  					},
		  		     		  					_updateBounds: function () {
		  		     		  						var t = this._radius,
		  		     		  							i = this._radiusY || t,
		  		     		  							e = this._clickTolerance(),
		  		     		  							n = [t + e, i + e];
		  		     		  						this._pxBounds = new L.Bounds(this._point.subtract(n), this._point.add(n))
		  		     		  					},
		  		     		  					_update: function () {
		  		     		  						this._map && this._updatePath()
		  		     		  					},
		  		     		  					_updatePath: function () {
		  		     		  						this._renderer._updateCircle(this)
		  		     		  					},
		  		     		  					_empty: function () {
		  		     		  						return this._radius && !this._renderer._bounds.intersects(this._pxBounds)
		  		     		  					}
		  		     		  				}), L.circleMarker = function (t, i) {
		  		     		  					return new L.CircleMarker(t, i)
		  		     		  				}, L.Circle = L.CircleMarker.extend({
		  		     		  					initialize: function (t, i) {
		  		     		  						L.setOptions(this, i), this._latlng = L.latLng(t), this._mRadius = this.options.radius
		  		     		  					},
		  		     		  					setRadius: function (t) {
		  		     		  						return this._mRadius = t, this.redraw()
		  		     		  					},
		  		     		  					getRadius: function () {
		  		     		  						return this._mRadius
		  		     		  					},
		  		     		  					setStyle: L.Path.prototype.setStyle,
		  		     		  					_project: function () {
		  		     		  						var t = this._latlng.lng,
		  		     		  							i = this._latlng.lat,
		  		     		  							e = this._map,
		  		     		  							n = e.options.crs;
		  		     		  						if (n.distance === L.CRS.Earth.distance) {
		  		     		  							var s = Math.PI / 180,
		  		     		  								o = this._mRadius / L.CRS.Earth.R / s,
		  		     		  								a = e.project([i + o, t]),
		  		     		  								r = e.project([i - o, t]),
		  		     		  								h = a.add(r).divideBy(2),
		  		     		  								l = e.unproject(h).lat,
		  		     		  								u = Math.acos((Math.cos(o * s) - Math.sin(i * s) * Math.sin(l * s)) / (Math.cos(i * s) * Math.cos(l * s))) / s;
		  		     		  							this._point = h.subtract(e.getPixelOrigin()), this._radius = isNaN(u) ? 0 : Math.max(Math.round(h.x - e.project([l, t - u]).x), 1), this._radiusY = Math.max(Math.round(h.y - a.y), 1)
		  		     		  						} else {
		  		     		  							var c = n.unproject(n.project(this._latlng).subtract([this._mRadius, 0]));
		  		     		  							this._point = e.latLngToLayerPoint(this._latlng), this._radius = this._point.x - e.latLngToLayerPoint(c).x
		  		     		  						}
		  		     		  						this._updateBounds()
		  		     		  					}
		  		     		  				}), L.circle = function (t, i, e) {
		  		     		  					return "number" == typeof i && (i = L.extend({}, e, {
		  		     		  						radius: i
		  		     		  					})), new L.Circle(t, i)
		  		     		  				},
		  		     		  				function () {
		  		     		  					function t(t) {
		  		     		  						return L.FeatureGroup.extend({
		  		     		  							initialize: function (t, i) {
		  		     		  								this._layers = {}, this._options = i, this.setLatLngs(t)
		  		     		  							},
		  		     		  							setLatLngs: function (i) {
		  		     		  								var e = 0,
		  		     		  									n = i.length;
		  		     		  								for (this.eachLayer(function (t) {
		  		     		  										n > e ? t.setLatLngs(i[e++]) : this.removeLayer(t)
		  		     		  									}, this); n > e;) this.addLayer(new t(i[e++], this._options));
		  		     		  								return this
		  		     		  							},
		  		     		  							getLatLngs: function () {
		  		     		  								var t = [];
		  		     		  								return this.eachLayer(function (i) {
		  		     		  									t.push(i.getLatLngs())
		  		     		  								}), t
		  		     		  							}
		  		     		  						})
		  		     		  					}
		  		     		  					L.MultiPolyline = t(L.Polyline), L.MultiPolygon = t(L.Polygon), L.multiPolyline = function (t, i) {
		  		     		  						return new L.MultiPolyline(t, i)
		  		     		  					}, L.multiPolygon = function (t, i) {
		  		     		  						return new L.MultiPolygon(t, i)
		  		     		  					}
		  		     		  				}(), L.SVG = L.Renderer.extend({
		  		     		  					getEvents: function () {
		  		     		  						var t = L.Renderer.prototype.getEvents.call(this);
		  		     		  						return t.zoomstart = this._onZoomStart, t
		  		     		  					},
		  		     		  					_initContainer: function () {
		  		     		  						this._container = L.SVG.create("svg"), this._container.setAttribute("pointer-events", "none"), this._rootGroup = L.SVG.create("g"), this._container.appendChild(this._rootGroup)
		  		     		  					},
		  		     		  					_onZoomStart: function () {
		  		     		  						this._update()
		  		     		  					},
		  		     		  					_update: function () {
		  		     		  						if (!this._map._animatingZoom || !this._bounds) {
		  		     		  							L.Renderer.prototype._update.call(this);
		  		     		  							var t = this._bounds,
		  		     		  								i = t.getSize(),
		  		     		  								e = this._container;
		  		     		  							this._svgSize && this._svgSize.equals(i) || (this._svgSize = i, e.setAttribute("width", i.x), e.setAttribute("height", i.y)), L.DomUtil.setPosition(e, t.min), e.setAttribute("viewBox", [t.min.x, t.min.y, i.x, i.y].join(" "))
		  		     		  						}
		  		     		  					},
		  		     		  					_initPath: function (t) {
		  		     		  						var i = t._path = L.SVG.create("path");
		  		     		  						t.options.className && L.DomUtil.addClass(i, t.options.className), t.options.interactive && L.DomUtil.addClass(i, "imap-interactive"), L.DomEvent.on(i, "click dblclick mousedown mouseup contextmenu", function (t) {
		  		     		  							this.fire("click")
		  		     		  						}, this), this._updateStyle(t)
		  		     		  					},
		  		     		  					_fireEvent: function (t, i, e) {
		  		     		  						this._map._fireDOMEvent(i, e || i.type, t)
		  		     		  					},
		  		     		  					_addPath: function (t) {
		  		     		  						this._rootGroup.appendChild(t._path), t.addInteractiveTarget(t._path)
		  		     		  					},
		  		     		  					_removePath: function (t) {
		  		     		  						L.DomUtil.remove(t._path), t.removeInteractiveTarget(t._path)
		  		     		  					},
		  		     		  					_updatePath: function (t) {
		  		     		  						t._project(), t._update()
		  		     		  					},
		  		     		  					_updateStyle: function (t) {
		  		     		  						var i = t._path,
		  		     		  							e = t.options;
		  		     		  						i && (e.stroke ? (i.setAttribute("stroke", e.color), i.setAttribute("stroke-opacity", e.opacity), i.setAttribute("stroke-width", e.weight), i.setAttribute("stroke-linecap", e.lineCap), i.setAttribute("stroke-linejoin", e.lineJoin), e.dashArray ? i.setAttribute("stroke-dasharray", e.dashArray) : i.removeAttribute("stroke-dasharray"), e.dashOffset ? i.setAttribute("stroke-dashoffset", e.dashOffset) : i.removeAttribute("stroke-dashoffset")) : i.setAttribute("stroke", "none"), e.fill ? (i.setAttribute("fill", e.fillColor || e.color), i.setAttribute("fill-opacity", e.fillOpacity), i.setAttribute("fill-rule", e.fillRule || "evenodd")) : i.setAttribute("fill", "none"), i.setAttribute("pointer-events", e.pointerEvents || (e.interactive ? "visiblePainted" : "none")))
		  		     		  					},
		  		     		  					_updatePoly: function (t, i) {
		  		     		  						this._setPath(t, L.SVG.pointsToPath(t._parts, i, t.options))
		  		     		  					},
		  		     		  					_updateSector: function (t) {
		  		     		  						var i = t._parts,
		  		     		  							e = i ? "M " + i.x + " " + i.y + " " + i.x2 + " " + i.y2 + " C " + i.x2 + " " + i.y2 + " " + i.x3 + " " + i.y3 + " " + i.x1 + " " + i.y1 + " z" : "M 0 0 z";
		  		     		  						this._setPath(t, e)
		  		     		  					},
		  		     		  					_updateCircle: function (t) {
		  		     		  						var i = t._point,
		  		     		  							e = t._radius,
		  		     		  							n = t._radiusY || e,
		  		     		  							s = "a" + e + "," + n + " 0 1,0 ",
		  		     		  							o = t._empty() ? "M0 0" : "M" + (i.x - e) + "," + i.y + s + 2 * e + ",0 " + s + 2 * -e + ",0 ";
		  		     		  						this._setPath(t, o)
		  		     		  					},
		  		     		  					_setPath: function (t, i) {
		  		     		  						t._path.setAttribute("d", i)
		  		     		  					},
		  		     		  					_bringToFront: function (t) {
		  		     		  						L.DomUtil.toFront(t._path)
		  		     		  					},
		  		     		  					_bringToBack: function (t) {
		  		     		  						L.DomUtil.toBack(t._path)
		  		     		  					}
		  		     		  				}), L.extend(L.SVG, {
		  		     		  					create: function (t) {
		  		     		  						return document.createElementNS("http://www.w3.org/2000/svg", t)
		  		     		  					},
		  		     		  					pointsToPath: function (t, i, e) {
		  		     		  						var n, s, o, a, r, h, l = "";
		  		     		  						for (n = 0, o = t.length; o > n; n++) {
		  		     		  							for (r = t[n], s = 0, a = r.length; a > s; s++) h = r[s], l += (s ? "L" : "M") + h.x + " " + h.y;
		  		     		  							l += i ? L.Browser.svg ? "z" : "x" : ""
		  		     		  						}
		  		     		  						var u = "";
		  		     		  						if (e.arrow) {
		  		     		  							var c = t[0],
		  		     		  								d = e.weight;
		  		     		  							if (c && c.length > 0)
		  		     		  								for (var p = 0, f = c.length - 1; f > p; ++p) {
		  		     		  									var m = {
		  		     		  										x: Math.round(2 * c[p + 1].x - c[p].x),
		  		     		  										y: Math.round(2 * c[p + 1].y - c[p].y)
		  		     		  									};
		  		     		  									u += this._drawPolylineArrow(c[p + 1], m, parseInt(d) + 3)
		  		     		  								}
		  		     		  						}
		  		     		  						return l + u || "M0 0"
		  		     		  					},
		  		     		  					_drawPolylineArrow: function (t, i, e) {
		  		     		  						var n, s, o, a, r, h, l = Math.sqrt((t.y - i.y) * (t.y - i.y) + (t.x - i.x) * (t.x - i.x));
		  		     		  						n = parseInt(t.x) + parseInt(1 * e * (t.x - i.x + (t.y - i.y) / 2) / l), s = parseInt(t.y) + parseInt(1 * e * (t.y - i.y - (t.x - i.x) / 2) / l), o = parseInt(t.x) + parseInt(1 * e * (t.x - i.x - (t.y - i.y) / 2) / l), a = parseInt(t.y) + parseInt(1 * e * (t.y - i.y + (t.x - i.x) / 2) / l), r = Math.round(t.x), h = Math.round(t.y);
		  		     		  						var u = "",
		  		     		  							c = "";
		  		     		  						return n && (u = " M" + n + " " + s + " L" + r + " " + h, c = " M" + o + " " + a + " L" + r + " " + h), u + c
		  		     		  					}
		  		     		  				}), L.Browser.svg = !(!document.createElementNS || !L.SVG.create("svg").createSVGRect), L.svg = function (t) {
		  		     		  					return L.Browser.svg || L.Browser.vml ? new L.SVG(t) : null
		  		     		  				}, L.Browser.vml = !L.Browser.svg && function () {
		  		     		  					try {
		  		     		  						var t = document.createElement("div");
		  		     		  						t.innerHTML = '<v:shape adj="1"/>';
		  		     		  						var i = t.firstChild;
		  		     		  						return i.style.behavior = "url(#default#VML)", i && "object" == typeof i.adj
		  		     		  					} catch (e) {
		  		     		  						return !1
		  		     		  					}
		  		     		  				}(), L.SVG.include(L.Browser.vml ? {
		  		     		  					_initContainer: function () {
		  		     		  						this._container = L.DomUtil.create("div", "imap-vml-container")
		  		     		  					},
		  		     		  					_update: function () {
		  		     		  						this._map._animatingZoom || L.Renderer.prototype._update.call(this)
		  		     		  					},
		  		     		  					_initPath: function (t) {
		  		     		  						var i = t._container = L.SVG.create("shape");
		  		     		  						L.DomUtil.addClass(i, "imap-vml-shape " + (this.options.className || "")), i.coordsize = "1 1", t._path = L.SVG.create("path"), i.appendChild(t._path), this._updateStyle(t)
		  		     		  					},
		  		     		  					_addPath: function (t) {
		  		     		  						var i = t._container;
		  		     		  						this._container.appendChild(i), t.options.interactive && t.addInteractiveTarget(i)
		  		     		  					},
		  		     		  					_removePath: function (t) {
		  		     		  						var i = t._container;
		  		     		  						L.DomUtil.remove(i), t.removeInteractiveTarget(i)
		  		     		  					},
		  		     		  					_updateStyle: function (t) {
		  		     		  						var i = t._stroke,
		  		     		  							e = t._fill,
		  		     		  							n = t.options,
		  		     		  							s = t._container;
		  		     		  						s.stroked = !!n.stroke, s.filled = !!n.fill, n.stroke ? (i || (i = t._stroke = L.SVG.create("stroke")), s.appendChild(i), i.weight = n.weight + "px", i.color = n.color, i.opacity = n.opacity, n.dashArray ? i.dashStyle = L.Util.isArray(n.dashArray) ? n.dashArray.join(" ") : n.dashArray.replace(/( *, *)/g, " ") : i.dashStyle = "", i.endcap = n.lineCap.replace("butt", "flat"), i.joinstyle = n.lineJoin) : i && (s.removeChild(i), t._stroke = null), n.fill ? (e || (e = t._fill = L.SVG.create("fill")), s.appendChild(e), e.color = n.fillColor || n.color, e.opacity = n.fillOpacity) : e && (s.removeChild(e), t._fill = null)
		  		     		  					},
		  		     		  					_updateSector: function (t) {
		  		     		  						var i = t._parts,
		  		     		  							e = i ? "m " + i.x + " " + i.y + " l " + i.x2 + " " + i.y2 + " c " + i.x2 + " " + i.y2 + " " + i.x3 + " " + i.y3 + " " + i.x1 + " " + i.y1 + " x e" : "m 0,0 x e";
		  		     		  						this._setPath(t, e)
		  		     		  					},
		  		     		  					_updateCircle: function (t) {
		  		     		  						var i = t._point.round(),
		  		     		  							e = Math.round(t._radius),
		  		     		  							n = Math.round(t._radiusY || e);
		  		     		  						this._setPath(t, t._empty() ? "M0 0" : "AL " + i.x + "," + i.y + " " + e + "," + n + " 0,23592600")
		  		     		  					},
		  		     		  					_setPath: function (t, i) {
		  		     		  						t._path.v = i
		  		     		  					},
		  		     		  					_bringToFront: function (t) {
		  		     		  						L.DomUtil.toFront(t._container)
		  		     		  					},
		  		     		  					_bringToBack: function (t) {
		  		     		  						L.DomUtil.toBack(t._container)
		  		     		  					}
		  		     		  				} : {}), L.Browser.vml && (L.SVG.create = function () {
		  		     		  					try {
		  		     		  						return document.namespaces.add("lvml", "urn:schemas-microsoft-com:vml"),
		  		     		  							function (t) {
		  		     		  								return document.createElement("<lvml:" + t + ' class="lvml">')
		  		     		  							}
		  		     		  					} catch (t) {
		  		     		  						return function (t) {
		  		     		  							return document.createElement("<" + t + ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">')
		  		     		  						}
		  		     		  					}
		  		     		  				}()), L.Canvas = L.Renderer.extend({
		  		     		  					onAdd: function () {
		  		     		  						L.Renderer.prototype.onAdd.call(this), this._layers = this._layers || {}, this._draw()
		  		     		  					},
		  		     		  					_initContainer: function () {
		  		     		  						var t = this._container = document.createElement("canvas");
		  		     		  						L.DomEvent.on(t, "mousemove", L.Util.throttle(this._onMouseMove, 32, this), this).on(t, "click dblclick mousedown mouseup contextmenu", this._onClick, this).on(t, "mouseout", this._handleMouseOut, this), this._ctx = t.getContext("2d")
		  		     		  					},
		  		     		  					_update: function () {
		  		     		  						if (!this._map._animatingZoom || !this._bounds) {
		  		     		  							this._drawnLayers = {}, L.Renderer.prototype._update.call(this);
		  		     		  							var t = this._bounds,
		  		     		  								i = this._container,
		  		     		  								e = t.getSize(),
		  		     		  								n = L.Browser.retina ? 2 : 1;
		  		     		  							L.DomUtil.setPosition(i, t.min), i.width = n * e.x, i.height = n * e.y, i.style.width = e.x + "px", i.style.height = e.y + "px", L.Browser.retina && this._ctx.scale(2, 2), this._ctx.translate(-t.min.x, -t.min.y)
		  		     		  						}
		  		     		  					},
		  		     		  					_initPath: function (t) {
		  		     		  						this._layers[L.stamp(t)] = t
		  		     		  					},
		  		     		  					_addPath: L.Util.falseFn,
		  		     		  					_removePath: function (t) {
		  		     		  						t._removed = !0, this._requestRedraw(t)
		  		     		  					},
		  		     		  					_updatePath: function (t) {
		  		     		  						this._redrawBounds = t._pxBounds, this._draw(!0), t._project(), t._update(), this._draw(), this._redrawBounds = null
		  		     		  					},
		  		     		  					_updateStyle: function (t) {
		  		     		  						this._requestRedraw(t)
		  		     		  					},
		  		     		  					_requestRedraw: function (t) {
		  		     		  						if (this._map) {
		  		     		  							var i = (t.options.weight || 0) + 1;
		  		     		  							this._redrawBounds = this._redrawBounds || new L.Bounds, this._redrawBounds.extend(t._pxBounds.min.subtract([i, i])), this._redrawBounds.extend(t._pxBounds.max.add([i, i])), this._redrawRequest = this._redrawRequest || L.Util.requestAnimFrame(this._redraw, this)
		  		     		  						}
		  		     		  					},
		  		     		  					_redraw: function () {
		  		     		  						this._redrawRequest = null, this._draw(!0), this._draw(), this._redrawBounds = null
		  		     		  					},
		  		     		  					_draw: function (t) {
		  		     		  						this._clear = t;
		  		     		  						var i, e = this._redrawBounds;
		  		     		  						this._ctx.save(), e && (this._ctx.beginPath(), this._ctx.rect(e.min.x, e.min.y, e.max.x - e.min.x, e.max.y - e.min.y), this._ctx.clip());
		  		     		  						for (var n in this._layers) i = this._layers[n], (!e || i._pxBounds.intersects(e)) && i._updatePath(), t && i._removed && (delete i._removed, delete this._layers[n]);
		  		     		  						this._ctx.restore()
		  		     		  					},
		  		     		  					_updatePoly: function (t, i) {
		  		     		  						var e, n, s, o, a = t._parts,
		  		     		  							r = a.length,
		  		     		  							h = this._ctx;
		  		     		  						if (r) {
		  		     		  							for (this._drawnLayers[t._map_id] = t, h.beginPath(), e = 0; r > e; e++) {
		  		     		  								for (n = 0, s = a[e].length; s > n; n++) o = a[e][n], h[n ? "lineTo" : "moveTo"](o.x, o.y);
		  		     		  								i && h.closePath()
		  		     		  							}
		  		     		  							this._fillStroke(h, t)
		  		     		  						}
		  		     		  					},
		  		     		  					_updateCircle: function (t) {
		  		     		  						if (!t._empty()) {
		  		     		  							var i = t._point,
		  		     		  								e = this._ctx,
		  		     		  								n = t._radius,
		  		     		  								s = (t._radiusY || n) / n;
		  		     		  							1 !== s && (e.save(), e.scale(1, s)), e.beginPath(), e.arc(i.x, i.y / s, n, 0, 2 * Math.PI, !1), 1 !== s && e.restore(), this._fillStroke(e, t)
		  		     		  						}
		  		     		  					},
		  		     		  					_fillStroke: function (t, i) {
		  		     		  						var e = this._clear,
		  		     		  							n = i.options;
		  		     		  						t.globalCompositeOperation = e ? "destination-out" : "source-over", n.fill && (t.globalAlpha = e ? 1 : n.fillOpacity, t.fillStyle = n.fillColor || n.color, t.fill(n.fillRule || "evenodd")), n.stroke && 0 !== n.weight && (t.globalAlpha = e ? 1 : n.opacity, i._prevWeight = t.lineWidth = e ? i._prevWeight + 1 : n.weight, t.strokeStyle = n.color, t.lineCap = n.lineCap, t.lineJoin = n.lineJoin, t.stroke())
		  		     		  					},
		  		     		  					_onClick: function (t) {
		  		     		  						var i, e = this._map.mouseEventToLayerPoint(t),
		  		     		  							n = [];
		  		     		  						for (var s in this._layers) i = this._layers[s], i.options.interactive && i._containsPoint(e) && (L.DomEvent._fakeStop(t), n.push(i));
		  		     		  						n.length && this._fireEvent(n, t)
		  		     		  					},
		  		     		  					_onMouseMove: function (t) {
		  		     		  						if (this._map && !this._map.dragging.moving() && !this._map._animatingZoom) {
		  		     		  							var i = this._map.mouseEventToLayerPoint(t);
		  		     		  							this._handleMouseOut(t, i), this._handleMouseHover(t, i)
		  		     		  						}
		  		     		  					},
		  		     		  					_handleMouseOut: function (t, i) {
		  		     		  						var e = this._hoveredLayer;
		  		     		  						!e || "mouseout" !== t.type && e._containsPoint(i) || (L.DomUtil.removeClass(this._container, "leador-interactive"), this._fireEvent([e], t, "mouseout"), this._hoveredLayer = null)
		  		     		  					},
		  		     		  					_handleMouseHover: function (t, i) {
		  		     		  						var e, n;
		  		     		  						if (!this._hoveredLayer)
		  		     		  							for (e in this._drawnLayers)
		  		     		  								if (n = this._drawnLayers[e], n.options.interactive && n._containsPoint(i)) {
		  		     		  									L.DomUtil.addClass(this._container, "leador-interactive"), this._fireEvent([n], t, "mouseover"), this._hoveredLayer = n;
		  		     		  									break
		  		     		  								}
		  		     		  						this._hoveredLayer && this._fireEvent([this._hoveredLayer], t)
		  		     		  					},
		  		     		  					_fireEvent: function (t, i, e) {
		  		     		  						this._map._fireDOMEvent(i, e || i.type, t)
		  		     		  					},
		  		     		  					_bringToFront: L.Util.falseFn,
		  		     		  					_bringToBack: L.Util.falseFn
		  		     		  				}), L.Browser.canvas = function () {
		  		     		  					return !!document.createElement("canvas").getContext
		  		     		  				}(), L.canvas = function (t) {
		  		     		  					return L.Browser.canvas ? new L.Canvas(t) : null
		  		     		  				}, L.Polyline.prototype._containsPoint = function (t, i) {
		  		     		  					var e, n, s, o, a, r, h = this._clickTolerance();
		  		     		  					if (!this._pxBounds.contains(t)) return !1;
		  		     		  					for (e = 0, o = this._parts.length; o > e; e++)
		  		     		  						for (r = this._parts[e], n = 0, a = r.length, s = a - 1; a > n; s = n++)
		  		     		  							if ((i || 0 !== n) && L.LineUtil.pointToSegmentDistance(t, r[s], r[n]) <= h) return !0;
		  		     		  					return !1
		  		     		  				}, L.Polygon.prototype._containsPoint = function (t) {
		  		     		  					var i, e, n, s, o, a, r, h, l = !1;
		  		     		  					if (!this._pxBounds.contains(t)) return !1;
		  		     		  					for (s = 0, r = this._parts.length; r > s; s++)
		  		     		  						for (i = this._parts[s], o = 0, h = i.length, a = h - 1; h > o; a = o++) e = i[o], n = i[a], e.y > t.y != n.y > t.y && t.x < (n.x - e.x) * (t.y - e.y) / (n.y - e.y) + e.x && (l = !l);
		  		     		  					return l || L.Polyline.prototype._containsPoint.call(this, t, !0)
		  		     		  				}, L.CircleMarker.prototype._containsPoint = function (t) {
		  		     		  					return t.distanceTo(this._point) <= this._radius + this._clickTolerance()
		  		     		  				}, L.GeoJSON = L.FeatureGroup.extend({
		  		     		  					initialize: function (t, i) {
		  		     		  						L.setOptions(this, i), this._layers = {}, t && this.addData(t)
		  		     		  					},
		  		     		  					addData: function (t) {
		  		     		  						var i, e, n, s = L.Util.isArray(t) ? t : t.features;
		  		     		  						if (s) {
		  		     		  							for (i = 0, e = s.length; e > i; i++) n = s[i], (n.geometries || n.geometry || n.features || n.coordinates) && this.addData(n);
		  		     		  							return this
		  		     		  						}
		  		     		  						var o = this.options;
		  		     		  						if (o.filter && !o.filter(t)) return this;
		  		     		  						var a = L.GeoJSON.geometryToLayer(t, o);
		  		     		  						return a ? (a.feature = L.GeoJSON.asFeature(t), a.defaultOptions = a.options, this.resetStyle(a), o.onEachFeature && o.onEachFeature(t, a), this.addLayer(a)) : this
		  		     		  					},
		  		     		  					resetStyle: function (t) {
		  		     		  						return t.options = L.Util.extend({}, t.defaultOptions), this._setLayerStyle(t, this.options.style), this
		  		     		  					},
		  		     		  					setStyle: function (t) {
		  		     		  						return this.eachLayer(function (i) {
		  		     		  							this._setLayerStyle(i, t)
		  		     		  						}, this)
		  		     		  					},
		  		     		  					_setLayerStyle: function (t, i) {
		  		     		  						"function" == typeof i && (i = i(t.feature)), t.setStyle && t.setStyle(i)
		  		     		  					}
		  		     		  				}), L.extend(L.GeoJSON, {
		  		     		  					geometryToLayer: function (t, i) {
		  		     		  						var e, n, s, o, a = "Feature" === t.type ? t.geometry : t,
		  		     		  							r = a ? a.coordinates : null,
		  		     		  							h = [],
		  		     		  							l = i && i.pointToLayer,
		  		     		  							u = i && i.coordsToLatLng || this.coordsToLatLng;
		  		     		  						if (!r && !a) return null;
		  		     		  						switch (a.type) {
		  		     		  							case "Point":
		  		     		  								return e = u(r), l ? l(t, e) : new L.Marker(e);
		  		     		  							case "MultiPoint":
		  		     		  								for (s = 0, o = r.length; o > s; s++) e = u(r[s]), h.push(l ? l(t, e) : new L.Marker(e));
		  		     		  								return new L.FeatureGroup(h);
		  		     		  							case "LineString":
		  		     		  							case "MultiLineString":
		  		     		  								return n = this.coordsToLatLngs(r, "LineString" === a.type ? 0 : 1, u), new L.Polyline(n, i);
		  		     		  							case "Polygon":
		  		     		  							case "MultiPolygon":
		  		     		  								return n = this.coordsToLatLngs(r, "Polygon" === a.type ? 1 : 2, u), new L.Polygon(n, i);
		  		     		  							case "GeometryCollection":
		  		     		  								for (s = 0, o = a.geometries.length; o > s; s++) {
		  		     		  									var c = this.geometryToLayer({
		  		     		  										geometry: a.geometries[s],
		  		     		  										type: "Feature",
		  		     		  										properties: t.properties
		  		     		  									}, i);
		  		     		  									c && h.push(c)
		  		     		  								}
		  		     		  								return new L.FeatureGroup(h);
		  		     		  							default:
		  		     		  								throw new Error("Invalid GeoJSON object.")
		  		     		  						}
		  		     		  					},
		  		     		  					coordsToLatLng: function (t) {
		  		     		  						return new L.LatLng(t[1], t[0], t[2])
		  		     		  					},
		  		     		  					coordsToLatLngs: function (t, i, e) {
		  		     		  						for (var n, s = [], o = 0, a = t.length; a > o; o++) n = i ? this.coordsToLatLngs(t[o], i - 1, e) : (e || this.coordsToLatLng)(t[o]), s.push(n);
		  		     		  						return s
		  		     		  					},
		  		     		  					latLngToCoords: function (t) {
		  		     		  						return t.alt !== undefined ? [t.lng, t.lat, t.alt] : [t.lng, t.lat]
		  		     		  					},
		  		     		  					latLngsToCoords: function (t, i, e) {
		  		     		  						for (var n = [], s = 0, o = t.length; o > s; s++) n.push(i ? L.GeoJSON.latLngsToCoords(t[s], i - 1, e) : L.GeoJSON.latLngToCoords(t[s]));
		  		     		  						return !i && e && n.push(n[0]), n
		  		     		  					},
		  		     		  					getFeature: function (t, i) {
		  		     		  						return t.feature ? L.extend({}, t.feature, {
		  		     		  							geometry: i
		  		     		  						}) : L.GeoJSON.asFeature(i)
		  		     		  					},
		  		     		  					asFeature: function (t) {
		  		     		  						return "Feature" === t.type ? t : {
		  		     		  							type: "Feature",
		  		     		  							properties: {},
		  		     		  							geometry: t
		  		     		  						}
		  		     		  					}
		  		     		  				});
		  		     		  			var PointToGeoJSON = {
		  		     		  				toGeoJSON: function () {
		  		     		  					return L.GeoJSON.getFeature(this, {
		  		     		  						type: "Point",
		  		     		  						coordinates: L.GeoJSON.latLngToCoords(this.getLatLng())
		  		     		  					})
		  		     		  				}
		  		     		  			};
		  		     		  			L.Marker.include(PointToGeoJSON), L.Circle.include(PointToGeoJSON), L.CircleMarker.include(PointToGeoJSON), L.Polyline.prototype.toGeoJSON = function () {
		  		     		  					var t = !L.Polyline._flat(this._latlngs),
		  		     		  						i = L.GeoJSON.latLngsToCoords(this._latlngs, t ? 1 : 0);
		  		     		  					return L.GeoJSON.getFeature(this, {
		  		     		  						type: (t ? "Multi" : "") + "LineString",
		  		     		  						coordinates: i
		  		     		  					})
		  		     		  				}, L.Polygon.prototype.toGeoJSON = function () {
		  		     		  					var t = !L.Polyline._flat(this._latlngs),
		  		     		  						i = t && !L.Polyline._flat(this._latlngs[0]),
		  		     		  						e = L.GeoJSON.latLngsToCoords(this._latlngs, i ? 2 : t ? 1 : 0, !0);
		  		     		  					return t || (e = [e]), L.GeoJSON.getFeature(this, {
		  		     		  						type: (i ? "Multi" : "") + "Polygon",
		  		     		  						coordinates: e
		  		     		  					})
		  		     		  				}, L.LayerGroup.include({
		  		     		  					toMultiPoint: function () {
		  		     		  						var t = [];
		  		     		  						return this.eachLayer(function (i) {
		  		     		  							t.push(i.toGeoJSON().geometry.coordinates)
		  		     		  						}), L.GeoJSON.getFeature(this, {
		  		     		  							type: "MultiPoint",
		  		     		  							coordinates: t
		  		     		  						})
		  		     		  					},
		  		     		  					toGeoJSON: function () {
		  		     		  						var t = this.feature && this.feature.geometry && this.feature.geometry.type;
		  		     		  						if ("MultiPoint" === t) return this.toMultiPoint();
		  		     		  						var i = "GeometryCollection" === t,
		  		     		  							e = [];
		  		     		  						return this.eachLayer(function (t) {
		  		     		  							if (t.toGeoJSON) {
		  		     		  								var n = t.toGeoJSON();
		  		     		  								e.push(i ? n.geometry : L.GeoJSON.asFeature(n))
		  		     		  							}
		  		     		  						}), i ? L.GeoJSON.getFeature(this, {
		  		     		  							geometries: e,
		  		     		  							type: "GeometryCollection"
		  		     		  						}) : {
		  		     		  							type: "FeatureCollection",
		  		     		  							features: e
		  		     		  						}
		  		     		  					}
		  		     		  				}), L.geoJson = function (t, i) {
		  		     		  					return new L.GeoJSON(t, i)
		  		     		  				}, L.Browser.svg ? L.Path.include({
		  		     		  					_resetTransform: function () {
		  		     		  						this._renderer._rootGroup.setAttributeNS(null, "transform", "")
		  		     		  					},
		  		     		  					_applyTransform: function (t) {
		  		     		  						this._renderer._rootGroup.setAttributeNS(null, "transform", "matrix(" + t.join(" ") + ")")
		  		     		  					}
		  		     		  				}) : L.Path.include({
		  		     		  					_resetTransform: function () {
		  		     		  						this._skew && (this._skew.on = !1, this._renderer._rootGroup.removeChild(this._skew), this._skew = null)
		  		     		  					},
		  		     		  					_applyTransform: function (t) {
		  		     		  						var i = this._skew;
		  		     		  						i || (i = this._createElement("skew"), this._renderer._rootGroup.appendChild(i), i.style.behavior = "url(#default#VML)", this._skew = i);
		  		     		  						var e = t[0].toFixed(8) + " " + t[1].toFixed(8) + " " + t[2].toFixed(8) + " " + t[3].toFixed(8) + " 0 0",
		  		     		  							n = Math.floor(t[4]).toFixed() + ", " + Math.floor(t[5]).toFixed(),
		  		     		  							s = this._renderer._rootGroup.style,
		  		     		  							o = parseFloat(s.left),
		  		     		  							a = parseFloat(s.top),
		  		     		  							r = parseFloat(s.width),
		  		     		  							h = parseFloat(s.height);
		  		     		  						isNaN(o) && (o = 0), isNaN(a) && (a = 0), (isNaN(r) || !r) && (r = 1), (isNaN(h) || !h) && (h = 1);
		  		     		  						var l = (-o / r - .5).toFixed(8) + " " + (-a / h - .5).toFixed(8);
		  		     		  						i.on = "f", i.matrix = e, i.origin = l, i.offset = n, i.on = !0
		  		     		  					}
		  		     		  				}), L.Path.include({
		  		     		  					_onMouseClick: function (t) {
		  		     		  						this.dragging && this.dragging.moved() || this._map.dragging && this._map.dragging.moved() || this._fireMouseEvent(t)
		  		     		  					}
		  		     		  				}), L.Handler.PathDrag = L.Handler.extend({
		  		     		  					initialize: function (t) {
		  		     		  						this._Object = t
		  		     		  					},
		  		     		  					addHooks: function () {
		  		     		  						var t = this._Object._path;
		  		     		  						this._draggable || (this._draggable = new L.Draggable(t, t, !0), this._draggable._updatePosition = function () {
		  		     		  							var t = this._lastEvent;
		  		     		  							this.fire("predrag", t);
		  		     		  							var i = t.touches ? t.touches[0] : t;
		  		     		  							this.fire("drag", {
		  		     		  								offset: this._startPoint.subtract(new L.Point(i.clientX, i.clientY))
		  		     		  							}), this._startPoint = new L.Point(i.clientX, i.clientY)
		  		     		  						}), this._draggable.on({
		  		     		  							dragstart: this._onDragStart,
		  		     		  							drag: this._onDrag,
		  		     		  							dragend: this._onDragEnd
		  		     		  						}, this).enable(), L.DomUtil.addClass(this._Object._renderer._rootGroup, "imap-path-draggable")
		  		     		  					},
		  		     		  					removeHooks: function () {
		  		     		  						this._draggable.off({
		  		     		  							dragstart: this._onDragStart,
		  		     		  							drag: this._onDrag,
		  		     		  							dragend: this._onDragEnd
		  		     		  						}, this).disable(), L.Path.CANVAS || L.DomUtil.removeClass(this._Object._renderer._rootGroup, "imap-path-draggable");
		  		     		  					},
		  		     		  					moved: function () {
		  		     		  						return this._draggable && this._draggable._moved
		  		     		  					},
		  		     		  					_onDragStart: function (t) {
		  		     		  						this._Object.fire("movestart").fire("dragstart")
		  		     		  					},
		  		     		  					_onDrag: function (t) {
		  		     		  						this._transformPoints(t.offset), this._Object.fire("move", t).fire("drag", t)
		  		     		  					},
		  		     		  					_onDragEnd: function (t) {
		  		     		  						this._Object.fire("moveend").fire("dragend")
		  		     		  					},
		  		     		  					_transformPoints: function (t) {
		  		     		  						var i, e, n, s = this._Object;
		  		     		  						if (s._latlng = s._latlng || s._position, s._latlng) s._latlng = s._map.containerPointToLatLng(s._map.latLngToContainerPoint(s._latlng)._subtract(t)), s.setLatLng(s._latlng);
		  		     		  						else if (s._latlngs) {
		  		     		  							for (s._latlngs = s._latlngs.length > 1 ? s._latlngs : s._latlngs[0], i = 0, e = s._latlngs.length; e > i; i++) {
		  		     		  								var n = s._latlngs[i],
		  		     		  									o = s._map.latLngToContainerPoint(n)._subtract(t);
		  		     		  								s._latlngs[i] = s._map.containerPointToLatLng(o)
		  		     		  							}
		  		     		  							s.setLatLngs(s._latlngs)
		  		     		  						}
		  		     		  					}
		  		     		  				}), L.Path.prototype.drag = function (t) {
		  		     		  					t ? (this.dragging || (this.dragging = new L.Handler.PathDrag(this)), this.dragging.enable()) : this.dragging && this.dragging.disable()
		  		     		  				},
		  		     		  				function () {
		  		     		  					function t(t, i, e) {
		  		     		  						for (var n = 0, s = t.length; s > n; n++) {
		  		     		  							var o = t[n];
		  		     		  							o.prototype["_" + i] = o.prototype[i], o.prototype[i] = e
		  		     		  						}
		  		     		  					}

		  		     		  					function i(t) {
		  		     		  						return this.hasLayer(t) ? this : (t.on("drag", this._onDrag, this).on("dragend", this._onDragEnd, this), this._addLayer.call(this, t))
		  		     		  					}

		  		     		  					function e(t) {
		  		     		  						return this.hasLayer(t) ? (t.off("drag", this._onDrag, this).off("dragend", this._onDragEnd, this), this._removeLayer.call(this, t)) : this
		  		     		  					}
		  		     		  					L.FeatureGroup.EVENTS += " dragstart", t([L.MultiPolygon, L.MultiPolyline], "addLayer", i), t([L.MultiPolygon, L.MultiPolyline], "removeLayer", e);
		  		     		  					var n = {
		  		     		  						_onDrag: function (t) {
		  		     		  							var i = t.target;
		  		     		  							this.eachLayer(function (t) {
		  		     		  								t !== i && t._applyTransform(i.dragging._matrix)
		  		     		  							}), this._propagateEvent(t)
		  		     		  						},
		  		     		  						_onDragEnd: function (t) {
		  		     		  							var i = t.target;
		  		     		  							this.eachLayer(function (t) {
		  		     		  								t !== i && (t._resetTransform(), t.dragging._transformPoints(i.dragging._matrix))
		  		     		  							}), this._propagateEvent(t)
		  		     		  						}
		  		     		  					};
		  		     		  					L.MultiPolygon.include(n), L.MultiPolyline.include(n)
		  		     		  				}(), L.Edit = L.Edit || {}, L.Edit.Poly = L.Handler.extend({
		  		     		  					options: {
		  		     		  						icon: new L.DivIcon({
		  		     		  							iconSize: new L.Point(8, 8),
		  		     		  							className: "imap-div-icon imap-editing-icon",
		  		     		  							offset: [-5, -6]
		  		     		  						})
		  		     		  					},
		  		     		  					initialize: function (t, i) {
		  		     		  						this._poly = t, L.setOptions(this, i)
		  		     		  					},
		  		     		  					addHooks: function () {
		  		     		  						this._poly._map && (this._markerGroup || this._initMarkers(), this._poly._map.addLayer(this._markerGroup))
		  		     		  					},
		  		     		  					removeHooks: function () {
		  		     		  						this._poly._map && (this._poly._map.removeLayer(this._markerGroup), delete this._markerGroup, delete this._markers)
		  		     		  					},
		  		     		  					updateMarkers: function () {
		  		     		  						this._markerGroup.clearLayers(), this._initMarkers()
		  		     		  					},
		  		     		  					_initMarkers: function () {
		  		     		  						this._markerGroup || (this._markerGroup = new L.LayerGroup), this._markers = [];
		  		     		  						var t, i, e, n, s = this._poly._latlngs.length > 1 ? this._poly._latlngs : this._poly._latlngs[0];
		  		     		  						for (t = 0, e = s.length; e > t; t++) n = this._createMarker(s[t], t), n.on("click", this._onMarkerClick, this), this._markers.push(n);
		  		     		  						var o, a;
		  		     		  						for (t = 0, i = e - 1; e > t; i = t++)(0 !== t || L.Polygon && this._poly instanceof L.Polygon) && (o = this._markers[i], a = this._markers[t], this._createMiddleMarker(o, a), this._updatePrevNext(o, a))
		  		     		  					},
		  		     		  					_createMarker: function (t, i) {
		  		     		  						var e = new L.Marker(t, {
		  		     		  							draggable: !0,
		  		     		  							icon: this.options.icon
		  		     		  						});
		  		     		  						return e._origLatLng = t, e._index = i, e.on("drag", this._onMarkerDrag, this), e.on("dragend", this._fireEdit, this), this._markerGroup.addLayer(e), e
		  		     		  					},
		  		     		  					_fireEdit: function () {
		  		     		  						this._poly.fire("edit")
		  		     		  					},
		  		     		  					_onMarkerDrag: function (t) {
		  		     		  						var i = t.target;
		  		     		  						L.extend(i._origLatLng, i._latlng), i._middleLeft && i._middleLeft.setLatLng(this._getMiddleLatLng(i._prev, i)), i._middleRight && i._middleRight.setLatLng(this._getMiddleLatLng(i, i._next)), this._poly.redraw()
		  		     		  					},
		  		     		  					_onMarkerClick: function (t) {
		  		     		  						if (!(this._poly._latlngs.length < 3)) {
		  		     		  							var i = t.target,
		  		     		  								e = i._index;
		  		     		  							this._markerGroup.removeLayer(i), this._markers.splice(e, 1), this._poly.spliceLatLngs(e, 1), this._updateIndexes(e, -1), this._updatePrevNext(i._prev, i._next), i._middleLeft && this._markerGroup.removeLayer(i._middleLeft), i._middleRight && this._markerGroup.removeLayer(i._middleRight), i._prev && i._next ? this._createMiddleMarker(i._prev, i._next) : i._prev ? i._next || (i._prev._middleRight = null) : i._next._middleLeft = null, this._poly.fire("edit")
		  		     		  						}
		  		     		  					},
		  		     		  					_updateIndexes: function (t, i) {
		  		     		  						this._markerGroup.eachLayer(function (e) {
		  		     		  							e._index > t && (e._index += i)
		  		     		  						})
		  		     		  					},
		  		     		  					_createMiddleMarker: function (t, i) {
		  		     		  						var e, n, s, o = this._getMiddleLatLng(t, i),
		  		     		  							a = this._createMarker(o);
		  		     		  						a.setOpacity(.6), t._middleRight = i._middleLeft = a, n = function () {
		  		     		  							var n = i._index;
		  		     		  							a._index = n, a.off("click", e).on("click", this._onMarkerClick, this), o.lat = a.getLatLng().lat, o.lng = a.getLatLng().lng, this._poly.spliceLatLngs(n, 0, o), this._markers.splice(n, 0, a), a.setOpacity(1), this._updateIndexes(n, 1), i._index++, this._updatePrevNext(t, a), this._updatePrevNext(a, i)
		  		     		  						}, s = function () {
		  		     		  							a.off("dragstart", n, this), a.off("dragend", s, this), this._createMiddleMarker(t, a), this._createMiddleMarker(a, i)
		  		     		  						}, e = function () {
		  		     		  							n.call(this), s.call(this), this._poly.fire("edit")
		  		     		  						}, a.on("click", e, this).on("dragstart", n, this).on("dragend", s, this), this._markerGroup.addLayer(a)
		  		     		  					},
		  		     		  					_updatePrevNext: function (t, i) {
		  		     		  						t && (t._next = i), i && (i._prev = t)
		  		     		  					},
		  		     		  					_getMiddleLatLng: function (t, i) {
		  		     		  						var e = this._poly._map,
		  		     		  							n = e.latLngToLayerPoint(t.getLatLng()),
		  		     		  							s = e.latLngToLayerPoint(i.getLatLng());
		  		     		  						return e.layerPointToLatLng(n._add(s)._divideBy(2))
		  		     		  					}
		  		     		  				}), L.Polyline.addInitHook(function () {
		  		     		  					this.editing || (L.Edit.Poly && (this.editing = new L.Edit.Poly(this), this.options.editable && this.editing.enable()), this.on("add", function () {
		  		     		  						this.editing && this.editing.enabled() && this.editing.addHooks()
		  		     		  					}), this.on("remove", function () {
		  		     		  						this.editing && this.editing.enabled() && this.editing.removeHooks()
		  		     		  					}))
		  		     		  				}), L.Edit = L.Edit || {}, L.Edit.SimpleShape = L.Handler.extend({
		  		     		  					options: {
		  		     		  						moveIcon: new L.DivIcon({
		  		     		  							iconSize: new L.Point(8, 8),
		  		     		  							className: "imap-div-icon imap-editing-icon imap-edit-move"
		  		     		  						}),
		  		     		  						resizeIcon: new L.DivIcon({
		  		     		  							iconSize: new L.Point(8, 8),
		  		     		  							offset: new L.Point(-6, -5),
		  		     		  							className: "imap-div-icon imap-editing-icon imap-edit-resize"
		  		     		  						})
		  		     		  					},
		  		     		  					initialize: function (t, i) {
		  		     		  						this._shape = t, L.Util.setOptions(this, i)
		  		     		  					},
		  		     		  					addHooks: function () {
		  		     		  						this._shape._map && (this._map = this._shape._map, this._markerGroup || this._initMarkers(), this._map.addLayer(this._markerGroup))
		  		     		  					},
		  		     		  					removeHooks: function () {
		  		     		  						if (this._shape._map) {
		  		     		  							for (var t = 0, i = this._resizeMarkers.length; i > t; t++) this._unbindMarker(this._resizeMarkers[t]);
		  		     		  							this._resizeMarkers = null, this._map.removeLayer(this._markerGroup), delete this._markerGroup
		  		     		  						}
		  		     		  						this._map = null
		  		     		  					},
		  		     		  					updateMarkers: function () {
		  		     		  						this._markerGroup.clearLayers(), this._initMarkers()
		  		     		  					},
		  		     		  					_initMarkers: function () {
		  		     		  						this._markerGroup || (this._markerGroup = new L.LayerGroup), this._createResizeMarker()
		  		     		  					},
		  		     		  					_createResizeMarker: function () {},
		  		     		  					_createMarker: function (t, i) {
		  		     		  						var e = new L.Marker(t, {
		  		     		  							draggable: !0,
		  		     		  							icon: i,
		  		     		  							zIndexOffset: 10
		  		     		  						});
		  		     		  						return this._bindMarker(e), this._markerGroup.addLayer(e), e
		  		     		  					},
		  		     		  					_bindMarker: function (t) {
		  		     		  						t.on("dragstart", this._onMarkerDragStart, this).on("drag", this._onMarkerDrag, this).on("dragend", this._onMarkerDragEnd, this)
		  		     		  					},
		  		     		  					_unbindMarker: function (t) {
		  		     		  						t.off("dragstart", this._onMarkerDragStart).off("drag", this._onMarkerDrag).off("dragend", this._onMarkerDragEnd)
		  		     		  					},
		  		     		  					_onMarkerDragStart: function (t) {
		  		     		  						var i = t.target;
		  		     		  						i.setOpacity(0)
		  		     		  					},
		  		     		  					_onMarkerDrag: function (t) {
		  		     		  						var i = t.target,
		  		     		  							e = i.getLatLng();
		  		     		  						i === this._moveMarker ? this._move(e) : this._resize(e), this._shape.redraw()
		  		     		  					},
		  		     		  					_onMarkerDragEnd: function (t) {
		  		     		  						var i = t.target;
		  		     		  						i.setOpacity(1), this._shape.fire("edit")
		  		     		  					},
		  		     		  					_move: function () {},
		  		     		  					_resize: function () {}
		  		     		  				}), L.Edit = L.Edit || {}, L.Edit.Rectangle = L.Edit.SimpleShape.extend({
		  		     		  					_createMoveMarker: function () {
		  		     		  						var t = this._shape.getBounds();
		  		     		  						t.getCenter()
		  		     		  					},
		  		     		  					_createResizeMarker: function () {
		  		     		  						var t = this._getCorners();
		  		     		  						this._resizeMarkers = [];
		  		     		  						for (var i = 0, e = t.length; e > i; i++) this._resizeMarkers.push(this._createMarker(t[i], this.options.resizeIcon)), this._resizeMarkers[i]._cornerIndex = i
		  		     		  					},
		  		     		  					_onMarkerDragStart: function (t) {
		  		     		  						L.Edit.SimpleShape.prototype._onMarkerDragStart.call(this, t);
		  		     		  						var i = this._getCorners(),
		  		     		  							e = t.target,
		  		     		  							n = e._cornerIndex;
		  		     		  						this._oppositeCorner = i[(n + 2) % 4], this._toggleCornerMarkers(0, n)
		  		     		  					},
		  		     		  					_onMarkerDragEnd: function (t) {
		  		     		  						var i, e, n = t.target;
		  		     		  						n === this._moveMarker && (i = this._shape.getBounds(), e = i.getCenter(), n.setLatLng(e)), this._toggleCornerMarkers(1), this._repositionCornerMarkers(), L.Edit.SimpleShape.prototype._onMarkerDragEnd.call(this, t)
		  		     		  					},
		  		     		  					_move: function (t) {
		  		     		  						for (var i, e = this._shape.getLatLngs(), n = this._shape.getBounds(), s = n.getCenter(), o = [], a = 0, r = e.length; r > a; a++) i = [e[a].lat - s.lat, e[a].lng - s.lng], o.push([t.lat + i[0], t.lng + i[1]]);
		  		     		  						this._shape.setLatLngs(o), this._repositionCornerMarkers()
		  		     		  					},
		  		     		  					_resize: function (t) {
		  		     		  						var i;
		  		     		  						this._shape.setBounds(L.latLngBounds(t, this._oppositeCorner)), i = this._shape.getBounds()
		  		     		  					},
		  		     		  					_getCorners: function () {
		  		     		  						var t = this._shape.getBounds(),
		  		     		  							i = t.getNorthWest(),
		  		     		  							e = t.getNorthEast(),
		  		     		  							n = t.getSouthEast(),
		  		     		  							s = t.getSouthWest();
		  		     		  						return [i, e, n, s]
		  		     		  					},
		  		     		  					_toggleCornerMarkers: function (t) {
		  		     		  						for (var i = 0, e = this._resizeMarkers.length; e > i; i++) this._resizeMarkers[i].setOpacity(t)
		  		     		  					},
		  		     		  					_repositionCornerMarkers: function () {
		  		     		  						for (var t = this._getCorners(), i = 0, e = this._resizeMarkers.length; e > i; i++) this._resizeMarkers[i].setLatLng(t[i])
		  		     		  					}
		  		     		  				}), L.Rectangle.addInitHook(function () {
		  		     		  					L.Edit.Rectangle && (this.editing = new L.Edit.Rectangle(this), this.options.editable && this.editing.enable())
		  		     		  				}), L.Edit = L.Edit || {}, L.Edit.Circle = L.Edit.SimpleShape.extend({
		  		     		  					_createResizeMarker: function () {
		  		     		  						var t = this._shape.getLatLng(),
		  		     		  							i = this._getResizeMarkerPoint(t);
		  		     		  						this._resizeMarkers = [], this._resizeMarkers.push(this._createMarker(i, this.options.resizeIcon))
		  		     		  					},
		  		     		  					_getResizeMarkerPoint: function (t) {
		  		     		  						var i = this._shape._radius * Math.cos(Math.PI / 4),
		  		     		  							e = this._map.project(t);
		  		     		  						return this._map.unproject([e.x + i, e.y - i])
		  		     		  					},
		  		     		  					_move: function (t) {
		  		     		  						var i = this._getResizeMarkerPoint(t);
		  		     		  						this._resizeMarkers[0].setLatLng(i), this._shape.setLatLng(t)
		  		     		  					},
		  		     		  					_resize: function (t) {
		  		     		  						var i = this._shape.getLatLng(),
		  		     		  							e = i.distanceTo(t);
		  		     		  						this._shape.setRadius(e)
		  		     		  					}
		  		     		  				}), L.Circle.addInitHook(function () {
		  		     		  					L.Edit.Circle && (this.editing = new L.Edit.Circle(this), this.options.editable && this.editing.enable()), this.on("add", function () {
		  		     		  						this.editing && this.editing.enabled() && this.editing.addHooks()
		  		     		  					}), this.on("remove", function () {
		  		     		  						this.editing && this.editing.enabled() && this.editing.removeHooks()
		  		     		  					})
		  		     		  				}), L.Label = (L.Layer ? L.Layer : L.Class).extend({
		  		     		  					includes: L.Mixin.Events,
		  		     		  					options: {
		  		     		  						className: "",
		  		     		  						clickable: !0,
		  		     		  						direction: "right",
		  		     		  						noHide: !1,
		  		     		  						offset: [0, 0],
		  		     		  						anchor: [0, 0],
		  		     		  						opacity: 1,
		  		     		  						zoomAnimation: !0,
		  		     		  						fontName: "宋体",
		  		     		  						fontColor: "#ffffff",
		  		     		  						fontSize: 12,
		  		     		  						fontBold: !0,
		  		     		  						title: "",
		  		     		  						type: "0"
		  		     		  					},
		  		     		  					initialize: function (t, i) {
		  		     		  						L.setOptions(this, t), this._source = i, this._animated = L.Browser.any3d && this.options.zoomAnimation, this._isOpen = !1
		  		     		  					},
		  		     		  					onAdd: function (t) {
		  		     		  						this._map = t, this._pane = this.options.pane ? t._panes[this.options.pane] : this._source instanceof L.Marker ? t._panes.markerPane : t._panes.popupPane, this._parentContainer || this._initLayout(), this._pane.appendChild(this._parentContainer), this._initInteraction(), this._update(), this.setOpacity(this.options.opacity), t.on("moveend", this._onMoveEnd, this).on("viewreset", this._onViewReset, this), this._animated && t.on("zoomanim", this._zoomAnimation, this)
		  		     		  					},
		  		     		  					onRemove: function (t) {
		  		     		  						this._pane.removeChild(this._parentContainer), t.off({
		  		     		  							zoomanim: this._zoomAnimation,
		  		     		  							moveend: this._onMoveEnd,
		  		     		  							viewreset: this._onViewReset
		  		     		  						}, this), this._removeInteraction(), this._map = null
		  		     		  					},
		  		     		  					setLatLng: function (t) {
		  		     		  						return this._latlng = L.latLng(t), this._map && this._updatePosition(), this
		  		     		  					},
		  		     		  					setContent: function (t) {
		  		     		  						return this._previousContent = this._content, this._content = t, this._updateContent(), this
		  		     		  					},
		  		     		  					close: function () {
		  		     		  						var t = this._map;
		  		     		  						t && t.removeLayer(this)
		  		     		  					},
		  		     		  					updateZIndex: function (t) {
		  		     		  						this._zIndex = t, this._parentContainer && this._zIndex && (this._parentContainer.style.zIndex = t)
		  		     		  					},
		  		     		  					setOpacity: function (t) {
		  		     		  						this.options.opacity = t, this._container && L.DomUtil.setOpacity(this._container, t)
		  		     		  					},
		  		     		  					getOptions: function () {
		  		     		  						return this.options
		  		     		  					},
		  		     		  					getLabelSize: function () {
		  		     		  						return [this._labelWidth, this._labelHeight]
		  		     		  					},
		  		     		  					getElement: function () {
		  		     		  						return this._parentContainer
		  		     		  					},
		  		     		  					_initLayout: function () {
		  		     		  						this._parentContainer = L.DomUtil.create("div", ""), this._parentContainer.style.position = "absolute", this._parentContainer.style.zIndex = 210, this._container = L.DomUtil.create("div", "imap-label " + this.options.className + " imap-zoom-animated"), this._container.style.color = this.options.fontColor, this._container.style.font = this.options.fontSize + 'px "' + this.options.fontName + '"', this._container.style.fontWeight = this.options.fontBold ? "bold" : "normal", this._parentContainer.appendChild(this._container), this.updateZIndex(this._zIndex)
		  		     		  					},
		  		     		  					_update: function () {
		  		     		  						this._map && (this._parentContainer.style.visibility = "hidden", this._updateContent(), this._updatePosition(), this._parentContainer.style.visibility = "")
		  		     		  					},
		  		     		  					_updateContent: function () {
		  		     		  						this._content && this._map && ("0" == this.options.type ? (this._container.className = "imap-label " + this.options.className + " imap-zoom-animated", this._container.style.color = this.options.fontColor, this._container.style.font = this.options.fontSize + 'px "' + this.options.fontName + '"', this._container.style.fontWeight = this.options.fontBold ? "bold" : "normal", this._container.innerHTML = this._content, this._prevContent = this._content) : (this._parentContainer.removeChild(this._container), "string" == typeof this._content ? (this._container = L.DomUtil.create("div", ""), this._container.innerHTML = this._content) : this._container = this._content, this._container.style.whiteSpace = "nowrap", this._parentContainer.appendChild(this._container)), this._labelWidth = this._container.offsetWidth, this._labelHeight = this._container.offsetHeight)
		  		     		  					},
		  		     		  					_updatePosition: function () {
		  		     		  						var t = this._map.latLngToLayerPoint(this._latlng);
		  		     		  						this._setPosition(t)
		  		     		  					},
		  		     		  					_setPosition: function (t) {
		  		     		  						var i = this._map,
		  		     		  							e = this._parentContainer,
		  		     		  							n = i.latLngToContainerPoint(i.getCenter()),
		  		     		  							s = i.layerPointToContainerPoint(t),
		  		     		  							o = this.options.direction,
		  		     		  							a = this._labelWidth,
		  		     		  							r = (this._labelHeight, L.point(this.options.offset)),
		  		     		  							h = L.point(this.options.anchor);
		  		     		  						"right" === o || "auto" === o && s.x < n.x ? (L.DomUtil.removeClass(e, "imap-label-left"), t = t.add(r)) : (L.DomUtil.addClass(e, "imap-label-left"), L.DomUtil.removeClass(e, "imap-label-right"), t = t.add(L.point(-r.x - a, r.y))), t = t.subtract(h), L.DomUtil.setPosition(e, t)
		  		     		  					},
		  		     		  					_zoomAnimation: function (t) {
		  		     		  						var i = this._map._latLngToNewLayerPoint(this._latlng, t.zoom, t.center).round();
		  		     		  						this._setPosition(i)
		  		     		  					},
		  		     		  					_onMoveEnd: function () {
		  		     		  						this._animated && "auto" !== this.options.direction || this._updatePosition()
		  		     		  					},
		  		     		  					_onViewReset: function (t) {
		  		     		  						t && t.hard && this._update()
		  		     		  					},
		  		     		  					_initInteraction: function () {
		  		     		  						if (this.options.clickable) {
		  		     		  							var t = this._parentContainer,
		  		     		  								i = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
		  		     		  							L.DomUtil.addClass(t, "imap-clickable"), L.DomEvent.on(t, "click", this._onMouseClick, this), L.DomEvent.on(t, "contextmenu", function (t) {
		  		     		  								L.DomEvent.preventDefault(t)
		  		     		  							}, this);
		  		     		  							for (var e = 0; e < i.length; e++) L.DomEvent.on(t, i[e], this._fireMouseEvent, this)
		  		     		  						}
		  		     		  					},
		  		     		  					_removeInteraction: function () {
		  		     		  						if (this.options.clickable) {
		  		     		  							var t = this._parentContainer,
		  		     		  								i = ["dblclick", "mousedown", "mouseover", "mouseout", "contextmenu"];
		  		     		  							L.DomUtil.removeClass(t, "imap-clickable"), L.DomEvent.off(t, "click", this._onMouseClick, this);
		  		     		  							for (var e = 0; e < i.length; e++) L.DomEvent.off(t, i[e], this._fireMouseEvent, this)
		  		     		  						}
		  		     		  					},
		  		     		  					_onMouseClick: function (t) {
		  		     		  						this.hasEventListeners(t.type) && L.DomEvent.stopPropagation(t), this.fire(t.type, {
		  		     		  							originalEvent: t
		  		     		  						})
		  		     		  					},
		  		     		  					_fireMouseEvent: function (t) {
		  		     		  						this.fire(t.type, {
		  		     		  							originalEvent: t
		  		     		  						}), "contextmenu" === t.type && this.hasEventListeners(t.type) && L.DomEvent.preventDefault(t), "mousedown" !== t.type ? L.DomEvent.stopPropagation(t) : L.DomEvent.preventDefault(t)
		  		     		  					}
		  		     		  				}), L.BaseMarkerMethods = {
		  		     		  					showLabel: function () {
		  		     		  						return this.label && this._map && (this.label.setLatLng(this._latlng), this._map.showLabel(this.label)), this
		  		     		  					},
		  		     		  					hideLabel: function () {
		  		     		  						return this.label && this.label.close(), this
		  		     		  					},
		  		     		  					setLabelNoHide: function (t) {
		  		     		  						this._labelNoHide !== t && (this._labelNoHide = t, t ? (this._removeLabelRevealHandlers(), this.showLabel()) : (this._addLabelRevealHandlers(), this.hideLabel()))
		  		     		  					},
		  		     		  					bindLabel: function (t, i) {
		  		     		  						return this._labelNoHide = i.noHide, this.label || (this._labelNoHide || this._addLabelRevealHandlers(), this.on("remove", this.hideLabel, this).on("move", this._moveLabel, this).on("add", this._onMarkerAdd, this), this._hasLabelHandlers = !0), "object" == typeof t ? this.label = t : this.label = new L.Label(i, this).setContent(t), this
		  		     		  					},
		  		     		  					unbindLabel: function () {
		  		     		  						return this.label && (this.hideLabel(), this.label = null, this._hasLabelHandlers && (this._labelNoHide || this._removeLabelRevealHandlers(), this.off("remove", this.hideLabel, this).off("move", this._moveLabel, this).off("add", this._onMarkerAdd, this)), this._hasLabelHandlers = !1), this
		  		     		  					},
		  		     		  					updateLabelContent: function (t) {
		  		     		  						this.label && this.label.setContent(t)
		  		     		  					},
		  		     		  					getLabel: function () {
		  		     		  						return this.label
		  		     		  					},
		  		     		  					_onMarkerAdd: function () {
		  		     		  						this._labelNoHide && this.showLabel()
		  		     		  					},
		  		     		  					_addLabelRevealHandlers: function () {
		  		     		  						this.on("mouseover", this.showLabel, this).on("mouseout", this.hideLabel, this), L.Browser.touch && this.on("click", this.showLabel, this)
		  		     		  					},
		  		     		  					_removeLabelRevealHandlers: function () {
		  		     		  						this.off("mouseover", this.showLabel, this).off("mouseout", this.hideLabel, this), L.Browser.touch && this.off("click", this.showLabel, this)
		  		     		  					},
		  		     		  					_moveLabel: function (t) {
		  		     		  						this.label.setLatLng(t.latlng)
		  		     		  					}
		  		     		  				}, L.Icon.Default.mergeOptions({
		  		     		  					labelAnchor: new L.Point(9, -20)
		  		     		  				}), L.Marker.mergeOptions({
		  		     		  					icon: new L.Icon.Default
		  		     		  				}), L.Marker.include(L.BaseMarkerMethods), L.Marker.include({
		  		     		  					_originalUpdateZIndex: L.Marker.prototype._updateZIndex,
		  		     		  					_updateZIndex: function (t) {
		  		     		  						var i = this._zIndex;
		  		     		  						this._originalUpdateZIndex(t), this.label && this.label.updateZIndex(i)
		  		     		  					},
		  		     		  					_originalSetOpacity: L.Marker.prototype.setOpacity,
		  		     		  					setOpacity: function (t, i) {
		  		     		  						this.options.labelHasSemiTransparency = i, this._originalSetOpacity(t)
		  		     		  					},
		  		     		  					_originalUpdateOpacity: L.Marker.prototype._updateOpacity,
		  		     		  					_updateOpacity: function () {
		  		     		  						var t = 0 === this.options.opacity ? 0 : 1;
		  		     		  						this._originalUpdateOpacity(), this.label && this.label.setOpacity(this.options.labelHasSemiTransparency ? this.options.opacity : t)
		  		     		  					},
		  		     		  					_originalSetLatLng: L.Marker.prototype.setLatLng,
		  		     		  					setLatLng: function (t) {
		  		     		  						return this.label && !this._labelNoHide && this.hideLabel(), this._originalSetLatLng(t)
		  		     		  					}
		  		     		  				}), L.CircleMarker.mergeOptions({
		  		     		  					labelAnchor: new L.Point(0, 0)
		  		     		  				}), L.CircleMarker.include(L.BaseMarkerMethods), L.Path.include({
		  		     		  					bindLabel: function (t, i) {
		  		     		  						return this.label && this.label.options === i || (this.label = new L.Label(i, this)), this.label.setContent(t), this._showLabelAdded || (this.on("mouseover", this._showLabel, this).on("mousemove", this._moveLabel, this).on("mouseout remove", this._hideLabel, this), L.Browser.touch && this.on("click", this._showLabel, this), this._showLabelAdded = !0), this
		  		     		  					},
		  		     		  					unbindLabel: function () {
		  		     		  						return this.label && (this._hideLabel(), this.label = null, this._showLabelAdded = !1, this.off("mouseover", this._showLabel, this).off("mousemove", this._moveLabel, this).off("mouseout remove", this._hideLabel, this)), this
		  		     		  					},
		  		     		  					updateLabelContent: function (t) {
		  		     		  						this.label && this.label.setContent(t)
		  		     		  					},
		  		     		  					_showLabel: function (t) {
		  		     		  						this.label.setLatLng(t.latlng), this._map.showLabel(this.label)
		  		     		  					},
		  		     		  					_moveLabel: function (t) {
		  		     		  						this.label.setLatLng(t.latlng)
		  		     		  					},
		  		     		  					_hideLabel: function () {
		  		     		  						this.label.close()
		  		     		  					}
		  		     		  				}), L.Map.include({
		  		     		  					showLabel: function (t) {
		  		     		  						return this.addLayer(t)
		  		     		  					}
		  		     		  				}), L.FeatureGroup.include({
		  		     		  					clearLayers: function () {
		  		     		  						return this.unbindLabel(), this.eachLayer(this.removeLayer, this), this
		  		     		  					},
		  		     		  					bindLabel: function (t, i) {
		  		     		  						return this.invoke("bindLabel", t, i)
		  		     		  					},
		  		     		  					unbindLabel: function () {
		  		     		  						return this.invoke("unbindLabel")
		  		     		  					},
		  		     		  					updateLabelContent: function (t) {
		  		     		  						this.invoke("updateLabelContent", t)
		  		     		  					}
		  		     		  				}), L.Control = L.Class.extend({
		  		     		  					options: {
		  		     		  						position: [0, 0],
		  		     		  						visible: !0
		  		     		  					},
		  		     		  					initialize: function (t) {
		  		     		  						L.setOptions(this, t)
		  		     		  					},
		  		     		  					getPosition: function () {
		  		     		  						return this.options.position
		  		     		  					},
		  		     		  					setPosition: function (t) {
		  		     		  						this._map;
		  		     		  						return this.options.position = t, this._calculatePosition(), this
		  		     		  					},
		  		     		  					setOffset: function (t) {
		  		     		  						this.options.offset = t, this._calculatePosition()
		  		     		  					},
		  		     		  					getContainer: function () {
		  		     		  						return this._container
		  		     		  					},
		  		     		  					visible: function (t) {
		  		     		  						var i = this._container;
		  		     		  						i && (t ? i.style.visibility = "inherit" : i.style.visibility = "hidden"), this.options.visible = t
		  		     		  					},
		  		     		  					addTo: function (t) {
		  		     		  						this.remove(), this._map = t;
		  		     		  						var i = this._container = this.onAdd(t),
		  		     		  							e = this.getPosition();
		  		     		  						L.DomUtil.addClass(i, "imap-control");
		  		     		  						var n = L.DomUtil.create("div", "imap-top imap-left", t._controlContainer);
		  		     		  						return e.indexOf && -1 !== e.indexOf("bottom") ? n.insertBefore(i, n.firstChild) : n.appendChild(i), this.visible(this.options.visible), this._calculatePosition(), t.on("resize", this._calculatePosition, this), this
		  		     		  					},
		  		     		  					_calculatePosition: function () {
		  		     		  						var t = this,
		  		     		  							i = t._container;
		  		     		  						if (i && t._map) {
		  		     		  							var e = t.options,
		  		     		  								n = t._map.getSize(),
		  		     		  								s = n.x,
		  		     		  								o = n.y,
		  		     		  								a = s * e.position[0],
		  		     		  								r = o * e.position[1],
		  		     		  								h = i.offsetWidth || i.style.width,
		  		     		  								l = i.offsetHeight || i.style.height;
		  		     		  							switch (e.position.join(",")) {
		  		     		  								case "0,0":
		  		     		  									break;
		  		     		  								case "0.5,0":
		  		     		  									a -= h / 2;
		  		     		  									break;
		  		     		  								case "1,0":
		  		     		  									a -= h;
		  		     		  									break;
		  		     		  								case "1,0.5":
		  		     		  									a -= h, r -= l / 2;
		  		     		  									break;
		  		     		  								case "1,1":
		  		     		  									a -= h, r -= l;
		  		     		  									break;
		  		     		  								case "0.5,1":
		  		     		  									a -= h / 2, r -= l;
		  		     		  									break;
		  		     		  								case "0,0.5":
		  		     		  									r -= l / 2;
		  		     		  									break;
		  		     		  								case "0,1":
		  		     		  									r -= l;
		  		     		  									break;
		  		     		  								default:
		  		     		  									r -= l / 2
		  		     		  							}
		  		     		  							a += Math.floor(e.offset.x), r += Math.floor(e.offset.y), i.style.left = a + "px", i.style.top = r + "px"
		  		     		  						}
		  		     		  					},
		  		     		  					remove: function () {
		  		     		  						return this._map ? (L.DomUtil.remove(this._container), this.onRemove && this.onRemove(this._map), this._map.off("resize", this._calculatePosition, this), this._map = null, this) : this
		  		     		  					},
		  		     		  					_refocusOnMap: function (t) {
		  		     		  						this._map && t && t.screenX > 0 && t.screenY > 0 && this._map.getContainer().focus()
		  		     		  					}
		  		     		  				}), L.control = function (t) {
		  		     		  					return new L.Control(t)
		  		     		  				}, L.Map.include({
		  		     		  					addControl: function (t) {
		  		     		  						return t.addTo(this), this
		  		     		  					},
		  		     		  					removeControl: function (t) {
		  		     		  						return t.remove(), this
		  		     		  					},
		  		     		  					_initControlPos: function () {
		  		     		  						var t = (this._controlCorners = null, "imap-"),
		  		     		  							i = this._controlContainer = L.DomUtil.create("div", t + "control-container", this._container);
		  		     		  						this._controlCorners = L.DomUtil.create("div", "imap-top imap-left", i)
		  		     		  					},
		  		     		  					_clearControlPos: function () {
		  		     		  						L.DomUtil.remove(this._controlContainer)
		  		     		  					}
		  		     		  				}), L.Control.Zoom = L.Control.extend({
		  		     		  					options: {
		  		     		  						position: [0, 0],
		  		     		  						offset: {
		  		     		  							x: 10,
		  		     		  							y: 10
		  		     		  						},
		  		     		  						zoomInText: "+",
		  		     		  						zoomInTitle: "Zoom in",
		  		     		  						zoomOutText: "-",
		  		     		  						zoomOutTitle: "Zoom out"
		  		     		  					},
		  		     		  					onAdd: function (t) {
		  		     		  						var i = "imap-control-zoom",
		  		     		  							e = L.DomUtil.create("div", i + " imap-bar"),
		  		     		  							n = this.options;
		  		     		  						return this._zoomInButton = this._createButton(n.zoomInText, n.zoomInTitle, i + "-in", e, this._zoomIn), this._zoomOutButton = this._createButton(n.zoomOutText, n.zoomOutTitle, i + "-out", e, this._zoomOut), this._updateDisabled(), t.on("zoomend zoomlevelschange", this._updateDisabled, this), e
		  		     		  					},
		  		     		  					onRemove: function (t) {
		  		     		  						t.off("zoomend zoomlevelschange", this._updateDisabled, this)
		  		     		  					},
		  		     		  					disable: function () {
		  		     		  						return this._disabled = !0, this._updateDisabled(), this
		  		     		  					},
		  		     		  					enable: function () {
		  		     		  						return this._disabled = !1, this._updateDisabled(), this
		  		     		  					},
		  		     		  					_zoomIn: function (t) {
		  		     		  						this._disabled || this._map.zoomIn(t.shiftKey ? 3 : 1)
		  		     		  					},
		  		     		  					_zoomOut: function (t) {
		  		     		  						this._disabled || this._map.zoomOut(t.shiftKey ? 3 : 1)
		  		     		  					},
		  		     		  					_createButton: function (t, i, e, n, s) {
		  		     		  						var o = L.DomUtil.create("a", e, n);
		  		     		  						return o.innerHTML = t, o.href = "#", o.title = i, L.DomEvent.on(o, "mousedown dblclick", L.DomEvent.stopPropagation).on(o, "click", L.DomEvent.stop).on(o, "click", s, this).on(o, "click", this._refocusOnMap, this), o
		  		     		  					},
		  		     		  					_updateDisabled: function () {
		  		     		  						var t = this._map,
		  		     		  							i = "imap-disabled";
		  		     		  						L.DomUtil.removeClass(this._zoomInButton, i), L.DomUtil.removeClass(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMinZoom()) && L.DomUtil.addClass(this._zoomOutButton, i), (this._disabled || t._zoom === t.getMaxZoom()) && L.DomUtil.addClass(this._zoomInButton, i)
		  		     		  					}
		  		     		  				}), L.Control.Attribution = L.Control.extend({
		  		     		  					options: {
		  		     		  						position: [1, 1],
		  		     		  						offset: {
		  		     		  							x: -5,
		  		     		  							y: -5
		  		     		  						}
		  		     		  					},
		  		     		  					initialize: function (t) {
		  		     		  						L.setOptions(this, t), this._attributions = {}
		  		     		  					},
		  		     		  					onAdd: function (t) {
		  		     		  						return this._container = L.DomUtil.create("div", "imap-control-attribution"), L.DomEvent && L.DomEvent.disableClickPropagation(this._container), this._update(), this._container
		  		     		  					},
		  		     		  					addAttribution: function (t) {
		  		     		  						return t || t.id ? (this._attributions[t.id] = t, this._update(), this) : this
		  		     		  					},
		  		     		  					removeAttribution: function (t) {
		  		     		  						return t && this._attributions[t] ? (this._attributions[t] = undefined, this._update(), this) : void 0
		  		     		  					},
		  		     		  					getAttribution: function (t) {
		  		     		  						return this._attributions[t]
		  		     		  					},
		  		     		  					getAttributions: function () {
		  		     		  						var t = [];
		  		     		  						for (var i in this._attributions) this._attributions[i] && t.push(this._attributions[i]);
		  		     		  						return t
		  		     		  					},
		  		     		  					_update: function () {
		  		     		  						if (this._map) {
		  		     		  							var t = [];
		  		     		  							for (var i in this._attributions) this._attributions[i] && t.push(this._attributions[i].content);
		  		     		  							this._container.innerHTML = t.join(" | "), this._calculatePosition()
		  		     		  						}
		  		     		  					}
		  		     		  				}), L.Control.Scale = L.Control.extend({
		  		     		  					options: {
		  		     		  						position: [0, 1],
		  		     		  						offset: {
		  		     		  							x: 5,
		  		     		  							y: -5
		  		     		  						},
		  		     		  						maxWidth: 150,
		  		     		  						metric: !0,
		  		     		  						imperial: !0
		  		     		  					},
		  		     		  					onAdd: function (t) {
		  		     		  						var i = "imap-control-scale",
		  		     		  							e = L.DomUtil.create("div", i),
		  		     		  							n = this.options;
		  		     		  						return this._addScales(n, i + "-line", e), t.on(n.updateWhenIdle ? "moveend" : "move", this._update, this), t.whenReady(this._update, this), e
		  		     		  					},
		  		     		  					onRemove: function (t) {
		  		     		  						t.off(this.options.updateWhenIdle ? "moveend" : "move", this._update, this)
		  		     		  					},
		  		     		  					_addScales: function (t, i, e) {
		  		     		  						t.metric && (this._mScale = L.DomUtil.create("div", i, e)), t.imperial && (this._iScale = L.DomUtil.create("div", i, e))
		  		     		  					},
		  		     		  					_update: function () {
		  		     		  						var t = this._map,
		  		     		  							i = t.getSize().y / 2,
		  		     		  							e = t.distance(t.containerPointToLatLng([0, i]), t.containerPointToLatLng([this.options.maxWidth, i]));
		  		     		  						this._updateScales(e)
		  		     		  					},
		  		     		  					_updateScales: function (t) {
		  		     		  						this.options.metric && t && this._updateMetric(t), this.options.imperial && t && this._updateImperial(t)
		  		     		  					},
		  		     		  					_updateMetric: function (t) {
		  		     		  						var i = this._getRoundNum(t),
		  		     		  							e = 1e3 > i ? i + "米" : i / 1e3 + "公里";
		  		     		  						this._updateScale(this._mScale, e, i / t)
		  		     		  					},
		  		     		  					_updateImperial: function (t) {
		  		     		  						var i, e, n, s = 3.2808399 * t;
		  		     		  						s > 5280 ? (i = s / 5280, e = this._getRoundNum(i), this._updateScale(this._iScale, e + "英里", e / i)) : (n = this._getRoundNum(s), this._updateScale(this._iScale, n + "英尺", n / s))
		  		     		  					},
		  		     		  					_updateScale: function (t, i, e) {
		  		     		  						t.style.width = Math.round(this.options.maxWidth * e) + "px", t.innerHTML = i
		  		     		  					},
		  		     		  					_getRoundNum: function (t) {
		  		     		  						var i = Math.pow(10, (Math.floor(t) + "").length - 1),
		  		     		  							e = t / i;
		  		     		  						return e = e >= 10 ? 10 : e >= 5 ? 5 : e >= 3 ? 3 : e >= 2 ? 2 : 1, i * e
		  		     		  					}
		  		     		  				}), L.control.scale = function (t) {
		  		     		  					return new L.Control.Scale(t)
		  		     		  				}, L.Control.Layers = L.Control.extend({
		  		     		  					options: {
		  		     		  						collapsed: !0,
		  		     		  						position: "topright",
		  		     		  						autoZIndex: !0,
		  		     		  						hideSingleBase: !1
		  		     		  					},
		  		     		  					initialize: function (t, i, e) {
		  		     		  						L.setOptions(this, e), this._layers = {}, this._lastZIndex = 0, this._handlingClick = !1;
		  		     		  						for (var n in t) this._addLayer(t[n], n);
		  		     		  						for (n in i) this._addLayer(i[n], n, !0)
		  		     		  					},
		  		     		  					onAdd: function (t) {
		  		     		  						return this._initLayout(), this._update(), this._map = t, t.on("zoomend", this._checkDisabledLayers, this), this._container
		  		     		  					},
		  		     		  					onRemove: function () {
		  		     		  						this._map.off("zoomend", this._checkDisabledLayers, this)
		  		     		  					},
		  		     		  					addBaseLayer: function (t, i) {
		  		     		  						return this._addLayer(t, i), this._update()
		  		     		  					},
		  		     		  					addOverlay: function (t, i) {
		  		     		  						return this._addLayer(t, i, !0), this._update()
		  		     		  					},
		  		     		  					removeLayer: function (t) {
		  		     		  						return t.off("add remove", this._onLayerChange, this), delete this._layers[L.stamp(t)], this._update()
		  		     		  					},
		  		     		  					_initLayout: function () {
		  		     		  						var t = "leador-control-layers",
		  		     		  							i = this._container = L.DomUtil.create("div", t);
		  		     		  						i.setAttribute("aria-haspopup", !0), L.DomEvent.disableClickPropagation(i), L.Browser.touch || L.DomEvent.disableScrollPropagation(i);
		  		     		  						var e = this._form = L.DomUtil.create("form", t + "-list");
		  		     		  						if (this.options.collapsed) {
		  		     		  							L.Browser.android || L.DomEvent.on(i, {
		  		     		  								mouseenter: this._expand,
		  		     		  								mouseleave: this._collapse
		  		     		  							}, this);
		  		     		  							var n = this._layersLink = L.DomUtil.create("a", t + "-toggle", i);
		  		     		  							n.href = "#", n.title = "Layers", L.Browser.touch ? L.DomEvent.on(n, "click", L.DomEvent.stop).on(n, "click", this._expand, this) : L.DomEvent.on(n, "focus", this._expand, this), L.DomEvent.on(e, "click", function () {
		  		     		  								setTimeout(L.bind(this._onInputClick, this), 0)
		  		     		  							}, this), this._map.on("click", this._collapse, this)
		  		     		  						} else this._expand();
		  		     		  						this._baseLayersList = L.DomUtil.create("div", t + "-base", e), this._separator = L.DomUtil.create("div", t + "-separator", e), this._overlaysList = L.DomUtil.create("div", t + "-overlays", e), i.appendChild(e)
		  		     		  					},
		  		     		  					_addLayer: function (t, i, e) {
		  		     		  						t.on("add remove", this._onLayerChange, this);
		  		     		  						var n = L.stamp(t);
		  		     		  						this._layers[n] = {
		  		     		  							layer: t,
		  		     		  							name: i,
		  		     		  							overlay: e
		  		     		  						}, this.options.autoZIndex && t.setZIndex && (this._lastZIndex++, t.setZIndex(this._lastZIndex))
		  		     		  					},
		  		     		  					_update: function () {
		  		     		  						if (!this._container) return this;
		  		     		  						L.DomUtil.empty(this._baseLayersList), L.DomUtil.empty(this._overlaysList);
		  		     		  						var t, i, e, n, s = 0;
		  		     		  						for (e in this._layers) n = this._layers[e], this._addItem(n), i = i || n.overlay, t = t || !n.overlay, s += n.overlay ? 0 : 1;
		  		     		  						return this.options.hideSingleBase && (t = t && s > 1, this._baseLayersList.style.display = t ? "" : "none"), this._separator.style.display = i && t ? "" : "none", this
		  		     		  					},
		  		     		  					_onLayerChange: function (t) {
		  		     		  						this._handlingClick || this._update();
		  		     		  						var i = this._layers[L.stamp(t.target)],
		  		     		  							e = i.overlay ? "add" === t.type ? "overlayadd" : "overlayremove" : "add" === t.type ? "baselayerchange" : null;
		  		     		  						e && this._map.fire(e, i)
		  		     		  					},
		  		     		  					_createRadioElement: function (t, i) {
		  		     		  						var e = '<input type="radio" class="imap-control-layers-selector" name="' + t + '"' + (i ? ' checked="checked"' : "") + "/>",
		  		     		  							n = document.createElement("div");
		  		     		  						return n.innerHTML = e, n.firstChild
		  		     		  					},
		  		     		  					_addItem: function (t) {
		  		     		  						var i, e = document.createElement("label"),
		  		     		  							n = this._map.hasLayer(t.layer);
		  		     		  						t.overlay ? (i = document.createElement("input"), i.type = "checkbox", i.className = "imap-control-layers-selector", i.defaultChecked = n) : i = this._createRadioElement("imap-base-layers", n), i.layerId = L.stamp(t.layer), L.DomEvent.on(i, "click", this._onInputClick, this);
		  		     		  						var s = document.createElement("span");
		  		     		  						s.innerHTML = " " + t.name;
		  		     		  						var o = document.createElement("div");
		  		     		  						e.appendChild(o), o.appendChild(i), o.appendChild(s);
		  		     		  						var a = t.overlay ? this._overlaysList : this._baseLayersList;
		  		     		  						return a.appendChild(e), this._checkDisabledLayers(), e
		  		     		  					},
		  		     		  					_onInputClick: function () {
		  		     		  						var t, i, e, n = this._form.getElementsByTagName("input"),
		  		     		  							s = [],
		  		     		  							o = [];
		  		     		  						this._handlingClick = !0;
		  		     		  						for (var a = n.length - 1; a >= 0; a--) t = n[a], i = this._layers[t.layerId].layer, e = this._map.hasLayer(i), t.checked && !e ? s.push(i) : !t.checked && e && o.push(i);
		  		     		  						for (a = 0; a < o.length; a++) this._map.removeLayer(o[a]);
		  		     		  						for (a = 0; a < s.length; a++) this._map.addLayer(s[a]);
		  		     		  						this._handlingClick = !1, this._refocusOnMap()
		  		     		  					},
		  		     		  					_expand: function () {
		  		     		  						L.DomUtil.addClass(this._container, "imap-control-layers-expanded"), this._form.style.height = null;
		  		     		  						var t = this._map._size.y - (this._container.offsetTop + 50);
		  		     		  						t < this._form.clientHeight ? (L.DomUtil.addClass(this._form, "imap-control-layers-scrollbar"), this._form.style.height = t + "px") : L.DomUtil.removeClass(this._form, "imap-control-layers-scrollbar"), this._checkDisabledLayers()
		  		     		  					},
		  		     		  					_collapse: function () {
		  		     		  						L.DomUtil.removeClass(this._container, "imap-control-layers-expanded")
		  		     		  					},
		  		     		  					_checkDisabledLayers: function () {
		  		     		  						for (var t, i, e = this._form.getElementsByTagName("input"), n = this._map.getZoom(), s = e.length - 1; s >= 0; s--) t = e[s], i = this._layers[t.layerId].layer, t.disabled = i.options.minZoom !== undefined && n < i.options.minZoom || i.options.maxZoom !== undefined && n > i.options.maxZoom
		  		     		  					}
		  		     		  				}), L.control.layers = function (t, i, e) {
		  		     		  					return new L.Control.Layers(t, i, e)
		  		     		  				}, L.Map.include({
		  		     		  					_defaultLocateOptions: {
		  		     		  						timeout: 1e4,
		  		     		  						watch: !1
		  		     		  					},
		  		     		  					locate: function (t) {
		  		     		  						if (t = this._locateOptions = L.extend({}, this._defaultLocateOptions, t), !("geolocation" in navigator)) return this._handleGeolocationError({
		  		     		  							code: 0,
		  		     		  							message: "Geolocation not supported."
		  		     		  						}), this;
		  		     		  						var i = L.bind(this._handleGeolocationResponse, this),
		  		     		  							e = L.bind(this._handleGeolocationError, this);
		  		     		  						return t.watch ? this._locationWatchId = navigator.geolocation.watchPosition(i, e, t) : navigator.geolocation.getCurrentPosition(i, e, t), this
		  		     		  					},
		  		     		  					stopLocate: function () {
		  		     		  						return navigator.geolocation && navigator.geolocation.clearWatch && navigator.geolocation.clearWatch(this._locationWatchId), this._locateOptions && (this._locateOptions.setView = !1), this
		  		     		  					},
		  		     		  					_handleGeolocationError: function (t) {
		  		     		  						var i = t.code,
		  		     		  							e = t.message || (1 === i ? "permission denied" : 2 === i ? "position unavailable" : "timeout");
		  		     		  						this._locateOptions.setView && !this._loaded && this.fitWorld(), this.fire("locationerror", {
		  		     		  							code: i,
		  		     		  							message: "Geolocation error: " + e + "."
		  		     		  						})
		  		     		  					},
		  		     		  					_handleGeolocationResponse: function (t) {
		  		     		  						var i = t.coords.latitude,
		  		     		  							e = t.coords.longitude,
		  		     		  							n = new L.LatLng(i, e),
		  		     		  							s = n.toBounds(t.coords.accuracy),
		  		     		  							o = this._locateOptions;
		  		     		  						if (o.setView) {
		  		     		  							var a = this.getBoundsZoom(s);
		  		     		  							this.setView(n, o.maxZoom ? Math.min(a, o.maxZoom) : a)
		  		     		  						}
		  		     		  						var r = {
		  		     		  							latlng: n,
		  		     		  							bounds: s,
		  		     		  							timestamp: t.timestamp
		  		     		  						};
		  		     		  						for (var h in t.coords) "number" == typeof t.coords[h] && (r[h] = t.coords[h]);
		  		     		  						this.fire("locationfound", r)
		  		     		  					}
		  		     		  				})
		  		     		  		}(window, document);