import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
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
import NCMAZ_TRANSLATE from "contains/translate";
import TitleEditor from "./TitleEditor";
import { debounce } from "lodash";
import MyBubbleMenu from "./MyBubbleMenu";
import TagsInput from "./TagsInput";
import ButtonSecondary from "components/Button/ButtonSecondary";
import FeaturedImageUpload from "./FeaturedImageUpload";
import CategoriesInput from "./CategoriesInput";
import ButtonCircle from "components/Button/ButtonCircle";
import PostOptionsBtn from "./PostOptionsBtn";

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
        placeholder: NCMAZ_TRANSLATE["Write your post content here…"],
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
    editorProps: {
      attributes: {
        class:
          "focus:outline-none prose prose-neutral lg:prose-lg dark:prose-invert max-w-screen-md mx-auto min-h-[500px]",
      },
    },
    content: ` `,
  });

  const [titleContent, setTitleContent] = React.useState("");

  const debounceGetTitle = debounce(function (e) {
    setTitleContent(e.getText());
  }, 300);

  const renderPostTitle = () => {
    return (
      <div className="py-10">
        <div className="w-screen max-w-screen-md mx-auto ">
          <div className="flex w-full">
            <FeaturedImageUpload />
          </div>

          <CategoriesInput />
          <TitleEditor onUpdate={debounceGetTitle} />
          <TagsInput />
        </div>
      </div>
    );
  };

  return (
    <div className="nc-TiptapEditor flex justify-center">
      <div className="editor bg-white dark:bg-neutral-900 shadow-xl rounded-2xl">
        {renderPostTitle()}
        {editor && <MyBubbleMenu editor={editor} />}
        {editor && <MenuBar editor={editor} />}
        <EditorContent
          className="editor__content focus:outline-none "
          editor={editor}
        />
        <div className="w-full border-b my-4 border-neutral-300 dark:border-neutral-700"></div>

        <div className="w-screen max-w-screen-md mx-auto flex space-x-2 py-8">
          <ButtonPrimary fontSize="text-base font-medium">
            {NCMAZ_TRANSLATE["Publish"]}
          </ButtonPrimary>
          <ButtonSecondary fontSize="text-base font-medium">
            {NCMAZ_TRANSLATE["Save draft"]}
          </ButtonSecondary>
          <PostOptionsBtn />
        </div>
      </div>
    </div>
  );
};
