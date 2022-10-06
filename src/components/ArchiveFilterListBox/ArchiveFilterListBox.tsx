import React, { FC, useEffect, Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { ListBoxItemType } from "components/NcListBox/NcListBox";
import ButtonDropdown from "components/ButtonDropdown/ButtonDropdown";

export interface ArchiveFilterListBoxProps {
  className?: string;
  lists: ListBoxItemType[];
  onChangeSelect?: (item: ArchiveFilterListBoxProps["lists"][number]) => void;
  defaultValue?: string;
}

const ArchiveFilterListBox: FC<ArchiveFilterListBoxProps> = ({
  className = "",
  lists,
  onChangeSelect,
  defaultValue,
}) => {
  const [itemSelected, setItemSelected] = useState<ListBoxItemType>(lists[0]);

  useEffect(() => {
    const item = lists.filter((i) => i.value === defaultValue)[0];
    if (!defaultValue || !item) {
      return;
    }
    setItemSelected(item);
  }, [defaultValue]);

  return (
    <div
      className={`nc-ArchiveFilterListBox ${className}`}
      data-nc-id="ArchiveFilterListBox"
    >
      <Listbox
        value={itemSelected}
        onChange={(item) => {
          setItemSelected(item);
          onChangeSelect && onChangeSelect(item);
        }}
      >
        <div className="relative lg:min-w-[200px]">
          <Listbox.Button as={"div"}>
            <ButtonDropdown>{itemSelected.name}</ButtonDropdown>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute right-0 z-20 w-52 py-1 mt-2.5 overflow-auto text-sm text-neutral-900 dark:text-neutral-200 bg-white rounded-2xl shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-neutral-900 dark:ring-neutral-700">
              {lists.map((item: ListBoxItemType, index: number) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `${
                      active
                        ? "text-primary-700 dark:text-neutral-200 bg-primary-50 dark:bg-neutral-700"
                        : ""
                    } cursor-default select-none relative py-2 pl-10 pr-4`
                  }
                  value={item}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`${
                          selected ? "font-medium" : "font-normal"
                        } block truncate`}
                      >
                        {item.name}
                      </span>
                      {selected ? (
                        <span className="text-primary-700 absolute inset-y-0 left-0 flex items-center pl-3 dark:text-neutral-200">
                          <CheckIcon className="w-5 h-5" aria-hidden="true" />
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

export default ArchiveFilterListBox;
