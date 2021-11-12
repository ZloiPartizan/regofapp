import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Signin from './components/auth/SignIn'
import Signup from './components/auth/SignUp'
import Todos from './components/todos/Todos'
import Navbar from './components/navBar/NavBar'
import { loadUser } from "./store/actions/authActions"

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadUser())
  }, [dispatch])

  return (
    <div>
      <BrowserRouter>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route path='/signin' component={Signin} />
          <Route path='/signup' component={Signup} />
          <Route path='/' exact component={Todos} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
