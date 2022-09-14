import { Dialog, Transition } from "@headlessui/react";
import Input from "components/Input/Input";
import NCMAZ_TRANSLATE from "contains/translate";
import React, { Fragment, Suspense, useState } from "react";
const PostOnSearchLazy = React.lazy(() => import("./PostOnSearch"));
import _ from "lodash";

const SearchDropdown = () => {
  const inputRef = React.createRef<HTMLInputElement>();
  let [isOpen, setIsOpen] = useState(false);
  let [searchValue, setSearchValue] = useState("");

  function closeModal() {
    setSearchValue("");
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const handleSetSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="text-[28px] md:text-[28px] h-10 sm:w-12 sm:h-12 rounded-full text-neutral-700 dark:text-neutral-300 sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center"
      >
        <i className="las la-search"></i>
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          initialFocus={inputRef}
          as="div"
          className="relative z-max"
          onClose={closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-900/25 backdrop-blur transition-opacity opacity-100" />
          </Transition.Child>

          <div className="fixed inset-0">
            <div className="flex justify-center px-3 pb-4 pt-20 sm:pt-28">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg overflow-hidden rounded-2xl text-left align-middle shadow-xl">
                  <form
                    role="search"
                    method="GET"
                    className="search-d relative"
                    action={window.frontendObject?.homeURL}
                  >
                    <div className="relative">
                      <i className="las la-search absolute mt-[1px] left-3 top-1/2 transform -translate-y-1/2 text-2xl opacity-70"></i>
                      <Input
                        name="s"
                        className="pl-12 shadow-none !ring-0 !border-0 dark:bg-neutral-700"
                        sizeClass="px-4 py-5"
                        rounded={`rounded-2xl ${
                          searchValue ? "rounded-b-none" : ""
                        }`}
                        autoFocus={true}
                        ref={inputRef}
                        type="search"
                        placeholder={NCMAZ_TRANSLATE["typeAndPressEnter"]}
                        onChange={_.debounce(handleSetSearchValue, 200)}
                      />
                      <input type="submit" hidden value="" />
                    </div>
                    {searchValue && (
                      <Suspense fallback={<div />}>
                        <PostOnSearchLazy searchText={searchValue} />
                      </Suspense>
                    )}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default SearchDropdown;
