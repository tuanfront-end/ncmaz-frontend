import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import ButtonThird from "components/Button/ButtonThird";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import NcModal from "components/NcModal/NcModal";
import NCMAZ_TRANSLATE from "contains/translate";
import React, { FC, useEffect, useRef, useState } from "react";

interface ModalGetLinkProps {
  onSubmit: (url: string) => void;
  onCloseModal: () => void;
  isOpen: boolean;
  defaultLink: string;
}

const ModalGetLink: FC<ModalGetLinkProps> = ({
  onSubmit,
  isOpen,
  onCloseModal,
  defaultLink,
}) => {
  const initialFocusRef = useRef(null);

  const [urlState, setUrlState] = useState("");

  useEffect(() => {
    setUrlState(defaultLink);
  }, [defaultLink]);

  function closeModal() {
    onCloseModal();
  }

  const handleApply = () => {
    onSubmit(urlState);
    closeModal();
  };

  const handleRemoveLink = () => {
    onSubmit("");
    closeModal();
  };

  const renderContent = () => {
    return (
      <div>
        <div className="relative flex flex-col px-5 py-6 space-y-5">
          {renderInsertFromUrl()}
        </div>
        <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
          <ButtonThird onClick={closeModal} sizeClass="px-4 py-2 sm:px-5">
            {NCMAZ_TRANSLATE["Cancel"]}
          </ButtonThird>
          <div>
            <ButtonSecondary
              className="ml-2"
              onClick={handleRemoveLink}
              sizeClass="px-4 py-2 sm:px-5"
            >
              {NCMAZ_TRANSLATE["Unset link"]}
            </ButtonSecondary>
            <ButtonPrimary
              className="ml-2"
              onClick={handleApply}
              sizeClass="px-4 py-2 sm:px-5"
            >
              {NCMAZ_TRANSLATE["Apply"]}
            </ButtonPrimary>
          </div>
        </div>
      </div>
    );
  };

  const renderInsertFromUrl = () => {
    return (
      <>
        <form
          className="block"
          onSubmit={(event) => {
            event.preventDefault();
            handleApply();
          }}
          action="/#"
        >
          <Label>{NCMAZ_TRANSLATE["Paste or type a link"]}</Label>
          <Input
            className="mt-1"
            rounded="rounded-xl"
            type={"text"}
            onChange={(e) => setUrlState(e.target.value)}
            defaultValue={urlState}
            ref={initialFocusRef}
          />
        </form>
      </>
    );
  };

  return (
    <NcModal
      contentPaddingClass=""
      isOpenProp={isOpen}
      onCloseModal={closeModal}
      contentExtraClass="max-w-screen-md"
      renderContent={renderContent}
      renderTrigger={() => null}
      modalTitle=""
      initialFocusRef={initialFocusRef}
    />
  );
};

export default ModalGetLink;
