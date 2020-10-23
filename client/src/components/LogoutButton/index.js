import React from 'react'
import Button from 'react-bootstrap/Button'

function logOutButton (props) {
    console.log(props.logoutUser + ' in the logoutButton');

    return (
        <Button 
            type="button" 
            // formMethod='get'
            className='btn btn-sm btn-secondary'
            // formAction='/logout'
        >
            Log Out
        </Button>
    )
}

export default logOutButton