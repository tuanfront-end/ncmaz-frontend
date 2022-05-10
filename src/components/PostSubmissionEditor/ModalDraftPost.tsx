import ButtonPrimaryDanger from "components/Button/ButtonPrimaryDanger";
import ButtonSecondary from "components/Button/ButtonSecondary";
import NcModal from "components/NcModal/NcModal";
import NCMAZ_TRANSLATE from "contains/translate";
import React, { FC } from "react";

interface Props {
  show: boolean;
  onCloseModal: () => void;
  onSubmit: () => void;
}

const ModalDraftPost: FC<Props> = ({ show, onCloseModal, onSubmit }) => {
  const handleClickSubmitForm = () => {
    onSubmit();
  };

  const renderContent = () => {
    return (
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          {NCMAZ_TRANSLATE["Draft this post"]}
        </h3>
        <span className="text-sm">
          {
            NCMAZ_TRANSLATE[
              "Post will be changed to draft. You can publish it later."
            ]
          }
        </span>
        <div className="mt-4 space-x-3">
          <ButtonPrimaryDanger onClick={handleClickSubmitForm} type="submit">
            {NCMAZ_TRANSLATE["Draft this post"]}
          </ButtonPrimaryDanger>
          <ButtonSecondary type="button" onClick={onCloseModal}>
            {NCMAZ_TRANSLATE["Cancel"]}
          </ButtonSecondary>
        </div>
      </div>
    );
  };

  return (
    <NcModal
      renderTrigger={() => null}
      isOpenProp={show}
      renderContent={renderContent}
      onCloseModal={onCloseModal}
      contentExtraClass="max-w-screen-sm"
      modalTitle=""
    />
  );
};

export default ModalDraftPost;
