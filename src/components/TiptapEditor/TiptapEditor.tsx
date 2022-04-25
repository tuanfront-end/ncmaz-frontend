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

  return (
    <div className="entry-content prose prose-neutral lg:prose-lg mx-auto dark:prose-invert">
      <div className="nc-TiptapEditor">
        <div className="editor">
          {editor && <MenuBar editor={editor} />}
          <EditorContent
            className="editor__content focus:outline-none"
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
    </div>
  );
};
