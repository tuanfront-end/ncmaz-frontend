import { Popover, Transition } from "@headlessui/react";
import Input from "components/Input/Input";
import NCMAZ_TRANSLATE from "contains/translate";
import React, { Fragment } from "react";

const SearchDropdown = () => {
  const inputRef = React.createRef<HTMLInputElement>();

  return (
    <React.Fragment>
      <Popover className="sm:relative">
        {({ open }) => {
          if (open) {
            setTimeout(() => {
              inputRef.current?.focus();
            }, 200);
          }

          return (
            <>
              <Popover.Button className="text-2xl md:text-[28px] sm:w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 sm:hover:bg-neutral-100 sm:dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center">
                <i className="las la-search"></i>
              </Popover.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel
                  static
                  className="absolute right-2.5 sm:right-0 z-10 w-screen max-w-[300px] sm:max-w-sm mt-3"
                >
                  <form
                    role="search"
                    method="GET"
                    className="search-d relative"
                    action={window.frontendObject?.homeURL}
                  >
                    <i className="las la-search absolute left-3 top-1/2 transform -translate-y-1/2 text-xl opacity-60"></i>
                    <Input
                      name="s"
                      className="pl-10"
                      ref={inputRef}
                      type="search"
                      placeholder={NCMAZ_TRANSLATE["typeAndPressEnter"]}
                    />
                    {/* <input
                      ref={inputRef}
                      name="s"
                      type="search"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      placeholder={NCMAZ_TRANSLATE["typeAndPressEnter"]}
                    /> */}

                    <input type="submit" hidden value="" />
                  </form>
                </Popover.Panel>
              </Transition>
            </>
          );
        }}
      </Popover>
    </React.Fragment>
  );
};

export default SearchDropdown;
