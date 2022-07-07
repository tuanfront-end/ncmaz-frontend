import SocialShareItem from "components/SocialShareItem";
import React, { FC } from "react";

export interface SocialsShareProps {
  className?: string;
  itemClass?: string;
  href: string;
  size?: number;
  image?: string;
}

export interface SocialType {
  id: string;
  name: string;
  icon: string;
  href?: string;
}

const SOCIALS_SHARE = frontendObject.socialsShare.map((item) => ({
  id: item,
  name: item,
  icon: "",
}));

const SocialsShare: FC<SocialsShareProps> = ({
  className = "grid gap-[6px]",
  href = "#",
  size = 24,
  image = "",
}) => {
  return (
    <div className={`nc-SocialsShare ${className}`} data-nc-id="SocialsShare">
      {SOCIALS_SHARE.map((item) => (
        <div key={item.name}>
          <SocialShareItem
            item={item}
            href={href}
            className="hover:opacity-70"
            size={size}
            image={image}
          />
        </div>
      ))}
    </div>
  );
};

export default SocialsShare;
