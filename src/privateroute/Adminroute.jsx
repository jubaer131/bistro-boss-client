import { Navigate, useLocation } from "react-router-dom";
import UseAuth from "../assets/UseAuth";
import UseAdmin from "../hooks/UseAdmin";


const Adminroute = ({ children }) => {

    const [isAdmin, isAdminLoading] = UseAdmin()
    const { user, loading } = UseAuth()
    const location = useLocation()



    if (user && isAdmin) {
        return children;
    }

    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>


}

export default Adminroute;