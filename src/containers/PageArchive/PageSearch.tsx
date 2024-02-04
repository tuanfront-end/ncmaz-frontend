import React, { FC, useState, useEffect } from "react";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import { SectionCategoriesTrendingArchivePageOption } from "./PageArchive";
import ButtonCircle from "components/Button/ButtonCircle";
import Input from "components/Input/Input";
import Nav from "components/Nav/Nav";
import NavItem from "components/NavItem/NavItem";
import TabCategoriesOnSearchPage from "./TabCategoriesOnSearchPage";
import TabArticlesOnSearchPage from "./TabArticlesOnSearchPage";
import TabTagsOnSearchPage from "./TabTagsOnSearchPage";
import TabAuthorsOnSearchPage from "./TabAuthorsOnSearchPage";
import Skeleton from "react-loading-skeleton";
import NCMAZ_TRANSLATE from "contains/translate";

export interface PageSearchProps {
  className?: string;
  searchQuery: string;
  listSuggestions: string[];
  enableSidebar?: boolean;
}

// Khong de ben trong funtion. Vi de o trong se bi khoi tao lai khi re-render
export type SearchPageOrderBy =
  | ""
  | "DATE"
  | "FAVORITES_COUNT"
  | "COMMENT_COUNT"
  | "VIEWS_COUNT";

const FILTERS: {
  name: string;
  value: SearchPageOrderBy;
}[] = window.frontendObject.isActivePluginFavorites
  ? [
      { name: NCMAZ_TRANSLATE["filters"], value: "" },
      { name: NCMAZ_TRANSLATE["mostRecent"], value: "DATE" },
      { name: NCMAZ_TRANSLATE["mostLiked"], value: "FAVORITES_COUNT" },
      { name: NCMAZ_TRANSLATE["mostDiscussed"], value: "COMMENT_COUNT" },
      { name: NCMAZ_TRANSLATE["mostViewed"], value: "VIEWS_COUNT" },
    ]
  : [
      { name: NCMAZ_TRANSLATE["filters"], value: "" },
      { name: NCMAZ_TRANSLATE["mostRecent"], value: "DATE" },
      { name: NCMAZ_TRANSLATE["mostDiscussed"], value: "COMMENT_COUNT" },
      { name: NCMAZ_TRANSLATE["mostViewed"], value: "VIEWS_COUNT" },
    ];

//
type TabType = "Articles" | "Categories" | "Tags" | "Authors";
const TABS: TabType[] = ["Articles", "Categories", "Tags", "Authors"];

