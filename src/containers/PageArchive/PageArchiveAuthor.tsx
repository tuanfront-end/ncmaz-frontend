import React, { FC, useState, useEffect } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import { AuthorNode, ListPosts } from "data/postCardType";
import { useQuery, gql } from "@apollo/client";
import { POSTS_SECTION_BY_FILTER__string } from "./queryGraphql";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import {
  ArchiveOrderBy,
  ARCHIVE_PAGE_FILTERS,
  SectionCategoriesTrendingArchivePageOption,
} from "./PageArchive";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import NCMAZ_TRANSLATE from "contains/translate";
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
  userId: string | number;
  sectionCategoriesTrending: SectionCategoriesTrendingArchivePageOption;
  // NEU trang hien tai dang la cua minh => listIDFavorites = Favorites.userFavorites[0].posts
  listIDFavorites?: Record<number, number>;
  // Check xem co phai dang trong trang author cua minh khong
  isCurrentMyPage?: boolean;
  enableSidebar?: boolean;
}

// Khong de ben trong funtion. Vi de o trong se bi khoi tao lai khi re-render
const FILTERS = ARCHIVE_PAGE_FILTERS;
//

// Tag and category have same data type - we will use one demo data
const PageArchiveAuthor: FC<PageArchiveAuthorProps> = ({
  className = "",
  userId,
  listIDFavorites,
  isCurrentMyPage,
  enableSidebar = false,
}) => {
  let TABS: string[] = [];

  const TRANG_CUA_MINH = isCurrentMyPage;

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

  useEffect(() => {
    if (!TRANG_CUA_MINH) {
      return;
    }

    const pageDome = document.getElementById("nc-page-author-id");
    if (!pageDome) {
      return;
    }
    const cl = "nc_page_author_is_not_liked_articles_tab";
    if (tabActive !== NCMAZ_TRANSLATE["LikedArticles"]) {
      !pageDome.classList.contains(cl) && pageDome.classList.add(cl);
    } else {
      pageDome.classList.contains(cl) && pageDome.classList.remove(cl);
    }
  }, [tabActive, TRANG_CUA_MINH]);

  // CHEKC XEM DA XOA TOAN BO FAVORITES CHUA
  useEffect(() => {
    if (typeof jQuery !== "function" || !window.Favorites) {
      return;
    }
    jQuery(document).ajaxComplete(function (event, xhr, settings) {
      const dataSettings = settings?.data as string;
      const isAjaxClearAllFavorites = dataSettings?.includes(
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
      authorIn: [userId],
    };
  }

  // FAVORITES POSTS VARIABEL
  if (tabActive === NCMAZ_TRANSLATE["LikedArticles"]) {
    // GET LIST FAVORITES ID FROM PLUGIN FAVORITE JS GLOBALFavorites
    let inIDs: number[] | string[] | string = "";

    // VAO TRANG AUTHOR CUA USER KHAC
    if (!TRANG_CUA_MINH) {
      let userlistIds: number[] = [];
      try {
        userlistIds = Object.values(listIDFavorites || {});
      } catch (error) {}

      if (userlistIds.length) {
        inIDs = userlistIds;
      }
    } else {
      // TAI SAO KHONG SU DUNG LUON listIDFavorites cho trang cua minh: VI cua minh con update khi click like button,
      // trong khi do listIDFavorites co dinh global nen khong su dung duoc.Phai su dung userFavorites
      // userFavorites se tu dong cap nhat khi ta like/dislike a post
      if (!!window.Favorites?.userFavorites?.[0].posts) {
        const myIds = Object.keys(
          window.Favorites?.userFavorites?.[0].posts || {}
        );
        if (!!myIds.length) {
          inIDs = myIds;
        }
      } else {
        // co the internet cham nen variable Favorites?.userFavorites chua load duoc, khi do ta se su dung listIDFavorites
        inIDs = Object.values(listIDFavorites || {});
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
      authorIn: [userId],
      status: "DRAFT",
    };
  }

  // PENDING POSTS VARIABLE
  if (tabActive === NCMAZ_TRANSLATE["Pendings"]) {
    variables = {
      order: "DESC",
      field: orderByState,
      first: POST_PER_PAGE,
      authorIn: [userId],
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
        <ArchiveGridPost
          isSmallContainer={enableSidebar}
          is_skeleton={IS_SKELETON}
          posts={POSTS}
        />

        {/* PAGINATIONS */}
        {data?.posts.pageInfo?.hasNextPage && (
          <div className="flex justify-center mt-8 sm:mt-10 xl:mt-14">
            <ButtonPrimary onClick={handleClickLoadmore} loading={loading}>
              {NCMAZ_TRANSLATE["showMeMore"]}
            </ButtonPrimary>
          </div>
        )}
      </>
    );
  };

  return (
    <div>
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
    </div>
  );
};

export default PageArchiveAuthor;
