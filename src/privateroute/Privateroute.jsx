import { useContext } from "react";
import { AuthContext } from "../assets/provider/Authprovider";
import { Form, Navigate, useLocation } from "react-router-dom";


const Privateroute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)
    const location = useLocation()


    if (user) {
        return children
    }

    if (loading) {
        return <span className="loading loading-bars loading-md"></span>
    }
    return <Navigate to="/login" state={{ Form: location }} replace></Navigate>
};

export default Privateroute;