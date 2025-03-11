import { GlobalMenuItem } from "@src/configs/types";
import LocalSubMenuBar from "./LocalSubMenuBar";
import { useLocation } from "react-router-dom";
import MenuItem from "./MenuItem";
import MenuContainer from "./MenuContainer";

type SubHeaderProps = {
  menu: GlobalMenuItem[];
};

const LocalMenuBar = (props: SubHeaderProps) => {
  const location = useLocation();

  return (
    <nav>
      <MenuContainer className="bg-[#42A5f5]">
        {props.menu.map(
          (globalMenuItem) =>
            location.pathname.startsWith(globalMenuItem.link) &&
            globalMenuItem.localMenu?.map((localMenuItem) => (
              <MenuItem menuItem={localMenuItem} />
            ))
        )}
      </MenuContainer>
      <LocalSubMenuBar menu={props.menu} />
    </nav>
  );
};

export default LocalMenuBar;
