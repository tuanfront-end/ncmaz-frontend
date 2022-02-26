import React, { FC, useState, useEffect } from "react";
import ArchiveFilterListBox from "components/ArchiveFilterListBox/ArchiveFilterListBox";
import { ListBoxItemType } from "components/NcListBox/NcListBox";
import SectionTrendingCategories from "./SectionTrendingCategories";
import { SectionCategoriesTrendingArchivePageOption } from "./PageArchive";
import ButtonCircle from "components/Button/ButtonCircle";
import Input from "components/Input/Input";
import NcImage from "components/NcImage/NcImage";
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
  sectionCategoriesTrending: SectionCategoriesTrendingArchivePageOption;
  listSuggestions: string[];
  headerBackgroundImg: {
    url?: string;
  };
}

// Khong de ben trong funtion. Vi de o trong se bi khoi tao lai khi re-render
const FILTERS = [
  { name: NCMAZ_TRANSLATE["filters"], value: "" },
  { name: NCMAZ_TRANSLATE["mostRecent"], value: "DATE" },
  { name: NCMAZ_TRANSLATE["mostLiked"], value: "FAVORITES_COUNT" },
  { name: NCMAZ_TRANSLATE["mostDiscussed"], value: "COMMENT_COUNT" },
  { name: NCMAZ_TRANSLATE["mostViewed"], value: "VIEWS_COUNT" },
];

//
type TabType = "Articles" | "Categories" | "Tags" | "Authors";
const TABS: TabType[] = ["Articles", "Categories", "Tags", "Authors"];

// Tag and category have same data type - we will use one demo data
const PageSearch: FC<PageSearchProps> = ({
  className = "",
  sectionCategoriesTrending,
  searchQuery,
  listSuggestions,
  headerBackgroundImg,
}) => {
  const [orderByState, setorderByState] = useState(FILTERS[0].value);
  const [tabActive, setTabActive] = useState<TabType>(TABS[0]);
  //
  const [totalCountResultString, setTotalCountResultString] = useState("");
  const [searchText, setSearchText] = useState(searchQuery);
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
  const handleChangeFilter = (item: ListBoxItemType) => {
    setorderByState(item.value);
  };

  const handleClickTab = (item: TabType) => {
    if (item === tabActive) {
      return;
    }
    setTabActive(item);
  };

  const handleSubmitFormSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const textValue = (
      document.getElementById("ncmaz-search-input") as HTMLInputElement
    )?.value;
    setSearchText(textValue);
  };

  const renderHeader = () => {
    return (
      <div className="w-screen px-2 max-w-full 2xl:max-w-screen-2xl mx-auto">
        <div className="rounded-3xl relative aspect-w-16 aspect-h-12 sm:aspect-h-7 xl:aspect-h-5 overflow-hidden ">
          <NcImage
            containerClassName="absolute inset-0"
            src={
              headerBackgroundImg.url ||
              `https://images.pexels.com/photos/2138922/pexels-photo-2138922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260`
            }
            className="object-cover w-full h-full"
          />
        </div>
        {/* CONTENT */}
        <div className="relative container -mt-20 lg:-mt-48">
          <div className=" bg-white dark:bg-neutral-900 dark:border dark:border-neutral-700 p-5 lg:p-16 rounded-[40px] shadow-2xl flex items-center">
            <header className="w-full max-w-3xl mx-auto text-center flex flex-col items-center">
              <h2 className="text-2xl sm:text-4xl font-semibold">
                {searchText ? searchText : `" "`}
              </h2>

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
                className="relative w-full mt-8 sm:mt-11 text-left"
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
                    sizeClass="pl-14 py-5 pr-5 md:pl-16"
                    defaultValue={searchText}
                  />
                  <ButtonCircle
                    className="absolute right-2.5 top-1/2 transform -translate-y-1/2"
                    size=" w-11 h-11"
                    type="submit"
                  >
                    <i className="las la-arrow-right text-xl"></i>
                  </ButtonCircle>
                  <span className="absolute left-5 top-1/2 transform -translate-y-1/2 text-2xl md:left-6">
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
                    <span className="mr-2.5 text-neutral-700">
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
    <div
      className={`nc-PageSearch overflow-hidden ${className}`}
      data-nc-id="PageSearch"
    >
      {/* HEADER */}
      {renderHeader()}
      {/* ====================== END HEADER ====================== */}

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <div>
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
            <div className="block my-4 border-b w-full border-neutral-100 sm:hidden"></div>
            {tabActive === "Articles" ? (
              <div className="flex justify-end">
                <ArchiveFilterListBox
                  onChangeSelect={handleChangeFilter}
                  lists={FILTERS}
                />
              </div>
            ) : null}
          </div>

          {renderContent()}
        </div>

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

export default PageSearch;
