import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../hooks/useAuthStatus";

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus();

    // if(!loggedIn){
    //     return 
    // }

    return loggedIn ? <Navigate to='/new-ticket'/> : <Navigate to='/login'/>
}

export default PrivateRoute
