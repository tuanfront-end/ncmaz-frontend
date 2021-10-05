import { useEffect, useRef } from "react";
import useIntersectionObserver, {
  UseIntersectionObserverArgs,
} from "./useIntersectionObserver";

const NUMBER_INIT_SECTION = 5;

function useGqlQuerySection(
  gqlQueryGetPosts: Function,
  sectionIndex: number,
  args: UseIntersectionObserverArgs = {
    freezeOnceVisible: true,
    rootMargin: "1000px",
  }
) {
  // =========================================================
  useEffect(() => {
    if (sectionIndex <= NUMBER_INIT_SECTION) {
      gqlQueryGetPosts();
    }
  }, []);
  //
  const ref = useRef<HTMLDivElement | null>(null);
  const entry = useIntersectionObserver(ref, args);
  const isVisible =
    sectionIndex > NUMBER_INIT_SECTION ? !!entry?.isIntersecting : false;

  useEffect(() => {
    if (isVisible) {
      gqlQueryGetPosts();
    }
  }, [isVisible]);
  // =========================================================
  return { ref, isVisible };
}

export default useGqlQuerySection;
