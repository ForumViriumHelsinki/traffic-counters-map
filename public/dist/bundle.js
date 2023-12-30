/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var t,
    e,
    n,
    i,
    o = {
      573: (t, e, n) => {
        "use strict";
        n.d(e, {
          LM: () => g,
          p6: () => _,
          pB: () => d,
          q0: () => m,
          zw: () => c,
        });
        var i = n(166);
        function o(t) {
          return (
            (o =
              "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                  }
                : function (t) {
                    return t &&
                      "function" == typeof Symbol &&
                      t.constructor === Symbol &&
                      t !== Symbol.prototype
                      ? "symbol"
                      : typeof t;
                  }),
            o(t)
          );
        }
        function r() {
          r = function () {
            return e;
          };
          var t,
            e = {},
            n = Object.prototype,
            i = n.hasOwnProperty,
            s =
              Object.defineProperty ||
              function (t, e, n) {
                t[e] = n.value;
              },
            a = "function" == typeof Symbol ? Symbol : {},
            u = a.iterator || "@@iterator",
            h = a.asyncIterator || "@@asyncIterator",
            l = a.toStringTag || "@@toStringTag";
          function c(t, e, n) {
            return (
              Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              }),
              t[e]
            );
          }
          try {
            c({}, "");
          } catch (t) {
            c = function (t, e, n) {
              return (t[e] = n);
            };
          }
          function f(t, e, n, i) {
            var o = e && e.prototype instanceof y ? e : y,
              r = Object.create(o.prototype),
              a = new A(i || []);
            return s(r, "_invoke", { value: S(t, n, a) }), r;
          }
          function d(t, e, n) {
            try {
              return { type: "normal", arg: t.call(e, n) };
            } catch (t) {
              return { type: "throw", arg: t };
            }
          }
          e.wrap = f;
          var p = "suspendedStart",
            _ = "suspendedYield",
            m = "executing",
            g = "completed",
            v = {};
          function y() {}
          function w() {}
          function x() {}
          var b = {};
          c(b, u, function () {
            return this;
          });
          var L = Object.getPrototypeOf,
            T = L && L(L(O([])));
          T && T !== n && i.call(T, u) && (b = T);
          var P = (x.prototype = y.prototype = Object.create(b));
          function M(t) {
            ["next", "throw", "return"].forEach(function (e) {
              c(t, e, function (t) {
                return this._invoke(e, t);
              });
            });
          }
          function C(t, e) {
            function n(r, s, a, u) {
              var h = d(t[r], t, s);
              if ("throw" !== h.type) {
                var l = h.arg,
                  c = l.value;
                return c && "object" == o(c) && i.call(c, "__await")
                  ? e.resolve(c.__await).then(
                      function (t) {
                        n("next", t, a, u);
                      },
                      function (t) {
                        n("throw", t, a, u);
                      },
                    )
                  : e.resolve(c).then(
                      function (t) {
                        (l.value = t), a(l);
                      },
                      function (t) {
                        return n("throw", t, a, u);
                      },
                    );
              }
              u(h.arg);
            }
            var r;
            s(this, "_invoke", {
              value: function (t, i) {
                function o() {
                  return new e(function (e, o) {
                    n(t, i, e, o);
                  });
                }
                return (r = r ? r.then(o, o) : o());
              },
            });
          }
          function S(e, n, i) {
            var o = p;
            return function (r, s) {
              if (o === m) throw new Error("Generator is already running");
              if (o === g) {
                if ("throw" === r) throw s;
                return { value: t, done: !0 };
              }
              for (i.method = r, i.arg = s; ; ) {
                var a = i.delegate;
                if (a) {
                  var u = E(a, i);
                  if (u) {
                    if (u === v) continue;
                    return u;
                  }
                }
                if ("next" === i.method) i.sent = i._sent = i.arg;
                else if ("throw" === i.method) {
                  if (o === p) throw ((o = g), i.arg);
                  i.dispatchException(i.arg);
                } else "return" === i.method && i.abrupt("return", i.arg);
                o = m;
                var h = d(e, n, i);
                if ("normal" === h.type) {
                  if (((o = i.done ? g : _), h.arg === v)) continue;
                  return { value: h.arg, done: i.done };
                }
                "throw" === h.type &&
                  ((o = g), (i.method = "throw"), (i.arg = h.arg));
              }
            };
          }
          function E(e, n) {
            var i = n.method,
              o = e.iterator[i];
            if (o === t)
              return (
                (n.delegate = null),
                ("throw" === i &&
                  e.iterator.return &&
                  ((n.method = "return"),
                  (n.arg = t),
                  E(e, n),
                  "throw" === n.method)) ||
                  ("return" !== i &&
                    ((n.method = "throw"),
                    (n.arg = new TypeError(
                      "The iterator does not provide a '" + i + "' method",
                    )))),
                v
              );
            var r = d(o, e.iterator, n.arg);
            if ("throw" === r.type)
              return (
                (n.method = "throw"), (n.arg = r.arg), (n.delegate = null), v
              );
            var s = r.arg;
            return s
              ? s.done
                ? ((n[e.resultName] = s.value),
                  (n.next = e.nextLoc),
                  "return" !== n.method && ((n.method = "next"), (n.arg = t)),
                  (n.delegate = null),
                  v)
                : s
              : ((n.method = "throw"),
                (n.arg = new TypeError("iterator result is not an object")),
                (n.delegate = null),
                v);
          }
          function k(t) {
            var e = { tryLoc: t[0] };
            1 in t && (e.catchLoc = t[1]),
              2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
              this.tryEntries.push(e);
          }
          function z(t) {
            var e = t.completion || {};
            (e.type = "normal"), delete e.arg, (t.completion = e);
          }
          function A(t) {
            (this.tryEntries = [{ tryLoc: "root" }]),
              t.forEach(k, this),
              this.reset(!0);
          }
          function O(e) {
            if (e || "" === e) {
              var n = e[u];
              if (n) return n.call(e);
              if ("function" == typeof e.next) return e;
              if (!isNaN(e.length)) {
                var r = -1,
                  s = function n() {
                    for (; ++r < e.length; )
                      if (i.call(e, r))
                        return (n.value = e[r]), (n.done = !1), n;
                    return (n.value = t), (n.done = !0), n;
                  };
                return (s.next = s);
              }
            }
            throw new TypeError(o(e) + " is not iterable");
          }
          return (
            (w.prototype = x),
            s(P, "constructor", { value: x, configurable: !0 }),
            s(x, "constructor", { value: w, configurable: !0 }),
            (w.displayName = c(x, l, "GeneratorFunction")),
            (e.isGeneratorFunction = function (t) {
              var e = "function" == typeof t && t.constructor;
              return (
                !!e &&
                (e === w || "GeneratorFunction" === (e.displayName || e.name))
              );
            }),
            (e.mark = function (t) {
              return (
                Object.setPrototypeOf
                  ? Object.setPrototypeOf(t, x)
                  : ((t.__proto__ = x), c(t, l, "GeneratorFunction")),
                (t.prototype = Object.create(P)),
                t
              );
            }),
            (e.awrap = function (t) {
              return { __await: t };
            }),
            M(C.prototype),
            c(C.prototype, h, function () {
              return this;
            }),
            (e.AsyncIterator = C),
            (e.async = function (t, n, i, o, r) {
              void 0 === r && (r = Promise);
              var s = new C(f(t, n, i, o), r);
              return e.isGeneratorFunction(n)
                ? s
                : s.next().then(function (t) {
                    return t.done ? t.value : s.next();
                  });
            }),
            M(P),
            c(P, l, "Generator"),
            c(P, u, function () {
              return this;
            }),
            c(P, "toString", function () {
              return "[object Generator]";
            }),
            (e.keys = function (t) {
              var e = Object(t),
                n = [];
              for (var i in e) n.push(i);
              return (
                n.reverse(),
                function t() {
                  for (; n.length; ) {
                    var i = n.pop();
                    if (i in e) return (t.value = i), (t.done = !1), t;
                  }
                  return (t.done = !0), t;
                }
              );
            }),
            (e.values = O),
            (A.prototype = {
              constructor: A,
              reset: function (e) {
                if (
                  ((this.prev = 0),
                  (this.next = 0),
                  (this.sent = this._sent = t),
                  (this.done = !1),
                  (this.delegate = null),
                  (this.method = "next"),
                  (this.arg = t),
                  this.tryEntries.forEach(z),
                  !e)
                )
                  for (var n in this)
                    "t" === n.charAt(0) &&
                      i.call(this, n) &&
                      !isNaN(+n.slice(1)) &&
                      (this[n] = t);
              },
              stop: function () {
                this.done = !0;
                var t = this.tryEntries[0].completion;
                if ("throw" === t.type) throw t.arg;
                return this.rval;
              },
              dispatchException: function (e) {
                if (this.done) throw e;
                var n = this;
                function o(i, o) {
                  return (
                    (a.type = "throw"),
                    (a.arg = e),
                    (n.next = i),
                    o && ((n.method = "next"), (n.arg = t)),
                    !!o
                  );
                }
                for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                  var s = this.tryEntries[r],
                    a = s.completion;
                  if ("root" === s.tryLoc) return o("end");
                  if (s.tryLoc <= this.prev) {
                    var u = i.call(s, "catchLoc"),
                      h = i.call(s, "finallyLoc");
                    if (u && h) {
                      if (this.prev < s.catchLoc) return o(s.catchLoc, !0);
                      if (this.prev < s.finallyLoc) return o(s.finallyLoc);
                    } else if (u) {
                      if (this.prev < s.catchLoc) return o(s.catchLoc, !0);
                    } else {
                      if (!h)
                        throw new Error(
                          "try statement without catch or finally",
                        );
                      if (this.prev < s.finallyLoc) return o(s.finallyLoc);
                    }
                  }
                }
              },
              abrupt: function (t, e) {
                for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                  var o = this.tryEntries[n];
                  if (
                    o.tryLoc <= this.prev &&
                    i.call(o, "finallyLoc") &&
                    this.prev < o.finallyLoc
                  ) {
                    var r = o;
                    break;
                  }
                }
                r &&
                  ("break" === t || "continue" === t) &&
                  r.tryLoc <= e &&
                  e <= r.finallyLoc &&
                  (r = null);
                var s = r ? r.completion : {};
                return (
                  (s.type = t),
                  (s.arg = e),
                  r
                    ? ((this.method = "next"), (this.next = r.finallyLoc), v)
                    : this.complete(s)
                );
              },
              complete: function (t, e) {
                if ("throw" === t.type) throw t.arg;
                return (
                  "break" === t.type || "continue" === t.type
                    ? (this.next = t.arg)
                    : "return" === t.type
                      ? ((this.rval = this.arg = t.arg),
                        (this.method = "return"),
                        (this.next = "end"))
                      : "normal" === t.type && e && (this.next = e),
                  v
                );
              },
              finish: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.finallyLoc === t)
                    return this.complete(n.completion, n.afterLoc), z(n), v;
                }
              },
              catch: function (t) {
                for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                  var n = this.tryEntries[e];
                  if (n.tryLoc === t) {
                    var i = n.completion;
                    if ("throw" === i.type) {
                      var o = i.arg;
                      z(n);
                    }
                    return o;
                  }
                }
                throw new Error("illegal catch attempt");
              },
              delegateYield: function (e, n, i) {
                return (
                  (this.delegate = {
                    iterator: O(e),
                    resultName: n,
                    nextLoc: i,
                  }),
                  "next" === this.method && (this.arg = t),
                  v
                );
              },
            }),
            e
          );
        }
        function s(t, e, n, i, o, r, s) {
          try {
            var a = t[r](s),
              u = a.value;
          } catch (t) {
            return void n(t);
          }
          a.done ? e(u) : Promise.resolve(u).then(i, o);
        }
        function a(t) {
          return function () {
            var e = this,
              n = arguments;
            return new Promise(function (i, o) {
              var r = t.apply(e, n);
              function a(t) {
                s(r, i, o, a, u, "next", t);
              }
              function u(t) {
                s(r, i, o, a, u, "throw", t);
              }
              a(void 0);
            });
          };
        }
        var u = "/api/counters",
          h = "/api/observations/",
          l = "/api/observations/timeframe/";
        function c(t) {
          return f.apply(this, arguments);
        }
        function f() {
          return (f = a(
            r().mark(function t(e) {
              var n;
              return r().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          (t.next = 3),
                          i.gyn(e, function (t) {
                            return {
                              date: i.Z1g("%Y-%m-%dT%H:%M:%S%Z")(t.datetime),
                              value: +t.value,
                              typeOfMeasurement: t.typeofmeasurement,
                              direction: t.direction,
                            };
                          })
                        );
                      case 3:
                        return (n = t.sent), t.abrupt("return", n);
                      case 7:
                        throw (
                          ((t.prev = 7),
                          (t.t0 = t.catch(0)),
                          console.error("Error loading CSV file:", t.t0),
                          t.t0)
                        );
                      case 11:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 7]],
              );
            }),
          )).apply(this, arguments);
        }
        function d() {
          return p.apply(this, arguments);
        }
        function p() {
          return (p = a(
            r().mark(function t() {
              var e, n;
              return r().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.prev = 0), (t.next = 3), fetch(u);
                      case 3:
                        return (e = t.sent), (t.next = 6), e.json();
                      case 6:
                        return (
                          ((n = t.sent).features = n.features.map(function (t) {
                            return (t.properties.show_on_map = !0), t;
                          })),
                          console.log("fetched counters data"),
                          t.abrupt("return", n)
                        );
                      case 12:
                        throw (
                          ((t.prev = 12),
                          (t.t0 = t.catch(0)),
                          console.error("Error fetching data:", t.t0),
                          t.t0)
                        );
                      case 16:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 12]],
              );
            }),
          )).apply(this, arguments);
        }
        function _(t) {
          if (
            (console.log(t),
            !(t instanceof Date) && ((t = new Date(t)), isNaN(t.getTime())))
          )
            throw new Error("Invalid date format");
          return t
            .toLocaleDateString("fi-FI", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })
            .split(".")
            .reverse()
            .join("-");
        }
        function m(t, e, n) {
          var i = h + t,
            o = _(e);
          console.log(o);
          var r = _(n);
          console.log(r);
          var s = { startDate: o, endDate: r },
            a = Object.keys(s)
              .map(function (t) {
                return "".concat(t, "=").concat(encodeURIComponent(s[t]));
              })
              .join("&");
          return "".concat(i, "?").concat(a);
        }
        function g(t) {
          return v.apply(this, arguments);
        }
        function v() {
          return (v = a(
            r().mark(function t(e) {
              var n, i;
              return r().wrap(
                function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.prev = 0),
                          console.log("fetching timeframe data"),
                          (t.next = 4),
                          fetch(l + e)
                        );
                      case 4:
                        return (n = t.sent), (t.next = 7), n.json();
                      case 7:
                        return (i = t.sent), t.abrupt("return", i);
                      case 11:
                        throw (
                          ((t.prev = 11),
                          (t.t0 = t.catch(0)),
                          console.error("Error fetching data:", t.t0),
                          t.t0)
                        );
                      case 15:
                      case "end":
                        return t.stop();
                    }
                },
                t,
                null,
                [[0, 11]],
              );
            }),
          )).apply(this, arguments);
        }
      },
      34: (t, e, n) => {
        "use strict";
        n.a(t, async (t, i) => {
          try {
            n.d(e, { mC: () => s, o5: () => a });
            var o = n(163),
              r = t([o]);
            function s() {
              document
                .querySelectorAll(".filter-checkbox")
                .forEach(function (t) {
                  t.checked = !1;
                });
            }
            function a() {
              document
                .querySelectorAll(".filter-checkbox")
                .forEach(function (t) {
                  t.addEventListener("click", function () {
                    t.id, (0, o.dw)(t);
                  });
                });
            }
            (o = (r.then ? (await r)() : r)[0]), i();
          } catch (u) {
            i(u);
          }
        });
      },
      72: (t, e, n) => {
        "use strict";
        n.a(t, async (t, i) => {
          try {
            n.d(e, { L: () => a, f: () => u });
            var o = n(163),
              r = n(45),
              s = t([o]);
            function a() {
              var t = document.getElementById("counterIdForm"),
                e = document.getElementById("numericInput"),
                n = document.getElementById("errorMessage");
              t &&
                t.addEventListener("submit", function (t) {
                  if ((t.preventDefault(), /^\d+$/.test(e.value))) {
                    if (!(0, r.dH)()) return;
                    n.textContent = "";
                    var i = Number(e.value);
                    (0, o.HA)(i);
                  } else n.textContent = "Enter a valid numeric counter ID.";
                });
            }
            function u(t) {
              document.getElementById("numericInput").value = t;
            }
            (o = (s.then ? (await s)() : s)[0]), i();
          } catch (h) {
            i(h);
          }
        });
      },
      163: (t, e, n) => {
        "use strict";
        n.a(t, async (t, i) => {
          try {
            n.d(e, {
              $h: () => g,
              B_: () => v,
              HA: () => _,
              dw: () => p,
              oz: () => m,
            });
            var o,
              r = n(127),
              s = n(821),
              a = n(161),
              u = n(49),
              h = n(34),
              l = n(227),
              c = n(72),
              f = n(20),
              d = t([s, h, c, f]);
            function p(t) {
              (o = (0, u.pi)(o, t)), (0, s.Tb)(o);
            }
            function _(t) {
              (0, l.NV)(!1), (0, a.xK)();
              var e = o.features.filter(function (e) {
                return (0, u.Z3)(e) === t;
              })[0];
              null != e && null != e
                ? ((0, h.mC)(),
                  (o = (0, u.uH)(o, t)),
                  (0, s.Tb)(o),
                  (0, s.Hd)(e.geometry),
                  (0, r._d)(),
                  (0, f.z)(e))
                : (0, a.Sj)("Counter with id " + t + " not found");
            }
            function m(t, e, n) {
              t.on("click", function (t) {
                console.log("onclick counter marker"),
                  (0, l.NV)(!1),
                  (0, a.xK)(),
                  (0, c.f)((0, u.Z3)(e)),
                  document
                    .getElementById(n)
                    .addEventListener("submit", function (t) {
                      t.preventDefault(), console.log("onsubmit"), (0, f.z)(e);
                    });
              });
            }
            function g(t) {
              t.on("click", function (t) {
                console.log("map clicked"), (0, l.NV)(!1), (0, a.xK)();
              });
            }
            function v(t) {
              console.log("saveGeoJsonData"), (o = t), (0, s.Um)(o);
            }
            ([s, h, c, f] = d.then ? (await d)() : d), i();
          } catch (y) {
            i(y);
          }
        });
      },
      49: (t, e, n) => {
        "use strict";
        n.d(e, { Z3: () => a, lQ: () => s, pi: () => o, uH: () => r });
        var i = n(80);
        function o(t, e) {
          var n;
          return (
            (0, i.q)("update geojson Data after checkbox selection"),
            (t.features = t.features.map(function (t) {
              return (
                (n = t.properties.source.toLowerCase()).startsWith("harbor") &&
                  (n = "infotripla"),
                n === e.id && (t.properties.show_on_map = e.checked),
                t
              );
            })),
            t
          );
        }
        function r(t, e) {
          return (
            (0, i.q)("update geojson data after counter id input"),
            (t.features = t.features.map(function (t) {
              var n = t.properties.id;
              return (
                (t.properties.show_on_map = !1),
                n === e && (t.properties.show_on_map = !0),
                t
              );
            })),
            t
          );
        }
        function s(t) {
          return (
            "Selected Counter Info :  id:" +
            t.properties.id +
            ", name:" +
            t.properties.name +
            ", source:" +
            t.properties.source
          );
        }
        function a(t) {
          return t.properties.id;
        }
      },
      161: (t, e, n) => {
        "use strict";
        function i(t) {
          var e = document.getElementById("errorDiv");
          e
            ? (e.innerHTML = t)
            : console.error("Error div with id 'errorDiv' not found.");
        }
        function o() {
          var t = document.getElementById("errorDiv");
          t
            ? (t.innerHTML = "")
            : console.error("Error div with id 'errorDiv' not found.");
        }
        function r(t) {
          var e = document.getElementById("counterInfoDiv");
          e
            ? (e.innerHTML = t)
            : console.error("Info div with id 'infoDiv' not found.");
        }
        function s() {
          var t = document.getElementById("counterInfoDiv");
          t
            ? (t.innerHTML = "")
            : console.error("Info div with id 'infoDiv' not found.");
        }
        function a() {
          document.getElementById("overlay").style.display = "flex";
        }
        function u() {
          document.getElementById("overlay").style.display = "none";
        }
        n.d(e, {
          LT: () => u,
          Op: () => r,
          Sj: () => i,
          fw: () => o,
          rR: () => a,
          xK: () => s,
        });
      },
      20: (t, e, n) => {
        "use strict";
        n.a(
          t,
          async (t, i) => {
            try {
              n.d(e, { z: () => x });
              var o = n(127),
                r = n(573),
                s = n(821),
                a = n(161),
                u = n(49),
                h = n(45),
                l = n(34),
                c = n(227),
                f = n(72),
                d = n(163),
                p = n(80),
                _ = t([s, l, f, d]);
              function m(t) {
                return (
                  (m =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (t) {
                          return typeof t;
                        }
                      : function (t) {
                          return t &&
                            "function" == typeof Symbol &&
                            t.constructor === Symbol &&
                            t !== Symbol.prototype
                            ? "symbol"
                            : typeof t;
                        }),
                  m(t)
                );
              }
              function g() {
                g = function () {
                  return e;
                };
                var t,
                  e = {},
                  n = Object.prototype,
                  i = n.hasOwnProperty,
                  o =
                    Object.defineProperty ||
                    function (t, e, n) {
                      t[e] = n.value;
                    },
                  r = "function" == typeof Symbol ? Symbol : {},
                  s = r.iterator || "@@iterator",
                  a = r.asyncIterator || "@@asyncIterator",
                  u = r.toStringTag || "@@toStringTag";
                function h(t, e, n) {
                  return (
                    Object.defineProperty(t, e, {
                      value: n,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0,
                    }),
                    t[e]
                  );
                }
                try {
                  h({}, "");
                } catch (t) {
                  h = function (t, e, n) {
                    return (t[e] = n);
                  };
                }
                function l(t, e, n, i) {
                  var r = e && e.prototype instanceof y ? e : y,
                    s = Object.create(r.prototype),
                    a = new A(i || []);
                  return o(s, "_invoke", { value: S(t, n, a) }), s;
                }
                function c(t, e, n) {
                  try {
                    return { type: "normal", arg: t.call(e, n) };
                  } catch (t) {
                    return { type: "throw", arg: t };
                  }
                }
                e.wrap = l;
                var f = "suspendedStart",
                  d = "suspendedYield",
                  p = "executing",
                  _ = "completed",
                  v = {};
                function y() {}
                function w() {}
                function x() {}
                var b = {};
                h(b, s, function () {
                  return this;
                });
                var L = Object.getPrototypeOf,
                  T = L && L(L(O([])));
                T && T !== n && i.call(T, s) && (b = T);
                var P = (x.prototype = y.prototype = Object.create(b));
                function M(t) {
                  ["next", "throw", "return"].forEach(function (e) {
                    h(t, e, function (t) {
                      return this._invoke(e, t);
                    });
                  });
                }
                function C(t, e) {
                  function n(o, r, s, a) {
                    var u = c(t[o], t, r);
                    if ("throw" !== u.type) {
                      var h = u.arg,
                        l = h.value;
                      return l && "object" == m(l) && i.call(l, "__await")
                        ? e.resolve(l.__await).then(
                            function (t) {
                              n("next", t, s, a);
                            },
                            function (t) {
                              n("throw", t, s, a);
                            },
                          )
                        : e.resolve(l).then(
                            function (t) {
                              (h.value = t), s(h);
                            },
                            function (t) {
                              return n("throw", t, s, a);
                            },
                          );
                    }
                    a(u.arg);
                  }
                  var r;
                  o(this, "_invoke", {
                    value: function (t, i) {
                      function o() {
                        return new e(function (e, o) {
                          n(t, i, e, o);
                        });
                      }
                      return (r = r ? r.then(o, o) : o());
                    },
                  });
                }
                function S(e, n, i) {
                  var o = f;
                  return function (r, s) {
                    if (o === p)
                      throw new Error("Generator is already running");
                    if (o === _) {
                      if ("throw" === r) throw s;
                      return { value: t, done: !0 };
                    }
                    for (i.method = r, i.arg = s; ; ) {
                      var a = i.delegate;
                      if (a) {
                        var u = E(a, i);
                        if (u) {
                          if (u === v) continue;
                          return u;
                        }
                      }
                      if ("next" === i.method) i.sent = i._sent = i.arg;
                      else if ("throw" === i.method) {
                        if (o === f) throw ((o = _), i.arg);
                        i.dispatchException(i.arg);
                      } else "return" === i.method && i.abrupt("return", i.arg);
                      o = p;
                      var h = c(e, n, i);
                      if ("normal" === h.type) {
                        if (((o = i.done ? _ : d), h.arg === v)) continue;
                        return { value: h.arg, done: i.done };
                      }
                      "throw" === h.type &&
                        ((o = _), (i.method = "throw"), (i.arg = h.arg));
                    }
                  };
                }
                function E(e, n) {
                  var i = n.method,
                    o = e.iterator[i];
                  if (o === t)
                    return (
                      (n.delegate = null),
                      ("throw" === i &&
                        e.iterator.return &&
                        ((n.method = "return"),
                        (n.arg = t),
                        E(e, n),
                        "throw" === n.method)) ||
                        ("return" !== i &&
                          ((n.method = "throw"),
                          (n.arg = new TypeError(
                            "The iterator does not provide a '" +
                              i +
                              "' method",
                          )))),
                      v
                    );
                  var r = c(o, e.iterator, n.arg);
                  if ("throw" === r.type)
                    return (
                      (n.method = "throw"),
                      (n.arg = r.arg),
                      (n.delegate = null),
                      v
                    );
                  var s = r.arg;
                  return s
                    ? s.done
                      ? ((n[e.resultName] = s.value),
                        (n.next = e.nextLoc),
                        "return" !== n.method &&
                          ((n.method = "next"), (n.arg = t)),
                        (n.delegate = null),
                        v)
                      : s
                    : ((n.method = "throw"),
                      (n.arg = new TypeError(
                        "iterator result is not an object",
                      )),
                      (n.delegate = null),
                      v);
                }
                function k(t) {
                  var e = { tryLoc: t[0] };
                  1 in t && (e.catchLoc = t[1]),
                    2 in t && ((e.finallyLoc = t[2]), (e.afterLoc = t[3])),
                    this.tryEntries.push(e);
                }
                function z(t) {
                  var e = t.completion || {};
                  (e.type = "normal"), delete e.arg, (t.completion = e);
                }
                function A(t) {
                  (this.tryEntries = [{ tryLoc: "root" }]),
                    t.forEach(k, this),
                    this.reset(!0);
                }
                function O(e) {
                  if (e || "" === e) {
                    var n = e[s];
                    if (n) return n.call(e);
                    if ("function" == typeof e.next) return e;
                    if (!isNaN(e.length)) {
                      var o = -1,
                        r = function n() {
                          for (; ++o < e.length; )
                            if (i.call(e, o))
                              return (n.value = e[o]), (n.done = !1), n;
                          return (n.value = t), (n.done = !0), n;
                        };
                      return (r.next = r);
                    }
                  }
                  throw new TypeError(m(e) + " is not iterable");
                }
                return (
                  (w.prototype = x),
                  o(P, "constructor", { value: x, configurable: !0 }),
                  o(x, "constructor", { value: w, configurable: !0 }),
                  (w.displayName = h(x, u, "GeneratorFunction")),
                  (e.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return (
                      !!e &&
                      (e === w ||
                        "GeneratorFunction" === (e.displayName || e.name))
                    );
                  }),
                  (e.mark = function (t) {
                    return (
                      Object.setPrototypeOf
                        ? Object.setPrototypeOf(t, x)
                        : ((t.__proto__ = x), h(t, u, "GeneratorFunction")),
                      (t.prototype = Object.create(P)),
                      t
                    );
                  }),
                  (e.awrap = function (t) {
                    return { __await: t };
                  }),
                  M(C.prototype),
                  h(C.prototype, a, function () {
                    return this;
                  }),
                  (e.AsyncIterator = C),
                  (e.async = function (t, n, i, o, r) {
                    void 0 === r && (r = Promise);
                    var s = new C(l(t, n, i, o), r);
                    return e.isGeneratorFunction(n)
                      ? s
                      : s.next().then(function (t) {
                          return t.done ? t.value : s.next();
                        });
                  }),
                  M(P),
                  h(P, u, "Generator"),
                  h(P, s, function () {
                    return this;
                  }),
                  h(P, "toString", function () {
                    return "[object Generator]";
                  }),
                  (e.keys = function (t) {
                    var e = Object(t),
                      n = [];
                    for (var i in e) n.push(i);
                    return (
                      n.reverse(),
                      function t() {
                        for (; n.length; ) {
                          var i = n.pop();
                          if (i in e) return (t.value = i), (t.done = !1), t;
                        }
                        return (t.done = !0), t;
                      }
                    );
                  }),
                  (e.values = O),
                  (A.prototype = {
                    constructor: A,
                    reset: function (e) {
                      if (
                        ((this.prev = 0),
                        (this.next = 0),
                        (this.sent = this._sent = t),
                        (this.done = !1),
                        (this.delegate = null),
                        (this.method = "next"),
                        (this.arg = t),
                        this.tryEntries.forEach(z),
                        !e)
                      )
                        for (var n in this)
                          "t" === n.charAt(0) &&
                            i.call(this, n) &&
                            !isNaN(+n.slice(1)) &&
                            (this[n] = t);
                    },
                    stop: function () {
                      this.done = !0;
                      var t = this.tryEntries[0].completion;
                      if ("throw" === t.type) throw t.arg;
                      return this.rval;
                    },
                    dispatchException: function (e) {
                      if (this.done) throw e;
                      var n = this;
                      function o(i, o) {
                        return (
                          (a.type = "throw"),
                          (a.arg = e),
                          (n.next = i),
                          o && ((n.method = "next"), (n.arg = t)),
                          !!o
                        );
                      }
                      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                        var s = this.tryEntries[r],
                          a = s.completion;
                        if ("root" === s.tryLoc) return o("end");
                        if (s.tryLoc <= this.prev) {
                          var u = i.call(s, "catchLoc"),
                            h = i.call(s, "finallyLoc");
                          if (u && h) {
                            if (this.prev < s.catchLoc)
                              return o(s.catchLoc, !0);
                            if (this.prev < s.finallyLoc)
                              return o(s.finallyLoc);
                          } else if (u) {
                            if (this.prev < s.catchLoc)
                              return o(s.catchLoc, !0);
                          } else {
                            if (!h)
                              throw new Error(
                                "try statement without catch or finally",
                              );
                            if (this.prev < s.finallyLoc)
                              return o(s.finallyLoc);
                          }
                        }
                      }
                    },
                    abrupt: function (t, e) {
                      for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var o = this.tryEntries[n];
                        if (
                          o.tryLoc <= this.prev &&
                          i.call(o, "finallyLoc") &&
                          this.prev < o.finallyLoc
                        ) {
                          var r = o;
                          break;
                        }
                      }
                      r &&
                        ("break" === t || "continue" === t) &&
                        r.tryLoc <= e &&
                        e <= r.finallyLoc &&
                        (r = null);
                      var s = r ? r.completion : {};
                      return (
                        (s.type = t),
                        (s.arg = e),
                        r
                          ? ((this.method = "next"),
                            (this.next = r.finallyLoc),
                            v)
                          : this.complete(s)
                      );
                    },
                    complete: function (t, e) {
                      if ("throw" === t.type) throw t.arg;
                      return (
                        "break" === t.type || "continue" === t.type
                          ? (this.next = t.arg)
                          : "return" === t.type
                            ? ((this.rval = this.arg = t.arg),
                              (this.method = "return"),
                              (this.next = "end"))
                            : "normal" === t.type && e && (this.next = e),
                        v
                      );
                    },
                    finish: function (t) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.finallyLoc === t)
                          return (
                            this.complete(n.completion, n.afterLoc), z(n), v
                          );
                      }
                    },
                    catch: function (t) {
                      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var n = this.tryEntries[e];
                        if (n.tryLoc === t) {
                          var i = n.completion;
                          if ("throw" === i.type) {
                            var o = i.arg;
                            z(n);
                          }
                          return o;
                        }
                      }
                      throw new Error("illegal catch attempt");
                    },
                    delegateYield: function (e, n, i) {
                      return (
                        (this.delegate = {
                          iterator: O(e),
                          resultName: n,
                          nextLoc: i,
                        }),
                        "next" === this.method && (this.arg = t),
                        v
                      );
                    },
                  }),
                  e
                );
              }
              function v(t, e, n, i, o, r, s) {
                try {
                  var a = t[r](s),
                    u = a.value;
                } catch (t) {
                  return void n(t);
                }
                a.done ? e(u) : Promise.resolve(u).then(i, o);
              }
              function y(t) {
                return w.apply(this, arguments);
              }
              function w() {
                var t;
                return (
                  (t = g().mark(function t(e) {
                    var n, i, o;
                    return g().wrap(
                      function (t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                (0, a.fw)(),
                                (n = (0, u.lQ)(e)),
                                (0, a.Op)("<p>" + n + "</p>"),
                                (t.prev = 3),
                                (0, p.q)("fetching time frames"),
                                (t.next = 7),
                                (0, r.LM)((0, u.Z3)(e))
                              );
                            case 7:
                              (i = t.sent),
                                (0, p.q)(i),
                                i.firstTimeStamp || i.lastTimeStamp
                                  ? ((0, p.q)(
                                      "timeframes: " +
                                        i.firstTimeStamp +
                                        "-" +
                                        i.lastTimeStamp,
                                    ),
                                    (o =
                                      "   , Data received from " +
                                      i.firstTimeStamp.substring(0, 10) +
                                      " to " +
                                      i.lastTimeStamp.substring(0, 10)),
                                    (0, a.Op)("<p>" + n + ", " + o + "</p>"))
                                  : "no data collected" === i.message
                                    ? (0, a.Op)(
                                        "<p>" + n + ", " + i.message + "</p>",
                                      )
                                    : "error" === i.message &&
                                      (0, a.Sj)(
                                        "error fetching timeframe data",
                                      ),
                                (t.next = 16);
                              break;
                            case 12:
                              (t.prev = 12),
                                (t.t0 = t.catch(3)),
                                console.error(t.t0),
                                (0, a.Sj)("Error fetching Counters");
                            case 16:
                            case "end":
                              return t.stop();
                          }
                      },
                      t,
                      null,
                      [[3, 12]],
                    );
                  })),
                  (w = function () {
                    var e = this,
                      n = arguments;
                    return new Promise(function (i, o) {
                      var r = t.apply(e, n);
                      function s(t) {
                        v(r, i, o, s, a, "next", t);
                      }
                      function a(t) {
                        v(r, i, o, s, a, "throw", t);
                      }
                      s(void 0);
                    });
                  }),
                  w.apply(this, arguments)
                );
              }
              function x(t) {
                (0, p.q)("bringUpVisualisation");
                var e = (0, h.wk)();
                (0, a.rR)(), (0, c.NV)(!1), y(t), (0, f.f)((0, u.Z3)(t));
                var n = "",
                  i = new Date(),
                  s = new Date(i);
                s.setDate(i.getDate() + 1);
                var l = new Date(i);
                l.setDate(i.getDate() - 30);
                var d = e.startDate,
                  _ = e.endDate,
                  m = _ < s && d >= l;
                if (
                  ((0, p.q)("isTimeWindowWithinDefault" + m),
                  (n = (0, r.q0)((0, u.Z3)(t), l, s)),
                  (0, r.zw)(n)
                    .then(function (t) {
                      (0, p.q)("csv read  - Number of rows:", t.length),
                        (0, o.qr)(t, 0, 1, "viz-hour", "past hour"),
                        (0, o.qr)(t, 1, 0, "viz-day", "today"),
                        (0, o.qr)(t, 7, 0, "viz-week", "past week"),
                        (0, o.qr)(t, 30, 0, "viz-month", "past month"),
                        m &&
                          ((0, o.Nc)(t, d, _, "viz-custom", (0, h.w6)()),
                          (0, a.LT)(),
                          (0, c.NV)(!0));
                    })
                    .catch(function (t) {
                      (0, p.q)(t),
                        console.error("Error loading CSV file:", t),
                        (0, a.Sj)("Error fetching observations"),
                        (0, a.LT)();
                    }),
                  !1 === m)
                ) {
                  (0, p.q)(" custom outside default ");
                  var g = new Date(_ + 1);
                  (0, p.q)(g),
                    (n = (0, r.q0)((0, u.Z3)(t), d, g)),
                    (0, r.zw)(n)
                      .then(function (t) {
                        (0, o.Nc)(t, d, _, "viz-custom", (0, h.w6)()),
                          (0, a.LT)(),
                          (0, c.NV)(!0);
                      })
                      .catch(function (t) {
                        console.error("Error fetching CSV file:", t),
                          (0, a.Sj)("Error fetching Observations"),
                          (0, a.LT)();
                      });
                }
              }
              ([s, l, f, d] = _.then ? (await _)() : _),
                document.addEventListener("DOMContentLoaded", function () {
                  (0, l.o5)(),
                    (0, f.L)(),
                    (0, c.wY)(),
                    (0, h.gZ)(),
                    (0, h.Pq)(),
                    (0, c.ui)();
                }),
                (0, s.df)([60.18, 24.93], 12),
                (0, a.rR)();
              try {
                (0, d.B_)(await (0, r.pB)());
              } catch (b) {
                console.error(b), (0, a.Sj)("Error fetching Counters");
              }
              (0, a.LT)(), i();
            } catch (L) {
              i(L);
            }
          },
          1,
        );
      },
      821: (t, e, n) => {
        "use strict";
        n.a(t, async (t, i) => {
          try {
            n.d(e, { Hd: () => _, Tb: () => m, Um: () => g, df: () => p });
            var o,
              r,
              s = n(243),
              a = n(163),
              u = t([a]);
            function h() {
              throw new TypeError(
                "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
              );
            }
            function l(t, e) {
              if (t) {
                if ("string" == typeof t) return c(t, e);
                var n = Object.prototype.toString.call(t).slice(8, -1);
                return (
                  "Object" === n && t.constructor && (n = t.constructor.name),
                  "Map" === n || "Set" === n
                    ? Array.from(t)
                    : "Arguments" === n ||
                        /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                      ? c(t, e)
                      : void 0
                );
              }
            }
            function c(t, e) {
              (null == e || e > t.length) && (e = t.length);
              for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
              return i;
            }
            function f(t, e) {
              var n =
                null == t
                  ? null
                  : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
                    t["@@iterator"];
              if (null != n) {
                var i,
                  o,
                  r,
                  s,
                  a = [],
                  u = !0,
                  h = !1;
                try {
                  if (((r = (n = n.call(t)).next), 0 === e)) {
                    if (Object(n) !== n) return;
                    u = !1;
                  } else
                    for (
                      ;
                      !(u = (i = r.call(n)).done) &&
                      (a.push(i.value), a.length !== e);
                      u = !0
                    );
                } catch (t) {
                  (h = !0), (o = t);
                } finally {
                  try {
                    if (
                      !u &&
                      null != n.return &&
                      ((s = n.return()), Object(s) !== s)
                    )
                      return;
                  } finally {
                    if (h) throw o;
                  }
                }
                return a;
              }
            }
            function d(t) {
              if (Array.isArray(t)) return t;
            }
            function p(t, e) {
              (o = s.map("map").setView(t, e)),
                s
                  .tileLayer(
                    "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                    {
                      attribution:
                        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                    },
                  )
                  .addTo(o),
                (0, a.$h)(o);
            }
            function _(t) {
              o.panTo(new s.LatLng(t.coordinates[1], t.coordinates[0]));
            }
            function m(t) {
              o.removeLayer(r), g(t);
            }
            function g(t) {
              var e = JSON.parse(JSON.stringify(t));
              (e.features = e.features.filter(function (t) {
                return t.properties.show_on_map;
              })),
                (r = s
                  .geoJSON(e, {
                    onEachFeature: function (t, e) {
                      if (t.properties) {
                        var n = Object.entries(t.properties)
                            .map(function (t) {
                              var e,
                                n =
                                  (2, d((e = t)) || f(e, 2) || l(e, 2) || h()),
                                i = n[0],
                                o = n[1];
                              return "\n            <strong>"
                                .concat(i, ":</strong> ")
                                .concat(o, "<br/>\n          ");
                            })
                            .join(""),
                          i = "form" + t.properties.id,
                          o =
                            n +
                            '<form id="' +
                            i +
                            '">             <button type="submit">Show Observations</button>             </form>';
                        e.bindPopup(o), (0, a.oz)(e, t, i);
                      }
                    },
                  })
                  .addTo(o));
            }
            (a = (u.then ? (await u)() : u)[0]), i();
          } catch (v) {
            i(v);
          }
        });
      },
      127: (t, e, n) => {
        "use strict";
        n.d(e, { Nc: () => f, _d: () => l, qr: () => c });
        var i = n(166),
          o = n(80);
        function r(t, e) {
          (null == e || e > t.length) && (e = t.length);
          for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
          return i;
        }
        function s(t, e, n, i, o, r) {
          var s = "line line-" + o + "-" + i;
          t.append("path")
            .data([n])
            .attr("class", s)
            .attr("d", e)
            .attr("fill", "none")
            .style("stroke", r(i));
        }
        function a(t, e, n, i) {
          var o = i + "-legend",
            r = t
              .selectAll("." + o)
              .data(e)
              .enter()
              .append("div")
              .attr("class", "legend-item " + o);
          r
            .append("div")
            .attr("class", "legend-color")
            .style("background-color", function (t) {
              return n(t.direction);
            }),
            r
              .append("div")
              .attr("class", "legend-text")
              .text(function (t) {
                return t.direction + " " + i;
              });
        }
        function u(t) {
          return i.PKp().domain(t).range(["blue", "green"]);
        }
        function h(t) {
          return i.PKp().domain(t).range(["red", "orange"]);
        }
        function l() {
          for (var t = 0; t < 6; t++) {
            var e = i.Ys("svg");
            e.empty() ||
              ((0, o.q)("remove svg in bringUpMeasurementsOverlay "),
              e.remove());
          }
        }
        function c(t, e, n, i, o) {
          var r = new Date(),
            s = new Date();
          s.setDate(r.getDate() - e),
            s.setHours(r.getHours() - n),
            f(t, s, r, i, o);
        }
        function f(t, e, n, o, l) {
          var c = (function (t, e, n) {
            return t.filter(function (t) {
              var i = new Date(t.date);
              return i > e && i <= n;
            });
          })(t, e, n);
          !(function (t, e, n) {
            var o = document.getElementById(e);
            0 == t.length
              ? (o.innerHTML =
                  "<p>   No Data received in the Time Frame: " + n + "</p>")
              : ((o.innerHTML =
                  "<p>   Data received in the Time Frame: " + n + "</p>"),
                (function (t, e) {
                  var n = "#" + e,
                    o = i
                      .Ys(n)
                      .append("svg")
                      .attr("width", 460)
                      .attr("height", 350)
                      .append("g")
                      .attr("transform", "translate(20,5)"),
                    l = i.Xf().range([0, 430]),
                    c = i.BYU().range([335, 0]),
                    f = i.LLu(l),
                    d = i.y4O(c);
                  l.domain(
                    i.Wem(t, function (t) {
                      return t.date;
                    }),
                  ),
                    c.domain([
                      0,
                      i.Fp7(t, function (t) {
                        return Math.max(+t.value);
                      }),
                    ]);
                  var p,
                    _ = i
                      .jvg()
                      .x(function (t) {
                        return l(t.date);
                      })
                      .y(function (t) {
                        return c(+t.value);
                      });
                  if (0 !== t.length) {
                    var m = t.map(function (t) {
                        return t.direction;
                      }),
                      g =
                        (function (t) {
                          if (Array.isArray(t)) return r(t);
                        })((p = new Set(m))) ||
                        (function (t) {
                          if (
                            ("undefined" != typeof Symbol &&
                              null != t[Symbol.iterator]) ||
                            null != t["@@iterator"]
                          )
                            return Array.from(t);
                        })(p) ||
                        (function (t, e) {
                          if (t) {
                            if ("string" == typeof t) return r(t, e);
                            var n = Object.prototype.toString
                              .call(t)
                              .slice(8, -1);
                            return (
                              "Object" === n &&
                                t.constructor &&
                                (n = t.constructor.name),
                              "Map" === n || "Set" === n
                                ? Array.from(t)
                                : "Arguments" === n ||
                                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                      n,
                                    )
                                  ? r(t, e)
                                  : void 0
                            );
                          }
                        })(p) ||
                        (function () {
                          throw new TypeError(
                            "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                          );
                        })(),
                      v = [],
                      y = [];
                    g.forEach(function (e, n) {
                      var i = t.filter(function (t) {
                        return (
                          "speed" === t.typeOfMeasurement && t.direction === e
                        );
                      });
                      s(o, _, i, e, "speed", h(g)),
                        v.push({ direction: e, data: i });
                      var r = t.filter(function (t) {
                        return (
                          "count" === t.typeOfMeasurement && t.direction === e
                        );
                      });
                      s(o, _, r, e, "count", u(g)),
                        y.push({ direction: e, data: r });
                    }),
                      o.append("g").attr("class", "x-axis").call(f.ticks(8)),
                      o.append("g").attr("class", "y-axis").call(d);
                    var w = i
                      .Ys(n)
                      .append("div")
                      .attr("class", "legend-container");
                    a(w, y, u(g), "count"), a(w, v, h(g), "speed");
                  }
                })(t, e));
          })(c, o, l);
        }
      },
      45: (t, e, n) => {
        "use strict";
        n.d(e, {
          Pq: () => a,
          dH: () => u,
          gZ: () => s,
          w6: () => l,
          wk: () => h,
        });
        var i = n(573),
          o = null,
          r = null;
        function s() {
          var t = new Date(),
            e = (0, i.p6)(t);
          document.getElementById("endDate").value = e;
          var n = new Date(t);
          n.setDate(t.getDate() - 60);
          var s = (0, i.p6)(n);
          (document.getElementById("startDate").value = s), (r = t), (o = n);
        }
        function a() {
          var t = document.getElementById("startDate"),
            e = document.getElementById("endDate");
          document.getElementById("errorMessage"),
            t.addEventListener("change", function () {
              (o = new Date(t.value)), u();
            }),
            e.addEventListener("change", function () {
              (r = new Date(e.value)), u();
            });
        }
        function u() {
          var t = document.getElementById("errorMessage");
          return null == o || null == r
            ? ((t.textContent = "Please select start and end date"), !1)
            : !(
                o > r &&
                ((t.textContent = "Selected start date greater than end date"),
                1)
              );
        }
        function h() {
          return { startDate: o, endDate: r };
        }
        function l() {
          var t = function (t) {
            return t.toISOString().slice(0, 10);
          };
          return t(o) + " - " + t(r);
        }
      },
      80: (t, e, n) => {
        "use strict";
        n.d(e, { q: () => o });
        var i = !0;
        function o(t) {
          i && console.log(t);
        }
      },
      227: (t, e, n) => {
        "use strict";
        n.d(e, { NV: () => a, ui: () => s, wY: () => r });
        var i = n(161),
          o = n(80);
        function r() {
          document.querySelectorAll(".btn").forEach(function (t) {
            t.addEventListener("click", function () {
              var t = this.getAttribute("data-target"),
                e = document.getElementById(t);
              document.querySelectorAll(".collapse").forEach(function (t) {
                t !== e && t.classList.remove("show");
              }),
                e.classList.toggle("show");
            });
          });
        }
        function s() {
          document
            .getElementById("closeContainerBtn")
            .addEventListener("click", function () {
              (0, o.q)("closeContainerBtn clicked"), a(!1), (0, i.xK)();
            });
        }
        function a(t) {
          (0, o.q)(t),
            !0 === t
              ? ((document.getElementById("vizOverlay").style.display = "flex"),
                document
                  .getElementById("multiCollapseVizCustom")
                  .classList.add("show"))
              : (document.getElementById("vizOverlay").style.display = "none");
        }
      },
      243: function (t, e) {
        !(function (t) {
          "use strict";
          function e(t) {
            var e, n, i, o;
            for (n = 1, i = arguments.length; n < i; n++)
              for (e in (o = arguments[n])) t[e] = o[e];
            return t;
          }
          var n =
            Object.create ||
            (function () {
              function t() {}
              return function (e) {
                return (t.prototype = e), new t();
              };
            })();
          function i(t, e) {
            var n = Array.prototype.slice;
            if (t.bind) return t.bind.apply(t, n.call(arguments, 1));
            var i = n.call(arguments, 2);
            return function () {
              return t.apply(
                e,
                i.length ? i.concat(n.call(arguments)) : arguments,
              );
            };
          }
          var o = 0;
          function r(t) {
            return "_leaflet_id" in t || (t._leaflet_id = ++o), t._leaflet_id;
          }
          function s(t, e, n) {
            var i, o, r, s;
            return (
              (s = function () {
                (i = !1), o && (r.apply(n, o), (o = !1));
              }),
              (r = function () {
                i
                  ? (o = arguments)
                  : (t.apply(n, arguments), setTimeout(s, e), (i = !0));
              }),
              r
            );
          }
          function a(t, e, n) {
            var i = e[1],
              o = e[0],
              r = i - o;
            return t === i && n ? t : ((((t - o) % r) + r) % r) + o;
          }
          function u() {
            return !1;
          }
          function h(t, e) {
            if (!1 === e) return t;
            var n = Math.pow(10, void 0 === e ? 6 : e);
            return Math.round(t * n) / n;
          }
          function l(t) {
            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "");
          }
          function c(t) {
            return l(t).split(/\s+/);
          }
          function f(t, e) {
            for (var i in (Object.prototype.hasOwnProperty.call(t, "options") ||
              (t.options = t.options ? n(t.options) : {}),
            e))
              t.options[i] = e[i];
            return t.options;
          }
          function d(t, e, n) {
            var i = [];
            for (var o in t)
              i.push(
                encodeURIComponent(n ? o.toUpperCase() : o) +
                  "=" +
                  encodeURIComponent(t[o]),
              );
            return (e && -1 !== e.indexOf("?") ? "&" : "?") + i.join("&");
          }
          var p = /\{ *([\w_ -]+) *\}/g;
          function _(t, e) {
            return t.replace(p, function (t, n) {
              var i = e[n];
              if (void 0 === i)
                throw new Error("No value provided for variable " + t);
              return "function" == typeof i && (i = i(e)), i;
            });
          }
          var m =
            Array.isArray ||
            function (t) {
              return "[object Array]" === Object.prototype.toString.call(t);
            };
          function g(t, e) {
            for (var n = 0; n < t.length; n++) if (t[n] === e) return n;
            return -1;
          }
          var v = "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=";
          function y(t) {
            return (
              window["webkit" + t] || window["moz" + t] || window["ms" + t]
            );
          }
          var w = 0;
          function x(t) {
            var e = +new Date(),
              n = Math.max(0, 16 - (e - w));
            return (w = e + n), window.setTimeout(t, n);
          }
          var b =
              window.requestAnimationFrame || y("RequestAnimationFrame") || x,
            T =
              window.cancelAnimationFrame ||
              y("CancelAnimationFrame") ||
              y("CancelRequestAnimationFrame") ||
              function (t) {
                window.clearTimeout(t);
              };
          function P(t, e, n) {
            if (!n || b !== x) return b.call(window, i(t, e));
            t.call(e);
          }
          function M(t) {
            t && T.call(window, t);
          }
          var C = {
            __proto__: null,
            extend: e,
            create: n,
            bind: i,
            get lastId() {
              return o;
            },
            stamp: r,
            throttle: s,
            wrapNum: a,
            falseFn: u,
            formatNum: h,
            trim: l,
            splitWords: c,
            setOptions: f,
            getParamString: d,
            template: _,
            isArray: m,
            indexOf: g,
            emptyImageUrl: v,
            requestFn: b,
            cancelFn: T,
            requestAnimFrame: P,
            cancelAnimFrame: M,
          };
          function S() {}
          (S.extend = function (t) {
            var i = function () {
                f(this),
                  this.initialize && this.initialize.apply(this, arguments),
                  this.callInitHooks();
              },
              o = (i.__super__ = this.prototype),
              r = n(o);
            for (var s in ((r.constructor = i), (i.prototype = r), this))
              Object.prototype.hasOwnProperty.call(this, s) &&
                "prototype" !== s &&
                "__super__" !== s &&
                (i[s] = this[s]);
            return (
              t.statics && e(i, t.statics),
              t.includes &&
                ((function (t) {
                  if ("undefined" != typeof L && L && L.Mixin) {
                    t = m(t) ? t : [t];
                    for (var e = 0; e < t.length; e++)
                      t[e] === L.Mixin.Events &&
                        console.warn(
                          "Deprecated include of L.Mixin.Events: this property will be removed in future releases, please inherit from L.Evented instead.",
                          new Error().stack,
                        );
                  }
                })(t.includes),
                e.apply(null, [r].concat(t.includes))),
              e(r, t),
              delete r.statics,
              delete r.includes,
              r.options &&
                ((r.options = o.options ? n(o.options) : {}),
                e(r.options, t.options)),
              (r._initHooks = []),
              (r.callInitHooks = function () {
                if (!this._initHooksCalled) {
                  o.callInitHooks && o.callInitHooks.call(this),
                    (this._initHooksCalled = !0);
                  for (var t = 0, e = r._initHooks.length; t < e; t++)
                    r._initHooks[t].call(this);
                }
              }),
              i
            );
          }),
            (S.include = function (t) {
              var n = this.prototype.options;
              return (
                e(this.prototype, t),
                t.options &&
                  ((this.prototype.options = n), this.mergeOptions(t.options)),
                this
              );
            }),
            (S.mergeOptions = function (t) {
              return e(this.prototype.options, t), this;
            }),
            (S.addInitHook = function (t) {
              var e = Array.prototype.slice.call(arguments, 1),
                n =
                  "function" == typeof t
                    ? t
                    : function () {
                        this[t].apply(this, e);
                      };
              return (
                (this.prototype._initHooks = this.prototype._initHooks || []),
                this.prototype._initHooks.push(n),
                this
              );
            });
          var E = {
            on: function (t, e, n) {
              if ("object" == typeof t) for (var i in t) this._on(i, t[i], e);
              else
                for (var o = 0, r = (t = c(t)).length; o < r; o++)
                  this._on(t[o], e, n);
              return this;
            },
            off: function (t, e, n) {
              if (arguments.length)
                if ("object" == typeof t)
                  for (var i in t) this._off(i, t[i], e);
                else {
                  t = c(t);
                  for (
                    var o = 1 === arguments.length, r = 0, s = t.length;
                    r < s;
                    r++
                  )
                    o ? this._off(t[r]) : this._off(t[r], e, n);
                }
              else delete this._events;
              return this;
            },
            _on: function (t, e, n, i) {
              if ("function" == typeof e) {
                if (!1 === this._listens(t, e, n)) {
                  n === this && (n = void 0);
                  var o = { fn: e, ctx: n };
                  i && (o.once = !0),
                    (this._events = this._events || {}),
                    (this._events[t] = this._events[t] || []),
                    this._events[t].push(o);
                }
              } else console.warn("wrong listener type: " + typeof e);
            },
            _off: function (t, e, n) {
              var i, o, r;
              if (this._events && (i = this._events[t]))
                if (1 !== arguments.length)
                  if ("function" == typeof e) {
                    var s = this._listens(t, e, n);
                    if (!1 !== s) {
                      var a = i[s];
                      this._firingCount &&
                        ((a.fn = u), (this._events[t] = i = i.slice())),
                        i.splice(s, 1);
                    }
                  } else console.warn("wrong listener type: " + typeof e);
                else {
                  if (this._firingCount)
                    for (o = 0, r = i.length; o < r; o++) i[o].fn = u;
                  delete this._events[t];
                }
            },
            fire: function (t, n, i) {
              if (!this.listens(t, i)) return this;
              var o = e({}, n, {
                type: t,
                target: this,
                sourceTarget: (n && n.sourceTarget) || this,
              });
              if (this._events) {
                var r = this._events[t];
                if (r) {
                  this._firingCount = this._firingCount + 1 || 1;
                  for (var s = 0, a = r.length; s < a; s++) {
                    var u = r[s],
                      h = u.fn;
                    u.once && this.off(t, h, u.ctx), h.call(u.ctx || this, o);
                  }
                  this._firingCount--;
                }
              }
              return i && this._propagateEvent(o), this;
            },
            listens: function (t, e, n, i) {
              "string" != typeof t &&
                console.warn('"string" type argument expected');
              var o = e;
              "function" != typeof e && ((i = !!e), (o = void 0), (n = void 0));
              var r = this._events && this._events[t];
              if (r && r.length && !1 !== this._listens(t, o, n)) return !0;
              if (i)
                for (var s in this._eventParents)
                  if (this._eventParents[s].listens(t, e, n, i)) return !0;
              return !1;
            },
            _listens: function (t, e, n) {
              if (!this._events) return !1;
              var i = this._events[t] || [];
              if (!e) return !!i.length;
              n === this && (n = void 0);
              for (var o = 0, r = i.length; o < r; o++)
                if (i[o].fn === e && i[o].ctx === n) return o;
              return !1;
            },
            once: function (t, e, n) {
              if ("object" == typeof t)
                for (var i in t) this._on(i, t[i], e, !0);
              else
                for (var o = 0, r = (t = c(t)).length; o < r; o++)
                  this._on(t[o], e, n, !0);
              return this;
            },
            addEventParent: function (t) {
              return (
                (this._eventParents = this._eventParents || {}),
                (this._eventParents[r(t)] = t),
                this
              );
            },
            removeEventParent: function (t) {
              return (
                this._eventParents && delete this._eventParents[r(t)], this
              );
            },
            _propagateEvent: function (t) {
              for (var n in this._eventParents)
                this._eventParents[n].fire(
                  t.type,
                  e({ layer: t.target, propagatedFrom: t.target }, t),
                  !0,
                );
            },
          };
          (E.addEventListener = E.on),
            (E.removeEventListener = E.clearAllEventListeners = E.off),
            (E.addOneTimeEventListener = E.once),
            (E.fireEvent = E.fire),
            (E.hasEventListeners = E.listens);
          var k = S.extend(E);
          function z(t, e, n) {
            (this.x = n ? Math.round(t) : t), (this.y = n ? Math.round(e) : e);
          }
          var A =
            Math.trunc ||
            function (t) {
              return t > 0 ? Math.floor(t) : Math.ceil(t);
            };
          function O(t, e, n) {
            return t instanceof z
              ? t
              : m(t)
                ? new z(t[0], t[1])
                : null == t
                  ? t
                  : "object" == typeof t && "x" in t && "y" in t
                    ? new z(t.x, t.y)
                    : new z(t, e, n);
          }
          function Z(t, e) {
            if (t)
              for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++)
                this.extend(n[i]);
          }
          function I(t, e) {
            return !t || t instanceof Z ? t : new Z(t, e);
          }
          function B(t, e) {
            if (t)
              for (var n = e ? [t, e] : t, i = 0, o = n.length; i < o; i++)
                this.extend(n[i]);
          }
          function N(t, e) {
            return t instanceof B ? t : new B(t, e);
          }
          function D(t, e, n) {
            if (isNaN(t) || isNaN(e))
              throw new Error("Invalid LatLng object: (" + t + ", " + e + ")");
            (this.lat = +t), (this.lng = +e), void 0 !== n && (this.alt = +n);
          }
          function j(t, e, n) {
            return t instanceof D
              ? t
              : m(t) && "object" != typeof t[0]
                ? 3 === t.length
                  ? new D(t[0], t[1], t[2])
                  : 2 === t.length
                    ? new D(t[0], t[1])
                    : null
                : null == t
                  ? t
                  : "object" == typeof t && "lat" in t
                    ? new D(t.lat, "lng" in t ? t.lng : t.lon, t.alt)
                    : void 0 === e
                      ? null
                      : new D(t, e, n);
          }
          (z.prototype = {
            clone: function () {
              return new z(this.x, this.y);
            },
            add: function (t) {
              return this.clone()._add(O(t));
            },
            _add: function (t) {
              return (this.x += t.x), (this.y += t.y), this;
            },
            subtract: function (t) {
              return this.clone()._subtract(O(t));
            },
            _subtract: function (t) {
              return (this.x -= t.x), (this.y -= t.y), this;
            },
            divideBy: function (t) {
              return this.clone()._divideBy(t);
            },
            _divideBy: function (t) {
              return (this.x /= t), (this.y /= t), this;
            },
            multiplyBy: function (t) {
              return this.clone()._multiplyBy(t);
            },
            _multiplyBy: function (t) {
              return (this.x *= t), (this.y *= t), this;
            },
            scaleBy: function (t) {
              return new z(this.x * t.x, this.y * t.y);
            },
            unscaleBy: function (t) {
              return new z(this.x / t.x, this.y / t.y);
            },
            round: function () {
              return this.clone()._round();
            },
            _round: function () {
              return (
                (this.x = Math.round(this.x)),
                (this.y = Math.round(this.y)),
                this
              );
            },
            floor: function () {
              return this.clone()._floor();
            },
            _floor: function () {
              return (
                (this.x = Math.floor(this.x)),
                (this.y = Math.floor(this.y)),
                this
              );
            },
            ceil: function () {
              return this.clone()._ceil();
            },
            _ceil: function () {
              return (
                (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this
              );
            },
            trunc: function () {
              return this.clone()._trunc();
            },
            _trunc: function () {
              return (this.x = A(this.x)), (this.y = A(this.y)), this;
            },
            distanceTo: function (t) {
              var e = (t = O(t)).x - this.x,
                n = t.y - this.y;
              return Math.sqrt(e * e + n * n);
            },
            equals: function (t) {
              return (t = O(t)).x === this.x && t.y === this.y;
            },
            contains: function (t) {
              return (
                (t = O(t)),
                Math.abs(t.x) <= Math.abs(this.x) &&
                  Math.abs(t.y) <= Math.abs(this.y)
              );
            },
            toString: function () {
              return "Point(" + h(this.x) + ", " + h(this.y) + ")";
            },
          }),
            (Z.prototype = {
              extend: function (t) {
                var e, n;
                if (!t) return this;
                if (t instanceof z || "number" == typeof t[0] || "x" in t)
                  e = n = O(t);
                else if (((e = (t = I(t)).min), (n = t.max), !e || !n))
                  return this;
                return (
                  this.min || this.max
                    ? ((this.min.x = Math.min(e.x, this.min.x)),
                      (this.max.x = Math.max(n.x, this.max.x)),
                      (this.min.y = Math.min(e.y, this.min.y)),
                      (this.max.y = Math.max(n.y, this.max.y)))
                    : ((this.min = e.clone()), (this.max = n.clone())),
                  this
                );
              },
              getCenter: function (t) {
                return O(
                  (this.min.x + this.max.x) / 2,
                  (this.min.y + this.max.y) / 2,
                  t,
                );
              },
              getBottomLeft: function () {
                return O(this.min.x, this.max.y);
              },
              getTopRight: function () {
                return O(this.max.x, this.min.y);
              },
              getTopLeft: function () {
                return this.min;
              },
              getBottomRight: function () {
                return this.max;
              },
              getSize: function () {
                return this.max.subtract(this.min);
              },
              contains: function (t) {
                var e, n;
                return (
                  (t =
                    "number" == typeof t[0] || t instanceof z
                      ? O(t)
                      : I(t)) instanceof Z
                    ? ((e = t.min), (n = t.max))
                    : (e = n = t),
                  e.x >= this.min.x &&
                    n.x <= this.max.x &&
                    e.y >= this.min.y &&
                    n.y <= this.max.y
                );
              },
              intersects: function (t) {
                t = I(t);
                var e = this.min,
                  n = this.max,
                  i = t.min,
                  o = t.max,
                  r = o.x >= e.x && i.x <= n.x,
                  s = o.y >= e.y && i.y <= n.y;
                return r && s;
              },
              overlaps: function (t) {
                t = I(t);
                var e = this.min,
                  n = this.max,
                  i = t.min,
                  o = t.max,
                  r = o.x > e.x && i.x < n.x,
                  s = o.y > e.y && i.y < n.y;
                return r && s;
              },
              isValid: function () {
                return !(!this.min || !this.max);
              },
              pad: function (t) {
                var e = this.min,
                  n = this.max,
                  i = Math.abs(e.x - n.x) * t,
                  o = Math.abs(e.y - n.y) * t;
                return I(O(e.x - i, e.y - o), O(n.x + i, n.y + o));
              },
              equals: function (t) {
                return (
                  !!t &&
                  ((t = I(t)),
                  this.min.equals(t.getTopLeft()) &&
                    this.max.equals(t.getBottomRight()))
                );
              },
            }),
            (B.prototype = {
              extend: function (t) {
                var e,
                  n,
                  i = this._southWest,
                  o = this._northEast;
                if (t instanceof D) (e = t), (n = t);
                else {
                  if (!(t instanceof B))
                    return t ? this.extend(j(t) || N(t)) : this;
                  if (((e = t._southWest), (n = t._northEast), !e || !n))
                    return this;
                }
                return (
                  i || o
                    ? ((i.lat = Math.min(e.lat, i.lat)),
                      (i.lng = Math.min(e.lng, i.lng)),
                      (o.lat = Math.max(n.lat, o.lat)),
                      (o.lng = Math.max(n.lng, o.lng)))
                    : ((this._southWest = new D(e.lat, e.lng)),
                      (this._northEast = new D(n.lat, n.lng))),
                  this
                );
              },
              pad: function (t) {
                var e = this._southWest,
                  n = this._northEast,
                  i = Math.abs(e.lat - n.lat) * t,
                  o = Math.abs(e.lng - n.lng) * t;
                return new B(
                  new D(e.lat - i, e.lng - o),
                  new D(n.lat + i, n.lng + o),
                );
              },
              getCenter: function () {
                return new D(
                  (this._southWest.lat + this._northEast.lat) / 2,
                  (this._southWest.lng + this._northEast.lng) / 2,
                );
              },
              getSouthWest: function () {
                return this._southWest;
              },
              getNorthEast: function () {
                return this._northEast;
              },
              getNorthWest: function () {
                return new D(this.getNorth(), this.getWest());
              },
              getSouthEast: function () {
                return new D(this.getSouth(), this.getEast());
              },
              getWest: function () {
                return this._southWest.lng;
              },
              getSouth: function () {
                return this._southWest.lat;
              },
              getEast: function () {
                return this._northEast.lng;
              },
              getNorth: function () {
                return this._northEast.lat;
              },
              contains: function (t) {
                t =
                  "number" == typeof t[0] || t instanceof D || "lat" in t
                    ? j(t)
                    : N(t);
                var e,
                  n,
                  i = this._southWest,
                  o = this._northEast;
                return (
                  t instanceof B
                    ? ((e = t.getSouthWest()), (n = t.getNorthEast()))
                    : (e = n = t),
                  e.lat >= i.lat &&
                    n.lat <= o.lat &&
                    e.lng >= i.lng &&
                    n.lng <= o.lng
                );
              },
              intersects: function (t) {
                t = N(t);
                var e = this._southWest,
                  n = this._northEast,
                  i = t.getSouthWest(),
                  o = t.getNorthEast(),
                  r = o.lat >= e.lat && i.lat <= n.lat,
                  s = o.lng >= e.lng && i.lng <= n.lng;
                return r && s;
              },
              overlaps: function (t) {
                t = N(t);
                var e = this._southWest,
                  n = this._northEast,
                  i = t.getSouthWest(),
                  o = t.getNorthEast(),
                  r = o.lat > e.lat && i.lat < n.lat,
                  s = o.lng > e.lng && i.lng < n.lng;
                return r && s;
              },
              toBBoxString: function () {
                return [
                  this.getWest(),
                  this.getSouth(),
                  this.getEast(),
                  this.getNorth(),
                ].join(",");
              },
              equals: function (t, e) {
                return (
                  !!t &&
                  ((t = N(t)),
                  this._southWest.equals(t.getSouthWest(), e) &&
                    this._northEast.equals(t.getNorthEast(), e))
                );
              },
              isValid: function () {
                return !(!this._southWest || !this._northEast);
              },
            }),
            (D.prototype = {
              equals: function (t, e) {
                return (
                  !!t &&
                  ((t = j(t)),
                  Math.max(
                    Math.abs(this.lat - t.lat),
                    Math.abs(this.lng - t.lng),
                  ) <= (void 0 === e ? 1e-9 : e))
                );
              },
              toString: function (t) {
                return "LatLng(" + h(this.lat, t) + ", " + h(this.lng, t) + ")";
              },
              distanceTo: function (t) {
                return H.distance(this, j(t));
              },
              wrap: function () {
                return H.wrapLatLng(this);
              },
              toBounds: function (t) {
                var e = (180 * t) / 40075017,
                  n = e / Math.cos((Math.PI / 180) * this.lat);
                return N(
                  [this.lat - e, this.lng - n],
                  [this.lat + e, this.lng + n],
                );
              },
              clone: function () {
                return new D(this.lat, this.lng, this.alt);
              },
            });
          var R,
            F = {
              latLngToPoint: function (t, e) {
                var n = this.projection.project(t),
                  i = this.scale(e);
                return this.transformation._transform(n, i);
              },
              pointToLatLng: function (t, e) {
                var n = this.scale(e),
                  i = this.transformation.untransform(t, n);
                return this.projection.unproject(i);
              },
              project: function (t) {
                return this.projection.project(t);
              },
              unproject: function (t) {
                return this.projection.unproject(t);
              },
              scale: function (t) {
                return 256 * Math.pow(2, t);
              },
              zoom: function (t) {
                return Math.log(t / 256) / Math.LN2;
              },
              getProjectedBounds: function (t) {
                if (this.infinite) return null;
                var e = this.projection.bounds,
                  n = this.scale(t);
                return new Z(
                  this.transformation.transform(e.min, n),
                  this.transformation.transform(e.max, n),
                );
              },
              infinite: !1,
              wrapLatLng: function (t) {
                var e = this.wrapLng ? a(t.lng, this.wrapLng, !0) : t.lng;
                return new D(
                  this.wrapLat ? a(t.lat, this.wrapLat, !0) : t.lat,
                  e,
                  t.alt,
                );
              },
              wrapLatLngBounds: function (t) {
                var e = t.getCenter(),
                  n = this.wrapLatLng(e),
                  i = e.lat - n.lat,
                  o = e.lng - n.lng;
                if (0 === i && 0 === o) return t;
                var r = t.getSouthWest(),
                  s = t.getNorthEast();
                return new B(
                  new D(r.lat - i, r.lng - o),
                  new D(s.lat - i, s.lng - o),
                );
              },
            },
            H = e({}, F, {
              wrapLng: [-180, 180],
              R: 6371e3,
              distance: function (t, e) {
                var n = Math.PI / 180,
                  i = t.lat * n,
                  o = e.lat * n,
                  r = Math.sin(((e.lat - t.lat) * n) / 2),
                  s = Math.sin(((e.lng - t.lng) * n) / 2),
                  a = r * r + Math.cos(i) * Math.cos(o) * s * s,
                  u = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
                return this.R * u;
              },
            }),
            U = 6378137,
            $ = {
              R: U,
              MAX_LATITUDE: 85.0511287798,
              project: function (t) {
                var e = Math.PI / 180,
                  n = this.MAX_LATITUDE,
                  i = Math.max(Math.min(n, t.lat), -n),
                  o = Math.sin(i * e);
                return new z(
                  this.R * t.lng * e,
                  (this.R * Math.log((1 + o) / (1 - o))) / 2,
                );
              },
              unproject: function (t) {
                var e = 180 / Math.PI;
                return new D(
                  (2 * Math.atan(Math.exp(t.y / this.R)) - Math.PI / 2) * e,
                  (t.x * e) / this.R,
                );
              },
              bounds: ((R = U * Math.PI), new Z([-R, -R], [R, R])),
            };
          function W(t, e, n, i) {
            if (m(t))
              return (
                (this._a = t[0]),
                (this._b = t[1]),
                (this._c = t[2]),
                void (this._d = t[3])
              );
            (this._a = t), (this._b = e), (this._c = n), (this._d = i);
          }
          function q(t, e, n, i) {
            return new W(t, e, n, i);
          }
          W.prototype = {
            transform: function (t, e) {
              return this._transform(t.clone(), e);
            },
            _transform: function (t, e) {
              return (
                (e = e || 1),
                (t.x = e * (this._a * t.x + this._b)),
                (t.y = e * (this._c * t.y + this._d)),
                t
              );
            },
            untransform: function (t, e) {
              return (
                (e = e || 1),
                new z(
                  (t.x / e - this._b) / this._a,
                  (t.y / e - this._d) / this._c,
                )
              );
            },
          };
          var V = e({}, H, {
              code: "EPSG:3857",
              projection: $,
              transformation: (function () {
                var t = 0.5 / (Math.PI * $.R);
                return q(t, 0.5, -t, 0.5);
              })(),
            }),
            Y = e({}, V, { code: "EPSG:900913" });
          function G(t) {
            return document.createElementNS("http://www.w3.org/2000/svg", t);
          }
          function X(t, e) {
            var n,
              i,
              o,
              r,
              s,
              a,
              u = "";
            for (n = 0, o = t.length; n < o; n++) {
              for (i = 0, r = (s = t[n]).length; i < r; i++)
                u += (i ? "L" : "M") + (a = s[i]).x + " " + a.y;
              u += e ? (Zt.svg ? "z" : "x") : "";
            }
            return u || "M0 0";
          }
          var K,
            J = document.documentElement.style,
            Q = "ActiveXObject" in window,
            tt = Q && !document.addEventListener,
            et = "msLaunchUri" in navigator && !("documentMode" in document),
            nt = Ot("webkit"),
            it = Ot("android"),
            ot = Ot("android 2") || Ot("android 3"),
            rt = parseInt(
              /WebKit\/([0-9]+)|$/.exec(navigator.userAgent)[1],
              10,
            ),
            st = it && Ot("Google") && rt < 537 && !("AudioNode" in window),
            at = !!window.opera,
            ut = !et && Ot("chrome"),
            ht = Ot("gecko") && !nt && !at && !Q,
            lt = !ut && Ot("safari"),
            ct = Ot("phantom"),
            ft = "OTransition" in J,
            dt = 0 === navigator.platform.indexOf("Win"),
            pt = Q && "transition" in J,
            _t =
              "WebKitCSSMatrix" in window &&
              "m11" in new window.WebKitCSSMatrix() &&
              !ot,
            mt = "MozPerspective" in J,
            gt = !window.L_DISABLE_3D && (pt || _t || mt) && !ft && !ct,
            vt = "undefined" != typeof orientation || Ot("mobile"),
            yt = vt && nt,
            wt = vt && _t,
            xt = !window.PointerEvent && window.MSPointerEvent,
            bt = !(!window.PointerEvent && !xt),
            Lt = "ontouchstart" in window || !!window.TouchEvent,
            Tt = !window.L_NO_TOUCH && (Lt || bt),
            Pt = vt && at,
            Mt = vt && ht,
            Ct =
              (window.devicePixelRatio ||
                window.screen.deviceXDPI / window.screen.logicalXDPI) > 1,
            St = (function () {
              var t = !1;
              try {
                var e = Object.defineProperty({}, "passive", {
                  get: function () {
                    t = !0;
                  },
                });
                window.addEventListener("testPassiveEventSupport", u, e),
                  window.removeEventListener("testPassiveEventSupport", u, e);
              } catch (t) {}
              return t;
            })(),
            Et = !!document.createElement("canvas").getContext,
            kt = !(!document.createElementNS || !G("svg").createSVGRect),
            zt =
              !!kt &&
              (((K = document.createElement("div")).innerHTML = "<svg/>"),
              "http://www.w3.org/2000/svg" ===
                (K.firstChild && K.firstChild.namespaceURI)),
            At =
              !kt &&
              (function () {
                try {
                  var t = document.createElement("div");
                  t.innerHTML = '<v:shape adj="1"/>';
                  var e = t.firstChild;
                  return (
                    (e.style.behavior = "url(#default#VML)"),
                    e && "object" == typeof e.adj
                  );
                } catch (t) {
                  return !1;
                }
              })();
          function Ot(t) {
            return navigator.userAgent.toLowerCase().indexOf(t) >= 0;
          }
          var Zt = {
              ie: Q,
              ielt9: tt,
              edge: et,
              webkit: nt,
              android: it,
              android23: ot,
              androidStock: st,
              opera: at,
              chrome: ut,
              gecko: ht,
              safari: lt,
              phantom: ct,
              opera12: ft,
              win: dt,
              ie3d: pt,
              webkit3d: _t,
              gecko3d: mt,
              any3d: gt,
              mobile: vt,
              mobileWebkit: yt,
              mobileWebkit3d: wt,
              msPointer: xt,
              pointer: bt,
              touch: Tt,
              touchNative: Lt,
              mobileOpera: Pt,
              mobileGecko: Mt,
              retina: Ct,
              passiveEvents: St,
              canvas: Et,
              svg: kt,
              vml: At,
              inlineSvg: zt,
              mac: 0 === navigator.platform.indexOf("Mac"),
              linux: 0 === navigator.platform.indexOf("Linux"),
            },
            It = Zt.msPointer ? "MSPointerDown" : "pointerdown",
            Bt = Zt.msPointer ? "MSPointerMove" : "pointermove",
            Nt = Zt.msPointer ? "MSPointerUp" : "pointerup",
            Dt = Zt.msPointer ? "MSPointerCancel" : "pointercancel",
            jt = {
              touchstart: It,
              touchmove: Bt,
              touchend: Nt,
              touchcancel: Dt,
            },
            Rt = {
              touchstart: function (t, e) {
                e.MSPOINTER_TYPE_TOUCH &&
                  e.pointerType === e.MSPOINTER_TYPE_TOUCH &&
                  De(e),
                  Vt(t, e);
              },
              touchmove: Vt,
              touchend: Vt,
              touchcancel: Vt,
            },
            Ft = {},
            Ht = !1;
          function Ut(t, e, n) {
            return (
              "touchstart" === e &&
                (Ht ||
                  (document.addEventListener(It, $t, !0),
                  document.addEventListener(Bt, Wt, !0),
                  document.addEventListener(Nt, qt, !0),
                  document.addEventListener(Dt, qt, !0),
                  (Ht = !0))),
              Rt[e]
                ? ((n = Rt[e].bind(this, n)),
                  t.addEventListener(jt[e], n, !1),
                  n)
                : (console.warn("wrong event specified:", e), u)
            );
          }
          function $t(t) {
            Ft[t.pointerId] = t;
          }
          function Wt(t) {
            Ft[t.pointerId] && (Ft[t.pointerId] = t);
          }
          function qt(t) {
            delete Ft[t.pointerId];
          }
          function Vt(t, e) {
            if (e.pointerType !== (e.MSPOINTER_TYPE_MOUSE || "mouse")) {
              for (var n in ((e.touches = []), Ft)) e.touches.push(Ft[n]);
              (e.changedTouches = [e]), t(e);
            }
          }
          var Yt = 200;
          var Gt,
            Xt,
            Kt,
            Jt,
            Qt,
            te = me([
              "transform",
              "webkitTransform",
              "OTransform",
              "MozTransform",
              "msTransform",
            ]),
            ee = me([
              "webkitTransition",
              "transition",
              "OTransition",
              "MozTransition",
              "msTransition",
            ]),
            ne =
              "webkitTransition" === ee || "OTransition" === ee
                ? ee + "End"
                : "transitionend";
          function ie(t) {
            return "string" == typeof t ? document.getElementById(t) : t;
          }
          function oe(t, e) {
            var n = t.style[e] || (t.currentStyle && t.currentStyle[e]);
            if ((!n || "auto" === n) && document.defaultView) {
              var i = document.defaultView.getComputedStyle(t, null);
              n = i ? i[e] : null;
            }
            return "auto" === n ? null : n;
          }
          function re(t, e, n) {
            var i = document.createElement(t);
            return (i.className = e || ""), n && n.appendChild(i), i;
          }
          function se(t) {
            var e = t.parentNode;
            e && e.removeChild(t);
          }
          function ae(t) {
            for (; t.firstChild; ) t.removeChild(t.firstChild);
          }
          function ue(t) {
            var e = t.parentNode;
            e && e.lastChild !== t && e.appendChild(t);
          }
          function he(t) {
            var e = t.parentNode;
            e && e.firstChild !== t && e.insertBefore(t, e.firstChild);
          }
          function le(t, e) {
            if (void 0 !== t.classList) return t.classList.contains(e);
            var n = pe(t);
            return (
              n.length > 0 && new RegExp("(^|\\s)" + e + "(\\s|$)").test(n)
            );
          }
          function ce(t, e) {
            if (void 0 !== t.classList)
              for (var n = c(e), i = 0, o = n.length; i < o; i++)
                t.classList.add(n[i]);
            else if (!le(t, e)) {
              var r = pe(t);
              de(t, (r ? r + " " : "") + e);
            }
          }
          function fe(t, e) {
            void 0 !== t.classList
              ? t.classList.remove(e)
              : de(t, l((" " + pe(t) + " ").replace(" " + e + " ", " ")));
          }
          function de(t, e) {
            void 0 === t.className.baseVal
              ? (t.className = e)
              : (t.className.baseVal = e);
          }
          function pe(t) {
            return (
              t.correspondingElement && (t = t.correspondingElement),
              void 0 === t.className.baseVal ? t.className : t.className.baseVal
            );
          }
          function _e(t, e) {
            "opacity" in t.style
              ? (t.style.opacity = e)
              : "filter" in t.style &&
                (function (t, e) {
                  var n = !1,
                    i = "DXImageTransform.Microsoft.Alpha";
                  try {
                    n = t.filters.item(i);
                  } catch (t) {
                    if (1 === e) return;
                  }
                  (e = Math.round(100 * e)),
                    n
                      ? ((n.Enabled = 100 !== e), (n.Opacity = e))
                      : (t.style.filter +=
                          " progid:" + i + "(opacity=" + e + ")");
                })(t, e);
          }
          function me(t) {
            for (
              var e = document.documentElement.style, n = 0;
              n < t.length;
              n++
            )
              if (t[n] in e) return t[n];
            return !1;
          }
          function ge(t, e, n) {
            var i = e || new z(0, 0);
            t.style[te] =
              (Zt.ie3d
                ? "translate(" + i.x + "px," + i.y + "px)"
                : "translate3d(" + i.x + "px," + i.y + "px,0)") +
              (n ? " scale(" + n + ")" : "");
          }
          function ve(t, e) {
            (t._leaflet_pos = e),
              Zt.any3d
                ? ge(t, e)
                : ((t.style.left = e.x + "px"), (t.style.top = e.y + "px"));
          }
          function ye(t) {
            return t._leaflet_pos || new z(0, 0);
          }
          if ("onselectstart" in document)
            (Gt = function () {
              Se(window, "selectstart", De);
            }),
              (Xt = function () {
                ke(window, "selectstart", De);
              });
          else {
            var we = me([
              "userSelect",
              "WebkitUserSelect",
              "OUserSelect",
              "MozUserSelect",
              "msUserSelect",
            ]);
            (Gt = function () {
              if (we) {
                var t = document.documentElement.style;
                (Kt = t[we]), (t[we] = "none");
              }
            }),
              (Xt = function () {
                we &&
                  ((document.documentElement.style[we] = Kt), (Kt = void 0));
              });
          }
          function xe() {
            Se(window, "dragstart", De);
          }
          function be() {
            ke(window, "dragstart", De);
          }
          function Le(t) {
            for (; -1 === t.tabIndex; ) t = t.parentNode;
            t.style &&
              (Te(),
              (Jt = t),
              (Qt = t.style.outlineStyle),
              (t.style.outlineStyle = "none"),
              Se(window, "keydown", Te));
          }
          function Te() {
            Jt &&
              ((Jt.style.outlineStyle = Qt),
              (Jt = void 0),
              (Qt = void 0),
              ke(window, "keydown", Te));
          }
          function Pe(t) {
            do {
              t = t.parentNode;
            } while (
              !((t.offsetWidth && t.offsetHeight) || t === document.body)
            );
            return t;
          }
          function Me(t) {
            var e = t.getBoundingClientRect();
            return {
              x: e.width / t.offsetWidth || 1,
              y: e.height / t.offsetHeight || 1,
              boundingClientRect: e,
            };
          }
          var Ce = {
            __proto__: null,
            TRANSFORM: te,
            TRANSITION: ee,
            TRANSITION_END: ne,
            get: ie,
            getStyle: oe,
            create: re,
            remove: se,
            empty: ae,
            toFront: ue,
            toBack: he,
            hasClass: le,
            addClass: ce,
            removeClass: fe,
            setClass: de,
            getClass: pe,
            setOpacity: _e,
            testProp: me,
            setTransform: ge,
            setPosition: ve,
            getPosition: ye,
            get disableTextSelection() {
              return Gt;
            },
            get enableTextSelection() {
              return Xt;
            },
            disableImageDrag: xe,
            enableImageDrag: be,
            preventOutline: Le,
            restoreOutline: Te,
            getSizedParentNode: Pe,
            getScale: Me,
          };
          function Se(t, e, n, i) {
            if (e && "object" == typeof e) for (var o in e) Oe(t, o, e[o], n);
            else
              for (var r = 0, s = (e = c(e)).length; r < s; r++)
                Oe(t, e[r], n, i);
            return this;
          }
          var Ee = "_leaflet_events";
          function ke(t, e, n, i) {
            if (1 === arguments.length) ze(t), delete t[Ee];
            else if (e && "object" == typeof e)
              for (var o in e) Ze(t, o, e[o], n);
            else if (((e = c(e)), 2 === arguments.length))
              ze(t, function (t) {
                return -1 !== g(e, t);
              });
            else for (var r = 0, s = e.length; r < s; r++) Ze(t, e[r], n, i);
            return this;
          }
          function ze(t, e) {
            for (var n in t[Ee]) {
              var i = n.split(/\d/)[0];
              (e && !e(i)) || Ze(t, i, null, null, n);
            }
          }
          var Ae = {
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            wheel: !("onwheel" in window) && "mousewheel",
          };
          function Oe(t, e, n, i) {
            var o = e + r(n) + (i ? "_" + r(i) : "");
            if (t[Ee] && t[Ee][o]) return this;
            var s = function (e) {
                return n.call(i || t, e || window.event);
              },
              a = s;
            !Zt.touchNative && Zt.pointer && 0 === e.indexOf("touch")
              ? (s = Ut(t, e, s))
              : Zt.touch && "dblclick" === e
                ? (s = (function (t, e) {
                    t.addEventListener("dblclick", e);
                    var n,
                      i = 0;
                    function o(t) {
                      if (1 === t.detail) {
                        if (
                          "mouse" !== t.pointerType &&
                          (!t.sourceCapabilities ||
                            t.sourceCapabilities.firesTouchEvents)
                        ) {
                          var o = Re(t);
                          if (
                            !o.some(function (t) {
                              return (
                                t instanceof HTMLLabelElement &&
                                t.attributes.for
                              );
                            }) ||
                            o.some(function (t) {
                              return (
                                t instanceof HTMLInputElement ||
                                t instanceof HTMLSelectElement
                              );
                            })
                          ) {
                            var r = Date.now();
                            r - i <= Yt
                              ? 2 == ++n &&
                                e(
                                  (function (t) {
                                    var e,
                                      n,
                                      i = {};
                                    for (n in t)
                                      (e = t[n]),
                                        (i[n] = e && e.bind ? e.bind(t) : e);
                                    return (
                                      (t = i),
                                      (i.type = "dblclick"),
                                      (i.detail = 2),
                                      (i.isTrusted = !1),
                                      (i._simulated = !0),
                                      i
                                    );
                                  })(t),
                                )
                              : (n = 1),
                              (i = r);
                          }
                        }
                      } else n = t.detail;
                    }
                    return (
                      t.addEventListener("click", o),
                      { dblclick: e, simDblclick: o }
                    );
                  })(t, s))
                : "addEventListener" in t
                  ? "touchstart" === e ||
                    "touchmove" === e ||
                    "wheel" === e ||
                    "mousewheel" === e
                    ? t.addEventListener(
                        Ae[e] || e,
                        s,
                        !!Zt.passiveEvents && { passive: !1 },
                      )
                    : "mouseenter" === e || "mouseleave" === e
                      ? ((s = function (e) {
                          (e = e || window.event), $e(t, e) && a(e);
                        }),
                        t.addEventListener(Ae[e], s, !1))
                      : t.addEventListener(e, a, !1)
                  : t.attachEvent("on" + e, s),
              (t[Ee] = t[Ee] || {}),
              (t[Ee][o] = s);
          }
          function Ze(t, e, n, i, o) {
            o = o || e + r(n) + (i ? "_" + r(i) : "");
            var s = t[Ee] && t[Ee][o];
            if (!s) return this;
            !Zt.touchNative && Zt.pointer && 0 === e.indexOf("touch")
              ? (function (t, e, n) {
                  jt[e]
                    ? t.removeEventListener(jt[e], n, !1)
                    : console.warn("wrong event specified:", e);
                })(t, e, s)
              : Zt.touch && "dblclick" === e
                ? (function (t, e) {
                    t.removeEventListener("dblclick", e.dblclick),
                      t.removeEventListener("click", e.simDblclick);
                  })(t, s)
                : "removeEventListener" in t
                  ? t.removeEventListener(Ae[e] || e, s, !1)
                  : t.detachEvent("on" + e, s),
              (t[Ee][o] = null);
          }
          function Ie(t) {
            return (
              t.stopPropagation
                ? t.stopPropagation()
                : t.originalEvent
                  ? (t.originalEvent._stopped = !0)
                  : (t.cancelBubble = !0),
              this
            );
          }
          function Be(t) {
            return Oe(t, "wheel", Ie), this;
          }
          function Ne(t) {
            return (
              Se(t, "mousedown touchstart dblclick contextmenu", Ie),
              (t._leaflet_disable_click = !0),
              this
            );
          }
          function De(t) {
            return (
              t.preventDefault ? t.preventDefault() : (t.returnValue = !1), this
            );
          }
          function je(t) {
            return De(t), Ie(t), this;
          }
          function Re(t) {
            if (t.composedPath) return t.composedPath();
            for (var e = [], n = t.target; n; ) e.push(n), (n = n.parentNode);
            return e;
          }
          function Fe(t, e) {
            if (!e) return new z(t.clientX, t.clientY);
            var n = Me(e),
              i = n.boundingClientRect;
            return new z(
              (t.clientX - i.left) / n.x - e.clientLeft,
              (t.clientY - i.top) / n.y - e.clientTop,
            );
          }
          var He =
            Zt.linux && Zt.chrome
              ? window.devicePixelRatio
              : Zt.mac
                ? 3 * window.devicePixelRatio
                : window.devicePixelRatio > 0
                  ? 2 * window.devicePixelRatio
                  : 1;
          function Ue(t) {
            return Zt.edge
              ? t.wheelDeltaY / 2
              : t.deltaY && 0 === t.deltaMode
                ? -t.deltaY / He
                : t.deltaY && 1 === t.deltaMode
                  ? 20 * -t.deltaY
                  : t.deltaY && 2 === t.deltaMode
                    ? 60 * -t.deltaY
                    : t.deltaX || t.deltaZ
                      ? 0
                      : t.wheelDelta
                        ? (t.wheelDeltaY || t.wheelDelta) / 2
                        : t.detail && Math.abs(t.detail) < 32765
                          ? 20 * -t.detail
                          : t.detail
                            ? (t.detail / -32765) * 60
                            : 0;
          }
          function $e(t, e) {
            var n = e.relatedTarget;
            if (!n) return !0;
            try {
              for (; n && n !== t; ) n = n.parentNode;
            } catch (t) {
              return !1;
            }
            return n !== t;
          }
          var We = {
              __proto__: null,
              on: Se,
              off: ke,
              stopPropagation: Ie,
              disableScrollPropagation: Be,
              disableClickPropagation: Ne,
              preventDefault: De,
              stop: je,
              getPropagationPath: Re,
              getMousePosition: Fe,
              getWheelDelta: Ue,
              isExternalTarget: $e,
              addListener: Se,
              removeListener: ke,
            },
            qe = k.extend({
              run: function (t, e, n, i) {
                this.stop(),
                  (this._el = t),
                  (this._inProgress = !0),
                  (this._duration = n || 0.25),
                  (this._easeOutPower = 1 / Math.max(i || 0.5, 0.2)),
                  (this._startPos = ye(t)),
                  (this._offset = e.subtract(this._startPos)),
                  (this._startTime = +new Date()),
                  this.fire("start"),
                  this._animate();
              },
              stop: function () {
                this._inProgress && (this._step(!0), this._complete());
              },
              _animate: function () {
                (this._animId = P(this._animate, this)), this._step();
              },
              _step: function (t) {
                var e = +new Date() - this._startTime,
                  n = 1e3 * this._duration;
                e < n
                  ? this._runFrame(this._easeOut(e / n), t)
                  : (this._runFrame(1), this._complete());
              },
              _runFrame: function (t, e) {
                var n = this._startPos.add(this._offset.multiplyBy(t));
                e && n._round(), ve(this._el, n), this.fire("step");
              },
              _complete: function () {
                M(this._animId), (this._inProgress = !1), this.fire("end");
              },
              _easeOut: function (t) {
                return 1 - Math.pow(1 - t, this._easeOutPower);
              },
            }),
            Ve = k.extend({
              options: {
                crs: V,
                center: void 0,
                zoom: void 0,
                minZoom: void 0,
                maxZoom: void 0,
                layers: [],
                maxBounds: void 0,
                renderer: void 0,
                zoomAnimation: !0,
                zoomAnimationThreshold: 4,
                fadeAnimation: !0,
                markerZoomAnimation: !0,
                transform3DLimit: 8388608,
                zoomSnap: 1,
                zoomDelta: 1,
                trackResize: !0,
              },
              initialize: function (t, e) {
                (e = f(this, e)),
                  (this._handlers = []),
                  (this._layers = {}),
                  (this._zoomBoundLayers = {}),
                  (this._sizeChanged = !0),
                  this._initContainer(t),
                  this._initLayout(),
                  (this._onResize = i(this._onResize, this)),
                  this._initEvents(),
                  e.maxBounds && this.setMaxBounds(e.maxBounds),
                  void 0 !== e.zoom && (this._zoom = this._limitZoom(e.zoom)),
                  e.center &&
                    void 0 !== e.zoom &&
                    this.setView(j(e.center), e.zoom, { reset: !0 }),
                  this.callInitHooks(),
                  (this._zoomAnimated =
                    ee &&
                    Zt.any3d &&
                    !Zt.mobileOpera &&
                    this.options.zoomAnimation),
                  this._zoomAnimated &&
                    (this._createAnimProxy(),
                    Se(this._proxy, ne, this._catchTransitionEnd, this)),
                  this._addLayers(this.options.layers);
              },
              setView: function (t, n, i) {
                return (
                  (n = void 0 === n ? this._zoom : this._limitZoom(n)),
                  (t = this._limitCenter(j(t), n, this.options.maxBounds)),
                  (i = i || {}),
                  this._stop(),
                  this._loaded &&
                  !i.reset &&
                  !0 !== i &&
                  (void 0 !== i.animate &&
                    ((i.zoom = e({ animate: i.animate }, i.zoom)),
                    (i.pan = e(
                      { animate: i.animate, duration: i.duration },
                      i.pan,
                    ))),
                  this._zoom !== n
                    ? this._tryAnimatedZoom &&
                      this._tryAnimatedZoom(t, n, i.zoom)
                    : this._tryAnimatedPan(t, i.pan))
                    ? (clearTimeout(this._sizeTimer), this)
                    : (this._resetView(t, n, i.pan && i.pan.noMoveStart), this)
                );
              },
              setZoom: function (t, e) {
                return this._loaded
                  ? this.setView(this.getCenter(), t, { zoom: e })
                  : ((this._zoom = t), this);
              },
              zoomIn: function (t, e) {
                return (
                  (t = t || (Zt.any3d ? this.options.zoomDelta : 1)),
                  this.setZoom(this._zoom + t, e)
                );
              },
              zoomOut: function (t, e) {
                return (
                  (t = t || (Zt.any3d ? this.options.zoomDelta : 1)),
                  this.setZoom(this._zoom - t, e)
                );
              },
              setZoomAround: function (t, e, n) {
                var i = this.getZoomScale(e),
                  o = this.getSize().divideBy(2),
                  r = (t instanceof z ? t : this.latLngToContainerPoint(t))
                    .subtract(o)
                    .multiplyBy(1 - 1 / i),
                  s = this.containerPointToLatLng(o.add(r));
                return this.setView(s, e, { zoom: n });
              },
              _getBoundsCenterZoom: function (t, e) {
                (e = e || {}), (t = t.getBounds ? t.getBounds() : N(t));
                var n = O(e.paddingTopLeft || e.padding || [0, 0]),
                  i = O(e.paddingBottomRight || e.padding || [0, 0]),
                  o = this.getBoundsZoom(t, !1, n.add(i));
                if (
                  (o =
                    "number" == typeof e.maxZoom
                      ? Math.min(e.maxZoom, o)
                      : o) ===
                  1 / 0
                )
                  return { center: t.getCenter(), zoom: o };
                var r = i.subtract(n).divideBy(2),
                  s = this.project(t.getSouthWest(), o),
                  a = this.project(t.getNorthEast(), o);
                return {
                  center: this.unproject(s.add(a).divideBy(2).add(r), o),
                  zoom: o,
                };
              },
              fitBounds: function (t, e) {
                if (!(t = N(t)).isValid())
                  throw new Error("Bounds are not valid.");
                var n = this._getBoundsCenterZoom(t, e);
                return this.setView(n.center, n.zoom, e);
              },
              fitWorld: function (t) {
                return this.fitBounds(
                  [
                    [-90, -180],
                    [90, 180],
                  ],
                  t,
                );
              },
              panTo: function (t, e) {
                return this.setView(t, this._zoom, { pan: e });
              },
              panBy: function (t, e) {
                if (((e = e || {}), !(t = O(t).round()).x && !t.y))
                  return this.fire("moveend");
                if (!0 !== e.animate && !this.getSize().contains(t))
                  return (
                    this._resetView(
                      this.unproject(this.project(this.getCenter()).add(t)),
                      this.getZoom(),
                    ),
                    this
                  );
                if (
                  (this._panAnim ||
                    ((this._panAnim = new qe()),
                    this._panAnim.on(
                      {
                        step: this._onPanTransitionStep,
                        end: this._onPanTransitionEnd,
                      },
                      this,
                    )),
                  e.noMoveStart || this.fire("movestart"),
                  !1 !== e.animate)
                ) {
                  ce(this._mapPane, "leaflet-pan-anim");
                  var n = this._getMapPanePos().subtract(t).round();
                  this._panAnim.run(
                    this._mapPane,
                    n,
                    e.duration || 0.25,
                    e.easeLinearity,
                  );
                } else this._rawPanBy(t), this.fire("move").fire("moveend");
                return this;
              },
              flyTo: function (t, e, n) {
                if (!1 === (n = n || {}).animate || !Zt.any3d)
                  return this.setView(t, e, n);
                this._stop();
                var i = this.project(this.getCenter()),
                  o = this.project(t),
                  r = this.getSize(),
                  s = this._zoom;
                (t = j(t)), (e = void 0 === e ? s : e);
                var a = Math.max(r.x, r.y),
                  u = a * this.getZoomScale(s, e),
                  h = o.distanceTo(i) || 1,
                  l = 1.42,
                  c = l * l;
                function f(t) {
                  var e =
                      (u * u - a * a + (t ? -1 : 1) * c * c * h * h) /
                      (2 * (t ? u : a) * c * h),
                    n = Math.sqrt(e * e + 1) - e;
                  return n < 1e-9 ? -18 : Math.log(n);
                }
                function d(t) {
                  return (Math.exp(t) - Math.exp(-t)) / 2;
                }
                function p(t) {
                  return (Math.exp(t) + Math.exp(-t)) / 2;
                }
                var _ = f(0);
                function m(t) {
                  return (a * (p(_) * (d((e = _ + l * t)) / p(e)) - d(_))) / c;
                  var e;
                }
                var g = Date.now(),
                  v = (f(1) - _) / l,
                  y = n.duration ? 1e3 * n.duration : 1e3 * v * 0.8;
                return (
                  this._moveStart(!0, n.noMoveStart),
                  function n() {
                    var r = (Date.now() - g) / y,
                      u =
                        (function (t) {
                          return 1 - Math.pow(1 - t, 1.5);
                        })(r) * v;
                    r <= 1
                      ? ((this._flyToFrame = P(n, this)),
                        this._move(
                          this.unproject(
                            i.add(o.subtract(i).multiplyBy(m(u) / h)),
                            s,
                          ),
                          this.getScaleZoom(
                            a /
                              (function (t) {
                                return a * (p(_) / p(_ + l * t));
                              })(u),
                            s,
                          ),
                          { flyTo: !0 },
                        ))
                      : this._move(t, e)._moveEnd(!0);
                  }.call(this),
                  this
                );
              },
              flyToBounds: function (t, e) {
                var n = this._getBoundsCenterZoom(t, e);
                return this.flyTo(n.center, n.zoom, e);
              },
              setMaxBounds: function (t) {
                return (
                  (t = N(t)),
                  this.listens("moveend", this._panInsideMaxBounds) &&
                    this.off("moveend", this._panInsideMaxBounds),
                  t.isValid()
                    ? ((this.options.maxBounds = t),
                      this._loaded && this._panInsideMaxBounds(),
                      this.on("moveend", this._panInsideMaxBounds))
                    : ((this.options.maxBounds = null), this)
                );
              },
              setMinZoom: function (t) {
                var e = this.options.minZoom;
                return (
                  (this.options.minZoom = t),
                  this._loaded &&
                  e !== t &&
                  (this.fire("zoomlevelschange"),
                  this.getZoom() < this.options.minZoom)
                    ? this.setZoom(t)
                    : this
                );
              },
              setMaxZoom: function (t) {
                var e = this.options.maxZoom;
                return (
                  (this.options.maxZoom = t),
                  this._loaded &&
                  e !== t &&
                  (this.fire("zoomlevelschange"),
                  this.getZoom() > this.options.maxZoom)
                    ? this.setZoom(t)
                    : this
                );
              },
              panInsideBounds: function (t, e) {
                this._enforcingBounds = !0;
                var n = this.getCenter(),
                  i = this._limitCenter(n, this._zoom, N(t));
                return (
                  n.equals(i) || this.panTo(i, e),
                  (this._enforcingBounds = !1),
                  this
                );
              },
              panInside: function (t, e) {
                var n = O((e = e || {}).paddingTopLeft || e.padding || [0, 0]),
                  i = O(e.paddingBottomRight || e.padding || [0, 0]),
                  o = this.project(this.getCenter()),
                  r = this.project(t),
                  s = this.getPixelBounds(),
                  a = I([s.min.add(n), s.max.subtract(i)]),
                  u = a.getSize();
                if (!a.contains(r)) {
                  this._enforcingBounds = !0;
                  var h = r.subtract(a.getCenter()),
                    l = a.extend(r).getSize().subtract(u);
                  (o.x += h.x < 0 ? -l.x : l.x),
                    (o.y += h.y < 0 ? -l.y : l.y),
                    this.panTo(this.unproject(o), e),
                    (this._enforcingBounds = !1);
                }
                return this;
              },
              invalidateSize: function (t) {
                if (!this._loaded) return this;
                t = e({ animate: !1, pan: !0 }, !0 === t ? { animate: !0 } : t);
                var n = this.getSize();
                (this._sizeChanged = !0), (this._lastCenter = null);
                var o = this.getSize(),
                  r = n.divideBy(2).round(),
                  s = o.divideBy(2).round(),
                  a = r.subtract(s);
                return a.x || a.y
                  ? (t.animate && t.pan
                      ? this.panBy(a)
                      : (t.pan && this._rawPanBy(a),
                        this.fire("move"),
                        t.debounceMoveend
                          ? (clearTimeout(this._sizeTimer),
                            (this._sizeTimer = setTimeout(
                              i(this.fire, this, "moveend"),
                              200,
                            )))
                          : this.fire("moveend")),
                    this.fire("resize", { oldSize: n, newSize: o }))
                  : this;
              },
              stop: function () {
                return (
                  this.setZoom(this._limitZoom(this._zoom)),
                  this.options.zoomSnap || this.fire("viewreset"),
                  this._stop()
                );
              },
              locate: function (t) {
                if (
                  ((t = this._locateOptions =
                    e({ timeout: 1e4, watch: !1 }, t)),
                  !("geolocation" in navigator))
                )
                  return (
                    this._handleGeolocationError({
                      code: 0,
                      message: "Geolocation not supported.",
                    }),
                    this
                  );
                var n = i(this._handleGeolocationResponse, this),
                  o = i(this._handleGeolocationError, this);
                return (
                  t.watch
                    ? (this._locationWatchId =
                        navigator.geolocation.watchPosition(n, o, t))
                    : navigator.geolocation.getCurrentPosition(n, o, t),
                  this
                );
              },
              stopLocate: function () {
                return (
                  navigator.geolocation &&
                    navigator.geolocation.clearWatch &&
                    navigator.geolocation.clearWatch(this._locationWatchId),
                  this._locateOptions && (this._locateOptions.setView = !1),
                  this
                );
              },
              _handleGeolocationError: function (t) {
                if (this._container._leaflet_id) {
                  var e = t.code,
                    n =
                      t.message ||
                      (1 === e
                        ? "permission denied"
                        : 2 === e
                          ? "position unavailable"
                          : "timeout");
                  this._locateOptions.setView &&
                    !this._loaded &&
                    this.fitWorld(),
                    this.fire("locationerror", {
                      code: e,
                      message: "Geolocation error: " + n + ".",
                    });
                }
              },
              _handleGeolocationResponse: function (t) {
                if (this._container._leaflet_id) {
                  var e = new D(t.coords.latitude, t.coords.longitude),
                    n = e.toBounds(2 * t.coords.accuracy),
                    i = this._locateOptions;
                  if (i.setView) {
                    var o = this.getBoundsZoom(n);
                    this.setView(e, i.maxZoom ? Math.min(o, i.maxZoom) : o);
                  }
                  var r = { latlng: e, bounds: n, timestamp: t.timestamp };
                  for (var s in t.coords)
                    "number" == typeof t.coords[s] && (r[s] = t.coords[s]);
                  this.fire("locationfound", r);
                }
              },
              addHandler: function (t, e) {
                if (!e) return this;
                var n = (this[t] = new e(this));
                return (
                  this._handlers.push(n), this.options[t] && n.enable(), this
                );
              },
              remove: function () {
                if (
                  (this._initEvents(!0),
                  this.options.maxBounds &&
                    this.off("moveend", this._panInsideMaxBounds),
                  this._containerId !== this._container._leaflet_id)
                )
                  throw new Error(
                    "Map container is being reused by another instance",
                  );
                try {
                  delete this._container._leaflet_id, delete this._containerId;
                } catch (t) {
                  (this._container._leaflet_id = void 0),
                    (this._containerId = void 0);
                }
                var t;
                for (t in (void 0 !== this._locationWatchId &&
                  this.stopLocate(),
                this._stop(),
                se(this._mapPane),
                this._clearControlPos && this._clearControlPos(),
                this._resizeRequest &&
                  (M(this._resizeRequest), (this._resizeRequest = null)),
                this._clearHandlers(),
                this._loaded && this.fire("unload"),
                this._layers))
                  this._layers[t].remove();
                for (t in this._panes) se(this._panes[t]);
                return (
                  (this._layers = []),
                  (this._panes = []),
                  delete this._mapPane,
                  delete this._renderer,
                  this
                );
              },
              createPane: function (t, e) {
                var n = re(
                  "div",
                  "leaflet-pane" +
                    (t ? " leaflet-" + t.replace("Pane", "") + "-pane" : ""),
                  e || this._mapPane,
                );
                return t && (this._panes[t] = n), n;
              },
              getCenter: function () {
                return (
                  this._checkIfLoaded(),
                  this._lastCenter && !this._moved()
                    ? this._lastCenter.clone()
                    : this.layerPointToLatLng(this._getCenterLayerPoint())
                );
              },
              getZoom: function () {
                return this._zoom;
              },
              getBounds: function () {
                var t = this.getPixelBounds();
                return new B(
                  this.unproject(t.getBottomLeft()),
                  this.unproject(t.getTopRight()),
                );
              },
              getMinZoom: function () {
                return void 0 === this.options.minZoom
                  ? this._layersMinZoom || 0
                  : this.options.minZoom;
              },
              getMaxZoom: function () {
                return void 0 === this.options.maxZoom
                  ? void 0 === this._layersMaxZoom
                    ? 1 / 0
                    : this._layersMaxZoom
                  : this.options.maxZoom;
              },
              getBoundsZoom: function (t, e, n) {
                (t = N(t)), (n = O(n || [0, 0]));
                var i = this.getZoom() || 0,
                  o = this.getMinZoom(),
                  r = this.getMaxZoom(),
                  s = t.getNorthWest(),
                  a = t.getSouthEast(),
                  u = this.getSize().subtract(n),
                  h = I(this.project(a, i), this.project(s, i)).getSize(),
                  l = Zt.any3d ? this.options.zoomSnap : 1,
                  c = u.x / h.x,
                  f = u.y / h.y,
                  d = e ? Math.max(c, f) : Math.min(c, f);
                return (
                  (i = this.getScaleZoom(d, i)),
                  l &&
                    ((i = Math.round(i / (l / 100)) * (l / 100)),
                    (i = e ? Math.ceil(i / l) * l : Math.floor(i / l) * l)),
                  Math.max(o, Math.min(r, i))
                );
              },
              getSize: function () {
                return (
                  (this._size && !this._sizeChanged) ||
                    ((this._size = new z(
                      this._container.clientWidth || 0,
                      this._container.clientHeight || 0,
                    )),
                    (this._sizeChanged = !1)),
                  this._size.clone()
                );
              },
              getPixelBounds: function (t, e) {
                var n = this._getTopLeftPoint(t, e);
                return new Z(n, n.add(this.getSize()));
              },
              getPixelOrigin: function () {
                return this._checkIfLoaded(), this._pixelOrigin;
              },
              getPixelWorldBounds: function (t) {
                return this.options.crs.getProjectedBounds(
                  void 0 === t ? this.getZoom() : t,
                );
              },
              getPane: function (t) {
                return "string" == typeof t ? this._panes[t] : t;
              },
              getPanes: function () {
                return this._panes;
              },
              getContainer: function () {
                return this._container;
              },
              getZoomScale: function (t, e) {
                var n = this.options.crs;
                return (
                  (e = void 0 === e ? this._zoom : e), n.scale(t) / n.scale(e)
                );
              },
              getScaleZoom: function (t, e) {
                var n = this.options.crs;
                e = void 0 === e ? this._zoom : e;
                var i = n.zoom(t * n.scale(e));
                return isNaN(i) ? 1 / 0 : i;
              },
              project: function (t, e) {
                return (
                  (e = void 0 === e ? this._zoom : e),
                  this.options.crs.latLngToPoint(j(t), e)
                );
              },
              unproject: function (t, e) {
                return (
                  (e = void 0 === e ? this._zoom : e),
                  this.options.crs.pointToLatLng(O(t), e)
                );
              },
              layerPointToLatLng: function (t) {
                var e = O(t).add(this.getPixelOrigin());
                return this.unproject(e);
              },
              latLngToLayerPoint: function (t) {
                return this.project(j(t))
                  ._round()
                  ._subtract(this.getPixelOrigin());
              },
              wrapLatLng: function (t) {
                return this.options.crs.wrapLatLng(j(t));
              },
              wrapLatLngBounds: function (t) {
                return this.options.crs.wrapLatLngBounds(N(t));
              },
              distance: function (t, e) {
                return this.options.crs.distance(j(t), j(e));
              },
              containerPointToLayerPoint: function (t) {
                return O(t).subtract(this._getMapPanePos());
              },
              layerPointToContainerPoint: function (t) {
                return O(t).add(this._getMapPanePos());
              },
              containerPointToLatLng: function (t) {
                var e = this.containerPointToLayerPoint(O(t));
                return this.layerPointToLatLng(e);
              },
              latLngToContainerPoint: function (t) {
                return this.layerPointToContainerPoint(
                  this.latLngToLayerPoint(j(t)),
                );
              },
              mouseEventToContainerPoint: function (t) {
                return Fe(t, this._container);
              },
              mouseEventToLayerPoint: function (t) {
                return this.containerPointToLayerPoint(
                  this.mouseEventToContainerPoint(t),
                );
              },
              mouseEventToLatLng: function (t) {
                return this.layerPointToLatLng(this.mouseEventToLayerPoint(t));
              },
              _initContainer: function (t) {
                var e = (this._container = ie(t));
                if (!e) throw new Error("Map container not found.");
                if (e._leaflet_id)
                  throw new Error("Map container is already initialized.");
                Se(e, "scroll", this._onScroll, this),
                  (this._containerId = r(e));
              },
              _initLayout: function () {
                var t = this._container;
                (this._fadeAnimated = this.options.fadeAnimation && Zt.any3d),
                  ce(
                    t,
                    "leaflet-container" +
                      (Zt.touch ? " leaflet-touch" : "") +
                      (Zt.retina ? " leaflet-retina" : "") +
                      (Zt.ielt9 ? " leaflet-oldie" : "") +
                      (Zt.safari ? " leaflet-safari" : "") +
                      (this._fadeAnimated ? " leaflet-fade-anim" : ""),
                  );
                var e = oe(t, "position");
                "absolute" !== e &&
                  "relative" !== e &&
                  "fixed" !== e &&
                  "sticky" !== e &&
                  (t.style.position = "relative"),
                  this._initPanes(),
                  this._initControlPos && this._initControlPos();
              },
              _initPanes: function () {
                var t = (this._panes = {});
                (this._paneRenderers = {}),
                  (this._mapPane = this.createPane("mapPane", this._container)),
                  ve(this._mapPane, new z(0, 0)),
                  this.createPane("tilePane"),
                  this.createPane("overlayPane"),
                  this.createPane("shadowPane"),
                  this.createPane("markerPane"),
                  this.createPane("tooltipPane"),
                  this.createPane("popupPane"),
                  this.options.markerZoomAnimation ||
                    (ce(t.markerPane, "leaflet-zoom-hide"),
                    ce(t.shadowPane, "leaflet-zoom-hide"));
              },
              _resetView: function (t, e, n) {
                ve(this._mapPane, new z(0, 0));
                var i = !this._loaded;
                (this._loaded = !0),
                  (e = this._limitZoom(e)),
                  this.fire("viewprereset");
                var o = this._zoom !== e;
                this._moveStart(o, n)._move(t, e)._moveEnd(o),
                  this.fire("viewreset"),
                  i && this.fire("load");
              },
              _moveStart: function (t, e) {
                return (
                  t && this.fire("zoomstart"), e || this.fire("movestart"), this
                );
              },
              _move: function (t, e, n, i) {
                void 0 === e && (e = this._zoom);
                var o = this._zoom !== e;
                return (
                  (this._zoom = e),
                  (this._lastCenter = t),
                  (this._pixelOrigin = this._getNewPixelOrigin(t)),
                  i
                    ? n && n.pinch && this.fire("zoom", n)
                    : ((o || (n && n.pinch)) && this.fire("zoom", n),
                      this.fire("move", n)),
                  this
                );
              },
              _moveEnd: function (t) {
                return t && this.fire("zoomend"), this.fire("moveend");
              },
              _stop: function () {
                return (
                  M(this._flyToFrame),
                  this._panAnim && this._panAnim.stop(),
                  this
                );
              },
              _rawPanBy: function (t) {
                ve(this._mapPane, this._getMapPanePos().subtract(t));
              },
              _getZoomSpan: function () {
                return this.getMaxZoom() - this.getMinZoom();
              },
              _panInsideMaxBounds: function () {
                this._enforcingBounds ||
                  this.panInsideBounds(this.options.maxBounds);
              },
              _checkIfLoaded: function () {
                if (!this._loaded)
                  throw new Error("Set map center and zoom first.");
              },
              _initEvents: function (t) {
                (this._targets = {}),
                  (this._targets[r(this._container)] = this);
                var e = t ? ke : Se;
                e(
                  this._container,
                  "click dblclick mousedown mouseup mouseover mouseout mousemove contextmenu keypress keydown keyup",
                  this._handleDOMEvent,
                  this,
                ),
                  this.options.trackResize &&
                    e(window, "resize", this._onResize, this),
                  Zt.any3d &&
                    this.options.transform3DLimit &&
                    (t ? this.off : this.on).call(
                      this,
                      "moveend",
                      this._onMoveEnd,
                    );
              },
              _onResize: function () {
                M(this._resizeRequest),
                  (this._resizeRequest = P(function () {
                    this.invalidateSize({ debounceMoveend: !0 });
                  }, this));
              },
              _onScroll: function () {
                (this._container.scrollTop = 0),
                  (this._container.scrollLeft = 0);
              },
              _onMoveEnd: function () {
                var t = this._getMapPanePos();
                Math.max(Math.abs(t.x), Math.abs(t.y)) >=
                  this.options.transform3DLimit &&
                  this._resetView(this.getCenter(), this.getZoom());
              },
              _findEventTargets: function (t, e) {
                for (
                  var n,
                    i = [],
                    o = "mouseout" === e || "mouseover" === e,
                    s = t.target || t.srcElement,
                    a = !1;
                  s;

                ) {
                  if (
                    (n = this._targets[r(s)]) &&
                    ("click" === e || "preclick" === e) &&
                    this._draggableMoved(n)
                  ) {
                    a = !0;
                    break;
                  }
                  if (n && n.listens(e, !0)) {
                    if (o && !$e(s, t)) break;
                    if ((i.push(n), o)) break;
                  }
                  if (s === this._container) break;
                  s = s.parentNode;
                }
                return (
                  i.length || a || o || !this.listens(e, !0) || (i = [this]), i
                );
              },
              _isClickDisabled: function (t) {
                for (; t && t !== this._container; ) {
                  if (t._leaflet_disable_click) return !0;
                  t = t.parentNode;
                }
              },
              _handleDOMEvent: function (t) {
                var e = t.target || t.srcElement;
                if (
                  !(
                    !this._loaded ||
                    e._leaflet_disable_events ||
                    ("click" === t.type && this._isClickDisabled(e))
                  )
                ) {
                  var n = t.type;
                  "mousedown" === n && Le(e), this._fireDOMEvent(t, n);
                }
              },
              _mouseEvents: [
                "click",
                "dblclick",
                "mouseover",
                "mouseout",
                "contextmenu",
              ],
              _fireDOMEvent: function (t, n, i) {
                if ("click" === t.type) {
                  var o = e({}, t);
                  (o.type = "preclick"), this._fireDOMEvent(o, o.type, i);
                }
                var r = this._findEventTargets(t, n);
                if (i) {
                  for (var s = [], a = 0; a < i.length; a++)
                    i[a].listens(n, !0) && s.push(i[a]);
                  r = s.concat(r);
                }
                if (r.length) {
                  "contextmenu" === n && De(t);
                  var u = r[0],
                    h = { originalEvent: t };
                  if (
                    "keypress" !== t.type &&
                    "keydown" !== t.type &&
                    "keyup" !== t.type
                  ) {
                    var l = u.getLatLng && (!u._radius || u._radius <= 10);
                    (h.containerPoint = l
                      ? this.latLngToContainerPoint(u.getLatLng())
                      : this.mouseEventToContainerPoint(t)),
                      (h.layerPoint = this.containerPointToLayerPoint(
                        h.containerPoint,
                      )),
                      (h.latlng = l
                        ? u.getLatLng()
                        : this.layerPointToLatLng(h.layerPoint));
                  }
                  for (a = 0; a < r.length; a++)
                    if (
                      (r[a].fire(n, h, !0),
                      h.originalEvent._stopped ||
                        (!1 === r[a].options.bubblingMouseEvents &&
                          -1 !== g(this._mouseEvents, n)))
                    )
                      return;
                }
              },
              _draggableMoved: function (t) {
                return (
                  ((t = t.dragging && t.dragging.enabled() ? t : this)
                    .dragging &&
                    t.dragging.moved()) ||
                  (this.boxZoom && this.boxZoom.moved())
                );
              },
              _clearHandlers: function () {
                for (var t = 0, e = this._handlers.length; t < e; t++)
                  this._handlers[t].disable();
              },
              whenReady: function (t, e) {
                return (
                  this._loaded
                    ? t.call(e || this, { target: this })
                    : this.on("load", t, e),
                  this
                );
              },
              _getMapPanePos: function () {
                return ye(this._mapPane) || new z(0, 0);
              },
              _moved: function () {
                var t = this._getMapPanePos();
                return t && !t.equals([0, 0]);
              },
              _getTopLeftPoint: function (t, e) {
                return (
                  t && void 0 !== e
                    ? this._getNewPixelOrigin(t, e)
                    : this.getPixelOrigin()
                ).subtract(this._getMapPanePos());
              },
              _getNewPixelOrigin: function (t, e) {
                var n = this.getSize()._divideBy(2);
                return this.project(t, e)
                  ._subtract(n)
                  ._add(this._getMapPanePos())
                  ._round();
              },
              _latLngToNewLayerPoint: function (t, e, n) {
                var i = this._getNewPixelOrigin(n, e);
                return this.project(t, e)._subtract(i);
              },
              _latLngBoundsToNewLayerBounds: function (t, e, n) {
                var i = this._getNewPixelOrigin(n, e);
                return I([
                  this.project(t.getSouthWest(), e)._subtract(i),
                  this.project(t.getNorthWest(), e)._subtract(i),
                  this.project(t.getSouthEast(), e)._subtract(i),
                  this.project(t.getNorthEast(), e)._subtract(i),
                ]);
              },
              _getCenterLayerPoint: function () {
                return this.containerPointToLayerPoint(
                  this.getSize()._divideBy(2),
                );
              },
              _getCenterOffset: function (t) {
                return this.latLngToLayerPoint(t).subtract(
                  this._getCenterLayerPoint(),
                );
              },
              _limitCenter: function (t, e, n) {
                if (!n) return t;
                var i = this.project(t, e),
                  o = this.getSize().divideBy(2),
                  r = new Z(i.subtract(o), i.add(o)),
                  s = this._getBoundsOffset(r, n, e);
                return Math.abs(s.x) <= 1 && Math.abs(s.y) <= 1
                  ? t
                  : this.unproject(i.add(s), e);
              },
              _limitOffset: function (t, e) {
                if (!e) return t;
                var n = this.getPixelBounds(),
                  i = new Z(n.min.add(t), n.max.add(t));
                return t.add(this._getBoundsOffset(i, e));
              },
              _getBoundsOffset: function (t, e, n) {
                var i = I(
                    this.project(e.getNorthEast(), n),
                    this.project(e.getSouthWest(), n),
                  ),
                  o = i.min.subtract(t.min),
                  r = i.max.subtract(t.max);
                return new z(
                  this._rebound(o.x, -r.x),
                  this._rebound(o.y, -r.y),
                );
              },
              _rebound: function (t, e) {
                return t + e > 0
                  ? Math.round(t - e) / 2
                  : Math.max(0, Math.ceil(t)) - Math.max(0, Math.floor(e));
              },
              _limitZoom: function (t) {
                var e = this.getMinZoom(),
                  n = this.getMaxZoom(),
                  i = Zt.any3d ? this.options.zoomSnap : 1;
                return (
                  i && (t = Math.round(t / i) * i), Math.max(e, Math.min(n, t))
                );
              },
              _onPanTransitionStep: function () {
                this.fire("move");
              },
              _onPanTransitionEnd: function () {
                fe(this._mapPane, "leaflet-pan-anim"), this.fire("moveend");
              },
              _tryAnimatedPan: function (t, e) {
                var n = this._getCenterOffset(t)._trunc();
                return !(
                  (!0 !== (e && e.animate) && !this.getSize().contains(n)) ||
                  (this.panBy(n, e), 0)
                );
              },
              _createAnimProxy: function () {
                var t = (this._proxy = re(
                  "div",
                  "leaflet-proxy leaflet-zoom-animated",
                ));
                this._panes.mapPane.appendChild(t),
                  this.on(
                    "zoomanim",
                    function (t) {
                      var e = te,
                        n = this._proxy.style[e];
                      ge(
                        this._proxy,
                        this.project(t.center, t.zoom),
                        this.getZoomScale(t.zoom, 1),
                      ),
                        n === this._proxy.style[e] &&
                          this._animatingZoom &&
                          this._onZoomTransitionEnd();
                    },
                    this,
                  ),
                  this.on("load moveend", this._animMoveEnd, this),
                  this._on("unload", this._destroyAnimProxy, this);
              },
              _destroyAnimProxy: function () {
                se(this._proxy),
                  this.off("load moveend", this._animMoveEnd, this),
                  delete this._proxy;
              },
              _animMoveEnd: function () {
                var t = this.getCenter(),
                  e = this.getZoom();
                ge(this._proxy, this.project(t, e), this.getZoomScale(e, 1));
              },
              _catchTransitionEnd: function (t) {
                this._animatingZoom &&
                  t.propertyName.indexOf("transform") >= 0 &&
                  this._onZoomTransitionEnd();
              },
              _nothingToAnimate: function () {
                return !this._container.getElementsByClassName(
                  "leaflet-zoom-animated",
                ).length;
              },
              _tryAnimatedZoom: function (t, e, n) {
                if (this._animatingZoom) return !0;
                if (
                  ((n = n || {}),
                  !this._zoomAnimated ||
                    !1 === n.animate ||
                    this._nothingToAnimate() ||
                    Math.abs(e - this._zoom) >
                      this.options.zoomAnimationThreshold)
                )
                  return !1;
                var i = this.getZoomScale(e),
                  o = this._getCenterOffset(t)._divideBy(1 - 1 / i);
                return !(
                  (!0 !== n.animate && !this.getSize().contains(o)) ||
                  (P(function () {
                    this._moveStart(!0, n.noMoveStart || !1)._animateZoom(
                      t,
                      e,
                      !0,
                    );
                  }, this),
                  0)
                );
              },
              _animateZoom: function (t, e, n, o) {
                this._mapPane &&
                  (n &&
                    ((this._animatingZoom = !0),
                    (this._animateToCenter = t),
                    (this._animateToZoom = e),
                    ce(this._mapPane, "leaflet-zoom-anim")),
                  this.fire("zoomanim", { center: t, zoom: e, noUpdate: o }),
                  this._tempFireZoomEvent ||
                    (this._tempFireZoomEvent =
                      this._zoom !== this._animateToZoom),
                  this._move(
                    this._animateToCenter,
                    this._animateToZoom,
                    void 0,
                    !0,
                  ),
                  setTimeout(i(this._onZoomTransitionEnd, this), 250));
              },
              _onZoomTransitionEnd: function () {
                this._animatingZoom &&
                  (this._mapPane && fe(this._mapPane, "leaflet-zoom-anim"),
                  (this._animatingZoom = !1),
                  this._move(
                    this._animateToCenter,
                    this._animateToZoom,
                    void 0,
                    !0,
                  ),
                  this._tempFireZoomEvent && this.fire("zoom"),
                  delete this._tempFireZoomEvent,
                  this.fire("move"),
                  this._moveEnd(!0));
              },
            });
          var Ye = S.extend({
              options: { position: "topright" },
              initialize: function (t) {
                f(this, t);
              },
              getPosition: function () {
                return this.options.position;
              },
              setPosition: function (t) {
                var e = this._map;
                return (
                  e && e.removeControl(this),
                  (this.options.position = t),
                  e && e.addControl(this),
                  this
                );
              },
              getContainer: function () {
                return this._container;
              },
              addTo: function (t) {
                this.remove(), (this._map = t);
                var e = (this._container = this.onAdd(t)),
                  n = this.getPosition(),
                  i = t._controlCorners[n];
                return (
                  ce(e, "leaflet-control"),
                  -1 !== n.indexOf("bottom")
                    ? i.insertBefore(e, i.firstChild)
                    : i.appendChild(e),
                  this._map.on("unload", this.remove, this),
                  this
                );
              },
              remove: function () {
                return this._map
                  ? (se(this._container),
                    this.onRemove && this.onRemove(this._map),
                    this._map.off("unload", this.remove, this),
                    (this._map = null),
                    this)
                  : this;
              },
              _refocusOnMap: function (t) {
                this._map &&
                  t &&
                  t.screenX > 0 &&
                  t.screenY > 0 &&
                  this._map.getContainer().focus();
              },
            }),
            Ge = function (t) {
              return new Ye(t);
            };
          Ve.include({
            addControl: function (t) {
              return t.addTo(this), this;
            },
            removeControl: function (t) {
              return t.remove(), this;
            },
            _initControlPos: function () {
              var t = (this._controlCorners = {}),
                e = "leaflet-",
                n = (this._controlContainer = re(
                  "div",
                  e + "control-container",
                  this._container,
                ));
              function i(i, o) {
                var r = e + i + " " + e + o;
                t[i + o] = re("div", r, n);
              }
              i("top", "left"),
                i("top", "right"),
                i("bottom", "left"),
                i("bottom", "right");
            },
            _clearControlPos: function () {
              for (var t in this._controlCorners) se(this._controlCorners[t]);
              se(this._controlContainer),
                delete this._controlCorners,
                delete this._controlContainer;
            },
          });
          var Xe = Ye.extend({
              options: {
                collapsed: !0,
                position: "topright",
                autoZIndex: !0,
                hideSingleBase: !1,
                sortLayers: !1,
                sortFunction: function (t, e, n, i) {
                  return n < i ? -1 : i < n ? 1 : 0;
                },
              },
              initialize: function (t, e, n) {
                for (var i in (f(this, n),
                (this._layerControlInputs = []),
                (this._layers = []),
                (this._lastZIndex = 0),
                (this._handlingClick = !1),
                (this._preventClick = !1),
                t))
                  this._addLayer(t[i], i);
                for (i in e) this._addLayer(e[i], i, !0);
              },
              onAdd: function (t) {
                this._initLayout(),
                  this._update(),
                  (this._map = t),
                  t.on("zoomend", this._checkDisabledLayers, this);
                for (var e = 0; e < this._layers.length; e++)
                  this._layers[e].layer.on(
                    "add remove",
                    this._onLayerChange,
                    this,
                  );
                return this._container;
              },
              addTo: function (t) {
                return (
                  Ye.prototype.addTo.call(this, t), this._expandIfNotCollapsed()
                );
              },
              onRemove: function () {
                this._map.off("zoomend", this._checkDisabledLayers, this);
                for (var t = 0; t < this._layers.length; t++)
                  this._layers[t].layer.off(
                    "add remove",
                    this._onLayerChange,
                    this,
                  );
              },
              addBaseLayer: function (t, e) {
                return this._addLayer(t, e), this._map ? this._update() : this;
              },
              addOverlay: function (t, e) {
                return (
                  this._addLayer(t, e, !0), this._map ? this._update() : this
                );
              },
              removeLayer: function (t) {
                t.off("add remove", this._onLayerChange, this);
                var e = this._getLayer(r(t));
                return (
                  e && this._layers.splice(this._layers.indexOf(e), 1),
                  this._map ? this._update() : this
                );
              },
              expand: function () {
                ce(this._container, "leaflet-control-layers-expanded"),
                  (this._section.style.height = null);
                var t =
                  this._map.getSize().y - (this._container.offsetTop + 50);
                return (
                  t < this._section.clientHeight
                    ? (ce(this._section, "leaflet-control-layers-scrollbar"),
                      (this._section.style.height = t + "px"))
                    : fe(this._section, "leaflet-control-layers-scrollbar"),
                  this._checkDisabledLayers(),
                  this
                );
              },
              collapse: function () {
                return (
                  fe(this._container, "leaflet-control-layers-expanded"), this
                );
              },
              _initLayout: function () {
                var t = "leaflet-control-layers",
                  e = (this._container = re("div", t)),
                  n = this.options.collapsed;
                e.setAttribute("aria-haspopup", !0), Ne(e), Be(e);
                var i = (this._section = re("section", t + "-list"));
                n &&
                  (this._map.on("click", this.collapse, this),
                  Se(
                    e,
                    {
                      mouseenter: this._expandSafely,
                      mouseleave: this.collapse,
                    },
                    this,
                  ));
                var o = (this._layersLink = re("a", t + "-toggle", e));
                (o.href = "#"),
                  (o.title = "Layers"),
                  o.setAttribute("role", "button"),
                  Se(
                    o,
                    {
                      keydown: function (t) {
                        13 === t.keyCode && this._expandSafely();
                      },
                      click: function (t) {
                        De(t), this._expandSafely();
                      },
                    },
                    this,
                  ),
                  n || this.expand(),
                  (this._baseLayersList = re("div", t + "-base", i)),
                  (this._separator = re("div", t + "-separator", i)),
                  (this._overlaysList = re("div", t + "-overlays", i)),
                  e.appendChild(i);
              },
              _getLayer: function (t) {
                for (var e = 0; e < this._layers.length; e++)
                  if (this._layers[e] && r(this._layers[e].layer) === t)
                    return this._layers[e];
              },
              _addLayer: function (t, e, n) {
                this._map && t.on("add remove", this._onLayerChange, this),
                  this._layers.push({ layer: t, name: e, overlay: n }),
                  this.options.sortLayers &&
                    this._layers.sort(
                      i(function (t, e) {
                        return this.options.sortFunction(
                          t.layer,
                          e.layer,
                          t.name,
                          e.name,
                        );
                      }, this),
                    ),
                  this.options.autoZIndex &&
                    t.setZIndex &&
                    (this._lastZIndex++, t.setZIndex(this._lastZIndex)),
                  this._expandIfNotCollapsed();
              },
              _update: function () {
                if (!this._container) return this;
                ae(this._baseLayersList),
                  ae(this._overlaysList),
                  (this._layerControlInputs = []);
                var t,
                  e,
                  n,
                  i,
                  o = 0;
                for (n = 0; n < this._layers.length; n++)
                  (i = this._layers[n]),
                    this._addItem(i),
                    (e = e || i.overlay),
                    (t = t || !i.overlay),
                    (o += i.overlay ? 0 : 1);
                return (
                  this.options.hideSingleBase &&
                    ((t = t && o > 1),
                    (this._baseLayersList.style.display = t ? "" : "none")),
                  (this._separator.style.display = e && t ? "" : "none"),
                  this
                );
              },
              _onLayerChange: function (t) {
                this._handlingClick || this._update();
                var e = this._getLayer(r(t.target)),
                  n = e.overlay
                    ? "add" === t.type
                      ? "overlayadd"
                      : "overlayremove"
                    : "add" === t.type
                      ? "baselayerchange"
                      : null;
                n && this._map.fire(n, e);
              },
              _createRadioElement: function (t, e) {
                var n =
                    '<input type="radio" class="leaflet-control-layers-selector" name="' +
                    t +
                    '"' +
                    (e ? ' checked="checked"' : "") +
                    "/>",
                  i = document.createElement("div");
                return (i.innerHTML = n), i.firstChild;
              },
              _addItem: function (t) {
                var e,
                  n = document.createElement("label"),
                  i = this._map.hasLayer(t.layer);
                t.overlay
                  ? (((e = document.createElement("input")).type = "checkbox"),
                    (e.className = "leaflet-control-layers-selector"),
                    (e.defaultChecked = i))
                  : (e = this._createRadioElement(
                      "leaflet-base-layers_" + r(this),
                      i,
                    )),
                  this._layerControlInputs.push(e),
                  (e.layerId = r(t.layer)),
                  Se(e, "click", this._onInputClick, this);
                var o = document.createElement("span");
                o.innerHTML = " " + t.name;
                var s = document.createElement("span");
                return (
                  n.appendChild(s),
                  s.appendChild(e),
                  s.appendChild(o),
                  (t.overlay
                    ? this._overlaysList
                    : this._baseLayersList
                  ).appendChild(n),
                  this._checkDisabledLayers(),
                  n
                );
              },
              _onInputClick: function () {
                if (!this._preventClick) {
                  var t,
                    e,
                    n = this._layerControlInputs,
                    i = [],
                    o = [];
                  this._handlingClick = !0;
                  for (var r = n.length - 1; r >= 0; r--)
                    (t = n[r]),
                      (e = this._getLayer(t.layerId).layer),
                      t.checked ? i.push(e) : t.checked || o.push(e);
                  for (r = 0; r < o.length; r++)
                    this._map.hasLayer(o[r]) && this._map.removeLayer(o[r]);
                  for (r = 0; r < i.length; r++)
                    this._map.hasLayer(i[r]) || this._map.addLayer(i[r]);
                  (this._handlingClick = !1), this._refocusOnMap();
                }
              },
              _checkDisabledLayers: function () {
                for (
                  var t,
                    e,
                    n = this._layerControlInputs,
                    i = this._map.getZoom(),
                    o = n.length - 1;
                  o >= 0;
                  o--
                )
                  (t = n[o]),
                    (e = this._getLayer(t.layerId).layer),
                    (t.disabled =
                      (void 0 !== e.options.minZoom && i < e.options.minZoom) ||
                      (void 0 !== e.options.maxZoom && i > e.options.maxZoom));
              },
              _expandIfNotCollapsed: function () {
                return (
                  this._map && !this.options.collapsed && this.expand(), this
                );
              },
              _expandSafely: function () {
                var t = this._section;
                (this._preventClick = !0), Se(t, "click", De), this.expand();
                var e = this;
                setTimeout(function () {
                  ke(t, "click", De), (e._preventClick = !1);
                });
              },
            }),
            Ke = Ye.extend({
              options: {
                position: "topleft",
                zoomInText: '<span aria-hidden="true">+</span>',
                zoomInTitle: "Zoom in",
                zoomOutText: '<span aria-hidden="true">&#x2212;</span>',
                zoomOutTitle: "Zoom out",
              },
              onAdd: function (t) {
                var e = "leaflet-control-zoom",
                  n = re("div", e + " leaflet-bar"),
                  i = this.options;
                return (
                  (this._zoomInButton = this._createButton(
                    i.zoomInText,
                    i.zoomInTitle,
                    e + "-in",
                    n,
                    this._zoomIn,
                  )),
                  (this._zoomOutButton = this._createButton(
                    i.zoomOutText,
                    i.zoomOutTitle,
                    e + "-out",
                    n,
                    this._zoomOut,
                  )),
                  this._updateDisabled(),
                  t.on("zoomend zoomlevelschange", this._updateDisabled, this),
                  n
                );
              },
              onRemove: function (t) {
                t.off("zoomend zoomlevelschange", this._updateDisabled, this);
              },
              disable: function () {
                return (this._disabled = !0), this._updateDisabled(), this;
              },
              enable: function () {
                return (this._disabled = !1), this._updateDisabled(), this;
              },
              _zoomIn: function (t) {
                !this._disabled &&
                  this._map._zoom < this._map.getMaxZoom() &&
                  this._map.zoomIn(
                    this._map.options.zoomDelta * (t.shiftKey ? 3 : 1),
                  );
              },
              _zoomOut: function (t) {
                !this._disabled &&
                  this._map._zoom > this._map.getMinZoom() &&
                  this._map.zoomOut(
                    this._map.options.zoomDelta * (t.shiftKey ? 3 : 1),
                  );
              },
              _createButton: function (t, e, n, i, o) {
                var r = re("a", n, i);
                return (
                  (r.innerHTML = t),
                  (r.href = "#"),
                  (r.title = e),
                  r.setAttribute("role", "button"),
                  r.setAttribute("aria-label", e),
                  Ne(r),
                  Se(r, "click", je),
                  Se(r, "click", o, this),
                  Se(r, "click", this._refocusOnMap, this),
                  r
                );
              },
              _updateDisabled: function () {
                var t = this._map,
                  e = "leaflet-disabled";
                fe(this._zoomInButton, e),
                  fe(this._zoomOutButton, e),
                  this._zoomInButton.setAttribute("aria-disabled", "false"),
                  this._zoomOutButton.setAttribute("aria-disabled", "false"),
                  (this._disabled || t._zoom === t.getMinZoom()) &&
                    (ce(this._zoomOutButton, e),
                    this._zoomOutButton.setAttribute("aria-disabled", "true")),
                  (this._disabled || t._zoom === t.getMaxZoom()) &&
                    (ce(this._zoomInButton, e),
                    this._zoomInButton.setAttribute("aria-disabled", "true"));
              },
            });
          Ve.mergeOptions({ zoomControl: !0 }),
            Ve.addInitHook(function () {
              this.options.zoomControl &&
                ((this.zoomControl = new Ke()),
                this.addControl(this.zoomControl));
            });
          var Je = Ye.extend({
              options: {
                position: "bottomleft",
                maxWidth: 100,
                metric: !0,
                imperial: !0,
              },
              onAdd: function (t) {
                var e = "leaflet-control-scale",
                  n = re("div", e),
                  i = this.options;
                return (
                  this._addScales(i, e + "-line", n),
                  t.on(
                    i.updateWhenIdle ? "moveend" : "move",
                    this._update,
                    this,
                  ),
                  t.whenReady(this._update, this),
                  n
                );
              },
              onRemove: function (t) {
                t.off(
                  this.options.updateWhenIdle ? "moveend" : "move",
                  this._update,
                  this,
                );
              },
              _addScales: function (t, e, n) {
                t.metric && (this._mScale = re("div", e, n)),
                  t.imperial && (this._iScale = re("div", e, n));
              },
              _update: function () {
                var t = this._map,
                  e = t.getSize().y / 2,
                  n = t.distance(
                    t.containerPointToLatLng([0, e]),
                    t.containerPointToLatLng([this.options.maxWidth, e]),
                  );
                this._updateScales(n);
              },
              _updateScales: function (t) {
                this.options.metric && t && this._updateMetric(t),
                  this.options.imperial && t && this._updateImperial(t);
              },
              _updateMetric: function (t) {
                var e = this._getRoundNum(t),
                  n = e < 1e3 ? e + " m" : e / 1e3 + " km";
                this._updateScale(this._mScale, n, e / t);
              },
              _updateImperial: function (t) {
                var e,
                  n,
                  i,
                  o = 3.2808399 * t;
                o > 5280
                  ? ((e = o / 5280),
                    (n = this._getRoundNum(e)),
                    this._updateScale(this._iScale, n + " mi", n / e))
                  : ((i = this._getRoundNum(o)),
                    this._updateScale(this._iScale, i + " ft", i / o));
              },
              _updateScale: function (t, e, n) {
                (t.style.width = Math.round(this.options.maxWidth * n) + "px"),
                  (t.innerHTML = e);
              },
              _getRoundNum: function (t) {
                var e = Math.pow(10, (Math.floor(t) + "").length - 1),
                  n = t / e;
                return (
                  e * (n >= 10 ? 10 : n >= 5 ? 5 : n >= 3 ? 3 : n >= 2 ? 2 : 1)
                );
              },
            }),
            Qe = Ye.extend({
              options: {
                position: "bottomright",
                prefix:
                  '<a href="https://leafletjs.com" title="A JavaScript library for interactive maps">' +
                  (Zt.inlineSvg
                    ? '<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" class="leaflet-attribution-flag"><path fill="#4C7BE1" d="M0 0h12v4H0z"/><path fill="#FFD500" d="M0 4h12v3H0z"/><path fill="#E0BC00" d="M0 7h12v1H0z"/></svg> '
                    : "") +
                  "Leaflet</a>",
              },
              initialize: function (t) {
                f(this, t), (this._attributions = {});
              },
              onAdd: function (t) {
                for (var e in ((t.attributionControl = this),
                (this._container = re("div", "leaflet-control-attribution")),
                Ne(this._container),
                t._layers))
                  t._layers[e].getAttribution &&
                    this.addAttribution(t._layers[e].getAttribution());
                return (
                  this._update(),
                  t.on("layeradd", this._addAttribution, this),
                  this._container
                );
              },
              onRemove: function (t) {
                t.off("layeradd", this._addAttribution, this);
              },
              _addAttribution: function (t) {
                t.layer.getAttribution &&
                  (this.addAttribution(t.layer.getAttribution()),
                  t.layer.once(
                    "remove",
                    function () {
                      this.removeAttribution(t.layer.getAttribution());
                    },
                    this,
                  ));
              },
              setPrefix: function (t) {
                return (this.options.prefix = t), this._update(), this;
              },
              addAttribution: function (t) {
                return t
                  ? (this._attributions[t] || (this._attributions[t] = 0),
                    this._attributions[t]++,
                    this._update(),
                    this)
                  : this;
              },
              removeAttribution: function (t) {
                return t
                  ? (this._attributions[t] &&
                      (this._attributions[t]--, this._update()),
                    this)
                  : this;
              },
              _update: function () {
                if (this._map) {
                  var t = [];
                  for (var e in this._attributions)
                    this._attributions[e] && t.push(e);
                  var n = [];
                  this.options.prefix && n.push(this.options.prefix),
                    t.length && n.push(t.join(", ")),
                    (this._container.innerHTML = n.join(
                      ' <span aria-hidden="true">|</span> ',
                    ));
                }
              },
            });
          Ve.mergeOptions({ attributionControl: !0 }),
            Ve.addInitHook(function () {
              this.options.attributionControl && new Qe().addTo(this);
            });
          (Ye.Layers = Xe),
            (Ye.Zoom = Ke),
            (Ye.Scale = Je),
            (Ye.Attribution = Qe),
            (Ge.layers = function (t, e, n) {
              return new Xe(t, e, n);
            }),
            (Ge.zoom = function (t) {
              return new Ke(t);
            }),
            (Ge.scale = function (t) {
              return new Je(t);
            }),
            (Ge.attribution = function (t) {
              return new Qe(t);
            });
          var tn = S.extend({
            initialize: function (t) {
              this._map = t;
            },
            enable: function () {
              return (
                this._enabled || ((this._enabled = !0), this.addHooks()), this
              );
            },
            disable: function () {
              return this._enabled
                ? ((this._enabled = !1), this.removeHooks(), this)
                : this;
            },
            enabled: function () {
              return !!this._enabled;
            },
          });
          tn.addTo = function (t, e) {
            return t.addHandler(e, this), this;
          };
          var en = { Events: E },
            nn = Zt.touch ? "touchstart mousedown" : "mousedown",
            on = k.extend({
              options: { clickTolerance: 3 },
              initialize: function (t, e, n, i) {
                f(this, i),
                  (this._element = t),
                  (this._dragStartTarget = e || t),
                  (this._preventOutline = n);
              },
              enable: function () {
                this._enabled ||
                  (Se(this._dragStartTarget, nn, this._onDown, this),
                  (this._enabled = !0));
              },
              disable: function () {
                this._enabled &&
                  (on._dragging === this && this.finishDrag(!0),
                  ke(this._dragStartTarget, nn, this._onDown, this),
                  (this._enabled = !1),
                  (this._moved = !1));
              },
              _onDown: function (t) {
                if (
                  this._enabled &&
                  ((this._moved = !1), !le(this._element, "leaflet-zoom-anim"))
                )
                  if (t.touches && 1 !== t.touches.length)
                    on._dragging === this && this.finishDrag();
                  else if (
                    !(
                      on._dragging ||
                      t.shiftKey ||
                      (1 !== t.which && 1 !== t.button && !t.touches) ||
                      ((on._dragging = this),
                      this._preventOutline && Le(this._element),
                      xe(),
                      Gt(),
                      this._moving)
                    )
                  ) {
                    this.fire("down");
                    var e = t.touches ? t.touches[0] : t,
                      n = Pe(this._element);
                    (this._startPoint = new z(e.clientX, e.clientY)),
                      (this._startPos = ye(this._element)),
                      (this._parentScale = Me(n));
                    var i = "mousedown" === t.type;
                    Se(
                      document,
                      i ? "mousemove" : "touchmove",
                      this._onMove,
                      this,
                    ),
                      Se(
                        document,
                        i ? "mouseup" : "touchend touchcancel",
                        this._onUp,
                        this,
                      );
                  }
              },
              _onMove: function (t) {
                if (this._enabled)
                  if (t.touches && t.touches.length > 1) this._moved = !0;
                  else {
                    var e =
                        t.touches && 1 === t.touches.length ? t.touches[0] : t,
                      n = new z(e.clientX, e.clientY)._subtract(
                        this._startPoint,
                      );
                    (n.x || n.y) &&
                      (Math.abs(n.x) + Math.abs(n.y) <
                        this.options.clickTolerance ||
                        ((n.x /= this._parentScale.x),
                        (n.y /= this._parentScale.y),
                        De(t),
                        this._moved ||
                          (this.fire("dragstart"),
                          (this._moved = !0),
                          ce(document.body, "leaflet-dragging"),
                          (this._lastTarget = t.target || t.srcElement),
                          window.SVGElementInstance &&
                            this._lastTarget instanceof
                              window.SVGElementInstance &&
                            (this._lastTarget =
                              this._lastTarget.correspondingUseElement),
                          ce(this._lastTarget, "leaflet-drag-target")),
                        (this._newPos = this._startPos.add(n)),
                        (this._moving = !0),
                        (this._lastEvent = t),
                        this._updatePosition()));
                  }
              },
              _updatePosition: function () {
                var t = { originalEvent: this._lastEvent };
                this.fire("predrag", t),
                  ve(this._element, this._newPos),
                  this.fire("drag", t);
              },
              _onUp: function () {
                this._enabled && this.finishDrag();
              },
              finishDrag: function (t) {
                fe(document.body, "leaflet-dragging"),
                  this._lastTarget &&
                    (fe(this._lastTarget, "leaflet-drag-target"),
                    (this._lastTarget = null)),
                  ke(document, "mousemove touchmove", this._onMove, this),
                  ke(
                    document,
                    "mouseup touchend touchcancel",
                    this._onUp,
                    this,
                  ),
                  be(),
                  Xt();
                var e = this._moved && this._moving;
                (this._moving = !1),
                  (on._dragging = !1),
                  e &&
                    this.fire("dragend", {
                      noInertia: t,
                      distance: this._newPos.distanceTo(this._startPos),
                    });
              },
            });
          function rn(t, e, n) {
            var i,
              o,
              r,
              s,
              a,
              u,
              h,
              l,
              c,
              f = [1, 4, 2, 8];
            for (o = 0, h = t.length; o < h; o++) t[o]._code = _n(t[o], e);
            for (s = 0; s < 4; s++) {
              for (
                l = f[s], i = [], o = 0, r = (h = t.length) - 1;
                o < h;
                r = o++
              )
                (a = t[o]),
                  (u = t[r]),
                  a._code & l
                    ? u._code & l ||
                      (((c = pn(u, a, l, e, n))._code = _n(c, e)), i.push(c))
                    : (u._code & l &&
                        (((c = pn(u, a, l, e, n))._code = _n(c, e)), i.push(c)),
                      i.push(a));
              t = i;
            }
            return t;
          }
          function sn(t, e) {
            var n, i, o, r, s, a, u, h, l;
            if (!t || 0 === t.length) throw new Error("latlngs not passed");
            vn(t) ||
              (console.warn(
                "latlngs are not flat! Only the first ring will be used",
              ),
              (t = t[0]));
            var c = j([0, 0]),
              f = N(t);
            f.getNorthWest().distanceTo(f.getSouthWest()) *
              f.getNorthEast().distanceTo(f.getNorthWest()) <
              1700 && (c = an(t));
            var d = t.length,
              p = [];
            for (n = 0; n < d; n++) {
              var _ = j(t[n]);
              p.push(e.project(j([_.lat - c.lat, _.lng - c.lng])));
            }
            for (a = u = h = 0, n = 0, i = d - 1; n < d; i = n++)
              (o = p[n]),
                (r = p[i]),
                (s = o.y * r.x - r.y * o.x),
                (u += (o.x + r.x) * s),
                (h += (o.y + r.y) * s),
                (a += 3 * s);
            l = 0 === a ? p[0] : [u / a, h / a];
            var m = e.unproject(O(l));
            return j([m.lat + c.lat, m.lng + c.lng]);
          }
          function an(t) {
            for (var e = 0, n = 0, i = 0, o = 0; o < t.length; o++) {
              var r = j(t[o]);
              (e += r.lat), (n += r.lng), i++;
            }
            return j([e / i, n / i]);
          }
          var un,
            hn = {
              __proto__: null,
              clipPolygon: rn,
              polygonCenter: sn,
              centroid: an,
            };
          function ln(t, e) {
            if (!e || !t.length) return t.slice();
            var n = e * e;
            return (function (t, e) {
              var n = t.length,
                i = new (typeof Uint8Array != void 0 + "" ? Uint8Array : Array)(
                  n,
                );
              (i[0] = i[n - 1] = 1), fn(t, i, e, 0, n - 1);
              var o,
                r = [];
              for (o = 0; o < n; o++) i[o] && r.push(t[o]);
              return r;
            })(
              (t = (function (t, e) {
                for (var n = [t[0]], i = 1, o = 0, r = t.length; i < r; i++)
                  mn(t[i], t[o]) > e && (n.push(t[i]), (o = i));
                return o < r - 1 && n.push(t[r - 1]), n;
              })(t, n)),
              n,
            );
          }
          function cn(t, e, n) {
            return Math.sqrt(gn(t, e, n, !0));
          }
          function fn(t, e, n, i, o) {
            var r,
              s,
              a,
              u = 0;
            for (s = i + 1; s <= o - 1; s++)
              (a = gn(t[s], t[i], t[o], !0)) > u && ((r = s), (u = a));
            u > n && ((e[r] = 1), fn(t, e, n, i, r), fn(t, e, n, r, o));
          }
          function dn(t, e, n, i, o) {
            var r,
              s,
              a,
              u = i ? un : _n(t, n),
              h = _n(e, n);
            for (un = h; ; ) {
              if (!(u | h)) return [t, e];
              if (u & h) return !1;
              (a = _n((s = pn(t, e, (r = u || h), n, o)), n)),
                r === u ? ((t = s), (u = a)) : ((e = s), (h = a));
            }
          }
          function pn(t, e, n, i, o) {
            var r,
              s,
              a = e.x - t.x,
              u = e.y - t.y,
              h = i.min,
              l = i.max;
            return (
              8 & n
                ? ((r = t.x + (a * (l.y - t.y)) / u), (s = l.y))
                : 4 & n
                  ? ((r = t.x + (a * (h.y - t.y)) / u), (s = h.y))
                  : 2 & n
                    ? ((r = l.x), (s = t.y + (u * (l.x - t.x)) / a))
                    : 1 & n && ((r = h.x), (s = t.y + (u * (h.x - t.x)) / a)),
              new z(r, s, o)
            );
          }
          function _n(t, e) {
            var n = 0;
            return (
              t.x < e.min.x ? (n |= 1) : t.x > e.max.x && (n |= 2),
              t.y < e.min.y ? (n |= 4) : t.y > e.max.y && (n |= 8),
              n
            );
          }
          function mn(t, e) {
            var n = e.x - t.x,
              i = e.y - t.y;
            return n * n + i * i;
          }
          function gn(t, e, n, i) {
            var o,
              r = e.x,
              s = e.y,
              a = n.x - r,
              u = n.y - s,
              h = a * a + u * u;
            return (
              h > 0 &&
                ((o = ((t.x - r) * a + (t.y - s) * u) / h) > 1
                  ? ((r = n.x), (s = n.y))
                  : o > 0 && ((r += a * o), (s += u * o))),
              (a = t.x - r),
              (u = t.y - s),
              i ? a * a + u * u : new z(r, s)
            );
          }
          function vn(t) {
            return (
              !m(t[0]) || ("object" != typeof t[0][0] && void 0 !== t[0][0])
            );
          }
          function yn(t) {
            return (
              console.warn(
                "Deprecated use of _flat, please use L.LineUtil.isFlat instead.",
              ),
              vn(t)
            );
          }
          function wn(t, e) {
            var n, i, o, r, s, a, u, h;
            if (!t || 0 === t.length) throw new Error("latlngs not passed");
            vn(t) ||
              (console.warn(
                "latlngs are not flat! Only the first ring will be used",
              ),
              (t = t[0]));
            var l = j([0, 0]),
              c = N(t);
            c.getNorthWest().distanceTo(c.getSouthWest()) *
              c.getNorthEast().distanceTo(c.getNorthWest()) <
              1700 && (l = an(t));
            var f = t.length,
              d = [];
            for (n = 0; n < f; n++) {
              var p = j(t[n]);
              d.push(e.project(j([p.lat - l.lat, p.lng - l.lng])));
            }
            for (n = 0, i = 0; n < f - 1; n++)
              i += d[n].distanceTo(d[n + 1]) / 2;
            if (0 === i) h = d[0];
            else
              for (n = 0, r = 0; n < f - 1; n++)
                if (
                  ((s = d[n]), (a = d[n + 1]), (r += o = s.distanceTo(a)) > i)
                ) {
                  (u = (r - i) / o),
                    (h = [a.x - u * (a.x - s.x), a.y - u * (a.y - s.y)]);
                  break;
                }
            var _ = e.unproject(O(h));
            return j([_.lat + l.lat, _.lng + l.lng]);
          }
          var xn = {
              __proto__: null,
              simplify: ln,
              pointToSegmentDistance: cn,
              closestPointOnSegment: function (t, e, n) {
                return gn(t, e, n);
              },
              clipSegment: dn,
              _getEdgeIntersection: pn,
              _getBitCode: _n,
              _sqClosestPointOnSegment: gn,
              isFlat: vn,
              _flat: yn,
              polylineCenter: wn,
            },
            bn = {
              project: function (t) {
                return new z(t.lng, t.lat);
              },
              unproject: function (t) {
                return new D(t.y, t.x);
              },
              bounds: new Z([-180, -90], [180, 90]),
            },
            Ln = {
              R: 6378137,
              R_MINOR: 6356752.314245179,
              bounds: new Z(
                [-20037508.34279, -15496570.73972],
                [20037508.34279, 18764656.23138],
              ),
              project: function (t) {
                var e = Math.PI / 180,
                  n = this.R,
                  i = t.lat * e,
                  o = this.R_MINOR / n,
                  r = Math.sqrt(1 - o * o),
                  s = r * Math.sin(i),
                  a =
                    Math.tan(Math.PI / 4 - i / 2) /
                    Math.pow((1 - s) / (1 + s), r / 2);
                return (
                  (i = -n * Math.log(Math.max(a, 1e-10))),
                  new z(t.lng * e * n, i)
                );
              },
              unproject: function (t) {
                for (
                  var e,
                    n = 180 / Math.PI,
                    i = this.R,
                    o = this.R_MINOR / i,
                    r = Math.sqrt(1 - o * o),
                    s = Math.exp(-t.y / i),
                    a = Math.PI / 2 - 2 * Math.atan(s),
                    u = 0,
                    h = 0.1;
                  u < 15 && Math.abs(h) > 1e-7;
                  u++
                )
                  (e = r * Math.sin(a)),
                    (e = Math.pow((1 - e) / (1 + e), r / 2)),
                    (a += h = Math.PI / 2 - 2 * Math.atan(s * e) - a);
                return new D(a * n, (t.x * n) / i);
              },
            },
            Tn = {
              __proto__: null,
              LonLat: bn,
              Mercator: Ln,
              SphericalMercator: $,
            },
            Pn = e({}, H, {
              code: "EPSG:3395",
              projection: Ln,
              transformation: (function () {
                var t = 0.5 / (Math.PI * Ln.R);
                return q(t, 0.5, -t, 0.5);
              })(),
            }),
            Mn = e({}, H, {
              code: "EPSG:4326",
              projection: bn,
              transformation: q(1 / 180, 1, -1 / 180, 0.5),
            }),
            Cn = e({}, F, {
              projection: bn,
              transformation: q(1, 0, -1, 0),
              scale: function (t) {
                return Math.pow(2, t);
              },
              zoom: function (t) {
                return Math.log(t) / Math.LN2;
              },
              distance: function (t, e) {
                var n = e.lng - t.lng,
                  i = e.lat - t.lat;
                return Math.sqrt(n * n + i * i);
              },
              infinite: !0,
            });
          (F.Earth = H),
            (F.EPSG3395 = Pn),
            (F.EPSG3857 = V),
            (F.EPSG900913 = Y),
            (F.EPSG4326 = Mn),
            (F.Simple = Cn);
          var Sn = k.extend({
            options: {
              pane: "overlayPane",
              attribution: null,
              bubblingMouseEvents: !0,
            },
            addTo: function (t) {
              return t.addLayer(this), this;
            },
            remove: function () {
              return this.removeFrom(this._map || this._mapToAdd);
            },
            removeFrom: function (t) {
              return t && t.removeLayer(this), this;
            },
            getPane: function (t) {
              return this._map.getPane(
                t ? this.options[t] || t : this.options.pane,
              );
            },
            addInteractiveTarget: function (t) {
              return (this._map._targets[r(t)] = this), this;
            },
            removeInteractiveTarget: function (t) {
              return delete this._map._targets[r(t)], this;
            },
            getAttribution: function () {
              return this.options.attribution;
            },
            _layerAdd: function (t) {
              var e = t.target;
              if (e.hasLayer(this)) {
                if (
                  ((this._map = e),
                  (this._zoomAnimated = e._zoomAnimated),
                  this.getEvents)
                ) {
                  var n = this.getEvents();
                  e.on(n, this),
                    this.once(
                      "remove",
                      function () {
                        e.off(n, this);
                      },
                      this,
                    );
                }
                this.onAdd(e),
                  this.fire("add"),
                  e.fire("layeradd", { layer: this });
              }
            },
          });
          Ve.include({
            addLayer: function (t) {
              if (!t._layerAdd)
                throw new Error("The provided object is not a Layer.");
              var e = r(t);
              return (
                this._layers[e] ||
                  ((this._layers[e] = t),
                  (t._mapToAdd = this),
                  t.beforeAdd && t.beforeAdd(this),
                  this.whenReady(t._layerAdd, t)),
                this
              );
            },
            removeLayer: function (t) {
              var e = r(t);
              return this._layers[e]
                ? (this._loaded && t.onRemove(this),
                  delete this._layers[e],
                  this._loaded &&
                    (this.fire("layerremove", { layer: t }), t.fire("remove")),
                  (t._map = t._mapToAdd = null),
                  this)
                : this;
            },
            hasLayer: function (t) {
              return r(t) in this._layers;
            },
            eachLayer: function (t, e) {
              for (var n in this._layers) t.call(e, this._layers[n]);
              return this;
            },
            _addLayers: function (t) {
              for (
                var e = 0, n = (t = t ? (m(t) ? t : [t]) : []).length;
                e < n;
                e++
              )
                this.addLayer(t[e]);
            },
            _addZoomLimit: function (t) {
              (isNaN(t.options.maxZoom) && isNaN(t.options.minZoom)) ||
                ((this._zoomBoundLayers[r(t)] = t), this._updateZoomLevels());
            },
            _removeZoomLimit: function (t) {
              var e = r(t);
              this._zoomBoundLayers[e] &&
                (delete this._zoomBoundLayers[e], this._updateZoomLevels());
            },
            _updateZoomLevels: function () {
              var t = 1 / 0,
                e = -1 / 0,
                n = this._getZoomSpan();
              for (var i in this._zoomBoundLayers) {
                var o = this._zoomBoundLayers[i].options;
                (t = void 0 === o.minZoom ? t : Math.min(t, o.minZoom)),
                  (e = void 0 === o.maxZoom ? e : Math.max(e, o.maxZoom));
              }
              (this._layersMaxZoom = e === -1 / 0 ? void 0 : e),
                (this._layersMinZoom = t === 1 / 0 ? void 0 : t),
                n !== this._getZoomSpan() && this.fire("zoomlevelschange"),
                void 0 === this.options.maxZoom &&
                  this._layersMaxZoom &&
                  this.getZoom() > this._layersMaxZoom &&
                  this.setZoom(this._layersMaxZoom),
                void 0 === this.options.minZoom &&
                  this._layersMinZoom &&
                  this.getZoom() < this._layersMinZoom &&
                  this.setZoom(this._layersMinZoom);
            },
          });
          var En = Sn.extend({
              initialize: function (t, e) {
                var n, i;
                if ((f(this, e), (this._layers = {}), t))
                  for (n = 0, i = t.length; n < i; n++) this.addLayer(t[n]);
              },
              addLayer: function (t) {
                var e = this.getLayerId(t);
                return (
                  (this._layers[e] = t),
                  this._map && this._map.addLayer(t),
                  this
                );
              },
              removeLayer: function (t) {
                var e = t in this._layers ? t : this.getLayerId(t);
                return (
                  this._map &&
                    this._layers[e] &&
                    this._map.removeLayer(this._layers[e]),
                  delete this._layers[e],
                  this
                );
              },
              hasLayer: function (t) {
                return (
                  ("number" == typeof t ? t : this.getLayerId(t)) in
                  this._layers
                );
              },
              clearLayers: function () {
                return this.eachLayer(this.removeLayer, this);
              },
              invoke: function (t) {
                var e,
                  n,
                  i = Array.prototype.slice.call(arguments, 1);
                for (e in this._layers)
                  (n = this._layers[e])[t] && n[t].apply(n, i);
                return this;
              },
              onAdd: function (t) {
                this.eachLayer(t.addLayer, t);
              },
              onRemove: function (t) {
                this.eachLayer(t.removeLayer, t);
              },
              eachLayer: function (t, e) {
                for (var n in this._layers) t.call(e, this._layers[n]);
                return this;
              },
              getLayer: function (t) {
                return this._layers[t];
              },
              getLayers: function () {
                var t = [];
                return this.eachLayer(t.push, t), t;
              },
              setZIndex: function (t) {
                return this.invoke("setZIndex", t);
              },
              getLayerId: function (t) {
                return r(t);
              },
            }),
            kn = En.extend({
              addLayer: function (t) {
                return this.hasLayer(t)
                  ? this
                  : (t.addEventParent(this),
                    En.prototype.addLayer.call(this, t),
                    this.fire("layeradd", { layer: t }));
              },
              removeLayer: function (t) {
                return this.hasLayer(t)
                  ? (t in this._layers && (t = this._layers[t]),
                    t.removeEventParent(this),
                    En.prototype.removeLayer.call(this, t),
                    this.fire("layerremove", { layer: t }))
                  : this;
              },
              setStyle: function (t) {
                return this.invoke("setStyle", t);
              },
              bringToFront: function () {
                return this.invoke("bringToFront");
              },
              bringToBack: function () {
                return this.invoke("bringToBack");
              },
              getBounds: function () {
                var t = new B();
                for (var e in this._layers) {
                  var n = this._layers[e];
                  t.extend(n.getBounds ? n.getBounds() : n.getLatLng());
                }
                return t;
              },
            }),
            zn = S.extend({
              options: {
                popupAnchor: [0, 0],
                tooltipAnchor: [0, 0],
                crossOrigin: !1,
              },
              initialize: function (t) {
                f(this, t);
              },
              createIcon: function (t) {
                return this._createIcon("icon", t);
              },
              createShadow: function (t) {
                return this._createIcon("shadow", t);
              },
              _createIcon: function (t, e) {
                var n = this._getIconUrl(t);
                if (!n) {
                  if ("icon" === t)
                    throw new Error(
                      "iconUrl not set in Icon options (see the docs).",
                    );
                  return null;
                }
                var i = this._createImg(n, e && "IMG" === e.tagName ? e : null);
                return (
                  this._setIconStyles(i, t),
                  (this.options.crossOrigin ||
                    "" === this.options.crossOrigin) &&
                    (i.crossOrigin =
                      !0 === this.options.crossOrigin
                        ? ""
                        : this.options.crossOrigin),
                  i
                );
              },
              _setIconStyles: function (t, e) {
                var n = this.options,
                  i = n[e + "Size"];
                "number" == typeof i && (i = [i, i]);
                var o = O(i),
                  r = O(
                    ("shadow" === e && n.shadowAnchor) ||
                      n.iconAnchor ||
                      (o && o.divideBy(2, !0)),
                  );
                (t.className =
                  "leaflet-marker-" + e + " " + (n.className || "")),
                  r &&
                    ((t.style.marginLeft = -r.x + "px"),
                    (t.style.marginTop = -r.y + "px")),
                  o &&
                    ((t.style.width = o.x + "px"),
                    (t.style.height = o.y + "px"));
              },
              _createImg: function (t, e) {
                return ((e = e || document.createElement("img")).src = t), e;
              },
              _getIconUrl: function (t) {
                return (
                  (Zt.retina && this.options[t + "RetinaUrl"]) ||
                  this.options[t + "Url"]
                );
              },
            });
          var An = zn.extend({
              options: {
                iconUrl: "marker-icon.png",
                iconRetinaUrl: "marker-icon-2x.png",
                shadowUrl: "marker-shadow.png",
                iconSize: [25, 41],
                iconAnchor: [12, 41],
                popupAnchor: [1, -34],
                tooltipAnchor: [16, -28],
                shadowSize: [41, 41],
              },
              _getIconUrl: function (t) {
                return (
                  "string" != typeof An.imagePath &&
                    (An.imagePath = this._detectIconPath()),
                  (this.options.imagePath || An.imagePath) +
                    zn.prototype._getIconUrl.call(this, t)
                );
              },
              _stripUrl: function (t) {
                var e = function (t, e, n) {
                  var i = e.exec(t);
                  return i && i[n];
                };
                return (
                  (t = e(t, /^url\((['"])?(.+)\1\)$/, 2)) &&
                  e(t, /^(.*)marker-icon\.png$/, 1)
                );
              },
              _detectIconPath: function () {
                var t = re("div", "leaflet-default-icon-path", document.body),
                  e = oe(t, "background-image") || oe(t, "backgroundImage");
                if ((document.body.removeChild(t), (e = this._stripUrl(e))))
                  return e;
                var n = document.querySelector('link[href$="leaflet.css"]');
                return n ? n.href.substring(0, n.href.length - 11 - 1) : "";
              },
            }),
            On = tn.extend({
              initialize: function (t) {
                this._marker = t;
              },
              addHooks: function () {
                var t = this._marker._icon;
                this._draggable || (this._draggable = new on(t, t, !0)),
                  this._draggable
                    .on(
                      {
                        dragstart: this._onDragStart,
                        predrag: this._onPreDrag,
                        drag: this._onDrag,
                        dragend: this._onDragEnd,
                      },
                      this,
                    )
                    .enable(),
                  ce(t, "leaflet-marker-draggable");
              },
              removeHooks: function () {
                this._draggable
                  .off(
                    {
                      dragstart: this._onDragStart,
                      predrag: this._onPreDrag,
                      drag: this._onDrag,
                      dragend: this._onDragEnd,
                    },
                    this,
                  )
                  .disable(),
                  this._marker._icon &&
                    fe(this._marker._icon, "leaflet-marker-draggable");
              },
              moved: function () {
                return this._draggable && this._draggable._moved;
              },
              _adjustPan: function (t) {
                var e = this._marker,
                  n = e._map,
                  i = this._marker.options.autoPanSpeed,
                  o = this._marker.options.autoPanPadding,
                  r = ye(e._icon),
                  s = n.getPixelBounds(),
                  a = n.getPixelOrigin(),
                  u = I(
                    s.min._subtract(a).add(o),
                    s.max._subtract(a).subtract(o),
                  );
                if (!u.contains(r)) {
                  var h = O(
                    (Math.max(u.max.x, r.x) - u.max.x) / (s.max.x - u.max.x) -
                      (Math.min(u.min.x, r.x) - u.min.x) / (s.min.x - u.min.x),
                    (Math.max(u.max.y, r.y) - u.max.y) / (s.max.y - u.max.y) -
                      (Math.min(u.min.y, r.y) - u.min.y) / (s.min.y - u.min.y),
                  ).multiplyBy(i);
                  n.panBy(h, { animate: !1 }),
                    this._draggable._newPos._add(h),
                    this._draggable._startPos._add(h),
                    ve(e._icon, this._draggable._newPos),
                    this._onDrag(t),
                    (this._panRequest = P(this._adjustPan.bind(this, t)));
                }
              },
              _onDragStart: function () {
                (this._oldLatLng = this._marker.getLatLng()),
                  this._marker.closePopup && this._marker.closePopup(),
                  this._marker.fire("movestart").fire("dragstart");
              },
              _onPreDrag: function (t) {
                this._marker.options.autoPan &&
                  (M(this._panRequest),
                  (this._panRequest = P(this._adjustPan.bind(this, t))));
              },
              _onDrag: function (t) {
                var e = this._marker,
                  n = e._shadow,
                  i = ye(e._icon),
                  o = e._map.layerPointToLatLng(i);
                n && ve(n, i),
                  (e._latlng = o),
                  (t.latlng = o),
                  (t.oldLatLng = this._oldLatLng),
                  e.fire("move", t).fire("drag", t);
              },
              _onDragEnd: function (t) {
                M(this._panRequest),
                  delete this._oldLatLng,
                  this._marker.fire("moveend").fire("dragend", t);
              },
            }),
            Zn = Sn.extend({
              options: {
                icon: new An(),
                interactive: !0,
                keyboard: !0,
                title: "",
                alt: "Marker",
                zIndexOffset: 0,
                opacity: 1,
                riseOnHover: !1,
                riseOffset: 250,
                pane: "markerPane",
                shadowPane: "shadowPane",
                bubblingMouseEvents: !1,
                autoPanOnFocus: !0,
                draggable: !1,
                autoPan: !1,
                autoPanPadding: [50, 50],
                autoPanSpeed: 10,
              },
              initialize: function (t, e) {
                f(this, e), (this._latlng = j(t));
              },
              onAdd: function (t) {
                (this._zoomAnimated =
                  this._zoomAnimated && t.options.markerZoomAnimation),
                  this._zoomAnimated &&
                    t.on("zoomanim", this._animateZoom, this),
                  this._initIcon(),
                  this.update();
              },
              onRemove: function (t) {
                this.dragging &&
                  this.dragging.enabled() &&
                  ((this.options.draggable = !0), this.dragging.removeHooks()),
                  delete this.dragging,
                  this._zoomAnimated &&
                    t.off("zoomanim", this._animateZoom, this),
                  this._removeIcon(),
                  this._removeShadow();
              },
              getEvents: function () {
                return { zoom: this.update, viewreset: this.update };
              },
              getLatLng: function () {
                return this._latlng;
              },
              setLatLng: function (t) {
                var e = this._latlng;
                return (
                  (this._latlng = j(t)),
                  this.update(),
                  this.fire("move", { oldLatLng: e, latlng: this._latlng })
                );
              },
              setZIndexOffset: function (t) {
                return (this.options.zIndexOffset = t), this.update();
              },
              getIcon: function () {
                return this.options.icon;
              },
              setIcon: function (t) {
                return (
                  (this.options.icon = t),
                  this._map && (this._initIcon(), this.update()),
                  this._popup &&
                    this.bindPopup(this._popup, this._popup.options),
                  this
                );
              },
              getElement: function () {
                return this._icon;
              },
              update: function () {
                if (this._icon && this._map) {
                  var t = this._map.latLngToLayerPoint(this._latlng).round();
                  this._setPos(t);
                }
                return this;
              },
              _initIcon: function () {
                var t = this.options,
                  e =
                    "leaflet-zoom-" +
                    (this._zoomAnimated ? "animated" : "hide"),
                  n = t.icon.createIcon(this._icon),
                  i = !1;
                n !== this._icon &&
                  (this._icon && this._removeIcon(),
                  (i = !0),
                  t.title && (n.title = t.title),
                  "IMG" === n.tagName && (n.alt = t.alt || "")),
                  ce(n, e),
                  t.keyboard &&
                    ((n.tabIndex = "0"), n.setAttribute("role", "button")),
                  (this._icon = n),
                  t.riseOnHover &&
                    this.on({
                      mouseover: this._bringToFront,
                      mouseout: this._resetZIndex,
                    }),
                  this.options.autoPanOnFocus &&
                    Se(n, "focus", this._panOnFocus, this);
                var o = t.icon.createShadow(this._shadow),
                  r = !1;
                o !== this._shadow && (this._removeShadow(), (r = !0)),
                  o && (ce(o, e), (o.alt = "")),
                  (this._shadow = o),
                  t.opacity < 1 && this._updateOpacity(),
                  i && this.getPane().appendChild(this._icon),
                  this._initInteraction(),
                  o &&
                    r &&
                    this.getPane(t.shadowPane).appendChild(this._shadow);
              },
              _removeIcon: function () {
                this.options.riseOnHover &&
                  this.off({
                    mouseover: this._bringToFront,
                    mouseout: this._resetZIndex,
                  }),
                  this.options.autoPanOnFocus &&
                    ke(this._icon, "focus", this._panOnFocus, this),
                  se(this._icon),
                  this.removeInteractiveTarget(this._icon),
                  (this._icon = null);
              },
              _removeShadow: function () {
                this._shadow && se(this._shadow), (this._shadow = null);
              },
              _setPos: function (t) {
                this._icon && ve(this._icon, t),
                  this._shadow && ve(this._shadow, t),
                  (this._zIndex = t.y + this.options.zIndexOffset),
                  this._resetZIndex();
              },
              _updateZIndex: function (t) {
                this._icon && (this._icon.style.zIndex = this._zIndex + t);
              },
              _animateZoom: function (t) {
                var e = this._map
                  ._latLngToNewLayerPoint(this._latlng, t.zoom, t.center)
                  .round();
                this._setPos(e);
              },
              _initInteraction: function () {
                if (
                  this.options.interactive &&
                  (ce(this._icon, "leaflet-interactive"),
                  this.addInteractiveTarget(this._icon),
                  On)
                ) {
                  var t = this.options.draggable;
                  this.dragging &&
                    ((t = this.dragging.enabled()), this.dragging.disable()),
                    (this.dragging = new On(this)),
                    t && this.dragging.enable();
                }
              },
              setOpacity: function (t) {
                return (
                  (this.options.opacity = t),
                  this._map && this._updateOpacity(),
                  this
                );
              },
              _updateOpacity: function () {
                var t = this.options.opacity;
                this._icon && _e(this._icon, t),
                  this._shadow && _e(this._shadow, t);
              },
              _bringToFront: function () {
                this._updateZIndex(this.options.riseOffset);
              },
              _resetZIndex: function () {
                this._updateZIndex(0);
              },
              _panOnFocus: function () {
                var t = this._map;
                if (t) {
                  var e = this.options.icon.options,
                    n = e.iconSize ? O(e.iconSize) : O(0, 0),
                    i = e.iconAnchor ? O(e.iconAnchor) : O(0, 0);
                  t.panInside(this._latlng, {
                    paddingTopLeft: i,
                    paddingBottomRight: n.subtract(i),
                  });
                }
              },
              _getPopupAnchor: function () {
                return this.options.icon.options.popupAnchor;
              },
              _getTooltipAnchor: function () {
                return this.options.icon.options.tooltipAnchor;
              },
            });
          var In = Sn.extend({
              options: {
                stroke: !0,
                color: "#3388ff",
                weight: 3,
                opacity: 1,
                lineCap: "round",
                lineJoin: "round",
                dashArray: null,
                dashOffset: null,
                fill: !1,
                fillColor: null,
                fillOpacity: 0.2,
                fillRule: "evenodd",
                interactive: !0,
                bubblingMouseEvents: !0,
              },
              beforeAdd: function (t) {
                this._renderer = t.getRenderer(this);
              },
              onAdd: function () {
                this._renderer._initPath(this),
                  this._reset(),
                  this._renderer._addPath(this);
              },
              onRemove: function () {
                this._renderer._removePath(this);
              },
              redraw: function () {
                return this._map && this._renderer._updatePath(this), this;
              },
              setStyle: function (t) {
                return (
                  f(this, t),
                  this._renderer &&
                    (this._renderer._updateStyle(this),
                    this.options.stroke &&
                      t &&
                      Object.prototype.hasOwnProperty.call(t, "weight") &&
                      this._updateBounds()),
                  this
                );
              },
              bringToFront: function () {
                return (
                  this._renderer && this._renderer._bringToFront(this), this
                );
              },
              bringToBack: function () {
                return (
                  this._renderer && this._renderer._bringToBack(this), this
                );
              },
              getElement: function () {
                return this._path;
              },
              _reset: function () {
                this._project(), this._update();
              },
              _clickTolerance: function () {
                return (
                  (this.options.stroke ? this.options.weight / 2 : 0) +
                  (this._renderer.options.tolerance || 0)
                );
              },
            }),
            Bn = In.extend({
              options: { fill: !0, radius: 10 },
              initialize: function (t, e) {
                f(this, e),
                  (this._latlng = j(t)),
                  (this._radius = this.options.radius);
              },
              setLatLng: function (t) {
                var e = this._latlng;
                return (
                  (this._latlng = j(t)),
                  this.redraw(),
                  this.fire("move", { oldLatLng: e, latlng: this._latlng })
                );
              },
              getLatLng: function () {
                return this._latlng;
              },
              setRadius: function (t) {
                return (this.options.radius = this._radius = t), this.redraw();
              },
              getRadius: function () {
                return this._radius;
              },
              setStyle: function (t) {
                var e = (t && t.radius) || this._radius;
                return (
                  In.prototype.setStyle.call(this, t), this.setRadius(e), this
                );
              },
              _project: function () {
                (this._point = this._map.latLngToLayerPoint(this._latlng)),
                  this._updateBounds();
              },
              _updateBounds: function () {
                var t = this._radius,
                  e = this._radiusY || t,
                  n = this._clickTolerance(),
                  i = [t + n, e + n];
                this._pxBounds = new Z(
                  this._point.subtract(i),
                  this._point.add(i),
                );
              },
              _update: function () {
                this._map && this._updatePath();
              },
              _updatePath: function () {
                this._renderer._updateCircle(this);
              },
              _empty: function () {
                return (
                  this._radius &&
                  !this._renderer._bounds.intersects(this._pxBounds)
                );
              },
              _containsPoint: function (t) {
                return (
                  t.distanceTo(this._point) <=
                  this._radius + this._clickTolerance()
                );
              },
            });
          var Nn = Bn.extend({
            initialize: function (t, n, i) {
              if (
                ("number" == typeof n && (n = e({}, i, { radius: n })),
                f(this, n),
                (this._latlng = j(t)),
                isNaN(this.options.radius))
              )
                throw new Error("Circle radius cannot be NaN");
              this._mRadius = this.options.radius;
            },
            setRadius: function (t) {
              return (this._mRadius = t), this.redraw();
            },
            getRadius: function () {
              return this._mRadius;
            },
            getBounds: function () {
              var t = [this._radius, this._radiusY || this._radius];
              return new B(
                this._map.layerPointToLatLng(this._point.subtract(t)),
                this._map.layerPointToLatLng(this._point.add(t)),
              );
            },
            setStyle: In.prototype.setStyle,
            _project: function () {
              var t = this._latlng.lng,
                e = this._latlng.lat,
                n = this._map,
                i = n.options.crs;
              if (i.distance === H.distance) {
                var o = Math.PI / 180,
                  r = this._mRadius / H.R / o,
                  s = n.project([e + r, t]),
                  a = n.project([e - r, t]),
                  u = s.add(a).divideBy(2),
                  h = n.unproject(u).lat,
                  l =
                    Math.acos(
                      (Math.cos(r * o) - Math.sin(e * o) * Math.sin(h * o)) /
                        (Math.cos(e * o) * Math.cos(h * o)),
                    ) / o;
                (isNaN(l) || 0 === l) &&
                  (l = r / Math.cos((Math.PI / 180) * e)),
                  (this._point = u.subtract(n.getPixelOrigin())),
                  (this._radius = isNaN(l) ? 0 : u.x - n.project([h, t - l]).x),
                  (this._radiusY = u.y - s.y);
              } else {
                var c = i.unproject(
                  i.project(this._latlng).subtract([this._mRadius, 0]),
                );
                (this._point = n.latLngToLayerPoint(this._latlng)),
                  (this._radius = this._point.x - n.latLngToLayerPoint(c).x);
              }
              this._updateBounds();
            },
          });
          var Dn = In.extend({
            options: { smoothFactor: 1, noClip: !1 },
            initialize: function (t, e) {
              f(this, e), this._setLatLngs(t);
            },
            getLatLngs: function () {
              return this._latlngs;
            },
            setLatLngs: function (t) {
              return this._setLatLngs(t), this.redraw();
            },
            isEmpty: function () {
              return !this._latlngs.length;
            },
            closestLayerPoint: function (t) {
              for (
                var e,
                  n,
                  i = 1 / 0,
                  o = null,
                  r = gn,
                  s = 0,
                  a = this._parts.length;
                s < a;
                s++
              )
                for (var u = this._parts[s], h = 1, l = u.length; h < l; h++) {
                  var c = r(t, (e = u[h - 1]), (n = u[h]), !0);
                  c < i && ((i = c), (o = r(t, e, n)));
                }
              return o && (o.distance = Math.sqrt(i)), o;
            },
            getCenter: function () {
              if (!this._map)
                throw new Error(
                  "Must add layer to map before using getCenter()",
                );
              return wn(this._defaultShape(), this._map.options.crs);
            },
            getBounds: function () {
              return this._bounds;
            },
            addLatLng: function (t, e) {
              return (
                (e = e || this._defaultShape()),
                (t = j(t)),
                e.push(t),
                this._bounds.extend(t),
                this.redraw()
              );
            },
            _setLatLngs: function (t) {
              (this._bounds = new B()),
                (this._latlngs = this._convertLatLngs(t));
            },
            _defaultShape: function () {
              return vn(this._latlngs) ? this._latlngs : this._latlngs[0];
            },
            _convertLatLngs: function (t) {
              for (var e = [], n = vn(t), i = 0, o = t.length; i < o; i++)
                n
                  ? ((e[i] = j(t[i])), this._bounds.extend(e[i]))
                  : (e[i] = this._convertLatLngs(t[i]));
              return e;
            },
            _project: function () {
              var t = new Z();
              (this._rings = []),
                this._projectLatlngs(this._latlngs, this._rings, t),
                this._bounds.isValid() &&
                  t.isValid() &&
                  ((this._rawPxBounds = t), this._updateBounds());
            },
            _updateBounds: function () {
              var t = this._clickTolerance(),
                e = new z(t, t);
              this._rawPxBounds &&
                (this._pxBounds = new Z([
                  this._rawPxBounds.min.subtract(e),
                  this._rawPxBounds.max.add(e),
                ]));
            },
            _projectLatlngs: function (t, e, n) {
              var i,
                o,
                r = t[0] instanceof D,
                s = t.length;
              if (r) {
                for (o = [], i = 0; i < s; i++)
                  (o[i] = this._map.latLngToLayerPoint(t[i])), n.extend(o[i]);
                e.push(o);
              } else for (i = 0; i < s; i++) this._projectLatlngs(t[i], e, n);
            },
            _clipPoints: function () {
              var t = this._renderer._bounds;
              if (
                ((this._parts = []),
                this._pxBounds && this._pxBounds.intersects(t))
              )
                if (this.options.noClip) this._parts = this._rings;
                else {
                  var e,
                    n,
                    i,
                    o,
                    r,
                    s,
                    a,
                    u = this._parts;
                  for (e = 0, i = 0, o = this._rings.length; e < o; e++)
                    for (n = 0, r = (a = this._rings[e]).length; n < r - 1; n++)
                      (s = dn(a[n], a[n + 1], t, n, !0)) &&
                        ((u[i] = u[i] || []),
                        u[i].push(s[0]),
                        (s[1] === a[n + 1] && n !== r - 2) ||
                          (u[i].push(s[1]), i++));
                }
            },
            _simplifyPoints: function () {
              for (
                var t = this._parts,
                  e = this.options.smoothFactor,
                  n = 0,
                  i = t.length;
                n < i;
                n++
              )
                t[n] = ln(t[n], e);
            },
            _update: function () {
              this._map &&
                (this._clipPoints(),
                this._simplifyPoints(),
                this._updatePath());
            },
            _updatePath: function () {
              this._renderer._updatePoly(this);
            },
            _containsPoint: function (t, e) {
              var n,
                i,
                o,
                r,
                s,
                a,
                u = this._clickTolerance();
              if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
              for (n = 0, r = this._parts.length; n < r; n++)
                for (
                  i = 0, o = (s = (a = this._parts[n]).length) - 1;
                  i < s;
                  o = i++
                )
                  if ((e || 0 !== i) && cn(t, a[o], a[i]) <= u) return !0;
              return !1;
            },
          });
          Dn._flat = yn;
          var jn = Dn.extend({
            options: { fill: !0 },
            isEmpty: function () {
              return !this._latlngs.length || !this._latlngs[0].length;
            },
            getCenter: function () {
              if (!this._map)
                throw new Error(
                  "Must add layer to map before using getCenter()",
                );
              return sn(this._defaultShape(), this._map.options.crs);
            },
            _convertLatLngs: function (t) {
              var e = Dn.prototype._convertLatLngs.call(this, t),
                n = e.length;
              return (
                n >= 2 && e[0] instanceof D && e[0].equals(e[n - 1]) && e.pop(),
                e
              );
            },
            _setLatLngs: function (t) {
              Dn.prototype._setLatLngs.call(this, t),
                vn(this._latlngs) && (this._latlngs = [this._latlngs]);
            },
            _defaultShape: function () {
              return vn(this._latlngs[0])
                ? this._latlngs[0]
                : this._latlngs[0][0];
            },
            _clipPoints: function () {
              var t = this._renderer._bounds,
                e = this.options.weight,
                n = new z(e, e);
              if (
                ((t = new Z(t.min.subtract(n), t.max.add(n))),
                (this._parts = []),
                this._pxBounds && this._pxBounds.intersects(t))
              )
                if (this.options.noClip) this._parts = this._rings;
                else
                  for (var i, o = 0, r = this._rings.length; o < r; o++)
                    (i = rn(this._rings[o], t, !0)).length &&
                      this._parts.push(i);
            },
            _updatePath: function () {
              this._renderer._updatePoly(this, !0);
            },
            _containsPoint: function (t) {
              var e,
                n,
                i,
                o,
                r,
                s,
                a,
                u,
                h = !1;
              if (!this._pxBounds || !this._pxBounds.contains(t)) return !1;
              for (o = 0, a = this._parts.length; o < a; o++)
                for (
                  r = 0, s = (u = (e = this._parts[o]).length) - 1;
                  r < u;
                  s = r++
                )
                  (n = e[r]),
                    (i = e[s]),
                    n.y > t.y != i.y > t.y &&
                      t.x < ((i.x - n.x) * (t.y - n.y)) / (i.y - n.y) + n.x &&
                      (h = !h);
              return h || Dn.prototype._containsPoint.call(this, t, !0);
            },
          });
          var Rn = kn.extend({
            initialize: function (t, e) {
              f(this, e), (this._layers = {}), t && this.addData(t);
            },
            addData: function (t) {
              var e,
                n,
                i,
                o = m(t) ? t : t.features;
              if (o) {
                for (e = 0, n = o.length; e < n; e++)
                  ((i = o[e]).geometries ||
                    i.geometry ||
                    i.features ||
                    i.coordinates) &&
                    this.addData(i);
                return this;
              }
              var r = this.options;
              if (r.filter && !r.filter(t)) return this;
              var s = Fn(t, r);
              return s
                ? ((s.feature = Yn(t)),
                  (s.defaultOptions = s.options),
                  this.resetStyle(s),
                  r.onEachFeature && r.onEachFeature(t, s),
                  this.addLayer(s))
                : this;
            },
            resetStyle: function (t) {
              return void 0 === t
                ? this.eachLayer(this.resetStyle, this)
                : ((t.options = e({}, t.defaultOptions)),
                  this._setLayerStyle(t, this.options.style),
                  this);
            },
            setStyle: function (t) {
              return this.eachLayer(function (e) {
                this._setLayerStyle(e, t);
              }, this);
            },
            _setLayerStyle: function (t, e) {
              t.setStyle &&
                ("function" == typeof e && (e = e(t.feature)), t.setStyle(e));
            },
          });
          function Fn(t, e) {
            var n,
              i,
              o,
              r,
              s = "Feature" === t.type ? t.geometry : t,
              a = s ? s.coordinates : null,
              u = [],
              h = e && e.pointToLayer,
              l = (e && e.coordsToLatLng) || Un;
            if (!a && !s) return null;
            switch (s.type) {
              case "Point":
                return Hn(h, t, (n = l(a)), e);
              case "MultiPoint":
                for (o = 0, r = a.length; o < r; o++)
                  (n = l(a[o])), u.push(Hn(h, t, n, e));
                return new kn(u);
              case "LineString":
              case "MultiLineString":
                return (
                  (i = $n(a, "LineString" === s.type ? 0 : 1, l)), new Dn(i, e)
                );
              case "Polygon":
              case "MultiPolygon":
                return (
                  (i = $n(a, "Polygon" === s.type ? 1 : 2, l)), new jn(i, e)
                );
              case "GeometryCollection":
                for (o = 0, r = s.geometries.length; o < r; o++) {
                  var c = Fn(
                    {
                      geometry: s.geometries[o],
                      type: "Feature",
                      properties: t.properties,
                    },
                    e,
                  );
                  c && u.push(c);
                }
                return new kn(u);
              case "FeatureCollection":
                for (o = 0, r = s.features.length; o < r; o++) {
                  var f = Fn(s.features[o], e);
                  f && u.push(f);
                }
                return new kn(u);
              default:
                throw new Error("Invalid GeoJSON object.");
            }
          }
          function Hn(t, e, n, i) {
            return t ? t(e, n) : new Zn(n, i && i.markersInheritOptions && i);
          }
          function Un(t) {
            return new D(t[1], t[0], t[2]);
          }
          function $n(t, e, n) {
            for (var i, o = [], r = 0, s = t.length; r < s; r++)
              (i = e ? $n(t[r], e - 1, n) : (n || Un)(t[r])), o.push(i);
            return o;
          }
          function Wn(t, e) {
            return void 0 !== (t = j(t)).alt
              ? [h(t.lng, e), h(t.lat, e), h(t.alt, e)]
              : [h(t.lng, e), h(t.lat, e)];
          }
          function qn(t, e, n, i) {
            for (var o = [], r = 0, s = t.length; r < s; r++)
              o.push(e ? qn(t[r], vn(t[r]) ? 0 : e - 1, n, i) : Wn(t[r], i));
            return !e && n && o.length > 0 && o.push(o[0].slice()), o;
          }
          function Vn(t, n) {
            return t.feature ? e({}, t.feature, { geometry: n }) : Yn(n);
          }
          function Yn(t) {
            return "Feature" === t.type || "FeatureCollection" === t.type
              ? t
              : { type: "Feature", properties: {}, geometry: t };
          }
          var Gn = {
            toGeoJSON: function (t) {
              return Vn(this, {
                type: "Point",
                coordinates: Wn(this.getLatLng(), t),
              });
            },
          };
          function Xn(t, e) {
            return new Rn(t, e);
          }
          Zn.include(Gn),
            Nn.include(Gn),
            Bn.include(Gn),
            Dn.include({
              toGeoJSON: function (t) {
                var e = !vn(this._latlngs);
                return Vn(this, {
                  type: (e ? "Multi" : "") + "LineString",
                  coordinates: qn(this._latlngs, e ? 1 : 0, !1, t),
                });
              },
            }),
            jn.include({
              toGeoJSON: function (t) {
                var e = !vn(this._latlngs),
                  n = e && !vn(this._latlngs[0]),
                  i = qn(this._latlngs, n ? 2 : e ? 1 : 0, !0, t);
                return (
                  e || (i = [i]),
                  Vn(this, {
                    type: (n ? "Multi" : "") + "Polygon",
                    coordinates: i,
                  })
                );
              },
            }),
            En.include({
              toMultiPoint: function (t) {
                var e = [];
                return (
                  this.eachLayer(function (n) {
                    e.push(n.toGeoJSON(t).geometry.coordinates);
                  }),
                  Vn(this, { type: "MultiPoint", coordinates: e })
                );
              },
              toGeoJSON: function (t) {
                var e =
                  this.feature &&
                  this.feature.geometry &&
                  this.feature.geometry.type;
                if ("MultiPoint" === e) return this.toMultiPoint(t);
                var n = "GeometryCollection" === e,
                  i = [];
                return (
                  this.eachLayer(function (e) {
                    if (e.toGeoJSON) {
                      var o = e.toGeoJSON(t);
                      if (n) i.push(o.geometry);
                      else {
                        var r = Yn(o);
                        "FeatureCollection" === r.type
                          ? i.push.apply(i, r.features)
                          : i.push(r);
                      }
                    }
                  }),
                  n
                    ? Vn(this, { geometries: i, type: "GeometryCollection" })
                    : { type: "FeatureCollection", features: i }
                );
              },
            });
          var Kn = Xn,
            Jn = Sn.extend({
              options: {
                opacity: 1,
                alt: "",
                interactive: !1,
                crossOrigin: !1,
                errorOverlayUrl: "",
                zIndex: 1,
                className: "",
              },
              initialize: function (t, e, n) {
                (this._url = t), (this._bounds = N(e)), f(this, n);
              },
              onAdd: function () {
                this._image ||
                  (this._initImage(),
                  this.options.opacity < 1 && this._updateOpacity()),
                  this.options.interactive &&
                    (ce(this._image, "leaflet-interactive"),
                    this.addInteractiveTarget(this._image)),
                  this.getPane().appendChild(this._image),
                  this._reset();
              },
              onRemove: function () {
                se(this._image),
                  this.options.interactive &&
                    this.removeInteractiveTarget(this._image);
              },
              setOpacity: function (t) {
                return (
                  (this.options.opacity = t),
                  this._image && this._updateOpacity(),
                  this
                );
              },
              setStyle: function (t) {
                return t.opacity && this.setOpacity(t.opacity), this;
              },
              bringToFront: function () {
                return this._map && ue(this._image), this;
              },
              bringToBack: function () {
                return this._map && he(this._image), this;
              },
              setUrl: function (t) {
                return (
                  (this._url = t), this._image && (this._image.src = t), this
                );
              },
              setBounds: function (t) {
                return (this._bounds = N(t)), this._map && this._reset(), this;
              },
              getEvents: function () {
                var t = { zoom: this._reset, viewreset: this._reset };
                return (
                  this._zoomAnimated && (t.zoomanim = this._animateZoom), t
                );
              },
              setZIndex: function (t) {
                return (this.options.zIndex = t), this._updateZIndex(), this;
              },
              getBounds: function () {
                return this._bounds;
              },
              getElement: function () {
                return this._image;
              },
              _initImage: function () {
                var t = "IMG" === this._url.tagName,
                  e = (this._image = t ? this._url : re("img"));
                ce(e, "leaflet-image-layer"),
                  this._zoomAnimated && ce(e, "leaflet-zoom-animated"),
                  this.options.className && ce(e, this.options.className),
                  (e.onselectstart = u),
                  (e.onmousemove = u),
                  (e.onload = i(this.fire, this, "load")),
                  (e.onerror = i(this._overlayOnError, this, "error")),
                  (this.options.crossOrigin ||
                    "" === this.options.crossOrigin) &&
                    (e.crossOrigin =
                      !0 === this.options.crossOrigin
                        ? ""
                        : this.options.crossOrigin),
                  this.options.zIndex && this._updateZIndex(),
                  t
                    ? (this._url = e.src)
                    : ((e.src = this._url), (e.alt = this.options.alt));
              },
              _animateZoom: function (t) {
                var e = this._map.getZoomScale(t.zoom),
                  n = this._map._latLngBoundsToNewLayerBounds(
                    this._bounds,
                    t.zoom,
                    t.center,
                  ).min;
                ge(this._image, n, e);
              },
              _reset: function () {
                var t = this._image,
                  e = new Z(
                    this._map.latLngToLayerPoint(this._bounds.getNorthWest()),
                    this._map.latLngToLayerPoint(this._bounds.getSouthEast()),
                  ),
                  n = e.getSize();
                ve(t, e.min),
                  (t.style.width = n.x + "px"),
                  (t.style.height = n.y + "px");
              },
              _updateOpacity: function () {
                _e(this._image, this.options.opacity);
              },
              _updateZIndex: function () {
                this._image &&
                  void 0 !== this.options.zIndex &&
                  null !== this.options.zIndex &&
                  (this._image.style.zIndex = this.options.zIndex);
              },
              _overlayOnError: function () {
                this.fire("error");
                var t = this.options.errorOverlayUrl;
                t &&
                  this._url !== t &&
                  ((this._url = t), (this._image.src = t));
              },
              getCenter: function () {
                return this._bounds.getCenter();
              },
            }),
            Qn = Jn.extend({
              options: {
                autoplay: !0,
                loop: !0,
                keepAspectRatio: !0,
                muted: !1,
                playsInline: !0,
              },
              _initImage: function () {
                var t = "VIDEO" === this._url.tagName,
                  e = (this._image = t ? this._url : re("video"));
                if (
                  (ce(e, "leaflet-image-layer"),
                  this._zoomAnimated && ce(e, "leaflet-zoom-animated"),
                  this.options.className && ce(e, this.options.className),
                  (e.onselectstart = u),
                  (e.onmousemove = u),
                  (e.onloadeddata = i(this.fire, this, "load")),
                  t)
                ) {
                  for (
                    var n = e.getElementsByTagName("source"), o = [], r = 0;
                    r < n.length;
                    r++
                  )
                    o.push(n[r].src);
                  this._url = n.length > 0 ? o : [e.src];
                } else {
                  m(this._url) || (this._url = [this._url]),
                    !this.options.keepAspectRatio &&
                      Object.prototype.hasOwnProperty.call(
                        e.style,
                        "objectFit",
                      ) &&
                      (e.style.objectFit = "fill"),
                    (e.autoplay = !!this.options.autoplay),
                    (e.loop = !!this.options.loop),
                    (e.muted = !!this.options.muted),
                    (e.playsInline = !!this.options.playsInline);
                  for (var s = 0; s < this._url.length; s++) {
                    var a = re("source");
                    (a.src = this._url[s]), e.appendChild(a);
                  }
                }
              },
            });
          var ti = Jn.extend({
            _initImage: function () {
              var t = (this._image = this._url);
              ce(t, "leaflet-image-layer"),
                this._zoomAnimated && ce(t, "leaflet-zoom-animated"),
                this.options.className && ce(t, this.options.className),
                (t.onselectstart = u),
                (t.onmousemove = u);
            },
          });
          var ei = Sn.extend({
            options: {
              interactive: !1,
              offset: [0, 0],
              className: "",
              pane: void 0,
              content: "",
            },
            initialize: function (t, e) {
              t && (t instanceof D || m(t))
                ? ((this._latlng = j(t)), f(this, e))
                : (f(this, t), (this._source = e)),
                this.options.content && (this._content = this.options.content);
            },
            openOn: function (t) {
              return (
                (t = arguments.length ? t : this._source._map).hasLayer(this) ||
                  t.addLayer(this),
                this
              );
            },
            close: function () {
              return this._map && this._map.removeLayer(this), this;
            },
            toggle: function (t) {
              return (
                this._map
                  ? this.close()
                  : (arguments.length ? (this._source = t) : (t = this._source),
                    this._prepareOpen(),
                    this.openOn(t._map)),
                this
              );
            },
            onAdd: function (t) {
              (this._zoomAnimated = t._zoomAnimated),
                this._container || this._initLayout(),
                t._fadeAnimated && _e(this._container, 0),
                clearTimeout(this._removeTimeout),
                this.getPane().appendChild(this._container),
                this.update(),
                t._fadeAnimated && _e(this._container, 1),
                this.bringToFront(),
                this.options.interactive &&
                  (ce(this._container, "leaflet-interactive"),
                  this.addInteractiveTarget(this._container));
            },
            onRemove: function (t) {
              t._fadeAnimated
                ? (_e(this._container, 0),
                  (this._removeTimeout = setTimeout(
                    i(se, void 0, this._container),
                    200,
                  )))
                : se(this._container),
                this.options.interactive &&
                  (fe(this._container, "leaflet-interactive"),
                  this.removeInteractiveTarget(this._container));
            },
            getLatLng: function () {
              return this._latlng;
            },
            setLatLng: function (t) {
              return (
                (this._latlng = j(t)),
                this._map && (this._updatePosition(), this._adjustPan()),
                this
              );
            },
            getContent: function () {
              return this._content;
            },
            setContent: function (t) {
              return (this._content = t), this.update(), this;
            },
            getElement: function () {
              return this._container;
            },
            update: function () {
              this._map &&
                ((this._container.style.visibility = "hidden"),
                this._updateContent(),
                this._updateLayout(),
                this._updatePosition(),
                (this._container.style.visibility = ""),
                this._adjustPan());
            },
            getEvents: function () {
              var t = {
                zoom: this._updatePosition,
                viewreset: this._updatePosition,
              };
              return this._zoomAnimated && (t.zoomanim = this._animateZoom), t;
            },
            isOpen: function () {
              return !!this._map && this._map.hasLayer(this);
            },
            bringToFront: function () {
              return this._map && ue(this._container), this;
            },
            bringToBack: function () {
              return this._map && he(this._container), this;
            },
            _prepareOpen: function (t) {
              var e = this._source;
              if (!e._map) return !1;
              if (e instanceof kn) {
                e = null;
                var n = this._source._layers;
                for (var i in n)
                  if (n[i]._map) {
                    e = n[i];
                    break;
                  }
                if (!e) return !1;
                this._source = e;
              }
              if (!t)
                if (e.getCenter) t = e.getCenter();
                else if (e.getLatLng) t = e.getLatLng();
                else {
                  if (!e.getBounds)
                    throw new Error("Unable to get source layer LatLng.");
                  t = e.getBounds().getCenter();
                }
              return this.setLatLng(t), this._map && this.update(), !0;
            },
            _updateContent: function () {
              if (this._content) {
                var t = this._contentNode,
                  e =
                    "function" == typeof this._content
                      ? this._content(this._source || this)
                      : this._content;
                if ("string" == typeof e) t.innerHTML = e;
                else {
                  for (; t.hasChildNodes(); ) t.removeChild(t.firstChild);
                  t.appendChild(e);
                }
                this.fire("contentupdate");
              }
            },
            _updatePosition: function () {
              if (this._map) {
                var t = this._map.latLngToLayerPoint(this._latlng),
                  e = O(this.options.offset),
                  n = this._getAnchor();
                this._zoomAnimated
                  ? ve(this._container, t.add(n))
                  : (e = e.add(t).add(n));
                var i = (this._containerBottom = -e.y),
                  o = (this._containerLeft =
                    -Math.round(this._containerWidth / 2) + e.x);
                (this._container.style.bottom = i + "px"),
                  (this._container.style.left = o + "px");
              }
            },
            _getAnchor: function () {
              return [0, 0];
            },
          });
          Ve.include({
            _initOverlay: function (t, e, n, i) {
              var o = e;
              return (
                o instanceof t || (o = new t(i).setContent(e)),
                n && o.setLatLng(n),
                o
              );
            },
          }),
            Sn.include({
              _initOverlay: function (t, e, n, i) {
                var o = n;
                return (
                  o instanceof t
                    ? (f(o, i), (o._source = this))
                    : (o = e && !i ? e : new t(i, this)).setContent(n),
                  o
                );
              },
            });
          var ni = ei.extend({
            options: {
              pane: "popupPane",
              offset: [0, 7],
              maxWidth: 300,
              minWidth: 50,
              maxHeight: null,
              autoPan: !0,
              autoPanPaddingTopLeft: null,
              autoPanPaddingBottomRight: null,
              autoPanPadding: [5, 5],
              keepInView: !1,
              closeButton: !0,
              autoClose: !0,
              closeOnEscapeKey: !0,
              className: "",
            },
            openOn: function (t) {
              return (
                !(t = arguments.length ? t : this._source._map).hasLayer(
                  this,
                ) &&
                  t._popup &&
                  t._popup.options.autoClose &&
                  t.removeLayer(t._popup),
                (t._popup = this),
                ei.prototype.openOn.call(this, t)
              );
            },
            onAdd: function (t) {
              ei.prototype.onAdd.call(this, t),
                t.fire("popupopen", { popup: this }),
                this._source &&
                  (this._source.fire("popupopen", { popup: this }, !0),
                  this._source instanceof In ||
                    this._source.on("preclick", Ie));
            },
            onRemove: function (t) {
              ei.prototype.onRemove.call(this, t),
                t.fire("popupclose", { popup: this }),
                this._source &&
                  (this._source.fire("popupclose", { popup: this }, !0),
                  this._source instanceof In ||
                    this._source.off("preclick", Ie));
            },
            getEvents: function () {
              var t = ei.prototype.getEvents.call(this);
              return (
                (void 0 !== this.options.closeOnClick
                  ? this.options.closeOnClick
                  : this._map.options.closePopupOnClick) &&
                  (t.preclick = this.close),
                this.options.keepInView && (t.moveend = this._adjustPan),
                t
              );
            },
            _initLayout: function () {
              var t = "leaflet-popup",
                e = (this._container = re(
                  "div",
                  t +
                    " " +
                    (this.options.className || "") +
                    " leaflet-zoom-animated",
                )),
                n = (this._wrapper = re("div", t + "-content-wrapper", e));
              if (
                ((this._contentNode = re("div", t + "-content", n)),
                Ne(e),
                Be(this._contentNode),
                Se(e, "contextmenu", Ie),
                (this._tipContainer = re("div", t + "-tip-container", e)),
                (this._tip = re("div", t + "-tip", this._tipContainer)),
                this.options.closeButton)
              ) {
                var i = (this._closeButton = re("a", t + "-close-button", e));
                i.setAttribute("role", "button"),
                  i.setAttribute("aria-label", "Close popup"),
                  (i.href = "#close"),
                  (i.innerHTML = '<span aria-hidden="true">&#215;</span>'),
                  Se(
                    i,
                    "click",
                    function (t) {
                      De(t), this.close();
                    },
                    this,
                  );
              }
            },
            _updateLayout: function () {
              var t = this._contentNode,
                e = t.style;
              (e.width = ""), (e.whiteSpace = "nowrap");
              var n = t.offsetWidth;
              (n = Math.min(n, this.options.maxWidth)),
                (n = Math.max(n, this.options.minWidth)),
                (e.width = n + 1 + "px"),
                (e.whiteSpace = ""),
                (e.height = "");
              var i = t.offsetHeight,
                o = this.options.maxHeight,
                r = "leaflet-popup-scrolled";
              o && i > o ? ((e.height = o + "px"), ce(t, r)) : fe(t, r),
                (this._containerWidth = this._container.offsetWidth);
            },
            _animateZoom: function (t) {
              var e = this._map._latLngToNewLayerPoint(
                  this._latlng,
                  t.zoom,
                  t.center,
                ),
                n = this._getAnchor();
              ve(this._container, e.add(n));
            },
            _adjustPan: function () {
              if (this.options.autoPan)
                if (
                  (this._map._panAnim && this._map._panAnim.stop(),
                  this._autopanning)
                )
                  this._autopanning = !1;
                else {
                  var t = this._map,
                    e = parseInt(oe(this._container, "marginBottom"), 10) || 0,
                    n = this._container.offsetHeight + e,
                    i = this._containerWidth,
                    o = new z(this._containerLeft, -n - this._containerBottom);
                  o._add(ye(this._container));
                  var r = t.layerPointToContainerPoint(o),
                    s = O(this.options.autoPanPadding),
                    a = O(this.options.autoPanPaddingTopLeft || s),
                    u = O(this.options.autoPanPaddingBottomRight || s),
                    h = t.getSize(),
                    l = 0,
                    c = 0;
                  r.x + i + u.x > h.x && (l = r.x + i - h.x + u.x),
                    r.x - l - a.x < 0 && (l = r.x - a.x),
                    r.y + n + u.y > h.y && (c = r.y + n - h.y + u.y),
                    r.y - c - a.y < 0 && (c = r.y - a.y),
                    (l || c) &&
                      (this.options.keepInView && (this._autopanning = !0),
                      t.fire("autopanstart").panBy([l, c]));
                }
            },
            _getAnchor: function () {
              return O(
                this._source && this._source._getPopupAnchor
                  ? this._source._getPopupAnchor()
                  : [0, 0],
              );
            },
          });
          Ve.mergeOptions({ closePopupOnClick: !0 }),
            Ve.include({
              openPopup: function (t, e, n) {
                return this._initOverlay(ni, t, e, n).openOn(this), this;
              },
              closePopup: function (t) {
                return (
                  (t = arguments.length ? t : this._popup) && t.close(), this
                );
              },
            }),
            Sn.include({
              bindPopup: function (t, e) {
                return (
                  (this._popup = this._initOverlay(ni, this._popup, t, e)),
                  this._popupHandlersAdded ||
                    (this.on({
                      click: this._openPopup,
                      keypress: this._onKeyPress,
                      remove: this.closePopup,
                      move: this._movePopup,
                    }),
                    (this._popupHandlersAdded = !0)),
                  this
                );
              },
              unbindPopup: function () {
                return (
                  this._popup &&
                    (this.off({
                      click: this._openPopup,
                      keypress: this._onKeyPress,
                      remove: this.closePopup,
                      move: this._movePopup,
                    }),
                    (this._popupHandlersAdded = !1),
                    (this._popup = null)),
                  this
                );
              },
              openPopup: function (t) {
                return (
                  this._popup &&
                    (this instanceof kn || (this._popup._source = this),
                    this._popup._prepareOpen(t || this._latlng) &&
                      this._popup.openOn(this._map)),
                  this
                );
              },
              closePopup: function () {
                return this._popup && this._popup.close(), this;
              },
              togglePopup: function () {
                return this._popup && this._popup.toggle(this), this;
              },
              isPopupOpen: function () {
                return !!this._popup && this._popup.isOpen();
              },
              setPopupContent: function (t) {
                return this._popup && this._popup.setContent(t), this;
              },
              getPopup: function () {
                return this._popup;
              },
              _openPopup: function (t) {
                if (this._popup && this._map) {
                  je(t);
                  var e = t.layer || t.target;
                  this._popup._source !== e || e instanceof In
                    ? ((this._popup._source = e), this.openPopup(t.latlng))
                    : this._map.hasLayer(this._popup)
                      ? this.closePopup()
                      : this.openPopup(t.latlng);
                }
              },
              _movePopup: function (t) {
                this._popup.setLatLng(t.latlng);
              },
              _onKeyPress: function (t) {
                13 === t.originalEvent.keyCode && this._openPopup(t);
              },
            });
          var ii = ei.extend({
            options: {
              pane: "tooltipPane",
              offset: [0, 0],
              direction: "auto",
              permanent: !1,
              sticky: !1,
              opacity: 0.9,
            },
            onAdd: function (t) {
              ei.prototype.onAdd.call(this, t),
                this.setOpacity(this.options.opacity),
                t.fire("tooltipopen", { tooltip: this }),
                this._source &&
                  (this.addEventParent(this._source),
                  this._source.fire("tooltipopen", { tooltip: this }, !0));
            },
            onRemove: function (t) {
              ei.prototype.onRemove.call(this, t),
                t.fire("tooltipclose", { tooltip: this }),
                this._source &&
                  (this.removeEventParent(this._source),
                  this._source.fire("tooltipclose", { tooltip: this }, !0));
            },
            getEvents: function () {
              var t = ei.prototype.getEvents.call(this);
              return this.options.permanent || (t.preclick = this.close), t;
            },
            _initLayout: function () {
              var t =
                "leaflet-tooltip " +
                (this.options.className || "") +
                " leaflet-zoom-" +
                (this._zoomAnimated ? "animated" : "hide");
              (this._contentNode = this._container = re("div", t)),
                this._container.setAttribute("role", "tooltip"),
                this._container.setAttribute(
                  "id",
                  "leaflet-tooltip-" + r(this),
                );
            },
            _updateLayout: function () {},
            _adjustPan: function () {},
            _setPosition: function (t) {
              var e,
                n,
                i = this._map,
                o = this._container,
                r = i.latLngToContainerPoint(i.getCenter()),
                s = i.layerPointToContainerPoint(t),
                a = this.options.direction,
                u = o.offsetWidth,
                h = o.offsetHeight,
                l = O(this.options.offset),
                c = this._getAnchor();
              "top" === a
                ? ((e = u / 2), (n = h))
                : "bottom" === a
                  ? ((e = u / 2), (n = 0))
                  : "center" === a
                    ? ((e = u / 2), (n = h / 2))
                    : "right" === a
                      ? ((e = 0), (n = h / 2))
                      : "left" === a
                        ? ((e = u), (n = h / 2))
                        : s.x < r.x
                          ? ((a = "right"), (e = 0), (n = h / 2))
                          : ((a = "left"),
                            (e = u + 2 * (l.x + c.x)),
                            (n = h / 2)),
                (t = t
                  .subtract(O(e, n, !0))
                  .add(l)
                  .add(c)),
                fe(o, "leaflet-tooltip-right"),
                fe(o, "leaflet-tooltip-left"),
                fe(o, "leaflet-tooltip-top"),
                fe(o, "leaflet-tooltip-bottom"),
                ce(o, "leaflet-tooltip-" + a),
                ve(o, t);
            },
            _updatePosition: function () {
              var t = this._map.latLngToLayerPoint(this._latlng);
              this._setPosition(t);
            },
            setOpacity: function (t) {
              (this.options.opacity = t),
                this._container && _e(this._container, t);
            },
            _animateZoom: function (t) {
              var e = this._map._latLngToNewLayerPoint(
                this._latlng,
                t.zoom,
                t.center,
              );
              this._setPosition(e);
            },
            _getAnchor: function () {
              return O(
                this._source &&
                  this._source._getTooltipAnchor &&
                  !this.options.sticky
                  ? this._source._getTooltipAnchor()
                  : [0, 0],
              );
            },
          });
          Ve.include({
            openTooltip: function (t, e, n) {
              return this._initOverlay(ii, t, e, n).openOn(this), this;
            },
            closeTooltip: function (t) {
              return t.close(), this;
            },
          }),
            Sn.include({
              bindTooltip: function (t, e) {
                return (
                  this._tooltip && this.isTooltipOpen() && this.unbindTooltip(),
                  (this._tooltip = this._initOverlay(ii, this._tooltip, t, e)),
                  this._initTooltipInteractions(),
                  this._tooltip.options.permanent &&
                    this._map &&
                    this._map.hasLayer(this) &&
                    this.openTooltip(),
                  this
                );
              },
              unbindTooltip: function () {
                return (
                  this._tooltip &&
                    (this._initTooltipInteractions(!0),
                    this.closeTooltip(),
                    (this._tooltip = null)),
                  this
                );
              },
              _initTooltipInteractions: function (t) {
                if (t || !this._tooltipHandlersAdded) {
                  var e = t ? "off" : "on",
                    n = { remove: this.closeTooltip, move: this._moveTooltip };
                  this._tooltip.options.permanent
                    ? (n.add = this._openTooltip)
                    : ((n.mouseover = this._openTooltip),
                      (n.mouseout = this.closeTooltip),
                      (n.click = this._openTooltip),
                      this._map
                        ? this._addFocusListeners()
                        : (n.add = this._addFocusListeners)),
                    this._tooltip.options.sticky &&
                      (n.mousemove = this._moveTooltip),
                    this[e](n),
                    (this._tooltipHandlersAdded = !t);
                }
              },
              openTooltip: function (t) {
                return (
                  this._tooltip &&
                    (this instanceof kn || (this._tooltip._source = this),
                    this._tooltip._prepareOpen(t) &&
                      (this._tooltip.openOn(this._map),
                      this.getElement
                        ? this._setAriaDescribedByOnLayer(this)
                        : this.eachLayer &&
                          this.eachLayer(
                            this._setAriaDescribedByOnLayer,
                            this,
                          ))),
                  this
                );
              },
              closeTooltip: function () {
                if (this._tooltip) return this._tooltip.close();
              },
              toggleTooltip: function () {
                return this._tooltip && this._tooltip.toggle(this), this;
              },
              isTooltipOpen: function () {
                return this._tooltip.isOpen();
              },
              setTooltipContent: function (t) {
                return this._tooltip && this._tooltip.setContent(t), this;
              },
              getTooltip: function () {
                return this._tooltip;
              },
              _addFocusListeners: function () {
                this.getElement
                  ? this._addFocusListenersOnLayer(this)
                  : this.eachLayer &&
                    this.eachLayer(this._addFocusListenersOnLayer, this);
              },
              _addFocusListenersOnLayer: function (t) {
                var e = "function" == typeof t.getElement && t.getElement();
                e &&
                  (Se(
                    e,
                    "focus",
                    function () {
                      (this._tooltip._source = t), this.openTooltip();
                    },
                    this,
                  ),
                  Se(e, "blur", this.closeTooltip, this));
              },
              _setAriaDescribedByOnLayer: function (t) {
                var e = "function" == typeof t.getElement && t.getElement();
                e &&
                  e.setAttribute(
                    "aria-describedby",
                    this._tooltip._container.id,
                  );
              },
              _openTooltip: function (t) {
                if (this._tooltip && this._map)
                  if (
                    this._map.dragging &&
                    this._map.dragging.moving() &&
                    !this._openOnceFlag
                  ) {
                    this._openOnceFlag = !0;
                    var e = this;
                    this._map.once("moveend", function () {
                      (e._openOnceFlag = !1), e._openTooltip(t);
                    });
                  } else
                    (this._tooltip._source = t.layer || t.target),
                      this.openTooltip(
                        this._tooltip.options.sticky ? t.latlng : void 0,
                      );
              },
              _moveTooltip: function (t) {
                var e,
                  n,
                  i = t.latlng;
                this._tooltip.options.sticky &&
                  t.originalEvent &&
                  ((e = this._map.mouseEventToContainerPoint(t.originalEvent)),
                  (n = this._map.containerPointToLayerPoint(e)),
                  (i = this._map.layerPointToLatLng(n))),
                  this._tooltip.setLatLng(i);
              },
            });
          var oi = zn.extend({
            options: {
              iconSize: [12, 12],
              html: !1,
              bgPos: null,
              className: "leaflet-div-icon",
            },
            createIcon: function (t) {
              var e =
                  t && "DIV" === t.tagName ? t : document.createElement("div"),
                n = this.options;
              if (
                (n.html instanceof Element
                  ? (ae(e), e.appendChild(n.html))
                  : (e.innerHTML = !1 !== n.html ? n.html : ""),
                n.bgPos)
              ) {
                var i = O(n.bgPos);
                e.style.backgroundPosition = -i.x + "px " + -i.y + "px";
              }
              return this._setIconStyles(e, "icon"), e;
            },
            createShadow: function () {
              return null;
            },
          });
          zn.Default = An;
          var ri = Sn.extend({
            options: {
              tileSize: 256,
              opacity: 1,
              updateWhenIdle: Zt.mobile,
              updateWhenZooming: !0,
              updateInterval: 200,
              zIndex: 1,
              bounds: null,
              minZoom: 0,
              maxZoom: void 0,
              maxNativeZoom: void 0,
              minNativeZoom: void 0,
              noWrap: !1,
              pane: "tilePane",
              className: "",
              keepBuffer: 2,
            },
            initialize: function (t) {
              f(this, t);
            },
            onAdd: function () {
              this._initContainer(),
                (this._levels = {}),
                (this._tiles = {}),
                this._resetView();
            },
            beforeAdd: function (t) {
              t._addZoomLimit(this);
            },
            onRemove: function (t) {
              this._removeAllTiles(),
                se(this._container),
                t._removeZoomLimit(this),
                (this._container = null),
                (this._tileZoom = void 0);
            },
            bringToFront: function () {
              return (
                this._map &&
                  (ue(this._container), this._setAutoZIndex(Math.max)),
                this
              );
            },
            bringToBack: function () {
              return (
                this._map &&
                  (he(this._container), this._setAutoZIndex(Math.min)),
                this
              );
            },
            getContainer: function () {
              return this._container;
            },
            setOpacity: function (t) {
              return (this.options.opacity = t), this._updateOpacity(), this;
            },
            setZIndex: function (t) {
              return (this.options.zIndex = t), this._updateZIndex(), this;
            },
            isLoading: function () {
              return this._loading;
            },
            redraw: function () {
              if (this._map) {
                this._removeAllTiles();
                var t = this._clampZoom(this._map.getZoom());
                t !== this._tileZoom &&
                  ((this._tileZoom = t), this._updateLevels()),
                  this._update();
              }
              return this;
            },
            getEvents: function () {
              var t = {
                viewprereset: this._invalidateAll,
                viewreset: this._resetView,
                zoom: this._resetView,
                moveend: this._onMoveEnd,
              };
              return (
                this.options.updateWhenIdle ||
                  (this._onMove ||
                    (this._onMove = s(
                      this._onMoveEnd,
                      this.options.updateInterval,
                      this,
                    )),
                  (t.move = this._onMove)),
                this._zoomAnimated && (t.zoomanim = this._animateZoom),
                t
              );
            },
            createTile: function () {
              return document.createElement("div");
            },
            getTileSize: function () {
              var t = this.options.tileSize;
              return t instanceof z ? t : new z(t, t);
            },
            _updateZIndex: function () {
              this._container &&
                void 0 !== this.options.zIndex &&
                null !== this.options.zIndex &&
                (this._container.style.zIndex = this.options.zIndex);
            },
            _setAutoZIndex: function (t) {
              for (
                var e,
                  n = this.getPane().children,
                  i = -t(-1 / 0, 1 / 0),
                  o = 0,
                  r = n.length;
                o < r;
                o++
              )
                (e = n[o].style.zIndex),
                  n[o] !== this._container && e && (i = t(i, +e));
              isFinite(i) &&
                ((this.options.zIndex = i + t(-1, 1)), this._updateZIndex());
            },
            _updateOpacity: function () {
              if (this._map && !Zt.ielt9) {
                _e(this._container, this.options.opacity);
                var t = +new Date(),
                  e = !1,
                  n = !1;
                for (var i in this._tiles) {
                  var o = this._tiles[i];
                  if (o.current && o.loaded) {
                    var r = Math.min(1, (t - o.loaded) / 200);
                    _e(o.el, r),
                      r < 1
                        ? (e = !0)
                        : (o.active ? (n = !0) : this._onOpaqueTile(o),
                          (o.active = !0));
                  }
                }
                n && !this._noPrune && this._pruneTiles(),
                  e &&
                    (M(this._fadeFrame),
                    (this._fadeFrame = P(this._updateOpacity, this)));
              }
            },
            _onOpaqueTile: u,
            _initContainer: function () {
              this._container ||
                ((this._container = re(
                  "div",
                  "leaflet-layer " + (this.options.className || ""),
                )),
                this._updateZIndex(),
                this.options.opacity < 1 && this._updateOpacity(),
                this.getPane().appendChild(this._container));
            },
            _updateLevels: function () {
              var t = this._tileZoom,
                e = this.options.maxZoom;
              if (void 0 !== t) {
                for (var n in this._levels)
                  (n = Number(n)),
                    this._levels[n].el.children.length || n === t
                      ? ((this._levels[n].el.style.zIndex =
                          e - Math.abs(t - n)),
                        this._onUpdateLevel(n))
                      : (se(this._levels[n].el),
                        this._removeTilesAtZoom(n),
                        this._onRemoveLevel(n),
                        delete this._levels[n]);
                var i = this._levels[t],
                  o = this._map;
                return (
                  i ||
                    (((i = this._levels[t] = {}).el = re(
                      "div",
                      "leaflet-tile-container leaflet-zoom-animated",
                      this._container,
                    )),
                    (i.el.style.zIndex = e),
                    (i.origin = o
                      .project(o.unproject(o.getPixelOrigin()), t)
                      .round()),
                    (i.zoom = t),
                    this._setZoomTransform(i, o.getCenter(), o.getZoom()),
                    i.el.offsetWidth,
                    this._onCreateLevel(i)),
                  (this._level = i),
                  i
                );
              }
            },
            _onUpdateLevel: u,
            _onRemoveLevel: u,
            _onCreateLevel: u,
            _pruneTiles: function () {
              if (this._map) {
                var t,
                  e,
                  n = this._map.getZoom();
                if (n > this.options.maxZoom || n < this.options.minZoom)
                  this._removeAllTiles();
                else {
                  for (t in this._tiles)
                    (e = this._tiles[t]).retain = e.current;
                  for (t in this._tiles)
                    if ((e = this._tiles[t]).current && !e.active) {
                      var i = e.coords;
                      this._retainParent(i.x, i.y, i.z, i.z - 5) ||
                        this._retainChildren(i.x, i.y, i.z, i.z + 2);
                    }
                  for (t in this._tiles)
                    this._tiles[t].retain || this._removeTile(t);
                }
              }
            },
            _removeTilesAtZoom: function (t) {
              for (var e in this._tiles)
                this._tiles[e].coords.z === t && this._removeTile(e);
            },
            _removeAllTiles: function () {
              for (var t in this._tiles) this._removeTile(t);
            },
            _invalidateAll: function () {
              for (var t in this._levels)
                se(this._levels[t].el),
                  this._onRemoveLevel(Number(t)),
                  delete this._levels[t];
              this._removeAllTiles(), (this._tileZoom = void 0);
            },
            _retainParent: function (t, e, n, i) {
              var o = Math.floor(t / 2),
                r = Math.floor(e / 2),
                s = n - 1,
                a = new z(+o, +r);
              a.z = +s;
              var u = this._tileCoordsToKey(a),
                h = this._tiles[u];
              return h && h.active
                ? ((h.retain = !0), !0)
                : (h && h.loaded && (h.retain = !0),
                  s > i && this._retainParent(o, r, s, i));
            },
            _retainChildren: function (t, e, n, i) {
              for (var o = 2 * t; o < 2 * t + 2; o++)
                for (var r = 2 * e; r < 2 * e + 2; r++) {
                  var s = new z(o, r);
                  s.z = n + 1;
                  var a = this._tileCoordsToKey(s),
                    u = this._tiles[a];
                  u && u.active
                    ? (u.retain = !0)
                    : (u && u.loaded && (u.retain = !0),
                      n + 1 < i && this._retainChildren(o, r, n + 1, i));
                }
            },
            _resetView: function (t) {
              var e = t && (t.pinch || t.flyTo);
              this._setView(this._map.getCenter(), this._map.getZoom(), e, e);
            },
            _animateZoom: function (t) {
              this._setView(t.center, t.zoom, !0, t.noUpdate);
            },
            _clampZoom: function (t) {
              var e = this.options;
              return void 0 !== e.minNativeZoom && t < e.minNativeZoom
                ? e.minNativeZoom
                : void 0 !== e.maxNativeZoom && e.maxNativeZoom < t
                  ? e.maxNativeZoom
                  : t;
            },
            _setView: function (t, e, n, i) {
              var o = Math.round(e);
              o =
                (void 0 !== this.options.maxZoom && o > this.options.maxZoom) ||
                (void 0 !== this.options.minZoom && o < this.options.minZoom)
                  ? void 0
                  : this._clampZoom(o);
              var r = this.options.updateWhenZooming && o !== this._tileZoom;
              (i && !r) ||
                ((this._tileZoom = o),
                this._abortLoading && this._abortLoading(),
                this._updateLevels(),
                this._resetGrid(),
                void 0 !== o && this._update(t),
                n || this._pruneTiles(),
                (this._noPrune = !!n)),
                this._setZoomTransforms(t, e);
            },
            _setZoomTransforms: function (t, e) {
              for (var n in this._levels)
                this._setZoomTransform(this._levels[n], t, e);
            },
            _setZoomTransform: function (t, e, n) {
              var i = this._map.getZoomScale(n, t.zoom),
                o = t.origin
                  .multiplyBy(i)
                  .subtract(this._map._getNewPixelOrigin(e, n))
                  .round();
              Zt.any3d ? ge(t.el, o, i) : ve(t.el, o);
            },
            _resetGrid: function () {
              var t = this._map,
                e = t.options.crs,
                n = (this._tileSize = this.getTileSize()),
                i = this._tileZoom,
                o = this._map.getPixelWorldBounds(this._tileZoom);
              o && (this._globalTileRange = this._pxBoundsToTileRange(o)),
                (this._wrapX = e.wrapLng &&
                  !this.options.noWrap && [
                    Math.floor(t.project([0, e.wrapLng[0]], i).x / n.x),
                    Math.ceil(t.project([0, e.wrapLng[1]], i).x / n.y),
                  ]),
                (this._wrapY = e.wrapLat &&
                  !this.options.noWrap && [
                    Math.floor(t.project([e.wrapLat[0], 0], i).y / n.x),
                    Math.ceil(t.project([e.wrapLat[1], 0], i).y / n.y),
                  ]);
            },
            _onMoveEnd: function () {
              this._map && !this._map._animatingZoom && this._update();
            },
            _getTiledPixelBounds: function (t) {
              var e = this._map,
                n = e._animatingZoom
                  ? Math.max(e._animateToZoom, e.getZoom())
                  : e.getZoom(),
                i = e.getZoomScale(n, this._tileZoom),
                o = e.project(t, this._tileZoom).floor(),
                r = e.getSize().divideBy(2 * i);
              return new Z(o.subtract(r), o.add(r));
            },
            _update: function (t) {
              var e = this._map;
              if (e) {
                var n = this._clampZoom(e.getZoom());
                if (
                  (void 0 === t && (t = e.getCenter()),
                  void 0 !== this._tileZoom)
                ) {
                  var i = this._getTiledPixelBounds(t),
                    o = this._pxBoundsToTileRange(i),
                    r = o.getCenter(),
                    s = [],
                    a = this.options.keepBuffer,
                    u = new Z(
                      o.getBottomLeft().subtract([a, -a]),
                      o.getTopRight().add([a, -a]),
                    );
                  if (
                    !(
                      isFinite(o.min.x) &&
                      isFinite(o.min.y) &&
                      isFinite(o.max.x) &&
                      isFinite(o.max.y)
                    )
                  )
                    throw new Error(
                      "Attempted to load an infinite number of tiles",
                    );
                  for (var h in this._tiles) {
                    var l = this._tiles[h].coords;
                    (l.z === this._tileZoom && u.contains(new z(l.x, l.y))) ||
                      (this._tiles[h].current = !1);
                  }
                  if (Math.abs(n - this._tileZoom) > 1) this._setView(t, n);
                  else {
                    for (var c = o.min.y; c <= o.max.y; c++)
                      for (var f = o.min.x; f <= o.max.x; f++) {
                        var d = new z(f, c);
                        if (((d.z = this._tileZoom), this._isValidTile(d))) {
                          var p = this._tiles[this._tileCoordsToKey(d)];
                          p ? (p.current = !0) : s.push(d);
                        }
                      }
                    if (
                      (s.sort(function (t, e) {
                        return t.distanceTo(r) - e.distanceTo(r);
                      }),
                      0 !== s.length)
                    ) {
                      this._loading ||
                        ((this._loading = !0), this.fire("loading"));
                      var _ = document.createDocumentFragment();
                      for (f = 0; f < s.length; f++) this._addTile(s[f], _);
                      this._level.el.appendChild(_);
                    }
                  }
                }
              }
            },
            _isValidTile: function (t) {
              var e = this._map.options.crs;
              if (!e.infinite) {
                var n = this._globalTileRange;
                if (
                  (!e.wrapLng && (t.x < n.min.x || t.x > n.max.x)) ||
                  (!e.wrapLat && (t.y < n.min.y || t.y > n.max.y))
                )
                  return !1;
              }
              if (!this.options.bounds) return !0;
              var i = this._tileCoordsToBounds(t);
              return N(this.options.bounds).overlaps(i);
            },
            _keyToBounds: function (t) {
              return this._tileCoordsToBounds(this._keyToTileCoords(t));
            },
            _tileCoordsToNwSe: function (t) {
              var e = this._map,
                n = this.getTileSize(),
                i = t.scaleBy(n),
                o = i.add(n);
              return [e.unproject(i, t.z), e.unproject(o, t.z)];
            },
            _tileCoordsToBounds: function (t) {
              var e = this._tileCoordsToNwSe(t),
                n = new B(e[0], e[1]);
              return (
                this.options.noWrap || (n = this._map.wrapLatLngBounds(n)), n
              );
            },
            _tileCoordsToKey: function (t) {
              return t.x + ":" + t.y + ":" + t.z;
            },
            _keyToTileCoords: function (t) {
              var e = t.split(":"),
                n = new z(+e[0], +e[1]);
              return (n.z = +e[2]), n;
            },
            _removeTile: function (t) {
              var e = this._tiles[t];
              e &&
                (se(e.el),
                delete this._tiles[t],
                this.fire("tileunload", {
                  tile: e.el,
                  coords: this._keyToTileCoords(t),
                }));
            },
            _initTile: function (t) {
              ce(t, "leaflet-tile");
              var e = this.getTileSize();
              (t.style.width = e.x + "px"),
                (t.style.height = e.y + "px"),
                (t.onselectstart = u),
                (t.onmousemove = u),
                Zt.ielt9 &&
                  this.options.opacity < 1 &&
                  _e(t, this.options.opacity);
            },
            _addTile: function (t, e) {
              var n = this._getTilePos(t),
                o = this._tileCoordsToKey(t),
                r = this.createTile(
                  this._wrapCoords(t),
                  i(this._tileReady, this, t),
                );
              this._initTile(r),
                this.createTile.length < 2 &&
                  P(i(this._tileReady, this, t, null, r)),
                ve(r, n),
                (this._tiles[o] = { el: r, coords: t, current: !0 }),
                e.appendChild(r),
                this.fire("tileloadstart", { tile: r, coords: t });
            },
            _tileReady: function (t, e, n) {
              e && this.fire("tileerror", { error: e, tile: n, coords: t });
              var o = this._tileCoordsToKey(t);
              (n = this._tiles[o]) &&
                ((n.loaded = +new Date()),
                this._map._fadeAnimated
                  ? (_e(n.el, 0),
                    M(this._fadeFrame),
                    (this._fadeFrame = P(this._updateOpacity, this)))
                  : ((n.active = !0), this._pruneTiles()),
                e ||
                  (ce(n.el, "leaflet-tile-loaded"),
                  this.fire("tileload", { tile: n.el, coords: t })),
                this._noTilesToLoad() &&
                  ((this._loading = !1),
                  this.fire("load"),
                  Zt.ielt9 || !this._map._fadeAnimated
                    ? P(this._pruneTiles, this)
                    : setTimeout(i(this._pruneTiles, this), 250)));
            },
            _getTilePos: function (t) {
              return t.scaleBy(this.getTileSize()).subtract(this._level.origin);
            },
            _wrapCoords: function (t) {
              var e = new z(
                this._wrapX ? a(t.x, this._wrapX) : t.x,
                this._wrapY ? a(t.y, this._wrapY) : t.y,
              );
              return (e.z = t.z), e;
            },
            _pxBoundsToTileRange: function (t) {
              var e = this.getTileSize();
              return new Z(
                t.min.unscaleBy(e).floor(),
                t.max.unscaleBy(e).ceil().subtract([1, 1]),
              );
            },
            _noTilesToLoad: function () {
              for (var t in this._tiles) if (!this._tiles[t].loaded) return !1;
              return !0;
            },
          });
          var si = ri.extend({
            options: {
              minZoom: 0,
              maxZoom: 18,
              subdomains: "abc",
              errorTileUrl: "",
              zoomOffset: 0,
              tms: !1,
              zoomReverse: !1,
              detectRetina: !1,
              crossOrigin: !1,
              referrerPolicy: !1,
            },
            initialize: function (t, e) {
              (this._url = t),
                (e = f(this, e)).detectRetina && Zt.retina && e.maxZoom > 0
                  ? ((e.tileSize = Math.floor(e.tileSize / 2)),
                    e.zoomReverse
                      ? (e.zoomOffset--,
                        (e.minZoom = Math.min(e.maxZoom, e.minZoom + 1)))
                      : (e.zoomOffset++,
                        (e.maxZoom = Math.max(e.minZoom, e.maxZoom - 1))),
                    (e.minZoom = Math.max(0, e.minZoom)))
                  : e.zoomReverse
                    ? (e.minZoom = Math.min(e.maxZoom, e.minZoom))
                    : (e.maxZoom = Math.max(e.minZoom, e.maxZoom)),
                "string" == typeof e.subdomains &&
                  (e.subdomains = e.subdomains.split("")),
                this.on("tileunload", this._onTileRemove);
            },
            setUrl: function (t, e) {
              return (
                this._url === t && void 0 === e && (e = !0),
                (this._url = t),
                e || this.redraw(),
                this
              );
            },
            createTile: function (t, e) {
              var n = document.createElement("img");
              return (
                Se(n, "load", i(this._tileOnLoad, this, e, n)),
                Se(n, "error", i(this._tileOnError, this, e, n)),
                (this.options.crossOrigin || "" === this.options.crossOrigin) &&
                  (n.crossOrigin =
                    !0 === this.options.crossOrigin
                      ? ""
                      : this.options.crossOrigin),
                "string" == typeof this.options.referrerPolicy &&
                  (n.referrerPolicy = this.options.referrerPolicy),
                (n.alt = ""),
                (n.src = this.getTileUrl(t)),
                n
              );
            },
            getTileUrl: function (t) {
              var n = {
                r: Zt.retina ? "@2x" : "",
                s: this._getSubdomain(t),
                x: t.x,
                y: t.y,
                z: this._getZoomForUrl(),
              };
              if (this._map && !this._map.options.crs.infinite) {
                var i = this._globalTileRange.max.y - t.y;
                this.options.tms && (n.y = i), (n["-y"] = i);
              }
              return _(this._url, e(n, this.options));
            },
            _tileOnLoad: function (t, e) {
              Zt.ielt9 ? setTimeout(i(t, this, null, e), 0) : t(null, e);
            },
            _tileOnError: function (t, e, n) {
              var i = this.options.errorTileUrl;
              i && e.getAttribute("src") !== i && (e.src = i), t(n, e);
            },
            _onTileRemove: function (t) {
              t.tile.onload = null;
            },
            _getZoomForUrl: function () {
              var t = this._tileZoom,
                e = this.options.maxZoom;
              return (
                this.options.zoomReverse && (t = e - t),
                t + this.options.zoomOffset
              );
            },
            _getSubdomain: function (t) {
              var e = Math.abs(t.x + t.y) % this.options.subdomains.length;
              return this.options.subdomains[e];
            },
            _abortLoading: function () {
              var t, e;
              for (t in this._tiles)
                if (
                  this._tiles[t].coords.z !== this._tileZoom &&
                  (((e = this._tiles[t].el).onload = u),
                  (e.onerror = u),
                  !e.complete)
                ) {
                  e.src = v;
                  var n = this._tiles[t].coords;
                  se(e),
                    delete this._tiles[t],
                    this.fire("tileabort", { tile: e, coords: n });
                }
            },
            _removeTile: function (t) {
              var e = this._tiles[t];
              if (e)
                return (
                  e.el.setAttribute("src", v),
                  ri.prototype._removeTile.call(this, t)
                );
            },
            _tileReady: function (t, e, n) {
              if (this._map && (!n || n.getAttribute("src") !== v))
                return ri.prototype._tileReady.call(this, t, e, n);
            },
          });
          function ai(t, e) {
            return new si(t, e);
          }
          var ui = si.extend({
            defaultWmsParams: {
              service: "WMS",
              request: "GetMap",
              layers: "",
              styles: "",
              format: "image/jpeg",
              transparent: !1,
              version: "1.1.1",
            },
            options: { crs: null, uppercase: !1 },
            initialize: function (t, n) {
              this._url = t;
              var i = e({}, this.defaultWmsParams);
              for (var o in n) o in this.options || (i[o] = n[o]);
              var r = (n = f(this, n)).detectRetina && Zt.retina ? 2 : 1,
                s = this.getTileSize();
              (i.width = s.x * r), (i.height = s.y * r), (this.wmsParams = i);
            },
            onAdd: function (t) {
              (this._crs = this.options.crs || t.options.crs),
                (this._wmsVersion = parseFloat(this.wmsParams.version));
              var e = this._wmsVersion >= 1.3 ? "crs" : "srs";
              (this.wmsParams[e] = this._crs.code),
                si.prototype.onAdd.call(this, t);
            },
            getTileUrl: function (t) {
              var e = this._tileCoordsToNwSe(t),
                n = this._crs,
                i = I(n.project(e[0]), n.project(e[1])),
                o = i.min,
                r = i.max,
                s = (
                  this._wmsVersion >= 1.3 && this._crs === Mn
                    ? [o.y, o.x, r.y, r.x]
                    : [o.x, o.y, r.x, r.y]
                ).join(","),
                a = si.prototype.getTileUrl.call(this, t);
              return (
                a +
                d(this.wmsParams, a, this.options.uppercase) +
                (this.options.uppercase ? "&BBOX=" : "&bbox=") +
                s
              );
            },
            setParams: function (t, n) {
              return e(this.wmsParams, t), n || this.redraw(), this;
            },
          });
          (si.WMS = ui),
            (ai.wms = function (t, e) {
              return new ui(t, e);
            });
          var hi = Sn.extend({
              options: { padding: 0.1 },
              initialize: function (t) {
                f(this, t), r(this), (this._layers = this._layers || {});
              },
              onAdd: function () {
                this._container ||
                  (this._initContainer(),
                  ce(this._container, "leaflet-zoom-animated")),
                  this.getPane().appendChild(this._container),
                  this._update(),
                  this.on("update", this._updatePaths, this);
              },
              onRemove: function () {
                this.off("update", this._updatePaths, this),
                  this._destroyContainer();
              },
              getEvents: function () {
                var t = {
                  viewreset: this._reset,
                  zoom: this._onZoom,
                  moveend: this._update,
                  zoomend: this._onZoomEnd,
                };
                return this._zoomAnimated && (t.zoomanim = this._onAnimZoom), t;
              },
              _onAnimZoom: function (t) {
                this._updateTransform(t.center, t.zoom);
              },
              _onZoom: function () {
                this._updateTransform(
                  this._map.getCenter(),
                  this._map.getZoom(),
                );
              },
              _updateTransform: function (t, e) {
                var n = this._map.getZoomScale(e, this._zoom),
                  i = this._map
                    .getSize()
                    .multiplyBy(0.5 + this.options.padding),
                  o = this._map.project(this._center, e),
                  r = i
                    .multiplyBy(-n)
                    .add(o)
                    .subtract(this._map._getNewPixelOrigin(t, e));
                Zt.any3d ? ge(this._container, r, n) : ve(this._container, r);
              },
              _reset: function () {
                for (var t in (this._update(),
                this._updateTransform(this._center, this._zoom),
                this._layers))
                  this._layers[t]._reset();
              },
              _onZoomEnd: function () {
                for (var t in this._layers) this._layers[t]._project();
              },
              _updatePaths: function () {
                for (var t in this._layers) this._layers[t]._update();
              },
              _update: function () {
                var t = this.options.padding,
                  e = this._map.getSize(),
                  n = this._map
                    .containerPointToLayerPoint(e.multiplyBy(-t))
                    .round();
                (this._bounds = new Z(
                  n,
                  n.add(e.multiplyBy(1 + 2 * t)).round(),
                )),
                  (this._center = this._map.getCenter()),
                  (this._zoom = this._map.getZoom());
              },
            }),
            li = hi.extend({
              options: { tolerance: 0 },
              getEvents: function () {
                var t = hi.prototype.getEvents.call(this);
                return (t.viewprereset = this._onViewPreReset), t;
              },
              _onViewPreReset: function () {
                this._postponeUpdatePaths = !0;
              },
              onAdd: function () {
                hi.prototype.onAdd.call(this), this._draw();
              },
              _initContainer: function () {
                var t = (this._container = document.createElement("canvas"));
                Se(t, "mousemove", this._onMouseMove, this),
                  Se(
                    t,
                    "click dblclick mousedown mouseup contextmenu",
                    this._onClick,
                    this,
                  ),
                  Se(t, "mouseout", this._handleMouseOut, this),
                  (t._leaflet_disable_events = !0),
                  (this._ctx = t.getContext("2d"));
              },
              _destroyContainer: function () {
                M(this._redrawRequest),
                  delete this._ctx,
                  se(this._container),
                  ke(this._container),
                  delete this._container;
              },
              _updatePaths: function () {
                if (!this._postponeUpdatePaths) {
                  for (var t in ((this._redrawBounds = null), this._layers))
                    this._layers[t]._update();
                  this._redraw();
                }
              },
              _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                  hi.prototype._update.call(this);
                  var t = this._bounds,
                    e = this._container,
                    n = t.getSize(),
                    i = Zt.retina ? 2 : 1;
                  ve(e, t.min),
                    (e.width = i * n.x),
                    (e.height = i * n.y),
                    (e.style.width = n.x + "px"),
                    (e.style.height = n.y + "px"),
                    Zt.retina && this._ctx.scale(2, 2),
                    this._ctx.translate(-t.min.x, -t.min.y),
                    this.fire("update");
                }
              },
              _reset: function () {
                hi.prototype._reset.call(this),
                  this._postponeUpdatePaths &&
                    ((this._postponeUpdatePaths = !1), this._updatePaths());
              },
              _initPath: function (t) {
                this._updateDashArray(t), (this._layers[r(t)] = t);
                var e = (t._order = {
                  layer: t,
                  prev: this._drawLast,
                  next: null,
                });
                this._drawLast && (this._drawLast.next = e),
                  (this._drawLast = e),
                  (this._drawFirst = this._drawFirst || this._drawLast);
              },
              _addPath: function (t) {
                this._requestRedraw(t);
              },
              _removePath: function (t) {
                var e = t._order,
                  n = e.next,
                  i = e.prev;
                n ? (n.prev = i) : (this._drawLast = i),
                  i ? (i.next = n) : (this._drawFirst = n),
                  delete t._order,
                  delete this._layers[r(t)],
                  this._requestRedraw(t);
              },
              _updatePath: function (t) {
                this._extendRedrawBounds(t),
                  t._project(),
                  t._update(),
                  this._requestRedraw(t);
              },
              _updateStyle: function (t) {
                this._updateDashArray(t), this._requestRedraw(t);
              },
              _updateDashArray: function (t) {
                if ("string" == typeof t.options.dashArray) {
                  var e,
                    n,
                    i = t.options.dashArray.split(/[, ]+/),
                    o = [];
                  for (n = 0; n < i.length; n++) {
                    if (((e = Number(i[n])), isNaN(e))) return;
                    o.push(e);
                  }
                  t.options._dashArray = o;
                } else t.options._dashArray = t.options.dashArray;
              },
              _requestRedraw: function (t) {
                this._map &&
                  (this._extendRedrawBounds(t),
                  (this._redrawRequest =
                    this._redrawRequest || P(this._redraw, this)));
              },
              _extendRedrawBounds: function (t) {
                if (t._pxBounds) {
                  var e = (t.options.weight || 0) + 1;
                  (this._redrawBounds = this._redrawBounds || new Z()),
                    this._redrawBounds.extend(t._pxBounds.min.subtract([e, e])),
                    this._redrawBounds.extend(t._pxBounds.max.add([e, e]));
                }
              },
              _redraw: function () {
                (this._redrawRequest = null),
                  this._redrawBounds &&
                    (this._redrawBounds.min._floor(),
                    this._redrawBounds.max._ceil()),
                  this._clear(),
                  this._draw(),
                  (this._redrawBounds = null);
              },
              _clear: function () {
                var t = this._redrawBounds;
                if (t) {
                  var e = t.getSize();
                  this._ctx.clearRect(t.min.x, t.min.y, e.x, e.y);
                } else
                  this._ctx.save(),
                    this._ctx.setTransform(1, 0, 0, 1, 0, 0),
                    this._ctx.clearRect(
                      0,
                      0,
                      this._container.width,
                      this._container.height,
                    ),
                    this._ctx.restore();
              },
              _draw: function () {
                var t,
                  e = this._redrawBounds;
                if ((this._ctx.save(), e)) {
                  var n = e.getSize();
                  this._ctx.beginPath(),
                    this._ctx.rect(e.min.x, e.min.y, n.x, n.y),
                    this._ctx.clip();
                }
                this._drawing = !0;
                for (var i = this._drawFirst; i; i = i.next)
                  (t = i.layer),
                    (!e || (t._pxBounds && t._pxBounds.intersects(e))) &&
                      t._updatePath();
                (this._drawing = !1), this._ctx.restore();
              },
              _updatePoly: function (t, e) {
                if (this._drawing) {
                  var n,
                    i,
                    o,
                    r,
                    s = t._parts,
                    a = s.length,
                    u = this._ctx;
                  if (a) {
                    for (u.beginPath(), n = 0; n < a; n++) {
                      for (i = 0, o = s[n].length; i < o; i++)
                        (r = s[n][i]), u[i ? "lineTo" : "moveTo"](r.x, r.y);
                      e && u.closePath();
                    }
                    this._fillStroke(u, t);
                  }
                }
              },
              _updateCircle: function (t) {
                if (this._drawing && !t._empty()) {
                  var e = t._point,
                    n = this._ctx,
                    i = Math.max(Math.round(t._radius), 1),
                    o = (Math.max(Math.round(t._radiusY), 1) || i) / i;
                  1 !== o && (n.save(), n.scale(1, o)),
                    n.beginPath(),
                    n.arc(e.x, e.y / o, i, 0, 2 * Math.PI, !1),
                    1 !== o && n.restore(),
                    this._fillStroke(n, t);
                }
              },
              _fillStroke: function (t, e) {
                var n = e.options;
                n.fill &&
                  ((t.globalAlpha = n.fillOpacity),
                  (t.fillStyle = n.fillColor || n.color),
                  t.fill(n.fillRule || "evenodd")),
                  n.stroke &&
                    0 !== n.weight &&
                    (t.setLineDash &&
                      t.setLineDash((e.options && e.options._dashArray) || []),
                    (t.globalAlpha = n.opacity),
                    (t.lineWidth = n.weight),
                    (t.strokeStyle = n.color),
                    (t.lineCap = n.lineCap),
                    (t.lineJoin = n.lineJoin),
                    t.stroke());
              },
              _onClick: function (t) {
                for (
                  var e,
                    n,
                    i = this._map.mouseEventToLayerPoint(t),
                    o = this._drawFirst;
                  o;
                  o = o.next
                )
                  (e = o.layer).options.interactive &&
                    e._containsPoint(i) &&
                    (("click" !== t.type && "preclick" !== t.type) ||
                      !this._map._draggableMoved(e)) &&
                    (n = e);
                this._fireEvent(!!n && [n], t);
              },
              _onMouseMove: function (t) {
                if (
                  this._map &&
                  !this._map.dragging.moving() &&
                  !this._map._animatingZoom
                ) {
                  var e = this._map.mouseEventToLayerPoint(t);
                  this._handleMouseHover(t, e);
                }
              },
              _handleMouseOut: function (t) {
                var e = this._hoveredLayer;
                e &&
                  (fe(this._container, "leaflet-interactive"),
                  this._fireEvent([e], t, "mouseout"),
                  (this._hoveredLayer = null),
                  (this._mouseHoverThrottled = !1));
              },
              _handleMouseHover: function (t, e) {
                if (!this._mouseHoverThrottled) {
                  for (var n, o, r = this._drawFirst; r; r = r.next)
                    (n = r.layer).options.interactive &&
                      n._containsPoint(e) &&
                      (o = n);
                  o !== this._hoveredLayer &&
                    (this._handleMouseOut(t),
                    o &&
                      (ce(this._container, "leaflet-interactive"),
                      this._fireEvent([o], t, "mouseover"),
                      (this._hoveredLayer = o))),
                    this._fireEvent(
                      !!this._hoveredLayer && [this._hoveredLayer],
                      t,
                    ),
                    (this._mouseHoverThrottled = !0),
                    setTimeout(
                      i(function () {
                        this._mouseHoverThrottled = !1;
                      }, this),
                      32,
                    );
                }
              },
              _fireEvent: function (t, e, n) {
                this._map._fireDOMEvent(e, n || e.type, t);
              },
              _bringToFront: function (t) {
                var e = t._order;
                if (e) {
                  var n = e.next,
                    i = e.prev;
                  n &&
                    ((n.prev = i),
                    i ? (i.next = n) : n && (this._drawFirst = n),
                    (e.prev = this._drawLast),
                    (this._drawLast.next = e),
                    (e.next = null),
                    (this._drawLast = e),
                    this._requestRedraw(t));
                }
              },
              _bringToBack: function (t) {
                var e = t._order;
                if (e) {
                  var n = e.next,
                    i = e.prev;
                  i &&
                    ((i.next = n),
                    n ? (n.prev = i) : i && (this._drawLast = i),
                    (e.prev = null),
                    (e.next = this._drawFirst),
                    (this._drawFirst.prev = e),
                    (this._drawFirst = e),
                    this._requestRedraw(t));
                }
              },
            });
          function ci(t) {
            return Zt.canvas ? new li(t) : null;
          }
          var fi = (function () {
              try {
                return (
                  document.namespaces.add(
                    "lvml",
                    "urn:schemas-microsoft-com:vml",
                  ),
                  function (t) {
                    return document.createElement(
                      "<lvml:" + t + ' class="lvml">',
                    );
                  }
                );
              } catch (t) {}
              return function (t) {
                return document.createElement(
                  "<" +
                    t +
                    ' xmlns="urn:schemas-microsoft.com:vml" class="lvml">',
                );
              };
            })(),
            di = {
              _initContainer: function () {
                this._container = re("div", "leaflet-vml-container");
              },
              _update: function () {
                this._map._animatingZoom ||
                  (hi.prototype._update.call(this), this.fire("update"));
              },
              _initPath: function (t) {
                var e = (t._container = fi("shape"));
                ce(e, "leaflet-vml-shape " + (this.options.className || "")),
                  (e.coordsize = "1 1"),
                  (t._path = fi("path")),
                  e.appendChild(t._path),
                  this._updateStyle(t),
                  (this._layers[r(t)] = t);
              },
              _addPath: function (t) {
                var e = t._container;
                this._container.appendChild(e),
                  t.options.interactive && t.addInteractiveTarget(e);
              },
              _removePath: function (t) {
                var e = t._container;
                se(e), t.removeInteractiveTarget(e), delete this._layers[r(t)];
              },
              _updateStyle: function (t) {
                var e = t._stroke,
                  n = t._fill,
                  i = t.options,
                  o = t._container;
                (o.stroked = !!i.stroke),
                  (o.filled = !!i.fill),
                  i.stroke
                    ? (e || (e = t._stroke = fi("stroke")),
                      o.appendChild(e),
                      (e.weight = i.weight + "px"),
                      (e.color = i.color),
                      (e.opacity = i.opacity),
                      i.dashArray
                        ? (e.dashStyle = m(i.dashArray)
                            ? i.dashArray.join(" ")
                            : i.dashArray.replace(/( *, *)/g, " "))
                        : (e.dashStyle = ""),
                      (e.endcap = i.lineCap.replace("butt", "flat")),
                      (e.joinstyle = i.lineJoin))
                    : e && (o.removeChild(e), (t._stroke = null)),
                  i.fill
                    ? (n || (n = t._fill = fi("fill")),
                      o.appendChild(n),
                      (n.color = i.fillColor || i.color),
                      (n.opacity = i.fillOpacity))
                    : n && (o.removeChild(n), (t._fill = null));
              },
              _updateCircle: function (t) {
                var e = t._point.round(),
                  n = Math.round(t._radius),
                  i = Math.round(t._radiusY || n);
                this._setPath(
                  t,
                  t._empty()
                    ? "M0 0"
                    : "AL " +
                        e.x +
                        "," +
                        e.y +
                        " " +
                        n +
                        "," +
                        i +
                        " 0,23592600",
                );
              },
              _setPath: function (t, e) {
                t._path.v = e;
              },
              _bringToFront: function (t) {
                ue(t._container);
              },
              _bringToBack: function (t) {
                he(t._container);
              },
            },
            pi = Zt.vml ? fi : G,
            _i = hi.extend({
              _initContainer: function () {
                (this._container = pi("svg")),
                  this._container.setAttribute("pointer-events", "none"),
                  (this._rootGroup = pi("g")),
                  this._container.appendChild(this._rootGroup);
              },
              _destroyContainer: function () {
                se(this._container),
                  ke(this._container),
                  delete this._container,
                  delete this._rootGroup,
                  delete this._svgSize;
              },
              _update: function () {
                if (!this._map._animatingZoom || !this._bounds) {
                  hi.prototype._update.call(this);
                  var t = this._bounds,
                    e = t.getSize(),
                    n = this._container;
                  (this._svgSize && this._svgSize.equals(e)) ||
                    ((this._svgSize = e),
                    n.setAttribute("width", e.x),
                    n.setAttribute("height", e.y)),
                    ve(n, t.min),
                    n.setAttribute(
                      "viewBox",
                      [t.min.x, t.min.y, e.x, e.y].join(" "),
                    ),
                    this.fire("update");
                }
              },
              _initPath: function (t) {
                var e = (t._path = pi("path"));
                t.options.className && ce(e, t.options.className),
                  t.options.interactive && ce(e, "leaflet-interactive"),
                  this._updateStyle(t),
                  (this._layers[r(t)] = t);
              },
              _addPath: function (t) {
                this._rootGroup || this._initContainer(),
                  this._rootGroup.appendChild(t._path),
                  t.addInteractiveTarget(t._path);
              },
              _removePath: function (t) {
                se(t._path),
                  t.removeInteractiveTarget(t._path),
                  delete this._layers[r(t)];
              },
              _updatePath: function (t) {
                t._project(), t._update();
              },
              _updateStyle: function (t) {
                var e = t._path,
                  n = t.options;
                e &&
                  (n.stroke
                    ? (e.setAttribute("stroke", n.color),
                      e.setAttribute("stroke-opacity", n.opacity),
                      e.setAttribute("stroke-width", n.weight),
                      e.setAttribute("stroke-linecap", n.lineCap),
                      e.setAttribute("stroke-linejoin", n.lineJoin),
                      n.dashArray
                        ? e.setAttribute("stroke-dasharray", n.dashArray)
                        : e.removeAttribute("stroke-dasharray"),
                      n.dashOffset
                        ? e.setAttribute("stroke-dashoffset", n.dashOffset)
                        : e.removeAttribute("stroke-dashoffset"))
                    : e.setAttribute("stroke", "none"),
                  n.fill
                    ? (e.setAttribute("fill", n.fillColor || n.color),
                      e.setAttribute("fill-opacity", n.fillOpacity),
                      e.setAttribute("fill-rule", n.fillRule || "evenodd"))
                    : e.setAttribute("fill", "none"));
              },
              _updatePoly: function (t, e) {
                this._setPath(t, X(t._parts, e));
              },
              _updateCircle: function (t) {
                var e = t._point,
                  n = Math.max(Math.round(t._radius), 1),
                  i =
                    "a" +
                    n +
                    "," +
                    (Math.max(Math.round(t._radiusY), 1) || n) +
                    " 0 1,0 ",
                  o = t._empty()
                    ? "M0 0"
                    : "M" +
                      (e.x - n) +
                      "," +
                      e.y +
                      i +
                      2 * n +
                      ",0 " +
                      i +
                      2 * -n +
                      ",0 ";
                this._setPath(t, o);
              },
              _setPath: function (t, e) {
                t._path.setAttribute("d", e);
              },
              _bringToFront: function (t) {
                ue(t._path);
              },
              _bringToBack: function (t) {
                he(t._path);
              },
            });
          function mi(t) {
            return Zt.svg || Zt.vml ? new _i(t) : null;
          }
          Zt.vml && _i.include(di),
            Ve.include({
              getRenderer: function (t) {
                var e =
                  t.options.renderer ||
                  this._getPaneRenderer(t.options.pane) ||
                  this.options.renderer ||
                  this._renderer;
                return (
                  e || (e = this._renderer = this._createRenderer()),
                  this.hasLayer(e) || this.addLayer(e),
                  e
                );
              },
              _getPaneRenderer: function (t) {
                if ("overlayPane" === t || void 0 === t) return !1;
                var e = this._paneRenderers[t];
                return (
                  void 0 === e &&
                    ((e = this._createRenderer({ pane: t })),
                    (this._paneRenderers[t] = e)),
                  e
                );
              },
              _createRenderer: function (t) {
                return (this.options.preferCanvas && ci(t)) || mi(t);
              },
            });
          var gi = jn.extend({
            initialize: function (t, e) {
              jn.prototype.initialize.call(this, this._boundsToLatLngs(t), e);
            },
            setBounds: function (t) {
              return this.setLatLngs(this._boundsToLatLngs(t));
            },
            _boundsToLatLngs: function (t) {
              return [
                (t = N(t)).getSouthWest(),
                t.getNorthWest(),
                t.getNorthEast(),
                t.getSouthEast(),
              ];
            },
          });
          (_i.create = pi),
            (_i.pointsToPath = X),
            (Rn.geometryToLayer = Fn),
            (Rn.coordsToLatLng = Un),
            (Rn.coordsToLatLngs = $n),
            (Rn.latLngToCoords = Wn),
            (Rn.latLngsToCoords = qn),
            (Rn.getFeature = Vn),
            (Rn.asFeature = Yn),
            Ve.mergeOptions({ boxZoom: !0 });
          var vi = tn.extend({
            initialize: function (t) {
              (this._map = t),
                (this._container = t._container),
                (this._pane = t._panes.overlayPane),
                (this._resetStateTimeout = 0),
                t.on("unload", this._destroy, this);
            },
            addHooks: function () {
              Se(this._container, "mousedown", this._onMouseDown, this);
            },
            removeHooks: function () {
              ke(this._container, "mousedown", this._onMouseDown, this);
            },
            moved: function () {
              return this._moved;
            },
            _destroy: function () {
              se(this._pane), delete this._pane;
            },
            _resetState: function () {
              (this._resetStateTimeout = 0), (this._moved = !1);
            },
            _clearDeferredResetState: function () {
              0 !== this._resetStateTimeout &&
                (clearTimeout(this._resetStateTimeout),
                (this._resetStateTimeout = 0));
            },
            _onMouseDown: function (t) {
              if (!t.shiftKey || (1 !== t.which && 1 !== t.button)) return !1;
              this._clearDeferredResetState(),
                this._resetState(),
                Gt(),
                xe(),
                (this._startPoint = this._map.mouseEventToContainerPoint(t)),
                Se(
                  document,
                  {
                    contextmenu: je,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown,
                  },
                  this,
                );
            },
            _onMouseMove: function (t) {
              this._moved ||
                ((this._moved = !0),
                (this._box = re("div", "leaflet-zoom-box", this._container)),
                ce(this._container, "leaflet-crosshair"),
                this._map.fire("boxzoomstart")),
                (this._point = this._map.mouseEventToContainerPoint(t));
              var e = new Z(this._point, this._startPoint),
                n = e.getSize();
              ve(this._box, e.min),
                (this._box.style.width = n.x + "px"),
                (this._box.style.height = n.y + "px");
            },
            _finish: function () {
              this._moved &&
                (se(this._box), fe(this._container, "leaflet-crosshair")),
                Xt(),
                be(),
                ke(
                  document,
                  {
                    contextmenu: je,
                    mousemove: this._onMouseMove,
                    mouseup: this._onMouseUp,
                    keydown: this._onKeyDown,
                  },
                  this,
                );
            },
            _onMouseUp: function (t) {
              if (
                (1 === t.which || 1 === t.button) &&
                (this._finish(), this._moved)
              ) {
                this._clearDeferredResetState(),
                  (this._resetStateTimeout = setTimeout(
                    i(this._resetState, this),
                    0,
                  ));
                var e = new B(
                  this._map.containerPointToLatLng(this._startPoint),
                  this._map.containerPointToLatLng(this._point),
                );
                this._map.fitBounds(e).fire("boxzoomend", { boxZoomBounds: e });
              }
            },
            _onKeyDown: function (t) {
              27 === t.keyCode &&
                (this._finish(),
                this._clearDeferredResetState(),
                this._resetState());
            },
          });
          Ve.addInitHook("addHandler", "boxZoom", vi),
            Ve.mergeOptions({ doubleClickZoom: !0 });
          var yi = tn.extend({
            addHooks: function () {
              this._map.on("dblclick", this._onDoubleClick, this);
            },
            removeHooks: function () {
              this._map.off("dblclick", this._onDoubleClick, this);
            },
            _onDoubleClick: function (t) {
              var e = this._map,
                n = e.getZoom(),
                i = e.options.zoomDelta,
                o = t.originalEvent.shiftKey ? n - i : n + i;
              "center" === e.options.doubleClickZoom
                ? e.setZoom(o)
                : e.setZoomAround(t.containerPoint, o);
            },
          });
          Ve.addInitHook("addHandler", "doubleClickZoom", yi),
            Ve.mergeOptions({
              dragging: !0,
              inertia: !0,
              inertiaDeceleration: 3400,
              inertiaMaxSpeed: 1 / 0,
              easeLinearity: 0.2,
              worldCopyJump: !1,
              maxBoundsViscosity: 0,
            });
          var wi = tn.extend({
            addHooks: function () {
              if (!this._draggable) {
                var t = this._map;
                (this._draggable = new on(t._mapPane, t._container)),
                  this._draggable.on(
                    {
                      dragstart: this._onDragStart,
                      drag: this._onDrag,
                      dragend: this._onDragEnd,
                    },
                    this,
                  ),
                  this._draggable.on("predrag", this._onPreDragLimit, this),
                  t.options.worldCopyJump &&
                    (this._draggable.on("predrag", this._onPreDragWrap, this),
                    t.on("zoomend", this._onZoomEnd, this),
                    t.whenReady(this._onZoomEnd, this));
              }
              ce(this._map._container, "leaflet-grab leaflet-touch-drag"),
                this._draggable.enable(),
                (this._positions = []),
                (this._times = []);
            },
            removeHooks: function () {
              fe(this._map._container, "leaflet-grab"),
                fe(this._map._container, "leaflet-touch-drag"),
                this._draggable.disable();
            },
            moved: function () {
              return this._draggable && this._draggable._moved;
            },
            moving: function () {
              return this._draggable && this._draggable._moving;
            },
            _onDragStart: function () {
              var t = this._map;
              if (
                (t._stop(),
                this._map.options.maxBounds &&
                  this._map.options.maxBoundsViscosity)
              ) {
                var e = N(this._map.options.maxBounds);
                (this._offsetLimit = I(
                  this._map
                    .latLngToContainerPoint(e.getNorthWest())
                    .multiplyBy(-1),
                  this._map
                    .latLngToContainerPoint(e.getSouthEast())
                    .multiplyBy(-1)
                    .add(this._map.getSize()),
                )),
                  (this._viscosity = Math.min(
                    1,
                    Math.max(0, this._map.options.maxBoundsViscosity),
                  ));
              } else this._offsetLimit = null;
              t.fire("movestart").fire("dragstart"),
                t.options.inertia &&
                  ((this._positions = []), (this._times = []));
            },
            _onDrag: function (t) {
              if (this._map.options.inertia) {
                var e = (this._lastTime = +new Date()),
                  n = (this._lastPos =
                    this._draggable._absPos || this._draggable._newPos);
                this._positions.push(n),
                  this._times.push(e),
                  this._prunePositions(e);
              }
              this._map.fire("move", t).fire("drag", t);
            },
            _prunePositions: function (t) {
              for (; this._positions.length > 1 && t - this._times[0] > 50; )
                this._positions.shift(), this._times.shift();
            },
            _onZoomEnd: function () {
              var t = this._map.getSize().divideBy(2),
                e = this._map.latLngToLayerPoint([0, 0]);
              (this._initialWorldOffset = e.subtract(t).x),
                (this._worldWidth = this._map
                  .getPixelWorldBounds()
                  .getSize().x);
            },
            _viscousLimit: function (t, e) {
              return t - (t - e) * this._viscosity;
            },
            _onPreDragLimit: function () {
              if (this._viscosity && this._offsetLimit) {
                var t = this._draggable._newPos.subtract(
                    this._draggable._startPos,
                  ),
                  e = this._offsetLimit;
                t.x < e.min.x && (t.x = this._viscousLimit(t.x, e.min.x)),
                  t.y < e.min.y && (t.y = this._viscousLimit(t.y, e.min.y)),
                  t.x > e.max.x && (t.x = this._viscousLimit(t.x, e.max.x)),
                  t.y > e.max.y && (t.y = this._viscousLimit(t.y, e.max.y)),
                  (this._draggable._newPos = this._draggable._startPos.add(t));
              }
            },
            _onPreDragWrap: function () {
              var t = this._worldWidth,
                e = Math.round(t / 2),
                n = this._initialWorldOffset,
                i = this._draggable._newPos.x,
                o = ((i - e + n) % t) + e - n,
                r = ((i + e + n) % t) - e - n,
                s = Math.abs(o + n) < Math.abs(r + n) ? o : r;
              (this._draggable._absPos = this._draggable._newPos.clone()),
                (this._draggable._newPos.x = s);
            },
            _onDragEnd: function (t) {
              var e = this._map,
                n = e.options,
                i = !n.inertia || t.noInertia || this._times.length < 2;
              if ((e.fire("dragend", t), i)) e.fire("moveend");
              else {
                this._prunePositions(+new Date());
                var o = this._lastPos.subtract(this._positions[0]),
                  r = (this._lastTime - this._times[0]) / 1e3,
                  s = n.easeLinearity,
                  a = o.multiplyBy(s / r),
                  u = a.distanceTo([0, 0]),
                  h = Math.min(n.inertiaMaxSpeed, u),
                  l = a.multiplyBy(h / u),
                  c = h / (n.inertiaDeceleration * s),
                  f = l.multiplyBy(-c / 2).round();
                f.x || f.y
                  ? ((f = e._limitOffset(f, e.options.maxBounds)),
                    P(function () {
                      e.panBy(f, {
                        duration: c,
                        easeLinearity: s,
                        noMoveStart: !0,
                        animate: !0,
                      });
                    }))
                  : e.fire("moveend");
              }
            },
          });
          Ve.addInitHook("addHandler", "dragging", wi),
            Ve.mergeOptions({ keyboard: !0, keyboardPanDelta: 80 });
          var xi = tn.extend({
            keyCodes: {
              left: [37],
              right: [39],
              down: [40],
              up: [38],
              zoomIn: [187, 107, 61, 171],
              zoomOut: [189, 109, 54, 173],
            },
            initialize: function (t) {
              (this._map = t),
                this._setPanDelta(t.options.keyboardPanDelta),
                this._setZoomDelta(t.options.zoomDelta);
            },
            addHooks: function () {
              var t = this._map._container;
              t.tabIndex <= 0 && (t.tabIndex = "0"),
                Se(
                  t,
                  {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown,
                  },
                  this,
                ),
                this._map.on(
                  { focus: this._addHooks, blur: this._removeHooks },
                  this,
                );
            },
            removeHooks: function () {
              this._removeHooks(),
                ke(
                  this._map._container,
                  {
                    focus: this._onFocus,
                    blur: this._onBlur,
                    mousedown: this._onMouseDown,
                  },
                  this,
                ),
                this._map.off(
                  { focus: this._addHooks, blur: this._removeHooks },
                  this,
                );
            },
            _onMouseDown: function () {
              if (!this._focused) {
                var t = document.body,
                  e = document.documentElement,
                  n = t.scrollTop || e.scrollTop,
                  i = t.scrollLeft || e.scrollLeft;
                this._map._container.focus(), window.scrollTo(i, n);
              }
            },
            _onFocus: function () {
              (this._focused = !0), this._map.fire("focus");
            },
            _onBlur: function () {
              (this._focused = !1), this._map.fire("blur");
            },
            _setPanDelta: function (t) {
              var e,
                n,
                i = (this._panKeys = {}),
                o = this.keyCodes;
              for (e = 0, n = o.left.length; e < n; e++)
                i[o.left[e]] = [-1 * t, 0];
              for (e = 0, n = o.right.length; e < n; e++)
                i[o.right[e]] = [t, 0];
              for (e = 0, n = o.down.length; e < n; e++) i[o.down[e]] = [0, t];
              for (e = 0, n = o.up.length; e < n; e++) i[o.up[e]] = [0, -1 * t];
            },
            _setZoomDelta: function (t) {
              var e,
                n,
                i = (this._zoomKeys = {}),
                o = this.keyCodes;
              for (e = 0, n = o.zoomIn.length; e < n; e++) i[o.zoomIn[e]] = t;
              for (e = 0, n = o.zoomOut.length; e < n; e++)
                i[o.zoomOut[e]] = -t;
            },
            _addHooks: function () {
              Se(document, "keydown", this._onKeyDown, this);
            },
            _removeHooks: function () {
              ke(document, "keydown", this._onKeyDown, this);
            },
            _onKeyDown: function (t) {
              if (!(t.altKey || t.ctrlKey || t.metaKey)) {
                var e,
                  n = t.keyCode,
                  i = this._map;
                if (n in this._panKeys) {
                  if (!i._panAnim || !i._panAnim._inProgress)
                    if (
                      ((e = this._panKeys[n]),
                      t.shiftKey && (e = O(e).multiplyBy(3)),
                      i.options.maxBounds &&
                        (e = i._limitOffset(O(e), i.options.maxBounds)),
                      i.options.worldCopyJump)
                    ) {
                      var o = i.wrapLatLng(
                        i.unproject(i.project(i.getCenter()).add(e)),
                      );
                      i.panTo(o);
                    } else i.panBy(e);
                } else if (n in this._zoomKeys)
                  i.setZoom(
                    i.getZoom() + (t.shiftKey ? 3 : 1) * this._zoomKeys[n],
                  );
                else {
                  if (
                    27 !== n ||
                    !i._popup ||
                    !i._popup.options.closeOnEscapeKey
                  )
                    return;
                  i.closePopup();
                }
                je(t);
              }
            },
          });
          Ve.addInitHook("addHandler", "keyboard", xi),
            Ve.mergeOptions({
              scrollWheelZoom: !0,
              wheelDebounceTime: 40,
              wheelPxPerZoomLevel: 60,
            });
          var bi = tn.extend({
            addHooks: function () {
              Se(this._map._container, "wheel", this._onWheelScroll, this),
                (this._delta = 0);
            },
            removeHooks: function () {
              ke(this._map._container, "wheel", this._onWheelScroll, this);
            },
            _onWheelScroll: function (t) {
              var e = Ue(t),
                n = this._map.options.wheelDebounceTime;
              (this._delta += e),
                (this._lastMousePos = this._map.mouseEventToContainerPoint(t)),
                this._startTime || (this._startTime = +new Date());
              var o = Math.max(n - (+new Date() - this._startTime), 0);
              clearTimeout(this._timer),
                (this._timer = setTimeout(i(this._performZoom, this), o)),
                je(t);
            },
            _performZoom: function () {
              var t = this._map,
                e = t.getZoom(),
                n = this._map.options.zoomSnap || 0;
              t._stop();
              var i = this._delta / (4 * this._map.options.wheelPxPerZoomLevel),
                o = (4 * Math.log(2 / (1 + Math.exp(-Math.abs(i))))) / Math.LN2,
                r = n ? Math.ceil(o / n) * n : o,
                s = t._limitZoom(e + (this._delta > 0 ? r : -r)) - e;
              (this._delta = 0),
                (this._startTime = null),
                s &&
                  ("center" === t.options.scrollWheelZoom
                    ? t.setZoom(e + s)
                    : t.setZoomAround(this._lastMousePos, e + s));
            },
          });
          Ve.addInitHook("addHandler", "scrollWheelZoom", bi);
          Ve.mergeOptions({
            tapHold: Zt.touchNative && Zt.safari && Zt.mobile,
            tapTolerance: 15,
          });
          var Li = tn.extend({
            addHooks: function () {
              Se(this._map._container, "touchstart", this._onDown, this);
            },
            removeHooks: function () {
              ke(this._map._container, "touchstart", this._onDown, this);
            },
            _onDown: function (t) {
              if ((clearTimeout(this._holdTimeout), 1 === t.touches.length)) {
                var e = t.touches[0];
                (this._startPos = this._newPos = new z(e.clientX, e.clientY)),
                  (this._holdTimeout = setTimeout(
                    i(function () {
                      this._cancel(),
                        this._isTapValid() &&
                          (Se(document, "touchend", De),
                          Se(
                            document,
                            "touchend touchcancel",
                            this._cancelClickPrevent,
                          ),
                          this._simulateEvent("contextmenu", e));
                    }, this),
                    600,
                  )),
                  Se(
                    document,
                    "touchend touchcancel contextmenu",
                    this._cancel,
                    this,
                  ),
                  Se(document, "touchmove", this._onMove, this);
              }
            },
            _cancelClickPrevent: function t() {
              ke(document, "touchend", De),
                ke(document, "touchend touchcancel", t);
            },
            _cancel: function () {
              clearTimeout(this._holdTimeout),
                ke(
                  document,
                  "touchend touchcancel contextmenu",
                  this._cancel,
                  this,
                ),
                ke(document, "touchmove", this._onMove, this);
            },
            _onMove: function (t) {
              var e = t.touches[0];
              this._newPos = new z(e.clientX, e.clientY);
            },
            _isTapValid: function () {
              return (
                this._newPos.distanceTo(this._startPos) <=
                this._map.options.tapTolerance
              );
            },
            _simulateEvent: function (t, e) {
              var n = new MouseEvent(t, {
                bubbles: !0,
                cancelable: !0,
                view: window,
                screenX: e.screenX,
                screenY: e.screenY,
                clientX: e.clientX,
                clientY: e.clientY,
              });
              (n._simulated = !0), e.target.dispatchEvent(n);
            },
          });
          Ve.addInitHook("addHandler", "tapHold", Li),
            Ve.mergeOptions({ touchZoom: Zt.touch, bounceAtZoomLimits: !0 });
          var Ti = tn.extend({
            addHooks: function () {
              ce(this._map._container, "leaflet-touch-zoom"),
                Se(
                  this._map._container,
                  "touchstart",
                  this._onTouchStart,
                  this,
                );
            },
            removeHooks: function () {
              fe(this._map._container, "leaflet-touch-zoom"),
                ke(
                  this._map._container,
                  "touchstart",
                  this._onTouchStart,
                  this,
                );
            },
            _onTouchStart: function (t) {
              var e = this._map;
              if (
                t.touches &&
                2 === t.touches.length &&
                !e._animatingZoom &&
                !this._zooming
              ) {
                var n = e.mouseEventToContainerPoint(t.touches[0]),
                  i = e.mouseEventToContainerPoint(t.touches[1]);
                (this._centerPoint = e.getSize()._divideBy(2)),
                  (this._startLatLng = e.containerPointToLatLng(
                    this._centerPoint,
                  )),
                  "center" !== e.options.touchZoom &&
                    (this._pinchStartLatLng = e.containerPointToLatLng(
                      n.add(i)._divideBy(2),
                    )),
                  (this._startDist = n.distanceTo(i)),
                  (this._startZoom = e.getZoom()),
                  (this._moved = !1),
                  (this._zooming = !0),
                  e._stop(),
                  Se(document, "touchmove", this._onTouchMove, this),
                  Se(document, "touchend touchcancel", this._onTouchEnd, this),
                  De(t);
              }
            },
            _onTouchMove: function (t) {
              if (t.touches && 2 === t.touches.length && this._zooming) {
                var e = this._map,
                  n = e.mouseEventToContainerPoint(t.touches[0]),
                  o = e.mouseEventToContainerPoint(t.touches[1]),
                  r = n.distanceTo(o) / this._startDist;
                if (
                  ((this._zoom = e.getScaleZoom(r, this._startZoom)),
                  !e.options.bounceAtZoomLimits &&
                    ((this._zoom < e.getMinZoom() && r < 1) ||
                      (this._zoom > e.getMaxZoom() && r > 1)) &&
                    (this._zoom = e._limitZoom(this._zoom)),
                  "center" === e.options.touchZoom)
                ) {
                  if (((this._center = this._startLatLng), 1 === r)) return;
                } else {
                  var s = n._add(o)._divideBy(2)._subtract(this._centerPoint);
                  if (1 === r && 0 === s.x && 0 === s.y) return;
                  this._center = e.unproject(
                    e.project(this._pinchStartLatLng, this._zoom).subtract(s),
                    this._zoom,
                  );
                }
                this._moved || (e._moveStart(!0, !1), (this._moved = !0)),
                  M(this._animRequest);
                var a = i(
                  e._move,
                  e,
                  this._center,
                  this._zoom,
                  { pinch: !0, round: !1 },
                  void 0,
                );
                (this._animRequest = P(a, this, !0)), De(t);
              }
            },
            _onTouchEnd: function () {
              this._moved && this._zooming
                ? ((this._zooming = !1),
                  M(this._animRequest),
                  ke(document, "touchmove", this._onTouchMove, this),
                  ke(document, "touchend touchcancel", this._onTouchEnd, this),
                  this._map.options.zoomAnimation
                    ? this._map._animateZoom(
                        this._center,
                        this._map._limitZoom(this._zoom),
                        !0,
                        this._map.options.zoomSnap,
                      )
                    : this._map._resetView(
                        this._center,
                        this._map._limitZoom(this._zoom),
                      ))
                : (this._zooming = !1);
            },
          });
          Ve.addInitHook("addHandler", "touchZoom", Ti),
            (Ve.BoxZoom = vi),
            (Ve.DoubleClickZoom = yi),
            (Ve.Drag = wi),
            (Ve.Keyboard = xi),
            (Ve.ScrollWheelZoom = bi),
            (Ve.TapHold = Li),
            (Ve.TouchZoom = Ti),
            (t.Bounds = Z),
            (t.Browser = Zt),
            (t.CRS = F),
            (t.Canvas = li),
            (t.Circle = Nn),
            (t.CircleMarker = Bn),
            (t.Class = S),
            (t.Control = Ye),
            (t.DivIcon = oi),
            (t.DivOverlay = ei),
            (t.DomEvent = We),
            (t.DomUtil = Ce),
            (t.Draggable = on),
            (t.Evented = k),
            (t.FeatureGroup = kn),
            (t.GeoJSON = Rn),
            (t.GridLayer = ri),
            (t.Handler = tn),
            (t.Icon = zn),
            (t.ImageOverlay = Jn),
            (t.LatLng = D),
            (t.LatLngBounds = B),
            (t.Layer = Sn),
            (t.LayerGroup = En),
            (t.LineUtil = xn),
            (t.Map = Ve),
            (t.Marker = Zn),
            (t.Mixin = en),
            (t.Path = In),
            (t.Point = z),
            (t.PolyUtil = hn),
            (t.Polygon = jn),
            (t.Polyline = Dn),
            (t.Popup = ni),
            (t.PosAnimation = qe),
            (t.Projection = Tn),
            (t.Rectangle = gi),
            (t.Renderer = hi),
            (t.SVG = _i),
            (t.SVGOverlay = ti),
            (t.TileLayer = si),
            (t.Tooltip = ii),
            (t.Transformation = W),
            (t.Util = C),
            (t.VideoOverlay = Qn),
            (t.bind = i),
            (t.bounds = I),
            (t.canvas = ci),
            (t.circle = function (t, e, n) {
              return new Nn(t, e, n);
            }),
            (t.circleMarker = function (t, e) {
              return new Bn(t, e);
            }),
            (t.control = Ge),
            (t.divIcon = function (t) {
              return new oi(t);
            }),
            (t.extend = e),
            (t.featureGroup = function (t, e) {
              return new kn(t, e);
            }),
            (t.geoJSON = Xn),
            (t.geoJson = Kn),
            (t.gridLayer = function (t) {
              return new ri(t);
            }),
            (t.icon = function (t) {
              return new zn(t);
            }),
            (t.imageOverlay = function (t, e, n) {
              return new Jn(t, e, n);
            }),
            (t.latLng = j),
            (t.latLngBounds = N),
            (t.layerGroup = function (t, e) {
              return new En(t, e);
            }),
            (t.map = function (t, e) {
              return new Ve(t, e);
            }),
            (t.marker = function (t, e) {
              return new Zn(t, e);
            }),
            (t.point = O),
            (t.polygon = function (t, e) {
              return new jn(t, e);
            }),
            (t.polyline = function (t, e) {
              return new Dn(t, e);
            }),
            (t.popup = function (t, e) {
              return new ni(t, e);
            }),
            (t.rectangle = function (t, e) {
              return new gi(t, e);
            }),
            (t.setOptions = f),
            (t.stamp = r),
            (t.svg = mi),
            (t.svgOverlay = function (t, e, n) {
              return new ti(t, e, n);
            }),
            (t.tileLayer = ai),
            (t.tooltip = function (t, e) {
              return new ii(t, e);
            }),
            (t.transformation = q),
            (t.version = "1.9.4"),
            (t.videoOverlay = function (t, e, n) {
              return new Qn(t, e, n);
            });
          var Pi = window.L;
          (t.noConflict = function () {
            return (window.L = Pi), this;
          }),
            (window.L = t);
        })(e);
      },
      166: (t, e, n) => {
        "use strict";
        function i(t, e) {
          let n, i;
          if (void 0 === e)
            for (const e of t)
              null != e &&
                (void 0 === n
                  ? e >= e && (n = i = e)
                  : (n > e && (n = e), i < e && (i = e)));
          else {
            let o = -1;
            for (let r of t)
              null != (r = e(r, ++o, t)) &&
                (void 0 === n
                  ? r >= r && (n = i = r)
                  : (n > r && (n = r), i < r && (i = r)));
          }
          return [n, i];
        }
        function o(t, e) {
          let n;
          if (void 0 === e)
            for (const e of t)
              null != e && (n < e || (void 0 === n && e >= e)) && (n = e);
          else {
            let i = -1;
            for (let o of t)
              null != (o = e(o, ++i, t)) &&
                (n < o || (void 0 === n && o >= o)) &&
                (n = o);
          }
          return n;
        }
        function r(t) {
          return t;
        }
        n.d(e, {
          LLu: () => g,
          y4O: () => v,
          gyn: () => Vn,
          Wem: () => i,
          jvg: () => vs,
          Fp7: () => o,
          BYU: () => Ni,
          PKp: () => Hi,
          Xf: () => rs,
          Ys: () => ss,
          Z1g: () => Do,
        });
        var s = 1,
          a = 2,
          u = 3,
          h = 4,
          l = 1e-6;
        function c(t) {
          return "translate(" + t + ",0)";
        }
        function f(t) {
          return "translate(0," + t + ")";
        }
        function d(t) {
          return (e) => +t(e);
        }
        function p(t, e) {
          return (
            (e = Math.max(0, t.bandwidth() - 2 * e) / 2),
            t.round() && (e = Math.round(e)),
            (n) => +t(n) + e
          );
        }
        function _() {
          return !this.__axis;
        }
        function m(t, e) {
          var n = [],
            i = null,
            o = null,
            m = 6,
            g = 6,
            v = 3,
            y =
              "undefined" != typeof window && window.devicePixelRatio > 1
                ? 0
                : 0.5,
            w = t === s || t === h ? -1 : 1,
            x = t === h || t === a ? "x" : "y",
            b = t === s || t === u ? c : f;
          function L(c) {
            var f =
                null == i ? (e.ticks ? e.ticks.apply(e, n) : e.domain()) : i,
              L = null == o ? (e.tickFormat ? e.tickFormat.apply(e, n) : r) : o,
              T = Math.max(m, 0) + v,
              P = e.range(),
              M = +P[0] + y,
              C = +P[P.length - 1] + y,
              S = (e.bandwidth ? p : d)(e.copy(), y),
              E = c.selection ? c.selection() : c,
              k = E.selectAll(".domain").data([null]),
              z = E.selectAll(".tick").data(f, e).order(),
              A = z.exit(),
              O = z.enter().append("g").attr("class", "tick"),
              Z = z.select("line"),
              I = z.select("text");
            (k = k.merge(
              k
                .enter()
                .insert("path", ".tick")
                .attr("class", "domain")
                .attr("stroke", "currentColor"),
            )),
              (z = z.merge(O)),
              (Z = Z.merge(
                O.append("line")
                  .attr("stroke", "currentColor")
                  .attr(x + "2", w * m),
              )),
              (I = I.merge(
                O.append("text")
                  .attr("fill", "currentColor")
                  .attr(x, w * T)
                  .attr("dy", t === s ? "0em" : t === u ? "0.71em" : "0.32em"),
              )),
              c !== E &&
                ((k = k.transition(c)),
                (z = z.transition(c)),
                (Z = Z.transition(c)),
                (I = I.transition(c)),
                (A = A.transition(c)
                  .attr("opacity", l)
                  .attr("transform", function (t) {
                    return isFinite((t = S(t)))
                      ? b(t + y)
                      : this.getAttribute("transform");
                  })),
                O.attr("opacity", l).attr("transform", function (t) {
                  var e = this.parentNode.__axis;
                  return b((e && isFinite((e = e(t))) ? e : S(t)) + y);
                })),
              A.remove(),
              k.attr(
                "d",
                t === h || t === a
                  ? g
                    ? "M" + w * g + "," + M + "H" + y + "V" + C + "H" + w * g
                    : "M" + y + "," + M + "V" + C
                  : g
                    ? "M" + M + "," + w * g + "V" + y + "H" + C + "V" + w * g
                    : "M" + M + "," + y + "H" + C,
              ),
              z.attr("opacity", 1).attr("transform", function (t) {
                return b(S(t) + y);
              }),
              Z.attr(x + "2", w * m),
              I.attr(x, w * T).text(L),
              E.filter(_)
                .attr("fill", "none")
                .attr("font-size", 10)
                .attr("font-family", "sans-serif")
                .attr(
                  "text-anchor",
                  t === a ? "start" : t === h ? "end" : "middle",
                ),
              E.each(function () {
                this.__axis = S;
              });
          }
          return (
            (L.scale = function (t) {
              return arguments.length ? ((e = t), L) : e;
            }),
            (L.ticks = function () {
              return (n = Array.from(arguments)), L;
            }),
            (L.tickArguments = function (t) {
              return arguments.length
                ? ((n = null == t ? [] : Array.from(t)), L)
                : n.slice();
            }),
            (L.tickValues = function (t) {
              return arguments.length
                ? ((i = null == t ? null : Array.from(t)), L)
                : i && i.slice();
            }),
            (L.tickFormat = function (t) {
              return arguments.length ? ((o = t), L) : o;
            }),
            (L.tickSize = function (t) {
              return arguments.length ? ((m = g = +t), L) : m;
            }),
            (L.tickSizeInner = function (t) {
              return arguments.length ? ((m = +t), L) : m;
            }),
            (L.tickSizeOuter = function (t) {
              return arguments.length ? ((g = +t), L) : g;
            }),
            (L.tickPadding = function (t) {
              return arguments.length ? ((v = +t), L) : v;
            }),
            (L.offset = function (t) {
              return arguments.length ? ((y = +t), L) : y;
            }),
            L
          );
        }
        function g(t) {
          return m(u, t);
        }
        function v(t) {
          return m(h, t);
        }
        function y() {}
        function w(t) {
          return null == t
            ? y
            : function () {
                return this.querySelector(t);
              };
        }
        function x() {
          return [];
        }
        function b(t) {
          return null == t
            ? x
            : function () {
                return this.querySelectorAll(t);
              };
        }
        function L(t) {
          return function () {
            return this.matches(t);
          };
        }
        function T(t) {
          return function (e) {
            return e.matches(t);
          };
        }
        var P = Array.prototype.find;
        function M() {
          return this.firstElementChild;
        }
        var C = Array.prototype.filter;
        function S() {
          return Array.from(this.children);
        }
        function E(t) {
          return new Array(t.length);
        }
        function k(t, e) {
          (this.ownerDocument = t.ownerDocument),
            (this.namespaceURI = t.namespaceURI),
            (this._next = null),
            (this._parent = t),
            (this.__data__ = e);
        }
        function z(t, e, n, i, o, r) {
          for (var s, a = 0, u = e.length, h = r.length; a < h; ++a)
            (s = e[a])
              ? ((s.__data__ = r[a]), (i[a] = s))
              : (n[a] = new k(t, r[a]));
          for (; a < u; ++a) (s = e[a]) && (o[a] = s);
        }
        function A(t, e, n, i, o, r, s) {
          var a,
            u,
            h,
            l = new Map(),
            c = e.length,
            f = r.length,
            d = new Array(c);
          for (a = 0; a < c; ++a)
            (u = e[a]) &&
              ((d[a] = h = s.call(u, u.__data__, a, e) + ""),
              l.has(h) ? (o[a] = u) : l.set(h, u));
          for (a = 0; a < f; ++a)
            (h = s.call(t, r[a], a, r) + ""),
              (u = l.get(h))
                ? ((i[a] = u), (u.__data__ = r[a]), l.delete(h))
                : (n[a] = new k(t, r[a]));
          for (a = 0; a < c; ++a) (u = e[a]) && l.get(d[a]) === u && (o[a] = u);
        }
        function O(t) {
          return t.__data__;
        }
        function Z(t) {
          return "object" == typeof t && "length" in t ? t : Array.from(t);
        }
        function I(t, e) {
          return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
        }
        k.prototype = {
          constructor: k,
          appendChild: function (t) {
            return this._parent.insertBefore(t, this._next);
          },
          insertBefore: function (t, e) {
            return this._parent.insertBefore(t, e);
          },
          querySelector: function (t) {
            return this._parent.querySelector(t);
          },
          querySelectorAll: function (t) {
            return this._parent.querySelectorAll(t);
          },
        };
        var B = "http://www.w3.org/1999/xhtml";
        const N = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: B,
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        };
        function D(t) {
          var e = (t += ""),
            n = e.indexOf(":");
          return (
            n >= 0 && "xmlns" !== (e = t.slice(0, n)) && (t = t.slice(n + 1)),
            N.hasOwnProperty(e) ? { space: N[e], local: t } : t
          );
        }
        function j(t) {
          return function () {
            this.removeAttribute(t);
          };
        }
        function R(t) {
          return function () {
            this.removeAttributeNS(t.space, t.local);
          };
        }
        function F(t, e) {
          return function () {
            this.setAttribute(t, e);
          };
        }
        function H(t, e) {
          return function () {
            this.setAttributeNS(t.space, t.local, e);
          };
        }
        function U(t, e) {
          return function () {
            var n = e.apply(this, arguments);
            null == n ? this.removeAttribute(t) : this.setAttribute(t, n);
          };
        }
        function $(t, e) {
          return function () {
            var n = e.apply(this, arguments);
            null == n
              ? this.removeAttributeNS(t.space, t.local)
              : this.setAttributeNS(t.space, t.local, n);
          };
        }
        function W(t) {
          return (
            (t.ownerDocument && t.ownerDocument.defaultView) ||
            (t.document && t) ||
            t.defaultView
          );
        }
        function q(t) {
          return function () {
            this.style.removeProperty(t);
          };
        }
        function V(t, e, n) {
          return function () {
            this.style.setProperty(t, e, n);
          };
        }
        function Y(t, e, n) {
          return function () {
            var i = e.apply(this, arguments);
            null == i
              ? this.style.removeProperty(t)
              : this.style.setProperty(t, i, n);
          };
        }
        function G(t, e) {
          return (
            t.style.getPropertyValue(e) ||
            W(t).getComputedStyle(t, null).getPropertyValue(e)
          );
        }
        function X(t) {
          return function () {
            delete this[t];
          };
        }
        function K(t, e) {
          return function () {
            this[t] = e;
          };
        }
        function J(t, e) {
          return function () {
            var n = e.apply(this, arguments);
            null == n ? delete this[t] : (this[t] = n);
          };
        }
        function Q(t) {
          return t.trim().split(/^|\s+/);
        }
        function tt(t) {
          return t.classList || new et(t);
        }
        function et(t) {
          (this._node = t), (this._names = Q(t.getAttribute("class") || ""));
        }
        function nt(t, e) {
          for (var n = tt(t), i = -1, o = e.length; ++i < o; ) n.add(e[i]);
        }
        function it(t, e) {
          for (var n = tt(t), i = -1, o = e.length; ++i < o; ) n.remove(e[i]);
        }
        function ot(t) {
          return function () {
            nt(this, t);
          };
        }
        function rt(t) {
          return function () {
            it(this, t);
          };
        }
        function st(t, e) {
          return function () {
            (e.apply(this, arguments) ? nt : it)(this, t);
          };
        }
        function at() {
          this.textContent = "";
        }
        function ut(t) {
          return function () {
            this.textContent = t;
          };
        }
        function ht(t) {
          return function () {
            var e = t.apply(this, arguments);
            this.textContent = null == e ? "" : e;
          };
        }
        function lt() {
          this.innerHTML = "";
        }
        function ct(t) {
          return function () {
            this.innerHTML = t;
          };
        }
        function ft(t) {
          return function () {
            var e = t.apply(this, arguments);
            this.innerHTML = null == e ? "" : e;
          };
        }
        function dt() {
          this.nextSibling && this.parentNode.appendChild(this);
        }
        function pt() {
          this.previousSibling &&
            this.parentNode.insertBefore(this, this.parentNode.firstChild);
        }
        function _t(t) {
          return function () {
            var e = this.ownerDocument,
              n = this.namespaceURI;
            return n === B && e.documentElement.namespaceURI === B
              ? e.createElement(t)
              : e.createElementNS(n, t);
          };
        }
        function mt(t) {
          return function () {
            return this.ownerDocument.createElementNS(t.space, t.local);
          };
        }
        function gt(t) {
          var e = D(t);
          return (e.local ? mt : _t)(e);
        }
        function vt() {
          return null;
        }
        function yt() {
          var t = this.parentNode;
          t && t.removeChild(this);
        }
        function wt() {
          var t = this.cloneNode(!1),
            e = this.parentNode;
          return e ? e.insertBefore(t, this.nextSibling) : t;
        }
        function xt() {
          var t = this.cloneNode(!0),
            e = this.parentNode;
          return e ? e.insertBefore(t, this.nextSibling) : t;
        }
        function bt(t) {
          return function () {
            var e = this.__on;
            if (e) {
              for (var n, i = 0, o = -1, r = e.length; i < r; ++i)
                (n = e[i]),
                  (t.type && n.type !== t.type) || n.name !== t.name
                    ? (e[++o] = n)
                    : this.removeEventListener(n.type, n.listener, n.options);
              ++o ? (e.length = o) : delete this.__on;
            }
          };
        }
        function Lt(t, e, n) {
          return function () {
            var i,
              o = this.__on,
              r = (function (t) {
                return function (e) {
                  t.call(this, e, this.__data__);
                };
              })(e);
            if (o)
              for (var s = 0, a = o.length; s < a; ++s)
                if ((i = o[s]).type === t.type && i.name === t.name)
                  return (
                    this.removeEventListener(i.type, i.listener, i.options),
                    this.addEventListener(
                      i.type,
                      (i.listener = r),
                      (i.options = n),
                    ),
                    void (i.value = e)
                  );
            this.addEventListener(t.type, r, n),
              (i = {
                type: t.type,
                name: t.name,
                value: e,
                listener: r,
                options: n,
              }),
              o ? o.push(i) : (this.__on = [i]);
          };
        }
        function Tt(t, e, n) {
          var i = W(t),
            o = i.CustomEvent;
          "function" == typeof o
            ? (o = new o(e, n))
            : ((o = i.document.createEvent("Event")),
              n
                ? (o.initEvent(e, n.bubbles, n.cancelable),
                  (o.detail = n.detail))
                : o.initEvent(e, !1, !1)),
            t.dispatchEvent(o);
        }
        function Pt(t, e) {
          return function () {
            return Tt(this, t, e);
          };
        }
        function Mt(t, e) {
          return function () {
            return Tt(this, t, e.apply(this, arguments));
          };
        }
        et.prototype = {
          add: function (t) {
            this._names.indexOf(t) < 0 &&
              (this._names.push(t),
              this._node.setAttribute("class", this._names.join(" ")));
          },
          remove: function (t) {
            var e = this._names.indexOf(t);
            e >= 0 &&
              (this._names.splice(e, 1),
              this._node.setAttribute("class", this._names.join(" ")));
          },
          contains: function (t) {
            return this._names.indexOf(t) >= 0;
          },
        };
        var Ct = [null];
        function St(t, e) {
          (this._groups = t), (this._parents = e);
        }
        function Et() {
          return new St([[document.documentElement]], Ct);
        }
        St.prototype = Et.prototype = {
          constructor: St,
          select: function (t) {
            "function" != typeof t && (t = w(t));
            for (
              var e = this._groups, n = e.length, i = new Array(n), o = 0;
              o < n;
              ++o
            )
              for (
                var r,
                  s,
                  a = e[o],
                  u = a.length,
                  h = (i[o] = new Array(u)),
                  l = 0;
                l < u;
                ++l
              )
                (r = a[l]) &&
                  (s = t.call(r, r.__data__, l, a)) &&
                  ("__data__" in r && (s.__data__ = r.__data__), (h[l] = s));
            return new St(i, this._parents);
          },
          selectAll: function (t) {
            t =
              "function" == typeof t
                ? (function (t) {
                    return function () {
                      return null == (e = t.apply(this, arguments))
                        ? []
                        : Array.isArray(e)
                          ? e
                          : Array.from(e);
                      var e;
                    };
                  })(t)
                : b(t);
            for (
              var e = this._groups, n = e.length, i = [], o = [], r = 0;
              r < n;
              ++r
            )
              for (var s, a = e[r], u = a.length, h = 0; h < u; ++h)
                (s = a[h]) && (i.push(t.call(s, s.__data__, h, a)), o.push(s));
            return new St(i, o);
          },
          selectChild: function (t) {
            return this.select(
              null == t
                ? M
                : (function (t) {
                    return function () {
                      return P.call(this.children, t);
                    };
                  })("function" == typeof t ? t : T(t)),
            );
          },
          selectChildren: function (t) {
            return this.selectAll(
              null == t
                ? S
                : (function (t) {
                    return function () {
                      return C.call(this.children, t);
                    };
                  })("function" == typeof t ? t : T(t)),
            );
          },
          filter: function (t) {
            "function" != typeof t && (t = L(t));
            for (
              var e = this._groups, n = e.length, i = new Array(n), o = 0;
              o < n;
              ++o
            )
              for (
                var r, s = e[o], a = s.length, u = (i[o] = []), h = 0;
                h < a;
                ++h
              )
                (r = s[h]) && t.call(r, r.__data__, h, s) && u.push(r);
            return new St(i, this._parents);
          },
          data: function (t, e) {
            if (!arguments.length) return Array.from(this, O);
            var n,
              i = e ? A : z,
              o = this._parents,
              r = this._groups;
            "function" != typeof t &&
              ((n = t),
              (t = function () {
                return n;
              }));
            for (
              var s = r.length,
                a = new Array(s),
                u = new Array(s),
                h = new Array(s),
                l = 0;
              l < s;
              ++l
            ) {
              var c = o[l],
                f = r[l],
                d = f.length,
                p = Z(t.call(c, c && c.__data__, l, o)),
                _ = p.length,
                m = (u[l] = new Array(_)),
                g = (a[l] = new Array(_));
              i(c, f, m, g, (h[l] = new Array(d)), p, e);
              for (var v, y, w = 0, x = 0; w < _; ++w)
                if ((v = m[w])) {
                  for (w >= x && (x = w + 1); !(y = g[x]) && ++x < _; );
                  v._next = y || null;
                }
            }
            return ((a = new St(a, o))._enter = u), (a._exit = h), a;
          },
          enter: function () {
            return new St(this._enter || this._groups.map(E), this._parents);
          },
          exit: function () {
            return new St(this._exit || this._groups.map(E), this._parents);
          },
          join: function (t, e, n) {
            var i = this.enter(),
              o = this,
              r = this.exit();
            return (
              "function" == typeof t
                ? (i = t(i)) && (i = i.selection())
                : (i = i.append(t + "")),
              null != e && (o = e(o)) && (o = o.selection()),
              null == n ? r.remove() : n(r),
              i && o ? i.merge(o).order() : o
            );
          },
          merge: function (t) {
            for (
              var e = t.selection ? t.selection() : t,
                n = this._groups,
                i = e._groups,
                o = n.length,
                r = i.length,
                s = Math.min(o, r),
                a = new Array(o),
                u = 0;
              u < s;
              ++u
            )
              for (
                var h,
                  l = n[u],
                  c = i[u],
                  f = l.length,
                  d = (a[u] = new Array(f)),
                  p = 0;
                p < f;
                ++p
              )
                (h = l[p] || c[p]) && (d[p] = h);
            for (; u < o; ++u) a[u] = n[u];
            return new St(a, this._parents);
          },
          selection: function () {
            return this;
          },
          order: function () {
            for (var t = this._groups, e = -1, n = t.length; ++e < n; )
              for (var i, o = t[e], r = o.length - 1, s = o[r]; --r >= 0; )
                (i = o[r]) &&
                  (s &&
                    4 ^ i.compareDocumentPosition(s) &&
                    s.parentNode.insertBefore(i, s),
                  (s = i));
            return this;
          },
          sort: function (t) {
            function e(e, n) {
              return e && n ? t(e.__data__, n.__data__) : !e - !n;
            }
            t || (t = I);
            for (
              var n = this._groups, i = n.length, o = new Array(i), r = 0;
              r < i;
              ++r
            ) {
              for (
                var s, a = n[r], u = a.length, h = (o[r] = new Array(u)), l = 0;
                l < u;
                ++l
              )
                (s = a[l]) && (h[l] = s);
              h.sort(e);
            }
            return new St(o, this._parents).order();
          },
          call: function () {
            var t = arguments[0];
            return (arguments[0] = this), t.apply(null, arguments), this;
          },
          nodes: function () {
            return Array.from(this);
          },
          node: function () {
            for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
              for (var i = t[e], o = 0, r = i.length; o < r; ++o) {
                var s = i[o];
                if (s) return s;
              }
            return null;
          },
          size: function () {
            let t = 0;
            for (const e of this) ++t;
            return t;
          },
          empty: function () {
            return !this.node();
          },
          each: function (t) {
            for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
              for (var o, r = e[n], s = 0, a = r.length; s < a; ++s)
                (o = r[s]) && t.call(o, o.__data__, s, r);
            return this;
          },
          attr: function (t, e) {
            var n = D(t);
            if (arguments.length < 2) {
              var i = this.node();
              return n.local
                ? i.getAttributeNS(n.space, n.local)
                : i.getAttribute(n);
            }
            return this.each(
              (null == e
                ? n.local
                  ? R
                  : j
                : "function" == typeof e
                  ? n.local
                    ? $
                    : U
                  : n.local
                    ? H
                    : F)(n, e),
            );
          },
          style: function (t, e, n) {
            return arguments.length > 1
              ? this.each(
                  (null == e ? q : "function" == typeof e ? Y : V)(
                    t,
                    e,
                    null == n ? "" : n,
                  ),
                )
              : G(this.node(), t);
          },
          property: function (t, e) {
            return arguments.length > 1
              ? this.each(
                  (null == e ? X : "function" == typeof e ? J : K)(t, e),
                )
              : this.node()[t];
          },
          classed: function (t, e) {
            var n = Q(t + "");
            if (arguments.length < 2) {
              for (var i = tt(this.node()), o = -1, r = n.length; ++o < r; )
                if (!i.contains(n[o])) return !1;
              return !0;
            }
            return this.each(("function" == typeof e ? st : e ? ot : rt)(n, e));
          },
          text: function (t) {
            return arguments.length
              ? this.each(
                  null == t ? at : ("function" == typeof t ? ht : ut)(t),
                )
              : this.node().textContent;
          },
          html: function (t) {
            return arguments.length
              ? this.each(
                  null == t ? lt : ("function" == typeof t ? ft : ct)(t),
                )
              : this.node().innerHTML;
          },
          raise: function () {
            return this.each(dt);
          },
          lower: function () {
            return this.each(pt);
          },
          append: function (t) {
            var e = "function" == typeof t ? t : gt(t);
            return this.select(function () {
              return this.appendChild(e.apply(this, arguments));
            });
          },
          insert: function (t, e) {
            var n = "function" == typeof t ? t : gt(t),
              i = null == e ? vt : "function" == typeof e ? e : w(e);
            return this.select(function () {
              return this.insertBefore(
                n.apply(this, arguments),
                i.apply(this, arguments) || null,
              );
            });
          },
          remove: function () {
            return this.each(yt);
          },
          clone: function (t) {
            return this.select(t ? xt : wt);
          },
          datum: function (t) {
            return arguments.length
              ? this.property("__data__", t)
              : this.node().__data__;
          },
          on: function (t, e, n) {
            var i,
              o,
              r = (function (t) {
                return t
                  .trim()
                  .split(/^|\s+/)
                  .map(function (t) {
                    var e = "",
                      n = t.indexOf(".");
                    return (
                      n >= 0 && ((e = t.slice(n + 1)), (t = t.slice(0, n))),
                      { type: t, name: e }
                    );
                  });
              })(t + ""),
              s = r.length;
            if (!(arguments.length < 2)) {
              for (a = e ? Lt : bt, i = 0; i < s; ++i) this.each(a(r[i], e, n));
              return this;
            }
            var a = this.node().__on;
            if (a)
              for (var u, h = 0, l = a.length; h < l; ++h)
                for (i = 0, u = a[h]; i < s; ++i)
                  if ((o = r[i]).type === u.type && o.name === u.name)
                    return u.value;
          },
          dispatch: function (t, e) {
            return this.each(("function" == typeof e ? Mt : Pt)(t, e));
          },
          [Symbol.iterator]: function* () {
            for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
              for (var i, o = t[e], r = 0, s = o.length; r < s; ++r)
                (i = o[r]) && (yield i);
          },
        };
        const kt = Et;
        var zt = { value: () => {} };
        function At() {
          for (var t, e = 0, n = arguments.length, i = {}; e < n; ++e) {
            if (!(t = arguments[e] + "") || t in i || /[\s.]/.test(t))
              throw new Error("illegal type: " + t);
            i[t] = [];
          }
          return new Ot(i);
        }
        function Ot(t) {
          this._ = t;
        }
        function Zt(t, e) {
          for (var n, i = 0, o = t.length; i < o; ++i)
            if ((n = t[i]).name === e) return n.value;
        }
        function It(t, e, n) {
          for (var i = 0, o = t.length; i < o; ++i)
            if (t[i].name === e) {
              (t[i] = zt), (t = t.slice(0, i).concat(t.slice(i + 1)));
              break;
            }
          return null != n && t.push({ name: e, value: n }), t;
        }
        Ot.prototype = At.prototype = {
          constructor: Ot,
          on: function (t, e) {
            var n,
              i,
              o = this._,
              r =
                ((i = o),
                (t + "")
                  .trim()
                  .split(/^|\s+/)
                  .map(function (t) {
                    var e = "",
                      n = t.indexOf(".");
                    if (
                      (n >= 0 && ((e = t.slice(n + 1)), (t = t.slice(0, n))),
                      t && !i.hasOwnProperty(t))
                    )
                      throw new Error("unknown type: " + t);
                    return { type: t, name: e };
                  })),
              s = -1,
              a = r.length;
            if (!(arguments.length < 2)) {
              if (null != e && "function" != typeof e)
                throw new Error("invalid callback: " + e);
              for (; ++s < a; )
                if ((n = (t = r[s]).type)) o[n] = It(o[n], t.name, e);
                else if (null == e) for (n in o) o[n] = It(o[n], t.name, null);
              return this;
            }
            for (; ++s < a; )
              if ((n = (t = r[s]).type) && (n = Zt(o[n], t.name))) return n;
          },
          copy: function () {
            var t = {},
              e = this._;
            for (var n in e) t[n] = e[n].slice();
            return new Ot(t);
          },
          call: function (t, e) {
            if ((n = arguments.length - 2) > 0)
              for (var n, i, o = new Array(n), r = 0; r < n; ++r)
                o[r] = arguments[r + 2];
            if (!this._.hasOwnProperty(t))
              throw new Error("unknown type: " + t);
            for (r = 0, n = (i = this._[t]).length; r < n; ++r)
              i[r].value.apply(e, o);
          },
          apply: function (t, e, n) {
            if (!this._.hasOwnProperty(t))
              throw new Error("unknown type: " + t);
            for (var i = this._[t], o = 0, r = i.length; o < r; ++o)
              i[o].value.apply(e, n);
          },
        };
        const Bt = At;
        var Nt,
          Dt,
          jt = 0,
          Rt = 0,
          Ft = 0,
          Ht = 1e3,
          Ut = 0,
          $t = 0,
          Wt = 0,
          qt =
            "object" == typeof performance && performance.now
              ? performance
              : Date,
          Vt =
            "object" == typeof window && window.requestAnimationFrame
              ? window.requestAnimationFrame.bind(window)
              : function (t) {
                  setTimeout(t, 17);
                };
        function Yt() {
          return $t || (Vt(Gt), ($t = qt.now() + Wt));
        }
        function Gt() {
          $t = 0;
        }
        function Xt() {
          this._call = this._time = this._next = null;
        }
        function Kt(t, e, n) {
          var i = new Xt();
          return i.restart(t, e, n), i;
        }
        function Jt() {
          ($t = (Ut = qt.now()) + Wt), (jt = Rt = 0);
          try {
            !(function () {
              Yt(), ++jt;
              for (var t, e = Nt; e; )
                (t = $t - e._time) >= 0 && e._call.call(void 0, t),
                  (e = e._next);
              --jt;
            })();
          } finally {
            (jt = 0),
              (function () {
                for (var t, e, n = Nt, i = 1 / 0; n; )
                  n._call
                    ? (i > n._time && (i = n._time), (t = n), (n = n._next))
                    : ((e = n._next),
                      (n._next = null),
                      (n = t ? (t._next = e) : (Nt = e)));
                (Dt = t), te(i);
              })(),
              ($t = 0);
          }
        }
        function Qt() {
          var t = qt.now(),
            e = t - Ut;
          e > Ht && ((Wt -= e), (Ut = t));
        }
        function te(t) {
          jt ||
            (Rt && (Rt = clearTimeout(Rt)),
            t - $t > 24
              ? (t < 1 / 0 && (Rt = setTimeout(Jt, t - qt.now() - Wt)),
                Ft && (Ft = clearInterval(Ft)))
              : (Ft || ((Ut = qt.now()), (Ft = setInterval(Qt, Ht))),
                (jt = 1),
                Vt(Jt)));
        }
        function ee(t, e, n) {
          var i = new Xt();
          return (
            (e = null == e ? 0 : +e),
            i.restart(
              (n) => {
                i.stop(), t(n + e);
              },
              e,
              n,
            ),
            i
          );
        }
        Xt.prototype = Kt.prototype = {
          constructor: Xt,
          restart: function (t, e, n) {
            if ("function" != typeof t)
              throw new TypeError("callback is not a function");
            (n = (null == n ? Yt() : +n) + (null == e ? 0 : +e)),
              this._next ||
                Dt === this ||
                (Dt ? (Dt._next = this) : (Nt = this), (Dt = this)),
              (this._call = t),
              (this._time = n),
              te();
          },
          stop: function () {
            this._call && ((this._call = null), (this._time = 1 / 0), te());
          },
        };
        var ne = Bt("start", "end", "cancel", "interrupt"),
          ie = [],
          oe = 0,
          re = 3;
        function se(t, e, n, i, o, r) {
          var s = t.__transition;
          if (s) {
            if (n in s) return;
          } else t.__transition = {};
          !(function (t, e, n) {
            var i,
              o = t.__transition;
            function r(u) {
              var h, l, c, f;
              if (1 !== n.state) return a();
              for (h in o)
                if ((f = o[h]).name === n.name) {
                  if (f.state === re) return ee(r);
                  4 === f.state
                    ? ((f.state = 6),
                      f.timer.stop(),
                      f.on.call("interrupt", t, t.__data__, f.index, f.group),
                      delete o[h])
                    : +h < e &&
                      ((f.state = 6),
                      f.timer.stop(),
                      f.on.call("cancel", t, t.__data__, f.index, f.group),
                      delete o[h]);
                }
              if (
                (ee(function () {
                  n.state === re &&
                    ((n.state = 4), n.timer.restart(s, n.delay, n.time), s(u));
                }),
                (n.state = 2),
                n.on.call("start", t, t.__data__, n.index, n.group),
                2 === n.state)
              ) {
                for (
                  n.state = re,
                    i = new Array((c = n.tween.length)),
                    h = 0,
                    l = -1;
                  h < c;
                  ++h
                )
                  (f = n.tween[h].value.call(
                    t,
                    t.__data__,
                    n.index,
                    n.group,
                  )) && (i[++l] = f);
                i.length = l + 1;
              }
            }
            function s(e) {
              for (
                var o =
                    e < n.duration
                      ? n.ease.call(null, e / n.duration)
                      : (n.timer.restart(a), (n.state = 5), 1),
                  r = -1,
                  s = i.length;
                ++r < s;

              )
                i[r].call(t, o);
              5 === n.state &&
                (n.on.call("end", t, t.__data__, n.index, n.group), a());
            }
            function a() {
              for (var i in ((n.state = 6), n.timer.stop(), delete o[e], o))
                return;
              delete t.__transition;
            }
            (o[e] = n),
              (n.timer = Kt(
                function (t) {
                  (n.state = 1),
                    n.timer.restart(r, n.delay, n.time),
                    n.delay <= t && r(t - n.delay);
                },
                0,
                n.time,
              ));
          })(t, n, {
            name: e,
            index: i,
            group: o,
            on: ne,
            tween: ie,
            time: r.time,
            delay: r.delay,
            duration: r.duration,
            ease: r.ease,
            timer: null,
            state: oe,
          });
        }
        function ae(t, e) {
          var n = he(t, e);
          if (n.state > oe) throw new Error("too late; already scheduled");
          return n;
        }
        function ue(t, e) {
          var n = he(t, e);
          if (n.state > re) throw new Error("too late; already running");
          return n;
        }
        function he(t, e) {
          var n = t.__transition;
          if (!n || !(n = n[e])) throw new Error("transition not found");
          return n;
        }
        function le(t, e) {
          return (
            (t = +t),
            (e = +e),
            function (n) {
              return t * (1 - n) + e * n;
            }
          );
        }
        var ce,
          fe = 180 / Math.PI,
          de = {
            translateX: 0,
            translateY: 0,
            rotate: 0,
            skewX: 0,
            scaleX: 1,
            scaleY: 1,
          };
        function pe(t, e, n, i, o, r) {
          var s, a, u;
          return (
            (s = Math.sqrt(t * t + e * e)) && ((t /= s), (e /= s)),
            (u = t * n + e * i) && ((n -= t * u), (i -= e * u)),
            (a = Math.sqrt(n * n + i * i)) && ((n /= a), (i /= a), (u /= a)),
            t * i < e * n && ((t = -t), (e = -e), (u = -u), (s = -s)),
            {
              translateX: o,
              translateY: r,
              rotate: Math.atan2(e, t) * fe,
              skewX: Math.atan(u) * fe,
              scaleX: s,
              scaleY: a,
            }
          );
        }
        function _e(t, e, n, i) {
          function o(t) {
            return t.length ? t.pop() + " " : "";
          }
          return function (r, s) {
            var a = [],
              u = [];
            return (
              (r = t(r)),
              (s = t(s)),
              (function (t, i, o, r, s, a) {
                if (t !== o || i !== r) {
                  var u = s.push("translate(", null, e, null, n);
                  a.push({ i: u - 4, x: le(t, o) }, { i: u - 2, x: le(i, r) });
                } else (o || r) && s.push("translate(" + o + e + r + n);
              })(r.translateX, r.translateY, s.translateX, s.translateY, a, u),
              (function (t, e, n, r) {
                t !== e
                  ? (t - e > 180 ? (e += 360) : e - t > 180 && (t += 360),
                    r.push({
                      i: n.push(o(n) + "rotate(", null, i) - 2,
                      x: le(t, e),
                    }))
                  : e && n.push(o(n) + "rotate(" + e + i);
              })(r.rotate, s.rotate, a, u),
              (function (t, e, n, r) {
                t !== e
                  ? r.push({
                      i: n.push(o(n) + "skewX(", null, i) - 2,
                      x: le(t, e),
                    })
                  : e && n.push(o(n) + "skewX(" + e + i);
              })(r.skewX, s.skewX, a, u),
              (function (t, e, n, i, r, s) {
                if (t !== n || e !== i) {
                  var a = r.push(o(r) + "scale(", null, ",", null, ")");
                  s.push({ i: a - 4, x: le(t, n) }, { i: a - 2, x: le(e, i) });
                } else
                  (1 === n && 1 === i) ||
                    r.push(o(r) + "scale(" + n + "," + i + ")");
              })(r.scaleX, r.scaleY, s.scaleX, s.scaleY, a, u),
              (r = s = null),
              function (t) {
                for (var e, n = -1, i = u.length; ++n < i; )
                  a[(e = u[n]).i] = e.x(t);
                return a.join("");
              }
            );
          };
        }
        var me = _e(
            function (t) {
              const e = new (
                "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
              )(t + "");
              return e.isIdentity ? de : pe(e.a, e.b, e.c, e.d, e.e, e.f);
            },
            "px, ",
            "px)",
            "deg)",
          ),
          ge = _e(
            function (t) {
              return null == t
                ? de
                : (ce ||
                    (ce = document.createElementNS(
                      "http://www.w3.org/2000/svg",
                      "g",
                    )),
                  ce.setAttribute("transform", t),
                  (t = ce.transform.baseVal.consolidate())
                    ? pe((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
                    : de);
            },
            ", ",
            ")",
            ")",
          );
        function ve(t, e) {
          var n, i;
          return function () {
            var o = ue(this, t),
              r = o.tween;
            if (r !== n)
              for (var s = 0, a = (i = n = r).length; s < a; ++s)
                if (i[s].name === e) {
                  (i = i.slice()).splice(s, 1);
                  break;
                }
            o.tween = i;
          };
        }
        function ye(t, e, n) {
          var i, o;
          if ("function" != typeof n) throw new Error();
          return function () {
            var r = ue(this, t),
              s = r.tween;
            if (s !== i) {
              o = (i = s).slice();
              for (
                var a = { name: e, value: n }, u = 0, h = o.length;
                u < h;
                ++u
              )
                if (o[u].name === e) {
                  o[u] = a;
                  break;
                }
              u === h && o.push(a);
            }
            r.tween = o;
          };
        }
        function we(t, e, n) {
          var i = t._id;
          return (
            t.each(function () {
              var t = ue(this, i);
              (t.value || (t.value = {}))[e] = n.apply(this, arguments);
            }),
            function (t) {
              return he(t, i).value[e];
            }
          );
        }
        function xe(t, e, n) {
          (t.prototype = e.prototype = n), (n.constructor = t);
        }
        function be(t, e) {
          var n = Object.create(t.prototype);
          for (var i in e) n[i] = e[i];
          return n;
        }
        function Le() {}
        var Te = 0.7,
          Pe = 1 / Te,
          Me = "\\s*([+-]?\\d+)\\s*",
          Ce = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          Se = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          Ee = /^#([0-9a-f]{3,8})$/,
          ke = new RegExp(`^rgb\\(${Me},${Me},${Me}\\)$`),
          ze = new RegExp(`^rgb\\(${Se},${Se},${Se}\\)$`),
          Ae = new RegExp(`^rgba\\(${Me},${Me},${Me},${Ce}\\)$`),
          Oe = new RegExp(`^rgba\\(${Se},${Se},${Se},${Ce}\\)$`),
          Ze = new RegExp(`^hsl\\(${Ce},${Se},${Se}\\)$`),
          Ie = new RegExp(`^hsla\\(${Ce},${Se},${Se},${Ce}\\)$`),
          Be = {
            aliceblue: 15792383,
            antiquewhite: 16444375,
            aqua: 65535,
            aquamarine: 8388564,
            azure: 15794175,
            beige: 16119260,
            bisque: 16770244,
            black: 0,
            blanchedalmond: 16772045,
            blue: 255,
            blueviolet: 9055202,
            brown: 10824234,
            burlywood: 14596231,
            cadetblue: 6266528,
            chartreuse: 8388352,
            chocolate: 13789470,
            coral: 16744272,
            cornflowerblue: 6591981,
            cornsilk: 16775388,
            crimson: 14423100,
            cyan: 65535,
            darkblue: 139,
            darkcyan: 35723,
            darkgoldenrod: 12092939,
            darkgray: 11119017,
            darkgreen: 25600,
            darkgrey: 11119017,
            darkkhaki: 12433259,
            darkmagenta: 9109643,
            darkolivegreen: 5597999,
            darkorange: 16747520,
            darkorchid: 10040012,
            darkred: 9109504,
            darksalmon: 15308410,
            darkseagreen: 9419919,
            darkslateblue: 4734347,
            darkslategray: 3100495,
            darkslategrey: 3100495,
            darkturquoise: 52945,
            darkviolet: 9699539,
            deeppink: 16716947,
            deepskyblue: 49151,
            dimgray: 6908265,
            dimgrey: 6908265,
            dodgerblue: 2003199,
            firebrick: 11674146,
            floralwhite: 16775920,
            forestgreen: 2263842,
            fuchsia: 16711935,
            gainsboro: 14474460,
            ghostwhite: 16316671,
            gold: 16766720,
            goldenrod: 14329120,
            gray: 8421504,
            green: 32768,
            greenyellow: 11403055,
            grey: 8421504,
            honeydew: 15794160,
            hotpink: 16738740,
            indianred: 13458524,
            indigo: 4915330,
            ivory: 16777200,
            khaki: 15787660,
            lavender: 15132410,
            lavenderblush: 16773365,
            lawngreen: 8190976,
            lemonchiffon: 16775885,
            lightblue: 11393254,
            lightcoral: 15761536,
            lightcyan: 14745599,
            lightgoldenrodyellow: 16448210,
            lightgray: 13882323,
            lightgreen: 9498256,
            lightgrey: 13882323,
            lightpink: 16758465,
            lightsalmon: 16752762,
            lightseagreen: 2142890,
            lightskyblue: 8900346,
            lightslategray: 7833753,
            lightslategrey: 7833753,
            lightsteelblue: 11584734,
            lightyellow: 16777184,
            lime: 65280,
            limegreen: 3329330,
            linen: 16445670,
            magenta: 16711935,
            maroon: 8388608,
            mediumaquamarine: 6737322,
            mediumblue: 205,
            mediumorchid: 12211667,
            mediumpurple: 9662683,
            mediumseagreen: 3978097,
            mediumslateblue: 8087790,
            mediumspringgreen: 64154,
            mediumturquoise: 4772300,
            mediumvioletred: 13047173,
            midnightblue: 1644912,
            mintcream: 16121850,
            mistyrose: 16770273,
            moccasin: 16770229,
            navajowhite: 16768685,
            navy: 128,
            oldlace: 16643558,
            olive: 8421376,
            olivedrab: 7048739,
            orange: 16753920,
            orangered: 16729344,
            orchid: 14315734,
            palegoldenrod: 15657130,
            palegreen: 10025880,
            paleturquoise: 11529966,
            palevioletred: 14381203,
            papayawhip: 16773077,
            peachpuff: 16767673,
            peru: 13468991,
            pink: 16761035,
            plum: 14524637,
            powderblue: 11591910,
            purple: 8388736,
            rebeccapurple: 6697881,
            red: 16711680,
            rosybrown: 12357519,
            royalblue: 4286945,
            saddlebrown: 9127187,
            salmon: 16416882,
            sandybrown: 16032864,
            seagreen: 3050327,
            seashell: 16774638,
            sienna: 10506797,
            silver: 12632256,
            skyblue: 8900331,
            slateblue: 6970061,
            slategray: 7372944,
            slategrey: 7372944,
            snow: 16775930,
            springgreen: 65407,
            steelblue: 4620980,
            tan: 13808780,
            teal: 32896,
            thistle: 14204888,
            tomato: 16737095,
            turquoise: 4251856,
            violet: 15631086,
            wheat: 16113331,
            white: 16777215,
            whitesmoke: 16119285,
            yellow: 16776960,
            yellowgreen: 10145074,
          };
        function Ne() {
          return this.rgb().formatHex();
        }
        function De() {
          return this.rgb().formatRgb();
        }
        function je(t) {
          var e, n;
          return (
            (t = (t + "").trim().toLowerCase()),
            (e = Ee.exec(t))
              ? ((n = e[1].length),
                (e = parseInt(e[1], 16)),
                6 === n
                  ? Re(e)
                  : 3 === n
                    ? new Ue(
                        ((e >> 8) & 15) | ((e >> 4) & 240),
                        ((e >> 4) & 15) | (240 & e),
                        ((15 & e) << 4) | (15 & e),
                        1,
                      )
                    : 8 === n
                      ? Fe(
                          (e >> 24) & 255,
                          (e >> 16) & 255,
                          (e >> 8) & 255,
                          (255 & e) / 255,
                        )
                      : 4 === n
                        ? Fe(
                            ((e >> 12) & 15) | ((e >> 8) & 240),
                            ((e >> 8) & 15) | ((e >> 4) & 240),
                            ((e >> 4) & 15) | (240 & e),
                            (((15 & e) << 4) | (15 & e)) / 255,
                          )
                        : null)
              : (e = ke.exec(t))
                ? new Ue(e[1], e[2], e[3], 1)
                : (e = ze.exec(t))
                  ? new Ue(
                      (255 * e[1]) / 100,
                      (255 * e[2]) / 100,
                      (255 * e[3]) / 100,
                      1,
                    )
                  : (e = Ae.exec(t))
                    ? Fe(e[1], e[2], e[3], e[4])
                    : (e = Oe.exec(t))
                      ? Fe(
                          (255 * e[1]) / 100,
                          (255 * e[2]) / 100,
                          (255 * e[3]) / 100,
                          e[4],
                        )
                      : (e = Ze.exec(t))
                        ? Ge(e[1], e[2] / 100, e[3] / 100, 1)
                        : (e = Ie.exec(t))
                          ? Ge(e[1], e[2] / 100, e[3] / 100, e[4])
                          : Be.hasOwnProperty(t)
                            ? Re(Be[t])
                            : "transparent" === t
                              ? new Ue(NaN, NaN, NaN, 0)
                              : null
          );
        }
        function Re(t) {
          return new Ue((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
        }
        function Fe(t, e, n, i) {
          return i <= 0 && (t = e = n = NaN), new Ue(t, e, n, i);
        }
        function He(t, e, n, i) {
          return 1 === arguments.length
            ? ((o = t) instanceof Le || (o = je(o)),
              o ? new Ue((o = o.rgb()).r, o.g, o.b, o.opacity) : new Ue())
            : new Ue(t, e, n, null == i ? 1 : i);
          var o;
        }
        function Ue(t, e, n, i) {
          (this.r = +t), (this.g = +e), (this.b = +n), (this.opacity = +i);
        }
        function $e() {
          return `#${Ye(this.r)}${Ye(this.g)}${Ye(this.b)}`;
        }
        function We() {
          const t = qe(this.opacity);
          return `${1 === t ? "rgb(" : "rgba("}${Ve(this.r)}, ${Ve(
            this.g,
          )}, ${Ve(this.b)}${1 === t ? ")" : `, ${t})`}`;
        }
        function qe(t) {
          return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
        }
        function Ve(t) {
          return Math.max(0, Math.min(255, Math.round(t) || 0));
        }
        function Ye(t) {
          return ((t = Ve(t)) < 16 ? "0" : "") + t.toString(16);
        }
        function Ge(t, e, n, i) {
          return (
            i <= 0
              ? (t = e = n = NaN)
              : n <= 0 || n >= 1
                ? (t = e = NaN)
                : e <= 0 && (t = NaN),
            new Ke(t, e, n, i)
          );
        }
        function Xe(t) {
          if (t instanceof Ke) return new Ke(t.h, t.s, t.l, t.opacity);
          if ((t instanceof Le || (t = je(t)), !t)) return new Ke();
          if (t instanceof Ke) return t;
          var e = (t = t.rgb()).r / 255,
            n = t.g / 255,
            i = t.b / 255,
            o = Math.min(e, n, i),
            r = Math.max(e, n, i),
            s = NaN,
            a = r - o,
            u = (r + o) / 2;
          return (
            a
              ? ((s =
                  e === r
                    ? (n - i) / a + 6 * (n < i)
                    : n === r
                      ? (i - e) / a + 2
                      : (e - n) / a + 4),
                (a /= u < 0.5 ? r + o : 2 - r - o),
                (s *= 60))
              : (a = u > 0 && u < 1 ? 0 : s),
            new Ke(s, a, u, t.opacity)
          );
        }
        function Ke(t, e, n, i) {
          (this.h = +t), (this.s = +e), (this.l = +n), (this.opacity = +i);
        }
        function Je(t) {
          return (t = (t || 0) % 360) < 0 ? t + 360 : t;
        }
        function Qe(t) {
          return Math.max(0, Math.min(1, t || 0));
        }
        function tn(t, e, n) {
          return (
            255 *
            (t < 60
              ? e + ((n - e) * t) / 60
              : t < 180
                ? n
                : t < 240
                  ? e + ((n - e) * (240 - t)) / 60
                  : e)
          );
        }
        function en(t, e, n, i, o) {
          var r = t * t,
            s = r * t;
          return (
            ((1 - 3 * t + 3 * r - s) * e +
              (4 - 6 * r + 3 * s) * n +
              (1 + 3 * t + 3 * r - 3 * s) * i +
              s * o) /
            6
          );
        }
        xe(Le, je, {
          copy(t) {
            return Object.assign(new this.constructor(), this, t);
          },
          displayable() {
            return this.rgb().displayable();
          },
          hex: Ne,
          formatHex: Ne,
          formatHex8: function () {
            return this.rgb().formatHex8();
          },
          formatHsl: function () {
            return Xe(this).formatHsl();
          },
          formatRgb: De,
          toString: De,
        }),
          xe(
            Ue,
            He,
            be(Le, {
              brighter(t) {
                return (
                  (t = null == t ? Pe : Math.pow(Pe, t)),
                  new Ue(this.r * t, this.g * t, this.b * t, this.opacity)
                );
              },
              darker(t) {
                return (
                  (t = null == t ? Te : Math.pow(Te, t)),
                  new Ue(this.r * t, this.g * t, this.b * t, this.opacity)
                );
              },
              rgb() {
                return this;
              },
              clamp() {
                return new Ue(
                  Ve(this.r),
                  Ve(this.g),
                  Ve(this.b),
                  qe(this.opacity),
                );
              },
              displayable() {
                return (
                  -0.5 <= this.r &&
                  this.r < 255.5 &&
                  -0.5 <= this.g &&
                  this.g < 255.5 &&
                  -0.5 <= this.b &&
                  this.b < 255.5 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              hex: $e,
              formatHex: $e,
              formatHex8: function () {
                return `#${Ye(this.r)}${Ye(this.g)}${Ye(this.b)}${Ye(
                  255 * (isNaN(this.opacity) ? 1 : this.opacity),
                )}`;
              },
              formatRgb: We,
              toString: We,
            }),
          ),
          xe(
            Ke,
            function (t, e, n, i) {
              return 1 === arguments.length
                ? Xe(t)
                : new Ke(t, e, n, null == i ? 1 : i);
            },
            be(Le, {
              brighter(t) {
                return (
                  (t = null == t ? Pe : Math.pow(Pe, t)),
                  new Ke(this.h, this.s, this.l * t, this.opacity)
                );
              },
              darker(t) {
                return (
                  (t = null == t ? Te : Math.pow(Te, t)),
                  new Ke(this.h, this.s, this.l * t, this.opacity)
                );
              },
              rgb() {
                var t = (this.h % 360) + 360 * (this.h < 0),
                  e = isNaN(t) || isNaN(this.s) ? 0 : this.s,
                  n = this.l,
                  i = n + (n < 0.5 ? n : 1 - n) * e,
                  o = 2 * n - i;
                return new Ue(
                  tn(t >= 240 ? t - 240 : t + 120, o, i),
                  tn(t, o, i),
                  tn(t < 120 ? t + 240 : t - 120, o, i),
                  this.opacity,
                );
              },
              clamp() {
                return new Ke(
                  Je(this.h),
                  Qe(this.s),
                  Qe(this.l),
                  qe(this.opacity),
                );
              },
              displayable() {
                return (
                  ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
                  0 <= this.l &&
                  this.l <= 1 &&
                  0 <= this.opacity &&
                  this.opacity <= 1
                );
              },
              formatHsl() {
                const t = qe(this.opacity);
                return `${1 === t ? "hsl(" : "hsla("}${Je(this.h)}, ${
                  100 * Qe(this.s)
                }%, ${100 * Qe(this.l)}%${1 === t ? ")" : `, ${t})`}`;
              },
            }),
          );
        const nn = (t) => () => t;
        function on(t, e) {
          var n = e - t;
          return n
            ? (function (t, e) {
                return function (n) {
                  return t + n * e;
                };
              })(t, n)
            : nn(isNaN(t) ? e : t);
        }
        const rn = (function t(e) {
          var n = (function (t) {
            return 1 == (t = +t)
              ? on
              : function (e, n) {
                  return n - e
                    ? (function (t, e, n) {
                        return (
                          (t = Math.pow(t, n)),
                          (e = Math.pow(e, n) - t),
                          (n = 1 / n),
                          function (i) {
                            return Math.pow(t + i * e, n);
                          }
                        );
                      })(e, n, t)
                    : nn(isNaN(e) ? n : e);
                };
          })(e);
          function i(t, e) {
            var i = n((t = He(t)).r, (e = He(e)).r),
              o = n(t.g, e.g),
              r = n(t.b, e.b),
              s = on(t.opacity, e.opacity);
            return function (e) {
              return (
                (t.r = i(e)),
                (t.g = o(e)),
                (t.b = r(e)),
                (t.opacity = s(e)),
                t + ""
              );
            };
          }
          return (i.gamma = t), i;
        })(1);
        function sn(t) {
          return function (e) {
            var n,
              i,
              o = e.length,
              r = new Array(o),
              s = new Array(o),
              a = new Array(o);
            for (n = 0; n < o; ++n)
              (i = He(e[n])),
                (r[n] = i.r || 0),
                (s[n] = i.g || 0),
                (a[n] = i.b || 0);
            return (
              (r = t(r)),
              (s = t(s)),
              (a = t(a)),
              (i.opacity = 1),
              function (t) {
                return (i.r = r(t)), (i.g = s(t)), (i.b = a(t)), i + "";
              }
            );
          };
        }
        sn(function (t) {
          var e = t.length - 1;
          return function (n) {
            var i =
                n <= 0
                  ? (n = 0)
                  : n >= 1
                    ? ((n = 1), e - 1)
                    : Math.floor(n * e),
              o = t[i],
              r = t[i + 1],
              s = i > 0 ? t[i - 1] : 2 * o - r,
              a = i < e - 1 ? t[i + 2] : 2 * r - o;
            return en((n - i / e) * e, s, o, r, a);
          };
        }),
          sn(function (t) {
            var e = t.length;
            return function (n) {
              var i = Math.floor(((n %= 1) < 0 ? ++n : n) * e),
                o = t[(i + e - 1) % e],
                r = t[i % e],
                s = t[(i + 1) % e],
                a = t[(i + 2) % e];
              return en((n - i / e) * e, o, r, s, a);
            };
          });
        var an = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          un = new RegExp(an.source, "g");
        function hn(t, e) {
          var n,
            i,
            o,
            r = (an.lastIndex = un.lastIndex = 0),
            s = -1,
            a = [],
            u = [];
          for (t += "", e += ""; (n = an.exec(t)) && (i = un.exec(e)); )
            (o = i.index) > r &&
              ((o = e.slice(r, o)), a[s] ? (a[s] += o) : (a[++s] = o)),
              (n = n[0]) === (i = i[0])
                ? a[s]
                  ? (a[s] += i)
                  : (a[++s] = i)
                : ((a[++s] = null), u.push({ i: s, x: le(n, i) })),
              (r = un.lastIndex);
          return (
            r < e.length &&
              ((o = e.slice(r)), a[s] ? (a[s] += o) : (a[++s] = o)),
            a.length < 2
              ? u[0]
                ? (function (t) {
                    return function (e) {
                      return t(e) + "";
                    };
                  })(u[0].x)
                : (function (t) {
                    return function () {
                      return t;
                    };
                  })(e)
              : ((e = u.length),
                function (t) {
                  for (var n, i = 0; i < e; ++i) a[(n = u[i]).i] = n.x(t);
                  return a.join("");
                })
          );
        }
        function ln(t, e) {
          var n;
          return (
            "number" == typeof e
              ? le
              : e instanceof je
                ? rn
                : (n = je(e))
                  ? ((e = n), rn)
                  : hn
          )(t, e);
        }
        function cn(t) {
          return function () {
            this.removeAttribute(t);
          };
        }
        function fn(t) {
          return function () {
            this.removeAttributeNS(t.space, t.local);
          };
        }
        function dn(t, e, n) {
          var i,
            o,
            r = n + "";
          return function () {
            var s = this.getAttribute(t);
            return s === r ? null : s === i ? o : (o = e((i = s), n));
          };
        }
        function pn(t, e, n) {
          var i,
            o,
            r = n + "";
          return function () {
            var s = this.getAttributeNS(t.space, t.local);
            return s === r ? null : s === i ? o : (o = e((i = s), n));
          };
        }
        function _n(t, e, n) {
          var i, o, r;
          return function () {
            var s,
              a,
              u = n(this);
            if (null != u)
              return (s = this.getAttribute(t)) === (a = u + "")
                ? null
                : s === i && a === o
                  ? r
                  : ((o = a), (r = e((i = s), u)));
            this.removeAttribute(t);
          };
        }
        function mn(t, e, n) {
          var i, o, r;
          return function () {
            var s,
              a,
              u = n(this);
            if (null != u)
              return (s = this.getAttributeNS(t.space, t.local)) ===
                (a = u + "")
                ? null
                : s === i && a === o
                  ? r
                  : ((o = a), (r = e((i = s), u)));
            this.removeAttributeNS(t.space, t.local);
          };
        }
        function gn(t, e) {
          var n, i;
          function o() {
            var o = e.apply(this, arguments);
            return (
              o !== i &&
                (n =
                  (i = o) &&
                  (function (t, e) {
                    return function (n) {
                      this.setAttributeNS(t.space, t.local, e.call(this, n));
                    };
                  })(t, o)),
              n
            );
          }
          return (o._value = e), o;
        }
        function vn(t, e) {
          var n, i;
          function o() {
            var o = e.apply(this, arguments);
            return (
              o !== i &&
                (n =
                  (i = o) &&
                  (function (t, e) {
                    return function (n) {
                      this.setAttribute(t, e.call(this, n));
                    };
                  })(t, o)),
              n
            );
          }
          return (o._value = e), o;
        }
        function yn(t, e) {
          return function () {
            ae(this, t).delay = +e.apply(this, arguments);
          };
        }
        function wn(t, e) {
          return (
            (e = +e),
            function () {
              ae(this, t).delay = e;
            }
          );
        }
        function xn(t, e) {
          return function () {
            ue(this, t).duration = +e.apply(this, arguments);
          };
        }
        function bn(t, e) {
          return (
            (e = +e),
            function () {
              ue(this, t).duration = e;
            }
          );
        }
        var Ln = kt.prototype.constructor;
        function Tn(t) {
          return function () {
            this.style.removeProperty(t);
          };
        }
        var Pn = 0;
        function Mn(t, e, n, i) {
          (this._groups = t),
            (this._parents = e),
            (this._name = n),
            (this._id = i);
        }
        function Cn() {
          return ++Pn;
        }
        var Sn = kt.prototype;
        Mn.prototype = function (t) {
          return kt().transition(t);
        }.prototype = {
          constructor: Mn,
          select: function (t) {
            var e = this._name,
              n = this._id;
            "function" != typeof t && (t = w(t));
            for (
              var i = this._groups, o = i.length, r = new Array(o), s = 0;
              s < o;
              ++s
            )
              for (
                var a,
                  u,
                  h = i[s],
                  l = h.length,
                  c = (r[s] = new Array(l)),
                  f = 0;
                f < l;
                ++f
              )
                (a = h[f]) &&
                  (u = t.call(a, a.__data__, f, h)) &&
                  ("__data__" in a && (u.__data__ = a.__data__),
                  (c[f] = u),
                  se(c[f], e, n, f, c, he(a, n)));
            return new Mn(r, this._parents, e, n);
          },
          selectAll: function (t) {
            var e = this._name,
              n = this._id;
            "function" != typeof t && (t = b(t));
            for (
              var i = this._groups, o = i.length, r = [], s = [], a = 0;
              a < o;
              ++a
            )
              for (var u, h = i[a], l = h.length, c = 0; c < l; ++c)
                if ((u = h[c])) {
                  for (
                    var f,
                      d = t.call(u, u.__data__, c, h),
                      p = he(u, n),
                      _ = 0,
                      m = d.length;
                    _ < m;
                    ++_
                  )
                    (f = d[_]) && se(f, e, n, _, d, p);
                  r.push(d), s.push(u);
                }
            return new Mn(r, s, e, n);
          },
          selectChild: Sn.selectChild,
          selectChildren: Sn.selectChildren,
          filter: function (t) {
            "function" != typeof t && (t = L(t));
            for (
              var e = this._groups, n = e.length, i = new Array(n), o = 0;
              o < n;
              ++o
            )
              for (
                var r, s = e[o], a = s.length, u = (i[o] = []), h = 0;
                h < a;
                ++h
              )
                (r = s[h]) && t.call(r, r.__data__, h, s) && u.push(r);
            return new Mn(i, this._parents, this._name, this._id);
          },
          merge: function (t) {
            if (t._id !== this._id) throw new Error();
            for (
              var e = this._groups,
                n = t._groups,
                i = e.length,
                o = n.length,
                r = Math.min(i, o),
                s = new Array(i),
                a = 0;
              a < r;
              ++a
            )
              for (
                var u,
                  h = e[a],
                  l = n[a],
                  c = h.length,
                  f = (s[a] = new Array(c)),
                  d = 0;
                d < c;
                ++d
              )
                (u = h[d] || l[d]) && (f[d] = u);
            for (; a < i; ++a) s[a] = e[a];
            return new Mn(s, this._parents, this._name, this._id);
          },
          selection: function () {
            return new Ln(this._groups, this._parents);
          },
          transition: function () {
            for (
              var t = this._name,
                e = this._id,
                n = Cn(),
                i = this._groups,
                o = i.length,
                r = 0;
              r < o;
              ++r
            )
              for (var s, a = i[r], u = a.length, h = 0; h < u; ++h)
                if ((s = a[h])) {
                  var l = he(s, e);
                  se(s, t, n, h, a, {
                    time: l.time + l.delay + l.duration,
                    delay: 0,
                    duration: l.duration,
                    ease: l.ease,
                  });
                }
            return new Mn(i, this._parents, t, n);
          },
          call: Sn.call,
          nodes: Sn.nodes,
          node: Sn.node,
          size: Sn.size,
          empty: Sn.empty,
          each: Sn.each,
          on: function (t, e) {
            var n = this._id;
            return arguments.length < 2
              ? he(this.node(), n).on.on(t)
              : this.each(
                  (function (t, e, n) {
                    var i,
                      o,
                      r = (function (t) {
                        return (t + "")
                          .trim()
                          .split(/^|\s+/)
                          .every(function (t) {
                            var e = t.indexOf(".");
                            return (
                              e >= 0 && (t = t.slice(0, e)), !t || "start" === t
                            );
                          });
                      })(e)
                        ? ae
                        : ue;
                    return function () {
                      var s = r(this, t),
                        a = s.on;
                      a !== i && (o = (i = a).copy()).on(e, n), (s.on = o);
                    };
                  })(n, t, e),
                );
          },
          attr: function (t, e) {
            var n = D(t),
              i = "transform" === n ? ge : ln;
            return this.attrTween(
              t,
              "function" == typeof e
                ? (n.local ? mn : _n)(n, i, we(this, "attr." + t, e))
                : null == e
                  ? (n.local ? fn : cn)(n)
                  : (n.local ? pn : dn)(n, i, e),
            );
          },
          attrTween: function (t, e) {
            var n = "attr." + t;
            if (arguments.length < 2) return (n = this.tween(n)) && n._value;
            if (null == e) return this.tween(n, null);
            if ("function" != typeof e) throw new Error();
            var i = D(t);
            return this.tween(n, (i.local ? gn : vn)(i, e));
          },
          style: function (t, e, n) {
            var i = "transform" == (t += "") ? me : ln;
            return null == e
              ? this.styleTween(
                  t,
                  (function (t, e) {
                    var n, i, o;
                    return function () {
                      var r = G(this, t),
                        s = (this.style.removeProperty(t), G(this, t));
                      return r === s
                        ? null
                        : r === n && s === i
                          ? o
                          : (o = e((n = r), (i = s)));
                    };
                  })(t, i),
                ).on("end.style." + t, Tn(t))
              : "function" == typeof e
                ? this.styleTween(
                    t,
                    (function (t, e, n) {
                      var i, o, r;
                      return function () {
                        var s = G(this, t),
                          a = n(this),
                          u = a + "";
                        return (
                          null == a &&
                            (this.style.removeProperty(t),
                            (u = a = G(this, t))),
                          s === u
                            ? null
                            : s === i && u === o
                              ? r
                              : ((o = u), (r = e((i = s), a)))
                        );
                      };
                    })(t, i, we(this, "style." + t, e)),
                  ).each(
                    (function (t, e) {
                      var n,
                        i,
                        o,
                        r,
                        s = "style." + e,
                        a = "end." + s;
                      return function () {
                        var u = ue(this, t),
                          h = u.on,
                          l = null == u.value[s] ? r || (r = Tn(e)) : void 0;
                        (h === n && o === l) ||
                          (i = (n = h).copy()).on(a, (o = l)),
                          (u.on = i);
                      };
                    })(this._id, t),
                  )
                : this.styleTween(
                    t,
                    (function (t, e, n) {
                      var i,
                        o,
                        r = n + "";
                      return function () {
                        var s = G(this, t);
                        return s === r
                          ? null
                          : s === i
                            ? o
                            : (o = e((i = s), n));
                      };
                    })(t, i, e),
                    n,
                  ).on("end.style." + t, null);
          },
          styleTween: function (t, e, n) {
            var i = "style." + (t += "");
            if (arguments.length < 2) return (i = this.tween(i)) && i._value;
            if (null == e) return this.tween(i, null);
            if ("function" != typeof e) throw new Error();
            return this.tween(
              i,
              (function (t, e, n) {
                var i, o;
                function r() {
                  var r = e.apply(this, arguments);
                  return (
                    r !== o &&
                      (i =
                        (o = r) &&
                        (function (t, e, n) {
                          return function (i) {
                            this.style.setProperty(t, e.call(this, i), n);
                          };
                        })(t, r, n)),
                    i
                  );
                }
                return (r._value = e), r;
              })(t, e, null == n ? "" : n),
            );
          },
          text: function (t) {
            return this.tween(
              "text",
              "function" == typeof t
                ? (function (t) {
                    return function () {
                      var e = t(this);
                      this.textContent = null == e ? "" : e;
                    };
                  })(we(this, "text", t))
                : (function (t) {
                    return function () {
                      this.textContent = t;
                    };
                  })(null == t ? "" : t + ""),
            );
          },
          textTween: function (t) {
            var e = "text";
            if (arguments.length < 1) return (e = this.tween(e)) && e._value;
            if (null == t) return this.tween(e, null);
            if ("function" != typeof t) throw new Error();
            return this.tween(
              e,
              (function (t) {
                var e, n;
                function i() {
                  var i = t.apply(this, arguments);
                  return (
                    i !== n &&
                      (e =
                        (n = i) &&
                        (function (t) {
                          return function (e) {
                            this.textContent = t.call(this, e);
                          };
                        })(i)),
                    e
                  );
                }
                return (i._value = t), i;
              })(t),
            );
          },
          remove: function () {
            return this.on(
              "end.remove",
              (function (t) {
                return function () {
                  var e = this.parentNode;
                  for (var n in this.__transition) if (+n !== t) return;
                  e && e.removeChild(this);
                };
              })(this._id),
            );
          },
          tween: function (t, e) {
            var n = this._id;
            if (((t += ""), arguments.length < 2)) {
              for (
                var i, o = he(this.node(), n).tween, r = 0, s = o.length;
                r < s;
                ++r
              )
                if ((i = o[r]).name === t) return i.value;
              return null;
            }
            return this.each((null == e ? ve : ye)(n, t, e));
          },
          delay: function (t) {
            var e = this._id;
            return arguments.length
              ? this.each(("function" == typeof t ? yn : wn)(e, t))
              : he(this.node(), e).delay;
          },
          duration: function (t) {
            var e = this._id;
            return arguments.length
              ? this.each(("function" == typeof t ? xn : bn)(e, t))
              : he(this.node(), e).duration;
          },
          ease: function (t) {
            var e = this._id;
            return arguments.length
              ? this.each(
                  (function (t, e) {
                    if ("function" != typeof e) throw new Error();
                    return function () {
                      ue(this, t).ease = e;
                    };
                  })(e, t),
                )
              : he(this.node(), e).ease;
          },
          easeVarying: function (t) {
            if ("function" != typeof t) throw new Error();
            return this.each(
              (function (t, e) {
                return function () {
                  var n = e.apply(this, arguments);
                  if ("function" != typeof n) throw new Error();
                  ue(this, t).ease = n;
                };
              })(this._id, t),
            );
          },
          end: function () {
            var t,
              e,
              n = this,
              i = n._id,
              o = n.size();
            return new Promise(function (r, s) {
              var a = { value: s },
                u = {
                  value: function () {
                    0 == --o && r();
                  },
                };
              n.each(function () {
                var n = ue(this, i),
                  o = n.on;
                o !== t &&
                  ((e = (t = o).copy())._.cancel.push(a),
                  e._.interrupt.push(a),
                  e._.end.push(u)),
                  (n.on = e);
              }),
                0 === o && r();
            });
          },
          [Symbol.iterator]: Sn[Symbol.iterator],
        };
        var En = {
          time: null,
          delay: 0,
          duration: 250,
          ease: function (t) {
            return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
          },
        };
        function kn(t, e) {
          for (var n; !(n = t.__transition) || !(n = n[e]); )
            if (!(t = t.parentNode))
              throw new Error(`transition ${e} not found`);
          return n;
        }
        (kt.prototype.interrupt = function (t) {
          return this.each(function () {
            !(function (t, e) {
              var n,
                i,
                o,
                r = t.__transition,
                s = !0;
              if (r) {
                for (o in ((e = null == e ? null : e + ""), r))
                  (n = r[o]).name === e
                    ? ((i = n.state > 2 && n.state < 5),
                      (n.state = 6),
                      n.timer.stop(),
                      n.on.call(
                        i ? "interrupt" : "cancel",
                        t,
                        t.__data__,
                        n.index,
                        n.group,
                      ),
                      delete r[o])
                    : (s = !1);
                s && delete t.__transition;
              }
            })(this, t);
          });
        }),
          (kt.prototype.transition = function (t) {
            var e, n;
            t instanceof Mn
              ? ((e = t._id), (t = t._name))
              : ((e = Cn()),
                ((n = En).time = Yt()),
                (t = null == t ? null : t + ""));
            for (var i = this._groups, o = i.length, r = 0; r < o; ++r)
              for (var s, a = i[r], u = a.length, h = 0; h < u; ++h)
                (s = a[h]) && se(s, t, e, h, a, n || kn(s, e));
            return new Mn(i, this._parents, t, e);
          });
        const { abs: zn, max: An, min: On } = Math;
        function Zn(t) {
          return { type: t };
        }
        ["w", "e"].map(Zn),
          ["n", "s"].map(Zn),
          ["n", "w", "e", "s", "nw", "ne", "sw", "se"].map(Zn);
        var In = {},
          Bn = {};
        function Nn(t) {
          return new Function(
            "d",
            "return {" +
              t
                .map(function (t, e) {
                  return JSON.stringify(t) + ": d[" + e + '] || ""';
                })
                .join(",") +
              "}",
          );
        }
        function Dn(t) {
          var e = Object.create(null),
            n = [];
          return (
            t.forEach(function (t) {
              for (var i in t) i in e || n.push((e[i] = i));
            }),
            n
          );
        }
        function jn(t, e) {
          var n = t + "",
            i = n.length;
          return i < e ? new Array(e - i + 1).join(0) + n : n;
        }
        function Rn(t) {
          var e = new RegExp('["' + t + "\n\r]"),
            n = t.charCodeAt(0);
          function i(t, e) {
            var i,
              o = [],
              r = t.length,
              s = 0,
              a = 0,
              u = r <= 0,
              h = !1;
            function l() {
              if (u) return Bn;
              if (h) return (h = !1), In;
              var e,
                i,
                o = s;
              if (34 === t.charCodeAt(o)) {
                for (
                  ;
                  (s++ < r && 34 !== t.charCodeAt(s)) ||
                  34 === t.charCodeAt(++s);

                );
                return (
                  (e = s) >= r
                    ? (u = !0)
                    : 10 === (i = t.charCodeAt(s++))
                      ? (h = !0)
                      : 13 === i && ((h = !0), 10 === t.charCodeAt(s) && ++s),
                  t.slice(o + 1, e - 1).replace(/""/g, '"')
                );
              }
              for (; s < r; ) {
                if (10 === (i = t.charCodeAt((e = s++)))) h = !0;
                else if (13 === i) (h = !0), 10 === t.charCodeAt(s) && ++s;
                else if (i !== n) continue;
                return t.slice(o, e);
              }
              return (u = !0), t.slice(o, r);
            }
            for (
              10 === t.charCodeAt(r - 1) && --r,
                13 === t.charCodeAt(r - 1) && --r;
              (i = l()) !== Bn;

            ) {
              for (var c = []; i !== In && i !== Bn; ) c.push(i), (i = l());
              (e && null == (c = e(c, a++))) || o.push(c);
            }
            return o;
          }
          function o(e, n) {
            return e.map(function (e) {
              return n
                .map(function (t) {
                  return s(e[t]);
                })
                .join(t);
            });
          }
          function r(e) {
            return e.map(s).join(t);
          }
          function s(t) {
            return null == t
              ? ""
              : t instanceof Date
                ? (function (t) {
                    var e,
                      n = t.getUTCHours(),
                      i = t.getUTCMinutes(),
                      o = t.getUTCSeconds(),
                      r = t.getUTCMilliseconds();
                    return isNaN(t)
                      ? "Invalid Date"
                      : ((e = t.getUTCFullYear()) < 0
                          ? "-" + jn(-e, 6)
                          : e > 9999
                            ? "+" + jn(e, 6)
                            : jn(e, 4)) +
                          "-" +
                          jn(t.getUTCMonth() + 1, 2) +
                          "-" +
                          jn(t.getUTCDate(), 2) +
                          (r
                            ? "T" +
                              jn(n, 2) +
                              ":" +
                              jn(i, 2) +
                              ":" +
                              jn(o, 2) +
                              "." +
                              jn(r, 3) +
                              "Z"
                            : o
                              ? "T" +
                                jn(n, 2) +
                                ":" +
                                jn(i, 2) +
                                ":" +
                                jn(o, 2) +
                                "Z"
                              : i || n
                                ? "T" + jn(n, 2) + ":" + jn(i, 2) + "Z"
                                : "");
                  })(t)
                : e.test((t += ""))
                  ? '"' + t.replace(/"/g, '""') + '"'
                  : t;
          }
          return {
            parse: function (t, e) {
              var n,
                o,
                r = i(t, function (t, i) {
                  if (n) return n(t, i - 1);
                  (o = t),
                    (n = e
                      ? (function (t, e) {
                          var n = Nn(t);
                          return function (i, o) {
                            return e(n(i), o, t);
                          };
                        })(t, e)
                      : Nn(t));
                });
              return (r.columns = o || []), r;
            },
            parseRows: i,
            format: function (e, n) {
              return (
                null == n && (n = Dn(e)),
                [n.map(s).join(t)].concat(o(e, n)).join("\n")
              );
            },
            formatBody: function (t, e) {
              return null == e && (e = Dn(t)), o(t, e).join("\n");
            },
            formatRows: function (t) {
              return t.map(r).join("\n");
            },
            formatRow: r,
            formatValue: s,
          };
        }
        var Fn = Rn(","),
          Hn = Fn.parse,
          Un =
            (Fn.parseRows,
            Fn.format,
            Fn.formatBody,
            Fn.formatRows,
            Fn.formatRow,
            Fn.formatValue,
            Rn("\t")),
          $n = Un.parse;
        function Wn(t) {
          if (!t.ok) throw new Error(t.status + " " + t.statusText);
          return t.text();
        }
        function qn(t) {
          return function (e, n, i) {
            return (
              2 === arguments.length &&
                "function" == typeof n &&
                ((i = n), (n = void 0)),
              (function (t, e) {
                return fetch(t, e).then(Wn);
              })(e, n).then(function (e) {
                return t(e, i);
              })
            );
          };
        }
        Un.parseRows,
          Un.format,
          Un.formatBody,
          Un.formatRows,
          Un.formatRow,
          Un.formatValue;
        var Vn = qn(Hn);
        qn($n);
        const Yn = Math.sqrt(50),
          Gn = Math.sqrt(10),
          Xn = Math.sqrt(2);
        function Kn(t, e, n) {
          const i = (e - t) / Math.max(0, n),
            o = Math.floor(Math.log10(i)),
            r = i / Math.pow(10, o),
            s = r >= Yn ? 10 : r >= Gn ? 5 : r >= Xn ? 2 : 1;
          let a, u, h;
          return (
            o < 0
              ? ((h = Math.pow(10, -o) / s),
                (a = Math.round(t * h)),
                (u = Math.round(e * h)),
                a / h < t && ++a,
                u / h > e && --u,
                (h = -h))
              : ((h = Math.pow(10, o) * s),
                (a = Math.round(t / h)),
                (u = Math.round(e / h)),
                a * h < t && ++a,
                u * h > e && --u),
            u < a && 0.5 <= n && n < 2 ? Kn(t, e, 2 * n) : [a, u, h]
          );
        }
        function Jn(t, e, n) {
          return Kn((t = +t), (e = +e), (n = +n))[2];
        }
        function Qn(t, e, n) {
          n = +n;
          const i = (e = +e) < (t = +t),
            o = i ? Jn(e, t, n) : Jn(t, e, n);
          return (i ? -1 : 1) * (o < 0 ? 1 / -o : o);
        }
        function ti(t, e) {
          return null == t || null == e
            ? NaN
            : t < e
              ? -1
              : t > e
                ? 1
                : t >= e
                  ? 0
                  : NaN;
        }
        function ei(t, e) {
          return null == t || null == e
            ? NaN
            : e < t
              ? -1
              : e > t
                ? 1
                : e >= t
                  ? 0
                  : NaN;
        }
        function ni(t) {
          let e, n, i;
          function o(t, i, o = 0, r = t.length) {
            if (o < r) {
              if (0 !== e(i, i)) return r;
              do {
                const e = (o + r) >>> 1;
                n(t[e], i) < 0 ? (o = e + 1) : (r = e);
              } while (o < r);
            }
            return o;
          }
          return (
            2 !== t.length
              ? ((e = ti),
                (n = (e, n) => ti(t(e), n)),
                (i = (e, n) => t(e) - n))
              : ((e = t === ti || t === ei ? t : ii), (n = t), (i = t)),
            {
              left: o,
              center: function (t, e, n = 0, r = t.length) {
                const s = o(t, e, n, r - 1);
                return s > n && i(t[s - 1], e) > -i(t[s], e) ? s - 1 : s;
              },
              right: function (t, i, o = 0, r = t.length) {
                if (o < r) {
                  if (0 !== e(i, i)) return r;
                  do {
                    const e = (o + r) >>> 1;
                    n(t[e], i) <= 0 ? (o = e + 1) : (r = e);
                  } while (o < r);
                }
                return o;
              },
            }
          );
        }
        function ii() {
          return 0;
        }
        const oi = ni(ti),
          ri = oi.right,
          si =
            (oi.left,
            ni(function (t) {
              return null === t ? NaN : +t;
            }).center,
            ri);
        function ai(t, e) {
          var n,
            i = e ? e.length : 0,
            o = t ? Math.min(i, t.length) : 0,
            r = new Array(o),
            s = new Array(i);
          for (n = 0; n < o; ++n) r[n] = ci(t[n], e[n]);
          for (; n < i; ++n) s[n] = e[n];
          return function (t) {
            for (n = 0; n < o; ++n) s[n] = r[n](t);
            return s;
          };
        }
        function ui(t, e) {
          var n = new Date();
          return (
            (t = +t),
            (e = +e),
            function (i) {
              return n.setTime(t * (1 - i) + e * i), n;
            }
          );
        }
        function hi(t, e) {
          var n,
            i = {},
            o = {};
          for (n in ((null !== t && "object" == typeof t) || (t = {}),
          (null !== e && "object" == typeof e) || (e = {}),
          e))
            n in t ? (i[n] = ci(t[n], e[n])) : (o[n] = e[n]);
          return function (t) {
            for (n in i) o[n] = i[n](t);
            return o;
          };
        }
        function li(t, e) {
          e || (e = []);
          var n,
            i = t ? Math.min(e.length, t.length) : 0,
            o = e.slice();
          return function (r) {
            for (n = 0; n < i; ++n) o[n] = t[n] * (1 - r) + e[n] * r;
            return o;
          };
        }
        function ci(t, e) {
          var n,
            i,
            o = typeof e;
          return null == e || "boolean" === o
            ? nn(e)
            : ("number" === o
                ? le
                : "string" === o
                  ? (n = je(e))
                    ? ((e = n), rn)
                    : hn
                  : e instanceof je
                    ? rn
                    : e instanceof Date
                      ? ui
                      : ((i = e),
                        !ArrayBuffer.isView(i) || i instanceof DataView
                          ? Array.isArray(e)
                            ? ai
                            : ("function" != typeof e.valueOf &&
                                  "function" != typeof e.toString) ||
                                isNaN(e)
                              ? hi
                              : le
                          : li))(t, e);
        }
        function fi(t, e) {
          return (
            (t = +t),
            (e = +e),
            function (n) {
              return Math.round(t * (1 - n) + e * n);
            }
          );
        }
        function di(t) {
          return +t;
        }
        var pi = [0, 1];
        function _i(t) {
          return t;
        }
        function mi(t, e) {
          return (e -= t = +t)
            ? function (n) {
                return (n - t) / e;
              }
            : ((n = isNaN(e) ? NaN : 0.5),
              function () {
                return n;
              });
          var n;
        }
        function gi(t, e, n) {
          var i = t[0],
            o = t[1],
            r = e[0],
            s = e[1];
          return (
            o < i
              ? ((i = mi(o, i)), (r = n(s, r)))
              : ((i = mi(i, o)), (r = n(r, s))),
            function (t) {
              return r(i(t));
            }
          );
        }
        function vi(t, e, n) {
          var i = Math.min(t.length, e.length) - 1,
            o = new Array(i),
            r = new Array(i),
            s = -1;
          for (
            t[i] < t[0] &&
            ((t = t.slice().reverse()), (e = e.slice().reverse()));
            ++s < i;

          )
            (o[s] = mi(t[s], t[s + 1])), (r[s] = n(e[s], e[s + 1]));
          return function (e) {
            var n = si(t, e, 1, i) - 1;
            return r[n](o[n](e));
          };
        }
        function yi(t, e) {
          return e
            .domain(t.domain())
            .range(t.range())
            .interpolate(t.interpolate())
            .clamp(t.clamp())
            .unknown(t.unknown());
        }
        function wi() {
          return (function () {
            var t,
              e,
              n,
              i,
              o,
              r,
              s = pi,
              a = pi,
              u = ci,
              h = _i;
            function l() {
              var t,
                e,
                n,
                u = Math.min(s.length, a.length);
              return (
                h !== _i &&
                  ((t = s[0]),
                  (e = s[u - 1]),
                  t > e && ((n = t), (t = e), (e = n)),
                  (h = function (n) {
                    return Math.max(t, Math.min(e, n));
                  })),
                (i = u > 2 ? vi : gi),
                (o = r = null),
                c
              );
            }
            function c(e) {
              return null == e || isNaN((e = +e))
                ? n
                : (o || (o = i(s.map(t), a, u)))(t(h(e)));
            }
            return (
              (c.invert = function (n) {
                return h(e((r || (r = i(a, s.map(t), le)))(n)));
              }),
              (c.domain = function (t) {
                return arguments.length
                  ? ((s = Array.from(t, di)), l())
                  : s.slice();
              }),
              (c.range = function (t) {
                return arguments.length
                  ? ((a = Array.from(t)), l())
                  : a.slice();
              }),
              (c.rangeRound = function (t) {
                return (a = Array.from(t)), (u = fi), l();
              }),
              (c.clamp = function (t) {
                return arguments.length ? ((h = !!t || _i), l()) : h !== _i;
              }),
              (c.interpolate = function (t) {
                return arguments.length ? ((u = t), l()) : u;
              }),
              (c.unknown = function (t) {
                return arguments.length ? ((n = t), c) : n;
              }),
              function (n, i) {
                return (t = n), (e = i), l();
              }
            );
          })()(_i, _i);
        }
        function xi(t, e) {
          switch (arguments.length) {
            case 0:
              break;
            case 1:
              this.range(t);
              break;
            default:
              this.range(e).domain(t);
          }
          return this;
        }
        var bi,
          Li =
            /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
        function Ti(t) {
          if (!(e = Li.exec(t))) throw new Error("invalid format: " + t);
          var e;
          return new Pi({
            fill: e[1],
            align: e[2],
            sign: e[3],
            symbol: e[4],
            zero: e[5],
            width: e[6],
            comma: e[7],
            precision: e[8] && e[8].slice(1),
            trim: e[9],
            type: e[10],
          });
        }
        function Pi(t) {
          (this.fill = void 0 === t.fill ? " " : t.fill + ""),
            (this.align = void 0 === t.align ? ">" : t.align + ""),
            (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
            (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
            (this.zero = !!t.zero),
            (this.width = void 0 === t.width ? void 0 : +t.width),
            (this.comma = !!t.comma),
            (this.precision = void 0 === t.precision ? void 0 : +t.precision),
            (this.trim = !!t.trim),
            (this.type = void 0 === t.type ? "" : t.type + "");
        }
        function Mi(t, e) {
          if (
            (n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf(
              "e",
            )) < 0
          )
            return null;
          var n,
            i = t.slice(0, n);
          return [i.length > 1 ? i[0] + i.slice(2) : i, +t.slice(n + 1)];
        }
        function Ci(t) {
          return (t = Mi(Math.abs(t))) ? t[1] : NaN;
        }
        function Si(t, e) {
          var n = Mi(t, e);
          if (!n) return t + "";
          var i = n[0],
            o = n[1];
          return o < 0
            ? "0." + new Array(-o).join("0") + i
            : i.length > o + 1
              ? i.slice(0, o + 1) + "." + i.slice(o + 1)
              : i + new Array(o - i.length + 2).join("0");
        }
        (Ti.prototype = Pi.prototype),
          (Pi.prototype.toString = function () {
            return (
              this.fill +
              this.align +
              this.sign +
              this.symbol +
              (this.zero ? "0" : "") +
              (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
              (this.comma ? "," : "") +
              (void 0 === this.precision
                ? ""
                : "." + Math.max(0, 0 | this.precision)) +
              (this.trim ? "~" : "") +
              this.type
            );
          });
        const Ei = {
          "%": (t, e) => (100 * t).toFixed(e),
          b: (t) => Math.round(t).toString(2),
          c: (t) => t + "",
          d: function (t) {
            return Math.abs((t = Math.round(t))) >= 1e21
              ? t.toLocaleString("en").replace(/,/g, "")
              : t.toString(10);
          },
          e: (t, e) => t.toExponential(e),
          f: (t, e) => t.toFixed(e),
          g: (t, e) => t.toPrecision(e),
          o: (t) => Math.round(t).toString(8),
          p: (t, e) => Si(100 * t, e),
          r: Si,
          s: function (t, e) {
            var n = Mi(t, e);
            if (!n) return t + "";
            var i = n[0],
              o = n[1],
              r =
                o - (bi = 3 * Math.max(-8, Math.min(8, Math.floor(o / 3)))) + 1,
              s = i.length;
            return r === s
              ? i
              : r > s
                ? i + new Array(r - s + 1).join("0")
                : r > 0
                  ? i.slice(0, r) + "." + i.slice(r)
                  : "0." +
                    new Array(1 - r).join("0") +
                    Mi(t, Math.max(0, e + r - 1))[0];
          },
          X: (t) => Math.round(t).toString(16).toUpperCase(),
          x: (t) => Math.round(t).toString(16),
        };
        function ki(t) {
          return t;
        }
        var zi,
          Ai,
          Oi,
          Zi = Array.prototype.map,
          Ii = [
            "y",
            "z",
            "a",
            "f",
            "p",
            "n",
            "µ",
            "m",
            "",
            "k",
            "M",
            "G",
            "T",
            "P",
            "E",
            "Z",
            "Y",
          ];
        function Bi(t) {
          var e = t.domain;
          return (
            (t.ticks = function (t) {
              var n = e();
              return (function (t, e, n) {
                if (!((n = +n) > 0)) return [];
                if ((t = +t) == (e = +e)) return [t];
                const i = e < t,
                  [o, r, s] = i ? Kn(e, t, n) : Kn(t, e, n);
                if (!(r >= o)) return [];
                const a = r - o + 1,
                  u = new Array(a);
                if (i)
                  if (s < 0) for (let t = 0; t < a; ++t) u[t] = (r - t) / -s;
                  else for (let t = 0; t < a; ++t) u[t] = (r - t) * s;
                else if (s < 0) for (let t = 0; t < a; ++t) u[t] = (o + t) / -s;
                else for (let t = 0; t < a; ++t) u[t] = (o + t) * s;
                return u;
              })(n[0], n[n.length - 1], null == t ? 10 : t);
            }),
            (t.tickFormat = function (t, n) {
              var i = e();
              return (function (t, e, n, i) {
                var o,
                  r = Qn(t, e, n);
                switch ((i = Ti(null == i ? ",f" : i)).type) {
                  case "s":
                    var s = Math.max(Math.abs(t), Math.abs(e));
                    return (
                      null != i.precision ||
                        isNaN(
                          (o = (function (t, e) {
                            return Math.max(
                              0,
                              3 *
                                Math.max(
                                  -8,
                                  Math.min(8, Math.floor(Ci(e) / 3)),
                                ) -
                                Ci(Math.abs(t)),
                            );
                          })(r, s)),
                        ) ||
                        (i.precision = o),
                      Oi(i, s)
                    );
                  case "":
                  case "e":
                  case "g":
                  case "p":
                  case "r":
                    null != i.precision ||
                      isNaN(
                        (o = (function (t, e) {
                          return (
                            (t = Math.abs(t)),
                            (e = Math.abs(e) - t),
                            Math.max(0, Ci(e) - Ci(t)) + 1
                          );
                        })(r, Math.max(Math.abs(t), Math.abs(e)))),
                      ) ||
                      (i.precision = o - ("e" === i.type));
                    break;
                  case "f":
                  case "%":
                    null != i.precision ||
                      isNaN(
                        (o = (function (t) {
                          return Math.max(0, -Ci(Math.abs(t)));
                        })(r)),
                      ) ||
                      (i.precision = o - 2 * ("%" === i.type));
                }
                return Ai(i);
              })(i[0], i[i.length - 1], null == t ? 10 : t, n);
            }),
            (t.nice = function (n) {
              null == n && (n = 10);
              var i,
                o,
                r = e(),
                s = 0,
                a = r.length - 1,
                u = r[s],
                h = r[a],
                l = 10;
              for (
                h < u && ((o = u), (u = h), (h = o), (o = s), (s = a), (a = o));
                l-- > 0;

              ) {
                if ((o = Jn(u, h, n)) === i)
                  return (r[s] = u), (r[a] = h), e(r);
                if (o > 0)
                  (u = Math.floor(u / o) * o), (h = Math.ceil(h / o) * o);
                else {
                  if (!(o < 0)) break;
                  (u = Math.ceil(u * o) / o), (h = Math.floor(h * o) / o);
                }
                i = o;
              }
              return t;
            }),
            t
          );
        }
        function Ni() {
          var t = wi();
          return (
            (t.copy = function () {
              return yi(t, Ni());
            }),
            xi.apply(t, arguments),
            Bi(t)
          );
        }
        (zi = (function (t) {
          var e,
            n,
            i =
              void 0 === t.grouping || void 0 === t.thousands
                ? ki
                : ((e = Zi.call(t.grouping, Number)),
                  (n = t.thousands + ""),
                  function (t, i) {
                    for (
                      var o = t.length, r = [], s = 0, a = e[0], u = 0;
                      o > 0 &&
                      a > 0 &&
                      (u + a + 1 > i && (a = Math.max(1, i - u)),
                      r.push(t.substring((o -= a), o + a)),
                      !((u += a + 1) > i));

                    )
                      a = e[(s = (s + 1) % e.length)];
                    return r.reverse().join(n);
                  }),
            o = void 0 === t.currency ? "" : t.currency[0] + "",
            r = void 0 === t.currency ? "" : t.currency[1] + "",
            s = void 0 === t.decimal ? "." : t.decimal + "",
            a =
              void 0 === t.numerals
                ? ki
                : (function (t) {
                    return function (e) {
                      return e.replace(/[0-9]/g, function (e) {
                        return t[+e];
                      });
                    };
                  })(Zi.call(t.numerals, String)),
            u = void 0 === t.percent ? "%" : t.percent + "",
            h = void 0 === t.minus ? "−" : t.minus + "",
            l = void 0 === t.nan ? "NaN" : t.nan + "";
          function c(t) {
            var e = (t = Ti(t)).fill,
              n = t.align,
              c = t.sign,
              f = t.symbol,
              d = t.zero,
              p = t.width,
              _ = t.comma,
              m = t.precision,
              g = t.trim,
              v = t.type;
            "n" === v
              ? ((_ = !0), (v = "g"))
              : Ei[v] || (void 0 === m && (m = 12), (g = !0), (v = "g")),
              (d || ("0" === e && "=" === n)) &&
                ((d = !0), (e = "0"), (n = "="));
            var y =
                "$" === f
                  ? o
                  : "#" === f && /[boxX]/.test(v)
                    ? "0" + v.toLowerCase()
                    : "",
              w = "$" === f ? r : /[%p]/.test(v) ? u : "",
              x = Ei[v],
              b = /[defgprs%]/.test(v);
            function L(t) {
              var o,
                r,
                u,
                f = y,
                L = w;
              if ("c" === v) (L = x(t) + L), (t = "");
              else {
                var T = (t = +t) < 0 || 1 / t < 0;
                if (
                  ((t = isNaN(t) ? l : x(Math.abs(t), m)),
                  g &&
                    (t = (function (t) {
                      t: for (var e, n = t.length, i = 1, o = -1; i < n; ++i)
                        switch (t[i]) {
                          case ".":
                            o = e = i;
                            break;
                          case "0":
                            0 === o && (o = i), (e = i);
                            break;
                          default:
                            if (!+t[i]) break t;
                            o > 0 && (o = 0);
                        }
                      return o > 0 ? t.slice(0, o) + t.slice(e + 1) : t;
                    })(t)),
                  T && 0 == +t && "+" !== c && (T = !1),
                  (f =
                    (T
                      ? "(" === c
                        ? c
                        : h
                      : "-" === c || "(" === c
                        ? ""
                        : c) + f),
                  (L =
                    ("s" === v ? Ii[8 + bi / 3] : "") +
                    L +
                    (T && "(" === c ? ")" : "")),
                  b)
                )
                  for (o = -1, r = t.length; ++o < r; )
                    if (48 > (u = t.charCodeAt(o)) || u > 57) {
                      (L = (46 === u ? s + t.slice(o + 1) : t.slice(o)) + L),
                        (t = t.slice(0, o));
                      break;
                    }
              }
              _ && !d && (t = i(t, 1 / 0));
              var P = f.length + t.length + L.length,
                M = P < p ? new Array(p - P + 1).join(e) : "";
              switch (
                (_ &&
                  d &&
                  ((t = i(M + t, M.length ? p - L.length : 1 / 0)), (M = "")),
                n)
              ) {
                case "<":
                  t = f + t + L + M;
                  break;
                case "=":
                  t = f + M + t + L;
                  break;
                case "^":
                  t = M.slice(0, (P = M.length >> 1)) + f + t + L + M.slice(P);
                  break;
                default:
                  t = M + f + t + L;
              }
              return a(t);
            }
            return (
              (m =
                void 0 === m
                  ? 6
                  : /[gprs]/.test(v)
                    ? Math.max(1, Math.min(21, m))
                    : Math.max(0, Math.min(20, m))),
              (L.toString = function () {
                return t + "";
              }),
              L
            );
          }
          return {
            format: c,
            formatPrefix: function (t, e) {
              var n = c((((t = Ti(t)).type = "f"), t)),
                i = 3 * Math.max(-8, Math.min(8, Math.floor(Ci(e) / 3))),
                o = Math.pow(10, -i),
                r = Ii[8 + i / 3];
              return function (t) {
                return n(o * t) + r;
              };
            },
          };
        })({ thousands: ",", grouping: [3], currency: ["$", ""] })),
          (Ai = zi.format),
          (Oi = zi.formatPrefix);
        class Di extends Map {
          constructor(t, e = Ri) {
            if (
              (super(),
              Object.defineProperties(this, {
                _intern: { value: new Map() },
                _key: { value: e },
              }),
              null != t)
            )
              for (const [e, n] of t) this.set(e, n);
          }
          get(t) {
            return super.get(ji(this, t));
          }
          has(t) {
            return super.has(ji(this, t));
          }
          set(t, e) {
            return super.set(
              (function ({ _intern: t, _key: e }, n) {
                const i = e(n);
                return t.has(i) ? t.get(i) : (t.set(i, n), n);
              })(this, t),
              e,
            );
          }
          delete(t) {
            return super.delete(
              (function ({ _intern: t, _key: e }, n) {
                const i = e(n);
                return t.has(i) && ((n = t.get(i)), t.delete(i)), n;
              })(this, t),
            );
          }
        }
        function ji({ _intern: t, _key: e }, n) {
          const i = e(n);
          return t.has(i) ? t.get(i) : n;
        }
        function Ri(t) {
          return null !== t && "object" == typeof t ? t.valueOf() : t;
        }
        const Fi = Symbol("implicit");
        function Hi() {
          var t = new Di(),
            e = [],
            n = [],
            i = Fi;
          function o(o) {
            let r = t.get(o);
            if (void 0 === r) {
              if (i !== Fi) return i;
              t.set(o, (r = e.push(o) - 1));
            }
            return n[r % n.length];
          }
          return (
            (o.domain = function (n) {
              if (!arguments.length) return e.slice();
              (e = []), (t = new Di());
              for (const i of n) t.has(i) || t.set(i, e.push(i) - 1);
              return o;
            }),
            (o.range = function (t) {
              return arguments.length ? ((n = Array.from(t)), o) : n.slice();
            }),
            (o.unknown = function (t) {
              return arguments.length ? ((i = t), o) : i;
            }),
            (o.copy = function () {
              return Hi(e, n).unknown(i);
            }),
            xi.apply(o, arguments),
            o
          );
        }
        const Ui = 1e3,
          $i = 6e4,
          Wi = 36e5,
          qi = 864e5,
          Vi = 6048e5,
          Yi = 31536e6,
          Gi = new Date(),
          Xi = new Date();
        function Ki(t, e, n, i) {
          function o(e) {
            return (
              t((e = 0 === arguments.length ? new Date() : new Date(+e))), e
            );
          }
          return (
            (o.floor = (e) => (t((e = new Date(+e))), e)),
            (o.ceil = (n) => (t((n = new Date(n - 1))), e(n, 1), t(n), n)),
            (o.round = (t) => {
              const e = o(t),
                n = o.ceil(t);
              return t - e < n - t ? e : n;
            }),
            (o.offset = (t, n) => (
              e((t = new Date(+t)), null == n ? 1 : Math.floor(n)), t
            )),
            (o.range = (n, i, r) => {
              const s = [];
              if (
                ((n = o.ceil(n)),
                (r = null == r ? 1 : Math.floor(r)),
                !(n < i && r > 0))
              )
                return s;
              let a;
              do {
                s.push((a = new Date(+n))), e(n, r), t(n);
              } while (a < n && n < i);
              return s;
            }),
            (o.filter = (n) =>
              Ki(
                (e) => {
                  if (e >= e) for (; t(e), !n(e); ) e.setTime(e - 1);
                },
                (t, i) => {
                  if (t >= t)
                    if (i < 0) for (; ++i <= 0; ) for (; e(t, -1), !n(t); );
                    else for (; --i >= 0; ) for (; e(t, 1), !n(t); );
                },
              )),
            n &&
              ((o.count = (e, i) => (
                Gi.setTime(+e),
                Xi.setTime(+i),
                t(Gi),
                t(Xi),
                Math.floor(n(Gi, Xi))
              )),
              (o.every = (t) => (
                (t = Math.floor(t)),
                isFinite(t) && t > 0
                  ? t > 1
                    ? o.filter(
                        i
                          ? (e) => i(e) % t == 0
                          : (e) => o.count(0, e) % t == 0,
                      )
                    : o
                  : null
              ))),
            o
          );
        }
        const Ji = Ki(
          () => {},
          (t, e) => {
            t.setTime(+t + e);
          },
          (t, e) => e - t,
        );
        (Ji.every = (t) => (
          (t = Math.floor(t)),
          isFinite(t) && t > 0
            ? t > 1
              ? Ki(
                  (e) => {
                    e.setTime(Math.floor(e / t) * t);
                  },
                  (e, n) => {
                    e.setTime(+e + n * t);
                  },
                  (e, n) => (n - e) / t,
                )
              : Ji
            : null
        )),
          Ji.range;
        const Qi = Ki(
            (t) => {
              t.setTime(t - t.getMilliseconds());
            },
            (t, e) => {
              t.setTime(+t + e * Ui);
            },
            (t, e) => (e - t) / Ui,
            (t) => t.getUTCSeconds(),
          ),
          to =
            (Qi.range,
            Ki(
              (t) => {
                t.setTime(t - t.getMilliseconds() - t.getSeconds() * Ui);
              },
              (t, e) => {
                t.setTime(+t + e * $i);
              },
              (t, e) => (e - t) / $i,
              (t) => t.getMinutes(),
            )),
          eo =
            (to.range,
            Ki(
              (t) => {
                t.setUTCSeconds(0, 0);
              },
              (t, e) => {
                t.setTime(+t + e * $i);
              },
              (t, e) => (e - t) / $i,
              (t) => t.getUTCMinutes(),
            )),
          no =
            (eo.range,
            Ki(
              (t) => {
                t.setTime(
                  t -
                    t.getMilliseconds() -
                    t.getSeconds() * Ui -
                    t.getMinutes() * $i,
                );
              },
              (t, e) => {
                t.setTime(+t + e * Wi);
              },
              (t, e) => (e - t) / Wi,
              (t) => t.getHours(),
            )),
          io =
            (no.range,
            Ki(
              (t) => {
                t.setUTCMinutes(0, 0, 0);
              },
              (t, e) => {
                t.setTime(+t + e * Wi);
              },
              (t, e) => (e - t) / Wi,
              (t) => t.getUTCHours(),
            )),
          oo =
            (io.range,
            Ki(
              (t) => t.setHours(0, 0, 0, 0),
              (t, e) => t.setDate(t.getDate() + e),
              (t, e) =>
                (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * $i) /
                qi,
              (t) => t.getDate() - 1,
            )),
          ro =
            (oo.range,
            Ki(
              (t) => {
                t.setUTCHours(0, 0, 0, 0);
              },
              (t, e) => {
                t.setUTCDate(t.getUTCDate() + e);
              },
              (t, e) => (e - t) / qi,
              (t) => t.getUTCDate() - 1,
            )),
          so =
            (ro.range,
            Ki(
              (t) => {
                t.setUTCHours(0, 0, 0, 0);
              },
              (t, e) => {
                t.setUTCDate(t.getUTCDate() + e);
              },
              (t, e) => (e - t) / qi,
              (t) => Math.floor(t / qi),
            ));
        function ao(t) {
          return Ki(
            (e) => {
              e.setDate(e.getDate() - ((e.getDay() + 7 - t) % 7)),
                e.setHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setDate(t.getDate() + 7 * e);
            },
            (t, e) =>
              (e - t - (e.getTimezoneOffset() - t.getTimezoneOffset()) * $i) /
              Vi,
          );
        }
        so.range;
        const uo = ao(0),
          ho = ao(1),
          lo = ao(2),
          co = ao(3),
          fo = ao(4),
          po = ao(5),
          _o = ao(6);
        function mo(t) {
          return Ki(
            (e) => {
              e.setUTCDate(e.getUTCDate() - ((e.getUTCDay() + 7 - t) % 7)),
                e.setUTCHours(0, 0, 0, 0);
            },
            (t, e) => {
              t.setUTCDate(t.getUTCDate() + 7 * e);
            },
            (t, e) => (e - t) / Vi,
          );
        }
        uo.range, ho.range, lo.range, co.range, fo.range, po.range, _o.range;
        const go = mo(0),
          vo = mo(1),
          yo = mo(2),
          wo = mo(3),
          xo = mo(4),
          bo = mo(5),
          Lo = mo(6),
          To =
            (go.range,
            vo.range,
            yo.range,
            wo.range,
            xo.range,
            bo.range,
            Lo.range,
            Ki(
              (t) => {
                t.setDate(1), t.setHours(0, 0, 0, 0);
              },
              (t, e) => {
                t.setMonth(t.getMonth() + e);
              },
              (t, e) =>
                e.getMonth() -
                t.getMonth() +
                12 * (e.getFullYear() - t.getFullYear()),
              (t) => t.getMonth(),
            )),
          Po =
            (To.range,
            Ki(
              (t) => {
                t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
              },
              (t, e) => {
                t.setUTCMonth(t.getUTCMonth() + e);
              },
              (t, e) =>
                e.getUTCMonth() -
                t.getUTCMonth() +
                12 * (e.getUTCFullYear() - t.getUTCFullYear()),
              (t) => t.getUTCMonth(),
            )),
          Mo =
            (Po.range,
            Ki(
              (t) => {
                t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
              },
              (t, e) => {
                t.setFullYear(t.getFullYear() + e);
              },
              (t, e) => e.getFullYear() - t.getFullYear(),
              (t) => t.getFullYear(),
            ));
        (Mo.every = (t) =>
          isFinite((t = Math.floor(t))) && t > 0
            ? Ki(
                (e) => {
                  e.setFullYear(Math.floor(e.getFullYear() / t) * t),
                    e.setMonth(0, 1),
                    e.setHours(0, 0, 0, 0);
                },
                (e, n) => {
                  e.setFullYear(e.getFullYear() + n * t);
                },
              )
            : null),
          Mo.range;
        const Co = Ki(
          (t) => {
            t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
          },
          (t, e) => {
            t.setUTCFullYear(t.getUTCFullYear() + e);
          },
          (t, e) => e.getUTCFullYear() - t.getUTCFullYear(),
          (t) => t.getUTCFullYear(),
        );
        function So(t, e, n, i, o, r) {
          const s = [
            [Qi, 1, Ui],
            [Qi, 5, 5e3],
            [Qi, 15, 15e3],
            [Qi, 30, 3e4],
            [r, 1, $i],
            [r, 5, 3e5],
            [r, 15, 9e5],
            [r, 30, 18e5],
            [o, 1, Wi],
            [o, 3, 108e5],
            [o, 6, 216e5],
            [o, 12, 432e5],
            [i, 1, qi],
            [i, 2, 1728e5],
            [n, 1, Vi],
            [e, 1, 2592e6],
            [e, 3, 7776e6],
            [t, 1, Yi],
          ];
          function a(e, n, i) {
            const o = Math.abs(n - e) / i,
              r = ni(([, , t]) => t).right(s, o);
            if (r === s.length) return t.every(Qn(e / Yi, n / Yi, i));
            if (0 === r) return Ji.every(Math.max(Qn(e, n, i), 1));
            const [a, u] = s[o / s[r - 1][2] < s[r][2] / o ? r - 1 : r];
            return a.every(u);
          }
          return [
            function (t, e, n) {
              const i = e < t;
              i && ([t, e] = [e, t]);
              const o = n && "function" == typeof n.range ? n : a(t, e, n),
                r = o ? o.range(t, +e + 1) : [];
              return i ? r.reverse() : r;
            },
            a,
          ];
        }
        (Co.every = (t) =>
          isFinite((t = Math.floor(t))) && t > 0
            ? Ki(
                (e) => {
                  e.setUTCFullYear(Math.floor(e.getUTCFullYear() / t) * t),
                    e.setUTCMonth(0, 1),
                    e.setUTCHours(0, 0, 0, 0);
                },
                (e, n) => {
                  e.setUTCFullYear(e.getUTCFullYear() + n * t);
                },
              )
            : null),
          Co.range;
        const [Eo, ko] = So(Co, Po, go, so, io, eo),
          [zo, Ao] = So(Mo, To, uo, oo, no, to);
        function Oo(t) {
          if (0 <= t.y && t.y < 100) {
            var e = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
            return e.setFullYear(t.y), e;
          }
          return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
        }
        function Zo(t) {
          if (0 <= t.y && t.y < 100) {
            var e = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
            return e.setUTCFullYear(t.y), e;
          }
          return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
        }
        function Io(t, e, n) {
          return { y: t, m: e, d: n, H: 0, M: 0, S: 0, L: 0 };
        }
        var Bo,
          No,
          Do,
          jo = { "-": "", _: " ", 0: "0" },
          Ro = /^\s*\d+/,
          Fo = /^%/,
          Ho = /[\\^$*+?|[\]().{}]/g;
        function Uo(t, e, n) {
          var i = t < 0 ? "-" : "",
            o = (i ? -t : t) + "",
            r = o.length;
          return i + (r < n ? new Array(n - r + 1).join(e) + o : o);
        }
        function $o(t) {
          return t.replace(Ho, "\\$&");
        }
        function Wo(t) {
          return new RegExp("^(?:" + t.map($o).join("|") + ")", "i");
        }
        function qo(t) {
          return new Map(t.map((t, e) => [t.toLowerCase(), e]));
        }
        function Vo(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 1));
          return i ? ((t.w = +i[0]), n + i[0].length) : -1;
        }
        function Yo(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 1));
          return i ? ((t.u = +i[0]), n + i[0].length) : -1;
        }
        function Go(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 2));
          return i ? ((t.U = +i[0]), n + i[0].length) : -1;
        }
        function Xo(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 2));
          return i ? ((t.V = +i[0]), n + i[0].length) : -1;
        }
        function Ko(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 2));
          return i ? ((t.W = +i[0]), n + i[0].length) : -1;
        }
        function Jo(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 4));
          return i ? ((t.y = +i[0]), n + i[0].length) : -1;
        }
        function Qo(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 2));
          return i
            ? ((t.y = +i[0] + (+i[0] > 68 ? 1900 : 2e3)), n + i[0].length)
            : -1;
        }
        function tr(t, e, n) {
          var i = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n, n + 6));
          return i
            ? ((t.Z = i[1] ? 0 : -(i[2] + (i[3] || "00"))), n + i[0].length)
            : -1;
        }
        function er(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 1));
          return i ? ((t.q = 3 * i[0] - 3), n + i[0].length) : -1;
        }
        function nr(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 2));
          return i ? ((t.m = i[0] - 1), n + i[0].length) : -1;
        }
        function ir(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 2));
          return i ? ((t.d = +i[0]), n + i[0].length) : -1;
        }
        function or(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 3));
          return i ? ((t.m = 0), (t.d = +i[0]), n + i[0].length) : -1;
        }
        function rr(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 2));
          return i ? ((t.H = +i[0]), n + i[0].length) : -1;
        }
        function sr(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 2));
          return i ? ((t.M = +i[0]), n + i[0].length) : -1;
        }
        function ar(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 2));
          return i ? ((t.S = +i[0]), n + i[0].length) : -1;
        }
        function ur(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 3));
          return i ? ((t.L = +i[0]), n + i[0].length) : -1;
        }
        function hr(t, e, n) {
          var i = Ro.exec(e.slice(n, n + 6));
          return i ? ((t.L = Math.floor(i[0] / 1e3)), n + i[0].length) : -1;
        }
        function lr(t, e, n) {
          var i = Fo.exec(e.slice(n, n + 1));
          return i ? n + i[0].length : -1;
        }
        function cr(t, e, n) {
          var i = Ro.exec(e.slice(n));
          return i ? ((t.Q = +i[0]), n + i[0].length) : -1;
        }
        function fr(t, e, n) {
          var i = Ro.exec(e.slice(n));
          return i ? ((t.s = +i[0]), n + i[0].length) : -1;
        }
        function dr(t, e) {
          return Uo(t.getDate(), e, 2);
        }
        function pr(t, e) {
          return Uo(t.getHours(), e, 2);
        }
        function _r(t, e) {
          return Uo(t.getHours() % 12 || 12, e, 2);
        }
        function mr(t, e) {
          return Uo(1 + oo.count(Mo(t), t), e, 3);
        }
        function gr(t, e) {
          return Uo(t.getMilliseconds(), e, 3);
        }
        function vr(t, e) {
          return gr(t, e) + "000";
        }
        function yr(t, e) {
          return Uo(t.getMonth() + 1, e, 2);
        }
        function wr(t, e) {
          return Uo(t.getMinutes(), e, 2);
        }
        function xr(t, e) {
          return Uo(t.getSeconds(), e, 2);
        }
        function br(t) {
          var e = t.getDay();
          return 0 === e ? 7 : e;
        }
        function Lr(t, e) {
          return Uo(uo.count(Mo(t) - 1, t), e, 2);
        }
        function Tr(t) {
          var e = t.getDay();
          return e >= 4 || 0 === e ? fo(t) : fo.ceil(t);
        }
        function Pr(t, e) {
          return (
            (t = Tr(t)), Uo(fo.count(Mo(t), t) + (4 === Mo(t).getDay()), e, 2)
          );
        }
        function Mr(t) {
          return t.getDay();
        }
        function Cr(t, e) {
          return Uo(ho.count(Mo(t) - 1, t), e, 2);
        }
        function Sr(t, e) {
          return Uo(t.getFullYear() % 100, e, 2);
        }
        function Er(t, e) {
          return Uo((t = Tr(t)).getFullYear() % 100, e, 2);
        }
        function kr(t, e) {
          return Uo(t.getFullYear() % 1e4, e, 4);
        }
        function zr(t, e) {
          var n = t.getDay();
          return Uo(
            (t = n >= 4 || 0 === n ? fo(t) : fo.ceil(t)).getFullYear() % 1e4,
            e,
            4,
          );
        }
        function Ar(t) {
          var e = t.getTimezoneOffset();
          return (
            (e > 0 ? "-" : ((e *= -1), "+")) +
            Uo((e / 60) | 0, "0", 2) +
            Uo(e % 60, "0", 2)
          );
        }
        function Or(t, e) {
          return Uo(t.getUTCDate(), e, 2);
        }
        function Zr(t, e) {
          return Uo(t.getUTCHours(), e, 2);
        }
        function Ir(t, e) {
          return Uo(t.getUTCHours() % 12 || 12, e, 2);
        }
        function Br(t, e) {
          return Uo(1 + ro.count(Co(t), t), e, 3);
        }
        function Nr(t, e) {
          return Uo(t.getUTCMilliseconds(), e, 3);
        }
        function Dr(t, e) {
          return Nr(t, e) + "000";
        }
        function jr(t, e) {
          return Uo(t.getUTCMonth() + 1, e, 2);
        }
        function Rr(t, e) {
          return Uo(t.getUTCMinutes(), e, 2);
        }
        function Fr(t, e) {
          return Uo(t.getUTCSeconds(), e, 2);
        }
        function Hr(t) {
          var e = t.getUTCDay();
          return 0 === e ? 7 : e;
        }
        function Ur(t, e) {
          return Uo(go.count(Co(t) - 1, t), e, 2);
        }
        function $r(t) {
          var e = t.getUTCDay();
          return e >= 4 || 0 === e ? xo(t) : xo.ceil(t);
        }
        function Wr(t, e) {
          return (
            (t = $r(t)),
            Uo(xo.count(Co(t), t) + (4 === Co(t).getUTCDay()), e, 2)
          );
        }
        function qr(t) {
          return t.getUTCDay();
        }
        function Vr(t, e) {
          return Uo(vo.count(Co(t) - 1, t), e, 2);
        }
        function Yr(t, e) {
          return Uo(t.getUTCFullYear() % 100, e, 2);
        }
        function Gr(t, e) {
          return Uo((t = $r(t)).getUTCFullYear() % 100, e, 2);
        }
        function Xr(t, e) {
          return Uo(t.getUTCFullYear() % 1e4, e, 4);
        }
        function Kr(t, e) {
          var n = t.getUTCDay();
          return Uo(
            (t = n >= 4 || 0 === n ? xo(t) : xo.ceil(t)).getUTCFullYear() % 1e4,
            e,
            4,
          );
        }
        function Jr() {
          return "+0000";
        }
        function Qr() {
          return "%";
        }
        function ts(t) {
          return +t;
        }
        function es(t) {
          return Math.floor(+t / 1e3);
        }
        function ns(t) {
          return new Date(t);
        }
        function is(t) {
          return t instanceof Date ? +t : +new Date(+t);
        }
        function os(t, e, n, i, o, r, s, a, u, h) {
          var l = wi(),
            c = l.invert,
            f = l.domain,
            d = h(".%L"),
            p = h(":%S"),
            _ = h("%I:%M"),
            m = h("%I %p"),
            g = h("%a %d"),
            v = h("%b %d"),
            y = h("%B"),
            w = h("%Y");
          function x(t) {
            return (
              u(t) < t
                ? d
                : a(t) < t
                  ? p
                  : s(t) < t
                    ? _
                    : r(t) < t
                      ? m
                      : i(t) < t
                        ? o(t) < t
                          ? g
                          : v
                        : n(t) < t
                          ? y
                          : w
            )(t);
          }
          return (
            (l.invert = function (t) {
              return new Date(c(t));
            }),
            (l.domain = function (t) {
              return arguments.length ? f(Array.from(t, is)) : f().map(ns);
            }),
            (l.ticks = function (e) {
              var n = f();
              return t(n[0], n[n.length - 1], null == e ? 10 : e);
            }),
            (l.tickFormat = function (t, e) {
              return null == e ? x : h(e);
            }),
            (l.nice = function (t) {
              var n = f();
              return (
                (t && "function" == typeof t.range) ||
                  (t = e(n[0], n[n.length - 1], null == t ? 10 : t)),
                t
                  ? f(
                      (function (t, e) {
                        var n,
                          i = 0,
                          o = (t = t.slice()).length - 1,
                          r = t[i],
                          s = t[o];
                        return (
                          s < r &&
                            ((n = i),
                            (i = o),
                            (o = n),
                            (n = r),
                            (r = s),
                            (s = n)),
                          (t[i] = e.floor(r)),
                          (t[o] = e.ceil(s)),
                          t
                        );
                      })(n, t),
                    )
                  : l
              );
            }),
            (l.copy = function () {
              return yi(l, os(t, e, n, i, o, r, s, a, u, h));
            }),
            l
          );
        }
        function rs() {
          return xi.apply(
            os(zo, Ao, Mo, To, uo, oo, no, to, Qi, No).domain([
              new Date(2e3, 0, 1),
              new Date(2e3, 0, 2),
            ]),
            arguments,
          );
        }
        function ss(t) {
          return "string" == typeof t
            ? new St([[document.querySelector(t)]], [document.documentElement])
            : new St([[t]], Ct);
        }
        function as(t) {
          return function () {
            return t;
          };
        }
        function us(t) {
          this._context = t;
        }
        function hs(t) {
          return new us(t);
        }
        (Bo = (function (t) {
          var e = t.dateTime,
            n = t.date,
            i = t.time,
            o = t.periods,
            r = t.days,
            s = t.shortDays,
            a = t.months,
            u = t.shortMonths,
            h = Wo(o),
            l = qo(o),
            c = Wo(r),
            f = qo(r),
            d = Wo(s),
            p = qo(s),
            _ = Wo(a),
            m = qo(a),
            g = Wo(u),
            v = qo(u),
            y = {
              a: function (t) {
                return s[t.getDay()];
              },
              A: function (t) {
                return r[t.getDay()];
              },
              b: function (t) {
                return u[t.getMonth()];
              },
              B: function (t) {
                return a[t.getMonth()];
              },
              c: null,
              d: dr,
              e: dr,
              f: vr,
              g: Er,
              G: zr,
              H: pr,
              I: _r,
              j: mr,
              L: gr,
              m: yr,
              M: wr,
              p: function (t) {
                return o[+(t.getHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getMonth() / 3);
              },
              Q: ts,
              s: es,
              S: xr,
              u: br,
              U: Lr,
              V: Pr,
              w: Mr,
              W: Cr,
              x: null,
              X: null,
              y: Sr,
              Y: kr,
              Z: Ar,
              "%": Qr,
            },
            w = {
              a: function (t) {
                return s[t.getUTCDay()];
              },
              A: function (t) {
                return r[t.getUTCDay()];
              },
              b: function (t) {
                return u[t.getUTCMonth()];
              },
              B: function (t) {
                return a[t.getUTCMonth()];
              },
              c: null,
              d: Or,
              e: Or,
              f: Dr,
              g: Gr,
              G: Kr,
              H: Zr,
              I: Ir,
              j: Br,
              L: Nr,
              m: jr,
              M: Rr,
              p: function (t) {
                return o[+(t.getUTCHours() >= 12)];
              },
              q: function (t) {
                return 1 + ~~(t.getUTCMonth() / 3);
              },
              Q: ts,
              s: es,
              S: Fr,
              u: Hr,
              U: Ur,
              V: Wr,
              w: qr,
              W: Vr,
              x: null,
              X: null,
              y: Yr,
              Y: Xr,
              Z: Jr,
              "%": Qr,
            },
            x = {
              a: function (t, e, n) {
                var i = d.exec(e.slice(n));
                return i
                  ? ((t.w = p.get(i[0].toLowerCase())), n + i[0].length)
                  : -1;
              },
              A: function (t, e, n) {
                var i = c.exec(e.slice(n));
                return i
                  ? ((t.w = f.get(i[0].toLowerCase())), n + i[0].length)
                  : -1;
              },
              b: function (t, e, n) {
                var i = g.exec(e.slice(n));
                return i
                  ? ((t.m = v.get(i[0].toLowerCase())), n + i[0].length)
                  : -1;
              },
              B: function (t, e, n) {
                var i = _.exec(e.slice(n));
                return i
                  ? ((t.m = m.get(i[0].toLowerCase())), n + i[0].length)
                  : -1;
              },
              c: function (t, n, i) {
                return T(t, e, n, i);
              },
              d: ir,
              e: ir,
              f: hr,
              g: Qo,
              G: Jo,
              H: rr,
              I: rr,
              j: or,
              L: ur,
              m: nr,
              M: sr,
              p: function (t, e, n) {
                var i = h.exec(e.slice(n));
                return i
                  ? ((t.p = l.get(i[0].toLowerCase())), n + i[0].length)
                  : -1;
              },
              q: er,
              Q: cr,
              s: fr,
              S: ar,
              u: Yo,
              U: Go,
              V: Xo,
              w: Vo,
              W: Ko,
              x: function (t, e, i) {
                return T(t, n, e, i);
              },
              X: function (t, e, n) {
                return T(t, i, e, n);
              },
              y: Qo,
              Y: Jo,
              Z: tr,
              "%": lr,
            };
          function b(t, e) {
            return function (n) {
              var i,
                o,
                r,
                s = [],
                a = -1,
                u = 0,
                h = t.length;
              for (n instanceof Date || (n = new Date(+n)); ++a < h; )
                37 === t.charCodeAt(a) &&
                  (s.push(t.slice(u, a)),
                  null != (o = jo[(i = t.charAt(++a))])
                    ? (i = t.charAt(++a))
                    : (o = "e" === i ? " " : "0"),
                  (r = e[i]) && (i = r(n, o)),
                  s.push(i),
                  (u = a + 1));
              return s.push(t.slice(u, a)), s.join("");
            };
          }
          function L(t, e) {
            return function (n) {
              var i,
                o,
                r = Io(1900, void 0, 1);
              if (T(r, t, (n += ""), 0) != n.length) return null;
              if ("Q" in r) return new Date(r.Q);
              if ("s" in r) return new Date(1e3 * r.s + ("L" in r ? r.L : 0));
              if (
                (e && !("Z" in r) && (r.Z = 0),
                "p" in r && (r.H = (r.H % 12) + 12 * r.p),
                void 0 === r.m && (r.m = "q" in r ? r.q : 0),
                "V" in r)
              ) {
                if (r.V < 1 || r.V > 53) return null;
                "w" in r || (r.w = 1),
                  "Z" in r
                    ? ((o = (i = Zo(Io(r.y, 0, 1))).getUTCDay()),
                      (i = o > 4 || 0 === o ? vo.ceil(i) : vo(i)),
                      (i = ro.offset(i, 7 * (r.V - 1))),
                      (r.y = i.getUTCFullYear()),
                      (r.m = i.getUTCMonth()),
                      (r.d = i.getUTCDate() + ((r.w + 6) % 7)))
                    : ((o = (i = Oo(Io(r.y, 0, 1))).getDay()),
                      (i = o > 4 || 0 === o ? ho.ceil(i) : ho(i)),
                      (i = oo.offset(i, 7 * (r.V - 1))),
                      (r.y = i.getFullYear()),
                      (r.m = i.getMonth()),
                      (r.d = i.getDate() + ((r.w + 6) % 7)));
              } else
                ("W" in r || "U" in r) &&
                  ("w" in r || (r.w = "u" in r ? r.u % 7 : "W" in r ? 1 : 0),
                  (o =
                    "Z" in r
                      ? Zo(Io(r.y, 0, 1)).getUTCDay()
                      : Oo(Io(r.y, 0, 1)).getDay()),
                  (r.m = 0),
                  (r.d =
                    "W" in r
                      ? ((r.w + 6) % 7) + 7 * r.W - ((o + 5) % 7)
                      : r.w + 7 * r.U - ((o + 6) % 7)));
              return "Z" in r
                ? ((r.H += (r.Z / 100) | 0), (r.M += r.Z % 100), Zo(r))
                : Oo(r);
            };
          }
          function T(t, e, n, i) {
            for (var o, r, s = 0, a = e.length, u = n.length; s < a; ) {
              if (i >= u) return -1;
              if (37 === (o = e.charCodeAt(s++))) {
                if (
                  ((o = e.charAt(s++)),
                  !(r = x[o in jo ? e.charAt(s++) : o]) || (i = r(t, n, i)) < 0)
                )
                  return -1;
              } else if (o != n.charCodeAt(i++)) return -1;
            }
            return i;
          }
          return (
            (y.x = b(n, y)),
            (y.X = b(i, y)),
            (y.c = b(e, y)),
            (w.x = b(n, w)),
            (w.X = b(i, w)),
            (w.c = b(e, w)),
            {
              format: function (t) {
                var e = b((t += ""), y);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              parse: function (t) {
                var e = L((t += ""), !1);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              utcFormat: function (t) {
                var e = b((t += ""), w);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
              utcParse: function (t) {
                var e = L((t += ""), !0);
                return (
                  (e.toString = function () {
                    return t;
                  }),
                  e
                );
              },
            }
          );
        })({
          dateTime: "%x, %X",
          date: "%-m/%-d/%Y",
          time: "%-I:%M:%S %p",
          periods: ["AM", "PM"],
          days: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          months: [
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
          shortMonths: [
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
        })),
          (No = Bo.format),
          (Do = Bo.parse),
          Bo.utcFormat,
          Bo.utcParse,
          Array.prototype.slice,
          (us.prototype = {
            areaStart: function () {
              this._line = 0;
            },
            areaEnd: function () {
              this._line = NaN;
            },
            lineStart: function () {
              this._point = 0;
            },
            lineEnd: function () {
              (this._line || (0 !== this._line && 1 === this._point)) &&
                this._context.closePath(),
                (this._line = 1 - this._line);
            },
            point: function (t, e) {
              switch (((t = +t), (e = +e), this._point)) {
                case 0:
                  (this._point = 1),
                    this._line
                      ? this._context.lineTo(t, e)
                      : this._context.moveTo(t, e);
                  break;
                case 1:
                  this._point = 2;
                default:
                  this._context.lineTo(t, e);
              }
            },
          });
        const ls = Math.PI,
          cs = 2 * ls,
          fs = 1e-6,
          ds = cs - fs;
        function ps(t) {
          this._ += t[0];
          for (let e = 1, n = t.length; e < n; ++e)
            this._ += arguments[e] + t[e];
        }
        class _s {
          constructor(t) {
            (this._x0 = this._y0 = this._x1 = this._y1 = null),
              (this._ = ""),
              (this._append =
                null == t
                  ? ps
                  : (function (t) {
                      let e = Math.floor(t);
                      if (!(e >= 0)) throw new Error(`invalid digits: ${t}`);
                      if (e > 15) return ps;
                      const n = 10 ** e;
                      return function (t) {
                        this._ += t[0];
                        for (let e = 1, i = t.length; e < i; ++e)
                          this._ += Math.round(arguments[e] * n) / n + t[e];
                      };
                    })(t));
          }
          moveTo(t, e) {
            this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
              +e)}`;
          }
          closePath() {
            null !== this._x1 &&
              ((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`);
          }
          lineTo(t, e) {
            this._append`L${(this._x1 = +t)},${(this._y1 = +e)}`;
          }
          quadraticCurveTo(t, e, n, i) {
            this._append`Q${+t},${+e},${(this._x1 = +n)},${(this._y1 = +i)}`;
          }
          bezierCurveTo(t, e, n, i, o, r) {
            this._append`C${+t},${+e},${+n},${+i},${(this._x1 =
              +o)},${(this._y1 = +r)}`;
          }
          arcTo(t, e, n, i, o) {
            if (((t = +t), (e = +e), (n = +n), (i = +i), (o = +o) < 0))
              throw new Error(`negative radius: ${o}`);
            let r = this._x1,
              s = this._y1,
              a = n - t,
              u = i - e,
              h = r - t,
              l = s - e,
              c = h * h + l * l;
            if (null === this._x1)
              this._append`M${(this._x1 = t)},${(this._y1 = e)}`;
            else if (c > fs)
              if (Math.abs(l * a - u * h) > fs && o) {
                let f = n - r,
                  d = i - s,
                  p = a * a + u * u,
                  _ = f * f + d * d,
                  m = Math.sqrt(p),
                  g = Math.sqrt(c),
                  v =
                    o *
                    Math.tan((ls - Math.acos((p + c - _) / (2 * m * g))) / 2),
                  y = v / g,
                  w = v / m;
                Math.abs(y - 1) > fs &&
                  this._append`L${t + y * h},${e + y * l}`,
                  this._append`A${o},${o},0,0,${+(l * f > h * d)},${(this._x1 =
                    t + w * a)},${(this._y1 = e + w * u)}`;
              } else this._append`L${(this._x1 = t)},${(this._y1 = e)}`;
          }
          arc(t, e, n, i, o, r) {
            if (((t = +t), (e = +e), (r = !!r), (n = +n) < 0))
              throw new Error(`negative radius: ${n}`);
            let s = n * Math.cos(i),
              a = n * Math.sin(i),
              u = t + s,
              h = e + a,
              l = 1 ^ r,
              c = r ? i - o : o - i;
            null === this._x1
              ? this._append`M${u},${h}`
              : (Math.abs(this._x1 - u) > fs || Math.abs(this._y1 - h) > fs) &&
                this._append`L${u},${h}`,
              n &&
                (c < 0 && (c = (c % cs) + cs),
                c > ds
                  ? this._append`A${n},${n},0,1,${l},${t - s},${
                      e - a
                    }A${n},${n},0,1,${l},${(this._x1 = u)},${(this._y1 = h)}`
                  : c > fs &&
                    this._append`A${n},${n},0,${+(c >= ls)},${l},${(this._x1 =
                      t + n * Math.cos(o))},${(this._y1 =
                      e + n * Math.sin(o))}`);
          }
          rect(t, e, n, i) {
            this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 =
              +e)}h${(n = +n)}v${+i}h${-n}Z`;
          }
          toString() {
            return this._;
          }
        }
        function ms(t) {
          return t[0];
        }
        function gs(t) {
          return t[1];
        }
        function vs(t, e) {
          var n = as(!0),
            i = null,
            o = hs,
            r = null,
            s = (function (t) {
              let e = 3;
              return (
                (t.digits = function (n) {
                  if (!arguments.length) return e;
                  if (null == n) e = null;
                  else {
                    const t = Math.floor(n);
                    if (!(t >= 0)) throw new RangeError(`invalid digits: ${n}`);
                    e = t;
                  }
                  return t;
                }),
                () => new _s(e)
              );
            })(a);
          function a(a) {
            var u,
              h,
              l,
              c = (a = (function (t) {
                return "object" == typeof t && "length" in t
                  ? t
                  : Array.from(t);
              })(a)).length,
              f = !1;
            for (null == i && (r = o((l = s()))), u = 0; u <= c; ++u)
              !(u < c && n((h = a[u]), u, a)) === f &&
                ((f = !f) ? r.lineStart() : r.lineEnd()),
                f && r.point(+t(h, u, a), +e(h, u, a));
            if (l) return (r = null), l + "" || null;
          }
          return (
            (t = "function" == typeof t ? t : void 0 === t ? ms : as(t)),
            (e = "function" == typeof e ? e : void 0 === e ? gs : as(e)),
            (a.x = function (e) {
              return arguments.length
                ? ((t = "function" == typeof e ? e : as(+e)), a)
                : t;
            }),
            (a.y = function (t) {
              return arguments.length
                ? ((e = "function" == typeof t ? t : as(+t)), a)
                : e;
            }),
            (a.defined = function (t) {
              return arguments.length
                ? ((n = "function" == typeof t ? t : as(!!t)), a)
                : n;
            }),
            (a.curve = function (t) {
              return arguments.length
                ? ((o = t), null != i && (r = o(i)), a)
                : o;
            }),
            (a.context = function (t) {
              return arguments.length
                ? (null == t ? (i = r = null) : (r = o((i = t))), a)
                : i;
            }),
            a
          );
        }
        function ys(t, e, n) {
          (this.k = t), (this.x = e), (this.y = n);
        }
        _s.prototype,
          (ys.prototype = {
            constructor: ys,
            scale: function (t) {
              return 1 === t ? this : new ys(this.k * t, this.x, this.y);
            },
            translate: function (t, e) {
              return (0 === t) & (0 === e)
                ? this
                : new ys(this.k, this.x + this.k * t, this.y + this.k * e);
            },
            apply: function (t) {
              return [t[0] * this.k + this.x, t[1] * this.k + this.y];
            },
            applyX: function (t) {
              return t * this.k + this.x;
            },
            applyY: function (t) {
              return t * this.k + this.y;
            },
            invert: function (t) {
              return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
            },
            invertX: function (t) {
              return (t - this.x) / this.k;
            },
            invertY: function (t) {
              return (t - this.y) / this.k;
            },
            rescaleX: function (t) {
              return t
                .copy()
                .domain(t.range().map(this.invertX, this).map(t.invert, t));
            },
            rescaleY: function (t) {
              return t
                .copy()
                .domain(t.range().map(this.invertY, this).map(t.invert, t));
            },
            toString: function () {
              return (
                "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")"
              );
            },
          }),
          new ys(1, 0, 0),
          ys.prototype;
      },
    },
    r = {};
  function s(t) {
    var e = r[t];
    if (void 0 !== e) return e.exports;
    var n = (r[t] = { exports: {} });
    return o[t].call(n.exports, n, n.exports, s), n.exports;
  }
  (t =
    "function" == typeof Symbol
      ? Symbol("webpack queues")
      : "__webpack_queues__"),
    (e =
      "function" == typeof Symbol
        ? Symbol("webpack exports")
        : "__webpack_exports__"),
    (n =
      "function" == typeof Symbol
        ? Symbol("webpack error")
        : "__webpack_error__"),
    (i = (t) => {
      t &&
        t.d < 1 &&
        ((t.d = 1),
        t.forEach((t) => t.r--),
        t.forEach((t) => (t.r-- ? t.r++ : t())));
    }),
    (s.a = (o, r, s) => {
      var a;
      s && ((a = []).d = -1);
      var u,
        h,
        l,
        c = new Set(),
        f = o.exports,
        d = new Promise((t, e) => {
          (l = e), (h = t);
        });
      (d[e] = f),
        (d[t] = (t) => (a && t(a), c.forEach(t), d.catch((t) => {}))),
        (o.exports = d),
        r(
          (o) => {
            var r;
            u = ((o) =>
              o.map((o) => {
                if (null !== o && "object" == typeof o) {
                  if (o[t]) return o;
                  if (o.then) {
                    var r = [];
                    (r.d = 0),
                      o.then(
                        (t) => {
                          (s[e] = t), i(r);
                        },
                        (t) => {
                          (s[n] = t), i(r);
                        },
                      );
                    var s = {};
                    return (s[t] = (t) => t(r)), s;
                  }
                }
                var a = {};
                return (a[t] = (t) => {}), (a[e] = o), a;
              }))(o);
            var s = () =>
                u.map((t) => {
                  if (t[n]) throw t[n];
                  return t[e];
                }),
              h = new Promise((e) => {
                (r = () => e(s)).r = 0;
                var n = (t) =>
                  t !== a &&
                  !c.has(t) &&
                  (c.add(t), t && !t.d && (r.r++, t.push(r)));
                u.map((e) => e[t](n));
              });
            return r.r ? h : s();
          },
          (t) => (t ? l((d[n] = t)) : h(f), i(a)),
        ),
        a && a.d < 0 && (a.d = 0);
    }),
    (s.n = (t) => {
      var e = t && t.__esModule ? () => t.default : () => t;
      return s.d(e, { a: e }), e;
    }),
    (s.d = (t, e) => {
      for (var n in e)
        s.o(e, n) &&
          !s.o(t, n) &&
          Object.defineProperty(t, n, { enumerable: !0, get: e[n] });
    }),
    (s.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e)),
    s(20);
})();
