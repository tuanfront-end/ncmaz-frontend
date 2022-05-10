import Avatar from "components/Avatar/Avatar";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ImageUploadToServer from "components/ImageUploadToServer";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import Textarea from "components/Textarea/Textarea";
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

  const [avatarImage, setAvatarImage] = React.useState({
    id: userData.ncUserMeta?.featuredImage?.id || "",
    sourceUrl: userData.ncUserMeta?.featuredImage?.sourceUrl || "",
    altText: userData.ncUserMeta?.featuredImage?.altText || "",
  });
  const [coverImage, setCoverImage] = React.useState({
    id: userData.ncUserMeta?.backgroundImage?.id || "",
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
        id: frontendObject.currentUser?.id,
      },
    });
  };

  const renderAvatar2 = () => {
    return (
      <div>
        <Label>Featured Image</Label>
        <div className="mt-2 flex-shrink-0 flex items-start">
          <div className="relative rounded-full overflow-hidden flex">
            <Avatar sizeClass="w-32 h-32" />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-neutral-50 cursor-pointer">
              <svg
                width="30"
                height="30"
                viewBox="0 0 30 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 5H7.5C6.83696 5 6.20107 5.26339 5.73223 5.73223C5.26339 6.20107 5 6.83696 5 7.5V20M5 20V22.5C5 23.163 5.26339 23.7989 5.73223 24.2678C6.20107 24.7366 6.83696 25 7.5 25H22.5C23.163 25 23.7989 24.7366 24.2678 24.2678C24.7366 23.7989 25 23.163 25 22.5V17.5M5 20L10.7325 14.2675C11.2013 13.7988 11.8371 13.5355 12.5 13.5355C13.1629 13.5355 13.7987 13.7988 14.2675 14.2675L17.5 17.5M25 12.5V17.5M25 17.5L23.0175 15.5175C22.5487 15.0488 21.9129 14.7855 21.25 14.7855C20.5871 14.7855 19.9513 15.0488 19.4825 15.5175L17.5 17.5M17.5 17.5L20 20M22.5 5H27.5M25 2.5V7.5M17.5 10H17.5125"
                  stroke="currentColor"
                  strokeWidth={1.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="mt-1 text-xs">Change Image</span>
            </div>
            <input
              type="file"
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </div>
        </div>
      </div>
    );
  };

  const renderAvatar = () => {
    return (
      <div className="inline-flex flex-col">
        <Label>Profile picture</Label>
        <ImageUploadToServer defaultImage={avatarImage} className="mt-1.5 " />
      </div>
    );
  };

  const renderUserBackground = () => {
    return (
      <div>
        <Label>Cover photo</Label>
        <ImageUploadToServer
          defaultImage={coverImage}
          className="mt-1.5 flex-1"
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
        <h2 className="text-2xl font-semibold">Edit Profile</h2>
        <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Set up your profile and manage your account
        </span>
      </div>
      <div className="w-24 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* ---- */}
      {renderAvatar()}

      {/* ---- */}
      {renderUserBackground()}

      {/* ---- */}
      <div>
        <Label>First Name</Label>
        <Input className="mt-1.5" defaultValue="First Name" />
      </div>

      {/* ---- */}
      <div>
        <Label>Last Name</Label>
        <Input className="mt-1.5" defaultValue="Last Name" />
      </div>

      {/* ---- */}
      <div>
        <Label>Nickname (required)</Label>
        <Input className="mt-1.5" defaultValue="Nickname (required)" />
      </div>

      {/* ---- */}
      <div>
        <Label>Biographical Info</Label>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          Biographical Info, this will show up in the author page.
        </span>
        <Textarea
          rows={5}
          className="mt-1.5"
          placeholder="Something about yourself in a few word."
        />
      </div>

      {/* ---- */}
      <div>
        <Label>Short Bio</Label>
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          A short Bio (e.g. occupation), this will show up in the author cards.
        </span>
        <Input
          className="mt-1.5"
          placeholder="UI/UX Designer"
          defaultValue="NcBio"
        />
      </div>

      {/* ---- */}
      <div className="">
        <Label>Website</Label>
        <div className="mt-1.5 flex">
          <span className="inline-flex items-center px-3 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
            https://
          </span>
          <Input className="!rounded-l-none" placeholder="yourwebsite.com" />
        </div>
      </div>

      {/* ---- */}
      <div className="inline-flex pt-2">
        <ButtonPrimary className="w-full">Update profile</ButtonPrimary>
      </div>
    </form>
  );
};

export default EditProfileForm;