// Tag and category have same data type - we will use one demo data
const PageSearch: FC<PageSearchProps> = ({
  className = "",
  searchQuery,
  listSuggestions,
  enableSidebar = false,
}) => {
  const [orderByState, setorderByState] = useState(FILTERS[0].value);
  const [tabActive, setTabActive] = useState<TabType>(TABS[0]);
  //
  const [totalCountResultString, setTotalCountResultString] = useState("");
  const [searchText, setSearchText] = useState(searchQuery);
  //
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const orderByParam = urlParams.get("orderBy");
    const tabParam = urlParams.get("tab");
    const orderByParamCorrect: SearchPageOrderBy[] = [
      "",
      "COMMENT_COUNT",
      "DATE",
      "FAVORITES_COUNT",
      "VIEWS_COUNT",
    ];

    if (orderByParamCorrect.includes(orderByParam as SearchPageOrderBy)) {
      setorderByState((orderByParam as SearchPageOrderBy) || "");
    }
    if (tabParam && TABS.includes(tabParam as TabType)) {
      setTabActive(tabParam as TabType);
    }
  }, []);
  //
  useEffect(() => {
    const inputEl = document.getElementById(
      "ncmaz-search-input"
    ) as HTMLInputElement;
    if (!inputEl) {
      return;
    }
    inputEl.value = searchText;
  }, [searchText]);
  //
  const handleChangeFilter = (item: typeof FILTERS[number]) => {
    setorderByState(item.value);
    setHistoryStateParams(searchText, tabActive, item.value);
  };

  const handleClickTab = (item: TabType) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
    if (item === "Articles") {
      setHistoryStateParams(searchText, item, orderByState);
    } else {
      setHistoryStateParams(searchText, item);
    }
  };

  const setHistoryStateParams = (
    search: string,
    tab: TabType,
    order?: SearchPageOrderBy
  ) => {
    let queryParams = new URLSearchParams(window.location.search);
    queryParams.set("s", search);
    queryParams.set("tab", tab);
    if (tab === "Articles") {
      if (!!order) {
        queryParams.set("orderBy", order);
      } else {
        queryParams.delete("orderBy");
      }
    } else {
      queryParams.delete("orderBy");
    }

    history.replaceState(null, "", `?${queryParams.toString()}`);
  };

  const handleSubmitFormSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const textValue = (
      document.getElementById("ncmaz-search-input") as HTMLInputElement
    )?.value;
    setSearchText(textValue);

    // Replace current querystring with the new one.
    if (tabActive === "Articles") {
      setHistoryStateParams(textValue, tabActive, orderByState);
    } else {
      setHistoryStateParams(textValue, tabActive);
    }
  };

  const renderHeader = () => {
    return (
      <div className="relative px-1 -mt-20 lg:-mt-40">
        <div className=" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-4 sm:p-5 lg:p-12 rounded-lg sm:rounded-3xl lg:rounded-[32px] shadow-xl flex items-center">
          <header className="w-full max-w-3xl mx-auto text-center flex flex-col items-center">
            <h1 className="text-xl sm:text-3xl md:text-4xl font-semibold">
              {searchText ? searchText : `" "`}
            </h1>

            {totalCountResultString ? (
              <div
                className="text-xs sm:text-sm mt-4 text-neutral-500 dark:text-neutral-300"
                dangerouslySetInnerHTML={{ __html: totalCountResultString }}
              ></div>
            ) : (
              <div className="flex-shrink w-full max-w-md mt-4 text-sm">
                <Skeleton />
              </div>
            )}
            <form
              className="relative w-full mt-5 sm:mt-8 md:mt-11 text-left"
              method="post"
              onSubmit={handleSubmitFormSearch}
            >
              <label
                htmlFor="search-input"
                className="text-neutral-500 dark:text-neutral-300"
              >
                <span className="sr-only">Search all icons</span>
                <Input
                  id="ncmaz-search-input"
                  type="search"
                  placeholder={NCMAZ_TRANSLATE["typeAndPressEnter"]}
                  sizeClass="pl-10 sm:pl-14 py-4 sm:py-5 pr-4 sm:pr-5 md:pl-16"
                  className="placeholder:text-sm"
                  defaultValue={searchText}
                />
                <ButtonCircle
                  className="absolute right-1.5 sm:right-2.5 top-1/2 transform -translate-y-1/2"
                  size=" w-11 h-11"
                  type="submit"
                >
                  <i className="las la-arrow-right text-xl"></i>
                </ButtonCircle>
                <span className="absolute left-3 sm:left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6">
                  <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M19.25 19.25L15.5 15.5M4.75 11C4.75 7.54822 7.54822 4.75 11 4.75C14.4518 4.75 17.25 7.54822 17.25 11C17.25 14.4518 14.4518 17.25 11 17.25C7.54822 17.25 4.75 14.4518 4.75 11Z"
                    ></path>
                  </svg>
                </span>
              </label>
            </form>
            {listSuggestions && listSuggestions.length ? (
              <div className="w-full text-sm text-left mt-4 text-neutral-500 dark:text-neutral-300">
                <div className="inline-block text-primary-500">
                  <span className="mr-2.5 text-neutral-700 dark:text-neutral-300">
                    {NCMAZ_TRANSLATE["suggestions"]}:
                  </span>

                  {listSuggestions.map((item, index) => (
                    <p
                      key={index}
                      className="mr-2.5 inline-block cursor-pointer"
                      onClick={() => setSearchText(item)}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            ) : null}
          </header>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    let s = ` ${NCMAZ_TRANSLATE["wereFoundForKeyword"]} <strong>${
      searchText || `" "`
    }</strong>`;
    switch (tabActive) {
      case "Articles":
        return (
          <TabArticlesOnSearchPage
            isSmallContainer={enableSidebar}
            orderByState={orderByState}
            searchText={searchText}
            onUpdateTotal={(totalString) => {
              s = `<strong>${totalString}</strong>` + s;
              setTotalCountResultString(s);
            }}
          />
        );
      case "Categories":
        return (
          <TabCategoriesOnSearchPage
            onUpdateTotal={(totalString) => {
              s = `<strong>${totalString}</strong>` + s;
              setTotalCountResultString(s);
            }}
            searchText={searchText}
          />
        );
      case "Tags":
        return (
          <TabTagsOnSearchPage
            onUpdateTotal={(totalString) => {
              s = `<strong>${totalString}</strong>` + s;
              setTotalCountResultString(s);
            }}
            searchText={searchText}
          />
        );
      case "Authors":
        return (
          <TabAuthorsOnSearchPage
            onUpdateTotal={(totalString) => {
              s = `<strong>${totalString}</strong>` + s;
              setTotalCountResultString(s);
              setTotalCountResultString(s);
            }}
            searchText={searchText}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* HEADER */}
      {renderHeader()}
      {/* ====================== END HEADER ====================== */}

      <div className="pt-16 lg:pt-20">
        <div className="flex flex-col sm:items-center sm:justify-between sm:flex-row">
          <Nav
            containerClassName="w-full overflow-x-auto hiddenScrollbar"
            className="sm:space-x-2"
          >
            {TABS.map((item, index) => (
              <NavItem
                key={index}
                isActive={tabActive === item}
                onClick={() => handleClickTab(item)}
              >
                {item === "Articles" && NCMAZ_TRANSLATE["articles"]}
                {item === "Authors" && NCMAZ_TRANSLATE["authors"]}
                {item === "Categories" && NCMAZ_TRANSLATE["categories"]}
                {item === "Tags" && NCMAZ_TRANSLATE["tags"]}
              </NavItem>
            ))}
          </Nav>
          <div className="block my-4 border-b w-full border-neutral-100 dark:border-neutral-6000 sm:hidden"></div>
          {tabActive === "Articles" ? (
            <div className="flex justify-end">
              <ArchiveFilterListBox
                lists={FILTERS}
                onChangeSelect={handleChangeFilter as any}
                defaultValue={orderByState}
              />
            </div>
          ) : null}
        </div>

        {renderContent()}
      </div>
    </>
  );
};

export default PageSearch;
