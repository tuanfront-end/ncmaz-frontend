import { useEffect, useRef } from "react";
import useIntersectionObserver from "./useIntersectionObserver";

function useGqlQuerySection(gqlQueryGetPosts: Function, sectionIndex: number) {
  // =========================================================
  useEffect(() => {
    if (sectionIndex <= 3) {
      gqlQueryGetPosts();
    }
  }, []);
  //
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, {});
  const isVisible = sectionIndex > 3 ? !!entry?.isIntersecting : false;

  useEffect(() => {
    if (isVisible) {
      gqlQueryGetPosts();
    }
  }, [isVisible]);
  // =========================================================
  return { ref, isVisible };
}

export default useGqlQuerySection;
