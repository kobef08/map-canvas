function l() {
	return function () {}
}

function q(e) {
	return function (a) {
		this[e] = a
	}
}

function s(e) {
	return function () {
		return this[e]
	}
}(function () {
	var e = {};
	window.IMAP = e;
	e.STATIC_URL = "http://192.168.120.26:38080/jsmap/IMAP/";
	e.MapConfig = {
		API_REALM_NAME: e.STATIC_URL,
		_MAP_PCIMG_SIZE: 256,
		_MAP_PCBGIMG_URL: ["http://{s}.ishowchina.com/v3/tile/{z}/{x}/{y}.png?s=merge", ["tile4", "tile5", "tile6"]],
		_MAP_PCIMG_ERROR: "http://tile1.ishowchina.com/404.png",
		_MAP_PC_DATAS_URL: ["http://hs1.ishowchina.com/v3/hotspot/", "http://hs2.ishowchina.com/v3/hotspot/", "http://hs3.ishowchina.com/v3/hotspot/"],
		_CONTROL_COPYRIGHT: "",
		_MAP_BGIMG_URL: "images/backgroundimg.png",
		_CONTROL_OVERVIEW_BTNIMG: "images/overview.png",
		_MAP_MARKER_PCICON: "images/point_1.png",
		_MAP_POINT_URL: "images/point_1.png",
		_MAP_IS_POINT_URL: "images/bubble.png",
		_MAP_IS_SEARCH_URL: "images/search_03.png",
		_MAP_IS_DEFIMG_URL: "images/img_1.gif",
		_MAP_CLOSE1_URL: "images/close_1.png",
		_MAP_CLOSE2_URL: "images/close_2.png",
		_MAP_OTHER_URL: "images/other.png",
		_MAP_SCALE_UNITS: [
			[1000, "公里"],
			[1, "米"]
		],
		_MAP_HAND: ["images/cur/openhand.cur", "images/cur/closedhand.cur"],
		_MAP_NAVIIMAGE: ["images/navi.png", "images/newNavi.gif"],
		_MAP_TOUCHALL: "images/touch.png",
		_MAP_ICON_BLAND_URL: "images/blank.png",
		_MAP_HOTSPOT_RECT_IMG_URL: "images/mhotspot.png",
		_MAP_CUR: "images/cur/",
		_MAP_CLUSTER_ICON: "images/cluster/",
		_CONTROL_COPYRIGHT_LOGO: "images/logoCP.png",
		_PLUGINS_URL: "http://192.168.120.26:38080/webapi/auth/v2?v=IMAP&t=jsmap&ak=ec85d3648154874552835438ac6a02b2&m=",
		_MAP_PANORAMA: {
			FLASH_DEPENDENTS_URL: "http://192.168.120.26:38080/jsmap/IMAP/flash/",
			ROAD_URL: "http://websv1.ishowchina.com/road",
			MarkerServiceUrl: "",
			TrueVisionSeverUrl: "http://210.51.167.9:8081",
			panoramaMarkerIcon: "images/monkeys.png",
			panoramaControlIcon: "images/icon_b_01.gif"
		},
		_VERSIONS: "IMAP",
		_COUNT: "http://192.168.120.14:15001/v3/jsmap/log?",
		_VDATA: "vdata.amap.com"
	};
	e.SRV_URL = "http://api.ishowchina.com/";
	e.SRVConfig = {
		SRV_POI_DETAILS_URL: e.SRV_URL + "/poim?",
		SRV_GEO_URL: e.SRV_URL + "v3/geo?",
		SRV_RGEO_URL: e.SRV_URL + "v3/rgeo?",
		SRV_POI_URL: e.SRV_URL + "v3/search/poi?",
		SRV_POI_AROUND_URL: e.SRV_URL + "v3/search/poi?",
		SRV_POI_BOX_URL: e.SRV_URL + "v3/search/poi?",
		SRV_SUGGEST_URL: e.SRV_URL + "v3/sug?",
		SRV_BUS_TRANSFER_URL: e.SRV_URL + "v3/route/bus?",
		SRV_BUS_LINE_ID_URL: e.SRV_URL + "v3/search/busline/byid?",
		SRV_BUS_LINE_NAME_URL: e.SRV_URL + "v3/search/busline/byname?",
		SRV_BUS_STATION_NAME_URL: e.SRV_URL + "v3/search/busstop/byname?",
		SRV_BUS_STATION_ID_URL: e.SRV_URL + "v3/search/busstop/byid?",
		SRV_DRIVING_URL: e.SRV_URL + "v3/route/car?",
		SRV_WALKING_URL: e.SRV_URL + "v3/route/walk?",
		SRV_BOUNDARY_URL: e.SRV_URL + "v3/search/district?",
		SRV_AK: "ec85d3648154874552835438ac6a02b2"
	};
	e.Function = {
		isInDocument: function (a) {
			return a.parentNode && 11 != a.parentNode.nodeType
		},
		getLngLatByOffset: function (a, b, c) {
			a.lng = Number(a.lng);
			a.lat = Number(a.lat);
			return new e.LngLat(a.lng + 360 * Math.asin(Math.sin(Math.round(b) / 12756274) / Math.cos(a.lat * Math.PI / 180)) / Math.PI, a.lat + 360 * Math.asin(Math.round(c) / 12756274) / Math.PI)
		},
		createElement: function (a) {
			var b = document.createElement(a.name);
			a.id && (b.id = a.id);
			a.cssText && (b.style.cssText = a.cssText);
			return b
		},
		createElementNS: function (a) {
			var b = document.createElementNS(a.xmlns, a.name);
			a.cssText && (b.style.cssText = a.cssText);
			a.id && b.setAttribute("id", a.id);
			return b
		},
		getElement: function (a) {
			"string" == typeof a && (a = document.getElementById(a));
			return a
		},
		getElementsByClassName: function (a, b, c) {
			var d = [],
				e = [],
				e = b instanceof Element ? b.getElementsByTagName(c || "*") : document.getElementsByTagName(c || "*");
			for (b = 0; b < e.length; b++) {
				e[b].className.match(RegExp("(\\s|^)" + a + "(\\s|$)")) && (d[d.length] = e[b])
			}
			return d
		},
		isNotNull: function () {
			var a = arguments;
			null != a[0] && e.Function.isArray(a[0]) && (a = a[0]);
			for (var b = 0; b < a.length; b++) {
				if (null == a[b]) {
					return !1
				}
			}
			return !0
		},
		isInstance: function (a) {
			var b = !1;
			if (a === String || a === Boolean || a === Number) {
				b = !0
			}
			var c = arguments;
			null != c[1] && e.Function.isArray(c[1]) && (c = c[1]);
			if (null == a) {
				return !1
			}
			for (var d = 1; d < c.length; d++) {
				if (null == c[d]) {
					return !1
				}
				if (!(c[d] instanceof a)) {
					if (b) {
						if (c[d].constructor.prototype !== a.prototype) {
							return !1
						}
					} else {
						return !1
					}
				}
			}
			return !0
		},
		isArray: function (a) {
			return "[object Array]" === Object.prototype.toString.call(a)
		},
		convert2Param: function (a, b) {
			b = e.Function.isArray(b) || [];
			var c = "";
			if (null != a) {
				if ("string" == typeof a) {
					c = a
				} else {
					if (a instanceof Object) {
						var d = {},
							f;
						for (f in b) {
							var g = a[b[f]];
							null != g && (d[b[f]] = g, delete a[b[f]])
						}
						for (f in a) {
							null != a[f] && (c += "&" + f + "=" + a[f])
						}
						c = c.substr(1);
						e.Function.extend(a, d)
					}
				}
			}
			return c
		},
		unSelect: function (a) {
			"WebkitUserSelect" in document.documentElement.style ? (a.style.WebkitUserSelect = "none", a.style.onselectstart = "return false;") : "MozUserSelect" in document.documentElement.style ? a.style.MozUserSelect = "none" : "OUserSelect" in document.documentElement.style ? a.style.ib = "none" : "msUserSelect" in document.documentElement.style ? a.style.Ja = "none" : (a.unselectable = "on", a.style.Ja = "none", a.onselectstart = "return false;")
		},
		pageSize: function (a) {
			return new e.Size(a.offsetWidth || document.body.clientWidth, a.offsetHeight || (e.Browser.isIE ? "CSS1Compat" == document.compatMode ? document.documentElement.offsetHeight : document.body.offsetHeight : self.innerHeight))
		},
		lastSeqID: 0,
		createUniqueID: function () {
			e.Function.lastSeqID += 1;
			return e.Function.lastSeqID
		},
		applyDefaults: function (a, b, c) {
			b = b || {};
			if (c) {
				for (var d in b) {
					a[c + d] = b[d]
				}
			} else {
				for (d in b) {
					a[d] = b[d]
				}
			}
		},
		extend: function (a, b) {
			if (a && b && "object" == typeof b) {
				for (var c in b) {
					a[c] = b[c]
				}
				c = "initialize hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
				for (var d = 0, e; d < c.length; d++) {
					e = c[d], Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
				}
			}
			return a
		},
		createInterval: function (a, b) {
			return window.setInterval(a, b)
		},
		clearInterval: function (a) {
			window.clearInterval(a)
		},
		setCapture: function (a) {
			a.setCapture && a.setCapture()
		},
		releaseCapture: function (a) {
			a.releaseCapture && a.releaseCapture()
		},
		distanceByPixel: function (a, b) {
			return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
		},
		distanceByLngLat: function (a, b) {
			var c = a.lat * Math.PI / 180,
				d = b.lat * Math.PI / 180;
			return parseFloat((12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin((c - d) / 2), 2) + Math.cos(c) * Math.cos(d) * Math.pow(Math.sin((a.lng - b.lng) * Math.PI / 180 / 2), 2)))).toFixed(2))
		},
		stringLength: function (a) {
			var b = a.match(/[^\x00-\xff]/ig);
			return a.length + (null == b ? 0 : b.length)
		},
		bind: function (a, b) {
			var c = Array.prototype.slice.apply(arguments, [2]);
			return function () {
				var d = c.concat(Array.prototype.slice.apply(arguments, [0]));
				return a.apply(b, d)
			}
		},
		transform: function () {
			for (var a = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"], b = 0; b < a.length; b++) {
				if (a[b] in document.documentElement.style) {
					return a[b]
				}
			}
			return !1
		},
		deleteFromArray: function (a, b, c) {
			for (var d = a.length - 1; 0 <= d; d--) {
				var e = a[d];
				c && (e = a[d][c]);
				e == b && a.splice(d, 1)
			}
		},
		calculateArea: function (a) {
			for (var b = 0, c = a.length, d = 1; d < c; d++) {
				b += (a[d].lng - a[d - 1].lng) * (a[d].lat + a[d - 1].lat) / 2
			}
			b += (a[0].lng - a[c - 1].lng) * (a[0].lat + a[c - 1].lat) / 2;
			return Number(parseFloat(10000 * Math.abs(b), 10))
		},
		getCurrentStyle: function (a, b) {
			if (a.currentStyle) {
				return a.currentStyle[b]
			}
			if (a.style[b]) {
				return a.style[b]
			}
			if (document.defaultView && document.defaultView.getComputedStyle) {
				var c = document.defaultView.getComputedStyle(a, null)
			} else {
				window.getComputedStyle && (c = window.getComputedStyle(a, null))
			}
			return c ? c[b] || c.getPropertyValue(b) : null
		},
		calculateShortestDist: function (a, b, c, d) {
			for (var f = {
					dis: Number.MAX_VALUE
				}, g = a.length - 1, h = 0, k = 0; k < g; k++) {
				if (!a[k]) {
					return null
				}
				var m = this.Da([a[k], a[k + 1]], b);
				m.dis < f.dis && (h = k, f = {
					lnglat: new e.LngLat(m.lng, m.lat),
					dis: m.dis,
					i: k,
					lnglat1: a[k],
					lnglat2: a[k + 1]
				})
			}
			f.index = h;
			f.dis = Math.round(e.Function.distanceByLngLat(b, f.lnglat) / c);
			f.preDis = Math.round(e.Function.distanceByLngLat(f.lnglat, d ? a[0] : f.lnglat1) / c);
			f.nextDis = Math.round(e.Function.distanceByLngLat(f.lnglat, d ? a[g - 1] : f.lnglat2) / c);
			return f
		},
		Da: function (a, b) {
			var c = 0,
				d = 0,
				c = a[1].lng - a[0].lng,
				d = a[1].lat - a[0].lat,
				e = -(a[0].lat - b.lat) * d - (a[0].lng - b.lng) * c,
				g;
			0 >= e ? (c = a[0].lng, d = a[0].lat) : e >= (g = c * c + d * d) ? (c = a[1].lng, d = a[1].lat) : (c = a[0].lng + e * c / g, d = a[0].lat + e * d / g);
			return {
				lng: c,
				lat: d,
				dis: Math.pow(b.lng - c, 2) + Math.pow(b.lat - d, 2)
			}
		},
		calculatePedal: function (a, b) {
			for (var c = null, d = null, f = null, c = null, g = -1, h = d = -1, k = 1, m = a.length; k < m; k++) {
				if (c = a[k - 1], d = a[k], c = e.Function.oa(b, c, d), null != c && (d = e.Function.ma(b, c), -1 == g || d < g)) {
					g = d, f = c, h = k
				}
			}
			return [h, f]
		},
		oa: function (a, b, c) {
			var d = e.Function.Z(e.Function.H(b.lng, b.lat, a.lng, a.lat), e.Function.H(b.lng, b.lat, c.lng, c.lat));
			if (90 < d || 90 < e.Function.Z(e.Function.H(c.lng, c.lat, a.lng, a.lat), e.Function.H(c.lng, c.lat, b.lng, b.lat))) {
				return null
			}
			var f = Math.sqrt((c.lng - b.lng) * (c.lng - b.lng) + (c.lat - b.lat) * (c.lat - b.lat));
			a = Math.cos(d * Math.PI / 180) * Math.sqrt((a.lng - b.lng) * (a.lng - b.lng) + (a.lat - b.lat) * (a.lat - b.lat));
			return new e.LngLat(b.lng + (c.lng - b.lng) * a / f, b.lat + (c.lat - b.lat) * a / f)
		},
		ma: function (a, b) {
			var c = b.lng - a.lng,
				d = b.lat - a.lat;
			return Math.sqrt(c * c + d * d)
		},
		H: function (a, b, c, d) {
			a = Math.round(180 * Math.atan2(c - a, d - b) / Math.PI);
			return 0 > a ? a + 360 : a
		},
		Z: function (a, b) {
			if (-1 == a || -1 == b) {
				return 0
			}
			var c = Math.abs(b - a);
			return 180 >= c ? c : 360 - c
		},
		split: function (a, b) {
			for (var c = [], d = [], f = e.Function.calculatePedal(a, b)[0], g = 0; g < f; ++g) {
				c.push(a[g])
			}
			c.push(b);
			for (d.push(b); f < a.length; ++f) {
				d.push(a[f])
			}
			return [c, d]
		},
		merge: function (a, b) {
			for (var c = [], d = 0; d < a.length - 1; ++d) {
				c.push(a[d])
			}
			for (d = 0; d < b.length; ++d) {
				c.push(b[d])
			}
			return c
		},
		getEventPosition: function (a, b) {
			try {
				if ("undefined" != typeof a.pageX) {
					var c = e.Function.getPageOffset(b);
					return [a.pageX - c[0], a.pageY - c[1]]
				}
				if ("undefined" != typeof a.offsetX) {
					for (var d = a.target || a.srcElement, c = [a.offsetX, a.offsetY]; d && d != b;) {
						var f = d.style.zoom;
						f && (c[0] *= f, c[1] *= f);
						0 == d.clientWidth && 0 == d.clientHeight && d.offsetParent && "TD" == d.offsetParent.nodeName || (c[0] += d.offsetLeft, c[1] += d.offsetTop);
						d = d.offsetParent
					}
					return c
				}
				return [0, 0]
			} catch (g) {}
		},
		getPageOffset: function (a) {
			var b = 0,
				c = 0;
			if (c = a.getBoundingClientRect()) {
				b = Math.floor(c.left) + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
				c = Math.floor(c.top) + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
				b -= document.documentElement.clientLeft;
				c -= document.documentElement.clientTop;
				if ("CSS1Compat" != document.compatMode && e.Browser.isIE()) {
					a = document.body.style.borderLeftWidth;
					var d = document.body.style.borderTopWidth,
						b = b - (isNaN(a) ? 2 : a),
						c = c - (isNaN(d) ? 2 : d)
				}
				return [b, c]
			}
			for (b = [0, 0]; a && a.offsetParent;) {
				b[0] += a.offsetLeft, b[1] += a.offsetTop, a = a.offsetParent
			}
			return b
		},
		getOffset: function (a, b) {
			a = this.sa(a);
			var c = new e.Pixel(a.offsetX, a.offsetY),
				d = a.target;
			if (-1 < "svg,path,circle,".indexOf(a.target.nodeName) && !e.Browser.isIE9()) {
				"svg" != d.nodeName && (d = d.parentNode);
				try {
					c.x = parseInt(d.style.left) + a.offsetX, c.y = parseInt(d.style.top) + a.offsetY
				} catch (f) {
					return c
				}
				d = d.parentNode
			}
			try {
				for (; d && "ldmapc" != d.id;) {
					c.x += d.offsetLeft || 0, c.y += d.offsetTop || 0, d = d.offsetParent
				}
			} catch (g) {} finally {
				return d || (c.x -= b.layerOffset.x, c.y -= b.layerOffset.y), c
			}
		},
		sa: function (a) {
			e.Browser.isIE() && (a.charCode = "keypress" == a.type ? a.keyCode : 0, a.eventPhase = 2, a.isChar = 0 < a.charCode, a.pageX = a.clientX + document.body.scrollLeft, a.pageY = a.clientY + document.body.scrollTop, a.preventDefault = function () {
				this.returnValue = !1
			}, "mouseout" == a.type ? a.relatedTarget = a.toElement : "mouseover" == a.type && (a.relatedTarget = a.fromElement), a.stopPropagation = function () {
				this.cancelBubble = !0
			}, a.target = a.srcElement, a.time = (new Date).getTime());
			e.Browser.isFirefox() && (a.offsetX = a.layerX, a.offsetY = a.layerY);
			a.wheelDelta && (a.detail = a.wheelDelta);
			return a
		},
		getTouchEventOffset: function (a) {
			a = a.touches || a.bc;
			for (var b = {
					x: 0,
					y: 0
				}, c = 0; c < a.length; c++) {
				b.x += a[c].clientX, b.y += a[c].clientY
			}
			return b
		},
		getViewportElement: function () {
			var a = arguments.callee.Ka;
			void 0 == a && (a = e.Browser.isIE() && "CSS1Compat" != document.compatMode ? document.body : document.documentElement, arguments.callee.Ka = a);
			return a
		},
		pagePosition: function (a) {
			var b = [0, 0],
				c = e.Function.getViewportElement();
			if (!a || a == window || a == c) {
				return b
			}
			var d = e.Browser.isFirefox() && document.getBoxObjectFor && "absolute" == a.style.position && ("" == a.style.top || "" == a.style.left),
				f = null;
			if (a.getBoundingClientRect) {
				a = a.getBoundingClientRect(), d = window.pageYOffset || c.scrollTop, b[0] = a.left + (window.pageXOffset || c.scrollLeft), b[1] = a.top + d
			} else {
				if (document.getBoxObjectFor && !d) {
					a = document.getBoxObjectFor(a), c = document.getBoxObjectFor(c), b[0] = a.screenX - c.screenX, b[1] = a.screenY - c.screenY
				} else {
					b[0] = a.offsetLeft;
					b[1] = a.offsetTop;
					f = a.offsetParent;
					if (f != a) {
						for (; f;) {
							b[0] += f.offsetLeft, b[1] += f.offsetTop, f = f.offsetParent
						}
					}
					if (e.Browser.isOpera() || e.Browser.isSafari() && "absolute" == a.style.position) {
						b[1] -= document.body.offsetTop
					}
					for (f = a.offsetParent; f && f != document.body;) {
						b[0] -= f.scrollLeft, e.Browser.isOpera() && "TR" == f.tagName || (b[1] -= f.scrollTop), f = f.offsetParent
					}
				}
			}
			return b
		},
		indexOf: function (a, b, c) {
			for (var d = 0, e = a.length; d < e; d++) {
				var g = a[d];
				if (g && (c && (g = g[c]), g == b)) {
					return d
				}
			}
			return -1
		},
		getStyle: function (a, b) {
			a = e.Function.getElement(a);
			var c = null;
			if (a && a.style) {
				c = a.style[this.$(b)];
				c || (document.defaultView && document.defaultView.getComputedStyle ? c = (c = document.defaultView.getComputedStyle(a, null)) ? c.getPropertyValue(b) : null : a.currentStyle && (c = a.currentStyle[this.$(b)]));
				var d = ["left", "top", "right", "bottom"];
				window.opera && -1 != e.Function.indexOf(d, b) && "static" == e.Function.getStyle(a, "position") && (c = "auto")
			}
			return "auto" == c ? null : c
		},
		$: function (a) {
			a = a.split("-");
			for (var b = a[0], c = 1, d = a.length; c < d; c++) {
				var e = a[c],
					b = b + (e.charAt(0).toUpperCase() + e.substring(1))
			}
			return b
		},
		testNumber: function (a) {
			var b = {};
			b.nonNum = isNaN(a);
			b.appointNum = /^[0-9]*$/.test(a);
			return b
		},
		getNumberLength: function (a) {
			return a.toString().length
		},
		cutStrLength: function (a, b) {
			for (var c = 0, d = 0, e = 0, g = 0; g < b; g++) {
				255 < a.charCodeAt(g) ? c += 2 : d += 1;
				e += 1;
				if (c + d == b) {
					return a.substring(0, e)
				}
				if (c + d > b) {
					return a.substring(0, e - 1) + ""
				}
			}
		},
		checkFieldLength: function (a, b) {
			var c = 0;
			for (i = 0; i < a.length; i++) {
				c = 255 < a.charCodeAt(i) ? c + 2 : c + 1
			}
			return c > b ? this.cutStrLength(a, b) : a
		},
		formatNumber: function (a, b) {
			var c = a.toString(),
				d = c.indexOf(".");
			return 0 < d ? (c = c.substring(0, d + b + 1), eval(c)) : a
		},
		clone: function (a) {
			if ("object" != typeof a || null == a) {
				return a
			}
			var b = {},
				c;
			for (c in a) {
				b[c] = e.Function.clone(a[c])
			}
			return b
		},
		getRotation: function (a, b) {
			var c = 0,
				d = b.y - a.y,
				e = b.x - a.x;
			0 != b.x - a.x ? (c = Math.atan((b.y - a.y) / (b.x - a.x)), 0 <= d && 0 > e ? c = Math.PI + c : 0 > d && 0 >= e ? c = Math.PI + c : 0 > d && 0 <= e && (c = 2 * Math.PI + c)) : c = b.y > a.y ? Math.PI / 2 : 3 * Math.PI / 2;
			return (180 * c / Math.PI).toFixed(1)
		},
		unique: function (a) {
			for (var b = [], c = {}, d = 0, e; null != (e = a[d]); d++) {
				c[e] || (b.push(e), c[e] = !0)
			}
			return b
		},
		containsLngLat: function (a, b) {
			for (var c = a.lng, d = a.lat, e = !1, g = 0, h = b.length, k = h - 1; g < h; k = g, g++) {
				var m = b[g].lng,
					p = b[g].lat,
					n = b[k].lng,
					k = b[k].lat;
				if (m === c && p === d || n === c && k === d) {
					return !0
				}
				if (p < d && k >= d || p >= d && k < d) {
					m += (d - p) * (n - m) / (k - p);
					if (m === c) {
						return !0
					}
					m > c && (e = !e)
				}
			}
			return e
		}
	};
	e.Function.vendorPrefix = function () {
		function a(a) {
			return a ? a.replace(/([A-Z])/g, function (a) {
				return "-" + a.toLowerCase()
			}).replace(/^ms-/, "-ms-") : null
		}

		function b(a, b) {
			if (void 0 === h[b]) {
				var c, e = 0,
					f = d.length,
					g = "undefined" !== typeof a.cssText;
				for (h[b] = null; e < f; e++) {
					if ((c = d[e]) ? (g || (c = c.toLowerCase()), c = c + b.charAt(0).toUpperCase() + b.slice(1)) : c = b, void 0 !== a[c]) {
						h[b] = c;
						break
					}
				}
			}
			return h[b]
		}

		function c(a) {
			return b(e, a)
		}
		var d = ["", "O", "ms", "Moz", "Webkit"],
			e = document.createElement("div").style,
			g = {},
			h = {};
		return {
			css: function (b) {
				if (void 0 === g[b]) {
					var d = b.replace(/(-[\s\S])/g, function (a) {
							return a.charAt(1).toUpperCase()
						}),
						d = c(d);
					g[b] = a(d)
				}
				return g[b]
			},
			js: b,
			style: c,
			cssCache: g,
			jsCache: h
		}
	}();
	e.Class = function () {
		function a() {
			arguments && arguments[0] != e.Class.Yb && this.initialize && this.initialize.apply(this, arguments)
		}
		for (var b = {}, c, d = 0, f = arguments.length; d < f; ++d) {
			"function" == typeof arguments[d] ? (0 == d && 1 < f && (c = arguments[d].prototype.initialize, arguments[d].prototype.initialize = l(), b = new arguments[d], void 0 === c ? delete arguments[d].prototype.initialize : arguments[d].prototype.initialize = c), c = arguments[d].prototype) : c = arguments[d], e.Function.extend(b, c)
		}
		a.prototype = b;
		return a
	};
	e.Class.Yb = l();
	e.Browser = {
		Ub: window.navigator,
		j: function () {
			return window.navigator.userAgent.toLowerCase()
		},
		isIE: function () {
			return /msie/i.test(this.j())
		},
		isIE6: function () {
			return /msie 6.0/i.test(this.j())
		},
		isIE7: function () {
			return /msie 7.0/i.test(this.j())
		},
		isIE8: function () {
			return /msie 8.0/i.test(this.j())
		},
		isIE9: function () {
			return /msie 9.0/i.test(this.j())
		},
		isIE10: function () {
			return /msie 10\.0/i.test(this.j())
		},
		isChrome: function () {
			return /chrome/i.test(this.j()) && /webkit/i.test(this.j()) && /mozilla/i.test(this.j())
		},
		isSafari: function () {
			return /webkit/i.test(this.j()) && !(/chrome/i.test(this.j()) && /webkit/i.test(this.j()) && /mozilla/i.test(this.j()))
		},
		isFirefox: function () {
			return /gecko/i.test(this.j()) && !/like gecko/i.test(this.j())
		},
		isOpera: function () {
			return /opera/i.test(this.j())
		},
		isSupportKeypress: function () {
			return !this.Ub.appVersion.match(/Konqueror|Safari|KHLDL/)
		}
	};
	e.Constants = {
		_SUCC_TYPE: 0,
		_ERROR_TYPE: -1,
		_REMOVE_TOOL: "removetool",
		_Click_Interval: 500,
		_DBLClick_Interval: 250,
		_TOUCH_START: "touchstart",
		_TOUCH_ZOOM: "touchzoom",
		_TOUCH_ZOOM_END: "touchzoomEnd",
		_TOUCH_MOVE: "touchmove",
		_TOUCH_DOWN: "touchstart",
		_TOUCH_UP: "touchend",
		_TOUCH_DBLCLICK: "touchDBLClick",
		_TOUCH_CLICK: "touchClick",
		LONGPRESS: "longpress",
		_GESTURE_START: "gesturedown",
		_GESTURE_CHANGE: "gesturemove",
		_GESTURE_END: "gestureup",
		_MOUSE_SCROLL: e.Browser.isFirefox() ? "DOMMouseScroll" : "mousewheel",
		RESIZE: "resize",
		LOAD: "load",
		ADD_LAYER: "addlayer",
		CHAGE_BGLAYER: "changeBgLayer",
		REMOVE_LAYER: "removelayer",
		MOVE_START: "movestart",
		MOVING: "move",
		MOVE_END: "moveend",
		CLICK: "click",
		MOUSE_CONTEXTMENU: "contextmenu",
		DBLCLICK: "dblclick",
		DBCONTEXTMENU: "dbcontextmenu",
		MOUSE_DOWN: "mousedown",
		MOUSE_UP: "mouseup",
		MOUSE_MOVE: "mousemove",
		MOUSE_OVER: "mouseover",
		MOUSE_OUT: "mouseout",
		MOUSE_WHEEL: "mousewheel",
		KEY_DOWN: "keydown",
		KEY_UP: "keyup",
		DRAG_END: "dragend",
		DRAG_START: "dragstart",
		EDIT_START: "editstart",
		EDIT_ING: "editing",
		EDIT_END: "editend",
		DRAG_ING: "drag",
		ZOOM_START: "zoomstart",
		ZOOM_CHANGED: "zoom",
		ZOOM_END: "zoomend",
		ZOOM_LEVELS_CHANGED: "zoomLevelschange",
		ADD_OVERLAY: "addoverlay",
		REMOVE_OVERLAY: "removeoverlay",
		MENU_OPEN: "menuopen",
		MENU_CLOSE: "menuclose",
		TIP_CLOSE: "tipclose",
		TIP_CLICK: "tipclick",
		TIP_REMOVE: "removetip",
		CONTROL_OVERVIEW_OPEN: "overviewopen",
		CONTROL_OVERVIEW_CLOSE: "overviewclose",
		CONTROL_OVERVIEW_CHANGE: "overviewchange",
		LEFT_TOP: [0, 0],
		TOP_CENTER: [0.5, 0],
		RIGHT_TOP: [1, 0],
		RIGHT_CENTER: [1, 0.5],
		RIGHT_BOTTOM: [1, 1],
		BOTTOM_CENTER: [0.5, 1],
		LEFT_BOTTOM: [0, 1],
		LEFT_CENTER: [0, 0.5],
		CENTER: [0.5, 0.5],
		OVERLAY_LABEL_DEFAULT: 0,
		OVERLAY_LABEL_HTML: 1,
		OVERLAY_LABEL_TEXT: 0,
		OVERLAY_INFOWINDOW_DEFAULT: 0,
		OVERLAY_INFOWINDOW_CUSTOM: 1,
		OVERLAY_LINE_SOLID: "solid",
		OVERLAY_LINE_DASHED: "5, 5",
		OVERLAY_MARKER_POINT: 1,
		OVERLAY_MARKER_SQUAREANGLE: 2,
		OVERLAY_MARKER_CIRCLE: 3,
		NODE_MOVE: "nodemove",
		TOOL_ZOOM_IN: "zoomIn",
		TOOL_ZOOM_OUT: "zoomOut",
		TOOL_BOX_H: "toolboxh",
		TOOL_BOX_V: "toolboxv",
		CONTROL_NAVIGATION_LARGE: 0,
		CONTROL_NAVIGATION_SMALL: 1,
		CONTROL_NAVIGATION_PAN: 2,
		CONTROL_NAVIGATION_ZOOM: 3,
		CONTROL_NAVIGATION_ZOOMBAR: 4,
		LAYER_HOTSPOT_ICON_TYPE: 0,
		LAYER_HOTSPOT_RECT_TYPE: 1,
		LAYER_HOTSPOT_HAND_TYPE: 2,
		HOTSPOT_CLICK: "hotspotclick",
		HOTSPOT_OVER: "hotspotover",
		HOTSPOT_OUT: "hotspotout",
		DELETE_END: "deleteend",
		SPLIT_END: "splitend",
		DELETE_NODE_END: "deletenodeend",
		ADD_NODE_END: "addnodeend",
		ERROR: "error",
		SCALE_UNIT_METRIC: "metric",
		SCALE_UNIT_IMPERIAL: "imperial",
		INCHES_PER_UNIT: {
			inches: 1,
			ft: 12,
			mi: 63360,
			m: 39.37,
			km: 39370,
			dd: 4374754,
			yd: 36
		},
		DRIVING_POLICY_LEAST_TIME: 0,
		DRIVING_POLICY_LEAST_DISTANCE: 1,
		DRIVING_POLICY_AVOID_HIGHWAYS: 2,
		POINT_SIZE_SMALL: 1,
		POINT_SIZE_MIDDLE: 2,
		POINT_SIZE_BIG: 3,
		POINT_SHAPE_STAR: 1,
		POINT_SHAPE_CIRCLE: 2,
		POINT_SHAPE_SQUAREANGLE: 3,
		POINT_SHAPE_PONT: 4,
		CONTROL_COPYRIGHT: ""
	};
	e.Function = {
		isInDocument: function (a) {
			return a.parentNode && 11 != a.parentNode.nodeType
		},
		getLngLatByOffset: function (a, b, c) {
			a.lng = Number(a.lng);
			a.lat = Number(a.lat);
			return new e.LngLat(a.lng + 360 * Math.asin(Math.sin(Math.round(b) / 12756274) / Math.cos(a.lat * Math.PI / 180)) / Math.PI, a.lat + 360 * Math.asin(Math.round(c) / 12756274) / Math.PI)
		},
		createElement: function (a) {
			var b = document.createElement(a.name);
			a.id && (b.id = a.id);
			a.cssText && (b.style.cssText = a.cssText);
			return b
		},
		createElementNS: function (a) {
			var b = document.createElementNS(a.xmlns, a.name);
			a.cssText && (b.style.cssText = a.cssText);
			a.id && b.setAttribute("id", a.id);
			return b
		},
		getElement: function (a) {
			"string" == typeof a && (a = document.getElementById(a));
			return a
		},
		getElementsByClassName: function (a, b, c) {
			var d = [],
				e = [],
				e = b instanceof Element ? b.getElementsByTagName(c || "*") : document.getElementsByTagName(c || "*");
			for (b = 0; b < e.length; b++) {
				e[b].className.match(RegExp("(\\s|^)" + a + "(\\s|$)")) && (d[d.length] = e[b])
			}
			return d
		},
		isNotNull: function () {
			var a = arguments;
			null != a[0] && e.Function.isArray(a[0]) && (a = a[0]);
			for (var b = 0; b < a.length; b++) {
				if (null == a[b]) {
					return !1
				}
			}
			return !0
		},
		isInstance: function (a) {
			var b = !1;
			if (a === String || a === Boolean || a === Number) {
				b = !0
			}
			var c = arguments;
			null != c[1] && e.Function.isArray(c[1]) && (c = c[1]);
			if (null == a) {
				return !1
			}
			for (var d = 1; d < c.length; d++) {
				if (null == c[d]) {
					return !1
				}
				if (!(c[d] instanceof a)) {
					if (b) {
						if (c[d].constructor.prototype !== a.prototype) {
							return !1
						}
					} else {
						return !1
					}
				}
			}
			return !0
		},
		isArray: function (a) {
			return "[object Array]" === Object.prototype.toString.call(a)
		},
		convert2Param: function (a, b) {
			b = e.Function.isArray(b) || [];
			var c = "";
			if (null != a) {
				if ("string" == typeof a) {
					c = a
				} else {
					if (a instanceof Object) {
						var d = {},
							f;
						for (f in b) {
							var g = a[b[f]];
							null != g && (d[b[f]] = g, delete a[b[f]])
						}
						for (f in a) {
							null != a[f] && (c += "&" + f + "=" + a[f])
						}
						c = c.substr(1);
						e.Function.extend(a, d)
					}
				}
			}
			return c
		},
		unSelect: function (a) {
			"WebkitUserSelect" in document.documentElement.style ? (a.style.WebkitUserSelect = "none", a.style.onselectstart = "return false;") : "MozUserSelect" in document.documentElement.style ? a.style.MozUserSelect = "none" : "OUserSelect" in document.documentElement.style ? a.style.ib = "none" : "msUserSelect" in document.documentElement.style ? a.style.Ja = "none" : (a.unselectable = "on", a.style.Ja = "none", a.onselectstart = "return false;")
		},
		pageSize: function (a) {
			return new e.Size(a.offsetWidth || document.body.clientWidth, a.offsetHeight || (e.Browser.isIE ? "CSS1Compat" == document.compatMode ? document.documentElement.offsetHeight : document.body.offsetHeight : self.innerHeight))
		},
		lastSeqID: 0,
		createUniqueID: function () {
			e.Function.lastSeqID += 1;
			return e.Function.lastSeqID
		},
		applyDefaults: function (a, b, c) {
			b = b || {};
			if (c) {
				for (var d in b) {
					a[c + d] = b[d]
				}
			} else {
				for (d in b) {
					a[d] = b[d]
				}
			}
		},
		extend: function (a, b) {
			if (a && b && "object" == typeof b) {
				for (var c in b) {
					a[c] = b[c]
				}
				c = "initialize hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
				for (var d = 0, e; d < c.length; d++) {
					e = c[d], Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e])
				}
			}
			return a
		},
		createInterval: function (a, b) {
			return window.setInterval(a, b)
		},
		clearInterval: function (a) {
			window.clearInterval(a)
		},
		setCapture: function (a) {
			a.setCapture && a.setCapture()
		},
		releaseCapture: function (a) {
			a.releaseCapture && a.releaseCapture()
		},
		distanceByPixel: function (a, b) {
			return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2))
		},
		distanceByLngLat: function (a, b) {
			var c = a.lat * Math.PI / 180,
				d = b.lat * Math.PI / 180;
			return parseFloat((12756274 * Math.asin(Math.sqrt(Math.pow(Math.sin((c - d) / 2), 2) + Math.cos(c) * Math.cos(d) * Math.pow(Math.sin((a.lng - b.lng) * Math.PI / 180 / 2), 2)))).toFixed(2))
		},
		stringLength: function (a) {
			var b = a.match(/[^\x00-\xff]/ig);
			return a.length + (null == b ? 0 : b.length)
		},
		bind: function (a, b) {
			var c = Array.prototype.slice.apply(arguments, [2]);
			return function () {
				var d = c.concat(Array.prototype.slice.apply(arguments, [0]));
				return a.apply(b, d)
			}
		},
		transform: function () {
			for (var a = ["WebkitTransform", "MozTransform", "OTransform", "msTransform"], b = 0; b < a.length; b++) {
				if (a[b] in document.documentElement.style) {
					return a[b]
				}
			}
			return !1
		},
		deleteFromArray: function (a, b, c) {
			for (var d = a.length - 1; 0 <= d; d--) {
				var e = a[d];
				c && (e = a[d][c]);
				e == b && a.splice(d, 1)
			}
		},
		calculateArea: function (a) {
			for (var b = 0, c = a.length, d = 1; d < c; d++) {
				b += (a[d].lng - a[d - 1].lng) * (a[d].lat + a[d - 1].lat) / 2
			}
			b += (a[0].lng - a[c - 1].lng) * (a[0].lat + a[c - 1].lat) / 2;
			return Number(parseFloat(10000 * Math.abs(b), 10))
		},
		getCurrentStyle: function (a, b) {
			if (a.currentStyle) {
				return a.currentStyle[b]
			}
			if (a.style[b]) {
				return a.style[b]
			}
			if (document.defaultView && document.defaultView.getComputedStyle) {
				var c = document.defaultView.getComputedStyle(a, null)
			} else {
				window.getComputedStyle && (c = window.getComputedStyle(a, null))
			}
			return c ? c[b] || c.getPropertyValue(b) : null
		},
		calculateShortestDist: function (a, b, c, d) {
			for (var f = {
					dis: Number.MAX_VALUE
				}, g = a.length - 1, h = 0, k = 0; k < g; k++) {
				if (!a[k]) {
					return null
				}
				var m = this.Da([a[k], a[k + 1]], b);
				m.dis < f.dis && (h = k, f = {
					lnglat: new e.LngLat(m.lng, m.lat),
					dis: m.dis,
					i: k,
					lnglat1: a[k],
					lnglat2: a[k + 1]
				})
			}
			f.index = h;
			f.dis = Math.round(e.Function.distanceByLngLat(b, f.lnglat) / c);
			f.preDis = Math.round(e.Function.distanceByLngLat(f.lnglat, d ? a[0] : f.lnglat1) / c);
			f.nextDis = Math.round(e.Function.distanceByLngLat(f.lnglat, d ? a[g - 1] : f.lnglat2) / c);
			return f
		},
		Da: function (a, b) {
			var c = 0,
				d = 0,
				c = a[1].lng - a[0].lng,
				d = a[1].lat - a[0].lat,
				e = -(a[0].lat - b.lat) * d - (a[0].lng - b.lng) * c,
				g;
			0 >= e ? (c = a[0].lng, d = a[0].lat) : e >= (g = c * c + d * d) ? (c = a[1].lng, d = a[1].lat) : (c = a[0].lng + e * c / g, d = a[0].lat + e * d / g);
			return {
				lng: c,
				lat: d,
				dis: Math.pow(b.lng - c, 2) + Math.pow(b.lat - d, 2)
			}
		},
		calculatePedal: function (a, b) {
			for (var c = null, d = null, f = null, c = null, g = -1, h = d = -1, k = 1, m = a.length; k < m; k++) {
				if (c = a[k - 1], d = a[k], c = e.Function.oa(b, c, d), null != c && (d = e.Function.ma(b, c), -1 == g || d < g)) {
					g = d, f = c, h = k
				}
			}
			return [h, f]
		},
		oa: function (a, b, c) {
			var d = e.Function.Z(e.Function.H(b.lng, b.lat, a.lng, a.lat), e.Function.H(b.lng, b.lat, c.lng, c.lat));
			if (90 < d || 90 < e.Function.Z(e.Function.H(c.lng, c.lat, a.lng, a.lat), e.Function.H(c.lng, c.lat, b.lng, b.lat))) {
				return null
			}
			var f = Math.sqrt((c.lng - b.lng) * (c.lng - b.lng) + (c.lat - b.lat) * (c.lat - b.lat));
			a = Math.cos(d * Math.PI / 180) * Math.sqrt((a.lng - b.lng) * (a.lng - b.lng) + (a.lat - b.lat) * (a.lat - b.lat));
			return new e.LngLat(b.lng + (c.lng - b.lng) * a / f, b.lat + (c.lat - b.lat) * a / f)
		},
		ma: function (a, b) {
			var c = b.lng - a.lng,
				d = b.lat - a.lat;
			return Math.sqrt(c * c + d * d)
		},
		H: function (a, b, c, d) {
			a = Math.round(180 * Math.atan2(c - a, d - b) / Math.PI);
			return 0 > a ? a + 360 : a
		},
		Z: function (a, b) {
			if (-1 == a || -1 == b) {
				return 0
			}
			var c = Math.abs(b - a);
			return 180 >= c ? c : 360 - c
		},
		split: function (a, b) {
			for (var c = [], d = [], f = e.Function.calculatePedal(a, b)[0], g = 0; g < f; ++g) {
				c.push(a[g])
			}
			c.push(b);
			for (d.push(b); f < a.length; ++f) {
				d.push(a[f])
			}
			return [c, d]
		},
		merge: function (a, b) {
			for (var c = [], d = 0; d < a.length - 1; ++d) {
				c.push(a[d])
			}
			for (d = 0; d < b.length; ++d) {
				c.push(b[d])
			}
			return c
		},
		getEventPosition: function (a, b) {
			try {
				if ("undefined" != typeof a.pageX) {
					var c = e.Function.getPageOffset(b);
					return [a.pageX - c[0], a.pageY - c[1]]
				}
				if ("undefined" != typeof a.offsetX) {
					for (var d = a.target || a.srcElement, c = [a.offsetX, a.offsetY]; d && d != b;) {
						var f = d.style.zoom;
						f && (c[0] *= f, c[1] *= f);
						0 == d.clientWidth && 0 == d.clientHeight && d.offsetParent && "TD" == d.offsetParent.nodeName || (c[0] += d.offsetLeft, c[1] += d.offsetTop);
						d = d.offsetParent
					}
					return c
				}
				return [0, 0]
			} catch (g) {}
		},
		getPageOffset: function (a) {
			var b = 0,
				c = 0;
			if (c = a.getBoundingClientRect()) {
				b = Math.floor(c.left) + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
				c = Math.floor(c.top) + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
				b -= document.documentElement.clientLeft;
				c -= document.documentElement.clientTop;
				if ("CSS1Compat" != document.compatMode && e.Browser.isIE()) {
					a = document.body.style.borderLeftWidth;
					var d = document.body.style.borderTopWidth,
						b = b - (isNaN(a) ? 2 : a),
						c = c - (isNaN(d) ? 2 : d)
				}
				return [b, c]
			}
			for (b = [0, 0]; a && a.offsetParent;) {
				b[0] += a.offsetLeft, b[1] += a.offsetTop, a = a.offsetParent
			}
			return b
		},
		getOffset: function (a, b) {
			a = this.sa(a);
			var c = new e.Pixel(a.offsetX, a.offsetY),
				d = a.target;
			if (-1 < "svg,path,circle,".indexOf(a.target.nodeName) && !e.Browser.isIE9()) {
				"svg" != d.nodeName && (d = d.parentNode);
				try {
					c.x = parseInt(d.style.left) + a.offsetX, c.y = parseInt(d.style.top) + a.offsetY
				} catch (f) {
					return c
				}
				d = d.parentNode
			}
			try {
				for (; d && "ldmapc" != d.id;) {
					c.x += d.offsetLeft || 0, c.y += d.offsetTop || 0, d = d.offsetParent
				}
			} catch (g) {} finally {
				return d || (c.x -= b.layerOffset.x, c.y -= b.layerOffset.y), c
			}
		},
		sa: function (a) {
			e.Browser.isIE() && (a.charCode = "keypress" == a.type ? a.keyCode : 0, a.eventPhase = 2, a.isChar = 0 < a.charCode, a.pageX = a.clientX + document.body.scrollLeft, a.pageY = a.clientY + document.body.scrollTop, a.preventDefault = function () {
				this.returnValue = !1
			}, "mouseout" == a.type ? a.relatedTarget = a.toElement : "mouseover" == a.type && (a.relatedTarget = a.fromElement), a.stopPropagation = function () {
				this.cancelBubble = !0
			}, a.target = a.srcElement, a.time = (new Date).getTime());
			e.Browser.isFirefox() && (a.offsetX = a.layerX, a.offsetY = a.layerY);
			a.wheelDelta && (a.detail = a.wheelDelta);
			return a
		},
		getTouchEventOffset: function (a) {
			a = a.touches || a.bc;
			for (var b = {
					x: 0,
					y: 0
				}, c = 0; c < a.length; c++) {
				b.x += a[c].clientX, b.y += a[c].clientY
			}
			return b
		},
		getViewportElement: function () {
			var a = arguments.callee.Ka;
			void 0 == a && (a = e.Browser.isIE() && "CSS1Compat" != document.compatMode ? document.body : document.documentElement, arguments.callee.Ka = a);
			return a
		},
		pagePosition: function (a) {
			var b = [0, 0],
				c = e.Function.getViewportElement();
			if (!a || a == window || a == c) {
				return b
			}
			var d = e.Browser.isFirefox() && document.getBoxObjectFor && "absolute" == a.style.position && ("" == a.style.top || "" == a.style.left),
				f = null;
			if (a.getBoundingClientRect) {
				a = a.getBoundingClientRect(), d = window.pageYOffset || c.scrollTop, b[0] = a.left + (window.pageXOffset || c.scrollLeft), b[1] = a.top + d
			} else {
				if (document.getBoxObjectFor && !d) {
					a = document.getBoxObjectFor(a), c = document.getBoxObjectFor(c), b[0] = a.screenX - c.screenX, b[1] = a.screenY - c.screenY
				} else {
					b[0] = a.offsetLeft;
					b[1] = a.offsetTop;
					f = a.offsetParent;
					if (f != a) {
						for (; f;) {
							b[0] += f.offsetLeft, b[1] += f.offsetTop, f = f.offsetParent
						}
					}
					if (e.Browser.isOpera() || e.Browser.isSafari() && "absolute" == a.style.position) {
						b[1] -= document.body.offsetTop
					}
					for (f = a.offsetParent; f && f != document.body;) {
						b[0] -= f.scrollLeft, e.Browser.isOpera() && "TR" == f.tagName || (b[1] -= f.scrollTop), f = f.offsetParent
					}
				}
			}
			return b
		},
		indexOf: function (a, b, c) {
			for (var d = 0, e = a.length; d < e; d++) {
				var g = a[d];
				if (g && (c && (g = g[c]), g == b)) {
					return d
				}
			}
			return -1
		},
		getStyle: function (a, b) {
			a = e.Function.getElement(a);
			var c = null;
			if (a && a.style) {
				c = a.style[this.$(b)];
				c || (document.defaultView && document.defaultView.getComputedStyle ? c = (c = document.defaultView.getComputedStyle(a, null)) ? c.getPropertyValue(b) : null : a.currentStyle && (c = a.currentStyle[this.$(b)]));
				var d = ["left", "top", "right", "bottom"];
				window.opera && -1 != e.Function.indexOf(d, b) && "static" == e.Function.getStyle(a, "position") && (c = "auto")
			}
			return "auto" == c ? null : c
		},
		$: function (a) {
			a = a.split("-");
			for (var b = a[0], c = 1, d = a.length; c < d; c++) {
				var e = a[c],
					b = b + (e.charAt(0).toUpperCase() + e.substring(1))
			}
			return b
		},
		testNumber: function (a) {
			var b = {};
			b.nonNum = isNaN(a);
			b.appointNum = /^[0-9]*$/.test(a);
			return b
		},
		getNumberLength: function (a) {
			return a.toString().length
		},
		cutStrLength: function (a, b) {
			for (var c = 0, d = 0, e = 0, g = 0; g < b; g++) {
				255 < a.charCodeAt(g) ? c += 2 : d += 1;
				e += 1;
				if (c + d == b) {
					return a.substring(0, e)
				}
				if (c + d > b) {
					return a.substring(0, e - 1) + ""
				}
			}
		},
		checkFieldLength: function (a, b) {
			var c = 0;
			for (i = 0; i < a.length; i++) {
				c = 255 < a.charCodeAt(i) ? c + 2 : c + 1
			}
			return c > b ? this.cutStrLength(a, b) : a
		},
		formatNumber: function (a, b) {
			var c = a.toString(),
				d = c.indexOf(".");
			return 0 < d ? (c = c.substring(0, d + b + 1), eval(c)) : a
		},
		clone: function (a) {
			if ("object" != typeof a || null == a) {
				return a
			}
			var b = {},
				c;
			for (c in a) {
				b[c] = e.Function.clone(a[c])
			}
			return b
		},
		getRotation: function (a, b) {
			var c = 0,
				d = b.y - a.y,
				e = b.x - a.x;
			0 != b.x - a.x ? (c = Math.atan((b.y - a.y) / (b.x - a.x)), 0 <= d && 0 > e ? c = Math.PI + c : 0 > d && 0 >= e ? c = Math.PI + c : 0 > d && 0 <= e && (c = 2 * Math.PI + c)) : c = b.y > a.y ? Math.PI / 2 : 3 * Math.PI / 2;
			return (180 * c / Math.PI).toFixed(1)
		},
		unique: function (a) {
			for (var b = [], c = {}, d = 0, e; null != (e = a[d]); d++) {
				c[e] || (b.push(e), c[e] = !0)
			}
			return b
		},
		containsLngLat: function (a, b) {
			for (var c = a.lng, d = a.lat, e = !1, g = 0, h = b.length, k = h - 1; g < h; k = g, g++) {
				var m = b[g].lng,
					p = b[g].lat,
					n = b[k].lng,
					k = b[k].lat;
				if (m === c && p === d || n === c && k === d) {
					return !0
				}
				if (p < d && k >= d || p >= d && k < d) {
					m += (d - p) * (n - m) / (k - p);
					if (m === c) {
						return !0
					}
					m > c && (e = !e)
				}
			}
			return e
		}
	};
	e.Function.vendorPrefix = function () {
		function a(a) {
			return a ? a.replace(/([A-Z])/g, function (a) {
				return "-" + a.toLowerCase()
			}).replace(/^ms-/, "-ms-") : null
		}

		function b(a, b) {
			if (void 0 === h[b]) {
				var c, e = 0,
					f = d.length,
					g = "undefined" !== typeof a.cssText;
				for (h[b] = null; e < f; e++) {
					if ((c = d[e]) ? (g || (c = c.toLowerCase()), c = c + b.charAt(0).toUpperCase() + b.slice(1)) : c = b, void 0 !== a[c]) {
						h[b] = c;
						break
					}
				}
			}
			return h[b]
		}

		function c(a) {
			return b(e, a)
		}
		var d = ["", "O", "ms", "Moz", "Webkit"],
			e = document.createElement("div").style,
			g = {},
			h = {};
		return {
			css: function (b) {
				if (void 0 === g[b]) {
					var d = b.replace(/(-[\s\S])/g, function (a) {
							return a.charAt(1).toUpperCase()
						}),
						d = c(d);
					g[b] = a(d)
				}
				return g[b]
			},
			js: b,
			style: c,
			cssCache: g,
			jsCache: h
		}
	}();
	e.Event = {
		isLeftClick: function (a) {
			return 2 != a.which && 1 == a.button || 0 == a.button
		},
		stop: function (a, b) {
			b || e.Event.preventDefault(a);
			a.stopPropagation ? (a.stopPropagation(), a.preventDefault()) : a.cancelBubble = !0
		},
		preventDefault: function (a) {
			a.preventDefault ? a.preventDefault() : a.returnValue = !1
		}
	};
	e.Events = e.Class({
		initialize: function () {
			this.w = {};
			this.P = {}
		},
		addEventListener: function (a, b, c, d) {
			if (b && "function" === typeof b) {
				var e = this.w[a];
				e || (e = []);
				b = {
					obj: c || this,
					func: b,
					type: a,
					stop: d
				};
				e.push(b);
				this.w[a] = e;
				return b
			}
		},
		removeEventListener: function (a, b) {
			if (a) {
				var c, d = this.w[a.type];
				if (null != d) {
					for (var e = 0, g = d.length; e < g; e++) {
						if (c = d[e], a.func == c.func || b && a.obj == c.obj) {
							d.splice(e, 1);
							break
						}
					}
				}
			}
		},
		triggerEvent: function (a, b) {
			var c = this.w[a];
			if (c && 0 != c.length) {
				b || (b = {});
				for (var c = c.slice(), d, f = 0, g = c.length; f < g; ++f) {
					d = c[f], b.stop = d.stop, d.func.apply(d.obj, [b])
				}
				e.Event.stop(b, !0)
			}
		},
		clearListener: function () {
			this.w = {}
		},
		getListeners: s("w")
	});
	e.DOMEvents = e.Class({
		initialize: function () {
			this.P = {}
		},
		attachToElement: function (a) {
			for (var b, c = 0, d = a.length; c < d; ++c) {
				b = a[c], this.Eb(b.element, b.name, this.M(b.callback, b.object, b.stop))
			}
		},
		detachToElement: function (a) {
			for (var b, c = 0, d = a.length; c < d; ++c) {
				b = a[c], this.Za(b.element, b.name)
			}
		},
		Eb: function (a, b, c) {
			a = e.Function.getElement(a);
			"keypress" == b && (e.Browser.isSupportKeypress() || a.attachEvent) && (b = "keydown");
			a.ga || (a.ga = "eventCacheID_" + e.Function.createUniqueID());
			var d = a.ga;
			this.P[d] || (this.P[d] = []);
			this.P[d].push({
				element: a,
				type: b,
				observer: c
			});
			a.addEventListener ? a.addEventListener(b, c, !1) : a.attachEvent && a.attachEvent("on" + b, c)
		},
		Za: function (a, b) {
			var c = a.ga,
				d = this.P[c],
				e = !1;
			if (d) {
				for (var g, h = 0, k = d.length; h < k; ++h) {
					if (g = d[h], g.type == b) {
						d.splice(h, 1);
						0 == d.length && (this.P[c] = null);
						e = !0;
						break
					}
				}
			}
			e && (a.removeEventListener ? a.removeEventListener(b, g.observer, !1) : a.detachEvent && a.detachEvent("on" + b, g.observer))
		},
		M: function (a, b, c) {
			return function (d) {
				d.stop = c || ("boolean" == typeof b.stop ? b.stop : !1);
				return a.call(b, d || window.event)
			}
		},
		$a: function (a) {
			a = e.Function.getElement(a);
			this.Jb(this.P[a.ga])
		},
		Jb: function (a) {
			if (a) {
				for (var b = a.length - 1; 0 <= b; b--) {
					var c = a[b];
					this.Za.apply(this, [c.element, c.type])
				}
			}
		}
	});
	e.Loader = e.Class(e.DOMEvents, e.Events, {
		initialize: function () {
			this.eb = window;
			this._charset = "utf-8";
			this._name = "_OLR";
			this._url = null;
			e.DOMEvents.prototype.initialize.apply(this, []);
			e.Events.prototype.initialize.apply(this, [])
		},
		load: function (a) {
			var b = this;
			e.Function.applyDefaults(b, a, "_");
			var c = b.eb;
			b._alias = a.alias || null;
			b._name = a.name ? a.name + (a.nameCode || "") : b._name;
			c[b._name] = b._name;
			var d = b.xb();
			e.Browser.isIE() ? d.onreadystatechange = function () {
				"loaded" != this.readyState && "complete" != this.readyState || b.La(this, b._alias)
			} : d.onload = function () {
				b.La(this, b._alias)
			};
			d.onerror = function () {
				b.triggerEvent("error", b._alias);
				b.running = !1
			};
			c.document.body.insertBefore(d, c.document.body.firstChild);
			setTimeout(function () {
				try {
					c[a.url + "done"] ? (c.document.body.removeChild(d), c[a.url + "done"] = null) : d = null
				} catch (b) {
					d = null, c[a.url + "done"] = null
				}
			}, 5000);
			b.running = !0
		},
		La: function (a, b) {
			var c = this.eb;
			a && (c[a.src + "done"] = !0, c[this._name] ? (b && (c[this._name].alias = b), this.triggerEvent("loaded", c[this._name]), c[this._name] = null) : this.triggerEvent("error", b), a && a.parentNode == c.document.body && a.removeAttribute("src"));
			this.running = !1
		},
		register: function (a, b, c, d) {
			if (b && "function" === typeof b) {
				var e = this.w[a];
				e || (e = []);
				b = {
					obj: c || this,
					func: b,
					type: a,
					stop: d
				};
				e.push(b);
				this.w[a] = e;
				return b
			}
		},
		triggerEvent: function (a, b) {
			var c = this.w[a];
			if (c && 0 != c.length) {
				b || (b = {});
				for (var c = c.slice(), d, f = 0, g = c.length; f < g; ++f) {
					d = c[f], b.stop = d.stop, d.func.apply(d.obj, [b])
				}
				e.Event.stop(b, !0)
			}
		},
		clearListener: function () {
			this.w = {}
		},
		xb: function () {
			var a = document.createElement("script");
			a.setAttribute("type", "text/javascript");
			a.setAttribute("src", this._url);
			a.setAttribute("charset", this._charset);
			a.alias = this._alias;
			return a
		}
	});
	e.LoaderManager = {
		ub: [],
		getEntity: function () {
			for (var a = this.ub, b, c = 0, d = a.length; c < d; ++c) {
				if (!1 == a[c].running) {
					b = a[c];
					b.clearListener();
					break
				}
			}
			b || (b = new e.Loader, a.push(b));
			return b
		}
	};
	e.LngLat = e.Class({
		lng: -1,
		lat: -1,
		initialize: function (a, b) {
			isNaN(a) || isNaN(b) || (this.lng = Number(Number(a).toFixed(10)), this.lat = Number(Number(b).toFixed(10)))
		},
		clone: function () {
			return new e.LngLat(this.lng, this.lat)
		},
		setLng: function (a) {
			isNaN(a) || (this.lng = a)
		},
		setLat: function (a) {
			isNaN(a) || (this.lat = a)
		},
		getLng: s("lng"),
		getLat: s("lat"),
		transform: function (a, b, c) {
			if (a != b) {
				a = proj4(Proj4js.defs[a], Proj4js.defs[b], [this.lng, this.lat]);
				a[0] = Number(Number(a[0]).toFixed(6));
				a[1] = Number(Number(a[1]).toFixed(6));
				if (c) {
					return c = this.clone(), c.lng = a[0], c.lat = a[1], c
				}
				this.lng = a[0];
				this.lat = a[1]
			}
		},
		equals: function (a) {
			return "object" != typeof a || isNaN(a.lng) || isNaN(a.lat) ? !1 : a.lng == this.lng && a.lat == this.lat
		},
		toString: function (a) {
			return this.lng + (a || ",") + this.lat
		},
		isNull: function () {
			return !((this.lng && !isNaN(this.lng) || -1 == this.lng) && (this.lat && !isNaN(this.lat) || -1 == this.lat))
		},
		offset: function (a, b) {
			return isNaN(a) || isNaN(b) ? !1 : new e.LngLat(this.lng + 360 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.lat * Math.PI / 180)) / Math.PI, this.lat + 360 * Math.asin(Math.round(b) / 12756274) / Math.PI)
		}
	});
	e.Pixel = e.Class({
		x: 0,
		y: 0,
		initialize: function (a, b) {
			isNaN(a) || isNaN(b) || (this.x = Number(a), this.y = Number(b))
		},
		clone: function () {
			return new e.Pixel(this.x, this.y)
		},
		setX: function (a) {
			isNaN(a) || (this.x = a)
		},
		getX: s("x"),
		setY: function (a) {
			isNaN(a) || (this.y = a)
		},
		getY: s("y"),
		appendX: function (a) {
			this.x += a
		},
		appendY: function (a) {
			this.y += a
		},
		equals: function (a) {
			return "object" != typeof a || isNaN(a.x) || isNaN(a.y) ? !1 : a.x == this.x && a.y == this.y
		},
		isNull: function () {
			return !((this.x && !isNaN(this.x) || 0 == this.x) && (this.y && !isNaN(this.y) || 0 == this.y))
		},
		toString: function (a) {
			return this.x + (a || ",") + this.y
		}
	});
	e.LngLatBounds = e.Class({
		southwest: null,
		northeast: null,
		initialize: function (a, b) {
			if (a instanceof e.LngLat || -1 == a.lng && -1 == a.lat && b instanceof e.LngLat || -1 == b.lng && -1 == b.lat) {
				this.southwest = a, this.northeast = b
			}
		},
		equals: function (a) {
			return "object" != typeof a || "object" != typeof a.southwest || "object" != typeof a.northeast || isNaN(a.southwest.lng) || isNaN(a.southwest.lat) || isNaN(a.northeast.lng) || isNaN(a.northeast.lat) ? !1 : a.southwest.lng == this.southwest.lng && a.southwest.lat == this.southwest.lat && a.northeast.lng == this.northeast.lng && a.northeast.lat == this.northeast.lat
		},
		containsLngLat: function (a) {
			if ("object" != typeof a || isNaN(a.lng) || isNaN(a.lat)) {
				return !1
			}
			var b = this.southwest,
				c = this.northeast;
			return a.lat >= b.lat && a.lat <= c.lat && a.lng >= b.lng && a.lng <= c.lng
		},
		containsBounds: function (a) {
			if (!(a instanceof e.LngLatBounds)) {
				return !1
			}
			var b = a.southwest;
			a = a.northeast;
			var c = this.southwest,
				d = this.northeast;
			return b.lat >= c.lat && a.lat <= d.lat && b.lng >= c.lng && a.lng <= d.lng
		},
		intersects: function (a) {
			var b = Math.min(a.northeast.lng, this.northeast.lng),
				c = Math.min(a.northeast.lat, this.northeast.lat),
				d = Math.max(a.southwest.lng, this.southwest.lng);
			a = Math.max(a.southwest.lat, this.southwest.lat);
			return b >= d && c >= a ? new e.LngLatBounds(new e.LngLat(d, a), new e.LngLat(b, a)) : null
		},
		getIntersection: function (a, b) {
			var c = [],
				d = this.northeast,
				f = this.southwest;
			if (a.lat == b.lat) {
				if (a.lng == b.lng) {
					return c
				}
				if (a.lat >= f.lat && a.lat < d.lat) {
					var g = a.lng <= f.lng ? -1 : a.lng >= d.lng ? 1 : 0,
						h = b.lng <= f.lng ? -1 : b.lng >= d.lng ? 1 : 0;
					if (g == h) {
						return c
					}
					0 >= g + h && c.push(new e.LngLat(f.lng, a.lat));
					0 <= g + h && c.push(new e.LngLat(d.lng, a.lat))
				}
				return c
			}
			if (a.lng == b.lng) {
				if (a.lng >= f.lng && a.lng < d.lng) {
					g = a.lat <= f.lat ? -1 : a.lat >= d.lat ? 1 : 0;
					h = b.lat <= f.lat ? -1 : b.lat >= d.lat ? 1 : 0;
					if (g == h) {
						return c
					}
					0 >= g + h && c.push(new e.LngLat(a.lng, f.lat));
					0 <= g + h && c.push(new e.LngLat(a.lng, d.lat))
				}
				return c
			}
			g = (b.lat - a.lat) * (f.lng - a.lng) / (b.lng - a.lng) + a.lat;
			g >= f.lat && g < d.lat && 0 >= (g - a.lat) * (g - b.lat) && c.push(new e.LngLat(f.lng, g));
			g = (b.lat - a.lat) * (d.lng - a.lng) / (b.lng - a.lng) + a.lat;
			g >= f.lat && g < d.lat && 0 >= (g - a.lat) * (g - b.lat) && c.push(new e.LngLat(d.lng, g));
			g = (b.lng - a.lng) * (d.lat - a.lat) / (b.lat - a.lat) + a.lng;
			g >= f.lng && g < d.lng && 0 >= (g - a.lng) * (g - b.lng) && c.push(new e.LngLat(g, d.lat));
			g = (b.lng - a.lng) * (f.lat - a.lat) / (b.lat - a.lat) + a.lng;
			g >= f.lng && g < d.lng && 0 >= (g - a.lng) * (g - b.lng) && c.push(new e.LngLat(g, f.lat));
			2 == c.length && c[0].lng == c[1].lng && c.pop();
			return c
		},
		extend: function (a) {
			var b = this.southwest,
				c = this.northeast,
				d;
			if (a instanceof e.LngLat) {
				d = a
			} else {
				if (a instanceof e.LngLatBounds) {
					if (d = a.southwest, a = a.northeast, !d || !a) {
						return this
					}
				} else {
					return this
				}
			}
			b || c ? (b.lat = Math.min(d.lat, b.lat), b.lng = Math.min(d.lng, b.lng), c.lat = Math.max(a.lat, c.lat), c.lng = Math.max(a.lng, c.lng)) : (this.southwest = new e.LngLat(d.lng, d.lat), this.northeast = new e.LngLat(a.lng, a.lat));
			return this
		},
		getCenter: function () {
			return new e.LngLat((this.southwest.lng + this.northeast.lng) / 2, (this.northeast.lat + this.southwest.lat) / 2)
		},
		setSouthWest: q("southwest"),
		getSouthWest: s("southwest"),
		setNorthEast: q("northeast"),
		getNorthEast: s("northeast"),
		getWidth: function () {
			return this.northeast.lng - this.southwest.lng
		},
		getHeight: function () {
			return this.northeast.lat - this.southwest.lat
		},
		clone: function () {
			return new e.LngLatBounds(this.southwest, this.northeast)
		}
	});
	e.Size = e.Class({
		width: 0,
		height: 0,
		initialize: function (a, b) {
			isNaN(a) && (a = 0);
			isNaN(b) && (b = 0);
			this.width = Number(a);
			this.height = Number(b)
		},
		getWidth: s("width"),
		getHeight: s("height"),
		equals: function (a) {
			return "object" != typeof a || isNaN(a.width) || isNaN(a.height) ? !1 : a.width == this.width && a.height == this.height
		},
		toString: function (a) {
			return this.width + (a || ",") + this.height
		}
	});
	e.Layer = e.Class({
		initialize: function (a) {
			this.Va = "";
			this.Wa = 1;
			this.bb = !0;
			this.aa = "ldlayer_" + e.Function.createUniqueID();
			this._options = a = a || {}
		},
		getElement: s("B"),
		getOptions: s("_options"),
		setZIndex: function (a) {
			isNaN(a) || (this.Ga = a, this.B.style.zIndex = this.Ga)
		},
		getZIndex: s("Ga"),
		getId: s("aa"),
		setName: q("Va"),
		getName: s("Va"),
		destroy: l(),
		getMap: s("a"),
		setOpacity: function (a) {
			if (!isNaN(a)) {
				this.Wa = a;
				for (var b = 0, c = this.B.childNodes.length; b < c; b++) {
					e.Browser.isIE7() || e.Browser.isIE8() ? this.B.childNodes[b].style.filter = "progid:DXImageTransform.Microsoft.Alpha(opacity=" + 100 * a + ")" : this.B.childNodes[b].style.opacity = a
				}
			}
		},
		getOpacity: s("Wa"),
		visible: function (a) {
			this.bb = a;
			this.B && (this.B.style.display = a ? "block" : "none")
		},
		getVisible: s("bb"),
		getType: s("ua"),
		isLayerSwitcher: function () {
			return this._options.isLayerSwitcher
		},
		getTiles: s("hc")
	});
	e.LayerOptions = e.Class({
		hotspotOptions: null,
		maxZoom: null,
		minZoom: null,
		baseUrl: null,
		tileSize: null
	});
	e.OverlayOptions = e.Class({
		initialize: function () {
			this.visible = this.anchor = this.position = this.title = this.offset = null
		}
	});
	e.InfoWindowOptions = e.Class(e.OverlayOptions, {
		initialize: function () {
			this.autoPan = this.type = null;
			e.OverlayOptions.prototype.initialize.apply(this)
		}
	});
	e.LabelOptions = e.Class(e.OverlayOptions, {
		initialize: function () {
			this.zIndex = this.fontBold = this.fontSize = this.fontColor = this.fontName = this.type = null;
			e.OverlayOptions.prototype.initialize.apply(this)
		}
	});
	e.MarkerOptions = e.Class(e.OverlayOptions, {
		initialize: function () {
			this.angleOffsetX = this.raiseOnDrag = this.zIndex = this.pointAlpha = this.pointLineWdith = this.pointFillColor = this.pointStrokeColor = this.pointType = this.icon = null;
			e.OverlayOptions.prototype.initialize.apply(this)
		}
	});
	e.IconOptions = e.Class({
		initialize: function () {
			this.backgroundSize = this.offset = this.size = null
		}
	});
	e.PointCollectionOptions = e.Class({
		initialize: function () {
			this.opacity = this.fillColor = this.strokeWeight = this.strokeColor = this.shape = this.size = null
		}
	});
	e.Overlay = e.Class({
		initialize: function () {
			this.aa = "_ld_overlay_" + e.Function.createUniqueID()
		},
		F: l(),
		getMap: s("a"),
		getElement: s("h"),
		getOffset: function () {
			return this.b.offset
		},
		getAnchor: function () {
			return this.b.anchor
		},
		visible: function (a) {
			if (this.a) {
				var b = this.getElement();
				b && (b.style.visibility = a ? "inherit" : "hidden")
			}
			this.b.visible = a
		},
		getId: s("aa"),
		addEventListener: function (a, b, c, d) {
			b = this.M(b, c || this, d, this);
			this.f.on(a, b, this);
			return {
				type: a,
				obj: c || this,
				func: b,
				stop: d
			}
		},
		M: function (a, b, c, d) {
			return function (f) {
				var g = f.latlng ? new e.LngLat(f.latlng.lng, f.latlng.lat) : null;
				return a.call(b, {
					stop: c || b.stop,
					type: f.type,
					target: d,
					lnglat: g
				})
			}
		},
		removeEventListener: function (a) {
			this.f.off(a.type, a.func, a.obj)
		},
		setPosition: function (a) {
			a instanceof e.LngLat && (this.b.position = a, this.f.setLatLng([a.lat, a.lng]))
		},
		getPosition: function () {
			return this.b.position
		},
		q: l(),
		_draw: l(),
		T: function () {
			this.ca();
			this.a = null;
			this.Ca = !1
		},
		getAttribute: s("b"),
		_reqOvarlayAsyn: l(),
		fc: l(),
		Y: function (a, b) {
			return L.point(b.width * a[0], b.height * a[1])
		},
		G: function () {
			this.h = this.f.getElement()
		}
	});
	e.Icon = e.Class({
		initialize: function (a, b, c, d) {
			this.ta = a || "../../point_1.png";
			b = b || {};
			c || b.width ? (this.da = b || new e.Size(32, 32), this.ba = c || {
				x: 0,
				y: 1
			}, this.ea = d || null) : (this.da = b.size || new e.Size(32, 32), this.ba = b.offset || {
				x: 0,
				y: 1
			}, this.ea = b.backgroundSize || null);
			this.V = null
		},
		getElement: function () {
			var a = e.Function.createElement({
				name: "img",
				cssText: "position:absolute;left: " + this.ba.x + "px; top: " + this.ba.y + "px;z-index:-1;cursor:pointer;"
			});
			a.src = this.ta;
			return this.V = a
		},
		getSize: s("da"),
		getSrc: s("ta"),
		setSrc: function (a) {
			this.ta = a;
			this.V && (this.V.src = a)
		},
		setOffset: function (a) {
			this.ba = a;
			this.V && (this.V.style.left = a.x + "px", this.V.style.top = a.y + "px")
		},
		getOffset: s("ba"),
		setSize: function (a) {
			this.da = a || this.da
		},
		setBackgroundSize: function (a) {
			this.ea = a || this.ea
		},
		getBackgroundSize: s("ea")
	});
	e.InfoWindow = e.Class(e.Overlay, {
		initialize: function (a, b) {
			b = b || {};
			var c = {
				offset: b.offset || new e.Pixel(0, 7),
				autoPan: b.autoPan || !1,
				position: b.position || null,
				anchor: b.anchor || e.Constants.BOTTOM_CENTER,
				visible: "boolean" == typeof b.visible ? b.visible : !0,
				type: b.type || e.Constants.OVERLAY_INFOWINDOW_DEFAULT
			};
			if (b.size instanceof e.Size) {
				var d = Math.min(Math.max(b.size.width, 50), 600),
					f = Math.min(Math.max(b.size.height, 50), 600),
					d = new e.Size(d, f)
			} else {
				d = c.type == e.Constants.OVERLAY_INFOWINDOW_DEFAULT ? new e.Size(300, 200) : new e.Size(0, 0)
			}
			c.size = d;
			c.title = b.title || "";
			this.b = c;
			this.u = a || "";
			e.Overlay.prototype.initialize.apply(this, []);
			c = this.b.offset;
			b = {
				autoPan: this.b.autoPan,
				keepInView: !1,
				closeOnClick: !1,
				offset: [c.x, c.y],
				zoomAnimation: !0,
				title: this.b.title,
				width: this.b.size.width,
				height: this.b.size.height,
				type: this.b.type,
				title: this.b.title,
				anchor: this.b.anchor
			};
			this.f = L.popup(b).setContent(this.u)
		},
		setTitle: function (a) {
			this.b.title = a;
			this.f.setTitle(a)
		},
		getTitle: function () {
			return this.b.title
		},
		setContent: function (a) {
			this.u = a;
			this.f.setContent(a)
		},
		getContent: s("u"),
		setSize: function (a) {
			if (a instanceof e.Size) {
				var b = Math.min(Math.max(a.width, 50), 600),
					c = Math.min(Math.max(a.height, 50), 600);
				a = new e.Size(b, c);
				this.b.size = a;
				this.f.setSize(b, c);
				this.setAnchor(this.b.anchor);
				this.f.setContent(this.u)
			}
		},
		setAnchor: function (a) {
			if (a) {
				this.b.anchor = a;
				var b = this.b.position;
				this.f.options.anchor = a;
				this.f.setLatLng([b.lat, b.lng])
			}
		},
		setOffset: function (a) {
			if (a instanceof e.Pixel) {
				this.b.offset = a;
				var b = this.b.position;
				this.f.options.offset = [a.x, a.y];
				this.f.setLatLng([b.lat, b.lng])
			}
		},
		autoPan: function (a, b) {
			a = a || !1;
			this.b.autoPan = a;
			this.f.options.autoPan = a;
			this.f.update(b)
		},
		setType: function (a) {
			a && (this.b.type = a, this.f.options.type = a)
		},
		F: function (a) {
			a instanceof e.Map ? (this.a = a, this.I = a.getOverlayLayer(), this.f._source = this.a.mapObj, this.a.mapObj.openPopup(this.f, this.b.position), this.G(), this.setAnchor(this.b.anchor)) : (this.T(), this.a = this.I = null)
		},
		ca: function () {
			this.f && this.a && this.a.mapObj.removeLayer(this.f, !1, !0)
		}
	});
	e.Marker = e.Class(e.Overlay, {
		initialize: function (a, b) {
			b = b || {};
			var c = {
				editabled: b.editabled || !1,
				anchor: b.anchor || e.Constants.BOTTOM_CENTER,
				icon: b.icon || null,
				offset: b.offset || new e.Pixel(0, 0),
				visible: "boolean" == typeof b.visible ? b.visible : !0,
				title: b.title ? e.Function.checkFieldLength(b.title, 50) : "",
				markerColor: b.markerColor || "#ff0000",
				shadow: b.shadow || !1,
				pointType: b.pointType || 1,
				pointWidth: b.pointWidth || 0,
				pointHeight: b.pointHeight || 0,
				pointStrokeColor: b.pointStrokeColor || "#4169D3",
				pointFillColor: b.pointFillColor || "#4169D3",
				pointLineWidth: b.pointLineWidth || "1",
				pointAlpha: b.pointAlpha || 1,
				raiseOnDrag: b.raiseOnDrag || !1,
				angleOffsetX: "number" == typeof b.angleOffsetX ? b.angleOffsetX : null
			};
			c.position = a;
			this.s = null;
			this.D = {};
			this.zIndex = isNaN(b.zIndex) || null == b.zIndex ? 2 : b.zIndex;
			this.b = c;
			this.da = c.icon ? c.icon.getSize() : new e.Size(21, 34);
			e.Overlay.prototype.initialize.apply(this, []);
			this.K = null;
			this.sizingMethod = 'SizingMethod="auto expand"';
			var d = c.position,
				f = c.icon;
			switch (parseInt(c.pointType)) {
				case 1:
					c.pointWidth = 0 == parseInt(c.pointWidth) ? 23 : c.pointWidth;
					c.pointHeight = 0 == parseInt(c.pointHeight) ? 36 : c.pointHeight;
					break;
				case 2:
				case 3:
					c.pointWidth = 0 == parseInt(c.pointWidth) ? 22 : c.pointWidth, c.pointHeight = 0 == parseInt(c.pointHeight) ? 22 : c.pointHeight
			}
			var g = this.Y(c.anchor, f ? f.getSize() : {
				width: c.pointWidth,
				height: c.pointHeight
			});
			if (f) {
				var h = f.getOffset(),
					k = f.getSize(),
					f = f.getSrc(),
					g = new L.Icon({
						iconUrl: f,
						iconSize: [k.width, k.height],
						iconPosition: [h.x, h.y],
						anchor: g,
						iconVisibility: c.visible,
						offset: [c.offset.x, c.offset.y],
						popupAnchor: [0, -k.height]
					})
			} else {
				g = L.VectorIcon.icon({
					icon: "",
					iconSize: [c.pointWidth, c.pointHeight],
					prefix: "fa",
					markerColor: c.pointFillColor,
					strokewidth: c.pointLineWidth,
					strokecolor: c.pointStrokeColor,
					alpha: c.pointAlpha,
					iconVisibility: c.visible,
					offset: [c.offset.x, c.offset.y],
					anchor: g,
					spin: !0,
					type: c.pointType
				})
			}
			c = {
				icon: g,
				draggable: c.editabled,
				title: this.getTitle(),
				riseOffset: 222,
				raiseOnDrag: c.raiseOnDrag,
				angleOffsetX: c.angleOffsetX,
				raiseUrl: e.MapConfig.API_REALM_NAME + e.MapConfig._MAP_CLOSE1_URL,
				zIndexOffset: this.zIndex
			};
			this.f = new L.Marker([d.lat, d.lng], c)
		},
		getPosition: function () {
			var a = this.f.getLatLng();
			return new e.LngLat(a.lng, a.lat)
		},
		editable: function (a) {
			this.b.editabled = a;
			this.f.options.draggable = a;
			this.f.dragging && (a ? this.f.dragging.enable() : this.f.dragging.disable())
		},
		moveTo: function (a, b, c) {
			var d = this,
				f = d.a,
				g = 0,
				h = d.b.position,
				k = a.lng - h.lng,
				m = a.lat - h.lat,
				p = Math.round(3.6 * e.Function.distanceByLngLat(a, h) / b),
				n = new L.LatLng(a.lat, a.lng),
				r = this.f._map.latLngToContainerPoint(n),
				t = this.f._map.containerPointToLayerPoint(r);
			if (0 == p) {
				d.b.position = a, d.setPosition(d.b.position), d.f.update(), d.f.fire("moveend", {
					latlng: n,
					containerPoint: r,
					layerPoint: t
				})
			} else {
				var u = (new e.Tween).Linear;
				d.s && e.Function.clearInterval(d.s);
				d.s = e.Function.createInterval(function () {
					g++;
					d.b.position = new e.LngLat(u(g, h.lng, k, p), u(g, h.lat, m, p));
					d.setPosition(d.b.position);
					d.f.update();
					g >= p && (d.b.position = a, d.setPosition(d.b.position), d.f.update(), e.Function.clearInterval(d.s), d.s = null, d.f.fire("moveend", {
						latlng: n,
						containerPoint: r,
						layerPoint: t
					}))
				}, 40)
			}
			c && d.rotate(e.Function.getRotation(f.lnglatToPixel(h), f.lnglatToPixel(a)));
			return p
		},
		moveAlong: function (a, b, c, d) {
			var f = this,
				g = f.a,
				h = 1;
			f.D[0] ? f.D[1] ? (h = f.D[0], f.b.position = f.D[1], f.setPosition(f.b.position)) : (f.b.position = a[0], f.setPosition(f.b.position), f.D[0] = h) : (f.setPosition(a[0]), f.D[0] = h);
			f.L && (f.removeEventListener(f.L), f.L = null);
			f.L = f.addEventListener(e.Constants.MOVE_END, function () {
				h++;
				h < a.length ? (f.moveTo(a[h], b, d), f.D[0] = h) : c ? (h = 1, f.D[0] = h, f.setPosition(a[0]), f.moveTo(a[h], b, d)) : (f.removeEventListener(f.L), f.L = null, f.removeEventListener(f.Ha), f.Ha = null)
			}, f);
			f.Ha && (f.Ha = g.addEventListener(e.Constants.ZOOM_END, function () {
				f.s && e.Function.clearInterval(f.s);
				1 < h ? f.setPosition(a[h - 1]) : f.setPosition(a[0]);
				h < a.length && f.moveTo(a[h], b, d)
			}));
			a[h] && f.moveTo(a[h], b, d)
		},
		pauseMove: function () {
			this.s && (e.Function.clearInterval(this.s), this.s = null);
			this.D[1] = this.getPosition()
		},
		stopMove: function () {
			this.s && (e.Function.clearInterval(this.s), this.s = null);
			this.D[0] = 0
		},
		setAngleOffsetX: function (a) {
			a instanceof e.Pixel && (this.b.angleOffsetX = a)
		},
		getAngleOffsetX: function () {
			return this.b.angleOffsetX
		},
		setRaiseOnDrag: function (a) {
			this.b.raiseOnDrag = a
		},
		setAnchor: function (a) {
			a && (this.b.anchor = a, this.q())
		},
		setOffset: function (a) {
			a instanceof e.Pixel && (this.b.offset = a, this.q())
		},
		setTitle: function (a) {
			a = a ? e.Function.checkFieldLength(a, 50) : "";
			this.h.title = a;
			this.b.title = a;
			this.f.options.title = a;
			this.f.setIcon(this.f.getIcon())
		},
		getTitle: function () {
			return this.b.title
		},
		setZIndex: function (a) {
			this.zIndex = a || 2;
			this.f.setZIndexOffset(this.zIndex)
		},
		getZIndex: s("zIndex"),
		setIcon: function (a) {
			if (a instanceof e.Icon) {
				this.b.icon = a;
				this._size = a.getSize();
				var b = a.getSize(),
					c = a.getOffset(),
					d = a.getSrc(),
					f = this.getAnchor();
				a = this.Y(f, a ? b : {
					width: 35,
					height: 30
				});
				f = this.f.options.icon;
				b = new L.Icon({
					iconUrl: d,
					iconSize: [b.width, b.height],
					iconPosition: [c.x, c.y],
					anchor: a,
					iconVisibility: f.options.iconVisibility,
					offset: f.options.offset
				});
				this.f = this.f.setIcon(b);
				this.G()
			}
		},
		getIcon: function () {
			return this.b.icon
		},
		setLabel: function (a, b) {
			var c = b || {},
				d = c.anchor || e.Constants.LEFT_TOP,
				f = c.offset || {
					x: 0,
					y: 0
				},
				g = c.fontColor || "#000000",
				h = c.fontSize || 12,
				k = c.fontBold || !1,
				m = "boolean" == typeof c.visible ? c.visible : !0,
				c = this.f.getLatLng(),
				g = {
					noHide: m,
					fontName: "宋体",
					fontColor: g,
					fontSize: h,
					fontBold: k,
					anchor: d,
					offset: f,
					position: c
				};
			this.removeLabel();
			this.W = new e.Label(a, g);
			this.W.a = this.a;
			g = this.f.bindLabel(this.W.f, g).label;
			this.a.mapObj.addLayer(g);
			h = g.getLabelSize();
			h = new e.Size(h[0], h[1]);
			d = this.Y(d, h);
			g.options.anchor = d;
			g.options.offset = [f.x, f.y];
			g.setLatLng([c.lat, c.lng])
		},
		getInfoWindow: s("K"),
		getLabel: s("W"),
		removeLabel: function () {
			this.W && (this.I.removeOverlay(this.W), this.W = null)
		},
		openInfoWindow: function (a, b) {
			this.K || (b.position = this.b.position, this.K = new e.InfoWindow(a, b), this.K.a = this.a, this.f.bindPopup(this.K.f).getPopup().options.anchor = e.Constants.BOTTOM_CENTER);
			var c = this.f.getLatLng();
			this.f.openPopup(this.f, c)
		},
		closeInfoWindow: function () {
			this.K && (this.I.removeOverlay(this.K), this.K = null)
		},
		rotate: function (a) {
			if (!isNaN(a)) {
				this.angle = a;
				this.f.options.rotate = a || 0;
				var b = this.h;
				if (b) {
					if (e.Function.transform()) {
						var c = this.a.mapObj.latLngToLayerPoint(this.f.getLatLng()).round();
						L.DomUtil.setPosition(b, c, a);
						b.rotate = a
					} else {
						e.Browser.isIE() && (c = Math.cos(a * Math.PI / 180), a = Math.sin(a * Math.PI / 180), b.style.filter = "progid:DXImageTransform.Microsoft.Matrix(" + this.sizingMethod + ",M11=" + c + ",M12=" + -a + ",M21=" + a + ",M22=" + c + ")")
					}
				}
			}
		},
		F: function (a) {
			a instanceof e.Map ? (this.a = a, this.I = a.getOverlayLayer(), a.mapObj.addLayer(this.f), this.G()) : (this.T(), this.a = this.I = null)
		},
		ca: function () {
			this.removeLabel();
			this.closeInfoWindow();
			this.f && this.a && this.a.mapObj.removeLayer(this.f);
			this.L && (this.removeEventListener(this.L), this.L = null)
		},
		q: function () {
			var a = this.f.getIcon(),
				b = this.b.icon ? this.b.icon.getSize() : {
					width: 30,
					height: 50
				},
				b = this.Y(this.b.anchor, b);
			a.options.anchor = b;
			a.options.offset = [this.b.offset.x, this.b.offset.y];
			a.updateIcon(this.h, "icon")
		}
	});
	e.Label = e.Class(e.Overlay, {
		initialize: function (a, b) {
			b = b || {};
			this.b = {
				type: b.type || e.Constants.OVERLAY_LABEL_DEFAULT,
				anchor: b.anchor || e.Constants.BOTTOM_CENTER,
				offset: b.offset || new e.Pixel(0, 0),
				visible: "boolean" == typeof b.visible ? b.visible : !0,
				position: b.position || null,
				fontName: b.fontName || "宋体",
				fontColor: b.fontColor || "#000000",
				fontSize: b.fontSize || 12,
				fontBold: b.fontBold || !1
			};
			this.Ua = new e.Size(0, 0);
			this.zIndex = b.zIndex || 2;
			this.u = a || "";
			e.Overlay.prototype.initialize.apply(this);
			var c = this.b.position,
				d = this.b.offset;
			this.f = (new L.Label({
				noHide: !1,
				offset: [d.x, d.y],
				title: this.b.title,
				fontColor: this.b.fontColor,
				fontName: this.b.fontName,
				fontSize: this.b.fontSize,
				fontBold: this.b.fontBold,
				type: this.b.type
			}, this)).setContent(this.u).setLatLng([c.lat, c.lng])
		},
		setContent: function (a) {
			this.u = a || this.u;
			this.q()
		},
		getContent: s("u"),
		setFontColor: function (a) {
			this.b.fontColor = a;
			this.q()
		},
		getFontColor: function () {
			return this.b.fontColor
		},
		setFontName: function (a) {
			this.b.fontName = a;
			this.q()
		},
		getFontName: function () {
			return this.b.fontName
		},
		setFontSize: function (a) {
			isNaN(a) || (this.b.fontSize = a, this.q())
		},
		getFontSize: function () {
			return this.b.fontSize
		},
		setFontBold: function (a) {
			this.b.fontBold = a;
			this.q()
		},
		getFontBold: function () {
			return this.b.fontBold
		},
		setAnchor: function (a) {
			if (a) {
				this.b.anchor = a;
				var b = this.f,
					c = this.b.position;
				a = this.Y(a, this.Ua);
				b.options.anchor = a;
				b.setLatLng([c.lat, c.lng])
			}
		},
		setOffset: function (a) {
			if (a instanceof e.Pixel) {
				this.b.offset = a;
				var b = this.f,
					c = this.b.position;
				b.options.offset = [a.x, a.y];
				b.setLatLng([c.lat, c.lng])
			}
		},
		setZIndex: function (a) {
			this.zIndex = a;
			this.h.style.zIndex = a
		},
		getZIndex: s("zIndex"),
		setType: function (a) {
			this.b.type = this.f.options.type = a;
			this.setContent()
		},
		getType: function () {
			return this.b.type
		},
		F: function (a) {
			a instanceof e.Map ? (this.a = a, this.I = a.getOverlayLayer(), a.mapObj.addLayer(this.f), this.G(), a = this.f.getLabelSize(), this.Ua = new e.Size(a[0], a[1]), this.setAnchor(this.b.anchor)) : (this.T(), this.a = this.I = null)
		},
		ca: function () {
			this.f && this.a && this.a.mapObj.removeLayer(this.f)
		},
		q: function () {
			var a = this.b,
				b = this.f.getOptions();
			b.fontColor = a.fontColor;
			b.fontSize = a.fontSize;
			b.fontBold = a.fontBold;
			b.fontName = a.fontName;
			this.f.setContent(this.u)
		}
	});
	e.PointCollection = e.Class({
		va: !1,
		Aa: !1,
		ya: !1,
		za: !1,
		wa: !1,
		xa: !1,
		initialize: function (a, b) {
			var c = b || {};
			this._options = {
				size: "number" == typeof c.size ? c.size : e.Constants.POINT_SIZE_SMALL,
				shape: "number" == typeof c.shape ? c.shape : e.Constants.POINT_SHAPE_PONT,
				strokeColor: "string" == typeof c.strokeColor ? c.strokeColor : "#4169D3",
				fillColor: "string" == typeof c.fillColor ? c.fillColor : "#4169D3",
				alpha: "number" == typeof c.alpha ? c.alpha : 1,
				visible: "boolean" == typeof c.visible ? c.visible : !0,
				strokeWeight: isNaN(c.strokeWeight) ? 3 : 1 > c.strokeWeight ? 1 : 8 < c.strokeWeight ? 8 : c.strokeWeight,
				icon: c.icon instanceof e.Icon ? c.icon : null
			};
			this.id = "_ld_overlay_" + e.Function.createUniqueID();
			this.qa = a instanceof Array ? a : [];
			this.S = null;
			this.g = [];
			this.fb = this.gb = 0
		},
		rb: function () {
			this.pa()
		},
		pa: function () {
			var a = this.a;
			if (!this.h && a) {
				var b = e.Function.createElement({
					name: "div",
					cssText: "position:relative;left:0px;top:0px;border:0px;z-index:1000;width:0px;height:0px;"
				});
				this.h = b;
				var c = e.Function.createElement({
					id: this.id,
					name: "canvas",
					cssText: "background-color:rgba(0,0,0,0.0);display: block;position: absolute;top:0;left:0;"
				});
				this.nb = c.getContext("2d");
				this.na = c;
				b.appendChild(c);
				e.Function.isInDocument(b) || a.getOverlayLayer().getElement().appendChild(b);
				this.mb(a);
				this.q()
			}
		},
		mb: function (a) {
			function b() {
				c.q()
			}
			var c = this,
				d = c.na;
			c.ya = a.addEventListener(e.Constants.MOVE_END, b);
			c.va = a.addEventListener(e.Constants.DRAG_END, b);
			c.Aa = a.addEventListener(e.Constants.ZOOM_START, function () {
				d.style.display = "none"
			});
			c.za = a.addEventListener(e.Constants.ZOOM_END, function () {
				b();
				d.style.display = "block"
			});
			d.addEventListener(e.Constants.MOUSE_MOVE, function (a) {
				var b = c._options;
				a = c.Vb(this, a.clientX, a.clientY);
				for (var d = c.Gb, b = b.size + 5, k = 0; k < d.length; k++) {
					if (d[k].x + b > a.x && d[k].x - b < a.x && d[k].y + b > a.y && d[k].y - b < a.y) {
						this.style.cursor = "pointer";
						c.S = k;
						break
					}
					k + 1 == d.length && (this.style.cursor = "url(" + (e.MapConfig.API_REALM_NAME + e.MapConfig._MAP_HAND[0]) + "), auto", c.S = null)
				}
			});
			c.wa = a.addEventListener(e.Constants.MOUSE_DOWN, function (a) {
				"object" !== typeof c.S && (c.fb = a.clientX, c.gb = a.clientY)
			});
			c.xa = a.addEventListener(e.Constants.MOUSE_UP, function (a) {
				if (!("object" === typeof c.S || 0 < Math.abs(a.clientX - c.fb) || 0 < Math.abs(a.clientY - c.gb))) {
					a = c.qa[c.S];
					for (var b = 0; b < c.g.length; b++) {
						c.g[b].callback(a)
					}
				}
			})
		},
		Ob: function (a) {
			switch (a) {
				case 2:
					return 13;
				case 3:
					return 16;
				default:
					return 10
			}
		},
		Vb: function (a, b, c) {
			var d = a.getBoundingClientRect();
			return {
				x: (b - d.left) * (a.width / d.width),
				y: (c - d.top) * (a.height / d.height)
			}
		},
		q: function (a) {
			if (!0 !== a) {
				a = this.a;
				var b = this.na;
				if (a && b) {
					var c = this.qa,
						d = a.getSize(),
						f = a.getBounds(),
						g;
					b.width = d.width;
					b.height = d.height;
					this.h.width = d.width;
					this.h.height = d.height;
					b = a.lnglatToPixel(f.northeast);
					d = a.lnglatToPixel(f.southwest);
					f = b.y;
					b = d.x;
					this.h.style.left = b + "px";
					this.h.style.top = f + "px";
					for (var d = [], h = 0, k = c.length; h < k; ++h) {
						g = c[h], g = a.lnglatToPixel(g.lnglat), g = new e.Pixel(g.x - b, g.y - f), d.push(g), this.sb(g.x, g.y)
					}
					this.Gb = d;
					this.visible(this._options.visible)
				}
			}
		},
		update: function (a) {
			this.qa = a instanceof Array ? a : [];
			this.q()
		},
		sb: function (a, b) {
			var c = this,
				d = c._options,
				f = c.nb;
			if (!c.t) {
				var g = c.t = e.Function.createElement({
					id: c.id + "_cache",
					name: "canvas",
					cssText: ""
				});
				c.t.Ia = !0;
				var h = c.ec = g.getContext("2d"),
					k = c.Ob(d.size);
				if (d.icon) {
					var m = new Image,
						p = d.icon;
					m.src = p.getSrc();
					m.onload = function () {
						var a = m.height;
						g.width = m.width;
						g.height = a;
						h.globalAlpha = "number" == typeof d.alpha ? d.alpha : 1;
						var a = p.getSize(),
							b = p.getOffset();
						h.drawImage(this, b.x, b.y, a.width, a.height, 0, 0, a.width, a.height);
						c.t.Ia = !1
					}
				} else {
					switch (c.t.Ia = !1, g.width = g.height = k, h.fillStyle = d.fillColor, h.globalAlpha = "number" == typeof d.alpha ? d.alpha : 1, d.shape) {
						case 1:
							var n = k / 2,
								r = Math.PI / 5 / 2,
								t = n * Math.tan(Math.PI / 5),
								u = k * Math.sin(r),
								k = k * Math.cos(r);
							h.translate(n, 0);
							h.lineTo(u, k);
							h.lineTo(-n, t);
							h.lineTo(n, t);
							h.lineTo(-u, k);
							h.lineTo(0, 0);
							h.closePath();
							h.fill();
							break;
						case 2:
							n = k / 2;
							h.arc(n, n, n, 0, 2 * Math.PI, !1);
							break;
						case 3:
							h.fillRect(0, 0, g.width, g.height);
							break;
						case 4:
							n = pointY = k / 2;
							g.height = 1.55 * n + n;
							h.fillStyle = d.fillColor;
							h.translate(n, pointY);
							h.arc(0, 0, n, 60 * Math.PI / 180, 120 * Math.PI / 180, !0);
							h.arc(-n, Math.sqrt(3) * n, n, 300 * Math.PI / 180, 360 * Math.PI / 180, !1);
							h.arc(n, Math.sqrt(3) * n, n, Math.PI, 4 * Math.PI / 3, !1);
							h.closePath();
							h.fill();
							break;
						default:
							h.fillRect(0, 0, g.width, g.height)
					}
				}
				h.fill()
			}
			c.t.Ia ? setTimeout(function () {
				f.drawImage(c.t, a - c.t.width / 2, b - c.t.height / 2)
			}, 200) : f.drawImage(c.t, a - c.t.width / 2, b - c.t.height / 2)
		},
		getElement: s("h"),
		visible: function (a) {
			if (this.a) {
				var b = this.getElement();
				b && (b.style.visibility = a ? "inherit" : "hidden")
			}
			this._options.visible = a
		},
		getId: s("id"),
		addEventListener: function (a, b) {
			a == e.Constants.MOUSE_UP && this.g.push({
				type: a,
				callback: b
			})
		},
		getMap: s("a"),
		destroy: function () {
			this.T()
		},
		F: function (a) {
			a instanceof e.Map ? (this.a = a, this.I = a.getOverlayLayer(), this.rb()) : (this.T(), this.na = this.h = this.a = this.S = this.I = null)
		},
		T: function () {
			var a = this.a;
			a && (a.removeEventListener(this.va), a.removeEventListener(this.Aa), a.removeEventListener(this.ya), a.removeEventListener(this.za), a.removeEventListener(this.wa), a.removeEventListener(this.xa), this.xa = this.wa = this.za = this.ya = this.Aa = this.va = null);
			this.ca();
			this.a = null
		},
		ca: function () {
			var a = this.getElement();
			a && a.parentNode && a.parentNode.removeChild(a)
		}
	});
	e.PolylineOptions = e.Class({
		editabled: null,
		strokeColor: null,
		strokeOpacity: null,
		strokeWeight: null,
		strokeStyle: null,
		arrow: null
	});
	e.PolygonOptions = e.Class({
		editabled: null,
		fillColor: null,
		fillOpacity: null,
		strokeColor: null,
		strokeOpacity: null,
		strokeWeight: null,
		strokeStyle: null
	});
	e.RectangleOptions = e.PolygonOptions;
	e.CircleOptions = e.PolygonOptions;
	e.EllipseOptions = e.PolygonOptions;
	e.SectorOptions = e.PolygonOptions;
	IMAPVector = e.Class({
		initialize: function () {
			this._id = "_ld_overlay_" + e.Function.createUniqueID();
			this._bounds = null;
			this._visibleEditNode = this._visible = !0;
			this.zIndex = 2;
			this.Ba = null
		},
		getMap: s("a"),
		getElement: s("h"),
		editable: function (a) {
			this._options.editabled = a;
			this instanceof e.Sector || (a ? this.tb() : this.N(), this.d.drag(a))
		},
		removeEditNodes: l(),
		getId: s("_id"),
		setTitle: function (a) {
			var b = this.getElement();
			b && (a ? b.setAttribute("title", a) : this._title && b.removeAttribute("title"));
			this._title = a
		},
		visible: function (a) {
			var b = this.getElement();
			this._visible = a;
			b && (b.style.visibility = a ? "inherit" : "hidden")
		},
		addEventListener: function (a, b, c, d) {
			var e = this.d;
			b = this.M(b, c || this, d, this);
			c = {
				type: a,
				obj: c || this,
				func: b,
				stop: d
			};
			if (e) {
				e.on(a, b, this)
			} else {
				this.g || (this.g = []), this.g.push(c)
			}
			return c
		},
		M: function (a, b, c, d) {
			return function (f) {
				var g = f.latlng ? new e.LngLat(f.latlng.lng, f.latlng.lat) : null;
				return a.call(b, {
					stop: c || b.stop,
					type: f.type,
					target: d,
					lnglat: g
				})
			}
		},
		removeEventListener: function (a) {
			var b = this.d;
			if (b) {
				b.off(a.type, a.func, a.obj)
			} else {
				if (b = this.g) {
					for (var c = 0, d = b.length; c < d; ++c) {
						if (a.type == b[c].type && a.obj == b[c].obj) {
							b.splice(c, 1);
							break
						}
					}
				}
			}
		},
		setAttribute: function (a) {
			if (a) {
				var b = this._options;
				b.strokeColor = a.strokeColor || b.strokeColor;
				b.strokeOpacity = Math.min(Math.max(isNaN(a.strokeOpacity) ? b.strokeOpacity : a.strokeOpacity, 0), 1);
				b.strokeStyle = a.strokeStyle || b.strokeStyle;
				"undefined" != b.fillOpacity && (b.fillColor = a.fillColor || b.fillColor, b.fillOpacity = Math.min(Math.max(isNaN(a.fillOpacity) ? b.fillOpacity : a.fillOpacity, 0), 1));
				"undefined" != b.linearGradient && (b.linearGradient = a.linearGradient || b.linearGradient);
				b.strokeWeight = isNaN(a.strokeWeight) ? b.strokeWeight : 1 > b.strokeWeight ? 1 : 8 < b.strokeWeight ? 8 : a.strokeWeight;
				this._options = b;
				this.X()
			}
		},
		J: function (a) {
			var b = {
				color: a.strokeColor,
				weight: a.strokeWeight,
				opacity: a.strokeOpacity,
				dashArray: a.strokeStyle
			};
			a.fillColor && (b.fillColor = a.fillColor);
			a.fillOpacity && (b.fillOpacity = a.fillOpacity);
			return b
		},
		getAttribute: s("_options"),
		F: function (a) {
			a instanceof e.Map ? (this.a = a, this._overlayLayer = a.getOverlayLayer(), this._draw()) : (this._destroy(), delete this._render, delete this._renderRoot, delete this._overlayLayer, delete this.a)
		},
		X: l(),
		_draw: l(),
		_destroy: function () {
			this._remove();
			delete this.a;
			this.Ca = !1
		},
		_remove: function () {
			var a = this.getElement();
			a && a.parentNode && (a.parentNode.removeChild(a), this.N())
		},
		Q: function (a) {
			if (a && 0 != a.length) {
				for (var b = 0, c = [], d = a.length; b < d; b++) {
					c.push(new L.LatLng(a[b].lat, a[b].lng))
				}
				return c
			}
			return null
		},
		ab: function (a) {
			if (a && 0 != a.length) {
				for (var b = 0, c = [], d = a.length; b < d; b++) {
					c.push(new e.LngLat(a[b].lng, a[b].lat))
				}
				return c
			}
			return null
		},
		G: function (a) {
			var b = this.g;
			this.h = a.getElement();
			if (b) {
				for (var c = 0, d = b.length; c < d; ++c) {
					var e = b[c];
					a.on(e.type, e.func, e.obj, e.stop)
				}
				this.g = null
			}
		},
		tb: function () {
			this.d.on("click", this.Ma, this.d);
			this.d.on("dragstart", this.Sa, this.d);
			this.Ba = this.a.addEventListener("click", this.Bb, this.a)
		},
		N: function () {
			this.d.editing && (this.d.editing.disable(), this.d.off("click", this.Ma, this.d), this.d.off("dragstart", this.Sa, this.d), this.a.removeEventListener(this.Ba), this.Ba = null)
		},
		Ma: function (a) {
			this.editing && this.editing.enable();
			a.originalEvent._stopped = !0
		},
		Sa: function () {
			this.editing && this.editing.disable()
		},
		Bb: function () {
			var a = this.getOverlayLayer().getOverlays(),
				b;
			for (b in a) {
				a[b] instanceof IMAPVector && a[b].d.editing.disable()
			}
		}
	});
	e.Polyline = e.Class(IMAPVector, {
		initialize: function (a, b) {
			if (a instanceof Array) {
				b = b || {};
				var c = {
					editabled: b.editabled || !1,
					arrow: b.arrow || !1,
					strokeColor: b.strokeColor || "#4169D3",
					strokeStyle: b.strokeStyle || "solid",
					linearGradient: b.linearGradient || !0
				};
				c.strokeOpacity = Math.min(Math.max(b.strokeOpacity && !isNaN(b.strokeOpacity) ? b.strokeOpacity : 1, 0), 1);
				c.strokeWeight = isNaN(b.strokeWeight) ? 3 : 1 > b.strokeWeight ? 1 : 8 < b.strokeWeight ? 8 : b.strokeWeight;
				this._options = c;
				this._path = a;
				IMAPVector.prototype.initialize.apply(this);
				this._calculateBounds(a)
			}
		},
		arrow: function (a) {
			this._options.arrow = a;
			this.d && (this.d.options.arrow = a);
			this.setPath(this.getPath())
		},
		_calculateBounds: function (a) {
			var b = new e.LngLatBounds(1, 1);
			b.southwest = new e.LngLat(a[0].lng, a[0].lat);
			b.northeast = new e.LngLat(a[0].lng, a[0].lat);
			for (var c = b.southwest, d = b.northeast, f = 1, g = a.length; f < g; ++f) {
				c.lng = Math.min(c.lng, a[f].lng), c.lat = Math.min(c.lat, a[f].lat), d.lng = Math.max(d.lng, a[f].lng), d.lat = Math.max(d.lat, a[f].lat)
			}
			this._bounds = b
		},
		getBounds: s("_bounds"),
		X: function () {
			this.d && this.d.setStyle(this.J(this._options))
		},
		setPath: function (a) {
			if (a) {
				var b = e.Function.indexOf(a, -1, "lng"),
					c = e.Function.indexOf(a, -1, "lat"); - 1 == b && -1 == c && (this._path = a, this._calculateBounds(a), this.d && (a = this.Q(a), this.d.setLatLngs(a), this.N(), this.editable(this._options.editabled)))
			}
		},
		getPath: function () {
			this.d && (this._path = this.ab(this.d.getLatLngs()));
			return this._path
		},
		setPostionAt: function (a, b) {
			var c = this._path;
			c && a instanceof e.LngLat && (isNaN(b) ? c.push(a) : c.splice(Math.round(b), 0, a), this.setPath(c))
		},
		removeNodeAt: function (a) {
			var b = this._path;
			!isNaN(a) && b && (b.splice(Math.round(a), 1), this.setPath(b))
		},
		getPathLength: function () {
			var a = this._path,
				b = 0;
			if (a && 0 < a.length) {
				for (var c = 0, d = a.length; c < d; c++) {
					a[c + 1] && (b += parseInt(e.Function.distanceByLngLat(a[c], a[c + 1])))
				}
			}
			return b
		},
		_draw: function () {
			var a = this.Q(this._path);
			if (a) {
				var b = this.J(this._options);
				b.stroke = !0;
				b.arrow = this._options.arrow;
				this.d = new L.Polyline(a, b);
				this.a.mapObj.addLayer(this.d);
				this.G(this.d);
				this.editable(this._options.editabled)
			}
		}
	});
	e.Polygon = e.Class(IMAPVector, {
		initialize: function (a, b) {
			if (a instanceof Array) {
				b = b || {};
				var c = {
					editabled: b.editabled || !1,
					arrow: b.arrow || !1,
					strokeColor: b.strokeColor || "#4169D3",
					strokeStyle: b.strokeStyle || "solid",
					fillColor: b.fillColor || "#99FFCC"
				};
				c.strokeOpacity = Math.min(Math.max(b.strokeOpacity && !isNaN(b.strokeOpacity) ? b.strokeOpacity : 1, 0), 1);
				c.fillOpacity = Math.min(Math.max(isNaN(b.fillOpacity) ? 0.6 : b.fillOpacity, 0), 1);
				c.strokeWeight = isNaN(b.strokeWeight) ? 3 : 1 > b.strokeWeight ? 1 : 8 < b.strokeWeight ? 8 : b.strokeWeight;
				this._options = c;
				this._path = a;
				IMAPVector.prototype.initialize.apply(this);
				this._calculateBounds(a)
			}
		},
		_calculateBounds: function (a) {
			var b = new e.LngLatBounds(1, 1);
			b.southwest = new e.LngLat(a[0].lng, a[0].lat);
			b.northeast = new e.LngLat(a[0].lng, a[0].lat);
			for (var c = b.southwest, d = b.northeast, f = 1, g = a.length; f < g; ++f) {
				c.lng = Math.min(c.lng, a[f].lng), c.lat = Math.min(c.lat, a[f].lat), d.lng = Math.max(d.lng, a[f].lng), d.lat = Math.max(d.lat, a[f].lat)
			}
			this._bounds = b
		},
		X: function () {
			this.d && this.d.setStyle(this.J(this._options))
		},
		setPath: function (a) {
			if (a) {
				var b = e.Function.indexOf(a, -1, "lng"),
					c = e.Function.indexOf(a, -1, "lat"); - 1 == b && -1 == c && (this._path = a, this._calculateBounds(a), this.d && (a = this.Q(a), this.d.setLatLngs(a), this.N(), this.editable(this._options.editabled)))
			}
		},
		getPath: function () {
			return this.d ? this.ab(this.d.getLatLngs()[0]) : this._path
		},
		getArea: function () {
			return e.Function.calculateArea(this._path)
		},
		getBounds: s("_bounds"),
		_draw: function () {
			var a = this.Q(this._path);
			if (a) {
				var b = this.J(this._options);
				b.stroke = !0;
				b.fill = !0;
				this.d = (new L.Polygon(a, b)).addTo(this.a.mapObj);
				this.G(this.d);
				this.editable(this._options.editabled)
			}
		}
	});
	e.Rectangle = e.Class(IMAPVector, {
		initialize: function (a, b) {
			if (a instanceof e.LngLatBounds) {
				b = b || {};
				var c = {
					editabled: b.editabled || !1,
					fillColor: b.fillColor || "#99FFCC",
					strokeColor: b.strokeColor || "#4169D3",
					strokeStyle: b.strokeStyle || "solid"
				};
				c.strokeOpacity = Math.min(Math.max(b.strokeOpacity && !isNaN(b.strokeOpacity) ? b.strokeOpacity : 1, 0), 1);
				c.fillOpacity = Math.min(Math.max(isNaN(b.fillOpacity) ? 0.6 : b.fillOpacity, 0), 1);
				c.strokeWeight = isNaN(b.strokeWeight) ? 3 : 1 > b.strokeWeight ? 1 : 8 < b.strokeWeight ? 8 : b.strokeWeight;
				this._options = c;
				IMAPVector.prototype.initialize.apply(this);
				this._bounds = a
			}
		},
		X: function () {
			this.d && this.d.setStyle(this.J(this._options))
		},
		setBounds: function (a) {
			a instanceof e.LngLatBounds && (this._bounds = a, this.d && (this.d.setBounds(this.Q(this._bounds)), this.N(), this.editable(this._options.editabled)))
		},
		getBounds: function () {
			if (this.d) {
				var a = this.d.getBounds(),
					b = a.southwest,
					a = a.northeast;
				return new e.LngLatBounds(new e.LngLat(b.lng, b.lat), new e.LngLat(a.lng, a.lat))
			}
			return this._bounds
		},
		Q: function (a) {
			if (a && a instanceof e.LngLatBounds) {
				var b = a.getSouthWest();
				a = a.getNorthEast();
				return new L.LatLngBounds(new L.LatLng(b.lat, b.lng), new L.LatLng(a.lat, a.lng))
			}
			return null
		},
		_draw: function () {
			var a = this.Q(this._bounds);
			if (a) {
				var b = this.J(this._options);
				b.stroke = !0;
				b.fill = !0;
				this.d = new L.Rectangle(a, b);
				this.a.mapObj.addLayer(this.d);
				this.G(this.d);
				this.editable(this._options.editabled)
			}
		}
	});
	e.Circle = e.Class(IMAPVector, {
		initialize: function (a, b, c) {
			a instanceof e.LngLat && !isNaN(b) && (c = c || {}, this._center = a, this._radius = b || -1, a = {
				editabled: c.editabled || !1,
				fillColor: c.fillColor || "#99FFCC",
				strokeColor: c.strokeColor || "#4169D3",
				strokeStyle: c.strokeStyle || "solid"
			}, a.strokeOpacity = Math.min(Math.max(c.strokeOpacity && !isNaN(c.strokeOpacity) ? c.strokeOpacity : 1, 0), 1), a.fillOpacity = Math.min(Math.max(isNaN(c.fillOpacity) ? 0.6 : c.fillOpacity, 0), 1), a.strokeWeight = isNaN(c.strokeWeight) ? 3 : 1 > c.strokeWeight ? 1 : 8 < c.strokeWeight ? 8 : c.strokeWeight, this._options = a, this._units = "meter", IMAPVector.prototype.initialize.apply(this))
		},
		getBounds: function () {
			if (this.a) {
				var a = this.d.getBounds();
				return new e.LngLatBounds(new e.LngLat(a.southwest.lng, a.southwest.lat), new e.LngLat(a.northeast.lng, a.northeast.lat))
			}
			var b = this.getRadius(),
				c = this.getCenter(),
				a = c.offset(-b, b),
				b = c.offset(b, -b);
			return new e.LngLatBounds(a, b)
		},
		visibleEditNode: l(),
		setUnits: q("_units"),
		clone: function () {
			return new e.Circle(this._center, this._radius, this._options)
		},
		X: function () {
			this.d && this.d.setStyle(this.J(this._options))
		},
		setCenter: function (a) {
			a && (this._center = a, this.d && (this.d.setLatLng([a.lat, a.lng]), this.N(), this.editable(this._options.editabled)))
		},
		getCenter: function () {
			if (this.d) {
				var a = this.d.getLatLng();
				return new e.LngLat(a.lng, a.lat)
			}
			return this._center
		},
		setRadius: function (a) {
			isNaN(a) || (this._radius = a, this.d && (this.d.setRadius(a), this.N(), this.editable(this._options.editabled)))
		},
		getRadius: function () {
			this.d && this.d.getRadius();
			return this._radius
		},
		getVertex: function () {
			return e.Function.getLngLatByOffset(this._center, this._radius, 0)
		},
		_draw: function () {
			var a = this.J(this._options);
			a.fill = !0;
			a.radius = this._radius;
			a.stroke = !0;
			this.d = "meter" == this._units ? new L.Circle(this._center, a) : new L.circleMarker(this._center, a);
			this.a.mapObj.addLayer(this.d);
			this.G(this.d);
			this.editable(this._options.editabled)
		}
	});
	e.Sector = e.Class(IMAPVector, {
		initialize: function (a, b, c, d) {
			if (a instanceof e.LngLat && !isNaN(b)) {
				d = d || {};
				this._position = a;
				this._radius = b;
				this._angle = 120;
				this._degree = isNaN(c) ? 90 : Math.max(0, Math.min(parseInt(c), 360));
				var f = {
					editabled: d.editabled || !1,
					fillColor: d.fillColor || "#99FFCC",
					strokeColor: d.strokeColor || "#4169D3",
					strokeStyle: d.strokeStyle || "solid"
				};
				f.strokeOpacity = Math.min(Math.max(d.strokeOpacity && !isNaN(d.strokeOpacity) ? d.strokeOpacity : 1, 0), 1);
				f.fillOpacity = Math.min(Math.max(isNaN(d.fillOpacity) ? 0.6 : d.fillOpacity, 0), 1);
				f.strokeWeight = isNaN(d.strokeWeight) ? 2 : 1 > d.strokeWeight ? 1 : 8 < d.strokeWeight ? 8 : d.strokeWeight;
				this._options = f;
				IMAPVector.prototype.initialize.apply(this);
				this.d = new L.Sector(a, b, c, this.Ta(f))
			}
		},
		Ta: function (a) {
			return {
				color: a.strokeColor,
				opacity: a.strokeOpacity,
				weight: a.strokeWeight,
				lineCap: "round",
				dashArray: "solid" == a.strokeStyle ? "solid" : [10, 10],
				fill: !0,
				fillColor: a.fillColor,
				fillOpacity: a.fillOpacity,
				draggable: !1
			}
		},
		X: function () {
			this.d && this.d.setStyle(this.Ta(this._options))
		},
		F: function (a) {
			a ? (this.a = a, a.mapObj.addLayer(this.d), this.G(this.d)) : (this.a && this.d && this.a.mapObj.removeLayer(this.d), this.d = this.a = null)
		},
		setOrientation: function (a) {
			!isNaN(a) && this.d && (this._degree = parseInt(a), this.d.setOrientation(this._degree))
		},
		setAngle: function (a) {
			!isNaN(a) && this.d && (this._angle = Math.max(1, Math.min(180, parseInt(a))), this.d.setAngle(this._angle))
		},
		setPosition: function (a) {
			a instanceof e.LngLat && this.d && (this._position = a, this.d.setPosition(this._position))
		},
		getPosition: s("_position"),
		getBounds: function () {
			if (this.d) {
				var a = this.d.getBounds(),
					b = a.southwest,
					a = a.northeast;
				return new e.LngLatBounds(new e.LngLat(b.lng, b.lat), new e.LngLat(a.lng, a.lat))
			}
			return null
		},
		setRadius: function (a) {
			!isNaN(a) && this.d && (this._radius = a, this.d.setRadius(this._radius))
		},
		getRadius: s("_radius")
	});
	e.OverlayLayer = e.Class(e.Layer, {
		initialize: function (a) {
			e.Layer.prototype.initialize.apply(this, [a]);
			this.Ga = 1;
			this.A = {};
			this.ua = 2;
			this.Fa = this.Ea = !1;
			this.pa()
		},
		setMap: function (a) {
			a instanceof e.Map ? (this.a = a, this.B || (this.B = this.a.mapObj.getPanes().overlayPane)) : (this.destroy(!0), this.a = null)
		},
		getRenderRoot: s("Fa"),
		getRender: s("Ea"),
		injectRender: function (a) {
			this.Ea = a;
			this.Fa = a.createRoot();
			this.B.appendChild(this.Fa)
		},
		destroy: function () {
			if (this.a) {
				var a = this.B;
				a && mklay.parentNode && (a.parentNode.removeChild(a), delete this.h);
				lblay && lblay.parentNode && (lblay.parentNode.removeChild(lblay), delete this._lblay);
				this.A = {};
				delete this.a
			}
		},
		pa: l(),
		addOverlay: function (a, b) {
			var c = this.a;
			if (c && !this.A[a.getId()] && (a instanceof e.Overlay || a instanceof IMAPVector || a instanceof e.PointCollection || a instanceof e.CustomerOverlay)) {
				a.F ? a.F(c) : a.setMap(c);
				this.A[a.getId()] = a;
				if (b) {
					if (a instanceof e.Overlay) {
						c.setCenter(a.getPosition())
					} else {
						if (IMAPVector) {
							var d = a.getBounds();
							if (d) {
								var f = d.southwest,
									d = d.northeast,
									g = [];
								g.push(f);
								g.push(new e.LngLat(f.lng, d.lat));
								g.push(d);
								g.push(new e.LngLat(d.lng, f.lat));
								c.setBestMap(g)
							}
						}
					}
				}
				c.triggerEvent(e.Constants.ADD_OVERLAY, {
					type: e.Constants.ADD_OVERLAY,
					overlay: a,
					target: this
				})
			}
		},
		addOverlays: function (a, b) {
			var c = this.a;
			if (c) {
				if (a instanceof Array) {
					for (var d = [], f, g = 0; g < a.length; g++) {
						f = a[g];
						if (b) {
							if (f instanceof e.Overlay) {
								d.push(f.getPosition())
							} else {
								if (f instanceof IMAPVector) {
									var h = f.getBounds();
									h && (f = h.southwest, h = h.northeast, d.push(f), d.push(new e.LngLat(f.lng, h.lat)), d.push(h), d.push(new e.LngLat(h.lng, f.lat)))
								}
							}
						}
						this.addOverlay(a[g], !1)
					}
					b && c.setBestMap(d, !0)
				} else {
					this.addOverlay(a, b)
				}
			}
		},
		reloadOverlays: function () {
			if (this.a) {
				var a = this.Ea;
				a && "svg" == a.name && a.resize();
				for (var b in this.A) {
					this.A[b]._redraw(!0)
				}
			}
		},
		removeOverlay: function (a) {
			var b = !1,
				c = this.a;
			"string" == typeof a && (a = this.A[a]);
			if (a) {
				if (a instanceof e.Overlay || a instanceof IMAPVector || a instanceof e.PointCollection || a instanceof e.CustomerOverlay) {
					b = !0, a.F ? a.F(null) : a.setMap(null)
				}
				b && c && (a = a.getId(), delete this.A[a], c.triggerEvent(e.Constants.REMOVE_OVERLAY, {
					type: e.Constants.REMOVE_OVERLAY,
					overlayId: a,
					target: this
				}))
			}
		},
		clear: function (a) {
			if (null != a) {
				for (var b in a) {
					this.removeOverlay(a[b])
				}
			} else {
				for (var c in this.A) {
					this.removeOverlay(this.A[c])
				}
			}
		},
		getOverlayById: function (a) {
			return this.A[a]
		},
		getOverlays: s("A")
	});
	e.TileLayer = e.Class(e.Layer, {
		initialize: function (a, b, c) {
			var d = a || {};
			this.ua = "number" == typeof b ? b : 1;
			d.isLayerSwitcher = d.isLayerSwitcher || !1;
			d.hotspotOptions = d.hotspotOptions || null;
			d.tileSize = d.tileSize;
			e.Layer.prototype.initialize.apply(this, [d]);
			e.Function.applyDefaults(this, this._options);
			a.vectorlayer ? (d.baseUrl = d.baseUrl || e.MapConfig._VDATA, this.l = L.vectorLayer(d.baseUrl, {
				minZoom: d.minZoom,
				maxZoom: d.maxZoom,
				tileSize: d.tileSize,
				subdomains: d.baseUrl[1],
				zIndex: c || 2
			})) : (d.baseUrl = d.baseUrl || e.MapConfig._MAP_PCBGIMG_URL, this.l = L.tileLayer(d.baseUrl[0], {
				minZoom: d.minZoom,
				maxZoom: d.maxZoom,
				tileSize: d.tileSize,
				subdomains: d.baseUrl[1],
				zIndex: c || 2
			}));
			this.l.type = this.ua
		},
		setOpacity: function (a) {
			this.l.setOpacity(a)
		},
		getOpacity: function () {
			return this.l.getOpacity()
		},
		setZIndex: function (a) {
			isNaN(a) || this.l.setZIndex(a)
		},
		getZIndex: function () {
			return this.l.getZIndex()
		},
		visible: function (a) {
			this.l.visible(a)
		},
		getVisible: function () {
			return this.l.getVisible()
		},
		getId: function () {
			return L.stamp(this.l)
		},
		mc: s("l"),
		setMap: function (a) {
			a instanceof e.Map ? (a.mapObj.addLayer(this.l), this._options.hotspotOptions && (this.p = e.HotspotManager.getEntity(a), this.p.injectLayer(this.getId(), this._options.hotspotOptions, this.g ? this.g.slice() : null)), this.a = a) : (this.a.mapObj.removeLayer(this.l), this.hotspot(!1), this.a = this.l = null)
		},
		hotspot: function (a, b) {
			a && (b || this._options.hotspotOptions) ? (b && (this._options.hotspotOptions = b), this.cb(!0)) : !a && this.p && (this.cb(!1), delete this.p)
		},
		cb: function (a) {
			a ? (this.p || (this.p = e.HotspotManager.getEntity(this.a)), this.g = this.g || [], this.p.injectLayer(this.getId(), this._options.hotspotOptions, this.g ? this.g.slice() : null)) : !a && this.p && this.p.removeTileLayer(this.getId())
		},
		setTileUrlFunc: function (a) {
			a && "function" == typeof a && this.l.setTileUrlFunc(a)
		},
		addHotspotEventListener: function (a, b, c) {
			a = {
				type: a,
				func: b,
				obj: c || this
			};
			this.p ? this.p.Wb(this.getId(), a) : (this.g || (this.g = []), this.g.push(a));
			return a
		},
		removeHotspotEventListener: function (a) {
			if (this.p) {
				this.p.ac(this.getId(), a)
			} else {
				var b = this.g;
				if (b) {
					for (var c = 0, d = b.length; c < d; ++c) {
						if (a.type == b[c].type && a.obj == b[c].obj) {
							b.splice(c, 1);
							break
						}
					}
				}
			}
		},
		Xb: function () {
			this.p && this.p.$b(this.getId())
		}
	});
	e.BGTileLayer = e.Class(e.TileLayer, {
		initialize: function (a) {
			e.TileLayer.prototype.initialize.apply(this, [a, 0, 1])
		}
	});
	e.Template = e.Class({
		name: null,
		getDataUrl: function () {
			return null
		},
		formatDatas: function (a) {
			return a
		}
	});
	e.HotspotOptions = e.Class({
		type: null,
		labelField: null,
		iconUrl: null,
		iconSize: null,
		iconOffset: null,
		anchor: null,
		template: null
	});
	e.HotspotEntity = e.Class({
		O: !1,
		initialize: function (a) {
			this.ja = [];
			this.U = {};
			this.C = {};
			this.g = {};
			this.fa = [];
			this.a = a
		},
		Ib: function () {
			var a = this,
				b = a.a;
			a.O || (a.O = b.addEventListener(e.Constants.MOUSE_MOVE, function (c) {
				a.o && b.getOverlayLayer().removeOverlay(a.o, !0);
				a.o = null;
				var d = b.Ab(c.lnglat);
				a.Mb(c.pixel, d.x, d.y, d.z)
			}, a), a.ka = b.addEventListener(e.Constants.ZOOM_START, function () {
				a.fa = [];
				a.o && b.getOverlayLayer().removeOverlay(a.o, !0);
				a.o = null
			}, a))
		},
		Lb: function () {
			var a = this.a;
			this.O && (a.removeEventListener(this.O), a.removeEventListener(this.ka), delete this.O, delete this.ka)
		},
		injectLayer: function (a, b, c) {
			this.U[a] || (this.ja.push(a), this.U[a] = b, c && (this.g[a] = c), this.Ib())
		},
		getTileLayerEvt: function (a) {
			return this.g[a]
		},
		removeTileLayer: function (a) {
			for (var b = this.ja, c = 0, d = b.length; c < d; ++c) {
				a == b[c] && (this.C[b[c]] = null, this.U[b[c]] = null, this.g[b[c]] = null, b.splice(c, 1))
			}
			this.a && this.o && (this.a.getOverlayLayer().removeOverlay(this.o, !0), this.o = null);
			0 == b.length && this.Lb()
		},
		Wb: function (a, b) {
			var c = this.g[a];
			c || (c = [], this.g[a] = c);
			c.push(b)
		},
		ac: function (a, b) {
			var c = this.g[a];
			if (c) {
				for (var d = 0, e = c.length; d < e; ++d) {
					if (b.type == c[d].type && b.obj == c[d].obj) {
						c.splice(d, 1);
						break
					}
				}
			}
		},
		$b: function (a) {
			this.C[a] && (this.C[a] = null)
		},
		clearTileDatas: function () {
			this.C = {}
		},
		destroy: function () {
			this.a.removeEventListener(this.O);
			this.a.removeEventListener(this.ka);
			this.ka = this.O = null;
			this.ja = [];
			this.U = {};
			this.C = {}
		},
		Na: function (a) {
			if ("string" == typeof a) {
				for (var b = this.fa, c = b.length, d = 0; d < c; d++) {
					if (a === b[d]) {
						return !0
					}
				}
			}
			return !1
		},
		Mb: function (a, b, c, d) {
			for (var e = this.ja, g = this.C, h = this.U, k = this.a.pixelToLnglat(a), m = 0, p = e.length; m < p; ++m) {
				var n = e[m];
				if (h[n]) {
					g[n] || (g[n] = {}, this.C = g);
					var r = n + "_" + b + "_" + c + "_" + d;
					if (g[n][b + "_" + c + "_" + d] && !this.Na(r)) {
						if (this.Ra(a, k, n, g[n][b + "_" + c + "_" + d])) {
							break
						}
					} else {
						this.Na(r) || (this.fa.push(r), this.Tb(b, c, d, h[n].template, a, k, n, r))
					}
				}
			}
		},
		Tb: function (a, b, c, d, f, g, h, k) {
			var m = this,
				p = e.LoaderManager.getEntity();
			p.register("loaded", function (n) {
				m.C[h] && (n = d.formatDatas(n), n._xy = a + "." + b, 0 < n.length ? (m.C[h][a + "_" + b + "_" + c] = n, m.Ra(f, g, h, n)) : m.C[h][a + "_" + b + "_" + c] = n, e.Function.deleteFromArray(m.fa, k))
			}, m);
			p.load({
				url: d.getDataUrl(a, b, c),
				name: d.name
			})
		},
		Ra: function (a, b, c, d) {
			a = this.U[c];
			var f = !1;
			if (b = this.vb(b, d)) {
				switch (a.type) {
					case e.Constants.LAYER_HOTSPOT_ICON_TYPE:
						d = this.Qa(c, a, b, d._xy);
						break;
					case e.Constants.LAYER_HOTSPOT_RECT_TYPE:
						d = this.qb(c, a, b, d._xy);
						break;
					default:
						d = this.Qa(c, a, b, d._xy, e.MapConfig.API_REALM_NAME + e.MapConfig._MAP_ICON_BLAND_URL)
				}
				this.o = d;
				b = b.datas;
				if (c = this.g[c]) {
					for (c = c.slice(), a = 0, f = c.length; a < f; ++a) {
						this.jb(c[a], d, b)
					}
				}
				f = !0
			}
			return f
		},
		vb: function (a, b) {
			var c = null,
				d = b.length;
			if (0 < d) {
				for (var e = 0; e < d; ++e) {
					var g = b[e];
					g.bounds.containsLngLat(a) && (c = g, c.datas.lnglat || (c.datas.lnglat = a))
				}
			}
			return c
		},
		Qa: function (a, b, c, d, f) {
			this.o && this.a.getOverlayLayer().removeOverlay(this.o);
			a = b.iconSize || c.iconSize;
			f = new e.Marker(c.datas.lnglat, {
				title: c.datas.title,
				offset: b.iconOffset || c.iconOffset,
				anchor: b.anchor || c.anchor,
				icon: new e.Icon(f ? f : c.iconName ? b.iconUrl + c.iconName : b.iconUrl, a)
			});
			d = {
				offset: {
					x: 7,
					y: 0
				},
				anchor: e.Constants.LEFT_BOTTOM,
				type: e.Constants.OVERLAY_LABEL_HTML,
				fontSize: 12,
				fontColor: "#000000",
				fontBold: !0
			};
			var g = '<div style="border:1px solid #000000;background-color:#ffffff;filter:alpha(opacity=80);-moz-opacity:0.8;-khtml-opacity: 0.8;opacity: 0.8;font-size: 12px;">' + c.datas.title + "</div>",
				h = document.createElement("div");
			h.innerHTML = g + "  ";
			f.setLabel(h, d);
			this.a.getOverlayLayer().addOverlay(f);
			b.labelField && f.setLabel('<div style="font-size:12px; opacity:0.9;border: 1px solid rgb(0, 0, 0); background-color: rgb(255, 255, 255);">' + c[b.labelField] + "</div>", {
				offset: {
					x: a.width / 2 + 8,
					y: 10
				}
			});
			return this.o = f
		},
		qb: function (a, b, c) {
			b = e.MapConfig.API_REALM_NAME + e.MapConfig._MAP_HOTSPOT_RECT_IMG_URL;
			this.o && this.a.getOverlayLayer().removeOverlay(this.o);
			a = c.bounds;
			var d = this.a.lnglatToPixel(a.southwest),
				f = this.a.lnglatToPixel(a.northeast);
			c = [Math.abs(parseInt(d.x) - parseInt(f.x)), Math.abs(parseInt(f.y) - parseInt(d.y)) + c.iconSize.height / 2];
			b = '<div style="height:' + c[1] + "px;width: " + c[0] + 'px;">' + ('<div style="background-image: url(' + b + ');background-position: 0 0;background-repeat: no-repeat;height: 6px;left: -3px;overflow: hidden;position: absolute;top: -4px;width: 7px; z-index: 90;"></div>' + ('<div style="width:' + c[0] + "px;height:7px;left:4px;top:-4px;background-image: url(" + b + ");background-repeat: no-repeat;background-position: -" + (208 - c[0]) + 'px 0;position: absolute; overflow: hidden;"></div>') + ('<div style="height:' + c[1] + "px;width:8px;left: -3px;top:2px;background-image: url(" + b + ");background-repeat: no-repeat;background-position: 0px -" + (108 - c[1]) + 'px;position: absolute; overflow: hidden;"></div>') + ('<div style="height:' + c[1] + "px;width:" + c[0] + "px;left:4px;right: 0;top:2px;background-image: url(" + b + ");background-repeat: no-repeat;background-position:-" + (208 - c[0]) + "px -" + (108 - c[1]) + 'px;position: absolute; overflow: hidden;"></div>')) + "</div>";
			d = document.createElement("div");
			d.innerHTML = b;
			a = new e.Label(d, {
				type: e.Constants.OVERLAY_LABEL_HTML,
				anchor: e.Constants.BOTTOM_CENTER,
				position: a.getCenter(),
				offset: {
					x: 0,
					y: c[1] / 2
				}
			});
			this.a.getOverlayLayer().addOverlay(a);
			return a
		},
		jb: function (a, b, c) {
			b.addEventListener(a.type, function () {
				a.func.apply(a.obj, [c, b.getPosition(), b])
			}, b)
		}
	});
	e.HotspotManager = {
		ra: [],
		getEntity: function (a) {
			this.ra[a.getId()] || (this.ra[a.getId()] = new e.HotspotEntity(a));
			return this.ra[a.getId()]
		}
	};
	IMAPMapHotspotTemplate = e.Class(e.Template, {
		name: "_MAP_HOTSPOT",
		initialize: q("a"),
		getDataUrl: function (a, b, c) {
			var d = e.MapConfig._MAP_PC_DATAS_URL;
			return d[Math.floor(Math.random() * d.length)] + c + "/" + a + "/" + b + ".js?algorithm=tms&s=hotspot"
		},
		formatDatas: function (a) {
			var b = [];
			if (a && (a = a.r)) {
				var c = a.length,
					d;
				if (0 < c) {
					for (var f = 0; f < c; ++f) {
						var g = a[f];
						d = this.wb(this.a.getZoom(), g.k);
						var h = g.c.split(",");
						h[0] = parseInt(h[0]);
						h[1] = parseInt(h[1]);
						var k = g.e.split(","),
							h = Math.min(k[0], k[2]),
							m = Math.min(k[3], k[1]),
							p = Math.max(k[0], k[2]),
							k = Math.max(k[3], k[1]),
							k = new e.LngLatBounds(new e.LngLat(h, m), new e.LngLat(p, k));
						b.push({
							bounds: k,
							iconSize: {
								width: d[0],
								height: d[1]
							},
							datas: g
						})
					}
				}
			}
			return b
		},
		wb: function (a, b) {
			switch (b) {
				case "819":
					var c = [25, 13];
					break;
				case "821":
					c = [23, 16];
					break;
				case "3":
					c = [28, 12];
					break;
				case "342":
					c = [8, 8];
					break;
				case "343":
					c = [8, 8];
					break;
				case "11":
				case "12":
				case "21":
				case "22":
				case "32":
				case "41":
				case "42":
				case "51":
				case "52":
				case "61":
				case "71":
				case "81":
				case "82":
				case "91":
					c = [16, 16];
					break;
				case "31":
				case "72":
				case "92":
				case "111":
				case "112":
				case "121":
				case "141":
				case "151":
				case "152":
					c = [16, 16];
					16 < a && (c = [20, 20]);
					break;
				case "131":
				case "171":
				case "191":
					c = [16, 9];
					16 < a && (c = [20, 11]);
					break;
				case "43":
				case "44":
				case "45":
				case "46":
					c = [17, 17];
					break;
				case "344":
					c = [12, 11];
					8 < a && (c = [14, 13]);
					break;
				default:
					c = [16, 16]
			}
			return c
		}
	});
	LS = {
		tips: function (a) {
			a || (a = {});
			window._MAP_HOTSPOT = a
		}
	};
	window.LS = LS;
	e.Tween = e.Class({
		Linear: function (a, b, c, d) {
			return c * a / d + b
		},
		cc: {
			jc: function (a, b, c, d) {
				return c * (a /= d) * a * a + b
			},
			lc: function (a, b, c, d) {
				return c * ((a = a / d - 1) * a * a + 1) + b
			},
			kc: function (a, b, c, d) {
				return 1 > (a /= d / 2) ? c / 2 * a * a * a + b : c / 2 * ((a -= 2) * a * a + 2) + b
			}
		}
	});
	e.Map = e.Class(e.Events, {
		initialize: function (a, b) {
			b = b || {};
			var c = e.MapConfig;
			this.Sb = c._MAP_PCIMG_SIZE;
			var d = {
				backgoundImg: b.backgoundImg || c.API_REALM_NAME + c._MAP_BGIMG_URL,
				center: b.center || new e.LngLat(116.335602, 39.940804),
				keyboard: "boolean" == typeof b.keyboard ? b.keyboard : !0,
				dragable: "boolean" == typeof b.dragable ? b.dragable : !0,
				hotspot: "boolean" == typeof b.hotspot ? b.hotspot : !1,
				scrollWheel: "boolean" == typeof b.scrollWheel ? b.scrollWheel : !0,
				dblclickZoom: "boolean" == typeof b.dblclickZoom ? b.dblclickZoom : !0,
				animation: "boolean" == typeof b.animation ? b.animation : !0,
				inertial: "boolean" == typeof b.inertial ? b.inertial : !0
			};
			d.vector = "boolean" == typeof b.vector ? b.vector ? L.Browser.canvas ? !0 : !1 : !1 : !1;
			var f = [];
			this.kb = d.vector ? c._VDATA : b.tileUrl ? b.tileUrl : c._MAP_PCBGIMG_URL;
			if (b.limitBounds instanceof Array) {
				d.limitBounds = b.limitBounds;
				var g = b.limitBounds[0],
					h = b.limitBounds[1];
				f[0] = [g.lat, g.lng];
				f[1] = [h.lat, h.lng]
			} else {
				b.limitBounds instanceof e.LngLatBounds ? (d.limitBounds = b.limitBounds, g = d.limitBounds.getSouthWest(), h = d.limitBounds.getNorthEast(), f[0] = [g.lat, g.lng], f[1] = [h.lat, h.lng]) : (d.limitBounds = [new e.LngLat(73, 5), new e.LngLat(140, 55)], f = [
					[5, 73],
					[55, 140]
				])
			}
			this._options = d;
			g = parseInt(b.zoom) || 4;
			d.maxZoom = Math.min(parseInt(b.maxZoom) || 23, 23);
			d.minZoom = Math.max(parseInt(b.minZoom) || 4, 4);
			c = L.map(a, {
				backgoundImg: d.backgoundImg,
				scrollWheelZoom: d.scrollWheel,
				dragging: d.dragable,
				doubleClickZoom: d.dblclickZoom,
				keyboard: d.keyboard,
				inertia: d.inertial,
				zoomAnimation: d.animation,
				vector: d.vector,
				pUrl: c._PLUGINS_URL,
				maxBounds: f
			});
			c.on("load", function () {
				this.Oa("core")
			}, this);
			c.setView([d.center.lat, d.center.lng], g);
			this.mapObj = c;
			this.pb = c = new e.OverlayLayer({
				maxZoom: d.maxZoom,
				minZoom: d.minZoom
			});
			this.addLayer(c);
			d = new e.BGTileLayer({
				baseUrl: this.kb,
				tileSize: this.Sb,
				maxZoom: d.maxZoom,
				minZoom: d.minZoom,
				isLayerSwitcher: !0,
				vectorlayer: d.vector,
				hotspotOptions: d.hotspot ? {
					template: new IMAPMapHotspotTemplate(this),
					type: e.Constants.LAYER_HOTSPOT_RECT_TYPE
				} : null
			});
			d.imgUrl = e.MapConfig.API_REALM_NAME + "images/mapswitcher.png";
			d.imgOffset = {
				x: -4,
				y: -6
			};
			d.setName("地图");
			e.Events.prototype.initialize.apply(this, []);
			this.Pa = {
				changeBgLayer: "changeBgLayer",
				addoverlay: "addoverlay",
				removeoverlay: "removeoverlay"
			};
			this.addLayer(d);
			this.R = d;
			this.hb = 0;
			this.setLimitBounds = this.setMaxLimit;
			d = new e.CopyrightControl({
				anchor: e.Constants.LEFT_BOTTOM
			});
			this.addControl(d);
			this.ob = d
		},
		getCopyrightControl: s("ob"),
		destroy: function () {
			this.mapObj && this.mapObj.remove();
			this.hb = 1
		},
		getStatus: s("hb"),
		dragged: function (a) {
			this._options.dragable = a || !1;
			a ? this.mapObj.dragging.enable() : this.mapObj.dragging.disable()
		},
		dblclickZoom: function (a) {
			this._options.dblclickZoom = a || !1;
			a ? this.mapObj.doubleClickZoom.enable() : this.mapObj.doubleClickZoom.disable()
		},
		keyboard: function (a) {
			this._options.keyboard = a || !1;
			a ? this.mapObj.keyboard.enable() : this.mapObj.keyboard.disable()
		},
		scrollWheelZoom: function (a) {
			this._options.scrollWheelZoom = a || !1;
			a ? this.mapObj.scrollWheelZoom.enable() : this.mapObj.scrollWheelZoom.disable()
		},
		inertia: function (a) {
			this._options.inertial = a;
			this.mapObj.inertia(a)
		},
		hotspot: function (a) {
			var b = this.R;
			if (b) {
				b.hotspot(a, {
					template: new IMAPMapHotspotTemplate(this),
					type: e.Constants.LAYER_HOTSPOT_RECT_TYPE
				});
				var c = this.ia;
				if (a && c) {
					for (var d = 0, f = c.length; d < f; ++d) {
						var g = c[d];
						b.addHotspotEventListener(g.type, g.func, g.obj)
					}
				}
				b.Xb()
			}
			this._options.hotspot = a
		},
		addHotspotEventListener: function (a, b, c) {
			var d = {
				type: a,
				obj: c || this,
				func: b
			};
			this.R && this.R.addHotspotEventListener(a, b, c);
			this.ia || (this.ia = []);
			this.ia.push(d);
			return d
		},
		removeHotspotEventListener: function (a) {
			if (this.R) {
				this.R.removeHotspotEventListener(a)
			} else {
				var b = this.ia;
				if (b) {
					for (var c = 0, d = b.length; c < d; ++c) {
						if (a.type == b[c].type && a.obj == b[c].obj) {
							b[c].splice(c, 1);
							break
						}
					}
				}
			}
		},
		lnglatToPixel: function (a) {
			return this.mapObj.latLngToLayerPoint([a.lat, a.lng])
		},
		pixelToLnglat: function (a) {
			a = this.mapObj.layerPointToLatLng([a.x, a.y]);
			return new e.LngLat(a.lng, a.lat)
		},
		panBy: function (a, b) {
			this.mapObj.panBy([a, b])
		},
		panTo: function (a) {
			this.mapObj.panTo([a.lat, a.lng])
		},
		zoomIn: function (a) {
			a && this.setCenter(a);
			this.mapObj.zoomIn()
		},
		zoomOut: function (a) {
			a && this.setCenter(a);
			this.mapObj.zoomOut()
		},
		autoResize: function () {
			this.mapObj.invalidateSize()
		},
		setZoom: function (a) {
			this.mapObj.setZoom(a, !1)
		},
		setZoomLevels: function (a, b) {
			this.mapObj.setZoomLevels(a, b)
		},
		setCenter: function (a, b) {
			this.mapObj.setView([a.lat, a.lng], b)
		},
		setBestMap: function (a, b) {
			if (a instanceof Array && 0 < a.length) {
				var c = [],
					d = [],
					f;
				for (f in a) {
					var g = a[f];
					c.push(g.lng);
					d.push(g.lat)
				}
				f = Math.max.apply(Math, c);
				g = Math.max.apply(Math, d);
				c = Math.min.apply(Math, c);
				d = Math.min.apply(Math, d);
				d = new e.LngLatBounds(new e.LngLat(c, d), new e.LngLat(f, g));
				this.setBounds(d, b)
			}
		},
		setBounds: function (a, b) {
			var c = a.getSouthWest(),
				d = a.getNorthEast();
			this.mapObj.fitBounds([
				[c.lat, c.lng],
				[d.lat, d.lng]
			], b)
		},
		setMaxLimit: function (a) {
			var b = [];
			if (a instanceof Array) {
				var c = a[0],
					d = a[1];
				b[0] = [c.lat, c.lng];
				b[1] = [d.lat, d.lng]
			} else {
				a instanceof e.LngLatBounds ? (c = a.getSouthWest(), d = a.getNorthEast(), b[0] = [c.lat, c.lng], b[1] = [d.lat, d.lng]) : b = null
			}
			this._options.limitBounds = a;
			this.mapObj.setMaxBounds(b)
		},
		getLimitBounds: function () {
			return this._options.limitBounds
		},
		getZoom: function () {
			return this.mapObj.getZoom()
		},
		getCenter: function () {
			var a = this.mapObj.getCenter();
			return new e.LngLat(a.lng, a.lat)
		},
		getId: function () {
			return this.mapObj._map_id
		},
		getSize: function () {
			var a = this.mapObj.getSize();
			return new e.Size(a.x, a.y)
		},
		getBounds: function () {
			var a = this.mapObj.getBounds(),
				b = new e.LngLat(a.getSouthWest().lng, a.getSouthWest().lat),
				a = new e.LngLat(a.getNorthEast().lng, a.getNorthEast().lat);
			return new e.LngLatBounds(b, a)
		},
		getContainer: function () {
			return this.mapObj.getContainer()
		},
		getBoundsForZoom: function () {
			var a = this.mapObj.getBounds();
			return this.mapObj._getBoundsCenterZoom(a).zoom
		},
		getOverlayLayer: s("pb"),
		addLayer: function (a) {
			a.setMap(this)
		},
		removeLayer: function (a) {
			a.setMap(null)
		},
		getBGLayerIds: function () {
			return this.mapObj.getBGLayerIds()
		},
		layerToTop: function (a) {
			this.mapObj.layerToTop(a)
		},
		changeBGLayer: function (a) {
			this.mapObj.changeBGLayer(a.l) && (this.R = a, this.triggerEvent(e.Constants.CHAGE_BGLAYER, {
				layer: a
			}))
		},
		addControl: function (a) {
			a && a.setMap(this)
		},
		removeControl: function (a) {
			a && a.setMap(null)
		},
		addContextMenu: function (a) {
			a instanceof e.ContextMenu && a.setMap(this)
		},
		removeContextMenu: function (a) {
			a instanceof e.ContextMenu && a.setMap(null)
		},
		clearOverlays: function () {
			this.getOverlayLayer().clear()
		},
		addTool: function (a) {
			a && a.setMap(this)
		},
		removeTool: function (a) {
			a && a.setMap(null)
		},
		addEventListener: function (a, b, c, d) {
			if (this.Pa[a]) {
				return e.Events.prototype.addEventListener.apply(this, [a, b, c, d])
			}
			b = this.M(b, c || this, d, this);
			this.mapObj.on(a, b);
			return {
				type: a,
				obj: c || this,
				func: b,
				stop: d
			}
		},
		M: function (a, b, c, d) {
			return function (f) {
				var g = {
					stop: c || b.stop,
					type: f.type,
					zoom: d.getZoom(),
					center: d.getCenter()
				};
				f.latlng && (g.lnglat = new e.LngLat(f.latlng.lng, f.latlng.lat), g.pixel = new e.Pixel(f.layerPoint.x, f.layerPoint.y), g.containerPixel = new e.Pixel(f.containerPoint.x, f.containerPoint.y));
				return a.call(b, g)
			}
		},
		removeEventListener: function (a) {
			a && (this.Pa[a.type] ? e.Events.prototype.removeEventListener.apply(this, [a]) : this.mapObj.off(a.type, a.func))
		},
		getOptions: s("_options"),
		Ab: function (a) {
			return this.mapObj._getTileId(a)
		},
		plugin: function (a, b) {
			var c = this;
			c.mapObj.plugin(a, function () {
				c.Oa(a.join("|"));
				b instanceof Function && b()
			})
		},
		Oa: function (a) {}
	});
	e.MapOptions = e.Class({
		backgoundImg: null,
		center: null,
		maxZoom: null,
		minZoom: null,
		keyboard: null,
		dragable: null,
		hotspot: null,
		scrollWheel: null,
		dblclickZoom: null,
		animation: null,
		inertial: null,
		zoom: null,
		projectionType: null
	});
	e.Control = e.Class({
		initialize: function (a) {
			this.Ca = !1;
			a = a || {};
			this.aa = "_ld_control_" + e.Function.createUniqueID();
			this._options = a
		},
		setMap: function (a) {
			a ? (this.a = a, this.n.addTo(a.mapObj)) : (this.n.remove(), this.a = null)
		},
		getMap: s("a"),
		setObject: q("n"),
		getElement: function () {
			return this.n.getContainer()
		},
		setAnchor: function (a) {
			this._options.position = a;
			this.n.setPosition(a)
		},
		getAnchor: function () {
			return this._options.position
		},
		setOffset: function (a) {
			a instanceof e.Pixel && (this._options.offset = a, this.n.setOffset(a))
		},
		getOffset: function () {
			return this._options.offset
		},
		getId: s("aa"),
		visible: function (a) {
			this.n.visible(a)
		},
		isUsable: s("Ca")
	});
	e.ControlOptions = e.Class({
		anchor: null,
		offset: null
	});
	e.ScaleControl = e.Class(e.Control, {
		initialize: function (a) {
			a = a || {};
			a.position = a.anchor || e.Constants.LEFT_BOTTOM;
			a.offset = a.offset || {
				x: 5,
				y: -40
			};
			e.Control.prototype.initialize.apply(this, [a]);
			this.n = new L.Control.Scale(a)
		}
	});
	e.NavigationControl = e.Class(e.Control, {
		initialize: function (a) {
			a = a || {};
			a.position = a.anchor || e.Constants.LEFT_TOP;
			a.offset = a.offset || {
				x: 10,
				y: 10
			};
			e.Control.prototype.initialize.apply(this, [a]);
			this.n = new L.Control.Zoom(a)
		},
		setType: l(),
		getType: l()
	});
	e.Copyright = e.Class({
		id: null,
		content: null
	});
	e.CopyrightControl = e.Class(e.Control, {
		initialize: function (a) {
			a = a || {};
			a.position = a.anchor || e.Constants.RIGHT_BOTTOM;
			a.offset = a.offset || {
				x: 5,
				y: -5
			};
			e.Control.prototype.initialize.apply(this, [a]);
			var b = {
				id: "ld_copyright",
				content: e.Constants.CONTROL_COPYRIGHT
			};
			this.n = new L.Control.Attribution(a);
			this.n.addAttribution(b)
		},
		addCopyright: function (a) {
			return this.n.addAttribution(a)
		},
		removeCopyright: function (a) {
			return this.n.removeAttribution(a)
		},
		getCopyright: function (a) {
			return this.n.getAttribution(a)
		},
		getCopyrights: function () {
			return this.n.getAttributions()
		}
	});
	e.MenuItem = e.Class(e.DOMEvents, {
		Qb: "padding:3px 6px;color:#76766f;word-wrap:break-word;",
		Rb: "padding:3px 6px;color:#d0d0d0;word-wrap:break-word;",
		Db: "#f3f3f2",
		Cb: "#ffffff",
		initialize: function (a, b) {
			var c = this;
			b = b || {};
			var d = {
				width: 150,
				enabled: "boolean" == typeof b.enabled ? b.enabled : !0,
				iconSize: b.iconSize instanceof Array ? b.iconSize : [25, 15],
				content: "string" == typeof a ? a : "TransMap",
				iconUrl: "string" == typeof b.iconUrl ? b.iconUrl : null,
				callback: "function" == typeof b.callback ? b.callback : null
			};
			c.options = d;
			c.ha = d.iconUrl && 23 < b.iconSize[1] ? b.iconSize[1] : 23;
			c.gc = !1;
			var f = e.Function.createElement({
				name: "div",
				cssText: (d.enabled ? c.Qb : c.Rb) + "width:" + d.width + "px;height:" + c.ha + "px;line-height:" + c.ha + "px;cursor:" + (d.enabled ? "pointer;" : "default;")
			});
			c.h = f;
			a && (a = e.Function.checkFieldLength(a, 100), c.Xa(a), d.iconUrl && (a = '<table cellpadding="0"cellspacing="0"border="0"><tbody><tr><td height="' + d.iconSize[1] + 'px" width="' + d.iconSize[0] + 'px"><img src="' + d.iconUrl + '" style=" height: ' + d.iconSize[1] + "px; width:" + d.iconSize[0] + 'px;"/></td><td >&nbsp;' + a + "</td></tr></tbody></table>"), c.u = a, f.innerHTML = a);
			e.DOMEvents.prototype.initialize.apply(c, []);
			c.attachToElement([{
				name: e.Constants.MOUSE_OVER,
				element: f,
				callback: function (a) {
					e.Event.stop(a, !1);
					d.enabled && (f.style.backgroundColor = c.Db)
				},
				object: c
			}, {
				name: e.Constants.MOUSE_OUT,
				element: f,
				callback: function (a) {
					e.Event.stop(a, !1);
					d.enabled && (f.style.backgroundColor = c.Cb)
				},
				object: c
			}, {
				name: e.Constants.MOUSE_DOWN,
				element: f,
				callback: function (a) {
					e.Event.stop(a, !1);
					d.enabled && "function" == typeof d.callback && (c._close(null), d.callback(c.Hb))
				},
				object: c
			}])
		},
		setContent: function (a, b) {
			if (a && "string" == typeof a) {
				a = e.Function.checkFieldLength(a, 100);
				b = b || {};
				var c = b.iconUrl,
					d = b.iconSize,
					f = this.options;
				this.Xa(a);
				f.iconUrl = "string" == typeof c ? c : null;
				f.iconSize = d instanceof Array ? d : [25, 15];
				f.iconUrl && (a = '<table cellpadding="0"cellspacing="0"border="0"><tbody><tr><td height="' + f.iconSize[1] + 'px" width="' + f.iconSize[0] + 'px"><img src="' + f.iconUrl + '" style=" height: ' + f.iconSize[1] + "px; width:" + f.iconSize[0] + 'px;"/></td><td >&nbsp;' + a + "</td></tr></tbody></table>");
				this.h.innerHTML = a;
				this.options.content = a
			}
		},
		setCallback: function (a) {
			a && "function" == typeof a && (this.options.callback = a)
		},
		enabled: function (a) {
			"boolean" == typeof a && (this.options.enabled = a, this.h.style.cursor = a ? "pointer" : "default", this.h.style.color = a ? "#76766f" : "#d0d0d0")
		},
		getElement: s("h"),
		injectSeparator: q("separatorElement"),
		setPosition: q("Hb"),
		Xa: function (a) {
			a = e.Function.stringLength(a);
			this.h.style.height = this.ha * Math.ceil(12 * a / 2 / (this.options.width - 6)) + "px"
		}
	});
	e.dc = e.Class({
		width: null,
		enabled: null,
		oc: null,
		nc: null,
		ic: null
	});
	e.ContextMenu = e.Class(e.Events, e.DOMEvents, {
		w: {},
		Nb: "height:1px;width:100%;border-top:1;background-color:#CCCCCC;overflow:hidden;margin:1px 0px 1px 0px;",
		Pb: "-moz-user-select: none;position: absolute;border:1px solid #CCCCCC;padding:1px 1px 1px 1px;color:#000000;background-color:#ffffff;font-size:12px;display:none;z-index:1001; height:auto;border-radius: 3px 3px 3px 3px;font-size:12px;",
		initialize: function (a) {
			this.v = [];
			if (this._showLocation = "boolean" == typeof a ? a : !1) {
				a = new e.MenuItem("loading......", {
					enabled: !1
				}), this.v.push(a)
			}
			this._element = e.Function.createElement({
				name: "div",
				id: "contexMenu",
				cssText: this.Pb
			});
			e.Events.prototype.initialize.apply(this, []);
			e.DOMEvents.prototype.initialize.apply(this, [])
		},
		addItem: function (a) {
			this._position && a.setPosition(this._position);
			this.v.push(a);
			this._resetMenuItems()
		},
		getItem: function (a) {
			return this.v[a - 1]
		},
		removeItem: function (a) {
			if (!isNaN(a)) {
				a = parseInt(a - 1);
				var b = this.v[a];
				b && (this.$a(b.getElement()), this._element.removeChild(b.getElement()), b.isSeparator && b.separatorElement && this._element.removeChild(b.separatorElement), this.v.splice(a, 1), 0 == a && (this._showLocation = !1), this._resetMenuItems())
			}
		},
		addSeparator: function (a) {
			if (a = this.v[a - 1]) {
				a.isSeparator = !0, this._resetMenuItems()
			}
		},
		removeSeparator: function (a) {
			if (a = this.v[a - 1]) {
				a.isSeparator = !1, a._close = null, this._resetMenuItems()
			}
		},
		setMap: function (a) {
			!this._map && a && a instanceof e.Map ? (this._map = a, this.lb()) : !a && this._map && (this.Kb(), this._map = null)
		},
		_resetMenuItems: function () {
			var a = this._element,
				b, c = this.v;
			if (a) {
				for (; a.hasChildNodes();) {
					a.removeChild(a.firstChild)
				}
				for (var d = 0, f = c.length; d < f; ++d) {
					if (b = c[d], b.options.callback && (b._close = e.Function.bind(this._close, this)), a.appendChild(c[d].getElement()), b.isSeparator) {
						var g = this.yb();
						b.injectSeparator(g);
						a.appendChild(g)
					}
				}
			}
		},
		Ya: function (a) {
			var b = this._map;
			if (b) {
				var c = this._element,
					d = this.zb();
				c.style.width = d[0] + "px";
				var e = b.getSize(),
					g = e.height - a.y;
				c.style.left = e.width - a.x < d[0] ? b.getContainer().scrollLeft + a.x - d[0] + "px" : b.getContainer().scrollLeft + a.x + "px";
				c.style.top = g < d[1] ? b.getContainer().scrollTop + a.y - d[1] + "px" : b.getContainer().scrollTop + a.y + "px";
				c.style.display = "block"
			}
		},
		zb: function () {
			for (var a = 150, b = 23, c = this.v, d, e = 0, g = c.length; e < g; ++e) {
				d = c[e], d.options.width > a && (a = d.options.width), b += d.ha
			}
			return [a + 12, b]
		},
		yb: function () {
			return e.Function.createElement({
				name: "div",
				cssText: this.Nb
			})
		},
		Fb: function (a) {
			var b = this,
				c = a.containerPixel,
				d = b._map,
				f = a.lnglat,
				g = b.v;
			if (b._showLocation) {
				g[0].setContent("loading......");
				var h = function () {
					b._geocoder.getAddress(f, function (a, d) {
						1 == a || 0 == d.result.length ? g[0].setContent(f.toString()) : g[0].setContent(d.result[0].formatted_address);
						b.Ya(c)
					})
				};
				b._geocoder ? h() : d.pc(["IMAP.Geocoder"], function () {
					b._geocoder = new e.Geocoder;
					h()
				})
			}
			a = 0;
			for (var k = g.length; a < k; ++a) {
				g[a].setPosition(f)
			}
			b._position = f;
			b.Ya(c);
			b.triggerEvent(e.Constants.MENU_OPEN, {
				type: e.Constants.MENU_OPEN,
				lnglat: f,
				target: b
			});
			b.la || (b.attachToElement([{
				name: e.Constants.MOUSE_DOWN,
				element: document,
				callback: b._close,
				object: b
			}]), b.la = d.addEventListener(e.Constants.MOUSE_DOWN, b._close, b))
		},
		_close: function () {
			this.la && (this.detachToElement([{
				name: e.Constants.MOUSE_DOWN,
				element: document
			}]), this._map.removeEventListener(this.la), this.la = null);
			this._element.style.display = "none";
			this._position = null;
			this.triggerEvent(e.Constants.MENU_CLOSE, {
				type: e.Constants.MENU_CLOSE,
				target: this
			})
		},
		lb: function () {
			this._map.getContainer().appendChild(this._element);
			this.Zb = this._map.addEventListener(e.Constants.MOUSE_CONTEXTMENU, this.Fb, this)
		},
		Kb: function () {
			for (var a = this.v, b = 0, c = a.length; b < c; ++b) {
				this.$a(a[b].getElement())
			}
			this._map.getContainer().removeChild(this._element);
			this._map.removeEventListener(this.Zb)
		}
	})
})();

