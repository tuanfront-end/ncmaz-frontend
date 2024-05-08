import Alert from "components/Alert/Alert";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import NCMAZ_TRANSLATE from "contains/translate";
import { UserFullData } from "data/types";
import React, { FC } from "react";
import useMutaionUpdateUser from "./useMutaionUpdateUser";

interface SocialsProfileFormProps {
  userData: UserFullData;
}

const SocialsProfileForm: FC<SocialsProfileFormProps> = ({ userData }) => {
  const [youtubeUrl, setYoutubeUrl] = React.useState(
    userData?.ncUserMeta?.youtubeUrl || ""
  );
  const [facebookUrl, setFacebookUrl] = React.useState(
    userData?.ncUserMeta?.facebookUrl || ""
  );
  const [twitterUrl, setTwitterUrl] = React.useState(
    userData?.ncUserMeta?.twitterUrl || ""
  );
  const [instagramUrl, setInstagramUrl] = React.useState(
    userData?.ncUserMeta?.instagramUrl || ""
  );
  const [githubUrl, setGithubUrl] = React.useState(
    userData?.ncUserMeta?.githubUrl || ""
  );
  const [linkedinUrl, setLinkedinUrl] = React.useState(
    userData?.ncUserMeta?.linkedinUrl || ""
  );
  const [twitchUrl, setTwitchUrl] = React.useState(
    userData?.ncUserMeta?.twitchUrl || ""
  );
  const [mediumUrl, setMediumUrl] = React.useState(
    userData?.ncUserMeta?.mediumUrl || ""
  );
  const [pinterestUrl, setPinterestUrl] = React.useState(
    userData?.ncUserMeta?.pinterestUrl || ""
  );
  const [buymeacoffeeUrl, setBuymeacoffeeUrl] = React.useState(
    userData?.ncUserMeta?.buymeacoffeUrl || ""
  );
  const [vimeoUrl, setVimeoUrl] = React.useState(
    userData?.ncUserMeta?.vimeoUrl || ""
  );
  //
  const [tiktokUrl, setTiktokUrl] = React.useState(
    userData?.ncUserMeta?.tiktokUrl || ""
  );
  const [telegramUrl, settelegramUrl] = React.useState(
    userData?.ncUserMeta?.telegramUrl || ""
  );
  const [whatsappUrl, setwhatsappUrl] = React.useState(
    userData?.ncUserMeta?.whatsappUrl || ""
  );
  const [discordUrl, setDiscordUrl] = React.useState(
    userData?.ncUserMeta?.discordUrl || ""
  );

  //
  const { data, error, loading, mutationUpdateUser } = useMutaionUpdateUser();
  //

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    mutationUpdateUser({
      variables: {
        id: userData.id,
        ncmazYoutubeUrl: youtubeUrl,
        ncmazFacebookUrl: facebookUrl,
        ncmazTwitterUrl: twitterUrl,
        ncmazInstagramUrl: instagramUrl,
        ncmazGithubUrl: githubUrl,
        ncmazLinkedinUrl: linkedinUrl,
        ncmazTwitchUrl: twitchUrl,
        ncmazMediumUrl: mediumUrl,
        ncmazPinterestUrl: pinterestUrl,
        ncmazVimeoUrl: vimeoUrl,
        ncmazBuymeacoffeUrl: buymeacoffeeUrl,
        // tiktok
        ncmazTiktokUrl: tiktokUrl,
        // whatsapp
        ncmazWhatsappUrl: whatsappUrl,
        // telegram
        ncmazTelegramUrl: telegramUrl,
        // discordUrl
        ncmazDiscordUrl: discordUrl,
      },
    });
  };

  return (
    <form
      action="#"
      onSubmit={handleSubmitForm}
      className="NcmazAccountPage-SocialsProfileForm space-y-5 sm:space-y-6 md:sm:space-y-7"
    >
      <div className="SocialsProfileForm__heading">
        <h2 className="text-2xl font-semibold">
          {NCMAZ_TRANSLATE["Social profiles"]}
        </h2>
        <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {NCMAZ_TRANSLATE["Add elsewhere links to your profile"]}
        </span>
      </div>
      <div className="w-24 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* ---- */}

      <div className="SocialsProfileForm__fieldsWrap grid grid-cols-1 sm:grid-cols-2 gap-5 ">
        {/* ---- Youtube */}
        <div className="SocialsProfileForm__Youtube">
          <Label>{NCMAZ_TRANSLATE.Youtube}</Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-youtube"></i>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://www.youtube.com/channel/yourname"
              defaultValue={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ----Facebook */}
        <div className="SocialsProfileForm__Facebook">
          <Label>{NCMAZ_TRANSLATE.Facebook}</Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-facebook-f"></i>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://www.facebook.com/yourname"
              defaultValue={facebookUrl}
              onChange={(e) => setFacebookUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ---- Medium */}
        <div className="SocialsProfileForm__Medium">
          <Label>{NCMAZ_TRANSLATE.Medium}</Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-medium"></i>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://medium.com/@yourname"
              defaultValue={mediumUrl}
              onChange={(e) => setMediumUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ---- Github */}
        <div className="SocialsProfileForm__Github">
          <Label>{NCMAZ_TRANSLATE.Github} </Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-github"></i>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://github.com/yourname"
              defaultValue={githubUrl}
              onChange={(e) => setGithubUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ---- Vimeo */}
        <div className="SocialsProfileForm__Vimeo">
          <Label>{NCMAZ_TRANSLATE.Vimeo} </Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-vimeo"></i>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://vimeo.com/yourname"
              defaultValue={vimeoUrl}
              onChange={(e) => setVimeoUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ---- Twitter*/}
        <div className="SocialsProfileForm__Twitter">
          <Label>{NCMAZ_TRANSLATE.Twitter}</Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-twitter"></i>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://twitter.com/yourname"
              defaultValue={twitterUrl}
              onChange={(e) => setTwitterUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ---- Instagram */}
        <div className="SocialsProfileForm__Instagram">
          <Label>{NCMAZ_TRANSLATE.Instagram} </Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-instagram"></i>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://instagram.com/yourname"
              defaultValue={instagramUrl}
              onChange={(e) => setInstagramUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ---- Linkedin  */}
        <div className="SocialsProfileForm__Linkedin">
          <Label>{NCMAZ_TRANSLATE.Linkedin} </Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-linkedin"></i>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://linkedin.com/in/yourname"
              defaultValue={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ---- Pinterest   */}
        <div className="SocialsProfileForm__Pinterest">
          <Label>{NCMAZ_TRANSLATE.Pinterest} </Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-pinterest"></i>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://pinterest.com/yourname"
              defaultValue={pinterestUrl}
              onChange={(e) => setPinterestUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ---- Twitch    */}
        <div className="SocialsProfileForm__Twitch">
          <Label>{NCMAZ_TRANSLATE.Twitch} </Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-twitch"></i>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://twitch.com/yourname"
              defaultValue={twitchUrl}
              onChange={(e) => setTwitchUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ---- Tiktok    */}
        <div className="SocialsProfileForm__Tiktok">
          <Label>{NCMAZ_TRANSLATE.Tiktok} </Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <svg
                className="w-5 h-5 opacity-50 dark:opacity-100"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" />
              </svg>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://tiktok.com/yourname"
              defaultValue={tiktokUrl}
              onChange={(e) => setTiktokUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ---- Telegram    */}
        <div className="SocialsProfileForm__Telegram">
          <Label>{NCMAZ_TRANSLATE.Telegram} </Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-telegram"></i>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://telegram.com/yourname"
              defaultValue={telegramUrl}
              onChange={(e) => settelegramUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ---- Whatsapp    */}
        <div className="SocialsProfileForm__Whatsapp">
          <Label>{NCMAZ_TRANSLATE.Whatsapp} </Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-whatsapp"></i>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://whatsapp.com/yourname"
              defaultValue={whatsappUrl}
              onChange={(e) => setwhatsappUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ---- Discord    */}
        <div className="SocialsProfileForm__Discord">
          <Label>{NCMAZ_TRANSLATE.Discord} </Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-discord"></i>
            </span>
            <Input
              className="!rounded-l-none"
              sizeClass="h-11 px-4 pl-2 pr-3"
              placeholder="https://discord.com/yourname"
              defaultValue={discordUrl}
              onChange={(e) => setDiscordUrl(e.currentTarget.value)}
            />
          </div>
        </div>

        {/* ---- Buymeacoffe     */}
        <div className="SocialsProfileForm__Buymeacoffe sm:col-span-2">
          <Label>{NCMAZ_TRANSLATE["Buymeacoffe"]} </Label>
          <span className="text-xs text-neutral-500 dark:text-neutral-400">
            {NCMAZ_TRANSLATE["You should have an account here:"]} {` `}
            {NCMAZ_TRANSLATE["buymeacoffee.com"] && (
              <a
                href={"https://" + NCMAZ_TRANSLATE["buymeacoffee.com"]}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 underline"
              >
                {NCMAZ_TRANSLATE["buymeacoffee.com"]}
              </a>
            )}
          </span>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl las la-coffee"></i>
            </span>
            <Input
              className="!rounded-l-none"
              placeholder={NCMAZ_TRANSLATE["https://buymeacoffee.com/yourname"]}
              sizeClass="h-11 px-4 pl-2 pr-3"
              defaultValue={buymeacoffeeUrl}
              onChange={(e) => setBuymeacoffeeUrl(e.currentTarget.value)}
            />
          </div>
        </div>
      </div>

      {/* ---- */}
      {error && <Alert type="error">{error.message}</Alert>}
      {/* ---- */}

      <div className="SocialsProfileForm__submit pt-2 inline-flex">
        <ButtonPrimary
          type="submit"
          loading={loading}
          disabled={loading}
          className="w-full"
        >
          {NCMAZ_TRANSLATE["Update profile"]}
        </ButtonPrimary>
      </div>
    </form>
  );
};

export default SocialsProfileForm;
