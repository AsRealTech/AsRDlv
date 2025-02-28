(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [610], {
        2898: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return createLucideIcon
                }
            });
            var a = n(2265),
                o = {
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
            let toKebabCase = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
                createLucideIcon = (e, t) => {
                    let n = (0, a.forwardRef)(({
                        color: n = "currentColor",
                        size: i = 24,
                        strokeWidth: s = 2,
                        absoluteStrokeWidth: l,
                        children: d,
                        ...c
                    }, u) => (0, a.createElement)("svg", {
                        ref: u,
                        ...o,
                        width: i,
                        height: i,
                        stroke: n,
                        strokeWidth: l ? 24 * Number(s) / Number(i) : s,
                        className: `lucide lucide-${toKebabCase(e)}`,
                        ...c
                    }, [...t.map(([e, t]) => (0, a.createElement)(e, t)), ...(Array.isArray(d) ? d : [d]) || []]));
                    return n.displayName = `${e}`, n
                }
        },
        3523: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = n(2898);
            let o = (0, a.Z)("ChevronDown", [
                ["path", {
                    d: "m6 9 6 6 6-6",
                    key: "qrunsl"
                }]
            ])
        },
        8956: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = n(2898);
            let o = (0, a.Z)("Globe", [
                ["circle", {
                    cx: "12",
                    cy: "12",
                    r: "10",
                    key: "1mglay"
                }],
                ["path", {
                    d: "M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",
                    key: "13o1zl"
                }],
                ["path", {
                    d: "M2 12h20",
                    key: "9i4pu4"
                }]
            ])
        },
        8004: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = n(2898);
            let o = (0, a.Z)("Menu", [
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "12",
                    y2: "12",
                    key: "1e0a9i"
                }],
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "6",
                    y2: "6",
                    key: "1owob3"
                }],
                ["line", {
                    x1: "4",
                    x2: "20",
                    y1: "18",
                    y2: "18",
                    key: "yk5zj1"
                }]
            ])
        },
        1827: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = n(2898);
            let o = (0, a.Z)("Search", [
                ["circle", {
                    cx: "11",
                    cy: "11",
                    r: "8",
                    key: "4ej97u"
                }],
                ["path", {
                    d: "m21 21-4.3-4.3",
                    key: "1qie3q"
                }]
            ])
        },
        7972: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = n(2898);
            let o = (0, a.Z)("User", [
                ["path", {
                    d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",
                    key: "975kel"
                }],
                ["circle", {
                    cx: "12",
                    cy: "7",
                    r: "4",
                    key: "17ys0d"
                }]
            ])
        },
        2549: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return o
                }
            });
            var a = n(2898);
            let o = (0, a.Z)("X", [
                ["path", {
                    d: "M18 6 6 18",
                    key: "1bl5f8"
                }],
                ["path", {
                    d: "m6 6 12 12",
                    key: "d8bk6v"
                }]
            ])
        },
        413: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "Image", {
                enumerable: !0,
                get: function() {
                    return b
                }
            });
            let a = n(1024),
                o = n(8533),
                i = o._(n(2265)),
                s = a._(n(4887)),
                l = a._(n(5793)),
                d = n(7929),
                c = n(5751),
                u = n(7327);
            n(2637);
            let f = n(6304),
                p = a._(n(9950)),
                m = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    dangerouslyAllowSVG: !1,
                    unoptimized: !1
                };

            function handleLoading(e, t, n, a, o, i) {
                let s = null == e ? void 0 : e.src;
                if (!e || e["data-loaded-src"] === s) return;
                e["data-loaded-src"] = s;
                let l = "decode" in e ? e.decode() : Promise.resolve();
                l.catch(() => {}).then(() => {
                    if (e.parentElement && e.isConnected) {
                        if ("empty" !== t && o(!0), null == n ? void 0 : n.current) {
                            let t = new Event("load");
                            Object.defineProperty(t, "target", {
                                writable: !1,
                                value: e
                            });
                            let a = !1,
                                o = !1;
                            n.current({ ...t,
                                nativeEvent: t,
                                currentTarget: e,
                                target: e,
                                isDefaultPrevented: () => a,
                                isPropagationStopped: () => o,
                                persist: () => {},
                                preventDefault: () => {
                                    a = !0, t.preventDefault()
                                },
                                stopPropagation: () => {
                                    o = !0, t.stopPropagation()
                                }
                            })
                        }(null == a ? void 0 : a.current) && a.current(e)
                    }
                })
            }

            function getDynamicProps(e) {
                let [t, n] = i.version.split(".", 2), a = parseInt(t, 10), o = parseInt(n, 10);
                return a > 18 || 18 === a && o >= 3 ? {
                    fetchPriority: e
                } : {
                    fetchpriority: e
                }
            }
            let g = (0, i.forwardRef)((e, t) => {
                let {
                    src: n,
                    srcSet: a,
                    sizes: o,
                    height: s,
                    width: l,
                    decoding: d,
                    className: c,
                    style: u,
                    fetchPriority: f,
                    placeholder: p,
                    loading: m,
                    unoptimized: g,
                    fill: b,
                    onLoadRef: h,
                    onLoadingCompleteRef: y,
                    setBlurComplete: v,
                    setShowAltText: x,
                    onLoad: w,
                    onError: A,
                    ...$
                } = e;
                return i.default.createElement("img", { ...$,
                    ...getDynamicProps(f),
                    loading: m,
                    width: l,
                    height: s,
                    decoding: d,
                    "data-nimg": b ? "fill" : "1",
                    className: c,
                    style: u,
                    sizes: o,
                    srcSet: a,
                    src: n,
                    ref: (0, i.useCallback)(e => {
                        t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (A && (e.src = e.src), e.complete && handleLoading(e, p, h, y, v, g))
                    }, [n, p, h, y, v, A, g, t]),
                    onLoad: e => {
                        let t = e.currentTarget;
                        handleLoading(t, p, h, y, v, g)
                    },
                    onError: e => {
                        x(!0), "empty" !== p && v(!0), A && A(e)
                    }
                })
            });

            function ImagePreload(e) {
                let {
                    isAppRouter: t,
                    imgAttributes: n
                } = e, a = {
                    as: "image",
                    imageSrcSet: n.srcSet,
                    imageSizes: n.sizes,
                    crossOrigin: n.crossOrigin,
                    referrerPolicy: n.referrerPolicy,
                    ...getDynamicProps(n.fetchPriority)
                };
                return t && s.default.preload ? (s.default.preload(n.src, a), null) : i.default.createElement(l.default, null, i.default.createElement("link", {
                    key: "__nimg-" + n.src + n.srcSet + n.sizes,
                    rel: "preload",
                    href: n.srcSet ? void 0 : n.src,
                    ...a
                }))
            }
            let b = (0, i.forwardRef)((e, t) => {
                let n = (0, i.useContext)(f.RouterContext),
                    a = (0, i.useContext)(u.ImageConfigContext),
                    o = (0, i.useMemo)(() => {
                        let e = m || a || c.imageConfigDefault,
                            t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                            n = e.deviceSizes.sort((e, t) => e - t);
                        return { ...e,
                            allSizes: t,
                            deviceSizes: n
                        }
                    }, [a]),
                    {
                        onLoad: s,
                        onLoadingComplete: l
                    } = e,
                    b = (0, i.useRef)(s);
                (0, i.useEffect)(() => {
                    b.current = s
                }, [s]);
                let h = (0, i.useRef)(l);
                (0, i.useEffect)(() => {
                    h.current = l
                }, [l]);
                let [y, v] = (0, i.useState)(!1), [x, w] = (0, i.useState)(!1), {
                    props: A,
                    meta: $
                } = (0, d.getImgProps)(e, {
                    defaultLoader: p.default,
                    imgConf: o,
                    blurComplete: y,
                    showAltText: x
                });
                return i.default.createElement(i.default.Fragment, null, i.default.createElement(g, { ...A,
                    unoptimized: $.unoptimized,
                    placeholder: $.placeholder,
                    fill: $.fill,
                    onLoadRef: b,
                    onLoadingCompleteRef: h,
                    setBlurComplete: v,
                    setShowAltText: w,
                    ref: t
                }), $.priority ? i.default.createElement(ImagePreload, {
                    isAppRouter: !n,
                    imgAttributes: A
                }) : null)
            });
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        8569: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "AmpStateContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let a = n(1024),
                o = a._(n(2265)),
                i = o.default.createContext({})
        },
        4472: function(e, t) {
            "use strict";

            function isInAmpMode(e) {
                let {
                    ampFirst: t = !1,
                    hybrid: n = !1,
                    hasQuery: a = !1
                } = void 0 === e ? {} : e;
                return t || n && a
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "isInAmpMode", {
                enumerable: !0,
                get: function() {
                    return isInAmpMode
                }
            })
        },
        7929: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImgProps", {
                enumerable: !0,
                get: function() {
                    return getImgProps
                }
            }), n(2637);
            let a = n(1511),
                o = n(5751);

            function isStaticRequire(e) {
                return void 0 !== e.default
            }

            function isStaticImageData(e) {
                return void 0 !== e.src
            }

            function isStaticImport(e) {
                return "object" == typeof e && (isStaticRequire(e) || isStaticImageData(e))
            }

            function getInt(e) {
                return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
            }

            function getWidths(e, t, n) {
                let {
                    deviceSizes: a,
                    allSizes: o
                } = e;
                if (n) {
                    let e = /(^|\s)(1?\d?\d)vw/g,
                        t = [];
                    for (let a; a = e.exec(n); a) t.push(parseInt(a[2]));
                    if (t.length) {
                        let e = .01 * Math.min(...t);
                        return {
                            widths: o.filter(t => t >= a[0] * e),
                            kind: "w"
                        }
                    }
                    return {
                        widths: o,
                        kind: "w"
                    }
                }
                if ("number" != typeof t) return {
                    widths: a,
                    kind: "w"
                };
                let i = [...new Set([t, 2 * t].map(e => o.find(t => t >= e) || o[o.length - 1]))];
                return {
                    widths: i,
                    kind: "x"
                }
            }

            function generateImgAttrs(e) {
                let {
                    config: t,
                    src: n,
                    unoptimized: a,
                    width: o,
                    quality: i,
                    sizes: s,
                    loader: l
                } = e;
                if (a) return {
                    src: n,
                    srcSet: void 0,
                    sizes: void 0
                };
                let {
                    widths: d,
                    kind: c
                } = getWidths(t, o, s), u = d.length - 1;
                return {
                    sizes: s || "w" !== c ? s : "100vw",
                    srcSet: d.map((e, a) => l({
                        config: t,
                        src: n,
                        quality: i,
                        width: e
                    }) + " " + ("w" === c ? e : a + 1) + c).join(", "),
                    src: l({
                        config: t,
                        src: n,
                        quality: i,
                        width: d[u]
                    })
                }
            }

            function getImgProps(e, t) {
                let n, i, s, {
                        src: l,
                        sizes: d,
                        unoptimized: c = !1,
                        priority: u = !1,
                        loading: f,
                        className: p,
                        quality: m,
                        width: g,
                        height: b,
                        fill: h = !1,
                        style: y,
                        onLoad: v,
                        onLoadingComplete: x,
                        placeholder: w = "empty",
                        blurDataURL: A,
                        fetchPriority: $,
                        layout: S,
                        objectFit: E,
                        objectPosition: C,
                        lazyBoundary: k,
                        lazyRoot: _,
                        ...N
                    } = e,
                    {
                        imgConf: I,
                        showAltText: P,
                        blurComplete: M,
                        defaultLoader: z
                    } = t,
                    T = I || o.imageConfigDefault;
                if ("allSizes" in T) n = T;
                else {
                    let e = [...T.deviceSizes, ...T.imageSizes].sort((e, t) => e - t),
                        t = T.deviceSizes.sort((e, t) => e - t);
                    n = { ...T,
                        allSizes: e,
                        deviceSizes: t
                    }
                }
                let R = N.loader || z;
                delete N.loader, delete N.srcSet;
                let O = "__next_img_default" in R;
                if (O) {
                    if ("custom" === n.loader) throw Error('Image with src "' + l + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
                } else {
                    let e = R;
                    R = t => {
                        let {
                            config: n,
                            ...a
                        } = t;
                        return e(a)
                    }
                }
                if (S) {
                    "fill" === S && (h = !0);
                    let e = {
                        intrinsic: {
                            maxWidth: "100%",
                            height: "auto"
                        },
                        responsive: {
                            width: "100%",
                            height: "auto"
                        }
                    }[S];
                    e && (y = { ...y,
                        ...e
                    });
                    let t = {
                        responsive: "100vw",
                        fill: "100vw"
                    }[S];
                    t && !d && (d = t)
                }
                let j = "",
                    L = getInt(g),
                    V = getInt(b);
                if (isStaticImport(l)) {
                    let e = isStaticRequire(l) ? l.default : l;
                    if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
                    if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
                    if (i = e.blurWidth, s = e.blurHeight, A = A || e.blurDataURL, j = e.src, !h) {
                        if (L || V) {
                            if (L && !V) {
                                let t = L / e.width;
                                V = Math.round(e.height * t)
                            } else if (!L && V) {
                                let t = V / e.height;
                                L = Math.round(e.width * t)
                            }
                        } else L = e.width, V = e.height
                    }
                }
                let W = !u && ("lazy" === f || void 0 === f);
                (!(l = "string" == typeof l ? l : j) || l.startsWith("data:") || l.startsWith("blob:")) && (c = !0, W = !1), n.unoptimized && (c = !0), O && l.endsWith(".svg") && !n.dangerouslyAllowSVG && (c = !0), u && ($ = "high");
                let D = getInt(m),
                    U = Object.assign(h ? {
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                        objectFit: E,
                        objectPosition: C
                    } : {}, P ? {} : {
                        color: "transparent"
                    }, y),
                    B = M || "empty" === w ? null : "blur" === w ? 'url("data:image/svg+xml;charset=utf-8,' + (0, a.getImageBlurSvg)({
                        widthInt: L,
                        heightInt: V,
                        blurWidth: i,
                        blurHeight: s,
                        blurDataURL: A || "",
                        objectFit: U.objectFit
                    }) + '")' : 'url("' + w + '")',
                    G = B ? {
                        backgroundSize: U.objectFit || "cover",
                        backgroundPosition: U.objectPosition || "50% 50%",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: B
                    } : {},
                    Y = generateImgAttrs({
                        config: n,
                        src: l,
                        unoptimized: c,
                        width: L,
                        quality: D,
                        sizes: d,
                        loader: R
                    }),
                    H = { ...N,
                        loading: W ? "lazy" : f,
                        fetchPriority: $,
                        width: L,
                        height: V,
                        decoding: "async",
                        className: p,
                        style: { ...U,
                            ...G
                        },
                        sizes: Y.sizes,
                        srcSet: Y.srcSet,
                        src: Y.src
                    },
                    Z = {
                        unoptimized: c,
                        priority: u,
                        placeholder: w,
                        fill: h
                    };
                return {
                    props: H,
                    meta: Z
                }
            }
        },
        5793: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    defaultHead: function() {
                        return defaultHead
                    },
                    default: function() {
                        return f
                    }
                });
            let a = n(1024),
                o = n(8533),
                i = o._(n(2265)),
                s = a._(n(110)),
                l = n(8569),
                d = n(1852),
                c = n(4472);

            function defaultHead(e) {
                void 0 === e && (e = !1);
                let t = [i.default.createElement("meta", {
                    charSet: "utf-8"
                })];
                return e || t.push(i.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function onlyReactElement(e, t) {
                return "string" == typeof t || "number" == typeof t ? e : t.type === i.default.Fragment ? e.concat(i.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
            }
            n(2637);
            let u = ["name", "httpEquiv", "charSet", "itemProp"];

            function unique() {
                let e = new Set,
                    t = new Set,
                    n = new Set,
                    a = {};
                return o => {
                    let i = !0,
                        s = !1;
                    if (o.key && "number" != typeof o.key && o.key.indexOf("$") > 0) {
                        s = !0;
                        let t = o.key.slice(o.key.indexOf("$") + 1);
                        e.has(t) ? i = !1 : e.add(t)
                    }
                    switch (o.type) {
                        case "title":
                        case "base":
                            t.has(o.type) ? i = !1 : t.add(o.type);
                            break;
                        case "meta":
                            for (let e = 0, t = u.length; e < t; e++) {
                                let t = u[e];
                                if (o.props.hasOwnProperty(t)) {
                                    if ("charSet" === t) n.has(t) ? i = !1 : n.add(t);
                                    else {
                                        let e = o.props[t],
                                            n = a[t] || new Set;
                                        ("name" !== t || !s) && n.has(e) ? i = !1 : (n.add(e), a[t] = n)
                                    }
                                }
                            }
                    }
                    return i
                }
            }

            function reduceComponents(e, t) {
                let {
                    inAmpMode: n
                } = t;
                return e.reduce(onlyReactElement, []).reverse().concat(defaultHead(n).reverse()).filter(unique()).reverse().map((e, t) => {
                    let a = e.key || t;
                    if (!n && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
                        let t = { ...e.props || {}
                        };
                        return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, i.default.cloneElement(e, t)
                    }
                    return i.default.cloneElement(e, {
                        key: a
                    })
                })
            }

            function Head(e) {
                let {
                    children: t
                } = e, n = (0, i.useContext)(l.AmpStateContext), a = (0, i.useContext)(d.HeadManagerContext);
                return i.default.createElement(s.default, {
                    reduceComponentsToState: reduceComponents,
                    headManager: a,
                    inAmpMode: (0, c.isInAmpMode)(n)
                }, t)
            }
            let f = Head;
            ("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
                value: !0
            }), Object.assign(t.default, t), e.exports = t.default)
        },
        1511: function(e, t) {
            "use strict";

            function getImageBlurSvg(e) {
                let {
                    widthInt: t,
                    heightInt: n,
                    blurWidth: a,
                    blurHeight: o,
                    blurDataURL: i,
                    objectFit: s
                } = e, l = a ? 40 * a : t, d = o ? 40 * o : n, c = l && d ? "viewBox='0 0 " + l + " " + d + "'" : "";
                return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + c + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (c ? "none" : "contain" === s ? "xMidYMid" : "cover" === s ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + i + "'/%3E%3C/svg%3E"
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "getImageBlurSvg", {
                enumerable: !0,
                get: function() {
                    return getImageBlurSvg
                }
            })
        },
        7327: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "ImageConfigContext", {
                enumerable: !0,
                get: function() {
                    return s
                }
            });
            let a = n(1024),
                o = a._(n(2265)),
                i = n(5751),
                s = o.default.createContext(i.imageConfigDefault)
        },
        5751: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    VALID_LOADERS: function() {
                        return n
                    },
                    imageConfigDefault: function() {
                        return a
                    }
                });
            let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
                a = {
                    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                    path: "/_next/image",
                    loader: "default",
                    loaderFile: "",
                    domains: [],
                    disableStaticImages: !1,
                    minimumCacheTTL: 60,
                    formats: ["image/webp"],
                    dangerouslyAllowSVG: !1,
                    contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
                    contentDispositionType: "inline",
                    remotePatterns: [],
                    unoptimized: !1
                }
        },
        679: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var n in t) Object.defineProperty(e, n, {
                        enumerable: !0,
                        get: t[n]
                    })
                }(t, {
                    unstable_getImgProps: function() {
                        return unstable_getImgProps
                    },
                    default: function() {
                        return d
                    }
                });
            let a = n(1024),
                o = n(7929),
                i = n(2637),
                s = n(413),
                l = a._(n(9950)),
                unstable_getImgProps = e => {
                    (0, i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: t
                    } = (0, o.getImgProps)(e, {
                        defaultLoader: l.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/_next/image",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !1
                        }
                    });
                    for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
                    return {
                        props: t
                    }
                },
                d = s.Image
        },
        9950: function(e, t) {
            "use strict";

            function defaultLoader(e) {
                let {
                    config: t,
                    src: n,
                    width: a,
                    quality: o
                } = e;
                return t.path + "?url=" + encodeURIComponent(n) + "&w=" + a + "&q=" + (o || 75)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return n
                }
            }), defaultLoader.__next_img_default = !0;
            let n = defaultLoader
        },
        6304: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "RouterContext", {
                enumerable: !0,
                get: function() {
                    return i
                }
            });
            let a = n(1024),
                o = a._(n(2265)),
                i = o.default.createContext(null)
        },
        110: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "default", {
                enumerable: !0,
                get: function() {
                    return SideEffect
                }
            });
            let a = n(2265),
                o = a.useLayoutEffect,
                i = a.useEffect;

            function SideEffect(e) {
                let {
                    headManager: t,
                    reduceComponentsToState: n
                } = e;

                function emitChange() {
                    if (t && t.mountedInstances) {
                        let o = a.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                        t.updateHead(n(o, e))
                    }
                }
                return o(() => {
                    var n;
                    return null == t || null == (n = t.mountedInstances) || n.add(e.children), () => {
                        var n;
                        null == t || null == (n = t.mountedInstances) || n.delete(e.children)
                    }
                }), o(() => (t && (t._pendingUpdate = emitChange), () => {
                    t && (t._pendingUpdate = emitChange)
                })), i(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
                    t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
                })), null
            }
        },
        2637: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "warnOnce", {
                enumerable: !0,
                get: function() {
                    return warnOnce
                }
            });
            let warnOnce = e => {}
        },
        622: function(e, t, n) {
            "use strict";
            /**
             * @license React
             * react-jsx-runtime.production.min.js
             *
             * Copyright (c) Meta Platforms, Inc. and affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var a = n(2265),
                o = Symbol.for("react.element"),
                i = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                l = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                d = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function q(e, t, n) {
                var a, i = {},
                    c = null,
                    u = null;
                for (a in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (u = t.ref), t) s.call(t, a) && !d.hasOwnProperty(a) && (i[a] = t[a]);
                if (e && e.defaultProps)
                    for (a in t = e.defaultProps) void 0 === i[a] && (i[a] = t[a]);
                return {
                    $$typeof: o,
                    type: e,
                    key: c,
                    ref: u,
                    props: i,
                    _owner: l.current
                }
            }
            t.Fragment = i, t.jsx = q, t.jsxs = q
        },
        7437: function(e, t, n) {
            "use strict";
            e.exports = n(622)
        },
        6691: function(e, t, n) {
            e.exports = n(679)
        },
        756: function(e, t, n) {
            "use strict";

            function _extends() {
                return (_extends = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                    }
                    return e
                }).apply(this, arguments)
            }
            n.d(t, {
                VY: function() {
                    return et
                },
                h4: function() {
                    return Q
                },
                ck: function() {
                    return X
                },
                fC: function() {
                    return J
                },
                xz: function() {
                    return ee
                }
            });
            var a = n(2265),
                o = n.t(a, 2);

            function $c512c27ab02ef895$export$50c7b4e9d9f19c1(e, t = []) {
                let n = [];

                function $c512c27ab02ef895$export$fd42f52fd3ae1109(t, o) {
                    let i = (0, a.createContext)(o),
                        s = n.length;

                    function Provider(t) {
                        let {
                            scope: n,
                            children: o,
                            ...l
                        } = t, d = (null == n ? void 0 : n[e][s]) || i, c = (0, a.useMemo)(() => l, Object.values(l));
                        return (0, a.createElement)(d.Provider, {
                            value: c
                        }, o)
                    }

                    function useContext(n, l) {
                        let d = (null == l ? void 0 : l[e][s]) || i,
                            c = (0, a.useContext)(d);
                        if (c) return c;
                        if (void 0 !== o) return o;
                        throw Error(`\`${n}\` must be used within \`${t}\``)
                    }
                    return n = [...n, o], Provider.displayName = t + "Provider", [Provider, useContext]
                }
                let createScope = () => {
                    let t = n.map(e => (0, a.createContext)(e));
                    return function(n) {
                        let o = (null == n ? void 0 : n[e]) || t;
                        return (0, a.useMemo)(() => ({
                            [`__scope${e}`]: { ...n,
                                [e]: o
                            }
                        }), [n, o])
                    }
                };
                return createScope.scopeName = e, [$c512c27ab02ef895$export$fd42f52fd3ae1109, $c512c27ab02ef895$var$composeContextScopes(createScope, ...t)]
            }

            function $c512c27ab02ef895$var$composeContextScopes(...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let createScope1 = () => {
                    let n = e.map(e => ({
                        useScope: e(),
                        scopeName: e.scopeName
                    }));
                    return function(e) {
                        let o = n.reduce((t, {
                            useScope: n,
                            scopeName: a
                        }) => {
                            let o = n(e),
                                i = o[`__scope${a}`];
                            return { ...t,
                                ...i
                            }
                        }, {});
                        return (0, a.useMemo)(() => ({
                            [`__scope${t.scopeName}`]: o
                        }), [o])
                    }
                };
                return createScope1.scopeName = t.scopeName, createScope1
            }

            function $6ed0406888f73fc4$var$setRef(e, t) {
                "function" == typeof e ? e(t) : null != e && (e.current = t)
            }

            function $6ed0406888f73fc4$export$43e446d32b3d21af(...e) {
                return t => e.forEach(e => $6ed0406888f73fc4$var$setRef(e, t))
            }

            function $6ed0406888f73fc4$export$c7b2cbe3552a0d05(...e) {
                return (0, a.useCallback)($6ed0406888f73fc4$export$43e446d32b3d21af(...e), e)
            }
            let i = (0, a.forwardRef)((e, t) => {
                let {
                    children: n,
                    ...o
                } = e, i = a.Children.toArray(n), l = i.find($5e63c961fc1ce211$var$isSlottable);
                if (l) {
                    let e = l.props.children,
                        n = i.map(t => t !== l ? t : a.Children.count(e) > 1 ? a.Children.only(null) : (0, a.isValidElement)(e) ? e.props.children : null);
                    return (0, a.createElement)(s, _extends({}, o, {
                        ref: t
                    }), (0, a.isValidElement)(e) ? (0, a.cloneElement)(e, void 0, n) : null)
                }
                return (0, a.createElement)(s, _extends({}, o, {
                    ref: t
                }), n)
            });
            i.displayName = "Slot";
            let s = (0, a.forwardRef)((e, t) => {
                let {
                    children: n,
                    ...o
                } = e;
                return (0, a.isValidElement)(n) ? (0, a.cloneElement)(n, { ...$5e63c961fc1ce211$var$mergeProps(o, n.props),
                    ref: t ? $6ed0406888f73fc4$export$43e446d32b3d21af(t, n.ref) : n.ref
                }) : a.Children.count(n) > 1 ? a.Children.only(null) : null
            });
            s.displayName = "SlotClone";
            let $5e63c961fc1ce211$export$d9f1ccf0bdb05d45 = ({
                children: e
            }) => (0, a.createElement)(a.Fragment, null, e);

            function $5e63c961fc1ce211$var$isSlottable(e) {
                return (0, a.isValidElement)(e) && e.type === $5e63c961fc1ce211$export$d9f1ccf0bdb05d45
            }

            function $5e63c961fc1ce211$var$mergeProps(e, t) {
                let n = { ...t
                };
                for (let a in t) {
                    let o = e[a],
                        i = t[a],
                        s = /^on[A-Z]/.test(a);
                    s ? o && i ? n[a] = (...e) => {
                        i(...e), o(...e)
                    } : o && (n[a] = o) : "style" === a ? n[a] = { ...o,
                        ...i
                    } : "className" === a && (n[a] = [o, i].filter(Boolean).join(" "))
                }
                return { ...e,
                    ...n
                }
            }

            function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(e) {
                let t = e + "CollectionProvider",
                    [n, o] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(t),
                    [s, l] = n(t, {
                        collectionRef: {
                            current: null
                        },
                        itemMap: new Map
                    }),
                    d = e + "CollectionSlot",
                    c = a.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o
                        } = e, s = l(d, n), c = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(t, s.collectionRef);
                        return a.createElement(i, {
                            ref: c
                        }, o)
                    }),
                    u = e + "CollectionItemSlot",
                    f = "data-radix-collection-item",
                    p = a.forwardRef((e, t) => {
                        let {
                            scope: n,
                            children: o,
                            ...s
                        } = e, d = a.useRef(null), c = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(t, d), p = l(u, n);
                        return a.useEffect(() => (p.itemMap.set(d, {
                            ref: d,
                            ...s
                        }), () => void p.itemMap.delete(d))), a.createElement(i, {
                            [f]: "",
                            ref: c
                        }, o)
                    });
                return [{
                    Provider: e => {
                        let {
                            scope: t,
                            children: n
                        } = e, o = a.useRef(null), i = a.useRef(new Map).current;
                        return a.createElement(s, {
                            scope: t,
                            itemMap: i,
                            collectionRef: o
                        }, n)
                    },
                    Slot: c,
                    ItemSlot: p
                }, function(t) {
                    let n = l(e + "CollectionConsumer", t),
                        o = a.useCallback(() => {
                            let e = n.collectionRef.current;
                            if (!e) return [];
                            let t = Array.from(e.querySelectorAll(`[${f}]`)),
                                a = Array.from(n.itemMap.values()),
                                o = a.sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current));
                            return o
                        }, [n.collectionRef, n.itemMap]);
                    return o
                }, o]
            }

            function $e42e1063c40fb3ef$export$b9ecd428b558ff10(e, t, {
                checkForDefaultPrevented: n = !0
            } = {}) {
                return function(a) {
                    if (null == e || e(a), !1 === n || !a.defaultPrevented) return null == t ? void 0 : t(a)
                }
            }

            function $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(e) {
                let t = (0, a.useRef)(e);
                return (0, a.useEffect)(() => {
                    t.current = e
                }), (0, a.useMemo)(() => (...e) => {
                    var n;
                    return null === (n = t.current) || void 0 === n ? void 0 : n.call(t, ...e)
                }, [])
            }

            function $71cd76cc60e0454e$export$6f32135080cb4c3({
                prop: e,
                defaultProp: t,
                onChange: n = () => {}
            }) {
                let [o, i] = $71cd76cc60e0454e$var$useUncontrolledState({
                    defaultProp: t,
                    onChange: n
                }), s = void 0 !== e, l = s ? e : o, d = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(n), c = (0, a.useCallback)(t => {
                    if (s) {
                        let n = "function" == typeof t ? t(e) : t;
                        n !== e && d(n)
                    } else i(t)
                }, [s, e, i, d]);
                return [l, c]
            }

            function $71cd76cc60e0454e$var$useUncontrolledState({
                defaultProp: e,
                onChange: t
            }) {
                let n = (0, a.useState)(e),
                    [o] = n,
                    i = (0, a.useRef)(o),
                    s = $b1b2314f5f9a1d84$export$25bec8c6f54ee79a(t);
                return (0, a.useEffect)(() => {
                    i.current !== o && (s(o), i.current = o)
                }, [o, i, s]), n
            }
            var l = n(4887);
            let d = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"].reduce((e, t) => {
                    let n = (0, a.forwardRef)((e, n) => {
                        let {
                            asChild: o,
                            ...s
                        } = e, l = o ? i : t;
                        return (0, a.useEffect)(() => {
                            window[Symbol.for("radix-ui")] = !0
                        }, []), (0, a.createElement)(l, _extends({}, s, {
                            ref: n
                        }))
                    });
                    return n.displayName = `Primitive.${t}`, { ...e,
                        [t]: n
                    }
                }, {}),
                c = (null == globalThis ? void 0 : globalThis.document) ? a.useLayoutEffect : () => {};

            function $fe963b355347cc68$export$3e6543de14f8614f(e, t) {
                return (0, a.useReducer)((e, n) => {
                    let a = t[e][n];
                    return null != a ? a : e
                }, e)
            }
            let $921a889cee6df7e8$export$99c2b779aa4e8b8b = e => {
                let {
                    present: t,
                    children: n
                } = e, o = $921a889cee6df7e8$var$usePresence(t), i = "function" == typeof n ? n({
                    present: o.isPresent
                }) : a.Children.only(n), s = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(o.ref, i.ref), l = "function" == typeof n;
                return l || o.isPresent ? (0, a.cloneElement)(i, {
                    ref: s
                }) : null
            };

            function $921a889cee6df7e8$var$usePresence(e) {
                let [t, n] = (0, a.useState)(), o = (0, a.useRef)({}), i = (0, a.useRef)(e), s = (0, a.useRef)("none"), d = e ? "mounted" : "unmounted", [u, f] = $fe963b355347cc68$export$3e6543de14f8614f(d, {
                    mounted: {
                        UNMOUNT: "unmounted",
                        ANIMATION_OUT: "unmountSuspended"
                    },
                    unmountSuspended: {
                        MOUNT: "mounted",
                        ANIMATION_END: "unmounted"
                    },
                    unmounted: {
                        MOUNT: "mounted"
                    }
                });
                return (0, a.useEffect)(() => {
                    let e = $921a889cee6df7e8$var$getAnimationName(o.current);
                    s.current = "mounted" === u ? e : "none"
                }, [u]), c(() => {
                    let t = o.current,
                        n = i.current,
                        a = n !== e;
                    if (a) {
                        let a = s.current,
                            o = $921a889cee6df7e8$var$getAnimationName(t);
                        e ? f("MOUNT") : "none" === o || (null == t ? void 0 : t.display) === "none" ? f("UNMOUNT") : n && a !== o ? f("ANIMATION_OUT") : f("UNMOUNT"), i.current = e
                    }
                }, [e, f]), c(() => {
                    if (t) {
                        let handleAnimationEnd = e => {
                                let n = $921a889cee6df7e8$var$getAnimationName(o.current),
                                    a = n.includes(e.animationName);
                                e.target === t && a && (0, l.flushSync)(() => f("ANIMATION_END"))
                            },
                            handleAnimationStart = e => {
                                e.target === t && (s.current = $921a889cee6df7e8$var$getAnimationName(o.current))
                            };
                        return t.addEventListener("animationstart", handleAnimationStart), t.addEventListener("animationcancel", handleAnimationEnd), t.addEventListener("animationend", handleAnimationEnd), () => {
                            t.removeEventListener("animationstart", handleAnimationStart), t.removeEventListener("animationcancel", handleAnimationEnd), t.removeEventListener("animationend", handleAnimationEnd)
                        }
                    }
                    f("ANIMATION_END")
                }, [t, f]), {
                    isPresent: ["mounted", "unmountSuspended"].includes(u),
                    ref: (0, a.useCallback)(e => {
                        e && (o.current = getComputedStyle(e)), n(e)
                    }, [])
                }
            }

            function $921a889cee6df7e8$var$getAnimationName(e) {
                return (null == e ? void 0 : e.animationName) || "none"
            }
            $921a889cee6df7e8$export$99c2b779aa4e8b8b.displayName = "Presence";
            let u = o["useId".toString()] || (() => void 0),
                f = 0;

            function $1746a345f3d73bb7$export$f680877a34711e37(e) {
                let [t, n] = a.useState(u());
                return c(() => {
                    e || n(e => null != e ? e : String(f++))
                }, [e]), e || (t ? `radix-${t}` : "")
            }
            let p = "Collapsible",
                [m, g] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(p),
                [b, h] = m(p),
                y = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: n,
                        open: o,
                        defaultOpen: i,
                        disabled: s,
                        onOpenChange: l,
                        ...c
                    } = e, [u = !1, f] = $71cd76cc60e0454e$export$6f32135080cb4c3({
                        prop: o,
                        defaultProp: i,
                        onChange: l
                    });
                    return (0, a.createElement)(b, {
                        scope: n,
                        disabled: s,
                        contentId: $1746a345f3d73bb7$export$f680877a34711e37(),
                        open: u,
                        onOpenToggle: (0, a.useCallback)(() => f(e => !e), [f])
                    }, (0, a.createElement)(d.div, _extends({
                        "data-state": $409067139f391064$var$getState(u),
                        "data-disabled": s ? "" : void 0
                    }, c, {
                        ref: t
                    })))
                }),
                v = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: n,
                        ...o
                    } = e, i = h("CollapsibleTrigger", n);
                    return (0, a.createElement)(d.button, _extends({
                        type: "button",
                        "aria-controls": i.contentId,
                        "aria-expanded": i.open || !1,
                        "data-state": $409067139f391064$var$getState(i.open),
                        "data-disabled": i.disabled ? "" : void 0,
                        disabled: i.disabled
                    }, o, {
                        ref: t,
                        onClick: $e42e1063c40fb3ef$export$b9ecd428b558ff10(e.onClick, i.onOpenToggle)
                    }))
                }),
                x = "CollapsibleContent",
                w = (0, a.forwardRef)((e, t) => {
                    let {
                        forceMount: n,
                        ...o
                    } = e, i = h(x, e.__scopeCollapsible);
                    return (0, a.createElement)($921a889cee6df7e8$export$99c2b779aa4e8b8b, {
                        present: n || i.open
                    }, ({
                        present: e
                    }) => (0, a.createElement)(A, _extends({}, o, {
                        ref: t,
                        present: e
                    })))
                }),
                A = (0, a.forwardRef)((e, t) => {
                    let {
                        __scopeCollapsible: n,
                        present: o,
                        children: i,
                        ...s
                    } = e, l = h(x, n), [u, f] = (0, a.useState)(o), p = (0, a.useRef)(null), m = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(t, p), g = (0, a.useRef)(0), b = g.current, y = (0, a.useRef)(0), v = y.current, w = l.open || u, A = (0, a.useRef)(w), $ = (0, a.useRef)();
                    return (0, a.useEffect)(() => {
                        let e = requestAnimationFrame(() => A.current = !1);
                        return () => cancelAnimationFrame(e)
                    }, []), c(() => {
                        let e = p.current;
                        if (e) {
                            $.current = $.current || {
                                transitionDuration: e.style.transitionDuration,
                                animationName: e.style.animationName
                            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
                            let t = e.getBoundingClientRect();
                            g.current = t.height, y.current = t.width, A.current || (e.style.transitionDuration = $.current.transitionDuration, e.style.animationName = $.current.animationName), f(o)
                        }
                    }, [l.open, o]), (0, a.createElement)(d.div, _extends({
                        "data-state": $409067139f391064$var$getState(l.open),
                        "data-disabled": l.disabled ? "" : void 0,
                        id: l.contentId,
                        hidden: !w
                    }, s, {
                        ref: m,
                        style: {
                            "--radix-collapsible-content-height": b ? `${b}px` : void 0,
                            "--radix-collapsible-content-width": v ? `${v}px` : void 0,
                            ...e.style
                        }
                    }), w && i)
                });

            function $409067139f391064$var$getState(e) {
                return e ? "open" : "closed"
            }
            let $ = (0, a.createContext)(void 0);

            function $f631663db3294ace$export$b39126d51d94e6f3(e) {
                let t = (0, a.useContext)($);
                return e || t || "ltr"
            }
            let S = "Accordion",
                E = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
                [C, k, _] = $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(S),
                [N, I] = $c512c27ab02ef895$export$50c7b4e9d9f19c1(S, [_, g]),
                P = g(),
                M = a.forwardRef((e, t) => {
                    let {
                        type: n,
                        ...o
                    } = e;
                    return a.createElement(C.Provider, {
                        scope: e.__scopeAccordion
                    }, "multiple" === n ? a.createElement(L, _extends({}, o, {
                        ref: t
                    })) : a.createElement(j, _extends({}, o, {
                        ref: t
                    })))
                });
            M.propTypes = {
                type(e) {
                    let t = e.value || e.defaultValue;
                    return e.type && !["single", "multiple"].includes(e.type) ? Error("Invalid prop `type` supplied to `Accordion`. Expected one of `single | multiple`.") : "multiple" === e.type && "string" == typeof t ? Error("Invalid prop `type` supplied to `Accordion`. Expected `single` when `defaultValue` or `value` is type `string`.") : "single" === e.type && Array.isArray(t) ? Error("Invalid prop `type` supplied to `Accordion`. Expected `multiple` when `defaultValue` or `value` is type `string[]`.") : null
                }
            };
            let [z, T] = N(S), [R, O] = N(S, {
                collapsible: !1
            }), j = a.forwardRef((e, t) => {
                let {
                    value: n,
                    defaultValue: o,
                    onValueChange: i = () => {},
                    collapsible: s = !1,
                    ...l
                } = e, [d, c] = $71cd76cc60e0454e$export$6f32135080cb4c3({
                    prop: n,
                    defaultProp: o,
                    onChange: i
                });
                return a.createElement(z, {
                    scope: e.__scopeAccordion,
                    value: d ? [d] : [],
                    onItemOpen: c,
                    onItemClose: a.useCallback(() => s && c(""), [s, c])
                }, a.createElement(R, {
                    scope: e.__scopeAccordion,
                    collapsible: s
                }, a.createElement(D, _extends({}, l, {
                    ref: t
                }))))
            }), L = a.forwardRef((e, t) => {
                let {
                    value: n,
                    defaultValue: o,
                    onValueChange: i = () => {},
                    ...s
                } = e, [l = [], d] = $71cd76cc60e0454e$export$6f32135080cb4c3({
                    prop: n,
                    defaultProp: o,
                    onChange: i
                }), c = a.useCallback(e => d((t = []) => [...t, e]), [d]), u = a.useCallback(e => d((t = []) => t.filter(t => t !== e)), [d]);
                return a.createElement(z, {
                    scope: e.__scopeAccordion,
                    value: l,
                    onItemOpen: c,
                    onItemClose: u
                }, a.createElement(R, {
                    scope: e.__scopeAccordion,
                    collapsible: !0
                }, a.createElement(D, _extends({}, s, {
                    ref: t
                }))))
            }), [V, W] = N(S), D = a.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    disabled: o,
                    dir: i,
                    orientation: s = "vertical",
                    ...l
                } = e, c = a.useRef(null), u = $6ed0406888f73fc4$export$c7b2cbe3552a0d05(c, t), f = k(n), p = $f631663db3294ace$export$b39126d51d94e6f3(i), m = "ltr" === p, g = $e42e1063c40fb3ef$export$b9ecd428b558ff10(e.onKeyDown, e => {
                    var t;
                    if (!E.includes(e.key)) return;
                    let n = e.target,
                        a = f().filter(e => {
                            var t;
                            return !(null !== (t = e.ref.current) && void 0 !== t && t.disabled)
                        }),
                        o = a.findIndex(e => e.ref.current === n),
                        i = a.length;
                    if (-1 === o) return;
                    e.preventDefault();
                    let l = o,
                        d = i - 1,
                        moveNext = () => {
                            (l = o + 1) > d && (l = 0)
                        },
                        movePrev = () => {
                            (l = o - 1) < 0 && (l = d)
                        };
                    switch (e.key) {
                        case "Home":
                            l = 0;
                            break;
                        case "End":
                            l = d;
                            break;
                        case "ArrowRight":
                            "horizontal" === s && (m ? moveNext() : movePrev());
                            break;
                        case "ArrowDown":
                            "vertical" === s && moveNext();
                            break;
                        case "ArrowLeft":
                            "horizontal" === s && (m ? movePrev() : moveNext());
                            break;
                        case "ArrowUp":
                            "vertical" === s && movePrev()
                    }
                    let c = l % i;
                    null === (t = a[c].ref.current) || void 0 === t || t.focus()
                });
                return a.createElement(V, {
                    scope: n,
                    disabled: o,
                    direction: i,
                    orientation: s
                }, a.createElement(C.Slot, {
                    scope: n
                }, a.createElement(d.div, _extends({}, l, {
                    "data-orientation": s,
                    ref: u,
                    onKeyDown: o ? void 0 : g
                }))))
            }), U = "AccordionItem", [B, G] = N(U), Y = a.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    value: o,
                    ...i
                } = e, s = W(U, n), l = T(U, n), d = P(n), c = $1746a345f3d73bb7$export$f680877a34711e37(), u = o && l.value.includes(o) || !1, f = s.disabled || e.disabled;
                return a.createElement(B, {
                    scope: n,
                    open: u,
                    disabled: f,
                    triggerId: c
                }, a.createElement(y, _extends({
                    "data-orientation": s.orientation,
                    "data-state": $1bf158f521e1b1b4$var$getState(u)
                }, d, i, {
                    ref: t,
                    disabled: f,
                    open: u,
                    onOpenChange: e => {
                        e ? l.onItemOpen(o) : l.onItemClose(o)
                    }
                })))
            }), H = a.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    ...o
                } = e, i = W(S, n), s = G("AccordionHeader", n);
                return a.createElement(d.h3, _extends({
                    "data-orientation": i.orientation,
                    "data-state": $1bf158f521e1b1b4$var$getState(s.open),
                    "data-disabled": s.disabled ? "" : void 0
                }, o, {
                    ref: t
                }))
            }), Z = "AccordionTrigger", F = a.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    ...o
                } = e, i = W(S, n), s = G(Z, n), l = O(Z, n), d = P(n);
                return a.createElement(C.ItemSlot, {
                    scope: n
                }, a.createElement(v, _extends({
                    "aria-disabled": s.open && !l.collapsible || void 0,
                    "data-orientation": i.orientation,
                    id: s.triggerId
                }, d, o, {
                    ref: t
                })))
            }), K = a.forwardRef((e, t) => {
                let {
                    __scopeAccordion: n,
                    ...o
                } = e, i = W(S, n), s = G("AccordionContent", n), l = P(n);
                return a.createElement(w, _extends({
                    role: "region",
                    "aria-labelledby": s.triggerId,
                    "data-orientation": i.orientation
                }, l, o, {
                    ref: t,
                    style: {
                        "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
                        "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
                        ...e.style
                    }
                }))
            });

            function $1bf158f521e1b1b4$var$getState(e) {
                return e ? "open" : "closed"
            }
            let J = M,
                X = Y,
                Q = H,
                ee = F,
                et = K
        },
        7042: function(e, t, n) {
            "use strict";

            function r(e) {
                var t, n, a = "";
                if ("string" == typeof e || "number" == typeof e) a += e;
                else if ("object" == typeof e) {
                    if (Array.isArray(e))
                        for (t = 0; t < e.length; t++) e[t] && (n = r(e[t])) && (a && (a += " "), a += n);
                    else
                        for (t in e) e[t] && (a && (a += " "), a += t)
                }
                return a
            }

            function clsx() {
                for (var e, t, n = 0, a = ""; n < arguments.length;)(e = arguments[n++]) && (t = r(e)) && (a && (a += " "), a += t);
                return a
            }
            n.d(t, {
                W: function() {
                    return clsx
                }
            })
        },
        1424: function(e, t, n) {
            "use strict";
            n.d(t, {
                A: function() {
                    return p
                },
                x: function() {
                    return Ut
                }
            });
            var a = n(2265),
                o = n(4887);
            ! function(e, {
                insertAt: t
            } = {}) {
                if (!e || "undefined" == typeof document) return;
                let n = document.head || document.getElementsByTagName("head")[0],
                    a = document.createElement("style");
                a.type = "text/css", "top" === t && n.firstChild ? n.insertBefore(a, n.firstChild) : n.appendChild(a), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(document.createTextNode(e))
            }(`html[dir=ltr],[data-sonner-toaster][dir=ltr]{--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}html[dir=rtl],[data-sonner-toaster][dir=rtl]{--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}[data-sonner-toaster][data-x-position=right]{right:max(var(--offset),env(safe-area-inset-right))}[data-sonner-toaster][data-x-position=left]{left:max(var(--offset),env(safe-area-inset-left))}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translate(-50%)}[data-sonner-toaster][data-y-position=top]{top:max(var(--offset),env(safe-area-inset-top))}[data-sonner-toaster][data-y-position=bottom]{bottom:max(var(--offset),env(safe-area-inset-bottom))}[data-sonner-toast]{--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;will-change:transform,opacity,height;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast][data-y-position=top]{top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}[data-sonner-toast] [data-description]{font-weight:400;line-height:1.4;color:inherit}[data-sonner-toast] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast] [data-icon]>*{flex-shrink:0}[data-sonner-toast] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;transition:opacity .4s,box-shadow .2s}[data-sonner-toast] [data-button]:focus-visible{box-shadow:0 0 0 2px #0006}[data-sonner-toast] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toast][data-theme=dark] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;opacity:0;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]:focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}[data-sonner-toast] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast]:hover [data-close-button]{opacity:1}[data-sonner-toast]:focus [data-close-button]{opacity:1}[data-sonner-toast]:focus-within [data-close-button]{opacity:1}[data-sonner-toast]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]:before{content:"";position:absolute;left:0;right:0;height:100%}[data-sonner-toast][data-y-position=top][data-swiping=true]:before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]:before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]:before{content:"";position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast]:after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y: translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale: var(--toasts-before) * .05 + 1;--y: translateY( calc(var(--lift-amount) * var(--toasts-before)) ) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y: translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y: translateY( calc(var(--lift) * var(--offset) + var(--lift) * -100%) );opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]:before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - 32px)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}
`);
            var dt = e => {
                    switch (e) {
                        case "success":
                            return s;
                        case "info":
                            return d;
                        case "warning":
                            return l;
                        case "error":
                            return c;
                        default:
                            return null
                    }
                },
                i = Array(12).fill(0),
                ct = ({
                    visible: e
                }) => a.createElement("div", {
                    className: "sonner-loading-wrapper",
                    "data-visible": e
                }, a.createElement("div", {
                    className: "sonner-spinner"
                }, i.map((e, t) => a.createElement("div", {
                    className: "sonner-loading-bar",
                    key: `spinner-bar-${t}`
                })))),
                s = a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
                    clipRule: "evenodd"
                })),
                l = a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 24 24",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
                    clipRule: "evenodd"
                })),
                d = a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
                    clipRule: "evenodd"
                })),
                c = a.createElement("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 20 20",
                    fill: "currentColor",
                    height: "20",
                    width: "20"
                }, a.createElement("path", {
                    fillRule: "evenodd",
                    d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
                    clipRule: "evenodd"
                })),
                u = 1,
                f = new class {
                    constructor() {
                        this.subscribe = e => (this.subscribers.push(e), () => {
                            let t = this.subscribers.indexOf(e);
                            this.subscribers.splice(t, 1)
                        }), this.publish = e => {
                            this.subscribers.forEach(t => t(e))
                        }, this.addToast = e => {
                            this.publish(e), this.toasts = [...this.toasts, e]
                        }, this.create = e => {
                            var t;
                            let {
                                message: n,
                                ...a
                            } = e, o = "number" == typeof(null == e ? void 0 : e.id) || (null == (t = e.id) ? void 0 : t.length) > 0 ? e.id : u++, i = this.toasts.find(e => e.id === o), s = void 0 === e.dismissible || e.dismissible;
                            return i ? this.toasts = this.toasts.map(t => t.id === o ? (this.publish({ ...t,
                                ...e,
                                id: o,
                                title: n
                            }), { ...t,
                                ...e,
                                id: o,
                                dismissible: s,
                                title: n
                            }) : t) : this.addToast({
                                title: n,
                                ...a,
                                dismissible: s,
                                id: o
                            }), o
                        }, this.dismiss = e => (e || this.toasts.forEach(e => {
                            this.subscribers.forEach(t => t({
                                id: e.id,
                                dismiss: !0
                            }))
                        }), this.subscribers.forEach(t => t({
                            id: e,
                            dismiss: !0
                        })), e), this.message = (e, t) => this.create({ ...t,
                            message: e
                        }), this.error = (e, t) => this.create({ ...t,
                            message: e,
                            type: "error"
                        }), this.success = (e, t) => this.create({ ...t,
                            type: "success",
                            message: e
                        }), this.info = (e, t) => this.create({ ...t,
                            type: "info",
                            message: e
                        }), this.warning = (e, t) => this.create({ ...t,
                            type: "warning",
                            message: e
                        }), this.loading = (e, t) => this.create({ ...t,
                            type: "loading",
                            message: e
                        }), this.promise = (e, t) => {
                            let n;
                            if (!t) return;
                            void 0 !== t.loading && (n = this.create({ ...t,
                                promise: e,
                                type: "loading",
                                message: t.loading
                            }));
                            let a = e instanceof Promise ? e : e(),
                                o = void 0 !== n;
                            return a.then(e => {
                                if (void 0 !== t.success) {
                                    o = !1;
                                    let a = "function" == typeof t.success ? t.success(e) : t.success;
                                    this.create({
                                        id: n,
                                        type: "success",
                                        message: a
                                    })
                                }
                            }).catch(e => {
                                if (void 0 !== t.error) {
                                    o = !1;
                                    let a = "function" == typeof t.error ? t.error(e) : t.error;
                                    this.create({
                                        id: n,
                                        type: "error",
                                        message: a
                                    })
                                }
                            }).finally(() => {
                                var e;
                                o && (this.dismiss(n), n = void 0), null == (e = t.finally) || e.call(t)
                            }), n
                        }, this.custom = (e, t) => {
                            let n = (null == t ? void 0 : t.id) || u++;
                            return this.publish({
                                jsx: e(n),
                                id: n,
                                ...t
                            }), n
                        }, this.subscribers = [], this.toasts = []
                    }
                },
                p = Object.assign((e, t) => {
                    let n = (null == t ? void 0 : t.id) || u++;
                    return f.addToast({
                        title: e,
                        ...t,
                        id: n
                    }), n
                }, {
                    success: f.success,
                    info: f.info,
                    warning: f.warning,
                    error: f.error,
                    custom: f.custom,
                    message: f.message,
                    promise: f.promise,
                    dismiss: f.dismiss,
                    loading: f.loading
                }),
                It = e => {
                    let {
                        invert: t,
                        toast: n,
                        interacting: o,
                        setHeights: i,
                        visibleToasts: s,
                        heights: l,
                        index: d,
                        toasts: c,
                        expanded: u,
                        removeToast: f,
                        closeButton: p,
                        style: m,
                        className: g = "",
                        descriptionClassName: b = "",
                        duration: h,
                        position: y,
                        gap: v = 14,
                        expandByDefault: x
                    } = e, [w, A] = a.useState(!1), [$, S] = a.useState(!1), [E, C] = a.useState(!1), [k, _] = a.useState(!1), [N, I] = a.useState(0), [P, M] = a.useState(0), z = a.useRef(null), T = a.useRef(null), R = n.type, O = !1 !== n.dismissible, j = n.className || "", L = n.descriptionClassName || "", V = a.useMemo(() => l.findIndex(e => e.toastId === n.id) || 0, [l, n.id]), W = a.useMemo(() => n.duration || h || 4e3, [n.duration, h]), D = a.useRef(0), U = a.useRef(0), B = (a.useRef(W), a.useRef(0)), G = a.useRef(null), [Y, H] = y.split("-"), Z = a.useMemo(() => l.reduce((e, t, n) => n >= V ? e : e + t.height, 0), [l, V]), F = n.invert || t, K = "loading" === R;
                    U.current = a.useMemo(() => V * v + Z, [V, Z]), a.useEffect(() => {
                        A(!0)
                    }, []), a.useLayoutEffect(() => {
                        if (!w) return;
                        let e = T.current,
                            t = e.style.height;
                        e.style.height = "auto";
                        let a = e.getBoundingClientRect().height;
                        e.style.height = t, M(a), i(e => e.find(e => e.toastId === n.id) ? e.map(e => e.toastId === n.id ? { ...e,
                            height: a
                        } : e) : [{
                            toastId: n.id,
                            height: a
                        }, ...e])
                    }, [w, n.title, n.description, i, n.id]);
                    let J = a.useCallback(() => {
                        S(!0), I(U.current), i(e => e.filter(e => e.toastId !== n.id)), setTimeout(() => {
                            f(n)
                        }, 200)
                    }, [n, f, i, U]);
                    return a.useEffect(() => {
                        if (n.promise && "loading" === R || n.duration === 1 / 0) return;
                        let e, t = W;
                        return u || o ? (() => {
                            if (B.current < D.current) {
                                let e = new Date().getTime() - D.current;
                                t -= e
                            }
                            B.current = new Date().getTime()
                        })() : (D.current = new Date().getTime(), e = setTimeout(() => {
                            var e;
                            null == (e = n.onAutoClose) || e.call(n, n), J()
                        }, t)), () => clearTimeout(e)
                    }, [u, o, x, n, W, J, n.promise, R]), a.useEffect(() => {
                        let e = T.current;
                        if (e) {
                            let t = e.getBoundingClientRect().height;
                            return M(t), i(e => [{
                                toastId: n.id,
                                height: t
                            }, ...e]), () => i(e => e.filter(e => e.toastId !== n.id))
                        }
                    }, [i, n.id]), a.useEffect(() => {
                        n.delete && J()
                    }, [J, n.delete]), a.createElement("li", {
                        "aria-live": n.important ? "assertive" : "polite",
                        "aria-atomic": "true",
                        role: "status",
                        tabIndex: 0,
                        ref: T,
                        className: g + " " + j,
                        "data-sonner-toast": "",
                        "data-styled": !(n.jsx || n.unstyled),
                        "data-mounted": w,
                        "data-promise": !!n.promise,
                        "data-removed": $,
                        "data-visible": d + 1 <= s,
                        "data-y-position": Y,
                        "data-x-position": H,
                        "data-index": d,
                        "data-front": 0 === d,
                        "data-swiping": E,
                        "data-dismissible": O,
                        "data-type": R,
                        "data-invert": F,
                        "data-swipe-out": k,
                        "data-expanded": !!(u || x && w),
                        style: {
                            "--index": d,
                            "--toasts-before": d,
                            "--z-index": c.length - d,
                            "--offset": `${$?N:U.current}px`,
                            "--initial-height": x ? "auto" : `${P}px`,
                            ...m,
                            ...n.style
                        },
                        onPointerDown: e => {
                            K || !O || (z.current = new Date, I(U.current), e.target.setPointerCapture(e.pointerId), "BUTTON" !== e.target.tagName && (C(!0), G.current = {
                                x: e.clientX,
                                y: e.clientY
                            }))
                        },
                        onPointerUp: () => {
                            var e, t, a, o;
                            if (k || !O) return;
                            G.current = null;
                            let i = Number((null == (e = T.current) ? void 0 : e.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0),
                                s = new Date().getTime() - (null == (t = z.current) ? void 0 : t.getTime());
                            if (Math.abs(i) >= 20 || Math.abs(i) / s > .11) {
                                I(U.current), null == (a = n.onDismiss) || a.call(n, n), J(), _(!0);
                                return
                            }
                            null == (o = T.current) || o.style.setProperty("--swipe-amount", "0px"), C(!1)
                        },
                        onPointerMove: e => {
                            var t;
                            if (!G.current || !O) return;
                            let n = e.clientY - G.current.y,
                                a = e.clientX - G.current.x,
                                o = ("top" === Y ? Math.min : Math.max)(0, n),
                                i = "touch" === e.pointerType ? 10 : 2;
                            Math.abs(o) > i ? null == (t = T.current) || t.style.setProperty("--swipe-amount", `${n}px`) : Math.abs(a) > i && (G.current = null)
                        }
                    }, p && !n.jsx ? a.createElement("button", {
                        "aria-label": "Close toast",
                        "data-disabled": K,
                        "data-close-button": !0,
                        onClick: K || !O ? () => {} : () => {
                            var e;
                            J(), null == (e = n.onDismiss) || e.call(n, n)
                        }
                    }, a.createElement("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "12",
                        height: "12",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.5",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }, a.createElement("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                    }), a.createElement("line", {
                        x1: "6",
                        y1: "6",
                        x2: "18",
                        y2: "18"
                    }))) : null, n.jsx || a.isValidElement(n.title) ? n.jsx || n.title : a.createElement(a.Fragment, null, R || n.icon || n.promise ? a.createElement("div", {
                        "data-icon": ""
                    }, (n.promise || "loading" === n.type) && !n.icon ? a.createElement(ct, {
                        visible: "loading" === R
                    }) : null, n.icon || dt(R)) : null, a.createElement("div", {
                        "data-content": ""
                    }, a.createElement("div", {
                        "data-title": ""
                    }, n.title), n.description ? a.createElement("div", {
                        "data-description": "",
                        className: b + L
                    }, n.description) : null), n.cancel ? a.createElement("button", {
                        "data-button": !0,
                        "data-cancel": !0,
                        onClick: () => {
                            var e;
                            O && (J(), null != (e = n.cancel) && e.onClick && n.cancel.onClick())
                        }
                    }, n.cancel.label) : null, n.action ? a.createElement("button", {
                        "data-button": "",
                        onClick: e => {
                            var t;
                            null == (t = n.action) || t.onClick(e), e.defaultPrevented || J()
                        }
                    }, n.action.label) : null))
                };

            function ut() {
                if ("undefined" == typeof window) return "ltr";
                let e = document.documentElement.getAttribute("dir");
                return "auto" !== e && e ? e : window.getComputedStyle(document.documentElement).direction
            }
            var Ut = e => {
                let {
                    invert: t,
                    position: n = "bottom-right",
                    hotkey: i = ["altKey", "KeyT"],
                    expand: s,
                    closeButton: l,
                    className: d,
                    offset: c,
                    theme: u = "light",
                    richColors: p,
                    duration: m,
                    style: g,
                    visibleToasts: b = 3,
                    toastOptions: h,
                    dir: y = ut(),
                    gap: v
                } = e, [x, w] = a.useState([]), A = a.useMemo(() => Array.from(new Set([n].concat(x.filter(e => e.position).map(e => e.position)))), [x, n]), [$, S] = a.useState([]), [E, C] = a.useState(!1), [k, _] = a.useState(!1), [N, I] = a.useState("system" !== u ? u : "undefined" != typeof window && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), P = a.useRef(null), M = i.join("+").replace(/Key/g, "").replace(/Digit/g, ""), z = a.useRef(null), T = a.useRef(!1), R = a.useCallback(e => w(t => t.filter(({
                    id: t
                }) => t !== e.id)), []);
                return a.useEffect(() => f.subscribe(e => {
                    if (e.dismiss) {
                        w(t => t.map(t => t.id === e.id ? { ...t,
                            delete: !0
                        } : t));
                        return
                    }
                    setTimeout(() => {
                        o.flushSync(() => {
                            w(t => {
                                let n = t.findIndex(t => t.id === e.id);
                                return -1 !== n ? [...t.slice(0, n), { ...t[n],
                                    ...e
                                }, ...t.slice(n + 1)] : [e, ...t]
                            })
                        })
                    })
                }), []), a.useEffect(() => {
                    if ("system" !== u) {
                        I(u);
                        return
                    }
                    "system" === u && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? I("dark") : I("light")), "undefined" != typeof window && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({
                        matches: e
                    }) => {
                        I(e ? "dark" : "light")
                    })
                }, [u]), a.useEffect(() => {
                    x.length <= 1 && C(!1)
                }, [x]), a.useEffect(() => {
                    let r = e => {
                        var t, n;
                        i.every(t => e[t] || e.code === t) && (C(!0), null == (t = P.current) || t.focus()), "Escape" === e.code && (document.activeElement === P.current || null != (n = P.current) && n.contains(document.activeElement)) && C(!1)
                    };
                    return document.addEventListener("keydown", r), () => document.removeEventListener("keydown", r)
                }, [i]), a.useEffect(() => {
                    if (P.current) return () => {
                        z.current && (z.current.focus({
                            preventScroll: !0
                        }), z.current = null, T.current = !1)
                    }
                }, [P.current]), x.length ? a.createElement("section", {
                    "aria-label": `Notifications ${M}`,
                    tabIndex: -1
                }, A.map((e, n) => {
                    var o;
                    let [i, u] = e.split("-");
                    return a.createElement("ol", {
                        key: e,
                        dir: "auto" === y ? ut() : y,
                        tabIndex: -1,
                        ref: P,
                        className: d,
                        "data-sonner-toaster": !0,
                        "data-theme": N,
                        "data-rich-colors": p,
                        "data-y-position": i,
                        "data-x-position": u,
                        style: {
                            "--front-toast-height": `${null==(o=$[0])?void 0:o.height}px`,
                            "--offset": "number" == typeof c ? `${c}px` : c || "32px",
                            "--width": "356px",
                            "--gap": "14px",
                            ...g
                        },
                        onBlur: e => {
                            T.current && !e.currentTarget.contains(e.relatedTarget) && (T.current = !1, z.current && (z.current.focus({
                                preventScroll: !0
                            }), z.current = null))
                        },
                        onFocus: e => {
                            e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || T.current || (T.current = !0, z.current = e.relatedTarget)
                        },
                        onMouseEnter: () => C(!0),
                        onMouseMove: () => C(!0),
                        onMouseLeave: () => {
                            k || C(!1)
                        },
                        onPointerDown: e => {
                            e.target instanceof HTMLElement && "false" === e.target.dataset.dismissible || _(!0)
                        },
                        onPointerUp: () => _(!1)
                    }, x.filter(t => !t.position && 0 === n || t.position === e).map((n, o) => {
                        var i;
                        return a.createElement(It, {
                            key: n.id,
                            index: o,
                            toast: n,
                            duration: null != (i = null == h ? void 0 : h.duration) ? i : m,
                            className: null == h ? void 0 : h.className,
                            descriptionClassName: null == h ? void 0 : h.descriptionClassName,
                            invert: t,
                            visibleToasts: b,
                            closeButton: l,
                            interacting: k,
                            position: e,
                            style: null == h ? void 0 : h.style,
                            removeToast: R,
                            toasts: x,
                            heights: $,
                            setHeights: S,
                            expandByDefault: s,
                            gap: v,
                            expanded: E
                        })
                    }))
                })) : null
            }
        },
        4769: function(e, t, n) {
            "use strict";

            function createClassUtils(e) {
                let t = createClassMap(e),
                    {
                        conflictingClassGroups: n,
                        conflictingClassGroupModifiers: a
                    } = e;
                return {
                    getClassGroupId: function(e) {
                        let n = e.split("-");
                        return "" === n[0] && 1 !== n.length && n.shift(), getGroupRecursive(n, t) || getGroupIdForArbitraryProperty(e)
                    },
                    getConflictingClassGroupIds: function(e, t) {
                        let o = n[e] || [];
                        return t && a[e] ? [...o, ...a[e]] : o
                    }
                }
            }

            function getGroupRecursive(e, t) {
                if (0 === e.length) return t.classGroupId;
                let n = e[0],
                    a = t.nextPart.get(n),
                    o = a ? getGroupRecursive(e.slice(1), a) : void 0;
                if (o) return o;
                if (0 === t.validators.length) return;
                let i = e.join("-");
                return t.validators.find(({
                    validator: e
                }) => e(i)) ? .classGroupId
            }
            n.d(t, {
                m6: function() {
                    return g
                }
            });
            let a = /^\[(.+)\]$/;

            function getGroupIdForArbitraryProperty(e) {
                if (a.test(e)) {
                    let t = a.exec(e)[1],
                        n = t ? .substring(0, t.indexOf(":"));
                    if (n) return "arbitrary.." + n
                }
            }

            function createClassMap(e) {
                let {
                    theme: t,
                    prefix: n
                } = e, a = {
                    nextPart: new Map,
                    validators: []
                }, o = getPrefixedClassGroupEntries(Object.entries(e.classGroups), n);
                return o.forEach(([e, n]) => {
                    processClassesRecursively(n, a, e, t)
                }), a
            }

            function processClassesRecursively(e, t, n, a) {
                e.forEach(e => {
                    if ("string" == typeof e) {
                        let a = "" === e ? t : getPart(t, e);
                        a.classGroupId = n;
                        return
                    }
                    if ("function" == typeof e) {
                        if (isThemeGetter(e)) {
                            processClassesRecursively(e(a), t, n, a);
                            return
                        }
                        t.validators.push({
                            validator: e,
                            classGroupId: n
                        });
                        return
                    }
                    Object.entries(e).forEach(([e, o]) => {
                        processClassesRecursively(o, getPart(t, e), n, a)
                    })
                })
            }

            function getPart(e, t) {
                let n = e;
                return t.split("-").forEach(e => {
                    n.nextPart.has(e) || n.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), n = n.nextPart.get(e)
                }), n
            }

            function isThemeGetter(e) {
                return e.isThemeGetter
            }

            function getPrefixedClassGroupEntries(e, t) {
                return t ? e.map(([e, n]) => {
                    let a = n.map(e => "string" == typeof e ? t + e : "object" == typeof e ? Object.fromEntries(Object.entries(e).map(([e, n]) => [t + e, n])) : e);
                    return [e, a]
                }) : e
            }

            function createLruCache(e) {
                if (e < 1) return {
                    get: () => void 0,
                    set: () => {}
                };
                let t = 0,
                    n = new Map,
                    a = new Map;

                function update(o, i) {
                    n.set(o, i), ++t > e && (t = 0, a = n, n = new Map)
                }
                return {
                    get(e) {
                        let t = n.get(e);
                        return void 0 !== t ? t : void 0 !== (t = a.get(e)) ? (update(e, t), t) : void 0
                    },
                    set(e, t) {
                        n.has(e) ? n.set(e, t) : update(e, t)
                    }
                }
            }

            function createSplitModifiers(e) {
                let t = e.separator,
                    n = 1 === t.length,
                    a = t[0],
                    o = t.length;
                return function(e) {
                    let i;
                    let s = [],
                        l = 0,
                        d = 0;
                    for (let c = 0; c < e.length; c++) {
                        let u = e[c];
                        if (0 === l) {
                            if (u === a && (n || e.slice(c, c + o) === t)) {
                                s.push(e.slice(d, c)), d = c + o;
                                continue
                            }
                            if ("/" === u) {
                                i = c;
                                continue
                            }
                        }
                        "[" === u ? l++ : "]" === u && l--
                    }
                    let c = 0 === s.length ? e : e.substring(d),
                        u = c.startsWith("!"),
                        f = u ? c.substring(1) : c,
                        p = i && i > d ? i - d : void 0;
                    return {
                        modifiers: s,
                        hasImportantModifier: u,
                        baseClassName: f,
                        maybePostfixModifierPosition: p
                    }
                }
            }

            function sortModifiers(e) {
                if (e.length <= 1) return e;
                let t = [],
                    n = [];
                return e.forEach(e => {
                    let a = "[" === e[0];
                    a ? (t.push(...n.sort(), e), n = []) : n.push(e)
                }), t.push(...n.sort()), t
            }

            function createConfigUtils(e) {
                return {
                    cache: createLruCache(e.cacheSize),
                    splitModifiers: createSplitModifiers(e),
                    ...createClassUtils(e)
                }
            }
            let o = /\s+/;

            function mergeClassList(e, t) {
                let {
                    splitModifiers: n,
                    getClassGroupId: a,
                    getConflictingClassGroupIds: i
                } = t, s = new Set;
                return e.trim().split(o).map(e => {
                    let {
                        modifiers: t,
                        hasImportantModifier: o,
                        baseClassName: i,
                        maybePostfixModifierPosition: s
                    } = n(e), l = a(s ? i.substring(0, s) : i), d = !!s;
                    if (!l) {
                        if (!s || !(l = a(i))) return {
                            isTailwindClass: !1,
                            originalClassName: e
                        };
                        d = !1
                    }
                    let c = sortModifiers(t).join(":");
                    return {
                        isTailwindClass: !0,
                        modifierId: o ? c + "!" : c,
                        classGroupId: l,
                        originalClassName: e,
                        hasPostfixModifier: d
                    }
                }).reverse().filter(e => {
                    if (!e.isTailwindClass) return !0;
                    let {
                        modifierId: t,
                        classGroupId: n,
                        hasPostfixModifier: a
                    } = e, o = t + n;
                    return !s.has(o) && (s.add(o), i(n, a).forEach(e => s.add(t + e)), !0)
                }).reverse().map(e => e.originalClassName).join(" ")
            }

            function twJoin() {
                let e, t, n = 0,
                    a = "";
                for (; n < arguments.length;)(e = arguments[n++]) && (t = toValue(e)) && (a && (a += " "), a += t);
                return a
            }

            function toValue(e) {
                let t;
                if ("string" == typeof e) return e;
                let n = "";
                for (let a = 0; a < e.length; a++) e[a] && (t = toValue(e[a])) && (n && (n += " "), n += t);
                return n
            }

            function createTailwindMerge(e, ...t) {
                let n, a, o;
                let i = initTailwindMerge;

                function initTailwindMerge(s) {
                    let l = t.reduce((e, t) => t(e), e());
                    return a = (n = createConfigUtils(l)).cache.get, o = n.cache.set, i = tailwindMerge, tailwindMerge(s)
                }

                function tailwindMerge(e) {
                    let t = a(e);
                    if (t) return t;
                    let i = mergeClassList(e, n);
                    return o(e, i), i
                }
                return function() {
                    return i(twJoin.apply(null, arguments))
                }
            }

            function fromTheme(e) {
                let themeGetter = t => t[e] || [];
                return themeGetter.isThemeGetter = !0, themeGetter
            }
            let i = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                s = /^\d+\/\d+$/,
                l = new Set(["px", "full", "screen"]),
                d = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                c = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                u = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
                f = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;

            function isLength(e) {
                return isNumber(e) || l.has(e) || s.test(e)
            }

            function isArbitraryLength(e) {
                return getIsArbitraryValue(e, "length", isLengthOnly)
            }

            function isNumber(e) {
                return !!e && !Number.isNaN(Number(e))
            }

            function isArbitraryNumber(e) {
                return getIsArbitraryValue(e, "number", isNumber)
            }

            function isInteger(e) {
                return !!e && Number.isInteger(Number(e))
            }

            function isPercent(e) {
                return e.endsWith("%") && isNumber(e.slice(0, -1))
            }

            function isArbitraryValue(e) {
                return i.test(e)
            }

            function isTshirtSize(e) {
                return d.test(e)
            }
            let p = new Set(["length", "size", "percentage"]);

            function isArbitrarySize(e) {
                return getIsArbitraryValue(e, p, isNever)
            }

            function isArbitraryPosition(e) {
                return getIsArbitraryValue(e, "position", isNever)
            }
            let m = new Set(["image", "url"]);

            function isArbitraryImage(e) {
                return getIsArbitraryValue(e, m, isImage)
            }

            function isArbitraryShadow(e) {
                return getIsArbitraryValue(e, "", isShadow)
            }

            function isAny() {
                return !0
            }

            function getIsArbitraryValue(e, t, n) {
                let a = i.exec(e);
                return !!a && (a[1] ? "string" == typeof t ? a[1] === t : t.has(a[1]) : n(a[2]))
            }

            function isLengthOnly(e) {
                return c.test(e)
            }

            function isNever() {
                return !1
            }

            function isShadow(e) {
                return u.test(e)
            }

            function isImage(e) {
                return f.test(e)
            }

            function getDefaultConfig() {
                let e = fromTheme("colors"),
                    t = fromTheme("spacing"),
                    n = fromTheme("blur"),
                    a = fromTheme("brightness"),
                    o = fromTheme("borderColor"),
                    i = fromTheme("borderRadius"),
                    s = fromTheme("borderSpacing"),
                    l = fromTheme("borderWidth"),
                    d = fromTheme("contrast"),
                    c = fromTheme("grayscale"),
                    u = fromTheme("hueRotate"),
                    f = fromTheme("invert"),
                    p = fromTheme("gap"),
                    m = fromTheme("gradientColorStops"),
                    g = fromTheme("gradientColorStopPositions"),
                    b = fromTheme("inset"),
                    h = fromTheme("margin"),
                    y = fromTheme("opacity"),
                    v = fromTheme("padding"),
                    x = fromTheme("saturate"),
                    w = fromTheme("scale"),
                    A = fromTheme("sepia"),
                    $ = fromTheme("skew"),
                    S = fromTheme("space"),
                    E = fromTheme("translate"),
                    getOverscroll = () => ["auto", "contain", "none"],
                    getOverflow = () => ["auto", "hidden", "clip", "visible", "scroll"],
                    getSpacingWithAutoAndArbitrary = () => ["auto", isArbitraryValue, t],
                    getSpacingWithArbitrary = () => [isArbitraryValue, t],
                    getLengthWithEmptyAndArbitrary = () => ["", isLength, isArbitraryLength],
                    getNumberWithAutoAndArbitrary = () => ["auto", isNumber, isArbitraryValue],
                    getPositions = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"],
                    getLineStyles = () => ["solid", "dashed", "dotted", "double", "none"],
                    getBlendModes = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"],
                    getAlign = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
                    getZeroAndEmpty = () => ["", "0", isArbitraryValue],
                    getBreaks = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
                    getNumber = () => [isNumber, isArbitraryNumber],
                    getNumberAndArbitrary = () => [isNumber, isArbitraryValue];
                return {
                    cacheSize: 500,
                    separator: ":",
                    theme: {
                        colors: [isAny],
                        spacing: [isLength, isArbitraryLength],
                        blur: ["none", "", isTshirtSize, isArbitraryValue],
                        brightness: getNumber(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", isTshirtSize, isArbitraryValue],
                        borderSpacing: getSpacingWithArbitrary(),
                        borderWidth: getLengthWithEmptyAndArbitrary(),
                        contrast: getNumber(),
                        grayscale: getZeroAndEmpty(),
                        hueRotate: getNumberAndArbitrary(),
                        invert: getZeroAndEmpty(),
                        gap: getSpacingWithArbitrary(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [isPercent, isArbitraryLength],
                        inset: getSpacingWithAutoAndArbitrary(),
                        margin: getSpacingWithAutoAndArbitrary(),
                        opacity: getNumber(),
                        padding: getSpacingWithArbitrary(),
                        saturate: getNumber(),
                        scale: getNumber(),
                        sepia: getZeroAndEmpty(),
                        skew: getNumberAndArbitrary(),
                        space: getSpacingWithArbitrary(),
                        translate: getSpacingWithArbitrary()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", isArbitraryValue]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [isTshirtSize]
                        }],
                        "break-after": [{
                            "break-after": getBreaks()
                        }],
                        "break-before": [{
                            "break-before": getBreaks()
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [...getPositions(), isArbitraryValue]
                        }],
                        overflow: [{
                            overflow: getOverflow()
                        }],
                        "overflow-x": [{
                            "overflow-x": getOverflow()
                        }],
                        "overflow-y": [{
                            "overflow-y": getOverflow()
                        }],
                        overscroll: [{
                            overscroll: getOverscroll()
                        }],
                        "overscroll-x": [{
                            "overscroll-x": getOverscroll()
                        }],
                        "overscroll-y": [{
                            "overscroll-y": getOverscroll()
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [b]
                        }],
                        "inset-x": [{
                            "inset-x": [b]
                        }],
                        "inset-y": [{
                            "inset-y": [b]
                        }],
                        start: [{
                            start: [b]
                        }],
                        end: [{
                            end: [b]
                        }],
                        top: [{
                            top: [b]
                        }],
                        right: [{
                            right: [b]
                        }],
                        bottom: [{
                            bottom: [b]
                        }],
                        left: [{
                            left: [b]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", isInteger, isArbitraryValue]
                        }],
                        basis: [{
                            basis: getSpacingWithAutoAndArbitrary()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", isArbitraryValue]
                        }],
                        grow: [{
                            grow: getZeroAndEmpty()
                        }],
                        shrink: [{
                            shrink: getZeroAndEmpty()
                        }],
                        order: [{
                            order: ["first", "last", "none", isInteger, isArbitraryValue]
                        }],
                        "grid-cols": [{
                            "grid-cols": [isAny]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", isInteger, isArbitraryValue]
                            }, isArbitraryValue]
                        }],
                        "col-start": [{
                            "col-start": getNumberWithAutoAndArbitrary()
                        }],
                        "col-end": [{
                            "col-end": getNumberWithAutoAndArbitrary()
                        }],
                        "grid-rows": [{
                            "grid-rows": [isAny]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [isInteger, isArbitraryValue]
                            }, isArbitraryValue]
                        }],
                        "row-start": [{
                            "row-start": getNumberWithAutoAndArbitrary()
                        }],
                        "row-end": [{
                            "row-end": getNumberWithAutoAndArbitrary()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", isArbitraryValue]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", isArbitraryValue]
                        }],
                        gap: [{
                            gap: [p]
                        }],
                        "gap-x": [{
                            "gap-x": [p]
                        }],
                        "gap-y": [{
                            "gap-y": [p]
                        }],
                        "justify-content": [{
                            justify: ["normal", ...getAlign()]
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal", ...getAlign(), "baseline"]
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [...getAlign(), "baseline"]
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [v]
                        }],
                        px: [{
                            px: [v]
                        }],
                        py: [{
                            py: [v]
                        }],
                        ps: [{
                            ps: [v]
                        }],
                        pe: [{
                            pe: [v]
                        }],
                        pt: [{
                            pt: [v]
                        }],
                        pr: [{
                            pr: [v]
                        }],
                        pb: [{
                            pb: [v]
                        }],
                        pl: [{
                            pl: [v]
                        }],
                        m: [{
                            m: [h]
                        }],
                        mx: [{
                            mx: [h]
                        }],
                        my: [{
                            my: [h]
                        }],
                        ms: [{
                            ms: [h]
                        }],
                        me: [{
                            me: [h]
                        }],
                        mt: [{
                            mt: [h]
                        }],
                        mr: [{
                            mr: [h]
                        }],
                        mb: [{
                            mb: [h]
                        }],
                        ml: [{
                            ml: [h]
                        }],
                        "space-x": [{
                            "space-x": [S]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [S]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", isArbitraryValue, t]
                        }],
                        "min-w": [{
                            "min-w": ["min", "max", "fit", isArbitraryValue, isLength]
                        }],
                        "max-w": [{
                            "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                                screen: [isTshirtSize]
                            }, isTshirtSize, isArbitraryValue]
                        }],
                        h: [{
                            h: [isArbitraryValue, t, "auto", "min", "max", "fit"]
                        }],
                        "min-h": [{
                            "min-h": ["min", "max", "fit", isLength, isArbitraryValue]
                        }],
                        "max-h": [{
                            "max-h": [isArbitraryValue, t, "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", isTshirtSize, isArbitraryLength]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", isArbitraryNumber]
                        }],
                        "font-family": [{
                            font: [isAny]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", isArbitraryValue]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", isNumber, isArbitraryNumber]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", isLength, isArbitraryValue]
                        }],
                        "list-image": [{
                            "list-image": ["none", isArbitraryValue]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", isArbitraryValue]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [y]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [y]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [...getLineStyles(), "wavy"]
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", isLength, isArbitraryLength]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", isLength, isArbitraryValue]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        indent: [{
                            indent: getSpacingWithArbitrary()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", isArbitraryValue]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", isArbitraryValue]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [y]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [...getPositions(), isArbitraryPosition]
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", isArbitrarySize]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, isArbitraryImage]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [g]
                        }],
                        "gradient-via-pos": [{
                            via: [g]
                        }],
                        "gradient-to-pos": [{
                            to: [g]
                        }],
                        "gradient-from": [{
                            from: [m]
                        }],
                        "gradient-via": [{
                            via: [m]
                        }],
                        "gradient-to": [{
                            to: [m]
                        }],
                        rounded: [{
                            rounded: [i]
                        }],
                        "rounded-s": [{
                            "rounded-s": [i]
                        }],
                        "rounded-e": [{
                            "rounded-e": [i]
                        }],
                        "rounded-t": [{
                            "rounded-t": [i]
                        }],
                        "rounded-r": [{
                            "rounded-r": [i]
                        }],
                        "rounded-b": [{
                            "rounded-b": [i]
                        }],
                        "rounded-l": [{
                            "rounded-l": [i]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [i]
                        }],
                        "rounded-se": [{
                            "rounded-se": [i]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [i]
                        }],
                        "rounded-es": [{
                            "rounded-es": [i]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [i]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [i]
                        }],
                        "rounded-br": [{
                            "rounded-br": [i]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [i]
                        }],
                        "border-w": [{
                            border: [l]
                        }],
                        "border-w-x": [{
                            "border-x": [l]
                        }],
                        "border-w-y": [{
                            "border-y": [l]
                        }],
                        "border-w-s": [{
                            "border-s": [l]
                        }],
                        "border-w-e": [{
                            "border-e": [l]
                        }],
                        "border-w-t": [{
                            "border-t": [l]
                        }],
                        "border-w-r": [{
                            "border-r": [l]
                        }],
                        "border-w-b": [{
                            "border-b": [l]
                        }],
                        "border-w-l": [{
                            "border-l": [l]
                        }],
                        "border-opacity": [{
                            "border-opacity": [y]
                        }],
                        "border-style": [{
                            border: [...getLineStyles(), "hidden"]
                        }],
                        "divide-x": [{
                            "divide-x": [l]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [l]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [y]
                        }],
                        "divide-style": [{
                            divide: getLineStyles()
                        }],
                        "border-color": [{
                            border: [o]
                        }],
                        "border-color-x": [{
                            "border-x": [o]
                        }],
                        "border-color-y": [{
                            "border-y": [o]
                        }],
                        "border-color-t": [{
                            "border-t": [o]
                        }],
                        "border-color-r": [{
                            "border-r": [o]
                        }],
                        "border-color-b": [{
                            "border-b": [o]
                        }],
                        "border-color-l": [{
                            "border-l": [o]
                        }],
                        "divide-color": [{
                            divide: [o]
                        }],
                        "outline-style": [{
                            outline: ["", ...getLineStyles()]
                        }],
                        "outline-offset": [{
                            "outline-offset": [isLength, isArbitraryValue]
                        }],
                        "outline-w": [{
                            outline: [isLength, isArbitraryLength]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: getLengthWithEmptyAndArbitrary()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [y]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [isLength, isArbitraryLength]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", isTshirtSize, isArbitraryShadow]
                        }],
                        "shadow-color": [{
                            shadow: [isAny]
                        }],
                        opacity: [{
                            opacity: [y]
                        }],
                        "mix-blend": [{
                            "mix-blend": getBlendModes()
                        }],
                        "bg-blend": [{
                            "bg-blend": getBlendModes()
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [n]
                        }],
                        brightness: [{
                            brightness: [a]
                        }],
                        contrast: [{
                            contrast: [d]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", isTshirtSize, isArbitraryValue]
                        }],
                        grayscale: [{
                            grayscale: [c]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [u]
                        }],
                        invert: [{
                            invert: [f]
                        }],
                        saturate: [{
                            saturate: [x]
                        }],
                        sepia: [{
                            sepia: [A]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [n]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [a]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [d]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [c]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [u]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [f]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [y]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [x]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [A]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [s]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [s]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [s]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", isArbitraryValue]
                        }],
                        duration: [{
                            duration: getNumberAndArbitrary()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", isArbitraryValue]
                        }],
                        delay: [{
                            delay: getNumberAndArbitrary()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", isArbitraryValue]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [w]
                        }],
                        "scale-x": [{
                            "scale-x": [w]
                        }],
                        "scale-y": [{
                            "scale-y": [w]
                        }],
                        rotate: [{
                            rotate: [isInteger, isArbitraryValue]
                        }],
                        "translate-x": [{
                            "translate-x": [E]
                        }],
                        "translate-y": [{
                            "translate-y": [E]
                        }],
                        "skew-x": [{
                            "skew-x": [$]
                        }],
                        "skew-y": [{
                            "skew-y": [$]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", isArbitraryValue]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: ["appearance-none"],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", isArbitraryValue]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": getSpacingWithArbitrary()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": getSpacingWithArbitrary()
                        }],
                        "scroll-my": [{
                            "scroll-my": getSpacingWithArbitrary()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": getSpacingWithArbitrary()
                        }],
                        "scroll-me": [{
                            "scroll-me": getSpacingWithArbitrary()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": getSpacingWithArbitrary()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": getSpacingWithArbitrary()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": getSpacingWithArbitrary()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": getSpacingWithArbitrary()
                        }],
                        "scroll-p": [{
                            "scroll-p": getSpacingWithArbitrary()
                        }],
                        "scroll-px": [{
                            "scroll-px": getSpacingWithArbitrary()
                        }],
                        "scroll-py": [{
                            "scroll-py": getSpacingWithArbitrary()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": getSpacingWithArbitrary()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": getSpacingWithArbitrary()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": getSpacingWithArbitrary()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": getSpacingWithArbitrary()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": getSpacingWithArbitrary()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": getSpacingWithArbitrary()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "manipulation"]
                        }],
                        "touch-x": [{
                            "touch-pan": ["x", "left", "right"]
                        }],
                        "touch-y": [{
                            "touch-pan": ["y", "up", "down"]
                        }],
                        "touch-pz": ["touch-pinch-zoom"],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", isArbitraryValue]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [isLength, isArbitraryLength, isArbitraryNumber]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"],
                        touch: ["touch-x", "touch-y", "touch-pz"],
                        "touch-x": ["touch"],
                        "touch-y": ["touch"],
                        "touch-pz": ["touch"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            }
            let g = createTailwindMerge(getDefaultConfig)
        }
    }
]);