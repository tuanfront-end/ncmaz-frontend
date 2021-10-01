var e,
  t = Object.defineProperty,
  r = Object.defineProperties,
  a = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  s = (e, r, a) =>
    r in e
      ? t(e, r, { enumerable: !0, configurable: !0, writable: !0, value: a })
      : (e[r] = a),
  c = (e, t) => {
    for (var r in t || (t = {})) l.call(t, r) && s(e, r, t[r]);
    if (n) for (var r of n(t)) o.call(t, r) && s(e, r, t[r]);
    return e;
  },
  i = (e, t) => r(e, a(t)),
  d = (e, t) => {
    var r = {};
    for (var a in e) l.call(e, a) && t.indexOf(a) < 0 && (r[a] = e[a]);
    if (null != e && n)
      for (var a of n(e)) t.indexOf(a) < 0 && o.call(e, a) && (r[a] = e[a]);
    return r;
  };
import {
  R as u,
  r as m,
  S as p,
  g,
  u as f,
  a as E,
  M as k,
  T as b,
  D as h,
  P as v,
  b as y,
  L as x,
  c as C,
  d as w,
  e as N,
  F as S,
  f as L,
  h as _,
  i as P,
  j as I,
  k as M,
  l as A,
  p as j,
  m as T,
  n as O,
  o as z,
  q as R,
  s as D,
  t as V,
  v as F,
  w as $,
  x as B,
  I as U,
  A as H,
  y as W,
  z as G,
  B as q,
} from "./vendor.9a2c2287.js";
const J = {},
  Z = function (e, t) {
    return t && 0 !== t.length
      ? Promise.all(
          t.map((e) => {
            if (
              (e = `${window.frontendObject.homeURL}/wp-content/plugins/ncmaz-frontend/dist/${e}`) in
              J
            )
              return;
            J[e] = !0;
            const t = e.endsWith(".css"),
              r = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${r}`)) return;
            const a = document.createElement("link");
            return (
              (a.rel = t ? "stylesheet" : "modulepreload"),
              t || ((a.as = "script"), (a.crossOrigin = "")),
              (a.href = e),
              document.head.appendChild(a),
              t
                ? new Promise((e, t) => {
                    a.addEventListener("load", e),
                      a.addEventListener("error", t);
                  })
                : void 0
            );
          })
        ).then(() => e())
      : e();
  },
  Q = u.lazy(() =>
    Z(
      () => import("./FactoryBlockMagazine.92f41cab.js"),
      [
        "assets/FactoryBlockMagazine.92f41cab.js",
        "assets/vendor.9a2c2287.js",
        "assets/Heading.dd3f8bc9.js",
        "assets/NextPrev.c3bc864e.js",
        "assets/Card10Skeleton.dc568c72.js",
        "assets/Card11Skeleton.9874a2b5.js",
        "assets/NavItem.184d2608.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/PostFeaturedMedia.7312d612.js",
        "assets/PostCardLikeAction.9db16b47.js",
        "assets/ncNanoId.3f36f1af.js",
        "assets/hooks.f7cf5f07.js",
        "assets/index.5582b8b7.js",
        "assets/ButtonPlayMusicRunningContainer.b2da28f8.js",
        "assets/BackgroundSection.6c11eca0.js",
        "assets/PostCardMeta.30568366.js",
        "assets/Card11.49fe1e23.js",
        "assets/Card9.16f2c348.js",
        "assets/Card15PodcastSkeleton.9ddd4bc5.js",
      ]
    )
  ),
  Y = u.lazy(() =>
    Z(
      () => import("./FactoryBlockPostsGrid.1a1b297d.js"),
      [
        "assets/FactoryBlockPostsGrid.1a1b297d.js",
        "assets/vendor.9a2c2287.js",
        "assets/Heading.dd3f8bc9.js",
        "assets/NextPrev.c3bc864e.js",
        "assets/Card10Skeleton.dc568c72.js",
        "assets/Card11Skeleton.9874a2b5.js",
        "assets/NavItem.184d2608.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/PostFeaturedMedia.7312d612.js",
        "assets/PostCardLikeAction.9db16b47.js",
        "assets/ncNanoId.3f36f1af.js",
        "assets/hooks.f7cf5f07.js",
        "assets/index.5582b8b7.js",
        "assets/ButtonPlayMusicRunningContainer.b2da28f8.js",
        "assets/BackgroundSection.6c11eca0.js",
        "assets/Card14Skeleton.64c97cd6.js",
        "assets/Card9.16f2c348.js",
        "assets/Card11.49fe1e23.js",
        "assets/PostCardMeta.30568366.js",
        "assets/Card15PodcastSkeleton.9ddd4bc5.js",
        "assets/ButtonPrimary.839293c7.js",
      ]
    )
  ),
  K = u.lazy(() =>
    Z(
      () => import("./FactoryBlockPostsSlider.ffaac567.js"),
      [
        "assets/FactoryBlockPostsSlider.ffaac567.js",
        "assets/vendor.9a2c2287.js",
        "assets/Heading.dd3f8bc9.js",
        "assets/NextPrev.c3bc864e.js",
        "assets/Card10Skeleton.dc568c72.js",
        "assets/Card11Skeleton.9874a2b5.js",
        "assets/NavItem.184d2608.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/PostFeaturedMedia.7312d612.js",
        "assets/PostCardLikeAction.9db16b47.js",
        "assets/ncNanoId.3f36f1af.js",
        "assets/hooks.f7cf5f07.js",
        "assets/index.5582b8b7.js",
        "assets/ButtonPlayMusicRunningContainer.b2da28f8.js",
        "assets/BackgroundSection.6c11eca0.js",
        "assets/Card14Skeleton.64c97cd6.js",
        "assets/Card9.16f2c348.js",
        "assets/Card11.49fe1e23.js",
        "assets/PostCardMeta.30568366.js",
      ]
    )
  ),
  X = u.lazy(() =>
    Z(
      () => import("./FactoryBlockTermsSlider.3561f9bf.js"),
      [
        "assets/FactoryBlockTermsSlider.3561f9bf.js",
        "assets/vendor.9a2c2287.js",
        "assets/BackgroundSection.6c11eca0.js",
        "assets/Heading.dd3f8bc9.js",
        "assets/NextPrev.c3bc864e.js",
        "assets/ncNanoId.3f36f1af.js",
        "assets/CardCategory5Skeleton.f1b45035.js",
      ]
    )
  ),
  ee = u.lazy(() =>
    Z(
      () => import("./FactoryBlockTermsGrid.82e6cc05.js"),
      [
        "assets/FactoryBlockTermsGrid.82e6cc05.js",
        "assets/vendor.9a2c2287.js",
        "assets/BackgroundSection.6c11eca0.js",
        "assets/SectionGridCategoryBox.61b7244a.js",
        "assets/CardCategory5Skeleton.f1b45035.js",
        "assets/Heading.dd3f8bc9.js",
        "assets/NextPrev.c3bc864e.js",
      ]
    )
  ),
  te = u.lazy(() =>
    Z(
      () => import("./FactoryBlockUsersSlider.51c75a9c.js"),
      [
        "assets/FactoryBlockUsersSlider.51c75a9c.js",
        "assets/vendor.9a2c2287.js",
        "assets/BackgroundSection.6c11eca0.js",
        "assets/Heading.dd3f8bc9.js",
        "assets/NextPrev.c3bc864e.js",
        "assets/ncNanoId.3f36f1af.js",
        "assets/CardAuthorBox2Skeleton.070e14fd.js",
        "assets/CardAuthorBoxSkeleton.09b31790.js",
      ]
    )
  ),
  re = u.lazy(() =>
    Z(
      () => import("./FactoryBlockUsersGrid.e6a25a26.js"),
      [
        "assets/FactoryBlockUsersGrid.e6a25a26.js",
        "assets/vendor.9a2c2287.js",
        "assets/BackgroundSection.6c11eca0.js",
        "assets/CardAuthorBoxSkeleton.09b31790.js",
        "assets/CardAuthorBox2Skeleton.070e14fd.js",
        "assets/Heading.dd3f8bc9.js",
        "assets/NextPrev.c3bc864e.js",
      ]
    )
  ),
  ae = u.lazy(() =>
    Z(
      () => import("./FactoryBlockVideos.895dc839.js"),
      [
        "assets/FactoryBlockVideos.895dc839.js",
        "assets/vendor.9a2c2287.js",
        "assets/BackgroundSection.6c11eca0.js",
        "assets/Heading.dd3f8bc9.js",
        "assets/NextPrev.c3bc864e.js",
        "assets/NcPlayIcon.300a9c19.js",
      ]
    )
  ),
  ne = u.lazy(() =>
    Z(
      () => import("./FactoryBlockWidgetPosts.80e17e54.js"),
      [
        "assets/FactoryBlockWidgetPosts.80e17e54.js",
        "assets/vendor.9a2c2287.js",
        "assets/PostCardMeta.30568366.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/WidgetHeading1.99f8377f.js",
      ]
    )
  ),
  le = u.lazy(() =>
    Z(
      () => import("./FactoryBlockWidgetUsers.3fe8edaa.js"),
      [
        "assets/FactoryBlockWidgetUsers.3fe8edaa.js",
        "assets/vendor.9a2c2287.js",
        "assets/WidgetHeading1.99f8377f.js",
      ]
    )
  ),
  oe = u.lazy(() =>
    Z(
      () => import("./FactoryBlockWidgetTerms.2d7ebf74.js"),
      [
        "assets/FactoryBlockWidgetTerms.2d7ebf74.js",
        "assets/vendor.9a2c2287.js",
        "assets/Tag.08bd0998.js",
        "assets/WidgetHeading1.99f8377f.js",
      ]
    )
  ),
  se = document.querySelectorAll("[data-nc-gutenberg-section=true]");
let ce = [],
  ie = [],
  de = [],
  ue = [],
  me = [],
  pe = [],
  ge = [],
  fe = [],
  Ee = [],
  ke = [],
  be = [];
Array.from(se).map((e) => {
  switch (e.getAttribute("data-nc-gutenberg-section-type") || "") {
    case "block-magazine":
      ce = [...ce, e];
      break;
    case "block-posts-slider":
      ie = [...ie, e];
      break;
    case "block-posts-grid":
      de = [...de, e];
      break;
    case "block-terms-slider":
      ue = [...ue, e];
      break;
    case "block-terms-grid":
      me = [...me, e];
      break;
    case "block-users-slider":
      pe = [...pe, e];
      break;
    case "block-users-grid":
      ge = [...ge, e];
      break;
    case "block-videos":
      fe = [...fe, e];
      break;
    case "block-widget-posts":
      Ee = [...Ee, e];
      break;
    case "block-widget-users":
      ke = [...ke, e];
      break;
    case "block-widget-terms":
      be = [...be, e];
  }
});
const he = () =>
  u.createElement(
    u.Fragment,
    null,
    ce.map((e, t) => {
      const r = e.getAttribute("data-nc-gutenberg-section-api");
      if (!r) return null;
      const a = JSON.parse(r);
      return u.createElement(
        m.exports.Suspense,
        { key: t, fallback: u.createElement("div", null) },
        u.createElement(Q, { key: t, domNode: e, apiSettings: a })
      );
    }),
    ie.map((e, t) => {
      const r = e.getAttribute("data-nc-gutenberg-section-api");
      if (!r) return null;
      const a = JSON.parse(r);
      return u.createElement(
        m.exports.Suspense,
        { key: t, fallback: u.createElement("div", null) },
        u.createElement(K, { key: t, domNode: e, apiSettings: a })
      );
    }),
    de.map((e, t) => {
      const r = e.getAttribute("data-nc-gutenberg-section-api");
      if (!r) return null;
      const a = JSON.parse(r);
      return u.createElement(
        m.exports.Suspense,
        { key: t, fallback: u.createElement("div", null) },
        u.createElement(Y, { key: t, domNode: e, apiSettings: a })
      );
    }),
    ue.map((e, t) => {
      const r = e.getAttribute("data-nc-gutenberg-section-api");
      if (!r) return null;
      const a = JSON.parse(r);
      return u.createElement(
        m.exports.Suspense,
        { key: t, fallback: u.createElement("div", null) },
        u.createElement(X, { key: t, domNode: e, apiSettings: a })
      );
    }),
    me.map((e, t) => {
      const r = e.getAttribute("data-nc-gutenberg-section-api");
      if (!r) return null;
      const a = JSON.parse(r);
      return u.createElement(
        m.exports.Suspense,
        { key: t, fallback: u.createElement("div", null) },
        u.createElement(ee, { key: t, domNode: e, apiSettings: a })
      );
    }),
    pe.map((e, t) => {
      const r = e.getAttribute("data-nc-gutenberg-section-api");
      if (!r) return null;
      const a = JSON.parse(r);
      return u.createElement(
        m.exports.Suspense,
        { key: t, fallback: u.createElement("div", null) },
        u.createElement(te, { key: t, domNode: e, apiSettings: a })
      );
    }),
    ge.map((e, t) => {
      const r = e.getAttribute("data-nc-gutenberg-section-api");
      if (!r) return null;
      const a = JSON.parse(r);
      return u.createElement(
        m.exports.Suspense,
        { key: t, fallback: u.createElement("div", null) },
        u.createElement(re, { key: t, domNode: e, apiSettings: a })
      );
    }),
    fe.map((e, t) => {
      const r = e.getAttribute("data-nc-gutenberg-section-api");
      if (!r) return null;
      const a = JSON.parse(r);
      return u.createElement(
        m.exports.Suspense,
        { key: t, fallback: u.createElement("div", null) },
        u.createElement(ae, { key: t, domNode: e, apiSettings: a })
      );
    }),
    Ee.map((e, t) => {
      const r = e.getAttribute("data-nc-gutenberg-section-api");
      if (!r) return null;
      const a = JSON.parse(r);
      return u.createElement(
        m.exports.Suspense,
        { key: t, fallback: u.createElement("div", null) },
        u.createElement(ne, { key: t, domNode: e, apiSettings: a })
      );
    }),
    ke.map((e, t) => {
      const r = e.getAttribute("data-nc-gutenberg-section-api");
      if (!r) return null;
      const a = JSON.parse(r);
      return u.createElement(
        m.exports.Suspense,
        { key: t, fallback: u.createElement("div", null) },
        u.createElement(le, { key: t, domNode: e, apiSettings: a })
      );
    }),
    be.map((e, t) => {
      const r = e.getAttribute("data-nc-gutenberg-section-api");
      if (!r) return null;
      const a = JSON.parse(r);
      return u.createElement(
        m.exports.Suspense,
        { key: t, fallback: u.createElement("div", null) },
        u.createElement(oe, { key: t, domNode: e, apiSettings: a })
      );
    })
  );
const ve = () => {
    const e = document.querySelector(".nc-Header"),
      t = document.querySelector(".nc-Header__MainNav1"),
      r = document.querySelector(".nc-Header__MainNav1 .nc-MainNav1"),
      a = document.querySelector(".nc-SingleHeaderMenu"),
      n = document.querySelector(".nc-SingleHeaderMenu__progress-bar");
    let l = document.querySelector("#wpadminbar");
    const o = (function () {
      const [e, t] = m.exports.useState({ width: 0, height: 0 });
      return (
        m.exports.useEffect(() => {
          function e() {
            t({ width: window.innerWidth, height: window.innerHeight });
          }
          return (
            window.addEventListener("resize", e),
            e(),
            () => window.removeEventListener("resize", e)
          );
        }, []),
        e
      );
    })();
    l = o.width <= 600 ? null : document.querySelector("#wpadminbar");
    let s = window.pageYOffset;
    const c = !!a,
      [i, d] = m.exports.useState(!1),
      [u, p] = m.exports.useState(!0);
    m.exports.useEffect(() => {
      a && (a.style.display = i ? "block" : "none");
    }, [i]),
      m.exports.useEffect(() => {
        r &&
          (u &&
            !r.classList.contains("onTop") &&
            (r.classList.remove("notOnTop"), r.classList.add("onTop")),
          u ||
            r.classList.contains("notOnTop") ||
            (r.classList.remove("onTop"), r.classList.add("notOnTop")));
      }, [u]),
      m.exports.useEffect(() => {
        if (!t) return;
        let e = t.offsetHeight;
        l && (e -= l.offsetHeight),
          (window.onscroll = function () {
            f(e);
          });
      }, [o.width]),
      m.exports.useEffect(() => {
        c
          ? setTimeout(() => {
              window.addEventListener("scroll", g);
            }, 200)
          : window.removeEventListener("scroll", g);
      }, [c]);
    const g = () => {
        (() => {
          const e = document.querySelector("#ncmaz-single-entry-content");
          if (!c || !e) return;
          const t = e.offsetTop + e.offsetHeight;
          let r =
            ((document.body.scrollTop || document.documentElement.scrollTop) /
              t) *
            100;
          !n || r > 140 || ((r = r > 100 ? 100 : r), (n.style.width = r + "%"));
        })();
        let e = document.body.scrollTop || document.documentElement.scrollTop;
        d(e > 200);
      },
      f = (r) => {
        let a = window.pageYOffset;
        e &&
          t &&
          (p(s < a ? !(a > r) : !(a > 0)),
          (e.style.top =
            s > a ? (l ? `${l.offsetHeight}px` : "0") : `-${r + 2}px`),
          (s = a));
      };
    return null;
  },
  ye = () =>
    u.createElement(
      "svg",
      {
        className: "w-full h-full",
        viewBox: "0 0 197 193",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      u.createElement("path", {
        d: "M145.828 48.9822C134.953 48.9822 126.105 57.8301 126.105 68.7051C126.105 79.5801 134.953 88.428 145.828 88.428C156.703 88.428 165.551 79.5805 165.551 68.7051C165.551 57.8293 156.704 48.9822 145.828 48.9822ZM145.828 80.7741C139.173 80.7741 133.759 75.3602 133.759 68.7051C133.759 62.0501 139.173 56.6361 145.828 56.6361C152.483 56.6361 157.897 62.0501 157.897 68.7051C157.897 75.3594 152.483 80.7741 145.828 80.7741Z",
        fill: "currentColor",
      }),
      u.createElement("path", {
        d: "M145.963 171.49C145.867 171.256 145.748 171.034 145.611 170.828C145.473 170.617 145.312 170.422 145.136 170.246C144.96 170.07 144.765 169.909 144.554 169.771C144.348 169.634 144.126 169.515 143.892 169.419C143.663 169.324 143.422 169.247 143.177 169.201C142.683 169.102 142.178 169.102 141.684 169.201C141.439 169.247 141.198 169.324 140.969 169.419C140.735 169.515 140.513 169.634 140.306 169.771C140.096 169.909 139.901 170.07 139.725 170.246C139.549 170.422 139.388 170.617 139.25 170.828C139.112 171.034 138.994 171.256 138.898 171.49C138.802 171.719 138.726 171.96 138.68 172.205C138.63 172.45 138.603 172.703 138.603 172.952C138.603 173.2 138.63 173.453 138.68 173.698C138.726 173.943 138.802 174.184 138.898 174.413C138.994 174.647 139.112 174.869 139.25 175.075C139.388 175.286 139.549 175.481 139.725 175.657C139.812 175.745 139.905 175.829 140.001 175.908C140.099 175.987 140.201 176.063 140.306 176.132C140.513 176.269 140.735 176.388 140.969 176.484C141.198 176.579 141.439 176.656 141.684 176.702C141.929 176.752 142.182 176.778 142.43 176.778C142.679 176.778 142.932 176.752 143.177 176.702C143.422 176.656 143.663 176.579 143.892 176.484C144.126 176.388 144.348 176.269 144.554 176.132C144.66 176.062 144.762 175.987 144.859 175.908C144.956 175.829 145.048 175.745 145.136 175.657C145.312 175.481 145.473 175.286 145.611 175.075C145.748 174.869 145.867 174.647 145.963 174.413C146.058 174.184 146.135 173.943 146.185 173.698C146.234 173.453 146.257 173.2 146.257 172.952C146.257 172.703 146.234 172.45 146.185 172.205C146.135 171.96 146.058 171.719 145.963 171.49Z",
        fill: "currentColor",
      }),
      u.createElement("path", {
        d: "M85.7341 20.0459C85.6384 19.8163 85.5198 19.5943 85.382 19.3838C85.2442 19.1772 85.0835 18.9782 84.9075 18.8021C84.7314 18.6261 84.5363 18.4653 84.3258 18.3276C84.1191 18.1898 83.8972 18.0712 83.6637 17.9755C83.4341 17.8798 83.193 17.8071 82.9481 17.7574C82.4544 17.6579 81.9492 17.6579 81.4556 17.7574C81.2106 17.8071 80.9695 17.8798 80.7361 17.9755C80.5065 18.0712 80.2845 18.1898 80.0779 18.3276C79.8674 18.4653 79.6722 18.6261 79.4962 18.8021C79.3201 18.9782 79.1594 19.1772 79.0178 19.3838C78.88 19.5943 78.7652 19.8163 78.6696 20.0459C78.5739 20.2755 78.4973 20.5166 78.4514 20.7615C78.4017 21.0103 78.3749 21.259 78.3749 21.5116C78.3749 21.7603 78.4017 22.0091 78.4514 22.2579C78.4973 22.5028 78.5739 22.7439 78.6696 22.9735C78.7652 23.2031 78.88 23.4251 79.0178 23.6356C79.1594 23.8422 79.3201 24.0412 79.4962 24.2172C79.6722 24.3933 79.8674 24.554 80.0779 24.6918C80.2845 24.8296 80.5065 24.9482 80.7361 25.0439C80.9695 25.1395 81.2106 25.2123 81.4556 25.262C81.7005 25.3118 81.9531 25.3385 82.2018 25.3385C82.4506 25.3385 82.7032 25.3118 82.9481 25.262C83.193 25.2123 83.4341 25.1395 83.6637 25.0439C83.8972 24.9482 84.1191 24.8296 84.3258 24.6918C84.5363 24.554 84.7314 24.3933 84.9075 24.2172C85.0835 24.0412 85.2442 23.8422 85.382 23.6356C85.5198 23.4251 85.6384 23.2031 85.7341 22.9735C85.8298 22.7439 85.9063 22.5028 85.9522 22.2579C86.002 22.0091 86.0288 21.7603 86.0288 21.5116C86.0288 21.259 86.002 21.0103 85.9522 20.7615C85.9063 20.5166 85.8298 20.2755 85.7341 20.0459Z",
        fill: "currentColor",
      }),
      u.createElement("path", {
        d: "M175.008 17.6988C172.714 7.99787 163.987 0.755371 153.594 0.755371H33.522C15.2866 0.754988 0.450684 15.5909 0.450684 33.8263V153.899C0.450684 165.824 9.98628 175.557 21.8326 175.891C24.1272 185.592 32.8542 192.835 43.2467 192.835H174.382C186.517 192.835 196.39 182.962 196.39 170.826V141.949V39.6911C196.39 27.7663 186.855 18.0329 175.008 17.6988ZM188.736 170.827C188.736 178.742 182.297 185.182 174.382 185.182H43.2467C37.1197 185.182 31.8799 181.322 29.8236 175.908C29.2232 174.327 28.8918 172.615 28.8918 170.827V168.254V150.524L72.7964 76.0808C74.1332 73.8144 76.517 72.4911 79.1323 72.5332C81.7633 72.5783 84.0851 73.9844 85.3434 76.2955L104.247 111.007L131.725 161.462C132.419 162.737 133.733 163.459 135.089 163.459C135.708 163.459 136.335 163.309 136.916 162.993C138.772 161.982 139.458 159.657 138.447 157.801L129.53 141.428C133.445 141.608 137.296 140.341 140.362 137.797L157.572 123.52C160.332 121.23 164.408 121.331 167.051 123.755L167.95 124.578L175.604 131.594L188.736 143.632V170.827ZM188.736 133.249L175.603 121.21L167.95 115.382C162.963 113.297 157.033 114.022 152.685 117.629L135.475 131.906C133.582 133.476 131.111 134.111 128.695 133.646C126.28 133.183 124.22 131.677 123.043 129.517L110.969 107.345L104.226 94.9648V94.9644L92.0655 72.6342C89.4716 67.8716 84.6856 64.9727 79.2632 64.8801C73.8423 64.7951 68.9588 67.521 66.2037 72.1922L28.8914 135.457V39.6911C28.8914 31.7758 35.331 25.3362 43.2463 25.3362H66.8937C69.0074 25.3362 70.7207 23.6229 70.7207 21.5093C70.7207 19.3957 69.0074 17.6823 66.8937 17.6823H43.2463C31.1106 17.6823 21.2375 27.5555 21.2375 39.6911V149.479V168.198C13.8924 167.575 8.10458 161.402 8.10458 153.899V33.8263C8.10458 19.8109 19.507 8.40888 33.522 8.40888H153.594C159.721 8.40888 164.961 12.2684 167.017 17.6827H97.5093C95.3957 17.6827 93.6824 19.396 93.6824 21.5097C93.6824 23.6233 95.3957 25.3366 97.5093 25.3366H167.949L175.603 25.3925C182.949 26.0147 188.736 32.1876 188.736 39.6911V133.249Z",
        fill: "currentColor",
      })
    ),
  xe = (e) => {
    var t = e,
      {
        containerClassName: r = "",
        alt: a = "nc-imgs",
        src: n = "",
        className: l = "object-cover w-full h-full",
      } = t,
      o = d(t, ["containerClassName", "alt", "src", "className"]);
    let s = !1;
    const i = m.exports.useRef(null);
    let p = null;
    const [g, f] = m.exports.useState(""),
      [E, k] = m.exports.useState(!1),
      b = () => {
        i.current &&
          (({ target: e, distanceFromEnd: t, callback: r }) => {
            if (void 0 === window.IntersectionObserver)
              return void console.error(
                "window.IntersectionObserver === undefined! => Your Browser is Notsupport"
              );
            const a = new IntersectionObserver(
              (e, t) => {
                e.map(
                  (e) => (e.isIntersecting && r() && t.unobserve(e.target), !0)
                );
              },
              { root: null, rootMargin: `${t}px 0px`, threshold: 0 }
            );
            e && a.observe(e);
          })({ target: i.current, distanceFromEnd: 0, callback: h });
      },
      h = () =>
        n
          ? ((p = new Image()),
            p && ((p.src = n), p.addEventListener("load", v)),
            !0)
          : (v(), !0),
      v = () => {
        s && (k(!0), f(n));
      };
    m.exports.useEffect(
      () => (
        (s = !0),
        (async () => {
          b();
        })(),
        () => {
          s = !1;
        }
      ),
      [n]
    );
    return u.createElement(
      "div",
      { className: `nc-NcImage ${r}`, "data-nc-id": "NcImage", ref: i },
      g && E
        ? u.createElement("img", c({ src: g, className: l, alt: a }, o))
        : u.createElement(
            "div",
            {
              className: `${l} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`,
            },
            u.createElement(
              "div",
              { className: "h-2/4 max-w-[50%]" },
              u.createElement(ye, null)
            )
          )
    );
  },
  Ce = ({
    className: e = "",
    postType: t = "Standard",
    onClick: r,
    wrapSize: a = "w-11 h-11",
    iconSize: n = "w-6 h-6",
  }) =>
    u.createElement(
      "div",
      {
        className: `nc-PostTypeFeaturedIcon ${e}`,
        "data-nc-id": "PostTypeFeaturedIcon",
        onClick: r,
      },
      !!t &&
        "Standard" !== t &&
        u.createElement(
          "span",
          {
            className: `bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white ${a}`,
          },
          "Video" === t
            ? u.createElement(
                "svg",
                {
                  className: n,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                u.createElement("path", {
                  d: "M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              )
            : "Audio" === t
            ? u.createElement(
                "svg",
                {
                  className: n,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                u.createElement("path", {
                  d: "M6.28016 22C8.00328 22 9.40016 20.6031 9.40016 18.88C9.40016 17.1569 8.00328 15.76 6.28016 15.76C4.55703 15.76 3.16016 17.1569 3.16016 18.88C3.16016 20.6031 4.55703 22 6.28016 22Z",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                u.createElement("path", {
                  d: "M20.8404 7.96009V4.60009C20.8404 2.00009 19.2104 1.64009 17.5604 2.09009L11.3204 3.79009C10.1804 4.10009 9.40039 5.00009 9.40039 6.30009V8.47009V9.93009V18.8701",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                u.createElement("path", {
                  d: "M20.8398 16.8V12",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                u.createElement("path", {
                  d: "M17.7196 19.9199C19.4427 19.9199 20.8396 18.5231 20.8396 16.7999C20.8396 15.0768 19.4427 13.6799 17.7196 13.6799C15.9965 13.6799 14.5996 15.0768 14.5996 16.7999C14.5996 18.5231 15.9965 19.9199 17.7196 19.9199Z",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                u.createElement("path", {
                  d: "M9.40039 9.5199L20.8404 6.3999",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              )
            : "Gallery" === t
            ? u.createElement(
                "svg",
                {
                  className: n,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                u.createElement("path", {
                  d: "M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                u.createElement("path", {
                  d: "M11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                u.createElement("path", {
                  d: "M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              )
            : u.createElement(
                "svg",
                { className: n, fill: "none", viewBox: "0 0 24 24" },
                u.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M18.2813 12.0313L11.9687 5.7187C11.4896 5.23964 10.6829 5.36557 10.3726 5.96785L6.75 13L11 17.25L18.0321 13.6274C18.6344 13.3171 18.7604 12.5104 18.2813 12.0313Z",
                }),
                u.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M4.75 19.25L8.5 15.5",
                }),
                u.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M13.75 7.25L16.25 4.75",
                }),
                u.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M16.75 10.25L19.25 7.75",
                })
              )
        )
    ),
  we = ({ className: e = "relative", name: t, color: r = "blue", href: a }) => {
    const n = (e = !0) => {
        switch (r) {
          case "pink":
            return (
              "text-pink-800 bg-pink-100 " + (e ? "hover:bg-pink-800" : "")
            );
          case "red":
            return "text-red-800 bg-red-100 " + (e ? "hover:bg-red-800" : "");
          case "gray":
            return (
              "text-gray-800 bg-gray-100 " + (e ? "hover:bg-gray-800" : "")
            );
          case "green":
            return (
              "text-green-800 bg-green-100 " + (e ? "hover:bg-green-800" : "")
            );
          case "purple":
            return (
              "text-purple-800 bg-purple-100 " +
              (e ? "hover:bg-purple-800" : "")
            );
          case "indigo":
            return (
              "text-indigo-800 bg-indigo-100 " +
              (e ? "hover:bg-indigo-800" : "")
            );
          case "yellow":
            return (
              "text-yellow-800 bg-yellow-100 " +
              (e ? "hover:bg-yellow-800" : "")
            );
          case "blue":
            return (
              "text-blue-800 bg-blue-100 " + (e ? "hover:bg-blue-800" : "")
            );
          default:
            return (
              "text-pink-800 bg-pink-100 " + (e ? "hover:bg-pink-800" : "")
            );
        }
      },
      l =
        "nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs " +
        e;
    return a
      ? u.createElement(
          "a",
          {
            href: a || "",
            className: `transition-colors hover:text-white duration-300 ${l} ${n()}`,
          },
          t
        )
      : u.createElement("span", { className: `${l} ${n(!1)} ${e}` }, t);
  },
  Ne = ({ className: e = "h-full", post: t }) => {
    var r, a, n, l, o, s, c;
    const {
        link: i,
        categories: d,
        title: m,
        featuredImage: p,
        postFormats: g,
      } = t,
      f = null == (r = null == g ? void 0 : g.edges[0]) ? void 0 : r.node.name;
    return u.createElement(
      "div",
      {
        className: `nc-Card18 group relative flex flex-col ${e}`,
        "data-nc-id": "Card18",
      },
      u.createElement(
        "div",
        {
          className:
            "w-full block h-0 aspect-h-9 aspect-w-10 rounded-2xl overflow-hidden",
        },
        u.createElement(xe, {
          containerClassName: "absolute inset-0 ",
          src: (null == p ? void 0 : p.node.sourceUrl) || ".",
          alt: m,
        }),
        u.createElement(
          "div",
          null,
          u.createElement(Ce, {
            className: "absolute left-1.5 bottom-1.5",
            postType: f,
            wrapSize: "w-8 h-8",
            iconSize: "w-4 h-4",
          })
        ),
        u.createElement("div", {
          className:
            "bg-transparent group-hover:bg-gray-900/30 transform transition-colors",
        })
      ),
      u.createElement(
        "div",
        { className: "absolute top-1.5 inset-x-1.5 flex justify-between " },
        u.createElement(we, {
          className: "relative z-10",
          name:
            null ==
            (n =
              null == (a = null == d ? void 0 : d.edges[0]) ? void 0 : a.node)
              ? void 0
              : n.name,
          href:
            null ==
            (o =
              null == (l = null == d ? void 0 : d.edges[0]) ? void 0 : l.node)
              ? void 0
              : o.link,
          color:
            null ==
            (c =
              null == (s = null == d ? void 0 : d.edges[0]) ? void 0 : s.node)
              ? void 0
              : c.ncTaxonomyMeta.color,
        })
      ),
      u.createElement(
        "h2",
        { className: "block mt-2 font-medium text-sm" },
        u.createElement("span", {
          className: "line-clamp-2",
          dangerouslySetInnerHTML: { __html: m },
        })
      ),
      u.createElement("a", { href: i, className: "absolute inset-0" })
    );
  };
let Se = {
  nothingWeFound: "Nothing we found!",
  all: "All",
  viewAll: "View All",
  articles: "Articles",
  showMeMore: "Show me more",
  showAllPhotos: "Show all photos",
};
try {
  if (
    frontendObject.frontendTranslate &&
    "string" == typeof frontendObject.frontendTranslate
  ) {
    const e = JSON.parse(frontendObject.frontendTranslate);
    e && "object" == typeof e && (Se = c(c({}, Se), e));
  }
} catch (vt) {
  console.log("----translate frontend file error ----", vt);
}
var Le = Se;
const _e = () =>
    u.createElement(
      "div",
      {
        className:
          "inline-flex flex-col items-center justify-center text-center",
      },
      u.createElement("img", {
        src: ncmazFrontendVariables.emptyStatePng,
        className: "w-36 sm:w-40",
        alt: "empty state",
      }),
      u.createElement(
        "span",
        { className: "text-sm block text-neutral-500" },
        Le.nothingWeFound
      )
    ),
  Pe = ({ data: e = [], isSkeleton: t, error: r, className: a = "" }) =>
    r || (!t && !e.length)
      ? u.createElement(
          "div",
          { className: a },
          r &&
            u.createElement(
              "pre",
              { className: "text-xs" },
              u.createElement("code", null, r.message)
            ),
          !t && !e.length && u.createElement(_e, null)
        )
      : null,
  Ie = ({ className: e = "h-full" }) =>
    u.createElement(
      "div",
      {
        className: `nc-Card18Skeleton group relative flex flex-col ${e}`,
        "data-nc-id": "Card18Skeleton",
      },
      u.createElement(
        "div",
        {
          className:
            "w-full block h-0 aspect-h-9 aspect-w-10 rounded-2xl overflow-hidden",
        },
        u.createElement(xe, {
          containerClassName: "absolute inset-0 ",
          src: ".",
        }),
        u.createElement(
          "div",
          null,
          u.createElement(Ce, {
            className: "absolute left-1.5 bottom-1.5",
            wrapSize: "w-8 h-8",
            iconSize: "w-4 h-4",
          })
        ),
        u.createElement("div", {
          className:
            "bg-transparent group-hover:bg-gray-900/30 transform transition-colors",
        })
      ),
      u.createElement(
        "div",
        { className: "absolute top-1.5 inset-x-1.5 flex justify-between " },
        u.createElement(p, { width: "40%" })
      ),
      u.createElement(
        "h2",
        { className: "block mt-2 font-medium text-sm" },
        u.createElement(p, { width: "80%" }),
        u.createElement(p, { width: "60%" })
      )
    ),
  Me = ({ domNode: e, menuItemData: t }) => {
    var r, a, n;
    const { ncmazMenuCustomFields: l } = t,
      [o, s] = m.exports.useState(
        null ==
          (a = null == (r = null == l ? void 0 : l.taxonomies) ? void 0 : r[0])
          ? void 0
          : a.categoryId
      ),
      {
        taxonomies: c,
        numberOfPosts: i,
        order: d,
        orderBy: p,
        showTabFilter: k,
      } = l;
    let b = {},
      h = [];
    (h = k ? [o] : (null == c ? void 0 : c.map((e) => e.categoryId)) || []),
      (b = { categoryIn: h, first: Number(i) });
    const v = g`
    ${"\n  query MyQuery(\n    $field: PostObjectsConnectionOrderbyEnum = DATE\n    $order: OrderEnum = DESC\n    $categoryIn: [ID] = []\n    $tagIn: [ID] = []\n    $authorIn: [ID] = []\n    $last: Int = null\n    $first: Int = 10\n    $before: String = null\n    $after: String = null\n  ) {\n    posts(\n      where: {\n        orderby: { field: $field, order: $order }\n        categoryIn: $categoryIn\n        tagIn: $tagIn\n        authorIn: $authorIn\n      }\n      last: $last\n      first: $first\n      before: $before\n      after: $after\n    ) {\n      edges {\n  node {\n    id\n    link\n    author {\n      node {\n        id\n        avatar {\n          url\n        }\n        url\n        uri\n        username\n        name\n        slug\n      }\n    }\n    categories {\n      edges {\n        node {\n          id\n          link\n          name\n          uri\n          slug\n          count\n          categoryId\n          ncTaxonomyMeta {\n            color\n            featuredImage {\n              sourceUrl\n            }\n          }\n        }\n      }\n    }\n    commentCount\n    date\n    excerpt\n    featuredImage {\n      node {\n        id\n        altText\n        caption\n        sourceUrl\n      }\n    }\n    postFormats {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n    postId\n    slug\n    title\n    ncmazVideoUrl {\n      fieldGroupName\n      videoUrl\n    }\n    ncmazAudioUrl {\n      fieldGroupName\n      audioUrl\n    }\n    ncPostMetaData {\n      favoriteButtonShortcode\n      readingTimeShortcode\n      viewsCount\n      fieldGroupName\n    }\n    ncmazGalleryImgs {\n      fieldGroupName\n      image1 {\n        id\n        sourceUrl\n      }\n      image2 {\n        id\n        sourceUrl\n      }\n      image3 {\n        id\n        sourceUrl\n      }\n      image4 {\n        id\n        sourceUrl\n      }\n      image5 {\n        id\n        sourceUrl\n      }\n      image6 {\n        id\n        sourceUrl\n      }\n      image7 {\n        id\n        sourceUrl\n      }\n      image8 {\n        id\n        sourceUrl\n      }\n    }\n  }\n}\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n"}
  `,
      {
        loading: y,
        error: x,
        data: C,
        fetchMore: w,
      } = f(v, { notifyOnNetworkStatusChange: !0, variables: b }),
      N = null == (n = null == C ? void 0 : C.posts) ? void 0 : n.pageInfo,
      S = (null == C ? void 0 : C.posts.edges) || [],
      L = y,
      _ = (e, { fetchMoreResult: t }) => {
        var r;
        return (
          null == (r = null == t ? void 0 : t.posts) ? void 0 : r.edges.length
        )
          ? t
          : e;
      },
      P = () => {
        const { taxonomies: e } = t.ncmazMenuCustomFields;
        return u.createElement(
          "div",
          { className: "w-1/5 py-8 flex-shrink-0  " },
          u.createElement(
            "div",
            { className: "flow-root" },
            u.createElement(
              "ul",
              { className: "" },
              (e || []).map((e) => {
                const t = e.categoryId === o;
                return u.createElement(
                  "li",
                  {
                    className:
                      "py-2.5 px-5 flex items-center !m-0 relative " +
                      (t ? "bg-neutral-100 dark:bg-neutral-800 " : ""),
                    key: e.categoryId,
                    onMouseEnter: () => {
                      s(e.categoryId);
                    },
                  },
                  t &&
                    u.createElement("span", {
                      className:
                        "absolute left-0 w-1 h-full top-0 bg-primary-500",
                    }),
                  e.name
                );
              })
            )
          )
        );
      },
      I = () =>
        u.createElement(
          "div",
          {
            className:
              "flex-grow " +
              (k ? "border-l border-neutral-200 dark:border-neutral-800" : ""),
          },
          u.createElement(
            "div",
            { className: "px-4 py-5 " },
            u.createElement(Pe, {
              className: "my-5",
              data: S,
              error: x,
              isSkeleton: L,
            }),
            L || S.length
              ? u.createElement(
                  "div",
                  {
                    className:
                      "grid gap-4 " + (k ? "grid-cols-4" : "grid-cols-5"),
                  },
                  L
                    ? Array.from(k ? "88888888" : "8888888888").map((e, t) =>
                        u.createElement(Ie, { key: t })
                      )
                    : S.map((e) =>
                        u.createElement(Ne, { post: e.node, key: e.node.id })
                      )
                )
              : null,
            (() => {
              if (
                !(null == N ? void 0 : N.hasPreviousPage) &&
                !(null == N ? void 0 : N.hasNextPage)
              )
                return null;
              let e =
                "w-10 h-10 bg-white dark:bg-neutral-900 border border-neutral-200 hover:border-neutral-300 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center  -- disabled:opacity-70 disabled:text-gray-500  disabled:cursor-default disabled:hover:border-neutral-200 dark:disabled:hover:border-neutral-6000";
              return u.createElement(
                "div",
                {
                  className:
                    "nc-NextPrev mt-8 ml-2 relative flex items-center justify-center text-neutral-900 dark:text-neutral-300 space-x-2.5 ",
                },
                u.createElement(
                  "button",
                  {
                    className: e,
                    disabled: !N.hasPreviousPage,
                    onClick: () => {
                      w({
                        variables: {
                          first: null,
                          after: null,
                          last: Number(i),
                          before: N.startCursor || null,
                        },
                        updateQuery: _,
                      });
                    },
                  },
                  u.createElement("i", { className: "las la-angle-left" })
                ),
                u.createElement(
                  "button",
                  {
                    className: e,
                    disabled: !N.hasNextPage,
                    onClick: () => {
                      w({
                        variables: {
                          first: Number(i),
                          after: N.endCursor || null,
                          last: null,
                          before: null,
                        },
                        updateQuery: _,
                      });
                    },
                  },
                  u.createElement("i", { className: "las la-angle-right" })
                )
              );
            })()
          )
        );
    return E.createPortal(
      u.createElement(
        "div",
        { className: "nc-megamenu-item absolute top-full py-3 -inset-x-10" },
        u.createElement(
          "div",
          {
            className:
              "w-full flex overflow-hidden rounded-2xl shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 ",
          },
          k && P(),
          I()
        )
      ),
      e
    );
  },
  Ae = document.querySelectorAll("[data-is-megamenu=true]"),
  je = () =>
    u.createElement(
      u.Fragment,
      null,
      u.createElement(ve, null),
      u.createElement(
        u.Fragment,
        null,
        Array.from(Ae).map((e, t) => {
          const r = e.getAttribute("data-graphql");
          return r && "null" !== r
            ? u.createElement(Me, {
                key: t,
                domNode: e,
                menuItemData: JSON.parse(r).menuItem,
              })
            : null;
        })
      )
    ),
  Te = [
    "#ffdd00",
    "#fbb034",
    "#ff4c4c",
    "#c1d82f",
    "#f48924",
    "#7ac143",
    "#30c39e",
    "#06BCAE",
    "#0695BC",
    "#037ef3",
    "#146eb4",
    "#8e43e7",
    "#ea1d5d",
    "#fc636b",
    "#ff6319",
    "#e01f3d",
    "#a0ac48",
    "#00d1b2",
    "#472f92",
    "#388ed1",
    "#a6192e",
    "#4a8594",
    "#7B9FAB",
    "#1393BD",
    "#5E13BD",
    "#E208A7",
  ],
  Oe = ({
    containerClassName: e = "ring-1 ring-white dark:ring-neutral-900",
    sizeClass: t = "h-6 w-6 text-base",
    radius: r = "rounded-md",
    imgUrl: a,
    userName: n,
  }) => {
    const l = a && !a.includes("gravatar.com/avatar/") ? a : "",
      o = n || "John Doe";
    return u.createElement(
      "div",
      {
        className: `wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner ${r} ${t} ${e}`,
        style: {
          backgroundColor: l
            ? void 0
            : ((e) => {
                const t = Math.floor(e.charCodeAt(0) % Te.length);
                return Te[t];
              })(o),
        },
      },
      l &&
        u.createElement("img", {
          className: "absolute inset-0 w-full h-full object-cover",
          src: l,
          alt: o,
        }),
      u.createElement("span", { className: "wil-avatar__name" }, o[0])
    );
  };
function ze(e, t) {
  return e
    ? e && e.includes("gravatar.com/avatar/")
      ? t || ""
      : e && !e.includes("gravatar.com/avatar/")
      ? e
      : void 0
    : t || "";
}
const Re = ({ data: e, footData: t }) => {
  var r;
  const { currentUser: a, homeURL: n } = frontendObject;
  return u.createElement(
    k,
    { as: "div", className: "relative inline-block text-left" },
    u.createElement(
      "div",
      null,
      u.createElement(
        k.Button,
        { className: "" },
        u.createElement(
          "div",
          {
            className:
              "flex-shrink-0 sm:w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ",
          },
          u.createElement(Oe, {
            imgUrl: ze(
              null == a ? void 0 : a.avatar.url,
              null == (l = null == a ? void 0 : a.ncUserMeta.featuredImage)
                ? void 0
                : l.sourceUrl
            ),
            userName: null == a ? void 0 : a.name,
            radius: "rounded-full",
            containerClassName:
              "ring-2 ring-neutral-200 dark:ring-neutral-700 ring-offset-2",
            sizeClass: "h-7 w-7 text-base ",
          })
        )
      )
    ),
    u.createElement(
      b,
      {
        as: m.exports.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
      },
      u.createElement(
        k.Items,
        {
          className:
            "absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-neutral-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-neutral-100  dark:divide-neutral-700 text-sm",
        },
        u.createElement(
          "div",
          { className: "px-1 py-2" },
          u.createElement(
            "a",
            {
              href: n + (null == a ? void 0 : a.uri),
              className: "px-3 py-2 flex items-center space-x-3",
            },
            u.createElement(Oe, {
              imgUrl: ze(
                null == a ? void 0 : a.avatar.url,
                null == (r = null == a ? void 0 : a.ncUserMeta.featuredImage)
                  ? void 0
                  : r.sourceUrl
              ),
              userName: null == a ? void 0 : a.name,
              radius: "rounded-full",
              sizeClass: "h-9 w-9 sm:h-10 sm:w-10 text-base",
            }),
            u.createElement(
              "div",
              { className: "flex flex-col justify-center text-sm truncate" },
              u.createElement(
                "span",
                {
                  className:
                    "text-base font-medium truncate capitalize leading-tight mb-0.5",
                },
                null == a ? void 0 : a.name
              ),
              u.createElement(
                "span",
                {
                  className:
                    "text-neutral-500 dark:text-neutral-400 truncate leading-tight",
                },
                null == a ? void 0 : a.ncUserMeta.ncBio
              )
            )
          )
        ),
        u.createElement(
          "div",
          { className: "px-1 py-2" },
          e.map((e) =>
            u.createElement(k.Item, { key: e.id }, ({ active: t }) =>
              u.createElement(
                "a",
                {
                  key: e.id,
                  href: e.href || "#",
                  className:
                    "flex items-center rounded-md w-full px-3 py-2 truncate " +
                    (t
                      ? "bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                      : ""),
                },
                u.createElement("i", {
                  className: `${e.icon} mr-1 w-7 text-lg`,
                }),
                u.createElement("span", null, e.name)
              )
            )
          )
        ),
        u.createElement(
          "div",
          { className: "px-1 py-2" },
          t.map((e) =>
            u.createElement(k.Item, { key: e.id }, ({ active: t }) =>
              u.createElement(
                "a",
                {
                  key: e.id,
                  href: e.href || "#",
                  className:
                    "flex items-center rounded-md w-full px-3 py-2 truncate " +
                    (t
                      ? "bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                      : ""),
                },
                u.createElement("i", {
                  className: `${e.icon} mr-1 w-7 text-lg`,
                }),
                u.createElement("span", null, e.name)
              )
            )
          )
        )
      )
    )
  );
  var l;
};
function De(e = !1) {
  return e
    ? "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
    : "focus:outline-none";
}
const Ve = ({
    className:
      e = `h-8 w-8 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center ${De()}`,
    iconClass: t = "h-[18px] w-[18px]",
    panelMenusClass: r = " w-56 top-0 right-0 origin-top-right",
    title: a = "More",
    renderTrigger: n,
    renderItem: l,
    data: o,
    onClick: s,
  }) =>
    u.createElement(
      k,
      { as: "div", className: "relative inline-block text-left" },
      u.createElement(
        k.Button,
        { className: e, title: a },
        n
          ? n()
          : u.createElement(h, {
              className: t,
              "aria-hidden": "true",
              stroke: "none",
              fill: "currentColor",
            })
      ),
      u.createElement(
        b,
        {
          as: m.exports.Fragment,
          enter: "transition ease-out duration-100",
          enterFrom: "transform opacity-0 scale-95",
          enterTo: "transform opacity-100 scale-100",
          leave: "transition ease-in duration-75",
          leaveFrom: "transform opacity-100 scale-100",
          leaveTo: "transform opacity-0 scale-95",
        },
        u.createElement(
          k.Items,
          {
            className: `absolute ${r} bg-white dark:bg-neutral-900 rounded-lg divide-y divide-neutral-100 shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 focus:outline-none z-40`,
          },
          u.createElement(
            "div",
            {
              className:
                "px-1 py-2.5 text-sm text-neutral-6000 dark:text-neutral-300",
            },
            o.map((e) =>
              u.createElement(
                k.Item,
                { key: e.id, onClick: () => s(e), "data-menu-item-id": e.id },
                ({ active: t }) =>
                  l
                    ? l(e, t)
                    : u.createElement(
                        "button",
                        {
                          className:
                            "flex items-center rounded-md w-full px-3 py-2  truncate " +
                            (t
                              ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                              : ""),
                        },
                        !!e.icon &&
                          u.createElement("i", {
                            className: `${e.icon} mr-1 w-7 text-base`,
                          }),
                        u.createElement(
                          "span",
                          { className: "truncate" },
                          e.name
                        )
                      )
              )
            )
          )
        )
      )
    ),
  Fe = [
    { id: "Facebook", name: "Facebook", icon: "lab la-facebook-f", href: "#" },
    { id: "Twitter", name: "Twitter", icon: "lab la-twitter", href: "#" },
    { id: "Linkedin", name: "Linkedin", icon: "lab la-linkedin-in", href: "#" },
    { id: "Pinterest", name: "Pinterest", icon: "lab la-Pinterest", href: "#" },
  ],
  $e = ({
    panelMenusClass: e = "w-52 right-0 bottom-0 origin-bottom-right",
    href: t = "/#",
    className:
      r = "nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-8 w-8",
  }) =>
    u.createElement(Ve, {
      className: r,
      panelMenusClass: e,
      title: "Share with",
      renderTrigger: () =>
        u.createElement(
          "div",
          null,
          u.createElement(
            "svg",
            { width: "24", height: "24", fill: "none", viewBox: "0 0 24 24" },
            u.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1",
              d: "M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75",
            }),
            u.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1",
              d: "M12 14.25L12 5",
            }),
            u.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1",
              d: "M8.75 8.25L12 4.75L15.25 8.25",
            })
          )
        ),
      renderItem: (e, r) =>
        u.createElement(
          "div",
          {
            className:
              "flex items-center rounded-md w-full  truncate " +
              (r
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                : ""),
          },
          ((e, r) => {
            switch (e.id) {
              case "Facebook":
                return u.createElement(
                  S,
                  {
                    className: "flex items-center space-x-3 !px-3 !py-2 ",
                    url: t,
                  },
                  u.createElement(L, { round: !0, size: 24 }),
                  u.createElement("span", null, "Facebook")
                );
              case "Twitter":
                return u.createElement(
                  w,
                  {
                    className: "flex items-center space-x-3 !px-3 !py-2 ",
                    url: t,
                  },
                  u.createElement(N, { round: !0, size: 24 }),
                  u.createElement("span", null, "Twitter")
                );
              case "Linkedin":
                return u.createElement(
                  x,
                  {
                    className: "flex items-center space-x-3 !px-3 !py-2 ",
                    url: t,
                  },
                  u.createElement(C, { round: !0, size: 24 }),
                  u.createElement("span", null, "Linkedin")
                );
              case "Pinterest":
                return u.createElement(
                  v,
                  {
                    media: "",
                    className: "flex items-center space-x-3 !px-3 !py-2 ",
                    url: t,
                  },
                  u.createElement(y, { round: !0, size: 24 }),
                  u.createElement("span", null, "Pinterest")
                );
              default:
                return null;
            }
          })(e)
        ),
      data: Fe,
      onClick: () => {},
    }),
  Be = u.forwardRef((e, t) => {
    var r = e,
      {
        className: a = "",
        sizeClass: n = "h-11 px-4 py-3",
        fontClass: l = "text-sm font-normal",
        rounded: o = "rounded-full",
        children: s,
        type: i = "text",
      } = r,
      m = d(r, [
        "className",
        "sizeClass",
        "fontClass",
        "rounded",
        "children",
        "type",
      ]);
    return u.createElement(
      "input",
      c(
        {
          ref: t,
          type: i,
          className: `block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ${o} ${l} ${n} ${a}`,
        },
        m
      )
    );
  }),
  Ue = () => {
    const e = u.createRef();
    return u.createElement(
      u.Fragment,
      null,
      u.createElement(_, { className: "relative" }, ({ open: t }) => {
        var r;
        return (
          t &&
            setTimeout(() => {
              var t;
              null == (t = e.current) || t.focus();
            }, 100),
          u.createElement(
            u.Fragment,
            null,
            u.createElement(
              _.Button,
              {
                className:
                  "text-2xl md:text-[28px] sm:w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center",
              },
              u.createElement("i", { className: "las la-search" })
            ),
            u.createElement(
              b,
              {
                show: t,
                as: m.exports.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
              },
              u.createElement(
                _.Panel,
                {
                  static: !0,
                  className: "absolute right-0 z-10 w-screen max-w-sm mt-3",
                },
                u.createElement(
                  "form",
                  {
                    role: "search",
                    method: "GET",
                    className: "search-form",
                    action:
                      null == (r = window.frontendObject) ? void 0 : r.homeURL,
                  },
                  u.createElement(Be, {
                    name: "s",
                    ref: e,
                    type: "search",
                    placeholder: "Type and press enter",
                  }),
                  u.createElement("input", {
                    type: "submit",
                    hidden: !0,
                    value: "",
                  })
                )
              )
            )
          )
        );
      })
    );
  },
  He = [
    { id: "Facebook", name: "Facebook", icon: "lab la-facebook-f" },
    { id: "Twitter", name: "Twitter", icon: "lab la-twitter" },
    { id: "Linkedin", name: "Linkedin", icon: "lab la-linkedin-in" },
    { id: "Pinterest", name: "Pinterest", icon: "lab la-Pinterest" },
  ],
  We = ({ className: e = "grid gap-[6px]", href: t = "#", size: r = 24 }) =>
    u.createElement(
      "div",
      { className: `nc-SocialsShare ${e}`, "data-nc-id": "SocialsShare" },
      He.map((e, a) => {
        switch (e.id) {
          case "Facebook":
            return u.createElement(
              S,
              { key: a, url: t, className: "hover:opacity-70" },
              u.createElement(L, { round: !0, size: r })
            );
          case "Twitter":
            return u.createElement(
              w,
              { key: a, url: t, className: "hover:opacity-70" },
              u.createElement(N, { round: !0, size: r })
            );
          case "Linkedin":
            return u.createElement(
              x,
              { key: a, url: t, className: "hover:opacity-70" },
              u.createElement(C, { round: !0, size: r })
            );
          case "Pinterest":
            return u.createElement(
              v,
              { media: "", key: a, url: t, className: "hover:opacity-70" },
              u.createElement(y, { round: !0, size: r })
            );
          default:
            return null;
        }
      })
    ),
  Ge = ({ className: e = "w-12 h-12" }) => {
    const [t, r] = m.exports.useState(
        "dark" === localStorage.theme ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      ),
      a = document.documentElement;
    m.exports.useEffect(() => {
      "dark" === localStorage.theme ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? a.classList.add("dark")
        : a.classList.remove("dark");
    }, [t]);
    return u.createElement(
      "button",
      {
        onClick: () => {
          (localStorage.theme = t ? "light" : "dark"), r(!t);
        },
        className: `text-2xl md:text-3xl rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ${e}`,
      },
      u.createElement("span", { className: "sr-only" }, "Enable dark mode"),
      t
        ? u.createElement(P, { className: "w-7 h-7", "aria-hidden": "true" })
        : u.createElement(I, { className: "w-7 h-7", "aria-hidden": "true" })
    );
  },
  qe = u.lazy(() =>
    Z(
      () => import("./HeaderSingleAudio.42a2c19a.js"),
      [
        "assets/HeaderSingleAudio.42a2c19a.js",
        "assets/vendor.9a2c2287.js",
        "assets/ButtonPlayMusicRunningContainer.b2da28f8.js",
        "assets/hooks.f7cf5f07.js",
      ]
    )
  ),
  Je = u.lazy(() =>
    Z(
      () => import("./HeaderSingleGallery.ea4e4fb2.js"),
      [
        "assets/HeaderSingleGallery.ea4e4fb2.js",
        "assets/vendor.9a2c2287.js",
        "assets/NextPrev.c3bc864e.js",
        "assets/ButtonClose.aae0ff03.js",
      ]
    )
  ),
  Ze = u.lazy(() =>
    Z(
      () => import("./HeaderSingleVideo.88c84605.js"),
      [
        "assets/HeaderSingleVideo.88c84605.js",
        "assets/vendor.9a2c2287.js",
        "assets/index.5582b8b7.js",
        "assets/NcPlayIcon.300a9c19.js",
      ]
    )
  ),
  Qe = u.lazy(() =>
    Z(
      () => import("./PageArchiveDate.e8386dd9.js"),
      [
        "assets/PageArchiveDate.e8386dd9.js",
        "assets/vendor.9a2c2287.js",
        "assets/PageArchive.ef76aced.js",
        "assets/Card11Skeleton.9874a2b5.js",
        "assets/ButtonClose.aae0ff03.js",
        "assets/ButtonPrimary.839293c7.js",
        "assets/Tag.08bd0998.js",
        "assets/Card11.49fe1e23.js",
        "assets/PostFeaturedMedia.7312d612.js",
        "assets/PostCardLikeAction.9db16b47.js",
        "assets/ncNanoId.3f36f1af.js",
        "assets/NextPrev.c3bc864e.js",
        "assets/hooks.f7cf5f07.js",
        "assets/index.5582b8b7.js",
        "assets/ButtonPlayMusicRunningContainer.b2da28f8.js",
        "assets/PostCardMeta.30568366.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/BackgroundSection.6c11eca0.js",
        "assets/SectionGridCategoryBox.61b7244a.js",
        "assets/CardCategory5Skeleton.f1b45035.js",
        "assets/Heading.dd3f8bc9.js",
      ]
    )
  ),
  Ye = u.lazy(() =>
    Z(
      () => import("./PageSearch.1a8dc93a.js"),
      [
        "assets/PageSearch.1a8dc93a.js",
        "assets/vendor.9a2c2287.js",
        "assets/PageArchive.ef76aced.js",
        "assets/Card11Skeleton.9874a2b5.js",
        "assets/ButtonClose.aae0ff03.js",
        "assets/ButtonPrimary.839293c7.js",
        "assets/Tag.08bd0998.js",
        "assets/Card11.49fe1e23.js",
        "assets/PostFeaturedMedia.7312d612.js",
        "assets/PostCardLikeAction.9db16b47.js",
        "assets/ncNanoId.3f36f1af.js",
        "assets/NextPrev.c3bc864e.js",
        "assets/hooks.f7cf5f07.js",
        "assets/index.5582b8b7.js",
        "assets/ButtonPlayMusicRunningContainer.b2da28f8.js",
        "assets/PostCardMeta.30568366.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/BackgroundSection.6c11eca0.js",
        "assets/SectionGridCategoryBox.61b7244a.js",
        "assets/CardCategory5Skeleton.f1b45035.js",
        "assets/Heading.dd3f8bc9.js",
        "assets/NavItem.184d2608.js",
        "assets/CardAuthorBox2Skeleton.070e14fd.js",
      ]
    )
  ),
  Ke = u.lazy(() =>
    Z(
      () => import("./SingleMoreFromAuthorGridPosts.4e2ce90b.js"),
      [
        "assets/SingleMoreFromAuthorGridPosts.4e2ce90b.js",
        "assets/vendor.9a2c2287.js",
        "assets/DataStatementBlock.74e96ad2.js",
        "assets/Heading.dd3f8bc9.js",
        "assets/NextPrev.c3bc864e.js",
        "assets/Card9.16f2c348.js",
        "assets/PostFeaturedMedia.7312d612.js",
        "assets/PostCardLikeAction.9db16b47.js",
        "assets/ncNanoId.3f36f1af.js",
        "assets/hooks.f7cf5f07.js",
        "assets/index.5582b8b7.js",
        "assets/ButtonPlayMusicRunningContainer.b2da28f8.js",
        "assets/formatDate.5c5d9c4d.js",
      ]
    )
  ),
  Xe = u.lazy(() =>
    Z(
      () => import("./SingleRelatedGridPosts.6aa8024b.js"),
      [
        "assets/SingleRelatedGridPosts.6aa8024b.js",
        "assets/vendor.9a2c2287.js",
        "assets/DataStatementBlock.74e96ad2.js",
        "assets/Heading.dd3f8bc9.js",
        "assets/NextPrev.c3bc864e.js",
        "assets/Card11.49fe1e23.js",
        "assets/PostFeaturedMedia.7312d612.js",
        "assets/PostCardLikeAction.9db16b47.js",
        "assets/ncNanoId.3f36f1af.js",
        "assets/hooks.f7cf5f07.js",
        "assets/index.5582b8b7.js",
        "assets/ButtonPlayMusicRunningContainer.b2da28f8.js",
        "assets/PostCardMeta.30568366.js",
        "assets/formatDate.5c5d9c4d.js",
      ]
    )
  ),
  et = u.lazy(() =>
    Z(
      () => import("./PageArchiveAuthor.6c044e62.js"),
      [
        "assets/PageArchiveAuthor.6c044e62.js",
        "assets/vendor.9a2c2287.js",
        "assets/ButtonPrimary.839293c7.js",
        "assets/Card11Skeleton.9874a2b5.js",
        "assets/PageArchive.ef76aced.js",
        "assets/ButtonClose.aae0ff03.js",
        "assets/Tag.08bd0998.js",
        "assets/Card11.49fe1e23.js",
        "assets/PostFeaturedMedia.7312d612.js",
        "assets/PostCardLikeAction.9db16b47.js",
        "assets/ncNanoId.3f36f1af.js",
        "assets/NextPrev.c3bc864e.js",
        "assets/hooks.f7cf5f07.js",
        "assets/index.5582b8b7.js",
        "assets/ButtonPlayMusicRunningContainer.b2da28f8.js",
        "assets/PostCardMeta.30568366.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/BackgroundSection.6c11eca0.js",
        "assets/SectionGridCategoryBox.61b7244a.js",
        "assets/CardCategory5Skeleton.f1b45035.js",
        "assets/Heading.dd3f8bc9.js",
        "assets/NavItem.184d2608.js",
      ]
    )
  ),
  tt = u.lazy(() =>
    Z(
      () =>
        import("./PageArchive.ef76aced.js").then(function (e) {
          return e.d;
        }),
      [
        "assets/PageArchive.ef76aced.js",
        "assets/vendor.9a2c2287.js",
        "assets/Card11Skeleton.9874a2b5.js",
        "assets/ButtonClose.aae0ff03.js",
        "assets/ButtonPrimary.839293c7.js",
        "assets/Tag.08bd0998.js",
        "assets/Card11.49fe1e23.js",
        "assets/PostFeaturedMedia.7312d612.js",
        "assets/PostCardLikeAction.9db16b47.js",
        "assets/ncNanoId.3f36f1af.js",
        "assets/NextPrev.c3bc864e.js",
        "assets/hooks.f7cf5f07.js",
        "assets/index.5582b8b7.js",
        "assets/ButtonPlayMusicRunningContainer.b2da28f8.js",
        "assets/PostCardMeta.30568366.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/BackgroundSection.6c11eca0.js",
        "assets/SectionGridCategoryBox.61b7244a.js",
        "assets/CardCategory5Skeleton.f1b45035.js",
        "assets/Heading.dd3f8bc9.js",
      ]
    )
  ),
  rt = document.querySelectorAll("[data-is-react-component] "),
  at = ({}) => {
    if (!rt || !rt.length) return null;
    return u.createElement(
      u.Fragment,
      null,
      Array.from(rt).map((e, t) => {
        const r = e.getAttribute("data-is-react-component");
        if (!e || !r) return null;
        let a = e.getAttribute("data-component-props")
          ? JSON.parse(e.getAttribute("data-component-props") || "")
          : {};
        switch (("object" != typeof a && (a = []), r)) {
          case "PostCardDropdownShare":
            return E.createPortal(u.createElement($e, c({}, a)), e);
          case "SocialsShare":
            return E.createPortal(u.createElement(We, c({}, a)), e);
          case "SingleRelatedGridPosts":
            return E.createPortal(
              u.createElement(
                m.exports.Suspense,
                { fallback: u.createElement("div", null) },
                u.createElement(Xe, c({}, a))
              ),
              e
            );
          case "SingleMoreFromAuthorGridPosts":
            return E.createPortal(
              u.createElement(
                m.exports.Suspense,
                { fallback: u.createElement("div", null) },
                u.createElement(Ke, c({}, a))
              ),
              e
            );
          case "HeaderSingleGallery":
            return E.createPortal(
              u.createElement(
                m.exports.Suspense,
                { fallback: u.createElement("div", null) },
                u.createElement(Je, c({}, a))
              ),
              e
            );
          case "HeaderSingleVideo":
            return E.createPortal(
              u.createElement(
                m.exports.Suspense,
                { fallback: u.createElement("div", null) },
                u.createElement(Ze, c({}, a))
              ),
              e
            );
          case "HeaderSingleAudio":
            return E.createPortal(
              u.createElement(
                m.exports.Suspense,
                { fallback: u.createElement("div", null) },
                u.createElement(qe, c({}, a))
              ),
              e
            );
          case "PageArchive":
            return E.createPortal(
              u.createElement(
                m.exports.Suspense,
                { fallback: u.createElement("div", null) },
                u.createElement(tt, c({}, a))
              ),
              e
            );
          case "PageArchiveDate":
            return E.createPortal(
              u.createElement(
                m.exports.Suspense,
                { fallback: u.createElement("div", null) },
                u.createElement(Qe, c({}, a))
              ),
              e
            );
          case "PageArchiveAuthor":
            return E.createPortal(
              u.createElement(
                m.exports.Suspense,
                { fallback: u.createElement("div", null) },
                u.createElement(et, c({}, a))
              ),
              e
            );
          case "PageSearch":
            return E.createPortal(
              u.createElement(
                m.exports.Suspense,
                { fallback: u.createElement("div", null) },
                u.createElement(Ye, c({}, a))
              ),
              e
            );
          case "SwitchDarkMode":
            return E.createPortal(u.createElement(Ge, c({}, a)), e);
          case "SearchDropdown":
            return E.createPortal(u.createElement(Ue, c({}, a)), e);
          case "NavAccountDropdown":
            return E.createPortal(u.createElement(Re, c({}, a)), e);
          default:
            return null;
        }
      })
    );
  },
  nt = u.lazy(() =>
    Z(
      () => import("./MediaRunningContainer.aafb8568.js"),
      [
        "assets/MediaRunningContainer.aafb8568.js",
        "assets/vendor.9a2c2287.js",
        "assets/hooks.f7cf5f07.js",
        "assets/index.5582b8b7.js",
        "assets/PostCardLikeAction.9db16b47.js",
      ]
    )
  );
function lt() {
  return u.createElement(
    u.Fragment,
    null,
    u.createElement(je, null),
    u.createElement(at, null),
    u.createElement(he, null),
    u.createElement(
      m.exports.Suspense,
      { fallback: u.createElement("div", null) },
      u.createElement(nt, null)
    )
  );
}
var ot = M({
  name: "bookmark",
  initialState: { recentSaved: [], recentRemoved: [] },
  reducers: {
    addNewSavedByPostId: (e, t) =>
      (e = i(c({}, e), {
        recentSaved: [...e.recentSaved, t.payload],
        recentRemoved: e.recentRemoved.filter((e) => e !== t.payload),
      })),
    removeSavedByPostId: (e, t) =>
      (e = i(c({}, e), {
        recentRemoved: [...e.recentSaved, t.payload],
        recentSaved: e.recentSaved.filter((e) => e !== t.payload),
      })),
  },
}).reducer;
var st = M({
  name: "postLike",
  initialState: { recentLiked: [], recentRemoved: [] },
  reducers: {
    addNewLikedByPostId: (e, t) =>
      (e = i(c({}, e), {
        recentLiked: [...e.recentLiked, t.payload],
        recentRemoved: e.recentRemoved.filter((e) => e !== t.payload),
      })),
    removeLikedByPostId: (e, t) =>
      (e = i(c({}, e), {
        recentRemoved: [...e.recentRemoved, t.payload],
        recentLiked: e.recentLiked.filter((e) => e !== t.payload),
      })),
  },
}).reducer;
var ct = M({
  name: "commentLike",
  initialState: { recentLiked: [], recentRemoved: [] },
  reducers: {
    addNewLikedByPostId: (e, t) =>
      (e = i(c({}, e), {
        recentLiked: [...e.recentLiked, t.payload],
        recentRemoved: e.recentRemoved.filter((e) => e !== t.payload),
      })),
    removeLikedByPostId: (e, t) =>
      (e = i(c({}, e), {
        recentRemoved: [...e.recentRemoved, t.payload],
        recentLiked: e.recentLiked.filter((e) => e !== t.payload),
      })),
  },
}).reducer;
var it = M({
  name: "darkmode",
  initialState: { isDarkMode: !1 },
  reducers: {
    toogleDarkMode: (e) => ({ isDarkMode: !e.isDarkMode }),
    enableDarkMode: () => ({ isDarkMode: !0 }),
    disableDarkMode: () => ({ isDarkMode: !1 }),
  },
}).reducer;
var dt = M({
  name: "pages",
  initialState: { currentPage: { type: "/", data: {} } },
  reducers: {
    changeCurrentPage: (e, t) => (e = i(c({}, e), { currentPage: t.payload })),
  },
}).reducer;
const ut = M({
    name: "mediaRunning",
    initialState: {},
    reducers: {
      changeCurrentMediaRunning: (e, t) => c(c({}, e), t.payload),
      changeStateMediaRunning: (e, t) => i(c({}, e), { state: t.payload }),
      removeMediaRunning: () => ({}),
    },
  }),
  {
    changeCurrentMediaRunning: mt,
    changeStateMediaRunning: pt,
    removeMediaRunning: gt,
  } = ut.actions,
  ft = (e) => e.mediaRunning;
const Et = j(
    { key: "root", version: 1, storage: z, whitelist: ["darkmode"] },
    A({
      bookmark: ot,
      postLike: st,
      darkmode: it,
      commentLikes: ct,
      pages: dt,
      mediaRunning: ut.reducer,
    })
  ),
  kt = [],
  bt = T({
    reducer: Et,
    middleware: (e) =>
      e({ serializableCheck: { ignoredActions: [R, D, V, F, $, B] } }).concat(
        kt
      ),
  });
let ht = O(bt);
if (
  (null == (e = window.frontendObject) ? void 0 : e.graphQLBasePath) &&
  !location.pathname.includes("/wp-admin/")
) {
  const e = new U({ typePolicies: { Query: { fields: {} } } }),
    t = new H({ uri: window.frontendObject.graphQLBasePath, cache: e });
  E.render(
    u.createElement(
      u.StrictMode,
      null,
      u.createElement(
        W,
        { store: bt },
        u.createElement(
          G,
          { loading: null, persistor: ht },
          u.createElement(q, { client: t }, u.createElement(lt, null))
        )
      )
    ),
    document.getElementById("root")
  );
}
export {
  Oe as A,
  we as B,
  Pe as D,
  _e as E,
  Be as I,
  xe as N,
  $e as P,
  We as S,
  Ce as a,
  Le as b,
  pt as c,
  mt as d,
  gt as r,
  ft as s,
  De as t,
};
