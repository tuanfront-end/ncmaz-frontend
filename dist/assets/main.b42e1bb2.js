var e,
  t = Object.defineProperty,
  n = Object.defineProperties,
  r = Object.getOwnPropertyDescriptors,
  a = Object.getOwnPropertySymbols,
  l = Object.prototype.hasOwnProperty,
  o = Object.prototype.propertyIsEnumerable,
  s = (e, n, r) =>
    n in e
      ? t(e, n, { enumerable: !0, configurable: !0, writable: !0, value: r })
      : (e[n] = r),
  c = (e, t) => {
    for (var n in t || (t = {})) l.call(t, n) && s(e, n, t[n]);
    if (a) for (var n of a(t)) o.call(t, n) && s(e, n, t[n]);
    return e;
  },
  i = (e, t) => n(e, r(t));
import {
  R as d,
  r as m,
  M as u,
  T as f,
  D as p,
  P as E,
  a as g,
  L as y,
  b as k,
  c as b,
  d as h,
  F as v,
  e as _,
  f as x,
  g as S,
  S as w,
  h as I,
  i as P,
  j as $,
  p as N,
  k as T,
  l as L,
  m as A,
  n as R,
  o as O,
  q as C,
  s as j,
  t as D,
  u as F,
  I as M,
  A as U,
  v as z,
  w as B,
  x as G,
} from "./vendor.061fbf51.js";
const V = {},
  q = function (e, t) {
    return t && 0 !== t.length
      ? Promise.all(
          t.map((e) => {
            if (
              (e = `${window.frontendObject.homeURL}/wp-content/plugins/ncmaz-frontend/dist/${e}`) in
              V
            )
              return;
            V[e] = !0;
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
  Q = d.lazy(() =>
    q(
      () => import("./FactoryBlockMagazine.ff4403fc.js"),
      [
        "assets/FactoryBlockMagazine.ff4403fc.js",
        "assets/vendor.061fbf51.js",
        "assets/Heading.8b8253c2.js",
        "assets/NextPrev.496f13cc.js",
        "assets/Card10Skeleton.1174441b.js",
        "assets/Card11Skeleton.a81f7c1d.js",
        "assets/NcImage.8e407e46.js",
        "assets/NavItem.0af45266.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/PostFeaturedMedia.890b02aa.js",
        "assets/PostCardLikeAction.d5fb4b97.js",
        "assets/Badge.470ee4ad.js",
        "assets/ncNanoId.025eca4e.js",
        "assets/hooks.ea7513ac.js",
        "assets/index.87904adc.js",
        "assets/ButtonPlayMusicRunningContainer.7a0e7bf7.js",
        "assets/BackgroundSection.7e357db3.js",
        "assets/PostCardMeta.78843450.js",
        "assets/Card11.f4148bfc.js",
        "assets/Card9.615d904a.js",
        "assets/Card15PodcastSkeleton.70acd687.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/useGqlQuerySection.bffb6faf.js",
      ]
    )
  ),
  Y = d.lazy(() =>
    q(
      () => import("./FactoryBlockPostsGrid.ea2feb10.js"),
      [
        "assets/FactoryBlockPostsGrid.ea2feb10.js",
        "assets/vendor.061fbf51.js",
        "assets/Heading.8b8253c2.js",
        "assets/NextPrev.496f13cc.js",
        "assets/Card10Skeleton.1174441b.js",
        "assets/Card11Skeleton.a81f7c1d.js",
        "assets/NcImage.8e407e46.js",
        "assets/NavItem.0af45266.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/PostFeaturedMedia.890b02aa.js",
        "assets/PostCardLikeAction.d5fb4b97.js",
        "assets/Badge.470ee4ad.js",
        "assets/ncNanoId.025eca4e.js",
        "assets/hooks.ea7513ac.js",
        "assets/index.87904adc.js",
        "assets/ButtonPlayMusicRunningContainer.7a0e7bf7.js",
        "assets/BackgroundSection.7e357db3.js",
        "assets/Card14Skeleton.055e6599.js",
        "assets/Card9.615d904a.js",
        "assets/Card11.f4148bfc.js",
        "assets/PostCardMeta.78843450.js",
        "assets/Card15PodcastSkeleton.70acd687.js",
        "assets/ButtonPrimary.14f185a8.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/useGqlQuerySection.bffb6faf.js",
      ]
    )
  ),
  H = d.lazy(() =>
    q(
      () => import("./FactoryBlockPostsSlider.13fbcc25.js"),
      [
        "assets/FactoryBlockPostsSlider.13fbcc25.js",
        "assets/vendor.061fbf51.js",
        "assets/Heading.8b8253c2.js",
        "assets/NextPrev.496f13cc.js",
        "assets/Card10Skeleton.1174441b.js",
        "assets/Card11Skeleton.a81f7c1d.js",
        "assets/NcImage.8e407e46.js",
        "assets/NavItem.0af45266.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/PostFeaturedMedia.890b02aa.js",
        "assets/PostCardLikeAction.d5fb4b97.js",
        "assets/Badge.470ee4ad.js",
        "assets/ncNanoId.025eca4e.js",
        "assets/hooks.ea7513ac.js",
        "assets/index.87904adc.js",
        "assets/ButtonPlayMusicRunningContainer.7a0e7bf7.js",
        "assets/BackgroundSection.7e357db3.js",
        "assets/Card14Skeleton.055e6599.js",
        "assets/Card9.615d904a.js",
        "assets/Card11.f4148bfc.js",
        "assets/PostCardMeta.78843450.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/useGqlQuerySection.bffb6faf.js",
      ]
    )
  ),
  W = d.lazy(() =>
    q(
      () => import("./FactoryBlockTermsSlider.99ff9bd8.js"),
      [
        "assets/FactoryBlockTermsSlider.99ff9bd8.js",
        "assets/vendor.061fbf51.js",
        "assets/BackgroundSection.7e357db3.js",
        "assets/Heading.8b8253c2.js",
        "assets/NextPrev.496f13cc.js",
        "assets/ncNanoId.025eca4e.js",
        "assets/CardCategory5Skeleton.61cf348e.js",
        "assets/NcImage.8e407e46.js",
        "assets/Badge.470ee4ad.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/useGqlQuerySection.bffb6faf.js",
      ]
    )
  ),
  J = d.lazy(() =>
    q(
      () => import("./FactoryBlockTermsGrid.387041f2.js"),
      [
        "assets/FactoryBlockTermsGrid.387041f2.js",
        "assets/vendor.061fbf51.js",
        "assets/BackgroundSection.7e357db3.js",
        "assets/SectionGridCategoryBox.046ca369.js",
        "assets/CardCategory5Skeleton.61cf348e.js",
        "assets/NcImage.8e407e46.js",
        "assets/Badge.470ee4ad.js",
        "assets/Heading.8b8253c2.js",
        "assets/NextPrev.496f13cc.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/useGqlQuerySection.bffb6faf.js",
      ]
    )
  ),
  K = d.lazy(() =>
    q(
      () => import("./FactoryBlockUsersSlider.20618eac.js"),
      [
        "assets/FactoryBlockUsersSlider.20618eac.js",
        "assets/vendor.061fbf51.js",
        "assets/BackgroundSection.7e357db3.js",
        "assets/Heading.8b8253c2.js",
        "assets/NextPrev.496f13cc.js",
        "assets/ncNanoId.025eca4e.js",
        "assets/CardAuthorBox2Skeleton.ac9cc940.js",
        "assets/NcImage.8e407e46.js",
        "assets/CardAuthorBoxSkeleton.d873331d.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/useGqlQuerySection.bffb6faf.js",
      ]
    )
  ),
  X = d.lazy(() =>
    q(
      () => import("./FactoryBlockUsersGrid.77fa35d8.js"),
      [
        "assets/FactoryBlockUsersGrid.77fa35d8.js",
        "assets/vendor.061fbf51.js",
        "assets/BackgroundSection.7e357db3.js",
        "assets/CardAuthorBoxSkeleton.d873331d.js",
        "assets/CardAuthorBox2Skeleton.ac9cc940.js",
        "assets/NcImage.8e407e46.js",
        "assets/Heading.8b8253c2.js",
        "assets/NextPrev.496f13cc.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/useGqlQuerySection.bffb6faf.js",
      ]
    )
  ),
  Z = d.lazy(() =>
    q(
      () => import("./FactoryBlockVideos.bdcb31c4.js"),
      [
        "assets/FactoryBlockVideos.bdcb31c4.js",
        "assets/vendor.061fbf51.js",
        "assets/BackgroundSection.7e357db3.js",
        "assets/Heading.8b8253c2.js",
        "assets/NextPrev.496f13cc.js",
        "assets/NcImage.8e407e46.js",
        "assets/NcPlayIcon.b23b9341.js",
      ]
    )
  ),
  ee = d.lazy(() =>
    q(
      () => import("./FactoryBlockWidgetPosts.0bebacfd.js"),
      [
        "assets/FactoryBlockWidgetPosts.0bebacfd.js",
        "assets/vendor.061fbf51.js",
        "assets/NcImage.8e407e46.js",
        "assets/PostCardMeta.78843450.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/WidgetHeading1.b16fd60a.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/useGqlQuerySection.bffb6faf.js",
      ]
    )
  ),
  te = d.lazy(() =>
    q(
      () => import("./FactoryBlockWidgetUsers.c8d94d9e.js"),
      [
        "assets/FactoryBlockWidgetUsers.c8d94d9e.js",
        "assets/vendor.061fbf51.js",
        "assets/WidgetHeading1.b16fd60a.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/useGqlQuerySection.bffb6faf.js",
      ]
    )
  ),
  ne = d.lazy(() =>
    q(
      () => import("./FactoryBlockWidgetTerms.d789d9c3.js"),
      [
        "assets/FactoryBlockWidgetTerms.d789d9c3.js",
        "assets/vendor.061fbf51.js",
        "assets/Tag.e34f4724.js",
        "assets/NcImage.8e407e46.js",
        "assets/WidgetHeading1.b16fd60a.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/useGqlQuerySection.bffb6faf.js",
      ]
    )
  ),
  re = document.querySelectorAll("[data-nc-gutenberg-section=true]"),
  ae = () => {
    let e = 0;
    return d.createElement(
      d.Fragment,
      null,
      Array.from(re).map((t, n) => {
        const r = t.getAttribute("data-nc-gutenberg-section-api");
        if (!r) return null;
        const a = JSON.parse(r),
          l = t.getAttribute("data-nc-gutenberg-section-type") || "";
        return "block-magazine" === l
          ? ((e += 1),
            d.createElement(
              m.exports.Suspense,
              { key: n, fallback: d.createElement("div", null) },
              d.createElement(Q, {
                key: n,
                sectionIndex: e,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-posts-slider" === l
          ? ((e += 1),
            d.createElement(
              m.exports.Suspense,
              { key: n, fallback: d.createElement("div", null) },
              d.createElement(H, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-posts-grid" === l
          ? ((e += 1),
            d.createElement(
              m.exports.Suspense,
              { key: n, fallback: d.createElement("div", null) },
              d.createElement(Y, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-terms-slider" === l
          ? ((e += 1),
            d.createElement(
              m.exports.Suspense,
              { key: n, fallback: d.createElement("div", null) },
              d.createElement(W, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-terms-grid" === l
          ? ((e += 1),
            d.createElement(
              m.exports.Suspense,
              { key: n, fallback: d.createElement("div", null) },
              d.createElement(J, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-users-slider" === l
          ? ((e += 1),
            d.createElement(
              m.exports.Suspense,
              { key: n, fallback: d.createElement("div", null) },
              d.createElement(K, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-users-grid" === l
          ? ((e += 1),
            d.createElement(
              m.exports.Suspense,
              { key: n, fallback: d.createElement("div", null) },
              d.createElement(X, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-videos" === l
          ? d.createElement(
              m.exports.Suspense,
              { key: n, fallback: d.createElement("div", null) },
              d.createElement(Z, { key: n, domNode: t, apiSettings: a })
            )
          : "block-widget-posts" === l
          ? ((e += 1),
            d.createElement(
              m.exports.Suspense,
              { key: n, fallback: d.createElement("div", null) },
              d.createElement(ee, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-widget-users" === l
          ? ((e += 1),
            d.createElement(
              m.exports.Suspense,
              { key: n, fallback: d.createElement("div", null) },
              d.createElement(te, {
                sectionIndex: e,
                key: n,
                domNode: t,
                apiSettings: a,
              })
            ))
          : "block-widget-terms" === l
          ? ((e += 1),
            d.createElement(
              m.exports.Suspense,
              { key: n, fallback: d.createElement("div", null) },
              d.createElement(ne, {
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
const le = () => {
  const e = document.querySelector(".nc-Header"),
    t = document.querySelector(".nc-Header__MainNav1"),
    n = document.querySelector(".nc-Header__MainNav1 .nc-MainNav1"),
    r = document.querySelector(".nc-SingleHeaderMenu"),
    a = document.querySelector(".nc-SingleHeaderMenu__progress-bar");
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
  const c = !!r,
    [i, d] = m.exports.useState(!1),
    [u, f] = m.exports.useState(!0);
  m.exports.useEffect(() => {
    r && (r.style.display = i ? "block" : "none");
  }, [i]),
    m.exports.useEffect(() => {
      n &&
        (u &&
          !n.classList.contains("onTop") &&
          (n.classList.remove("notOnTop"), n.classList.add("onTop")),
        u ||
          n.classList.contains("notOnTop") ||
          (n.classList.remove("onTop"), n.classList.add("notOnTop")));
    }, [u]),
    m.exports.useEffect(() => {
      if (!t) return;
      let e = t.offsetHeight;
      l && (e -= l.offsetHeight),
        (window.onscroll = function () {
          E(e);
        });
    }, [o.width]),
    m.exports.useEffect(() => {
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
    E = (n) => {
      let r = window.pageYOffset;
      e &&
        t &&
        (f(s < r ? !(r > n) : !(r > 0)),
        (e.style.top =
          s > r ? (l ? `${l.offsetHeight}px` : "0") : `-${n + 2}px`),
        (s = r));
    };
  return null;
};
let oe = {
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
    e && "object" == typeof e && (oe = c(c({}, oe), e));
  }
} catch (ct) {
  console.log("----translate frontend file error ----", ct);
}
var se = oe;
const ce = ({ domNode: e, menuItemData: t }) => null,
  ie = document.querySelectorAll("[data-is-megamenu=true]"),
  de = () =>
    d.createElement(
      d.Fragment,
      null,
      d.createElement(le, null),
      d.createElement(
        d.Fragment,
        null,
        Array.from(ie).map((e, t) => {
          const n = e.getAttribute("data-graphql");
          return n && "null" !== n
            ? d.createElement(ce, {
                key: t,
                domNode: e,
                menuItemData: JSON.parse(n).menuItem,
              })
            : null;
        })
      )
    ),
  me = [
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
  ue =
    " edges {\n  node {\n    id\n    link\n    author {\n      node {\n        id\n        avatar {\n          url\n        }\n        url\n        uri\n        username\n        name\n        slug\n        ncUserMeta {\n          featuredImage {\n            sourceUrl\n          }\n        }\n      }\n    }\n    categories {\n      edges {\n        node {\n          id\n          link\n          name\n          uri\n          slug\n          count\n          categoryId\n          ncTaxonomyMeta {\n            color\n          }\n        }\n      }\n    }\n    commentCount\n    date\n    excerpt\n    featuredImage {\n      node {\n        id\n        altText\n        caption\n        sourceUrl\n      }\n    }\n    postFormats {\n      edges {\n        node {\n          id\n          name\n        }\n      }\n    }\n    postId\n    slug\n    title\n    ncmazVideoUrl {\n      fieldGroupName\n      videoUrl\n    }\n    ncmazAudioUrl {\n      fieldGroupName\n      audioUrl\n    }\n    ncPostMetaData {\n      favoriteButtonShortcode\n      readingTimeShortcode\n      viewsCount\n      fieldGroupName\n    }\n    ncmazGalleryImgs {\n      fieldGroupName\n      image1 {\n        id\n        sourceUrl\n      }\n      image2 {\n        id\n        sourceUrl\n      }\n      image3 {\n        id\n        sourceUrl\n      }\n      image4 {\n        id\n        sourceUrl\n      }\n      image5 {\n        id\n        sourceUrl\n      }\n      image6 {\n        id\n        sourceUrl\n      }\n      image7 {\n        id\n        sourceUrl\n      }\n      image8 {\n        id\n        sourceUrl\n      }\n    }\n  }\n}",
  fe = `\n  query GQL_QUERY_GET_POSTS_BY_FILTER(\n    $field: PostObjectsConnectionOrderbyEnum = AUTHOR\n    $order: OrderEnum = ASC\n    $categoryIn: [ID] = []\n    $tagIn: [ID] = []\n    $authorIn: [ID] = []\n    $notIn: [ID] = []\n    $last: Int = null\n    $first: Int = 10\n    $before: String = ""\n    $after: String = ""\n  ) {\n    posts(\n      where: {\n        orderby: { field: $field, order: $order }\n        categoryIn: $categoryIn\n        tagIn: $tagIn\n        authorIn: $authorIn\n        notIn: $notIn\n      }\n      last: $last\n      first: $first\n      before: $before\n      after: $after\n    ) {\n     ${ue}\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        endCursor\n        startCursor\n      }\n    }\n  }\n`,
  pe = `\n  query GQL_QUERY_GET_POSTS_BY_SPECIFIC($nameIn: [String] = "") {\n    posts(where: { nameIn: $nameIn }) { ${ue} }\n  }\n`,
  Ee =
    "edges {\n\tnode {\n\t\tid\n\t\tname\n\t\tusername\n\t\tuserId\n\t\turl\n\t\turi\n\t\tncUserMeta {\n\t\t\tcolor\n\t\t\tncBio\n\t\t\tfeaturedImage {\n\t\t\t\tsourceUrl\n\t\t\t\tid\n\t\t\t}\n\t\t\tbackgroundImage {\n\t\t\t\tsourceUrl\n\t\t\t}\n\t\t}\n\t}\n}",
  ge = `query GQL_QUERY_GET_USERS_BY_FILTER(\n\t$after: String = ""\n\t$before: String = ""\n\t$first: Int = 10\n\t$last: Int = null\n\t$field: UsersConnectionOrderbyEnum = DISPLAY_NAME\n\t$order: OrderEnum = ASC\n\t$roleIn: [UserRoleEnum] = []\n) {\n\tusers(\n\t\twhere: { orderby: { field: $field, order: $order }, roleIn: $roleIn }\n\t\tlast: $last\n\t\tfirst: $first\n\t\tbefore: $before\n\t\tafter: $after\n\t) { ${Ee} }\n}`,
  ye = `query GQL_QUERY_GET_USERS_BY_SPECIFIC($include: [Int] = null) {\n\tusers(where: { include: $include }) { ${Ee} }\n}`,
  ke =
    "edges {\n    node {\n        id\n        count\n        name\n        databaseId\n        description\n        link\n        ncTaxonomyMeta {\n            color                                     \n            featuredImage {\n                sourceUrl\n            }\n        }\n    }\n}",
  be = `\n\tquery GQL_QUERY_GET_CATEGORIES_BY_FILTER(\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n\t) {\n\t\tcategories(\n\t\t\twhere: { order: $order, orderby: $orderby }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${ke} }\n\t}\n`,
  he = `\n\tquery GQL_QUERY_GET_CATEGORIES_BY_SPECIFIC($termTaxonomId: [ID] = "") {\n\t\tcategories(where: { termTaxonomId: $termTaxonomId }) { ${ke} }\n\t}\n`,
  ve = `\n\tquery GQL_QUERY_GET_TAGS_BY_FILTER(\n\t\t$order: OrderEnum = ASC\n\t\t$orderby: TermObjectsConnectionOrderbyEnum = COUNT\n\t\t$after: String = null\n\t\t$before: String = null\n\t\t$first: Int = 10\n\t\t$last: Int = null\n\t) {\n\t\ttags(\n\t\t\twhere: { order: $order, orderby: $orderby }\n\t\t\tfirst: $first\n\t\t\tbefore: $before\n\t\t\tafter: $after\n\t\t\tlast: $last\n\t\t) { ${ke} }\n\t}\n`,
  _e = `\n\tquery GQL_QUERY_GET_TAGS_BY_SPECIFIC($termTaxonomId: [ID] = "") {\n\t\ttags(where: { termTaxonomId: $termTaxonomId }) { ${ke} }\n\t}\n`,
  xe = ({
    containerClassName: e = "ring-1 ring-white dark:ring-neutral-900",
    sizeClass: t = "h-6 w-6 text-base",
    radius: n = "rounded-md",
    imgUrl: r,
    userName: a,
  }) => {
    const l = r && !r.includes("gravatar.com/avatar/") ? r : "",
      o = a || "John Doe";
    return d.createElement(
      "div",
      {
        className: `wil-avatar relative flex-shrink-0 inline-flex items-center justify-center overflow-hidden text-neutral-100 uppercase font-semibold shadow-inner ${n} ${t} ${e}`,
        style: {
          backgroundColor: l
            ? void 0
            : ((e) => {
                const t = Math.floor(e.charCodeAt(0) % me.length);
                return me[t];
              })(o),
        },
      },
      l &&
        d.createElement("img", {
          className: "absolute inset-0 w-full h-full object-cover",
          src: l,
          alt: o,
        }),
      d.createElement("span", { className: "wil-avatar__name" }, o[0])
    );
  };
function Se(e, t) {
  return e
    ? e && e.includes("gravatar.com/avatar/")
      ? t || ""
      : e && !e.includes("gravatar.com/avatar/")
      ? e
      : void 0
    : t || "";
}
const we = ({ data: e, footData: t }) => {
  var n;
  const { currentUser: r, homeURL: a } = frontendObject;
  return d.createElement(
    u,
    { as: "div", className: "relative inline-block text-left" },
    d.createElement(
      "div",
      null,
      d.createElement(
        u.Button,
        { className: "" },
        d.createElement(
          "div",
          {
            className:
              "flex-shrink-0 sm:w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ",
          },
          d.createElement(xe, {
            imgUrl: Se(
              null == r ? void 0 : r.avatar.url,
              null == (l = null == r ? void 0 : r.ncUserMeta.featuredImage)
                ? void 0
                : l.sourceUrl
            ),
            userName: null == r ? void 0 : r.name,
            radius: "rounded-full",
            containerClassName:
              "ring-2 ring-neutral-200 dark:ring-neutral-700 ring-offset-2",
            sizeClass: "h-7 w-7 text-base ",
          })
        )
      )
    ),
    d.createElement(
      f,
      {
        as: m.exports.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
      },
      d.createElement(
        u.Items,
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
              href: a + (null == r ? void 0 : r.uri),
              className: "px-3 py-2 flex items-center space-x-3",
            },
            d.createElement(xe, {
              imgUrl: Se(
                null == r ? void 0 : r.avatar.url,
                null == (n = null == r ? void 0 : r.ncUserMeta.featuredImage)
                  ? void 0
                  : n.sourceUrl
              ),
              userName: null == r ? void 0 : r.name,
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
                null == r ? void 0 : r.name
              ),
              d.createElement(
                "span",
                {
                  className:
                    "text-neutral-500 dark:text-neutral-400 truncate leading-tight",
                },
                null == r ? void 0 : r.ncUserMeta.ncBio
              )
            )
          )
        ),
        d.createElement(
          "div",
          { className: "px-1 py-2" },
          e.map((e) =>
            d.createElement(u.Item, { key: e.id }, ({ active: t }) =>
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
            d.createElement(u.Item, { key: e.id }, ({ active: t }) =>
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
  var l;
};
function Ie(e = !1) {
  return e
    ? "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
    : "focus:outline-none";
}
const Pe = ({
    className:
      e = `h-8 w-8 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center ${Ie()}`,
    iconClass: t = "h-[18px] w-[18px]",
    panelMenusClass: n = " w-56 top-0 right-0 origin-top-right",
    title: r = "More",
    renderTrigger: a,
    renderItem: l,
    data: o,
    onClick: s,
  }) =>
    d.createElement(
      u,
      { as: "div", className: "relative inline-block text-left" },
      d.createElement(
        u.Button,
        { className: e, title: r },
        a
          ? a()
          : d.createElement(p, {
              className: t,
              "aria-hidden": "true",
              stroke: "none",
              fill: "currentColor",
            })
      ),
      d.createElement(
        f,
        {
          as: m.exports.Fragment,
          enter: "transition ease-out duration-100",
          enterFrom: "transform opacity-0 scale-95",
          enterTo: "transform opacity-100 scale-100",
          leave: "transition ease-in duration-75",
          leaveFrom: "transform opacity-100 scale-100",
          leaveTo: "transform opacity-0 scale-95",
        },
        d.createElement(
          u.Items,
          {
            className: `absolute ${n} bg-white dark:bg-neutral-900 rounded-lg divide-y divide-neutral-100 shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 focus:outline-none z-40`,
          },
          d.createElement(
            "div",
            {
              className:
                "px-1 py-2.5 text-sm text-neutral-6000 dark:text-neutral-300",
            },
            o.map((e) =>
              d.createElement(
                u.Item,
                { key: e.id, onClick: () => s(e), "data-menu-item-id": e.id },
                ({ active: t }) =>
                  l
                    ? l(e, t)
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
  $e = [
    { id: "Facebook", name: "Facebook", icon: "lab la-facebook-f", href: "#" },
    { id: "Twitter", name: "Twitter", icon: "lab la-twitter", href: "#" },
    { id: "Linkedin", name: "Linkedin", icon: "lab la-linkedin-in", href: "#" },
    { id: "Pinterest", name: "Pinterest", icon: "lab la-Pinterest", href: "#" },
  ],
  Ne = ({
    panelMenusClass: e = "w-52 right-0 bottom-0 origin-bottom-right",
    href: t = "/#",
    className:
      n = "nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-8 w-8",
  }) =>
    d.createElement(Pe, {
      className: n,
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
      renderItem: (e, n) =>
        d.createElement(
          "div",
          {
            className:
              "flex items-center rounded-md w-full  truncate " +
              (n
                ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
                : ""),
          },
          ((e, n) => {
            switch (e.id) {
              case "Facebook":
                return d.createElement(
                  v,
                  {
                    className: "flex items-center space-x-3 !px-3 !py-2 ",
                    url: t,
                  },
                  d.createElement(_, { round: !0, size: 24 }),
                  d.createElement("span", null, "Facebook")
                );
              case "Twitter":
                return d.createElement(
                  b,
                  {
                    className: "flex items-center space-x-3 !px-3 !py-2 ",
                    url: t,
                  },
                  d.createElement(h, { round: !0, size: 24 }),
                  d.createElement("span", null, "Twitter")
                );
              case "Linkedin":
                return d.createElement(
                  y,
                  {
                    className: "flex items-center space-x-3 !px-3 !py-2 ",
                    url: t,
                  },
                  d.createElement(k, { round: !0, size: 24 }),
                  d.createElement("span", null, "Linkedin")
                );
              case "Pinterest":
                return d.createElement(
                  E,
                  {
                    media: "",
                    className: "flex items-center space-x-3 !px-3 !py-2 ",
                    url: t,
                  },
                  d.createElement(g, { round: !0, size: 24 }),
                  d.createElement("span", null, "Pinterest")
                );
              default:
                return null;
            }
          })(e)
        ),
      data: $e,
      onClick: () => {},
    }),
  Te = d.forwardRef((e, t) => {
    var n = e,
      {
        className: r = "",
        sizeClass: s = "h-11 px-4 py-3",
        fontClass: i = "text-sm font-normal",
        rounded: m = "rounded-full",
        children: u,
        type: f = "text",
      } = n,
      p = ((e, t) => {
        var n = {};
        for (var r in e) l.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && a)
          for (var r of a(e)) t.indexOf(r) < 0 && o.call(e, r) && (n[r] = e[r]);
        return n;
      })(n, [
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
          type: f,
          className: `block w-full border-neutral-200 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 ${m} ${i} ${s} ${r}`,
        },
        p
      )
    );
  }),
  Le = () => {
    const e = d.createRef();
    return d.createElement(
      d.Fragment,
      null,
      d.createElement(x, { className: "relative" }, ({ open: t }) => {
        var n;
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
              x.Button,
              {
                className:
                  "text-2xl md:text-[28px] sm:w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center",
              },
              d.createElement("i", { className: "las la-search" })
            ),
            d.createElement(
              f,
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
              d.createElement(
                x.Panel,
                {
                  static: !0,
                  className: "absolute right-0 z-10 w-screen max-w-sm mt-3",
                },
                d.createElement(
                  "form",
                  {
                    role: "search",
                    method: "GET",
                    className: "search-form",
                    action:
                      null == (n = window.frontendObject) ? void 0 : n.homeURL,
                  },
                  d.createElement(Te, {
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
  Ae = [
    { id: "Facebook", name: "Facebook", icon: "lab la-facebook-f" },
    { id: "Twitter", name: "Twitter", icon: "lab la-twitter" },
    { id: "Linkedin", name: "Linkedin", icon: "lab la-linkedin-in" },
    { id: "Pinterest", name: "Pinterest", icon: "lab la-Pinterest" },
  ],
  Re = ({ className: e = "grid gap-[6px]", href: t = "#", size: n = 24 }) =>
    d.createElement(
      "div",
      { className: `nc-SocialsShare ${e}`, "data-nc-id": "SocialsShare" },
      Ae.map((e, r) => {
        switch (e.id) {
          case "Facebook":
            return d.createElement(
              v,
              { key: r, url: t, className: "hover:opacity-70" },
              d.createElement(_, { round: !0, size: n })
            );
          case "Twitter":
            return d.createElement(
              b,
              { key: r, url: t, className: "hover:opacity-70" },
              d.createElement(h, { round: !0, size: n })
            );
          case "Linkedin":
            return d.createElement(
              y,
              { key: r, url: t, className: "hover:opacity-70" },
              d.createElement(k, { round: !0, size: n })
            );
          case "Pinterest":
            return d.createElement(
              E,
              { media: "", key: r, url: t, className: "hover:opacity-70" },
              d.createElement(g, { round: !0, size: n })
            );
          default:
            return null;
        }
      })
    ),
  Oe = ({ className: e = "w-12 h-12" }) => {
    const [t, n] = m.exports.useState(
        "dark" === localStorage.theme ||
          (!("theme" in localStorage) &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)
      ),
      r = document.documentElement;
    m.exports.useEffect(() => {
      "dark" === localStorage.theme ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
        ? r.classList.add("dark")
        : r.classList.remove("dark");
    }, [t]);
    return d.createElement(
      "button",
      {
        onClick: () => {
          (localStorage.theme = t ? "light" : "dark"), n(!t);
        },
        className: `text-2xl md:text-3xl rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ${e}`,
      },
      d.createElement("span", { className: "sr-only" }, "Enable dark mode"),
      t
        ? d.createElement(S, { className: "w-7 h-7", "aria-hidden": "true" })
        : d.createElement(w, { className: "w-7 h-7", "aria-hidden": "true" })
    );
  },
  Ce = d.lazy(() =>
    q(
      () => import("./HeaderSingleAudio.5b8acfb1.js"),
      [
        "assets/HeaderSingleAudio.5b8acfb1.js",
        "assets/vendor.061fbf51.js",
        "assets/ButtonPlayMusicRunningContainer.7a0e7bf7.js",
        "assets/hooks.ea7513ac.js",
      ]
    )
  ),
  je = d.lazy(() =>
    q(
      () => import("./HeaderSingleGallery.4868c312.js"),
      [
        "assets/HeaderSingleGallery.4868c312.js",
        "assets/vendor.061fbf51.js",
        "assets/NcImage.8e407e46.js",
        "assets/NextPrev.496f13cc.js",
        "assets/ButtonClose.6db89761.js",
      ]
    )
  ),
  De = d.lazy(() =>
    q(
      () => import("./HeaderSingleVideo.bc5dd2a1.js"),
      [
        "assets/HeaderSingleVideo.bc5dd2a1.js",
        "assets/vendor.061fbf51.js",
        "assets/index.87904adc.js",
        "assets/NcPlayIcon.b23b9341.js",
      ]
    )
  ),
  Fe = d.lazy(() =>
    q(
      () => import("./PageArchiveDate.8accf194.js"),
      [
        "assets/PageArchiveDate.8accf194.js",
        "assets/vendor.061fbf51.js",
        "assets/PageArchive.7c34cfbd.js",
        "assets/Card11Skeleton.a81f7c1d.js",
        "assets/NcImage.8e407e46.js",
        "assets/ButtonClose.6db89761.js",
        "assets/ButtonPrimary.14f185a8.js",
        "assets/Tag.e34f4724.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/Card11.f4148bfc.js",
        "assets/PostFeaturedMedia.890b02aa.js",
        "assets/PostCardLikeAction.d5fb4b97.js",
        "assets/Badge.470ee4ad.js",
        "assets/ncNanoId.025eca4e.js",
        "assets/NextPrev.496f13cc.js",
        "assets/hooks.ea7513ac.js",
        "assets/index.87904adc.js",
        "assets/ButtonPlayMusicRunningContainer.7a0e7bf7.js",
        "assets/PostCardMeta.78843450.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/BackgroundSection.7e357db3.js",
        "assets/SectionGridCategoryBox.046ca369.js",
        "assets/CardCategory5Skeleton.61cf348e.js",
        "assets/Heading.8b8253c2.js",
      ]
    )
  ),
  Me = d.lazy(() =>
    q(
      () => import("./PageSearch.14cc02c6.js"),
      [
        "assets/PageSearch.14cc02c6.js",
        "assets/vendor.061fbf51.js",
        "assets/PageArchive.7c34cfbd.js",
        "assets/Card11Skeleton.a81f7c1d.js",
        "assets/NcImage.8e407e46.js",
        "assets/ButtonClose.6db89761.js",
        "assets/ButtonPrimary.14f185a8.js",
        "assets/Tag.e34f4724.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/Card11.f4148bfc.js",
        "assets/PostFeaturedMedia.890b02aa.js",
        "assets/PostCardLikeAction.d5fb4b97.js",
        "assets/Badge.470ee4ad.js",
        "assets/ncNanoId.025eca4e.js",
        "assets/NextPrev.496f13cc.js",
        "assets/hooks.ea7513ac.js",
        "assets/index.87904adc.js",
        "assets/ButtonPlayMusicRunningContainer.7a0e7bf7.js",
        "assets/PostCardMeta.78843450.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/BackgroundSection.7e357db3.js",
        "assets/SectionGridCategoryBox.046ca369.js",
        "assets/CardCategory5Skeleton.61cf348e.js",
        "assets/Heading.8b8253c2.js",
        "assets/NavItem.0af45266.js",
        "assets/CardAuthorBox2Skeleton.ac9cc940.js",
      ]
    )
  ),
  Ue = d.lazy(() =>
    q(
      () => import("./SingleMoreFromAuthorGridPosts.f27f5a28.js"),
      [
        "assets/SingleMoreFromAuthorGridPosts.f27f5a28.js",
        "assets/vendor.061fbf51.js",
        "assets/DataStatementBlock.18edc184.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/Heading.8b8253c2.js",
        "assets/NextPrev.496f13cc.js",
        "assets/Card9.615d904a.js",
        "assets/NcImage.8e407e46.js",
        "assets/PostFeaturedMedia.890b02aa.js",
        "assets/PostCardLikeAction.d5fb4b97.js",
        "assets/Badge.470ee4ad.js",
        "assets/ncNanoId.025eca4e.js",
        "assets/hooks.ea7513ac.js",
        "assets/index.87904adc.js",
        "assets/ButtonPlayMusicRunningContainer.7a0e7bf7.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/useGqlQuerySection.bffb6faf.js",
      ]
    )
  ),
  ze = d.lazy(() =>
    q(
      () => import("./SingleRelatedGridPosts.67de5e1a.js"),
      [
        "assets/SingleRelatedGridPosts.67de5e1a.js",
        "assets/vendor.061fbf51.js",
        "assets/DataStatementBlock.18edc184.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/Heading.8b8253c2.js",
        "assets/NextPrev.496f13cc.js",
        "assets/Card11.f4148bfc.js",
        "assets/PostFeaturedMedia.890b02aa.js",
        "assets/PostCardLikeAction.d5fb4b97.js",
        "assets/Badge.470ee4ad.js",
        "assets/NcImage.8e407e46.js",
        "assets/ncNanoId.025eca4e.js",
        "assets/hooks.ea7513ac.js",
        "assets/index.87904adc.js",
        "assets/ButtonPlayMusicRunningContainer.7a0e7bf7.js",
        "assets/PostCardMeta.78843450.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/useGqlQuerySection.bffb6faf.js",
      ]
    )
  ),
  Be = d.lazy(() =>
    q(
      () => import("./PageArchiveAuthor.ef6f8f60.js"),
      [
        "assets/PageArchiveAuthor.ef6f8f60.js",
        "assets/vendor.061fbf51.js",
        "assets/ButtonPrimary.14f185a8.js",
        "assets/Card11Skeleton.a81f7c1d.js",
        "assets/NcImage.8e407e46.js",
        "assets/PageArchive.7c34cfbd.js",
        "assets/ButtonClose.6db89761.js",
        "assets/Tag.e34f4724.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/Card11.f4148bfc.js",
        "assets/PostFeaturedMedia.890b02aa.js",
        "assets/PostCardLikeAction.d5fb4b97.js",
        "assets/Badge.470ee4ad.js",
        "assets/ncNanoId.025eca4e.js",
        "assets/NextPrev.496f13cc.js",
        "assets/hooks.ea7513ac.js",
        "assets/index.87904adc.js",
        "assets/ButtonPlayMusicRunningContainer.7a0e7bf7.js",
        "assets/PostCardMeta.78843450.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/BackgroundSection.7e357db3.js",
        "assets/SectionGridCategoryBox.046ca369.js",
        "assets/CardCategory5Skeleton.61cf348e.js",
        "assets/Heading.8b8253c2.js",
        "assets/NavItem.0af45266.js",
      ]
    )
  ),
  Ge = d.lazy(() =>
    q(
      () =>
        import("./PageArchive.7c34cfbd.js").then(function (e) {
          return e.d;
        }),
      [
        "assets/PageArchive.7c34cfbd.js",
        "assets/vendor.061fbf51.js",
        "assets/Card11Skeleton.a81f7c1d.js",
        "assets/NcImage.8e407e46.js",
        "assets/ButtonClose.6db89761.js",
        "assets/ButtonPrimary.14f185a8.js",
        "assets/Tag.e34f4724.js",
        "assets/DataStatementBlockV2.eabe0a43.js",
        "assets/EmptyState.98e2bbcc.js",
        "assets/Card11.f4148bfc.js",
        "assets/PostFeaturedMedia.890b02aa.js",
        "assets/PostCardLikeAction.d5fb4b97.js",
        "assets/Badge.470ee4ad.js",
        "assets/ncNanoId.025eca4e.js",
        "assets/NextPrev.496f13cc.js",
        "assets/hooks.ea7513ac.js",
        "assets/index.87904adc.js",
        "assets/ButtonPlayMusicRunningContainer.7a0e7bf7.js",
        "assets/PostCardMeta.78843450.js",
        "assets/formatDate.5c5d9c4d.js",
        "assets/BackgroundSection.7e357db3.js",
        "assets/SectionGridCategoryBox.046ca369.js",
        "assets/CardCategory5Skeleton.61cf348e.js",
        "assets/Heading.8b8253c2.js",
      ]
    )
  ),
  Ve = document.querySelectorAll("[data-is-react-component] "),
  qe = ({}) => {
    if (!Ve || !Ve.length) return null;
    return d.createElement(
      d.Fragment,
      null,
      Array.from(Ve).map((e, t) => {
        const n = e.getAttribute("data-is-react-component");
        if (!e || !n) return null;
        let r = e.getAttribute("data-component-props")
          ? JSON.parse(e.getAttribute("data-component-props") || "")
          : {};
        switch (("object" != typeof r && (r = []), n)) {
          case "PostCardDropdownShare":
            return I.createPortal(d.createElement(Ne, c({}, r)), e);
          case "SocialsShare":
            return I.createPortal(d.createElement(Re, c({}, r)), e);
          case "SingleRelatedGridPosts":
            return I.createPortal(
              d.createElement(
                m.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(ze, c({}, r))
              ),
              e
            );
          case "SingleMoreFromAuthorGridPosts":
            return I.createPortal(
              d.createElement(
                m.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(Ue, c({}, r))
              ),
              e
            );
          case "HeaderSingleGallery":
            return I.createPortal(
              d.createElement(
                m.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(je, c({}, r))
              ),
              e
            );
          case "HeaderSingleVideo":
            return I.createPortal(
              d.createElement(
                m.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(De, c({}, r))
              ),
              e
            );
          case "HeaderSingleAudio":
            return I.createPortal(
              d.createElement(
                m.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(Ce, c({}, r))
              ),
              e
            );
          case "PageArchive":
            return I.createPortal(
              d.createElement(
                m.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(Ge, c({}, r))
              ),
              e
            );
          case "PageArchiveDate":
            return I.createPortal(
              d.createElement(
                m.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(Fe, c({}, r))
              ),
              e
            );
          case "PageArchiveAuthor":
            return I.createPortal(
              d.createElement(
                m.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(Be, c({}, r))
              ),
              e
            );
          case "PageSearch":
            return I.createPortal(
              d.createElement(
                m.exports.Suspense,
                { fallback: d.createElement("div", null) },
                d.createElement(Me, c({}, r))
              ),
              e
            );
          case "SwitchDarkMode":
            return I.createPortal(d.createElement(Oe, c({}, r)), e);
          case "SearchDropdown":
            return I.createPortal(d.createElement(Le, c({}, r)), e);
          case "NavAccountDropdown":
            return I.createPortal(d.createElement(we, c({}, r)), e);
          default:
            return null;
        }
      })
    );
  },
  Qe = d.lazy(() =>
    q(
      () => import("./MediaRunningContainer.154060f3.js"),
      [
        "assets/MediaRunningContainer.154060f3.js",
        "assets/vendor.061fbf51.js",
        "assets/hooks.ea7513ac.js",
        "assets/index.87904adc.js",
        "assets/NcImage.8e407e46.js",
        "assets/PostCardLikeAction.d5fb4b97.js",
      ]
    )
  );
function Ye() {
  return d.createElement(
    d.Fragment,
    null,
    d.createElement(de, null),
    d.createElement(qe, null),
    d.createElement(ae, null),
    d.createElement(
      m.exports.Suspense,
      { fallback: d.createElement("div", null) },
      d.createElement(Qe, null)
    )
  );
}
var He = P({
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
var We = P({
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
var Je = P({
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
var Ke = P({
  name: "darkmode",
  initialState: { isDarkMode: !1 },
  reducers: {
    toogleDarkMode: (e) => ({ isDarkMode: !e.isDarkMode }),
    enableDarkMode: () => ({ isDarkMode: !0 }),
    disableDarkMode: () => ({ isDarkMode: !1 }),
  },
}).reducer;
var Xe = P({
  name: "pages",
  initialState: { currentPage: { type: "/", data: {} } },
  reducers: {
    changeCurrentPage: (e, t) => (e = i(c({}, e), { currentPage: t.payload })),
  },
}).reducer;
const Ze = P({
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
    removeMediaRunning: nt,
  } = Ze.actions,
  rt = (e) => e.mediaRunning;
const at = N(
    { key: "root", version: 1, storage: A, whitelist: ["darkmode"] },
    $({
      bookmark: He,
      postLike: We,
      darkmode: Ke,
      commentLikes: Je,
      pages: Xe,
      mediaRunning: Ze.reducer,
    })
  ),
  lt = [],
  ot = T({
    reducer: at,
    middleware: (e) =>
      e({ serializableCheck: { ignoredActions: [R, O, C, j, D, F] } }).concat(
        lt
      ),
  });
let st = L(ot);
if (
  (null == (e = window.frontendObject) ? void 0 : e.graphQLBasePath) &&
  !location.pathname.includes("/wp-admin/")
) {
  const e = new M({ typePolicies: { Query: { fields: {} } } }),
    t = new U({ uri: window.frontendObject.graphQLBasePath, cache: e });
  I.render(
    d.createElement(
      d.StrictMode,
      null,
      d.createElement(
        z,
        { store: ot },
        d.createElement(
          B,
          { loading: null, persistor: st },
          d.createElement(G, { client: t }, d.createElement(Ye, null))
        )
      )
    ),
    document.getElementById("root")
  );
}
export {
  xe as A,
  fe as G,
  Te as I,
  se as N,
  Ne as P,
  Re as S,
  pe as a,
  et as b,
  tt as c,
  be as d,
  he as e,
  ve as f,
  _e as g,
  ye as h,
  ge as i,
  nt as r,
  rt as s,
  Ie as t,
};
