import { Header } from "@components/layout/Header";
import Logo from "@components/common/Logo";
import { IconButton } from "@components/buttons/IconButton";
import DropDownMenu from "@components/menu/DropDownMenu";
import { MENU_ITEMS } from "@configs/menu";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import LocalMenuBar from "@src/components/menu/LocalMenuBar";
import useNavigationTo from "@src/hooks/useNavigationTo";
import { ROUTES } from "@src/configs/routes";

const MainPage = () => {
  const navTo = useNavigationTo();

  const handleLogout = () => {
    // 로그아웃 로직
  };

  const handleLogoClick = () => {
    navTo(ROUTES.HOME.URL);
  };

  return (
    <>
      <Header
        logo={<Logo onClick={handleLogoClick} />}
        children={
          <>
            <DropDownMenu menu={MENU_ITEMS} />
            <IconButton
              icon={LogoutOutlinedIcon}
              title="Logout"
              onClick={handleLogout}
            />
          </>
        }
      />
      <LocalMenuBar menu={MENU_ITEMS} />
    </>
  );
};

export default MainPage;
