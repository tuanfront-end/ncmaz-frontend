import React, { FC } from "react";
import ModalDeletePost from "./ModalDeletePost";
import NcDropDown, { NcDropDownItem } from "./NcDropDown/NcDropDown";

interface PostMoreActionDropdownProps {
  className?: string;
  panelMenusClass?: string;
  href: string;
  postDataBaseId: number;
  data?: NcDropDownItem[];
  isReloadAfterDelete?: boolean;
}

const PostMoreActionDropdown: FC<PostMoreActionDropdownProps> = ({
  className = "text-neutral-700 bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8",
  panelMenusClass = "w-52 right-0 bottom-0 origin-bottom-right",
  href,
  postDataBaseId,
  isReloadAfterDelete = false,
  data = [
    {
      icon: "las la-edit",
      id: "edit",
      name: "Edit post",
      href:
        frontendObject.postSubmissionPageLinkNcmazEditor +
        "?pid=" +
        postDataBaseId +
        "&action=edit",
    },
    {
      icon: "las la-comment-dots",
      id: "gotocoommment",
      name: "Comment this post",
      href: `${href}#comment`,
    },

    {
      icon: "las la-trash-alt",
      id: "delete_post",
      name: "Delete post",
    },
  ],
}) => {
  const [showModalDeletePost, setShowModalDeletePost] = React.useState(false);

  const handleClickItem = (item: NcDropDownItem) => {
    if (item.id === "delete_post") {
      setShowModalDeletePost(true);
    }
    console.log("clicked");
  };

  return (
    <>
      <NcDropDown
        data={data}
        className={`nc-PostMoreActionDropdown relative rounded-full flex items-center justify-center focus:outline-none ${className}`}
        panelMenusClass={panelMenusClass}
        onClickItem={handleClickItem}
      />
      <ModalDeletePost
        show={showModalDeletePost}
        onCloseModal={() => setShowModalDeletePost(false)}
        postDataBaseId={postDataBaseId}
        isReloadAfterDelete={isReloadAfterDelete}
      />
    </>
  );
};

export default PostMoreActionDropdown;
