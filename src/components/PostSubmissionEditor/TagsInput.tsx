import { gql, useLazyQuery } from "@apollo/client";
import { nanoid } from "@reduxjs/toolkit";
import CircleLoading from "components/Loading/CircleLoading";
import GLOBAL_VARIABLE from "contains/globalVariable";
import NCMAZ_TRANSLATE from "contains/translate";
import React, { FC, useEffect, useRef, useState } from "react";

interface Data {
  tags: Tags;
}
interface Tags {
  edges: Edge[];
  __typename: string;
}
interface Edge {
  node: TagNodeShort;
  __typename: string;
}

export interface TagNodeShort {
  id: string;
  name: string;
  tagId: number;
}

interface TagsInputProps {
  onChange: (tags: TagNodeShort[]) => void;
  defaultValue?: TagNodeShort[];
}

const TagsInput: FC<TagsInputProps> = ({ onChange, defaultValue }) => {
  const MAX_TAGS_LENGTH = frontendObject.maxTagsLengSubmit || 5;

  // GET MOST USED TAGS
  const Q_LIST_TAGS = gql`
    query GET_LIS_TAGS_MOST_USED {
      tags(where: { orderby: COUNT, order: DESC }, first: 30) {
        edges {
          node {
            id
            name
            count
            tagId
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
  const inputRef = useRef<HTMLInputElement>(null);

  let [isOpen, setIsOpen] = useState(false);
  const [tags, setTags] = useState<TagNodeShort[]>(defaultValue || []);

  useEffect(() => {
    if (!isOpen || data?.tags.edges.length) {
      return;
    }
    getListTags();
  }, [isOpen]);

  useEffect(() => {
    if (tags.length >= MAX_TAGS_LENGTH) {
      setIsOpen(false);
    }

    onChange(tags);
  }, [tags.length]);

  function closePopover() {
    setIsOpen(false);
  }

  function openPopover() {
    setIsOpen(true);
  }

  const checkIncludes = (tag: TagNodeShort) => {
    return tags.some((item) => item.name === tag.name);
  };

  const setNewTags = (tag: TagNodeShort) => {
    if (!checkIncludes(tag)) {
      setTags((prevTags) => [...prevTags, tag]);
    }

    if (inputRef.current) {
      inputRef.current.value = "";
      inputRef.current.focus();
    }
  };

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
    if (!isOpen || !containerRef.current) {
      return;
    }

    // CLICK IN_SIDE
    if (
      containerRef.current.contains(event.target as Node) ||
      inputRef.current?.contains(event.target as Node)
    ) {
      return;
    }

    // CLICK OUT_SIDE
    setIsOpen(false);
  };

  const handleRemoveTag = (tag: TagNodeShort) => {
    setTags(tags.filter((t) => t.name !== tag.name));
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  return (
    <div className="relative w-full mt-5 text-sm">
      <ul className="flex flex-wrap ">
        {tags.map((tag, index) => (
          <li
            className="flex items-center justify-center mr-1 my-0.5 px-2 py-1.5 rounded bg-neutral-100 dark:bg-neutral-800"
            key={index}
          >
            #{` `}
            {tag.name}
            <button
              className="ml-1 px-1 text-red-400 text-base flex items-center justify-center"
              onClick={() => handleRemoveTag(tag)}
              title="Remove tag"
            >
              <i className="las la-times"></i>
            </button>
          </li>
        ))}

        {tags.length < MAX_TAGS_LENGTH && (
          <li>
            {/* <Popover.Button>Solutions</Popover.Button> */}
            <input
              ref={inputRef}
              className="px-2 py-1.5 my-0.5 h-full border-none focus:outline-none focus:ring-0 !bg-transparent shadow-none"
              type="text"
              placeholder={
                !tags.length
                  ? `${NCMAZ_TRANSLATE["Add tags"]} (${tags.length}/${MAX_TAGS_LENGTH})...`
                  : `${NCMAZ_TRANSLATE["Add another"]}...`
              }
              onFocus={openPopover}
              onKeyDown={(e) => {
                if (e.code !== "Enter") {
                  return;
                }
                setNewTags({
                  id: `${Date.now()}-${nanoid()}`,
                  name: e.currentTarget.value,
                  tagId: Math.random(),
                });
              }}
            />
          </li>
        )}
      </ul>

      {isOpen && (
        <div
          ref={containerRef}
          className="absolute top-full mt-4 inset-x-0 p-5 bg-white dark:bg-neutral-800 shadow-lg rounded-2xl z-50 ring-1 ring-black/[0.03]"
        >
          <h3 className="text-xl font-semibold">
            {NCMAZ_TRANSLATE["Top tags"]}
          </h3>
          <div className="w-full border-b my-4 border-neutral-300 dark:border-neutral-700"></div>
          {error && <p className="text-red-500">{error.message}</p>}
          {loading && <CircleLoading />}
          {data?.tags.edges.length && (
            <ul className="flex flex-wrap">
              {data?.tags.edges.map((tag, index) => (
                <li key={tag.node.id}>
                  <button
                    className="flex items-center justify-center mr-2 my-1 px-2 py-1.5 rounded bg-neutral-100 disabled:hover:bg-neutral-100 dark:bg-neutral-700 dark:hover:bg-neutral-6000 dark:disabled:hover:bg-neutral-700 hover:bg-neutral-200 disabled:cursor-not-allowed disabled:opacity-70"
                    onClick={() => {
                      if (checkIncludes(tag.node)) {
                        return;
                      }
                      setNewTags(tag.node);
                    }}
                    disabled={checkIncludes(tag.node)}
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
    </div>
  );
};

export default TagsInput;
