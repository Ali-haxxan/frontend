import { Navigate } from "react-router-dom";

const ProtectedRoute = (props,{ children }) => {
const isAuth= props.isAuth
console.log(props.isAuth)
return isAuth === true ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;