/**
 * useNavigationTo.tsx
 * @description A hook that navigates to a given path by authenticating the user.
 */
import { useNavigate } from "react-router-dom";

const useNavigationTo = () => {
  const navigate = useNavigate();

  return (to: string) => {
    navigate(to);
  };
};

export default useNavigationTo;
