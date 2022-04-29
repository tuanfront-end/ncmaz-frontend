import { Alert } from "components/Alert/Alert";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonClose from "components/ButtonClose/ButtonClose";
import CircleLoading from "components/Loading/CircleLoading";
import NCMAZ_TRANSLATE from "contains/translate";
import React, { useState } from "react";

const FeaturedImageUpload = () => {
  const [urlState, setUrlState] = useState("");
  const [altState, setAltState] = useState("");
  //
  const [isUploading, setIsUploading] = useState(false);
  const [uploadErrMess, setUploadErrMess] = useState("");

  const hanldeRemoveImage = () => {
    setUrlState("");
    setAltState("");
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

  const renderInsertFromUpload = () => {
    return (
      <div>
        <div className="relative flex items-center">
          <span className="block text-lg font-semibold">
            {NCMAZ_TRANSLATE["Add a cover image"]}
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
          <div className="relative mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
            {!!urlState && (
              <div className="absolute right-2.5 top-2.5">
                <ButtonClose
                  title="Remove cover image"
                  className="!text-red-500"
                  iconSize="w-6 h-6"
                  onClick={hanldeRemoveImage}
                />
              </div>
            )}
            <div className="space-y-1 text-center">
              {urlState && (
                <div className="mx-auto text-center">
                  <img
                    src={urlState}
                    className="rounded-md max-h-60"
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

        {uploadErrMess && (
          <Alert containerClassName="text-sm mt-4" type="error">
            {uploadErrMess}
          </Alert>
        )}
      </div>
    );
  };

  return <div className="flex-1">{renderInsertFromUpload()}</div>;
};

export default FeaturedImageUpload;
