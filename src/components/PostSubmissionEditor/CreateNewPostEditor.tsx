import React, { FC, useEffect, useDeferredValue } from "react";
import ButtonPrimary from "components/Button/ButtonPrimary";
import NCMAZ_TRANSLATE from "contains/translate";
import TitleEditor from "./TitleEditor";
import { debounce } from "lodash";
import TagsInput, { TagNodeShort } from "./TagsInput";
import ButtonSecondary from "components/Button/ButtonSecondary";
import CategoriesInput from "./CategoriesInput";
import PostOptionsBtn, { PostOptionsData } from "./PostOptionsBtn";
import Label from "components/Label/Label";
import { CategoriesNode3 } from "data/postCardType";
import TiptapEditor from "./TiptapEditor";
import { Editor } from "@tiptap/react";
import { gql, useMutation } from "@apollo/client";
import Alert from "components/Alert/Alert";
import toast from "react-hot-toast";

import ImageUploadToServer, {
  ImageState,
} from "components/ImageUploadToServer";

interface Data {
  createPost: CreatePost;
}

interface CreatePost {
  post: Post;
  __typename: string;
}

interface Post {
  title: string;
  link: string;
  id: string;
  postId: number;
  __typename: string;
}

interface Props {}

export function handleBeforeunload(event: BeforeUnloadEvent) {
  event.preventDefault();
  event.returnValue = "";
}

