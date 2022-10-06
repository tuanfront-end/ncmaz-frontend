import React, { FC, useState, useEffect } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import { AuthorNode, ListPosts } from "data/postCardType";
import { useQuery, gql } from "@apollo/client";
import { POSTS_SECTION_BY_FILTER__string } from "./queryGraphql";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import SectionTrendingCategories from "./SectionTrendingCategories";
import {
  ArchiveOrderBy,
  ARCHIVE_PAGE_FILTERS,
  SectionCategoriesTrendingArchivePageOption,
} from "./PageArchive";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import NcImage from "components/NcImage/NcImage";
import Avatar from "components/Avatar/Avatar";
import NCMAZ_TRANSLATE from "contains/translate";
import Facebookpng from "images/IntegrationIcons/Facebook.png";
import githubpng from "images/IntegrationIcons/github.png";
import instagrampng from "images/IntegrationIcons/instagram.png";
import linkedinpng from "images/IntegrationIcons/linkedin.png";
import mediumpng from "images/IntegrationIcons/medium.png";
import pinterestpng from "images/IntegrationIcons/pinterest.png";
import twitchpng from "images/IntegrationIcons/twitch.png";
import twitterpng from "images/IntegrationIcons/twitter.png";
import vimeopng from "images/IntegrationIcons/vimeo.png";
import youtubepng from "images/IntegrationIcons/youtube.png";
import ButtonSecondary from "components/Button/ButtonSecondary";
import ArchiveGridPost from "./ArchiveGridPost";
import toast from "react-hot-toast";

interface Data {
  posts: ListPosts;
}

export interface AuthorSocialType {
  id: keyof AuthorNode["ncUserMeta"];
  name: string;
  iconPng: string;
  href: string;
}
export interface PageArchiveAuthorProps {
  className?: string;
  clearFavoritesButton?: string;
  userData: AuthorNode;
  sectionCategoriesTrending: SectionCategoriesTrendingArchivePageOption;
  // NEU listIDFavorites == undefined thi trang hien tai dang la cua minh => listIDFavorites = Favorites.userFavorites[0].posts
  listIDFavorites?: Record<number, number>;
  // Check xem co phai dang trong trang author cua minh khong
  isCurrentMyPage?: boolean;
}

// Khong de ben trong funtion. Vi de o trong se bi khoi tao lai khi re-render
const FILTERS = ARCHIVE_PAGE_FILTERS;
//

