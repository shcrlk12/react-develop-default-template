import { LocalMenuItem, LocalSubMenuItem } from "@src/configs/types";
import useNavigationTo from "@src/hooks/useNavigationTo";
import clsx from "clsx";

type MenuItemProps = {
  menuItem: LocalMenuItem | LocalSubMenuItem;
};

const MenuItem = (props: MenuItemProps) => {
  const navTo = useNavigationTo();

  const isActive = location.pathname.startsWith(props.menuItem.link);

  return (
    <li>
      <button
        onClick={() => navTo(props.menuItem.link)}
        className={clsx(
          "flex justify-center items-center px-10 text-white text-sm font-bold h-full cursor-pointer hover:bg-black hover:scale-105 transaction-all duration-200",
          { "selected-menu": isActive }
        )}
      >
        {props.menuItem.title}
      </button>
    </li>
  );
};

export default MenuItem;
