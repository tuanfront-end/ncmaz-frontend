var e,
  t = Object.defineProperty,
  a = Object.defineProperties,
  l = Object.getOwnPropertyDescriptors,
  n = Object.getOwnPropertySymbols,
  r = Object.prototype.hasOwnProperty,
  s = Object.prototype.propertyIsEnumerable,
  o = (e, a, l) =>
    a in e
      ? t(e, a, { enumerable: !0, configurable: !0, writable: !0, value: l })
      : (e[a] = l),
  c = (e, t) => {
    for (var a in t || (t = {})) r.call(t, a) && o(e, a, t[a]);
    if (n) for (var a of n(t)) s.call(t, a) && o(e, a, t[a]);
    return e;
  },
  i = (e, t) => a(e, l(t)),
  m = (e, t) => {
    var a = {};
    for (var l in e) r.call(e, l) && t.indexOf(l) < 0 && (a[l] = e[l]);
    if (null != e && n)
      for (var l of n(e)) t.indexOf(l) < 0 && s.call(e, l) && (a[l] = e[l]);
    return a;
  };
import {
  R as d,
  r as u,
  P as p,
  a as f,
  L as g,
  b as E,
  T as h,
  c as v,
  F as x,
  d as b,
  M as N,
  D as k,
  e as w,
  S as y,
  n as C,
  G as A,
  f as I,
  u as S,
  g as L,
  h as M,
  i as _,
  j as z,
  k as T,
  l as j,
  m as P,
  o as $,
  p as D,
  q as U,
  s as R,
  t as B,
  v as V,
  w as O,
  x as F,
  y as H,
  z as G,
  A as Y,
  B as W,
  I as Q,
  C as Z,
  E as q,
  H as J,
  J as X,
} from "./vendor.3078d0a1.js";
const K = {},
  ee = function (e, t) {
    return t && 0 !== t.length
      ? Promise.all(
          t.map((e) => {
            if (
              (e = `${window.frontendObject.homeURL}/wp-content/plugins/ncmaz-frontend/dist/${e}`) in
              K
            )
              return;
            K[e] = !0;
            const t = e.endsWith(".css"),
              a = t ? '[rel="stylesheet"]' : "";
            if (document.querySelector(`link[href="${e}"]${a}`)) return;
            const l = document.createElement("link");
            return (
              (l.rel = t ? "stylesheet" : "modulepreload"),
              t || ((l.as = "script"), (l.crossOrigin = "")),
              (l.href = e),
              document.head.appendChild(l),
              t
                ? new Promise((e, t) => {
                    l.addEventListener("load", e),
                      l.addEventListener("error", t);
                  })
                : void 0
            );
          })
        ).then(() => e())
      : e();
  };
function te(e = !1) {
  return e
    ? "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
    : "focus:outline-none";
}
const ae = ({
    containerClassName: e = "relative",
    onClickNext: t = () => {},
    onClickPrev: a = () => {},
    btnClassName: l = "w-10 h-10",
    onlyNext: n = !1,
    onlyPrev: r = !1,
    disableNext: s,
    disablePrev: o,
  }) =>
    d.createElement(
      "div",
      {
        className: `nc-NextPrev flex items-center text-neutral-900 dark:text-neutral-300 space-x-2 ${e}`,
        "data-nc-id": "NextPrev",
        "data-glide-el": "controls",
      },
      !n &&
        d.createElement(
          "button",
          {
            className: `${l} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed ${te()}`,
            onClick: a,
            title: "Prev",
            "data-glide-dir": "<",
            disabled: o,
          },
          d.createElement("i", { className: "las la-angle-left" })
        ),
      !r &&
        d.createElement(
          "button",
          {
            className: `${l} bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center hover:border-neutral-300 disabled:opacity-60 disabled:cursor-not-allowed ${te()}`,
            onClick: t,
            title: "Next",
            "data-glide-dir": ">",
            disabled: s,
          },
          d.createElement("i", { className: "las la-angle-right" })
        )
    ),
  le = (e) => {
    var t = e,
      {
        children: a,
        desc: l = "Discover the most outstanding articles in all topics of life. ",
        className: n = "mb-12 md:mb-16 text-neutral-900 dark:text-neutral-50",
        isCenter: r = !1,
        hasNextPrev: s = !1,
      } = t,
      o = m(t, ["children", "desc", "className", "isCenter", "hasNextPrev"]);
    return a || l
      ? d.createElement(
          "div",
          {
            className: `nc-Section-Heading relative flex flex-col sm:flex-row sm:items-end justify-between ${n}`,
          },
          d.createElement(
            "div",
            {
              className: r
                ? "text-center w-full max-w-2xl mx-auto "
                : "max-w-2xl",
            },
            d.createElement(
              "h2",
              c({ className: "text-3xl md:text-4xl font-semibold" }, o),
              a
            ),
            l &&
              d.createElement(
                "span",
                {
                  className:
                    "mt-2 md:mt-3 font-normal block text-base sm:text-xl text-neutral-500 dark:text-neutral-400",
                },
                l
              )
          ),
          s &&
            !r &&
            d.createElement(
              "div",
              {
                className:
                  "mt-4 flex justify-end sm:ml-2 sm:mt-0 flex-shrink-0",
              },
              d.createElement(ae, {
                onClickNext: () => {},
                onClickPrev: () => {},
              })
            )
        )
      : null;
  },
  ne = ({
    className: e = "text-neutral-700 dark:text-neutral-200",
    translate: t = "",
    sizeClass: a = "px-4 py-3 sm:px-6",
    fontSize: l = "text-sm sm:text-base font-medium",
    disabled: n = !1,
    href: r,
    children: s,
    targetBlank: o,
    type: c,
    loading: i,
    onClick: m = () => {},
  }) => {
    const u =
      `nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors ${l} ${a} ${t} ${e} ` +
      te(!0);
    return r
      ? d.createElement(
          "a",
          {
            href: r,
            target: o ? "_blank" : void 0,
            className: `${u} `,
            onClick: m,
            rel: "noopener noreferrer",
          },
          s || "This is Link"
        )
      : d.createElement(
          "button",
          { disabled: n || i, className: `${u}`, onClick: m, type: c },
          i &&
            d.createElement(
              "svg",
              {
                className: "animate-spin -ml-1 mr-3 h-5 w-5",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "none",
                viewBox: "0 0 24 24",
              },
              d.createElement("circle", {
                className: "opacity-25",
                cx: "12",
                cy: "12",
                r: "10",
                stroke: "currentColor",
                strokeWidth: "3",
              }),
              d.createElement("path", {
                className: "opacity-75",
                fill: "currentColor",
                d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
              })
            ),
          s || "This is Button"
        );
  },
  re = (e) => {
    var t = e,
      { className: a = " " } = t,
      l = m(t, ["className"]);
    return d.createElement(
      ne,
      c(
        {
          className: `ttnc-ButtonSecondary font-medium border bg-white border-neutral-200 text-neutral-700 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800 ${a}`,
        },
        l
      )
    );
  },
  se = ({ containerClassName: e = "", className: t = "", children: a }) =>
    d.createElement(
      "nav",
      { className: `nc-Nav ${e}`, "data-nc-id": "Nav" },
      d.createElement("ul", { className: `flex  ${t}` }, a)
    ),
  oe = ({
    className:
      e = "px-5 py-2.5 text-sm sm:text-base sm:px-6 sm:py-3 capitalize",
    radius: t = "rounded-full",
    children: a,
    onClick: l = () => {},
    isActive: n = !1,
    renderX: r,
  }) =>
    d.createElement(
      "li",
      { className: "nc-NavItem relative", "data-nc-id": "NavItem" },
      r && r,
      d.createElement(
        "button",
        {
          className: `block !leading-none font-medium ${e} ${t} ${
            n
              ? "bg-secondary-900 text-secondary-50 "
              : "text-neutral-500 dark:text-neutral-400 dark:hover:text-neutral-100 hover:text-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800"
          } ${te()}`,
          onClick: () => {
            l && l();
          },
        },
        a
      )
    );
let ce = {
  nothingWeFound: "Nothing we found!",
  all: "All",
  viewAll: "View All",
  articles: "Articles",
  showMeMore: "Show me more",
  showAllPhotos: "Show all photos",
  relatedPosts: "Related Posts",
  moreFromAuthor: "More from author",
};
try {
  if (
    frontendObject.frontendTranslate &&
    "string" == typeof frontendObject.frontendTranslate
  ) {
    const e = JSON.parse(frontendObject.frontendTranslate);
    e && "object" == typeof e && (ce = c(c({}, ce), e));
  }
} catch ($a) {
  console.log("----translate frontend file error ----", $a);
}
var ie = ce;
const me = ({
    tabActiveId: e,
    tabs: t,
    subHeading: a = "",
    viewMoreHref: l = "#",
    heading: n = "🎈 Latest Articles",
    onClickTab: r,
  }) =>
    d.createElement(
      "div",
      { className: "flex flex-col mb-8 relative" },
      d.createElement(le, { desc: a }, n),
      d.createElement(
        "div",
        { className: "flex items-center justify-between" },
        d.createElement(
          se,
          {
            className: "sm:space-x-2",
            containerClassName:
              "relative flex w-full overflow-x-auto text-sm md:text-base hiddenScrollbar",
          },
          d.createElement(
            oe,
            { isActive: -1 === e, onClick: () => r(-1) },
            ie.all
          ),
          t.map((t, a) =>
            d.createElement(
              oe,
              { key: a, isActive: e === t.id, onClick: () => r(t) },
              t.name
            )
          )
        ),
        l &&
          d.createElement(
            "span",
            { className: "hidden sm:block flex-shrink-0" },
            d.createElement(
              re,
              { href: l, className: "!leading-none" },
              d.createElement("span", null, " ", ie.viewAll),
              d.createElement("i", {
                className: "ml-3 las la-arrow-right text-xl leading-none",
              })
            )
          )
      )
    ),
  de = ({
    className: e = "bg-neutral-100 dark:bg-black dark:bg-opacity-20 ",
  }) =>
    d.createElement("div", {
      className: `nc-BackgroundSection absolute inset-y-0 w-screen xl:max-w-[1340px] 2xl:max-w-screen-2xl left-1/2 transform -translate-x-1/2 xl:rounded-[40px] z-0 ${e}`,
      "data-nc-id": "BackgroundSection",
    }),
  ue = () =>
    d.createElement(
      "svg",
      {
        className: "w-full h-full",
        viewBox: "0 0 197 193",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
      },
      d.createElement("path", {
        d: "M145.828 48.9822C134.953 48.9822 126.105 57.8301 126.105 68.7051C126.105 79.5801 134.953 88.428 145.828 88.428C156.703 88.428 165.551 79.5805 165.551 68.7051C165.551 57.8293 156.704 48.9822 145.828 48.9822ZM145.828 80.7741C139.173 80.7741 133.759 75.3602 133.759 68.7051C133.759 62.0501 139.173 56.6361 145.828 56.6361C152.483 56.6361 157.897 62.0501 157.897 68.7051C157.897 75.3594 152.483 80.7741 145.828 80.7741Z",
        fill: "currentColor",
      }),
      d.createElement("path", {
        d: "M145.963 171.49C145.867 171.256 145.748 171.034 145.611 170.828C145.473 170.617 145.312 170.422 145.136 170.246C144.96 170.07 144.765 169.909 144.554 169.771C144.348 169.634 144.126 169.515 143.892 169.419C143.663 169.324 143.422 169.247 143.177 169.201C142.683 169.102 142.178 169.102 141.684 169.201C141.439 169.247 141.198 169.324 140.969 169.419C140.735 169.515 140.513 169.634 140.306 169.771C140.096 169.909 139.901 170.07 139.725 170.246C139.549 170.422 139.388 170.617 139.25 170.828C139.112 171.034 138.994 171.256 138.898 171.49C138.802 171.719 138.726 171.96 138.68 172.205C138.63 172.45 138.603 172.703 138.603 172.952C138.603 173.2 138.63 173.453 138.68 173.698C138.726 173.943 138.802 174.184 138.898 174.413C138.994 174.647 139.112 174.869 139.25 175.075C139.388 175.286 139.549 175.481 139.725 175.657C139.812 175.745 139.905 175.829 140.001 175.908C140.099 175.987 140.201 176.063 140.306 176.132C140.513 176.269 140.735 176.388 140.969 176.484C141.198 176.579 141.439 176.656 141.684 176.702C141.929 176.752 142.182 176.778 142.43 176.778C142.679 176.778 142.932 176.752 143.177 176.702C143.422 176.656 143.663 176.579 143.892 176.484C144.126 176.388 144.348 176.269 144.554 176.132C144.66 176.062 144.762 175.987 144.859 175.908C144.956 175.829 145.048 175.745 145.136 175.657C145.312 175.481 145.473 175.286 145.611 175.075C145.748 174.869 145.867 174.647 145.963 174.413C146.058 174.184 146.135 173.943 146.185 173.698C146.234 173.453 146.257 173.2 146.257 172.952C146.257 172.703 146.234 172.45 146.185 172.205C146.135 171.96 146.058 171.719 145.963 171.49Z",
        fill: "currentColor",
      }),
      d.createElement("path", {
        d: "M85.7341 20.0459C85.6384 19.8163 85.5198 19.5943 85.382 19.3838C85.2442 19.1772 85.0835 18.9782 84.9075 18.8021C84.7314 18.6261 84.5363 18.4653 84.3258 18.3276C84.1191 18.1898 83.8972 18.0712 83.6637 17.9755C83.4341 17.8798 83.193 17.8071 82.9481 17.7574C82.4544 17.6579 81.9492 17.6579 81.4556 17.7574C81.2106 17.8071 80.9695 17.8798 80.7361 17.9755C80.5065 18.0712 80.2845 18.1898 80.0779 18.3276C79.8674 18.4653 79.6722 18.6261 79.4962 18.8021C79.3201 18.9782 79.1594 19.1772 79.0178 19.3838C78.88 19.5943 78.7652 19.8163 78.6696 20.0459C78.5739 20.2755 78.4973 20.5166 78.4514 20.7615C78.4017 21.0103 78.3749 21.259 78.3749 21.5116C78.3749 21.7603 78.4017 22.0091 78.4514 22.2579C78.4973 22.5028 78.5739 22.7439 78.6696 22.9735C78.7652 23.2031 78.88 23.4251 79.0178 23.6356C79.1594 23.8422 79.3201 24.0412 79.4962 24.2172C79.6722 24.3933 79.8674 24.554 80.0779 24.6918C80.2845 24.8296 80.5065 24.9482 80.7361 25.0439C80.9695 25.1395 81.2106 25.2123 81.4556 25.262C81.7005 25.3118 81.9531 25.3385 82.2018 25.3385C82.4506 25.3385 82.7032 25.3118 82.9481 25.262C83.193 25.2123 83.4341 25.1395 83.6637 25.0439C83.8972 24.9482 84.1191 24.8296 84.3258 24.6918C84.5363 24.554 84.7314 24.3933 84.9075 24.2172C85.0835 24.0412 85.2442 23.8422 85.382 23.6356C85.5198 23.4251 85.6384 23.2031 85.7341 22.9735C85.8298 22.7439 85.9063 22.5028 85.9522 22.2579C86.002 22.0091 86.0288 21.7603 86.0288 21.5116C86.0288 21.259 86.002 21.0103 85.9522 20.7615C85.9063 20.5166 85.8298 20.2755 85.7341 20.0459Z",
        fill: "currentColor",
      }),
      d.createElement("path", {
        d: "M175.008 17.6988C172.714 7.99787 163.987 0.755371 153.594 0.755371H33.522C15.2866 0.754988 0.450684 15.5909 0.450684 33.8263V153.899C0.450684 165.824 9.98628 175.557 21.8326 175.891C24.1272 185.592 32.8542 192.835 43.2467 192.835H174.382C186.517 192.835 196.39 182.962 196.39 170.826V141.949V39.6911C196.39 27.7663 186.855 18.0329 175.008 17.6988ZM188.736 170.827C188.736 178.742 182.297 185.182 174.382 185.182H43.2467C37.1197 185.182 31.8799 181.322 29.8236 175.908C29.2232 174.327 28.8918 172.615 28.8918 170.827V168.254V150.524L72.7964 76.0808C74.1332 73.8144 76.517 72.4911 79.1323 72.5332C81.7633 72.5783 84.0851 73.9844 85.3434 76.2955L104.247 111.007L131.725 161.462C132.419 162.737 133.733 163.459 135.089 163.459C135.708 163.459 136.335 163.309 136.916 162.993C138.772 161.982 139.458 159.657 138.447 157.801L129.53 141.428C133.445 141.608 137.296 140.341 140.362 137.797L157.572 123.52C160.332 121.23 164.408 121.331 167.051 123.755L167.95 124.578L175.604 131.594L188.736 143.632V170.827ZM188.736 133.249L175.603 121.21L167.95 115.382C162.963 113.297 157.033 114.022 152.685 117.629L135.475 131.906C133.582 133.476 131.111 134.111 128.695 133.646C126.28 133.183 124.22 131.677 123.043 129.517L110.969 107.345L104.226 94.9648V94.9644L92.0655 72.6342C89.4716 67.8716 84.6856 64.9727 79.2632 64.8801C73.8423 64.7951 68.9588 67.521 66.2037 72.1922L28.8914 135.457V39.6911C28.8914 31.7758 35.331 25.3362 43.2463 25.3362H66.8937C69.0074 25.3362 70.7207 23.6229 70.7207 21.5093C70.7207 19.3957 69.0074 17.6823 66.8937 17.6823H43.2463C31.1106 17.6823 21.2375 27.5555 21.2375 39.6911V149.479V168.198C13.8924 167.575 8.10458 161.402 8.10458 153.899V33.8263C8.10458 19.8109 19.507 8.40888 33.522 8.40888H153.594C159.721 8.40888 164.961 12.2684 167.017 17.6827H97.5093C95.3957 17.6827 93.6824 19.396 93.6824 21.5097C93.6824 23.6233 95.3957 25.3366 97.5093 25.3366H167.949L175.603 25.3925C182.949 26.0147 188.736 32.1876 188.736 39.6911V133.249Z",
        fill: "currentColor",
      })
    ),
  pe = (e) => {
    var t = e,
      {
        containerClassName: a = "",
        alt: l = "nc-imgs",
        src: n = "",
        className: r = "object-cover w-full h-full",
      } = t,
      s = m(t, ["containerClassName", "alt", "src", "className"]);
    let o = !1;
    const i = u.exports.useRef(null);
    let p = null;
    const [f, g] = u.exports.useState(""),
      [E, h] = u.exports.useState(!1),
      v = () => {
        i.current &&
          (({ target: e, distanceFromEnd: t, callback: a }) => {
            if (void 0 === window.IntersectionObserver)
              return void console.error(
                "window.IntersectionObserver === undefined! => Your Browser is Notsupport"
              );
            const l = new IntersectionObserver(
              (e, t) => {
                e.map(
                  (e) => (e.isIntersecting && a() && t.unobserve(e.target), !0)
                );
              },
              { root: null, rootMargin: `${t}px 0px`, threshold: 0 }
            );
            e && l.observe(e);
          })({ target: i.current, distanceFromEnd: 0, callback: x });
      },
      x = () =>
        n
          ? ((p = new Image()),
            p && ((p.src = n), p.addEventListener("load", b)),
            !0)
          : (b(), !0),
      b = () => {
        o && (h(!0), g(n));
      };
    u.exports.useEffect(
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
    return d.createElement(
      "div",
      { className: `nc-NcImage ${a}`, "data-nc-id": "NcImage", ref: i },
      f && E
        ? d.createElement("img", c({ src: f, className: r, alt: l }, s))
        : d.createElement(
            "div",
            {
              className: `${r} flex items-center justify-center bg-neutral-200 dark:bg-neutral-6000 text-neutral-100 dark:text-neutral-500`,
            },
            d.createElement(
              "div",
              { className: "h-2/4 max-w-[50%]" },
              d.createElement(ue, null)
            )
          )
    );
  },
  fe = [
    { id: "Facebook", name: "Facebook", icon: "lab la-facebook-f" },
    { id: "Twitter", name: "Twitter", icon: "lab la-twitter" },
    { id: "Linkedin", name: "Linkedin", icon: "lab la-linkedin-in" },
    { id: "Pinterest", name: "Pinterest", icon: "lab la-Pinterest" },
  ],
  ge = ({ className: e = "grid gap-[6px]", href: t = "#", size: a = 24 }) =>
    d.createElement(
      "div",
      { className: `nc-SocialsShare ${e}`, "data-nc-id": "SocialsShare" },
      fe.map((e, l) => {
        switch (e.id) {
          case "Facebook":
            return d.createElement(
              x,
              { key: l, url: t, className: "hover:opacity-70" },
              d.createElement(b, { round: !0, size: a })
            );
          case "Twitter":
            return d.createElement(
              h,
              { key: l, url: t, className: "hover:opacity-70" },
              d.createElement(v, { round: !0, size: a })
            );
          case "Linkedin":
            return d.createElement(
              g,
              { key: l, url: t, className: "hover:opacity-70" },
              d.createElement(E, { round: !0, size: a })
            );
          case "Pinterest":
            return d.createElement(
              p,
              { media: "", key: l, url: t, className: "hover:opacity-70" },
              d.createElement(f, { round: !0, size: a })
            );
          default:
            return null;
        }
      })
    ),
  Ee = ({ className: e = "flex px-3 h-8 text-xs", href: t, commentCount: a }) =>
    d.createElement(
      "a",
      {
        href: t + "#comments",
        className: `nc-PostCardCommentBtn relative items-center min-w-[68px] rounded-full text-neutral-6000 bg-neutral-50 transition-colors dark:text-neutral-200 dark:bg-neutral-800 hover:bg-teal-50 dark:hover:bg-teal-100 hover:text-teal-600 dark:hover:text-teal-500 ${e} ${te()}`,
        title: "Comments",
        "data-nc-id": "PostCardCommentBtn",
      },
      d.createElement(
        "svg",
        { width: "24", height: "24", fill: "none", viewBox: "0 0 24 24" },
        d.createElement("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth: "1",
          d: "M4.75 6.75C4.75 5.64543 5.64543 4.75 6.75 4.75H17.25C18.3546 4.75 19.25 5.64543 19.25 6.75V14.25C19.25 15.3546 18.3546 16.25 17.25 16.25H14.625L12 19.25L9.375 16.25H6.75C5.64543 16.25 4.75 15.3546 4.75 14.25V6.75Z",
        }),
        d.createElement("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M9.5 11C9.5 11.2761 9.27614 11.5 9 11.5C8.72386 11.5 8.5 11.2761 8.5 11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11Z",
        }),
        d.createElement("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M12.5 11C12.5 11.2761 12.2761 11.5 12 11.5C11.7239 11.5 11.5 11.2761 11.5 11C11.5 10.7239 11.7239 10.5 12 10.5C12.2761 10.5 12.5 10.7239 12.5 11Z",
        }),
        d.createElement("path", {
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          d: "M15.5 11C15.5 11.2761 15.2761 11.5 15 11.5C14.7239 11.5 14.5 11.2761 14.5 11C14.5 10.7239 14.7239 10.5 15 10.5C15.2761 10.5 15.5 10.7239 15.5 11Z",
        })
      ),
      d.createElement(
        "span",
        { className: "ml-1 text-neutral-900 dark:text-neutral-200" },
        a
      )
    );
