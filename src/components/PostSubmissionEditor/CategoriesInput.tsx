import React, { FC, useEffect, useState } from "react";
import NcModal from "components/NcModal/NcModal";
import { useLazyQuery, gql } from "@apollo/client";
import ButtonPrimary from "components/Button/ButtonPrimary";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import NCMAZ_TRANSLATE from "contains/translate";
import { GET_LIST_CATEGORIES_NO_PARENT } from "containers/PageArchive/queryGraphql";
import NcImage from "components/NcImage/NcImage";
import { Categories } from "containers/PageArchive/ModalCategories";
import Skeleton from "react-loading-skeleton";
import { CategoriesNode3 } from "data/postCardType";
import GLOBAL_VARIABLE from "contains/globalVariable";

interface Data {
  categories: Categories;
}

export interface CategoriesInputProps {
  onChange: (categories: CategoriesNode3[]) => void;
  defaultValue?: CategoriesNode3[];
}

const CategoriesInput: FC<CategoriesInputProps> = ({
  onChange,
  defaultValue,
}) => {
  const POST_PER_PAGE = 30;
  const MAX_CATS_LENGTH = frontendObject.maxCategoriesLengSubmit || 5;

  const Q_LIST_CATS = gql`
    ${GET_LIST_CATEGORIES_NO_PARENT}
  `;

  const [categoriesSelected, setCategoriesSelected] = useState<
    CategoriesNode3[]
  >(defaultValue || []);

  useEffect(() => {
    onChange(categoriesSelected);
  }, [categoriesSelected.length]);

  const [getListCats, { loading, error, data, fetchMore }] = useLazyQuery<Data>(
    Q_LIST_CATS,
    { notifyOnNetworkStatusChange: true }
  );

  const handleClickOpen = () => {
    if (data?.categories.edges.length) {
      return;
    }
    getListCats({
      variables: { first: POST_PER_PAGE, order: "ASC" },
    });
  };

  // Function to update the query with the new results
  const updateQuery = (
    previousResult: Data,
    { fetchMoreResult }: { fetchMoreResult?: Data }
  ): Data => {
    if (!fetchMoreResult?.categories?.edges.length) {
      return previousResult;
    }
    return {
      ...fetchMoreResult,
      categories: {
        ...fetchMoreResult.categories,
        edges: [
          ...previousResult?.categories?.edges,
          ...fetchMoreResult?.categories?.edges,
        ],
      },
    };
  };

  const handleClickLoadmore = () => {
    if (!fetchMore) return;
    fetchMore({
      variables: {
        first: POST_PER_PAGE,
        after: data?.categories.pageInfo.endCursor || null,
      },
      updateQuery,
    });
  };

  const checkIncludes = (category: CategoriesNode3) => {
    return categoriesSelected.some((item) => item.id === category.id);
  };

  const handleChooseCategory = (categoryNode: CategoriesNode3) => {
    if (checkIncludes(categoryNode)) {
      setCategoriesSelected(
        categoriesSelected.filter((item) => item.id !== categoryNode.id)
      );
      return;
    }
    if (categoriesSelected.length >= MAX_CATS_LENGTH) {
      return;
    }
    setCategoriesSelected([...categoriesSelected, categoryNode]);
  };

  const renderCategoryItem = (cat: Categories["edges"][number]) => {
    const isActive = categoriesSelected.some((item) => item.id === cat.node.id);
    const disabled = categoriesSelected.length >= MAX_CATS_LENGTH && !isActive;
    return (
      <div
        className={`px-2 py-1 flex items-center justify-between rounded-2xl border border-neutral-100 dark:border-neutral-700  
        ${
          disabled
            ? ""
            : "hover:bg-neutral-50 dark:hover:bg-neutral-700 cursor-pointer"
        } ${isActive ? "!bg-primary-500 text-white" : ""}`}
        key={cat.node.id}
        onClick={() => handleChooseCategory(cat.node)}
      >
        <div className="flex items-center">
          <NcImage
            containerClassName="w-10 h-10 rounded-2xl overflow-hidden z-0"
            src={cat.node.ncTaxonomyMeta.featuredImage?.sourceUrl || "."}
            srcSet={cat.node.ncTaxonomyMeta.featuredImage?.srcSet}
            alt={cat.node.name}
            imageSizes="THUMBNAIL"
          />
          <span className="ml-2 text-sm"> {cat.node.name}</span>
        </div>

        {isActive && (
          <div className="flex-shrink-0 text-white ml-2">
            <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
              <circle cx="12" cy="12" r="12" fill="#fff" opacity="0.2"></circle>
              <path
                d="M7 13l3 3 7-7"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </div>
        )}
      </div>
    );
  };

  const IS_SKELETON = loading && !data?.categories.edges.length;

  const renderModalContent = () => {
    return (
      <div className="flex flex-col items-center space-y-8">
        {/* SECTION STATE */}
        <DataStatementBlockV2
          data={data?.categories.edges || []}
          isSkeleton={IS_SKELETON}
          error={error}
        />

        <div className="w-full grid gap-5 grid-cols-1 sm:grid-cols-2 sm:py-2 md:grid-cols-3 lg:grid-cols-4 xl:md:grid-cols-5">
          {IS_SKELETON &&
            Array.from("iiiiiiiiiiiiiiiiiiii").map((_, i) => (
              <div
                className="px-2 py-1 flex items-center border rounded-2xl border-neutral-300 border-opacity-30 cursor-pointer hover:border-opacity-100"
                key={i}
              >
                <NcImage
                  containerClassName="w-10 h-10 rounded-2xl overflow-hidden z-0"
                  src={"."}
                />

                <span className="ml-2.5 flex-grow text-sm">
                  <Skeleton width={"90%"} />
                </span>
              </div>
            ))}

          {(data?.categories.edges || []).map(renderCategoryItem)}
        </div>

        {data?.categories.pageInfo.hasNextPage && (
          <ButtonPrimary loading={loading} onClick={handleClickLoadmore}>
            {NCMAZ_TRANSLATE["showMeMore"]}
          </ButtonPrimary>
        )}
      </div>
    );
  };

  return (
    <div className="nc-CategoriesInput mt-8 inline-flex">
      <NcModal
        onOpenModal={handleClickOpen}
        triggerText={
          NCMAZ_TRANSLATE["Choose categories"] +
          `${
            categoriesSelected.length
              ? ` (${categoriesSelected.length} ${NCMAZ_TRANSLATE["selected"]})`
              : ""
          }`
        }
        modalTitle={`${NCMAZ_TRANSLATE["Choose categories"]} (${categoriesSelected.length}/${MAX_CATS_LENGTH})`}
        renderContent={renderModalContent}
        modalUnmountOnClose={false}
      />
    </div>
  );
};

export default CategoriesInput;
