import { useAppDispatch } from "app/hooks";
import { addNewDeletedByPostId } from "app/postsDeleted/postsDeleted";
import NCMAZ_TRANSLATE from "contains/translate";
import React, { FC } from "react";
import toast from "react-hot-toast";

import ButtonPrimaryDanger from "components/Button/ButtonPrimaryDanger";
import ButtonSecondary from "components/Button/ButtonSecondary";
import NcModal from "components/NcModal/NcModal";

interface Props {
  show: boolean;
  onCloseModal: () => void;
  postDataBaseId: number;
  isReloadAfterDelete?: boolean;
  linkReloadAfterDelete?: string;
}

const ModalDeletePost: FC<Props> = ({
  show,
  onCloseModal,
  postDataBaseId,
  isReloadAfterDelete = false,
  linkReloadAfterDelete = window.frontendObject.homeURL,
}) => {
  const [loading, setLoading] = React.useState(false);

  const dispatch = useAppDispatch();

  const handleClickSubmitForm = async () => {
    setLoading(true);
    await jQuery
      .ajax({
        url: window.frontendObject.restUrl + "wp/v2/posts/" + postDataBaseId,
        method: "DELETE",
        processData: false,
        contentType: false,
        beforeSend: function (xhr: any) {
          xhr.setRequestHeader(
            "X-WP-Nonce",
            window.frontendObject.restVarsNonce
          );
        },
      })
      .done(function (response: any) {
        toast.success(NCMAZ_TRANSLATE["Post deleted successfully."]);
        //   DISPACTH TO POSTS DELETED
        dispatch(addNewDeletedByPostId(postDataBaseId));
        //   RELOAD PAGE
        if (isReloadAfterDelete) {
          setTimeout(() => {
            window.location.replace(linkReloadAfterDelete);
          }, 800);
        }
      })
      .fail(function (response: any) {
        const errorMess =
          response.responseJSON?.message ||
          NCMAZ_TRANSLATE["somethingWentWrong"];
        toast.error(errorMess);
      })
      .always(function () {
        onCloseModal();
        setLoading(false);
        return;
      });
  };

  const renderContent = () => {
    return (
      <div>
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-200">
          {NCMAZ_TRANSLATE["Delete post"]}
        </h3>
        <span className="text-sm">
          {
            NCMAZ_TRANSLATE[
              "Are you sure you want to delete this post? You cannot undo this action."
            ]
          }
        </span>
        <div className="mt-4 space-x-3">
          <ButtonPrimaryDanger
            loading={loading}
            onClick={handleClickSubmitForm}
            type="submit"
            disabled={loading}
          >
            {NCMAZ_TRANSLATE["Delete post"]}
          </ButtonPrimaryDanger>
          <ButtonSecondary
            type="button"
            loading={loading}
            onClick={onCloseModal}
            disabled={loading}
          >
            {NCMAZ_TRANSLATE["Cancel"]}
          </ButtonSecondary>
        </div>
      </div>
    );
  };

  return (
    <NcModal
      renderTrigger={() => null}
      isOpenProp={show}
      renderContent={renderContent}
      onCloseModal={onCloseModal}
      contentExtraClass="max-w-screen-sm"
      modalTitle=""
    />
  );
};

export default ModalDeletePost;
