import React from 'react'
import Login from '../../components/Login'

function LoginPage(props) {

    return <Login
        loginUser={props.loginUser}
        loggedIn={props.loggedIn}
        username={props.username}
        userid={props.userid}
    />
}

export default LoginPage