const CreateNewPostEditor: FC<Props> = ({}) => {
  const [titleContent, setTitleContent] = React.useState("");
  const [contentHTML, setContentHTML] = React.useState("");
  const [featuredImage, setFeaturedImage] = React.useState<ImageState>();

  const [tags, setTags] = React.useState<TagNodeShort[]>([]);
  const [categories, setCategories] = React.useState<CategoriesNode3[]>([]);

  const [postOptionsData, setPostOptionsData] = React.useState<PostOptionsData>(
    {
      audioUrl: "",
      videoUrl: "",
      excerptText: "",
      postFormatsSelected: "Standard",
      objGalleryImgs: {},
      isAllowComments: true,
    }
  );
  //

  // MUTATION_CREATE_POST GQL
  // status: PENDING | PRIVATE | PUBLISH | DRAFT | TRASH
  // Lưu ý có biến ncTags - Biến này được tạo ra để Contributor và Author có thể thêm Tags mới vào Post (Được xử lý trong ncmaz-custom-wpgraphql)
  const MUTATION_CREATE_POST = gql`
    mutation MUTATION_CREATE_POST(
      $commentStatus: String = "open"
      $status: PostStatusEnum = null
      $title: String = ""
      $excerpt: String = ""
      $ncFeaturedImageDatabaseId: Int = null
      $ncmazAudioUrl: String = null
      $ncmazGalleryImgs_1_databaseID: Int = null
      $ncmazGalleryImgs_2_databaseID: Int = null
      $ncmazGalleryImgs_3_databaseID: Int = null
      $ncmazGalleryImgs_4_databaseID: Int = null
      $ncmazGalleryImgs_5_databaseID: Int = null
      $ncmazGalleryImgs_6_databaseID: Int = null
      $ncmazGalleryImgs_7_databaseID: Int = null
      $ncmazGalleryImgs_8_databaseID: Int = null
      $content: String = ""
      $ncmazVideoUrl: String = null
      $postFormatsSlug: String = null
      $categoryNodes: [PostCategoriesNodeInput] = {}
      $ncTags: String = null
    ) {
      createPost(
        input: {
          status: $status
          commentStatus: $commentStatus
          title: $title
          excerpt: $excerpt
          ncFeaturedImageDatabaseId: $ncFeaturedImageDatabaseId
          ncmazAudioUrl: $ncmazAudioUrl
          ncmazGalleryImgs_1_databaseID: $ncmazGalleryImgs_1_databaseID
          ncmazGalleryImgs_2_databaseID: $ncmazGalleryImgs_2_databaseID
          ncmazGalleryImgs_3_databaseID: $ncmazGalleryImgs_3_databaseID
          ncmazGalleryImgs_4_databaseID: $ncmazGalleryImgs_4_databaseID
          ncmazGalleryImgs_5_databaseID: $ncmazGalleryImgs_5_databaseID
          ncmazGalleryImgs_6_databaseID: $ncmazGalleryImgs_6_databaseID
          ncmazGalleryImgs_7_databaseID: $ncmazGalleryImgs_7_databaseID
          ncmazGalleryImgs_8_databaseID: $ncmazGalleryImgs_8_databaseID
          content: $content
          categories: { append: false, nodes: $categoryNodes }
          ncTags: $ncTags
          ncmazVideoUrl: $ncmazVideoUrl
          postFormats: { nodes: { slug: $postFormatsSlug } }
        }
      ) {
        post {
          title
          link
          id
          postId
          postFormats {
            edges {
              node {
                id
                name
                slug
              }
            }
          }
        }
      }
    }
  `;
  const [mutationCreatePost, { error, data, loading }] =
    useMutation<Data>(MUTATION_CREATE_POST);

  const dataDeferredValueAfterSubmit = useDeferredValue(
    data?.createPost.post.id
  );

  useEffect(() => {
    window.addEventListener("beforeunload", handleBeforeunload, true);
  }, []);

  useEffect(() => {
    if (!dataDeferredValueAfterSubmit || !data?.createPost.post.link) {
      return;
    }
    window.removeEventListener("beforeunload", handleBeforeunload, true);
    toast.success(NCMAZ_TRANSLATE["Post successful"] + "!");
    setTimeout(() => {
      window.location.href = data?.createPost.post.link;
    }, 500);
  }, [dataDeferredValueAfterSubmit]);

  //
  const debounceGetTitle = debounce(function (e: Editor) {
    setTitleContent(e.getText());
  }, 300);

  const debounceGetContentHtml = debounce(function (e: Editor) {
    setContentHTML(e.getHTML());
  }, 400);
  //
  const handleChangeFeaturedImage = (image: ImageState) => {
    setFeaturedImage(image);
  };

  const handleChangeCategories = (data: CategoriesNode3[]) => {
    setCategories(data);
  };

  const handleChangeTags = (tags: TagNodeShort[]) => {
    setTags(tags);
  };

  const handleApplyPostOptions = (data: PostOptionsData) => {
    setPostOptionsData(data);
  };

  const converPostOptionDataToInput = (data: PostOptionsData) => {
    let optionsInput: Record<string, any> = {
      excerpt: data.excerptText,
      commentStatus: data.isAllowComments ? "open" : "closed",
      postFormatsSlug:
        data.postFormatsSelected !== "Standard"
          ? data.postFormatsSelected
          : null,
    };
    if (data.postFormatsSelected === "post-format-gallery") {
      optionsInput = {
        ...optionsInput,
        ncmazGalleryImgs_1_databaseID: data.objGalleryImgs[1].id || null,
        ncmazGalleryImgs_2_databaseID: data.objGalleryImgs[2].id || null,
        ncmazGalleryImgs_3_databaseID: data.objGalleryImgs[3].id || null,
        ncmazGalleryImgs_4_databaseID: data.objGalleryImgs[4].id || null,
        ncmazGalleryImgs_5_databaseID: data.objGalleryImgs[5].id || null,
        ncmazGalleryImgs_6_databaseID: data.objGalleryImgs[6].id || null,
        ncmazGalleryImgs_7_databaseID: data.objGalleryImgs[7].id || null,
        ncmazGalleryImgs_8_databaseID: data.objGalleryImgs[8].id || null,
      };
    }
    if (data.postFormatsSelected === "post-format-video") {
      optionsInput = {
        ...optionsInput,
        ncmazVideoUrl: data.videoUrl || null,
      };
    }
    if (data.postFormatsSelected === "post-format-audio") {
      optionsInput = {
        ...optionsInput,
        ncmazAudioUrl: data.audioUrl || null,
      };
    }

    return optionsInput;
  };

  const onSubmmitMutation = (
    status: "PENDING" | "PRIVATE" | "PUBLISH" | "DRAFT" | "TRASH"
  ) => {
    const optionsInput = converPostOptionDataToInput(postOptionsData);
    const variables = {
      status,
      title: titleContent,
      ncFeaturedImageDatabaseId: featuredImage?.id || null,
      content: contentHTML,
      categoryNodes: categories.map((item) => ({
        id: item.id,
      })),
      ncTags: tags.map((item) => item.name).join(","),
      // tagNodes: tags.map((item) => ({
      //   name: item.name,
      // })),
      ...optionsInput,
    };

    mutationCreatePost({ variables });
  };

  const handleClickPublish = () => {
    onSubmmitMutation("PUBLISH");
  };

  const handleClickSaveDraft = () => {
    onSubmmitMutation("DRAFT");
  };

  const renderPostTitle = () => {
    return (
      <div className="pb-10 lg:py-10 w-full max-w-screen-md mx-auto ">
        <div className="flex flex-col w-full">
          <Label className="block !text-base">
            {NCMAZ_TRANSLATE["Add a cover image"]}
          </Label>
          <ImageUploadToServer
            defaultImage={featuredImage}
            onChangeImage={handleChangeFeaturedImage}
          />
        </div>

        <CategoriesInput onChange={handleChangeCategories} />
        <TitleEditor defaultTitle={titleContent} onUpdate={debounceGetTitle} />
        <TagsInput onChange={handleChangeTags} />
      </div>
    );
  };

  return (
    <div className="nc-CreateNewPostEditor ">
      <div className=" bg-white dark:bg-neutral-900 lg:shadow-xl rounded-2xl dark:ring dark:ring-neutral-50/10">
        {renderPostTitle()}

        <TiptapEditor onUpdate={debounceGetContentHtml} />

        <div className="w-full border-b my-2 border-neutral-300 dark:border-neutral-700"></div>
        {error && (
          <Alert containerClassName="text-sm m-4 mb-0" type="error">
            {error.message}
          </Alert>
        )}
        <div className="w-full max-w-screen-md mx-auto flex space-x-2 py-8">
          <ButtonPrimary
            fontSize="text-base font-medium"
            onClick={handleClickPublish}
            loading={loading}
            disabled={loading}
          >
            {NCMAZ_TRANSLATE["Publish"]}
          </ButtonPrimary>
          <ButtonSecondary
            fontSize="text-base font-medium"
            className="ml-2.5"
            onClick={handleClickSaveDraft}
            loading={loading}
            disabled={loading}
          >
            {NCMAZ_TRANSLATE["Save draft"]}
          </ButtonSecondary>
          <PostOptionsBtn
            defaultData={postOptionsData}
            onSubmit={handleApplyPostOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default CreateNewPostEditor;
