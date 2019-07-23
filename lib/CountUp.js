!function (t, e) {
  "object" == typeof exports && "object" == typeof module ? module.exports = e(require("countup.js")) : "function" == typeof define && define.amd ? define(["countup.js"], e) : "object" == typeof exports ? exports.VueDropUpload = e(require("countup.js")) : t.VueDropUpload = e(t["countup.js"])
}(window, function (t) {
  return function (t) {
    var e = {};

    function n(o) {
      if (e[o])return e[o].exports;
      var r = e[o] = {i: o, l: !1, exports: {}};
      return t[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports
    }

    return n.m = t, n.c = e, n.d = function (t, e, o) {
      n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: o})
    }, n.r = function (t) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e)return t;
      if (4 & e && "object" == typeof t && t && t.__esModule)return t;
      var o = Object.create(null);
      if (n.r(o), Object.defineProperty(o, "default", {
          enumerable: !0,
          value: t
        }), 2 & e && "string" != typeof t)for (var r in t)n.d(o, r, function (e) {
        return t[e]
      }.bind(null, r));
      return o
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default
      } : function () {
        return t
      };
      return n.d(e, "a", e), e
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "/", n(n.s = "dbjV")
  }({
    "KHd+": function (t, e, n) {
      "use strict";
      function o(t, e, n, o, r, u, i, s) {
        var a, c = "function" == typeof t ? t.options : t;
        if (e && (c.render = e, c.staticRenderFns = n, c._compiled = !0), o && (c.functional = !0), u && (c._scopeId = "data-v-" + u), i ? (a = function (t) {
            (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || "undefined" == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), r && r.call(this, t), t && t._registeredComponents && t._registeredComponents.add(i)
          }, c._ssrRegister = a) : r && (a = s ? function () {
            r.call(this, this.$root.$options.shadowRoot)
          } : r), a)if (c.functional) {
          c._injectStyles = a;
          var f = c.render;
          c.render = function (t, e) {
            return a.call(e), f(t, e)
          }
        } else {
          var p = c.beforeCreate;
          c.beforeCreate = p ? [].concat(p, a) : [a]
        }
        return {exports: t, options: c}
      }

      n.d(e, "a", function () {
        return o
      })
    }, RYSP: function (e, n) {
      e.exports = t
    }, Rpm7: function (t, e, n) {
    }, UgYM: function (t, e, n) {
      "use strict";
      var o = n("Rpm7");
      n.n(o).a
    }, dbjV: function (t, e, n) {
      "use strict";
      n.r(e);
      var o = n("RYSP"), r = {
        name: "ByCountup",
        mounted: function () {
          var t = this;
          this.$nextTick(function () {
            t._countup = new o.CountUp(t.$el, t.endVal, t.options), t.start && t._countup.start()
          })
        },
        props: {
          tag: {type: String, default: "span"},
          start: {type: Boolean, default: !0},
          endVal: {type: Number, required: !0},
          options: {
            type: Object, default: function () {
              return {}
            }
          }
        },
        render: function (t) {
          return t(this.tag, {}, [this.startVal])
        },
        watch: {
          start: function (t) {
            t && this._countup.start()
          }, endVal: function (t) {
            this._countup.update(t)
          }
        }
      }, u = (n("UgYM"), n("KHd+")), i = Object(u.a)(r, void 0, void 0, !1, null, "1e0a9a34", null);
      e.default = i.exports
    }
  })
});
