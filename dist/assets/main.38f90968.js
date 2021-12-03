var e,
  t = Object.defineProperty,
  n = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  o = (e, n, r) =>
    n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r),
  c = (e, t) => {
    for (var n in t || (t = {})) l.call(t, n) && o(e, n, t[n]);
    if (a) for (var n of a(t)) s.call(t, n) && o(e, n, t[n]);
    return e;
  },
  i = (e, t) => n(e, r(t)),
  d = (e, t) => {
    var n = {};
    for (var r in e) l.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (null != e && a)
      for (var r of a(e)) t.indexOf(r) < 0 && s.call(e, r) && (n[r] = e[r]);
    return n;
  };
import {
  R as m,
  r as u,
  S as E,
  g as p,
  u as g,
  a as f,
  M as h,
  T as b,
  D as v,
  E as k,
  b as y,
  H as x,
  c as w,
  I,
  d as C,
  P as _,
  e as N,
  W as S,
  f as L,
  L as M,
  h as $,
  i as z,
  j as P,
  V as T,
  k as A,
  l as R,
  m as O,
  n as U,
  o as D,
  p as j,
  q as V,
  s as B,
  t as F,
  O as G,
  v as W,
  w as H,
  x as q,
  y as Q,
  z as Y,
  A as Z,
  B as J,
  C as K,
  F as X,
  G as ee,
  J as te,
  K as ne,
  N as re,
  Q as ae,
  U as le,
  X as se,
  Y as oe,
  Z as ce,
  _ as ie,
  $ as de,
  a0 as me,
  a1 as ue,
  a2 as Ee,
  a3 as pe,
  a4 as ge,
  a5 as fe,
  a6 as he,
  a7 as be,
  a8 as ve,
  a9 as ke,
  aa as ye,
  ab as xe,
  ac as we,
  ad as Ie,
  ae as Ce,
  af as _e,
  ag as Ne,
  ah as Se,
} from "./vendor.3b208adb.js";
const Le = {},
  Me = function (e, t) {
    return t && 0 !== t.length
      ? Promise.all(
          t.map((e) => {
            if (
              (e = `${window.frontendObject.homeURL}/wp-content/plugins/ncmaz-frontend/dist/${e}`) in
              Le
            )
              return;
            Le[e] = !0;
            const t = e.endsWith(".css"),
              n = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${n}`)) return;
            const r = document.createElement("link");
            return (
              (r.rel = t ? "stylesheet" : "modulepreload"),
              t || ((r.as = "script"), (r.crossOrigin = "")),
              (r.href = e),
              document.head.appendChild(r),
              t
                ? new Promise((e, t) => {
                    r.addEventListener("load", e),
                      r.addEventListener("error", t);
                  })
                : void 0
            );
          })
        ).then(() => e())
      : e();
  },
  $e = m.lazy(() =>
    Me(
      () => import("./FactoryBlockMagazine.b3868139.js"),
      [
        "assets/FactoryBlockMagazine.b3868139.js",
        "assets/vendor.3b208adb.js",
        "assets/Heading.ac513da6.js",
        "assets/NextPrev.9a4e713f.js",
        "assets/Card10Skeleton.cdddadb1.js",
        "assets/Card11Skeleton.7709eb23.js",
        "assets/NavItem.9196150d.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/PostFeaturedMedia.51066710.js",
        "assets/PostCardLikeAction.b4c5e7c8.js",
        "assets/hooks.311923ab.js",
        "assets/index.1eeac341.js",
        "assets/ButtonPlayMusicRunningContainer.ddfdb527.js",
        "assets/BackgroundSection.30b8e4d0.js",
        "assets/PostCardMeta.594360a7.js",
        "assets/Card11.489c75a7.js",
        "assets/Card9.81ca4a17.js",
        "assets/Card15PodcastSkeleton.f9ffd53d.js",
      ]
    )
  ),
  ze = m.lazy(() =>
    Me(
      () => import("./FactoryBlockPostsGrid.9520fdf5.js"),
      [
        "assets/FactoryBlockPostsGrid.9520fdf5.js",
        "assets/vendor.3b208adb.js",
        "assets/Heading.ac513da6.js",
        "assets/NextPrev.9a4e713f.js",
        "assets/Card10Skeleton.cdddadb1.js",
        "assets/Card11Skeleton.7709eb23.js",
        "assets/NavItem.9196150d.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/PostFeaturedMedia.51066710.js",
        "assets/PostCardLikeAction.b4c5e7c8.js",
        "assets/hooks.311923ab.js",
        "assets/index.1eeac341.js",
        "assets/ButtonPlayMusicRunningContainer.ddfdb527.js",
        "assets/BackgroundSection.30b8e4d0.js",
        "assets/Card14Skeleton.330292cf.js",
        "assets/Card9.81ca4a17.js",
        "assets/Card11.489c75a7.js",
        "assets/PostCardMeta.594360a7.js",
        "assets/Card15PodcastSkeleton.f9ffd53d.js",
        "assets/ButtonPrimary.02853f4e.js",
      ]
    )
  ),
  Pe = m.lazy(() =>
    Me(
      () => import("./FactoryBlockPostsSlider.86fd81a4.js"),
      [
        "assets/FactoryBlockPostsSlider.86fd81a4.js",
        "assets/vendor.3b208adb.js",
        "assets/Heading.ac513da6.js",
        "assets/NextPrev.9a4e713f.js",
        "assets/Card10Skeleton.cdddadb1.js",
        "assets/Card11Skeleton.7709eb23.js",
        "assets/NavItem.9196150d.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/PostFeaturedMedia.51066710.js",
        "assets/PostCardLikeAction.b4c5e7c8.js",
        "assets/hooks.311923ab.js",
        "assets/index.1eeac341.js",
        "assets/ButtonPlayMusicRunningContainer.ddfdb527.js",
        "assets/BackgroundSection.30b8e4d0.js",
        "assets/glide.esm.699249e3.js",
        "assets/ncNanoId.f7ff4ede.js",
        "assets/Card14Skeleton.330292cf.js",
        "assets/Card9.81ca4a17.js",
        "assets/Card11.489c75a7.js",
        "assets/PostCardMeta.594360a7.js",
      ]
    )
  ),
  Te = m.lazy(() =>
    Me(
      () => import("./FactoryBlockTermsSlider.6d1a902b.js"),
      [
        "assets/FactoryBlockTermsSlider.6d1a902b.js",
        "assets/vendor.3b208adb.js",
        "assets/BackgroundSection.30b8e4d0.js",
        "assets/Heading.ac513da6.js",
        "assets/NextPrev.9a4e713f.js",
        "assets/glide.esm.699249e3.js",
        "assets/ncNanoId.f7ff4ede.js",
        "assets/CardCategory5Skeleton.03f5b4c8.js",
      ]
    )
  ),
  Ae = m.lazy(() =>
    Me(
      () => import("./FactoryBlockTermsGrid.6d313956.js"),
      [
        "assets/FactoryBlockTermsGrid.6d313956.js",
        "assets/vendor.3b208adb.js",
        "assets/BackgroundSection.30b8e4d0.js",
        "assets/SectionGridCategoryBox.bca2b1ec.js",
        "assets/CardCategory1Skeleton.f0f23bbe.js",
        "assets/CardCategory5Skeleton.03f5b4c8.js",
        "assets/Heading.ac513da6.js",
        "assets/NextPrev.9a4e713f.js",
      ]
    )
  ),
  Re = m.lazy(() =>
    Me(
      () => import("./FactoryBlockUsersSlider.38c9528e.js"),
      [
        "assets/FactoryBlockUsersSlider.38c9528e.js",
        "assets/vendor.3b208adb.js",
        "assets/BackgroundSection.30b8e4d0.js",
        "assets/Heading.ac513da6.js",
        "assets/NextPrev.9a4e713f.js",
        "assets/glide.esm.699249e3.js",
        "assets/ncNanoId.f7ff4ede.js",
        "assets/CardAuthorBox2Skeleton.f7a0ddbf.js",
        "assets/CardAuthorBoxSkeleton.65c16425.js",
      ]
    )
  ),
  Oe = m.lazy(() =>
    Me(
      () => import("./FactoryBlockUsersGrid.d00eb587.js"),
      [
        "assets/FactoryBlockUsersGrid.d00eb587.js",
        "assets/vendor.3b208adb.js",
        "assets/BackgroundSection.30b8e4d0.js",
        "assets/CardAuthorBoxSkeleton.65c16425.js",
        "assets/CardAuthorBox2Skeleton.f7a0ddbf.js",
        "assets/Heading.ac513da6.js",
        "assets/NextPrev.9a4e713f.js",
      ]
    )
  ),
  Ue = m.lazy(() =>
    Me(
      () => import("./FactoryBlockVideos.4f093d60.js"),
      [
        "assets/FactoryBlockVideos.4f093d60.js",
        "assets/vendor.3b208adb.js",
        "assets/BackgroundSection.30b8e4d0.js",
        "assets/Heading.ac513da6.js",
        "assets/NextPrev.9a4e713f.js",
        "assets/NcPlayIcon.a2df5b79.js",
      ]
    )
  ),
  De = m.lazy(() =>
    Me(
      () => import("./FactoryBlockWidgetPosts.3c1d1029.js"),
      [
        "assets/FactoryBlockWidgetPosts.3c1d1029.js",
        "assets/vendor.3b208adb.js",
        "assets/PostCardMeta.594360a7.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/WidgetHeading1.4495dbd0.js",
      ]
    )
  ),
  je = m.lazy(() =>
    Me(
      () => import("./FactoryBlockWidgetUsers.17b10cb8.js"),
      [
        "assets/FactoryBlockWidgetUsers.17b10cb8.js",
        "assets/vendor.3b208adb.js",
        "assets/WidgetHeading1.4495dbd0.js",
      ]
    )
  ),
  Ve = m.lazy(() =>
    Me(
      () => import("./FactoryBlockWidgetTerms.9cfc4364.js"),
      [
        "assets/FactoryBlockWidgetTerms.9cfc4364.js",
        "assets/vendor.3b208adb.js",
        "assets/CardCategory1Skeleton.f0f23bbe.js",
        "assets/Tag.8ef71625.js",
        "assets/WidgetHeading1.4495dbd0.js",
      ]
    )
  ),
  Be = document.querySelectorAll("[data-nc-gutenberg-section=true]"),
  Fe = () => {
    let e = 0;
    return m.createElement(
      m.Fragment,
      null,
      Array.from(Be).map((t, n) => {
        const r = t.getAttribute("data-nc-gutenberg-section-api");
        if (!r) return null;
        const a = JSON.parse(r),
          l = t.getAttribute("data-nc-gutenberg-section-type") || "";
        return "block-magazine" === l
          ? ((e += 1),
            m.createElement(
              u.exports.Suspense,
              { key: n, fallback: m.createElement("div", null) },
              m.createElement($e, {
                key: n,
                sectionIndex: e,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-posts-slider" === l
          ? ((e += 1),
            m.createElement(
              u.exports.Suspense,
              { key: n, fallback: m.createElement("div", null) },
              m.createElement(Pe, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-posts-grid" === l
          ? ((e += 1),
            m.createElement(
              u.exports.Suspense,
              { key: n, fallback: m.createElement("div", null) },
              m.createElement(ze, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-terms-slider" === l
          ? ((e += 1),
            m.createElement(
              u.exports.Suspense,
              { key: n, fallback: m.createElement("div", null) },
              m.createElement(Te, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-terms-grid" === l
          ? ((e += 1),
            m.createElement(
              u.exports.Suspense,
              { key: n, fallback: m.createElement("div", null) },
              m.createElement(Ae, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-users-slider" === l
          ? ((e += 1),
            m.createElement(
              u.exports.Suspense,
              { key: n, fallback: m.createElement("div", null) },
              m.createElement(Re, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-users-grid" === l
          ? ((e += 1),
            m.createElement(
              u.exports.Suspense,
              { key: n, fallback: m.createElement("div", null) },
              m.createElement(Oe, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-videos" === l
          ? m.createElement(
              u.exports.Suspense,
              { key: n, fallback: m.createElement("div", null) },
              m.createElement(Ue, { key: n, domNode: t, apiSettings: a })
            )
          : "block-widget-posts" === l
          ? ((e += 1),
            m.createElement(
              u.exports.Suspense,
              { key: n, fallback: m.createElement("div", null) },
              m.createElement(De, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-widget-users" === l
          ? ((e += 1),
            m.createElement(
              u.exports.Suspense,
              { key: n, fallback: m.createElement("div", null) },
              m.createElement(je, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-widget-terms" === l
          ? ((e += 1),
            m.createElement(
              u.exports.Suspense,
              { key: n, fallback: m.createElement("div", null) },
              m.createElement(Ve, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : null;
      })
    );
  };
const Ge = () => {
    const e = document.querySelector(".nc-Header"),
      t = document.querySelector(".nc-Header__MainNav1"),
      n = document.querySelector(".nc-Header__MainNav1 .nc-MainNav1"),
      r = document.querySelector(".nc-SingleHeaderMenu"),
      a = document.querySelector(".nc-SingleHeaderMenu__progress-bar");
    let l = document.querySelector("#wpadminbar");
    const s = (function () {
      const [e, t] = u.exports.useState({ width: 0, height: 0 });
      return (
        u.exports.useEffect(() => {
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
    l = s.width <= 600 ? null : document.querySelector("#wpadminbar");
    let o = window.pageYOffset;
    const c = !!r,
      [i, d] = u.exports.useState(!1),
      [m, E] = u.exports.useState(!0);
    u.exports.useEffect(() => {
      r && (r.style.display = i ? "block" : "none");
    }, [i]),
      u.exports.useEffect(() => {
        n &&
          (m &&
            !n.classList.contains("onTop") &&
            (n.classList.remove("notOnTop"), n.classList.add("onTop")),
          m ||
            n.classList.contains("notOnTop") ||
            (n.classList.remove("onTop"), n.classList.add("notOnTop")));
      }, [m]),
      u.exports.useEffect(() => {
        if (!t) return;
        let e = t.offsetHeight;
        l && (e -= l.offsetHeight),
          (window.onscroll = function () {
            g(e);
          });
      }, [s.width]),
      u.exports.useEffect(() => {
        c
          ? setTimeout(() => {
              window.addEventListener("scroll", p);
            }, 200)
          : window.removeEventListener("scroll", p);
      }, [c]);
    const p = () => {
        (() => {
          const e = document.querySelector("#ncmaz-single-entry-content");
          if (!c || !e) return;
          const t = e.offsetTop + e.offsetHeight;
          let n =
            ((document.body.scrollTop || document.documentElement.scrollTop) /
              t) *
            100;
          !a || n > 140 || ((n = n > 100 ? 100 : n), (a.style.width = n + "%"));
        })();
        let e = document.body.scrollTop || document.documentElement.scrollTop;
        d(e > 200);
      },
      g = (n) => {
        let r = window.pageYOffset;
        e &&
          t &&
          (E(o < r ? !(r > n) : !(r > 0)),
          (e.style.top =
            o > r ? (l ? `${l.offsetHeight}px` : "0") : `-${n + 2}px`),
          (o = r));
      };
    return null;
  },
  We = () =>
    m.createElement(
      "svg",
      {
        className: "w-full h-full",
        viewBox: "0 0 197 193",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      m.createElement("path", {
        d: "M145.828 48.9822C134.953 48.9822 126.105 57.8301 126.105 68.7051C126.105 79.5801 134.953 88.428 145.828 88.428C156.703 88.428 165.551 79.5805 165.551 68.7051C165.551 57.8293 156.704 48.9822 145.828 48.9822ZM145.828 80.7741C139.173 80.7741 133.759 75.3602 133.759 68.7051C133.759 62.0501 139.173 56.6361 145.828 56.6361C152.483 56.6361 157.897 62.0501 157.897 68.7051C157.897 75.3594 152.483 80.7741 145.828 80.7741Z",
        fill: "currentColor",
      }),
      m.createElement("path", {
        d: "M145.963 171.49C145.867 171.256 145.748 171.034 145.611 170.828C145.473 170.617 145.312 170.422 145.136 170.246C144.96 170.07 144.765 169.909 144.554 169.771C144.348 169.634 144.126 169.515 143.892 169.419C143.663 169.324 143.422 169.247 143.177 169.201C142.683 169.102 142.178 169.102 141.684 169.201C141.439 169.247 141.198 169.324 140.969 169.419C140.735 169.515 140.513 169.634 140.306 169.771C140.096 169.909 139.901 170.07 139.725 170.246C139.549 170.422 139.388 170.617 139.25 170.828C139.112 171.034 138.994 171.256 138.898 171.49C138.802 171.719 138.726 171.96 138.68 172.205C138.63 172.45 138.603 172.703 138.603 172.952C138.603 173.2 138.63 173.453 138.68 173.698C138.726 173.943 138.802 174.184 138.898 174.413C138.994 174.647 139.112 174.869 139.25 175.075C139.388 175.286 139.549 175.481 139.725 175.657C139.812 175.745 139.905 175.829 140.001 175.908C140.099 175.987 140.201 176.063 140.306 176.132C140.513 176.269 140.735 176.388 140.969 176.484C141.198 176.579 141.439 176.656 141.684 176.702C141.929 176.752 142.182 176.778 142.43 176.778C142.679 176.778 142.932 176.752 143.177 176.702C143.422 176.656 143.663 176.579 143.892 176.484C144.126 176.388 144.348 176.269 144.554 176.132C144.66 176.062 144.762 175.987 144.859 175.908C144.956 175.829 145.048 175.745 145.136 175.657C145.312 175.481 145.473 175.286 145.611 175.075C145.748 174.869 145.867 174.647 145.963 174.413C146.058 174.184 146.135 173.943 146.185 173.698C146.234 173.453 146.257 173.2 146.257 172.952C146.257 172.703 146.234 172.45 146.185 172.205C146.135 171.96 146.058 171.719 145.963 171.49Z",
        fill: "currentColor",
      }),
      m.createElement("path", {
        d: "M85.7341 20.0459C85.6384 19.8163 85.5198 19.5943 85.382 19.3838C85.2442 19.1772 85.0835 18.9782 84.9075 18.8021C84.7314 18.6261 84.5363 18.4653 84.3258 18.3276C84.1191 18.1898 83.8972 18.0712 83.6637 17.9755C83.4341 17.8798 83.193 17.8071 82.9481 17.7574C82.4544 17.6579 81.9492 17.6579 81.4556 17.7574C81.2106 17.8071 80.9695 17.8798 80.7361 17.9755C80.5065 18.0712 80.2845 18.1898 80.0779 18.3276C79.8674 18.4653 79.6722 18.6261 79.4962 18.8021C79.3201 18.9782 79.1594 19.1772 79.0178 19.3838C78.88 19.5943 78.7652 19.8163 78.6696 20.0459C78.5739 20.2755 78.4973 20.5166 78.4514 20.7615C78.4017 21.0103 78.3749 21.259 78.3749 21.5116C78.3749 21.7603 78.4017 22.0091 78.4514 22.2579C78.4973 22.5028 78.5739 22.7439 78.6696 22.9735C78.7652 23.2031 78.88 23.4251 79.0178 23.6356C79.1594 23.8422 79.3201 24.0412 79.4962 24.2172C79.6722 24.3933 79.8674 24.554 80.0779 24.6918C80.2845 24.8296 80.5065 24.9482 80.7361 25.0439C80.9695 25.1395 81.2106 25.2123 81.4556 25.262C81.7005 25.3118 81.9531 25.3385 82.2018 25.3385C82.4506 25.3385 82.7032 25.3118 82.9481 25.262C83.193 25.2123 83.4341 25.1395 83.6637 25.0439C83.8972 24.9482 84.1191 24.8296 84.3258 24.6918C84.5363 24.554 84.7314 24.3933 84.9075 24.2172C85.0835 24.0412 85.2442 23.8422 85.382 23.6356C85.5198 23.4251 85.6384 23.2031 85.7341 22.9735C85.8298 22.7439 85.9063 22.5028 85.9522 22.2579C86.002 22.0091 86.0288 21.7603 86.0288 21.5116C86.0288 21.259 86.002 21.0103 85.9522 20.7615C85.9063 20.5166 85.8298 20.2755 85.7341 20.0459Z",
        fill: "currentColor",
      }),
      m.createElement("path", {
        d: "M175.008 17.6988C172.714 7.99787 163.987 0.755371 153.594 0.755371H33.522C15.2866 0.754988 0.450684 15.5909 0.450684 33.8263V153.899C0.450684 165.824 9.98628 175.557 21.8326 175.891C24.1272 185.592 32.8542 192.835 43.2467 192.835H174.382C186.517 192.835 196.39 182.962 196.39 170.826V141.949V39.6911C196.39 27.7663 186.855 18.0329 175.008 17.6988ZM188.736 170.827C188.736 178.742 182.297 185.182 174.382 185.182H43.2467C37.1197 185.182 31.8799 181.322 29.8236 175.908C29.2232 174.327 28.8918 172.615 28.8918 170.827V168.254V150.524L72.7964 76.0808C74.1332 73.8144 76.517 72.4911 79.1323 72.5332C81.7633 72.5783 84.0851 73.9844 85.3434 76.2955L104.247 111.007L131.725 161.462C132.419 162.737 133.733 163.459 135.089 163.459C135.708 163.459 136.335 163.309 136.916 162.993C138.772 161.982 139.458 159.657 138.447 157.801L129.53 141.428C133.445 141.608 137.296 140.341 140.362 137.797L157.572 123.52C160.332 121.23 164.408 121.331 167.051 123.755L167.95 124.578L175.604 131.594L188.736 143.632V170.827ZM188.736 133.249L175.603 121.21L167.95 115.382C162.963 113.297 157.033 114.022 152.685 117.629L135.475 131.906C133.582 133.476 131.111 134.111 128.695 133.646C126.28 133.183 124.22 131.677 123.043 129.517L110.969 107.345L104.226 94.9648V94.9644L92.0655 72.6342C89.4716 67.8716 84.6856 64.9727 79.2632 64.8801C73.8423 64.7951 68.9588 67.521 66.2037 72.1922L28.8914 135.457V39.6911C28.8914 31.7758 35.331 25.3362 43.2463 25.3362H66.8937C69.0074 25.3362 70.7207 23.6229 70.7207 21.5093C70.7207 19.3957 69.0074 17.6823 66.8937 17.6823H43.2463C31.1106 17.6823 21.2375 27.5555 21.2375 39.6911V149.479V168.198C13.8924 167.575 8.10458 161.402 8.10458 153.899V33.8263C8.10458 19.8109 19.507 8.40888 33.522 8.40888H153.594C159.721 8.40888 164.961 12.2684 167.017 17.6827H97.5093C95.3957 17.6827 93.6824 19.396 93.6824 21.5097C93.6824 23.6233 95.3957 25.3366 97.5093 25.3366H167.949L175.603 25.3925C182.949 26.0147 188.736 32.1876 188.736 39.6911V133.249Z",
        fill: "currentColor",
      })
    ),
  He = (e) => {
    var t = e,
      {
        containerClassName: n = "",
        alt: r = "nc-imgs",
        src: a = "",
        className: l = "object-cover w-full h-full",
      } = t,
      s = d(t, ["containerClassName", "alt", "src", "className"]);
    let o = !1;
    const i = u.exports.useRef(null);
    let E = null;
    const [p, g] = u.exports.useState(""),
      [f, h] = u.exports.useState(!1),
      b = () => {
        i.current &&
          (({
            target: e,
            options: t = { root: null, rootMargin: "0%", threshold: 0 },
            callback: n,
            freezeOnceVisible: r = !1,
          }) => {
            if (void 0 === window.IntersectionObserver)
              return void console.error(
                "window.IntersectionObserver === undefined! => Your Browser is Notsupport"
              );
            const a = new IntersectionObserver((e, t) => {
              e.map(
                (e) => (
                  e.isIntersecting && (n(), r && t.unobserve(e.target)), !0
                )
              );
            }, t);
            e && a.observe(e);
          })({
            target: i.current,
            options: { root: null, rootMargin: "0%", threshold: 0 },
            freezeOnceVisible: !0,
            callback: v,
          });
      },
      v = () =>
        a
          ? ((E = new Image()),
            E && ((E.src = a), E.addEventListener("load", k)),
            !0)
          : (k(), !0),
      k = () => {
        o && (h(!0), g(a));
      };
    u.exports.useEffect(
      () => (
        (o = !0),
        (async () => {
          b();
        })(),
        () => {
          o = !1;
        }
      ),
      [a]
    );
    return m.createElement(
      "div",
      { className: `nc-NcImage ${n}`, "data-nc-id": "NcImage", ref: i },
      p && f
        ? m.createElement("img", c({ src: p, className: l, alt: r }, s))
        : m.createElement(
            "div",
            {
              className: `${l} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`,
            },
            m.createElement(
              "div",
              { className: "h-2/4 max-w-[50%]" },
              m.createElement(We, null)
            )
          )
    );
  },
  qe = ({
    className: e = "",
    postType: t = "Standard",
    onClick: n,
    wrapSize: r = "w-11 h-11",
    iconSize: a = "w-6 h-6",
  }) =>
    m.createElement(
      "div",
      {
        className: `nc-PostTypeFeaturedIcon ${e}`,
        "data-nc-id": "PostTypeFeaturedIcon",
        onClick: n,
      },
      !!t &&
        "Standard" !== t &&
        m.createElement(
          "span",
          {
            className: `bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white ${r}`,
          },
          "post-format-video" === t
            ? m.createElement(
                "svg",
                {
                  className: a,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                m.createElement("path", {
                  d: "M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              )
            : "post-format-audio" === t
            ? m.createElement(
                "svg",
                {
                  className: a,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                m.createElement("path", {
                  d: "M6.28016 22C8.00328 22 9.40016 20.6031 9.40016 18.88C9.40016 17.1569 8.00328 15.76 6.28016 15.76C4.55703 15.76 3.16016 17.1569 3.16016 18.88C3.16016 20.6031 4.55703 22 6.28016 22Z",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                m.createElement("path", {
                  d: "M20.8404 7.96009V4.60009C20.8404 2.00009 19.2104 1.64009 17.5604 2.09009L11.3204 3.79009C10.1804 4.10009 9.40039 5.00009 9.40039 6.30009V8.47009V9.93009V18.8701",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                m.createElement("path", {
                  d: "M20.8398 16.8V12",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                m.createElement("path", {
                  d: "M17.7196 19.9199C19.4427 19.9199 20.8396 18.5231 20.8396 16.7999C20.8396 15.0768 19.4427 13.6799 17.7196 13.6799C15.9965 13.6799 14.5996 15.0768 14.5996 16.7999C14.5996 18.5231 15.9965 19.9199 17.7196 19.9199Z",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                m.createElement("path", {
                  d: "M9.40039 9.5199L20.8404 6.3999",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              )
            : "post-format-gallery" === t
            ? m.createElement(
                "svg",
                {
                  className: a,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                m.createElement("path", {
                  d: "M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                m.createElement("path", {
                  d: "M11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                m.createElement("path", {
                  d: "M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              )
            : m.createElement(
                "svg",
                { className: a, fill: "none", viewBox: "0 0 24 24" },
                m.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M18.2813 12.0313L11.9687 5.7187C11.4896 5.23964 10.6829 5.36557 10.3726 5.96785L6.75 13L11 17.25L18.0321 13.6274C18.6344 13.3171 18.7604 12.5104 18.2813 12.0313Z",
                }),
                m.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M4.75 19.25L8.5 15.5",
                }),
                m.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M13.75 7.25L16.25 4.75",
                }),
                m.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M16.75 10.25L19.25 7.75",
                })
              )
        )
    ),
  Qe = ({ className: e = "relative", name: t, color: n = "blue", href: r }) => {
    const a = (e = !0) => {
        switch (n) {
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
    return r
      ? m.createElement(
          "a",
          {
            href: r || "",
            className: `transition-colors hover:text-white duration-300 ${l} ${a()}`,
          },
          t
        )
      : m.createElement("span", { className: `${l} ${a(!1)} ${e}` }, t);
  },
  Ye = ({ className: e = "h-full", post: t }) => {
    var n, r, a, l, s, o, c;
    const {
        link: i,
        categories: d,
        title: u,
        featuredImage: E,
        postFormats: p,
      } = t,
      g = null == (n = null == p ? void 0 : p.edges[0]) ? void 0 : n.node.slug;
    return m.createElement(
      "div",
      {
        className: `nc-Card18 group relative flex flex-col ${e}`,
        "data-nc-id": "Card18",
      },
      m.createElement(
        "div",
        {
          className:
            "w-full block h-0 aspect-h-9 aspect-w-10 rounded-2xl overflow-hidden",
        },
        m.createElement(He, {
          containerClassName: "absolute inset-0 ",
          src: (null == E ? void 0 : E.node.sourceUrl) || ".",
          alt: u,
        }),
        m.createElement(
          "div",
          null,
          m.createElement(qe, {
            className: "absolute left-1.5 bottom-1.5",
            postType: g,
            wrapSize: "w-8 h-8",
            iconSize: "w-4 h-4",
          })
        ),
        m.createElement("div", {
          className:
            "bg-transparent group-hover:bg-gray-900/30 transform transition-colors",
        })
      ),
      m.createElement(
        "div",
        { className: "absolute top-1.5 inset-x-1.5 flex justify-between " },
        m.createElement(Qe, {
          className: "relative z-10",
          name:
            null ==
            (a =
              null == (r = null == d ? void 0 : d.edges[0]) ? void 0 : r.node)
              ? void 0
              : a.name,
          href:
            null ==
            (s =
              null == (l = null == d ? void 0 : d.edges[0]) ? void 0 : l.node)
              ? void 0
              : s.link,
          color:
            null ==
            (c =
              null == (o = null == d ? void 0 : d.edges[0]) ? void 0 : o.node)
              ? void 0
              : c.ncTaxonomyMeta.color,
        })
      ),
      m.createElement(
        "h3",
        { className: "block mt-2 font-medium text-sm" },
        m.createElement("span", {
          className: "line-clamp-2",
          dangerouslySetInnerHTML: { __html: u },
        })
      ),
      m.createElement("a", { href: i, className: "absolute inset-0" })
    );
  };
let Ze = {
  nothingWeFound: "Nothing we found!",
  all: "All",
  viewAll: "View All",
  articles: "Articles",
  showMeMore: "Show me more",
  showAllPhotos: "Show all photos",
  relatedPosts: "Related Posts",
  moreFromAuthor: "More from author",
  ThistrackwasnotfoundMaybeitHasBeenRemoved:
    "This track was not found. Maybe it has been removed!",
  mostRecent: "Most Recent",
  mostLiked: "Most Liked",
  mostDiscussed: "Most Discussed",
  mostViewed: "Most Viewed",
  typeAndPressEnter: "Type and press enter",
  next: "Next",
  prev: "Prev",
};
try {
  if (
    frontendObject.frontendTranslate &&
    "string" == typeof frontendObject.frontendTranslate
  ) {
    const e = JSON.parse(frontendObject.frontendTranslate);
    e && "object" == typeof e && (Ze = c(c({}, Ze), e));
  }
} catch (sn) {
  console.warn("----translate frontend file error ----", sn);
}
var Je = Ze;
const Ke = () =>
    m.createElement(
      "div",
      {
        className:
          "inline-flex flex-col items-center justify-center text-center",
      },
      m.createElement("img", {
        src: ncmazFrontendVariables.emptyStatePng,
        className: "w-36 sm:w-40",
        alt: "empty state",
      }),
      m.createElement(
        "span",
        { className: "text-sm block text-neutral-500" },
        Je.nothingWeFound
      )
    ),
  Xe = ({ data: e = [], isSkeleton: t, error: n, className: r = "" }) =>
    n || (!t && !e.length)
      ? m.createElement(
          "div",
          { className: r },
          n &&
            m.createElement(
              "pre",
              { className: "text-xs" },
              m.createElement("code", null, n.message)
            ),
          !t && !e.length && m.createElement(Ke, null)
        )
      : null,
  et = ({ className: e = "h-full" }) =>
    m.createElement(
      "div",
      {
        className: `nc-Card18Skeleton group relative flex flex-col ${e}`,
        "data-nc-id": "Card18Skeleton",
      },
      m.createElement(
        "div",
        {
          className:
            "w-full block h-0 aspect-h-9 aspect-w-10 rounded-2xl overflow-hidden",
        },
        m.createElement(He, {
          containerClassName: "absolute inset-0 ",
          src: ".",
        }),
        m.createElement(
          "div",
          null,
          m.createElement(qe, {
            className: "absolute left-1.5 bottom-1.5",
            wrapSize: "w-8 h-8",
            iconSize: "w-4 h-4",
          })
        ),
        m.createElement("div", {
          className:
            "bg-transparent group-hover:bg-gray-900/30 transform transition-colors",
        })
      ),
      m.createElement(
        "div",
        { className: "absolute top-1.5 inset-x-1.5 flex justify-between " },
        m.createElement(E, { width: "40%" })
      ),
      m.createElement(
        "h3",
        { className: "block mt-2 font-medium text-sm" },
        m.createElement(E, { width: "80%" }),
        m.createElement(E, { width: "60%" })
      )
    );
function tt(
  e,
  {
    threshold: t = 0,
    root: n = null,
    rootMargin: r = "0%",
    freezeOnceVisible: a = !1,
  }
) {
  const [l, s] = u.exports.useState(),
    o = (null == l ? void 0 : l.isIntersecting) && a,
    c = ([e]) => {
      s(e);
    };
  return (
    u.exports.useEffect(() => {
      const a = null == e ? void 0 : e.current;
      if (!!!window.IntersectionObserver || o || !a) return;
      const l = new IntersectionObserver(c, {
        threshold: t,
        root: n,
        rootMargin: r,
      });
      return l.observe(a), () => l.disconnect();
    }, [e, t, n, r, o]),
    l
  );
}
function nt(
  e,
  t,
  n = { root: null, threshold: 0, freezeOnceVisible: !0, rootMargin: "1000px" }
) {
  u.exports.useEffect(() => {
    t <= 5 && e();
  }, []);
  const r = u.exports.useRef(null),
    a = tt(r, n),
    l = t > 5 && !!(null == a ? void 0 : a.isIntersecting);
  return (
    u.exports.useEffect(() => {
      l && e();
    }, [l]),
    { ref: r, isVisible: l }
  );
}
const rt = ({ domNode: e, menuItemData: t }) => {
    var n, r, a;
    const { ncmazMenuCustomFields: l } = t,
      [s, o] = u.exports.useState(
        null ==
          (r = null == (n = null == l ? void 0 : l.taxonomies) ? void 0 : n[0])
          ? void 0
          : r.categoryId
      ),
      {
        taxonomies: c,
        numberOfPosts: i,
        order: d,
        orderBy: E,
        showTabFilter: h,
      } = l;
    let b = {},
      v = [];
    (v = h ? [s] : (null == c ? void 0 : c.map((e) => e.categoryId)) || []),
      (b = { categoryIn: v, first: Number(i) });
    const k = p`
    ${"\n  query Megamenu_Filter(\n    $field: PostObjectsConnectionOrderbyEnum = DATE\n    $order: OrderEnum = DESC\n    $categoryIn: [ID] = []\n    $tagIn: [ID] = []\n    $authorIn: [ID] = []\n    $last: Int = null\n    $first: Int = 10\n    $before: String = null\n    $after: String = null\n    $featuredImage_size: MediaItemSizeEnum = MEDIUM\n  ) {\n    posts(\n      where: {\n        orderby: { field: $field, order: $order }\n        categoryIn: $categoryIn\n        tagIn: $tagIn\n        authorIn: $authorIn\n      }\n      last: $last\n      first: $first\n      before: $before\n      after: $after\n    ) {\n      edges {\n  node {\n    id\n    link\n    categories {\n      edges {\n        node {\n          id\n          link\n          name\n          uri\n          slug\n          count\n          categoryId\n          ncTaxonomyMeta {\n            color \n          } \n        } \n      } \n    }\n    commentCount\n    date\n    excerpt\n    featuredImage {\n      node {\n        id\n        altText\n        caption\n        sourceUrl(size: $featuredImage_size) \n      } \n    }\n    postFormats {\n      edges {\n        node {\n          id\n          name \n        } \n      } \n    }\n    postId\n    slug\n    title \n  } \n}\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor \n      } \n    }\n  }\n"}
  `,
      [y, { loading: x, error: w, data: I, fetchMore: C }] = g(k, {
        notifyOnNetworkStatusChange: !0,
        variables: b,
      }),
      { ref: _ } = nt(y, 99),
      N = null == (a = null == I ? void 0 : I.posts) ? void 0 : a.pageInfo,
      S = (null == I ? void 0 : I.posts.edges) || [],
      L = x,
      M = (e, { fetchMoreResult: t }) => {
        var n;
        return (
          null == (n = null == t ? void 0 : t.posts) ? void 0 : n.edges.length
        )
          ? t
          : e;
      },
      $ = () => {
        const { taxonomies: e } = t.ncmazMenuCustomFields;
        return m.createElement(
          "div",
          { className: "w-1/5 py-8 flex-shrink-0  " },
          m.createElement(
            "div",
            { className: "flow-root" },
            m.createElement(
              "div",
              null,
              (e || []).map((e) => {
                const t = e.categoryId === s;
                return m.createElement(
                  "a",
                  {
                    href: e.link,
                    className:
                      "py-2.5 px-5 flex items-center !m-0 relative " +
                      (t ? "bg-neutral-100 dark:bg-neutral-800 " : ""),
                    key: e.categoryId,
                    onMouseEnter: () => {
                      o(e.categoryId);
                    },
                  },
                  t &&
                    m.createElement("span", {
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
      z = () =>
        m.createElement(
          "div",
          {
            className:
              "flex-grow " +
              (h ? "border-l border-neutral-200 dark:border-neutral-800" : ""),
          },
          m.createElement(
            "div",
            { className: "px-4 py-5 " },
            m.createElement(Xe, {
              className: "my-5",
              data: S,
              error: w,
              isSkeleton: L,
            }),
            L || S.length
              ? m.createElement(
                  "div",
                  {
                    className:
                      "grid gap-4 " + (h ? "grid-cols-4" : "grid-cols-5"),
                  },
                  L
                    ? Array.from(h ? "88888888" : "8888888888").map((e, t) =>
                        m.createElement(et, { key: t })
                      )
                    : S.map((e) =>
                        m.createElement(Ye, { post: e.node, key: e.node.id })
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
              return m.createElement(
                "div",
                {
                  className:
                    "nc-NextPrev mt-8 ml-2 relative flex items-center justify-center text-neutral-900 dark:text-neutral-300 space-x-2.5 ",
                },
                m.createElement(
                  "button",
                  {
                    className: e,
                    disabled: !N.hasPreviousPage,
                    onClick: () => {
                      C &&
                        C({
                          variables: {
                            first: null,
                            after: null,
                            last: Number(i),
                            before: N.startCursor || null,
                          },
                          updateQuery: M,
                        });
                    },
                  },
                  m.createElement("i", { className: "las la-angle-left" })
                ),
                m.createElement(
                  "button",
                  {
                    className: e,
                    disabled: !N.hasNextPage,
                    onClick: () => {
                      C &&
                        C({
                          variables: {
                            first: Number(i),
                            after: N.endCursor || null,
                            last: null,
                            before: null,
                          },
                          updateQuery: M,
                        });
                    },
                  },
                  m.createElement("i", { className: "las la-angle-right" })
                )
              );
            })()
          )
        );
    return f.createPortal(
      m.createElement(
        "div",
        {
          ref: _,
          className: "nc-megamenu-item absolute top-full py-3 -inset-x-10",
        },
        m.createElement(
          "div",
          {
            className:
              "w-full flex overflow-hidden rounded-2xl shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 ",
          },
          h && $(),
          z()
        )
      ),
      e
    );
  },
  at = document.querySelectorAll("[data-is-megamenu=true]"),
  lt = () =>
    m.createElement(
      m.Fragment,
      null,
      m.createElement(Ge, null),
      m.createElement(
        m.Fragment,
        null,
        Array.from(at).map((e, t) => {
          const n = e.getAttribute("data-graphql");
          return n && "null" !== n
            ? m.createElement(rt, {
                key: t,
                domNode: e,
                menuItemData: JSON.parse(n).menuItem,
              })
            : null;
        })
      )
    ),
  st = [
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
  ot =
    " edges {\n  node {\n    id\n    link\n    author {\n      node {\n        id\n        avatar {\n          url\n        }\n        url\n        uri\n        username\n        name\n        slug\n        ncUserMeta {\n          featuredImage {\n            sourceUrl(size: $author_ncUserMeta_featuredImage_size)\n          }\n        }\n      }\n    }\n    categories {\n      edges {\n        node {\n          id\n          link\n          name\n          uri\n          slug\n          count\n          categoryId\n          ncTaxonomyMeta {\n            color\n          }\n        }\n      }\n    }\n    commentCount\n    date\n    excerpt\n    featuredImage {\n      node {\n        id\n        altText\n        caption\n        sourceUrl(size: $featuredImage_size)\n      }\n    }\n    postFormats {\n      edges {\n        node {\n          id\n          name\n          slug\n        }\n      }\n    }\n    postId\n    slug\n    title\n    ncmazVideoUrl {\n      videoUrl\n    }\n    ncmazAudioUrl {\n      audioUrl\n    }\n    ncPostMetaData {\n      favoriteButtonShortcode\n      readingTimeShortcode\n      viewsCount\n    }\n    ncmazGalleryImgs {\n      image1 {\n        id\n        sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image2 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image3 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image4 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image5 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image6 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image7 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image8 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n    }\n  }\n}",
  ct = `\n  query GQL_QUERY_GET_POSTS_BY_FILTER(\n    $field: PostObjectsConnectionOrderbyEnum = AUTHOR\n    $order: OrderEnum = ASC\n    $categoryIn: [ID] = []\n    $tagIn: [ID] = []\n    $authorIn: [ID] = []\n    $notIn: [ID] = []\n    $last: Int = null\n    $first: Int = 10\n    $before: String = ""\n    $after: String = ""\n    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n    $featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n  ) {\n    posts(\n      where: {\n        orderby: { field: $field, order: $order }\n        categoryIn: $categoryIn\n        tagIn: $tagIn\n        authorIn: $authorIn\n        notIn: $notIn\n      }\n      last: $last\n      first: $first\n      before: $before\n      after: $after\n    ) {\n     ${ot}\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n`,
  it = `\n  query GQL_QUERY_GET_POSTS_BY_SPECIFIC(\n    $nameIn: [String] = ""\n    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n    $featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    ) {\n    posts(where: { nameIn: $nameIn }) { ${ot} }\n  }\n`,
  dt =
    "edges {\n\tnode {\n\t\tid\n\t\tname\n\t\tusername\n\t\tuserId\n\t\turl\n\t\turi\n\t\tncUserMeta {\n\t\t\tcolor\n\t\t\tncBio\n\t\t\tfeaturedImage {\n\t\t\t\tsourceUrl(size: $author_ncUserMeta_featuredImage_size)\n\t\t\t\tid\n\t\t\t}\n\t\t\tbackgroundImage {\n\t\t\t\tsourceUrl(size: $author_ncUserMeta_backgroundImage_size)\n\t\t\t}\n\t\t}\n    posts {\n      pageInfo {\n        total\n      }\n    }\n\t}\n}",
  mt = `query GQL_QUERY_GET_USERS_BY_FILTER(\n\t$after: String = ""\n\t$before: String = ""\n\t$first: Int = 10\n\t$last: Int = null\n\t$field: UsersConnectionOrderbyEnum = DISPLAY_NAME\n\t$order: OrderEnum = ASC\n\t$roleIn: [UserRoleEnum] = []\n  $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n  $author_ncUserMeta_backgroundImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n) {\n\tusers(\n\t\twhere: { orderby: { field: $field, order: $order }, roleIn: $roleIn }\n\t\tlast: $last\n\t\tfirst: $first\n\t\tbefore: $before\n\t\tafter: $after\n\t) { ${dt} }\n}`,
  ut = `query GQL_QUERY_GET_USERS_BY_SPECIFIC(\n  $include: [Int] = null\n  $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n  $author_ncUserMeta_backgroundImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n  ) {\n\tusers(where: { include: $include }) { ${dt} }\n}`,
  Et =
    "edges {\n    node {\n        id\n        count\n        name\n        databaseId\n        description\n        link\n        ncTaxonomyMeta {\n            color                                     \n            featuredImage {\n              sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)\n            }\n        }\n    }\n}",
  pt = `\n\tquery GQL_QUERY_GET_CATEGORIES_BY_FILTER(\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n\t) {\n\t\tcategories(\n\t\t\twhere: { order: $order, orderby: $orderby }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${Et} }\n\t}\n`,
  gt = `\n\tquery GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC(\n    $termTaxonomId: [ID] = ""\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    ) {\n\t\tcategories(where: { termTaxonomId: $termTaxonomId }) { ${Et} }\n\t}\n`,
  ft = `\n\tquery GQL_QUERY_GET_TAGS_BY_FILTER(\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n\t) {\n\t\ttags(\n\t\t\twhere: { order: $order, orderby: $orderby }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${Et} }\n\t}\n`,
  ht = `\n\tquery GQL_QUERY_GET_TAGS_BY_SPECIFIC(\n    $termTaxonomId: [ID] = ""\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    ) {\n\t\ttags(where: { termTaxonomId: $termTaxonomId }) { ${Et} }\n\t}\n`,
  bt = ({
    containerClassName: e = "ring-1 ring-white dark:ring-neutral-900",
    sizeClass: t = "h-6 w-6 text-base",
    radius: n = "rounded-md",
    imgUrl: r,
    userName: a,
  }) => {
    const l = r && !r.includes("gravatar.com/avatar/") ? r : "",
      s = a || "John Doe";
    return m.createElement(
      "div",
      {
        className: `wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner ${n} ${t} ${e}`,
        style: {
          backgroundColor: l
            ? void 0
            : ((e) => {
                const t = Math.floor(e.charCodeAt(0) % st.length);
                return st[t];
              })(s),
        },
      },
      l &&
        m.createElement("img", {
          className: "absolute inset-0 w-full h-full object-cover",
          src: l,
          alt: s,
        }),
      m.createElement("span", { className: "wil-avatar__name" }, s[0])
    );
  };
function vt(e, t) {
  return e
    ? e && e.includes("gravatar.com/avatar/")
      ? t || ""
      : e && !e.includes("gravatar.com/avatar/")
      ? e
      : void 0
    : t || "";
}
const kt = ({ data: e, footData: t }) => {
  var n, r, a, l;
  const { currentUser: s, homeURL: o } = frontendObject;
  return m.createElement(
    h,
    { as: "div", className: "relative inline-block text-left" },
    m.createElement(
      "div",
      null,
      m.createElement(
        h.Button,
        { className: "" },
        m.createElement(
          "div",
          {
            className:
              "flex-shrink-0 sm:w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ",
          },
          m.createElement(bt, {
            imgUrl: vt(
              null == (c = null == s ? void 0 : s.avatar) ? void 0 : c.url,
              null ==
                (d =
                  null == (i = null == s ? void 0 : s.ncUserMeta)
                    ? void 0
                    : i.featuredImage)
                ? void 0
                : d.sourceUrl
            ),
            userName: null == s ? void 0 : s.name,
            radius: "rounded-full",
            containerClassName:
              "ring-2 ring-neutral-200 dark:ring-neutral-700 ring-offset-2",
            sizeClass: "h-7 w-7 text-base ",
          })
        )
      )
    ),
    m.createElement(
      b,
      {
        as: u.exports.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
      },
      m.createElement(
        h.Items,
        {
          className:
            "absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-neutral-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-neutral-100  dark:divide-neutral-700 text-sm",
        },
        m.createElement(
          "div",
          { className: "px-1 py-2" },
          m.createElement(
            "a",
            {
              href: o + (null == s ? void 0 : s.uri),
              className: "px-3 py-2 flex items-center space-x-3",
            },
            m.createElement(bt, {
              imgUrl: vt(
                null == (n = null == s ? void 0 : s.avatar) ? void 0 : n.url,
                null ==
                  (a =
                    null == (r = null == s ? void 0 : s.ncUserMeta)
                      ? void 0
                      : r.featuredImage)
                  ? void 0
                  : a.sourceUrl
              ),
              userName: null == s ? void 0 : s.name,
              radius: "rounded-full",
              sizeClass: "h-9 w-9 sm:h-10 sm:w-10 text-base",
            }),
            m.createElement(
              "div",
              { className: "flex flex-col justify-center text-sm truncate" },
              m.createElement(
                "span",
                {
                  className:
                    "text-base font-medium truncate capitalize leading-tight mb-0.5",
                },
                null == s ? void 0 : s.name
              ),
              m.createElement(
                "span",
                {
                  className:
                    "text-neutral-500 dark:text-neutral-400 truncate leading-tight",
                },
                null == (l = null == s ? void 0 : s.ncUserMeta)
                  ? void 0
                  : l.ncBio
              )
            )
          )
        ),
        m.createElement(
          "div",
          { className: "px-1 py-2" },
          e.map((e) =>
            m.createElement(h.Item, { key: e.id }, ({ active: t }) =>
              m.createElement(
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
                m.createElement("i", {
                  className: `${e.icon} mr-1 w-7 text-lg`,
                }),
                m.createElement("span", null, e.name)
              )
            )
          )
        ),
        m.createElement(
          "div",
          { className: "px-1 py-2" },
          t.map((e) =>
            m.createElement(h.Item, { key: e.id }, ({ active: t }) =>
              m.createElement(
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
                m.createElement("i", {
                  className: `${e.icon} mr-1 w-7 text-lg`,
                }),
                m.createElement("span", null, e.name)
              )
            )
          )
        )
      )
    )
  );
  var c, i, d;
};
function yt(e = !1) {
  return e
    ? "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
    : "focus:outline-none";
}
const xt = ({
    className:
      e = `h-7 w-7 sm:h-8 sm:w-8 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center ${yt()}`,
    iconClass: t = "h-[18px] w-[18px]",
    panelMenusClass: n = " w-56 top-0 right-0 origin-top-right",
    title: r = "More",
    renderTrigger: a,
    renderItem: l,
    data: s,
    onClick: o,
  }) =>
    m.createElement(
      h,
      { as: "div", className: "relative inline-block text-left" },
      m.createElement(
        h.Button,
        { className: e, title: r },
        a
          ? a()
          : m.createElement(v, {
              className: t,
              "aria-hidden": "true",
              stroke: "none",
              fill: "currentColor",
            })
      ),
      m.createElement(
        b,
        {
          as: u.exports.Fragment,
          enter: "transition ease-out duration-100",
          enterFrom: "transform opacity-0 scale-95",
          enterTo: "transform opacity-100 scale-100",
          leave: "transition ease-in duration-75",
          leaveFrom: "transform opacity-100 scale-100",
          leaveTo: "transform opacity-0 scale-95",
        },
        m.createElement(
          h.Items,
          {
            className: `absolute ${n} bg-white dark:bg-neutral-900 rounded-lg divide-y divide-neutral-100 shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 focus:outline-none z-40`,
          },
          m.createElement(
            "div",
            {
              className:
                "px-1 py-2.5 text-sm text-neutral-6000 dark:text-neutral-300",
            },
            s.map((e) =>
              m.createElement(
                h.Item,
                { key: e.id, onClick: () => o(e), "data-menu-item-id": e.id },
                ({ active: t }) =>
                  l
                    ? l(e, t)
                    : m.createElement(
                        "button",
                        {
                          className:
                            "flex items-center rounded-md w-full px-3 py-2  truncate " +
                            (t
                              ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                              : ""),
                        },
                        !!e.icon &&
                          m.createElement("i", {
                            className: `${e.icon} mr-1 w-7 text-base`,
                          }),
                        m.createElement(
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
  wt = frontendObject.socialsShare.map((e) => ({ id: e, name: e, icon: "" })),
  It = ({
    panelMenusClass: e = "w-52 right-0 bottom-0 origin-bottom-right",
    href: t = "/#",
    className:
      n = "nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8",
  }) =>
    m.createElement(xt, {
      className: n,
      panelMenusClass: `${e} max-h-80 overflow-y-auto`,
      title: "Share with",
      renderTrigger: () =>
        m.createElement(
          "div",
          null,
          m.createElement(
            "svg",
            { width: "24", height: "24", fill: "none", viewBox: "0 0 24 24" },
            m.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1",
              d: "M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75",
            }),
            m.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1",
              d: "M12 14.25L12 5",
            }),
            m.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1",
              d: "M8.75 8.25L12 4.75L15.25 8.25",
            })
          )
        ),
      renderItem: (e, n) =>
        m.createElement(
          "div",
          {
            className:
              "flex items-center rounded-md w-full truncate  " +
              (n
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                : ""),
          },
          ((e, n) => {
            const r = "flex items-center space-x-3 !px-3 !py-2 w-full";
            switch (e.id) {
              case "Facebook":
                return m.createElement(
                  ae,
                  { className: r, url: t },
                  m.createElement(le, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Twitter":
                return m.createElement(
                  ne,
                  { className: r, url: t },
                  m.createElement(re, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Telegram":
                return m.createElement(
                  ee,
                  { className: r, url: t },
                  m.createElement(te, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Whatsapp":
                return m.createElement(
                  K,
                  { url: t, className: r },
                  m.createElement(X, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Linkedin":
                return m.createElement(
                  Z,
                  { className: r, url: t },
                  m.createElement(J, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Pinterest":
                return m.createElement(
                  Q,
                  { media: "", className: r, url: t },
                  m.createElement(Y, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "VK":
                return m.createElement(
                  H,
                  { className: r, url: t },
                  m.createElement(q, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Odnoklassniki":
                return m.createElement(
                  G,
                  { className: r, url: t },
                  m.createElement(W, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Reddit":
                return m.createElement(
                  B,
                  { className: r, url: t },
                  m.createElement(F, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Tumblr":
                return m.createElement(
                  j,
                  { className: r, url: t },
                  m.createElement(V, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "MailRu":
                return m.createElement(
                  U,
                  { className: r, url: t },
                  m.createElement(D, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "LiveJournal":
                return m.createElement(
                  R,
                  { className: r, url: t },
                  m.createElement(O, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Viber":
                return m.createElement(
                  T,
                  { className: r, url: t },
                  m.createElement(A, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Workplace":
                return m.createElement(
                  z,
                  { className: r, url: t },
                  m.createElement(P, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Line":
                return m.createElement(
                  M,
                  { className: r, url: t },
                  m.createElement($, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Weibo":
                return m.createElement(
                  S,
                  { className: r, url: t },
                  m.createElement(L, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Pocket":
                return m.createElement(
                  _,
                  { className: r, url: t },
                  m.createElement(N, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Instapaper":
                return m.createElement(
                  I,
                  { className: r, url: t },
                  m.createElement(C, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "Hatena":
                return m.createElement(
                  x,
                  { className: r, url: t },
                  m.createElement(w, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              case "email":
                return m.createElement(
                  k,
                  { className: r, url: t },
                  m.createElement(y, { round: !0, size: 24 }),
                  m.createElement("span", null, e.name)
                );
              default:
                return null;
            }
          })(e)
        ),
      data: wt,
      onClick: () => {},
    }),
  Ct = m.forwardRef((e, t) => {
    var n = e,
      {
        className: r = "",
        sizeClass: a = "h-11 px-4 py-3",
        fontClass: l = "text-sm font-normal",
        rounded: s = "rounded-full",
        children: o,
        type: i = "text",
      } = n,
      u = d(n, [
        "className",
        "sizeClass",
        "fontClass",
        "rounded",
        "children",
        "type",
      ]);
    return m.createElement(
      "input",
      c(
        {
          ref: t,
          type: i,
          className: `block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ${s} ${l} ${a} ${r}`,
        },
        u
      )
    );
  }),
  _t = () => {
    const e = m.createRef();
    return m.createElement(
      m.Fragment,
      null,
      m.createElement(se, { className: "sm:relative" }, ({ open: t }) => {
        var n;
        return (
          t &&
            setTimeout(() => {
              var t;
              null == (t = e.current) || t.focus();
            }, 100),
          m.createElement(
            m.Fragment,
            null,
            m.createElement(
              se.Button,
              {
                className:
                  "text-2xl md:text-[28px] sm:w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center",
              },
              m.createElement("i", { className: "las la-search" })
            ),
            m.createElement(
              b,
              {
                show: t,
                as: u.exports.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
              },
              m.createElement(
                se.Panel,
                {
                  static: !0,
                  className:
                    "absolute right-2.5 sm:right-0 z-10 w-screen max-w-[300px] sm:max-w-sm mt-3",
                },
                m.createElement(
                  "form",
                  {
                    role: "search",
                    method: "GET",
                    className: "search-form",
                    action:
                      null == (n = window.frontendObject) ? void 0 : n.homeURL,
                  },
                  m.createElement(Ct, {
                    name: "s",
                    ref: e,
                    type: "search",
                    placeholder: Je.typeAndPressEnter,
                  }),
                  m.createElement("input", {
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
  Nt = frontendObject.socialsShare.map((e) => ({ id: e, name: e, icon: "" })),
  St = ({ className: e = "grid gap-[6px]", href: t = "#", size: n = 24 }) =>
    m.createElement(
      "div",
      { className: `nc-SocialsShare ${e}`, "data-nc-id": "SocialsShare" },
      Nt.map((e, r) =>
        m.createElement(
          "div",
          { key: e.name },
          ((e) => {
            const r = "hover:opacity-70";
            switch (e.id) {
              case "Facebook":
                return m.createElement(
                  ae,
                  { className: r, url: t },
                  m.createElement(le, { round: !0, size: n })
                );
              case "Twitter":
                return m.createElement(
                  ne,
                  { className: r, url: t },
                  m.createElement(re, { round: !0, size: n })
                );
              case "Telegram":
                return m.createElement(
                  ee,
                  { className: r, url: t },
                  m.createElement(te, { round: !0, size: n })
                );
              case "Whatsapp":
                return m.createElement(
                  K,
                  { url: t, className: r },
                  m.createElement(X, { round: !0, size: n })
                );
              case "Linkedin":
                return m.createElement(
                  Z,
                  { className: r, url: t },
                  m.createElement(J, { round: !0, size: n })
                );
              case "Pinterest":
                return m.createElement(
                  Q,
                  { media: "", className: r, url: t },
                  m.createElement(Y, { round: !0, size: n })
                );
              case "VK":
                return m.createElement(
                  H,
                  { className: r, url: t },
                  m.createElement(q, { round: !0, size: n })
                );
              case "Odnoklassniki":
                return m.createElement(
                  G,
                  { className: r, url: t },
                  m.createElement(W, { round: !0, size: n })
                );
              case "Reddit":
                return m.createElement(
                  B,
                  { className: r, url: t },
                  m.createElement(F, { round: !0, size: n })
                );
              case "Tumblr":
                return m.createElement(
                  j,
                  { className: r, url: t },
                  m.createElement(V, { round: !0, size: n })
                );
              case "MailRu":
                return m.createElement(
                  U,
                  { className: r, url: t },
                  m.createElement(D, { round: !0, size: n })
                );
              case "LiveJournal":
                return m.createElement(
                  R,
                  { className: r, url: t },
                  m.createElement(O, { round: !0, size: n })
                );
              case "Viber":
                return m.createElement(
                  T,
                  { className: r, url: t },
                  m.createElement(A, { round: !0, size: n })
                );
              case "Workplace":
                return m.createElement(
                  z,
                  { className: r, url: t },
                  m.createElement(P, { round: !0, size: n })
                );
              case "Line":
                return m.createElement(
                  M,
                  { className: r, url: t },
                  m.createElement($, { round: !0, size: n })
                );
              case "Weibo":
                return m.createElement(
                  S,
                  { className: r, url: t },
                  m.createElement(L, { round: !0, size: n })
                );
              case "Pocket":
                return m.createElement(
                  _,
                  { className: r, url: t },
                  m.createElement(N, { round: !0, size: n })
                );
              case "Instapaper":
                return m.createElement(
                  I,
                  { className: r, url: t },
                  m.createElement(C, { round: !0, size: n })
                );
              case "Hatena":
                return m.createElement(
                  x,
                  { className: r, url: t },
                  m.createElement(w, { round: !0, size: n })
                );
              case "email":
                return m.createElement(
                  k,
                  { className: r, url: t },
                  m.createElement(y, { round: !0, size: n })
                );
              default:
                return null;
            }
          })(e)
        )
      )
    ),
  Lt = ({ className: e = "w-12 h-12" }) => {
    const [t, n] = u.exports.useState(
        "dark" === localStorage.theme ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      ),
      r = document.documentElement;
    u.exports.useEffect(() => {
      "dark" === localStorage.theme ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? r.classList.contains("dark") || r.classList.add("dark")
        : r.classList.contains("dark") && r.classList.remove("dark");
    }, [t]);
    return m.createElement(
      "button",
      {
        onClick: () => {
          (localStorage.theme = t ? "light" : "dark"), n(!t);
        },
        className: `text-2xl md:text-3xl rounded-full text-neutral-700 dark:text-neutral-300 sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ${e}`,
      },
      m.createElement("span", { className: "sr-only" }, "Enable dark mode"),
      t
        ? m.createElement(oe, { className: "w-7 h-7", "aria-hidden": "true" })
        : m.createElement(ce, { className: "w-7 h-7", "aria-hidden": "true" })
    );
  },
  Mt = m.lazy(() =>
    Me(
      () => import("./HeaderSingleAudio.880bd8f8.js"),
      [
        "assets/HeaderSingleAudio.880bd8f8.js",
        "assets/vendor.3b208adb.js",
        "assets/ButtonPlayMusicRunningContainer.ddfdb527.js",
        "assets/hooks.311923ab.js",
      ]
    )
  ),
  $t = m.lazy(() =>
    Me(
      () => import("./HeaderSingleGallery.82b0a8bc.js"),
      [
        "assets/HeaderSingleGallery.82b0a8bc.js",
        "assets/vendor.3b208adb.js",
        "assets/NextPrev.9a4e713f.js",
        "assets/ButtonClose.fb2fc9ce.js",
        "assets/glide.esm.699249e3.js",
      ]
    )
  ),
  zt = m.lazy(() =>
    Me(
      () => import("./HeaderSingleVideo.9d7155e5.js"),
      [
        "assets/HeaderSingleVideo.9d7155e5.js",
        "assets/vendor.3b208adb.js",
        "assets/index.1eeac341.js",
        "assets/NcPlayIcon.a2df5b79.js",
      ]
    )
  ),
  Pt = m.lazy(() =>
    Me(
      () => import("./PageArchiveDate.96ddc723.js"),
      [
        "assets/PageArchiveDate.96ddc723.js",
        "assets/vendor.3b208adb.js",
        "assets/PageArchive.5b35f6bd.js",
        "assets/Card11Skeleton.7709eb23.js",
        "assets/ButtonClose.fb2fc9ce.js",
        "assets/ButtonPrimary.02853f4e.js",
        "assets/CardCategory1Skeleton.f0f23bbe.js",
        "assets/Tag.8ef71625.js",
        "assets/Card11.489c75a7.js",
        "assets/PostFeaturedMedia.51066710.js",
        "assets/PostCardLikeAction.b4c5e7c8.js",
        "assets/NextPrev.9a4e713f.js",
        "assets/hooks.311923ab.js",
        "assets/index.1eeac341.js",
        "assets/ButtonPlayMusicRunningContainer.ddfdb527.js",
        "assets/PostCardMeta.594360a7.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/BackgroundSection.30b8e4d0.js",
        "assets/SectionGridCategoryBox.bca2b1ec.js",
        "assets/CardCategory5Skeleton.03f5b4c8.js",
        "assets/Heading.ac513da6.js",
      ]
    )
  ),
  Tt = m.lazy(() =>
    Me(
      () => import("./PageSearch.964edc28.js"),
      [
        "assets/PageSearch.964edc28.js",
        "assets/vendor.3b208adb.js",
        "assets/PageArchive.5b35f6bd.js",
        "assets/Card11Skeleton.7709eb23.js",
        "assets/ButtonClose.fb2fc9ce.js",
        "assets/ButtonPrimary.02853f4e.js",
        "assets/CardCategory1Skeleton.f0f23bbe.js",
        "assets/Tag.8ef71625.js",
        "assets/Card11.489c75a7.js",
        "assets/PostFeaturedMedia.51066710.js",
        "assets/PostCardLikeAction.b4c5e7c8.js",
        "assets/NextPrev.9a4e713f.js",
        "assets/hooks.311923ab.js",
        "assets/index.1eeac341.js",
        "assets/ButtonPlayMusicRunningContainer.ddfdb527.js",
        "assets/PostCardMeta.594360a7.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/BackgroundSection.30b8e4d0.js",
        "assets/SectionGridCategoryBox.bca2b1ec.js",
        "assets/CardCategory5Skeleton.03f5b4c8.js",
        "assets/Heading.ac513da6.js",
        "assets/NavItem.9196150d.js",
        "assets/CardAuthorBox2Skeleton.f7a0ddbf.js",
      ]
    )
  ),
  At = m.lazy(() =>
    Me(
      () => import("./SingleMoreFromAuthorGridPosts.a40a258d.js"),
      [
        "assets/SingleMoreFromAuthorGridPosts.a40a258d.js",
        "assets/vendor.3b208adb.js",
        "assets/DataStatementBlock.cdbcfea8.js",
        "assets/Heading.ac513da6.js",
        "assets/NextPrev.9a4e713f.js",
        "assets/Card9.81ca4a17.js",
        "assets/PostFeaturedMedia.51066710.js",
        "assets/PostCardLikeAction.b4c5e7c8.js",
        "assets/hooks.311923ab.js",
        "assets/index.1eeac341.js",
        "assets/ButtonPlayMusicRunningContainer.ddfdb527.js",
        "assets/formatDate.5c5d9c4d.js",
      ]
    )
  ),
  Rt = m.lazy(() =>
    Me(
      () => import("./SingleRelatedGridPosts.b4179fa5.js"),
      [
        "assets/SingleRelatedGridPosts.b4179fa5.js",
        "assets/vendor.3b208adb.js",
        "assets/DataStatementBlock.cdbcfea8.js",
        "assets/Heading.ac513da6.js",
        "assets/NextPrev.9a4e713f.js",
        "assets/Card11.489c75a7.js",
        "assets/PostFeaturedMedia.51066710.js",
        "assets/PostCardLikeAction.b4c5e7c8.js",
        "assets/hooks.311923ab.js",
        "assets/index.1eeac341.js",
        "assets/ButtonPlayMusicRunningContainer.ddfdb527.js",
        "assets/PostCardMeta.594360a7.js",
        "assets/formatDate.5c5d9c4d.js",
      ]
    )
  ),
  Ot = m.lazy(() =>
    Me(
      () => import("./PageArchiveAuthor.188ea337.js"),
      [
        "assets/PageArchiveAuthor.188ea337.js",
        "assets/vendor.3b208adb.js",
        "assets/ButtonPrimary.02853f4e.js",
        "assets/Card11Skeleton.7709eb23.js",
        "assets/PageArchive.5b35f6bd.js",
        "assets/ButtonClose.fb2fc9ce.js",
        "assets/CardCategory1Skeleton.f0f23bbe.js",
        "assets/Tag.8ef71625.js",
        "assets/Card11.489c75a7.js",
        "assets/PostFeaturedMedia.51066710.js",
        "assets/PostCardLikeAction.b4c5e7c8.js",
        "assets/NextPrev.9a4e713f.js",
        "assets/hooks.311923ab.js",
        "assets/index.1eeac341.js",
        "assets/ButtonPlayMusicRunningContainer.ddfdb527.js",
        "assets/PostCardMeta.594360a7.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/BackgroundSection.30b8e4d0.js",
        "assets/SectionGridCategoryBox.bca2b1ec.js",
        "assets/CardCategory5Skeleton.03f5b4c8.js",
        "assets/Heading.ac513da6.js",
        "assets/NavItem.9196150d.js",
      ]
    )
  ),
  Ut = m.lazy(() =>
    Me(
      () =>
        import("./PageArchive.5b35f6bd.js").then(function (e) {
          return e.d;
        }),
      [
        "assets/PageArchive.5b35f6bd.js",
        "assets/vendor.3b208adb.js",
        "assets/Card11Skeleton.7709eb23.js",
        "assets/ButtonClose.fb2fc9ce.js",
        "assets/ButtonPrimary.02853f4e.js",
        "assets/CardCategory1Skeleton.f0f23bbe.js",
        "assets/Tag.8ef71625.js",
        "assets/Card11.489c75a7.js",
        "assets/PostFeaturedMedia.51066710.js",
        "assets/PostCardLikeAction.b4c5e7c8.js",
        "assets/NextPrev.9a4e713f.js",
        "assets/hooks.311923ab.js",
        "assets/index.1eeac341.js",
        "assets/ButtonPlayMusicRunningContainer.ddfdb527.js",
        "assets/PostCardMeta.594360a7.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/BackgroundSection.30b8e4d0.js",
        "assets/SectionGridCategoryBox.bca2b1ec.js",
        "assets/CardCategory5Skeleton.03f5b4c8.js",
        "assets/Heading.ac513da6.js",
      ]
    )
  ),
  Dt = document.querySelectorAll("[data-is-react-component] "),
  jt = ({}) => {
    if (!Dt || !Dt.length) return null;
    return m.createElement(
      m.Fragment,
      null,
      Array.from(Dt).map((e, t) => {
        const n = e.getAttribute("data-is-react-component");
        if (!e || !n) return null;
        let r = e.getAttribute("data-component-props")
          ? JSON.parse(e.getAttribute("data-component-props") || "")
          : {};
        switch (("object" != typeof r && (r = []), n)) {
          case "PostCardDropdownShare":
            return f.createPortal(m.createElement(It, c({}, r)), e);
          case "SocialsShare":
            return f.createPortal(m.createElement(St, c({}, r)), e);
          case "SingleRelatedGridPosts":
            return f.createPortal(
              m.createElement(
                u.exports.Suspense,
                { fallback: m.createElement("div", null) },
                m.createElement(Rt, c({}, r))
              ),
              e
            );
          case "SingleMoreFromAuthorGridPosts":
            return f.createPortal(
              m.createElement(
                u.exports.Suspense,
                { fallback: m.createElement("div", null) },
                m.createElement(At, c({}, r))
              ),
              e
            );
          case "HeaderSingleGallery":
            return f.createPortal(
              m.createElement(
                u.exports.Suspense,
                { fallback: m.createElement("div", null) },
                m.createElement($t, c({}, r))
              ),
              e
            );
          case "HeaderSingleVideo":
            return f.createPortal(
              m.createElement(
                u.exports.Suspense,
                { fallback: m.createElement("div", null) },
                m.createElement(zt, c({}, r))
              ),
              e
            );
          case "HeaderSingleAudio":
            return f.createPortal(
              m.createElement(
                u.exports.Suspense,
                { fallback: m.createElement("div", null) },
                m.createElement(Mt, c({}, r))
              ),
              e
            );
          case "PageArchive":
            return f.createPortal(
              m.createElement(
                u.exports.Suspense,
                { fallback: m.createElement("div", null) },
                m.createElement(Ut, c({}, r))
              ),
              e
            );
          case "PageArchiveDate":
            return f.createPortal(
              m.createElement(
                u.exports.Suspense,
                { fallback: m.createElement("div", null) },
                m.createElement(Pt, c({}, r))
              ),
              e
            );
          case "PageArchiveAuthor":
            return f.createPortal(
              m.createElement(
                u.exports.Suspense,
                { fallback: m.createElement("div", null) },
                m.createElement(Ot, c({}, r))
              ),
              e
            );
          case "PageSearch":
            return f.createPortal(
              m.createElement(
                u.exports.Suspense,
                { fallback: m.createElement("div", null) },
                m.createElement(Tt, c({}, r))
              ),
              e
            );
          case "SwitchDarkMode":
            return f.createPortal(m.createElement(Lt, c({}, r)), e);
          case "SearchDropdown":
            return f.createPortal(m.createElement(_t, c({}, r)), e);
          case "NavAccountDropdown":
            return f.createPortal(m.createElement(kt, c({}, r)), e);
          default:
            return null;
        }
      })
    );
  },
  Vt = () =>
    navigator.userAgent.indexOf("Safari") > -1 &&
    navigator.userAgent.indexOf("Chrome") <= -1,
  Bt = m.lazy(() =>
    Me(
      () => import("./MediaRunningContainerForSafari.2815baae.js"),
      [
        "assets/MediaRunningContainerForSafari.2815baae.js",
        "assets/vendor.3b208adb.js",
        "assets/hooks.311923ab.js",
        "assets/index.1eeac341.js",
        "assets/PostCardLikeAction.b4c5e7c8.js",
      ]
    )
  ),
  Ft = m.lazy(() =>
    Me(
      () => import("./MediaRunningContainer.23da766c.js"),
      [
        "assets/MediaRunningContainer.23da766c.js",
        "assets/vendor.3b208adb.js",
        "assets/hooks.311923ab.js",
        "assets/index.1eeac341.js",
        "assets/PostCardLikeAction.b4c5e7c8.js",
      ]
    )
  );
function Gt() {
  return m.createElement(
    m.Fragment,
    null,
    m.createElement(lt, null),
    m.createElement(jt, null),
    m.createElement(Fe, null),
    m.createElement(
      u.exports.Suspense,
      { fallback: m.createElement("div", null) },
      Vt() ? m.createElement(Bt, null) : m.createElement(Ft, null)
    )
  );
}
var Wt = ie({
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
var Ht = ie({
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
var qt = ie({
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
var Qt = ie({
  name: "darkmode",
  initialState: { isDarkMode: !1 },
  reducers: {
    toogleDarkMode: (e) => ({ isDarkMode: !e.isDarkMode }),
    enableDarkMode: () => ({ isDarkMode: !0 }),
    disableDarkMode: () => ({ isDarkMode: !1 }),
  },
}).reducer;
var Yt = ie({
  name: "pages",
  initialState: { currentPage: { type: "/", data: {} } },
  reducers: {
    changeCurrentPage: (e, t) => (e = i(c({}, e), { currentPage: t.payload })),
  },
}).reducer;
const Zt = ie({
    name: "mediaRunning",
    initialState: {},
    reducers: {
      changeCurrentMediaRunning: (e, t) => c(c({}, e), t.payload),
      changeStateMediaRunning: (e, t) => i(c({}, e), { state: t.payload }),
      removeMediaRunning: (e) => ({ listPostAudio: e.listPostAudio }),
      addNewListPostAudio: (e, t) =>
        i(c({}, e), { listPostAudio: [...(e.listPostAudio || []), t.payload] }),
    },
  }),
  {
    changeCurrentMediaRunning: Jt,
    changeStateMediaRunning: Kt,
    removeMediaRunning: Xt,
    addNewListPostAudio: en,
  } = Zt.actions,
  tn = (e) => e.mediaRunning;
const nn = me(
    { key: "root", version: 1, storage: pe, whitelist: ["darkmode"] },
    de({
      bookmark: Wt,
      postLike: Ht,
      darkmode: Qt,
      commentLikes: qt,
      pages: Yt,
      mediaRunning: Zt.reducer,
    })
  ),
  rn = [],
  an = ue({
    reducer: nn,
    middleware: (e) =>
      e({
        serializableCheck: { ignoredActions: [ge, fe, he, be, ve, ke] },
      }).concat(rn),
  });
let ln = Ee(an);
if (
  (null == (e = window.frontendObject) ? void 0 : e.graphQLBasePath) &&
  !location.pathname.includes("/wp-admin/")
) {
  const e = new ye({ typePolicies: {} }),
    t = new xe(),
    n = new we({ uri: window.frontendObject.graphQLBasePath }),
    r = new Ie({
      uri: window.frontendObject.graphQLBasePath,
      cache: e,
      link: Ce([t, n]),
    });
  f.render(
    m.createElement(
      m.StrictMode,
      null,
      m.createElement(
        _e,
        { store: an },
        m.createElement(
          Ne,
          { loading: null, persistor: ln },
          m.createElement(Se, { client: r }, m.createElement(Gt, null))
        )
      )
    ),
    document.getElementById("root")
  );
}
export {
  bt as A,
  Qe as B,
  Xe as D,
  ot as E,
  ct as G,
  Ct as I,
  He as N,
  It as P,
  St as S,
  Je as a,
  qe as b,
  Kt as c,
  it as d,
  tt as e,
  en as f,
  Jt as g,
  pt as h,
  Vt as i,
  gt as j,
  ft as k,
  ht as l,
  ut as m,
  mt as n,
  dt as o,
  Ke as p,
  Xt as r,
  tn as s,
  yt as t,
  nt as u,
};
