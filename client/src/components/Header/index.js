import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

// props here are from App // Main

function myNav (props) {
    return (
        <Navbar>
            <Navbar.Brand>Welcome, {props.username}</Navbar.Brand>
        </Navbar>
    )
}

export default myNav