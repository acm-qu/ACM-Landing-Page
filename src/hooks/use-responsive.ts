import { useMediaQuery } from "react-responsive";

export const useResponsive = () => {
  const isDesktop = useMediaQuery({ minWidth: 1200 });
  const isBigTablet = useMediaQuery({ minWidth: 1073, maxWidth: 1199 });
  const isTablet = useMediaQuery({ minWidth: 673, maxWidth: 1072 });
  const isMobile = useMediaQuery({ maxWidth: 672 });

  return { isDesktop, isBigTablet, isTablet, isMobile };
}