import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './Components/Pages/HomePage'
import { ErrorPage } from './Components/Pages/ErrorPage'
import { NewPost } from './Components/Pages/NewPost'
import Login from './Components/Pages/Login'
import ProtectedRoutes from './middlewares/ProtectedRoutes'
import FormAuthor from './Components/Pages/FormAuthor'
import { Success } from './Components/Pages/Success'

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route>
                        <Route exact path="/" element={<HomePage />} />
                        {/* <Route exact path="/login" element={<Login />}/> */}
                        <Route exact path="/newpost" element={<NewPost />} />
                        <Route exact path="/form" element={<FormAuthor />} />
                        <Route exact path="/success" element={<Success />} />
                        <Route element={<ProtectedRoutes />}>
                            //? solo se siamo loggati possiamo creare un nuovo
                            
                        </Route>

                        <Route path="*" element={<ErrorPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>

            <Login />
        </>
    )
}

export default App
