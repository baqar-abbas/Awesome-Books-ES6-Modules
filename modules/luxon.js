/* eslint-disable */
class e extends Error {}
class z extends e {
  constructor(e) {
    super("Invalid DateTime: " + e.toMessage());
  }
}
class q extends e {
  constructor(e) {
    super("Invalid Interval: " + e.toMessage());
  }
}
class A extends e {
  constructor(e) {
    super("Invalid Duration: " + e.toMessage());
  }
}
class j extends e {}
class _ extends e {
  constructor(e) {
    super("Invalid unit " + e);
  }
}
class o extends e {}
class r extends e {
  constructor() {
    super("Zone is an abstract class");
  }
}
var t = "numeric",
  n = "short",
  s = "long";
const U = { year: t, month: t, day: t },
  $ = { year: t, month: n, day: t },
  H = { year: t, month: n, day: t, weekday: n },
  W = { year: t, month: s, day: t },
  R = { year: t, month: s, day: t, weekday: s },
  J = { hour: t, minute: t },
  Y = { hour: t, minute: t, second: t },
  P = { hour: t, minute: t, second: t, timeZoneName: n },
  G = { hour: t, minute: t, second: t, timeZoneName: s },
  B = { hour: t, minute: t, hourCycle: "h23" },
  Q = { hour: t, minute: t, second: t, hourCycle: "h23" },
  K = { hour: t, minute: t, second: t, hourCycle: "h23", timeZoneName: n },
  X = { hour: t, minute: t, second: t, hourCycle: "h23", timeZoneName: s },
  ee = { year: t, month: t, day: t, hour: t, minute: t },
  te = { year: t, month: t, day: t, hour: t, minute: t, second: t },
  re = { year: t, month: n, day: t, hour: t, minute: t },
  ne = { year: t, month: n, day: t, hour: t, minute: t, second: t },
  se = { year: t, month: n, day: t, weekday: n, hour: t, minute: t },
  ie = { year: t, month: s, day: t, hour: t, minute: t, timeZoneName: n },
  ae = {
    year: t,
    month: s,
    day: t,
    hour: t,
    minute: t,
    second: t,
    timeZoneName: n,
  },
  oe = {
    year: t,
    month: s,
    day: t,
    weekday: s,
    hour: t,
    minute: t,
    timeZoneName: s,
  },
  ue = {
    year: t,
    month: s,
    day: t,
    weekday: s,
    hour: t,
    minute: t,
    second: t,
    timeZoneName: s,
  };
