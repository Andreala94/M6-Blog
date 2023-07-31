import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogin = () => {
        const isValidUser = username === '' && password === '';

        if(isValidUser){
            setIsLoggedIn(true)
        }else{
            alert ('Email o password sono errati!')
        }

    }

    const handleLogout = () =>{
        setIsLoggedIn(false)
    }

    if (isLoggedIn){
        return(
            <div>
                <h1>Benvenuto/a, {username}!</h1>
                <Button onClick={handleLogout}>Logout</Button> 
            </div>
        )
    }

}
 export default Login