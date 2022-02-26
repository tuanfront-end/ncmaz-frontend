var e,
  t,
  a = Object.defineProperty,
  r = Object.defineProperties,
  n = Object.getOwnPropertyDescriptors,
  l = Object.getOwnPropertySymbols,
  s = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  c = (e, t, r) =>
    t in e
      ? a(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[t] = r),
  i = (e, t) => {
    for (var a in t || (t = {})) s.call(t, a) && c(e, a, t[a]);
    if (l) for (var a of l(t)) o.call(t, a) && c(e, a, t[a]);
    return e;
  },
  m = (e, t) => r(e, n(t)),
  d = (e, t) => {
    var a = {};
    for (var r in e) s.call(e, r) && t.indexOf(r) < 0 && (a[r] = e[r]);
    if (null != e && l)
      for (var r of l(e)) t.indexOf(r) < 0 && o.call(e, r) && (a[r] = e[r]);
    return a;
  };
import {
  R as u,
  X as E,
  I as p,
  r as g,
  E as f,
  a as h,
  H as v,
  b as x,
  c as b,
  d as N,
  P as k,
  e as w,
  W as y,
  f as C,
  L as I,
  g as _,
  h as A,
  i as L,
  V as S,
  j as M,
  k as T,
  l as z,
  M as $,
  m as P,
  T as j,
  n as R,
  o as U,
  p as D,
  O as G,
  q as O,
  s as B,
  t as F,
  u as Q,
  v as Y,
  w as V,
  x as W,
  y as H,
  z as Z,
  A as q,
  B as J,
  C as X,
  D as K,
  F as ee,
  G as te,
  J as ae,
  K as re,
  N as ne,
  S as le,
  Q as se,
  U as oe,
  Y as ce,
  Z as ie,
  _ as me,
  $ as de,
  a0 as ue,
  a1 as Ee,
  a2 as pe,
  a3 as ge,
  a4 as fe,
  a5 as he,
  a6 as ve,
  a7 as xe,
  a8 as be,
  a9 as Ne,
  aa as ke,
  ab as we,
  ac as ye,
  ad as Ce,
  ae as Ie,
  af as _e,
  ag as Ae,
  ah as Le,
  ai as Se,
  aj as Me,
  ak as Te,
  al as ze,
  am as $e,
} from "./vendor.49c01715.js";
const Pe = {},
  je = function (e, t) {
    return t && 0 !== t.length
      ? Promise.all(
          t.map((e) => {
            if (
              (e = `${window.frontendObject.homeURL}/wp-content/plugins/ncmaz-frontend/dist/${e}`) in
              Pe
            )
              return;
            Pe[e] = !0;
            const t = e.endsWith(".css"),
              a = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${a}`)) return;
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
  };
function Re(e = !1) {
  return e
    ? "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
    : "focus:outline-none";
}
const Ue = ({
    className: e = "",
    onClick: t = () => {},
    iconSize: a = "w-5 h-5",
  }) =>
    u.createElement(
      "button",
      {
        className:
          `w-8 h-8 flex items-center justify-center rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-700 ${e} ` +
          Re(),
        onClick: t,
      },
      u.createElement("span", { className: "sr-only" }, "Close"),
      u.createElement(E, { className: a })
    ),
  De = ({
    children: e = "Alert Text",
    containerClassName: t = "",
    type: a = "default",
  }) => {
    let r = t;
    switch (a) {
      case "default":
        r += " text-neutral-900 bg-neutral-100";
        break;
      case "info":
        r += " bg-blue-100 text-blue-900";
        break;
      case "success":
        r += " bg-green-100 text-green-900";
        break;
      case "error":
        r += " bg-red-100 text-red-900";
        break;
      case "warning":
        r += " bg-yellow-100 text-yellow-900";
    }
    return u.createElement(
      "div",
      {
        className: `ttnc-alert relative flex items-center px-6 py-4 rounded-lg ${r}`,
      },
      u.createElement(p, { className: "w-6 h-6 mr-2" }),
      e,
      u.createElement(Ue, {
        className: "absolute top-1/2 transform -translate-y-1/2 right-4",
      })
    );
  };
let Ge = {
  nothingWeFound: "Nothing we found!",
  author: "author",
  authors: "authors",
  all: "All",
  viewAll: "View All",
  articles: "Articles",
  categories: "categories",
  category: "category",
  tags: "tags",
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
  filters: "Filters",
  wereFoundForKeyword: "were found for keyword",
  LikedArticles: "Liked Articles",
  suggestions: "Suggestions",
  somethingWentWrong: "Something went wrong",
  other: "Other",
  otherTags: "Other Tags",
  otherCategories: "Other Categories",
  discoverOtherTags: "Discover other tags",
  discoverOtherCategories: "Discover other categories",
};
try {
  window.locales &&
    window.locales.DEFAULT &&
    (Ge = i(i({}, Ge), window.locales.DEFAULT)),
    window.locales &&
      window.frontendObject.pll_current_language &&
      window.locales[window.frontendObject.pll_current_language] &&
      (Ge = i(
        i({}, Ge),
        window.locales[window.frontendObject.pll_current_language]
      ));
} catch (Lr) {
  console.warn("----translate: locales files error format ----", Lr);
}
var Oe = Ge;
class Be extends u.Component {
  constructor(e) {
    super(e), (this.state = { hasError: !1 });
  }
  static getDerivedStateFromError() {
    return { hasError: !0 };
  }
  componentDidCatch(e, t) {
    console.warn(123, { error: e, errorInfo: t });
  }
  render() {
    return this.state.hasError
      ? u.createElement(
          "div",
          { className: "max-w-xs xl:max-w-lg" },
          u.createElement(De, {
            type: "error",
            children: Oe.somethingWentWrong,
          })
        )
      : this.props.children;
  }
}
const Fe = ({
    containerClassName: e = "relative",
    onClickNext: t = () => {},
    onClickPrev: a = () => {},
    btnClassName: r = "w-10 h-10",
    onlyNext: n = !1,
    onlyPrev: l = !1,
    isOfGlide: s = !0,
    disableNext: o,
    disablePrev: c,
  }) =>
    u.createElement(
      "div",
      {
        className: `nc-NextPrev flex items-center text-neutral-900 dark:text-neutral-300 space-x-2 ${e}`,
        "data-nc-id": "NextPrev",
        "data-glide-el": s ? "controls" : "",
      },
      !n &&
        u.createElement(
          "button",
          {
            className: `${r} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed ${Re()}`,
            onClick: a,
            title: Oe.prev,
            "data-glide-dir": s ? "<" : "",
            disabled: c,
          },
          u.createElement("i", { className: "las la-angle-left" })
        ),
      !l &&
        u.createElement(
          "button",
          {
            className: `${r} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed ${Re()}`,
            onClick: t,
            title: Oe.next,
            "data-glide-dir": s ? ">" : "",
            disabled: o,
          },
          u.createElement("i", { className: "las la-angle-right" })
        )
    ),
  Qe = (e) => {
    var t = e,
      {
        children: a,
        desc: r = "Discover the most outstanding articles in all topics of life. ",
        className: n = "mb-12 md:mb-16 text-neutral-900 dark:text-neutral-50",
        isCenter: l = !1,
        hasNextPrev: s = !1,
      } = t,
      o = d(t, ["children", "desc", "className", "isCenter", "hasNextPrev"]);
    return a || r
      ? u.createElement(
          "div",
          {
            className: `nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${n}`,
          },
          u.createElement(
            "div",
            {
              className: l
                ? "text-center w-full max-w-2xl mx-auto "
                : "max-w-2xl",
            },
            u.createElement(
              "h3",
              i({ className: "text-3xl md:text-4xl font-semibold" }, o),
              a
            ),
            r &&
              u.createElement(
                "span",
                {
                  className:
                    "mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400",
                },
                r
              )
          ),
          s &&
            !l &&
            u.createElement(
              "div",
              {
                className:
                  "mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0",
              },
              u.createElement(Fe, {
                onClickNext: () => {},
                onClickPrev: () => {},
              })
            )
        )
      : null;
  },
  Ye = ({
    className: e = "text-neutral-700 dark:text-neutral-200",
    translate: t = "",
    sizeClass: a = "px-4 py-3 sm:px-6",
    fontSize: r = "text-sm sm:text-base font-medium",
    disabled: n = !1,
    href: l,
    children: s,
    targetBlank: o,
    type: c,
    loading: i,
    onClick: m = () => {},
  }) => {
    const d =
      `nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors ${r} ${a} ${t} ${e} ` +
      Re(!0);
    return l
      ? u.createElement(
          "a",
          {
            href: l,
            target: o ? "_blank" : void 0,
            className: `${d} `,
            onClick: m,
            rel: "noopener noreferrer",
          },
          s || "This is Link"
        )
      : u.createElement(
          "button",
          { disabled: n || i, className: `${d}`, onClick: m, type: c },
          i &&
            u.createElement(
              "svg",
              {
                className: "animate-spin -ml-1 mr-3 h-5 w-5",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
              },
              u.createElement("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "3",
              }),
              u.createElement("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
              })
            ),
          s || "This is Button"
        );
  },
  Ve = (e) => {
    var t = e,
      { className: a = " " } = t,
      r = d(t, ["className"]);
    return u.createElement(
      Ye,
      i(
        {
          className: `ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 ${a}`,
        },
        r
      )
    );
  },
  We = ({ containerClassName: e = "", className: t = "", children: a }) =>
    u.createElement(
      "nav",
      { className: `nc-Nav ${e}`, "data-nc-id": "Nav" },
      u.createElement("ul", { className: `flex  ${t}` }, a)
    ),
  He = ({
    className:
      e = "px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize",
    radius: t = "rounded-full",
    children: a,
    onClick: r = () => {},
    isActive: n = !1,
    renderX: l,
  }) =>
    u.createElement(
      "li",
      { className: "nc-NavItem relative", "data-nc-id": "NavItem" },
      l && l,
      u.createElement(
        "button",
        {
          className: `block !leading-none font-medium ${e} ${t} ${
            n
              ? "bg-secondary-900 text-secondary-50 "
              : "text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          } ${Re()}`,
          onClick: () => {
            r && r();
          },
        },
        a
      )
    ),
  Ze = ({
    tabActiveId: e,
    tabs: t,
    subHeading: a = "",
    viewMoreHref: r = "#",
    heading: n = "🎈 Latest Articles",
    onClickTab: l,
  }) =>
    u.createElement(
      "div",
      { className: "flex flex-col mb-8 relative" },
      u.createElement(Qe, { desc: a }, n),
      u.createElement(
        "div",
        { className: "flex items-center justify-between" },
        u.createElement(
          We,
          {
            className: "sm:space-x-2",
            containerClassName:
              "relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar",
          },
          u.createElement(
            He,
            { isActive: -1 === e, onClick: () => l(-1) },
            Oe.all
          ),
          t.map((t, a) =>
            u.createElement(
              He,
              { key: a, isActive: e === t.id, onClick: () => l(t) },
              t.name
            )
          )
        ),
        r &&
          u.createElement(
            "span",
            { className: "hidden sm:block flex-shrink-0" },
            u.createElement(
              Ve,
              { href: r, className: "!leading-none" },
              u.createElement("span", null, " ", Oe.viewAll),
              u.createElement("i", {
                className: "ml-3 las la-arrow-right text-xl leading-none",
              })
            )
          )
      )
    ),
  qe = ({
    className: e = "bg-neutral-100 dark:bg-black dark:bg-opacity-20 ",
  }) =>
    u.createElement("div", {
      className: `nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 ${e}`,
      "data-nc-id": "BackgroundSection",
    }),
  Je = () =>
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
  Xe = (e) => {
    var t = e,
      {
        containerClassName: a = "",
        alt: r = "nc-imgs",
        src: n = "",
        className: l = "object-cover w-full h-full",
      } = t,
      s = d(t, ["containerClassName", "alt", "src", "className"]);
    let o = !1;
    const c = g.exports.useRef(null);
    let m = null;
    const [E, p] = g.exports.useState(""),
      [f, h] = g.exports.useState(!1),
      v = () => {
        c.current &&
          (({
            target: e,
            options: t = { root: null, rootMargin: "0%", threshold: 0 },
            callback: a,
            freezeOnceVisible: r = !1,
          }) => {
            if (void 0 === window.IntersectionObserver)
              return void console.error(
                "window.IntersectionObserver === undefined! => Your Browser is Notsupport"
              );
            const n = new IntersectionObserver((e, t) => {
              e.map(
                (e) => (
                  e.isIntersecting && (a(), r && t.unobserve(e.target)), !0
                )
              );
            }, t);
            e && n.observe(e);
          })({
            target: c.current,
            options: { root: null, rootMargin: "0%", threshold: 0 },
            freezeOnceVisible: !0,
            callback: x,
          });
      },
      x = () =>
        n
          ? ((m = new Image()),
            m && ((m.src = n), m.addEventListener("load", b)),
            !0)
          : (b(), !0),
      b = () => {
        o && (h(!0), p(n));
      };
    g.exports.useEffect(
      () => (
        (o = !0),
        (async () => {
          v();
        })(),
        () => {
          o = !1;
        }
      ),
      [n]
    );
    return u.createElement(
      "div",
      { className: `nc-NcImage ${a}`, "data-nc-id": "NcImage", ref: c },
      E && f
        ? u.createElement("img", i({ src: E, className: l, alt: r }, s))
        : u.createElement(
            "div",
            {
              className: `${l} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`,
            },
            u.createElement(
              "div",
              { className: "h-2/4 max-w-[50%]" },
              u.createElement(Je, null)
            )
          )
    );
  },
  Ke = frontendObject.socialsShare.map((e) => ({ id: e, name: e, icon: "" })),
  et = ({ className: e = "grid gap-[6px]", href: t = "#", size: a = 24 }) =>
    u.createElement(
      "div",
      { className: `nc-SocialsShare ${e}`, "data-nc-id": "SocialsShare" },
      Ke.map((e, r) =>
        u.createElement(
          "div",
          { key: e.name },
          ((e) => {
            const r = "hover:opacity-70";
            switch (e.id) {
              case "Facebook":
                return u.createElement(
                  ee,
                  { className: r, url: t },
                  u.createElement(te, { round: !0, size: a })
                );
              case "Twitter":
                return u.createElement(
                  X,
                  { className: r, url: t },
                  u.createElement(K, { round: !0, size: a })
                );
              case "Telegram":
                return u.createElement(
                  q,
                  { className: r, url: t },
                  u.createElement(J, { round: !0, size: a })
                );
              case "Whatsapp":
                return u.createElement(
                  H,
                  { url: t, className: r },
                  u.createElement(Z, { round: !0, size: a })
                );
              case "Linkedin":
                return u.createElement(
                  V,
                  { className: r, url: t },
                  u.createElement(W, { round: !0, size: a })
                );
              case "Pinterest":
                return u.createElement(
                  Q,
                  { media: "", className: r, url: t },
                  u.createElement(Y, { round: !0, size: a })
                );
              case "VK":
                return u.createElement(
                  B,
                  { className: r, url: t },
                  u.createElement(F, { round: !0, size: a })
                );
              case "Odnoklassniki":
                return u.createElement(
                  G,
                  { className: r, url: t },
                  u.createElement(O, { round: !0, size: a })
                );
              case "Reddit":
                return u.createElement(
                  U,
                  { className: r, url: t },
                  u.createElement(D, { round: !0, size: a })
                );
              case "Tumblr":
                return u.createElement(
                  j,
                  { className: r, url: t },
                  u.createElement(R, { round: !0, size: a })
                );
              case "MailRu":
                return u.createElement(
                  $,
                  { className: r, url: t },
                  u.createElement(P, { round: !0, size: a })
                );
              case "LiveJournal":
                return u.createElement(
                  T,
                  { className: r, url: t },
                  u.createElement(z, { round: !0, size: a })
                );
              case "Viber":
                return u.createElement(
                  S,
                  { className: r, url: t },
                  u.createElement(M, { round: !0, size: a })
                );
              case "Workplace":
                return u.createElement(
                  A,
                  { className: r, url: t },
                  u.createElement(L, { round: !0, size: a })
                );
              case "Line":
                return u.createElement(
                  I,
                  { className: r, url: t },
                  u.createElement(_, { round: !0, size: a })
                );
              case "Weibo":
                return u.createElement(
                  y,
                  { className: r, url: t },
                  u.createElement(C, { round: !0, size: a })
                );
              case "Pocket":
                return u.createElement(
                  k,
                  { className: r, url: t },
                  u.createElement(w, { round: !0, size: a })
                );
              case "Instapaper":
                return u.createElement(
                  b,
                  { className: r, url: t },
                  u.createElement(N, { round: !0, size: a })
                );
              case "Hatena":
                return u.createElement(
                  v,
                  { className: r, url: t },
                  u.createElement(x, { round: !0, size: a })
                );
              case "email":
                return u.createElement(
                  f,
                  { className: r, url: t },
                  u.createElement(h, { round: !0, size: a })
                );
              default:
                return null;
            }
          })(e)
        )
      )
    ),
  tt = ({ className: e = "flex px-3 h-8 text-xs", href: t, commentCount: a }) =>
    u.createElement(
      "a",
      {
        href: t + "#comments",
        className: `nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 ${e} ${Re()}`,
        title: "Comments",
        "data-nc-id": "PostCardCommentBtn",
      },
      u.createElement(
        "svg",
        { width: "24", height: "24", fill: "none", viewBox: "0 0 24 24" },
        u.createElement("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1",
          d: "M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z",
        }),
        u.createElement("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z",
        }),
        u.createElement("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z",
        }),
        u.createElement("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z",
        })
      ),
      u.createElement(
        "span",
        { className: "ml-1 text-neutral-900 dark:text-neutral-200" },
        a
      )
    );
