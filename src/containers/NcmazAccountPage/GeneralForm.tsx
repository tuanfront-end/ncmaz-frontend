import Alert from "components/Alert/Alert";
import ButtonPrimary from "components/Button/ButtonPrimary";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import NCMAZ_TRANSLATE from "contains/translate";
import { UserFullData } from "data/types";
import React, { FC } from "react";
import useMutaionUpdateUser from "./useMutaionUpdateUser";

interface GeneralFormProps {
  userData: UserFullData;
}

const GeneralForm: FC<GeneralFormProps> = ({ userData }) => {
  const [emailValue, setEmailValue] = React.useState(userData.email || "");
  const [displayNameValue, setDisplayNameValue] = React.useState(
    userData.name || ""
  );

  //
  const { data, error, loading, mutationUpdateUser } = useMutaionUpdateUser();
  //

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutationUpdateUser({
      variables: {
        id: userData.id,
        email: emailValue,
        displayName: displayNameValue,
      },
    });
  };

  return (
    <form
      action="#"
      className="NcmazAccountPage-GeneralForm space-y-5 sm:space-y-6 md:sm:space-y-7"
      onSubmit={handleSubmitForm}
    >
      <div>
        <h2 className="text-2xl font-semibold">
          {NCMAZ_TRANSLATE["General settings"]}
        </h2>
        <span className="block mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {NCMAZ_TRANSLATE["Update your username and manage your account"]}
        </span>
      </div>
      <div className="w-24 border-b border-neutral-200 dark:border-neutral-700"></div>
      {/* ---- */}

      <div>
        <Label>{NCMAZ_TRANSLATE["Display Name"]}</Label>
        <Input
          className="mt-1.5"
          defaultValue={displayNameValue}
          onChange={(e) => setDisplayNameValue(e.currentTarget.value)}
          required
        />
      </div>

      {/* ---- */}
      <div>
        <Label>{NCMAZ_TRANSLATE["Email"]}</Label>
        <div className="mt-1.5 flex">
          <span className="inline-flex items-center px-2.5 rounded-l-2xl border border-r-0 border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400 text-sm">
            <i className="text-2xl las la-envelope"></i>
          </span>
          <Input
            className="!rounded-l-none"
            placeholder="example@email.com"
            defaultValue={emailValue}
            onChange={(e) => setEmailValue(e.currentTarget.value)}
            required
          />
        </div>
      </div>

      {/* ---- */}
      {error && <Alert type="error">{error.message}</Alert>}
      {/* ---- */}

      <div className="inline-flex pt-2">
        <ButtonPrimary
          type="submit"
          className="w-full"
          loading={loading}
          disabled={loading}
        >
          {NCMAZ_TRANSLATE["Update profile"]}
        </ButtonPrimary>
      </div>
    </form>
  );
};

export default GeneralForm;
