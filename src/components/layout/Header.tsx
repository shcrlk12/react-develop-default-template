import { ReactNode } from "react";

interface HeaderProps {
  logo: ReactNode;
  children: ReactNode;
}

export const Header = ({ logo, children }: HeaderProps) => (
  <header className="bg-white shadow-md">
    <div className="flex justify-between items-center h-11 px-7">
      {logo}
      <div className="flex items-center gap-6">{children}</div>
    </div>
  </header>
);
