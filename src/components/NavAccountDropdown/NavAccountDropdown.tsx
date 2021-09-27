import { Menu, Transition } from "@headlessui/react";
import Avatar from "components/Avatar/Avatar";
import NcDropDown from "components/NcDropDown/NcDropDown";
import React, { FC, Fragment } from "react";

interface Item {
  id: string;
  name: string;
  icon: string;
  href: string;
}

export interface NavAccountDropdownProps {
  data: Item[];
  footData: Item[];
}

const NavAccountDropdown: FC<NavAccountDropdownProps> = ({
  data,
  footData,
}) => {
  const renderAvatar = () => {
    return (
      <div className="flex-shrink-0 sm:w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center ">
        <Avatar
          imgUrl={frontendObject.currentUser?.avatar.url}
          userName={frontendObject.currentUser?.name}
          radius="rounded-full"
          containerClassName="ring-2 ring-neutral-200 dark:ring-neutral-700 ring-offset-2"
          sizeClass="h-7 w-7 text-base "
        />
      </div>
    );
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="">{renderAvatar()}</Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white dark:bg-neutral-800 rounded-lg divide-y divide-neutral-100 dark:divide-neutral-700 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-2">
            <a
              href={frontendObject.homeURL + frontendObject.currentUser?.uri}
              className="px-3 py-2 flex items-center space-x-3"
            >
              <Avatar
                imgUrl={frontendObject.currentUser?.avatar.url}
                userName={frontendObject.currentUser?.name}
                radius="rounded-full"
                sizeClass="h-9 w-9 sm:h-10 sm:w-10 text-base"
              />
              <div className="flex flex-col justify-center text-sm truncate">
                <span className="text-base font-medium truncate capitalize leading-tight mb-0.5">
                  {frontendObject.currentUser?.name}
                </span>
                <span className="text-neutral-500 dark:text-neutral-400 truncate leading-tight">
                  {frontendObject.currentUser?.ncUserMeta.ncBio}
                </span>
              </div>
            </a>
          </div>
          <Menu.Items className="divide-y divide-neutral-100  dark:divide-neutral-700 text-sm">
            <div className="px-1 py-2">
              {data.map((item) => (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <a
                      key={item.id}
                      href={item.href || "#"}
                      className={`flex items-center rounded-md w-full px-3 py-2 truncate ${
                        active
                          ? "bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                          : ""
                      }`}
                    >
                      <i className={`${item.icon} mr-1 w-7 text-lg`}></i>
                      <span>{item.name}</span>
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>

            <div className="px-1 py-2">
              {footData.map((item) => (
                <Menu.Item key={item.id}>
                  {({ active }) => (
                    <a
                      key={item.id}
                      href={item.href || "#"}
                      className={`flex items-center rounded-md w-full px-3 py-2 truncate ${
                        active
                          ? "bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-neutral-100"
                          : ""
                      }`}
                    >
                      <i className={`${item.icon} mr-1 w-7 text-lg`}></i>
                      <span>{item.name}</span>
                    </a>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </div>
      </Transition>
    </Menu>
  );
};

export default NavAccountDropdown;
