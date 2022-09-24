import NCMAZ_TRANSLATE from "contains/translate";
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
  hasComment?: boolean;
}

const PostMoreActionDropdown: FC<PostMoreActionDropdownProps> = ({
  className = "text-neutral-700 bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8",
  panelMenusClass = "w-52 right-0 bottom-0 origin-bottom-right",
  href,
  postDataBaseId,
  isReloadAfterDelete = false,
  hasComment = true,
  data,
}) => {
  const [showModalDeletePost, setShowModalDeletePost] = React.useState(false);

  let DATA = [
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
      icon: "las la-trash-alt",
      id: "delete_post",
      name: NCMAZ_TRANSLATE["Delete post"],
    },
  ];
  DATA = hasComment ? DATA : DATA.filter((_, i) => i != 1);

  if (data) {
    DATA = data;
  }

  const handleClickItem = (item: NcDropDownItem) => {
    if (item.id === "delete_post") {
      setShowModalDeletePost(true);
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
