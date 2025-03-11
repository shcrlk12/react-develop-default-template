import { ReactNode } from "react";

interface MenuContainerProps {
  children: ReactNode;
}

const MenuContainer = (props: MenuContainerProps) => {
  return <ul className="flex w-full h-8 bg-primary">{props.children}</ul>;
};

export default MenuContainer;
