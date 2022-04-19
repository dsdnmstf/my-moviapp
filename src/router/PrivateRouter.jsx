import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const PrivateRouter = () => {
  const { currentUser } = useContext(AuthContext);
  const isLogin = true;

  return currentUser ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ isLogin: true }} />
  );
};

export default PrivateRouter;
