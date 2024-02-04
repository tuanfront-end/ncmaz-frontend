import React, { FC } from "react";
import { AuthorNode } from "data/postCardType";
import NcImage from "components/NcImage/NcImage";
import Avatar from "components/Avatar/Avatar";
import NCMAZ_TRANSLATE from "contains/translate";
import Facebookpng from "images/IntegrationIcons/Facebook.png";
import githubpng from "images/IntegrationIcons/github.png";
import instagrampng from "images/IntegrationIcons/instagram.png";
import linkedinpng from "images/IntegrationIcons/linkedin.png";
import mediumpng from "images/IntegrationIcons/medium.png";
import pinterestpng from "images/IntegrationIcons/pinterest.png";
import twitchpng from "images/IntegrationIcons/twitch.png";
import twitterpng from "images/IntegrationIcons/twitter.png";
import vimeopng from "images/IntegrationIcons/vimeo.png";
import youtubepng from "images/IntegrationIcons/youtube.png";
import ButtonSecondary from "components/Button/ButtonSecondary";

export interface AuthorSocialType {
  id: keyof AuthorNode["ncUserMeta"];
  name: string;
  iconPng: string;
  href: string;
}
export interface HeaderPageArchiveAuthorProps {
  className?: string;
  clearFavoritesButton?: string;
  // NEU LA TRANG CUA MINH THI userData se underfined vi CURRENT-USER-DATA CO SAN TRONG FRONTEND-OBJECT
  userData?: AuthorNode;
  isCurrentMyPage?: boolean;
}

