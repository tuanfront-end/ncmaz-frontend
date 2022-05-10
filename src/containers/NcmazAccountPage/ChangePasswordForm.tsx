import ButtonPrimary from "components/Button/ButtonPrimary";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import { UserFullData } from "data/types";
import React, { FC } from "react";

interface ChangePasswordFormProps {
  userData: UserFullData;
}

const ChangePasswordForm: FC<ChangePasswordFormProps> = ({ userData }) => {
  return (
    <div className="space-y-5 sm:space-y-6 md:sm:space-y-7">
      <div>
        <h2 className="text-2xl font-semibold">Password</h2>
        <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          Manage your password
        </span>
      </div>
      <div className="w-24 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* ---- */}
      <div>
        <Label>Current password</Label>
        <Input className="mt-1.5" defaultValue="Eden Tuan" />
      </div>
      {/* ---- */}
      <div>
        <Label>New password</Label>
        <Input className="mt-1.5" defaultValue="Eden Tuan" />
      </div>
      {/* ---- */}
      <div>
        <Label>Confirm password</Label>
        <Input className="mt-1.5" defaultValue="Eden Tuan" />
      </div>
      <div className="pt-2 inline-flex">
        <ButtonPrimary className="w-full">Update Password</ButtonPrimary>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
