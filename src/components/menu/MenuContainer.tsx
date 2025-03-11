import clsx from "clsx";
import { ReactNode } from "react";

interface MenuContainerProps {
  children: ReactNode;
  className?: string;
}

const MenuContainer = ({ children, className = "" }: MenuContainerProps) => {
  return (
    <ul
      className={clsx(
        "flex w-full h-8 border-b-sky-800 border-b-[1px] border-solid",
        className
      )}
    >
      {children}
    </ul>
  );
};

export default MenuContainer;
