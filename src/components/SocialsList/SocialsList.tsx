import { SocialType } from "components/SocialsShare/SocialsShare";
import React, { FC } from "react";

export interface SocialsListProps {
  className?: string;
  itemClass?: string;
  socials?: SocialType[];
}

const socialsDemo: SocialType[] = [
  {
    id: "Facebook",
    name: "Facebook",
    icon: "lab la-facebook-f",
    href: "#",
  },
  { id: "Twitter", name: "Twitter", icon: "lab la-twitter", href: "#" },
  { id: "Youtube", name: "Youtube", icon: "lab la-youtube", href: "#" },
  { id: "Instagram", name: "Instagram", icon: "lab la-instagram", href: "#" },
];

export const SOCIALS_2 = socialsDemo;

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "rounded-full flex items-center justify-center text-lg lg:w-9 w-8 lg:h-9 h-8 border-2 border-neutral-200",
  socials = socialsDemo,
}) => {
  return (
    <nav
      className={`nc-SocialsList flex space-x-2.5 ${className}`}
      data-nc-id="SocialsList"
    >
      {socials.map((item, i) => (
        <a
          key={i}
          className={`${itemClass} `}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          title={item.name}
        >
          <i className={item.icon}></i>
        </a>
      ))}
    </nav>
  );
};

export default SocialsList;
