import React, { FC } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

export interface SocialsShareProps {
  className?: string;
  itemClass?: string;
  href: string;
  size?: number;
}

export interface SocialType {
  id: string;
  name: string;
  icon: string;
  href?: string;
}

const socials: SocialType[] = [
  { id: "Facebook", name: "Facebook", icon: "lab la-facebook-f" },
  { id: "Twitter", name: "Twitter", icon: "lab la-twitter" },
  { id: "Linkedin", name: "Linkedin", icon: "lab la-linkedin-in" },
  { id: "Pinterest", name: "Pinterest", icon: "lab la-Pinterest" },
];

export const SOCIALS_DATA = socials;

const SocialsShare: FC<SocialsShareProps> = ({
  className = "grid gap-[6px]",
  // itemClass = "w-7 h-7 text-base hover:bg-neutral-100 text-neutral-6000",
  href = "#",
  size = 24,
}) => {
  const renderSocialsItem = (item: SocialType, index: number) => {
    switch (item.id) {
      case "Facebook":
        return (
          <FacebookShareButton
            key={index}
            url={href}
            className="hover:opacity-70"
          >
            <FacebookIcon round size={size} />
          </FacebookShareButton>
        );
      case "Twitter":
        return (
          <TwitterShareButton
            key={index}
            url={href}
            className="hover:opacity-70"
          >
            <TwitterIcon round size={size} />
          </TwitterShareButton>
        );
      case "Linkedin":
        return (
          <LinkedinShareButton
            key={index}
            url={href}
            className="hover:opacity-70"
          >
            <LinkedinIcon round size={size} />
          </LinkedinShareButton>
        );
      case "Pinterest":
        return (
          <PinterestShareButton
            media=""
            key={index}
            url={href}
            className="hover:opacity-70"
          >
            <PinterestIcon round size={size} />
          </PinterestShareButton>
        );

      default:
        return null;
    }
  };

  // const renderItem = (item: SocialType, index: number) => {
  //   return renderSocialsItem(item, index);
  //   return (
  //     <a
  //       key={index}
  //       href={item.href}
  //       className={`rounded-full leading-none flex items-center justify-center bg-white  ${itemClass}`}
  //       title={`Share on ${item.name}`}
  //     >
  //       <i className={item.icon}></i>
  //     </a>
  //   );
  // };

  return (
    <div className={`nc-SocialsShare ${className}`} data-nc-id="SocialsShare">
      {socials.map(renderSocialsItem)}
    </div>
  );
};

export default SocialsShare;
