import { useEffect } from "react";

const DEFAULT_TITLE = "ACM QU Chapter";

export const usePageTitle = (title:string) => {
  useEffect(() => {
    document.title = title;
    return () => { document.title = DEFAULT_TITLE; };
  }, [title]);
};
