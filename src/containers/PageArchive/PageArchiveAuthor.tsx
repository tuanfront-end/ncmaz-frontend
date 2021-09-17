import React, { FC, useState } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import Card11 from "components/Card11/Card11";
import { AuthorNode, ListPosts } from "data/postCardType";
import { useQuery, gql } from "@apollo/client";
import { POSTS_SECTION_BY_FILTER__string } from "./queryGraphql";
import Card11Skeleton from "components/Card11/Card11Skeleton";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import SectionTrendingCategories from "./SectionTrendingCategories";
import {
  ARCHIVE_PAGE_FILTERS,
  SectionCategoriesTrendingArchivePageOption,
} from "./PageArchive";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import NcImage from "components/NcImage/NcImage";
import Avatar from "components/Avatar/Avatar";
import SocialsList from "components/SocialsList/SocialsList";
import { ListBoxItemType } from "components/NcListBox/NcListBox";
import { SocialType } from "components/SocialsShare/SocialsShare";

interface Data {
  posts: ListPosts;
}

export interface PageArchiveAuthorProps {
  className?: string;
  userData: AuthorNode;
  //
  sectionCategoriesTrending: SectionCategoriesTrendingArchivePageOption;

  // NEU listIDFavorites == undefined thi trang hien tai dang la cua minh => listIDFavorites = Favorites.userFavorites[0].posts
  listIDFavorites?: Record<number, number>;
}

// Khong de ben trong funtion. Vi de o trong se bi khoi tao lai khi re-render
const FILTERS = ARCHIVE_PAGE_FILTERS;
//
const TABS = ["Articles", "Liked Articles"];

// Tag and category have same data type - we will use one demo data
const PageArchiveAuthor: FC<PageArchiveAuthorProps> = ({
  className = "",
  sectionCategoriesTrending,
  userData,
  listIDFavorites,
}) => {
  const POST_PER_PAGE =
    frontendObject.allSettings?.readingSettingsPostsPerPage || 20;

  const [orderByState, setorderByState] = useState(FILTERS[0].value);
  const [tabActive, setTabActive] = useState(TABS[0]);
  //
  let variables = {};
  //
  if (tabActive === TABS[0]) {
    variables = {
      order: "DESC",
      field: orderByState,
      first: POST_PER_PAGE,
      authorIn: [userData.userId],
    };
  }

  // FAVORITES POSTS VARIABEL
  if (tabActive === TABS[1]) {
    // GET LIST FAVORITES ID FROM PLUGIN FAVORITE JS GLOBALFavorites
    let inIDs: number[] | string[] | string = "";

    // VAO TRANG AUTHOR CUA USER KHAC
    if (listIDFavorites) {
      const userlistIds = Object.values(listIDFavorites);
      if (userlistIds.length) {
        inIDs = userlistIds;
      }
    } else {
      // VAO TRANG AUTHOR CUA MINH (listIDFavorites = undefined)
      // TAI SAO KHONG SU DUNG LUON listIDFavorites cho trang cua minh: VI cua minh con update khi click like button,
      // trong khi do listIDFavorites co dinh global nen khong su dung duoc.Phai su dung userFavorites
      if (
        Favorites.userFavorites &&
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

  const gqlQuery = gql`
    ${POSTS_SECTION_BY_FILTER__string}
  `;

  const { loading, error, data, fetchMore } = useQuery<Data>(gqlQuery, {
    notifyOnNetworkStatusChange: true,
    variables,
  });

  const POSTS = data?.posts.edges || [];
  //

  const userSocials: SocialType[] = [
    {
      id: "Facebook",
      name: "Facebook",
      icon: "lab la-facebook-square",
      href: userData.ncUserMeta.facebookUrl || "",
    },
    {
      id: "Twitter",
      name: "Twitter",
      icon: "lab la-twitter",
      href: userData.ncUserMeta.twitterUrl || "",
    },
    {
      id: "Youtube",
      name: "Youtube",
      icon: "lab la-youtube",
      href: userData.ncUserMeta.youtubeUrl || "",
    },
    {
      id: "Instagram",
      name: "Instagram",
      icon: "lab la-instagram",
      href: userData.ncUserMeta.instagramUrl || "",
    },
  ].filter((item) => !!item.href);

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

  const handleClickTab = (item: string) => {
    setTabActive(item);
  };

  const handleChangeFilter = (item: ListBoxItemType) => {
    setorderByState(item.value);
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
          className="my-5"
          data={POSTS}
          error={error}
          isSkeleton={IS_SKELETON}
        />

        {/* LOOP ITEMS */}
        {IS_SKELETON || POSTS.length ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 mt-8 lg:mt-10">
            {IS_SKELETON &&
              Array.from("88888888").map((_, index) => (
                <Card11Skeleton key={index} />
              ))}
            {POSTS.map((post) => (
              <Card11 key={post.node.id} post={post.node} />
            ))}
          </div>
        ) : null}

        {/* PAGINATIONS */}
        {data?.posts.pageInfo?.hasNextPage && (
          <div className="flex justify-center mt-12 lg:mt-16">
            <ButtonPrimary onClick={handleClickLoadmore} loading={loading}>
              Show me more
            </ButtonPrimary>
          </div>
        )}
      </>
    );
  };

  return (
    <div
      className={`nc-PageArchiveAuthor ${className}`}
      data-nc-id="PageArchiveAuthor"
    >
      {/* HEADER */}
      <div className="w-screen px-2 max-w-full 2xl:max-w-screen-2xl mx-auto">
        <div className="rounded-3xl relative aspect-w-16 aspect-h-12 sm:aspect-h-7 xl:aspect-h-5 overflow-hidden ">
          <NcImage
            containerClassName="absolute inset-0"
            src={
              userData.ncUserMeta?.backgroundImage?.sourceUrl ||
              "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            }
            className="object-cover w-full h-full"
          />
        </div>
        <div className="relative container -mt-20 lg:-mt-48">
          <div className=" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex flex-col sm:flex-row sm:items-center">
            <Avatar
              containerClassName="ring-4 ring-white dark:ring-0 shadow-2xl"
              imgUrl={
                userData.ncUserMeta.featuredImage?.sourceUrl ||
                userData.avatar.url
              }
              userName={userData.name}
              sizeClass="w-20 h-20 text-xl lg:text-2xl lg:w-36 lg:h-36"
              radius="rounded-full"
            />
            <div className="mt-5 sm:mt-0 sm:ml-8 space-y-4 max-w-lg">
              <h2 className="inline-block text-2xl sm:text-3xl md:text-4xl font-semibold">
                {userData.name}
              </h2>
              {userData.description ? (
                <span
                  className="block text-sm text-neutral-6000 dark:text-neutral-300 md:text-base"
                  dangerouslySetInnerHTML={{
                    __html: userData.description || "",
                  }}
                ></span>
              ) : null}
              {userSocials.length ? (
                <SocialsList socials={userSocials} />
              ) : null}
            </div>
          </div>
        </div>
      </div>
      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <main>
          {/* TABS FILTER */}
          <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
            <Nav className="sm:space-x-2">
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
            <div className="flex justify-end">
              <ArchiveFilterListBox
                lists={FILTERS}
                onChangeSelect={handleChangeFilter}
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
