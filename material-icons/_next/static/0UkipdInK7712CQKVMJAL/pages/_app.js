(window.webpackJsonp = window.webpackJsonp || []).push([
    ["f496"], {
        "+165": function(e, t) { e.exports = function(e, t) { return e.has(t) } },
        "+edc": function(e, t, n) {
            var o = n("sU/p");
            e.exports = function(e, t, n) { for (var s in t) o(e, s, t[s], n); return e }
        },
        "011b": function(e, t, n) {
            "use strict";
            (function(e) {
                n.d(t, "a", function() { return i });
                var o = n("0tNF"),
                    s = n("cnbf"),
                    a = n("dW64"),
                    r = function(e) { return e };

                function i(t) { return e.__INIT_REDUX_STORE__ || (e.__INIT_REDUX_STORE__ = function(e) { return Object(s.e)(Object(s.c)({ options: a.a }), e, Object(s.d)(s.a.apply(void 0, Object(o.default)([])), r)) }(t)), e.__INIT_REDUX_STORE__ }
            }).call(this, n("dm4u"))
        },
        "07F0": function(e, t) {
            e.exports = function(e, t) {
                for (var n = -1, o = null == e ? 0 : e.length, s = 0, a = []; ++n < o;) {
                    var r = e[n];
                    t(r, n, e) && (a[s++] = r)
                }
                return a
            }
        },
        "0KRy": function(e, t, n) {
            var o = n("LSEb")(n("s3UK"), "Map");
            e.exports = o
        },
        "0L9p": function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o = n("Btey"),
                s = n("1h76"),
                a = function() {
                    function e() { this.languageTagsWithValues = {}, this.defaultLanguageTag = null }
                    return e.prototype.languages = function(e) {
                        var t = this;
                        if (e.length < 1) throw new Error("The number of defined languages cannot be smaller than one.");
                        this.languageTagsWithValues = {}, e.forEach(function(e) {
                            var n = o.parse(e);
                            if (!n) throw new TypeError("Language tag " + e + " is not bcp47 compliant. For more info https://tools.ietf.org/html/bcp47.");
                            var s = n.langtag.language.language;
                            if (!s) throw new TypeError("Language tag " + e + " is not supported.");
                            var a = n.langtag;
                            a.value = e;
                            var r = { language: { language: a.language.language.toLowerCase(), extlang: a.language.extlang.map(function(e) { return e.toLowerCase() }) }, region: a.region && a.region.toLowerCase(), script: a.script && a.script.toLowerCase(), variant: a.variant.map(function(e) { return e.toLowerCase() }), privateuse: a.privateuse.map(function(e) { return e.toLowerCase() }), extension: a.extension.map(function(e) { return { extension: e.extension && e.extension.map(function(e) { return e.toLowerCase() }), singleton: e.singleton.toLowerCase() } }), value: e };
                            t.languageTagsWithValues[s] ? t.languageTagsWithValues[s].push(r) : t.languageTagsWithValues[s] = [r]
                        }), this.defaultLanguageTag = e[0]
                    }, e.prototype.get = function(e) { return this.parse(e)[0] }, e.prototype.create = function() { return null }, e.prototype.parse = function(e) {
                        if (!e) return [this.defaultLanguageTag];
                        for (var t = [], n = 0, a = function(e) { return e.split(",").map(function(e) { var t = e.replace(/\s+/, "").split(";"); return { tag: t[0], quality: t[1] ? parseFloat(t[1].split("=")[1]) : 1 } }).filter(function(e) { return !!e && (!!e.tag && e) }) }(e); n < a.length; n++) {
                            var r = a[n],
                                i = o.parse(r.tag);
                            if (i) {
                                var c = i.langtag;
                                if (this.languageTagsWithValues[c.language.language]) e: for (var p = 0, u = this.languageTagsWithValues[c.language.language]; p < u.length; p++) {
                                    for (var l = u[p], d = 0, m = 0, g = ["privateuse", "extension", "variant", "region", "script"]; m < g.length; m++) {
                                        var h = g[m],
                                            f = l[h];
                                        if (f) {
                                            var b = c[h];
                                            if (!b) continue e;
                                            switch (h) {
                                                case "privateuse":
                                                case "variant":
                                                    for (w = 0; w < f.length; w++)
                                                        if (!b[w] || f[w] !== b[w].toLowerCase()) continue e;
                                                    break;
                                                case "extension":
                                                    for (w = 0; w < f.length; w++)
                                                        for (y = f[w].extension, S = 0; S < y.length; S++) { if (!b[w]) continue e; if (!b[w].extension[S]) continue e; if (y[S] !== b[w].extension[S].toLowerCase()) continue e }
                                                    break;
                                                default:
                                                    if (f !== b.toLowerCase()) continue e
                                            }
                                        } else {
                                            var v = c[h];
                                            switch (v && d++, h) {
                                                case "privateuse":
                                                case "variant":
                                                    for (var w = 0; w < v.length; w++) v[w] && d++;
                                                    break;
                                                case "extension":
                                                    for (var w = 0; w < v.length; w++)
                                                        for (var y = v[w].extension, S = 0; S < y.length; S++) v[w].extension[S] || d++
                                            }
                                        }
                                    }
                                    t.push({ unmatchedRequestedSubTag: d, quality: r.quality, languageTag: l.value })
                                }
                            }
                        }
                        return t.length > 0 ? s(t, function(e, t) { var n = t.quality - e.quality; return 0 != n ? n : e.unmatchedRequestedSubTag - t.unmatchedRequestedSubTag }).map(function(e) { return e.languageTag }) : [this.defaultLanguageTag]
                    }, e
                }();

            function r() { var e = new a; return e.create = function() { return new a }, e }
            e.exports = r(), e.exports.default = r(), t.default = r()
        },
        "0qVv": function(e, t, n) {
            var o = n("gKNW"),
                s = n("u2vY"),
                a = n("BwbT"),
                r = n("cTHi");
            e.exports = function(e) { return a(e) ? o(r(e)) : s(e) }
        },
        "12zn": function(e) { e.exports = { homeQuickWord: "crwdns99822:0crwdne99822:0", helpToTranslate: "crwdns100754:0crwdne100754:0", editWebsiteColors: "crwdns99824:0crwdne99824:0", toggleTheme: "crwdns103670:0crwdne103670:0", toggleRTL: "crwdns103672:0crwdne103672:0", github: "crwdns99830:0crwdne99830:0", strapline: "crwdns99832:0crwdne99832:0", getStarted: "crwdns99834:0crwdne99834:0", installation: "crwdns99836:0crwdne99836:0", installDescr: "crwdns99838:0crwdne99838:0", cdn: "crwdns99840:0crwdne99840:0", loadFont: "crwdns99842:0crwdne99842:0", installButton: "crwdns99844:0crwdne99844:0", usage: "crwdns99846:0crwdne99846:0", usageDescr: "crwdns99848:0crwdne99848:0", usageButton: "crwdns99850:0crwdne99850:0", themes: "crwdns99852:0crwdne99852:0", themesDescr: "crwdns99854:0crwdne99854:0", themesButton: "crwdns99856:0crwdne99856:0", whosUsing: "crwdns99858:0crwdne99858:0", joinThese: "crwdns99860:0crwdne99860:0", usingMui: "crwdns99862:0crwdne99862:0", letUsKnow: "crwdns99864:0crwdne99864:0", footerCommunity: "crwdns102246:0crwdne102246:0", footerResources: "crwdns102248:0crwdne102248:0", homeFooterRelease: "crwdns99876:0{{versionNumber}}crwdnd99876:0{{license}}crwdne99876:0", license: "crwdns99878:0crwdne99878:0", likeMui: "crwdns99880:0crwdne99880:0", adblock: "crwdns99882:0crwdne99882:0", thanks: "crwdns99884:0crwdne99884:0", editPage: "crwdns99886:0crwdne99886:0", tableOfContents: "crwdns99888:0crwdne99888:0", sourceCode: "crwdns99890:0crwdne99890:0", traffic: "crwdns99892:0crwdne99892:0", newest: "crwdns99894:0crwdne99894:0", stars: "crwdns99896:0crwdne99896:0", visit: "crwdns99898:0crwdne99898:0", dashboardTitle: "crwdns99900:0crwdne99900:0", dashboardDescr: "crwdns99902:0crwdne99902:0", signInTitle: "crwdns99904:0crwdne99904:0", signInDescr: "crwdns99906:0crwdne99906:0", signInSideTitle: "crwdns99908:0crwdne99908:0", signInSideDescr: "crwdns99910:0crwdne99910:0", signUpTitle: "crwdns99912:0crwdne99912:0", signUpDescr: "crwdns99914:0crwdne99914:0", blogTitle: "crwdns99916:0crwdne99916:0", blogDescr: "crwdns99918:0crwdne99918:0", checkoutTitle: "crwdns99920:0crwdne99920:0", checkoutDescr: "crwdns99922:0crwdne99922:0", albumTitle: "crwdns99924:0crwdne99924:0", albumDescr: "crwdns99926:0crwdne99926:0", pricingTitle: "crwdns99928:0crwdne99928:0", pricingDescr: "crwdns99930:0crwdne99930:0", stickyFooterTitle: "crwdns99932:0crwdne99932:0", stickyFooterDescr: "crwdns99934:0crwdne99934:0", expandAll: "crwdns99936:0crwdne99936:0", showSource: "crwdns99938:0crwdne99938:0", hideSource: "crwdns99940:0crwdne99940:0", showFullSource: "crwdns103874:0crwdne103874:0", hideFullSource: "crwdns103876:0crwdne103876:0", viewGitHub: "crwdns99942:0crwdne99942:0", codesandbox: "crwdns99944:0crwdne99944:0", seeMore: "crwdns99946:0crwdne99946:0", copySource: "crwdns99948:0crwdne99948:0", copySourceLinkJS: "crwdns99950:0crwdne99950:0", copySourceLinkTS: "crwdns99952:0crwdne99952:0", stackblitz: "crwdns99954:0crwdne99954:0", headTitle: "crwdns99956:0crwdne99956:0", emojiLove: "crwdns99958:0crwdne99958:0", emoojiWarning: "crwdns99960:0crwdne99960:0", mainNavigation: "crwdns99962:0crwdne99962:0", skipToContent: "crwdns99964:0crwdne99964:0", openDrawer: "crwdns99966:0crwdne99966:0", changeLanguage: "crwdns99968:0crwdne99968:0", pageTOC: "crwdns99970:0crwdne99970:0", showJSSource: "crwdns99972:0crwdne99972:0", showTSSource: "crwdns99974:0crwdne99974:0", close: "crwdns99976:0crwdne99976:0", useHighDensity: "crwdns99978:0crwdne99978:0", spacingUnit: "crwdns99980:0crwdne99980:0", resetDensity: "crwdns99982:0crwdne99982:0", increaseSpacing: "crwdns99984:0crwdne99984:0", decreaseSpacing: "crwdns99986:0crwdne99986:0", getProfessionalSupport: "crwdns103878:0crwdne103878:0", diamondSponsors: "crwdns105090:0crwdne105090:0", pages: { "/getting-started": "crwdns99988:0crwdne99988:0", "/getting-started/installation": "crwdns99990:0crwdne99990:0", "/getting-started/usage": "crwdns99992:0crwdne99992:0", "/getting-started/example-projects": "crwdns99994:0crwdne99994:0", "/getting-started/templates": "crwdns99996:0crwdne99996:0", "/getting-started/learn": "crwdns99998:0crwdne99998:0", "/getting-started/faq": "crwdns100000:0crwdne100000:0", "/getting-started/supported-components": "crwdns100002:0crwdne100002:0", "/getting-started/supported-platforms": "crwdns100004:0crwdne100004:0", "/getting-started/support": "crwdns102250:0crwdne102250:0", "/components": "crwdns100006:0crwdne100006:0", "/components/about-the-lab": "crwdns100008:0crwdne100008:0", "/components/click-away-listener": "crwdns100010:0crwdne100010:0", "/component/about": "crwdns100012:0crwdne100012:0", "/components/app-bar": "crwdns100014:0crwdne100014:0", "/components/autocomplete": "crwdns100016:0crwdne100016:0", "/components/avatars": "crwdns100018:0crwdne100018:0", "/components/badges": "crwdns100020:0crwdne100020:0", "/components/basic-inputs": "crwdns100022:0crwdne100022:0", "/components/bottom-navigation": "crwdns100024:0crwdne100024:0", "/components/box": "crwdns100026:0crwdne100026:0", "/components/breadcrumbs": "crwdns100028:0crwdne100028:0", "/components/buttons": "crwdns100030:0crwdne100030:0", "/components/cards": "crwdns100032:0crwdne100032:0", "/components/checkboxes": "crwdns100034:0crwdne100034:0", "/components/chips": "crwdns100036:0crwdne100036:0", "/components/container": "crwdns100038:0crwdne100038:0", "/components/content": "crwdns100040:0crwdne100040:0", "/components/css-baseline": "crwdns100042:0crwdne100042:0", "/components/data-display": "crwdns100044:0crwdne100044:0", "/components/dialogs": "crwdns100046:0crwdne100046:0", "/components/dividers": "crwdns100048:0crwdne100048:0", "/components/drawers": "crwdns100050:0crwdne100050:0", "/components/expansion-panels": "crwdns100052:0crwdne100052:0", "/components/feedback": "crwdns100054:0crwdne100054:0", "/components/grid": "crwdns100056:0crwdne100056:0", "/components/hidden": "crwdns100058:0crwdne100058:0", "/components/grid-list": "crwdns100060:0crwdne100060:0", "/components/icons": "crwdns100062:0crwdne100062:0", "/components/inputs": "crwdns100064:0crwdne100064:0", "/components/lab": "crwdns100066:0crwdne100066:0", "/components/layout": "crwdns100068:0crwdne100068:0", "/components/links": "crwdns100070:0crwdne100070:0", "/components/lists": "crwdns100072:0crwdne100072:0", "/components/menus": "crwdns100074:0crwdne100074:0", "/components/modal": "crwdns100076:0crwdne100076:0", "/components/navigation": "crwdns100078:0crwdne100078:0", "/components/no-ssr": "crwdns100080:0crwdne100080:0", "/components/other": "crwdns100082:0crwdne100082:0", "/components/paper": "crwdns100084:0crwdne100084:0", "/components/pickers": "crwdns100756:0crwdne100756:0", "/components/popover": "crwdns100088:0crwdne100088:0", "/components/popper": "crwdns100090:0crwdne100090:0", "/components/portal": "crwdns100092:0crwdne100092:0", "/components/progress": "crwdns100094:0crwdne100094:0", "/components/progress-validation": "crwdns100096:0crwdne100096:0", "/components/radio-buttons": "crwdns100098:0crwdne100098:0", "/components/selection-controls": "crwdns100100:0crwdne100100:0", "/components/selects": "crwdns100102:0crwdne100102:0", "/components/slider": "crwdns100104:0crwdne100104:0", "/components/snackbars": "crwdns100106:0crwdne100106:0", "/components/speed-dial": "crwdns100108:0crwdne100108:0", "/components/steppers": "crwdns100110:0crwdne100110:0", "/components/surfaces": "crwdns100112:0crwdne100112:0", "/components/switches": "crwdns100114:0crwdne100114:0", "/components/tables": "crwdns100116:0crwdne100116:0", "/components/tabs": "crwdns100118:0crwdne100118:0", "/components/text-fields": "crwdns100120:0crwdne100120:0", "/components/toggle-button": "crwdns100122:0crwdne100122:0", "/components/tooltips": "crwdns100124:0crwdne100124:0", "/components/transfer-list": "crwdns100126:0crwdne100126:0", "/components/transitions": "crwdns100128:0crwdne100128:0", "/components/typography": "crwdns100130:0crwdne100130:0", "/components/use-media-query": "crwdns100132:0crwdne100132:0", "/components/utils": "crwdns100134:0crwdne100134:0", "/css-in-js": "crwdns100136:0crwdne100136:0", "/css-in-js/basics": "crwdns100138:0crwdne100138:0", "/css-in-js/advanced": "crwdns100140:0crwdne100140:0", "/system": "crwdns100142:0crwdne100142:0", "/system/basics": "crwdns100144:0crwdne100144:0", "/system/borders": "crwdns100146:0crwdne100146:0", "/system/display": "crwdns100148:0crwdne100148:0", "/system/flexbox": "crwdns100150:0crwdne100150:0", "/system/palette": "crwdns100152:0crwdne100152:0", "/system/positions": "crwdns100154:0crwdne100154:0", "/system/shadows": "crwdns100156:0crwdne100156:0", "/system/sizing": "crwdns100158:0crwdne100158:0", "/system/spacing": "crwdns100160:0crwdne100160:0", "/system/typography": "crwdns100162:0crwdne100162:0", "/customization": "crwdns100164:0crwdne100164:0", "/customization/theming": "crwdns100758:0crwdne100758:0", "/customization/breakpoints": "crwdns100168:0crwdne100168:0", "/customization/color": "crwdns100170:0crwdne100170:0", "/customization/themes": "crwdns100172:0crwdne100172:0", "/customization/palette": "crwdns100174:0crwdne100174:0", "/customization/type": "crwdns100176:0crwdne100176:0", "/customization/typography": "crwdns100178:0crwdne100178:0", "/customization/spacing": "crwdns100180:0crwdne100180:0", "/customization/z-index": "crwdns100182:0crwdne100182:0", "/customization/globals": "crwdns100184:0crwdne100184:0", "/customization/components": "crwdns100186:0crwdne100186:0", "/customization/default-theme": "crwdns100188:0crwdne100188:0", "/guides": "crwdns100190:0crwdne100190:0", "/guides/api": "crwdns100192:0crwdne100192:0", "/guides/typescript": "crwdns100194:0crwdne100194:0", "/guides/interoperability": "crwdns100196:0crwdne100196:0", "/guides/minimizing-bundle-size": "crwdns100198:0crwdne100198:0", "/guides/composition": "crwdns100200:0crwdne100200:0", "/guides/responsive-ui": "crwdns100202:0crwdne100202:0", "/guides/server-rendering": "crwdns100204:0crwdne100204:0", "/guides/migration-v3": "crwdns100206:0crwdne100206:0", "/guides/migration-v0x": "crwdns100208:0crwdne100208:0", "/guides/testing": "crwdns100210:0crwdne100210:0", "/guides/flow": "crwdns100212:0crwdne100212:0", "/guides/right-to-left": "crwdns100214:0crwdne100214:0", "/discover-more": "crwdns100216:0crwdne100216:0", "/discover-more/showcase": "crwdns100218:0crwdne100218:0", "/discover-more/related-projects": "crwdns100220:0crwdne100220:0", "/discover-more/roadmap": "crwdns100222:0crwdne100222:0", "/discover-more/backers": "crwdns100224:0crwdne100224:0", "/discover-more/vision": "crwdns100226:0crwdne100226:0", "/discover-more/team": "crwdns100228:0crwdne100228:0", "/discover-more/community": "crwdns100230:0crwdne100230:0", "/discover-more/changelog": "crwdns100232:0crwdne100232:0", "/discover-more/governance": "crwdns100234:0crwdne100234:0", "/discover-more/languages": "crwdns100236:0crwdne100236:0", "/versions": "crwdns100238:0crwdne100238:0", "/styles": "crwdns100240:0crwdne100240:0", "/styles/basics": "crwdns100242:0crwdne100242:0", "/styles/advanced": "crwdns100244:0crwdne100244:0", "https://themes.material-ui.com/": "crwdns100246:0crwdne100246:0", "/components/material-icons": "crwdns100760:0crwdne100760:0", "/components/textarea-autosize": "crwdns100762:0crwdne100762:0", "/components/rating": "crwdns100764:0crwdne100764:0", "/components/skeleton": "crwdns100766:0crwdne100766:0", "/components/tree-view": "crwdns100768:0crwdne100768:0", "/customization/density": "crwdns100770:0crwdne100770:0" } } },
        "1Alt": function(e, t) {
            var n = 0,
                o = Math.random();
            e.exports = function(e) { return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++n + o).toString(36)) }
        },
        "1BH+": function(e) { e.exports = { homeQuickWord: "Ein schnelles Wort von unseren Sponsoren:", helpToTranslate: "Help to translate", editWebsiteColors: "Farbschema der Seite bearbeiten", toggleTheme: "Toggle light/dark theme", toggleRTL: "Toggle right-to-left/left-to-right", github: "GitHub-Repository", strapline: "React Komponenten fÃ¼r schnellere und einfachere Web-Entwicklung. Bauen SIe ihr eigenes Design-System oder starten Sie mit Material Design.", getStarted: "Erste Schritte", installation: "Installation", installDescr: "Installieren sie Material-UI via npm. Wir kÃ¼mmern uns um das benÃ¶tigte CSS.", cdn: "oder benutzen Sie ein CDN.", loadFont: "Laden Sie die Standard Roboto Schriftart.", installButton: "Lesen Sie die Installationsschritte", usage: "Nutzung", usageDescr: "Material-UI Komponenten funktionieren ohne zusÃ¤tzliche Einrichtung und verÃ¤ndern keine Variablen im globalen Sichtbarkeitsbereich.", usageButton: "Erkunden Sie die Dokumentation", themes: "Premium Themen", themesDescr: "Bringen Sie Material-UI auf die nÃ¤chste Stufe mit Premium-Themen aus unserem offiziellen Marktplatz - alle basierend auf Material-UI.", themesButton: "Themen durchsuchen", whosUsing: "Wer nutzt Material-UI?", joinThese: "Treten Sie dieser oder anderer groÃŸartiger Organisationen bei!", usingMui: "Nutzen Sie Material-UI?", letUsKnow: "Lassen Sie es uns wissen!", footerCommunity: "Gemeinschaft", footerResources: "Resources", homeFooterRelease: "Aktuell {{versionNumber}}. VerÃ¶ffentlicht unter der {{license}}.", license: "MIT-Lizenz", likeMui: "GefÃ¤llt ihnen Material-UI?", adblock: "Wenn ihnen technologie-bezogene Werbung nichts ausmacht und Sie Open Source unterstÃ¼tzen mÃ¶chten, dann kÃ¶nnen Sie gern ihren Ad-Blocker fÃ¼r Material-UI deaktivieren.", thanks: "Vielen Dank!", editPage: "Helfen Sie, diese Seite zu Ã¼bersetzen", tableOfContents: "Inhaltsverzeichnis", sourceCode: "Quelltext", traffic: "Datenverkehr", newest: "neueste", stars: "Github-Star", visit: "Besuchen sie die Website", dashboardTitle: "Dashboard", dashboardDescr: "Ein minimales Dashboard mit Taskleiste und einem Drawer in mini Variante. Das Diagramm wurde von Recharts zur VerfÃ¼gung gestellt, aber es ist leicht ein anderes Paket dafÃ¼r zu nutzen.", signInTitle: "Anmelden", signInDescr: "Eine einfache Anmeldeseite.", signInSideTitle: "Anmeldeseite", signInSideDescr: "Eine einfache Anmeldeseite.", signUpTitle: "Registrieren", signUpDescr: "Eine einfache Anmeldeseite.", blogTitle: "Blog", blogDescr: "Ein ausgeklÃ¼geltes Blog-Seitenlayout. Markdown-UnterstÃ¼tzung wird von markdown-to-jsx zur VerfÃ¼gung gestellt, kann jedoch leicht ersetzt werden.", checkoutTitle: "Check Out", checkoutDescr: "Ein schrittweises Checkout-Seitenlayout. Die Anzahl der Schritte ist anpassbar oder gar komplett optional.", albumTitle: "Album", albumDescr: 'Ein responsives Album- / Galerie-Seitenlayout mit einer "hero unit" und einer FuÃŸzeile.', pricingTitle: "Preise", pricingDescr: "Erstellen Sie mit diesem Seitenlayout schnell eine effektive Preistabelle fÃ¼r ihre potenziellen Kunden.", stickyFooterTitle: "Feste FuÃŸzeile", stickyFooterDescr: "HÃ¤ngen Sie eine FuÃŸzeile am unteren Rand des Ansichtsfensters an, wenn der Seiteninhalt kurz ist.", expandAll: "Alles aufklappen", showSource: "Quellcode anzeigen", hideSource: "Quellcode verstecken", showFullSource: "Show the full source", hideFullSource: "Hide the full source", viewGitHub: "Den Quellcode auf GitHub anzeigen", codesandbox: "In CodeSandbox bearbeiten", seeMore: "Mehr anzeigen", copySource: "Quellcode kopieren", copySourceLinkJS: "Kopiere Link zum JavaScript Quellcode", copySourceLinkTS: "Kopiere Link zum TypeScript Quellcode", stackblitz: "In StackBlitz bearbeiten (nur JS)", headTitle: "Material-UI: A popular React UI framework", emojiLove: "Liebe", emoojiWarning: "Warnung", mainNavigation: "Haupt-Navigation", skipToContent: "Zu Seitenhinhalt springen", openDrawer: "Haupt-Navigation Ã¶ffnen", changeLanguage: "Sprache Ã¤ndern", pageTOC: "Inhaltsverzeichnis der Seite", showJSSource: "Quelltext in JavaScript anzeigen", showTSSource: "Quelltext in TypeScript anzeigen", close: "SchlieÃŸen", useHighDensity: "HÃ¶here Dichte anwenden durch props", spacingUnit: "Abstandseinheit", resetDensity: "Dichte zurÃ¼cksetzen", increaseSpacing: "Abstand erhÃ¶hen", decreaseSpacing: "Abstand verringern", getProfessionalSupport: "Get Professional Support", diamondSponsors: "Diamond Sponsors", pages: { "/getting-started": "Erste Schritte", "/getting-started/installation": "Installation", "/getting-started/usage": "Nutzung", "/getting-started/example-projects": "Beispielprojekte", "/getting-started/templates": "Templates", "/getting-started/learn": "Lernen", "/getting-started/faq": "HÃ¤ufige Fragen", "/getting-started/supported-components": "UnterstÃ¼tzte Komponenten", "/getting-started/supported-platforms": "UnterstÃ¼tzte Plattformen", "/getting-started/support": "Support", "/components": "Komponenten", "/components/about-the-lab": "Ãœber das Labor", "/components/click-away-listener": "AuÃŸerhalb Klick Ereignisbehandlungsroutine", "/component/about": "Ãœber das Labor", "/components/app-bar": "App Bar", "/components/autocomplete": "AutovervollstÃ¤ndigung (Autocomplete)", "/components/avatars": "Avatare", "/components/badges": "Badges", "/components/basic-inputs": "Grundlegende Eingaben", "/components/bottom-navigation": "Bottom Navigation (Untere Navigation)", "/components/box": "Box", "/components/breadcrumbs": "Brotkrumen", "/components/buttons": "SchaltflÃ¤chen", "/components/cards": "Karten (Cards)", "/components/checkboxes": "KontrollkÃ¤stchen", "/components/chips": "Chips", "/components/container": "Container", "/components/content": "Inhalt", "/components/css-baseline": "CSS-Baseline", "/components/data-display": "Datenanzeige", "/components/dialogs": "Dialoge", "/components/dividers": "Trenner (Divider)", "/components/drawers": "Seitliches MenÃ¼", "/components/expansion-panels": "Erweiterungspanel (Expansion Panel)", "/components/feedback": "Feedback", "/components/grid": "Grid", "/components/hidden": "Hidden", "/components/grid-list": "Rasterliste (Grid List)", "/components/icons": "Icons", "/components/inputs": "Eingaben", "/components/lab": "Labor", "/components/layout": "Layout", "/components/links": "Links", "/components/lists": "Listen (List)", "/components/menus": "MenÃ¼s", "/components/modal": "Modal", "/components/navigation": "Navigation", "/components/no-ssr": "NoSSR", "/components/other": "Sonstiges", "/components/paper": "Paper", "/components/pickers": "Date / Time", "/components/popover": "Popover", "/components/popper": "Popper", "/components/portal": "Portal", "/components/progress": "Fortschritt (Progress)", "/components/progress-validation": "Feedback", "/components/radio-buttons": "Optionsfeld (Radio Buttons)", "/components/selection-controls": "Auswahlsteuerelemente (Selection Controls)", "/components/selects": "AuswÃ¤hler (Selects)", "/components/slider": "Regler", "/components/snackbars": "Snackbars", "/components/speed-dial": "Schnellwahl", "/components/steppers": "Stepper", "/components/surfaces": "OberflÃ¤chen", "/components/switches": "Schalter", "/components/tables": "Tabellen (Tables)", "/components/tabs": "Tabs", "/components/text-fields": "Text Felder (Text Fields)", "/components/toggle-button": "Schalter", "/components/tooltips": "Tooltip", "/components/transfer-list": "Transferliste (Transfer List)", "/components/transitions": "ÃœbergÃ¤nge", "/components/typography": "Typografie", "/components/use-media-query": "useMediaQuery", "/components/utils": "Utils", "/css-in-js": "Stile", "/css-in-js/basics": "Grundlegendes", "/css-in-js/advanced": "Erweitertes", "/system": "System", "/system/basics": "Grundlegendes", "/system/borders": "Rahmen", "/system/display": "Anzeige", "/system/flexbox": "Flexbox", "/system/palette": "Palette", "/system/positions": "Positionen", "/system/shadows": "Schatten", "/system/sizing": "Dimensionierung", "/system/spacing": "AbstÃ¤nde", "/system/typography": "Typografie", "/customization": "Individuelle Anpassung", "/customization/theming": "Ãœbersicht", "/customization/breakpoints": "Haltepunkte", "/customization/color": "Farbe (Color)", "/customization/themes": "Ãœbersicht", "/customization/palette": "Palette", "/customization/type": "Typ (helles/dunkles Theme)", "/customization/typography": "Typografie", "/customization/spacing": "AbstÃ¤nde", "/customization/z-index": "z-index", "/customization/globals": "Global", "/customization/components": "Ãœberschreibungen", "/customization/default-theme": "Standardtheme", "/guides": "LeitfÃ¤den", "/guides/api": "API-Design-Ansatz", "/guides/typescript": "TypeScript", "/guides/interoperability": "InteroperabilitÃ¤t der Stilbibliothek", "/guides/minimizing-bundle-size": "PaketgrÃ¶ÃŸe minimieren", "/guides/composition": "Komposition", "/guides/responsive-ui": "Responsive UI", "/guides/server-rendering": "Server-Rendering", "/guides/migration-v3": "Migration von v3", "/guides/migration-v0x": "Migration von v0.x", "/guides/testing": "Testen", "/guides/flow": "Flow", "/guides/right-to-left": "Rechts nach links", "/discover-more": "Mehr entdecken", "/discover-more/showcase": "Ausstellung", "/discover-more/related-projects": "Verwandte Projekte", "/discover-more/roadmap": "Zeitplan", "/discover-more/backers": "Sponsoren & UnterstÃ¼tzer", "/discover-more/vision": "Vision", "/discover-more/team": "Team", "/discover-more/community": "Gemeinschaft", "/discover-more/changelog": "Ã„nderungen", "/discover-more/governance": "FÃ¼hrung", "/discover-more/languages": "Sprachen", "/versions": "Versionen", "/styles": "Stile", "/styles/basics": "Grundlegendes", "/styles/advanced": "Erweitert", "https://themes.material-ui.com/": "Premium-Themes", "/components/material-icons": "Material Icons", "/components/textarea-autosize": "Textarea Autosize", "/components/rating": "Rating", "/components/skeleton": "Skeleton", "/components/tree-view": "Tree View", "/customization/density": "Density" } } },
        "1TCz": function(e, t, n) {
            "use strict";
            n.r(t);
            var o = n("UrUy"),
                s = n.n(o),
                a = n("LkAs"),
                r = n("Moms"),
                i = n("bMj6"),
                c = n("hZod"),
                p = n("tEuJ"),
                u = n("R3/3"),
                l = n("0tNF"),
                d = (n("scDZ"), n("mXGw")),
                m = n.n(d),
                g = n("o42t"),
                h = n.n(g),
                f = n("Dfzq"),
                b = n.n(f),
                v = n("/m4v"),
                w = n("FxtG"),
                y = n("0EY2"),
                S = n.n(y),
                x = n("0L9p"),
                k = n.n(x),
                T = n("iBBK"),
                z = n("ury0"),
                j = n.n(z),
                C = n("bBV7"),
                D = n("+e5d"),
                I = n("IOrS"),
                P = n("Rbzu"),
                A = [{ pathname: "/getting-started", children: [{ pathname: "/getting-started/installation" }, { pathname: "/getting-started/usage" }, { pathname: "/getting-started/example-projects" }, { pathname: "/getting-started/templates" }, { pathname: "/getting-started/learn" }, { pathname: "/getting-started/faq", title: "FAQs" }, { pathname: "/getting-started/supported-components" }, { pathname: "/getting-started/supported-platforms" }, { pathname: "/getting-started/support" }] }, { pathname: "/components", children: [{ pathname: "/components", subheader: "/components/layout", children: [{ pathname: "/components/box" }, { pathname: "/components/container" }, { pathname: "/components/grid" }, { pathname: "/components/grid-list" }, { pathname: "/components/hidden" }] }, { pathname: "/components", subheader: "/components/inputs", children: [{ pathname: "/components/buttons" }, { pathname: "/components/checkboxes" }, { pathname: "/components/pickers", title: "Date / Time" }, { pathname: "/components/radio-buttons" }, { pathname: "/components/selects" }, { pathname: "/components/slider" }, { pathname: "/components/switches" }, { pathname: "/components/text-fields" }, { pathname: "/components/transfer-list" }, { pathname: "/components/integrated-autocomplete" }] }, { pathname: "/components", subheader: "/components/navigation", children: [{ pathname: "/components/bottom-navigation" }, { pathname: "/components/breadcrumbs" }, { pathname: "/components/drawers" }, { pathname: "/components/links" }, { pathname: "/components/menus" }, { pathname: "/components/steppers" }, { pathname: "/components/tabs" }] }, { pathname: "/components", subheader: "/components/surfaces", children: [{ pathname: "/components/app-bar" }, { pathname: "/components/paper" }, { pathname: "/components/cards" }, { pathname: "/components/expansion-panels" }] }, { pathname: "/components", subheader: "/components/feedback", children: [{ pathname: "/components/progress" }, { pathname: "/components/dialogs" }, { pathname: "/components/snackbars" }] }, { pathname: "/components", subheader: "/components/data-display", children: [{ pathname: "/components/avatars" }, { pathname: "/components/badges" }, { pathname: "/components/chips" }, { pathname: "/components/dividers" }, { pathname: "/components/icons" }, { pathname: "/components/material-icons" }, { pathname: "/components/lists" }, { pathname: "/components/tables" }, { pathname: "/components/tooltips" }, { pathname: "/components/typography" }] }, { pathname: "/components", subheader: "/components/utils", children: [{ pathname: "/components/click-away-listener" }, { pathname: "/components/css-baseline", title: "CSS Baseline" }, { pathname: "/components/modal" }, { pathname: "/components/no-ssr", title: "No SSR" }, { pathname: "/components/popover" }, { pathname: "/components/popper" }, { pathname: "/components/portal" }, { pathname: "/components/textarea-autosize" }, { pathname: "/components/transitions" }, { pathname: "/components/use-media-query", title: "useMediaQuery" }] }, { pathname: "/components", subheader: "/components/lab", children: [{ pathname: "/components/about-the-lab" }, { pathname: "/components/autocomplete" }, { pathname: "/components/rating" }, { pathname: "/components/skeleton" }, { pathname: "/components/speed-dial" }, { pathname: "/components/toggle-button" }, { pathname: "/components/tree-view" }] }] }, Object(P.a)({ title: "Component API" }, { pathname: "/api", children: [{ pathname: "/api/app-bar" }, { pathname: "/api/autocomplete" }, { pathname: "/api/avatar" }, { pathname: "/api/backdrop" }, { pathname: "/api/badge" }, { pathname: "/api/bottom-navigation" }, { pathname: "/api/bottom-navigation-action" }, { pathname: "/api/breadcrumbs" }, { pathname: "/api/button" }, { pathname: "/api/button-base" }, { pathname: "/api/button-group" }, { pathname: "/api/card" }, { pathname: "/api/card-action-area" }, { pathname: "/api/card-actions" }, { pathname: "/api/card-content" }, { pathname: "/api/card-header" }, { pathname: "/api/card-media" }, { pathname: "/api/checkbox" }, { pathname: "/api/chip" }, { pathname: "/api/circular-progress" }, { pathname: "/api/click-away-listener" }, { pathname: "/api/collapse" }, { pathname: "/api/container" }, { pathname: "/api/css-baseline" }, { pathname: "/api/dialog" }, { pathname: "/api/dialog-actions" }, { pathname: "/api/dialog-content" }, { pathname: "/api/dialog-content-text" }, { pathname: "/api/dialog-title" }, { pathname: "/api/divider" }, { pathname: "/api/drawer" }, { pathname: "/api/expansion-panel" }, { pathname: "/api/expansion-panel-actions" }, { pathname: "/api/expansion-panel-details" }, { pathname: "/api/expansion-panel-summary" }, { pathname: "/api/fab" }, { pathname: "/api/fade" }, { pathname: "/api/filled-input" }, { pathname: "/api/form-control" }, { pathname: "/api/form-control-label" }, { pathname: "/api/form-group" }, { pathname: "/api/form-helper-text" }, { pathname: "/api/form-label" }, { pathname: "/api/grid" }, { pathname: "/api/grid-list" }, { pathname: "/api/grid-list-tile" }, { pathname: "/api/grid-list-tile-bar" }, { pathname: "/api/grow" }, { pathname: "/api/hidden" }, { pathname: "/api/icon" }, { pathname: "/api/icon-button" }, { pathname: "/api/input" }, { pathname: "/api/input-adornment" }, { pathname: "/api/input-base" }, { pathname: "/api/input-label" }, { pathname: "/api/linear-progress" }, { pathname: "/api/link" }, { pathname: "/api/list" }, { pathname: "/api/list-item" }, { pathname: "/api/list-item-avatar" }, { pathname: "/api/list-item-icon" }, { pathname: "/api/list-item-secondary-action" }, { pathname: "/api/list-item-text" }, { pathname: "/api/list-subheader" }, { pathname: "/api/menu" }, { pathname: "/api/menu-item" }, { pathname: "/api/menu-list" }, { pathname: "/api/mobile-stepper" }, { pathname: "/api/modal" }, { pathname: "/api/native-select" }, { pathname: "/api/no-ssr" }, { pathname: "/api/outlined-input" }, { pathname: "/api/paper" }, { pathname: "/api/popover" }, { pathname: "/api/popper" }, { pathname: "/api/portal" }, { pathname: "/api/radio" }, { pathname: "/api/radio-group" }, { pathname: "/api/rating" }, { pathname: "/api/root-ref" }, { pathname: "/api/select" }, { pathname: "/api/skeleton" }, { pathname: "/api/slide" }, { pathname: "/api/slider" }, { pathname: "/api/snackbar" }, { pathname: "/api/snackbar-content" }, { pathname: "/api/speed-dial" }, { pathname: "/api/speed-dial-action" }, { pathname: "/api/speed-dial-icon" }, { pathname: "/api/step" }, { pathname: "/api/step-button" }, { pathname: "/api/step-connector" }, { pathname: "/api/step-content" }, { pathname: "/api/step-icon" }, { pathname: "/api/step-label" }, { pathname: "/api/stepper" }, { pathname: "/api/svg-icon" }, { pathname: "/api/swipeable-drawer" }, { pathname: "/api/switch" }, { pathname: "/api/tab" }, { pathname: "/api/table" }, { pathname: "/api/table-body" }, { pathname: "/api/table-cell" }, { pathname: "/api/table-footer" }, { pathname: "/api/table-head" }, { pathname: "/api/table-pagination" }, { pathname: "/api/table-row" }, { pathname: "/api/table-sort-label" }, { pathname: "/api/tabs" }, { pathname: "/api/textarea-autosize" }, { pathname: "/api/text-field" }, { pathname: "/api/toggle-button" }, { pathname: "/api/toggle-button-group" }, { pathname: "/api/toolbar" }, { pathname: "/api/tooltip" }, { pathname: "/api/tree-item" }, { pathname: "/api/tree-view" }, { pathname: "/api/typography" }, { pathname: "/api/zoom" }] }), { pathname: "/styles", children: [{ pathname: "/styles/basics" }, { pathname: "/styles/advanced" }, { pathname: "/styles/api", title: "API" }] }, { pathname: "/system", children: [{ pathname: "/system/basics" }, { pathname: "/system/borders" }, { pathname: "/system/display" }, { pathname: "/system/flexbox" }, { pathname: "/system/palette" }, { pathname: "/system/positions" }, { pathname: "/system/shadows" }, { pathname: "/system/sizing" }, { pathname: "/system/spacing" }, { pathname: "/system/typography" }, { pathname: "/system/api", title: "API" }] }, { pathname: "/customization", children: [{ pathname: "/customization", subheader: "/customization/theming", children: [{ pathname: "/customization/theming", title: "Overview" }, { pathname: "/customization/palette" }, { pathname: "/customization/typography" }, { pathname: "/customization/spacing" }, { pathname: "/customization/breakpoints" }, { pathname: "/customization/density" }, { pathname: "/customization/z-index", title: "z-index" }, { pathname: "/customization/globals" }] }, { pathname: "/customization/components" }, { pathname: "/customization/color" }, { pathname: "/customization/default-theme", title: "Default Theme" }] }, { pathname: "/guides", children: [{ pathname: "/guides/api", title: "API Design Approach" }, { pathname: "/guides/typescript", title: "TypeScript" }, { pathname: "/guides/interoperability", title: "Style Library Interoperability" }, { pathname: "/guides/minimizing-bundle-size" }, { pathname: "/guides/composition" }, { pathname: "/guides/server-rendering" }, { pathname: "/guides/responsive-ui", title: "Responsive UI" }, { pathname: "/guides/migration-v3", title: "Migration From v3" }, { pathname: "/guides/migration-v0x", title: "Migration From v0.x" }, { pathname: "/guides/testing" }, { pathname: "/guides/right-to-left", title: "Right-to-left" }, { pathname: "/guides/flow" }] }, { pathname: "https://themes.material-ui.com/", title: "Premium Themes", linkProps: { "data-ga-event-category": "premium-themes", "data-ga-event-action": "click", "data-ga-event-label": "sidenav-link" } }, { pathname: "/discover-more", children: [{ pathname: "/discover-more/showcase" }, { pathname: "/discover-more/related-projects" }, { pathname: "/discover-more/roadmap" }, { pathname: "/discover-more/backers", title: "Sponsors & Backers" }, { pathname: "/discover-more/vision" }, { pathname: "/discover-more/team" }, { pathname: "/discover-more/changelog" }, { pathname: "/discover-more/languages" }, { pathname: "/discover-more/governance" }] }, { pathname: "/blog", children: [{ pathname: "/blog/october-2019-update" }, { pathname: "/blog/september-2019-update" }, { pathname: "/blog/august-2019-update" }, { pathname: "/blog/july-2019-update" }, { pathname: "/blog/june-2019-update" }, { pathname: "/blog/may-2019-update" }, { pathname: "/blog/material-ui-v4-is-out", title: "Material-UI v4 is out" }, { pathname: "/blog/april-2019-update" }, { pathname: "/blog/march-2019-update" }, { pathname: "/blog/2019-developer-survey-results" }, { pathname: "/blog/material-ui-v1-is-out", title: "Material-UI v1 is out" }] }, { pathname: "/versions", displayNav: !1 }, { pathname: "/", displayNav: !1, title: !1 }],
                M = n("011b"),
                E = n("hAlb"),
                U = n("18I3");

            function _(e) {
                for (var t = document, n = e.target; n && n !== t;) {
                    var o = n.getAttribute("data-ga-event-category");
                    if (o) { window.ga("send", { hitType: "event", eventCategory: o, eventAction: n.getAttribute("data-ga-event-action"), eventLabel: n.getAttribute("data-ga-event-label") }); break }
                    n = n.parentElement
                }
            }
            var L = !1;

            function O() {
                return m.a.useEffect(function() {
                    setTimeout(function() {
                        var e = Object(U.pathnameToLanguage)(window.location.pathname).canonical;
                        window.ga("set", { page: e }), window.ga("send", { hitType: "pageview" })
                    }), L || (L = !0, document.addEventListener("click", _))
                }, []), null
            }
            var B = n("XEXC"),
                F = n("ro6p"),
                R = n("NLnA");
            n.d(t, "default", function() { return X });
            var G = Object(T.c)({ plugins: Object(l.default)(Object(D.a)().plugins).concat([j()()]), insertionPoint: document.querySelector("#insertion-point-jss") });

            function N() {
                var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : R.CODE_VARIANTS.JS,
                    n = arguments.length > 1 ? arguments[1] : void 0,
                    o = (e = m.a.useRef(!0), m.a.useEffect(function() { e.current = !1 }, []), e.current),
                    s = m.a.useMemo(function() { var e = "undefined" != typeof window ? window.location.hash.match(/\.(js|tsx)$/) : null; if (null !== e) return "tsx" === e[1] ? R.CODE_VARIANTS.TS : R.CODE_VARIANTS.JS }, []),
                    a = m.a.useMemo(function() { if ("undefined" != typeof window) return Object(U.getCookie)("codeVariant") }, []),
                    r = !0 === o && (s || a) || t;
                return m.a.useEffect(function() { r !== t && n(r) }), m.a.useEffect(function() { document.cookie = "codeVariant=".concat(r, ";path=/;max-age=31536000") }, [r]), r
            }

            function V(e) {
                function t() { e.installing.addEventListener("statechange", function(t) { "installed" === t.target.state && e.waiting ? e.waiting.postMessage("skipWaiting") : "activated" === t.target.state && window.location.reload() }) }
                navigator.serviceWorker.controller && (e.waiting ? e.waiting.postMessage("skipWaiting") : e.installing ? t() : e.addEventListener("updatefound", t))
            }

            function H() {
                return (H = Object(u.default)(s.a.mark(function e() {
                    return s.a.wrap(function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!("serviceWorker" in navigator && window.location.host.indexOf("material-ui.com") <= 0)) { e.next = 5; break }
                                return e.next = 3, navigator.serviceWorker.register("/sw.js");
                            case 3:
                                V(e.sent);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, e)
                }))).apply(this, arguments)
            }
            k.a.languages(["en", "zh"]);
            var q = { sync: m.a.StrictMode, concurrent: m.a.unstable_ConcurrentMode }.legacy || m.a.Fragment,
                W = !1;
            console.log("%c\n\nâ–ˆâ–ˆâ–ˆâ•—   â–ˆâ–ˆâ–ˆâ•— â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•— â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•—â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•—â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•— â–ˆâ–ˆâ•— â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•— â–ˆâ–ˆâ•—      â–ˆâ–ˆâ•—   â–ˆâ–ˆâ•—â–ˆâ–ˆâ•—\nâ–ˆâ–ˆâ–ˆâ–ˆâ•— â–ˆâ–ˆâ–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•—â•šâ•â•â–ˆâ–ˆâ•”â•â•â•â–ˆâ–ˆâ•”â•â•â•â•â•â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•—â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•—â–ˆâ–ˆâ•‘      â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘\nâ–ˆâ–ˆâ•”â–ˆâ–ˆâ–ˆâ–ˆâ•”â–ˆâ–ˆâ•‘â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•—  â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•”â•â–ˆâ–ˆâ•‘â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•—â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘\nâ–ˆâ–ˆâ•‘â•šâ–ˆâ–ˆâ•”â•â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•”â•â•â•  â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•—â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•”â•â•â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘â•šâ•â•â•â•â•â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘\nâ–ˆâ–ˆâ•‘ â•šâ•â• â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘  â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ•‘   â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•—â–ˆâ–ˆâ•‘  â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘â–ˆâ–ˆâ•‘  â–ˆâ–ˆâ•‘â–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•— â•šâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ–ˆâ•”â•â–ˆâ–ˆâ•‘\nâ•šâ•â•     â•šâ•â•â•šâ•â•  â•šâ•â•   â•šâ•â•   â•šâ•â•â•â•â•â•â•â•šâ•â•  â•šâ•â•â•šâ•â•â•šâ•â•  â•šâ•â•â•šâ•â•â•â•â•â•â•  â•šâ•â•â•â•â•â• â•šâ•â•\n\nTip: you can access the documentation `theme` object directly in the console.\n", "font-family:monospace;color:#1976d2;font-size:12px;");
            var J = m.a.createElement(function() {
                    var e = Object(v.c)(),
                        t = Object(v.d)(function(e) { return e.options }),
                        n = N(t.codeVariant, function(t) { return e({ type: R.ACTION_TYPES.OPTIONS_CHANGE, payload: { codeVariant: t } }) });
                    return m.a.useEffect(function() { window.ga("set", "dimension1", n) }, [n]), m.a.useEffect(function() { window.ga("set", "dimension2", t.userLanguage) }, [t.userLanguage]), null
                }, null),
                K = m.a.createElement(function() {
                    var e = Object(v.c)(),
                        t = Object(C.useRouter)(),
                        n = Object(v.d)(function(e) { return e.options.userLanguage });
                    return m.a.useEffect(function() { "aa" === n && (window._jipt = [], window._jipt.push(["project", "material-ui-docs"]), Object(B.a)("https://cdn.crowdin.com/jipt/jipt.js", document.querySelector("head"))) }, [n]), m.a.useEffect(function() {
                        var o = Object(U.pathnameToLanguage)(C.Router._rewriteUrlForNextExport(t.asPath)),
                            s = o.userLanguage,
                            a = o.canonical,
                            r = "noDefault" !== Object(U.getCookie)("userLanguage") && "en" === n ? k.a.get(navigator.language) : n;
                        r !== n ? window.location = "en" === r ? a : "/".concat(r).concat(a) : s !== n && e({ type: R.ACTION_TYPES.OPTIONS_CHANGE, payload: { userLanguage: s } })
                    }, []), null
                }, null);

            function Q(e) {
                var t = e.children,
                    n = e.pageProps,
                    o = Object(C.useRouter)(),
                    s = m.a.useState(function() { return Object(M.a)(n.reduxServerState) })[0];
                m.a.useEffect(function() {
                    W || (W = !0, Object(w.loadCSS)("https://fonts.googleapis.com/icon?family=Material+Icons", document.querySelector("#material-icon-font")), Object(B.a)("https://www.google-analytics.com/analytics.js", document.querySelector("head"))),
                        function() { H.apply(this, arguments) }();
                    var e = document.querySelector("#jss-server-side");
                    e && e.parentElement.removeChild(e)
                }, []);
                var a = o.pathname;
                "/" !== a && (a = a.replace(/\/$/, ""));
                var r = function e(t, n) { var o = b()(t, function(t) { return t.children && 0 === n.indexOf("".concat(t.pathname, "/")) ? e(t.children, n) : n === t.pathname }); return o ? o.pathname !== n ? e(o.children, n) : o : null }(A, a),
                    i = ["https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"];
                return a.match(/onepirate/) ? i = ["https://fonts.googleapis.com/css?family=Roboto+Condensed:700|Work+Sans:300,400&display=swap"] : a.match(/blog/) && i.push("https://fonts.googleapis.com/css?family=Roboto+Slab:300&display=swap"), m.a.createElement(q, null, m.a.createElement(g.Container, null, m.a.createElement(S.a, null, i.map(function(e) { return m.a.createElement("link", { rel: "stylesheet", href: e, key: e }) })), m.a.createElement(v.a, { store: s }, m.a.createElement(E.a.Provider, { value: { activePage: r, pages: A } }, m.a.createElement(I.b, { jss: G }, m.a.createElement(F.b, null, t))), J, K)), m.a.createElement(O, { key: o.route }))
            }
            var X = function(e) {
                function t() { return Object(a.default)(this, t), Object(i.default)(this, Object(c.default)(t).apply(this, arguments)) }
                return Object(p.default)(t, e), Object(r.default)(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.Component,
                            n = e.pageProps;
                        return m.a.createElement(Q, { pageProps: n }, m.a.createElement(t, n))
                    }
                }]), t
            }(h.a);
            X.getInitialProps = function(e) { e.ctx; return { pageProps: {} } }
        },
        "1Tj+": function(e, t, n) {
            var o = n("IdFN"),
                s = n("WWmS"),
                a = n("ml72"),
                r = n("5MU4"),
                i = n("ezc+"),
                c = n("HWsP"),
                p = Object.getOwnPropertyDescriptor;
            t.f = n("GGqZ") ? p : function(e, t) {
                if (e = a(e), t = r(t, !0), c) try { return p(e, t) } catch (n) {}
                if (i(e, t)) return s(!o.f.call(e, t), e[t])
            }
        },
        "1ezk": function(e, t) { e.exports = function() { return !1 } },
        "1h76": function(e, t, n) {
            e.exports = function() {
                "use strict";
                var e = function(e, n) { return t(e.slice(), n) };

                function t(e, t) {
                    "function" != typeof t && (t = function(e, t) { return String(e).localeCompare(t) });
                    var o = e.length;
                    if (o <= 1) return e;
                    for (var s = new Array(o), a = 1; a < o; a *= 2) {
                        n(e, t, a, s);
                        var r = e;
                        e = s, s = r
                    }
                    return e
                }
                e.inplace = function(e, o) { var s = t(e, o); return s !== e && n(s, null, e.length, e), e };
                var n = function(e, t, n, o) {
                    var s, a, r, i, c, p = e.length,
                        u = 0,
                        l = 2 * n;
                    for (s = 0; s < p; s += l)
                        for (r = (a = s + n) + n, a > p && (a = p), r > p && (r = p), i = s, c = a;;)
                            if (i < a && c < r) t(e[i], e[c]) <= 0 ? o[u++] = e[i++] : o[u++] = e[c++];
                            else if (i < a) o[u++] = e[i++];
                    else {
                        if (!(c < r)) break;
                        o[u++] = e[c++]
                    }
                };
                return e
            }()
        },
        "1wfo": function(e, t, n) {
            var o = n("9liC"),
                s = n("Cmsx"),
                a = n("UnHL"),
                r = n("Sp5b"),
                i = n("C5nI");
            e.exports = function(e, t) {
                var n = 1 == e,
                    c = 2 == e,
                    p = 3 == e,
                    u = 4 == e,
                    l = 6 == e,
                    d = 5 == e || l,
                    m = t || i;
                return function(t, i, g) {
                    for (var h, f, b = a(t), v = s(b), w = o(i, g, 3), y = r(v.length), S = 0, x = n ? m(t, y) : c ? m(t, 0) : void 0; y > S; S++)
                        if ((d || S in v) && (f = w(h = v[S], S, b), e))
                            if (n) x[S] = f;
                            else if (f) switch (e) {
                            case 3:
                                return !0;
                            case 5:
                                return h;
                            case 6:
                                return S;
                            case 2:
                                x.push(h)
                        } else if (u) return !1;
                    return l ? -1 : p || u ? u : x
                }
            }
        },
        "2AbI": function(e, t, n) {
            var o = n("6TGQ"),
                s = n("tb+2"),
                a = n("h0av");
            e.exports = function(e) { return o(e, a, s) }
        },
        "2EQx": function(e, t, n) {
            var o = n("9aUh");
            e.exports = function(e) { return e == e && !o(e) }
        },
        "2LOZ": function(e, t, n) {
            var o = n("Ibj2"),
                s = n("9dxi")("iterator"),
                a = Array.prototype;
            e.exports = function(e) { return void 0 !== e && (o.Array === e || a[s] === e) }
        },
        "2UZ+": function(e, t, n) {
            "use strict";
            var o = n("X6VK"),
                s = n("1wfo")(6),
                a = "findIndex",
                r = !0;
            a in [] && Array(1)[a](function() { r = !1 }), o(o.P + o.F * r, "Array", { findIndex: function(e) { return s(this, e, arguments.length > 1 ? arguments[1] : void 0) } }), n("OfmW")(a)
        },
        "2wRU": function(e, t, n) {
            var o = n("GI0s"),
                s = n("ckUF"),
                a = n("T9Ud"),
                r = {};
            r["[object Float32Array]"] = r["[object Float64Array]"] = r["[object Int8Array]"] = r["[object Int16Array]"] = r["[object Int32Array]"] = r["[object Uint8Array]"] = r["[object Uint8ClampedArray]"] = r["[object Uint16Array]"] = r["[object Uint32Array]"] = !0, r["[object Arguments]"] = r["[object Array]"] = r["[object ArrayBuffer]"] = r["[object Boolean]"] = r["[object DataView]"] = r["[object Date]"] = r["[object Error]"] = r["[object Function]"] = r["[object Map]"] = r["[object Number]"] = r["[object Object]"] = r["[object RegExp]"] = r["[object Set]"] = r["[object String]"] = r["[object WeakMap]"] = !1, e.exports = function(e) { return a(e) && s(e.length) && !!r[o(e)] }
        },
        "3Ckp": function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() { var e = n("1TCz"); return { page: e.default || e } }])
        },
        "3kU/": function(e, t, n) {
            var o = n("2wRU"),
                s = n("TsNJ"),
                a = n("DhoL"),
                r = a && a.isTypedArray,
                i = r ? s(r) : o;
            e.exports = i
        },
        "3ydu": function(e, t, n) {
            var o = n("Bsg+"),
                s = n("PAFS"),
                a = function(e, t) { if (s(e), !o(t) && null !== t) throw TypeError(t + ": can't set as prototype!") };
            e.exports = {
                set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, o) {
                    try {
                        (o = n("9liC")(Function.call, n("1Tj+").f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
                    } catch (s) { t = !0 }
                    return function(e, n) { return a(e, n), t ? e.__proto__ = n : o(e, n), e }
                }({}, !1) : void 0),
                check: a
            }
        },
        "4a20": function(e, t) { e.exports = function(e) { return this.__data__.has(e) } },
        "4mhO": function(e, t) {
            var n = "__lodash_hash_undefined__";
            e.exports = function(e) { return this.__data__.set(e, n), this }
        },
        "5Avs": function(e, t) {
            e.exports = function(e, t) {
                for (var n = -1, o = null == e ? 0 : e.length; ++n < o;)
                    if (t(e[n], n, e)) return !0;
                return !1
            }
        },
        "5MU4": function(e, t, n) {
            var o = n("Bsg+");
            e.exports = function(e, t) { if (!o(e)) return e; var n, s; if (t && "function" == typeof(n = e.toString) && !o(s = n.call(e))) return s; if ("function" == typeof(n = e.valueOf) && !o(s = n.call(e))) return s; if (!t && "function" == typeof(n = e.toString) && !o(s = n.call(e))) return s; throw TypeError("Can't convert object to primitive value") }
        },
        "6TGQ": function(e, t, n) {
            var o = n("gwRl"),
                s = n("PqlX");
            e.exports = function(e, t, n) { var a = t(e); return s(e) ? a : o(a, n(e)) }
        },
        "6iN7": function(e, t, n) {
            var o = n("HIoB"),
                s = n("lYsT"),
                a = n("PqlX"),
                r = n("tfj2"),
                i = n("q+I6"),
                c = n("3kU/"),
                p = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var n = a(e),
                    u = !n && s(e),
                    l = !n && !u && r(e),
                    d = !n && !u && !l && c(e),
                    m = n || u || l || d,
                    g = m ? o(e.length, String) : [],
                    h = g.length;
                for (var f in e) !t && !p.call(e, f) || m && ("length" == f || l && ("offset" == f || "parent" == f) || d && ("buffer" == f || "byteLength" == f || "byteOffset" == f) || i(f, h)) || g.push(f);
                return g
            }
        },
        "6jsY": function(e, t, n) {
            "use strict";
            var o = n("PL1w"),
                s = o(n("ZOIa")),
                a = o(n("U8Yc")),
                r = o(n("KBEF")),
                i = o(n("J/q3")),
                c = o(n("3esu")),
                p = o(n("8m4E")),
                u = o(n("Od8a")),
                l = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                },
                d = function(e) { return e && e.__esModule ? e : { default: e } };
            Object.defineProperty(t, "__esModule", { value: !0 });
            var m = l(n("mXGw")),
                g = d(n("OWZz")),
                h = n("MUK1"),
                f = n("bBV7"),
                b = function(e) {
                    function t() { return (0, r.default)(this, t), (0, c.default)(this, (0, p.default)(t).apply(this, arguments)) }
                    return (0, u.default)(t, e), (0, i.default)(t, [{ key: "getChildContext", value: function() { return { router: f.makePublicRouterInstance(this.props.router) } } }, { key: "componentDidCatch", value: function(e) { throw e } }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.router,
                                n = e.Component,
                                o = e.pageProps,
                                s = y(t);
                            return m.default.createElement(v, null, m.default.createElement(n, (0, a.default)({}, o, { url: s })))
                        }
                    }], [{
                        key: "getInitialProps",
                        value: function(e) {
                            var t = e.Component,
                                n = (e.router, e.ctx);
                            try { return s.default.resolve(h.loadGetInitialProps(t, n)).then(function(e) { return { pageProps: e } }) } catch (o) { return s.default.reject(o) }
                        }
                    }]), t
                }(m.Component);
            b.childContextTypes = { router: g.default.object }, t.default = b;
            var v = function(e) {
                function t() { return (0, r.default)(this, t), (0, c.default)(this, (0, p.default)(t).apply(this, arguments)) }
                return (0, u.default)(t, e), (0, i.default)(t, [{ key: "componentDidMount", value: function() { this.scrollToHash() } }, { key: "componentDidUpdate", value: function() { this.scrollToHash() } }, {
                    key: "scrollToHash",
                    value: function() {
                        var e = window.location.hash;
                        if (e = !!e && e.substring(1)) {
                            var t = document.getElementById(e);
                            t && setTimeout(function() { return t.scrollIntoView() }, 0)
                        }
                    }
                }, { key: "render", value: function() { return this.props.children } }]), t
            }(m.Component);
            t.Container = v;
            var w = h.execOnce(function() { 0 });

            function y(e) {
                var t = e.pathname,
                    n = e.asPath,
                    o = e.query;
                return {get query() { return w(), o },
                    get pathname() { return w(), t },
                    get asPath() { return w(), n },
                    back: function() { w(), e.back() },
                    push: function(t, n) { return w(), e.push(t, n) },
                    pushTo: function(t, n) {
                        w();
                        var o = n ? t : null,
                            s = n || t;
                        return e.push(o, s)
                    },
                    replace: function(t, n) { return w(), e.replace(t, n) },
                    replaceTo: function(t, n) {
                        w();
                        var o = n ? t : null,
                            s = n || t;
                        return e.replace(o, s)
                    }
                }
            }
            t.createUrl = y
        },
        "7o+A": function(e, t) { e.exports = function(e) { var t = typeof e; return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e } },
        "8kJd": function(e, t, n) {
            var o = n("ZVIm")("keys"),
                s = n("1Alt");
            e.exports = function(e) { return o[e] || (o[e] = s(e)) }
        },
        "9dxi": function(e, t, n) {
            var o = n("ZVIm")("wks"),
                s = n("1Alt"),
                a = n("P56o").Symbol,
                r = "function" == typeof a;
            (e.exports = function(e) { return o[e] || (o[e] = r && a[e] || (r ? a : s)("Symbol." + e)) }).store = o
        },
        "9liC": function(e, t, n) {
            var o = n("b8Rm");
            e.exports = function(e, t, n) {
                if (o(e), void 0 === t) return e;
                switch (n) {
                    case 1:
                        return function(n) { return e.call(t, n) };
                    case 2:
                        return function(n, o) { return e.call(t, n, o) };
                    case 3:
                        return function(n, o, s) { return e.call(t, n, o, s) }
                }
                return function() { return e.apply(t, arguments) }
            }
        },
        A1KM: function(e, t, n) {
            var o = n("ezc+"),
                s = n("UnHL"),
                a = n("8kJd")("IE_PROTO"),
                r = Object.prototype;
            e.exports = Object.getPrototypeOf || function(e) { return e = s(e), o(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? r : null }
        },
        AJMQ: function(e, t) { e.exports = function(e) { return this.__data__.has(e) } },
        AkS8: function(e, t, n) {
            "use strict";
            var o = n("P56o"),
                s = n("X6VK"),
                a = n("sU/p"),
                r = n("+edc"),
                i = n("zIP/"),
                c = n("HqX2"),
                p = n("EusA"),
                u = n("Bsg+"),
                l = n("E7Vc"),
                d = n("zlqh"),
                m = n("jPEw"),
                g = n("jEou");
            e.exports = function(e, t, n, h, f, b) {
                var v = o[e],
                    w = v,
                    y = f ? "set" : "add",
                    S = w && w.prototype,
                    x = {},
                    k = function(e) {
                        var t = S[e];
                        a(S, e, "delete" == e ? function(e) { return !(b && !u(e)) && t.call(this, 0 === e ? 0 : e) } : "has" == e ? function(e) { return !(b && !u(e)) && t.call(this, 0 === e ? 0 : e) } : "get" == e ? function(e) { return b && !u(e) ? void 0 : t.call(this, 0 === e ? 0 : e) } : "add" == e ? function(e) { return t.call(this, 0 === e ? 0 : e), this } : function(e, n) { return t.call(this, 0 === e ? 0 : e, n), this })
                    };
                if ("function" == typeof w && (b || S.forEach && !l(function() {
                        (new w).entries().next()
                    }))) {
                    var T = new w,
                        z = T[y](b ? {} : -0, 1) != T,
                        j = l(function() { T.has(1) }),
                        C = d(function(e) { new w(e) }),
                        D = !b && l(function() { for (var e = new w, t = 5; t--;) e[y](t, t); return !e.has(-0) });
                    C || ((w = t(function(t, n) { p(t, w, e); var o = g(new v, t, w); return null != n && c(n, f, o[y], o), o })).prototype = S, S.constructor = w), (j || D) && (k("delete"), k("has"), f && k("get")), (D || z) && k(y), b && S.clear && delete S.clear
                } else w = h.getConstructor(t, e, f, y), r(w.prototype, n), i.NEED = !0;
                return m(w, e), x[e] = w, s(s.G + s.W + s.F * (w != v), x), b || h.setStrong(w, e, f), w
            }
        },
        "Akg/": function(e, t, n) {
            var o = n("2EQx"),
                s = n("h0av");
            e.exports = function(e) {
                for (var t = s(e), n = t.length; n--;) {
                    var a = t[n],
                        r = e[a];
                    t[n] = [a, r, o(r)]
                }
                return t
            }
        },
        B1es: function(e) { e.exports = { homeQuickWord: "Uma palavra rÃ¡pida de nossos patrocinadores:", helpToTranslate: "Ajude a traduzir", editWebsiteColors: "Editar cores do site", toggleTheme: "Toggle light/dark theme", toggleRTL: "Toggle right-to-left/left-to-right", github: "RepositÃ³rio no GitHub", strapline: "Componentes React para um desenvolvimento mais rÃ¡pido e fÃ¡cil. Construa seu prÃ³prio design, ou comece com Material Design.", getStarted: "Comece a Usar", installation: "InstalaÃ§Ã£o", installDescr: "Instale o Material-UI via npm. NÃ³s cuidamos de injetar o CSS necessÃ¡rio.", cdn: "ou use uma CDN.", loadFont: "Carregar a fonte padrÃ£o Roboto.", installButton: "Ler instruÃ§Ãµes de instalaÃ§Ã£o", usage: "Uso", usageDescr: "Os componentes do Material-UI funcionam sem qualquer configuraÃ§Ã£o adicional, e nÃ£o poluem o escopo global.", usageButton: "Explorar documentaÃ§Ã£o", themes: "Temas premium", themesDescr: "Leve o Material-UI para um novo patamar com temas sofisticados do nosso marketplace oficial. Todos construÃ­dos em Material-UI.", themesButton: "Explorar temas", whosUsing: "Quem tem usado Material-UI?", joinThese: "Junte-se a estas e outras grandes organizaÃ§Ãµes!", usingMui: "VocÃª estÃ¡ usando o Material-UI?", letUsKnow: "Nos conte!", footerCommunity: "Comunidade", footerResources: "Resources", homeFooterRelease: "Atualmente {{versionNumber}}. LanÃ§ado sob a {{license}}.", license: "LicenÃ§a MIT", likeMui: "Gostou do Material-UI?", adblock: "Se vocÃª nÃ£o se importa com anÃºncios relacionados Ã  tecnologia e deseja dar suporte ao CÃ³digo Aberto, inscreva o Material-UI na lista de liberaÃ§Ãµes no seu bloqueador de anÃºncios.", thanks: "Obrigado!", editPage: "Ajude a traduzir esta pÃ¡gina", tableOfContents: "Ãndice", sourceCode: "CÃ³digo fonte", traffic: "TrÃ¡fego", newest: "Mais recentes", stars: "Estrelas GitHub", visit: "Acesse o site", dashboardTitle: "Painel de controle", dashboardDescr: "Um painel mÃ­nimo com barra de tarefas e mini variante. O grÃ¡fico Ã© cortesia do Recharts, mas Ã© simples substituir por um alternativo.", signInTitle: "Entrar", signInDescr: "Uma simples pÃ¡gina de login.", signInSideTitle: "Entrar ao lado", signInSideDescr: "Uma pÃ¡gina simples de login.", signUpTitle: "Cadastre-se", signUpDescr: "Uma pÃ¡gina simples de cadastro.", blogTitle: "Blog", blogDescr: "Um layout de pÃ¡gina de blog sofisticado. O suporte do Markdown Ã© cortesia do markdown-to-jsx, mas Ã© facilmente substituÃ­do.", checkoutTitle: "Finalizar", checkoutDescr: "Um layout de pÃ¡gina de check-out por passo a passo. Adapte o nÃºmero de etapas para atender Ã s suas necessidades ou torne as etapas opcionais.", albumTitle: "Ãlbum", albumDescr: "Um layout de pÃ¡gina de Ã¡lbum / galeria responsivo com uma unidade de herÃ³i e rodapÃ©.", pricingTitle: "PreÃ§o", pricingDescr: "Crie rapidamente uma tabela de preÃ§os eficaz para seus clientes em potencial com este layout de pÃ¡gina.", stickyFooterTitle: "RodapÃ© fixo", stickyFooterDescr: "Anexe um rodapÃ© abaixo na janela de visualizaÃ§Ã£o quando o conteÃºdo da pÃ¡gina for curto.", expandAll: "Expandir tudo", showSource: "Ver o cÃ³digo fonte", hideSource: "Esconder o cÃ³digo fonte", showFullSource: "Show the full source", hideFullSource: "Hide the full source", viewGitHub: "Visualizar o cÃ³digo fonte no GitHub", codesandbox: "Edite em CodeSandbox", seeMore: "Ver mais", copySource: "Copiar cÃ³digo fonte", copySourceLinkJS: "Copiar link para o fonte JavaScript", copySourceLinkTS: "Copiar link para o fonte TypeScript", stackblitz: "Editar em StackBlits (apenas JS)", headTitle: "Material-UI: Um framework popular de React UI", emojiLove: "Amor", emoojiWarning: "Alerta", mainNavigation: "NavegaÃ§Ã£o principal", skipToContent: "Pular para o conteÃºdo", openDrawer: "Abrir navegaÃ§Ã£o principal", changeLanguage: "Alterar Idioma", pageTOC: "Tabela de conteÃºdo", showJSSource: "Mostrar fonte JavaScript", showTSSource: "Mostrar fonte TypeScript", close: "Fechar", useHighDensity: "Aplique densidade mais alta via propriedades", spacingUnit: "Unidade de espaÃ§amento", resetDensity: "Repor densidade", increaseSpacing: "aumentar o espaÃ§amento", decreaseSpacing: "diminuir o espaÃ§amento", getProfessionalSupport: "Get Professional Support", diamondSponsors: "Diamond Sponsors", pages: { "/getting-started": "Comece a usar", "/getting-started/installation": "InstalaÃ§Ã£o", "/getting-started/usage": "Uso", "/getting-started/example-projects": "Projetos de exemplo", "/getting-started/templates": "Modelos", "/getting-started/learn": "Aprenda", "/getting-started/faq": "Perguntas Frequentes", "/getting-started/supported-components": "Componentes Suportados", "/getting-started/supported-platforms": "Plataformas Suportadas", "/getting-started/support": "Suporte", "/components": "Componentes", "/components/about-the-lab": "Sobre o Lab", "/components/click-away-listener": "Click Away Listener", "/component/about": "Sobre o Lab", "/components/app-bar": "Barra de Aplicativos", "/components/autocomplete": "Autocompletar", "/components/avatars": "Avatares", "/components/badges": "Emblemas", "/components/basic-inputs": "Entradas BÃ¡sicas", "/components/bottom-navigation": "NavegaÃ§Ã£o Inferior", "/components/box": "Box", "/components/breadcrumbs": "Breadcrumbs", "/components/buttons": "BotÃµes", "/components/cards": "CartÃµes", "/components/checkboxes": "Caixas de SeleÃ§Ã£o", "/components/chips": "Chips", "/components/container": "Container", "/components/content": "ConteÃºdo", "/components/css-baseline": "CSS Baseline", "/components/data-display": "ExibiÃ§Ã£o de Dados", "/components/dialogs": "Caixa de diÃ¡logo", "/components/dividers": "Divisores", "/components/drawers": "Menus Laterais", "/components/expansion-panels": "PainÃ©is de ExpansÃ£o", "/components/feedback": "Feedback", "/components/grid": "Grade", "/components/hidden": "Hidden", "/components/grid-list": "Lista de Grade", "/components/icons": "Ãcones", "/components/inputs": "Entradas", "/components/lab": "Lab", "/components/layout": "Leiaute", "/components/links": "Links", "/components/lists": "Listas", "/components/menus": "Menus", "/components/modal": "Modal", "/components/navigation": "NavegaÃ§Ã£o", "/components/no-ssr": "NoSSR", "/components/other": "Outros", "/components/paper": "Paper", "/components/pickers": "Data / Hora", "/components/popover": "Popover", "/components/popper": "Popper", "/components/portal": "Portal", "/components/progress": "Progresso", "/components/progress-validation": "Feedback", "/components/radio-buttons": "BotÃµes de OpÃ§Ã£o", "/components/selection-controls": "Controles de SeleÃ§Ã£o", "/components/selects": "SeleÃ§Ã£o", "/components/slider": "Slider", "/components/snackbars": "Snackbar", "/components/speed-dial": "Discagem RÃ¡pida", "/components/steppers": "Passo a Passo", "/components/surfaces": "SuperfÃ­cies", "/components/switches": "Interruptores", "/components/tables": "Tabelas", "/components/tabs": "Guias", "/components/text-fields": "Campos de Texto", "/components/toggle-button": "BotÃµes de alternÃ¢ncia", "/components/tooltips": "Dicas", "/components/transfer-list": "TransferÃªncia de Lista", "/components/transitions": "TransiÃ§Ãµes", "/components/typography": "Tipografia", "/components/use-media-query": "useMediaQuery", "/components/utils": "Utilidades", "/css-in-js": "Estilos", "/css-in-js/basics": "NoÃ§Ãµes BÃ¡sicas", "/css-in-js/advanced": "AvanÃ§ado", "/system": "Sistema", "/system/basics": "NoÃ§Ãµes BÃ¡sicas", "/system/borders": "Bordas", "/system/display": "Display", "/system/flexbox": "Flexbox", "/system/palette": "Paleta de Cores", "/system/positions": "PosiÃ§Ãµes", "/system/shadows": "Sombras", "/system/sizing": "Dimensionando", "/system/spacing": "EspaÃ§amento", "/system/typography": "Tipografia", "/customization": "CustomizaÃ§Ã£o", "/customization/theming": "Temas", "/customization/breakpoints": "Pontos de quebra", "/customization/color": "Cor", "/customization/themes": "Temas", "/customization/palette": "Paleta de Cores", "/customization/type": "Tipo (claro / escuro)", "/customization/typography": "Tipografia", "/customization/spacing": "EspaÃ§amento", "/customization/z-index": "z-index", "/customization/globals": "Globais", "/customization/components": "Componentes", "/customization/default-theme": "Tema PadrÃ£o", "/guides": "Guias", "/guides/api": "Abordagem de Design da API", "/guides/typescript": "TypeScript", "/guides/interoperability": "Interoperabilidade da Biblioteca de Estilo", "/guides/minimizing-bundle-size": "Minimizando o tamanho do pacote", "/guides/composition": "ComposiÃ§Ã£o", "/guides/responsive-ui": "UI Responsiva", "/guides/server-rendering": "RenderizaÃ§Ã£o no servidor", "/guides/migration-v3": "Migrando da v3", "/guides/migration-v0x": "Migrando da v0.x", "/guides/testing": "Testando", "/guides/flow": "Flow", "/guides/right-to-left": "Da Direita para Esquerda", "/discover-more": "Descubra mais", "/discover-more/showcase": "DemonstraÃ§Ã£o", "/discover-more/related-projects": "Projetos Relacionados", "/discover-more/roadmap": "Planejamento", "/discover-more/backers": "Patrocinadores & Apoiadores", "/discover-more/vision": "VisÃ£o", "/discover-more/team": "Equipe", "/discover-more/community": "Comunidade", "/discover-more/changelog": "HistÃ³rico de MudanÃ§as", "/discover-more/governance": "GestÃ£o", "/discover-more/languages": "Idiomas", "/versions": "VersÃµes", "/styles": "Estilos", "/styles/basics": "NoÃ§Ãµes BÃ¡sicas", "/styles/advanced": "AvanÃ§ado", "https://themes.material-ui.com/": "Temas Premium", "/components/material-icons": "Ãcones Material", "/components/textarea-autosize": "Texto autoajustÃ¡vel", "/components/rating": "Rating", "/components/skeleton": "Skeleton", "/components/tree-view": "VisualizaÃ§Ã£o em Ã¡rvore", "/customization/density": "Densidade" } } },
        BUlT: function(e, t, n) {
            var o = n("mvii"),
                s = Math.max,
                a = Math.min;
            e.exports = function(e, t) { return (e = o(e)) < 0 ? s(e + t, 0) : a(e, t) }
        },
        BW49: function(e, t, n) {
            var o = n("sWZd"),
                s = n("lYsT"),
                a = n("PqlX"),
                r = n("q+I6"),
                i = n("ckUF"),
                c = n("cTHi");
            e.exports = function(e, t, n) {
                for (var p = -1, u = (t = o(t, e)).length, l = !1; ++p < u;) {
                    var d = c(t[p]);
                    if (!(l = null != e && n(e, d))) break;
                    e = e[d]
                }
                return l || ++p != u ? l : !!(u = null == e ? 0 : e.length) && i(u) && r(d, u) && (a(e) || s(e))
            }
        },
        "Bsg+": function(e, t) { e.exports = function(e) { return "object" == typeof e ? null !== e : "function" == typeof e } },
        Btey: function(e, t, n) {
            "use strict";
            e.exports.parse = function(e) {
                var t, n = /^(?:(en-GB-oed|i-ami|i-bnn|i-default|i-enochian|i-hak|i-klingon|i-lux|i-mingo|i-navajo|i-pwn|i-tao|i-tay|i-tsu|sgn-BE-FR|sgn-BE-NL|sgn-CH-DE)|(art-lojban|cel-gaulish|no-bok|no-nyn|zh-guoyu|zh-hakka|zh-min|zh-min-nan|zh-xiang))$|^((?:[a-z]{2,3}(?:(?:-[a-z]{3}){1,3})?)|[a-z]{4}|[a-z]{5,8})(?:-([a-z]{4}))?(?:-([a-z]{2}|\d{3}))?((?:-(?:[\da-z]{5,8}|\d[\da-z]{3}))*)?((?:-[\da-wy-z](?:-[\da-z]{2,8})+)*)?(-x(?:-[\da-z]{1,8})+)?$|^(x(?:-[\da-z]{1,8})+)$/i.exec(e);
                if (!n) return null;
                n.shift();
                var o = null,
                    s = [];
                n[2] && (o = (t = n[2].split("-")).shift(), s = t);
                var a = [];
                n[5] && (a = n[5].split("-")).shift();
                var r = [];
                if (n[6]) {
                    var i;
                    (t = n[6].split("-")).shift();
                    for (var c = []; t.length;) {
                        var p = t.shift();
                        1 === p.length ? i ? (r.push({ singleton: i, extension: c }), i = p, c = []) : i = p : c.push(p)
                    }
                    r.push({ singleton: i, extension: c })
                }
                var u = [];
                n[7] && ((u = n[7].split("-")).shift(), u.shift());
                var l = [];
                return n[8] && (l = n[8].split("-")).shift(), { langtag: { language: { language: o, extlang: s }, script: n[3] || null, region: n[4] || null, variant: a, extension: r, privateuse: u }, privateuse: l, grandfathered: { irregular: n[0] || null, regular: n[1] || null } }
            }
        },
        BwbT: function(e, t, n) {
            var o = n("PqlX"),
                s = n("zXe4"),
                a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                r = /^\w*$/;
            e.exports = function(e, t) { if (o(e)) return !1; var n = typeof e; return !("number" != n && "symbol" != n && "boolean" != n && null != e && !s(e)) || r.test(e) || !a.test(e) || null != t && e in Object(t) }
        },
        C5nI: function(e, t, n) {
            var o = n("Qno1");
            e.exports = function(e, t) { return new(o(e))(t) }
        },
        CHJX: function(e) { e.exports = { homeQuickWord: "Unas palabras de nuestros patrocinadores:", helpToTranslate: "Help to translate", editWebsiteColors: "Editar los colores del sitio web", toggleTheme: "Activar tema claro / oscuro", toggleRTL: "Intercambiar posiciones", github: "Repositorio en GitHub", strapline: "Componentes de React para un desarrollo web mÃ¡s rÃ¡pido y sencillo. Construya su propio sistema de diseÃ±o, o empiece con Material Design.", getStarted: "Comenzar", installation: "InstalaciÃ³n", installDescr: "Instale los archivos necesarios de Material-UI a travÃ©s de npm. Nosotros nos encargamos de inyectar todo el CSS necesario.", cdn: "o use un CDN.", loadFont: "Cargue la fuente por defecto Roboto.", installButton: "Lea los docs de instalaciÃ³n", usage: "ImplementaciÃ³n", usageDescr: "Los componentes de Material-UI funcionan sin ninguna configuraciÃ³n adicional, y no ensucian el global scope.", usageButton: "Explore la documentaciÃ³n", themes: "Temas Premium", themesDescr: "Lleve Material-UI al siguiente nivel con los temas premium de nuestro marketplace oficial - todo hecho con Material-UI.", themesButton: "Examinar temas", whosUsing: "Â¿QuiÃ©n usa Material-UI?", joinThese: "Â¡Ãšnete a estas y otras grandes organizaciones!", usingMui: "Â¿EstÃ¡s utilizando Material-UI?", letUsKnow: "Â¡DÃ©janos saber!", footerCommunity: "Comunidad", footerResources: "Resources", homeFooterRelease: "Actualmente {{versionNumber}}. Publicado bajo la {{license}}.", license: "Licencia MIT", likeMui: "Â¿Te gusta Material-UI?", adblock: "Si no te molestan los anuncios sobre tecnologÃ­a, y quieres apoyar al Open Source, por favor aÃ±ade Material-UI a tu lista blanca en tu bloqueador de anuncios.", thanks: "Â¡Gracias!", editPage: "Ayuda a traducir esta pÃ¡gina", tableOfContents: "Tabla de Contenido", sourceCode: "CÃ³digo fuente", traffic: "TrÃ¡fico", newest: "Lo Ãºltimo", stars: "Estrellas de GitHub", visit: "Visite el sitio web", dashboardTitle: "Dashboard", dashboardDescr: "Un dashboard simple con barra de tareas y mini dibujo variante. GrÃ¡fico por cortesÃ­a de Recharts, pero es muy simple sustituirlo por otra alternativa.", signInTitle: "Iniciar sesiÃ³n", signInDescr: "Simple pÃ¡gina de inicio de sesiÃ³n.", signInSideTitle: "Inicio de sesiÃ³n lateral", signInSideDescr: "Simple pÃ¡gina de inicio de sesiÃ³n lateral.", signUpTitle: "Registrarse", signUpDescr: "Una simple pÃ¡gina de registro.", blogTitle: "Blog", blogDescr: "DiseÃ±o de una sofisticada pÃ¡gina de blog. El soporte para Markdown por cortesÃ­a de markdown-to-jsx, pero es fÃ¡cilmente reemplazable.", checkoutTitle: "Pagar", checkoutDescr: "DiseÃ±o de pÃ¡gina de pagos paso a paso. Adapte el nÃºmero de pasos para que se ajuste a sus necesidades, o haga los pasos opcionales.", albumTitle: "Ãlbum", albumDescr: "DiseÃ±o responsive de una pÃ¡gina tipo Ã¡lbum / galerÃ­a con una unidad hero y footer.", pricingTitle: "Precios", pricingDescr: "Construya rÃ¡pidamente una efectiva tabla de precios para sus potenciales clientes con este diseÃ±o de pÃ¡gina.", stickyFooterTitle: "PiÃ© de pÃ¡gina fijo", stickyFooterDescr: "Adjunte un pie de pÃ¡gina a la parte inferior de la ventana grÃ¡fica cuando el contenido de la pÃ¡gina sea breve.", expandAll: "Expandir todo", showSource: "Ver la fuente", hideSource: "Esconder la fuente", showFullSource: "Show the full source", hideFullSource: "Hide the full source", viewGitHub: "Ver la fuente en GitHub", codesandbox: "Editar en CodeSandbox", seeMore: "Ver mÃ¡s", copySource: "Copiar la fuente", copySourceLinkJS: "Copy link to JavaScript source", copySourceLinkTS: "Copy link to TypeScript source", stackblitz: "Editar en StackBlitz (solo JS)", headTitle: "Material-UI: A popular React UI framework", emojiLove: "Love", emoojiWarning: "Warning", mainNavigation: "NavegaciÃ³n principal", skipToContent: "Saltar al contenido", openDrawer: "Abrir navegaciÃ³n principal", changeLanguage: "Cambiar idioma", pageTOC: "Tabla de contenidos", showJSSource: "Show JavaScript source", showTSSource: "Show TypeScript source", close: "Close", useHighDensity: "Apply higher density via props", spacingUnit: "Spacing unit", resetDensity: "Reset density", increaseSpacing: "increase spacing", decreaseSpacing: "decrease spacing", getProfessionalSupport: "Get Professional Support", diamondSponsors: "Diamond Sponsors", pages: { "/getting-started": "Primeros pasos", "/getting-started/installation": "InstalaciÃ³n", "/getting-started/usage": "ImplementaciÃ³n", "/getting-started/example-projects": "Proyectos de Ejemplo", "/getting-started/templates": "Templates", "/getting-started/learn": "Aprender", "/getting-started/faq": "Preguntas frecuentes", "/getting-started/supported-components": "Componentes Compatibles", "/getting-started/supported-platforms": "Plataformas compatibles", "/getting-started/support": "Support", "/components": "Componentes", "/components/about-the-lab": "Acerca de El Laboratorio", "/components/click-away-listener": "Click Away Listener", "/component/about": "Acerca de El Laboratorio", "/components/app-bar": "App Bar", "/components/autocomplete": "Autocompletado", "/components/avatars": "Avatares", "/components/badges": "Placas", "/components/basic-inputs": "Entradas BÃ¡sicas", "/components/bottom-navigation": "NavegaciÃ³n a pie de pÃ¡gina", "/components/box": "Cuadro", "/components/breadcrumbs": "Migas de pan", "/components/buttons": "Botones", "/components/cards": "Tarjetas", "/components/checkboxes": "Casillas de VerificaciÃ³n", "/components/chips": "Chips", "/components/container": "Container", "/components/content": "Contenido", "/components/css-baseline": "Base de CSS", "/components/data-display": "VisualizaciÃ³n de datos", "/components/dialogs": "DiÃ¡logos", "/components/dividers": "Divisores", "/components/drawers": "Cajones", "/components/expansion-panels": "Paneles de ExpansiÃ³n", "/components/feedback": "Opiniones", "/components/grid": "Grid", "/components/hidden": "Hidden", "/components/grid-list": "Lista cuadriculada", "/components/icons": "Iconos", "/components/inputs": "Inputs", "/components/lab": "Laboratorio", "/components/layout": "DiseÃ±o", "/components/links": "Enlaces", "/components/lists": "Listas", "/components/menus": "MenÃºs", "/components/modal": "Modal", "/components/navigation": "NavegaciÃ³n", "/components/no-ssr": "No SSR", "/components/other": "Otros", "/components/paper": "Paper", "/components/pickers": "Date / Time", "/components/popover": "Popover", "/components/popper": "Popper", "/components/portal": "Portal", "/components/progress": "Progreso", "/components/progress-validation": "Opiniones", "/components/radio-buttons": "Botones de selecciÃ³n", "/components/selection-controls": "Controles de selecciÃ³n", "/components/selects": "Selecciones", "/components/slider": "Slider", "/components/snackbars": "Barra de notificaciones", "/components/speed-dial": "MarcaciÃ³n rÃ¡pida", "/components/steppers": "Pasos a pasos", "/components/surfaces": "Superficies", "/components/switches": "Interruptores", "/components/tables": "Tablas", "/components/tabs": "PestaÃ±as", "/components/text-fields": "Campos de texto", "/components/toggle-button": "BotÃ³n conmutador", "/components/tooltips": "Sugerencias", "/components/transfer-list": "Lista de transferencia", "/components/transitions": "Transiciones", "/components/typography": "TipografÃ­a", "/components/use-media-query": "useMediaQuery", "/components/utils": "Utilidades", "/css-in-js": "Estilos", "/css-in-js/basics": "Fundamentos", "/css-in-js/advanced": "Avanzado", "/system": "Sistema", "/system/basics": "Fundamentos", "/system/borders": "Bordes", "/system/display": "Mostrar", "/system/flexbox": "Caja flexible", "/system/palette": "Paleta", "/system/positions": "Posiciones", "/system/shadows": "Sombras", "/system/sizing": "Dimensionamiento", "/system/spacing": "Espaciado", "/system/typography": "TipografÃ­a", "/customization": "PersonalizaciÃ³n", "/customization/theming": "Estilos", "/customization/breakpoints": "Puntos de interrupciÃ³n", "/customization/color": "Color", "/customization/themes": "Estilos", "/customization/palette": "Paleta", "/customization/type": "Alternar tema (claro/oscuro)", "/customization/typography": "TipografÃ­a", "/customization/spacing": "Espaciado", "/customization/z-index": "z-index", "/customization/globals": "Globales", "/customization/components": "Sobreponer", "/customization/default-theme": "Tema predeterminado", "/guides": "GuÃ­as", "/guides/api": "API Design Approach", "/guides/typescript": "TypeScript", "/guides/interoperability": "Interoperabilidad de la biblioteca de estilos", "/guides/minimizing-bundle-size": "Minimizando el tamaÃ±o del paquete", "/guides/composition": "ComposiciÃ³n", "/guides/responsive-ui": "Interfaz de usuario adaptable", "/guides/server-rendering": "Renderizado en el servidor", "/guides/migration-v3": "MigraciÃ³n desde v3", "/guides/migration-v0x": "MigraciÃ³n desde v0.x", "/guides/testing": "Pruebas", "/guides/flow": "Flujo", "/guides/right-to-left": "Derecha-a-izquierda", "/discover-more": "Descubrir MÃ¡s", "/discover-more/showcase": "ExhibiciÃ³n", "/discover-more/related-projects": "Proyectos Relacionados", "/discover-more/roadmap": "Mapa de ruta", "/discover-more/backers": "Patrocinadores Y Mecenas", "/discover-more/vision": "VisiÃ³n", "/discover-more/team": "Equipo", "/discover-more/community": "Comunidad", "/discover-more/changelog": "Registro de cambios", "/discover-more/governance": "Gobernancia", "/discover-more/languages": "Lenguajes", "/versions": "Versiones", "/styles": "Estilos", "/styles/basics": "Fundamentos", "/styles/advanced": "Avanzado", "https://themes.material-ui.com/": "Temas Premium", "/components/material-icons": "Material Icons", "/components/textarea-autosize": "Textarea Autosize", "/components/rating": "CalificaciÃ³n", "/components/skeleton": "Skeleton", "/components/tree-view": "Vista de arbol", "/customization/density": "Density" } } },
        CLuC: function(e, t, n) {
            var o = n("P56o").document;
            e.exports = o && o.documentElement
        },
        COrk: function(e, t, n) {
            var o = n("E1Sn"),
                s = n("T9Ud");
            e.exports = function e(t, n, a, r, i) { return t === n || (null == t || null == n || !s(t) && !s(n) ? t != t && n != n : o(t, n, a, r, e, i)) }
        },
        Chmn: function(e, t) { e.exports = function(e) { return this.__data__.get(e) } },
        Cmsx: function(e, t, n) {
            var o = n("n+VH");
            e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) { return "String" == o(e) ? e.split("") : Object(e) }
        },
        CzB4: function(e, t, n) {
            var o = n("w5ta"),
                s = n("RW/s"),
                a = n("0KRy");
            e.exports = function() { this.size = 0, this.__data__ = { hash: new o, map: new(a || s), string: new o } }
        },
        DZMJ: function(e, t, n) {
            var o = n("FEiO"),
                s = "__lodash_hash_undefined__",
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) { var t = this.__data__; if (o) { var n = t[e]; return n === s ? void 0 : n } return a.call(t, e) ? t[e] : void 0 }
        },
        Dfzq: function(e, t, n) {
            var o = n("gnIa")(n("ixHX"));
            e.exports = o
        },
        DhoL: function(e, t, n) {
            (function(e) {
                var o = n("FfeU"),
                    s = t && !t.nodeType && t,
                    a = s && "object" == typeof e && e && !e.nodeType && e,
                    r = a && a.exports === s && o.process,
                    i = function() { try { var e = a && a.require && a.require("util").types; return e || r && r.binding && r.binding("util") } catch (t) {} }();
                e.exports = i
            }).call(this, n("FtQO")(e))
        },
        E1Sn: function(e, t, n) {
            var o = n("WRuO"),
                s = n("MBdc"),
                a = n("LdZC"),
                r = n("ji6j"),
                i = n("s3t7"),
                c = n("PqlX"),
                p = n("tfj2"),
                u = n("3kU/"),
                l = 1,
                d = "[object Arguments]",
                m = "[object Array]",
                g = "[object Object]",
                h = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, n, f, b, v) {
                var w = c(e),
                    y = c(t),
                    S = w ? m : i(e),
                    x = y ? m : i(t),
                    k = (S = S == d ? g : S) == g,
                    T = (x = x == d ? g : x) == g,
                    z = S == x;
                if (z && p(e)) {
                    if (!p(t)) return !1;
                    w = !0, k = !1
                }
                if (z && !k) return v || (v = new o), w || u(e) ? s(e, t, n, f, b, v) : a(e, t, S, n, f, b, v);
                if (!(n & l)) {
                    var j = k && h.call(e, "__wrapped__"),
                        C = T && h.call(t, "__wrapped__");
                    if (j || C) {
                        var D = j ? e.value() : e,
                            I = C ? t.value() : t;
                        return v || (v = new o), b(D, I, n, f, v)
                    }
                }
                return !!z && (v || (v = new o), r(e, t, n, f, b, v))
            }
        },
        E7Vc: function(e, t) { e.exports = function(e) { try { return !!e() } catch (t) { return !0 } } },
        E7Xw: function(e, t) { e.exports = function() { return [] } },
        E8p1: function(e, t, n) {
            "use strict";
            var o = n("P56o"),
                s = n("U1KF"),
                a = n("GGqZ"),
                r = n("9dxi")("species");
            e.exports = function(e) {
                var t = o[e];
                a && t && !t[r] && s.f(t, r, { configurable: !0, get: function() { return this } })
            }
        },
        EusA: function(e, t) { e.exports = function(e, t, n, o) { if (!(e instanceof t) || void 0 !== o && o in e) throw TypeError(n + ": incorrect invocation!"); return e } },
        Exs5: function(e, t, n) {
            var o = n("sWZd"),
                s = n("cTHi");
            e.exports = function(e, t) { for (var n = 0, a = (t = o(t, e)).length; null != e && n < a;) e = e[s(t[n++])]; return n && n == a ? e : void 0 }
        },
        FEiO: function(e, t, n) {
            var o = n("LSEb")(Object, "create");
            e.exports = o
        },
        FxtG: function(e, t, n) {
            (function(e) {
                ! function(e) {
                    "use strict";
                    t.loadCSS = function(t, n, o, s) {
                        var a, r = e.document,
                            i = r.createElement("link");
                        if (n) a = n;
                        else {
                            var c = (r.body || r.getElementsByTagName("head")[0]).childNodes;
                            a = c[c.length - 1]
                        }
                        var p = r.styleSheets;
                        if (s)
                            for (var u in s) s.hasOwnProperty(u) && i.setAttribute(u, s[u]);
                        i.rel = "stylesheet", i.href = t, i.media = "only x",
                            function e(t) {
                                if (r.body) return t();
                                setTimeout(function() { e(t) })
                            }(function() { a.parentNode.insertBefore(i, n ? a : a.nextSibling) });
                        var l = function(e) {
                            for (var t = i.href, n = p.length; n--;)
                                if (p[n].href === t) return e();
                            setTimeout(function() { l(e) })
                        };

                        function d() { i.addEventListener && i.removeEventListener("load", d), i.media = o || "all" }
                        return i.addEventListener && i.addEventListener("load", d), i.onloadcssdefined = l, l(d), i
                    }
                }(void 0 !== e ? e : this)
            }).call(this, n("dm4u"))
        },
        GCOZ: function(e, t) { e.exports = function(e) { if (null == e) throw TypeError("Can't call method on  " + e); return e } },
        GE03: function(e, t, n) {
            var o = n("xkFB"),
                s = n("4mhO"),
                a = n("4a20");

            function r(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.__data__ = new o; ++t < n;) this.add(e[t])
            }
            r.prototype.add = r.prototype.push = s, r.prototype.has = a, e.exports = r
        },
        GGqZ: function(e, t, n) { e.exports = !n("E7Vc")(function() { return 7 != Object.defineProperty({}, "a", { get: function() { return 7 } }).a }) },
        HE1N: function(e, t, n) {
            var o = n("cm7J"),
                s = Array.prototype.splice;
            e.exports = function(e) {
                var t = this.__data__,
                    n = o(t, e);
                return !(n < 0 || (n == t.length - 1 ? t.pop() : s.call(t, n, 1), --this.size, 0))
            }
        },
        HIoB: function(e, t) { e.exports = function(e, t) { for (var n = -1, o = Array(e); ++n < e;) o[n] = t(n); return o } },
        HWsP: function(e, t, n) { e.exports = !n("GGqZ") && !n("E7Vc")(function() { return 7 != Object.defineProperty(n("mggL")("div"), "a", { get: function() { return 7 } }).a }) },
        HqX2: function(e, t, n) {
            var o = n("9liC"),
                s = n("iJnn"),
                a = n("2LOZ"),
                r = n("PAFS"),
                i = n("Sp5b"),
                c = n("pB2m"),
                p = {},
                u = {};
            (t = e.exports = function(e, t, n, l, d) {
                var m, g, h, f, b = d ? function() { return e } : c(e),
                    v = o(n, l, t ? 2 : 1),
                    w = 0;
                if ("function" != typeof b) throw TypeError(e + " is not iterable!");
                if (a(b)) {
                    for (m = i(e.length); m > w; w++)
                        if ((f = t ? v(r(g = e[w])[0], g[1]) : v(e[w])) === p || f === u) return f
                } else
                    for (h = b.call(e); !(g = h.next()).done;)
                        if ((f = s(h, v, g.value, t)) === p || f === u) return f
            }).BREAK = p, t.RETURN = u
        },
        Ibj2: function(e, t) { e.exports = {} },
        IdFN: function(e, t) { t.f = {}.propertyIsEnumerable },
        J9xP: function(e, t, n) {
            var o = n("cm7J");
            e.exports = function(e) { return o(this.__data__, e) > -1 }
        },
        JGfN: function(e, t, n) { e.exports = n("ZVIm")("native-function-to-string", Function.toString) },
        "Jww/": function(e, t, n) {
            "use strict";
            var o = n("wEu9"),
                s = n("X6VK"),
                a = n("sU/p"),
                r = n("tjmq"),
                i = n("Ibj2"),
                c = n("puZ4"),
                p = n("jPEw"),
                u = n("A1KM"),
                l = n("9dxi")("iterator"),
                d = !([].keys && "next" in [].keys()),
                m = function() { return this };
            e.exports = function(e, t, n, g, h, f, b) {
                c(n, t, g);
                var v, w, y, S = function(e) {
                        if (!d && e in z) return z[e];
                        switch (e) {
                            case "keys":
                            case "values":
                                return function() { return new n(this, e) }
                        }
                        return function() { return new n(this, e) }
                    },
                    x = t + " Iterator",
                    k = "values" == h,
                    T = !1,
                    z = e.prototype,
                    j = z[l] || z["@@iterator"] || h && z[h],
                    C = j || S(h),
                    D = h ? k ? S("entries") : C : void 0,
                    I = "Array" == t && z.entries || j;
                if (I && (y = u(I.call(new e))) !== Object.prototype && y.next && (p(y, x, !0), o || "function" == typeof y[l] || r(y, l, m)), k && j && "values" !== j.name && (T = !0, C = function() { return j.call(this) }), o && !b || !d && !T && z[l] || r(z, l, C), i[t] = C, i[x] = m, h)
                    if (v = { values: k ? C : S("values"), keys: f ? C : S("keys"), entries: D }, b)
                        for (w in v) w in z || a(z, w, v[w]);
                    else s(s.P + s.F * (d || T), t, v);
                return v
            }
        },
        "KjZ+": function(e, t, n) {
            var o = n("s3UK").Uint8Array;
            e.exports = o
        },
        LF0y: function(e, t, n) {
            var o = n("UzdM");
            e.exports = function(e) {
                var t = o(e),
                    n = t % 1;
                return t == t ? n ? t - n : t : 0
            }
        },
        LSEb: function(e, t, n) {
            var o = n("Yzgk"),
                s = n("X/0h");
            e.exports = function(e, t) { var n = s(e, t); return o(n) ? n : void 0 }
        },
        Lalj: function(e, t, n) {
            var o = n("jL4t"),
                s = n("MQuF"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) { if (!o(e)) return s(e); var t = []; for (var n in Object(e)) a.call(e, n) && "constructor" != n && t.push(n); return t }
        },
        LdZC: function(e, t, n) {
            var o = n("jgJv"),
                s = n("KjZ+"),
                a = n("dIZa"),
                r = n("MBdc"),
                i = n("rrk0"),
                c = n("OF9M"),
                p = 1,
                u = 2,
                l = "[object Boolean]",
                d = "[object Date]",
                m = "[object Error]",
                g = "[object Map]",
                h = "[object Number]",
                f = "[object RegExp]",
                b = "[object Set]",
                v = "[object String]",
                w = "[object Symbol]",
                y = "[object ArrayBuffer]",
                S = "[object DataView]",
                x = o ? o.prototype : void 0,
                k = x ? x.valueOf : void 0;
            e.exports = function(e, t, n, o, x, T, z) {
                switch (n) {
                    case S:
                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                        e = e.buffer, t = t.buffer;
                    case y:
                        return !(e.byteLength != t.byteLength || !T(new s(e), new s(t)));
                    case l:
                    case d:
                    case h:
                        return a(+e, +t);
                    case m:
                        return e.name == t.name && e.message == t.message;
                    case f:
                    case v:
                        return e == t + "";
                    case g:
                        var j = i;
                    case b:
                        var C = o & p;
                        if (j || (j = c), e.size != t.size && !C) return !1;
                        var D = z.get(e);
                        if (D) return D == t;
                        o |= u, z.set(e, t);
                        var I = r(j(e), j(t), o, x, T, z);
                        return z.delete(e), I;
                    case w:
                        if (k) return k.call(e) == k.call(t)
                }
                return !1
            }
        },
        LuBU: function(e, t, n) {
            var o = n("at5L"),
                s = n("fQty");
            e.exports = Object.keys || function(e) { return o(e, s) }
        },
        MBdc: function(e, t, n) {
            var o = n("GE03"),
                s = n("5Avs"),
                a = n("+165"),
                r = 1,
                i = 2;
            e.exports = function(e, t, n, c, p, u) {
                var l = n & r,
                    d = e.length,
                    m = t.length;
                if (d != m && !(l && m > d)) return !1;
                var g = u.get(e);
                if (g && u.get(t)) return g == t;
                var h = -1,
                    f = !0,
                    b = n & i ? new o : void 0;
                for (u.set(e, t), u.set(t, e); ++h < d;) {
                    var v = e[h],
                        w = t[h];
                    if (c) var y = l ? c(w, v, h, t, e, u) : c(v, w, h, e, t, u);
                    if (void 0 !== y) {
                        if (y) continue;
                        f = !1;
                        break
                    }
                    if (b) { if (!s(t, function(e, t) { if (!a(b, t) && (v === e || p(v, e, n, c, u))) return b.push(t) })) { f = !1; break } } else if (v !== w && !p(v, w, n, c, u)) { f = !1; break }
                }
                return u.delete(e), u.delete(t), f
            }
        },
        MQuF: function(e, t, n) {
            var o = n("SHde")(Object.keys, Object);
            e.exports = o
        },
        O72G: function(e, t, n) {
            "use strict";

            function o(e, t) {
                var n = {};
                return e.keys().forEach(function(o) {
                    var s = o.match(new RegExp("-([a-z]{2}).".concat(t, "$")));
                    s ? n[s[1]] = e(o) : n.en = e(o)
                }), n
            }
            n.d(t, "a", function() { return o })
        },
        OF9M: function(e, t) {
            e.exports = function(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach(function(e) { n[++t] = e }), n
            }
        },
        OFVL: function(e, t, n) {
            var o = n("n+VH"),
                s = n("9dxi")("toStringTag"),
                a = "Arguments" == o(function() { return arguments }());
            e.exports = function(e) { var t, n, r; return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof(n = function(e, t) { try { return e[t] } catch (n) {} }(t = Object(e), s)) ? n : a ? o(t) : "Object" == (r = o(t)) && "function" == typeof t.callee ? "Arguments" : r }
        },
        OfmW: function(e, t, n) {
            var o = n("9dxi")("unscopables"),
                s = Array.prototype;
            null == s[o] && n("tjmq")(s, o, {}), e.exports = function(e) { s[o][e] = !0 }
        },
        P56o: function(e, t) { var n = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")(); "number" == typeof __g && (__g = n) },
        PAFS: function(e, t, n) {
            var o = n("Bsg+");
            e.exports = function(e) { if (!o(e)) throw TypeError(e + " is not an object!"); return e }
        },
        PHxc: function(e, t, n) {
            var o = n("cm7J");
            e.exports = function(e, t) {
                var n = this.__data__,
                    s = o(n, e);
                return s < 0 ? (++this.size, n.push([e, t])) : n[s][1] = t, this
            }
        },
        PYDc: function(e, t, n) {
            var o = n("FEiO");
            e.exports = function() { this.__data__ = o ? o(null) : {}, this.size = 0 }
        },
        Qn7i: function(e, t, n) {
            var o = n("xkFB"),
                s = "Expected a function";

            function a(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError(s);
                var n = function() {
                    var o = arguments,
                        s = t ? t.apply(this, o) : o[0],
                        a = n.cache;
                    if (a.has(s)) return a.get(s);
                    var r = e.apply(this, o);
                    return n.cache = a.set(s, r) || a, r
                };
                return n.cache = new(a.Cache || o), n
            }
            a.Cache = o, e.exports = a
        },
        Qno1: function(e, t, n) {
            var o = n("Bsg+"),
                s = n("Xfku"),
                a = n("9dxi")("species");
            e.exports = function(e) { var t; return s(e) && ("function" != typeof(t = e.constructor) || t !== Array && !s(t.prototype) || (t = void 0), o(t) && null === (t = t[a]) && (t = void 0)), void 0 === t ? Array : t }
        },
        R5TD: function(e, t) { var n = e.exports = { version: "2.6.10" }; "number" == typeof __e && (__e = n) },
        "RW/s": function(e, t, n) {
            var o = n("iOq2"),
                s = n("HE1N"),
                a = n("VZJX"),
                r = n("J9xP"),
                i = n("PHxc");

            function c(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }
            c.prototype.clear = o, c.prototype.delete = s, c.prototype.get = a, c.prototype.has = r, c.prototype.set = i, e.exports = c
        },
        RqPZ: function(e, t, n) {
            var o = n("GI0s"),
                s = n("9aUh"),
                a = "[object AsyncFunction]",
                r = "[object Function]",
                i = "[object GeneratorFunction]",
                c = "[object Proxy]";
            e.exports = function(e) { if (!s(e)) return !1; var t = o(e); return t == r || t == i || t == a || t == c }
        },
        SHde: function(e, t) { e.exports = function(e, t) { return function(n) { return e(t(n)) } } },
        Sp5b: function(e, t, n) {
            var o = n("mvii"),
                s = Math.min;
            e.exports = function(e) { return e > 0 ? s(o(e), 9007199254740991) : 0 }
        },
        SsG5: function(e, t, n) {
            var o = n("Bsg+");
            e.exports = function(e, t) { if (!o(e) || e._t !== t) throw TypeError("Incompatible receiver, " + t + " required!"); return e }
        },
        SyCk: function(e, t, n) {
            var o = n("RqPZ"),
                s = n("ckUF");
            e.exports = function(e) { return null != e && s(e.length) && !o(e) }
        },
        TEbo: function(e, t, n) {
            var o = n("Qn7i"),
                s = 500;
            e.exports = function(e) {
                var t = o(e, function(e) { return n.size === s && n.clear(), e }),
                    n = t.cache;
                return t
            }
        },
        TsNJ: function(e, t) { e.exports = function(e) { return function(t) { return e(t) } } },
        U1KF: function(e, t, n) {
            var o = n("PAFS"),
                s = n("HWsP"),
                a = n("5MU4"),
                r = Object.defineProperty;
            t.f = n("GGqZ") ? Object.defineProperty : function(e, t, n) {
                if (o(e), t = a(t, !0), o(n), s) try { return r(e, t, n) } catch (i) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported!");
                return "value" in n && (e[t] = n.value), e
            }
        },
        ULAX: function(e, t, n) {
            var o = n("TEbo"),
                s = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                a = /\\(\\)?/g,
                r = o(function(e) { var t = []; return 46 === e.charCodeAt(0) && t.push(""), e.replace(s, function(e, n, o, s) { t.push(o ? s.replace(a, "$1") : n || e) }), t });
            e.exports = r
        },
        UgeB: function(e, t, n) {
            var o = n("GI0s"),
                s = n("T9Ud"),
                a = "[object Arguments]";
            e.exports = function(e) { return s(e) && o(e) == a }
        },
        UnHL: function(e, t, n) {
            var o = n("GCOZ");
            e.exports = function(e) { return Object(o(e)) }
        },
        UzdM: function(e, t, n) {
            var o = n("j6ZD"),
                s = 1 / 0,
                a = 17976931348623157e292;
            e.exports = function(e) { return e ? (e = o(e)) === s || e === -s ? (e < 0 ? -1 : 1) * a : e == e ? e : 0 : 0 === e ? e : 0 }
        },
        VNQV: function(e, t, n) {
            var o = n("LSEb")(n("s3UK"), "DataView");
            e.exports = o
        },
        VVFi: function(e, t) { e.exports = function(e, t) { return { value: t, done: !!e } } },
        VY7S: function(e, t, n) {
            var o = n("WRuO"),
                s = n("COrk"),
                a = 1,
                r = 2;
            e.exports = function(e, t, n, i) {
                var c = n.length,
                    p = c,
                    u = !i;
                if (null == e) return !p;
                for (e = Object(e); c--;) { var l = n[c]; if (u && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1 }
                for (; ++c < p;) {
                    var d = (l = n[c])[0],
                        m = e[d],
                        g = l[1];
                    if (u && l[2]) { if (void 0 === m && !(d in e)) return !1 } else { var h = new o; if (i) var f = i(m, g, d, e, t, h); if (!(void 0 === f ? s(g, m, a | r, i, h) : f)) return !1 }
                }
                return !0
            }
        },
        VZJX: function(e, t, n) {
            var o = n("cm7J");
            e.exports = function(e) {
                var t = this.__data__,
                    n = o(t, e);
                return n < 0 ? void 0 : t[n][1]
            }
        },
        "Vx+c": function(e, t, n) {
            var o = n("PAFS"),
                s = n("pU1/"),
                a = n("fQty"),
                r = n("8kJd")("IE_PROTO"),
                i = function() {},
                c = function() {
                    var e, t = n("mggL")("iframe"),
                        o = a.length;
                    for (t.style.display = "none", n("CLuC").appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), c = e.F; o--;) delete c.prototype[a[o]];
                    return c()
                };
            e.exports = Object.create || function(e, t) { var n; return null !== e ? (i.prototype = o(e), n = new i, i.prototype = null, n[r] = e) : n = c(), void 0 === t ? n : s(n, t) }
        },
        WRuO: function(e, t, n) {
            var o = n("RW/s"),
                s = n("e1Ej"),
                a = n("zEvu"),
                r = n("Chmn"),
                i = n("AJMQ"),
                c = n("kCQp");

            function p(e) {
                var t = this.__data__ = new o(e);
                this.size = t.size
            }
            p.prototype.clear = s, p.prototype.delete = a, p.prototype.get = r, p.prototype.has = i, p.prototype.set = c, e.exports = p
        },
        WWmS: function(e, t) { e.exports = function(e, t) { return { enumerable: !(1 & e), configurable: !(2 & e), writable: !(4 & e), value: t } } },
        WjON: function(e, t, n) {
            var o = n("zcvR");
            e.exports = function(e) { var t = o(this, e).delete(e); return this.size -= t ? 1 : 0, t }
        },
        "X/0h": function(e, t) { e.exports = function(e, t) { return null == e ? void 0 : e[t] } },
        X6VK: function(e, t, n) {
            var o = n("P56o"),
                s = n("R5TD"),
                a = n("tjmq"),
                r = n("sU/p"),
                i = n("9liC"),
                c = function(e, t, n) {
                    var p, u, l, d, m = e & c.F,
                        g = e & c.G,
                        h = e & c.S,
                        f = e & c.P,
                        b = e & c.B,
                        v = g ? o : h ? o[t] || (o[t] = {}) : (o[t] || {}).prototype,
                        w = g ? s : s[t] || (s[t] = {}),
                        y = w.prototype || (w.prototype = {});
                    for (p in g && (n = t), n) l = ((u = !m && v && void 0 !== v[p]) ? v : n)[p], d = b && u ? i(l, o) : f && "function" == typeof l ? i(Function.call, l) : l, v && r(v, p, l, e & c.U), w[p] != l && a(w, p, d), f && y[p] != l && (y[p] = l)
                };
            o.core = s, c.F = 1, c.G = 2, c.S = 4, c.P = 8, c.B = 16, c.W = 32, c.U = 64, c.R = 128, e.exports = c
        },
        XQta: function(e, t, n) {
            "use strict";
            var o = n("U1KF").f,
                s = n("Vx+c"),
                a = n("+edc"),
                r = n("9liC"),
                i = n("EusA"),
                c = n("HqX2"),
                p = n("Jww/"),
                u = n("VVFi"),
                l = n("E8p1"),
                d = n("GGqZ"),
                m = n("zIP/").fastKey,
                g = n("SsG5"),
                h = d ? "_s" : "size",
                f = function(e, t) {
                    var n, o = m(t);
                    if ("F" !== o) return e._i[o];
                    for (n = e._f; n; n = n.n)
                        if (n.k == t) return n
                };
            e.exports = {
                getConstructor: function(e, t, n, p) {
                    var u = e(function(e, o) { i(e, u, t, "_i"), e._t = t, e._i = s(null), e._f = void 0, e._l = void 0, e[h] = 0, null != o && c(o, n, e[p], e) });
                    return a(u.prototype, {
                        clear: function() {
                            for (var e = g(this, t), n = e._i, o = e._f; o; o = o.n) o.r = !0, o.p && (o.p = o.p.n = void 0), delete n[o.i];
                            e._f = e._l = void 0, e[h] = 0
                        },
                        delete: function(e) {
                            var n = g(this, t),
                                o = f(n, e);
                            if (o) {
                                var s = o.n,
                                    a = o.p;
                                delete n._i[o.i], o.r = !0, a && (a.n = s), s && (s.p = a), n._f == o && (n._f = s), n._l == o && (n._l = a), n[h]--
                            }
                            return !!o
                        },
                        forEach: function(e) {
                            g(this, t);
                            for (var n, o = r(e, arguments.length > 1 ? arguments[1] : void 0, 3); n = n ? n.n : this._f;)
                                for (o(n.v, n.k, this); n && n.r;) n = n.p
                        },
                        has: function(e) { return !!f(g(this, t), e) }
                    }), d && o(u.prototype, "size", { get: function() { return g(this, t)[h] } }), u
                },
                def: function(e, t, n) { var o, s, a = f(e, t); return a ? a.v = n : (e._l = a = { i: s = m(t, !0), k: t, v: n, p: o = e._l, n: void 0, r: !1 }, e._f || (e._f = a), o && (o.n = a), e[h]++, "F" !== s && (e._i[s] = a)), e },
                getEntry: f,
                setStrong: function(e, t, n) { p(e, t, function(e, n) { this._t = g(e, t), this._k = n, this._l = void 0 }, function() { for (var e = this._k, t = this._l; t && t.r;) t = t.p; return this._t && (this._l = t = t ? t.n : this._t._f) ? u(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v]) : (this._t = void 0, u(1)) }, n ? "entries" : "values", !n, !0), l(t) }
            }
        },
        XXCu: function(e, t) { e.exports = function(e) { var t = this.has(e) && delete this.__data__[e]; return this.size -= t ? 1 : 0, t } },
        Xfku: function(e, t, n) {
            var o = n("n+VH");
            e.exports = Array.isArray || function(e) { return "Array" == o(e) }
        },
        YKqg: function(e, t, n) {
            var o = { "./translations-aa.json": "12zn", "./translations-de.json": "1BH+", "./translations-es.json": "CHJX", "./translations-fr.json": "fHNw", "./translations-ja.json": "fwYt", "./translations-pt.json": "B1es", "./translations-ru.json": "sQhH", "./translations-zh.json": "sLcN", "./translations.json": "mw0f" };

            function s(e) { var t = a(e); return n(t) }

            function a(e) { var t = o[e]; if (!(t + 1)) { var n = new Error("Cannot find module '" + e + "'"); throw n.code = "MODULE_NOT_FOUND", n } return t }
            s.keys = function() { return Object.keys(o) }, s.resolve = a, e.exports = s, s.id = "YKqg"
        },
        Yzgk: function(e, t, n) {
            var o = n("RqPZ"),
                s = n("zc1V"),
                a = n("9aUh"),
                r = n("bE7W"),
                i = /^\[object .+?Constructor\]$/,
                c = Function.prototype,
                p = Object.prototype,
                u = c.toString,
                l = p.hasOwnProperty,
                d = RegExp("^" + u.call(l).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) { return !(!a(e) || s(e)) && (o(e) ? d : i).test(r(e)) }
        },
        ZVIm: function(e, t, n) {
            var o = n("R5TD"),
                s = n("P56o"),
                a = s["__core-js_shared__"] || (s["__core-js_shared__"] = {});
            (e.exports = function(e, t) { return a[e] || (a[e] = void 0 !== t ? t : {}) })("versions", []).push({ version: o.version, mode: n("wEu9") ? "pure" : "global", copyright: "Â© 2019 Denis Pushkarev (zloirock.ru)" })
        },
        a7YA: function(e, t) { e.exports = function(e, t) { return function(n) { return null != n && n[e] === t && (void 0 !== t || e in Object(n)) } } },
        aBIM: function(e, t, n) {
            var o = n("zcvR");
            e.exports = function(e) { return o(this, e).get(e) }
        },
        aCmY: function(e, t) {
            e.exports = function(e, t, n, o) {
                for (var s = e.length, a = n + (o ? 1 : -1); o ? a-- : ++a < s;)
                    if (t(e[a], a, e)) return a;
                return -1
            }
        },
        at5L: function(e, t, n) {
            var o = n("ezc+"),
                s = n("ml72"),
                a = n("sdkr")(!1),
                r = n("8kJd")("IE_PROTO");
            e.exports = function(e, t) {
                var n, i = s(e),
                    c = 0,
                    p = [];
                for (n in i) n != r && o(i, n) && p.push(n);
                for (; t.length > c;) o(i, n = t[c++]) && (~a(p, n) || p.push(n));
                return p
            }
        },
        b2OE: function(e, t, n) {
            var o = n("LSEb")(n("s3UK"), "Set");
            e.exports = o
        },
        b8Rm: function(e, t) { e.exports = function(e) { if ("function" != typeof e) throw TypeError(e + " is not a function!"); return e } },
        bE7W: function(e, t) {
            var n = Function.prototype.toString;
            e.exports = function(e) { if (null != e) { try { return n.call(e) } catch (t) {} try { return e + "" } catch (t) {} } return "" }
        },
        cTHi: function(e, t, n) {
            var o = n("zXe4"),
                s = 1 / 0;
            e.exports = function(e) { if ("string" == typeof e || o(e)) return e; var t = e + ""; return "0" == t && 1 / e == -s ? "-0" : t }
        },
        ckUF: function(e, t) {
            var n = 9007199254740991;
            e.exports = function(e) { return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n }
        },
        cm7J: function(e, t, n) {
            var o = n("dIZa");
            e.exports = function(e, t) {
                for (var n = e.length; n--;)
                    if (o(e[n][0], t)) return n;
                return -1
            }
        },
        d1lM: function(e, t) { e.exports = function(e, t) { return null != e && t in Object(e) } },
        d6Vr: function(e, t, n) {
            var o = n("s3UK")["__core-js_shared__"];
            e.exports = o
        },
        dIZa: function(e, t) { e.exports = function(e, t) { return e === t || e != e && t != t } },
        dW64: function(e, t, n) {
            "use strict";
            var o = n("Rbzu"),
                s = n("azxR"),
                a = n("NLnA"),
                r = n("WNP9"),
                i = n("O72G"),
                c = n("YKqg"),
                p = Object(i.a)(c, "json");

            function u(e, t) { return t && "string" == typeof t ? t.split(".").reduce(function(e, t) { return e && e[t] ? e[t] : null }, e) : null }
            var l = {},
                d = Object(r.a)(function(e) {
                    return function(t) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            o = n.ignoreWarning,
                            s = void 0 !== o && o,
                            a = p[e];
                        if (!a) return console.error("Missing language: ".concat(e, ".")), "â€¦";
                        var r = u(a, t);
                        if (!r) { var i = "".concat(e, ":").concat(t); return s || l[i] || "undefined" == typeof window || (console.error("Missing translation for ".concat(i, ".")), l[i] = !0), u(p.en, t) }
                        return r
                    }
                }),
                m = Object(s.a)({}, a.ACTION_TYPES.OPTIONS_CHANGE, function(e, t) { return { codeVariant: t.payload.codeVariant || e.codeVariant, userLanguage: t.payload.userLanguage || e.userLanguage } });
            t.a = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = Object(o.a)({}, e);
                return n.codeVariant || (n.codeVariant = a.CODE_VARIANTS.JS), n.userLanguage || (n.userLanguage = "en"), m[t.type] && (n = m[t.type](e, t)), n.t = d(n.userLanguage), n
            }
        },
        dtdj: function(e, t, n) {
            var o = n("d1lM"),
                s = n("BW49");
            e.exports = function(e, t) { return null != e && s(e, t, o) }
        },
        e1Ej: function(e, t, n) {
            var o = n("RW/s");
            e.exports = function() { this.__data__ = new o, this.size = 0 }
        },
        edSL: function(e, t, n) {
            var o = n("Exs5");
            e.exports = function(e, t, n) { var s = null == e ? void 0 : o(e, t); return void 0 === s ? n : s }
        },
        "ezc+": function(e, t) {
            var n = {}.hasOwnProperty;
            e.exports = function(e, t) { return n.call(e, t) }
        },
        fHNw: function(e) { e.exports = { homeQuickWord: "Un mot rapide de nos sponsors :", helpToTranslate: "Aider Ã  la traduction", editWebsiteColors: "Modifier les couleurs du site", toggleTheme: "Toggle light/dark theme", toggleRTL: "Toggle right-to-left/left-to-right", github: "RÃ©pertoire GitHub", strapline: "Des composants React pour un dÃ©veloppement web plus rapide et plus simple. Confectionner votre propre thÃ¨me graphique ou aidez-vous de Material Design.", getStarted: "Commencer", installation: "Installation", installDescr: "Installez les fichiers source de Material-UI avec npm. Nous nous occupons d'injecter le CSS nÃ©cessaire.", cdn: "ou utilisez un CDN.", loadFont: "Chargez la police Roboto par dÃ©faut.", installButton: "Lire les docs d'installation", usage: "Usage", usageDescr: "Les composants Material-UI fonctionnent de maniÃ¨re isolÃ©e. Ils sont autonomes.", usageButton: "Consulter la documentation", themes: "ThÃ¨mes Premium", themesDescr: "Faites passer Material-UI au niveau supÃ©rieur avec les thÃ¨mes premium de notre place de marchÃ© officiel, tous construits sur Material-UI.", themesButton: "Parcourir les thÃ¨mes", whosUsing: "Qui utilise Material-UI ?", joinThese: "Rejoignez ces organisations et dâ€™autres formidables!", usingMui: "Utilisez-vous Material-UI ?", letUsKnow: "Faites-nous savoir !", footerCommunity: "CommunautÃ©", footerResources: "Resources", homeFooterRelease: "Actuellement {{versionNumber}}. DÃ©livrÃ©e sous la {{license}}.", license: "Licence MIT", likeMui: "Vous aimez Material-UI ?", adblock: "Si les annonces techniques ne vous dÃ©rangent pas et si vous souhaitez soutenir l'Open Source, veuillez ajouter Material-UI Ã  la liste blanche de votre ad blocker.", thanks: "MerciÂ !", editPage: "Aidez Ã  traduire cette page", tableOfContents: "Sommaire", sourceCode: "Code source", traffic: "Trafic", newest: "Plus rÃ©cent", stars: "Ã‰toiles GitHub", visit: "Visiter le site web", dashboardTitle: "Tableau de bord", dashboardDescr: "Un tableau de bord minimal. Le graphique est implementÃ© avec l'aide de Recharts, mais il peut Ãªtre remplacÃ© par une solution alternative.", signInTitle: "Connexion", signInDescr: "Une simple page de connexion.", signInSideTitle: "Se connecter", signInSideDescr: "Une simple page de connexion latÃ©rale.", signUpTitle: "CrÃ©er un compte", signUpDescr: "Une simple page de connexion.", blogTitle: "Blog", blogDescr: "Une mise en page de blog sophistiquÃ©e. Le support du Markdown est fourni grÃ¢ce Ã  markdown-to-jsx mais est facilement remplaÃ§able.", checkoutTitle: "Paiement final", checkoutDescr: "Un layout Ã©tape par Ã©tape de la commande. Adaptez le nombre d'Ã©tapes Ã  vos besoins ou faites-en des Ã©tapes facultatives.", albumTitle: "Album", albumDescr: "Une mise en page d'album / galerie responsive avec un hero unit et un footer.", pricingTitle: "Tarifs", pricingDescr: "Construisez rapidement un tableau de prix pour vos clients potentiels avec cette mise en page.", stickyFooterTitle: "Pied de page collant", stickyFooterDescr: "Fixer un pied de page au bas de la fenÃªtre lorsque le contenu des pages est court.", expandAll: "Tout Ã©tendre", showSource: "Voir la source", hideSource: "Masquer la source", showFullSource: "Show the full source", hideFullSource: "Hide the full source", viewGitHub: "Voir la source sur GitHub", codesandbox: "Modifier dans CodeSandbox", seeMore: "Voir plus", copySource: "Copier la source", copySourceLinkJS: "Copier le lien vers la source JavaScript", copySourceLinkTS: "Copier le lien vers une source TypeScript", stackblitz: "Modifier dans StackBlitz (JS uniquement)", headTitle: "Material-UI : Un framework UI React populaire", emojiLove: "Amour", emoojiWarning: "Attention", mainNavigation: "Navigation principale", skipToContent: "Passer au contenu", openDrawer: "Voir la navigation principale", changeLanguage: "Change language", pageTOC: "La table des matiÃ¨res de la page", showJSSource: "Afficher la console JavaScript", showTSSource: "Afficher la source TypeScript", close: "Fermer", useHighDensity: "Appliquer une densitÃ© plus Ã©levÃ©e via les props", spacingUnit: "UnitÃ© d'espacement", resetDensity: "RÃ©initialiser la densitÃ©", increaseSpacing: "augmenter l'espacement", decreaseSpacing: "diminuer l'espacement", getProfessionalSupport: "Get Professional Support", diamondSponsors: "Diamond Sponsors", pages: { "/getting-started": "Bien dÃ©marrer", "/getting-started/installation": "Installation", "/getting-started/usage": "Utilisation", "/getting-started/example-projects": "Exemples de Projets", "/getting-started/templates": "Templates", "/getting-started/learn": "Apprendre", "/getting-started/faq": "FAQs", "/getting-started/supported-components": "Composants pris en charge", "/getting-started/supported-platforms": "Plateformes supportÃ©es", "/getting-started/support": "Support", "/components": "Composants", "/components/about-the-lab": "Ã€ propos du Lab", "/components/click-away-listener": "Click Away Listener", "/component/about": "Ã€ propos du Lab", "/components/app-bar": "App Bar (Barre d'application)", "/components/autocomplete": "Autocomplete (Auto-complÃ©tion)", "/components/avatars": "Avatars", "/components/badges": "Badges", "/components/basic-inputs": "EntrÃ©es de base (basic input)", "/components/bottom-navigation": "Bottom Navigation (Barre de navigation infÃ©rieure)", "/components/box": "Box (Boite)", "/components/breadcrumbs": "Breadcrumbs (Fil d'Ariane)", "/components/buttons": "Buttons (Boutons)", "/components/cards": "Cards (Cartes)", "/components/checkboxes": "Cases Ã  cocher", "/components/chips": "Chips (Puces)", "/components/container": "Container (Conteneur)", "/components/content": "Contenu", "/components/css-baseline": "Principes CSS", "/components/data-display": "Affichage des donnÃ©es", "/components/dialogs": "Dialogs (Dialogues)", "/components/dividers": "Dividers (SÃ©parateurs)", "/components/drawers": "Drawers (Tiroirs)", "/components/expansion-panels": "Expansion Panels (Panneaux d'extension)", "/components/feedback": "Feedback", "/components/grid": "Grid", "/components/hidden": "Hidden", "/components/grid-list": "Liste de grille", "/components/icons": "IcÃ´nes", "/components/inputs": "Inputs", "/components/lab": "Laboratoire", "/components/layout": "Disposition", "/components/links": "Liens", "/components/lists": "Lists (Listes)", "/components/menus": "Menus", "/components/modal": "Modal", "/components/navigation": "Menu principal", "/components/no-ssr": "Pas de SSR", "/components/other": "Autres", "/components/paper": "Paper", "/components/pickers": "Date / Heure", "/components/popover": "Popover", "/components/popper": "Popper", "/components/portal": "Portal", "/components/progress": "Barres de progression", "/components/progress-validation": "Feedback", "/components/radio-buttons": "Cases dâ€™option", "/components/selection-controls": "ContrÃ´les de sÃ©lection", "/components/selects": "Selects", "/components/slider": "Slider", "/components/snackbars": "Snackbars (Messages rapides)", "/components/speed-dial": "Speed Dial", "/components/steppers": "Steppers (Ã‰tapes)", "/components/surfaces": "Surfaces", "/components/switches": "Switches (interrupteurs)", "/components/tables": "Table (Tableaux)", "/components/tabs": "Tabs (Onglets)", "/components/text-fields": "Text Fields (Champs de texte)", "/components/toggle-button": "Toggle Button", "/components/tooltips": "Tooltips (Info-bulle)", "/components/transfer-list": "Transfer List (Liste de transfert)", "/components/transitions": "Les transitions", "/components/typography": "Typography", "/components/use-media-query": "useMediaQuery", "/components/utils": "Utilitaires", "/css-in-js": "Styles", "/css-in-js/basics": "Bases", "/css-in-js/advanced": "AvancÃ©", "/system": "SystÃ¨me", "/system/basics": "Bases", "/system/borders": "Borders (Bordures)", "/system/display": "Display (Affichage)", "/system/flexbox": "Flexbox", "/system/palette": "Palette", "/system/positions": "Positions", "/system/shadows": "Shadows (Ombres)", "/system/sizing": "Sizing (Dimensionnement)", "/system/spacing": "Spacing (Ecartement)", "/system/typography": "Typography (Typographie)", "/customization": "Personnalisation", "/customization/theming": "ThÃ¨mes", "/customization/breakpoints": "Breakpoints", "/customization/color": "Couleur", "/customization/themes": "ThÃ¨mes", "/customization/palette": "Palette", "/customization/type": "Type (thÃ¨me clair / sombre)", "/customization/typography": "Typography", "/customization/spacing": "Ecartement", "/customization/z-index": "z-index", "/customization/globals": "Variables globales", "/customization/components": "Surcharges", "/customization/default-theme": "ThÃ¨mes par dÃ©faut", "/guides": "Guides", "/guides/api": "Approche de conception de l'API", "/guides/typescript": "TypeScript", "/guides/interoperability": "InteropÃ©rabilitÃ© de la bibliothÃ¨que de styles", "/guides/minimizing-bundle-size": "RÃ©duire la taille du bundle", "/guides/composition": "Composition", "/guides/responsive-ui": "UI responsive", "/guides/server-rendering": "Rendu serveur", "/guides/migration-v3": "Migration depuis v3x", "/guides/migration-v0x": "Migration depuis v0.x", "/guides/testing": "Test", "/guides/flow": "Flow", "/guides/right-to-left": "Droite Ã  gauche", "/discover-more": "DÃ©couvrir plus", "/discover-more/showcase": "DÃ©monstration", "/discover-more/related-projects": "Projets liÃ©s", "/discover-more/roadmap": "Feuille de route", "/discover-more/backers": "Sponsors", "/discover-more/vision": "Vision", "/discover-more/team": "Ã‰quipe", "/discover-more/community": "CommunautÃ©", "/discover-more/changelog": "Journal des modifications", "/discover-more/governance": "Gouvernance", "/discover-more/languages": "Langages", "/versions": "Versions", "/styles": "Styles", "/styles/basics": "Bases", "/styles/advanced": "AvancÃ©", "https://themes.material-ui.com/": "ThÃ¨mes premium", "/components/material-icons": "IcÃ´nes Material Design", "/components/textarea-autosize": "Textarea Autosize (taille auto)", "/components/rating": "Rating (Notation)", "/components/skeleton": "Skeleton (Squelette)", "/components/tree-view": "Tree View (Vue arborescente)", "/customization/density": "DensitÃ©" } } },
        fQty: function(e, t) { e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",") },
        fwYt: function(e) { e.exports = { homeQuickWord: "ç§ãŸã¡ã®ã‚¹ãƒãƒ³ã‚µãƒ¼ã‹ã‚‰ã®è¨€è‘‰:", helpToTranslate: "ç¿»è¨³ã‚’æ‰‹ä¼ã†", editWebsiteColors: "ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã®è‰²ã‚’ç·¨é›†ã™ã‚‹", toggleTheme: "Toggle light/dark theme", toggleRTL: "Toggle right-to-left/left-to-right", github: "GitHubãƒªãƒã‚¸ãƒˆãƒª", strapline: "ã‚¦ã‚§ãƒ–é–‹ç™ºã‚’ã‚ˆã‚Šé«˜é€Ÿã‹ã¤ç°¡å˜ãªã‚‚ã®ã«ã™ã‚‹Reactã‚³ãƒ³ãƒãƒ¼ãƒãƒ³ãƒˆã§ã™ã€‚ã‚ãªãŸã®ãƒ‡ã‚¶ã‚¤ãƒ³ã‚·ã‚¹ãƒ†ãƒ ã‚’æ§‹ç¯‰ã™ã‚‹ã‹Material Designã§å§‹ã‚ã¾ã—ã‚‡ã†ã€‚", getStarted: "ã¯ã˜ã‚ã¾ã—ã‚‡ã†!", installation: "ã‚¤ãƒ³ã‚¹ãƒˆãƒ¼ãƒ«", installDescr: "npmã‹ã‚‰Material-UIã®ã‚½ãƒ¼ã‚¹ãƒ•ã‚¡ã‚¤ãƒ«ã‚’ã‚¤ãƒ³ã‚¹ãƒˆãƒ¼ãƒ«ã—ã¾ã™ã€‚å¿…è¦ãªCSSã‚’å°Žå…¥ã™ã‚‹ã“ã¨ã‚’å¿˜ã‚Œãªã„ã§ãã ã•ã„ã€‚", cdn: "ã¾ãŸã¯ã€CDNã‚’ä½¿ç”¨ã—ã¾ã™ã€‚", loadFont: "ãƒ‡ãƒ•ã‚©ãƒ«ãƒˆã®Robotoãƒ•ã‚©ãƒ³ãƒˆã‚’èª­ã¿è¾¼ã¿ã¾ã™ã€‚", installButton: "ã‚¤ãƒ³ã‚¹ãƒˆãƒ¼ãƒ«ã«é–¢ã—ã¦", usage: "ä½¿ã„æ–¹", usageDescr: "Material-UIã‚³ãƒ³ãƒãƒ¼ãƒãƒ³ãƒˆã¯è¿½åŠ ã®è¨­å®šãªã—ã§æ©Ÿèƒ½ã—ã€ã‚°ãƒ­ãƒ¼ãƒãƒ«ã‚¹ã‚³ãƒ¼ãƒ—ã‚’æ±šæŸ“ã—ã¾ã›ã‚“ã€‚", usageButton: "ãƒ‰ã‚­ãƒ¥ãƒ¡ãƒ³ãƒˆã‚’æŽ¢ç´¢ã™ã‚‹", themes: "ãƒ—ãƒ¬ãƒŸã‚¢ãƒ ãƒ†ãƒ¼ãƒž", themesDescr: "Material-UIã ã‘ã§æ§‹ç¯‰ã•ã‚ŒãŸå…¬å¼ãƒžãƒ¼ã‚±ãƒƒãƒˆãƒ—ãƒ¬ã‚¤ã‚¹ã®ãƒ—ãƒ¬ãƒŸã‚¢ãƒ ãƒ†ãƒ¼ãƒžã§Material-UIã‚’æ¬¡ã®ãƒ¬ãƒ™ãƒ«ã«é€²åŒ–ã•ã›ã¾ã™ã€‚", themesButton: "ãƒ†ãƒ¼ãƒžã‚’è¦‹ã‚‹", whosUsing: "èª°ãŒMaterial-UIã‚’åˆ©ç”¨ã—ã¦ã¾ã™ã‹ï¼Ÿ", joinThese: "ã“ã®ç´ æ™´ã‚‰ã—ã„å›£ä½“ã«å‚åŠ ã—ã¾ã—ã‚‡ã†ï¼", usingMui: "Material-UIã‚’ä½¿ã£ã¦ã¿ã¾ã›ã‚“ã‹ï¼Ÿ", letUsKnow: "ã”é€£çµ¡ãã ã•ã„ï¼", footerCommunity: "ã‚³ãƒŸãƒ¥ãƒ‹ãƒ†ã‚£", footerResources: "Resources", homeFooterRelease: "ç¾åœ¨ {{versionNumber}}ã§ã™ã€‚ {{license}}ä¸‹ã§ãƒªãƒªãƒ¼ã‚¹ã•ã‚Œã¾ã—ãŸã€‚", license: "MIT ãƒ©ã‚¤ã‚»ãƒ³ã‚¹", likeMui: "Material-UIãŒã‚¹ã‚­ã§ã™ã‹ï¼Ÿ", adblock: "ã‚‚ã—ãƒ†ã‚¯ãƒŽãƒ­ã‚¸ãƒ¼é–¢é€£ã®åºƒå‘ŠãŒæ°—ã«ãªã‚‰ãšã€ã‚ªãƒ¼ãƒ—ãƒ³ã‚½ãƒ¼ã‚¹ã‚’æ”¯æ´ã—ãŸã„å ´åˆã¯ã€Material-UIã‚’åºƒå‘Šãƒ–ãƒ­ãƒƒã‚«ãƒ¼ã®ãƒ›ãƒ¯ã‚¤ãƒˆãƒªã‚¹ãƒˆã«è¿½åŠ ã—ã¦ãã ã•ã„ã€‚", thanks: "æ„Ÿè¬ã—ã¾ã™ï¼", editPage: "ã“ã®ãƒšãƒ¼ã‚¸ã®ç¿»è¨³ã‚’æ‰‹ä¼ã£ã¦ãã ã•ã„", tableOfContents: "ç›®æ¬¡", sourceCode: "ã‚½ãƒ¼ã‚¹ã‚³ãƒ¼ãƒ‰", traffic: "ãƒˆãƒ©ãƒ•ã‚£ãƒƒã‚¯", newest: "æ–°ç€", stars: "GitHubã®ã‚¹ã‚¿ãƒ¼æ•°", visit: "ã‚¦ã‚§ãƒ–ã‚µã‚¤ãƒˆã¸è¡Œã", dashboardTitle: "ãƒ€ãƒƒã‚·ãƒ¥ãƒœãƒ¼ãƒ‰", dashboardDescr: "ã‚¿ã‚¹ã‚¯ãƒãƒ¼ã¨å¤‰ç•°ãƒãƒ£ãƒ¼ãƒˆæ©Ÿèƒ½ã‚’å‚™ãˆãŸãƒŸãƒ‹ãƒžãƒ«ãªãƒ€ãƒƒã‚·ãƒ¥ãƒœãƒ¼ãƒ‰ã€‚ãƒãƒ£ãƒ¼ãƒˆã¯Rechartsã«ã‚ˆã‚‹ã‚‚ã®ã§ã™ãŒã€å·®ã—æ›¿ãˆã‚‹ã®ã¯ç°¡å˜ã§ã™ã€‚", signInTitle: "ãƒ­ã‚°ã‚¤ãƒ³", signInDescr: "ã‚·ãƒ³ãƒ—ãƒ«ãªãƒ­ã‚°ã‚¤ãƒ³ãƒšãƒ¼ã‚¸ã€‚", signInSideTitle: "ãƒ­ã‚°ã‚¤ãƒ³ï¼ˆã‚µã‚¤ãƒ‰ãƒšãƒ¼ã‚¸ï¼‰", signInSideDescr: "ã‚·ãƒ³ãƒ—ãƒ«ãªã‚µã‚¤ãƒ‰ãƒšãƒ¼ã‚¸ã®ãƒ­ã‚°ã‚¤ãƒ³ã€‚", signUpTitle: "æ–°è¦ç™»éŒ²", signUpDescr: "ã‚·ãƒ³ãƒ—ãƒ«ãªæ–°è¦ç™»éŒ²ãƒšãƒ¼ã‚¸ã€‚", blogTitle: "ãƒ–ãƒ­ã‚°", blogDescr: "æ´—ç·´ã•ã‚ŒãŸãƒ–ãƒ­ã‚°ãƒšãƒ¼ã‚¸ã®ãƒ¬ã‚¤ã‚¢ã‚¦ãƒˆã€‚ãƒžãƒ¼ã‚¯ãƒ€ã‚¦ãƒ³ã®ã‚µãƒãƒ¼ãƒˆã¯markdown-to-jsxã«ã‚ˆã‚‹ã‚‚ã®ã§ã™ãŒã€å·®ã—æ›¿ãˆã‚‹ã®ã¯ç°¡å˜ã§ã™ã€‚", checkoutTitle: "ç¢ºèªã™ã‚‹", checkoutDescr: "æ®µéšŽçš„ãªè³¼å…¥æ‰‹ç¶šããƒšãƒ¼ã‚¸ã®ãƒ¬ã‚¤ã‚¢ã‚¦ãƒˆã€‚å¿…è¦ã«åˆã‚ã›ã¦ã‚¹ãƒ†ãƒƒãƒ—æ•°ãŒå¤‰åŒ–ã—ã€ã¾ãŸä»»æ„ã§ã‚¹ãƒ†ãƒƒãƒ—ã‚’è¿½åŠ ã§ãã¾ã™ã€‚", albumTitle: "ã‚¢ãƒ«ãƒãƒ ", albumDescr: "ãƒ’ãƒ¼ãƒ­ãƒ¼ãƒ¦ãƒ‹ãƒƒãƒˆã¨ãƒ•ãƒƒã‚¿ãƒ¼ãŒä»˜ã„ãŸãƒ¬ã‚¹ãƒãƒ³ã‚·ãƒ–å¯¾å¿œã®ã‚¢ãƒ«ãƒãƒ /ã‚®ãƒ£ãƒ©ãƒªãƒ¼ãƒšãƒ¼ã‚¸ã®ãƒ¬ã‚¤ã‚¢ã‚¦ãƒˆã€‚", pricingTitle: "æ–™é‡‘ãƒ—ãƒ©ãƒ³", pricingDescr: "ã“ã®ãƒšãƒ¼ã‚¸ãƒ¬ã‚¤ã‚¢ã‚¦ãƒˆã‚’ç”¨ã„ã¦é¡§å®¢ã«åŠ¹æžœçš„ãªæ–™é‡‘ãƒ†ãƒ¼ãƒ–ãƒ«ã‚’ã™ãã«ä½œã‚Šã¾ã—ã‚‡ã†ã€‚", stickyFooterTitle: "å›ºå®šãƒ•ãƒƒã‚¿ãƒ¼", stickyFooterDescr: "ãƒšãƒ¼ã‚¸å†…ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ãŒçŸ­ã„å ´åˆã¯ã€è¡¨ç¤ºé ˜åŸŸã®ä¸‹ã«ãƒ•ãƒƒã‚¿ãƒ¼ã‚’å›ºå®šã—ã¾ã™ã€‚", expandAll: "å…¨ã¦å±•é–‹", showSource: "ã‚½ãƒ¼ã‚¹ã‚³ãƒ¼ãƒ‰", hideSource: "ã‚½ãƒ¼ã‚¹ã‚³ãƒ¼ãƒ‰ã‚’éš ã™", showFullSource: "Show the full source", hideFullSource: "Hide the full source", viewGitHub: "GitHubã§ã‚½ãƒ¼ã‚¹ã‚³ãƒ¼ãƒ‰ã‚’è¦‹ã‚‹", codesandbox: "CodeSandboxã§ç·¨é›†ã™ã‚‹", seeMore: "ã‚‚ã£ã¨è¦‹ã‚‹", copySource: "ã‚½ãƒ¼ã‚¹ã‚³ãƒ¼ãƒ‰ã‚’ã‚³ãƒ”ãƒ¼ã™ã‚‹", copySourceLinkJS: "JavaScriptã‚½ãƒ¼ã‚¹ã¸ã®ãƒªãƒ³ã‚¯ã‚’ã‚³ãƒ”ãƒ¼ã™ã‚‹", copySourceLinkTS: "TypeScriptã‚½ãƒ¼ã‚¹ã¸ã®ãƒªãƒ³ã‚¯ã‚’ã‚³ãƒ”ãƒ¼ã™ã‚‹", stackblitz: "StackBlitz(JS only) ã§ç·¨é›†ã™ã‚‹", headTitle: "ãƒãƒ”ãƒ¥ãƒ©ãƒ¼ãªReact UIãƒ•ãƒ¬ãƒ¼ãƒ ãƒ¯ãƒ¼ã‚¯", emojiLove: "ã‹ã—ã“", emoojiWarning: "æ³¨æ„", mainNavigation: "ãƒ¡ã‚¤ãƒ³ãƒŠãƒ“ã‚²ãƒ¼ã‚·ãƒ§ãƒ³", skipToContent: "ã‚³ãƒ³ãƒ†ãƒ³ãƒ„ã¸ç§»å‹•", openDrawer: "ãƒ¡ã‚¤ãƒ³ãƒŠãƒ“ã‚²ãƒ¼ã‚·ãƒ§ãƒ³ã‚’é–‹ã", changeLanguage: "è¨€èªžã‚’åˆ‡ã‚Šæ›¿ãˆã‚‹", pageTOC: "ãƒšãƒ¼ã‚¸ã®ç›®æ¬¡", showJSSource: "JavaScriptã®ã‚½ãƒ¼ã‚¹ã‚’è¡¨ç¤ºã™ã‚‹", showTSSource: "TypeScriptã®ã‚½ãƒ¼ã‚¹ã‚’è¡¨ç¤ºã™ã‚‹", close: "é–‰ã˜ã‚‹", useHighDensity: "ã‚ˆã‚Šé«˜å¯†åº¦ã‚’é©ç”¨ã™ã‚‹", spacingUnit: "ã‚¹ãƒšãƒ¼ã‚·ãƒ³ã‚°ãƒ¦ãƒ‹ãƒƒãƒˆ", resetDensity: "å¯†åº¦ã‚’ãƒªã‚»ãƒƒãƒˆ", increaseSpacing: "é–“éš”ã‚’åºƒã’ã‚‹", decreaseSpacing: "é–“éš”ã‚’ç‹­ã‚ã‚‹", getProfessionalSupport: "Get Professional Support", diamondSponsors: "Diamond Sponsors", pages: { "/getting-started": "ã¯ã˜ã‚ã«", "/getting-started/installation": "ã‚¤ãƒ³ã‚¹ãƒˆãƒ¼ãƒ«", "/getting-started/usage": "ä½¿ã„æ–¹", "/getting-started/example-projects": "ã‚µãƒ³ãƒ—ãƒ«ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆ", "/getting-started/templates": "ãƒ†ãƒ³ãƒ—ãƒ¬ãƒ¼ãƒˆ", "/getting-started/learn": "å­¦ã¶", "/getting-started/faq": "ã‚ˆãã‚ã‚‹è³ªå•ã¨å›žç­”", "/getting-started/supported-components": "ã‚µãƒãƒ¼ãƒˆã•ã‚Œã¦ã„ã‚‹ã‚³ãƒ³ãƒãƒ¼ãƒãƒ³ãƒˆ", "/getting-started/supported-platforms": "ã‚µãƒãƒ¼ãƒˆã•ã‚Œã¦ã„ã‚‹ãƒ—ãƒ©ãƒƒãƒˆãƒ•ã‚©ãƒ¼ãƒ ", "/getting-started/support": "ã‚µãƒãƒ¼ãƒˆ", "/components": "ã‚³ãƒ³ãƒãƒ¼ãƒãƒ³ãƒˆ", "/components/about-the-lab": "ãƒ©ãƒœã«ã¤ã„ã¦", "/components/click-away-listener": "ã‚¯ãƒªãƒƒã‚¯ãƒªã‚¹ãƒŠãƒ¼", "/component/about": "ãƒ©ãƒœã«ã¤ã„ã¦", "/components/app-bar": "ã‚¢ãƒ—ãƒªãƒãƒ¼", "/components/autocomplete": "ã‚ªãƒ¼ãƒˆã‚³ãƒ³ãƒ—ãƒªãƒ¼ãƒˆ", "/components/avatars": "ã‚¢ãƒã‚¿ãƒ¼", "/components/badges": "ãƒãƒƒã‚¸", "/components/basic-inputs": "åŸºæœ¬çš„ãªå…¥åŠ›", "/components/bottom-navigation": "ãƒœãƒˆãƒ ãƒŠãƒ“ã‚²ãƒ¼ã‚·ãƒ§ãƒ³", "/components/box": "ãƒœãƒƒã‚¯ã‚¹", "/components/breadcrumbs": "Breadcrumbs", "/components/buttons": "ãƒœã‚¿ãƒ³", "/components/cards": "ã‚«ãƒ¼ãƒ‰", "/components/checkboxes": "ãƒã‚§ãƒƒã‚¯ãƒœãƒƒã‚¯ã‚¹", "/components/chips": "ãƒãƒƒãƒ—", "/components/container": "ã‚³ãƒ³ãƒ†ãƒŠ", "/components/content": "ã‚³ãƒ³ãƒ†ãƒ³ãƒ„", "/components/css-baseline": "CSSãƒ™ãƒ¼ã‚¹ãƒ©ã‚¤ãƒ³", "/components/data-display": "ãƒ‡ãƒ¼ã‚¿ã®è¡¨ç¤º", "/components/dialogs": "Dialogs", "/components/dividers": "åŒºåˆ‡ã‚Šç·š", "/components/drawers": "Drawers", "/components/expansion-panels": "æ‹¡å¼µãƒ‘ãƒãƒ«", "/components/feedback": "ãƒ•ã‚£ãƒ¼ãƒ‰ãƒãƒƒã‚¯", "/components/grid": "ã‚°ãƒªãƒƒãƒ‰", "/components/hidden": "Hidden", "/components/grid-list": "ã‚°ãƒªãƒƒãƒ‰ãƒªã‚¹ãƒˆ", "/components/icons": "ã‚¢ã‚¤ã‚³ãƒ³", "/components/inputs": "å…¥åŠ›", "/components/lab": "ãƒ©ãƒœ", "/components/layout": "ãƒ¬ã‚¤ã‚¢ã‚¦ãƒˆ", "/components/links": "ãƒªãƒ³ã‚¯", "/components/lists": "ãƒªã‚¹ãƒˆ", "/components/menus": "ãƒ¡ãƒ‹ãƒ¥ãƒ¼", "/components/modal": "ãƒ¢ãƒ¼ãƒ€ãƒ«", "/components/navigation": "ãƒŠãƒ“ã‚²ãƒ¼ã‚·ãƒ§ãƒ³", "/components/no-ssr": "No SSR", "/components/other": "ãã®ä»–", "/components/paper": "ç´™", "/components/pickers": "æ—¥ä»˜æ™‚åˆ»", "/components/popover": "ãƒãƒƒãƒ—ã‚ªãƒ¼ãƒãƒ¼", "/components/popper": "ãƒãƒƒãƒ‘ãƒ¼", "/components/portal": "ãƒãƒ¼ã‚¿ãƒ«", "/components/progress": "Progress", "/components/progress-validation": "ãƒ•ã‚£ãƒ¼ãƒ‰ãƒãƒƒã‚¯", "/components/radio-buttons": "ãƒ©ã‚¸ã‚ªãƒœã‚¿ãƒ³", "/components/selection-controls": "Selection Controls", "/components/selects": "é¸æŠž", "/components/slider": "ã‚¹ãƒ©ã‚¤ãƒ€ãƒ¼", "/components/snackbars": "Snackbars", "/components/speed-dial": "ã‚¹ãƒ”ãƒ¼ãƒ‰ãƒ€ã‚¤ãƒ¤ãƒ«", "/components/steppers": "ã‚¹ãƒ†ãƒƒãƒ‘ãƒ¼", "/components/surfaces": "ã‚µãƒ¼ãƒ•ã‚§ã‚¹", "/components/switches": "ã‚¹ã‚¤ãƒƒãƒ", "/components/tables": "ãƒ†ãƒ¼ãƒ–ãƒ«", "/components/tabs": "ã‚¿ãƒ–", "/components/text-fields": "ãƒ†ã‚­ã‚¹ãƒˆãƒ•ã‚£ãƒ¼ãƒ«ãƒ‰", "/components/toggle-button": "ãƒˆã‚°ãƒ«ãƒœã‚¿ãƒ³", "/components/tooltips": "ãƒ„ãƒ¼ãƒ«ãƒãƒƒãƒ—", "/components/transfer-list": "è»¢é€ãƒªã‚¹ãƒˆ", "/components/transitions": "ãƒˆãƒ©ãƒ³ã‚¸ã‚·ãƒ§ãƒ³", "/components/typography": "ã‚¿ã‚¤ãƒã‚°ãƒ©ãƒ•ã‚£", "/components/use-media-query": "useMediaQuery", "/components/utils": "ãƒ¦ãƒ¼ãƒ†ã‚£ãƒªãƒ†ã‚£", "/css-in-js": "ã‚¹ã‚¿ã‚¤ãƒ«", "/css-in-js/basics": "åŸºæœ¬", "/css-in-js/advanced": "é«˜åº¦ãª", "/system": "ã‚·ã‚¹ãƒ†ãƒ ", "/system/basics": "åŸºæœ¬", "/system/borders": "ãƒœãƒ¼ãƒ€ãƒ¼", "/system/display": "ãƒ‡ã‚£ã‚¹ãƒ—ãƒ¬ã‚¤", "/system/flexbox": "Flexbox", "/system/palette": "ãƒ‘ãƒ¬ãƒƒãƒˆ", "/system/positions": "Position", "/system/shadows": "Shadows", "/system/sizing": "ã‚µã‚¤ã‚¸ãƒ³ã‚°", "/system/spacing": "é–“éš”", "/system/typography": "ã‚¿ã‚¤ãƒã‚°ãƒ©ãƒ•ã‚£", "/customization": "ã‚«ã‚¹ã‚¿ãƒžã‚¤ã‚º", "/customization/theming": "Themes", "/customization/breakpoints": "ãƒ–ãƒ¬ã‚¤ã‚¯ãƒã‚¤ãƒ³ãƒˆ", "/customization/color": "ã‚«ãƒ©ãƒ¼", "/customization/themes": "Themes", "/customization/palette": "ãƒ‘ãƒ¬ãƒƒãƒˆ", "/customization/type": "ã‚¿ã‚¤ãƒ—(ãƒ©ã‚¤ãƒˆï¼ãƒ€ãƒ¼ã‚¯ãƒ†ãƒ¼ãƒž)", "/customization/typography": "ã‚¿ã‚¤ãƒã‚°ãƒ©ãƒ•ã‚£", "/customization/spacing": "é–“éš”", "/customization/z-index": "z-index", "/customization/globals": "ã‚°ãƒ­ãƒ¼ãƒãƒ«", "/customization/components": "Overrides", "/customization/default-theme": "ãƒ‡ãƒ•ã‚©ãƒ«ãƒˆã®ãƒ†ãƒ¼ãƒž", "/guides": "ã‚¬ã‚¤ãƒ‰", "/guides/api": "APIã®è¨­è¨ˆã‚¢ãƒ—ãƒ­ãƒ¼ãƒ", "/guides/typescript": "TypeScript", "/guides/interoperability": "ã‚¹ã‚¿ã‚¤ãƒ«ãƒ©ã‚¤ãƒ–ãƒ©ãƒªã®ç›¸äº’é‹ç”¨æ€§", "/guides/minimizing-bundle-size": "ãƒãƒ³ãƒ‰ãƒ«ã‚µã‚¤ã‚ºã®æœ€å°åŒ–", "/guides/composition": "å¾“å±žé–¢ä¿‚", "/guides/responsive-ui": "ãƒ¬ã‚¹ãƒãƒ³ã‚·ãƒ–UI", "/guides/server-rendering": "ã‚µãƒ¼ãƒãƒ¼ã‚µã‚¤ãƒ‰ãƒ¬ãƒ³ãƒ€ãƒªãƒ³ã‚°", "/guides/migration-v3": "v3ã‹ã‚‰ã®ç§»è¡Œ", "/guides/migration-v0x": "v0.ã‹ã‚‰ã®ç§»è¡Œ", "/guides/testing": "ãƒ†ã‚¹ãƒˆä¸­", "/guides/flow": "Flow", "/guides/right-to-left": "å³ã‹ã‚‰å·¦", "/discover-more": "ã‚‚ã£ã¨çŸ¥ã‚‹", "/discover-more/showcase": "äº‹ä¾‹", "/discover-more/related-projects": "é–¢é€£ãƒ—ãƒ­ã‚¸ã‚§ã‚¯ãƒˆ", "/discover-more/roadmap": "ãƒ­ãƒ¼ãƒ‰ãƒžãƒƒãƒ—", "/discover-more/backers": "ã‚¹ãƒãƒ³ã‚µãƒ¼", "/discover-more/vision": "ãƒ“ã‚¸ãƒ§ãƒ³", "/discover-more/team": "ãƒãƒ¼ãƒ ", "/discover-more/community": "ã‚³ãƒŸãƒ¥ãƒ‹ãƒ†ã‚£", "/discover-more/changelog": "å¤‰æ›´å±¥æ­´", "/discover-more/governance": "ã‚¬ãƒãƒŠãƒ³ã‚¹", "/discover-more/languages": "è¨€èªž", "/versions": "ãƒãƒ¼ã‚¸ãƒ§ãƒ³", "/styles": "ã‚¹ã‚¿ã‚¤ãƒ«", "/styles/basics": "åŸºæœ¬", "/styles/advanced": "é«˜åº¦ãªæ©Ÿèƒ½", "https://themes.material-ui.com/": "ãƒ—ãƒ¬ãƒŸã‚¢ãƒ ãƒ†ãƒ¼ãƒž", "/components/material-icons": "ãƒžãƒ†ãƒªã‚¢ãƒ«ã‚¢ã‚¤ã‚³ãƒ³ï¼ˆMaterial Iconsï¼‰", "/components/textarea-autosize": "ãƒ†ã‚­ã‚¹ãƒˆã‚¨ãƒªã‚¢ã®è‡ªå‹•ã‚µã‚¤ã‚ºèª¿æ•´", "/components/rating": "ãƒ¬ãƒ¼ãƒˆ", "/components/skeleton": "ã‚¹ã‚±ãƒ«ãƒˆãƒ³", "/components/tree-view": "ãƒ„ãƒªãƒ¼ãƒ“ãƒ¥ãƒ¼ (Tree View)", "/customization/density": "å¯†åº¦(Density)" } } },
        fxeQ: function(e, t, n) {
            var o = n("LSEb")(n("s3UK"), "WeakMap");
            e.exports = o
        },
        gKNW: function(e, t) { e.exports = function(e) { return function(t) { return null == t ? void 0 : t[e] } } },
        gnIa: function(e, t, n) {
            var o = n("tDyL"),
                s = n("SyCk"),
                a = n("h0av");
            e.exports = function(e) {
                return function(t, n, r) {
                    var i = Object(t);
                    if (!s(t)) {
                        var c = o(n, 3);
                        t = a(t), n = function(e) { return c(i[e], e, i) }
                    }
                    var p = e(t, n, r);
                    return p > -1 ? i[c ? t[p] : p] : void 0
                }
            }
        },
        gwRl: function(e, t) { e.exports = function(e, t) { for (var n = -1, o = t.length, s = e.length; ++n < o;) e[s + n] = t[n]; return e } },
        h0av: function(e, t, n) {
            var o = n("6iN7"),
                s = n("Lalj"),
                a = n("SyCk");
            e.exports = function(e) { return a(e) ? o(e) : s(e) }
        },
        i0JV: function(e, t, n) {
            var o = n("FEiO"),
                s = Object.prototype.hasOwnProperty;
            e.exports = function(e) { var t = this.__data__; return o ? void 0 !== t[e] : s.call(t, e) }
        },
        iJnn: function(e, t, n) {
            var o = n("PAFS");
            e.exports = function(e, t, n, s) { try { return s ? t(o(n)[0], n[1]) : t(n) } catch (r) { var a = e.return; throw void 0 !== a && o(a.call(e)), r } }
        },
        iOq2: function(e, t) { e.exports = function() { this.__data__ = [], this.size = 0 } },
        ixHX: function(e, t, n) {
            var o = n("aCmY"),
                s = n("tDyL"),
                a = n("LF0y"),
                r = Math.max;
            e.exports = function(e, t, n) { var i = null == e ? 0 : e.length; if (!i) return -1; var c = null == n ? 0 : a(n); return c < 0 && (c = r(i + c, 0)), o(e, s(t, 3), c) }
        },
        jEou: function(e, t, n) {
            var o = n("Bsg+"),
                s = n("3ydu").set;
            e.exports = function(e, t, n) { var a, r = t.constructor; return r !== n && "function" == typeof r && (a = r.prototype) !== n.prototype && o(a) && s && s(e, a), e }
        },
        jL4t: function(e, t) {
            var n = Object.prototype;
            e.exports = function(e) { var t = e && e.constructor; return e === ("function" == typeof t && t.prototype || n) }
        },
        jPEw: function(e, t, n) {
            var o = n("U1KF").f,
                s = n("ezc+"),
                a = n("9dxi")("toStringTag");
            e.exports = function(e, t, n) { e && !s(e = n ? e : e.prototype, a) && o(e, a, { configurable: !0, value: t }) }
        },
        ji6j: function(e, t, n) {
            var o = n("2AbI"),
                s = 1,
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, n, r, i, c) {
                var p = n & s,
                    u = o(e),
                    l = u.length;
                if (l != o(t).length && !p) return !1;
                for (var d = l; d--;) { var m = u[d]; if (!(p ? m in t : a.call(t, m))) return !1 }
                var g = c.get(e);
                if (g && c.get(t)) return g == t;
                var h = !0;
                c.set(e, t), c.set(t, e);
                for (var f = p; ++d < l;) {
                    var b = e[m = u[d]],
                        v = t[m];
                    if (r) var w = p ? r(v, b, m, t, e, c) : r(b, v, m, e, t, c);
                    if (!(void 0 === w ? b === v || i(b, v, n, r, c) : w)) { h = !1; break }
                    f || (f = "constructor" == m)
                }
                if (h && !f) {
                    var y = e.constructor,
                        S = t.constructor;
                    y != S && "constructor" in e && "constructor" in t && !("function" == typeof y && y instanceof y && "function" == typeof S && S instanceof S) && (h = !1)
                }
                return c.delete(e), c.delete(t), h
            }
        },
        kCQp: function(e, t, n) {
            var o = n("RW/s"),
                s = n("0KRy"),
                a = n("xkFB"),
                r = 200;
            e.exports = function(e, t) {
                var n = this.__data__;
                if (n instanceof o) {
                    var i = n.__data__;
                    if (!s || i.length < r - 1) return i.push([e, t]), this.size = ++n.size, this;
                    n = this.__data__ = new a(i)
                }
                return n.set(e, t), this.size = n.size, this
            }
        },
        kXPx: function(e, t, n) {
            var o = n("COrk"),
                s = n("edSL"),
                a = n("dtdj"),
                r = n("BwbT"),
                i = n("2EQx"),
                c = n("a7YA"),
                p = n("cTHi"),
                u = 1,
                l = 2;
            e.exports = function(e, t) { return r(e) && i(t) ? c(p(e), t) : function(n) { var r = s(n, e); return void 0 === r && r === t ? a(n, e) : o(t, r, u | l) } }
        },
        lYsT: function(e, t, n) {
            var o = n("UgeB"),
                s = n("T9Ud"),
                a = Object.prototype,
                r = a.hasOwnProperty,
                i = a.propertyIsEnumerable,
                c = o(function() { return arguments }()) ? o : function(e) { return s(e) && r.call(e, "callee") && !i.call(e, "callee") };
            e.exports = c
        },
        m1Dn: function(e, t, n) {
            "use strict";
            var o = n("XQta"),
                s = n("SsG5");
            e.exports = n("AkS8")("Set", function(e) { return function() { return e(this, arguments.length > 0 ? arguments[0] : void 0) } }, { add: function(e) { return o.def(s(this, "Set"), e = 0 === e ? 0 : e, e) } }, o)
        },
        mggL: function(e, t, n) {
            var o = n("Bsg+"),
                s = n("P56o").document,
                a = o(s) && o(s.createElement);
            e.exports = function(e) { return a ? s.createElement(e) : {} }
        },
        ml72: function(e, t, n) {
            var o = n("Cmsx"),
                s = n("GCOZ");
            e.exports = function(e) { return o(s(e)) }
        },
        mvii: function(e, t) {
            var n = Math.ceil,
                o = Math.floor;
            e.exports = function(e) { return isNaN(e = +e) ? 0 : (e > 0 ? o : n)(e) }
        },
        mw0f: function(e) { e.exports = { homeQuickWord: "A quick word from our sponsors:", helpToTranslate: "Help to translate", editWebsiteColors: "Edit website colors", toggleTheme: "Toggle light/dark theme", toggleRTL: "Toggle right-to-left/left-to-right", github: "GitHub repository", strapline: "React components for faster and easier web development. Build your own design system, or start with Material Design.", getStarted: "Get Started", installation: "Installation", installDescr: "Install Material-UI's source files via npm. We take care of injecting the CSS needed.", cdn: "or use a CDN.", loadFont: "Load the default Roboto font.", installButton: "Read installation docs", usage: "Usage", usageDescr: "Material-UI components work without any additional setup, and don't pollute the global scope.", usageButton: "Explore the docs", themes: "Premium themes", themesDescr: "Take Material-UI to the next level with premium themes from our official marketplace â€“ all built on Material-UI.", themesButton: "Browse themes", whosUsing: "Who's using Material-UI?", joinThese: "Join these and other great organisations!", usingMui: "Are you using Material-UI?", letUsKnow: "Let us know!", footerCommunity: "Community", footerResources: "Resources", homeFooterRelease: "Currently {{versionNumber}}. Released under the {{license}}.", license: "MIT License", likeMui: "Help us keep running", adblock: "If you don't mind tech related ads (no tracking or remarketing), and want to keep us running, please whitelist Material-UI in your blocker.", thanks: "Thank you!", editPage: "Edit this page", tableOfContents: "Contents", sourceCode: "Source code", traffic: "Traffic", newest: "Newest", stars: "GitHub stars", visit: "Visit the website", dashboardTitle: "Dashboard", dashboardDescr: "A minimal dashboard with taskbar and mini variant draw. The chart is courtesy of Recharts, but it is simple to substitute an alternative.", signInTitle: "Sign In", signInDescr: "A simple Sign In page.", signInSideTitle: "Sign-in side", signInSideDescr: "A simple Sign In side page.", signUpTitle: "Sign Up", signUpDescr: "A simple Sign Up page.", blogTitle: "Blog", blogDescr: "A sophisticated blog page layout. Markdown support is courtesy of markdown-to-jsx but is easily replaced.", checkoutTitle: "Checkout", checkoutDescr: "A step-by-step checkout page layout. Adapt the number of steps to suit your needs, or make steps optional.", albumTitle: "Album", albumDescr: "A responsive album / gallery page layout with a hero unit and footer.", pricingTitle: "Pricing", pricingDescr: "Quickly build an effective pricing table for your potential customers with this page layout.", stickyFooterTitle: "Sticky footer", stickyFooterDescr: "Attach a footer to the bottom of the viewport when page content is short.", expandAll: "Expand all", showSource: "Show the source", hideSource: "Hide the source", showFullSource: "Show the full source", hideFullSource: "Hide the full source", viewGitHub: "View the source on GitHub", codesandbox: "Edit in CodeSandbox", seeMore: "See more", copySource: "Copy the source", copySourceLinkJS: "Copy link to JavaScript source", copySourceLinkTS: "Copy link to TypeScript source", stackblitz: "Edit in StackBlitz (JS only)", headTitle: "Material-UI: A popular React UI framework", emojiLove: "Love", emoojiWarning: "Warning", mainNavigation: "Main navigation", skipToContent: "Skip to content", openDrawer: "Open main navigation", changeLanguage: "Change language", pageTOC: "Page table of contents", showJSSource: "Show JavaScript source", showTSSource: "Show TypeScript source", close: "Close", useHighDensity: "Apply higher density via props", spacingUnit: "Spacing unit", resetDensity: "Reset density", increaseSpacing: "increase spacing", decreaseSpacing: "decrease spacing", getProfessionalSupport: "Get Professional Support", diamondSponsors: "Diamond Sponsors", pages: { "/getting-started": "Getting Started", "/getting-started/installation": "Installation", "/getting-started/usage": "Usage", "/getting-started/example-projects": "Example Projects", "/getting-started/templates": "Templates", "/getting-started/learn": "Learn", "/getting-started/faq": "FAQs", "/getting-started/supported-components": "Supported Components", "/getting-started/supported-platforms": "Supported Platforms", "/getting-started/support": "Support", "/components": "Components", "/components/about-the-lab": "About The Lab", "/components/click-away-listener": "Click Away Listener", "/component/about": "About The Lab", "/components/app-bar": "App Bar", "/components/autocomplete": "Autocomplete", "/components/avatars": "Avatars", "/components/badges": "Badges", "/components/basic-inputs": "Basic Inputs", "/components/bottom-navigation": "Bottom Navigation", "/components/box": "Box", "/components/breadcrumbs": "Breadcrumbs", "/components/buttons": "Buttons", "/components/cards": "Cards", "/components/checkboxes": "Checkboxes", "/components/chips": "Chips", "/components/container": "Container", "/components/content": "Content", "/components/css-baseline": "CSS Baseline", "/components/data-display": "Data Display", "/components/dialogs": "Dialogs", "/components/dividers": "Dividers", "/components/drawers": "Drawers", "/components/expansion-panels": "Expansion Panels", "/components/feedback": "Feedback", "/components/grid": "Grid", "/components/hidden": "Hidden", "/components/grid-list": "Grid List", "/components/icons": "Icons", "/components/inputs": "Inputs", "/components/lab": "Lab", "/components/layout": "Layout", "/components/links": "Links", "/components/lists": "Lists", "/components/menus": "Menus", "/components/modal": "Modal", "/components/navigation": "Navigation", "/components/no-ssr": "No SSR", "/components/other": "Other", "/components/paper": "Paper", "/components/pickers": "Date / Time", "/components/popover": "Popover", "/components/popper": "Popper", "/components/portal": "Portal", "/components/progress": "Progress", "/components/progress-validation": "Feedback", "/components/radio-buttons": "Radio Buttons", "/components/selection-controls": "Selection Controls", "/components/selects": "Selects", "/components/slider": "Slider", "/components/snackbars": "Snackbars", "/components/speed-dial": "Speed Dial", "/components/steppers": "Steppers", "/components/surfaces": "Surfaces", "/components/switches": "Switches", "/components/tables": "Tables", "/components/tabs": "Tabs", "/components/text-fields": "Text Fields", "/components/toggle-button": "Toggle Button", "/components/tooltips": "Tooltips", "/components/transfer-list": "Transfer List", "/components/transitions": "Transitions", "/components/typography": "Typography", "/components/use-media-query": "useMediaQuery", "/components/utils": "Utils", "/css-in-js": "Styles", "/css-in-js/basics": "Basics", "/css-in-js/advanced": "Advanced", "/system": "System", "/system/basics": "Basics", "/system/borders": "Borders", "/system/display": "Display", "/system/flexbox": "Flexbox", "/system/palette": "Palette", "/system/positions": "Positions", "/system/shadows": "Shadows", "/system/sizing": "Sizing", "/system/spacing": "Spacing", "/system/typography": "Typography", "/customization": "Customization", "/customization/theming": "Overview", "/customization/breakpoints": "Breakpoints", "/customization/color": "Color", "/customization/themes": "Overview", "/customization/palette": "Palette", "/customization/type": "Type (light / dark theme)", "/customization/typography": "Typography", "/customization/spacing": "Spacing", "/customization/z-index": "z-index", "/customization/globals": "Globals", "/customization/components": "Components", "/customization/default-theme": "Default Theme", "/guides": "Guides", "/guides/api": "API Design Approach", "/guides/typescript": "TypeScript", "/guides/interoperability": "Style Library Interoperability", "/guides/minimizing-bundle-size": "Minimizing Bundle Size", "/guides/composition": "Composition", "/guides/responsive-ui": "Responsive UI", "/guides/server-rendering": "Server Rendering", "/guides/migration-v3": "Migration From v3", "/guides/migration-v0x": "Migration From v0.x", "/guides/testing": "Testing", "/guides/flow": "Flow", "/guides/right-to-left": "Right-to-left", "/discover-more": "Discover More", "/discover-more/showcase": "Showcase", "/discover-more/related-projects": "Related Projects", "/discover-more/roadmap": "Roadmap", "/discover-more/backers": "Sponsors & Backers", "/discover-more/vision": "Vision", "/discover-more/team": "Team", "/discover-more/community": "Community", "/discover-more/changelog": "Changelog", "/discover-more/governance": "Governance", "/discover-more/languages": "Languages", "/versions": "Versions", "/styles": "Styles", "/styles/basics": "Basics", "/styles/advanced": "Advanced", "https://themes.material-ui.com/": "Premium Themes", "/components/material-icons": "Material Icons", "/components/textarea-autosize": "Textarea Autosize", "/components/rating": "Rating", "/components/skeleton": "Skeleton", "/components/tree-view": "Tree View", "/customization/density": "Density" } } },
        "n+VH": function(e, t) {
            var n = {}.toString;
            e.exports = function(e) { return n.call(e).slice(8, -1) }
        },
        o42t: function(e, t, n) { e.exports = n("6jsY") },
        pB2m: function(e, t, n) {
            var o = n("OFVL"),
                s = n("9dxi")("iterator"),
                a = n("Ibj2");
            e.exports = n("R5TD").getIteratorMethod = function(e) { if (null != e) return e[s] || e["@@iterator"] || a[o(e)] }
        },
        "pU1/": function(e, t, n) {
            var o = n("U1KF"),
                s = n("PAFS"),
                a = n("LuBU");
            e.exports = n("GGqZ") ? Object.defineProperties : function(e, t) { s(e); for (var n, r = a(t), i = r.length, c = 0; i > c;) o.f(e, n = r[c++], t[n]); return e }
        },
        puZ4: function(e, t, n) {
            "use strict";
            var o = n("Vx+c"),
                s = n("WWmS"),
                a = n("jPEw"),
                r = {};
            n("tjmq")(r, n("9dxi")("iterator"), function() { return this }), e.exports = function(e, t, n) { e.prototype = o(r, { next: s(1, n) }), a(e, t + " Iterator") }
        },
        "q+I6": function(e, t) {
            var n = 9007199254740991,
                o = /^(?:0|[1-9]\d*)$/;
            e.exports = function(e, t) { var s = typeof e; return !!(t = null == t ? n : t) && ("number" == s || "symbol" != s && o.test(e)) && e > -1 && e % 1 == 0 && e < t }
        },
        rV0Y: function(e, t, n) {
            var o = n("LSEb")(n("s3UK"), "Promise");
            e.exports = o
        },
        rrk0: function(e, t) {
            e.exports = function(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach(function(e, o) { n[++t] = [o, e] }), n
            }
        },
        s3t7: function(e, t, n) {
            var o = n("VNQV"),
                s = n("0KRy"),
                a = n("rV0Y"),
                r = n("b2OE"),
                i = n("fxeQ"),
                c = n("GI0s"),
                p = n("bE7W"),
                u = p(o),
                l = p(s),
                d = p(a),
                m = p(r),
                g = p(i),
                h = c;
            (o && "[object DataView]" != h(new o(new ArrayBuffer(1))) || s && "[object Map]" != h(new s) || a && "[object Promise]" != h(a.resolve()) || r && "[object Set]" != h(new r) || i && "[object WeakMap]" != h(new i)) && (h = function(e) {
                var t = c(e),
                    n = "[object Object]" == t ? e.constructor : void 0,
                    o = n ? p(n) : "";
                if (o) switch (o) {
                    case u:
                        return "[object DataView]";
                    case l:
                        return "[object Map]";
                    case d:
                        return "[object Promise]";
                    case m:
                        return "[object Set]";
                    case g:
                        return "[object WeakMap]"
                }
                return t
            }), e.exports = h
        },
        sLcN: function(e) { e.exports = { homeQuickWord: "æ¥è‡ªæˆ‘ä»¬çš„èµžåŠ©å•†çš„ä¸€ä¸ªç®€çŸ­æ¦‚æ‹¬ï¼š", helpToTranslate: "å¸®åŠ©æˆ‘ä»¬ç¿»è¯‘", editWebsiteColors: "ç¼–è¾‘ç½‘ç«™çš„é¢œè‰²", toggleTheme: "åˆ‡æ¢æµ…è‰²/æ·±è‰²ä¸»é¢˜", toggleRTL: "åˆ‡æ¢ ä»Žå³åˆ°å·¦/ä»Žå·¦åˆ°å³", github: "GitHub å­˜å‚¨åº“", strapline: "React ç»„ä»¶ç”¨äºŽæ›´å¿«é€Ÿã€æ›´ç®€ä¾¿çš„ web å¼€å‘ã€‚ä½ ä¹Ÿå¯ä»¥å»ºç«‹ä½ è‡ªå·±çš„è®¾è®¡ç³»ç»Ÿï¼Œæˆ–è€…ä»Ž Material Design å¼€å§‹ã€‚", getStarted: "èµ·æ­¥", installation: "å®‰è£…", installDescr: "æ‚¨å¯ä»¥é€šè¿‡ npm å®‰è£… Material-UI çš„æºç ã€‚æˆ‘ä»¬ä¼šè´Ÿè´£æ³¨å…¥æ‰€éœ€çš„ CSSã€‚", cdn: "æˆ–ä½¿ç”¨ CDNã€‚", loadFont: "åŠ è½½é»˜è®¤ Roboto å­—ä½“ã€‚", installButton: "é˜…è¯»å®‰è£…æ–‡æ¡£", usage: "ä½¿ç”¨", usageDescr: "Material-UI ç»„ä»¶æ— éœ€ä»»ä½•é¢å¤–çš„è®¾ç½®å³å¯ä½¿ç”¨, å¹¶ä¸”ä¸ä¼šæ±¡æŸ“å…¨å±€èŒƒå›´ã€‚", usageButton: "æŽ¢ç´¢æ–‡æ¡£", themes: "é«˜çº§ç‰ˆä¸»é¢˜", themesDescr: "ä½¿ç”¨æˆ‘ä»¬å®˜æ–¹å¸‚åœºä¸­çš„é«˜çº§ä¸»é¢˜å°† Material-UI å‡çº§åˆ°æ–°çš„ä¸€å±‚ - æ‰€æœ‰è¿™äº›éƒ½å»ºç«‹åœ¨ Material-UI ä¹‹ä¸Šã€‚", themesButton: "æµè§ˆä¸»é¢˜", whosUsing: "æœ‰å“ªäº›äººä½¿ç”¨ Material-UIï¼Ÿ", joinThese: "è¯·å‚ä¸Žåˆ°è¿™äº›æˆ–è€…å…¶ä»–å¼ºå¤§çš„ç»„ç»‡ä¸­åŽ»ï¼", usingMui: "ä½ åœ¨ä½¿ç”¨ Material-UI å—ï¼Ÿ", letUsKnow: "è¯·å‘Šè¯‰æˆ‘ä»¬å§ï¼", footerCommunity: "ç¤¾åŒº", footerResources: "èµ„æº", homeFooterRelease: "å½“å‰ {{versionNumber}}. æ ¹æ® {{license}} å‘å¸ƒã€‚", license: "MIT è®¸å¯è¯", likeMui: "å¸®åŠ©æˆ‘ä»¬ç»§ç»­è¿è¡Œ", adblock: "å¦‚æžœæ‚¨ä¸ä»‹æ„ä¸ŽæŠ€æœ¯ç›¸å…³çš„å¹¿å‘Šï¼Œå¹¶ä¸”æ”¯æŒå¼€æºä»£ç ï¼Œè¯·åœ¨ä½ çš„ ad blocker ä¸­å°† Material-UI è®¾ç½®ä¸ºç™½åå•ã€‚", thanks: "æ„Ÿè°¢ï¼", editPage: "å¸®åŠ©æ”¹è¿›æ­¤é¡µé¢çš„ç¿»è¯‘", tableOfContents: "ç›®å½•", sourceCode: "æºä»£ç ", traffic: "æµé‡", newest: "æœ€æ–°çš„", stars: "GitHub ç‚¹èµžæ•°", visit: "è®¿é—®ç½‘ç«™", dashboardTitle: "ç®¡ç†é¢æ¿", dashboardDescr: "è¿™æ˜¯ä¸€ä¸ªå«æœ‰ä»»åŠ¡æ å’Œè¿·ä½ å˜ä½“æŠ½å±‰çš„æœ€å°åŒ–ç®¡ç†é¢æ¿ã€‚è¿™ä¸ªå›¾è¡¨ç”± Recharts æä¾›ï¼Œä½†æ˜¯å¾ˆå®¹æ˜“æ›¿æ¢æˆå…¶ä»–çš„ã€‚", signInTitle: "ç™»å½•", signInDescr: "è¿™æ˜¯ä¸€ä¸ªç®€å•çš„ç™»å½•é¡µé¢ã€‚", signInSideTitle: "ä¾§è¾¹é¡µç™»å½•", signInSideDescr: "ä¸€ä¸ªç®€å•çš„ä¾§è¾¹ç™»å½•é¡µé¢", signUpTitle: "æ³¨å†Œ", signUpDescr: "ä¸€ä¸ªç®€å•çš„æ³¨å†Œé¡µé¢", blogTitle: "åšå®¢", blogDescr: "è¿™æ˜¯ä¸€ä¸ªç²¾è‡´å¤æ‚çš„åšå®¢é¡µé¢å¸ƒå±€ã€‚è¿™ä¸ª Markdown ç”± markdown-to-jsx æä¾›æ”¯æŒï¼Œä½†æ˜¯è¿™ä¹Ÿä¸éš¾æ›¿æ¢ã€‚", checkoutTitle: "æ”¯ä»˜", checkoutDescr: "è¿™æ˜¯ä¸€ä¸ªé€æ­¥å»ºç«‹çš„æ”¯ä»˜é¡µé¢å¸ƒå±€ã€‚æ ¹æ®æ‚¨çš„éœ€æ±‚è°ƒæ•´æ­¥éª¤æ•°ï¼Œæˆ–é€‰å–éƒ¨åˆ†æ­¥éª¤ã€‚", albumTitle: "ç›¸å†Œ", albumDescr: "ä¸€ä¸ªåŒ…å«äº†ä¸€ä¸ªheroçš„å•å…ƒå’Œé¡µè„šçš„å“åº”å¼ç›¸å†Œ/å±•è§ˆé¡µé¢å¸ƒå±€", pricingTitle: "å®šä»·", pricingDescr: "ä½¿ç”¨æ­¤é¡µé¢å¸ƒå±€æ¥å¿«é€Ÿä¸ºæ‚¨çš„æ½œåœ¨å®¢æˆ·å»ºç«‹æœ‰æ•ˆçš„ä»·æ ¼è¡¨å•ã€‚", stickyFooterTitle: "Sticky footer", stickyFooterDescr: "å½“é¡µé¢å†…å®¹æ¯”è¾ƒç®€çŸ­çš„æ—¶å€™ï¼Œåœ¨å¯è§†åŒºåŸŸçš„åº•ç«¯é™„åŠ ä¸Šä¸€ä¸ªé¡µè„šã€‚", expandAll: "å±•å¼€å…¨éƒ¨", showSource: "æŸ¥çœ‹æºä»£ç ", hideSource: "éšè—æºä»£ç ", showFullSource: "æ˜¾ç¤ºå…¨éƒ¨æºä»£ç ", hideFullSource: "éšè—å…¨éƒ¨æºä»£ç ", viewGitHub: "åœ¨ GitHub ä¸­æŸ¥çœ‹æºä»£ç ", codesandbox: "åœ¨ CodeSandbox ä¸­ç¼–è¾‘", seeMore: "æŸ¥çœ‹æ›´å¤š", copySource: "å¤åˆ¶æºä»£ç ", copySourceLinkJS: "è¯·å°†é“¾æŽ¥å¤åˆ¶åˆ° JavaScript æºä»£ç ", copySourceLinkTS: "è¯·å°†é“¾æŽ¥å¤åˆ¶åˆ° TypeScript æºä»£ç ", stackblitz: "åœ¨ StackBlitz ä¸­ç¼–è¾‘ï¼ˆä»…é™JSï¼‰", headTitle: "Material-UIï¼šå½“ä¸‹æµè¡Œçš„ React UI æ¡†æž¶", emojiLove: "å–œçˆ±", emoojiWarning: "è­¦å‘Š", mainNavigation: "ä¸»å¯¼èˆª", skipToContent: "è·³è½¬åˆ°å†…å®¹", openDrawer: "æ‰“å¼€ä¸»å¯¼èˆªæ ", changeLanguage: "æ›´æ”¹è¯­è¨€", pageTOC: "ç›®å½•å†…å®¹çš„é¡µé¢", showJSSource: "æ˜¾ç¤º JavaScript æºä»£ç ", showTSSource: "æ˜¾ç¤º TypeScript æºä»£ç ", close: "å…³é—­", useHighDensity: "é€šè¿‡ props æ¥å®žçŽ°æ›´é«˜çš„å¯†åº¦å€¼", spacingUnit: "é—´éš”å•å…ƒ", resetDensity: "é‡ç½®å¯†åº¦", increaseSpacing: "å¢žåŠ é—´è·", decreaseSpacing: "å‡å°‘é—´è·", getProfessionalSupport: "å¾—åˆ°ä¸“ä¸šçš„æ”¯æŒ", diamondSponsors: "é’»çŸ³èµžåŠ©å•†", pages: { "/getting-started": "å…¥é—¨æ•™ç¨‹", "/getting-started/installation": "å®‰è£…", "/getting-started/usage": "ä½¿ç”¨", "/getting-started/example-projects": "èŒƒä¾‹é¡¹ç›®", "/getting-started/templates": "æ¨¡æ¿", "/getting-started/learn": "å­¦ä¹ ", "/getting-started/faq": "å¸¸è§é—®é¢˜è§£ç­”", "/getting-started/supported-components": "æ”¯æŒçš„ç»„ä»¶", "/getting-started/supported-platforms": "æ”¯æŒçš„å¹³å°", "/getting-started/support": "æ”¯æŒ", "/components": "Componentsï¼ˆç»„ä»¶ï¼‰", "/components/about-the-lab": "å…³äºŽ Lab", "/components/click-away-listener": "Click Away Listenerï¼ˆä»–å¤„ç‚¹å‡»ç›‘å¬å™¨ï¼‰", "/component/about": "å…³äºŽ Lab", "/components/app-bar": "App Barï¼ˆåº”ç”¨æ ï¼‰", "/components/autocomplete": "Autocompleteï¼ˆè‡ªåŠ¨è¡¥å…¨ï¼‰", "/components/avatars": "Avatarsï¼ˆå¤´åƒï¼‰", "/components/badges": "Badgesï¼ˆå¾½ç« ï¼‰", "/components/basic-inputs": "åŸºæœ¬çš„è¾“å…¥", "/components/bottom-navigation": "Bottom Navigationï¼ˆåº•éƒ¨å¯¼èˆªæ ï¼‰", "/components/box": "Boxï¼ˆåˆ†ç»„ï¼‰", "/components/breadcrumbs": "Breadcrumbsï¼ˆé¢åŒ…å±‘å¯¼èˆªï¼‰", "/components/buttons": "Buttonsï¼ˆæŒ‰é’®ï¼‰", "/components/cards": "Cardsï¼ˆå¡ç‰‡ï¼‰", "/components/checkboxes": "Checkboxesï¼ˆå¤é€‰æ¡†ï¼‰", "/components/chips": "Chipsï¼ˆçº¸ç‰‡ç»„ä»¶ï¼‰", "/components/container": "Containerï¼ˆå®¹å™¨ï¼‰", "/components/content": "Contentï¼ˆå†…å®¹ï¼‰", "/components/css-baseline": "CSS Baselineï¼ˆCSS åŸºçº¿ï¼‰", "/components/data-display": "æ•°æ®å±•ç¤º", "/components/dialogs": "Dialogsï¼ˆå¯¹è¯æ¡†ç»„ä»¶ï¼‰", "/components/dividers": "Dividersï¼ˆåˆ†éš”çº¿ï¼‰", "/components/drawers": "Drawersï¼ˆæŠ½å±‰ï¼‰", "/components/expansion-panels": "Expansion Panelsï¼ˆæ‰©å±•é¢æ¿ï¼‰", "/components/feedback": "ç”¨æˆ·åé¦ˆ", "/components/grid": "æ …æ ¼ï¼ˆGridï¼‰", "/components/hidden": "Hiddenï¼ˆéšè—ï¼‰", "/components/grid-list": "Grid Listï¼ˆç½‘æ ¼åˆ—è¡¨ï¼‰", "/components/icons": "Iconsï¼ˆå›¾æ ‡ï¼‰", "/components/inputs": "Inputsï¼ˆè¾“å…¥ï¼‰", "/components/lab": "Labï¼ˆå®žéªŒå®¤ï¼‰", "/components/layout": "Layoutï¼ˆå¸ƒå±€ï¼‰", "/components/links": "Linksï¼ˆé“¾æŽ¥ï¼‰", "/components/lists": "Listsï¼ˆåˆ—è¡¨ï¼‰", "/components/menus": "Menusï¼ˆèœå•ï¼‰", "/components/modal": "Modalï¼ˆæ¨¡æ€æ¡†ï¼‰", "/components/navigation": "Navigationï¼ˆå¯¼èˆªæ ï¼‰", "/components/no-ssr": "æ²¡æœ‰ SSR", "/components/other": "å…¶ä»–", "/components/paper": "Paperï¼ˆçº¸å¼ ï¼‰", "/components/pickers": "æ—¥æœŸ/æ—¶é—´", "/components/popover": "Popoverï¼ˆå¼¹å‡ºæ¡†ï¼‰", "/components/popper": "Popperï¼ˆå¼¹å‡ºæç¤ºå·¥å…·ï¼‰", "/components/portal": "Portalï¼ˆä¼ é€é—¨ï¼‰", "/components/progress": "Progressï¼ˆè¿›åº¦æ¡ï¼‰", "/components/progress-validation": "ç”¨æˆ·åé¦ˆ", "/components/radio-buttons": "Radio buttonsï¼ˆå•é€‰æŒ‰é’®ï¼‰", "/components/selection-controls": "Selection Controlsï¼ˆé€‰é¡¹æŽ§ä»¶ï¼‰", "/components/selects": "Selectsï¼ˆé€‰æ‹©å™¨ï¼‰", "/components/slider": "Sliderï¼ˆæ»‘å—ï¼‰", "/components/snackbars": "Snackbarï¼ˆæ¶ˆæ¯æ¡ï¼‰", "/components/speed-dial": "Speed Dialï¼ˆå¿«é€Ÿæ‹¨å·ï¼‰", "/components/steppers": "Steppersï¼ˆæ­¥éª¤æ¡ï¼‰", "/components/surfaces": "è¡¨é¢", "/components/switches": "Switchesï¼ˆå¼€å…³æŽ§ä»¶ï¼‰", "/components/tables": "Tableï¼ˆè¡¨æ ¼ï¼‰", "/components/tabs": "Tabsï¼ˆé€‰é¡¹å¡ï¼‰", "/components/text-fields": "Text Fieldsï¼ˆæ–‡æœ¬è¾“å…¥æ¡†ï¼‰", "/components/toggle-button": "Toggle Buttonï¼ˆåˆ‡æ¢æŒ‰é’®ï¼‰", "/components/tooltips": "Tooltipsï¼ˆæ–‡å­—æç¤ºï¼‰", "/components/transfer-list": "Transfer Listï¼ˆä¼ é€’åˆ—è¡¨ï¼‰", "/components/transitions": "Transitionsï¼ˆè¿‡æ¸¡åŠ¨ç”»ï¼‰", "/components/typography": "Typographyï¼ˆæ–‡å­—é“¸æŽ’ï¼‰", "/components/use-media-query": "useMediaQuery", "/components/utils": "Utilsï¼ˆå·¥å…·åŒ…ï¼‰", "/css-in-js": "æ ·å¼", "/css-in-js/basics": "åŸºç¡€", "/css-in-js/advanced": "è¿›é˜¶", "/system": "Systemï¼ˆç³»ç»Ÿï¼‰", "/system/basics": "åŸºç¡€", "/system/borders": "Bordersï¼ˆè¾¹æ¡†å±žæ€§ï¼‰", "/system/display": "Displayï¼ˆæ˜¾ç¤ºå±žæ€§ï¼‰", "/system/flexbox": "Flexbox", "/system/palette": "Paletteï¼ˆè°ƒè‰²ï¼‰", "/system/positions": "Positionsï¼ˆä½ç½®ï¼‰", "/system/shadows": "Shadowsï¼ˆé˜´å½±å±žæ€§ï¼‰", "/system/sizing": "Sizingï¼ˆå¤§å°ï¼‰", "/system/spacing": "Spacingï¼ˆé—´è·ï¼‰", "/system/typography": "Typographyï¼ˆæ–‡å­—é“¸æŽ’ï¼‰", "/customization": "ä¸ªæ€§åŒ–", "/customization/theming": "æ¦‚è§ˆ", "/customization/breakpoints": "Breakpointsï¼ˆæ–­ç‚¹ï¼‰", "/customization/color": "Colorï¼ˆé¢œè‰²ï¼‰", "/customization/themes": "æ¦‚è§ˆ", "/customization/palette": "Paletteï¼ˆè°ƒè‰²ï¼‰", "/customization/type": "ç±»åž‹ï¼ˆæµ…è‰²/æ·±è‰²ä¸»é¢˜ï¼‰", "/customization/typography": "Typographyï¼ˆæ–‡å­—é“¸æŽ’ï¼‰", "/customization/spacing": "Spacingï¼ˆé—´è·ï¼‰", "/customization/z-index": "z-index", "/customization/globals": "å…¨å±€å˜é‡", "/customization/components": "Componentsï¼ˆç»„ä»¶ï¼‰", "/customization/default-theme": "é»˜è®¤ä¸»é¢˜", "/guides": "æŒ‡å—", "/guides/api": "API è®¾è®¡æ–¹æ³•", "/guides/typescript": "TypeScript", "/guides/interoperability": "æ ·å¼åº“çš„äº’é€šæ€§", "/guides/minimizing-bundle-size": "æœ€å°åŒ–æ‰“åŒ…æ–‡ä»¶å¤§å°", "/guides/composition": "Compositionï¼ˆç»„åˆï¼‰", "/guides/responsive-ui": "å“åº”å¼ UI", "/guides/server-rendering": "æœåŠ¡å™¨ç«¯æ¸²æŸ“", "/guides/migration-v3": "ä»Žv3ç‰ˆæœ¬è¿ç§»", "/guides/migration-v0x": "ä»Žv0.xç‰ˆæœ¬è¿ç§»", "/guides/testing": "æµ‹è¯•", "/guides/flow": "Flow", "/guides/right-to-left": "æºæ–‡è¯­è¨€ä»Žå³è‡³å·¦è¯»", "/discover-more": "å‘çŽ°æ›´å¤š", "/discover-more/showcase": "å±•ç¤º", "/discover-more/related-projects": "ç›¸å…³çš„é¡¹ç›®", "/discover-more/roadmap": "äº§å“è·¯çº¿å›¾", "/discover-more/backers": "èµžåŠ©å•†å’Œæ”¯æŒè€…", "/discover-more/vision": "æ„¿æ™¯", "/discover-more/team": "å›¢é˜Ÿ", "/discover-more/community": "ç¤¾åŒº", "/discover-more/changelog": "æ›´æ–°æ—¥å¿—", "/discover-more/governance": "ç›‘ç®¡", "/discover-more/languages": "è¯­è¨€", "/versions": "ç‰ˆæœ¬", "/styles": "Stylesï¼ˆæ ·å¼è¡¨å•ï¼‰", "/styles/basics": "åŸºç¡€", "/styles/advanced": "é«˜çº§", "https://themes.material-ui.com/": "é«˜çº§ç‰ˆä¸»é¢˜", "/components/material-icons": "Material Icons", "/components/textarea-autosize": "Textareaè‡ªåŠ¨è°ƒæ•´å¤§å°", "/components/rating": "Rating", "/components/skeleton": "Skeleton", "/components/tree-view": "æ ‘è§†å›¾", "/customization/density": "é—´è·(density)" } } },
        sQhH: function(e) { e.exports = { homeQuickWord: "ÐÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐ»Ð¾Ð² Ð¾Ñ‚ Ð½Ð°ÑˆÐ¸Ñ… ÑÐ¿Ð¾Ð½ÑÐ¾Ñ€Ð¾Ð²:", helpToTranslate: "ÐŸÐ¾Ð¼Ð¾Ð³Ð¸Ñ‚Ðµ Ð½Ð°Ð¼ Ñ Ð¿ÐµÑ€ÐµÐ²Ð¾Ð´Ð¾Ð¼", editWebsiteColors: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ñ†Ð²ÐµÑ‚Ð¾Ð²ÑƒÑŽ Ð³Ð°Ð¼Ð¼Ñƒ ÑÐ°Ð¹Ñ‚Ð°", toggleTheme: "Toggle light/dark theme", toggleRTL: "Toggle right-to-left/left-to-right", github: "GitHub Ñ€ÐµÐ¿Ð¾Ð·Ð¸Ñ‚Ð¾Ñ€Ð¸Ð¹", strapline: "React ÐºÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚Ñ‹ Ð´Ð»Ñ Ð±Ñ‹ÑÑ‚Ñ€Ð¾Ð¹ Ð¸ Ð»ÐµÐ³ÐºÐ¾Ð¹ Ð²ÐµÐ±-Ñ€Ð°Ð·Ñ€Ð°Ð±Ð¾Ñ‚ÐºÐ¸. Ð¡Ð¾Ð·Ð´Ð°Ð¹Ñ‚Ðµ ÑÐ²Ð¾Ð¹ ÑÐ¾Ð±ÑÑ‚Ð²ÐµÐ½Ð½Ñ‹Ð¹ Ð´Ð¸Ð·Ð°Ð¹Ð½ Ð¸Ð»Ð¸ Ð½Ð°Ñ‡Ð½Ð¸Ñ‚Ðµ Ñ Material Design.", getStarted: "ÐÐ°Ñ‡Ð°Ñ‚ÑŒ", installation: "Ð˜Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ñ Ð¿Ð¾ ÑƒÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐµ", installDescr: "Ð£ÑÑ‚Ð°Ð½Ð¾Ð²Ð¸Ñ‚ÑŒ Ð¸ÑÑ…Ð¾Ð´Ð½Ñ‹Ðµ Ñ„Ð°Ð¹Ð»Ñ‹ Material-UI Ñ‡ÐµÑ€ÐµÐ· npm. ÐœÑ‹ Ð¿Ð¾Ð·Ð°Ð±Ð¾Ñ‚Ð¸Ð»Ð¸ÑÑŒ Ð¾ Ð²ÐºÐ»ÑŽÑ‡ÐµÐ½Ð¸Ðµ Ð½ÐµÐ¾Ð±Ñ…Ð¾Ð´Ð¸Ð¼Ñ‹Ñ… CSS.", cdn: "Ð¸Ð»Ð¸ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐ¹Ñ‚Ðµ CDN.", loadFont: "Ð—Ð°Ð³Ñ€ÑƒÐ·Ð¸Ñ‚ÑŒ ÑˆÑ€Ð¸Ñ„Ñ‚ Roboto Ð¿Ð¾ ÑƒÐ¼Ð¾Ð»Ñ‡Ð°Ð½Ð¸ÑŽ.", installButton: "Ð§Ð¸Ñ‚Ð°Ñ‚ÑŒ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð°Ñ†Ð¸ÑŽ Ð¿Ð¾ ÑƒÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐµ", usage: "Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ðµ", usageDescr: "ÐšÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚Ñ‹ Material-UI Ñ€Ð°Ð±Ð¾Ñ‚Ð°ÑŽÑ‚ Ð±ÐµÐ· ÐºÐ°ÐºÐ¾Ð¹-Ð»Ð¸Ð±Ð¾ Ð´Ð¾Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ð¾Ð¹ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ¸ Ð¸ Ð½Ðµ Ð·Ð°Ð³Ñ€ÑÐ·Ð½ÑÑŽÑ‚ Ð³Ð»Ð¾Ð±Ð°Ð»ÑŒÐ½ÑƒÑŽ Ð¾Ð±Ð»Ð°ÑÑ‚ÑŒ.", usageButton: "Ð§Ð¸Ñ‚Ð°Ñ‚ÑŒ Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð°Ñ†Ð¸ÑŽ", themes: "ÐŸÑ€ÐµÐ¼Ð¸ÑƒÐ¼ Ñ‚ÐµÐ¼Ñ‹", themesDescr: "ÐŸÐ¾Ð´Ð½Ð¸Ð¼Ð¸Ñ‚Ðµ Material-UI Ð½Ð° ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹ ÑƒÑ€Ð¾Ð²ÐµÐ½ÑŒ Ñ Ð¿Ñ€ÐµÐ¼Ð¸ÑƒÐ¼ Ñ‚ÐµÐ¼Ð°Ð¼Ð¸ Ð¸Ð· Ð½Ð°ÑˆÐµÐ³Ð¾ Ð¾Ñ„Ð¸Ñ†Ð¸Ð°Ð»ÑŒÐ½Ð¾Ð³Ð¾ Ð¼Ð°Ð³Ð°Ð·Ð¸Ð½Ð° - Ð²ÑÑ‘ Ð¿Ð¾ÑÑ‚Ñ€Ð¾ÐµÐ½Ð¾ Ñ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸ÐµÐ¼ Material-UI.", themesButton: "Ð¡Ð¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ Ñ‚ÐµÐ¼Ñ‹", whosUsing: "ÐšÑ‚Ð¾ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚ Material-UI?", joinThese: "ÐŸÑ€Ð¸ÑÐ¾ÐµÐ´Ð¸Ð½ÑÐ¹Ñ‚ÐµÑÑŒ Ðº ÑÑ‚Ð¸Ð¼ Ð¸ Ð´Ñ€ÑƒÐ³Ð¸Ð¼ Ð·Ð°Ð¼ÐµÑ‡Ð°Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ð¼ Ð¾Ñ€Ð³Ð°Ð½Ð¸Ð·Ð°Ñ†Ð¸ÑÐ¼!", usingMui: "Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·ÑƒÐµÑ‚Ðµ Ð»Ð¸ Ð²Ñ‹ Material-UI?", letUsKnow: "Ð”Ð°Ð¹Ñ‚Ðµ Ð½Ð°Ð¼ Ð·Ð½Ð°Ñ‚ÑŒ!", footerCommunity: "Ð¡Ð¾Ð¾Ð±Ñ‰ÐµÑÑ‚Ð²Ð¾", footerResources: "Resources", homeFooterRelease: "Ð¢ÐµÐºÑƒÑ‰Ð°Ñ {{versionNumber}}. Ð’Ñ‹Ð¿ÑƒÑ‰ÐµÐ½Ð¾ Ð¿Ð¾Ð´ {{license}}.", license: "Ð›Ð¸Ñ†ÐµÐ½Ð·Ð¸Ñ MIT", likeMui: "ÐÑ€Ð°Ð²Ð¸Ñ‚ÑÑ Material-UI?", adblock: "Ð•ÑÐ»Ð¸ Ð²Ñ‹ Ð½Ðµ Ð¿Ñ€Ð¾Ñ‚Ð¸Ð² Ñ€ÐµÐºÐ»Ð°Ð¼Ñ‹, ÑÐ²ÑÐ·Ð°Ð½Ð½Ð¾Ð¹ Ñ Ñ‚ÐµÑ…Ð½Ð¾Ð»Ð¾Ð³Ð¸ÑÐ¼Ð¸, Ð¸ Ñ…Ð¾Ñ‚Ð¸Ñ‚Ðµ Ð¿Ð¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°Ñ‚ÑŒ Open Source, Ð´Ð¾Ð±Ð°Ð²ÑŒÑ‚Ðµ Material-UI Ð² Ð±ÐµÐ»Ñ‹Ð¹ ÑÐ¿Ð¸ÑÐ¾Ðº ÑÐ²Ð¾ÐµÐ³Ð¾ Ð±Ð»Ð¾ÐºÐ¸Ñ€Ð°Ñ‚Ð¾Ñ€Ð° Ñ€ÐµÐºÐ»Ð°Ð¼Ñ‹.", thanks: "Ð¡Ð¿Ð°ÑÐ¸Ð±Ð¾!", editPage: "ÐŸÐ¾Ð¼Ð¾Ð³Ð¸Ñ‚Ðµ Ð¿ÐµÑ€ÐµÐ²ÐµÑÑ‚Ð¸ ÑÑ‚Ñƒ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñƒ", tableOfContents: "Ð¡Ð¾Ð´ÐµÑ€Ð¶Ð°Ð½Ð¸Ðµ", sourceCode: "Ð˜ÑÑ…Ð¾Ð´Ð½Ñ‹Ð¹ ÐºÐ¾Ð´", traffic: "Ð¢Ñ€Ð°Ñ„Ð¸Ðº", newest: "ÐŸÐ¾ Ð½Ð¾Ð²Ð¸Ð·Ð½Ðµ", stars: "Ð—Ð²ÐµÐ·Ð´Ñ‹ Ð½Ð° GitHub", visit: "ÐŸÐ¾ÑÐµÑ‚Ð¸Ñ‚ÑŒ Ð²ÐµÐ±-ÑÐ°Ð¹Ñ‚", dashboardTitle: "ÐŸÐ°Ð½ÐµÐ»ÑŒ ÑƒÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ", dashboardDescr: "ÐœÐ¸Ð½Ð¸Ð¼Ð°Ð»Ð¸ÑÑ‚Ð¸Ñ‡Ð½Ð°Ñ Ð¿Ð°Ð½ÐµÐ»ÑŒ ÑƒÐ¿Ñ€Ð°Ð²Ð»ÐµÐ½Ð¸Ñ Ñ Ð¿Ð°Ð½ÐµÐ»ÑŒÑŽ Ð·Ð°Ð´Ð°Ñ‡ Ð¸ Ð½ÐµÐ±Ð¾Ð»ÑŒÑˆÐ¸Ð¼ Ð³Ñ€Ð°Ñ„Ð¸ÐºÐ¾Ð¼. Ð“Ñ€Ð°Ñ„Ð¸Ðº Ð»ÑŽÐ±ÐµÐ·Ð½Ð¾ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÐµÐ½ Recharts, Ð½Ð¾ Ð»ÐµÐ³ÐºÐ¾ Ð¼Ð¾Ð³ÑƒÑ‚ Ð±Ñ‹Ñ‚ÑŒ Ð·Ð°Ð¼ÐµÐ½ÐµÐ½Ñ‹ Ð½Ð° Ð´Ñ€ÑƒÐ³Ð¸Ðµ.", signInTitle: "ÐÐ²Ñ‚Ð¾Ñ€Ð¸Ð·Ð°Ñ†Ð¸Ñ", signInDescr: "ÐŸÑ€Ð¾ÑÑ‚Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° Ð²Ñ…Ð¾Ð´Ð°.", signInSideTitle: "Ð¡Ñ‚Ð¾Ñ€Ð¾Ð½Ð° Ð²Ñ…Ð¾Ð´Ð°", signInSideDescr: "ÐŸÑ€Ð¾ÑÑ‚Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° Ð²Ñ…Ð¾Ð´Ð° Ð² ÑÐ¸ÑÑ‚ÐµÐ¼Ñƒ.", signUpTitle: "Ð—Ð°Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð¸Ñ€ÑƒÐ¹Ñ‚ÐµÑÑŒ", signUpDescr: "ÐŸÑ€Ð¾ÑÑ‚Ð°Ñ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° Ñ€ÐµÐ³Ð¸ÑÑ‚Ñ€Ð°Ñ†Ð¸Ð¸.", blogTitle: "Ð‘Ð»Ð¾Ð³", blogDescr: "Ð¡Ð»Ð¾Ð¶Ð½Ñ‹Ð¹ Ð¼Ð°ÐºÐµÑ‚ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹ Ð±Ð»Ð¾Ð³Ð°. ÐŸÐ¾Ð´Ð´ÐµÑ€Ð¶ÐºÐ° Markdown Ð»ÑŽÐ±ÐµÐ·Ð½Ð¾ Ð¿Ñ€ÐµÐ´Ð¾ÑÑ‚Ð°Ð²Ð»ÐµÐ½Ð° markdown-to-jsx, Ð½Ð¾ ÐµÐ³Ð¾ Ð»ÐµÐ³ÐºÐ¾ Ð·Ð°Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ Ð½Ð° Ð´Ñ€ÑƒÐ³Ð¾Ð¹.", checkoutTitle: "Ð¡Ñ‚Ñ€Ð°Ð½Ð¸Ñ†Ð° Ð¾Ñ„Ð¾Ñ€Ð¼Ð»ÐµÐ½Ð¸Ñ Ð·Ð°ÐºÐ°Ð·Ð°", checkoutDescr: "ÐœÐ°ÐºÐµÑ‚ Ð¿Ð¾ÑˆÐ°Ð³Ð¾Ð²Ð¾Ð¹ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹ Ð¾Ñ„Ð¾Ñ€Ð¼Ð»ÐµÐ½Ð¸Ñ Ð·Ð°ÐºÐ°Ð·Ð°. Ð˜Ð·Ð¼ÐµÐ½Ð¸Ñ‚Ðµ ÐºÐ¾Ð»Ð¸Ñ‡ÐµÑÑ‚Ð²Ð¾ ÑˆÐ°Ð³Ð¾Ð² Ð¿Ð¾ ÑÐ²Ð¾ÐµÐ¼Ñƒ ÑƒÑÐ¼Ð¾Ñ‚Ñ€ÐµÐ½Ð¸ÑŽ Ð¸Ð»Ð¸ ÑÐ´ÐµÐ»Ð°Ð¹Ñ‚Ðµ Ð¸Ñ… Ð¾Ð¿Ñ†Ð¸Ð¾Ð½Ð°Ð»ÑŒÐ½Ñ‹Ð¼Ð¸.", albumTitle: "ÐÐ»ÑŒÐ±Ð¾Ð¼", albumDescr: "ÐÐ´Ð°Ð¿Ñ‚Ð¸Ð²Ð½Ñ‹Ð¹ Ð¼Ð°ÐºÐµÑ‚ ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹ Ð°Ð»ÑŒÐ±Ð¾Ð¼Ð°/Ð³Ð°Ð»ÐµÑ€ÐµÐ¸ Ñ Ð²Ñ‹Ð´ÐµÐ»ÐµÐ½Ð½Ñ‹Ð¼ Ð±Ð»Ð¾ÐºÐ¾Ð¼ (hero unit) Ð¸ Ð¿Ð¾Ð´Ð²Ð°Ð»Ð¾Ð¼ (footer).", pricingTitle: "Ð¦ÐµÐ½Ñ‹", pricingDescr: "Ð‘Ñ‹ÑÑ‚Ñ€Ð¾ ÑÐ¾Ð·Ð´Ð°Ð¹Ñ‚Ðµ ÑÑ„Ñ„ÐµÐºÑ‚Ð¸Ð²Ð½ÑƒÑŽ Ñ‚Ð°Ð±Ð»Ð¸Ñ†Ñƒ Ñ†ÐµÐ½ Ð´Ð»Ñ Ð²Ð°ÑˆÐ¸Ñ… Ð¿Ð¾Ñ‚ÐµÐ½Ñ†Ð¸Ð°Ð»ÑŒÐ½Ñ‹Ñ… Ð¿Ð¾ÐºÑƒÐ¿Ð°Ñ‚ÐµÐ»ÐµÐ¹ Ñ Ð¸ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸ÐµÐ¼ ÑÑ‚Ð¾Ð³Ð¾ Ð¼Ð°ÐºÐµÑ‚Ð° ÑÑ‚Ñ€Ð°Ð½Ð¸Ñ†Ñ‹.", stickyFooterTitle: "Ð›Ð¸Ð¿ÐºÐ¸Ð¹ Ñ„ÑƒÑ‚ÐµÑ€", stickyFooterDescr: "ÐšÑ€ÐµÐ¿Ð¸Ñ‚Ðµ Ñ„ÑƒÑ‚ÐµÑ€ Ðº Ð½Ð¸Ð¶Ð½ÐµÐ¹ Ñ‡Ð°ÑÑ‚Ð¸ Ð¾ÐºÐ½Ð°, ÐºÐ¾Ð³Ð´Ð° Ð²Ñ‹ÑÐ¾Ñ‚Ð° ÑÐ¾Ð´ÐµÑ€Ð¶Ð¸Ð¼Ð¾Ð³Ð¾ Ð½ÐµÐ±Ð¾Ð»ÑŒÑˆÐ°Ñ.", expandAll: "Ð Ð°Ð·Ð²ÐµÑ€Ð½ÑƒÑ‚ÑŒ Ð²ÑÐµ", showSource: "ÐŸÐ¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ Ð¸ÑÑ…Ð¾Ð´Ð½Ð¸Ðº", hideSource: "Ð¡ÐºÑ€Ñ‹Ñ‚ÑŒ Ð¸ÑÑ…Ð¾Ð´Ð½Ð¸Ðº", showFullSource: "Show the full source", hideFullSource: "Hide the full source", viewGitHub: "ÐŸÐ¾ÑÐ¼Ð¾Ñ‚Ñ€ÐµÑ‚ÑŒ Ð¸ÑÑ…Ð¾Ð´Ð½Ð¸Ðº Ð½Ð° GitHub", codesandbox: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð² CodeSandbox", seeMore: "Ð•Ñ‰Ñ‘", copySource: "ÐšÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð¸ÑÑ…Ð¾Ð´Ð½Ð¸Ðº", copySourceLinkJS: "Ð¡ÐºÐ¾Ð¿Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ ÑÑÑ‹Ð»ÐºÑƒ Ð½Ð° Ð¸ÑÑ…Ð¾Ð´Ð½Ñ‹Ð¹ ÐºÐ¾Ð´ JavaScript", copySourceLinkTS: "Copy link to TypeScript source", stackblitz: "Ð ÐµÐ´Ð°ÐºÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ñ‚ÑŒ Ð² StackBlitz (Ñ‚Ð¾Ð»ÑŒÐºÐ¾ JS)", headTitle: "Material-UI: A popular React UI framework", emojiLove: "Ð›ÑŽÐ±Ð¾Ð²ÑŒ", emoojiWarning: "Warning", mainNavigation: "Main navigation", skipToContent: "ÐŸÐµÑ€ÐµÐ¹Ñ‚Ð¸ Ðº ÐºÐ¾Ð½Ñ‚ÐµÐ½Ñ‚Ñƒ", openDrawer: "Open main navigation", changeLanguage: "Ð¡Ð¼ÐµÐ½Ð¸Ñ‚ÑŒ ÑÐ·Ñ‹Ðº", pageTOC: "Page table of contents", showJSSource: "Show JavaScript source", showTSSource: "Show TypeScript source", close: "Close", useHighDensity: "Apply higher density via props", spacingUnit: "Spacing unit", resetDensity: "Reset density", increaseSpacing: "increase spacing", decreaseSpacing: "decrease spacing", getProfessionalSupport: "Get Professional Support", diamondSponsors: "Diamond Sponsors", pages: { "/getting-started": "ÐŸÑ€Ð¸ÑÑ‚ÑƒÐ¿Ð°Ñ Ðº Ñ€Ð°Ð±Ð¾Ñ‚Ðµ", "/getting-started/installation": "Ð˜Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ñ Ð¿Ð¾ ÑƒÑÑ‚Ð°Ð½Ð¾Ð²ÐºÐµ", "/getting-started/usage": "Ð˜ÑÐ¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ð½Ð¸Ðµ", "/getting-started/example-projects": "ÐŸÑ€Ð¸Ð¼ÐµÑ€Ñ‹ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ð¾Ð²", "/getting-started/templates": "Templates", "/getting-started/learn": "Learn", "/getting-started/faq": "Ð§Ð°ÑÑ‚Ð¾ Ð·Ð°Ð´Ð°Ð²Ð°ÐµÐ¼Ñ‹Ðµ Ð²Ð¾Ð¿Ñ€Ð¾ÑÑ‹ (FAQ)", "/getting-started/supported-components": "ÐŸÐ¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÐ¼Ñ‹Ðµ ÐºÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚Ñ‹", "/getting-started/supported-platforms": "ÐŸÐ¾Ð´Ð´ÐµÑ€Ð¶Ð¸Ð²Ð°ÐµÐ¼Ñ‹Ðµ Ð¿Ð»Ð°Ñ‚Ñ„Ð¾Ñ€Ð¼Ñ‹", "/getting-started/support": "Support", "/components": "ÐšÐ¾Ð¼Ð¿Ð¾Ð½ÐµÐ½Ñ‚Ñ‹", "/components/about-the-lab": "About The Lab", "/components/click-away-listener": "Click Away Listener", "/component/about": "About The Lab", "/components/app-bar": "ÐŸÐ°Ð½ÐµÐ»ÑŒ Ð½Ð°Ð²Ð¸Ð³Ð°Ñ†Ð¸Ð¸", "/components/autocomplete": "ÐÐ²Ñ‚Ð¾Ð´Ð¾Ð¿Ð¾Ð»Ð½ÐµÐ½Ð¸Ðµ", "/components/avatars": "ÐÐ²Ð°Ñ‚Ð°Ñ€Ñ‹", "/components/badges": "Ð—Ð½Ð°Ñ‡ÐºÐ¸", "/components/basic-inputs": "Basic Inputs", "/components/bottom-navigation": "Bottom Navigation (ÐÐ¸Ð¶Ð½ÑÑ Ð¿Ð°Ð½ÐµÐ»ÑŒ Ð½Ð°Ð²Ð¸Ð³Ð°Ñ†Ð¸Ð¸)", "/components/box": "Box", "/components/breadcrumbs": "Ð¥Ð»ÐµÐ±Ð½Ñ‹Ðµ ÐºÑ€Ð¾ÑˆÐºÐ¸", "/components/buttons": "ÐšÐ½Ð¾Ð¿ÐºÐ¸", "/components/cards": "ÐšÐ°Ñ€Ñ‚Ð¾Ñ‡ÐºÐ¸", "/components/checkboxes": "Ð§ÐµÐºÐ±Ð¾ÐºÑÑ‹", "/components/chips": "Ð¤Ð¸ÑˆÐºÐ¸", "/components/container": "Container", "/components/content": "Content", "/components/css-baseline": "CSS Baseline", "/components/data-display": "Data Display", "/components/dialogs": "Ð”Ð¸Ð°Ð»Ð¾Ð³Ð¸", "/components/dividers": "Ð Ð°Ð·Ð´ÐµÐ»Ð¸Ñ‚ÐµÐ»ÑŒ", "/components/drawers": "Drawers", "/components/expansion-panels": "Expansion panels (Ð Ð°ÑÐºÑ€Ñ‹Ð²Ð°ÑŽÑ‰Ð¸ÐµÑÑ Ð¿Ð°Ð½ÐµÐ»Ð¸)", "/components/feedback": "Feedback", "/components/grid": "Grid", "/components/hidden": "Hidden", "/components/grid-list": "Ð¡ÐµÑ‚ÑŒ Ð¸Ð·Ð¾Ð±Ñ€Ð°Ð¶ÐµÐ½Ð¸Ð¹", "/components/icons": "Ð˜ÐºÐ¾Ð½ÐºÐ¸", "/components/inputs": "ÐŸÐ¾Ð»Ñ Ð²Ð²Ð¾Ð´Ð°", "/components/lab": "Lab", "/components/layout": "Ð Ð°ÑÐ¿Ð¾Ð»Ð¾Ð¶ÐµÐ½Ð¸Ðµ", "/components/links": "Ð¡ÑÑ‹Ð»ÐºÐ¸", "/components/lists": "Ð¡Ð¿Ð¸ÑÐºÐ¸", "/components/menus": "ÐœÐµÐ½ÑŽ", "/components/modal": "Modal", "/components/navigation": "ÐÐ°Ð²Ð¸Ð³Ð°Ñ†Ð¸ÑŽ", "/components/no-ssr": "No SSR", "/components/other": "ÐŸÑ€Ð¾Ñ‡ÐµÐµ", "/components/paper": "Paper", "/components/pickers": "Ð”Ð°Ñ‚Ð° / Ð²Ñ€ÐµÐ¼Ñ", "/components/popover": "Popover", "/components/popper": "Popper", "/components/portal": "Portal", "/components/progress": "ÐŸÑ€Ð¾Ð³Ñ€ÐµÑÑ", "/components/progress-validation": "Feedback", "/components/radio-buttons": "Radio Buttons (Ñ€Ð°Ð´Ð¸Ð¾ÐºÐ½Ð¾Ð¿ÐºÐ¸)", "/components/selection-controls": "Ð­Ð»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ð²Ñ‹Ð±Ð¾Ñ€Ð°", "/components/selects": "Selects", "/components/slider": "Slider", "/components/snackbars": "Snackbars", "/components/speed-dial": "Speed Dial", "/components/steppers": "Steppers", "/components/surfaces": "Surfaces", "/components/switches": "Switch (Ð¿ÐµÑ€ÐµÐºÐ»ÑŽÑ‡Ð°Ñ‚ÐµÐ»Ð¸)", "/components/tables": "Ð¢Ð°Ð±Ð»Ð¸Ñ†Ñ‹", "/components/tabs": "Ð’ÐºÐ»Ð°Ð´ÐºÐ¸", "/components/text-fields": "Ð¢ÐµÐºÑÑ‚Ð¾Ð²Ñ‹Ðµ Ð¿Ð¾Ð»Ñ", "/components/toggle-button": "ÐšÐ½Ð¾Ð¿ÐºÐ°-Ð¿ÐµÑ€ÐµÐºÐ»ÑŽÑ‡Ð°Ñ‚ÐµÐ»ÑŒ", "/components/tooltips": "Ð’ÑÐ¿Ð»Ñ‹Ð²Ð°ÑŽÑ‰Ð¸Ðµ Ð¿Ð¾Ð´ÑÐºÐ°Ð·ÐºÐ¸", "/components/transfer-list": "Transfer List", "/components/transitions": "TransiÃ§Ãµes", "/components/typography": "ÐžÑ„Ð¾Ñ€Ð¼Ð»ÐµÐ½Ð¸Ðµ Ñ‚ÐµÐºÑÑ‚Ð°", "/components/use-media-query": "useMediaQuery", "/components/utils": "Ð£Ñ‚Ð¸Ð»Ð¸Ñ‚Ñ‹", "/css-in-js": "Styles", "/css-in-js/basics": "ÐžÑÐ½Ð¾Ð²Ñ‹", "/css-in-js/advanced": "Advanced", "/system": "System", "/system/basics": "ÐžÑÐ½Ð¾Ð²Ñ‹", "/system/borders": "Ð“Ñ€Ð°Ð½Ð¸Ñ†Ñ‹", "/system/display": "Display", "/system/flexbox": "Flexbox", "/system/palette": "ÐŸÐ°Ð»Ð¸Ñ‚Ñ€Ð°", "/system/positions": "Positions", "/system/shadows": "Ð¢ÐµÐ½Ð¸", "/system/sizing": "Sizing", "/system/spacing": "Ð˜Ð½Ñ‚ÐµÑ€Ð²Ð°Ð»", "/system/typography": "ÐžÑ„Ð¾Ñ€Ð¼Ð»ÐµÐ½Ð¸Ðµ Ñ‚ÐµÐºÑÑ‚Ð°", "/customization": "ÐšÐ°ÑÑ‚Ð¾Ð¼Ð¸Ð·Ð°Ñ†Ð¸Ñ", "/customization/theming": "Themes", "/customization/breakpoints": "Ð¢Ð¾Ñ‡ÐºÐ¸ Ð¾ÑÑ‚Ð°Ð½Ð¾Ð²Ð°", "/customization/color": "Ð¦Ð²ÐµÑ‚", "/customization/themes": "Themes", "/customization/palette": "ÐŸÐ°Ð»Ð¸Ñ‚Ñ€Ð°", "/customization/type": "Ð¢Ð¸Ð¿ (ÑÐ²ÐµÑ‚Ð»Ð°Ñ / Ñ‚ÐµÐ¼Ð½Ð°Ñ Ñ‚ÐµÐ¼Ð°)", "/customization/typography": "ÐžÑ„Ð¾Ñ€Ð¼Ð»ÐµÐ½Ð¸Ðµ Ñ‚ÐµÐºÑÑ‚Ð°", "/customization/spacing": "Ð˜Ð½Ñ‚ÐµÑ€Ð²Ð°Ð»", "/customization/z-index": "z-index", "/customization/globals": "Ð“Ð»Ð¾Ð±Ð°Ð»ÑŒÐ½Ð°Ñ Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ°", "/customization/components": "Overrides", "/customization/default-theme": "Ð¢ÐµÐ¼Ð° Ð¿Ð¾ ÑƒÐ¼Ð¾Ð»Ñ‡Ð°Ð½Ð¸ÑŽ", "/guides": "Guides", "/guides/api": "API Design Approach", "/guides/typescript": "TypeScript", "/guides/interoperability": "Style Library Interoperability", "/guides/minimizing-bundle-size": "Minimizing Bundle Size", "/guides/composition": "Composition", "/guides/responsive-ui": "ÐÐ´Ð°Ð¿Ñ‚Ð¸Ð²Ð½Ñ‹Ð¹ Ð¿Ð¾Ð»ÑŒÐ·Ð¾Ð²Ð°Ñ‚ÐµÐ»ÑŒÑÐºÐ¸Ð¹ Ð¸Ð½Ñ‚ÐµÑ€Ñ„ÐµÐ¹Ñ", "/guides/server-rendering": "Ð¡ÐµÑ€Ð²ÐµÑ€Ð½Ð°Ñ Ð¾Ñ‚Ñ€Ð¸ÑÐ¾Ð²ÐºÐ°", "/guides/migration-v3": "Migration From v3", "/guides/migration-v0x": "Migration From v0.x", "/guides/testing": "Ð¢ÐµÑÑ‚Ð¸Ñ€Ð¾Ð²Ð°Ð½Ð¸Ðµ", "/guides/flow": "Flow", "/guides/right-to-left": "Ð¡Ð¿Ñ€Ð°Ð²Ð° Ð½Ð°Ð»ÐµÐ²Ð¾", "/discover-more": "Discover More", "/discover-more/showcase": "Showcase", "/discover-more/related-projects": "Ð¡Ð²ÑÐ·Ð°Ð½Ð½Ñ‹Ðµ Ð¿Ñ€Ð¾ÐµÐºÑ‚Ñ‹", "/discover-more/roadmap": "ÐŸÐ»Ð°Ð½", "/discover-more/backers": "Sponsors & Backers", "/discover-more/vision": "Vision", "/discover-more/team": "ÐšÐ¾Ð¼Ð°Ð½Ð´Ð°", "/discover-more/community": "Ð¡Ð¾Ð¾Ð±Ñ‰ÐµÑÑ‚Ð²Ð¾", "/discover-more/changelog": "Ð–ÑƒÑ€Ð½Ð°Ð» Ð¸Ð·Ð¼ÐµÐ½ÐµÐ½Ð¸Ð¹", "/discover-more/governance": "Governance", "/discover-more/languages": "Ð¯Ð·Ñ‹ÐºÐ¸", "/versions": "Ð’ÐµÑ€ÑÐ¸Ð¸", "/styles": "Ð¡Ñ‚Ð¸Ð»Ð¸", "/styles/basics": "ÐžÑÐ½Ð¾Ð²Ñ‹", "/styles/advanced": "Ð”Ð¾Ð¿Ð¾Ð»Ð½Ð¸Ñ‚ÐµÐ»ÑŒÐ½Ñ‹Ðµ Ð¿Ð°Ñ€Ð°Ð¼ÐµÑ‚Ñ€Ñ‹", "https://themes.material-ui.com/": "ÐŸÑ€ÐµÐ¼Ð¸ÑƒÐ¼ Ñ‚ÐµÐ¼Ñ‹", "/components/material-icons": "Material Icons", "/components/textarea-autosize": "Textarea Autosize", "/components/rating": "Ð ÐµÐ¹Ñ‚Ð¸Ð½Ð³", "/components/skeleton": "Skeleton", "/components/tree-view": "Ð˜ÐµÑ€Ð°Ñ€Ñ…Ð¸Ñ‡ÐµÑÐºÐ¾Ðµ Ð¿Ñ€ÐµÐ´ÑÑ‚Ð°Ð²Ð»ÐµÐ½Ð¸Ðµ", "/customization/density": "Density" } } },
        "sU/p": function(e, t, n) {
            var o = n("P56o"),
                s = n("tjmq"),
                a = n("ezc+"),
                r = n("1Alt")("src"),
                i = n("JGfN"),
                c = ("" + i).split("toString");
            n("R5TD").inspectSource = function(e) { return i.call(e) }, (e.exports = function(e, t, n, i) {
                var p = "function" == typeof n;
                p && (a(n, "name") || s(n, "name", t)), e[t] !== n && (p && (a(n, r) || s(n, r, e[t] ? "" + e[t] : c.join(String(t)))), e === o ? e[t] = n : i ? e[t] ? e[t] = n : s(e, t, n) : (delete e[t], s(e, t, n)))
            })(Function.prototype, "toString", function() { return "function" == typeof this && this[r] || i.call(this) })
        },
        sWZd: function(e, t, n) {
            var o = n("PqlX"),
                s = n("BwbT"),
                a = n("ULAX"),
                r = n("zYYD");
            e.exports = function(e, t) { return o(e) ? e : s(e, t) ? [e] : a(r(e)) }
        },
        scDZ: function(e, t, n) {
            "use strict";
            n("2UZ+"), n("m1Dn");
            window.Prism = window.Prism || {}, window.Prism.manual = !0
        },
        sdkr: function(e, t, n) {
            var o = n("ml72"),
                s = n("Sp5b"),
                a = n("BUlT");
            e.exports = function(e) {
                return function(t, n, r) {
                    var i, c = o(t),
                        p = s(c.length),
                        u = a(r, p);
                    if (e && n != n) {
                        for (; p > u;)
                            if ((i = c[u++]) != i) return !0
                    } else
                        for (; p > u; u++)
                            if ((e || u in c) && c[u] === n) return e || u || 0; return !e && -1
                }
            }
        },
        tDyL: function(e, t, n) {
            var o = n("wiKJ"),
                s = n("kXPx"),
                a = n("yoW1"),
                r = n("PqlX"),
                i = n("0qVv");
            e.exports = function(e) { return "function" == typeof e ? e : null == e ? a : "object" == typeof e ? r(e) ? s(e[0], e[1]) : o(e) : i(e) }
        },
        "tb+2": function(e, t, n) {
            var o = n("07F0"),
                s = n("E7Xw"),
                a = Object.prototype.propertyIsEnumerable,
                r = Object.getOwnPropertySymbols,
                i = r ? function(e) { return null == e ? [] : (e = Object(e), o(r(e), function(t) { return a.call(e, t) })) } : s;
            e.exports = i
        },
        tfj2: function(e, t, n) {
            (function(e) {
                var o = n("s3UK"),
                    s = n("1ezk"),
                    a = t && !t.nodeType && t,
                    r = a && "object" == typeof e && e && !e.nodeType && e,
                    i = r && r.exports === a ? o.Buffer : void 0,
                    c = (i ? i.isBuffer : void 0) || s;
                e.exports = c
            }).call(this, n("FtQO")(e))
        },
        tjmq: function(e, t, n) {
            var o = n("U1KF"),
                s = n("WWmS");
            e.exports = n("GGqZ") ? function(e, t, n) { return o.f(e, t, s(1, n)) } : function(e, t, n) { return e[t] = n, e }
        },
        u2vY: function(e, t, n) {
            var o = n("Exs5");
            e.exports = function(e) { return function(t) { return o(t, e) } }
        },
        w5ta: function(e, t, n) {
            var o = n("PYDc"),
                s = n("XXCu"),
                a = n("DZMJ"),
                r = n("i0JV"),
                i = n("xKNE");

            function c(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }
            c.prototype.clear = o, c.prototype.delete = s, c.prototype.get = a, c.prototype.has = r, c.prototype.set = i, e.exports = c
        },
        wEu9: function(e, t) { e.exports = !1 },
        wiKJ: function(e, t, n) {
            var o = n("VY7S"),
                s = n("Akg/"),
                a = n("a7YA");
            e.exports = function(e) { var t = s(e); return 1 == t.length && t[0][2] ? a(t[0][0], t[0][1]) : function(n) { return n === e || o(n, e, t) } }
        },
        xKNE: function(e, t, n) {
            var o = n("FEiO"),
                s = "__lodash_hash_undefined__";
            e.exports = function(e, t) { var n = this.__data__; return this.size += this.has(e) ? 0 : 1, n[e] = o && void 0 === t ? s : t, this }
        },
        xPnu: function(e, t, n) {
            var o = n("zcvR");
            e.exports = function(e, t) {
                var n = o(this, e),
                    s = n.size;
                return n.set(e, t), this.size += n.size == s ? 0 : 1, this
            }
        },
        xkFB: function(e, t, n) {
            var o = n("CzB4"),
                s = n("WjON"),
                a = n("aBIM"),
                r = n("yVxb"),
                i = n("xPnu");

            function c(e) {
                var t = -1,
                    n = null == e ? 0 : e.length;
                for (this.clear(); ++t < n;) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }
            c.prototype.clear = o, c.prototype.delete = s, c.prototype.get = a, c.prototype.has = r, c.prototype.set = i, e.exports = c
        },
        yVxb: function(e, t, n) {
            var o = n("zcvR");
            e.exports = function(e) { return o(this, e).has(e) }
        },
        yoW1: function(e, t) { e.exports = function(e) { return e } },
        zEvu: function(e, t) {
            e.exports = function(e) {
                var t = this.__data__,
                    n = t.delete(e);
                return this.size = t.size, n
            }
        },
        "zIP/": function(e, t, n) {
            var o = n("1Alt")("meta"),
                s = n("Bsg+"),
                a = n("ezc+"),
                r = n("U1KF").f,
                i = 0,
                c = Object.isExtensible || function() { return !0 },
                p = !n("E7Vc")(function() { return c(Object.preventExtensions({})) }),
                u = function(e) { r(e, o, { value: { i: "O" + ++i, w: {} } }) },
                l = e.exports = {
                    KEY: o,
                    NEED: !1,
                    fastKey: function(e, t) {
                        if (!s(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
                        if (!a(e, o)) {
                            if (!c(e)) return "F";
                            if (!t) return "E";
                            u(e)
                        }
                        return e[o].i
                    },
                    getWeak: function(e, t) {
                        if (!a(e, o)) {
                            if (!c(e)) return !0;
                            if (!t) return !1;
                            u(e)
                        }
                        return e[o].w
                    },
                    onFreeze: function(e) { return p && l.NEED && c(e) && !a(e, o) && u(e), e }
                }
        },
        zc1V: function(e, t, n) {
            var o, s = n("d6Vr"),
                a = (o = /[^.]+$/.exec(s && s.keys && s.keys.IE_PROTO || "")) ? "Symbol(src)_1." + o : "";
            e.exports = function(e) { return !!a && a in e }
        },
        zcvR: function(e, t, n) {
            var o = n("7o+A");
            e.exports = function(e, t) { var n = e.__data__; return o(t) ? n["string" == typeof t ? "string" : "hash"] : n.map }
        },
        zlqh: function(e, t, n) {
            var o = n("9dxi")("iterator"),
                s = !1;
            try {
                var a = [7][o]();
                a.return = function() { s = !0 }, Array.from(a, function() { throw 2 })
            } catch (r) {}
            e.exports = function(e, t) {
                if (!t && !s) return !1;
                var n = !1;
                try {
                    var a = [7],
                        i = a[o]();
                    i.next = function() { return { done: n = !0 } }, a[o] = function() { return i }, e(a)
                } catch (r) {}
                return n
            }
        }
    },
    [
        ["3Ckp", "5d41", "9da1"]
    ]
]);