let at = {};
const rt = ({
    favoriteButtonShortcode: e,
    className: t = "relative",
    onClick: a = () => {},
    postId: r,
  }) => {
    const n = g.exports.useRef(null);
    let l = null;
    g.exports.useEffect(
      () => () => {
        l && clearTimeout(l);
      },
      []
    );
    return u.createElement("div", {
      ref: n,
      className: `ncmaz-button-like-post ${t}`,
      onClick: () => {
        n.current &&
          jQuery &&
          (a && a(),
          jQuery(document).one("ajaxStop", function () {
            l = setTimeout(() => {
              var e;
              at = m(i({}, at), {
                [r]: (null == (e = n.current) ? void 0 : e.innerHTML) || "",
              });
            }, 200);
          }));
      },
      dangerouslySetInnerHTML: { __html: at[r] || e },
    });
  },
  nt = ({
    className: e = "",
    itemClass: t = "px-3 h-8 text-xs",
    hiddenCommentOnMobile: a = !0,
    postData: r,
    onClickLike: n = () => {},
  }) => {
    var l;
    return u.createElement(
      "div",
      {
        className: `nc-PostCardLikeAndComment flex items-center space-x-2 ${e}`,
        "data-nc-id": "PostCardLikeAndComment",
      },
      u.createElement(rt, {
        postId: r.postId,
        onClick: () => n(r.postId),
        favoriteButtonShortcode:
          (null == (l = null == r ? void 0 : r.ncPostMetaData)
            ? void 0
            : l.favoriteButtonShortcode) || "",
      }),
      u.createElement(tt, {
        href: r.link,
        commentCount: r.commentCount || 0,
        className: `${a ? "hidden sm:flex" : "flex"}  ${t}`,
      })
    );
  },
  lt = [
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
  st =
    " edges {\n  node {\n    id\n    link\n    author {\n      node {\n        id\n        avatar {\n          url\n        }\n        url\n        uri\n        username\n        name\n        slug\n        ncUserMeta {\n          featuredImage {\n            sourceUrl(size: $author_ncUserMeta_featuredImage_size)\n          }\n        }\n      }\n    }\n    categories {\n      edges {\n        node {\n          id\n          link\n          name\n          uri\n          slug\n          count\n          categoryId\n          ncTaxonomyMeta {\n            color\n          }\n        }\n      }\n    }\n    commentCount\n    date\n    excerpt\n    featuredImage {\n      node {\n        id\n        altText\n        caption\n        sourceUrl(size: $featuredImage_size)\n      }\n    }\n    postFormats {\n      edges {\n        node {\n          id\n          name\n          slug\n        }\n      }\n    }\n    postId\n    slug\n    title\n    ncmazVideoUrl {\n      videoUrl\n    }\n    ncmazAudioUrl {\n      audioUrl\n    }\n    ncPostMetaData {\n      favoriteButtonShortcode\n      readingTimeShortcode\n      viewsCount\n    }\n    ncmazGalleryImgs {\n      image1 {\n        id\n        sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image2 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image3 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image4 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image5 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image6 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image7 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image8 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n    }\n  }\n}",
  ot =
    "edges {\n\tnode {\n\t\tid\n\t\tname\n\t\tusername\n\t\tuserId\n\t\turl\n\t\turi\n\t\tncUserMeta {\n\t\t\tcolor\n\t\t\tncBio\n\t\t\tfeaturedImage {\n\t\t\t\tsourceUrl(size: $author_ncUserMeta_featuredImage_size)\n\t\t\t\tid\n\t\t\t}\n\t\t\tbackgroundImage {\n\t\t\t\tsourceUrl(size: $author_ncUserMeta_backgroundImage_size)\n\t\t\t}\n\t\t}\n    posts {\n      pageInfo {\n        total\n      }\n    }\n\t}\n}",
  ct =
    "edges {\n    node {\n        id\n        count\n        name\n        databaseId\n        description\n        link\n        ncTaxonomyMeta {\n            color                                     \n            featuredImage {\n              sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)\n            }\n        }\n    }\n}",
  it = {
    PLL_GET__GQL_QUERY_GET_POSTS_BY_FILTER: `\n  query GQL_QUERY_GET_POSTS_BY_FILTER(\n    $language: LanguageCodeFilterEnum = ${
      window.frontendObject.pll_current_language
    }\n    $field: PostObjectsConnectionOrderbyEnum = AUTHOR\n    $order: OrderEnum = ASC\n    $categoryIn: [ID] = []\n    $tagIn: [ID] = []\n    $authorIn: [ID] = []\n    $notIn: [ID] = []\n    $last: Int = null\n    $first: Int = 10\n    $before: String = ""\n    $after: String = ""\n    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n    $featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }\n    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }\n  ) {\n    posts(\n      where: {\n        language: $language\n        orderby: { field: $field, order: $order }\n        categoryIn: $categoryIn\n        tagIn: $tagIn\n        authorIn: $authorIn\n        notIn: $notIn\n      }\n      last: $last\n      first: $first\n      before: $before\n      after: $after\n    ) {\n     ${st}\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n`,
    PLL_GET__GQL_QUERY_GET_POSTS_BY_SPECIFIC: `\n  query GQL_QUERY_GET_POSTS_BY_SPECIFIC(\n    $language: LanguageCodeFilterEnum = ${
      window.frontendObject.pll_current_language
    }\n    $nameIn: [String] = ""\n    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n    $featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }\n    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }\n    ) {\n    posts(where: {\n      language: $language\n      nameIn: $nameIn\n     }) { ${st} }\n  }\n`,
    PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_FILTER: `\n\tquery GQL_QUERY_GET_CATEGORIES_BY_FILTER(\n    $language: LanguageCodeFilterEnum = ${
      window.frontendObject.pll_current_language
    }\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }\n\t) {\n\t\tcategories(\n\t\t\twhere: {\n        language: $language\n         order: $order\n         orderby: $orderby \n        }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${ct} }\n\t}\n`,
    PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC: `\n\tquery GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC(\n    $language: LanguageCodeFilterEnum = ${
      window.frontendObject.pll_current_language
    }\n    $termTaxonomId: [ID] = ""\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }\n    ) {\n\t\tcategories(where: {\n      language: $language\n      termTaxonomId: $termTaxonomId\n     }) { ${ct} }\n\t}\n`,
    PLL_GET__GQL_QUERY_GET_TAGS_BY_FILTER: `\n\tquery GQL_QUERY_GET_TAGS_BY_FILTER(\n    $language: LanguageCodeFilterEnum = ${
      window.frontendObject.pll_current_language
    }\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }\n\t) {\n\t\ttags(\n\t\t\twhere: { \n        language: $language,\n        order: $order, \n        orderby: $orderby \n      }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${ct} }\n\t}\n`,
    PLL_GET__GQL_QUERY_GET_TAGS_BY_SPECIFIC: `\n\tquery GQL_QUERY_GET_TAGS_BY_SPECIFIC(\n    $language: LanguageCodeFilterEnum = ${
      window.frontendObject.pll_current_language
    }\n    $termTaxonomId: [ID] = ""\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
      window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
    }\n    ) {\n\t\ttags(where: {\n      language: $language\n      termTaxonomId: $termTaxonomId\n     }) { ${ct} }\n\t}\n`,
  };
let mt = `\n  query GQL_QUERY_GET_POSTS_BY_FILTER(\n    $field: PostObjectsConnectionOrderbyEnum = AUTHOR\n    $order: OrderEnum = ASC\n    $categoryIn: [ID] = []\n    $tagIn: [ID] = []\n    $authorIn: [ID] = []\n    $notIn: [ID] = []\n    $last: Int = null\n    $first: Int = 10\n    $before: String = ""\n    $after: String = ""\n    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n    $featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n  ) {\n    posts(\n      where: {\n        orderby: { field: $field, order: $order }\n        categoryIn: $categoryIn\n        tagIn: $tagIn\n        authorIn: $authorIn\n        notIn: $notIn\n      }\n      last: $last\n      first: $first\n      before: $before\n      after: $after\n    ) {\n     ${st}\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n`,
  dt = `\n  query GQL_QUERY_GET_POSTS_BY_SPECIFIC(\n    $nameIn: [String] = ""\n    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n    $featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    ) {\n    posts(where: { nameIn: $nameIn }) { ${st} }\n  }\n`,
  ut = `query GQL_QUERY_GET_USERS_BY_FILTER(\n\t$after: String = ""\n\t$before: String = ""\n\t$first: Int = 10\n\t$last: Int = null\n\t$field: UsersConnectionOrderbyEnum = DISPLAY_NAME\n\t$order: OrderEnum = ASC\n\t$roleIn: [UserRoleEnum] = []\n  $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n  $author_ncUserMeta_backgroundImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n) {\n\tusers(\n\t\twhere: { orderby: { field: $field, order: $order }, roleIn: $roleIn }\n\t\tlast: $last\n\t\tfirst: $first\n\t\tbefore: $before\n\t\tafter: $after\n\t) { ${ot} }\n}`,
  Et = `query GQL_QUERY_GET_USERS_BY_SPECIFIC(\n  $include: [Int] = null\n  $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n  $author_ncUserMeta_backgroundImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n  ) {\n\tusers(where: { include: $include }) { ${ot} }\n}`,
  pt = `\n\tquery GQL_QUERY_GET_CATEGORIES_BY_FILTER(\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n\t) {\n\t\tcategories(\n\t\t\twhere: { order: $order, orderby: $orderby }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${ct} }\n\t}\n`,
  gt = `\n\tquery GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC(\n    $termTaxonomId: [ID] = ""\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    ) {\n\t\tcategories(where: { termTaxonomId: $termTaxonomId }) { ${ct} }\n\t}\n`,
  ft = `\n\tquery GQL_QUERY_GET_TAGS_BY_FILTER(\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n\t) {\n\t\ttags(\n\t\t\twhere: { order: $order, orderby: $orderby }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${ct} }\n\t}\n`,
  ht = `\n\tquery GQL_QUERY_GET_TAGS_BY_SPECIFIC(\n    $termTaxonomId: [ID] = ""\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    ) {\n\t\ttags(where: { termTaxonomId: $termTaxonomId }) { ${ct} }\n\t}\n`;
!!window.frontendObject.pll_current_language &&
  !!window.frontendObject.pll_themeoption_actived &&
  ((mt = it.PLL_GET__GQL_QUERY_GET_POSTS_BY_FILTER),
  (dt = it.PLL_GET__GQL_QUERY_GET_POSTS_BY_SPECIFIC),
  (pt = it.PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_FILTER),
  (gt = it.PLL_GET__GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC),
  (ft = it.PLL_GET__GQL_QUERY_GET_TAGS_BY_FILTER),
  (ht = it.PLL_GET__GQL_QUERY_GET_TAGS_BY_SPECIFIC));
const vt = ({
  containerClassName: e = "ring-1 ring-white dark:ring-neutral-900",
  sizeClass: t = "h-6 w-6 text-base",
  radius: a = "rounded-md",
  imgUrl: r,
  userName: n,
}) => {
  const l = r && !r.includes("gravatar.com/avatar/") ? r : "",
    s = n || "John Doe";
  return u.createElement(
    "div",
    {
      className: `wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner ${a} ${t} ${e}`,
      style: {
        backgroundColor: l
          ? void 0
          : ((e) => {
              const t = Math.floor(e.charCodeAt(0) % lt.length);
              return lt[t];
            })(s),
      },
    },
    l &&
      u.createElement("img", {
        className: "absolute inset-0 w-full h-full object-cover",
        src: l,
        alt: s,
      }),
    u.createElement("span", { className: "wil-avatar__name" }, s[0])
  );
};
function xt(e) {
  var t;
  let a = new Date(e);
  return (
    (r =
      null == (t = frontendObject.allSettings)
        ? void 0
        : t.generalSettingsDateFormat),
    (n = a.getTime() / 1e3),
    (i = /\\?(.?)/gi),
    (m = function (e, t) {
      return s[e] ? s[e]() : t;
    }),
    (d = function (e, t) {
      for (e = String(e); e.length < t; ) e = "0" + e;
      return e;
    }),
    (s = {
      d: function () {
        return d(s.j(), 2);
      },
      D: function () {
        return DATE_I18N.day_names_short[s.w()];
      },
      j: function () {
        return l.getDate();
      },
      l: function () {
        return DATE_I18N.day_names[s.w()];
      },
      N: function () {
        return s.w() || 7;
      },
      S: function () {
        var e = s.j(),
          t = e % 10;
        return (
          t <= 3 && 1 == parseInt((e % 100) / 10, 10) && (t = 0),
          ["st", "nd", "rd"][t - 1] || "th"
        );
      },
      w: function () {
        return l.getDay();
      },
      z: function () {
        var e = new Date(s.Y(), s.n() - 1, s.j()),
          t = new Date(s.Y(), 0, 1);
        return Math.round((e - t) / 864e5);
      },
      W: function () {
        var e = new Date(s.Y(), s.n() - 1, s.j() - s.N() + 3),
          t = new Date(e.getFullYear(), 0, 4);
        return d(1 + Math.round((e - t) / 864e5 / 7), 2);
      },
      F: function () {
        return DATE_I18N.month_names[s.n() - 1];
      },
      m: function () {
        return d(s.n(), 2);
      },
      M: function () {
        return DATE_I18N.month_names_short[s.n() - 1];
      },
      n: function () {
        return l.getMonth() + 1;
      },
      t: function () {
        return new Date(s.Y(), s.n(), 0).getDate();
      },
      L: function () {
        var e = s.Y();
        return ((e % 4 == 0) & (e % 100 != 0)) | (e % 400 == 0);
      },
      o: function () {
        var e = s.n(),
          t = s.W();
        return s.Y() + (12 === e && t < 9 ? 1 : 1 === e && t > 9 ? -1 : 0);
      },
      Y: function () {
        return l.getFullYear();
      },
      y: function () {
        return s.Y().toString().slice(-2);
      },
      a: function () {
        return l.getHours() > 11 ? "pm" : "am";
      },
      A: function () {
        return s.a().toUpperCase();
      },
      B: function () {
        var e = 3600 * l.getUTCHours(),
          t = 60 * l.getUTCMinutes(),
          a = l.getUTCSeconds();
        return d(Math.floor((e + t + a + 3600) / 86.4) % 1e3, 3);
      },
      g: function () {
        return s.G() % 12 || 12;
      },
      G: function () {
        return l.getHours();
      },
      h: function () {
        return d(s.g(), 2);
      },
      H: function () {
        return d(s.G(), 2);
      },
      i: function () {
        return d(l.getMinutes(), 2);
      },
      s: function () {
        return d(l.getSeconds(), 2);
      },
      u: function () {
        return d(1e3 * l.getMilliseconds(), 6);
      },
      e: function () {
        throw "Not supported (see source code of date() for timezone on how to add support)";
      },
      I: function () {
        return new Date(s.Y(), 0) - Date.UTC(s.Y(), 0) !=
          new Date(s.Y(), 6) - Date.UTC(s.Y(), 6)
          ? 1
          : 0;
      },
      O: function () {
        var e = l.getTimezoneOffset(),
          t = Math.abs(e);
        return (e > 0 ? "-" : "+") + d(100 * Math.floor(t / 60) + (t % 60), 4);
      },
      P: function () {
        var e = s.O();
        return e.substr(0, 3) + ":" + e.substr(3, 2);
      },
      T: function () {
        return "UTC";
      },
      Z: function () {
        return 60 * -l.getTimezoneOffset();
      },
      c: function () {
        return "Y-m-d\\TH:i:sP".replace(i, m);
      },
      r: function () {
        return "D, d M Y H:i:s O".replace(i, m);
      },
      U: function () {
        return (l / 1e3) | 0;
      },
    }),
    (o = r),
    (l =
      void 0 === (c = n)
        ? new Date()
        : c instanceof Date
        ? new Date(c)
        : new Date(1e3 * c)),
    o.replace(i, m)
  );
  var r, n, l, s, o, c, i, m, d;
}
const bt = ({
    className: e = "overflow-hidden",
    author: t,
    readingTimeShortcode: a = "",
    date: r,
    hoverReadingTime: n = !0,
  }) => {
    var l, s, o;
    if (!t) return null;
    const { node: c } = t;
    return u.createElement(
      "a",
      {
        href: frontendObject.homeURL + c.uri,
        className: `nc-CardAuthor2 relative inline-flex items-center ${e}`,
        "data-nc-id": "CardAuthor2",
      },
      u.createElement(vt, {
        sizeClass: "h-10 w-10 text-base",
        containerClassName: "flex-shrink-0 mr-3",
        radius: "rounded-full",
        imgUrl:
          (null == (s = null == (l = c.ncUserMeta) ? void 0 : l.featuredImage)
            ? void 0
            : s.sourceUrl) || (null == (o = c.avatar) ? void 0 : o.url),
        userName: c.username,
      }),
      u.createElement(
        "div",
        { className: "overflow-hidden" },
        u.createElement(
          "h4",
          {
            className:
              "text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium truncate",
          },
          null == c ? void 0 : c.name
        ),
        u.createElement(
          "span",
          {
            className:
              "flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400 truncate",
          },
          u.createElement("span", null, xt(r || "")),
          a &&
            u.createElement(
              u.Fragment,
              null,
              u.createElement(
                "span",
                {
                  className:
                    "hidden lg:inline mx-1 transition-opacity " +
                    (n ? "opacity-0 group-hover:opacity-100" : ""),
                },
                "·"
              ),
              u.createElement("span", {
                className:
                  "hidden lg:inline transition-opacity truncate " +
                  (n ? "opacity-0 group-hover:opacity-100" : ""),
                dangerouslySetInnerHTML: { __html: a },
              })
            )
        )
      )
    );
  },
  Nt = ({ className: e = "relative", name: t, color: a = "blue", href: r }) => {
    const n = (e = !0) => {
        switch (a) {
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
      ? u.createElement(
          "a",
          {
            href: r || "",
            className: `transition-colors hover:text-white duration-300 ${l} ${n()}`,
          },
          t
        )
      : u.createElement("span", { className: `${l} ${n(!1)} ${e}` }, t);
  },
  kt = ({ className: e = "", itemClass: t = "", categories: a }) =>
    u.createElement(
      "div",
      {
        className: "nc-CategoryBadgeList flow-root ",
        "data-nc-id": "CategoryBadgeList",
      },
      u.createElement(
        "div",
        { className: `flex flex-wrap space-x-2 -my-1 ${e}` },
        (a || { edges: [] }).edges.map((e, a) => {
          var r, n;
          return u.createElement(Nt, {
            className: `relative my-1 ${t}`,
            key: a,
            name: e.node.name,
            href: e.node.link,
            color:
              null == (n = null == (r = e.node) ? void 0 : r.ncTaxonomyMeta)
                ? void 0
                : n.color,
          });
        })
      )
    ),
  wt = ({
    className: e = "",
    postType: t = "Standard",
    onClick: a,
    wrapSize: r = "w-11 h-11",
    iconSize: n = "w-6 h-6",
  }) =>
    u.createElement(
      "div",
      {
        className: `nc-PostTypeFeaturedIcon ${e}`,
        "data-nc-id": "PostTypeFeaturedIcon",
        onClick: a,
      },
      !!t &&
        "Standard" !== t &&
        u.createElement(
          "span",
          {
            className: `bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white ${r}`,
          },
          "post-format-video" === t
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
            : "post-format-audio" === t
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
            : "post-format-gallery" === t
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
  yt = ({
    className:
      e = `h-7 w-7 sm:h-8 sm:w-8 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center ${Re()}`,
    iconClass: t = "h-[18px] w-[18px]",
    panelMenusClass: a = " w-56 top-0 right-0 origin-top-right",
    title: r = "More",
    renderTrigger: n,
    renderItem: l,
    data: s,
    onClick: o,
  }) =>
    u.createElement(
      ae,
      { as: "div", className: "relative inline-block text-left" },
      u.createElement(
        ae.Button,
        { className: e, title: r },
        n
          ? n()
          : u.createElement(re, {
              className: t,
              "aria-hidden": "true",
              stroke: "none",
              fill: "currentColor",
            })
      ),
      u.createElement(
        ne,
        {
          as: g.exports.Fragment,
          enter: "transition ease-out duration-100",
          enterFrom: "transform opacity-0 scale-95",
          enterTo: "transform opacity-100 scale-100",
          leave: "transition ease-in duration-75",
          leaveFrom: "transform opacity-100 scale-100",
          leaveTo: "transform opacity-0 scale-95",
        },
        u.createElement(
          ae.Items,
          {
            className: `absolute ${a} bg-white dark:bg-neutral-900 rounded-lg divide-y divide-neutral-100 shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 focus:outline-none z-40`,
          },
          u.createElement(
            "div",
            {
              className:
                "px-1 py-2.5 text-sm text-neutral-6000 dark:text-neutral-300",
            },
            s.map((e) =>
              u.createElement(
                ae.Item,
                { key: e.id, onClick: () => o(e), "data-menu-item-id": e.id },
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
  Ct = frontendObject.socialsShare.map((e) => ({ id: e, name: e, icon: "" })),
  It = ({
    panelMenusClass: e = "w-52 right-0 bottom-0 origin-bottom-right",
    href: t = "/#",
    className:
      a = "nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8",
  }) =>
    u.createElement(yt, {
      className: a,
      panelMenusClass: `${e} max-h-80 overflow-y-auto`,
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
      renderItem: (e, a) =>
        u.createElement(
          "div",
          {
            className:
              "flex items-center rounded-md w-full truncate  " +
              (a
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                : ""),
          },
          ((e, a) => {
            const r = "flex items-center space-x-3 !px-3 !py-2 w-full";
            switch (e.id) {
              case "Facebook":
                return u.createElement(
                  ee,
                  { className: r, url: t },
                  u.createElement(te, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Twitter":
                return u.createElement(
                  X,
                  { className: r, url: t },
                  u.createElement(K, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Telegram":
                return u.createElement(
                  q,
                  { className: r, url: t },
                  u.createElement(J, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Whatsapp":
                return u.createElement(
                  H,
                  { url: t, className: r },
                  u.createElement(Z, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Linkedin":
                return u.createElement(
                  V,
                  { className: r, url: t },
                  u.createElement(W, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Pinterest":
                return u.createElement(
                  Q,
                  { media: "", className: r, url: t },
                  u.createElement(Y, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "VK":
                return u.createElement(
                  B,
                  { className: r, url: t },
                  u.createElement(F, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Odnoklassniki":
                return u.createElement(
                  G,
                  { className: r, url: t },
                  u.createElement(O, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Reddit":
                return u.createElement(
                  U,
                  { className: r, url: t },
                  u.createElement(D, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Tumblr":
                return u.createElement(
                  j,
                  { className: r, url: t },
                  u.createElement(R, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "MailRu":
                return u.createElement(
                  $,
                  { className: r, url: t },
                  u.createElement(P, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "LiveJournal":
                return u.createElement(
                  T,
                  { className: r, url: t },
                  u.createElement(z, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Viber":
                return u.createElement(
                  S,
                  { className: r, url: t },
                  u.createElement(M, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Workplace":
                return u.createElement(
                  A,
                  { className: r, url: t },
                  u.createElement(L, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Line":
                return u.createElement(
                  I,
                  { className: r, url: t },
                  u.createElement(_, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Weibo":
                return u.createElement(
                  y,
                  { className: r, url: t },
                  u.createElement(C, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Pocket":
                return u.createElement(
                  k,
                  { className: r, url: t },
                  u.createElement(w, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Instapaper":
                return u.createElement(
                  b,
                  { className: r, url: t },
                  u.createElement(N, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "Hatena":
                return u.createElement(
                  v,
                  { className: r, url: t },
                  u.createElement(x, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              case "email":
                return u.createElement(
                  f,
                  { className: r, url: t },
                  u.createElement(h, { round: !0, size: 24 }),
                  u.createElement("span", null, e.name)
                );
              default:
                return null;
            }
          })(e)
        ),
      data: Ct,
      onClick: () => {},
    }),
  _t = ({ className: e = "h-full", size: t = "normal", post: a }) => {
    var r;
    const {
      featuredImage: n,
      title: l,
      link: s,
      date: o,
      categories: c,
      excerpt: i,
      author: m,
      postFormats: d,
      ncPostMetaData: E,
    } = a;
    return u.createElement(
      "div",
      {
        className: `nc-Card2 group relative flex flex-col  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${e}`,
        "data-nc-id": "Card2",
      },
      u.createElement(
        "span",
        {
          className:
            "block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden",
        },
        u.createElement(Xe, {
          containerClassName: "absolute inset-0",
          src: (null == n ? void 0 : n.node.sourceUrl) || ".",
          alt: l,
        }),
        u.createElement(wt, {
          className: "absolute bottom-2 left-2",
          postType:
            null == (r = null == d ? void 0 : d.edges[0])
              ? void 0
              : r.node.slug,
          wrapSize: "w-8 h-8",
          iconSize: "w-4 h-4",
        })
      ),
      u.createElement(et, {
        href: s,
        className:
          "absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300",
      }),
      u.createElement("a", { href: s, className: "absolute inset-0" }),
      u.createElement(
        "div",
        { className: "p-4 sm:p-5 flex flex-col" },
        u.createElement(
          "div",
          { className: "space-y-3" },
          u.createElement(kt, { categories: c }),
          u.createElement(
            "h3",
            {
              className:
                "nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors " +
                ("large" === t ? "text-lg sm:text-2xl" : "text-base"),
            },
            u.createElement("a", {
              href: s,
              className: "line-clamp-2",
              title: l,
              dangerouslySetInnerHTML: { __html: l || "" },
            })
          ),
          i
            ? u.createElement("div", {
                className:
                  "block text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2",
                dangerouslySetInnerHTML: { __html: i },
              })
            : null
        ),
        u.createElement(bt, {
          className: "relative my-4",
          date: o,
          author: m,
          readingTimeShortcode: E.readingTimeShortcode,
          hoverReadingTime: !1,
        }),
        u.createElement(
          "div",
          { className: "flex items-center justify-between mt-auto" },
          u.createElement(nt, { className: "relative", postData: a }),
          u.createElement(It, { href: a.link })
        )
      )
    );
  },
  At = ({ className: e = "h-full", size: t = "normal" }) =>
    u.createElement(
      "div",
      {
        className: `nc-Card2Skeleton group relative flex flex-col  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${e}`,
        "data-nc-id": "Card2Skeleton",
      },
      u.createElement(
        "span",
        {
          className:
            "block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden",
        },
        u.createElement(Xe, {
          containerClassName: "absolute inset-0",
          src: ".",
        }),
        u.createElement(wt, {
          className: "absolute bottom-2 left-2",
          wrapSize: "w-8 h-8",
          iconSize: "w-4 h-4",
        })
      ),
      u.createElement(
        "div",
        { className: "p-4 sm:p-5 flex flex-col" },
        u.createElement(
          "div",
          { className: "space-y-3" },
          u.createElement(le, { width: "30%" }),
          u.createElement(
            "h3",
            {
              className:
                "nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors " +
                ("large" === t ? "text-lg sm:text-2xl" : "text-base"),
            },
            u.createElement(le, { width: "90%" })
          ),
          u.createElement(
            "div",
            {
              className:
                "block text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2",
            },
            u.createElement(le, { width: "70%" })
          )
        ),
        u.createElement("div", { className: "opacity-0" }, "xx"),
        u.createElement("div", { className: "opacity-0" }, "xx")
      )
    ),
  Lt = ({
    className: e = "leading-none",
    meta: t,
    hiddenAvatar: a = !1,
    size: r = "normal",
  }) => {
    var n, l, s, o;
    const { date: c, author: i } = t;
    return u.createElement(
      "div",
      {
        className: `nc-PostCardMeta inline-flex items-center text-neutral-800 dark:text-neutral-200 ${
          "normal" === r ? "text-xs" : "text-base"
        } ${e}`,
        "data-nc-id": "PostCardMeta",
      },
      u.createElement(
        "a",
        {
          href: frontendObject.homeURL + (null == i ? void 0 : i.node.uri),
          className: "relative flex items-center space-x-2 ",
        },
        !a &&
          u.createElement(vt, {
            radius: "rounded-full",
            sizeClass:
              "normal" === r
                ? "h-5 w-5 sm:h-7 sm:w-7 text-xs sm:text-sm"
                : "h-8 w-8 sm:h-10 sm:w-10 text-base sm:text-xl",
            imgUrl:
              (null ==
              (l =
                null == (n = null == i ? void 0 : i.node.ncUserMeta)
                  ? void 0
                  : n.featuredImage)
                ? void 0
                : l.sourceUrl) ||
              (null ==
              (o =
                null == (s = null == i ? void 0 : i.node) ? void 0 : s.avatar)
                ? void 0
                : o.url),
            userName: null == i ? void 0 : i.node.username,
          }),
        u.createElement(
          "span",
          {
            className:
              "block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium py-1 ",
          },
          u.createElement(
            "span",
            { className: "line-clamp-1" },
            " ",
            null == i ? void 0 : i.node.name
          )
        )
      ),
      u.createElement(
        u.Fragment,
        null,
        u.createElement(
          "span",
          {
            className:
              "text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium",
          },
          "·"
        ),
        u.createElement(
          "span",
          {
            className:
              "text-neutral-500 dark:text-neutral-400 font-normal flex-shrink-0",
          },
          c ? xt(c) : null
        )
      )
    );
  },
  St = ({ className: e = "h-full", post: t }) => {
    var a;
    const {
      title: r,
      link: n,
      featuredImage: l,
      categories: s,
      postFormats: o,
      ncPostMetaData: c,
    } = t;
    return u.createElement(
      "div",
      {
        className: `nc-Card6 relative flex group flex-row items-center p-0 sm:p-4 mb-2.5 sm:mb-0 [ sm:nc-box-has-hover ] [ sm:nc-dark-box-bg-has-hover ] ${e}`,
        "data-nc-id": "Card6",
      },
      u.createElement("a", { href: n, className: "absolute inset-0 z-0" }),
      u.createElement(
        "div",
        { className: "flex flex-col flex-grow" },
        u.createElement(
          "div",
          { className: "space-y-1.5 sm:space-y-3 mb-2 sm:mb-4" },
          u.createElement(kt, { categories: s }),
          u.createElement(
            "h3",
            { className: "block font-semibold text-sm sm:text-base" },
            u.createElement(
              "a",
              { href: n, className: "line-clamp-2", title: r },
              r
            )
          ),
          u.createElement(Lt, { meta: i({}, t) })
        ),
        u.createElement(
          "div",
          { className: "flex items-center flex-wrap justify-between mt-auto" },
          u.createElement(nt, { className: "relative", postData: t }),
          u.createElement(
            "div",
            {
              className:
                "flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ",
            },
            u.createElement("span", {
              dangerouslySetInnerHTML: { __html: c.readingTimeShortcode || "" },
            }),
            u.createElement(It, { href: t.link })
          )
        )
      ),
      u.createElement(
        "a",
        {
          href: n,
          className:
            "block relative flex-shrink-0 w-20 h-20 sm:w-40 sm:h-full ml-5 rounded-2xl overflow-hidden ",
        },
        u.createElement(Xe, {
          containerClassName: "absolute inset-0",
          className: "object-cover w-full h-full",
          src: (null == l ? void 0 : l.node.sourceUrl) || ".",
          alt: r,
        }),
        u.createElement(
          "span",
          { className: "absolute bottom-1 left-1" },
          u.createElement(wt, {
            wrapSize: "h-7 w-7",
            iconSize: "h-4 w-4",
            postType:
              null == (a = null == o ? void 0 : o.edges[0])
                ? void 0
                : a.node.slug,
          })
        )
      )
    );
  },
  Mt = ({ className: e = "h-full" }) =>
    u.createElement(
      "div",
      {
        className: `nc-Card6Skeleton relative flex group flex-row items-center p-0 sm:p-4 mb-2.5 sm:mb-0 [ sm:nc-box-has-hover ] [ sm:nc-dark-box-bg-has-hover ] ${e}`,
        "data-nc-id": "Card6Skeleton",
      },
      u.createElement(
        "div",
        { className: "flex flex-col flex-grow" },
        u.createElement(
          "div",
          { className: "space-y-1.5 sm:space-y-3 mb-2 sm:mb-4" },
          u.createElement(le, { width: "30%" }),
          u.createElement(
            "h3",
            { className: "block font-semibold text-sm sm:text-base" },
            u.createElement(le, { width: "80%" })
          ),
          u.createElement("div", { className: "opacity-0" }, "meta")
        ),
        u.createElement("div", { className: "opacity-0" }, "me")
      ),
      u.createElement(
        "div",
        {
          className:
            "block relative flex-shrink-0 w-20 h-20 sm:w-40 sm:h-full ml-5 rounded-2xl overflow-hidden ",
        },
        u.createElement(Xe, {
          containerClassName: "absolute inset-0",
          className: "object-cover w-full h-full",
          src: ".",
        })
      )
    ),
  Tt = ({ listPosts: e, isLoading: t }) => {
    var a;
    return u.createElement(
      "div",
      null,
      u.createElement(
        "div",
        { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-8" },
        t
          ? u.createElement(At, null)
          : e[0]
          ? u.createElement(_t, {
              size: "large",
              post: null == (a = e[0]) ? void 0 : a.node,
            })
          : null,
        u.createElement(
          "div",
          { className: "grid  grid-cols-1 gap-6 2xl:gap-8" },
          t
            ? [1, 1, 1].map((e, t) => u.createElement(Mt, { key: t }))
            : e
                .filter((e, t) => t > 0 && t < 4)
                .map((e, t) => u.createElement(St, { key: t, post: e.node }))
        )
      )
    );
  };
function zt(e, t = 300) {
  let a;
  return (...r) => {
    clearTimeout(a),
      (a = setTimeout(() => {
        e.apply(this, r);
      }, t));
  };
}
const $t = ({ galleryImgs: e }) => {
    var t, a;
    const r = g.exports.useRef(null),
      n = g.exports.useRef(null),
      l = g.exports.useRef(null),
      [s, o] = g.exports.useState(
        "rtl" ===
          (null == (t = document.querySelector("html"))
            ? void 0
            : t.getAttribute("dir"))
      ),
      [c, i] = g.exports.useState(
        "rtl" !==
          (null == (a = document.querySelector("html"))
            ? void 0
            : a.getAttribute("dir"))
      ),
      [m, d] = g.exports.useState(0);
    g.exports.useEffect(() => {
      E();
    }, []);
    const E = g.exports.useCallback(
      function () {
        var e, t, a;
        const s = r.current;
        if (!s) return;
        const c =
          (null == (e = s.querySelector("div")) ? void 0 : e.clientWidth) || 0;
        null == (t = n.current) ||
          t.addEventListener("click", () => {
            s.scrollTo(s.scrollLeft + c, 0);
          }),
          null == (a = l.current) ||
            a.addEventListener("click", () => {
              s.scrollTo(s.scrollLeft - c, 0);
            }),
          s.addEventListener("scroll", function () {
            m();
          });
        const m = zt(function () {
          var e;
          i(!1),
            o(!1),
            "rtl" ===
            (null == (e = document.querySelector("html"))
              ? void 0
              : e.getAttribute("dir"))
              ? (d(Math.floor(-s.scrollLeft / c)),
                s.clientWidth - s.scrollLeft >= s.scrollWidth
                  ? i(!0)
                  : 0 === s.scrollLeft && o(!0))
              : (d(Math.floor(s.scrollLeft / c)),
                s.clientWidth + s.scrollLeft >= s.scrollWidth
                  ? o(!0)
                  : 0 === s.scrollLeft && i(!0));
        }, 500);
      },
      [e]
    );
    return u.createElement(
      "div",
      {
        className:
          "nc-gallerySlider group relative z-10 xl:z-auto w-full h-full",
      },
      u.createElement(
        "div",
        {
          className:
            " h-full gallery_scroller hiddenScrollbar scrollBehaviorSmooth",
          ref: r,
        },
        e.map((e, t) =>
          u.createElement(
            "div",
            { className: " h-full w-full flex-shrink-0 ", key: t },
            u.createElement(Xe, { src: e, containerClassName: "w-full h-full" })
          )
        )
      ),
      u.createElement(
        "div",
        { className: "" },
        u.createElement(
          "div",
          {
            ref: l,
            className:
              "nc-gallerySlider__prevBtn absolute opacity-0 group-hover:opacity-100 z-20 left-2 top-1/2 transform -translate-y-1/2 ",
            title: Oe.prev,
          },
          !c &&
            u.createElement(Fe, {
              isOfGlide: !1,
              onlyPrev: !0,
              btnClassName: "w-8 h-8",
            })
        ),
        u.createElement(
          "div",
          {
            ref: n,
            className:
              "nc-gallerySlider__nextBtn absolute opacity-0 group-hover:opacity-100 z-20 right-2 top-1/2 transform -translate-y-1/2 ",
            title: Oe.next,
          },
          !s &&
            u.createElement(Fe, {
              isOfGlide: !1,
              onlyNext: !0,
              btnClassName: "w-8 h-8",
            })
        )
      ),
      u.createElement("div", {
        className:
          "absolute w-full left-0 bottom-0 h-6 bg-gradient-to-t from-neutral-800/50",
      }),
      u.createElement(
        "div",
        {
          className:
            "absolute z-10 bottom-3 left-0 w-full flex items-center justify-center glide__bullets",
        },
        e.map((e, t) =>
          u.createElement("div", {
            key: t,
            className:
              "glide__bullet w-[5px] h-[5px] bg-neutral-200 bg-opacity-50 rounded-full mx-0.5 " +
              (t === m ? "glide__bullet--active" : ""),
          })
        )
      )
    );
  },
  Pt = ({ className: e = "" }) =>
    u.createElement(
      "div",
      {
        className: `nc-LoadingVideo lds-ellipsis lds-ellipsis-video ${e}`,
        "data-nc-id": "LoadingVideo",
      },
      u.createElement("div", null),
      u.createElement("div", null),
      u.createElement("div", null),
      u.createElement("div", null)
    );
function jt(
  e,
  {
    threshold: t = 0,
    root: a = null,
    rootMargin: r = "0%",
    freezeOnceVisible: n = !1,
  }
) {
  const [l, s] = g.exports.useState(),
    o = (null == l ? void 0 : l.isIntersecting) && n,
    c = ([e]) => {
      s(e);
    };
  return (
    g.exports.useEffect(() => {
      const n = null == e ? void 0 : e.current;
      if (!!!window.IntersectionObserver || o || !n) return;
      const l = new IntersectionObserver(c, {
        threshold: t,
        root: a,
        rootMargin: r,
      });
      return l.observe(n), () => l.disconnect();
    }, [e, t, a, r, o]),
    l
  );
}
const Rt = ({ videoUrl: e, isHover: t, featuredImage: a }) => {
    let r = null;
    const n = g.exports.useRef(null),
      [l, s] = g.exports.useState(!0),
      [o, c] = g.exports.useState(!1),
      [i, m] = g.exports.useState(!1),
      [d, E] = g.exports.useState(0),
      [p, f] = g.exports.useState(!1);
    let h = !1;
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    ) && (h = !0);
    const v = jt(n, {
      freezeOnceVisible: !1,
      threshold: 0.999,
      rootMargin: "-20px 0px",
    });
    g.exports.useEffect(() => {
      if (!v) return;
      const e = ((null == v ? void 0 : v.intersectionRatio) || -1) > d;
      f(e), E((null == v ? void 0 : v.intersectionRatio) || 0);
    }, [v]),
      g.exports.useEffect(() => {
        if (o)
          return (
            r && clearTimeout(r),
            (r = setTimeout(() => {
              c(!1);
            }, 2e3)),
            () => {
              r && clearTimeout(r);
            }
          );
      }, [o]);
    const x = h ? p : t;
    g.exports.useEffect(() => {
      if (!x) return m(!1);
    }, [x]);
    return u.createElement(
      "div",
      { className: "nc-MediaVideo absolute inset-0", ref: n },
      (!e || !x) &&
        u.createElement(Xe, {
          containerClassName: "absolute inset-0",
          src: (null == a ? void 0 : a.node.sourceUrl) || ".",
        }),
      !!e &&
        !x &&
        u.createElement(
          "span",
          { className: "absolute inset-0 flex items-center justify-center " },
          u.createElement(wt, {
            className:
              "hover:scale-105 transform cursor-pointer transition-transform nc-will-change-transform",
            postType: "post-format-video",
          })
        ),
      !!e &&
        x &&
        u.createElement(
          "div",
          null,
          u.createElement(se, {
            url: e,
            muted: l,
            playing: !0,
            style: { opacity: i ? 1 : 0, display: i ? "block" : "none" },
            className: " absolute bg-neutral-900 inset-0",
            width: "100%",
            height: "100%",
            onStart: () => {
              c(() => !0), m(() => !0);
            },
          }),
          u.createElement(
            "div",
            {
              className:
                (i ? "opacity-0 hidden" : "opacity-100") +
                " absolute bg-neutral-900 bg-opacity-30 flex items-center justify-center inset-0",
            },
            u.createElement(Pt, null)
          ),
          u.createElement(
            "div",
            {
              className:
                "absolute z-20 bottom-2 left-2 h-6 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center text-sm transform transition-transform nc-will-change-transform " +
                (o ? "pl-[6px] pr-2" : "w-6 hover:scale-125"),
              onClick: () => s(!l),
            },
            l
              ? u.createElement(
                  u.Fragment,
                  null,
                  u.createElement("i", { className: "las la-volume-off" }),
                  o &&
                    u.createElement(
                      "span",
                      { className: "ml-1 inline-block text-[9px]" },
                      "Click here to unmute"
                    )
                )
              : u.createElement("i", { className: "las la-volume-up" })
          )
        )
    );
  },
  Ut = () => oe(),
  Dt = ce,
  Gt = ie({
    name: "mediaRunning",
    initialState: {},
    reducers: {
      changeCurrentMediaRunning: (e, t) => i(i({}, e), t.payload),
      changeStateMediaRunning: (e, t) => m(i({}, e), { state: t.payload }),
      removeMediaRunning: (e) => ({ listPostAudio: e.listPostAudio }),
      addNewListPostAudio: (e, t) =>
        m(i({}, e), { listPostAudio: [...(e.listPostAudio || []), t.payload] }),
    },
  }),
  {
    changeCurrentMediaRunning: Ot,
    changeStateMediaRunning: Bt,
    removeMediaRunning: Ft,
    addNewListPostAudio: Qt,
  } = Gt.actions,
  Yt = (e) => e.mediaRunning;
var Vt = Gt.reducer,
  Wt =
    "data:image/gif;base64,R0lGODlhJAAkAIABAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NmRjOGMyNC03YmYxLTQxZTMtYjQ2Zi1mY2ZhMDk4MDE1YWYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTBDRTc0QzlGNDBEMTFFQTk4NDZENjI0QzI1MENFQzgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTBDRTc0QzhGNDBEMTFFQTk4NDZENjI0QzI1MENFQzgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzBhNGU4OWYtNjc4Yy00NmMyLTg4NmUtYzIxNGE0NTIwZDRjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ODRlMDBjYmEtZjhlNy03YzQ4LWE4MTgtNDc3NTI3MGQ1ZTAyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkECQgAAQAsAAAAACQAJAAAAnKMj5nArQ9jc7HWyax+GOx/dCAojltpWmgqYazqvu0kz1StrHgYp6tO6gWAn59wZKSxkjcTM7MUEk/SY1BpmGqeHhs0W8Vywk3tkPw9iztcBLfNW7Pl9PLcXk/f8Xz9vguWB6h254Y2+Id4aLjH2Kc4UQAAIfkECQgAAQAsAAAAACQAJAAAAnSMj6nL7Q+jnAzYS+XFGW7beV/4fADpmGijrkvrJnA2z1Q9hvhG7lznA+lyBpuMGAieDiYlQulkIpvTKk9KFRatv2RW671uxeHskwv+ptHLsRnbhbLPZHW7vK6r6XF21J33Bngnp2fY98UXuNikSOg3B8dYAAAh+QQJCAABACwAAAAAJAAkAAACfIyPqcvtD6OctNqLKdg8N955C7iJI4mQAKam6NUeMTMHda3cr4EnOugCfnY2Yi8Y4hmXKqHSWYQ2mclodSqllmTY7fOqbSK9VnLXHB6Ludk2Vg1nv+Vo9zT+rc/zK3qf/wNmt8aHV0Z4aHj2l+inFqgXiQjJuKgYRnkJUgAAIfkECQgAAQAsAAAAACQAJAAAAnuMj6nL7Q+jnLTaC7K+T2/eeBkYiiQjAlyKsJh5uJYc0BRtTzgMpbsn8fFqQ4cQGCuWjqok0vA7toZR4fRJxDJHzg+Uur16s+Nt86sFM8VcdDncbZPlZvZ5fq/H82rp3m5XxZe29mfoZnWIF9hH1+gDqKiHOPhWSBlJWQAAIfkECQgAAQAsAAAAACQAJAAAAn6Mj6nL7Q8RmDTaQ+u1eW7efVg4ZqLRARIppqsZpW6pQTIbzPZd57jD6+keQQ/NuAu+esDiEkl0HlUxKerXKFKvsCTvuY0qp2Dw8IzTlslTdNf3VrO5Qiu8Hre78d/5HSpHB5imR5g3Jhi2d7OWaGbIN4j4pwjJ6Lco00gJVgAAIfkECQgAAQAsAAAAACQAJAAAAn2EH6nL7XnQmxRGULO7WHsbfRPHiQ95mRsqqQvbBqUGG29K13eYw3tMqXVAwJFOMcsIf7YeizmsLJE45ZHYtPqoPO2TWzxdZVXpOGneYqPBc7mtJnflsekaCkXry3Z61h/VtzcnyGcYN1jnRnj4dQf2V8g46QiIB0ly+bhWAAAh+QQJCAABACwAAAAAJAAkAAACfYyPqcvtD+MDtMobqt6Y7Q90C8iJCamZJ0qpCNu6Bhwen0S/JZTb+wTTpSK92c9RzBwbyRsx6BvyoEYpkCW0RLVVVDbWBSuxW7EzDPrW0OrzmPs2U+Nrevvnzs/11ib+T8ZWVufXB+g1qHZnyAhX6HhIopg4yAfZKEkpiFYAACH5BAkIAAEALAAAAAAkACQAAAJ7jI+py+0Po5y02ouB3tht3jGfFopjuYwqgK5npCLuJ8XHDEK2gZP3ywMGeqwfzZgb9mTCnRLHPAalz1k06SRefVPsEsmthrXgYnf8PZvFa7J6206z4fBs8w4t08t2at+qF6j2h+YnRxiX9ybIhrg3iOdlqDjH6Fa5qFYAACH5BAkIAAEALAAAAAAkACQAAAJ1jI+py+0Po5y02otzArxr1nmfEnIjWZ5bqh4l0Lqs8WK1HNpzcFs9/9o5fkFhg1gUQZBJWISZlECL0l3ThFMCc1lq10mzXhFT8Db6JYubam7Yffa+teVymz5O6+fyuLm+hgd39ReIxRd0d+inmLjH+GX3+FIAACH5BAUIAAEALAAAAAAkACQAAAJwjI+py+0Po5y0PoCzhVlv12EfGI5NCJgMqi5sm7zwIc9BPeOw3vKqb6oBLyUaqshB3o4diZDpSTaN0FTkWUVgo8sslbtlapXh43hqKJfP4Ko1TY574ehue24XffV0KJuf9xa4tifoZih351f4h9hRAAA7";
const Ht = () =>
    navigator.userAgent.indexOf("Safari") > -1 &&
    navigator.userAgent.indexOf("Chrome") <= -1,
  Zt = ({
    className: e = "",
    post: t,
    renderChildren: a,
    renderDefaultBtn: r,
    renderLoadingBtn: n,
    renderPlayingBtn: l,
  }) => {
    var s;
    const o = Dt(Yt),
      c = Ut(),
      i = o.state;
    g.exports.useEffect(() => {
      t && Ht() && c(Qt(t));
    }, [t]);
    const m = () =>
      r
        ? r()
        : u.createElement(wt, {
            className:
              "z-20 hover:scale-105 transform cursor-pointer transition-transform nc-will-change-transform",
            postType: "post-format-audio",
          });
    return u.createElement(
      "div",
      {
        className: `nc-ButtonPlayMusicRunningContainer ${e}`,
        "data-nc-id": "ButtonPlayMusicRunningContainer",
        onClick: () => {
          return (
            console.log(112233, o.state),
            o.postData && o.state
              ? o.postData.id !== t.id
                ? t.ncmazAudioUrl.audioUrl ===
                  (null ==
                  (a = null == (e = o.postData) ? void 0 : e.ncmazAudioUrl)
                    ? void 0
                    : a.audioUrl)
                  ? c(Ot({ postData: t, state: "playing" }))
                  : c(Ot({ postData: t, state: "loading" }))
                : "playing" === o.state
                ? c(Bt("paused"))
                : "loading" !== o.state
                ? c(Bt("playing"))
                : void 0
              : c(Ot({ postData: t, state: "loading" }))
          );
          var e, a;
        },
      },
      a
        ? a((null == (s = o.postData) ? void 0 : s.id) === t.id, i)
        : u.createElement(
            u.Fragment,
            null,
            (!i || "paused" === i || "ended" === i) && m(),
            "loading" === i &&
              ((null == (d = o.postData) ? void 0 : d.id) !== t.id
                ? m()
                : n
                ? n()
                : u.createElement(Pt, null)),
            "playing" === i &&
              (() => {
                var e;
                return (null == (e = o.postData) ? void 0 : e.id) !== t.id
                  ? m()
                  : l
                  ? l()
                  : u.createElement(
                      "span",
                      {
                        className:
                          "z-10 bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-11 h-11 cursor-pointer",
                      },
                      u.createElement("img", {
                        className: "w-5",
                        src: Wt,
                        alt: "paused",
                      })
                    );
              })()
          )
    );
    var d;
  },
  qt = ({ post: e }) => {
    var t;
    return u.createElement(
      "div",
      null,
      u.createElement(Xe, {
        containerClassName: "absolute inset-0",
        src: (null == (t = e.featuredImage) ? void 0 : t.node.sourceUrl) || ".",
      }),
      e.ncmazAudioUrl.audioUrl
        ? u.createElement(Zt, {
            className:
              "absolute bg-neutral-900 bg-opacity-30 flex items-center justify-center inset-0",
            post: e,
          })
        : u.createElement(
            "span",
            { className: "absolute inset-0 flex items-center justify-center " },
            u.createElement(wt, {
              className:
                "hover:scale-105 transform cursor-pointer transition-transform nc-will-change-transform",
              postType: "post-format-audio",
            })
          )
    );
  };
function Jt(e) {
  const {
    image1: t,
    image2: a,
    image3: r,
    image4: n,
    image5: l,
    image6: s,
    image7: o,
    image8: c,
    image9: i,
    image10: m,
  } = e;
  return [
    (null == t ? void 0 : t.sourceUrl) || "",
    (null == a ? void 0 : a.sourceUrl) || "",
    (null == r ? void 0 : r.sourceUrl) || "",
    (null == n ? void 0 : n.sourceUrl) || "",
    (null == l ? void 0 : l.sourceUrl) || "",
    (null == s ? void 0 : s.sourceUrl) || "",
    (null == o ? void 0 : o.sourceUrl) || "",
    (null == c ? void 0 : c.sourceUrl) || "",
    (null == i ? void 0 : i.sourceUrl) || "",
    (null == m ? void 0 : m.sourceUrl) || "",
  ].filter((e) => !!e);
}
const Xt = ({ className: e = "w-full h-full", post: t, isHover: a = !1 }) => {
    var r, n;
    const {
        featuredImage: l,
        postFormats: s,
        ncmazVideoUrl: o,
        ncmazGalleryImgs: c,
      } = t,
      i =
        null ==
        (n = null == (r = null == s ? void 0 : s.edges[0]) ? void 0 : r.node)
          ? void 0
          : n.slug;
    return u.createElement(
      "div",
      {
        className: `nc-PostFeaturedMedia relative ${e}`,
        "data-nc-id": "PostFeaturedMedia",
      },
      "post-format-gallery" === i
        ? (() => {
            const e = Jt(c);
            return e.length
              ? u.createElement(
                  g.exports.Fragment,
                  null,
                  u.createElement(Xe, {
                    containerClassName: "absolute inset-0",
                    src: ".",
                  }),
                  u.createElement($t, { galleryImgs: e })
                )
              : u.createElement(Xe, {
                  containerClassName: "absolute inset-0",
                  src: (null == l ? void 0 : l.node.sourceUrl) || ".",
                });
          })()
        : "post-format-video" === i
        ? u.createElement(Rt, {
            featuredImage: l,
            isHover: a,
            videoUrl: o.videoUrl,
          })
        : "post-format-audio" === i
        ? u.createElement(qt, { post: t })
        : u.createElement(
            "div",
            { className: "absolute inset-0" },
            u.createElement(Xe, {
              containerClassName: "absolute inset-0",
              src: (null == l ? void 0 : l.node.sourceUrl) || ".",
            })
          )
    );
  },
  Kt = ({
    className: e = "h-full",
    post: t,
    hiddenAuthor: a = !1,
    ratio: r = "aspect-w-4 aspect-h-3",
    onClickLike: n,
  }) => {
    const { title: l, link: s, categories: o, date: c } = t,
      [i, m] = g.exports.useState(!1);
    return u.createElement(
      "div",
      {
        className: `nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${e}`,
        "data-nc-id": "Card11",
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
      },
      u.createElement(
        "div",
        {
          className: `block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${r}`,
        },
        u.createElement(
          "div",
          null,
          u.createElement(Xt, { post: t, isHover: i })
        )
      ),
      u.createElement(
        "span",
        { className: "absolute top-3 inset-x-3 z-10" },
        u.createElement(kt, { categories: o })
      ),
      u.createElement("a", { href: s, className: "absolute inset-0" }),
      u.createElement(
        "div",
        { className: "p-4 h-full flex flex-col flex-grow" },
        a
          ? u.createElement(
              "span",
              { className: "text-xs text-neutral-500" },
              c
            )
          : u.createElement(Lt, { meta: t }),
        u.createElement(
          "h3",
          {
            className:
              "nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3",
          },
          l
            ? u.createElement("a", {
                href: s,
                className: "line-clamp-2",
                dangerouslySetInnerHTML: { __html: l },
                title: l,
              })
            : null
        ),
        u.createElement(
          "div",
          { className: "flex items-end justify-between mt-auto" },
          u.createElement(nt, {
            onClickLike: n,
            className: "relative",
            postData: t,
          }),
          u.createElement(It, { href: t.link })
        )
      )
    );
  },
  ea = ({ className: e = "h-full", ratio: t = "aspect-w-4 aspect-h-3" }) => (
    g.exports.useState(!1),
    u.createElement(
      "div",
      {
        className: `nc-Card11Skeleton relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${e}`,
      },
      u.createElement(
        "div",
        {
          className: `block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${t}`,
        },
        u.createElement(
          "div",
          null,
          u.createElement(Xe, { containerClassName: "w-full h-full", src: "." })
        )
      ),
      u.createElement(
        "span",
        { className: "absolute top-3 inset-x-3" },
        u.createElement(le, { width: "40%" })
      ),
      u.createElement(
        "div",
        { className: "p-4 h-full flex flex-col flex-grow" },
        u.createElement(le, null),
        u.createElement(
          "h3",
          {
            className:
              "nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3",
          },
          u.createElement(le, null)
        ),
        u.createElement(
          "div",
          { className: "flex items-end justify-between mt-auto " },
          u.createElement(le, { width: "50%" })
        )
      )
    )
  ),
  ta = ({ listPosts: e = [], isLoading: t }) =>
    u.createElement(
      "div",
      {
        className:
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",
      },
      u.createElement(
        "div",
        { className: "grid grid-cols-1 gap-6" },
        t
          ? [1, 1].map((e, t) =>
              u.createElement(ea, { ratio: "aspect-w-5 aspect-h-3", key: t })
            )
          : e
              .filter((e, t) => t < 3 && t > 0)
              .map((e, t) =>
                u.createElement(Kt, {
                  ratio: "aspect-w-5 aspect-h-3",
                  key: t,
                  post: e.node,
                })
              )
      ),
      u.createElement(
        "div",
        { className: "lg:col-span-2" },
        t
          ? u.createElement(At, null)
          : e[0]
          ? u.createElement(_t, { size: "large", post: e[0].node })
          : null
      ),
      u.createElement(
        "div",
        {
          className:
            "grid gap-6 md:grid-cols-2 xl:grid-cols-1 md:col-span-3 xl:col-span-1",
        },
        t
          ? [1, 1].map((e, t) =>
              u.createElement(ea, { ratio: "aspect-w-5 aspect-h-3", key: t })
            )
          : e
              .filter((e, t) => t < 5 && t >= 3)
              .map((e, t) =>
                u.createElement(Kt, {
                  ratio: "aspect-w-5 aspect-h-3",
                  key: t,
                  post: e.node,
                })
              )
      )
    ),
  aa = ({
    className: e = "h-full",
    ratio: t = "aspect-w-6 aspect-h-5 sm:aspect-w-3 sm:aspect-h-4",
    post: a,
    hoverClass: r = "",
  }) => {
    var n, l;
    const {
      title: s,
      link: o,
      featuredImage: c,
      categories: i,
      author: m,
      date: d,
      postFormats: E,
    } = a;
    return u.createElement(
      "div",
      {
        className: `nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden ${r} ${e}`,
        "data-nc-id": "Card9",
      },
      u.createElement(
        "div",
        {
          className:
            "absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-30 duration-300",
        },
        u.createElement(nt, { className: "relative", postData: a }),
        u.createElement(It, {
          panelMenusClass: "w-52 right-0 top-0 origin-top-right",
          href: a.link,
        })
      ),
      u.createElement("div", {
        className: `flex items-start relative w-full ${t}`,
      }),
      "post-format-audio" ===
        (null == (n = null == E ? void 0 : E.edges[0]) ? void 0 : n.node.slug)
        ? u.createElement(
            "div",
            { className: "absolute inset-0" },
            u.createElement(Xt, { post: a })
          )
        : u.createElement(
            "a",
            { href: o },
            u.createElement(Xe, {
              containerClassName: "absolute inset-0 rounded-3xl",
              className: "object-cover w-full h-full rounded-3xl",
              src: (null == c ? void 0 : c.node.sourceUrl) || ".",
            }),
            u.createElement(wt, {
              className: "absolute top-3 left-3 group-hover:hidden",
              postType:
                null == (l = null == E ? void 0 : E.edges[0])
                  ? void 0
                  : l.node.slug,
              wrapSize: "w-7 h-7",
              iconSize: "w-4 h-4",
            }),
            u.createElement("span", {
              className:
                "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity",
            })
          ),
      u.createElement("a", {
        href: o,
        className:
          "absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black",
      }),
      u.createElement(
        "div",
        {
          className: "absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow",
        },
        u.createElement("a", { href: o, className: "absolute inset-0" }),
        u.createElement(
          "div",
          { className: "mb-3" },
          u.createElement(kt, { categories: i })
        ),
        u.createElement(
          "div",
          { className: "inline-flex items-center text-xs text-neutral-300" },
          u.createElement(
            "a",
            { href: o, className: "block relative overflow-hidden" },
            u.createElement(
              "h3",
              {
                className:
                  "block text-base sm:text-lg font-semibold text-white ",
              },
              u.createElement(
                "span",
                { className: "line-clamp-2", title: s },
                s
              )
            ),
            u.createElement(
              "div",
              { className: "flex mt-2.5 truncate" },
              u.createElement(
                "span",
                {
                  className:
                    "block text-neutral-200 hover:text-white font-medium truncate",
                },
                null == m ? void 0 : m.node.name
              ),
              u.createElement(
                "span",
                { className: "mx-[6px] font-medium" },
                "·"
              ),
              u.createElement(
                "span",
                { className: "font-normal flex-shrink-0" },
                xt(d || "")
              )
            )
          )
        )
      )
    );
  },
  ra = ({
    className: e = "h-full",
    ratio: t = "aspect-w-6 aspect-h-5 sm:aspect-w-3 sm:aspect-h-4",
    hoverClass: a = "",
  }) =>
    u.createElement(
      "div",
      {
        className: `nc-Card9Skeleton relative flex flex-col group rounded-3xl overflow-hidden ${a} ${e}`,
        "data-nc-id": "Card9Skeleton",
      },
      u.createElement("div", {
        className: `flex items-start relative w-full ${t}`,
      }),
      u.createElement(
        "div",
        null,
        u.createElement(Xe, {
          containerClassName: "absolute inset-0 rounded-3xl",
          className: "object-cover w-full h-full rounded-3xl",
          src: ".",
        })
      ),
      u.createElement(
        "div",
        {
          className: "absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow",
        },
        u.createElement(
          "div",
          { className: "mb-3" },
          u.createElement(le, { width: "90%" }),
          u.createElement(le, { width: "50%" })
        )
      )
    ),
  na = ({ listPosts: e, isLoading: t }) =>
    u.createElement(
      "div",
      { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 2xl:gap-8" },
      t
        ? u.createElement(At, null)
        : e[0]
        ? u.createElement(_t, { size: "large", post: e[0].node })
        : null,
      u.createElement(
        "div",
        { className: "grid grid-cols-1 sm:grid-cols-2 gap-6 2xl:gap-8" },
        t
          ? [1, 1, 1, 1].map((e, t) =>
              u.createElement(ra, {
                ratio: "aspect-w-5 aspect-h-4 sm:aspect-w-3 sm:aspect-h-3",
                key: t,
              })
            )
          : e
              .filter((e, t) => t < 5 && t >= 1)
              .map((e, t) =>
                u.createElement(aa, {
                  ratio: "aspect-w-5 aspect-h-4 sm:aspect-w-3 sm:aspect-h-3",
                  key: t,
                  post: e.node,
                })
              )
      )
    ),
  la = ({ className: e = "h-full", post: t }) => {
    var a;
    const {
      title: r,
      link: n,
      featuredImage: l,
      excerpt: s,
      categories: o,
      postFormats: c,
    } = t;
    return u.createElement(
      "div",
      {
        className: `nc-Card8 group relative [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${e}`,
        "data-nc-id": "Card8",
      },
      u.createElement(et, {
        href: n,
        className:
          "absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300",
      }),
      u.createElement(
        "a",
        {
          href: n,
          className:
            "block w-full h-0 pt-[100%] sm:pt-[55%] rounded-xl overflow-hidden",
        },
        u.createElement(Xe, {
          containerClassName: "absolute inset-0",
          src: (null == l ? void 0 : l.node.sourceUrl) || ".",
          alt: r,
        }),
        u.createElement(wt, {
          className: "absolute top-4 left-4",
          postType:
            null == (a = null == c ? void 0 : c.edges[0])
              ? void 0
              : a.node.slug,
          wrapSize: "w-8 h-8",
          iconSize: "w-4 h-4",
        })
      ),
      u.createElement("a", {
        href: n,
        className:
          "absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-neutral-900 ",
      }),
      u.createElement(
        "div",
        { className: "absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col" },
        u.createElement("a", { href: n, className: "absolute inset-0" }),
        u.createElement(kt, { categories: o }),
        u.createElement(
          "h3",
          {
            className:
              "mt-3 relative block font-semibold text-neutral-50 text-lg sm:text-xl",
          },
          u.createElement(
            "a",
            { href: n, className: "line-clamp-2", title: r },
            r
          )
        ),
        u.createElement(
          "div",
          { className: "hidden sm:block mt-2" },
          u.createElement("span", {
            className: "text-neutral-300 text-sm line-clamp-1",
            dangerouslySetInnerHTML: { __html: s || "" },
          })
        )
      )
    );
  },
  sa = ({ className: e = "h-full" }) =>
    u.createElement(
      "div",
      {
        className: `nc-Card8Skeleton group relative [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${e}`,
        "data-nc-id": "Card8Skeleton",
      },
      u.createElement(
        "div",
        {
          className:
            "block w-full h-0 pt-[100%] sm:pt-[55%] rounded-xl overflow-hidden",
        },
        u.createElement(Xe, {
          containerClassName: "absolute inset-0",
          src: ".",
        })
      ),
      u.createElement(
        "div",
        { className: "absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col" },
        u.createElement(le, { width: "30%" }),
        u.createElement(
          "h3",
          {
            className:
              "mt-3 relative block font-semibold text-neutral-50 text-lg sm:text-xl",
          },
          u.createElement(le, { width: "90%" })
        ),
        u.createElement(
          "div",
          { className: "hidden sm:block mt-2" },
          u.createElement("span", { className: "opacity-0" }, "dd")
        )
      )
    ),
  oa = ({ listPosts: e, isLoading: t }) =>
    u.createElement(
      "div",
      {
        className:
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8",
      },
      t
        ? u.createElement(sa, { className: "sm:col-span-2" })
        : e[0]
        ? u.createElement(la, { className: "sm:col-span-2", post: e[0].node })
        : null,
      t
        ? [1, 1].map((e, t) => u.createElement(ra, { key: t }))
        : e
            .filter((e, t) => t < 3 && t >= 1)
            .map((e, t) => u.createElement(aa, { key: t, post: e.node })),
      t
        ? [1, 1].map((e, t) => u.createElement(ra, { key: t }))
        : e
            .filter((e, t) => t < 5 && t >= 3)
            .map((e, t) => u.createElement(aa, { key: t, post: e.node })),
      t
        ? u.createElement(sa, { className: "sm:col-span-2" })
        : e[5]
        ? u.createElement(la, { className: "sm:col-span-2", post: e[5].node })
        : null
    ),
  ca = ({ className: e = "h-full", post: t }) => {
    var a;
    const {
      title: r,
      link: n,
      featuredImage: l,
      excerpt: s,
      postFormats: o,
    } = t;
    return u.createElement(
      "div",
      {
        className: `nc-Card12 group relative flex flex-col ${e}`,
        "data-nc-id": "Card12",
      },
      u.createElement(
        "a",
        {
          href: n,
          className:
            "block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden",
        },
        u.createElement(Xe, {
          containerClassName: "absolute inset-0",
          src: (null == l ? void 0 : l.node.sourceUrl) || ".",
          alt: r,
        }),
        u.createElement(
          "span",
          null,
          u.createElement(wt, {
            className: "absolute bottom-2 left-2",
            postType:
              null == (a = null == o ? void 0 : o.edges[0])
                ? void 0
                : a.node.slug,
            wrapSize: "w-8 h-8",
            iconSize: "w-4 h-4",
          })
        )
      ),
      u.createElement(et, {
        href: n,
        className:
          "absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300",
      }),
      u.createElement(
        "div",
        { className: " mt-8 pr-10 flex flex-col" },
        u.createElement(
          "h3",
          {
            className:
              "nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl",
          },
          u.createElement(
            "a",
            { href: n, className: "line-clamp-2", title: r },
            r
          )
        ),
        s &&
          u.createElement(
            "span",
            {
              className:
                "hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400",
            },
            u.createElement("span", {
              className: "line-clamp-2",
              dangerouslySetInnerHTML: { __html: s },
            })
          ),
        u.createElement(Lt, { className: "mt-5", meta: t })
      )
    );
  },
  ia = ({ className: e = "h-full" }) =>
    u.createElement(
      "div",
      {
        className: `nc-Card12Skeleton group relative flex flex-col ${e}`,
        "data-nc-id": "Card12Skeleton",
      },
      u.createElement(
        "div",
        {
          className:
            "block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden",
        },
        u.createElement(Xe, {
          containerClassName: "absolute inset-0",
          src: ".",
        })
      ),
      u.createElement(
        "div",
        { className: " mt-8 pr-10 flex flex-col" },
        u.createElement(
          "h3",
          {
            className:
              "nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl",
          },
          u.createElement(le, { width: "70%" })
        ),
        u.createElement(
          "span",
          {
            className:
              "hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400",
          },
          u.createElement(le, { width: "80%" })
        ),
        u.createElement(
          "div",
          { className: "mt-5" },
          u.createElement(le, { width: "30%" })
        )
      )
    ),
  ma = ({ className: e = "", post: t }) => {
    var a;
    const {
      title: r,
      link: n,
      excerpt: l,
      featuredImage: s,
      date: o,
      postFormats: c,
    } = t;
    return u.createElement(
      "div",
      {
        className: `nc-Card13 relative flex justify-between ${e}`,
        "data-nc-id": "Card13",
      },
      u.createElement(
        "div",
        { className: "flex flex-col py-2" },
        u.createElement(
          "h3",
          {
            className: "nc-card-title block font-semibold text-sm sm:text-base",
          },
          u.createElement(
            "a",
            { href: n, className: "line-clamp-2", title: r },
            r
          )
        ),
        l &&
          u.createElement(
            "span",
            {
              className:
                "hidden sm:block my-3 text-neutral-500 dark:text-neutral-400 ",
            },
            u.createElement("span", {
              className: "line-clamp-2",
              dangerouslySetInnerHTML: { __html: l },
            })
          ),
        u.createElement(
          "span",
          { className: "mt-4 block sm:hidden text-xs text-neutral-500 " },
          o
        ),
        u.createElement(
          "div",
          { className: "mt-auto hidden sm:block" },
          u.createElement(Lt, { meta: i({}, t) })
        )
      ),
      u.createElement(
        "a",
        {
          href: n,
          className: "block relative flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5",
        },
        u.createElement(Xe, {
          containerClassName: "absolute inset-0 ",
          className: "object-cover w-full h-full rounded-xl sm:rounded-3xl",
          src: (null == s ? void 0 : s.node.sourceUrl) || ".",
          alt: r,
        }),
        u.createElement(wt, {
          className: "absolute bottom-2 left-2",
          postType:
            null == (a = null == c ? void 0 : c.edges[0])
              ? void 0
              : a.node.slug,
          wrapSize: "w-8 h-8",
          iconSize: "w-4 h-4",
        })
      )
    );
  },
  da = ({ className: e = "" }) =>
    u.createElement(
      "div",
      {
        className: `nc-Card13Skeleton relative flex justify-between ${e}`,
        "data-nc-id": "Card13Skeleton",
      },
      u.createElement(
        "div",
        { className: "flex flex-col py-2 flex-grow" },
        u.createElement(
          "h3",
          { className: "nc-card-title block w-full font-semibold text-base" },
          u.createElement(le, { width: "90%" })
        ),
        u.createElement(
          "span",
          {
            className:
              "hidden sm:block w-full my-3 text-neutral-500 dark:text-neutral-400 ",
          },
          u.createElement(le, { width: "80%" })
        ),
        u.createElement(
          "div",
          { className: "mt-auto " },
          u.createElement(le, { width: "30%" })
        )
      ),
      u.createElement(
        "div",
        {
          className: "block relative flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5",
        },
        u.createElement(Xe, {
          containerClassName: "absolute inset-0 ",
          className: "object-cover w-full h-full rounded-xl sm:rounded-3xl",
          src: ".",
        })
      )
    ),
  ua = ({ listPosts: e, isLoading: t }) =>
    u.createElement(
      "div",
      { className: "grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-7" },
      t
        ? u.createElement(ia, null)
        : e[0]
        ? u.createElement(ca, { post: e[0].node })
        : null,
      u.createElement(
        "div",
        { className: "grid grid-cols-1 gap-5 md:gap-7" },
        t
          ? [1, 2, 3].map((e, t) => u.createElement(da, { key: t }))
          : e
              .filter((e, t) => t < 4 && t > 0)
              .map((e, t) => u.createElement(ma, { key: t, post: e.node }))
      )
    ),
  Ea = ({ listPosts: e, isLoading: t }) =>
    u.createElement(
      "div",
      null,
      t
        ? u.createElement(
            "main",
            { className: "relative" },
            u.createElement(
              "div",
              {
                className:
                  "aspect-w-9 aspect-h-9 md:aspect-h-5 rounded-3xl lg:rounded-[40px] overflow-hidden",
              },
              u.createElement(Xe, {
                containerClassName: "absolute inset-0",
                src: ".",
              }),
              u.createElement(
                "div",
                null,
                u.createElement("span", {
                  className:
                    "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black",
                })
              ),
              u.createElement(
                "div",
                {
                  className:
                    "group dark absolute md:w-1/2 lg:w-2/3 max-w-2xl flex flex-col justify-end p-5 lg:p-14",
                },
                u.createElement(
                  "div",
                  { className: "" },
                  u.createElement(
                    "h4",
                    {
                      className:
                        "nc-card-title text-2xl lg:text-3xl xl:text-4xl font-semibold text-neutral-700 opacity-50",
                    },
                    u.createElement(le, null)
                  )
                ),
                u.createElement(
                  "div",
                  { className: "mt-7 opacity-50" },
                  u.createElement(le, { width: "80%" })
                )
              )
            ),
            u.createElement(
              "div",
              {
                className:
                  "md:absolute mt-5 md:mt-0 h-96 md:h-auto md:right-3 md:top-3 md:bottom-3 md:w-1/2 lg:w-1/3 p-5 lg:p-8 bg-neutral-100 md:bg-white md:dark:bg-neutral-900 dark:bg-neutral-800 xl:bg-opacity-80 xl:dark:bg-opacity-80 xl:backdrop-filter xl:backdrop-blur-xl rounded-3xl lg:rounded-[34px] overflow-hidden",
              },
              u.createElement(
                "div",
                {
                  className:
                    "flow-root h-full w-full overflow-y-auto hiddenScrollbar",
                },
                u.createElement(
                  "div",
                  {
                    className:
                      "-my-5 md:-my-7 divide-y divide-neutral-200 dark:divide-neutral-700",
                  },
                  [1, 1, 1].map((e, t) =>
                    u.createElement(
                      "div",
                      { key: t, className: "block py-5 lg:py-7" },
                      u.createElement(
                        "h4",
                        {
                          className:
                            "nc-card-title text-base font-semibold mb-2",
                        },
                        u.createElement(le, { width: "90%" })
                      ),
                      u.createElement(le, { width: "60%" })
                    )
                  )
                )
              )
            )
          )
        : e[0]
        ? (() => {
            const {
                featuredImage: a,
                author: r,
                title: n,
                date: l,
                excerpt: s,
                link: o,
                ncPostMetaData: c,
              } = e[0].node,
              i = e.filter((e, t) => t > 0);
            return u.createElement(
              "main",
              { className: "relative" },
              u.createElement(
                "div",
                {
                  className:
                    "aspect-w-9 aspect-h-9 md:aspect-h-5 rounded-3xl lg:rounded-[40px] overflow-hidden",
                },
                u.createElement(Xe, {
                  containerClassName: "absolute inset-0",
                  src: t ? "." : (null == a ? void 0 : a.node.sourceUrl) || ".",
                }),
                u.createElement(
                  "div",
                  null,
                  u.createElement("span", {
                    className:
                      "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black",
                  })
                ),
                u.createElement(
                  "div",
                  {
                    className:
                      "group dark absolute md:w-1/2 lg:w-2/3 max-w-2xl flex flex-col justify-end p-5 lg:p-14",
                  },
                  u.createElement(
                    "div",
                    { className: "" },
                    u.createElement(
                      "h3",
                      {
                        className:
                          "nc-card-title text-2xl lg:text-3xl xl:text-4xl font-semibold text-white",
                      },
                      t
                        ? u.createElement(le, null)
                        : u.createElement(
                            "a",
                            { href: o, className: "line-clamp-2" },
                            n
                          )
                    ),
                    t
                      ? u.createElement("div", null, u.createElement(le, null))
                      : s
                      ? u.createElement(
                          "span",
                          {
                            className:
                              "hidden lg:block text-base text-neutral-200 mt-5",
                          },
                          u.createElement("span", {
                            className: "line-clamp-2",
                            dangerouslySetInnerHTML: { __html: s },
                          })
                        )
                      : null
                  ),
                  u.createElement(
                    "div",
                    { className: "mt-7" },
                    u.createElement(bt, {
                      hoverReadingTime: !1,
                      readingTimeShortcode: c.readingTimeShortcode || "",
                      date: l,
                      author: r,
                    })
                  )
                )
              ),
              i.length
                ? u.createElement(
                    "div",
                    {
                      className:
                        "md:absolute mt-5 md:mt-0 h-96 md:h-auto md:right-3 md:top-3 md:bottom-3 md:w-1/2 lg:w-1/3 p-5 lg:p-8 bg-neutral-100 md:bg-white md:dark:bg-neutral-900 dark:bg-neutral-800 xl:bg-opacity-80 xl:dark:bg-opacity-80 xl:backdrop-filter xl:backdrop-blur-xl rounded-3xl lg:rounded-[34px] overflow-hidden",
                    },
                    u.createElement(
                      "div",
                      {
                        className:
                          "flow-root h-full w-full overflow-y-auto hiddenScrollbar",
                      },
                      u.createElement(
                        "div",
                        {
                          className:
                            "-my-5 md:-my-7 divide-y divide-neutral-200 dark:divide-neutral-700",
                        },
                        i.map((e, t) =>
                          u.createElement(
                            "div",
                            { key: t, className: "block py-5 lg:py-7" },
                            u.createElement(
                              "h4",
                              {
                                className:
                                  "nc-card-title text-base font-semibold",
                              },
                              u.createElement(
                                "a",
                                {
                                  title: e.node.title,
                                  href: e.node.link,
                                  className: "line-clamp-2",
                                },
                                e.node.title
                              )
                            ),
                            u.createElement(Lt, {
                              className: "mt-4",
                              meta: e.node,
                            })
                          )
                        )
                      )
                    )
                  )
                : null
            );
          })()
        : null
    ),
  pa = ({
    className: e = "leading-none",
    meta: t,
    hiddenAvatar: a = !1,
    size: r = "normal",
  }) => {
    var n, l, s;
    const { date: o, author: c, title: i, link: m } = t;
    return u.createElement(
      "div",
      {
        className: `nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 overflow-hidden ${
          "normal" === r ? "text-xs" : "text-sm"
        } ${e}`,
        "data-nc-id": "PostCardMetaV2",
      },
      u.createElement(
        "div",
        { className: "relative flex items-center space-x-2 overflow-hidden" },
        !a &&
          u.createElement(
            "a",
            {
              className: "flex flex-shrink-0",
              href: frontendObject.homeURL + (null == c ? void 0 : c.node.uri),
            },
            u.createElement(vt, {
              radius: "rounded-full",
              sizeClass:
                "normal" === r ? "h-9 w-9 text-base" : "h-10 w-10 text-xl",
              imgUrl:
                (null ==
                (l =
                  null == (n = null == c ? void 0 : c.node.ncUserMeta)
                    ? void 0
                    : n.featuredImage)
                  ? void 0
                  : l.sourceUrl) ||
                (null == (s = null == c ? void 0 : c.node.avatar)
                  ? void 0
                  : s.url),
              userName: null == c ? void 0 : c.node.username,
            })
          ),
        u.createElement(
          "a",
          { href: m, className: "grid grid-cols-1 overflow-hidden" },
          u.createElement(
            "h4",
            {
              className:
                "block font-semibold " +
                ("normal" === r
                  ? "text-sm sm:text-base"
                  : "text-base sm:text-lg"),
            },
            u.createElement("span", { className: "line-clamp-1" }, i)
          ),
          u.createElement(
            "div",
            { className: "flex mt-1.5 truncate" },
            u.createElement(
              "span",
              {
                className:
                  "block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium truncate",
              },
              null == c ? void 0 : c.node.name
            ),
            u.createElement(
              "span",
              {
                className:
                  "text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium",
              },
              "·"
            ),
            u.createElement(
              "span",
              {
                className:
                  "text-neutral-500 dark:text-neutral-400 font-normal flex-shrink-0",
              },
              xt(o || "")
            )
          )
        )
      )
    );
  },
  ga = ({ className: e = "h-full", post: t }) => {
    const { link: a, categories: r, ncPostMetaData: n, postId: l } = t,
      [s, o] = g.exports.useState(!1);
    return u.createElement(
      "div",
      {
        className: `nc-Card10 relative flex flex-col group ${e}`,
        "data-nc-id": "Card10",
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
      },
      u.createElement(
        "div",
        {
          className:
            "block  rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-10 overflow-hidden",
        },
        u.createElement(
          "div",
          null,
          u.createElement(Xt, { post: t, isHover: s })
        ),
        u.createElement("span", {
          className:
            "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity",
        })
      ),
      u.createElement(
        "div",
        {
          className:
            "absolute top-3 inset-x-3 flex justify-between items-start space-x-4 z-10",
        },
        u.createElement(kt, { categories: r }),
        u.createElement(rt, {
          postId: l,
          favoriteButtonShortcode: n.favoriteButtonShortcode || "",
        })
      ),
      u.createElement("a", { href: a, className: "absolute inset-0" }),
      u.createElement(
        "div",
        { className: "space-y-2.5 mt-4 relative" },
        u.createElement(pa, { className: "leading-none w-full", meta: t })
      )
    );
  },
  fa = ({ className: e = "h-full" }) =>
    u.createElement(
      "div",
      {
        className: `nc-Card10Skeleton relative flex flex-col ${e}`,
        "data-nc-id": "Card10Skeleton",
      },
      u.createElement(
        "div",
        {
          className:
            "block  group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-10 overflow-hidden",
        },
        u.createElement(Xe, { src: "." }),
        u.createElement("span", {
          className:
            "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity",
        })
      ),
      u.createElement(
        "div",
        {
          className:
            "absolute top-3 inset-x-3 flex justify-between items-start space-x-4",
        },
        u.createElement(le, null)
      ),
      u.createElement(
        "div",
        { className: "space-y-2.5 mt-4" },
        u.createElement(le, null),
        u.createElement(le, { width: "70%" })
      )
    ),
  ha = ({ className: e = "h-full", post: t, galleryType: a = 1 }) => {
    var r;
    const {
        title: n,
        link: l,
        categories: s,
        postFormats: o,
        ncmazGalleryImgs: c,
        author: i,
        date: m,
        ncPostMetaData: d,
      } = t,
      E = Jt(c),
      [p, f] = g.exports.useState(!1);
    return u.createElement(
      "div",
      {
        className: `nc-Card10V3 group relative flex flex-col ${e}`,
        "data-nc-id": "Card10V3",
        onMouseEnter: () => f(!0),
        onMouseLeave: () => f(!1),
      },
      u.createElement(
        "div",
        {
          className:
            "block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-12 sm:aspect-h-9 overflow-hidden",
        },
        u.createElement(
          "div",
          null,
          "post-format-gallery" !==
            (null == (r = null == o ? void 0 : o.edges[0])
              ? void 0
              : r.node.slug) && (null == E ? void 0 : E.length)
            ? u.createElement(Xt, { post: t, isHover: p })
            : 1 === a
            ? E
              ? u.createElement(
                  "div",
                  { className: "w-full h-full grid grid-cols-3 gap-2" },
                  u.createElement(
                    "div",
                    { className: "grid " },
                    u.createElement(Xe, {
                      containerClassName: "relative",
                      className: "absolute inset-0 object-cover w-full h-full",
                      src: E[0],
                    })
                  ),
                  u.createElement(
                    "div",
                    { className: "grid grid-rows-2 gap-2" },
                    u.createElement(Xe, {
                      containerClassName: "relative",
                      className: "absolute inset-0 object-cover w-full h-full",
                      src: E[1],
                    }),
                    u.createElement(Xe, {
                      containerClassName: "relative",
                      className: "absolute inset-0 object-cover w-full h-full",
                      src: E[2],
                    })
                  ),
                  u.createElement(
                    "div",
                    { className: "grid " },
                    u.createElement(Xe, {
                      containerClassName: "relative",
                      className: "absolute inset-0 object-cover w-full h-full",
                      src: E[3],
                    })
                  )
                )
              : null
            : E
            ? u.createElement(
                "div",
                {
                  className: "w-full h-full grid grid-cols-1 grid-rows-2 gap-2",
                },
                u.createElement(
                  "div",
                  { className: "grid grid-cols-3 gap-2 " },
                  u.createElement(Xe, {
                    containerClassName: "relative col-span-2",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: E[0],
                  }),
                  u.createElement(Xe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: E[1],
                  })
                ),
                u.createElement(
                  "div",
                  { className: "grid grid-cols-3 gap-2 " },
                  u.createElement(Xe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: E[2],
                  }),
                  u.createElement(Xe, {
                    containerClassName: "relative col-span-2",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: E[3],
                  })
                )
              )
            : null
        ),
        u.createElement("a", {
          href: l,
          className:
            "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity",
        })
      ),
      u.createElement(
        "div",
        {
          className:
            "absolute top-3 inset-x-3 flex justify-between items-start space-x-4",
        },
        u.createElement(kt, { categories: s }),
        u.createElement(It, {
          panelMenusClass: "w-52 right-0 top-0 origin-top-right",
          href: t.link,
        })
      ),
      u.createElement(
        "div",
        { className: "space-y-2.5 mt-4 px-4 flex flex-col" },
        u.createElement(
          "h3",
          {
            className:
              "nc-card-title block sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 ",
          },
          u.createElement(
            "a",
            { href: l, className: "line-clamp-1", title: n },
            n
          )
        ),
        u.createElement(bt, {
          className: "mt-3",
          author: i,
          hoverReadingTime: !1,
          date: m,
          readingTimeShortcode: d.readingTimeShortcode,
        })
      )
    );
  },
  va = ({ className: e = "h-full", galleryType: t = 1 }) =>
    u.createElement(
      "div",
      {
        className: `nc-Card10V3Skeleton group relative flex flex-col ${e}`,
        "data-nc-id": "Card10V3Skeleton",
      },
      u.createElement(
        "div",
        {
          className:
            "block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-16 sm:aspect-h-9 overflow-hidden",
        },
        u.createElement(
          "div",
          null,
          1 === t
            ? u.createElement(
                "div",
                { className: "w-full h-full grid grid-cols-3 gap-2" },
                u.createElement(
                  "div",
                  { className: "grid " },
                  u.createElement(Xe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  })
                ),
                u.createElement(
                  "div",
                  { className: "grid grid-rows-2 gap-2" },
                  u.createElement(Xe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  }),
                  u.createElement(Xe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  })
                ),
                u.createElement(
                  "div",
                  { className: "grid " },
                  u.createElement(Xe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  })
                )
              )
            : u.createElement(
                "div",
                { className: "w-full h-full grid grid-rows-2 gap-2" },
                u.createElement(
                  "div",
                  { className: "grid grid-cols-3 gap-2 " },
                  u.createElement(Xe, {
                    containerClassName: "relative col-span-2",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  }),
                  u.createElement(Xe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  })
                ),
                u.createElement(
                  "div",
                  { className: "grid grid-cols-3 gap-2 " },
                  u.createElement(Xe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  }),
                  u.createElement(Xe, {
                    containerClassName: "relative col-span-2",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  })
                )
              )
        )
      ),
      u.createElement(
        "div",
        {
          className:
            "absolute top-3 inset-x-3 flex justify-between items-start space-x-4",
        },
        u.createElement(le, { width: "30%" })
      ),
      u.createElement(
        "div",
        { className: "space-y-2.5 mt-4 px-4" },
        u.createElement(
          "h3",
          {
            className:
              "nc-card-title block sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 ",
          },
          u.createElement(le, { width: "80%" })
        ),
        u.createElement(le, { width: "40%" }),
        u.createElement("div", { className: "opacity-0" }, "aa")
      )
    ),
  xa = ({ listPosts: e, isLoading: t }) =>
    u.createElement(
      "div",
      { className: "grid grid-cols-1 gap-6 2xl:gap-8" },
      u.createElement(
        "div",
        { className: "grid gap-6 2xl:gap-8 grid-cols-1 lg:grid-cols-2" },
        t
          ? u.createElement(va, null)
          : e[0]
          ? u.createElement(ha, { post: e[0].node })
          : null,
        t
          ? u.createElement(va, null)
          : e[1]
          ? u.createElement(ha, { galleryType: 2, post: e[1].node })
          : null
      ),
      u.createElement(
        "div",
        {
          className:
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 2xl:gap-8 mt-3",
        },
        t
          ? [1, 1, 1, 1].map((e, t) => u.createElement(fa, { key: t }))
          : e
              .filter((e, t) => t > 1)
              .map((e) => u.createElement(ga, { key: e.node.id, post: e.node }))
      )
    );
var ba =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAAdCAYAAAAAaUg8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADZSURBVHgB7drLDoIwFEXRhi/XL6+PCTNPSS8gYa2pid2TkyKxtUm990e7AJ21dG7wjujtAnTWulPn0oCfjAQCI4EgjmT2h89RP5x01tK57Uv6np9X0VlL58rjFgTL2e+RR8/XOUZnre/5e19XVdeyzprP/6XjSp0etyAwEgiMBAIjgcBIIDASCIwEAiOBwEggMBIIPiN5tnONnq+z9nydVecf9R+dWTpr6Vx53IJgZCSz191R16XOWjqrHHWtztJZ606dHrcgMBIIjASCipGc/R57lM5at+l8Ab6JZwjCaizRAAAAAElFTkSuQmCC";
const Na = ({
    className: e = "h-full",
    post: t,
    ratio: a = "aspect-w-3 xl:aspect-w-4 aspect-h-3",
  }) => {
    var r;
    const {
        title: n,
        link: l,
        categories: s,
        excerpt: o,
        featuredImage: c,
        postFormats: i,
      } = t,
      m = null == (r = null == i ? void 0 : i.edges[0]) ? void 0 : r.node.slug,
      d = (e) =>
        u.createElement(
          "div",
          {
            className:
              "w-14 h-14 flex items-center justify-center rounded-full bg-neutral-50 text-primary-500 cursor-pointer",
          },
          ((e) =>
            e
              ? u.createElement(
                  "svg",
                  { className: " w-9 h-9", fill: "none", viewBox: "0 0 24 24" },
                  u.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M15.25 6.75V17.25",
                  }),
                  u.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M8.75 6.75V17.25",
                  })
                )
              : u.createElement(
                  "svg",
                  {
                    className: "ml-0.5 w-9 h-9",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                  },
                  u.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M18.25 12L5.75 5.75V18.25L18.25 12Z",
                  })
                ))(e)
        );
    return u.createElement(
      "div",
      {
        className: `nc-Card16Podcast relative flex flex-col ${e}`,
        "data-nc-id": "Card16Podcast",
      },
      u.createElement(
        "a",
        {
          href: l,
          className: `block flex-shrink-0 relative w-full rounded-3xl overflow-hidden ${a}`,
        },
        u.createElement(Xe, {
          src: (null == c ? void 0 : c.node.sourceUrl) || ".",
        }),
        u.createElement("span", { className: "bg-neutral-900 bg-opacity-30" })
      ),
      u.createElement("a", { href: l, className: "absolute inset-0" }),
      u.createElement(
        "span",
        { className: "absolute top-3 inset-x-3" },
        u.createElement(kt, { categories: s })
      ),
      u.createElement(
        "div",
        { className: "w-11/12 transform -mt-32 " },
        u.createElement(
          "div",
          {
            className:
              "px-5 flex items-center space-x-4 " +
              ("post-format-video" === m || "post-format-audio" === m
                ? ""
                : "opacity-0 z-[-1]"),
          },
          u.createElement(
            "div",
            { className: "flex-grow " },
            u.createElement("img", { src: ba, alt: "musicWave" })
          ),
          u.createElement(Zt, {
            post: t,
            renderDefaultBtn: () => d(),
            renderPlayingBtn: () => d("playing"),
            renderLoadingBtn: () => d("loading"),
          })
        ),
        u.createElement(
          "div",
          {
            className:
              "p-5 mt-5 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl rounded-3xl rounded-tl-none flex flex-col flex-grow ",
          },
          u.createElement(
            "h3",
            {
              className:
                "nc-card-title block text-lg sm:text-xl font-semibold text-neutral-900 dark:text-neutral-100 ",
            },
            u.createElement(
              "a",
              { href: l, className: "line-clamp-1", title: n },
              n
            )
          ),
          u.createElement(
            "span",
            {
              className:
                "block text-sm text-neutral-500 dark:text-neutral-400 mt-3 mb-5",
            },
            o &&
              u.createElement("span", {
                className: "line-clamp-2",
                dangerouslySetInnerHTML: { __html: o },
              })
          ),
          u.createElement(
            "div",
            { className: "flex items-end justify-between mt-auto" },
            u.createElement(nt, { className: "relative", postData: t }),
            u.createElement(It, { href: t.link })
          )
        )
      )
    );
  },
  ka = ({
    className: e = "h-full",
    ratio: t = "aspect-w-3 xl:aspect-w-4 aspect-h-3",
  }) =>
    u.createElement(
      "div",
      {
        className: `nc-Card16PodcastSkeleton relative flex flex-col ${e}`,
        "data-nc-id": "Card16PodcastSkeleton",
      },
      u.createElement(
        "div",
        {
          className: `block flex-shrink-0 relative w-full rounded-3xl overflow-hidden ${t}`,
        },
        u.createElement(Xe, { src: "." }),
        u.createElement("span", { className: "bg-neutral-900 bg-opacity-30" })
      ),
      u.createElement(
        "span",
        { className: "absolute top-3 inset-x-3" },
        u.createElement(le, { width: "30%" })
      ),
      u.createElement(
        "div",
        { className: "w-11/12 transform -mt-32 " },
        u.createElement(
          "div",
          { className: "px-5 flex items-center space-x-4" },
          u.createElement(
            "div",
            { className: "flex-grow " },
            u.createElement("img", { src: ba, alt: "musicWave" })
          )
        ),
        u.createElement(
          "div",
          {
            className:
              "p-5 mt-5 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl rounded-3xl rounded-tl-none flex flex-col flex-grow ",
          },
          u.createElement(
            "h3",
            {
              className:
                "nc-card-title block text-xl font-semibold text-neutral-900 dark:text-neutral-100 ",
            },
            u.createElement(le, null)
          ),
          u.createElement(
            "span",
            {
              className:
                "block text-sm text-neutral-500 dark:text-neutral-400 mt-3 mb-5",
            },
            u.createElement(le, { width: "80%" })
          ),
          u.createElement("div", { className: "opacity-0" }, "aa")
        )
      )
    ),
  wa = ({ className: e = "", post: t }) => {
    var a;
    const {
        title: r,
        link: n,
        featuredImage: l,
        postFormats: s,
        excerpt: o,
      } = t,
      c = null == (a = null == s ? void 0 : s.edges[0]) ? void 0 : a.node.slug,
      i = (e) =>
        u.createElement(
          "span",
          {
            className:
              "w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 text-primary-6000 dark:text-primary-200 shadow-lg cursor-pointer",
          },
          ((e) => {
            switch (e) {
              case "loading":
                return u.createElement(
                  "svg",
                  { className: "w-6 h-6", fill: "none", viewBox: "0 0 24 24" },
                  u.createElement("path", {
                    fill: "currentColor",
                    d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z",
                  }),
                  u.createElement("path", {
                    fill: "currentColor",
                    d: "M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z",
                  }),
                  u.createElement("path", {
                    fill: "currentColor",
                    d: "M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z",
                  })
                );
              case "playing":
                return u.createElement(
                  "svg",
                  { className: "w-6 h-6", fill: "none", viewBox: "0 0 24 24" },
                  u.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M15.25 6.75V17.25",
                  }),
                  u.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M8.75 6.75V17.25",
                  })
                );
              default:
                return u.createElement(
                  "svg",
                  {
                    className: "w-6 h-6",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                  },
                  u.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M18.25 12L5.75 5.75V18.25L18.25 12Z",
                  })
                );
            }
          })(e)
        );
    return u.createElement(
      "div",
      {
        className: `nc-Card17Podcast relative flex items-center justify-between p-2.5 space-x-5 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-30 hover:shadow-xl transition-shadow ${e}`,
        "data-nc-id": "Card17Podcast",
      },
      u.createElement(
        "a",
        { href: n, className: "flex  items-center space-x-4" },
        u.createElement(
          "div",
          {
            className:
              "block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg",
          },
          u.createElement(Xe, {
            containerClassName: "absolute inset-0",
            className: "object-cover w-full h-full ",
            src: (null == l ? void 0 : l.node.sourceUrl) || ".",
            alt: r,
          })
        ),
        u.createElement(
          "div",
          { className: "flex flex-col flex-grow" },
          u.createElement(
            "h3",
            { className: "block font-semibold text-sm sm:text-lg" },
            u.createElement("span", { className: "line-clamp-1", title: r }, r)
          ),
          o
            ? u.createElement(
                "span",
                {
                  className:
                    "text-xs text-neutral-500 dark:text-neutral-400 mt-1 ",
                },
                u.createElement("span", {
                  className: "line-clamp-1",
                  dangerouslySetInnerHTML: { __html: o },
                })
              )
            : null
        )
      ),
      ("post-format-video" === c || "post-format-audio" === c) &&
        u.createElement(Zt, {
          post: t,
          className: "",
          renderDefaultBtn: () => i(),
          renderLoadingBtn: () => i("loading"),
          renderPlayingBtn: () => i("playing"),
        })
    );
  },
  ya = ({ className: e = "" }) =>
    u.createElement(
      "div",
      {
        className: `nc-Card17PodcastSkeleton relative flex items-center justify-between p-2.5 space-x-5 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-30 hover:shadow-xl transition-shadow ${e}`,
        "data-nc-id": "Card17PodcastSkeleton",
      },
      u.createElement(
        "div",
        { className: "flex  items-center space-x-4" },
        u.createElement(
          "div",
          {
            className:
              "block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg",
          },
          u.createElement(Xe, {
            containerClassName: "absolute inset-0",
            className: "object-cover w-full h-full ",
            src: ".",
          })
        ),
        u.createElement(
          "div",
          { className: "flex flex-col flex-grow" },
          u.createElement(
            "h3",
            { className: "block font-semibold text-lg" },
            u.createElement(le, null)
          ),
          u.createElement(
            "span",
            {
              className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1",
            },
            u.createElement(le, { width: "40%" })
          )
        )
      )
    ),
  Ca = ({ listPosts: e, isLoading: t }) =>
    u.createElement(
      "div",
      { className: "grid grid-cols-1 sm:grid-cols-6 gap-6 2xl:gap-8" },
      t
        ? u.createElement(ka, { className: "sm:col-span-3 lg:col-span-2" })
        : e[0]
        ? u.createElement(Na, {
            className: "sm:col-span-3 lg:col-span-2",
            post: e[0].node,
          })
        : null,
      t
        ? u.createElement(ka, { className: "sm:col-span-3 lg:col-span-2" })
        : e[1]
        ? u.createElement(Na, {
            className: "sm:col-span-3 lg:col-span-2",
            post: e[1].node,
          })
        : null,
      u.createElement(
        "div",
        {
          className:
            "flex flex-col space-y-6 md:space-y-8 sm:col-span-6 lg:col-span-2",
        },
        t
          ? [1, 1, 1, 1].map((e, t) => u.createElement(ya, { key: t }))
          : e
              .filter((e, t) => t > 1 && t < 6)
              .map((e) => u.createElement(wa, { key: e.node.id, post: e.node }))
      )
    ),
  Ia = ({ className: e = "h-full", post: t }) => {
    var a;
    const {
        title: r,
        link: n,
        featuredImage: l,
        postFormats: s,
        excerpt: o,
      } = t,
      c = null == (a = null == s ? void 0 : s.edges[0]) ? void 0 : a.node.slug,
      i = (e) =>
        u.createElement(
          "div",
          {
            className:
              "inline-flex items-center mt-3 pr-4 py-0.5 cursor-pointer rounded-full transition-all hover:pl-0.5 hover:bg-primary-50 dark:hover:bg-neutral-900",
          },
          u.createElement(
            "span",
            {
              className:
                "w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-neutral-800 text-primary-6000 dark:text-primary-200",
            },
            ((e) => {
              switch (e) {
                case "loading":
                  return u.createElement(
                    "svg",
                    {
                      className: "w-6 h-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                    },
                    u.createElement("path", {
                      fill: "currentColor",
                      d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z",
                    }),
                    u.createElement("path", {
                      fill: "currentColor",
                      d: "M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z",
                    }),
                    u.createElement("path", {
                      fill: "currentColor",
                      d: "M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z",
                    })
                  );
                case "playing":
                  return u.createElement(
                    "svg",
                    {
                      className: "w-5 h-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                    },
                    u.createElement("path", {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      d: "M15.25 6.75V17.25",
                    }),
                    u.createElement("path", {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      d: "M8.75 6.75V17.25",
                    })
                  );
                default:
                  return u.createElement(
                    "svg",
                    {
                      className: "w-5 h-5",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                    },
                    u.createElement("path", {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      d: "M18.25 12L5.75 5.75V18.25L18.25 12Z",
                    })
                  );
              }
            })(e)
          ),
          u.createElement(
            "span",
            { className: "ml-3 text-sm font-medium" },
            "playing" === e ? "Now playing" : "Listen now"
          )
        );
    return u.createElement(
      "div",
      {
        className: `nc-Card15Podcast relative flex group items-center p-3 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${e}`,
        "data-nc-id": "Card15Podcast",
      },
      u.createElement(
        "div",
        { className: "w-1/4 flex-shrink-0" },
        u.createElement(
          "a",
          {
            href: n,
            className:
              "block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg ",
          },
          u.createElement(Xe, {
            containerClassName: "absolute inset-0",
            className: "object-cover w-full h-full ",
            src: (null == l ? void 0 : l.node.sourceUrl) || ".",
            alt: r,
          })
        )
      ),
      u.createElement(
        "div",
        { className: "flex flex-col flex-grow ml-4 overflow-hidden" },
        u.createElement(
          "h3",
          { className: "nc-card-title block font-semibold text-sm sm:text-lg" },
          u.createElement(
            "a",
            { href: n, className: "line-clamp-1", title: r },
            r
          )
        ),
        o
          ? u.createElement(
              "span",
              {
                className:
                  "text-xs text-neutral-500 dark:text-neutral-400 mt-1 ",
              },
              u.createElement("span", {
                className: "line-clamp-1",
                dangerouslySetInnerHTML: { __html: o },
              })
            )
          : null,
        ("post-format-video" === c || "post-format-audio" === c) &&
          u.createElement(Zt, {
            post: t,
            className: "",
            renderDefaultBtn: () => i(),
            renderLoadingBtn: () => i("loading"),
            renderPlayingBtn: () => i("playing"),
          })
      )
    );
  },
  _a = ({ className: e = "h-full" }) => {
    return u.createElement(
      "div",
      {
        className: `nc-Card15PodcastSkeleton relative flex group items-center p-3 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${e}`,
        "data-nc-id": "Card15PodcastSkeleton",
      },
      u.createElement(
        "div",
        { className: "w-1/4 flex-shrink-0" },
        u.createElement(
          "div",
          {
            className:
              "block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg ",
          },
          u.createElement(Xe, {
            containerClassName: "absolute inset-0",
            className: "object-cover w-full h-full ",
            src: ".",
          })
        )
      ),
      u.createElement(
        "div",
        { className: "flex flex-col flex-grow ml-4 overflow-hidden" },
        u.createElement(
          "h3",
          { className: "nc-card-title block font-semibold text-lg" },
          u.createElement(le, null)
        ),
        u.createElement(
          "span",
          { className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1" },
          u.createElement(le, { width: "40%" })
        ),
        u.createElement(
          "div",
          {
            className:
              "inline-flex items-center mt-3 pr-4 py-0.5 cursor-pointer rounded-full transition-all hover:pl-0.5 hover:bg-primary-50 dark:hover:bg-neutral-900",
          },
          u.createElement(
            "span",
            {
              className:
                "w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-neutral-800 text-primary-6000 dark:text-primary-200",
            },
            ((e) => {
              switch (e) {
                case "loading":
                  return u.createElement(
                    "svg",
                    {
                      className: "w-6 h-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                    },
                    u.createElement("path", {
                      fill: "currentColor",
                      d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z",
                    }),
                    u.createElement("path", {
                      fill: "currentColor",
                      d: "M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z",
                    }),
                    u.createElement("path", {
                      fill: "currentColor",
                      d: "M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z",
                    })
                  );
                case "playing":
                  return u.createElement(
                    "svg",
                    {
                      className: "w-5 h-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                    },
                    u.createElement("path", {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      d: "M15.25 6.75V17.25",
                    }),
                    u.createElement("path", {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      d: "M8.75 6.75V17.25",
                    })
                  );
                default:
                  return u.createElement(
                    "svg",
                    {
                      className: "w-5 h-5",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                    },
                    u.createElement("path", {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      d: "M18.25 12L5.75 5.75V18.25L18.25 12Z",
                    })
                  );
              }
            })(t)
          ),
          u.createElement(
            "span",
            { className: "ml-3 text-sm font-medium" },
            "playing" === t ? "Now playing" : "Listen now"
          )
        )
      )
    );
    var t;
  },
  Aa = ({ listPosts: e, isLoading: t }) =>
    u.createElement(
      "div",
      null,
      u.createElement(
        "div",
        {
          className:
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8",
        },
        t
          ? u.createElement(ra, { ratio: "aspect-w-4 aspect-h-3" })
          : e[0]
          ? u.createElement(aa, {
              ratio: "aspect-w-4 aspect-h-3",
              post: e[0].node,
            })
          : null,
        t
          ? u.createElement(ra, { ratio: "aspect-w-4 aspect-h-3" })
          : e[1]
          ? u.createElement(aa, {
              ratio: "aspect-w-4 aspect-h-3",
              post: e[1].node,
            })
          : null,
        t
          ? u.createElement(ra, { ratio: "aspect-w-4 aspect-h-3" })
          : e[2]
          ? u.createElement(aa, {
              ratio: "aspect-w-4 aspect-h-3",
              post: e[2].node,
            })
          : null
      ),
      u.createElement(
        "div",
        {
          className:
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 2xl:gap-8 mt-8",
        },
        t
          ? [1, 1, 1, 1, 1, 1].map((e, t) => u.createElement(_a, { key: t }))
          : e
              .filter((e, t) => t > 2)
              .map((e) => u.createElement(Ia, { key: e.node.id, post: e.node }))
      )
    ),
  La = ({
    className: e = "",
    isShowing: t = !0,
    post: a,
    onClickNext: r = () => {},
    onClickPrev: n = () => {},
    hasNext: l,
    hasPrev: s,
  }) => {
    const {
      ncPostMetaData: o,
      featuredImage: c,
      title: i,
      date: m,
      categories: d,
      author: E,
      link: p,
    } = a;
    return u.createElement(
      ne,
      {
        appear: !0,
        as: "div",
        className: `nc-CardLarge1 relative flex flex-col-reverse md:flex-row justify-end ${e}`,
        show: t,
      },
      u.createElement(
        "div",
        {
          className:
            "md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-8 md:mt-0 px-3 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5",
        },
        u.createElement(
          ne.Child,
          {
            as: g.exports.Fragment,
            enter:
              "transform nc-will-change-transform transition-all duration-500",
            enterFrom: "translate-y-4 opacity-0",
            enterTo: "translate-y-0 opacity-100",
          },
          u.createElement(
            "div",
            {
              className:
                "p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg",
            },
            u.createElement(kt, { categories: d }),
            u.createElement(
              "h2",
              { className: "nc-card-title text-xl sm:text-2xl font-semibold " },
              u.createElement(
                "a",
                { href: p, className: "line-clamp-2", title: i },
                i
              )
            ),
            u.createElement(bt, {
              className: "relative",
              author: E,
              date: m,
              hoverReadingTime: !1,
              readingTimeShortcode: o.readingTimeShortcode,
            }),
            u.createElement(
              "div",
              { className: "flex items-center justify-between mt-auto" },
              u.createElement(nt, { postData: a }),
              u.createElement(It, { href: a.link })
            )
          )
        ),
        l || s
          ? u.createElement(
              ne.Child,
              {
                as: "div",
                className: "p-4 sm:pt-8 sm:px-10",
                enter:
                  "transform nc-will-change-transform transition-all duration-500 delay-100",
                enterFrom: "translate-y-4 opacity-0",
                enterTo: "translate-y-0 opacity-100",
              },
              u.createElement(Fe, {
                disablePrev: !s,
                disableNext: !l,
                btnClassName: "w-11 h-11 text-xl",
                onClickNext: r,
                onClickPrev: n,
              })
            )
          : null
      ),
      u.createElement(
        ne.Child,
        {
          as: "div",
          className: "w-full md:w-4/5 lg:w-2/3",
          enter:
            "transform nc-will-change-transform transition-all duration-500 delay-200",
          enterFrom: "translate-y-4 scale-105 opacity-0",
          enterTo: "translate-y-0 scale-100 opacity-100",
        },
        u.createElement(
          "a",
          { href: p },
          u.createElement(Xe, {
            containerClassName:
              "aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative",
            className: "absolute inset-0 object-cover rounded-3xl",
            src: (null == c ? void 0 : c.node.sourceUrl) || ".",
            alt: i,
          })
        )
      )
    );
  },
  Sa = ({ className: e = "", isShowing: t = !0 }) =>
    t
      ? u.createElement(
          "div",
          {
            className: `nc-CardLarge1Skeleton relative flex flex-col-reverse md:flex-row justify-end ${e}`,
          },
          u.createElement(
            "div",
            {
              className:
                "md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-8 md:mt-0 px-3 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5",
            },
            u.createElement(
              "div",
              null,
              u.createElement(
                "div",
                {
                  className:
                    "p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg",
                },
                u.createElement(le, { width: "20%" }),
                u.createElement(
                  "h2",
                  {
                    className:
                      "nc-card-title text-xl sm:text-2xl font-semibold ",
                  },
                  u.createElement(le, { width: "80%" })
                ),
                u.createElement(
                  "div",
                  null,
                  u.createElement("span", { className: "opacity-0" }, "22")
                ),
                u.createElement(
                  "div",
                  { className: " mt-auto" },
                  u.createElement(le, { width: "100%" })
                )
              )
            ),
            u.createElement(
              "div",
              { className: "p-4 sm:pt-8 sm:px-10" },
              u.createElement(Fe, { btnClassName: "w-11 h-11 text-xl" })
            )
          ),
          u.createElement(
            "div",
            { className: "w-full md:w-4/5 lg:w-2/3" },
            u.createElement(
              "div",
              null,
              u.createElement(Xe, {
                containerClassName:
                  "aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative",
                className: "absolute inset-0 object-cover rounded-3xl",
                src: ".",
              })
            )
          )
        )
      : null,
  Ma = ({ listPosts: e, isLoading: t }) => {
    const [a, r] = g.exports.useState(0),
      n = () => {
        r((t) => (t >= e.length - 1 ? 0 : t + 1));
      },
      l = () => {
        r((t) => (0 === t ? e.length - 1 : t - 1));
      };
    return u.createElement(
      "div",
      null,
      t
        ? u.createElement(Sa, null)
        : e.map((t, r) => {
            var s, o, c, i;
            return u.createElement(La, {
              key: r,
              isShowing: a === r,
              onClickNext:
                "rtl" ===
                (null == (s = document.querySelector("html"))
                  ? void 0
                  : s.getAttribute("dir"))
                  ? l
                  : n,
              onClickPrev:
                "rtl" ===
                (null == (o = document.querySelector("html"))
                  ? void 0
                  : o.getAttribute("dir"))
                  ? n
                  : l,
              post: t.node,
              hasNext:
                "rtl" ===
                (null == (c = document.querySelector("html"))
                  ? void 0
                  : c.getAttribute("dir"))
                  ? r > 0
                  : e.length > r + 1,
              hasPrev:
                "rtl" ===
                (null == (i = document.querySelector("html"))
                  ? void 0
                  : i.getAttribute("dir"))
                  ? e.length > r + 1
                  : r > 0,
            });
          })
    );
  },
  Ta = () =>
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
        Oe.nothingWeFound
      )
    ),
  za = ({ data: e = [], isSkeleton: t, error: a, className: r = "" }) =>
    a || (!t && !e.length)
      ? u.createElement(
          "div",
          { className: r },
          a &&
            u.createElement(
              "pre",
              { className: "text-xs" },
              u.createElement("code", null, a.message)
            ),
          !t && !e.length && u.createElement(Ta, null)
        )
      : null;
function $a(
  e,
  t,
  a = { root: null, threshold: 0, freezeOnceVisible: !0, rootMargin: "1000px" }
) {
  g.exports.useEffect(() => {
    t <= 5 && e();
  }, []);
  const r = g.exports.useRef(null),
    n = jt(r, a),
    l = t > 5 && !!(null == n ? void 0 : n.isIntersecting);
  return (
    g.exports.useEffect(() => {
      l && e();
    }, [l]),
    { ref: r, isVisible: l }
  );
}
function Pa({ graphQLvariables: e, graphQLData: t }) {
  const a = !e && !!t,
    [r, n] = g.exports.useState((null == e ? void 0 : e.variables) || {}),
    [l, s] = g.exports.useState(-1);
  g.exports.useEffect(() => {
    a || n((null == e ? void 0 : e.variables) || {});
  }, [e, a]);
  let o = "";
  "GQL_QUERY_GET_POSTS_BY_FILTER" === (null == e ? void 0 : e.queryString) &&
    (o = mt),
    "GQL_QUERY_GET_POSTS_BY_SPECIFIC" ===
      (null == e ? void 0 : e.queryString) && (o = dt);
  const c = a
    ? ""
    : me`
        ${o}
      `;
  g.exports.useEffect(() => {
    a ||
      n((t) => {
        var a;
        return m(i({}, t), {
          categoryIn:
            -1 === l
              ? null == (a = null == e ? void 0 : e.variables)
                ? void 0
                : a.categoryIn
              : [l],
        });
      });
  }, [l]);
  let d,
    u,
    E,
    p,
    f = () => {};
  if (a) d = t;
  else {
    const [e, t] = de(c, { notifyOnNetworkStatusChange: !0, variables: r });
    (f = e), (d = t.data), (u = t.loading), (E = t.error), (p = t.fetchMore);
  }
  const h = (null == d ? void 0 : d.posts.edges) || [];
  return {
    IS_SKELETON: u && !h.length,
    LISTS_POSTS: h,
    fetchMore: p,
    error: E,
    loading: u,
    data: d,
    setTabActiveId: s,
    tabActiveId: l,
    funcGqlQueryGetPosts: f,
  };
}
const ja = ({
    className: e = "",
    domNode: t,
    apiSettings: a,
    sectionIndex: r,
  }) => {
    const { graphQLvariables: n, settings: l, graphQLData: s } = a,
      o = !n && !!s,
      {
        funcGqlQueryGetPosts: c,
        loading: i,
        IS_SKELETON: m,
        LISTS_POSTS: d,
        data: E,
        error: p,
        fetchMore: f,
        setTabActiveId: h,
        tabActiveId: v,
      } = Pa({ graphQLData: s, graphQLvariables: n });
    let x = null;
    x = o ? g.exports.useRef(null) : $a(c, r).ref;
    const b = (e) => {
      -1 !== e ? e.id !== v && h(e.id) : h(e);
    };
    return ue.createPortal(
      (() => {
        const {
            hasBackground: t,
            showFilterTab: r,
            categories: n,
            viewMoreHref: s,
            heading: o,
            subHeading: c,
          } = l,
          i = t;
        return u.createElement(
          "div",
          {
            className: `nc-FactoryBlockMagazine relative ${
              i ? "py-16" : ""
            }  ${e}`,
            ref: x,
          },
          i && u.createElement(qe, null),
          u.createElement(
            "div",
            { className: "relative" },
            r
              ? u.createElement(Ze, {
                  tabActiveId: v,
                  tabs: n,
                  viewMoreHref: s,
                  heading: o,
                  subHeading: c,
                  onClickTab: b,
                })
              : u.createElement(Qe, { desc: c }, o),
            u.createElement(za, {
              className: "my-5",
              data: d,
              error: p,
              isSkeleton: m,
            }),
            (() => {
              switch (a.settings.sectionName) {
                case "magazine-1":
                  return u.createElement(Tt, { isLoading: m, listPosts: d });
                case "magazine-2":
                  return u.createElement(ta, { isLoading: m, listPosts: d });
                case "magazine-3":
                  return u.createElement(na, { isLoading: m, listPosts: d });
                case "magazine-4":
                  return u.createElement(oa, { isLoading: m, listPosts: d });
                case "magazine-5":
                  return u.createElement(ua, { isLoading: m, listPosts: d });
                case "magazine-6":
                  return u.createElement(Ea, { isLoading: m, listPosts: d });
                case "magazine-7":
                  return u.createElement(xa, { isLoading: m, listPosts: d });
                case "magazine-8":
                  return u.createElement(Ca, { isLoading: m, listPosts: d });
                case "magazine-9":
                  return u.createElement(Aa, { isLoading: m, listPosts: d });
                case "large-slider":
                  return u.createElement(Ma, { isLoading: m, listPosts: d });
                default:
                  return u.createElement(Tt, { isLoading: m, listPosts: d });
              }
            })()
          )
        );
      })(),
      t
    );
  },
  Ra = u.lazy(() =>
    je(
      () => import("./FactoryBlockPostsGrid.f690f784.js"),
      [
        "assets/FactoryBlockPostsGrid.f690f784.js",
        "assets/vendor.49c01715.js",
        "assets/Card14Skeleton.5c20c077.js",
        "assets/ButtonPrimary.4c94df17.js",
      ]
    )
  ),
  Ua = u.lazy(() =>
    je(
      () => import("./FactoryBlockPostsSlider.049279ed.js"),
      [
        "assets/FactoryBlockPostsSlider.049279ed.js",
        "assets/vendor.49c01715.js",
        "assets/glide.esm.699249e3.js",
        "assets/ncNanoId.147a6e91.js",
        "assets/Card14Skeleton.5c20c077.js",
      ]
    )
  ),
  Da = u.lazy(() =>
    je(
      () => import("./FactoryBlockTermsSlider.06e56107.js"),
      [
        "assets/FactoryBlockTermsSlider.06e56107.js",
        "assets/vendor.49c01715.js",
        "assets/glide.esm.699249e3.js",
        "assets/ncNanoId.147a6e91.js",
        "assets/CardCategory5Skeleton.9e2bafd1.js",
        "assets/useGutenbergSectionWithGQLGetTerms.a87f9bf1.js",
      ]
    )
  ),
  Ga = u.lazy(() =>
    je(
      () => import("./FactoryBlockTermsGrid.e6f6340a.js"),
      [
        "assets/FactoryBlockTermsGrid.e6f6340a.js",
        "assets/vendor.49c01715.js",
        "assets/SectionGridCategoryBox.6af24b16.js",
        "assets/CardCategory1Skeleton.776feb2c.js",
        "assets/CardCategory5Skeleton.9e2bafd1.js",
        "assets/useGutenbergSectionWithGQLGetTerms.a87f9bf1.js",
      ]
    )
  ),
  Oa = u.lazy(() =>
    je(
      () => import("./FactoryBlockUsersSlider.6472d395.js"),
      [
        "assets/FactoryBlockUsersSlider.6472d395.js",
        "assets/vendor.49c01715.js",
        "assets/glide.esm.699249e3.js",
        "assets/ncNanoId.147a6e91.js",
        "assets/CardAuthorBox2.9bec28e2.js",
        "assets/CardAuthorBox.24c7c94b.js",
        "assets/useGutenbergSectionWithGQLGetUsers.827b1ddd.js",
      ]
    )
  ),
  Ba = u.lazy(() =>
    je(
      () => import("./FactoryBlockUsersGrid.e0291546.js"),
      [
        "assets/FactoryBlockUsersGrid.e0291546.js",
        "assets/vendor.49c01715.js",
        "assets/CardAuthorBox.24c7c94b.js",
        "assets/CardAuthorBox2.9bec28e2.js",
        "assets/CardAuthorBox2Skeleton.edcb1fa4.js",
        "assets/useGutenbergSectionWithGQLGetUsers.827b1ddd.js",
      ]
    )
  ),
  Fa = u.lazy(() =>
    je(
      () => import("./FactoryBlockVideos.cf0027f6.js"),
      [
        "assets/FactoryBlockVideos.cf0027f6.js",
        "assets/vendor.49c01715.js",
        "assets/NcPlayIcon.b6147723.js",
      ]
    )
  ),
  Qa = u.lazy(() =>
    je(
      () => import("./FactoryBlockWidgetPosts.9e191ab3.js"),
      [
        "assets/FactoryBlockWidgetPosts.9e191ab3.js",
        "assets/vendor.49c01715.js",
        "assets/WidgetHeading1.2158a0b1.js",
      ]
    )
  ),
  Ya = u.lazy(() =>
    je(
      () => import("./FactoryBlockWidgetUsers.b58024a7.js"),
      [
        "assets/FactoryBlockWidgetUsers.b58024a7.js",
        "assets/vendor.49c01715.js",
        "assets/WidgetHeading1.2158a0b1.js",
        "assets/useGutenbergSectionWithGQLGetUsers.827b1ddd.js",
      ]
    )
  ),
  Va = u.lazy(() =>
    je(
      () => import("./FactoryBlockWidgetTerms.c9c3dd8c.js"),
      [
        "assets/FactoryBlockWidgetTerms.c9c3dd8c.js",
        "assets/vendor.49c01715.js",
        "assets/CardCategory1Skeleton.776feb2c.js",
        "assets/Tag.715b2911.js",
        "assets/WidgetHeading1.2158a0b1.js",
        "assets/useGutenbergSectionWithGQLGetTerms.a87f9bf1.js",
      ]
    )
  ),
  Wa = document.querySelectorAll("[data-nc-gutenberg-section=true]"),
  Ha = () => {
    let e = 0;
    return u.createElement(
      u.Fragment,
      null,
      Array.from(Wa).map((t, a) => {
        const r = t.getAttribute("data-nc-gutenberg-section-api");
        if (!r) return null;
        const n = JSON.parse(r),
          l = t.getAttribute("data-nc-gutenberg-section-type") || "";
        return "block-magazine" === l
          ? ((e += 1),
            u.createElement(
              Be,
              { key: a },
              u.createElement(ja, {
                sectionIndex: e,
                domNode: t,
                apiSettings: n,
              })
            ))
          : "block-posts-slider" === l
          ? ((e += 1),
            u.createElement(
              Be,
              { key: a },
              u.createElement(
                g.exports.Suspense,
                { key: a, fallback: u.createElement("div", null) },
                u.createElement(Ua, {
                  sectionIndex: e,
                  key: a,
                  domNode: t,
                  apiSettings: n,
                })
              )
            ))
          : "block-posts-grid" === l
          ? ((e += 1),
            u.createElement(
              Be,
              { key: a },
              u.createElement(
                g.exports.Suspense,
                { key: a, fallback: u.createElement("div", null) },
                u.createElement(Ra, {
                  sectionIndex: e,
                  key: a,
                  domNode: t,
                  apiSettings: n,
                })
              )
            ))
          : "block-terms-slider" === l
          ? ((e += 1),
            u.createElement(
              Be,
              { key: a },
              u.createElement(
                g.exports.Suspense,
                { key: a, fallback: u.createElement("div", null) },
                u.createElement(Da, {
                  sectionIndex: e,
                  key: a,
                  domNode: t,
                  apiSettings: n,
                })
              )
            ))
          : "block-terms-grid" === l
          ? ((e += 1),
            u.createElement(
              Be,
              { key: a },
              u.createElement(
                g.exports.Suspense,
                { key: a, fallback: u.createElement("div", null) },
                u.createElement(Ga, {
                  sectionIndex: e,
                  key: a,
                  domNode: t,
                  apiSettings: n,
                })
              )
            ))
          : "block-users-slider" === l
          ? ((e += 1),
            u.createElement(
              Be,
              { key: a },
              u.createElement(
                g.exports.Suspense,
                { key: a, fallback: u.createElement("div", null) },
                u.createElement(Oa, {
                  sectionIndex: e,
                  key: a,
                  domNode: t,
                  apiSettings: n,
                })
              )
            ))
          : "block-users-grid" === l
          ? ((e += 1),
            u.createElement(
              Be,
              { key: a },
              u.createElement(
                g.exports.Suspense,
                { key: a, fallback: u.createElement("div", null) },
                u.createElement(Ba, {
                  sectionIndex: e,
                  key: a,
                  domNode: t,
                  apiSettings: n,
                })
              )
            ))
          : "block-videos" === l
          ? u.createElement(
              Be,
              { key: a },
              u.createElement(
                g.exports.Suspense,
                { key: a, fallback: u.createElement("div", null) },
                u.createElement(Fa, { key: a, domNode: t, apiSettings: n })
              )
            )
          : "block-widget-posts" === l
          ? ((e += 1),
            u.createElement(
              Be,
              { key: a },
              u.createElement(
                g.exports.Suspense,
                { key: a, fallback: u.createElement("div", null) },
                u.createElement(Qa, {
                  sectionIndex: e,
                  key: a,
                  domNode: t,
                  apiSettings: n,
                })
              )
            ))
          : "block-widget-users" === l
          ? ((e += 1),
            u.createElement(
              Be,
              { key: a },
              u.createElement(
                g.exports.Suspense,
                { key: a, fallback: u.createElement("div", null) },
                u.createElement(Ya, {
                  sectionIndex: e,
                  key: a,
                  domNode: t,
                  apiSettings: n,
                })
              )
            ))
          : "block-widget-terms" === l
          ? ((e += 1),
            u.createElement(
              Be,
              { key: a },
              u.createElement(
                g.exports.Suspense,
                { key: a, fallback: u.createElement("div", null) },
                u.createElement(Va, {
                  sectionIndex: e,
                  key: a,
                  domNode: t,
                  apiSettings: n,
                })
              )
            ))
          : null;
      })
    );
  };
const Za = () => {
    const e = document.querySelector(".nc-Header"),
      t = document.querySelector(".nc-Header__MainNav1"),
      a = document.querySelector(".nc-Header__MainNav1 .nc-MainNav1");
    let r = document.querySelector("#wpadminbar");
    const { width: n } = (function () {
        const [e, t] = g.exports.useState({ width: 0, height: 0 });
        return (
          g.exports.useEffect(() => {
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
      })(),
      l = n;
    r = l <= 600 ? null : document.querySelector("#wpadminbar");
    let s = window.pageYOffset;
    const [o, c] = g.exports.useState(!0);
    g.exports.useEffect(() => {
      a &&
        (o &&
          !a.classList.contains("onTop") &&
          (a.classList.remove("notOnTop"), a.classList.add("onTop")),
        o ||
          a.classList.contains("notOnTop") ||
          (a.classList.remove("onTop"), a.classList.add("notOnTop")));
    }, [o]),
      g.exports.useEffect(() => {
        if (!t) return;
        let e = t.offsetHeight;
        r && (e -= r.offsetHeight),
          (document.body.scrollTop || document.documentElement.scrollTop) > 0 &&
            c(!1),
          window.addEventListener("scroll", function () {
            i(e);
          });
      }, [l]);
    const i = (a) => {
      let n = window.pageYOffset;
      e &&
        t &&
        (c(s < n ? !(n > a) : !(n > 0)),
        (e.style.top =
          s > n ? (r ? `${r.offsetHeight}px` : "0") : `-${a + 2}px`),
        (s = n));
    };
    return null;
  },
  qa = u.lazy(() =>
    je(
      () => import("./HeaderSingle.b297d701.js"),
      ["assets/HeaderSingle.b297d701.js", "assets/vendor.49c01715.js"]
    )
  ),
  Ja = u.lazy(() =>
    je(
      () => import("./MegamenuItem.ec86a79f.js"),
      ["assets/MegamenuItem.ec86a79f.js", "assets/vendor.49c01715.js"]
    )
  ),
  Xa = document.querySelectorAll("[data-is-megamenu=true]"),
  Ka = document.querySelector(".nc-SingleHeaderMenu"),
  er = () =>
    u.createElement(
      u.Fragment,
      null,
      u.createElement(
        Be,
        null,
        u.createElement(Za, null),
        !!Ka &&
          u.createElement(
            g.exports.Suspense,
            { fallback: u.createElement("div", null) },
            u.createElement(qa, null)
          )
      ),
      u.createElement(
        u.Fragment,
        null,
        Array.from(Xa).map((e, t) => {
          const a = e.getAttribute("data-graphql");
          return a && "null" !== a
            ? u.createElement(
                Be,
                { key: t },
                u.createElement(
                  g.exports.Suspense,
                  { fallback: u.createElement("div", null) },
                  u.createElement(Ja, {
                    key: t,
                    domNode: e,
                    menuItemData: JSON.parse(a).menuItem,
                  })
                )
              )
            : null;
        })
      )
    );
function tr(e, t) {
  return e
    ? e && e.includes("gravatar.com/avatar/")
      ? t || ""
      : e && !e.includes("gravatar.com/avatar/")
      ? e
      : void 0
    : t || "";
}
const ar = ({ data: e, footData: t }) => {
    var a, r, n, l;
    const { currentUser: s, homeURL: o } = frontendObject;
    return u.createElement(
      ae,
      { as: "div", className: "relative inline-block text-left" },
      u.createElement(
        "div",
        null,
        u.createElement(
          ae.Button,
          { className: "" },
          u.createElement(
            "div",
            {
              className:
                "flex-shrink-0 sm:w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ",
            },
            u.createElement(vt, {
              imgUrl: tr(
                null == (c = null == s ? void 0 : s.avatar) ? void 0 : c.url,
                null ==
                  (m =
                    null == (i = null == s ? void 0 : s.ncUserMeta)
                      ? void 0
                      : i.featuredImage)
                  ? void 0
                  : m.sourceUrl
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
      u.createElement(
        ne,
        {
          as: g.exports.Fragment,
          enter: "transition ease-out duration-100",
          enterFrom: "transform opacity-0 scale-95",
          enterTo: "transform opacity-100 scale-100",
          leave: "transition ease-in duration-75",
          leaveFrom: "transform opacity-100 scale-100",
          leaveTo: "transform opacity-0 scale-95",
        },
        u.createElement(
          ae.Items,
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
                href: o + (null == s ? void 0 : s.uri),
                className: "px-3 py-2 flex items-center space-x-3",
              },
              u.createElement(vt, {
                imgUrl: tr(
                  null == (a = null == s ? void 0 : s.avatar) ? void 0 : a.url,
                  null ==
                    (n =
                      null == (r = null == s ? void 0 : s.ncUserMeta)
                        ? void 0
                        : r.featuredImage)
                    ? void 0
                    : n.sourceUrl
                ),
                userName: null == s ? void 0 : s.name,
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
                  null == s ? void 0 : s.name
                ),
                u.createElement(
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
          u.createElement(
            "div",
            { className: "px-1 py-2" },
            e.map((e) =>
              u.createElement(ae.Item, { key: e.id }, ({ active: t }) =>
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
              u.createElement(ae.Item, { key: e.id }, ({ active: t }) =>
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
    var c, i, m;
  },
  rr = u.forwardRef((e, t) => {
    var a = e,
      {
        className: r = "",
        sizeClass: n = "h-11 px-4 py-3",
        fontClass: l = "text-sm font-normal",
        rounded: s = "rounded-full",
        children: o,
        type: c = "text",
      } = a,
      m = d(a, [
        "className",
        "sizeClass",
        "fontClass",
        "rounded",
        "children",
        "type",
      ]);
    return u.createElement(
      "input",
      i(
        {
          ref: t,
          type: c,
          className: `block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ${s} ${l} ${n} ${r}`,
        },
        m
      )
    );
  }),
  nr = () => {
    const e = u.createRef();
    return u.createElement(
      u.Fragment,
      null,
      u.createElement(Ee, { className: "sm:relative" }, ({ open: t }) => {
        var a;
        return (
          t &&
            setTimeout(() => {
              var t;
              null == (t = e.current) || t.focus();
            }, 200),
          u.createElement(
            u.Fragment,
            null,
            u.createElement(
              Ee.Button,
              {
                className:
                  "text-2xl md:text-[28px] sm:w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center",
              },
              u.createElement("i", { className: "las la-search" })
            ),
            u.createElement(
              ne,
              {
                show: t,
                as: g.exports.Fragment,
                enter: "transition ease-out duration-200",
                enterFrom: "opacity-0 translate-y-1",
                enterTo: "opacity-100 translate-y-0",
                leave: "transition ease-in duration-150",
                leaveFrom: "opacity-100 translate-y-0",
                leaveTo: "opacity-0 translate-y-1",
              },
              u.createElement(
                Ee.Panel,
                {
                  static: !0,
                  className:
                    "absolute right-2.5 sm:right-0 z-10 w-screen max-w-[300px] sm:max-w-sm mt-3",
                },
                u.createElement(
                  "form",
                  {
                    role: "search",
                    method: "GET",
                    className: "search-d relative",
                    action:
                      null == (a = window.frontendObject) ? void 0 : a.homeURL,
                  },
                  u.createElement("i", {
                    className:
                      "las la-search absolute left-3 top-1/2 transform -translate-y-1/2 text-xl opacity-60",
                  }),
                  u.createElement(rr, {
                    name: "s",
                    className: "pl-10",
                    ref: e,
                    type: "search",
                    placeholder: Oe.typeAndPressEnter,
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
  lr = ({ className: e = "w-12 h-12" }) => {
    const [t, a] = g.exports.useState(
        "dark" === localStorage.theme ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      ),
      r = document.documentElement;
    g.exports.useEffect(() => {
      "dark" === localStorage.theme ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? r.classList.contains("dark") || r.classList.add("dark")
        : r.classList.contains("dark") && r.classList.remove("dark");
    }, [t]);
    return u.createElement(
      "button",
      {
        onClick: () => {
          (localStorage.theme = t ? "light" : "dark"), a(!t);
        },
        className: `text-2xl md:text-3xl rounded-full text-neutral-700 dark:text-neutral-300 sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ${e}`,
      },
      u.createElement("span", { className: "sr-only" }, "Enable dark mode"),
      t
        ? u.createElement(pe, { className: "w-7 h-7", "aria-hidden": "true" })
        : u.createElement(ge, { className: "w-7 h-7", "aria-hidden": "true" })
    );
  },
  sr = u.lazy(() =>
    je(
      () => import("./HeaderSingleAudio.55a03a86.js"),
      ["assets/HeaderSingleAudio.55a03a86.js", "assets/vendor.49c01715.js"]
    )
  ),
  or = u.lazy(() =>
    je(
      () => import("./HeaderSingleGallery.5e1220fc.js"),
      [
        "assets/HeaderSingleGallery.5e1220fc.js",
        "assets/vendor.49c01715.js",
        "assets/glide.esm.699249e3.js",
      ]
    )
  ),
  cr = u.lazy(() =>
    je(
      () => import("./HeaderSingleVideo.3d7b9603.js"),
      [
        "assets/HeaderSingleVideo.3d7b9603.js",
        "assets/vendor.49c01715.js",
        "assets/NcPlayIcon.b6147723.js",
      ]
    )
  ),
  ir = u.lazy(() =>
    je(
      () => import("./PageArchiveDate.c698ab4c.js"),
      [
        "assets/PageArchiveDate.c698ab4c.js",
        "assets/vendor.49c01715.js",
        "assets/PageArchive.7f5a5916.js",
        "assets/SectionTrendingCategories.cd116392.js",
        "assets/SectionGridCategoryBox.6af24b16.js",
        "assets/CardCategory1Skeleton.776feb2c.js",
        "assets/CardCategory5Skeleton.9e2bafd1.js",
        "assets/ButtonPrimary.4c94df17.js",
        "assets/Tag.715b2911.js",
      ]
    )
  ),
  mr = u.lazy(() =>
    je(
      () => import("./PageSearch.bfaead88.js"),
      [
        "assets/PageSearch.bfaead88.js",
        "assets/vendor.49c01715.js",
        "assets/SectionTrendingCategories.cd116392.js",
        "assets/SectionGridCategoryBox.6af24b16.js",
        "assets/CardCategory1Skeleton.776feb2c.js",
        "assets/CardCategory5Skeleton.9e2bafd1.js",
        "assets/ButtonPrimary.4c94df17.js",
        "assets/Tag.715b2911.js",
        "assets/CardAuthorBox2.9bec28e2.js",
        "assets/CardAuthorBox2Skeleton.edcb1fa4.js",
      ]
    )
  ),
  dr = u.lazy(() =>
    je(
      () => import("./SingleMoreFromAuthorGridPosts.f9caf71c.js"),
      [
        "assets/SingleMoreFromAuthorGridPosts.f9caf71c.js",
        "assets/vendor.49c01715.js",
        "assets/DataStatementBlock.2e99e3e6.js",
      ]
    )
  ),
  ur = u.lazy(() =>
    je(
      () => import("./SingleRelatedGridPosts.588b3452.js"),
      [
        "assets/SingleRelatedGridPosts.588b3452.js",
        "assets/vendor.49c01715.js",
        "assets/DataStatementBlock.2e99e3e6.js",
      ]
    )
  ),
  Er = u.lazy(() =>
    je(
      () => import("./PageArchiveAuthor.87560f17.js"),
      [
        "assets/PageArchiveAuthor.87560f17.js",
        "assets/vendor.49c01715.js",
        "assets/ButtonPrimary.4c94df17.js",
        "assets/SectionTrendingCategories.cd116392.js",
        "assets/SectionGridCategoryBox.6af24b16.js",
        "assets/CardCategory1Skeleton.776feb2c.js",
        "assets/CardCategory5Skeleton.9e2bafd1.js",
        "assets/PageArchive.7f5a5916.js",
        "assets/Tag.715b2911.js",
      ]
    )
  ),
  pr = u.lazy(() =>
    je(
      () =>
        import("./PageArchive.7f5a5916.js").then(function (e) {
          return e.P;
        }),
      [
        "assets/PageArchive.7f5a5916.js",
        "assets/vendor.49c01715.js",
        "assets/SectionTrendingCategories.cd116392.js",
        "assets/SectionGridCategoryBox.6af24b16.js",
        "assets/CardCategory1Skeleton.776feb2c.js",
        "assets/CardCategory5Skeleton.9e2bafd1.js",
        "assets/ButtonPrimary.4c94df17.js",
        "assets/Tag.715b2911.js",
      ]
    )
  ),
  gr = document.querySelectorAll("[data-is-react-component] "),
  fr = ({}) => {
    if (!gr || !gr.length) return null;
    return u.createElement(
      u.Fragment,
      null,
      Array.from(gr).map((e, t) => {
        const a = e.getAttribute("data-is-react-component");
        if (!e || !a) return null;
        let r = e.getAttribute("data-component-props")
          ? JSON.parse(e.getAttribute("data-component-props") || "")
          : {};
        switch (("object" != typeof r && (r = []), a)) {
          case "PostCardDropdownShare":
            return ue.createPortal(
              u.createElement(Be, { key: t }, u.createElement(It, i({}, r))),
              e
            );
          case "SocialsShare":
            return ue.createPortal(
              u.createElement(Be, { key: t }, u.createElement(et, i({}, r))),
              e
            );
          case "SingleRelatedGridPosts":
            return ue.createPortal(
              u.createElement(
                Be,
                { key: t },
                u.createElement(
                  g.exports.Suspense,
                  { fallback: u.createElement("div", null) },
                  u.createElement(ur, i({}, r))
                )
              ),
              e
            );
          case "SingleMoreFromAuthorGridPosts":
            return ue.createPortal(
              u.createElement(
                Be,
                { key: t },
                u.createElement(
                  g.exports.Suspense,
                  { fallback: u.createElement("div", null) },
                  u.createElement(dr, i({}, r))
                )
              ),
              e
            );
          case "HeaderSingleGallery":
            return ue.createPortal(
              u.createElement(
                Be,
                { key: t },
                u.createElement(
                  g.exports.Suspense,
                  { fallback: u.createElement("div", null) },
                  u.createElement(or, i({}, r))
                )
              ),
              e
            );
          case "HeaderSingleVideo":
            return ue.createPortal(
              u.createElement(
                Be,
                { key: t },
                u.createElement(
                  g.exports.Suspense,
                  { fallback: u.createElement("div", null) },
                  u.createElement(cr, i({}, r))
                )
              ),
              e
            );
          case "HeaderSingleAudio":
            return ue.createPortal(
              u.createElement(
                Be,
                { key: t },
                u.createElement(
                  g.exports.Suspense,
                  { fallback: u.createElement("div", null) },
                  u.createElement(sr, i({}, r))
                )
              ),
              e
            );
          case "PageArchive":
            return ue.createPortal(
              u.createElement(
                Be,
                { key: t },
                u.createElement(
                  g.exports.Suspense,
                  { fallback: u.createElement("div", null) },
                  u.createElement(pr, i({}, r))
                )
              ),
              e
            );
          case "PageArchiveDate":
            return ue.createPortal(
              u.createElement(
                Be,
                { key: t },
                u.createElement(
                  g.exports.Suspense,
                  { fallback: u.createElement("div", null) },
                  u.createElement(ir, i({}, r))
                )
              ),
              e
            );
          case "PageArchiveAuthor":
            return ue.createPortal(
              u.createElement(
                Be,
                { key: t },
                u.createElement(
                  g.exports.Suspense,
                  { fallback: u.createElement("div", null) },
                  u.createElement(Er, i({}, r))
                )
              ),
              e
            );
          case "PageSearch":
            return ue.createPortal(
              u.createElement(
                Be,
                { key: t },
                u.createElement(
                  g.exports.Suspense,
                  { fallback: u.createElement("div", null) },
                  u.createElement(mr, i({}, r))
                )
              ),
              e
            );
          case "SwitchDarkMode":
            return ue.createPortal(
              u.createElement(Be, { key: t }, u.createElement(lr, i({}, r))),
              e
            );
          case "SearchDropdown":
            return ue.createPortal(
              u.createElement(Be, { key: t }, u.createElement(nr, i({}, r))),
              e
            );
          case "NavAccountDropdown":
            return ue.createPortal(
              u.createElement(Be, { key: t }, u.createElement(ar, i({}, r))),
              e
            );
          default:
            return null;
        }
      })
    );
  },
  hr = () => {
    const e = g.exports.useRef(null);
    function t() {
      var t;
      if (e.current)
        if (
          document.body.scrollTop > 800 ||
          document.documentElement.scrollTop > 800
        ) {
          if ("flex" === e.current.style.display) return;
          Number(
            null == (t = document.querySelector(".nc-MediaRunningContainer"))
              ? void 0
              : t.clientHeight
          ) > 10
            ? (e.current.style.bottom = "80px")
            : (e.current.style.bottom = "24px"),
            (e.current.style.display = "flex");
        } else {
          if ("none" === e.current.style.display) return;
          e.current.style.display = "none";
        }
    }
    g.exports.useEffect(() => {
      window.addEventListener("scroll", zt(t, 300));
    }, []);
    return u.createElement(
      "button",
      {
        ref: e,
        className:
          "ScrollTop w-10 h-10 bg-black/10 hover:bg-black/20 dark:bg-white/10 dark:hover:bg-white/20 items-center justify-center rounded-full text-xl fixed bottom-6 right-5 z-50 transition-opacity text-white dark:text-neutral-300",
        onClick: () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        },
        style: { display: "none" },
      },
      u.createElement("i", { className: "las la-arrow-up" })
    );
  },
  vr = u.lazy(() =>
    je(
      () => import("./MediaRunningContainerForSafari.ecfef50c.js"),
      [
        "assets/MediaRunningContainerForSafari.ecfef50c.js",
        "assets/vendor.49c01715.js",
      ]
    )
  ),
  xr = u.lazy(() =>
    je(
      () => import("./MediaRunningContainer.5c784f3f.js"),
      ["assets/MediaRunningContainer.5c784f3f.js", "assets/vendor.49c01715.js"]
    )
  );
function br() {
  return u.createElement(
    u.Fragment,
    null,
    u.createElement(Be, null, u.createElement(er, null)),
    u.createElement(fr, null),
    u.createElement(Ha, null),
    u.createElement(hr, null),
    u.createElement(
      Be,
      null,
      u.createElement(
        g.exports.Suspense,
        { fallback: u.createElement("div", null) },
        Ht() ? u.createElement(vr, null) : u.createElement(xr, null)
      )
    )
  );
}
var Nr = ie({
  name: "bookmark",
  initialState: { recentSaved: [], recentRemoved: [] },
  reducers: {
    addNewSavedByPostId: (e, t) =>
      (e = m(i({}, e), {
        recentSaved: [...e.recentSaved, t.payload],
        recentRemoved: e.recentRemoved.filter((e) => e !== t.payload),
      })),
    removeSavedByPostId: (e, t) =>
      (e = m(i({}, e), {
        recentRemoved: [...e.recentSaved, t.payload],
        recentSaved: e.recentSaved.filter((e) => e !== t.payload),
      })),
  },
}).reducer;
var kr = ie({
  name: "postLike",
  initialState: { recentLiked: [], recentRemoved: [] },
  reducers: {
    addNewLikedByPostId: (e, t) =>
      (e = m(i({}, e), {
        recentLiked: [...e.recentLiked, t.payload],
        recentRemoved: e.recentRemoved.filter((e) => e !== t.payload),
      })),
    removeLikedByPostId: (e, t) =>
      (e = m(i({}, e), {
        recentRemoved: [...e.recentRemoved, t.payload],
        recentLiked: e.recentLiked.filter((e) => e !== t.payload),
      })),
  },
}).reducer;
var wr = ie({
  name: "commentLike",
  initialState: { recentLiked: [], recentRemoved: [] },
  reducers: {
    addNewLikedByPostId: (e, t) =>
      (e = m(i({}, e), {
        recentLiked: [...e.recentLiked, t.payload],
        recentRemoved: e.recentRemoved.filter((e) => e !== t.payload),
      })),
    removeLikedByPostId: (e, t) =>
      (e = m(i({}, e), {
        recentRemoved: [...e.recentRemoved, t.payload],
        recentLiked: e.recentLiked.filter((e) => e !== t.payload),
      })),
  },
}).reducer;
const yr = he(
    { key: "root", version: 1, storage: be, whitelist: ["darkmode"] },
    fe({
      bookmark: Nr,
      postLike: kr,
      darkmode: ie({
        name: "darkmode",
        initialState: { isDarkMode: !1 },
        reducers: {
          toogleDarkMode: (e) => ({ isDarkMode: !e.isDarkMode }),
          enableDarkMode: () => ({ isDarkMode: !0 }),
          disableDarkMode: () => ({ isDarkMode: !1 }),
        },
      }).reducer,
      commentLikes: wr,
      pages: ie({
        name: "pages",
        initialState: { currentPage: { type: "/", data: {} } },
        reducers: {
          changeCurrentPage: (e, t) =>
            (e = m(i({}, e), { currentPage: t.payload })),
        },
      }).reducer,
      mediaRunning: Vt,
    })
  ),
  Cr = [],
  Ir = ve({
    reducer: yr,
    middleware: (e) =>
      e({
        serializableCheck: { ignoredActions: [Ne, ke, we, ye, Ce, Ie] },
      }).concat(Cr),
  });
let _r = xe(Ir);
const Ar = u.lazy(() =>
  je(
    () => import("./RtlImportCss.ea55ca25.js"),
    ["assets/RtlImportCss.ea55ca25.js", "assets/RtlImportCss.8cc53ff1.css"]
  )
);
if (
  (null == (e = window.frontendObject) ? void 0 : e.graphQLBasePath) &&
  !location.pathname.includes("/wp-admin/")
) {
  const e = new _e({ typePolicies: {} }),
    a = new Ae(),
    r = new Le({ uri: window.frontendObject.graphQLBasePath }),
    n = new Se({
      uri: window.frontendObject.graphQLBasePath,
      cache: e,
      link: Me([a, r]),
    });
  ue.render(
    u.createElement(
      u.StrictMode,
      null,
      u.createElement(
        Te,
        { store: Ir },
        u.createElement(
          ze,
          { loading: null, persistor: _r },
          u.createElement(
            $e,
            { client: n },
            u.createElement(br, null),
            "rtl" ===
              (null == (t = document.querySelector("html"))
                ? void 0
                : t.getAttribute("dir")) &&
              u.createElement(
                g.exports.Suspense,
                { fallback: u.createElement("div", null) },
                u.createElement(Ar, null)
              )
          )
        )
      )
    ),
    document.getElementById("root")
  );
}
export {
  Ta as $,
  vt as A,
  qe as B,
  kt as C,
  za as D,
  Fe as E,
  gt as F,
  pt as G,
  Ze as H,
  ft as I,
  ht as J,
  Nt as K,
  Pt as L,
  Et as M,
  Xe as N,
  ut as O,
  rt as P,
  Ht as Q,
  Zt as R,
  Wt as S,
  Ue as T,
  st as U,
  ot as V,
  Re as W,
  rr as X,
  We as Y,
  He as Z,
  mt as _,
  Ut as a,
  It as b,
  Bt as c,
  Oe as d,
  Lt as e,
  nt as f,
  wt as g,
  Pa as h,
  $a as i,
  Ia as j,
  Kt as k,
  ga as l,
  aa as m,
  _a as n,
  ea as o,
  fa as p,
  ra as q,
  Ft as r,
  Yt as s,
  Qe as t,
  Dt as u,
  Xt as v,
  bt as w,
  pa as x,
  xt as y,
  Ye as z,
};
