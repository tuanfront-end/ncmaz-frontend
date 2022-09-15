import Alert from "components/Alert/Alert";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import NCMAZ_TRANSLATE from "contains/translate";
import { UserFullData } from "data/types";
import React, { FC } from "react";
import toast from "react-hot-toast";

import useMutaionUpdateUser from "./useMutaionUpdateUser";

interface ChangePasswordFormProps {
  userData: UserFullData;
}

const ChangePasswordForm: FC<ChangePasswordFormProps> = ({ userData }) => {
  const [newPasswordValue, setNewPasswordValue] = React.useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = React.useState("");

  const DISABLE_THIS_TAB = !!document.querySelector(
    "[data-is-ncmaz-demo-site='yes']"
  );

  //
  const { data, error, loading, mutationUpdateUser } = useMutaionUpdateUser();
  //

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (DISABLE_THIS_TAB) {
      return;
    }
    if (newPasswordValue !== confirmPasswordValue) {
      toast.error("Passwords do not match.");
      return;
    }

    mutationUpdateUser({
      variables: {
        id: userData.id,
        password: newPasswordValue,
      },
    });
  };

  return (
    <form
      action="#"
      onSubmit={handleSubmitForm}
      className="NcmazAccountPage-ChangePasswordForm space-y-5 sm:space-y-6 md:sm:space-y-7"
    >
      <div className="ChangePasswordForm__heading">
        <h2 className="text-2xl font-semibold capitalize">
          {NCMAZ_TRANSLATE["password"]}
        </h2>
        <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {NCMAZ_TRANSLATE["Manage your password"]}
        </span>
      </div>
      <div className="w-24 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* ---- */}
      <div className="ChangePasswordForm__newPass">
        <Label>{NCMAZ_TRANSLATE["New password"]}</Label>
        <Input
          required
          defaultValue={newPasswordValue}
          onChange={(e) => setNewPasswordValue(e.currentTarget.value)}
          type="password"
          minLength={6}
          className="mt-1.5"
        />
        <span className="text-xs text-neutral-500 dark:text-neutral-400">
          {NCMAZ_TRANSLATE["Password must be at least 6 characters"]}
        </span>
      </div>
      {/* ---- */}
      <div className="ChangePasswordForm__ConfirmPass">
        <Label>{NCMAZ_TRANSLATE["Confirm password"]}</Label>
        <Input
          defaultValue={confirmPasswordValue}
          onChange={(e) => setConfirmPasswordValue(e.currentTarget.value)}
          required
          type="password"
          minLength={6}
          className="mt-1.5"
        />
      </div>

      {/* ---- */}
      {error && <Alert type="error">{error.message}</Alert>}
      {DISABLE_THIS_TAB && (
        <Alert type="error">
          This feature is not allowed in the demo site.
        </Alert>
      )}
      {/* ---- */}

      <div className="ChangePasswordForm__submit pt-2 inline-flex">
        <ButtonPrimary
          loading={loading}
          disabled={loading || DISABLE_THIS_TAB}
          className="w-full"
          type="submit"
        >
          {NCMAZ_TRANSLATE["Update password"]}
        </ButtonPrimary>
      </div>
    </form>
  );
};

export default ChangePasswordForm;
