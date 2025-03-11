import { LocalMenuItem, LocalSubMenuItem } from "@src/configs/types";
import useNavigationTo from "@src/hooks/useNavigationTo";
import clsx from "clsx";

type MenuItemProps = {
  menuItem: LocalMenuItem | LocalSubMenuItem;
  className?: string;
};

const MenuItem = (props: MenuItemProps) => {
  const navTo = useNavigationTo();

  const isActive = location.pathname.startsWith(props.menuItem.link);

  return (
    <li>
      <button
        onClick={() => navTo(props.menuItem.link)}
        className={clsx(
          "flex justify-center items-center px-10 text-white text-sm font-bold h-full cursor-pointer hover:bg-sky-950 hover:scale-105 transaction-all duration-200 border-r-[1px] border-solid border-sky-950",
          { "selected-menu": isActive },
          props.className
        )}
      >
        {props.menuItem.title}
      </button>
    </li>
  );
};

export default MenuItem;
