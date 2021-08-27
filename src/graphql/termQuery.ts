import { gql } from "@apollo/client";

const GQL = ` edges {
    node {
        id
        count
        name
        categoryId
        description
        link
        ncTaxonomyMeta {
            color
            featuredImage {
                id
                sourceUrl
            }
            fieldGroupName
        }
    }
}`;

const GQLtag = ` edges {
    node {
        id
        count
        name
        tagId
        description
        link
        ncTaxonomyMeta {
            color
            featuredImage {
                id
                sourceUrl
            }
            fieldGroupName
        }
    }
}`;

const TERMSQUERY_FILTER = gql`
	query MyQuery(
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = ""
		$before: String = ""
		$first: Int = 10
		$last: Int = null
	) {
		categories(
			where: { order: $order, orderby: $orderby }
			first: $first
			before: $before
			after: $after
			last: $last
		) {
		${GQL}
		}
	}
`;

const TERMSQUERY_SPECIFIC = gql`
	query MyQuery($termTaxonomId: [ID] = "") {
		categories(where: { termTaxonomId: $termTaxonomId }) {
            ${GQL}
		}
	}
`;

//
//
//
const TERMSQUERY_FILTER_TAGS = gql`
	query MyQuery(
		$order: OrderEnum = ASC
		$orderby: TermObjectsConnectionOrderbyEnum = COUNT
		$after: String = ""
		$before: String = ""
		$first: Int = 10
		$last: Int = null
	) {
		tags(
			where: { order: $order, orderby: $orderby }
			first: $first
			before: $before
			after: $after
			last: $last
		) {
		${GQLtag}
		}
	}
`;

const TERMSQUERY_SPECIFIC_TAGS = gql`
	query MyQuery($termTaxonomId: [ID] = "") {
		tags(where: { termTaxonomId: $termTaxonomId }) {
            ${GQLtag}
		}
	}
`;

export {
  TERMSQUERY_FILTER,
  TERMSQUERY_SPECIFIC,
  TERMSQUERY_FILTER_TAGS,
  TERMSQUERY_SPECIFIC_TAGS,
};
