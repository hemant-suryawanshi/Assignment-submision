import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../contexts/Authcontext";

export const PrivateComponent = ({ children }) => {
  const { isAuth } = useContext(AuthContext);
  if (!isAuth) {
    return <Navigate to="/login" replace={false} />;
  }

  return children;
};