function O(e) {
  return void 0 === e;
}
function c(e) {
  return "number" == typeof e;
}
function le(e) {
  return "number" == typeof e && e % 1 == 0;
}
function ce(e) {
  return "[object Date]" === Object.prototype.toString.call(e);
}
function he() {
  try {
    return "undefined" != typeof Intl && !!Intl.RelativeTimeFormat;
  } catch (e) {
    return !1;
  }
}
function de(e) {
  return Array.isArray(e) ? e : [e];
}
function me(e, r, n) {
  if (0 !== e.length)
    return e.reduce((e, t) => {
      t = [r(t), t];
      return e && n(e[0], t[0]) === e[0] ? e : t;
    }, null)[1];
}
function h(e, t) {
  return Object.prototype.hasOwnProperty.call(e, t);
}
function u(e, t, r) {
  return le(e) && t <= e && e <= r;
}
function l(e, t = 2) {
  let r;
  return (r =
    e < 0 ? "-" + ("" + -e).padStart(t, "0") : ("" + e).padStart(t, "0"));
}
function d(e) {
  if (!O(e) && null !== e && "" !== e) return parseInt(e, 10);
}
function m(e) {
  if (!O(e) && null !== e && "" !== e) return parseFloat(e);
}
function fe(e) {
  if (!O(e) && null !== e && "" !== e)
    return (e = 1e3 * parseFloat("0." + e)), Math.floor(e);
}
function ye(e, t, r = !1) {
  const n = 10 ** t,
    s = r ? Math.trunc : Math.round;
  return s(e * n) / n;
}
function ge(e) {
  return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
}
function we(e) {
  return ge(e) ? 366 : 365;
}
function ve(e, t) {
  var r,
    n = (n = t - 1) - (r = 12) * Math.floor(n / r) + 1;
  return 2 == n
    ? ge(e + (t - n) / 12)
      ? 29
      : 28
    : [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][n - 1];
}
function pe(e) {
  let t = Date.UTC(
    e.year,
    e.month - 1,
    e.day,
    e.hour,
    e.minute,
    e.second,
    e.millisecond
  );
  return (
    e.year < 100 &&
      0 <= e.year &&
      (t = new Date(t)).setUTCFullYear(t.getUTCFullYear() - 1900),
    +t
  );
}
function Te(e) {
  var t =
      (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7,
    e = e - 1,
    e = (e + Math.floor(e / 4) - Math.floor(e / 100) + Math.floor(e / 400)) % 7;
  return 4 == t || 3 == e ? 53 : 52;
}
function Se(e) {
  return 99 < e ? e : 60 < e ? 1900 + e : 2e3 + e;
}
function Oe(e, t, r, n = null) {
  const s = new Date(e),
    i = {
      hourCycle: "h23",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    };
  n && (i.timeZone = n);
  (e = { timeZoneName: t, ...i }),
    (n = new Intl.DateTimeFormat(r, e)
      .formatToParts(s)
      .find((e) => "timezonename" === e.type.toLowerCase()));
  return n ? n.value : null;
}
function be(e, t) {
  let r = parseInt(e, 10);
  Number.isNaN(r) && (r = 0);
  (e = parseInt(t, 10) || 0), (t = r < 0 || Object.is(r, -0) ? -e : e);
  return 60 * r + t;
}
function ke(e) {
  var t = Number(e);
  if ("boolean" == typeof e || "" === e || Number.isNaN(t))
    throw new o("Invalid unit value " + e);
  return t;
}
function Me(e, t) {
  const r = {};
  for (const s in e) {
    var n;
    !h(e, s) || (null != (n = e[s]) && (r[t(s)] = ke(n)));
  }
  return r;
}
function Ne(e, t) {
  var r = Math.trunc(Math.abs(e / 60)),
    n = Math.trunc(Math.abs(e % 60)),
    s = 0 <= e ? "+" : "-";
  switch (t) {
    case "short":
      return s + l(r, 2) + ":" + l(n, 2);
    case "narrow":
      return s + r + (0 < n ? ":" + n : "");
    case "techie":
      return s + l(r, 2) + l(n, 2);
    default:
      throw new RangeError(
        `Value format ${t} is out of range for property format`
      );
  }
}
function De(e) {
  return (
    (r = e),
    ["hour", "minute", "second", "millisecond"].reduce(
      (e, t) => ((e[t] = r[t]), e),
      {}
    )
  );
}
n =
  /[A-Za-z_+-]{1,256}(?::?\/[A-Za-z0-9_+-]{1,256}(?:\/[A-Za-z0-9_+-]{1,256})?)?/;
const Ee = [
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
    "December",
  ],
  Ve = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  Ie = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
function xe(e) {
  switch (e) {
    case "narrow":
      return [...Ie];
    case "short":
      return [...Ve];
    case "long":
      return [...Ee];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    case "2-digit":
      return [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
      ];
    default:
      return null;
  }
}
const Ce = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  Fe = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  Ze = ["M", "T", "W", "T", "F", "S", "S"];
function Le(e) {
  switch (e) {
    case "narrow":
      return [...Ze];
    case "short":
      return [...Fe];
    case "long":
      return [...Ce];
    case "numeric":
      return ["1", "2", "3", "4", "5", "6", "7"];
    default:
      return null;
  }
}
const ze = ["AM", "PM"],
  qe = ["Before Christ", "Anno Domini"],
  Ae = ["BC", "AD"],
  je = ["B", "A"];
function _e(e) {
  switch (e) {
    case "narrow":
      return [...je];
    case "short":
      return [...Ae];
    case "long":
      return [...qe];
    default:
      return null;
  }
}
function Ue(e) {
  return ze[e.hour < 12 ? 0 : 1];
}
function $e(e, t) {
  return Le(t)[e.weekday - 1];
}
function He(e, t) {
  return xe(t)[e.month - 1];
}
function We(e, t) {
  return _e(t)[e.year < 0 ? 0 : 1];
}
function Re(e, t, r = "always", n = !1) {
  var s = {
      years: ["year", "yr."],
      quarters: ["quarter", "qtr."],
      months: ["month", "mo."],
      weeks: ["week", "wk."],
      days: ["day", "day", "days"],
      hours: ["hour", "hr."],
      minutes: ["minute", "min."],
      seconds: ["second", "sec."],
    },
    i = -1 === ["hours", "minutes", "seconds"].indexOf(e);
  if ("auto" === r && i) {
    var a = "days" === e;
    switch (t) {
      case 1:
        return a ? "tomorrow" : "next " + s[e][0];
      case -1:
        return a ? "yesterday" : "last " + s[e][0];
      case 0:
        return a ? "today" : "this " + s[e][0];
    }
  }
  var r = Object.is(t, -0) || t < 0,
    i = Math.abs(t),
    t = 1 === i,
    o = s[e],
    n = n ? (!t && o[2]) || o[1] : t ? s[e][0] : e;
  return r ? i + ` ${n} ago` : `in ${i} ` + n;
}
function Je(e, t) {
  let r = "";
  for (const n of e) n.literal ? (r += n.val) : (r += t(n.val));
  return r;
}
const Ye = {
  D: U,
  DD: $,
  DDD: W,
  DDDD: R,
  t: J,
  tt: Y,
  ttt: P,
  tttt: G,
  T: B,
  TT: Q,
  TTT: K,
  TTTT: X,
  f: ee,
  ff: re,
  fff: ie,
  ffff: oe,
  F: te,
  FF: ne,
  FFF: ae,
  FFFF: ue,
};
class f {
  static create(e, t = {}) {
    return new f(e, t);
  }
  static parseFormat(t) {
    let r = null,
      n = "",
      s = !1;
    const i = [];
    for (let e = 0; e < t.length; e++) {
      var a = t.charAt(e);
      "'" === a
        ? (0 < n.length && i.push({ literal: s, val: n }),
          (r = null),
          (n = ""),
          (s = !s))
        : s || a === r
        ? (n += a)
        : (0 < n.length && i.push({ literal: !1, val: n }), (n = a), (r = a));
    }
    return 0 < n.length && i.push({ literal: s, val: n }), i;
  }
  static macroTokenToFormatOpts(e) {
    return Ye[e];
  }
  constructor(e, t) {
    (this.opts = t), (this.loc = e), (this.systemLoc = null);
  }
  formatWithSystemDefault(e, t) {
    null === this.systemLoc && (this.systemLoc = this.loc.redefaultToSystem());
    const r = this.systemLoc.dtFormatter(e, { ...this.opts, ...t });
    return r.format();
  }
  formatDateTime(e, t = {}) {
    const r = this.loc.dtFormatter(e, { ...this.opts, ...t });
    return r.format();
  }
  formatDateTimeParts(e, t = {}) {
    const r = this.loc.dtFormatter(e, { ...this.opts, ...t });
    return r.formatToParts();
  }
  resolvedOptions(e, t = {}) {
    const r = this.loc.dtFormatter(e, { ...this.opts, ...t });
    return r.resolvedOptions();
  }
  num(e, t = 0) {
    if (this.opts.forceSimple) return l(e, t);
    const r = { ...this.opts };
    return 0 < t && (r.padTo = t), this.loc.numberFormatter(r).format(e);
  }
  formatDateTimeFromString(r, e) {
    const n = "en" === this.loc.listingMode(),
      t = this.loc.outputCalendar && "gregory" !== this.loc.outputCalendar,
      s = (e, t) => this.loc.extract(r, e, t),
      i = (e) =>
        r.isOffsetFixed && 0 === r.offset && e.allowZ
          ? "Z"
          : r.isValid
          ? r.zone.formatOffset(r.ts, e.format)
          : "",
      a = () =>
        n ? Ue(r) : s({ hour: "numeric", hourCycle: "h12" }, "dayperiod"),
      o = (e, t) =>
        n
          ? He(r, e)
          : s(t ? { month: e } : { month: e, day: "numeric" }, "month"),
      u = (e, t) =>
        n
          ? $e(r, e)
          : s(
              t
                ? { weekday: e }
                : { weekday: e, month: "long", day: "numeric" },
              "weekday"
            ),
      l = (e) => {
        var t = f.macroTokenToFormatOpts(e);
        return t ? this.formatWithSystemDefault(r, t) : e;
      },
      c = (e) => (n ? We(r, e) : s({ era: e }, "era"));
    return Je(f.parseFormat(e), (e) => {
      switch (e) {
        case "S":
          return this.num(r.millisecond);
        case "u":
        case "SSS":
          return this.num(r.millisecond, 3);
        case "s":
          return this.num(r.second);
        case "ss":
          return this.num(r.second, 2);
        case "uu":
          return this.num(Math.floor(r.millisecond / 10), 2);
        case "uuu":
          return this.num(Math.floor(r.millisecond / 100));
        case "m":
          return this.num(r.minute);
        case "mm":
          return this.num(r.minute, 2);
        case "h":
          return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12);
        case "hh":
          return this.num(r.hour % 12 == 0 ? 12 : r.hour % 12, 2);
        case "H":
          return this.num(r.hour);
        case "HH":
          return this.num(r.hour, 2);
        case "Z":
          return i({ format: "narrow", allowZ: this.opts.allowZ });
        case "ZZ":
          return i({ format: "short", allowZ: this.opts.allowZ });
        case "ZZZ":
          return i({ format: "techie", allowZ: this.opts.allowZ });
        case "ZZZZ":
          return r.zone.offsetName(r.ts, {
            format: "short",
            locale: this.loc.locale,
          });
        case "ZZZZZ":
          return r.zone.offsetName(r.ts, {
            format: "long",
            locale: this.loc.locale,
          });
        case "z":
          return r.zoneName;
        case "a":
          return a();
        case "d":
          return t ? s({ day: "numeric" }, "day") : this.num(r.day);
        case "dd":
          return t ? s({ day: "2-digit" }, "day") : this.num(r.day, 2);
        case "c":
          return this.num(r.weekday);
        case "ccc":
          return u("short", !0);
        case "cccc":
          return u("long", !0);
        case "ccccc":
          return u("narrow", !0);
        case "E":
          return this.num(r.weekday);
        case "EEE":
          return u("short", !1);
        case "EEEE":
          return u("long", !1);
        case "EEEEE":
          return u("narrow", !1);
        case "L":
          return t
            ? s({ month: "numeric", day: "numeric" }, "month")
            : this.num(r.month);
        case "LL":
          return t
            ? s({ month: "2-digit", day: "numeric" }, "month")
            : this.num(r.month, 2);
        case "LLL":
          return o("short", !0);
        case "LLLL":
          return o("long", !0);
        case "LLLLL":
          return o("narrow", !0);
        case "M":
          return t ? s({ month: "numeric" }, "month") : this.num(r.month);
        case "MM":
          return t ? s({ month: "2-digit" }, "month") : this.num(r.month, 2);
        case "MMM":
          return o("short", !1);
        case "MMMM":
          return o("long", !1);
        case "MMMMM":
          return o("narrow", !1);
        case "y":
          return t ? s({ year: "numeric" }, "year") : this.num(r.year);
        case "yy":
          return t
            ? s({ year: "2-digit" }, "year")
            : this.num(r.year.toString().slice(-2), 2);
        case "yyyy":
          return t ? s({ year: "numeric" }, "year") : this.num(r.year, 4);
        case "yyyyyy":
          return t ? s({ year: "numeric" }, "year") : this.num(r.year, 6);
        case "G":
          return c("short");
        case "GG":
          return c("long");
        case "GGGGG":
          return c("narrow");
        case "kk":
          return this.num(r.weekYear.toString().slice(-2), 2);
        case "kkkk":
          return this.num(r.weekYear, 4);
        case "W":
          return this.num(r.weekNumber);
        case "WW":
          return this.num(r.weekNumber, 2);
        case "o":
          return this.num(r.ordinal);
        case "ooo":
          return this.num(r.ordinal, 3);
        case "q":
          return this.num(r.quarter);
        case "qq":
          return this.num(r.quarter, 2);
        case "X":
          return this.num(Math.floor(r.ts / 1e3));
        case "x":
          return this.num(r.ts);
        default:
          return l(e);
      }
    });
  }
  formatDurationFromString(e, t) {
    const r = (e) => {
        switch (e[0]) {
          case "S":
            return "millisecond";
          case "s":
            return "second";
          case "m":
            return "minute";
          case "h":
            return "hour";
          case "d":
            return "day";
          case "w":
            return "week";
          case "M":
            return "month";
          case "y":
            return "year";
          default:
            return null;
        }
      },
      n = f.parseFormat(t),
      s = n.reduce((e, { literal: t, val: r }) => (t ? e : e.concat(r)), []),
      i = e.shiftTo(...s.map(r).filter((e) => e));
    return Je(
      n,
      ((a = i),
      (e) => {
        var t = r(e);
        return t ? this.num(a.get(t), e.length) : e;
      })
    );
  }
}
class y {
  constructor(e, t) {
    (this.reason = e), (this.explanation = t);
  }
  toMessage() {
    return this.explanation
      ? this.reason + ": " + this.explanation
      : this.reason;
  }
}
class i {
  get type() {
    throw new r();
  }
  get name() {
    throw new r();
  }
  get ianaName() {
    return this.name;
  }
  get isUniversal() {
    throw new r();
  }
  offsetName(e, t) {
    throw new r();
  }
  formatOffset(e, t) {
    throw new r();
  }
  offset(e) {
    throw new r();
  }
  equals(e) {
    throw new r();
  }
  get isValid() {
    throw new r();
  }
}
let Pe = null;
class Ge extends i {
  static get instance() {
    return (Pe = null === Pe ? new Ge() : Pe);
  }
  get type() {
    return "system";
  }
  get name() {
    return new Intl.DateTimeFormat().resolvedOptions().timeZone;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(e, { format: t, locale: r }) {
    return Oe(e, t, r);
  }
  formatOffset(e, t) {
    return Ne(this.offset(e), t);
  }
  offset(e) {
    return -new Date(e).getTimezoneOffset();
  }
  equals(e) {
    return "system" === e.type;
  }
  get isValid() {
    return !0;
  }
}
let Be = {};
function Qe(e) {
  return (
    Be[e] ||
      (Be[e] = new Intl.DateTimeFormat("en-US", {
        hour12: !1,
        timeZone: e,
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        era: "short",
      })),
    Be[e]
  );
}
const Ke = { year: 0, month: 1, day: 2, era: 3, hour: 4, minute: 5, second: 6 };
function Xe(e, t) {
  var e = e.format(t).replace(/\u200E/g, ""),
    [, t, e, r, n, s, i, a] =
      /(\d+)\/(\d+)\/(\d+) (AD|BC),? (\d+):(\d+):(\d+)/.exec(e);
  return [r, t, e, n, s, i, a];
}
function et(e, t) {
  var r = e.formatToParts(t);
  const n = [];
  for (let e = 0; e < r.length; e++) {
    var { type: s, value: i } = r[e],
      a = Ke[s];
    "era" === s ? (n[a] = i) : O(a) || (n[a] = parseInt(i, 10));
  }
  return n;
}
let tt = {};
class w extends i {
  static create(e) {
    return tt[e] || (tt[e] = new w(e)), tt[e];
  }
  static resetCache() {
    (tt = {}), (Be = {});
  }
  static isValidSpecifier(e) {
    return this.isValidZone(e);
  }
  static isValidZone(e) {
    if (!e) return !1;
    try {
      return new Intl.DateTimeFormat("en-US", { timeZone: e }).format(), !0;
    } catch (e) {
      return !1;
    }
  }
  constructor(e) {
    super(), (this.zoneName = e), (this.valid = w.isValidZone(e));
  }
  get type() {
    return "iana";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName(e, { format: t, locale: r }) {
    return Oe(e, t, r, this.name);
  }
  formatOffset(e, t) {
    return Ne(this.offset(e), t);
  }
  offset(e) {
    e = new Date(e);
    if (isNaN(e)) return NaN;
    var t = Qe(this.name);
    let [r, n, s, i, a, o, u] = (t.formatToParts ? et : Xe)(t, e);
    (t = +e), (e = t % 1e3);
    return (
      (pe({
        year: (r = "BC" === i ? 1 - Math.abs(r) : r),
        month: n,
        day: s,
        hour: 24 === a ? 0 : a,
        minute: o,
        second: u,
        millisecond: 0,
      }) -
        (t -= 0 <= e ? e : 1e3 + e)) /
      6e4
    );
  }
  equals(e) {
    return "iana" === e.type && e.name === this.name;
  }
  get isValid() {
    return this.valid;
  }
}
let rt = null;
class v extends i {
  static get utcInstance() {
    return (rt = null === rt ? new v(0) : rt);
  }
  static instance(e) {
    return 0 === e ? v.utcInstance : new v(e);
  }
  static parseSpecifier(e) {
    if (e) {
      e = e.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);
      if (e) return new v(be(e[1], e[2]));
    }
    return null;
  }
  constructor(e) {
    super(), (this.fixed = e);
  }
  get type() {
    return "fixed";
  }
  get name() {
    return 0 === this.fixed ? "UTC" : "UTC" + Ne(this.fixed, "narrow");
  }
  get ianaName() {
    return 0 === this.fixed ? "Etc/UTC" : "Etc/GMT" + Ne(-this.fixed, "narrow");
  }
  offsetName() {
    return this.name;
  }
  formatOffset(e, t) {
    return Ne(this.fixed, t);
  }
  get isUniversal() {
    return !0;
  }
  offset() {
    return this.fixed;
  }
  equals(e) {
    return "fixed" === e.type && e.fixed === this.fixed;
  }
  get isValid() {
    return !0;
  }
}
class nt extends i {
  constructor(e) {
    super(), (this.zoneName = e);
  }
  get type() {
    return "invalid";
  }
  get name() {
    return this.zoneName;
  }
  get isUniversal() {
    return !1;
  }
  offsetName() {
    return null;
  }
  formatOffset() {
    return "";
  }
  offset() {
    return NaN;
  }
  equals() {
    return !1;
  }
  get isValid() {
    return !1;
  }
}
function b(e, t) {
  var r;
  return O(e) || null === e
    ? t
    : e instanceof i
    ? e
    : "string" == typeof e
    ? "local" === (r = e.toLowerCase()) || "system" === r
      ? t
      : "utc" === r || "gmt" === r
      ? v.utcInstance
      : v.parseSpecifier(r) || w.create(e)
    : c(e)
    ? v.instance(e)
    : "object" == typeof e && e.offset && "number" == typeof e.offset
    ? e
    : new nt(e);
}
let st = () => Date.now(),
  it = "system",
  at = null,
  ot = null,
  ut = null,
  lt;
class k {
  static get now() {
    return st;
  }
  static set now(e) {
    st = e;
  }
  static set defaultZone(e) {
    it = e;
  }
  static get defaultZone() {
    return b(it, Ge.instance);
  }
  static get defaultLocale() {
    return at;
  }
  static set defaultLocale(e) {
    at = e;
  }
  static get defaultNumberingSystem() {
    return ot;
  }
  static set defaultNumberingSystem(e) {
    ot = e;
  }
  static get defaultOutputCalendar() {
    return ut;
  }
  static set defaultOutputCalendar(e) {
    ut = e;
  }
  static get throwOnInvalid() {
    return lt;
  }
  static set throwOnInvalid(e) {
    lt = e;
  }
  static resetCaches() {
    M.resetCache(), w.resetCache();
  }
}
let ct = {};
function ht(e, t = {}) {
  var r = JSON.stringify([e, t]);
  let n = ct[r];
  return n || ((n = new Intl.ListFormat(e, t)), (ct[r] = n)), n;
}
let dt = {};
function mt(e, t = {}) {
  var r = JSON.stringify([e, t]);
  let n = dt[r];
  return n || ((n = new Intl.DateTimeFormat(e, t)), (dt[r] = n)), n;
}
let ft = {};
function yt(e, t = {}) {
  var r = JSON.stringify([e, t]);
  let n = ft[r];
  return n || ((n = new Intl.NumberFormat(e, t)), (ft[r] = n)), n;
}
let gt = {};
function wt(e, t = {}) {
  const { base: r, ...n } = t;
  var s = JSON.stringify([e, n]);
  let i = gt[s];
  return i || ((i = new Intl.RelativeTimeFormat(e, t)), (gt[s] = i)), i;
}
let vt = null;
function pt() {
  return (vt = vt || new Intl.DateTimeFormat().resolvedOptions().locale);
}
function Tt(e) {
  var r = e.indexOf("-u-");
  if (-1 === r) return [e];
  {
    let t;
    r = e.substring(0, r);
    try {
      t = mt(e).resolvedOptions();
    } catch (e) {
      t = mt(r).resolvedOptions();
    }
    var { numberingSystem: e, calendar: n } = t;
    return [r, e, n];
  }
}
function St(e, t, r) {
  return (
    (r || t) && ((e += "-u"), r && (e += "-ca-" + r), t && (e += "-nu-" + t)), e
  );
}
function Ot(t) {
  const r = [];
  for (let e = 1; e <= 12; e++) {
    var n = L.utc(2016, e, 1);
    r.push(t(n));
  }
  return r;
}
function bt(t) {
  const r = [];
  for (let e = 1; e <= 7; e++) {
    var n = L.utc(2016, 11, 13 + e);
    r.push(t(n));
  }
  return r;
}
function kt(e, t, r, n, s) {
  e = e.listingMode(r);
  return "error" === e ? null : ("en" === e ? n : s)(t);
}
function Mt(e) {
  return (
    (!e.numberingSystem || "latn" === e.numberingSystem) &&
    ("latn" === e.numberingSystem ||
      !e.locale ||
      e.locale.startsWith("en") ||
      "latn" ===
        new Intl.DateTimeFormat(e.intl).resolvedOptions().numberingSystem)
  );
}
class Nt {
  constructor(e, t, r) {
    (this.padTo = r.padTo || 0), (this.floor = r.floor || !1);
    const { padTo: n, floor: s, ...i } = r;
    if (!t || 0 < Object.keys(i).length) {
      const a = { useGrouping: !1, ...r };
      0 < r.padTo && (a.minimumIntegerDigits = r.padTo), (this.inf = yt(e, a));
    }
  }
  format(e) {
    var t;
    return this.inf
      ? ((t = this.floor ? Math.floor(e) : e), this.inf.format(t))
      : l(this.floor ? Math.floor(e) : ye(e, 3), this.padTo);
  }
}
class Dt {
  constructor(e, t, r) {
    this.opts = r;
    let n;
    var s;
    e.zone.isUniversal
      ? ((s = 0 <= (s = (e.offset / 60) * -1) ? "Etc/GMT+" + s : "Etc/GMT" + s),
        0 !== e.offset && w.create(s).valid
          ? ((n = s), (this.dt = e))
          : ((n = "UTC"),
            r.timeZoneName
              ? (this.dt = e)
              : (this.dt =
                  0 === e.offset
                    ? e
                    : L.fromMillis(e.ts + 60 * e.offset * 1e3))))
      : "system" === e.zone.type
      ? (this.dt = e)
      : ((this.dt = e), (n = e.zone.name));
    const i = { ...this.opts };
    n && (i.timeZone = n), (this.dtf = mt(t, i));
  }
  format() {
    return this.dtf.format(this.dt.toJSDate());
  }
  formatToParts() {
    return this.dtf.formatToParts(this.dt.toJSDate());
  }
  resolvedOptions() {
    return this.dtf.resolvedOptions();
  }
}
class Et {
  constructor(e, t, r) {
    (this.opts = { style: "long", ...r }), !t && he() && (this.rtf = wt(e, r));
  }
  format(e, t) {
    return this.rtf
      ? this.rtf.format(e, t)
      : Re(t, e, this.opts.numeric, "long" !== this.opts.style);
  }
  formatToParts(e, t) {
    return this.rtf ? this.rtf.formatToParts(e, t) : [];
  }
}
class M {
  static fromOpts(e) {
    return M.create(
      e.locale,
      e.numberingSystem,
      e.outputCalendar,
      e.defaultToEN
    );
  }
  static create(e, t, r, n = !1) {
    (e = e || k.defaultLocale),
      (n = e || (n ? "en-US" : pt())),
      (t = t || k.defaultNumberingSystem),
      (r = r || k.defaultOutputCalendar);
    return new M(n, t, r, e);
  }
  static resetCache() {
    (vt = null), (dt = {}), (ft = {}), (gt = {});
  }
  static fromObject({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    return M.create(e, t, r);
  }
  constructor(e, t, r, n) {
    var [e, s, i] = Tt(e);
    (this.locale = e),
      (this.numberingSystem = t || s || null),
      (this.outputCalendar = r || i || null),
      (this.intl = St(this.locale, this.numberingSystem, this.outputCalendar)),
      (this.weekdaysCache = { format: {}, standalone: {} }),
      (this.monthsCache = { format: {}, standalone: {} }),
      (this.meridiemCache = null),
      (this.eraCache = {}),
      (this.specifiedLocale = n),
      (this.fastNumbersCached = null);
  }
  get fastNumbers() {
    return (
      null == this.fastNumbersCached && (this.fastNumbersCached = Mt(this)),
      this.fastNumbersCached
    );
  }
  listingMode() {
    var e = this.isEnglish(),
      t = !(
        (null !== this.numberingSystem && "latn" !== this.numberingSystem) ||
        (null !== this.outputCalendar && "gregory" !== this.outputCalendar)
      );
    return e && t ? "en" : "intl";
  }
  clone(e) {
    return e && 0 !== Object.getOwnPropertyNames(e).length
      ? M.create(
          e.locale || this.specifiedLocale,
          e.numberingSystem || this.numberingSystem,
          e.outputCalendar || this.outputCalendar,
          e.defaultToEN || !1
        )
      : this;
  }
  redefaultToEN(e = {}) {
    return this.clone({ ...e, defaultToEN: !0 });
  }
  redefaultToSystem(e = {}) {
    return this.clone({ ...e, defaultToEN: !1 });
  }
  months(r, n = !1, e = !0) {
    return kt(this, r, e, xe, () => {
      const t = n ? { month: r, day: "numeric" } : { month: r },
        e = n ? "format" : "standalone";
      return (
        this.monthsCache[e][r] ||
          (this.monthsCache[e][r] = Ot((e) => this.extract(e, t, "month"))),
        this.monthsCache[e][r]
      );
    });
  }
  weekdays(r, n = !1, e = !0) {
    return kt(this, r, e, Le, () => {
      const t = n
          ? { weekday: r, year: "numeric", month: "long", day: "numeric" }
          : { weekday: r },
        e = n ? "format" : "standalone";
      return (
        this.weekdaysCache[e][r] ||
          (this.weekdaysCache[e][r] = bt((e) => this.extract(e, t, "weekday"))),
        this.weekdaysCache[e][r]
      );
    });
  }
  meridiems(e = !0) {
    return kt(
      this,
      void 0,
      e,
      () => ze,
      () => {
        if (!this.meridiemCache) {
          const t = { hour: "numeric", hourCycle: "h12" };
          this.meridiemCache = [
            L.utc(2016, 11, 13, 9),
            L.utc(2016, 11, 13, 19),
          ].map((e) => this.extract(e, t, "dayperiod"));
        }
        return this.meridiemCache;
      }
    );
  }
  eras(e, t = !0) {
    return kt(this, e, t, _e, () => {
      const t = { era: e };
      return (
        this.eraCache[e] ||
          (this.eraCache[e] = [L.utc(-40, 1, 1), L.utc(2017, 1, 1)].map((e) =>
            this.extract(e, t, "era")
          )),
        this.eraCache[e]
      );
    });
  }
  extract(e, t, r) {
    const n = this.dtFormatter(e, t),
      s = n.formatToParts(),
      i = s.find((e) => e.type.toLowerCase() === r);
    return i ? i.value : null;
  }
  numberFormatter(e = {}) {
    return new Nt(this.intl, e.forceSimple || this.fastNumbers, e);
  }
  dtFormatter(e, t = {}) {
    return new Dt(e, this.intl, t);
  }
  relFormatter(e = {}) {
    return new Et(this.intl, this.isEnglish(), e);
  }
  listFormatter(e = {}) {
    return ht(this.intl, e);
  }
  isEnglish() {
    return (
      "en" === this.locale ||
      "en-us" === this.locale.toLowerCase() ||
      new Intl.DateTimeFormat(this.intl)
        .resolvedOptions()
        .locale.startsWith("en-us")
    );
  }
  equals(e) {
    return (
      this.locale === e.locale &&
      this.numberingSystem === e.numberingSystem &&
      this.outputCalendar === e.outputCalendar
    );
  }
}
function a(...e) {
  e = e.reduce((e, t) => e + t.source, "");
  return RegExp(`^${e}$`);
}
function g(...e) {
  return (i) =>
    e
      .reduce(
        ([e, t, r], n) => {
          var [n, r, s] = n(i, r);
          return [{ ...e, ...n }, r || t, s];
        },
        [{}, null, 1]
      )
      .slice(0, 2);
}
function p(e, ...t) {
  if (null != e)
    for (var [r, n] of t) {
      r = r.exec(e);
      if (r) return n(r);
    }
  return [null, null];
}
function Vt(...s) {
  return (e, t) => {
    const r = {};
    let n;
    for (n = 0; n < s.length; n++) r[s[n]] = d(e[t + n]);
    return [r, null, t + n];
  };
}
var t = /(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,
  s = /(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,
  It = RegExp(s.source + `(?:${t.source}?(?:\\[(${n.source})\\])?)?`),
  xt = RegExp(`(?:T${It.source})?`),
  Ct = Vt("weekYear", "weekNumber", "weekDay"),
  Ft = Vt("year", "ordinal"),
  t = RegExp(s.source + ` ?(?:${t.source}|(${n.source}))?`),
  n = RegExp(`(?: ${t.source})?`);
function T(e, t, r) {
  e = e[t];
  return O(e) ? r : d(e);
}
function S(e, t) {
  return [
    {
      hours: T(e, t, 0),
      minutes: T(e, t + 1, 0),
      seconds: T(e, t + 2, 0),
      milliseconds: fe(e[t + 3]),
    },
    null,
    t + 4,
  ];
}
function Zt(e, t) {
  var r = !e[t] && !e[t + 1],
    e = be(e[t + 1], e[t + 2]);
  return [{}, r ? null : v.instance(e), t + 3];
}
function Lt(e, t) {
  return [{}, e[t] ? w.create(e[t]) : null, t + 1];
}
const zt = RegExp(`^T?${s.source}$`),
  qt =
    /^-?P(?:(?:(-?\d{1,20}(?:\.\d{1,20})?)Y)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20}(?:\.\d{1,20})?)W)?(?:(-?\d{1,20}(?:\.\d{1,20})?)D)?(?:T(?:(-?\d{1,20}(?:\.\d{1,20})?)H)?(?:(-?\d{1,20}(?:\.\d{1,20})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,20}))?S)?)?)$/;
