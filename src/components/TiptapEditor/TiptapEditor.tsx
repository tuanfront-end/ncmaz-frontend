import React from "react";
import {
  useEditor,
  EditorContent,
  BubbleMenu,
  FloatingMenu,
} from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import Iframe from "./Iframe";
//
import MenuBar from "./MenuBar";
import "./styles.scss";
import ButtonPrimary from "components/Button/ButtonPrimary";
import MenuItemImage from "./MenuItemImage";

export default () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Highlight,
      Underline,
      Iframe,
      Link.configure({
        openOnClick: false,
      }),
      Placeholder.configure({
        placeholder: "Write your post content here…",
        showOnlyCurrent: false,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Image.configure({
        allowBase64: true,
        HTMLAttributes: {
          class: "ncmaz-custom-img-editor mx-auto rounded",
        },
      }),
    ],
    content: ` `,
  });

  const renderPostTitle = () => {
    return (
      <div className="py-10">
        <div className="w-screen max-w-screen-md mx-auto ">
          <MenuItemImage action={() => {}}>
            <ButtonPrimary>
              <span>Add a core image</span>
            </ButtonPrimary>
          </MenuItemImage>

          <h1
            contentEditable
            className="mt-10 focus:outline-none entry-title text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-5xl dark:text-neutral-100 max-w-4xl "
            data-placeholder="New post title here…"
          ></h1>
        </div>
      </div>
    );
  };

  return (
    <div className="nc-TiptapEditor flex justify-center">
      <div className="editor bg-white shadow-xl rounded-2xl py-10 ">
        {renderPostTitle()}

        {editor && <MenuBar editor={editor} />}
        <EditorContent
          className="editor__content focus:outline-none "
          editor={editor}
        />
        <div className="editor__footer">
          <div className={`editor__status editor__status--`}>offline</div>
          <div className="editor__name">
            <button>currentUser</button>
          </div>
        </div>
      </div>
    </div>
  );
};
