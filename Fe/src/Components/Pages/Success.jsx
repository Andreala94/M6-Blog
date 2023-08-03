import React from 'react';
import { useLocation, useParams  } from 'react-router-dom';

export const Success = () => {
    const location = useLocation();
    const urlParams = new URLSearchParams(location.search);
    const  token = urlParams.get("token");

    const saveUserToLocalStorage =() =>{
        if (token) {
            localStorage.setItem("userLoggedIn", JSON.stringify(token));
        }
    }
  return (
    <div>Success</div>
  )
}
