import { Tab } from "@headlessui/react";
import { Alert } from "components/Alert/Alert";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonThird from "components/Button/ButtonThird";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import CircleLoading from "components/Loading/CircleLoading";
import NcModal from "components/NcModal/NcModal";
import NCMAZ_TRANSLATE from "contains/translate";
import React, { FC, useState } from "react";
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
  const [isUploading, setIsUploading] = useState(false);
  const [uploadErrMess, setUploadErrMess] = useState("");

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

  function fileValidation(filePath: string) {
    // Allowing file type
    const allowedExtensions =
      /(\.jpg|\.jpeg|\.png|\.gif|\.ico|\.webp|\.JPG|\.JPEG|\.PNG|\.GIF)$/i;
    return allowedExtensions.exec(filePath);
  }

  const handleUploadImageChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setUploadErrMess("");
    if (event.target.files && event.target.files[0]) {
      //
      setIsUploading(true);
      const file = event.target.files[0];

      if (!fileValidation(file.name)) {
        setUploadErrMess(
          `${NCMAZ_TRANSLATE["File type is not allowed"]}. ${NCMAZ_TRANSLATE["Only image files are permitted"]}.`
        );
        setIsUploading(false);
        return;
      }

      const formData = new FormData();
      formData.append("file", file);
      formData.append("caption", altState);
      formData.append("alt", altState);

      // Fire the request.
      jQuery
        .ajax({
          url: window.frontendObject.restVarsEndpoint,
          method: "POST",
          processData: false,
          contentType: false,
          beforeSend: function (xhr: any) {
            xhr.setRequestHeader(
              "X-WP-Nonce",
              window.frontendObject.restVarsNonce
            );
          },
          data: formData,
        })
        .done(function (response: any) {
          setUrlState(response.source_url);
          setAltState(response.alt_text);
        })
        .fail(function (response: any) {
          const errorMess =
            response.responseJSON?.message ||
            NCMAZ_TRANSLATE["somethingWentWrong"];
          setUploadErrMess(errorMess);
        })
        .always(function () {
          setIsUploading(false);
        });
    }
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
        <div className="relative flex items-center">
          <span className="block text-base font-semibold">
            {NCMAZ_TRANSLATE["Upload image"]}
          </span>
          {isUploading && (
            <CircleLoading
              className="ml-3 text-blue-600 "
              childClassName="w-5 h-5"
            />
          )}
        </div>
        <label
          htmlFor="file-upload-2"
          className={`block mt-3 ${
            isUploading ? "cursor-not-allowed animate-pulse" : "cursor-pointer"
          }`}
        >
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              {urlState && (
                <div className="mx-auto text-center">
                  <img
                    src={urlState}
                    className="rounded-md max-h-96"
                    alt={altState}
                  />
                </div>
              )}
              {!urlState && (
                <svg
                  className="mx-auto h-12 w-12 text-neutral-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              )}
              <div className="flex justify-center text-sm text-neutral-6000 dark:text-neutral-300">
                <label className="relative cursor-pointer  rounded-md font-medium text-primary-6000 dark:text-primary-400 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                  <span>Upload a file</span>
                  <input
                    disabled={isUploading}
                    id="file-upload-2"
                    name="fileUpload"
                    type="file"
                    className="sr-only"
                    onChange={handleUploadImageChange}
                  />
                </label>
                <p className="hidden sm:block pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                PNG, JPG, GIF, WEBP, SVG ...
              </p>
            </div>
          </div>
        </label>

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

        {uploadErrMess && (
          <Alert containerClassName="text-sm mt-4" type="error">
            {uploadErrMess}
          </Alert>
        )}
      </div>
    );
  };

  const renderTabsAddImages = () => {
    return (
      <div>
        <Tab.Group
          onChange={(index) => {
            index && setUrlState("");
            setUploadErrMess("");
          }}
        >
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
                  className={`bg-neutral-50 dark:bg-black/10 rounded-xl p-4 space-y-8 focus:outline-none 
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
