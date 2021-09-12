import NcDropDown from "components/NcDropDown/NcDropDown";
import { SocialType } from "components/SocialsShare/SocialsShare";
import React from "react";
import { FC } from "react";

const socials: SocialType[] = [
  { id: "Facebook", name: "Facebook", icon: "lab la-facebook-f", href: "#" },
  { id: "Twitter", name: "Twitter", icon: "lab la-twitter", href: "#" },
  { id: "Linkedin", name: "Linkedin", icon: "lab la-linkedin-in", href: "#" },
  { id: "Instagram", name: "Instagram", icon: "lab la-instagram", href: "#" },
];

export interface PostCardDropdownShareProps {
  panelMenusClass?: string;
  href?: string;
  className?: string;
}

const PostCardDropdownShare: FC<PostCardDropdownShareProps> = ({
  panelMenusClass = "w-52 right-0 bottom-0 origin-bottom-right",
  href = "/#",
  className = "nc-PostCardDropdownShare relative rounded-full flex items-center justify-center focus:outline-none bg-neutral-50 hover:bg-blue-50 hover:text-blue-700 dark:hover:text-blue-700 dark:text-neutral-100 dark:bg-neutral-800 dark:hover:bg-blue-100 transition-colors duration-300 h-8 w-8",
}) => {
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
      </div>
    );
  };

  return (
    <NcDropDown
      className={className}
      panelMenusClass={panelMenusClass}
      title="Share with"
      renderTrigger={renderButton}
      data={socials}
      onClick={() => {}}
    />
  );
};

export default PostCardDropdownShare;
