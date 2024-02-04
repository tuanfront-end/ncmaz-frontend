import NcDropDown, { NcDropDownItem } from "components/NcDropDown/NcDropDown";
import SocialShareItem from "components/SocialShareItem";
import NCMAZ_TRANSLATE from "contains/translate";
import React from "react";
import { FC } from "react";
import toast from "react-hot-toast";

let SOCIALS_SHARE = frontendObject.socialsShare.map((item) => ({
  id: item,
  name: item,
  icon: "",
}));
SOCIALS_SHARE = [
  {
    id: "copyLink",
    name: NCMAZ_TRANSLATE["Copy link"],
    icon: "las la-link",
  },
  {
    id: "_divider_1",
    name: "_divider_",
    icon: "",
  },
  ...SOCIALS_SHARE,
];
export interface PostCardDropdownShareProps {
  panelMenusClass?: string;
  href: string;
  className?: string;
  image?: string;
}

const PostCardDropdownShare: FC<PostCardDropdownShareProps> = ({
  panelMenusClass = "w-48 sm:w-52 right-0 bottom-0 origin-bottom-right",
  href = "/#",
  className = "nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-7 w-7 sm:h-8 sm:w-8",
  image = "",
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleCopyLink = () => {
    if (!inputRef.current) return;
    /* Select the text field */
    inputRef.current.select();
    inputRef.current.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(inputRef.current.value);
    toast.success(NCMAZ_TRANSLATE["Link copied"], {
      id: "PostCardDropdownShare-clipboard",
      style: {
        background: "#333",
        color: "#fff",
      },
    });
  };

  const renderButton = () => {
    return (
      <div>
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M4.75 14.75V16.25C4.75 17.9069 6.09315 19.25 7.75 19.25H16.25C17.9069 19.25 19.25 17.9069 19.25 16.25V14.75"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M12 14.25L12 5"
          ></path>
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1"
            d="M8.75 8.25L12 4.75L15.25 8.25"
          ></path>
        </svg>
        <input
          ref={inputRef}
          type="text"
          hidden
          className="hidden"
          defaultValue={href}
        />
      </div>
    );
  };

  const renderItem = (item: NcDropDownItem, active: boolean) => {
    if (item.id === "copyLink") {
      return (
        <button
          className={`flex gap-1 items-center rounded-md w-full px-3 py-2 truncate ${
            active
              ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
              : ""
          }`}
          onClick={handleCopyLink}
        >
          <i className={`${item.icon} w-7 text-base`}></i>
          <span className="truncate">{item.name}</span>
        </button>
      );
    }
    return (
      <div
        className={`flex items-center rounded-md w-full truncate  ${
          active
            ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            : ""
        }`}
      >
        <SocialShareItem
          item={item}
          href={href}
          className="flex items-center gap-3 !px-3 !py-2 w-full"
          size={24}
          hasName
          image={image}
        />
      </div>
    );
  };

  return (
    <NcDropDown
      className={className}
      panelMenusClass={`${panelMenusClass} max-h-80 overflow-y-auto`}
      title="Share with"
      renderTrigger={renderButton}
      renderItem={renderItem}
      data={SOCIALS_SHARE}
      onClickItem={() => {}}
    />
  );
};

export default PostCardDropdownShare;