let he = {};
const ve = ({
    favoriteButtonShortcode: e,
    className: t = "relative",
    onClick: a = () => {},
    postId: l,
  }) => {
    const n = u.exports.useRef(null);
    let r = null;
    u.exports.useEffect(
      () => () => {
        r && clearTimeout(r);
      },
      []
    );
    return d.createElement("div", {
      ref: n,
      className: `ncmaz-button-like-post ${t}`,
      onClick: () => {
        n.current &&
          jQuery &&
          (a && a(),
          jQuery(document).one("ajaxStop", function () {
            r = setTimeout(() => {
              var e;
              he = i(c({}, he), {
                [l]: (null == (e = n.current) ? void 0 : e.innerHTML) || "",
              });
            }, 200);
          }));
      },
      dangerouslySetInnerHTML: { __html: he[l] || e },
    });
  },
  xe = ({
    className: e = "",
    itemClass: t = "px-3 h-8 text-xs",
    hiddenCommentOnMobile: a = !0,
    postData: l,
    onClickLike: n = () => {},
  }) => {
    var r;
    return d.createElement(
      "div",
      {
        className: `nc-PostCardLikeAndComment flex items-center space-x-2 ${e}`,
        "data-nc-id": "PostCardLikeAndComment",
      },
      d.createElement(ve, {
        postId: l.postId,
        onClick: () => n(l.postId),
        favoriteButtonShortcode:
          (null == (r = null == l ? void 0 : l.ncPostMetaData)
            ? void 0
            : r.favoriteButtonShortcode) || "",
      }),
      d.createElement(Ee, {
        href: l.link,
        commentCount: l.commentCount || 0,
        className: `${a ? "hidden sm:flex" : "flex"}  ${t}`,
      })
    );
  },
  be = [
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
  Ne =
    " edges {\n  node {\n    id\n    link\n    author {\n      node {\n        id\n        avatar {\n          url\n        }\n        url\n        uri\n        username\n        name\n        slug\n        ncUserMeta {\n          featuredImage {\n            sourceUrl(size: $author_ncUserMeta_featuredImage_size)\n          }\n        }\n      }\n    }\n    categories {\n      edges {\n        node {\n          id\n          link\n          name\n          uri\n          slug\n          count\n          categoryId\n          ncTaxonomyMeta {\n            color\n          }\n        }\n      }\n    }\n    commentCount\n    date\n    excerpt\n    featuredImage {\n      node {\n        id\n        altText\n        caption\n        sourceUrl(size: $featuredImage_size)\n      }\n    }\n    postFormats {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n    postId\n    slug\n    title\n    ncmazVideoUrl {\n      fieldGroupName\n      videoUrl\n    }\n    ncmazAudioUrl {\n      fieldGroupName\n      audioUrl\n    }\n    ncPostMetaData {\n      favoriteButtonShortcode\n      readingTimeShortcode\n      viewsCount\n      fieldGroupName\n    }\n    ncmazGalleryImgs {\n      fieldGroupName\n      image1 {\n        id\n        sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image2 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image3 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image4 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image5 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image6 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image7 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n      image8 {\n        id\n         sourceUrl(size: $ncmazGalleryImgs_size)\n      }\n    }\n  }\n}",
  ke = `\n  query GQL_QUERY_GET_POSTS_BY_FILTER(\n    $field: PostObjectsConnectionOrderbyEnum = AUTHOR\n    $order: OrderEnum = ASC\n    $categoryIn: [ID] = []\n    $tagIn: [ID] = []\n    $authorIn: [ID] = []\n    $notIn: [ID] = []\n    $last: Int = null\n    $first: Int = 10\n    $before: String = ""\n    $after: String = ""\n    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n    $featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n  ) {\n    posts(\n      where: {\n        orderby: { field: $field, order: $order }\n        categoryIn: $categoryIn\n        tagIn: $tagIn\n        authorIn: $authorIn\n        notIn: $notIn\n      }\n      last: $last\n      first: $first\n      before: $before\n      after: $after\n    ) {\n     ${Ne}\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n`,
  we = `\n  query GQL_QUERY_GET_POSTS_BY_SPECIFIC(\n    $nameIn: [String] = ""\n    $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n    $featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    $ncmazGalleryImgs_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    ) {\n    posts(where: { nameIn: $nameIn }) { ${Ne} }\n  }\n`,
  ye =
    "edges {\n\tnode {\n\t\tid\n\t\tname\n\t\tusername\n\t\tuserId\n\t\turl\n\t\turi\n\t\tncUserMeta {\n\t\t\tcolor\n\t\t\tncBio\n\t\t\tfeaturedImage {\n\t\t\t\tsourceUrl(size: $author_ncUserMeta_featuredImage_size)\n\t\t\t\tid\n\t\t\t}\n\t\t\tbackgroundImage {\n\t\t\t\tsourceUrl(size: $author_ncUserMeta_backgroundImage_size)\n\t\t\t}\n\t\t}\n    posts {\n      pageInfo {\n        total\n      }\n    }\n\t}\n}",
  Ce = `query GQL_QUERY_GET_USERS_BY_FILTER(\n\t$after: String = ""\n\t$before: String = ""\n\t$first: Int = 10\n\t$last: Int = null\n\t$field: UsersConnectionOrderbyEnum = DISPLAY_NAME\n\t$order: OrderEnum = ASC\n\t$roleIn: [UserRoleEnum] = []\n  $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n  $author_ncUserMeta_backgroundImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n) {\n\tusers(\n\t\twhere: { orderby: { field: $field, order: $order }, roleIn: $roleIn }\n\t\tlast: $last\n\t\tfirst: $first\n\t\tbefore: $before\n\t\tafter: $after\n\t) { ${ye} }\n}`,
  Ae = `query GQL_QUERY_GET_USERS_BY_SPECIFIC(\n  $include: [Int] = null\n  $author_ncUserMeta_featuredImage_size: MediaItemSizeEnum = THUMBNAIL\n  $author_ncUserMeta_backgroundImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n  ) {\n\tusers(where: { include: $include }) { ${ye} }\n}`,
  Ie =
    "edges {\n    node {\n        id\n        count\n        name\n        databaseId\n        description\n        link\n        ncTaxonomyMeta {\n            color                                     \n            featuredImage {\n              sourceUrl(size: $ncTaxonomyMeta_featuredImage_size)\n            }\n        }\n    }\n}",
  Se = `\n\tquery GQL_QUERY_GET_CATEGORIES_BY_FILTER(\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n\t) {\n\t\tcategories(\n\t\t\twhere: { order: $order, orderby: $orderby }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${Ie} }\n\t}\n`,
  Le = `\n\tquery GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC(\n    $termTaxonomId: [ID] = ""\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    ) {\n\t\tcategories(where: { termTaxonomId: $termTaxonomId }) { ${Ie} }\n\t}\n`,
  Me = `\n\tquery GQL_QUERY_GET_TAGS_BY_FILTER(\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n\t) {\n\t\ttags(\n\t\t\twhere: { order: $order, orderby: $orderby }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${Ie} }\n\t}\n`,
  _e = `\n\tquery GQL_QUERY_GET_TAGS_BY_SPECIFIC(\n    $termTaxonomId: [ID] = ""\n    $ncTaxonomyMeta_featuredImage_size: MediaItemSizeEnum = ${
    window.innerWidth < 500 ? "MEDIUM" : "MEDIUM_LARGE"
  }\n    ) {\n\t\ttags(where: { termTaxonomId: $termTaxonomId }) { ${Ie} }\n\t}\n`,
  ze = ({
    containerClassName: e = "ring-1 ring-white dark:ring-neutral-900",
    sizeClass: t = "h-6 w-6 text-base",
    radius: a = "rounded-md",
    imgUrl: l,
    userName: n,
  }) => {
    const r = l && !l.includes("gravatar.com/avatar/") ? l : "",
      s = n || "John Doe";
    return d.createElement(
      "div",
      {
        className: `wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner ${a} ${t} ${e}`,
        style: {
          backgroundColor: r
            ? void 0
            : ((e) => {
                const t = Math.floor(e.charCodeAt(0) % be.length);
                return be[t];
              })(s),
        },
      },
      r &&
        d.createElement("img", {
          className: "absolute inset-0 w-full h-full object-cover",
          src: r,
          alt: s,
        }),
      d.createElement("span", { className: "wil-avatar__name" }, s[0])
    );
  };
function Te(e) {
  var t;
  let a = new Date(e);
  return (
    (l =
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
        return r.getDate();
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
        return r.getDay();
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
        return r.getMonth() + 1;
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
        return r.getFullYear();
      },
      y: function () {
        return s.Y().toString().slice(-2);
      },
      a: function () {
        return r.getHours() > 11 ? "pm" : "am";
      },
      A: function () {
        return s.a().toUpperCase();
      },
      B: function () {
        var e = 3600 * r.getUTCHours(),
          t = 60 * r.getUTCMinutes(),
          a = r.getUTCSeconds();
        return d(Math.floor((e + t + a + 3600) / 86.4) % 1e3, 3);
      },
      g: function () {
        return s.G() % 12 || 12;
      },
      G: function () {
        return r.getHours();
      },
      h: function () {
        return d(s.g(), 2);
      },
      H: function () {
        return d(s.G(), 2);
      },
      i: function () {
        return d(r.getMinutes(), 2);
      },
      s: function () {
        return d(r.getSeconds(), 2);
      },
      u: function () {
        return d(1e3 * r.getMilliseconds(), 6);
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
        var e = r.getTimezoneOffset(),
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
        return 60 * -r.getTimezoneOffset();
      },
      c: function () {
        return "Y-m-d\\TH:i:sP".replace(i, m);
      },
      r: function () {
        return "D, d M Y H:i:s O".replace(i, m);
      },
      U: function () {
        return (r / 1e3) | 0;
      },
    }),
    (o = l),
    (r =
      void 0 === (c = n)
        ? new Date()
        : c instanceof Date
        ? new Date(c)
        : new Date(1e3 * c)),
    o.replace(i, m)
  );
  var l, n, r, s, o, c, i, m, d;
}
const je = ({
    className: e = "",
    author: t,
    readingTimeShortcode: a = "",
    date: l,
    hoverReadingTime: n = !0,
  }) => {
    var r, s, o;
    if (!t) return null;
    const { node: c } = t;
    return d.createElement(
      "a",
      {
        href: frontendObject.homeURL + c.uri,
        className: `nc-CardAuthor2 relative inline-flex items-center ${e}`,
        "data-nc-id": "CardAuthor2",
      },
      d.createElement(ze, {
        sizeClass: "h-10 w-10 text-base",
        containerClassName: "flex-shrink-0 mr-3",
        radius: "rounded-full",
        imgUrl:
          (null == (s = null == (r = c.ncUserMeta) ? void 0 : r.featuredImage)
            ? void 0
            : s.sourceUrl) || (null == (o = c.avatar) ? void 0 : o.url),
        userName: c.username,
      }),
      d.createElement(
        "div",
        null,
        d.createElement(
          "h2",
          {
            className:
              "text-sm text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium",
          },
          c.name
        ),
        d.createElement(
          "span",
          {
            className:
              "flex items-center mt-1 text-xs text-neutral-500 dark:text-neutral-400",
          },
          d.createElement("span", null, Te(l || "")),
          a &&
            d.createElement(
              d.Fragment,
              null,
              d.createElement(
                "span",
                {
                  className:
                    "hidden lg:inline mx-1 transition-opacity " +
                    (n ? "opacity-0 group-hover:opacity-100" : ""),
                },
                "·"
              ),
              d.createElement("span", {
                className:
                  "hidden lg:inline transition-opacity " +
                  (n ? "opacity-0 group-hover:opacity-100" : ""),
                dangerouslySetInnerHTML: { __html: a },
              })
            )
        )
      )
    );
  },
  Pe = ({ className: e = "relative", name: t, color: a = "blue", href: l }) => {
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
      r =
        "nc-Badge inline-flex px-2.5 py-1 rounded-full font-medium text-xs " +
        e;
    return l
      ? d.createElement(
          "a",
          {
            href: l || "",
            className: `transition-colors hover:text-white duration-300 ${r} ${n()}`,
          },
          t
        )
      : d.createElement("span", { className: `${r} ${n(!1)} ${e}` }, t);
  },
  $e = ({ className: e = "", itemClass: t = "", categories: a }) =>
    d.createElement(
      "div",
      {
        className: "nc-CategoryBadgeList flow-root ",
        "data-nc-id": "CategoryBadgeList",
      },
      d.createElement(
        "div",
        { className: `flex flex-wrap space-x-2 -my-1 ${e}` },
        (a || { edges: [] }).edges.map((e, a) => {
          var l, n;
          return d.createElement(Pe, {
            className: `relative my-1 ${t}`,
            key: a,
            name: e.node.name,
            href: e.node.link,
            color:
              null == (n = null == (l = e.node) ? void 0 : l.ncTaxonomyMeta)
                ? void 0
                : n.color,
          });
        })
      )
    ),
  De = ({
    className: e = "",
    postType: t = "Standard",
    onClick: a,
    wrapSize: l = "w-11 h-11",
    iconSize: n = "w-6 h-6",
  }) =>
    d.createElement(
      "div",
      {
        className: `nc-PostTypeFeaturedIcon ${e}`,
        "data-nc-id": "PostTypeFeaturedIcon",
        onClick: a,
      },
      !!t &&
        "Standard" !== t &&
        d.createElement(
          "span",
          {
            className: `bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white ${l}`,
          },
          "Video" === t
            ? d.createElement(
                "svg",
                {
                  className: n,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                d.createElement("path", {
                  d: "M17.13 7.9799C20.96 10.1899 20.96 13.8099 17.13 16.0199L14.04 17.7999L10.95 19.5799C7.13 21.7899 4 19.9799 4 15.5599V11.9999V8.43989C4 4.01989 7.13 2.2099 10.96 4.4199L13.21 5.7199",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              )
            : "Audio" === t
            ? d.createElement(
                "svg",
                {
                  className: n,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                d.createElement("path", {
                  d: "M6.28016 22C8.00328 22 9.40016 20.6031 9.40016 18.88C9.40016 17.1569 8.00328 15.76 6.28016 15.76C4.55703 15.76 3.16016 17.1569 3.16016 18.88C3.16016 20.6031 4.55703 22 6.28016 22Z",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                d.createElement("path", {
                  d: "M20.8404 7.96009V4.60009C20.8404 2.00009 19.2104 1.64009 17.5604 2.09009L11.3204 3.79009C10.1804 4.10009 9.40039 5.00009 9.40039 6.30009V8.47009V9.93009V18.8701",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                d.createElement("path", {
                  d: "M20.8398 16.8V12",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                d.createElement("path", {
                  d: "M17.7196 19.9199C19.4427 19.9199 20.8396 18.5231 20.8396 16.7999C20.8396 15.0768 19.4427 13.6799 17.7196 13.6799C15.9965 13.6799 14.5996 15.0768 14.5996 16.7999C14.5996 18.5231 15.9965 19.9199 17.7196 19.9199Z",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                d.createElement("path", {
                  d: "M9.40039 9.5199L20.8404 6.3999",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              )
            : "Gallery" === t
            ? d.createElement(
                "svg",
                {
                  className: n,
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                d.createElement("path", {
                  d: "M2 12.99V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                d.createElement("path", {
                  d: "M11 8C11 9.1 10.1 10 9 10C7.9 10 7 9.1 7 8C7 6.9 7.9 6 9 6",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                d.createElement("path", {
                  d: "M2.66992 18.9501L7.59992 15.6401C8.38992 15.1101 9.52992 15.1701 10.2399 15.7801L10.5699 16.0701C11.3499 16.7401 12.6099 16.7401 13.3899 16.0701L17.5499 12.5001C18.3299 11.8301 19.5899 11.8301 20.3699 12.5001L21.9999 13.9001",
                  stroke: "currentColor",
                  strokeWidth: "1.5",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                })
              )
            : d.createElement(
                "svg",
                { className: n, fill: "none", viewBox: "0 0 24 24" },
                d.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M18.2813 12.0313L11.9687 5.7187C11.4896 5.23964 10.6829 5.36557 10.3726 5.96785L6.75 13L11 17.25L18.0321 13.6274C18.6344 13.3171 18.7604 12.5104 18.2813 12.0313Z",
                }),
                d.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M4.75 19.25L8.5 15.5",
                }),
                d.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M13.75 7.25L16.25 4.75",
                }),
                d.createElement("path", {
                  stroke: "currentColor",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "1.5",
                  d: "M16.75 10.25L19.25 7.75",
                })
              )
        )
    ),
  Ue = ({
    className:
      e = `h-8 w-8 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center ${te()}`,
    iconClass: t = "h-[18px] w-[18px]",
    panelMenusClass: a = " w-56 top-0 right-0 origin-top-right",
    title: l = "More",
    renderTrigger: n,
    renderItem: r,
    data: s,
    onClick: o,
  }) =>
    d.createElement(
      N,
      { as: "div", className: "relative inline-block text-left" },
      d.createElement(
        N.Button,
        { className: e, title: l },
        n
          ? n()
          : d.createElement(k, {
              className: t,
              "aria-hidden": "true",
              stroke: "none",
              fill: "currentColor",
            })
      ),
      d.createElement(
        w,
        {
          as: u.exports.Fragment,
          enter: "transition ease-out duration-100",
          enterFrom: "transform opacity-0 scale-95",
          enterTo: "transform opacity-100 scale-100",
          leave: "transition ease-in duration-75",
          leaveFrom: "transform opacity-100 scale-100",
          leaveTo: "transform opacity-0 scale-95",
        },
        d.createElement(
          N.Items,
          {
            className: `absolute ${a} bg-white dark:bg-neutral-900 rounded-lg divide-y divide-neutral-100 shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 focus:outline-none z-40`,
          },
          d.createElement(
            "div",
            {
              className:
                "px-1 py-2.5 text-sm text-neutral-6000 dark:text-neutral-300",
            },
            s.map((e) =>
              d.createElement(
                N.Item,
                { key: e.id, onClick: () => o(e), "data-menu-item-id": e.id },
                ({ active: t }) =>
                  r
                    ? r(e, t)
                    : d.createElement(
                        "button",
                        {
                          className:
                            "flex items-center rounded-md w-full px-3 py-2  truncate " +
                            (t
                              ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                              : ""),
                        },
                        !!e.icon &&
                          d.createElement("i", {
                            className: `${e.icon} mr-1 w-7 text-base`,
                          }),
                        d.createElement(
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
  Re = [
    { id: "Facebook", name: "Facebook", icon: "lab la-facebook-f", href: "#" },
    { id: "Twitter", name: "Twitter", icon: "lab la-twitter", href: "#" },
    { id: "Linkedin", name: "Linkedin", icon: "lab la-linkedin-in", href: "#" },
    { id: "Pinterest", name: "Pinterest", icon: "lab la-Pinterest", href: "#" },
  ],
  Be = ({
    panelMenusClass: e = "w-52 right-0 bottom-0 origin-bottom-right",
    href: t = "/#",
    className:
      a = "nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-8 w-8",
  }) =>
    d.createElement(Ue, {
      className: a,
      panelMenusClass: e,
      title: "Share with",
      renderTrigger: () =>
        d.createElement(
          "div",
          null,
          d.createElement(
            "svg",
            { width: "24", height: "24", fill: "none", viewBox: "0 0 24 24" },
            d.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1",
              d: "M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75",
            }),
            d.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1",
              d: "M12 14.25L12 5",
            }),
            d.createElement("path", {
              stroke: "currentColor",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1",
              d: "M8.75 8.25L12 4.75L15.25 8.25",
            })
          )
        ),
      renderItem: (e, a) =>
        d.createElement(
          "div",
          {
            className:
              "flex items-center rounded-md w-full  truncate " +
              (a
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                : ""),
          },
          ((e, a) => {
            switch (e.id) {
              case "Facebook":
                return d.createElement(
                  x,
                  {
                    className: "flex items-center space-x-3 !px-3 !py-2 ",
                    url: t,
                  },
                  d.createElement(b, { round: !0, size: 24 }),
                  d.createElement("span", null, "Facebook")
                );
              case "Twitter":
                return d.createElement(
                  h,
                  {
                    className: "flex items-center space-x-3 !px-3 !py-2 ",
                    url: t,
                  },
                  d.createElement(v, { round: !0, size: 24 }),
                  d.createElement("span", null, "Twitter")
                );
              case "Linkedin":
                return d.createElement(
                  g,
                  {
                    className: "flex items-center space-x-3 !px-3 !py-2 ",
                    url: t,
                  },
                  d.createElement(E, { round: !0, size: 24 }),
                  d.createElement("span", null, "Linkedin")
                );
              case "Pinterest":
                return d.createElement(
                  p,
                  {
                    media: "",
                    className: "flex items-center space-x-3 !px-3 !py-2 ",
                    url: t,
                  },
                  d.createElement(f, { round: !0, size: 24 }),
                  d.createElement("span", null, "Pinterest")
                );
              default:
                return null;
            }
          })(e)
        ),
      data: Re,
      onClick: () => {},
    }),
  Ve = ({ className: e = "h-full", size: t = "normal", post: a }) => {
    var l;
    const {
      featuredImage: n,
      title: r,
      link: s,
      date: o,
      categories: c,
      excerpt: i,
      author: m,
      postFormats: u,
      ncPostMetaData: p,
    } = a;
    return d.createElement(
      "div",
      {
        className: `nc-Card2 group relative flex flex-col  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${e}`,
        "data-nc-id": "Card2",
      },
      d.createElement(
        "span",
        {
          className:
            "block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden",
        },
        d.createElement(pe, {
          containerClassName: "absolute inset-0",
          src: (null == n ? void 0 : n.node.sourceUrl) || ".",
          alt: r,
        }),
        d.createElement(De, {
          className: "absolute bottom-2 left-2",
          postType:
            null == (l = null == u ? void 0 : u.edges[0])
              ? void 0
              : l.node.name,
          wrapSize: "w-8 h-8",
          iconSize: "w-4 h-4",
        })
      ),
      d.createElement(ge, {
        href: s,
        className:
          "absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300",
      }),
      d.createElement("a", { href: s, className: "absolute inset-0" }),
      d.createElement(
        "div",
        { className: "p-4 sm:p-5 flex flex-col" },
        d.createElement(
          "div",
          { className: "space-y-3" },
          d.createElement($e, { categories: c }),
          d.createElement(
            "h2",
            {
              className:
                "nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors " +
                ("large" === t ? "text-lg sm:text-2xl" : "text-base"),
            },
            d.createElement(
              "a",
              { href: s, className: "line-clamp-2", title: r },
              r
            )
          ),
          i
            ? d.createElement("div", {
                className:
                  "block text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2",
                dangerouslySetInnerHTML: { __html: i },
              })
            : null
        ),
        d.createElement(je, {
          className: "relative my-4",
          date: o,
          author: m,
          readingTimeShortcode: p.readingTimeShortcode,
          hoverReadingTime: !1,
        }),
        d.createElement(
          "div",
          { className: "flex items-center justify-between mt-auto" },
          d.createElement(xe, { className: "relative", postData: a }),
          d.createElement(Be, { href: a.link })
        )
      )
    );
  },
  Oe = ({ className: e = "h-full", size: t = "normal" }) =>
    d.createElement(
      "div",
      {
        className: `nc-Card2Skeleton group relative flex flex-col  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${e}`,
        "data-nc-id": "Card2Skeleton",
      },
      d.createElement(
        "span",
        {
          className:
            "block flex-shrink-0 flex-grow relative w-full h-0 pt-[75%] sm:pt-[55%] rounded-xl sm:rounded-b-none overflow-hidden",
        },
        d.createElement(pe, {
          containerClassName: "absolute inset-0",
          src: ".",
        }),
        d.createElement(De, {
          className: "absolute bottom-2 left-2",
          wrapSize: "w-8 h-8",
          iconSize: "w-4 h-4",
        })
      ),
      d.createElement(
        "div",
        { className: "p-4 sm:p-5 flex flex-col" },
        d.createElement(
          "div",
          { className: "space-y-3" },
          d.createElement(y, { width: "30%" }),
          d.createElement(
            "h2",
            {
              className:
                "nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors " +
                ("large" === t ? "text-lg sm:text-2xl" : "text-base"),
            },
            d.createElement(y, { width: "90%" })
          ),
          d.createElement(
            "div",
            {
              className:
                "block text-neutral-500 dark:text-neutral-400 text-sm line-clamp-2",
            },
            d.createElement(y, { width: "70%" })
          )
        ),
        d.createElement("div", { className: "opacity-0" }, "xx"),
        d.createElement("div", { className: "opacity-0" }, "xx")
      )
    ),
  Fe = ({
    className: e = "leading-none",
    meta: t,
    hiddenAvatar: a = !1,
    size: l = "normal",
  }) => {
    var n, r, s, o;
    const { date: c, author: i } = t;
    return d.createElement(
      "div",
      {
        className: `nc-PostCardMeta inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${
          "normal" === l ? "text-xs" : "text-base"
        } ${e}`,
        "data-nc-id": "PostCardMeta",
      },
      d.createElement(
        "a",
        {
          href: frontendObject.homeURL + (null == i ? void 0 : i.node.uri),
          className: "relative flex items-center space-x-2",
        },
        !a &&
          d.createElement(ze, {
            radius: "rounded-full",
            sizeClass: "normal" === l ? "h-7 w-7 text-sm" : "h-10 w-10 text-xl",
            imgUrl:
              (null ==
              (r =
                null == (n = null == i ? void 0 : i.node.ncUserMeta)
                  ? void 0
                  : n.featuredImage)
                ? void 0
                : r.sourceUrl) ||
              (null ==
              (o =
                null == (s = null == i ? void 0 : i.node) ? void 0 : s.avatar)
                ? void 0
                : o.url),
            userName: null == i ? void 0 : i.node.username,
          }),
        d.createElement(
          "span",
          {
            className:
              "block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium",
          },
          null == i ? void 0 : i.node.name
        )
      ),
      d.createElement(
        d.Fragment,
        null,
        d.createElement(
          "span",
          {
            className:
              "text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium",
          },
          "·"
        ),
        d.createElement(
          "span",
          { className: "text-neutral-500 dark:text-neutral-400 font-normal" },
          c ? Te(c) : null
        )
      )
    );
  },
  He = ({ className: e = "h-full", post: t }) => {
    var a;
    const {
      title: l,
      link: n,
      featuredImage: r,
      categories: s,
      postFormats: o,
      ncPostMetaData: i,
    } = t;
    return d.createElement(
      "div",
      {
        className: `nc-Card6 relative flex group flex-col-reverse sm:flex-row sm:items-center p-4  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${e}`,
        "data-nc-id": "Card6",
      },
      d.createElement("a", { href: n, className: "absolute inset-0 z-0" }),
      d.createElement(
        "div",
        { className: "flex flex-col flex-grow" },
        d.createElement(
          "div",
          { className: "space-y-3 mb-4" },
          d.createElement($e, { categories: s }),
          d.createElement(
            "h2",
            { className: "block font-semibold text-base" },
            d.createElement(
              "a",
              { href: n, className: "line-clamp-2", title: l },
              l
            )
          ),
          d.createElement(Fe, { meta: c({}, t) })
        ),
        d.createElement(
          "div",
          { className: "flex items-center flex-wrap justify-between mt-auto" },
          d.createElement(xe, { className: "relative", postData: t }),
          d.createElement(
            "div",
            {
              className:
                "flex items-center space-x-2 text-xs text-neutral-700 dark:text-neutral-300 ",
            },
            d.createElement("span", {
              dangerouslySetInnerHTML: { __html: i.readingTimeShortcode || "" },
            }),
            d.createElement(Be, { href: t.link })
          )
        )
      ),
      d.createElement(
        "a",
        {
          href: n,
          className:
            "block relative flex-shrink-0 w-full sm:w-40 h-40 sm:h-full sm:ml-5 rounded-2xl overflow-hidden mb-5 sm:mb-0 ",
        },
        d.createElement(pe, {
          containerClassName: "absolute inset-0",
          className: "object-cover w-full h-full",
          src: (null == r ? void 0 : r.node.sourceUrl) || ".",
          alt: l,
        }),
        d.createElement(
          "span",
          { className: "absolute bottom-1 left-1" },
          d.createElement(De, {
            wrapSize: "h-7 w-7",
            iconSize: "h-4 w-4",
            postType:
              null == (a = null == o ? void 0 : o.edges[0])
                ? void 0
                : a.node.name,
          })
        )
      )
    );
  },
  Ge = ({ className: e = "h-full" }) =>
    d.createElement(
      "div",
      {
        className: `nc-Card6Skeleton relative flex group flex-col-reverse sm:flex-row sm:items-center p-4  [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${e}`,
        "data-nc-id": "Card6Skeleton",
      },
      d.createElement(
        "div",
        { className: "flex flex-col flex-grow" },
        d.createElement(
          "div",
          { className: "space-y-3 mb-4" },
          d.createElement(y, { width: "30%" }),
          d.createElement(
            "h2",
            { className: "block font-semibold text-base" },
            d.createElement(y, { width: "80%" })
          ),
          d.createElement("div", { className: "opacity-0" }, "meta")
        ),
        d.createElement("div", { className: "opacity-0" }, "me")
      ),
      d.createElement(
        "div",
        {
          className:
            "block relative flex-shrink-0 w-full sm:w-40 h-40 sm:h-full sm:ml-5 rounded-2xl overflow-hidden mb-5 sm:mb-0 ",
        },
        d.createElement(pe, {
          containerClassName: "absolute inset-0",
          className: "object-cover w-full h-full",
          src: ".",
        })
      )
    ),
  Ye = ({ listPosts: e, isLoading: t }) => {
    var a;
    return d.createElement(
      "div",
      null,
      d.createElement(
        "div",
        { className: "grid lg:grid-cols-2 gap-6 md:gap-8" },
        t
          ? d.createElement(Oe, null)
          : e[0]
          ? d.createElement(Ve, {
              size: "large",
              post: null == (a = e[0]) ? void 0 : a.node,
            })
          : null,
        d.createElement(
          "div",
          { className: "grid gap-6 md:gap-8" },
          t
            ? [1, 1, 1].map((e, t) => d.createElement(Ge, { key: t }))
            : e
                .filter((e, t) => t > 0 && t < 4)
                .map((e, t) => d.createElement(He, { key: t, post: e.node }))
        )
      )
    );
  };
function We(e = "nc_") {
  return e + C();
}
const Qe = ({ galleryImgs: e }) => {
    const t = "glide_" + We();
    return (
      u.exports.useEffect(() => {
        t && new A("." + t, { gap: 0, perView: 1 }).mount();
      }, []),
      d.createElement(
        "div",
        { className: `${t} group relative z-10 w-full h-full` },
        d.createElement(
          "div",
          { className: "glide__track h-full", "data-glide-el": "track" },
          d.createElement(
            "ul",
            { className: "glide__slides h-full" },
            e.map((e, t) =>
              d.createElement(
                "li",
                { className: "glide__slide h-full", key: t },
                d.createElement(pe, {
                  src: e,
                  containerClassName: "w-full h-full",
                })
              )
            )
          )
        ),
        d.createElement(
          "div",
          {
            className:
              "absolute opacity-0 group-hover:opacity-100 z-20 inset-x-2 top-1/2 transform -translate-y-1/2 flex justify-between glide__arrows",
            "data-glide-el": "controls",
          },
          d.createElement(ae, { onlyPrev: !0, btnClassName: "w-8 h-8" }),
          d.createElement(ae, { onlyNext: !0, btnClassName: "w-8 h-8" })
        ),
        d.createElement("div", {
          className:
            "absolute w-full left-0 bottom-0 h-8 bg-gradient-to-t from-neutral-700",
        }),
        d.createElement(
          "div",
          {
            className:
              "absolute z-10 bottom-3 left-0 w-full flex items-center justify-center glide__bullets",
            "data-glide-el": "controls[nav]",
          },
          e.map((e, t) =>
            d.createElement("button", {
              key: t,
              className:
                "glide__bullet w-1.5 h-1.5 bg-neutral-200 bg-opacity-70 rounded-full mx-0.5",
              "data-glide-dir": `=${t}`,
            })
          )
        )
      )
    );
  },
  Ze = ({ className: e = "" }) =>
    d.createElement(
      "div",
      {
        className: `nc-LoadingVideo lds-ellipsis lds-ellipsis-video ${e}`,
        "data-nc-id": "LoadingVideo",
      },
      d.createElement("div", null),
      d.createElement("div", null),
      d.createElement("div", null),
      d.createElement("div", null)
    ),
  qe = ({ videoUrl: e, isHover: t }) => {
    let a = null;
    const [l, n] = u.exports.useState(!0),
      [r, s] = u.exports.useState(!0),
      [o, c] = u.exports.useState(!1);
    return (
      u.exports.useEffect(
        () => (
          a && clearTimeout(a),
          (a = setTimeout(() => {
            s(!1);
          }, 2e3)),
          () => {
            a && clearTimeout(a);
          }
        ),
        []
      ),
      d.createElement(
        "div",
        { className: "nc-MediaVideo" },
        d.createElement(I, {
          url: e,
          muted: l,
          playing: t,
          style: { opacity: o ? 1 : 0 },
          className: " absolute bg-neutral-900 inset-0",
          width: "100%",
          height: "100%",
          onStart: () => c(!0),
        }),
        d.createElement(
          "div",
          {
            className:
              (o ? "opacity-0" : "opacity-100") +
              " absolute bg-neutral-900 bg-opacity-30 flex items-center justify-center inset-0",
          },
          d.createElement(Ze, null)
        ),
        d.createElement(
          "div",
          {
            className:
              "absolute z-20 bottom-2 left-2 h-6 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center text-sm transform transition-transform nc-will-change-transform " +
              (r ? "pl-[6px] pr-2" : "w-6 hover:scale-125"),
            onClick: () => n(!l),
          },
          l
            ? d.createElement(
                d.Fragment,
                null,
                d.createElement("i", { className: "las la-volume-off" }),
                r &&
                  d.createElement(
                    "span",
                    { className: "ml-1 inline-block text-[9px]" },
                    "Click here to unmute"
                  )
              )
            : d.createElement("i", { className: "las la-volume-up" })
        )
      )
    );
  },
  Je = () => S(),
  Xe = L,
  Ke = M({
    name: "mediaRunning",
    initialState: {},
    reducers: {
      changeCurrentMediaRunning: (e, t) => c(c({}, e), t.payload),
      changeStateMediaRunning: (e, t) => i(c({}, e), { state: t.payload }),
      removeMediaRunning: () => ({}),
    },
  }),
  {
    changeCurrentMediaRunning: et,
    changeStateMediaRunning: tt,
    removeMediaRunning: at,
  } = Ke.actions,
  lt = (e) => e.mediaRunning;
var nt = Ke.reducer,
  rt =
    "data:image/gif;base64,R0lGODlhJAAkAIABAP///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ4IDc5LjE2NDAzNiwgMjAxOS8wOC8xMy0wMTowNjo1NyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0NmRjOGMyNC03YmYxLTQxZTMtYjQ2Zi1mY2ZhMDk4MDE1YWYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTBDRTc0QzlGNDBEMTFFQTk4NDZENjI0QzI1MENFQzgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTBDRTc0QzhGNDBEMTFFQTk4NDZENjI0QzI1MENFQzgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YzBhNGU4OWYtNjc4Yy00NmMyLTg4NmUtYzIxNGE0NTIwZDRjIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ODRlMDBjYmEtZjhlNy03YzQ4LWE4MTgtNDc3NTI3MGQ1ZTAyIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkECQgAAQAsAAAAACQAJAAAAnKMj5nArQ9jc7HWyax+GOx/dCAojltpWmgqYazqvu0kz1StrHgYp6tO6gWAn59wZKSxkjcTM7MUEk/SY1BpmGqeHhs0W8Vywk3tkPw9iztcBLfNW7Pl9PLcXk/f8Xz9vguWB6h254Y2+Id4aLjH2Kc4UQAAIfkECQgAAQAsAAAAACQAJAAAAnSMj6nL7Q+jnAzYS+XFGW7beV/4fADpmGijrkvrJnA2z1Q9hvhG7lznA+lyBpuMGAieDiYlQulkIpvTKk9KFRatv2RW671uxeHskwv+ptHLsRnbhbLPZHW7vK6r6XF21J33Bngnp2fY98UXuNikSOg3B8dYAAAh+QQJCAABACwAAAAAJAAkAAACfIyPqcvtD6OctNqLKdg8N955C7iJI4mQAKam6NUeMTMHda3cr4EnOugCfnY2Yi8Y4hmXKqHSWYQ2mclodSqllmTY7fOqbSK9VnLXHB6Ludk2Vg1nv+Vo9zT+rc/zK3qf/wNmt8aHV0Z4aHj2l+inFqgXiQjJuKgYRnkJUgAAIfkECQgAAQAsAAAAACQAJAAAAnuMj6nL7Q+jnLTaC7K+T2/eeBkYiiQjAlyKsJh5uJYc0BRtTzgMpbsn8fFqQ4cQGCuWjqok0vA7toZR4fRJxDJHzg+Uur16s+Nt86sFM8VcdDncbZPlZvZ5fq/H82rp3m5XxZe29mfoZnWIF9hH1+gDqKiHOPhWSBlJWQAAIfkECQgAAQAsAAAAACQAJAAAAn6Mj6nL7Q8RmDTaQ+u1eW7efVg4ZqLRARIppqsZpW6pQTIbzPZd57jD6+keQQ/NuAu+esDiEkl0HlUxKerXKFKvsCTvuY0qp2Dw8IzTlslTdNf3VrO5Qiu8Hre78d/5HSpHB5imR5g3Jhi2d7OWaGbIN4j4pwjJ6Lco00gJVgAAIfkECQgAAQAsAAAAACQAJAAAAn2EH6nL7XnQmxRGULO7WHsbfRPHiQ95mRsqqQvbBqUGG29K13eYw3tMqXVAwJFOMcsIf7YeizmsLJE45ZHYtPqoPO2TWzxdZVXpOGneYqPBc7mtJnflsekaCkXry3Z61h/VtzcnyGcYN1jnRnj4dQf2V8g46QiIB0ly+bhWAAAh+QQJCAABACwAAAAAJAAkAAACfYyPqcvtD+MDtMobqt6Y7Q90C8iJCamZJ0qpCNu6Bhwen0S/JZTb+wTTpSK92c9RzBwbyRsx6BvyoEYpkCW0RLVVVDbWBSuxW7EzDPrW0OrzmPs2U+Nrevvnzs/11ib+T8ZWVufXB+g1qHZnyAhX6HhIopg4yAfZKEkpiFYAACH5BAkIAAEALAAAAAAkACQAAAJ7jI+py+0Po5y02ouB3tht3jGfFopjuYwqgK5npCLuJ8XHDEK2gZP3ywMGeqwfzZgb9mTCnRLHPAalz1k06SRefVPsEsmthrXgYnf8PZvFa7J6206z4fBs8w4t08t2at+qF6j2h+YnRxiX9ybIhrg3iOdlqDjH6Fa5qFYAACH5BAkIAAEALAAAAAAkACQAAAJ1jI+py+0Po5y02otzArxr1nmfEnIjWZ5bqh4l0Lqs8WK1HNpzcFs9/9o5fkFhg1gUQZBJWISZlECL0l3ThFMCc1lq10mzXhFT8Db6JYubam7Yffa+teVymz5O6+fyuLm+hgd39ReIxRd0d+inmLjH+GX3+FIAACH5BAUIAAEALAAAAAAkACQAAAJwjI+py+0Po5y0PoCzhVlv12EfGI5NCJgMqi5sm7zwIc9BPeOw3vKqb6oBLyUaqshB3o4diZDpSTaN0FTkWUVgo8sslbtlapXh43hqKJfP4Ko1TY574ehue24XffV0KJuf9xa4tifoZih351f4h9hRAAA7";
const st = ({
    className: e = "",
    post: t,
    renderChildren: a,
    renderDefaultBtn: l,
    renderLoadingBtn: n,
    renderPlayingBtn: r,
  }) => {
    var s;
    const o = Xe(lt),
      c = Je(),
      i = o.state,
      m = () =>
        l
          ? l()
          : d.createElement(De, {
              className:
                "z-20 hover:scale-105 transform cursor-pointer transition-transform nc-will-change-transform",
              postType: "Audio",
            });
    return d.createElement(
      "div",
      {
        className: `nc-ButtonPlayMusicRunningContainer ${e}`,
        "data-nc-id": "ButtonPlayMusicRunningContainer",
        onClick: () => {
          return o.postData && o.state
            ? o.postData.id !== t.id
              ? t.ncmazAudioUrl.audioUrl ===
                (null ==
                (a = null == (e = o.postData) ? void 0 : e.ncmazAudioUrl)
                  ? void 0
                  : a.audioUrl)
                ? c(et({ postData: t, state: "playing" }))
                : c(et({ postData: t, state: "loading" }))
              : "playing" === o.state
              ? c(tt("paused"))
              : c(tt("playing"))
            : c(et({ postData: t, state: "loading" }));
          var e, a;
        },
      },
      a
        ? a((null == (s = o.postData) ? void 0 : s.id) === t.id, i)
        : d.createElement(
            d.Fragment,
            null,
            (!i || "paused" === i || "ended" === i) && m(),
            "loading" === i &&
              ((null == (u = o.postData) ? void 0 : u.id) !== t.id
                ? m()
                : n
                ? n()
                : d.createElement(Ze, null)),
            "playing" === i &&
              (() => {
                var e;
                return (null == (e = o.postData) ? void 0 : e.id) !== t.id
                  ? m()
                  : r
                  ? r()
                  : d.createElement(
                      "span",
                      {
                        className:
                          "z-10 bg-neutral-900 bg-opacity-60 rounded-full flex  items-center justify-center text-xl text-white border border-white w-11 h-11 cursor-pointer",
                      },
                      d.createElement("img", {
                        className: "w-5",
                        src: rt,
                        alt: "paused",
                      })
                    );
              })()
          )
    );
    var u;
  },
  ot = ({ post: e }) =>
    d.createElement(st, {
      className:
        "absolute bg-neutral-900 bg-opacity-30 flex items-center justify-center inset-0",
      post: e,
    });
function ct(e) {
  const {
    image1: t,
    image2: a,
    image3: l,
    image4: n,
    image5: r,
    image6: s,
    image7: o,
    image8: c,
    image9: i,
    image10: m,
  } = e;
  return [
    (null == t ? void 0 : t.sourceUrl) || "",
    (null == a ? void 0 : a.sourceUrl) || "",
    (null == l ? void 0 : l.sourceUrl) || "",
    (null == n ? void 0 : n.sourceUrl) || "",
    (null == r ? void 0 : r.sourceUrl) || "",
    (null == s ? void 0 : s.sourceUrl) || "",
    (null == o ? void 0 : o.sourceUrl) || "",
    (null == c ? void 0 : c.sourceUrl) || "",
    (null == i ? void 0 : i.sourceUrl) || "",
    (null == m ? void 0 : m.sourceUrl) || "",
  ].filter((e) => !!e);
}
const it = ({ className: e = "w-full h-full", post: t, isHover: a = !1 }) => {
    var l, n;
    const {
        featuredImage: r,
        postFormats: s,
        ncmazVideoUrl: o,
        ncmazAudioUrl: c,
        ncmazGalleryImgs: i,
      } = t,
      m =
        null ==
        (n = null == (l = null == s ? void 0 : s.edges[0]) ? void 0 : l.node)
          ? void 0
          : n.name;
    return d.createElement(
      "div",
      {
        className: `nc-PostFeaturedMedia relative ${e}`,
        "data-nc-id": "PostFeaturedMedia",
      },
      d.createElement(pe, {
        containerClassName: "absolute inset-0",
        src: (null == r ? void 0 : r.node.sourceUrl) || ".",
      }),
      "Gallery" === m
        ? (() => {
            const e = ct(i);
            return e.length ? d.createElement(Qe, { galleryImgs: e }) : null;
          })()
        : "Video" === m && o.videoUrl && a
        ? d.createElement(qe, { isHover: !0, videoUrl: o.videoUrl })
        : "Audio" === m && c.audioUrl
        ? d.createElement(ot, { post: t })
        : d.createElement(
            "div",
            { className: "absolute inset-0" },
            !!(null == s ? void 0 : s.edges[0]) &&
              ("Video" === m || "Audio" === m) &&
              d.createElement(
                "span",
                {
                  className:
                    "absolute inset-0 flex items-center justify-center ",
                },
                d.createElement(De, {
                  className:
                    "hover:scale-105 transform cursor-pointer transition-transform nc-will-change-transform",
                  postType: m,
                })
              )
          )
    );
  },
  mt = ({
    className: e = "h-full",
    post: t,
    hiddenAuthor: a = !1,
    ratio: l = "aspect-w-4 aspect-h-3",
    onClickLike: n,
  }) => {
    const { title: r, link: s, categories: o, date: c } = t,
      [i, m] = u.exports.useState(!1);
    return d.createElement(
      "div",
      {
        className: `nc-Card11 relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${e}`,
        "data-nc-id": "Card11",
        onMouseEnter: () => m(!0),
        onMouseLeave: () => m(!1),
      },
      d.createElement(
        "div",
        {
          className: `block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${l}`,
        },
        d.createElement(
          "div",
          null,
          d.createElement(it, { post: t, isHover: i })
        )
      ),
      d.createElement("a", { href: s, className: "absolute inset-0" }),
      d.createElement(
        "span",
        { className: "absolute top-3 inset-x-3" },
        d.createElement($e, { categories: o })
      ),
      d.createElement(
        "div",
        { className: "p-4 h-full flex flex-col flex-grow" },
        a
          ? d.createElement(
              "span",
              { className: "text-xs text-neutral-500" },
              c
            )
          : d.createElement(Fe, { meta: t }),
        d.createElement(
          "h2",
          {
            className:
              "nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3",
          },
          r
            ? d.createElement("a", {
                href: s,
                className: "line-clamp-2",
                dangerouslySetInnerHTML: { __html: r },
                title: r,
              })
            : null
        ),
        d.createElement(
          "div",
          { className: "flex items-end justify-between mt-auto" },
          d.createElement(xe, {
            onClickLike: n,
            className: "relative",
            postData: t,
          }),
          d.createElement(Be, { href: t.link })
        )
      )
    );
  },
  dt = ({ className: e = "h-full", ratio: t = "aspect-w-4 aspect-h-3" }) => (
    u.exports.useState(!1),
    d.createElement(
      "div",
      {
        className: `nc-Card11Skeleton relative flex flex-col group [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${e}`,
      },
      d.createElement(
        "div",
        {
          className: `block flex-shrink-0 relative w-full rounded-t-xl overflow-hidden ${t}`,
        },
        d.createElement(
          "div",
          null,
          d.createElement(pe, { containerClassName: "w-full h-full", src: "." })
        )
      ),
      d.createElement(
        "span",
        { className: "absolute top-3 inset-x-3" },
        d.createElement(y, { width: "40%" })
      ),
      d.createElement(
        "div",
        { className: "p-4 h-full flex flex-col flex-grow" },
        d.createElement(y, null),
        d.createElement(
          "h2",
          {
            className:
              "nc-card-title block text-base font-semibold text-neutral-900 dark:text-neutral-100 my-3",
          },
          d.createElement(y, null)
        ),
        d.createElement(
          "div",
          { className: "flex items-end justify-between mt-auto " },
          d.createElement(y, { width: "50%" })
        )
      )
    )
  ),
  ut = ({ listPosts: e = [], isLoading: t }) =>
    d.createElement(
      "div",
      { className: "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" },
      d.createElement(
        "div",
        { className: "grid gap-6" },
        t
          ? [1, 1].map((e, t) =>
              d.createElement(dt, { ratio: "aspect-w-5 aspect-h-3", key: t })
            )
          : e
              .filter((e, t) => t < 3 && t > 0)
              .map((e, t) =>
                d.createElement(mt, {
                  ratio: "aspect-w-5 aspect-h-3",
                  key: t,
                  post: e.node,
                })
              )
      ),
      d.createElement(
        "div",
        { className: "lg:col-span-2" },
        t
          ? d.createElement(Oe, null)
          : e[0]
          ? d.createElement(Ve, { size: "large", post: e[0].node })
          : null
      ),
      d.createElement(
        "div",
        {
          className:
            "grid gap-6 md:grid-cols-2 xl:grid-cols-1 md:col-span-3 xl:col-span-1",
        },
        t
          ? [1, 1].map((e, t) =>
              d.createElement(dt, { ratio: "aspect-w-5 aspect-h-3", key: t })
            )
          : e
              .filter((e, t) => t < 5 && t >= 3)
              .map((e, t) =>
                d.createElement(mt, {
                  ratio: "aspect-w-5 aspect-h-3",
                  key: t,
                  post: e.node,
                })
              )
      )
    ),
  pt = ({
    className: e = "h-full",
    ratio: t = "aspect-w-3 aspect-h-3 sm:aspect-h-4",
    post: a,
    hoverClass: l = "",
  }) => {
    var n, r;
    const {
      title: s,
      link: o,
      featuredImage: c,
      categories: i,
      author: m,
      date: u,
      postFormats: p,
    } = a;
    return d.createElement(
      "div",
      {
        className: `nc-Card9 relative flex flex-col group rounded-3xl overflow-hidden ${l} ${e}`,
        "data-nc-id": "Card9",
      },
      d.createElement(
        "div",
        {
          className:
            "absolute inset-x-0 top-0 p-3 flex items-center justify-between transition-all opacity-0 z-[-1] group-hover:opacity-100 group-hover:z-30 duration-300",
        },
        d.createElement(xe, { className: "relative", postData: a }),
        d.createElement(Be, {
          panelMenusClass: "w-52 right-0 top-0 origin-top-right",
          href: a.link,
        })
      ),
      d.createElement("div", {
        className: `flex items-start relative w-full ${t}`,
      }),
      "Audio" ===
        (null == (n = null == p ? void 0 : p.edges[0]) ? void 0 : n.node.name)
        ? d.createElement(
            "div",
            { className: "absolute inset-0" },
            d.createElement(it, { post: a })
          )
        : d.createElement(
            "a",
            { href: o },
            d.createElement(pe, {
              containerClassName: "absolute inset-0 rounded-3xl",
              className: "object-cover w-full h-full rounded-3xl",
              src: (null == c ? void 0 : c.node.sourceUrl) || ".",
            }),
            d.createElement(De, {
              className: "absolute top-3 left-3 group-hover:hidden",
              postType:
                null == (r = null == p ? void 0 : p.edges[0])
                  ? void 0
                  : r.node.name,
              wrapSize: "w-7 h-7",
              iconSize: "w-4 h-4",
            }),
            d.createElement("span", {
              className:
                "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity",
            })
          ),
      d.createElement("a", {
        href: o,
        className:
          "absolute bottom-0 inset-x-0 h-1/2 bg-gradient-to-t from-black",
      }),
      d.createElement(
        "div",
        {
          className: "absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow",
        },
        d.createElement("a", { href: o, className: "absolute inset-0" }),
        d.createElement(
          "div",
          { className: "mb-3" },
          d.createElement($e, { categories: i })
        ),
        d.createElement(
          "div",
          { className: "inline-flex items-center text-xs text-neutral-300" },
          d.createElement(
            "a",
            { href: o, className: "block relative" },
            d.createElement(
              "h2",
              { className: "block text-lg font-semibold text-white " },
              d.createElement(
                "span",
                { className: "line-clamp-2", title: s },
                s
              )
            ),
            d.createElement(
              "div",
              { className: "flex mt-2.5" },
              d.createElement(
                "span",
                {
                  className:
                    "block text-neutral-200 hover:text-white font-medium truncate",
                },
                null == m ? void 0 : m.node.name
              ),
              d.createElement(
                "span",
                { className: "mx-[6px] font-medium" },
                "·"
              ),
              d.createElement(
                "span",
                { className: "font-normal truncate" },
                Te(u || "")
              )
            )
          )
        )
      )
    );
  },
  ft = ({
    className: e = "h-full",
    ratio: t = "aspect-w-3 aspect-h-3 sm:aspect-h-4",
    hoverClass: a = "",
  }) =>
    d.createElement(
      "div",
      {
        className: `nc-Card9Skeleton relative flex flex-col group rounded-3xl overflow-hidden ${a} ${e}`,
        "data-nc-id": "Card9Skeleton",
      },
      d.createElement("div", {
        className: `flex items-start relative w-full ${t}`,
      }),
      d.createElement(
        "div",
        null,
        d.createElement(pe, {
          containerClassName: "absolute inset-0 rounded-3xl",
          className: "object-cover w-full h-full rounded-3xl",
          src: ".",
        })
      ),
      d.createElement(
        "div",
        {
          className: "absolute bottom-0 inset-x-0 p-4 flex flex-col flex-grow",
        },
        d.createElement(
          "div",
          { className: "mb-3" },
          d.createElement(y, { width: "90%" }),
          d.createElement(y, { width: "50%" })
        )
      )
    ),
  gt = ({ listPosts: e, isLoading: t }) =>
    d.createElement(
      "div",
      { className: "grid lg:grid-cols-2 gap-6 md:gap-8" },
      t
        ? d.createElement(Oe, null)
        : e[0]
        ? d.createElement(Ve, { size: "large", post: e[0].node })
        : null,
      d.createElement(
        "div",
        { className: "grid sm:grid-cols-2 gap-6 md:gap-8" },
        t
          ? [1, 1, 1, 1].map((e, t) =>
              d.createElement(ft, { ratio: "aspect-w-3 aspect-h-3", key: t })
            )
          : e
              .filter((e, t) => t < 5 && t >= 1)
              .map((e, t) =>
                d.createElement(pt, {
                  ratio: "aspect-w-3 aspect-h-3",
                  key: t,
                  post: e.node,
                })
              )
      )
    ),
  Et = ({ className: e = "h-full", post: t }) => {
    var a;
    const {
      title: l,
      link: n,
      featuredImage: r,
      excerpt: s,
      categories: o,
      postFormats: c,
    } = t;
    return d.createElement(
      "div",
      {
        className: `nc-Card8 group relative [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${e}`,
        "data-nc-id": "Card8",
      },
      d.createElement(ge, {
        href: n,
        className:
          "absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300",
      }),
      d.createElement(
        "a",
        {
          href: n,
          className:
            "block w-full h-0 pt-[100%] sm:pt-[55%] rounded-xl overflow-hidden",
        },
        d.createElement(pe, {
          containerClassName: "absolute inset-0",
          src: (null == r ? void 0 : r.node.sourceUrl) || ".",
          alt: l,
        }),
        d.createElement(De, {
          className: "absolute top-4 left-4",
          postType:
            null == (a = null == c ? void 0 : c.edges[0])
              ? void 0
              : a.node.name,
          wrapSize: "w-8 h-8",
          iconSize: "w-4 h-4",
        })
      ),
      d.createElement("a", {
        href: n,
        className:
          "absolute inset-x-0 bottom-0 top-1/3 bg-gradient-to-t from-neutral-900 ",
      }),
      d.createElement(
        "div",
        { className: "absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col" },
        d.createElement("a", { href: n, className: "absolute inset-0" }),
        d.createElement($e, { categories: o }),
        d.createElement(
          "h2",
          {
            className:
              "mt-3 relative block font-semibold text-neutral-50 text-lg sm:text-xl",
          },
          d.createElement(
            "a",
            { href: n, className: "line-clamp-2", title: l },
            l
          )
        ),
        d.createElement(
          "div",
          { className: "hidden sm:block mt-2" },
          d.createElement("span", {
            className: "text-neutral-300 text-sm line-clamp-1",
            dangerouslySetInnerHTML: { __html: s || "" },
          })
        )
      )
    );
  },
  ht = ({ className: e = "h-full" }) =>
    d.createElement(
      "div",
      {
        className: `nc-Card8Skeleton group relative [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] overflow-hidden ${e}`,
        "data-nc-id": "Card8Skeleton",
      },
      d.createElement(
        "div",
        {
          className:
            "block w-full h-0 pt-[100%] sm:pt-[55%] rounded-xl overflow-hidden",
        },
        d.createElement(pe, {
          containerClassName: "absolute inset-0",
          src: ".",
        })
      ),
      d.createElement(
        "div",
        { className: "absolute inset-x-0 bottom-0 p-4 sm:p-6 flex flex-col" },
        d.createElement(y, { width: "30%" }),
        d.createElement(
          "h2",
          {
            className:
              "mt-3 relative block font-semibold text-neutral-50 text-lg sm:text-xl",
          },
          d.createElement(y, { width: "90%" })
        ),
        d.createElement(
          "div",
          { className: "hidden sm:block mt-2" },
          d.createElement("span", { className: "opacity-0" }, "dd")
        )
      )
    ),
  vt = ({ listPosts: e, isLoading: t }) =>
    d.createElement(
      "div",
      {
        className:
          "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8",
      },
      t
        ? d.createElement(ht, { className: "sm:col-span-2" })
        : e[0]
        ? d.createElement(Et, { className: "sm:col-span-2", post: e[0].node })
        : null,
      t
        ? [1, 1].map((e, t) => d.createElement(ft, { key: t }))
        : e
            .filter((e, t) => t < 3 && t >= 1)
            .map((e, t) => d.createElement(pt, { key: t, post: e.node })),
      t
        ? [1, 1].map((e, t) => d.createElement(ft, { key: t }))
        : e
            .filter((e, t) => t < 5 && t >= 3)
            .map((e, t) => d.createElement(pt, { key: t, post: e.node })),
      t
        ? d.createElement(ht, { className: "sm:col-span-2" })
        : e[5]
        ? d.createElement(Et, { className: "sm:col-span-2", post: e[5].node })
        : null
    ),
  xt = ({ className: e = "h-full", post: t }) => {
    var a;
    const {
      title: l,
      link: n,
      featuredImage: r,
      excerpt: s,
      postFormats: o,
    } = t;
    return d.createElement(
      "div",
      {
        className: `nc-Card12 group relative flex flex-col ${e}`,
        "data-nc-id": "Card12",
      },
      d.createElement(
        "a",
        {
          href: n,
          className:
            "block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden",
        },
        d.createElement(pe, {
          containerClassName: "absolute inset-0",
          src: (null == r ? void 0 : r.node.sourceUrl) || ".",
          alt: l,
        }),
        d.createElement(
          "span",
          null,
          d.createElement(De, {
            className: "absolute bottom-2 left-2",
            postType:
              null == (a = null == o ? void 0 : o.edges[0])
                ? void 0
                : a.node.name,
            wrapSize: "w-8 h-8",
            iconSize: "w-4 h-4",
          })
        )
      ),
      d.createElement(ge, {
        href: n,
        className:
          "absolute hidden md:grid gap-[5px] right-4 top-4 opacity-0 z-[-1] group-hover:z-10 group-hover:opacity-100 transition-all duration-300",
      }),
      d.createElement(
        "div",
        { className: " mt-8 pr-10 flex flex-col" },
        d.createElement(
          "h2",
          {
            className:
              "nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl",
          },
          d.createElement(
            "a",
            { href: n, className: "line-clamp-2", title: l },
            l
          )
        ),
        s &&
          d.createElement(
            "span",
            {
              className:
                "hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400",
            },
            d.createElement("span", {
              className: "line-clamp-2",
              dangerouslySetInnerHTML: { __html: s },
            })
          ),
        d.createElement(Fe, { className: "mt-5", meta: t })
      )
    );
  },
  bt = ({ className: e = "h-full" }) =>
    d.createElement(
      "div",
      {
        className: `nc-Card12Skeleton group relative flex flex-col ${e}`,
        "data-nc-id": "Card12Skeleton",
      },
      d.createElement(
        "div",
        {
          className:
            "block flex-shrink-0 flex-grow relative w-full h-0 aspect-w-4 aspect-h-3 rounded-3xl overflow-hidden",
        },
        d.createElement(pe, {
          containerClassName: "absolute inset-0",
          src: ".",
        })
      ),
      d.createElement(
        "div",
        { className: " mt-8 pr-10 flex flex-col" },
        d.createElement(
          "h2",
          {
            className:
              "nc-card-title block font-semibold text-neutral-900 dark:text-neutral-100 transition-colors text-lg sm:text-2xl",
          },
          d.createElement(y, { width: "70%" })
        ),
        d.createElement(
          "span",
          {
            className:
              "hidden sm:block mt-4 text-neutral-500 dark:text-neutral-400",
          },
          d.createElement(y, { width: "80%" })
        ),
        d.createElement(
          "div",
          { className: "mt-5" },
          d.createElement(y, { width: "30%" })
        )
      )
    ),
  Nt = ({ className: e = "", post: t }) => {
    var a;
    const {
      title: l,
      link: n,
      excerpt: r,
      featuredImage: s,
      date: o,
      postFormats: i,
    } = t;
    return d.createElement(
      "div",
      {
        className: `nc-Card13 relative flex justify-between ${e}`,
        "data-nc-id": "Card13",
      },
      d.createElement(
        "div",
        { className: "flex flex-col py-2" },
        d.createElement(
          "h2",
          { className: "nc-card-title block font-semibold text-base" },
          d.createElement(
            "a",
            { href: n, className: "line-clamp-2", title: l },
            l
          )
        ),
        r &&
          d.createElement(
            "span",
            {
              className:
                "hidden sm:block my-3 text-neutral-500 dark:text-neutral-400 ",
            },
            d.createElement("span", {
              className: "line-clamp-2",
              dangerouslySetInnerHTML: { __html: r },
            })
          ),
        d.createElement(
          "span",
          { className: "mt-4 block sm:hidden text-sm text-neutral-500 " },
          o
        ),
        d.createElement(
          "div",
          { className: "mt-auto hidden sm:block" },
          d.createElement(Fe, { meta: c({}, t) })
        )
      ),
      d.createElement(
        "a",
        {
          href: n,
          className: "block relative flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5",
        },
        d.createElement(pe, {
          containerClassName: "absolute inset-0 ",
          className: "object-cover w-full h-full rounded-xl sm:rounded-3xl",
          src: (null == s ? void 0 : s.node.sourceUrl) || ".",
          alt: l,
        }),
        d.createElement(De, {
          className: "absolute bottom-2 left-2",
          postType:
            null == (a = null == i ? void 0 : i.edges[0])
              ? void 0
              : a.node.name,
          wrapSize: "w-8 h-8",
          iconSize: "w-4 h-4",
        })
      )
    );
  },
  kt = ({ className: e = "" }) =>
    d.createElement(
      "div",
      {
        className: `nc-Card13Skeleton relative flex justify-between ${e}`,
        "data-nc-id": "Card13Skeleton",
      },
      d.createElement(
        "div",
        { className: "flex flex-col py-2 flex-grow" },
        d.createElement(
          "h2",
          { className: "nc-card-title block w-full font-semibold text-base" },
          d.createElement(y, { width: "90%" })
        ),
        d.createElement(
          "span",
          {
            className:
              "hidden sm:block w-full my-3 text-neutral-500 dark:text-neutral-400 ",
          },
          d.createElement(y, { width: "80%" })
        ),
        d.createElement(
          "div",
          { className: "mt-auto " },
          d.createElement(y, { width: "30%" })
        )
      ),
      d.createElement(
        "div",
        {
          className: "block relative flex-shrink-0 w-2/5 sm:w-1/3 ml-3 sm:ml-5",
        },
        d.createElement(pe, {
          containerClassName: "absolute inset-0 ",
          className: "object-cover w-full h-full rounded-xl sm:rounded-3xl",
          src: ".",
        })
      )
    ),
  wt = ({ listPosts: e, isLoading: t }) =>
    d.createElement(
      "div",
      { className: "grid lg:grid-cols-2 gap-5 md:gap-7" },
      t
        ? d.createElement(bt, null)
        : e[0]
        ? d.createElement(xt, { post: e[0].node })
        : null,
      d.createElement(
        "div",
        { className: "grid gap-5 md:gap-7" },
        t
          ? [1, 2, 3].map((e, t) => d.createElement(kt, { key: t }))
          : e
              .filter((e, t) => t < 4 && t > 0)
              .map((e, t) => d.createElement(Nt, { key: t, post: e.node }))
      )
    ),
  yt = ({ listPosts: e, isLoading: t }) =>
    d.createElement(
      "div",
      null,
      t
        ? d.createElement(
            "main",
            { className: "relative" },
            d.createElement(
              "div",
              {
                className:
                  "aspect-w-9 aspect-h-9 md:aspect-h-5 rounded-3xl lg:rounded-[40px] overflow-hidden",
              },
              d.createElement(pe, {
                containerClassName: "absolute inset-0",
                src: ".",
              }),
              d.createElement(
                "div",
                null,
                d.createElement("span", {
                  className:
                    "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black",
                })
              ),
              d.createElement(
                "div",
                {
                  className:
                    "group dark absolute md:w-1/2 lg:w-2/3 max-w-2xl flex flex-col justify-end p-5 lg:p-14",
                },
                d.createElement(
                  "div",
                  { className: "" },
                  d.createElement(
                    "h2",
                    {
                      className:
                        "nc-card-title text-2xl lg:text-3xl xl:text-4xl font-semibold text-neutral-700 opacity-50",
                    },
                    d.createElement(y, null)
                  )
                ),
                d.createElement(
                  "div",
                  { className: "mt-7 opacity-50" },
                  d.createElement(y, { width: "80%" })
                )
              )
            ),
            d.createElement(
              "div",
              {
                className:
                  "md:absolute mt-5 md:mt-0 h-96 md:h-auto md:right-3 md:top-3 md:bottom-3 md:w-1/2 lg:w-1/3 p-5 lg:p-8 bg-neutral-100 md:bg-white md:dark:bg-neutral-900 dark:bg-neutral-800 xl:bg-opacity-80 xl:dark:bg-opacity-80 xl:backdrop-filter xl:backdrop-blur-xl rounded-3xl lg:rounded-[34px] overflow-hidden",
              },
              d.createElement(
                "div",
                {
                  className:
                    "flow-root h-full w-full overflow-y-auto hiddenScrollbar",
                },
                d.createElement(
                  "div",
                  {
                    className:
                      "-my-5 md:-my-7 divide-y divide-neutral-200 dark:divide-neutral-700",
                  },
                  [1, 1, 1].map((e, t) =>
                    d.createElement(
                      "div",
                      { key: t, className: "block py-5 lg:py-7" },
                      d.createElement(
                        "h2",
                        {
                          className:
                            "nc-card-title text-base font-semibold mb-2",
                        },
                        d.createElement(y, { width: "90%" })
                      ),
                      d.createElement(y, { width: "60%" })
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
                author: l,
                title: n,
                date: r,
                excerpt: s,
                link: o,
                ncPostMetaData: c,
              } = e[0].node,
              i = e.filter((e, t) => t > 0);
            return d.createElement(
              "main",
              { className: "relative" },
              d.createElement(
                "div",
                {
                  className:
                    "aspect-w-9 aspect-h-9 md:aspect-h-5 rounded-3xl lg:rounded-[40px] overflow-hidden",
                },
                d.createElement(pe, {
                  containerClassName: "absolute inset-0",
                  src: t ? "." : (null == a ? void 0 : a.node.sourceUrl) || ".",
                }),
                d.createElement(
                  "div",
                  null,
                  d.createElement("span", {
                    className:
                      "absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black",
                  })
                ),
                d.createElement(
                  "div",
                  {
                    className:
                      "group dark absolute md:w-1/2 lg:w-2/3 max-w-2xl flex flex-col justify-end p-5 lg:p-14",
                  },
                  d.createElement(
                    "div",
                    { className: "" },
                    d.createElement(
                      "h2",
                      {
                        className:
                          "nc-card-title text-2xl lg:text-3xl xl:text-4xl font-semibold text-white",
                      },
                      t
                        ? d.createElement(y, null)
                        : d.createElement(
                            "a",
                            { href: o, className: "line-clamp-2" },
                            n
                          )
                    ),
                    t
                      ? d.createElement("div", null, d.createElement(y, null))
                      : s
                      ? d.createElement(
                          "span",
                          {
                            className:
                              "hidden lg:block text-base text-neutral-200 mt-5",
                          },
                          d.createElement("span", {
                            className: "line-clamp-2",
                            dangerouslySetInnerHTML: { __html: s },
                          })
                        )
                      : null
                  ),
                  d.createElement(
                    "div",
                    { className: "mt-7" },
                    d.createElement(je, {
                      hoverReadingTime: !1,
                      readingTimeShortcode: c.readingTimeShortcode || "",
                      date: r,
                      author: l,
                    })
                  )
                )
              ),
              i.length
                ? d.createElement(
                    "div",
                    {
                      className:
                        "md:absolute mt-5 md:mt-0 h-96 md:h-auto md:right-3 md:top-3 md:bottom-3 md:w-1/2 lg:w-1/3 p-5 lg:p-8 bg-neutral-100 md:bg-white md:dark:bg-neutral-900 dark:bg-neutral-800 xl:bg-opacity-80 xl:dark:bg-opacity-80 xl:backdrop-filter xl:backdrop-blur-xl rounded-3xl lg:rounded-[34px] overflow-hidden",
                    },
                    d.createElement(
                      "div",
                      {
                        className:
                          "flow-root h-full w-full overflow-y-auto hiddenScrollbar",
                      },
                      d.createElement(
                        "div",
                        {
                          className:
                            "-my-5 md:-my-7 divide-y divide-neutral-200 dark:divide-neutral-700",
                        },
                        i.map((e, t) =>
                          d.createElement(
                            "div",
                            { key: t, className: "block py-5 lg:py-7" },
                            d.createElement(
                              "h2",
                              {
                                className:
                                  "nc-card-title text-base font-semibold",
                              },
                              d.createElement(
                                "a",
                                {
                                  title: e.node.title,
                                  href: e.node.link,
                                  className: "line-clamp-2",
                                },
                                e.node.title
                              )
                            ),
                            d.createElement(Fe, {
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
  Ct = ({
    className: e = "leading-none",
    meta: t,
    hiddenAvatar: a = !1,
    size: l = "normal",
  }) => {
    var n, r, s;
    const { date: o, author: c, title: i, link: m } = t;
    return d.createElement(
      "div",
      {
        className: `nc-PostCardMetaV2 inline-flex items-center flex-wrap text-neutral-800 dark:text-neutral-200 ${
          "normal" === l ? "text-xs" : "text-sm"
        } ${e}`,
        "data-nc-id": "PostCardMetaV2",
      },
      d.createElement(
        "div",
        { className: "relative flex items-center space-x-2" },
        !a &&
          d.createElement(
            "a",
            {
              href: frontendObject.homeURL + (null == c ? void 0 : c.node.uri),
            },
            d.createElement(ze, {
              radius: "rounded-full",
              sizeClass:
                "normal" === l ? "h-9 w-9 text-base" : "h-10 w-10 text-xl",
              imgUrl:
                (null ==
                (r =
                  null == (n = null == c ? void 0 : c.node.ncUserMeta)
                    ? void 0
                    : n.featuredImage)
                  ? void 0
                  : r.sourceUrl) ||
                (null == (s = null == c ? void 0 : c.node.avatar)
                  ? void 0
                  : s.url),
              userName: null == c ? void 0 : c.node.username,
            })
          ),
        d.createElement(
          "a",
          { href: m, className: "block" },
          d.createElement(
            "h2",
            {
              className:
                "block font-semibold " +
                ("normal" === l ? "text-base" : "text-lg"),
            },
            d.createElement("span", { className: "line-clamp-1" }, i)
          ),
          d.createElement(
            "div",
            { className: "flex mt-1.5" },
            d.createElement(
              "span",
              {
                className:
                  "block text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white font-medium",
              },
              null == c ? void 0 : c.node.name
            ),
            d.createElement(
              "span",
              {
                className:
                  "text-neutral-500 dark:text-neutral-400 mx-[6px] font-medium",
              },
              "·"
            ),
            d.createElement(
              "span",
              {
                className: "text-neutral-500 dark:text-neutral-400 font-normal",
              },
              Te(o || "")
            )
          )
        )
      )
    );
  },
  At = ({ className: e = "h-full", post: t }) => {
    const { link: a, categories: l, ncPostMetaData: n, postId: r } = t,
      [s, o] = u.exports.useState(!1);
    return d.createElement(
      "div",
      {
        className: `nc-Card10 relative flex flex-col ${e}`,
        "data-nc-id": "Card10",
        onMouseEnter: () => o(!0),
        onMouseLeave: () => o(!1),
      },
      d.createElement(
        "a",
        {
          href: a,
          className:
            "block  group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-10 overflow-hidden",
        },
        d.createElement(
          "div",
          null,
          d.createElement(it, { post: t, isHover: s })
        ),
        d.createElement("span", {
          className:
            "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity",
        })
      ),
      d.createElement(
        "div",
        {
          className:
            "absolute top-3 inset-x-3 flex justify-between items-start space-x-4",
        },
        d.createElement($e, { categories: l }),
        d.createElement(ve, {
          postId: r,
          favoriteButtonShortcode: n.favoriteButtonShortcode || "",
        })
      ),
      d.createElement(
        "div",
        { className: "space-y-2.5 mt-4" },
        d.createElement(Ct, { className: "leading-none", meta: t })
      )
    );
  },
  It = ({ className: e = "h-full" }) =>
    d.createElement(
      "div",
      {
        className: `nc-Card10Skeleton relative flex flex-col ${e}`,
        "data-nc-id": "Card10Skeleton",
      },
      d.createElement(
        "div",
        {
          className:
            "block  group rounded-3xl flex-shrink-0 relative w-full aspect-w-9 aspect-h-7 sm:aspect-h-10 overflow-hidden",
        },
        d.createElement(pe, { src: "." }),
        d.createElement("span", {
          className:
            "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity",
        })
      ),
      d.createElement(
        "div",
        {
          className:
            "absolute top-3 inset-x-3 flex justify-between items-start space-x-4",
        },
        d.createElement(y, null)
      ),
      d.createElement(
        "div",
        { className: "space-y-2.5 mt-4" },
        d.createElement(y, null),
        d.createElement(y, { width: "70%" })
      )
    ),
  St = ({ className: e = "h-full", post: t, galleryType: a = 1 }) => {
    var l;
    const {
        title: n,
        link: r,
        categories: s,
        postFormats: o,
        ncmazGalleryImgs: c,
        author: i,
        date: m,
        ncPostMetaData: p,
      } = t,
      f = ct(c),
      [g, E] = u.exports.useState(!1);
    return d.createElement(
      "div",
      {
        className: `nc-Card10V3 group relative flex flex-col ${e}`,
        "data-nc-id": "Card10V3",
        onMouseEnter: () => E(!0),
        onMouseLeave: () => E(!1),
      },
      d.createElement(
        "div",
        {
          className:
            "block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-16 sm:aspect-h-9 overflow-hidden",
        },
        d.createElement(
          "div",
          null,
          "Gallery" !==
            (null == (l = null == o ? void 0 : o.edges[0])
              ? void 0
              : l.node.name) && (null == f ? void 0 : f.length)
            ? d.createElement(it, { post: t, isHover: g })
            : 1 === a
            ? f
              ? d.createElement(
                  "div",
                  { className: "w-full h-full grid grid-cols-3 gap-2" },
                  d.createElement(
                    "div",
                    { className: "grid " },
                    d.createElement(pe, {
                      containerClassName: "relative",
                      className: "absolute inset-0 object-cover w-full h-full",
                      src: f[0],
                    })
                  ),
                  d.createElement(
                    "div",
                    { className: "grid grid-rows-2 gap-2" },
                    d.createElement(pe, {
                      containerClassName: "relative",
                      className: "absolute inset-0 object-cover w-full h-full",
                      src: f[1],
                    }),
                    d.createElement(pe, {
                      containerClassName: "relative",
                      className: "absolute inset-0 object-cover w-full h-full",
                      src: f[2],
                    })
                  ),
                  d.createElement(
                    "div",
                    { className: "grid " },
                    d.createElement(pe, {
                      containerClassName: "relative",
                      className: "absolute inset-0 object-cover w-full h-full",
                      src: f[3],
                    })
                  )
                )
              : null
            : f
            ? d.createElement(
                "div",
                { className: "w-full h-full grid grid-rows-2 gap-2" },
                d.createElement(
                  "div",
                  { className: "grid grid-cols-3 gap-2 " },
                  d.createElement(pe, {
                    containerClassName: "relative col-span-2",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: f[0],
                  }),
                  d.createElement(pe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: f[1],
                  })
                ),
                d.createElement(
                  "div",
                  { className: "grid grid-cols-3 gap-2 " },
                  d.createElement(pe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: f[2],
                  }),
                  d.createElement(pe, {
                    containerClassName: "relative col-span-2",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: f[3],
                  })
                )
              )
            : null
        ),
        d.createElement("a", {
          href: r,
          className:
            "absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity",
        })
      ),
      d.createElement(
        "div",
        {
          className:
            "absolute top-3 inset-x-3 flex justify-between items-start space-x-4",
        },
        d.createElement($e, { categories: s }),
        d.createElement(Be, {
          panelMenusClass: "w-52 right-0 top-0 origin-top-right",
          href: t.link,
        })
      ),
      d.createElement(
        "div",
        { className: "space-y-2.5 mt-4 px-4" },
        d.createElement(
          "h2",
          {
            className:
              "nc-card-title block sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 ",
          },
          d.createElement(
            "a",
            { href: r, className: "line-clamp-1", title: n },
            n
          )
        ),
        d.createElement(je, {
          className: "mt-3",
          author: i,
          hoverReadingTime: !1,
          date: m,
          readingTimeShortcode: p.readingTimeShortcode,
        })
      )
    );
  },
  Lt = ({ className: e = "h-full", galleryType: t = 1 }) =>
    d.createElement(
      "div",
      {
        className: `nc-Card10V3Skeleton group relative flex flex-col ${e}`,
        "data-nc-id": "Card10V3Skeleton",
      },
      d.createElement(
        "div",
        {
          className:
            "block group rounded-3xl flex-shrink-0 relative w-full aspect-w-16 aspect-h-16 sm:aspect-h-9 overflow-hidden",
        },
        d.createElement(
          "div",
          null,
          1 === t
            ? d.createElement(
                "div",
                { className: "w-full h-full grid grid-cols-3 gap-2" },
                d.createElement(
                  "div",
                  { className: "grid " },
                  d.createElement(pe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  })
                ),
                d.createElement(
                  "div",
                  { className: "grid grid-rows-2 gap-2" },
                  d.createElement(pe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  }),
                  d.createElement(pe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  })
                ),
                d.createElement(
                  "div",
                  { className: "grid " },
                  d.createElement(pe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  })
                )
              )
            : d.createElement(
                "div",
                { className: "w-full h-full grid grid-rows-2 gap-2" },
                d.createElement(
                  "div",
                  { className: "grid grid-cols-3 gap-2 " },
                  d.createElement(pe, {
                    containerClassName: "relative col-span-2",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  }),
                  d.createElement(pe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  })
                ),
                d.createElement(
                  "div",
                  { className: "grid grid-cols-3 gap-2 " },
                  d.createElement(pe, {
                    containerClassName: "relative",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  }),
                  d.createElement(pe, {
                    containerClassName: "relative col-span-2",
                    className: "absolute inset-0 object-cover w-full h-full",
                    src: ".",
                  })
                )
              )
        )
      ),
      d.createElement(
        "div",
        {
          className:
            "absolute top-3 inset-x-3 flex justify-between items-start space-x-4",
        },
        d.createElement(y, { width: "30%" })
      ),
      d.createElement(
        "div",
        { className: "space-y-2.5 mt-4 px-4" },
        d.createElement(
          "h2",
          {
            className:
              "nc-card-title block sm:text-lg font-semibold text-neutral-900 dark:text-neutral-100 ",
          },
          d.createElement(y, { width: "80%" })
        ),
        d.createElement(y, { width: "40%" }),
        d.createElement("div", { className: "opacity-0" }, "aa")
      )
    ),
  Mt = ({ listPosts: e, isLoading: t }) =>
    d.createElement(
      "div",
      { className: "grid gap-6 md:gap-8" },
      d.createElement(
        "div",
        { className: "grid gap-6 md:gap-8 lg:grid-cols-2" },
        t
          ? d.createElement(Lt, null)
          : e[0]
          ? d.createElement(St, { post: e[0].node })
          : null,
        t
          ? d.createElement(Lt, null)
          : e[1]
          ? d.createElement(St, { galleryType: 2, post: e[1].node })
          : null
      ),
      d.createElement(
        "div",
        {
          className:
            "grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-3",
        },
        t
          ? [1, 1, 1, 1].map((e, t) => d.createElement(It, { key: t }))
          : e
              .filter((e, t) => t > 1)
              .map((e) => d.createElement(At, { key: e.node.id, post: e.node }))
      )
    );
var _t =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMkAAAAdCAYAAAAAaUg8AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADZSURBVHgB7drLDoIwFEXRhi/XL6+PCTNPSS8gYa2pid2TkyKxtUm990e7AJ21dG7wjujtAnTWulPn0oCfjAQCI4EgjmT2h89RP5x01tK57Uv6np9X0VlL58rjFgTL2e+RR8/XOUZnre/5e19XVdeyzprP/6XjSp0etyAwEgiMBAIjgcBIIDASCIwEAiOBwEggMBIIPiN5tnONnq+z9nydVecf9R+dWTpr6Vx53IJgZCSz191R16XOWjqrHHWtztJZ606dHrcgMBIIjASCipGc/R57lM5at+l8Ab6JZwjCaizRAAAAAElFTkSuQmCC";
const zt = ({
    className: e = "h-full",
    post: t,
    ratio: a = "aspect-w-3 xl:aspect-w-4 aspect-h-3",
  }) => {
    var l;
    const {
        title: n,
        link: r,
        categories: s,
        excerpt: o,
        featuredImage: c,
        postFormats: i,
      } = t,
      m = null == (l = null == i ? void 0 : i.edges[0]) ? void 0 : l.node.name,
      u = (e) =>
        d.createElement(
          "div",
          {
            className:
              "w-14 h-14 flex items-center justify-center rounded-full bg-neutral-50 text-primary-500 cursor-pointer",
          },
          ((e) =>
            e
              ? d.createElement(
                  "svg",
                  { className: " w-9 h-9", fill: "none", viewBox: "0 0 24 24" },
                  d.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M15.25 6.75V17.25",
                  }),
                  d.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M8.75 6.75V17.25",
                  })
                )
              : d.createElement(
                  "svg",
                  {
                    className: "ml-0.5 w-9 h-9",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                  },
                  d.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M18.25 12L5.75 5.75V18.25L18.25 12Z",
                  })
                ))(e)
        );
    return d.createElement(
      "div",
      {
        className: `nc-Card16Podcast relative flex flex-col ${e}`,
        "data-nc-id": "Card16Podcast",
      },
      d.createElement(
        "a",
        {
          href: r,
          className: `block flex-shrink-0 relative w-full rounded-3xl overflow-hidden ${a}`,
        },
        d.createElement(pe, {
          src: (null == c ? void 0 : c.node.sourceUrl) || ".",
        }),
        d.createElement("span", { className: "bg-neutral-900 bg-opacity-30" })
      ),
      d.createElement("a", { href: r, className: "absolute inset-0" }),
      d.createElement(
        "span",
        { className: "absolute top-3 inset-x-3" },
        d.createElement($e, { categories: s })
      ),
      d.createElement(
        "div",
        { className: "w-11/12 transform -mt-32 " },
        d.createElement(
          "div",
          { className: "px-5 flex items-center space-x-4" },
          d.createElement(
            "div",
            { className: "flex-grow " },
            d.createElement("img", { src: _t, alt: "musicWave" })
          ),
          ("Video" === m || "Audio" === m) &&
            d.createElement(st, {
              post: t,
              renderDefaultBtn: () => u(),
              renderPlayingBtn: () => u("playing"),
              renderLoadingBtn: () => u("loading"),
            })
        ),
        d.createElement(
          "div",
          {
            className:
              "p-5 mt-5 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl rounded-3xl rounded-tl-none flex flex-col flex-grow ",
          },
          d.createElement(
            "h2",
            {
              className:
                "nc-card-title block text-xl font-semibold text-neutral-900 dark:text-neutral-100 ",
            },
            d.createElement(
              "a",
              { href: r, className: "line-clamp-1", title: n },
              n
            )
          ),
          d.createElement(
            "span",
            {
              className:
                "block text-sm text-neutral-500 dark:text-neutral-400 mt-3 mb-5",
            },
            o &&
              d.createElement("span", {
                className: "line-clamp-2",
                dangerouslySetInnerHTML: { __html: o },
              })
          ),
          d.createElement(
            "div",
            { className: "flex items-end justify-between mt-auto" },
            d.createElement(xe, { className: "relative", postData: t }),
            d.createElement(Be, { href: t.link })
          )
        )
      )
    );
  },
  Tt = ({
    className: e = "h-full",
    ratio: t = "aspect-w-3 xl:aspect-w-4 aspect-h-3",
  }) =>
    d.createElement(
      "div",
      {
        className: `nc-Card16PodcastSkeleton relative flex flex-col ${e}`,
        "data-nc-id": "Card16PodcastSkeleton",
      },
      d.createElement(
        "div",
        {
          className: `block flex-shrink-0 relative w-full rounded-3xl overflow-hidden ${t}`,
        },
        d.createElement(pe, { src: "." }),
        d.createElement("span", { className: "bg-neutral-900 bg-opacity-30" })
      ),
      d.createElement(
        "span",
        { className: "absolute top-3 inset-x-3" },
        d.createElement(y, { width: "30%" })
      ),
      d.createElement(
        "div",
        { className: "w-11/12 transform -mt-32 " },
        d.createElement(
          "div",
          { className: "px-5 flex items-center space-x-4" },
          d.createElement(
            "div",
            { className: "flex-grow " },
            d.createElement("img", { src: _t, alt: "musicWave" })
          )
        ),
        d.createElement(
          "div",
          {
            className:
              "p-5 mt-5 bg-white dark:bg-neutral-900 shadow-xl dark:shadow-2xl rounded-3xl rounded-tl-none flex flex-col flex-grow ",
          },
          d.createElement(
            "h2",
            {
              className:
                "nc-card-title block text-xl font-semibold text-neutral-900 dark:text-neutral-100 ",
            },
            d.createElement(y, null)
          ),
          d.createElement(
            "span",
            {
              className:
                "block text-sm text-neutral-500 dark:text-neutral-400 mt-3 mb-5",
            },
            d.createElement(y, { width: "80%" })
          ),
          d.createElement("div", { className: "opacity-0" }, "aa")
        )
      )
    ),
  jt = ({ className: e = "", post: t }) => {
    var a;
    const {
        title: l,
        link: n,
        featuredImage: r,
        postFormats: s,
        excerpt: o,
      } = t,
      c = null == (a = null == s ? void 0 : s.edges[0]) ? void 0 : a.node.name,
      i = (e) =>
        d.createElement(
          "span",
          {
            className:
              "w-11 h-11 flex items-center justify-center rounded-full bg-white dark:bg-neutral-800 text-primary-6000 dark:text-primary-200 shadow-lg cursor-pointer",
          },
          ((e) => {
            switch (e) {
              case "loading":
                return d.createElement(
                  "svg",
                  { className: "w-6 h-6", fill: "none", viewBox: "0 0 24 24" },
                  d.createElement("path", {
                    fill: "currentColor",
                    d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z",
                  }),
                  d.createElement("path", {
                    fill: "currentColor",
                    d: "M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z",
                  }),
                  d.createElement("path", {
                    fill: "currentColor",
                    d: "M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z",
                  })
                );
              case "playing":
                return d.createElement(
                  "svg",
                  { className: "w-6 h-6", fill: "none", viewBox: "0 0 24 24" },
                  d.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M15.25 6.75V17.25",
                  }),
                  d.createElement("path", {
                    stroke: "currentColor",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    strokeWidth: "1.5",
                    d: "M8.75 6.75V17.25",
                  })
                );
              default:
                return d.createElement(
                  "svg",
                  {
                    className: "w-6 h-6",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                  },
                  d.createElement("path", {
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
    return d.createElement(
      "div",
      {
        className: `nc-Card17Podcast relative flex items-center justify-between p-2.5 space-x-5 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-30 hover:shadow-xl transition-shadow ${e}`,
        "data-nc-id": "Card17Podcast",
      },
      d.createElement(
        "a",
        { href: n, className: "flex  items-center space-x-4" },
        d.createElement(
          "div",
          {
            className:
              "block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg",
          },
          d.createElement(pe, {
            containerClassName: "absolute inset-0",
            className: "object-cover w-full h-full ",
            src: (null == r ? void 0 : r.node.sourceUrl) || ".",
            alt: l,
          })
        ),
        d.createElement(
          "div",
          { className: "flex flex-col flex-grow" },
          d.createElement(
            "h2",
            { className: "block font-semibold text-lg" },
            d.createElement("span", { className: "line-clamp-1", title: l }, l)
          ),
          o
            ? d.createElement(
                "span",
                {
                  className:
                    "text-xs text-neutral-500 dark:text-neutral-400 mt-1 ",
                },
                d.createElement("span", {
                  className: "line-clamp-1",
                  dangerouslySetInnerHTML: { __html: o },
                })
              )
            : null
        )
      ),
      ("Video" === c || "Audio" === c) &&
        d.createElement(st, {
          post: t,
          className: "",
          renderDefaultBtn: () => i(),
          renderLoadingBtn: () => i("loading"),
          renderPlayingBtn: () => i("playing"),
        })
    );
  },
  Pt = ({ className: e = "" }) =>
    d.createElement(
      "div",
      {
        className: `nc-Card17PodcastSkeleton relative flex items-center justify-between p-2.5 space-x-5 rounded-full bg-neutral-100 dark:bg-neutral-800 dark:bg-opacity-30 hover:shadow-xl transition-shadow ${e}`,
        "data-nc-id": "Card17PodcastSkeleton",
      },
      d.createElement(
        "div",
        { className: "flex  items-center space-x-4" },
        d.createElement(
          "div",
          {
            className:
              "block flex-shrink-0 w-11 h-11 sm:w-16 sm:h-16 relative rounded-full overflow-hidden shadow-lg",
          },
          d.createElement(pe, {
            containerClassName: "absolute inset-0",
            className: "object-cover w-full h-full ",
            src: ".",
          })
        ),
        d.createElement(
          "div",
          { className: "flex flex-col flex-grow" },
          d.createElement(
            "h2",
            { className: "block font-semibold text-lg" },
            d.createElement(y, null)
          ),
          d.createElement(
            "span",
            {
              className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1",
            },
            d.createElement(y, { width: "40%" })
          )
        )
      )
    ),
  $t = ({ listPosts: e, isLoading: t }) =>
    d.createElement(
      "div",
      { className: "grid sm:grid-cols-6 gap-6 md:gap-8" },
      t
        ? d.createElement(Tt, { className: "sm:col-span-3 lg:col-span-2" })
        : e[0]
        ? d.createElement(zt, {
            className: "sm:col-span-3 lg:col-span-2",
            post: e[0].node,
          })
        : null,
      t
        ? d.createElement(Tt, { className: "sm:col-span-3 lg:col-span-2" })
        : e[1]
        ? d.createElement(zt, {
            className: "sm:col-span-3 lg:col-span-2",
            post: e[1].node,
          })
        : null,
      d.createElement(
        "div",
        {
          className:
            "flex flex-col space-y-6 md:space-y-8 sm:col-span-6 lg:col-span-2",
        },
        t
          ? [1, 1, 1, 1].map((e, t) => d.createElement(Pt, { key: t }))
          : e
              .filter((e, t) => t > 1 && t < 6)
              .map((e) => d.createElement(jt, { key: e.node.id, post: e.node }))
      )
    ),
  Dt = ({ className: e = "h-full", post: t }) => {
    var a;
    const {
        title: l,
        link: n,
        featuredImage: r,
        postFormats: s,
        excerpt: o,
      } = t,
      c = null == (a = null == s ? void 0 : s.edges[0]) ? void 0 : a.node.name,
      i = (e) =>
        d.createElement(
          "div",
          {
            className:
              "inline-flex items-center mt-3 pr-4 py-0.5 cursor-pointer rounded-full transition-all hover:pl-0.5 hover:bg-primary-50 dark:hover:bg-neutral-900",
          },
          d.createElement(
            "span",
            {
              className:
                "w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-neutral-800 text-primary-6000 dark:text-primary-200",
            },
            ((e) => {
              switch (e) {
                case "loading":
                  return d.createElement(
                    "svg",
                    {
                      className: "w-6 h-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                    },
                    d.createElement("path", {
                      fill: "currentColor",
                      d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z",
                    }),
                    d.createElement("path", {
                      fill: "currentColor",
                      d: "M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z",
                    }),
                    d.createElement("path", {
                      fill: "currentColor",
                      d: "M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z",
                    })
                  );
                case "playing":
                  return d.createElement(
                    "svg",
                    {
                      className: "w-5 h-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                    },
                    d.createElement("path", {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      d: "M15.25 6.75V17.25",
                    }),
                    d.createElement("path", {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      d: "M8.75 6.75V17.25",
                    })
                  );
                default:
                  return d.createElement(
                    "svg",
                    {
                      className: "w-5 h-5",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                    },
                    d.createElement("path", {
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
          d.createElement(
            "span",
            { className: "ml-3 text-sm font-medium" },
            "playing" === e ? "Now playing" : "Listen now"
          )
        );
    return d.createElement(
      "div",
      {
        className: `nc-Card15Podcast relative flex group items-center p-3 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${e}`,
        "data-nc-id": "Card15Podcast",
      },
      d.createElement(
        "div",
        { className: "w-1/4 flex-shrink-0" },
        d.createElement(
          "a",
          {
            href: n,
            className:
              "block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg ",
          },
          d.createElement(pe, {
            containerClassName: "absolute inset-0",
            className: "object-cover w-full h-full ",
            src: (null == r ? void 0 : r.node.sourceUrl) || ".",
            alt: l,
          })
        )
      ),
      d.createElement(
        "div",
        { className: "flex flex-col flex-grow ml-4 overflow-hidden" },
        d.createElement(
          "h2",
          { className: "nc-card-title block font-semibold text-lg" },
          d.createElement(
            "a",
            { href: n, className: "line-clamp-1", title: l },
            l
          )
        ),
        o
          ? d.createElement(
              "span",
              {
                className:
                  "text-xs text-neutral-500 dark:text-neutral-400 mt-1 ",
              },
              d.createElement("span", {
                className: "line-clamp-1",
                dangerouslySetInnerHTML: { __html: o },
              })
            )
          : null,
        ("Video" === c || "Audio" === c) &&
          d.createElement(st, {
            post: t,
            className: "",
            renderDefaultBtn: () => i(),
            renderLoadingBtn: () => i("loading"),
            renderPlayingBtn: () => i("playing"),
          })
      )
    );
  },
  Ut = ({ className: e = "h-full" }) => {
    return d.createElement(
      "div",
      {
        className: `nc-Card15PodcastSkeleton relative flex group items-center p-3 [ nc-box-has-hover ] [ nc-dark-box-bg-has-hover ] ${e}`,
        "data-nc-id": "Card15PodcastSkeleton",
      },
      d.createElement(
        "div",
        { className: "w-1/4 flex-shrink-0" },
        d.createElement(
          "div",
          {
            className:
              "block h-0 aspect-w-1 aspect-h-1 relative rounded-full overflow-hidden shadow-lg ",
          },
          d.createElement(pe, {
            containerClassName: "absolute inset-0",
            className: "object-cover w-full h-full ",
            src: ".",
          })
        )
      ),
      d.createElement(
        "div",
        { className: "flex flex-col flex-grow ml-4 overflow-hidden" },
        d.createElement(
          "h2",
          { className: "nc-card-title block font-semibold text-lg" },
          d.createElement(y, null)
        ),
        d.createElement(
          "span",
          { className: "text-xs text-neutral-500 dark:text-neutral-400 mt-1" },
          d.createElement(y, { width: "40%" })
        ),
        d.createElement(
          "div",
          {
            className:
              "inline-flex items-center mt-3 pr-4 py-0.5 cursor-pointer rounded-full transition-all hover:pl-0.5 hover:bg-primary-50 dark:hover:bg-neutral-900",
          },
          d.createElement(
            "span",
            {
              className:
                "w-8 h-8 flex items-center justify-center rounded-full bg-primary-50 dark:bg-neutral-800 text-primary-6000 dark:text-primary-200",
            },
            ((e) => {
              switch (e) {
                case "loading":
                  return d.createElement(
                    "svg",
                    {
                      className: "w-6 h-6",
                      fill: "none",
                      viewBox: "0 0 24 24",
                    },
                    d.createElement("path", {
                      fill: "currentColor",
                      d: "M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z",
                    }),
                    d.createElement("path", {
                      fill: "currentColor",
                      d: "M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z",
                    }),
                    d.createElement("path", {
                      fill: "currentColor",
                      d: "M17 12C17 12.5523 16.5523 13 16 13C15.4477 13 15 12.5523 15 12C15 11.4477 15.4477 11 16 11C16.5523 11 17 11.4477 17 12Z",
                    })
                  );
                case "playing":
                  return d.createElement(
                    "svg",
                    {
                      className: "w-5 h-5",
                      fill: "none",
                      viewBox: "0 0 24 24",
                    },
                    d.createElement("path", {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      d: "M15.25 6.75V17.25",
                    }),
                    d.createElement("path", {
                      stroke: "currentColor",
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "1.5",
                      d: "M8.75 6.75V17.25",
                    })
                  );
                default:
                  return d.createElement(
                    "svg",
                    {
                      className: "w-5 h-5",
                      fill: "currentColor",
                      viewBox: "0 0 24 24",
                    },
                    d.createElement("path", {
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
          d.createElement(
            "span",
            { className: "ml-3 text-sm font-medium" },
            "playing" === t ? "Now playing" : "Listen now"
          )
        )
      )
    );
    var t;
  },
  Rt = ({ listPosts: e, isLoading: t }) =>
    d.createElement(
      "div",
      null,
      d.createElement(
        "div",
        { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" },
        t
          ? d.createElement(ft, { ratio: "aspect-w-4 aspect-h-3" })
          : e[0]
          ? d.createElement(pt, {
              ratio: "aspect-w-4 aspect-h-3",
              post: e[0].node,
            })
          : null,
        t
          ? d.createElement(ft, { ratio: "aspect-w-4 aspect-h-3" })
          : e[1]
          ? d.createElement(pt, {
              ratio: "aspect-w-4 aspect-h-3",
              post: e[1].node,
            })
          : null,
        t
          ? d.createElement(ft, { ratio: "aspect-w-4 aspect-h-3" })
          : e[2]
          ? d.createElement(pt, {
              ratio: "aspect-w-4 aspect-h-3",
              post: e[2].node,
            })
          : null
      ),
      d.createElement(
        "div",
        { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-8" },
        t
          ? [1, 1, 1, 1, 1, 1].map((e, t) => d.createElement(Ut, { key: t }))
          : e
              .filter((e, t) => t > 2)
              .map((e) => d.createElement(Dt, { key: e.node.id, post: e.node }))
      )
    ),
  Bt = ({
    className: e = "",
    isShowing: t = !0,
    post: a,
    onClickNext: l = () => {},
    onClickPrev: n = () => {},
    hasNext: r,
    hasPrev: s,
  }) => {
    const {
      ncPostMetaData: o,
      featuredImage: c,
      title: i,
      date: m,
      categories: p,
      author: f,
      link: g,
    } = a;
    return d.createElement(
      w,
      {
        appear: !0,
        as: "div",
        className: `nc-CardLarge1 relative flex flex-col-reverse md:flex-row justify-end ${e}`,
        show: t,
      },
      d.createElement(
        "div",
        {
          className:
            "md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-8 md:mt-0 px-3 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5",
        },
        d.createElement(
          w.Child,
          {
            as: u.exports.Fragment,
            enter:
              "transform nc-will-change-transform transition-all duration-500",
            enterFrom: "translate-y-4 opacity-0",
            enterTo: "translate-y-0 opacity-100",
          },
          d.createElement(
            "div",
            {
              className:
                "p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg",
            },
            d.createElement($e, { categories: p }),
            d.createElement(
              "h2",
              { className: "nc-card-title text-xl sm:text-2xl font-semibold " },
              d.createElement(
                "a",
                { href: g, className: "line-clamp-2", title: i },
                i
              )
            ),
            d.createElement(je, {
              className: "relative",
              author: f,
              date: m,
              hoverReadingTime: !1,
              readingTimeShortcode: o.readingTimeShortcode,
            }),
            d.createElement(
              "div",
              { className: "flex items-center justify-between mt-auto" },
              d.createElement(xe, { postData: a }),
              d.createElement(Be, { href: a.link })
            )
          )
        ),
        r || s
          ? d.createElement(
              w.Child,
              {
                as: "div",
                className: "p-4 sm:pt-8 sm:px-10",
                enter:
                  "transform nc-will-change-transform transition-all duration-500 delay-100",
                enterFrom: "translate-y-4 opacity-0",
                enterTo: "translate-y-0 opacity-100",
              },
              d.createElement(ae, {
                disablePrev: !s,
                disableNext: !r,
                btnClassName: "w-11 h-11 text-xl",
                onClickNext: l,
                onClickPrev: n,
              })
            )
          : null
      ),
      d.createElement(
        w.Child,
        {
          as: "div",
          className: "w-full md:w-4/5 lg:w-2/3",
          enter:
            "transform nc-will-change-transform transition-all duration-500 delay-200",
          enterFrom: "translate-y-4 scale-105 opacity-0",
          enterTo: "translate-y-0 scale-100 opacity-100",
        },
        d.createElement(
          "a",
          { href: g },
          d.createElement(pe, {
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
  Vt = ({ className: e = "", isShowing: t = !0 }) =>
    t
      ? d.createElement(
          "div",
          {
            className: `nc-CardLarge1Skeleton relative flex flex-col-reverse md:flex-row justify-end ${e}`,
          },
          d.createElement(
            "div",
            {
              className:
                "md:absolute z-10 md:left-0 md:top-1/2 md:transform md:-translate-y-1/2 w-full -mt-8 md:mt-0 px-3 sm:px-6 md:px-0 md:w-3/5 lg:w-1/2 xl:w-2/5",
            },
            d.createElement(
              "div",
              null,
              d.createElement(
                "div",
                {
                  className:
                    "p-4 sm:p-8 xl:py-14 md:px-10 bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg rounded-3xl space-y-3 sm:space-y-5 !border-opacity-0 --  nc-dark-box-bg",
                },
                d.createElement(y, { width: "20%" }),
                d.createElement(
                  "h2",
                  {
                    className:
                      "nc-card-title text-xl sm:text-2xl font-semibold ",
                  },
                  d.createElement(y, { width: "80%" })
                ),
                d.createElement(
                  "div",
                  null,
                  d.createElement("span", { className: "opacity-0" }, "22")
                ),
                d.createElement(
                  "div",
                  { className: " mt-auto" },
                  d.createElement(y, { width: "100%" })
                )
              )
            ),
            d.createElement(
              "div",
              { className: "p-4 sm:pt-8 sm:px-10" },
              d.createElement(ae, { btnClassName: "w-11 h-11 text-xl" })
            )
          ),
          d.createElement(
            "div",
            { className: "w-full md:w-4/5 lg:w-2/3" },
            d.createElement(
              "div",
              null,
              d.createElement(pe, {
                containerClassName:
                  "aspect-w-16 aspect-h-12 sm:aspect-h-9 md:aspect-h-14 lg:aspect-h-10 2xl:aspect-h-9 relative",
                className: "absolute inset-0 object-cover rounded-3xl",
                src: ".",
              })
            )
          )
        )
      : null,
  Ot = ({ listPosts: e, isLoading: t }) => {
    const [a, l] = u.exports.useState(0),
      n = () => {
        l((t) => (t >= e.length - 1 ? 0 : t + 1));
      },
      r = () => {
        l((t) => (0 === t ? e.length - 1 : t - 1));
      };
    return d.createElement(
      "div",
      null,
      t
        ? d.createElement(Vt, null)
        : e.map((t, l) =>
            d.createElement(Bt, {
              key: l,
              isShowing: a === l,
              onClickNext: n,
              onClickPrev: r,
              post: t.node,
              hasNext: e.length > l + 1,
              hasPrev: l > 0,
            })
          )
    );
  },
  Ft = () =>
    d.createElement(
      "div",
      {
        className:
          "inline-flex flex-col items-center justify-center text-center",
      },
      d.createElement("img", {
        src: ncmazFrontendVariables.emptyStatePng,
        className: "w-36 sm:w-40",
        alt: "empty state",
      }),
      d.createElement(
        "span",
        { className: "text-sm block text-neutral-500" },
        ie.nothingWeFound
      )
    ),
  Ht = ({ data: e = [], isSkeleton: t, error: a, className: l = "" }) =>
    a || (!t && !e.length)
      ? d.createElement(
          "div",
          { className: l },
          a &&
            d.createElement(
              "pre",
              { className: "text-xs" },
              d.createElement("code", null, a.message)
            ),
          !t && !e.length && d.createElement(Ft, null)
        )
      : null;
function Gt(e, t, a = { freezeOnceVisible: !0, rootMargin: "1000px" }) {
  u.exports.useEffect(() => {
    t <= 5 && e();
  }, []);
  const l = u.exports.useRef(null),
    n = (function (
      e,
      {
        threshold: t = 0,
        root: a = null,
        rootMargin: l = "0%",
        freezeOnceVisible: n = !1,
      }
    ) {
      const [r, s] = u.exports.useState(),
        o = (null == r ? void 0 : r.isIntersecting) && n,
        c = ([e]) => {
          s(e);
        };
      return (
        u.exports.useEffect(() => {
          const n = null == e ? void 0 : e.current;
          if (!window.IntersectionObserver || o || !n) return;
          const r = new IntersectionObserver(c, {
            threshold: t,
            root: a,
            rootMargin: l,
          });
          return r.observe(n), () => r.disconnect();
        }, [e, t, a, l, o]),
        r
      );
    })(l, a),
    r = t > 5 && !!(null == n ? void 0 : n.isIntersecting);
  return (
    u.exports.useEffect(() => {
      r && e();
    }, [r]),
    { ref: l, isVisible: r }
  );
}
const Yt = ({
    className: e = "",
    domNode: t,
    apiSettings: a,
    sectionIndex: l,
  }) => {
    const { graphQLvariables: n, settings: r } = a,
      [s, o] = u.exports.useState(-1),
      [m, p] = u.exports.useState(n.variables || {});
    u.exports.useEffect(() => {
      p(n.variables);
    }, [n]);
    let f = "";
    "GQL_QUERY_GET_POSTS_BY_FILTER" === n.queryString && (f = ke),
      "GQL_QUERY_GET_POSTS_BY_SPECIFIC" === n.queryString && (f = we);
    const g = _`
    ${f}
  `;
    u.exports.useEffect(() => {
      p((e) => {
        var t;
        return i(c({}, e), {
          categoryIn:
            -1 === s
              ? null == (t = n.variables)
                ? void 0
                : t.categoryIn
              : [s],
        });
      });
    }, [s]);
    const [E, { loading: h, error: v, data: x }] = z(g, {
        notifyOnNetworkStatusChange: !0,
        variables: m,
      }),
      { ref: b } = Gt(E, l),
      N = (null == x ? void 0 : x.posts.edges) || [],
      k = h && !N.length,
      w = (e) => {
        -1 !== e ? e.id !== s && o(e.id) : o(e);
      };
    return T.createPortal(
      (() => {
        const {
            hasBackground: t,
            showFilterTab: l,
            categories: n,
            viewMoreHref: o,
            heading: c,
            subHeading: i,
          } = r,
          m = t;
        return d.createElement(
          "div",
          {
            className: `nc-FactoryBlockMagazine relative ${
              m ? "py-16" : ""
            }  ${e}`,
            ref: b,
          },
          m && d.createElement(de, null),
          d.createElement(
            "div",
            { className: "relative" },
            l
              ? d.createElement(me, {
                  tabActiveId: s,
                  tabs: n,
                  viewMoreHref: o,
                  heading: c,
                  subHeading: i,
                  onClickTab: w,
                })
              : d.createElement(le, { desc: i }, c),
            d.createElement(Ht, {
              className: "my-5",
              data: N,
              error: v,
              isSkeleton: k,
            }),
            (() => {
              switch (a.settings.sectionName) {
                case "magazine-1":
                  return d.createElement(Ye, { isLoading: k, listPosts: N });
                case "magazine-2":
                  return d.createElement(ut, { isLoading: k, listPosts: N });
                case "magazine-3":
                  return d.createElement(gt, { isLoading: k, listPosts: N });
                case "magazine-4":
                  return d.createElement(vt, { isLoading: k, listPosts: N });
                case "magazine-5":
                  return d.createElement(wt, { isLoading: k, listPosts: N });
                case "magazine-6":
                  return d.createElement(yt, { isLoading: k, listPosts: N });
                case "magazine-7":
                  return d.createElement(Mt, { isLoading: k, listPosts: N });
                case "magazine-8":
                  return d.createElement($t, { isLoading: k, listPosts: N });
                case "magazine-9":
                  return d.createElement(Rt, { isLoading: k, listPosts: N });
                case "large-slider":
                  return d.createElement(Ot, { isLoading: k, listPosts: N });
                default:
                  return d.createElement(Ye, { isLoading: k, listPosts: N });
              }
            })()
          )
        );
      })(),
      t
    );
  },
  Wt = d.lazy(() =>
    ee(
      () => import("./FactoryBlockPostsGrid.09893331.js"),
      [
        "assets/FactoryBlockPostsGrid.09893331.js",
        "assets/vendor.3078d0a1.js",
        "assets/Card14Skeleton.1a5b1c87.js",
        "assets/ButtonPrimary.07e081ec.js",
      ]
    )
  ),
  Qt = d.lazy(() =>
    ee(
      () => import("./FactoryBlockPostsSlider.ca0aaadc.js"),
      [
        "assets/FactoryBlockPostsSlider.ca0aaadc.js",
        "assets/vendor.3078d0a1.js",
        "assets/Card14Skeleton.1a5b1c87.js",
      ]
    )
  ),
  Zt = d.lazy(() =>
    ee(
      () => import("./FactoryBlockTermsSlider.a078acde.js"),
      [
        "assets/FactoryBlockTermsSlider.a078acde.js",
        "assets/vendor.3078d0a1.js",
        "assets/CardCategory5Skeleton.ca4bca99.js",
      ]
    )
  ),
  qt = d.lazy(() =>
    ee(
      () => import("./FactoryBlockTermsGrid.47698a3d.js"),
      [
        "assets/FactoryBlockTermsGrid.47698a3d.js",
        "assets/vendor.3078d0a1.js",
        "assets/SectionGridCategoryBox.fbaea8ac.js",
        "assets/CardCategory5Skeleton.ca4bca99.js",
      ]
    )
  ),
  Jt = d.lazy(() =>
    ee(
      () => import("./FactoryBlockUsersSlider.3e127225.js"),
      [
        "assets/FactoryBlockUsersSlider.3e127225.js",
        "assets/vendor.3078d0a1.js",
        "assets/CardAuthorBox2Skeleton.29f94d58.js",
        "assets/CardAuthorBoxSkeleton.da416c6c.js",
      ]
    )
  ),
  Xt = d.lazy(() =>
    ee(
      () => import("./FactoryBlockUsersGrid.453d626d.js"),
      [
        "assets/FactoryBlockUsersGrid.453d626d.js",
        "assets/vendor.3078d0a1.js",
        "assets/CardAuthorBoxSkeleton.da416c6c.js",
        "assets/CardAuthorBox2Skeleton.29f94d58.js",
      ]
    )
  ),
  Kt = d.lazy(() =>
    ee(
      () => import("./FactoryBlockVideos.3ade0cec.js"),
      [
        "assets/FactoryBlockVideos.3ade0cec.js",
        "assets/vendor.3078d0a1.js",
        "assets/NcPlayIcon.30c19541.js",
      ]
    )
  ),
  ea = d.lazy(() =>
    ee(
      () => import("./FactoryBlockWidgetPosts.f5619786.js"),
      [
        "assets/FactoryBlockWidgetPosts.f5619786.js",
        "assets/vendor.3078d0a1.js",
        "assets/WidgetHeading1.55ac0e3e.js",
      ]
    )
  ),
  ta = d.lazy(() =>
    ee(
      () => import("./FactoryBlockWidgetUsers.f0cc3c20.js"),
      [
        "assets/FactoryBlockWidgetUsers.f0cc3c20.js",
        "assets/vendor.3078d0a1.js",
        "assets/WidgetHeading1.55ac0e3e.js",
      ]
    )
  ),
  aa = d.lazy(() =>
    ee(
      () => import("./FactoryBlockWidgetTerms.30557678.js"),
      [
        "assets/FactoryBlockWidgetTerms.30557678.js",
        "assets/vendor.3078d0a1.js",
        "assets/Tag.5e4bd5f7.js",
        "assets/WidgetHeading1.55ac0e3e.js",
      ]
    )
  ),
  la = document.querySelectorAll("[data-nc-gutenberg-section=true]"),
  na = () => {
    let e = 0;
    return d.createElement(
      d.Fragment,
      null,
      Array.from(la).map((t, a) => {
        const l = t.getAttribute("data-nc-gutenberg-section-api");
        if (!l) return null;
        const n = JSON.parse(l),
          r = t.getAttribute("data-nc-gutenberg-section-type") || "";
        return "block-magazine" === r
          ? ((e += 1),
            d.createElement(Yt, {
              key: a,
              sectionIndex: e,
              domNode: t,
              apiSettings: n,
            }))
          : "block-posts-slider" === r
          ? ((e += 1),
            d.createElement(
              u.exports.Suspense,
              { key: a, fallback: d.createElement("div", null) },
              d.createElement(Qt, {
                sectionIndex: e,
                key: a,
                domNode: t,
                apiSettings: n,
              })
            ))
          : "block-posts-grid" === r
          ? ((e += 1),
            d.createElement(
              u.exports.Suspense,
              { key: a, fallback: d.createElement("div", null) },
              d.createElement(Wt, {
                sectionIndex: e,
                key: a,
                domNode: t,
                apiSettings: n,
              })
            ))
          : "block-terms-slider" === r
          ? ((e += 1),
            d.createElement(
              u.exports.Suspense,
              { key: a, fallback: d.createElement("div", null) },
              d.createElement(Zt, {
                sectionIndex: e,
                key: a,
                domNode: t,
                apiSettings: n,
              })
            ))
          : "block-terms-grid" === r
          ? ((e += 1),
            d.createElement(
              u.exports.Suspense,
              { key: a, fallback: d.createElement("div", null) },
              d.createElement(qt, {
                sectionIndex: e,
                key: a,
                domNode: t,
                apiSettings: n,
              })
            ))
          : "block-users-slider" === r
          ? ((e += 1),
            d.createElement(
              u.exports.Suspense,
              { key: a, fallback: d.createElement("div", null) },
              d.createElement(Jt, {
                sectionIndex: e,
                key: a,
                domNode: t,
                apiSettings: n,
              })
            ))
          : "block-users-grid" === r
          ? ((e += 1),
            d.createElement(
              u.exports.Suspense,
              { key: a, fallback: d.createElement("div", null) },
              d.createElement(Xt, {
                sectionIndex: e,
                key: a,
                domNode: t,
                apiSettings: n,
              })
            ))
          : "block-videos" === r
          ? d.createElement(
              u.exports.Suspense,
              { key: a, fallback: d.createElement("div", null) },
              d.createElement(Kt, { key: a, domNode: t, apiSettings: n })
            )
          : "block-widget-posts" === r
          ? ((e += 1),
            d.createElement(
              u.exports.Suspense,
              { key: a, fallback: d.createElement("div", null) },
              d.createElement(ea, {
                sectionIndex: e,
                key: a,
                domNode: t,
                apiSettings: n,
              })
            ))
          : "block-widget-users" === r
          ? ((e += 1),
            d.createElement(
              u.exports.Suspense,
              { key: a, fallback: d.createElement("div", null) },
              d.createElement(ta, {
                sectionIndex: e,
                key: a,
                domNode: t,
                apiSettings: n,
              })
            ))
          : "block-widget-terms" === r
          ? ((e += 1),
            d.createElement(
              u.exports.Suspense,
              { key: a, fallback: d.createElement("div", null) },
              d.createElement(aa, {
                sectionIndex: e,
                key: a,
                domNode: t,
                apiSettings: n,
              })
            ))
          : null;
      })
    );
  };
const ra = () => {
    const e = document.querySelector(".nc-Header"),
      t = document.querySelector(".nc-Header__MainNav1"),
      a = document.querySelector(".nc-Header__MainNav1 .nc-MainNav1"),
      l = document.querySelector(".nc-SingleHeaderMenu"),
      n = document.querySelector(".nc-SingleHeaderMenu__progress-bar");
    let r = document.querySelector("#wpadminbar");
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
    r = s.width <= 600 ? null : document.querySelector("#wpadminbar");
    let o = window.pageYOffset;
    const c = !!l,
      [i, m] = u.exports.useState(!1),
      [d, p] = u.exports.useState(!0);
    u.exports.useEffect(() => {
      l && (l.style.display = i ? "block" : "none");
    }, [i]),
      u.exports.useEffect(() => {
        a &&
          (d &&
            !a.classList.contains("onTop") &&
            (a.classList.remove("notOnTop"), a.classList.add("onTop")),
          d ||
            a.classList.contains("notOnTop") ||
            (a.classList.remove("onTop"), a.classList.add("notOnTop")));
      }, [d]),
      u.exports.useEffect(() => {
        if (!t) return;
        let e = t.offsetHeight;
        r && (e -= r.offsetHeight),
          (window.onscroll = function () {
            g(e);
          });
      }, [s.width]),
      u.exports.useEffect(() => {
        c
          ? setTimeout(() => {
              window.addEventListener("scroll", f);
            }, 200)
          : window.removeEventListener("scroll", f);
      }, [c]);
    const f = () => {
        (() => {
          const e = document.querySelector("#ncmaz-single-entry-content");
          if (!c || !e) return;
          const t = e.offsetTop + e.offsetHeight;
          let a =
            ((document.body.scrollTop || document.documentElement.scrollTop) /
              t) *
            100;
          !n || a > 140 || ((a = a > 100 ? 100 : a), (n.style.width = a + "%"));
        })();
        let e = document.body.scrollTop || document.documentElement.scrollTop;
        m(e > 200);
      },
      g = (a) => {
        let l = window.pageYOffset;
        e &&
          t &&
          (p(o < l ? !(l > a) : !(l > 0)),
          (e.style.top =
            o > l ? (r ? `${r.offsetHeight}px` : "0") : `-${a + 2}px`),
          (o = l));
      };
    return null;
  },
  sa = ({ className: e = "h-full", post: t }) => {
    var a, l, n, r, s, o, c;
    const {
        link: i,
        categories: m,
        title: u,
        featuredImage: p,
        postFormats: f,
      } = t,
      g = null == (a = null == f ? void 0 : f.edges[0]) ? void 0 : a.node.name;
    return d.createElement(
      "div",
      {
        className: `nc-Card18 group relative flex flex-col ${e}`,
        "data-nc-id": "Card18",
      },
      d.createElement(
        "div",
        {
          className:
            "w-full block h-0 aspect-h-9 aspect-w-10 rounded-2xl overflow-hidden",
        },
        d.createElement(pe, {
          containerClassName: "absolute inset-0 ",
          src: (null == p ? void 0 : p.node.sourceUrl) || ".",
          alt: u,
        }),
        d.createElement(
          "div",
          null,
          d.createElement(De, {
            className: "absolute left-1.5 bottom-1.5",
            postType: g,
            wrapSize: "w-8 h-8",
            iconSize: "w-4 h-4",
          })
        ),
        d.createElement("div", {
          className:
            "bg-transparent group-hover:bg-gray-900/30 transform transition-colors",
        })
      ),
      d.createElement(
        "div",
        { className: "absolute top-1.5 inset-x-1.5 flex justify-between " },
        d.createElement(Pe, {
          className: "relative z-10",
          name:
            null ==
            (n =
              null == (l = null == m ? void 0 : m.edges[0]) ? void 0 : l.node)
              ? void 0
              : n.name,
          href:
            null ==
            (s =
              null == (r = null == m ? void 0 : m.edges[0]) ? void 0 : r.node)
              ? void 0
              : s.link,
          color:
            null ==
            (c =
              null == (o = null == m ? void 0 : m.edges[0]) ? void 0 : o.node)
              ? void 0
              : c.ncTaxonomyMeta.color,
        })
      ),
      d.createElement(
        "h2",
        { className: "block mt-2 font-medium text-sm" },
        d.createElement("span", {
          className: "line-clamp-2",
          dangerouslySetInnerHTML: { __html: u },
        })
      ),
      d.createElement("a", { href: i, className: "absolute inset-0" })
    );
  },
  oa = ({ className: e = "h-full" }) =>
    d.createElement(
      "div",
      {
        className: `nc-Card18Skeleton group relative flex flex-col ${e}`,
        "data-nc-id": "Card18Skeleton",
      },
      d.createElement(
        "div",
        {
          className:
            "w-full block h-0 aspect-h-9 aspect-w-10 rounded-2xl overflow-hidden",
        },
        d.createElement(pe, {
          containerClassName: "absolute inset-0 ",
          src: ".",
        }),
        d.createElement(
          "div",
          null,
          d.createElement(De, {
            className: "absolute left-1.5 bottom-1.5",
            wrapSize: "w-8 h-8",
            iconSize: "w-4 h-4",
          })
        ),
        d.createElement("div", {
          className:
            "bg-transparent group-hover:bg-gray-900/30 transform transition-colors",
        })
      ),
      d.createElement(
        "div",
        { className: "absolute top-1.5 inset-x-1.5 flex justify-between " },
        d.createElement(y, { width: "40%" })
      ),
      d.createElement(
        "h2",
        { className: "block mt-2 font-medium text-sm" },
        d.createElement(y, { width: "80%" }),
        d.createElement(y, { width: "60%" })
      )
    ),
  ca = ({ domNode: e, menuItemData: t }) => {
    var a, l, n;
    const { ncmazMenuCustomFields: r } = t,
      [s, o] = u.exports.useState(
        null ==
          (l = null == (a = null == r ? void 0 : r.taxonomies) ? void 0 : a[0])
          ? void 0
          : l.categoryId
      ),
      {
        taxonomies: c,
        numberOfPosts: i,
        order: m,
        orderBy: p,
        showTabFilter: f,
      } = r;
    let g = {},
      E = [];
    (E = f ? [s] : (null == c ? void 0 : c.map((e) => e.categoryId)) || []),
      (g = { categoryIn: E, first: Number(i) });
    const h = _`
    ${"\n  query Megamenu_Filter(\n    $field: PostObjectsConnectionOrderbyEnum = DATE\n    $order: OrderEnum = DESC\n    $categoryIn: [ID] = []\n    $tagIn: [ID] = []\n    $authorIn: [ID] = []\n    $last: Int = null\n    $first: Int = 10\n    $before: String = null\n    $after: String = null\n    $featuredImage_size: MediaItemSizeEnum = MEDIUM\n  ) {\n    posts(\n      where: {\n        orderby: { field: $field, order: $order }\n        categoryIn: $categoryIn\n        tagIn: $tagIn\n        authorIn: $authorIn\n      }\n      last: $last\n      first: $first\n      before: $before\n      after: $after\n    ) {\n      edges {\n  node {\n    id\n    link\n    categories {\n      edges {\n        node {\n          id\n          link\n          name\n          uri\n          slug\n          count\n          categoryId\n          ncTaxonomyMeta {\n            color \n          } \n        } \n      } \n    }\n    commentCount\n    date\n    excerpt\n    featuredImage {\n      node {\n        id\n        altText\n        caption\n        sourceUrl(size: $featuredImage_size) \n      } \n    }\n    postFormats {\n      edges {\n        node {\n          id\n          name \n        } \n      } \n    }\n    postId\n    slug\n    title \n  } \n}\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor \n      } \n    }\n  }\n"}
  `,
      [v, { loading: x, error: b, data: N, fetchMore: k }] = z(h, {
        notifyOnNetworkStatusChange: !0,
        variables: g,
      }),
      { ref: w } = Gt(v, 99),
      y = null == (n = null == N ? void 0 : N.posts) ? void 0 : n.pageInfo,
      C = (null == N ? void 0 : N.posts.edges) || [],
      A = x,
      I = (e, { fetchMoreResult: t }) => {
        var a;
        return (
          null == (a = null == t ? void 0 : t.posts) ? void 0 : a.edges.length
        )
          ? t
          : e;
      },
      S = () => {
        const { taxonomies: e } = t.ncmazMenuCustomFields;
        return d.createElement(
          "div",
          { className: "w-1/5 py-8 flex-shrink-0  " },
          d.createElement(
            "div",
            { className: "flow-root" },
            d.createElement(
              "ul",
              { className: "" },
              (e || []).map((e) => {
                const t = e.categoryId === s;
                return d.createElement(
                  "li",
                  {
                    className:
                      "py-2.5 px-5 flex items-center !m-0 relative " +
                      (t ? "bg-neutral-100 dark:bg-neutral-800 " : ""),
                    key: e.categoryId,
                    onMouseEnter: () => {
                      o(e.categoryId);
                    },
                  },
                  t &&
                    d.createElement("span", {
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
      L = () =>
        d.createElement(
          "div",
          {
            className:
              "flex-grow " +
              (f ? "border-l border-neutral-200 dark:border-neutral-800" : ""),
          },
          d.createElement(
            "div",
            { className: "px-4 py-5 " },
            d.createElement(Ht, {
              className: "my-5",
              data: C,
              error: b,
              isSkeleton: A,
            }),
            A || C.length
              ? d.createElement(
                  "div",
                  {
                    className:
                      "grid gap-4 " + (f ? "grid-cols-4" : "grid-cols-5"),
                  },
                  A
                    ? Array.from(f ? "88888888" : "8888888888").map((e, t) =>
                        d.createElement(oa, { key: t })
                      )
                    : C.map((e) =>
                        d.createElement(sa, { post: e.node, key: e.node.id })
                      )
                )
              : null,
            (() => {
              if (
                !(null == y ? void 0 : y.hasPreviousPage) &&
                !(null == y ? void 0 : y.hasNextPage)
              )
                return null;
              let e =
                "w-10 h-10 bg-white dark:bg-neutral-900 border border-neutral-200 hover:border-neutral-300 dark:border-neutral-6000 dark:hover:border-neutral-500 rounded-full flex items-center justify-center  -- disabled:opacity-70 disabled:text-gray-500  disabled:cursor-default disabled:hover:border-neutral-200 dark:disabled:hover:border-neutral-6000";
              return d.createElement(
                "div",
                {
                  className:
                    "nc-NextPrev mt-8 ml-2 relative flex items-center justify-center text-neutral-900 dark:text-neutral-300 space-x-2.5 ",
                },
                d.createElement(
                  "button",
                  {
                    className: e,
                    disabled: !y.hasPreviousPage,
                    onClick: () => {
                      k &&
                        k({
                          variables: {
                            first: null,
                            after: null,
                            last: Number(i),
                            before: y.startCursor || null,
                          },
                          updateQuery: I,
                        });
                    },
                  },
                  d.createElement("i", { className: "las la-angle-left" })
                ),
                d.createElement(
                  "button",
                  {
                    className: e,
                    disabled: !y.hasNextPage,
                    onClick: () => {
                      k &&
                        k({
                          variables: {
                            first: Number(i),
                            after: y.endCursor || null,
                            last: null,
                            before: null,
                          },
                          updateQuery: I,
                        });
                    },
                  },
                  d.createElement("i", { className: "las la-angle-right" })
                )
              );
            })()
          )
        );
    return T.createPortal(
      d.createElement(
        "div",
        {
          ref: w,
          className: "nc-megamenu-item absolute top-full py-3 -inset-x-10",
        },
        d.createElement(
          "div",
          {
            className:
              "w-full flex overflow-hidden rounded-2xl shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 text-sm relative bg-white dark:bg-neutral-900 ",
          },
          f && S(),
          L()
        )
      ),
      e
    );
  },
  ia = document.querySelectorAll("[data-is-megamenu=true]"),
  ma = () =>
    d.createElement(
      d.Fragment,
      null,
      d.createElement(ra, null),
      d.createElement(
        d.Fragment,
        null,
        Array.from(ia).map((e, t) => {
          const a = e.getAttribute("data-graphql");
          return a && "null" !== a
            ? d.createElement(ca, {
                key: t,
                domNode: e,
                menuItemData: JSON.parse(a).menuItem,
              })
            : null;
        })
      )
    );
function da(e, t) {
  return e
    ? e && e.includes("gravatar.com/avatar/")
      ? t || ""
      : e && !e.includes("gravatar.com/avatar/")
      ? e
      : void 0
    : t || "";
}
const ua = ({ data: e, footData: t }) => {
    var a;
    const { currentUser: l, homeURL: n } = frontendObject;
    return d.createElement(
      N,
      { as: "div", className: "relative inline-block text-left" },
      d.createElement(
        "div",
        null,
        d.createElement(
          N.Button,
          { className: "" },
          d.createElement(
            "div",
            {
              className:
                "flex-shrink-0 sm:w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ",
            },
            d.createElement(ze, {
              imgUrl: da(
                null == l ? void 0 : l.avatar.url,
                null == (r = null == l ? void 0 : l.ncUserMeta.featuredImage)
                  ? void 0
                  : r.sourceUrl
              ),
              userName: null == l ? void 0 : l.name,
              radius: "rounded-full",
              containerClassName:
                "ring-2 ring-neutral-200 dark:ring-neutral-700 ring-offset-2",
              sizeClass: "h-7 w-7 text-base ",
            })
          )
        )
      ),
      d.createElement(
        w,
        {
          as: u.exports.Fragment,
          enter: "transition ease-out duration-100",
          enterFrom: "transform opacity-0 scale-95",
          enterTo: "transform opacity-100 scale-100",
          leave: "transition ease-in duration-75",
          leaveFrom: "transform opacity-100 scale-100",
          leaveTo: "transform opacity-0 scale-95",
        },
        d.createElement(
          N.Items,
          {
            className:
              "absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-neutral-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-neutral-100  dark:divide-neutral-700 text-sm",
          },
          d.createElement(
            "div",
            { className: "px-1 py-2" },
            d.createElement(
              "a",
              {
                href: n + (null == l ? void 0 : l.uri),
                className: "px-3 py-2 flex items-center space-x-3",
              },
              d.createElement(ze, {
                imgUrl: da(
                  null == l ? void 0 : l.avatar.url,
                  null == (a = null == l ? void 0 : l.ncUserMeta.featuredImage)
                    ? void 0
                    : a.sourceUrl
                ),
                userName: null == l ? void 0 : l.name,
                radius: "rounded-full",
                sizeClass: "h-9 w-9 sm:h-10 sm:w-10 text-base",
              }),
              d.createElement(
                "div",
                { className: "flex flex-col justify-center text-sm truncate" },
                d.createElement(
                  "span",
                  {
                    className:
                      "text-base font-medium truncate capitalize leading-tight mb-0.5",
                  },
                  null == l ? void 0 : l.name
                ),
                d.createElement(
                  "span",
                  {
                    className:
                      "text-neutral-500 dark:text-neutral-400 truncate leading-tight",
                  },
                  null == l ? void 0 : l.ncUserMeta.ncBio
                )
              )
            )
          ),
          d.createElement(
            "div",
            { className: "px-1 py-2" },
            e.map((e) =>
              d.createElement(N.Item, { key: e.id }, ({ active: t }) =>
                d.createElement(
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
                  d.createElement("i", {
                    className: `${e.icon} mr-1 w-7 text-lg`,
                  }),
                  d.createElement("span", null, e.name)
                )
              )
            )
          ),
          d.createElement(
            "div",
            { className: "px-1 py-2" },
            t.map((e) =>
              d.createElement(N.Item, { key: e.id }, ({ active: t }) =>
                d.createElement(
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
                  d.createElement("i", {
                    className: `${e.icon} mr-1 w-7 text-lg`,
                  }),
                  d.createElement("span", null, e.name)
                )
              )
            )
          )
        )
      )
    );
    var r;
  },
  pa = d.forwardRef((e, t) => {
    var a = e,
      {
        className: l = "",
        sizeClass: n = "h-11 px-4 py-3",
        fontClass: r = "text-sm font-normal",
        rounded: s = "rounded-full",
        children: o,
        type: i = "text",
      } = a,
      u = m(a, [
        "className",
        "sizeClass",
        "fontClass",
        "rounded",
        "children",
        "type",
      ]);
    return d.createElement(
      "input",
      c(
        {
          ref: t,
          type: i,
          className: `block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ${s} ${r} ${n} ${l}`,
        },
        u
      )
    );
  }),
  fa = () => {
    const e = d.createRef();
    return d.createElement(
      d.Fragment,
      null,
      d.createElement(j, { className: "sm:relative" }, ({ open: t }) => {
        var a;
        return (
          t &&
            setTimeout(() => {
              var t;
              null == (t = e.current) || t.focus();
            }, 100),
          d.createElement(
            d.Fragment,
            null,
            d.createElement(
              j.Button,
              {
                className:
                  "text-2xl md:text-[28px] sm:w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center",
              },
              d.createElement("i", { className: "las la-search" })
            ),
            d.createElement(
              w,
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
              d.createElement(
                j.Panel,
                {
                  static: !0,
                  className:
                    "absolute right-2.5 sm:right-0 z-10 w-screen max-w-[300px] sm:max-w-sm mt-3",
                },
                d.createElement(
                  "form",
                  {
                    role: "search",
                    method: "GET",
                    className: "search-form",
                    action:
                      null == (a = window.frontendObject) ? void 0 : a.homeURL,
                  },
                  d.createElement(pa, {
                    name: "s",
                    ref: e,
                    type: "search",
                    placeholder: "Type and press enter",
                  }),
                  d.createElement("input", {
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
  ga = ({ className: e = "w-12 h-12" }) => {
    const [t, a] = u.exports.useState(
        "dark" === localStorage.theme ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      ),
      l = document.documentElement;
    u.exports.useEffect(() => {
      "dark" === localStorage.theme ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? l.classList.add("dark")
        : l.classList.remove("dark");
    }, [t]);
    return d.createElement(
      "button",
      {
        onClick: () => {
          (localStorage.theme = t ? "light" : "dark"), a(!t);
        },
        className: `text-2xl md:text-3xl rounded-full text-neutral-700 dark:text-neutral-300 sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ${e}`,
      },
      d.createElement("span", { className: "sr-only" }, "Enable dark mode"),
      t
        ? d.createElement(P, { className: "w-7 h-7", "aria-hidden": "true" })
        : d.createElement($, { className: "w-7 h-7", "aria-hidden": "true" })
    );
  },
  Ea = d.lazy(() =>
    ee(
      () => import("./HeaderSingleAudio.77e2af5d.js"),
      ["assets/HeaderSingleAudio.77e2af5d.js", "assets/vendor.3078d0a1.js"]
    )
  ),
  ha = d.lazy(() =>
    ee(
      () => import("./HeaderSingleGallery.e6f85964.js"),
      [
        "assets/HeaderSingleGallery.e6f85964.js",
        "assets/vendor.3078d0a1.js",
        "assets/ButtonClose.aef35a0a.js",
      ]
    )
  ),
  va = d.lazy(() =>
    ee(
      () => import("./HeaderSingleVideo.72490085.js"),
      [
        "assets/HeaderSingleVideo.72490085.js",
        "assets/vendor.3078d0a1.js",
        "assets/NcPlayIcon.30c19541.js",
      ]
    )
  ),
  xa = d.lazy(() =>
    ee(
      () => import("./PageArchiveDate.fe001562.js"),
      [
        "assets/PageArchiveDate.fe001562.js",
        "assets/vendor.3078d0a1.js",
        "assets/PageArchive.6547b533.js",
        "assets/ButtonClose.aef35a0a.js",
        "assets/ButtonPrimary.07e081ec.js",
        "assets/Tag.5e4bd5f7.js",
        "assets/SectionGridCategoryBox.fbaea8ac.js",
        "assets/CardCategory5Skeleton.ca4bca99.js",
      ]
    )
  ),
  ba = d.lazy(() =>
    ee(
      () => import("./PageSearch.e67cd5f8.js"),
      [
        "assets/PageSearch.e67cd5f8.js",
        "assets/vendor.3078d0a1.js",
        "assets/PageArchive.6547b533.js",
        "assets/ButtonClose.aef35a0a.js",
        "assets/ButtonPrimary.07e081ec.js",
        "assets/Tag.5e4bd5f7.js",
        "assets/SectionGridCategoryBox.fbaea8ac.js",
        "assets/CardCategory5Skeleton.ca4bca99.js",
        "assets/CardAuthorBox2Skeleton.29f94d58.js",
      ]
    )
  ),
  Na = d.lazy(() =>
    ee(
      () => import("./SingleMoreFromAuthorGridPosts.6b666e85.js"),
      [
        "assets/SingleMoreFromAuthorGridPosts.6b666e85.js",
        "assets/vendor.3078d0a1.js",
        "assets/DataStatementBlock.0684726e.js",
      ]
    )
  ),
  ka = d.lazy(() =>
    ee(
      () => import("./SingleRelatedGridPosts.bc9100ee.js"),
      [
        "assets/SingleRelatedGridPosts.bc9100ee.js",
        "assets/vendor.3078d0a1.js",
        "assets/DataStatementBlock.0684726e.js",
      ]
    )
  ),
  wa = d.lazy(() =>
    ee(
      () => import("./PageArchiveAuthor.5fe3b47c.js"),
      [
        "assets/PageArchiveAuthor.5fe3b47c.js",
        "assets/vendor.3078d0a1.js",
        "assets/ButtonPrimary.07e081ec.js",
        "assets/PageArchive.6547b533.js",
        "assets/ButtonClose.aef35a0a.js",
        "assets/Tag.5e4bd5f7.js",
        "assets/SectionGridCategoryBox.fbaea8ac.js",
        "assets/CardCategory5Skeleton.ca4bca99.js",
      ]
    )
  ),
  ya = d.lazy(() =>
    ee(
      () =>
        import("./PageArchive.6547b533.js").then(function (e) {
          return e.d;
        }),
      [
        "assets/PageArchive.6547b533.js",
        "assets/vendor.3078d0a1.js",
        "assets/ButtonClose.aef35a0a.js",
        "assets/ButtonPrimary.07e081ec.js",
        "assets/Tag.5e4bd5f7.js",
        "assets/SectionGridCategoryBox.fbaea8ac.js",
        "assets/CardCategory5Skeleton.ca4bca99.js",
      ]
    )
  ),
  Ca = document.querySelectorAll("[data-is-react-component] "),
  Aa = ({}) => {
    if (!Ca || !Ca.length) return null;
    return d.createElement(
      d.Fragment,
      null,
      Array.from(Ca).map((e, t) => {
        const a = e.getAttribute("data-is-react-component");
        if (!e || !a) return null;
        let l = e.getAttribute("data-component-props")
          ? JSON.parse(e.getAttribute("data-component-props") || "")
          : {};
        switch (("object" != typeof l && (l = []), a)) {
          case "PostCardDropdownShare":
            return T.createPortal(d.createElement(Be, c({}, l)), e);
          case "SocialsShare":
            return T.createPortal(d.createElement(ge, c({}, l)), e);
          case "SingleRelatedGridPosts":
            return T.createPortal(
              d.createElement(
                u.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(ka, c({}, l))
              ),
              e
            );
          case "SingleMoreFromAuthorGridPosts":
            return T.createPortal(
              d.createElement(
                u.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(Na, c({}, l))
              ),
              e
            );
          case "HeaderSingleGallery":
            return T.createPortal(
              d.createElement(
                u.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(ha, c({}, l))
              ),
              e
            );
          case "HeaderSingleVideo":
            return T.createPortal(
              d.createElement(
                u.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(va, c({}, l))
              ),
              e
            );
          case "HeaderSingleAudio":
            return T.createPortal(
              d.createElement(
                u.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(Ea, c({}, l))
              ),
              e
            );
          case "PageArchive":
            return T.createPortal(
              d.createElement(
                u.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(ya, c({}, l))
              ),
              e
            );
          case "PageArchiveDate":
            return T.createPortal(
              d.createElement(
                u.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(xa, c({}, l))
              ),
              e
            );
          case "PageArchiveAuthor":
            return T.createPortal(
              d.createElement(
                u.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(wa, c({}, l))
              ),
              e
            );
          case "PageSearch":
            return T.createPortal(
              d.createElement(
                u.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(ba, c({}, l))
              ),
              e
            );
          case "SwitchDarkMode":
            return T.createPortal(d.createElement(ga, c({}, l)), e);
          case "SearchDropdown":
            return T.createPortal(d.createElement(fa, c({}, l)), e);
          case "NavAccountDropdown":
            return T.createPortal(d.createElement(ua, c({}, l)), e);
          default:
            return null;
        }
      })
    );
  },
  Ia = d.lazy(() =>
    ee(
      () => import("./MediaRunningContainer.537480f5.js"),
      ["assets/MediaRunningContainer.537480f5.js", "assets/vendor.3078d0a1.js"]
    )
  );
function Sa() {
  return d.createElement(
    d.Fragment,
    null,
    d.createElement(ma, null),
    d.createElement(Aa, null),
    d.createElement(na, null),
    d.createElement(
      u.exports.Suspense,
      { fallback: d.createElement("div", null) },
      d.createElement(Ia, null)
    )
  );
}
var La = M({
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
var Ma = M({
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
var _a = M({
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
const za = U(
    { key: "root", version: 1, storage: V, whitelist: ["darkmode"] },
    D({
      bookmark: La,
      postLike: Ma,
      darkmode: M({
        name: "darkmode",
        initialState: { isDarkMode: !1 },
        reducers: {
          toogleDarkMode: (e) => ({ isDarkMode: !e.isDarkMode }),
          enableDarkMode: () => ({ isDarkMode: !0 }),
          disableDarkMode: () => ({ isDarkMode: !1 }),
        },
      }).reducer,
      commentLikes: _a,
      pages: M({
        name: "pages",
        initialState: { currentPage: { type: "/", data: {} } },
        reducers: {
          changeCurrentPage: (e, t) =>
            (e = i(c({}, e), { currentPage: t.payload })),
        },
      }).reducer,
      mediaRunning: nt,
    })
  ),
  Ta = [],
  ja = R({
    reducer: za,
    middleware: (e) =>
      e({ serializableCheck: { ignoredActions: [O, F, H, G, Y, W] } }).concat(
        Ta
      ),
  });
let Pa = B(ja);
if (
  (null == (e = window.frontendObject) ? void 0 : e.graphQLBasePath) &&
  !location.pathname.includes("/wp-admin/")
) {
  const e = new Q({ typePolicies: { Query: { fields: {} } } }),
    t = new Z({ uri: window.frontendObject.graphQLBasePath, cache: e });
  T.render(
    d.createElement(
      d.StrictMode,
      null,
      d.createElement(
        q,
        { store: ja },
        d.createElement(
          J,
          { loading: null, persistor: Pa },
          d.createElement(X, { client: t }, d.createElement(Sa, null))
        )
      )
    ),
    document.getElementById("root")
  );
}
export {
  ze as A,
  de as B,
  $e as C,
  Ht as D,
  We as E,
  ae as F,
  ke as G,
  me as H,
  Se as I,
  Le as J,
  Me as K,
  Ze as L,
  _e as M,
  pe as N,
  Pe as O,
  ve as P,
  Ae as Q,
  Ce as R,
  st as S,
  rt as T,
  te as U,
  Ne as V,
  ye as W,
  pa as X,
  se as Y,
  oe as Z,
  Ft as _,
  Je as a,
  Be as b,
  tt as c,
  Fe as d,
  xe as e,
  De as f,
  Gt as g,
  ie as h,
  we as i,
  Dt as j,
  mt as k,
  At as l,
  pt as m,
  Ut as n,
  dt as o,
  It as p,
  ft as q,
  at as r,
  lt as s,
  le as t,
  Xe as u,
  je as v,
  it as w,
  Ct as x,
  Te as y,
  ne as z,
};
