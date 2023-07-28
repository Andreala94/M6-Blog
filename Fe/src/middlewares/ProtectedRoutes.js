import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";
import Login from "../Components/Pages/Login";
import { Outlet, useNavigate } from "react-router-dom";

const auth = () =>{
    return JSON.parse(localStorage.getItem("userLoggedIn"));
};


//! decodifica la sessione  ( cioe il token)

const useSession = () => {
    const session = auth();
    const decodeSession = session ? jwtDecode(session) : null;
   
    const navigate = useNavigate();

    useEffect(() => {
        if(!session){
            navigate("/", {replace: true});  // replace true consente di non andare avanti o dientro il tuo brosware
        }

    }, [navigate, session]);

    // ritorna l'oggetto decodificato
    
    return decodeSession;
};

const ProtectedRoutes = () => {
    const isAuthorized = auth();
    const session = useSession();

    return isAuthorized ? <Outlet /> : <Login />
}

export default ProtectedRoutes