function At(e) {
  var [e, t, r, n, s, i, a, o, u] = e;
  const l = "-" === e[0];
  var e = o && "-" === o[0],
    c = (e, t = !1) => (void 0 !== e && (t || (e && l)) ? -e : e);
  return [
    {
      years: c(m(t)),
      months: c(m(r)),
      weeks: c(m(n)),
      days: c(m(s)),
      hours: c(m(i)),
      minutes: c(m(a)),
      seconds: c(m(o), "-0" === o),
      milliseconds: c(fe(u), e),
    },
  ];
}
const jt = {
  GMT: 0,
  EDT: -240,
  EST: -300,
  CDT: -300,
  CST: -360,
  MDT: -360,
  MST: -420,
  PDT: -420,
  PST: -480,
};
function _t(e, t, r, n, s, i, a) {
  const o = {
    year: 2 === t.length ? Se(d(t)) : d(t),
    month: Ve.indexOf(r) + 1,
    day: d(n),
    hour: d(s),
    minute: d(i),
  };
  return (
    a && (o.second = d(a)),
    e && (o.weekday = 3 < e.length ? Ce.indexOf(e) + 1 : Fe.indexOf(e) + 1),
    o
  );
}
const Ut =
  /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;
function $t(e) {
  var [, e, t, r, n, s, i, a, o, u, l, c] = e,
    e = _t(e, n, r, t, s, i, a);
  let h;
  return (h = o ? jt[o] : u ? 0 : be(l, c)), [e, new v(h)];
}
const Ht =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,
  Wt =
    /^(Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,
  Rt =
    /^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;
function Jt(e) {
  var [, e, t, r, n, s, i, a] = e;
  return [_t(e, n, r, t, s, i, a), v.utcInstance];
}
function Yt(e) {
  var [, e, t, r, n, s, i, a] = e;
  return [_t(e, a, t, r, n, s, i), v.utcInstance];
}
const Pt = a(/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/, xt),
  Gt = a(/(\d{4})-?W(\d\d)(?:-?(\d))?/, xt),
  Bt = a(/(\d{4})-?(\d{3})/, xt),
  Qt = a(It),
  Kt = g(
    function (e, t) {
      return [
        { year: T(e, t), month: T(e, t + 1, 1), day: T(e, t + 2, 1) },
        null,
        t + 3,
      ];
    },
    S,
    Zt,
    Lt
  ),
  Xt = g(Ct, S, Zt, Lt),
  er = g(Ft, S, Zt, Lt),
  tr = g(S, Zt, Lt);
function rr(e) {
  return p(e, [Pt, Kt], [Gt, Xt], [Bt, er], [Qt, tr]);
}
function nr(e) {
  return p(
    e
      .replace(/\([^()]*\)|[\n\t]/g, " ")
      .replace(/(\s\s+)/g, " ")
      .trim(),
    [Ut, $t]
  );
}
function sr(e) {
  return p(e, [Ht, Jt], [Wt, Jt], [Rt, Yt]);
}
function ir(e) {
  return p(e, [qt, At]);
}
const ar = g(S);
function or(e) {
  return p(e, [zt, ar]);
}
const ur = a(/(\d{4})-(\d\d)-(\d\d)/, n),
  lr = a(t),
  cr = g(S, Zt, Lt);
function hr(e) {
  return p(e, [ur, Kt], [lr, cr]);
}
const dr = {
    weeks: {
      days: 7,
      hours: 168,
      minutes: 10080,
      seconds: 604800,
      milliseconds: 6048e5,
    },
    days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 864e5 },
    hours: { minutes: 60, seconds: 3600, milliseconds: 36e5 },
    minutes: { seconds: 60, milliseconds: 6e4 },
    seconds: { milliseconds: 1e3 },
  },
  mr = {
    years: {
      quarters: 4,
      months: 12,
      weeks: 52,
      days: 365,
      hours: 8760,
      minutes: 525600,
      seconds: 31536e3,
      milliseconds: 31536e6,
    },
    quarters: {
      months: 3,
      weeks: 13,
      days: 91,
      hours: 2184,
      minutes: 131040,
      seconds: 7862400,
      milliseconds: 78624e5,
    },
    months: {
      weeks: 4,
      days: 30,
      hours: 720,
      minutes: 43200,
      seconds: 2592e3,
      milliseconds: 2592e6,
    },
    ...dr,
  },
  N = 365.2425,
  fr = 30.436875,
  yr = {
    years: {
      quarters: 4,
      months: 12,
      weeks: N / 7,
      days: N,
      hours: 24 * N,
      minutes: 525949.2,
      seconds: 525949.2 * 60,
      milliseconds: 525949.2 * 60 * 1e3,
    },
    quarters: {
      months: 3,
      weeks: N / 28,
      days: N / 4,
      hours: (24 * N) / 4,
      minutes: 131487.3,
      seconds: (525949.2 * 60) / 4,
      milliseconds: 7889237999.999999,
    },
    months: {
      weeks: fr / 7,
      days: fr,
      hours: 24 * fr,
      minutes: 43829.1,
      seconds: 2629746,
      milliseconds: 2629746e3,
    },
    ...dr,
  },
  D = [
    "years",
    "quarters",
    "months",
    "weeks",
    "days",
    "hours",
    "minutes",
    "seconds",
    "milliseconds",
  ],
  gr = D.slice(0).reverse();
