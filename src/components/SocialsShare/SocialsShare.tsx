import React, { FC } from "react";

import {
  FacebookIcon,
  FacebookShareButton,
  TwitterShareButton,
  TwitterIcon,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  MailruIcon,
  TelegramShareButton,
  TelegramIcon,
  VKShareButton,
  VKIcon,
  OKShareButton,
  OKIcon,
  RedditShareButton,
  RedditIcon,
  TumblrShareButton,
  TumblrIcon,
  MailruShareButton,
  LivejournalShareButton,
  LivejournalIcon,
  ViberShareButton,
  ViberIcon,
  WorkplaceShareButton,
  WorkplaceIcon,
  LineShareButton,
  LineIcon,
  WeiboShareButton,
  WeiboIcon,
  PocketShareButton,
  PocketIcon,
  InstapaperShareButton,
  InstapaperIcon,
  HatenaShareButton,
  HatenaIcon,
  EmailShareButton,
  EmailIcon,
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

const SOCIALS_SHARE = frontendObject.socialsShare.map((item) => ({
  id: item,
  name: item,
  icon: "",
}));

const SocialsShare: FC<SocialsShareProps> = ({
  className = "grid gap-[6px]",
  // itemClass = "w-7 h-7 text-base hover:bg-neutral-100 text-neutral-6000",
  href = "#",
  size = 24,
}) => {
  const renderSocialsItem = (item: SocialType) => {
    const CLASSES = "hover:opacity-70";
    switch (item.id) {
      case "Facebook":
        return (
          <FacebookShareButton className={CLASSES} url={href}>
            <FacebookIcon round size={size} />
          </FacebookShareButton>
        );
      case "Twitter":
        return (
          <TwitterShareButton className={CLASSES} url={href}>
            <TwitterIcon round size={size} />
          </TwitterShareButton>
        );
      //
      case "Telegram":
        return (
          <TelegramShareButton className={CLASSES} url={href}>
            <TelegramIcon round size={size} />
          </TelegramShareButton>
        );
      case "Whatsapp":
        return (
          <WhatsappShareButton url={href} className={CLASSES}>
            <WhatsappIcon round size={size} />
          </WhatsappShareButton>
        );
      case "Linkedin":
        return (
          <LinkedinShareButton className={CLASSES} url={href}>
            <LinkedinIcon round size={size} />
          </LinkedinShareButton>
        );
      case "Pinterest":
        return (
          <PinterestShareButton media="" className={CLASSES} url={href}>
            <PinterestIcon round size={size} />
          </PinterestShareButton>
        );
      //
      case "VK":
        return (
          <VKShareButton className={CLASSES} url={href}>
            <VKIcon round size={size} />
          </VKShareButton>
        );
      //
      case "Odnoklassniki":
        return (
          <OKShareButton className={CLASSES} url={href}>
            <OKIcon round size={size} />
          </OKShareButton>
        );
      //
      case "Reddit":
        return (
          <RedditShareButton className={CLASSES} url={href}>
            <RedditIcon round size={size} />
          </RedditShareButton>
        );
      //
      case "Tumblr":
        return (
          <TumblrShareButton className={CLASSES} url={href}>
            <TumblrIcon round size={size} />
          </TumblrShareButton>
        );
      //
      case "MailRu":
        return (
          <MailruShareButton className={CLASSES} url={href}>
            <MailruIcon round size={size} />
          </MailruShareButton>
        );
      //
      case "LiveJournal":
        return (
          <LivejournalShareButton className={CLASSES} url={href}>
            <LivejournalIcon round size={size} />
          </LivejournalShareButton>
        );
      //
      case "Viber":
        return (
          <ViberShareButton className={CLASSES} url={href}>
            <ViberIcon round size={size} />
          </ViberShareButton>
        );
      //
      case "Workplace":
        return (
          <WorkplaceShareButton className={CLASSES} url={href}>
            <WorkplaceIcon round size={size} />
          </WorkplaceShareButton>
        );
      //
      case "Line":
        return (
          <LineShareButton className={CLASSES} url={href}>
            <LineIcon round size={size} />
          </LineShareButton>
        );
      //
      case "Weibo":
        return (
          <WeiboShareButton className={CLASSES} url={href}>
            <WeiboIcon round size={size} />
          </WeiboShareButton>
        );
      //
      case "Pocket":
        return (
          <PocketShareButton className={CLASSES} url={href}>
            <PocketIcon round size={size} />
          </PocketShareButton>
        );
      //
      case "Instapaper":
        return (
          <InstapaperShareButton className={CLASSES} url={href}>
            <InstapaperIcon round size={size} />
          </InstapaperShareButton>
        );
      //
      case "Hatena":
        return (
          <HatenaShareButton className={CLASSES} url={href}>
            <HatenaIcon round size={size} />
          </HatenaShareButton>
        );
      //
      case "email":
        return (
          <EmailShareButton className={CLASSES} url={href}>
            <EmailIcon round size={size} />
          </EmailShareButton>
        );
      //

      default:
        return null;
    }
  };

  return (
    <div className={`nc-SocialsShare ${className}`} data-nc-id="SocialsShare">
      {SOCIALS_SHARE.map((item, index) => (
        <div key={item.name}>{renderSocialsItem(item)}</div>
      ))}
    </div>
  );
};

export default SocialsShare;
