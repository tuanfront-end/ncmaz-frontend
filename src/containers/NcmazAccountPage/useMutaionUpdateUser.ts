import { gql, useMutation } from "@apollo/client";
import NCMAZ_TRANSLATE from "contains/translate";
import React, { useEffect } from "react";
import { Slide, toast } from "react-toastify";
import { GQL_MUTATION_UPDATE_USER } from "./gqlUpdateUser";

function useMutaionUpdateUser() {
  // MUTATION_UPDATE USER GQL
  const MUTATION_UPDATE_USER = gql`
    ${GQL_MUTATION_UPDATE_USER}
  `;
  const [mutationUpdateUser, { error, data, loading }] =
    useMutation<any>(MUTATION_UPDATE_USER);
  //

  useEffect(() => {
    if (!data) return;
    toast.success(NCMAZ_TRANSLATE["Your account has been updated."], {
      transition: Slide,
    });

    setTimeout(() => {
      window.location.reload();
    }, 800);
  }, [data]);

  return { mutationUpdateUser, error, data, loading };
}

export default useMutaionUpdateUser;
