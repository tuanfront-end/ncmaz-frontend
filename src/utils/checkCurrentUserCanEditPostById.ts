import { PostNode } from "data/postCardType";

const checkCurrentUserCanEditPostById = (author?: PostNode["author"]) => {
  const rolse = frontendObject.currentUser?.roles.edges[0].node.name;
  if (rolse === "administrator" || rolse === "editor") {
    return true;
  }

  if (author?.node.slug === frontendObject.currentUser?.slug) {
    return true;
  }

  return false;
};

export default checkCurrentUserCanEditPostById;
