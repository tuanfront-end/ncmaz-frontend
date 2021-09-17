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
    icon: "lab la-facebook-square",
    href: "#",
  },
  { id: "Twitter", name: "Twitter", icon: "lab la-twitter", href: "#" },
  { id: "Youtube", name: "Youtube", icon: "lab la-youtube", href: "#" },
  { id: "Instagram", name: "Instagram", icon: "lab la-instagram", href: "#" },
];

export const SOCIALS_2 = socialsDemo;

const SocialsList: FC<SocialsListProps> = ({
  className = "",
  itemClass = "w-7 h-7 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-400 text-lg rounded-lg flex items-center justify-center hover:border-neutral-400 dark:hover:border-neutral-6000 ",
  socials = socialsDemo,
}) => {
  return (
    <nav
      className={`nc-SocialsList flex space-x-2 ${className}`}
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
