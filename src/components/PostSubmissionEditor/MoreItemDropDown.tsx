import React, { FC, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { TiptapBarItem, TiptapBarItemDivider } from "./MenuBar";
import MenuItem from "./MenuItem";
import { Editor } from "@tiptap/react";

interface Props {
  data: (TiptapBarItem | TiptapBarItemDivider)[];
  editor: Editor;
}

const MoreItemDropDown: FC<Props> = ({ data = [], editor }) => {
  return (
    <Menu
      as="div"
      className="relative hidden lg:inline-block text-left ml-auto"
    >
      <Menu.Button className={"ml-auto menu-item"} title={"more"}>
        <div className="menu-item-svg">
          <svg
            className="crayons-icon c-btn__icon"
            aria-hidden="true"
            focusable="false"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 17a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-7a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm2-5a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z"
            ></path>
          </svg>
        </div>
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute w-auto top-0 right-0 origin-top-right bg-white dark:bg-neutral-900 rounded-2xl divide-y divide-neutral-100 shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 focus:outline-none z-40`}
        >
          <div className="p-2.5 text-sm text-neutral-6000 dark:text-neutral-300 flex items-center">
            {data.map((item, index) => (
              <Menu.Item key={index} as="div">
                {(item as TiptapBarItemDivider).type === "divider" ? (
                  <div className="divider" />
                ) : (
                  <MenuItem
                    // {...(item as TiptapBarItem)}
                    icon={(item as TiptapBarItem).icon}
                    action={(item as TiptapBarItem).action}
                    title={(item as TiptapBarItem).title}
                    isActive={(item as TiptapBarItem).isActive}
                    // editor={editor}
                    className="mr-0.5"
                  />
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default MoreItemDropDown;
