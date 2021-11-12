import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { signUp } from '../../store/actions/authActions'


const SignUp = () => {

    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(user));
        setUser({ name: "", email: "", password: "" })
    }

    if (!auth._id) return <Redirect to="/signin" />

    return (
        <div className="mui-container">
            <div className="AuthPage">
                <h4>Регистрация</h4>
                <hr />
                <form action=""
                    className="mui-form"
                    autoComplete="off"
                    onSubmit={handleSubmit}>

                    <div className="mui-textfield">
                        <input
                            id="enter-name"
                            type="name"
                            name="name"
                           
                            placeholder="имя"
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })}
                        />
                    </div>
                    <div className="mui-textfield">
                        <input
                            id="enter-email"
                            type="email"
                            name="email"
                            
                            placeholder="логин (формат почты)"
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                        />
                    </div>
                    <div className="mui-textfield">
                        <input
                            id="enter-password"
                            type="password"
                            name="password"
                            className="validate"
                            placeholder="пароль"
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })}
                        />
                    </div>

                    <div className="row">
                        <button
                            type="submit"
                            className="mui-btn mui-btn--raised authBtn">Зарегистрировать</button>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default SignUp