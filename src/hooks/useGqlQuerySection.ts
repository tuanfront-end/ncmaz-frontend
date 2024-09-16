import { useEffect, useRef } from "react";
import useIntersectionObserver, {
  UseIntersectionObserverArgs,
} from "./useIntersectionObserver";

const NUMBER_INIT_SECTION = 3;

function useGqlQuerySection(
  gqlQueryGetPosts: Function,
  sectionIndex: number,
  tabActiveId?: number,
  args: UseIntersectionObserverArgs = {
    root: null,
    threshold: 0,
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

  useEffect(() => {
    if (typeof tabActiveId !== "number" || tabActiveId === -1) {
      return;
    }

    gqlQueryGetPosts();
  }, [tabActiveId]);
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