function E(e, t, r = !1) {
  r = {
    values: r ? t.values : { ...e.values, ...(t.values || {}) },
    loc: e.loc.clone(t.loc),
    conversionAccuracy: t.conversionAccuracy || e.conversionAccuracy,
  };
  return new V(r);
}
function wr(e, t, r, n, s) {
  var e = e[s][r],
    i = t[r] / e,
    a =
      !(Math.sign(i) === Math.sign(n[s])) && 0 !== n[s] && Math.abs(i) <= 1
        ? (a = i) < 0
          ? Math.floor(a)
          : Math.ceil(a)
        : Math.trunc(i);
  (n[s] += a), (t[r] -= a * e);
}
function vr(r, n) {
  gr.reduce((e, t) => (O(n[t]) ? e : (e && wr(r, n, e, n, t), t)), null);
}
class V {
  constructor(e) {
    var t = "longterm" === e.conversionAccuracy || !1;
    (this.values = e.values),
      (this.loc = e.loc || M.create()),
      (this.conversionAccuracy = t ? "longterm" : "casual"),
      (this.invalid = e.invalid || null),
      (this.matrix = t ? yr : mr),
      (this.isLuxonDuration = !0);
  }
  static fromMillis(e, t) {
    return V.fromObject({ milliseconds: e }, t);
  }
  static fromObject(e, t = {}) {
    if (null == e || "object" != typeof e)
      throw new o(
        "Duration.fromObject: argument expected to be an object, got " +
          (null === e ? "null" : typeof e)
      );
    return new V({
      values: Me(e, V.normalizeUnit),
      loc: M.fromObject(t),
      conversionAccuracy: t.conversionAccuracy,
    });
  }
  static fromDurationLike(e) {
    if (c(e)) return V.fromMillis(e);
    if (V.isDuration(e)) return e;
    if ("object" == typeof e) return V.fromObject(e);
    throw new o(`Unknown duration argument ${e} of type ` + typeof e);
  }
  static fromISO(e, t) {
    var [r] = ir(e);
    return r
      ? V.fromObject(r, t)
      : V.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static fromISOTime(e, t) {
    var [r] = or(e);
    return r
      ? V.fromObject(r, t)
      : V.invalid("unparsable", `the input "${e}" can't be parsed as ISO 8601`);
  }
  static invalid(e, t = null) {
    if (!e) throw new o("need to specify a reason the Duration is invalid");
    e = e instanceof y ? e : new y(e, t);
    if (k.throwOnInvalid) throw new A(e);
    return new V({ invalid: e });
  }
  static normalizeUnit(e) {
    var t = {
      year: "years",
      years: "years",
      quarter: "quarters",
      quarters: "quarters",
      month: "months",
      months: "months",
      week: "weeks",
      weeks: "weeks",
      day: "days",
      days: "days",
      hour: "hours",
      hours: "hours",
      minute: "minutes",
      minutes: "minutes",
      second: "seconds",
      seconds: "seconds",
      millisecond: "milliseconds",
      milliseconds: "milliseconds",
    }[e && e.toLowerCase()];
    if (t) return t;
    throw new _(e);
  }
  static isDuration(e) {
    return (e && e.isLuxonDuration) || !1;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  toFormat(e, t = {}) {
    t = { ...t, floor: !1 !== t.round && !1 !== t.floor };
    return this.isValid
      ? f.create(this.loc, t).formatDurationFromString(this, e)
      : "Invalid Duration";
  }
  toHuman(r = {}) {
    var e = D.map((e) => {
      var t = this.values[e];
      return O(t)
        ? null
        : this.loc
            .numberFormatter({
              style: "unit",
              unitDisplay: "long",
              ...r,
              unit: e.slice(0, -1),
            })
            .format(t);
    }).filter((e) => e);
    return this.loc
      .listFormatter({
        type: "conjunction",
        style: r.listStyle || "narrow",
        ...r,
      })
      .format(e);
  }
  toObject() {
    return this.isValid ? { ...this.values } : {};
  }
  toISO() {
    if (!this.isValid) return null;
    let e = "P";
    return (
      0 !== this.years && (e += this.years + "Y"),
      (0 === this.months && 0 === this.quarters) ||
        (e += this.months + 3 * this.quarters + "M"),
      0 !== this.weeks && (e += this.weeks + "W"),
      0 !== this.days && (e += this.days + "D"),
      (0 === this.hours &&
        0 === this.minutes &&
        0 === this.seconds &&
        0 === this.milliseconds) ||
        (e += "T"),
      0 !== this.hours && (e += this.hours + "H"),
      0 !== this.minutes && (e += this.minutes + "M"),
      (0 === this.seconds && 0 === this.milliseconds) ||
        (e += ye(this.seconds + this.milliseconds / 1e3, 3) + "S"),
      "P" === e && (e += "T0S"),
      e
    );
  }
  toISOTime(e = {}) {
    if (!this.isValid) return null;
    var t = this.toMillis();
    if (t < 0 || 864e5 <= t) return null;
    e = {
      suppressMilliseconds: !1,
      suppressSeconds: !1,
      includePrefix: !1,
      format: "extended",
      ...e,
    };
    const r = this.shiftTo("hours", "minutes", "seconds", "milliseconds");
    let n = "basic" === e.format ? "hhmm" : "hh:mm",
      s =
        ((e.suppressSeconds && 0 === r.seconds && 0 === r.milliseconds) ||
          ((n += "basic" === e.format ? "ss" : ":ss"),
          (e.suppressMilliseconds && 0 === r.milliseconds) || (n += ".SSS")),
        r.toFormat(n));
    return (s = e.includePrefix ? "T" + s : s);
  }
  toJSON() {
    return this.toISO();
  }
  toString() {
    return this.toISO();
  }
  toMillis() {
    return this.as("milliseconds");
  }
  valueOf() {
    return this.toMillis();
  }
  plus(e) {
    if (!this.isValid) return this;
    const t = V.fromDurationLike(e),
      r = {};
    for (const n of D)
      (h(t.values, n) || h(this.values, n)) && (r[n] = t.get(n) + this.get(n));
    return E(this, { values: r }, !0);
  }
  minus(e) {
    if (!this.isValid) return this;
    const t = V.fromDurationLike(e);
    return this.plus(t.negate());
  }
  mapUnits(e) {
    if (!this.isValid) return this;
    const t = {};
    for (const r of Object.keys(this.values)) t[r] = ke(e(this.values[r], r));
    return E(this, { values: t }, !0);
  }
  get(e) {
    return this[V.normalizeUnit(e)];
  }
  set(e) {
    return this.isValid
      ? E(this, { values: { ...this.values, ...Me(e, V.normalizeUnit) } })
      : this;
  }
  reconfigure({ locale: e, numberingSystem: t, conversionAccuracy: r } = {}) {
    const n = this.loc.clone({ locale: e, numberingSystem: t }),
      s = { loc: n };
    return r && (s.conversionAccuracy = r), E(this, s);
  }
  as(e) {
    return this.isValid ? this.shiftTo(e).get(e) : NaN;
  }
  normalize() {
    if (!this.isValid) return this;
    var e = this.toObject();
    return vr(this.matrix, e), E(this, { values: e }, !0);
  }
  shiftTo(...e) {
    if (!this.isValid) return this;
    if (0 === e.length) return this;
    e = e.map((e) => V.normalizeUnit(e));
    const t = {},
      r = {},
      n = this.toObject();
    let s;
    for (const a of D)
      if (0 <= e.indexOf(a)) {
        s = a;
        let e = 0;
        for (const o in r) (e += this.matrix[o][a] * r[o]), (r[o] = 0);
        c(n[a]) && (e += n[a]);
        var i = Math.trunc(e);
        (t[a] = i), (r[a] = (1e3 * e - 1e3 * i) / 1e3);
        for (const u in n)
          D.indexOf(u) > D.indexOf(a) && wr(this.matrix, n, u, t, a);
      } else c(n[a]) && (r[a] = n[a]);
    for (const l in r)
      0 !== r[l] && (t[s] += l === s ? r[l] : r[l] / this.matrix[s][l]);
    return E(this, { values: t }, !0).normalize();
  }
  negate() {
    if (!this.isValid) return this;
    const e = {};
    for (const t of Object.keys(this.values))
      e[t] = 0 === this.values[t] ? 0 : -this.values[t];
    return E(this, { values: e }, !0);
  }
  get years() {
    return this.isValid ? this.values.years || 0 : NaN;
  }
  get quarters() {
    return this.isValid ? this.values.quarters || 0 : NaN;
  }
  get months() {
    return this.isValid ? this.values.months || 0 : NaN;
  }
  get weeks() {
    return this.isValid ? this.values.weeks || 0 : NaN;
  }
  get days() {
    return this.isValid ? this.values.days || 0 : NaN;
  }
  get hours() {
    return this.isValid ? this.values.hours || 0 : NaN;
  }
  get minutes() {
    return this.isValid ? this.values.minutes || 0 : NaN;
  }
  get seconds() {
    return this.isValid ? this.values.seconds || 0 : NaN;
  }
  get milliseconds() {
    return this.isValid ? this.values.milliseconds || 0 : NaN;
  }
  get isValid() {
    return null === this.invalid;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  equals(e) {
    if (!this.isValid || !e.isValid) return !1;
    if (!this.loc.equals(e.loc)) return !1;
    for (const n of D)
      if (
        ((t = this.values[n]),
        (r = e.values[n]),
        !(void 0 === t || 0 === t ? void 0 === r || 0 === r : t === r))
      )
        return !1;
    var t, r;
    return !0;
  }
}
const pr = "Invalid Interval";
function Tr(e, t) {
  return e && e.isValid
    ? t && t.isValid
      ? t < e
        ? I.invalid(
            "end before start",
            `The end of an interval must be after its start, but you had start=${e.toISO()} and end=` +
              t.toISO()
          )
        : null
      : I.invalid("missing or invalid end")
    : I.invalid("missing or invalid start");
}
class I {
  constructor(e) {
    (this.s = e.start),
      (this.e = e.end),
      (this.invalid = e.invalid || null),
      (this.isLuxonInterval = !0);
  }
  static invalid(e, t = null) {
    if (!e) throw new o("need to specify a reason the Interval is invalid");
    e = e instanceof y ? e : new y(e, t);
    if (k.throwOnInvalid) throw new q(e);
    return new I({ invalid: e });
  }
  static fromDateTimes(e, t) {
    var e = Sn(e),
      t = Sn(t),
      r = Tr(e, t);
    return null == r ? new I({ start: e, end: t }) : r;
  }
  static after(e, t) {
    const r = V.fromDurationLike(t),
      n = Sn(e);
    return I.fromDateTimes(n, n.plus(r));
  }
  static before(e, t) {
    const r = V.fromDurationLike(t),
      n = Sn(e);
    return I.fromDateTimes(n.minus(r), n);
  }
  static fromISO(e, s) {
    var [i, a] = (e || "").split("/", 2);
    if (i && a) {
      let e, t;
      try {
        (e = L.fromISO(i, s)), (t = e.isValid);
      } catch (a) {
        t = !1;
      }
      let r, n;
      try {
        (r = L.fromISO(a, s)), (n = r.isValid);
      } catch (a) {
        n = !1;
      }
      if (t && n) return I.fromDateTimes(e, r);
      if (t) {
        var o = V.fromISO(a, s);
        if (o.isValid) return I.after(e, o);
      } else if (n) {
        o = V.fromISO(i, s);
        if (o.isValid) return I.before(r, o);
      }
    }
    return I.invalid(
      "unparsable",
      `the input "${e}" can't be parsed as ISO 8601`
    );
  }
  static isInterval(e) {
    return (e && e.isLuxonInterval) || !1;
  }
  get start() {
    return this.isValid ? this.s : null;
  }
  get end() {
    return this.isValid ? this.e : null;
  }
  get isValid() {
    return null === this.invalidReason;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  length(e = "milliseconds") {
    return this.isValid ? this.toDuration(e).get(e) : NaN;
  }
  count(e = "milliseconds") {
    if (!this.isValid) return NaN;
    const t = this.start.startOf(e),
      r = this.end.startOf(e);
    return Math.floor(r.diff(t, e).get(e)) + 1;
  }
  hasSame(e) {
    return (
      !!this.isValid && (this.isEmpty() || this.e.minus(1).hasSame(this.s, e))
    );
  }
  isEmpty() {
    return this.s.valueOf() === this.e.valueOf();
  }
  isAfter(e) {
    return !!this.isValid && this.s > e;
  }
  isBefore(e) {
    return !!this.isValid && this.e <= e;
  }
  contains(e) {
    return !!this.isValid && this.s <= e && this.e > e;
  }
  set({ start: e, end: t } = {}) {
    return this.isValid ? I.fromDateTimes(e || this.s, t || this.e) : this;
  }
  splitAt(...e) {
    if (!this.isValid) return [];
    const t = e
        .map(Sn)
        .filter((e) => this.contains(e))
        .sort(),
      r = [];
    let n = this["s"],
      s = 0;
    for (; n < this.e; ) {
      var i = t[s] || this.e,
        i = +i > +this.e ? this.e : i;
      r.push(I.fromDateTimes(n, i)), (n = i), (s += 1);
    }
    return r;
  }
  splitBy(e) {
    const t = V.fromDurationLike(e);
    if (!this.isValid || !t.isValid || 0 === t.as("milliseconds")) return [];
    let r = this["s"],
      n = 1,
      s;
    const i = [];
    for (; r < this.e; ) {
      var a = this.start.plus(t.mapUnits((e) => e * n));
      (s = +a > +this.e ? this.e : a),
        i.push(I.fromDateTimes(r, s)),
        (r = s),
        (n += 1);
    }
    return i;
  }
  divideEqually(e) {
    return this.isValid ? this.splitBy(this.length() / e).slice(0, e) : [];
  }
  overlaps(e) {
    return this.e > e.s && this.s < e.e;
  }
  abutsStart(e) {
    return !!this.isValid && +this.e == +e.s;
  }
  abutsEnd(e) {
    return !!this.isValid && +e.e == +this.s;
  }
  engulfs(e) {
    return !!this.isValid && this.s <= e.s && this.e >= e.e;
  }
  equals(e) {
    return (
      !(!this.isValid || !e.isValid) && this.s.equals(e.s) && this.e.equals(e.e)
    );
  }
  intersection(e) {
    if (!this.isValid) return this;
    var t = (this.s > e.s ? this : e).s,
      e = (this.e < e.e ? this : e).e;
    return e <= t ? null : I.fromDateTimes(t, e);
  }
  union(e) {
    if (!this.isValid) return this;
    var t = (this.s < e.s ? this : e).s,
      e = (this.e > e.e ? this : e).e;
    return I.fromDateTimes(t, e);
  }
  static merge(e) {
    const [t, r] = e
      .sort((e, t) => e.s - t.s)
      .reduce(
        ([e, t], r) =>
          t
            ? t.overlaps(r) || t.abutsStart(r)
              ? [e, t.union(r)]
              : [e.concat([t]), r]
            : [e, r],
        [[], null]
      );
    return r && t.push(r), t;
  }
  static xor(e) {
    let t = null,
      r = 0;
    const n = [],
      s = e.map((e) => [
        { time: e.s, type: "s" },
        { time: e.e, type: "e" },
      ]),
      i = Array.prototype.concat(...s),
      a = i.sort((e, t) => e.time - t.time);
    for (const o of a)
      (r += "s" === o.type ? 1 : -1),
        (t =
          1 === r
            ? o.time
            : (t && +t != +o.time && n.push(I.fromDateTimes(t, o.time)), null));
    return I.merge(n);
  }
  difference(...e) {
    return I.xor([this].concat(e))
      .map((e) => this.intersection(e))
      .filter((e) => e && !e.isEmpty());
  }
  toString() {
    return this.isValid ? `[${this.s.toISO()} – ${this.e.toISO()})` : pr;
  }
  toISO(e) {
    return this.isValid ? this.s.toISO(e) + "/" + this.e.toISO(e) : pr;
  }
  toISODate() {
    return this.isValid ? this.s.toISODate() + "/" + this.e.toISODate() : pr;
  }
  toISOTime(e) {
    return this.isValid ? this.s.toISOTime(e) + "/" + this.e.toISOTime(e) : pr;
  }
  toFormat(e, { separator: t = " – " } = {}) {
    return this.isValid ? "" + this.s.toFormat(e) + t + this.e.toFormat(e) : pr;
  }
  toDuration(e, t) {
    return this.isValid
      ? this.e.diff(this.s, e, t)
      : V.invalid(this.invalidReason);
  }
  mapEndpoints(e) {
    return I.fromDateTimes(e(this.s), e(this.e));
  }
}
class Sr {
  static hasDST(e = k.defaultZone) {
    const t = L.now().setZone(e).set({ month: 12 });
    return !e.isUniversal && t.offset !== t.set({ month: 6 }).offset;
  }
  static isValidIANAZone(e) {
    return w.isValidZone(e);
  }
  static normalizeZone(e) {
    return b(e, k.defaultZone);
  }
  static months(
    e = "long",
    {
      locale: t = null,
      numberingSystem: r = null,
      locObj: n = null,
      outputCalendar: s = "gregory",
    } = {}
  ) {
    return (n || M.create(t, r, s)).months(e);
  }
  static monthsFormat(
    e = "long",
    {
      locale: t = null,
      numberingSystem: r = null,
      locObj: n = null,
      outputCalendar: s = "gregory",
    } = {}
  ) {
    return (n || M.create(t, r, s)).months(e, !0);
  }
  static weekdays(
    e = "long",
    { locale: t = null, numberingSystem: r = null, locObj: n = null } = {}
  ) {
    return (n || M.create(t, r, null)).weekdays(e);
  }
  static weekdaysFormat(
    e = "long",
    { locale: t = null, numberingSystem: r = null, locObj: n = null } = {}
  ) {
    return (n || M.create(t, r, null)).weekdays(e, !0);
  }
  static meridiems({ locale: e = null } = {}) {
    return M.create(e).meridiems();
  }
  static eras(e = "short", { locale: t = null } = {}) {
    return M.create(t, null, "gregory").eras(e);
  }
  static features() {
    return { relative: he() };
  }
}
function Or(e, t) {
  var r = (e) => e.toUTC(0, { keepLocalTime: !0 }).startOf("day").valueOf(),
    t = r(t) - r(e);
  return Math.floor(V.fromMillis(t).as("days"));
}
function br(e, t, r, n) {
  let [s, i, a, o] = (function (t, r, e) {
    var n, s;
    const i = {};
    let a, o;
    for ([n, s] of [
      ["years", (e, t) => t.year - e.year],
      ["quarters", (e, t) => t.quarter - e.quarter],
      ["months", (e, t) => t.month - e.month + 12 * (t.year - e.year)],
      [
        "weeks",
        (e, t) => {
          e = Or(e, t);
          return (e - (e % 7)) / 7;
        },
      ],
      ["days", Or],
    ])
      if (0 <= e.indexOf(n)) {
        a = n;
        let e = s(t, r);
        (o = t.plus({ [n]: e })) > r
          ? ((t = t.plus({ [n]: e - 1 })), --e)
          : (t = o),
          (i[n] = e);
      }
    return [t, i, o, a];
  })(e, t, r);
  (e = t - s),
    (r = r.filter(
      (e) => 0 <= ["hours", "minutes", "seconds", "milliseconds"].indexOf(e)
    )),
    0 === r.length &&
      (a = a < t ? s.plus({ [o]: 1 }) : a) !== s &&
      (i[o] = (i[o] || 0) + e / (a - s)),
    (t = V.fromObject(i, n));
  return 0 < r.length
    ? V.fromMillis(e, n)
        .shiftTo(...r)
        .plus(t)
    : t;
}
const kr = {
    arab: "[٠-٩]",
    arabext: "[۰-۹]",
    bali: "[᭐-᭙]",
    beng: "[০-৯]",
    deva: "[०-९]",
    fullwide: "[０-９]",
    gujr: "[૦-૯]",
    hanidec: "[〇|一|二|三|四|五|六|七|八|九]",
    khmr: "[០-៩]",
    knda: "[೦-೯]",
    laoo: "[໐-໙]",
    limb: "[᥆-᥏]",
    mlym: "[൦-൯]",
    mong: "[᠐-᠙]",
    mymr: "[၀-၉]",
    orya: "[୦-୯]",
    tamldec: "[௦-௯]",
    telu: "[౦-౯]",
    thai: "[๐-๙]",
    tibt: "[༠-༩]",
    latn: "\\d",
  },
  Mr = {
    arab: [1632, 1641],
    arabext: [1776, 1785],
    bali: [6992, 7001],
    beng: [2534, 2543],
    deva: [2406, 2415],
    fullwide: [65296, 65303],
    gujr: [2790, 2799],
    khmr: [6112, 6121],
    knda: [3302, 3311],
    laoo: [3792, 3801],
    limb: [6470, 6479],
    mlym: [3430, 3439],
    mong: [6160, 6169],
    mymr: [4160, 4169],
    orya: [2918, 2927],
    tamldec: [3046, 3055],
    telu: [3174, 3183],
    thai: [3664, 3673],
    tibt: [3872, 3881],
  },
  Nr = kr.hanidec.replace(/[\[|\]]/g, "").split("");
function x({ numberingSystem: e }, t = "") {
  return new RegExp("" + kr[e || "latn"] + t);
}
const Dr = "missing Intl.DateTimeFormat.formatToParts support";
function C(e, t = (e) => e) {
  return {
    regex: e,
    deser: ([e]) =>
      t(
        (function (t) {
          let r = parseInt(t, 10);
          if (isNaN(r)) {
            r = "";
            for (let e = 0; e < t.length; e++) {
              var n = t.charCodeAt(e);
              if (-1 !== t[e].search(kr.hanidec)) r += Nr.indexOf(t[e]);
              else
                for (const a in Mr) {
                  var [s, i] = Mr[a];
                  s <= n && n <= i && (r += n - s);
                }
            }
            return parseInt(r, 10);
          }
          return r;
        })(e)
      ),
  };
}
const Er = `[ ${String.fromCharCode(160)}]`,
  Vr = new RegExp(Er, "g");
function Ir(e) {
  return e.replace(/\./g, "\\.?").replace(Vr, Er);
}
function xr(e) {
  return e.replace(/\./g, "").replace(Vr, " ").toLowerCase();
}
function F(e, r) {
  return null === e
    ? null
    : {
        regex: RegExp(e.map(Ir).join("|")),
        deser: ([t]) => e.findIndex((e) => xr(t) === xr(e)) + r,
      };
}
function Cr(e, t) {
  return { regex: e, deser: ([, e, t]) => be(e, t), groups: t };
}
function Fr(e) {
  return { regex: e, deser: ([e]) => e };
}
const Zr = {
  year: { "2-digit": "yy", numeric: "yyyyy" },
  month: { numeric: "M", "2-digit": "MM", short: "MMM", long: "MMMM" },
  day: { numeric: "d", "2-digit": "dd" },
  weekday: { short: "EEE", long: "EEEE" },
  dayperiod: "a",
  dayPeriod: "a",
  hour: { numeric: "h", "2-digit": "hh" },
  minute: { numeric: "m", "2-digit": "mm" },
  second: { numeric: "s", "2-digit": "ss" },
};
let Lr = null;
function zr(e, t) {
  if (e.literal) return e;
  const s = f.macroTokenToFormatOpts(e.val);
  if (!s) return e;
  const r = f.create(t, s),
    n = r.formatDateTimeParts((Lr = Lr || L.fromMillis(1555555555555))),
    i = n.map((t) => {
      {
        var r = s,
          { type: t, value: n } = t;
        if ("literal" === t) return { literal: !0, val: n };
        n = r[t];
        let e = Zr[t];
        return (e = "object" == typeof e ? e[n] : e)
          ? { literal: !1, val: e }
          : void 0;
      }
    });
  return i.includes(void 0) ? e : i;
}
function qr(g, e, t) {
  (t = f.parseFormat(t)), (i = g);
  const r = Array.prototype.concat(...t.map((e) => zr(e, i))),
    n = r.map((e) => {
      {
        var t = e,
          r = g;
        const n = x(r),
          s = x(r, "{2}"),
          i = x(r, "{3}"),
          a = x(r, "{4}"),
          o = x(r, "{6}"),
          u = x(r, "{1,2}"),
          l = x(r, "{1,3}"),
          c = x(r, "{1,6}"),
          h = x(r, "{1,9}"),
          d = x(r, "{2,4}"),
          m = x(r, "{4,6}"),
          f = (e) => ({
            regex: RegExp(e.val.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")),
            deser: ([e]) => e,
            literal: !0,
          }),
          y = ((e) => {
            if (t.literal) return f(e);
            switch (e.val) {
              case "G":
                return F(r.eras("short", !1), 0);
              case "GG":
                return F(r.eras("long", !1), 0);
              case "y":
                return C(c);
              case "yy":
                return C(d, Se);
              case "yyyy":
                return C(a);
              case "yyyyy":
                return C(m);
              case "yyyyyy":
                return C(o);
              case "M":
                return C(u);
              case "MM":
                return C(s);
              case "MMM":
                return F(r.months("short", !0, !1), 1);
              case "MMMM":
                return F(r.months("long", !0, !1), 1);
              case "L":
                return C(u);
              case "LL":
                return C(s);
              case "LLL":
                return F(r.months("short", !1, !1), 1);
              case "LLLL":
                return F(r.months("long", !1, !1), 1);
              case "d":
                return C(u);
              case "dd":
                return C(s);
              case "o":
                return C(l);
              case "ooo":
                return C(i);
              case "HH":
                return C(s);
              case "H":
                return C(u);
              case "hh":
                return C(s);
              case "h":
                return C(u);
              case "mm":
                return C(s);
              case "m":
              case "q":
                return C(u);
              case "qq":
                return C(s);
              case "s":
                return C(u);
              case "ss":
                return C(s);
              case "S":
                return C(l);
              case "SSS":
                return C(i);
              case "u":
                return Fr(h);
              case "uu":
                return Fr(u);
              case "uuu":
                return C(n);
              case "a":
                return F(r.meridiems(), 0);
              case "kkkk":
                return C(a);
              case "kk":
                return C(d, Se);
              case "W":
                return C(u);
              case "WW":
                return C(s);
              case "E":
              case "c":
                return C(n);
              case "EEE":
                return F(r.weekdays("short", !1, !1), 1);
              case "EEEE":
                return F(r.weekdays("long", !1, !1), 1);
              case "ccc":
                return F(r.weekdays("short", !0, !1), 1);
              case "cccc":
                return F(r.weekdays("long", !0, !1), 1);
              case "Z":
              case "ZZ":
                return Cr(
                  new RegExp(`([+-]${u.source})(?::(${s.source}))?`),
                  2
                );
              case "ZZZ":
                return Cr(new RegExp(`([+-]${u.source})(${s.source})?`), 2);
              case "z":
                return Fr(/[a-z_+-/]{1,256}?/i);
              default:
                return f(e);
            }
          })(t) || { invalidReason: Dr };
        return (y.token = t), y;
      }
    }),
    s = n.find((e) => e.invalidReason);
  var i;
  if (s) return { input: e, tokens: r, invalidReason: s.invalidReason };
  var [t, a] = [
      `^${(t = n)
        .map((e) => e.regex)
        .reduce((e, t) => `${e}(${t.source})`, "")}$`,
      t,
    ],
    t = RegExp(t, "i"),
    [a, o] = (function (e, t, r) {
      const n = e.match(t);
      if (n) {
        const s = {};
        let e = 1;
        for (const i in r)
          if (h(r, i)) {
            const a = r[i],
              o = a.groups ? a.groups + 1 : 1;
            !a.literal &&
              a.token &&
              (s[a.token.val[0]] = a.deser(n.slice(e, e + o))),
              (e += o);
          }
        return [n, s];
      }
      return [n, {}];
    })(e, t, a),
    [u, l, c] = o
      ? (function (n) {
          let e = null,
            t;
          return (
            O(n.z) || (e = w.create(n.z)),
            O(n.Z) || ((e = e || new v(n.Z)), (t = n.Z)),
            O(n.q) || (n.M = 3 * (n.q - 1) + 1),
            O(n.h) ||
              (n.h < 12 && 1 === n.a
                ? (n.h += 12)
                : 12 === n.h && 0 === n.a && (n.h = 0)),
            0 === n.G && n.y && (n.y = -n.y),
            O(n.u) || (n.S = fe(n.u)),
            [
              Object.keys(n).reduce((e, t) => {
                var r = ((e) => {
                  switch (e) {
                    case "S":
                      return "millisecond";
                    case "s":
                      return "second";
                    case "m":
                      return "minute";
                    case "h":
                    case "H":
                      return "hour";
                    case "d":
                      return "day";
                    case "o":
                      return "ordinal";
                    case "L":
                    case "M":
                      return "month";
                    case "y":
                      return "year";
                    case "E":
                    case "c":
                      return "weekday";
                    case "W":
                      return "weekNumber";
                    case "k":
                      return "weekYear";
                    case "q":
                      return "quarter";
                    default:
                      return null;
                  }
                })(t);
                return r && (e[r] = n[t]), e;
              }, {}),
              e,
              t,
            ]
          );
        })(o)
      : [null, null, void 0];
  if (h(o, "a") && h(o, "H"))
    throw new j("Can't include meridiem when specifying 24-hour format");
  return {
    input: e,
    tokens: r,
    regex: t,
    rawMatches: a,
    matches: o,
    result: u,
    zone: l,
    specificOffset: c,
  };
}
function Ar(e, t, r) {
  var { result: e, zone: t, specificOffset: r, invalidReason: n } = qr(e, t, r);
  return [e, t, r, n];
}
const jr = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
  _r = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
function Z(e, t) {
  return new y(
    "unit out of range",
    `you specified ${t} (of type ${typeof t}) as a ${e}, which is invalid`
  );
}
function Ur(e, t, r) {
  const n = new Date(Date.UTC(e, t - 1, r));
  e < 100 && 0 <= e && n.setUTCFullYear(n.getUTCFullYear() - 1900);
  t = n.getUTCDay();
  return 0 === t ? 7 : t;
}
function $r(e, t, r) {
  return r + (ge(e) ? _r : jr)[t - 1];
}
function Hr(e, t) {
  const r = ge(e) ? _r : jr,
    n = r.findIndex((e) => e < t),
    s = t - r[n];
  return { month: n + 1, day: s };
}
function Wr(e) {
  var { year: t, month: r, day: n } = e,
    s = $r(t, r, n),
    r = Ur(t, r, n);
  let i = Math.floor((s - r + 10) / 7),
    a;
  return (
    i < 1
      ? ((a = t - 1), (i = Te(a)))
      : i > Te(t)
      ? ((a = t + 1), (i = 1))
      : (a = t),
    { weekYear: a, weekNumber: i, weekday: r, ...De(e) }
  );
}
function Rr(e) {
  var { weekYear: t, weekNumber: r, weekday: n } = e,
    s = Ur(t, 1, 4),
    i = we(t);
  let a = 7 * r + n - s - 3,
    o;
  a < 1
    ? ((o = t - 1), (a += we(o)))
    : a > i
    ? ((o = t + 1), (a -= we(t)))
    : (o = t);
  var { month: r, day: n } = Hr(o, a);
  return { year: o, month: r, day: n, ...De(e) };
}
function Jr(e) {
  var { year: t, month: r, day: n } = e;
  return { year: t, ordinal: $r(t, r, n), ...De(e) };
}
function Yr(e) {
  var { year: t, ordinal: r } = e,
    { month: r, day: n } = Hr(t, r);
  return { year: t, month: r, day: n, ...De(e) };
}
function Pr(e) {
  var t = le(e.weekYear),
    r = u(e.weekNumber, 1, Te(e.weekYear)),
    n = u(e.weekday, 1, 7);
  return t
    ? r
      ? !n && Z("weekday", e.weekday)
      : Z("week", e.week)
    : Z("weekYear", e.weekYear);
}
function Gr(e) {
  var t = le(e.year),
    r = u(e.ordinal, 1, we(e.year));
  return t ? !r && Z("ordinal", e.ordinal) : Z("year", e.year);
}
function Br(e) {
  var t = le(e.year),
    r = u(e.month, 1, 12),
    n = u(e.day, 1, ve(e.year, e.month));
  return t
    ? r
      ? !n && Z("day", e.day)
      : Z("month", e.month)
    : Z("year", e.year);
}
function Qr(e) {
  var { hour: e, minute: t, second: r, millisecond: n } = e,
    s = u(e, 0, 23) || (24 === e && 0 === t && 0 === r && 0 === n),
    i = u(t, 0, 59),
    a = u(r, 0, 59),
    o = u(n, 0, 999);
  return s
    ? i
      ? a
        ? !o && Z("millisecond", n)
        : Z("second", r)
      : Z("minute", t)
    : Z("hour", e);
}
const Kr = "Invalid DateTime";
function Xr(e) {
  return new y("unsupported zone", `the zone "${e.name}" is not supported`);
}
function en(e) {
  return null === e.weekData && (e.weekData = Wr(e.c)), e.weekData;
}
function tn(e, t) {
  e = {
    ts: e.ts,
    zone: e.zone,
    c: e.c,
    o: e.o,
    loc: e.loc,
    invalid: e.invalid,
  };
  return new L({ ...e, ...t, old: e });
}
function rn(e, t, r) {
  let n = e - 60 * t * 1e3;
  var s = r.offset(n);
  if (t === s) return [n, t];
  n -= 60 * (s - t) * 1e3;
  t = r.offset(n);
  return s === t ? [n, s] : [e - 60 * Math.min(s, t) * 1e3, Math.max(s, t)];
}
function nn(e, t) {
  e += 60 * t * 1e3;
  const r = new Date(e);
  return {
    year: r.getUTCFullYear(),
    month: r.getUTCMonth() + 1,
    day: r.getUTCDate(),
    hour: r.getUTCHours(),
    minute: r.getUTCMinutes(),
    second: r.getUTCSeconds(),
    millisecond: r.getUTCMilliseconds(),
  };
}
function sn(e, t, r) {
  return rn(pe(e), t, r);
}
function an(e, t) {
  var r = e.o,
    n = e.c.year + Math.trunc(t.years),
    s = e.c.month + Math.trunc(t.months) + 3 * Math.trunc(t.quarters),
    n = {
      ...e.c,
      year: n,
      month: s,
      day:
        Math.min(e.c.day, ve(n, s)) +
        Math.trunc(t.days) +
        7 * Math.trunc(t.weeks),
    },
    s = V.fromObject({
      years: t.years - Math.trunc(t.years),
      quarters: t.quarters - Math.trunc(t.quarters),
      months: t.months - Math.trunc(t.months),
      weeks: t.weeks - Math.trunc(t.weeks),
      days: t.days - Math.trunc(t.days),
      hours: t.hours,
      minutes: t.minutes,
      seconds: t.seconds,
      milliseconds: t.milliseconds,
    }).as("milliseconds");
  let [i, a] = rn(pe(n), r, e.zone);
  return 0 !== s && ((i += s), (a = e.zone.offset(i))), { ts: i, o: a };
}
function on(e, t, r, n, s, i) {
  var { setZone: a, zone: o } = r;
  if (e && 0 !== Object.keys(e).length) {
    const u = t || o,
      l = L.fromObject(e, { ...r, zone: u, specificOffset: i });
    return a ? l : l.setZone(o);
  }
  return L.invalid(
    new y("unparsable", `the input "${s}" can't be parsed as ` + n)
  );
}
function un(e, t, r = !0) {
  return e.isValid
    ? f
        .create(M.create("en-US"), { allowZ: r, forceSimple: !0 })
        .formatDateTimeFromString(e, t)
    : null;
}
function ln(e, t) {
  var r = 9999 < e.c.year || e.c.year < 0;
  let n = "";
  return (
    r && 0 <= e.c.year && (n += "+"),
    (n += l(e.c.year, r ? 6 : 4)),
    (n = t
      ? (n = (n += "-") + l(e.c.month) + "-") + l(e.c.day)
      : (n += l(e.c.month)) + l(e.c.day))
  );
}
function cn(e, t, r, n, s, i) {
  let a = l(e.c.hour);
  return (
    t
      ? ((a = (a += ":") + l(e.c.minute)),
        (0 === e.c.second && r) || (a += ":"))
      : (a += l(e.c.minute)),
    (0 === e.c.second && r) ||
      ((a += l(e.c.second)),
      (0 === e.c.millisecond && n) || (a = (a += ".") + l(e.c.millisecond, 3))),
    s &&
      (e.isOffsetFixed && 0 === e.offset && !i
        ? (a += "Z")
        : (a =
            e.o < 0
              ? (a = (a += "-") + l(Math.trunc(-e.o / 60)) + ":") +
                l(Math.trunc(-e.o % 60))
              : (a = (a += "+") + l(Math.trunc(e.o / 60)) + ":") +
                l(Math.trunc(e.o % 60)))),
    i && (a += "[" + e.zone.ianaName + "]"),
    a
  );
}
const hn = { month: 1, day: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  dn = {
    weekNumber: 1,
    weekday: 1,
    hour: 0,
    minute: 0,
    second: 0,
    millisecond: 0,
  },
  mn = { ordinal: 1, hour: 0, minute: 0, second: 0, millisecond: 0 },
  fn = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
  yn = [
    "weekYear",
    "weekNumber",
    "weekday",
    "hour",
    "minute",
    "second",
    "millisecond",
  ],
  gn = ["year", "ordinal", "hour", "minute", "second", "millisecond"];
function wn(e) {
  var t = {
    year: "year",
    years: "year",
    month: "month",
    months: "month",
    day: "day",
    days: "day",
    hour: "hour",
    hours: "hour",
    minute: "minute",
    minutes: "minute",
    quarter: "quarter",
    quarters: "quarter",
    second: "second",
    seconds: "second",
    millisecond: "millisecond",
    milliseconds: "millisecond",
    weekday: "weekday",
    weekdays: "weekday",
    weeknumber: "weekNumber",
    weeksnumber: "weekNumber",
    weeknumbers: "weekNumber",
    weekyear: "weekYear",
    weekyears: "weekYear",
    ordinal: "ordinal",
  }[e.toLowerCase()];
  if (t) return t;
  throw new _(e);
}
function vn(e, t) {
  const r = b(t.zone, k.defaultZone),
    n = M.fromObject(t),
    s = k.now();
  let i, a;
  if (O(e.year)) i = s;
  else {
    for (const o of fn) O(e[o]) && (e[o] = hn[o]);
    t = Br(e) || Qr(e);
    if (t) return L.invalid(t);
    t = r.offset(s);
    [i, a] = sn(e, t, r);
  }
  return new L({ ts: i, zone: r, loc: n, o: a });
}
function pn(t, n, s) {
  const i = !!O(s.round) || s.round,
    e = (e, t) => {
      e = ye(e, i || s.calendary ? 0 : 2, !0);
      const r = n.loc.clone(s).relFormatter(s);
      return r.format(e, t);
    },
    r = (e) =>
      s.calendary
        ? n.hasSame(t, e)
          ? 0
          : n.startOf(e).diff(t.startOf(e), e).get(e)
        : n.diff(t, e).get(e);
  if (s.unit) return e(r(s.unit), s.unit);
  for (const o of s.units) {
    var a = r(o);
    if (1 <= Math.abs(a)) return e(a, o);
  }
  return e(n < t ? -0 : 0, s.units[s.units.length - 1]);
}
function Tn(e) {
  let t = {},
    r;
  return (
    (r =
      0 < e.length && "object" == typeof e[e.length - 1]
        ? ((t = e[e.length - 1]), Array.from(e).slice(0, e.length - 1))
        : Array.from(e)),
    [t, r]
  );
}
class L {
  constructor(e) {
    const t = e.zone || k.defaultZone;
    let r =
        e.invalid ||
        (Number.isNaN(e.ts) ? new y("invalid input") : null) ||
        (t.isValid ? null : Xr(t)),
      n = ((this.ts = O(e.ts) ? k.now() : e.ts), null),
      s = null;
    var i;
    r ||
      (e.old && e.old.ts === this.ts && e.old.zone.equals(t)
        ? ([n, s] = [e.old.c, e.old.o])
        : ((i = t.offset(this.ts)),
          (n = nn(this.ts, i)),
          (r = Number.isNaN(n.year) ? new y("invalid input") : null),
          (n = r ? null : n),
          (s = r ? null : i))),
      (this._zone = t),
      (this.loc = e.loc || M.create()),
      (this.invalid = r),
      (this.weekData = null),
      (this.c = n),
      (this.o = s),
      (this.isLuxonDateTime = !0);
  }
  static now() {
    return new L({});
  }
  static local() {
    var [e, t] = Tn(arguments),
      [t, r, n, s, i, a, o] = t;
    return vn(
      {
        year: t,
        month: r,
        day: n,
        hour: s,
        minute: i,
        second: a,
        millisecond: o,
      },
      e
    );
  }
  static utc() {
    const [e, t] = Tn(arguments),
      [r, n, s, i, a, o, u] = t;
    return (
      (e.zone = v.utcInstance),
      vn(
        {
          year: r,
          month: n,
          day: s,
          hour: i,
          minute: a,
          second: o,
          millisecond: u,
        },
        e
      )
    );
  }
  static fromJSDate(e, t = {}) {
    e = ce(e) ? e.valueOf() : NaN;
    if (Number.isNaN(e)) return L.invalid("invalid input");
    var r = b(t.zone, k.defaultZone);
    return r.isValid
      ? new L({ ts: e, zone: r, loc: M.fromObject(t) })
      : L.invalid(Xr(r));
  }
  static fromMillis(e, t = {}) {
    if (c(e))
      return e < -864e13 || 864e13 < e
        ? L.invalid("Timestamp out of range")
        : new L({
            ts: e,
            zone: b(t.zone, k.defaultZone),
            loc: M.fromObject(t),
          });
    throw new o(
      `fromMillis requires a numerical input, but received a ${typeof e} with value ` +
        e
    );
  }
  static fromSeconds(e, t = {}) {
    if (c(e))
      return new L({
        ts: 1e3 * e,
        zone: b(t.zone, k.defaultZone),
        loc: M.fromObject(t),
      });
    throw new o("fromSeconds requires a numerical input");
  }
  static fromObject(e, t = {}) {
    e = e || {};
    const r = b(t.zone, k.defaultZone);
    if (!r.isValid) return L.invalid(Xr(r));
    const n = k.now(),
      s = O(t.specificOffset) ? r.offset(n) : t.specificOffset,
      i = Me(e, wn),
      a = !O(i.ordinal),
      o = !O(i.year),
      u = !O(i.month) || !O(i.day),
      l = o || u,
      c = i.weekYear || i.weekNumber,
      h = M.fromObject(t);
    if ((l || a) && c)
      throw new j(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (u && a) throw new j("Can't mix ordinal dates with month/day");
    t = c || (i.weekday && !l);
    let d,
      m,
      f = nn(n, s),
      y =
        (t
          ? ((d = yn), (m = dn), (f = Wr(f)))
          : a
          ? ((d = gn), (m = mn), (f = Jr(f)))
          : ((d = fn), (m = hn)),
        !1);
    for (const S of d) O(i[S]) ? (y ? (i[S] = m[S]) : (i[S] = f[S])) : (y = !0);
    var g = (t ? Pr : a ? Gr : Br)(i) || Qr(i);
    if (g) return L.invalid(g);
    const w = t ? Rr(i) : a ? Yr(i) : i,
      [v, p] = sn(w, s, r),
      T = new L({ ts: v, zone: r, o: p, loc: h });
    return i.weekday && l && e.weekday !== T.weekday
      ? L.invalid(
          "mismatched weekday",
          `you can't specify both a weekday of ${i.weekday} and a date of ` +
            T.toISO()
        )
      : T;
  }
  static fromISO(e, t = {}) {
    var [r, n] = rr(e);
    return on(r, n, t, "ISO 8601", e);
  }
  static fromRFC2822(e, t = {}) {
    var [r, n] = nr(e);
    return on(r, n, t, "RFC 2822", e);
  }
  static fromHTTP(e, t = {}) {
    var [e, r] = sr(e);
    return on(e, r, t, "HTTP", t);
  }
  static fromFormat(e, t, r = {}) {
    if (O(e) || O(t))
      throw new o("fromFormat requires an input string and a format");
    var { locale: n = null, numberingSystem: s = null } = r,
      [n, s, i, a] = Ar(
        M.fromOpts({ locale: n, numberingSystem: s, defaultToEN: !0 }),
        e,
        t
      );
    return a ? L.invalid(a) : on(n, s, r, "format " + t, e, i);
  }
  static fromString(e, t, r = {}) {
    return L.fromFormat(e, t, r);
  }
  static fromSQL(e, t = {}) {
    var [r, n] = hr(e);
    return on(r, n, t, "SQL", e);
  }
  static invalid(e, t = null) {
    if (!e) throw new o("need to specify a reason the DateTime is invalid");
    e = e instanceof y ? e : new y(e, t);
    if (k.throwOnInvalid) throw new z(e);
    return new L({ invalid: e });
  }
  static isDateTime(e) {
    return (e && e.isLuxonDateTime) || !1;
  }
  get(e) {
    return this[e];
  }
  get isValid() {
    return null === this.invalid;
  }
  get invalidReason() {
    return this.invalid ? this.invalid.reason : null;
  }
  get invalidExplanation() {
    return this.invalid ? this.invalid.explanation : null;
  }
  get locale() {
    return this.isValid ? this.loc.locale : null;
  }
  get numberingSystem() {
    return this.isValid ? this.loc.numberingSystem : null;
  }
  get outputCalendar() {
    return this.isValid ? this.loc.outputCalendar : null;
  }
  get zone() {
    return this._zone;
  }
  get zoneName() {
    return this.isValid ? this.zone.name : null;
  }
  get year() {
    return this.isValid ? this.c.year : NaN;
  }
  get quarter() {
    return this.isValid ? Math.ceil(this.c.month / 3) : NaN;
  }
  get month() {
    return this.isValid ? this.c.month : NaN;
  }
  get day() {
    return this.isValid ? this.c.day : NaN;
  }
  get hour() {
    return this.isValid ? this.c.hour : NaN;
  }
  get minute() {
    return this.isValid ? this.c.minute : NaN;
  }
  get second() {
    return this.isValid ? this.c.second : NaN;
  }
  get millisecond() {
    return this.isValid ? this.c.millisecond : NaN;
  }
  get weekYear() {
    return this.isValid ? en(this).weekYear : NaN;
  }
  get weekNumber() {
    return this.isValid ? en(this).weekNumber : NaN;
  }
  get weekday() {
    return this.isValid ? en(this).weekday : NaN;
  }
  get ordinal() {
    return this.isValid ? Jr(this.c).ordinal : NaN;
  }
  get monthShort() {
    return this.isValid
      ? Sr.months("short", { locObj: this.loc })[this.month - 1]
      : null;
  }
  get monthLong() {
    return this.isValid
      ? Sr.months("long", { locObj: this.loc })[this.month - 1]
      : null;
  }
  get weekdayShort() {
    return this.isValid
      ? Sr.weekdays("short", { locObj: this.loc })[this.weekday - 1]
      : null;
  }
  get weekdayLong() {
    return this.isValid
      ? Sr.weekdays("long", { locObj: this.loc })[this.weekday - 1]
      : null;
  }
  get offset() {
    return this.isValid ? +this.o : NaN;
  }
  get offsetNameShort() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: "short", locale: this.locale })
      : null;
  }
  get offsetNameLong() {
    return this.isValid
      ? this.zone.offsetName(this.ts, { format: "long", locale: this.locale })
      : null;
  }
  get isOffsetFixed() {
    return this.isValid ? this.zone.isUniversal : null;
  }
  get isInDST() {
    return (
      !this.isOffsetFixed &&
      (this.offset > this.set({ month: 1, day: 1 }).offset ||
        this.offset > this.set({ month: 5 }).offset)
    );
  }
  get isInLeapYear() {
    return ge(this.year);
  }
  get daysInMonth() {
    return ve(this.year, this.month);
  }
  get daysInYear() {
    return this.isValid ? we(this.year) : NaN;
  }
  get weeksInWeekYear() {
    return this.isValid ? Te(this.weekYear) : NaN;
  }
  resolvedLocaleOptions(e = {}) {
    var {
      locale: e,
      numberingSystem: t,
      calendar: r,
    } = f.create(this.loc.clone(e), e).resolvedOptions(this);
    return { locale: e, numberingSystem: t, outputCalendar: r };
  }
  toUTC(e = 0, t = {}) {
    return this.setZone(v.instance(e), t);
  }
  toLocal() {
    return this.setZone(k.defaultZone);
  }
  setZone(t, { keepLocalTime: r = !1, keepCalendarTime: n = !1 } = {}) {
    if ((t = b(t, k.defaultZone)).equals(this.zone)) return this;
    if (t.isValid) {
      let e = this.ts;
      return (
        (r || n) &&
          ((r = t.offset(this.ts)), (n = this.toObject()), ([e] = sn(n, r, t))),
        tn(this, { ts: e, zone: t })
      );
    }
    return L.invalid(Xr(t));
  }
  reconfigure({ locale: e, numberingSystem: t, outputCalendar: r } = {}) {
    e = this.loc.clone({ locale: e, numberingSystem: t, outputCalendar: r });
    return tn(this, { loc: e });
  }
  setLocale(e) {
    return this.reconfigure({ locale: e });
  }
  set(e) {
    if (!this.isValid) return this;
    var e = Me(e, wn),
      t = !O(e.weekYear) || !O(e.weekNumber) || !O(e.weekday),
      r = !O(e.ordinal),
      n = !O(e.year),
      s = !O(e.month) || !O(e.day),
      i = e.weekYear || e.weekNumber;
    if ((n || s || r) && i)
      throw new j(
        "Can't mix weekYear/weekNumber units with year/month/day or ordinals"
      );
    if (s && r) throw new j("Can't mix ordinal dates with month/day");
    let a;
    t
      ? (a = Rr({ ...Wr(this.c), ...e }))
      : O(e.ordinal)
      ? ((a = { ...this.toObject(), ...e }),
        O(e.day) && (a.day = Math.min(ve(a.year, a.month), a.day)))
      : (a = Yr({ ...Jr(this.c), ...e }));
    var [n, i] = sn(a, this.o, this.zone);
    return tn(this, { ts: n, o: i });
  }
  plus(e) {
    return this.isValid ? tn(this, an(this, V.fromDurationLike(e))) : this;
  }
  minus(e) {
    return this.isValid
      ? tn(this, an(this, V.fromDurationLike(e).negate()))
      : this;
  }
  startOf(e) {
    if (!this.isValid) return this;
    const t = {},
      r = V.normalizeUnit(e);
    switch (r) {
      case "years":
        t.month = 1;
      case "quarters":
      case "months":
        t.day = 1;
      case "weeks":
      case "days":
        t.hour = 0;
      case "hours":
        t.minute = 0;
      case "minutes":
        t.second = 0;
      case "seconds":
        t.millisecond = 0;
    }
    return (
      "weeks" === r && (t.weekday = 1),
      "quarters" === r &&
        ((e = Math.ceil(this.month / 3)), (t.month = 3 * (e - 1) + 1)),
      this.set(t)
    );
  }
  endOf(e) {
    return this.isValid
      ? this.plus({ [e]: 1 })
          .startOf(e)
          .minus(1)
      : this;
  }
  toFormat(e, t = {}) {
    return this.isValid
      ? f.create(this.loc.redefaultToEN(t)).formatDateTimeFromString(this, e)
      : Kr;
  }
  toLocaleString(e = U, t = {}) {
    return this.isValid
      ? f.create(this.loc.clone(t), e).formatDateTime(this)
      : Kr;
  }
  toLocaleParts(e = {}) {
    return this.isValid
      ? f.create(this.loc.clone(e), e).formatDateTimeParts(this)
      : [];
  }
  toISO({
    format: e = "extended",
    suppressSeconds: t = !1,
    suppressMilliseconds: r = !1,
    includeOffset: n = !0,
    extendedZone: s = !1,
  } = {}) {
    if (!this.isValid) return null;
    var e = "extended" === e,
      i = ln(this, e);
    return (i += "T") + cn(this, e, t, r, n, s);
  }
  toISODate({ format: e = "extended" } = {}) {
    return this.isValid ? ln(this, "extended" === e) : null;
  }
  toISOWeekDate() {
    return un(this, "kkkk-'W'WW-c");
  }
  toISOTime({
    suppressMilliseconds: e = !1,
    suppressSeconds: t = !1,
    includeOffset: r = !0,
    includePrefix: n = !1,
    extendedZone: s = !1,
    format: i = "extended",
  } = {}) {
    return this.isValid
      ? (n ? "T" : "") + cn(this, "extended" === i, t, e, r, s)
      : null;
  }
  toRFC2822() {
    return un(this, "EEE, dd LLL yyyy HH:mm:ss ZZZ", !1);
  }
  toHTTP() {
    return un(this.toUTC(), "EEE, dd LLL yyyy HH:mm:ss 'GMT'");
  }
  toSQLDate() {
    return this.isValid ? ln(this, !0) : null;
  }
  toSQLTime({
    includeOffset: e = !0,
    includeZone: t = !1,
    includeOffsetSpace: r = !0,
  } = {}) {
    let n = "HH:mm:ss.SSS";
    return (
      (t || e) && (r && (n += " "), t ? (n += "z") : e && (n += "ZZ")),
      un(this, n, !0)
    );
  }
  toSQL(e = {}) {
    return this.isValid ? this.toSQLDate() + " " + this.toSQLTime(e) : null;
  }
  toString() {
    return this.isValid ? this.toISO() : Kr;
  }
  valueOf() {
    return this.toMillis();
  }
  toMillis() {
    return this.isValid ? this.ts : NaN;
  }
  toSeconds() {
    return this.isValid ? this.ts / 1e3 : NaN;
  }
  toUnixInteger() {
    return this.isValid ? Math.floor(this.ts / 1e3) : NaN;
  }
  toJSON() {
    return this.toISO();
  }
  toBSON() {
    return this.toJSDate();
  }
  toObject(e = {}) {
    if (!this.isValid) return {};
    const t = { ...this.c };
    return (
      e.includeConfig &&
        ((t.outputCalendar = this.outputCalendar),
        (t.numberingSystem = this.loc.numberingSystem),
        (t.locale = this.loc.locale)),
      t
    );
  }
  toJSDate() {
    return new Date(this.isValid ? this.ts : NaN);
  }
  diff(e, t = "milliseconds", r = {}) {
    if (!this.isValid || !e.isValid)
      return V.invalid("created by diffing an invalid DateTime");
    r = { locale: this.locale, numberingSystem: this.numberingSystem, ...r };
    const n = de(t).map(V.normalizeUnit),
      s = e.valueOf() > this.valueOf(),
      i = s ? this : e,
      a = s ? e : this,
      o = br(i, a, n, r);
    return s ? o.negate() : o;
  }
  diffNow(e = "milliseconds", t = {}) {
    return this.diff(L.now(), e, t);
  }
  until(e) {
    return this.isValid ? I.fromDateTimes(this, e) : this;
  }
  hasSame(e, t) {
    if (!this.isValid) return !1;
    var r = e.valueOf();
    const n = this.setZone(e.zone, { keepLocalTime: !0 });
    return n.startOf(t) <= r && r <= n.endOf(t);
  }
  equals(e) {
    return (
      this.isValid &&
      e.isValid &&
      this.valueOf() === e.valueOf() &&
      this.zone.equals(e.zone) &&
      this.loc.equals(e.loc)
    );
  }
  toRelative(e = {}) {
    if (!this.isValid) return null;
    var t = e.base || L.fromObject({}, { zone: this.zone }),
      r = e.padding ? (this < t ? -e.padding : e.padding) : 0;
    let n = ["years", "months", "days", "hours", "minutes", "seconds"],
      s = e.unit;
    return (
      Array.isArray(e.unit) && ((n = e.unit), (s = void 0)),
      pn(t, this.plus(r), { ...e, numeric: "always", units: n, unit: s })
    );
  }
  toRelativeCalendar(e = {}) {
    return this.isValid
      ? pn(e.base || L.fromObject({}, { zone: this.zone }), this, {
          ...e,
          numeric: "auto",
          units: ["years", "months", "days"],
          calendary: !0,
        })
      : null;
  }
  static min(...e) {
    if (e.every(L.isDateTime)) return me(e, (e) => e.valueOf(), Math.min);
    throw new o("min requires all arguments be DateTimes");
  }
  static max(...e) {
    if (e.every(L.isDateTime)) return me(e, (e) => e.valueOf(), Math.max);
    throw new o("max requires all arguments be DateTimes");
  }
  static fromFormatExplain(e, t, r = {}) {
    var { locale: r = null, numberingSystem: n = null } = r;
    return qr(
      M.fromOpts({ locale: r, numberingSystem: n, defaultToEN: !0 }),
      e,
      t
    );
  }
  static fromStringExplain(e, t, r = {}) {
    return L.fromFormatExplain(e, t, r);
  }
  static get DATE_SHORT() {
    return U;
  }
  static get DATE_MED() {
    return $;
  }
  static get DATE_MED_WITH_WEEKDAY() {
    return H;
  }
  static get DATE_FULL() {
    return W;
  }
  static get DATE_HUGE() {
    return R;
  }
  static get TIME_SIMPLE() {
    return J;
  }
  static get TIME_WITH_SECONDS() {
    return Y;
  }
  static get TIME_WITH_SHORT_OFFSET() {
    return P;
  }
  static get TIME_WITH_LONG_OFFSET() {
    return G;
  }
  static get TIME_24_SIMPLE() {
    return B;
  }
  static get TIME_24_WITH_SECONDS() {
    return Q;
  }
  static get TIME_24_WITH_SHORT_OFFSET() {
    return K;
  }
  static get TIME_24_WITH_LONG_OFFSET() {
    return X;
  }
  static get DATETIME_SHORT() {
    return ee;
  }
  static get DATETIME_SHORT_WITH_SECONDS() {
    return te;
  }
  static get DATETIME_MED() {
    return re;
  }
  static get DATETIME_MED_WITH_SECONDS() {
    return ne;
  }
  static get DATETIME_MED_WITH_WEEKDAY() {
    return se;
  }
  static get DATETIME_FULL() {
    return ie;
  }
  static get DATETIME_FULL_WITH_SECONDS() {
    return ae;
  }
  static get DATETIME_HUGE() {
    return oe;
  }
  static get DATETIME_HUGE_WITH_SECONDS() {
    return ue;
  }
}
function Sn(e) {
  if (L.isDateTime(e)) return e;
  if (e && e.valueOf && c(e.valueOf())) return L.fromJSDate(e);
  if (e && "object" == typeof e) return L.fromObject(e);
  throw new o(`Unknown datetime argument: ${e}, of type ` + typeof e);
}
s = "2.5.2";
export {
  L as DateTime,
  V as Duration,
  v as FixedOffsetZone,
  w as IANAZone,
  Sr as Info,
  I as Interval,
  nt as InvalidZone,
  k as Settings,
  Ge as SystemZone,
  s as VERSION,
  i as Zone,
};