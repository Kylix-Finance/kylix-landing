import { useEffect } from "react";
export const useLockBodyScroll = ({ isLocked }: { isLocked: boolean }) => {
  useEffect(() => {
    if (!isLocked) return;
    const { overflow, paddingRight } = document.body.style;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (scrollbarWidth > 0)
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.paddingRight = paddingRight;
      document.body.style.overflow = overflow;
    };
  }, [isLocked]);
};
