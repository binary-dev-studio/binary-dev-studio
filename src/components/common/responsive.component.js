import { useMediaQuery } from "../responsive";
import { breakPointValuesUtils } from "../../theme/theme";

export const DesktopContainer = ({ children, onlyThisScreen = false }) => {
  const isMatch = useMediaQuery({
    query: onlyThisScreen
      ? breakPointValuesUtils.lg
      : breakPointValuesUtils.up("lg"),
  });
  return isMatch ? children : null;
};

export const LaptopContainer = ({ children, onlyThisScreen = false }) => {
  const isMatch = useMediaQuery({
    query: onlyThisScreen
      ? breakPointValuesUtils.md
      : breakPointValuesUtils.up("md"),
  });
  return isMatch ? children : null;
};
export const TabletContainer = ({ children, onlyThisScreen = false }) => {
  const isMatch = useMediaQuery({
    query: onlyThisScreen
      ? breakPointValuesUtils.sm
      : breakPointValuesUtils.up("sm"),
  });
  return isMatch ? children : null;
};
export const MobileContainer = ({ children, onlyThisScreen = false }) => {
  const isMatch = useMediaQuery({
    query: onlyThisScreen
      ? breakPointValuesUtils.xs
      : breakPointValuesUtils.down("xs"),
  });
  return isMatch ? children : null;
};
