import { gql, useLazyQuery } from "@apollo/client";
import { Popover } from "@headlessui/react";
import CircleLoading from "components/Loading/CircleLoading";
import Loading from "components/Loading/Loading";
import { Tags } from "containers/PageArchive/ModalTags";
import NCMAZ_TRANSLATE from "contains/translate";
import React, { useEffect, useRef, useState } from "react";

interface Data {
  tags: Tags;
}

const TagsInput = () => {
  // GET MOST USED TAGS
  const Q_LIST_TAGS = gql`
    query GET_LIS_TAGS_MOST_USED {
      tags(where: { orderby: COUNT, order: DESC }, first: 20) {
        edges {
          node {
            id
            name
            count
          }
        }
      }
    }
  `;
  const [getListTags, { error, data, loading }] = useLazyQuery<Data>(
    Q_LIST_TAGS,
    { notifyOnNetworkStatusChange: true }
  );
  //
  const containerRef = useRef<HTMLDivElement>(null);

  let [isOpen, setIsOpen] = useState(false);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen || data?.tags.edges.length) {
      return;
    }
    getListTags();
  }, [isOpen]);

  useEffect(() => {
    if (eventClickOutsideDiv) {
      document.removeEventListener("click", eventClickOutsideDiv);
    }
    isOpen && document.addEventListener("click", eventClickOutsideDiv);
    return () => {
      document.removeEventListener("click", eventClickOutsideDiv);
    };
  }, [isOpen]);

  const eventClickOutsideDiv = (event: MouseEvent) => {
    if (!containerRef.current) return;
    // CLICK IN_SIDE
    if (!isOpen || containerRef.current.contains(event.target as Node)) {
      return;
    }
    // CLICK OUT_SIDE
    setIsOpen(false);
  };

  function closePopover() {
    setIsOpen(false);
  }

  function openPopover() {
    setIsOpen(true);
  }

  return (
    <div className="relative w-full my-5 text-sm">
      <Popover className="relative">
        <ul className="flex flex-wrap ">
          {tags.map((tag, index) => (
            <li
              className="flex items-center justify-center mr-1 my-0.5 px-2 py-1.5 rounded bg-neutral-100"
              key={index}
            >
              #{` `}
              {tag}
              <button
                className="ml-1 px-1 text-red-400 text-base flex items-center justify-center"
                onClick={() => {
                  setTags(tags.filter((t) => t !== tag));
                }}
                title="Remove tag"
              >
                <i className="las la-times"></i>
              </button>
            </li>
          ))}

          {tags.length < 5 && (
            <li>
              <input
                className="px-2 py-1.5 my-0.5 h-full border-none focus:outline-none focus:ring-0"
                type="text"
                placeholder={
                  !tags.length ? "Add up to 5 tags..." : "Add another..."
                }
                onFocus={openPopover}
                // onBlur={closePopover}
                onChange={(e) => {
                  console.log(1, e);
                }}
                onKeyDown={(e) => {
                  if (e.code === "Enter") {
                    const tag = e.currentTarget.value;
                    setTags((prevTags) => [...prevTags, tag]);
                    e.currentTarget.value = "";
                  }
                }}
              />
            </li>
          )}
        </ul>
        {isOpen && (
          <div
            ref={containerRef}
            className="absolute top-full mt-4 inset-x-0 p-5 bg-white shadow-lg rounded-2xl z-50 ring-1 ring-black/[0.03]"
          >
            <h3 className="text-xl font-semibold">
              {NCMAZ_TRANSLATE["Top tags"]}
            </h3>
            <div className="w-full border-b my-4"></div>
            {error && <p className="text-red-500">{error.message}</p>}
            {loading && <CircleLoading />}
            {data?.tags.edges.length && (
              <ul className="flex flex-wrap">
                {data?.tags.edges.map((tag, index) => (
                  <li key={tag.node.id}>
                    <button
                      className="flex items-center justify-center mr-2 my-1 px-2 py-1.5 rounded bg-neutral-100 hover:bg-neutral-200"
                      onClick={() => {
                        console.log(11, tag);

                        setTags((prevTags) => [...prevTags, tag.node.name]);
                      }}
                    >
                      #{` `}
                      {tag.node.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </Popover>
    </div>
  );
};

export default TagsInput;