// Tag and category have same data type - we will use one demo data
const HeaderPageArchiveAuthor: FC<HeaderPageArchiveAuthorProps> = ({
  className = "",
  clearFavoritesButton,
  userData,
  isCurrentMyPage,
}) => {
  const TRANG_CUA_MINH = isCurrentMyPage;
  if (!userData || (TRANG_CUA_MINH && frontendObject.currentUser)) {
    userData = frontendObject.currentUser as AuthorNode;
  }

  const { ncUserMeta, name, description, avatar } = userData;
  let userSocials: AuthorSocialType[] = [
    {
      id: "youtubeUrl",
      name: "Youtube",
      iconPng: youtubepng,
      href: ncUserMeta.youtubeUrl || "",
    },
    {
      id: "facebookUrl",
      name: "Facebook",
      iconPng: Facebookpng,
      href: ncUserMeta.facebookUrl || "",
    },
    {
      id: "mediumUrl",
      name: "Medium",
      iconPng: mediumpng,
      href: ncUserMeta.mediumUrl || "",
    },
    {
      id: "githubUrl",
      name: "Github",
      iconPng: githubpng,
      href: ncUserMeta.githubUrl || "",
    },
    {
      id: "vimeoUrl",
      name: "Vimeo",
      iconPng: vimeopng,
      href: ncUserMeta.vimeoUrl || "",
    },
    {
      id: "twitterUrl",
      name: "Twitter",
      iconPng: twitterpng,
      href: ncUserMeta.twitterUrl || "",
    },
    {
      id: "instagramUrl",
      name: "Instagram",
      iconPng: instagrampng,
      href: ncUserMeta.instagramUrl || "",
    },
    {
      id: "linkedinUrl",
      name: "LinkedIn",
      iconPng: linkedinpng,
      href: ncUserMeta.linkedinUrl || "",
    },
    {
      id: "pinterestUrl",
      name: "Pinterest",
      iconPng: pinterestpng,
      href: ncUserMeta.pinterestUrl || "",
    },
    {
      id: "twitchUrl",
      name: "Twitch",
      iconPng: twitchpng,
      href: ncUserMeta.twitchUrl || "",
    },
  ];
  userSocials = userSocials.filter((item) => !!item.href);

  const IS_SHOW_CLEAR_FAVORITES =
    clearFavoritesButton && window.Favorites && TRANG_CUA_MINH;

  return (
    <>
      <div className="relative aspect-w-16 aspect-h-9 sm:aspect-h-6 lg:aspect-h-5 xl:aspect-h-4 2xl:aspect-h-3">
        <NcImage
          containerClassName="absolute inset-0"
          src={
            ncUserMeta?.backgroundImage?.sourceUrl ||
            frontendObject.authorPageCoverImgDefault ||
            "https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          }
          srcSet={ncUserMeta.backgroundImage?.srcSet}
          imageSizes="_1536X1536"
          className="object-cover w-full h-full"
          loading="eager"
        />
      </div>
      <div className="relative px-1 sm:container -mt-20 lg:-mt-32">
        <div
          className="relative bg-white dark:bg-neutral-800 dark:border dark:border-neutral-700 p-4 sm:p-5 lg:p-8 rounded-3xl lg:rounded-[32px] shadow-xl 
          flex flex-col sm:flex-row sm:items-center"
        >
          <div className="flex-shrink-0 ">
            <Avatar
              containerClassName="ring-4 ring-white dark:ring-0 shadow-xl"
              imgUrl={ncUserMeta.featuredImage?.sourceUrl || avatar?.url}
              srcSet={
                ncUserMeta.featuredImage?.sourceUrl
                  ? ncUserMeta.featuredImage?.srcSet
                  : undefined
              }
              loading="eager"
              userName={name}
              sizeClass="w-28 h-28 sm:w-32 sm:h-32 lg:w-44 lg:h-44 text-3xl xl:text-5xl"
              radius="rounded-3xl"
              imageSizes="MEDIUM"
            />
            {!!ncUserMeta.buymeacoffeUrl && (
              <a
                className="flex sm:justify-center lg:hidden mt-3"
                href={ncUserMeta.buymeacoffeUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={
                    ncmazFrontendVariables.pluginDistImagesDir +
                    "buymeacoffee.svg"
                  }
                  alt="buy-me-a-coffee"
                  className="w-28 rounded-xl shadow-xl"
                />
              </a>
            )}
          </div>

          <div className="flex-grow mt-5 sm:mt-0 sm:ml-8 max-w-lg xl:max-w-2xl space-y-3">
            <h1 className="inline-flex items-center text-2xl sm:text-2xl lg:text-4xl font-bold lg:font-semibold">
              {name}
            </h1>

            {description ? (
              <span
                className="block text-sm text-neutral-500 dark:text-neutral-400"
                dangerouslySetInnerHTML={{
                  __html: description || "",
                }}
              ></span>
            ) : null}

            {!!ncUserMeta.websiteUrl && (
              <a
                href={ncUserMeta.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-xs font-medium space-x-2.5 cursor-pointer text-neutral-500 dark:text-neutral-400 truncate"
              >
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7.99998 3H8.99998C7.04998 8.84 7.04998 15.16 8.99998 21H7.99998"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 3C16.95 8.84 16.95 15.16 15 21"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3 9.0001C8.84 7.0501 15.16 7.0501 21 9.0001"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                <span className="text-neutral-700 dark:text-neutral-300 truncate">
                  {ncUserMeta.websiteUrl}
                </span>
              </a>
            )}

            {userSocials.length ? (
              <nav
                className={`nc-SocialsList flex flex-wrap text-2xl text-neutral-6000 dark:text-neutral-300 `}
              >
                {userSocials.map((item, i) => (
                  <a
                    key={i}
                    className={`block w-7 h-7 mr-2.5 my-0.5`}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.name}
                  >
                    <img src={item.iconPng} alt={item.name} />
                  </a>
                ))}
              </nav>
            ) : null}

            {IS_SHOW_CLEAR_FAVORITES && (
              <div
                className="PageArchiveAuthor__clearFavoritesButton inline-flex lg:hidden"
                dangerouslySetInnerHTML={{
                  __html: clearFavoritesButton,
                }}
              ></div>
            )}
          </div>

          <div className="flex flex-col space-y-2.5 absolute top-0 right-0 p-5 lg:p-8">
            {TRANG_CUA_MINH && (
              <ButtonSecondary
                className="!rounded-xl"
                sizeClass="px-3 py-2 sm:px-6"
                href={frontendObject.pageNcmazAccountUrl}
              >
                <span className="hidden lg:block">
                  {NCMAZ_TRANSLATE["Edit profile"]}
                </span>
                <span className="block lg:hidden">
                  <i className="las la-user-edit text-xl"></i>
                </span>
              </ButtonSecondary>
            )}
            {!!ncUserMeta.buymeacoffeUrl && (
              <a
                className="hidden lg:block"
                href={ncUserMeta.buymeacoffeUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="buy-me-a-coffee"
              >
                <img
                  src={
                    ncmazFrontendVariables.pluginDistImagesDir +
                    "buymeacoffee.svg"
                  }
                  alt="buy-me-a-coffee"
                  className="w-36 rounded-xl shadow-xl hover:opacity-80 transition-opacity"
                />
              </a>
            )}

            {IS_SHOW_CLEAR_FAVORITES && (
              <div
                id="nc-page-author-id__clearFavoritesButton"
                className="PageArchiveAuthor__clearFavoritesButton hidden lg:block"
                dangerouslySetInnerHTML={{
                  __html: clearFavoritesButton,
                }}
              ></div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderPageArchiveAuthor;