// Tag and category have same data type - we will use one demo data
const PageArchiveAuthor: FC<PageArchiveAuthorProps> = ({
  className = "",
  clearFavoritesButton,
  sectionCategoriesTrending,
  userData,
  listIDFavorites,
  isCurrentMyPage,
}) => {
  let TABS: string[] = [];

  const TRANG_CUA_MINH = isCurrentMyPage;
  if (TRANG_CUA_MINH && frontendObject.currentUser) {
    userData = frontendObject.currentUser as AuthorNode;
  }

  // VAO TRANG AUTHOR CUA USER KHAC
  if (!TRANG_CUA_MINH) {
    TABS = [NCMAZ_TRANSLATE["articles"], NCMAZ_TRANSLATE["LikedArticles"]];
  }
  // VAO TRANG AUTHOR CUA USER CUA MINH
  else {
    TABS = [
      NCMAZ_TRANSLATE["Published"],
      NCMAZ_TRANSLATE["LikedArticles"],
      NCMAZ_TRANSLATE["Drafts"],
      NCMAZ_TRANSLATE["Pendings"],
    ];
  }
  // NEU KHONG KICK HOAT PLUGIN FAVORITES
  if (!window.Favorites) {
    TABS = TABS.filter((item) => item !== NCMAZ_TRANSLATE["LikedArticles"]);
  }

  const POST_PER_PAGE =
    frontendObject.allSettings?.readingSettingsPostsPerPage || 20;

  const [orderByState, setorderByState] = useState(FILTERS[0].value);
  const [tabActive, setTabActive] = useState(TABS[0]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const orderByParam = urlParams.get("orderBy");
    const tabParam = urlParams.get("tab");
    const orderByParamCorrect: ArchiveOrderBy[] = [
      "COMMENT_COUNT",
      "DATE",
      "FAVORITES_COUNT",
      "VIEWS_COUNT",
    ];

    if (
      orderByParam &&
      orderByParamCorrect.includes(orderByParam as ArchiveOrderBy)
    ) {
      setorderByState(orderByParam as ArchiveOrderBy);
    }
    if (tabParam && TABS.includes(tabParam)) {
      setTabActive(tabParam);
    }
  }, []);

  // CHEKC XEM DA XOA TOAN BO FAVORITES CHUA
  useEffect(() => {
    if (typeof jQuery !== "function" || !window.Favorites) {
      return;
    }
    jQuery(document).ajaxComplete(function (event, xhr, settings) {
      const dataSettings = settings.data as string;
      const isAjaxClearAllFavorites = dataSettings.includes(
        "action=favorites_clear"
      );
      if (!isAjaxClearAllFavorites) {
        return;
      }
      if (xhr.status !== 200) {
        toast.error(
          `${xhr.statusText}: ${
            xhr.responseText || NCMAZ_TRANSLATE["somethingWentWrong"]
          }`
        );
      }
      location.search = "";
    });
  }, []);

  //
  let variables = {};

  // PUBLISHED POSTS
  if (tabActive === TABS[0]) {
    variables = {
      order: "DESC",
      field: orderByState,
      first: POST_PER_PAGE,
      authorIn: [userData.userId],
    };
  }

  // FAVORITES POSTS VARIABEL
  if (tabActive === NCMAZ_TRANSLATE["LikedArticles"]) {
    // GET LIST FAVORITES ID FROM PLUGIN FAVORITE JS GLOBALFavorites
    let inIDs: number[] | string[] | string = "";

    // VAO TRANG AUTHOR CUA USER KHAC
    if (!TRANG_CUA_MINH) {
      if (listIDFavorites) {
        let userlistIds: number[] = [];
        try {
          userlistIds = Object.values(listIDFavorites);
        } catch (error) {}

        if (userlistIds.length) {
          inIDs = userlistIds;
        }
      }
    } else {
      // VAO TRANG AUTHOR CUA MINH (listIDFavorites = undefined)
      // TAI SAO KHONG SU DUNG LUON listIDFavorites cho trang cua minh: VI cua minh con update khi click like button,
      // trong khi do listIDFavorites co dinh global nen khong su dung duoc.Phai su dung userFavorites
      // userFavorites se tu dong cap nhat khi ta like/dislike a post
      if (
        window.Favorites &&
        Favorites?.userFavorites &&
        Favorites.userFavorites[0] &&
        Favorites.userFavorites[0].posts
      ) {
        const myIds = Object.keys(Favorites.userFavorites[0].posts);
        if (!!myIds.length) {
          inIDs = myIds;
        }
      }
    }

    variables = {
      order: "DESC",
      first: 100,
      in: inIDs.length ? inIDs : "",
    };
  }

  // DRAFTS POSTS VARIABLE
  if (tabActive === NCMAZ_TRANSLATE["Drafts"]) {
    variables = {
      order: "DESC",
      field: orderByState,
      first: POST_PER_PAGE,
      authorIn: [userData.userId],
      status: "DRAFT",
    };
  }

  // PENDING POSTS VARIABLE
  if (tabActive === NCMAZ_TRANSLATE["Pendings"]) {
    variables = {
      order: "DESC",
      field: orderByState,
      first: POST_PER_PAGE,
      authorIn: [userData.userId],
      status: "PENDING",
    };
  }

  const gqlQuery = gql`
    ${POSTS_SECTION_BY_FILTER__string}
  `;

  const { loading, error, data, fetchMore } = useQuery<Data>(gqlQuery, {
    notifyOnNetworkStatusChange: true,
    variables,
  });

  const POSTS = data?.posts.edges || [];
  const { ncUserMeta, name, description, avatar } = userData;
  //
  // youtube_url,facebook_url,medium_url,github_url,vimeo_url,twitter_url,instagram_url,linkedin_url,pinterest_url,twitch_url,website_url
  let userSocials: AuthorSocialType[] = [
    {
      id: "youtubeUrl",
      name: "Youtube",
      iconPng: youtubepng,
      href: ncUserMeta.youtubeUrl || "",
    },
    {
      id: "facebookUrl",
      name: "Facebook",
      iconPng: Facebookpng,
      href: ncUserMeta.facebookUrl || "",
    },
    {
      id: "mediumUrl",
      name: "Medium",
      iconPng: mediumpng,
      href: ncUserMeta.mediumUrl || "",
    },
    {
      id: "githubUrl",
      name: "Github",
      iconPng: githubpng,
      href: ncUserMeta.githubUrl || "",
    },
    {
      id: "vimeoUrl",
      name: "Vimeo",
      iconPng: vimeopng,
      href: ncUserMeta.vimeoUrl || "",
    },
    {
      id: "twitterUrl",
      name: "Twitter",
      iconPng: twitterpng,
      href: ncUserMeta.twitterUrl || "",
    },
    {
      id: "instagramUrl",
      name: "Instagram",
      iconPng: instagrampng,
      href: ncUserMeta.instagramUrl || "",
    },
    {
      id: "linkedinUrl",
      name: "LinkedIn",
      iconPng: linkedinpng,
      href: ncUserMeta.linkedinUrl || "",
    },
    {
      id: "pinterestUrl",
      name: "Pinterest",
      iconPng: pinterestpng,
      href: ncUserMeta.pinterestUrl || "",
    },
    {
      id: "twitchUrl",
      name: "Twitch",
      iconPng: twitchpng,
      href: ncUserMeta.twitchUrl || "",
    },
  ];
  userSocials = userSocials.filter((item) => !!item.href);
  // Function to update the query with the new results
  const updateQuery = (
    previousResult: Data,
    { fetchMoreResult }: { fetchMoreResult?: Data }
  ): Data => {
    if (!fetchMoreResult?.posts?.edges.length) return previousResult;
    return {
      ...fetchMoreResult,
      posts: {
        ...fetchMoreResult.posts,
        edges: [
          ...previousResult?.posts?.edges,
          ...fetchMoreResult?.posts?.edges,
        ],
      },
    };
  };

  const setHistoryStateParams = (tab: string, order: ArchiveOrderBy) => {
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set("tab", tab);
    queryParams.set("orderBy", order);
    history.replaceState(null, "", `?${queryParams.toString()}`);
  };

  const handleClickTab = (item: string) => {
    setTabActive(item);
    setHistoryStateParams(item, orderByState);
  };

  const handleChangeFilter = (item: typeof ARCHIVE_PAGE_FILTERS[number]) => {
    setorderByState(item.value);
    setHistoryStateParams(tabActive, item.value);
  };

  const handleClickLoadmore = () => {
    if (!fetchMore) return;
    const notIn = POSTS.map((item) => item.node.postId);
    fetchMore({
      variables: {
        first: POST_PER_PAGE,
        notIn,
      },
      updateQuery,
    });
  };

  const IS_SKELETON = loading && !POSTS.length;

  const renderContent = () => {
    return (
      <>
        {/* SECTION STATE */}
        <DataStatementBlockV2
          className="my-10"
          data={POSTS}
          error={error}
          isSkeleton={IS_SKELETON}
        />

        {/* LOOP ITEMS */}
        <ArchiveGridPost is_skeleton={IS_SKELETON} posts={POSTS} />

        {/* PAGINATIONS */}
        {data?.posts.pageInfo?.hasNextPage && (
          <div className="flex justify-center mt-8 sm:mt-10 lg:mt-14">
            <ButtonPrimary onClick={handleClickLoadmore} loading={loading}>
              {NCMAZ_TRANSLATE["showMeMore"]}
            </ButtonPrimary>
          </div>
        )}
      </>
    );
  };

  const IS_SHOW_CLEAR_FAVORITES =
    clearFavoritesButton &&
    window.Favorites &&
    TRANG_CUA_MINH &&
    tabActive === NCMAZ_TRANSLATE["LikedArticles"] &&
    !!POSTS.length;
  return (
    <div
      className={`nc-PageArchiveAuthor ${className}`}
      data-nc-id="PageArchiveAuthor"
    >
      {/* HEADER */}
      <div className="w-full">
        <div className="relative aspect-w-16 aspect-h-9 sm:aspect-h-6 lg:aspect-h-5 xl:aspect-h-4 2xl:aspect-h-3">
          <NcImage
            containerClassName="absolute inset-0"
            src={
              ncUserMeta?.backgroundImage?.sourceUrl ||
              frontendObject.authorPageCoverImgDefault ||
              "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
            srcSet={ncUserMeta.backgroundImage?.srcSet}
            imageSizes="_1536X1536"
            className="object-cover w-full h-full"
            loading="eager"
          />
        </div>
        <div className="relative px-1 sm:container -mt-20 lg:-mt-32">
          <div
            className="relative bg-white dark:bg-neutral-800 dark:border dark:border-neutral-700 p-4 sm:p-5 lg:p-8 rounded-3xl lg:rounded-[32px] shadow-xl 
          flex flex-col sm:flex-row sm:items-center"
          >
            <div className="flex-shrink-0 ">
              <Avatar
                containerClassName="ring-4 ring-white dark:ring-0 shadow-xl"
                imgUrl={ncUserMeta.featuredImage?.sourceUrl || avatar?.url}
                srcSet={
                  ncUserMeta.featuredImage?.sourceUrl
                    ? ncUserMeta.featuredImage?.srcSet
                    : undefined
                }
                loading="eager"
                userName={name}
                sizeClass="w-28 h-28 sm:w-32 sm:h-32 lg:w-44 lg:h-44 text-3xl xl:text-5xl"
                radius="rounded-3xl"
                imageSizes="MEDIUM"
              />
              {!!ncUserMeta.buymeacoffeUrl && (
                <a
                  className="flex sm:justify-center lg:hidden mt-3"
                  href={ncUserMeta.buymeacoffeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={
                      ncmazFrontendVariables.pluginDistImagesDir +
                      "buymeacoffee.svg"
                    }
                    alt="buy-me-a-coffee"
                    className="w-28 rounded-xl shadow-xl"
                  />
                </a>
              )}
            </div>

            <div className="flex-grow mt-5 sm:mt-0 sm:ml-8 max-w-lg xl:max-w-2xl space-y-3">
              <h1 className="inline-flex items-center text-2xl sm:text-2xl lg:text-4xl font-bold lg:font-semibold">
                {name}
              </h1>

              {description ? (
                <span
                  className="block text-sm text-neutral-500 dark:text-neutral-400"
                  dangerouslySetInnerHTML={{
                    __html: description || "",
                  }}
                ></span>
              ) : null}

              {!!ncUserMeta.websiteUrl && (
                <a
                  href={ncUserMeta.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-xs font-medium space-x-2.5 cursor-pointer text-neutral-500 dark:text-neutral-400 truncate"
                >
                  <svg
                    className="flex-shrink-0 w-4 h-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 3C16.95 8.84 16.95 15.16 15 21"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <span className="text-neutral-700 dark:text-neutral-300 truncate">
                    {ncUserMeta.websiteUrl}
                  </span>
                </a>
              )}

              {userSocials.length ? (
                <nav
                  className={`nc-SocialsList flex flex-wrap text-2xl text-neutral-6000 dark:text-neutral-300 `}
                >
                  {userSocials.map((item, i) => (
                    <a
                      key={i}
                      className={`block w-7 h-7 mr-2.5 my-0.5`}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      title={item.name}
                    >
                      <img src={item.iconPng} alt={item.name} />
                    </a>
                  ))}
                </nav>
              ) : null}

              {IS_SHOW_CLEAR_FAVORITES && (
                <div
                  className="PageArchiveAuthor__clearFavoritesButton inline-flex lg:hidden"
                  dangerouslySetInnerHTML={{
                    __html: clearFavoritesButton,
                  }}
                ></div>
              )}
            </div>

            <div className="flex flex-col space-y-2.5 absolute top-0 right-0 p-5 lg:p-8">
              {TRANG_CUA_MINH && (
                <ButtonSecondary
                  className="!rounded-xl"
                  sizeClass="px-3 py-2 sm:px-6"
                  href={frontendObject.pageNcmazAccountUrl}
                >
                  <span className="hidden lg:block">
                    {NCMAZ_TRANSLATE["Edit profile"]}
                  </span>
                  <span className="block lg:hidden">
                    <i className="las la-user-edit text-xl"></i>
                  </span>
                </ButtonSecondary>
              )}
              {!!ncUserMeta.buymeacoffeUrl && (
                <a
                  className="hidden lg:block"
                  href={ncUserMeta.buymeacoffeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="buy-me-a-coffee"
                >
                  <img
                    src={
                      ncmazFrontendVariables.pluginDistImagesDir +
                      "buymeacoffee.svg"
                    }
                    alt="buy-me-a-coffee"
                    className="w-36 rounded-xl shadow-xl hover:opacity-80 transition-opacity"
                  />
                </a>
              )}

              {IS_SHOW_CLEAR_FAVORITES && (
                <div
                  className="PageArchiveAuthor__clearFavoritesButton hidden lg:block"
                  dangerouslySetInnerHTML={{
                    __html: clearFavoritesButton,
                  }}
                ></div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:pb-24 lg:pt-20 space-y-16 lg:space-y-24">
        <main>
          {/* TABS FILTER */}
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <Nav
              containerClassName="flex-1 sm:pr-5 overflow-hidden"
              className="lg:space-x-2 overflow-x-auto hiddenScrollbar"
            >
              {TABS.map((item, index) => (
                <NavItem
                  key={index}
                  isActive={tabActive === item}
                  onClick={() => handleClickTab(item)}
                >
                  {item}
                </NavItem>
              ))}
            </Nav>
            <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
            <div className="flex flex-shrink-0 justify-end">
              <ArchiveFilterListBox
                lists={FILTERS}
                onChangeSelect={handleChangeFilter as any}
                defaultValue={orderByState}
              />
            </div>
          </div>

          {renderContent()}
        </main>

        {sectionCategoriesTrending.enable && (
          <SectionTrendingCategories
            {...sectionCategoriesTrending}
            isCategory={false}
          />
        )}
      </div>
    </div>
  );
};

export default PageArchiveAuthor;
