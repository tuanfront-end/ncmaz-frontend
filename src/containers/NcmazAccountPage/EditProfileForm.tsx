import Alert from "components/Alert/Alert";
import Avatar from "components/Avatar/Avatar";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ImageUploadToServer, {
  ImageState,
} from "components/ImageUploadToServer";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import Textarea from "components/Textarea/Textarea";
import NCMAZ_TRANSLATE from "contains/translate";
import { UserFullData } from "data/types";
import React, { FC } from "react";
import useMutaionUpdateUser from "./useMutaionUpdateUser";

interface EditProfileFormProps {
  userData: UserFullData;
}

const EditProfileForm: FC<EditProfileFormProps> = ({ userData }) => {
  const [bioValue, setBioValue] = React.useState(userData.description || "");
  const [shortBioValue, setShortBioValue] = React.useState(
    userData.ncUserMeta?.ncBio || ""
  );
  const [firstNameValue, setFirstNameValue] = React.useState(
    userData.firstName || ""
  );
  const [lastNameValue, setLastNameValue] = React.useState(
    userData.lastName || ""
  );
  const [nicknameValue, setNicknameValue] = React.useState(
    userData.nickname || ""
  );
  const [nicenameValue, setNicenameValue] = React.useState(
    userData.nicename || ""
  );
  const [websiteUrlValue, setWebsiteUrlValue] = React.useState(
    userData.ncUserMeta.websiteUrl || ""
  );

  const [avatarImage, setAvatarImage] = React.useState<ImageState>({
    id: userData.ncUserMeta?.featuredImage?.databaseId || "",
    sourceUrl: userData.ncUserMeta?.featuredImage?.sourceUrl || "",
    altText: userData.ncUserMeta?.featuredImage?.altText || "",
  });
  const [coverImage, setCoverImage] = React.useState<ImageState>({
    id: userData.ncUserMeta?.backgroundImage?.databaseId || "",
    sourceUrl: userData.ncUserMeta?.backgroundImage?.sourceUrl || "",
    altText: userData.ncUserMeta?.backgroundImage?.altText || "",
  });

  //
  const { data, error, loading, mutationUpdateUser } = useMutaionUpdateUser();
  //

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutationUpdateUser({
      variables: {
        id: userData.id,
        description: bioValue,
        ncmazBio: shortBioValue,
        firstName: firstNameValue,
        lastName: lastNameValue,
        nickname: nicknameValue,
        nicename: nicenameValue,
        ncmazWebsiteUrl: websiteUrlValue,
        ncmazFeaturedImage: avatarImage.id || 0,
        ncmazBackgroundImage: coverImage.id || 0,
      },
    });
  };

  const renderAvatar = () => {
    return (
      <div className="inline-flex flex-col">
        <Label>{NCMAZ_TRANSLATE["Profile picture"]}</Label>
        <ImageUploadToServer
          defaultImage={avatarImage}
          className="mt-1.5 "
          onChangeImage={setAvatarImage}
        />
      </div>
    );
  };

  const renderUserBackground = () => {
    return (
      <div>
        <Label>{NCMAZ_TRANSLATE["Cover photo"]}</Label>
        <ImageUploadToServer
          defaultImage={coverImage}
          className="mt-1.5 flex-1"
          onChangeImage={setCoverImage}
        />
      </div>
    );
  };

  return (
    <form
      onSubmit={handleSubmitForm}
      action="#"
      className="space-y-5 sm:space-y-6 md:sm:space-y-7"
    >
      <div>
        <h2 className="text-2xl font-semibold">
          {NCMAZ_TRANSLATE["Edit profile"]}
        </h2>
        <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {NCMAZ_TRANSLATE["Set up your profile and manage your account"]}
        </span>
      </div>
      <div className="w-24 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* ---- */}
      {renderAvatar()}

      {/* ---- */}
      {renderUserBackground()}

      {/* ---- */}
      <div>
        <Label>{NCMAZ_TRANSLATE["First Name"]}</Label>
        <Input
          className="mt-1.5"
          defaultValue={firstNameValue}
          onChange={(e) => setFirstNameValue(e.currentTarget.value)}
        />
      </div>

      {/* ---- */}
      <div>
        <Label>{NCMAZ_TRANSLATE["Last Name"]}</Label>
        <Input
          className="mt-1.5"
          defaultValue={lastNameValue}
          onChange={(e) => setLastNameValue(e.currentTarget.value)}
        />
      </div>

      {/* ---- */}
      <div>
        <Label>
          {NCMAZ_TRANSLATE["Nickname"]} {` `}({NCMAZ_TRANSLATE["required"]})
        </Label>
        <Input
          className="mt-1.5"
          defaultValue={nicknameValue}
          onChange={(e) => setNicknameValue(e.currentTarget.value)}
        />
      </div>

      {/* ---- */}
      <div>
        <Label>{NCMAZ_TRANSLATE["Biographical Info"]}</Label>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          {
            NCMAZ_TRANSLATE[
              "Biographical Info, this will show up in the author page."
            ]
          }
        </span>
        <Textarea
          rows={5}
          className="mt-1.5"
          placeholder="Something about yourself in a few word."
          defaultValue={bioValue}
          onChange={(e) => setBioValue(e.currentTarget.value)}
        />
      </div>

      {/* ---- */}
      <div>
        <Label>Short Bio</Label>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          {
            NCMAZ_TRANSLATE[
              "A short Bio (e.g. occupation), this will show up in the author cards."
            ]
          }
        </span>
        <Input
          className="mt-1.5"
          placeholder="UI/UX Designer"
          defaultValue={shortBioValue}
          onChange={(e) => setShortBioValue(e.currentTarget.value)}
        />
      </div>

      {/* ---- */}
      <div className="">
        <Label>{NCMAZ_TRANSLATE["Website"]}</Label>
        <div className="mt-1.5 flex">
          <span className="inline-flex items-center px-3 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400">
            <i className="las la-link text-xl"></i>
          </span>
          <Input
            className="!rounded-l-none"
            placeholder="yourwebsite.com"
            defaultValue={websiteUrlValue}
            onChange={(e) => setWebsiteUrlValue(e.currentTarget.value)}
          />
        </div>
      </div>

      {/* ---- */}
      {error && <Alert type="error">{error.message}</Alert>}
      {/* ---- */}

      {/* ---- */}
      <div className="inline-flex pt-2">
        <ButtonPrimary loading={loading} disabled={loading} className="w-full">
          {NCMAZ_TRANSLATE["Update profile"]}
        </ButtonPrimary>
      </div>
    </form>
  );
};

export default EditProfileForm;
