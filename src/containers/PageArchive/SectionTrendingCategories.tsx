import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionGridCategoryBox from "components/SectionGridCategoryBox/SectionGridCategoryBox";
import React, { FC } from "react";
import { useQuery, gql } from "@apollo/client";
import { PageInfo } from "containers/SingleComments/commentType";
import { CategoriesNode3 } from "data/postCardType";
import { GET_LIST_CATEGORIES } from "./queryGraphql";
import DataStatementBlockV2 from "components/DataStatementBlock/DataStatementBlockV2";
import { SectionCategoriesTrendingArchivePageOption } from "./PageArchive";

interface QCatsData {
  categories: Categories;
}
interface Categories {
  edges: Edge[];
  pageInfo: PageInfo;
  __typename: string;
}
interface Edge {
  node: CategoriesNode3;
  __typename: string;
}

let DATA: Edge[] = [];

export interface SectionTrendingCategoriesProps
  extends SectionCategoriesTrendingArchivePageOption {
  parentId?: number;
  isCategory: boolean;
}

const SectionTrendingCategories: FC<SectionTrendingCategoriesProps> = ({
  enable,
  orderBy,
  heading,
  subHeading,
  itemPerPage,
  parentId,
  isCategory,
}) => {
  //
  if (!enable) return null;

  // GET CATEGORIES FOR SECTION CAT_TRENDING
  const Q_LIST_CATS = gql`
    ${GET_LIST_CATEGORIES}
  `;

  let filterOrderby: null | string = "NAME";
  let filterByParentId: null | number = null;
  if (orderBy === "count") {
    filterOrderby = "COUNT";
  }
  if (orderBy === "term_order") {
    filterOrderby = "TERM_ORDER";
  }
  if (orderBy === "is_child") {
    if (isCategory && parentId) {
      filterOrderby = null;
      filterByParentId = parentId;
    } else {
      filterOrderby = "COUNT";
    }
  }

  const { data, error, loading } = useQuery<QCatsData>(Q_LIST_CATS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      first: Number(itemPerPage) || 5,
      orderby: filterOrderby,
      parent: filterByParentId,
    },
  });

  DATA = data?.categories.edges || [];

  const IS_SKELETON = loading && !DATA.length;

  return (
    <>
      {/* MORE SECTIONS */}
      <div className="relative py-16">
        <BackgroundSection />

        <SectionGridCategoryBox
          categories={DATA}
          heading={heading}
          subHeading={subHeading}
          isLoadingSkeleton={IS_SKELETON}
        />

        {/* SECTION STATE */}
        <div className="relative mx-auto flex justify-center">
          <DataStatementBlockV2
            data={DATA}
            error={error}
            isSkeleton={IS_SKELETON}
          />
        </div>
      </div>
    </>
  );
};

export default SectionTrendingCategories;