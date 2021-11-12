import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../navBar/NavBar.css'
import { Link, useHistory } from 'react-router-dom'
import { signOut } from "../../store/actions/authActions"

const Navbar = () => {
    const state = useSelector(state => state)
    const auth = useSelector(state => state.auth)
    console.log(state)
    const history = useHistory()
    const dispatch = useDispatch()


    const handleSignOut = () => {
        dispatch(signOut())
        history.push('/signin')
    }

    return (
        <div>
            <div id="sidebar">
                <div className="mui--text-white mui--text-display1 mui--align-vertical">
                    <Link to='' className="linkText"
                        style={{ textDecoration: 'none' }}>
                        <h2 id="textBar">Учет заявок</h2>
                        <br />
                        <small className="author">
                            ГК "Новополоцк"
                        </small>
                    </Link>
                    {auth._id ? (
                        <>
                            <small className="author"
                                id="author">
                                {auth.name}
                            </small>

                            <button
                                className="mui-btn mui-btn--accent"
                                id="modal-btn"
                                onClick={() => handleSignOut()}>
                                Выход
                            </button>
                        </>
                    ) : (
                        <>
                           
                            <button className="mui-btn mui-btn--accent" id="modal-btn">
                                <Link
                                    to='/signin'
                                    className="linkText"
                                    style={{ textDecoration: 'none' }}>
                                    Авторизация
                                </Link>
                            </button>
                        </>
                    )
                    }
                </div>
            </div>

            <div id="content" className="mui-container-fluid">
                <div className="mui-row">
                    <div className="mui-col-sm-10 mui-col-sm-offset-1">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar