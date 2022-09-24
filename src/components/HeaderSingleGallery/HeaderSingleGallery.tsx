import React, { FC, useState } from "react";
import NcImage from "components/NcImage/NcImage";
import ModalPhotos from "./ModalPhotos";
import NCMAZ_TRANSLATE from "contains/translate";

export interface ACFImageType {
  ID: number;
  id: number;
  title: string;
  filename: string;
  filesize: number;
  url: string;
  link: string;
  alt: string;
  author: string;
  description: string;
  caption: string;
  name: string;
  status: string;
  uploaded_to: number;
  date: string;
  modified: string;
  menu_order: number;
  mime_type: string;
  type: string;
  subtype: string;
  icon: string;
  width: number;
  height: number;
  sizes: Sizes;
}

interface Sizes {
  thumbnail: string;
  "thumbnail-width": number;
  "thumbnail-height": number;
  medium: string;
  "medium-width": number;
  "medium-height": number;
  medium_large: string;
  "medium_large-width": number;
  "medium_large-height": number;
  large: string;
  "large-width": number;
  "large-height": number;
  "1536x1536": string;
  "1536x1536-width": number;
  "1536x1536-height": number;
  "2048x2048": string;
  "2048x2048-width": number;
  "2048x2048-height": number;
}

export interface HeaderSingleGalleryProps {
  className?: string;
  photos?: ACFImageType[];
}

const HeaderSingleGallery: FC<HeaderSingleGalleryProps> = ({
  className = "",
  photos = [],
}) => {
  //
  console.log({ photos });

  let PHOTOS = photos.filter((item) => !!item.url);
  PHOTOS = PHOTOS.filter((_, index) => index < 5);
  if (!PHOTOS[0]) {
    return null;
  }

  const [isOpen, setIsOpen] = useState(false);
  const [openFocusIndex, setOpenFocusIndex] = useState(0);

  const handleOpenModal = (index: number) => {
    setIsOpen(true);
    setOpenFocusIndex(index);
  };
  const handleCloseModal = () => setIsOpen(false);

  return (
    <div className={className}>
      {/* SINGLE HEADER */}
      <header className="rounded-xl">
        <div className="relative grid grid-cols-3 sm:grid-cols-4 gap-2 my-10">
          <div
            className="col-span-2 row-span-2 relative rounded-xl overflow-hidden z-0 cursor-pointer"
            onClick={() => handleOpenModal(0)}
          >
            <NcImage
              containerClassName="absolute inset-0"
              className="object-cover w-full h-full rounded-xl"
              src={PHOTOS[0].url}
              alt={PHOTOS[0].alt}
              loading="eager"
            />
            <div className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity"></div>
          </div>
          {PHOTOS.filter((_, i) => i >= 1).map((item, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden z-0 ${
                index >= 2 ? "hidden sm:block" : ""
              }`}
            >
              <NcImage
                containerClassName="aspect-w-6 aspect-h-5"
                className="object-cover w-full h-full rounded-xl "
                src={item?.sizes?.large || item.url}
                alt={item.alt}
              />

              {/* OVERLAY */}
              <div
                className="absolute inset-0 bg-neutral-900 bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => handleOpenModal(index + 1)}
              />
            </div>
          ))}

          <div
            className="absolute hidden md:flex md:items-center md:justify-center left-3 bottom-3 px-4 py-2 rounded-xl bg-neutral-100 text-neutral-500 cursor-pointer hover:bg-neutral-200 z-10"
            onClick={() => handleOpenModal(0)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
            <span className="ml-2 text-neutral-800 text-sm font-medium">
              {NCMAZ_TRANSLATE["showAllPhotos"]}
            </span>
          </div>
        </div>
      </header>
      {/* MODAL PHOTOS */}
      <ModalPhotos
        imgs={photos
          .filter((item) => !!item)
          .map((j) => ({
            sourceUrl: j.url,
            altText: j.alt,
            caption: j.caption,
          }))}
        isOpen={isOpen}
        onClose={handleCloseModal}
        initFocus={openFocusIndex}
      />
    </div>
  );
};

export default HeaderSingleGallery;
