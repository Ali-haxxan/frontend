import { Navigate } from "react-router-dom";

const RedirectRoutes = (props,{ children }) => {
const isAuth= props.isAuth
return isAuth===false ? children : <Navigate to="/dashboard" replace />;
};

export default RedirectRoutes;