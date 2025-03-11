import { GlobalMenuItem } from "@src/configs/types";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import MenuContainer from "./MenuContainer";

type LocalSubMenuBarProps = {
  menu: GlobalMenuItem[];
};

const LocalSubMenuBar = (props: LocalSubMenuBarProps) => {
  const location = useLocation();

  return (
    <nav>
      <MenuContainer>
        {props.menu.map(
          (globalMenuItem) =>
            location.pathname.startsWith(globalMenuItem.link) &&
            globalMenuItem.localMenu?.map(
              (localMenuItem) =>
                location.pathname.startsWith(localMenuItem.link) &&
                localMenuItem.localSubMenu?.map((localSubMenuItem) => (
                  <MenuItem menuItem={localSubMenuItem} />
                ))
            )
        )}
      </MenuContainer>
    </nav>
  );
};

export default LocalSubMenuBar;
