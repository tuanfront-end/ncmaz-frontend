import { EllipsisHorizontalIcon } from "@heroicons/react/24/solid";
import React, { FC, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import twFocusClass from "utils/twFocusClass";

export interface NcDropDownItem {
  id: string;
  name: string;
  icon: string;
  href?: string;
}

export interface NcDropDownProps {
  className?: string;
  panelMenusClass?: string;
  iconClass?: string;
  data: NcDropDownItem[];
  renderTrigger?: () => JSX.Element;
  renderItem?: (item: NcDropDownItem, active: boolean) => JSX.Element;
  title?: string;
  onClickItem?: (item: NcDropDownItem) => void;
}

const NcDropDown: FC<NcDropDownProps> = ({
  className = `h-7 w-7 sm:h-8 sm:w-8 bg-neutral-100 dark:bg-neutral-800 rounded-full flex items-center justify-center ${twFocusClass()}`,
  iconClass = "h-[18px] w-[18px]",
  panelMenusClass = " w-56 top-0 right-0 origin-top-right",
  title = "More",
  renderTrigger,
  renderItem,
  data,
  onClickItem,
}) => {
  const renderMenuItemContent = (item: NcDropDownItem, active: boolean) => {
    if (item.href) {
      return (
        <a
          className={`text-left flex items-center rounded-md w-full px-3 py-2 truncate ${
            active
              ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
              : ""
          }`}
          onClick={() => onClickItem && onClickItem(item)}
          href={item.href}
        >
          {!!item.icon && <i className={`${item.icon} mr-1 w-7 text-base`}></i>}
          <span className="truncate">{item.name}</span>
        </a>
      );
    }
    return (
      <button
        className={`text-left flex items-center rounded-md w-full px-3 py-2 truncate ${
          active
            ? "bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100"
            : ""
        }`}
        onClick={() => onClickItem && onClickItem(item)}
      >
        {!!item.icon && <i className={`${item.icon} mr-1 w-7 text-base`}></i>}
        <span className="truncate">{item.name}</span>
      </button>
    );
  };

  const renderMenuItem = (item: NcDropDownItem) => {
    if (item.name === "_divider_") {
      return (
        <div
          key={item.id}
          className="flex-1 flex border border-b border-neutral-100 dark:border-neutral-700/50 my-2"
        ></div>
      );
    }

    return (
      <Menu.Item key={item.id} data-menu-item-id={item.id}>
        {({ active }) =>
          renderItem
            ? renderItem(item, active)
            : renderMenuItemContent(item, active)
        }
      </Menu.Item>
    );
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button className={className} title={title}>
        {renderTrigger ? (
          renderTrigger()
        ) : (
          <EllipsisHorizontalIcon
            className={iconClass}
            aria-hidden="true"
            stroke="none"
            fill="currentColor"
          />
        )}
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
          className={`absolute ${panelMenusClass} bg-white dark:bg-neutral-900 rounded-2xl divide-y divide-neutral-100 shadow-lg ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-10 focus:outline-none z-40`}
        >
          <div className="px-1 py-2.5 text-sm text-neutral-6000 dark:text-neutral-300">
            {data.map(renderMenuItem)}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default NcDropDown;
