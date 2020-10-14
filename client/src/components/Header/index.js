import React from 'react'
import Navbar from 'react-bootstrap/Navbar'

// this props should be the username as given from the DB, NOT directly from login form.

function myNav (props) {
    return (
        <Navbar>
            <Navbar.Brand>Welcome, {props.username}</Navbar.Brand>
        </Navbar>
    )
}

export default myNav