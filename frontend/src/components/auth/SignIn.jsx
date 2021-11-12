import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"

import { signIn } from "../../store/actions/authActions"

import "./SignIn.css"
// import { BrowserRouter, Switch, Route, Link } from "react-router-dom"


const Signin = () => {
    const auth = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [creds, setCreds] = useState({
        email: "",
        password: ""
    })

const handleSubmit = (e) =>{
    e.preventDefault()
    dispatch(signIn(creds))
    setCreds({
        email: "",
        password: "",
    })
}

if (auth._id) return <Redirect to = "/" />

    return (
            <div className="mui-container">
            
                <div className="AuthPage">
                    <h4>Авторизация</h4>
                    <hr/>
                    <form action="" 
                    className="mui-form" 
                    autoComplete="off"
                    onSubmit = {handleSubmit}
                    >
                        
                            <div className="mui-textfield">
                                <input
                                    id = "enter-email"
                                    type="email"
                                    name="email"
                                    className="validate"
                                    placeholder="логин"
                                    value = {creds.email}
                                    onChange = {(e) => setCreds({...creds, email: e.target.value})}
                                />
                            </div>
                            <div className="mui-textfield">
                                <input
                                    id = "enter-password"
                                    type="password"
                                    name="password"
                                    className="validate"
                                    placeholder="пароль"
                                    value = {creds.password}
                                    onChange = {(e) => setCreds({...creds, password: e.target.value})}
                                />
                            </div>
                        
                        <div className="row">
                            <button className="mui-btn mui-btn--raised authBtn">Войти</button>
                        </div>
                        {/* <a to="/registration" className="btn-outline btn-reg">Нет акаунта?</a> */}
                    </form>
                </div>
            </div>
    )
}

export default Signin