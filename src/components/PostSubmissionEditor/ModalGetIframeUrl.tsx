import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import NcModal from "components/NcModal/NcModal";
import NCMAZ_TRANSLATE from "contains/translate";
import React, { FC, useRef } from "react";

interface Props {
  show: boolean;
  onCloseModal: () => void;
  onSubmit: (value: string) => void;
}

const ModalGetIframeUrl: FC<Props> = ({ show, onCloseModal, onSubmit }) => {
  const [iframeUrl, setIframeUrl] = React.useState("");
  const initialFocusRef = useRef(null);

  const handleClickSubmitForm = (e: any) => {
    e.preventDefault();
    onSubmit(iframeUrl);
    onCloseModal();
  };

  const renderContent = () => {
    return (
      <form action="/#" onSubmit={handleClickSubmitForm}>
        <Label>
          {NCMAZ_TRANSLATE["Type the URL of the iframe you want to embed"]}
        </Label>
        <Input
          required
          className="mt-1"
          type={"text"}
          onChange={(e) => setIframeUrl(e.currentTarget.value)}
          ref={initialFocusRef}
        />

        <div className="mt-4 space-x-3">
          <ButtonPrimary type="submit">
            {NCMAZ_TRANSLATE["Apply"]}
          </ButtonPrimary>
          <ButtonSecondary type="button" onClick={onCloseModal}>
            {NCMAZ_TRANSLATE["Cancel"]}
          </ButtonSecondary>
        </div>
      </form>
    );
  };

  return (
    <NcModal
      renderTrigger={() => null}
      isOpenProp={show}
      renderContent={renderContent}
      onCloseModal={onCloseModal}
      contentExtraClass="max-w-screen-sm"
      modalTitle="Iframe URL"
      initialFocusRef={initialFocusRef}
    />
  );
};

export default ModalGetIframeUrl;
