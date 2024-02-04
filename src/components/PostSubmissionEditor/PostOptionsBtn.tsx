import { Listbox, Popover, Switch, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/24/solid";
import ButtonPrimary from "components/Button/ButtonPrimary";
import ButtonSecondary from "components/Button/ButtonSecondary";
import ImageUploadToServer, {
  ImageState,
} from "components/ImageUploadToServer";
import Input from "components/Input/Input";
import Label from "components/Label/Label";
import Textarea from "components/Textarea/Textarea";
import NCMAZ_TRANSLATE from "contains/translate";
import { PostFormatsType } from "data/postCardType";
import { debounce } from "lodash";
import React, { FC, Fragment, useState } from "react";

let postFormats: PostFormatsType[] = [
  "Standard",
  "post-format-audio",
  "post-format-gallery",
  "post-format-video",
];

type GalleryImages = Record<number, ImageState>;

export interface PostOptionsData {
  postFormatsSelected: typeof postFormats[number];
  excerptText: string;
  objGalleryImgs: GalleryImages;
  videoUrl: string;
  audioUrl: string;
  isAllowComments: boolean;
}

interface PostOptionsBtnProps {
  onSubmit: (data: PostOptionsData) => void;
  defaultData: PostOptionsData;
}

const PostOptionsBtn: FC<PostOptionsBtnProps> = ({ onSubmit, defaultData }) => {
  const [postFormatsSelected, setPostFormatsSelected] = useState(
    defaultData.postFormatsSelected || postFormats[0]
  );
  const [excerptText, setExcerptText] = useState(defaultData.excerptText);
  const [videoUrl, setVideoUrl] = useState(defaultData.videoUrl);
  const [audioUrl, setAudioUrl] = useState(defaultData.audioUrl);
  const [objGalleryImgs, setObjGalleryImgs] = useState<GalleryImages>(
    defaultData.objGalleryImgs || {}
  );
  const [isAllowComments, setIsAllowComments] = useState(
    defaultData.isAllowComments
  );

  //

  const debounceGetExcerpt = debounce(function (e: string) {
    setExcerptText(e);
  }, 200);
  const debounceVideoUrlChange = debounce(function (e: string) {
    setVideoUrl(e);
  }, 200);
  const debounceAudioUrlChange = debounce(function (e: string) {
    setAudioUrl(e);
  }, 200);

  const handleClickApply = () => {
    onSubmit({
      postFormatsSelected,
      excerptText,
      videoUrl,
      audioUrl,
      objGalleryImgs,
      isAllowComments,
    });
  };

  const handleClickCancel = () => {};
  //

  const renderBtnOpenPopover = () => {
    return (
      <ButtonSecondary
        className="flex-shrink-0"
        sizeClass="p-2 w-12 !h-12"
        fontSize="text-base font-medium"
        title="Post options"
      >
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.0002 22.6298C11.3302 22.6298 10.6502 22.4798 10.1202 22.1698L4.62023 18.9998C2.38023 17.4898 2.24023 17.2598 2.24023 14.8898V9.1098C2.24023 6.7398 2.37023 6.5098 4.57023 5.0198L10.1102 1.8198C11.1602 1.2098 12.8102 1.2098 13.8602 1.8198L19.3802 4.9998C21.6202 6.5098 21.7602 6.7398 21.7602 9.1098V14.8798C21.7602 17.2498 21.6302 17.4798 19.4302 18.9698L13.8902 22.1698C13.3502 22.4798 12.6702 22.6298 12.0002 22.6298ZM12.0002 2.8698C11.5802 2.8698 11.1702 2.9498 10.8802 3.1198L5.38023 6.2998C3.75023 7.3998 3.75023 7.3998 3.75023 9.1098V14.8798C3.75023 16.5898 3.75023 16.5898 5.42023 17.7198L10.8802 20.8698C11.4702 21.2098 12.5402 21.2098 13.1302 20.8698L18.6302 17.6898C20.2502 16.5898 20.2502 16.5898 20.2502 14.8798V9.1098C20.2502 7.3998 20.2502 7.3998 18.5802 6.2698L13.1202 3.1198C12.8302 2.9498 12.4202 2.8698 12.0002 2.8698Z"
            fill="currentColor"
          />
          <path
            d="M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z"
            fill="currentColor"
          />
        </svg>
      </ButtonSecondary>
    );
  };

  const renderListBoxPostformat = () => {
    return (
      <div>
        <Label>Post format</Label>
        <Listbox value={postFormatsSelected} onChange={setPostFormatsSelected}>
          <div className="relative z-10 mt-1">
            <Listbox.Button className="focus:outline-none relative w-full cursor-default rounded-full py-2 pl-3 pr-10 text-left border border-neutral-100 dark:border-neutral-700">
              <span className="block truncate capitalize">
                {postFormatsSelected.replace(/^post-format-/g, "")}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="focus:outline-none absolute mt-2 max-h-60 w-full overflow-auto rounded-2xl bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 sm:text-sm">
                {postFormats.map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate capitalize ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {person.replace(/^post-format-/g, "")}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    );
  };

  const renderUploadGallery = () => {
    return (
      <div>
        <span className="text-base font-semibold">
          {NCMAZ_TRANSLATE["Gallery images"]}
        </span>
        <div className="flex space-x-2.5 py-2 overflow-x-auto snap-x customScrollBar">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, idx) => (
            <div className="flex-shrink-0 snap-start" key={idx}>
              <Label>{`${NCMAZ_TRANSLATE["Image"]} ${item}`}</Label>
              <ImageUploadToServer
                defaultImage={objGalleryImgs[item]}
                onChangeImage={(image) => {
                  setObjGalleryImgs((prevState) => ({
                    ...prevState,
                    [item]: image,
                  }));
                }}
                contentClassName="p-3"
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderExcerptTextarea = () => {
    return (
      <div>
        <Label>{NCMAZ_TRANSLATE["Write an excerpt (optional)"]}</Label>
        <Textarea
          onChange={(event) => {
            debounceGetExcerpt(event.currentTarget.value);
          }}
          defaultValue={excerptText}
          className="mt-1"
        />
      </div>
    );
  };

  const renderInputVideoUrl = () => {
    return (
      <div>
        <Label>{`Video URL (Youtube, Vimeo, mp4 ... )`}</Label>
        <Input
          onChange={(event) => {
            debounceVideoUrlChange(event.currentTarget.value);
          }}
          defaultValue={videoUrl}
          className="mt-1"
          placeholder="Video url..."
        />
      </div>
    );
  };

  const renderInputAudio = () => {
    let sp = "mp3/mp4/Youtube";
    if (frontendObject.musicPlayerMediaSource) {
      sp = frontendObject.musicPlayerMediaSource.join("/");
    }

    return (
      <div>
        <Label className="block capitalize">{`Audio URL (${sp})`}</Label>
        <Input
          onChange={(event) => {
            debounceAudioUrlChange(event.currentTarget.value);
          }}
          defaultValue={audioUrl}
          className="mt-1"
          placeholder="Audio url..."
        />
      </div>
    );
  };

  const renderAllowCommentSwitch = () => {
    return (
      <div className="flex justify-between items-center">
        <Label>{NCMAZ_TRANSLATE["Allow comments"]}</Label>
        <Switch
          checked={isAllowComments}
          onChange={setIsAllowComments}
          className={`${isAllowComments ? "bg-primary-700" : "bg-gray-700"}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">{NCMAZ_TRANSLATE["Allow comments"]}</span>
          <span
            aria-hidden="true"
            className={`${isAllowComments ? "translate-x-9" : "translate-x-0"}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    );
  };

  return (
    <Popover className="relative ml-auto lg:ml-2.5">
      {({ open, close }) => (
        <>
          <Popover.Button as={"div"}>{renderBtnOpenPopover()}</Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
            unmount={false}
          >
            <Popover.Panel
              unmount={false}
              className="absolute z-10 w-screen max-w-xs sm:max-w-sm md:max-w-md px-4 mb-4 left-full lg:left-1/2 -translate-x-full lg:-translate-x-1/2 bottom-full sm:px-0 lg:max-w-2xl"
            >
              <div className="rounded-2xl shadow-xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700">
                <div className="relative flex flex-col px-5 py-6 space-y-5">
                  <h3 className="text-xl font-semibold my-0">Post options</h3>
                  <div className="w-full border-b my-3 border-neutral-300 dark:border-neutral-700"></div>

                  {renderExcerptTextarea()}

                  {renderListBoxPostformat()}

                  {postFormatsSelected === "post-format-gallery" &&
                    renderUploadGallery()}

                  {postFormatsSelected === "post-format-video" &&
                    renderInputVideoUrl()}

                  {postFormatsSelected === "post-format-audio" &&
                    renderInputAudio()}

                  {renderAllowCommentSwitch()}
                </div>
                <div className="p-5 bg-neutral-50 rounded-b-2xl dark:bg-neutral-900 dark:border-t dark:border-neutral-800 flex items-center justify-between">
                  <ButtonSecondary
                    onClick={() => {
                      handleClickCancel();
                      close();
                    }}
                    sizeClass="px-4 py-2 sm:px-5"
                  >
                    {NCMAZ_TRANSLATE["Cancel"]}
                  </ButtonSecondary>
                  <ButtonPrimary
                    onClick={() => {
                      handleClickApply();
                      close();
                    }}
                    sizeClass="px-4 py-2 sm:px-5"
                  >
                    {NCMAZ_TRANSLATE["Apply"]}
                  </ButtonPrimary>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
};

export default PostOptionsBtn;
