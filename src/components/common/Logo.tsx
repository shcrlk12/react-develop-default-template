import picopackLogo from "@images/picopack_logo.png";

type LogoProps = {
  onClickHandler: () => void;
};
const Logo = (props: LogoProps) => (
  <img src={picopackLogo} alt="Picopack Logo" className="h-2/4 w-auto" />
);

export default Logo;
