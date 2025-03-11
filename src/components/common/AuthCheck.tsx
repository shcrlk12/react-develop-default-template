import { ROUTES } from "@src/configs";
import { Authority } from "@src/configs/authority";
import React from "react";
import { Navigate } from "react-router-dom";

type AuthCheckProps = {
  component: React.ReactNode;
  requiredRole: Authority;
};

const AuthCheck = (props: AuthCheckProps) => {
  const userRole = Authority.Admin;

  const checkRole = (userRole: Authority, requiredRole: Authority): boolean => {
    return userRole >= requiredRole;
  };

  return checkRole(userRole, props.requiredRole) ? (
    props.component
  ) : (
    <Navigate to={ROUTES.LOGIN.URL} replace />
  );
};

export default AuthCheck;
