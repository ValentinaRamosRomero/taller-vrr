import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ autenticado, children }) => {
  if (autenticado) {
    return children;
  } else {
    return <Navigate to={"/"}/>
  }
};

export default ProtectedRoute;
