import { GlobalMenuItem } from "@src/configs/menu";
import clsx from "clsx";
import { useLocation } from "react-router-dom";
import useNavigationTo from "src/hooks/useNavigationTo";

/**Types */
type DropDownMenuProps = {
  menu: GlobalMenuItem[];
};

/**Menu Component */
const DropDownMenu = (props: DropDownMenuProps) => {
  const navTo = useNavigationTo();
  const location = useLocation();

  return (
    <nav>
      <ul className="w-full">
        {props.menu.map((globalMenuItem) => {
          const isActive = location.pathname.startsWith(globalMenuItem.link);

          return (
            <li
              key={globalMenuItem.title}
              className="relative float-left list-none group"
            >
              <div className="block overflow-hidden h-11">
                <a
                  onClick={() => navTo(globalMenuItem.link)}
                  className={clsx(
                    "flex items-center text-sky-400 h-full font-bold text-sm py-2 px-6 text-center no-underline transition-all duration-200 cursor-pointer hover:bg-sky-950 hover:scale-105",
                    { "selected-menu": isActive }
                  )}
                >
                  {globalMenuItem.title}
                </a>
              </div>
              <ul className="absolute left-0 top-11 w-full opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
                {globalMenuItem.localMenu?.map((subItem) => (
                  <li key={subItem.title} className="w-full">
                    <a
                      onClick={() => navTo(subItem.link)}
                      className="block bg-sky-700 text-white text-xs py-2 px-6 transition-all duration-200 cursor-pointer hover:bg-sky-950 hover:scale-105"
                    >
                      {subItem.title}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
export default DropDownMenu;
