import ButtonPrimary from "components/Button/ButtonPrimary";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import { UserFullData } from "data/types";
import React, { FC } from "react";

interface SocialsProfileFormProps {
  userData: UserFullData;
}

const SocialsProfileForm: FC<SocialsProfileFormProps> = ({ userData }) => {
  return (
    <div className="space-y-5 sm:space-y-6 md:sm:space-y-7">
      <div>
        <h2 className="text-2xl font-semibold">Social Profiles</h2>
        <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Add elsewhere links to your profile
        </span>
      </div>
      <div className="w-24 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* ---- */}

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-2.5">
        <div>
          <Label>Facebook</Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-facebook-f"></i>
            </span>
            <Input
              className="!rounded-l-none"
              placeholder="yourfacebook"
              sizeClass="h-11 px-4 pl-2 pr-3"
            />
          </div>
        </div>
        <div>
          <Label>Twitter</Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-twitter"></i>
            </span>
            <Input
              className="!rounded-l-none"
              placeholder="yourtwitter"
              sizeClass="h-11 px-4 pl-2 pr-3"
            />
          </div>
        </div>
        <div>
          <Label>Telegram</Label>
          <div className="mt-1.5 flex">
            <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
              <i className="text-2xl lab la-telegram-plane"></i>
            </span>
            <Input
              className="!rounded-l-none"
              placeholder="yourtelegram"
              sizeClass="h-11 px-4 pl-2 pr-3"
            />
          </div>
        </div>
      </div>

      <div className="inline-flex pt-2">
        <ButtonPrimary className="w-full">Update profile</ButtonPrimary>
      </div>
    </div>
  );
};

export default SocialsProfileForm;
