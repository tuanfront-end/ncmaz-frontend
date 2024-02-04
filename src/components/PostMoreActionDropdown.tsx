import NCMAZ_TRANSLATE from "contains/translate";
import React, { FC } from "react";
import ModalDeletePost from "./ModalDeletePost";
import ModalDraftPost from "./ModalDraftPost";
import ModalPublishPost from "./ModalPublishPost";
import NcDropDown, { NcDropDownItem } from "./NcDropDown/NcDropDown";

interface PostMoreActionDropdownProps {
  className?: string;
  panelMenusClass?: string;
  href: string;
  postDataBaseId: number;
  data?: NcDropDownItem[];
  isReloadAfterDelete?: boolean;
  hasComment?: boolean;
  singlePostStatus?: "publish" | "future" | "draft" | "pending" | "private";
}

type PostMoreActionDropdownIDs =
  | "edit"
  | "gotocoommment"
  | "delete_post"
  | "publish_post"
  | "draft_post";

const PostMoreActionDropdown: FC<PostMoreActionDropdownProps> = ({
  className = "text-neutral-700 bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8",
  panelMenusClass = "w-52 right-0 bottom-0 origin-bottom-right",
  href,
  postDataBaseId,
  isReloadAfterDelete = false,
  hasComment = true,
  data,
  singlePostStatus,
}) => {
  const [showModalDeletePost, setShowModalDeletePost] = React.useState(false);
  const [showModalPublishPost, setShowModalPublishPost] = React.useState(false);
  const [showModalDraftPost, setShowModalDraftPost] = React.useState(false);

  const DATA_INIT: NcDropDownItem<PostMoreActionDropdownIDs>[] = [
    {
      icon: "las la-edit",
      id: "edit",
      name: NCMAZ_TRANSLATE["Edit post"],
      href:
        frontendObject.pagePostSubmissionEditorUrl +
        "?pid=" +
        postDataBaseId +
        "&action=edit",
    },
    {
      icon: "las la-comment-dots",
      id: "gotocoommment",
      name: NCMAZ_TRANSLATE["Comment this post"],
      href: `${href}#comment`,
    },
    {
      icon: "las la-upload",
      id: "publish_post",
      name: NCMAZ_TRANSLATE["Publish post"],
    },
    {
      icon: "las la-recycle",
      id: "draft_post",
      name: NCMAZ_TRANSLATE["Draft post"],
    },
    //
    {
      icon: "las la-trash-alt",
      id: "delete_post",
      name: NCMAZ_TRANSLATE["Delete post"],
    },
  ];

  let DATA: NcDropDownItem[] = DATA_INIT;

  DATA = hasComment ? DATA : DATA.filter((item) => item.id !== "gotocoommment");

  //
  const isDraftsTabOnAuthorPage =
    frontendObject.currentPageType === "author" &&
    location.search.includes("tab=Drafts");
  if (isDraftsTabOnAuthorPage || singlePostStatus === "draft") {
    DATA = DATA.filter((item) => item.id !== "draft_post");
  } else {
    DATA = DATA.filter((item) => item.id !== "publish_post");
  }

  //
  if (data) {
    DATA = data;
  }

  const handleClickItem = (item: NcDropDownItem) => {
    if (item.id === "delete_post") {
      return setShowModalDeletePost(true);
    }
    if (item.id === "publish_post") {
      return setShowModalPublishPost(true);
    }
    if (item.id === "draft_post") {
      return setShowModalDraftPost(true);
    }
    console.log("clicked", item);
  };

  return (
    <>
      <NcDropDown
        data={DATA}
        className={`nc-PostMoreActionDropdown relative rounded-full flex items-center justify-center focus:outline-none ${className}`}
        panelMenusClass={panelMenusClass}
        onClickItem={handleClickItem}
      />
      {showModalDeletePost && (
        <ModalDeletePost
          show={showModalDeletePost}
          onCloseModal={() => setShowModalDeletePost(false)}
          postDataBaseId={postDataBaseId}
          isReloadAfterDelete={isReloadAfterDelete}
        />
      )}
      {showModalPublishPost && (
        <ModalPublishPost
          show={showModalPublishPost}
          onCloseModal={() => setShowModalPublishPost(false)}
          postDataBaseId={postDataBaseId}
          isReloadAfterDelete={true}
        />
      )}
      {showModalDraftPost && (
        <ModalDraftPost
          show={showModalDraftPost}
          onCloseModal={() => setShowModalDraftPost(false)}
          postDataBaseId={postDataBaseId}
          isReloadAfterDelete={true}
        />
      )}
    </>
  );
};

export default PostMoreActionDropdown;
