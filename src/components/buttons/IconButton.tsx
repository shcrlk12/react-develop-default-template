import { SvgIconProps } from "@mui/material";
import clsx from "clsx";

interface IconButtonProps {
  icon: React.ComponentType<SvgIconProps>;
  title: string;
  onClick?: () => void;
  className?: string;
}

export const IconButton = ({
  icon: Icon,
  title,
  onClick,
  className,
}: IconButtonProps) => (
  <button
    className={clsx(
      `h-10 w-10
        flex items-center justify-center 
        bg-white rounded-lg 
        shadow-sm hover:shadow-md
        border border-indigo-100
        transition-all
        hover:-translate-y-0.5
        duration-300
        cursor-pointer`,
      className
    )}
    title={title}
    onClick={onClick}
  >
    <Icon className="text-lg" />
  </button>
);
