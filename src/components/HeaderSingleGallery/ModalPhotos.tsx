import React, { FC, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import NextPrev from "components/NextPrev/NextPrev";
import ButtonClose from "components/ButtonClose/ButtonClose";
import Glide from "@glidejs/glide";
import NcImage from "components/NcImage/NcImage";

export interface ModalPhotosProps {
  imgs: string[];
  onClose: () => void;
  isOpen: boolean;
  initFocus?: number;
}

const ModalPhotos: FC<ModalPhotosProps> = ({
  imgs,
  isOpen,
  onClose,
  initFocus = 0,
}) => {
  const UNIQUE_CLASS = "modalPhotos-single-gallery";

  useEffect(() => {
    if (!isOpen) return;
    if (!document.querySelector(`.${UNIQUE_CLASS}`)) {
      return;
    }
    new Glide(`.${UNIQUE_CLASS}`, {
      gap: 0,
      perView: 1,
      startAt: initFocus,
    }).mount();
  }, [isOpen, initFocus]);

  const renderSlider = () => {
    return (
      <div className={`${UNIQUE_CLASS} group relative z-10 w-full h-full`}>
        {/*  */}
        <div
          className="controls_nav glide__bullets my-5"
          data-glide-el="controls[nav]"
        >
          {imgs.map((_, index) => (
            <div className="text-left hidden">
              <span className="text-3xl font-semibold"> {index + 1}</span>
              <span> / {imgs.length}</span>
            </div>
          ))}
        </div>
        {/*  */}

        <div className="glide__track h-full" data-glide-el="track">
          <ul className="glide__slides h-full">
            {imgs.map((item, index) => (
              <li className="glide__slide h-full" key={index}>
                <NcImage src={item} containerClassName="w-full h-full" />
              </li>
            ))}
          </ul>
        </div>
        {/*  */}
        <div
          className="fixed group-hover:opacity-100 z-20 inset-x-4 max-w-7xl mx-auto top-1/2 transform -translate-y-1/2 flex justify-between glide__arrows"
          data-glide-el="controls"
        >
          <NextPrev onlyPrev btnClassName="w-8 h-8 sm:w-10 sm:h-10" />
          <NextPrev onlyNext btnClassName="w-8 h-8 sm:w-10 sm:h-10" />
        </div>
      </div>
    );
  };

  const renderModalPhotos = () => {
    return (
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-y-auto dark bg-neutral-800 text-neutral-200 hiddenScrollbar"
        onClose={onClose}
        open={isOpen}
      >
        <div className="min-h-screen px-4 text-center">
          <Dialog.Overlay className="fixed inset-0 bg-white dark:bg-neutral-800" />
          <div className="absolute left-2 top-2 md:top-4 md:left-4">
            <ButtonClose
              iconSize="w-6 h-6"
              className=" w-11 h-11"
              onClick={onClose}
            />
          </div>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="relative inline-block w-full max-w-6xl my-8 align-middle mx-auto">
            {renderSlider()}
          </div>
        </div>
      </Dialog>
    );
  };

  return renderModalPhotos();
};

export default ModalPhotos;
