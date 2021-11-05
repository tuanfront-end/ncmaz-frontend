import NcDropDown, { NcDropDownItem } from "components/NcDropDown/NcDropDown";
import React from "react";
import { FC } from "react";
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
  EmailIcon
} from "react-share";

 
const SOCIALS_SHARE = frontendObject.socialsShare.map( ( item ) => ( { id: item, name: item, icon: '' } ));

export interface PostCardDropdownShareProps {
  panelMenusClass?: string;
  href: string;
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

  const renderSocialsItem = ( item: NcDropDownItem, active: boolean ) => {
    const CLASSES = 'flex items-center space-x-3 !px-3 !py-2 w-full';
    switch (item.id) {
      case "Facebook":
        return (
          <FacebookShareButton
            className={CLASSES}
            url={href}
          >
            <FacebookIcon round size={24} />
            <span>{ item.name}</span>
          </FacebookShareButton>
        );
      case "Twitter":
          return (
            <TwitterShareButton
              className={CLASSES}
              url={href}
            >
              <TwitterIcon round size={24} />
              <span>{ item.name}</span>
            </TwitterShareButton>
          );
      //  
      case "Telegram":
        return (
          <TelegramShareButton
            className={CLASSES}
            url={href}
          >
            <TelegramIcon round size={24} />
            <span>{ item.name}</span>
          </TelegramShareButton>
        );
      case "Whatsapp":
          return (
            <WhatsappShareButton
              url={href}
            className={CLASSES}
            >
              <WhatsappIcon round size={24} />
              <span>{ item.name}</span>
            </WhatsappShareButton>
          );
      case "Linkedin":
        return (
          <LinkedinShareButton
            className={CLASSES}
            url={href}
          >
            <LinkedinIcon round size={24} />
            <span>{ item.name}</span>
          </LinkedinShareButton>
        );
      case "Pinterest":
        return (
          <PinterestShareButton
            media=""
            className={CLASSES}
            url={href}
          >
            <PinterestIcon round size={24} />
            <span>{ item.name}</span>
          </PinterestShareButton>
        );
      // 
      case "VK":
        return (
          <VKShareButton
            className={CLASSES}
            url={href}
          >
            <VKIcon round size={24} />
            <span>{ item.name}</span>
          </VKShareButton>
        );
      // 
      case "Odnoklassniki":
        return (
          <OKShareButton
            className={CLASSES}
            url={href}
          >
            <OKIcon round size={24} />
            <span>{ item.name}</span>
          </OKShareButton>
        );
      // 
      case "Reddit":
        return (
          <RedditShareButton
            className={CLASSES}
            url={href}
          >
            <RedditIcon round size={24} />
            <span>{ item.name}</span>
          </RedditShareButton>
        );
      // 
      case "Tumblr":
        return (
          <TumblrShareButton
            className={CLASSES}
            url={href}
          >
            <TumblrIcon round size={24} />
            <span>{ item.name}</span>
          </TumblrShareButton>
        );
      // 
      case "MailRu":
        return (
          <MailruShareButton
            className={CLASSES}
            url={href}
          >
            <MailruIcon round size={24} />
            <span>{ item.name}</span>
          </MailruShareButton>
        );
      // 
      case "LiveJournal":
        return (
          <LivejournalShareButton
            className={CLASSES}
            url={href}
          >
            <LivejournalIcon round size={24} />
            <span>{ item.name}</span>
          </LivejournalShareButton>
        );
      // 
      case "Viber":
        return (
          <ViberShareButton
            className={CLASSES}
            url={href}
          >
            <ViberIcon round size={24} />
            <span>{ item.name}</span>
          </ViberShareButton>
        );
      // 
      case "Workplace":
        return (
          <WorkplaceShareButton
            className={CLASSES}
            url={href}
          >
            <WorkplaceIcon round size={24} />
            <span>{ item.name}</span>
          </WorkplaceShareButton>
        );
      // 
      case "Line":
        return (
          <LineShareButton
            className={CLASSES}
            url={href}
          >
            <LineIcon round size={24} />
            <span>{ item.name}</span>
          </LineShareButton>
        );
      // 
      case "Weibo":
        return (
          <WeiboShareButton
            className={CLASSES}
            url={href}
          >
            <WeiboIcon round size={24} />
            <span>{ item.name}</span>
          </WeiboShareButton>
        );
      // 
      case "Pocket":
        return (
          <PocketShareButton
            className={CLASSES}
            url={href}
          >
            <PocketIcon round size={24} />
            <span>{ item.name}</span>
          </PocketShareButton>
        );
      // 
      case "Instapaper":
        return (
          <InstapaperShareButton
            className={CLASSES}
            url={href}
          >
            <InstapaperIcon round size={24} />
            <span>{ item.name}</span>
          </InstapaperShareButton>
        );
      // 
      case "Hatena":
        return (
          <HatenaShareButton
            className={CLASSES}
            url={href}
          >
            <HatenaIcon round size={24} />
            <span>{ item.name}</span>
          </HatenaShareButton>
        );
      // 
      case "email":
        return (
          <EmailShareButton
            className={CLASSES}
            url={href}
          >
            <EmailIcon round size={24} />
            <span>{ item.name}</span>
          </EmailShareButton>
        );
      // 

      default:
        return null;
    }
  };

  const renderItem = (item: NcDropDownItem, active: boolean) => {
    return (
      <div
        className={`flex items-center rounded-md w-full truncate  ${
          active
            ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            : ""
        }`}
      >
        {renderSocialsItem(item, active)}
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
      onClick={() => {}}
    />
  );
};

export default PostCardDropdownShare;
