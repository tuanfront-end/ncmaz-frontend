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
import { SocialType } from "./SocialsShare/SocialsShare";

export interface SocialShareItemProps {
  className: string;
  href: string;
  size: number;
  item: SocialType;
  hasName?: boolean;
  image?: string;
}

const SocialShareItem: FC<SocialShareItemProps> = ({
  className,
  href,
  size,
  item,
  hasName = false,
  image = "",
}) => {
  const renderSocialsItem = () => {
    const CLASSES = className;
    switch (item.id) {
      case "Facebook":
        return (
          <FacebookShareButton className={CLASSES} url={href}>
            <FacebookIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </FacebookShareButton>
        );
      case "Twitter":
        return (
          <TwitterShareButton className={CLASSES} url={href}>
            <TwitterIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </TwitterShareButton>
        );
      //
      case "Telegram":
        return (
          <TelegramShareButton className={CLASSES} url={href}>
            <TelegramIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </TelegramShareButton>
        );
      case "Whatsapp":
        return (
          <WhatsappShareButton url={href} className={CLASSES}>
            <WhatsappIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </WhatsappShareButton>
        );
      case "LinkedIn":
        return (
          <LinkedinShareButton className={CLASSES} url={href}>
            <LinkedinIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </LinkedinShareButton>
        );
      case "Pinterest":
        return (
          <PinterestShareButton media={image} className={CLASSES} url={href}>
            <PinterestIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </PinterestShareButton>
        );
      //
      case "VK":
        return (
          <VKShareButton className={CLASSES} url={href}>
            <VKIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </VKShareButton>
        );
      //
      case "Odnoklassniki":
        return (
          <OKShareButton className={CLASSES} url={href}>
            <OKIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </OKShareButton>
        );
      //
      case "Reddit":
        return (
          <RedditShareButton className={CLASSES} url={href}>
            <RedditIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </RedditShareButton>
        );
      //
      case "Tumblr":
        return (
          <TumblrShareButton className={CLASSES} url={href}>
            <TumblrIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </TumblrShareButton>
        );
      //
      case "MailRu":
        return (
          <MailruShareButton className={CLASSES} url={href}>
            <MailruIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </MailruShareButton>
        );
      //
      case "LiveJournal":
        return (
          <LivejournalShareButton className={CLASSES} url={href}>
            <LivejournalIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </LivejournalShareButton>
        );
      //
      case "Viber":
        return (
          <ViberShareButton className={CLASSES} url={href}>
            <ViberIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </ViberShareButton>
        );
      //
      case "Workplace":
        return (
          <WorkplaceShareButton className={CLASSES} url={href}>
            <WorkplaceIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </WorkplaceShareButton>
        );
      //
      case "Line":
        return (
          <LineShareButton className={CLASSES} url={href}>
            <LineIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </LineShareButton>
        );
      //
      case "Weibo":
        return (
          <WeiboShareButton className={CLASSES} url={href}>
            <WeiboIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </WeiboShareButton>
        );
      //
      case "Pocket":
        return (
          <PocketShareButton className={CLASSES} url={href}>
            <PocketIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </PocketShareButton>
        );
      //
      case "Instapaper":
        return (
          <InstapaperShareButton className={CLASSES} url={href}>
            <InstapaperIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </InstapaperShareButton>
        );
      //
      case "Hatena":
        return (
          <HatenaShareButton className={CLASSES} url={href}>
            <HatenaIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </HatenaShareButton>
        );
      //
      case "email":
        return (
          <EmailShareButton className={CLASSES} url={href}>
            <EmailIcon round size={size} />
            {hasName && <span>{item.name}</span>}
          </EmailShareButton>
        );
      //

      default:
        return null;
    }
  };

  return renderSocialsItem();
};

export default SocialShareItem;
