function asyncGeneratorStep(e, t, n, r, o, i, a) {
  try {
    var s = e[i](a),
      c = s.value;
  } catch (e) {
    return void n(e);
  }
  s.done ? t(c) : Promise.resolve(c).then(r, o);
}
function _defineProperty(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0
        })
      : (e[t] = n),
    e
  );
}
function ownKeys(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function(t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function _objectSpread2(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {};
    t % 2
      ? ownKeys(Object(n), !0).forEach(function(t) {
          _defineProperty(e, t, n[t]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : ownKeys(Object(n)).forEach(function(t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
        });
  }
  return e;
}
function _taggedTemplateLiteral(e, t) {
  return (
    t || (t = e.slice(0)),
    Object.freeze(
      Object.defineProperties(e, { raw: { value: Object.freeze(t) } })
    )
  );
}
var e = {},
  t = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
  n = "[^\\s]+",
  r = /\[([^]*?)\]/gm,
  noop = function() {};
function shorten(e, t) {
  for (var n = [], r = 0, o = e.length; r < o; r++) n.push(e[r].substr(0, t));
  return n;
}
function monthUpdate(e) {
  return function(t, n, r) {
    var o = r[e].indexOf(n.charAt(0).toUpperCase() + n.substr(1).toLowerCase());
    ~o && (t.month = o);
  };
}
function pad(e, t) {
  for (e = String(e), t = t || 2; e.length < t; ) e = "0" + e;
  return e;
}
var o = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ],
  i = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ],
  a = shorten(i, 3),
  s = shorten(o, 3);
e.i18n = {
  dayNamesShort: s,
  dayNames: o,
  monthNamesShort: a,
  monthNames: i,
  amPm: ["am", "pm"],
  DoFn: function DoFn(e) {
    return (
      e +
      ["th", "st", "nd", "rd"][e % 10 > 3 ? 0 : ((e - (e % 10) != 10) * e) % 10]
    );
  }
};
var c = {
    D: function(e) {
      return e.getDate();
    },
    DD: function(e) {
      return pad(e.getDate());
    },
    Do: function(e, t) {
      return t.DoFn(e.getDate());
    },
    d: function(e) {
      return e.getDay();
    },
    dd: function(e) {
      return pad(e.getDay());
    },
    ddd: function(e, t) {
      return t.dayNamesShort[e.getDay()];
    },
    dddd: function(e, t) {
      return t.dayNames[e.getDay()];
    },
    M: function(e) {
      return e.getMonth() + 1;
    },
    MM: function(e) {
      return pad(e.getMonth() + 1);
    },
    MMM: function(e, t) {
      return t.monthNamesShort[e.getMonth()];
    },
    MMMM: function(e, t) {
      return t.monthNames[e.getMonth()];
    },
    YY: function(e) {
      return pad(String(e.getFullYear()), 4).substr(2);
    },
    YYYY: function(e) {
      return pad(e.getFullYear(), 4);
    },
    h: function(e) {
      return e.getHours() % 12 || 12;
    },
    hh: function(e) {
      return pad(e.getHours() % 12 || 12);
    },
    H: function(e) {
      return e.getHours();
    },
    HH: function(e) {
      return pad(e.getHours());
    },
    m: function(e) {
      return e.getMinutes();
    },
    mm: function(e) {
      return pad(e.getMinutes());
    },
    s: function(e) {
      return e.getSeconds();
    },
    ss: function(e) {
      return pad(e.getSeconds());
    },
    S: function(e) {
      return Math.round(e.getMilliseconds() / 100);
    },
    SS: function(e) {
      return pad(Math.round(e.getMilliseconds() / 10), 2);
    },
    SSS: function(e) {
      return pad(e.getMilliseconds(), 3);
    },
    a: function(e, t) {
      return e.getHours() < 12 ? t.amPm[0] : t.amPm[1];
    },
    A: function(e, t) {
      return e.getHours() < 12
        ? t.amPm[0].toUpperCase()
        : t.amPm[1].toUpperCase();
    },
    ZZ: function(e) {
      var t = e.getTimezoneOffset();
      return (
        (t > 0 ? "-" : "+") +
        pad(100 * Math.floor(Math.abs(t) / 60) + (Math.abs(t) % 60), 4)
      );
    }
  },
  l = {
    D: [
      "\\d\\d?",
      function(e, t) {
        e.day = t;
      }
    ],
    Do: [
      "\\d\\d?" + n,
      function(e, t) {
        e.day = parseInt(t, 10);
      }
    ],
    M: [
      "\\d\\d?",
      function(e, t) {
        e.month = t - 1;
      }
    ],
    YY: [
      "\\d\\d?",
      function(e, t) {
        var n = +("" + new Date().getFullYear()).substr(0, 2);
        e.year = "" + (t > 68 ? n - 1 : n) + t;
      }
    ],
    h: [
      "\\d\\d?",
      function(e, t) {
        e.hour = t;
      }
    ],
    m: [
      "\\d\\d?",
      function(e, t) {
        e.minute = t;
      }
    ],
    s: [
      "\\d\\d?",
      function(e, t) {
        e.second = t;
      }
    ],
    YYYY: [
      "\\d{4}",
      function(e, t) {
        e.year = t;
      }
    ],
    S: [
      "\\d",
      function(e, t) {
        e.millisecond = 100 * t;
      }
    ],
    SS: [
      "\\d{2}",
      function(e, t) {
        e.millisecond = 10 * t;
      }
    ],
    SSS: [
      "\\d{3}",
      function(e, t) {
        e.millisecond = t;
      }
    ],
    d: ["\\d\\d?", noop],
    ddd: [n, noop],
    MMM: [n, monthUpdate("monthNamesShort")],
    MMMM: [n, monthUpdate("monthNames")],
    a: [
      n,
      function(e, t, n) {
        var r = t.toLowerCase();
        r === n.amPm[0] ? (e.isPm = !1) : r === n.amPm[1] && (e.isPm = !0);
      }
    ],
    ZZ: [
      "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z",
      function(e, t) {
        var n,
          r = (t + "").match(/([+-]|\d\d)/gi);
        r &&
          ((n = 60 * r[1] + parseInt(r[2], 10)),
          (e.timezoneOffset = "+" === r[0] ? n : -n));
      }
    ]
  };
(l.dd = l.d),
  (l.dddd = l.ddd),
  (l.DD = l.D),
  (l.mm = l.m),
  (l.hh = l.H = l.HH = l.h),
  (l.MM = l.M),
  (l.ss = l.s),
  (l.A = l.a),
  (e.masks = {
    default: "ddd MMM DD YYYY HH:mm:ss",
    shortDate: "M/D/YY",
    mediumDate: "MMM D, YYYY",
    longDate: "MMMM D, YYYY",
    fullDate: "dddd, MMMM D, YYYY",
    shortTime: "HH:mm",
    mediumTime: "HH:mm:ss",
    longTime: "HH:mm:ss.SSS"
  }),
  (e.format = function(n, o, i) {
    var a = i || e.i18n;
    if (
      ("number" == typeof n && (n = new Date(n)),
      "[object Date]" !== Object.prototype.toString.call(n) ||
        isNaN(n.getTime()))
    )
      throw new Error("Invalid Date in fecha.format");
    o = e.masks[o] || o || e.masks.default;
    var s = [];
    return (o = (o = o.replace(r, function(e, t) {
      return s.push(t), "@@@";
    })).replace(t, function(e) {
      return e in c ? c[e](n, a) : e.slice(1, e.length - 1);
    })).replace(/@@@/g, function() {
      return s.shift();
    });
  }),
  (e.parse = function(n, o, i) {
    var a = i || e.i18n;
    if ("string" != typeof o) throw new Error("Invalid format in fecha.parse");
    if (((o = e.masks[o] || o), n.length > 1e3)) return null;
    var s = {},
      c = [],
      u = [],
      d = (function regexEscape(e) {
        return e.replace(/[|\\{()[^$+*?.-]/g, "\\$&");
      })(
        (o = o.replace(r, function(e, t) {
          return u.push(t), "@@@";
        }))
      ).replace(t, function(e) {
        if (l[e]) {
          var t = l[e];
          return c.push(t[1]), "(" + t[0] + ")";
        }
        return e;
      });
    d = d.replace(/@@@/g, function() {
      return u.shift();
    });
    var h = n.match(new RegExp(d, "i"));
    if (!h) return null;
    for (var p = 1; p < h.length; p++) c[p - 1](s, h[p], a);
    var f,
      m = new Date();
    return (
      !0 === s.isPm && null != s.hour && 12 != +s.hour
        ? (s.hour = +s.hour + 12)
        : !1 === s.isPm && 12 == +s.hour && (s.hour = 0),
      null != s.timezoneOffset
        ? ((s.minute = +(s.minute || 0) - +s.timezoneOffset),
          (f = new Date(
            Date.UTC(
              s.year || m.getFullYear(),
              s.month || 0,
              s.day || 1,
              s.hour || 0,
              s.minute || 0,
              s.second || 0,
              s.millisecond || 0
            )
          )))
        : (f = new Date(
            s.year || m.getFullYear(),
            s.month || 0,
            s.day || 1,
            s.hour || 0,
            s.minute || 0,
            s.second || 0,
            s.millisecond || 0
          )),
      f
    );
  });
(function() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return "RangeError" === e.name;
  }
})(),
  (function() {
    try {
      new Date().toLocaleString("i");
    } catch (e) {
      return "RangeError" === e.name;
    }
  })(),
  (function() {
    try {
      new Date().toLocaleTimeString("i");
    } catch (e) {
      return "RangeError" === e.name;
    }
  })();
var A = function(e, t, n, r) {
    (r = r || {}), (n = null == n ? {} : n);
    var o = new Event(t, {
      bubbles: void 0 === r.bubbles || r.bubbles,
      cancelable: Boolean(r.cancelable),
      composed: void 0 === r.composed || r.composed
    });
    return (o.detail = n), e.dispatchEvent(o), o;
  },
  F = function() {
    var e = document.querySelector("home-assistant");
    if (
      (e =
        (e =
          (e =
            (e =
              ((e =
                (e =
                  (e =
                    (e = e && e.shadowRoot) &&
                    e.querySelector("home-assistant-main")) && e.shadowRoot) &&
                e.querySelector("app-drawer-layout partial-panel-resolver")) &&
                e.shadowRoot) ||
              e) && e.querySelector("ha-panel-lovelace")) && e.shadowRoot) &&
        e.querySelector("hui-root"))
    ) {
      var t = e.lovelace;
      return (t.current_view = e.___curView), t;
    }
    return null;
  };
const u = document.querySelector("home-assistant"),
  d = u.hass,
  h = F(),
  p = (function() {
    var e = document.querySelector("home-assistant");
    if (
      (e =
        (e =
          (e =
            (e =
              ((e =
                (e =
                  (e =
                    (e = e && e.shadowRoot) &&
                    e.querySelector("home-assistant-main")) && e.shadowRoot) &&
                e.querySelector("app-drawer-layout partial-panel-resolver")) &&
                e.shadowRoot) ||
              e) && e.querySelector("ha-panel-lovelace")) && e.shadowRoot) &&
        e.querySelector("hui-root"))
    )
      return e.shadowRoot;
  })(),
  f = {};
(f.main = u.shadowRoot.querySelector("home-assistant-main")),
  (f.tabs = Array.from(
    (p.querySelector("paper-tabs") || p).querySelectorAll("paper-tab")
  )),
  (f.tabContainer = p.querySelector("paper-tabs")),
  (f.menu = p.querySelector("ha-menu-button")),
  (f.options = p.querySelector("paper-menu-button")),
  (f.voice =
    p.querySelector("ha-start-voice-button") ||
    p.querySelector('paper-icon-button[icon="hass:microphone"]')),
  (f.drawer = f.main.shadowRoot.querySelector("#drawer")),
  (f.sidebar = {}),
  (f.sidebar.main = f.main.shadowRoot.querySelector("ha-sidebar")),
  (f.sidebar.menu = f.sidebar.main.shadowRoot.querySelector(".menu")),
  (f.sidebar.listbox = f.sidebar.main.shadowRoot.querySelector(
    "paper-listbox"
  )),
  (f.sidebar.divider = f.sidebar.main.shadowRoot.querySelector("div.divider")),
  (f.appHeader = p.querySelector("app-header")),
  (f.appLayout = p.querySelector("ha-app-layout")),
  (f.partialPanelResolver = f.main.shadowRoot.querySelector(
    "partial-panel-resolver"
  ));
const m = [];
for (const e in f)
  if ("voice" != e)
    if (f[e]) {
      if ("object" == typeof f[e] && !f[e].nodeName)
        for (const t in f[e])
          f[e][t] || m.push("".concat(e, "[").concat(t, "]"));
    } else m.push(e);
m.length &&
  console.log(
    "[CUSTOM HEADER] The following HA element"
      .concat(m.length > 1 ? "s" : "", " could not be found: ")
      .concat(m.join(", "))
  );
let g = (() => {
  if (window.fully && "function" == typeof fully.getDeviceId)
    return fully.getDeviceId();
  if (!localStorage["lovelace-player-device-id"]) {
    const s4 = () =>
      Math.floor(1e5 * (1 + Math.random()))
        .toString(16)
        .substring(1);
    localStorage["lovelace-player-device-id"] = ""
      .concat(s4())
      .concat(s4(), "-")
      .concat(s4())
      .concat(s4());
  }
  return localStorage["lovelace-player-device-id"];
})();
Object.defineProperty(Array.prototype, "flat", {
  value: function value() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
    return this.reduce(function(t, n) {
      return t.concat(Array.isArray(n) && e - 1 ? n.flat(e - 1) : n);
    }, []);
  }
});
const tapOrClick = (e, t) => {
    e.addEventListener("click", () => {
      t.dispatchEvent(new MouseEvent("click", { bubbles: !1, cancelable: !1 }));
    }),
      e.addEventListener("tap", () => {
        t.dispatchEvent(new MouseEvent("tap", { bubbles: !1, cancelable: !1 }));
      });
  },
  tabIndexByName = e => {
    let t;
    const { views: n } = h.config;
    return (
      isNaN(e)
        ? n.forEach(r => {
            (r.title !== e && r.path !== e) || (t = n.indexOf(r));
          })
        : (t = parseInt(e, 10)),
      t
    );
  },
  subscribeRenderTemplate = (e, t, n) => {
    const r = d.connection,
      o = _objectSpread2(
        { user: d.user.name, browser: navigator.userAgent },
        t.variables,
        {},
        (e => {
          const t = F(),
            n = new Date();
          if (t && null != t.config.views[t.current_view])
            return {
              deviceID: g,
              isAdmin: d.user.is_admin,
              isOwner: d.user.is_owner,
              user: d.user.name,
              userID: d.user.id,
              userAgent: navigator.userAgent,
              viewTitle: t.config.views[t.current_view].title,
              viewPath: t.config.views[t.current_view].path,
              viewIndex: t.current_view,
              url: window.location.href,
              time: n.toLocaleTimeString(e, {
                hour: "2-digit",
                minute: "2-digit"
              }),
              date: n.toLocaleDateString(e, {}),
              monthNum: n.getMonth() + 1,
              monthNumLZ: String(n.getMonth() + 1).padStart(2, 0),
              monthNameShort: n.toLocaleDateString(e, { month: "short" }),
              monthNameLong: n.toLocaleDateString(e, { month: "long" }),
              dayNum: n.getDate(),
              dayNumLZ: String(n.getDate()).padStart(2, 0),
              dayNameShort: n.toLocaleDateString(e, { weekday: "short" }),
              dayNameLong: n.toLocaleDateString(e, { weekday: "long" }),
              hours12: String((n.getHours() + 24) % 12 || 12),
              hours12LZ: String((n.getHours() + 24) % 12 || 12).padStart(2, 0),
              hours24: n.getHours(),
              hours24LZ: String(n.getHours()).padStart(2, 0),
              minutes: n.getMinutes(),
              minutesLZ: String(n.getMinutes()).padStart(2, 0),
              year2d: String(n.getFullYear()).substr(-2),
              year4d: n.getFullYear(),
              AMPM: n.getHours() >= 12 ? "PM" : "AM",
              ampm: n.getHours() >= 12 ? "pm" : "am"
            };
        })(n)
      ),
      i = t.template,
      a = t.entity_ids;
    return r.subscribeMessage(t => e(t.result), {
      type: "render_template",
      template: i,
      variables: o,
      entity_ids: a
    });
  },
  buildRange = e => {
    const t = [],
      range = (e, t) => new Array(t - e + 1).fill(void 0).map((t, n) => n + e);
    if (e.includes("to")) {
      const n = e.split("to");
      parseInt(n[1]) > parseInt(n[0])
        ? t.push(range(parseInt(n[0]), parseInt(n[1])))
        : t.push(range(parseInt(n[1]), parseInt(n[0])));
    }
    return t.flat();
  },
  processTabArray = e => {
    let t = [];
    e = "string" == typeof e ? e.replace(/\s+/g, "").split(",") : e;
    for (const n in e)
      if ("string" == typeof e[n] && e[n].includes("to")) {
        const r = e[n].replace(/ /g, "").split("to");
        r[0].match(/[a-z]/g) || r[1].match(/[a-z]/g)
          ? t.push(e[n])
          : t.push(buildRange(e[n]));
      } else t.push(e[n]);
    t = t.flat();
    for (const e in t)
      isNaN(t[e]) ? (t[e] = tabIndexByName(t[e])) : (t[e] = parseInt(t[e]));
    return t.sort((e, t) => e - t);
  },
  conditionalConfig = e => {
    const t = F();
    let n = {},
      r = 0;
    return (
      e.exceptions &&
        e.exceptions.forEach(e => {
          const o = (e => {
            const n = {
              user: d.user.name,
              user_agent: navigator.userAgent,
              device_id: g
            };
            let r = 0;
            for (const o in e)
              if (
                ((window.customHeaderTabCond = !!Object.keys(e).includes(
                  "tab"
                )),
                "user" == o && e[o].includes(","))
              )
                e[o].split(/,+/).forEach(e => {
                  (n[o] != e.trim() && e != d.user.id) || r++;
                });
              else if (
                "tab" == o &&
                (e[o].includes(",") || e[o].includes("to"))
              ) {
                const n = processTabArray(e[o]);
                if (t && n.includes(t.current_view)) {
                  r++;
                  continue;
                }
              } else {
                if (
                  !(
                    n[o] == e[o] ||
                    ("query_string" == o &&
                      window.location.search.includes(e[o])) ||
                    ("user_agent" == o && n[o].includes(e[o])) ||
                    ("media_query" == o && window.matchMedia(e[o]).matches) ||
                    ("user" == o && e[o] == d.user.id) ||
                    ("is_admin" == o && e[o] == d.user.is_admin) ||
                    ("is_owner" == o && e[o] == d.user.is_owner) ||
                    ("template" == o && e[o]) ||
                    (t && "tab" == o && tabIndexByName(e[o]) == t.current_view)
                  )
                )
                  return 0;
                r++;
              }
            return r;
          })(e.conditions);
          o > r && ((r = o), (n = e.config));
        }),
      n.hide_tabs && e.show_tabs && n.hide_tabs.length && e.show_tabs.length
        ? delete e.show_tabs
        : n.show_tabs &&
          e.hide_tabs &&
          n.show_tabs.length &&
          e.hide_tabs.length &&
          delete e.hide_tabs,
      (window.customHeaderExceptionConfig = JSON.stringify(n)),
      _objectSpread2({}, e, {}, n)
    );
  },
  _ = (() => {
    if (p.querySelector("ch-header")) return;
    const e = {};
    (e.bottom = document.createElement("ch-header-bottom")),
      (e.tabContainer = document.createElement("paper-tabs")),
      e.tabContainer.setAttribute("scrollable", ""),
      e.tabContainer.setAttribute("dir", "ltr"),
      (e.tabContainer.style.width = "100%"),
      (e.tabContainer.style.marginLeft = "0"),
      f.tabs.forEach(t => {
        const n = f.tabs.indexOf(t),
          r = t.cloneNode(!0),
          o = r.querySelector("ha-icon");
        o && o.setAttribute("icon", h.config.views[n].icon),
          tapOrClick(r, f.tabs[n]),
          e.tabContainer.appendChild(r);
      }),
      (e.tabs = e.tabContainer.querySelectorAll("paper-tab"));
    const buildButton = (t, n) => {
      if ("options" === t) {
        (e[t] = f[t].cloneNode(!0)),
          e[t].removeAttribute("horizontal-offset"),
          (e[t].querySelector("paper-icon-button").style.height = "48px");
        const n = Array.from(e[t].querySelectorAll("paper-item"));
        n.forEach(e => {
          const r = n.indexOf(e);
          tapOrClick(e, f[t].querySelectorAll("paper-item")[r]);
        });
      } else {
        if (!f[t]) return;
        (e[t] = document.createElement("paper-icon-button")),
          tapOrClick(
            e[t],
            f[t].shadowRoot.querySelector("paper-icon-button") || f[t]
          );
      }
      e[t].setAttribute("icon", n),
        e[t].setAttribute("buttonElem", t),
        (e[t].style.flexShrink = "0"),
        (e[t].style.height = "48px");
    };
    buildButton("menu", "mdi:menu"),
      buildButton("voice", "mdi:microphone"),
      buildButton("options", "mdi:dots-vertical");
    const t = document.createElement("ch-stack"),
      n = document.createElement("div");
    return (
      n.setAttribute("id", "contentContainer"),
      (e.container = document.createElement("ch-header")),
      e.menu && e.container.appendChild(e.menu),
      e.container.appendChild(t),
      (e.stack = e.container.querySelector("ch-stack")),
      e.stack.appendChild(n),
      e.stack.appendChild(e.tabContainer),
      e.voice &&
        "hidden" != e.voice.style.visibility &&
        e.container.appendChild(e.voice),
      e.options && e.container.appendChild(e.options),
      f.appLayout.appendChild(e.container),
      f.appLayout.appendChild(e.bottom),
      e
    );
  })(),
  y = new WeakMap(),
  isDirective = e => "function" == typeof e && y.has(e),
  v =
    void 0 !== window.customElements &&
    void 0 !== window.customElements.polyfillWrapFlushCallback,
  removeNodes = (e, t, n = null) => {
    for (; t !== n; ) {
      const n = t.nextSibling;
      e.removeChild(t), (t = n);
    }
  },
  b = {},
  w = {},
  S = `{{lit-${String(Math.random()).slice(2)}}}`,
  x = `\x3c!--${S}--\x3e`,
  E = new RegExp(`${S}|${x}`);
class Template {
  constructor(e, t) {
    (this.parts = []), (this.element = t);
    const n = [],
      r = [],
      o = document.createTreeWalker(t.content, 133, null, !1);
    let i = 0,
      a = -1,
      s = 0;
    const {
      strings: c,
      values: { length: l }
    } = e;
    for (; s < l; ) {
      const e = o.nextNode();
      if (null !== e) {
        if ((a++, 1 === e.nodeType)) {
          if (e.hasAttributes()) {
            const t = e.attributes,
              { length: n } = t;
            let r = 0;
            for (let e = 0; e < n; e++) endsWith(t[e].name, "$lit$") && r++;
            for (; r-- > 0; ) {
              const t = c[s],
                n = O.exec(t)[2],
                r = n.toLowerCase() + "$lit$",
                o = e.getAttribute(r);
              e.removeAttribute(r);
              const i = o.split(E);
              this.parts.push({
                type: "attribute",
                index: a,
                name: n,
                strings: i
              }),
                (s += i.length - 1);
            }
          }
          "TEMPLATE" === e.tagName && (r.push(e), (o.currentNode = e.content));
        } else if (3 === e.nodeType) {
          const t = e.data;
          if (t.indexOf(S) >= 0) {
            const r = e.parentNode,
              o = t.split(E),
              i = o.length - 1;
            for (let t = 0; t < i; t++) {
              let n,
                i = o[t];
              if ("" === i) n = createMarker();
              else {
                const e = O.exec(i);
                null !== e &&
                  endsWith(e[2], "$lit$") &&
                  (i =
                    i.slice(0, e.index) +
                    e[1] +
                    e[2].slice(0, -"$lit$".length) +
                    e[3]),
                  (n = document.createTextNode(i));
              }
              r.insertBefore(n, e),
                this.parts.push({ type: "node", index: ++a });
            }
            "" === o[i]
              ? (r.insertBefore(createMarker(), e), n.push(e))
              : (e.data = o[i]),
              (s += i);
          }
        } else if (8 === e.nodeType)
          if (e.data === S) {
            const t = e.parentNode;
            (null !== e.previousSibling && a !== i) ||
              (a++, t.insertBefore(createMarker(), e)),
              (i = a),
              this.parts.push({ type: "node", index: a }),
              null === e.nextSibling ? (e.data = "") : (n.push(e), a--),
              s++;
          } else {
            let t = -1;
            for (; -1 !== (t = e.data.indexOf(S, t + 1)); )
              this.parts.push({ type: "node", index: -1 }), s++;
          }
      } else o.currentNode = r.pop();
    }
    for (const e of n) e.parentNode.removeChild(e);
  }
}
const endsWith = (e, t) => {
    const n = e.length - t.length;
    return n >= 0 && e.slice(n) === t;
  },
  isTemplatePartActive = e => -1 !== e.index,
  createMarker = () => document.createComment(""),
  O = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class TemplateInstance {
  constructor(e, t, n) {
    (this.__parts = []),
      (this.template = e),
      (this.processor = t),
      (this.options = n);
  }
  update(e) {
    let t = 0;
    for (const n of this.__parts) void 0 !== n && n.setValue(e[t]), t++;
    for (const e of this.__parts) void 0 !== e && e.commit();
  }
  _clone() {
    const e = v
        ? this.template.element.content.cloneNode(!0)
        : document.importNode(this.template.element.content, !0),
      t = [],
      n = this.template.parts,
      r = document.createTreeWalker(e, 133, null, !1);
    let o,
      i = 0,
      a = 0,
      s = r.nextNode();
    for (; i < n.length; )
      if (((o = n[i]), isTemplatePartActive(o))) {
        for (; a < o.index; )
          a++,
            "TEMPLATE" === s.nodeName &&
              (t.push(s), (r.currentNode = s.content)),
            null === (s = r.nextNode()) &&
              ((r.currentNode = t.pop()), (s = r.nextNode()));
        if ("node" === o.type) {
          const e = this.processor.handleTextExpression(this.options);
          e.insertAfterNode(s.previousSibling), this.__parts.push(e);
        } else
          this.__parts.push(
            ...this.processor.handleAttributeExpressions(
              s,
              o.name,
              o.strings,
              this.options
            )
          );
        i++;
      } else this.__parts.push(void 0), i++;
    return v && (document.adoptNode(e), customElements.upgrade(e)), e;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const k = ` ${S} `;
class TemplateResult {
  constructor(e, t, n, r) {
    (this.strings = e),
      (this.values = t),
      (this.type = n),
      (this.processor = r);
  }
  getHTML() {
    const e = this.strings.length - 1;
    let t = "",
      n = !1;
    for (let r = 0; r < e; r++) {
      const e = this.strings[r],
        o = e.lastIndexOf("\x3c!--");
      n = (o > -1 || n) && -1 === e.indexOf("--\x3e", o + 1);
      const i = O.exec(e);
      t +=
        null === i
          ? e + (n ? k : x)
          : e.substr(0, i.index) + i[1] + i[2] + "$lit$" + i[3] + S;
    }
    return (t += this.strings[e]), t;
  }
  getTemplateElement() {
    const e = document.createElement("template");
    return (e.innerHTML = this.getHTML()), e;
  }
}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const isPrimitive = e =>
    null === e || !("object" == typeof e || "function" == typeof e),
  isIterable = e => Array.isArray(e) || !(!e || !e[Symbol.iterator]);
class AttributeCommitter {
  constructor(e, t, n) {
    (this.dirty = !0),
      (this.element = e),
      (this.name = t),
      (this.strings = n),
      (this.parts = []);
    for (let e = 0; e < n.length - 1; e++) this.parts[e] = this._createPart();
  }
  _createPart() {
    return new AttributePart(this);
  }
  _getValue() {
    const e = this.strings,
      t = e.length - 1;
    let n = "";
    for (let r = 0; r < t; r++) {
      n += e[r];
      const t = this.parts[r];
      if (void 0 !== t) {
        const e = t.value;
        if (isPrimitive(e) || !isIterable(e))
          n += "string" == typeof e ? e : String(e);
        else for (const t of e) n += "string" == typeof t ? t : String(t);
      }
    }
    return (n += e[t]), n;
  }
  commit() {
    this.dirty &&
      ((this.dirty = !1),
      this.element.setAttribute(this.name, this._getValue()));
  }
}
class AttributePart {
  constructor(e) {
    (this.value = void 0), (this.committer = e);
  }
  setValue(e) {
    e === b ||
      (isPrimitive(e) && e === this.value) ||
      ((this.value = e), isDirective(e) || (this.committer.dirty = !0));
  }
  commit() {
    for (; isDirective(this.value); ) {
      const e = this.value;
      (this.value = b), e(this);
    }
    this.value !== b && this.committer.commit();
  }
}
class NodePart {
  constructor(e) {
    (this.value = void 0), (this.__pendingValue = void 0), (this.options = e);
  }
  appendInto(e) {
    (this.startNode = e.appendChild(createMarker())),
      (this.endNode = e.appendChild(createMarker()));
  }
  insertAfterNode(e) {
    (this.startNode = e), (this.endNode = e.nextSibling);
  }
  appendIntoPart(e) {
    e.__insert((this.startNode = createMarker())),
      e.__insert((this.endNode = createMarker()));
  }
  insertAfterPart(e) {
    e.__insert((this.startNode = createMarker())),
      (this.endNode = e.endNode),
      (e.endNode = this.startNode);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; isDirective(this.__pendingValue); ) {
      const e = this.__pendingValue;
      (this.__pendingValue = b), e(this);
    }
    const e = this.__pendingValue;
    e !== b &&
      (isPrimitive(e)
        ? e !== this.value && this.__commitText(e)
        : e instanceof TemplateResult
        ? this.__commitTemplateResult(e)
        : e instanceof Node
        ? this.__commitNode(e)
        : isIterable(e)
        ? this.__commitIterable(e)
        : e === w
        ? ((this.value = w), this.clear())
        : this.__commitText(e));
  }
  __insert(e) {
    this.endNode.parentNode.insertBefore(e, this.endNode);
  }
  __commitNode(e) {
    this.value !== e && (this.clear(), this.__insert(e), (this.value = e));
  }
  __commitText(e) {
    const t = this.startNode.nextSibling,
      n = "string" == typeof (e = null == e ? "" : e) ? e : String(e);
    t === this.endNode.previousSibling && 3 === t.nodeType
      ? (t.data = n)
      : this.__commitNode(document.createTextNode(n)),
      (this.value = e);
  }
  __commitTemplateResult(e) {
    const t = this.options.templateFactory(e);
    if (this.value instanceof TemplateInstance && this.value.template === t)
      this.value.update(e.values);
    else {
      const n = new TemplateInstance(t, e.processor, this.options),
        r = n._clone();
      n.update(e.values), this.__commitNode(r), (this.value = n);
    }
  }
  __commitIterable(e) {
    Array.isArray(this.value) || ((this.value = []), this.clear());
    const t = this.value;
    let n,
      r = 0;
    for (const o of e)
      (n = t[r]),
        void 0 === n &&
          ((n = new NodePart(this.options)),
          t.push(n),
          0 === r ? n.appendIntoPart(this) : n.insertAfterPart(t[r - 1])),
        n.setValue(o),
        n.commit(),
        r++;
    r < t.length && ((t.length = r), this.clear(n && n.endNode));
  }
  clear(e = this.startNode) {
    removeNodes(this.startNode.parentNode, e.nextSibling, this.endNode);
  }
}
class BooleanAttributePart {
  constructor(e, t, n) {
    if (
      ((this.value = void 0),
      (this.__pendingValue = void 0),
      2 !== n.length || "" !== n[0] || "" !== n[1])
    )
      throw new Error(
        "Boolean attributes can only contain a single expression"
      );
    (this.element = e), (this.name = t), (this.strings = n);
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; isDirective(this.__pendingValue); ) {
      const e = this.__pendingValue;
      (this.__pendingValue = b), e(this);
    }
    if (this.__pendingValue === b) return;
    const e = !!this.__pendingValue;
    this.value !== e &&
      (e
        ? this.element.setAttribute(this.name, "")
        : this.element.removeAttribute(this.name),
      (this.value = e)),
      (this.__pendingValue = b);
  }
}
class PropertyCommitter extends AttributeCommitter {
  constructor(e, t, n) {
    super(e, t, n),
      (this.single = 2 === n.length && "" === n[0] && "" === n[1]);
  }
  _createPart() {
    return new PropertyPart(this);
  }
  _getValue() {
    return this.single ? this.parts[0].value : super._getValue();
  }
  commit() {
    this.dirty &&
      ((this.dirty = !1), (this.element[this.name] = this._getValue()));
  }
}
class PropertyPart extends AttributePart {}
let C = !1;
try {
  const e = {
    get capture() {
      return (C = !0), !1;
    }
  };
  window.addEventListener("test", e, e),
    window.removeEventListener("test", e, e);
} catch (e) {}
class EventPart {
  constructor(e, t, n) {
    (this.value = void 0),
      (this.__pendingValue = void 0),
      (this.element = e),
      (this.eventName = t),
      (this.eventContext = n),
      (this.__boundHandleEvent = e => this.handleEvent(e));
  }
  setValue(e) {
    this.__pendingValue = e;
  }
  commit() {
    for (; isDirective(this.__pendingValue); ) {
      const e = this.__pendingValue;
      (this.__pendingValue = b), e(this);
    }
    if (this.__pendingValue === b) return;
    const e = this.__pendingValue,
      t = this.value,
      n =
        null == e ||
        (null != t &&
          (e.capture !== t.capture ||
            e.once !== t.once ||
            e.passive !== t.passive)),
      r = null != e && (null == t || n);
    n &&
      this.element.removeEventListener(
        this.eventName,
        this.__boundHandleEvent,
        this.__options
      ),
      r &&
        ((this.__options = getOptions(e)),
        this.element.addEventListener(
          this.eventName,
          this.__boundHandleEvent,
          this.__options
        )),
      (this.value = e),
      (this.__pendingValue = b);
  }
  handleEvent(e) {
    "function" == typeof this.value
      ? this.value.call(this.eventContext || this.element, e)
      : this.value.handleEvent(e);
  }
}
const getOptions = e =>
  e &&
  (C ? { capture: e.capture, passive: e.passive, once: e.once } : e.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ const j = new (class DefaultTemplateProcessor {
  handleAttributeExpressions(e, t, n, r) {
    const o = t[0];
    if ("." === o) {
      return new PropertyCommitter(e, t.slice(1), n).parts;
    }
    return "@" === o
      ? [new EventPart(e, t.slice(1), r.eventContext)]
      : "?" === o
      ? [new BooleanAttributePart(e, t.slice(1), n)]
      : new AttributeCommitter(e, t, n).parts;
  }
  handleTextExpression(e) {
    return new NodePart(e);
  }
})();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ function templateFactory(e) {
  let t = P.get(e.type);
  void 0 === t &&
    ((t = { stringsArray: new WeakMap(), keyString: new Map() }),
    P.set(e.type, t));
  let n = t.stringsArray.get(e.strings);
  if (void 0 !== n) return n;
  const r = e.strings.join(S);
  return (
    (n = t.keyString.get(r)),
    void 0 === n &&
      ((n = new Template(e, e.getTemplateElement())), t.keyString.set(r, n)),
    t.stringsArray.set(e.strings, n),
    n
  );
}
const P = new Map(),
  M = new WeakMap();
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions || (window.litHtmlVersions = [])).push("1.1.2");
const html = (e, ...t) => new TemplateResult(e, t, "html", j);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ function removeNodesFromTemplate(e, t) {
  const {
      element: { content: n },
      parts: r
    } = e,
    o = document.createTreeWalker(n, 133, null, !1);
  let i = nextActiveIndexInTemplateParts(r),
    a = r[i],
    s = -1,
    c = 0;
  const l = [];
  let u = null;
  for (; o.nextNode(); ) {
    s++;
    const e = o.currentNode;
    for (
      e.previousSibling === u && (u = null),
        t.has(e) && (l.push(e), null === u && (u = e)),
        null !== u && c++;
      void 0 !== a && a.index === s;

    )
      (a.index = null !== u ? -1 : a.index - c),
        (i = nextActiveIndexInTemplateParts(r, i)),
        (a = r[i]);
  }
  l.forEach(e => e.parentNode.removeChild(e));
}
const countNodes = e => {
    let t = 11 === e.nodeType ? 0 : 1;
    const n = document.createTreeWalker(e, 133, null, !1);
    for (; n.nextNode(); ) t++;
    return t;
  },
  nextActiveIndexInTemplateParts = (e, t = -1) => {
    for (let n = t + 1; n < e.length; n++) {
      const t = e[n];
      if (isTemplatePartActive(t)) return n;
    }
    return -1;
  };
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
const getTemplateCacheKey = (e, t) => `${e}--${t}`;
let T = !0;
void 0 === window.ShadyCSS
  ? (T = !1)
  : void 0 === window.ShadyCSS.prepareTemplateDom &&
    (console.warn(
      "Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."
    ),
    (T = !1));
const shadyTemplateFactory = e => t => {
    const n = getTemplateCacheKey(t.type, e);
    let r = P.get(n);
    void 0 === r &&
      ((r = { stringsArray: new WeakMap(), keyString: new Map() }),
      P.set(n, r));
    let o = r.stringsArray.get(t.strings);
    if (void 0 !== o) return o;
    const i = t.strings.join(S);
    if (((o = r.keyString.get(i)), void 0 === o)) {
      const n = t.getTemplateElement();
      T && window.ShadyCSS.prepareTemplateDom(n, e),
        (o = new Template(t, n)),
        r.keyString.set(i, o);
    }
    return r.stringsArray.set(t.strings, o), o;
  },
  R = ["html", "svg"],
  N = new Set(),
  prepareTemplateStyles = (e, t, n) => {
    N.add(e);
    const r = n ? n.element : document.createElement("template"),
      o = t.querySelectorAll("style"),
      { length: i } = o;
    if (0 === i) return void window.ShadyCSS.prepareTemplateStyles(r, e);
    const a = document.createElement("style");
    for (let e = 0; e < i; e++) {
      const t = o[e];
      t.parentNode.removeChild(t), (a.textContent += t.textContent);
    }
    (e => {
      R.forEach(t => {
        const n = P.get(getTemplateCacheKey(t, e));
        void 0 !== n &&
          n.keyString.forEach(e => {
            const {
                element: { content: t }
              } = e,
              n = new Set();
            Array.from(t.querySelectorAll("style")).forEach(e => {
              n.add(e);
            }),
              removeNodesFromTemplate(e, n);
          });
      });
    })(e);
    const s = r.content;
    n
      ? (function insertNodeIntoTemplate(e, t, n = null) {
          const {
            element: { content: r },
            parts: o
          } = e;
          if (null == n) return void r.appendChild(t);
          const i = document.createTreeWalker(r, 133, null, !1);
          let a = nextActiveIndexInTemplateParts(o),
            s = 0,
            c = -1;
          for (; i.nextNode(); ) {
            for (
              c++,
                i.currentNode === n &&
                  ((s = countNodes(t)), n.parentNode.insertBefore(t, n));
              -1 !== a && o[a].index === c;

            ) {
              if (s > 0) {
                for (; -1 !== a; )
                  (o[a].index += s), (a = nextActiveIndexInTemplateParts(o, a));
                return;
              }
              a = nextActiveIndexInTemplateParts(o, a);
            }
          }
        })(n, a, s.firstChild)
      : s.insertBefore(a, s.firstChild),
      window.ShadyCSS.prepareTemplateStyles(r, e);
    const c = s.querySelector("style");
    if (window.ShadyCSS.nativeShadow && null !== c)
      t.insertBefore(c.cloneNode(!0), t.firstChild);
    else if (n) {
      s.insertBefore(a, s.firstChild);
      const e = new Set();
      e.add(a), removeNodesFromTemplate(n, e);
    }
  };
window.JSCompiler_renameProperty = (e, t) => e;
const q = {
    toAttribute(e, t) {
      switch (t) {
        case Boolean:
          return e ? "" : null;
        case Object:
        case Array:
          return null == e ? e : JSON.stringify(e);
      }
      return e;
    },
    fromAttribute(e, t) {
      switch (t) {
        case Boolean:
          return null !== e;
        case Number:
          return null === e ? null : Number(e);
        case Object:
        case Array:
          return JSON.parse(e);
      }
      return e;
    }
  },
  notEqual = (e, t) => t !== e && (t == t || e == e),
  I = {
    attribute: !0,
    type: String,
    converter: q,
    reflect: !1,
    hasChanged: notEqual
  },
  L = Promise.resolve(!0);
class UpdatingElement extends HTMLElement {
  constructor() {
    super(),
      (this._updateState = 0),
      (this._instanceProperties = void 0),
      (this._updatePromise = L),
      (this._hasConnectedResolver = void 0),
      (this._changedProperties = new Map()),
      (this._reflectingProperties = void 0),
      this.initialize();
  }
  static get observedAttributes() {
    this.finalize();
    const e = [];
    return (
      this._classProperties.forEach((t, n) => {
        const r = this._attributeNameForProperty(n, t);
        void 0 !== r && (this._attributeToPropertyMap.set(r, n), e.push(r));
      }),
      e
    );
  }
  static _ensureClassProperties() {
    if (
      !this.hasOwnProperty(JSCompiler_renameProperty("_classProperties", this))
    ) {
      this._classProperties = new Map();
      const e = Object.getPrototypeOf(this)._classProperties;
      void 0 !== e && e.forEach((e, t) => this._classProperties.set(t, e));
    }
  }
  static createProperty(e, t = I) {
    if (
      (this._ensureClassProperties(),
      this._classProperties.set(e, t),
      t.noAccessor || this.prototype.hasOwnProperty(e))
    )
      return;
    const n = "symbol" == typeof e ? Symbol() : `__${e}`;
    Object.defineProperty(this.prototype, e, {
      get() {
        return this[n];
      },
      set(t) {
        const r = this[e];
        (this[n] = t), this._requestUpdate(e, r);
      },
      configurable: !0,
      enumerable: !0
    });
  }
  static finalize() {
    const e = Object.getPrototypeOf(this);
    if (
      (e.hasOwnProperty("finalized") || e.finalize(),
      (this.finalized = !0),
      this._ensureClassProperties(),
      (this._attributeToPropertyMap = new Map()),
      this.hasOwnProperty(JSCompiler_renameProperty("properties", this)))
    ) {
      const e = this.properties,
        t = [
          ...Object.getOwnPropertyNames(e),
          ...("function" == typeof Object.getOwnPropertySymbols
            ? Object.getOwnPropertySymbols(e)
            : [])
        ];
      for (const n of t) this.createProperty(n, e[n]);
    }
  }
  static _attributeNameForProperty(e, t) {
    const n = t.attribute;
    return !1 === n
      ? void 0
      : "string" == typeof n
      ? n
      : "string" == typeof e
      ? e.toLowerCase()
      : void 0;
  }
  static _valueHasChanged(e, t, n = notEqual) {
    return n(e, t);
  }
  static _propertyValueFromAttribute(e, t) {
    const n = t.type,
      r = t.converter || q,
      o = "function" == typeof r ? r : r.fromAttribute;
    return o ? o(e, n) : e;
  }
  static _propertyValueToAttribute(e, t) {
    if (void 0 === t.reflect) return;
    const n = t.type,
      r = t.converter;
    return ((r && r.toAttribute) || q.toAttribute)(e, n);
  }
  initialize() {
    this._saveInstanceProperties(), this._requestUpdate();
  }
  _saveInstanceProperties() {
    this.constructor._classProperties.forEach((e, t) => {
      if (this.hasOwnProperty(t)) {
        const e = this[t];
        delete this[t],
          this._instanceProperties || (this._instanceProperties = new Map()),
          this._instanceProperties.set(t, e);
      }
    });
  }
  _applyInstanceProperties() {
    this._instanceProperties.forEach((e, t) => (this[t] = e)),
      (this._instanceProperties = void 0);
  }
  connectedCallback() {
    (this._updateState = 32 | this._updateState),
      this._hasConnectedResolver &&
        (this._hasConnectedResolver(), (this._hasConnectedResolver = void 0));
  }
  disconnectedCallback() {}
  attributeChangedCallback(e, t, n) {
    t !== n && this._attributeToProperty(e, n);
  }
  _propertyToAttribute(e, t, n = I) {
    const r = this.constructor,
      o = r._attributeNameForProperty(e, n);
    if (void 0 !== o) {
      const e = r._propertyValueToAttribute(t, n);
      if (void 0 === e) return;
      (this._updateState = 8 | this._updateState),
        null == e ? this.removeAttribute(o) : this.setAttribute(o, e),
        (this._updateState = -9 & this._updateState);
    }
  }
  _attributeToProperty(e, t) {
    if (8 & this._updateState) return;
    const n = this.constructor,
      r = n._attributeToPropertyMap.get(e);
    if (void 0 !== r) {
      const e = n._classProperties.get(r) || I;
      (this._updateState = 16 | this._updateState),
        (this[r] = n._propertyValueFromAttribute(t, e)),
        (this._updateState = -17 & this._updateState);
    }
  }
  _requestUpdate(e, t) {
    let n = !0;
    if (void 0 !== e) {
      const r = this.constructor,
        o = r._classProperties.get(e) || I;
      r._valueHasChanged(this[e], t, o.hasChanged)
        ? (this._changedProperties.has(e) || this._changedProperties.set(e, t),
          !0 !== o.reflect ||
            16 & this._updateState ||
            (void 0 === this._reflectingProperties &&
              (this._reflectingProperties = new Map()),
            this._reflectingProperties.set(e, o)))
        : (n = !1);
    }
    !this._hasRequestedUpdate && n && this._enqueueUpdate();
  }
  requestUpdate(e, t) {
    return this._requestUpdate(e, t), this.updateComplete;
  }
  async _enqueueUpdate() {
    let e, t;
    this._updateState = 4 | this._updateState;
    const n = this._updatePromise;
    this._updatePromise = new Promise((n, r) => {
      (e = n), (t = r);
    });
    try {
      await n;
    } catch (e) {}
    this._hasConnected ||
      (await new Promise(e => (this._hasConnectedResolver = e)));
    try {
      const e = this.performUpdate();
      null != e && (await e);
    } catch (e) {
      t(e);
    }
    e(!this._hasRequestedUpdate);
  }
  get _hasConnected() {
    return 32 & this._updateState;
  }
  get _hasRequestedUpdate() {
    return 4 & this._updateState;
  }
  get hasUpdated() {
    return 1 & this._updateState;
  }
  performUpdate() {
    this._instanceProperties && this._applyInstanceProperties();
    let e = !1;
    const t = this._changedProperties;
    try {
      (e = this.shouldUpdate(t)), e && this.update(t);
    } catch (t) {
      throw ((e = !1), t);
    } finally {
      this._markUpdated();
    }
    e &&
      (1 & this._updateState ||
        ((this._updateState = 1 | this._updateState), this.firstUpdated(t)),
      this.updated(t));
  }
  _markUpdated() {
    (this._changedProperties = new Map()),
      (this._updateState = -5 & this._updateState);
  }
  get updateComplete() {
    return this._getUpdateComplete();
  }
  _getUpdateComplete() {
    return this._updatePromise;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    void 0 !== this._reflectingProperties &&
      this._reflectingProperties.size > 0 &&
      (this._reflectingProperties.forEach((e, t) =>
        this._propertyToAttribute(t, this[t], e)
      ),
      (this._reflectingProperties = void 0));
  }
  updated(e) {}
  firstUpdated(e) {}
}
UpdatingElement.finalized = !0;
/**
@license
Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
const D =
  "adoptedStyleSheets" in Document.prototype &&
  "replace" in CSSStyleSheet.prototype;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */ (window.litElementVersions || (window.litElementVersions = [])).push(
  "2.2.1"
);
const flattenStyles = e =>
  e.flat
    ? e.flat(1 / 0)
    : (function arrayFlat(e, t = []) {
        for (let n = 0, r = e.length; n < r; n++) {
          const r = e[n];
          Array.isArray(r) ? arrayFlat(r, t) : t.push(r);
        }
        return t;
      })(e);
class LitElement extends UpdatingElement {
  static finalize() {
    super.finalize.call(this),
      (this._styles = this.hasOwnProperty(
        JSCompiler_renameProperty("styles", this)
      )
        ? this._getUniqueStyles()
        : this._styles || []);
  }
  static _getUniqueStyles() {
    const e = this.styles,
      t = [];
    if (Array.isArray(e)) {
      flattenStyles(e)
        .reduceRight((e, t) => (e.add(t), e), new Set())
        .forEach(e => t.unshift(e));
    } else e && t.push(e);
    return t;
  }
  initialize() {
    super.initialize(),
      (this.renderRoot = this.createRenderRoot()),
      window.ShadowRoot &&
        this.renderRoot instanceof window.ShadowRoot &&
        this.adoptStyles();
  }
  createRenderRoot() {
    return this.attachShadow({ mode: "open" });
  }
  adoptStyles() {
    const e = this.constructor._styles;
    0 !== e.length &&
      (void 0 === window.ShadyCSS || window.ShadyCSS.nativeShadow
        ? D
          ? (this.renderRoot.adoptedStyleSheets = e.map(e => e.styleSheet))
          : (this._needsShimAdoptedStyleSheets = !0)
        : window.ShadyCSS.ScopingShim.prepareAdoptedCssText(
            e.map(e => e.cssText),
            this.localName
          ));
  }
  connectedCallback() {
    super.connectedCallback(),
      this.hasUpdated &&
        void 0 !== window.ShadyCSS &&
        window.ShadyCSS.styleElement(this);
  }
  update(e) {
    super.update(e);
    const t = this.render();
    t instanceof TemplateResult &&
      this.constructor.render(t, this.renderRoot, {
        scopeName: this.localName,
        eventContext: this
      }),
      this._needsShimAdoptedStyleSheets &&
        ((this._needsShimAdoptedStyleSheets = !1),
        this.constructor._styles.forEach(e => {
          const t = document.createElement("style");
          (t.textContent = e.cssText), this.renderRoot.appendChild(t);
        }));
  }
  render() {}
}
(LitElement.finalized = !0),
  (LitElement.render = (e, t, n) => {
    if (!n || "object" != typeof n || !n.scopeName)
      throw new Error("The `scopeName` option is required.");
    const r = n.scopeName,
      o = M.has(t),
      i = T && 11 === t.nodeType && !!t.host,
      a = i && !N.has(r),
      s = a ? document.createDocumentFragment() : t;
    if (
      (((e, t, n) => {
        let r = M.get(t);
        void 0 === r &&
          (removeNodes(t, t.firstChild),
          M.set(
            t,
            (r = new NodePart(
              Object.assign({ templateFactory: templateFactory }, n)
            ))
          ),
          r.appendInto(t)),
          r.setValue(e),
          r.commit();
      })(e, s, Object.assign({ templateFactory: shadyTemplateFactory(r) }, n)),
      a)
    ) {
      const e = M.get(s);
      M.delete(s);
      const n = e.value instanceof TemplateInstance ? e.value.template : void 0;
      prepareTemplateStyles(r, s, n),
        removeNodes(t, t.firstChild),
        t.appendChild(s),
        M.set(t, e);
    }
    !o && i && window.ShadyCSS.styleElement(t.host);
  });
const getThemeVar = e => getComputedStyle(document.body).getPropertyValue(e),
  defaultConfig = () => ({
    locale: [],
    header_text: h.config.title || "Home Assistant",
    disabled_mode: !1,
    kiosk_mode: !1,
    compact_mode: !1,
    footer_mode: !1,
    split_mode: !1,
    disable_sidebar: !1,
    hide_header: !1,
    chevrons: !0,
    indicator_top: !1,
    hidden_tab_redirect: !0,
    shadow: !0,
    default_tab_on_refresh: !0,
    background:
      getThemeVar("--ch-background") ||
      getThemeVar("--app-header-background-color") ||
      "var(--primary-color)",
    elements_color:
      getThemeVar("--ch-elements-color") ||
      getThemeVar("--app-header-text-color") ||
      "var(--text-primary-color)",
    menu_color: getThemeVar("--ch-menu-color") || "",
    voice_color: getThemeVar("--ch-voice-color") || "",
    options_color: getThemeVar("--ch-options-color") || "",
    all_tabs_color: getThemeVar("--ch-all-tabs-color") || "",
    notification_dot_color:
      getThemeVar("--ch-notification-dot-color") ||
      getThemeVar("var(--accent-color)") ||
      "#ff9800",
    tab_indicator_color: getThemeVar("--ch-tab-indicator-color") || "",
    active_tab_color: getThemeVar("--ch-active-tab-color") || "",
    tabs_color: [],
    hide_tabs: [],
    show_tabs: [],
    default_tab: "",
    tab_icons: [],
    reverse_tab_direction: !1,
    button_icons: [],
    button_text: [],
    reverse_button_direction: !1,
    menu_dropdown: !1,
    menu_hide: !1,
    voice_dropdown: !1,
    voice_hide: !1,
    options_hide: !1,
    hide_help: !1,
    hide_unused: !1,
    hide_refresh: !1,
    hide_config: !1,
    hide_raw: !1,
    tabs_css: [],
    header_css: "",
    stack_css: "",
    header_text_css: "",
    active_tab_css: "",
    options_list_css: "",
    menu_css: "",
    options_css: "",
    voice_css: "",
    all_tabs_css: "",
    tab_container_css: "",
    view_css: "",
    panel_view_css: "",
    template_variables: "",
    exceptions: [],
    editor_warnings: !0
  });
var z = { version: "Version" },
  H = { docs: "Docs", forums: "Forums" },
  V = {
    add_exception: "Add Exception",
    automatic: "automatic",
    buttons: "Buttons",
    cancel: "Cancel",
    chevrons_tip: "Disable scrolling arrows for tabs.",
    chevrons_title: "Display Tab Chevrons",
    compact_mode_tip: "Make header compact.",
    compact_mode_title: "Compact Mode",
    conditions: "Conditions",
    config: "Config",
    current_user_agent: "Current User Agent",
    current_user: "Current User",
    default_tab: "Default tab",
    disable_sidebar_tip: "Disable sidebar and menu button.",
    disable_sidebar_title: "Disable Sidebar",
    disabled_mode_tip: "Completely disable Custom-Header.",
    disabled_mode_title: "Disabled Mode",
    disabled_template: "Disabled: The current value is a template.",
    editor_warnings_second_title: "Display Editor Warnings & Info",
    editor_warnings_tip: "Toggle editor warnings.",
    editor_warnings_title: "Display this info and warnings section.",
    exceptions: "Exceptions",
    footer_mode_tip: "Turn the header into a footer or reverse split mode.",
    footer_mode_title: "Footer Mode",
    header_text: "Header text.",
    hidden_tab_redirect_tip: "Redirect from hidden tab.",
    hidden_tab_redirect_title: "Hidden Tab Redirect",
    hide_configure_ui_tip: "Hide item in options menu.",
    hide_configure_ui_title: "Hide 'Configure UI'",
    hide_header_tip: "Hide header, but allow swipe out of sidebar.",
    hide_header_title: "Disable Header",
    hide_help_tip: "Hide item in options menu.",
    hide_help_title: "Hide 'Help'",
    hide_raw_editor_tip: "Hide item in options menu.",
    hide_raw_editor_title: "Hide 'Raw Config Editor'",
    hide_tab_list: "Comma-separated list of tab numbers to hide",
    hide_unused_tip: "Hide item in options menu.",
    hide_unused_title: "Hide 'Unused Entities'",
    kiosk_mode_tip: "Hide and disable the header and sidebar",
    kiosk_mode_title: "Kiosk Mode",
    locale_desc: "Locale for default template variables (date/time).",
    media_query: "Media Query",
    menu_dropdown_tip: "Put menu button in options menu.",
    menu_dropdown_title: "Menu in Dropdown Menu",
    menu_hide_tip: "Hide the menu button.",
    menu_hide_title: "Hide Menu Button",
    menu_items: "Menu Items",
    options_hide_tip: "Hide the options button.",
    options_hide_title: "Hide Options Button",
    query_string: "Query String",
    removes_edit_ui: "Removes ability to edit UI.",
    reverse_button_tip: "Reverses all buttons orientation.",
    reverse_button_title: "Reverse Buttons Orientation",
    reverse_tab_tip: "Places tabs on right side in reverse order.",
    reverse_tab_title: "Reverse Tab Direction",
    save_and_reload: "Save and reload",
    save_failed: "Save failed",
    shadow_tip: "Hide header shadows",
    shadow_title: "Shadows",
    show_tab_list: "Comma-separated list of tab numbers to show",
    split_mode_tip: "Split header into one header one footer",
    split_mode_title: "Split Mode",
    tabs_hide: "Hide Tabs",
    tabs_show: "Show Tabs",
    tabs: "Tabs",
    template: "Template",
    user_agent: "User Agent",
    user_list: "User (Seperate multiple users with a comma.)",
    voice_dropdown_tip: "Put voice button in options menu.",
    voice_dropdown_title: "Voice in Dropdown Menu",
    voice_hide_tip: "Hide the voice button.",
    voice_hide_title: "Hide Voice Button",
    warning_already_a_template:
      "Designates items that are already a template and won't be modified by the editor.",
    warning_disable_ch:
      "You can temporaily disable Custom-Header by adding '?disable_ch' to the end of your URL.",
    warning_edit_ui: "Marks items that remove your ability to edit the UI.",
    warning_jinja_info:
      "All text options accept Jinja. Hover over any item for more info.",
    warning_raw_editor_reload:
      "After using the 'Raw Config Editor' you need to reload the page to restore Custom Header."
  },
  U = { common: z, links: H, editor: V },
  G = { version: "Versjon" },
  B = { docs: "Documentasjon", forums: "Forum" },
  W = {
    add_exception: "Legg til unntak",
    automatic: "automatisk",
    buttons: "Brytere",
    cancel: "Avbryt",
    chevrons_tip: "Deaktiver pilene på tab båndet.",
    chevrons_title: "Vis tab piler",
    compact_mode_tip: "Gjør headeren compact.",
    compact_mode_title: "Kompakt modus",
    conditions: "Betingelser",
    config: "Konfigurasjon",
    current_user_agent: "Nåværende User Agent",
    current_user: "Pålogget bruker",
    default_tab: "Standard tab",
    disable_sidebar_tip: "Deaktiver side panelet og meny knappen.",
    disable_sidebar_title: "Deaktiver side panelet",
    disabled_mode_tip: "Deaktiver Custom-Header.",
    disabled_mode_title: "Deaktivert modus",
    disabled_template: "Deaktivert: Nåværende verdi er en mal.",
    editor_warnings_second_title: "Vis editor advarser of informasjon",
    editor_warnings_tip: "Veksle editor advarsler.",
    editor_warnings_title: "Vis denne informasjonen og advarsel seksjoner.",
    exceptions: "Unntak",
    footer_mode_tip: "Gjør header til footer eller reversert split modus.",
    footer_mode_title: "Footer modus",
    header_text: "Header tekst.",
    hidden_tab_redirect_tip: "Omadresser fra gjemt tab.",
    hidden_tab_redirect_title: "Gjemt tab omadresser",
    hide_configure_ui_tip:
      "Gjem 'Konfigurer brukergrensesnitt' in nedtrekksmenyen.",
    hide_configure_ui_title: "Gjem 'Konfigurer brukergrensesnitt'",
    hide_header_tip:
      "Gjem headderen, men tillat å dra inn fra siden for å åpne side panelet",
    hide_help_tip: "Deaktiver header",
    hide_help_title: "Gjem 'Hjelp'",
    hide_raw_editor_tip:
      "Gjem 'Tekstbasert konfigurasjonsredigering' in nedtrekksmenyen.",
    hide_raw_editor_title: "Gjem 'Tekstbasert konfigurasjonsredigering'",
    hide_tab_list: "Komma separert liste over tabber som skal gjemmes",
    hide_unused_tip: "Gjem 'Unused Entities' in nedtrekksmenyen.",
    hide_unused_title: "Gjem 'Unused Entities'",
    kiosk_mode_tip: "Gjem og deaktiver headeren og side panelet.",
    kiosk_mode_title: "Kiosk modus",
    locale_desc: "Locale for standard mal variabler (dato/tip).",
    menu_dropdown_tip: "Plasser meny i nedtrekksmenyen.",
    menu_dropdown_title: "Meny i nedtrekksmenyen",
    menu_hide_tip: "Gjem meny knappen.",
    menu_hide_title: "Gjem meny knappen",
    menu_items: "Meny elementer",
    options_hide_tip: "Gjem alternativer knappen.",
    options_hide_title: "Gjem alternativer knappen",
    removes_edit_ui: "Fjerner muligheten til å redigere brukergrensesnittet.",
    reverse_button_tip: "Reverser alle bryter orienteringer.",
    reverse_button_title: "Reverser bryter orientering",
    reverse_tab_tip: "Plasser tabber på høyre side i reversert rekkefølge.",
    reverse_tab_title: "Reverser tab rettning",
    save_and_reload: "Lagre og last inn på nytt",
    save_failed: "Lagring feilet",
    shadow_tip: "Gjemheader skygger",
    shadow_title: "Skygger",
    show_tab_list: "Komma separert liste over tabber som skal vises",
    split_mode_tip: "Split modus, både header og footer",
    split_mode_title: "Split modus",
    tabs_hide: "Gjem Tabber",
    tabs_show: "Vis Tabber",
    tabs: "Tabber",
    template: "mal",
    user_list: "Bruker (Skill flere brukere med komma.)",
    voice_dropdown_tip: "Plasser stemme i nedtrekksmenyen.",
    voice_dropdown_title: "Stemme i nedtrekksmenyen",
    voice_hide_tip: "Gjem stemme knappen.",
    voice_hide_title: "Gjem stemme knappen",
    warning_already_a_template:
      "Etter å ha brukt 'Tekstbasert konfigurasjonsredigering', må du laste inn siden på nytt for å gjenopprette Custom Header.",
    warning_disable_ch:
      "Du kan deaktivere Custom-Header midlertidig ved å legge til '?disable_ch' på slutten av nettadressen.",
    warning_edit_ui:
      "Markerer elementer som fjerner muligheten til å redigere brukergrensesnittet.",
    warning_jinja_info:
      "Alle tekstalternativer godtar Jinja. Hold musepekeren over et hvilket som helst element for mer informasjon.",
    warning_raw_editor_reload:
      "After using the 'Tekstbasert konfigurasjonsredigering' you need to reload the page to restore Custom Header."
  },
  Y = { common: G, links: B, editor: W };
const $ = {
  en: Object.freeze({
    __proto__: null,
    common: z,
    links: H,
    editor: V,
    default: U
  }),
  nb: Object.freeze({
    __proto__: null,
    common: G,
    links: B,
    editor: W,
    default: Y
  })
};
function localize(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
  const r = e.split(".")[0],
    o = e.split(".")[1],
    i = (localStorage.getItem("selectedLanguage") || "en")
      .replace(/['"]+/g, "")
      .replace("-", "_");
  let a;
  try {
    a = $[i][r][o];
  } catch (e) {
    a = $.en[r][o];
  }
  return (
    void 0 === a && (a = $.en[r][o]),
    "" !== t && "" !== n && (a = a.replace(t, n)),
    a
  );
}
function _templateObject21() {
  const e = _taggedTemplateLiteral([
    '\n      <paper-input\n        label="',
    '"\n        .value="',
    '"\n        .configValue="',
    '"\n        @value-changed="',
    '"\n      >\n      </paper-input>\n      <paper-input\n        label="',
    '"\n        .value="',
    '"\n        .configValue="',
    '"\n        @value-changed="',
    '"\n      >\n      </paper-input>\n      <paper-input\n        label="',
    '"\n        .value="',
    '"\n        .configValue="',
    '"\n        @value-changed="',
    '"\n      >\n      </paper-input>\n      <paper-input\n        label="',
    '"\n        .value="',
    '"\n        .configValue="',
    '"\n        @value-changed="',
    '"\n      >\n      </paper-input>\n      <paper-input\n        label="',
    '"\n        .value="',
    '"\n        .configValue="',
    '"\n        @value-changed="',
    '"\n      >\n      </paper-input>\n      <paper-input\n        label="',
    '"\n        .value="',
    '"\n        .configValue="',
    '"\n        @value-changed="',
    '"\n      >\n      </paper-input>\n      <paper-input\n        label="Device ID"\n        .value="',
    '"\n        .configValue="',
    '"\n        @value-changed="',
    '"\n      >\n      </paper-input>\n    '
  ]);
  return (
    (_templateObject21 = function _templateObject21() {
      return e;
    }),
    e
  );
}
function _templateObject20() {
  const e = _taggedTemplateLiteral([""]);
  return (
    (_templateObject20 = function _templateObject20() {
      return e;
    }),
    e
  );
}
function _templateObject19() {
  const e = _taggedTemplateLiteral([
    "\n      <style>\n        h3,\n        h4 {\n          font-size: 16pt;\n          margin-bottom: 5px;\n          width: 100%;\n        }\n        [closed] {\n          overflow: hidden;\n          height: 52px;\n        }\n        paper-card {\n          margin-top: 10px;\n          width: 100%;\n          transition: all 0.5s ease;\n        }\n        .underline {\n          width: 100%;\n          background: var(--dark-color);\n          color: var(--text-dark-color);\n          padding: 5px;\n          width: calc(100% + 30px);\n          margin-left: calc(0% - 20px);\n        }\n      </style>\n    "
  ]);
  return (
    (_templateObject19 = function _templateObject19() {
      return e;
    }),
    e
  );
}
function _templateObject18() {
  const e = _taggedTemplateLiteral([
    "\n      ",
    '\n      <custom-style>\n        <style is="custom-style">\n          .card-header {\n            margin-top: -5px;\n            @apply --paper-font-headline;\n          }\n          .card-header paper-icon-button {\n            margin-top: -5px;\n            float: right;\n          }\n        </style>\n      </custom-style>\n      <paper-card ?closed=',
    '>\n        <div class="card-content">\n          <div class="card-header">\n            ',
    '\n            <paper-icon-button\n              icon="',
    '"\n              @click="',
    '"\n            >\n            </paper-icon-button>\n            <paper-icon-button ?hidden=',
    ' icon="mdi:delete" @click="',
    '">\n            </paper-icon-button>\n          </div>\n          <h4 class="underline">',
    '</h4>\n          <ch-conditions-editor\n            .conditions="',
    '"\n            @ch-conditions-changed="',
    '"\n          >\n          </ch-conditions-editor>\n          <h4 class="underline">',
    '</h4>\n          <ch-config-editor\n            exception\n            .defaultConfig="',
    '"\n            .config="',
    '"\n            @ch-config-changed="',
    '"\n          >\n          </ch-config-editor>\n        </div>\n      </paper-card>\n    '
  ]);
  return (
    (_templateObject18 = function _templateObject18() {
      return e;
    }),
    e
  );
}
function _templateObject17() {
  const e = _taggedTemplateLiteral([""]);
  return (
    (_templateObject17 = function _templateObject17() {
      return e;
    }),
    e
  );
}
function _templateObject16() {
  const e = _taggedTemplateLiteral([
    "\n      <style>\n        h3,\n        h4 {\n          font-size: 16pt;\n          margin-bottom: 5px;\n          width: 100%;\n        }\n        ha-switch {\n          padding-top: 16px;\n        }\n        iron-icon {\n          padding-right: 5px;\n        }\n        iron-input {\n          max-width: 115px;\n        }\n        .inherited {\n          opacity: 0.4;\n        }\n        .inherited:hover {\n          opacity: 1;\n        }\n        .side-by-side {\n          display: flex;\n          flex-wrap: wrap;\n        }\n        .side-by-side > * {\n          flex: 1;\n          padding-right: 4px;\n          flex-basis: 33%;\n        }\n        .buttons > div {\n          display: flex;\n          align-items: center;\n        }\n        .buttons > div paper-dropdown-menu {\n          flex-grow: 1;\n        }\n        .buttons > div iron-icon {\n          padding-right: 15px;\n          padding-top: 20px;\n          margin-left: -3px;\n        }\n        .buttons > div:nth-of-type(2n) iron-icon {\n          padding-left: 20px;\n        }\n        .warning {\n          background-color: #455a64;\n          padding: 10px;\n          color: #ffcd4c;\n          border-radius: 5px;\n        }\n        .alert {\n          color: #ff9800;\n          padding-right: 0;\n          margin-right: -5px;\n          padding-left: 7px;\n        }\n        [closed] {\n          overflow: hidden;\n          height: 52px;\n        }\n        paper-card {\n          margin-top: 10px;\n          width: 100%;\n          transition: all 0.5s ease;\n        }\n        .underline {\n          width: 100%;\n          background: var(--dark-color);\n          color: var(--text-dark-color);\n          padding: 5px;\n          width: calc(100% + 30px);\n          margin-left: calc(0% - 20px);\n        }\n      </style>\n    "
  ]);
  return (
    (_templateObject16 = function _templateObject16() {
      return e;
    }),
    e
  );
}
function _templateObject15() {
  const e = _taggedTemplateLiteral([
    '\n            <h4 class="underline">Main Config</h4>\n          '
  ]);
  return (
    (_templateObject15 = function _templateObject15() {
      return e;
    }),
    e
  );
}
function _templateObject14() {
  const e = _taggedTemplateLiteral([
    '\n                  <br />\n                  <div class="warning">\n                    <p style="padding: 5px; margin: 0;">\n                      ',
    '\n                    </p>\n                    <p style="padding: 5px; margin: 0;">\n                      ',
    '\n                    </p>\n                    <br />\n                    <p style="padding: 5px; margin: 0;">\n                      <ha-icon style="padding-right: 3px;" icon="mdi:alpha-t-box-outline"></ha-icon>\n                      ',
    '\n                      <br /><ha-icon style="padding-right: 3px;" icon="mdi:alert-box-outline"></ha-icon> ',
    '<br />\n                    </p>\n                    <br />\n                    <p style="padding: 5px; margin: 0;">\n                      ',
    "\n                    </p>\n                  </div>\n                "
  ]);
  return (
    (_templateObject14 = function _templateObject14() {
      return e;
    }),
    e
  );
}
function _templateObject13() {
  const e = _taggedTemplateLiteral([
    '\n            <h1 style="margin-top:-20px;margin-bottom:0;" class="underline">\n              Custom Header\n            </h1>\n            <h4 style="margin-top:-5px;padding-top:10px;font-size:12pt;" class="underline">\n              <a href="https://maykar.github.io/custom-header/" target="_blank">\n                <ha-icon icon="mdi:help-circle" style="margin-top:-5px;"> </ha-icon>\n                ',
    '&nbsp;&nbsp;&nbsp;</a\n              >\n              <a href="https://github.com/maykar/custom-header" target="_blank">\n                <ha-icon icon="mdi:github-circle" style="margin-top:-5px;"> </ha-icon>\n                GitHub&nbsp;&nbsp;&nbsp;</a\n              >\n              <a href="https://community.home-assistant.io/t/custom-header/" target="_blank">\n                <ha-icon icon="hass:home-assistant" style="margin-top:-5px;"> </ha-icon>\n                ',
    "</a\n              >\n            </h4>\n            ",
    "\n            ",
    "\n          "
  ]);
  return (
    (_templateObject13 = function _templateObject13() {
      return e;
    }),
    e
  );
}
function _templateObject12() {
  const e = _taggedTemplateLiteral([
    '\n      <custom-style>\n        <style is="custom-style">\n          a {\n            color: var(--text-dark-color);\n            text-decoration: none;\n          }\n          .card-header {\n            margin-top: -5px;\n            @apply --paper-font-headline;\n          }\n          .card-header paper-icon-button {\n            margin-top: -5px;\n            float: right;\n          }\n        </style>\n      </custom-style>\n      ',
    "\n      ",
    "\n      ",
    '\n      <div style="padding-bottom:20px;" class="side-by-side">\n        ',
    "\n        ",
    "\n        ",
    "\n        ",
    "\n        ",
    "\n        ",
    "\n        ",
    "\n        ",
    "\n        ",
    "\n        ",
    "\n        ",
    '\n      </div>\n      <hr />\n      <div class="side-by-side">\n        <paper-input\n          style="padding: 10px 10px 0 10px;"\n          class="',
    '"\n          label="',
    '"\n          .value="',
    '"\n          .configValue="',
    '"\n          @value-changed="',
    '"\n        >\n        </paper-input>\n        <paper-input\n          placeholder="',
    '"\n          style="padding: 10px 10px 0 10px;"\n          class="',
    '"\n          label="',
    '"\n          .value="',
    '"\n          .configValue="',
    '"\n          @value-changed="',
    '"\n        >\n        </paper-input>\n      </div>\n      <h4 class="underline">',
    '</h4>\n      <div class="side-by-side">\n        ',
    "\n        ",
    "\n        ",
    "\n        ",
    '\n      </div>\n      <h4 class="underline">',
    '</h4>\n      <div style="padding-bottom:20px;" class="side-by-side">\n        ',
    "\n        ",
    "\n        ",
    "\n        ",
    "\n        ",
    "\n        ",
    '\n      </div>\n      <h4 class="underline">',
    '</h4>\n      <paper-dropdown-menu id="tabs" @value-changed="',
    '">\n        <paper-listbox slot="dropdown-content" .selected="',
    '">\n          <paper-item>',
    "</paper-item>\n          <paper-item>",
    '</paper-item>\n        </paper-listbox>\n      </paper-dropdown-menu>\n      <div class="side-by-side">\n        <div id="show" style="display:',
    '">\n          <paper-input\n            class="',
    '"\n            label="',
    ':"\n            .value="',
    '"\n            .configValue="',
    '"\n            @value-changed="',
    '"\n          >\n          </paper-input>\n        </div>\n        <div id="hide" style="display:',
    '">\n          <paper-input\n            class="',
    '"\n            label="',
    ':"\n            .value="',
    '"\n            .configValue="',
    '"\n            @value-changed="',
    '"\n          >\n          </paper-input>\n        </div>\n        <paper-input\n          class="',
    '"\n          label="',
    ':"\n          .value="',
    '"\n          .configValue="',
    '"\n          @value-changed="',
    '"\n        >\n        </paper-input>\n        ',
    "\n      </div>\n    "
  ]);
  return (
    (_templateObject12 = function _templateObject12() {
      return e;
    }),
    e
  );
}
function _templateObject11() {
  const e = _taggedTemplateLiteral([
    '\n      <ha-switch\n        class="',
    '"\n        ?checked="',
    '"\n        .configValue="',
    '"\n        @change="',
    '"\n        title=',
    "\n        ?disabled=",
    "\n      >\n        ",
    " ",
    "\n        ",
    "\n      </ha-switch>\n    "
  ]);
  return (
    (_templateObject11 = function _templateObject11() {
      return e;
    }),
    e
  );
}
function _templateObject10() {
  const e = _taggedTemplateLiteral([
    '\n      <iron-icon icon="mdi:alert-box-outline" class="alert" title="',
    '"></iron-icon>\n    '
  ]);
  return (
    (_templateObject10 = function _templateObject10() {
      return e;
    }),
    e
  );
}
function _templateObject9() {
  const e = _taggedTemplateLiteral([
    '\n      <iron-icon\n        icon="mdi:alpha-t-box-outline"\n        class="alert"\n        title="',
    '"\n      ></iron-icon>\n    '
  ]);
  return (
    (_templateObject9 = function _templateObject9() {
      return e;
    }),
    e
  );
}
function _templateObject8() {
  const e = _taggedTemplateLiteral([
    "\n      <style>\n        h3,\n        h4 {\n          font-size: 16pt;\n          margin-bottom: 5px;\n          width: 100%;\n        }\n        .toggle-button {\n          margin: 4px;\n          background-color: transparent;\n          color: var(--primary-color);\n        }\n        .title_control {\n          color: var(--text-dark-color);\n          font-weight: bold;\n          font-size: 22px;\n          float: right;\n          cursor: pointer;\n          margin: -10px -5px -5px -5px;\n        }\n        .user_agent {\n          display: block;\n          margin-left: auto;\n          margin-right: auto;\n          padding: 5px;\n          border: 0;\n          resize: none;\n          width: 100%;\n        }\n        .underline {\n          width: 100%;\n          background: var(--dark-color);\n          color: var(--text-dark-color);\n          padding: 5px;\n          width: calc(100% + 30px);\n          margin-left: calc(0% - 20px);\n        }\n      </style>\n    "
  ]);
  return (
    (_templateObject8 = function _templateObject8() {
      return e;
    }),
    e
  );
}
function _templateObject7() {
  const e = _taggedTemplateLiteral([
    '\n      <mwc-button raised @click="',
    '">',
    "</mwc-button>\n    "
  ]);
  return (
    (_templateObject7 = function _templateObject7() {
      return e;
    }),
    e
  );
}
function _templateObject6() {
  const e = _taggedTemplateLiteral([
    '\n      <mwc-button raised @click="',
    '">',
    "</mwc-button>\n    "
  ]);
  return (
    (_templateObject6 = function _templateObject6() {
      return e;
    }),
    e
  );
}
function _templateObject5() {
  const e = _taggedTemplateLiteral(["\n              ", "\n            "]);
  return (
    (_templateObject5 = function _templateObject5() {
      return e;
    }),
    e
  );
}
function _templateObject4() {
  const e = _taggedTemplateLiteral(["\n              ", "\n            "]);
  return (
    (_templateObject4 = function _templateObject4() {
      return e;
    }),
    e
  );
}
function _templateObject3() {
  const e = _taggedTemplateLiteral([
    '\n              <ch-exception-editor\n                .config="',
    '"\n                .exception="',
    '"\n                .index="',
    '"\n                @ch-exception-changed="',
    '"\n                @ch-exception-delete="',
    '"\n              >\n              </ch-exception-editor>\n            '
  ]);
  return (
    (_templateObject3 = function _templateObject3() {
      return e;
    }),
    e
  );
}
function _templateObject2() {
  const e = _taggedTemplateLiteral([
    '\n      <div @click="',
    '" class="title_control">\n        X\n      </div>\n      ',
    '\n      <ch-config-editor\n        .defaultConfig="',
    '"\n        .config="',
    '"\n        @ch-config-changed="',
    '"\n      >\n      </ch-config-editor>\n      <h4 class="underline">',
    "</h4>\n      <br />\n      ",
    '\n      <br />\n      <mwc-button @click="',
    '">',
    '</mwc-button>\n      <h4 class="underline">',
    "</h4>\n      <br />\n      <b>Name:</b> ",
    "<br />\n      <b>ID:</b> ",
    '\n      <h4 class="underline">Device ID</h4>\n      <br />\n      ',
    '\n      <br />\n      <h4 class="underline">',
    "</h4>\n      <br />\n      ",
    '\n      <br />\n      <h4\n        style="background:var(--paper-card-background-color);\n          margin-bottom:-20px;"\n        class="underline"\n      >\n        ',
    "\n        ",
    "\n      </h4>\n    "
  ]);
  return (
    (_templateObject2 = function _templateObject2() {
      return e;
    }),
    e
  );
}
function _templateObject() {
  const e = _taggedTemplateLiteral([""]);
  return (
    (_templateObject = function _templateObject() {
      return e;
    }),
    e
  );
}
customElements.define(
  "custom-header-editor",
  class CustomHeaderEditor extends LitElement {
    static get properties() {
      return { _config: {} };
    }
    firstUpdated() {
      (this.defaultConfig = defaultConfig()),
        (this._lovelace = F()),
        (this.deepcopy = this.deepcopy.bind(this)),
        (this._config = this._lovelace.config.custom_header
          ? this.deepcopy(this._lovelace.config.custom_header)
          : {});
    }
    render() {
      return this._config && this._lovelace
        ? html(
            _templateObject2(),
            this._close,
            this.renderStyle(),
            this.defaultConfig,
            this._config,
            this._configChanged,
            localize("editor.exceptions"),
            this._config.exceptions
              ? this._config.exceptions.map((e, t) =>
                  html(
                    _templateObject3(),
                    this._config,
                    e,
                    t,
                    this._exceptionChanged,
                    this._exceptionDelete
                  )
                )
              : "",
            this._addException,
            localize("editor.add_exception"),
            localize("editor.current_user"),
            d.user.name,
            d.user.id,
            g,
            localize("editor.current_user_agent"),
            navigator.userAgent,
            this.exception ? "" : html(_templateObject4(), this._save_button),
            this.exception ? "" : html(_templateObject5(), this._cancel_button)
          )
        : html(_templateObject());
    }
    _close() {
      const e = this.parentNode.parentNode.parentNode.querySelector("editor");
      this.parentNode.parentNode.parentNode.removeChild(e);
    }
    _save() {
      for (const e in this._config)
        this._config[e] == this.defaultConfig[e] && delete this._config[e];
      const e = _objectSpread2(
        {},
        this._lovelace.config,
        {},
        { custom_header: this._config }
      );
      try {
        this._lovelace.saveConfig(e).then(() => {
          window.location.href = window.location.href;
        });
      } catch (e) {
        alert("".concat(localize("editor.save_failed"), ": ").concat(e));
      }
    }
    get _save_button() {
      const e = localize("editor.save_and_reload");
      return html(_templateObject6(), this._save, e);
    }
    get _cancel_button() {
      return html(_templateObject7(), this._close, localize("editor.cancel"));
    }
    _addException() {
      let e;
      this._config.exceptions
        ? ((e = this._config.exceptions.slice(0)),
          e.push({ conditions: {}, config: {} }))
        : (e = [{ conditions: {}, config: {} }]),
        (this._config = _objectSpread2({}, this._config, { exceptions: e })),
        A(this, "config-changed", { config: this._config });
    }
    _configChanged(e) {
      let { detail: t } = e;
      this._config &&
        ((this._config = _objectSpread2({}, this._config, {}, t.config)),
        A(this, "config-changed", { config: this._config }));
    }
    _exceptionChanged(e) {
      if (!this._config) return;
      const t = e.target.index,
        n = this._config.exceptions.slice(0);
      n[t] = e.detail.exception;
      for (const e of n)
        for (const t in e.config)
          this._config[t] == e.config[t]
            ? delete e.config[t]
            : this._config[t] ||
              this.defaultConfig[t] != e.config[t] ||
              delete e.config[t];
      (this._config = _objectSpread2({}, this._config, { exceptions: n })),
        A(this, "config-changed", { config: this._config });
    }
    _exceptionDelete(e) {
      if (!this._config) return;
      const t = e.target,
        n = this._config.exceptions.slice(0);
      n.splice(t.index, 1),
        (this._config = _objectSpread2({}, this._config, { exceptions: n })),
        A(this, "config-changed", { config: this._config }),
        this.requestUpdate();
    }
    deepcopy(e) {
      if (!e || "object" != typeof e) return e;
      if ("[object Date]" == Object.prototype.toString.call(e))
        return new Date(e.getTime());
      if (Array.isArray(e)) return e.map(this.deepcopy);
      const t = {};
      return (
        Object.keys(e).forEach(n => {
          t[n] = this.deepcopy(e[n]);
        }),
        t
      );
    }
    renderStyle() {
      return html(_templateObject8());
    }
  }
);
customElements.define(
  "ch-config-editor",
  class ChConfigEditor extends LitElement {
    static get properties() {
      return { defaultConfig: {}, config: {}, exception: {}, _closed: {} };
    }
    constructor() {
      super(),
        (this.buttonOptions = ["show", "hide", "clock", "overflow"]),
        (this.overflowOptions = ["show", "hide", "clock"]),
        (this.swipeAnimation = ["none", "swipe", "fade", "flip"]);
    }
    get _clock() {
      return (
        "clock" == this.getConfig("menu") ||
        "clock" == this.getConfig("voice") ||
        "clock" == this.getConfig("options")
      );
    }
    getConfig(e) {
      return void 0 !== this.config[e] ? this.config[e] : this.defaultConfig[e];
    }
    templateExists(e) {
      return !(
        "string" != typeof e ||
        (!e.includes("{{") && !e.includes("{%"))
      );
    }
    haSwitch(e, t, n, r, o, i) {
      const a = html(_templateObject9(), localize("editor.disabled_template")),
        s = html(_templateObject10(), localize("editor.removes_edit_ui"));
      return html(
        _templateObject11(),
        this.exception && void 0 === this.config[e]
          ? "inherited slotted"
          : "slotted",
        !1 !== this.getConfig(e) && !this.templateExists(this.getConfig(e)),
        e,
        this._valueChanged,
        o,
        this.templateExists(this.getConfig(e)),
        r,
        this.templateExists(this.getConfig(e)) && t ? a : "",
        n ? s : ""
      );
    }
    render() {
      return (
        (this.exception = void 0 !== this.exception && !1 !== this.exception),
        html(
          _templateObject12(),
          this.exception
            ? ""
            : html(
                _templateObject13(),
                localize("links.docs"),
                localize("links.forums"),
                this.getConfig("editor_warnings")
                  ? html(
                      _templateObject14(),
                      localize("editor.warning_disable_ch"),
                      localize("editor.warning_raw_editor_reload"),
                      localize("editor.warning_already_a_template"),
                      localize("editor.warning_edit_ui"),
                      localize("editor.warning_jinja_info")
                    )
                  : "",
                !this.exception && this.getConfig("editor_warnings")
                  ? this.haSwitch(
                      "editor_warnings",
                      !1,
                      !1,
                      localize("editor.editor_warnings_title"),
                      localize("editor.editor_warnings_tip")
                    )
                  : ""
              ),
          this.renderStyle(),
          this.getConfig("editor_warnings") && !this.exception
            ? html(_templateObject15())
            : "",
          this.haSwitch(
            "disabled_mode",
            !0,
            !1,
            localize("editor.disabled_mode_title"),
            localize("editor.disabled_mode_tip")
          ),
          this.haSwitch(
            "footer_mode",
            !0,
            !1,
            localize("editor.footer_mode_title"),
            localize("editor.footer_mode_tip")
          ),
          this.haSwitch(
            "compact_mode",
            !0,
            !1,
            localize("editor.compact_mode_title"),
            localize("editor.compact_mode_tip")
          ),
          this.haSwitch(
            "split_mode",
            !0,
            !1,
            localize("editor.split_mode_title"),
            localize("editor.split_mode_tip")
          ),
          this.haSwitch(
            "kiosk_mode",
            !0,
            !0,
            localize("editor.kiosk_mode_title"),
            localize("editor.kiosk_mode_tip")
          ),
          this.haSwitch(
            "disable_sidebar",
            !0,
            !1,
            localize("editor.disable_sidebar_title"),
            localize("editor.disable_sidebar_tip")
          ),
          this.haSwitch(
            "hide_header",
            !0,
            !1,
            localize("editor.hide_header_title"),
            localize("editor.hide_header_tip")
          ),
          this.haSwitch(
            "chevrons",
            !0,
            !1,
            localize("editor.chevrons_title"),
            localize("editor.chevrons_tip")
          ),
          this.haSwitch(
            "hidden_tab_redirect",
            !0,
            !1,
            localize("editor.hidden_tab_redirect_title"),
            localize("editor.hidden_tab_redirect_tip")
          ),
          this.haSwitch(
            "shadow",
            !0,
            !1,
            localize("editor.shadow_title"),
            localize("editor.shadow_tip")
          ),
          this.exception || this.getConfig("editor_warnings")
            ? ""
            : this.haSwitch(
                "editor_warnings",
                !1,
                !1,
                localize("editor.editor_warnings_second_title"),
                localize("editor.editor_warnings_tip")
              ),
          this.exception && void 0 === this.config.header_text
            ? "inherited slotted"
            : "slotted",
          localize("editor.header_text"),
          this.getConfig("header_text"),
          "header_text",
          this._valueChanged,
          localize("editor.automatic"),
          this.exception && void 0 === this.config.locale
            ? "inherited slotted"
            : "slotted",
          localize("editor.locale_desc"),
          this.getConfig("locale"),
          "locale",
          this._valueChanged,
          localize("editor.menu_items"),
          this.haSwitch(
            "hide_config",
            !0,
            !0,
            localize("editor.hide_configure_ui_title"),
            localize("editor.hide_configure_ui_tip")
          ),
          this.haSwitch(
            "hide_raw",
            !0,
            !0,
            localize("editor.hide_raw_editor_title"),
            localize("editor.hide_raw_editor_tip")
          ),
          this.haSwitch(
            "hide_help",
            !0,
            !1,
            localize("editor.hide_help_title"),
            localize("editor.hide_help_tip")
          ),
          this.haSwitch(
            "hide_unused",
            !0,
            !1,
            localize("editor.hide_unused_title"),
            localize("editor.hide_unused_tip")
          ),
          localize("editor.buttons"),
          this.haSwitch(
            "menu_hide",
            !0,
            !1,
            localize("editor.menu_hide_title"),
            localize("editor.menu_hide_tip")
          ),
          this.haSwitch(
            "menu_dropdown",
            !0,
            !1,
            localize("editor.menu_dropdown_title"),
            localize("editor.menu_dropdown_tip")
          ),
          this.haSwitch(
            "voice_hide",
            !0,
            !1,
            localize("editor.voice_hide_title"),
            localize("editor.voice_hide_tip")
          ),
          this.haSwitch(
            "voice_dropdown",
            !0,
            !1,
            localize("editor.voice_dropdown_title"),
            localize("editor.voice_dropdown_tip")
          ),
          this.haSwitch(
            "options_hide",
            !0,
            !0,
            localize("editor.options_hide_title"),
            localize("editor.options_hide_tip")
          ),
          this.haSwitch(
            "reverse_button_direction",
            !0,
            !1,
            localize("editor.reverse_button_title"),
            localize("editor.reverse_button_tip")
          ),
          localize("editor.tabs"),
          this._tabVisibility,
          this.getConfig("show_tabs").length > 0 ? "1" : "0",
          localize("editor.tabs_hide"),
          localize("editor.tabs_show"),
          this.getConfig("show_tabs").length > 0 ? "initial" : "none",
          this.exception && void 0 === this.config.show_tabs
            ? "inherited slotted"
            : "slotted",
          localize("editor.show_tab_list"),
          this.getConfig("show_tabs"),
          "show_tabs",
          this._valueChanged,
          this.getConfig("show_tabs").length > 0 ? "none" : "initial",
          this.exception && void 0 === this.config.hide_tabs
            ? "inherited slotted"
            : "slotted",
          localize("editor.hide_tab_list"),
          this.getConfig("hide_tabs"),
          "hide_tabs",
          this._valueChanged,
          this.exception && void 0 === this.config.default_tab
            ? "inherited slotted"
            : "slotted",
          localize("editor.default_tab"),
          this.getConfig("default_tab"),
          "default_tab",
          this._valueChanged,
          this.haSwitch(
            "reverse_tab_direction",
            !0,
            !1,
            localize("editor.reverse_tab_title"),
            localize("editor.reverse_tab_tip")
          )
        )
      );
    }
    _toggleCard() {
      (this._closed = !this._closed), A(this, "iron-resize");
    }
    _tabVisibility() {
      const e = this.shadowRoot.querySelector("#show"),
        t = this.shadowRoot.querySelector("#hide");
      "Hide Tabs" == this.shadowRoot.querySelector("#tabs").value
        ? ((e.style.display = "none"), (t.style.display = "initial"))
        : ((t.style.display = "none"), (e.style.display = "initial"));
    }
    _valueChanged(e) {
      this.config &&
        (e.target.configValue &&
          ("" === e.target.value
            ? delete this.config[e.target.configValue]
            : (this.config = _objectSpread2({}, this.config, {
                [e.target.configValue]:
                  void 0 !== e.target.checked
                    ? e.target.checked
                    : e.target.value
              }))),
        A(this, "ch-config-changed", { config: this.config }));
    }
    renderStyle() {
      return html(_templateObject16());
    }
  }
);
customElements.define(
  "ch-exception-editor",
  class ChExceptionEditor extends LitElement {
    static get properties() {
      return { config: {}, exception: {}, _closed: {} };
    }
    constructor() {
      super(), (this._closed = !0);
    }
    render() {
      return this.exception
        ? html(
            _templateObject18(),
            this.renderStyle(),
            this._closed,
            Object.values(this.exception.conditions)
              .join(", ")
              .substring(0, 40) || "New Exception",
            this._closed ? "mdi:chevron-down" : "mdi:chevron-up",
            this._toggleCard,
            this._closed,
            this._deleteException,
            localize("editor.conditions"),
            this.exception.conditions,
            this._conditionsChanged,
            localize("editor.config"),
            _objectSpread2({}, this.defaultConfig, {}, this.config),
            this.exception.config,
            this._configChanged
          )
        : html(_templateObject17());
    }
    renderStyle() {
      return html(_templateObject19());
    }
    _toggleCard() {
      (this._closed = !this._closed), A(this, "iron-resize");
    }
    _deleteException() {
      A(this, "ch-exception-delete");
    }
    _conditionsChanged(e) {
      let { detail: t } = e;
      if (!this.exception) return;
      const n = _objectSpread2({}, this.exception, {
        conditions: t.conditions
      });
      A(this, "ch-exception-changed", { exception: n });
    }
    _configChanged(e) {
      if ((e.stopPropagation(), !this.exception)) return;
      const t = _objectSpread2({}, this.exception, { config: e.detail.config });
      A(this, "ch-exception-changed", { exception: t });
    }
  }
);
customElements.define(
  "ch-conditions-editor",
  class ChConditionsEditor extends LitElement {
    static get properties() {
      return { conditions: {} };
    }
    get _user() {
      return this.conditions.user || "";
    }
    get _user_agent() {
      return this.conditions.user_agent || "";
    }
    get _media_query() {
      return this.conditions.media_query || "";
    }
    get _query_string() {
      return this.conditions.query_string || "";
    }
    get _template() {
      return this.conditions.template || "";
    }
    get _tab() {
      return this.conditions.tab || "";
    }
    get _device_id() {
      return this.conditions.device_id || "";
    }
    render() {
      return this.conditions
        ? html(
            _templateObject21(),
            localize("editor.user_list"),
            this._user,
            "user",
            this._valueChanged,
            localize("editor.user_agent"),
            this._user_agent,
            "user_agent",
            this._valueChanged,
            localize("editor.media_query"),
            this._media_query,
            "media_query",
            this._valueChanged,
            localize("editor.query_string"),
            this._query_string,
            "query_string",
            this._valueChanged,
            localize("editor.template"),
            this._template,
            "template",
            this._valueChanged,
            localize("editor.tabs"),
            this._tab,
            "tab",
            this._valueChanged,
            this._device_id,
            "device_id",
            this._valueChanged
          )
        : html(_templateObject20());
    }
    _valueChanged(e) {
      if (!this.conditions) return;
      const t = e.target;
      this["_".concat(t.configValue)] !== t.value &&
        (t.configValue &&
          ("" === t.value
            ? delete this.conditions[t.configValue]
            : (this.conditions = _objectSpread2({}, this.conditions, {
                [t.configValue]: t.value
              }))),
        A(this, "ch-conditions-changed", { conditions: this.conditions }));
    }
  }
);
const hideMenuItems = (e, t, n) => {
    const localized = (e, t) => {
      let n;
      const r = document.querySelector("home-assistant").hass;
      return (
        (n =
          "raw_editor" === t
            ? r.localize("ui.panel.lovelace.editor.menu.raw_editor")
            : "unused_entities" == t
            ? r.localize("ui.panel.lovelace.unused_entities.title")
            : r.localize("ui.panel.lovelace.menu.".concat(t))),
        e.innerHTML.includes(n) || e.getAttribute("aria-label") == n
      );
    };
    (n
      ? document
          .querySelector("home-assistant")
          .shadowRoot.querySelector("home-assistant-main")
          .shadowRoot.querySelector("ha-panel-lovelace")
          .shadowRoot.querySelector("hui-root")
          .shadowRoot.querySelector("app-toolbar > paper-menu-button")
      : t.options
    )
      .querySelector("paper-listbox")
      .querySelectorAll("paper-item")
      .forEach(t => {
        (e.hide_help && localized(t, "help")) ||
        (e.hide_unused && localized(t, "unused_entities")) ||
        (e.hide_refresh && localized(t, "refresh")) ||
        (e.hide_config && localized(t, "configure_ui")) ||
        (e.hide_raw && localized(t, "raw_editor"))
          ? (t.style.display = "none")
          : (t.style.display = "");
      });
  },
  buttonToOverflow = (e, t, n, r) => {
    n.options.querySelector("#".concat(e.toLowerCase(), "_dropdown")) &&
      n.options
        .querySelector("#".concat(e.toLowerCase(), "_dropdown"))
        .remove();
    const o = document.createElement("paper-item"),
      i = document.createElement("ha-icon");
    o.setAttribute("id", "".concat(e.toLowerCase(), "_dropdown")),
      i.setAttribute("icon", r.button_icons[e.toLowerCase()] || t),
      (i.style.pointerEvents = "none"),
      r.reverse_button_direction
        ? (i.style.marginLeft = "auto")
        : (i.style.marginRight = "auto"),
      (o.innerText = e),
      o.appendChild(i),
      o.addEventListener("click", () => {
        n[e.toLowerCase()].dispatchEvent(
          new MouseEvent("click", { bubbles: !1, cancelable: !1 })
        );
      }),
      i.addEventListener("click", () => {
        n[e.toLowerCase()].dispatchEvent(
          new MouseEvent("click", { bubbles: !1, cancelable: !1 })
        );
      }),
      n.options.querySelector("paper-listbox").appendChild(o);
  },
  insertSettings = () => {
    function insertAfter(e, t) {
      t.parentNode.insertBefore(e, t.nextSibling);
    }
    if ("storage" === h.mode) {
      const e = document.createElement("paper-item");
      e.setAttribute("id", "ch_settings"),
        e.addEventListener("click", () =>
          (() => {
            if (
              (window.scrollTo(0, 0), !p.querySelector("ha-app-layout editor"))
            ) {
              const e = document.createElement("editor"),
                t = document.createElement("div");
              (t.style.cssText =
                "\n      padding: 20px;\n      max-width: 600px;\n      margin: 15px auto;\n      background: var(--paper-card-background-color);\n      border: 6px solid var(--paper-card-background-color);\n    "),
                (e.style.cssText =
                  "\n      width: 100%;\n      min-height: 100%;\n      box-sizing: border-box;\n      position: absolute;\n      background: var(--background-color, grey);\n      z-index: 100;\n      padding: 5px;\n    "),
                p
                  .querySelector("ha-app-layout")
                  .insertBefore(e, p.querySelector("#view")),
                e.appendChild(t),
                t.appendChild(document.createElement("custom-header-editor"));
            }
          })()
        ),
        (e.innerHTML = "Custom Header");
      const t = _.options
          .querySelector("paper-listbox")
          .querySelectorAll("paper-item"),
        n = f.options
          .querySelector("paper-listbox")
          .querySelectorAll("paper-item");
      _.options.querySelector("paper-listbox").querySelector("#ch_settings") ||
        insertAfter(e, t[t.length - 1]),
        f.options
          .querySelector("paper-listbox")
          .querySelector("#ch_settings") || insertAfter(e, n[n.length - 1]);
    }
  },
  kioskMode = (e, t, n) => {
    if (window.location.href.includes("disable_ch")) return;
    let r = document.createElement("style");
    r.setAttribute("id", "ch_header_style"),
      t ||
        (r.innerHTML +=
          "\n        #drawer {\n          display: none;\n        }\n      "),
      e ||
        (r.innerHTML +=
          "\n        ch-header {\n          display: none;\n        }\n        ch-header-bottom {\n          display: none;\n        }\n        app-header {\n          display: none;\n        }\n        hui-view {\n          padding-top: 100px;\n        }\n        hui-view, hui-panel-view {\n          min-height: calc(100vh + 96px);\n          margin-top: -96px;\n        }\n      ");
    const o = p.querySelector("#ch_header_style");
    (o && o.innerText == r.innerHTML) || (p.appendChild(r), o && o.remove()),
      n.hide_tabs &&
        n.hide_tabs.forEach(e => {
          r.innerHTML += "\n        paper-tab:nth-child(".concat(
            tabIndexByName(e) + 1,
            ") {\n          display: none;\n        }\n      "
          );
        }),
      t ||
        ((f.drawer.style.display = "none"),
        f.sidebar.main.shadowRoot.querySelector("#ch_sidebar_style") ||
          ((r = document.createElement("style")),
          r.setAttribute("id", "ch_sidebar_style"),
          (r.innerHTML = ":host(:not([expanded])) {width: 0px !important;}"),
          f.sidebar.main.shadowRoot.appendChild(r)),
        f.main.shadowRoot.querySelector("#ch_sidebar_style") ||
          ((r = document.createElement("style")),
          r.setAttribute("id", "ch_sidebar_style"),
          (r.innerHTML = ":host {--app-drawer-width: 0px !important;}"),
          f.main.shadowRoot.appendChild(r))),
      window.dispatchEvent(new Event("resize"));
  },
  removeKioskMode = () => {
    f.drawer.style.display = "";
    let e = f.main.shadowRoot.querySelector("#ch_sidebar_style");
    e && e.remove(),
      (e = f.sidebar.main.shadowRoot.querySelector("#ch_sidebar_style")),
      e && e.remove(),
      (f.drawer.style.display = "");
  },
  insertStyleTags = e => {
    let t = 48;
    const n = e.split_mode ? _.bottom : _;
    e.compact_mode ||
      (e.reverse_button_direction
        ? ((_.container.querySelector("#contentContainer").dir = "ltr"),
          (_.container.querySelector("#contentContainer").style.textAlign =
            "right"))
        : ((_.container.querySelector("#contentContainer").style.textAlign =
            ""),
          (_.container.querySelector("#contentContainer").dir = "")),
      (_.container.querySelector("#contentContainer").innerHTML =
        e.header_text),
      (t = n.tabs.length ? 96 : 48));
    let r = document.createElement("style");
    r.setAttribute("id", "ch_header_style"),
      (r.innerHTML = "\n      ch-header {\n        padding-left: 10px;\n        padding-right: 10px;\n        box-sizing: border-box;\n        display:flex;\n        justify-content: center;\n        font: 400 20px Roboto, sans-serif;\n        background: "
        .concat(e.background || "var(--primary-color)", ";\n        color: ")
        .concat(
          e.elements_color || "var(--text-primary-color)",
          ";\n        margin-bottom: 0px;\n        margin-top: "
        )
        .concat(
          e.footer_mode ? "4px;" : "0px",
          ";\n        position: sticky;\n        position: -webkit-sticky;\n        "
        )
        .concat(
          e.footer_mode ? "z-index: 99; bottom: 0px;" : "top: 0px;",
          "\n        "
        )
        .concat(
          e.header_css ? e.header_css : "",
          "\n        transition: box-shadow 0.3s ease-in-out;\n        "
        )
        .concat(
          e.shadow && (e.footer_mode || e.split_mode)
            ? "box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.2)"
            : "",
          "\n      }\n      ch-header-bottom {\n        z-index: 99;\n        padding-left: 10px;\n        padding-right: 10px;\n        box-sizing: border-box;\n        display:flex;\n        justify-content: center;\n        font: 400 20px Roboto, sans-serif;\n        background: "
        )
        .concat(e.background || "var(--primary-color)", ";\n        color: ")
        .concat(
          e.elements_color || "var(--text-primary-color)",
          ";\n        margin-bottom: 0px;\n        margin-top: 0px;\n        position: sticky;\n        position: -webkit-sticky;\n        "
        )
        .concat(e.footer_mode ? "top: 0px;" : "bottom: 0px;", "\n        ")
        .concat(e.header_css ? e.header_css : "", "\n        ")
        .concat(
          e.shadow ? "box-shadow: 0px 0px 5px 5px rgba(0,0,0,0.2)" : "",
          "\n      }\n      ch-stack {\n        flex-direction: column;\n        width: 100%;\n        margin-left: 9px;\n        margin-right: 9px;\n        "
        )
        .concat(
          e.stack_css ? e.stack_css : "",
          "\n      }\n      ch-stack-bottom {\n        flex-direction: column;\n        width: 100%;\n        margin-left: 9px;\n        margin-right: 9px;\n        "
        )
        .concat(
          e.stack_css ? e.stack_css : "",
          "\n      }\n      #contentContainer {\n        padding: 12px 6px 12px 6px;\n        "
        )
        .concat(e.compact_mode ? "display: none;" : "", "\n        ")
        .concat(
          e.header_text.includes("<br>")
            ? "\n          font-size: 17px;\n          line-height: 1.2;\n          margin: -9px 0px 0px;\n        "
            : "",
          "\n        "
        )
        .concat(
          e.header_text_css ? e.header_text_css : "",
          "\n\n      }\n      app-header {\n        display: none;\n      }\n      paper-tab.iron-selected {\n        "
        )
        .concat(
          e.active_tab_color ? "color: ".concat(e.active_tab_color, ";") : "",
          "\n        "
        )
        .concat(
          e.active_tab_css ? e.active_tab_css : "",
          '\n      }\n      [buttonElem="menu"] {\n        '
        )
        .concat(
          e.menu_color ? "color: ".concat(e.menu_color, ";") : "",
          "\n        "
        )
        .concat(e.menu_hide ? "display: none;" : "", "\n        ")
        .concat(e.menu_css ? e.menu_css : "", "\n        ")
        .concat(
          e.footer_mode && e.compact_mode ? "margin-top:0 !important;" : "",
          '\n      }\n      [buttonElem="options"] {\n        '
        )
        .concat(
          e.options_color ? "color: ".concat(e.options_color, ";") : "",
          "\n        "
        )
        .concat(e.options_hide ? "display: none;" : "", "\n        ")
        .concat(e.options_css ? e.options_css : "", "\n        ")
        .concat(
          e.footer_mode && e.compact_mode ? "margin-top:0 !important;" : "",
          '\n      }\n      [buttonElem="voice"] {\n        '
        )
        .concat(
          e.voice_color ? "color: ".concat(e.voice_color, ";") : "",
          "\n        "
        )
        .concat(e.voice_hide ? "display: none;" : "", "\n        ")
        .concat(e.voice_css ? e.voice_css : "", "\n        ")
        .concat(
          e.footer_mode && e.compact_mode ? "margin-top:0 !important;" : "",
          "\n      }\n      paper-tab {\n        "
        )
        .concat(
          e.all_tabs_color ? "color: ".concat(e.all_tabs_color, ";") : "",
          "\n        "
        )
        .concat(
          e.all_tabs_css ? e.all_tabs_css : "",
          "\n      }\n      paper-tabs {\n        "
        )
        .concat(
          e.tab_indicator_color
            ? "--paper-tabs-selection-bar-color: ".concat(
                e.tab_indicator_color,
                " !important;"
              )
            : "",
          "\n        "
        )
        .concat(
          e.tab_container_css ? e.tab_container_css : "",
          "\n      }\n    "
        )),
      e.tabs_color &&
        Object.keys(e.tabs_color).forEach(t => {
          r.innerHTML += "\n        paper-tab:nth-child("
            .concat(tabIndexByName(t) + 1, ") {\n          color: ")
            .concat(e.tabs_color[t], ";\n        }\n      ");
        }),
      e.hide_tabs &&
        e.hide_tabs.forEach(e => {
          r.innerHTML += "\n        paper-tab:nth-child(".concat(
            tabIndexByName(e) + 1,
            ") {\n          display: none;\n        }\n      "
          );
        }),
      e.tabs_css &&
        Object.keys(e.tabs_css).forEach(t => {
          r.innerHTML += "\n        paper-tab:nth-child("
            .concat(tabIndexByName(t) + 1, ") {\n          ")
            .concat(e.tabs_css[t], ";\n        }\n      ");
        });
    let o = p.querySelector("#ch_header_style");
    p.appendChild(r),
      o && o.remove(),
      (r = document.createElement("style")),
      r.setAttribute("id", "ch_view_style"),
      (r.innerHTML = "\n        hui-view, hui-panel-view {\n          margin-top: -96px;\n          "
        .concat(
          e.compact_mode
            ? "min-height: calc(100vh - 96px);"
            : "min-height: calc(100vh - 112px);",
          "\n          "
        )
        .concat(
          e.footer_mode && !e.split_mode
            ? "padding-bottom: ".concat(t, "px;")
            : "",
          "\n          "
        )
        .concat(
          e.footer_mode && !e.split_mode
            ? "margin-bottom: -".concat(t + 4, "px;")
            : "",
          "\n          "
        )
        .concat(e.split_mode ? "padding-bottom: 48px;" : "", "\n          ")
        .concat(
          e.split_mode && e.footer_mode ? "margin-bottom: -4px;" : "",
          "\n        }\n        hui-panel-view {\n          padding-top: 96px;\n          "
        )
        .concat(e.panel_view_css ? e.panel_view_css : "", "\n          ")
        .concat(
          e.kiosk_mode || e.hide_header
            ? "min-height: 100vh !important; margin-bottom: 0 !important;"
            : "",
          "\n        }\n        hui-view {\n          padding-top: 100px;\n          "
        )
        .concat(
          e.view_css ? e.view_css : "",
          "\n        }\n        #view {\n          min-height: calc(100vh - 96px) !important;\n          "
        )
        .concat(
          e.footer_mode && !e.split_mode
            ? "min-height: calc(100vh - ".concat(t, "px) !important;")
            : "",
          "\n          "
        )
        .concat(
          e.compact_mode && !e.footer_mode
            ? "min-height: calc(100vh - ".concat(t, "px) !important;")
            : "",
          "\n          "
        )
        .concat(
          e.split_mode
            ? "min-height: calc(100vh - 48px) !important; margin-bottom: -48px;"
            : "",
          "\n          "
        )
        .concat(
          e.split_mode && e.footer_mode
            ? "min-height: calc(100vh - 52px) !important; margin-bottom: -48px;"
            : "",
          "\n          "
        )
        .concat(
          e.kiosk_mode || e.hide_header ? "min-height: 100vh !important;" : "",
          "\n        }\n      "
        )),
      (o = p.querySelector("#ch_view_style")),
      (o && r.innerHTML == o.innerHTML) || (p.appendChild(r), o && o.remove()),
      (r = document.createElement("style")),
      r.setAttribute("id", "ch_chevron"),
      (r.innerHTML =
        '\n      .not-visible[icon*="chevron"] {\n        display:none;\n      }\n    '),
      (o = n.tabContainer.shadowRoot.querySelector("#ch_chevron")),
      n.tabContainer.shadowRoot.appendChild(r),
      o && o.remove(),
      (o = _.bottom
        .querySelector("paper-tabs")
        .shadowRoot.querySelector("#ch_chevron")),
      _.bottom
        .querySelector("paper-tabs")
        .shadowRoot.appendChild(r.cloneNode(!0)),
      o && o.remove(),
      (r = document.createElement("style")),
      r.setAttribute("id", "ch_animated"),
      (r.innerHTML =
        '\n    ch-header, [buttonElem="menu"], [buttonElem="options"], [buttonElem="voice"] {\n      transition: margin-top 0.4s ease-in-out;\n      transition: top 0.4s ease-in-out;\n    }\n  '),
      setTimeout(() => {
        p.querySelector("#ch_animated") || p.appendChild(r);
      }, 1e3);
  },
  redirects = (e, t) => {
    const n = e.split_mode ? t.bottom : t,
      r = f.sidebar.listbox.querySelector('[data-panel="lovelace"]');
    if (e.hide_tabs.includes(0) && !e.default_tab) {
      for (const e of n.tabs)
        if ("none" != getComputedStyle(e).display) {
          r.setAttribute(
            "href",
            "/lovelace/".concat(n.tabContainer.indexOf(e))
          );
          break;
        }
    } else
      e.default_tab &&
        r.setAttribute(
          "href",
          "/lovelace/".concat(tabIndexByName(e.default_tab))
        );
    const o = null != e.default_tab ? tabIndexByName(e.default_tab) : null;
    if (e.hidden_tab_redirect && f.tabs.length) {
      const t = f.tabContainer.indexOf(
        f.tabContainer.querySelector("paper-tab.iron-selected")
      );
      if (e.hide_tabs.includes(t) && e.hide_tabs.length != f.tabs.length)
        if (o && !e.hide_tabs.includes(tabIndexByName(o)))
          "none" != getComputedStyle(n.tabs[o]).display &&
            (f.tabs[o].dispatchEvent(
              new MouseEvent("click", { bubbles: !1, cancelable: !1 })
            ),
            r.setAttribute("href", "/lovelace/".concat(o)));
        else
          for (const e of n.tabs)
            if ("none" != getComputedStyle(e).display) {
              e.dispatchEvent(
                new MouseEvent("click", { bubbles: !1, cancelable: !1 })
              ),
                r.setAttribute(
                  "href",
                  "/lovelace/".concat(n.tabContainer.indexOf(e))
                );
              break;
            }
    }
    let i;
    (i =
      !e.default_tab_on_refresh && window.performance
        ? 0 == performance.navigation.type
        : !(
            e.default_tab_on_refresh ||
            !performance.getEntriesByType("navigation")
          ) && "reload" == performance.getEntriesByType("navigation")[0].type),
      i ||
        null == o ||
        window.customHeaderDefaultClicked ||
        !f.tabs[o] ||
        (f.tabs[o].dispatchEvent(
          new MouseEvent("click", { bubbles: !1, cancelable: !1 })
        ),
        (window.customHeaderDefaultClicked = !0));
  },
  styleHeader = e => {
    if (
      (insertSettings(),
      window.location.href.includes("disable_ch") && (e.disabled_mode = !0),
      e.disabled_mode)
    )
      return (
        (window.customHeaderDisabled = !0),
        removeKioskMode(),
        _.container && (_.container.style.visibility = "hidden"),
        p.querySelector("#ch_header_style") &&
          p.querySelector("#ch_header_style").remove(),
        p.querySelector("#ch_view_style") &&
          p.querySelector("#ch_view_style").remove(),
        _.tabContainer.shadowRoot.querySelector("#ch_chevron") &&
          (_.tabContainer.shadowRoot.querySelector("#ch_chevron").remove(),
          _.bottom.tabContainer.shadowRoot
            .querySelector("#ch_chevron")
            .remove()),
        (_.menu.style.display = "none"),
        (p.querySelector("ha-menu-button").style.display = ""),
        (f.sidebar.main.shadowRoot.querySelector(".menu").style = ""),
        (f.sidebar.main.shadowRoot.querySelector("paper-listbox").style = ""),
        (f.sidebar.main.shadowRoot.querySelector("div.divider").style = ""),
        void window.dispatchEvent(new Event("resize"))
      );
    (window.customHeaderDisabled = !1),
      hideMenuItems(e, _, !1),
      (_.menu.style.display = ""),
      _.container && (_.container.style.visibility = "visible"),
      insertSettings(),
      p.querySelector("ch-header-bottom").querySelector("paper-tabs") ||
        (_.bottom.appendChild(_.tabContainer.cloneNode(!0)),
        (_.bottom.tabContainer = p
          .querySelector("ch-header-bottom")
          .querySelector("paper-tabs")),
        (_.bottom.tabs = _.bottom.tabContainer.querySelectorAll("paper-tab"))),
      f.tabs.forEach(e => {
        const t = f.tabs.indexOf(e);
        _.bottom.tabs[t].addEventListener("click", () => {
          f.tabs[t].dispatchEvent(
            new MouseEvent("click", { bubbles: !1, cancelable: !1 })
          );
        });
      }),
      e.split_mode
        ? ((_.tabContainer.style.display = "none"),
          (e.compact_mode = !1),
          e.footer_mode
            ? _.bottom.setAttribute("slot", "header")
            : _.bottom.setAttribute("slot", ""))
        : (_.bottom.style.display = "none");
    const t = e.split_mode ? _.bottom : _;
    e.split_mode || (_.bottom.style.display = "none"),
      _.tabs.length || (e.compact_mode = !1),
      e.menu_dropdown && !e.disable_sidebar
        ? buttonToOverflow("Menu", "mdi:menu", _, e)
        : _.options.querySelector("#menu_dropdown") &&
          _.options.querySelector("#menu_dropdown").remove(),
      e.voice_dropdown
        ? buttonToOverflow("Voice", "mdi:microphone", _, e)
        : _.options.querySelector("#voice_dropdown") &&
          _.options.querySelector("#voice_dropdown").remove(),
      e.reverse_button_direction
        ? (_.options.setAttribute("horizontal-align", "left"),
          _.options.querySelector("paper-listbox").setAttribute("dir", "ltr"))
        : (_.options.setAttribute("horizontal-align", "right"),
          _.options.querySelector("paper-listbox").setAttribute("dir", "rtl"));
    const n = document.createElement("style");
    if (
      (n.setAttribute("id", "ch_header_style"),
      (n.innerHTML =
        "\n    .menu, paper-listbox {\n      transition: height 0.1s ease-in-out 0s;\n    }\n    .divider {\n      transition: margin-bottom 0.1s ease-in-out 0s;\n    }\n  "),
      f.sidebar.main.shadowRoot.appendChild(n),
      e.kiosk_mode && !e.disabled_mode
        ? (insertStyleTags(e), kioskMode(!1, !1, e))
        : e.disable_sidebar
        ? (kioskMode(!0, !1, e), insertStyleTags(e))
        : e.hide_header
        ? (insertStyleTags(e), kioskMode(!1, !0, e))
        : e.disable_sidebar ||
          e.kiosk_mode ||
          e.hide_header ||
          (removeKioskMode(),
          e.compact_mode && !e.footer_mode
            ? ((f.sidebar.main.shadowRoot.querySelector(".menu").style =
                "height:49px;"),
              (f.sidebar.main.shadowRoot.querySelector("paper-listbox").style =
                "height:calc(100% - 175px);"),
              (f.sidebar.main.shadowRoot.querySelector("div.divider").style =
                ""))
            : e.footer_mode && !e.split_mode
            ? ((f.sidebar.main.shadowRoot.querySelector(".menu").style = ""),
              (f.sidebar.main.shadowRoot.querySelector("paper-listbox").style =
                "height: calc(100% - 170px);"),
              (f.sidebar.main.shadowRoot.querySelector("div.divider").style =
                "margin-bottom: -10px;"))
            : e.split_mode
            ? ((f.sidebar.main.shadowRoot.querySelector(".menu").style =
                "height:49px;"),
              (f.sidebar.main.shadowRoot.querySelector("paper-listbox").style =
                "height: calc(100% - 170px);"),
              (f.sidebar.main.shadowRoot.querySelector("div.divider").style =
                "margin-bottom: -3px;"))
            : ((f.sidebar.main.shadowRoot.querySelector(".menu").style = ""),
              (f.sidebar.main.shadowRoot.querySelector("paper-listbox").style =
                ""),
              (f.sidebar.main.shadowRoot.querySelector("div.divider").style =
                "")),
          insertStyleTags(e)),
      e.chevrons
        ? (t.tabContainer.hideScrollButtons = !1)
        : (t.tabContainer.hideScrollButtons = !0),
      e.indicator_top
        ? (t.tabContainer.alignBottom = !0)
        : (t.tabContainer.alignBottom = !1),
      e.footer_mode
        ? _.options.setAttribute("vertical-align", "bottom")
        : _.options.removeAttribute("vertical-align"),
      e.footer_mode
        ? _.container.removeAttribute("slot")
        : _.container.setAttribute("slot", "header"),
      (t.tabContainer.dir = e.reverse_tab_direction ? "rtl" : "ltr"),
      (_.container.dir = e.reverse_button_direction ? "rtl" : "ltr"),
      e.tab_icons && t.tabs.length)
    )
      for (const n in e.tab_icons) {
        const r = tabIndexByName(n),
          o = t.tabs[r].querySelector("ha-icon");
        e.tab_icons[n]
          ? (o.icon = e.tab_icons[n])
          : (o.icon = h.config.views[r].icon);
      }
    if (e.button_icons)
      for (const t in e.button_icons)
        _[t] &&
          (e.button_icons[t]
            ? "options" === t
              ? (_[t].querySelector("paper-icon-button").icon =
                  e.button_icons[t])
              : (_[t].icon = e.button_icons[t])
            : "menu" === t
            ? (_.menu.icon = "mdi:menu")
            : "voice" === t && _.voice
            ? (_.voice.icon = "mdi:microphone")
            : "options" === t &&
              (_[t].querySelector("paper-icon-button").icon =
                "mdi:dots-vertical"));
    if (e.button_text)
      for (const t in e.button_text) {
        const n = document.createElement("p");
        n.className = "buttonText";
        const r =
          "options" === t ? _[t].querySelector("paper-icon-button") : _[t];
        e.button_text[t] || !r.shadowRoot.querySelector(".buttonText")
          ? e.button_text[t] &&
            (r.shadowRoot.querySelector(".buttonText")
              ? (r.shadowRoot.querySelector(".buttonText").innerHTML =
                  e.button_text[t])
              : ((n.innerHTML = e.button_text[t]), r.shadowRoot.appendChild(n)),
            (r.shadowRoot.querySelector(".buttonText").dir = "ltr"),
            (r.shadowRoot.querySelector(".buttonText").style.textAlign =
              "menu" == t
                ? e.reverse_button_direction
                  ? "right"
                  : "left"
                : e.reverse_button_direction
                ? "left"
                : "right"),
            (r.shadowRoot.querySelector("iron-icon").style.display = "none"),
            (r.style.width = "auto"),
            e.button_text[t].includes("<br>")
              ? ((r.shadowRoot.querySelector(".buttonText").style.fontSize =
                  "17px"),
                (r.shadowRoot.querySelector(".buttonText").style.lineHeight =
                  "1.2"),
                (r.shadowRoot.querySelector(".buttonText").style.margin =
                  "-5px 0px 0px 0px"))
              : (r.shadowRoot.querySelector(".buttonText").style.margin =
                  "5.5px 0px 0px 0px"))
          : (r.shadowRoot.querySelector(".buttonText").remove(),
            (r.shadowRoot.querySelector("iron-icon").style.display = ""),
            (r.style.width = ""));
      }
    t.tabs.length || (t.tabContainer.style.display = "none"),
      ((e, t) => {
        if (e.menu_hide) return;
        const buildDot = () => {
            const t = document.createElement("div");
            return (
              (t.className = "dot"),
              (t.style.cssText = "\n        pointer-events: none;\n        position: relative;\n        background-color: "
                .concat(
                  e.notification_dot_color,
                  ";\n        width: 12px;\n        height: 12px;\n        top: -28px;\n        right: "
                )
                .concat(
                  e.reverse_button_direction ? "" : "-",
                  "16px;\n        border-radius: 50%;\n    "
                )),
              t
            );
          },
          menuButtonVisibility = () => {
            e.disable_sidebar ||
              window.customHeaderDisabled ||
              ("hidden" === f.menu.style.visibility
                ? (t.menu.style.display = "none")
                : (t.menu.style.display = "initial"));
          },
          notificationDot = e => {
            const t = document
              .querySelector("home-assistant")
              .shadowRoot.querySelector("home-assistant-main")
              .shadowRoot.querySelector("ha-panel-lovelace")
              .shadowRoot.querySelector("hui-root");
            e.forEach(e => {
              let { addedNodes: n, removedNodes: r } = e;
              if (n)
                for (const e of n)
                  "dot" !== e.className ||
                    t.shadowRoot
                      .querySelector('[buttonElem="menu"]')
                      .shadowRoot.querySelector(".dot") ||
                    (t.shadowRoot
                      .querySelector('[buttonElem="menu"]')
                      .shadowRoot.appendChild(buildDot()),
                    t.shadowRoot
                      .querySelector('[buttonElem="menu"]')
                      .shadowRoot.querySelector(".buttonText") &&
                      ((t.shadowRoot
                        .querySelector('[buttonElem="menu"]')
                        .shadowRoot.querySelector(".dot").style.display =
                        "none"),
                      (t.shadowRoot
                        .querySelector('[buttonElem="menu"]')
                        .shadowRoot.querySelector(
                          ".buttonText"
                        ).style.borderBottom = "3px solid ".concat(
                        window.customHeaderConfig.notification_dot_color
                      ))));
              if (r)
                for (const e of r)
                  "dot" === e.className &&
                    t.shadowRoot
                      .querySelector('[buttonElem="menu"]')
                      .shadowRoot.querySelector(".dot") &&
                    (t.shadowRoot
                      .querySelector('[buttonElem="menu"]')
                      .shadowRoot.querySelector(".dot")
                      .remove(),
                    t.shadowRoot
                      .querySelector('[buttonElem="menu"]')
                      .shadowRoot.querySelector(".buttonText") &&
                      (t.shadowRoot
                        .querySelector('[buttonElem="menu"]')
                        .shadowRoot.querySelector(
                          ".buttonText"
                        ).style.borderBottom = ""));
            });
          };
        if (!window.customHeaderMenuObserver) {
          (window.customHeaderMenuObserver = !0),
            new MutationObserver(notificationDot).observe(f.menu.shadowRoot, {
              childList: !0
            }),
            new MutationObserver(menuButtonVisibility).observe(f.menu, {
              attributes: !0,
              attributeFilter: ["style"]
            });
        }
        menuButtonVisibility();
        const n = t.menu.shadowRoot.querySelector(".dot");
        n &&
          n.style.cssText != buildDot().style.cssText &&
          (n.remove(),
          e.button_text.menu &&
            (t.menu.shadowRoot.querySelector(
              ".buttonText"
            ).style.textDecoration = "")),
          !t.menu.shadowRoot.querySelector(".dot") &&
            f.menu.shadowRoot.querySelector(".dot") &&
            (t.menu.shadowRoot.appendChild(buildDot()),
            e.button_text.menu &&
              ((t.menu.shadowRoot.querySelector(".dot").style.display = "none"),
              (t.menu.shadowRoot.querySelector(
                ".buttonText"
              ).style.borderBottom = "3px solid ".concat(
                e.notification_dot_color
              ))));
      })(e, _),
      window.customHeaderShrink ||
        e.split_mode ||
        ((window.customHeaderShrink = !0),
        window.addEventListener("scroll", function(e) {
          const t =
            "none" ===
            window
              .getComputedStyle(_.container.querySelector("#contentContainer"))
              .getPropertyValue("display");
          "0px" ===
            window.getComputedStyle(_.container).getPropertyValue("bottom") ||
            t ||
            (window.scrollY > 48
              ? ((_.container.style.top = "-48px"),
                (_.menu.style.marginTop = "48px"),
                _.voice && (_.voice.style.marginTop = "48px"),
                (_.options.style.marginTop = "48px"))
              : ((_.container.style.transition = "0s"),
                (_.menu.style.transition = "0s"),
                _.voice && (_.voice.style.transition = "0s"),
                (_.options.style.transition = "0s"),
                (_.container.style.top = "-".concat(window.scrollY, "px")),
                (_.menu.style.marginTop = "".concat(window.scrollY, "px")),
                _.voice &&
                  (_.voice.style.marginTop = "".concat(window.scrollY, "px")),
                (_.options.style.marginTop = "".concat(window.scrollY, "px"))),
            (_.container.style.transition = ""));
        }));
    const shadowScroll = () => {
      window.scrollY > 15
        ? (_.container.style.boxShadow = "0px 0px 5px 5px rgba(0,0,0,0.2)")
        : (_.container.style.boxShadow = "0px 0px 5px 5px rgba(0,0,0,0)");
    };
    window.customHeaderShadow || e.footer_mode || e.split_mode || !e.shadow
      ? window.removeEventListener("scroll", shadowScroll)
      : ((window.customHeaderShadow = !0),
        window.addEventListener("scroll", shadowScroll)),
      A(_.container, "iron-resize"),
      redirects(e, _);
  },
  observers = () => {
    const e = new MutationObserver(e => {
      const t = window.customHeaderConfig,
        n = t.split_mode ? _.bottom : _;
      e.forEach(r => {
        let { addedNodes: o, target: i } = r;
        e.length &&
          "HTML" == e[0].target.nodeName &&
          ((window.customHeaderExceptionConfig = "init"),
          buildConfig(),
          (e = [])),
          "view" == i.id && o.length && n.tabs.length
            ? (redirects(t, _),
              (e => {
                const t = e.split_mode ? _.bottom : _,
                  n = F();
                n &&
                  (f.tabContainer || t.tabContainer) &&
                  (t.tabs[n.current_view].dispatchEvent(
                    new MouseEvent("click", { bubbles: !1, cancelable: !1 })
                  ),
                  A(_.container, "iron-resize"));
              })(t),
              window.customHeaderTabCond && buildConfig())
            : o.length && "PARTIAL-PANEL-RESOLVER" == i.nodeName
            ? (f.main.shadowRoot.querySelector(" ha-panel-lovelace")
                ? t.compact_mode && !t.footer_mode
                  ? ((f.sidebar.main.shadowRoot.querySelector(".menu").style =
                      "height:49px;"),
                    (f.sidebar.main.shadowRoot.querySelector(
                      "paper-listbox"
                    ).style = "height:calc(100% - 175px);"),
                    (f.sidebar.main.shadowRoot.querySelector(
                      "div.divider"
                    ).style = ""))
                  : t.footer_mode && !t.split_mode
                  ? ((f.sidebar.main.shadowRoot.querySelector(".menu").style =
                      ""),
                    (f.sidebar.main.shadowRoot.querySelector(
                      "paper-listbox"
                    ).style = "height: calc(100% - 170px);"),
                    (f.sidebar.main.shadowRoot.querySelector(
                      "div.divider"
                    ).style = "margin-bottom: -10px;"))
                  : t.split_mode &&
                    ((f.sidebar.main.shadowRoot.querySelector(".menu").style =
                      "height:49px;"),
                    (f.sidebar.main.shadowRoot.querySelector(
                      "paper-listbox"
                    ).style = "height: calc(100% - 170px);"),
                    (f.sidebar.main.shadowRoot.querySelector(
                      "div.divider"
                    ).style = "margin-bottom: -3px;"))
                : ((f.sidebar.main.shadowRoot.querySelector(".menu").style =
                    ""),
                  (f.sidebar.main.shadowRoot.querySelector(
                    "paper-listbox"
                  ).style = ""),
                  (f.sidebar.main.shadowRoot.querySelector(
                    "div.divider"
                  ).style = "")),
              p.querySelector("editor") && p.querySelector("editor").remove())
            : "edit-mode" === i.className && o.length
            ? (p.querySelector("editor") && p.querySelector("editor").remove(),
              window.customHeaderDisabled || hideMenuItems(t, _, !0),
              (_.menu.style.display = "none"),
              (p.querySelector("ch-header").style.display = "none"),
              (f.appHeader.style.display = "block"),
              p.querySelector("#ch_view_style") &&
                p.querySelector("#ch_view_style").remove(),
              p.querySelector("#ch_header_style") &&
                p.querySelector("#ch_header_style").remove(),
              p.querySelector("#ch_animated") &&
                p.querySelector("#ch_animated").remove())
            : "APP-HEADER" === i.nodeName &&
              o.length &&
              (insertStyleTags(t),
              (f.menu = f.appHeader.querySelector("ha-menu-button")),
              (f.appHeader.style.display = "none"),
              (_.menu.style.display = ""),
              (p.querySelector("ch-header").style.display = ""));
      });
    });
    e.observe(f.partialPanelResolver, { childList: !0 }),
      e.observe(f.appHeader, { childList: !0 }),
      e.observe(p.querySelector("#view"), { childList: !0 }),
      e.observe(document.querySelector("html"), { attributes: !0 });
  };
window.customHeaderExceptionConfig = "init";
const buildConfig = e => {
  const t = defaultConfig();
  e || (e = _objectSpread2({}, t, {}, h.config.custom_header));
  const n = _objectSpread2({}, e, {}, conditionalConfig(e)),
    r = e.template_variables;
  delete e.template_variables;
  const o =
      ("boolean" == typeof n.disabled_mode && n.disabled_mode) ||
      ("string" == typeof n.disabled_mode &&
        !n.disabled_mode.includes("{{") &&
        !n.disabled_mode.includes("{%")) ||
      window.location.href.includes("disable_ch"),
    processAndContinue = () => {
      (e = _objectSpread2({}, e, {}, conditionalConfig(e))).hide_tabs &&
        (e.hide_tabs = processTabArray(e.hide_tabs)),
        e.show_tabs && (e.show_tabs = processTabArray(e.show_tabs)),
        e.show_tabs &&
          e.show_tabs.length &&
          (e.hide_tabs = (e => {
            if (e && e.length) {
              const t = [];
              for (let e = 0; e < f.tabs.length; e += 1) t.push(e);
              return t.filter(t => !e.includes(t));
            }
          })(e.show_tabs)),
        (e.disable_sidebar || e.menu_dropdown) && (e.menu_hide = !0),
        e.voice_dropdown && (e.voice_hide = !0),
        null != e.header_text &&
          "" == e.header_text &&
          (e.header_text = t.header_text),
        e.header_text && " " == e.header_text && (e.header_text = "&nbsp;"),
        e.hide_header &&
          e.disable_sidebar &&
          ((e.kiosk_mode = !0), (e.hide_header = !1), (e.disable_sidebar = !1)),
        null != e.test_template &&
          (o
            ? console.log(
                "Custom Header cannot render templates while disabled."
              )
            : "string" == typeof e.test_template &&
              (e.test_template.toLowerCase().includes("true") ||
                e.test_template.toLowerCase().includes("false"))
            ? (console.log(
                'Custom Header test returned: "'.concat(e.test_template, '"')
              ),
              console.log(
                "Warning: Boolean is returned as string instead of Boolean."
              ))
            : "string" == typeof e.test_template
            ? console.log(
                'Custom Header test returned: "'.concat(e.test_template, '"')
              )
            : console.log(
                "Custom Header test returned: ".concat(e.test_template)
              )),
        (window.customHeaderConfig = e),
        styleHeader(e),
        window.customHeaderObservers ||
          (observers(), (window.customHeaderObservers = !0));
    },
    i = JSON.stringify(e),
    a = !!r || i.includes("{{") || i.includes("{%");
  let s,
    c = !1;
  a && !o
    ? ("function" == typeof window.unsub &&
        (window.unsub(), (window.unsub = null)),
      (s = subscribeRenderTemplate(
        t => {
          if (
            window.customHeaderLastTemplateResult != t ||
            window.customHeaderLastExceptionConfig !=
              window.customHeaderExceptionConfig
          ) {
            (window.customHeaderLastExceptionConfig =
              window.customHeaderExceptionConfig),
              (window.customHeaderLastTemplateResult = t);
            try {
              e = JSON.parse(
                t
                  .replace(/"true"/gi, "true")
                  .replace(/"false"/gi, "false")
                  .replace(/""/, "")
              );
            } catch (e) {
              c = !0;
              let n = "[CUSTOM-HEADER] There was an issue with the template: ".concat(
                ((e, t) => {
                  const n = t.toString().match(/\d+/g)[0],
                    r = e.substr(0, n).match(/[^,]*$/),
                    o = e.substr(n).match(/^[^,]*/);
                  return ""
                    .concat(r ? r[0] : "")
                    .concat(o ? o[0] : "")
                    .replace('":"', ': "');
                })(t, e)
              );
              n.includes("locale") &&
                (n =
                  '[CUSTOM-HEADER] There was an issue one of your "template_variables".'),
                console.log(n);
            }
            processAndContinue();
          }
        },
        {
          template:
            JSON.stringify(r).replace(/\\/g, "") +
            JSON.stringify(e).replace(/\\/g, "")
        },
        e.locale
      )),
      (function _asyncToGenerator(e) {
        return function() {
          var t = this,
            n = arguments;
          return new Promise(function(r, o) {
            var i = e.apply(t, n);
            function _next(e) {
              asyncGeneratorStep(i, r, o, _next, _throw, "next", e);
            }
            function _throw(e) {
              asyncGeneratorStep(i, r, o, _next, _throw, "throw", e);
            }
            _next(void 0);
          });
        };
      })(function*() {
        try {
          window.unsub = yield s;
        } catch (e) {
          (c = !0),
            console.log(
              "[CUSTOM-HEADER] There was an error with one or more of your templates:"
            ),
            console.log(
              "".concat(e.message.substring(0, e.message.indexOf(")")), ")")
            );
        }
      })(),
      clearTimeout(window.customHeaderTempTimeout),
      (window.customHeaderTempTimeout = window.setTimeout(() => {
        const e = document
          .querySelector("home-assistant")
          .shadowRoot.querySelector("home-assistant-main")
          .shadowRoot.querySelector("ha-panel-lovelace");
        (e ? e.shadowRoot.querySelector("hui-editor") : null) ||
          c ||
          p.querySelector("custom-header-editor") ||
          buildConfig();
      }, 1e3 * (60 - new Date().getSeconds()))))
    : processAndContinue();
};
function createCommonjsModule(e, t) {
  return e((t = { exports: {} }), t.exports), t.exports;
}
var J = createCommonjsModule(function(e) {
    var t = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = t);
  }),
  K = {}.hasOwnProperty,
  _has = function(e, t) {
    return K.call(e, t);
  },
  _fails = function(e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
  Z = !_fails(function() {
    return (
      7 !=
      Object.defineProperty({}, "a", {
        get: function() {
          return 7;
        }
      }).a
    );
  }),
  X = createCommonjsModule(function(e) {
    var t = (e.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = t);
  }),
  Q =
    (X.version,
    function(e) {
      return "object" == typeof e ? null !== e : "function" == typeof e;
    }),
  _anObject = function(e) {
    if (!Q(e)) throw TypeError(e + " is not an object!");
    return e;
  },
  ee = J.document,
  te = Q(ee) && Q(ee.createElement),
  _domCreate = function(e) {
    return te ? ee.createElement(e) : {};
  },
  ne =
    !Z &&
    !_fails(function() {
      return (
        7 !=
        Object.defineProperty(_domCreate("div"), "a", {
          get: function() {
            return 7;
          }
        }).a
      );
    }),
  _toPrimitive = function(e, t) {
    if (!Q(e)) return e;
    var n, r;
    if (t && "function" == typeof (n = e.toString) && !Q((r = n.call(e))))
      return r;
    if ("function" == typeof (n = e.valueOf) && !Q((r = n.call(e)))) return r;
    if (!t && "function" == typeof (n = e.toString) && !Q((r = n.call(e))))
      return r;
    throw TypeError("Can't convert object to primitive value");
  },
  re = Object.defineProperty,
  oe = {
    f: Z
      ? Object.defineProperty
      : function defineProperty(e, t, n) {
          if ((_anObject(e), (t = _toPrimitive(t, !0)), _anObject(n), ne))
            try {
              return re(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        }
  },
  _propertyDesc = function(e, t) {
    return {
      enumerable: !(1 & e),
      configurable: !(2 & e),
      writable: !(4 & e),
      value: t
    };
  },
  ie = Z
    ? function(e, t, n) {
        return oe.f(e, t, _propertyDesc(1, n));
      }
    : function(e, t, n) {
        return (e[t] = n), e;
      },
  ae = 0,
  se = Math.random(),
  _uid = function(e) {
    return "Symbol(".concat(
      void 0 === e ? "" : e,
      ")_",
      (++ae + se).toString(36)
    );
  },
  ce = createCommonjsModule(function(e) {
    var t = J["__core-js_shared__"] || (J["__core-js_shared__"] = {});
    (e.exports = function(e, n) {
      return t[e] || (t[e] = void 0 !== n ? n : {});
    })("versions", []).push({
      version: X.version,
      mode: "global",
      copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
    });
  }),
  le = ce("native-function-to-string", Function.toString),
  ue = createCommonjsModule(function(e) {
    var t = _uid("src"),
      n = ("" + le).split("toString");
    (X.inspectSource = function(e) {
      return le.call(e);
    }),
      (e.exports = function(e, r, o, i) {
        var a = "function" == typeof o;
        a && (_has(o, "name") || ie(o, "name", r)),
          e[r] !== o &&
            (a &&
              (_has(o, t) || ie(o, t, e[r] ? "" + e[r] : n.join(String(r)))),
            e === J
              ? (e[r] = o)
              : i
              ? e[r]
                ? (e[r] = o)
                : ie(e, r, o)
              : (delete e[r], ie(e, r, o)));
      })(Function.prototype, "toString", function toString() {
        return ("function" == typeof this && this[t]) || le.call(this);
      });
  }),
  _aFunction = function(e) {
    if ("function" != typeof e) throw TypeError(e + " is not a function!");
    return e;
  },
  _ctx = function(e, t, n) {
    if ((_aFunction(e), void 0 === t)) return e;
    switch (n) {
      case 1:
        return function(n) {
          return e.call(t, n);
        };
      case 2:
        return function(n, r) {
          return e.call(t, n, r);
        };
      case 3:
        return function(n, r, o) {
          return e.call(t, n, r, o);
        };
    }
    return function() {
      return e.apply(t, arguments);
    };
  },
  $export = function(e, t, n) {
    var r,
      o,
      i,
      a,
      s = e & $export.F,
      c = e & $export.G,
      l = e & $export.S,
      u = e & $export.P,
      d = e & $export.B,
      h = c ? J : l ? J[t] || (J[t] = {}) : (J[t] || {}).prototype,
      p = c ? X : X[t] || (X[t] = {}),
      f = p.prototype || (p.prototype = {});
    for (r in (c && (n = t), n))
      (i = ((o = !s && h && void 0 !== h[r]) ? h : n)[r]),
        (a =
          d && o
            ? _ctx(i, J)
            : u && "function" == typeof i
            ? _ctx(Function.call, i)
            : i),
        h && ue(h, r, i, e & $export.U),
        p[r] != i && ie(p, r, a),
        u && f[r] != i && (f[r] = i);
  };
(J.core = X),
  ($export.F = 1),
  ($export.G = 2),
  ($export.S = 4),
  ($export.P = 8),
  ($export.B = 16),
  ($export.W = 32),
  ($export.U = 64),
  ($export.R = 128);
var de = $export,
  he = createCommonjsModule(function(e) {
    var t = _uid("meta"),
      n = oe.f,
      r = 0,
      o =
        Object.isExtensible ||
        function() {
          return !0;
        },
      i = !_fails(function() {
        return o(Object.preventExtensions({}));
      }),
      setMeta = function(e) {
        n(e, t, { value: { i: "O" + ++r, w: {} } });
      },
      a = (e.exports = {
        KEY: t,
        NEED: !1,
        fastKey: function(e, n) {
          if (!Q(e))
            return "symbol" == typeof e
              ? e
              : ("string" == typeof e ? "S" : "P") + e;
          if (!_has(e, t)) {
            if (!o(e)) return "F";
            if (!n) return "E";
            setMeta(e);
          }
          return e[t].i;
        },
        getWeak: function(e, n) {
          if (!_has(e, t)) {
            if (!o(e)) return !0;
            if (!n) return !1;
            setMeta(e);
          }
          return e[t].w;
        },
        onFreeze: function(e) {
          return i && a.NEED && o(e) && !_has(e, t) && setMeta(e), e;
        }
      });
  }),
  pe =
    (he.KEY,
    he.NEED,
    he.fastKey,
    he.getWeak,
    he.onFreeze,
    createCommonjsModule(function(e) {
      var t = ce("wks"),
        n = J.Symbol,
        r = "function" == typeof n;
      (e.exports = function(e) {
        return t[e] || (t[e] = (r && n[e]) || (r ? n : _uid)("Symbol." + e));
      }).store = t;
    })),
  fe = oe.f,
  me = pe("toStringTag"),
  _setToStringTag = function(e, t, n) {
    e &&
      !_has((e = n ? e : e.prototype), me) &&
      fe(e, me, { configurable: !0, value: t });
  },
  ge = { f: pe },
  _e = oe.f,
  _wksDefine = function(e) {
    var t = X.Symbol || (X.Symbol = J.Symbol || {});
    "_" == e.charAt(0) || e in t || _e(t, e, { value: ge.f(e) });
  },
  ye = {}.toString,
  _cof = function(e) {
    return ye.call(e).slice(8, -1);
  },
  ve = Object("z").propertyIsEnumerable(0)
    ? Object
    : function(e) {
        return "String" == _cof(e) ? e.split("") : Object(e);
      },
  _defined = function(e) {
    if (null == e) throw TypeError("Can't call method on  " + e);
    return e;
  },
  _toIobject = function(e) {
    return ve(_defined(e));
  },
  be = Math.ceil,
  we = Math.floor,
  _toInteger = function(e) {
    return isNaN((e = +e)) ? 0 : (e > 0 ? we : be)(e);
  },
  Se = Math.min,
  _toLength = function(e) {
    return e > 0 ? Se(_toInteger(e), 9007199254740991) : 0;
  },
  xe = Math.max,
  Ee = Math.min,
  _toAbsoluteIndex = function(e, t) {
    return (e = _toInteger(e)) < 0 ? xe(e + t, 0) : Ee(e, t);
  },
  _arrayIncludes = function(e) {
    return function(t, n, r) {
      var o,
        i = _toIobject(t),
        a = _toLength(i.length),
        s = _toAbsoluteIndex(r, a);
      if (e && n != n) {
        for (; a > s; ) if ((o = i[s++]) != o) return !0;
      } else
        for (; a > s; s++) if ((e || s in i) && i[s] === n) return e || s || 0;
      return !e && -1;
    };
  },
  Oe = ce("keys"),
  _sharedKey = function(e) {
    return Oe[e] || (Oe[e] = _uid(e));
  },
  ke = _arrayIncludes(!1),
  Ce = _sharedKey("IE_PROTO"),
  _objectKeysInternal = function(e, t) {
    var n,
      r = _toIobject(e),
      o = 0,
      i = [];
    for (n in r) n != Ce && _has(r, n) && i.push(n);
    for (; t.length > o; ) _has(r, (n = t[o++])) && (~ke(i, n) || i.push(n));
    return i;
  },
  je = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(
    ","
  ),
  Pe =
    Object.keys ||
    function keys(e) {
      return _objectKeysInternal(e, je);
    },
  Me = { f: Object.getOwnPropertySymbols },
  Ae = { f: {}.propertyIsEnumerable },
  Te =
    Array.isArray ||
    function isArray(e) {
      return "Array" == _cof(e);
    },
  _toObject = function(e) {
    return Object(_defined(e));
  },
  Re = Z
    ? Object.defineProperties
    : function defineProperties(e, t) {
        _anObject(e);
        for (var n, r = Pe(t), o = r.length, i = 0; o > i; )
          oe.f(e, (n = r[i++]), t[n]);
        return e;
      },
  Ne = J.document,
  qe = Ne && Ne.documentElement,
  Ie = _sharedKey("IE_PROTO"),
  Empty = function() {},
  createDict = function() {
    var e,
      t = _domCreate("iframe"),
      n = je.length;
    for (
      t.style.display = "none",
        qe.appendChild(t),
        t.src = "javascript:",
        (e = t.contentWindow.document).open(),
        e.write("<script>document.F=Object</script>"),
        e.close(),
        createDict = e.F;
      n--;

    )
      delete createDict.prototype[je[n]];
    return createDict();
  },
  Fe =
    Object.create ||
    function create(e, t) {
      var n;
      return (
        null !== e
          ? ((Empty.prototype = _anObject(e)),
            (n = new Empty()),
            (Empty.prototype = null),
            (n[Ie] = e))
          : (n = createDict()),
        void 0 === t ? n : Re(n, t)
      );
    },
  Le = je.concat("length", "prototype"),
  De = {
    f:
      Object.getOwnPropertyNames ||
      function getOwnPropertyNames(e) {
        return _objectKeysInternal(e, Le);
      }
  },
  ze = De.f,
  He = {}.toString,
  Ve =
    "object" == typeof window && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  Ue = {
    f: function getOwnPropertyNames(e) {
      return Ve && "[object Window]" == He.call(e)
        ? (function(e) {
            try {
              return ze(e);
            } catch (e) {
              return Ve.slice();
            }
          })(e)
        : ze(_toIobject(e));
    }
  },
  Ge = Object.getOwnPropertyDescriptor,
  Be = {
    f: Z
      ? Ge
      : function getOwnPropertyDescriptor(e, t) {
          if (((e = _toIobject(e)), (t = _toPrimitive(t, !0)), ne))
            try {
              return Ge(e, t);
            } catch (e) {}
          if (_has(e, t)) return _propertyDesc(!Ae.f.call(e, t), e[t]);
        }
  },
  We = he.KEY,
  Ye = Be.f,
  $e = oe.f,
  Je = Ue.f,
  Ke = J.Symbol,
  Ze = J.JSON,
  Xe = Ze && Ze.stringify,
  Qe = pe("_hidden"),
  et = pe("toPrimitive"),
  tt = {}.propertyIsEnumerable,
  nt = ce("symbol-registry"),
  rt = ce("symbols"),
  ot = ce("op-symbols"),
  it = Object.prototype,
  at = "function" == typeof Ke && !!Me.f,
  st = J.QObject,
  ct = !st || !st.prototype || !st.prototype.findChild,
  lt =
    Z &&
    _fails(function() {
      return (
        7 !=
        Fe(
          $e({}, "a", {
            get: function() {
              return $e(this, "a", { value: 7 }).a;
            }
          })
        ).a
      );
    })
      ? function(e, t, n) {
          var r = Ye(it, t);
          r && delete it[t], $e(e, t, n), r && e !== it && $e(it, t, r);
        }
      : $e,
  wrap = function(e) {
    var t = (rt[e] = Fe(Ke.prototype));
    return (t._k = e), t;
  },
  ut =
    at && "symbol" == typeof Ke.iterator
      ? function(e) {
          return "symbol" == typeof e;
        }
      : function(e) {
          return e instanceof Ke;
        },
  dt = function defineProperty(e, t, n) {
    return (
      e === it && dt(ot, t, n),
      _anObject(e),
      (t = _toPrimitive(t, !0)),
      _anObject(n),
      _has(rt, t)
        ? (n.enumerable
            ? (_has(e, Qe) && e[Qe][t] && (e[Qe][t] = !1),
              (n = Fe(n, { enumerable: _propertyDesc(0, !1) })))
            : (_has(e, Qe) || $e(e, Qe, _propertyDesc(1, {})), (e[Qe][t] = !0)),
          lt(e, t, n))
        : $e(e, t, n)
    );
  },
  ht = function defineProperties(e, t) {
    _anObject(e);
    for (
      var n,
        r = (function(e) {
          var t = Pe(e),
            n = Me.f;
          if (n)
            for (var r, o = n(e), i = Ae.f, a = 0; o.length > a; )
              i.call(e, (r = o[a++])) && t.push(r);
          return t;
        })((t = _toIobject(t))),
        o = 0,
        i = r.length;
      i > o;

    )
      dt(e, (n = r[o++]), t[n]);
    return e;
  },
  pt = function propertyIsEnumerable(e) {
    var t = tt.call(this, (e = _toPrimitive(e, !0)));
    return (
      !(this === it && _has(rt, e) && !_has(ot, e)) &&
      (!(
        t ||
        !_has(this, e) ||
        !_has(rt, e) ||
        (_has(this, Qe) && this[Qe][e])
      ) ||
        t)
    );
  },
  ft = function getOwnPropertyDescriptor(e, t) {
    if (
      ((e = _toIobject(e)),
      (t = _toPrimitive(t, !0)),
      e !== it || !_has(rt, t) || _has(ot, t))
    ) {
      var n = Ye(e, t);
      return (
        !n || !_has(rt, t) || (_has(e, Qe) && e[Qe][t]) || (n.enumerable = !0),
        n
      );
    }
  },
  mt = function getOwnPropertyNames(e) {
    for (var t, n = Je(_toIobject(e)), r = [], o = 0; n.length > o; )
      _has(rt, (t = n[o++])) || t == Qe || t == We || r.push(t);
    return r;
  },
  gt = function getOwnPropertySymbols(e) {
    for (
      var t, n = e === it, r = Je(n ? ot : _toIobject(e)), o = [], i = 0;
      r.length > i;

    )
      !_has(rt, (t = r[i++])) || (n && !_has(it, t)) || o.push(rt[t]);
    return o;
  };
at ||
  (ue(
    (Ke = function Symbol() {
      if (this instanceof Ke) throw TypeError("Symbol is not a constructor!");
      var e = _uid(arguments.length > 0 ? arguments[0] : void 0),
        $set = function(t) {
          this === it && $set.call(ot, t),
            _has(this, Qe) && _has(this[Qe], e) && (this[Qe][e] = !1),
            lt(this, e, _propertyDesc(1, t));
        };
      return Z && ct && lt(it, e, { configurable: !0, set: $set }), wrap(e);
    }).prototype,
    "toString",
    function toString() {
      return this._k;
    }
  ),
  (Be.f = ft),
  (oe.f = dt),
  (De.f = Ue.f = mt),
  (Ae.f = pt),
  (Me.f = gt),
  Z && ue(it, "propertyIsEnumerable", pt, !0),
  (ge.f = function(e) {
    return wrap(pe(e));
  })),
  de(de.G + de.W + de.F * !at, { Symbol: Ke });
for (
  var _t = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(
      ","
    ),
    yt = 0;
  _t.length > yt;

)
  pe(_t[yt++]);
for (var vt = Pe(pe.store), bt = 0; vt.length > bt; ) _wksDefine(vt[bt++]);
de(de.S + de.F * !at, "Symbol", {
  for: function(e) {
    return _has(nt, (e += "")) ? nt[e] : (nt[e] = Ke(e));
  },
  keyFor: function keyFor(e) {
    if (!ut(e)) throw TypeError(e + " is not a symbol!");
    for (var t in nt) if (nt[t] === e) return t;
  },
  useSetter: function() {
    ct = !0;
  },
  useSimple: function() {
    ct = !1;
  }
}),
  de(de.S + de.F * !at, "Object", {
    create: function create(e, t) {
      return void 0 === t ? Fe(e) : ht(Fe(e), t);
    },
    defineProperty: dt,
    defineProperties: ht,
    getOwnPropertyDescriptor: ft,
    getOwnPropertyNames: mt,
    getOwnPropertySymbols: gt
  });
var wt = _fails(function() {
  Me.f(1);
});
de(de.S + de.F * wt, "Object", {
  getOwnPropertySymbols: function getOwnPropertySymbols(e) {
    return Me.f(_toObject(e));
  }
}),
  Ze &&
    de(
      de.S +
        de.F *
          (!at ||
            _fails(function() {
              var e = Ke();
              return (
                "[null]" != Xe([e]) ||
                "{}" != Xe({ a: e }) ||
                "{}" != Xe(Object(e))
              );
            })),
      "JSON",
      {
        stringify: function stringify(e) {
          for (var t, n, r = [e], o = 1; arguments.length > o; )
            r.push(arguments[o++]);
          if (((n = t = r[1]), (Q(t) || void 0 !== e) && !ut(e)))
            return (
              Te(t) ||
                (t = function(e, t) {
                  if (
                    ("function" == typeof n && (t = n.call(this, e, t)), !ut(t))
                  )
                    return t;
                }),
              (r[1] = t),
              Xe.apply(Ze, r)
            );
        }
      }
    ),
  Ke.prototype[et] || ie(Ke.prototype, et, Ke.prototype.valueOf),
  _setToStringTag(Ke, "Symbol"),
  _setToStringTag(Math, "Math", !0),
  _setToStringTag(J.JSON, "JSON", !0),
  de(de.S, "Object", { create: Fe }),
  de(de.S + de.F * !Z, "Object", { defineProperty: oe.f }),
  de(de.S + de.F * !Z, "Object", { defineProperties: Re });
var _objectSap = function(e, t) {
    var n = (X.Object || {})[e] || Object[e],
      r = {};
    (r[e] = t(n)),
      de(
        de.S +
          de.F *
            _fails(function() {
              n(1);
            }),
        "Object",
        r
      );
  },
  St = Be.f;
_objectSap("getOwnPropertyDescriptor", function() {
  return function getOwnPropertyDescriptor(e, t) {
    return St(_toIobject(e), t);
  };
});
var xt = _sharedKey("IE_PROTO"),
  Et = Object.prototype,
  Ot =
    Object.getPrototypeOf ||
    function(e) {
      return (
        (e = _toObject(e)),
        _has(e, xt)
          ? e[xt]
          : "function" == typeof e.constructor && e instanceof e.constructor
          ? e.constructor.prototype
          : e instanceof Object
          ? Et
          : null
      );
    };
_objectSap("getPrototypeOf", function() {
  return function getPrototypeOf(e) {
    return Ot(_toObject(e));
  };
}),
  _objectSap("keys", function() {
    return function keys(e) {
      return Pe(_toObject(e));
    };
  }),
  _objectSap("getOwnPropertyNames", function() {
    return Ue.f;
  });
var kt = he.onFreeze;
_objectSap("freeze", function(e) {
  return function freeze(t) {
    return e && Q(t) ? e(kt(t)) : t;
  };
});
var Ct = he.onFreeze;
_objectSap("seal", function(e) {
  return function seal(t) {
    return e && Q(t) ? e(Ct(t)) : t;
  };
});
var jt = he.onFreeze;
_objectSap("preventExtensions", function(e) {
  return function preventExtensions(t) {
    return e && Q(t) ? e(jt(t)) : t;
  };
}),
  _objectSap("isFrozen", function(e) {
    return function isFrozen(t) {
      return !Q(t) || (!!e && e(t));
    };
  }),
  _objectSap("isSealed", function(e) {
    return function isSealed(t) {
      return !Q(t) || (!!e && e(t));
    };
  }),
  _objectSap("isExtensible", function(e) {
    return function isExtensible(t) {
      return !!Q(t) && (!e || e(t));
    };
  });
var Pt = Object.assign,
  Mt =
    !Pt ||
    _fails(function() {
      var e = {},
        t = {},
        n = Symbol(),
        r = "abcdefghijklmnopqrst";
      return (
        (e[n] = 7),
        r.split("").forEach(function(e) {
          t[e] = e;
        }),
        7 != Pt({}, e)[n] || Object.keys(Pt({}, t)).join("") != r
      );
    })
      ? function assign(e, t) {
          for (
            var n = _toObject(e),
              r = arguments.length,
              o = 1,
              i = Me.f,
              a = Ae.f;
            r > o;

          )
            for (
              var s,
                c = ve(arguments[o++]),
                l = i ? Pe(c).concat(i(c)) : Pe(c),
                u = l.length,
                d = 0;
              u > d;

            )
              (s = l[d++]), (Z && !a.call(c, s)) || (n[s] = c[s]);
          return n;
        }
      : Pt;
de(de.S + de.F, "Object", { assign: Mt });
var At =
  Object.is ||
  function is(e, t) {
    return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t;
  };
de(de.S, "Object", { is: At });
var check = function(e, t) {
    if ((_anObject(e), !Q(t) && null !== t))
      throw TypeError(t + ": can't set as prototype!");
  },
  Tt = {
    set:
      Object.setPrototypeOf ||
      ("__proto__" in {}
        ? (function(e, t, n) {
            try {
              (n = _ctx(
                Function.call,
                Be.f(Object.prototype, "__proto__").set,
                2
              ))(e, []),
                (t = !(e instanceof Array));
            } catch (e) {
              t = !0;
            }
            return function setPrototypeOf(e, r) {
              return check(e, r), t ? (e.__proto__ = r) : n(e, r), e;
            };
          })({}, !1)
        : void 0),
    check: check
  };
de(de.S, "Object", { setPrototypeOf: Tt.set });
var Rt = pe("toStringTag"),
  Nt =
    "Arguments" ==
    _cof(
      (function() {
        return arguments;
      })()
    ),
  _classof = function(e) {
    var t, n, r;
    return void 0 === e
      ? "Undefined"
      : null === e
      ? "Null"
      : "string" ==
        typeof (n = (function(e, t) {
          try {
            return e[t];
          } catch (e) {}
        })((t = Object(e)), Rt))
      ? n
      : Nt
      ? _cof(t)
      : "Object" == (r = _cof(t)) && "function" == typeof t.callee
      ? "Arguments"
      : r;
  },
  qt = {};
(qt[pe("toStringTag")] = "z"),
  qt + "" != "[object z]" &&
    ue(
      Object.prototype,
      "toString",
      function toString() {
        return "[object " + _classof(this) + "]";
      },
      !0
    );
var _invoke = function(e, t, n) {
    var r = void 0 === n;
    switch (t.length) {
      case 0:
        return r ? e() : e.call(n);
      case 1:
        return r ? e(t[0]) : e.call(n, t[0]);
      case 2:
        return r ? e(t[0], t[1]) : e.call(n, t[0], t[1]);
      case 3:
        return r ? e(t[0], t[1], t[2]) : e.call(n, t[0], t[1], t[2]);
      case 4:
        return r
          ? e(t[0], t[1], t[2], t[3])
          : e.call(n, t[0], t[1], t[2], t[3]);
    }
    return e.apply(n, t);
  },
  It = [].slice,
  Ft = {},
  construct = function(e, t, n) {
    if (!(t in Ft)) {
      for (var r = [], o = 0; o < t; o++) r[o] = "a[" + o + "]";
      Ft[t] = Function("F,a", "return new F(" + r.join(",") + ")");
    }
    return Ft[t](e, n);
  },
  Lt =
    Function.bind ||
    function bind(e) {
      var t = _aFunction(this),
        n = It.call(arguments, 1),
        bound = function() {
          var r = n.concat(It.call(arguments));
          return this instanceof bound
            ? construct(t, r.length, r)
            : _invoke(t, r, e);
        };
      return Q(t.prototype) && (bound.prototype = t.prototype), bound;
    };
de(de.P, "Function", { bind: Lt });
var Dt = oe.f,
  zt = Function.prototype,
  Ht = /^\s*function ([^ (]*)/;
"name" in zt ||
  (Z &&
    Dt(zt, "name", {
      configurable: !0,
      get: function() {
        try {
          return ("" + this).match(Ht)[1];
        } catch (e) {
          return "";
        }
      }
    }));
var Vt = pe("hasInstance"),
  Ut = Function.prototype;
Vt in Ut ||
  oe.f(Ut, Vt, {
    value: function(e) {
      if ("function" != typeof this || !Q(e)) return !1;
      if (!Q(this.prototype)) return e instanceof this;
      for (; (e = Ot(e)); ) if (this.prototype === e) return !0;
      return !1;
    }
  });
var Gt = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",
  Bt = "[" + Gt + "]",
  Wt = RegExp("^" + Bt + Bt + "*"),
  Yt = RegExp(Bt + Bt + "*$"),
  exporter = function(e, t, n) {
    var r = {},
      o = _fails(function() {
        return !!Gt[e]() || "​" != "​"[e]();
      }),
      i = (r[e] = o ? t($t) : Gt[e]);
    n && (r[n] = i), de(de.P + de.F * o, "String", r);
  },
  $t = (exporter.trim = function(e, t) {
    return (
      (e = String(_defined(e))),
      1 & t && (e = e.replace(Wt, "")),
      2 & t && (e = e.replace(Yt, "")),
      e
    );
  }),
  Jt = exporter,
  Kt = J.parseInt,
  Zt = Jt.trim,
  Xt = /^[-+]?0[xX]/,
  Qt =
    8 !== Kt(Gt + "08") || 22 !== Kt(Gt + "0x16")
      ? function parseInt(e, t) {
          var n = Zt(String(e), 3);
          return Kt(n, t >>> 0 || (Xt.test(n) ? 16 : 10));
        }
      : Kt;
de(de.G + de.F * (parseInt != Qt), { parseInt: Qt });
var en = J.parseFloat,
  tn = Jt.trim,
  nn =
    1 / en(Gt + "-0") != -1 / 0
      ? function parseFloat(e) {
          var t = tn(String(e), 3),
            n = en(t);
          return 0 === n && "-" == t.charAt(0) ? -0 : n;
        }
      : en;
de(de.G + de.F * (parseFloat != nn), { parseFloat: nn });
var rn = Tt.set,
  _inheritIfRequired = function(e, t, n) {
    var r,
      o = t.constructor;
    return (
      o !== n &&
        "function" == typeof o &&
        (r = o.prototype) !== n.prototype &&
        Q(r) &&
        rn &&
        rn(e, r),
      e
    );
  },
  on = De.f,
  an = Be.f,
  sn = oe.f,
  cn = Jt.trim,
  ln = J.Number,
  un = ln,
  dn = ln.prototype,
  hn = "Number" == _cof(Fe(dn)),
  pn = "trim" in String.prototype,
  toNumber = function(e) {
    var t = _toPrimitive(e, !1);
    if ("string" == typeof t && t.length > 2) {
      var n,
        r,
        o,
        i = (t = pn ? t.trim() : cn(t, 3)).charCodeAt(0);
      if (43 === i || 45 === i) {
        if (88 === (n = t.charCodeAt(2)) || 120 === n) return NaN;
      } else if (48 === i) {
        switch (t.charCodeAt(1)) {
          case 66:
          case 98:
            (r = 2), (o = 49);
            break;
          case 79:
          case 111:
            (r = 8), (o = 55);
            break;
          default:
            return +t;
        }
        for (var a, s = t.slice(2), c = 0, l = s.length; c < l; c++)
          if ((a = s.charCodeAt(c)) < 48 || a > o) return NaN;
        return parseInt(s, r);
      }
    }
    return +t;
  };
if (!ln(" 0o1") || !ln("0b1") || ln("+0x1")) {
  ln = function Number(e) {
    var t = arguments.length < 1 ? 0 : e,
      n = this;
    return n instanceof ln &&
      (hn
        ? _fails(function() {
            dn.valueOf.call(n);
          })
        : "Number" != _cof(n))
      ? _inheritIfRequired(new un(toNumber(t)), n, ln)
      : toNumber(t);
  };
  for (
    var fn,
      mn = Z
        ? on(un)
        : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(
            ","
          ),
      gn = 0;
    mn.length > gn;
    gn++
  )
    _has(un, (fn = mn[gn])) && !_has(ln, fn) && sn(ln, fn, an(un, fn));
  (ln.prototype = dn), (dn.constructor = ln), ue(J, "Number", ln);
}
var _aNumberValue = function(e, t) {
    if ("number" != typeof e && "Number" != _cof(e)) throw TypeError(t);
    return +e;
  },
  _n = function repeat(e) {
    var t = String(_defined(this)),
      n = "",
      r = _toInteger(e);
    if (r < 0 || r == 1 / 0) throw RangeError("Count can't be negative");
    for (; r > 0; (r >>>= 1) && (t += t)) 1 & r && (n += t);
    return n;
  },
  yn = (1).toFixed,
  vn = Math.floor,
  bn = [0, 0, 0, 0, 0, 0],
  wn = "Number.toFixed: incorrect invocation!",
  multiply = function(e, t) {
    for (var n = -1, r = t; ++n < 6; )
      (r += e * bn[n]), (bn[n] = r % 1e7), (r = vn(r / 1e7));
  },
  divide = function(e) {
    for (var t = 6, n = 0; --t >= 0; )
      (n += bn[t]), (bn[t] = vn(n / e)), (n = (n % e) * 1e7);
  },
  numToString = function() {
    for (var e = 6, t = ""; --e >= 0; )
      if ("" !== t || 0 === e || 0 !== bn[e]) {
        var n = String(bn[e]);
        t = "" === t ? n : t + _n.call("0", 7 - n.length) + n;
      }
    return t;
  },
  pow = function(e, t, n) {
    return 0 === t
      ? n
      : t % 2 == 1
      ? pow(e, t - 1, n * e)
      : pow(e * e, t / 2, n);
  };
de(
  de.P +
    de.F *
      ((!!yn &&
        ("0.000" !== (8e-5).toFixed(3) ||
          "1" !== (0.9).toFixed(0) ||
          "1.25" !== (1.255).toFixed(2) ||
          "1000000000000000128" !== (0xde0b6b3a7640080).toFixed(0))) ||
        !_fails(function() {
          yn.call({});
        })),
  "Number",
  {
    toFixed: function toFixed(e) {
      var t,
        n,
        r,
        o,
        i = _aNumberValue(this, wn),
        a = _toInteger(e),
        s = "",
        c = "0";
      if (a < 0 || a > 20) throw RangeError(wn);
      if (i != i) return "NaN";
      if (i <= -1e21 || i >= 1e21) return String(i);
      if ((i < 0 && ((s = "-"), (i = -i)), i > 1e-21))
        if (
          ((n =
            (t =
              (function(e) {
                for (var t = 0, n = e; n >= 4096; ) (t += 12), (n /= 4096);
                for (; n >= 2; ) (t += 1), (n /= 2);
                return t;
              })(i * pow(2, 69, 1)) - 69) < 0
              ? i * pow(2, -t, 1)
              : i / pow(2, t, 1)),
          (n *= 4503599627370496),
          (t = 52 - t) > 0)
        ) {
          for (multiply(0, n), r = a; r >= 7; ) multiply(1e7, 0), (r -= 7);
          for (multiply(pow(10, r, 1), 0), r = t - 1; r >= 23; )
            divide(1 << 23), (r -= 23);
          divide(1 << r), multiply(1, 1), divide(2), (c = numToString());
        } else
          multiply(0, n),
            multiply(1 << -t, 0),
            (c = numToString() + _n.call("0", a));
      return (c =
        a > 0
          ? s +
            ((o = c.length) <= a
              ? "0." + _n.call("0", a - o) + c
              : c.slice(0, o - a) + "." + c.slice(o - a))
          : s + c);
    }
  }
);
var Sn = (1).toPrecision;
de(
  de.P +
    de.F *
      (_fails(function() {
        return "1" !== Sn.call(1, void 0);
      }) ||
        !_fails(function() {
          Sn.call({});
        })),
  "Number",
  {
    toPrecision: function toPrecision(e) {
      var t = _aNumberValue(this, "Number#toPrecision: incorrect invocation!");
      return void 0 === e ? Sn.call(t) : Sn.call(t, e);
    }
  }
),
  de(de.S, "Number", { EPSILON: Math.pow(2, -52) });
var xn = J.isFinite;
de(de.S, "Number", {
  isFinite: function isFinite(e) {
    return "number" == typeof e && xn(e);
  }
});
var En = Math.floor,
  On = function isInteger(e) {
    return !Q(e) && isFinite(e) && En(e) === e;
  };
de(de.S, "Number", { isInteger: On }),
  de(de.S, "Number", {
    isNaN: function isNaN(e) {
      return e != e;
    }
  });
var kn = Math.abs;
de(de.S, "Number", {
  isSafeInteger: function isSafeInteger(e) {
    return On(e) && kn(e) <= 9007199254740991;
  }
}),
  de(de.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 }),
  de(de.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 }),
  de(de.S + de.F * (Number.parseFloat != nn), "Number", { parseFloat: nn }),
  de(de.S + de.F * (Number.parseInt != Qt), "Number", { parseInt: Qt });
var Cn =
    Math.log1p ||
    function log1p(e) {
      return (e = +e) > -1e-8 && e < 1e-8 ? e - (e * e) / 2 : Math.log(1 + e);
    },
  jn = Math.sqrt,
  Pn = Math.acosh;
de(
  de.S +
    de.F *
      !(Pn && 710 == Math.floor(Pn(Number.MAX_VALUE)) && Pn(1 / 0) == 1 / 0),
  "Math",
  {
    acosh: function acosh(e) {
      return (e = +e) < 1
        ? NaN
        : e > 94906265.62425156
        ? Math.log(e) + Math.LN2
        : Cn(e - 1 + jn(e - 1) * jn(e + 1));
    }
  }
);
var Mn = Math.asinh;
de(de.S + de.F * !(Mn && 1 / Mn(0) > 0), "Math", {
  asinh: function asinh(e) {
    return isFinite((e = +e)) && 0 != e
      ? e < 0
        ? -asinh(-e)
        : Math.log(e + Math.sqrt(e * e + 1))
      : e;
  }
});
var An = Math.atanh;
de(de.S + de.F * !(An && 1 / An(-0) < 0), "Math", {
  atanh: function atanh(e) {
    return 0 == (e = +e) ? e : Math.log((1 + e) / (1 - e)) / 2;
  }
});
var Tn =
  Math.sign ||
  function sign(e) {
    return 0 == (e = +e) || e != e ? e : e < 0 ? -1 : 1;
  };
de(de.S, "Math", {
  cbrt: function cbrt(e) {
    return Tn((e = +e)) * Math.pow(Math.abs(e), 1 / 3);
  }
}),
  de(de.S, "Math", {
    clz32: function clz32(e) {
      return (e >>>= 0) ? 31 - Math.floor(Math.log(e + 0.5) * Math.LOG2E) : 32;
    }
  });
var Rn = Math.exp;
de(de.S, "Math", {
  cosh: function cosh(e) {
    return (Rn((e = +e)) + Rn(-e)) / 2;
  }
});
var Nn = Math.expm1,
  qn =
    !Nn ||
    Nn(10) > 22025.465794806718 ||
    Nn(10) < 22025.465794806718 ||
    -2e-17 != Nn(-2e-17)
      ? function expm1(e) {
          return 0 == (e = +e)
            ? e
            : e > -1e-6 && e < 1e-6
            ? e + (e * e) / 2
            : Math.exp(e) - 1;
        }
      : Nn;
de(de.S + de.F * (qn != Math.expm1), "Math", { expm1: qn });
var In = Math.pow,
  Fn = In(2, -52),
  Ln = In(2, -23),
  Dn = In(2, 127) * (2 - Ln),
  zn = In(2, -126),
  Hn =
    Math.fround ||
    function fround(e) {
      var t,
        n,
        r = Math.abs(e),
        o = Tn(e);
      return r < zn
        ? o *
            (function(e) {
              return e + 1 / Fn - 1 / Fn;
            })(r / zn / Ln) *
            zn *
            Ln
        : (n = (t = (1 + Ln / Fn) * r) - (t - r)) > Dn || n != n
        ? o * (1 / 0)
        : o * n;
    };
de(de.S, "Math", { fround: Hn });
var Vn = Math.abs;
de(de.S, "Math", {
  hypot: function hypot(e, t) {
    for (var n, r, o = 0, i = 0, a = arguments.length, s = 0; i < a; )
      s < (n = Vn(arguments[i++]))
        ? ((o = o * (r = s / n) * r + 1), (s = n))
        : (o += n > 0 ? (r = n / s) * r : n);
    return s === 1 / 0 ? 1 / 0 : s * Math.sqrt(o);
  }
});
var Un = Math.imul;
de(
  de.S +
    de.F *
      _fails(function() {
        return -5 != Un(4294967295, 5) || 2 != Un.length;
      }),
  "Math",
  {
    imul: function imul(e, t) {
      var n = +e,
        r = +t,
        o = 65535 & n,
        i = 65535 & r;
      return (
        0 |
        (o * i +
          ((((65535 & (n >>> 16)) * i + o * (65535 & (r >>> 16))) << 16) >>> 0))
      );
    }
  }
),
  de(de.S, "Math", {
    log10: function log10(e) {
      return Math.log(e) * Math.LOG10E;
    }
  }),
  de(de.S, "Math", { log1p: Cn }),
  de(de.S, "Math", {
    log2: function log2(e) {
      return Math.log(e) / Math.LN2;
    }
  }),
  de(de.S, "Math", { sign: Tn });
var Gn = Math.exp;
de(
  de.S +
    de.F *
      _fails(function() {
        return -2e-17 != !Math.sinh(-2e-17);
      }),
  "Math",
  {
    sinh: function sinh(e) {
      return Math.abs((e = +e)) < 1
        ? (qn(e) - qn(-e)) / 2
        : (Gn(e - 1) - Gn(-e - 1)) * (Math.E / 2);
    }
  }
);
var Bn = Math.exp;
de(de.S, "Math", {
  tanh: function tanh(e) {
    var t = qn((e = +e)),
      n = qn(-e);
    return t == 1 / 0 ? 1 : n == 1 / 0 ? -1 : (t - n) / (Bn(e) + Bn(-e));
  }
}),
  de(de.S, "Math", {
    trunc: function trunc(e) {
      return (e > 0 ? Math.floor : Math.ceil)(e);
    }
  });
var Wn = String.fromCharCode,
  Yn = String.fromCodePoint;
de(de.S + de.F * (!!Yn && 1 != Yn.length), "String", {
  fromCodePoint: function fromCodePoint(e) {
    for (var t, n = [], r = arguments.length, o = 0; r > o; ) {
      if (((t = +arguments[o++]), _toAbsoluteIndex(t, 1114111) !== t))
        throw RangeError(t + " is not a valid code point");
      n.push(
        t < 65536 ? Wn(t) : Wn(55296 + ((t -= 65536) >> 10), (t % 1024) + 56320)
      );
    }
    return n.join("");
  }
}),
  de(de.S, "String", {
    raw: function raw(e) {
      for (
        var t = _toIobject(e.raw),
          n = _toLength(t.length),
          r = arguments.length,
          o = [],
          i = 0;
        n > i;

      )
        o.push(String(t[i++])), i < r && o.push(String(arguments[i]));
      return o.join("");
    }
  }),
  Jt("trim", function(e) {
    return function trim() {
      return e(this, 3);
    };
  });
var _stringAt = function(e) {
    return function(t, n) {
      var r,
        o,
        i = String(_defined(t)),
        a = _toInteger(n),
        s = i.length;
      return a < 0 || a >= s
        ? e
          ? ""
          : void 0
        : (r = i.charCodeAt(a)) < 55296 ||
          r > 56319 ||
          a + 1 === s ||
          (o = i.charCodeAt(a + 1)) < 56320 ||
          o > 57343
        ? e
          ? i.charAt(a)
          : r
        : e
        ? i.slice(a, a + 2)
        : o - 56320 + ((r - 55296) << 10) + 65536;
    };
  },
  $n = {},
  Jn = {};
ie(Jn, pe("iterator"), function() {
  return this;
});
var _iterCreate = function(e, t, n) {
    (e.prototype = Fe(Jn, { next: _propertyDesc(1, n) })),
      _setToStringTag(e, t + " Iterator");
  },
  Kn = pe("iterator"),
  Zn = !([].keys && "next" in [].keys()),
  returnThis = function() {
    return this;
  },
  _iterDefine = function(e, t, n, r, o, i, a) {
    _iterCreate(n, t, r);
    var s,
      c,
      l,
      getMethod = function(e) {
        if (!Zn && e in p) return p[e];
        switch (e) {
          case "keys":
            return function keys() {
              return new n(this, e);
            };
          case "values":
            return function values() {
              return new n(this, e);
            };
        }
        return function entries() {
          return new n(this, e);
        };
      },
      u = t + " Iterator",
      d = "values" == o,
      h = !1,
      p = e.prototype,
      f = p[Kn] || p["@@iterator"] || (o && p[o]),
      m = f || getMethod(o),
      g = o ? (d ? getMethod("entries") : m) : void 0,
      _ = ("Array" == t && p.entries) || f;
    if (
      (_ &&
        (l = Ot(_.call(new e()))) !== Object.prototype &&
        l.next &&
        (_setToStringTag(l, u, !0),
        "function" != typeof l[Kn] && ie(l, Kn, returnThis)),
      d &&
        f &&
        "values" !== f.name &&
        ((h = !0),
        (m = function values() {
          return f.call(this);
        })),
      (Zn || h || !p[Kn]) && ie(p, Kn, m),
      ($n[t] = m),
      ($n[u] = returnThis),
      o)
    )
      if (
        ((s = {
          values: d ? m : getMethod("values"),
          keys: i ? m : getMethod("keys"),
          entries: g
        }),
        a)
      )
        for (c in s) c in p || ue(p, c, s[c]);
      else de(de.P + de.F * (Zn || h), t, s);
    return s;
  },
  Xn = _stringAt(!0);
_iterDefine(
  String,
  "String",
  function(e) {
    (this._t = String(e)), (this._i = 0);
  },
  function() {
    var e,
      t = this._t,
      n = this._i;
    return n >= t.length
      ? { value: void 0, done: !0 }
      : ((e = Xn(t, n)), (this._i += e.length), { value: e, done: !1 });
  }
);
var Qn = _stringAt(!1);
de(de.P, "String", {
  codePointAt: function codePointAt(e) {
    return Qn(this, e);
  }
});
var er = pe("match"),
  _isRegexp = function(e) {
    var t;
    return Q(e) && (void 0 !== (t = e[er]) ? !!t : "RegExp" == _cof(e));
  },
  _stringContext = function(e, t, n) {
    if (_isRegexp(t)) throw TypeError("String#" + n + " doesn't accept regex!");
    return String(_defined(e));
  },
  tr = pe("match"),
  _failsIsRegexp = function(e) {
    var t = /./;
    try {
      "/./"[e](t);
    } catch (n) {
      try {
        return (t[tr] = !1), !"/./"[e](t);
      } catch (e) {}
    }
    return !0;
  },
  nr = "".endsWith;
de(de.P + de.F * _failsIsRegexp("endsWith"), "String", {
  endsWith: function endsWith(e) {
    var t = _stringContext(this, e, "endsWith"),
      n = arguments.length > 1 ? arguments[1] : void 0,
      r = _toLength(t.length),
      o = void 0 === n ? r : Math.min(_toLength(n), r),
      i = String(e);
    return nr ? nr.call(t, i, o) : t.slice(o - i.length, o) === i;
  }
});
de(de.P + de.F * _failsIsRegexp("includes"), "String", {
  includes: function includes(e) {
    return !!~_stringContext(this, e, "includes").indexOf(
      e,
      arguments.length > 1 ? arguments[1] : void 0
    );
  }
}),
  de(de.P, "String", { repeat: _n });
var rr = "".startsWith;
de(de.P + de.F * _failsIsRegexp("startsWith"), "String", {
  startsWith: function startsWith(e) {
    var t = _stringContext(this, e, "startsWith"),
      n = _toLength(
        Math.min(arguments.length > 1 ? arguments[1] : void 0, t.length)
      ),
      r = String(e);
    return rr ? rr.call(t, r, n) : t.slice(n, n + r.length) === r;
  }
});
var or = /"/g,
  createHTML = function(e, t, n, r) {
    var o = String(_defined(e)),
      i = "<" + t;
    return (
      "" !== n && (i += " " + n + '="' + String(r).replace(or, "&quot;") + '"'),
      i + ">" + o + "</" + t + ">"
    );
  },
  _stringHtml = function(e, t) {
    var n = {};
    (n[e] = t(createHTML)),
      de(
        de.P +
          de.F *
            _fails(function() {
              var t = ""[e]('"');
              return t !== t.toLowerCase() || t.split('"').length > 3;
            }),
        "String",
        n
      );
  };
_stringHtml("anchor", function(e) {
  return function anchor(t) {
    return e(this, "a", "name", t);
  };
}),
  _stringHtml("big", function(e) {
    return function big() {
      return e(this, "big", "", "");
    };
  }),
  _stringHtml("blink", function(e) {
    return function blink() {
      return e(this, "blink", "", "");
    };
  }),
  _stringHtml("bold", function(e) {
    return function bold() {
      return e(this, "b", "", "");
    };
  }),
  _stringHtml("fixed", function(e) {
    return function fixed() {
      return e(this, "tt", "", "");
    };
  }),
  _stringHtml("fontcolor", function(e) {
    return function fontcolor(t) {
      return e(this, "font", "color", t);
    };
  }),
  _stringHtml("fontsize", function(e) {
    return function fontsize(t) {
      return e(this, "font", "size", t);
    };
  }),
  _stringHtml("italics", function(e) {
    return function italics() {
      return e(this, "i", "", "");
    };
  }),
  _stringHtml("link", function(e) {
    return function link(t) {
      return e(this, "a", "href", t);
    };
  }),
  _stringHtml("small", function(e) {
    return function small() {
      return e(this, "small", "", "");
    };
  }),
  _stringHtml("strike", function(e) {
    return function strike() {
      return e(this, "strike", "", "");
    };
  }),
  _stringHtml("sub", function(e) {
    return function sub() {
      return e(this, "sub", "", "");
    };
  }),
  _stringHtml("sup", function(e) {
    return function sup() {
      return e(this, "sup", "", "");
    };
  }),
  de(de.S, "Date", {
    now: function() {
      return new Date().getTime();
    }
  }),
  de(
    de.P +
      de.F *
        _fails(function() {
          return (
            null !== new Date(NaN).toJSON() ||
            1 !==
              Date.prototype.toJSON.call({
                toISOString: function() {
                  return 1;
                }
              })
          );
        }),
    "Date",
    {
      toJSON: function toJSON(e) {
        var t = _toObject(this),
          n = _toPrimitive(t);
        return "number" != typeof n || isFinite(n) ? t.toISOString() : null;
      }
    }
  );
var ir = Date.prototype.getTime,
  ar = Date.prototype.toISOString,
  lz = function(e) {
    return e > 9 ? e : "0" + e;
  },
  sr =
    _fails(function() {
      return "0385-07-25T07:06:39.999Z" != ar.call(new Date(-5e13 - 1));
    }) ||
    !_fails(function() {
      ar.call(new Date(NaN));
    })
      ? function toISOString() {
          if (!isFinite(ir.call(this))) throw RangeError("Invalid time value");
          var e = this,
            t = e.getUTCFullYear(),
            n = e.getUTCMilliseconds(),
            r = t < 0 ? "-" : t > 9999 ? "+" : "";
          return (
            r +
            ("00000" + Math.abs(t)).slice(r ? -6 : -4) +
            "-" +
            lz(e.getUTCMonth() + 1) +
            "-" +
            lz(e.getUTCDate()) +
            "T" +
            lz(e.getUTCHours()) +
            ":" +
            lz(e.getUTCMinutes()) +
            ":" +
            lz(e.getUTCSeconds()) +
            "." +
            (n > 99 ? n : "0" + lz(n)) +
            "Z"
          );
        }
      : ar;
de(de.P + de.F * (Date.prototype.toISOString !== sr), "Date", {
  toISOString: sr
});
var cr = Date.prototype,
  lr = cr.toString,
  ur = cr.getTime;
new Date(NaN) + "" != "Invalid Date" &&
  ue(cr, "toString", function toString() {
    var e = ur.call(this);
    return e == e ? lr.call(this) : "Invalid Date";
  });
var dr = pe("toPrimitive"),
  hr = Date.prototype;
dr in hr ||
  ie(hr, dr, function(e) {
    if ("string" !== e && "number" !== e && "default" !== e)
      throw TypeError("Incorrect hint");
    return _toPrimitive(_anObject(this), "number" != e);
  }),
  de(de.S, "Array", { isArray: Te });
var _iterCall = function(e, t, n, r) {
    try {
      return r ? t(_anObject(n)[0], n[1]) : t(n);
    } catch (t) {
      var o = e.return;
      throw (void 0 !== o && _anObject(o.call(e)), t);
    }
  },
  pr = pe("iterator"),
  fr = Array.prototype,
  _isArrayIter = function(e) {
    return void 0 !== e && ($n.Array === e || fr[pr] === e);
  },
  _createProperty = function(e, t, n) {
    t in e ? oe.f(e, t, _propertyDesc(0, n)) : (e[t] = n);
  },
  mr = pe("iterator"),
  gr = (X.getIteratorMethod = function(e) {
    if (null != e) return e[mr] || e["@@iterator"] || $n[_classof(e)];
  }),
  _r = pe("iterator"),
  yr = !1;
try {
  var vr = [7][_r]();
  (vr.return = function() {
    yr = !0;
  }),
    Array.from(vr, function() {
      throw 2;
    });
} catch (e) {}
var _iterDetect = function(e, t) {
  if (!t && !yr) return !1;
  var n = !1;
  try {
    var r = [7],
      o = r[_r]();
    (o.next = function() {
      return { done: (n = !0) };
    }),
      (r[_r] = function() {
        return o;
      }),
      e(r);
  } catch (e) {}
  return n;
};
de(
  de.S +
    de.F *
      !_iterDetect(function(e) {
        Array.from(e);
      }),
  "Array",
  {
    from: function from(e) {
      var t,
        n,
        r,
        o,
        i = _toObject(e),
        a = "function" == typeof this ? this : Array,
        s = arguments.length,
        c = s > 1 ? arguments[1] : void 0,
        l = void 0 !== c,
        u = 0,
        d = gr(i);
      if (
        (l && (c = _ctx(c, s > 2 ? arguments[2] : void 0, 2)),
        null == d || (a == Array && _isArrayIter(d)))
      )
        for (n = new a((t = _toLength(i.length))); t > u; u++)
          _createProperty(n, u, l ? c(i[u], u) : i[u]);
      else
        for (o = d.call(i), n = new a(); !(r = o.next()).done; u++)
          _createProperty(
            n,
            u,
            l ? _iterCall(o, c, [r.value, u], !0) : r.value
          );
      return (n.length = u), n;
    }
  }
),
  de(
    de.S +
      de.F *
        _fails(function() {
          function F() {}
          return !(Array.of.call(F) instanceof F);
        }),
    "Array",
    {
      of: function of() {
        for (
          var e = 0,
            t = arguments.length,
            n = new ("function" == typeof this ? this : Array)(t);
          t > e;

        )
          _createProperty(n, e, arguments[e++]);
        return (n.length = t), n;
      }
    }
  );
var _strictMethod = function(e, t) {
    return (
      !!e &&
      _fails(function() {
        t ? e.call(null, function() {}, 1) : e.call(null);
      })
    );
  },
  br = [].join;
de(de.P + de.F * (ve != Object || !_strictMethod(br)), "Array", {
  join: function join(e) {
    return br.call(_toIobject(this), void 0 === e ? "," : e);
  }
});
var wr = [].slice;
de(
  de.P +
    de.F *
      _fails(function() {
        qe && wr.call(qe);
      }),
  "Array",
  {
    slice: function slice(e, t) {
      var n = _toLength(this.length),
        r = _cof(this);
      if (((t = void 0 === t ? n : t), "Array" == r))
        return wr.call(this, e, t);
      for (
        var o = _toAbsoluteIndex(e, n),
          i = _toAbsoluteIndex(t, n),
          a = _toLength(i - o),
          s = new Array(a),
          c = 0;
        c < a;
        c++
      )
        s[c] = "String" == r ? this.charAt(o + c) : this[o + c];
      return s;
    }
  }
);
var Sr = [].sort,
  xr = [1, 2, 3];
de(
  de.P +
    de.F *
      (_fails(function() {
        xr.sort(void 0);
      }) ||
        !_fails(function() {
          xr.sort(null);
        }) ||
        !_strictMethod(Sr)),
  "Array",
  {
    sort: function sort(e) {
      return void 0 === e
        ? Sr.call(_toObject(this))
        : Sr.call(_toObject(this), _aFunction(e));
    }
  }
);
var Er = pe("species"),
  _arraySpeciesCreate = function(e, t) {
    return new ((function(e) {
      var t;
      return (
        Te(e) &&
          ("function" != typeof (t = e.constructor) ||
            (t !== Array && !Te(t.prototype)) ||
            (t = void 0),
          Q(t) && null === (t = t[Er]) && (t = void 0)),
        void 0 === t ? Array : t
      );
    })(e))(t);
  },
  _arrayMethods = function(e, t) {
    var n = 1 == e,
      r = 2 == e,
      o = 3 == e,
      i = 4 == e,
      a = 6 == e,
      s = 5 == e || a,
      c = t || _arraySpeciesCreate;
    return function(t, l, u) {
      for (
        var d,
          h,
          p = _toObject(t),
          f = ve(p),
          m = _ctx(l, u, 3),
          g = _toLength(f.length),
          _ = 0,
          y = n ? c(t, g) : r ? c(t, 0) : void 0;
        g > _;
        _++
      )
        if ((s || _ in f) && ((h = m((d = f[_]), _, p)), e))
          if (n) y[_] = h;
          else if (h)
            switch (e) {
              case 3:
                return !0;
              case 5:
                return d;
              case 6:
                return _;
              case 2:
                y.push(d);
            }
          else if (i) return !1;
      return a ? -1 : o || i ? i : y;
    };
  },
  Or = _arrayMethods(0),
  kr = _strictMethod([].forEach, !0);
de(de.P + de.F * !kr, "Array", {
  forEach: function forEach(e) {
    return Or(this, e, arguments[1]);
  }
});
var Cr = _arrayMethods(1);
de(de.P + de.F * !_strictMethod([].map, !0), "Array", {
  map: function map(e) {
    return Cr(this, e, arguments[1]);
  }
});
var jr = _arrayMethods(2);
de(de.P + de.F * !_strictMethod([].filter, !0), "Array", {
  filter: function filter(e) {
    return jr(this, e, arguments[1]);
  }
});
var Pr = _arrayMethods(3);
de(de.P + de.F * !_strictMethod([].some, !0), "Array", {
  some: function some(e) {
    return Pr(this, e, arguments[1]);
  }
});
var Mr = _arrayMethods(4);
de(de.P + de.F * !_strictMethod([].every, !0), "Array", {
  every: function every(e) {
    return Mr(this, e, arguments[1]);
  }
});
var _arrayReduce = function(e, t, n, r, o) {
  _aFunction(t);
  var i = _toObject(e),
    a = ve(i),
    s = _toLength(i.length),
    c = o ? s - 1 : 0,
    l = o ? -1 : 1;
  if (n < 2)
    for (;;) {
      if (c in a) {
        (r = a[c]), (c += l);
        break;
      }
      if (((c += l), o ? c < 0 : s <= c))
        throw TypeError("Reduce of empty array with no initial value");
    }
  for (; o ? c >= 0 : s > c; c += l) c in a && (r = t(r, a[c], c, i));
  return r;
};
de(de.P + de.F * !_strictMethod([].reduce, !0), "Array", {
  reduce: function reduce(e) {
    return _arrayReduce(this, e, arguments.length, arguments[1], !1);
  }
}),
  de(de.P + de.F * !_strictMethod([].reduceRight, !0), "Array", {
    reduceRight: function reduceRight(e) {
      return _arrayReduce(this, e, arguments.length, arguments[1], !0);
    }
  });
var Ar = _arrayIncludes(!1),
  Tr = [].indexOf,
  Rr = !!Tr && 1 / [1].indexOf(1, -0) < 0;
de(de.P + de.F * (Rr || !_strictMethod(Tr)), "Array", {
  indexOf: function indexOf(e) {
    return Rr ? Tr.apply(this, arguments) || 0 : Ar(this, e, arguments[1]);
  }
});
var Nr = [].lastIndexOf,
  qr = !!Nr && 1 / [1].lastIndexOf(1, -0) < 0;
de(de.P + de.F * (qr || !_strictMethod(Nr)), "Array", {
  lastIndexOf: function lastIndexOf(e) {
    if (qr) return Nr.apply(this, arguments) || 0;
    var t = _toIobject(this),
      n = _toLength(t.length),
      r = n - 1;
    for (
      arguments.length > 1 && (r = Math.min(r, _toInteger(arguments[1]))),
        r < 0 && (r = n + r);
      r >= 0;
      r--
    )
      if (r in t && t[r] === e) return r || 0;
    return -1;
  }
});
var Ir =
    [].copyWithin ||
    function copyWithin(e, t) {
      var n = _toObject(this),
        r = _toLength(n.length),
        o = _toAbsoluteIndex(e, r),
        i = _toAbsoluteIndex(t, r),
        a = arguments.length > 2 ? arguments[2] : void 0,
        s = Math.min((void 0 === a ? r : _toAbsoluteIndex(a, r)) - i, r - o),
        c = 1;
      for (
        i < o && o < i + s && ((c = -1), (i += s - 1), (o += s - 1));
        s-- > 0;

      )
        i in n ? (n[o] = n[i]) : delete n[o], (o += c), (i += c);
      return n;
    },
  Fr = pe("unscopables"),
  Lr = Array.prototype;
null == Lr[Fr] && ie(Lr, Fr, {});
var _addToUnscopables = function(e) {
  Lr[Fr][e] = !0;
};
de(de.P, "Array", { copyWithin: Ir }), _addToUnscopables("copyWithin");
var Dr = function fill(e) {
  for (
    var t = _toObject(this),
      n = _toLength(t.length),
      r = arguments.length,
      o = _toAbsoluteIndex(r > 1 ? arguments[1] : void 0, n),
      i = r > 2 ? arguments[2] : void 0,
      a = void 0 === i ? n : _toAbsoluteIndex(i, n);
    a > o;

  )
    t[o++] = e;
  return t;
};
de(de.P, "Array", { fill: Dr }), _addToUnscopables("fill");
var zr = _arrayMethods(5),
  Hr = !0;
"find" in [] &&
  Array(1).find(function() {
    Hr = !1;
  }),
  de(de.P + de.F * Hr, "Array", {
    find: function find(e) {
      return zr(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }),
  _addToUnscopables("find");
var Vr = _arrayMethods(6),
  Ur = !0;
"findIndex" in [] &&
  Array(1).findIndex(function() {
    Ur = !1;
  }),
  de(de.P + de.F * Ur, "Array", {
    findIndex: function findIndex(e) {
      return Vr(this, e, arguments.length > 1 ? arguments[1] : void 0);
    }
  }),
  _addToUnscopables("findIndex");
var Gr = pe("species"),
  _setSpecies = function(e) {
    var t = J[e];
    Z &&
      t &&
      !t[Gr] &&
      oe.f(t, Gr, {
        configurable: !0,
        get: function() {
          return this;
        }
      });
  };
_setSpecies("Array");
var _iterStep = function(e, t) {
    return { value: t, done: !!e };
  },
  Br = _iterDefine(
    Array,
    "Array",
    function(e, t) {
      (this._t = _toIobject(e)), (this._i = 0), (this._k = t);
    },
    function() {
      var e = this._t,
        t = this._k,
        n = this._i++;
      return !e || n >= e.length
        ? ((this._t = void 0), _iterStep(1))
        : _iterStep(0, "keys" == t ? n : "values" == t ? e[n] : [n, e[n]]);
    },
    "values"
  );
($n.Arguments = $n.Array),
  _addToUnscopables("keys"),
  _addToUnscopables("values"),
  _addToUnscopables("entries");
var _flags = function() {
    var e = _anObject(this),
      t = "";
    return (
      e.global && (t += "g"),
      e.ignoreCase && (t += "i"),
      e.multiline && (t += "m"),
      e.unicode && (t += "u"),
      e.sticky && (t += "y"),
      t
    );
  },
  Wr = oe.f,
  Yr = De.f,
  $r = J.RegExp,
  Jr = $r,
  Kr = $r.prototype,
  Zr = /a/g,
  Xr = /a/g,
  Qr = new $r(Zr) !== Zr;
if (
  Z &&
  (!Qr ||
    _fails(function() {
      return (
        (Xr[pe("match")] = !1),
        $r(Zr) != Zr || $r(Xr) == Xr || "/a/i" != $r(Zr, "i")
      );
    }))
) {
  $r = function RegExp(e, t) {
    var n = this instanceof $r,
      r = _isRegexp(e),
      o = void 0 === t;
    return !n && r && e.constructor === $r && o
      ? e
      : _inheritIfRequired(
          Qr
            ? new Jr(r && !o ? e.source : e, t)
            : Jr(
                (r = e instanceof $r) ? e.source : e,
                r && o ? _flags.call(e) : t
              ),
          n ? this : Kr,
          $r
        );
  };
  for (
    var proxy = function(e) {
        (e in $r) ||
          Wr($r, e, {
            configurable: !0,
            get: function() {
              return Jr[e];
            },
            set: function(t) {
              Jr[e] = t;
            }
          });
      },
      eo = Yr(Jr),
      to = 0;
    eo.length > to;

  )
    proxy(eo[to++]);
  (Kr.constructor = $r), ($r.prototype = Kr), ue(J, "RegExp", $r);
}
_setSpecies("RegExp");
var no = RegExp.prototype.exec,
  ro = String.prototype.replace,
  oo = no,
  io = (function() {
    var e = /a/,
      t = /b*/g;
    return (
      no.call(e, "a"), no.call(t, "a"), 0 !== e.lastIndex || 0 !== t.lastIndex
    );
  })(),
  ao = void 0 !== /()??/.exec("")[1];
(io || ao) &&
  (oo = function exec(e) {
    var t,
      n,
      r,
      o,
      i = this;
    return (
      ao && (n = new RegExp("^" + i.source + "$(?!\\s)", _flags.call(i))),
      io && (t = i.lastIndex),
      (r = no.call(i, e)),
      io && r && (i.lastIndex = i.global ? r.index + r[0].length : t),
      ao &&
        r &&
        r.length > 1 &&
        ro.call(r[0], n, function() {
          for (o = 1; o < arguments.length - 2; o++)
            void 0 === arguments[o] && (r[o] = void 0);
        }),
      r
    );
  });
var so = oo;
de({ target: "RegExp", proto: !0, forced: so !== /./.exec }, { exec: so }),
  Z &&
    "g" != /./g.flags &&
    oe.f(RegExp.prototype, "flags", { configurable: !0, get: _flags });
var co = /./.toString,
  define = function(e) {
    ue(RegExp.prototype, "toString", e, !0);
  };
_fails(function() {
  return "/a/b" != co.call({ source: "a", flags: "b" });
})
  ? define(function toString() {
      var e = _anObject(this);
      return "/".concat(
        e.source,
        "/",
        "flags" in e
          ? e.flags
          : !Z && e instanceof RegExp
          ? _flags.call(e)
          : void 0
      );
    })
  : "toString" != co.name &&
    define(function toString() {
      return co.call(this);
    });
var lo = _stringAt(!0),
  _advanceStringIndex = function(e, t, n) {
    return t + (n ? lo(e, t).length : 1);
  },
  uo = RegExp.prototype.exec,
  _regexpExecAbstract = function(e, t) {
    var n = e.exec;
    if ("function" == typeof n) {
      var r = n.call(e, t);
      if ("object" != typeof r)
        throw new TypeError(
          "RegExp exec method returned something other than an Object or null"
        );
      return r;
    }
    if ("RegExp" !== _classof(e))
      throw new TypeError("RegExp#exec called on incompatible receiver");
    return uo.call(e, t);
  },
  ho = pe("species"),
  po = !_fails(function() {
    var e = /./;
    return (
      (e.exec = function() {
        var e = [];
        return (e.groups = { a: "7" }), e;
      }),
      "7" !== "".replace(e, "$<a>")
    );
  }),
  fo = (function() {
    var e = /(?:)/,
      t = e.exec;
    e.exec = function() {
      return t.apply(this, arguments);
    };
    var n = "ab".split(e);
    return 2 === n.length && "a" === n[0] && "b" === n[1];
  })(),
  _fixReWks = function(e, t, n) {
    var r = pe(e),
      o = !_fails(function() {
        var t = {};
        return (
          (t[r] = function() {
            return 7;
          }),
          7 != ""[e](t)
        );
      }),
      i = o
        ? !_fails(function() {
            var t = !1,
              n = /a/;
            return (
              (n.exec = function() {
                return (t = !0), null;
              }),
              "split" === e &&
                ((n.constructor = {}),
                (n.constructor[ho] = function() {
                  return n;
                })),
              n[r](""),
              !t
            );
          })
        : void 0;
    if (!o || !i || ("replace" === e && !po) || ("split" === e && !fo)) {
      var a = /./[r],
        s = n(_defined, r, ""[e], function maybeCallNative(e, t, n, r, i) {
          return t.exec === so
            ? o && !i
              ? { done: !0, value: a.call(t, n, r) }
              : { done: !0, value: e.call(n, t, r) }
            : { done: !1 };
        }),
        c = s[0],
        l = s[1];
      ue(String.prototype, e, c),
        ie(
          RegExp.prototype,
          r,
          2 == t
            ? function(e, t) {
                return l.call(e, this, t);
              }
            : function(e) {
                return l.call(e, this);
              }
        );
    }
  };
_fixReWks("match", 1, function(e, t, n, r) {
  return [
    function match(n) {
      var r = e(this),
        o = null == n ? void 0 : n[t];
      return void 0 !== o ? o.call(n, r) : new RegExp(n)[t](String(r));
    },
    function(e) {
      var t = r(n, e, this);
      if (t.done) return t.value;
      var o = _anObject(e),
        i = String(this);
      if (!o.global) return _regexpExecAbstract(o, i);
      var a = o.unicode;
      o.lastIndex = 0;
      for (var s, c = [], l = 0; null !== (s = _regexpExecAbstract(o, i)); ) {
        var u = String(s[0]);
        (c[l] = u),
          "" === u &&
            (o.lastIndex = _advanceStringIndex(i, _toLength(o.lastIndex), a)),
          l++;
      }
      return 0 === l ? null : c;
    }
  ];
});
var mo = Math.max,
  go = Math.min,
  _o = Math.floor,
  yo = /\$([$&`']|\d\d?|<[^>]*>)/g,
  vo = /\$([$&`']|\d\d?)/g;
_fixReWks("replace", 2, function(e, t, n, r) {
  return [
    function replace(r, o) {
      var i = e(this),
        a = null == r ? void 0 : r[t];
      return void 0 !== a ? a.call(r, i, o) : n.call(String(i), r, o);
    },
    function(e, t) {
      var o = r(n, e, this, t);
      if (o.done) return o.value;
      var i = _anObject(e),
        a = String(this),
        s = "function" == typeof t;
      s || (t = String(t));
      var c = i.global;
      if (c) {
        var l = i.unicode;
        i.lastIndex = 0;
      }
      for (var u = []; ; ) {
        var d = _regexpExecAbstract(i, a);
        if (null === d) break;
        if ((u.push(d), !c)) break;
        "" === String(d[0]) &&
          (i.lastIndex = _advanceStringIndex(a, _toLength(i.lastIndex), l));
      }
      for (var h, p = "", f = 0, m = 0; m < u.length; m++) {
        d = u[m];
        for (
          var g = String(d[0]),
            _ = mo(go(_toInteger(d.index), a.length), 0),
            y = [],
            v = 1;
          v < d.length;
          v++
        )
          y.push(void 0 === (h = d[v]) ? h : String(h));
        var b = d.groups;
        if (s) {
          var w = [g].concat(y, _, a);
          void 0 !== b && w.push(b);
          var S = String(t.apply(void 0, w));
        } else S = getSubstitution(g, a, _, y, b, t);
        _ >= f && ((p += a.slice(f, _) + S), (f = _ + g.length));
      }
      return p + a.slice(f);
    }
  ];
  function getSubstitution(e, t, r, o, i, a) {
    var s = r + e.length,
      c = o.length,
      l = vo;
    return (
      void 0 !== i && ((i = _toObject(i)), (l = yo)),
      n.call(a, l, function(n, a) {
        var l;
        switch (a.charAt(0)) {
          case "$":
            return "$";
          case "&":
            return e;
          case "`":
            return t.slice(0, r);
          case "'":
            return t.slice(s);
          case "<":
            l = i[a.slice(1, -1)];
            break;
          default:
            var u = +a;
            if (0 === u) return n;
            if (u > c) {
              var d = _o(u / 10);
              return 0 === d
                ? n
                : d <= c
                ? void 0 === o[d - 1]
                  ? a.charAt(1)
                  : o[d - 1] + a.charAt(1)
                : n;
            }
            l = o[u - 1];
        }
        return void 0 === l ? "" : l;
      })
    );
  }
}),
  _fixReWks("search", 1, function(e, t, n, r) {
    return [
      function search(n) {
        var r = e(this),
          o = null == n ? void 0 : n[t];
        return void 0 !== o ? o.call(n, r) : new RegExp(n)[t](String(r));
      },
      function(e) {
        var t = r(n, e, this);
        if (t.done) return t.value;
        var o = _anObject(e),
          i = String(this),
          a = o.lastIndex;
        At(a, 0) || (o.lastIndex = 0);
        var s = _regexpExecAbstract(o, i);
        return (
          At(o.lastIndex, a) || (o.lastIndex = a), null === s ? -1 : s.index
        );
      }
    ];
  });
var bo = pe("species"),
  _speciesConstructor = function(e, t) {
    var n,
      r = _anObject(e).constructor;
    return void 0 === r || null == (n = _anObject(r)[bo]) ? t : _aFunction(n);
  },
  wo = Math.min,
  So = [].push,
  xo = !_fails(function() {
    RegExp(4294967295, "y");
  });
_fixReWks("split", 2, function(e, t, n, r) {
  var o;
  return (
    (o =
      "c" == "abbc".split(/(b)*/)[1] ||
      4 != "test".split(/(?:)/, -1).length ||
      2 != "ab".split(/(?:ab)*/).length ||
      4 != ".".split(/(.?)(.?)/).length ||
      ".".split(/()()/).length > 1 ||
      "".split(/.?/).length
        ? function(e, t) {
            var r = String(this);
            if (void 0 === e && 0 === t) return [];
            if (!_isRegexp(e)) return n.call(r, e, t);
            for (
              var o,
                i,
                a,
                s = [],
                c =
                  (e.ignoreCase ? "i" : "") +
                  (e.multiline ? "m" : "") +
                  (e.unicode ? "u" : "") +
                  (e.sticky ? "y" : ""),
                l = 0,
                u = void 0 === t ? 4294967295 : t >>> 0,
                d = new RegExp(e.source, c + "g");
              (o = so.call(d, r)) &&
              !(
                (i = d.lastIndex) > l &&
                (s.push(r.slice(l, o.index)),
                o.length > 1 && o.index < r.length && So.apply(s, o.slice(1)),
                (a = o[0].length),
                (l = i),
                s.length >= u)
              );

            )
              d.lastIndex === o.index && d.lastIndex++;
            return (
              l === r.length
                ? (!a && d.test("")) || s.push("")
                : s.push(r.slice(l)),
              s.length > u ? s.slice(0, u) : s
            );
          }
        : "0".split(void 0, 0).length
        ? function(e, t) {
            return void 0 === e && 0 === t ? [] : n.call(this, e, t);
          }
        : n),
    [
      function split(n, r) {
        var i = e(this),
          a = null == n ? void 0 : n[t];
        return void 0 !== a ? a.call(n, i, r) : o.call(String(i), n, r);
      },
      function(e, t) {
        var i = r(o, e, this, t, o !== n);
        if (i.done) return i.value;
        var a = _anObject(e),
          s = String(this),
          c = _speciesConstructor(a, RegExp),
          l = a.unicode,
          u =
            (a.ignoreCase ? "i" : "") +
            (a.multiline ? "m" : "") +
            (a.unicode ? "u" : "") +
            (xo ? "y" : "g"),
          d = new c(xo ? a : "^(?:" + a.source + ")", u),
          h = void 0 === t ? 4294967295 : t >>> 0;
        if (0 === h) return [];
        if (0 === s.length)
          return null === _regexpExecAbstract(d, s) ? [s] : [];
        for (var p = 0, f = 0, m = []; f < s.length; ) {
          d.lastIndex = xo ? f : 0;
          var g,
            _ = _regexpExecAbstract(d, xo ? s : s.slice(f));
          if (
            null === _ ||
            (g = wo(_toLength(d.lastIndex + (xo ? 0 : f)), s.length)) === p
          )
            f = _advanceStringIndex(s, f, l);
          else {
            if ((m.push(s.slice(p, f)), m.length === h)) return m;
            for (var y = 1; y <= _.length - 1; y++)
              if ((m.push(_[y]), m.length === h)) return m;
            f = p = g;
          }
        }
        return m.push(s.slice(p)), m;
      }
    ]
  );
});
var Eo,
  Oo,
  ko,
  _anInstance = function(e, t, n, r) {
    if (!(e instanceof t) || (void 0 !== r && r in e))
      throw TypeError(n + ": incorrect invocation!");
    return e;
  },
  Co = createCommonjsModule(function(e) {
    var t = {},
      n = {},
      r = (e.exports = function(e, r, o, i, a) {
        var s,
          c,
          l,
          u,
          d = a
            ? function() {
                return e;
              }
            : gr(e),
          h = _ctx(o, i, r ? 2 : 1),
          p = 0;
        if ("function" != typeof d) throw TypeError(e + " is not iterable!");
        if (_isArrayIter(d)) {
          for (s = _toLength(e.length); s > p; p++)
            if (
              (u = r ? h(_anObject((c = e[p]))[0], c[1]) : h(e[p])) === t ||
              u === n
            )
              return u;
        } else
          for (l = d.call(e); !(c = l.next()).done; )
            if ((u = _iterCall(l, h, c.value, r)) === t || u === n) return u;
      });
    (r.BREAK = t), (r.RETURN = n);
  }),
  jo = J.process,
  Po = J.setImmediate,
  Mo = J.clearImmediate,
  Ao = J.MessageChannel,
  To = J.Dispatch,
  Ro = 0,
  No = {},
  run = function() {
    var e = +this;
    if (No.hasOwnProperty(e)) {
      var t = No[e];
      delete No[e], t();
    }
  },
  listener = function(e) {
    run.call(e.data);
  };
(Po && Mo) ||
  ((Po = function setImmediate(e) {
    for (var t = [], n = 1; arguments.length > n; ) t.push(arguments[n++]);
    return (
      (No[++Ro] = function() {
        _invoke("function" == typeof e ? e : Function(e), t);
      }),
      Eo(Ro),
      Ro
    );
  }),
  (Mo = function clearImmediate(e) {
    delete No[e];
  }),
  "process" == _cof(jo)
    ? (Eo = function(e) {
        jo.nextTick(_ctx(run, e, 1));
      })
    : To && To.now
    ? (Eo = function(e) {
        To.now(_ctx(run, e, 1));
      })
    : Ao
    ? ((ko = (Oo = new Ao()).port2),
      (Oo.port1.onmessage = listener),
      (Eo = _ctx(ko.postMessage, ko, 1)))
    : J.addEventListener && "function" == typeof postMessage && !J.importScripts
    ? ((Eo = function(e) {
        J.postMessage(e + "", "*");
      }),
      J.addEventListener("message", listener, !1))
    : (Eo =
        "onreadystatechange" in _domCreate("script")
          ? function(e) {
              qe.appendChild(
                _domCreate("script")
              ).onreadystatechange = function() {
                qe.removeChild(this), run.call(e);
              };
            }
          : function(e) {
              setTimeout(_ctx(run, e, 1), 0);
            }));
var qo = { set: Po, clear: Mo },
  Io = qo.set,
  Fo = J.MutationObserver || J.WebKitMutationObserver,
  Lo = J.process,
  Do = J.Promise,
  zo = "process" == _cof(Lo);
function PromiseCapability(e) {
  var t, n;
  (this.promise = new e(function(e, r) {
    if (void 0 !== t || void 0 !== n)
      throw TypeError("Bad Promise constructor");
    (t = e), (n = r);
  })),
    (this.resolve = _aFunction(t)),
    (this.reject = _aFunction(n));
}
var Ho,
  Vo,
  Uo,
  Go,
  Bo = {
    f: function(e) {
      return new PromiseCapability(e);
    }
  },
  _perform = function(e) {
    try {
      return { e: !1, v: e() };
    } catch (e) {
      return { e: !0, v: e };
    }
  },
  Wo = J.navigator,
  Yo = (Wo && Wo.userAgent) || "",
  _promiseResolve = function(e, t) {
    if ((_anObject(e), Q(t) && t.constructor === e)) return t;
    var n = Bo.f(e);
    return (0, n.resolve)(t), n.promise;
  },
  _redefineAll = function(e, t, n) {
    for (var r in t) ue(e, r, t[r], n);
    return e;
  },
  $o = qo.set,
  Jo = (function() {
    var e,
      t,
      n,
      flush = function() {
        var r, o;
        for (zo && (r = Lo.domain) && r.exit(); e; ) {
          (o = e.fn), (e = e.next);
          try {
            o();
          } catch (r) {
            throw (e ? n() : (t = void 0), r);
          }
        }
        (t = void 0), r && r.enter();
      };
    if (zo)
      n = function() {
        Lo.nextTick(flush);
      };
    else if (!Fo || (J.navigator && J.navigator.standalone))
      if (Do && Do.resolve) {
        var r = Do.resolve(void 0);
        n = function() {
          r.then(flush);
        };
      } else
        n = function() {
          Io.call(J, flush);
        };
    else {
      var o = !0,
        i = document.createTextNode("");
      new Fo(flush).observe(i, { characterData: !0 }),
        (n = function() {
          i.data = o = !o;
        });
    }
    return function(r) {
      var o = { fn: r, next: void 0 };
      t && (t.next = o), e || ((e = o), n()), (t = o);
    };
  })(),
  Ko = J.TypeError,
  Zo = J.process,
  Xo = Zo && Zo.versions,
  Qo = (Xo && Xo.v8) || "",
  ei = J.Promise,
  ti = "process" == _classof(Zo),
  empty = function() {},
  ni = (Vo = Bo.f),
  ri = !!(function() {
    try {
      var e = ei.resolve(1),
        t = ((e.constructor = {})[pe("species")] = function(e) {
          e(empty, empty);
        });
      return (
        (ti || "function" == typeof PromiseRejectionEvent) &&
        e.then(empty) instanceof t &&
        0 !== Qo.indexOf("6.6") &&
        -1 === Yo.indexOf("Chrome/66")
      );
    } catch (e) {}
  })(),
  isThenable = function(e) {
    var t;
    return !(!Q(e) || "function" != typeof (t = e.then)) && t;
  },
  notify = function(e, t) {
    if (!e._n) {
      e._n = !0;
      var n = e._c;
      Jo(function() {
        for (
          var r = e._v,
            o = 1 == e._s,
            i = 0,
            run = function(t) {
              var n,
                i,
                a,
                s = o ? t.ok : t.fail,
                c = t.resolve,
                l = t.reject,
                u = t.domain;
              try {
                s
                  ? (o || (2 == e._h && onHandleUnhandled(e), (e._h = 1)),
                    !0 === s
                      ? (n = r)
                      : (u && u.enter(), (n = s(r)), u && (u.exit(), (a = !0))),
                    n === t.promise
                      ? l(Ko("Promise-chain cycle"))
                      : (i = isThenable(n))
                      ? i.call(n, c, l)
                      : c(n))
                  : l(r);
              } catch (e) {
                u && !a && u.exit(), l(e);
              }
            };
          n.length > i;

        )
          run(n[i++]);
        (e._c = []), (e._n = !1), t && !e._h && onUnhandled(e);
      });
    }
  },
  onUnhandled = function(e) {
    $o.call(J, function() {
      var t,
        n,
        r,
        o = e._v,
        i = isUnhandled(e);
      if (
        (i &&
          ((t = _perform(function() {
            ti
              ? Zo.emit("unhandledRejection", o, e)
              : (n = J.onunhandledrejection)
              ? n({ promise: e, reason: o })
              : (r = J.console) &&
                r.error &&
                r.error("Unhandled promise rejection", o);
          })),
          (e._h = ti || isUnhandled(e) ? 2 : 1)),
        (e._a = void 0),
        i && t.e)
      )
        throw t.v;
    });
  },
  isUnhandled = function(e) {
    return 1 !== e._h && 0 === (e._a || e._c).length;
  },
  onHandleUnhandled = function(e) {
    $o.call(J, function() {
      var t;
      ti
        ? Zo.emit("rejectionHandled", e)
        : (t = J.onrejectionhandled) && t({ promise: e, reason: e._v });
    });
  },
  $reject = function(e) {
    var t = this;
    t._d ||
      ((t._d = !0),
      ((t = t._w || t)._v = e),
      (t._s = 2),
      t._a || (t._a = t._c.slice()),
      notify(t, !0));
  },
  $resolve = function(e) {
    var t,
      n = this;
    if (!n._d) {
      (n._d = !0), (n = n._w || n);
      try {
        if (n === e) throw Ko("Promise can't be resolved itself");
        (t = isThenable(e))
          ? Jo(function() {
              var r = { _w: n, _d: !1 };
              try {
                t.call(e, _ctx($resolve, r, 1), _ctx($reject, r, 1));
              } catch (e) {
                $reject.call(r, e);
              }
            })
          : ((n._v = e), (n._s = 1), notify(n, !1));
      } catch (e) {
        $reject.call({ _w: n, _d: !1 }, e);
      }
    }
  };
ri ||
  ((ei = function Promise(e) {
    _anInstance(this, ei, "Promise", "_h"), _aFunction(e), Ho.call(this);
    try {
      e(_ctx($resolve, this, 1), _ctx($reject, this, 1));
    } catch (e) {
      $reject.call(this, e);
    }
  }),
  ((Ho = function Promise(e) {
    (this._c = []),
      (this._a = void 0),
      (this._s = 0),
      (this._d = !1),
      (this._v = void 0),
      (this._h = 0),
      (this._n = !1);
  }).prototype = _redefineAll(ei.prototype, {
    then: function then(e, t) {
      var n = ni(_speciesConstructor(this, ei));
      return (
        (n.ok = "function" != typeof e || e),
        (n.fail = "function" == typeof t && t),
        (n.domain = ti ? Zo.domain : void 0),
        this._c.push(n),
        this._a && this._a.push(n),
        this._s && notify(this, !1),
        n.promise
      );
    },
    catch: function(e) {
      return this.then(void 0, e);
    }
  })),
  (Uo = function() {
    var e = new Ho();
    (this.promise = e),
      (this.resolve = _ctx($resolve, e, 1)),
      (this.reject = _ctx($reject, e, 1));
  }),
  (Bo.f = ni = function(e) {
    return e === ei || e === Go ? new Uo(e) : Vo(e);
  })),
  de(de.G + de.W + de.F * !ri, { Promise: ei }),
  _setToStringTag(ei, "Promise"),
  _setSpecies("Promise"),
  (Go = X.Promise),
  de(de.S + de.F * !ri, "Promise", {
    reject: function reject(e) {
      var t = ni(this);
      return (0, t.reject)(e), t.promise;
    }
  }),
  de(de.S + de.F * !ri, "Promise", {
    resolve: function resolve(e) {
      return _promiseResolve(this, e);
    }
  }),
  de(
    de.S +
      de.F *
        !(
          ri &&
          _iterDetect(function(e) {
            ei.all(e).catch(empty);
          })
        ),
    "Promise",
    {
      all: function all(e) {
        var t = this,
          n = ni(t),
          r = n.resolve,
          o = n.reject,
          i = _perform(function() {
            var n = [],
              i = 0,
              a = 1;
            Co(e, !1, function(e) {
              var s = i++,
                c = !1;
              n.push(void 0),
                a++,
                t.resolve(e).then(function(e) {
                  c || ((c = !0), (n[s] = e), --a || r(n));
                }, o);
            }),
              --a || r(n);
          });
        return i.e && o(i.v), n.promise;
      },
      race: function race(e) {
        var t = this,
          n = ni(t),
          r = n.reject,
          o = _perform(function() {
            Co(e, !1, function(e) {
              t.resolve(e).then(n.resolve, r);
            });
          });
        return o.e && r(o.v), n.promise;
      }
    }
  );
var _validateCollection = function(e, t) {
    if (!Q(e) || e._t !== t)
      throw TypeError("Incompatible receiver, " + t + " required!");
    return e;
  },
  oi = oe.f,
  ii = he.fastKey,
  ai = Z ? "_s" : "size",
  getEntry = function(e, t) {
    var n,
      r = ii(t);
    if ("F" !== r) return e._i[r];
    for (n = e._f; n; n = n.n) if (n.k == t) return n;
  },
  si = {
    getConstructor: function(e, t, n, r) {
      var o = e(function(e, i) {
        _anInstance(e, o, t, "_i"),
          (e._t = t),
          (e._i = Fe(null)),
          (e._f = void 0),
          (e._l = void 0),
          (e[ai] = 0),
          null != i && Co(i, n, e[r], e);
      });
      return (
        _redefineAll(o.prototype, {
          clear: function clear() {
            for (
              var e = _validateCollection(this, t), n = e._i, r = e._f;
              r;
              r = r.n
            )
              (r.r = !0), r.p && (r.p = r.p.n = void 0), delete n[r.i];
            (e._f = e._l = void 0), (e[ai] = 0);
          },
          delete: function(e) {
            var n = _validateCollection(this, t),
              r = getEntry(n, e);
            if (r) {
              var o = r.n,
                i = r.p;
              delete n._i[r.i],
                (r.r = !0),
                i && (i.n = o),
                o && (o.p = i),
                n._f == r && (n._f = o),
                n._l == r && (n._l = i),
                n[ai]--;
            }
            return !!r;
          },
          forEach: function forEach(e) {
            _validateCollection(this, t);
            for (
              var n,
                r = _ctx(e, arguments.length > 1 ? arguments[1] : void 0, 3);
              (n = n ? n.n : this._f);

            )
              for (r(n.v, n.k, this); n && n.r; ) n = n.p;
          },
          has: function has(e) {
            return !!getEntry(_validateCollection(this, t), e);
          }
        }),
        Z &&
          oi(o.prototype, "size", {
            get: function() {
              return _validateCollection(this, t)[ai];
            }
          }),
        o
      );
    },
    def: function(e, t, n) {
      var r,
        o,
        i = getEntry(e, t);
      return (
        i
          ? (i.v = n)
          : ((e._l = i = {
              i: (o = ii(t, !0)),
              k: t,
              v: n,
              p: (r = e._l),
              n: void 0,
              r: !1
            }),
            e._f || (e._f = i),
            r && (r.n = i),
            e[ai]++,
            "F" !== o && (e._i[o] = i)),
        e
      );
    },
    getEntry: getEntry,
    setStrong: function(e, t, n) {
      _iterDefine(
        e,
        t,
        function(e, n) {
          (this._t = _validateCollection(e, t)),
            (this._k = n),
            (this._l = void 0);
        },
        function() {
          for (var e = this._k, t = this._l; t && t.r; ) t = t.p;
          return this._t && (this._l = t = t ? t.n : this._t._f)
            ? _iterStep(0, "keys" == e ? t.k : "values" == e ? t.v : [t.k, t.v])
            : ((this._t = void 0), _iterStep(1));
        },
        n ? "entries" : "values",
        !n,
        !0
      ),
        _setSpecies(t);
    }
  },
  _collection = function(e, t, n, r, o, i) {
    var a = J[e],
      s = a,
      c = o ? "set" : "add",
      l = s && s.prototype,
      u = {},
      fixMethod = function(e) {
        var t = l[e];
        ue(
          l,
          e,
          "delete" == e
            ? function(e) {
                return !(i && !Q(e)) && t.call(this, 0 === e ? 0 : e);
              }
            : "has" == e
            ? function has(e) {
                return !(i && !Q(e)) && t.call(this, 0 === e ? 0 : e);
              }
            : "get" == e
            ? function get(e) {
                return i && !Q(e) ? void 0 : t.call(this, 0 === e ? 0 : e);
              }
            : "add" == e
            ? function add(e) {
                return t.call(this, 0 === e ? 0 : e), this;
              }
            : function set(e, n) {
                return t.call(this, 0 === e ? 0 : e, n), this;
              }
        );
      };
    if (
      "function" == typeof s &&
      (i ||
        (l.forEach &&
          !_fails(function() {
            new s().entries().next();
          })))
    ) {
      var d = new s(),
        h = d[c](i ? {} : -0, 1) != d,
        p = _fails(function() {
          d.has(1);
        }),
        f = _iterDetect(function(e) {
          new s(e);
        }),
        m =
          !i &&
          _fails(function() {
            for (var e = new s(), t = 5; t--; ) e[c](t, t);
            return !e.has(-0);
          });
      f ||
        (((s = t(function(t, n) {
          _anInstance(t, s, e);
          var r = _inheritIfRequired(new a(), t, s);
          return null != n && Co(n, o, r[c], r), r;
        })).prototype = l),
        (l.constructor = s)),
        (p || m) &&
          (fixMethod("delete"), fixMethod("has"), o && fixMethod("get")),
        (m || h) && fixMethod(c),
        i && l.clear && delete l.clear;
    } else
      (s = r.getConstructor(t, e, o, c)),
        _redefineAll(s.prototype, n),
        (he.NEED = !0);
    return (
      _setToStringTag(s, e),
      (u[e] = s),
      de(de.G + de.W + de.F * (s != a), u),
      i || r.setStrong(s, e, o),
      s
    );
  },
  ci =
    (_collection(
      "Map",
      function(e) {
        return function Map() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        get: function get(e) {
          var t = si.getEntry(_validateCollection(this, "Map"), e);
          return t && t.v;
        },
        set: function set(e, t) {
          return si.def(_validateCollection(this, "Map"), 0 === e ? 0 : e, t);
        }
      },
      si,
      !0
    ),
    _collection(
      "Set",
      function(e) {
        return function Set() {
          return e(this, arguments.length > 0 ? arguments[0] : void 0);
        };
      },
      {
        add: function add(e) {
          return si.def(
            _validateCollection(this, "Set"),
            (e = 0 === e ? 0 : e),
            e
          );
        }
      },
      si
    ),
    he.getWeak),
  li = _arrayMethods(5),
  ui = _arrayMethods(6),
  di = 0,
  uncaughtFrozenStore = function(e) {
    return e._l || (e._l = new UncaughtFrozenStore());
  },
  UncaughtFrozenStore = function() {
    this.a = [];
  },
  findUncaughtFrozen = function(e, t) {
    return li(e.a, function(e) {
      return e[0] === t;
    });
  };
UncaughtFrozenStore.prototype = {
  get: function(e) {
    var t = findUncaughtFrozen(this, e);
    if (t) return t[1];
  },
  has: function(e) {
    return !!findUncaughtFrozen(this, e);
  },
  set: function(e, t) {
    var n = findUncaughtFrozen(this, e);
    n ? (n[1] = t) : this.a.push([e, t]);
  },
  delete: function(e) {
    var t = ui(this.a, function(t) {
      return t[0] === e;
    });
    return ~t && this.a.splice(t, 1), !!~t;
  }
};
var hi = {
  getConstructor: function(e, t, n, r) {
    var o = e(function(e, i) {
      _anInstance(e, o, t, "_i"),
        (e._t = t),
        (e._i = di++),
        (e._l = void 0),
        null != i && Co(i, n, e[r], e);
    });
    return (
      _redefineAll(o.prototype, {
        delete: function(e) {
          if (!Q(e)) return !1;
          var n = ci(e);
          return !0 === n
            ? uncaughtFrozenStore(_validateCollection(this, t)).delete(e)
            : n && _has(n, this._i) && delete n[this._i];
        },
        has: function has(e) {
          if (!Q(e)) return !1;
          var n = ci(e);
          return !0 === n
            ? uncaughtFrozenStore(_validateCollection(this, t)).has(e)
            : n && _has(n, this._i);
        }
      }),
      o
    );
  },
  def: function(e, t, n) {
    var r = ci(_anObject(t), !0);
    return !0 === r ? uncaughtFrozenStore(e).set(t, n) : (r[e._i] = n), e;
  },
  ufstore: uncaughtFrozenStore
};
createCommonjsModule(function(e) {
  var t,
    n = _arrayMethods(0),
    r = _validateCollection,
    o = !J.ActiveXObject && "ActiveXObject" in J,
    i = he.getWeak,
    a = Object.isExtensible,
    s = hi.ufstore,
    wrapper = function(e) {
      return function WeakMap() {
        return e(this, arguments.length > 0 ? arguments[0] : void 0);
      };
    },
    c = {
      get: function get(e) {
        if (Q(e)) {
          var t = i(e);
          return !0 === t
            ? s(_validateCollection(this, "WeakMap")).get(e)
            : t
            ? t[this._i]
            : void 0;
        }
      },
      set: function set(e, t) {
        return hi.def(_validateCollection(this, "WeakMap"), e, t);
      }
    },
    l = (e.exports = _collection("WeakMap", wrapper, c, hi, !0, !0));
  r &&
    o &&
    ((t = hi.getConstructor(wrapper, "WeakMap")),
    Mt(t.prototype, c),
    (he.NEED = !0),
    n(["delete", "has", "get", "set"], function(e) {
      var n = l.prototype,
        r = n[e];
      ue(n, e, function(n, o) {
        if (Q(n) && !a(n)) {
          this._f || (this._f = new t());
          var i = this._f[e](n, o);
          return "set" == e ? this : i;
        }
        return r.call(this, n, o);
      });
    }));
});
_collection(
  "WeakSet",
  function(e) {
    return function WeakSet() {
      return e(this, arguments.length > 0 ? arguments[0] : void 0);
    };
  },
  {
    add: function add(e) {
      return hi.def(_validateCollection(this, "WeakSet"), e, !0);
    }
  },
  hi,
  !1,
  !0
);
for (
  var pi,
    fi = _uid("typed_array"),
    mi = _uid("view"),
    gi = !(!J.ArrayBuffer || !J.DataView),
    _i = gi,
    yi = 0,
    vi = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(
      ","
    );
  yi < 9;

)
  (pi = J[vi[yi++]])
    ? (ie(pi.prototype, fi, !0), ie(pi.prototype, mi, !0))
    : (_i = !1);
var bi = { ABV: gi, CONSTR: _i, TYPED: fi, VIEW: mi },
  _toIndex = function(e) {
    if (void 0 === e) return 0;
    var t = _toInteger(e),
      n = _toLength(t);
    if (t !== n) throw RangeError("Wrong length!");
    return n;
  },
  wi = createCommonjsModule(function(e, t) {
    var n = De.f,
      r = oe.f,
      o = J.ArrayBuffer,
      i = J.DataView,
      a = J.Math,
      s = J.RangeError,
      c = J.Infinity,
      l = o,
      u = a.abs,
      d = a.pow,
      h = a.floor,
      p = a.log,
      f = a.LN2,
      m = Z ? "_b" : "buffer",
      g = Z ? "_l" : "byteLength",
      _ = Z ? "_o" : "byteOffset";
    function packIEEE754(e, t, n) {
      var r,
        o,
        i,
        a = new Array(n),
        s = 8 * n - t - 1,
        l = (1 << s) - 1,
        m = l >> 1,
        g = 23 === t ? d(2, -24) - d(2, -77) : 0,
        _ = 0,
        y = e < 0 || (0 === e && 1 / e < 0) ? 1 : 0;
      for (
        (e = u(e)) != e || e === c
          ? ((o = e != e ? 1 : 0), (r = l))
          : ((r = h(p(e) / f)),
            e * (i = d(2, -r)) < 1 && (r--, (i *= 2)),
            (e += r + m >= 1 ? g / i : g * d(2, 1 - m)) * i >= 2 &&
              (r++, (i /= 2)),
            r + m >= l
              ? ((o = 0), (r = l))
              : r + m >= 1
              ? ((o = (e * i - 1) * d(2, t)), (r += m))
              : ((o = e * d(2, m - 1) * d(2, t)), (r = 0)));
        t >= 8;
        a[_++] = 255 & o, o /= 256, t -= 8
      );
      for (r = (r << t) | o, s += t; s > 0; a[_++] = 255 & r, r /= 256, s -= 8);
      return (a[--_] |= 128 * y), a;
    }
    function unpackIEEE754(e, t, n) {
      var r,
        o = 8 * n - t - 1,
        i = (1 << o) - 1,
        a = i >> 1,
        s = o - 7,
        l = n - 1,
        u = e[l--],
        h = 127 & u;
      for (u >>= 7; s > 0; h = 256 * h + e[l], l--, s -= 8);
      for (
        r = h & ((1 << -s) - 1), h >>= -s, s += t;
        s > 0;
        r = 256 * r + e[l], l--, s -= 8
      );
      if (0 === h) h = 1 - a;
      else {
        if (h === i) return r ? NaN : u ? -c : c;
        (r += d(2, t)), (h -= a);
      }
      return (u ? -1 : 1) * r * d(2, h - t);
    }
    function unpackI32(e) {
      return (e[3] << 24) | (e[2] << 16) | (e[1] << 8) | e[0];
    }
    function packI8(e) {
      return [255 & e];
    }
    function packI16(e) {
      return [255 & e, (e >> 8) & 255];
    }
    function packI32(e) {
      return [255 & e, (e >> 8) & 255, (e >> 16) & 255, (e >> 24) & 255];
    }
    function packF64(e) {
      return packIEEE754(e, 52, 8);
    }
    function packF32(e) {
      return packIEEE754(e, 23, 4);
    }
    function addGetter(e, t, n) {
      r(e.prototype, t, {
        get: function() {
          return this[n];
        }
      });
    }
    function get(e, t, n, r) {
      var o = _toIndex(+n);
      if (o + t > e[g]) throw s("Wrong index!");
      var i = e[m]._b,
        a = o + e[_],
        c = i.slice(a, a + t);
      return r ? c : c.reverse();
    }
    function set(e, t, n, r, o, i) {
      var a = _toIndex(+n);
      if (a + t > e[g]) throw s("Wrong index!");
      for (var c = e[m]._b, l = a + e[_], u = r(+o), d = 0; d < t; d++)
        c[l + d] = u[i ? d : t - d - 1];
    }
    if (bi.ABV) {
      if (
        !_fails(function() {
          o(1);
        }) ||
        !_fails(function() {
          new o(-1);
        }) ||
        _fails(function() {
          return new o(), new o(1.5), new o(NaN), "ArrayBuffer" != o.name;
        })
      ) {
        for (
          var y,
            v = ((o = function ArrayBuffer(e) {
              return _anInstance(this, o), new l(_toIndex(e));
            }).prototype = l.prototype),
            b = n(l),
            w = 0;
          b.length > w;

        )
          (y = b[w++]) in o || ie(o, y, l[y]);
        v.constructor = o;
      }
      var S = new i(new o(2)),
        x = i.prototype.setInt8;
      S.setInt8(0, 2147483648),
        S.setInt8(1, 2147483649),
        (!S.getInt8(0) && S.getInt8(1)) ||
          _redefineAll(
            i.prototype,
            {
              setInt8: function setInt8(e, t) {
                x.call(this, e, (t << 24) >> 24);
              },
              setUint8: function setUint8(e, t) {
                x.call(this, e, (t << 24) >> 24);
              }
            },
            !0
          );
    } else
      (o = function ArrayBuffer(e) {
        _anInstance(this, o, "ArrayBuffer");
        var t = _toIndex(e);
        (this._b = Dr.call(new Array(t), 0)), (this[g] = t);
      }),
        (i = function DataView(e, t, n) {
          _anInstance(this, i, "DataView"), _anInstance(e, o, "DataView");
          var r = e[g],
            a = _toInteger(t);
          if (a < 0 || a > r) throw s("Wrong offset!");
          if (a + (n = void 0 === n ? r - a : _toLength(n)) > r)
            throw s("Wrong length!");
          (this[m] = e), (this[_] = a), (this[g] = n);
        }),
        Z &&
          (addGetter(o, "byteLength", "_l"),
          addGetter(i, "buffer", "_b"),
          addGetter(i, "byteLength", "_l"),
          addGetter(i, "byteOffset", "_o")),
        _redefineAll(i.prototype, {
          getInt8: function getInt8(e) {
            return (get(this, 1, e)[0] << 24) >> 24;
          },
          getUint8: function getUint8(e) {
            return get(this, 1, e)[0];
          },
          getInt16: function getInt16(e) {
            var t = get(this, 2, e, arguments[1]);
            return (((t[1] << 8) | t[0]) << 16) >> 16;
          },
          getUint16: function getUint16(e) {
            var t = get(this, 2, e, arguments[1]);
            return (t[1] << 8) | t[0];
          },
          getInt32: function getInt32(e) {
            return unpackI32(get(this, 4, e, arguments[1]));
          },
          getUint32: function getUint32(e) {
            return unpackI32(get(this, 4, e, arguments[1])) >>> 0;
          },
          getFloat32: function getFloat32(e) {
            return unpackIEEE754(get(this, 4, e, arguments[1]), 23, 4);
          },
          getFloat64: function getFloat64(e) {
            return unpackIEEE754(get(this, 8, e, arguments[1]), 52, 8);
          },
          setInt8: function setInt8(e, t) {
            set(this, 1, e, packI8, t);
          },
          setUint8: function setUint8(e, t) {
            set(this, 1, e, packI8, t);
          },
          setInt16: function setInt16(e, t) {
            set(this, 2, e, packI16, t, arguments[2]);
          },
          setUint16: function setUint16(e, t) {
            set(this, 2, e, packI16, t, arguments[2]);
          },
          setInt32: function setInt32(e, t) {
            set(this, 4, e, packI32, t, arguments[2]);
          },
          setUint32: function setUint32(e, t) {
            set(this, 4, e, packI32, t, arguments[2]);
          },
          setFloat32: function setFloat32(e, t) {
            set(this, 4, e, packF32, t, arguments[2]);
          },
          setFloat64: function setFloat64(e, t) {
            set(this, 8, e, packF64, t, arguments[2]);
          }
        });
    _setToStringTag(o, "ArrayBuffer"),
      _setToStringTag(i, "DataView"),
      ie(i.prototype, bi.VIEW, !0),
      (t.ArrayBuffer = o),
      (t.DataView = i);
  }),
  Si = J.ArrayBuffer,
  xi = wi.ArrayBuffer,
  Ei = wi.DataView,
  Oi = bi.ABV && Si.isView,
  ki = xi.prototype.slice,
  Ci = bi.VIEW;
de(de.G + de.W + de.F * (Si !== xi), { ArrayBuffer: xi }),
  de(de.S + de.F * !bi.CONSTR, "ArrayBuffer", {
    isView: function isView(e) {
      return (Oi && Oi(e)) || (Q(e) && Ci in e);
    }
  }),
  de(
    de.P +
      de.U +
      de.F *
        _fails(function() {
          return !new xi(2).slice(1, void 0).byteLength;
        }),
    "ArrayBuffer",
    {
      slice: function slice(e, t) {
        if (void 0 !== ki && void 0 === t) return ki.call(_anObject(this), e);
        for (
          var n = _anObject(this).byteLength,
            r = _toAbsoluteIndex(e, n),
            o = _toAbsoluteIndex(void 0 === t ? n : t, n),
            i = new (_speciesConstructor(this, xi))(_toLength(o - r)),
            a = new Ei(this),
            s = new Ei(i),
            c = 0;
          r < o;

        )
          s.setUint8(c++, a.getUint8(r++));
        return i;
      }
    }
  ),
  _setSpecies("ArrayBuffer"),
  de(de.G + de.W + de.F * !bi.ABV, { DataView: wi.DataView });
var ji = createCommonjsModule(function(e) {
  if (Z) {
    var t = J,
      n = _fails,
      r = de,
      o = bi,
      i = wi,
      a = _ctx,
      s = _anInstance,
      c = _propertyDesc,
      l = ie,
      u = _redefineAll,
      d = _toInteger,
      h = _toLength,
      p = _toIndex,
      f = _toAbsoluteIndex,
      m = _toPrimitive,
      g = _has,
      _ = _classof,
      y = Q,
      v = _toObject,
      b = _isArrayIter,
      w = Fe,
      S = Ot,
      x = De.f,
      E = gr,
      O = _uid,
      k = pe,
      C = _arrayMethods,
      j = _arrayIncludes,
      P = _speciesConstructor,
      M = Br,
      T = $n,
      R = _iterDetect,
      N = _setSpecies,
      q = Dr,
      I = Ir,
      L = oe,
      D = Be,
      z = L.f,
      H = D.f,
      V = t.RangeError,
      U = t.TypeError,
      G = t.Uint8Array,
      B = Array.prototype,
      W = i.ArrayBuffer,
      Y = i.DataView,
      $ = C(0),
      K = C(2),
      X = C(3),
      ee = C(4),
      te = C(5),
      ne = C(6),
      re = j(!0),
      ae = j(!1),
      se = M.values,
      ce = M.keys,
      le = M.entries,
      ue = B.lastIndexOf,
      he = B.reduce,
      fe = B.reduceRight,
      me = B.join,
      ge = B.sort,
      _e = B.slice,
      ye = B.toString,
      ve = B.toLocaleString,
      be = k("iterator"),
      we = k("toStringTag"),
      Se = O("typed_constructor"),
      xe = O("def_constructor"),
      Ee = o.CONSTR,
      Oe = o.TYPED,
      ke = o.VIEW,
      Ce = C(1, function(e, t) {
        return allocate(P(e, e[xe]), t);
      }),
      je = n(function() {
        return 1 === new G(new Uint16Array([1]).buffer)[0];
      }),
      Pe =
        !!G &&
        !!G.prototype.set &&
        n(function() {
          new G(1).set({});
        }),
      toOffset = function(e, t) {
        var n = d(e);
        if (n < 0 || n % t) throw V("Wrong offset!");
        return n;
      },
      validate = function(e) {
        if (y(e) && Oe in e) return e;
        throw U(e + " is not a typed array!");
      },
      allocate = function(e, t) {
        if (!(y(e) && Se in e)) throw U("It is not a typed array constructor!");
        return new e(t);
      },
      speciesFromList = function(e, t) {
        return fromList(P(e, e[xe]), t);
      },
      fromList = function(e, t) {
        for (var n = 0, r = t.length, o = allocate(e, r); r > n; )
          o[n] = t[n++];
        return o;
      },
      addGetter = function(e, t, n) {
        z(e, t, {
          get: function() {
            return this._d[n];
          }
        });
      },
      Me = function from(e) {
        var t,
          n,
          r,
          o,
          i,
          s,
          c = v(e),
          l = arguments.length,
          u = l > 1 ? arguments[1] : void 0,
          d = void 0 !== u,
          p = E(c);
        if (null != p && !b(p)) {
          for (s = p.call(c), r = [], t = 0; !(i = s.next()).done; t++)
            r.push(i.value);
          c = r;
        }
        for (
          d && l > 2 && (u = a(u, arguments[2], 2)),
            t = 0,
            n = h(c.length),
            o = allocate(this, n);
          n > t;
          t++
        )
          o[t] = d ? u(c[t], t) : c[t];
        return o;
      },
      Ae = function of() {
        for (var e = 0, t = arguments.length, n = allocate(this, t); t > e; )
          n[e] = arguments[e++];
        return n;
      },
      Te =
        !!G &&
        n(function() {
          ve.call(new G(1));
        }),
      Re = function toLocaleString() {
        return ve.apply(
          Te ? _e.call(validate(this)) : validate(this),
          arguments
        );
      },
      Ne = {
        copyWithin: function copyWithin(e, t) {
          return I.call(
            validate(this),
            e,
            t,
            arguments.length > 2 ? arguments[2] : void 0
          );
        },
        every: function every(e) {
          return ee(
            validate(this),
            e,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
        fill: function fill(e) {
          return q.apply(validate(this), arguments);
        },
        filter: function filter(e) {
          return speciesFromList(
            this,
            K(validate(this), e, arguments.length > 1 ? arguments[1] : void 0)
          );
        },
        find: function find(e) {
          return te(
            validate(this),
            e,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
        findIndex: function findIndex(e) {
          return ne(
            validate(this),
            e,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
        forEach: function forEach(e) {
          $(validate(this), e, arguments.length > 1 ? arguments[1] : void 0);
        },
        indexOf: function indexOf(e) {
          return ae(
            validate(this),
            e,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
        includes: function includes(e) {
          return re(
            validate(this),
            e,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
        join: function join(e) {
          return me.apply(validate(this), arguments);
        },
        lastIndexOf: function lastIndexOf(e) {
          return ue.apply(validate(this), arguments);
        },
        map: function map(e) {
          return Ce(
            validate(this),
            e,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
        reduce: function reduce(e) {
          return he.apply(validate(this), arguments);
        },
        reduceRight: function reduceRight(e) {
          return fe.apply(validate(this), arguments);
        },
        reverse: function reverse() {
          for (
            var e, t = validate(this).length, n = Math.floor(t / 2), r = 0;
            r < n;

          )
            (e = this[r]), (this[r++] = this[--t]), (this[t] = e);
          return this;
        },
        some: function some(e) {
          return X(
            validate(this),
            e,
            arguments.length > 1 ? arguments[1] : void 0
          );
        },
        sort: function sort(e) {
          return ge.call(validate(this), e);
        },
        subarray: function subarray(e, t) {
          var n = validate(this),
            r = n.length,
            o = f(e, r);
          return new (P(n, n[xe]))(
            n.buffer,
            n.byteOffset + o * n.BYTES_PER_ELEMENT,
            h((void 0 === t ? r : f(t, r)) - o)
          );
        }
      },
      qe = function slice(e, t) {
        return speciesFromList(this, _e.call(validate(this), e, t));
      },
      Ie = function set(e) {
        validate(this);
        var t = toOffset(arguments[1], 1),
          n = this.length,
          r = v(e),
          o = h(r.length),
          i = 0;
        if (o + t > n) throw V("Wrong length!");
        for (; i < o; ) this[t + i] = r[i++];
      },
      Le = {
        entries: function entries() {
          return le.call(validate(this));
        },
        keys: function keys() {
          return ce.call(validate(this));
        },
        values: function values() {
          return se.call(validate(this));
        }
      },
      isTAIndex = function(e, t) {
        return (
          y(e) &&
          e[Oe] &&
          "symbol" != typeof t &&
          t in e &&
          String(+t) == String(t)
        );
      },
      ze = function getOwnPropertyDescriptor(e, t) {
        return isTAIndex(e, (t = m(t, !0))) ? c(2, e[t]) : H(e, t);
      },
      He = function defineProperty(e, t, n) {
        return !(isTAIndex(e, (t = m(t, !0))) && y(n) && g(n, "value")) ||
          g(n, "get") ||
          g(n, "set") ||
          n.configurable ||
          (g(n, "writable") && !n.writable) ||
          (g(n, "enumerable") && !n.enumerable)
          ? z(e, t, n)
          : ((e[t] = n.value), e);
      };
    Ee || ((D.f = ze), (L.f = He)),
      r(r.S + r.F * !Ee, "Object", {
        getOwnPropertyDescriptor: ze,
        defineProperty: He
      }),
      n(function() {
        ye.call({});
      }) &&
        (ye = ve = function toString() {
          return me.call(this);
        });
    var Ve = u({}, Ne);
    u(Ve, Le),
      l(Ve, be, Le.values),
      u(Ve, {
        slice: qe,
        set: Ie,
        constructor: function() {},
        toString: ye,
        toLocaleString: Re
      }),
      addGetter(Ve, "buffer", "b"),
      addGetter(Ve, "byteOffset", "o"),
      addGetter(Ve, "byteLength", "l"),
      addGetter(Ve, "length", "e"),
      z(Ve, we, {
        get: function() {
          return this[Oe];
        }
      }),
      (e.exports = function(e, i, a, c) {
        var u = e + ((c = !!c) ? "Clamped" : "") + "Array",
          d = "get" + e,
          f = "set" + e,
          m = t[u],
          g = m || {},
          v = m && S(m),
          b = !m || !o.ABV,
          E = {},
          O = m && m.prototype,
          addElement = function(e, t) {
            z(e, t, {
              get: function() {
                return (function(e, t) {
                  var n = e._d;
                  return n.v[d](t * i + n.o, je);
                })(this, t);
              },
              set: function(e) {
                return (function(e, t, n) {
                  var r = e._d;
                  c &&
                    (n = (n = Math.round(n)) < 0 ? 0 : n > 255 ? 255 : 255 & n),
                    r.v[f](t * i + r.o, n, je);
                })(this, t, e);
              },
              enumerable: !0
            });
          };
        b
          ? ((m = a(function(e, t, n, r) {
              s(e, m, u, "_d");
              var o,
                a,
                c,
                d,
                f = 0,
                g = 0;
              if (y(t)) {
                if (
                  !(
                    t instanceof W ||
                    "ArrayBuffer" == (d = _(t)) ||
                    "SharedArrayBuffer" == d
                  )
                )
                  return Oe in t ? fromList(m, t) : Me.call(m, t);
                (o = t), (g = toOffset(n, i));
                var v = t.byteLength;
                if (void 0 === r) {
                  if (v % i) throw V("Wrong length!");
                  if ((a = v - g) < 0) throw V("Wrong length!");
                } else if ((a = h(r) * i) + g > v) throw V("Wrong length!");
                c = a / i;
              } else (c = p(t)), (o = new W((a = c * i)));
              for (l(e, "_d", { b: o, o: g, l: a, e: c, v: new Y(o) }); f < c; )
                addElement(e, f++);
            })),
            (O = m.prototype = w(Ve)),
            l(O, "constructor", m))
          : (n(function() {
              m(1);
            }) &&
              n(function() {
                new m(-1);
              }) &&
              R(function(e) {
                new m(), new m(null), new m(1.5), new m(e);
              }, !0)) ||
            ((m = a(function(e, t, n, r) {
              var o;
              return (
                s(e, m, u),
                y(t)
                  ? t instanceof W ||
                    "ArrayBuffer" == (o = _(t)) ||
                    "SharedArrayBuffer" == o
                    ? void 0 !== r
                      ? new g(t, toOffset(n, i), r)
                      : void 0 !== n
                      ? new g(t, toOffset(n, i))
                      : new g(t)
                    : Oe in t
                    ? fromList(m, t)
                    : Me.call(m, t)
                  : new g(p(t))
              );
            })),
            $(v !== Function.prototype ? x(g).concat(x(v)) : x(g), function(e) {
              e in m || l(m, e, g[e]);
            }),
            (m.prototype = O),
            (O.constructor = m));
        var k = O[be],
          C = !!k && ("values" == k.name || null == k.name),
          j = Le.values;
        l(m, Se, !0),
          l(O, Oe, u),
          l(O, ke, !0),
          l(O, xe, m),
          (c ? new m(1)[we] == u : we in O) ||
            z(O, we, {
              get: function() {
                return u;
              }
            }),
          (E[u] = m),
          r(r.G + r.W + r.F * (m != g), E),
          r(r.S, u, { BYTES_PER_ELEMENT: i }),
          r(
            r.S +
              r.F *
                n(function() {
                  g.of.call(m, 1);
                }),
            u,
            { from: Me, of: Ae }
          ),
          "BYTES_PER_ELEMENT" in O || l(O, "BYTES_PER_ELEMENT", i),
          r(r.P, u, Ne),
          N(u),
          r(r.P + r.F * Pe, u, { set: Ie }),
          r(r.P + r.F * !C, u, Le),
          O.toString != ye && (O.toString = ye),
          r(
            r.P +
              r.F *
                n(function() {
                  new m(1).slice();
                }),
            u,
            { slice: qe }
          ),
          r(
            r.P +
              r.F *
                (n(function() {
                  return (
                    [1, 2].toLocaleString() != new m([1, 2]).toLocaleString()
                  );
                }) ||
                  !n(function() {
                    O.toLocaleString.call([1, 2]);
                  })),
            u,
            { toLocaleString: Re }
          ),
          (T[u] = C ? k : j),
          C || l(O, be, j);
      });
  } else e.exports = function() {};
});
ji("Int8", 1, function(e) {
  return function Int8Array(t, n, r) {
    return e(this, t, n, r);
  };
}),
  ji("Uint8", 1, function(e) {
    return function Uint8Array(t, n, r) {
      return e(this, t, n, r);
    };
  }),
  ji(
    "Uint8",
    1,
    function(e) {
      return function Uint8ClampedArray(t, n, r) {
        return e(this, t, n, r);
      };
    },
    !0
  ),
  ji("Int16", 2, function(e) {
    return function Int16Array(t, n, r) {
      return e(this, t, n, r);
    };
  }),
  ji("Uint16", 2, function(e) {
    return function Uint16Array(t, n, r) {
      return e(this, t, n, r);
    };
  }),
  ji("Int32", 4, function(e) {
    return function Int32Array(t, n, r) {
      return e(this, t, n, r);
    };
  }),
  ji("Uint32", 4, function(e) {
    return function Uint32Array(t, n, r) {
      return e(this, t, n, r);
    };
  }),
  ji("Float32", 4, function(e) {
    return function Float32Array(t, n, r) {
      return e(this, t, n, r);
    };
  }),
  ji("Float64", 8, function(e) {
    return function Float64Array(t, n, r) {
      return e(this, t, n, r);
    };
  });
var Pi = (J.Reflect || {}).apply,
  Mi = Function.apply;
de(
  de.S +
    de.F *
      !_fails(function() {
        Pi(function() {});
      }),
  "Reflect",
  {
    apply: function apply(e, t, n) {
      var r = _aFunction(e),
        o = _anObject(n);
      return Pi ? Pi(r, t, o) : Mi.call(r, t, o);
    }
  }
);
var Ai = (J.Reflect || {}).construct,
  Ti = _fails(function() {
    function F() {}
    return !(Ai(function() {}, [], F) instanceof F);
  }),
  Ri = !_fails(function() {
    Ai(function() {});
  });
de(de.S + de.F * (Ti || Ri), "Reflect", {
  construct: function construct(e, t) {
    _aFunction(e), _anObject(t);
    var n = arguments.length < 3 ? e : _aFunction(arguments[2]);
    if (Ri && !Ti) return Ai(e, t, n);
    if (e == n) {
      switch (t.length) {
        case 0:
          return new e();
        case 1:
          return new e(t[0]);
        case 2:
          return new e(t[0], t[1]);
        case 3:
          return new e(t[0], t[1], t[2]);
        case 4:
          return new e(t[0], t[1], t[2], t[3]);
      }
      var r = [null];
      return r.push.apply(r, t), new (Lt.apply(e, r))();
    }
    var o = n.prototype,
      i = Fe(Q(o) ? o : Object.prototype),
      a = Function.apply.call(e, i, t);
    return Q(a) ? a : i;
  }
}),
  de(
    de.S +
      de.F *
        _fails(function() {
          Reflect.defineProperty(oe.f({}, 1, { value: 1 }), 1, { value: 2 });
        }),
    "Reflect",
    {
      defineProperty: function defineProperty(e, t, n) {
        _anObject(e), (t = _toPrimitive(t, !0)), _anObject(n);
        try {
          return oe.f(e, t, n), !0;
        } catch (e) {
          return !1;
        }
      }
    }
  );
var Ni = Be.f;
de(de.S, "Reflect", {
  deleteProperty: function deleteProperty(e, t) {
    var n = Ni(_anObject(e), t);
    return !(n && !n.configurable) && delete e[t];
  }
});
var Enumerate = function(e) {
  (this._t = _anObject(e)), (this._i = 0);
  var t,
    n = (this._k = []);
  for (t in e) n.push(t);
};
_iterCreate(Enumerate, "Object", function() {
  var e,
    t = this._k;
  do {
    if (this._i >= t.length) return { value: void 0, done: !0 };
  } while (!((e = t[this._i++]) in this._t));
  return { value: e, done: !1 };
}),
  de(de.S, "Reflect", {
    enumerate: function enumerate(e) {
      return new Enumerate(e);
    }
  }),
  de(de.S, "Reflect", {
    get: function get(e, t) {
      var n,
        r,
        o = arguments.length < 3 ? e : arguments[2];
      return _anObject(e) === o
        ? e[t]
        : (n = Be.f(e, t))
        ? _has(n, "value")
          ? n.value
          : void 0 !== n.get
          ? n.get.call(o)
          : void 0
        : Q((r = Ot(e)))
        ? get(r, t, o)
        : void 0;
    }
  }),
  de(de.S, "Reflect", {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(e, t) {
      return Be.f(_anObject(e), t);
    }
  }),
  de(de.S, "Reflect", {
    getPrototypeOf: function getPrototypeOf(e) {
      return Ot(_anObject(e));
    }
  }),
  de(de.S, "Reflect", {
    has: function has(e, t) {
      return t in e;
    }
  });
var qi = Object.isExtensible;
de(de.S, "Reflect", {
  isExtensible: function isExtensible(e) {
    return _anObject(e), !qi || qi(e);
  }
});
var Ii = J.Reflect,
  Fi =
    (Ii && Ii.ownKeys) ||
    function ownKeys(e) {
      var t = De.f(_anObject(e)),
        n = Me.f;
      return n ? t.concat(n(e)) : t;
    };
de(de.S, "Reflect", { ownKeys: Fi });
var Li = Object.preventExtensions;
de(de.S, "Reflect", {
  preventExtensions: function preventExtensions(e) {
    _anObject(e);
    try {
      return Li && Li(e), !0;
    } catch (e) {
      return !1;
    }
  }
}),
  de(de.S, "Reflect", {
    set: function set(e, t, n) {
      var r,
        o,
        i = arguments.length < 4 ? e : arguments[3],
        a = Be.f(_anObject(e), t);
      if (!a) {
        if (Q((o = Ot(e)))) return set(o, t, n, i);
        a = _propertyDesc(0);
      }
      if (_has(a, "value")) {
        if (!1 === a.writable || !Q(i)) return !1;
        if ((r = Be.f(i, t))) {
          if (r.get || r.set || !1 === r.writable) return !1;
          (r.value = n), oe.f(i, t, r);
        } else oe.f(i, t, _propertyDesc(0, n));
        return !0;
      }
      return void 0 !== a.set && (a.set.call(i, n), !0);
    }
  }),
  Tt &&
    de(de.S, "Reflect", {
      setPrototypeOf: function setPrototypeOf(e, t) {
        Tt.check(e, t);
        try {
          return Tt.set(e, t), !0;
        } catch (e) {
          return !1;
        }
      }
    });
var Di = _arrayIncludes(!0);
de(de.P, "Array", {
  includes: function includes(e) {
    return Di(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
}),
  _addToUnscopables("includes");
X.Array.includes;
var zi = pe("isConcatSpreadable");
var Hi = function flattenIntoArray(e, t, n, r, o, i, a, s) {
  for (var c, l, u = o, d = 0, h = !!a && _ctx(a, s, 3); d < r; ) {
    if (d in n) {
      if (
        ((c = h ? h(n[d], d, t) : n[d]),
        (l = !1),
        Q(c) && (l = void 0 !== (l = c[zi]) ? !!l : Te(c)),
        l && i > 0)
      )
        u = flattenIntoArray(e, t, c, _toLength(c.length), u, i - 1) - 1;
      else {
        if (u >= 9007199254740991) throw TypeError();
        e[u] = c;
      }
      u++;
    }
    d++;
  }
  return u;
};
de(de.P, "Array", {
  flatMap: function flatMap(e) {
    var t,
      n,
      r = _toObject(this);
    return (
      _aFunction(e),
      (t = _toLength(r.length)),
      (n = _arraySpeciesCreate(r, 0)),
      Hi(n, r, r, t, 0, 1, e, arguments[1]),
      n
    );
  }
}),
  _addToUnscopables("flatMap");
X.Array.flatMap;
var _stringPad = function(e, t, n, r) {
    var o = String(_defined(e)),
      i = o.length,
      a = void 0 === n ? " " : String(n),
      s = _toLength(t);
    if (s <= i || "" == a) return o;
    var c = s - i,
      l = _n.call(a, Math.ceil(c / a.length));
    return l.length > c && (l = l.slice(0, c)), r ? l + o : o + l;
  },
  Vi = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(Yo);
de(de.P + de.F * Vi, "String", {
  padStart: function padStart(e) {
    return _stringPad(
      this,
      e,
      arguments.length > 1 ? arguments[1] : void 0,
      !0
    );
  }
});
X.String.padStart;
var Ui = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(Yo);
de(de.P + de.F * Ui, "String", {
  padEnd: function padEnd(e) {
    return _stringPad(
      this,
      e,
      arguments.length > 1 ? arguments[1] : void 0,
      !1
    );
  }
});
X.String.padEnd;
Jt(
  "trimLeft",
  function(e) {
    return function trimLeft() {
      return e(this, 1);
    };
  },
  "trimStart"
);
X.String.trimLeft;
Jt(
  "trimRight",
  function(e) {
    return function trimRight() {
      return e(this, 2);
    };
  },
  "trimEnd"
);
X.String.trimRight;
_wksDefine("asyncIterator");
ge.f("asyncIterator");
de(de.S, "Object", {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(e) {
    for (
      var t, n, r = _toIobject(e), o = Be.f, i = Fi(r), a = {}, s = 0;
      i.length > s;

    )
      void 0 !== (n = o(r, (t = i[s++]))) && _createProperty(a, t, n);
    return a;
  }
});
X.Object.getOwnPropertyDescriptors;
var Gi = Ae.f,
  _objectToArray = function(e) {
    return function(t) {
      for (
        var n, r = _toIobject(t), o = Pe(r), i = o.length, a = 0, s = [];
        i > a;

      )
        (n = o[a++]), (Z && !Gi.call(r, n)) || s.push(e ? [n, r[n]] : r[n]);
      return s;
    };
  },
  Bi = _objectToArray(!1);
de(de.S, "Object", {
  values: function values(e) {
    return Bi(e);
  }
});
X.Object.values;
var Wi = _objectToArray(!0);
de(de.S, "Object", {
  entries: function entries(e) {
    return Wi(e);
  }
});
X.Object.entries;
de(de.P + de.R, "Promise", {
  finally: function(e) {
    var t = _speciesConstructor(this, X.Promise || J.Promise),
      n = "function" == typeof e;
    return this.then(
      n
        ? function(n) {
            return _promiseResolve(t, e()).then(function() {
              return n;
            });
          }
        : e,
      n
        ? function(n) {
            return _promiseResolve(t, e()).then(function() {
              throw n;
            });
          }
        : e
    );
  }
});
X.Promise.finally;
var Yi = [].slice,
  $i = /MSIE .\./.test(Yo),
  wrap$1 = function(e) {
    return function(t, n) {
      var r = arguments.length > 2,
        o = !!r && Yi.call(arguments, 2);
      return e(
        r
          ? function() {
              ("function" == typeof t ? t : Function(t)).apply(this, o);
            }
          : t,
        n
      );
    };
  };
de(de.G + de.B + de.F * $i, {
  setTimeout: wrap$1(J.setTimeout),
  setInterval: wrap$1(J.setInterval)
}),
  de(de.G + de.B, { setImmediate: qo.set, clearImmediate: qo.clear });
for (
  var Ji = pe("iterator"),
    Ki = pe("toStringTag"),
    Zi = $n.Array,
    Xi = {
      CSSRuleList: !0,
      CSSStyleDeclaration: !1,
      CSSValueList: !1,
      ClientRectList: !1,
      DOMRectList: !1,
      DOMStringList: !1,
      DOMTokenList: !0,
      DataTransferItemList: !1,
      FileList: !1,
      HTMLAllCollection: !1,
      HTMLCollection: !1,
      HTMLFormElement: !1,
      HTMLSelectElement: !1,
      MediaList: !0,
      MimeTypeArray: !1,
      NamedNodeMap: !1,
      NodeList: !0,
      PaintRequestList: !1,
      Plugin: !1,
      PluginArray: !1,
      SVGLengthList: !1,
      SVGNumberList: !1,
      SVGPathSegList: !1,
      SVGPointList: !1,
      SVGStringList: !1,
      SVGTransformList: !1,
      SourceBufferList: !1,
      StyleSheetList: !0,
      TextTrackCueList: !1,
      TextTrackList: !1,
      TouchList: !1
    },
    Qi = Pe(Xi),
    ea = 0;
  ea < Qi.length;
  ea++
) {
  var ta,
    na = Qi[ea],
    ra = Xi[na],
    oa = J[na],
    ia = oa && oa.prototype;
  if (
    ia &&
    (ia[Ji] || ie(ia, Ji, Zi), ia[Ki] || ie(ia, Ki, na), ($n[na] = Zi), ra)
  )
    for (ta in Br) ia[ta] || ue(ia, ta, Br[ta], !0);
}
createCommonjsModule(function(e) {
  var t = (function(e) {
    var t = Object.prototype,
      n = t.hasOwnProperty,
      r = "function" == typeof Symbol ? Symbol : {},
      o = r.iterator || "@@iterator",
      i = r.asyncIterator || "@@asyncIterator",
      a = r.toStringTag || "@@toStringTag";
    function wrap(e, t, n, r) {
      var o = t && t.prototype instanceof Generator ? t : Generator,
        i = Object.create(o.prototype),
        a = new Context(r || []);
      return (
        (i._invoke = (function makeInvokeMethod(e, t, n) {
          var r = "suspendedStart";
          return function invoke(o, i) {
            if ("executing" === r)
              throw new Error("Generator is already running");
            if ("completed" === r) {
              if ("throw" === o) throw i;
              return doneResult();
            }
            for (n.method = o, n.arg = i; ; ) {
              var a = n.delegate;
              if (a) {
                var c = maybeInvokeDelegate(a, n);
                if (c) {
                  if (c === s) continue;
                  return c;
                }
              }
              if ("next" === n.method) n.sent = n._sent = n.arg;
              else if ("throw" === n.method) {
                if ("suspendedStart" === r) throw ((r = "completed"), n.arg);
                n.dispatchException(n.arg);
              } else "return" === n.method && n.abrupt("return", n.arg);
              r = "executing";
              var l = tryCatch(e, t, n);
              if ("normal" === l.type) {
                if (
                  ((r = n.done ? "completed" : "suspendedYield"), l.arg === s)
                )
                  continue;
                return { value: l.arg, done: n.done };
              }
              "throw" === l.type &&
                ((r = "completed"), (n.method = "throw"), (n.arg = l.arg));
            }
          };
        })(e, n, a)),
        i
      );
    }
    function tryCatch(e, t, n) {
      try {
        return { type: "normal", arg: e.call(t, n) };
      } catch (e) {
        return { type: "throw", arg: e };
      }
    }
    e.wrap = wrap;
    var s = {};
    function Generator() {}
    function GeneratorFunction() {}
    function GeneratorFunctionPrototype() {}
    var c = {};
    c[o] = function() {
      return this;
    };
    var l = Object.getPrototypeOf,
      u = l && l(l(values([])));
    u && u !== t && n.call(u, o) && (c = u);
    var d = (GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(
      c
    ));
    function defineIteratorMethods(e) {
      ["next", "throw", "return"].forEach(function(t) {
        e[t] = function(e) {
          return this._invoke(t, e);
        };
      });
    }
    function AsyncIterator(e) {
      var t;
      this._invoke = function enqueue(r, o) {
        function callInvokeWithMethodAndArg() {
          return new Promise(function(t, i) {
            !(function invoke(t, r, o, i) {
              var a = tryCatch(e[t], e, r);
              if ("throw" !== a.type) {
                var s = a.arg,
                  c = s.value;
                return c && "object" == typeof c && n.call(c, "__await")
                  ? Promise.resolve(c.__await).then(
                      function(e) {
                        invoke("next", e, o, i);
                      },
                      function(e) {
                        invoke("throw", e, o, i);
                      }
                    )
                  : Promise.resolve(c).then(
                      function(e) {
                        (s.value = e), o(s);
                      },
                      function(e) {
                        return invoke("throw", e, o, i);
                      }
                    );
              }
              i(a.arg);
            })(r, o, t, i);
          });
        }
        return (t = t
          ? t.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg)
          : callInvokeWithMethodAndArg());
      };
    }
    function maybeInvokeDelegate(e, t) {
      var n = e.iterator[t.method];
      if (void 0 === n) {
        if (((t.delegate = null), "throw" === t.method)) {
          if (
            e.iterator.return &&
            ((t.method = "return"),
            (t.arg = void 0),
            maybeInvokeDelegate(e, t),
            "throw" === t.method)
          )
            return s;
          (t.method = "throw"),
            (t.arg = new TypeError(
              "The iterator does not provide a 'throw' method"
            ));
        }
        return s;
      }
      var r = tryCatch(n, e.iterator, t.arg);
      if ("throw" === r.type)
        return (t.method = "throw"), (t.arg = r.arg), (t.delegate = null), s;
      var o = r.arg;
      return o
        ? o.done
          ? ((t[e.resultName] = o.value),
            (t.next = e.nextLoc),
            "return" !== t.method && ((t.method = "next"), (t.arg = void 0)),
            (t.delegate = null),
            s)
          : o
        : ((t.method = "throw"),
          (t.arg = new TypeError("iterator result is not an object")),
          (t.delegate = null),
          s);
    }
    function pushTryEntry(e) {
      var t = { tryLoc: e[0] };
      1 in e && (t.catchLoc = e[1]),
        2 in e && ((t.finallyLoc = e[2]), (t.afterLoc = e[3])),
        this.tryEntries.push(t);
    }
    function resetTryEntry(e) {
      var t = e.completion || {};
      (t.type = "normal"), delete t.arg, (e.completion = t);
    }
    function Context(e) {
      (this.tryEntries = [{ tryLoc: "root" }]),
        e.forEach(pushTryEntry, this),
        this.reset(!0);
    }
    function values(e) {
      if (e) {
        var t = e[o];
        if (t) return t.call(e);
        if ("function" == typeof e.next) return e;
        if (!isNaN(e.length)) {
          var r = -1,
            i = function next() {
              for (; ++r < e.length; )
                if (n.call(e, r))
                  return (next.value = e[r]), (next.done = !1), next;
              return (next.value = void 0), (next.done = !0), next;
            };
          return (i.next = i);
        }
      }
      return { next: doneResult };
    }
    function doneResult() {
      return { value: void 0, done: !0 };
    }
    return (
      (GeneratorFunction.prototype = d.constructor = GeneratorFunctionPrototype),
      (GeneratorFunctionPrototype.constructor = GeneratorFunction),
      (GeneratorFunctionPrototype[a] = GeneratorFunction.displayName =
        "GeneratorFunction"),
      (e.isGeneratorFunction = function(e) {
        var t = "function" == typeof e && e.constructor;
        return (
          !!t &&
          (t === GeneratorFunction ||
            "GeneratorFunction" === (t.displayName || t.name))
        );
      }),
      (e.mark = function(e) {
        return (
          Object.setPrototypeOf
            ? Object.setPrototypeOf(e, GeneratorFunctionPrototype)
            : ((e.__proto__ = GeneratorFunctionPrototype),
              a in e || (e[a] = "GeneratorFunction")),
          (e.prototype = Object.create(d)),
          e
        );
      }),
      (e.awrap = function(e) {
        return { __await: e };
      }),
      defineIteratorMethods(AsyncIterator.prototype),
      (AsyncIterator.prototype[i] = function() {
        return this;
      }),
      (e.AsyncIterator = AsyncIterator),
      (e.async = function(t, n, r, o) {
        var i = new AsyncIterator(wrap(t, n, r, o));
        return e.isGeneratorFunction(n)
          ? i
          : i.next().then(function(e) {
              return e.done ? e.value : i.next();
            });
      }),
      defineIteratorMethods(d),
      (d[a] = "Generator"),
      (d[o] = function() {
        return this;
      }),
      (d.toString = function() {
        return "[object Generator]";
      }),
      (e.keys = function(e) {
        var t = [];
        for (var n in e) t.push(n);
        return (
          t.reverse(),
          function next() {
            for (; t.length; ) {
              var n = t.pop();
              if (n in e) return (next.value = n), (next.done = !1), next;
            }
            return (next.done = !0), next;
          }
        );
      }),
      (e.values = values),
      (Context.prototype = {
        constructor: Context,
        reset: function(e) {
          if (
            ((this.prev = 0),
            (this.next = 0),
            (this.sent = this._sent = void 0),
            (this.done = !1),
            (this.delegate = null),
            (this.method = "next"),
            (this.arg = void 0),
            this.tryEntries.forEach(resetTryEntry),
            !e)
          )
            for (var t in this)
              "t" === t.charAt(0) &&
                n.call(this, t) &&
                !isNaN(+t.slice(1)) &&
                (this[t] = void 0);
        },
        stop: function() {
          this.done = !0;
          var e = this.tryEntries[0].completion;
          if ("throw" === e.type) throw e.arg;
          return this.rval;
        },
        dispatchException: function(e) {
          if (this.done) throw e;
          var t = this;
          function handle(n, r) {
            return (
              (i.type = "throw"),
              (i.arg = e),
              (t.next = n),
              r && ((t.method = "next"), (t.arg = void 0)),
              !!r
            );
          }
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r],
              i = o.completion;
            if ("root" === o.tryLoc) return handle("end");
            if (o.tryLoc <= this.prev) {
              var a = n.call(o, "catchLoc"),
                s = n.call(o, "finallyLoc");
              if (a && s) {
                if (this.prev < o.catchLoc) return handle(o.catchLoc, !0);
                if (this.prev < o.finallyLoc) return handle(o.finallyLoc);
              } else if (a) {
                if (this.prev < o.catchLoc) return handle(o.catchLoc, !0);
              } else {
                if (!s)
                  throw new Error("try statement without catch or finally");
                if (this.prev < o.finallyLoc) return handle(o.finallyLoc);
              }
            }
          }
        },
        abrupt: function(e, t) {
          for (var r = this.tryEntries.length - 1; r >= 0; --r) {
            var o = this.tryEntries[r];
            if (
              o.tryLoc <= this.prev &&
              n.call(o, "finallyLoc") &&
              this.prev < o.finallyLoc
            ) {
              var i = o;
              break;
            }
          }
          i &&
            ("break" === e || "continue" === e) &&
            i.tryLoc <= t &&
            t <= i.finallyLoc &&
            (i = null);
          var a = i ? i.completion : {};
          return (
            (a.type = e),
            (a.arg = t),
            i
              ? ((this.method = "next"), (this.next = i.finallyLoc), s)
              : this.complete(a)
          );
        },
        complete: function(e, t) {
          if ("throw" === e.type) throw e.arg;
          return (
            "break" === e.type || "continue" === e.type
              ? (this.next = e.arg)
              : "return" === e.type
              ? ((this.rval = this.arg = e.arg),
                (this.method = "return"),
                (this.next = "end"))
              : "normal" === e.type && t && (this.next = t),
            s
          );
        },
        finish: function(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.finallyLoc === e)
              return (
                this.complete(n.completion, n.afterLoc), resetTryEntry(n), s
              );
          }
        },
        catch: function(e) {
          for (var t = this.tryEntries.length - 1; t >= 0; --t) {
            var n = this.tryEntries[t];
            if (n.tryLoc === e) {
              var r = n.completion;
              if ("throw" === r.type) {
                var o = r.arg;
                resetTryEntry(n);
              }
              return o;
            }
          }
          throw new Error("illegal catch attempt");
        },
        delegateYield: function(e, t, n) {
          return (
            (this.delegate = {
              iterator: values(e),
              resultName: t,
              nextLoc: n
            }),
            "next" === this.method && (this.arg = void 0),
            s
          );
        }
      }),
      e
    );
  })(e.exports);
  try {
    regeneratorRuntime = t;
  } catch (e) {
    Function("r", "regeneratorRuntime = r")(t);
  }
});
var aa = createCommonjsModule(function(e) {
    var t = (e.exports =
      "undefined" != typeof window && window.Math == Math
        ? window
        : "undefined" != typeof self && self.Math == Math
        ? self
        : Function("return this")());
    "number" == typeof __g && (__g = t);
  }),
  sa = createCommonjsModule(function(e) {
    var t = (e.exports = { version: "2.6.11" });
    "number" == typeof __e && (__e = t);
  }),
  ca =
    (sa.version,
    function(e, t, n) {
      if (
        ((function(e) {
          if ("function" != typeof e)
            throw TypeError(e + " is not a function!");
        })(e),
        void 0 === t)
      )
        return e;
      switch (n) {
        case 1:
          return function(n) {
            return e.call(t, n);
          };
        case 2:
          return function(n, r) {
            return e.call(t, n, r);
          };
        case 3:
          return function(n, r, o) {
            return e.call(t, n, r, o);
          };
      }
      return function() {
        return e.apply(t, arguments);
      };
    }),
  _isObject$1 = function(e) {
    return "object" == typeof e ? null !== e : "function" == typeof e;
  },
  _anObject$1 = function(e) {
    if (!_isObject$1(e)) throw TypeError(e + " is not an object!");
    return e;
  },
  _fails$1 = function(e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  },
  la = !_fails$1(function() {
    return (
      7 !=
      Object.defineProperty({}, "a", {
        get: function() {
          return 7;
        }
      }).a
    );
  }),
  ua = aa.document,
  da = _isObject$1(ua) && _isObject$1(ua.createElement),
  ha =
    !la &&
    !_fails$1(function() {
      return (
        7 !=
        Object.defineProperty(
          ((e = "div"), da ? ua.createElement(e) : {}),
          "a",
          {
            get: function() {
              return 7;
            }
          }
        ).a
      );
      var e;
    }),
  pa = Object.defineProperty,
  fa = {
    f: la
      ? Object.defineProperty
      : function defineProperty(e, t, n) {
          if (
            (_anObject$1(e),
            (t = (function(e, t) {
              if (!_isObject$1(e)) return e;
              var n, r;
              if (
                t &&
                "function" == typeof (n = e.toString) &&
                !_isObject$1((r = n.call(e)))
              )
                return r;
              if (
                "function" == typeof (n = e.valueOf) &&
                !_isObject$1((r = n.call(e)))
              )
                return r;
              if (
                !t &&
                "function" == typeof (n = e.toString) &&
                !_isObject$1((r = n.call(e)))
              )
                return r;
              throw TypeError("Can't convert object to primitive value");
            })(t, !0)),
            _anObject$1(n),
            ha)
          )
            try {
              return pa(e, t, n);
            } catch (e) {}
          if ("get" in n || "set" in n)
            throw TypeError("Accessors not supported!");
          return "value" in n && (e[t] = n.value), e;
        }
  },
  ma = la
    ? function(e, t, n) {
        return fa.f(
          e,
          t,
          (function(e, t) {
            return {
              enumerable: !(1 & e),
              configurable: !(2 & e),
              writable: !(4 & e),
              value: t
            };
          })(1, n)
        );
      }
    : function(e, t, n) {
        return (e[t] = n), e;
      },
  ga = {}.hasOwnProperty,
  _has$1 = function(e, t) {
    return ga.call(e, t);
  },
  $export$1 = function(e, t, n) {
    var r,
      o,
      i,
      a = e & $export$1.F,
      s = e & $export$1.G,
      c = e & $export$1.S,
      l = e & $export$1.P,
      u = e & $export$1.B,
      d = e & $export$1.W,
      h = s ? sa : sa[t] || (sa[t] = {}),
      p = h.prototype,
      f = s ? aa : c ? aa[t] : (aa[t] || {}).prototype;
    for (r in (s && (n = t), n))
      ((o = !a && f && void 0 !== f[r]) && _has$1(h, r)) ||
        ((i = o ? f[r] : n[r]),
        (h[r] =
          s && "function" != typeof f[r]
            ? n[r]
            : u && o
            ? ca(i, aa)
            : d && f[r] == i
            ? (function(e) {
                var F = function(t, n, r) {
                  if (this instanceof e) {
                    switch (arguments.length) {
                      case 0:
                        return new e();
                      case 1:
                        return new e(t);
                      case 2:
                        return new e(t, n);
                    }
                    return new e(t, n, r);
                  }
                  return e.apply(this, arguments);
                };
                return (F.prototype = e.prototype), F;
              })(i)
            : l && "function" == typeof i
            ? ca(Function.call, i)
            : i),
        l &&
          (((h.virtual || (h.virtual = {}))[r] = i),
          e & $export$1.R && p && !p[r] && ma(p, r, i)));
  };
($export$1.F = 1),
  ($export$1.G = 2),
  ($export$1.S = 4),
  ($export$1.P = 8),
  ($export$1.B = 16),
  ($export$1.W = 32),
  ($export$1.U = 64),
  ($export$1.R = 128);
$export$1($export$1.G, { global: aa });
var _a = sa.global;
!(function unwrapExports(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
})(
  createCommonjsModule(function(e) {
    var t = (function _interopRequireDefault(e) {
      return e && e.__esModule ? e : { default: e };
    })(_a);
    t.default._babelPolyfill &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn(
        "@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning."
      ),
      (t.default._babelPolyfill = !0);
  })
),
  console.info(
    `%c  CUSTOM-HEADER  \n%c  ${localize("common.version")} 1.3.2  `,
    "color: orange; font-weight: bold; background: black",
    "color: white; font-weight: bold; background: dimgray"
  ),
  buildConfig(),
  window.setTimeout(() => {
    customElements.get("card-tools") || console.log("Device ID: ", g);
  }, 2e3);
