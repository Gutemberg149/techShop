import { useEffect } from "react";
import { useLocation } from "react-router-dom";

//This is to make avery page be at the top as we change pages.

export default function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