(function () {
	IMAP && IMAP.Marker && IMAP.Label && (IMAP.Marker.prototype.type = "marker", IMAP.Label.prototype.type = "marker");
	IMAP && IMAP.Circle && (IMAP.Circle.prototype.type = "cicle");
	IMAP && IMAP.Polyline && (IMAP.Polyline.prototype.type = "polyline");
	IMAP && IMAP.Polygon && (IMAP.Polygon.prototype.type = "polygon");
	IMAP.Map.prototype.setFitView = function (c) {
		var d, e, f, g;

		function h(a) {
			try {
				d = a.lng < d ? a.lng : d, e = a.lat < e ? a.lat : e, f = a.lng > f ? a.lng : f, g = a.lat > g ? a.lat : g
			} catch (b) {
				console.log("set fit view compare")
			}
		}
		c = c ? c : this.getOverlayLayer().getOverlays();;
		d = 180;
		e = 90;
		g = f = 0;
		var m = function (a, b, c) {
				return {
					lng: a.lng + 360 * Math.asin(Math.sin(b / 12756274) / Math.cos(a.lat * Math.PI / 180)) / Math.PI,
					lat: a.lat + 360 * Math.asin(c / 12756274) / Math.PI
				}
			},
			k;
		for (k in c) {
			var a = c[k];
			if (!a) return !1;
			if ("marker" == a.type) h(a.getPosition());
			else if ("circle" == a.type) {
				var b = a._center,
					l = a._radius,
					a = m(b, -l, -l),
					b = m(b, l, l);
				h(a);
				h(b)
			} else if ((b = a._path) && 0 < b.length)
				for (a = 0; a < b.length; a++) h(b[a])
		}
		k = new IMAP.LngLatBounds(new IMAP.LngLat(d, e), new IMAP.LngLat(f, g));
		this.setBounds(k)
	}
})();