import { Tab } from "@headlessui/react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonThird from "components/Button/ButtonThird";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import NcModal from "components/NcModal/NcModal";
import NCMAZ_TRANSLATE from "contains/translate";
import React, { FC, useState } from "react";
import ImageUploadToServer, {
  ImageState,
} from "components/ImageUploadToServer";

import { EditorItemImageAttrs } from "./MenuBar";

interface MenuItemImageProps {
  action: ({ url, alt, title }: EditorItemImageAttrs) => void;
  children?: React.ReactNode;
}

const MenuItemImage: FC<MenuItemImageProps> = ({ action, children }) => {
  let [isOpen, setIsOpen] = useState(false);
  let [catImages] = useState([
    NCMAZ_TRANSLATE["Insert from URL"],
    NCMAZ_TRANSLATE["Upload"],
  ]);

  const [urlState, setUrlState] = useState("");
  const [altState, setAltState] = useState("");
  //

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleApply = () => {
    action({ url: urlState, alt: altState });
    closeModal();
  };

  const renderContent = () => {
    return (
      <div>
        <div className="relative flex flex-col px-5 py-6 space-y-5">
          {renderTabsAddImages()}
        </div>
        <div className="p-5 bg-neutral-50 dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
          <ButtonThird onClick={closeModal} sizeClass="px-4 py-2 sm:px-5">
            {NCMAZ_TRANSLATE["Cancel"]}
          </ButtonThird>
          <ButtonPrimary
            disabled={!urlState}
            onClick={handleApply}
            sizeClass="px-4 py-2 sm:px-5"
          >
            {NCMAZ_TRANSLATE["Apply"]}
          </ButtonPrimary>
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
        >
          <Label>{NCMAZ_TRANSLATE["Image URL"]}</Label>
          <Input
            className="mt-1"
            rounded="rounded-xl"
            type={"text"}
            placeholder="Paste or type URL"
            onChange={(e) => setUrlState(e.target.value)}
            defaultValue={urlState}
          />
        </form>
        <form
          className="block"
          onSubmit={(event) => {
            event.preventDefault();
            handleApply();
          }}
        >
          <Label>{NCMAZ_TRANSLATE["Alt text (alternative text)"]}</Label>
          <Input
            className="mt-1"
            rounded="rounded-xl"
            type={"text"}
            onChange={(e) => setAltState(e.target.value)}
            defaultValue={altState}
          />
        </form>
      </>
    );
  };

  const renderInsertFromUpload = () => {
    return (
      <div>
        <ImageUploadToServer
          onChangeImage={(image) => {
            setUrlState(image.sourceUrl);
          }}
        />

        {urlState && (
          <div className="mt-4">
            <Label>{NCMAZ_TRANSLATE["Alt text (alternative text)"]}</Label>
            <Input
              className="mt-1"
              rounded="rounded-xl"
              type={"text"}
              onChange={(e) => setAltState(e.target.value)}
              defaultValue={altState}
            />
          </div>
        )}
      </div>
    );
  };

  const renderTabsAddImages = () => {
    return (
      <div>
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-primary-900/10 dark:bg-primary-100/10 rounded-xl">
            {catImages.map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  `w-full py-2.5 text-sm leading-5 font-medium rounded-lg focus:outline-none focus:ring-2 ring-offset-2 
                  ring-offset-blue-400 ring-white/60 dark:ring-black/0 ${
                    selected
                      ? "bg-white dark:bg-neutral-900 text-primary-700 dark:text-primary-100 shadow"
                      : " hover:bg-white/30 dark:hover:bg-black/[0.15] text-neutral-6000 dark:text-primary-200 "
                  }`
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {catImages.map((posts, idx) => {
              return (
                <Tab.Panel
                  key={idx}
                  className={`bg-neutral-50 dark:bg-black/10 rounded-xl p-4 space-y-5 focus:outline-none 
                  focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white/60 dark:ring-black/0`}
                >
                  {!idx ? renderInsertFromUrl() : renderInsertFromUpload()}
                </Tab.Panel>
              );
            })}
          </Tab.Panels>
        </Tab.Group>
      </div>
    );
  };

  return (
    <>
      <div className="inline-flex" onClick={openModal}>
        {children}
      </div>
      <NcModal
        contentPaddingClass=""
        isOpenProp={isOpen}
        onCloseModal={closeModal}
        contentExtraClass="max-w-screen-md"
        renderContent={renderContent}
        renderTrigger={() => null}
        modalTitle="Add Image"
      />
    </>
  );
};

export default MenuItemImage;
