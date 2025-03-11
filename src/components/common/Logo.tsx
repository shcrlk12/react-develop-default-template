import picopackLogo from "@images/picopack_logo.png";
import { MouseEvent } from "react";

type LogoProps = {
  onClick: (e: MouseEvent<HTMLImageElement>) => void;
};
const Logo = (props: LogoProps) => (
  <img
    onClick={props.onClick}
    src={picopackLogo}
    alt="Picopack Logo"
    className="h-2/4 w-auto cursor-pointer"
  />
);

export default Logo;
